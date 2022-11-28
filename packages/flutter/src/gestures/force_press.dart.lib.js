define(['dart_sdk', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/foundation/math.dart'], (function load__packages__flutter__src__gestures__force_press_dart(dart_sdk, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__foundation__math$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  var force_press = Object.create(dart.library);
  var $isNaN = dartx.isNaN;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    doubleAnddoubleAnddoubleTodouble: () => (T.doubleAnddoubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double, core.double])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_Enum__name]: "ready",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_Enum__name]: "possible",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_Enum__name]: "accepted",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_Enum__name]: "started",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_Enum__name]: "peaked",
        [_Enum_index]: 4
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5], force_press._ForceState);
    },
    get C6() {
      return C[6] = dart.fn(force_press.ForcePressGestureRecognizer._inverseLerp, T.doubleAnddoubleAnddoubleTodouble());
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "package:flutter/src/gestures/force_press.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/gestures/force_press.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  force_press._ForceState = class _ForceState extends core._Enum {
    toString() {
      return "_ForceState." + this[_name];
    }
  };
  (force_press._ForceState.new = function(index, name) {
    force_press._ForceState.__proto__.new.call(this, index, name);
    ;
  }).prototype = force_press._ForceState.prototype;
  dart.addTypeTests(force_press._ForceState);
  dart.addTypeCaches(force_press._ForceState);
  dart.setLibraryUri(force_press._ForceState, I[0]);
  dart.setStaticFieldSignature(force_press._ForceState, () => ['values', 'ready', 'possible', 'accepted', 'started', 'peaked']);
  dart.defineExtensionMethods(force_press._ForceState, ['toString']);
  dart.defineLazy(force_press._ForceState, {
    /*force_press._ForceState.values*/get values() {
      return C[0] || CT.C0;
    },
    /*force_press._ForceState.ready*/get ready() {
      return C[1] || CT.C1;
    },
    /*force_press._ForceState.possible*/get possible() {
      return C[2] || CT.C2;
    },
    /*force_press._ForceState.accepted*/get accepted() {
      return C[3] || CT.C3;
    },
    /*force_press._ForceState.started*/get started() {
      return C[4] || CT.C4;
    },
    /*force_press._ForceState.peaked*/get peaked() {
      return C[5] || CT.C5;
    }
  }, false);
  var globalPosition$ = dart.privateName(force_press, "ForcePressDetails.globalPosition");
  var localPosition$ = dart.privateName(force_press, "ForcePressDetails.localPosition");
  var pressure$ = dart.privateName(force_press, "ForcePressDetails.pressure");
  force_press.ForcePressDetails = class ForcePressDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      return new force_press.ForcePressDetails.new({globalPosition: globalPosition, localPosition: localPosition, pressure: pressure});
    }
  };
  (force_press.ForcePressDetails.new = function(opts) {
    let t2;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    this[globalPosition$] = globalPosition;
    this[pressure$] = pressure;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[1], 55, 15, "globalPosition != null");
    if (!(pressure !== null)) dart.assertFailed(null, I[1], 56, 15, "pressure != null");
    this[localPosition$] = (t2 = localPosition, t2 == null ? globalPosition : t2);
    ;
  }).prototype = force_press.ForcePressDetails.prototype;
  dart.addTypeTests(force_press.ForcePressDetails);
  dart.addTypeCaches(force_press.ForcePressDetails);
  dart.setLibraryUri(force_press.ForcePressDetails, I[0]);
  dart.setFieldSignature(force_press.ForcePressDetails, () => ({
    __proto__: dart.getFields(force_press.ForcePressDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    pressure: dart.finalFieldType(core.double)
  }));
  var onStart = dart.privateName(force_press, "ForcePressGestureRecognizer.onStart");
  var onUpdate = dart.privateName(force_press, "ForcePressGestureRecognizer.onUpdate");
  var onPeak = dart.privateName(force_press, "ForcePressGestureRecognizer.onPeak");
  var onEnd = dart.privateName(force_press, "ForcePressGestureRecognizer.onEnd");
  var startPressure$ = dart.privateName(force_press, "ForcePressGestureRecognizer.startPressure");
  var peakPressure$ = dart.privateName(force_press, "ForcePressGestureRecognizer.peakPressure");
  var interpolation$ = dart.privateName(force_press, "ForcePressGestureRecognizer.interpolation");
  var __ForcePressGestureRecognizer__lastPosition = dart.privateName(force_press, "_#ForcePressGestureRecognizer#_lastPosition");
  var __ForcePressGestureRecognizer__lastPressure = dart.privateName(force_press, "_#ForcePressGestureRecognizer#_lastPressure");
  var _state = dart.privateName(force_press, "_state");
  var _lastPosition = dart.privateName(force_press, "_lastPosition");
  var _lastPressure = dart.privateName(force_press, "_lastPressure");
  force_press.ForcePressGestureRecognizer = class ForcePressGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onPeak() {
      return this[onPeak];
    }
    set onPeak(value) {
      this[onPeak] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get startPressure() {
      return this[startPressure$];
    }
    set startPressure(value) {
      super.startPressure = value;
    }
    get peakPressure() {
      return this[peakPressure$];
    }
    set peakPressure(value) {
      super.peakPressure = value;
    }
    get interpolation() {
      return this[interpolation$];
    }
    set interpolation(value) {
      super.interpolation = value;
    }
    static ['_#new#tearOff'](opts) {
      let startPressure = opts && 'startPressure' in opts ? opts.startPressure : 0.4;
      let peakPressure = opts && 'peakPressure' in opts ? opts.peakPressure : 0.85;
      let interpolation = opts && 'interpolation' in opts ? opts.interpolation : C[6] || CT.C6;
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      return new force_press.ForcePressGestureRecognizer.new({startPressure: startPressure, peakPressure: peakPressure, interpolation: interpolation, debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    }
    get [_lastPosition]() {
      let t2;
      t2 = this[__ForcePressGestureRecognizer__lastPosition];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_lastPosition")) : t2;
    }
    set [_lastPosition](library$32package$58flutter$47src$47gestures$47force_press$46dart$58$58_lastPosition$35param) {
      this[__ForcePressGestureRecognizer__lastPosition] = library$32package$58flutter$47src$47gestures$47force_press$46dart$58$58_lastPosition$35param;
    }
    get [_lastPressure]() {
      let t2;
      t2 = this[__ForcePressGestureRecognizer__lastPressure];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_lastPressure")) : t2;
    }
    set [_lastPressure](library$32package$58flutter$47src$47gestures$47force_press$46dart$58$58_lastPressure$35param) {
      this[__ForcePressGestureRecognizer__lastPressure] = library$32package$58flutter$47src$47gestures$47force_press$46dart$58$58_lastPressure$35param;
    }
    addAllowedPointer(event) {
      if (event.pressureMax <= 1.0) {
        this.resolve(arena.GestureDisposition.rejected);
      } else {
        super.addAllowedPointer(event);
        if (this[_state] === force_press._ForceState.ready) {
          this[_state] = force_press._ForceState.possible;
          this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
        }
      }
    }
    handleEvent(event) {
      let t4, t3, t2;
      if (!(this[_state] !== force_press._ForceState.ready)) dart.assertFailed(null, I[1], 236, 12, "_state != _ForceState.ready");
      if (events.PointerMoveEvent.is(event) || events.PointerDownEvent.is(event)) {
        let pressure = (t2 = event.pressureMin, t3 = event.pressureMax, t4 = event.pressure, this.interpolation(t2, t3, t4));
        if (!(pressure >= 0.0 && pressure <= 1.0 || pressure[$isNaN])) dart.assertFailed(null, I[1], 241, 9, "(pressure >= 0.0 && pressure <= 1.0) || // Interpolated pressure must be between 1.0 and 0.0...\n        pressure.isNaN");
        this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
        this[_lastPressure] = pressure;
        if (this[_state] === force_press._ForceState.possible) {
          if (pressure > this.startPressure) {
            this[_state] = force_press._ForceState.started;
            this.resolve(arena.GestureDisposition.accepted);
          } else if (event.delta.distanceSquared > events.computeHitSlop(event.kind, this.gestureSettings)) {
            this.resolve(arena.GestureDisposition.rejected);
          }
        }
        if (pressure > this.startPressure && this[_state] === force_press._ForceState.accepted) {
          this[_state] = force_press._ForceState.started;
          if (this.onStart != null) {
            this.invokeCallback(dart.void, "onStart", dart.fn(() => dart.nullCheck(this.onStart)(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), T.VoidTovoid()));
          }
        }
        if (this.onPeak != null && pressure > this.peakPressure && this[_state] === force_press._ForceState.started) {
          this[_state] = force_press._ForceState.peaked;
          if (this.onPeak != null) {
            this.invokeCallback(dart.void, "onPeak", dart.fn(() => dart.nullCheck(this.onPeak)(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position, localPosition: event.localPosition})), T.VoidTovoid()));
          }
        }
        if (this.onUpdate != null && !pressure[$isNaN] && (this[_state] === force_press._ForceState.started || this[_state] === force_press._ForceState.peaked)) {
          if (this.onUpdate != null) {
            this.invokeCallback(dart.void, "onUpdate", dart.fn(() => dart.nullCheck(this.onUpdate)(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position, localPosition: event.localPosition})), T.VoidTovoid()));
          }
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (this[_state] === force_press._ForceState.possible) {
        this[_state] = force_press._ForceState.accepted;
      }
      if (this.onStart != null && this[_state] === force_press._ForceState.started) {
        this.invokeCallback(dart.void, "onStart", dart.fn(() => dart.nullCheck(this.onStart)(new force_press.ForcePressDetails.new({pressure: this[_lastPressure], globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), T.VoidTovoid()));
      }
    }
    didStopTrackingLastPointer(pointer) {
      let wasAccepted = this[_state] === force_press._ForceState.started || this[_state] === force_press._ForceState.peaked;
      if (this[_state] === force_press._ForceState.possible) {
        this.resolve(arena.GestureDisposition.rejected);
        return;
      }
      if (wasAccepted && this.onEnd != null) {
        if (this.onEnd != null) {
          this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(new force_press.ForcePressDetails.new({pressure: 0.0, globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), T.VoidTovoid()));
        }
      }
      this[_state] = force_press._ForceState.ready;
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
      this.didStopTrackingLastPointer(pointer);
    }
    static _inverseLerp(min, max, t) {
      if (!(min <= max)) dart.assertFailed(null, I[1], 334, 12, "min <= max");
      let value = (t - min) / (max - min);
      if (!value[$isNaN]) {
        value = math.clampDouble(value, 0.0, 1.0);
      }
      return value;
    }
    get debugDescription() {
      return "force press";
    }
  };
  (force_press.ForcePressGestureRecognizer.new = function(opts) {
    let startPressure = opts && 'startPressure' in opts ? opts.startPressure : 0.4;
    let peakPressure = opts && 'peakPressure' in opts ? opts.peakPressure : 0.85;
    let interpolation = opts && 'interpolation' in opts ? opts.interpolation : C[6] || CT.C6;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onPeak] = null;
    this[onEnd] = null;
    this[__ForcePressGestureRecognizer__lastPosition] = null;
    this[__ForcePressGestureRecognizer__lastPressure] = null;
    this[_state] = force_press._ForceState.ready;
    this[startPressure$] = startPressure;
    this[peakPressure$] = peakPressure;
    this[interpolation$] = interpolation;
    if (!(startPressure !== null)) dart.assertFailed(null, I[1], 136, 15, "startPressure != null");
    if (!(peakPressure !== null)) dart.assertFailed(null, I[1], 137, 15, "peakPressure != null");
    if (!(interpolation !== null)) dart.assertFailed(null, I[1], 138, 15, "interpolation != null");
    if (!(peakPressure > startPressure)) dart.assertFailed(null, I[1], 139, 15, "peakPressure > startPressure");
    force_press.ForcePressGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = force_press.ForcePressGestureRecognizer.prototype;
  dart.addTypeTests(force_press.ForcePressGestureRecognizer);
  dart.addTypeCaches(force_press.ForcePressGestureRecognizer);
  dart.setMethodSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getMethods(force_press.ForcePressGestureRecognizer.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(force_press.ForcePressGestureRecognizer, () => ['_inverseLerp']);
  dart.setGetterSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getGetters(force_press.ForcePressGestureRecognizer.__proto__),
    [_lastPosition]: recognizer.OffsetPair,
    [_lastPressure]: core.double,
    debugDescription: core.String
  }));
  dart.setSetterSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getSetters(force_press.ForcePressGestureRecognizer.__proto__),
    [_lastPosition]: recognizer.OffsetPair,
    [_lastPressure]: core.double
  }));
  dart.setLibraryUri(force_press.ForcePressGestureRecognizer, I[0]);
  dart.setFieldSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getFields(force_press.ForcePressGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [force_press.ForcePressDetails]))),
    onUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [force_press.ForcePressDetails]))),
    onPeak: dart.fieldType(dart.nullable(dart.fnType(dart.void, [force_press.ForcePressDetails]))),
    onEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [force_press.ForcePressDetails]))),
    startPressure: dart.finalFieldType(core.double),
    peakPressure: dart.finalFieldType(core.double),
    interpolation: dart.finalFieldType(dart.fnType(core.double, [core.double, core.double, core.double])),
    [__ForcePressGestureRecognizer__lastPosition]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [__ForcePressGestureRecognizer__lastPressure]: dart.fieldType(dart.nullable(core.double)),
    [_state]: dart.fieldType(force_press._ForceState)
  }));
  dart.trackLibraries("packages/flutter/src/gestures/force_press.dart", {
    "package:flutter/src/gestures/force_press.dart": force_press
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["force_press.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/force_press.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__force_press: force_press
  };
}));

//# sourceMappingURL=force_press.dart.lib.js.map
