define(['dart_sdk', 'packages/lottie/src/value/lottie_frame_info.dart'], (function load__packages__lottie__src__value__lottie_relative_point_value_callback_dart(dart_sdk, packages__lottie__src__value__lottie_frame_info$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lottie_frame_info = packages__lottie__src__value__lottie_frame_info$46dart.src__value__lottie_frame_info;
  var lottie_relative_point_value_callback = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LottieFrameInfoOfOffset: () => (T.LottieFrameInfoOfOffset = dart.constFn(lottie_frame_info.LottieFrameInfo$(ui.Offset)))(),
    LottieFrameInfoOfOffsetToOffset: () => (T.LottieFrameInfoOfOffsetToOffset = dart.constFn(dart.fnType(ui.Offset, [T.LottieFrameInfoOfOffset()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  lottie_relative_point_value_callback.relativeOffsetValueCallback = function relativeOffsetValueCallback(offset) {
    return dart.fn(frameInfo => {
      let point = dart.nullCheck(ui.Offset.lerp(frameInfo.startValue, frameInfo.endValue, frameInfo.interpolatedKeyframeProgress));
      return point.translate(offset.dx, offset.dy);
    }, T.LottieFrameInfoOfOffsetToOffset());
  };
  dart.trackLibraries("packages/lottie/src/value/lottie_relative_point_value_callback.dart", {
    "package:lottie/src/value/lottie_relative_point_value_callback.dart": lottie_relative_point_value_callback
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lottie_relative_point_value_callback.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;0GAIW;AACT,UAAO,SAAyB;AAC1B,kBACuC,eADxB,eAAK,AAAU,SAAD,aAAa,AAAU,SAAD,WACnD,AAAU,SAAD;AAEb,YAAO,AAAM,MAAD,WAAW,AAAO,MAAD,KAAK,AAAO,MAAD;;EAE5C","file":"../../../../../../../../../../../../packages/lottie/src/value/lottie_relative_point_value_callback.dart.lib.js"}');
  // Exports:
  return {
    src__value__lottie_relative_point_value_callback: lottie_relative_point_value_callback
  };
}));

//# sourceMappingURL=lottie_relative_point_value_callback.dart.lib.js.map
