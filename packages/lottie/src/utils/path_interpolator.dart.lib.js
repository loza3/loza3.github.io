define(['dart_sdk', 'packages/lottie/src/utils/path_factory.dart', 'packages/flutter/src/animation/curves.dart'], (function load__packages__lottie__src__utils__path_interpolator_dart(dart_sdk, packages__lottie__src__utils__path_factory$46dart, packages__flutter__src__animation__curves$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path_factory = packages__lottie__src__utils__path_factory$46dart.src__utils__path_factory;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  var path_interpolator = Object.create(dart.library);
  var $first = dartx.first;
  var $toList = dartx.toList;
  var $round = dartx.round;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/utils/path_interpolator.dart"];
  var _mX$ = dart.privateName(path_interpolator, "PathInterpolator._mX");
  var _mY$ = dart.privateName(path_interpolator, "PathInterpolator._mY");
  var _mX = dart.privateName(path_interpolator, "_mX");
  var _mY = dart.privateName(path_interpolator, "_mY");
  path_interpolator.PathInterpolator = class PathInterpolator extends curves.Curve {
    get [_mX]() {
      return this[_mX$];
    }
    set [_mX](value) {
      super[_mX] = value;
    }
    get [_mY]() {
      return this[_mY$];
    }
    set [_mY](value) {
      super[_mY] = value;
    }
    static ['_#_#tearOff'](_mX, _mY) {
      return new path_interpolator.PathInterpolator.__(_mX, _mY);
    }
    static new(path) {
      let pathMeasure = path.computeMetrics()[$toList]()[$first];
      let pathLength = pathMeasure.length;
      let numPoints = (pathLength / 0.002)[$round]() + 1;
      let mX = T.ListOfdouble().filled(numPoints, 0.0);
      let mY = T.ListOfdouble().filled(numPoints, 0.0);
      for (let i = 0; i < numPoints; i = i + 1) {
        let distance = i * pathLength / (numPoints - 1);
        let tangent = dart.nullCheck(pathMeasure.getTangentForOffset(distance));
        mX[$_set](i, tangent.position.dx);
        mY[$_set](i, tangent.position.dy);
      }
      return new path_interpolator.PathInterpolator.__(mX, mY);
    }
    static ['_#new#tearOff'](path) {
      return path_interpolator.PathInterpolator.new(path);
    }
    static cubic(controlX1, controlY1, controlX2, controlY2) {
      return path_interpolator.PathInterpolator.new(path_interpolator.PathInterpolator._createCubic(controlX1, controlY1, controlX2, controlY2));
    }
    static ['_#cubic#tearOff'](controlX1, controlY1, controlX2, controlY2) {
      return path_interpolator.PathInterpolator.cubic(controlX1, controlY1, controlX2, controlY2);
    }
    transform(t) {
      if (t <= 0.0) {
        return 0.0;
      } else if (t >= 1.0) {
        return 1.0;
      }
      let startIndex = 0;
      let endIndex = this[_mX][$length] - 1;
      while (endIndex - startIndex > 1) {
        let midIndex = ((startIndex + endIndex) / 2)[$round]();
        if (t < this[_mX][$_get](midIndex)) {
          endIndex = midIndex;
        } else {
          startIndex = midIndex;
        }
      }
      let xRange = this[_mX][$_get](endIndex) - this[_mX][$_get](startIndex);
      if (xRange === 0) {
        return this[_mY][$_get](startIndex);
      }
      let tInRange = t - this[_mX][$_get](startIndex);
      let fraction = tInRange / xRange;
      let startY = this[_mY][$_get](startIndex);
      let endY = this[_mY][$_get](endIndex);
      return startY + fraction * (endY - startY);
    }
    static _createCubic(controlX1, controlY1, controlX2, controlY2) {
      let path = path_factory.PathFactory.create();
      path.moveTo(0.0, 0.0);
      path.cubicTo(controlX1, controlY1, controlX2, controlY2, 1.0, 1.0);
      return path;
    }
  };
  (path_interpolator.PathInterpolator.__ = function(_mX, _mY) {
    this[_mX$] = _mX;
    this[_mY$] = _mY;
    path_interpolator.PathInterpolator.__proto__.new.call(this);
    ;
  }).prototype = path_interpolator.PathInterpolator.prototype;
  dart.addTypeTests(path_interpolator.PathInterpolator);
  dart.addTypeCaches(path_interpolator.PathInterpolator);
  dart.setStaticMethodSignature(path_interpolator.PathInterpolator, () => ['new', 'cubic', '_createCubic']);
  dart.setLibraryUri(path_interpolator.PathInterpolator, I[0]);
  dart.setFieldSignature(path_interpolator.PathInterpolator, () => ({
    __proto__: dart.getFields(path_interpolator.PathInterpolator.__proto__),
    [_mX]: dart.finalFieldType(core.List$(core.double)),
    [_mY]: dart.finalFieldType(core.List$(core.double))
  }));
  dart.setStaticFieldSignature(path_interpolator.PathInterpolator, () => ['_precision']);
  dart.defineLazy(path_interpolator.PathInterpolator, {
    /*path_interpolator.PathInterpolator._precision*/get _precision() {
      return 0.002;
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/utils/path_interpolator.dart", {
    "package:lottie/src/utils/path_interpolator.dart": path_interpolator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_interpolator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQqB;;;;;;IACA;;;;;;;;;eAIW;AACtB,wBAAc,AAAK,AAAiB,AAAS,IAA3B;AAElB,uBAAa,AAAY,WAAD;AACxB,sBAAsC,AAAQ,CAAjC,AAAW,UAAD,sBAAyB;AAElD,eAAU,wBAAO,SAAS,EAAE;AAC5B,eAAU,wBAAO,SAAS,EAAE;AAEhC,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,SAAS,EAAI,IAAF,AAAE,CAAC,GAAH;AACvB,uBAAY,AAAE,AAAc,CAAf,GAAG,UAAU,IAAK,AAAU,SAAD,GAAG;AAC7C,sBAAmD,eAAzC,AAAY,WAAD,qBAAqB,QAAQ;AAE3B,QAA3B,AAAE,EAAA,QAAC,CAAC,EAAI,AAAQ,AAAS,OAAV;AACY,QAA3B,AAAE,EAAA,QAAC,CAAC,EAAI,AAAQ,AAAS,OAAV;;AAGjB,YAAwB,2CAAE,EAAE,EAAE,EAAE;IAClC;;;;iBAGW,WAAkB,WAAkB,WAAkB;AAC/D,YAAO,wCACH,gDAAa,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS;IAC7D;;;;cAGwB;AACtB,UAAI,AAAE,CAAD,IAAI;AACP,cAAO;YACF,KAAI,AAAE,CAAD,IAAI;AACd,cAAO;;AAIL,uBAAa;AACb,qBAAW,AAAI,AAAO,qBAAE;AAC5B,aAAO,AAAS,AAAa,QAAd,GAAG,UAAU,GAAG;AACzB,uBAAyC,CAAL,CAAvB,AAAW,UAAD,GAAG,QAAQ,IAAI;AAC1C,YAAI,AAAE,CAAD,GAAG,AAAG,iBAAC,QAAQ;AACC,UAAnB,WAAW,QAAQ;;AAEE,UAArB,aAAa,QAAQ;;;AAInB,mBAAS,AAAG,AAAW,iBAAV,QAAQ,IAAI,AAAG,iBAAC,UAAU;AAC7C,UAAI,AAAO,MAAD,KAAI;AACZ,cAAO,AAAG,kBAAC,UAAU;;AAGjB,qBAAW,AAAE,CAAD,GAAG,AAAG,iBAAC,UAAU;AAC7B,qBAAW,AAAS,QAAD,GAAG,MAAM;AAE5B,mBAAS,AAAG,iBAAC,UAAU;AACvB,iBAAO,AAAG,iBAAC,QAAQ;AAEzB,YAAO,AAAO,OAAD,GAAI,AAAS,QAAD,IAAI,AAAK,IAAD,GAAG,MAAM;IAC5C;wBAGW,WAAkB,WAAkB,WAAkB;AACzD,iBAAmB;AACJ,MAArB,AAAK,IAAD,QAAQ,KAAK;AACiD,MAAlE,AAAK,IAAD,SAAS,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,KAAK;AAC9D,YAAO,KAAI;IACb;;oDApE8B,KAAU;IAAV;IAAU;AAAlC;;EAAsC;;;;;;;;;;;;MALxB,6CAAU","file":"../../../../../../../../../../../../packages/lottie/src/utils/path_interpolator.dart.lib.js"}');
  // Exports:
  return {
    src__utils__path_interpolator: path_interpolator
  };
}));

//# sourceMappingURL=path_interpolator.dart.lib.js.map
