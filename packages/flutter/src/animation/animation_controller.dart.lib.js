define(['dart_sdk', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/semantics/binding.dart', 'packages/flutter/src/scheduler/ticker.dart', 'packages/flutter/src/physics/spring_simulation.dart', 'packages/flutter/src/physics/simulation.dart', 'packages/flutter/src/physics/tolerance.dart'], (function load__packages__flutter__src__animation__animation_controller_dart(dart_sdk, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__semantics__binding$46dart, packages__flutter__src__scheduler__ticker$46dart, packages__flutter__src__physics__spring_simulation$46dart, packages__flutter__src__physics__simulation$46dart, packages__flutter__src__physics__tolerance$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const listener_helpers = packages__flutter__src__animation__listener_helpers$46dart.src__animation__listener_helpers;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const binding = packages__flutter__src__semantics__binding$46dart.src__semantics__binding;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  const spring_simulation = packages__flutter__src__physics__spring_simulation$46dart.src__physics__spring_simulation;
  const simulation = packages__flutter__src__physics__simulation$46dart.src__physics__simulation;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  var animation_controller = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $isFinite = dartx.isFinite;
  var $abs = dartx.abs;
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $modulo = dartx['%'];
  var $isOdd = dartx.isOdd;
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfAnimationController: () => (T.DiagnosticsPropertyOfAnimationController = dart.constFn(diagnostics.DiagnosticsProperty$(animation_controller.AnimationController)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: animation_controller._AnimationDirection.prototype,
        [_Enum__name]: "forward",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: animation_controller._AnimationDirection.prototype,
        [_Enum__name]: "reverse",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], animation_controller._AnimationDirection);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: animation_controller.AnimationBehavior.prototype,
        [_Enum__name]: "normal",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: animation_controller.AnimationBehavior.prototype,
        [_Enum__name]: "preserve",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.constList([C[4] || CT.C4, C[5] || CT.C5], animation_controller.AnimationBehavior);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 1 / 0,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.01
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = [
    "package:flutter/src/animation/animation_controller.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/animation/animation_controller.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  animation_controller._AnimationDirection = class _AnimationDirection extends core._Enum {
    toString() {
      return "_AnimationDirection." + this[_name];
    }
  };
  (animation_controller._AnimationDirection.new = function(index, name) {
    animation_controller._AnimationDirection.__proto__.new.call(this, index, name);
    ;
  }).prototype = animation_controller._AnimationDirection.prototype;
  dart.addTypeTests(animation_controller._AnimationDirection);
  dart.addTypeCaches(animation_controller._AnimationDirection);
  dart.setLibraryUri(animation_controller._AnimationDirection, I[0]);
  dart.setStaticFieldSignature(animation_controller._AnimationDirection, () => ['values', 'forward', 'reverse']);
  dart.defineExtensionMethods(animation_controller._AnimationDirection, ['toString']);
  dart.defineLazy(animation_controller._AnimationDirection, {
    /*animation_controller._AnimationDirection.values*/get values() {
      return C[0] || CT.C0;
    },
    /*animation_controller._AnimationDirection.forward*/get forward() {
      return C[1] || CT.C1;
    },
    /*animation_controller._AnimationDirection.reverse*/get reverse() {
      return C[2] || CT.C2;
    }
  }, false);
  animation_controller.AnimationBehavior = class AnimationBehavior extends core._Enum {
    toString() {
      return "AnimationBehavior." + this[_name];
    }
  };
  (animation_controller.AnimationBehavior.new = function(index, name) {
    animation_controller.AnimationBehavior.__proto__.new.call(this, index, name);
    ;
  }).prototype = animation_controller.AnimationBehavior.prototype;
  dart.addTypeTests(animation_controller.AnimationBehavior);
  dart.addTypeCaches(animation_controller.AnimationBehavior);
  dart.setLibraryUri(animation_controller.AnimationBehavior, I[0]);
  dart.setStaticFieldSignature(animation_controller.AnimationBehavior, () => ['values', 'normal', 'preserve']);
  dart.defineExtensionMethods(animation_controller.AnimationBehavior, ['toString']);
  dart.defineLazy(animation_controller.AnimationBehavior, {
    /*animation_controller.AnimationBehavior.values*/get values() {
      return C[3] || CT.C3;
    },
    /*animation_controller.AnimationBehavior.normal*/get normal() {
      return C[4] || CT.C4;
    },
    /*animation_controller.AnimationBehavior.preserve*/get preserve() {
      return C[5] || CT.C5;
    }
  }, false);
  var lowerBound$ = dart.privateName(animation_controller, "AnimationController.lowerBound");
  var upperBound$ = dart.privateName(animation_controller, "AnimationController.upperBound");
  var debugLabel$ = dart.privateName(animation_controller, "AnimationController.debugLabel");
  var animationBehavior$ = dart.privateName(animation_controller, "AnimationController.animationBehavior");
  var duration$ = dart.privateName(animation_controller, "AnimationController.duration");
  var reverseDuration$ = dart.privateName(animation_controller, "AnimationController.reverseDuration");
  var _ticker = dart.privateName(animation_controller, "_ticker");
  var _simulation = dart.privateName(animation_controller, "_simulation");
  var __AnimationController__value = dart.privateName(animation_controller, "_#AnimationController#_value");
  var _lastElapsedDuration = dart.privateName(animation_controller, "_lastElapsedDuration");
  var __AnimationController__status = dart.privateName(animation_controller, "_#AnimationController#_status");
  var _lastReportedStatus = dart.privateName(animation_controller, "_lastReportedStatus");
  var _direction = dart.privateName(animation_controller, "_direction");
  var _tick = dart.privateName(animation_controller, "_tick");
  var _internalSetValue = dart.privateName(animation_controller, "_internalSetValue");
  var _value = dart.privateName(animation_controller, "_value");
  var _checkStatusChanged = dart.privateName(animation_controller, "_checkStatusChanged");
  var _status = dart.privateName(animation_controller, "_status");
  var _animateToInternal = dart.privateName(animation_controller, "_animateToInternal");
  var _startSimulation = dart.privateName(animation_controller, "_startSimulation");
  var _directionSetter = dart.privateName(animation_controller, "_directionSetter");
  const Animation_AnimationEagerListenerMixin$36 = class Animation_AnimationEagerListenerMixin extends animation.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36.new = function() {
    Animation_AnimationEagerListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36 {};
  (Animation_AnimationLocalStatusListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36, listener_helpers.AnimationLocalStatusListenersMixin);
  animation_controller.AnimationController = class AnimationController extends Animation_AnimationLocalStatusListenersMixin$36 {
    get lowerBound() {
      return this[lowerBound$];
    }
    set lowerBound(value) {
      super.lowerBound = value;
    }
    get upperBound() {
      return this[upperBound$];
    }
    set upperBound(value) {
      super.upperBound = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get animationBehavior() {
      return this[animationBehavior$];
    }
    set animationBehavior(value) {
      super.animationBehavior = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      this[duration$] = value;
    }
    get reverseDuration() {
      return this[reverseDuration$];
    }
    set reverseDuration(value) {
      this[reverseDuration$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let lowerBound = opts && 'lowerBound' in opts ? opts.lowerBound : 0;
      let upperBound = opts && 'upperBound' in opts ? opts.upperBound : 1;
      let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C[4] || CT.C4;
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      return new animation_controller.AnimationController.new({value: value, duration: duration, reverseDuration: reverseDuration, debugLabel: debugLabel, lowerBound: lowerBound, upperBound: upperBound, animationBehavior: animationBehavior, vsync: vsync});
    }
    static ['_#unbounded#tearOff'](opts) {
      let value = opts && 'value' in opts ? opts.value : 0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C[5] || CT.C5;
      return new animation_controller.AnimationController.unbounded({value: value, duration: duration, reverseDuration: reverseDuration, debugLabel: debugLabel, vsync: vsync, animationBehavior: animationBehavior});
    }
    get view() {
      return this;
    }
    resync(vsync) {
      let oldTicker = dart.nullCheck(this[_ticker]);
      this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
      dart.nullCheck(this[_ticker]).absorbTicker(oldTicker);
    }
    get value() {
      return this[_value];
    }
    get [_value]() {
      let t4;
      t4 = this[__AnimationController__value];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_value")) : t4;
    }
    set [_value](library$32package$58flutter$47src$47animation$47animation_controller$46dart$58$58_value$35param) {
      this[__AnimationController__value] = library$32package$58flutter$47src$47animation$47animation_controller$46dart$58$58_value$35param;
    }
    set value(newValue) {
      if (!(newValue !== null)) dart.assertFailed(null, I[1], 366, 12, "newValue != null");
      this.stop();
      this[_internalSetValue](newValue);
      this.notifyListeners();
      this[_checkStatusChanged]();
    }
    reset() {
      this.value = this.lowerBound;
    }
    get velocity() {
      if (!this.isAnimating) {
        return 0.0;
      }
      return dart.nullCheck(this[_simulation]).dx(dart.nullCheck(this.lastElapsedDuration).inMicroseconds[$toDouble]() / 1000000);
    }
    [_internalSetValue](newValue) {
      this[_value] = math.clampDouble(newValue, this.lowerBound, this.upperBound);
      if (this[_value] === this.lowerBound) {
        this[_status] = animation.AnimationStatus.dismissed;
      } else if (this[_value] === this.upperBound) {
        this[_status] = animation.AnimationStatus.completed;
      } else {
        this[_status] = this[_direction] === animation_controller._AnimationDirection.forward ? animation.AnimationStatus.forward : animation.AnimationStatus.reverse;
      }
    }
    get lastElapsedDuration() {
      return this[_lastElapsedDuration];
    }
    get isAnimating() {
      return this[_ticker] != null && dart.nullCheck(this[_ticker]).isActive;
    }
    get status() {
      return this[_status];
    }
    get [_status]() {
      let t4;
      t4 = this[__AnimationController__status];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_status")) : t4;
    }
    set [_status](library$32package$58flutter$47src$47animation$47animation_controller$46dart$58$58_status$35param) {
      this[__AnimationController__status] = library$32package$58flutter$47src$47animation$47animation_controller$46dart$58$58_status$35param;
    }
    forward(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (!dart.fn(() => {
        if (this.duration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.forward() called with no default duration.\n" + "The \"duration\" property should be set, either in the constructor or later, before " + "calling the forward() function."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 448, 12, "() {\n      if (duration == null) {\n        throw FlutterError(\n          'AnimationController.forward() called with no default duration.\\n'\n          'The \"duration\" property should be set, either in the constructor or later, before '\n          'calling the forward() function.',\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.forward() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", I[1], 459, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.forward;
      if (from != null) {
        this.value = from;
      }
      return this[_animateToInternal](this.upperBound);
    }
    reverse(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (!dart.fn(() => {
        if (this.duration == null && this.reverseDuration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.reverse() called with no default duration or reverseDuration.\n" + "The \"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before " + "calling the reverse() function."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 482, 12, "() {\n      if (duration == null && reverseDuration == null) {\n        throw FlutterError(\n          'AnimationController.reverse() called with no default duration or reverseDuration.\\n'\n          'The \"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before '\n          'calling the reverse() function.',\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.reverse() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", I[1], 493, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.reverse;
      if (from != null) {
        this.value = from;
      }
      return this[_animateToInternal](this.lowerBound);
    }
    animateTo(target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[6] || CT.C6;
      if (!dart.fn(() => {
        if (this.duration == null && duration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.animateTo() called with no explicit duration and no default duration.\n" + "Either the \"duration\" argument to the animateTo() method should be provided, or the " + "\"duration\" property should be set, either in the constructor or later, before " + "calling the animateTo() function."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 521, 12, "() {\n      if (this.duration == null && duration == null) {\n        throw FlutterError(\n          'AnimationController.animateTo() called with no explicit duration and no default duration.\\n'\n          'Either the \"duration\" argument to the animateTo() method should be provided, or the '\n          '\"duration\" property should be set, either in the constructor or later, before '\n          'calling the animateTo() function.',\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateTo() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", I[1], 533, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.forward;
      return this[_animateToInternal](target, {duration: duration, curve: curve});
    }
    animateBack(target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[6] || CT.C6;
      if (!dart.fn(() => {
        if (this.duration == null && this.reverseDuration == null && duration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.animateBack() called with no explicit duration and no default duration or reverseDuration.\n" + "Either the \"duration\" argument to the animateBack() method should be provided, or the " + "\"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before " + "calling the animateBack() function."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 554, 12, "() {\n      if (this.duration == null && reverseDuration == null && duration == null) {\n        throw FlutterError(\n          'AnimationController.animateBack() called with no explicit duration and no default duration or reverseDuration.\\n'\n          'Either the \"duration\" argument to the animateBack() method should be provided, or the '\n          '\"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before '\n          'calling the animateBack() function.',\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateBack() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", I[1], 566, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.reverse;
      return this[_animateToInternal](target, {duration: duration, curve: curve});
    }
    [_animateToInternal](target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[6] || CT.C6;
      let scale = 1.0;
      if (binding.SemanticsBinding.instance.disableAnimations) {
        switch (this.animationBehavior) {
          case C[4] || CT.C4:
            {
              scale = 0.05;
              break;
            }
          case C[5] || CT.C5:
            {
              break;
            }
        }
      }
      let simulationDuration = duration;
      if (simulationDuration == null) {
        if (!!(this.duration == null && this[_direction] === animation_controller._AnimationDirection.forward)) dart.assertFailed(null, I[1], 592, 14, "!(this.duration == null && _direction == _AnimationDirection.forward)");
        if (!!(this.duration == null && this[_direction] === animation_controller._AnimationDirection.reverse && this.reverseDuration == null)) dart.assertFailed(null, I[1], 593, 14, "!(this.duration == null && _direction == _AnimationDirection.reverse && reverseDuration == null)");
        let range = this.upperBound - this.lowerBound;
        let remainingFraction = range[$isFinite] ? (target - this[_value])[$abs]() / range : 1.0;
        let directionDuration = this[_direction] === animation_controller._AnimationDirection.reverse && this.reverseDuration != null ? dart.nullCheck(this.reverseDuration) : dart.nullCheck(this.duration);
        simulationDuration = directionDuration['*'](remainingFraction);
      } else if (target === this.value) {
        simulationDuration = core.Duration.zero;
      }
      this.stop();
      if (dart.equals(simulationDuration, core.Duration.zero)) {
        if (this.value !== target) {
          this[_value] = math.clampDouble(target, this.lowerBound, this.upperBound);
          this.notifyListeners();
        }
        this[_status] = this[_direction] === animation_controller._AnimationDirection.forward ? animation.AnimationStatus.completed : animation.AnimationStatus.dismissed;
        this[_checkStatusChanged]();
        return new ticker.TickerFuture.complete();
      }
      if (!simulationDuration['>'](core.Duration.zero)) dart.assertFailed(null, I[1], 617, 12, "simulationDuration > Duration.zero");
      if (!!this.isAnimating) dart.assertFailed(null, I[1], 618, 12, "!isAnimating");
      return this[_startSimulation](new animation_controller._InterpolationSimulation.new(this[_value], target, simulationDuration, curve, scale));
    }
    repeat(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let period = opts && 'period' in opts ? opts.period : null;
      min == null ? min = this.lowerBound : null;
      max == null ? max = this.upperBound : null;
      period == null ? period = this.duration : null;
      if (!dart.fn(() => {
        if (period == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.repeat() called without an explicit period and with no default Duration.\n" + "Either the \"period\" argument to the repeat() method should be provided, or the " + "\"duration\" property should be set, either in the constructor or later, before " + "calling the repeat() function."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 647, 12, "() {\n      if (period == null) {\n        throw FlutterError(\n          'AnimationController.repeat() called without an explicit period and with no default Duration.\\n'\n          'Either the \"period\" argument to the repeat() method should be provided, or the '\n          '\"duration\" property should be set, either in the constructor or later, before '\n          'calling the repeat() function.',\n        );\n      }\n      return true;\n    }()");
      if (!(dart.notNull(max) >= dart.notNull(min))) dart.assertFailed(null, I[1], 658, 12, "max >= min");
      if (!(dart.notNull(max) <= this.upperBound && dart.notNull(min) >= this.lowerBound)) dart.assertFailed(null, I[1], 659, 12, "max <= upperBound && min >= lowerBound");
      if (!(reverse !== null)) dart.assertFailed(null, I[1], 660, 12, "reverse != null");
      this.stop();
      return this[_startSimulation](new animation_controller._RepeatingSimulation.new(this[_value], min, max, reverse, dart.nullCheck(period), dart.bind(this, _directionSetter)));
    }
    [_directionSetter](direction) {
      this[_direction] = direction;
      this[_status] = this[_direction] === animation_controller._AnimationDirection.forward ? animation.AnimationStatus.forward : animation.AnimationStatus.reverse;
      this[_checkStatusChanged]();
    }
    fling(opts) {
      let t4, t4$;
      let velocity = opts && 'velocity' in opts ? opts.velocity : 1;
      let springDescription = opts && 'springDescription' in opts ? opts.springDescription : null;
      let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : null;
      springDescription == null ? springDescription = animation_controller._kFlingSpringDescription : null;
      this[_direction] = velocity < 0.0 ? animation_controller._AnimationDirection.reverse : animation_controller._AnimationDirection.forward;
      let target = velocity < 0.0 ? this.lowerBound - animation_controller._kFlingTolerance.distance : this.upperBound + animation_controller._kFlingTolerance.distance;
      let scale = 1.0;
      let behavior = (t4 = animationBehavior, t4 == null ? this.animationBehavior : t4);
      if (binding.SemanticsBinding.instance.disableAnimations) {
        switch (behavior) {
          case C[4] || CT.C4:
            {
              scale = 200.0;
              break;
            }
          case C[5] || CT.C5:
            {
              break;
            }
        }
      }
      let simulation = (t4$ = new spring_simulation.SpringSimulation.new(springDescription, this.value, target, velocity * scale), (() => {
        t4$.tolerance = animation_controller._kFlingTolerance;
        return t4$;
      })());
      if (!(simulation.type !== spring_simulation.SpringType.underDamped)) dart.assertFailed("The resulting spring simulation is of type SpringType.underDamped.\n" + "This can lead to unexpected look of the animation, please adjust the springDescription parameter", I[1], 713, 7, "simulation.type != SpringType.underDamped");
      this.stop();
      return this[_startSimulation](simulation);
    }
    animateWith(simulation) {
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateWith() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", I[1], 737, 7, "_ticker != null");
      this.stop();
      this[_direction] = animation_controller._AnimationDirection.forward;
      return this[_startSimulation](simulation);
    }
    [_startSimulation](simulation) {
      if (!(simulation !== null)) dart.assertFailed(null, I[1], 747, 12, "simulation != null");
      if (!!this.isAnimating) dart.assertFailed(null, I[1], 748, 12, "!isAnimating");
      this[_simulation] = simulation;
      this[_lastElapsedDuration] = core.Duration.zero;
      this[_value] = math.clampDouble(simulation.x(0.0), this.lowerBound, this.upperBound);
      let result = dart.nullCheck(this[_ticker]).start();
      this[_status] = this[_direction] === animation_controller._AnimationDirection.forward ? animation.AnimationStatus.forward : animation.AnimationStatus.reverse;
      this[_checkStatusChanged]();
      return result;
    }
    stop(opts) {
      let canceled = opts && 'canceled' in opts ? opts.canceled : true;
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.stop() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", I[1], 779, 7, "_ticker != null");
      this[_simulation] = null;
      this[_lastElapsedDuration] = null;
      dart.nullCheck(this[_ticker]).stop({canceled: canceled});
    }
    dispose() {
      if (!dart.fn(() => {
        if (this[_ticker] == null) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("AnimationController.dispose() called more than once."), new assertions.ErrorDescription.new("A given " + dart.str(this[$runtimeType]) + " cannot be disposed more than once.\n"), new (T.DiagnosticsPropertyOfAnimationController()).new("The following " + dart.str(this[$runtimeType]) + " object was disposed multiple times", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 796, 12, "() {\n      if (_ticker == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('AnimationController.dispose() called more than once.'),\n          ErrorDescription('A given $runtimeType cannot be disposed more than once.\\n'),\n          DiagnosticsProperty<AnimationController>(\n            'The following $runtimeType object was disposed multiple times',\n            this,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
      dart.nullCheck(this[_ticker]).dispose();
      this[_ticker] = null;
      this.clearStatusListeners();
      this.clearListeners();
      super.dispose();
    }
    [_checkStatusChanged]() {
      let newStatus = this.status;
      if (this[_lastReportedStatus] !== newStatus) {
        this[_lastReportedStatus] = newStatus;
        this.notifyStatusListeners(newStatus);
      }
    }
    [_tick](elapsed) {
      this[_lastElapsedDuration] = elapsed;
      let elapsedInSeconds = elapsed.inMicroseconds[$toDouble]() / 1000000;
      if (!(elapsedInSeconds >= 0.0)) dart.assertFailed(null, I[1], 829, 12, "elapsedInSeconds >= 0.0");
      this[_value] = math.clampDouble(dart.nullCheck(this[_simulation]).x(elapsedInSeconds), this.lowerBound, this.upperBound);
      if (dart.nullCheck(this[_simulation]).isDone(elapsedInSeconds)) {
        this[_status] = this[_direction] === animation_controller._AnimationDirection.forward ? animation.AnimationStatus.completed : animation.AnimationStatus.dismissed;
        this.stop({canceled: false});
      }
      this.notifyListeners();
      this[_checkStatusChanged]();
    }
    toStringDetails() {
      let paused = this.isAnimating ? "" : "; paused";
      let ticker = this[_ticker] == null ? "; DISPOSED" : dart.nullCheck(this[_ticker]).muted ? "; silenced" : "";
      let label = this.debugLabel == null ? "" : "; for " + dart.str(this.debugLabel);
      let more = super.toStringDetails() + " " + this.value[$toStringAsFixed](3);
      return more + paused + ticker + label;
    }
  };
  (animation_controller.AnimationController.new = function(opts) {
    let t4;
    let value = opts && 'value' in opts ? opts.value : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let lowerBound = opts && 'lowerBound' in opts ? opts.lowerBound : 0;
    let upperBound = opts && 'upperBound' in opts ? opts.upperBound : 1;
    let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C[4] || CT.C4;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    this[_ticker] = null;
    this[_simulation] = null;
    this[__AnimationController__value] = null;
    this[_lastElapsedDuration] = null;
    this[__AnimationController__status] = null;
    this[_lastReportedStatus] = animation.AnimationStatus.dismissed;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[debugLabel$] = debugLabel;
    this[lowerBound$] = lowerBound;
    this[upperBound$] = upperBound;
    this[animationBehavior$] = animationBehavior;
    if (!(lowerBound !== null)) dart.assertFailed(null, I[1], 245, 15, "lowerBound != null");
    if (!(upperBound !== null)) dart.assertFailed(null, I[1], 246, 15, "upperBound != null");
    if (!(upperBound >= lowerBound)) dart.assertFailed(null, I[1], 247, 15, "upperBound >= lowerBound");
    if (!(vsync !== null)) dart.assertFailed(null, I[1], 248, 15, "vsync != null");
    this[_direction] = animation_controller._AnimationDirection.forward;
    animation_controller.AnimationController.__proto__.new.call(this);
    this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
    this[_internalSetValue]((t4 = value, t4 == null ? this.lowerBound : t4));
  }).prototype = animation_controller.AnimationController.prototype;
  (animation_controller.AnimationController.unbounded = function(opts) {
    let value = opts && 'value' in opts ? opts.value : 0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C[5] || CT.C5;
    this[_ticker] = null;
    this[_simulation] = null;
    this[__AnimationController__value] = null;
    this[_lastElapsedDuration] = null;
    this[__AnimationController__status] = null;
    this[_lastReportedStatus] = animation.AnimationStatus.dismissed;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[debugLabel$] = debugLabel;
    this[animationBehavior$] = animationBehavior;
    if (!(value !== null)) dart.assertFailed(null, I[1], 278, 15, "value != null");
    if (!(vsync !== null)) dart.assertFailed(null, I[1], 279, 15, "vsync != null");
    this[lowerBound$] = -1 / 0;
    this[upperBound$] = 1 / 0;
    this[_direction] = animation_controller._AnimationDirection.forward;
    animation_controller.AnimationController.__proto__.new.call(this);
    this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
    this[_internalSetValue](value);
  }).prototype = animation_controller.AnimationController.prototype;
  dart.addTypeTests(animation_controller.AnimationController);
  dart.addTypeCaches(animation_controller.AnimationController);
  dart.setMethodSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getMethods(animation_controller.AnimationController.__proto__),
    resync: dart.fnType(dart.void, [ticker.TickerProvider]),
    reset: dart.fnType(dart.void, []),
    [_internalSetValue]: dart.fnType(dart.void, [core.double]),
    forward: dart.fnType(ticker.TickerFuture, [], {from: dart.nullable(core.double)}, {}),
    reverse: dart.fnType(ticker.TickerFuture, [], {from: dart.nullable(core.double)}, {}),
    animateTo: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: dart.nullable(core.Duration)}, {}),
    animateBack: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: dart.nullable(core.Duration)}, {}),
    [_animateToInternal]: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: dart.nullable(core.Duration)}, {}),
    repeat: dart.fnType(ticker.TickerFuture, [], {max: dart.nullable(core.double), min: dart.nullable(core.double), period: dart.nullable(core.Duration), reverse: core.bool}, {}),
    [_directionSetter]: dart.fnType(dart.void, [animation_controller._AnimationDirection]),
    fling: dart.fnType(ticker.TickerFuture, [], {animationBehavior: dart.nullable(animation_controller.AnimationBehavior), springDescription: dart.nullable(spring_simulation.SpringDescription), velocity: core.double}, {}),
    animateWith: dart.fnType(ticker.TickerFuture, [simulation.Simulation]),
    [_startSimulation]: dart.fnType(ticker.TickerFuture, [simulation.Simulation]),
    stop: dart.fnType(dart.void, [], {canceled: core.bool}, {}),
    [_checkStatusChanged]: dart.fnType(dart.void, []),
    [_tick]: dart.fnType(dart.void, [core.Duration])
  }));
  dart.setGetterSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getGetters(animation_controller.AnimationController.__proto__),
    view: animation.Animation$(core.double),
    value: core.double,
    [_value]: core.double,
    velocity: core.double,
    lastElapsedDuration: dart.nullable(core.Duration),
    isAnimating: core.bool,
    status: animation.AnimationStatus,
    [_status]: animation.AnimationStatus
  }));
  dart.setSetterSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getSetters(animation_controller.AnimationController.__proto__),
    [_value]: core.double,
    value: core.double,
    [_status]: animation.AnimationStatus
  }));
  dart.setLibraryUri(animation_controller.AnimationController, I[0]);
  dart.setFieldSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getFields(animation_controller.AnimationController.__proto__),
    lowerBound: dart.finalFieldType(core.double),
    upperBound: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(dart.nullable(core.String)),
    animationBehavior: dart.finalFieldType(animation_controller.AnimationBehavior),
    duration: dart.fieldType(dart.nullable(core.Duration)),
    reverseDuration: dart.fieldType(dart.nullable(core.Duration)),
    [_ticker]: dart.fieldType(dart.nullable(ticker.Ticker)),
    [_simulation]: dart.fieldType(dart.nullable(simulation.Simulation)),
    [__AnimationController__value]: dart.fieldType(dart.nullable(core.double)),
    [_lastElapsedDuration]: dart.fieldType(dart.nullable(core.Duration)),
    [_direction]: dart.fieldType(animation_controller._AnimationDirection),
    [__AnimationController__status]: dart.fieldType(dart.nullable(animation.AnimationStatus)),
    [_lastReportedStatus]: dart.fieldType(animation.AnimationStatus)
  }));
  var _begin$ = dart.privateName(animation_controller, "_begin");
  var _end$ = dart.privateName(animation_controller, "_end");
  var _curve$ = dart.privateName(animation_controller, "_curve");
  var _durationInSeconds = dart.privateName(animation_controller, "_durationInSeconds");
  animation_controller._InterpolationSimulation = class _InterpolationSimulation extends simulation.Simulation {
    static ['_#new#tearOff'](_begin, _end, duration, _curve, scale) {
      return new animation_controller._InterpolationSimulation.new(_begin, _end, duration, _curve, scale);
    }
    x(timeInSeconds) {
      let t = math.clampDouble(timeInSeconds / this[_durationInSeconds], 0.0, 1.0);
      if (t === 0.0) {
        return this[_begin$];
      } else if (t === 1.0) {
        return this[_end$];
      } else {
        return this[_begin$] + (this[_end$] - this[_begin$]) * this[_curve$].transform(t);
      }
    }
    dx(timeInSeconds) {
      let epsilon = this.tolerance.time;
      return (this.x(timeInSeconds + epsilon) - this.x(timeInSeconds - epsilon)) / (2 * epsilon);
    }
    isDone(timeInSeconds) {
      return timeInSeconds > this[_durationInSeconds];
    }
  };
  (animation_controller._InterpolationSimulation.new = function(_begin, _end, duration, _curve, scale) {
    this[_begin$] = _begin;
    this[_end$] = _end;
    this[_curve$] = _curve;
    if (!(_begin !== null)) dart.assertFailed(null, I[1], 853, 14, "_begin != null");
    if (!(_end !== null)) dart.assertFailed(null, I[1], 854, 14, "_end != null");
    if (!(duration !== null && duration.inMicroseconds > 0)) dart.assertFailed(null, I[1], 855, 14, "duration != null && duration.inMicroseconds > 0");
    this[_durationInSeconds] = duration.inMicroseconds * scale / 1000000;
    animation_controller._InterpolationSimulation.__proto__.new.call(this);
    ;
  }).prototype = animation_controller._InterpolationSimulation.prototype;
  dart.addTypeTests(animation_controller._InterpolationSimulation);
  dart.addTypeCaches(animation_controller._InterpolationSimulation);
  dart.setMethodSignature(animation_controller._InterpolationSimulation, () => ({
    __proto__: dart.getMethods(animation_controller._InterpolationSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(animation_controller._InterpolationSimulation, I[0]);
  dart.setFieldSignature(animation_controller._InterpolationSimulation, () => ({
    __proto__: dart.getFields(animation_controller._InterpolationSimulation.__proto__),
    [_durationInSeconds]: dart.finalFieldType(core.double),
    [_begin$]: dart.finalFieldType(core.double),
    [_end$]: dart.finalFieldType(core.double),
    [_curve$]: dart.finalFieldType(curves.Curve)
  }));
  var _periodInSeconds = dart.privateName(animation_controller, "_periodInSeconds");
  var _initialT = dart.privateName(animation_controller, "_initialT");
  animation_controller._RepeatingSimulation = class _RepeatingSimulation extends simulation.Simulation {
    static ['_#new#tearOff'](initialValue, min, max, reverse, period, directionSetter) {
      return new animation_controller._RepeatingSimulation.new(initialValue, min, max, reverse, period, directionSetter);
    }
    x(timeInSeconds) {
      let t4, t4$;
      if (!(timeInSeconds >= 0.0)) dart.assertFailed(null, I[1], 905, 12, "timeInSeconds >= 0.0");
      let totalTimeInSeconds = timeInSeconds + this[_initialT];
      let t = (totalTimeInSeconds / this[_periodInSeconds])[$modulo](1.0);
      let isPlayingReverse = (totalTimeInSeconds / this[_periodInSeconds])[$truncate]()[$isOdd];
      if (this.reverse && isPlayingReverse) {
        t4 = animation_controller._AnimationDirection.reverse;
        this.directionSetter(t4);
        return dart.nullCheck(ui.lerpDouble(this.max, this.min, t));
      } else {
        t4$ = animation_controller._AnimationDirection.forward;
        this.directionSetter(t4$);
        return dart.nullCheck(ui.lerpDouble(this.min, this.max, t));
      }
    }
    dx(timeInSeconds) {
      return (this.max - this.min) / this[_periodInSeconds];
    }
    isDone(timeInSeconds) {
      return false;
    }
  };
  (animation_controller._RepeatingSimulation.new = function(initialValue, min, max, reverse, period, directionSetter) {
    this.min = min;
    this.max = max;
    this.reverse = reverse;
    this.directionSetter = directionSetter;
    this[_periodInSeconds] = period.inMicroseconds / 1000000;
    this[_initialT] = max === min ? 0.0 : initialValue / (max - min) * (period.inMicroseconds / 1000000);
    animation_controller._RepeatingSimulation.__proto__.new.call(this);
    if (!(this[_periodInSeconds] > 0.0)) dart.assertFailed(null, I[1], 891, 12, "_periodInSeconds > 0.0");
    if (!(this[_initialT] >= 0.0)) dart.assertFailed(null, I[1], 892, 12, "_initialT >= 0.0");
  }).prototype = animation_controller._RepeatingSimulation.prototype;
  dart.addTypeTests(animation_controller._RepeatingSimulation);
  dart.addTypeCaches(animation_controller._RepeatingSimulation);
  dart.setMethodSignature(animation_controller._RepeatingSimulation, () => ({
    __proto__: dart.getMethods(animation_controller._RepeatingSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(animation_controller._RepeatingSimulation, I[0]);
  dart.setFieldSignature(animation_controller._RepeatingSimulation, () => ({
    __proto__: dart.getFields(animation_controller._RepeatingSimulation.__proto__),
    min: dart.finalFieldType(core.double),
    max: dart.finalFieldType(core.double),
    reverse: dart.finalFieldType(core.bool),
    directionSetter: dart.finalFieldType(dart.fnType(dart.void, [animation_controller._AnimationDirection])),
    [_periodInSeconds]: dart.finalFieldType(core.double),
    [_initialT]: dart.finalFieldType(core.double)
  }));
  var Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  var Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  var Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  dart.defineLazy(animation_controller, {
    /*animation_controller._kFlingSpringDescription*/get _kFlingSpringDescription() {
      return new spring_simulation.SpringDescription.withDampingRatio({mass: 1.0, stiffness: 500.0});
    },
    /*animation_controller._kFlingTolerance*/get _kFlingTolerance() {
      return C[7] || CT.C7;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/animation/animation_controller.dart", {
    "package:flutter/src/animation/animation_controller.dart": animation_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animation_controller.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/animation/animation_controller.dart.lib.js"}');
  // Exports:
  return {
    src__animation__animation_controller: animation_controller
  };
}));

//# sourceMappingURL=animation_controller.dart.lib.js.map
