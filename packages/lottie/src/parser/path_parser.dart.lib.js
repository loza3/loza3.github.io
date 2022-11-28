define(['dart_sdk', 'packages/lottie/src/parser/json_utils.dart'], (function load__packages__lottie__src__parser__path_parser_dart(dart_sdk, packages__lottie__src__parser__json_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_utils = packages__lottie__src__parser__json_utils$46dart.src__parser__json_utils;
  var path_parser = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  path_parser.pathParser = function pathParser(reader, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    return json_utils.JsonUtils.jsonToPoint(reader, scale);
  };
  dart.trackLibraries("packages/lottie/src/parser/path_parser.dart", {
    "package:lottie/src/parser/path_parser.dart": path_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;+CAI6B;QAAyB;AACpD,UAAiB,kCAAY,MAAM,EAAE,KAAK;EAC5C","file":"../../../../../../../../../../../../packages/lottie/src/parser/path_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__path_parser: path_parser
  };
}));

//# sourceMappingURL=path_parser.dart.lib.js.map
