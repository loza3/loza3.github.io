define(['dart_sdk', 'packages/lottie/src/parser/json_utils.dart'], (function load__packages__lottie__src__parser__integer_parser_dart(dart_sdk, packages__lottie__src__parser__json_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_utils = packages__lottie__src__parser__json_utils$46dart.src__parser__json_utils;
  var integer_parser = Object.create(dart.library);
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  integer_parser.integerParser = function integerParser(reader, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    return (json_utils.JsonUtils.valueFromObject(reader) * scale)[$round]();
  };
  dart.trackLibraries("packages/lottie/src/parser/integer_parser.dart", {
    "package:lottie/src/parser/integer_parser.dart": integer_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["integer_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;wDAG6B;QAAyB;AACpD,UAAmD,EAAjC,AAAwB,qCAAR,MAAM,IAAI,KAAK;EACnD","file":"../../../../../../../../../../../../packages/lottie/src/parser/integer_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__integer_parser: integer_parser
  };
}));

//# sourceMappingURL=integer_parser.dart.lib.js.map
