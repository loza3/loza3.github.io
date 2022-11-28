define(['dart_sdk'], (function load__packages__lottie__src__utils__gamma_evaluator_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var gamma_evaluator = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/utils/gamma_evaluator.dart"];
  gamma_evaluator.GammaEvaluator = class GammaEvaluator extends core.Object {
    static _oecfSRgb(linear) {
      return linear <= 0.0031308 ? linear * 12.92 : (math.pow(linear, 1.0 / 2.4) * 1.055 - 0.055)[$toDouble]();
    }
    static _eocfSRgb(srgb) {
      return srgb <= 0.04045 ? srgb / 12.92 : math.pow((srgb + 0.055) / 1.055, 2.4)[$toDouble]();
    }
    static evaluate(fraction, startColor, endColor) {
      if (startColor._equals(endColor)) {
        return startColor;
      }
      let startA = startColor.alpha / 255.0;
      let startR = startColor.red / 255.0;
      let startG = startColor.green / 255.0;
      let startB = startColor.blue / 255.0;
      let endA = endColor.alpha / 255.0;
      let endR = endColor.red / 255.0;
      let endG = endColor.green / 255.0;
      let endB = endColor.blue / 255.0;
      startR = gamma_evaluator.GammaEvaluator._eocfSRgb(startR);
      startG = gamma_evaluator.GammaEvaluator._eocfSRgb(startG);
      startB = gamma_evaluator.GammaEvaluator._eocfSRgb(startB);
      endR = gamma_evaluator.GammaEvaluator._eocfSRgb(endR);
      endG = gamma_evaluator.GammaEvaluator._eocfSRgb(endG);
      endB = gamma_evaluator.GammaEvaluator._eocfSRgb(endB);
      let a = startA + fraction * (endA - startA);
      let r = startR + fraction * (endR - startR);
      let g = startG + fraction * (endG - startG);
      let b = startB + fraction * (endB - startB);
      a = a * 255.0;
      r = gamma_evaluator.GammaEvaluator._oecfSRgb(r) * 255.0;
      g = gamma_evaluator.GammaEvaluator._oecfSRgb(g) * 255.0;
      b = gamma_evaluator.GammaEvaluator._oecfSRgb(b) * 255.0;
      return new ui.Color.fromARGB(a[$round](), r[$round](), g[$round](), b[$round]());
    }
    static ['_#new#tearOff']() {
      return new gamma_evaluator.GammaEvaluator.new();
    }
  };
  (gamma_evaluator.GammaEvaluator.new = function() {
    ;
  }).prototype = gamma_evaluator.GammaEvaluator.prototype;
  dart.addTypeTests(gamma_evaluator.GammaEvaluator);
  dart.addTypeCaches(gamma_evaluator.GammaEvaluator);
  dart.setStaticMethodSignature(gamma_evaluator.GammaEvaluator, () => ['_oecfSRgb', '_eocfSRgb', 'evaluate']);
  dart.setLibraryUri(gamma_evaluator.GammaEvaluator, I[0]);
  dart.trackLibraries("packages/lottie/src/utils/gamma_evaluator.dart", {
    "package:lottie/src/utils/gamma_evaluator.dart": gamma_evaluator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gamma_evaluator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;qBAWiC;AAE7B,YAAO,AAAO,OAAD,IAAI,YACX,AAAO,MAAD,GAAG,QACkC,CAAzC,AAAuB,AAAS,SAA5B,MAAM,EAAE,AAAI,MAAE,OAAO,QAAS;IAC5C;qBAI+B;AAE7B,YAAO,AAAK,KAAD,IAAI,UACT,AAAK,IAAD,GAAG,QACP,AAAiC,SAAd,CAAd,AAAK,IAAD,GAAG,SAAS,OAAO;IACpC;oBAE6B,UAAgB,YAAkB;AAC7D,UAAI,AAAW,UAAD,SAAI,QAAQ;AACxB,cAAO,WAAU;;AAEf,mBAAS,AAAW,AAAM,UAAP,SAAS;AAC5B,mBAAS,AAAW,AAAI,UAAL,OAAO;AAC1B,mBAAS,AAAW,AAAM,UAAP,SAAS;AAC5B,mBAAS,AAAW,AAAK,UAAN,QAAQ;AAE3B,iBAAO,AAAS,AAAM,QAAP,SAAS;AACxB,iBAAO,AAAS,AAAI,QAAL,OAAO;AACtB,iBAAO,AAAS,AAAM,QAAP,SAAS;AACxB,iBAAO,AAAS,AAAK,QAAN,QAAQ;AAGD,MAA1B,SAAS,yCAAU,MAAM;AACC,MAA1B,SAAS,yCAAU,MAAM;AACC,MAA1B,SAAS,yCAAU,MAAM;AAEH,MAAtB,OAAO,yCAAU,IAAI;AACC,MAAtB,OAAO,yCAAU,IAAI;AACC,MAAtB,OAAO,yCAAU,IAAI;AAGjB,cAAI,AAAO,MAAD,GAAG,AAAS,QAAD,IAAI,AAAK,IAAD,GAAG,MAAM;AACtC,cAAI,AAAO,MAAD,GAAG,AAAS,QAAD,IAAI,AAAK,IAAD,GAAG,MAAM;AACtC,cAAI,AAAO,MAAD,GAAG,AAAS,QAAD,IAAI,AAAK,IAAD,GAAG,MAAM;AACtC,cAAI,AAAO,MAAD,GAAG,AAAS,QAAD,IAAI,AAAK,IAAD,GAAG,MAAM;AAG7B,MAAb,IAAI,AAAE,CAAD,GAAG;AACgB,MAAxB,IAAI,AAAa,yCAAH,CAAC,IAAI;AACK,MAAxB,IAAI,AAAa,yCAAH,CAAC,IAAI;AACK,MAAxB,IAAI,AAAa,yCAAH,CAAC,IAAI;AAEnB,YAAa,uBAAS,AAAE,CAAD,YAAU,AAAE,CAAD,YAAU,AAAE,CAAD,YAAU,AAAE,CAAD;IAC1D;;;;;;;EACF","file":"../../../../../../../../../../../../packages/lottie/src/utils/gamma_evaluator.dart.lib.js"}');
  // Exports:
  return {
    src__utils__gamma_evaluator: gamma_evaluator
  };
}));

//# sourceMappingURL=gamma_evaluator.dart.lib.js.map
