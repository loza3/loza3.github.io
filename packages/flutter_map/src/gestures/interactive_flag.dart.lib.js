define(['dart_sdk'], (function load__packages__flutter_map__src__gestures__interactive_flag_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var interactive_flag = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_map/src/gestures/interactive_flag.dart"];
  interactive_flag.InteractiveFlag = class InteractiveFlag extends core.Object {
    static hasFlag(leftFlags, rightFlags) {
      return (leftFlags & rightFlags) !== 0;
    }
    static ['_#new#tearOff']() {
      return new interactive_flag.InteractiveFlag.new();
    }
  };
  (interactive_flag.InteractiveFlag.new = function() {
    ;
  }).prototype = interactive_flag.InteractiveFlag.prototype;
  dart.addTypeTests(interactive_flag.InteractiveFlag);
  dart.addTypeCaches(interactive_flag.InteractiveFlag);
  dart.setStaticMethodSignature(interactive_flag.InteractiveFlag, () => ['hasFlag']);
  dart.setLibraryUri(interactive_flag.InteractiveFlag, I[0]);
  dart.setStaticFieldSignature(interactive_flag.InteractiveFlag, () => ['all', 'none', 'drag', 'flingAnimation', 'pinchMove', 'pinchZoom', 'doubleTapZoom', 'rotate']);
  dart.defineLazy(interactive_flag.InteractiveFlag, {
    /*interactive_flag.InteractiveFlag.all*/get all() {
      return 63;
    },
    /*interactive_flag.InteractiveFlag.none*/get none() {
      return 0;
    },
    /*interactive_flag.InteractiveFlag.drag*/get drag() {
      return 1;
    },
    /*interactive_flag.InteractiveFlag.flingAnimation*/get flingAnimation() {
      return 2;
    },
    /*interactive_flag.InteractiveFlag.pinchMove*/get pinchMove() {
      return 4;
    },
    /*interactive_flag.InteractiveFlag.pinchZoom*/get pinchZoom() {
      return 8;
    },
    /*interactive_flag.InteractiveFlag.doubleTapZoom*/get doubleTapZoom() {
      return 16;
    },
    /*interactive_flag.InteractiveFlag.rotate*/get rotate() {
      return 32;
    }
  }, false);
  dart.trackLibraries("packages/flutter_map/src/gestures/interactive_flag.dart", {
    "package:flutter_map/src/gestures/interactive_flag.dart": interactive_flag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interactive_flag.dart"],"names":[],"mappings":";;;;;;;;;;;;;mBAsC0B,WAAe;AACrC,YAA8B,EAAvB,AAAU,SAAD,GAAG,UAAU,MAAI;IACnC;;;;;;;EACF;;;;;;;MA9BmB,oCAAG;;;MAEH,qCAAI;;;MAGJ,qCAAI;;;MAGJ,+CAAc;;;MAGd,0CAAS;;;MAGT,0CAAS;;;MAGT,8CAAa;;;MAGb,uCAAM","file":"../../../../../../../../../../../../packages/flutter_map/src/gestures/interactive_flag.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__interactive_flag: interactive_flag
  };
}));

//# sourceMappingURL=interactive_flag.dart.lib.js.map
