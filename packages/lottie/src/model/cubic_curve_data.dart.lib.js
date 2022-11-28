define(['dart_sdk'], (function load__packages__lottie__src__model__cubic_curve_data_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var cubic_curve_data = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/model/cubic_curve_data.dart"];
  var controlPoint1 = dart.privateName(cubic_curve_data, "CubicCurveData.controlPoint1");
  var controlPoint2 = dart.privateName(cubic_curve_data, "CubicCurveData.controlPoint2");
  var vertex = dart.privateName(cubic_curve_data, "CubicCurveData.vertex");
  cubic_curve_data.CubicCurveData = class CubicCurveData extends core.Object {
    get controlPoint1() {
      return this[controlPoint1];
    }
    set controlPoint1(value) {
      this[controlPoint1] = value;
    }
    get controlPoint2() {
      return this[controlPoint2];
    }
    set controlPoint2(value) {
      this[controlPoint2] = value;
    }
    get vertex() {
      return this[vertex];
    }
    set vertex(value) {
      this[vertex] = value;
    }
    setFrom(curveData) {
      this.vertex = new ui.Offset.new(curveData.vertex.dx, curveData.vertex.dy);
      this.controlPoint1 = new ui.Offset.new(curveData.controlPoint1.dx, curveData.controlPoint1.dy);
      this.controlPoint2 = new ui.Offset.new(curveData.controlPoint2.dx, curveData.controlPoint2.dy);
    }
    toString() {
      return "v=" + dart.str(this.vertex) + " cp1" + dart.str(this.controlPoint1) + " cp2=" + dart.str(this.controlPoint2);
    }
    static ['_#new#tearOff']() {
      return new cubic_curve_data.CubicCurveData.new();
    }
  };
  (cubic_curve_data.CubicCurveData.new = function() {
    this[controlPoint1] = ui.Offset.zero;
    this[controlPoint2] = ui.Offset.zero;
    this[vertex] = ui.Offset.zero;
    ;
  }).prototype = cubic_curve_data.CubicCurveData.prototype;
  dart.addTypeTests(cubic_curve_data.CubicCurveData);
  dart.addTypeCaches(cubic_curve_data.CubicCurveData);
  dart.setMethodSignature(cubic_curve_data.CubicCurveData, () => ({
    __proto__: dart.getMethods(cubic_curve_data.CubicCurveData.__proto__),
    setFrom: dart.fnType(dart.void, [cubic_curve_data.CubicCurveData])
  }));
  dart.setLibraryUri(cubic_curve_data.CubicCurveData, I[0]);
  dart.setFieldSignature(cubic_curve_data.CubicCurveData, () => ({
    __proto__: dart.getFields(cubic_curve_data.CubicCurveData.__proto__),
    controlPoint1: dart.fieldType(ui.Offset),
    controlPoint2: dart.fieldType(ui.Offset),
    vertex: dart.fieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(cubic_curve_data.CubicCurveData, ['toString']);
  dart.trackLibraries("packages/lottie/src/model/cubic_curve_data.dart", {
    "package:lottie/src/model/cubic_curve_data.dart": cubic_curve_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cubic_curve_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IA2BS;;;;;;IACA;;;;;;IACA;;;;;;YAEqB;AAC+B,MAAzD,cAAS,kBAAO,AAAU,AAAO,SAAR,YAAY,AAAU,AAAO,SAAR;AAEoB,MADlE,qBACI,kBAAO,AAAU,AAAc,SAAf,mBAAmB,AAAU,AAAc,SAAf;AAEkB,MADlE,qBACI,kBAAO,AAAU,AAAc,SAAf,mBAAmB,AAAU,AAAc,SAAf;IAClD;;AAIE,YAAO,AAAgD,iBAA5C,eAAM,kBAAK,sBAAa,mBAAM;IAC3C;;;;;;IAfO,sBAAuB;IACvB,sBAAuB;IACvB,eAAgB;;EAczB","file":"../../../../../../../../../../../../packages/lottie/src/model/cubic_curve_data.dart.lib.js"}');
  // Exports:
  return {
    src__model__cubic_curve_data: cubic_curve_data
  };
}));

//# sourceMappingURL=cubic_curve_data.dart.lib.js.map
