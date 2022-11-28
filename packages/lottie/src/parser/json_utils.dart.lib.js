define(['dart_sdk', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart'], (function load__packages__lottie__src__parser__json_utils_dart(dart_sdk, packages__lottie__src__parser__moshi__json_utf8_reader$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  var json_utils = Object.create(dart.library);
  var $round = dartx.round;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfOffset: () => (T.JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: json_reader.Token.prototype,
        [_Enum__name]: "number",
        [_Enum_index]: 6
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: json_reader.Token.prototype,
        [_Enum__name]: "beginArray",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: json_reader.Token.prototype,
        [_Enum__name]: "beginObject",
        [_Enum_index]: 2
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:lottie/src/parser/json_utils.dart"];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  json_utils.JsonUtils = class JsonUtils extends core.Object {
    static jsonToColor(reader) {
      reader.beginArray();
      let r = (reader.nextDouble() * 255)[$round]();
      let g = (reader.nextDouble() * 255)[$round]();
      let b = (reader.nextDouble() * 255)[$round]();
      while (reader.hasNext()) {
        reader.skipValue();
      }
      reader.endArray();
      return new ui.Color.fromARGB(255, r, g, b);
    }
    static jsonToPoints(reader, scale) {
      let points = T.JSArrayOfOffset().of([]);
      reader.beginArray();
      while (reader.peek() === json_reader.Token.beginArray) {
        reader.beginArray();
        points[$add](json_utils.JsonUtils.jsonToPoint(reader, scale));
        reader.endArray();
      }
      reader.endArray();
      return points;
    }
    static jsonToPoint(reader, scale) {
      switch (reader.peek()) {
        case C[0] || CT.C0:
          {
            return json_utils.JsonUtils._jsonNumbersToPoint(reader, scale);
          }
        case C[1] || CT.C1:
          {
            return json_utils.JsonUtils._jsonArrayToPoint(reader, scale);
          }
        case C[2] || CT.C2:
          {
            return json_utils.JsonUtils._jsonObjectToPoint(reader, {scale: scale});
          }
        default:
          {
            dart.throw(core.Exception.new("Unknown point starts with " + dart.str(reader.peek())));
          }
      }
    }
    static _jsonNumbersToPoint(reader, scale) {
      let x = reader.nextDouble();
      let y = reader.nextDouble();
      while (reader.hasNext()) {
        reader.skipValue();
      }
      return new ui.Offset.new(x * scale, y * scale);
    }
    static _jsonArrayToPoint(reader, scale) {
      let x = null;
      let y = null;
      reader.beginArray();
      x = reader.nextDouble();
      y = reader.nextDouble();
      while (reader.peek() !== json_reader.Token.endArray) {
        reader.skipValue();
      }
      reader.endArray();
      return new ui.Offset.new(x * scale, y * scale);
    }
    static _jsonObjectToPoint(reader, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : null;
      let x = 0.0;
      let y = 0.0;
      reader.beginObject();
      while (reader.hasNext()) {
        switch (reader.selectName(json_utils.JsonUtils._pointNames)) {
          case 0:
            {
              x = json_utils.JsonUtils.valueFromObject(reader);
              break;
            }
          case 1:
            {
              y = json_utils.JsonUtils.valueFromObject(reader);
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
      return new ui.Offset.new(x * scale, y * scale);
    }
    static valueFromObject(reader) {
      let token = reader.peek();
      switch (token) {
        case C[0] || CT.C0:
          {
            return reader.nextDouble();
          }
        case C[1] || CT.C1:
          {
            reader.beginArray();
            let val = reader.nextDouble();
            while (reader.hasNext()) {
              reader.skipValue();
            }
            reader.endArray();
            return val;
          }
        default:
          {
            dart.throw(core.Exception.new("Unknown value for token of type " + dart.str(token)));
          }
      }
    }
    static ['_#new#tearOff']() {
      return new json_utils.JsonUtils.new();
    }
  };
  (json_utils.JsonUtils.new = function() {
    ;
  }).prototype = json_utils.JsonUtils.prototype;
  dart.addTypeTests(json_utils.JsonUtils);
  dart.addTypeCaches(json_utils.JsonUtils);
  dart.setStaticMethodSignature(json_utils.JsonUtils, () => ['jsonToColor', 'jsonToPoints', 'jsonToPoint', '_jsonNumbersToPoint', '_jsonArrayToPoint', '_jsonObjectToPoint', 'valueFromObject']);
  dart.setLibraryUri(json_utils.JsonUtils, I[0]);
  dart.setStaticFieldSignature(json_utils.JsonUtils, () => ['_pointNames']);
  dart.defineLazy(json_utils.JsonUtils, {
    /*json_utils.JsonUtils._pointNames*/get _pointNames() {
      return json_reader.JsonReaderOptions.of(T.JSArrayOfString().of(["x", "y"]));
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/parser/json_utils.dart", {
    "package:lottie/src/parser/json_utils.dart": json_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["json_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uBAIsC;AACf,MAAnB,AAAO,MAAD;AACF,cAAgC,CAA3B,AAAO,AAAa,MAAd,gBAAgB;AAC3B,cAAgC,CAA3B,AAAO,AAAa,MAAd,gBAAgB;AAC3B,cAAgC,CAA3B,AAAO,AAAa,MAAd,gBAAgB;AAC/B,aAAO,AAAO,MAAD;AACO,QAAlB,AAAO,MAAD;;AAES,MAAjB,AAAO,MAAD;AACN,YAAa,uBAAS,KAAK,CAAC,EAAE,CAAC,EAAE,CAAC;IACpC;wBAE4C,QAAe;AACrD,mBAAiB;AAEF,MAAnB,AAAO,MAAD;AACN,aAAO,AAAO,AAAO,MAAR,YAAiB;AACT,QAAnB,AAAO,MAAD;AACgC,QAAtC,AAAO,MAAD,OAAK,iCAAY,MAAM,EAAE,KAAK;AACnB,QAAjB,AAAO,MAAD;;AAES,MAAjB,AAAO,MAAD;AACN,YAAO,OAAM;IACf;uBAEqC,QAAe;AAClD,cAAQ,AAAO,MAAD;;;AAEV,kBAAO,0CAAoB,MAAM,EAAE,KAAK;;;;AAExC,kBAAO,wCAAkB,MAAM,EAAE,KAAK;;;;AAEtC,kBAAO,yCAAmB,MAAM,UAAS,KAAK;;;;AAGe,YAA7D,WAAM,mBAAU,AAA4C,wCAAf,AAAO,MAAD;;;IAEzD;+BAE6C,QAAe;AACtD,cAAI,AAAO,MAAD;AACV,cAAI,AAAO,MAAD;AACd,aAAO,AAAO,MAAD;AACO,QAAlB,AAAO,MAAD;;AAER,YAAO,mBAAO,AAAE,CAAD,GAAG,KAAK,EAAE,AAAE,CAAD,GAAG,KAAK;IACpC;6BAE2C,QAAe;AACjD;AACA;AACY,MAAnB,AAAO,MAAD;AACiB,MAAvB,IAAI,AAAO,MAAD;AACa,MAAvB,IAAI,AAAO,MAAD;AACV,aAAO,AAAO,MAAD,YAAiB;AACV,QAAlB,AAAO,MAAD;;AAES,MAAjB,AAAO,MAAD;AACN,YAAO,mBAAO,AAAE,CAAD,GAAG,KAAK,EAAE,AAAE,CAAD,GAAG,KAAK;IACpC;8BAI4C;UAAyB;AAC/D,cAAI;AACJ,cAAI;AACY,MAApB,AAAO,MAAD;AACN,aAAO,AAAO,MAAD;AACX,gBAAQ,AAAO,MAAD,YAAY;;;AAEK,cAA3B,IAAI,qCAAgB,MAAM;AAC1B;;;;AAE2B,cAA3B,IAAI,qCAAgB,MAAM;AAC1B;;;;AAEiB,cAAjB,AAAO,MAAD;AACY,cAAlB,AAAO,MAAD;;;;AAGM,MAAlB,AAAO,MAAD;AACN,YAAO,mBAAO,AAAE,CAAD,GAAG,KAAK,EAAE,AAAE,CAAD,GAAG,KAAK;IACpC;2BAEyC;AACnC,kBAAQ,AAAO,MAAD;AAClB,cAAQ,KAAK;;;AAET,kBAAO,AAAO,OAAD;;;;AAEM,YAAnB,AAAO,MAAD;AACF,sBAAM,AAAO,MAAD;AAChB,mBAAO,AAAO,MAAD;AACO,cAAlB,AAAO,MAAD;;AAES,YAAjB,AAAO,MAAD;AACN,kBAAO,IAAG;;;;AAG+C,YAAzD,WAAM,mBAAU,AAAwC,8CAAN,KAAK;;;IAE7D;;;;;;;EACF;;;;;;;MAzCiC,gCAAW;YAAqB,kCAAG,wBAAC,KAAK","file":"../../../../../../../../../../../../packages/lottie/src/parser/json_utils.dart.lib.js"}');
  // Exports:
  return {
    src__parser__json_utils: json_utils
  };
}));

//# sourceMappingURL=json_utils.dart.lib.js.map
