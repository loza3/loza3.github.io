define(['dart_sdk', 'packages/lottie/src/parser/json_utils.dart'], (function load__packages__lottie__src__parser__float_parser_dart(dart_sdk, packages__lottie__src__parser__json_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_utils = packages__lottie__src__parser__json_utils$46dart.src__parser__json_utils;
  var float_parser = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  float_parser.floatParser = function floatParser(reader, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    return json_utils.JsonUtils.valueFromObject(reader) * scale;
  };
  dart.trackLibraries("packages/lottie/src/parser/float_parser.dart", {
    "package:lottie/src/parser/float_parser.dart": float_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["float_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;kDAG8B;QAAyB;AACrD,UAAiB,AAAwB,sCAAR,MAAM,IAAI,KAAK;EAClD","file":"../../../../../../../../../../../../packages/lottie/src/parser/float_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__float_parser: float_parser
  };
}));

//# sourceMappingURL=float_parser.dart.lib.js.map
