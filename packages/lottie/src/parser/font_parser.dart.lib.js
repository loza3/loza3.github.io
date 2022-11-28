define(['dart_sdk', 'packages/lottie/src/model/font.dart', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart'], (function load__packages__lottie__src__parser__font_parser_dart(dart_sdk, packages__lottie__src__model__font$46dart, packages__lottie__src__parser__moshi__json_utf8_reader$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const font = packages__lottie__src__model__font$46dart.src__model__font;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  var font_parser = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/parser/font_parser.dart"];
  font_parser.FontParser = class FontParser extends core.Object {
    static ['_#_#tearOff']() {
      return new font_parser.FontParser.__();
    }
    static parse(reader) {
      let t0, t0$, t0$0;
      let family = null;
      let name = null;
      let style = null;
      let ascent = 0.0;
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(font_parser.FontParser._names)) {
          case 0:
            {
              family = reader.nextString();
              break;
            }
          case 1:
            {
              name = reader.nextString();
              break;
            }
          case 2:
            {
              style = reader.nextString();
              break;
            }
          case 3:
            {
              ascent = reader.nextDouble();
              break;
            }
          default:
            {
              reader.skipName();
              reader.skipValue();
            }
        }
      }
      reader.endObject();
      return new font.Font.new({family: (t0 = family, t0 == null ? "" : t0), name: (t0$ = name, t0$ == null ? "" : t0$), style: (t0$0 = style, t0$0 == null ? "" : t0$0), ascent: ascent});
    }
  };
  (font_parser.FontParser.__ = function() {
    ;
  }).prototype = font_parser.FontParser.prototype;
  dart.addTypeTests(font_parser.FontParser);
  dart.addTypeCaches(font_parser.FontParser);
  dart.setStaticMethodSignature(font_parser.FontParser, () => ['parse']);
  dart.setLibraryUri(font_parser.FontParser, I[0]);
  dart.setStaticFieldSignature(font_parser.FontParser, () => ['_names']);
  dart.defineLazy(font_parser.FontParser, {
    /*font_parser.FontParser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T.JSArrayOfString().of(["fFamily", "fName", "fStyle", "ascent"]));
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/parser/font_parser.dart", {
    "package:lottie/src/parser/font_parser.dart": font_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["font_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;iBAS+B;;AACnB;AACA;AACA;AACJ,mBAAS;AAEO,MAApB,AAAO,MAAD;AACN,aAAO,AAAO,MAAD;AACX,gBAAQ,AAAO,MAAD,YAAY;;;AAEM,cAA5B,SAAS,AAAO,MAAD;AACf;;;;AAE0B,cAA1B,OAAO,AAAO,MAAD;AACb;;;;AAE2B,cAA3B,QAAQ,AAAO,MAAD;AACd;;;;AAE4B,cAA5B,SAAS,AAAO,MAAD;AACf;;;;AAEiB,cAAjB,AAAO,MAAD;AACY,cAAlB,AAAO,MAAD;;;;AAGM,MAAlB,AAAO,MAAD;AAEN,YAAO,6BACY,KAAP,MAAM,EAAN,aAAU,iBACP,MAAL,IAAI,EAAJ,cAAQ,mBACD,OAAN,KAAK,EAAL,eAAS,oBACR,MAAM;IACpB;;;;EAnCc;;;;;;;MAHiB,6BAAM;YACf,kCAAG,wBAAC,WAAW,SAAS,UAAU","file":"../../../../../../../../../../../../packages/lottie/src/parser/font_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__font_parser: font_parser
  };
}));

//# sourceMappingURL=font_parser.dart.lib.js.map
