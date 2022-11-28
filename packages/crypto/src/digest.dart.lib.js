define(['dart_sdk'], (function load__packages__crypto__src__digest_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var digest = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $codeUnitAt = dartx.codeUnitAt;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:crypto/src/digest.dart"];
  var bytes$ = dart.privateName(digest, "Digest.bytes");
  digest.Digest = class Digest extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](bytes) {
      return new digest.Digest.new(bytes);
    }
    _equals(other) {
      if (other == null) return false;
      if (digest.Digest.is(other)) {
        let a = this.bytes;
        let b = other.bytes;
        let n = a[$length];
        if (n !== b[$length]) {
          return false;
        }
        let mismatch = 0;
        for (let i = 0; i < n; i = i + 1) {
          mismatch = (mismatch | (a[$_get](i) ^ b[$_get](i)) >>> 0) >>> 0;
        }
        return mismatch === 0;
      }
      return false;
    }
    get hashCode() {
      return core.Object.hashAll(this.bytes);
    }
    toString() {
      return digest._hexEncode(this.bytes);
    }
  };
  (digest.Digest.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = digest.Digest.prototype;
  dart.addTypeTests(digest.Digest);
  dart.addTypeCaches(digest.Digest);
  dart.setLibraryUri(digest.Digest, I[0]);
  dart.setFieldSignature(digest.Digest, () => ({
    __proto__: dart.getFields(digest.Digest.__proto__),
    bytes: dart.finalFieldType(core.List$(core.int))
  }));
  dart.defineExtensionMethods(digest.Digest, ['_equals', 'toString']);
  dart.defineExtensionAccessors(digest.Digest, ['hashCode']);
  digest._hexEncode = function _hexEncode(bytes) {
    let t0, t0$;
    let charCodes = _native_typed_data.NativeUint8List.new(bytes[$length] * 2);
    for (let i = 0, j = 0; i < bytes[$length]; i = i + 1) {
      let byte = bytes[$_get](i);
      charCodes[$_set]((t0 = j, j = t0 + 1, t0), "0123456789abcdef"[$codeUnitAt](byte >> 4 & 15));
      charCodes[$_set]((t0$ = j, j = t0$ + 1, t0$), "0123456789abcdef"[$codeUnitAt](byte & 15));
    }
    return core.String.fromCharCodes(charCodes);
  };
  dart.trackLibraries("packages/crypto/src/digest.dart", {
    "package:crypto/src/digest.dart": digest
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["digest.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IASkB;;;;;;;;;YASQ;;AACtB,UAAU,iBAAN,KAAK;AACD,gBAAI;AACJ,gBAAI,AAAM,KAAD;AACT,gBAAI,AAAE,CAAD;AACX,YAAI,CAAC,KAAI,AAAE,CAAD;AACR,gBAAO;;AAEL,uBAAW;AACf,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,CAAC,EAAE,IAAA,AAAC,CAAA;AACC,UAAvB,WAAS,CAAT,QAAQ,GAAS,CAAL,AAAC,CAAA,QAAC,CAAC,IAAI,AAAC,CAAA,QAAC,CAAC;;AAExB,cAAO,AAAS,SAAD,KAAI;;AAErB,YAAO;IACT;;AAGoB,YAAO,qBAAQ;IAAM;;AAIpB,+BAAW;IAAM;;;IA7B1B;;EAAM;;;;;;;;;;0CAgCQ;;AAEtB,oBAAY,uCAAU,AAAM,AAAO,KAAR,YAAU;AACzC,aAAS,IAAI,GAAG,IAAI,GAAG,AAAE,CAAD,GAAG,AAAM,KAAD,WAAS,IAAA,AAAC,CAAA;AACpC,iBAAO,AAAK,KAAA,QAAC,CAAC;AACsC,MAAxD,AAAS,SAAA,SAAE,KAAD,CAAC,mBAAgB,gCAAY,AAAK,AAAM,IAAP,IAAI,IAAK;AACH,MAAjD,AAAS,SAAA,SAAE,MAAD,CAAC,qBAAgB,gCAAW,AAAK,IAAD,GAAG;;AAE/C,UAAc,2BAAc,SAAS;EACvC","file":"../../../../../../../../../../../packages/crypto/src/digest.dart.lib.js"}');
  // Exports:
  return {
    src__digest: digest
  };
}));

//# sourceMappingURL=digest.dart.lib.js.map
