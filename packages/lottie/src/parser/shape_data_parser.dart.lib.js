define(['dart_sdk', 'packages/lottie/src/parser/moshi/json_utf8_reader.dart', 'packages/lottie/src/parser/json_utils.dart', 'packages/lottie/src/model/content/shape_data.dart', 'packages/lottie/src/model/cubic_curve_data.dart'], (function load__packages__lottie__src__parser__shape_data_parser_dart(dart_sdk, packages__lottie__src__parser__moshi__json_utf8_reader$46dart, packages__lottie__src__parser__json_utils$46dart, packages__lottie__src__model__content__shape_data$46dart, packages__lottie__src__model__cubic_curve_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_reader = packages__lottie__src__parser__moshi__json_utf8_reader$46dart.src__parser__moshi__json_reader;
  const json_utils = packages__lottie__src__parser__json_utils$46dart.src__parser__json_utils;
  const shape_data = packages__lottie__src__model__content__shape_data$46dart.src__model__content__shape_data;
  const cubic_curve_data = packages__lottie__src__model__cubic_curve_data$46dart.src__model__cubic_curve_data;
  var shape_data_parser = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfCubicCurveData: () => (T.JSArrayOfCubicCurveData = dart.constFn(_interceptors.JSArray$(cubic_curve_data.CubicCurveData)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    }
  }, false);
  var C = [void 0];
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  shape_data_parser.shapeDataParser = function shapeDataParser(reader, opts) {
    let t0, t0$;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    if (reader.peek() === json_reader.Token.beginArray) {
      reader.beginArray();
    }
    let closed = false;
    let pointsArray = null;
    let inTangents = null;
    let outTangents = null;
    reader.beginObject();
    while (reader.hasNext()) {
      switch (reader.selectName(shape_data_parser._names)) {
        case 0:
          {
            closed = reader.nextBoolean();
            break;
          }
        case 1:
          {
            pointsArray = json_utils.JsonUtils.jsonToPoints(reader, scale);
            break;
          }
        case 2:
          {
            inTangents = json_utils.JsonUtils.jsonToPoints(reader, scale);
            break;
          }
        case 3:
          {
            outTangents = json_utils.JsonUtils.jsonToPoints(reader, scale);
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
    if (reader.peek() === json_reader.Token.endArray) {
      reader.endArray();
    }
    if (pointsArray == null || inTangents == null || outTangents == null) {
      dart.throw(core.Exception.new("Shape data was missing information."));
    }
    if (pointsArray[$isEmpty]) {
      return new shape_data.ShapeData.new(T.JSArrayOfCubicCurveData().of([]), {initialPoint: C[0] || CT.C0, closed: false});
    }
    let length = pointsArray[$length];
    let vertex = pointsArray[$_get](0);
    let initialPoint = vertex;
    let curves = T.JSArrayOfCubicCurveData().of([]);
    for (let i = 1; i < length; i = i + 1) {
      vertex = pointsArray[$_get](i);
      let previousVertex = pointsArray[$_get](i - 1);
      let cp1 = outTangents[$_get](i - 1);
      let cp2 = inTangents[$_get](i);
      let shapeCp1 = previousVertex['+'](cp1);
      let shapeCp2 = vertex['+'](cp2);
      curves[$add]((t0 = new cubic_curve_data.CubicCurveData.new(), (() => {
        t0.controlPoint1 = shapeCp1;
        t0.controlPoint2 = shapeCp2;
        t0.vertex = vertex;
        return t0;
      })()));
    }
    if (closed) {
      vertex = pointsArray[$_get](0);
      let previousVertex = pointsArray[$_get](length - 1);
      let cp1 = outTangents[$_get](length - 1);
      let cp2 = inTangents[$_get](0);
      let shapeCp1 = previousVertex['+'](cp1);
      let shapeCp2 = vertex['+'](cp2);
      curves[$add]((t0$ = new cubic_curve_data.CubicCurveData.new(), (() => {
        t0$.controlPoint1 = shapeCp1;
        t0$.controlPoint2 = shapeCp2;
        t0$.vertex = vertex;
        return t0$;
      })()));
    }
    return new shape_data.ShapeData.new(curves, {initialPoint: initialPoint, closed: closed});
  };
  dart.defineLazy(shape_data_parser, {
    /*shape_data_parser._names*/get _names() {
      return json_reader.JsonReaderOptions.of(T.JSArrayOfString().of(["c", "v", "i", "o"]));
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/parser/shape_data_parser.dart", {
    "package:lottie/src/parser/shape_data_parser.dart": shape_data_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shape_data_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+DAQqC;;QAAyB;AAG5D,QAAI,AAAO,AAAO,MAAR,YAAiB;AACN,MAAnB,AAAO,MAAD;;AAGJ,iBAAS;AACC;AACA;AACA;AACM,IAApB,AAAO,MAAD;AAEN,WAAO,AAAO,MAAD;AACX,cAAQ,AAAO,MAAD,YAAY;;;AAEO,YAA7B,SAAS,AAAO,MAAD;AACf;;;;AAEmD,YAAnD,cAAwB,kCAAa,MAAM,EAAE,KAAK;AAClD;;;;AAEkD,YAAlD,aAAuB,kCAAa,MAAM,EAAE,KAAK;AACjD;;;;AAEmD,YAAnD,cAAwB,kCAAa,MAAM,EAAE,KAAK;AAClD;;;;AAEiB,YAAjB,AAAO,MAAD;AACY,YAAlB,AAAO,MAAD;;;;AAIM,IAAlB,AAAO,MAAD;AAEN,QAAI,AAAO,AAAO,MAAR,YAAiB;AACR,MAAjB,AAAO,MAAD;;AAGR,QAAI,AAAY,WAAD,YAAY,AAAW,UAAD,YAAY,AAAY,WAAD;AACJ,MAAtD,WAAM,mBAAU;;AAGlB,QAAI,AAAY,WAAD;AACb,YAAO,8BAA0B,0EACa;;AAG5C,iBAAS,AAAY,WAAD;AACpB,iBAAS,AAAW,WAAA,QAAC;AACrB,uBAAe,MAAM;AACrB,iBAAyB;AAE7B,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,MAAM,EAAE,IAAA,AAAC,CAAA;AACJ,MAAvB,SAAS,AAAW,WAAA,QAAC,CAAC;AAClB,2BAAiB,AAAW,WAAA,QAAC,AAAE,CAAD,GAAG;AACjC,gBAAM,AAAW,WAAA,QAAC,AAAE,CAAD,GAAG;AACtB,gBAAM,AAAU,UAAA,QAAC,CAAC;AAClB,qBAAW,AAAe,cAAD,MAAG,GAAG;AAC/B,qBAAW,AAAO,MAAD,MAAG,GAAG;AAIP,MAHpB,AAAO,MAAD,wDAAK;AACP,2BAAgB,QAAQ;AACxB,2BAAgB,QAAQ;AACxB,oBAAS,MAAM;;;;AAGrB,QAAI,MAAM;AACe,MAAvB,SAAS,AAAW,WAAA,QAAC;AACjB,2BAAiB,AAAW,WAAA,QAAC,AAAO,MAAD,GAAG;AACtC,gBAAM,AAAW,WAAA,QAAC,AAAO,MAAD,GAAG;AAC3B,gBAAM,AAAU,UAAA,QAAC;AAEjB,qBAAW,AAAe,cAAD,MAAG,GAAG;AAC/B,qBAAW,AAAO,MAAD,MAAG,GAAG;AAKP,MAHpB,AAAO,MAAD,yDAAK;AACP,4BAAgB,QAAQ;AACxB,4BAAgB,QAAQ;AACxB,qBAAS,MAAM;;;;AAErB,UAAO,8BAAU,MAAM,iBAAgB,YAAY,UAAU,MAAM;EACrE;;MAnFwB,wBAAM;YAAqB,kCAAG,wBAAC,KAAK,KAAK,KAAK","file":"../../../../../../../../../../../../packages/lottie/src/parser/shape_data_parser.dart.lib.js"}');
  // Exports:
  return {
    src__parser__shape_data_parser: shape_data_parser
  };
}));

//# sourceMappingURL=shape_data_parser.dart.lib.js.map
