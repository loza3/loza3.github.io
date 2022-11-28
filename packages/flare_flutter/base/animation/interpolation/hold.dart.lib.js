define(['dart_sdk', 'packages/flare_flutter/base/animation/interpolation/interpolator.dart'], (function load__packages__flare_flutter__base__animation__interpolation__hold_dart(dart_sdk, packages__flare_flutter__base__animation__interpolation__interpolator$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interpolator = packages__flare_flutter__base__animation__interpolation__interpolator$46dart.base__animation__interpolation__interpolator;
  var hold = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flare_flutter/base/animation/interpolation/hold.dart"];
  hold.HoldInterpolator = class HoldInterpolator extends interpolator.Interpolator {
    static get instance() {
      return hold._instance;
    }
    getEasedMix(mix) {
      return 0.0;
    }
    static ['_#new#tearOff']() {
      return new hold.HoldInterpolator.new();
    }
  };
  (hold.HoldInterpolator.new = function() {
    ;
  }).prototype = hold.HoldInterpolator.prototype;
  dart.addTypeTests(hold.HoldInterpolator);
  dart.addTypeCaches(hold.HoldInterpolator);
  dart.setMethodSignature(hold.HoldInterpolator, () => ({
    __proto__: dart.getMethods(hold.HoldInterpolator.__proto__),
    getEasedMix: dart.fnType(core.double, [core.double])
  }));
  dart.setStaticGetterSignature(hold.HoldInterpolator, () => ['instance']);
  dart.setLibraryUri(hold.HoldInterpolator, I[0]);
  dart.defineLazy(hold, {
    /*hold._instance*/get _instance() {
      return new hold.HoldInterpolator.new();
    },
    set _instance(_) {}
  }, false);
  dart.trackLibraries("packages/flare_flutter/base/animation/interpolation/hold.dart", {
    "package:flare_flutter/base/animation/interpolation/hold.dart": hold
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hold.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAII,YAAO;IACT;gBAG0B;AACxB,YAAO;IACT;;;;;;;EACF;;;;;;;;;;MAEiB,cAAS;YAAG","file":"../../../../../../../../../../../../../packages/flare_flutter/base/animation/interpolation/hold.dart.lib.js"}');
  // Exports:
  return {
    base__animation__interpolation__hold: hold
  };
}));

//# sourceMappingURL=hold.dart.lib.js.map
