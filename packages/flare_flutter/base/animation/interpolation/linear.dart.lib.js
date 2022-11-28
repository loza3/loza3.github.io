define(['dart_sdk', 'packages/flare_flutter/base/animation/interpolation/interpolator.dart'], (function load__packages__flare_flutter__base__animation__interpolation__linear_dart(dart_sdk, packages__flare_flutter__base__animation__interpolation__interpolator$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interpolator = packages__flare_flutter__base__animation__interpolation__interpolator$46dart.base__animation__interpolation__interpolator;
  var linear = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flare_flutter/base/animation/interpolation/linear.dart"];
  linear.LinearInterpolator = class LinearInterpolator extends interpolator.Interpolator {
    static get instance() {
      return linear._instance;
    }
    getEasedMix(mix) {
      return mix;
    }
    static ['_#new#tearOff']() {
      return new linear.LinearInterpolator.new();
    }
  };
  (linear.LinearInterpolator.new = function() {
    ;
  }).prototype = linear.LinearInterpolator.prototype;
  dart.addTypeTests(linear.LinearInterpolator);
  dart.addTypeCaches(linear.LinearInterpolator);
  dart.setMethodSignature(linear.LinearInterpolator, () => ({
    __proto__: dart.getMethods(linear.LinearInterpolator.__proto__),
    getEasedMix: dart.fnType(core.double, [core.double])
  }));
  dart.setStaticGetterSignature(linear.LinearInterpolator, () => ['instance']);
  dart.setLibraryUri(linear.LinearInterpolator, I[0]);
  dart.defineLazy(linear, {
    /*linear._instance*/get _instance() {
      return new linear.LinearInterpolator.new();
    },
    set _instance(_) {}
  }, false);
  dart.trackLibraries("packages/flare_flutter/base/animation/interpolation/linear.dart", {
    "package:flare_flutter/base/animation/interpolation/linear.dart": linear
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["linear.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAGsC;IAAS;gBAGnB;AAAQ,gBAAG;;;;;;;;EACvC;;;;;;;;;;MAEmB,gBAAS;YAAG","file":"../../../../../../../../../../../../../packages/flare_flutter/base/animation/interpolation/linear.dart.lib.js"}');
  // Exports:
  return {
    base__animation__interpolation__linear: linear
  };
}));

//# sourceMappingURL=linear.dart.lib.js.map
