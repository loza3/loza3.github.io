define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/text_selection_toolbar_layout_delegate.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/shifted_box.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/cupertino/text_selection_toolbar_button.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__cupertino__text_selection_toolbar_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__text_selection_toolbar_layout_delegate$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__shifted_box$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__cupertino__text_selection_toolbar_button$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const text_selection = packages__flutter__src__widgets__title$46dart.src__widgets__text_selection;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const text_selection_toolbar_layout_delegate = packages__flutter__src__widgets__text_selection_toolbar_layout_delegate$46dart.src__widgets__text_selection_toolbar_layout_delegate;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const shifted_box = packages__flutter__src__rendering__shifted_box$46dart.src__rendering__shifted_box;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const text_selection_toolbar_button = packages__flutter__src__cupertino__text_selection_toolbar_button$46dart.src__cupertino__text_selection_toolbar_button;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var text_selection_toolbar = Object.create(dart.library);
  var $length = dartx.length;
  var $_equals = dartx._equals;
  var $isNotEmpty = dartx.isNotEmpty;
  var $containsKey = dartx.containsKey;
  var $values = dartx.values;
  var $forEach = dartx.forEach;
  var $containsValue = dartx.containsValue;
  var $contains = dartx.contains;
  var $remove = dartx.remove;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $where = dartx.where;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BuildContextAndOffsetAndbool__ToWidget: () => (T.BuildContextAndOffsetAndbool__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, ui.Offset, core.bool, framework.Widget])))(),
    LayerHandleOfClipPathLayer: () => (T.LayerHandleOfClipPathLayer = dart.constFn(layer.LayerHandle$(layer.ClipPathLayer)))(),
    PaintingContextAndOffsetTovoid: () => (T.PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$Element: () => (T.LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$Element = dart.constFn(_js_helper.LinkedMap$(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot, framework.Element)))(),
    _HashSetOfElement: () => (T._HashSetOfElement = dart.constFn(collection._HashSet$(framework.Element)))(),
    ElementN: () => (T.ElementN = dart.constFn(dart.nullable(framework.Element)))(),
    IndexedSlotOfElementN: () => (T.IndexedSlotOfElementN = dart.constFn(framework.IndexedSlot$(T.ElementN())))(),
    RenderBoxN: () => (T.RenderBoxN = dart.constFn(dart.nullable(box.RenderBox)))(),
    IndexedSlotOfElement: () => (T.IndexedSlotOfElement = dart.constFn(framework.IndexedSlot$(framework.Element)))(),
    ListOfElement: () => (T.ListOfElement = dart.constFn(core.List$(framework.Element)))(),
    ElementTobool: () => (T.ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))(),
    LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$RenderBox: () => (T.LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$RenderBox = dart.constFn(_js_helper.LinkedMap$(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot, box.RenderBox)))(),
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    doubleTodynamic: () => (T.doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))(),
    RenderObjectTovoid: () => (T.RenderObjectTovoid = dart.constFn(dart.fnType(dart.void, [object.RenderObject])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(text_selection_toolbar.CupertinoTextSelectionToolbar._defaultToolbarBuilder, T.BuildContextAndOffsetAndbool__ToWidget());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTextSelectionToolbar",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "rectangle",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286611584.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C[3] || CT.C3,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: C[4] || CT.C4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DecoratedBox",
        [_Location_column]: 14,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoTextSelectionToolbarShape",
        [_Location_column]: 12,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 8,
        [OffsetBase__dx]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoTextSelectionToolbarContent",
        [_Location_column]: 16,
        [_Location_line]: 134,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomSingleChildLayout",
        [_Location_column]: 14,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 121,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoTextSelectionToolbarShape",
        [_Location_column]: 9,
        [_Location_line]: 150,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10,
        [OffsetBase__dx]: 10
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294902015.0
      });
    },
    get C13() {
      return C[13] = dart.constList([C[14] || CT.C14, C[15] || CT.C15, C[15] || CT.C15, C[14] || CT.C14], ui.Color);
    },
    get C16() {
      return C[16] = dart.constList([0.25, 0.25, 0.75, 0.75], core.double);
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoTextSelectionToolbarContent",
        [_Location_column]: 9,
        [_Location_line]: 360,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 150000
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTextSelectionToolbarButton",
        [_Location_column]: 57,
        [_Location_line]: 443,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTextSelectionToolbarButton",
        [_Location_column]: 57,
        [_Location_line]: 448,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTextSelectionToolbarButton",
        [_Location_column]: 65,
        [_Location_line]: 452,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoTextSelectionToolbarItems",
        [_Location_column]: 14,
        [_Location_line]: 441,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeTransition",
        [_Location_column]: 74,
        [_Location_line]: 439,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoTextSelectionToolbarItems",
        [_Location_column]: 3,
        [_Location_line]: 465,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.prototype,
        [_Enum__name]: "backButton",
        [_Enum_index]: 0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.prototype,
        [_Enum__name]: "nextButton",
        [_Enum_index]: 1
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.prototype,
        [_Enum__name]: "nextButtonDisabled",
        [_Enum_index]: 2
      });
    },
    get C28() {
      return C[28] = dart.constList([C[25] || CT.C25, C[26] || CT.C26, C[27] || CT.C27], text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot);
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_NullWidget",
        [_Location_column]: 32,
        [_Location_line]: 1013,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: text_selection_toolbar._NullWidget.prototype,
        [Widget__location]: C[30] || CT.C30,
        [Widget_key]: null
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_NullWidget",
        [_Location_column]: 9,
        [_Location_line]: 1025,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 7,
        [OffsetBase__dx]: 14
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    }
  }, false);
  var C = Array(34).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/text_selection_toolbar.dart",
    "package:flutter/src/cupertino/text_selection_toolbar.dart"
  ];
  var anchorAbove$ = dart.privateName(text_selection_toolbar, "CupertinoTextSelectionToolbar.anchorAbove");
  var anchorBelow$ = dart.privateName(text_selection_toolbar, "CupertinoTextSelectionToolbar.anchorBelow");
  var children$ = dart.privateName(text_selection_toolbar, "CupertinoTextSelectionToolbar.children");
  var toolbarBuilder$ = dart.privateName(text_selection_toolbar, "CupertinoTextSelectionToolbar.toolbarBuilder");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  var BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  var BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  var BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  var BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  var BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  var BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  var Color_value = dart.privateName(ui, "Color.value");
  var BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  text_selection_toolbar.CupertinoTextSelectionToolbar = class CupertinoTextSelectionToolbar extends framework.StatelessWidget {
    get anchorAbove() {
      return this[anchorAbove$];
    }
    set anchorAbove(value) {
      super.anchorAbove = value;
    }
    get anchorBelow() {
      return this[anchorBelow$];
    }
    set anchorBelow(value) {
      super.anchorBelow = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get toolbarBuilder() {
      return this[toolbarBuilder$];
    }
    set toolbarBuilder(value) {
      super.toolbarBuilder = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let anchorAbove = opts && 'anchorAbove' in opts ? opts.anchorAbove : null;
      let anchorBelow = opts && 'anchorBelow' in opts ? opts.anchorBelow : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let toolbarBuilder = opts && 'toolbarBuilder' in opts ? opts.toolbarBuilder : C[0] || CT.C0;
      return new text_selection_toolbar.CupertinoTextSelectionToolbar.new({key: key, anchorAbove: anchorAbove, anchorBelow: anchorBelow, children: children, toolbarBuilder: toolbarBuilder, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static _defaultToolbarBuilder(context, anchor, isAbove, child) {
      return new text_selection_toolbar._CupertinoTextSelectionToolbarShape.new({anchor: anchor, isAbove: isAbove, child: new container.DecoratedBox.new({decoration: C[2] || CT.C2, child: child, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
    build(context) {
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[0], 109, 12, "debugCheckHasMediaQuery(context)");
      let mediaQuery = media_query.MediaQuery.of(context);
      let paddingAbove = mediaQuery.padding.top + 8;
      let toolbarHeightNeeded = paddingAbove + 8 + 43;
      let fitsAbove = this.anchorAbove.dy >= toolbarHeightNeeded;
      let contentPaddingAdjustment = C[7] || CT.C7;
      let localAdjustment = new ui.Offset.new(8, paddingAbove);
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(8, paddingAbove, 8, 8), child: new basic.CustomSingleChildLayout.new({delegate: new text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.new({anchorAbove: this.anchorAbove['-'](localAdjustment)['-'](contentPaddingAdjustment), anchorBelow: this.anchorBelow['-'](localAdjustment)['+'](contentPaddingAdjustment), fitsAbove: fitsAbove}), child: new text_selection_toolbar._CupertinoTextSelectionToolbarContent.new({anchor: fitsAbove ? this.anchorAbove : this.anchorBelow, isAbove: fitsAbove, toolbarBuilder: this.toolbarBuilder, children: this.children, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
  };
  (text_selection_toolbar.CupertinoTextSelectionToolbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let anchorAbove = opts && 'anchorAbove' in opts ? opts.anchorAbove : null;
    let anchorBelow = opts && 'anchorBelow' in opts ? opts.anchorBelow : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let toolbarBuilder = opts && 'toolbarBuilder' in opts ? opts.toolbarBuilder : C[0] || CT.C0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[anchorAbove$] = anchorAbove;
    this[anchorBelow$] = anchorBelow;
    this[children$] = children;
    this[toolbarBuilder$] = toolbarBuilder;
    if (!(children[$length] > 0)) dart.assertFailed(null, I[0], 73, 15, "children.length > 0");
    text_selection_toolbar.CupertinoTextSelectionToolbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar.CupertinoTextSelectionToolbar.prototype;
  dart.addTypeTests(text_selection_toolbar.CupertinoTextSelectionToolbar);
  dart.addTypeCaches(text_selection_toolbar.CupertinoTextSelectionToolbar);
  dart.setMethodSignature(text_selection_toolbar.CupertinoTextSelectionToolbar, () => ({
    __proto__: dart.getMethods(text_selection_toolbar.CupertinoTextSelectionToolbar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(text_selection_toolbar.CupertinoTextSelectionToolbar, () => ['_defaultToolbarBuilder']);
  dart.setLibraryUri(text_selection_toolbar.CupertinoTextSelectionToolbar, I[1]);
  dart.setFieldSignature(text_selection_toolbar.CupertinoTextSelectionToolbar, () => ({
    __proto__: dart.getFields(text_selection_toolbar.CupertinoTextSelectionToolbar.__proto__),
    anchorAbove: dart.finalFieldType(ui.Offset),
    anchorBelow: dart.finalFieldType(ui.Offset),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    toolbarBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, ui.Offset, core.bool, framework.Widget]))
  }));
  var _anchor = dart.privateName(text_selection_toolbar, "_CupertinoTextSelectionToolbarShape._anchor");
  var _isAbove = dart.privateName(text_selection_toolbar, "_CupertinoTextSelectionToolbarShape._isAbove");
  var _anchor$ = dart.privateName(text_selection_toolbar, "_anchor");
  var _isAbove$ = dart.privateName(text_selection_toolbar, "_isAbove");
  text_selection_toolbar._CupertinoTextSelectionToolbarShape = class _CupertinoTextSelectionToolbarShape extends framework.SingleChildRenderObjectWidget {
    get [_anchor$]() {
      return this[_anchor];
    }
    set [_anchor$](value) {
      super[_anchor$] = value;
    }
    get [_isAbove$]() {
      return this[_isAbove];
    }
    set [_isAbove$](value) {
      super[_isAbove$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let anchor = opts && 'anchor' in opts ? opts.anchor : null;
      let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new text_selection_toolbar._CupertinoTextSelectionToolbarShape.new({anchor: anchor, isAbove: isAbove, child: child, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    createRenderObject(context) {
      return new text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.new(this[_anchor$], this[_isAbove$], null);
    }
    updateRenderObject(context, renderObject) {
      let t0;
      text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.anchor = this[_anchor$];
        t0.isAbove = this[_isAbove$];
        return t0;
      })();
    }
  };
  (text_selection_toolbar._CupertinoTextSelectionToolbarShape.new = function(opts) {
    let anchor = opts && 'anchor' in opts ? opts.anchor : null;
    let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_anchor] = anchor;
    this[_isAbove] = isAbove;
    text_selection_toolbar._CupertinoTextSelectionToolbarShape.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._CupertinoTextSelectionToolbarShape.prototype;
  dart.addTypeTests(text_selection_toolbar._CupertinoTextSelectionToolbarShape);
  dart.addTypeCaches(text_selection_toolbar._CupertinoTextSelectionToolbarShape);
  dart.setMethodSignature(text_selection_toolbar._CupertinoTextSelectionToolbarShape, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._CupertinoTextSelectionToolbarShape.__proto__),
    createRenderObject: dart.fnType(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection_toolbar._CupertinoTextSelectionToolbarShape, I[1]);
  dart.setFieldSignature(text_selection_toolbar._CupertinoTextSelectionToolbarShape, () => ({
    __proto__: dart.getFields(text_selection_toolbar._CupertinoTextSelectionToolbarShape.__proto__),
    [_anchor$]: dart.finalFieldType(ui.Offset),
    [_isAbove$]: dart.finalFieldType(core.bool)
  }));
  var _heightConstraint = dart.privateName(text_selection_toolbar, "_heightConstraint");
  var _clipPathLayer = dart.privateName(text_selection_toolbar, "_clipPathLayer");
  var _debugPaint = dart.privateName(text_selection_toolbar, "_debugPaint");
  var _clipPath = dart.privateName(text_selection_toolbar, "_clipPath");
  text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape = class _RenderCupertinoTextSelectionToolbarShape extends shifted_box.RenderShiftedBox {
    static ['_#new#tearOff'](_anchor, _isAbove, child) {
      return new text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.new(_anchor, _isAbove, child);
    }
    get isRepaintBoundary() {
      return true;
    }
    get anchor() {
      return this[_anchor$];
    }
    set anchor(value) {
      if (value._equals(this[_anchor$])) {
        return;
      }
      this[_anchor$] = value;
      this.markNeedsLayout();
    }
    get isAbove() {
      return this[_isAbove$];
    }
    set isAbove(value) {
      if (this[_isAbove$] === value) {
        return;
      }
      this[_isAbove$] = value;
      this.markNeedsLayout();
    }
    performLayout() {
      if (this.child == null) {
        return;
      }
      let enforcedConstraint = this.constraints.loosen();
      dart.nullCheck(this.child).layout(this[_heightConstraint].enforce(enforcedConstraint), {parentUsesSize: true});
      let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      childParentData.offset = new ui.Offset.new(0.0, this[_isAbove$] ? -text_selection_toolbar._kToolbarArrowSize.height : 0.0);
      this.size = new ui.Size.new(dart.nullCheck(this.child).size.width, dart.nullCheck(this.child).size.height - text_selection_toolbar._kToolbarArrowSize.height);
    }
    [_clipPath]() {
      let t0, t0$;
      let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      let rrect = (t0 = ui.Path.new(), (() => {
        t0.addRRect(new ui.RRect.fromRectAndRadius(new ui.Offset.new(0.0, text_selection_toolbar._kToolbarArrowSize.height)['&'](new ui.Size.new(dart.nullCheck(this.child).size.width, dart.nullCheck(this.child).size.height - text_selection_toolbar._kToolbarArrowSize.height * 2)), text_selection_toolbar._kToolbarBorderRadius));
        return t0;
      })());
      let localAnchor = this.globalToLocal(this[_anchor$]);
      let centerX = childParentData.offset.dx + dart.nullCheck(this.child).size.width / 2;
      let arrowXOffsetFromCenter = localAnchor.dx - centerX;
      let arrowTipX = dart.nullCheck(this.child).size.width / 2 + arrowXOffsetFromCenter;
      let arrowBaseY = this[_isAbove$] ? dart.nullCheck(this.child).size.height - text_selection_toolbar._kToolbarArrowSize.height : text_selection_toolbar._kToolbarArrowSize.height;
      let arrowTipY = this[_isAbove$] ? dart.nullCheck(this.child).size.height : 0.0;
      let arrow = (t0$ = ui.Path.new(), (() => {
        t0$.moveTo(arrowTipX, arrowTipY);
        t0$.lineTo(arrowTipX - text_selection_toolbar._kToolbarArrowSize.width / 2, arrowBaseY);
        t0$.lineTo(arrowTipX + text_selection_toolbar._kToolbarArrowSize.width / 2, arrowBaseY);
        t0$.close();
        return t0$;
      })());
      return ui.Path.combine(ui.PathOperation.union, rrect, arrow);
    }
    paint(context, offset) {
      if (this.child == null) {
        return;
      }
      let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      this[_clipPathLayer].layer = context.pushClipPath(this.needsCompositing, offset['+'](childParentData.offset), ui.Offset.zero['&'](dart.nullCheck(this.child).size), this[_clipPath](), dart.fn((innerContext, innerOffset) => innerContext.paintChild(dart.nullCheck(this.child), innerOffset), T.PaintingContextAndOffsetTovoid()), {oldLayer: this[_clipPathLayer].layer});
    }
    dispose() {
      this[_clipPathLayer].layer = null;
      super.dispose();
    }
    debugPaintSize(context, offset) {
      if (!dart.fn(() => {
        let t0;
        if (this.child == null) {
          return true;
        }
        this[_debugPaint] == null ? this[_debugPaint] = (t0 = ui.Paint.new(), (() => {
          t0.shader = ui.Gradient.linear(ui.Offset.zero, C[12] || CT.C12, C[13] || CT.C13, C[16] || CT.C16, ui.TileMode.repeated);
          t0.strokeWidth = 2.0;
          t0.style = ui.PaintingStyle.stroke;
          return t0;
        })()) : null;
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        context.canvas.drawPath(this[_clipPath]().shift(offset['+'](childParentData.offset)), dart.nullCheck(this[_debugPaint]));
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 313, 12, "() {\n      if (child == null) {\n        return true;\n      }\n\n      _debugPaint ??= Paint()\n        ..shader = ui.Gradient.linear(\n          Offset.zero,\n          const Offset(10.0, 10.0),\n          const <Color>[Color(0x00000000), Color(0xFFFF00FF), Color(0xFFFF00FF), Color(0x00000000)],\n          const <double>[0.25, 0.25, 0.75, 0.75],\n          TileMode.repeated,\n        )\n        ..strokeWidth = 2.0\n        ..style = PaintingStyle.stroke;\n\n      final BoxParentData childParentData = child!.parentData! as BoxParentData;\n      context.canvas.drawPath(_clipPath().shift(offset + childParentData.offset), _debugPaint!);\n      return true;\n    }()");
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      let hitBox = new ui.Rect.fromLTWH(childParentData.offset.dx, childParentData.offset.dy + text_selection_toolbar._kToolbarArrowSize.height, dart.nullCheck(this.child).size.width, dart.nullCheck(this.child).size.height - text_selection_toolbar._kToolbarArrowSize.height * 2);
      if (!hitBox.contains(position)) {
        return false;
      }
      return super.hitTestChildren(result, {position: position});
    }
  };
  (text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.new = function(_anchor, _isAbove, child) {
    this[_heightConstraint] = new box.BoxConstraints.tightFor({height: 43 + text_selection_toolbar._kToolbarArrowSize.height});
    this[_clipPathLayer] = new (T.LayerHandleOfClipPathLayer()).new();
    this[_debugPaint] = null;
    this[_anchor$] = _anchor;
    this[_isAbove$] = _isAbove;
    text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.__proto__.new.call(this, child);
    ;
  }).prototype = text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.prototype;
  dart.addTypeTests(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape);
  dart.addTypeCaches(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape);
  dart.setMethodSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.__proto__),
    [_clipPath]: dart.fnType(ui.Path, [])
  }));
  dart.setGetterSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape, () => ({
    __proto__: dart.getGetters(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.__proto__),
    anchor: ui.Offset,
    isAbove: core.bool
  }));
  dart.setSetterSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape, () => ({
    __proto__: dart.getSetters(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.__proto__),
    anchor: ui.Offset,
    isAbove: core.bool
  }));
  dart.setLibraryUri(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape, I[1]);
  dart.setFieldSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape, () => ({
    __proto__: dart.getFields(text_selection_toolbar._RenderCupertinoTextSelectionToolbarShape.__proto__),
    [_anchor$]: dart.fieldType(ui.Offset),
    [_isAbove$]: dart.fieldType(core.bool),
    [_heightConstraint]: dart.finalFieldType(box.BoxConstraints),
    [_clipPathLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipPathLayer)),
    [_debugPaint]: dart.fieldType(dart.nullable(ui.Paint))
  }));
  var anchor$ = dart.privateName(text_selection_toolbar, "_CupertinoTextSelectionToolbarContent.anchor");
  var children$0 = dart.privateName(text_selection_toolbar, "_CupertinoTextSelectionToolbarContent.children");
  var isAbove$ = dart.privateName(text_selection_toolbar, "_CupertinoTextSelectionToolbarContent.isAbove");
  var toolbarBuilder$0 = dart.privateName(text_selection_toolbar, "_CupertinoTextSelectionToolbarContent.toolbarBuilder");
  text_selection_toolbar._CupertinoTextSelectionToolbarContent = class _CupertinoTextSelectionToolbarContent extends framework.StatefulWidget {
    get anchor() {
      return this[anchor$];
    }
    set anchor(value) {
      super.anchor = value;
    }
    get children() {
      return this[children$0];
    }
    set children(value) {
      super.children = value;
    }
    get isAbove() {
      return this[isAbove$];
    }
    set isAbove(value) {
      super.isAbove = value;
    }
    get toolbarBuilder() {
      return this[toolbarBuilder$0];
    }
    set toolbarBuilder(value) {
      super.toolbarBuilder = value;
    }
    static ['_#new#tearOff'](opts) {
      let anchor = opts && 'anchor' in opts ? opts.anchor : null;
      let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
      let toolbarBuilder = opts && 'toolbarBuilder' in opts ? opts.toolbarBuilder : null;
      let children = opts && 'children' in opts ? opts.children : null;
      return new text_selection_toolbar._CupertinoTextSelectionToolbarContent.new({anchor: anchor, isAbove: isAbove, toolbarBuilder: toolbarBuilder, children: children, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
    }
    createState() {
      return new text_selection_toolbar._CupertinoTextSelectionToolbarContentState.new();
    }
  };
  (text_selection_toolbar._CupertinoTextSelectionToolbarContent.new = function(opts) {
    let anchor = opts && 'anchor' in opts ? opts.anchor : null;
    let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
    let toolbarBuilder = opts && 'toolbarBuilder' in opts ? opts.toolbarBuilder : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[anchor$] = anchor;
    this[isAbove$] = isAbove;
    this[toolbarBuilder$0] = toolbarBuilder;
    this[children$0] = children;
    if (!(children !== null)) dart.assertFailed(null, I[0], 365, 15, "children != null");
    if (!(children[$length] > 0)) dart.assertFailed(null, I[0], 366, 15, "children.length > 0");
    text_selection_toolbar._CupertinoTextSelectionToolbarContent.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._CupertinoTextSelectionToolbarContent.prototype;
  dart.addTypeTests(text_selection_toolbar._CupertinoTextSelectionToolbarContent);
  dart.addTypeCaches(text_selection_toolbar._CupertinoTextSelectionToolbarContent);
  dart.setMethodSignature(text_selection_toolbar._CupertinoTextSelectionToolbarContent, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._CupertinoTextSelectionToolbarContent.__proto__),
    createState: dart.fnType(text_selection_toolbar._CupertinoTextSelectionToolbarContentState, [])
  }));
  dart.setLibraryUri(text_selection_toolbar._CupertinoTextSelectionToolbarContent, I[1]);
  dart.setFieldSignature(text_selection_toolbar._CupertinoTextSelectionToolbarContent, () => ({
    __proto__: dart.getFields(text_selection_toolbar._CupertinoTextSelectionToolbarContent.__proto__),
    anchor: dart.finalFieldType(ui.Offset),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    isAbove: dart.finalFieldType(core.bool),
    toolbarBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, ui.Offset, core.bool, framework.Widget]))
  }));
  var ___CupertinoTextSelectionToolbarContentState__controller = dart.privateName(text_selection_toolbar, "_#_CupertinoTextSelectionToolbarContentState#_controller");
  var _page = dart.privateName(text_selection_toolbar, "_page");
  var _nextPage = dart.privateName(text_selection_toolbar, "_nextPage");
  var _controller = dart.privateName(text_selection_toolbar, "_controller");
  var _statusListener = dart.privateName(text_selection_toolbar, "_statusListener");
  var _handleNextPage = dart.privateName(text_selection_toolbar, "_handleNextPage");
  var _handlePreviousPage = dart.privateName(text_selection_toolbar, "_handlePreviousPage");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(text_selection_toolbar._CupertinoTextSelectionToolbarContent) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(text_selection_toolbar._CupertinoTextSelectionToolbarContent)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(text_selection_toolbar._CupertinoTextSelectionToolbarContent));
  text_selection_toolbar._CupertinoTextSelectionToolbarContentState = class _CupertinoTextSelectionToolbarContentState extends State_TickerProviderStateMixin$36 {
    get [_controller]() {
      let t0;
      t0 = this[___CupertinoTextSelectionToolbarContentState__controller];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t0;
    }
    set [_controller](library$32package$58flutter$47src$47cupertino$47text_selection_toolbar$46dart$58$58_controller$35param) {
      this[___CupertinoTextSelectionToolbarContentState__controller] = library$32package$58flutter$47src$47cupertino$47text_selection_toolbar$46dart$58$58_controller$35param;
    }
    [_handleNextPage]() {
      this[_controller].reverse();
      this[_controller].addStatusListener(dart.bind(this, _statusListener));
      this[_nextPage] = this[_page] + 1;
    }
    [_handlePreviousPage]() {
      this[_controller].reverse();
      this[_controller].addStatusListener(dart.bind(this, _statusListener));
      this[_nextPage] = this[_page] - 1;
    }
    [_statusListener](status) {
      if (status !== animation.AnimationStatus.dismissed) {
        return;
      }
      this.setState(dart.fn(() => {
        this[_page] = dart.nullCheck(this[_nextPage]);
        this[_nextPage] = null;
      }, T.VoidTovoid()));
      this[_controller].forward();
      this[_controller].removeStatusListener(dart.bind(this, _statusListener));
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({value: 1.0, vsync: this, duration: C[18] || CT.C18});
    }
    didUpdateWidget(oldWidget) {
      text_selection_toolbar._CupertinoTextSelectionToolbarContent.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!this.widget.children[$_equals](oldWidget.children)) {
        this[_page] = 0;
        this[_nextPage] = null;
        this[_controller].forward();
        this[_controller].removeStatusListener(dart.bind(this, _statusListener));
      }
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let t4, t3, t2, t1, t0;
      t0 = this.widget;
      t1 = context;
      t2 = this.widget.anchor;
      t3 = this.widget.isAbove;
      t4 = new transitions.FadeTransition.new({opacity: this[_controller], child: new text_selection_toolbar._CupertinoTextSelectionToolbarItems.new({page: this[_page], backButton: new text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.text({onPressed: dart.bind(this, _handlePreviousPage), text: "◀", $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), dividerWidth: 1.0 / media_query.MediaQuery.of(context).devicePixelRatio, nextButton: new text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.text({onPressed: dart.bind(this, _handleNextPage), text: "▶", $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), nextButtonDisabled: new text_selection_toolbar_button.CupertinoTextSelectionToolbarButton.text({text: "▶", $creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), children: this.widget.children, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23});
      return t0.toolbarBuilder(t1, t2, t3, t4);
    }
    static ['_#new#tearOff']() {
      return new text_selection_toolbar._CupertinoTextSelectionToolbarContentState.new();
    }
  };
  (text_selection_toolbar._CupertinoTextSelectionToolbarContentState.new = function() {
    this[___CupertinoTextSelectionToolbarContentState__controller] = null;
    this[_page] = 0;
    this[_nextPage] = null;
    text_selection_toolbar._CupertinoTextSelectionToolbarContentState.__proto__.new.call(this);
    ;
  }).prototype = text_selection_toolbar._CupertinoTextSelectionToolbarContentState.prototype;
  dart.addTypeTests(text_selection_toolbar._CupertinoTextSelectionToolbarContentState);
  dart.addTypeCaches(text_selection_toolbar._CupertinoTextSelectionToolbarContentState);
  dart.setMethodSignature(text_selection_toolbar._CupertinoTextSelectionToolbarContentState, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._CupertinoTextSelectionToolbarContentState.__proto__),
    [_handleNextPage]: dart.fnType(dart.void, []),
    [_handlePreviousPage]: dart.fnType(dart.void, []),
    [_statusListener]: dart.fnType(dart.void, [animation.AnimationStatus]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(text_selection_toolbar._CupertinoTextSelectionToolbarContentState, () => ({
    __proto__: dart.getGetters(text_selection_toolbar._CupertinoTextSelectionToolbarContentState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(text_selection_toolbar._CupertinoTextSelectionToolbarContentState, () => ({
    __proto__: dart.getSetters(text_selection_toolbar._CupertinoTextSelectionToolbarContentState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(text_selection_toolbar._CupertinoTextSelectionToolbarContentState, I[1]);
  dart.setFieldSignature(text_selection_toolbar._CupertinoTextSelectionToolbarContentState, () => ({
    __proto__: dart.getFields(text_selection_toolbar._CupertinoTextSelectionToolbarContentState.__proto__),
    [___CupertinoTextSelectionToolbarContentState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [_page]: dart.fieldType(core.int),
    [_nextPage]: dart.fieldType(dart.nullable(core.int))
  }));
  text_selection_toolbar._CupertinoTextSelectionToolbarItems = class _CupertinoTextSelectionToolbarItems extends framework.RenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let page = opts && 'page' in opts ? opts.page : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let backButton = opts && 'backButton' in opts ? opts.backButton : null;
      let dividerWidth = opts && 'dividerWidth' in opts ? opts.dividerWidth : null;
      let nextButton = opts && 'nextButton' in opts ? opts.nextButton : null;
      let nextButtonDisabled = opts && 'nextButtonDisabled' in opts ? opts.nextButtonDisabled : null;
      return new text_selection_toolbar._CupertinoTextSelectionToolbarItems.new({page: page, children: children, backButton: backButton, dividerWidth: dividerWidth, nextButton: nextButton, nextButtonDisabled: nextButtonDisabled, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
    }
    createRenderObject(context) {
      return new text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.new({dividerWidth: this.dividerWidth, page: this.page});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.page = this.page;
        t0.dividerWidth = this.dividerWidth;
        return t0;
      })();
    }
    createElement() {
      return new text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.new(this);
    }
  };
  (text_selection_toolbar._CupertinoTextSelectionToolbarItems.new = function(opts) {
    let page = opts && 'page' in opts ? opts.page : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let backButton = opts && 'backButton' in opts ? opts.backButton : null;
    let dividerWidth = opts && 'dividerWidth' in opts ? opts.dividerWidth : null;
    let nextButton = opts && 'nextButton' in opts ? opts.nextButton : null;
    let nextButtonDisabled = opts && 'nextButtonDisabled' in opts ? opts.nextButtonDisabled : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.page = page;
    this.children = children;
    this.backButton = backButton;
    this.dividerWidth = dividerWidth;
    this.nextButton = nextButton;
    this.nextButtonDisabled = nextButtonDisabled;
    if (!(children !== null)) dart.assertFailed(null, I[0], 472, 15, "children != null");
    if (!children[$isNotEmpty]) dart.assertFailed(null, I[0], 473, 15, "children.isNotEmpty");
    if (!(backButton !== null)) dart.assertFailed(null, I[0], 474, 15, "backButton != null");
    if (!(dividerWidth !== null)) dart.assertFailed(null, I[0], 475, 15, "dividerWidth != null");
    if (!(nextButton !== null)) dart.assertFailed(null, I[0], 476, 15, "nextButton != null");
    if (!(nextButtonDisabled !== null)) dart.assertFailed(null, I[0], 477, 15, "nextButtonDisabled != null");
    if (!(page !== null)) dart.assertFailed(null, I[0], 478, 15, "page != null");
    text_selection_toolbar._CupertinoTextSelectionToolbarItems.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._CupertinoTextSelectionToolbarItems.prototype;
  dart.addTypeTests(text_selection_toolbar._CupertinoTextSelectionToolbarItems);
  dart.addTypeCaches(text_selection_toolbar._CupertinoTextSelectionToolbarItems);
  dart.setMethodSignature(text_selection_toolbar._CupertinoTextSelectionToolbarItems, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._CupertinoTextSelectionToolbarItems.__proto__),
    createRenderObject: dart.fnType(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems, [framework.BuildContext]),
    createElement: dart.fnType(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement, [])
  }));
  dart.setLibraryUri(text_selection_toolbar._CupertinoTextSelectionToolbarItems, I[1]);
  dart.setFieldSignature(text_selection_toolbar._CupertinoTextSelectionToolbarItems, () => ({
    __proto__: dart.getFields(text_selection_toolbar._CupertinoTextSelectionToolbarItems.__proto__),
    backButton: dart.finalFieldType(framework.Widget),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    dividerWidth: dart.finalFieldType(core.double),
    nextButton: dart.finalFieldType(framework.Widget),
    nextButtonDisabled: dart.finalFieldType(framework.Widget),
    page: dart.finalFieldType(core.int)
  }));
  var ___CupertinoTextSelectionToolbarItemsElement__children = dart.privateName(text_selection_toolbar, "_#_CupertinoTextSelectionToolbarItemsElement#_children");
  var _forgottenChildren = dart.privateName(text_selection_toolbar, "_forgottenChildren");
  var _children = dart.privateName(text_selection_toolbar, "_children");
  var _updateRenderObject = dart.privateName(text_selection_toolbar, "_updateRenderObject");
  var _mountChild = dart.privateName(text_selection_toolbar, "_mountChild");
  text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement = class _CupertinoTextSelectionToolbarItemsElement extends framework.RenderObjectElement {
    static ['_#new#tearOff'](widget) {
      return new text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.new(widget);
    }
    get [_children]() {
      let t0;
      t0 = this[___CupertinoTextSelectionToolbarItemsElement__children];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_children")) : t0;
    }
    set [_children](library$32package$58flutter$47src$47cupertino$47text_selection_toolbar$46dart$58$58_children$35param) {
      this[___CupertinoTextSelectionToolbarItemsElement__children] = library$32package$58flutter$47src$47cupertino$47text_selection_toolbar$46dart$58$58_children$35param;
    }
    get renderObject() {
      return text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.as(super.renderObject);
    }
    [_updateRenderObject](child, slot) {
      switch (slot) {
        case C[25] || CT.C25:
          {
            this.renderObject.backButton = child;
            break;
          }
        case C[26] || CT.C26:
          {
            this.renderObject.nextButton = child;
            break;
          }
        case C[27] || CT.C27:
          {
            this.renderObject.nextButtonDisabled = child;
            break;
          }
      }
    }
    insertRenderObjectChild(child, slot) {
      let t0;
      object.RenderObject.as(child);
      if (text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.is(slot)) {
        if (!box.RenderBox.is(child)) dart.assertFailed(null, I[0], 539, 14, "child is RenderBox");
        this[_updateRenderObject](box.RenderBox.as(child), slot);
        if (!this.renderObject.slottedChildren[$containsKey](slot)) dart.assertFailed(null, I[0], 541, 14, "renderObject.slottedChildren.containsKey(slot)");
        return;
      }
      if (T.IndexedSlotOfElementN().is(slot)) {
        if (!this.renderObject.debugValidateChild(child)) dart.assertFailed(null, I[0], 545, 14, "renderObject.debugValidateChild(child)");
        this.renderObject.insert(box.RenderBox.as(child), {after: T.RenderBoxN().as((t0 = slot.value, t0 == null ? null : t0.renderObject))});
        return;
      }
      if (!false) dart.assertFailed("slot must be _CupertinoTextSelectionToolbarItemsSlot or IndexedSlot", I[0], 549, 12, "false");
    }
    moveRenderObjectChild(child, oldSlot, newSlot) {
      object.RenderObject.as(child);
      T.IndexedSlotOfElement().as(oldSlot);
      T.IndexedSlotOfElement().as(newSlot);
      if (!dart.equals(child.parent, this.renderObject)) dart.assertFailed(null, I[0], 555, 12, "child.parent == renderObject");
      this.renderObject.move(box.RenderBox.as(child), {after: T.RenderBoxN().as(newSlot.value.renderObject)});
    }
    static _shouldPaint(child) {
      return text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(child.renderObject).parentData)).shouldPaint;
    }
    removeRenderObjectChild(child, slot) {
      object.RenderObject.as(child);
      if (text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.is(slot)) {
        if (!box.RenderBox.is(child)) dart.assertFailed(null, I[0], 567, 14, "child is RenderBox");
        if (!this.renderObject.slottedChildren[$containsKey](slot)) dart.assertFailed(null, I[0], 568, 14, "renderObject.slottedChildren.containsKey(slot)");
        this[_updateRenderObject](null, slot);
        if (!!this.renderObject.slottedChildren[$containsKey](slot)) dart.assertFailed(null, I[0], 570, 14, "!renderObject.slottedChildren.containsKey(slot)");
        return;
      }
      if (!T.IndexedSlotOfElementN().is(slot)) dart.assertFailed(null, I[0], 575, 12, "slot is IndexedSlot");
      if (!dart.equals(child.parent, this.renderObject)) dart.assertFailed(null, I[0], 576, 12, "child.parent == renderObject");
      this.renderObject.remove(box.RenderBox.as(child));
    }
    visitChildren(visitor) {
      this.slotToChild[$values][$forEach](visitor);
      for (let child of this[_children]) {
        if (!this[_forgottenChildren].contains(child)) {
          visitor(child);
        }
      }
    }
    forgetChild(child) {
      if (!(this.slotToChild[$containsValue](child) || this[_children][$contains](child))) dart.assertFailed(null, I[0], 592, 12, "slotToChild.containsValue(child) || _children.contains(child)");
      if (!!this[_forgottenChildren].contains(child)) dart.assertFailed(null, I[0], 593, 12, "!_forgottenChildren.contains(child)");
      if (this.slotToChild[$containsKey](child.slot)) {
        let slot = text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.as(dart.nullCheck(child.slot));
        this.slotToChild[$remove](slot);
      } else {
        this[_forgottenChildren].add(child);
      }
      super.forgetChild(child);
    }
    [_mountChild](widget, slot) {
      let oldChild = this.slotToChild[$_get](slot);
      let newChild = this.updateChild(oldChild, widget, slot);
      if (oldChild != null) {
        this.slotToChild[$remove](slot);
      }
      if (newChild != null) {
        this.slotToChild[$_set](slot, newChild);
      }
    }
    mount(parent, newSlot) {
      super.mount(parent, newSlot);
      let toolbarItems = text_selection_toolbar._CupertinoTextSelectionToolbarItems.as(this.widget);
      this[_mountChild](toolbarItems.backButton, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.backButton);
      this[_mountChild](toolbarItems.nextButton, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.nextButton);
      this[_mountChild](toolbarItems.nextButtonDisabled, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled);
      this[_children] = T.ListOfElement().filled(toolbarItems.children[$length], text_selection_toolbar._NullElement.instance);
      let previousChild = null;
      for (let i = 0; i < this[_children][$length]; i = i + 1) {
        let newChild = this.inflateWidget(toolbarItems.children[$_get](i), new (T.IndexedSlotOfElementN()).new(i, previousChild));
        this[_children][$_set](i, newChild);
        previousChild = newChild;
      }
    }
    debugVisitOnstageChildren(visitor) {
      for (let child of this.slotToChild[$values]) {
        if (text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement._shouldPaint(child) && !this[_forgottenChildren].contains(child)) {
          visitor(child);
        }
      }
      this[_children][$where](dart.fn(child => !this[_forgottenChildren].contains(child) && text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement._shouldPaint(child), T.ElementTobool()))[$forEach](visitor);
    }
    update(newWidget) {
      text_selection_toolbar._CupertinoTextSelectionToolbarItems.as(newWidget);
      super.update(newWidget);
      if (!this.widget._equals(newWidget)) dart.assertFailed(null, I[0], 652, 12, "widget == newWidget");
      let toolbarItems = text_selection_toolbar._CupertinoTextSelectionToolbarItems.as(this.widget);
      this[_mountChild](toolbarItems.backButton, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.backButton);
      this[_mountChild](toolbarItems.nextButton, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.nextButton);
      this[_mountChild](toolbarItems.nextButtonDisabled, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled);
      this[_children] = this.updateChildren(this[_children], toolbarItems.children, {forgottenChildren: this[_forgottenChildren]});
      this[_forgottenChildren].clear();
    }
  };
  (text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.new = function(widget) {
    this[___CupertinoTextSelectionToolbarItemsElement__children] = null;
    this.slotToChild = new (T.LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$Element()).new();
    this[_forgottenChildren] = new (T._HashSetOfElement()).new();
    text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.__proto__.new.call(this, widget);
    ;
  }).prototype = text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.prototype;
  dart.addTypeTests(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement);
  dart.addTypeCaches(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement);
  dart.setMethodSignature(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.__proto__),
    [_updateRenderObject]: dart.fnType(dart.void, [dart.nullable(box.RenderBox), text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot]),
    [_mountChild]: dart.fnType(dart.void, [framework.Widget, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot])
  }));
  dart.setStaticMethodSignature(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement, () => ['_shouldPaint']);
  dart.setGetterSignature(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement, () => ({
    __proto__: dart.getGetters(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.__proto__),
    [_children]: core.List$(framework.Element),
    renderObject: text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems
  }));
  dart.setSetterSignature(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement, () => ({
    __proto__: dart.getSetters(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.__proto__),
    [_children]: core.List$(framework.Element)
  }));
  dart.setLibraryUri(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement, I[1]);
  dart.setFieldSignature(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement, () => ({
    __proto__: dart.getFields(text_selection_toolbar._CupertinoTextSelectionToolbarItemsElement.__proto__),
    [___CupertinoTextSelectionToolbarItemsElement__children]: dart.fieldType(dart.nullable(core.List$(framework.Element))),
    slotToChild: dart.finalFieldType(core.Map$(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot, framework.Element)),
    [_forgottenChildren]: dart.finalFieldType(core.Set$(framework.Element))
  }));
  var _backButton = dart.privateName(text_selection_toolbar, "_backButton");
  var _nextButton = dart.privateName(text_selection_toolbar, "_nextButton");
  var _nextButtonDisabled = dart.privateName(text_selection_toolbar, "_nextButtonDisabled");
  var _dividerWidth = dart.privateName(text_selection_toolbar, "_dividerWidth");
  var _updateChild = dart.privateName(text_selection_toolbar, "_updateChild");
  var _isSlottedChild = dart.privateName(text_selection_toolbar, "_isSlottedChild");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, text_selection.ToolbarItemsParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, text_selection.ToolbarItemsParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, text_selection.ToolbarItemsParentData));
  text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems = class _RenderCupertinoTextSelectionToolbarItems extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let dividerWidth = opts && 'dividerWidth' in opts ? opts.dividerWidth : null;
      let page = opts && 'page' in opts ? opts.page : null;
      return new text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.new({dividerWidth: dividerWidth, page: page});
    }
    [_updateChild](oldChild, newChild, slot) {
      if (oldChild != null) {
        this.dropChild(oldChild);
        this.slottedChildren[$remove](slot);
      }
      if (newChild != null) {
        this.slottedChildren[$_set](slot, newChild);
        this.adoptChild(newChild);
      }
      return newChild;
    }
    [_isSlottedChild](child) {
      return child[$_equals](this[_backButton]) || child[$_equals](this[_nextButton]) || child[$_equals](this[_nextButtonDisabled]);
    }
    get page() {
      return this[_page];
    }
    set page(value) {
      if (value === this[_page]) {
        return;
      }
      this[_page] = value;
      this.markNeedsLayout();
    }
    get dividerWidth() {
      return this[_dividerWidth];
    }
    set dividerWidth(value) {
      if (value === this[_dividerWidth]) {
        return;
      }
      this[_dividerWidth] = value;
      this.markNeedsLayout();
    }
    get backButton() {
      return this[_backButton];
    }
    set backButton(value) {
      this[_backButton] = this[_updateChild](this[_backButton], value, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.backButton);
    }
    get nextButton() {
      return this[_nextButton];
    }
    set nextButton(value) {
      this[_nextButton] = this[_updateChild](this[_nextButton], value, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.nextButton);
    }
    get nextButtonDisabled() {
      return this[_nextButtonDisabled];
    }
    set nextButtonDisabled(value) {
      this[_nextButtonDisabled] = this[_updateChild](this[_nextButtonDisabled], value, text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled);
    }
    performLayout() {
      if (this.firstChild == null) {
        this.size = this.constraints.smallest;
        return;
      }
      dart.nullCheck(this[_backButton]).layout(this.constraints.loosen(), {parentUsesSize: true});
      dart.nullCheck(this[_nextButton]).layout(this.constraints.loosen(), {parentUsesSize: true});
      dart.nullCheck(this[_nextButtonDisabled]).layout(this.constraints.loosen(), {parentUsesSize: true});
      let subsequentPageButtonsWidth = dart.nullCheck(this[_backButton]).size.width + dart.nullCheck(this[_nextButton]).size.width;
      let currentButtonPosition = 0.0;
      let toolbarWidth = null;
      function toolbarWidth$35get() {
        let t1;
        t1 = toolbarWidth;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("toolbarWidth")) : t1;
      }
      dart.fn(toolbarWidth$35get, T.VoidTodouble());
      function toolbarWidth$35set(toolbarWidth$35param) {
        return toolbarWidth = toolbarWidth$35param;
      }
      dart.fn(toolbarWidth$35set, T.doubleTodynamic());
      let greatestHeight = null;
      function greatestHeight$35get() {
        let t4;
        t4 = greatestHeight;
        return t4 == null ? greatestHeight = 0.0 : t4;
      }
      dart.fn(greatestHeight$35get, T.VoidTodouble());
      function greatestHeight$35set(greatestHeight$35param) {
        return greatestHeight = greatestHeight$35param;
      }
      dart.fn(greatestHeight$35set, T.doubleTodynamic());
      let firstPageWidth = null;
      function firstPageWidth$35get() {
        let t7;
        t7 = firstPageWidth;
        return t7 == null ? dart.throw(new _internal.LateError.localNI("firstPageWidth")) : t7;
      }
      dart.fn(firstPageWidth$35get, T.VoidTodouble());
      function firstPageWidth$35set(firstPageWidth$35param) {
        return firstPageWidth = firstPageWidth$35param;
      }
      dart.fn(firstPageWidth$35set, T.doubleTodynamic());
      let currentPage = 0;
      let i = -1;
      this.visitChildren(dart.fn(renderObjectChild => {
        i = i + 1;
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        childParentData.shouldPaint = false;
        if (this[_isSlottedChild](child) || currentPage > this[_page]) {
          return;
        }
        let paginationButtonsWidth = 0.0;
        if (currentPage === 0) {
          paginationButtonsWidth = i === this.childCount - 1 ? 0.0 : dart.nullCheck(this[_nextButton]).size.width;
        } else {
          paginationButtonsWidth = subsequentPageButtonsWidth;
        }
        child.layout(new box.BoxConstraints.loose(new ui.Size.new((currentPage === 0 ? this.constraints.maxWidth : firstPageWidth$35get()) - paginationButtonsWidth, this.constraints.maxHeight)), {parentUsesSize: true});
        greatestHeight$35set(child.size.height > greatestHeight$35get() ? child.size.height : greatestHeight$35get());
        let currentWidth = currentButtonPosition + paginationButtonsWidth + child.size.width;
        if (currentWidth > this.constraints.maxWidth) {
          currentPage = currentPage + 1;
          currentButtonPosition = dart.nullCheck(this[_backButton]).size.width + this.dividerWidth;
          paginationButtonsWidth = dart.nullCheck(this[_backButton]).size.width + dart.nullCheck(this[_nextButton]).size.width;
          child.layout(new box.BoxConstraints.loose(new ui.Size.new(firstPageWidth$35get() - paginationButtonsWidth, this.constraints.maxHeight)), {parentUsesSize: true});
        }
        childParentData.offset = new ui.Offset.new(currentButtonPosition, 0.0);
        currentButtonPosition = currentButtonPosition + (child.size.width + this.dividerWidth);
        childParentData.shouldPaint = currentPage === this.page;
        if (currentPage === 0) {
          firstPageWidth$35set(currentButtonPosition + dart.nullCheck(this[_nextButton]).size.width);
        }
        if (currentPage === this.page) {
          toolbarWidth$35set(currentButtonPosition);
        }
      }, T.RenderObjectTovoid()));
      if (!(this.page <= currentPage)) dart.assertFailed(null, I[0], 816, 12, "page <= currentPage");
      if (currentPage > 0) {
        let nextButtonParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this[_nextButton]).parentData));
        let nextButtonDisabledParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this[_nextButtonDisabled]).parentData));
        let backButtonParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this[_backButton]).parentData));
        if (this.page === currentPage) {
          nextButtonDisabledParentData.offset = new ui.Offset.new(toolbarWidth$35get(), 0.0);
          nextButtonDisabledParentData.shouldPaint = true;
          toolbarWidth$35set(toolbarWidth$35get() + dart.nullCheck(this.nextButtonDisabled).size.width);
        } else {
          nextButtonParentData.offset = new ui.Offset.new(toolbarWidth$35get(), 0.0);
          nextButtonParentData.shouldPaint = true;
          toolbarWidth$35set(toolbarWidth$35get() + dart.nullCheck(this.nextButton).size.width);
        }
        if (this.page > 0) {
          backButtonParentData.offset = ui.Offset.zero;
          backButtonParentData.shouldPaint = true;
        }
      } else {
        toolbarWidth$35set(toolbarWidth$35get() - this.dividerWidth);
      }
      this.size = this.constraints.constrain(new ui.Size.new(toolbarWidth$35get(), greatestHeight$35get()));
    }
    paint(context, offset) {
      this.visitChildren(dart.fn(renderObjectChild => {
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (childParentData.shouldPaint) {
          let childOffset = childParentData.offset['+'](offset);
          context.paintChild(child, childOffset);
        }
      }, T.RenderObjectTovoid()));
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!text_selection.ToolbarItemsParentData.is(child.parentData)) {
        child.parentData = new text_selection.ToolbarItemsParentData.new();
      }
    }
    static hitTestChild(child, result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (child == null) {
        return false;
      }
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
      if (!childParentData.shouldPaint) {
        return false;
      }
      return result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
          if (!transformed._equals(position['-'](childParentData.offset))) dart.assertFailed(null, I[0], 886, 16, "transformed == position - childParentData.offset");
          return child.hitTest(result, {position: transformed});
        }, T.BoxHitTestResultAndOffsetTobool())});
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let child = this.lastChild;
      while (child != null) {
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (!childParentData.shouldPaint) {
          child = childParentData.previousSibling;
          continue;
        }
        if (text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.hitTestChild(child, result, {position: position})) {
          return true;
        }
        child = childParentData.previousSibling;
      }
      if (text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.hitTestChild(this.backButton, result, {position: position})) {
        return true;
      }
      if (text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.hitTestChild(this.nextButton, result, {position: position})) {
        return true;
      }
      if (text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.hitTestChild(this.nextButtonDisabled, result, {position: position})) {
        return true;
      }
      return false;
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      super.attach(owner);
      for (let child of this.slottedChildren[$values]) {
        child.attach(owner);
      }
    }
    detach() {
      super.detach();
      for (let child of this.slottedChildren[$values]) {
        child.detach();
      }
    }
    redepthChildren() {
      this.visitChildren(dart.fn(renderObjectChild => {
        let child = box.RenderBox.as(renderObjectChild);
        this.redepthChild(child);
      }, T.RenderObjectTovoid()));
    }
    visitChildren(visitor) {
      if (this[_backButton] != null) {
        visitor(dart.nullCheck(this[_backButton]));
      }
      if (this[_nextButton] != null) {
        visitor(dart.nullCheck(this[_nextButton]));
      }
      if (this[_nextButtonDisabled] != null) {
        visitor(dart.nullCheck(this[_nextButtonDisabled]));
      }
      super.visitChildren(visitor);
    }
    visitChildrenForSemantics(visitor) {
      this.visitChildren(dart.fn(renderObjectChild => {
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (childParentData.shouldPaint) {
          visitor(renderObjectChild);
        }
      }, T.RenderObjectTovoid()));
    }
    debugDescribeChildren() {
      let value = T.JSArrayOfDiagnosticsNode().of([]);
      this.visitChildren(dart.fn(renderObjectChild => {
        let child = box.RenderBox.as(renderObjectChild);
        if (child[$_equals](this.backButton)) {
          value[$add](child.toDiagnosticsNode({name: "back button"}));
        } else if (child[$_equals](this.nextButton)) {
          value[$add](child.toDiagnosticsNode({name: "next button"}));
        } else if (child[$_equals](this.nextButtonDisabled)) {
          value[$add](child.toDiagnosticsNode({name: "next button disabled"}));
        } else {
          value[$add](child.toDiagnosticsNode({name: "menu item"}));
        }
      }, T.RenderObjectTovoid()));
      return value;
    }
  };
  (text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.new = function(opts) {
    let dividerWidth = opts && 'dividerWidth' in opts ? opts.dividerWidth : null;
    let page = opts && 'page' in opts ? opts.page : null;
    this.slottedChildren = new (T.LinkedMapOf_CupertinoTextSelectionToolbarItemsSlot$RenderBox()).new();
    this[_backButton] = null;
    this[_nextButton] = null;
    this[_nextButtonDisabled] = null;
    if (!(dividerWidth !== null)) dart.assertFailed(null, I[0], 671, 15, "dividerWidth != null");
    if (!(page !== null)) dart.assertFailed(null, I[0], 672, 15, "page != null");
    this[_dividerWidth] = dividerWidth;
    this[_page] = page;
    text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.__proto__.new.call(this);
    ;
  }).prototype = text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.prototype;
  dart.addTypeTests(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems);
  dart.addTypeCaches(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems);
  dart.setMethodSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.__proto__),
    [_updateChild]: dart.fnType(dart.nullable(box.RenderBox), [dart.nullable(box.RenderBox), dart.nullable(box.RenderBox), text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot]),
    [_isSlottedChild]: dart.fnType(core.bool, [box.RenderBox])
  }));
  dart.setStaticMethodSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems, () => ['hitTestChild']);
  dart.setGetterSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems, () => ({
    __proto__: dart.getGetters(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.__proto__),
    page: core.int,
    dividerWidth: core.double,
    backButton: dart.nullable(box.RenderBox),
    nextButton: dart.nullable(box.RenderBox),
    nextButtonDisabled: dart.nullable(box.RenderBox)
  }));
  dart.setSetterSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems, () => ({
    __proto__: dart.getSetters(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.__proto__),
    page: core.int,
    dividerWidth: core.double,
    backButton: dart.nullable(box.RenderBox),
    nextButton: dart.nullable(box.RenderBox),
    nextButtonDisabled: dart.nullable(box.RenderBox)
  }));
  dart.setLibraryUri(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems, I[1]);
  dart.setFieldSignature(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems, () => ({
    __proto__: dart.getFields(text_selection_toolbar._RenderCupertinoTextSelectionToolbarItems.__proto__),
    slottedChildren: dart.finalFieldType(core.Map$(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot, box.RenderBox)),
    [_page]: dart.fieldType(core.int),
    [_dividerWidth]: dart.fieldType(core.double),
    [_backButton]: dart.fieldType(dart.nullable(box.RenderBox)),
    [_nextButton]: dart.fieldType(dart.nullable(box.RenderBox)),
    [_nextButtonDisabled]: dart.fieldType(dart.nullable(box.RenderBox))
  }));
  var _name = dart.privateName(core, "_name");
  text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot = class _CupertinoTextSelectionToolbarItemsSlot extends core._Enum {
    toString() {
      return "_CupertinoTextSelectionToolbarItemsSlot." + this[_name];
    }
  };
  (text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.new = function(index, name) {
    text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.prototype;
  dart.addTypeTests(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot);
  dart.addTypeCaches(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot);
  dart.setLibraryUri(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot, I[1]);
  dart.setStaticFieldSignature(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot, () => ['values', 'backButton', 'nextButton', 'nextButtonDisabled']);
  dart.defineExtensionMethods(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot, ['toString']);
  dart.defineLazy(text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot, {
    /*text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.values*/get values() {
      return C[28] || CT.C28;
    },
    /*text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.backButton*/get backButton() {
      return C[25] || CT.C25;
    },
    /*text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.nextButton*/get nextButton() {
      return C[26] || CT.C26;
    },
    /*text_selection_toolbar._CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled*/get nextButtonDisabled() {
      return C[27] || CT.C27;
    }
  }, false);
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  text_selection_toolbar._NullElement = class _NullElement extends framework.Element {
    static ['_#new#tearOff']() {
      return new text_selection_toolbar._NullElement.new();
    }
    get debugDoingBuild() {
      return dart.throw(new core.UnimplementedError.new());
    }
    performRebuild() {
    }
  };
  (text_selection_toolbar._NullElement.new = function() {
    text_selection_toolbar._NullElement.__proto__.new.call(this, C[29] || CT.C29);
    ;
  }).prototype = text_selection_toolbar._NullElement.prototype;
  dart.addTypeTests(text_selection_toolbar._NullElement);
  dart.addTypeCaches(text_selection_toolbar._NullElement);
  dart.setMethodSignature(text_selection_toolbar._NullElement, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._NullElement.__proto__),
    performRebuild: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_selection_toolbar._NullElement, () => ({
    __proto__: dart.getGetters(text_selection_toolbar._NullElement.__proto__),
    debugDoingBuild: core.bool
  }));
  dart.setLibraryUri(text_selection_toolbar._NullElement, I[1]);
  dart.setStaticFieldSignature(text_selection_toolbar._NullElement, () => ['instance']);
  dart.defineLazy(text_selection_toolbar._NullElement, {
    /*text_selection_toolbar._NullElement.instance*/get instance() {
      return new text_selection_toolbar._NullElement.new();
    },
    set instance(_) {}
  }, false);
  text_selection_toolbar._NullWidget = class _NullWidget extends framework.Widget {
    static ['_#new#tearOff']() {
      return new text_selection_toolbar._NullWidget.new({$creationLocationd_0dea112b090073317d4: C[31] || CT.C31});
    }
    createElement() {
      return dart.throw(new core.UnimplementedError.new());
    }
  };
  (text_selection_toolbar._NullWidget.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    text_selection_toolbar._NullWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._NullWidget.prototype;
  dart.addTypeTests(text_selection_toolbar._NullWidget);
  dart.addTypeCaches(text_selection_toolbar._NullWidget);
  dart.setMethodSignature(text_selection_toolbar._NullWidget, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._NullWidget.__proto__),
    createElement: dart.fnType(framework.Element, [])
  }));
  dart.setLibraryUri(text_selection_toolbar._NullWidget, I[1]);
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  dart.defineLazy(text_selection_toolbar, {
    /*text_selection_toolbar._kToolbarHeight*/get _kToolbarHeight() {
      return 43;
    },
    /*text_selection_toolbar._kToolbarContentDistance*/get _kToolbarContentDistance() {
      return 8;
    },
    /*text_selection_toolbar._kToolbarScreenPadding*/get _kToolbarScreenPadding() {
      return 8;
    },
    /*text_selection_toolbar._kToolbarArrowSize*/get _kToolbarArrowSize() {
      return C[32] || CT.C32;
    },
    /*text_selection_toolbar._kToolbarBorderRadius*/get _kToolbarBorderRadius() {
      return C[33] || CT.C33;
    },
    /*text_selection_toolbar._kToolbarDividerColor*/get _kToolbarDividerColor() {
      return C[4] || CT.C4;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/text_selection_toolbar.dart", {
    "package:flutter/src/cupertino/text_selection_toolbar.dart": text_selection_toolbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection_toolbar.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/cupertino/text_selection_toolbar.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__text_selection_toolbar: text_selection_toolbar
  };
}));

//# sourceMappingURL=text_selection_toolbar.dart.lib.js.map
