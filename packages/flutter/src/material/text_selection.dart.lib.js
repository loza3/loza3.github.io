define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/rendering/selection.dart', 'packages/flutter/src/rendering/editable.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/material/text_selection_toolbar.dart', 'packages/flutter/src/material/text_selection_toolbar_text_button.dart', 'packages/flutter/src/rendering/custom_paint.dart'], (function load__packages__flutter__src__material__text_selection_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__rendering__selection$46dart, packages__flutter__src__rendering__editable$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__material__text_selection_toolbar$46dart, packages__flutter__src__material__text_selection_toolbar_text_button$46dart, packages__flutter__src__rendering__custom_paint$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const text_selection = packages__flutter__src__widgets__title$46dart.src__widgets__text_selection;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const text_selection_theme = packages__flutter__src__material__icon_button$46dart.src__material__text_selection_theme;
  const debug = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const selection = packages__flutter__src__rendering__selection$46dart.src__rendering__selection;
  const editable = packages__flutter__src__rendering__editable$46dart.src__rendering__editable;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const text_selection_toolbar = packages__flutter__src__material__text_selection_toolbar$46dart.src__material__text_selection_toolbar;
  const text_selection_toolbar_text_button = packages__flutter__src__material__text_selection_toolbar_text_button$46dart.src__material__text_selection_toolbar_text_button;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  var text_selection$ = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $isEmpty = dartx.isEmpty;
  var $entries = dartx.entries;
  var $asMap = dartx.asMap;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOf_TextSelectionToolbarItemData: () => (T.JSArrayOf_TextSelectionToolbarItemData = dart.constFn(_interceptors.JSArray$(text_selection$._TextSelectionToolbarItemData)))(),
    MapEntryOfint$_TextSelectionToolbarItemData: () => (T.MapEntryOfint$_TextSelectionToolbarItemData = dart.constFn(core.MapEntry$(core.int, text_selection$._TextSelectionToolbarItemData)))(),
    MapEntryOfint$_TextSelectionToolbarItemDataToTextSelectionToolbarTextButton: () => (T.MapEntryOfint$_TextSelectionToolbarItemDataToTextSelectionToolbarTextButton = dart.constFn(dart.fnType(text_selection_toolbar_text_button.TextSelectionToolbarTextButton, [T.MapEntryOfint$_TextSelectionToolbarItemData()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 22,
        [OffsetBase__dx]: 22
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionControlsToolbar",
        [_Location_column]: 12,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 16,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 14,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 26,
        [_Location_line]: 79,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: selection.TextSelectionHandleType.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: selection.TextSelectionHandleType.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 26,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: selection.TextSelectionHandleType.prototype,
        [_Enum__name]: "collapsed",
        [_Enum_index]: 2
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 22
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: -4,
        [OffsetBase__dx]: 11
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextSelectionControlsToolbar",
        [_Location_column]: 9,
        [_Location_line]: 132,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 193,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[14] || CT.C14,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 199,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[16] || CT.C16,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 251,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[18] || CT.C18,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 261,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextSelectionToolbarTextButton",
        [_Location_column]: 16,
        [_Location_line]: 258,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextSelectionToolbar",
        [_Location_column]: 12,
        [_Location_line]: 254,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
      });
    }
  }, false);
  var C = Array(22).fill(void 0);
  var I = [
    "package:flutter/src/material/text_selection.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_selection.dart"
  ];
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  text_selection$.MaterialTextSelectionControls = class MaterialTextSelectionControls extends text_selection.TextSelectionControls {
    getHandleSize(textLineHeight) {
      return C[0] || CT.C0;
    }
    buildToolbar(context, globalEditableRegion, textLineHeight, selectionMidpoint, endpoints, delegate, clipboardStatus, lastSecondaryTapDownPosition) {
      return new text_selection$._TextSelectionControlsToolbar.new({globalEditableRegion: globalEditableRegion, textLineHeight: textLineHeight, selectionMidpoint: selectionMidpoint, endpoints: endpoints, delegate: delegate, clipboardStatus: clipboardStatus, handleCut: this.canCut(delegate) ? dart.fn(() => this.handleCut(delegate), T.VoidTovoid()) : null, handleCopy: this.canCopy(delegate) ? dart.fn(() => this.handleCopy(delegate), T.VoidTovoid()) : null, handlePaste: this.canPaste(delegate) ? dart.fn(() => this.handlePaste(delegate), T.VoidTovoid()) : null, handleSelectAll: this.canSelectAll(delegate) ? dart.fn(() => this.handleSelectAll(delegate), T.VoidTovoid()) : null, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    buildHandle(context, type, textHeight, onTap = null) {
      let t0;
      let theme = theme$.Theme.of(context);
      let handleColor = (t0 = text_selection_theme.TextSelectionTheme.of(context).selectionHandleColor, t0 == null ? theme.colorScheme.primary : t0);
      let handle = new basic.SizedBox.new({width: 22, height: 22, child: new basic.CustomPaint.new({painter: new text_selection$._TextSelectionHandlePainter.new({color: handleColor}), child: new gesture_detector.GestureDetector.new({onTap: onTap, behavior: proxy_box.HitTestBehavior.translucent, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
      switch (type) {
        case C[6] || CT.C6:
          {
            return new basic.Transform.rotate({angle: 3.141592653589793 / 2.0, child: handle, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
          }
        case C[7] || CT.C7:
          {
            return handle;
          }
        case C[9] || CT.C9:
          {
            return new basic.Transform.rotate({angle: 3.141592653589793 / 4.0, child: handle, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
          }
      }
    }
    getHandleAnchor(type, textLineHeight) {
      switch (type) {
        case C[6] || CT.C6:
          {
            return C[10] || CT.C10;
          }
        case C[7] || CT.C7:
          {
            return ui.Offset.zero;
          }
        case C[9] || CT.C9:
          {
            return C[11] || CT.C11;
          }
      }
    }
    canSelectAll(delegate) {
      let value = delegate.textEditingValue;
      return delegate.selectAllEnabled && value.text[$isNotEmpty] && !(value.selection.start === 0 && value.selection.end === value.text.length);
    }
    static ['_#new#tearOff']() {
      return new text_selection$.MaterialTextSelectionControls.new();
    }
  };
  (text_selection$.MaterialTextSelectionControls.new = function() {
    ;
  }).prototype = text_selection$.MaterialTextSelectionControls.prototype;
  dart.addTypeTests(text_selection$.MaterialTextSelectionControls);
  dart.addTypeCaches(text_selection$.MaterialTextSelectionControls);
  dart.setMethodSignature(text_selection$.MaterialTextSelectionControls, () => ({
    __proto__: dart.getMethods(text_selection$.MaterialTextSelectionControls.__proto__),
    getHandleSize: dart.fnType(ui.Size, [core.double]),
    buildToolbar: dart.fnType(framework.Widget, [framework.BuildContext, ui.Rect, core.double, ui.Offset, core.List$(editable.TextSelectionPoint), text_input.TextSelectionDelegate, dart.nullable(text_selection.ClipboardStatusNotifier), dart.nullable(ui.Offset)]),
    buildHandle: dart.fnType(framework.Widget, [framework.BuildContext, selection.TextSelectionHandleType, core.double], [dart.nullable(dart.fnType(dart.void, []))]),
    getHandleAnchor: dart.fnType(ui.Offset, [selection.TextSelectionHandleType, core.double])
  }));
  dart.setLibraryUri(text_selection$.MaterialTextSelectionControls, I[0]);
  var label$ = dart.privateName(text_selection$, "_TextSelectionToolbarItemData.label");
  var onPressed$ = dart.privateName(text_selection$, "_TextSelectionToolbarItemData.onPressed");
  text_selection$._TextSelectionToolbarItemData = class _TextSelectionToolbarItemData extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    static ['_#new#tearOff'](opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      return new text_selection$._TextSelectionToolbarItemData.new({label: label, onPressed: onPressed});
    }
  };
  (text_selection$._TextSelectionToolbarItemData.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    this[label$] = label;
    this[onPressed$] = onPressed;
    ;
  }).prototype = text_selection$._TextSelectionToolbarItemData.prototype;
  dart.addTypeTests(text_selection$._TextSelectionToolbarItemData);
  dart.addTypeCaches(text_selection$._TextSelectionToolbarItemData);
  dart.setLibraryUri(text_selection$._TextSelectionToolbarItemData, I[0]);
  dart.setFieldSignature(text_selection$._TextSelectionToolbarItemData, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionToolbarItemData.__proto__),
    label: dart.finalFieldType(core.String),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  var clipboardStatus$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.clipboardStatus");
  var delegate$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.delegate");
  var endpoints$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.endpoints");
  var globalEditableRegion$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.globalEditableRegion");
  var handleCut$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.handleCut");
  var handleCopy$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.handleCopy");
  var handlePaste$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.handlePaste");
  var handleSelectAll$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.handleSelectAll");
  var selectionMidpoint$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.selectionMidpoint");
  var textLineHeight$ = dart.privateName(text_selection$, "_TextSelectionControlsToolbar.textLineHeight");
  text_selection$._TextSelectionControlsToolbar = class _TextSelectionControlsToolbar extends framework.StatefulWidget {
    get clipboardStatus() {
      return this[clipboardStatus$];
    }
    set clipboardStatus(value) {
      super.clipboardStatus = value;
    }
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    get endpoints() {
      return this[endpoints$];
    }
    set endpoints(value) {
      super.endpoints = value;
    }
    get globalEditableRegion() {
      return this[globalEditableRegion$];
    }
    set globalEditableRegion(value) {
      super.globalEditableRegion = value;
    }
    get handleCut() {
      return this[handleCut$];
    }
    set handleCut(value) {
      super.handleCut = value;
    }
    get handleCopy() {
      return this[handleCopy$];
    }
    set handleCopy(value) {
      super.handleCopy = value;
    }
    get handlePaste() {
      return this[handlePaste$];
    }
    set handlePaste(value) {
      super.handlePaste = value;
    }
    get handleSelectAll() {
      return this[handleSelectAll$];
    }
    set handleSelectAll(value) {
      super.handleSelectAll = value;
    }
    get selectionMidpoint() {
      return this[selectionMidpoint$];
    }
    set selectionMidpoint(value) {
      super.selectionMidpoint = value;
    }
    get textLineHeight() {
      return this[textLineHeight$];
    }
    set textLineHeight(value) {
      super.textLineHeight = value;
    }
    static ['_#new#tearOff'](opts) {
      let clipboardStatus = opts && 'clipboardStatus' in opts ? opts.clipboardStatus : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let endpoints = opts && 'endpoints' in opts ? opts.endpoints : null;
      let globalEditableRegion = opts && 'globalEditableRegion' in opts ? opts.globalEditableRegion : null;
      let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
      let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
      let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
      let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
      let selectionMidpoint = opts && 'selectionMidpoint' in opts ? opts.selectionMidpoint : null;
      let textLineHeight = opts && 'textLineHeight' in opts ? opts.textLineHeight : null;
      return new text_selection$._TextSelectionControlsToolbar.new({clipboardStatus: clipboardStatus, delegate: delegate, endpoints: endpoints, globalEditableRegion: globalEditableRegion, handleCut: handleCut, handleCopy: handleCopy, handlePaste: handlePaste, handleSelectAll: handleSelectAll, selectionMidpoint: selectionMidpoint, textLineHeight: textLineHeight, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    createState() {
      return new text_selection$._TextSelectionControlsToolbarState.new();
    }
  };
  (text_selection$._TextSelectionControlsToolbar.new = function(opts) {
    let clipboardStatus = opts && 'clipboardStatus' in opts ? opts.clipboardStatus : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let endpoints = opts && 'endpoints' in opts ? opts.endpoints : null;
    let globalEditableRegion = opts && 'globalEditableRegion' in opts ? opts.globalEditableRegion : null;
    let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
    let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
    let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
    let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
    let selectionMidpoint = opts && 'selectionMidpoint' in opts ? opts.selectionMidpoint : null;
    let textLineHeight = opts && 'textLineHeight' in opts ? opts.textLineHeight : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[clipboardStatus$] = clipboardStatus;
    this[delegate$] = delegate;
    this[endpoints$] = endpoints;
    this[globalEditableRegion$] = globalEditableRegion;
    this[handleCut$] = handleCut;
    this[handleCopy$] = handleCopy;
    this[handlePaste$] = handlePaste;
    this[handleSelectAll$] = handleSelectAll;
    this[selectionMidpoint$] = selectionMidpoint;
    this[textLineHeight$] = textLineHeight;
    text_selection$._TextSelectionControlsToolbar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_selection$._TextSelectionControlsToolbar.prototype;
  dart.addTypeTests(text_selection$._TextSelectionControlsToolbar);
  dart.addTypeCaches(text_selection$._TextSelectionControlsToolbar);
  dart.setMethodSignature(text_selection$._TextSelectionControlsToolbar, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionControlsToolbar.__proto__),
    createState: dart.fnType(text_selection$._TextSelectionControlsToolbarState, [])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionControlsToolbar, I[0]);
  dart.setFieldSignature(text_selection$._TextSelectionControlsToolbar, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionControlsToolbar.__proto__),
    clipboardStatus: dart.finalFieldType(dart.nullable(text_selection.ClipboardStatusNotifier)),
    delegate: dart.finalFieldType(text_input.TextSelectionDelegate),
    endpoints: dart.finalFieldType(core.List$(editable.TextSelectionPoint)),
    globalEditableRegion: dart.finalFieldType(ui.Rect),
    handleCut: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleCopy: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handlePaste: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleSelectAll: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    selectionMidpoint: dart.finalFieldType(ui.Offset),
    textLineHeight: dart.finalFieldType(core.double)
  }));
  var _onChangedClipboardStatus = dart.privateName(text_selection$, "_onChangedClipboardStatus");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(text_selection$._TextSelectionControlsToolbar) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(text_selection$._TextSelectionControlsToolbar)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(text_selection$._TextSelectionControlsToolbar));
  text_selection$._TextSelectionControlsToolbarState = class _TextSelectionControlsToolbarState extends State_TickerProviderStateMixin$36 {
    [_onChangedClipboardStatus]() {
      this.setState(dart.fn(() => {
      }, T.VoidTovoid()));
    }
    initState() {
      let t0;
      super.initState();
      t0 = this.widget.clipboardStatus;
      t0 == null ? null : t0.addListener(dart.bind(this, _onChangedClipboardStatus));
    }
    didUpdateWidget(oldWidget) {
      let t0, t0$;
      text_selection$._TextSelectionControlsToolbar.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.clipboardStatus, oldWidget.clipboardStatus)) {
        t0 = this.widget.clipboardStatus;
        t0 == null ? null : t0.addListener(dart.bind(this, _onChangedClipboardStatus));
        t0$ = oldWidget.clipboardStatus;
        t0$ == null ? null : t0$.removeListener(dart.bind(this, _onChangedClipboardStatus));
      }
    }
    dispose() {
      let t0;
      super.dispose();
      t0 = this.widget.clipboardStatus;
      t0 == null ? null : t0.removeListener(dart.bind(this, _onChangedClipboardStatus));
    }
    build(context) {
      let t0, t1;
      if (this.widget.handleCut == null && this.widget.handleCopy == null && this.widget.handlePaste == null && this.widget.handleSelectAll == null) {
        return C[13] || CT.C13;
      }
      if (this.widget.handlePaste != null && (t0 = this.widget.clipboardStatus, t0 == null ? null : t0.value) === text_selection.ClipboardStatus.unknown) {
        return C[15] || CT.C15;
      }
      let startTextSelectionPoint = this.widget.endpoints[$_get](0);
      let endTextSelectionPoint = this.widget.endpoints[$length] > 1 ? this.widget.endpoints[$_get](1) : this.widget.endpoints[$_get](0);
      let topAmountInEditableRegion = startTextSelectionPoint.point.dy - this.widget.textLineHeight;
      let anchorTop = math.max(core.num, topAmountInEditableRegion, 0) + this.widget.globalEditableRegion.top - 8;
      let anchorAbove = new ui.Offset.new(this.widget.globalEditableRegion.left + this.widget.selectionMidpoint.dx, anchorTop);
      let anchorBelow = new ui.Offset.new(this.widget.globalEditableRegion.left + this.widget.selectionMidpoint.dx, this.widget.globalEditableRegion.top + endTextSelectionPoint.point.dy + 20);
      if (!debug.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[1], 223, 12, "debugCheckHasMaterialLocalizations(context)");
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let itemDatas = (() => {
        let t0 = T.JSArrayOf_TextSelectionToolbarItemData().of([]);
        if (this.widget.handleCut != null) t0.push(new text_selection$._TextSelectionToolbarItemData.new({label: localizations.cutButtonLabel, onPressed: dart.nullCheck(this.widget.handleCut)}));
        if (this.widget.handleCopy != null) t0.push(new text_selection$._TextSelectionToolbarItemData.new({label: localizations.copyButtonLabel, onPressed: dart.nullCheck(this.widget.handleCopy)}));
        if (this.widget.handlePaste != null && (t1 = this.widget.clipboardStatus, t1 == null ? null : t1.value) === text_selection.ClipboardStatus.pasteable) t0.push(new text_selection$._TextSelectionToolbarItemData.new({label: localizations.pasteButtonLabel, onPressed: dart.nullCheck(this.widget.handlePaste)}));
        if (this.widget.handleSelectAll != null) t0.push(new text_selection$._TextSelectionToolbarItemData.new({label: localizations.selectAllButtonLabel, onPressed: dart.nullCheck(this.widget.handleSelectAll)}));
        return t0;
      })();
      if (itemDatas[$isEmpty]) {
        return C[17] || CT.C17;
      }
      return new text_selection_toolbar.TextSelectionToolbar.new({anchorAbove: anchorAbove, anchorBelow: anchorBelow, children: itemDatas[$asMap]()[$entries][$map](text_selection_toolbar_text_button.TextSelectionToolbarTextButton, dart.fn(entry => new text_selection_toolbar_text_button.TextSelectionToolbarTextButton.new({padding: text_selection_toolbar_text_button.TextSelectionToolbarTextButton.getPadding(entry.key, itemDatas[$length]), onPressed: entry.value.onPressed, child: new text.Text.new(entry.value.label, {$creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), T.MapEntryOfint$_TextSelectionToolbarItemDataToTextSelectionToolbarTextButton()))[$toList](), $creationLocationd_0dea112b090073317d4: C[21] || CT.C21});
    }
    static ['_#new#tearOff']() {
      return new text_selection$._TextSelectionControlsToolbarState.new();
    }
  };
  (text_selection$._TextSelectionControlsToolbarState.new = function() {
    text_selection$._TextSelectionControlsToolbarState.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._TextSelectionControlsToolbarState.prototype;
  dart.addTypeTests(text_selection$._TextSelectionControlsToolbarState);
  dart.addTypeCaches(text_selection$._TextSelectionControlsToolbarState);
  dart.setMethodSignature(text_selection$._TextSelectionControlsToolbarState, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionControlsToolbarState.__proto__),
    [_onChangedClipboardStatus]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionControlsToolbarState, I[0]);
  text_selection$._TextSelectionHandlePainter = class _TextSelectionHandlePainter extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      return new text_selection$._TextSelectionHandlePainter.new({color: color});
    }
    paint(canvas, size) {
      let t1, t1$;
      let paint = (t1 = ui.Paint.new(), (() => {
        t1.color = this.color;
        return t1;
      })());
      let radius = size.width / 2.0;
      let circle = new ui.Rect.fromCircle({center: new ui.Offset.new(radius, radius), radius: radius});
      let point = new ui.Rect.fromLTWH(0.0, 0.0, radius, radius);
      let path = (t1$ = ui.Path.new(), (() => {
        t1$.addOval(circle);
        t1$.addRect(point);
        return t1$;
      })());
      canvas.drawPath(path, paint);
    }
    shouldRepaint(oldPainter) {
      text_selection$._TextSelectionHandlePainter.as(oldPainter);
      return !this.color._equals(oldPainter.color);
    }
  };
  (text_selection$._TextSelectionHandlePainter.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    this.color = color;
    text_selection$._TextSelectionHandlePainter.__proto__.new.call(this);
    ;
  }).prototype = text_selection$._TextSelectionHandlePainter.prototype;
  dart.addTypeTests(text_selection$._TextSelectionHandlePainter);
  dart.addTypeCaches(text_selection$._TextSelectionHandlePainter);
  dart.setMethodSignature(text_selection$._TextSelectionHandlePainter, () => ({
    __proto__: dart.getMethods(text_selection$._TextSelectionHandlePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(text_selection$._TextSelectionHandlePainter, I[0]);
  dart.setFieldSignature(text_selection$._TextSelectionHandlePainter, () => ({
    __proto__: dart.getFields(text_selection$._TextSelectionHandlePainter.__proto__),
    color: dart.finalFieldType(ui.Color)
  }));
  dart.defineLazy(text_selection$, {
    /*text_selection$._kHandleSize*/get _kHandleSize() {
      return 22;
    },
    /*text_selection$._kToolbarContentDistanceBelow*/get _kToolbarContentDistanceBelow() {
      return 20;
    },
    /*text_selection$._kToolbarContentDistance*/get _kToolbarContentDistance() {
      return 8;
    },
    /*text_selection$.materialTextSelectionControls*/get materialTextSelectionControls() {
      return new text_selection$.MaterialTextSelectionControls.new();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/text_selection.dart", {
    "package:flutter/src/material/text_selection.dart": text_selection$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_selection.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/text_selection.dart.lib.js"}');
  // Exports:
  return {
    src__material__text_selection: text_selection$
  };
}));

//# sourceMappingURL=text_selection.dart.lib.js.map
