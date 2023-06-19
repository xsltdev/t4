/**
 * Inner links
{
  from: "",
  to: "",
},
 */
const replsInner = [
  {
    from: "{AbortSignal}",
    to: "[`<AbortSignal>`](globals.md#abortsignal)",
  },
  {
    from: "{Buffer}",
    to: "[`<Buffer>`](buffer.md#buffer)",
  },
  {
    from: "{Buffer\\[\\]}",
    to: "[`<Buffer[]>`](buffer.md#buffer)",
  },
  {
    from: "{EventEmitter}",
    to: "[`<EventEmitter>`](events.md#eventemitter)",
  },
  {
    from: "{FileHandle}",
    to: "[`<FileHandle>`](fs.md#filehandle)",
  },
  {
    from: "{fs.ReadStream}",
    to: "[`<fs.ReadStream>`](fs.md#fsreadstream)",
  },
  {
    from: "{fs.WriteStream}",
    to: "[`<fs.WriteStream>`](fs.md#fswritestream)",
  },
  {
    from: "{Stream}",
    to: "[`<Stream>`](stream.md#stream)",
  },
  {
    from: "{stream.Readable}",
    to: "[`<stream.Readable>`](stream.md#streamreadable)",
  },
  {
    from: "{ReadableStream}",
    to: "[`<ReadableStream>`](webstreams.md#readablestream)",
  },
  {
    from: "{URL}",
    to: "[`<URL>`](url.md#the-whatwg-url-api)",
  },
];

/**
 * MDN common types
 */
const replsMDNCommon = [
  {
    from: "{boolean}",
    to: "[`<boolean>`](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#Boolean_type)",
  },
  {
    from: "{integer}",
    to: "[`<integer>`](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#Number_type)",
  },
  {
    from: "{целое число}",
    to: "[`<integer>`](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#Number_type)",
  },
  {
    from: "{number}",
    to: "[`<number>`](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#Number_type)",
  },
  {
    from: "{null}",
    to: "[`<null>`](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#Null_type)",
  },
  {
    from: "{string}",
    to: "[`<string>`](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#String_type)",
  },
  {
    from: "{строка}",
    to: "[`<string>`](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#String_type)",
  },
];

/**
 * MDN Global Objects
 */
const replsMDNGlobalObjects = [
  {
    from: "{AggregateError}",
    to: "[`<AggregateError>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)",
  },
  {
    from: "{DataView}",
    to: "[`<DataView>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/DataView)",
  },
  {
    from: "{DataView\\[\\]}",
    to: "[`<DataView[]>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/DataView)",
  },
  {
    from: "{Date}",
    to: "[`<Date>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)",
  },
  {
    from: "{Ошибка}",
    to: "[`<Error>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)",
  },
  {
    from: "{Error}",
    to: "[`<Error>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)",
  },
  {
    from: "{Iterable}",
    to: "[`<Iterable>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)",
  },
  {
    from: "{Функция}",
    to: "[`<Function>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)",
  },
  {
    from: "{Function}",
    to: "[`<Function>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)",
  },
  {
    from: "{Object}",
    to: "[`<Object>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)",
  },
  {
    from: "{Promise}",
    to: "[`<Promise>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)",
  },
  {
    from: "{обещание}",
    to: "[`<Promise>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)",
  },
  {
    from: "{TypedArray}",
    to: "[`<TypedArray>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)",
  },
  {
    from: "{TypedArray\\[\\]}",
    to: "[`<TypedArray[]>`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)",
  },
];

/**
 * MDN API
 */
const replsMDNAPI = [
  {
    from: "{ArrayBufferView\\[\\]}",
    to: "[`<ArrayBufferView[]>`](https://developer.mozilla.org/docs/Web/API/ArrayBufferView)",
  },
];

/**
 * TC39
 */
const replsTC39 = [
  {
    from: "{AsyncIterable}",
    to: "[`<AsyncIterable>`](https://tc39.github.io/ecma262/#sec-asynciterable-interface)",
  },
  {
    from: "{AsyncIterator}",
    to: "[`<AsyncIterator>`](https://tc39.github.io/ecma262/#sec-asynciterator-interface)",
  },
];

const repls = [
  ...replsInner,
  ...replsMDNCommon,
  ...replsMDNGlobalObjects,
  ...replsMDNAPI,
  ...replsTC39,
];

export default repls;
