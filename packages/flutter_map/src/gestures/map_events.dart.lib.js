define(['dart_sdk', 'packages/latlong2/latlong.dart'], (function load__packages__flutter_map__src__gestures__map_events_dart(dart_sdk, packages__latlong2__latlong$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  var map_events = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "mapController",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "tap",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "longPress",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "doubleTap",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "doubleTapHold",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "dragStart",
        [_Enum_index]: 5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "onDrag",
        [_Enum_index]: 6
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "dragEnd",
        [_Enum_index]: 7
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "multiFingerGestureStart",
        [_Enum_index]: 8
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "onMultiFinger",
        [_Enum_index]: 9
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "multiFingerEnd",
        [_Enum_index]: 10
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "flingAnimationController",
        [_Enum_index]: 11
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "doubleTapZoomAnimationController",
        [_Enum_index]: 12
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "interactiveFlagsChanged",
        [_Enum_index]: 13
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "fitBounds",
        [_Enum_index]: 14
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "initialization",
        [_Enum_index]: 15
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "custom",
        [_Enum_index]: 16
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: map_events.MapEventSource.prototype,
        [_Enum__name]: "scrollWheel",
        [_Enum_index]: 17
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17, C[18] || CT.C18], map_events.MapEventSource);
    }
  }, false);
  var C = Array(19).fill(void 0);
  var I = ["package:flutter_map/src/gestures/map_events.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  map_events.MapEventSource = class MapEventSource extends core._Enum {
    toString() {
      return "MapEventSource." + this[_name];
    }
  };
  (map_events.MapEventSource.new = function(index, name) {
    map_events.MapEventSource.__proto__.new.call(this, index, name);
    ;
  }).prototype = map_events.MapEventSource.prototype;
  dart.addTypeTests(map_events.MapEventSource);
  dart.addTypeCaches(map_events.MapEventSource);
  dart.setLibraryUri(map_events.MapEventSource, I[0]);
  dart.setStaticFieldSignature(map_events.MapEventSource, () => ['values', 'mapController', 'tap', 'longPress', 'doubleTap', 'doubleTapHold', 'dragStart', 'onDrag', 'dragEnd', 'multiFingerGestureStart', 'onMultiFinger', 'multiFingerEnd', 'flingAnimationController', 'doubleTapZoomAnimationController', 'interactiveFlagsChanged', 'fitBounds', 'initialization', 'custom', 'scrollWheel']);
  dart.defineExtensionMethods(map_events.MapEventSource, ['toString']);
  dart.defineLazy(map_events.MapEventSource, {
    /*map_events.MapEventSource.values*/get values() {
      return C[0] || CT.C0;
    },
    /*map_events.MapEventSource.mapController*/get mapController() {
      return C[1] || CT.C1;
    },
    /*map_events.MapEventSource.tap*/get tap() {
      return C[2] || CT.C2;
    },
    /*map_events.MapEventSource.longPress*/get longPress() {
      return C[3] || CT.C3;
    },
    /*map_events.MapEventSource.doubleTap*/get doubleTap() {
      return C[4] || CT.C4;
    },
    /*map_events.MapEventSource.doubleTapHold*/get doubleTapHold() {
      return C[5] || CT.C5;
    },
    /*map_events.MapEventSource.dragStart*/get dragStart() {
      return C[6] || CT.C6;
    },
    /*map_events.MapEventSource.onDrag*/get onDrag() {
      return C[7] || CT.C7;
    },
    /*map_events.MapEventSource.dragEnd*/get dragEnd() {
      return C[8] || CT.C8;
    },
    /*map_events.MapEventSource.multiFingerGestureStart*/get multiFingerGestureStart() {
      return C[9] || CT.C9;
    },
    /*map_events.MapEventSource.onMultiFinger*/get onMultiFinger() {
      return C[10] || CT.C10;
    },
    /*map_events.MapEventSource.multiFingerEnd*/get multiFingerEnd() {
      return C[11] || CT.C11;
    },
    /*map_events.MapEventSource.flingAnimationController*/get flingAnimationController() {
      return C[12] || CT.C12;
    },
    /*map_events.MapEventSource.doubleTapZoomAnimationController*/get doubleTapZoomAnimationController() {
      return C[13] || CT.C13;
    },
    /*map_events.MapEventSource.interactiveFlagsChanged*/get interactiveFlagsChanged() {
      return C[14] || CT.C14;
    },
    /*map_events.MapEventSource.fitBounds*/get fitBounds() {
      return C[15] || CT.C15;
    },
    /*map_events.MapEventSource.initialization*/get initialization() {
      return C[16] || CT.C16;
    },
    /*map_events.MapEventSource.custom*/get custom() {
      return C[17] || CT.C17;
    },
    /*map_events.MapEventSource.scrollWheel*/get scrollWheel() {
      return C[18] || CT.C18;
    }
  }, false);
  var source$ = dart.privateName(map_events, "MapEvent.source");
  var center$ = dart.privateName(map_events, "MapEvent.center");
  var zoom$ = dart.privateName(map_events, "MapEvent.zoom");
  map_events.MapEvent = class MapEvent extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get zoom() {
      return this[zoom$];
    }
    set zoom(value) {
      super.zoom = value;
    }
  };
  (map_events.MapEvent.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    this[source$] = source;
    this[center$] = center;
    this[zoom$] = zoom;
    ;
  }).prototype = map_events.MapEvent.prototype;
  dart.addTypeTests(map_events.MapEvent);
  dart.addTypeCaches(map_events.MapEvent);
  dart.setLibraryUri(map_events.MapEvent, I[0]);
  dart.setFieldSignature(map_events.MapEvent, () => ({
    __proto__: dart.getFields(map_events.MapEvent.__proto__),
    source: dart.finalFieldType(map_events.MapEventSource),
    center: dart.finalFieldType(latlong.LatLng),
    zoom: dart.finalFieldType(core.double)
  }));
  var targetCenter$ = dart.privateName(map_events, "MapEventWithMove.targetCenter");
  var targetZoom$ = dart.privateName(map_events, "MapEventWithMove.targetZoom");
  map_events.MapEventWithMove = class MapEventWithMove extends map_events.MapEvent {
    get targetCenter() {
      return this[targetCenter$];
    }
    set targetCenter(value) {
      super.targetCenter = value;
    }
    get targetZoom() {
      return this[targetZoom$];
    }
    set targetZoom(value) {
      super.targetZoom = value;
    }
  };
  (map_events.MapEventWithMove.new = function(opts) {
    let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
    let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    this[targetCenter$] = targetCenter;
    this[targetZoom$] = targetZoom;
    map_events.MapEventWithMove.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventWithMove.prototype;
  dart.addTypeTests(map_events.MapEventWithMove);
  dart.addTypeCaches(map_events.MapEventWithMove);
  dart.setLibraryUri(map_events.MapEventWithMove, I[0]);
  dart.setFieldSignature(map_events.MapEventWithMove, () => ({
    __proto__: dart.getFields(map_events.MapEventWithMove.__proto__),
    targetCenter: dart.finalFieldType(latlong.LatLng),
    targetZoom: dart.finalFieldType(core.double)
  }));
  var tapPosition$ = dart.privateName(map_events, "MapEventTap.tapPosition");
  map_events.MapEventTap = class MapEventTap extends map_events.MapEvent {
    get tapPosition() {
      return this[tapPosition$];
    }
    set tapPosition(value) {
      super.tapPosition = value;
    }
    static ['_#new#tearOff'](opts) {
      let tapPosition = opts && 'tapPosition' in opts ? opts.tapPosition : null;
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventTap.new({tapPosition: tapPosition, source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventTap.new = function(opts) {
    let tapPosition = opts && 'tapPosition' in opts ? opts.tapPosition : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    this[tapPosition$] = tapPosition;
    map_events.MapEventTap.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventTap.prototype;
  dart.addTypeTests(map_events.MapEventTap);
  dart.addTypeCaches(map_events.MapEventTap);
  dart.setLibraryUri(map_events.MapEventTap, I[0]);
  dart.setFieldSignature(map_events.MapEventTap, () => ({
    __proto__: dart.getFields(map_events.MapEventTap.__proto__),
    tapPosition: dart.finalFieldType(latlong.LatLng)
  }));
  var tapPosition$0 = dart.privateName(map_events, "MapEventLongPress.tapPosition");
  map_events.MapEventLongPress = class MapEventLongPress extends map_events.MapEvent {
    get tapPosition() {
      return this[tapPosition$0];
    }
    set tapPosition(value) {
      super.tapPosition = value;
    }
    static ['_#new#tearOff'](opts) {
      let tapPosition = opts && 'tapPosition' in opts ? opts.tapPosition : null;
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventLongPress.new({tapPosition: tapPosition, source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventLongPress.new = function(opts) {
    let tapPosition = opts && 'tapPosition' in opts ? opts.tapPosition : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    this[tapPosition$0] = tapPosition;
    map_events.MapEventLongPress.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventLongPress.prototype;
  dart.addTypeTests(map_events.MapEventLongPress);
  dart.addTypeCaches(map_events.MapEventLongPress);
  dart.setLibraryUri(map_events.MapEventLongPress, I[0]);
  dart.setFieldSignature(map_events.MapEventLongPress, () => ({
    __proto__: dart.getFields(map_events.MapEventLongPress.__proto__),
    tapPosition: dart.finalFieldType(latlong.LatLng)
  }));
  var id$ = dart.privateName(map_events, "MapEventMove.id");
  map_events.MapEventMove = class MapEventMove extends map_events.MapEventWithMove {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    static ['_#new#tearOff'](opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
      let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventMove.new({id: id, targetCenter: targetCenter, targetZoom: targetZoom, source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventMove.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
    let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    this[id$] = id;
    map_events.MapEventMove.__proto__.new.call(this, {targetCenter: targetCenter, targetZoom: targetZoom, source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventMove.prototype;
  dart.addTypeTests(map_events.MapEventMove);
  dart.addTypeCaches(map_events.MapEventMove);
  dart.setLibraryUri(map_events.MapEventMove, I[0]);
  dart.setFieldSignature(map_events.MapEventMove, () => ({
    __proto__: dart.getFields(map_events.MapEventMove.__proto__),
    id: dart.finalFieldType(dart.nullable(core.String))
  }));
  map_events.MapEventMoveStart = class MapEventMoveStart extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventMoveStart.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventMoveStart.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventMoveStart.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventMoveStart.prototype;
  dart.addTypeTests(map_events.MapEventMoveStart);
  dart.addTypeCaches(map_events.MapEventMoveStart);
  dart.setLibraryUri(map_events.MapEventMoveStart, I[0]);
  map_events.MapEventMoveEnd = class MapEventMoveEnd extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventMoveEnd.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventMoveEnd.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventMoveEnd.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventMoveEnd.prototype;
  dart.addTypeTests(map_events.MapEventMoveEnd);
  dart.addTypeCaches(map_events.MapEventMoveEnd);
  dart.setLibraryUri(map_events.MapEventMoveEnd, I[0]);
  map_events.MapEventFlingAnimation = class MapEventFlingAnimation extends map_events.MapEventWithMove {
    static ['_#new#tearOff'](opts) {
      let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
      let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventFlingAnimation.new({targetCenter: targetCenter, targetZoom: targetZoom, source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventFlingAnimation.new = function(opts) {
    let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
    let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventFlingAnimation.__proto__.new.call(this, {targetCenter: targetCenter, targetZoom: targetZoom, source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventFlingAnimation.prototype;
  dart.addTypeTests(map_events.MapEventFlingAnimation);
  dart.addTypeCaches(map_events.MapEventFlingAnimation);
  dart.setLibraryUri(map_events.MapEventFlingAnimation, I[0]);
  map_events.MapEventFlingAnimationNotStarted = class MapEventFlingAnimationNotStarted extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventFlingAnimationNotStarted.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventFlingAnimationNotStarted.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventFlingAnimationNotStarted.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventFlingAnimationNotStarted.prototype;
  dart.addTypeTests(map_events.MapEventFlingAnimationNotStarted);
  dart.addTypeCaches(map_events.MapEventFlingAnimationNotStarted);
  dart.setLibraryUri(map_events.MapEventFlingAnimationNotStarted, I[0]);
  map_events.MapEventFlingAnimationStart = class MapEventFlingAnimationStart extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventFlingAnimationStart.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventFlingAnimationStart.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventFlingAnimationStart.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventFlingAnimationStart.prototype;
  dart.addTypeTests(map_events.MapEventFlingAnimationStart);
  dart.addTypeCaches(map_events.MapEventFlingAnimationStart);
  dart.setLibraryUri(map_events.MapEventFlingAnimationStart, I[0]);
  map_events.MapEventFlingAnimationEnd = class MapEventFlingAnimationEnd extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventFlingAnimationEnd.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventFlingAnimationEnd.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventFlingAnimationEnd.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventFlingAnimationEnd.prototype;
  dart.addTypeTests(map_events.MapEventFlingAnimationEnd);
  dart.addTypeCaches(map_events.MapEventFlingAnimationEnd);
  dart.setLibraryUri(map_events.MapEventFlingAnimationEnd, I[0]);
  map_events.MapEventDoubleTapZoom = class MapEventDoubleTapZoom extends map_events.MapEventWithMove {
    static ['_#new#tearOff'](opts) {
      let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
      let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventDoubleTapZoom.new({targetCenter: targetCenter, targetZoom: targetZoom, source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventDoubleTapZoom.new = function(opts) {
    let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
    let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventDoubleTapZoom.__proto__.new.call(this, {targetCenter: targetCenter, targetZoom: targetZoom, source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventDoubleTapZoom.prototype;
  dart.addTypeTests(map_events.MapEventDoubleTapZoom);
  dart.addTypeCaches(map_events.MapEventDoubleTapZoom);
  dart.setLibraryUri(map_events.MapEventDoubleTapZoom, I[0]);
  map_events.MapEventScrollWheelZoom = class MapEventScrollWheelZoom extends map_events.MapEventWithMove {
    static ['_#new#tearOff'](opts) {
      let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
      let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventScrollWheelZoom.new({targetCenter: targetCenter, targetZoom: targetZoom, source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventScrollWheelZoom.new = function(opts) {
    let targetCenter = opts && 'targetCenter' in opts ? opts.targetCenter : null;
    let targetZoom = opts && 'targetZoom' in opts ? opts.targetZoom : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventScrollWheelZoom.__proto__.new.call(this, {targetCenter: targetCenter, targetZoom: targetZoom, source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventScrollWheelZoom.prototype;
  dart.addTypeTests(map_events.MapEventScrollWheelZoom);
  dart.addTypeCaches(map_events.MapEventScrollWheelZoom);
  dart.setLibraryUri(map_events.MapEventScrollWheelZoom, I[0]);
  map_events.MapEventDoubleTapZoomStart = class MapEventDoubleTapZoomStart extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventDoubleTapZoomStart.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventDoubleTapZoomStart.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventDoubleTapZoomStart.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventDoubleTapZoomStart.prototype;
  dart.addTypeTests(map_events.MapEventDoubleTapZoomStart);
  dart.addTypeCaches(map_events.MapEventDoubleTapZoomStart);
  dart.setLibraryUri(map_events.MapEventDoubleTapZoomStart, I[0]);
  map_events.MapEventDoubleTapZoomEnd = class MapEventDoubleTapZoomEnd extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventDoubleTapZoomEnd.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventDoubleTapZoomEnd.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventDoubleTapZoomEnd.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventDoubleTapZoomEnd.prototype;
  dart.addTypeTests(map_events.MapEventDoubleTapZoomEnd);
  dart.addTypeCaches(map_events.MapEventDoubleTapZoomEnd);
  dart.setLibraryUri(map_events.MapEventDoubleTapZoomEnd, I[0]);
  var id$0 = dart.privateName(map_events, "MapEventRotate.id");
  var currentRotation$ = dart.privateName(map_events, "MapEventRotate.currentRotation");
  var targetRotation$ = dart.privateName(map_events, "MapEventRotate.targetRotation");
  map_events.MapEventRotate = class MapEventRotate extends map_events.MapEvent {
    get id() {
      return this[id$0];
    }
    set id(value) {
      super.id = value;
    }
    get currentRotation() {
      return this[currentRotation$];
    }
    set currentRotation(value) {
      super.currentRotation = value;
    }
    get targetRotation() {
      return this[targetRotation$];
    }
    set targetRotation(value) {
      super.targetRotation = value;
    }
    static ['_#new#tearOff'](opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let currentRotation = opts && 'currentRotation' in opts ? opts.currentRotation : null;
      let targetRotation = opts && 'targetRotation' in opts ? opts.targetRotation : null;
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventRotate.new({id: id, currentRotation: currentRotation, targetRotation: targetRotation, source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventRotate.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let currentRotation = opts && 'currentRotation' in opts ? opts.currentRotation : null;
    let targetRotation = opts && 'targetRotation' in opts ? opts.targetRotation : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    this[id$0] = id;
    this[currentRotation$] = currentRotation;
    this[targetRotation$] = targetRotation;
    map_events.MapEventRotate.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventRotate.prototype;
  dart.addTypeTests(map_events.MapEventRotate);
  dart.addTypeCaches(map_events.MapEventRotate);
  dart.setLibraryUri(map_events.MapEventRotate, I[0]);
  dart.setFieldSignature(map_events.MapEventRotate, () => ({
    __proto__: dart.getFields(map_events.MapEventRotate.__proto__),
    id: dart.finalFieldType(dart.nullable(core.String)),
    currentRotation: dart.finalFieldType(core.double),
    targetRotation: dart.finalFieldType(core.double)
  }));
  map_events.MapEventRotateStart = class MapEventRotateStart extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventRotateStart.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventRotateStart.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventRotateStart.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventRotateStart.prototype;
  dart.addTypeTests(map_events.MapEventRotateStart);
  dart.addTypeCaches(map_events.MapEventRotateStart);
  dart.setLibraryUri(map_events.MapEventRotateStart, I[0]);
  map_events.MapEventRotateEnd = class MapEventRotateEnd extends map_events.MapEvent {
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let zoom = opts && 'zoom' in opts ? opts.zoom : null;
      return new map_events.MapEventRotateEnd.new({source: source, center: center, zoom: zoom});
    }
  };
  (map_events.MapEventRotateEnd.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let zoom = opts && 'zoom' in opts ? opts.zoom : null;
    map_events.MapEventRotateEnd.__proto__.new.call(this, {source: source, center: center, zoom: zoom});
    ;
  }).prototype = map_events.MapEventRotateEnd.prototype;
  dart.addTypeTests(map_events.MapEventRotateEnd);
  dart.addTypeCaches(map_events.MapEventRotateEnd);
  dart.setLibraryUri(map_events.MapEventRotateEnd, I[0]);
  dart.trackLibraries("packages/flutter_map/src/gestures/map_events.dart", {
    "package:flutter_map/src/gestures/map_events.dart": map_events
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["map_events.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/flutter_map/src/gestures/map_events.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__map_events: map_events
  };
}));

//# sourceMappingURL=map_events.dart.lib.js.map
