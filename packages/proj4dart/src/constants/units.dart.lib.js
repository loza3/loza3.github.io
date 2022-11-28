define(['dart_sdk', 'packages/proj4dart/src/classes/unit.dart'], (function load__packages__proj4dart__src__constants__units_dart(dart_sdk, packages__proj4dart__src__classes__unit$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const unit$ = packages__proj4dart__src__classes__unit$46dart.src__classes__unit;
  var units = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  units.match = function match(unit) {
    switch (unit) {
      case "ft":
        {
          return new unit$.Unit.new({to_meter: 0.3048});
        }
      case "us-ft":
        {
          return new unit$.Unit.new({to_meter: 1200 / 3937});
        }
      default:
        {
          return null;
        }
    }
  };
  dart.trackLibraries("packages/proj4dart/src/constants/units.dart", {
    "package:proj4dart/src/constants/units.dart": units
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["units.dart"],"names":[],"mappings":";;;;;;;;;;;;+BAEmB;AACjB,YAAQ,IAAI;;;AAER,gBAAO,+BAAe;;;;AAEtB,gBAAO,+BAAe,AAAK,OAAE;;;;AAE7B,gBAAO;;;EAEb","file":"../../../../../../../../../../../../packages/proj4dart/src/constants/units.dart.lib.js"}');
  // Exports:
  return {
    src__constants__units: units
  };
}));

//# sourceMappingURL=units.dart.lib.js.map
