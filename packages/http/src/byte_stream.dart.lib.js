define(['dart_sdk'], (function load__packages__http__src__byte_stream_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var byte_stream = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    StreamOfListOfint: () => (T.StreamOfListOfint = dart.constFn(async.Stream$(T.ListOfint())))(),
    CompleterOfUint8List: () => (T.CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))(),
    ListOfintTovoid: () => (T.ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [T.ListOfint()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: false
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:http/src/byte_stream.dart"];
  var Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static ['_#new#tearOff'](stream) {
      return new byte_stream.ByteStream.new(stream);
    }
    static fromBytes(bytes) {
      return new byte_stream.ByteStream.new(T.StreamOfListOfint().value(bytes));
    }
    static ['_#fromBytes#tearOff'](bytes) {
      return byte_stream.ByteStream.fromBytes(bytes);
    }
    toBytes() {
      let completer = T.CompleterOfUint8List().new();
      let sink = new convert._ByteCallbackSink.new(dart.fn(bytes => completer.complete(_native_typed_data.NativeUint8List.fromList(bytes)), T.ListOfintTovoid()));
      this.listen(T.ListOfintTovoid().as(dart.bind(sink, 'add')), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding = C[0] || CT.C0) {
      return encoding.decodeStream(this);
    }
    toStringStream(encoding = C[0] || CT.C0) {
      return encoding.decoder.bind(this);
    }
  };
  (byte_stream.ByteStream.new = function(stream) {
    byte_stream.ByteStream.__proto__.new.call(this, stream);
    ;
  }).prototype = byte_stream.ByteStream.prototype;
  dart.addTypeTests(byte_stream.ByteStream);
  dart.addTypeCaches(byte_stream.ByteStream);
  dart.setMethodSignature(byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  dart.setStaticMethodSignature(byte_stream.ByteStream, () => ['fromBytes']);
  dart.setLibraryUri(byte_stream.ByteStream, I[0]);
  dart.trackLibraries("packages/http/src/byte_stream.dart", {
    "package:http/src/byte_stream.dart": byte_stream
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["byte_stream.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBAcyC;AACnC,4CAAkB,4BAAM,KAAK;IAAE;;;;;AAI7B,sBAAY;AACZ,iBAA0B,kCAC1B,QAAC,SAAU,AAAU,SAAD,UAAoB,4CAAS,KAAK;AAIlC,MAHxB,mCAAY,UAAL,IAAI,qBACY,UAAV,SAAS,4BACL,UAAL,IAAI,2BACG;AACnB,YAAO,AAAU,UAAD;IAClB;kBAIuC;AACnC,YAAA,AAAS,SAAD,cAAc;IAAK;mBAES;AACpC,YAAA,AAAS,AAAQ,SAAT,cAAc;IAAK;;yCAzBI;AAAU,oDAAM,MAAM;;EAAC","file":"../../../../../../../../../../../packages/http/src/byte_stream.dart.lib.js"}');
  // Exports:
  return {
    src__byte_stream: byte_stream
  };
}));

//# sourceMappingURL=byte_stream.dart.lib.js.map
