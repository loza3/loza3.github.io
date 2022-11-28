define(['dart_sdk', 'packages/mgrs_dart/src/mgrs.dart'], (function load__packages__proj4dart__src__classes__point_dart(dart_sdk, packages__mgrs_dart__src__mgrs$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mgrs = packages__mgrs_dart__src__mgrs$46dart.src__mgrs;
  var point$ = Object.create(dart.library);
  var $_get = dartx._get;
  var $length = dartx.length;
  var $split = dartx.split;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:proj4dart/src/classes/point.dart"];
  var x$ = dart.privateName(point$, "Point.x");
  var y$ = dart.privateName(point$, "Point.y");
  var z$ = dart.privateName(point$, "Point.z");
  var m$ = dart.privateName(point$, "Point.m");
  point$.Point = class Point extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      this[x$] = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      this[y$] = value;
    }
    get z() {
      return this[z$];
    }
    set z(value) {
      this[z$] = value;
    }
    get m() {
      return this[m$];
    }
    set m(value) {
      this[m$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let x = opts && 'x' in opts ? opts.x : null;
      let y = opts && 'y' in opts ? opts.y : null;
      return new point$.Point.new({x: x, y: y});
    }
    static ['_#withZ#tearOff'](opts) {
      let x = opts && 'x' in opts ? opts.x : null;
      let y = opts && 'y' in opts ? opts.y : null;
      let z = opts && 'z' in opts ? opts.z : null;
      return new point$.Point.withZ({x: x, y: y, z: z});
    }
    static ['_#withM#tearOff'](opts) {
      let x = opts && 'x' in opts ? opts.x : null;
      let y = opts && 'y' in opts ? opts.y : null;
      let z = opts && 'z' in opts ? opts.z : null;
      let m = opts && 'm' in opts ? opts.m : null;
      return new point$.Point.withM({x: x, y: y, z: z, m: m});
    }
    static ['_#fromArray#tearOff'](array) {
      return new point$.Point.fromArray(array);
    }
    static fromString(coordsString) {
      let coords = coordsString[$split](",");
      let x = core.double.parse(coords[$_get](0));
      let y = core.double.parse(coords[$_get](1));
      let z = coords[$length] > 2 ? core.double.parse(coords[$_get](2)) : null;
      let m = coords[$length] > 3 ? core.double.parse(coords[$_get](3)) : null;
      return new point$.Point.withM({x: x, y: y, z: z, m: m});
    }
    static ['_#fromString#tearOff'](coordsString) {
      return point$.Point.fromString(coordsString);
    }
    static fromMGRS(mgrsString) {
      let point = mgrs.Mgrs.toPoint(mgrsString);
      let x = point[$_get](0);
      let y = point[$_get](1);
      let z = 0.0;
      let m = 0.0;
      return new point$.Point.withM({x: x, y: y, z: z, m: m});
    }
    static ['_#fromMGRS#tearOff'](mgrsString) {
      return point$.Point.fromMGRS(mgrsString);
    }
    toMGRS(accuracy) {
      return mgrs.Mgrs.forward(T.JSArrayOfdouble().of([this.x, this.y]), accuracy);
    }
    toArray() {
      let res = T.JSArrayOfdouble().of([this.x, this.y]);
      if (this.z != null) {
        res[$add](dart.nullCheck(this.z));
        if (this.m != null) {
          res[$add](dart.nullCheck(this.m));
        }
      }
      return res;
    }
    static ['_#copy#tearOff'](p) {
      return new point$.Point.copy(p);
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let x = opts && 'x' in opts ? opts.x : null;
      let y = opts && 'y' in opts ? opts.y : null;
      let z = opts && 'z' in opts ? opts.z : null;
      let m = opts && 'm' in opts ? opts.m : null;
      return new point$.Point.withM({x: (t0 = x, t0 == null ? this.x : t0), y: (t0$ = y, t0$ == null ? this.y : t0$), z: (t0$0 = z, t0$0 == null ? this.z : t0$0), m: (t0$1 = m, t0$1 == null ? this.m : t0$1)});
    }
    toString() {
      return "{ x: " + dart.str(this.x) + ", y: " + dart.str(this.y) + ", z: " + dart.str(this.z) + ", m: " + dart.str(this.m) + " }";
    }
  };
  (point$.Point.new = function(opts) {
    let x = opts && 'x' in opts ? opts.x : null;
    let y = opts && 'y' in opts ? opts.y : null;
    this[x$] = x;
    this[y$] = y;
    this[z$] = null;
    this[m$] = null;
    ;
  }).prototype = point$.Point.prototype;
  (point$.Point.withZ = function(opts) {
    let x = opts && 'x' in opts ? opts.x : null;
    let y = opts && 'y' in opts ? opts.y : null;
    let z = opts && 'z' in opts ? opts.z : null;
    this[m$] = null;
    this[x$] = x;
    this[y$] = y;
    this[z$] = z;
    ;
  }).prototype = point$.Point.prototype;
  (point$.Point.withM = function(opts) {
    let x = opts && 'x' in opts ? opts.x : null;
    let y = opts && 'y' in opts ? opts.y : null;
    let z = opts && 'z' in opts ? opts.z : null;
    let m = opts && 'm' in opts ? opts.m : null;
    this[x$] = x;
    this[y$] = y;
    this[z$] = z;
    this[m$] = m;
    ;
  }).prototype = point$.Point.prototype;
  (point$.Point.fromArray = function(array) {
    this[x$] = array[$_get](0);
    this[y$] = array[$_get](1);
    this[z$] = array[$length] > 2 ? array[$_get](2) : null;
    this[m$] = array[$length] > 3 ? array[$_get](3) : null;
    ;
  }).prototype = point$.Point.prototype;
  (point$.Point.copy = function(p) {
    this[x$] = p.x;
    this[y$] = p.y;
    this[z$] = p.z;
    this[m$] = p.m;
    ;
  }).prototype = point$.Point.prototype;
  dart.addTypeTests(point$.Point);
  dart.addTypeCaches(point$.Point);
  dart.setMethodSignature(point$.Point, () => ({
    __proto__: dart.getMethods(point$.Point.__proto__),
    toMGRS: dart.fnType(core.String, [core.int]),
    toArray: dart.fnType(core.List$(core.double), []),
    copyWith: dart.fnType(point$.Point, [], {m: dart.nullable(core.double), x: dart.nullable(core.double), y: dart.nullable(core.double), z: dart.nullable(core.double)}, {})
  }));
  dart.setStaticMethodSignature(point$.Point, () => ['fromString', 'fromMGRS']);
  dart.setLibraryUri(point$.Point, I[0]);
  dart.setFieldSignature(point$.Point, () => ({
    __proto__: dart.getFields(point$.Point.__proto__),
    x: dart.fieldType(core.double),
    y: dart.fieldType(core.double),
    z: dart.fieldType(dart.nullable(core.double)),
    m: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(point$.Point, ['toString']);
  dart.trackLibraries("packages/proj4dart/src/classes/point.dart", {
    "package:proj4dart/src/classes/point.dart": point$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["point.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAGS;;;;;;IACA;;;;;;IACC;;;;;;IACA;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAgBwB;AAC1B,mBAAS,AAAa,YAAD,SAAO;AAC5B,cAAW,kBAAM,AAAM,MAAA,QAAC;AACxB,cAAW,kBAAM,AAAM,MAAA,QAAC;AACxB,cAAI,AAAO,AAAO,MAAR,YAAU,IAAW,kBAAM,AAAM,MAAA,QAAC,MAAM;AAClD,cAAI,AAAO,AAAO,MAAR,YAAU,IAAW,kBAAM,AAAM,MAAA,QAAC,MAAM;AAEtD,YAAa,4BAAS,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC;IAC3C;;;;oBAE8B;AACxB,kBAAa,kBAAQ,UAAU;AAC/B,cAAI,AAAK,KAAA,QAAC;AACV,cAAI,AAAK,KAAA,QAAC;AACV,cAAI;AACJ,cAAI;AAER,YAAa,4BAAS,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC;IAC3C;;;;WAEkB;AAChB,YAAY,mBAAQ,wBAAC,QAAG,UAAI,QAAQ;IACtC;;AAGM,gBAAc,wBAAC,QAAG;AACtB,UAAI;AACS,QAAX,AAAI,GAAD,OAAM,eAAD;AAER,YAAI;AACS,UAAX,AAAI,GAAD,OAAM,eAAD;;;AAGZ,YAAO,IAAG;IACZ;;;;;;UAQwB;UAAW;UAAW;UAAW;AACvD,YAAa,6BACN,KAAF,CAAC,EAAD,aAAU,kBACR,MAAF,CAAC,EAAD,cAAU,mBACR,OAAF,CAAC,EAAD,eAAU,oBACR,OAAF,CAAC,EAAD,eAAU;IAEjB;;AAIE,YAAO,AAAgC,oBAAzB,UAAC,mBAAM,UAAC,mBAAM,UAAC,mBAAM,UAAC;IACtC;;;QApEqB;QAAiB;IAAjB;IAAiB;IAC9B,WAAE;IACF,WAAE;;EAAI;;QAEa;QAAiB;QAAQ;;IAAzB;IAAiB;IAAQ;;EAAG;;QAE5B;QAAiB;QAAQ;QAAQ;IAAjC;IAAiB;IAAQ;IAAQ;;EAAG;qCAElC;IACrB,WAAE,AAAK,KAAA,QAAC;IACR,WAAE,AAAK,KAAA,QAAC;IACR,WAAE,AAAM,AAAO,KAAR,YAAU,IAAI,AAAK,KAAA,QAAC,KAAK;IAChC,WAAE,AAAM,AAAO,KAAR,YAAU,IAAI,AAAK,KAAA,QAAC,KAAK;;EAAI;gCAsC3B;IACT,WAAE,AAAE,CAAD;IACH,WAAE,AAAE,CAAD;IACH,WAAE,AAAE,CAAD;IACH,WAAE,AAAE,CAAD;;EAAE","file":"../../../../../../../../../../../../packages/proj4dart/src/classes/point.dart.lib.js"}');
  // Exports:
  return {
    src__classes__point: point$
  };
}));

//# sourceMappingURL=point.dart.lib.js.map
