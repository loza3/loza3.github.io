define(['dart_sdk'], (function load__packages__lottie__src__frame_rate_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var frame_rate = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/frame_rate.dart",
    "package:lottie/src/frame_rate.dart"
  ];
  var framesPerSecond$ = dart.privateName(frame_rate, "FrameRate.framesPerSecond");
  frame_rate.FrameRate = class FrameRate extends core.Object {
    get framesPerSecond() {
      return this[framesPerSecond$];
    }
    set framesPerSecond(value) {
      super.framesPerSecond = value;
    }
    static ['_#new#tearOff'](framesPerSecond) {
      return new frame_rate.FrameRate.new(framesPerSecond);
    }
    static ['_#_special#tearOff'](framesPerSecond) {
      return new frame_rate.FrameRate._special(framesPerSecond);
    }
  };
  (frame_rate.FrameRate.new = function(framesPerSecond) {
    this[framesPerSecond$] = framesPerSecond;
    if (!(framesPerSecond > 0)) dart.assertFailed(null, I[0], 7, 44, "framesPerSecond > 0");
    ;
  }).prototype = frame_rate.FrameRate.prototype;
  (frame_rate.FrameRate._special = function(framesPerSecond) {
    this[framesPerSecond$] = framesPerSecond;
    ;
  }).prototype = frame_rate.FrameRate.prototype;
  dart.addTypeTests(frame_rate.FrameRate);
  dart.addTypeCaches(frame_rate.FrameRate);
  dart.setLibraryUri(frame_rate.FrameRate, I[1]);
  dart.setFieldSignature(frame_rate.FrameRate, () => ({
    __proto__: dart.getFields(frame_rate.FrameRate.__proto__),
    framesPerSecond: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(frame_rate.FrameRate, () => ['max', 'composition']);
  dart.defineLazy(frame_rate.FrameRate, {
    /*frame_rate.FrameRate.max*/get max() {
      return new frame_rate.FrameRate._special(0.0);
    },
    /*frame_rate.FrameRate.composition*/get composition() {
      return new frame_rate.FrameRate._special(-1.0);
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/frame_rate.dart", {
    "package:lottie/src/frame_rate.dart": frame_rate
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["frame_rate.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAIe;;;;;;;;;;;;;;IAEE;UAA0B,AAAgB,eAAD,GAAG;;EAAE;;IACrC;;EAAgB;;;;;;;;;;MAN3B,wBAAG;YAAa,mCAAS;;MACzB,gCAAW;YAAa,mCAAS","file":"../../../../../../../../../../../packages/lottie/src/frame_rate.dart.lib.js"}');
  // Exports:
  return {
    src__frame_rate: frame_rate
  };
}));

//# sourceMappingURL=frame_rate.dart.lib.js.map
