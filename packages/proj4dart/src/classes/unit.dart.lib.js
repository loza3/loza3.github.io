define(['dart_sdk'], (function load__packages__proj4dart__src__classes__unit_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var unit = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:proj4dart/src/classes/unit.dart"];
  var to_meter$ = dart.privateName(unit, "Unit.to_meter");
  unit.Unit = class Unit extends core.Object {
    get to_meter() {
      return this[to_meter$];
    }
    set to_meter(value) {
      this[to_meter$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let to_meter = opts && 'to_meter' in opts ? opts.to_meter : null;
      return new unit.Unit.new({to_meter: to_meter});
    }
  };
  (unit.Unit.new = function(opts) {
    let to_meter = opts && 'to_meter' in opts ? opts.to_meter : null;
    this[to_meter$] = to_meter;
    ;
  }).prototype = unit.Unit.prototype;
  dart.addTypeTests(unit.Unit);
  dart.addTypeCaches(unit.Unit);
  dart.setLibraryUri(unit.Unit, I[0]);
  dart.setFieldSignature(unit.Unit, () => ({
    __proto__: dart.getFields(unit.Unit.__proto__),
    to_meter: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/proj4dart/src/classes/unit.dart", {
    "package:proj4dart/src/classes/unit.dart": unit
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["unit.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IACS;;;;;;;;;;;;QAEa;;;EAAU","file":"../../../../../../../../../../../../packages/proj4dart/src/classes/unit.dart.lib.js"}');
  // Exports:
  return {
    src__classes__unit: unit
  };
}));

//# sourceMappingURL=unit.dart.lib.js.map
