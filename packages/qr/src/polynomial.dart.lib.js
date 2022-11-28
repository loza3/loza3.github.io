define(['dart_sdk', 'packages/qr/src/math.dart'], (function load__packages__qr__src__polynomial_dart(dart_sdk, packages__qr__src__math$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const math = packages__qr__src__math$46dart.src__math;
  var polynomial = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:qr/src/polynomial.dart"];
  var _values$ = dart.privateName(polynomial, "_values");
  polynomial.QrPolynomial = class QrPolynomial extends core.Object {
    static new(thing, shift) {
      let offset = 0;
      while (offset < thing[$length] && thing[$_get](offset) === 0) {
        offset = offset + 1;
      }
      let values = _native_typed_data.NativeUint8List.new(thing[$length] - offset + shift);
      for (let i = 0; i < thing[$length] - offset; i = i + 1) {
        values[$_set](i, thing[$_get](i + offset));
      }
      return new polynomial.QrPolynomial._internal(values);
    }
    static ['_#new#tearOff'](thing, shift) {
      return polynomial.QrPolynomial.new(thing, shift);
    }
    static ['_#_internal#tearOff'](_values) {
      return new polynomial.QrPolynomial._internal(_values);
    }
    _get(index) {
      return this[_values$][$_get](index);
    }
    get length() {
      return this[_values$][$length];
    }
    multiply(e) {
      let t0;
      let foo = _native_typed_data.NativeUint8List.new(this.length + e.length - 1);
      for (let i = 0; i < this.length; i = i + 1) {
        for (let j = 0; j < e.length; j = j + 1) {
          t0 = i + j;
          foo[$_set](t0, (foo[$_get](t0) ^ math.gexp(math.glog(this._get(i)) + math.glog(e._get(j)))) >>> 0);
        }
      }
      return polynomial.QrPolynomial.new(foo, 0);
    }
    mod(e) {
      let t0;
      if (this.length - e.length < 0) {
        return this;
      }
      let ratio = math.glog(this._get(0)) - math.glog(e._get(0));
      let value = _native_typed_data.NativeUint8List.new(this.length);
      for (let i = 0; i < this.length; i = i + 1) {
        value[$_set](i, this._get(i));
      }
      for (let i = 0; i < e.length; i = i + 1) {
        t0 = i;
        value[$_set](t0, (value[$_get](t0) ^ math.gexp(math.glog(e._get(i)) + ratio)) >>> 0);
      }
      return polynomial.QrPolynomial.new(value, 0).mod(e);
    }
  };
  (polynomial.QrPolynomial._internal = function(_values) {
    this[_values$] = _values;
    ;
  }).prototype = polynomial.QrPolynomial.prototype;
  dart.addTypeTests(polynomial.QrPolynomial);
  dart.addTypeCaches(polynomial.QrPolynomial);
  dart.setMethodSignature(polynomial.QrPolynomial, () => ({
    __proto__: dart.getMethods(polynomial.QrPolynomial.__proto__),
    _get: dart.fnType(core.int, [core.int]),
    multiply: dart.fnType(polynomial.QrPolynomial, [polynomial.QrPolynomial]),
    mod: dart.fnType(polynomial.QrPolynomial, [polynomial.QrPolynomial])
  }));
  dart.setStaticMethodSignature(polynomial.QrPolynomial, () => ['new']);
  dart.setGetterSignature(polynomial.QrPolynomial, () => ({
    __proto__: dart.getGetters(polynomial.QrPolynomial.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(polynomial.QrPolynomial, I[0]);
  dart.setFieldSignature(polynomial.QrPolynomial, () => ({
    __proto__: dart.getFields(polynomial.QrPolynomial.__proto__),
    [_values$]: dart.finalFieldType(typed_data.Uint8List)
  }));
  dart.trackLibraries("packages/qr/src/polynomial.dart", {
    "package:qr/src/polynomial.dart": polynomial
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["polynomial.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;eAOiC,OAAW;AACpC,mBAAS;AAEb,aAAO,AAAO,MAAD,GAAG,AAAM,KAAD,aAAW,AAAK,AAAS,KAAT,QAAC,MAAM,MAAK;AACvC,QAAR,SAAA,AAAM,MAAA;;AAGF,mBAAS,uCAAU,AAAM,AAAO,AAAS,KAAjB,YAAU,MAAM,GAAG,KAAK;AAEtD,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAM,AAAO,KAAR,YAAU,MAAM,EAAE,IAAA,AAAC,CAAA;AACb,QAA7B,AAAM,MAAA,QAAC,CAAC,EAAI,AAAK,KAAA,QAAC,AAAE,CAAD,GAAG,MAAM;;AAG9B,YAAoB,uCAAU,MAAM;IACtC;;;;;;;SAIoB;AAAU,YAAA,AAAO,uBAAC,KAAK;IAAC;;AAE1B,YAAA,AAAQ;IAAM;aAEG;;AACjB,gBAAM,uCAAU,AAAO,AAAW,cAAT,AAAE,CAAD,UAAU;AAEpD,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,aAAQ,IAAA,AAAC,CAAA;AAC3B,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAE,CAAD,SAAS,IAAA,AAAC,CAAA;AACyC,eAAlE,AAAE,CAAD,GAAG,CAAC;UAAT,AAAG,GAAA,YAAQ,CAAX,AAAG,GAAA,cAAmB,UAAa,AAAc,UAAL,UAAC,CAAC,KAAa,UAAK,AAAC,CAAA,MAAC,CAAC;;;AAIvE,YAAO,6BAAa,GAAG,EAAE;IAC3B;QAE8B;;AAC5B,UAAI,AAAO,AAAW,cAAT,AAAE,CAAD,UAAU;AACtB,cAAO;;AAGH,kBAAgB,AAAc,UAAL,UAAC,MAAc,UAAK,AAAC,CAAA,MAAC;AAE/C,kBAAQ,uCAAU;AAExB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,aAAQ,IAAA,AAAC,CAAA;AACT,QAAlB,AAAK,KAAA,QAAC,CAAC,EAAQ,UAAC,CAAC;;AAGnB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAE,CAAD,SAAS,IAAA,AAAC,CAAA;AACuB,aAA9C,CAAC;QAAP,AAAK,KAAA,YAAI,CAAT,AAAK,KAAA,cAAe,UAAa,AAAW,UAAN,AAAC,CAAA,MAAC,CAAC,KAAK,KAAK;;AAIrD,YAAO,AAAuB,6BAAV,KAAK,EAAE,OAAO,CAAC;IACrC;;;IArC4B;;EAAQ","file":"../../../../../../../../../../../packages/qr/src/polynomial.dart.lib.js"}');
  // Exports:
  return {
    src__polynomial: polynomial
  };
}));

//# sourceMappingURL=polynomial.dart.lib.js.map
