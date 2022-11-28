define(['dart_sdk', 'packages/lottie/src/value/lottie_frame_info.dart'], (function load__packages__lottie__src__value__lottie_relative_integer_value_callback_dart(dart_sdk, packages__lottie__src__value__lottie_frame_info$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lottie_frame_info = packages__lottie__src__value__lottie_frame_info$46dart.src__value__lottie_frame_info;
  var lottie_relative_integer_value_callback = Object.create(dart.library);
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LottieFrameInfoOfint: () => (T.LottieFrameInfoOfint = dart.constFn(lottie_frame_info.LottieFrameInfo$(core.int)))(),
    LottieFrameInfoOfintToint: () => (T.LottieFrameInfoOfintToint = dart.constFn(dart.fnType(core.int, [T.LottieFrameInfoOfint()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  lottie_relative_integer_value_callback.relativeIntegerValueCallback = function relativeIntegerValueCallback(offset) {
    return dart.fn(frameInfo => {
      let originalValue = dart.nullCheck(ui.lerpDouble(frameInfo.startValue, frameInfo.endValue, frameInfo.interpolatedKeyframeProgress));
      return (originalValue + offset)[$round]();
    }, T.LottieFrameInfoOfintToint());
  };
  dart.trackLibraries("packages/lottie/src/value/lottie_relative_integer_value_callback.dart", {
    "package:lottie/src/value/lottie_relative_integer_value_callback.dart": lottie_relative_integer_value_callback
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lottie_relative_integer_value_callback.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;8GAGoE;AAClE,UAAO,SAAsB;AACvB,0BACuC,eADvB,cAAW,AAAU,SAAD,aAAa,AAAU,SAAD,WAC1D,AAAU,SAAD;AAEb,YAAgC,EAAxB,AAAc,aAAD,GAAG,MAAM;;EAElC","file":"../../../../../../../../../../../../packages/lottie/src/value/lottie_relative_integer_value_callback.dart.lib.js"}');
  // Exports:
  return {
    src__value__lottie_relative_integer_value_callback: lottie_relative_integer_value_callback
  };
}));

//# sourceMappingURL=lottie_relative_integer_value_callback.dart.lib.js.map
