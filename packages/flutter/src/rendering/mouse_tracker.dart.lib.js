define(['dart_sdk', 'packages/flutter/src/services/mouse_tracking.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__rendering__mouse_tracker_dart(dart_sdk, packages__flutter__src__services__mouse_tracking$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mouse_tracking = packages__flutter__src__services__mouse_tracking$46dart.src__services__mouse_tracking;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var mouse_tracker = Object.create(dart.library);
  var $length = dartx.length;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $keys = dartx.keys;
  var $map = dartx.map;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $values = dartx.values;
  var $forEach = dartx.forEach;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $reversed = dartx.reversed;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LinkedMapOfMouseTrackerAnnotation$Matrix4: () => (T.LinkedMapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(_js_helper.LinkedMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)))(),
    DiagnosticsPropertyOfPointerEvent: () => (T.DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))(),
    MapOfMouseTrackerAnnotation$Matrix4: () => (T.MapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(core.Map$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)))(),
    DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4: () => (T.DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(diagnostics.DiagnosticsProperty$(T.MapOfMouseTrackerAnnotation$Matrix4())))(),
    IdentityMapOfint$_MouseState: () => (T.IdentityMapOfint$_MouseState = dart.constFn(_js_helper.IdentityMap$(core.int, mouse_tracker._MouseState)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    MouseTrackerAnnotationToMouseCursor: () => (T.MouseTrackerAnnotationToMouseCursor = dart.constFn(dart.fnType(mouse_cursor.MouseCursor, [mouse_tracking.MouseTrackerAnnotation])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    MouseTrackerAnnotationAndMatrix4Tovoid: () => (T.MouseTrackerAnnotationAndMatrix4Tovoid = dart.constFn(dart.fnType(dart.void, [mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4])))(),
    MouseTrackerAnnotationTobool: () => (T.MouseTrackerAnnotationTobool = dart.constFn(dart.fnType(core.bool, [mouse_tracking.MouseTrackerAnnotation])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/mouse_tracker.dart",
    "package:flutter/src/rendering/mouse_tracker.dart"
  ];
  var _annotations = dart.privateName(mouse_tracker, "_annotations");
  var _latestEvent = dart.privateName(mouse_tracker, "_latestEvent");
  mouse_tracker._MouseState = class _MouseState extends core.Object {
    static ['_#new#tearOff'](opts) {
      let initialEvent = opts && 'initialEvent' in opts ? opts.initialEvent : null;
      return new mouse_tracker._MouseState.new({initialEvent: initialEvent});
    }
    get annotations() {
      return this[_annotations];
    }
    replaceAnnotations(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 43, 12, "value != null");
      let previous = this[_annotations];
      this[_annotations] = value;
      return previous;
    }
    get latestEvent() {
      return this[_latestEvent];
    }
    replaceLatestEvent(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 54, 12, "value != null");
      if (!(value.device === this[_latestEvent].device)) dart.assertFailed(null, I[0], 55, 12, "value.device == _latestEvent.device");
      let previous = this[_latestEvent];
      this[_latestEvent] = value;
      return previous;
    }
    get device() {
      return this.latestEvent.device;
    }
    toString() {
      let describeLatestEvent = "latestEvent: " + diagnostics.describeIdentity(this.latestEvent);
      let describeAnnotations = "annotations: [list of " + dart.str(this.annotations[$length]) + "]";
      return diagnostics.describeIdentity(this) + "(" + describeLatestEvent + ", " + describeAnnotations + ")";
    }
  };
  (mouse_tracker._MouseState.new = function(opts) {
    let initialEvent = opts && 'initialEvent' in opts ? opts.initialEvent : null;
    this[_annotations] = new (T.LinkedMapOfMouseTrackerAnnotation$Matrix4()).new();
    if (!(initialEvent !== null)) dart.assertFailed(null, I[0], 33, 15, "initialEvent != null");
    this[_latestEvent] = initialEvent;
    ;
  }).prototype = mouse_tracker._MouseState.prototype;
  dart.addTypeTests(mouse_tracker._MouseState);
  dart.addTypeCaches(mouse_tracker._MouseState);
  dart.setMethodSignature(mouse_tracker._MouseState, () => ({
    __proto__: dart.getMethods(mouse_tracker._MouseState.__proto__),
    replaceAnnotations: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)]),
    replaceLatestEvent: dart.fnType(events.PointerEvent, [events.PointerEvent])
  }));
  dart.setGetterSignature(mouse_tracker._MouseState, () => ({
    __proto__: dart.getGetters(mouse_tracker._MouseState.__proto__),
    annotations: collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4),
    latestEvent: events.PointerEvent,
    device: core.int
  }));
  dart.setLibraryUri(mouse_tracker._MouseState, I[1]);
  dart.setFieldSignature(mouse_tracker._MouseState, () => ({
    __proto__: dart.getFields(mouse_tracker._MouseState.__proto__),
    [_annotations]: dart.fieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    [_latestEvent]: dart.fieldType(events.PointerEvent)
  }));
  dart.defineExtensionMethods(mouse_tracker._MouseState, ['toString']);
  var lastAnnotations$ = dart.privateName(mouse_tracker, "_MouseTrackerUpdateDetails.lastAnnotations");
  var nextAnnotations$ = dart.privateName(mouse_tracker, "_MouseTrackerUpdateDetails.nextAnnotations");
  var previousEvent$ = dart.privateName(mouse_tracker, "_MouseTrackerUpdateDetails.previousEvent");
  var triggeringEvent$ = dart.privateName(mouse_tracker, "_MouseTrackerUpdateDetails.triggeringEvent");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  mouse_tracker._MouseTrackerUpdateDetails = class _MouseTrackerUpdateDetails extends Object_Diagnosticable$36 {
    get lastAnnotations() {
      return this[lastAnnotations$];
    }
    set lastAnnotations(value) {
      super.lastAnnotations = value;
    }
    get nextAnnotations() {
      return this[nextAnnotations$];
    }
    set nextAnnotations(value) {
      super.nextAnnotations = value;
    }
    get previousEvent() {
      return this[previousEvent$];
    }
    set previousEvent(value) {
      super.previousEvent = value;
    }
    get triggeringEvent() {
      return this[triggeringEvent$];
    }
    set triggeringEvent(value) {
      super.triggeringEvent = value;
    }
    static ['_#byNewFrame#tearOff'](opts) {
      let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
      let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
      let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
      return new mouse_tracker._MouseTrackerUpdateDetails.byNewFrame({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: previousEvent});
    }
    static ['_#byPointerEvent#tearOff'](opts) {
      let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
      let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
      let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
      let triggeringEvent = opts && 'triggeringEvent' in opts ? opts.triggeringEvent : null;
      return new mouse_tracker._MouseTrackerUpdateDetails.byPointerEvent({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: previousEvent, triggeringEvent: triggeringEvent});
    }
    get device() {
      let t0;
      let result = dart.nullCheck((t0 = this.previousEvent, t0 == null ? this.triggeringEvent : t0)).device;
      if (!(result !== null)) dart.assertFailed(null, I[0], 132, 12, "result != null");
      return result;
    }
    get latestEvent() {
      let t0;
      let result = (t0 = this.triggeringEvent, t0 == null ? dart.nullCheck(this.previousEvent) : t0);
      if (!(result !== null)) dart.assertFailed(null, I[0], 141, 12, "result != null");
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("device", this.device));
      properties.add(new (T.DiagnosticsPropertyOfPointerEvent()).new("previousEvent", this.previousEvent));
      properties.add(new (T.DiagnosticsPropertyOfPointerEvent()).new("triggeringEvent", this.triggeringEvent));
      properties.add(new (T.DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4()).new("lastAnnotations", this.lastAnnotations));
      properties.add(new (T.DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4()).new("nextAnnotations", this.nextAnnotations));
    }
  };
  (mouse_tracker._MouseTrackerUpdateDetails.byNewFrame = function(opts) {
    let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
    let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
    let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
    this[lastAnnotations$] = lastAnnotations;
    this[nextAnnotations$] = nextAnnotations;
    this[previousEvent$] = previousEvent;
    if (!(previousEvent !== null)) dart.assertFailed(null, I[0], 86, 15, "previousEvent != null");
    if (!(lastAnnotations !== null)) dart.assertFailed(null, I[0], 87, 15, "lastAnnotations != null");
    if (!(nextAnnotations !== null)) dart.assertFailed(null, I[0], 88, 15, "nextAnnotations != null");
    this[triggeringEvent$] = null;
    ;
  }).prototype = mouse_tracker._MouseTrackerUpdateDetails.prototype;
  (mouse_tracker._MouseTrackerUpdateDetails.byPointerEvent = function(opts) {
    let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
    let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
    let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
    let triggeringEvent = opts && 'triggeringEvent' in opts ? opts.triggeringEvent : null;
    this[lastAnnotations$] = lastAnnotations;
    this[nextAnnotations$] = nextAnnotations;
    this[previousEvent$] = previousEvent;
    this[triggeringEvent$] = triggeringEvent;
    if (!(triggeringEvent !== null)) dart.assertFailed(null, I[0], 100, 15, "triggeringEvent != null");
    if (!(lastAnnotations !== null)) dart.assertFailed(null, I[0], 101, 15, "lastAnnotations != null");
    if (!(nextAnnotations !== null)) dart.assertFailed(null, I[0], 102, 15, "nextAnnotations != null");
    ;
  }).prototype = mouse_tracker._MouseTrackerUpdateDetails.prototype;
  dart.addTypeTests(mouse_tracker._MouseTrackerUpdateDetails);
  dart.addTypeCaches(mouse_tracker._MouseTrackerUpdateDetails);
  dart.setGetterSignature(mouse_tracker._MouseTrackerUpdateDetails, () => ({
    __proto__: dart.getGetters(mouse_tracker._MouseTrackerUpdateDetails.__proto__),
    device: core.int,
    latestEvent: events.PointerEvent
  }));
  dart.setLibraryUri(mouse_tracker._MouseTrackerUpdateDetails, I[1]);
  dart.setFieldSignature(mouse_tracker._MouseTrackerUpdateDetails, () => ({
    __proto__: dart.getFields(mouse_tracker._MouseTrackerUpdateDetails.__proto__),
    lastAnnotations: dart.finalFieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    nextAnnotations: dart.finalFieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    previousEvent: dart.finalFieldType(dart.nullable(events.PointerEvent)),
    triggeringEvent: dart.finalFieldType(dart.nullable(events.PointerEvent))
  }));
  var _mouseCursorMixin = dart.privateName(mouse_tracker, "_mouseCursorMixin");
  var _mouseStates = dart.privateName(mouse_tracker, "_mouseStates");
  var _debugDuringDeviceUpdate = dart.privateName(mouse_tracker, "_debugDuringDeviceUpdate");
  var _monitorMouseConnection = dart.privateName(mouse_tracker, "_monitorMouseConnection");
  var _deviceUpdatePhase = dart.privateName(mouse_tracker, "_deviceUpdatePhase");
  var _hitTestResultToAnnotations = dart.privateName(mouse_tracker, "_hitTestResultToAnnotations");
  var _findAnnotations = dart.privateName(mouse_tracker, "_findAnnotations");
  var _handleDeviceUpdate = dart.privateName(mouse_tracker, "_handleDeviceUpdate");
  mouse_tracker.MouseTracker = class MouseTracker extends change_notifier.ChangeNotifier {
    [_monitorMouseConnection](task) {
      let mouseWasConnected = this.mouseIsConnected;
      task();
      if (mouseWasConnected !== this.mouseIsConnected) {
        this.notifyListeners();
      }
    }
    [_deviceUpdatePhase](task) {
      if (!!this[_debugDuringDeviceUpdate]) dart.assertFailed(null, I[0], 205, 12, "!_debugDuringDeviceUpdate");
      if (!dart.fn(() => {
        this[_debugDuringDeviceUpdate] = true;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 206, 12, "() {\n      _debugDuringDeviceUpdate = true;\n      return true;\n    }()");
      task();
      if (!dart.fn(() => {
        this[_debugDuringDeviceUpdate] = false;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 211, 12, "() {\n      _debugDuringDeviceUpdate = false;\n      return true;\n    }()");
    }
    static _shouldMarkStateDirty(state, event) {
      if (state == null) {
        return true;
      }
      if (!(event !== null)) dart.assertFailed(null, I[0], 222, 12, "event != null");
      let lastEvent = state.latestEvent;
      if (!(event.device === lastEvent.device)) dart.assertFailed(null, I[0], 224, 12, "event.device == lastEvent.device");
      if (!(events.PointerAddedEvent.is(event) === events.PointerRemovedEvent.is(lastEvent))) dart.assertFailed(null, I[0], 227, 12, "(event is PointerAddedEvent) == (lastEvent is PointerRemovedEvent)");
      if (events.PointerSignalEvent.is(event)) {
        return false;
      }
      return events.PointerAddedEvent.is(lastEvent) || events.PointerRemovedEvent.is(event) || !lastEvent.position._equals(event.position);
    }
    [_hitTestResultToAnnotations](result) {
      if (!(result !== null)) dart.assertFailed(null, I[0], 239, 12, "result != null");
      let annotations = new (T.LinkedMapOfMouseTrackerAnnotation$Matrix4()).new();
      for (let entry of result.path) {
        let target = entry.target;
        if (mouse_tracking.MouseTrackerAnnotation.is(target)) {
          annotations[$_set](target, dart.nullCheck(entry.transform));
        }
      }
      return annotations;
    }
    [_findAnnotations](state, hitTest) {
      if (!(state !== null)) dart.assertFailed(null, I[0], 256, 12, "state != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[0], 257, 12, "hitTest != null");
      let globalPosition = state.latestEvent.position;
      let device = state.device;
      if (!this[_mouseStates][$containsKey](device)) {
        return new (T.LinkedMapOfMouseTrackerAnnotation$Matrix4()).new();
      }
      return this[_hitTestResultToAnnotations](hitTest(globalPosition));
    }
    [_handleDeviceUpdate](details) {
      if (!this[_debugDuringDeviceUpdate]) dart.assertFailed(null, I[0], 284, 12, "_debugDuringDeviceUpdate");
      mouse_tracker.MouseTracker._handleDeviceUpdateMouseEvents(details);
      this[_mouseCursorMixin].handleDeviceCursorUpdate(details.device, details.triggeringEvent, details.nextAnnotations[$keys][$map](mouse_cursor.MouseCursor, dart.fn(annotation => annotation.cursor, T.MouseTrackerAnnotationToMouseCursor())));
    }
    get mouseIsConnected() {
      return this[_mouseStates][$isNotEmpty];
    }
    updateWithEvent(event, getResult) {
      if (event.kind !== ui.PointerDeviceKind.mouse) {
        return;
      }
      if (events.PointerSignalEvent.is(event)) {
        return;
      }
      let result = events.PointerRemovedEvent.is(event) ? new hit_test.HitTestResult.new() : getResult();
      let device = event.device;
      let existingState = this[_mouseStates][$_get](device);
      if (!mouse_tracker.MouseTracker._shouldMarkStateDirty(existingState, event)) {
        return;
      }
      this[_monitorMouseConnection](dart.fn(() => {
        this[_deviceUpdatePhase](dart.fn(() => {
          let t0;
          if (existingState == null) {
            if (events.PointerRemovedEvent.is(event)) {
              return;
            }
            this[_mouseStates][$_set](device, new mouse_tracker._MouseState.new({initialEvent: event}));
          } else {
            if (!!events.PointerAddedEvent.is(event)) dart.assertFailed(null, I[0], 332, 18, "event is! PointerAddedEvent");
            if (events.PointerRemovedEvent.is(event)) {
              this[_mouseStates][$remove](event.device);
            }
          }
          let targetState = (t0 = this[_mouseStates][$_get](device), t0 == null ? dart.nullCheck(existingState) : t0);
          let lastEvent = targetState.replaceLatestEvent(event);
          let nextAnnotations = events.PointerRemovedEvent.is(event) ? new (T.LinkedMapOfMouseTrackerAnnotation$Matrix4()).new() : this[_hitTestResultToAnnotations](result);
          let lastAnnotations = targetState.replaceAnnotations(nextAnnotations);
          this[_handleDeviceUpdate](new mouse_tracker._MouseTrackerUpdateDetails.byPointerEvent({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: lastEvent, triggeringEvent: event}));
        }, T.VoidTovoid()));
      }, T.VoidTovoid()));
    }
    updateAllDevices(hitTest) {
      this[_deviceUpdatePhase](dart.fn(() => {
        for (let dirtyState of this[_mouseStates][$values]) {
          let lastEvent = dirtyState.latestEvent;
          let nextAnnotations = this[_findAnnotations](dirtyState, hitTest);
          let lastAnnotations = dirtyState.replaceAnnotations(nextAnnotations);
          this[_handleDeviceUpdate](new mouse_tracker._MouseTrackerUpdateDetails.byNewFrame({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: lastEvent}));
        }
      }, T.VoidTovoid()));
    }
    debugDeviceActiveCursor(device) {
      return this[_mouseCursorMixin].debugDeviceActiveCursor(device);
    }
    static _handleDeviceUpdateMouseEvents(details) {
      let latestEvent = details.latestEvent;
      let lastAnnotations = details.lastAnnotations;
      let nextAnnotations = details.nextAnnotations;
      let baseExitEvent = events.PointerExitEvent.fromMouseEvent(latestEvent);
      lastAnnotations[$forEach](dart.fn((annotation, transform) => {
        if (!nextAnnotations[$containsKey](annotation)) {
          if (annotation.validForMouseTracker && annotation.onExit != null) {
            dart.nullCheck(annotation.onExit)(baseExitEvent.transformed(lastAnnotations[$_get](annotation)));
          }
        }
      }, T.MouseTrackerAnnotationAndMatrix4Tovoid()));
      let enteringAnnotations = nextAnnotations[$keys][$where](dart.fn(annotation => !lastAnnotations[$containsKey](annotation), T.MouseTrackerAnnotationTobool()))[$toList]();
      let baseEnterEvent = events.PointerEnterEvent.fromMouseEvent(latestEvent);
      for (let annotation of enteringAnnotations[$reversed]) {
        if (annotation.validForMouseTracker && annotation.onEnter != null) {
          dart.nullCheck(annotation.onEnter)(baseEnterEvent.transformed(nextAnnotations[$_get](annotation)));
        }
      }
    }
    static ['_#new#tearOff']() {
      return new mouse_tracker.MouseTracker.new();
    }
  };
  (mouse_tracker.MouseTracker.new = function() {
    this[_mouseCursorMixin] = new mouse_cursor.MouseCursorManager.new(mouse_cursor.SystemMouseCursors.basic);
    this[_mouseStates] = new (T.IdentityMapOfint$_MouseState()).new();
    this[_debugDuringDeviceUpdate] = false;
    mouse_tracker.MouseTracker.__proto__.new.call(this);
    ;
  }).prototype = mouse_tracker.MouseTracker.prototype;
  dart.addTypeTests(mouse_tracker.MouseTracker);
  dart.addTypeCaches(mouse_tracker.MouseTracker);
  dart.setMethodSignature(mouse_tracker.MouseTracker, () => ({
    __proto__: dart.getMethods(mouse_tracker.MouseTracker.__proto__),
    [_monitorMouseConnection]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_deviceUpdatePhase]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_hitTestResultToAnnotations]: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [hit_test.HitTestResult]),
    [_findAnnotations]: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [mouse_tracker._MouseState, dart.fnType(hit_test.HitTestResult, [ui.Offset])]),
    [_handleDeviceUpdate]: dart.fnType(dart.void, [mouse_tracker._MouseTrackerUpdateDetails]),
    updateWithEvent: dart.fnType(dart.void, [events.PointerEvent, dart.fnType(hit_test.HitTestResult, [])]),
    updateAllDevices: dart.fnType(dart.void, [dart.fnType(hit_test.HitTestResult, [ui.Offset])]),
    debugDeviceActiveCursor: dart.fnType(dart.nullable(mouse_cursor.MouseCursor), [core.int])
  }));
  dart.setStaticMethodSignature(mouse_tracker.MouseTracker, () => ['_shouldMarkStateDirty', '_handleDeviceUpdateMouseEvents']);
  dart.setGetterSignature(mouse_tracker.MouseTracker, () => ({
    __proto__: dart.getGetters(mouse_tracker.MouseTracker.__proto__),
    mouseIsConnected: core.bool
  }));
  dart.setLibraryUri(mouse_tracker.MouseTracker, I[1]);
  dart.setFieldSignature(mouse_tracker.MouseTracker, () => ({
    __proto__: dart.getFields(mouse_tracker.MouseTracker.__proto__),
    [_mouseCursorMixin]: dart.finalFieldType(mouse_cursor.MouseCursorManager),
    [_mouseStates]: dart.finalFieldType(core.Map$(core.int, mouse_tracker._MouseState)),
    [_debugDuringDeviceUpdate]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/mouse_tracker.dart", {
    "package:flutter/src/rendering/mouse_tracker.dart": mouse_tracker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mouse_tracker.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/mouse_tracker.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__mouse_tracker: mouse_tracker
  };
}));

//# sourceMappingURL=mouse_tracker.dart.lib.js.map
