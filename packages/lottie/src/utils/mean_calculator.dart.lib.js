define(['dart_sdk'], (function load__packages__lottie__src__utils__mean_calculator_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var mean_calculator = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/utils/mean_calculator.dart"];
  var _sum = dart.privateName(mean_calculator, "_sum");
  var _n = dart.privateName(mean_calculator, "_n");
  mean_calculator.MeanCalculator = class MeanCalculator extends core.Object {
    get mean() {
      return this[_n] === 0 ? 0.0 : this[_sum] / this[_n];
    }
    add(number) {
      this[_sum] = this[_sum] + number;
      this[_n] = this[_n] + 1;
    }
    static ['_#new#tearOff']() {
      return new mean_calculator.MeanCalculator.new();
    }
  };
  (mean_calculator.MeanCalculator.new = function() {
    this[_sum] = 0.0;
    this[_n] = 0;
    ;
  }).prototype = mean_calculator.MeanCalculator.prototype;
  dart.addTypeTests(mean_calculator.MeanCalculator);
  dart.addTypeCaches(mean_calculator.MeanCalculator);
  dart.setMethodSignature(mean_calculator.MeanCalculator, () => ({
    __proto__: dart.getMethods(mean_calculator.MeanCalculator.__proto__),
    add: dart.fnType(dart.void, [core.double])
  }));
  dart.setGetterSignature(mean_calculator.MeanCalculator, () => ({
    __proto__: dart.getGetters(mean_calculator.MeanCalculator.__proto__),
    mean: core.double
  }));
  dart.setLibraryUri(mean_calculator.MeanCalculator, I[0]);
  dart.setFieldSignature(mean_calculator.MeanCalculator, () => ({
    __proto__: dart.getFields(mean_calculator.MeanCalculator.__proto__),
    [_sum]: dart.fieldType(core.double),
    [_n]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/lottie/src/utils/mean_calculator.dart", {
    "package:lottie/src/utils/mean_calculator.dart": mean_calculator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mean_calculator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAIqB,YAAA,AAAG,cAAG,IAAI,MAAI,AAAK,aAAE;IAAE;QAE1B;AACA,MAAd,aAAA,AAAK,aAAG,MAAM;AACV,MAAJ,WAAA,AAAE,WAAA;IACJ;;;;;;IARO,aAAO;IACV,WAAK;;EAQX","file":"../../../../../../../../../../../../packages/lottie/src/utils/mean_calculator.dart.lib.js"}');
  // Exports:
  return {
    src__utils__mean_calculator: mean_calculator
  };
}));

//# sourceMappingURL=mean_calculator.dart.lib.js.map
