define(['dart_sdk'], (function load__packages__mgrs_dart__src__classes__utm_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utm = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:mgrs_dart/src/classes/utm.dart"];
  var easting$ = dart.privateName(utm, "UTM.easting");
  var northing$ = dart.privateName(utm, "UTM.northing");
  var zoneLetter$ = dart.privateName(utm, "UTM.zoneLetter");
  var zoneNumber$ = dart.privateName(utm, "UTM.zoneNumber");
  var accuracy$ = dart.privateName(utm, "UTM.accuracy");
  utm.UTM = class UTM extends core.Object {
    get easting() {
      return this[easting$];
    }
    set easting(value) {
      this[easting$] = value;
    }
    get northing() {
      return this[northing$];
    }
    set northing(value) {
      this[northing$] = value;
    }
    get zoneLetter() {
      return this[zoneLetter$];
    }
    set zoneLetter(value) {
      this[zoneLetter$] = value;
    }
    get zoneNumber() {
      return this[zoneNumber$];
    }
    set zoneNumber(value) {
      this[zoneNumber$] = value;
    }
    get accuracy() {
      return this[accuracy$];
    }
    set accuracy(value) {
      this[accuracy$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let easting = opts && 'easting' in opts ? opts.easting : null;
      let northing = opts && 'northing' in opts ? opts.northing : null;
      let zoneLetter = opts && 'zoneLetter' in opts ? opts.zoneLetter : null;
      let zoneNumber = opts && 'zoneNumber' in opts ? opts.zoneNumber : null;
      let accuracy = opts && 'accuracy' in opts ? opts.accuracy : null;
      return new utm.UTM.new({easting: easting, northing: northing, zoneLetter: zoneLetter, zoneNumber: zoneNumber, accuracy: accuracy});
    }
    toString() {
      return "Easting: " + dart.str(this.easting) + ", northing: " + dart.str(this.northing) + ", zoneLetter: " + this.zoneLetter + ", zoneNumber: " + dart.str(this.zoneNumber) + ", accuracy: " + dart.str(this.accuracy);
    }
  };
  (utm.UTM.new = function(opts) {
    let easting = opts && 'easting' in opts ? opts.easting : null;
    let northing = opts && 'northing' in opts ? opts.northing : null;
    let zoneLetter = opts && 'zoneLetter' in opts ? opts.zoneLetter : null;
    let zoneNumber = opts && 'zoneNumber' in opts ? opts.zoneNumber : null;
    let accuracy = opts && 'accuracy' in opts ? opts.accuracy : null;
    this[easting$] = easting;
    this[northing$] = northing;
    this[zoneLetter$] = zoneLetter;
    this[zoneNumber$] = zoneNumber;
    this[accuracy$] = accuracy;
    ;
  }).prototype = utm.UTM.prototype;
  dart.addTypeTests(utm.UTM);
  dart.addTypeCaches(utm.UTM);
  dart.setLibraryUri(utm.UTM, I[0]);
  dart.setFieldSignature(utm.UTM, () => ({
    __proto__: dart.getFields(utm.UTM.__proto__),
    easting: dart.fieldType(core.double),
    northing: dart.fieldType(core.double),
    zoneLetter: dart.fieldType(core.String),
    zoneNumber: dart.fieldType(core.int),
    accuracy: dart.fieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(utm.UTM, ['toString']);
  dart.trackLibraries("packages/mgrs_dart/src/classes/utm.dart", {
    "package:mgrs_dart/src/classes/utm.dart": utm
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utm.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACH;;;;;;IACC;;;;;;;;;;;;;;;AAgBH,YAAO,AAA+G,wBAApG,gBAAO,0BAAa,iBAAQ,mBAAe,kBAAU,4BAAe,mBAAU,0BAAa;IAC/G;;;QAdqB;QACD;QACA;QACH;QACR;IACK,iBAAE,OAAO;IACR,kBAAE,QAAQ;IACR,oBAAE,UAAU;IACZ,oBAAE,UAAU;IACd,kBAAE,QAAQ","file":"../../../../../../../../../../../../packages/mgrs_dart/src/classes/utm.dart.lib.js"}');
  // Exports:
  return {
    src__classes__utm: utm
  };
}));

//# sourceMappingURL=utm.dart.lib.js.map
