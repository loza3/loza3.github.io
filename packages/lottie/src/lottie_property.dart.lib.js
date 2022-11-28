define(['dart_sdk', 'packages/lottie/src/value/drop_shadow.dart'], (function load__packages__lottie__src__lottie_property_dart(dart_sdk, packages__lottie__src__value__drop_shadow$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _engine = dart_sdk._engine;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const drop_shadow = packages__lottie__src__value__drop_shadow$46dart.src__value__drop_shadow;
  var lottie_property = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 5,
        [OffsetBase__dx]: 5
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 6,
        [OffsetBase__dx]: 6
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 7,
        [OffsetBase__dx]: 7
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 8,
        [OffsetBase__dx]: 8
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10,
        [OffsetBase__dx]: 10
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 11,
        [OffsetBase__dx]: 11
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: drop_shadow.DropShadow.prototype,
        [DropShadow_radius]: 0,
        [DropShadow_distance]: 0,
        [DropShadow_direction]: 0,
        [DropShadow_color]: C[9] || CT.C9
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.BlendMode.prototype,
        [_Enum__name]: "dst",
        [_Enum_index]: 2
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: _engine.CkBlendModeColorFilter.prototype,
        [CkBlendModeColorFilter_blendMode]: C[11] || CT.C11,
        [CkBlendModeColorFilter_color]: C[12] || CT.C12
      });
    }
  }, false);
  var C = Array(13).fill(void 0);
  var I = ["package:lottie/src/lottie_property.dart"];
  var Color_value = dart.privateName(ui, "Color.value");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var DropShadow_radius = dart.privateName(drop_shadow, "DropShadow.radius");
  var DropShadow_distance = dart.privateName(drop_shadow, "DropShadow.distance");
  var DropShadow_direction = dart.privateName(drop_shadow, "DropShadow.direction");
  var DropShadow_color = dart.privateName(drop_shadow, "DropShadow.color");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var CkBlendModeColorFilter_blendMode = dart.privateName(_engine, "CkBlendModeColorFilter.blendMode");
  var CkBlendModeColorFilter_color = dart.privateName(_engine, "CkBlendModeColorFilter.color");
  lottie_property.LottieProperty = class LottieProperty extends core.Object {};
  (lottie_property.LottieProperty.new = function() {
    ;
  }).prototype = lottie_property.LottieProperty.prototype;
  dart.addTypeTests(lottie_property.LottieProperty);
  dart.addTypeCaches(lottie_property.LottieProperty);
  dart.setLibraryUri(lottie_property.LottieProperty, I[0]);
  dart.setStaticFieldSignature(lottie_property.LottieProperty, () => ['color', 'strokeColor', 'transformOpacity', 'opacity', 'transformAnchorPoint', 'transformPosition', 'ellipseSize', 'rectangleSize', 'cornerRadius', 'position', 'transformScale', 'transformRotation', 'transformSkew', 'transformSkewAngle', 'strokeWidth', 'textTracking', 'repeaterCopies', 'repeaterOffset', 'polystarPoints', 'polystarRotation', 'polystarInnerRadius', 'polystarOuterRadius', 'polystarInnerRoundedness', 'polystarOuterRoundedness', 'transformStartOpacity', 'transformEndOpacity', 'timeRemap', 'textSize', 'blurRadius', 'dropShadow', 'colorFilter', 'gradientColor', 'text']);
  dart.defineLazy(lottie_property.LottieProperty, {
    /*lottie_property.LottieProperty.color*/get color() {
      return C[0] || CT.C0;
    },
    /*lottie_property.LottieProperty.strokeColor*/get strokeColor() {
      return C[1] || CT.C1;
    },
    /*lottie_property.LottieProperty.transformOpacity*/get transformOpacity() {
      return 3;
    },
    /*lottie_property.LottieProperty.opacity*/get opacity() {
      return 4;
    },
    /*lottie_property.LottieProperty.transformAnchorPoint*/get transformAnchorPoint() {
      return C[2] || CT.C2;
    },
    /*lottie_property.LottieProperty.transformPosition*/get transformPosition() {
      return C[3] || CT.C3;
    },
    /*lottie_property.LottieProperty.ellipseSize*/get ellipseSize() {
      return C[4] || CT.C4;
    },
    /*lottie_property.LottieProperty.rectangleSize*/get rectangleSize() {
      return C[5] || CT.C5;
    },
    /*lottie_property.LottieProperty.cornerRadius*/get cornerRadius() {
      return 9;
    },
    /*lottie_property.LottieProperty.position*/get position() {
      return C[6] || CT.C6;
    },
    /*lottie_property.LottieProperty.transformScale*/get transformScale() {
      return C[7] || CT.C7;
    },
    /*lottie_property.LottieProperty.transformRotation*/get transformRotation() {
      return 12;
    },
    /*lottie_property.LottieProperty.transformSkew*/get transformSkew() {
      return 13;
    },
    /*lottie_property.LottieProperty.transformSkewAngle*/get transformSkewAngle() {
      return 14;
    },
    /*lottie_property.LottieProperty.strokeWidth*/get strokeWidth() {
      return 15;
    },
    /*lottie_property.LottieProperty.textTracking*/get textTracking() {
      return 16;
    },
    /*lottie_property.LottieProperty.repeaterCopies*/get repeaterCopies() {
      return 17;
    },
    /*lottie_property.LottieProperty.repeaterOffset*/get repeaterOffset() {
      return 18;
    },
    /*lottie_property.LottieProperty.polystarPoints*/get polystarPoints() {
      return 19;
    },
    /*lottie_property.LottieProperty.polystarRotation*/get polystarRotation() {
      return 20;
    },
    /*lottie_property.LottieProperty.polystarInnerRadius*/get polystarInnerRadius() {
      return 21;
    },
    /*lottie_property.LottieProperty.polystarOuterRadius*/get polystarOuterRadius() {
      return 22;
    },
    /*lottie_property.LottieProperty.polystarInnerRoundedness*/get polystarInnerRoundedness() {
      return 23;
    },
    /*lottie_property.LottieProperty.polystarOuterRoundedness*/get polystarOuterRoundedness() {
      return 24;
    },
    /*lottie_property.LottieProperty.transformStartOpacity*/get transformStartOpacity() {
      return 25;
    },
    /*lottie_property.LottieProperty.transformEndOpacity*/get transformEndOpacity() {
      return 26;
    },
    /*lottie_property.LottieProperty.timeRemap*/get timeRemap() {
      return 27;
    },
    /*lottie_property.LottieProperty.textSize*/get textSize() {
      return 28;
    },
    /*lottie_property.LottieProperty.blurRadius*/get blurRadius() {
      return 29;
    },
    /*lottie_property.LottieProperty.dropShadow*/get dropShadow() {
      return C[8] || CT.C8;
    },
    /*lottie_property.LottieProperty.colorFilter*/get colorFilter() {
      return C[10] || CT.C10;
    },
    /*lottie_property.LottieProperty.gradientColor*/get gradientColor() {
      return T.JSArrayOfColor().of([]);
    },
    /*lottie_property.LottieProperty.text*/get text() {
      return "dynamic_text";
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/lottie_property.dart", {
    "package:lottie/src/lottie_property.dart": lottie_property
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lottie_property.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA2IA;;;;;;MArFqB,oCAAK;;;MACL,0CAAW;;;MAGb,+CAAgB;;;MAGhB,sCAAO;;;MAGJ,mDAAoB;;;MAGpB,gDAAiB;;;MAGjB,0CAAW;;;MAGX,4CAAa;;;MAGb,2CAAY;;;MAGZ,uCAAQ;;;MACR,6CAAc;;;MAGd,gDAAiB;;;MAGjB,4CAAa;;;MAGb,iDAAkB;;;MAGlB,0CAAW;;;MACX,2CAAY;;;MACZ,6CAAc;;;MACd,6CAAc;;;MACd,6CAAc;;;MAGd,+CAAgB;;;MAGhB,kDAAmB;;;MAGnB,kDAAmB;;;MAGnB,uDAAwB;;;MAGxB,uDAAwB;;;MAGxB,oDAAqB;;;MAGrB,kDAAmB;;;MAGnB,wCAAS;;;MAGT,uCAAQ;;;MAGR,yCAAU;;;MAEjB,yCAAU;;;MAIE,0CAAW;;;MAGX,4CAAa;YAAG;;MAG5B,mCAAI","file":"../../../../../../../../../../../packages/lottie/src/lottie_property.dart.lib.js"}');
  // Exports:
  return {
    src__lottie_property: lottie_property
  };
}));

//# sourceMappingURL=lottie_property.dart.lib.js.map
