define(['dart_sdk', 'packages/http/src/byte_stream.dart'], (function load__packages__http__src__utils_dart(dart_sdk, packages__http__src__byte_stream$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const byte_stream = packages__http__src__byte_stream$46dart.src__byte_stream;
  var utils = Object.create(dart.library);
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $join = dartx.join;
  var $buffer = dartx.buffer;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    JSArrayOfListOfString: () => (T.JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(T.ListOfString())))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    StringAndStringTovoid: () => (T.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    ListOfStringToString: () => (T.ListOfStringToString = dart.constFn(dart.fnType(core.String, [T.ListOfString()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: convert.Latin1Codec.prototype,
        [Latin1Codec__allowInvalid]: false
      });
    }
  }, false);
  var C = [void 0];
  var Latin1Codec__allowInvalid = dart.privateName(convert, "Latin1Codec._allowInvalid");
  utils.mapToQuery = function mapToQuery(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = T.JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => {
      let t0, t0$;
      return pairs[$add](T.JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: (t0 = encoding, t0 == null ? convert.utf8 : t0)}), core.Uri.encodeQueryComponent(value, {encoding: (t0$ = encoding, t0$ == null ? convert.utf8 : t0$)})]));
    }, T.StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => pair[$_get](0) + "=" + pair[$_get](1), T.ListOfStringToString()))[$join]("&");
  };
  utils.encodingForCharset = function encodingForCharset(charset, fallback = C[0] || CT.C0) {
    let t0;
    if (charset == null) return fallback;
    t0 = convert.Encoding.getByName(charset);
    return t0 == null ? fallback : t0;
  };
  utils.requiredEncodingForCharset = function requiredEncodingForCharset(charset) {
    let t0;
    t0 = convert.Encoding.getByName(charset);
    return t0 == null ? dart.throw(new core.FormatException.new("Unsupported encoding \"" + charset + "\".")) : t0;
  };
  utils.isPlainAscii = function isPlainAscii(string) {
    return utils._asciiOnly.hasMatch(string);
  };
  utils.toUint8List = function toUint8List(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return _native_typed_data.NativeUint8List.fromList(input);
  };
  utils.toByteStream = function toByteStream(stream) {
    if (byte_stream.ByteStream.is(stream)) return stream;
    return new byte_stream.ByteStream.new(stream);
  };
  utils.onDone = function onDone(T, stream, onDone) {
    return stream.transform(T, new (async._StreamHandlerTransformer$(T, T)).new({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))}));
  };
  dart.defineLazy(utils, {
    /*utils._asciiOnly*/get _asciiOnly() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  }, false);
  dart.trackLibraries("packages/http/src/utils.dart", {
    "package:http/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAcsC;QAAgB;AAChD,gBAAsB;AAInB,IAHP,AAAI,GAAD,WAAS,SAAC,KAAK;;AAAU,YAAA,AAAM,MAAD,OAAK,wBAC5B,8BAAqB,GAAG,cAAqB,KAAT,QAAQ,EAAR,aAAY,sBAChD,8BAAqB,KAAK,cAAqB,MAAT,QAAQ,EAAR,cAAY;;AAE5D,UAAO,AAAM,AAAuC,MAAxC,oBAAK,QAAC,QAAY,AAAI,AAAgB,IAAhB,QAAC,KAAG,MAAG,AAAI,IAAA,QAAC,sCAAW;EAC3D;yDAMoC,SAAmB;;AACrD,QAAI,AAAQ,OAAD,UAAU,MAAO,SAAQ;AACpC,SAAgB,2BAAU,OAAO;UAAjB,cAAsB,QAAQ;EAChD;yEAQ2C;;AACvC,SAAS,2BAAU,OAAO;UAAjB,cACR,WAAM,6BAAgB,AAAkC,4BAAV,OAAO;EAAK;6CAQtC;AAAW,UAAA,AAAW,2BAAS,MAAM;EAAC;2CAK/B;AAC9B,QAAU,wBAAN,KAAK,GAAe,MAAO,MAAK;AACpC,QAAU,wBAAN,KAAK;AAEP,YAAiB,2BAAY,AAAc,wBAApB,KAAK;;AAE9B,UAAiB,6CAAS,KAAK;EACjC;6CAE0C;AACxC,QAAW,0BAAP,MAAM,GAAgB,MAAO,OAAM;AACvC,UAAO,gCAAW,MAAM;EAC1B;oCAM8B,QAAwB;AAClD,UAAA,AAAO,OAAD,cAA6B,8DAAyB,QAAC;AAC/C,QAAZ,AAAK,IAAD;AACI,QAAR,AAAM,MAAA;;EACL;;MA/BD,gBAAU;YAAG,iBAAO","file":"../../../../../../../../../../../packages/http/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
