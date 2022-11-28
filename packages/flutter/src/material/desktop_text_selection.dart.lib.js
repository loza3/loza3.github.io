define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/editable.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/rendering/selection.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/borders.dart'], (function load__packages__flutter__src__material__desktop_text_selection_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__editable$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__rendering__selection$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__desktop_text_selection_toolbar_layout_delegate$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__borders$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text_selection = packages__flutter__src__widgets__title$46dart.src__widgets__text_selection;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const text$ = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const editable = packages__flutter__src__rendering__editable$46dart.src__rendering__editable;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const selection = packages__flutter__src__rendering__selection$46dart.src__rendering__selection;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const debug$ = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const desktop_text_selection_toolbar_layout_delegate = packages__flutter__src__widgets__desktop_text_selection_toolbar_layout_delegate$46dart.src__widgets__desktop_text_selection_toolbar_layout_delegate;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  var desktop_text_selection = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    StringAndFnTovoid: () => (T.StringAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.String, T.VoidTovoid()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DesktopTextSelectionControlsToolbar",
        [_Location_column]: 12,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 18,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DesktopTextSelectionControlsToolbar",
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 150,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[5] || CT.C5,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DesktopTextSelectionToolbarButton",
        [_Location_column]: 52,
        [_Location_line]: 172,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 195,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[8] || CT.C8,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DesktopTextSelectionToolbar",
        [_Location_column]: 12,
        [_Location_line]: 198,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DesktopTextSelectionToolbar",
        [_Location_column]: 9,
        [_Location_line]: 221,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 7,
        [Radius_x]: 7
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[12] || CT.C12,
        [BorderRadius_bottomLeft]: C[12] || CT.C12,
        [BorderRadius_topRight]: C[12] || CT.C12,
        [BorderRadius_topLeft]: C[12] || CT.C12
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 14,
        [_Location_line]: 241,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 239,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 48,
        [_Location_line]: 270,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomSingleChildLayout",
        [_Location_column]: 14,
        [_Location_line]: 266,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 259,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 307,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DesktopTextSelectionToolbarButton",
        [_Location_column]: 9,
        [_Location_line]: 296,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DesktopTextSelectionToolbarButton",
        [_Location_column]: 3,
        [_Location_line]: 303,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[23] || CT.C23,
        [BorderSide_style]: C[24] || CT.C24,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[25] || CT.C25
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[27] || CT.C27,
        [BorderRadius_bottomLeft]: C[27] || CT.C27,
        [BorderRadius_topRight]: C[27] || CT.C27,
        [BorderRadius_topLeft]: C[27] || CT.C27
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[22] || CT.C22,
        [RoundedRectangleBorder_borderRadius]: C[26] || CT.C26
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 36,
        [OffsetBase__dx]: 48
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 14,
        [_Location_line]: 332,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 330,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[32] || CT.C32,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    }
  }, false);
  var C = Array(34).fill(void 0);
  var I = [
    "package:flutter/src/material/desktop_text_selection.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/desktop_text_selection.dart"
  ];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  desktop_text_selection._DesktopTextSelectionControls = class _DesktopTextSelectionControls extends text_selection.TextSelectionControls {
    getHandleSize(textLineHeight) {
      return ui.Size.zero;
    }
    buildToolbar(context, globalEditableRegion, textLineHeight, selectionMidpoint, endpoints, delegate, clipboardStatus, lastSecondaryTapDownPosition) {
      return new desktop_text_selection._DesktopTextSelectionControlsToolbar.new({clipboardStatus: clipboardStatus, endpoints: endpoints, globalEditableRegion: globalEditableRegion, handleCut: this.canCut(delegate) ? dart.fn(() => this.handleCut(delegate), T.VoidTovoid()) : null, handleCopy: this.canCopy(delegate) ? dart.fn(() => this.handleCopy(delegate), T.VoidTovoid()) : null, handlePaste: this.canPaste(delegate) ? dart.fn(() => this.handlePaste(delegate), T.VoidTovoid()) : null, handleSelectAll: this.canSelectAll(delegate) ? dart.fn(() => this.handleSelectAll(delegate), T.VoidTovoid()) : null, selectionMidpoint: selectionMidpoint, lastSecondaryTapDownPosition: lastSecondaryTapDownPosition, textLineHeight: textLineHeight, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    buildHandle(context, type, textLineHeight, onTap = null) {
      return C[1] || CT.C1;
    }
    getHandleAnchor(type, textLineHeight) {
      return ui.Offset.zero;
    }
    canSelectAll(delegate) {
      let value = delegate.textEditingValue;
      return delegate.selectAllEnabled && value.text[$isNotEmpty] && !(value.selection.start === 0 && value.selection.end === value.text.length);
    }
    handleSelectAll(delegate) {
      super.handleSelectAll(delegate);
      delegate.hideToolbar();
    }
    static ['_#new#tearOff']() {
      return new desktop_text_selection._DesktopTextSelectionControls.new();
    }
  };
  (desktop_text_selection._DesktopTextSelectionControls.new = function() {
    ;
  }).prototype = desktop_text_selection._DesktopTextSelectionControls.prototype;
  dart.addTypeTests(desktop_text_selection._DesktopTextSelectionControls);
  dart.addTypeCaches(desktop_text_selection._DesktopTextSelectionControls);
  dart.setMethodSignature(desktop_text_selection._DesktopTextSelectionControls, () => ({
    __proto__: dart.getMethods(desktop_text_selection._DesktopTextSelectionControls.__proto__),
    getHandleSize: dart.fnType(ui.Size, [core.double]),
    buildToolbar: dart.fnType(framework.Widget, [framework.BuildContext, ui.Rect, core.double, ui.Offset, core.List$(editable.TextSelectionPoint), text_input.TextSelectionDelegate, dart.nullable(text_selection.ClipboardStatusNotifier), dart.nullable(ui.Offset)]),
    buildHandle: dart.fnType(framework.Widget, [framework.BuildContext, selection.TextSelectionHandleType, core.double], [dart.nullable(dart.fnType(dart.void, []))]),
    getHandleAnchor: dart.fnType(ui.Offset, [selection.TextSelectionHandleType, core.double])
  }));
  dart.setLibraryUri(desktop_text_selection._DesktopTextSelectionControls, I[0]);
  var clipboardStatus$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.clipboardStatus");
  var endpoints$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.endpoints");
  var globalEditableRegion$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.globalEditableRegion");
  var handleCopy$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.handleCopy");
  var handleCut$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.handleCut");
  var handlePaste$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.handlePaste");
  var handleSelectAll$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.handleSelectAll");
  var lastSecondaryTapDownPosition$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.lastSecondaryTapDownPosition");
  var selectionMidpoint$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.selectionMidpoint");
  var textLineHeight$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionControlsToolbar.textLineHeight");
  desktop_text_selection._DesktopTextSelectionControlsToolbar = class _DesktopTextSelectionControlsToolbar extends framework.StatefulWidget {
    get clipboardStatus() {
      return this[clipboardStatus$];
    }
    set clipboardStatus(value) {
      super.clipboardStatus = value;
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
    get handleCopy() {
      return this[handleCopy$];
    }
    set handleCopy(value) {
      super.handleCopy = value;
    }
    get handleCut() {
      return this[handleCut$];
    }
    set handleCut(value) {
      super.handleCut = value;
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
    get lastSecondaryTapDownPosition() {
      return this[lastSecondaryTapDownPosition$];
    }
    set lastSecondaryTapDownPosition(value) {
      super.lastSecondaryTapDownPosition = value;
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
      let endpoints = opts && 'endpoints' in opts ? opts.endpoints : null;
      let globalEditableRegion = opts && 'globalEditableRegion' in opts ? opts.globalEditableRegion : null;
      let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
      let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
      let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
      let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
      let selectionMidpoint = opts && 'selectionMidpoint' in opts ? opts.selectionMidpoint : null;
      let textLineHeight = opts && 'textLineHeight' in opts ? opts.textLineHeight : null;
      let lastSecondaryTapDownPosition = opts && 'lastSecondaryTapDownPosition' in opts ? opts.lastSecondaryTapDownPosition : null;
      return new desktop_text_selection._DesktopTextSelectionControlsToolbar.new({clipboardStatus: clipboardStatus, endpoints: endpoints, globalEditableRegion: globalEditableRegion, handleCopy: handleCopy, handleCut: handleCut, handlePaste: handlePaste, handleSelectAll: handleSelectAll, selectionMidpoint: selectionMidpoint, textLineHeight: textLineHeight, lastSecondaryTapDownPosition: lastSecondaryTapDownPosition, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    createState() {
      return new desktop_text_selection._DesktopTextSelectionControlsToolbarState.new();
    }
  };
  (desktop_text_selection._DesktopTextSelectionControlsToolbar.new = function(opts) {
    let clipboardStatus = opts && 'clipboardStatus' in opts ? opts.clipboardStatus : null;
    let endpoints = opts && 'endpoints' in opts ? opts.endpoints : null;
    let globalEditableRegion = opts && 'globalEditableRegion' in opts ? opts.globalEditableRegion : null;
    let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
    let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
    let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
    let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
    let selectionMidpoint = opts && 'selectionMidpoint' in opts ? opts.selectionMidpoint : null;
    let textLineHeight = opts && 'textLineHeight' in opts ? opts.textLineHeight : null;
    let lastSecondaryTapDownPosition = opts && 'lastSecondaryTapDownPosition' in opts ? opts.lastSecondaryTapDownPosition : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[clipboardStatus$] = clipboardStatus;
    this[endpoints$] = endpoints;
    this[globalEditableRegion$] = globalEditableRegion;
    this[handleCopy$] = handleCopy;
    this[handleCut$] = handleCut;
    this[handlePaste$] = handlePaste;
    this[handleSelectAll$] = handleSelectAll;
    this[selectionMidpoint$] = selectionMidpoint;
    this[textLineHeight$] = textLineHeight;
    this[lastSecondaryTapDownPosition$] = lastSecondaryTapDownPosition;
    desktop_text_selection._DesktopTextSelectionControlsToolbar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = desktop_text_selection._DesktopTextSelectionControlsToolbar.prototype;
  dart.addTypeTests(desktop_text_selection._DesktopTextSelectionControlsToolbar);
  dart.addTypeCaches(desktop_text_selection._DesktopTextSelectionControlsToolbar);
  dart.setMethodSignature(desktop_text_selection._DesktopTextSelectionControlsToolbar, () => ({
    __proto__: dart.getMethods(desktop_text_selection._DesktopTextSelectionControlsToolbar.__proto__),
    createState: dart.fnType(desktop_text_selection._DesktopTextSelectionControlsToolbarState, [])
  }));
  dart.setLibraryUri(desktop_text_selection._DesktopTextSelectionControlsToolbar, I[0]);
  dart.setFieldSignature(desktop_text_selection._DesktopTextSelectionControlsToolbar, () => ({
    __proto__: dart.getFields(desktop_text_selection._DesktopTextSelectionControlsToolbar.__proto__),
    clipboardStatus: dart.finalFieldType(dart.nullable(text_selection.ClipboardStatusNotifier)),
    endpoints: dart.finalFieldType(core.List$(editable.TextSelectionPoint)),
    globalEditableRegion: dart.finalFieldType(ui.Rect),
    handleCopy: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleCut: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handlePaste: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    handleSelectAll: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    lastSecondaryTapDownPosition: dart.finalFieldType(dart.nullable(ui.Offset)),
    selectionMidpoint: dart.finalFieldType(ui.Offset),
    textLineHeight: dart.finalFieldType(core.double)
  }));
  var _onChangedClipboardStatus = dart.privateName(desktop_text_selection, "_onChangedClipboardStatus");
  desktop_text_selection._DesktopTextSelectionControlsToolbarState = class _DesktopTextSelectionControlsToolbarState extends framework.State$(desktop_text_selection._DesktopTextSelectionControlsToolbar) {
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
      desktop_text_selection._DesktopTextSelectionControlsToolbar.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(oldWidget.clipboardStatus, this.widget.clipboardStatus)) {
        t0 = oldWidget.clipboardStatus;
        t0 == null ? null : t0.removeListener(dart.bind(this, _onChangedClipboardStatus));
        t0$ = this.widget.clipboardStatus;
        t0$ == null ? null : t0$.addListener(dart.bind(this, _onChangedClipboardStatus));
      }
    }
    dispose() {
      let t0;
      super.dispose();
      t0 = this.widget.clipboardStatus;
      t0 == null ? null : t0.removeListener(dart.bind(this, _onChangedClipboardStatus));
    }
    build(context) {
      let t0, t0$, t0$0;
      if (this.widget.handlePaste != null && (t0 = this.widget.clipboardStatus, t0 == null ? null : t0.value) === text_selection.ClipboardStatus.unknown) {
        return C[4] || CT.C4;
      }
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[1], 153, 12, "debugCheckHasMediaQuery(context)");
      let mediaQuery = media_query.MediaQuery.of(context);
      let midpointAnchor = new ui.Offset.new(math.clampDouble(this.widget.selectionMidpoint.dx - this.widget.globalEditableRegion.left, mediaQuery.padding.left, mediaQuery.size.width - mediaQuery.padding.right), this.widget.selectionMidpoint.dy - this.widget.globalEditableRegion.top);
      if (!debug$.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[1], 164, 12, "debugCheckHasMaterialLocalizations(context)");
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let items = T.JSArrayOfWidget().of([]);
      function addToolbarButton(text, onPressed) {
        items[$add](new desktop_text_selection._DesktopTextSelectionToolbarButton.text({context: context, onPressed: onPressed, text: text, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}));
      }
      dart.fn(addToolbarButton, T.StringAndFnTovoid());
      if (this.widget.handleCut != null) {
        addToolbarButton(localizations.cutButtonLabel, dart.nullCheck(this.widget.handleCut));
      }
      if (this.widget.handleCopy != null) {
        addToolbarButton(localizations.copyButtonLabel, dart.nullCheck(this.widget.handleCopy));
      }
      if (this.widget.handlePaste != null && (t0$ = this.widget.clipboardStatus, t0$ == null ? null : t0$.value) === text_selection.ClipboardStatus.pasteable) {
        addToolbarButton(localizations.pasteButtonLabel, dart.nullCheck(this.widget.handlePaste));
      }
      if (this.widget.handleSelectAll != null) {
        addToolbarButton(localizations.selectAllButtonLabel, dart.nullCheck(this.widget.handleSelectAll));
      }
      if (items[$isEmpty]) {
        return C[7] || CT.C7;
      }
      return new desktop_text_selection._DesktopTextSelectionToolbar.new({anchor: (t0$0 = this.widget.lastSecondaryTapDownPosition, t0$0 == null ? midpointAnchor : t0$0), children: items, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    static ['_#new#tearOff']() {
      return new desktop_text_selection._DesktopTextSelectionControlsToolbarState.new();
    }
  };
  (desktop_text_selection._DesktopTextSelectionControlsToolbarState.new = function() {
    desktop_text_selection._DesktopTextSelectionControlsToolbarState.__proto__.new.call(this);
    ;
  }).prototype = desktop_text_selection._DesktopTextSelectionControlsToolbarState.prototype;
  dart.addTypeTests(desktop_text_selection._DesktopTextSelectionControlsToolbarState);
  dart.addTypeCaches(desktop_text_selection._DesktopTextSelectionControlsToolbarState);
  dart.setMethodSignature(desktop_text_selection._DesktopTextSelectionControlsToolbarState, () => ({
    __proto__: dart.getMethods(desktop_text_selection._DesktopTextSelectionControlsToolbarState.__proto__),
    [_onChangedClipboardStatus]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(desktop_text_selection._DesktopTextSelectionControlsToolbarState, I[0]);
  var anchor$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionToolbar.anchor");
  var children$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionToolbar.children");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  desktop_text_selection._DesktopTextSelectionToolbar = class _DesktopTextSelectionToolbar extends framework.StatelessWidget {
    get anchor() {
      return this[anchor$];
    }
    set anchor(value) {
      super.anchor = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    static ['_#new#tearOff'](opts) {
      let anchor = opts && 'anchor' in opts ? opts.anchor : null;
      let children = opts && 'children' in opts ? opts.children : null;
      return new desktop_text_selection._DesktopTextSelectionToolbar.new({anchor: anchor, children: children, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    static _defaultToolbarBuilder(context, child) {
      return new basic.SizedBox.new({width: 222, child: new material.Material.new({borderRadius: C[11] || CT.C11, clipBehavior: ui.Clip.antiAlias, elevation: 1.0, type: material.MaterialType.card, child: child, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    build(context) {
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[1], 253, 12, "debugCheckHasMediaQuery(context)");
      let mediaQuery = media_query.MediaQuery.of(context);
      let paddingAbove = mediaQuery.padding.top + 8;
      let localAdjustment = new ui.Offset.new(8, paddingAbove);
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(8, paddingAbove, 8, 8), child: new basic.CustomSingleChildLayout.new({delegate: new desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.new({anchor: this.anchor['-'](localAdjustment)}), child: desktop_text_selection._DesktopTextSelectionToolbar._defaultToolbarBuilder(context, new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: this.children, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15})), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
    }
  };
  (desktop_text_selection._DesktopTextSelectionToolbar.new = function(opts) {
    let anchor = opts && 'anchor' in opts ? opts.anchor : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[anchor$] = anchor;
    this[children$] = children;
    if (!(children[$length] > 0)) dart.assertFailed(null, I[1], 224, 15, "children.length > 0");
    desktop_text_selection._DesktopTextSelectionToolbar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = desktop_text_selection._DesktopTextSelectionToolbar.prototype;
  dart.addTypeTests(desktop_text_selection._DesktopTextSelectionToolbar);
  dart.addTypeCaches(desktop_text_selection._DesktopTextSelectionToolbar);
  dart.setMethodSignature(desktop_text_selection._DesktopTextSelectionToolbar, () => ({
    __proto__: dart.getMethods(desktop_text_selection._DesktopTextSelectionToolbar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(desktop_text_selection._DesktopTextSelectionToolbar, () => ['_defaultToolbarBuilder']);
  dart.setLibraryUri(desktop_text_selection._DesktopTextSelectionToolbar, I[0]);
  dart.setFieldSignature(desktop_text_selection._DesktopTextSelectionToolbar, () => ({
    __proto__: dart.getFields(desktop_text_selection._DesktopTextSelectionToolbar.__proto__),
    anchor: dart.finalFieldType(ui.Offset),
    children: dart.finalFieldType(core.List$(framework.Widget))
  }));
  var onPressed$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionToolbarButton.onPressed");
  var child$ = dart.privateName(desktop_text_selection, "_DesktopTextSelectionToolbarButton.child");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  desktop_text_selection._DesktopTextSelectionToolbarButton = class _DesktopTextSelectionToolbarButton extends framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new desktop_text_selection._DesktopTextSelectionToolbarButton.new({onPressed: onPressed, child: child, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
    static ['_#text#tearOff'](opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let text = opts && 'text' in opts ? opts.text : null;
      return new desktop_text_selection._DesktopTextSelectionToolbarButton.text({context: context, onPressed: onPressed, text: text, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let isDark = theme.colorScheme.brightness === ui.Brightness.dark;
      let primary = isDark ? colors.Colors.white : colors.Colors.black87;
      return new basic.SizedBox.new({width: 1 / 0, child: new text_button.TextButton.new({style: text_button.TextButton.styleFrom({alignment: alignment.Alignment.centerLeft, enabledMouseCursor: mouse_cursor.SystemMouseCursors.basic, disabledMouseCursor: mouse_cursor.SystemMouseCursors.basic, primary: primary, shape: C[21] || CT.C21, minimumSize: C[28] || CT.C28, padding: desktop_text_selection._kToolbarButtonPadding}), onPressed: this.onPressed, child: this.child, $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
    }
  };
  (desktop_text_selection._DesktopTextSelectionToolbarButton.new = function(opts) {
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[child$] = child;
    desktop_text_selection._DesktopTextSelectionToolbarButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = desktop_text_selection._DesktopTextSelectionToolbarButton.prototype;
  (desktop_text_selection._DesktopTextSelectionToolbarButton.text = function(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[child$] = new text$.Text.new(text, {overflow: text_painter.TextOverflow.ellipsis, style: desktop_text_selection._kToolbarButtonFontStyle.copyWith({color: theme$.Theme.of(context).colorScheme.brightness === ui.Brightness.dark ? colors.Colors.white : colors.Colors.black87}), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
    desktop_text_selection._DesktopTextSelectionToolbarButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = desktop_text_selection._DesktopTextSelectionToolbarButton.prototype;
  dart.addTypeTests(desktop_text_selection._DesktopTextSelectionToolbarButton);
  dart.addTypeCaches(desktop_text_selection._DesktopTextSelectionToolbarButton);
  dart.setMethodSignature(desktop_text_selection._DesktopTextSelectionToolbarButton, () => ({
    __proto__: dart.getMethods(desktop_text_selection._DesktopTextSelectionToolbarButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(desktop_text_selection._DesktopTextSelectionToolbarButton, I[0]);
  dart.setFieldSignature(desktop_text_selection._DesktopTextSelectionToolbarButton, () => ({
    __proto__: dart.getFields(desktop_text_selection._DesktopTextSelectionToolbarButton.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    child: dart.finalFieldType(framework.Widget)
  }));
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  dart.defineLazy(desktop_text_selection, {
    /*desktop_text_selection._kToolbarScreenPadding*/get _kToolbarScreenPadding() {
      return 8;
    },
    /*desktop_text_selection._kToolbarWidth*/get _kToolbarWidth() {
      return 222;
    },
    /*desktop_text_selection.desktopTextSelectionControls*/get desktopTextSelectionControls() {
      return new desktop_text_selection._DesktopTextSelectionControls.new();
    },
    /*desktop_text_selection._kToolbarButtonFontStyle*/get _kToolbarButtonFontStyle() {
      return C[31] || CT.C31;
    },
    /*desktop_text_selection._kToolbarButtonPadding*/get _kToolbarButtonPadding() {
      return C[33] || CT.C33;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/desktop_text_selection.dart", {
    "package:flutter/src/material/desktop_text_selection.dart": desktop_text_selection
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["desktop_text_selection.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/desktop_text_selection.dart.lib.js"}');
  // Exports:
  return {
    src__material__desktop_text_selection: desktop_text_selection
  };
}));

//# sourceMappingURL=desktop_text_selection.dart.lib.js.map
