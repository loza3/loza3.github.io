define(['dart_sdk', 'packages/qr/src/bit_buffer.dart'], (function load__packages__qr__src__byte_dart(dart_sdk, packages__qr__src__bit_buffer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bit_buffer = packages__qr__src__bit_buffer$46dart.src__bit_buffer;
  var byte = Object.create(dart.library);
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $length = dartx.length;
  var $codeUnits = dartx.codeUnits;
  var $_set = dartx._set;
  var $modulo = dartx['%'];
  var $_get = dartx._get;
  var $last = dartx.last;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:qr/src/byte.dart"];
  var mode = dart.privateName(byte, "QrByte.mode");
  var _data$ = dart.privateName(byte, "_data");
  byte.QrByte = class QrByte extends core.Object {
    get mode() {
      return this[mode];
    }
    set mode(value) {
      super.mode = value;
    }
    static new(input) {
      return new byte.QrByte.fromUint8List(convert.utf8.encoder.convert(input));
    }
    static ['_#new#tearOff'](input) {
      return byte.QrByte.new(input);
    }
    static ['_#fromUint8List#tearOff'](input) {
      return new byte.QrByte.fromUint8List(input);
    }
    static fromByteData(input) {
      return new byte.QrByte.fromUint8List(input[$buffer][$asUint8List]());
    }
    static ['_#fromByteData#tearOff'](input) {
      return byte.QrByte.fromByteData(input);
    }
    get length() {
      return this[_data$][$length];
    }
    write(buffer) {
      for (let v of this[_data$]) {
        buffer.put(v, 8);
      }
    }
  };
  (byte.QrByte.fromUint8List = function(input) {
    this[mode] = 4;
    this[_data$] = input;
    ;
  }).prototype = byte.QrByte.prototype;
  dart.addTypeTests(byte.QrByte);
  dart.addTypeCaches(byte.QrByte);
  dart.setMethodSignature(byte.QrByte, () => ({
    __proto__: dart.getMethods(byte.QrByte.__proto__),
    write: dart.fnType(dart.void, [bit_buffer.QrBitBuffer])
  }));
  dart.setStaticMethodSignature(byte.QrByte, () => ['new', 'fromByteData']);
  dart.setGetterSignature(byte.QrByte, () => ({
    __proto__: dart.getGetters(byte.QrByte.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(byte.QrByte, I[0]);
  dart.setFieldSignature(byte.QrByte, () => ({
    __proto__: dart.getFields(byte.QrByte.__proto__),
    mode: dart.finalFieldType(core.int),
    [_data$]: dart.finalFieldType(typed_data.Uint8List)
  }));
  var mode$ = dart.privateName(byte, "QrNumeric.mode");
  byte.QrNumeric = class QrNumeric extends core.Object {
    get mode() {
      return this[mode$];
    }
    set mode(value) {
      super.mode = value;
    }
    static fromString(numberString) {
      let t0;
      let newList = _native_typed_data.NativeUint8List.new(numberString.length);
      let count = 0;
      for (let char of numberString[$codeUnits]) {
        if (char < 48 || char > 57) {
          dart.throw(new core.ArgumentError.new("string can only contain alpha numeric 0-9"));
        }
        newList[$_set]((t0 = count, count = t0 + 1, t0), char - 48);
      }
      return new byte.QrNumeric.__(newList);
    }
    static ['_#fromString#tearOff'](numberString) {
      return byte.QrNumeric.fromString(numberString);
    }
    static ['_#_#tearOff'](_data) {
      return new byte.QrNumeric.__(_data);
    }
    write(buffer) {
      let leftOver = this[_data$][$length][$modulo](3);
      let efficientGrab = this[_data$][$length] - leftOver;
      for (let i = 0; i < efficientGrab; i = i + 3) {
        let encoded = this[_data$][$_get](i) * 100 + this[_data$][$_get](i + 1) * 10 + this[_data$][$_get](i + 2);
        buffer.put(encoded, 10);
      }
      if (leftOver > 1) {
        buffer.put(this[_data$][$_get](this[_data$][$length] - 2) * 10 + this[_data$][$_get](this[_data$][$length] - 1), 7);
      } else if (leftOver > 0) {
        buffer.put(this[_data$][$last], 4);
      }
    }
    get length() {
      return this[_data$][$length];
    }
  };
  (byte.QrNumeric.__ = function(_data) {
    this[mode$] = 1;
    this[_data$] = _data;
    ;
  }).prototype = byte.QrNumeric.prototype;
  dart.addTypeTests(byte.QrNumeric);
  dart.addTypeCaches(byte.QrNumeric);
  byte.QrNumeric[dart.implements] = () => [byte.QrByte];
  dart.setMethodSignature(byte.QrNumeric, () => ({
    __proto__: dart.getMethods(byte.QrNumeric.__proto__),
    write: dart.fnType(dart.void, [bit_buffer.QrBitBuffer])
  }));
  dart.setStaticMethodSignature(byte.QrNumeric, () => ['fromString']);
  dart.setGetterSignature(byte.QrNumeric, () => ({
    __proto__: dart.getGetters(byte.QrNumeric.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(byte.QrNumeric, I[0]);
  dart.setFieldSignature(byte.QrNumeric, () => ({
    __proto__: dart.getFields(byte.QrNumeric.__proto__),
    [_data$]: dart.finalFieldType(typed_data.Uint8List),
    mode: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/qr/src/byte.dart", {
    "package:qr/src/byte.dart": byte
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["byte.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IAOY;;;;;;eAGY;AAClB,YAAO,+BAAc,AAAK,AAAQ,6BAAQ,KAAK;IAAE;;;;;;;wBAIhB;AACjC,YAAO,+BAAc,AAAM,AAAO,KAAR;IAAsB;;;;;AAElC,YAAA,AAAM;IAAM;UAEP;AACrB,eAAW,IAAK;AACE,QAAhB,AAAO,MAAD,KAAK,CAAC,EAAE;;IAElB;;wCAX+B;IANrB;IAMoC,eAAE,KAAK;;;;;;;;;;;;;;;;;;;;;;IAkC3C;;;;;;sBAlB0B;;AAC5B,oBAAU,uCAAU,AAAa,YAAD;AAClC,kBAAQ;AACZ,eAAS,OAAQ,AAAa,aAAD;AAC3B,YAAI,AAAK,IAAD,GAAG,MAAQ,AAAK,IAAD,GAAG;AACwC,UAAhE,WAAM,2BAAc;;AAEQ,QAA9B,AAAO,OAAA,SAAM,KAAL,KAAK,uBAAM,AAAK,IAAD,GAAG;;AAE5B,YAAiB,uBAAE,OAAO;IAC5B;;;;;;;UAWuB;AAGf,qBAAW,AAAM,AAAO,+BAAE;AAE1B,0BAAgB,AAAM,AAAO,wBAAE,QAAQ;AAC7C,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,aAAa,EAAE,IAAA,AAAE,CAAD,GAAI;AAChC,sBAAU,AAAK,AAAI,AAAM,AAAoB,oBAA7B,CAAC,IAAI,MAAM,AAAK,AAAQ,oBAAP,AAAE,CAAD,GAAG,KAAK,KAAK,AAAK,oBAAC,AAAE,CAAD,GAAG;AACxC,QAAvB,AAAO,MAAD,KAAK,OAAO,EAAE;;AAEtB,UAAI,AAAS,QAAD,GAAG;AAEwD,QAArE,AAAO,MAAD,KAAK,AAAK,AAAmB,AAAK,oBAAvB,AAAM,AAAO,wBAAE,KAAK,KAAK,AAAK,oBAAC,AAAM,AAAO,wBAAE,IAAI;YAC9D,KAAI,AAAS,QAAD,GAAG;AAEK,QAAzB,AAAO,MAAD,KAAK,AAAM,qBAAM;;IAE3B;;AAIkB,YAAA,AAAM;IAAM;;gCA9Bb;IAMP;IANO;;EAAM","file":"../../../../../../../../../../../packages/qr/src/byte.dart.lib.js"}');
  // Exports:
  return {
    src__byte: byte
  };
}));

//# sourceMappingURL=byte.dart.lib.js.map
