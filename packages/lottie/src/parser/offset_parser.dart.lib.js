define(['dart_sdk', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart', 'packages/lottie/src/parser/json_utils.dart'], (function load__packages__lottie__src__parser__offset_parser_dart(dart_sdk, packages__lottie__src__parser__moshi__json_utf8_reader$46dart, packages__lottie__src__parser__json_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  const json_utils = packages__lottie__src__parser__json_utils$46dart.src__parser__json_utils;
  var offset_parser = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  offset_parser.offsetParser = function offsetParser(reader, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let token = reader.peek();
    if (token === json_reader.Token.beginArray) {
      return json_utils.JsonUtils.jsonToPoint(reader, scale);
    } else if (token === json_reader.Token.beginObject) {
      return json_utils.JsonUtils.jsonToPoint(reader, scale);
    } else if (token === json_reader.Token.number) {
      let point = new ui.Offset.new(reader.nextDouble() * scale, reader.nextDouble() * scale);
      while (reader.hasNext()) {
        reader.skipValue();
      }
      return point;
    } else {
      dart.throw(core.Exception.new("Cannot convert json to point. Next token is " + dart.str(token)));
    }
  };
  dart.trackLibraries("packages/lottie/src/parser/offset_parser.dart", {
    "package:lottie/src/parser/offset_parser.dart": offset_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["offset_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;qDAI+B;QAAyB;AAClD,gBAAQ,AAAO,MAAD;AAClB,QAAI,AAAM,KAAD,KAAU;AACjB,YAAiB,kCAAY,MAAM,EAAE,KAAK;UACrC,KAAI,AAAM,KAAD,KAAU;AACxB,YAAiB,kCAAY,MAAM,EAAE,KAAK;UACrC,KAAI,AAAM,KAAD,KAAU;AAIpB,kBACA,kBAAO,AAAO,AAAa,MAAd,gBAAgB,KAAK,EAAE,AAAO,AAAa,MAAd,gBAAgB,KAAK;AACnE,aAAO,AAAO,MAAD;AACO,QAAlB,AAAO,MAAD;;AAER,YAAO,MAAK;;AAEyD,MAArE,WAAM,mBAAU,AAAoD,0DAAN,KAAK;;EAEvE","file":"../../../../../../../../../../../../packages/lottie/src/parser/offset_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__offset_parser: offset_parser
  };
}));

//# sourceMappingURL=offset_parser.dart.lib.js.map
