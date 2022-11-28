define(['dart_sdk'], (function load__packages__stack_trace__src__utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(utils, {
    /*utils.chainGap*/get chainGap() {
      return "===== asynchronous gap ===========================\n";
    },
    /*utils.vmChainGap*/get vmChainGap() {
      return core.RegExp.new("^<asynchronous suspension>\\n?$", {multiLine: true});
    },
    /*utils.inJS*/get inJS() {
      return core.int.is(0.0);
    }
  }, false);
  dart.trackLibraries("packages/stack_trace/src/utils.dart", {
    "package:stack_trace/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;MAMM,cAAQ;;;MAIR,gBAAU;YAAG,iBAAO,+CAA8C;;MAI7D,UAAI;YAAO,aAAJ","file":"../../../../../../../../../../../packages/stack_trace/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
