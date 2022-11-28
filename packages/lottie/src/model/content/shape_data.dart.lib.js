define(['dart_sdk', 'packages/lottie/src/model/cubic_curve_data.dart'], (function load__packages__lottie__src__model__content__shape_data_dart(dart_sdk, packages__lottie__src__model__cubic_curve_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cubic_curve_data = packages__lottie__src__model__cubic_curve_data$46dart.src__model__cubic_curve_data;
  var shape_data = Object.create(dart.library);
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $add = dartx.add;
  var $removeAt = dartx.removeAt;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfCubicCurveData: () => (T.JSArrayOfCubicCurveData = dart.constFn(_interceptors.JSArray$(cubic_curve_data.CubicCurveData)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/model/content/shape_data.dart"];
  var curves$ = dart.privateName(shape_data, "ShapeData.curves");
  var _initialPoint = dart.privateName(shape_data, "_initialPoint");
  var _closed = dart.privateName(shape_data, "_closed");
  shape_data.ShapeData = class ShapeData extends core.Object {
    get curves() {
      return this[curves$];
    }
    set curves(value) {
      super.curves = value;
    }
    static ['_#new#tearOff'](curves, opts) {
      let initialPoint = opts && 'initialPoint' in opts ? opts.initialPoint : null;
      let closed = opts && 'closed' in opts ? opts.closed : null;
      return new shape_data.ShapeData.new(curves, {initialPoint: initialPoint, closed: closed});
    }
    static ['_#empty#tearOff']() {
      return new shape_data.ShapeData.empty();
    }
    setInitialPoint(x, y) {
      this[_initialPoint] = new ui.Offset.new(x, y);
    }
    get initialPoint() {
      return this[_initialPoint];
    }
    setClosed(closed) {
      this[_closed] = closed;
    }
    get isClosed() {
      return this[_closed];
    }
    interpolateBetween(shapeData1, shapeData2, percentage) {
      this[_closed] = shapeData1.isClosed || shapeData2.isClosed;
      if (shapeData1.curves[$length] !== shapeData2.curves[$length]) {
      }
      let points = math.min(core.int, shapeData1.curves[$length], shapeData2.curves[$length]);
      if (this.curves[$length] < points) {
        for (let i = this.curves[$length]; i < points; i = i + 1) {
          this.curves[$add](new cubic_curve_data.CubicCurveData.new());
        }
      } else if (this.curves[$length] > points) {
        for (let i = this.curves[$length] - 1; i >= points; i = i - 1) {
          this.curves[$removeAt](this.curves[$length] - 1);
        }
      }
      let initialPoint1 = shapeData1.initialPoint;
      let initialPoint2 = shapeData2.initialPoint;
      this.setInitialPoint(dart.nullCheck(ui.lerpDouble(initialPoint1.dx, initialPoint2.dx, percentage)), dart.nullCheck(ui.lerpDouble(initialPoint1.dy, initialPoint2.dy, percentage)));
      for (let i = this.curves[$length] - 1; i >= 0; i = i - 1) {
        let curve1 = shapeData1.curves[$_get](i);
        let curve2 = shapeData2.curves[$_get](i);
        let cp11 = curve1.controlPoint1;
        let cp21 = curve1.controlPoint2;
        let vertex1 = curve1.vertex;
        let cp12 = curve2.controlPoint1;
        let cp22 = curve2.controlPoint2;
        let vertex2 = curve2.vertex;
        this.curves[$_get](i).controlPoint1 = new ui.Offset.new(dart.nullCheck(ui.lerpDouble(cp11.dx, cp12.dx, percentage)), dart.nullCheck(ui.lerpDouble(cp11.dy, cp12.dy, percentage)));
        this.curves[$_get](i).controlPoint2 = new ui.Offset.new(dart.nullCheck(ui.lerpDouble(cp21.dx, cp22.dx, percentage)), dart.nullCheck(ui.lerpDouble(cp21.dy, cp22.dy, percentage)));
        this.curves[$_get](i).vertex = new ui.Offset.new(dart.nullCheck(ui.lerpDouble(vertex1.dx, vertex2.dx, percentage)), dart.nullCheck(ui.lerpDouble(vertex1.dy, vertex2.dy, percentage)));
      }
    }
    toString() {
      return "ShapeData{" + "numCurves=" + dart.str(this.curves[$length]) + "closed=" + dart.str(this[_closed]) + "}";
    }
  };
  (shape_data.ShapeData.new = function(curves, opts) {
    let t0, t0$;
    let initialPoint = opts && 'initialPoint' in opts ? opts.initialPoint : null;
    let closed = opts && 'closed' in opts ? opts.closed : null;
    this[curves$] = curves[$toList]();
    this[_initialPoint] = (t0 = initialPoint, t0 == null ? ui.Offset.zero : t0);
    this[_closed] = (t0$ = closed, t0$ == null ? false : t0$);
    ;
  }).prototype = shape_data.ShapeData.prototype;
  (shape_data.ShapeData.empty = function() {
    shape_data.ShapeData.new.call(this, T.JSArrayOfCubicCurveData().of([]));
  }).prototype = shape_data.ShapeData.prototype;
  dart.addTypeTests(shape_data.ShapeData);
  dart.addTypeCaches(shape_data.ShapeData);
  dart.setMethodSignature(shape_data.ShapeData, () => ({
    __proto__: dart.getMethods(shape_data.ShapeData.__proto__),
    setInitialPoint: dart.fnType(dart.void, [core.double, core.double]),
    setClosed: dart.fnType(dart.void, [core.bool]),
    interpolateBetween: dart.fnType(dart.void, [shape_data.ShapeData, shape_data.ShapeData, core.double])
  }));
  dart.setGetterSignature(shape_data.ShapeData, () => ({
    __proto__: dart.getGetters(shape_data.ShapeData.__proto__),
    initialPoint: ui.Offset,
    isClosed: core.bool
  }));
  dart.setLibraryUri(shape_data.ShapeData, I[0]);
  dart.setFieldSignature(shape_data.ShapeData, () => ({
    __proto__: dart.getFields(shape_data.ShapeData.__proto__),
    curves: dart.finalFieldType(core.List$(cubic_curve_data.CubicCurveData)),
    [_initialPoint]: dart.fieldType(ui.Offset),
    [_closed]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(shape_data.ShapeData, ['toString']);
  dart.trackLibraries("packages/lottie/src/model/content/shape_data.dart", {
    "package:lottie/src/model/content/shape_data.dart": shape_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shape_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAK6B;;;;;;;;;;;;;;oBAWC,GAAU;AACR,MAA5B,sBAAgB,kBAAO,CAAC,EAAE,CAAC;IAC7B;;AAGE,YAAO;IACT;cAEoB;AACF,MAAhB,gBAAU,MAAM;IAClB;;AAGE,YAAO;IACT;uBAGc,YAAsB,YAAmB;AACD,MAApD,gBAAU,AAAW,AAAS,UAAV,aAAa,AAAW,UAAD;AAE3C,UAAI,AAAW,AAAO,UAAR,qBAAkB,AAAW,AAAO,UAAR;;AAQtC,mBAAS,mBAAI,AAAW,AAAO,UAAR,kBAAgB,AAAW,AAAO,UAAR;AACrD,UAAI,AAAO,AAAO,uBAAE,MAAM;AACxB,iBAAS,IAAI,AAAO,sBAAQ,AAAE,CAAD,GAAG,MAAM,EAAE,IAAA,AAAC,CAAA;AACX,UAA5B,AAAO,kBAAI;;YAER,KAAI,AAAO,AAAO,uBAAE,MAAM;AAC/B,iBAAS,IAAI,AAAO,AAAO,uBAAE,GAAG,AAAE,CAAD,IAAI,MAAM,EAAE,IAAA,AAAC,CAAA;AACV,UAAlC,AAAO,uBAAS,AAAO,AAAO,uBAAE;;;AAIhC,0BAAgB,AAAW,UAAD;AAC1B,0BAAgB,AAAW,UAAD;AAGkC,MADhE,qBAA0E,eAA1D,cAAW,AAAc,aAAD,KAAK,AAAc,aAAD,KAAK,UAAU,IACX,eAA1D,cAAW,AAAc,aAAD,KAAK,AAAc,aAAD,KAAK,UAAU;AAE7D,eAAS,IAAI,AAAO,AAAO,uBAAE,GAAG,AAAE,CAAD,IAAI,GAAG,IAAA,AAAC,CAAA;AACnC,qBAAS,AAAW,AAAM,UAAP,eAAQ,CAAC;AAC5B,qBAAS,AAAW,AAAM,UAAP,eAAQ,CAAC;AAE5B,mBAAO,AAAO,MAAD;AACb,mBAAO,AAAO,MAAD;AACb,sBAAU,AAAO,MAAD;AAEhB,mBAAO,AAAO,MAAD;AACb,mBAAO,AAAO,MAAD;AACb,sBAAU,AAAO,MAAD;AAI0B,QAF9C,AAAM,AAAI,mBAAH,CAAC,kBAAkB,kBACkB,eAAxC,cAAW,AAAK,IAAD,KAAK,AAAK,IAAD,KAAK,UAAU,IACC,eAAxC,cAAW,AAAK,IAAD,KAAK,AAAK,IAAD,KAAK,UAAU;AAGG,QAF9C,AAAM,AAAI,mBAAH,CAAC,kBAAkB,kBACkB,eAAxC,cAAW,AAAK,IAAD,KAAK,AAAK,IAAD,KAAK,UAAU,IACC,eAAxC,cAAW,AAAK,IAAD,KAAK,AAAK,IAAD,KAAK,UAAU;AAES,QADpD,AAAM,AAAI,mBAAH,CAAC,WAAW,kBAAqD,eAA9C,cAAW,AAAQ,OAAD,KAAK,AAAQ,OAAD,KAAK,UAAU,IACrB,eAA9C,cAAW,AAAQ,OAAD,KAAK,AAAQ,OAAD,KAAK,UAAU;;IAErD;;AAIE,YAAO,gBACH,wBAAa,AAAO,wBACpB,qBAAS,iBACT;IACN;;uCAjF+B;;QAAiB;QAAoB;IACvD,gBAAE,AAAO,MAAD;IACD,uBAAe,KAAb,YAAY,EAAZ,aAAuB;IAC/B,iBAAS,MAAP,MAAM,EAAN,cAAU;;EAAK;;wCAEN;EAAG","file":"../../../../../../../../../../../../../packages/lottie/src/model/content/shape_data.dart.lib.js"}');
  // Exports:
  return {
    src__model__content__shape_data: shape_data
  };
}));

//# sourceMappingURL=shape_data.dart.lib.js.map
