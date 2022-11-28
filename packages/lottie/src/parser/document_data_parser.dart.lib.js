define(['dart_sdk', 'packages/lottie/src/model/document_data.dart', 'packages/lottie/src/parser/json_utils.dart', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart'], (function load__packages__lottie__src__parser__document_data_parser_dart(dart_sdk, packages__lottie__src__model__document_data$46dart, packages__lottie__src__parser__json_utils$46dart, packages__lottie__src__parser__moshi__json_utf8_reader$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const document_data = packages__lottie__src__model__document_data$46dart.src__model__document_data;
  const json_utils = packages__lottie__src__parser__json_utils$46dart.src__parser__json_utils;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  var document_data_parser = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    }
  }, false);
  var C = [void 0];
  var Color_value = dart.privateName(ui, "Color.value");
  document_data_parser.documentDataParser = function documentDataParser(reader, opts) {
    let t0;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let text = null;
    let fontName = null;
    let size = 0.0;
    let justification = document_data.Justification.center;
    let tracking = 0;
    let lineHeight = 0.0;
    let baselineShift = 0.0;
    let fillColor = C[0] || CT.C0;
    let strokeColor = C[0] || CT.C0;
    let strokeWidth = 0.0;
    let strokeOverFill = true;
    reader.beginObject();
    while (reader.hasNext()) {
      switch (reader.selectName(document_data_parser._names)) {
        case 0:
          {
            text = reader.nextString();
            break;
          }
        case 1:
          {
            fontName = reader.nextString();
            break;
          }
        case 2:
          {
            size = reader.nextDouble();
            break;
          }
        case 3:
          {
            let justificationInt = reader.nextInt();
            if (justificationInt > document_data.Justification.center.index || justificationInt < 0) {
              justification = document_data.Justification.center;
            } else {
              justification = document_data.Justification.values[$_get](justificationInt);
            }
            break;
          }
        case 4:
          {
            tracking = reader.nextInt();
            break;
          }
        case 5:
          {
            lineHeight = reader.nextDouble();
            break;
          }
        case 6:
          {
            baselineShift = reader.nextDouble();
            break;
          }
        case 7:
          {
            fillColor = json_utils.JsonUtils.jsonToColor(reader);
            break;
          }
        case 8:
          {
            strokeColor = json_utils.JsonUtils.jsonToColor(reader);
            break;
          }
        case 9:
          {
            strokeWidth = reader.nextDouble();
            break;
          }
        case 10:
          {
            strokeOverFill = reader.nextBoolean();
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
    return new document_data.DocumentData.new({text: (t0 = text, t0 == null ? "" : t0), fontName: fontName, size: size, justification: justification, tracking: tracking, lineHeight: lineHeight, baselineShift: baselineShift, color: fillColor, strokeColor: strokeColor, strokeWidth: strokeWidth, strokeOverFill: strokeOverFill});
  };
  dart.defineLazy(document_data_parser, {
    /*document_data_parser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T.JSArrayOfString().of(["t", "f", "s", "j", "tr", "lh", "ls", "fc", "sc", "sw", "of"]));
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/parser/document_data_parser.dart", {
    "package:lottie/src/parser/document_data_parser.dart": document_data_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["document_data_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wEAmB2C;;QAAyB;AAC1D;AACA;AACJ,eAAO;AACP,wBAA8B;AAC9B,mBAAW;AACX,qBAAa;AACb,wBAAgB;AAChB;AACA;AACA,sBAAc;AACd,yBAAiB;AAED,IAApB,AAAO,MAAD;AACN,WAAO,AAAO,MAAD;AACX,cAAQ,AAAO,MAAD,YAAY;;;AAEI,YAA1B,OAAO,AAAO,MAAD;AACb;;;;AAE8B,YAA9B,WAAW,AAAO,MAAD;AACjB;;;;AAE0B,YAA1B,OAAO,AAAO,MAAD;AACb;;;;AAEI,mCAAmB,AAAO,MAAD;AAC7B,gBAAI,AAAiB,gBAAD,GAAiB,AAAO,4CACxC,AAAiB,gBAAD,GAAG;AACe,cAApC,gBAA8B;;AAEwB,cAAtD,gBAA8B,AAAM,0CAAC,gBAAgB;;AAEvD;;;;AAE2B,YAA3B,WAAW,AAAO,MAAD;AACjB;;;;AAEgC,YAAhC,aAAa,AAAO,MAAD;AACnB;;;;AAEmC,YAAnC,gBAAgB,AAAO,MAAD;AACtB;;;;AAEyC,YAAzC,YAAsB,iCAAY,MAAM;AACxC;;;;AAE2C,YAA3C,cAAwB,iCAAY,MAAM;AAC1C;;;;AAEiC,YAAjC,cAAc,AAAO,MAAD;AACpB;;;;AAEqC,YAArC,iBAAiB,AAAO,MAAD;AACvB;;;;AAEiB,YAAjB,AAAO,MAAD;AACY,YAAlB,AAAO,MAAD;;;;AAGM,IAAlB,AAAO,MAAD;AAEN,UAAO,4CACQ,KAAL,IAAI,EAAJ,aAAQ,oBACJ,QAAQ,QACZ,IAAI,iBACK,aAAa,YAClB,QAAQ,cACN,UAAU,iBACP,aAAa,SACrB,SAAS,eACH,WAAW,eACX,WAAW,kBACR,cAAc;EACpC;;MAxFwB,2BAAM;YAAqB,kCAAG,wBACpD,KACA,KACA,KACA,KACA,MACA,MACA,MACA,MACA,MACA,MACA","file":"../../../../../../../../../../../../packages/lottie/src/parser/document_data_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__document_data_parser: document_data_parser
  };
}));

//# sourceMappingURL=document_data_parser.dart.lib.js.map
