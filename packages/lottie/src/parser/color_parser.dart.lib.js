define(['dart_sdk', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart'], (function load__packages__lottie__src__parser__color_parser_dart(dart_sdk, packages__lottie__src__parser__moshi__json_utf8_reader$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  var color_parser = Object.create(dart.library);
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  color_parser.colorParser = function colorParser(reader, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let isArray = reader.peek() === json_reader.Token.beginArray;
    if (isArray) {
      reader.beginArray();
    }
    let r = reader.nextDouble();
    let g = reader.nextDouble();
    let b = reader.nextDouble();
    let a = 1.0;
    if (reader.peek() === json_reader.Token.number) {
      a = reader.nextDouble();
    }
    if (isArray) {
      reader.endArray();
    }
    if (r <= 1 && g <= 1 && b <= 1) {
      r = r * 255;
      g = g * 255;
      b = b * 255;
      if (a <= 1) a = a * 255;
    }
    return new ui.Color.fromARGB(a[$round](), r[$round](), g[$round](), b[$round]());
  };
  dart.trackLibraries("packages/lottie/src/parser/color_parser.dart", {
    "package:lottie/src/parser/color_parser.dart": color_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["color_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;kDAG6B;QAAyB;AAChD,kBAAU,AAAO,AAAO,MAAR,YAAiB;AACrC,QAAI,OAAO;AACU,MAAnB,AAAO,MAAD;;AAEJ,YAAI,AAAO,MAAD;AACV,YAAI,AAAO,MAAD;AACV,YAAI,AAAO,MAAD;AACV,YAAI;AAIR,QAAI,AAAO,AAAO,MAAR,YAAiB;AACF,MAAvB,IAAI,AAAO,MAAD;;AAGZ,QAAI,OAAO;AACQ,MAAjB,AAAO,MAAD;;AAGR,QAAI,AAAE,CAAD,IAAI,KAAK,AAAE,CAAD,IAAI,KAAK,AAAE,CAAD,IAAI;AACnB,MAAR,IAAA,AAAE,CAAD,GAAI;AACG,MAAR,IAAA,AAAE,CAAD,GAAI;AACG,MAAR,IAAA,AAAE,CAAD,GAAI;AAIL,UAAI,AAAE,CAAD,IAAI,GAAG,AAAQ,IAAR,AAAE,CAAD,GAAI;;AAGnB,UAAa,uBAAS,AAAE,CAAD,YAAU,AAAE,CAAD,YAAU,AAAE,CAAD,YAAU,AAAE,CAAD;EAC1D","file":"../../../../../../../../../../../../packages/lottie/src/parser/color_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__color_parser: color_parser
  };
}));

//# sourceMappingURL=color_parser.dart.lib.js.map
