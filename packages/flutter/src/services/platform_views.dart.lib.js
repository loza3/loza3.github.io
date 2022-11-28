define(['dart_sdk', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/gestures/events.dart'], (function load__packages__flutter__src__services__platform_views_dart(dart_sdk, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__gestures__events$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__text_editing_delta$46dart.src__services__system_channels;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  var platform_views = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $buffer = dartx.buffer;
  var $lengthInBytes = dartx.lengthInBytes;
  var $length = dartx.length;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $isEmpty = dartx.isEmpty;
  var $remove = dartx.remove;
  var $keys = dartx.keys;
  var $indexOf = dartx.indexOf;
  var $add = dartx.add;
  var $clear = dartx.clear;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    IdentityMapOfint$VoidTovoid: () => (T.IdentityMapOfint$VoidTovoid = dart.constFn(_js_helper.IdentityMap$(core.int, T.VoidTovoid())))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    AndroidPointerPropertiesToListOfint: () => (T.AndroidPointerPropertiesToListOfint = dart.constFn(dart.fnType(T.ListOfint(), [platform_views.AndroidPointerProperties])))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    AndroidPointerCoordsToListOfdouble: () => (T.AndroidPointerCoordsToListOfdouble = dart.constFn(dart.fnType(T.ListOfdouble(), [platform_views.AndroidPointerCoords])))(),
    IdentityMapOfint$AndroidPointerCoords: () => (T.IdentityMapOfint$AndroidPointerCoords = dart.constFn(_js_helper.IdentityMap$(core.int, platform_views.AndroidPointerCoords)))(),
    IdentityMapOfint$AndroidPointerProperties: () => (T.IdentityMapOfint$AndroidPointerProperties = dart.constFn(_js_helper.IdentityMap$(core.int, platform_views.AndroidPointerProperties)))(),
    LinkedHashSetOfint: () => (T.LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))(),
    intToAndroidPointerProperties: () => (T.intToAndroidPointerProperties = dart.constFn(dart.fnType(platform_views.AndroidPointerProperties, [core.int])))(),
    intToAndroidPointerCoords: () => (T.intToAndroidPointerCoords = dart.constFn(dart.fnType(platform_views.AndroidPointerCoords, [core.int])))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    JSArrayOfintTovoid: () => (T.JSArrayOfintTovoid = dart.constFn(_interceptors.JSArray$(T.intTovoid())))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: platform_views._AndroidViewState.prototype,
        [_Enum__name]: "waitingForSize",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: platform_views._AndroidViewState.prototype,
        [_Enum__name]: "creating",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: platform_views._AndroidViewState.prototype,
        [_Enum__name]: "created",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: platform_views._AndroidViewState.prototype,
        [_Enum__name]: "disposed",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], platform_views._AndroidViewState);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "touch",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "trackpad",
        [_Enum_index]: 4
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "mouse",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "stylus",
        [_Enum_index]: 2
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "invertedStylus",
        [_Enum_index]: 3
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "unknown",
        [_Enum_index]: 5
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(13).fill(void 0);
  var I = [
    "package:flutter/src/services/platform_views.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/services/platform_views.dart"
  ];
  var _nextPlatformViewId = dart.privateName(platform_views, "_nextPlatformViewId");
  platform_views.PlatformViewsRegistry = class PlatformViewsRegistry extends core.Object {
    static ['_#_instance#tearOff']() {
      return new platform_views.PlatformViewsRegistry._instance();
    }
    getNextPlatformViewId() {
      let t0;
      t0 = this[_nextPlatformViewId];
      this[_nextPlatformViewId] = t0 + 1;
      return t0;
    }
  };
  (platform_views.PlatformViewsRegistry._instance = function() {
    this[_nextPlatformViewId] = 0;
    ;
  }).prototype = platform_views.PlatformViewsRegistry.prototype;
  dart.addTypeTests(platform_views.PlatformViewsRegistry);
  dart.addTypeCaches(platform_views.PlatformViewsRegistry);
  dart.setMethodSignature(platform_views.PlatformViewsRegistry, () => ({
    __proto__: dart.getMethods(platform_views.PlatformViewsRegistry.__proto__),
    getNextPlatformViewId: dart.fnType(core.int, [])
  }));
  dart.setLibraryUri(platform_views.PlatformViewsRegistry, I[0]);
  dart.setFieldSignature(platform_views.PlatformViewsRegistry, () => ({
    __proto__: dart.getFields(platform_views.PlatformViewsRegistry.__proto__),
    [_nextPlatformViewId]: dart.fieldType(core.int)
  }));
  var _focusCallbacks = dart.privateName(platform_views, "_focusCallbacks");
  var _onMethodCall = dart.privateName(platform_views, "_onMethodCall");
  platform_views.PlatformViewsService = class PlatformViewsService extends core.Object {
    static ['_#_#tearOff']() {
      return new platform_views.PlatformViewsService.__();
    }
    [_onMethodCall](call) {
      switch (call.method) {
        case "viewFocused":
          {
            let id = core.int.as(call.arguments);
            if (this[_focusCallbacks][$containsKey](id)) {
              dart.nullCheck(this[_focusCallbacks][$_get](id))();
            }
            break;
          }
        default:
          {
            dart.throw(new core.UnimplementedError.new(call.method + " was invoked but isn't implemented by PlatformViewsService"));
          }
      }
      return T.FutureOfvoid().value();
    }
    static initAndroidView(opts) {
      let t0;
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let onFocus = opts && 'onFocus' in opts ? opts.onFocus : null;
      if (!(id !== null)) dart.assertFailed(null, I[1], 118, 12, "id != null");
      if (!(viewType !== null)) dart.assertFailed(null, I[1], 119, 12, "viewType != null");
      if (!(layoutDirection !== null)) dart.assertFailed(null, I[1], 120, 12, "layoutDirection != null");
      if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, I[1], 121, 12, "creationParams == null || creationParamsCodec != null");
      let controller = new platform_views.TextureAndroidViewController.__({viewId: id, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
      platform_views.PlatformViewsService._instance[_focusCallbacks][$_set](id, (t0 = onFocus, t0 == null ? dart.fn(() => {
      }, T.VoidTovoid()) : t0));
      return controller;
    }
    static initSurfaceAndroidView(opts) {
      let t0;
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let onFocus = opts && 'onFocus' in opts ? opts.onFocus : null;
      if (!(id !== null)) dart.assertFailed(null, I[1], 148, 12, "id != null");
      if (!(viewType !== null)) dart.assertFailed(null, I[1], 149, 12, "viewType != null");
      if (!(layoutDirection !== null)) dart.assertFailed(null, I[1], 150, 12, "layoutDirection != null");
      if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, I[1], 151, 12, "creationParams == null || creationParamsCodec != null");
      let controller = new platform_views.SurfaceAndroidViewController.__({viewId: id, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
      platform_views.PlatformViewsService._instance[_focusCallbacks][$_set](id, (t0 = onFocus, t0 == null ? dart.fn(() => {
      }, T.VoidTovoid()) : t0));
      return controller;
    }
    static initExpensiveAndroidView(opts) {
      let t0;
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let onFocus = opts && 'onFocus' in opts ? opts.onFocus : null;
      let controller = new platform_views.ExpensiveAndroidViewController.__({viewId: id, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
      platform_views.PlatformViewsService._instance[_focusCallbacks][$_set](id, (t0 = onFocus, t0 == null ? dart.fn(() => {
      }, T.VoidTovoid()) : t0));
      return controller;
    }
    static synchronizeToNativeViewHierarchy(yes) {
      return async.async(dart.void, function* synchronizeToNativeViewHierarchy() {
      });
    }
    static initUiKitView(opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let onFocus = opts && 'onFocus' in opts ? opts.onFocus : null;
      return async.async(platform_views.UiKitViewController, function* initUiKitView() {
        if (!(id !== null)) dart.assertFailed(null, I[1], 219, 12, "id != null");
        if (!(viewType !== null)) dart.assertFailed(null, I[1], 220, 12, "viewType != null");
        if (!(layoutDirection !== null)) dart.assertFailed(null, I[1], 221, 12, "layoutDirection != null");
        if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, I[1], 222, 12, "creationParams == null || creationParamsCodec != null");
        let args = new (T.IdentityMapOfString$dynamic()).from(["id", id, "viewType", viewType]);
        if (creationParams != null) {
          let paramsByteData = dart.nullCheck(dart.nullCheck(creationParamsCodec).encodeMessage(creationParams));
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "create", args);
        if (onFocus != null) {
          platform_views.PlatformViewsService._instance[_focusCallbacks][$_set](id, onFocus);
        }
        return new platform_views.UiKitViewController.__(id, layoutDirection);
      });
    }
  };
  (platform_views.PlatformViewsService.__ = function() {
    this[_focusCallbacks] = new (T.IdentityMapOfint$VoidTovoid()).new();
    system_channels.SystemChannels.platform_views.setMethodCallHandler(dart.bind(this, _onMethodCall));
  }).prototype = platform_views.PlatformViewsService.prototype;
  dart.addTypeTests(platform_views.PlatformViewsService);
  dart.addTypeCaches(platform_views.PlatformViewsService);
  dart.setMethodSignature(platform_views.PlatformViewsService, () => ({
    __proto__: dart.getMethods(platform_views.PlatformViewsService.__proto__),
    [_onMethodCall]: dart.fnType(async.Future$(dart.void), [message_codec.MethodCall])
  }));
  dart.setStaticMethodSignature(platform_views.PlatformViewsService, () => ['initAndroidView', 'initSurfaceAndroidView', 'initExpensiveAndroidView', 'synchronizeToNativeViewHierarchy', 'initUiKitView']);
  dart.setLibraryUri(platform_views.PlatformViewsService, I[0]);
  dart.setFieldSignature(platform_views.PlatformViewsService, () => ({
    __proto__: dart.getFields(platform_views.PlatformViewsService.__proto__),
    [_focusCallbacks]: dart.finalFieldType(core.Map$(core.int, dart.fnType(dart.void, [])))
  }));
  dart.setStaticFieldSignature(platform_views.PlatformViewsService, () => ['_instance']);
  dart.defineLazy(platform_views.PlatformViewsService, {
    /*platform_views.PlatformViewsService._instance*/get _instance() {
      return new platform_views.PlatformViewsService.__();
    }
  }, false);
  var id$ = dart.privateName(platform_views, "AndroidPointerProperties.id");
  var toolType$ = dart.privateName(platform_views, "AndroidPointerProperties.toolType");
  var _asList = dart.privateName(platform_views, "_asList");
  platform_views.AndroidPointerProperties = class AndroidPointerProperties extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get toolType() {
      return this[toolType$];
    }
    set toolType(value) {
      super.toolType = value;
    }
    static ['_#new#tearOff'](opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let toolType = opts && 'toolType' in opts ? opts.toolType : null;
      return new platform_views.AndroidPointerProperties.new({id: id, toolType: toolType});
    }
    [_asList]() {
      return T.JSArrayOfint().of([this.id, this.toolType]);
    }
    toString() {
      return object.objectRuntimeType(this, "AndroidPointerProperties") + "(id: " + dart.str(this.id) + ", toolType: " + dart.str(this.toolType) + ")";
    }
  };
  (platform_views.AndroidPointerProperties.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let toolType = opts && 'toolType' in opts ? opts.toolType : null;
    this[id$] = id;
    this[toolType$] = toolType;
    if (!(id !== null)) dart.assertFailed(null, I[1], 255, 15, "id != null");
    if (!(toolType !== null)) dart.assertFailed(null, I[1], 256, 15, "toolType != null");
    ;
  }).prototype = platform_views.AndroidPointerProperties.prototype;
  dart.addTypeTests(platform_views.AndroidPointerProperties);
  dart.addTypeCaches(platform_views.AndroidPointerProperties);
  dart.setMethodSignature(platform_views.AndroidPointerProperties, () => ({
    __proto__: dart.getMethods(platform_views.AndroidPointerProperties.__proto__),
    [_asList]: dart.fnType(core.List$(core.int), [])
  }));
  dart.setLibraryUri(platform_views.AndroidPointerProperties, I[0]);
  dart.setFieldSignature(platform_views.AndroidPointerProperties, () => ({
    __proto__: dart.getFields(platform_views.AndroidPointerProperties.__proto__),
    id: dart.finalFieldType(core.int),
    toolType: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(platform_views.AndroidPointerProperties, () => ['kToolTypeUnknown', 'kToolTypeFinger', 'kToolTypeStylus', 'kToolTypeMouse', 'kToolTypeEraser']);
  dart.defineExtensionMethods(platform_views.AndroidPointerProperties, ['toString']);
  dart.defineLazy(platform_views.AndroidPointerProperties, {
    /*platform_views.AndroidPointerProperties.kToolTypeUnknown*/get kToolTypeUnknown() {
      return 0;
    },
    /*platform_views.AndroidPointerProperties.kToolTypeFinger*/get kToolTypeFinger() {
      return 1;
    },
    /*platform_views.AndroidPointerProperties.kToolTypeStylus*/get kToolTypeStylus() {
      return 2;
    },
    /*platform_views.AndroidPointerProperties.kToolTypeMouse*/get kToolTypeMouse() {
      return 3;
    },
    /*platform_views.AndroidPointerProperties.kToolTypeEraser*/get kToolTypeEraser() {
      return 4;
    }
  }, false);
  var orientation$ = dart.privateName(platform_views, "AndroidPointerCoords.orientation");
  var pressure$ = dart.privateName(platform_views, "AndroidPointerCoords.pressure");
  var size$ = dart.privateName(platform_views, "AndroidPointerCoords.size");
  var toolMajor$ = dart.privateName(platform_views, "AndroidPointerCoords.toolMajor");
  var toolMinor$ = dart.privateName(platform_views, "AndroidPointerCoords.toolMinor");
  var touchMajor$ = dart.privateName(platform_views, "AndroidPointerCoords.touchMajor");
  var touchMinor$ = dart.privateName(platform_views, "AndroidPointerCoords.touchMinor");
  var x$ = dart.privateName(platform_views, "AndroidPointerCoords.x");
  var y$ = dart.privateName(platform_views, "AndroidPointerCoords.y");
  platform_views.AndroidPointerCoords = class AndroidPointerCoords extends core.Object {
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get toolMajor() {
      return this[toolMajor$];
    }
    set toolMajor(value) {
      super.toolMajor = value;
    }
    get toolMinor() {
      return this[toolMinor$];
    }
    set toolMinor(value) {
      super.toolMinor = value;
    }
    get touchMajor() {
      return this[touchMajor$];
    }
    set touchMajor(value) {
      super.touchMajor = value;
    }
    get touchMinor() {
      return this[touchMinor$];
    }
    set touchMinor(value) {
      super.touchMinor = value;
    }
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    static ['_#new#tearOff'](opts) {
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let toolMajor = opts && 'toolMajor' in opts ? opts.toolMajor : null;
      let toolMinor = opts && 'toolMinor' in opts ? opts.toolMinor : null;
      let touchMajor = opts && 'touchMajor' in opts ? opts.touchMajor : null;
      let touchMinor = opts && 'touchMinor' in opts ? opts.touchMinor : null;
      let x = opts && 'x' in opts ? opts.x : null;
      let y = opts && 'y' in opts ? opts.y : null;
      return new platform_views.AndroidPointerCoords.new({orientation: orientation, pressure: pressure, size: size, toolMajor: toolMajor, toolMinor: toolMinor, touchMajor: touchMajor, touchMinor: touchMinor, x: x, y: y});
    }
    [_asList]() {
      return T.JSArrayOfdouble().of([this.orientation, this.pressure, this.size, this.toolMajor, this.toolMinor, this.touchMajor, this.touchMinor, this.x, this.y]);
    }
    toString() {
      return object.objectRuntimeType(this, "AndroidPointerCoords") + "(orientation: " + dart.str(this.orientation) + ", pressure: " + dart.str(this.pressure) + ", size: " + dart.str(this.size) + ", toolMajor: " + dart.str(this.toolMajor) + ", toolMinor: " + dart.str(this.toolMinor) + ", touchMajor: " + dart.str(this.touchMajor) + ", touchMinor: " + dart.str(this.touchMinor) + ", x: " + dart.str(this.x) + ", y: " + dart.str(this.y) + ")";
    }
  };
  (platform_views.AndroidPointerCoords.new = function(opts) {
    let orientation = opts && 'orientation' in opts ? opts.orientation : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let toolMajor = opts && 'toolMajor' in opts ? opts.toolMajor : null;
    let toolMinor = opts && 'toolMinor' in opts ? opts.toolMinor : null;
    let touchMajor = opts && 'touchMajor' in opts ? opts.touchMajor : null;
    let touchMinor = opts && 'touchMinor' in opts ? opts.touchMinor : null;
    let x = opts && 'x' in opts ? opts.x : null;
    let y = opts && 'y' in opts ? opts.y : null;
    this[orientation$] = orientation;
    this[pressure$] = pressure;
    this[size$] = size;
    this[toolMajor$] = toolMajor;
    this[toolMinor$] = toolMinor;
    this[touchMajor$] = touchMajor;
    this[touchMinor$] = touchMinor;
    this[x$] = x;
    this[y$] = y;
    if (!(orientation !== null)) dart.assertFailed(null, I[1], 305, 15, "orientation != null");
    if (!(pressure !== null)) dart.assertFailed(null, I[1], 306, 15, "pressure != null");
    if (!(size !== null)) dart.assertFailed(null, I[1], 307, 15, "size != null");
    if (!(toolMajor !== null)) dart.assertFailed(null, I[1], 308, 15, "toolMajor != null");
    if (!(toolMinor !== null)) dart.assertFailed(null, I[1], 309, 15, "toolMinor != null");
    if (!(touchMajor !== null)) dart.assertFailed(null, I[1], 310, 15, "touchMajor != null");
    if (!(touchMinor !== null)) dart.assertFailed(null, I[1], 311, 15, "touchMinor != null");
    if (!(x !== null)) dart.assertFailed(null, I[1], 312, 15, "x != null");
    if (!(y !== null)) dart.assertFailed(null, I[1], 313, 15, "y != null");
    ;
  }).prototype = platform_views.AndroidPointerCoords.prototype;
  dart.addTypeTests(platform_views.AndroidPointerCoords);
  dart.addTypeCaches(platform_views.AndroidPointerCoords);
  dart.setMethodSignature(platform_views.AndroidPointerCoords, () => ({
    __proto__: dart.getMethods(platform_views.AndroidPointerCoords.__proto__),
    [_asList]: dart.fnType(core.List$(core.double), [])
  }));
  dart.setLibraryUri(platform_views.AndroidPointerCoords, I[0]);
  dart.setFieldSignature(platform_views.AndroidPointerCoords, () => ({
    __proto__: dart.getFields(platform_views.AndroidPointerCoords.__proto__),
    orientation: dart.finalFieldType(core.double),
    pressure: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    toolMajor: dart.finalFieldType(core.double),
    toolMinor: dart.finalFieldType(core.double),
    touchMajor: dart.finalFieldType(core.double),
    touchMinor: dart.finalFieldType(core.double),
    x: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(platform_views.AndroidPointerCoords, ['toString']);
  var downTime$ = dart.privateName(platform_views, "AndroidMotionEvent.downTime");
  var eventTime$ = dart.privateName(platform_views, "AndroidMotionEvent.eventTime");
  var action$ = dart.privateName(platform_views, "AndroidMotionEvent.action");
  var pointerCount$ = dart.privateName(platform_views, "AndroidMotionEvent.pointerCount");
  var pointerProperties$ = dart.privateName(platform_views, "AndroidMotionEvent.pointerProperties");
  var pointerCoords$ = dart.privateName(platform_views, "AndroidMotionEvent.pointerCoords");
  var metaState$ = dart.privateName(platform_views, "AndroidMotionEvent.metaState");
  var buttonState$ = dart.privateName(platform_views, "AndroidMotionEvent.buttonState");
  var xPrecision$ = dart.privateName(platform_views, "AndroidMotionEvent.xPrecision");
  var yPrecision$ = dart.privateName(platform_views, "AndroidMotionEvent.yPrecision");
  var deviceId$ = dart.privateName(platform_views, "AndroidMotionEvent.deviceId");
  var edgeFlags$ = dart.privateName(platform_views, "AndroidMotionEvent.edgeFlags");
  var source$ = dart.privateName(platform_views, "AndroidMotionEvent.source");
  var flags$ = dart.privateName(platform_views, "AndroidMotionEvent.flags");
  var motionEventId$ = dart.privateName(platform_views, "AndroidMotionEvent.motionEventId");
  platform_views.AndroidMotionEvent = class AndroidMotionEvent extends core.Object {
    get downTime() {
      return this[downTime$];
    }
    set downTime(value) {
      super.downTime = value;
    }
    get eventTime() {
      return this[eventTime$];
    }
    set eventTime(value) {
      super.eventTime = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get pointerCount() {
      return this[pointerCount$];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    get pointerProperties() {
      return this[pointerProperties$];
    }
    set pointerProperties(value) {
      super.pointerProperties = value;
    }
    get pointerCoords() {
      return this[pointerCoords$];
    }
    set pointerCoords(value) {
      super.pointerCoords = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get buttonState() {
      return this[buttonState$];
    }
    set buttonState(value) {
      super.buttonState = value;
    }
    get xPrecision() {
      return this[xPrecision$];
    }
    set xPrecision(value) {
      super.xPrecision = value;
    }
    get yPrecision() {
      return this[yPrecision$];
    }
    set yPrecision(value) {
      super.yPrecision = value;
    }
    get deviceId() {
      return this[deviceId$];
    }
    set deviceId(value) {
      super.deviceId = value;
    }
    get edgeFlags() {
      return this[edgeFlags$];
    }
    set edgeFlags(value) {
      super.edgeFlags = value;
    }
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get motionEventId() {
      return this[motionEventId$];
    }
    set motionEventId(value) {
      super.motionEventId = value;
    }
    static ['_#new#tearOff'](opts) {
      let downTime = opts && 'downTime' in opts ? opts.downTime : null;
      let eventTime = opts && 'eventTime' in opts ? opts.eventTime : null;
      let action = opts && 'action' in opts ? opts.action : null;
      let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : null;
      let pointerProperties = opts && 'pointerProperties' in opts ? opts.pointerProperties : null;
      let pointerCoords = opts && 'pointerCoords' in opts ? opts.pointerCoords : null;
      let metaState = opts && 'metaState' in opts ? opts.metaState : null;
      let buttonState = opts && 'buttonState' in opts ? opts.buttonState : null;
      let xPrecision = opts && 'xPrecision' in opts ? opts.xPrecision : null;
      let yPrecision = opts && 'yPrecision' in opts ? opts.yPrecision : null;
      let deviceId = opts && 'deviceId' in opts ? opts.deviceId : null;
      let edgeFlags = opts && 'edgeFlags' in opts ? opts.edgeFlags : null;
      let source = opts && 'source' in opts ? opts.source : null;
      let flags = opts && 'flags' in opts ? opts.flags : null;
      let motionEventId = opts && 'motionEventId' in opts ? opts.motionEventId : null;
      return new platform_views.AndroidMotionEvent.new({downTime: downTime, eventTime: eventTime, action: action, pointerCount: pointerCount, pointerProperties: pointerProperties, pointerCoords: pointerCoords, metaState: metaState, buttonState: buttonState, xPrecision: xPrecision, yPrecision: yPrecision, deviceId: deviceId, edgeFlags: edgeFlags, source: source, flags: flags, motionEventId: motionEventId});
    }
    [_asList](viewId) {
      return [viewId, this.downTime, this.eventTime, this.action, this.pointerCount, this.pointerProperties[$map](T.ListOfint(), dart.fn(p => p[_asList](), T.AndroidPointerPropertiesToListOfint()))[$toList](), this.pointerCoords[$map](T.ListOfdouble(), dart.fn(p => p[_asList](), T.AndroidPointerCoordsToListOfdouble()))[$toList](), this.metaState, this.buttonState, this.xPrecision, this.yPrecision, this.deviceId, this.edgeFlags, this.source, this.flags, this.motionEventId];
    }
    toString() {
      return "AndroidPointerEvent(downTime: " + dart.str(this.downTime) + ", eventTime: " + dart.str(this.eventTime) + ", action: " + dart.str(this.action) + ", pointerCount: " + dart.str(this.pointerCount) + ", pointerProperties: " + dart.str(this.pointerProperties) + ", pointerCoords: " + dart.str(this.pointerCoords) + ", metaState: " + dart.str(this.metaState) + ", buttonState: " + dart.str(this.buttonState) + ", xPrecision: " + dart.str(this.xPrecision) + ", yPrecision: " + dart.str(this.yPrecision) + ", deviceId: " + dart.str(this.deviceId) + ", edgeFlags: " + dart.str(this.edgeFlags) + ", source: " + dart.str(this.source) + ", flags: " + dart.str(this.flags) + ", motionEventId: " + dart.str(this.motionEventId) + ")";
    }
  };
  (platform_views.AndroidMotionEvent.new = function(opts) {
    let downTime = opts && 'downTime' in opts ? opts.downTime : null;
    let eventTime = opts && 'eventTime' in opts ? opts.eventTime : null;
    let action = opts && 'action' in opts ? opts.action : null;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : null;
    let pointerProperties = opts && 'pointerProperties' in opts ? opts.pointerProperties : null;
    let pointerCoords = opts && 'pointerCoords' in opts ? opts.pointerCoords : null;
    let metaState = opts && 'metaState' in opts ? opts.metaState : null;
    let buttonState = opts && 'buttonState' in opts ? opts.buttonState : null;
    let xPrecision = opts && 'xPrecision' in opts ? opts.xPrecision : null;
    let yPrecision = opts && 'yPrecision' in opts ? opts.yPrecision : null;
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : null;
    let edgeFlags = opts && 'edgeFlags' in opts ? opts.edgeFlags : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let flags = opts && 'flags' in opts ? opts.flags : null;
    let motionEventId = opts && 'motionEventId' in opts ? opts.motionEventId : null;
    this[downTime$] = downTime;
    this[eventTime$] = eventTime;
    this[action$] = action;
    this[pointerCount$] = pointerCount;
    this[pointerProperties$] = pointerProperties;
    this[pointerCoords$] = pointerCoords;
    this[metaState$] = metaState;
    this[buttonState$] = buttonState;
    this[xPrecision$] = xPrecision;
    this[yPrecision$] = yPrecision;
    this[deviceId$] = deviceId;
    this[edgeFlags$] = edgeFlags;
    this[source$] = source;
    this[flags$] = flags;
    this[motionEventId$] = motionEventId;
    if (!(downTime !== null)) dart.assertFailed(null, I[1], 401, 15, "downTime != null");
    if (!(eventTime !== null)) dart.assertFailed(null, I[1], 402, 15, "eventTime != null");
    if (!(action !== null)) dart.assertFailed(null, I[1], 403, 15, "action != null");
    if (!(pointerCount !== null)) dart.assertFailed(null, I[1], 404, 15, "pointerCount != null");
    if (!(pointerProperties !== null)) dart.assertFailed(null, I[1], 405, 15, "pointerProperties != null");
    if (!(pointerCoords !== null)) dart.assertFailed(null, I[1], 406, 15, "pointerCoords != null");
    if (!(metaState !== null)) dart.assertFailed(null, I[1], 407, 15, "metaState != null");
    if (!(buttonState !== null)) dart.assertFailed(null, I[1], 408, 15, "buttonState != null");
    if (!(xPrecision !== null)) dart.assertFailed(null, I[1], 409, 15, "xPrecision != null");
    if (!(yPrecision !== null)) dart.assertFailed(null, I[1], 410, 15, "yPrecision != null");
    if (!(deviceId !== null)) dart.assertFailed(null, I[1], 411, 15, "deviceId != null");
    if (!(edgeFlags !== null)) dart.assertFailed(null, I[1], 412, 15, "edgeFlags != null");
    if (!(source !== null)) dart.assertFailed(null, I[1], 413, 15, "source != null");
    if (!(flags !== null)) dart.assertFailed(null, I[1], 414, 15, "flags != null");
    if (!(pointerProperties[$length] === pointerCount)) dart.assertFailed(null, I[1], 415, 15, "pointerProperties.length == pointerCount");
    if (!(pointerCoords[$length] === pointerCount)) dart.assertFailed(null, I[1], 416, 15, "pointerCoords.length == pointerCount");
    ;
  }).prototype = platform_views.AndroidMotionEvent.prototype;
  dart.addTypeTests(platform_views.AndroidMotionEvent);
  dart.addTypeCaches(platform_views.AndroidMotionEvent);
  dart.setMethodSignature(platform_views.AndroidMotionEvent, () => ({
    __proto__: dart.getMethods(platform_views.AndroidMotionEvent.__proto__),
    [_asList]: dart.fnType(core.List, [core.int])
  }));
  dart.setLibraryUri(platform_views.AndroidMotionEvent, I[0]);
  dart.setFieldSignature(platform_views.AndroidMotionEvent, () => ({
    __proto__: dart.getFields(platform_views.AndroidMotionEvent.__proto__),
    downTime: dart.finalFieldType(core.int),
    eventTime: dart.finalFieldType(core.int),
    action: dart.finalFieldType(core.int),
    pointerCount: dart.finalFieldType(core.int),
    pointerProperties: dart.finalFieldType(core.List$(platform_views.AndroidPointerProperties)),
    pointerCoords: dart.finalFieldType(core.List$(platform_views.AndroidPointerCoords)),
    metaState: dart.finalFieldType(core.int),
    buttonState: dart.finalFieldType(core.int),
    xPrecision: dart.finalFieldType(core.double),
    yPrecision: dart.finalFieldType(core.double),
    deviceId: dart.finalFieldType(core.int),
    edgeFlags: dart.finalFieldType(core.int),
    source: dart.finalFieldType(core.int),
    flags: dart.finalFieldType(core.int),
    motionEventId: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(platform_views.AndroidMotionEvent, ['toString']);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  platform_views._AndroidViewState = class _AndroidViewState extends core._Enum {
    toString() {
      return "_AndroidViewState." + this[_name];
    }
  };
  (platform_views._AndroidViewState.new = function(index, name) {
    platform_views._AndroidViewState.__proto__.new.call(this, index, name);
    ;
  }).prototype = platform_views._AndroidViewState.prototype;
  dart.addTypeTests(platform_views._AndroidViewState);
  dart.addTypeCaches(platform_views._AndroidViewState);
  dart.setLibraryUri(platform_views._AndroidViewState, I[0]);
  dart.setStaticFieldSignature(platform_views._AndroidViewState, () => ['values', 'waitingForSize', 'creating', 'created', 'disposed']);
  dart.defineExtensionMethods(platform_views._AndroidViewState, ['toString']);
  dart.defineLazy(platform_views._AndroidViewState, {
    /*platform_views._AndroidViewState.values*/get values() {
      return C[0] || CT.C0;
    },
    /*platform_views._AndroidViewState.waitingForSize*/get waitingForSize() {
      return C[1] || CT.C1;
    },
    /*platform_views._AndroidViewState.creating*/get creating() {
      return C[2] || CT.C2;
    },
    /*platform_views._AndroidViewState.created*/get created() {
      return C[3] || CT.C3;
    },
    /*platform_views._AndroidViewState.disposed*/get disposed() {
      return C[4] || CT.C4;
    }
  }, false);
  var ___AndroidMotionEventConverter__pointTransformer = dart.privateName(platform_views, "_#_AndroidMotionEventConverter#_pointTransformer");
  var _pointTransformer = dart.privateName(platform_views, "_pointTransformer");
  var _remove = dart.privateName(platform_views, "_remove");
  platform_views._AndroidMotionEventConverter = class _AndroidMotionEventConverter extends core.Object {
    static ['_#new#tearOff']() {
      return new platform_views._AndroidMotionEventConverter.new();
    }
    get pointTransformer() {
      return this[_pointTransformer];
    }
    get [_pointTransformer]() {
      let t2;
      t2 = this[___AndroidMotionEventConverter__pointTransformer];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_pointTransformer")) : t2;
    }
    set [_pointTransformer](library$32package$58flutter$47src$47services$47platform_views$46dart$58$58_pointTransformer$35param) {
      this[___AndroidMotionEventConverter__pointTransformer] = library$32package$58flutter$47src$47services$47platform_views$46dart$58$58_pointTransformer$35param;
    }
    set pointTransformer(transformer) {
      if (!(transformer !== null)) dart.assertFailed(null, I[1], 532, 12, "transformer != null");
      this[_pointTransformer] = transformer;
    }
    handlePointerDownEvent(event) {
      if (this.pointerProperties[$isEmpty]) {
        this.downTimeMillis = event.timeStamp.inMilliseconds;
      }
      let androidPointerId = 0;
      while (this.usedAndroidPointerIds.contains(androidPointerId)) {
        androidPointerId = androidPointerId + 1;
      }
      this.usedAndroidPointerIds.add(androidPointerId);
      this.pointerProperties[$_set](event.pointer, this.propertiesFor(event, androidPointerId));
    }
    updatePointerPositions(event) {
      let t2;
      let position = (t2 = event.position, this[_pointTransformer](t2));
      this.pointerPositions[$_set](event.pointer, new platform_views.AndroidPointerCoords.new({orientation: event.orientation, pressure: event.pressure, size: event.size, toolMajor: event.radiusMajor, toolMinor: event.radiusMinor, touchMajor: event.radiusMajor, touchMinor: event.radiusMinor, x: position.dx, y: position.dy}));
    }
    [_remove](pointer) {
      this.pointerPositions[$remove](pointer);
      this.usedAndroidPointerIds.remove(dart.nullCheck(this.pointerProperties[$_get](pointer)).id);
      this.pointerProperties[$remove](pointer);
      if (this.pointerProperties[$isEmpty]) {
        this.downTimeMillis = null;
      }
    }
    handlePointerUpEvent(event) {
      this[_remove](event.pointer);
    }
    handlePointerCancelEvent(event) {
      this[_remove](event.pointer);
    }
    toAndroidMotionEvent(event) {
      let pointers = this.pointerPositions[$keys][$toList]();
      let pointerIdx = pointers[$indexOf](event.pointer);
      let numPointers = pointers[$length];
      if (event.platformData === 1 || this.isSinglePointerAction(event) && pointerIdx < numPointers - 1) {
        return null;
      }
      let action = null;
      if (events.PointerDownEvent.is(event)) {
        action = numPointers === 1 ? 0 : platform_views.AndroidViewController.pointerAction(pointerIdx, 5);
      } else if (events.PointerUpEvent.is(event)) {
        action = numPointers === 1 ? 1 : platform_views.AndroidViewController.pointerAction(pointerIdx, 6);
      } else if (events.PointerMoveEvent.is(event)) {
        action = 2;
      } else if (events.PointerCancelEvent.is(event)) {
        action = 3;
      } else {
        return null;
      }
      return new platform_views.AndroidMotionEvent.new({downTime: dart.nullCheck(this.downTimeMillis), eventTime: event.timeStamp.inMilliseconds, action: action, pointerCount: this.pointerPositions[$length], pointerProperties: pointers[$map](platform_views.AndroidPointerProperties, dart.fn(i => dart.nullCheck(this.pointerProperties[$_get](i)), T.intToAndroidPointerProperties()))[$toList](), pointerCoords: pointers[$map](platform_views.AndroidPointerCoords, dart.fn(i => dart.nullCheck(this.pointerPositions[$_get](i)), T.intToAndroidPointerCoords()))[$toList](), metaState: 0, buttonState: 0, xPrecision: 1.0, yPrecision: 1.0, deviceId: 0, edgeFlags: 0, source: 0, flags: 0, motionEventId: event.embedderId});
    }
    propertiesFor(event, pointerId) {
      let toolType = 0;
      switch (event.kind) {
        case C[5] || CT.C5:
        case C[6] || CT.C6:
          {
            toolType = 1;
            break;
          }
        case C[7] || CT.C7:
          {
            toolType = 3;
            break;
          }
        case C[8] || CT.C8:
          {
            toolType = 2;
            break;
          }
        case C[9] || CT.C9:
          {
            toolType = 4;
            break;
          }
        case C[10] || CT.C10:
          {
            toolType = 0;
            break;
          }
      }
      return new platform_views.AndroidPointerProperties.new({id: pointerId, toolType: toolType});
    }
    isSinglePointerAction(event) {
      return !events.PointerDownEvent.is(event) && !events.PointerUpEvent.is(event);
    }
  };
  (platform_views._AndroidMotionEventConverter.new = function() {
    this.pointerPositions = new (T.IdentityMapOfint$AndroidPointerCoords()).new();
    this.pointerProperties = new (T.IdentityMapOfint$AndroidPointerProperties()).new();
    this.usedAndroidPointerIds = T.LinkedHashSetOfint().new();
    this[___AndroidMotionEventConverter__pointTransformer] = null;
    this.downTimeMillis = null;
    ;
  }).prototype = platform_views._AndroidMotionEventConverter.prototype;
  dart.addTypeTests(platform_views._AndroidMotionEventConverter);
  dart.addTypeCaches(platform_views._AndroidMotionEventConverter);
  dart.setMethodSignature(platform_views._AndroidMotionEventConverter, () => ({
    __proto__: dart.getMethods(platform_views._AndroidMotionEventConverter.__proto__),
    handlePointerDownEvent: dart.fnType(dart.void, [events.PointerDownEvent]),
    updatePointerPositions: dart.fnType(dart.void, [events.PointerEvent]),
    [_remove]: dart.fnType(dart.void, [core.int]),
    handlePointerUpEvent: dart.fnType(dart.void, [events.PointerUpEvent]),
    handlePointerCancelEvent: dart.fnType(dart.void, [events.PointerCancelEvent]),
    toAndroidMotionEvent: dart.fnType(dart.nullable(platform_views.AndroidMotionEvent), [events.PointerEvent]),
    propertiesFor: dart.fnType(platform_views.AndroidPointerProperties, [events.PointerEvent, core.int]),
    isSinglePointerAction: dart.fnType(core.bool, [events.PointerEvent])
  }));
  dart.setGetterSignature(platform_views._AndroidMotionEventConverter, () => ({
    __proto__: dart.getGetters(platform_views._AndroidMotionEventConverter.__proto__),
    pointTransformer: dart.fnType(ui.Offset, [ui.Offset]),
    [_pointTransformer]: dart.fnType(ui.Offset, [ui.Offset])
  }));
  dart.setSetterSignature(platform_views._AndroidMotionEventConverter, () => ({
    __proto__: dart.getSetters(platform_views._AndroidMotionEventConverter.__proto__),
    [_pointTransformer]: dart.fnType(ui.Offset, [ui.Offset]),
    pointTransformer: dart.fnType(ui.Offset, [ui.Offset])
  }));
  dart.setLibraryUri(platform_views._AndroidMotionEventConverter, I[0]);
  dart.setFieldSignature(platform_views._AndroidMotionEventConverter, () => ({
    __proto__: dart.getFields(platform_views._AndroidMotionEventConverter.__proto__),
    pointerPositions: dart.finalFieldType(core.Map$(core.int, platform_views.AndroidPointerCoords)),
    pointerProperties: dart.finalFieldType(core.Map$(core.int, platform_views.AndroidPointerProperties)),
    usedAndroidPointerIds: dart.finalFieldType(core.Set$(core.int)),
    [___AndroidMotionEventConverter__pointTransformer]: dart.fieldType(dart.nullable(dart.fnType(ui.Offset, [ui.Offset]))),
    downTimeMillis: dart.fieldType(dart.nullable(core.int))
  }));
  var viewId$ = dart.privateName(platform_views, "AndroidViewController.viewId");
  var _motionEventConverter = dart.privateName(platform_views, "_motionEventConverter");
  var _state = dart.privateName(platform_views, "_state");
  var _platformViewCreatedCallbacks = dart.privateName(platform_views, "_platformViewCreatedCallbacks");
  var _viewType = dart.privateName(platform_views, "_viewType");
  var _layoutDirection = dart.privateName(platform_views, "_layoutDirection");
  var _creationParams = dart.privateName(platform_views, "_creationParams");
  var _creationParamsCodec = dart.privateName(platform_views, "_creationParamsCodec");
  var _createRequiresSize = dart.privateName(platform_views, "_createRequiresSize");
  var _sendCreateMessage = dart.privateName(platform_views, "_sendCreateMessage");
  var _sendResizeMessage = dart.privateName(platform_views, "_sendResizeMessage");
  var _sendDisposeMessage = dart.privateName(platform_views, "_sendDisposeMessage");
  platform_views.PlatformViewController = class PlatformViewController extends core.Object {
    get awaitingCreation() {
      return false;
    }
    create(opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      return async.async(dart.void, function* create() {
      });
    }
  };
  (platform_views.PlatformViewController.new = function() {
    ;
  }).prototype = platform_views.PlatformViewController.prototype;
  dart.addTypeTests(platform_views.PlatformViewController);
  dart.addTypeCaches(platform_views.PlatformViewController);
  dart.setMethodSignature(platform_views.PlatformViewController, () => ({
    __proto__: dart.getMethods(platform_views.PlatformViewController.__proto__),
    create: dart.fnType(async.Future$(dart.void), [], {size: dart.nullable(ui.Size)}, {})
  }));
  dart.setGetterSignature(platform_views.PlatformViewController, () => ({
    __proto__: dart.getGetters(platform_views.PlatformViewController.__proto__),
    awaitingCreation: core.bool
  }));
  dart.setLibraryUri(platform_views.PlatformViewController, I[0]);
  platform_views.AndroidViewController = class AndroidViewController extends platform_views.PlatformViewController {
    get viewId() {
      return this[viewId$];
    }
    set viewId(value) {
      super.viewId = value;
    }
    static _getAndroidDirection(direction) {
      if (!(direction !== null)) dart.assertFailed(null, I[1], 749, 12, "direction != null");
      switch (direction) {
        case C[11] || CT.C11:
          {
            return 0;
          }
        case C[12] || CT.C12:
          {
            return 1;
          }
      }
    }
    static pointerAction(pointerId, action) {
      return pointerId << 8 & 65280 | action & 255;
    }
    get awaitingCreation() {
      return this[_state] === platform_views._AndroidViewState.waitingForSize;
    }
    create(opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      return async.async(dart.void, (function* create() {
        if (!(this[_state] !== platform_views._AndroidViewState.disposed)) dart.assertFailed("trying to create a disposed Android view", I[1], 783, 12, "_state != _AndroidViewState.disposed");
        if (!(this[_state] === platform_views._AndroidViewState.waitingForSize)) dart.assertFailed("Android view is already sized. View id: " + dart.str(this.viewId), I[1], 784, 12, "_state == _AndroidViewState.waitingForSize");
        if (this[_createRequiresSize] && size == null) {
          return;
        }
        this[_state] = platform_views._AndroidViewState.creating;
        yield this[_sendCreateMessage]({size: size});
        this[_state] = platform_views._AndroidViewState.created;
        for (let callback of this[_platformViewCreatedCallbacks]) {
          callback(this.viewId);
        }
      }).bind(this));
    }
    setSize(size) {
      return async.async(ui.Size, (function* setSize() {
        if (!(this[_state] !== platform_views._AndroidViewState.disposed)) dart.assertFailed("Android view is disposed. View id: " + dart.str(this.viewId), I[1], 815, 12, "_state != _AndroidViewState.disposed");
        if (this[_state] === platform_views._AndroidViewState.waitingForSize) {
          yield this.create({size: size});
          return size;
        } else {
          return this[_sendResizeMessage](size);
        }
      }).bind(this));
    }
    sendMotionEvent(event) {
      return async.async(dart.void, (function* sendMotionEvent() {
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.dynamic, "touch", event[_asList](this.viewId));
      }).bind(this));
    }
    get pointTransformer() {
      return this[_motionEventConverter][_pointTransformer];
    }
    set pointTransformer(transformer) {
      if (!(transformer !== null)) dart.assertFailed(null, I[1], 863, 12, "transformer != null");
      this[_motionEventConverter][_pointTransformer] = transformer;
    }
    get isCreated() {
      return this[_state] === platform_views._AndroidViewState.created;
    }
    addOnPlatformViewCreatedListener(listener) {
      if (!(listener !== null)) dart.assertFailed(null, I[1], 873, 12, "listener != null");
      if (!(this[_state] !== platform_views._AndroidViewState.disposed)) dart.assertFailed(null, I[1], 874, 12, "_state != _AndroidViewState.disposed");
      this[_platformViewCreatedCallbacks][$add](listener);
    }
    removeOnPlatformViewCreatedListener(listener) {
      if (!(listener !== null)) dart.assertFailed(null, I[1], 880, 12, "listener != null");
      if (!(this[_state] !== platform_views._AndroidViewState.disposed)) dart.assertFailed(null, I[1], 881, 12, "_state != _AndroidViewState.disposed");
      this[_platformViewCreatedCallbacks][$remove](listener);
    }
    get createdCallbacks() {
      return this[_platformViewCreatedCallbacks];
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!(this[_state] !== platform_views._AndroidViewState.disposed)) dart.assertFailed("trying to set a layout direction for a disposed UIView. View id: " + dart.str(this.viewId), I[1], 893, 7, "_state != _AndroidViewState.disposed");
        if (layoutDirection === this[_layoutDirection]) {
          return;
        }
        if (!(layoutDirection !== null)) dart.assertFailed(null, I[1], 901, 12, "layoutDirection != null");
        this[_layoutDirection] = layoutDirection;
        if (this[_state] === platform_views._AndroidViewState.waitingForSize) {
          return;
        }
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "setDirection", new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "direction", platform_views.AndroidViewController._getAndroidDirection(layoutDirection)]));
      }).bind(this));
    }
    dispatchPointerEvent(event) {
      return async.async(dart.void, (function* dispatchPointerEvent() {
        if (events.PointerHoverEvent.is(event)) {
          return;
        }
        if (events.PointerDownEvent.is(event)) {
          this[_motionEventConverter].handlePointerDownEvent(event);
        }
        this[_motionEventConverter].updatePointerPositions(event);
        let androidEvent = this[_motionEventConverter].toAndroidMotionEvent(event);
        if (events.PointerUpEvent.is(event)) {
          this[_motionEventConverter].handlePointerUpEvent(event);
        } else if (events.PointerCancelEvent.is(event)) {
          this[_motionEventConverter].handlePointerCancelEvent(event);
        }
        if (androidEvent != null) {
          yield this.sendMotionEvent(androidEvent);
        }
      }).bind(this));
    }
    clearFocus() {
      if (this[_state] !== platform_views._AndroidViewState.created) {
        return T.FutureOfvoid().value();
      }
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "clearFocus", this.viewId);
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        if (this[_state] === platform_views._AndroidViewState.creating || this[_state] === platform_views._AndroidViewState.created) {
          yield this[_sendDisposeMessage]();
        }
        this[_platformViewCreatedCallbacks][$clear]();
        this[_state] = platform_views._AndroidViewState.disposed;
        platform_views.PlatformViewsService._instance[_focusCallbacks][$remove](this.viewId);
      }).bind(this));
    }
  };
  (platform_views.AndroidViewController.__ = function(opts) {
    let viewId = opts && 'viewId' in opts ? opts.viewId : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
    let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
    let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
    this[_motionEventConverter] = new platform_views._AndroidMotionEventConverter.new();
    this[_state] = platform_views._AndroidViewState.waitingForSize;
    this[_platformViewCreatedCallbacks] = T.JSArrayOfintTovoid().of([]);
    this[viewId$] = viewId;
    if (!(viewId !== null)) dart.assertFailed(null, I[1], 682, 16, "viewId != null");
    if (!(viewType !== null)) dart.assertFailed(null, I[1], 683, 16, "viewType != null");
    if (!(layoutDirection !== null)) dart.assertFailed(null, I[1], 684, 16, "layoutDirection != null");
    if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, I[1], 685, 16, "creationParams == null || creationParamsCodec != null");
    this[_viewType] = viewType;
    this[_layoutDirection] = layoutDirection;
    this[_creationParams] = creationParams;
    this[_creationParamsCodec] = creationParamsCodec;
    ;
  }).prototype = platform_views.AndroidViewController.prototype;
  dart.addTypeTests(platform_views.AndroidViewController);
  dart.addTypeCaches(platform_views.AndroidViewController);
  dart.setMethodSignature(platform_views.AndroidViewController, () => ({
    __proto__: dart.getMethods(platform_views.AndroidViewController.__proto__),
    setSize: dart.fnType(async.Future$(ui.Size), [ui.Size]),
    sendMotionEvent: dart.fnType(async.Future$(dart.void), [platform_views.AndroidMotionEvent]),
    addOnPlatformViewCreatedListener: dart.fnType(dart.void, [dart.fnType(dart.void, [core.int])]),
    removeOnPlatformViewCreatedListener: dart.fnType(dart.void, [dart.fnType(dart.void, [core.int])]),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui.TextDirection]),
    dispatchPointerEvent: dart.fnType(async.Future$(dart.void), [events.PointerEvent]),
    clearFocus: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setStaticMethodSignature(platform_views.AndroidViewController, () => ['_getAndroidDirection', 'pointerAction']);
  dart.setGetterSignature(platform_views.AndroidViewController, () => ({
    __proto__: dart.getGetters(platform_views.AndroidViewController.__proto__),
    pointTransformer: dart.fnType(ui.Offset, [ui.Offset]),
    isCreated: core.bool,
    createdCallbacks: core.List$(dart.fnType(dart.void, [core.int]))
  }));
  dart.setSetterSignature(platform_views.AndroidViewController, () => ({
    __proto__: dart.getSetters(platform_views.AndroidViewController.__proto__),
    pointTransformer: dart.fnType(ui.Offset, [ui.Offset])
  }));
  dart.setLibraryUri(platform_views.AndroidViewController, I[0]);
  dart.setFieldSignature(platform_views.AndroidViewController, () => ({
    __proto__: dart.getFields(platform_views.AndroidViewController.__proto__),
    viewId: dart.finalFieldType(core.int),
    [_viewType]: dart.finalFieldType(core.String),
    [_motionEventConverter]: dart.finalFieldType(platform_views._AndroidMotionEventConverter),
    [_layoutDirection]: dart.fieldType(ui.TextDirection),
    [_state]: dart.fieldType(platform_views._AndroidViewState),
    [_creationParams]: dart.finalFieldType(dart.dynamic),
    [_creationParamsCodec]: dart.finalFieldType(dart.nullable(message_codec.MessageCodec)),
    [_platformViewCreatedCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.int])))
  }));
  dart.setStaticFieldSignature(platform_views.AndroidViewController, () => ['kActionDown', 'kActionUp', 'kActionMove', 'kActionCancel', 'kActionPointerDown', 'kActionPointerUp', 'kAndroidLayoutDirectionLtr', 'kAndroidLayoutDirectionRtl']);
  dart.defineLazy(platform_views.AndroidViewController, {
    /*platform_views.AndroidViewController.kActionDown*/get kActionDown() {
      return 0;
    },
    /*platform_views.AndroidViewController.kActionUp*/get kActionUp() {
      return 1;
    },
    /*platform_views.AndroidViewController.kActionMove*/get kActionMove() {
      return 2;
    },
    /*platform_views.AndroidViewController.kActionCancel*/get kActionCancel() {
      return 3;
    },
    /*platform_views.AndroidViewController.kActionPointerDown*/get kActionPointerDown() {
      return 5;
    },
    /*platform_views.AndroidViewController.kActionPointerUp*/get kActionPointerUp() {
      return 6;
    },
    /*platform_views.AndroidViewController.kAndroidLayoutDirectionLtr*/get kAndroidLayoutDirectionLtr() {
      return 0;
    },
    /*platform_views.AndroidViewController.kAndroidLayoutDirectionRtl*/get kAndroidLayoutDirectionRtl() {
      return 1;
    }
  }, false);
  var _textureId = dart.privateName(platform_views, "_textureId");
  var _off = dart.privateName(platform_views, "_off");
  platform_views.TextureAndroidViewController = class TextureAndroidViewController extends platform_views.AndroidViewController {
    static ['_#_#tearOff'](opts) {
      let viewId = opts && 'viewId' in opts ? opts.viewId : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      return new platform_views.TextureAndroidViewController.__({viewId: viewId, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
    }
    get textureId() {
      return this[_textureId];
    }
    [_sendResizeMessage](size) {
      return async.async(ui.Size, (function* _sendResizeMessage() {
        if (!(this[_state] !== platform_views._AndroidViewState.waitingForSize)) dart.assertFailed("Android view must have an initial size. View id: " + dart.str(this.viewId), I[1], 1080, 12, "_state != _AndroidViewState.waitingForSize");
        if (!(size !== null)) dart.assertFailed(null, I[1], 1081, 12, "size != null");
        if (!!size.isEmpty) dart.assertFailed(null, I[1], 1082, 12, "!size.isEmpty");
        let meta = (yield system_channels.SystemChannels.platform_views.invokeMapMethod(T.ObjectN(), T.ObjectN(), "resize", new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "width", size.width, "height", size.height])));
        if (!(meta != null)) dart.assertFailed(null, I[1], 1092, 12, "meta != null");
        if (!dart.nullCheck(meta)[$containsKey]("width")) dart.assertFailed(null, I[1], 1093, 12, "meta!.containsKey('width')");
        if (!dart.nullCheck(meta)[$containsKey]("height")) dart.assertFailed(null, I[1], 1094, 12, "meta!.containsKey('height')");
        return new ui.Size.new(core.double.as(dart.nullCheck(dart.nullCheck(meta)[$_get]("width"))), core.double.as(dart.nullCheck(meta[$_get]("height"))));
      }).bind(this));
    }
    setOffset(off) {
      return async.async(dart.void, (function* setOffset() {
        if (off._equals(this[_off])) {
          return;
        }
        if (this[_state] !== platform_views._AndroidViewState.created) {
          return;
        }
        this[_off] = off;
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "offset", new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "top", off.dy, "left", off.dx]));
      }).bind(this));
    }
    get [_createRequiresSize]() {
      return true;
    }
    [_sendCreateMessage](opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      return async.async(dart.void, (function* _sendCreateMessage() {
        if (!!size.isEmpty) dart.assertFailed("trying to create " + dart.str(dart.wrapType(platform_views.TextureAndroidViewController)) + " without setting a valid size.", I[1], 1129, 12, "!size.isEmpty");
        let args = new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "viewType", this[_viewType], "width", size.width, "height", size.height, "direction", platform_views.AndroidViewController._getAndroidDirection(this[_layoutDirection])]);
        if (this[_creationParams] != null) {
          let paramsByteData = dart.nullCheck(dart.nullCheck(this[_creationParamsCodec]).encodeMessage(this[_creationParams]));
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        this[_textureId] = (yield system_channels.SystemChannels.platform_views.invokeMethod(core.int, "create", args));
      }).bind(this));
    }
    [_sendDisposeMessage]() {
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "hybrid", false]));
    }
  };
  (platform_views.TextureAndroidViewController.__ = function(opts) {
    let viewId = opts && 'viewId' in opts ? opts.viewId : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
    let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
    let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
    this[_textureId] = null;
    this[_off] = ui.Offset.zero;
    platform_views.TextureAndroidViewController.__proto__.__.call(this, {viewId: viewId, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
    ;
  }).prototype = platform_views.TextureAndroidViewController.prototype;
  dart.addTypeTests(platform_views.TextureAndroidViewController);
  dart.addTypeCaches(platform_views.TextureAndroidViewController);
  dart.setMethodSignature(platform_views.TextureAndroidViewController, () => ({
    __proto__: dart.getMethods(platform_views.TextureAndroidViewController.__proto__),
    [_sendResizeMessage]: dart.fnType(async.Future$(ui.Size), [ui.Size]),
    setOffset: dart.fnType(async.Future$(dart.void), [ui.Offset]),
    [_sendCreateMessage]: dart.fnType(async.Future$(dart.void), [], {}, {size: ui.Size}),
    [_sendDisposeMessage]: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(platform_views.TextureAndroidViewController, () => ({
    __proto__: dart.getGetters(platform_views.TextureAndroidViewController.__proto__),
    textureId: dart.nullable(core.int),
    [_createRequiresSize]: core.bool
  }));
  dart.setLibraryUri(platform_views.TextureAndroidViewController, I[0]);
  dart.setFieldSignature(platform_views.TextureAndroidViewController, () => ({
    __proto__: dart.getFields(platform_views.TextureAndroidViewController.__proto__),
    [_textureId]: dart.fieldType(dart.nullable(core.int)),
    [_off]: dart.fieldType(ui.Offset)
  }));
  platform_views.SurfaceAndroidViewController = class SurfaceAndroidViewController extends platform_views.TextureAndroidViewController {
    static ['_#_#tearOff'](opts) {
      let viewId = opts && 'viewId' in opts ? opts.viewId : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      return new platform_views.SurfaceAndroidViewController.__({viewId: viewId, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
    }
  };
  (platform_views.SurfaceAndroidViewController.__ = function(opts) {
    let viewId = opts && 'viewId' in opts ? opts.viewId : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
    let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
    let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
    platform_views.SurfaceAndroidViewController.__proto__.__.call(this, {viewId: viewId, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
    ;
  }).prototype = platform_views.SurfaceAndroidViewController.prototype;
  dart.addTypeTests(platform_views.SurfaceAndroidViewController);
  dart.addTypeCaches(platform_views.SurfaceAndroidViewController);
  dart.setLibraryUri(platform_views.SurfaceAndroidViewController, I[0]);
  platform_views.ExpensiveAndroidViewController = class ExpensiveAndroidViewController extends platform_views.AndroidViewController {
    static ['_#_#tearOff'](opts) {
      let viewId = opts && 'viewId' in opts ? opts.viewId : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      return new platform_views.ExpensiveAndroidViewController.__({viewId: viewId, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
    }
    get [_createRequiresSize]() {
      return false;
    }
    [_sendCreateMessage](opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      return async.async(dart.void, (function* _sendCreateMessage() {
        let args = new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "viewType", this[_viewType], "direction", platform_views.AndroidViewController._getAndroidDirection(this[_layoutDirection]), "hybrid", true]);
        if (this[_creationParams] != null) {
          let paramsByteData = dart.nullCheck(dart.nullCheck(this[_creationParamsCodec]).encodeMessage(this[_creationParams]));
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "create", args);
      }).bind(this));
    }
    get textureId() {
      dart.throw(new core.UnimplementedError.new("Not supported for " + dart.str(dart.wrapType(platform_views.SurfaceAndroidViewController)) + "."));
    }
    [_sendDisposeMessage]() {
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "hybrid", true]));
    }
    [_sendResizeMessage](size) {
      dart.throw(new core.UnimplementedError.new("Not supported for " + dart.str(dart.wrapType(platform_views.SurfaceAndroidViewController)) + "."));
    }
    setOffset(off) {
      dart.throw(new core.UnimplementedError.new("Not supported for " + dart.str(dart.wrapType(platform_views.SurfaceAndroidViewController)) + "."));
    }
  };
  (platform_views.ExpensiveAndroidViewController.__ = function(opts) {
    let viewId = opts && 'viewId' in opts ? opts.viewId : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
    let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
    let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
    platform_views.ExpensiveAndroidViewController.__proto__.__.call(this, {viewId: viewId, viewType: viewType, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec});
    ;
  }).prototype = platform_views.ExpensiveAndroidViewController.prototype;
  dart.addTypeTests(platform_views.ExpensiveAndroidViewController);
  dart.addTypeCaches(platform_views.ExpensiveAndroidViewController);
  dart.setMethodSignature(platform_views.ExpensiveAndroidViewController, () => ({
    __proto__: dart.getMethods(platform_views.ExpensiveAndroidViewController.__proto__),
    [_sendCreateMessage]: dart.fnType(async.Future$(dart.void), [], {}, {size: dart.nullable(ui.Size)}),
    [_sendDisposeMessage]: dart.fnType(async.Future$(dart.void), []),
    [_sendResizeMessage]: dart.fnType(async.Future$(ui.Size), [ui.Size]),
    setOffset: dart.fnType(async.Future$(dart.void), [ui.Offset])
  }));
  dart.setGetterSignature(platform_views.ExpensiveAndroidViewController, () => ({
    __proto__: dart.getGetters(platform_views.ExpensiveAndroidViewController.__proto__),
    [_createRequiresSize]: core.bool,
    textureId: core.int
  }));
  dart.setLibraryUri(platform_views.ExpensiveAndroidViewController, I[0]);
  var id$0 = dart.privateName(platform_views, "UiKitViewController.id");
  var _debugDisposed = dart.privateName(platform_views, "_debugDisposed");
  platform_views.UiKitViewController = class UiKitViewController extends core.Object {
    get id() {
      return this[id$0];
    }
    set id(value) {
      super.id = value;
    }
    static ['_#_#tearOff'](id, layoutDirection) {
      return new platform_views.UiKitViewController.__(id, layoutDirection);
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!!this[_debugDisposed]) dart.assertFailed("trying to set a layout direction for a disposed iOS UIView. View id: " + dart.str(this.id), I[1], 1183, 12, "!_debugDisposed");
        if (layoutDirection === this[_layoutDirection]) {
          return;
        }
        if (!(layoutDirection !== null)) dart.assertFailed(null, I[1], 1189, 12, "layoutDirection != null");
        this[_layoutDirection] = layoutDirection;
      }).bind(this));
    }
    acceptGesture() {
      let args = new (T.IdentityMapOfString$dynamic()).from(["id", this.id]);
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "acceptGesture", args);
    }
    rejectGesture() {
      let args = new (T.IdentityMapOfString$dynamic()).from(["id", this.id]);
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "rejectGesture", args);
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        this[_debugDisposed] = true;
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.id);
      }).bind(this));
    }
  };
  (platform_views.UiKitViewController.__ = function(id, layoutDirection) {
    this[_debugDisposed] = false;
    this[id$0] = id;
    if (!(id !== null)) dart.assertFailed(null, I[1], 1166, 14, "id != null");
    if (!(layoutDirection !== null)) dart.assertFailed(null, I[1], 1167, 14, "layoutDirection != null");
    this[_layoutDirection] = layoutDirection;
    ;
  }).prototype = platform_views.UiKitViewController.prototype;
  dart.addTypeTests(platform_views.UiKitViewController);
  dart.addTypeCaches(platform_views.UiKitViewController);
  dart.setMethodSignature(platform_views.UiKitViewController, () => ({
    __proto__: dart.getMethods(platform_views.UiKitViewController.__proto__),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui.TextDirection]),
    acceptGesture: dart.fnType(async.Future$(dart.void), []),
    rejectGesture: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(platform_views.UiKitViewController, I[0]);
  dart.setFieldSignature(platform_views.UiKitViewController, () => ({
    __proto__: dart.getFields(platform_views.UiKitViewController.__proto__),
    id: dart.finalFieldType(core.int),
    [_debugDisposed]: dart.fieldType(core.bool),
    [_layoutDirection]: dart.fieldType(ui.TextDirection)
  }));
  dart.defineLazy(platform_views, {
    /*platform_views.platformViewsRegistry*/get platformViewsRegistry() {
      return new platform_views.PlatformViewsRegistry._instance();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/services/platform_views.dart", {
    "package:flutter/src/services/platform_views.dart": platform_views
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["platform_views.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/services/platform_views.dart.lib.js"}');
  // Exports:
  return {
    src__services__platform_views: platform_views
  };
}));

//# sourceMappingURL=platform_views.dart.lib.js.map