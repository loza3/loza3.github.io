define(['dart_sdk', 'packages/lottie/src/value/lottie_frame_info.dart'], (function load__packages__lottie__src__value__lottie_relative_double_value_callback_dart(dart_sdk, packages__lottie__src__value__lottie_frame_info$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lottie_frame_info = packages__lottie__src__value__lottie_frame_info$46dart.src__value__lottie_frame_info;
  var lottie_relative_double_value_callback = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LottieFrameInfoOfdouble: () => (T.LottieFrameInfoOfdouble = dart.constFn(lottie_frame_info.LottieFrameInfo$(core.double)))(),
    LottieFrameInfoOfdoubleTodouble: () => (T.LottieFrameInfoOfdoubleTodouble = dart.constFn(dart.fnType(core.double, [T.LottieFrameInfoOfdouble()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  lottie_relative_double_value_callback.relativeDoubleValueCallback = function relativeDoubleValueCallback(offset) {
    return dart.fn(frameInfo => {
      let originalValue = dart.nullCheck(ui.lerpDouble(frameInfo.startValue, frameInfo.endValue, frameInfo.interpolatedKeyframeProgress));
      return originalValue + offset;
    }, T.LottieFrameInfoOfdoubleTodouble());
  };
  dart.trackLibraries("packages/lottie/src/value/lottie_relative_double_value_callback.dart", {
    "package:lottie/src/value/lottie_relative_double_value_callback.dart": lottie_relative_double_value_callback
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lottie_relative_double_value_callback.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;2GAIW;AACT,UAAO,SAAyB;AAC1B,0BACuC,eADvB,cAAW,AAAU,SAAD,aAAa,AAAU,SAAD,WAC1D,AAAU,SAAD;AAEb,YAAO,AAAc,cAAD,GAAG,MAAM;;EAEjC","file":"../../../../../../../../../../../../packages/lottie/src/value/lottie_relative_double_value_callback.dart.lib.js"}');
  // Exports:
  return {
    src__value__lottie_relative_double_value_callback: lottie_relative_double_value_callback
  };
}));

//# sourceMappingURL=lottie_relative_double_value_callback.dart.lib.js.map
