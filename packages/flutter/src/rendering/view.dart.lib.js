define(['dart_sdk', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/services/system_chrome.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/rendering/mouse_tracker.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/semantics/binding.dart', 'packages/flutter/src/gestures/binding.dart', 'packages/flutter/src/painting/binding.dart', 'packages/flutter/src/foundation/print.dart'], (function load__packages__flutter__src__rendering__view_dart(dart_sdk, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__services__system_chrome$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__painting__debug$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__rendering__mouse_tracker$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__semantics__binding$46dart, packages__flutter__src__gestures__binding$46dart, packages__flutter__src__painting__binding$46dart, packages__flutter__src__foundation__print$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const developer = dart_sdk.developer;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const debug$ = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const system_chrome = packages__flutter__src__services__system_chrome$46dart.src__services__system_chrome;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const binding = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const debug$0 = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const mouse_tracker = packages__flutter__src__rendering__mouse_tracker$46dart.src__rendering__mouse_tracker;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  const binding$ = packages__flutter__src__services__text_editing_delta$46dart.src__services__binding;
  const binding$0 = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const binding$1 = packages__flutter__src__semantics__binding$46dart.src__semantics__binding;
  const binding$2 = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  const binding$3 = packages__flutter__src__painting__binding$46dart.src__painting__binding;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  var view = Object.create(dart.library);
  var binding$4 = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    HitTestEntryOfHitTestTarget: () => (T.HitTestEntryOfHitTestTarget = dart.constFn(hit_test.HitTestEntry$(hit_test.HitTestTarget)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfSize: () => (T.DiagnosticsPropertyOfSize = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Size)))(),
    DiagnosticsPropertyOfViewConfiguration: () => (T.DiagnosticsPropertyOfViewConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(view.ViewConfiguration)))(),
    FutureOfbool: () => (T.FutureOfbool = dart.constFn(async.Future$(core.bool)))(),
    VoidToFutureOfbool: () => (T.VoidToFutureOfbool = dart.constFn(dart.fnType(T.FutureOfbool(), [])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    boolToFutureOfvoid: () => (T.boolToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [core.bool])))(),
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$Object: () => (T.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    FutureOfMapOfString$Object: () => (T.FutureOfMapOfString$Object = dart.constFn(async.Future$(T.MapOfString$Object())))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    MapOfString$StringToFutureOfMapOfString$Object: () => (T.MapOfString$StringToFutureOfMapOfString$Object = dart.constFn(dart.fnType(T.FutureOfMapOfString$Object(), [T.MapOfString$String()])))(),
    VoidToHitTestResult: () => (T.VoidToHitTestResult = dart.constFn(dart.fnType(hit_test.HitTestResult, [])))(),
    DurationTovoid: () => (T.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    RenderObjectTovoid: () => (T.RenderObjectTovoid = dart.constFn(dart.fnType(dart.void, [object.RenderObject])))(),
    VoidToFn: () => (T.VoidToFn = dart.constFn(dart.fnType(T.RenderObjectTovoid(), [])))(),
    FnTodynamic: () => (T.FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.RenderObjectTovoid()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C[9] || CT.C9
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C[8] || CT.C8,
        [MethodChannel_name]: "flutter/service_worker"
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "package:flutter/src/rendering/view.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/view.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/binding.dart",
    "package:flutter/src/rendering/binding.dart"
  ];
  var size$ = dart.privateName(view, "ViewConfiguration.size");
  var devicePixelRatio$ = dart.privateName(view, "ViewConfiguration.devicePixelRatio");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  view.ViewConfiguration = class ViewConfiguration extends core.Object {
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get devicePixelRatio() {
      return this[devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      super.devicePixelRatio = value;
    }
    static ['_#new#tearOff'](opts) {
      let size = opts && 'size' in opts ? opts.size : C[0] || CT.C0;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
      return new view.ViewConfiguration.new({size: size, devicePixelRatio: devicePixelRatio});
    }
    toMatrix() {
      return vector_math_64.Matrix4.diagonal3Values(this.devicePixelRatio, this.devicePixelRatio, 1.0);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return view.ViewConfiguration.is(other) && other.size._equals(this.size) && other.devicePixelRatio === this.devicePixelRatio;
    }
    get hashCode() {
      return core.Object.hash(this.size, this.devicePixelRatio);
    }
    toString() {
      return dart.str(this.size) + " at " + debug.debugFormatDouble(this.devicePixelRatio) + "x";
    }
  };
  (view.ViewConfiguration.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : C[0] || CT.C0;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
    this[size$] = size;
    this[devicePixelRatio$] = devicePixelRatio;
    ;
  }).prototype = view.ViewConfiguration.prototype;
  dart.addTypeTests(view.ViewConfiguration);
  dart.addTypeCaches(view.ViewConfiguration);
  dart.setMethodSignature(view.ViewConfiguration, () => ({
    __proto__: dart.getMethods(view.ViewConfiguration.__proto__),
    toMatrix: dart.fnType(vector_math_64.Matrix4, [])
  }));
  dart.setLibraryUri(view.ViewConfiguration, I[0]);
  dart.setFieldSignature(view.ViewConfiguration, () => ({
    __proto__: dart.getFields(view.ViewConfiguration.__proto__),
    size: dart.finalFieldType(ui.Size),
    devicePixelRatio: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(view.ViewConfiguration, ['_equals', 'toString']);
  dart.defineExtensionAccessors(view.ViewConfiguration, ['hashCode']);
  var automaticSystemUiAdjustment = dart.privateName(view, "RenderView.automaticSystemUiAdjustment");
  var _size = dart.privateName(view, "_size");
  var _rootTransform = dart.privateName(view, "_rootTransform");
  var _configuration = dart.privateName(view, "_configuration");
  var _window = dart.privateName(view, "_window");
  var _updateMatricesAndCreateNewRootLayer = dart.privateName(view, "_updateMatricesAndCreateNewRootLayer");
  var _updateSystemChrome = dart.privateName(view, "_updateSystemChrome");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  const RenderObject_RenderObjectWithChildMixin$36 = class RenderObject_RenderObjectWithChildMixin extends object.RenderObject {};
  (RenderObject_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderObject_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderObject_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderObject_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  view.RenderView = class RenderView extends RenderObject_RenderObjectWithChildMixin$36 {
    get automaticSystemUiAdjustment() {
      return this[automaticSystemUiAdjustment];
    }
    set automaticSystemUiAdjustment(value) {
      this[automaticSystemUiAdjustment] = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let configuration = opts && 'configuration' in opts ? opts.configuration : null;
      let window = opts && 'window' in opts ? opts.window : null;
      return new view.RenderView.new({child: child, configuration: configuration, window: window});
    }
    get size() {
      return this[_size];
    }
    get configuration() {
      return this[_configuration];
    }
    set configuration(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 91, 12, "value != null");
      if (this.configuration._equals(value)) {
        return;
      }
      let oldConfiguration = this[_configuration];
      this[_configuration] = value;
      if (!oldConfiguration.toMatrix()._equals(this[_configuration].toMatrix())) {
        this.replaceRootLayer(this[_updateMatricesAndCreateNewRootLayer]());
      }
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[1], 100, 12, "_rootTransform != null");
      this.markNeedsLayout();
    }
    prepareInitialFrame() {
      if (!(this.owner != null)) dart.assertFailed(null, I[1], 136, 12, "owner != null");
      if (!(this[_rootTransform] == null)) dart.assertFailed(null, I[1], 137, 12, "_rootTransform == null");
      this.scheduleInitialLayout();
      this.scheduleInitialPaint(this[_updateMatricesAndCreateNewRootLayer]());
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[1], 140, 12, "_rootTransform != null");
    }
    [_updateMatricesAndCreateNewRootLayer]() {
      this[_rootTransform] = this.configuration.toMatrix();
      let rootLayer = new layer.TransformLayer.new({transform: this[_rootTransform]});
      rootLayer.attach(this);
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[1], 149, 12, "_rootTransform != null");
      return rootLayer;
    }
    debugAssertDoesMeetConstraints() {
      if (!false) dart.assertFailed(null, I[1], 156, 50, "false");
    }
    performResize() {
      if (!false) dart.assertFailed(null, I[1], 160, 12, "false");
    }
    performLayout() {
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[1], 165, 12, "_rootTransform != null");
      this[_size] = this.configuration.size;
      if (!this[_size].isFinite) dart.assertFailed(null, I[1], 167, 12, "_size.isFinite");
      if (this.child != null) {
        dart.nullCheck(this.child).layout(new box.BoxConstraints.tight(this[_size]));
      }
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this.child != null) {
        dart.nullCheck(this.child).hitTest(new box.BoxHitTestResult.wrap(result), {position: position});
      }
      result.add(new (T.HitTestEntryOfHitTestTarget()).new(this));
      return true;
    }
    hitTestMouseTrackers(position) {
      if (!(position !== null)) dart.assertFailed(null, I[1], 199, 12, "position != null");
      let result = new box.BoxHitTestResult.new();
      this.hitTest(result, {position: position});
      return result;
    }
    get isRepaintBoundary() {
      return true;
    }
    paint(context, offset) {
      if (this.child != null) {
        context.paintChild(dart.nullCheck(this.child), offset);
      }
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[1], 217, 12, "_rootTransform != null");
      transform.multiply(dart.nullCheck(this[_rootTransform]));
      super.applyPaintTransform(child, transform);
    }
    compositeFrame() {
      {
        developer.Timeline.startSync("COMPOSITING");
      }
      try {
        let builder = ui.SceneBuilder.new();
        let scene = dart.nullCheck(this.layer).buildScene(builder);
        if (this.automaticSystemUiAdjustment) {
          this[_updateSystemChrome]();
        }
        this[_window].render(scene);
        scene.dispose();
        if (!dart.fn(() => {
          if (debug$.debugRepaintRainbowEnabled || debug$.debugRepaintTextRainbowEnabled) {
            debug$.debugCurrentRepaintColor = debug$.debugCurrentRepaintColor.withHue((debug$.debugCurrentRepaintColor.hue + 2.0)[$modulo](360.0));
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 237, 14, "() {\n        if (debugRepaintRainbowEnabled || debugRepaintTextRainbowEnabled) {\n          debugCurrentRepaintColor = debugCurrentRepaintColor.withHue((debugCurrentRepaintColor.hue + 2.0) % 360.0);\n        }\n        return true;\n      }()");
      } finally {
        {
          developer.Timeline.finishSync();
        }
      }
    }
    [_updateSystemChrome]() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let bounds = this.paintBounds;
      let top = new ui.Offset.new(bounds.center.dx, this[_window].padding.top / 2.0);
      let bottom = new ui.Offset.new(bounds.center.dx, bounds.bottom - 1.0 - this[_window].padding.bottom / 2.0);
      let upperOverlayStyle = dart.nullCheck(this.layer).find(system_chrome.SystemUiOverlayStyle, top);
      let lowerOverlayStyle = null;
      switch (platform.defaultTargetPlatform) {
        case C[1] || CT.C1:
          {
            lowerOverlayStyle = dart.nullCheck(this.layer).find(system_chrome.SystemUiOverlayStyle, bottom);
            break;
          }
        case C[2] || CT.C2:
        case C[3] || CT.C3:
        case C[4] || CT.C4:
        case C[5] || CT.C5:
        case C[6] || CT.C6:
          {
            break;
          }
      }
      if (upperOverlayStyle != null || lowerOverlayStyle != null) {
        let overlayStyle = new system_chrome.SystemUiOverlayStyle.new({statusBarBrightness: (t0 = upperOverlayStyle, t0 == null ? null : t0.statusBarBrightness), statusBarIconBrightness: (t0$ = upperOverlayStyle, t0$ == null ? null : t0$.statusBarIconBrightness), statusBarColor: (t0$0 = upperOverlayStyle, t0$0 == null ? null : t0$0.statusBarColor), systemStatusBarContrastEnforced: (t0$1 = upperOverlayStyle, t0$1 == null ? null : t0$1.systemStatusBarContrastEnforced), systemNavigationBarColor: (t0$2 = lowerOverlayStyle, t0$2 == null ? null : t0$2.systemNavigationBarColor), systemNavigationBarDividerColor: (t0$3 = lowerOverlayStyle, t0$3 == null ? null : t0$3.systemNavigationBarDividerColor), systemNavigationBarIconBrightness: (t0$4 = lowerOverlayStyle, t0$4 == null ? null : t0$4.systemNavigationBarIconBrightness), systemNavigationBarContrastEnforced: (t0$5 = lowerOverlayStyle, t0$5 == null ? null : t0$5.systemNavigationBarContrastEnforced)});
        system_chrome.SystemChrome.setSystemUIOverlayStyle(overlayStyle);
      }
    }
    get paintBounds() {
      return ui.Offset.zero['&'](this.size['*'](this.configuration.devicePixelRatio));
    }
    get semanticBounds() {
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[1], 327, 12, "_rootTransform != null");
      return matrix_utils.MatrixUtils.transformRect(dart.nullCheck(this[_rootTransform]), ui.Offset.zero['&'](this.size));
    }
    debugFillProperties(properties) {
      if (!dart.fn(() => {
        properties.add(diagnostics.DiagnosticsNode.message("debug mode enabled - " + "Web"));
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 336, 12, "() {\n      properties.add(DiagnosticsNode.message('debug mode enabled - ${kIsWeb ? 'Web' :  Platform.operatingSystem}'));\n      return true;\n    }()");
      properties.add(new (T.DiagnosticsPropertyOfSize()).new("window size", this[_window].physicalSize, {tooltip: "in physical pixels"}));
      properties.add(new diagnostics.DoubleProperty.new("device pixel ratio", this[_window].devicePixelRatio, {tooltip: "physical pixels per logical pixel"}));
      properties.add(new (T.DiagnosticsPropertyOfViewConfiguration()).new("configuration", this.configuration, {tooltip: "in logical pixels"}));
      if (this[_window].platformDispatcher.semanticsEnabled) {
        properties.add(diagnostics.DiagnosticsNode.message("semantics enabled"));
      }
    }
  };
  (view.RenderView.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let configuration = opts && 'configuration' in opts ? opts.configuration : null;
    let window = opts && 'window' in opts ? opts.window : null;
    this[_size] = ui.Size.zero;
    this[automaticSystemUiAdjustment] = true;
    this[_rootTransform] = null;
    if (!(configuration !== null)) dart.assertFailed(null, I[1], 72, 15, "configuration != null");
    this[_configuration] = configuration;
    this[_window] = window;
    view.RenderView.__proto__.new.call(this);
    this.child = child;
  }).prototype = view.RenderView.prototype;
  dart.addTypeTests(view.RenderView);
  dart.addTypeCaches(view.RenderView);
  dart.setMethodSignature(view.RenderView, () => ({
    __proto__: dart.getMethods(view.RenderView.__proto__),
    prepareInitialFrame: dart.fnType(dart.void, []),
    [_updateMatricesAndCreateNewRootLayer]: dart.fnType(layer.TransformLayer, []),
    debugAssertDoesMeetConstraints: dart.fnType(dart.void, []),
    performResize: dart.fnType(dart.void, []),
    performLayout: dart.fnType(dart.void, []),
    hitTest: dart.fnType(core.bool, [hit_test.HitTestResult], {}, {position: ui.Offset}),
    hitTestMouseTrackers: dart.fnType(hit_test.HitTestResult, [ui.Offset]),
    compositeFrame: dart.fnType(dart.void, []),
    [_updateSystemChrome]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(view.RenderView, () => ({
    __proto__: dart.getGetters(view.RenderView.__proto__),
    size: ui.Size,
    configuration: view.ViewConfiguration,
    paintBounds: ui.Rect,
    semanticBounds: ui.Rect
  }));
  dart.setSetterSignature(view.RenderView, () => ({
    __proto__: dart.getSetters(view.RenderView.__proto__),
    configuration: view.ViewConfiguration
  }));
  dart.setLibraryUri(view.RenderView, I[0]);
  dart.setFieldSignature(view.RenderView, () => ({
    __proto__: dart.getFields(view.RenderView.__proto__),
    [_size]: dart.fieldType(ui.Size),
    [_configuration]: dart.fieldType(view.ViewConfiguration),
    [_window]: dart.finalFieldType(ui.FlutterView),
    automaticSystemUiAdjustment: dart.fieldType(core.bool),
    [_rootTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4))
  }));
  var _debugIsRenderViewInitialized = dart.privateName(binding$4, "RendererBinding._debugIsRenderViewInitialized");
  var _mouseTracker = dart.privateName(binding$4, "RendererBinding._mouseTracker");
  var _$35RendererBinding$35_pipelineOwner = dart.privateName(binding$4, "RendererBinding._#RendererBinding#_pipelineOwner");
  var _semanticsHandle = dart.privateName(binding$4, "RendererBinding._semanticsHandle");
  var _debugMouseTrackerUpdateScheduled = dart.privateName(binding$4, "RendererBinding._debugMouseTrackerUpdateScheduled");
  var _firstFrameDeferredCount = dart.privateName(binding$4, "RendererBinding._firstFrameDeferredCount");
  var _firstFrameSent = dart.privateName(binding$4, "RendererBinding._firstFrameSent");
  var _debugIsRenderViewInitialized$ = dart.privateName(binding$4, "_debugIsRenderViewInitialized");
  var _mouseTracker$ = dart.privateName(binding$4, "_mouseTracker");
  var __RendererBinding__pipelineOwner = dart.privateName(binding$4, "_#RendererBinding#_pipelineOwner");
  var _semanticsHandle$ = dart.privateName(binding$4, "_semanticsHandle");
  var _debugMouseTrackerUpdateScheduled$ = dart.privateName(binding$4, "_debugMouseTrackerUpdateScheduled");
  var _firstFrameDeferredCount$ = dart.privateName(binding$4, "_firstFrameDeferredCount");
  var _firstFrameSent$ = dart.privateName(binding$4, "_firstFrameSent");
  var _pipelineOwner = dart.privateName(binding$4, "_pipelineOwner");
  var _handleSemanticsOwnerCreated = dart.privateName(binding$4, "_handleSemanticsOwnerCreated");
  var _handleSemanticsOwnerDisposed = dart.privateName(binding$4, "_handleSemanticsOwnerDisposed");
  var _handleSemanticsEnabledChanged = dart.privateName(binding$4, "_handleSemanticsEnabledChanged");
  var _handleSemanticsAction = dart.privateName(binding$4, "_handleSemanticsAction");
  var _handlePersistentFrameCallback = dart.privateName(binding$4, "_handlePersistentFrameCallback");
  var _handleWebFirstFrame = dart.privateName(binding$4, "_handleWebFirstFrame");
  var _forceRepaint = dart.privateName(binding$4, "_forceRepaint");
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var _scheduleMouseTrackerUpdate = dart.privateName(binding$4, "_scheduleMouseTrackerUpdate");
  const performReassemble = Symbol("performReassemble");
  binding$4.RendererBinding = class RendererBinding extends core.Object {
    static get instance() {
      return binding.BindingBase.checkInstance(binding$4.RendererBinding, binding$4.RendererBinding._instance);
    }
  };
  binding$4.RendererBinding[dart.mixinOn] = _RendererBinding$36BindingBase$36ServicesBinding$36SchedulerBinding$36GestureBinding$36SemanticsBinding$36HitTestable => class RendererBinding extends _RendererBinding$36BindingBase$36ServicesBinding$36SchedulerBinding$36GestureBinding$36SemanticsBinding$36HitTestable {
    get [_debugIsRenderViewInitialized$]() {
      return this[_debugIsRenderViewInitialized];
    }
    set [_debugIsRenderViewInitialized$](value) {
      this[_debugIsRenderViewInitialized] = value;
    }
    get [_mouseTracker$]() {
      return this[_mouseTracker];
    }
    set [_mouseTracker$](value) {
      this[_mouseTracker] = value;
    }
    get [__RendererBinding__pipelineOwner]() {
      return this[_$35RendererBinding$35_pipelineOwner];
    }
    set [__RendererBinding__pipelineOwner](value) {
      this[_$35RendererBinding$35_pipelineOwner] = value;
    }
    get [_semanticsHandle$]() {
      return this[_semanticsHandle];
    }
    set [_semanticsHandle$](value) {
      this[_semanticsHandle] = value;
    }
    get [_debugMouseTrackerUpdateScheduled$]() {
      return this[_debugMouseTrackerUpdateScheduled];
    }
    set [_debugMouseTrackerUpdateScheduled$](value) {
      this[_debugMouseTrackerUpdateScheduled] = value;
    }
    get [_firstFrameDeferredCount$]() {
      return this[_firstFrameDeferredCount];
    }
    set [_firstFrameDeferredCount$](value) {
      this[_firstFrameDeferredCount] = value;
    }
    get [_firstFrameSent$]() {
      return this[_firstFrameSent];
    }
    set [_firstFrameSent$](value) {
      this[_firstFrameSent] = value;
    }
    initInstances() {
      let t0;
      super.initInstances();
      binding$4.RendererBinding._instance = this;
      this[_pipelineOwner] = new object.PipelineOwner.new({onNeedVisualUpdate: dart.bind(this, 'ensureVisualUpdate'), onSemanticsOwnerCreated: dart.bind(this, _handleSemanticsOwnerCreated), onSemanticsOwnerDisposed: dart.bind(this, _handleSemanticsOwnerDisposed)});
      t0 = this.platformDispatcher;
      (() => {
        t0.onMetricsChanged = dart.bind(this, 'handleMetricsChanged');
        t0.onTextScaleFactorChanged = dart.bind(this, 'handleTextScaleFactorChanged');
        t0.onPlatformBrightnessChanged = dart.bind(this, 'handlePlatformBrightnessChanged');
        t0.onSemanticsEnabledChanged = dart.bind(this, _handleSemanticsEnabledChanged);
        t0.onSemanticsAction = dart.bind(this, _handleSemanticsAction);
        return t0;
      })();
      this.initRenderView();
      this[_handleSemanticsEnabledChanged]();
      if (!(this.renderView !== null)) dart.assertFailed(null, I[2], 43, 12, "renderView != null");
      this.addPersistentFrameCallback(dart.bind(this, _handlePersistentFrameCallback));
      this.initMouseTracker();
      {
        this.addPostFrameCallback(dart.bind(this, _handleWebFirstFrame));
      }
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.fn(() => {
        this.registerBoolServiceExtension({name: "invertOversizedImages", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugInvertOversizedImages;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => async.async(dart.void, (function*() {
            if (debug$0.debugInvertOversizedImages !== value) {
              debug$0.debugInvertOversizedImages = value;
              return this[_forceRepaint]();
            }
            return T.FutureOfvoid().value();
          }).bind(this)), T.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugPaint", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugPaintSizeEnabled;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$.debugPaintSizeEnabled === value) {
              return T.FutureOfvoid().value();
            }
            debug$.debugPaintSizeEnabled = value;
            return this[_forceRepaint]();
          }, T.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugPaintBaselinesEnabled", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugPaintBaselinesEnabled;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$.debugPaintBaselinesEnabled === value) {
              return T.FutureOfvoid().value();
            }
            debug$.debugPaintBaselinesEnabled = value;
            return this[_forceRepaint]();
          }, T.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "repaintRainbow", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugRepaintRainbowEnabled;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => {
            let repaint = debug$.debugRepaintRainbowEnabled && !value;
            debug$.debugRepaintRainbowEnabled = value;
            if (repaint) {
              return this[_forceRepaint]();
            }
            return T.FutureOfvoid().value();
          }, T.boolToFutureOfvoid())});
        this.registerServiceExtension({name: "debugDumpLayerTree", callback: dart.fn(parameters => async.async(T.MapOfString$Object(), function*() {
            let t0, t0$;
            let data = (t0$ = (t0 = binding$4.RendererBinding.instance.renderView.debugLayer, t0 == null ? null : t0.toStringDeep()), t0$ == null ? "Layer tree unavailable." : t0$);
            return new (T.IdentityMapOfString$Object()).from(["data", data]);
          }), T.MapOfString$StringToFutureOfMapOfString$Object())});
        this.registerBoolServiceExtension({name: "debugDisableClipLayers", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugDisableClipLayers;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$.debugDisableClipLayers === value) {
              return T.FutureOfvoid().value();
            }
            debug$.debugDisableClipLayers = value;
            return this[_forceRepaint]();
          }, T.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugDisablePhysicalShapeLayers", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugDisablePhysicalShapeLayers;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$.debugDisablePhysicalShapeLayers === value) {
              return T.FutureOfvoid().value();
            }
            debug$.debugDisablePhysicalShapeLayers = value;
            return this[_forceRepaint]();
          }, T.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugDisableOpacityLayers", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugDisableOpacityLayers;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$.debugDisableOpacityLayers === value) {
              return T.FutureOfvoid().value();
            }
            debug$.debugDisableOpacityLayers = value;
            return this[_forceRepaint]();
          }, T.boolToFutureOfvoid())});
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[2], 63, 12, "() {\n      // these service extensions only work in debug mode\n      registerBoolServiceExtension(\n        name: 'invertOversizedImages',\n        getter: () async => debugInvertOversizedImages,\n        setter: (bool value) async {\n          if (debugInvertOversizedImages != value) {\n            debugInvertOversizedImages = value;\n            return _forceRepaint();\n          }\n          return Future<void>.value();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugPaint',\n        getter: () async => debugPaintSizeEnabled,\n        setter: (bool value) {\n          if (debugPaintSizeEnabled == value) {\n            return Future<void>.value();\n          }\n          debugPaintSizeEnabled = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugPaintBaselinesEnabled',\n        getter: () async => debugPaintBaselinesEnabled,\n        setter: (bool value) {\n          if (debugPaintBaselinesEnabled == value) {\n            return Future<void>.value();\n          }\n          debugPaintBaselinesEnabled = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'repaintRainbow',\n        getter: () async => debugRepaintRainbowEnabled,\n        setter: (bool value) {\n          final bool repaint = debugRepaintRainbowEnabled && !value;\n          debugRepaintRainbowEnabled = value;\n          if (repaint) {\n            return _forceRepaint();\n          }\n          return Future<void>.value();\n        },\n      );\n      registerServiceExtension(\n        name: 'debugDumpLayerTree',\n        callback: (Map<String, String> parameters) async {\n          final String data = RendererBinding.instance.renderView.debugLayer?.toStringDeep() ?? 'Layer tree unavailable.';\n          return <String, Object>{\n            'data': data,\n          };\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugDisableClipLayers',\n        getter: () async => debugDisableClipLayers,\n        setter: (bool value) {\n          if (debugDisableClipLayers == value) {\n            return Future<void>.value();\n          }\n          debugDisableClipLayers = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugDisablePhysicalShapeLayers',\n        getter: () async => debugDisablePhysicalShapeLayers,\n        setter: (bool value) {\n          if (debugDisablePhysicalShapeLayers == value) {\n            return Future<void>.value();\n          }\n          debugDisablePhysicalShapeLayers = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugDisableOpacityLayers',\n        getter: () async => debugDisableOpacityLayers,\n        setter: (bool value) {\n          if (debugDisableOpacityLayers == value) {\n            return Future<void>.value();\n          }\n          debugDisableOpacityLayers = value;\n          return _forceRepaint();\n        },\n      );\n      return true;\n    }()");
      {
        this.registerServiceExtension({name: "debugDumpRenderTree", callback: dart.fn(parameters => async.async(T.MapOfString$Object(), function*() {
            let data = binding$4.RendererBinding.instance.renderView.toStringDeep();
            return new (T.IdentityMapOfString$Object()).from(["data", data]);
          }), T.MapOfString$StringToFutureOfMapOfString$Object())});
        this.registerServiceExtension({name: "debugDumpSemanticsTreeInTraversalOrder", callback: dart.fn(parameters => async.async(T.MapOfString$Object(), function*() {
            let t0, t0$;
            let data = (t0$ = (t0 = binding$4.RendererBinding.instance.renderView.debugSemantics, t0 == null ? null : t0.toStringDeep()), t0$ == null ? "Semantics not collected." : t0$);
            return new (T.IdentityMapOfString$Object()).from(["data", data]);
          }), T.MapOfString$StringToFutureOfMapOfString$Object())});
        this.registerServiceExtension({name: "debugDumpSemanticsTreeInInverseHitTestOrder", callback: dart.fn(parameters => async.async(T.MapOfString$Object(), function*() {
            let t0, t0$;
            let data = (t0$ = (t0 = binding$4.RendererBinding.instance.renderView.debugSemantics, t0 == null ? null : t0.toStringDeep({childOrder: semantics.DebugSemanticsDumpOrder.inverseHitTest})), t0$ == null ? "Semantics not collected." : t0$);
            return new (T.IdentityMapOfString$Object()).from(["data", data]);
          }), T.MapOfString$StringToFutureOfMapOfString$Object())});
        this.registerBoolServiceExtension({name: "profileRenderObjectPaints", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugProfilePaintsEnabled;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => async.async(dart.void, function*() {
            if (debug$.debugProfilePaintsEnabled !== value) {
              debug$.debugProfilePaintsEnabled = value;
            }
          }), T.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "profileRenderObjectLayouts", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugProfileLayoutsEnabled;
          }), T.VoidToFutureOfbool()), setter: dart.fn(value => async.async(dart.void, function*() {
            if (debug$.debugProfileLayoutsEnabled !== value) {
              debug$.debugProfileLayoutsEnabled = value;
            }
          }), T.boolToFutureOfvoid())});
      }
    }
    initRenderView() {
      if (!!this[_debugIsRenderViewInitialized$]) dart.assertFailed(null, I[2], 213, 12, "!_debugIsRenderViewInitialized");
      if (!dart.fn(() => {
        this[_debugIsRenderViewInitialized$] = true;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[2], 214, 12, "() {\n      _debugIsRenderViewInitialized = true;\n      return true;\n    }()");
      this.renderView = new view.RenderView.new({configuration: this.createViewConfiguration(), window: this.window});
      this.renderView.prepareInitialFrame();
    }
    get mouseTracker() {
      return dart.nullCheck(this[_mouseTracker$]);
    }
    get pipelineOwner() {
      return this[_pipelineOwner];
    }
    get [_pipelineOwner]() {
      let t0;
      t0 = this[__RendererBinding__pipelineOwner];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_pipelineOwner")) : t0;
    }
    set [_pipelineOwner](library$32package$58flutter$47src$47rendering$47binding$46dart$58$58_pipelineOwner$35param) {
      this[__RendererBinding__pipelineOwner] = library$32package$58flutter$47src$47rendering$47binding$46dart$58$58_pipelineOwner$35param;
    }
    get renderView() {
      return view.RenderView.as(dart.nullCheck(this[_pipelineOwner].rootNode));
    }
    set renderView(value) {
      if (!(value !== null)) dart.assertFailed(null, I[2], 238, 12, "value != null");
      this[_pipelineOwner].rootNode = value;
    }
    handleMetricsChanged() {
      if (!(this.renderView !== null)) dart.assertFailed(null, I[2], 248, 12, "renderView != null");
      this.renderView.configuration = this.createViewConfiguration();
      if (this.renderView.child != null) {
        this.scheduleForcedFrame();
      }
    }
    handleTextScaleFactorChanged() {
    }
    handlePlatformBrightnessChanged() {
    }
    createViewConfiguration() {
      let devicePixelRatio = this.window.devicePixelRatio;
      return new view.ViewConfiguration.new({size: this.window.physicalSize['/'](devicePixelRatio), devicePixelRatio: devicePixelRatio});
    }
    initMouseTracker(tracker = null) {
      let t0, t0$;
      t0 = this[_mouseTracker$];
      t0 == null ? null : t0.dispose();
      this[_mouseTracker$] = (t0$ = tracker, t0$ == null ? new mouse_tracker.MouseTracker.new() : t0$);
    }
    dispatchEvent(event, hitTestResult) {
      dart.nullCheck(this[_mouseTracker$]).updateWithEvent(event, dart.fn(() => hitTestResult == null || events.PointerMoveEvent.is(event) ? this.renderView.hitTestMouseTrackers(event.position) : hitTestResult, T.VoidToHitTestResult()));
      super.dispatchEvent(event, hitTestResult);
    }
    [_handleSemanticsEnabledChanged]() {
      this.setSemanticsEnabled(this.platformDispatcher.semanticsEnabled);
    }
    setSemanticsEnabled(enabled) {
      let t0;
      if (enabled) {
        this[_semanticsHandle$] == null ? this[_semanticsHandle$] = this[_pipelineOwner].ensureSemantics() : null;
      } else {
        t0 = this[_semanticsHandle$];
        t0 == null ? null : t0.dispose();
        this[_semanticsHandle$] = null;
      }
    }
    [_handleWebFirstFrame](_) {
      if (!true) dart.assertFailed(null, I[2], 356, 12, "kIsWeb");
      let methodChannel = C[7] || CT.C7;
      methodChannel.invokeMethod(dart.void, "first-frame");
    }
    [_handleSemanticsAction](id, action, args) {
      let t0;
      t0 = this[_pipelineOwner].semanticsOwner;
      t0 == null ? null : t0.performAction(id, action, args != null ? (C[9] || CT.C9).decodeMessage(args) : null);
    }
    [_handleSemanticsOwnerCreated]() {
      this.renderView.scheduleInitialSemantics();
    }
    [_handleSemanticsOwnerDisposed]() {
      this.renderView.clearSemantics();
    }
    [_handlePersistentFrameCallback](timeStamp) {
      this.drawFrame();
      this[_scheduleMouseTrackerUpdate]();
    }
    [_scheduleMouseTrackerUpdate]() {
      if (!!this[_debugMouseTrackerUpdateScheduled$]) dart.assertFailed(null, I[2], 384, 12, "!_debugMouseTrackerUpdateScheduled");
      if (!dart.fn(() => {
        this[_debugMouseTrackerUpdateScheduled$] = true;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[2], 385, 12, "() {\n      _debugMouseTrackerUpdateScheduled = true;\n      return true;\n    }()");
      binding$0.SchedulerBinding.instance.addPostFrameCallback(dart.fn(duration => {
        if (!this[_debugMouseTrackerUpdateScheduled$]) dart.assertFailed(null, I[2], 390, 14, "_debugMouseTrackerUpdateScheduled");
        if (!dart.fn(() => {
          this[_debugMouseTrackerUpdateScheduled$] = false;
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[2], 391, 14, "() {\n        _debugMouseTrackerUpdateScheduled = false;\n        return true;\n      }()");
        dart.nullCheck(this[_mouseTracker$]).updateAllDevices(dart.bind(this.renderView, 'hitTestMouseTrackers'));
      }, T.DurationTovoid()));
    }
    get sendFramesToEngine() {
      return this[_firstFrameSent$] || this[_firstFrameDeferredCount$] === 0;
    }
    deferFirstFrame() {
      if (!(this[_firstFrameDeferredCount$] >= 0)) dart.assertFailed(null, I[2], 424, 12, "_firstFrameDeferredCount >= 0");
      this[_firstFrameDeferredCount$] = this[_firstFrameDeferredCount$] + 1;
    }
    allowFirstFrame() {
      if (!(this[_firstFrameDeferredCount$] > 0)) dart.assertFailed(null, I[2], 437, 12, "_firstFrameDeferredCount > 0");
      this[_firstFrameDeferredCount$] = this[_firstFrameDeferredCount$] - 1;
      if (!this[_firstFrameSent$]) {
        this.scheduleWarmUpFrame();
      }
    }
    resetFirstFrameSent() {
      this[_firstFrameSent$] = false;
    }
    drawFrame() {
      if (!(this.renderView !== null)) dart.assertFailed(null, I[2], 512, 12, "renderView != null");
      this.pipelineOwner.flushLayout();
      this.pipelineOwner.flushCompositingBits();
      this.pipelineOwner.flushPaint();
      if (this.sendFramesToEngine) {
        this.renderView.compositeFrame();
        this.pipelineOwner.flushSemantics();
        this[_firstFrameSent$] = true;
      }
    }
    performReassemble() {
      return async.async(dart.void, (function* performReassemble$() {
        let t0;
        yield this[performReassemble]();
        if ((t0 = binding.BindingBase.debugReassembleConfig, t0 == null ? null : t0.widgetName) == null) {
          {
            developer.Timeline.startSync("Preparing Hot Reload (layout)");
          }
          try {
            this.renderView.reassemble();
          } finally {
            {
              developer.Timeline.finishSync();
            }
          }
        }
        this.scheduleWarmUpFrame();
        yield this.endOfFrame;
      }).bind(this));
    }
    hitTest(result, position) {
      if (!(this.renderView !== null)) dart.assertFailed(null, I[2], 544, 12, "renderView != null");
      if (!(result !== null)) dart.assertFailed(null, I[2], 545, 12, "result != null");
      if (!(position !== null)) dart.assertFailed(null, I[2], 546, 12, "position != null");
      this.renderView.hitTest(result, {position: position});
      super.hitTest(result, position);
    }
    [_forceRepaint]() {
      let visitor = null;
      function visitor$35get() {
        let t1;
        t1 = visitor;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("visitor")) : t1;
      }
      dart.fn(visitor$35get, T.VoidToFn());
      function visitor$35set(visitor$35param) {
        return visitor = visitor$35param;
      }
      dart.fn(visitor$35set, T.FnTodynamic());
      visitor$35set(dart.fn(child => {
        child.markNeedsPaint();
        child.visitChildren(visitor$35get());
      }, T.RenderObjectTovoid()));
      binding$4.RendererBinding.instance.renderView.visitChildren(visitor$35get());
      return this.endOfFrame;
    }
    [performReassemble]() {
      return super.performReassemble();
    }
  };
  (binding$4.RendererBinding[dart.mixinNew] = function() {
    this[_debugIsRenderViewInitialized] = false;
    this[_mouseTracker] = null;
    this[_$35RendererBinding$35_pipelineOwner] = null;
    this[_semanticsHandle] = null;
    this[_debugMouseTrackerUpdateScheduled] = false;
    this[_firstFrameDeferredCount] = 0;
    this[_firstFrameSent] = false;
  }).prototype = binding$4.RendererBinding.prototype;
  dart.addTypeTests(binding$4.RendererBinding);
  dart.addTypeCaches(binding$4.RendererBinding);
  binding$4.RendererBinding[dart.implements] = () => [hit_test.HitTestable, binding$1.SemanticsBinding, binding$2.GestureBinding, binding$0.SchedulerBinding, binding$.ServicesBinding, binding.BindingBase];
  dart.setMethodSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getMethods(binding$4.RendererBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    initRenderView: dart.fnType(dart.void, []),
    handleMetricsChanged: dart.fnType(dart.void, []),
    handleTextScaleFactorChanged: dart.fnType(dart.void, []),
    handlePlatformBrightnessChanged: dart.fnType(dart.void, []),
    createViewConfiguration: dart.fnType(view.ViewConfiguration, []),
    initMouseTracker: dart.fnType(dart.void, [], [dart.nullable(mouse_tracker.MouseTracker)]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, dart.nullable(hit_test.HitTestResult)]),
    [_handleSemanticsEnabledChanged]: dart.fnType(dart.void, []),
    setSemanticsEnabled: dart.fnType(dart.void, [core.bool]),
    [_handleWebFirstFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleSemanticsAction]: dart.fnType(dart.void, [core.int, ui.SemanticsAction, dart.nullable(typed_data.ByteData)]),
    [_handleSemanticsOwnerCreated]: dart.fnType(dart.void, []),
    [_handleSemanticsOwnerDisposed]: dart.fnType(dart.void, []),
    [_handlePersistentFrameCallback]: dart.fnType(dart.void, [core.Duration]),
    [_scheduleMouseTrackerUpdate]: dart.fnType(dart.void, []),
    deferFirstFrame: dart.fnType(dart.void, []),
    allowFirstFrame: dart.fnType(dart.void, []),
    resetFirstFrameSent: dart.fnType(dart.void, []),
    drawFrame: dart.fnType(dart.void, []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    hitTest: dart.fnType(dart.void, [hit_test.HitTestResult, ui.Offset]),
    [_forceRepaint]: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getGetters(binding$4.RendererBinding.__proto__),
    mouseTracker: mouse_tracker.MouseTracker,
    pipelineOwner: object.PipelineOwner,
    [_pipelineOwner]: object.PipelineOwner,
    renderView: view.RenderView,
    sendFramesToEngine: core.bool
  }));
  dart.setSetterSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getSetters(binding$4.RendererBinding.__proto__),
    [_pipelineOwner]: object.PipelineOwner,
    renderView: view.RenderView
  }));
  dart.setStaticGetterSignature(binding$4.RendererBinding, () => ['instance']);
  dart.setLibraryUri(binding$4.RendererBinding, I[3]);
  dart.setFieldSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getFields(binding$4.RendererBinding.__proto__),
    [_debugIsRenderViewInitialized$]: dart.fieldType(core.bool),
    [_mouseTracker$]: dart.fieldType(dart.nullable(mouse_tracker.MouseTracker)),
    [__RendererBinding__pipelineOwner]: dart.fieldType(dart.nullable(object.PipelineOwner)),
    [_semanticsHandle$]: dart.fieldType(dart.nullable(object.SemanticsHandle)),
    [_debugMouseTrackerUpdateScheduled$]: dart.fieldType(core.bool),
    [_firstFrameDeferredCount$]: dart.fieldType(core.int),
    [_firstFrameSent$]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(binding$4.RendererBinding, () => ['_instance']);
  dart.defineLazy(binding$4.RendererBinding, {
    /*binding$4.RendererBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  const BindingBase_GestureBinding$36 = class BindingBase_GestureBinding extends binding.BindingBase {};
  (BindingBase_GestureBinding$36.new = function() {
    binding$2.GestureBinding[dart.mixinNew].call(this);
    BindingBase_GestureBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_GestureBinding$36.prototype;
  dart.applyMixin(BindingBase_GestureBinding$36, binding$2.GestureBinding);
  const BindingBase_SchedulerBinding$36 = class BindingBase_SchedulerBinding extends BindingBase_GestureBinding$36 {};
  (BindingBase_SchedulerBinding$36.new = function() {
    binding$0.SchedulerBinding[dart.mixinNew].call(this);
    BindingBase_SchedulerBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_SchedulerBinding$36.prototype;
  dart.applyMixin(BindingBase_SchedulerBinding$36, binding$0.SchedulerBinding);
  const BindingBase_ServicesBinding$36 = class BindingBase_ServicesBinding extends BindingBase_SchedulerBinding$36 {};
  (BindingBase_ServicesBinding$36.new = function() {
    binding$.ServicesBinding[dart.mixinNew].call(this);
    BindingBase_ServicesBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_ServicesBinding$36.prototype;
  dart.applyMixin(BindingBase_ServicesBinding$36, binding$.ServicesBinding);
  const BindingBase_SemanticsBinding$36 = class BindingBase_SemanticsBinding extends BindingBase_ServicesBinding$36 {};
  (BindingBase_SemanticsBinding$36.new = function() {
    binding$1.SemanticsBinding[dart.mixinNew].call(this);
    BindingBase_SemanticsBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_SemanticsBinding$36.prototype;
  dart.applyMixin(BindingBase_SemanticsBinding$36, binding$1.SemanticsBinding);
  const BindingBase_PaintingBinding$36 = class BindingBase_PaintingBinding extends BindingBase_SemanticsBinding$36 {};
  (BindingBase_PaintingBinding$36.new = function() {
    binding$3.PaintingBinding[dart.mixinNew].call(this);
    BindingBase_PaintingBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_PaintingBinding$36.prototype;
  dart.applyMixin(BindingBase_PaintingBinding$36, binding$3.PaintingBinding);
  const BindingBase_RendererBinding$36 = class BindingBase_RendererBinding extends BindingBase_PaintingBinding$36 {};
  (BindingBase_RendererBinding$36.new = function() {
    binding$4.RendererBinding[dart.mixinNew].call(this);
    BindingBase_RendererBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_RendererBinding$36.prototype;
  dart.applyMixin(BindingBase_RendererBinding$36, binding$4.RendererBinding);
  binding$4.RenderingFlutterBinding = class RenderingFlutterBinding extends BindingBase_RendererBinding$36 {
    static ['_#new#tearOff'](opts) {
      let root = opts && 'root' in opts ? opts.root : null;
      return new binding$4.RenderingFlutterBinding.new({root: root});
    }
    static ensureInitialized() {
      if (binding$4.RendererBinding._instance == null) {
        new binding$4.RenderingFlutterBinding.new();
      }
      return binding$4.RendererBinding.instance;
    }
  };
  (binding$4.RenderingFlutterBinding.new = function(opts) {
    let root = opts && 'root' in opts ? opts.root : null;
    binding$4.RenderingFlutterBinding.__proto__.new.call(this);
    if (!(this.renderView !== null)) dart.assertFailed(null, I[2], 609, 12, "renderView != null");
    this.renderView.child = root;
  }).prototype = binding$4.RenderingFlutterBinding.prototype;
  dart.addTypeTests(binding$4.RenderingFlutterBinding);
  dart.addTypeCaches(binding$4.RenderingFlutterBinding);
  dart.setStaticMethodSignature(binding$4.RenderingFlutterBinding, () => ['ensureInitialized']);
  dart.setLibraryUri(binding$4.RenderingFlutterBinding, I[3]);
  binding$4.debugDumpRenderTree = function debugDumpRenderTree() {
    print.debugPrint(binding$4.RendererBinding.instance.renderView.toStringDeep());
  };
  binding$4.debugDumpLayerTree = function debugDumpLayerTree() {
    let t3;
    print.debugPrint((t3 = binding$4.RendererBinding.instance.renderView.debugLayer, t3 == null ? null : t3.toStringDeep()));
  };
  binding$4.debugDumpSemanticsTree = function debugDumpSemanticsTree(childOrder) {
    let t3, t3$;
    print.debugPrint((t3$ = (t3 = binding$4.RendererBinding.instance.renderView.debugSemantics, t3 == null ? null : t3.toStringDeep({childOrder: childOrder})), t3$ == null ? "Semantics not collected." : t3$));
  };
  dart.trackLibraries("packages/flutter/src/rendering/view.dart", {
    "package:flutter/src/rendering/view.dart": view,
    "package:flutter/src/rendering/binding.dart": binding$4
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["view.dart","binding.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/view.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__view: view,
    src__rendering__binding: binding$4
  };
}));

//# sourceMappingURL=view.dart.lib.js.map