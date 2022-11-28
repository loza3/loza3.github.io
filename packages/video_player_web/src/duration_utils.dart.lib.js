define(['dart_sdk'], (function load__packages__video_player_web__src__duration_utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var duration_utils = Object.create(dart.library);
  var $isFinite = dartx.isFinite;
  var $round = dartx.round;
  var $isInfinite = dartx.isInfinite;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: -9007199254740990000.0
      });
    }
  }, false);
  var C = [void 0];
  duration_utils.convertNumVideoDurationToPluginDuration = function convertNumVideoDurationToPluginDuration(duration) {
    if (duration[$isFinite]) {
      return new core.Duration.new({milliseconds: (duration * 1000)[$round]()});
    } else if (duration[$isInfinite]) {
      return duration_utils.jsCompatibleTimeUnset;
    }
    return null;
  };
  var Duration__duration = dart.privateName(core, "Duration._duration");
  dart.defineLazy(duration_utils, {
    /*duration_utils.jsCompatibleTimeUnset*/get jsCompatibleTimeUnset() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/video_player_web/src/duration_utils.dart", {
    "package:video_player_web/src/duration_utils.dart": duration_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["duration_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;4GAuBsD;AACpD,QAAI,AAAS,QAAD;AACV,YAAO,sCAC2B,CAAjB,AAAS,QAAD,GAAG;UAEvB,KAAI,AAAS,QAAD;AACjB,YAAO;;AAET,UAAO;EACT;;;MA1Be,oCAAqB","file":"../../../../../../../../../../../packages/video_player_web/src/duration_utils.dart.lib.js"}');
  // Exports:
  return {
    src__duration_utils: duration_utils
  };
}));

//# sourceMappingURL=duration_utils.dart.lib.js.map
