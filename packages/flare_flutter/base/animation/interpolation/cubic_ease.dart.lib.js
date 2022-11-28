define(['dart_sdk'], (function load__packages__flare_flutter__base__animation__interpolation__cubic_ease_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var cubic_ease = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flare_flutter/base/animation/interpolation/cubic_ease.dart"];
  cubic_ease.CubicEase = class CubicEase extends core.Object {
    static make(x1, y1, x2, y2) {
      if (x1 === y1 && x2 === y2) {
        return new cubic_ease.LinearCubicEase.new();
      } else {
        return new cubic_ease.Cubic.new(x1, y1, x2, y2);
      }
    }
  };
  (cubic_ease.CubicEase.new = function() {
    ;
  }).prototype = cubic_ease.CubicEase.prototype;
  dart.addTypeTests(cubic_ease.CubicEase);
  dart.addTypeCaches(cubic_ease.CubicEase);
  dart.setStaticMethodSignature(cubic_ease.CubicEase, () => ['make']);
  dart.setLibraryUri(cubic_ease.CubicEase, I[0]);
  cubic_ease.LinearCubicEase = class LinearCubicEase extends cubic_ease.CubicEase {
    ease(t) {
      return t;
    }
    static ['_#new#tearOff']() {
      return new cubic_ease.LinearCubicEase.new();
    }
  };
  (cubic_ease.LinearCubicEase.new = function() {
    ;
  }).prototype = cubic_ease.LinearCubicEase.prototype;
  dart.addTypeTests(cubic_ease.LinearCubicEase);
  dart.addTypeCaches(cubic_ease.LinearCubicEase);
  dart.setMethodSignature(cubic_ease.LinearCubicEase, () => ({
    __proto__: dart.getMethods(cubic_ease.LinearCubicEase.__proto__),
    ease: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(cubic_ease.LinearCubicEase, I[0]);
  var x1$ = dart.privateName(cubic_ease, "Cubic.x1");
  var y1$ = dart.privateName(cubic_ease, "Cubic.y1");
  var x2$ = dart.privateName(cubic_ease, "Cubic.x2");
  var y2$ = dart.privateName(cubic_ease, "Cubic.y2");
  var _values = dart.privateName(cubic_ease, "_values");
  cubic_ease.Cubic = class Cubic extends cubic_ease.CubicEase {
    get x1() {
      return this[x1$];
    }
    set x1(value) {
      super.x1 = value;
    }
    get y1() {
      return this[y1$];
    }
    set y1(value) {
      super.y1 = value;
    }
    get x2() {
      return this[x2$];
    }
    set x2(value) {
      super.x2 = value;
    }
    get y2() {
      return this[y2$];
    }
    set y2(value) {
      super.y2 = value;
    }
    static ['_#new#tearOff'](x1, y1, x2, y2) {
      return new cubic_ease.Cubic.new(x1, y1, x2, y2);
    }
    getT(x) {
      let intervalStart = 0.0;
      let currentSample = 1;
      let lastSample = 11 - 1;
      for (; currentSample !== lastSample && this[_values][$_get](currentSample) <= x; currentSample = currentSample + 1) {
        intervalStart = intervalStart + 0.1;
      }
      currentSample = currentSample - 1;
      let dist = (x - this[_values][$_get](currentSample)) / (this[_values][$_get](currentSample + 1) - this[_values][$_get](currentSample));
      let guessForT = intervalStart + dist * 0.1;
      let initialSlope = cubic_ease.getSlope(guessForT, this.x1, this.x2);
      if (initialSlope >= 0.001) {
        for (let i = 0; i < 4; i = i + 1) {
          let currentSlope = cubic_ease.getSlope(guessForT, this.x1, this.x2);
          if (currentSlope === 0.0) {
            return guessForT;
          }
          let currentX = cubic_ease.calcBezier(guessForT, this.x1, this.x2) - x;
          guessForT = guessForT - currentX / currentSlope;
        }
        return guessForT;
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        let aB = intervalStart + 0.1;
        let currentX = null;
        let currentT = null;
        let i = 0;
        do {
          currentT = intervalStart + (aB - intervalStart) / 2.0;
          currentX = cubic_ease.calcBezier(currentT, this.x1, this.x2) - x;
          if (currentX > 0.0) {
            aB = currentT;
          } else {
            intervalStart = currentT;
          }
        } while (currentX[$abs]() > 1e-7 && (i = i + 1) < 10);
        return currentT;
      }
    }
    ease(mix) {
      return cubic_ease.calcBezier(this.getT(mix), this.y1, this.y2);
    }
  };
  (cubic_ease.Cubic.new = function(x1, y1, x2, y2) {
    this[_values] = _native_typed_data.NativeFloat64List.new(11);
    this[x1$] = x1;
    this[y1$] = y1;
    this[x2$] = x2;
    this[y2$] = y2;
    for (let i = 0; i < 11; i = i + 1) {
      this[_values][$_set](i, cubic_ease.calcBezier(i * 0.1, this.x1, this.x2));
    }
  }).prototype = cubic_ease.Cubic.prototype;
  dart.addTypeTests(cubic_ease.Cubic);
  dart.addTypeCaches(cubic_ease.Cubic);
  dart.setMethodSignature(cubic_ease.Cubic, () => ({
    __proto__: dart.getMethods(cubic_ease.Cubic.__proto__),
    getT: dart.fnType(core.double, [core.double]),
    ease: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(cubic_ease.Cubic, I[0]);
  dart.setFieldSignature(cubic_ease.Cubic, () => ({
    __proto__: dart.getFields(cubic_ease.Cubic.__proto__),
    [_values]: dart.finalFieldType(typed_data.Float64List),
    x1: dart.finalFieldType(core.double),
    y1: dart.finalFieldType(core.double),
    x2: dart.finalFieldType(core.double),
    y2: dart.finalFieldType(core.double)
  }));
  cubic_ease.calcBezier = function calcBezier(aT, aA1, aA2) {
    return (((1.0 - 3.0 * aA2 + 3.0 * aA1) * aT + (3.0 * aA2 - 6.0 * aA1)) * aT + 3.0 * aA1) * aT;
  };
  cubic_ease.getSlope = function getSlope(aT, aA1, aA2) {
    return 3.0 * (1.0 - 3.0 * aA2 + 3.0 * aA1) * aT * aT + 2.0 * (3.0 * aA2 - 6.0 * aA1) * aT + 3.0 * aA1;
  };
  cubic_ease.newtonRaphsonIterate = function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (let i = 0; i < 4; i = i + 1) {
      let currentSlope = cubic_ease.getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) {
        return aGuessT;
      }
      let currentX = cubic_ease.calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT = aGuessT - currentX / currentSlope;
    }
    return aGuessT;
  };
  dart.defineLazy(cubic_ease, {
    /*cubic_ease.newtonIterations*/get newtonIterations() {
      return 4;
    },
    /*cubic_ease.newtonMinSlope*/get newtonMinSlope() {
      return 0.001;
    },
    /*cubic_ease.subdivisionPrecision*/get subdivisionPrecision() {
      return 1e-7;
    },
    /*cubic_ease.subdivisionMaxIterations*/get subdivisionMaxIterations() {
      return 10;
    },
    /*cubic_ease.splineTableSize*/get splineTableSize() {
      return 11;
    },
    /*cubic_ease.sampleStepSize*/get sampleStepSize() {
      return 0.1;
    }
  }, false);
  dart.trackLibraries("packages/flare_flutter/base/animation/interpolation/cubic_ease.dart", {
    "package:flare_flutter/base/animation/interpolation/cubic_ease.dart": cubic_ease
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cubic_ease.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../../packages/flare_flutter/base/animation/interpolation/cubic_ease.dart.lib.js"}');
  // Exports:
  return {
    base__animation__interpolation__cubic_ease: cubic_ease
  };
}));

//# sourceMappingURL=cubic_ease.dart.lib.js.map
