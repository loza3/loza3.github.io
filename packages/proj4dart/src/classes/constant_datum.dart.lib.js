define(['dart_sdk'], (function load__packages__proj4dart__src__classes__constant_datum_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var constant_datum = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:proj4dart/src/classes/constant_datum.dart"];
  var towgs84$ = dart.privateName(constant_datum, "ConstantDatum.towgs84");
  var ellipse$ = dart.privateName(constant_datum, "ConstantDatum.ellipse");
  var datumName$ = dart.privateName(constant_datum, "ConstantDatum.datumName");
  var nadgrids$ = dart.privateName(constant_datum, "ConstantDatum.nadgrids");
  constant_datum.ConstantDatum = class ConstantDatum extends core.Object {
    get towgs84() {
      return this[towgs84$];
    }
    set towgs84(value) {
      this[towgs84$] = value;
    }
    get ellipse() {
      return this[ellipse$];
    }
    set ellipse(value) {
      this[ellipse$] = value;
    }
    get datumName() {
      return this[datumName$];
    }
    set datumName(value) {
      this[datumName$] = value;
    }
    get nadgrids() {
      return this[nadgrids$];
    }
    set nadgrids(value) {
      this[nadgrids$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let towgs84 = opts && 'towgs84' in opts ? opts.towgs84 : null;
      let ellipse = opts && 'ellipse' in opts ? opts.ellipse : null;
      let datumName = opts && 'datumName' in opts ? opts.datumName : null;
      return new constant_datum.ConstantDatum.new({towgs84: towgs84, ellipse: ellipse, datumName: datumName});
    }
    static ['_#withNadgrid#tearOff'](opts) {
      let nadgrids = opts && 'nadgrids' in opts ? opts.nadgrids : null;
      let ellipse = opts && 'ellipse' in opts ? opts.ellipse : null;
      let datumName = opts && 'datumName' in opts ? opts.datumName : null;
      return new constant_datum.ConstantDatum.withNadgrid({nadgrids: nadgrids, ellipse: ellipse, datumName: datumName});
    }
  };
  (constant_datum.ConstantDatum.new = function(opts) {
    let towgs84 = opts && 'towgs84' in opts ? opts.towgs84 : null;
    let ellipse = opts && 'ellipse' in opts ? opts.ellipse : null;
    let datumName = opts && 'datumName' in opts ? opts.datumName : null;
    this[nadgrids$] = null;
    this[towgs84$] = towgs84;
    this[ellipse$] = ellipse;
    this[datumName$] = datumName;
    ;
  }).prototype = constant_datum.ConstantDatum.prototype;
  (constant_datum.ConstantDatum.withNadgrid = function(opts) {
    let nadgrids = opts && 'nadgrids' in opts ? opts.nadgrids : null;
    let ellipse = opts && 'ellipse' in opts ? opts.ellipse : null;
    let datumName = opts && 'datumName' in opts ? opts.datumName : null;
    this[towgs84$] = null;
    this[nadgrids$] = nadgrids;
    this[ellipse$] = ellipse;
    this[datumName$] = datumName;
    ;
  }).prototype = constant_datum.ConstantDatum.prototype;
  dart.addTypeTests(constant_datum.ConstantDatum);
  dart.addTypeCaches(constant_datum.ConstantDatum);
  dart.setLibraryUri(constant_datum.ConstantDatum, I[0]);
  dart.setFieldSignature(constant_datum.ConstantDatum, () => ({
    __proto__: dart.getFields(constant_datum.ConstantDatum.__proto__),
    towgs84: dart.fieldType(dart.nullable(core.String)),
    ellipse: dart.fieldType(core.String),
    datumName: dart.fieldType(core.String),
    nadgrids: dart.fieldType(dart.nullable(core.String))
  }));
  dart.trackLibraries("packages/proj4dart/src/classes/constant_datum.dart", {
    "package:proj4dart/src/classes/constant_datum.dart": constant_datum
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["constant_datum.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IACU;;;;;;IACD;;;;;;IACA;;;;;;IACC;;;;;;;;;;;;;;;;;;;;QAEuB;QAAyB;QAAyB;;IACnE,iBAAE,OAAO;IACT,iBAAE,OAAO;IACP,mBAAE,SAAS;;;;QAEgB;QAA0B;QAAyB;;IAC/E,kBAAE,QAAQ;IACX,iBAAE,OAAO;IACP,mBAAE,SAAS","file":"../../../../../../../../../../../../packages/proj4dart/src/classes/constant_datum.dart.lib.js"}');
  // Exports:
  return {
    src__classes__constant_datum: constant_datum
  };
}));

//# sourceMappingURL=constant_datum.dart.lib.js.map
