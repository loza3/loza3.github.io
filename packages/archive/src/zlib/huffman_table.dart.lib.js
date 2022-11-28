define(['dart_sdk'], (function load__packages__archive__src__zlib__huffman_table_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _internal = dart_sdk._internal;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var huffman_table = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $leftShift = dartx['<<'];
  var $rightShift = dartx['>>'];
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:archive/src/zlib/huffman_table.dart"];
  var maxCodeLength = dart.privateName(huffman_table, "HuffmanTable.maxCodeLength");
  var minCodeLength = dart.privateName(huffman_table, "HuffmanTable.minCodeLength");
  var __HuffmanTable_table = dart.privateName(huffman_table, "_#HuffmanTable#table");
  huffman_table.HuffmanTable = class HuffmanTable extends core.Object {
    get maxCodeLength() {
      return this[maxCodeLength];
    }
    set maxCodeLength(value) {
      this[maxCodeLength] = value;
    }
    get minCodeLength() {
      return this[minCodeLength];
    }
    set minCodeLength(value) {
      this[minCodeLength] = value;
    }
    get table() {
      let t0;
      t0 = this[__HuffmanTable_table];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("table")) : t0;
    }
    set table(table$35param) {
      this[__HuffmanTable_table] = table$35param;
    }
    static ['_#new#tearOff'](lengths) {
      return new huffman_table.HuffmanTable.new(lengths);
    }
  };
  (huffman_table.HuffmanTable.new = function(lengths) {
    this[__HuffmanTable_table] = null;
    this[maxCodeLength] = 0;
    this[minCodeLength] = 2147483647;
    let listSize = lengths[$length];
    for (let i = 0; i < listSize; i = i + 1) {
      if (lengths[$_get](i) > this.maxCodeLength) {
        this.maxCodeLength = lengths[$_get](i);
      }
      if (lengths[$_get](i) < this.minCodeLength) {
        this.minCodeLength = lengths[$_get](i);
      }
    }
    let size = (1)[$leftShift](this.maxCodeLength);
    this.table = _native_typed_data.NativeUint32List.new(size);
    for (let bitLength = 1, code = 0, skip = 2; bitLength <= this.maxCodeLength;) {
      for (let i = 0; i < listSize; i = i + 1) {
        if (lengths[$_get](i) === bitLength) {
          let reversed = 0;
          let rtemp = code;
          for (let j = 0; j < bitLength; j = j + 1) {
            reversed = (reversed << 1 | rtemp & 1) >>> 0;
            rtemp = rtemp[$rightShift](1);
          }
          for (let j = reversed; j < size; j = j + skip) {
            this.table[$_set](j, (bitLength << 16 | i) >>> 0);
          }
          code = code + 1;
        }
      }
      bitLength = bitLength + 1;
      code = code << 1 >>> 0;
      skip = skip << 1 >>> 0;
    }
  }).prototype = huffman_table.HuffmanTable.prototype;
  dart.addTypeTests(huffman_table.HuffmanTable);
  dart.addTypeCaches(huffman_table.HuffmanTable);
  dart.setGetterSignature(huffman_table.HuffmanTable, () => ({
    __proto__: dart.getGetters(huffman_table.HuffmanTable.__proto__),
    table: typed_data.Uint32List
  }));
  dart.setSetterSignature(huffman_table.HuffmanTable, () => ({
    __proto__: dart.getSetters(huffman_table.HuffmanTable.__proto__),
    table: typed_data.Uint32List
  }));
  dart.setLibraryUri(huffman_table.HuffmanTable, I[0]);
  dart.setFieldSignature(huffman_table.HuffmanTable, () => ({
    __proto__: dart.getFields(huffman_table.HuffmanTable.__proto__),
    [__HuffmanTable_table]: dart.fieldType(dart.nullable(typed_data.Uint32List)),
    maxCodeLength: dart.fieldType(core.int),
    minCodeLength: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/archive/src/zlib/huffman_table.dart", {
    "package:archive/src/zlib/huffman_table.dart": huffman_table
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["huffman_table.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IAKM;;;;;;IACA;;;;;;;;AAFY;;IAAK;cAAL;;IAAK;;;;;6CAIE;iCAJP;IACZ,sBAAgB;IAChB,sBAAgB;AAGZ,mBAAW,AAAQ,OAAD;AAExB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,QAAQ,EAAI,IAAF,AAAE,CAAC,GAAH;AAC5B,UAAI,AAAO,AAAI,OAAJ,QAAC,CAAC,IAAI;AACW,QAA1B,qBAAgB,AAAO,OAAA,QAAC,CAAC;;AAE3B,UAAI,AAAO,AAAI,OAAJ,QAAC,CAAC,IAAI;AACW,QAA1B,qBAAgB,AAAO,OAAA,QAAC,CAAC;;;AAIvB,eAAS,CAAF,eAAK;AACM,IAAxB,aAAQ,wCAAW,IAAI;AAEvB,aAAS,YAAY,GAAG,OAAO,GAAG,OAAO,GAAG,AAAU,SAAD,IAAI;AACvD,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,QAAQ,EAAI,IAAF,AAAE,CAAC,GAAH;AAC5B,YAAI,AAAO,AAAI,OAAJ,QAAC,CAAC,MAAK,SAAS;AACrB,yBAAW;AACX,sBAAQ,IAAI;AAChB,mBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,SAAS,EAAI,IAAF,AAAE,CAAC,GAAH;AACW,YAAxC,WAA2B,CAAf,AAAS,QAAD,IAAI,IAAM,AAAM,KAAD,GAAG;AAC3B,YAAX,QAAA,AAAM,KAAD,cAAK;;AAGZ,mBAAS,IAAI,QAAQ,EAAE,AAAE,CAAD,GAAG,IAAI,EAAE,IAAA,AAAE,CAAD,GAAI,IAAI;AACR,YAAhC,AAAK,kBAAC,CAAC,EAAsB,CAAjB,AAAU,SAAD,IAAI,KAAM,CAAC;;AAG5B,UAAJ,OAAF,AAAE,IAAI,GAAN;;;AAIO,MAAT,YAAF,AAAE,SAAS,GAAX;AACU,MAAV,OAAA,AAAK,IAAD,IAAK;AACC,MAAV,OAAA,AAAK,IAAD,IAAK;;EAEb","file":"../../../../../../../../../../../../packages/archive/src/zlib/huffman_table.dart.lib.js"}');
  // Exports:
  return {
    src__zlib__huffman_table: huffman_table
  };
}));

//# sourceMappingURL=huffman_table.dart.lib.js.map
