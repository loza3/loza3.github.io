define(['dart_sdk', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/vector_math/vector_math_64.dart'], (function load__packages__flutter__src__gestures__scale_dart(dart_sdk, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__arena$46dart, packages__vector_math__vector_math_64$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  var scale$ = Object.create(dart.library);
  var $values = dartx.values;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $keys = dartx.keys;
  var $toDouble = dartx.toDouble;
  var $abs = dartx.abs;
  var $isEmpty = dartx.isEmpty;
  var $map = dartx.map;
  var $reduce = dartx.reduce;
  var $clear = dartx.clear;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfint$Offset: () => (T.IdentityMapOfint$Offset = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Offset)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    IdentityMapOfint$VelocityTracker: () => (T.IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, velocity_tracker.VelocityTracker)))(),
    IdentityMapOfint$_PointerPanZoomData: () => (T.IdentityMapOfint$_PointerPanZoomData = dart.constFn(_js_helper.IdentityMap$(core.int, scale$._PointerPanZoomData)))(),
    _PointerPanZoomDataTodouble: () => (T._PointerPanZoomDataTodouble = dart.constFn(dart.fnType(core.double, [scale$._PointerPanZoomData])))(),
    doubleAnddoubleTodouble: () => (T.doubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: scale$._ScaleState.prototype,
        [_Enum__name]: "ready",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: scale$._ScaleState.prototype,
        [_Enum__name]: "possible",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: scale$._ScaleState.prototype,
        [_Enum__name]: "accepted",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: scale$._ScaleState.prototype,
        [_Enum__name]: "started",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], scale$._ScaleState);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [Velocity_pixelsPerSecond]: C[5] || CT.C5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = [
    "package:flutter/src/gestures/scale.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/gestures/scale.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  scale$._ScaleState = class _ScaleState extends core._Enum {
    toString() {
      return "_ScaleState." + this[_name];
    }
  };
  (scale$._ScaleState.new = function(index, name) {
    scale$._ScaleState.__proto__.new.call(this, index, name);
    ;
  }).prototype = scale$._ScaleState.prototype;
  dart.addTypeTests(scale$._ScaleState);
  dart.addTypeCaches(scale$._ScaleState);
  dart.setLibraryUri(scale$._ScaleState, I[0]);
  dart.setStaticFieldSignature(scale$._ScaleState, () => ['values', 'ready', 'possible', 'accepted', 'started']);
  dart.defineExtensionMethods(scale$._ScaleState, ['toString']);
  dart.defineLazy(scale$._ScaleState, {
    /*scale$._ScaleState.values*/get values() {
      return C[0] || CT.C0;
    },
    /*scale$._ScaleState.ready*/get ready() {
      return C[1] || CT.C1;
    },
    /*scale$._ScaleState.possible*/get possible() {
      return C[2] || CT.C2;
    },
    /*scale$._ScaleState.accepted*/get accepted() {
      return C[3] || CT.C3;
    },
    /*scale$._ScaleState.started*/get started() {
      return C[4] || CT.C4;
    }
  }, false);
  scale$._PointerPanZoomData = class _PointerPanZoomData extends core.Object {
    static ['_#new#tearOff'](opts) {
      let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : null;
      let scale = opts && 'scale' in opts ? opts.scale : null;
      let rotation = opts && 'rotation' in opts ? opts.rotation : null;
      return new scale$._PointerPanZoomData.new({focalPoint: focalPoint, scale: scale, rotation: rotation});
    }
    toString() {
      return "_PointerPanZoomData(focalPoint: " + dart.str(this.focalPoint) + ", scale: " + dart.str(this.scale) + ", angle: " + dart.str(this.rotation) + ")";
    }
  };
  (scale$._PointerPanZoomData.new = function(opts) {
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let rotation = opts && 'rotation' in opts ? opts.rotation : null;
    this.focalPoint = focalPoint;
    this.scale = scale;
    this.rotation = rotation;
    ;
  }).prototype = scale$._PointerPanZoomData.prototype;
  dart.addTypeTests(scale$._PointerPanZoomData);
  dart.addTypeCaches(scale$._PointerPanZoomData);
  dart.setLibraryUri(scale$._PointerPanZoomData, I[0]);
  dart.setFieldSignature(scale$._PointerPanZoomData, () => ({
    __proto__: dart.getFields(scale$._PointerPanZoomData.__proto__),
    focalPoint: dart.fieldType(ui.Offset),
    scale: dart.fieldType(core.double),
    rotation: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(scale$._PointerPanZoomData, ['toString']);
  var focalPoint$ = dart.privateName(scale$, "ScaleStartDetails.focalPoint");
  var localFocalPoint$ = dart.privateName(scale$, "ScaleStartDetails.localFocalPoint");
  var pointerCount$ = dart.privateName(scale$, "ScaleStartDetails.pointerCount");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  scale$.ScaleStartDetails = class ScaleStartDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    get pointerCount() {
      return this[pointerCount$];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C[5] || CT.C5;
      let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
      let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
      return new scale$.ScaleStartDetails.new({focalPoint: focalPoint, localFocalPoint: localFocalPoint, pointerCount: pointerCount});
    }
    toString() {
      return "ScaleStartDetails(focalPoint: " + dart.str(this.focalPoint) + ", localFocalPoint: " + dart.str(this.localFocalPoint) + ", pointersCount: " + dart.str(this.pointerCount) + ")";
    }
  };
  (scale$.ScaleStartDetails.new = function(opts) {
    let t2;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C[5] || CT.C5;
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
    this[focalPoint$] = focalPoint;
    this[pointerCount$] = pointerCount;
    if (!(focalPoint !== null)) dart.assertFailed(null, I[1], 58, 14, "focalPoint != null");
    this[localFocalPoint$] = (t2 = localFocalPoint, t2 == null ? focalPoint : t2);
    ;
  }).prototype = scale$.ScaleStartDetails.prototype;
  dart.addTypeTests(scale$.ScaleStartDetails);
  dart.addTypeCaches(scale$.ScaleStartDetails);
  dart.setLibraryUri(scale$.ScaleStartDetails, I[0]);
  dart.setFieldSignature(scale$.ScaleStartDetails, () => ({
    __proto__: dart.getFields(scale$.ScaleStartDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset),
    pointerCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(scale$.ScaleStartDetails, ['toString']);
  var focalPointDelta$ = dart.privateName(scale$, "ScaleUpdateDetails.focalPointDelta");
  var focalPoint$0 = dart.privateName(scale$, "ScaleUpdateDetails.focalPoint");
  var localFocalPoint$0 = dart.privateName(scale$, "ScaleUpdateDetails.localFocalPoint");
  var scale$0 = dart.privateName(scale$, "ScaleUpdateDetails.scale");
  var horizontalScale$ = dart.privateName(scale$, "ScaleUpdateDetails.horizontalScale");
  var verticalScale$ = dart.privateName(scale$, "ScaleUpdateDetails.verticalScale");
  var rotation$ = dart.privateName(scale$, "ScaleUpdateDetails.rotation");
  var pointerCount$0 = dart.privateName(scale$, "ScaleUpdateDetails.pointerCount");
  scale$.ScaleUpdateDetails = class ScaleUpdateDetails extends core.Object {
    get focalPointDelta() {
      return this[focalPointDelta$];
    }
    set focalPointDelta(value) {
      super.focalPointDelta = value;
    }
    get focalPoint() {
      return this[focalPoint$0];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$0];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    get scale() {
      return this[scale$0];
    }
    set scale(value) {
      super.scale = value;
    }
    get horizontalScale() {
      return this[horizontalScale$];
    }
    set horizontalScale(value) {
      super.horizontalScale = value;
    }
    get verticalScale() {
      return this[verticalScale$];
    }
    set verticalScale(value) {
      super.verticalScale = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    get pointerCount() {
      return this[pointerCount$0];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C[5] || CT.C5;
      let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1;
      let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1;
      let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
      let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
      let focalPointDelta = opts && 'focalPointDelta' in opts ? opts.focalPointDelta : C[5] || CT.C5;
      return new scale$.ScaleUpdateDetails.new({focalPoint: focalPoint, localFocalPoint: localFocalPoint, scale: scale, horizontalScale: horizontalScale, verticalScale: verticalScale, rotation: rotation, pointerCount: pointerCount, focalPointDelta: focalPointDelta});
    }
    toString() {
      return "ScaleUpdateDetails(" + "focalPoint: " + dart.str(this.focalPoint) + "," + " localFocalPoint: " + dart.str(this.localFocalPoint) + "," + " scale: " + dart.str(this.scale) + "," + " horizontalScale: " + dart.str(this.horizontalScale) + "," + " verticalScale: " + dart.str(this.verticalScale) + "," + " rotation: " + dart.str(this.rotation) + "," + " pointerCount: " + dart.str(this.pointerCount) + "," + " focalPointDelta: " + dart.str(this.focalPointDelta) + ")";
    }
  };
  (scale$.ScaleUpdateDetails.new = function(opts) {
    let t2;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C[5] || CT.C5;
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1;
    let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
    let focalPointDelta = opts && 'focalPointDelta' in opts ? opts.focalPointDelta : C[5] || CT.C5;
    this[focalPoint$0] = focalPoint;
    this[scale$0] = scale;
    this[horizontalScale$] = horizontalScale;
    this[verticalScale$] = verticalScale;
    this[rotation$] = rotation;
    this[pointerCount$0] = pointerCount;
    this[focalPointDelta$] = focalPointDelta;
    if (!(focalPoint !== null)) dart.assertFailed(null, I[1], 107, 15, "focalPoint != null");
    if (!(focalPointDelta !== null)) dart.assertFailed(null, I[1], 108, 15, "focalPointDelta != null");
    if (!(scale !== null && scale >= 0.0)) dart.assertFailed(null, I[1], 109, 15, "scale != null && scale >= 0.0");
    if (!(horizontalScale !== null && horizontalScale >= 0.0)) dart.assertFailed(null, I[1], 110, 15, "horizontalScale != null && horizontalScale >= 0.0");
    if (!(verticalScale !== null && verticalScale >= 0.0)) dart.assertFailed(null, I[1], 111, 15, "verticalScale != null && verticalScale >= 0.0");
    if (!(rotation !== null)) dart.assertFailed(null, I[1], 112, 15, "rotation != null");
    this[localFocalPoint$0] = (t2 = localFocalPoint, t2 == null ? focalPoint : t2);
    ;
  }).prototype = scale$.ScaleUpdateDetails.prototype;
  dart.addTypeTests(scale$.ScaleUpdateDetails);
  dart.addTypeCaches(scale$.ScaleUpdateDetails);
  dart.setLibraryUri(scale$.ScaleUpdateDetails, I[0]);
  dart.setFieldSignature(scale$.ScaleUpdateDetails, () => ({
    __proto__: dart.getFields(scale$.ScaleUpdateDetails.__proto__),
    focalPointDelta: dart.finalFieldType(ui.Offset),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset),
    scale: dart.finalFieldType(core.double),
    horizontalScale: dart.finalFieldType(core.double),
    verticalScale: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double),
    pointerCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(scale$.ScaleUpdateDetails, ['toString']);
  var velocity$ = dart.privateName(scale$, "ScaleEndDetails.velocity");
  var pointerCount$1 = dart.privateName(scale$, "ScaleEndDetails.pointerCount");
  var Velocity_pixelsPerSecond = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  scale$.ScaleEndDetails = class ScaleEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get pointerCount() {
      return this[pointerCount$1];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let velocity = opts && 'velocity' in opts ? opts.velocity : C[6] || CT.C6;
      let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
      return new scale$.ScaleEndDetails.new({velocity: velocity, pointerCount: pointerCount});
    }
    toString() {
      return "ScaleEndDetails(velocity: " + dart.str(this.velocity) + ", pointerCount: " + dart.str(this.pointerCount) + ")";
    }
  };
  (scale$.ScaleEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C[6] || CT.C6;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
    this[velocity$] = velocity;
    this[pointerCount$1] = pointerCount;
    if (!(velocity !== null)) dart.assertFailed(null, I[1], 205, 14, "velocity != null");
    ;
  }).prototype = scale$.ScaleEndDetails.prototype;
  dart.addTypeTests(scale$.ScaleEndDetails);
  dart.addTypeCaches(scale$.ScaleEndDetails);
  dart.setLibraryUri(scale$.ScaleEndDetails, I[0]);
  dart.setFieldSignature(scale$.ScaleEndDetails, () => ({
    __proto__: dart.getFields(scale$.ScaleEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity),
    pointerCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(scale$.ScaleEndDetails, ['toString']);
  scale$._LineBetweenPointers = class _LineBetweenPointers extends core.Object {
    static ['_#new#tearOff'](opts) {
      let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : C[5] || CT.C5;
      let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
      let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : C[5] || CT.C5;
      let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
      return new scale$._LineBetweenPointers.new({pointerStartLocation: pointerStartLocation, pointerStartId: pointerStartId, pointerEndLocation: pointerEndLocation, pointerEndId: pointerEndId});
    }
  };
  (scale$._LineBetweenPointers.new = function(opts) {
    let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : C[5] || CT.C5;
    let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
    let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : C[5] || CT.C5;
    let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
    this.pointerStartLocation = pointerStartLocation;
    this.pointerStartId = pointerStartId;
    this.pointerEndLocation = pointerEndLocation;
    this.pointerEndId = pointerEndId;
    if (!(pointerStartLocation !== null && pointerEndLocation !== null)) dart.assertFailed(null, I[1], 252, 15, "pointerStartLocation != null && pointerEndLocation != null");
    if (!(pointerStartId !== null && pointerEndId !== null)) dart.assertFailed(null, I[1], 253, 15, "pointerStartId != null && pointerEndId != null");
    if (!(pointerStartId !== pointerEndId)) dart.assertFailed(null, I[1], 254, 15, "pointerStartId != pointerEndId");
    ;
  }).prototype = scale$._LineBetweenPointers.prototype;
  dart.addTypeTests(scale$._LineBetweenPointers);
  dart.addTypeCaches(scale$._LineBetweenPointers);
  dart.setLibraryUri(scale$._LineBetweenPointers, I[0]);
  dart.setFieldSignature(scale$._LineBetweenPointers, () => ({
    __proto__: dart.getFields(scale$._LineBetweenPointers.__proto__),
    pointerStartLocation: dart.finalFieldType(ui.Offset),
    pointerStartId: dart.finalFieldType(core.int),
    pointerEndLocation: dart.finalFieldType(ui.Offset),
    pointerEndId: dart.finalFieldType(core.int)
  }));
  var dragStartBehavior$ = dart.privateName(scale$, "ScaleGestureRecognizer.dragStartBehavior");
  var onStart = dart.privateName(scale$, "ScaleGestureRecognizer.onStart");
  var onUpdate = dart.privateName(scale$, "ScaleGestureRecognizer.onUpdate");
  var onEnd = dart.privateName(scale$, "ScaleGestureRecognizer.onEnd");
  var _state = dart.privateName(scale$, "_state");
  var _lastTransform = dart.privateName(scale$, "_lastTransform");
  var __ScaleGestureRecognizer__initialFocalPoint = dart.privateName(scale$, "_#ScaleGestureRecognizer#_initialFocalPoint");
  var _currentFocalPoint = dart.privateName(scale$, "_currentFocalPoint");
  var __ScaleGestureRecognizer__initialSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_initialSpan");
  var __ScaleGestureRecognizer__currentSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_currentSpan");
  var __ScaleGestureRecognizer__initialHorizontalSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_initialHorizontalSpan");
  var __ScaleGestureRecognizer__currentHorizontalSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_currentHorizontalSpan");
  var __ScaleGestureRecognizer__initialVerticalSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_initialVerticalSpan");
  var __ScaleGestureRecognizer__currentVerticalSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_currentVerticalSpan");
  var __ScaleGestureRecognizer__localFocalPoint = dart.privateName(scale$, "_#ScaleGestureRecognizer#_localFocalPoint");
  var _initialLine = dart.privateName(scale$, "_initialLine");
  var _currentLine = dart.privateName(scale$, "_currentLine");
  var _pointerLocations = dart.privateName(scale$, "_pointerLocations");
  var _pointerQueue = dart.privateName(scale$, "_pointerQueue");
  var _velocityTrackers = dart.privateName(scale$, "_velocityTrackers");
  var __ScaleGestureRecognizer__delta = dart.privateName(scale$, "_#ScaleGestureRecognizer#_delta");
  var _pointerPanZooms = dart.privateName(scale$, "_pointerPanZooms");
  var _initialPanZoomScaleFactor = dart.privateName(scale$, "_initialPanZoomScaleFactor");
  var _initialPanZoomRotationFactor = dart.privateName(scale$, "_initialPanZoomRotationFactor");
  var _initialFocalPoint = dart.privateName(scale$, "_initialFocalPoint");
  var _initialSpan = dart.privateName(scale$, "_initialSpan");
  var _currentSpan = dart.privateName(scale$, "_currentSpan");
  var _initialHorizontalSpan = dart.privateName(scale$, "_initialHorizontalSpan");
  var _currentHorizontalSpan = dart.privateName(scale$, "_currentHorizontalSpan");
  var _initialVerticalSpan = dart.privateName(scale$, "_initialVerticalSpan");
  var _currentVerticalSpan = dart.privateName(scale$, "_currentVerticalSpan");
  var _localFocalPoint = dart.privateName(scale$, "_localFocalPoint");
  var _delta = dart.privateName(scale$, "_delta");
  var _pointerScaleFactor = dart.privateName(scale$, "_pointerScaleFactor");
  var _pointerHorizontalScaleFactor = dart.privateName(scale$, "_pointerHorizontalScaleFactor");
  var _pointerVerticalScaleFactor = dart.privateName(scale$, "_pointerVerticalScaleFactor");
  var _scaleFactor = dart.privateName(scale$, "_scaleFactor");
  var _horizontalScaleFactor = dart.privateName(scale$, "_horizontalScaleFactor");
  var _verticalScaleFactor = dart.privateName(scale$, "_verticalScaleFactor");
  var _pointerCount = dart.privateName(scale$, "_pointerCount");
  var _computeRotationFactor = dart.privateName(scale$, "_computeRotationFactor");
  var _updateLines = dart.privateName(scale$, "_updateLines");
  var _update = dart.privateName(scale$, "_update");
  var _reconfigure = dart.privateName(scale$, "_reconfigure");
  var _advanceStateMachine = dart.privateName(scale$, "_advanceStateMachine");
  var _dispatchOnStartCallbackIfNeeded = dart.privateName(scale$, "_dispatchOnStartCallbackIfNeeded");
  scale$.ScaleGestureRecognizer = class ScaleGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
    }
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
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    static ['_#new#tearOff'](opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[7] || CT.C7;
      return new scale$.ScaleGestureRecognizer.new({debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices, dragStartBehavior: dragStartBehavior});
    }
    set [_initialFocalPoint](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_initialFocalPoint$35param) {
      this[__ScaleGestureRecognizer__initialFocalPoint] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_initialFocalPoint$35param;
    }
    get [_initialFocalPoint]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__initialFocalPoint];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_initialFocalPoint")) : t2;
    }
    get [_initialSpan]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__initialSpan];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_initialSpan")) : t2;
    }
    set [_initialSpan](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_initialSpan$35param) {
      this[__ScaleGestureRecognizer__initialSpan] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_initialSpan$35param;
    }
    get [_currentSpan]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__currentSpan];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_currentSpan")) : t2;
    }
    set [_currentSpan](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_currentSpan$35param) {
      this[__ScaleGestureRecognizer__currentSpan] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_currentSpan$35param;
    }
    get [_initialHorizontalSpan]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__initialHorizontalSpan];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_initialHorizontalSpan")) : t2;
    }
    set [_initialHorizontalSpan](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_initialHorizontalSpan$35param) {
      this[__ScaleGestureRecognizer__initialHorizontalSpan] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_initialHorizontalSpan$35param;
    }
    get [_currentHorizontalSpan]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__currentHorizontalSpan];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_currentHorizontalSpan")) : t2;
    }
    set [_currentHorizontalSpan](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_currentHorizontalSpan$35param) {
      this[__ScaleGestureRecognizer__currentHorizontalSpan] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_currentHorizontalSpan$35param;
    }
    get [_initialVerticalSpan]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__initialVerticalSpan];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_initialVerticalSpan")) : t2;
    }
    set [_initialVerticalSpan](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_initialVerticalSpan$35param) {
      this[__ScaleGestureRecognizer__initialVerticalSpan] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_initialVerticalSpan$35param;
    }
    get [_currentVerticalSpan]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__currentVerticalSpan];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_currentVerticalSpan")) : t2;
    }
    set [_currentVerticalSpan](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_currentVerticalSpan$35param) {
      this[__ScaleGestureRecognizer__currentVerticalSpan] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_currentVerticalSpan$35param;
    }
    get [_localFocalPoint]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__localFocalPoint];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_localFocalPoint")) : t2;
    }
    set [_localFocalPoint](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_localFocalPoint$35param) {
      this[__ScaleGestureRecognizer__localFocalPoint] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_localFocalPoint$35param;
    }
    get [_delta]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__delta];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_delta")) : t2;
    }
    set [_delta](library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_delta$35param) {
      this[__ScaleGestureRecognizer__delta] = library$32package$58flutter$47src$47gestures$47scale$46dart$58$58_delta$35param;
    }
    get [_pointerScaleFactor]() {
      return this[_initialSpan] > 0.0 ? this[_currentSpan] / this[_initialSpan] : 1.0;
    }
    get [_pointerHorizontalScaleFactor]() {
      return this[_initialHorizontalSpan] > 0.0 ? this[_currentHorizontalSpan] / this[_initialHorizontalSpan] : 1.0;
    }
    get [_pointerVerticalScaleFactor]() {
      return this[_initialVerticalSpan] > 0.0 ? this[_currentVerticalSpan] / this[_initialVerticalSpan] : 1.0;
    }
    get [_scaleFactor]() {
      let scale = this[_pointerScaleFactor];
      for (let p of this[_pointerPanZooms][$values]) {
        scale = scale * (p.scale / this[_initialPanZoomScaleFactor]);
      }
      return scale;
    }
    get [_horizontalScaleFactor]() {
      let scale = this[_pointerHorizontalScaleFactor];
      for (let p of this[_pointerPanZooms][$values]) {
        scale = scale * (p.scale / this[_initialPanZoomScaleFactor]);
      }
      return scale;
    }
    get [_verticalScaleFactor]() {
      let scale = this[_pointerVerticalScaleFactor];
      for (let p of this[_pointerPanZooms][$values]) {
        scale = scale * (p.scale / this[_initialPanZoomScaleFactor]);
      }
      return scale;
    }
    get [_pointerCount]() {
      return this[_pointerPanZooms][$length] + this[_pointerQueue][$length];
    }
    [_computeRotationFactor]() {
      let factor = 0.0;
      if (this[_initialLine] != null && this[_currentLine] != null) {
        let fx = dart.nullCheck(this[_initialLine]).pointerStartLocation.dx;
        let fy = dart.nullCheck(this[_initialLine]).pointerStartLocation.dy;
        let sx = dart.nullCheck(this[_initialLine]).pointerEndLocation.dx;
        let sy = dart.nullCheck(this[_initialLine]).pointerEndLocation.dy;
        let nfx = dart.nullCheck(this[_currentLine]).pointerStartLocation.dx;
        let nfy = dart.nullCheck(this[_currentLine]).pointerStartLocation.dy;
        let nsx = dart.nullCheck(this[_currentLine]).pointerEndLocation.dx;
        let nsy = dart.nullCheck(this[_currentLine]).pointerEndLocation.dy;
        let angle1 = math.atan2(fy - sy, fx - sx);
        let angle2 = math.atan2(nfy - nsy, nfx - nsx);
        factor = angle2 - angle1;
      }
      for (let p of this[_pointerPanZooms][$values]) {
        factor = factor + p.rotation;
      }
      factor = factor - this[_initialPanZoomRotationFactor];
      return factor;
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      this[_velocityTrackers][$_set](event.pointer, new velocity_tracker.VelocityTracker.withKind(event.kind));
      if (this[_state] === scale$._ScaleState.ready) {
        this[_state] = scale$._ScaleState.possible;
        this[_initialSpan] = 0.0;
        this[_currentSpan] = 0.0;
        this[_initialHorizontalSpan] = 0.0;
        this[_currentHorizontalSpan] = 0.0;
        this[_initialVerticalSpan] = 0.0;
        this[_currentVerticalSpan] = 0.0;
      }
    }
    isPointerPanZoomAllowed(event) {
      return true;
    }
    addAllowedPointerPanZoom(event) {
      super.addAllowedPointerPanZoom(event);
      this.startTrackingPointer(event.pointer, event.transform);
      this[_velocityTrackers][$_set](event.pointer, new velocity_tracker.VelocityTracker.withKind(event.kind));
      if (this[_state] === scale$._ScaleState.ready) {
        this[_state] = scale$._ScaleState.possible;
        this[_initialPanZoomScaleFactor] = 1.0;
        this[_initialPanZoomRotationFactor] = 0.0;
      }
    }
    handleEvent(event) {
      if (!(this[_state] !== scale$._ScaleState.ready)) dart.assertFailed(null, I[1], 444, 12, "_state != _ScaleState.ready");
      let didChangeConfiguration = false;
      let shouldStartIfAccepted = false;
      if (events.PointerMoveEvent.is(event)) {
        let tracker = dart.nullCheck(this[_velocityTrackers][$_get](event.pointer));
        if (!event.synthesized) {
          tracker.addPosition(event.timeStamp, event.position);
        }
        this[_pointerLocations][$_set](event.pointer, event.position);
        shouldStartIfAccepted = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerDownEvent.is(event)) {
        this[_pointerLocations][$_set](event.pointer, event.position);
        this[_pointerQueue][$add](event.pointer);
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_pointerLocations][$remove](event.pointer);
        this[_pointerQueue][$remove](event.pointer);
        didChangeConfiguration = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerPanZoomStartEvent.is(event)) {
        if (!(this[_pointerPanZooms][$_get](event.pointer) == null)) dart.assertFailed(null, I[1], 467, 14, "_pointerPanZooms[event.pointer] == null");
        this[_pointerPanZooms][$_set](event.pointer, new scale$._PointerPanZoomData.new({focalPoint: event.position, scale: 1.0, rotation: 0.0}));
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
      } else if (events.PointerPanZoomUpdateEvent.is(event)) {
        if (!(this[_pointerPanZooms][$_get](event.pointer) != null)) dart.assertFailed(null, I[1], 476, 14, "_pointerPanZooms[event.pointer] != null");
        if (!event.synthesized) {
          dart.nullCheck(this[_velocityTrackers][$_get](event.pointer)).addPosition(event.timeStamp, event.pan);
        }
        this[_pointerPanZooms][$_set](event.pointer, new scale$._PointerPanZoomData.new({focalPoint: event.position['+'](event.pan), scale: event.scale, rotation: event.rotation}));
        this[_lastTransform] = event.transform;
        shouldStartIfAccepted = true;
      } else if (events.PointerPanZoomEndEvent.is(event)) {
        if (!(this[_pointerPanZooms][$_get](event.pointer) != null)) dart.assertFailed(null, I[1], 488, 14, "_pointerPanZooms[event.pointer] != null");
        this[_pointerPanZooms][$remove](event.pointer);
        didChangeConfiguration = true;
      }
      this[_updateLines]();
      this[_update]();
      if (!didChangeConfiguration || this[_reconfigure](event.pointer)) {
        this[_advanceStateMachine](shouldStartIfAccepted, event.kind);
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    [_update]() {
      let previousFocalPoint = this[_currentFocalPoint];
      let focalPoint = ui.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys]) {
        focalPoint = focalPoint['+'](dart.nullCheck(this[_pointerLocations][$_get](pointer)));
      }
      for (let p of this[_pointerPanZooms][$values]) {
        focalPoint = focalPoint['+'](p.focalPoint);
      }
      this[_currentFocalPoint] = this[_pointerCount] > 0 ? focalPoint['/'](this[_pointerCount][$toDouble]()) : ui.Offset.zero;
      if (previousFocalPoint == null) {
        this[_localFocalPoint] = events.PointerEvent.transformPosition(this[_lastTransform], dart.nullCheck(this[_currentFocalPoint]));
        this[_delta] = ui.Offset.zero;
      } else {
        let localPreviousFocalPoint = this[_localFocalPoint];
        this[_localFocalPoint] = events.PointerEvent.transformPosition(this[_lastTransform], dart.nullCheck(this[_currentFocalPoint]));
        this[_delta] = this[_localFocalPoint]['-'](localPreviousFocalPoint);
      }
      let count = this[_pointerLocations][$keys][$length];
      let pointerFocalPoint = ui.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys]) {
        pointerFocalPoint = pointerFocalPoint['+'](dart.nullCheck(this[_pointerLocations][$_get](pointer)));
      }
      if (count > 0) {
        pointerFocalPoint = pointerFocalPoint['/'](count[$toDouble]());
      }
      let totalDeviation = 0.0;
      let totalHorizontalDeviation = 0.0;
      let totalVerticalDeviation = 0.0;
      for (let pointer of this[_pointerLocations][$keys]) {
        totalDeviation = totalDeviation + pointerFocalPoint['-'](dart.nullCheck(this[_pointerLocations][$_get](pointer))).distance;
        totalHorizontalDeviation = totalHorizontalDeviation + (pointerFocalPoint.dx - dart.nullCheck(this[_pointerLocations][$_get](pointer)).dx)[$abs]();
        totalVerticalDeviation = totalVerticalDeviation + (pointerFocalPoint.dy - dart.nullCheck(this[_pointerLocations][$_get](pointer)).dy)[$abs]();
      }
      this[_currentSpan] = count > 0 ? totalDeviation / count : 0.0;
      this[_currentHorizontalSpan] = count > 0 ? totalHorizontalDeviation / count : 0.0;
      this[_currentVerticalSpan] = count > 0 ? totalVerticalDeviation / count : 0.0;
    }
    [_updateLines]() {
      let count = this[_pointerLocations][$keys][$length];
      if (!(this[_pointerQueue][$length] >= count)) dart.assertFailed(null, I[1], 560, 12, "_pointerQueue.length >= count");
      if (count < 2) {
        this[_initialLine] = this[_currentLine];
      } else if (this[_initialLine] != null && dart.nullCheck(this[_initialLine]).pointerStartId === this[_pointerQueue][$_get](0) && dart.nullCheck(this[_initialLine]).pointerEndId === this[_pointerQueue][$_get](1)) {
        this[_currentLine] = new scale$._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](0))), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](1)))});
      } else {
        this[_initialLine] = new scale$._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](0))), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](1)))});
        this[_currentLine] = this[_initialLine];
      }
    }
    [_reconfigure](pointer) {
      this[_initialFocalPoint] = dart.nullCheck(this[_currentFocalPoint]);
      this[_initialSpan] = this[_currentSpan];
      this[_initialLine] = this[_currentLine];
      this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
      this[_initialVerticalSpan] = this[_currentVerticalSpan];
      if (this[_pointerPanZooms][$isEmpty]) {
        this[_initialPanZoomScaleFactor] = 1.0;
        this[_initialPanZoomRotationFactor] = 0.0;
      } else {
        this[_initialPanZoomScaleFactor] = this[_scaleFactor] / this[_pointerScaleFactor];
        this[_initialPanZoomRotationFactor] = this[_pointerPanZooms][$values][$map](core.double, dart.fn(x => x.rotation, T._PointerPanZoomDataTodouble()))[$reduce](dart.fn((a, b) => a + b, T.doubleAnddoubleTodouble()));
      }
      if (this[_state] === scale$._ScaleState.started) {
        if (this.onEnd != null) {
          let tracker = dart.nullCheck(this[_velocityTrackers][$_get](pointer));
          let velocity = tracker.getVelocity();
          if (scale$._isFlingGesture(velocity)) {
            let pixelsPerSecond = velocity.pixelsPerSecond;
            if (pixelsPerSecond.distanceSquared > 8000 * 8000) {
              velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond['/'](pixelsPerSecond.distance)['*'](8000)});
            }
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(new scale$.ScaleEndDetails.new({velocity: velocity, pointerCount: this[_pointerCount]})), T.VoidTovoid()));
          } else {
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(new scale$.ScaleEndDetails.new({pointerCount: this[_pointerCount]})), T.VoidTovoid()));
          }
        }
        this[_state] = scale$._ScaleState.accepted;
        return false;
      }
      return true;
    }
    [_advanceStateMachine](shouldStartIfAccepted, pointerDeviceKind) {
      if (this[_state] === scale$._ScaleState.ready) {
        this[_state] = scale$._ScaleState.possible;
      }
      if (this[_state] === scale$._ScaleState.possible) {
        let spanDelta = (this[_currentSpan] - this[_initialSpan])[$abs]();
        let focalPointDelta = dart.nullCheck(this[_currentFocalPoint])['-'](this[_initialFocalPoint]).distance;
        if (spanDelta > events.computeScaleSlop(pointerDeviceKind) || focalPointDelta > events.computePanSlop(pointerDeviceKind, this.gestureSettings) || math.max(core.double, this[_scaleFactor] / this[_pointerScaleFactor], this[_pointerScaleFactor] / this[_scaleFactor]) > 1.05) {
          this.resolve(arena.GestureDisposition.accepted);
        }
      } else if (this[_state].index >= scale$._ScaleState.accepted.index) {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (this[_state] === scale$._ScaleState.accepted && shouldStartIfAccepted) {
        this[_state] = scale$._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
      if (this[_state] === scale$._ScaleState.started && this.onUpdate != null) {
        this.invokeCallback(dart.void, "onUpdate", dart.fn(() => {
          dart.nullCheck(this.onUpdate)(new scale$.ScaleUpdateDetails.new({scale: this[_scaleFactor], horizontalScale: this[_horizontalScaleFactor], verticalScale: this[_verticalScaleFactor], focalPoint: dart.nullCheck(this[_currentFocalPoint]), localFocalPoint: this[_localFocalPoint], rotation: this[_computeRotationFactor](), pointerCount: this[_pointerCount], focalPointDelta: this[_delta]}));
        }, T.VoidTovoid()));
      }
    }
    [_dispatchOnStartCallbackIfNeeded]() {
      if (!(this[_state] === scale$._ScaleState.started)) dart.assertFailed(null, I[1], 657, 12, "_state == _ScaleState.started");
      if (this.onStart != null) {
        this.invokeCallback(dart.void, "onStart", dart.fn(() => {
          dart.nullCheck(this.onStart)(new scale$.ScaleStartDetails.new({focalPoint: dart.nullCheck(this[_currentFocalPoint]), localFocalPoint: this[_localFocalPoint], pointerCount: this[_pointerCount]}));
        }, T.VoidTovoid()));
      }
    }
    acceptGesture(pointer) {
      if (this[_state] === scale$._ScaleState.possible) {
        this[_state] = scale$._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
        if (this.dragStartBehavior === recognizer.DragStartBehavior.start) {
          this[_initialFocalPoint] = dart.nullCheck(this[_currentFocalPoint]);
          this[_initialSpan] = this[_currentSpan];
          this[_initialLine] = this[_currentLine];
          this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
          this[_initialVerticalSpan] = this[_currentVerticalSpan];
          if (this[_pointerPanZooms][$isEmpty]) {
            this[_initialPanZoomScaleFactor] = 1.0;
            this[_initialPanZoomRotationFactor] = 0.0;
          } else {
            this[_initialPanZoomScaleFactor] = this[_scaleFactor] / this[_pointerScaleFactor];
            this[_initialPanZoomRotationFactor] = this[_pointerPanZooms][$values][$map](core.double, dart.fn(x => x.rotation, T._PointerPanZoomDataTodouble()))[$reduce](dart.fn((a, b) => a + b, T.doubleAnddoubleTodouble()));
          }
        }
      }
    }
    rejectGesture(pointer) {
      this[_pointerPanZooms][$remove](pointer);
      this[_pointerLocations][$remove](pointer);
      this[_pointerQueue][$remove](pointer);
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      switch (this[_state]) {
        case C[2] || CT.C2:
          {
            this.resolve(arena.GestureDisposition.rejected);
            break;
          }
        case C[1] || CT.C1:
          {
            if (!false) dart.assertFailed(null, I[1], 706, 16, "false");
            break;
          }
        case C[3] || CT.C3:
          {
            break;
          }
        case C[4] || CT.C4:
          {
            if (!false) dart.assertFailed(null, I[1], 711, 16, "false");
            break;
          }
      }
      this[_state] = scale$._ScaleState.ready;
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    get debugDescription() {
      return "scale";
    }
  };
  (scale$.ScaleGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[7] || CT.C7;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[_state] = scale$._ScaleState.ready;
    this[_lastTransform] = null;
    this[__ScaleGestureRecognizer__initialFocalPoint] = null;
    this[_currentFocalPoint] = null;
    this[__ScaleGestureRecognizer__initialSpan] = null;
    this[__ScaleGestureRecognizer__currentSpan] = null;
    this[__ScaleGestureRecognizer__initialHorizontalSpan] = null;
    this[__ScaleGestureRecognizer__currentHorizontalSpan] = null;
    this[__ScaleGestureRecognizer__initialVerticalSpan] = null;
    this[__ScaleGestureRecognizer__currentVerticalSpan] = null;
    this[__ScaleGestureRecognizer__localFocalPoint] = null;
    this[_initialLine] = null;
    this[_currentLine] = null;
    this[_pointerLocations] = new (T.IdentityMapOfint$Offset()).new();
    this[_pointerQueue] = T.JSArrayOfint().of([]);
    this[_velocityTrackers] = new (T.IdentityMapOfint$VelocityTracker()).new();
    this[__ScaleGestureRecognizer__delta] = null;
    this[_pointerPanZooms] = new (T.IdentityMapOfint$_PointerPanZoomData()).new();
    this[_initialPanZoomScaleFactor] = 1.0;
    this[_initialPanZoomRotationFactor] = 0.0;
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(dragStartBehavior !== null)) dart.assertFailed(null, I[1], 287, 15, "dragStartBehavior != null");
    scale$.ScaleGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = scale$.ScaleGestureRecognizer.prototype;
  dart.addTypeTests(scale$.ScaleGestureRecognizer);
  dart.addTypeCaches(scale$.ScaleGestureRecognizer);
  dart.setMethodSignature(scale$.ScaleGestureRecognizer, () => ({
    __proto__: dart.getMethods(scale$.ScaleGestureRecognizer.__proto__),
    [_computeRotationFactor]: dart.fnType(core.double, []),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLines]: dart.fnType(dart.void, []),
    [_reconfigure]: dart.fnType(core.bool, [core.int]),
    [_advanceStateMachine]: dart.fnType(dart.void, [core.bool, ui.PointerDeviceKind]),
    [_dispatchOnStartCallbackIfNeeded]: dart.fnType(dart.void, []),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(scale$.ScaleGestureRecognizer, () => ({
    __proto__: dart.getGetters(scale$.ScaleGestureRecognizer.__proto__),
    [_initialFocalPoint]: ui.Offset,
    [_initialSpan]: core.double,
    [_currentSpan]: core.double,
    [_initialHorizontalSpan]: core.double,
    [_currentHorizontalSpan]: core.double,
    [_initialVerticalSpan]: core.double,
    [_currentVerticalSpan]: core.double,
    [_localFocalPoint]: ui.Offset,
    [_delta]: ui.Offset,
    [_pointerScaleFactor]: core.double,
    [_pointerHorizontalScaleFactor]: core.double,
    [_pointerVerticalScaleFactor]: core.double,
    [_scaleFactor]: core.double,
    [_horizontalScaleFactor]: core.double,
    [_verticalScaleFactor]: core.double,
    [_pointerCount]: core.int,
    debugDescription: core.String
  }));
  dart.setSetterSignature(scale$.ScaleGestureRecognizer, () => ({
    __proto__: dart.getSetters(scale$.ScaleGestureRecognizer.__proto__),
    [_initialFocalPoint]: ui.Offset,
    [_initialSpan]: core.double,
    [_currentSpan]: core.double,
    [_initialHorizontalSpan]: core.double,
    [_currentHorizontalSpan]: core.double,
    [_initialVerticalSpan]: core.double,
    [_currentVerticalSpan]: core.double,
    [_localFocalPoint]: ui.Offset,
    [_delta]: ui.Offset
  }));
  dart.setLibraryUri(scale$.ScaleGestureRecognizer, I[0]);
  dart.setFieldSignature(scale$.ScaleGestureRecognizer, () => ({
    __proto__: dart.getFields(scale$.ScaleGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(recognizer.DragStartBehavior),
    onStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale$.ScaleStartDetails]))),
    onUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale$.ScaleUpdateDetails]))),
    onEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale$.ScaleEndDetails]))),
    [_state]: dart.fieldType(scale$._ScaleState),
    [_lastTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [__ScaleGestureRecognizer__initialFocalPoint]: dart.fieldType(dart.nullable(ui.Offset)),
    [_currentFocalPoint]: dart.fieldType(dart.nullable(ui.Offset)),
    [__ScaleGestureRecognizer__initialSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__initialHorizontalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentHorizontalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__initialVerticalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentVerticalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__localFocalPoint]: dart.fieldType(dart.nullable(ui.Offset)),
    [_initialLine]: dart.fieldType(dart.nullable(scale$._LineBetweenPointers)),
    [_currentLine]: dart.fieldType(dart.nullable(scale$._LineBetweenPointers)),
    [_pointerLocations]: dart.finalFieldType(core.Map$(core.int, ui.Offset)),
    [_pointerQueue]: dart.finalFieldType(core.List$(core.int)),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker)),
    [__ScaleGestureRecognizer__delta]: dart.fieldType(dart.nullable(ui.Offset)),
    [_pointerPanZooms]: dart.finalFieldType(core.Map$(core.int, scale$._PointerPanZoomData)),
    [_initialPanZoomScaleFactor]: dart.fieldType(core.double),
    [_initialPanZoomRotationFactor]: dart.fieldType(core.double)
  }));
  scale$._isFlingGesture = function _isFlingGesture(velocity) {
    if (!(velocity !== null)) dart.assertFailed(null, I[1], 232, 10, "velocity != null");
    let speedSquared = velocity.pixelsPerSecond.distanceSquared;
    return speedSquared > 50 * 50;
  };
  dart.trackLibraries("packages/flutter/src/gestures/scale.dart", {
    "package:flutter/src/gestures/scale.dart": scale$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scale.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/scale.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__scale: scale$
  };
}));

//# sourceMappingURL=scale.dart.lib.js.map