define(['dart_sdk'], (function load__packages__proj4dart__src__classes__ellipsoid_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var ellipsoid = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:proj4dart/src/classes/ellipsoid.dart"];
  var a$ = dart.privateName(ellipsoid, "Ellipsoid.a");
  var rf$ = dart.privateName(ellipsoid, "Ellipsoid.rf");
  var b$ = dart.privateName(ellipsoid, "Ellipsoid.b");
  var ellipseName$ = dart.privateName(ellipsoid, "Ellipsoid.ellipseName");
  var shortName$ = dart.privateName(ellipsoid, "Ellipsoid.shortName");
  ellipsoid.Ellipsoid = class Ellipsoid extends core.Object {
    get a() {
      return this[a$];
    }
    set a(value) {
      this[a$] = value;
    }
    get rf() {
      return this[rf$];
    }
    set rf(value) {
      this[rf$] = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      this[b$] = value;
    }
    get ellipseName() {
      return this[ellipseName$];
    }
    set ellipseName(value) {
      this[ellipseName$] = value;
    }
    get shortName() {
      return this[shortName$];
    }
    set shortName(value) {
      this[shortName$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let a = opts && 'a' in opts ? opts.a : null;
      let rf = opts && 'rf' in opts ? opts.rf : null;
      let ellipseName = opts && 'ellipseName' in opts ? opts.ellipseName : null;
      let shortName = opts && 'shortName' in opts ? opts.shortName : null;
      return new ellipsoid.Ellipsoid.new({a: a, rf: rf, ellipseName: ellipseName, shortName: shortName});
    }
    static ['_#withB#tearOff'](opts) {
      let a = opts && 'a' in opts ? opts.a : null;
      let b = opts && 'b' in opts ? opts.b : null;
      let ellipseName = opts && 'ellipseName' in opts ? opts.ellipseName : null;
      let shortName = opts && 'shortName' in opts ? opts.shortName : null;
      return new ellipsoid.Ellipsoid.withB({a: a, b: b, ellipseName: ellipseName, shortName: shortName});
    }
  };
  (ellipsoid.Ellipsoid.new = function(opts) {
    let a = opts && 'a' in opts ? opts.a : null;
    let rf = opts && 'rf' in opts ? opts.rf : null;
    let ellipseName = opts && 'ellipseName' in opts ? opts.ellipseName : null;
    let shortName = opts && 'shortName' in opts ? opts.shortName : null;
    this[b$] = null;
    this[a$] = a;
    this[rf$] = rf;
    this[ellipseName$] = ellipseName;
    this[shortName$] = shortName;
    ;
  }).prototype = ellipsoid.Ellipsoid.prototype;
  (ellipsoid.Ellipsoid.withB = function(opts) {
    let a = opts && 'a' in opts ? opts.a : null;
    let b = opts && 'b' in opts ? opts.b : null;
    let ellipseName = opts && 'ellipseName' in opts ? opts.ellipseName : null;
    let shortName = opts && 'shortName' in opts ? opts.shortName : null;
    this[rf$] = null;
    this[a$] = a;
    this[b$] = b;
    this[ellipseName$] = ellipseName;
    this[shortName$] = shortName;
    ;
  }).prototype = ellipsoid.Ellipsoid.prototype;
  dart.addTypeTests(ellipsoid.Ellipsoid);
  dart.addTypeCaches(ellipsoid.Ellipsoid);
  dart.setLibraryUri(ellipsoid.Ellipsoid, I[0]);
  dart.setFieldSignature(ellipsoid.Ellipsoid, () => ({
    __proto__: dart.getFields(ellipsoid.Ellipsoid.__proto__),
    a: dart.fieldType(core.double),
    rf: dart.fieldType(dart.nullable(core.double)),
    b: dart.fieldType(dart.nullable(core.double)),
    ellipseName: dart.fieldType(core.String),
    shortName: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/proj4dart/src/classes/ellipsoid.dart", {
    "package:proj4dart/src/classes/ellipsoid.dart": ellipsoid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ellipsoid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IACS;;;;;;IACC;;;;;;IACA;;;;;;IACD;;;;;;IACA;;;;;;;;;;;;;;;;;;;;;;QAEoB;QAAmB;QAAoB;QAA6B;;IACvF,WAAE,CAAC;IACF,YAAE,EAAE;IACK,qBAAE,WAAW;IACf,mBAAE,SAAS;;;;QAEM;QAAmB;QAAmB;QAA6B;;IAC5F,WAAE,CAAC;IACH,WAAE,CAAC;IACO,qBAAE,WAAW;IACf,mBAAE,SAAS","file":"../../../../../../../../../../../../packages/proj4dart/src/classes/ellipsoid.dart.lib.js"}');
  // Exports:
  return {
    src__classes__ellipsoid: ellipsoid
  };
}));

//# sourceMappingURL=ellipsoid.dart.lib.js.map
