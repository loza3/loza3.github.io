define(['dart_sdk', 'packages/flutter/src/foundation/observer_list.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/animation/curves.dart'], (function load__packages__flutter__src__animation__listener_helpers_dart(dart_sdk, packages__flutter__src__foundation__observer_list$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__animation__curves$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const observer_list = packages__flutter__src__foundation__observer_list$46dart.src__foundation__observer_list;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  var listener_helpers = Object.create(dart.library);
  var animations = Object.create(dart.library);
  var tween = Object.create(dart.library);
  var animation$ = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $round = dartx.round;
  var $toDouble = dartx.toDouble;
  var $floor = dartx.floor;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ObserverListOfVoidTovoid: () => (T$.ObserverListOfVoidTovoid = dart.constFn(observer_list.ObserverList$(T$.VoidTovoid())))(),
    DiagnosticsPropertyOfAnimationLocalListenersMixin: () => (T$.DiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(diagnostics.DiagnosticsProperty$(listener_helpers.AnimationLocalListenersMixin)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T$.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T$.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T$.ListOfDiagnosticsNode(), [])))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    AnimationStatusTovoid: () => (T$.AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation$.AnimationStatus])))(),
    ObserverListOfAnimationStatusTovoid: () => (T$.ObserverListOfAnimationStatusTovoid = dart.constFn(observer_list.ObserverList$(T$.AnimationStatusTovoid())))(),
    DiagnosticsPropertyOfAnimationLocalStatusListenersMixin: () => (T$.DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(diagnostics.DiagnosticsProperty$(listener_helpers.AnimationLocalStatusListenersMixin)))(),
    AnimationOfdouble: () => (T$.AnimationOfdouble = dart.constFn(animation$.Animation$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_Enum__name]: "forward",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_Enum__name]: "reverse",
        [_Enum_index]: 2
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_Enum__name]: "completed",
        [_Enum_index]: 3
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_Enum__name]: "dismissed",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: animations._TrainHoppingMode.prototype,
        [_Enum__name]: "minimize",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: animations._TrainHoppingMode.prototype,
        [_Enum__name]: "maximize",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.constList([C[5] || CT.C5, C[6] || CT.C6], animations._TrainHoppingMode);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: animations._AlwaysCompleteAnimation.prototype
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: animations._AlwaysDismissedAnimation.prototype
      });
    },
    get C9() {
      return C[9] = dart.constList([C[3] || CT.C3, C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], animation$.AnimationStatus);
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/animation/listener_helpers.dart",
    "package:flutter/src/animation/listener_helpers.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/animation/animation.dart",
    "package:flutter/src/animation/animation.dart",
    "package:flutter/src/animation/animations.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/animation/animations.dart",
    "package:flutter/src/animation/tween.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/animation/tween.dart"
  ];
  var _listenerCounter = dart.privateName(listener_helpers, "_listenerCounter");
  listener_helpers.AnimationLazyListenerMixin = class AnimationLazyListenerMixin extends core.Object {};
  listener_helpers.AnimationLazyListenerMixin[dart.mixinOn] = Object => class AnimationLazyListenerMixin extends Object {
    didRegisterListener() {
      if (!(this[_listenerCounter] >= 0)) dart.assertFailed(null, I[0], 32, 12, "_listenerCounter >= 0");
      if (this[_listenerCounter] === 0) {
        this.didStartListening();
      }
      this[_listenerCounter] = this[_listenerCounter] + 1;
    }
    didUnregisterListener() {
      if (!(this[_listenerCounter] >= 1)) dart.assertFailed(null, I[0], 47, 12, "_listenerCounter >= 1");
      this[_listenerCounter] = this[_listenerCounter] - 1;
      if (this[_listenerCounter] === 0) {
        this.didStopListening();
      }
    }
    get isListening() {
      return this[_listenerCounter] > 0;
    }
  };
  (listener_helpers.AnimationLazyListenerMixin[dart.mixinNew] = function() {
    this[_listenerCounter] = 0;
  }).prototype = listener_helpers.AnimationLazyListenerMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLazyListenerMixin);
  dart.addTypeCaches(listener_helpers.AnimationLazyListenerMixin);
  listener_helpers.AnimationLazyListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLazyListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getGetters(listener_helpers.AnimationLazyListenerMixin.__proto__),
    isListening: core.bool
  }));
  dart.setLibraryUri(listener_helpers.AnimationLazyListenerMixin, I[1]);
  dart.setFieldSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLazyListenerMixin.__proto__),
    [_listenerCounter]: dart.fieldType(core.int)
  }));
  listener_helpers.AnimationEagerListenerMixin = class AnimationEagerListenerMixin extends core.Object {};
  listener_helpers.AnimationEagerListenerMixin[dart.mixinOn] = Object => class AnimationEagerListenerMixin extends Object {
    didRegisterListener() {
    }
    didUnregisterListener() {
    }
    dispose() {
    }
  };
  (listener_helpers.AnimationEagerListenerMixin[dart.mixinNew] = function() {
  }).prototype = listener_helpers.AnimationEagerListenerMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationEagerListenerMixin);
  dart.addTypeCaches(listener_helpers.AnimationEagerListenerMixin);
  listener_helpers.AnimationEagerListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationEagerListenerMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationEagerListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(listener_helpers.AnimationEagerListenerMixin, I[1]);
  var _listeners = dart.privateName(listener_helpers, "_listeners");
  listener_helpers.AnimationLocalListenersMixin = class AnimationLocalListenersMixin extends core.Object {};
  listener_helpers.AnimationLocalListenersMixin[dart.mixinOn] = Object => class AnimationLocalListenersMixin extends Object {
    addListener(listener) {
      this.didRegisterListener();
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      let removed = this[_listeners].remove(listener);
      if (removed) {
        this.didUnregisterListener();
      }
    }
    clearListeners() {
      this[_listeners].clear();
    }
    notifyListeners() {
      let localListeners = this[_listeners].toList({growable: false});
      for (let listener of localListeners) {
        let collector = null;
        if (!dart.fn(() => {
          collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfAnimationLocalListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying listeners was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]), T$.VoidToListOfDiagnosticsNode());
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 149, 14, "() {\n        collector = () => <DiagnosticsNode>[\n          DiagnosticsProperty<AnimationLocalListenersMixin>(\n            'The $runtimeType notifying listeners was',\n            this,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ];\n        return true;\n      }()");
        try {
          if (this[_listeners].contains(listener)) {
            listener();
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new assertions.ErrorDescription.new("while notifying listeners for " + dart.str(this[$runtimeType])), informationCollector: collector}));
          } else
            throw e;
        }
      }
    }
  };
  (listener_helpers.AnimationLocalListenersMixin[dart.mixinNew] = function() {
    this[_listeners] = new (T$.ObserverListOfVoidTovoid()).new();
  }).prototype = listener_helpers.AnimationLocalListenersMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLocalListenersMixin);
  dart.addTypeCaches(listener_helpers.AnimationLocalListenersMixin);
  listener_helpers.AnimationLocalListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLocalListenersMixin.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    clearListeners: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(listener_helpers.AnimationLocalListenersMixin, I[1]);
  dart.setFieldSignature(listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLocalListenersMixin.__proto__),
    [_listeners]: dart.finalFieldType(observer_list.ObserverList$(dart.fnType(dart.void, [])))
  }));
  var _statusListeners = dart.privateName(listener_helpers, "_statusListeners");
  listener_helpers.AnimationLocalStatusListenersMixin = class AnimationLocalStatusListenersMixin extends core.Object {};
  listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinOn] = Object => class AnimationLocalStatusListenersMixin extends Object {
    addStatusListener(listener) {
      this.didRegisterListener();
      this[_statusListeners].add(listener);
    }
    removeStatusListener(listener) {
      let removed = this[_statusListeners].remove(listener);
      if (removed) {
        this.didUnregisterListener();
      }
    }
    clearStatusListeners() {
      this[_statusListeners].clear();
    }
    notifyStatusListeners(status) {
      let localListeners = this[_statusListeners].toList({growable: false});
      for (let listener of localListeners) {
        try {
          if (this[_statusListeners].contains(listener)) {
            listener(status);
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.fn(() => {
              collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying status listeners was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]), T$.VoidToListOfDiagnosticsNode());
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 244, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<AnimationLocalStatusListenersMixin>(\n              'The $runtimeType notifying status listeners was',\n              this,\n              style: DiagnosticsTreeStyle.errorProperty,\n            ),\n          ];\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new assertions.ErrorDescription.new("while notifying status listeners for " + dart.str(this[$runtimeType])), informationCollector: collector}));
          } else
            throw e;
        }
      }
    }
  };
  (listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew] = function() {
    this[_statusListeners] = new (T$.ObserverListOfAnimationStatusTovoid()).new();
  }).prototype = listener_helpers.AnimationLocalStatusListenersMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLocalStatusListenersMixin);
  dart.addTypeCaches(listener_helpers.AnimationLocalStatusListenersMixin);
  listener_helpers.AnimationLocalStatusListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    clearStatusListeners: dart.fnType(dart.void, []),
    notifyStatusListeners: dart.fnType(dart.void, [animation$.AnimationStatus])
  }));
  dart.setLibraryUri(listener_helpers.AnimationLocalStatusListenersMixin, I[1]);
  dart.setFieldSignature(listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    [_statusListeners]: dart.finalFieldType(observer_list.ObserverList$(dart.fnType(dart.void, [animation$.AnimationStatus])))
  }));
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  const _is_Animation_default = Symbol('_is_Animation_default');
  animation$.Animation$ = dart.generic(T => {
    class Animation extends change_notifier.Listenable {
      get isDismissed() {
        return this.status === animation$.AnimationStatus.dismissed;
      }
      get isCompleted() {
        return this.status === animation$.AnimationStatus.completed;
      }
      drive(U, child) {
        if (!T$.AnimationOfdouble().is(this)) dart.assertFailed(null, I[2], 173, 12, "this is Animation<double>");
        return child.animate(T$.AnimationOfdouble().as(this));
      }
      toString() {
        return diagnostics.describeIdentity(this) + "(" + this.toStringDetails() + ")";
      }
      toStringDetails() {
        if (!(this.status !== null)) dart.assertFailed(null, I[2], 197, 12, "status != null");
        switch (this.status) {
          case C[0] || CT.C0:
            {
              return "▶";
            }
          case C[1] || CT.C1:
            {
              return "◀";
            }
          case C[2] || CT.C2:
            {
              return "⏭";
            }
          case C[3] || CT.C3:
            {
              return "⏮";
            }
        }
      }
    }
    (Animation.new = function() {
      Animation.__proto__.new.call(this);
      ;
    }).prototype = Animation.prototype;
    dart.addTypeTests(Animation);
    Animation.prototype[_is_Animation_default] = true;
    dart.addTypeCaches(Animation);
    Animation[dart.implements] = () => [change_notifier.ValueListenable$(T)];
    dart.setMethodSignature(Animation, () => ({
      __proto__: dart.getMethods(Animation.__proto__),
      drive: dart.gFnType(U => [animation$.Animation$(U), [tween.Animatable$(U)]], U => [dart.nullable(core.Object)]),
      toStringDetails: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Animation, () => ({
      __proto__: dart.getGetters(Animation.__proto__),
      isDismissed: core.bool,
      isCompleted: core.bool
    }));
    dart.setLibraryUri(Animation, I[3]);
    dart.defineExtensionMethods(Animation, ['toString']);
    return Animation;
  });
  animation$.Animation = animation$.Animation$();
  dart.addTypeTests(animation$.Animation, _is_Animation_default);
  animations._AlwaysCompleteAnimation = class _AlwaysCompleteAnimation extends animation$.Animation$(core.double) {
    static ['_#new#tearOff']() {
      return new animations._AlwaysCompleteAnimation.new();
    }
    addListener(listener) {
    }
    removeListener(listener) {
    }
    addStatusListener(listener) {
    }
    removeStatusListener(listener) {
    }
    get status() {
      return animation$.AnimationStatus.completed;
    }
    get value() {
      return 1.0;
    }
    toString() {
      return "kAlwaysCompleteAnimation";
    }
  };
  (animations._AlwaysCompleteAnimation.new = function() {
    animations._AlwaysCompleteAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations._AlwaysCompleteAnimation.prototype;
  dart.addTypeTests(animations._AlwaysCompleteAnimation);
  dart.addTypeCaches(animations._AlwaysCompleteAnimation);
  dart.setMethodSignature(animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getMethods(animations._AlwaysCompleteAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
  }));
  dart.setGetterSignature(animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getGetters(animations._AlwaysCompleteAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations._AlwaysCompleteAnimation, I[4]);
  dart.defineExtensionMethods(animations._AlwaysCompleteAnimation, ['toString']);
  animations._AlwaysDismissedAnimation = class _AlwaysDismissedAnimation extends animation$.Animation$(core.double) {
    static ['_#new#tearOff']() {
      return new animations._AlwaysDismissedAnimation.new();
    }
    addListener(listener) {
    }
    removeListener(listener) {
    }
    addStatusListener(listener) {
    }
    removeStatusListener(listener) {
    }
    get status() {
      return animation$.AnimationStatus.dismissed;
    }
    get value() {
      return 0.0;
    }
    toString() {
      return "kAlwaysDismissedAnimation";
    }
  };
  (animations._AlwaysDismissedAnimation.new = function() {
    animations._AlwaysDismissedAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations._AlwaysDismissedAnimation.prototype;
  dart.addTypeTests(animations._AlwaysDismissedAnimation);
  dart.addTypeCaches(animations._AlwaysDismissedAnimation);
  dart.setMethodSignature(animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getMethods(animations._AlwaysDismissedAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
  }));
  dart.setGetterSignature(animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getGetters(animations._AlwaysDismissedAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations._AlwaysDismissedAnimation, I[4]);
  dart.defineExtensionMethods(animations._AlwaysDismissedAnimation, ['toString']);
  var value$ = dart.privateName(animations, "AlwaysStoppedAnimation.value");
  const _is_AlwaysStoppedAnimation_default = Symbol('_is_AlwaysStoppedAnimation_default');
  animations.AlwaysStoppedAnimation$ = dart.generic(T => {
    class AlwaysStoppedAnimation extends animation$.Animation$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      static ['_#new#tearOff'](T, value) {
        return new (animations.AlwaysStoppedAnimation$(T)).new(value);
      }
      addListener(listener) {
      }
      removeListener(listener) {
      }
      addStatusListener(listener) {
      }
      removeStatusListener(listener) {
      }
      get status() {
        return animation$.AnimationStatus.forward;
      }
      toStringDetails() {
        return super.toStringDetails() + " " + dart.str(this.value) + "; paused";
      }
    }
    (AlwaysStoppedAnimation.new = function(value) {
      this[value$] = value;
      AlwaysStoppedAnimation.__proto__.new.call(this);
      ;
    }).prototype = AlwaysStoppedAnimation.prototype;
    dart.addTypeTests(AlwaysStoppedAnimation);
    AlwaysStoppedAnimation.prototype[_is_AlwaysStoppedAnimation_default] = true;
    dart.addTypeCaches(AlwaysStoppedAnimation);
    dart.setMethodSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getMethods(AlwaysStoppedAnimation.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
    }));
    dart.setGetterSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getGetters(AlwaysStoppedAnimation.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(AlwaysStoppedAnimation, I[4]);
    dart.setFieldSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getFields(AlwaysStoppedAnimation.__proto__),
      value: dart.finalFieldType(T)
    }));
    return AlwaysStoppedAnimation;
  });
  animations.AlwaysStoppedAnimation = animations.AlwaysStoppedAnimation$();
  dart.addTypeTests(animations.AlwaysStoppedAnimation, _is_AlwaysStoppedAnimation_default);
  const _is_AnimationWithParentMixin_default = Symbol('_is_AnimationWithParentMixin_default');
  animations.AnimationWithParentMixin$ = dart.generic(T => {
    class AnimationWithParentMixin extends core.Object {}
    AnimationWithParentMixin[dart.mixinOn] = Object => class AnimationWithParentMixin extends Object {
      addListener(listener) {
        return this.parent.addListener(listener);
      }
      removeListener(listener) {
        return this.parent.removeListener(listener);
      }
      addStatusListener(listener) {
        return this.parent.addStatusListener(listener);
      }
      removeStatusListener(listener) {
        return this.parent.removeStatusListener(listener);
      }
      get status() {
        return this.parent.status;
      }
    };
    (AnimationWithParentMixin[dart.mixinNew] = function() {
    }).prototype = AnimationWithParentMixin.prototype;
    dart.addTypeTests(AnimationWithParentMixin);
    AnimationWithParentMixin.prototype[_is_AnimationWithParentMixin_default] = true;
    dart.addTypeCaches(AnimationWithParentMixin);
    AnimationWithParentMixin[dart.implements] = () => [core.Object];
    dart.setMethodSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getMethods(AnimationWithParentMixin.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
    }));
    dart.setGetterSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getGetters(AnimationWithParentMixin.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(AnimationWithParentMixin, I[4]);
    return AnimationWithParentMixin;
  });
  animations.AnimationWithParentMixin = animations.AnimationWithParentMixin$();
  dart.addTypeTests(animations.AnimationWithParentMixin, _is_AnimationWithParentMixin_default);
  var _status = dart.privateName(animations, "_status");
  var _value = dart.privateName(animations, "_value");
  var _parent = dart.privateName(animations, "_parent");
  const Animation_AnimationLazyListenerMixin$36 = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$36.new = function() {
    listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$36, listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$36 {};
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
  animations.ProxyAnimation = class ProxyAnimation extends Animation_AnimationLocalStatusListenersMixin$36 {
    static ['_#new#tearOff'](animation = null) {
      return new animations.ProxyAnimation.new(animation);
    }
    get parent() {
      return this[_parent];
    }
    set parent(value) {
      if (dart.equals(value, this[_parent])) {
        return;
      }
      if (this[_parent] != null) {
        this[_status] = dart.nullCheck(this[_parent]).status;
        this[_value] = dart.nullCheck(this[_parent]).value;
        if (this.isListening) {
          this.didStopListening();
        }
      }
      this[_parent] = value;
      if (this[_parent] != null) {
        if (this.isListening) {
          this.didStartListening();
        }
        if (this[_value] !== dart.nullCheck(this[_parent]).value) {
          this.notifyListeners();
        }
        if (this[_status] !== dart.nullCheck(this[_parent]).status) {
          this.notifyStatusListeners(dart.nullCheck(this[_parent]).status);
        }
        this[_status] = null;
        this[_value] = null;
      }
    }
    didStartListening() {
      if (this[_parent] != null) {
        dart.nullCheck(this[_parent]).addListener(dart.bind(this, 'notifyListeners'));
        dart.nullCheck(this[_parent]).addStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    didStopListening() {
      if (this[_parent] != null) {
        dart.nullCheck(this[_parent]).removeListener(dart.bind(this, 'notifyListeners'));
        dart.nullCheck(this[_parent]).removeStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    get status() {
      return this[_parent] != null ? dart.nullCheck(this[_parent]).status : dart.nullCheck(this[_status]);
    }
    get value() {
      return this[_parent] != null ? dart.nullCheck(this[_parent]).value : dart.nullCheck(this[_value]);
    }
    toString() {
      if (this.parent == null) {
        return object.objectRuntimeType(this, "ProxyAnimation") + "(null; " + super.toStringDetails() + " " + this.value[$toStringAsFixed](3) + ")";
      }
      return dart.str(this.parent) + "➩" + object.objectRuntimeType(this, "ProxyAnimation");
    }
  };
  (animations.ProxyAnimation.new = function(animation = null) {
    this[_status] = null;
    this[_value] = null;
    this[_parent] = null;
    animations.ProxyAnimation.__proto__.new.call(this);
    this[_parent] = animation;
    if (this[_parent] == null) {
      this[_status] = animation$.AnimationStatus.dismissed;
      this[_value] = 0.0;
    }
  }).prototype = animations.ProxyAnimation.prototype;
  dart.addTypeTests(animations.ProxyAnimation);
  dart.addTypeCaches(animations.ProxyAnimation);
  dart.setMethodSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getMethods(animations.ProxyAnimation.__proto__),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getGetters(animations.ProxyAnimation.__proto__),
    parent: dart.nullable(animation$.Animation$(core.double)),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setSetterSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getSetters(animations.ProxyAnimation.__proto__),
    parent: dart.nullable(animation$.Animation$(core.double))
  }));
  dart.setLibraryUri(animations.ProxyAnimation, I[4]);
  dart.setFieldSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getFields(animations.ProxyAnimation.__proto__),
    [_status]: dart.fieldType(dart.nullable(animation$.AnimationStatus)),
    [_value]: dart.fieldType(dart.nullable(core.double)),
    [_parent]: dart.fieldType(dart.nullable(animation$.Animation$(core.double)))
  }));
  dart.defineExtensionMethods(animations.ProxyAnimation, ['toString']);
  var parent$ = dart.privateName(animations, "ReverseAnimation.parent");
  var _statusChangeHandler = dart.privateName(animations, "_statusChangeHandler");
  var _reverseStatus = dart.privateName(animations, "_reverseStatus");
  const Animation_AnimationLazyListenerMixin$36$ = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$36$.new = function() {
    listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$36$, listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLazyListenerMixin$36$ {};
  (Animation_AnimationLocalStatusListenersMixin$36$.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.ReverseAnimation = class ReverseAnimation extends Animation_AnimationLocalStatusListenersMixin$36$ {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    static ['_#new#tearOff'](parent) {
      return new animations.ReverseAnimation.new(parent);
    }
    addListener(listener) {
      this.didRegisterListener();
      this.parent.addListener(listener);
    }
    removeListener(listener) {
      this.parent.removeListener(listener);
      this.didUnregisterListener();
    }
    didStartListening() {
      this.parent.addStatusListener(dart.bind(this, _statusChangeHandler));
    }
    didStopListening() {
      this.parent.removeStatusListener(dart.bind(this, _statusChangeHandler));
    }
    [_statusChangeHandler](status) {
      this.notifyStatusListeners(this[_reverseStatus](status));
    }
    get status() {
      return this[_reverseStatus](this.parent.status);
    }
    get value() {
      return 1.0 - this.parent.value;
    }
    [_reverseStatus](status) {
      if (!(status !== null)) dart.assertFailed(null, I[5], 313, 12, "status != null");
      switch (status) {
        case C[0] || CT.C0:
          {
            return animation$.AnimationStatus.reverse;
          }
        case C[1] || CT.C1:
          {
            return animation$.AnimationStatus.forward;
          }
        case C[2] || CT.C2:
          {
            return animation$.AnimationStatus.dismissed;
          }
        case C[3] || CT.C3:
          {
            return animation$.AnimationStatus.completed;
          }
      }
    }
    toString() {
      return dart.str(this.parent) + "➪" + object.objectRuntimeType(this, "ReverseAnimation");
    }
  };
  (animations.ReverseAnimation.new = function(parent) {
    this[parent$] = parent;
    if (!(parent !== null)) dart.assertFailed(null, I[5], 275, 14, "parent != null");
    animations.ReverseAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations.ReverseAnimation.prototype;
  dart.addTypeTests(animations.ReverseAnimation);
  dart.addTypeCaches(animations.ReverseAnimation);
  dart.setMethodSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getMethods(animations.ReverseAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, []),
    [_statusChangeHandler]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    [_reverseStatus]: dart.fnType(animation$.AnimationStatus, [animation$.AnimationStatus])
  }));
  dart.setGetterSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getGetters(animations.ReverseAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations.ReverseAnimation, I[4]);
  dart.setFieldSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getFields(animations.ReverseAnimation.__proto__),
    parent: dart.finalFieldType(animation$.Animation$(core.double))
  }));
  dart.defineExtensionMethods(animations.ReverseAnimation, ['toString']);
  var parent$0 = dart.privateName(animations, "CurvedAnimation.parent");
  var curve$ = dart.privateName(animations, "CurvedAnimation.curve");
  var reverseCurve$ = dart.privateName(animations, "CurvedAnimation.reverseCurve");
  var isDisposed = dart.privateName(animations, "CurvedAnimation.isDisposed");
  var _curveDirection = dart.privateName(animations, "_curveDirection");
  var _updateCurveDirection = dart.privateName(animations, "_updateCurveDirection");
  var _useForwardCurve = dart.privateName(animations, "_useForwardCurve");
  const Animation_AnimationWithParentMixin$36 = class Animation_AnimationWithParentMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationWithParentMixin$36.new = function() {
    Animation_AnimationWithParentMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationWithParentMixin$36.prototype;
  dart.applyMixin(Animation_AnimationWithParentMixin$36, animations.AnimationWithParentMixin$(core.double));
  animations.CurvedAnimation = class CurvedAnimation extends Animation_AnimationWithParentMixin$36 {
    get parent() {
      return this[parent$0];
    }
    set parent(value) {
      super.parent = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      this[curve$] = value;
    }
    get reverseCurve() {
      return this[reverseCurve$];
    }
    set reverseCurve(value) {
      this[reverseCurve$] = value;
    }
    get isDisposed() {
      return this[isDisposed];
    }
    set isDisposed(value) {
      this[isDisposed] = value;
    }
    static ['_#new#tearOff'](opts) {
      let parent = opts && 'parent' in opts ? opts.parent : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      let reverseCurve = opts && 'reverseCurve' in opts ? opts.reverseCurve : null;
      return new animations.CurvedAnimation.new({parent: parent, curve: curve, reverseCurve: reverseCurve});
    }
    [_updateCurveDirection](status) {
      switch (status) {
        case C[3] || CT.C3:
        case C[2] || CT.C2:
          {
            this[_curveDirection] = null;
            break;
          }
        case C[0] || CT.C0:
          {
            this[_curveDirection] == null ? this[_curveDirection] = animation$.AnimationStatus.forward : null;
            break;
          }
        case C[1] || CT.C1:
          {
            this[_curveDirection] == null ? this[_curveDirection] = animation$.AnimationStatus.reverse : null;
            break;
          }
      }
    }
    get [_useForwardCurve]() {
      let t2;
      return this.reverseCurve == null || (t2 = this[_curveDirection], t2 == null ? this.parent.status : t2) !== animation$.AnimationStatus.reverse;
    }
    dispose() {
      this.isDisposed = true;
      this.parent.removeStatusListener(dart.bind(this, _updateCurveDirection));
    }
    get value() {
      let activeCurve = this[_useForwardCurve] ? this.curve : this.reverseCurve;
      let t = this.parent.value;
      if (activeCurve == null) {
        return t;
      }
      if (t === 0.0 || t === 1.0) {
        if (!dart.fn(() => {
          let transformedValue = activeCurve.transform(t);
          let roundedTransformedValue = transformedValue[$round]()[$toDouble]();
          if (roundedTransformedValue !== t) {
            dart.throw(assertions.FlutterError.new("Invalid curve endpoint at " + dart.str(t) + ".\n" + "Curves must map 0.0 to near zero and 1.0 to near one but " + dart.str(dart.runtimeType(activeCurve)) + " mapped " + dart.str(t) + " to " + dart.str(transformedValue) + ", which " + "is near " + dart.str(roundedTransformedValue) + "."));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[5], 459, 14, "() {\n        final double transformedValue = activeCurve.transform(t);\n        final double roundedTransformedValue = transformedValue.round().toDouble();\n        if (roundedTransformedValue != t) {\n          throw FlutterError(\n            'Invalid curve endpoint at $t.\\n'\n            'Curves must map 0.0 to near zero and 1.0 to near one but '\n            '${activeCurve.runtimeType} mapped $t to $transformedValue, which '\n            'is near $roundedTransformedValue.',\n          );\n        }\n        return true;\n      }()");
        return t;
      }
      return activeCurve.transform(t);
    }
    toString() {
      if (this.reverseCurve == null) {
        return dart.str(this.parent) + "➩" + dart.str(this.curve);
      }
      if (this[_useForwardCurve]) {
        return dart.str(this.parent) + "➩" + dart.str(this.curve) + "ₒₙ/" + dart.str(this.reverseCurve);
      }
      return dart.str(this.parent) + "➩" + dart.str(this.curve) + "/" + dart.str(this.reverseCurve) + "ₒₙ";
    }
  };
  (animations.CurvedAnimation.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let reverseCurve = opts && 'reverseCurve' in opts ? opts.reverseCurve : null;
    this[_curveDirection] = null;
    this[isDisposed] = false;
    this[parent$0] = parent;
    this[curve$] = curve;
    this[reverseCurve$] = reverseCurve;
    if (!(parent !== null)) dart.assertFailed(null, I[5], 387, 15, "parent != null");
    if (!(curve !== null)) dart.assertFailed(null, I[5], 388, 15, "curve != null");
    animations.CurvedAnimation.__proto__.new.call(this);
    this[_updateCurveDirection](this.parent.status);
    this.parent.addStatusListener(dart.bind(this, _updateCurveDirection));
  }).prototype = animations.CurvedAnimation.prototype;
  dart.addTypeTests(animations.CurvedAnimation);
  dart.addTypeCaches(animations.CurvedAnimation);
  dart.setMethodSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getMethods(animations.CurvedAnimation.__proto__),
    [_updateCurveDirection]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getGetters(animations.CurvedAnimation.__proto__),
    [_useForwardCurve]: core.bool,
    value: core.double
  }));
  dart.setLibraryUri(animations.CurvedAnimation, I[4]);
  dart.setFieldSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getFields(animations.CurvedAnimation.__proto__),
    parent: dart.finalFieldType(animation$.Animation$(core.double)),
    curve: dart.fieldType(curves.Curve),
    reverseCurve: dart.fieldType(dart.nullable(curves.Curve)),
    [_curveDirection]: dart.fieldType(dart.nullable(animation$.AnimationStatus)),
    isDisposed: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(animations.CurvedAnimation, ['toString']);
  var _name = dart.privateName(core, "_name");
  animations._TrainHoppingMode = class _TrainHoppingMode extends core._Enum {
    toString() {
      return "_TrainHoppingMode." + this[_name];
    }
  };
  (animations._TrainHoppingMode.new = function(index, name) {
    animations._TrainHoppingMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = animations._TrainHoppingMode.prototype;
  dart.addTypeTests(animations._TrainHoppingMode);
  dart.addTypeCaches(animations._TrainHoppingMode);
  dart.setLibraryUri(animations._TrainHoppingMode, I[4]);
  dart.setStaticFieldSignature(animations._TrainHoppingMode, () => ['values', 'minimize', 'maximize']);
  dart.defineExtensionMethods(animations._TrainHoppingMode, ['toString']);
  dart.defineLazy(animations._TrainHoppingMode, {
    /*animations._TrainHoppingMode.values*/get values() {
      return C[4] || CT.C4;
    },
    /*animations._TrainHoppingMode.minimize*/get minimize() {
      return C[5] || CT.C5;
    },
    /*animations._TrainHoppingMode.maximize*/get maximize() {
      return C[6] || CT.C6;
    }
  }, false);
  var onSwitchedTrain$ = dart.privateName(animations, "TrainHoppingAnimation.onSwitchedTrain");
  var _mode = dart.privateName(animations, "_mode");
  var _lastStatus = dart.privateName(animations, "_lastStatus");
  var _lastValue = dart.privateName(animations, "_lastValue");
  var _currentTrain$ = dart.privateName(animations, "_currentTrain");
  var _nextTrain$ = dart.privateName(animations, "_nextTrain");
  var _valueChangeHandler = dart.privateName(animations, "_valueChangeHandler");
  const Animation_AnimationEagerListenerMixin$36 = class Animation_AnimationEagerListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36.new = function() {
    Animation_AnimationEagerListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36$.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36$, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$0 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36$ {};
  (Animation_AnimationLocalStatusListenersMixin$36$0.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$0.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$0.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$0, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.TrainHoppingAnimation = class TrainHoppingAnimation extends Animation_AnimationLocalStatusListenersMixin$36$0 {
    get onSwitchedTrain() {
      return this[onSwitchedTrain$];
    }
    set onSwitchedTrain(value) {
      this[onSwitchedTrain$] = value;
    }
    static ['_#new#tearOff'](_currentTrain, _nextTrain, opts) {
      let onSwitchedTrain = opts && 'onSwitchedTrain' in opts ? opts.onSwitchedTrain : null;
      return new animations.TrainHoppingAnimation.new(_currentTrain, _nextTrain, {onSwitchedTrain: onSwitchedTrain});
    }
    get currentTrain() {
      return this[_currentTrain$];
    }
    [_statusChangeHandler](status) {
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, I[5], 557, 12, "_currentTrain != null");
      if (status !== this[_lastStatus]) {
        this.notifyListeners();
        this[_lastStatus] = status;
      }
      if (!(this[_lastStatus] != null)) dart.assertFailed(null, I[5], 562, 12, "_lastStatus != null");
    }
    get status() {
      return dart.nullCheck(this[_currentTrain$]).status;
    }
    [_valueChangeHandler]() {
      let t4;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, I[5], 570, 12, "_currentTrain != null");
      let hop = false;
      if (this[_nextTrain$] != null) {
        if (!(this[_mode] != null)) dart.assertFailed(null, I[5], 573, 14, "_mode != null");
        switch (dart.nullCheck(this[_mode])) {
          case C[5] || CT.C5:
            {
              hop = dart.nullCheck(this[_nextTrain$]).value <= dart.nullCheck(this[_currentTrain$]).value;
              break;
            }
          case C[6] || CT.C6:
            {
              hop = dart.nullCheck(this[_nextTrain$]).value >= dart.nullCheck(this[_currentTrain$]).value;
              break;
            }
        }
        if (hop) {
          t4 = dart.nullCheck(this[_currentTrain$]);
          (() => {
            t4.removeStatusListener(dart.bind(this, _statusChangeHandler));
            t4.removeListener(dart.bind(this, _valueChangeHandler));
            return t4;
          })();
          this[_currentTrain$] = this[_nextTrain$];
          this[_nextTrain$] = null;
          dart.nullCheck(this[_currentTrain$]).addStatusListener(dart.bind(this, _statusChangeHandler));
          this[_statusChangeHandler](dart.nullCheck(this[_currentTrain$]).status);
        }
      }
      let newValue = this.value;
      if (newValue !== this[_lastValue]) {
        this.notifyListeners();
        this[_lastValue] = newValue;
      }
      if (!(this[_lastValue] != null)) dart.assertFailed(null, I[5], 597, 12, "_lastValue != null");
      if (hop && this.onSwitchedTrain != null) {
        dart.nullCheck(this.onSwitchedTrain)();
      }
    }
    get value() {
      return dart.nullCheck(this[_currentTrain$]).value;
    }
    dispose() {
      let t4;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, I[5], 610, 12, "_currentTrain != null");
      dart.nullCheck(this[_currentTrain$]).removeStatusListener(dart.bind(this, _statusChangeHandler));
      dart.nullCheck(this[_currentTrain$]).removeListener(dart.bind(this, _valueChangeHandler));
      this[_currentTrain$] = null;
      t4 = this[_nextTrain$];
      t4 == null ? null : t4.removeListener(dart.bind(this, _valueChangeHandler));
      this[_nextTrain$] = null;
      this.clearListeners();
      this.clearStatusListeners();
      super.dispose();
    }
    toString() {
      if (this[_nextTrain$] != null) {
        return dart.str(this.currentTrain) + "➩" + object.objectRuntimeType(this, "TrainHoppingAnimation") + "(next: " + dart.str(this[_nextTrain$]) + ")";
      }
      return dart.str(this.currentTrain) + "➩" + object.objectRuntimeType(this, "TrainHoppingAnimation") + "(no next)";
    }
  };
  (animations.TrainHoppingAnimation.new = function(_currentTrain, _nextTrain, opts) {
    let t4;
    let onSwitchedTrain = opts && 'onSwitchedTrain' in opts ? opts.onSwitchedTrain : null;
    this[_mode] = null;
    this[_lastStatus] = null;
    this[_lastValue] = null;
    this[_currentTrain$] = _currentTrain;
    this[_nextTrain$] = _nextTrain;
    this[onSwitchedTrain$] = onSwitchedTrain;
    if (!(_currentTrain !== null)) dart.assertFailed(null, I[5], 521, 15, "_currentTrain != null");
    animations.TrainHoppingAnimation.__proto__.new.call(this);
    if (this[_nextTrain$] != null) {
      if (dart.nullCheck(this[_currentTrain$]).value === dart.nullCheck(this[_nextTrain$]).value) {
        this[_currentTrain$] = this[_nextTrain$];
        this[_nextTrain$] = null;
      } else if (dart.nullCheck(this[_currentTrain$]).value > dart.nullCheck(this[_nextTrain$]).value) {
        this[_mode] = animations._TrainHoppingMode.maximize;
      } else {
        if (!(dart.nullCheck(this[_currentTrain$]).value < dart.nullCheck(this[_nextTrain$]).value)) dart.assertFailed(null, I[5], 529, 16, "_currentTrain!.value < _nextTrain!.value");
        this[_mode] = animations._TrainHoppingMode.minimize;
      }
    }
    dart.nullCheck(this[_currentTrain$]).addStatusListener(dart.bind(this, _statusChangeHandler));
    dart.nullCheck(this[_currentTrain$]).addListener(dart.bind(this, _valueChangeHandler));
    t4 = this[_nextTrain$];
    t4 == null ? null : t4.addListener(dart.bind(this, _valueChangeHandler));
    if (!(this[_mode] != null || this[_nextTrain$] == null)) dart.assertFailed(null, I[5], 536, 12, "_mode != null || _nextTrain == null");
  }).prototype = animations.TrainHoppingAnimation.prototype;
  dart.addTypeTests(animations.TrainHoppingAnimation);
  dart.addTypeCaches(animations.TrainHoppingAnimation);
  dart.setMethodSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getMethods(animations.TrainHoppingAnimation.__proto__),
    [_statusChangeHandler]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    [_valueChangeHandler]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getGetters(animations.TrainHoppingAnimation.__proto__),
    currentTrain: dart.nullable(animation$.Animation$(core.double)),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations.TrainHoppingAnimation, I[4]);
  dart.setFieldSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getFields(animations.TrainHoppingAnimation.__proto__),
    [_currentTrain$]: dart.fieldType(dart.nullable(animation$.Animation$(core.double))),
    [_nextTrain$]: dart.fieldType(dart.nullable(animation$.Animation$(core.double))),
    [_mode]: dart.fieldType(dart.nullable(animations._TrainHoppingMode)),
    onSwitchedTrain: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_lastStatus]: dart.fieldType(dart.nullable(animation$.AnimationStatus)),
    [_lastValue]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(animations.TrainHoppingAnimation, ['toString']);
  var first$ = dart.privateName(animations, "CompoundAnimation.first");
  var next$ = dart.privateName(animations, "CompoundAnimation.next");
  var _maybeNotifyListeners = dart.privateName(animations, "_maybeNotifyListeners");
  var _maybeNotifyStatusListeners = dart.privateName(animations, "_maybeNotifyStatusListeners");
  const _is_CompoundAnimation_default = Symbol('_is_CompoundAnimation_default');
  animations.CompoundAnimation$ = dart.generic(T => {
    const Animation_AnimationLazyListenerMixin$36 = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(T) {};
    (Animation_AnimationLazyListenerMixin$36.new = function() {
      listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
      Animation_AnimationLazyListenerMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationLazyListenerMixin$36.prototype;
    dart.applyMixin(Animation_AnimationLazyListenerMixin$36, listener_helpers.AnimationLazyListenerMixin);
    const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$36 {};
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
    class CompoundAnimation extends Animation_AnimationLocalStatusListenersMixin$36 {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      didStartListening() {
        this.first.addListener(dart.bind(this, _maybeNotifyListeners));
        this.first.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.addListener(dart.bind(this, _maybeNotifyListeners));
        this.next.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      didStopListening() {
        this.first.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.first.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.next.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      get status() {
        if (this.next.status === animation$.AnimationStatus.forward || this.next.status === animation$.AnimationStatus.reverse) {
          return this.next.status;
        }
        return this.first.status;
      }
      toString() {
        return object.objectRuntimeType(this, "CompoundAnimation") + "(" + dart.str(this.first) + ", " + dart.str(this.next) + ")";
      }
      [_maybeNotifyStatusListeners](_) {
        if (this.status !== this[_lastStatus]) {
          this[_lastStatus] = this.status;
          this.notifyStatusListeners(this.status);
        }
      }
      [_maybeNotifyListeners]() {
        if (!dart.equals(this.value, this[_lastValue])) {
          this[_lastValue] = this.value;
          this.notifyListeners();
        }
      }
    }
    (CompoundAnimation.new = function(opts) {
      let first = opts && 'first' in opts ? opts.first : null;
      let next = opts && 'next' in opts ? opts.next : null;
      this[_lastStatus] = null;
      this[_lastValue] = null;
      this[first$] = first;
      this[next$] = next;
      if (!(first !== null)) dart.assertFailed(null, I[5], 647, 15, "first != null");
      if (!(next !== null)) dart.assertFailed(null, I[5], 648, 15, "next != null");
      CompoundAnimation.__proto__.new.call(this);
      ;
    }).prototype = CompoundAnimation.prototype;
    dart.addTypeTests(CompoundAnimation);
    CompoundAnimation.prototype[_is_CompoundAnimation_default] = true;
    dart.addTypeCaches(CompoundAnimation);
    dart.setMethodSignature(CompoundAnimation, () => ({
      __proto__: dart.getMethods(CompoundAnimation.__proto__),
      didStartListening: dart.fnType(dart.void, []),
      didStopListening: dart.fnType(dart.void, []),
      [_maybeNotifyStatusListeners]: dart.fnType(dart.void, [animation$.AnimationStatus]),
      [_maybeNotifyListeners]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CompoundAnimation, () => ({
      __proto__: dart.getGetters(CompoundAnimation.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(CompoundAnimation, I[4]);
    dart.setFieldSignature(CompoundAnimation, () => ({
      __proto__: dart.getFields(CompoundAnimation.__proto__),
      first: dart.finalFieldType(animation$.Animation$(T)),
      next: dart.finalFieldType(animation$.Animation$(T)),
      [_lastStatus]: dart.fieldType(dart.nullable(animation$.AnimationStatus)),
      [_lastValue]: dart.fieldType(dart.nullable(T))
    }));
    dart.defineExtensionMethods(CompoundAnimation, ['toString']);
    return CompoundAnimation;
  });
  animations.CompoundAnimation = animations.CompoundAnimation$();
  dart.addTypeTests(animations.CompoundAnimation, _is_CompoundAnimation_default);
  animations.AnimationMean = class AnimationMean extends animations.CompoundAnimation$(core.double) {
    static ['_#new#tearOff'](opts) {
      let left = opts && 'left' in opts ? opts.left : null;
      let right = opts && 'right' in opts ? opts.right : null;
      return new animations.AnimationMean.new({left: left, right: right});
    }
    get value() {
      return (this.first.value + this.next.value) / 2.0;
    }
  };
  (animations.AnimationMean.new = function(opts) {
    let left = opts && 'left' in opts ? opts.left : null;
    let right = opts && 'right' in opts ? opts.right : null;
    animations.AnimationMean.__proto__.new.call(this, {first: left, next: right});
    ;
  }).prototype = animations.AnimationMean.prototype;
  dart.addTypeTests(animations.AnimationMean);
  dart.addTypeCaches(animations.AnimationMean);
  dart.setGetterSignature(animations.AnimationMean, () => ({
    __proto__: dart.getGetters(animations.AnimationMean.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(animations.AnimationMean, I[4]);
  const _is_AnimationMax_default = Symbol('_is_AnimationMax_default');
  animations.AnimationMax$ = dart.generic(T => {
    class AnimationMax extends animations.CompoundAnimation$(T) {
      static ['_#new#tearOff'](T, first, next) {
        return new (animations.AnimationMax$(T)).new(first, next);
      }
      get value() {
        return math.max(T, this.first.value, this.next.value);
      }
    }
    (AnimationMax.new = function(first, next) {
      AnimationMax.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMax.prototype;
    dart.addTypeTests(AnimationMax);
    AnimationMax.prototype[_is_AnimationMax_default] = true;
    dart.addTypeCaches(AnimationMax);
    dart.setGetterSignature(AnimationMax, () => ({
      __proto__: dart.getGetters(AnimationMax.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMax, I[4]);
    return AnimationMax;
  });
  animations.AnimationMax = animations.AnimationMax$();
  dart.addTypeTests(animations.AnimationMax, _is_AnimationMax_default);
  const _is_AnimationMin_default = Symbol('_is_AnimationMin_default');
  animations.AnimationMin$ = dart.generic(T => {
    class AnimationMin extends animations.CompoundAnimation$(T) {
      static ['_#new#tearOff'](T, first, next) {
        return new (animations.AnimationMin$(T)).new(first, next);
      }
      get value() {
        return math.min(T, this.first.value, this.next.value);
      }
    }
    (AnimationMin.new = function(first, next) {
      AnimationMin.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMin.prototype;
    dart.addTypeTests(AnimationMin);
    AnimationMin.prototype[_is_AnimationMin_default] = true;
    dart.addTypeCaches(AnimationMin);
    dart.setGetterSignature(AnimationMin, () => ({
      __proto__: dart.getGetters(AnimationMin.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMin, I[4]);
    return AnimationMin;
  });
  animations.AnimationMin = animations.AnimationMin$();
  dart.addTypeTests(animations.AnimationMin, _is_AnimationMin_default);
  dart.defineLazy(animations, {
    /*animations.kAlwaysCompleteAnimation*/get kAlwaysCompleteAnimation() {
      return C[7] || CT.C7;
    },
    /*animations.kAlwaysDismissedAnimation*/get kAlwaysDismissedAnimation() {
      return C[8] || CT.C8;
    }
  }, false);
  const _is_Animatable_default = Symbol('_is_Animatable_default');
  tween.Animatable$ = dart.generic(T => {
    var __t$_AnimatedEvaluationOfT = () => (__t$_AnimatedEvaluationOfT = dart.constFn(tween._AnimatedEvaluation$(T)))();
    var __t$_ChainedEvaluationOfT = () => (__t$_ChainedEvaluationOfT = dart.constFn(tween._ChainedEvaluation$(T)))();
    class Animatable extends core.Object {
      evaluate(animation) {
        return this.transform(animation.value);
      }
      animate(parent) {
        return new (__t$_AnimatedEvaluationOfT()).new(parent, this);
      }
      chain(parent) {
        return new (__t$_ChainedEvaluationOfT()).new(parent, this);
      }
    }
    (Animatable.new = function() {
      ;
    }).prototype = Animatable.prototype;
    dart.addTypeTests(Animatable);
    Animatable.prototype[_is_Animatable_default] = true;
    dart.addTypeCaches(Animatable);
    dart.setMethodSignature(Animatable, () => ({
      __proto__: dart.getMethods(Animatable.__proto__),
      evaluate: dart.fnType(T, [animation$.Animation$(core.double)]),
      animate: dart.fnType(animation$.Animation$(T), [animation$.Animation$(core.double)]),
      chain: dart.fnType(tween.Animatable$(T), [tween.Animatable$(core.double)])
    }));
    dart.setLibraryUri(Animatable, I[6]);
    return Animatable;
  });
  tween.Animatable = tween.Animatable$();
  dart.addTypeTests(tween.Animatable, _is_Animatable_default);
  var parent$1 = dart.privateName(tween, "_AnimatedEvaluation.parent");
  var _evaluatable$ = dart.privateName(tween, "_evaluatable");
  const _is__AnimatedEvaluation_default = Symbol('_is__AnimatedEvaluation_default');
  tween._AnimatedEvaluation$ = dart.generic(T => {
    const Animation_AnimationWithParentMixin$36 = class Animation_AnimationWithParentMixin extends animation$.Animation$(T) {};
    (Animation_AnimationWithParentMixin$36.new = function() {
      Animation_AnimationWithParentMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationWithParentMixin$36.prototype;
    dart.applyMixin(Animation_AnimationWithParentMixin$36, animations.AnimationWithParentMixin$(core.double));
    class _AnimatedEvaluation extends Animation_AnimationWithParentMixin$36 {
      get parent() {
        return this[parent$1];
      }
      set parent(value) {
        super.parent = value;
      }
      static ['_#new#tearOff'](T, parent, _evaluatable) {
        return new (tween._AnimatedEvaluation$(T)).new(parent, _evaluatable);
      }
      get value() {
        return this[_evaluatable$].evaluate(this.parent);
      }
      toString() {
        return dart.str(this.parent) + "➩" + dart.str(this[_evaluatable$]) + "➩" + dart.str(this.value);
      }
      toStringDetails() {
        return super.toStringDetails() + " " + dart.str(this[_evaluatable$]);
      }
    }
    (_AnimatedEvaluation.new = function(parent, _evaluatable) {
      this[parent$1] = parent;
      this[_evaluatable$] = _evaluatable;
      _AnimatedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _AnimatedEvaluation.prototype;
    dart.addTypeTests(_AnimatedEvaluation);
    _AnimatedEvaluation.prototype[_is__AnimatedEvaluation_default] = true;
    dart.addTypeCaches(_AnimatedEvaluation);
    dart.setGetterSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getGetters(_AnimatedEvaluation.__proto__),
      value: T
    }));
    dart.setLibraryUri(_AnimatedEvaluation, I[6]);
    dart.setFieldSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getFields(_AnimatedEvaluation.__proto__),
      parent: dart.finalFieldType(animation$.Animation$(core.double)),
      [_evaluatable$]: dart.finalFieldType(tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_AnimatedEvaluation, ['toString']);
    return _AnimatedEvaluation;
  });
  tween._AnimatedEvaluation = tween._AnimatedEvaluation$();
  dart.addTypeTests(tween._AnimatedEvaluation, _is__AnimatedEvaluation_default);
  var _parent$ = dart.privateName(tween, "_parent");
  const _is__ChainedEvaluation_default = Symbol('_is__ChainedEvaluation_default');
  tween._ChainedEvaluation$ = dart.generic(T => {
    class _ChainedEvaluation extends tween.Animatable$(T) {
      static ['_#new#tearOff'](T, _parent, _evaluatable) {
        return new (tween._ChainedEvaluation$(T)).new(_parent, _evaluatable);
      }
      transform(t) {
        return this[_evaluatable$].transform(this[_parent$].transform(t));
      }
      toString() {
        return dart.str(this[_parent$]) + "➩" + dart.str(this[_evaluatable$]);
      }
    }
    (_ChainedEvaluation.new = function(_parent, _evaluatable) {
      this[_parent$] = _parent;
      this[_evaluatable$] = _evaluatable;
      _ChainedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _ChainedEvaluation.prototype;
    dart.addTypeTests(_ChainedEvaluation);
    _ChainedEvaluation.prototype[_is__ChainedEvaluation_default] = true;
    dart.addTypeCaches(_ChainedEvaluation);
    dart.setMethodSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getMethods(_ChainedEvaluation.__proto__),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(_ChainedEvaluation, I[6]);
    dart.setFieldSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getFields(_ChainedEvaluation.__proto__),
      [_parent$]: dart.finalFieldType(tween.Animatable$(core.double)),
      [_evaluatable$]: dart.finalFieldType(tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_ChainedEvaluation, ['toString']);
    return _ChainedEvaluation;
  });
  tween._ChainedEvaluation = tween._ChainedEvaluation$();
  dart.addTypeTests(tween._ChainedEvaluation, _is__ChainedEvaluation_default);
  var begin$ = dart.privateName(tween, "Tween.begin");
  var end$ = dart.privateName(tween, "Tween.end");
  const _is_Tween_default = Symbol('_is_Tween_default');
  tween.Tween$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    class Tween extends tween.Animatable$(T) {
      get begin() {
        return this[begin$];
      }
      set begin(value) {
        this[begin$] = __t$TN().as(value);
      }
      get end() {
        return this[end$];
      }
      set end(value) {
        this[end$] = __t$TN().as(value);
      }
      static ['_#new#tearOff'](T, opts) {
        let begin = opts && 'begin' in opts ? opts.begin : null;
        let end = opts && 'end' in opts ? opts.end : null;
        return new (tween.Tween$(T)).new({begin: begin, end: end});
      }
      lerp(t) {
        if (!(this.begin != null)) dart.assertFailed(null, I[7], 260, 12, "begin != null");
        if (!(this.end != null)) dart.assertFailed(null, I[7], 261, 12, "end != null");
        if (!dart.fn(() => {
          let result = null;
          try {
            result = dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]);
            T.as(result);
            return true;
          } catch (e) {
            let ex = dart.getThrown(e);
            if (core.NoSuchMethodError.is(ex)) {
              dart.throw(new assertions.FlutterError.fromParts((() => {
                let t7 = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Cannot lerp between \"" + dart.str(this.begin) + "\" and \"" + dart.str(this.end) + "\"."), new assertions.ErrorDescription.new("The type " + dart.str(dart.runtimeType(this.begin)) + " might not fully implement `+`, `-`, and/or `*`. " + "See \"Types with special considerations\" at https://api.flutter.dev/flutter/animation/Tween-class.html " + "for more information.")]);
                if (ui.Color.is(this.begin) || ui.Color.is(this.end))
                  t7.push(new assertions.ErrorHint.new("To lerp colors, consider ColorTween instead."));
                else if (ui.Rect.is(this.begin) || ui.Rect.is(this.end))
                  t7.push(new assertions.ErrorHint.new("To lerp rects, consider RectTween instead."));
                else
                  t7.push(new assertions.ErrorHint.new("There may be a dedicated \"" + dart.str(dart.runtimeType(this.begin)) + "Tween\" for this type, " + "or you may need to create one."));
                return t7;
              })()));
            } else if (core.TypeError.is(ex)) {
              dart.throw(new assertions.FlutterError.fromParts((() => {
                let t5 = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Cannot lerp between \"" + dart.str(this.begin) + "\" and \"" + dart.str(this.end) + "\"."), new assertions.ErrorDescription.new("The type " + dart.str(dart.runtimeType(this.begin)) + " returned a " + dart.str(dart.runtimeType(result)) + " after " + "multiplication with a double value. " + "See \"Types with special considerations\" at https://api.flutter.dev/flutter/animation/Tween-class.html " + "for more information.")]);
                if (core.int.is(this.begin) || core.int.is(this.end))
                  t5.push(new assertions.ErrorHint.new("To lerp int values, consider IntTween or StepTween instead."));
                else
                  t5.push(new assertions.ErrorHint.new("There may be a dedicated \"" + dart.str(dart.runtimeType(this.begin)) + "Tween\" for this type, " + "or you may need to create one."));
                return t5;
              })()));
            } else
              throw e;
          }
        }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 262, 12, "() {\n      // Assertions that attempt to catch common cases of tweening types\n      // that do not conform to the Tween requirements.\n      dynamic result;\n      try {\n        // ignore: avoid_dynamic_calls\n        result = (begin as dynamic) + ((end as dynamic) - (begin as dynamic)) * t;\n        result as T;\n        return true;\n      } on NoSuchMethodError {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Cannot lerp between \"$begin\" and \"$end\".'),\n          ErrorDescription(\n            'The type ${begin.runtimeType} might not fully implement `+`, `-`, and/or `*`. '\n            'See \"Types with special considerations\" at https://api.flutter.dev/flutter/animation/Tween-class.html '\n            'for more information.',\n          ),\n          if (begin is Color || end is Color)\n            ErrorHint('To lerp colors, consider ColorTween instead.')\n          else if (begin is Rect || end is Rect)\n            ErrorHint('To lerp rects, consider RectTween instead.')\n          else\n            ErrorHint(\n              'There may be a dedicated \"${begin.runtimeType}Tween\" for this type, '\n              'or you may need to create one.',\n            ),\n        ]);\n      } on TypeError {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Cannot lerp between \"$begin\" and \"$end\".'),\n          ErrorDescription(\n            'The type ${begin.runtimeType} returned a ${result.runtimeType} after '\n            'multiplication with a double value. '\n            'See \"Types with special considerations\" at https://api.flutter.dev/flutter/animation/Tween-class.html '\n            'for more information.',\n          ),\n          if (begin is int || end is int)\n            ErrorHint('To lerp int values, consider IntTween or StepTween instead.')\n          else\n            ErrorHint(\n              'There may be a dedicated \"${begin.runtimeType}Tween\" for this type, '\n              'or you may need to create one.',\n            ),\n        ]);\n      }\n    }()");
        return T.as(dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]));
      }
      transform(t) {
        if (t === 0.0) {
          return T.as(this.begin);
        }
        if (t === 1.0) {
          return T.as(this.end);
        }
        return this.lerp(t);
      }
      toString() {
        return object.objectRuntimeType(this, "Animatable") + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + ")";
      }
    }
    (Tween.new = function(opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      this[begin$] = begin;
      this[end$] = end;
      Tween.__proto__.new.call(this);
      ;
    }).prototype = Tween.prototype;
    dart.addTypeTests(Tween);
    Tween.prototype[_is_Tween_default] = true;
    dart.addTypeCaches(Tween);
    dart.setMethodSignature(Tween, () => ({
      __proto__: dart.getMethods(Tween.__proto__),
      lerp: dart.fnType(T, [core.double]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(Tween, I[6]);
    dart.setFieldSignature(Tween, () => ({
      __proto__: dart.getFields(Tween.__proto__),
      begin: dart.fieldType(dart.nullable(T)),
      end: dart.fieldType(dart.nullable(T))
    }));
    dart.defineExtensionMethods(Tween, ['toString']);
    return Tween;
  });
  tween.Tween = tween.Tween$();
  dart.addTypeTests(tween.Tween, _is_Tween_default);
  var parent$2 = dart.privateName(tween, "ReverseTween.parent");
  const _is_ReverseTween_default = Symbol('_is_ReverseTween_default');
  tween.ReverseTween$ = dart.generic(T => {
    class ReverseTween extends tween.Tween$(T) {
      get parent() {
        return this[parent$2];
      }
      set parent(value) {
        super.parent = value;
      }
      static ['_#new#tearOff'](T, parent) {
        return new (tween.ReverseTween$(T)).new(parent);
      }
      lerp(t) {
        return this.parent.lerp(1.0 - t);
      }
    }
    (ReverseTween.new = function(parent) {
      this[parent$2] = parent;
      if (!(parent !== null)) dart.assertFailed(null, I[7], 343, 14, "parent != null");
      ReverseTween.__proto__.new.call(this, {begin: parent.end, end: parent.begin});
      ;
    }).prototype = ReverseTween.prototype;
    dart.addTypeTests(ReverseTween);
    ReverseTween.prototype[_is_ReverseTween_default] = true;
    dart.addTypeCaches(ReverseTween);
    dart.setLibraryUri(ReverseTween, I[6]);
    dart.setFieldSignature(ReverseTween, () => ({
      __proto__: dart.getFields(ReverseTween.__proto__),
      parent: dart.finalFieldType(tween.Tween$(T))
    }));
    return ReverseTween;
  });
  tween.ReverseTween = tween.ReverseTween$();
  dart.addTypeTests(tween.ReverseTween, _is_ReverseTween_default);
  tween.ColorTween = class ColorTween extends tween.Tween$(dart.nullable(ui.Color)) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new tween.ColorTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return ui.Color.lerp(this.begin, this.end, t);
    }
  };
  (tween.ColorTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.ColorTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.ColorTween.prototype;
  dart.addTypeTests(tween.ColorTween);
  dart.addTypeCaches(tween.ColorTween);
  dart.setLibraryUri(tween.ColorTween, I[6]);
  tween.SizeTween = class SizeTween extends tween.Tween$(dart.nullable(ui.Size)) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new tween.SizeTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return ui.Size.lerp(this.begin, this.end, t);
    }
  };
  (tween.SizeTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.SizeTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.SizeTween.prototype;
  dart.addTypeTests(tween.SizeTween);
  dart.addTypeCaches(tween.SizeTween);
  dart.setLibraryUri(tween.SizeTween, I[6]);
  tween.RectTween = class RectTween extends tween.Tween$(dart.nullable(ui.Rect)) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new tween.RectTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return ui.Rect.lerp(this.begin, this.end, t);
    }
  };
  (tween.RectTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.RectTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.RectTween.prototype;
  dart.addTypeTests(tween.RectTween);
  dart.addTypeCaches(tween.RectTween);
  dart.setLibraryUri(tween.RectTween, I[6]);
  tween.IntTween = class IntTween extends tween.Tween$(core.int) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new tween.IntTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return (dart.nullCheck(this.begin) + (dart.nullCheck(this.end) - dart.nullCheck(this.begin)) * t)[$round]();
    }
  };
  (tween.IntTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.IntTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.IntTween.prototype;
  dart.addTypeTests(tween.IntTween);
  dart.addTypeCaches(tween.IntTween);
  dart.setLibraryUri(tween.IntTween, I[6]);
  tween.StepTween = class StepTween extends tween.Tween$(core.int) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new tween.StepTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return (dart.nullCheck(this.begin) + (dart.nullCheck(this.end) - dart.nullCheck(this.begin)) * t)[$floor]();
    }
  };
  (tween.StepTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.StepTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.StepTween.prototype;
  dart.addTypeTests(tween.StepTween);
  dart.addTypeCaches(tween.StepTween);
  dart.setLibraryUri(tween.StepTween, I[6]);
  const _is_ConstantTween_default = Symbol('_is_ConstantTween_default');
  tween.ConstantTween$ = dart.generic(T => {
    class ConstantTween extends tween.Tween$(T) {
      static ['_#new#tearOff'](T, value) {
        return new (tween.ConstantTween$(T)).new(value);
      }
      lerp(t) {
        return T.as(this.begin);
      }
      toString() {
        return object.objectRuntimeType(this, "ConstantTween") + "(value: " + dart.str(this.begin) + ")";
      }
    }
    (ConstantTween.new = function(value) {
      ConstantTween.__proto__.new.call(this, {begin: value, end: value});
      ;
    }).prototype = ConstantTween.prototype;
    dart.addTypeTests(ConstantTween);
    ConstantTween.prototype[_is_ConstantTween_default] = true;
    dart.addTypeCaches(ConstantTween);
    dart.setLibraryUri(ConstantTween, I[6]);
    dart.defineExtensionMethods(ConstantTween, ['toString']);
    return ConstantTween;
  });
  tween.ConstantTween = tween.ConstantTween$();
  dart.addTypeTests(tween.ConstantTween, _is_ConstantTween_default);
  var curve$0 = dart.privateName(tween, "CurveTween.curve");
  tween.CurveTween = class CurveTween extends tween.Animatable$(core.double) {
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      this[curve$0] = value;
    }
    static ['_#new#tearOff'](opts) {
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return new tween.CurveTween.new({curve: curve});
    }
    transform(t) {
      if (t === 0.0 || t === 1.0) {
        if (!(this.curve.transform(t)[$round]() === t)) dart.assertFailed(null, I[7], 532, 14, "curve.transform(t).round() == t");
        return t;
      }
      return this.curve.transform(t);
    }
    toString() {
      return object.objectRuntimeType(this, "CurveTween") + "(curve: " + dart.str(this.curve) + ")";
    }
  };
  (tween.CurveTween.new = function(opts) {
    let curve = opts && 'curve' in opts ? opts.curve : null;
    this[curve$0] = curve;
    if (!(curve !== null)) dart.assertFailed(null, I[7], 524, 14, "curve != null");
    tween.CurveTween.__proto__.new.call(this);
    ;
  }).prototype = tween.CurveTween.prototype;
  dart.addTypeTests(tween.CurveTween);
  dart.addTypeCaches(tween.CurveTween);
  dart.setMethodSignature(tween.CurveTween, () => ({
    __proto__: dart.getMethods(tween.CurveTween.__proto__),
    transform: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(tween.CurveTween, I[6]);
  dart.setFieldSignature(tween.CurveTween, () => ({
    __proto__: dart.getFields(tween.CurveTween.__proto__),
    curve: dart.fieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(tween.CurveTween, ['toString']);
  animation$.AnimationStatus = class AnimationStatus extends core._Enum {
    toString() {
      return "AnimationStatus." + this[_name];
    }
  };
  (animation$.AnimationStatus.new = function(index, name) {
    animation$.AnimationStatus.__proto__.new.call(this, index, name);
    ;
  }).prototype = animation$.AnimationStatus.prototype;
  dart.addTypeTests(animation$.AnimationStatus);
  dart.addTypeCaches(animation$.AnimationStatus);
  dart.setLibraryUri(animation$.AnimationStatus, I[3]);
  dart.setStaticFieldSignature(animation$.AnimationStatus, () => ['values', 'dismissed', 'forward', 'reverse', 'completed']);
  dart.defineExtensionMethods(animation$.AnimationStatus, ['toString']);
  dart.defineLazy(animation$.AnimationStatus, {
    /*animation$.AnimationStatus.values*/get values() {
      return C[9] || CT.C9;
    },
    /*animation$.AnimationStatus.dismissed*/get dismissed() {
      return C[3] || CT.C3;
    },
    /*animation$.AnimationStatus.forward*/get forward() {
      return C[0] || CT.C0;
    },
    /*animation$.AnimationStatus.reverse*/get reverse() {
      return C[1] || CT.C1;
    },
    /*animation$.AnimationStatus.completed*/get completed() {
      return C[2] || CT.C2;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/animation/listener_helpers.dart", {
    "package:flutter/src/animation/listener_helpers.dart": listener_helpers,
    "package:flutter/src/animation/animations.dart": animations,
    "package:flutter/src/animation/tween.dart": tween,
    "package:flutter/src/animation/animation.dart": animation$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["listener_helpers.dart","animation.dart","animations.dart","tween.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/animation/listener_helpers.dart.lib.js"}');
  // Exports:
  return {
    src__animation__listener_helpers: listener_helpers,
    src__animation__animations: animations,
    src__animation__tween: tween,
    src__animation__animation: animation$
  };
}));

//# sourceMappingURL=listener_helpers.dart.lib.js.map
