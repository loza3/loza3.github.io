define(['dart_sdk', 'packages/proj4dart/src/globals/nadgrid_store.dart'], (function load__packages__proj4dart__src__classes__datum_dart(dart_sdk, packages__proj4dart__src__globals__nadgrid_store$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const nadgrid = packages__proj4dart__src__globals__nadgrid_store$46dart.src__classes__nadgrid;
  var datum = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:proj4dart/src/classes/datum.dart"];
  var a$ = dart.privateName(datum, "Datum.a");
  var b$ = dart.privateName(datum, "Datum.b");
  var es$ = dart.privateName(datum, "Datum.es");
  var ep2$ = dart.privateName(datum, "Datum.ep2");
  var grids = dart.privateName(datum, "Datum.grids");
  var __Datum_datumType = dart.privateName(datum, "_#Datum#datumType");
  var __Datum_datumParams = dart.privateName(datum, "_#Datum#datumParams");
  datum.Datum = class Datum extends core.Object {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    get es() {
      return this[es$];
    }
    set es(value) {
      super.es = value;
    }
    get ep2() {
      return this[ep2$];
    }
    set ep2(value) {
      super.ep2 = value;
    }
    get grids() {
      return this[grids];
    }
    set grids(value) {
      super.grids = value;
    }
    get datumType() {
      let t0;
      t0 = this[__Datum_datumType];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("datumType")) : t0;
    }
    set datumType(datumType$35param) {
      this[__Datum_datumType] = datumType$35param;
    }
    get datumParams() {
      let t0;
      t0 = this[__Datum_datumParams];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("datumParams")) : t0;
    }
    set datumParams(datumParams$35param) {
      this[__Datum_datumParams] = datumParams$35param;
    }
    static ['_#new#tearOff'](datumCode, datum_params, a, b, es, ep2, nadgrids) {
      return new datum.Datum.new(datumCode, datum_params, a, b, es, ep2, nadgrids);
    }
  };
  (datum.Datum.new = function(datumCode, datum_params, a, b, es, ep2, nadgrids) {
    let t1, t0, t1$, t0$, t1$0, t0$0;
    this[__Datum_datumType] = null;
    this[__Datum_datumParams] = null;
    this[a$] = a;
    this[b$] = b;
    this[es$] = es;
    this[ep2$] = ep2;
    this[grids] = nadgrids;
    if (datumCode == null || datumCode === "none") {
      this.datumType = 5;
    } else {
      this.datumType = 4;
    }
    if (datum_params != null && datum_params[$isNotEmpty]) {
      this.datumParams = datum_params;
      if (this.datumParams[$_get](0) !== 0 || this.datumParams[$_get](1) !== 0 || this.datumParams[$_get](2) !== 0) {
        this.datumType = 1;
      }
      if (this.datumParams[$length] > 3) {
        if (this.datumParams[$_get](3) !== 0 || this.datumParams[$_get](4) !== 0 || this.datumParams[$_get](5) !== 0 || this.datumParams[$_get](6) !== 0) {
          this.datumType = 2;
          t0 = this.datumParams;
          t1 = 3;
          t0[$_set](t1, t0[$_get](t1) * 0.00000484813681109536);
          t0$ = this.datumParams;
          t1$ = 4;
          t0$[$_set](t1$, t0$[$_get](t1$) * 0.00000484813681109536);
          t0$0 = this.datumParams;
          t1$0 = 5;
          t0$0[$_set](t1$0, t0$0[$_get](t1$0) * 0.00000484813681109536);
          this.datumParams[$_set](6, this.datumParams[$_get](6) / 1000000.0 + 1.0);
        }
      }
    }
    if (nadgrids != null) {
      this.datumType = 3;
    }
  }).prototype = datum.Datum.prototype;
  dart.addTypeTests(datum.Datum);
  dart.addTypeCaches(datum.Datum);
  dart.setGetterSignature(datum.Datum, () => ({
    __proto__: dart.getGetters(datum.Datum.__proto__),
    datumType: core.int,
    datumParams: core.List$(core.double)
  }));
  dart.setSetterSignature(datum.Datum, () => ({
    __proto__: dart.getSetters(datum.Datum.__proto__),
    datumType: core.int,
    datumParams: core.List$(core.double)
  }));
  dart.setLibraryUri(datum.Datum, I[0]);
  dart.setFieldSignature(datum.Datum, () => ({
    __proto__: dart.getFields(datum.Datum.__proto__),
    [__Datum_datumType]: dart.fieldType(dart.nullable(core.int)),
    [__Datum_datumParams]: dart.fieldType(dart.nullable(core.List$(core.double))),
    a: dart.finalFieldType(core.double),
    b: dart.finalFieldType(core.double),
    es: dart.finalFieldType(core.double),
    ep2: dart.finalFieldType(core.double),
    grids: dart.finalFieldType(dart.nullable(core.List$(nadgrid.NadgridParam)))
  }));
  dart.trackLibraries("packages/proj4dart/src/classes/datum.dart", {
    "package:proj4dart/src/classes/datum.dart": datum
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["datum.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAMe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACa;;;;;;;;AANjB;;IAAS;kBAAT;;IAAS;;;AACA;;IAAW;oBAAX;;IAAW;;;;;8BAOf,WAAyB,cAAqB,GAAU,GAC3D,IAAW,KAAyB;;8BATtC;gCACS;IASV,WAAE,CAAC;IACH,WAAE,CAAC;IACF,YAAE,EAAE;IACH,aAAE,GAAG;IACH,cAAE,QAAQ;AACpB,QAAI,AAAU,SAAD,YAAY,AAAU,SAAD,KAAI;AACN,MAA9B;;AAE4B,MAA5B;;AAEF,QAAI,YAAY,YAAY,AAAa,YAAD;AACZ,MAA1B,mBAAc,YAAY;AAC1B,UAAI,AAAW,wBAAC,OAAM,KAAK,AAAW,wBAAC,OAAM,KAAK,AAAW,wBAAC,OAAM;AACrC,QAA7B;;AAEF,UAAI,AAAY,AAAO,4BAAE;AACvB,YAAI,AAAW,wBAAC,OAAM,KAClB,AAAW,wBAAC,OAAM,KAClB,AAAW,wBAAC,OAAM,KAClB,AAAW,wBAAC,OAAM;AACS,UAA7B;AACmC,eAAnC;eAAY;UAAD,cAAA,AAAI;AACoB,gBAAnC;gBAAY;UAAD,gBAAA,AAAI;AACoB,iBAAnC;iBAAY;UAAD,kBAAA,AAAI;AACoC,UAAnD,AAAW,wBAAC,GAAM,AAAW,AAAI,AAAa,wBAAhB,KAAK,YAAa;;;;AAKtD,QAAI,QAAQ;AACsB,MAAhC;;EAEJ","file":"../../../../../../../../../../../../packages/proj4dart/src/classes/datum.dart.lib.js"}');
  // Exports:
  return {
    src__classes__datum: datum
  };
}));

//# sourceMappingURL=datum.dart.lib.js.map
