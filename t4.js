/* eslint-disable no-restricted-syntax */
const parser = require("@textlint/markdown-to-ast").parse;
const fs = require("fs");
const { chromium } = require("playwright");

// максимальная длина блока для перевода
const MAX_BLOCK_LENGTH = 2000;

/**
 * Пауза
 * @param {*} ms длительность паузы в мс
 */
function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms);
}

/**
 * Перевос английского на русский
 * @param {*} str английский источник
 * @returns русский первод
 */
const translate = async (str) => {
  const fromLang = "en";
  const toLang = "ru";

  const browser = await chromium.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--single-process",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--no-zygote",
      "--window-size=1920,1080",
    ],
  });

  // грузим браузер и страницу
  const page = await browser.newPage();
  await page.goto("https://www.deepl.com/en/translator");

  await page.getByRole("main");

  // выбираем нужные языки
  await page.locator("button[data-testid=translator-source-lang-btn]").click();
  await page
    .locator(`button[data-testid=translator-lang-option-${fromLang}]`)
    .click();
  await page.locator("button[data-testid=translator-target-lang-btn]").click();
  await page
    .locator(`button[data-testid=translator-lang-option-${toLang}]`)
    .click();

  // заполняем исходным текстом
  const pageFill = await page.locator(
    "div[aria-labelledby=translation-source-heading]"
  );
  await pageFill.fill(str);

  // ждем пока переведется
  const selector = "div[aria-labelledby=translation-results-heading] span";
  await page
    .mainFrame()
    .waitForFunction(
      (selector) => !!document.querySelector(selector),
      selector
    );

  // достаем результат
  const outputTextbox = await page.locator(
    "d-textarea[aria-labelledby=translation-results-heading]"
  );
  const res = await outputTextbox.allInnerTexts();

  // закрываем бразер и возвращаем результат
  await browser.close();

  return res[0].replace("\n\n", "\n");
};

// основной скрипт
(async () => {
  // загружаем и парсим маркдаун
  const inputPath = process.argv[2];
  const markdown = fs.readFileSync(inputPath, "utf8");

  const ast = parser(markdown);

  // какие блоки переводим
  const transTypes = ["Paragraph", "BlockQuote", "Header", "List"];

  // готовим блоки для перевода
  // ==========================
  const blocks = ast.children.reduce(
    (acc, curr) => {
      if (transTypes.includes(curr.type)) {
        // если текущий элемент нужно перевести
        if (
          acc[acc.length - 1].data.length + curr.raw.length <
            MAX_BLOCK_LENGTH &&
          acc[acc.length - 1].needTranslate
        ) {
          // длина текста не превышает граничения переводчика
          acc[acc.length - 1].data += `\n\n${curr.raw}`;
        } else {
          // длина превышает или предыдущий блок не нужно было переводить,
          // то делаем новый блок
          acc.push({
            needTranslate: true,
            data: curr.raw,
          });
        }
      } else {
        acc.push({
          needTranslate: false,
          data: curr.raw,
        });
      }
      return acc;
    },
    [
      {
        data: "",
        needTranslate: false,
      },
    ]
  );

  // переводим готовые блоки
  // ============================

  let translated = ""; // готовый перевод
  let index = 0; // сколько блоков перевдено

  for await (const block of blocks) {
    if (block.needTranslate) {
      // возможно понадобится пауза, чтоб
      // переводчик не принял нас за спамеров
      sleep(5000);

      try {
        const result = await translate(block.data);
        console.log(
          `Translated ${Math.round((100 * index) / blocks.length)}%: ${result}`
        );
        translated += `${result}\n\n`; // накапливаем перевденное
      } catch (e) {
        // перевод не получился, копируем непереведенный кусок
        console.log(`Error translate node ${index}: ${e}`);
        translated += `${block.data}\n\n`;
      }
    } else {
      // что переводить не нужно, так и сохраняем
      console.log(`Ignored node ${index}`);
      translated += `${block.data}\n\n`;
    }
    index += 1;
  }

  // сохраняем перевод в файл
  fs.writeFileSync(`ru.${inputPath}`, translated, "utf8");
  console.log(`===========================`);
})();
