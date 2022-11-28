define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/services/platform_views.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/services/mouse_tracking.dart', 'packages/flutter/src/foundation/basic_types.dart', 'packages/flutter/src/gestures/binding.dart', 'packages/flutter/src/gestures/team.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/gestures/monodrag.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/foundation/collections.dart'], (function load__packages__flutter__src__rendering__platform_view_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__services__platform_views$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__services__mouse_tracking$46dart, packages__flutter__src__foundation__basic_types$46dart, packages__flutter__src__gestures__binding$46dart, packages__flutter__src__gestures__team$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__gestures__monodrag$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__foundation__collections$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const platform_views = packages__flutter__src__services__platform_views$46dart.src__services__platform_views;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const mouse_tracking = packages__flutter__src__services__mouse_tracking$46dart.src__services__mouse_tracking;
  const basic_types = packages__flutter__src__foundation__basic_types$46dart.src__foundation__basic_types;
  const binding$ = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  const team = packages__flutter__src__gestures__team$46dart.src__gestures__team;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const monodrag = packages__flutter__src__gestures__monodrag$46dart.src__gestures__monodrag;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  var platform_view = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $length = dartx.length;
  var $map = dartx.map;
  var $toSet = dartx.toSet;
  var $remove = dartx.remove;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $keys = dartx.keys;
  var $clear = dartx.clear;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    OffsetToOffset: () => (T.OffsetToOffset = dart.constFn(dart.fnType(ui.Offset, [ui.Offset])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    DurationToFutureOfvoid: () => (T.DurationToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [core.Duration])))(),
    HitTestEntryOfHitTestTarget: () => (T.HitTestEntryOfHitTestTarget = dart.constFn(hit_test.HitTestEntry$(hit_test.HitTestTarget)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    DragDownDetailsTovoid: () => (T.DragDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [drag_details.DragDownDetails])))(),
    TapDownDetailsTovoid: () => (T.TapDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [tap.TapDownDetails])))(),
    FactoryOfOneSequenceGestureRecognizer: () => (T.FactoryOfOneSequenceGestureRecognizer = dart.constFn(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer)))(),
    FactoryOfOneSequenceGestureRecognizerToOneSequenceGestureRecognizer: () => (T.FactoryOfOneSequenceGestureRecognizerToOneSequenceGestureRecognizer = dart.constFn(dart.fnType(recognizer.OneSequenceGestureRecognizer, [T.FactoryOfOneSequenceGestureRecognizer()])))(),
    ListOfPointerEvent: () => (T.ListOfPointerEvent = dart.constFn(core.List$(events.PointerEvent)))(),
    IdentityMapOfint$ListOfPointerEvent: () => (T.IdentityMapOfint$ListOfPointerEvent = dart.constFn(_js_helper.IdentityMap$(core.int, T.ListOfPointerEvent())))(),
    LinkedHashSetOfint: () => (T.LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))(),
    JSArrayOfPointerEvent: () => (T.JSArrayOfPointerEvent = dart.constFn(_interceptors.JSArray$(events.PointerEvent)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: platform_view.PlatformViewHitTestBehavior.prototype,
        [_Enum__name]: "opaque",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: platform_view.PlatformViewHitTestBehavior.prototype,
        [_Enum__name]: "translucent",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: platform_view.PlatformViewHitTestBehavior.prototype,
        [_Enum__name]: "transparent",
        [_Enum_index]: 2
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], platform_view.PlatformViewHitTestBehavior);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: platform_view._PlatformViewState.prototype,
        [_Enum__name]: "uninitialized",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: platform_view._PlatformViewState.prototype,
        [_Enum__name]: "resizing",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: platform_view._PlatformViewState.prototype,
        [_Enum__name]: "ready",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.constList([C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7], platform_view._PlatformViewState);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "package:flutter/src/rendering/platform_view.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/platform_view.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  platform_view.PlatformViewHitTestBehavior = class PlatformViewHitTestBehavior extends core._Enum {
    toString() {
      return "PlatformViewHitTestBehavior." + this[_name];
    }
  };
  (platform_view.PlatformViewHitTestBehavior.new = function(index, name) {
    platform_view.PlatformViewHitTestBehavior.__proto__.new.call(this, index, name);
    ;
  }).prototype = platform_view.PlatformViewHitTestBehavior.prototype;
  dart.addTypeTests(platform_view.PlatformViewHitTestBehavior);
  dart.addTypeCaches(platform_view.PlatformViewHitTestBehavior);
  dart.setLibraryUri(platform_view.PlatformViewHitTestBehavior, I[0]);
  dart.setStaticFieldSignature(platform_view.PlatformViewHitTestBehavior, () => ['values', 'opaque', 'translucent', 'transparent']);
  dart.defineExtensionMethods(platform_view.PlatformViewHitTestBehavior, ['toString']);
  dart.defineLazy(platform_view.PlatformViewHitTestBehavior, {
    /*platform_view.PlatformViewHitTestBehavior.values*/get values() {
      return C[0] || CT.C0;
    },
    /*platform_view.PlatformViewHitTestBehavior.opaque*/get opaque() {
      return C[1] || CT.C1;
    },
    /*platform_view.PlatformViewHitTestBehavior.translucent*/get translucent() {
      return C[2] || CT.C2;
    },
    /*platform_view.PlatformViewHitTestBehavior.transparent*/get transparent() {
      return C[3] || CT.C3;
    }
  }, false);
  platform_view._PlatformViewState = class _PlatformViewState extends core._Enum {
    toString() {
      return "_PlatformViewState." + this[_name];
    }
  };
  (platform_view._PlatformViewState.new = function(index, name) {
    platform_view._PlatformViewState.__proto__.new.call(this, index, name);
    ;
  }).prototype = platform_view._PlatformViewState.prototype;
  dart.addTypeTests(platform_view._PlatformViewState);
  dart.addTypeCaches(platform_view._PlatformViewState);
  dart.setLibraryUri(platform_view._PlatformViewState, I[0]);
  dart.setStaticFieldSignature(platform_view._PlatformViewState, () => ['values', 'uninitialized', 'resizing', 'ready']);
  dart.defineExtensionMethods(platform_view._PlatformViewState, ['toString']);
  dart.defineLazy(platform_view._PlatformViewState, {
    /*platform_view._PlatformViewState.values*/get values() {
      return C[4] || CT.C4;
    },
    /*platform_view._PlatformViewState.uninitialized*/get uninitialized() {
      return C[5] || CT.C5;
    },
    /*platform_view._PlatformViewState.resizing*/get resizing() {
      return C[6] || CT.C6;
    },
    /*platform_view._PlatformViewState.ready*/get ready() {
      return C[7] || CT.C7;
    }
  }, false);
  var _state = dart.privateName(platform_view, "_state");
  var _currentTextureSize = dart.privateName(platform_view, "_currentTextureSize");
  var _isDisposed = dart.privateName(platform_view, "_isDisposed");
  var _clipBehavior = dart.privateName(platform_view, "_clipBehavior");
  var _clipRectLayer = dart.privateName(platform_view, "_clipRectLayer");
  var _viewController = dart.privateName(platform_view, "_viewController");
  var _onPlatformViewCreated = dart.privateName(platform_view, "_onPlatformViewCreated");
  var _setOffset = dart.privateName(platform_view, "_setOffset");
  var _sizePlatformView = dart.privateName(platform_view, "_sizePlatformView");
  var _paintTexture = dart.privateName(platform_view, "_paintTexture");
  var _controller = dart.privateName(platform_view, "_controller");
  var _updateGestureRecognizersWithCallBack = dart.privateName(platform_view, "_updateGestureRecognizersWithCallBack");
  var _hitTestBehavior = dart.privateName(platform_view, "_PlatformViewGestureMixin._hitTestBehavior");
  var _handlePointerEvent = dart.privateName(platform_view, "_PlatformViewGestureMixin._handlePointerEvent");
  var _gestureRecognizer = dart.privateName(platform_view, "_PlatformViewGestureMixin._gestureRecognizer");
  var _hitTestBehavior$ = dart.privateName(platform_view, "_hitTestBehavior");
  var _handlePointerEvent$ = dart.privateName(platform_view, "_handlePointerEvent");
  var _gestureRecognizer$ = dart.privateName(platform_view, "_gestureRecognizer");
  platform_view._PlatformViewGestureMixin = class _PlatformViewGestureMixin extends box.RenderBox {};
  platform_view._PlatformViewGestureMixin[dart.mixinOn] = RenderBox => class _PlatformViewGestureMixin extends RenderBox {
    get [_hitTestBehavior$]() {
      return this[_hitTestBehavior];
    }
    set [_hitTestBehavior$](value) {
      this[_hitTestBehavior] = value;
    }
    get [_handlePointerEvent$]() {
      return this[_handlePointerEvent];
    }
    set [_handlePointerEvent$](value) {
      this[_handlePointerEvent] = value;
    }
    get [_gestureRecognizer$]() {
      return this[_gestureRecognizer];
    }
    set [_gestureRecognizer$](value) {
      this[_gestureRecognizer] = value;
    }
    set hitTestBehavior(value) {
      if (value !== this[_hitTestBehavior$]) {
        this[_hitTestBehavior$] = value;
        if (this.owner != null) {
          this.markNeedsPaint();
        }
      }
    }
    [_updateGestureRecognizersWithCallBack](gestureRecognizers, handlePointerEvent) {
      let t4, t4$;
      if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[1], 740, 12, "gestureRecognizers != null");
      if (!(platform_view._factoriesTypeSet(recognizer.OneSequenceGestureRecognizer, gestureRecognizers)[$length] === gestureRecognizers[$length])) dart.assertFailed("There were multiple gesture recognizer factories for the same type, there must only be a single " + "gesture recognizer factory for each gesture recognizer type.", I[1], 742, 7, "_factoriesTypeSet(gestureRecognizers).length == gestureRecognizers.length");
      if (platform_view._factoryTypesSetEquals(recognizer.OneSequenceGestureRecognizer, gestureRecognizers, (t4 = this[_gestureRecognizer$], t4 == null ? null : t4.gestureRecognizerFactories))) {
        return;
      }
      t4$ = this[_gestureRecognizer$];
      t4$ == null ? null : t4$.dispose();
      this[_gestureRecognizer$] = new platform_view._PlatformViewGestureRecognizer.new(handlePointerEvent, gestureRecognizers);
      this[_handlePointerEvent$] = handlePointerEvent;
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this[_hitTestBehavior$] === platform_view.PlatformViewHitTestBehavior.transparent || !this.size.contains(position)) {
        return false;
      }
      result.add(new box.BoxHitTestEntry.new(this, position));
      return this[_hitTestBehavior$] === platform_view.PlatformViewHitTestBehavior.opaque;
    }
    hitTestSelf(position) {
      return this[_hitTestBehavior$] !== platform_view.PlatformViewHitTestBehavior.transparent;
    }
    get onEnter() {
      return null;
    }
    get onExit() {
      return null;
    }
    get cursor() {
      return mouse_cursor.MouseCursor.uncontrolled;
    }
    get validForMouseTracker() {
      return true;
    }
    handleEvent(event, entry) {
      let t4;
      T.HitTestEntryOfHitTestTarget().as(entry);
      if (events.PointerDownEvent.is(event)) {
        dart.nullCheck(this[_gestureRecognizer$]).addPointer(event);
      }
      if (events.PointerHoverEvent.is(event)) {
        t4 = this[_handlePointerEvent$];
        t4 == null ? null : t4(event);
      }
    }
    detach() {
      dart.nullCheck(this[_gestureRecognizer$]).reset();
      super.detach();
    }
  };
  (platform_view._PlatformViewGestureMixin[dart.mixinNew] = function() {
    this[_hitTestBehavior] = null;
    this[_handlePointerEvent] = null;
    this[_gestureRecognizer] = null;
  }).prototype = platform_view._PlatformViewGestureMixin.prototype;
  dart.addTypeTests(platform_view._PlatformViewGestureMixin);
  dart.addTypeCaches(platform_view._PlatformViewGestureMixin);
  platform_view._PlatformViewGestureMixin[dart.implements] = () => [mouse_tracking.MouseTrackerAnnotation, box.RenderBox];
  dart.setMethodSignature(platform_view._PlatformViewGestureMixin, () => ({
    __proto__: dart.getMethods(platform_view._PlatformViewGestureMixin.__proto__),
    [_updateGestureRecognizersWithCallBack]: dart.fnType(dart.void, [core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer)), dart.fnType(async.Future$(dart.void), [events.PointerEvent])])
  }));
  dart.setGetterSignature(platform_view._PlatformViewGestureMixin, () => ({
    __proto__: dart.getGetters(platform_view._PlatformViewGestureMixin.__proto__),
    onEnter: dart.nullable(dart.fnType(dart.void, [events.PointerEnterEvent])),
    onExit: dart.nullable(dart.fnType(dart.void, [events.PointerExitEvent])),
    cursor: mouse_cursor.MouseCursor,
    validForMouseTracker: core.bool
  }));
  dart.setSetterSignature(platform_view._PlatformViewGestureMixin, () => ({
    __proto__: dart.getSetters(platform_view._PlatformViewGestureMixin.__proto__),
    hitTestBehavior: platform_view.PlatformViewHitTestBehavior
  }));
  dart.setLibraryUri(platform_view._PlatformViewGestureMixin, I[0]);
  dart.setFieldSignature(platform_view._PlatformViewGestureMixin, () => ({
    __proto__: dart.getFields(platform_view._PlatformViewGestureMixin.__proto__),
    [_hitTestBehavior$]: dart.fieldType(dart.nullable(platform_view.PlatformViewHitTestBehavior)),
    [_handlePointerEvent$]: dart.fieldType(dart.nullable(dart.fnType(async.Future$(dart.void), [events.PointerEvent]))),
    [_gestureRecognizer$]: dart.fieldType(dart.nullable(platform_view._PlatformViewGestureRecognizer))
  }));
  const RenderBox__PlatformViewGestureMixin$36 = class RenderBox__PlatformViewGestureMixin extends box.RenderBox {};
  (RenderBox__PlatformViewGestureMixin$36.new = function() {
    platform_view._PlatformViewGestureMixin[dart.mixinNew].call(this);
    RenderBox__PlatformViewGestureMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox__PlatformViewGestureMixin$36.prototype;
  dart.applyMixin(RenderBox__PlatformViewGestureMixin$36, platform_view._PlatformViewGestureMixin);
  platform_view.PlatformViewRenderBox = class PlatformViewRenderBox extends RenderBox__PlatformViewGestureMixin$36 {
    static ['_#new#tearOff'](opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      return new platform_view.PlatformViewRenderBox.new({controller: controller, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers});
    }
    get controller() {
      return this[_controller];
    }
    set controller(controller) {
      platform_views.PlatformViewController.as(controller);
      if (!(controller !== null)) dart.assertFailed(null, I[1], 652, 12, "controller != null");
      if (!(controller.viewId !== null && controller.viewId > -1)) dart.assertFailed(null, I[1], 653, 12, "controller.viewId != null && controller.viewId > -1");
      if (this[_controller][$_equals](controller)) {
        return;
      }
      let needsSemanticsUpdate = this[_controller].viewId !== controller.viewId;
      this[_controller] = controller;
      this.markNeedsPaint();
      if (needsSemanticsUpdate) {
        this.markNeedsSemanticsUpdate();
      }
    }
    updateGestureRecognizers(gestureRecognizers) {
      this[_updateGestureRecognizersWithCallBack](gestureRecognizers, dart.bind(this[_controller], 'dispatchPointerEvent'));
    }
    get sizedByParent() {
      return true;
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    get isRepaintBoundary() {
      return true;
    }
    computeDryLayout(constraints) {
      return constraints.biggest;
    }
    paint(context, offset) {
      if (!(this[_controller].viewId !== null)) dart.assertFailed(null, I[1], 702, 12, "_controller.viewId != null");
      context.addLayer(new layer.PlatformViewLayer.new({rect: offset['&'](this.size), viewId: this[_controller].viewId}));
    }
    describeSemanticsConfiguration(config) {
      super.describeSemanticsConfiguration(config);
      if (!(this[_controller].viewId !== null)) dart.assertFailed(null, I[1], 712, 12, "_controller.viewId != null");
      config.isSemanticBoundary = true;
      config.platformViewId = this[_controller].viewId;
    }
  };
  (platform_view.PlatformViewRenderBox.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    if (!(controller !== null && controller.viewId !== null && controller.viewId > -1)) dart.assertFailed(null, I[1], 639, 16, "controller != null && controller.viewId != null && controller.viewId > -1");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[1], 640, 16, "hitTestBehavior != null");
    if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[1], 641, 16, "gestureRecognizers != null");
    this[_controller] = controller;
    platform_view.PlatformViewRenderBox.__proto__.new.call(this);
    this.hitTestBehavior = hitTestBehavior;
    this.updateGestureRecognizers(gestureRecognizers);
  }).prototype = platform_view.PlatformViewRenderBox.prototype;
  dart.addTypeTests(platform_view.PlatformViewRenderBox);
  dart.addTypeCaches(platform_view.PlatformViewRenderBox);
  dart.setMethodSignature(platform_view.PlatformViewRenderBox, () => ({
    __proto__: dart.getMethods(platform_view.PlatformViewRenderBox.__proto__),
    updateGestureRecognizers: dart.fnType(dart.void, [core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer))])
  }));
  dart.setGetterSignature(platform_view.PlatformViewRenderBox, () => ({
    __proto__: dart.getGetters(platform_view.PlatformViewRenderBox.__proto__),
    controller: platform_views.PlatformViewController
  }));
  dart.setSetterSignature(platform_view.PlatformViewRenderBox, () => ({
    __proto__: dart.getSetters(platform_view.PlatformViewRenderBox.__proto__),
    controller: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(platform_view.PlatformViewRenderBox, I[0]);
  dart.setFieldSignature(platform_view.PlatformViewRenderBox, () => ({
    __proto__: dart.getFields(platform_view.PlatformViewRenderBox.__proto__),
    [_controller]: dart.fieldType(platform_views.PlatformViewController)
  }));
  platform_view.RenderAndroidView = class RenderAndroidView extends platform_view.PlatformViewRenderBox {
    static ['_#new#tearOff'](opts) {
      let viewController = opts && 'viewController' in opts ? opts.viewController : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[8] || CT.C8;
      return new platform_view.RenderAndroidView.new({viewController: viewController, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers, clipBehavior: clipBehavior});
    }
    get controller() {
      return this[_viewController];
    }
    set controller(controller) {
      platform_views.AndroidViewController.as(controller);
      if (!!this[_isDisposed]) dart.assertFailed(null, I[1], 112, 12, "!_isDisposed");
      if (!(this[_viewController] !== null)) dart.assertFailed(null, I[1], 113, 12, "_viewController != null");
      if (!(controller !== null)) dart.assertFailed(null, I[1], 114, 12, "controller != null");
      if (this[_viewController][$_equals](controller)) {
        return;
      }
      this[_viewController].removeOnPlatformViewCreatedListener(dart.bind(this, _onPlatformViewCreated));
      super.controller = controller;
      this[_viewController] = controller;
      this[_viewController].pointTransformer = dart.fn(offset => this.globalToLocal(offset), T.OffsetToOffset());
      this[_sizePlatformView]();
      if (this[_viewController].isCreated) {
        this.markNeedsSemanticsUpdate();
      }
      this[_viewController].addOnPlatformViewCreatedListener(dart.bind(this, _onPlatformViewCreated));
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 135, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    [_onPlatformViewCreated](id) {
      if (!!this[_isDisposed]) dart.assertFailed(null, I[1], 144, 12, "!_isDisposed");
      this.markNeedsSemanticsUpdate();
    }
    get sizedByParent() {
      return true;
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    get isRepaintBoundary() {
      return true;
    }
    computeDryLayout(constraints) {
      return constraints.biggest;
    }
    performResize() {
      super.performResize();
      this[_sizePlatformView]();
    }
    [_sizePlatformView]() {
      return async.async(dart.void, (function* _sizePlatformView() {
        if (this[_state] === platform_view._PlatformViewState.resizing || this.size.isEmpty) {
          return;
        }
        this[_state] = platform_view._PlatformViewState.resizing;
        this.markNeedsPaint();
        let targetSize = null;
        do {
          targetSize = this.size;
          this[_currentTextureSize] = (yield this[_viewController].setSize(targetSize));
          if (this[_isDisposed]) {
            return;
          }
        } while (!this.size._equals(targetSize));
        this[_state] = platform_view._PlatformViewState.ready;
        this.markNeedsPaint();
      }).bind(this));
    }
    [_setOffset]() {
      binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(_ => async.async(dart.void, (function*() {
        if (!this[_isDisposed]) {
          if (this.attached) {
            yield this[_viewController].setOffset(this.localToGlobal(ui.Offset.zero));
          }
          this[_setOffset]();
        }
      }).bind(this)), T.DurationToFutureOfvoid()));
    }
    paint(context, offset) {
      if (this[_viewController].textureId == null || this[_currentTextureSize] == null) {
        return;
      }
      let isTextureLargerThanWidget = dart.nullCheck(this[_currentTextureSize]).width > this.size.width || dart.nullCheck(this[_currentTextureSize]).height > this.size.height;
      if (isTextureLargerThanWidget && this.clipBehavior !== ui.Clip.none) {
        this[_clipRectLayer].layer = context.pushClipRect(true, offset, offset['&'](this.size), dart.bind(this, _paintTexture), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
        return;
      }
      this[_clipRectLayer].layer = null;
      this[_paintTexture](context, offset);
    }
    dispose() {
      this[_isDisposed] = true;
      this[_clipRectLayer].layer = null;
      this[_viewController].removeOnPlatformViewCreatedListener(dart.bind(this, _onPlatformViewCreated));
      super.dispose();
    }
    [_paintTexture](context, offset) {
      if (this[_currentTextureSize] == null) {
        return;
      }
      context.addLayer(new layer.TextureLayer.new({rect: offset['&'](dart.nullCheck(this[_currentTextureSize])), textureId: dart.nullCheck(this[_viewController].textureId)}));
    }
    describeSemanticsConfiguration(config) {
      config.isSemanticBoundary = true;
      if (this[_viewController].isCreated) {
        config.platformViewId = this[_viewController].viewId;
      }
    }
  };
  (platform_view.RenderAndroidView.new = function(opts) {
    let viewController = opts && 'viewController' in opts ? opts.viewController : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[8] || CT.C8;
    this[_state] = platform_view._PlatformViewState.uninitialized;
    this[_currentTextureSize] = null;
    this[_isDisposed] = false;
    this[_clipBehavior] = ui.Clip.hardEdge;
    this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
    if (!(viewController !== null)) dart.assertFailed(null, I[1], 83, 15, "viewController != null");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[1], 84, 15, "hitTestBehavior != null");
    if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[1], 85, 15, "gestureRecognizers != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 86, 15, "clipBehavior != null");
    this[_viewController] = viewController;
    this[_clipBehavior] = clipBehavior;
    platform_view.RenderAndroidView.__proto__.new.call(this, {controller: viewController, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers});
    this[_viewController].pointTransformer = dart.fn(offset => this.globalToLocal(offset), T.OffsetToOffset());
    this.updateGestureRecognizers(gestureRecognizers);
    this[_viewController].addOnPlatformViewCreatedListener(dart.bind(this, _onPlatformViewCreated));
    this.hitTestBehavior = hitTestBehavior;
    this[_setOffset]();
  }).prototype = platform_view.RenderAndroidView.prototype;
  dart.addTypeTests(platform_view.RenderAndroidView);
  dart.addTypeCaches(platform_view.RenderAndroidView);
  dart.setMethodSignature(platform_view.RenderAndroidView, () => ({
    __proto__: dart.getMethods(platform_view.RenderAndroidView.__proto__),
    [_onPlatformViewCreated]: dart.fnType(dart.void, [core.int]),
    [_sizePlatformView]: dart.fnType(async.Future$(dart.void), []),
    [_setOffset]: dart.fnType(dart.void, []),
    [_paintTexture]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
  }));
  dart.setGetterSignature(platform_view.RenderAndroidView, () => ({
    __proto__: dart.getGetters(platform_view.RenderAndroidView.__proto__),
    controller: platform_views.AndroidViewController,
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(platform_view.RenderAndroidView, () => ({
    __proto__: dart.getSetters(platform_view.RenderAndroidView.__proto__),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(platform_view.RenderAndroidView, I[0]);
  dart.setFieldSignature(platform_view.RenderAndroidView, () => ({
    __proto__: dart.getFields(platform_view.RenderAndroidView.__proto__),
    [_state]: dart.fieldType(platform_view._PlatformViewState),
    [_currentTextureSize]: dart.fieldType(dart.nullable(ui.Size)),
    [_isDisposed]: dart.fieldType(core.bool),
    [_viewController]: dart.fieldType(platform_views.AndroidViewController),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
  }));
  var hitTestBehavior$ = dart.privateName(platform_view, "RenderUiKitView.hitTestBehavior");
  var _lastPointerDownEvent = dart.privateName(platform_view, "_lastPointerDownEvent");
  var _handleGlobalPointerEvent = dart.privateName(platform_view, "_handleGlobalPointerEvent");
  platform_view.RenderUiKitView = class RenderUiKitView extends box.RenderBox {
    get hitTestBehavior() {
      return this[hitTestBehavior$];
    }
    set hitTestBehavior(value) {
      this[hitTestBehavior$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let viewController = opts && 'viewController' in opts ? opts.viewController : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      return new platform_view.RenderUiKitView.new({viewController: viewController, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers});
    }
    get viewController() {
      return this[_viewController];
    }
    set viewController(viewController) {
      if (!(viewController !== null)) dart.assertFailed(null, I[1], 324, 12, "viewController != null");
      let needsSemanticsUpdate = this[_viewController].id !== viewController.id;
      this[_viewController] = viewController;
      this.markNeedsPaint();
      if (needsSemanticsUpdate) {
        this.markNeedsSemanticsUpdate();
      }
    }
    updateGestureRecognizers(gestureRecognizers) {
      let t4, t4$;
      if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[1], 340, 12, "gestureRecognizers != null");
      if (!(platform_view._factoriesTypeSet(recognizer.OneSequenceGestureRecognizer, gestureRecognizers)[$length] === gestureRecognizers[$length])) dart.assertFailed("There were multiple gesture recognizer factories for the same type, there must only be a single " + "gesture recognizer factory for each gesture recognizer type.", I[1], 342, 7, "_factoriesTypeSet(gestureRecognizers).length == gestureRecognizers.length");
      if (platform_view._factoryTypesSetEquals(recognizer.OneSequenceGestureRecognizer, gestureRecognizers, (t4 = this[_gestureRecognizer$], t4 == null ? null : t4.gestureRecognizerFactories))) {
        return;
      }
      t4$ = this[_gestureRecognizer$];
      t4$ == null ? null : t4$.dispose();
      this[_gestureRecognizer$] = new platform_view._UiKitViewGestureRecognizer.new(this.viewController, gestureRecognizers);
    }
    get sizedByParent() {
      return true;
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    get isRepaintBoundary() {
      return true;
    }
    computeDryLayout(constraints) {
      return constraints.biggest;
    }
    paint(context, offset) {
      context.addLayer(new layer.PlatformViewLayer.new({rect: offset['&'](this.size), viewId: this[_viewController].id}));
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this.hitTestBehavior === platform_view.PlatformViewHitTestBehavior.transparent || !this.size.contains(dart.nullCheck(position))) {
        return false;
      }
      result.add(new box.BoxHitTestEntry.new(this, position));
      return this.hitTestBehavior === platform_view.PlatformViewHitTestBehavior.opaque;
    }
    hitTestSelf(position) {
      return this.hitTestBehavior !== platform_view.PlatformViewHitTestBehavior.transparent;
    }
    handleEvent(event, entry) {
      let t4;
      T.HitTestEntryOfHitTestTarget().as(entry);
      if (!events.PointerDownEvent.is(event)) {
        return;
      }
      dart.nullCheck(this[_gestureRecognizer$]).addPointer(event);
      this[_lastPointerDownEvent] = (t4 = event.original, t4 == null ? event : t4);
    }
    [_handleGlobalPointerEvent](event) {
      let t4;
      if (!events.PointerDownEvent.is(event)) {
        return;
      }
      if (!ui.Offset.zero['&'](this.size).contains(this.globalToLocal(event.position))) {
        return;
      }
      if (!dart.equals((t4 = event.original, t4 == null ? event : t4), this[_lastPointerDownEvent])) {
        this[_viewController].rejectGesture();
      }
      this[_lastPointerDownEvent] = null;
    }
    describeSemanticsConfiguration(config) {
      super.describeSemanticsConfiguration(config);
      config.isSemanticBoundary = true;
      config.platformViewId = this[_viewController].id;
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      super.attach(owner);
      binding$.GestureBinding.instance.pointerRouter.addGlobalRoute(dart.bind(this, _handleGlobalPointerEvent));
    }
    detach() {
      binding$.GestureBinding.instance.pointerRouter.removeGlobalRoute(dart.bind(this, _handleGlobalPointerEvent));
      dart.nullCheck(this[_gestureRecognizer$]).reset();
      super.detach();
    }
  };
  (platform_view.RenderUiKitView.new = function(opts) {
    let viewController = opts && 'viewController' in opts ? opts.viewController : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    this[_gestureRecognizer$] = null;
    this[_lastPointerDownEvent] = null;
    this[hitTestBehavior$] = hitTestBehavior;
    if (!(viewController !== null)) dart.assertFailed(null, I[1], 309, 15, "viewController != null");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[1], 310, 15, "hitTestBehavior != null");
    if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[1], 311, 15, "gestureRecognizers != null");
    this[_viewController] = viewController;
    platform_view.RenderUiKitView.__proto__.new.call(this);
    this.updateGestureRecognizers(gestureRecognizers);
  }).prototype = platform_view.RenderUiKitView.prototype;
  dart.addTypeTests(platform_view.RenderUiKitView);
  dart.addTypeCaches(platform_view.RenderUiKitView);
  dart.setMethodSignature(platform_view.RenderUiKitView, () => ({
    __proto__: dart.getMethods(platform_view.RenderUiKitView.__proto__),
    updateGestureRecognizers: dart.fnType(dart.void, [core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer))]),
    hitTest: dart.fnType(core.bool, [box.BoxHitTestResult], {position: dart.nullable(ui.Offset)}, {}),
    [_handleGlobalPointerEvent]: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(platform_view.RenderUiKitView, () => ({
    __proto__: dart.getGetters(platform_view.RenderUiKitView.__proto__),
    viewController: platform_views.UiKitViewController
  }));
  dart.setSetterSignature(platform_view.RenderUiKitView, () => ({
    __proto__: dart.getSetters(platform_view.RenderUiKitView.__proto__),
    viewController: platform_views.UiKitViewController
  }));
  dart.setLibraryUri(platform_view.RenderUiKitView, I[0]);
  dart.setFieldSignature(platform_view.RenderUiKitView, () => ({
    __proto__: dart.getFields(platform_view.RenderUiKitView.__proto__),
    [_viewController]: dart.fieldType(platform_views.UiKitViewController),
    hitTestBehavior: dart.fieldType(platform_view.PlatformViewHitTestBehavior),
    [_gestureRecognizer$]: dart.fieldType(dart.nullable(platform_view._UiKitViewGestureRecognizer)),
    [_lastPointerDownEvent]: dart.fieldType(dart.nullable(events.PointerEvent))
  }));
  var ___UiKitViewGestureRecognizer__gestureRecognizers = dart.privateName(platform_view, "_#_UiKitViewGestureRecognizer#_gestureRecognizers");
  var _gestureRecognizers = dart.privateName(platform_view, "_gestureRecognizers");
  platform_view._UiKitViewGestureRecognizer = class _UiKitViewGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    static ['_#new#tearOff'](controller, gestureRecognizerFactories) {
      return new platform_view._UiKitViewGestureRecognizer.new(controller, gestureRecognizerFactories);
    }
    get [_gestureRecognizers]() {
      let t4;
      t4 = this[___UiKitViewGestureRecognizer__gestureRecognizers];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_gestureRecognizers")) : t4;
    }
    set [_gestureRecognizers](library$32package$58flutter$47src$47rendering$47platform_view$46dart$58$58_gestureRecognizers$35param) {
      this[___UiKitViewGestureRecognizer__gestureRecognizers] = library$32package$58flutter$47src$47rendering$47platform_view$46dart$58$58_gestureRecognizers$35param;
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      for (let recognizer of this[_gestureRecognizers]) {
        recognizer.addPointer(event);
      }
    }
    get debugDescription() {
      return "UIKit view";
    }
    didStopTrackingLastPointer(pointer) {
    }
    handleEvent(event) {
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      this.controller.acceptGesture();
    }
    rejectGesture(pointer) {
      this.controller.rejectGesture();
    }
    reset() {
      this.resolve(arena.GestureDisposition.rejected);
    }
  };
  (platform_view._UiKitViewGestureRecognizer.new = function(controller, gestureRecognizerFactories) {
    let t4;
    this[___UiKitViewGestureRecognizer__gestureRecognizers] = null;
    this.controller = controller;
    this.gestureRecognizerFactories = gestureRecognizerFactories;
    platform_view._UiKitViewGestureRecognizer.__proto__.new.call(this);
    this.team = (t4 = new team.GestureArenaTeam.new(), (() => {
      t4.captain = this;
      return t4;
    })());
    this[_gestureRecognizers] = this.gestureRecognizerFactories[$map](recognizer.OneSequenceGestureRecognizer, dart.fn(recognizerFactory => {
      let t4, t4$, t4$0;
      let gestureRecognizer = recognizerFactory._constructor();
      gestureRecognizer.team = this.team;
      if (long_press.LongPressGestureRecognizer.is(gestureRecognizer)) {
        t4 = gestureRecognizer;
        t4.onLongPress == null ? t4.onLongPress = dart.fn(() => {
        }, T.VoidTovoid()) : null;
      } else if (monodrag.DragGestureRecognizer.is(gestureRecognizer)) {
        t4$ = gestureRecognizer;
        t4$.onDown == null ? t4$.onDown = dart.fn(_ => {
        }, T.DragDownDetailsTovoid()) : null;
      } else if (tap.TapGestureRecognizer.is(gestureRecognizer)) {
        t4$0 = gestureRecognizer;
        t4$0.onTapDown == null ? t4$0.onTapDown = dart.fn(_ => {
        }, T.TapDownDetailsTovoid()) : null;
      }
      return gestureRecognizer;
    }, T.FactoryOfOneSequenceGestureRecognizerToOneSequenceGestureRecognizer()))[$toSet]();
  }).prototype = platform_view._UiKitViewGestureRecognizer.prototype;
  dart.addTypeTests(platform_view._UiKitViewGestureRecognizer);
  dart.addTypeCaches(platform_view._UiKitViewGestureRecognizer);
  dart.setMethodSignature(platform_view._UiKitViewGestureRecognizer, () => ({
    __proto__: dart.getMethods(platform_view._UiKitViewGestureRecognizer.__proto__),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(platform_view._UiKitViewGestureRecognizer, () => ({
    __proto__: dart.getGetters(platform_view._UiKitViewGestureRecognizer.__proto__),
    [_gestureRecognizers]: core.Set$(recognizer.OneSequenceGestureRecognizer),
    debugDescription: core.String
  }));
  dart.setSetterSignature(platform_view._UiKitViewGestureRecognizer, () => ({
    __proto__: dart.getSetters(platform_view._UiKitViewGestureRecognizer.__proto__),
    [_gestureRecognizers]: core.Set$(recognizer.OneSequenceGestureRecognizer)
  }));
  dart.setLibraryUri(platform_view._UiKitViewGestureRecognizer, I[0]);
  dart.setFieldSignature(platform_view._UiKitViewGestureRecognizer, () => ({
    __proto__: dart.getFields(platform_view._UiKitViewGestureRecognizer.__proto__),
    gestureRecognizerFactories: dart.finalFieldType(core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer))),
    [___UiKitViewGestureRecognizer__gestureRecognizers]: dart.fieldType(dart.nullable(core.Set$(recognizer.OneSequenceGestureRecognizer))),
    controller: dart.finalFieldType(platform_views.UiKitViewController)
  }));
  var ___PlatformViewGestureRecognizer__handlePointerEvent = dart.privateName(platform_view, "_#_PlatformViewGestureRecognizer#_handlePointerEvent");
  var ___PlatformViewGestureRecognizer__gestureRecognizers = dart.privateName(platform_view, "_#_PlatformViewGestureRecognizer#_gestureRecognizers");
  var _cacheEvent = dart.privateName(platform_view, "_cacheEvent");
  var _flushPointerCache = dart.privateName(platform_view, "_flushPointerCache");
  platform_view._PlatformViewGestureRecognizer = class _PlatformViewGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    static ['_#new#tearOff'](handlePointerEvent, gestureRecognizerFactories) {
      return new platform_view._PlatformViewGestureRecognizer.new(handlePointerEvent, gestureRecognizerFactories);
    }
    get [_handlePointerEvent$]() {
      let t4;
      t4 = this[___PlatformViewGestureRecognizer__handlePointerEvent];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_handlePointerEvent")) : t4;
    }
    set [_handlePointerEvent$](library$32package$58flutter$47src$47rendering$47platform_view$46dart$58$58_handlePointerEvent$35param) {
      this[___PlatformViewGestureRecognizer__handlePointerEvent] = library$32package$58flutter$47src$47rendering$47platform_view$46dart$58$58_handlePointerEvent$35param;
    }
    get [_gestureRecognizers]() {
      let t4;
      t4 = this[___PlatformViewGestureRecognizer__gestureRecognizers];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_gestureRecognizers")) : t4;
    }
    set [_gestureRecognizers](library$32package$58flutter$47src$47rendering$47platform_view$46dart$58$58_gestureRecognizers$35param) {
      this[___PlatformViewGestureRecognizer__gestureRecognizers] = library$32package$58flutter$47src$47rendering$47platform_view$46dart$58$58_gestureRecognizers$35param;
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      for (let recognizer of this[_gestureRecognizers]) {
        recognizer.addPointer(event);
      }
    }
    get debugDescription() {
      return "Platform view";
    }
    didStopTrackingLastPointer(pointer) {
    }
    handleEvent(event) {
      let t4;
      if (!this.forwardedPointers.contains(event.pointer)) {
        this[_cacheEvent](event);
      } else {
        t4 = event;
        this[_handlePointerEvent$](t4);
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      this[_flushPointerCache](pointer);
      this.forwardedPointers.add(pointer);
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
      this.cachedEvents[$remove](pointer);
    }
    [_cacheEvent](event) {
      if (!this.cachedEvents[$containsKey](event.pointer)) {
        this.cachedEvents[$_set](event.pointer, T.JSArrayOfPointerEvent().of([]));
      }
      dart.nullCheck(this.cachedEvents[$_get](event.pointer))[$add](event);
    }
    [_flushPointerCache](pointer) {
      let t4;
      t4 = this.cachedEvents[$remove](pointer);
      t4 == null ? null : t4[$forEach](this[_handlePointerEvent$]);
    }
    stopTrackingPointer(pointer) {
      super.stopTrackingPointer(pointer);
      this.forwardedPointers.remove(pointer);
    }
    reset() {
      this.forwardedPointers[$forEach](dart.bind(this, 'stopTrackingPointer', super.stopTrackingPointer));
      this.forwardedPointers.clear();
      this.cachedEvents[$keys][$forEach](dart.bind(this, 'stopTrackingPointer', super.stopTrackingPointer));
      this.cachedEvents[$clear]();
      this.resolve(arena.GestureDisposition.rejected);
    }
  };
  (platform_view._PlatformViewGestureRecognizer.new = function(handlePointerEvent, gestureRecognizerFactories) {
    let t4;
    this[___PlatformViewGestureRecognizer__handlePointerEvent] = null;
    this.cachedEvents = new (T.IdentityMapOfint$ListOfPointerEvent()).new();
    this.forwardedPointers = T.LinkedHashSetOfint().new();
    this[___PlatformViewGestureRecognizer__gestureRecognizers] = null;
    this.gestureRecognizerFactories = gestureRecognizerFactories;
    platform_view._PlatformViewGestureRecognizer.__proto__.new.call(this);
    this.team = (t4 = new team.GestureArenaTeam.new(), (() => {
      t4.captain = this;
      return t4;
    })());
    this[_gestureRecognizers] = this.gestureRecognizerFactories[$map](recognizer.OneSequenceGestureRecognizer, dart.fn(recognizerFactory => {
      let t4, t4$, t4$0;
      let gestureRecognizer = recognizerFactory._constructor();
      gestureRecognizer.team = this.team;
      if (long_press.LongPressGestureRecognizer.is(gestureRecognizer)) {
        t4 = gestureRecognizer;
        t4.onLongPress == null ? t4.onLongPress = dart.fn(() => {
        }, T.VoidTovoid()) : null;
      } else if (monodrag.DragGestureRecognizer.is(gestureRecognizer)) {
        t4$ = gestureRecognizer;
        t4$.onDown == null ? t4$.onDown = dart.fn(_ => {
        }, T.DragDownDetailsTovoid()) : null;
      } else if (tap.TapGestureRecognizer.is(gestureRecognizer)) {
        t4$0 = gestureRecognizer;
        t4$0.onTapDown == null ? t4$0.onTapDown = dart.fn(_ => {
        }, T.TapDownDetailsTovoid()) : null;
      }
      return gestureRecognizer;
    }, T.FactoryOfOneSequenceGestureRecognizerToOneSequenceGestureRecognizer()))[$toSet]();
    this[_handlePointerEvent$] = handlePointerEvent;
  }).prototype = platform_view._PlatformViewGestureRecognizer.prototype;
  dart.addTypeTests(platform_view._PlatformViewGestureRecognizer);
  dart.addTypeCaches(platform_view._PlatformViewGestureRecognizer);
  dart.setMethodSignature(platform_view._PlatformViewGestureRecognizer, () => ({
    __proto__: dart.getMethods(platform_view._PlatformViewGestureRecognizer.__proto__),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    [_cacheEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    [_flushPointerCache]: dart.fnType(dart.void, [core.int]),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(platform_view._PlatformViewGestureRecognizer, () => ({
    __proto__: dart.getGetters(platform_view._PlatformViewGestureRecognizer.__proto__),
    [_handlePointerEvent$]: dart.fnType(async.Future$(dart.void), [events.PointerEvent]),
    [_gestureRecognizers]: core.Set$(recognizer.OneSequenceGestureRecognizer),
    debugDescription: core.String
  }));
  dart.setSetterSignature(platform_view._PlatformViewGestureRecognizer, () => ({
    __proto__: dart.getSetters(platform_view._PlatformViewGestureRecognizer.__proto__),
    [_handlePointerEvent$]: dart.fnType(async.Future$(dart.void), [events.PointerEvent]),
    [_gestureRecognizers]: core.Set$(recognizer.OneSequenceGestureRecognizer)
  }));
  dart.setLibraryUri(platform_view._PlatformViewGestureRecognizer, I[0]);
  dart.setFieldSignature(platform_view._PlatformViewGestureRecognizer, () => ({
    __proto__: dart.getFields(platform_view._PlatformViewGestureRecognizer.__proto__),
    [___PlatformViewGestureRecognizer__handlePointerEvent]: dart.fieldType(dart.nullable(dart.fnType(async.Future$(dart.void), [events.PointerEvent]))),
    cachedEvents: dart.finalFieldType(core.Map$(core.int, core.List$(events.PointerEvent))),
    forwardedPointers: dart.finalFieldType(core.Set$(core.int)),
    gestureRecognizerFactories: dart.finalFieldType(core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer))),
    [___PlatformViewGestureRecognizer__gestureRecognizers]: dart.fieldType(dart.nullable(core.Set$(recognizer.OneSequenceGestureRecognizer)))
  }));
  platform_view._factoryTypesSetEquals = function _factoryTypesSetEquals(T, a, b) {
    if (dart.equals(a, b)) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return collections.setEquals(core.Type, platform_view._factoriesTypeSet(T, a), platform_view._factoriesTypeSet(T, b));
  };
  platform_view._factoriesTypeSet = function _factoriesTypeSet(T, factories) {
    return factories[$map](core.Type, dart.fn(factory => factory.type, dart.fnType(core.Type, [basic_types.Factory$(T)])))[$toSet]();
  };
  dart.trackLibraries("packages/flutter/src/rendering/platform_view.dart", {
    "package:flutter/src/rendering/platform_view.dart": platform_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["platform_view.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/platform_view.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__platform_view: platform_view
  };
}));

//# sourceMappingURL=platform_view.dart.lib.js.map