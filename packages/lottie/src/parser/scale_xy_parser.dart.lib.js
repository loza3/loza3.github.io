define(['dart_sdk', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart'], (function load__packages__lottie__src__parser__scale_xy_parser_dart(dart_sdk, packages__lottie__src__parser__moshi__json_utf8_reader$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  var scale_xy_parser = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  scale_xy_parser.scaleXYParser = function scaleXYParser(reader, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let isArray = reader.peek() === json_reader.Token.beginArray;
    if (isArray) {
      reader.beginArray();
    }
    let sx = reader.nextDouble();
    let sy = reader.nextDouble();
    while (reader.hasNext()) {
      reader.skipValue();
    }
    if (isArray) {
      reader.endArray();
    }
    return new ui.Offset.new(sx / 100.0 * scale, sy / 100.0 * scale);
  };
  dart.trackLibraries("packages/lottie/src/parser/scale_xy_parser.dart", {
    "package:lottie/src/parser/scale_xy_parser.dart": scale_xy_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scale_xy_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;yDAGgC;QAAyB;AACnD,kBAAU,AAAO,AAAO,MAAR,YAAiB;AACrC,QAAI,OAAO;AACU,MAAnB,AAAO,MAAD;;AAEJ,aAAK,AAAO,MAAD;AACX,aAAK,AAAO,MAAD;AACf,WAAO,AAAO,MAAD;AACO,MAAlB,AAAO,MAAD;;AAER,QAAI,OAAO;AACQ,MAAjB,AAAO,MAAD;;AAER,UAAO,mBAAO,AAAG,AAAQ,EAAT,GAAG,QAAQ,KAAK,EAAE,AAAG,AAAQ,EAAT,GAAG,QAAQ,KAAK;EACtD","file":"../../../../../../../../../../../../packages/lottie/src/parser/scale_xy_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__scale_xy_parser: scale_xy_parser
  };
}));

//# sourceMappingURL=scale_xy_parser.dart.lib.js.map
