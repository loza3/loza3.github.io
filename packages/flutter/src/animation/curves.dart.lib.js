define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/math.dart'], (function load__packages__flutter__src__animation__curves_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__math$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const math$ = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  var curves = Object.create(dart.library);
  var $truncateToDouble = dartx.truncateToDouble;
  var $abs = dartx.abs;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $add = dartx.add;
  var $sign = dartx.sign;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $last = dartx.last;
  var $addAll = dartx.addAll;
  var $toDouble = dartx.toDouble;
  var $isNotEmpty = dartx.isNotEmpty;
  var $round = dartx.round;
  var $modulo = dartx['%'];
  var $floor = dartx.floor;
  var $clear = dartx.clear;
  var $join = dartx.join;
  var $toList = dartx.toList;
  var $first = dartx.first;
  var $isEmpty = dartx.isEmpty;
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    OffsetAndOffsetAndOffsetTobool: () => (T.OffsetAndOffsetAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [ui.Offset, ui.Offset, ui.Offset])))(),
    JSArrayOfCurve2DSample: () => (T.JSArrayOfCurve2DSample = dart.constFn(_interceptors.JSArray$(curves.Curve2DSample)))(),
    Curve2DSampleAndCurve2DSample__Tovoid: () => (T.Curve2DSampleAndCurve2DSample__Tovoid = dart.constFn(dart.fnType(dart.void, [curves.Curve2DSample, curves.Curve2DSample], {forceSubdivide: core.bool}, {})))(),
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    doubleTodynamic: () => (T.doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))(),
    doubleTodouble: () => (T.doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))(),
    ListOfOffset: () => (T.ListOfOffset = dart.constFn(core.List$(ui.Offset)))(),
    JSArrayOfListOfOffset: () => (T.JSArrayOfListOfOffset = dart.constFn(_interceptors.JSArray$(T.ListOfOffset())))(),
    JSArrayOfOffset: () => (T.JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: curves._DecelerateCurve.prototype
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.04,
        [b$]: 1,
        [a$]: 0.18
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.25,
        [b$]: 0.1,
        [a$]: 0.25
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 1,
        [b$]: 0,
        [a$]: 0.42
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.09,
        [c$]: 0.65,
        [b$]: 0.03,
        [a$]: 0.67
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.715,
        [c$]: 0.745,
        [b$]: 0,
        [a$]: 0.47
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.53,
        [c$]: 0.68,
        [b$]: 0.085,
        [a$]: 0.55
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.19,
        [c$]: 0.675,
        [b$]: 0.055,
        [a$]: 0.55
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.22,
        [c$]: 0.685,
        [b$]: 0.03,
        [a$]: 0.895
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.06,
        [c$]: 0.855,
        [b$]: 0.05,
        [a$]: 0.755
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.035,
        [c$]: 0.795,
        [b$]: 0.05,
        [a$]: 0.95
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.335,
        [c$]: 0.98,
        [b$]: 0.04,
        [a$]: 0.6
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.045,
        [c$]: 0.735,
        [b$]: -0.28,
        [a$]: 0.6
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.58,
        [b$]: 0,
        [a$]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.97,
        [c$]: 0.33,
        [b$]: 0.91,
        [a$]: 0.35
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.565,
        [b$]: 0.575,
        [a$]: 0.39
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.94,
        [c$]: 0.45,
        [b$]: 0.46,
        [a$]: 0.25
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.355,
        [b$]: 0.61,
        [a$]: 0.215
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.44,
        [b$]: 0.84,
        [a$]: 0.165
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.32,
        [b$]: 1,
        [a$]: 0.23
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.22,
        [b$]: 1,
        [a$]: 0.19
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.165,
        [b$]: 0.82,
        [a$]: 0.075
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1.275,
        [c$]: 0.32,
        [b$]: 0.885,
        [a$]: 0.175
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.58,
        [b$]: 0,
        [a$]: 0.42
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.95,
        [c$]: 0.55,
        [b$]: 0.05,
        [a$]: 0.445
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.955,
        [c$]: 0.515,
        [b$]: 0.03,
        [a$]: 0.455
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.355,
        [b$]: 0.045,
        [a$]: 0.645
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0.25
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0.82,
        [OffsetBase__dx]: 0.208333
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0.4,
        [OffsetBase__dx]: 0.166666
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0.06,
        [OffsetBase__dx]: 0.133333
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0.05
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: curves.ThreePointCubic.prototype,
        [b2$]: C[30] || CT.C30,
        [a2$]: C[31] || CT.C31,
        [midpoint$]: C[32] || CT.C32,
        [b1$]: C[33] || CT.C33,
        [a1$]: C[34] || CT.C34
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.175,
        [b$]: 0,
        [a$]: 0.77
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.07,
        [b$]: 0,
        [a$]: 0.86
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0,
        [b$]: 0,
        [a$]: 1
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.86,
        [c$]: 0.15,
        [b$]: 0.135,
        [a$]: 0.785
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1.55,
        [c$]: 0.265,
        [b$]: -0.55,
        [a$]: 0.68
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.2,
        [b$]: 0,
        [a$]: 0.4
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.15,
        [c$]: 0.85,
        [b$]: 0.85,
        [a$]: 0.15
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: curves._BounceInCurve.prototype
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: curves._BounceOutCurve.prototype
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: curves._BounceInOutCurve.prototype
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: curves.ElasticInCurve.prototype,
        [period$]: 0.4
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: curves.ElasticOutCurve.prototype,
        [period$0]: 0.4
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: curves.ElasticInOutCurve.prototype,
        [period$1]: 0.4
      });
    }
  }, false);
  var C = Array(48).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/animation/curves.dart",
    "package:flutter/src/animation/curves.dart"
  ];
  const _is_ParametricCurve_default = Symbol('_is_ParametricCurve_default');
  curves.ParametricCurve$ = dart.generic(T => {
    class ParametricCurve extends core.Object {
      transform(t) {
        if (!(t !== null)) dart.assertFailed(null, I[0], 38, 12, "t != null");
        if (!(t >= 0.0 && t <= 1.0)) dart.assertFailed("parametric value " + dart.str(t) + " is outside of [0, 1] range.", I[0], 39, 12, "t >= 0.0 && t <= 1.0");
        return this.transformInternal(t);
      }
      transformInternal(t) {
        dart.throw(new core.UnimplementedError.new());
      }
      toString() {
        return object.objectRuntimeType(this, "ParametricCurve");
      }
    }
    (ParametricCurve.new = function() {
      ;
    }).prototype = ParametricCurve.prototype;
    dart.addTypeTests(ParametricCurve);
    ParametricCurve.prototype[_is_ParametricCurve_default] = true;
    dart.addTypeCaches(ParametricCurve);
    dart.setMethodSignature(ParametricCurve, () => ({
      __proto__: dart.getMethods(ParametricCurve.__proto__),
      transform: dart.fnType(T, [core.double]),
      transformInternal: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(ParametricCurve, I[1]);
    dart.defineExtensionMethods(ParametricCurve, ['toString']);
    return ParametricCurve;
  });
  curves.ParametricCurve = curves.ParametricCurve$();
  dart.addTypeTests(curves.ParametricCurve, _is_ParametricCurve_default);
  curves.Curve = class Curve extends curves.ParametricCurve$(core.double) {
    transform(t) {
      if (t === 0.0 || t === 1.0) {
        return t;
      }
      return super.transform(t);
    }
    get flipped() {
      return new curves.FlippedCurve.new(this);
    }
  };
  (curves.Curve.new = function() {
    curves.Curve.__proto__.new.call(this);
    ;
  }).prototype = curves.Curve.prototype;
  dart.addTypeTests(curves.Curve);
  dart.addTypeCaches(curves.Curve);
  dart.setGetterSignature(curves.Curve, () => ({
    __proto__: dart.getGetters(curves.Curve.__proto__),
    flipped: curves.Curve
  }));
  dart.setLibraryUri(curves.Curve, I[1]);
  curves._Linear = class _Linear extends curves.Curve {
    static ['_#_#tearOff']() {
      return new curves._Linear.__();
    }
    transformInternal(t) {
      return t;
    }
  };
  (curves._Linear.__ = function() {
    curves._Linear.__proto__.new.call(this);
    ;
  }).prototype = curves._Linear.prototype;
  dart.addTypeTests(curves._Linear);
  dart.addTypeCaches(curves._Linear);
  dart.setLibraryUri(curves._Linear, I[1]);
  var count$ = dart.privateName(curves, "SawTooth.count");
  curves.SawTooth = class SawTooth extends curves.Curve {
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    static ['_#new#tearOff'](count) {
      return new curves.SawTooth.new(count);
    }
    transformInternal(t) {
      t = t * this.count;
      return t - t[$truncateToDouble]();
    }
    toString() {
      return object.objectRuntimeType(this, "SawTooth") + "(" + dart.str(this.count) + ")";
    }
  };
  (curves.SawTooth.new = function(count) {
    this[count$] = count;
    if (!(count !== null)) dart.assertFailed(null, I[0], 132, 39, "count != null");
    curves.SawTooth.__proto__.new.call(this);
    ;
  }).prototype = curves.SawTooth.prototype;
  dart.addTypeTests(curves.SawTooth);
  dart.addTypeCaches(curves.SawTooth);
  dart.setLibraryUri(curves.SawTooth, I[1]);
  dart.setFieldSignature(curves.SawTooth, () => ({
    __proto__: dart.getFields(curves.SawTooth.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(curves.SawTooth, ['toString']);
  var begin$ = dart.privateName(curves, "Interval.begin");
  var end$ = dart.privateName(curves, "Interval.end");
  var curve$ = dart.privateName(curves, "Interval.curve");
  curves.Interval = class Interval extends curves.Curve {
    get begin() {
      return this[begin$];
    }
    set begin(value) {
      super.begin = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    static ['_#new#tearOff'](begin, end, opts) {
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      return new curves.Interval.new(begin, end, {curve: curve});
    }
    transformInternal(t) {
      if (!(this.begin >= 0.0)) dart.assertFailed(null, I[0], 182, 12, "begin >= 0.0");
      if (!(this.begin <= 1.0)) dart.assertFailed(null, I[0], 183, 12, "begin <= 1.0");
      if (!(this.end >= 0.0)) dart.assertFailed(null, I[0], 184, 12, "end >= 0.0");
      if (!(this.end <= 1.0)) dart.assertFailed(null, I[0], 185, 12, "end <= 1.0");
      if (!(this.end >= this.begin)) dart.assertFailed(null, I[0], 186, 12, "end >= begin");
      t = math$.clampDouble((t - this.begin) / (this.end - this.begin), 0.0, 1.0);
      if (t === 0.0 || t === 1.0) {
        return t;
      }
      return this.curve.transform(t);
    }
    toString() {
      if (!curves._Linear.is(this.curve)) {
        return object.objectRuntimeType(this, "Interval") + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")➩" + dart.str(this.curve);
      }
      return object.objectRuntimeType(this, "Interval") + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")";
    }
  };
  (curves.Interval.new = function(begin, end, opts) {
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    this[begin$] = begin;
    this[end$] = end;
    this[curve$] = curve;
    if (!(begin !== null)) dart.assertFailed(null, I[0], 163, 14, "begin != null");
    if (!(end !== null)) dart.assertFailed(null, I[0], 164, 14, "end != null");
    if (!(curve !== null)) dart.assertFailed(null, I[0], 165, 14, "curve != null");
    curves.Interval.__proto__.new.call(this);
    ;
  }).prototype = curves.Interval.prototype;
  dart.addTypeTests(curves.Interval);
  dart.addTypeCaches(curves.Interval);
  dart.setLibraryUri(curves.Interval, I[1]);
  dart.setFieldSignature(curves.Interval, () => ({
    __proto__: dart.getFields(curves.Interval.__proto__),
    begin: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    curve: dart.finalFieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(curves.Interval, ['toString']);
  var threshold$ = dart.privateName(curves, "Threshold.threshold");
  curves.Threshold = class Threshold extends curves.Curve {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    static ['_#new#tearOff'](threshold) {
      return new curves.Threshold.new(threshold);
    }
    transformInternal(t) {
      if (!(this.threshold >= 0.0)) dart.assertFailed(null, I[0], 219, 12, "threshold >= 0.0");
      if (!(this.threshold <= 1.0)) dart.assertFailed(null, I[0], 220, 12, "threshold <= 1.0");
      return t < this.threshold ? 0.0 : 1.0;
    }
  };
  (curves.Threshold.new = function(threshold) {
    this[threshold$] = threshold;
    if (!(threshold !== null)) dart.assertFailed(null, I[0], 210, 44, "threshold != null");
    curves.Threshold.__proto__.new.call(this);
    ;
  }).prototype = curves.Threshold.prototype;
  dart.addTypeTests(curves.Threshold);
  dart.addTypeCaches(curves.Threshold);
  dart.setLibraryUri(curves.Threshold, I[1]);
  dart.setFieldSignature(curves.Threshold, () => ({
    __proto__: dart.getFields(curves.Threshold.__proto__),
    threshold: dart.finalFieldType(core.double)
  }));
  var a$ = dart.privateName(curves, "Cubic.a");
  var b$ = dart.privateName(curves, "Cubic.b");
  var c$ = dart.privateName(curves, "Cubic.c");
  var d$ = dart.privateName(curves, "Cubic.d");
  var _evaluateCubic = dart.privateName(curves, "_evaluateCubic");
  curves.Cubic = class Cubic extends curves.Curve {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    static ['_#new#tearOff'](a, b, c, d) {
      return new curves.Cubic.new(a, b, c, d);
    }
    [_evaluateCubic](a, b, m) {
      return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
    }
    transformInternal(t) {
      let start = 0.0;
      let end = 1.0;
      while (true) {
        let midpoint = (start + end) / 2;
        let estimate = this[_evaluateCubic](this.a, this.c, midpoint);
        if ((t - estimate)[$abs]() < 0.001) {
          return this[_evaluateCubic](this.b, this.d, midpoint);
        }
        if (estimate < t) {
          start = midpoint;
        } else {
          end = midpoint;
        }
      }
    }
    toString() {
      return object.objectRuntimeType(this, "Cubic") + "(" + this.a[$toStringAsFixed](2) + ", " + this.b[$toStringAsFixed](2) + ", " + this.c[$toStringAsFixed](2) + ", " + this.d[$toStringAsFixed](2) + ")";
    }
  };
  (curves.Cubic.new = function(a, b, c, d) {
    this[a$] = a;
    this[b$] = b;
    this[c$] = c;
    this[d$] = d;
    if (!(a !== null)) dart.assertFailed(null, I[0], 311, 14, "a != null");
    if (!(b !== null)) dart.assertFailed(null, I[0], 312, 14, "b != null");
    if (!(c !== null)) dart.assertFailed(null, I[0], 313, 14, "c != null");
    if (!(d !== null)) dart.assertFailed(null, I[0], 314, 14, "d != null");
    curves.Cubic.__proto__.new.call(this);
    ;
  }).prototype = curves.Cubic.prototype;
  dart.addTypeTests(curves.Cubic);
  dart.addTypeCaches(curves.Cubic);
  dart.setMethodSignature(curves.Cubic, () => ({
    __proto__: dart.getMethods(curves.Cubic.__proto__),
    [_evaluateCubic]: dart.fnType(core.double, [core.double, core.double, core.double])
  }));
  dart.setLibraryUri(curves.Cubic, I[1]);
  dart.setFieldSignature(curves.Cubic, () => ({
    __proto__: dart.getFields(curves.Cubic.__proto__),
    a: dart.finalFieldType(core.double),
    b: dart.finalFieldType(core.double),
    c: dart.finalFieldType(core.double),
    d: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(curves.Cubic, () => ['_cubicErrorBound']);
  dart.defineExtensionMethods(curves.Cubic, ['toString']);
  dart.defineLazy(curves.Cubic, {
    /*curves.Cubic._cubicErrorBound*/get _cubicErrorBound() {
      return 0.001;
    }
  }, false);
  var a1$ = dart.privateName(curves, "ThreePointCubic.a1");
  var b1$ = dart.privateName(curves, "ThreePointCubic.b1");
  var midpoint$ = dart.privateName(curves, "ThreePointCubic.midpoint");
  var a2$ = dart.privateName(curves, "ThreePointCubic.a2");
  var b2$ = dart.privateName(curves, "ThreePointCubic.b2");
  curves.ThreePointCubic = class ThreePointCubic extends curves.Curve {
    get a1() {
      return this[a1$];
    }
    set a1(value) {
      super.a1 = value;
    }
    get b1() {
      return this[b1$];
    }
    set b1(value) {
      super.b1 = value;
    }
    get midpoint() {
      return this[midpoint$];
    }
    set midpoint(value) {
      super.midpoint = value;
    }
    get a2() {
      return this[a2$];
    }
    set a2(value) {
      super.a2 = value;
    }
    get b2() {
      return this[b2$];
    }
    set b2(value) {
      super.b2 = value;
    }
    static ['_#new#tearOff'](a1, b1, midpoint, a2, b2) {
      return new curves.ThreePointCubic.new(a1, b1, midpoint, a2, b2);
    }
    transformInternal(t) {
      let firstCurve = t < this.midpoint.dx;
      let scaleX = firstCurve ? this.midpoint.dx : 1.0 - this.midpoint.dx;
      let scaleY = firstCurve ? this.midpoint.dy : 1.0 - this.midpoint.dy;
      let scaledT = (t - (firstCurve ? 0.0 : this.midpoint.dx)) / scaleX;
      if (firstCurve) {
        return new curves.Cubic.new(this.a1.dx / scaleX, this.a1.dy / scaleY, this.b1.dx / scaleX, this.b1.dy / scaleY).transform(scaledT) * scaleY;
      } else {
        return new curves.Cubic.new((this.a2.dx - this.midpoint.dx) / scaleX, (this.a2.dy - this.midpoint.dy) / scaleY, (this.b2.dx - this.midpoint.dx) / scaleX, (this.b2.dy - this.midpoint.dy) / scaleY).transform(scaledT) * scaleY + this.midpoint.dy;
      }
    }
    toString() {
      return object.objectRuntimeType(this, "ThreePointCubic(" + dart.str(this.a1) + ", " + dart.str(this.b1) + ", " + dart.str(this.midpoint) + ", " + dart.str(this.a2) + ", " + dart.str(this.b2) + ")") + " ";
    }
  };
  (curves.ThreePointCubic.new = function(a1, b1, midpoint, a2, b2) {
    this[a1$] = a1;
    this[b1$] = b1;
    this[midpoint$] = midpoint;
    this[a2$] = a2;
    this[b2$] = b2;
    curves.ThreePointCubic.__proto__.new.call(this);
    ;
  }).prototype = curves.ThreePointCubic.prototype;
  dart.addTypeTests(curves.ThreePointCubic);
  dart.addTypeCaches(curves.ThreePointCubic);
  dart.setLibraryUri(curves.ThreePointCubic, I[1]);
  dart.setFieldSignature(curves.ThreePointCubic, () => ({
    __proto__: dart.getFields(curves.ThreePointCubic.__proto__),
    a1: dart.finalFieldType(ui.Offset),
    b1: dart.finalFieldType(ui.Offset),
    midpoint: dart.finalFieldType(ui.Offset),
    a2: dart.finalFieldType(ui.Offset),
    b2: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(curves.ThreePointCubic, ['toString']);
  curves.Curve2D = class Curve2D extends curves.ParametricCurve$(ui.Offset) {
    generateSamples(opts) {
      let start = opts && 'start' in opts ? opts.start : 0;
      let end = opts && 'end' in opts ? opts.end : 1;
      let tolerance = opts && 'tolerance' in opts ? opts.tolerance : 1e-10;
      if (!(tolerance !== null)) dart.assertFailed(null, I[0], 521, 12, "tolerance != null");
      if (!(start !== null)) dart.assertFailed(null, I[0], 522, 12, "start != null");
      if (!(end !== null)) dart.assertFailed(null, I[0], 523, 12, "end != null");
      if (!(end > start)) dart.assertFailed(null, I[0], 524, 12, "end > start");
      let rand = math.Random.new(this.samplingSeed);
      function isFlat(p, q, r) {
        let pr = p['-'](r);
        let qr = q['-'](r);
        let z = pr.dx * qr.dy - qr.dx * pr.dy;
        return z * z < tolerance;
      }
      dart.fn(isFlat, T.OffsetAndOffsetAndOffsetTobool());
      let first = new curves.Curve2DSample.new(start, this.transform(start));
      let last = new curves.Curve2DSample.new(end, this.transform(end));
      let samples = T.JSArrayOfCurve2DSample().of([first]);
      const sample = (p, q, opts) => {
        let forceSubdivide = opts && 'forceSubdivide' in opts ? opts.forceSubdivide : false;
        let t = p.t + (0.45 + 0.1 * rand.nextDouble()) * (q.t - p.t);
        let r = new curves.Curve2DSample.new(t, this.transform(t));
        if (!forceSubdivide && isFlat(p.value, q.value, r.value)) {
          samples[$add](q);
        } else {
          sample(p, r);
          sample(r, q);
        }
      };
      dart.fn(sample, T.Curve2DSampleAndCurve2DSample__Tovoid());
      sample(first, last, {forceSubdivide: (first.value.dx - last.value.dx)[$abs]() < tolerance && (first.value.dy - last.value.dy)[$abs]() < tolerance});
      return samples;
    }
    get samplingSeed() {
      return 0;
    }
    findInverse(x) {
      if (!(x !== null)) dart.assertFailed(null, I[0], 580, 12, "x != null");
      let start = 0.0;
      let end = 1.0;
      let mid = null;
      function mid$35get() {
        let t1;
        t1 = mid;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("mid")) : t1;
      }
      dart.fn(mid$35get, T.VoidTodouble());
      function mid$35set(mid$35param) {
        return mid = mid$35param;
      }
      dart.fn(mid$35set, T.doubleTodynamic());
      const offsetToOrigin = pos => {
        return x - this.transform(pos).dx;
      };
      dart.fn(offsetToOrigin, T.doubleTodouble());
      let count = 100;
      let startValue = offsetToOrigin(start);
      while ((end - start) / 2.0 > 0.000001 && count > 0) {
        mid$35set((end + start) / 2.0);
        let value = offsetToOrigin(mid$35get());
        if (value[$sign] === startValue[$sign]) {
          start = mid$35get();
        } else {
          end = mid$35get();
        }
        count = count - 1;
      }
      return mid$35get();
    }
  };
  (curves.Curve2D.new = function() {
    curves.Curve2D.__proto__.new.call(this);
    ;
  }).prototype = curves.Curve2D.prototype;
  dart.addTypeTests(curves.Curve2D);
  dart.addTypeCaches(curves.Curve2D);
  dart.setMethodSignature(curves.Curve2D, () => ({
    __proto__: dart.getMethods(curves.Curve2D.__proto__),
    generateSamples: dart.fnType(core.Iterable$(curves.Curve2DSample), [], {end: core.double, start: core.double, tolerance: core.double}, {}),
    findInverse: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(curves.Curve2D, () => ({
    __proto__: dart.getGetters(curves.Curve2D.__proto__),
    samplingSeed: core.int
  }));
  dart.setLibraryUri(curves.Curve2D, I[1]);
  var t$ = dart.privateName(curves, "Curve2DSample.t");
  var value$ = dart.privateName(curves, "Curve2DSample.value");
  curves.Curve2DSample = class Curve2DSample extends core.Object {
    get t() {
      return this[t$];
    }
    set t(value) {
      super.t = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    static ['_#new#tearOff'](t, value) {
      return new curves.Curve2DSample.new(t, value);
    }
    toString() {
      return "[(" + this.value.dx[$toStringAsFixed](2) + ", " + this.value.dy[$toStringAsFixed](2) + "), " + this.t[$toStringAsFixed](2) + "]";
    }
  };
  (curves.Curve2DSample.new = function(t, value) {
    this[t$] = t;
    this[value$] = value;
    if (!(t !== null)) dart.assertFailed(null, I[0], 615, 52, "t != null");
    if (!(value !== null)) dart.assertFailed(null, I[0], 615, 71, "value != null");
    ;
  }).prototype = curves.Curve2DSample.prototype;
  dart.addTypeTests(curves.Curve2DSample);
  dart.addTypeCaches(curves.Curve2DSample);
  dart.setLibraryUri(curves.Curve2DSample, I[1]);
  dart.setFieldSignature(curves.Curve2DSample, () => ({
    __proto__: dart.getFields(curves.Curve2DSample.__proto__),
    t: dart.finalFieldType(core.double),
    value: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(curves.Curve2DSample, ['toString']);
  var _controlPoints = dart.privateName(curves, "_controlPoints");
  var _startHandle = dart.privateName(curves, "_startHandle");
  var _endHandle = dart.privateName(curves, "_endHandle");
  var _tension = dart.privateName(curves, "_tension");
  var _cubicSegments = dart.privateName(curves, "_cubicSegments");
  var _initializeIfNeeded = dart.privateName(curves, "_initializeIfNeeded");
  curves.CatmullRomSpline = class CatmullRomSpline extends curves.Curve2D {
    static ['_#new#tearOff'](controlPoints, opts) {
      let tension = opts && 'tension' in opts ? opts.tension : 0;
      let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
      let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
      return new curves.CatmullRomSpline.new(controlPoints, {tension: tension, startHandle: startHandle, endHandle: endHandle});
    }
    static ['_#precompute#tearOff'](controlPoints, opts) {
      let tension = opts && 'tension' in opts ? opts.tension : 0;
      let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
      let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
      return new curves.CatmullRomSpline.precompute(controlPoints, {tension: tension, startHandle: startHandle, endHandle: endHandle});
    }
    static _computeSegments(controlPoints, tension, opts) {
      let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
      let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
      startHandle == null ? startHandle = controlPoints[$_get](0)['*'](2.0)['-'](controlPoints[$_get](1)) : null;
      endHandle == null ? endHandle = controlPoints[$last]['*'](2.0)['-'](controlPoints[$_get](controlPoints[$length] - 2)) : null;
      let allPoints = (() => {
        let t3 = T.JSArrayOfOffset().of([startHandle]);
        t3[$addAll](controlPoints);
        t3.push(endHandle);
        return t3;
      })();
      let reverseTension = 1.0 - tension;
      let result = T.JSArrayOfListOfOffset().of([]);
      for (let i = 0; i < allPoints[$length] - 3; i = i + 1) {
        let curve = T.JSArrayOfOffset().of([allPoints[$_get](i), allPoints[$_get](i + 1), allPoints[$_get](i + 2), allPoints[$_get](i + 3)]);
        let diffCurve10 = curve[$_get](1)['-'](curve[$_get](0));
        let diffCurve21 = curve[$_get](2)['-'](curve[$_get](1));
        let diffCurve32 = curve[$_get](3)['-'](curve[$_get](2));
        let t01 = math.pow(diffCurve10.distance, 0.5)[$toDouble]();
        let t12 = math.pow(diffCurve21.distance, 0.5)[$toDouble]();
        let t23 = math.pow(diffCurve32.distance, 0.5)[$toDouble]();
        let m1 = diffCurve21['+'](diffCurve10['/'](t01)['-'](curve[$_get](2)['-'](curve[$_get](0))['/'](t01 + t12))['*'](t12))['*'](reverseTension);
        let m2 = diffCurve21['+'](diffCurve32['/'](t23)['-'](curve[$_get](3)['-'](curve[$_get](1))['/'](t12 + t23))['*'](t12))['*'](reverseTension);
        let sumM12 = m1['+'](m2);
        let segment = T.JSArrayOfOffset().of([diffCurve21['*'](-2.0)['+'](sumM12), diffCurve21['*'](3.0)['-'](m1)['-'](sumM12), m1, curve[$_get](1)]);
        result[$add](segment);
      }
      return result;
    }
    [_initializeIfNeeded]() {
      if (this[_cubicSegments][$isNotEmpty]) {
        return;
      }
      this[_cubicSegments][$addAll](curves.CatmullRomSpline._computeSegments(dart.nullCheck(this[_controlPoints]), dart.nullCheck(this[_tension]), {startHandle: this[_startHandle], endHandle: this[_endHandle]}));
    }
    get samplingSeed() {
      this[_initializeIfNeeded]();
      let seedPoint = this[_cubicSegments][$_get](0)[$_get](1);
      return ((seedPoint.dx + seedPoint.dy) * 10000)[$round]();
    }
    transformInternal(t) {
      this[_initializeIfNeeded]();
      let length = this[_cubicSegments][$length][$toDouble]();
      let position = null;
      let localT = null;
      let index = null;
      if (t < 1.0) {
        position = t * length;
        localT = position[$modulo](1.0);
        index = position[$floor]();
      } else {
        position = length;
        localT = 1.0;
        index = this[_cubicSegments][$length] - 1;
      }
      let cubicControlPoints = this[_cubicSegments][$_get](index);
      let localT2 = localT * localT;
      return cubicControlPoints[$_get](0)['*'](localT2)['*'](localT)['+'](cubicControlPoints[$_get](1)['*'](localT2))['+'](cubicControlPoints[$_get](2)['*'](localT))['+'](cubicControlPoints[$_get](3));
    }
  };
  (curves.CatmullRomSpline.new = function(controlPoints, opts) {
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
    let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
    if (!(controlPoints !== null)) dart.assertFailed(null, I[0], 685, 19, "controlPoints != null");
    if (!(tension !== null)) dart.assertFailed(null, I[0], 686, 19, "tension != null");
    if (!(tension <= 1.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be greater than 1.0.", I[0], 687, 19, "tension <= 1.0");
    if (!(tension >= 0.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be negative.", I[0], 688, 19, "tension >= 0.0");
    if (!(controlPoints[$length] > 3)) dart.assertFailed("There must be at least four control points to create a CatmullRomSpline.", I[0], 689, 19, "controlPoints.length > 3");
    this[_controlPoints] = controlPoints;
    this[_startHandle] = startHandle;
    this[_endHandle] = endHandle;
    this[_tension] = tension;
    this[_cubicSegments] = T.JSArrayOfListOfOffset().of([]);
    curves.CatmullRomSpline.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomSpline.prototype;
  (curves.CatmullRomSpline.precompute = function(controlPoints, opts) {
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
    let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
    if (!(controlPoints !== null)) dart.assertFailed(null, I[0], 705, 19, "controlPoints != null");
    if (!(tension !== null)) dart.assertFailed(null, I[0], 706, 19, "tension != null");
    if (!(tension <= 1.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be greater than 1.0.", I[0], 707, 19, "tension <= 1.0");
    if (!(tension >= 0.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be negative.", I[0], 708, 19, "tension >= 0.0");
    if (!(controlPoints[$length] > 3)) dart.assertFailed("There must be at least four control points to create a CatmullRomSpline.", I[0], 709, 19, "controlPoints.length > 3");
    this[_controlPoints] = null;
    this[_startHandle] = null;
    this[_endHandle] = null;
    this[_tension] = null;
    this[_cubicSegments] = curves.CatmullRomSpline._computeSegments(controlPoints, tension, {startHandle: startHandle, endHandle: endHandle});
    curves.CatmullRomSpline.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomSpline.prototype;
  dart.addTypeTests(curves.CatmullRomSpline);
  dart.addTypeCaches(curves.CatmullRomSpline);
  dart.setMethodSignature(curves.CatmullRomSpline, () => ({
    __proto__: dart.getMethods(curves.CatmullRomSpline.__proto__),
    [_initializeIfNeeded]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(curves.CatmullRomSpline, () => ['_computeSegments']);
  dart.setLibraryUri(curves.CatmullRomSpline, I[1]);
  dart.setFieldSignature(curves.CatmullRomSpline, () => ({
    __proto__: dart.getFields(curves.CatmullRomSpline.__proto__),
    [_cubicSegments]: dart.finalFieldType(core.List$(core.List$(ui.Offset))),
    [_controlPoints]: dart.finalFieldType(dart.nullable(core.List$(ui.Offset))),
    [_startHandle]: dart.finalFieldType(dart.nullable(ui.Offset)),
    [_endHandle]: dart.finalFieldType(dart.nullable(ui.Offset)),
    [_tension]: dart.finalFieldType(dart.nullable(core.double))
  }));
  var controlPoints$ = dart.privateName(curves, "CatmullRomCurve.controlPoints");
  var tension$ = dart.privateName(curves, "CatmullRomCurve.tension");
  var _precomputedSamples = dart.privateName(curves, "_precomputedSamples");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  curves.CatmullRomCurve = class CatmullRomCurve extends curves.Curve {
    get controlPoints() {
      return this[controlPoints$];
    }
    set controlPoints(value) {
      super.controlPoints = value;
    }
    get tension() {
      return this[tension$];
    }
    set tension(value) {
      super.tension = value;
    }
    static ['_#new#tearOff'](controlPoints, opts) {
      let tension = opts && 'tension' in opts ? opts.tension : 0;
      return new curves.CatmullRomCurve.new(controlPoints, {tension: tension});
    }
    static ['_#precompute#tearOff'](controlPoints, opts) {
      let tension = opts && 'tension' in opts ? opts.tension : 0;
      return new curves.CatmullRomCurve.precompute(controlPoints, {tension: tension});
    }
    static _computeSamples(controlPoints, tension) {
      return new curves.CatmullRomSpline.precompute((() => {
        let t4 = T.JSArrayOfOffset().of([ui.Offset.zero]);
        t4[$addAll](controlPoints);
        t4.push(C[1] || CT.C1);
        return t4;
      })(), {tension: tension}).generateSamples({tolerance: 1e-12})[$toList]();
    }
    static validateControlPoints(controlPoints, opts) {
      let tension = opts && 'tension' in opts ? opts.tension : 0;
      let reasons = opts && 'reasons' in opts ? opts.reasons : null;
      if (!(tension !== null)) dart.assertFailed(null, I[0], 966, 12, "tension != null");
      if (controlPoints == null) {
        if (!dart.fn(() => {
          let t5;
          t5 = reasons;
          t5 == null ? null : t5[$add]("Supplied control points cannot be null");
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[0], 968, 14, "() {\n        reasons?.add('Supplied control points cannot be null');\n        return true;\n      }()");
        return false;
      }
      if (controlPoints[$length] < 2) {
        if (!dart.fn(() => {
          let t5;
          t5 = reasons;
          t5 == null ? null : t5[$add]("There must be at least two points supplied to create a valid curve.");
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[0], 976, 14, "() {\n        reasons?.add('There must be at least two points supplied to create a valid curve.');\n        return true;\n      }()");
        return false;
      }
      controlPoints = (() => {
        let t5 = T.JSArrayOfOffset().of([ui.Offset.zero]);
        t5[$addAll](controlPoints);
        t5.push(C[1] || CT.C1);
        return t5;
      })();
      let startHandle = controlPoints[$_get](0)['*'](2.0)['-'](controlPoints[$_get](1));
      let endHandle = controlPoints[$last]['*'](2.0)['-'](controlPoints[$_get](controlPoints[$length] - 2));
      controlPoints = (() => {
        let t6 = T.JSArrayOfOffset().of([startHandle]);
        t6[$addAll](controlPoints);
        t6.push(endHandle);
        return t6;
      })();
      let lastX = -(1 / 0);
      for (let i = 0; i < controlPoints[$length]; i = i + 1) {
        if (i > 1 && i < controlPoints[$length] - 2 && (controlPoints[$_get](i).dx <= 0.0 || controlPoints[$_get](i).dx >= 1.0)) {
          if (!dart.fn(() => {
            let t7;
            t7 = reasons;
            t7 == null ? null : t7[$add]("Control points must have X values between 0.0 and 1.0, exclusive. " + "Point " + dart.str(i) + " has an x value (" + dart.str(dart.nullCheck(controlPoints)[$_get](i).dx) + ") which is outside the range.");
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[0], 992, 16, "() {\n          reasons?.add(\n            'Control points must have X values between 0.0 and 1.0, exclusive. '\n            'Point $i has an x value (${controlPoints![i].dx}) which is outside the range.',\n          );\n          return true;\n        }()");
          return false;
        }
        if (controlPoints[$_get](i).dx <= lastX) {
          if (!dart.fn(() => {
            let t7;
            t7 = reasons;
            t7 == null ? null : t7[$add]("Each X coordinate must be greater than the preceding X coordinate " + "(i.e. must be monotonically increasing in X). Point " + dart.str(i) + " has an x value of " + dart.str(dart.nullCheck(controlPoints)[$_get](i).dx) + ", which is not greater than " + dart.str(lastX));
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[0], 1002, 16, "() {\n          reasons?.add(\n            'Each X coordinate must be greater than the preceding X coordinate '\n            '(i.e. must be monotonically increasing in X). Point $i has an x value of '\n            '${controlPoints![i].dx}, which is not greater than $lastX',\n          );\n          return true;\n        }()");
          return false;
        }
        lastX = controlPoints[$_get](i).dx;
      }
      let success = true;
      lastX = -(1 / 0);
      let testSpline = new curves.CatmullRomSpline.new(controlPoints, {tension: tension});
      let start = testSpline.findInverse(0.0);
      let end = testSpline.findInverse(1.0);
      let samplePoints = testSpline.generateSamples({start: start, end: end});
      if (samplePoints[$first].value.dy[$abs]() > 0.001 || (1.0 - samplePoints[$last].value.dy)[$abs]() > 0.001) {
        let bail = true;
        success = false;
        if (!dart.fn(() => {
          let t7;
          t7 = reasons;
          t7 == null ? null : t7[$add]("The curve has more than one Y value at X = " + dart.str(samplePoints[$first].value.dx) + ". " + "Try moving some control points further away from this value of X, or increasing " + "the tension.");
          bail = reasons == null;
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[0], 1029, 14, "() {\n        reasons?.add(\n          'The curve has more than one Y value at X = ${samplePoints.first.value.dx}. '\n          'Try moving some control points further away from this value of X, or increasing '\n          'the tension.',\n        );\n        // No need to keep going if we're not giving reasons.\n        bail = reasons == null;\n        return true;\n      }()");
        if (bail) {
          return false;
        }
      }
      for (let sample of samplePoints) {
        let point = sample.value;
        let t = sample.t;
        let x = point.dx;
        if (t >= start && t <= end && (x < -0.001 || x > 1.0 + 0.001)) {
          let bail = true;
          success = false;
          if (!dart.fn(() => {
            let t7;
            t7 = reasons;
            t7 == null ? null : t7[$add]("The resulting curve has an X value (" + dart.str(x) + ") which is outside " + "the range [0.0, 1.0], inclusive.");
            bail = reasons == null;
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[0], 1052, 16, "() {\n          reasons?.add(\n            'The resulting curve has an X value ($x) which is outside '\n            'the range [0.0, 1.0], inclusive.',\n          );\n          // No need to keep going if we're not giving reasons.\n          bail = reasons == null;\n          return true;\n        }()");
          if (bail) {
            return false;
          }
        }
        if (x < lastX) {
          let bail = true;
          success = false;
          if (!dart.fn(() => {
            let t7;
            t7 = reasons;
            t7 == null ? null : t7[$add]("The curve has more than one Y value at x = " + dart.str(x) + ". Try moving " + "some control points further apart in X, or increasing the tension.");
            bail = reasons == null;
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[0], 1070, 16, "() {\n          reasons?.add(\n            'The curve has more than one Y value at x = $x. Try moving '\n            'some control points further apart in X, or increasing the tension.',\n          );\n          // No need to keep going if we're not giving reasons.\n          bail = reasons == null;\n          return true;\n        }()");
          if (bail) {
            return false;
          }
        }
        lastX = x;
      }
      return success;
    }
    transformInternal(t) {
      if (this[_precomputedSamples][$isEmpty]) {
        this[_precomputedSamples][$addAll](curves.CatmullRomCurve._computeSamples(this.controlPoints, this.tension));
      }
      let start = 0;
      let end = this[_precomputedSamples][$length] - 1;
      let mid = null;
      let value = null;
      let startValue = this[_precomputedSamples][$_get](start).value;
      let endValue = this[_precomputedSamples][$_get](end).value;
      while (end - start > 1) {
        mid = ((end + start) / 2)[$truncate]();
        value = this[_precomputedSamples][$_get](mid).value;
        if (t >= value.dx) {
          start = mid;
          startValue = value;
        } else {
          end = mid;
          endValue = value;
        }
      }
      let t2 = (t - startValue.dx) / (endValue.dx - startValue.dx);
      return dart.nullCheck(ui.lerpDouble(startValue.dy, endValue.dy, t2));
    }
  };
  (curves.CatmullRomCurve.new = function(controlPoints, opts) {
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    this[controlPoints$] = controlPoints;
    this[tension$] = tension;
    if (!(tension !== null)) dart.assertFailed(null, I[0], 863, 16, "tension != null");
    if (!dart.fn(() => {
      let t4;
      return curves.CatmullRomCurve.validateControlPoints(controlPoints, {tension: tension, reasons: (t4 = curves.CatmullRomCurve._debugAssertReasons, (() => {
          t4[$clear]();
          return t4;
        })())});
    }, T.VoidTobool())()) dart.assertFailed("control points " + dart.str(controlPoints) + " could not be validated:\n  " + curves.CatmullRomCurve._debugAssertReasons[$join]("\n  "), I[0], 864, 16, "() {\n          return validateControlPoints(\n            controlPoints,\n            tension: tension,\n            reasons: _debugAssertReasons..clear(),\n          );\n        }()");
    this[_precomputedSamples] = T.JSArrayOfCurve2DSample().of([]);
    curves.CatmullRomCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomCurve.prototype;
  (curves.CatmullRomCurve.precompute = function(controlPoints, opts) {
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    this[controlPoints$] = controlPoints;
    this[tension$] = tension;
    if (!(tension !== null)) dart.assertFailed(null, I[0], 880, 16, "tension != null");
    if (!dart.fn(() => {
      let t4;
      return curves.CatmullRomCurve.validateControlPoints(controlPoints, {tension: tension, reasons: (t4 = curves.CatmullRomCurve._debugAssertReasons, (() => {
          t4[$clear]();
          return t4;
        })())});
    }, T.VoidTobool())()) dart.assertFailed("control points " + dart.str(controlPoints) + " could not be validated:\n  " + curves.CatmullRomCurve._debugAssertReasons[$join]("\n  "), I[0], 881, 16, "() {\n          return validateControlPoints(\n            controlPoints,\n            tension: tension,\n            reasons: _debugAssertReasons..clear(),\n          );\n        }()");
    this[_precomputedSamples] = curves.CatmullRomCurve._computeSamples(controlPoints, tension);
    curves.CatmullRomCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomCurve.prototype;
  dart.addTypeTests(curves.CatmullRomCurve);
  dart.addTypeCaches(curves.CatmullRomCurve);
  dart.setStaticMethodSignature(curves.CatmullRomCurve, () => ['_computeSamples', 'validateControlPoints']);
  dart.setLibraryUri(curves.CatmullRomCurve, I[1]);
  dart.setFieldSignature(curves.CatmullRomCurve, () => ({
    __proto__: dart.getFields(curves.CatmullRomCurve.__proto__),
    [_precomputedSamples]: dart.finalFieldType(core.List$(curves.Curve2DSample)),
    controlPoints: dart.finalFieldType(core.List$(ui.Offset)),
    tension: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(curves.CatmullRomCurve, () => ['_debugAssertReasons']);
  dart.defineLazy(curves.CatmullRomCurve, {
    /*curves.CatmullRomCurve._debugAssertReasons*/get _debugAssertReasons() {
      return T.JSArrayOfString().of([]);
    }
  }, false);
  var curve$0 = dart.privateName(curves, "FlippedCurve.curve");
  curves.FlippedCurve = class FlippedCurve extends curves.Curve {
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    static ['_#new#tearOff'](curve) {
      return new curves.FlippedCurve.new(curve);
    }
    transformInternal(t) {
      return 1.0 - this.curve.transform(1.0 - t);
    }
    toString() {
      return object.objectRuntimeType(this, "FlippedCurve") + "(" + dart.str(this.curve) + ")";
    }
  };
  (curves.FlippedCurve.new = function(curve) {
    this[curve$0] = curve;
    if (!(curve !== null)) dart.assertFailed(null, I[0], 1146, 43, "curve != null");
    curves.FlippedCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.FlippedCurve.prototype;
  dart.addTypeTests(curves.FlippedCurve);
  dart.addTypeCaches(curves.FlippedCurve);
  dart.setLibraryUri(curves.FlippedCurve, I[1]);
  dart.setFieldSignature(curves.FlippedCurve, () => ({
    __proto__: dart.getFields(curves.FlippedCurve.__proto__),
    curve: dart.finalFieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(curves.FlippedCurve, ['toString']);
  curves._DecelerateCurve = class _DecelerateCurve extends curves.Curve {
    static ['_#_#tearOff']() {
      return new curves._DecelerateCurve.__();
    }
    transformInternal(t) {
      t = 1.0 - t;
      return 1.0 - t * t;
    }
  };
  (curves._DecelerateCurve.__ = function() {
    curves._DecelerateCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._DecelerateCurve.prototype;
  dart.addTypeTests(curves._DecelerateCurve);
  dart.addTypeCaches(curves._DecelerateCurve);
  dart.setLibraryUri(curves._DecelerateCurve, I[1]);
  curves._BounceInCurve = class _BounceInCurve extends curves.Curve {
    static ['_#_#tearOff']() {
      return new curves._BounceInCurve.__();
    }
    transformInternal(t) {
      return 1.0 - curves._bounce(1.0 - t);
    }
  };
  (curves._BounceInCurve.__ = function() {
    curves._BounceInCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceInCurve.prototype;
  dart.addTypeTests(curves._BounceInCurve);
  dart.addTypeCaches(curves._BounceInCurve);
  dart.setLibraryUri(curves._BounceInCurve, I[1]);
  curves._BounceOutCurve = class _BounceOutCurve extends curves.Curve {
    static ['_#_#tearOff']() {
      return new curves._BounceOutCurve.__();
    }
    transformInternal(t) {
      return curves._bounce(t);
    }
  };
  (curves._BounceOutCurve.__ = function() {
    curves._BounceOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceOutCurve.prototype;
  dart.addTypeTests(curves._BounceOutCurve);
  dart.addTypeCaches(curves._BounceOutCurve);
  dart.setLibraryUri(curves._BounceOutCurve, I[1]);
  curves._BounceInOutCurve = class _BounceInOutCurve extends curves.Curve {
    static ['_#_#tearOff']() {
      return new curves._BounceInOutCurve.__();
    }
    transformInternal(t) {
      if (t < 0.5) {
        return (1.0 - curves._bounce(1.0 - t * 2.0)) * 0.5;
      } else {
        return curves._bounce(t * 2.0 - 1.0) * 0.5 + 0.5;
      }
    }
  };
  (curves._BounceInOutCurve.__ = function() {
    curves._BounceInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceInOutCurve.prototype;
  dart.addTypeTests(curves._BounceInOutCurve);
  dart.addTypeCaches(curves._BounceInOutCurve);
  dart.setLibraryUri(curves._BounceInOutCurve, I[1]);
  var period$ = dart.privateName(curves, "ElasticInCurve.period");
  curves.ElasticInCurve = class ElasticInCurve extends curves.Curve {
    get period() {
      return this[period$];
    }
    set period(value) {
      super.period = value;
    }
    static ['_#new#tearOff'](period = 0.4) {
      return new curves.ElasticInCurve.new(period);
    }
    transformInternal(t) {
      let s = this.period / 4.0;
      t = t - 1.0;
      return -math.pow(2.0, 10.0 * t) * math.sin((t - s) * (3.141592653589793 * 2.0) / this.period);
    }
    toString() {
      return object.objectRuntimeType(this, "ElasticInCurve") + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticInCurve.new = function(period = 0.4) {
    this[period$] = period;
    curves.ElasticInCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticInCurve.prototype;
  dart.addTypeTests(curves.ElasticInCurve);
  dart.addTypeCaches(curves.ElasticInCurve);
  dart.setLibraryUri(curves.ElasticInCurve, I[1]);
  dart.setFieldSignature(curves.ElasticInCurve, () => ({
    __proto__: dart.getFields(curves.ElasticInCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticInCurve, ['toString']);
  var period$0 = dart.privateName(curves, "ElasticOutCurve.period");
  curves.ElasticOutCurve = class ElasticOutCurve extends curves.Curve {
    get period() {
      return this[period$0];
    }
    set period(value) {
      super.period = value;
    }
    static ['_#new#tearOff'](period = 0.4) {
      return new curves.ElasticOutCurve.new(period);
    }
    transformInternal(t) {
      let s = this.period / 4.0;
      return math.pow(2.0, -10 * t) * math.sin((t - s) * (3.141592653589793 * 2.0) / this.period) + 1.0;
    }
    toString() {
      return object.objectRuntimeType(this, "ElasticOutCurve") + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticOutCurve.new = function(period = 0.4) {
    this[period$0] = period;
    curves.ElasticOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticOutCurve.prototype;
  dart.addTypeTests(curves.ElasticOutCurve);
  dart.addTypeCaches(curves.ElasticOutCurve);
  dart.setLibraryUri(curves.ElasticOutCurve, I[1]);
  dart.setFieldSignature(curves.ElasticOutCurve, () => ({
    __proto__: dart.getFields(curves.ElasticOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticOutCurve, ['toString']);
  var period$1 = dart.privateName(curves, "ElasticInOutCurve.period");
  curves.ElasticInOutCurve = class ElasticInOutCurve extends curves.Curve {
    get period() {
      return this[period$1];
    }
    set period(value) {
      super.period = value;
    }
    static ['_#new#tearOff'](period = 0.4) {
      return new curves.ElasticInOutCurve.new(period);
    }
    transformInternal(t) {
      let s = this.period / 4.0;
      t = 2.0 * t - 1.0;
      if (t < 0.0) {
        return -0.5 * math.pow(2.0, 10.0 * t) * math.sin((t - s) * (3.141592653589793 * 2.0) / this.period);
      } else {
        return math.pow(2.0, -10.0 * t) * math.sin((t - s) * (3.141592653589793 * 2.0) / this.period) * 0.5 + 1.0;
      }
    }
    toString() {
      return object.objectRuntimeType(this, "ElasticInOutCurve") + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticInOutCurve.new = function(period = 0.4) {
    this[period$1] = period;
    curves.ElasticInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticInOutCurve.prototype;
  dart.addTypeTests(curves.ElasticInOutCurve);
  dart.addTypeCaches(curves.ElasticInOutCurve);
  dart.setLibraryUri(curves.ElasticInOutCurve, I[1]);
  dart.setFieldSignature(curves.ElasticInOutCurve, () => ({
    __proto__: dart.getFields(curves.ElasticInOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticInOutCurve, ['toString']);
  curves.Curves = class Curves extends core.Object {
    static ['_#_#tearOff']() {
      return new curves.Curves.__();
    }
  };
  (curves.Curves.__ = function() {
    ;
  }).prototype = curves.Curves.prototype;
  dart.addTypeTests(curves.Curves);
  dart.addTypeCaches(curves.Curves);
  dart.setLibraryUri(curves.Curves, I[1]);
  dart.setStaticFieldSignature(curves.Curves, () => ['linear', 'decelerate', 'fastLinearToSlowEaseIn', 'ease', 'easeIn', 'easeInToLinear', 'easeInSine', 'easeInQuad', 'easeInCubic', 'easeInQuart', 'easeInQuint', 'easeInExpo', 'easeInCirc', 'easeInBack', 'easeOut', 'linearToEaseOut', 'easeOutSine', 'easeOutQuad', 'easeOutCubic', 'easeOutQuart', 'easeOutQuint', 'easeOutExpo', 'easeOutCirc', 'easeOutBack', 'easeInOut', 'easeInOutSine', 'easeInOutQuad', 'easeInOutCubic', 'easeInOutCubicEmphasized', 'easeInOutQuart', 'easeInOutQuint', 'easeInOutExpo', 'easeInOutCirc', 'easeInOutBack', 'fastOutSlowIn', 'slowMiddle', 'bounceIn', 'bounceOut', 'bounceInOut', 'elasticIn', 'elasticOut', 'elasticInOut']);
  dart.defineLazy(curves.Curves, {
    /*curves.Curves.linear*/get linear() {
      return C[0] || CT.C0;
    },
    /*curves.Curves.decelerate*/get decelerate() {
      return C[2] || CT.C2;
    },
    /*curves.Curves.fastLinearToSlowEaseIn*/get fastLinearToSlowEaseIn() {
      return C[3] || CT.C3;
    },
    /*curves.Curves.ease*/get ease() {
      return C[4] || CT.C4;
    },
    /*curves.Curves.easeIn*/get easeIn() {
      return C[5] || CT.C5;
    },
    /*curves.Curves.easeInToLinear*/get easeInToLinear() {
      return C[6] || CT.C6;
    },
    /*curves.Curves.easeInSine*/get easeInSine() {
      return C[7] || CT.C7;
    },
    /*curves.Curves.easeInQuad*/get easeInQuad() {
      return C[8] || CT.C8;
    },
    /*curves.Curves.easeInCubic*/get easeInCubic() {
      return C[9] || CT.C9;
    },
    /*curves.Curves.easeInQuart*/get easeInQuart() {
      return C[10] || CT.C10;
    },
    /*curves.Curves.easeInQuint*/get easeInQuint() {
      return C[11] || CT.C11;
    },
    /*curves.Curves.easeInExpo*/get easeInExpo() {
      return C[12] || CT.C12;
    },
    /*curves.Curves.easeInCirc*/get easeInCirc() {
      return C[13] || CT.C13;
    },
    /*curves.Curves.easeInBack*/get easeInBack() {
      return C[14] || CT.C14;
    },
    /*curves.Curves.easeOut*/get easeOut() {
      return C[15] || CT.C15;
    },
    /*curves.Curves.linearToEaseOut*/get linearToEaseOut() {
      return C[16] || CT.C16;
    },
    /*curves.Curves.easeOutSine*/get easeOutSine() {
      return C[17] || CT.C17;
    },
    /*curves.Curves.easeOutQuad*/get easeOutQuad() {
      return C[18] || CT.C18;
    },
    /*curves.Curves.easeOutCubic*/get easeOutCubic() {
      return C[19] || CT.C19;
    },
    /*curves.Curves.easeOutQuart*/get easeOutQuart() {
      return C[20] || CT.C20;
    },
    /*curves.Curves.easeOutQuint*/get easeOutQuint() {
      return C[21] || CT.C21;
    },
    /*curves.Curves.easeOutExpo*/get easeOutExpo() {
      return C[22] || CT.C22;
    },
    /*curves.Curves.easeOutCirc*/get easeOutCirc() {
      return C[23] || CT.C23;
    },
    /*curves.Curves.easeOutBack*/get easeOutBack() {
      return C[24] || CT.C24;
    },
    /*curves.Curves.easeInOut*/get easeInOut() {
      return C[25] || CT.C25;
    },
    /*curves.Curves.easeInOutSine*/get easeInOutSine() {
      return C[26] || CT.C26;
    },
    /*curves.Curves.easeInOutQuad*/get easeInOutQuad() {
      return C[27] || CT.C27;
    },
    /*curves.Curves.easeInOutCubic*/get easeInOutCubic() {
      return C[28] || CT.C28;
    },
    /*curves.Curves.easeInOutCubicEmphasized*/get easeInOutCubicEmphasized() {
      return C[29] || CT.C29;
    },
    /*curves.Curves.easeInOutQuart*/get easeInOutQuart() {
      return C[35] || CT.C35;
    },
    /*curves.Curves.easeInOutQuint*/get easeInOutQuint() {
      return C[36] || CT.C36;
    },
    /*curves.Curves.easeInOutExpo*/get easeInOutExpo() {
      return C[37] || CT.C37;
    },
    /*curves.Curves.easeInOutCirc*/get easeInOutCirc() {
      return C[38] || CT.C38;
    },
    /*curves.Curves.easeInOutBack*/get easeInOutBack() {
      return C[39] || CT.C39;
    },
    /*curves.Curves.fastOutSlowIn*/get fastOutSlowIn() {
      return C[40] || CT.C40;
    },
    /*curves.Curves.slowMiddle*/get slowMiddle() {
      return C[41] || CT.C41;
    },
    /*curves.Curves.bounceIn*/get bounceIn() {
      return C[42] || CT.C42;
    },
    /*curves.Curves.bounceOut*/get bounceOut() {
      return C[43] || CT.C43;
    },
    /*curves.Curves.bounceInOut*/get bounceInOut() {
      return C[44] || CT.C44;
    },
    /*curves.Curves.elasticIn*/get elasticIn() {
      return C[45] || CT.C45;
    },
    /*curves.Curves.elasticOut*/get elasticOut() {
      return C[46] || CT.C46;
    },
    /*curves.Curves.elasticInOut*/get elasticInOut() {
      return C[47] || CT.C47;
    }
  }, false);
  curves._bounce = function _bounce(t) {
    if (t < 1.0 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      t = t - 1.5 / 2.75;
      return 7.5625 * t * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      t = t - 2.25 / 2.75;
      return 7.5625 * t * t + 0.9375;
    }
    t = t - 2.625 / 2.75;
    return 7.5625 * t * t + 0.984375;
  };
  dart.trackLibraries("packages/flutter/src/animation/curves.dart", {
    "package:flutter/src/animation/curves.dart": curves
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["curves.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/animation/curves.dart.lib.js"}');
  // Exports:
  return {
    src__animation__curves: curves
  };
}));

//# sourceMappingURL=curves.dart.lib.js.map