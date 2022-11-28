define(['dart_sdk'], (function load__packages__qr__src__bit_buffer_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var bit_buffer = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $rightShift = dartx['>>'];
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $length = dartx.length;
  var $add = dartx.add;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:qr/src/bit_buffer.dart"];
  var _length = dart.privateName(bit_buffer, "_length");
  var _buffer = dart.privateName(bit_buffer, "_buffer");
  const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
  (Object_ListMixin$36.new = function() {
  }).prototype = Object_ListMixin$36.prototype;
  dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(core.bool));
  bit_buffer.QrBitBuffer = class QrBitBuffer extends Object_ListMixin$36 {
    static ['_#new#tearOff']() {
      return new bit_buffer.QrBitBuffer.new();
    }
    _set(index, value$) {
      let value = value$;
      core.bool.as(value);
      dart.throw(new core.UnsupportedError.new("cannot change"));
      return value$;
    }
    _get(index) {
      let bufIndex = (index / 8)[$truncate]();
      return (this[_buffer][$_get](bufIndex)[$rightShift](7 - index[$modulo](8)) & 1) === 1;
    }
    get length() {
      return this[_length];
    }
    set length(value) {
      return dart.throw(new core.UnsupportedError.new("Cannot change"));
    }
    getByte(index) {
      return this[_buffer][$_get](index);
    }
    put(number, length) {
      for (let i = 0; i < length; i = i + 1) {
        let bit = (number[$rightShift](length - i - 1) & 1) === 1;
        this.putBit(bit);
      }
    }
    putBit(bit) {
      let t0;
      let bufIndex = (this[_length] / 8)[$truncate]();
      if (this[_buffer][$length] <= bufIndex) {
        this[_buffer][$add](0);
      }
      if (bit) {
        t0 = this[_buffer];
        t0[$_set](bufIndex, (t0[$_get](bufIndex) | (128)[$rightShift](this[_length][$modulo](8))) >>> 0);
      }
      this[_length] = this[_length] + 1;
    }
  };
  (bit_buffer.QrBitBuffer.new = function() {
    this[_length] = 0;
    this[_buffer] = T.JSArrayOfint().of([]);
    ;
  }).prototype = bit_buffer.QrBitBuffer.prototype;
  dart.addTypeTests(bit_buffer.QrBitBuffer);
  dart.addTypeCaches(bit_buffer.QrBitBuffer);
  dart.setMethodSignature(bit_buffer.QrBitBuffer, () => ({
    __proto__: dart.getMethods(bit_buffer.QrBitBuffer.__proto__),
    _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
    [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
    _get: dart.fnType(core.bool, [core.int]),
    [$_get]: dart.fnType(core.bool, [core.int]),
    getByte: dart.fnType(core.int, [core.int]),
    put: dart.fnType(dart.void, [core.int, core.int]),
    putBit: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(bit_buffer.QrBitBuffer, () => ({
    __proto__: dart.getGetters(bit_buffer.QrBitBuffer.__proto__),
    length: core.int,
    [$length]: core.int
  }));
  dart.setSetterSignature(bit_buffer.QrBitBuffer, () => ({
    __proto__: dart.getSetters(bit_buffer.QrBitBuffer.__proto__),
    length: core.int,
    [$length]: core.int
  }));
  dart.setLibraryUri(bit_buffer.QrBitBuffer, I[0]);
  dart.setFieldSignature(bit_buffer.QrBitBuffer, () => ({
    __proto__: dart.getFields(bit_buffer.QrBitBuffer.__proto__),
    [_buffer]: dart.finalFieldType(core.List$(core.int)),
    [_length]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(bit_buffer.QrBitBuffer, ['_set', '_get']);
  dart.defineExtensionAccessors(bit_buffer.QrBitBuffer, ['length']);
  dart.trackLibraries("packages/qr/src/bit_buffer.dart", {
    "package:qr/src/bit_buffer.dart": bit_buffer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bit_buffer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;SASwB;UAAY;;AAC9B,iBAAM,8BAAiB;;IAAgB;SAGtB;AACb,qBAAiB,CAAN,KAAK,GAAI;AAC1B,YAAoD,EAA3C,AAAO,AAAW,AAAoB,qBAA9B,QAAQ,eAAM,AAAE,IAAE,AAAM,KAAD,UAAG,MAAM,OAAM;IACzD;;AAGkB;IAAO;eAGV;AAAU,wBAAM,8BAAiB;IAAgB;YAEhD;AAAU,YAAA,AAAO,sBAAC,KAAK;IAAC;QAE3B,QAAY;AACvB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,MAAM,EAAE,IAAA,AAAC,CAAA;AACrB,kBAAyC,CAAjC,AAAO,AAAqB,MAAtB,cAAK,AAAO,AAAI,MAAL,GAAG,CAAC,GAAG,KAAM,OAAM;AACvC,QAAX,YAAO,GAAG;;IAEd;WAEiB;;AACT,qBAAmB,CAAR,gBAAW;AAC5B,UAAI,AAAQ,AAAO,0BAAG,QAAQ;AACd,QAAd,AAAQ,oBAAI;;AAGd,UAAI,GAAG;AACqC,aAA1C;QAAO,UAAC,QAAQ,EAAE,CAAX,UAAC,QAAQ,IAAU,CAAL,kBAAS,AAAQ,uBAAE;;AAGjC,MAAT,gBAAA,AAAO,gBAAA;IACT;;;IAxCI,gBAAU;IAEU,gBAAO;;EAAE","file":"../../../../../../../../../../../packages/qr/src/bit_buffer.dart.lib.js"}');
  // Exports:
  return {
    src__bit_buffer: bit_buffer
  };
}));

//# sourceMappingURL=bit_buffer.dart.lib.js.map
