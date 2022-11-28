define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/text_selection_toolbar_layout_delegate.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/widgets/animated_size.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__flutter__src__material__text_selection_toolbar_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__text_selection_toolbar_layout_delegate$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__widgets__animated_size$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const text_selection = packages__flutter__src__widgets__title$46dart.src__widgets__text_selection;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const text_selection_toolbar_layout_delegate = packages__flutter__src__widgets__text_selection_toolbar_layout_delegate$46dart.src__widgets__text_selection_toolbar_layout_delegate;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const debug = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const animated_size = packages__flutter__src__widgets__animated_size$46dart.src__widgets__animated_size;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var text_selection_toolbar = Object.create(dart.library);
  var $length = dartx.length;
  var $addAll = dartx.addAll;
  var $where = dartx.where;
  var $forEach = dartx.forEach;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BuildContextAndWidgetToWidget: () => (T.BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    ElementTobool: () => (T.ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))(),
    RenderObjectTovoid: () => (T.RenderObjectTovoid = dart.constFn(dart.fnType(dart.void, [object.RenderObject])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(text_selection_toolbar.TextSelectionToolbar._defaultToolbarBuilder, T.BuildContextAndWidgetToWidget());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextSelectionToolbar",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarContainer",
        [_Location_column]: 12,
        [_Location_line]: 83,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarOverflowable",
        [_Location_column]: 20,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomSingleChildLayout",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 14,
        [_Location_line]: 103,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 96,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarOverflowable",
        [_Location_column]: 9,
        [_Location_line]: 127,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 140000
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 21,
        [_Location_line]: 203,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarOverflowButton",
        [_Location_column]: 13,
        [_Location_line]: 202,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarItemsLayout",
        [_Location_column]: 47,
        [_Location_line]: 192,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedSize",
        [_Location_column]: 14,
        [_Location_line]: 188,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarTrailingEdgeAlign",
        [_Location_column]: 12,
        [_Location_line]: 184,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarTrailingEdgeAlign",
        [_Location_column]: 9,
        [_Location_line]: 226,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarItemsLayout",
        [_Location_column]: 3,
        [_Location_line]: 356,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C16() {
      return C[16] = dart.fn(text_selection_toolbar._TextSelectionToolbarItemsLayoutElement._shouldPaint, T.ElementTobool());
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarContainer",
        [_Location_column]: 9,
        [_Location_line]: 639,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 7,
        [Radius_x]: 7
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[19] || CT.C19,
        [BorderRadius_bottomLeft]: C[19] || CT.C19,
        [BorderRadius_topRight]: C[19] || CT.C19,
        [BorderRadius_topLeft]: C[19] || CT.C19
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 12,
        [_Location_line]: 647,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionToolbarOverflowButton",
        [_Location_column]: 9,
        [_Location_line]: 662,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 14,
        [_Location_line]: 677,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 12,
        [_Location_line]: 674,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart"
      });
    }
  }, false);
  var C = Array(25).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection_toolbar.dart",
    "package:flutter/src/material/text_selection_toolbar.dart"
  ];
  var anchorAbove$ = dart.privateName(text_selection_toolbar, "TextSelectionToolbar.anchorAbove");
  var anchorBelow$ = dart.privateName(text_selection_toolbar, "TextSelectionToolbar.anchorBelow");
  var children$ = dart.privateName(text_selection_toolbar, "TextSelectionToolbar.children");
  var toolbarBuilder$ = dart.privateName(text_selection_toolbar, "TextSelectionToolbar.toolbarBuilder");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  text_selection_toolbar.TextSelectionToolbar = class TextSelectionToolbar extends framework.StatelessWidget {
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
      let toolbarBuilder = opts && 'toolbarBuilder' in opts ? opts.toolbarBuilder : C[0] || CT.C0;
      let children = opts && 'children' in opts ? opts.children : null;
      return new text_selection_toolbar.TextSelectionToolbar.new({key: key, anchorAbove: anchorAbove, anchorBelow: anchorBelow, toolbarBuilder: toolbarBuilder, children: children, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static _defaultToolbarBuilder(context, child) {
      return new text_selection_toolbar._TextSelectionToolbarContainer.new({child: child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    build(context) {
      let paddingAbove = media_query.MediaQuery.of(context).padding.top + 8;
      let availableHeight = this.anchorAbove.dy - paddingAbove;
      let fitsAbove = 44 <= availableHeight;
      let localAdjustment = new ui.Offset.new(8, paddingAbove);
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(8, paddingAbove, 8, 8), child: new basic.Stack.new({children: T.JSArrayOfWidget().of([new basic.CustomSingleChildLayout.new({delegate: new text_selection_toolbar_layout_delegate.TextSelectionToolbarLayoutDelegate.new({anchorAbove: this.anchorAbove['-'](localAdjustment), anchorBelow: this.anchorBelow['-'](localAdjustment), fitsAbove: fitsAbove}), child: new text_selection_toolbar._TextSelectionToolbarOverflowable.new({isAbove: fitsAbove, toolbarBuilder: this.toolbarBuilder, children: this.children, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4})]), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
  };
  (text_selection_toolbar.TextSelectionToolbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let anchorAbove = opts && 'anchorAbove' in opts ? opts.anchorAbove : null;
    let anchorBelow = opts && 'anchorBelow' in opts ? opts.anchorBelow : null;
    let toolbarBuilder = opts && 'toolbarBuilder' in opts ? opts.toolbarBuilder : C[0] || CT.C0;
    let children = opts && 'children' in opts ? opts.children : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[anchorAbove$] = anchorAbove;
    this[anchorBelow$] = anchorBelow;
    this[toolbarBuilder$] = toolbarBuilder;
    this[children$] = children;
    if (!(children[$length] > 0)) dart.assertFailed(null, I[0], 44, 15, "children.length > 0");
    text_selection_toolbar.TextSelectionToolbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar.TextSelectionToolbar.prototype;
  dart.addTypeTests(text_selection_toolbar.TextSelectionToolbar);
  dart.addTypeCaches(text_selection_toolbar.TextSelectionToolbar);
  dart.setMethodSignature(text_selection_toolbar.TextSelectionToolbar, () => ({
    __proto__: dart.getMethods(text_selection_toolbar.TextSelectionToolbar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(text_selection_toolbar.TextSelectionToolbar, () => ['_defaultToolbarBuilder']);
  dart.setLibraryUri(text_selection_toolbar.TextSelectionToolbar, I[1]);
  dart.setFieldSignature(text_selection_toolbar.TextSelectionToolbar, () => ({
    __proto__: dart.getFields(text_selection_toolbar.TextSelectionToolbar.__proto__),
    anchorAbove: dart.finalFieldType(ui.Offset),
    anchorBelow: dart.finalFieldType(ui.Offset),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    toolbarBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget]))
  }));
  var children$0 = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarOverflowable.children");
  var isAbove$ = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarOverflowable.isAbove");
  var toolbarBuilder$0 = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarOverflowable.toolbarBuilder");
  text_selection_toolbar._TextSelectionToolbarOverflowable = class _TextSelectionToolbarOverflowable extends framework.StatefulWidget {
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
      let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
      let toolbarBuilder = opts && 'toolbarBuilder' in opts ? opts.toolbarBuilder : null;
      let children = opts && 'children' in opts ? opts.children : null;
      return new text_selection_toolbar._TextSelectionToolbarOverflowable.new({isAbove: isAbove, toolbarBuilder: toolbarBuilder, children: children, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    createState() {
      return new text_selection_toolbar._TextSelectionToolbarOverflowableState.new();
    }
  };
  (text_selection_toolbar._TextSelectionToolbarOverflowable.new = function(opts) {
    let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
    let toolbarBuilder = opts && 'toolbarBuilder' in opts ? opts.toolbarBuilder : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[isAbove$] = isAbove;
    this[toolbarBuilder$0] = toolbarBuilder;
    this[children$0] = children;
    if (!(children[$length] > 0)) dart.assertFailed(null, I[0], 131, 15, "children.length > 0");
    text_selection_toolbar._TextSelectionToolbarOverflowable.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._TextSelectionToolbarOverflowable.prototype;
  dart.addTypeTests(text_selection_toolbar._TextSelectionToolbarOverflowable);
  dart.addTypeCaches(text_selection_toolbar._TextSelectionToolbarOverflowable);
  dart.setMethodSignature(text_selection_toolbar._TextSelectionToolbarOverflowable, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._TextSelectionToolbarOverflowable.__proto__),
    createState: dart.fnType(text_selection_toolbar._TextSelectionToolbarOverflowableState, [])
  }));
  dart.setLibraryUri(text_selection_toolbar._TextSelectionToolbarOverflowable, I[1]);
  dart.setFieldSignature(text_selection_toolbar._TextSelectionToolbarOverflowable, () => ({
    __proto__: dart.getFields(text_selection_toolbar._TextSelectionToolbarOverflowable.__proto__),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    isAbove: dart.finalFieldType(core.bool),
    toolbarBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget]))
  }));
  var _overflowOpen = dart.privateName(text_selection_toolbar, "_overflowOpen");
  var _containerKey = dart.privateName(text_selection_toolbar, "_containerKey");
  var _reset = dart.privateName(text_selection_toolbar, "_reset");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(text_selection_toolbar._TextSelectionToolbarOverflowable) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(text_selection_toolbar._TextSelectionToolbarOverflowable)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(text_selection_toolbar._TextSelectionToolbarOverflowable));
  text_selection_toolbar._TextSelectionToolbarOverflowableState = class _TextSelectionToolbarOverflowableState extends State_TickerProviderStateMixin$36 {
    [_reset]() {
      this[_containerKey] = new key.UniqueKey.new();
      this[_overflowOpen] = false;
    }
    didUpdateWidget(oldWidget) {
      text_selection_toolbar._TextSelectionToolbarOverflowable.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!collections.listEquals(framework.Widget, this.widget.children, oldWidget.children)) {
        this[_reset]();
      }
    }
    build(context) {
      let t3, t2, t1;
      if (!debug.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[0], 181, 12, "debugCheckHasMaterialLocalizations(context)");
      let localizations = material_localizations.MaterialLocalizations.of(context);
      return new text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign.new({key: this[_containerKey], overflowOpen: this[_overflowOpen], textDirection: basic.Directionality.of(context), child: new animated_size.AnimatedSize.new({duration: C[8] || CT.C8, child: (t1 = this.widget, t2 = context, t3 = new text_selection_toolbar._TextSelectionToolbarItemsLayout.new({isAbove: this.widget.isAbove, overflowOpen: this[_overflowOpen], children: (() => {
              let t0 = T.JSArrayOfWidget().of([new text_selection_toolbar._TextSelectionToolbarOverflowButton.new({icon: new icon.Icon.new(this[_overflowOpen] ? icons.Icons.arrow_back : icons.Icons.more_vert, {$creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), onPressed: dart.fn(() => {
                    this.setState(dart.fn(() => {
                      this[_overflowOpen] = !this[_overflowOpen];
                    }, T.VoidTovoid()));
                  }, T.VoidTovoid()), tooltip: this[_overflowOpen] ? localizations.backButtonTooltip : localizations.moreButtonTooltip, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10})]);
              t0[$addAll](this.widget.children);
              return t0;
            })(), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), t1.toolbarBuilder(t2, t3)), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    static ['_#new#tearOff']() {
      return new text_selection_toolbar._TextSelectionToolbarOverflowableState.new();
    }
  };
  (text_selection_toolbar._TextSelectionToolbarOverflowableState.new = function() {
    this[_overflowOpen] = false;
    this[_containerKey] = new key.UniqueKey.new();
    text_selection_toolbar._TextSelectionToolbarOverflowableState.__proto__.new.call(this);
    ;
  }).prototype = text_selection_toolbar._TextSelectionToolbarOverflowableState.prototype;
  dart.addTypeTests(text_selection_toolbar._TextSelectionToolbarOverflowableState);
  dart.addTypeCaches(text_selection_toolbar._TextSelectionToolbarOverflowableState);
  dart.setMethodSignature(text_selection_toolbar._TextSelectionToolbarOverflowableState, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._TextSelectionToolbarOverflowableState.__proto__),
    [_reset]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection_toolbar._TextSelectionToolbarOverflowableState, I[1]);
  dart.setFieldSignature(text_selection_toolbar._TextSelectionToolbarOverflowableState, () => ({
    __proto__: dart.getFields(text_selection_toolbar._TextSelectionToolbarOverflowableState.__proto__),
    [_overflowOpen]: dart.fieldType(core.bool),
    [_containerKey]: dart.fieldType(key.UniqueKey)
  }));
  var overflowOpen$ = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarTrailingEdgeAlign.overflowOpen");
  var textDirection$ = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarTrailingEdgeAlign.textDirection");
  text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign = class _TextSelectionToolbarTrailingEdgeAlign extends framework.SingleChildRenderObjectWidget {
    get overflowOpen() {
      return this[overflowOpen$];
    }
    set overflowOpen(value) {
      super.overflowOpen = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign.new({key: key, child: child, overflowOpen: overflowOpen, textDirection: textDirection, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    createRenderObject(context) {
      return new text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.new({overflowOpen: this.overflowOpen, textDirection: this.textDirection});
    }
    updateRenderObject(context, renderObject) {
      let t1;
      text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.as(renderObject);
      t1 = renderObject;
      (() => {
        t1.overflowOpen = this.overflowOpen;
        t1.textDirection = this.textDirection;
        return t1;
      })();
    }
  };
  (text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[overflowOpen$] = overflowOpen;
    this[textDirection$] = textDirection;
    if (!(child !== null)) dart.assertFailed(null, I[0], 231, 15, "child != null");
    if (!(overflowOpen !== null)) dart.assertFailed(null, I[0], 232, 15, "overflowOpen != null");
    text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign.prototype;
  dart.addTypeTests(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign);
  dart.addTypeCaches(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign);
  dart.setMethodSignature(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign.__proto__),
    createRenderObject: dart.fnType(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign, I[1]);
  dart.setFieldSignature(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign, () => ({
    __proto__: dart.getFields(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlign.__proto__),
    overflowOpen: dart.finalFieldType(core.bool),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  var _closedWidth = dart.privateName(text_selection_toolbar, "_closedWidth");
  var _textDirection = dart.privateName(text_selection_toolbar, "_textDirection");
  text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox = class _TextSelectionToolbarTrailingEdgeAlignRenderBox extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.new({overflowOpen: overflowOpen, textDirection: textDirection});
    }
    get overflowOpen() {
      return this[_overflowOpen];
    }
    set overflowOpen(value) {
      if (value === this.overflowOpen) {
        return;
      }
      this[_overflowOpen] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (value === this.textDirection) {
        return;
      }
      this[_textDirection] = value;
      this.markNeedsLayout();
    }
    performLayout() {
      dart.nullCheck(this.child).layout(this.constraints.loosen(), {parentUsesSize: true});
      if (!this.overflowOpen && this[_closedWidth] == null) {
        this[_closedWidth] = dart.nullCheck(this.child).size.width;
      }
      this.size = this.constraints.constrain(new ui.Size.new(this[_closedWidth] == null || dart.nullCheck(this.child).size.width > dart.nullCheck(this[_closedWidth]) ? dart.nullCheck(this.child).size.width : dart.nullCheck(this[_closedWidth]), dart.nullCheck(this.child).size.height));
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      childParentData.offset = new ui.Offset.new(this.textDirection === ui.TextDirection.rtl ? 0.0 : this.size.width - dart.nullCheck(this.child).size.width, 0.0);
    }
    paint(context, offset) {
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      context.paintChild(dart.nullCheck(this.child), childParentData.offset['+'](offset));
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      return result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
          if (!transformed._equals(position['-'](childParentData.offset))) dart.assertFailed(null, I[0], 332, 16, "transformed == position - childParentData.offset");
          return dart.nullCheck(this.child).hitTest(result, {position: transformed});
        }, T.BoxHitTestResultAndOffsetTobool())});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!text_selection.ToolbarItemsParentData.is(child.parentData)) {
        child.parentData = new text_selection.ToolbarItemsParentData.new();
      }
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
      transform.translate(childParentData.offset.dx, childParentData.offset.dy);
      super.applyPaintTransform(child, transform);
    }
  };
  (text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.new = function(opts) {
    let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[_closedWidth] = null;
    this[_textDirection] = textDirection;
    this[_overflowOpen] = overflowOpen;
    text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.__proto__.new.call(this);
    ;
  }).prototype = text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.prototype;
  dart.addTypeTests(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox);
  dart.addTypeCaches(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox);
  dart.setGetterSignature(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox, () => ({
    __proto__: dart.getGetters(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.__proto__),
    overflowOpen: core.bool,
    textDirection: ui.TextDirection
  }));
  dart.setSetterSignature(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox, () => ({
    __proto__: dart.getSetters(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.__proto__),
    overflowOpen: core.bool,
    textDirection: ui.TextDirection
  }));
  dart.setLibraryUri(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox, I[1]);
  dart.setFieldSignature(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox, () => ({
    __proto__: dart.getFields(text_selection_toolbar._TextSelectionToolbarTrailingEdgeAlignRenderBox.__proto__),
    [_closedWidth]: dart.fieldType(dart.nullable(core.double)),
    [_overflowOpen]: dart.fieldType(core.bool),
    [_textDirection]: dart.fieldType(ui.TextDirection)
  }));
  text_selection_toolbar._TextSelectionToolbarItemsLayout = class _TextSelectionToolbarItemsLayout extends framework.MultiChildRenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
      let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
      let children = opts && 'children' in opts ? opts.children : null;
      return new text_selection_toolbar._TextSelectionToolbarItemsLayout.new({isAbove: isAbove, overflowOpen: overflowOpen, children: children, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
    createRenderObject(context) {
      return new text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.new({isAbove: this.isAbove, overflowOpen: this.overflowOpen});
    }
    updateRenderObject(context, renderObject) {
      let t1;
      text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.as(renderObject);
      t1 = renderObject;
      (() => {
        t1.isAbove = this.isAbove;
        t1.overflowOpen = this.overflowOpen;
        return t1;
      })();
    }
    createElement() {
      return new text_selection_toolbar._TextSelectionToolbarItemsLayoutElement.new(this);
    }
  };
  (text_selection_toolbar._TextSelectionToolbarItemsLayout.new = function(opts) {
    let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
    let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.isAbove = isAbove;
    this.overflowOpen = overflowOpen;
    if (!(children !== null)) dart.assertFailed(null, I[0], 360, 15, "children != null");
    if (!(isAbove !== null)) dart.assertFailed(null, I[0], 361, 15, "isAbove != null");
    if (!(overflowOpen !== null)) dart.assertFailed(null, I[0], 362, 15, "overflowOpen != null");
    text_selection_toolbar._TextSelectionToolbarItemsLayout.__proto__.new.call(this, {children: children, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._TextSelectionToolbarItemsLayout.prototype;
  dart.addTypeTests(text_selection_toolbar._TextSelectionToolbarItemsLayout);
  dart.addTypeCaches(text_selection_toolbar._TextSelectionToolbarItemsLayout);
  dart.setMethodSignature(text_selection_toolbar._TextSelectionToolbarItemsLayout, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._TextSelectionToolbarItemsLayout.__proto__),
    createRenderObject: dart.fnType(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout, [framework.BuildContext]),
    createElement: dart.fnType(text_selection_toolbar._TextSelectionToolbarItemsLayoutElement, [])
  }));
  dart.setLibraryUri(text_selection_toolbar._TextSelectionToolbarItemsLayout, I[1]);
  dart.setFieldSignature(text_selection_toolbar._TextSelectionToolbarItemsLayout, () => ({
    __proto__: dart.getFields(text_selection_toolbar._TextSelectionToolbarItemsLayout.__proto__),
    isAbove: dart.finalFieldType(core.bool),
    overflowOpen: dart.finalFieldType(core.bool)
  }));
  text_selection_toolbar._TextSelectionToolbarItemsLayoutElement = class _TextSelectionToolbarItemsLayoutElement extends framework.MultiChildRenderObjectElement {
    static ['_#new#tearOff'](widget) {
      return new text_selection_toolbar._TextSelectionToolbarItemsLayoutElement.new(widget);
    }
    static _shouldPaint(child) {
      return text_selection.ToolbarItemsParentData.as(dart.nullCheck(dart.nullCheck(child.renderObject).parentData)).shouldPaint;
    }
    debugVisitOnstageChildren(visitor) {
      this.children[$where](C[16] || CT.C16)[$forEach](visitor);
    }
  };
  (text_selection_toolbar._TextSelectionToolbarItemsLayoutElement.new = function(widget) {
    text_selection_toolbar._TextSelectionToolbarItemsLayoutElement.__proto__.new.call(this, widget);
    ;
  }).prototype = text_selection_toolbar._TextSelectionToolbarItemsLayoutElement.prototype;
  dart.addTypeTests(text_selection_toolbar._TextSelectionToolbarItemsLayoutElement);
  dart.addTypeCaches(text_selection_toolbar._TextSelectionToolbarItemsLayoutElement);
  dart.setStaticMethodSignature(text_selection_toolbar._TextSelectionToolbarItemsLayoutElement, () => ['_shouldPaint']);
  dart.setLibraryUri(text_selection_toolbar._TextSelectionToolbarItemsLayoutElement, I[1]);
  var _lastIndexThatFits = dart.privateName(text_selection_toolbar, "_lastIndexThatFits");
  var _isAbove = dart.privateName(text_selection_toolbar, "_isAbove");
  var _layoutChildren = dart.privateName(text_selection_toolbar, "_layoutChildren");
  var _shouldPaintChild = dart.privateName(text_selection_toolbar, "_shouldPaintChild");
  var _placeChildren = dart.privateName(text_selection_toolbar, "_placeChildren");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, text_selection.ToolbarItemsParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, text_selection.ToolbarItemsParentData));
  text_selection_toolbar._RenderTextSelectionToolbarItemsLayout = class _RenderTextSelectionToolbarItemsLayout extends RenderBox_ContainerRenderObjectMixin$36 {
    static ['_#new#tearOff'](opts) {
      let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
      let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
      return new text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.new({isAbove: isAbove, overflowOpen: overflowOpen});
    }
    get isAbove() {
      return this[_isAbove];
    }
    set isAbove(value) {
      if (value === this.isAbove) {
        return;
      }
      this[_isAbove] = value;
      this.markNeedsLayout();
    }
    get overflowOpen() {
      return this[_overflowOpen];
    }
    set overflowOpen(value) {
      if (value === this.overflowOpen) {
        return;
      }
      this[_overflowOpen] = value;
      this.markNeedsLayout();
    }
    [_layoutChildren]() {
      let sizedConstraints = this[_overflowOpen] ? this.constraints : new box.BoxConstraints.loose(new ui.Size.new(this.constraints.maxWidth, 44));
      let i = -1;
      let width = 0.0;
      this.visitChildren(dart.fn(renderObjectChild => {
        i = i + 1;
        if (this[_lastIndexThatFits] !== -1 && !this.overflowOpen) {
          return;
        }
        let child = box.RenderBox.as(renderObjectChild);
        child.layout(sizedConstraints.loosen(), {parentUsesSize: true});
        width = width + child.size.width;
        if (width > sizedConstraints.maxWidth && this[_lastIndexThatFits] === -1) {
          this[_lastIndexThatFits] = i - 1;
        }
      }, T.RenderObjectTovoid()));
      let navButton = dart.nullCheck(this.firstChild);
      if (this[_lastIndexThatFits] !== -1 && this[_lastIndexThatFits] === this.childCount - 2 && width - navButton.size.width <= sizedConstraints.maxWidth) {
        this[_lastIndexThatFits] = -1;
      }
    }
    [_shouldPaintChild](renderObjectChild, index) {
      if (renderObjectChild[$_equals](this.firstChild)) {
        return this[_lastIndexThatFits] !== -1;
      }
      if (this[_lastIndexThatFits] === -1) {
        return true;
      }
      return index > this[_lastIndexThatFits] === this.overflowOpen;
    }
    [_placeChildren]() {
      let i = -1;
      let nextSize = ui.Size.zero;
      let fitWidth = 0.0;
      let navButton = dart.nullCheck(this.firstChild);
      let overflowHeight = this.overflowOpen && !this.isAbove ? navButton.size.height : 0.0;
      this.visitChildren(dart.fn(renderObjectChild => {
        i = i + 1;
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (renderObjectChild[$_equals](navButton)) {
          return;
        }
        if (!this[_shouldPaintChild](renderObjectChild, i)) {
          childParentData.shouldPaint = false;
          return;
        }
        childParentData.shouldPaint = true;
        if (!this.overflowOpen) {
          childParentData.offset = new ui.Offset.new(fitWidth, 0.0);
          fitWidth = fitWidth + child.size.width;
          nextSize = new ui.Size.new(fitWidth, math.max(core.double, child.size.height, nextSize.height));
        } else {
          childParentData.offset = new ui.Offset.new(0.0, overflowHeight);
          overflowHeight = overflowHeight + child.size.height;
          nextSize = new ui.Size.new(math.max(core.double, child.size.width, nextSize.width), overflowHeight);
        }
      }, T.RenderObjectTovoid()));
      let navButtonParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(navButton.parentData));
      if (this[_shouldPaintChild](dart.nullCheck(this.firstChild), 0)) {
        navButtonParentData.shouldPaint = true;
        if (this.overflowOpen) {
          navButtonParentData.offset = this.isAbove ? new ui.Offset.new(0.0, overflowHeight) : ui.Offset.zero;
          nextSize = new ui.Size.new(nextSize.width, this.isAbove ? nextSize.height + navButton.size.height : nextSize.height);
        } else {
          navButtonParentData.offset = new ui.Offset.new(fitWidth, 0.0);
          nextSize = new ui.Size.new(nextSize.width + navButton.size.width, nextSize.height);
        }
      } else {
        navButtonParentData.shouldPaint = false;
      }
      this.size = nextSize;
    }
    performLayout() {
      this[_lastIndexThatFits] = -1;
      if (this.firstChild == null) {
        this.size = this.constraints.smallest;
        return;
      }
      this[_layoutChildren]();
      this[_placeChildren]();
    }
    paint(context, offset) {
      this.visitChildren(dart.fn(renderObjectChild => {
        let child = box.RenderBox.as(renderObjectChild);
        let childParentData = text_selection.ToolbarItemsParentData.as(dart.nullCheck(child.parentData));
        if (!childParentData.shouldPaint) {
          return;
        }
        context.paintChild(child, childParentData.offset['+'](offset));
      }, T.RenderObjectTovoid()));
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!text_selection.ToolbarItemsParentData.is(child.parentData)) {
        child.parentData = new text_selection.ToolbarItemsParentData.new();
      }
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
        let isHit = result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
            if (!transformed._equals(position['-'](childParentData.offset))) dart.assertFailed(null, I[0], 611, 18, "transformed == position - childParentData.offset");
            return dart.nullCheck(child).hitTest(result, {position: transformed});
          }, T.BoxHitTestResultAndOffsetTobool())});
        if (isHit) {
          return true;
        }
        child = childParentData.previousSibling;
      }
      return false;
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
  };
  (text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.new = function(opts) {
    let isAbove = opts && 'isAbove' in opts ? opts.isAbove : null;
    let overflowOpen = opts && 'overflowOpen' in opts ? opts.overflowOpen : null;
    this[_lastIndexThatFits] = -1;
    if (!(overflowOpen !== null)) dart.assertFailed(null, I[0], 405, 15, "overflowOpen != null");
    if (!(isAbove !== null)) dart.assertFailed(null, I[0], 406, 15, "isAbove != null");
    this[_isAbove] = isAbove;
    this[_overflowOpen] = overflowOpen;
    text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.__proto__.new.call(this);
    ;
  }).prototype = text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.prototype;
  dart.addTypeTests(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout);
  dart.addTypeCaches(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout);
  dart.setMethodSignature(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.__proto__),
    [_layoutChildren]: dart.fnType(dart.void, []),
    [_shouldPaintChild]: dart.fnType(core.bool, [object.RenderObject, core.int]),
    [_placeChildren]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout, () => ({
    __proto__: dart.getGetters(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.__proto__),
    isAbove: core.bool,
    overflowOpen: core.bool
  }));
  dart.setSetterSignature(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout, () => ({
    __proto__: dart.getSetters(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.__proto__),
    isAbove: core.bool,
    overflowOpen: core.bool
  }));
  dart.setLibraryUri(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout, I[1]);
  dart.setFieldSignature(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout, () => ({
    __proto__: dart.getFields(text_selection_toolbar._RenderTextSelectionToolbarItemsLayout.__proto__),
    [_lastIndexThatFits]: dart.fieldType(core.int),
    [_isAbove]: dart.fieldType(core.bool),
    [_overflowOpen]: dart.fieldType(core.bool)
  }));
  var child$ = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarContainer.child");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  text_selection_toolbar._TextSelectionToolbarContainer = class _TextSelectionToolbarContainer extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new text_selection_toolbar._TextSelectionToolbarContainer.new({child: child, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
    }
    build(context) {
      return new material.Material.new({borderRadius: C[18] || CT.C18, clipBehavior: ui.Clip.antiAlias, elevation: 1.0, type: material.MaterialType.card, child: this.child, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
    }
  };
  (text_selection_toolbar._TextSelectionToolbarContainer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    text_selection_toolbar._TextSelectionToolbarContainer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._TextSelectionToolbarContainer.prototype;
  dart.addTypeTests(text_selection_toolbar._TextSelectionToolbarContainer);
  dart.addTypeCaches(text_selection_toolbar._TextSelectionToolbarContainer);
  dart.setMethodSignature(text_selection_toolbar._TextSelectionToolbarContainer, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._TextSelectionToolbarContainer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection_toolbar._TextSelectionToolbarContainer, I[1]);
  dart.setFieldSignature(text_selection_toolbar._TextSelectionToolbarContainer, () => ({
    __proto__: dart.getFields(text_selection_toolbar._TextSelectionToolbarContainer.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  var icon$ = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarOverflowButton.icon");
  var onPressed$ = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarOverflowButton.onPressed");
  var tooltip$ = dart.privateName(text_selection_toolbar, "_TextSelectionToolbarOverflowButton.tooltip");
  var Color_value = dart.privateName(ui, "Color.value");
  text_selection_toolbar._TextSelectionToolbarOverflowButton = class _TextSelectionToolbarOverflowButton extends framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get tooltip() {
      return this[tooltip$];
    }
    set tooltip(value) {
      super.tooltip = value;
    }
    static ['_#new#tearOff'](opts) {
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      return new text_selection_toolbar._TextSelectionToolbarOverflowButton.new({icon: icon, onPressed: onPressed, tooltip: tooltip, $creationLocationd_0dea112b090073317d4: C[21] || CT.C21});
    }
    build(context) {
      return new material.Material.new({type: material.MaterialType.card, color: C[22] || CT.C22, child: new icon_button.IconButton.new({icon: this.icon, onPressed: this.onPressed, tooltip: this.tooltip, $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
    }
  };
  (text_selection_toolbar._TextSelectionToolbarOverflowButton.new = function(opts) {
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[onPressed$] = onPressed;
    this[tooltip$] = tooltip;
    text_selection_toolbar._TextSelectionToolbarOverflowButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection_toolbar._TextSelectionToolbarOverflowButton.prototype;
  dart.addTypeTests(text_selection_toolbar._TextSelectionToolbarOverflowButton);
  dart.addTypeCaches(text_selection_toolbar._TextSelectionToolbarOverflowButton);
  dart.setMethodSignature(text_selection_toolbar._TextSelectionToolbarOverflowButton, () => ({
    __proto__: dart.getMethods(text_selection_toolbar._TextSelectionToolbarOverflowButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection_toolbar._TextSelectionToolbarOverflowButton, I[1]);
  dart.setFieldSignature(text_selection_toolbar._TextSelectionToolbarOverflowButton, () => ({
    __proto__: dart.getFields(text_selection_toolbar._TextSelectionToolbarOverflowButton.__proto__),
    icon: dart.finalFieldType(icon.Icon),
    onPressed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    tooltip: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineLazy(text_selection_toolbar, {
    /*text_selection_toolbar._kToolbarScreenPadding*/get _kToolbarScreenPadding() {
      return 8;
    },
    /*text_selection_toolbar._kToolbarHeight*/get _kToolbarHeight() {
      return 44;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/text_selection_toolbar.dart", {
    "package:flutter/src/material/text_selection_toolbar.dart": text_selection_toolbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection_toolbar.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/text_selection_toolbar.dart.lib.js"}');
  // Exports:
  return {
    src__material__text_selection_toolbar: text_selection_toolbar
  };
}));

//# sourceMappingURL=text_selection_toolbar.dart.lib.js.map
