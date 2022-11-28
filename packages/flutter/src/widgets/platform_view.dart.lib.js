define(['dart_sdk', 'packages/flutter/src/rendering/platform_view.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/foundation/basic_types.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/services/platform_views.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/rendering/proxy_box.dart'], (function load__packages__flutter__src__widgets__platform_view_dart(dart_sdk, packages__flutter__src__rendering__platform_view$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__foundation__basic_types$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__services__platform_views$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__rendering__proxy_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_view = packages__flutter__src__rendering__platform_view$46dart.src__rendering__platform_view;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const focus_scope = packages__flutter__src__widgets__title$46dart.src__widgets__focus_scope;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const basic_types = packages__flutter__src__foundation__basic_types$46dart.src__foundation__basic_types;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const system_channels = packages__flutter__src__services__text_editing_delta$46dart.src__services__system_channels;
  const platform_views = packages__flutter__src__services__platform_views$46dart.src__services__platform_views;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  var platform_view$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FactoryOfOneSequenceGestureRecognizer: () => (T.FactoryOfOneSequenceGestureRecognizer = dart.constFn(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer)))(),
    BuildContextAndPlatformViewControllerToPlatformViewSurface: () => (T.BuildContextAndPlatformViewControllerToPlatformViewSurface = dart.constFn(dart.fnType(platform_view$.PlatformViewSurface, [framework.BuildContext, platform_views.PlatformViewController])))(),
    voidToNull: () => (T.voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    LinkedHashSetOfFactoryOfOneSequenceGestureRecognizer: () => (T.LinkedHashSetOfFactoryOfOneSequenceGestureRecognizer = dart.constFn(collection.LinkedHashSet$(T.FactoryOfOneSequenceGestureRecognizer())))(),
    boolTovoid: () => (T.boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))(),
    SizeTovoid: () => (T.SizeTovoid = dart.constFn(dart.fnType(dart.void, [ui.Size])))(),
    OffsetToOffset: () => (T.OffsetToOffset = dart.constFn(dart.fnType(ui.Offset, [ui.Offset])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: platform_view.PlatformViewHitTestBehavior.prototype,
        [_Enum__name]: "opaque",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AndroidView",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UiKitView",
        [_Location_column]: 9,
        [_Location_line]: 218,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HtmlElementView",
        [_Location_column]: 9,
        [_Location_line]: 343,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C5() {
      return C[5] = dart.constSet(T.FactoryOfOneSequenceGestureRecognizer(), []);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PlatformViewSurface",
        [_Location_column]: 16,
        [_Location_line]: 366,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PlatformViewLink",
        [_Location_column]: 12,
        [_Location_line]: 362,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_AndroidPlatformView",
        [_Location_column]: 14,
        [_Location_line]: 446,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Focus",
        [_Location_column]: 12,
        [_Location_line]: 443,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 574,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[11] || CT.C11,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 1 / 0,
        [SizedBox_width]: 1 / 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_UiKitPlatformView",
        [_Location_column]: 14,
        [_Location_line]: 579,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Focus",
        [_Location_column]: 12,
        [_Location_line]: 576,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_AndroidPlatformView",
        [_Location_column]: 9,
        [_Location_line]: 678,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_UiKitPlatformView",
        [_Location_column]: 9,
        [_Location_line]: 712,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PlatformViewLink",
        [_Location_column]: 9,
        [_Location_line]: 834,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 869,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[18] || CT.C18,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 1 / 0,
        [SizedBox_width]: 1 / 0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_PlatformViewPlaceHolder",
        [_Location_column]: 14,
        [_Location_line]: 874,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Focus",
        [_Location_column]: 12,
        [_Location_line]: 881,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PlatformViewSurface",
        [_Location_column]: 9,
        [_Location_line]: 972,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AndroidViewSurface",
        [_Location_column]: 9,
        [_Location_line]: 1062,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 1 / 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 1 / 0
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_PlatformViewPlaceHolder",
        [_Location_column]: 9,
        [_Location_line]: 1124,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart"
      });
    }
  }, false);
  var C = Array(25).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/platform_view.dart",
    "package:flutter/src/widgets/platform_view.dart"
  ];
  var viewType$ = dart.privateName(platform_view$, "AndroidView.viewType");
  var onPlatformViewCreated$ = dart.privateName(platform_view$, "AndroidView.onPlatformViewCreated");
  var hitTestBehavior$ = dart.privateName(platform_view$, "AndroidView.hitTestBehavior");
  var layoutDirection$ = dart.privateName(platform_view$, "AndroidView.layoutDirection");
  var gestureRecognizers$ = dart.privateName(platform_view$, "AndroidView.gestureRecognizers");
  var creationParams$ = dart.privateName(platform_view$, "AndroidView.creationParams");
  var creationParamsCodec$ = dart.privateName(platform_view$, "AndroidView.creationParamsCodec");
  var clipBehavior$ = dart.privateName(platform_view$, "AndroidView.clipBehavior");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  platform_view$.AndroidView = class AndroidView extends framework.StatefulWidget {
    get viewType() {
      return this[viewType$];
    }
    set viewType(value) {
      super.viewType = value;
    }
    get onPlatformViewCreated() {
      return this[onPlatformViewCreated$];
    }
    set onPlatformViewCreated(value) {
      super.onPlatformViewCreated = value;
    }
    get hitTestBehavior() {
      return this[hitTestBehavior$];
    }
    set hitTestBehavior(value) {
      super.hitTestBehavior = value;
    }
    get layoutDirection() {
      return this[layoutDirection$];
    }
    set layoutDirection(value) {
      super.layoutDirection = value;
    }
    get gestureRecognizers() {
      return this[gestureRecognizers$];
    }
    set gestureRecognizers(value) {
      super.gestureRecognizers = value;
    }
    get creationParams() {
      return this[creationParams$];
    }
    set creationParams(value) {
      super.creationParams = value;
    }
    get creationParamsCodec() {
      return this[creationParamsCodec$];
    }
    set creationParamsCodec(value) {
      super.creationParamsCodec = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : C[0] || CT.C0;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[1] || CT.C1;
      return new platform_view$.AndroidView.new({key: key, viewType: viewType, onPlatformViewCreated: onPlatformViewCreated, hitTestBehavior: hitTestBehavior, layoutDirection: layoutDirection, gestureRecognizers: gestureRecognizers, creationParams: creationParams, creationParamsCodec: creationParamsCodec, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    createState() {
      return new platform_view$._AndroidViewState.new();
    }
  };
  (platform_view$.AndroidView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : C[0] || CT.C0;
    let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
    let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[1] || CT.C1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[viewType$] = viewType;
    this[onPlatformViewCreated$] = onPlatformViewCreated;
    this[hitTestBehavior$] = hitTestBehavior;
    this[layoutDirection$] = layoutDirection;
    this[gestureRecognizers$] = gestureRecognizers;
    this[creationParams$] = creationParams;
    this[creationParamsCodec$] = creationParamsCodec;
    this[clipBehavior$] = clipBehavior;
    if (!(viewType !== null)) dart.assertFailed(null, I[0], 75, 15, "viewType != null");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[0], 76, 15, "hitTestBehavior != null");
    if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, I[0], 77, 15, "creationParams == null || creationParamsCodec != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 78, 15, "clipBehavior != null");
    platform_view$.AndroidView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$.AndroidView.prototype;
  dart.addTypeTests(platform_view$.AndroidView);
  dart.addTypeCaches(platform_view$.AndroidView);
  dart.setMethodSignature(platform_view$.AndroidView, () => ({
    __proto__: dart.getMethods(platform_view$.AndroidView.__proto__),
    createState: dart.fnType(framework.State$(platform_view$.AndroidView), [])
  }));
  dart.setLibraryUri(platform_view$.AndroidView, I[1]);
  dart.setFieldSignature(platform_view$.AndroidView, () => ({
    __proto__: dart.getFields(platform_view$.AndroidView.__proto__),
    viewType: dart.finalFieldType(core.String),
    onPlatformViewCreated: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.int]))),
    hitTestBehavior: dart.finalFieldType(platform_view.PlatformViewHitTestBehavior),
    layoutDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    gestureRecognizers: dart.finalFieldType(dart.nullable(core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer)))),
    creationParams: dart.finalFieldType(dart.dynamic),
    creationParamsCodec: dart.finalFieldType(dart.nullable(message_codec.MessageCodec)),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  var viewType$0 = dart.privateName(platform_view$, "UiKitView.viewType");
  var onPlatformViewCreated$0 = dart.privateName(platform_view$, "UiKitView.onPlatformViewCreated");
  var hitTestBehavior$0 = dart.privateName(platform_view$, "UiKitView.hitTestBehavior");
  var layoutDirection$0 = dart.privateName(platform_view$, "UiKitView.layoutDirection");
  var creationParams$0 = dart.privateName(platform_view$, "UiKitView.creationParams");
  var creationParamsCodec$0 = dart.privateName(platform_view$, "UiKitView.creationParamsCodec");
  var gestureRecognizers$0 = dart.privateName(platform_view$, "UiKitView.gestureRecognizers");
  platform_view$.UiKitView = class UiKitView extends framework.StatefulWidget {
    get viewType() {
      return this[viewType$0];
    }
    set viewType(value) {
      super.viewType = value;
    }
    get onPlatformViewCreated() {
      return this[onPlatformViewCreated$0];
    }
    set onPlatformViewCreated(value) {
      super.onPlatformViewCreated = value;
    }
    get hitTestBehavior() {
      return this[hitTestBehavior$0];
    }
    set hitTestBehavior(value) {
      super.hitTestBehavior = value;
    }
    get layoutDirection() {
      return this[layoutDirection$0];
    }
    set layoutDirection(value) {
      super.layoutDirection = value;
    }
    get creationParams() {
      return this[creationParams$0];
    }
    set creationParams(value) {
      super.creationParams = value;
    }
    get creationParamsCodec() {
      return this[creationParamsCodec$0];
    }
    set creationParamsCodec(value) {
      super.creationParamsCodec = value;
    }
    get gestureRecognizers() {
      return this[gestureRecognizers$0];
    }
    set gestureRecognizers(value) {
      super.gestureRecognizers = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : C[0] || CT.C0;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      return new platform_view$.UiKitView.new({key: key, viewType: viewType, onPlatformViewCreated: onPlatformViewCreated, hitTestBehavior: hitTestBehavior, layoutDirection: layoutDirection, creationParams: creationParams, creationParamsCodec: creationParamsCodec, gestureRecognizers: gestureRecognizers, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    createState() {
      return new platform_view$._UiKitViewState.new();
    }
  };
  (platform_view$.UiKitView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : C[0] || CT.C0;
    let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
    let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
    let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[viewType$0] = viewType;
    this[onPlatformViewCreated$0] = onPlatformViewCreated;
    this[hitTestBehavior$0] = hitTestBehavior;
    this[layoutDirection$0] = layoutDirection;
    this[creationParams$0] = creationParams;
    this[creationParamsCodec$0] = creationParamsCodec;
    this[gestureRecognizers$0] = gestureRecognizers;
    if (!(viewType !== null)) dart.assertFailed(null, I[0], 227, 15, "viewType != null");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[0], 228, 15, "hitTestBehavior != null");
    if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, I[0], 229, 15, "creationParams == null || creationParamsCodec != null");
    platform_view$.UiKitView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$.UiKitView.prototype;
  dart.addTypeTests(platform_view$.UiKitView);
  dart.addTypeCaches(platform_view$.UiKitView);
  dart.setMethodSignature(platform_view$.UiKitView, () => ({
    __proto__: dart.getMethods(platform_view$.UiKitView.__proto__),
    createState: dart.fnType(framework.State$(platform_view$.UiKitView), [])
  }));
  dart.setLibraryUri(platform_view$.UiKitView, I[1]);
  dart.setFieldSignature(platform_view$.UiKitView, () => ({
    __proto__: dart.getFields(platform_view$.UiKitView.__proto__),
    viewType: dart.finalFieldType(core.String),
    onPlatformViewCreated: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.int]))),
    hitTestBehavior: dart.finalFieldType(platform_view.PlatformViewHitTestBehavior),
    layoutDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    creationParams: dart.finalFieldType(dart.dynamic),
    creationParamsCodec: dart.finalFieldType(dart.nullable(message_codec.MessageCodec)),
    gestureRecognizers: dart.finalFieldType(dart.nullable(core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer))))
  }));
  var viewType$1 = dart.privateName(platform_view$, "HtmlElementView.viewType");
  var onPlatformViewCreated$1 = dart.privateName(platform_view$, "HtmlElementView.onPlatformViewCreated");
  var _createHtmlElementView = dart.privateName(platform_view$, "_createHtmlElementView");
  var _initialize = dart.privateName(platform_view$, "_initialize");
  platform_view$.HtmlElementView = class HtmlElementView extends framework.StatelessWidget {
    get viewType() {
      return this[viewType$1];
    }
    set viewType(value) {
      super.viewType = value;
    }
    get onPlatformViewCreated() {
      return this[onPlatformViewCreated$1];
    }
    set onPlatformViewCreated(value) {
      super.onPlatformViewCreated = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
      return new platform_view$.HtmlElementView.new({key: key, viewType: viewType, onPlatformViewCreated: onPlatformViewCreated, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    build(context) {
      return new platform_view$.PlatformViewLink.new({viewType: this.viewType, onCreatePlatformView: dart.bind(this, _createHtmlElementView), surfaceFactory: dart.fn((context, controller) => new platform_view$.PlatformViewSurface.new({controller: controller, gestureRecognizers: C[5] || CT.C5, hitTestBehavior: platform_view.PlatformViewHitTestBehavior.opaque, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), T.BuildContextAndPlatformViewControllerToPlatformViewSurface()), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    [_createHtmlElementView](params) {
      let controller = new platform_view$._HtmlElementViewController.new(params.id, this.viewType);
      controller[_initialize]().then(core.Null, dart.fn(_ => {
        let t1, t0, t0$;
        t0 = params;
        t1 = params.id;
        t0.onPlatformViewCreated(t1);
        t0$ = this.onPlatformViewCreated;
        t0$ == null ? null : t0$(params.id);
      }, T.voidToNull()));
      return controller;
    }
  };
  (platform_view$.HtmlElementView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[viewType$1] = viewType;
    this[onPlatformViewCreated$1] = onPlatformViewCreated;
    if (!(viewType !== null)) dart.assertFailed(null, I[0], 347, 15, "viewType != null");
    if (!true) dart.assertFailed("HtmlElementView is only available on Flutter Web.", I[0], 348, 15, "kIsWeb");
    platform_view$.HtmlElementView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$.HtmlElementView.prototype;
  dart.addTypeTests(platform_view$.HtmlElementView);
  dart.addTypeCaches(platform_view$.HtmlElementView);
  dart.setMethodSignature(platform_view$.HtmlElementView, () => ({
    __proto__: dart.getMethods(platform_view$.HtmlElementView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_createHtmlElementView]: dart.fnType(platform_view$._HtmlElementViewController, [platform_view$.PlatformViewCreationParams])
  }));
  dart.setLibraryUri(platform_view$.HtmlElementView, I[1]);
  dart.setFieldSignature(platform_view$.HtmlElementView, () => ({
    __proto__: dart.getFields(platform_view$.HtmlElementView.__proto__),
    viewType: dart.finalFieldType(core.String),
    onPlatformViewCreated: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.int])))
  }));
  var viewId$ = dart.privateName(platform_view$, "_HtmlElementViewController.viewId");
  var _initialized = dart.privateName(platform_view$, "_initialized");
  platform_view$._HtmlElementViewController = class _HtmlElementViewController extends platform_views.PlatformViewController {
    get viewId() {
      return this[viewId$];
    }
    set viewId(value) {
      super.viewId = value;
    }
    static ['_#new#tearOff'](viewId, viewType) {
      return new platform_view$._HtmlElementViewController.new(viewId, viewType);
    }
    [_initialize]() {
      return async.async(dart.void, (function* _initialize() {
        let args = new (T.IdentityMapOfString$dynamic()).from(["id", this.viewId, "viewType", this.viewType]);
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "create", args);
        this[_initialized] = true;
      }).bind(this));
    }
    clearFocus() {
      return async.async(dart.void, function* clearFocus() {
      });
    }
    dispatchPointerEvent(event) {
      return async.async(dart.void, function* dispatchPointerEvent() {
      });
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        if (this[_initialized]) {
          yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.viewId);
        }
      }).bind(this));
    }
  };
  (platform_view$._HtmlElementViewController.new = function(viewId, viewType) {
    this[_initialized] = false;
    this[viewId$] = viewId;
    this.viewType = viewType;
    ;
  }).prototype = platform_view$._HtmlElementViewController.prototype;
  dart.addTypeTests(platform_view$._HtmlElementViewController);
  dart.addTypeCaches(platform_view$._HtmlElementViewController);
  dart.setMethodSignature(platform_view$._HtmlElementViewController, () => ({
    __proto__: dart.getMethods(platform_view$._HtmlElementViewController.__proto__),
    [_initialize]: dart.fnType(async.Future$(dart.void), []),
    clearFocus: dart.fnType(async.Future$(dart.void), []),
    dispatchPointerEvent: dart.fnType(async.Future$(dart.void), [events.PointerEvent]),
    dispose: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(platform_view$._HtmlElementViewController, I[1]);
  dart.setFieldSignature(platform_view$._HtmlElementViewController, () => ({
    __proto__: dart.getFields(platform_view$._HtmlElementViewController.__proto__),
    viewId: dart.finalFieldType(core.int),
    viewType: dart.finalFieldType(core.String),
    [_initialized]: dart.fieldType(core.bool)
  }));
  var _id = dart.privateName(platform_view$, "_id");
  var ___AndroidViewState__controller = dart.privateName(platform_view$, "_#_AndroidViewState#_controller");
  var _layoutDirection = dart.privateName(platform_view$, "_layoutDirection");
  var _focusNode = dart.privateName(platform_view$, "_focusNode");
  var _controller = dart.privateName(platform_view$, "_controller");
  var _onFocusChange = dart.privateName(platform_view$, "_onFocusChange");
  var _createNewAndroidView = dart.privateName(platform_view$, "_createNewAndroidView");
  var _initializeOnce = dart.privateName(platform_view$, "_initializeOnce");
  var _findLayoutDirection = dart.privateName(platform_view$, "_findLayoutDirection");
  platform_view$._AndroidViewState = class _AndroidViewState extends framework.State$(platform_view$.AndroidView) {
    get [_controller]() {
      let t0;
      t0 = this[___AndroidViewState__controller];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t0;
    }
    set [_controller](library$32package$58flutter$47src$47widgets$47platform_view$46dart$58$58_controller$35param) {
      this[___AndroidViewState__controller] = library$32package$58flutter$47src$47widgets$47platform_view$46dart$58$58_controller$35param;
    }
    build(context) {
      let t0;
      return new focus_scope.Focus.new({focusNode: this[_focusNode], onFocusChange: dart.bind(this, _onFocusChange), child: new platform_view$._AndroidPlatformView.new({controller: this[_controller], hitTestBehavior: this.widget.hitTestBehavior, gestureRecognizers: (t0 = this.widget.gestureRecognizers, t0 == null ? platform_view$._AndroidViewState._emptyRecognizersSet : t0), clipBehavior: this.widget.clipBehavior, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    [_initializeOnce]() {
      if (this[_initialized]) {
        return;
      }
      this[_initialized] = true;
      this[_createNewAndroidView]();
      this[_focusNode] = new focus_manager.FocusNode.new({debugLabel: "AndroidView(id: " + dart.str(this[_id]) + ")"});
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      let newLayoutDirection = this[_findLayoutDirection]();
      let didChangeLayoutDirection = this[_layoutDirection] !== newLayoutDirection;
      this[_layoutDirection] = newLayoutDirection;
      this[_initializeOnce]();
      if (didChangeLayoutDirection) {
        this[_controller].setLayoutDirection(dart.nullCheck(this[_layoutDirection]));
      }
    }
    didUpdateWidget(oldWidget) {
      platform_view$.AndroidView.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      let newLayoutDirection = this[_findLayoutDirection]();
      let didChangeLayoutDirection = this[_layoutDirection] !== newLayoutDirection;
      this[_layoutDirection] = newLayoutDirection;
      if (this.widget.viewType !== oldWidget.viewType) {
        this[_controller].dispose();
        this[_createNewAndroidView]();
        return;
      }
      if (didChangeLayoutDirection) {
        this[_controller].setLayoutDirection(dart.nullCheck(this[_layoutDirection]));
      }
    }
    [_findLayoutDirection]() {
      let t0;
      if (!(this.widget.layoutDirection != null || debug.debugCheckHasDirectionality(this.context))) dart.assertFailed(null, I[0], 499, 12, "widget.layoutDirection != null || debugCheckHasDirectionality(context)");
      t0 = this.widget.layoutDirection;
      return t0 == null ? basic.Directionality.of(this.context) : t0;
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_createNewAndroidView]() {
      this[_id] = platform_views.platformViewsRegistry.getNextPlatformViewId();
      this[_controller] = platform_views.PlatformViewsService.initAndroidView({id: dart.nullCheck(this[_id]), viewType: this.widget.viewType, layoutDirection: dart.nullCheck(this[_layoutDirection]), creationParams: this.widget.creationParams, creationParamsCodec: this.widget.creationParamsCodec, onFocus: dart.fn(() => {
          dart.nullCheck(this[_focusNode]).requestFocus();
        }, T.VoidTovoid())});
      if (this.widget.onPlatformViewCreated != null) {
        this[_controller].addOnPlatformViewCreatedListener(dart.nullCheck(this.widget.onPlatformViewCreated));
      }
    }
    [_onFocusChange](isFocused) {
      if (!this[_controller].isCreated) {
        return;
      }
      if (!isFocused) {
        this[_controller].clearFocus().catchError(dart.fn(e => {
          if (message_codec.MissingPluginException.is(e)) {
            return;
          }
        }, T.dynamicToNull()));
        return;
      }
      system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.setPlatformViewClient", new (T.IdentityMapOfString$dynamic()).from(["platformViewId", this[_id]])).catchError(dart.fn(e => {
        if (message_codec.MissingPluginException.is(e)) {
          return;
        }
      }, T.dynamicToNull()));
    }
    static ['_#new#tearOff']() {
      return new platform_view$._AndroidViewState.new();
    }
  };
  (platform_view$._AndroidViewState.new = function() {
    this[_id] = null;
    this[___AndroidViewState__controller] = null;
    this[_layoutDirection] = null;
    this[_initialized] = false;
    this[_focusNode] = null;
    platform_view$._AndroidViewState.__proto__.new.call(this);
    ;
  }).prototype = platform_view$._AndroidViewState.prototype;
  dart.addTypeTests(platform_view$._AndroidViewState);
  dart.addTypeCaches(platform_view$._AndroidViewState);
  dart.setMethodSignature(platform_view$._AndroidViewState, () => ({
    __proto__: dart.getMethods(platform_view$._AndroidViewState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_initializeOnce]: dart.fnType(dart.void, []),
    [_findLayoutDirection]: dart.fnType(ui.TextDirection, []),
    [_createNewAndroidView]: dart.fnType(dart.void, []),
    [_onFocusChange]: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(platform_view$._AndroidViewState, () => ({
    __proto__: dart.getGetters(platform_view$._AndroidViewState.__proto__),
    [_controller]: platform_views.AndroidViewController
  }));
  dart.setSetterSignature(platform_view$._AndroidViewState, () => ({
    __proto__: dart.getSetters(platform_view$._AndroidViewState.__proto__),
    [_controller]: platform_views.AndroidViewController
  }));
  dart.setLibraryUri(platform_view$._AndroidViewState, I[1]);
  dart.setFieldSignature(platform_view$._AndroidViewState, () => ({
    __proto__: dart.getFields(platform_view$._AndroidViewState.__proto__),
    [_id]: dart.fieldType(dart.nullable(core.int)),
    [___AndroidViewState__controller]: dart.fieldType(dart.nullable(platform_views.AndroidViewController)),
    [_layoutDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_initialized]: dart.fieldType(core.bool),
    [_focusNode]: dart.fieldType(dart.nullable(focus_manager.FocusNode))
  }));
  dart.setStaticFieldSignature(platform_view$._AndroidViewState, () => ['_emptyRecognizersSet']);
  dart.defineLazy(platform_view$._AndroidViewState, {
    /*platform_view$._AndroidViewState._emptyRecognizersSet*/get _emptyRecognizersSet() {
      return T.LinkedHashSetOfFactoryOfOneSequenceGestureRecognizer().new();
    }
  }, false);
  var ___UiKitViewState__focusNode = dart.privateName(platform_view$, "_#_UiKitViewState#_focusNode");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var _createNewUiKitView = dart.privateName(platform_view$, "_createNewUiKitView");
  platform_view$._UiKitViewState = class _UiKitViewState extends framework.State$(platform_view$.UiKitView) {
    get [_focusNode]() {
      let t0;
      t0 = this[___UiKitViewState__focusNode];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_focusNode")) : t0;
    }
    set [_focusNode](library$32package$58flutter$47src$47widgets$47platform_view$46dart$58$58_focusNode$35param) {
      this[___UiKitViewState__focusNode] = library$32package$58flutter$47src$47widgets$47platform_view$46dart$58$58_focusNode$35param;
    }
    build(context) {
      let t0;
      let controller = this[_controller];
      if (controller == null) {
        return C[10] || CT.C10;
      }
      return new focus_scope.Focus.new({focusNode: this[_focusNode], onFocusChange: dart.fn(isFocused => this[_onFocusChange](isFocused, controller), T.boolTovoid()), child: new platform_view$._UiKitPlatformView.new({controller: dart.nullCheck(this[_controller]), hitTestBehavior: this.widget.hitTestBehavior, gestureRecognizers: (t0 = this.widget.gestureRecognizers, t0 == null ? platform_view$._UiKitViewState._emptyRecognizersSet : t0), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    [_initializeOnce]() {
      if (this[_initialized]) {
        return;
      }
      this[_initialized] = true;
      this[_createNewUiKitView]();
    }
    didChangeDependencies() {
      let t0;
      super.didChangeDependencies();
      let newLayoutDirection = this[_findLayoutDirection]();
      let didChangeLayoutDirection = this[_layoutDirection] !== newLayoutDirection;
      this[_layoutDirection] = newLayoutDirection;
      this[_initializeOnce]();
      if (didChangeLayoutDirection) {
        t0 = this[_controller];
        t0 == null ? null : t0.setLayoutDirection(dart.nullCheck(this[_layoutDirection]));
      }
    }
    didUpdateWidget(oldWidget) {
      let t0, t0$;
      platform_view$.UiKitView.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      let newLayoutDirection = this[_findLayoutDirection]();
      let didChangeLayoutDirection = this[_layoutDirection] !== newLayoutDirection;
      this[_layoutDirection] = newLayoutDirection;
      if (this.widget.viewType !== oldWidget.viewType) {
        t0 = this[_controller];
        t0 == null ? null : t0.dispose();
        this[_createNewUiKitView]();
        return;
      }
      if (didChangeLayoutDirection) {
        t0$ = this[_controller];
        t0$ == null ? null : t0$.setLayoutDirection(dart.nullCheck(this[_layoutDirection]));
      }
    }
    [_findLayoutDirection]() {
      let t0;
      if (!(this.widget.layoutDirection != null || debug.debugCheckHasDirectionality(this.context))) dart.assertFailed(null, I[0], 630, 12, "widget.layoutDirection != null || debugCheckHasDirectionality(context)");
      t0 = this.widget.layoutDirection;
      return t0 == null ? basic.Directionality.of(this.context) : t0;
    }
    dispose() {
      let t0;
      t0 = this[_controller];
      t0 == null ? null : t0.dispose();
      super.dispose();
    }
    [_createNewUiKitView]() {
      return async.async(dart.void, (function* _createNewUiKitView() {
        let t0;
        let id = platform_views.platformViewsRegistry.getNextPlatformViewId();
        let controller = (yield platform_views.PlatformViewsService.initUiKitView({id: id, viewType: this.widget.viewType, layoutDirection: dart.nullCheck(this[_layoutDirection]), creationParams: this.widget.creationParams, creationParamsCodec: this.widget.creationParamsCodec, onFocus: dart.fn(() => {
            this[_focusNode].requestFocus();
          }, T.VoidTovoid())}));
        if (!this.mounted) {
          controller.dispose();
          return;
        }
        t0 = this.widget.onPlatformViewCreated;
        t0 == null ? null : t0(id);
        this.setState(dart.fn(() => {
          this[_controller] = controller;
          this[_focusNode] = new focus_manager.FocusNode.new({debugLabel: "UiKitView(id: " + dart.str(id) + ")"});
        }, T.VoidTovoid()));
      }).bind(this));
    }
    [_onFocusChange](isFocused, controller) {
      if (!isFocused) {
        return;
      }
      system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.setPlatformViewClient", new (T.IdentityMapOfString$dynamic()).from(["platformViewId", controller.id]));
    }
    static ['_#new#tearOff']() {
      return new platform_view$._UiKitViewState.new();
    }
  };
  (platform_view$._UiKitViewState.new = function() {
    this[_controller] = null;
    this[_layoutDirection] = null;
    this[_initialized] = false;
    this[___UiKitViewState__focusNode] = null;
    platform_view$._UiKitViewState.__proto__.new.call(this);
    ;
  }).prototype = platform_view$._UiKitViewState.prototype;
  dart.addTypeTests(platform_view$._UiKitViewState);
  dart.addTypeCaches(platform_view$._UiKitViewState);
  dart.setMethodSignature(platform_view$._UiKitViewState, () => ({
    __proto__: dart.getMethods(platform_view$._UiKitViewState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_initializeOnce]: dart.fnType(dart.void, []),
    [_findLayoutDirection]: dart.fnType(ui.TextDirection, []),
    [_createNewUiKitView]: dart.fnType(async.Future$(dart.void), []),
    [_onFocusChange]: dart.fnType(dart.void, [core.bool, platform_views.UiKitViewController])
  }));
  dart.setGetterSignature(platform_view$._UiKitViewState, () => ({
    __proto__: dart.getGetters(platform_view$._UiKitViewState.__proto__),
    [_focusNode]: focus_manager.FocusNode
  }));
  dart.setSetterSignature(platform_view$._UiKitViewState, () => ({
    __proto__: dart.getSetters(platform_view$._UiKitViewState.__proto__),
    [_focusNode]: focus_manager.FocusNode
  }));
  dart.setLibraryUri(platform_view$._UiKitViewState, I[1]);
  dart.setFieldSignature(platform_view$._UiKitViewState, () => ({
    __proto__: dart.getFields(platform_view$._UiKitViewState.__proto__),
    [_controller]: dart.fieldType(dart.nullable(platform_views.UiKitViewController)),
    [_layoutDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_initialized]: dart.fieldType(core.bool),
    [___UiKitViewState__focusNode]: dart.fieldType(dart.nullable(focus_manager.FocusNode))
  }));
  dart.setStaticFieldSignature(platform_view$._UiKitViewState, () => ['_emptyRecognizersSet']);
  dart.defineLazy(platform_view$._UiKitViewState, {
    /*platform_view$._UiKitViewState._emptyRecognizersSet*/get _emptyRecognizersSet() {
      return T.LinkedHashSetOfFactoryOfOneSequenceGestureRecognizer().new();
    }
  }, false);
  var controller$ = dart.privateName(platform_view$, "_AndroidPlatformView.controller");
  var hitTestBehavior$1 = dart.privateName(platform_view$, "_AndroidPlatformView.hitTestBehavior");
  var gestureRecognizers$1 = dart.privateName(platform_view$, "_AndroidPlatformView.gestureRecognizers");
  var clipBehavior$0 = dart.privateName(platform_view$, "_AndroidPlatformView.clipBehavior");
  platform_view$._AndroidPlatformView = class _AndroidPlatformView extends framework.LeafRenderObjectWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get hitTestBehavior() {
      return this[hitTestBehavior$1];
    }
    set hitTestBehavior(value) {
      super.hitTestBehavior = value;
    }
    get gestureRecognizers() {
      return this[gestureRecognizers$1];
    }
    set gestureRecognizers(value) {
      super.gestureRecognizers = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[1] || CT.C1;
      return new platform_view$._AndroidPlatformView.new({controller: controller, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    createRenderObject(context) {
      return new platform_view.RenderAndroidView.new({viewController: this.controller, hitTestBehavior: this.hitTestBehavior, gestureRecognizers: this.gestureRecognizers, clipBehavior: this.clipBehavior});
    }
    updateRenderObject(context, renderObject) {
      platform_view.RenderAndroidView.as(renderObject);
      renderObject.controller = this.controller;
      renderObject.hitTestBehavior = this.hitTestBehavior;
      renderObject.updateGestureRecognizers(this.gestureRecognizers);
      renderObject.clipBehavior = this.clipBehavior;
    }
  };
  (platform_view$._AndroidPlatformView.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[1] || CT.C1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[hitTestBehavior$1] = hitTestBehavior;
    this[gestureRecognizers$1] = gestureRecognizers;
    this[clipBehavior$0] = clipBehavior;
    if (!(controller !== null)) dart.assertFailed(null, I[0], 683, 15, "controller != null");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[0], 684, 15, "hitTestBehavior != null");
    if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[0], 685, 15, "gestureRecognizers != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 686, 15, "clipBehavior != null");
    platform_view$._AndroidPlatformView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$._AndroidPlatformView.prototype;
  dart.addTypeTests(platform_view$._AndroidPlatformView);
  dart.addTypeCaches(platform_view$._AndroidPlatformView);
  dart.setMethodSignature(platform_view$._AndroidPlatformView, () => ({
    __proto__: dart.getMethods(platform_view$._AndroidPlatformView.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(platform_view$._AndroidPlatformView, I[1]);
  dart.setFieldSignature(platform_view$._AndroidPlatformView, () => ({
    __proto__: dart.getFields(platform_view$._AndroidPlatformView.__proto__),
    controller: dart.finalFieldType(platform_views.AndroidViewController),
    hitTestBehavior: dart.finalFieldType(platform_view.PlatformViewHitTestBehavior),
    gestureRecognizers: dart.finalFieldType(core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer))),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  var controller$0 = dart.privateName(platform_view$, "_UiKitPlatformView.controller");
  var hitTestBehavior$2 = dart.privateName(platform_view$, "_UiKitPlatformView.hitTestBehavior");
  var gestureRecognizers$2 = dart.privateName(platform_view$, "_UiKitPlatformView.gestureRecognizers");
  platform_view$._UiKitPlatformView = class _UiKitPlatformView extends framework.LeafRenderObjectWidget {
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    get hitTestBehavior() {
      return this[hitTestBehavior$2];
    }
    set hitTestBehavior(value) {
      super.hitTestBehavior = value;
    }
    get gestureRecognizers() {
      return this[gestureRecognizers$2];
    }
    set gestureRecognizers(value) {
      super.gestureRecognizers = value;
    }
    static ['_#new#tearOff'](opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      return new platform_view$._UiKitPlatformView.new({controller: controller, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
    createRenderObject(context) {
      return new platform_view.RenderUiKitView.new({viewController: this.controller, hitTestBehavior: this.hitTestBehavior, gestureRecognizers: this.gestureRecognizers});
    }
    updateRenderObject(context, renderObject) {
      platform_view.RenderUiKitView.as(renderObject);
      renderObject.viewController = this.controller;
      renderObject.hitTestBehavior = this.hitTestBehavior;
      renderObject.updateGestureRecognizers(this.gestureRecognizers);
    }
  };
  (platform_view$._UiKitPlatformView.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$0] = controller;
    this[hitTestBehavior$2] = hitTestBehavior;
    this[gestureRecognizers$2] = gestureRecognizers;
    if (!(controller !== null)) dart.assertFailed(null, I[0], 716, 15, "controller != null");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[0], 717, 15, "hitTestBehavior != null");
    if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[0], 718, 15, "gestureRecognizers != null");
    platform_view$._UiKitPlatformView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$._UiKitPlatformView.prototype;
  dart.addTypeTests(platform_view$._UiKitPlatformView);
  dart.addTypeCaches(platform_view$._UiKitPlatformView);
  dart.setMethodSignature(platform_view$._UiKitPlatformView, () => ({
    __proto__: dart.getMethods(platform_view$._UiKitPlatformView.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(platform_view$._UiKitPlatformView, I[1]);
  dart.setFieldSignature(platform_view$._UiKitPlatformView, () => ({
    __proto__: dart.getFields(platform_view$._UiKitPlatformView.__proto__),
    controller: dart.finalFieldType(platform_views.UiKitViewController),
    hitTestBehavior: dart.finalFieldType(platform_view.PlatformViewHitTestBehavior),
    gestureRecognizers: dart.finalFieldType(core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer)))
  }));
  var id$ = dart.privateName(platform_view$, "PlatformViewCreationParams.id");
  var viewType$2 = dart.privateName(platform_view$, "PlatformViewCreationParams.viewType");
  var onPlatformViewCreated$2 = dart.privateName(platform_view$, "PlatformViewCreationParams.onPlatformViewCreated");
  var onFocusChanged$ = dart.privateName(platform_view$, "PlatformViewCreationParams.onFocusChanged");
  platform_view$.PlatformViewCreationParams = class PlatformViewCreationParams extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get viewType() {
      return this[viewType$2];
    }
    set viewType(value) {
      super.viewType = value;
    }
    get onPlatformViewCreated() {
      return this[onPlatformViewCreated$2];
    }
    set onPlatformViewCreated(value) {
      super.onPlatformViewCreated = value;
    }
    get onFocusChanged() {
      return this[onFocusChanged$];
    }
    set onFocusChanged(value) {
      super.onFocusChanged = value;
    }
    static ['_#_#tearOff'](opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
      let onFocusChanged = opts && 'onFocusChanged' in opts ? opts.onFocusChanged : null;
      return new platform_view$.PlatformViewCreationParams.__({id: id, viewType: viewType, onPlatformViewCreated: onPlatformViewCreated, onFocusChanged: onFocusChanged});
    }
  };
  (platform_view$.PlatformViewCreationParams.__ = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
    let onFocusChanged = opts && 'onFocusChanged' in opts ? opts.onFocusChanged : null;
    this[id$] = id;
    this[viewType$2] = viewType;
    this[onPlatformViewCreated$2] = onPlatformViewCreated;
    this[onFocusChanged$] = onFocusChanged;
    if (!(id !== null)) dart.assertFailed(null, I[0], 753, 15, "id != null");
    if (!(onPlatformViewCreated !== null)) dart.assertFailed(null, I[0], 754, 15, "onPlatformViewCreated != null");
    ;
  }).prototype = platform_view$.PlatformViewCreationParams.prototype;
  dart.addTypeTests(platform_view$.PlatformViewCreationParams);
  dart.addTypeCaches(platform_view$.PlatformViewCreationParams);
  dart.setLibraryUri(platform_view$.PlatformViewCreationParams, I[1]);
  dart.setFieldSignature(platform_view$.PlatformViewCreationParams, () => ({
    __proto__: dart.getFields(platform_view$.PlatformViewCreationParams.__proto__),
    id: dart.finalFieldType(core.int),
    viewType: dart.finalFieldType(core.String),
    onPlatformViewCreated: dart.finalFieldType(dart.fnType(dart.void, [core.int])),
    onFocusChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool]))
  }));
  var _surfaceFactory = dart.privateName(platform_view$, "PlatformViewLink._surfaceFactory");
  var _onCreatePlatformView = dart.privateName(platform_view$, "PlatformViewLink._onCreatePlatformView");
  var viewType$3 = dart.privateName(platform_view$, "PlatformViewLink.viewType");
  var _surfaceFactory$ = dart.privateName(platform_view$, "_surfaceFactory");
  var _onCreatePlatformView$ = dart.privateName(platform_view$, "_onCreatePlatformView");
  platform_view$.PlatformViewLink = class PlatformViewLink extends framework.StatefulWidget {
    get [_surfaceFactory$]() {
      return this[_surfaceFactory];
    }
    set [_surfaceFactory$](value) {
      super[_surfaceFactory$] = value;
    }
    get [_onCreatePlatformView$]() {
      return this[_onCreatePlatformView];
    }
    set [_onCreatePlatformView$](value) {
      super[_onCreatePlatformView$] = value;
    }
    get viewType() {
      return this[viewType$3];
    }
    set viewType(value) {
      super.viewType = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let surfaceFactory = opts && 'surfaceFactory' in opts ? opts.surfaceFactory : null;
      let onCreatePlatformView = opts && 'onCreatePlatformView' in opts ? opts.onCreatePlatformView : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      return new platform_view$.PlatformViewLink.new({key: key, surfaceFactory: surfaceFactory, onCreatePlatformView: onCreatePlatformView, viewType: viewType, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
    createState() {
      return new platform_view$._PlatformViewLinkState.new();
    }
  };
  (platform_view$.PlatformViewLink.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let surfaceFactory = opts && 'surfaceFactory' in opts ? opts.surfaceFactory : null;
    let onCreatePlatformView = opts && 'onCreatePlatformView' in opts ? opts.onCreatePlatformView : null;
    let viewType = opts && 'viewType' in opts ? opts.viewType : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[viewType$3] = viewType;
    if (!(surfaceFactory !== null)) dart.assertFailed(null, I[0], 839, 17, "surfaceFactory != null");
    if (!(onCreatePlatformView !== null)) dart.assertFailed(null, I[0], 840, 17, "onCreatePlatformView != null");
    if (!(viewType !== null)) dart.assertFailed(null, I[0], 841, 17, "viewType != null");
    this[_surfaceFactory] = surfaceFactory;
    this[_onCreatePlatformView] = onCreatePlatformView;
    platform_view$.PlatformViewLink.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$.PlatformViewLink.prototype;
  dart.addTypeTests(platform_view$.PlatformViewLink);
  dart.addTypeCaches(platform_view$.PlatformViewLink);
  dart.setMethodSignature(platform_view$.PlatformViewLink, () => ({
    __proto__: dart.getMethods(platform_view$.PlatformViewLink.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(platform_view$.PlatformViewLink, I[1]);
  dart.setFieldSignature(platform_view$.PlatformViewLink, () => ({
    __proto__: dart.getFields(platform_view$.PlatformViewLink.__proto__),
    [_surfaceFactory$]: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, platform_views.PlatformViewController])),
    [_onCreatePlatformView$]: dart.finalFieldType(dart.fnType(platform_views.PlatformViewController, [platform_view$.PlatformViewCreationParams])),
    viewType: dart.finalFieldType(core.String)
  }));
  var _platformViewCreated = dart.privateName(platform_view$, "_platformViewCreated");
  var _surface = dart.privateName(platform_view$, "_surface");
  var _handleFrameworkFocusChanged = dart.privateName(platform_view$, "_handleFrameworkFocusChanged");
  var _onPlatformViewCreated = dart.privateName(platform_view$, "_onPlatformViewCreated");
  var _handlePlatformFocusChanged = dart.privateName(platform_view$, "_handlePlatformFocusChanged");
  platform_view$._PlatformViewLinkState = class _PlatformViewLinkState extends framework.State$(platform_view$.PlatformViewLink) {
    build(context) {
      let t2, t1, t0;
      let controller = this[_controller];
      if (controller == null) {
        return C[17] || CT.C17;
      }
      if (!this[_platformViewCreated]) {
        return new platform_view$._PlatformViewPlaceHolder.new({onLayout: dart.fn(size => {
            if (controller.awaitingCreation) {
              controller.create({size: size});
            }
          }, T.SizeTovoid()), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
      }
      this[_surface] == null ? this[_surface] = (t0 = this.widget, t1 = context, t2 = controller, t0[_surfaceFactory$](t1, t2)) : null;
      return new focus_scope.Focus.new({focusNode: this[_focusNode], onFocusChange: dart.bind(this, _handleFrameworkFocusChanged), child: dart.nullCheck(this[_surface]), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
    }
    initState() {
      this[_focusNode] = new focus_manager.FocusNode.new({debugLabel: "PlatformView(id: " + dart.str(this[_id]) + ")"});
      this[_initialize]();
      super.initState();
    }
    didUpdateWidget(oldWidget) {
      let t0;
      platform_view$.PlatformViewLink.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.viewType !== oldWidget.viewType) {
        t0 = this[_controller];
        t0 == null ? null : t0.dispose();
        this[_surface] = null;
        this[_initialize]();
      }
    }
    [_initialize]() {
      let t1, t0;
      this[_id] = platform_views.platformViewsRegistry.getNextPlatformViewId();
      this[_controller] = (t0 = this.widget, t1 = new platform_view$.PlatformViewCreationParams.__({id: dart.nullCheck(this[_id]), viewType: this.widget.viewType, onPlatformViewCreated: dart.bind(this, _onPlatformViewCreated), onFocusChanged: dart.bind(this, _handlePlatformFocusChanged)}), t0[_onCreatePlatformView$](t1));
    }
    [_onPlatformViewCreated](id) {
      this.setState(dart.fn(() => {
        this[_platformViewCreated] = true;
      }, T.VoidTovoid()));
    }
    [_handleFrameworkFocusChanged](isFocused) {
      let t0;
      if (!isFocused) {
        t0 = this[_controller];
        t0 == null ? null : t0.clearFocus();
      }
      system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.setPlatformViewClient", new (T.IdentityMapOfString$dynamic()).from(["platformViewId", this[_id]]));
    }
    [_handlePlatformFocusChanged](isFocused) {
      if (isFocused) {
        dart.nullCheck(this[_focusNode]).requestFocus();
      }
    }
    dispose() {
      let t0;
      t0 = this[_controller];
      t0 == null ? null : t0.dispose();
      this[_controller] = null;
      super.dispose();
    }
    static ['_#new#tearOff']() {
      return new platform_view$._PlatformViewLinkState.new();
    }
  };
  (platform_view$._PlatformViewLinkState.new = function() {
    this[_id] = null;
    this[_controller] = null;
    this[_platformViewCreated] = false;
    this[_surface] = null;
    this[_focusNode] = null;
    platform_view$._PlatformViewLinkState.__proto__.new.call(this);
    ;
  }).prototype = platform_view$._PlatformViewLinkState.prototype;
  dart.addTypeTests(platform_view$._PlatformViewLinkState);
  dart.addTypeCaches(platform_view$._PlatformViewLinkState);
  dart.setMethodSignature(platform_view$._PlatformViewLinkState, () => ({
    __proto__: dart.getMethods(platform_view$._PlatformViewLinkState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_initialize]: dart.fnType(dart.void, []),
    [_onPlatformViewCreated]: dart.fnType(dart.void, [core.int]),
    [_handleFrameworkFocusChanged]: dart.fnType(dart.void, [core.bool]),
    [_handlePlatformFocusChanged]: dart.fnType(dart.void, [core.bool])
  }));
  dart.setLibraryUri(platform_view$._PlatformViewLinkState, I[1]);
  dart.setFieldSignature(platform_view$._PlatformViewLinkState, () => ({
    __proto__: dart.getFields(platform_view$._PlatformViewLinkState.__proto__),
    [_id]: dart.fieldType(dart.nullable(core.int)),
    [_controller]: dart.fieldType(dart.nullable(platform_views.PlatformViewController)),
    [_platformViewCreated]: dart.fieldType(core.bool),
    [_surface]: dart.fieldType(dart.nullable(framework.Widget)),
    [_focusNode]: dart.fieldType(dart.nullable(focus_manager.FocusNode))
  }));
  var controller$1 = dart.privateName(platform_view$, "PlatformViewSurface.controller");
  var gestureRecognizers$3 = dart.privateName(platform_view$, "PlatformViewSurface.gestureRecognizers");
  var hitTestBehavior$3 = dart.privateName(platform_view$, "PlatformViewSurface.hitTestBehavior");
  platform_view$.PlatformViewSurface = class PlatformViewSurface extends framework.LeafRenderObjectWidget {
    get controller() {
      return this[controller$1];
    }
    set controller(value) {
      super.controller = value;
    }
    get gestureRecognizers() {
      return this[gestureRecognizers$3];
    }
    set gestureRecognizers(value) {
      super.gestureRecognizers = value;
    }
    get hitTestBehavior() {
      return this[hitTestBehavior$3];
    }
    set hitTestBehavior(value) {
      super.hitTestBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      return new platform_view$.PlatformViewSurface.new({key: key, controller: controller, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers, $creationLocationd_0dea112b090073317d4: C[21] || CT.C21});
    }
    createRenderObject(context) {
      return new platform_view.PlatformViewRenderBox.new({controller: this.controller, gestureRecognizers: this.gestureRecognizers, hitTestBehavior: this.hitTestBehavior});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      platform_view.PlatformViewRenderBox.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.controller = this.controller;
        t0.hitTestBehavior = this.hitTestBehavior;
        t0.updateGestureRecognizers(this.gestureRecognizers);
        return t0;
      })();
    }
  };
  (platform_view$.PlatformViewSurface.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$1] = controller;
    this[hitTestBehavior$3] = hitTestBehavior;
    this[gestureRecognizers$3] = gestureRecognizers;
    if (!(controller !== null)) dart.assertFailed(null, I[0], 977, 15, "controller != null");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[0], 978, 15, "hitTestBehavior != null");
    if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[0], 979, 15, "gestureRecognizers != null");
    platform_view$.PlatformViewSurface.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$.PlatformViewSurface.prototype;
  dart.addTypeTests(platform_view$.PlatformViewSurface);
  dart.addTypeCaches(platform_view$.PlatformViewSurface);
  dart.setMethodSignature(platform_view$.PlatformViewSurface, () => ({
    __proto__: dart.getMethods(platform_view$.PlatformViewSurface.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(platform_view$.PlatformViewSurface, I[1]);
  dart.setFieldSignature(platform_view$.PlatformViewSurface, () => ({
    __proto__: dart.getFields(platform_view$.PlatformViewSurface.__proto__),
    controller: dart.finalFieldType(platform_views.PlatformViewController),
    gestureRecognizers: dart.finalFieldType(core.Set$(basic_types.Factory$(recognizer.OneSequenceGestureRecognizer))),
    hitTestBehavior: dart.finalFieldType(platform_view.PlatformViewHitTestBehavior)
  }));
  platform_view$.AndroidViewSurface = class AndroidViewSurface extends platform_view$.PlatformViewSurface {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
      let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
      return new platform_view$.AndroidViewSurface.new({key: key, controller: controller, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
    }
    createRenderObject(context) {
      let viewController = platform_views.AndroidViewController.as(this.controller);
      if (platform_views.ExpensiveAndroidViewController.is(viewController)) {
        let renderBox = platform_view.PlatformViewRenderBox.as(super.createRenderObject(context));
        viewController.pointTransformer = dart.fn(position => renderBox.globalToLocal(position), T.OffsetToOffset());
        return renderBox;
      }
      let renderBox = new platform_view.RenderAndroidView.new({viewController: viewController, gestureRecognizers: this.gestureRecognizers, hitTestBehavior: this.hitTestBehavior});
      viewController.pointTransformer = dart.fn(position => renderBox.globalToLocal(position), T.OffsetToOffset());
      return renderBox;
    }
  };
  (platform_view$.AndroidViewSurface.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let hitTestBehavior = opts && 'hitTestBehavior' in opts ? opts.hitTestBehavior : null;
    let gestureRecognizers = opts && 'gestureRecognizers' in opts ? opts.gestureRecognizers : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(controller !== null)) dart.assertFailed(null, I[0], 1067, 15, "controller != null");
    if (!(hitTestBehavior !== null)) dart.assertFailed(null, I[0], 1068, 15, "hitTestBehavior != null");
    if (!(gestureRecognizers !== null)) dart.assertFailed(null, I[0], 1069, 15, "gestureRecognizers != null");
    platform_view$.AndroidViewSurface.__proto__.new.call(this, {key: key, controller: controller, hitTestBehavior: hitTestBehavior, gestureRecognizers: gestureRecognizers, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$.AndroidViewSurface.prototype;
  dart.addTypeTests(platform_view$.AndroidViewSurface);
  dart.addTypeCaches(platform_view$.AndroidViewSurface);
  dart.setLibraryUri(platform_view$.AndroidViewSurface, I[1]);
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  platform_view$._PlatformViewPlaceholderBox = class _PlatformViewPlaceholderBox extends proxy_box.RenderConstrainedBox {
    static ['_#new#tearOff'](opts) {
      let onLayout = opts && 'onLayout' in opts ? opts.onLayout : null;
      return new platform_view$._PlatformViewPlaceholderBox.new({onLayout: onLayout});
    }
    performLayout() {
      let t0;
      super.performLayout();
      t0 = this.size;
      this.onLayout(t0);
    }
  };
  (platform_view$._PlatformViewPlaceholderBox.new = function(opts) {
    let onLayout = opts && 'onLayout' in opts ? opts.onLayout : null;
    this.onLayout = onLayout;
    platform_view$._PlatformViewPlaceholderBox.__proto__.new.call(this, {additionalConstraints: C[23] || CT.C23});
    ;
  }).prototype = platform_view$._PlatformViewPlaceholderBox.prototype;
  dart.addTypeTests(platform_view$._PlatformViewPlaceholderBox);
  dart.addTypeCaches(platform_view$._PlatformViewPlaceholderBox);
  dart.setLibraryUri(platform_view$._PlatformViewPlaceholderBox, I[1]);
  dart.setFieldSignature(platform_view$._PlatformViewPlaceholderBox, () => ({
    __proto__: dart.getFields(platform_view$._PlatformViewPlaceholderBox.__proto__),
    onLayout: dart.fieldType(dart.fnType(dart.void, [ui.Size]))
  }));
  var onLayout$ = dart.privateName(platform_view$, "_PlatformViewPlaceHolder.onLayout");
  platform_view$._PlatformViewPlaceHolder = class _PlatformViewPlaceHolder extends framework.SingleChildRenderObjectWidget {
    get onLayout() {
      return this[onLayout$];
    }
    set onLayout(value) {
      super.onLayout = value;
    }
    static ['_#new#tearOff'](opts) {
      let onLayout = opts && 'onLayout' in opts ? opts.onLayout : null;
      return new platform_view$._PlatformViewPlaceHolder.new({onLayout: onLayout, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
    }
    createRenderObject(context) {
      return new platform_view$._PlatformViewPlaceholderBox.new({onLayout: this.onLayout});
    }
    updateRenderObject(context, renderObject) {
      platform_view$._PlatformViewPlaceholderBox.as(renderObject);
      renderObject.onLayout = this.onLayout;
    }
  };
  (platform_view$._PlatformViewPlaceHolder.new = function(opts) {
    let onLayout = opts && 'onLayout' in opts ? opts.onLayout : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onLayout$] = onLayout;
    platform_view$._PlatformViewPlaceHolder.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = platform_view$._PlatformViewPlaceHolder.prototype;
  dart.addTypeTests(platform_view$._PlatformViewPlaceHolder);
  dart.addTypeCaches(platform_view$._PlatformViewPlaceHolder);
  dart.setMethodSignature(platform_view$._PlatformViewPlaceHolder, () => ({
    __proto__: dart.getMethods(platform_view$._PlatformViewPlaceHolder.__proto__),
    createRenderObject: dart.fnType(platform_view$._PlatformViewPlaceholderBox, [framework.BuildContext])
  }));
  dart.setLibraryUri(platform_view$._PlatformViewPlaceHolder, I[1]);
  dart.setFieldSignature(platform_view$._PlatformViewPlaceHolder, () => ({
    __proto__: dart.getFields(platform_view$._PlatformViewPlaceHolder.__proto__),
    onLayout: dart.finalFieldType(dart.fnType(dart.void, [ui.Size]))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/platform_view.dart", {
    "package:flutter/src/widgets/platform_view.dart": platform_view$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["platform_view.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/platform_view.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__platform_view: platform_view$
  };
}));

//# sourceMappingURL=platform_view.dart.lib.js.map