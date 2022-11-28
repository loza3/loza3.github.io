define(['dart_sdk'], (function load__packages__intl__src__intl__regexp_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var regexp = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(regexp, {
    /*regexp.asciiDigitMatcher*/get asciiDigitMatcher() {
      return core.RegExp.new("^\\d+");
    }
  }, false);
  dart.trackLibraries("packages/intl/src/intl/regexp.dart", {
    "package:intl/src/intl/regexp.dart": regexp
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["regexp.dart"],"names":[],"mappings":";;;;;;;;;;;;MAKa,wBAAiB;YAAG,iBAAO","file":"../../../../../../../../../../../../packages/intl/src/intl/regexp.dart.lib.js"}');
  // Exports:
  return {
    src__intl__regexp: regexp
  };
}));

//# sourceMappingURL=regexp.dart.lib.js.map
