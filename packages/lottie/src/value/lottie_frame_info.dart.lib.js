define(['dart_sdk'], (function load__packages__lottie__src__value__lottie_frame_info_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var lottie_frame_info = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/value/lottie_frame_info.dart"];
  var startFrame$ = dart.privateName(lottie_frame_info, "LottieFrameInfo.startFrame");
  var endFrame$ = dart.privateName(lottie_frame_info, "LottieFrameInfo.endFrame");
  var startValue$ = dart.privateName(lottie_frame_info, "LottieFrameInfo.startValue");
  var endValue$ = dart.privateName(lottie_frame_info, "LottieFrameInfo.endValue");
  var linearKeyframeProgress$ = dart.privateName(lottie_frame_info, "LottieFrameInfo.linearKeyframeProgress");
  var interpolatedKeyframeProgress$ = dart.privateName(lottie_frame_info, "LottieFrameInfo.interpolatedKeyframeProgress");
  var overallProgress$ = dart.privateName(lottie_frame_info, "LottieFrameInfo.overallProgress");
  const _is_LottieFrameInfo_default = Symbol('_is_LottieFrameInfo_default');
  lottie_frame_info.LottieFrameInfo$ = dart.generic(T => {
    class LottieFrameInfo extends core.Object {
      get startFrame() {
        return this[startFrame$];
      }
      set startFrame(value) {
        super.startFrame = value;
      }
      get endFrame() {
        return this[endFrame$];
      }
      set endFrame(value) {
        super.endFrame = value;
      }
      get startValue() {
        return this[startValue$];
      }
      set startValue(value) {
        super.startValue = value;
      }
      get endValue() {
        return this[endValue$];
      }
      set endValue(value) {
        super.endValue = value;
      }
      get linearKeyframeProgress() {
        return this[linearKeyframeProgress$];
      }
      set linearKeyframeProgress(value) {
        super.linearKeyframeProgress = value;
      }
      get interpolatedKeyframeProgress() {
        return this[interpolatedKeyframeProgress$];
      }
      set interpolatedKeyframeProgress(value) {
        super.interpolatedKeyframeProgress = value;
      }
      get overallProgress() {
        return this[overallProgress$];
      }
      set overallProgress(value) {
        super.overallProgress = value;
      }
      static ['_#new#tearOff'](T, startFrame, endFrame, startValue, endValue, linearKeyframeProgress, interpolatedKeyframeProgress, overallProgress) {
        return new (lottie_frame_info.LottieFrameInfo$(T)).new(startFrame, endFrame, startValue, endValue, linearKeyframeProgress, interpolatedKeyframeProgress, overallProgress);
      }
    }
    (LottieFrameInfo.new = function(startFrame, endFrame, startValue, endValue, linearKeyframeProgress, interpolatedKeyframeProgress, overallProgress) {
      this[startFrame$] = startFrame;
      this[endFrame$] = endFrame;
      this[startValue$] = startValue;
      this[endValue$] = endValue;
      this[linearKeyframeProgress$] = linearKeyframeProgress;
      this[interpolatedKeyframeProgress$] = interpolatedKeyframeProgress;
      this[overallProgress$] = overallProgress;
      ;
    }).prototype = LottieFrameInfo.prototype;
    dart.addTypeTests(LottieFrameInfo);
    LottieFrameInfo.prototype[_is_LottieFrameInfo_default] = true;
    dart.addTypeCaches(LottieFrameInfo);
    dart.setLibraryUri(LottieFrameInfo, I[0]);
    dart.setFieldSignature(LottieFrameInfo, () => ({
      __proto__: dart.getFields(LottieFrameInfo.__proto__),
      startFrame: dart.finalFieldType(core.double),
      endFrame: dart.finalFieldType(dart.nullable(core.double)),
      startValue: dart.finalFieldType(dart.nullable(T)),
      endValue: dart.finalFieldType(dart.nullable(T)),
      linearKeyframeProgress: dart.finalFieldType(core.double),
      interpolatedKeyframeProgress: dart.finalFieldType(core.double),
      overallProgress: dart.finalFieldType(core.double)
    }));
    return LottieFrameInfo;
  });
  lottie_frame_info.LottieFrameInfo = lottie_frame_info.LottieFrameInfo$();
  dart.addTypeTests(lottie_frame_info.LottieFrameInfo, _is_LottieFrameInfo_default);
  dart.trackLibraries("packages/lottie/src/value/lottie_frame_info.dart", {
    "package:lottie/src/value/lottie_frame_info.dart": lottie_frame_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lottie_frame_info.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;MAEe;;;;;;MACC;;;;;;MACL;;;;;;MACA;;;;;;MACI;;;;;;MACA;;;;;;MACA;;;;;;;;;;oCAGJ,YACA,UACA,YACA,UACA,wBACA,8BACA;MANA;MACA;MACA;MACA;MACA;MACA;MACA;;IAAgB","file":"../../../../../../../../../../../../packages/lottie/src/value/lottie_frame_info.dart.lib.js"}');
  // Exports:
  return {
    src__value__lottie_frame_info: lottie_frame_info
  };
}));

//# sourceMappingURL=lottie_frame_info.dart.lib.js.map
