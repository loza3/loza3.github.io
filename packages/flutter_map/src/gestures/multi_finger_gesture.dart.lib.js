define(['dart_sdk'], (function load__packages__flutter_map__src__gestures__multi_finger_gesture_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var multi_finger_gesture = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_map/src/gestures/multi_finger_gesture.dart"];
  multi_finger_gesture.MultiFingerGesture = class MultiFingerGesture extends core.Object {
    static hasFlag(leftFlags, rightFlags) {
      return (leftFlags & rightFlags) !== 0;
    }
    static ['_#new#tearOff']() {
      return new multi_finger_gesture.MultiFingerGesture.new();
    }
  };
  (multi_finger_gesture.MultiFingerGesture.new = function() {
    ;
  }).prototype = multi_finger_gesture.MultiFingerGesture.prototype;
  dart.addTypeTests(multi_finger_gesture.MultiFingerGesture);
  dart.addTypeCaches(multi_finger_gesture.MultiFingerGesture);
  dart.setStaticMethodSignature(multi_finger_gesture.MultiFingerGesture, () => ['hasFlag']);
  dart.setLibraryUri(multi_finger_gesture.MultiFingerGesture, I[0]);
  dart.setStaticFieldSignature(multi_finger_gesture.MultiFingerGesture, () => ['all', 'none', 'pinchMove', 'pinchZoom', 'rotate']);
  dart.defineLazy(multi_finger_gesture.MultiFingerGesture, {
    /*multi_finger_gesture.MultiFingerGesture.all*/get all() {
      return 7;
    },
    /*multi_finger_gesture.MultiFingerGesture.none*/get none() {
      return 0;
    },
    /*multi_finger_gesture.MultiFingerGesture.pinchMove*/get pinchMove() {
      return 1;
    },
    /*multi_finger_gesture.MultiFingerGesture.pinchZoom*/get pinchZoom() {
      return 2;
    },
    /*multi_finger_gesture.MultiFingerGesture.rotate*/get rotate() {
      return 4;
    }
  }, false);
  dart.trackLibraries("packages/flutter_map/src/gestures/multi_finger_gesture.dart", {
    "package:flutter_map/src/gestures/multi_finger_gesture.dart": multi_finger_gesture
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["multi_finger_gesture.dart"],"names":[],"mappings":";;;;;;;;;;;;;mBAyB0B,WAAe;AACrC,YAA8B,EAAvB,AAAU,SAAD,GAAG,UAAU,MAAI;IACnC;;;;;;;EACF;;;;;;;MAnBmB,2CAAG;;;MACH,4CAAI;;;MAGJ,iDAAS;;;MAGT,iDAAS;;;MAGT,8CAAM","file":"../../../../../../../../../../../../packages/flutter_map/src/gestures/multi_finger_gesture.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__multi_finger_gesture: multi_finger_gesture
  };
}));

//# sourceMappingURL=multi_finger_gesture.dart.lib.js.map
