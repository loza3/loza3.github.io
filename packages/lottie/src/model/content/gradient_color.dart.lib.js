define(['dart_sdk', 'packages/lottie/src/utils/gamma_evaluator.dart'], (function load__packages__lottie__src__model__content__gradient_color_dart(dart_sdk, packages__lottie__src__utils__gamma_evaluator$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gamma_evaluator = packages__lottie__src__utils__gamma_evaluator$46dart.src__utils__gamma_evaluator;
  var gradient_color = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/model/content/gradient_color.dart"];
  var positions$ = dart.privateName(gradient_color, "GradientColor.positions");
  var colors$ = dart.privateName(gradient_color, "GradientColor.colors");
  gradient_color.GradientColor = class GradientColor extends core.Object {
    get positions() {
      return this[positions$];
    }
    set positions(value) {
      super.positions = value;
    }
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    static ['_#new#tearOff'](positions, colors) {
      return new gradient_color.GradientColor.new(positions, colors);
    }
    get size() {
      return this.colors[$length];
    }
    lerp(gc1, gc2, progress) {
      if (gc1.colors[$length] !== gc2.colors[$length]) {
        dart.throw(core.Exception.new("Cannot interpolate between gradients. " + "Lengths vary (" + dart.str(gc1.colors[$length]) + " vs " + dart.str(gc2.colors[$length]) + ")"));
      }
      for (let i = 0; i < gc1.colors[$length]; i = i + 1) {
        this.positions[$_set](i, dart.nullCheck(ui.lerpDouble(gc1.positions[$_get](i), gc2.positions[$_get](i), progress)));
        this.colors[$_set](i, gamma_evaluator.GammaEvaluator.evaluate(progress, gc1.colors[$_get](i), gc2.colors[$_get](i)));
      }
    }
  };
  (gradient_color.GradientColor.new = function(positions, colors) {
    this[positions$] = positions;
    this[colors$] = colors;
    ;
  }).prototype = gradient_color.GradientColor.prototype;
  dart.addTypeTests(gradient_color.GradientColor);
  dart.addTypeCaches(gradient_color.GradientColor);
  dart.setMethodSignature(gradient_color.GradientColor, () => ({
    __proto__: dart.getMethods(gradient_color.GradientColor.__proto__),
    lerp: dart.fnType(dart.void, [gradient_color.GradientColor, gradient_color.GradientColor, core.double])
  }));
  dart.setGetterSignature(gradient_color.GradientColor, () => ({
    __proto__: dart.getGetters(gradient_color.GradientColor.__proto__),
    size: core.int
  }));
  dart.setLibraryUri(gradient_color.GradientColor, I[0]);
  dart.setFieldSignature(gradient_color.GradientColor, () => ({
    __proto__: dart.getFields(gradient_color.GradientColor.__proto__),
    positions: dart.finalFieldType(core.List$(core.double)),
    colors: dart.finalFieldType(core.List$(ui.Color))
  }));
  dart.trackLibraries("packages/lottie/src/model/content/gradient_color.dart", {
    "package:lottie/src/model/content/gradient_color.dart": gradient_color
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gradient_color.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAIqB;;;;;;IACD;;;;;;;;;;AAIF,YAAA,AAAO;IAAM;SAEL,KAAmB,KAAY;AACrD,UAAI,AAAI,AAAO,GAAR,qBAAkB,AAAI,AAAO,GAAR;AAEwC,QADlE,WAAM,mBAAS,AAAC,2CACZ,4BAAiB,AAAI,AAAO,GAAR,oBAAe,kBAAM,AAAI,AAAO,GAAR,oBAAe;;AAGjE,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAI,AAAO,GAAR,kBAAgB,IAAA,AAAC,CAAA;AACkC,QAAxE,AAAS,sBAAC,CAAC,EAA4D,eAAxD,cAAW,AAAI,AAAS,GAAV,kBAAW,CAAC,GAAG,AAAI,AAAS,GAAV,kBAAW,CAAC,GAAG,QAAQ;AAEH,QADnE,AAAM,mBAAC,CAAC,EACW,wCAAS,QAAQ,EAAE,AAAI,AAAM,GAAP,eAAQ,CAAC,GAAG,AAAI,AAAM,GAAP,eAAQ,CAAC;;IAErE;;+CAfmB,WAAgB;IAAhB;IAAgB;;EAAO","file":"../../../../../../../../../../../../../packages/lottie/src/model/content/gradient_color.dart.lib.js"}');
  // Exports:
  return {
    src__model__content__gradient_color: gradient_color
  };
}));

//# sourceMappingURL=gradient_color.dart.lib.js.map
