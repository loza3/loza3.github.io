define(['dart_sdk', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/gestures/constants.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/recognizer.dart'], (function load__packages__flutter__src__gestures__long_press_dart(dart_sdk, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__gestures__constants$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__recognizer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const constants = packages__flutter__src__gestures__constants$46dart.src__gestures__constants;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  var long_press = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
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
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [Velocity_pixelsPerSecond]: C[0] || CT.C0
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/gestures/long_press.dart",
    "package:flutter/src/gestures/long_press.dart"
  ];
  var globalPosition$ = dart.privateName(long_press, "LongPressDownDetails.globalPosition");
  var kind$ = dart.privateName(long_press, "LongPressDownDetails.kind");
  var localPosition$ = dart.privateName(long_press, "LongPressDownDetails.localPosition");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  long_press.LongPressDownDetails = class LongPressDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      return new long_press.LongPressDownDetails.new({globalPosition: globalPosition, localPosition: localPosition, kind: kind});
    }
  };
  (long_press.LongPressDownDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[globalPosition$] = globalPosition;
    this[kind$] = kind;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[0], 118, 15, "globalPosition != null");
    this[localPosition$] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = long_press.LongPressDownDetails.prototype;
  dart.addTypeTests(long_press.LongPressDownDetails);
  dart.addTypeCaches(long_press.LongPressDownDetails);
  dart.setLibraryUri(long_press.LongPressDownDetails, I[1]);
  dart.setFieldSignature(long_press.LongPressDownDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(dart.nullable(ui.PointerDeviceKind)),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  var globalPosition$0 = dart.privateName(long_press, "LongPressStartDetails.globalPosition");
  var localPosition$0 = dart.privateName(long_press, "LongPressStartDetails.localPosition");
  long_press.LongPressStartDetails = class LongPressStartDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$0];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      return new long_press.LongPressStartDetails.new({globalPosition: globalPosition, localPosition: localPosition});
    }
  };
  (long_press.LongPressStartDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$0] = globalPosition;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[0], 145, 15, "globalPosition != null");
    this[localPosition$0] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = long_press.LongPressStartDetails.prototype;
  dart.addTypeTests(long_press.LongPressStartDetails);
  dart.addTypeCaches(long_press.LongPressStartDetails);
  dart.setLibraryUri(long_press.LongPressStartDetails, I[1]);
  dart.setFieldSignature(long_press.LongPressStartDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressStartDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  var globalPosition$1 = dart.privateName(long_press, "LongPressMoveUpdateDetails.globalPosition");
  var localPosition$1 = dart.privateName(long_press, "LongPressMoveUpdateDetails.localPosition");
  var offsetFromOrigin$ = dart.privateName(long_press, "LongPressMoveUpdateDetails.offsetFromOrigin");
  var localOffsetFromOrigin$ = dart.privateName(long_press, "LongPressMoveUpdateDetails.localOffsetFromOrigin");
  long_press.LongPressMoveUpdateDetails = class LongPressMoveUpdateDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$1];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get offsetFromOrigin() {
      return this[offsetFromOrigin$];
    }
    set offsetFromOrigin(value) {
      super.offsetFromOrigin = value;
    }
    get localOffsetFromOrigin() {
      return this[localOffsetFromOrigin$];
    }
    set localOffsetFromOrigin(value) {
      super.localOffsetFromOrigin = value;
    }
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let offsetFromOrigin = opts && 'offsetFromOrigin' in opts ? opts.offsetFromOrigin : C[0] || CT.C0;
      let localOffsetFromOrigin = opts && 'localOffsetFromOrigin' in opts ? opts.localOffsetFromOrigin : null;
      return new long_press.LongPressMoveUpdateDetails.new({globalPosition: globalPosition, localPosition: localPosition, offsetFromOrigin: offsetFromOrigin, localOffsetFromOrigin: localOffsetFromOrigin});
    }
  };
  (long_press.LongPressMoveUpdateDetails.new = function(opts) {
    let t0, t0$;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let offsetFromOrigin = opts && 'offsetFromOrigin' in opts ? opts.offsetFromOrigin : C[0] || CT.C0;
    let localOffsetFromOrigin = opts && 'localOffsetFromOrigin' in opts ? opts.localOffsetFromOrigin : null;
    this[globalPosition$1] = globalPosition;
    this[offsetFromOrigin$] = offsetFromOrigin;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[0], 171, 15, "globalPosition != null");
    if (!(offsetFromOrigin !== null)) dart.assertFailed(null, I[0], 172, 15, "offsetFromOrigin != null");
    this[localPosition$1] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    this[localOffsetFromOrigin$] = (t0$ = localOffsetFromOrigin, t0$ == null ? offsetFromOrigin : t0$);
    ;
  }).prototype = long_press.LongPressMoveUpdateDetails.prototype;
  dart.addTypeTests(long_press.LongPressMoveUpdateDetails);
  dart.addTypeCaches(long_press.LongPressMoveUpdateDetails);
  dart.setLibraryUri(long_press.LongPressMoveUpdateDetails, I[1]);
  dart.setFieldSignature(long_press.LongPressMoveUpdateDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressMoveUpdateDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    offsetFromOrigin: dart.finalFieldType(ui.Offset),
    localOffsetFromOrigin: dart.finalFieldType(ui.Offset)
  }));
  var globalPosition$2 = dart.privateName(long_press, "LongPressEndDetails.globalPosition");
  var localPosition$2 = dart.privateName(long_press, "LongPressEndDetails.localPosition");
  var velocity$ = dart.privateName(long_press, "LongPressEndDetails.velocity");
  var Velocity_pixelsPerSecond = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  long_press.LongPressEndDetails = class LongPressEndDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$2];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$2];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let velocity = opts && 'velocity' in opts ? opts.velocity : C[1] || CT.C1;
      return new long_press.LongPressEndDetails.new({globalPosition: globalPosition, localPosition: localPosition, velocity: velocity});
    }
  };
  (long_press.LongPressEndDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : C[1] || CT.C1;
    this[globalPosition$2] = globalPosition;
    this[velocity$] = velocity;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[0], 208, 15, "globalPosition != null");
    this[localPosition$2] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = long_press.LongPressEndDetails.prototype;
  dart.addTypeTests(long_press.LongPressEndDetails);
  dart.addTypeCaches(long_press.LongPressEndDetails);
  dart.setLibraryUri(long_press.LongPressEndDetails, I[1]);
  dart.setFieldSignature(long_press.LongPressEndDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressEndDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    velocity: dart.finalFieldType(velocity_tracker.Velocity)
  }));
  var onLongPressDown = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressDown");
  var onLongPressCancel = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressCancel");
  var onLongPress = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPress");
  var onLongPressStart = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressStart");
  var onLongPressMoveUpdate = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressMoveUpdate");
  var onLongPressUp = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressUp");
  var onLongPressEnd = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressEnd");
  var onSecondaryLongPressDown = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressDown");
  var onSecondaryLongPressCancel = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressCancel");
  var onSecondaryLongPress = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPress");
  var onSecondaryLongPressStart = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressStart");
  var onSecondaryLongPressMoveUpdate = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressMoveUpdate");
  var onSecondaryLongPressUp = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressUp");
  var onSecondaryLongPressEnd = dart.privateName(long_press, "LongPressGestureRecognizer.onSecondaryLongPressEnd");
  var onTertiaryLongPressDown = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressDown");
  var onTertiaryLongPressCancel = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressCancel");
  var onTertiaryLongPress = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPress");
  var onTertiaryLongPressStart = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressStart");
  var onTertiaryLongPressMoveUpdate = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressMoveUpdate");
  var onTertiaryLongPressUp = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressUp");
  var onTertiaryLongPressEnd = dart.privateName(long_press, "LongPressGestureRecognizer.onTertiaryLongPressEnd");
  var _longPressAccepted = dart.privateName(long_press, "_longPressAccepted");
  var _longPressOrigin = dart.privateName(long_press, "_longPressOrigin");
  var _initialButtons = dart.privateName(long_press, "_initialButtons");
  var _velocityTracker = dart.privateName(long_press, "_velocityTracker");
  var _checkLongPressStart = dart.privateName(long_press, "_checkLongPressStart");
  var _checkLongPressEnd = dart.privateName(long_press, "_checkLongPressEnd");
  var _reset = dart.privateName(long_press, "_reset");
  var _checkLongPressCancel = dart.privateName(long_press, "_checkLongPressCancel");
  var _checkLongPressDown = dart.privateName(long_press, "_checkLongPressDown");
  var _checkLongPressMoveUpdate = dart.privateName(long_press, "_checkLongPressMoveUpdate");
  long_press.LongPressGestureRecognizer = class LongPressGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    get onLongPressDown() {
      return this[onLongPressDown];
    }
    set onLongPressDown(value) {
      this[onLongPressDown] = value;
    }
    get onLongPressCancel() {
      return this[onLongPressCancel];
    }
    set onLongPressCancel(value) {
      this[onLongPressCancel] = value;
    }
    get onLongPress() {
      return this[onLongPress];
    }
    set onLongPress(value) {
      this[onLongPress] = value;
    }
    get onLongPressStart() {
      return this[onLongPressStart];
    }
    set onLongPressStart(value) {
      this[onLongPressStart] = value;
    }
    get onLongPressMoveUpdate() {
      return this[onLongPressMoveUpdate];
    }
    set onLongPressMoveUpdate(value) {
      this[onLongPressMoveUpdate] = value;
    }
    get onLongPressUp() {
      return this[onLongPressUp];
    }
    set onLongPressUp(value) {
      this[onLongPressUp] = value;
    }
    get onLongPressEnd() {
      return this[onLongPressEnd];
    }
    set onLongPressEnd(value) {
      this[onLongPressEnd] = value;
    }
    get onSecondaryLongPressDown() {
      return this[onSecondaryLongPressDown];
    }
    set onSecondaryLongPressDown(value) {
      this[onSecondaryLongPressDown] = value;
    }
    get onSecondaryLongPressCancel() {
      return this[onSecondaryLongPressCancel];
    }
    set onSecondaryLongPressCancel(value) {
      this[onSecondaryLongPressCancel] = value;
    }
    get onSecondaryLongPress() {
      return this[onSecondaryLongPress];
    }
    set onSecondaryLongPress(value) {
      this[onSecondaryLongPress] = value;
    }
    get onSecondaryLongPressStart() {
      return this[onSecondaryLongPressStart];
    }
    set onSecondaryLongPressStart(value) {
      this[onSecondaryLongPressStart] = value;
    }
    get onSecondaryLongPressMoveUpdate() {
      return this[onSecondaryLongPressMoveUpdate];
    }
    set onSecondaryLongPressMoveUpdate(value) {
      this[onSecondaryLongPressMoveUpdate] = value;
    }
    get onSecondaryLongPressUp() {
      return this[onSecondaryLongPressUp];
    }
    set onSecondaryLongPressUp(value) {
      this[onSecondaryLongPressUp] = value;
    }
    get onSecondaryLongPressEnd() {
      return this[onSecondaryLongPressEnd];
    }
    set onSecondaryLongPressEnd(value) {
      this[onSecondaryLongPressEnd] = value;
    }
    get onTertiaryLongPressDown() {
      return this[onTertiaryLongPressDown];
    }
    set onTertiaryLongPressDown(value) {
      this[onTertiaryLongPressDown] = value;
    }
    get onTertiaryLongPressCancel() {
      return this[onTertiaryLongPressCancel];
    }
    set onTertiaryLongPressCancel(value) {
      this[onTertiaryLongPressCancel] = value;
    }
    get onTertiaryLongPress() {
      return this[onTertiaryLongPress];
    }
    set onTertiaryLongPress(value) {
      this[onTertiaryLongPress] = value;
    }
    get onTertiaryLongPressStart() {
      return this[onTertiaryLongPressStart];
    }
    set onTertiaryLongPressStart(value) {
      this[onTertiaryLongPressStart] = value;
    }
    get onTertiaryLongPressMoveUpdate() {
      return this[onTertiaryLongPressMoveUpdate];
    }
    set onTertiaryLongPressMoveUpdate(value) {
      this[onTertiaryLongPressMoveUpdate] = value;
    }
    get onTertiaryLongPressUp() {
      return this[onTertiaryLongPressUp];
    }
    set onTertiaryLongPressUp(value) {
      this[onTertiaryLongPressUp] = value;
    }
    get onTertiaryLongPressEnd() {
      return this[onTertiaryLongPressEnd];
    }
    set onTertiaryLongPressEnd(value) {
      this[onTertiaryLongPressEnd] = value;
    }
    static ['_#new#tearOff'](opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      return new long_press.LongPressGestureRecognizer.new({duration: duration, postAcceptSlopTolerance: postAcceptSlopTolerance, kind: kind, supportedDevices: supportedDevices, debugOwner: debugOwner});
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
          {
            if (this.onLongPressDown == null && this.onLongPressCancel == null && this.onLongPressStart == null && this.onLongPress == null && this.onLongPressMoveUpdate == null && this.onLongPressEnd == null && this.onLongPressUp == null) {
              return false;
            }
            break;
          }
        case 2:
          {
            if (this.onSecondaryLongPressDown == null && this.onSecondaryLongPressCancel == null && this.onSecondaryLongPressStart == null && this.onSecondaryLongPress == null && this.onSecondaryLongPressMoveUpdate == null && this.onSecondaryLongPressEnd == null && this.onSecondaryLongPressUp == null) {
              return false;
            }
            break;
          }
        case 4:
          {
            if (this.onTertiaryLongPressDown == null && this.onTertiaryLongPressCancel == null && this.onTertiaryLongPressStart == null && this.onTertiaryLongPress == null && this.onTertiaryLongPressMoveUpdate == null && this.onTertiaryLongPressEnd == null && this.onTertiaryLongPressUp == null) {
              return false;
            }
            break;
          }
        default:
          {
            return false;
          }
      }
      return super.isPointerAllowed(event);
    }
    didExceedDeadline() {
      this.resolve(arena.GestureDisposition.accepted);
      this[_longPressAccepted] = true;
      super.acceptGesture(dart.nullCheck(this.primaryPointer));
      this[_checkLongPressStart]();
    }
    handlePrimaryPointer(event) {
      if (!event.synthesized) {
        if (events.PointerDownEvent.is(event)) {
          this[_velocityTracker] = new velocity_tracker.VelocityTracker.withKind(event.kind);
          dart.nullCheck(this[_velocityTracker]).addPosition(event.timeStamp, event.localPosition);
        }
        if (events.PointerMoveEvent.is(event)) {
          if (!(this[_velocityTracker] != null)) dart.assertFailed(null, I[0], 631, 16, "_velocityTracker != null");
          dart.nullCheck(this[_velocityTracker]).addPosition(event.timeStamp, event.localPosition);
        }
      }
      if (events.PointerUpEvent.is(event)) {
        if (this[_longPressAccepted] === true) {
          this[_checkLongPressEnd](event);
        } else {
          this.resolve(arena.GestureDisposition.rejected);
        }
        this[_reset]();
      } else if (events.PointerCancelEvent.is(event)) {
        this[_checkLongPressCancel]();
        this[_reset]();
      } else if (events.PointerDownEvent.is(event)) {
        this[_longPressOrigin] = recognizer.OffsetPair.fromEventPosition(event);
        this[_initialButtons] = event.buttons;
        this[_checkLongPressDown](event);
      } else if (events.PointerMoveEvent.is(event)) {
        if (event.buttons !== this[_initialButtons]) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(dart.nullCheck(this.primaryPointer));
        } else if (this[_longPressAccepted]) {
          this[_checkLongPressMoveUpdate](event);
        }
      }
    }
    [_checkLongPressDown](event) {
      if (!(this[_longPressOrigin] != null)) dart.assertFailed(null, I[0], 663, 12, "_longPressOrigin != null");
      let details = new long_press.LongPressDownDetails.new({globalPosition: dart.nullCheck(this[_longPressOrigin]).global, localPosition: dart.nullCheck(this[_longPressOrigin]).local, kind: this.getKindForPointer(event.pointer)});
      switch (this[_initialButtons]) {
        case 1:
          {
            if (this.onLongPressDown != null) {
              this.invokeCallback(dart.void, "onLongPressDown", dart.fn(() => dart.nullCheck(this.onLongPressDown)(details), T.VoidTovoid()));
            }
            break;
          }
        case 2:
          {
            if (this.onSecondaryLongPressDown != null) {
              this.invokeCallback(dart.void, "onSecondaryLongPressDown", dart.fn(() => dart.nullCheck(this.onSecondaryLongPressDown)(details), T.VoidTovoid()));
            }
            break;
          }
        case 4:
          {
            if (this.onTertiaryLongPressDown != null) {
              this.invokeCallback(dart.void, "onTertiaryLongPressDown", dart.fn(() => dart.nullCheck(this.onTertiaryLongPressDown)(details), T.VoidTovoid()));
            }
            break;
          }
        default:
          {
            if (!false) dart.assertFailed("Unhandled button " + dart.str(this[_initialButtons]), I[0], 686, 16, "false");
          }
      }
    }
    [_checkLongPressCancel]() {
      if (this.state === recognizer.GestureRecognizerState.possible) {
        switch (this[_initialButtons]) {
          case 1:
            {
              if (this.onLongPressCancel != null) {
                this.invokeCallback(dart.void, "onLongPressCancel", dart.nullCheck(this.onLongPressCancel));
              }
              break;
            }
          case 2:
            {
              if (this.onSecondaryLongPressCancel != null) {
                this.invokeCallback(dart.void, "onSecondaryLongPressCancel", dart.nullCheck(this.onSecondaryLongPressCancel));
              }
              break;
            }
          case 4:
            {
              if (this.onTertiaryLongPressCancel != null) {
                this.invokeCallback(dart.void, "onTertiaryLongPressCancel", dart.nullCheck(this.onTertiaryLongPressCancel));
              }
              break;
            }
          default:
            {
              if (!false) dart.assertFailed("Unhandled button " + dart.str(this[_initialButtons]), I[0], 709, 18, "false");
            }
        }
      }
    }
    [_checkLongPressStart]() {
      switch (this[_initialButtons]) {
        case 1:
          {
            if (this.onLongPressStart != null) {
              let details = new long_press.LongPressStartDetails.new({globalPosition: dart.nullCheck(this[_longPressOrigin]).global, localPosition: dart.nullCheck(this[_longPressOrigin]).local});
              this.invokeCallback(dart.void, "onLongPressStart", dart.fn(() => dart.nullCheck(this.onLongPressStart)(details), T.VoidTovoid()));
            }
            if (this.onLongPress != null) {
              this.invokeCallback(dart.void, "onLongPress", dart.nullCheck(this.onLongPress));
            }
            break;
          }
        case 2:
          {
            if (this.onSecondaryLongPressStart != null) {
              let details = new long_press.LongPressStartDetails.new({globalPosition: dart.nullCheck(this[_longPressOrigin]).global, localPosition: dart.nullCheck(this[_longPressOrigin]).local});
              this.invokeCallback(dart.void, "onSecondaryLongPressStart", dart.fn(() => dart.nullCheck(this.onSecondaryLongPressStart)(details), T.VoidTovoid()));
            }
            if (this.onSecondaryLongPress != null) {
              this.invokeCallback(dart.void, "onSecondaryLongPress", dart.nullCheck(this.onSecondaryLongPress));
            }
            break;
          }
        case 4:
          {
            if (this.onTertiaryLongPressStart != null) {
              let details = new long_press.LongPressStartDetails.new({globalPosition: dart.nullCheck(this[_longPressOrigin]).global, localPosition: dart.nullCheck(this[_longPressOrigin]).local});
              this.invokeCallback(dart.void, "onTertiaryLongPressStart", dart.fn(() => dart.nullCheck(this.onTertiaryLongPressStart)(details), T.VoidTovoid()));
            }
            if (this.onTertiaryLongPress != null) {
              this.invokeCallback(dart.void, "onTertiaryLongPress", dart.nullCheck(this.onTertiaryLongPress));
            }
            break;
          }
        default:
          {
            if (!false) dart.assertFailed("Unhandled button " + dart.str(this[_initialButtons]), I[0], 753, 16, "false");
          }
      }
    }
    [_checkLongPressMoveUpdate](event) {
      let details = new long_press.LongPressMoveUpdateDetails.new({globalPosition: event.position, localPosition: event.localPosition, offsetFromOrigin: event.position['-'](dart.nullCheck(this[_longPressOrigin]).global), localOffsetFromOrigin: event.localPosition['-'](dart.nullCheck(this[_longPressOrigin]).local)});
      switch (this[_initialButtons]) {
        case 1:
          {
            if (this.onLongPressMoveUpdate != null) {
              this.invokeCallback(dart.void, "onLongPressMoveUpdate", dart.fn(() => dart.nullCheck(this.onLongPressMoveUpdate)(details), T.VoidTovoid()));
            }
            break;
          }
        case 2:
          {
            if (this.onSecondaryLongPressMoveUpdate != null) {
              this.invokeCallback(dart.void, "onSecondaryLongPressMoveUpdate", dart.fn(() => dart.nullCheck(this.onSecondaryLongPressMoveUpdate)(details), T.VoidTovoid()));
            }
            break;
          }
        case 4:
          {
            if (this.onTertiaryLongPressMoveUpdate != null) {
              this.invokeCallback(dart.void, "onTertiaryLongPressMoveUpdate", dart.fn(() => dart.nullCheck(this.onTertiaryLongPressMoveUpdate)(details), T.VoidTovoid()));
            }
            break;
          }
        default:
          {
            if (!false) dart.assertFailed("Unhandled button " + dart.str(this[_initialButtons]), I[0], 781, 16, "false");
          }
      }
    }
    [_checkLongPressEnd](event) {
      let estimate = dart.nullCheck(this[_velocityTracker]).getVelocityEstimate();
      let velocity = estimate == null ? velocity_tracker.Velocity.zero : new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
      let details = new long_press.LongPressEndDetails.new({globalPosition: event.position, localPosition: event.localPosition, velocity: velocity});
      this[_velocityTracker] = null;
      switch (this[_initialButtons]) {
        case 1:
          {
            if (this.onLongPressEnd != null) {
              this.invokeCallback(dart.void, "onLongPressEnd", dart.fn(() => dart.nullCheck(this.onLongPressEnd)(details), T.VoidTovoid()));
            }
            if (this.onLongPressUp != null) {
              this.invokeCallback(dart.void, "onLongPressUp", dart.nullCheck(this.onLongPressUp));
            }
            break;
          }
        case 2:
          {
            if (this.onSecondaryLongPressEnd != null) {
              this.invokeCallback(dart.void, "onSecondaryLongPressEnd", dart.fn(() => dart.nullCheck(this.onSecondaryLongPressEnd)(details), T.VoidTovoid()));
            }
            if (this.onSecondaryLongPressUp != null) {
              this.invokeCallback(dart.void, "onSecondaryLongPressUp", dart.nullCheck(this.onSecondaryLongPressUp));
            }
            break;
          }
        case 4:
          {
            if (this.onTertiaryLongPressEnd != null) {
              this.invokeCallback(dart.void, "onTertiaryLongPressEnd", dart.fn(() => dart.nullCheck(this.onTertiaryLongPressEnd)(details), T.VoidTovoid()));
            }
            if (this.onTertiaryLongPressUp != null) {
              this.invokeCallback(dart.void, "onTertiaryLongPressUp", dart.nullCheck(this.onTertiaryLongPressUp));
            }
            break;
          }
        default:
          {
            if (!false) dart.assertFailed("Unhandled button " + dart.str(this[_initialButtons]), I[0], 823, 16, "false");
          }
      }
    }
    [_reset]() {
      this[_longPressAccepted] = false;
      this[_longPressOrigin] = null;
      this[_initialButtons] = null;
      this[_velocityTracker] = null;
    }
    resolve(disposition) {
      if (disposition === arena.GestureDisposition.rejected) {
        if (this[_longPressAccepted]) {
          this[_reset]();
        } else {
          this[_checkLongPressCancel]();
        }
      }
      super.resolve(disposition);
    }
    acceptGesture(pointer) {
    }
    get debugDescription() {
      return "long press";
    }
  };
  (long_press.LongPressGestureRecognizer.new = function(opts) {
    let t0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_longPressAccepted] = false;
    this[_longPressOrigin] = null;
    this[_initialButtons] = null;
    this[onLongPressDown] = null;
    this[onLongPressCancel] = null;
    this[onLongPress] = null;
    this[onLongPressStart] = null;
    this[onLongPressMoveUpdate] = null;
    this[onLongPressUp] = null;
    this[onLongPressEnd] = null;
    this[onSecondaryLongPressDown] = null;
    this[onSecondaryLongPressCancel] = null;
    this[onSecondaryLongPress] = null;
    this[onSecondaryLongPressStart] = null;
    this[onSecondaryLongPressMoveUpdate] = null;
    this[onSecondaryLongPressUp] = null;
    this[onSecondaryLongPressEnd] = null;
    this[onTertiaryLongPressDown] = null;
    this[onTertiaryLongPressCancel] = null;
    this[onTertiaryLongPress] = null;
    this[onTertiaryLongPressStart] = null;
    this[onTertiaryLongPressMoveUpdate] = null;
    this[onTertiaryLongPressUp] = null;
    this[onTertiaryLongPressEnd] = null;
    this[_velocityTracker] = null;
    long_press.LongPressGestureRecognizer.__proto__.new.call(this, {deadline: (t0 = duration, t0 == null ? constants.kLongPressTimeout : t0), postAcceptSlopTolerance: postAcceptSlopTolerance, kind: kind, supportedDevices: supportedDevices, debugOwner: debugOwner});
    ;
  }).prototype = long_press.LongPressGestureRecognizer.prototype;
  dart.addTypeTests(long_press.LongPressGestureRecognizer);
  dart.addTypeCaches(long_press.LongPressGestureRecognizer);
  dart.setMethodSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getMethods(long_press.LongPressGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressDown]: dart.fnType(dart.void, [events.PointerDownEvent]),
    [_checkLongPressCancel]: dart.fnType(dart.void, []),
    [_checkLongPressStart]: dart.fnType(dart.void, []),
    [_checkLongPressMoveUpdate]: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressEnd]: dart.fnType(dart.void, [events.PointerEvent]),
    [_reset]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getGetters(long_press.LongPressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(long_press.LongPressGestureRecognizer, I[1]);
  dart.setFieldSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getFields(long_press.LongPressGestureRecognizer.__proto__),
    [_longPressAccepted]: dart.fieldType(core.bool),
    [_longPressOrigin]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [_initialButtons]: dart.fieldType(dart.nullable(core.int)),
    onLongPressDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressDownDetails]))),
    onLongPressCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onLongPress: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onLongPressStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressStartDetails]))),
    onLongPressMoveUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails]))),
    onLongPressUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onLongPressEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressEndDetails]))),
    onSecondaryLongPressDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressDownDetails]))),
    onSecondaryLongPressCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSecondaryLongPress: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSecondaryLongPressStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressStartDetails]))),
    onSecondaryLongPressMoveUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails]))),
    onSecondaryLongPressUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSecondaryLongPressEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressEndDetails]))),
    onTertiaryLongPressDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressDownDetails]))),
    onTertiaryLongPressCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onTertiaryLongPress: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onTertiaryLongPressStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressStartDetails]))),
    onTertiaryLongPressMoveUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails]))),
    onTertiaryLongPressUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onTertiaryLongPressEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [long_press.LongPressEndDetails]))),
    [_velocityTracker]: dart.fieldType(dart.nullable(velocity_tracker.VelocityTracker))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/long_press.dart", {
    "package:flutter/src/gestures/long_press.dart": long_press
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["long_press.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/long_press.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__long_press: long_press
  };
}));

//# sourceMappingURL=long_press.dart.lib.js.map