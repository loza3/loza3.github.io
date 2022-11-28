define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/gestures/tap.dart'], (function load__packages__positioned_tap_detector_2__positioned_tap_detector_2_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__gestures__tap$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  var positioned_tap_detector_2 = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StreamControllerOfTapDownDetails: () => (T.StreamControllerOfTapDownDetails = dart.constFn(async.StreamController$(tap.TapDownDetails)))(),
    dynamicTobool: () => (T.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 250000
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PositionedTapDetector2",
        [_Location_column]: 3,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/positioned_tap_detector_2-1.0.4/lib/positioned_tap_detector_2.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 161,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/positioned_tap_detector_2-1.0.4/lib/positioned_tap_detector_2.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 12,
        [_Location_line]: 164,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/positioned_tap_detector_2-1.0.4/lib/positioned_tap_detector_2.dart"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:positioned_tap_detector_2/positioned_tap_detector_2.dart"];
  var child$ = dart.privateName(positioned_tap_detector_2, "PositionedTapDetector2.child");
  var behavior$ = dart.privateName(positioned_tap_detector_2, "PositionedTapDetector2.behavior");
  var onTap$ = dart.privateName(positioned_tap_detector_2, "PositionedTapDetector2.onTap");
  var onDoubleTap$ = dart.privateName(positioned_tap_detector_2, "PositionedTapDetector2.onDoubleTap");
  var onLongPress$ = dart.privateName(positioned_tap_detector_2, "PositionedTapDetector2.onLongPress");
  var doubleTapDelay$ = dart.privateName(positioned_tap_detector_2, "PositionedTapDetector2.doubleTapDelay");
  var controller$ = dart.privateName(positioned_tap_detector_2, "PositionedTapDetector2.controller");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  positioned_tap_detector_2.PositionedTapDetector2 = class PositionedTapDetector2 extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get behavior() {
      return this[behavior$];
    }
    set behavior(value) {
      super.behavior = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onDoubleTap() {
      return this[onDoubleTap$];
    }
    set onDoubleTap(value) {
      super.onDoubleTap = value;
    }
    get onLongPress() {
      return this[onLongPress$];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get doubleTapDelay() {
      return this[doubleTapDelay$];
    }
    set doubleTapDelay(value) {
      super.doubleTapDelay = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let onDoubleTap = opts && 'onDoubleTap' in opts ? opts.onDoubleTap : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let doubleTapDelay = opts && 'doubleTapDelay' in opts ? opts.doubleTapDelay : C[0] || CT.C0;
      let behavior = opts && 'behavior' in opts ? opts.behavior : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new positioned_tap_detector_2.PositionedTapDetector2.new({key: key, child: child, onTap: onTap, onDoubleTap: onDoubleTap, onLongPress: onLongPress, doubleTapDelay: doubleTapDelay, behavior: behavior, controller: controller, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    createState() {
      return new positioned_tap_detector_2._TapPositionDetectorState.new();
    }
  };
  (positioned_tap_detector_2.PositionedTapDetector2.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onDoubleTap = opts && 'onDoubleTap' in opts ? opts.onDoubleTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let doubleTapDelay = opts && 'doubleTapDelay' in opts ? opts.doubleTapDelay : C[0] || CT.C0;
    let behavior = opts && 'behavior' in opts ? opts.behavior : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[onTap$] = onTap;
    this[onDoubleTap$] = onDoubleTap;
    this[onLongPress$] = onLongPress;
    this[doubleTapDelay$] = doubleTapDelay;
    this[behavior$] = behavior;
    this[controller$] = controller;
    positioned_tap_detector_2.PositionedTapDetector2.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = positioned_tap_detector_2.PositionedTapDetector2.prototype;
  dart.addTypeTests(positioned_tap_detector_2.PositionedTapDetector2);
  dart.addTypeCaches(positioned_tap_detector_2.PositionedTapDetector2);
  dart.setMethodSignature(positioned_tap_detector_2.PositionedTapDetector2, () => ({
    __proto__: dart.getMethods(positioned_tap_detector_2.PositionedTapDetector2.__proto__),
    createState: dart.fnType(positioned_tap_detector_2._TapPositionDetectorState, [])
  }));
  dart.setLibraryUri(positioned_tap_detector_2.PositionedTapDetector2, I[0]);
  dart.setFieldSignature(positioned_tap_detector_2.PositionedTapDetector2, () => ({
    __proto__: dart.getFields(positioned_tap_detector_2.PositionedTapDetector2.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    behavior: dart.finalFieldType(dart.nullable(proxy_box.HitTestBehavior)),
    onTap: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, [positioned_tap_detector_2.TapPosition]))),
    onDoubleTap: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, [positioned_tap_detector_2.TapPosition]))),
    onLongPress: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, [positioned_tap_detector_2.TapPosition]))),
    doubleTapDelay: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(positioned_tap_detector_2.PositionedTapController))
  }));
  dart.setStaticFieldSignature(positioned_tap_detector_2.PositionedTapDetector2, () => ['_defaultDelay', '_doubleTapMaxOffset']);
  dart.defineLazy(positioned_tap_detector_2.PositionedTapDetector2, {
    /*positioned_tap_detector_2.PositionedTapDetector2._defaultDelay*/get _defaultDelay() {
      return C[0] || CT.C0;
    },
    /*positioned_tap_detector_2.PositionedTapDetector2._doubleTapMaxOffset*/get _doubleTapMaxOffset() {
      return 48;
    }
  }, false);
  var _controller = dart.privateName(positioned_tap_detector_2, "_controller");
  var _tapController = dart.privateName(positioned_tap_detector_2, "_tapController");
  var _pendingTap = dart.privateName(positioned_tap_detector_2, "_pendingTap");
  var _firstTap = dart.privateName(positioned_tap_detector_2, "_firstTap");
  var _stream = dart.privateName(positioned_tap_detector_2, "_stream");
  var _sink = dart.privateName(positioned_tap_detector_2, "_sink");
  var _updateController = dart.privateName(positioned_tap_detector_2, "_updateController");
  var _onTimeout = dart.privateName(positioned_tap_detector_2, "_onTimeout");
  var _onTapConfirmed = dart.privateName(positioned_tap_detector_2, "_onTapConfirmed");
  var _state = dart.privateName(positioned_tap_detector_2, "_state");
  var _postCallback = dart.privateName(positioned_tap_detector_2, "_postCallback");
  var _handleSecondTap = dart.privateName(positioned_tap_detector_2, "_handleSecondTap");
  var _isDoubleTap = dart.privateName(positioned_tap_detector_2, "_isDoubleTap");
  var _onTapDownEvent = dart.privateName(positioned_tap_detector_2, "_onTapDownEvent");
  var _onTapEvent = dart.privateName(positioned_tap_detector_2, "_onTapEvent");
  var _onLongPressEvent = dart.privateName(positioned_tap_detector_2, "_onLongPressEvent");
  var _getTapPositions = dart.privateName(positioned_tap_detector_2, "_getTapPositions");
  var _getWidgetTopLeft = dart.privateName(positioned_tap_detector_2, "_getWidgetTopLeft");
  positioned_tap_detector_2._TapPositionDetectorState = class _TapPositionDetectorState extends framework.State$(positioned_tap_detector_2.PositionedTapDetector2) {
    get [_stream]() {
      return this[_controller].stream;
    }
    get [_sink]() {
      return this[_controller].sink;
    }
    initState() {
      this[_updateController]();
      this[_stream].timeout(this.widget.doubleTapDelay).handleError(dart.bind(this, _onTimeout), {test: dart.fn(e => async.TimeoutException.is(e), T.dynamicTobool())}).listen(dart.bind(this, _onTapConfirmed));
      super.initState();
    }
    didUpdateWidget(oldWidget) {
      positioned_tap_detector_2.PositionedTapDetector2.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.controller, oldWidget.controller)) {
        this[_updateController]();
      }
    }
    [_updateController]() {
      let t0;
      t0 = this[_tapController];
      t0 == null ? null : t0[_state] = null;
      if (this.widget.controller != null) {
        dart.nullCheck(this.widget.controller)[_state] = this;
        this[_tapController] = this.widget.controller;
      }
    }
    [_onTimeout](error) {
      if (this[_firstTap] != null && this[_pendingTap] == null) {
        this[_postCallback](dart.nullCheck(this[_firstTap]), this.widget.onTap);
      }
    }
    [_onTapConfirmed](details) {
      if (this[_firstTap] == null) {
        this[_firstTap] = details;
      } else {
        this[_handleSecondTap](details);
      }
    }
    [_handleSecondTap](secondTap) {
      if (this[_isDoubleTap](dart.nullCheck(this[_firstTap]), secondTap)) {
        this[_postCallback](secondTap, this.widget.onDoubleTap);
      } else {
        this[_postCallback](dart.nullCheck(this[_firstTap]), this.widget.onTap);
        this[_postCallback](secondTap, this.widget.onTap);
      }
    }
    [_isDoubleTap](d1, d2) {
      let dx = d1.globalPosition.dx - d2.globalPosition.dx;
      let dy = d1.globalPosition.dy - d2.globalPosition.dy;
      return math.sqrt(dx * dx + dy * dy) <= 48;
    }
    [_onTapDownEvent](details) {
      this[_pendingTap] = details;
    }
    [_onTapEvent]() {
      if (this.widget.onDoubleTap == null) {
        this[_postCallback](dart.nullCheck(this[_pendingTap]), this.widget.onTap);
      } else {
        this[_sink].add(dart.nullCheck(this[_pendingTap]));
      }
      this[_pendingTap] = null;
    }
    [_onLongPressEvent]() {
      let pending = this[_pendingTap];
      if (pending != null) {
        if (this[_firstTap] == null) {
          this[_postCallback](pending, this.widget.onLongPress);
        } else {
          this[_sink].add(pending);
          this[_pendingTap] = null;
        }
      }
    }
    [_postCallback](details, callback) {
      return async.async(dart.void, (function* _postCallback() {
        this[_firstTap] = null;
        if (callback != null) {
          callback(this[_getTapPositions](details));
        }
      }).bind(this));
    }
    [_getTapPositions](details) {
      let topLeft = this[_getWidgetTopLeft]();
      let global = details.globalPosition;
      let relative = topLeft != null ? global['-'](topLeft) : null;
      return new positioned_tap_detector_2.TapPosition.new(global, relative);
    }
    [_getWidgetTopLeft]() {
      let t0;
      let translation = (t0 = this.context.findRenderObject(), t0 == null ? null : t0.getTransformTo(null).getTranslation());
      return translation != null ? new ui.Offset.new(translation.x, translation.y) : null;
    }
    dispose() {
      let t0;
      this[_controller].close();
      t0 = this[_tapController];
      t0 == null ? null : t0[_state] = null;
      super.dispose();
    }
    build(context) {
      let t0;
      if (this.widget.controller != null) {
        if (this.widget.child != null) {
          return dart.nullCheck(this.widget.child);
        } else {
          return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
        }
      }
      return new gesture_detector.GestureDetector.new({child: this.widget.child, behavior: (t0 = this.widget.behavior, t0 == null ? this.widget.child == null ? proxy_box.HitTestBehavior.translucent : proxy_box.HitTestBehavior.deferToChild : t0), onTap: dart.bind(this, _onTapEvent), onLongPress: dart.bind(this, _onLongPressEvent), onTapDown: dart.bind(this, _onTapDownEvent), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    static ['_#new#tearOff']() {
      return new positioned_tap_detector_2._TapPositionDetectorState.new();
    }
  };
  (positioned_tap_detector_2._TapPositionDetectorState.new = function() {
    this[_controller] = T.StreamControllerOfTapDownDetails().new();
    this[_tapController] = null;
    this[_pendingTap] = null;
    this[_firstTap] = null;
    positioned_tap_detector_2._TapPositionDetectorState.__proto__.new.call(this);
    ;
  }).prototype = positioned_tap_detector_2._TapPositionDetectorState.prototype;
  dart.addTypeTests(positioned_tap_detector_2._TapPositionDetectorState);
  dart.addTypeCaches(positioned_tap_detector_2._TapPositionDetectorState);
  dart.setMethodSignature(positioned_tap_detector_2._TapPositionDetectorState, () => ({
    __proto__: dart.getMethods(positioned_tap_detector_2._TapPositionDetectorState.__proto__),
    [_updateController]: dart.fnType(dart.void, []),
    [_onTimeout]: dart.fnType(dart.void, [dart.dynamic]),
    [_onTapConfirmed]: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleSecondTap]: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_isDoubleTap]: dart.fnType(core.bool, [tap.TapDownDetails, tap.TapDownDetails]),
    [_onTapDownEvent]: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_onTapEvent]: dart.fnType(dart.void, []),
    [_onLongPressEvent]: dart.fnType(dart.void, []),
    [_postCallback]: dart.fnType(dart.void, [tap.TapDownDetails, dart.nullable(dart.fnType(dart.dynamic, [positioned_tap_detector_2.TapPosition]))]),
    [_getTapPositions]: dart.fnType(positioned_tap_detector_2.TapPosition, [tap.TapDownDetails]),
    [_getWidgetTopLeft]: dart.fnType(dart.nullable(ui.Offset), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(positioned_tap_detector_2._TapPositionDetectorState, () => ({
    __proto__: dart.getGetters(positioned_tap_detector_2._TapPositionDetectorState.__proto__),
    [_stream]: async.Stream$(tap.TapDownDetails),
    [_sink]: core.Sink$(tap.TapDownDetails)
  }));
  dart.setLibraryUri(positioned_tap_detector_2._TapPositionDetectorState, I[0]);
  dart.setFieldSignature(positioned_tap_detector_2._TapPositionDetectorState, () => ({
    __proto__: dart.getFields(positioned_tap_detector_2._TapPositionDetectorState.__proto__),
    [_controller]: dart.fieldType(async.StreamController$(tap.TapDownDetails)),
    [_tapController]: dart.fieldType(dart.nullable(positioned_tap_detector_2.PositionedTapController)),
    [_pendingTap]: dart.fieldType(dart.nullable(tap.TapDownDetails)),
    [_firstTap]: dart.fieldType(dart.nullable(tap.TapDownDetails))
  }));
  positioned_tap_detector_2.PositionedTapController = class PositionedTapController extends core.Object {
    onTap() {
      let t0;
      t0 = this[_state];
      return t0 == null ? null : t0[_onTapEvent]();
    }
    onLongPress() {
      let t0;
      t0 = this[_state];
      return t0 == null ? null : t0[_onLongPressEvent]();
    }
    onTapDown(details) {
      let t0;
      t0 = this[_state];
      return t0 == null ? null : t0[_onTapDownEvent](details);
    }
    static ['_#new#tearOff']() {
      return new positioned_tap_detector_2.PositionedTapController.new();
    }
  };
  (positioned_tap_detector_2.PositionedTapController.new = function() {
    this[_state] = null;
    ;
  }).prototype = positioned_tap_detector_2.PositionedTapController.prototype;
  dart.addTypeTests(positioned_tap_detector_2.PositionedTapController);
  dart.addTypeCaches(positioned_tap_detector_2.PositionedTapController);
  dart.setMethodSignature(positioned_tap_detector_2.PositionedTapController, () => ({
    __proto__: dart.getMethods(positioned_tap_detector_2.PositionedTapController.__proto__),
    onTap: dart.fnType(dart.void, []),
    onLongPress: dart.fnType(dart.void, []),
    onTapDown: dart.fnType(dart.void, [tap.TapDownDetails])
  }));
  dart.setLibraryUri(positioned_tap_detector_2.PositionedTapController, I[0]);
  dart.setFieldSignature(positioned_tap_detector_2.PositionedTapController, () => ({
    __proto__: dart.getFields(positioned_tap_detector_2.PositionedTapController.__proto__),
    [_state]: dart.fieldType(dart.nullable(positioned_tap_detector_2._TapPositionDetectorState))
  }));
  var global$ = dart.privateName(positioned_tap_detector_2, "TapPosition.global");
  var relative$ = dart.privateName(positioned_tap_detector_2, "TapPosition.relative");
  positioned_tap_detector_2.TapPosition = class TapPosition extends core.Object {
    get global() {
      return this[global$];
    }
    set global(value) {
      this[global$] = value;
    }
    get relative() {
      return this[relative$];
    }
    set relative(value) {
      this[relative$] = value;
    }
    static ['_#new#tearOff'](global, relative) {
      return new positioned_tap_detector_2.TapPosition.new(global, relative);
    }
    _equals(other) {
      if (other == null) return false;
      if (!positioned_tap_detector_2.TapPosition.is(other)) return false;
      let typedOther = other;
      return this.global._equals(typedOther.global) && dart.equals(this.relative, other.relative);
    }
    get hashCode() {
      return ui.hashValues(this.global, this.relative);
    }
  };
  (positioned_tap_detector_2.TapPosition.new = function(global, relative) {
    this[global$] = global;
    this[relative$] = relative;
    ;
  }).prototype = positioned_tap_detector_2.TapPosition.prototype;
  dart.addTypeTests(positioned_tap_detector_2.TapPosition);
  dart.addTypeCaches(positioned_tap_detector_2.TapPosition);
  dart.setMethodSignature(positioned_tap_detector_2.TapPosition, () => ({
    __proto__: dart.getMethods(positioned_tap_detector_2.TapPosition.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(positioned_tap_detector_2.TapPosition, I[0]);
  dart.setFieldSignature(positioned_tap_detector_2.TapPosition, () => ({
    __proto__: dart.getFields(positioned_tap_detector_2.TapPosition.__proto__),
    global: dart.fieldType(ui.Offset),
    relative: dart.fieldType(dart.nullable(ui.Offset))
  }));
  dart.defineExtensionMethods(positioned_tap_detector_2.TapPosition, ['_equals']);
  dart.defineExtensionAccessors(positioned_tap_detector_2.TapPosition, ['hashCode']);
  dart.trackLibraries("packages/positioned_tap_detector_2/positioned_tap_detector_2.dart", {
    "package:positioned_tap_detector_2/positioned_tap_detector_2.dart": positioned_tap_detector_2
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["positioned_tap_detector_2.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/positioned_tap_detector_2/positioned_tap_detector_2.dart.lib.js"}');
  // Exports:
  return {
    positioned_tap_detector_2: positioned_tap_detector_2
  };
}));

//# sourceMappingURL=positioned_tap_detector_2.dart.lib.js.map
