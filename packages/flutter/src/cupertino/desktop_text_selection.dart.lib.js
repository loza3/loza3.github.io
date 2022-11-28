define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/editable.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/rendering/selection.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/cupertino/debug.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/cupertino/button.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/gestures/events.dart'], (function load__packages__flutter__src__cupertino__desktop_text_selection_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__editable$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__rendering__selection$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__cupertino__debug$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__desktop_text_selection_toolbar_layout_delegate$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__cupertino__button$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__gestures__events$46dart) {
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
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const text$ = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const editable = packages__flutter__src__rendering__editable$46dart.src__rendering__editable;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const selection = packages__flutter__src__rendering__selection$46dart.src__rendering__selection;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const localizations$ = packages__flutter__src__cupertino__debug$46dart.src__cupertino__localizations;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const desktop_text_selection_toolbar_layout_delegate = packages__flutter__src__widgets__desktop_text_selection_toolbar_layout_delegate$46dart.src__widgets__desktop_text_selection_toolbar_layout_delegate;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const theme = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__theme;
  const button = packages__flutter__src__cupertino__button$46dart.src__cupertino__button;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
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
        [_Location_name]: "_CupertinoDesktopTextSelectionControlsToolbar",
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 18,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
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
        [_Location_name]: "_CupertinoDesktopTextSelectionControlsToolbar",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 154,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
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
        [_Location_name]: "SizedBox",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoDesktopTextSelectionToolbarButton",
        [_Location_column]: 61,
        [_Location_line]: 181,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 204,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[9] || CT.C9,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoDesktopTextSelectionToolbar",
        [_Location_column]: 12,
        [_Location_line]: 207,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoDesktopTextSelectionToolbar",
        [_Location_column]: 9,
        [_Location_line]: 230,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[13] || CT.C13,
        [BorderRadius_bottomLeft]: C[13] || CT.C13,
        [BorderRadius_topRight]: C[13] || CT.C13,
        [BorderRadius_topLeft]: C[13] || CT.C13
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 258,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 249,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 48,
        [_Location_line]: 288,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomSingleChildLayout",
        [_Location_column]: 14,
        [_Location_line]: 284,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 277,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[21] || CT.C21,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[22] || CT.C22,
        [CupertinoDynamicColor_darkElevatedColor]: C[21] || CT.C21,
        [CupertinoDynamicColor_elevatedColor]: C[22] || CT.C22,
        [CupertinoDynamicColor_darkHighContrastColor]: C[21] || CT.C21,
        [CupertinoDynamicColor_highContrastColor]: C[22] || CT.C22,
        [CupertinoDynamicColor_darkColor]: C[21] || CT.C21,
        [CupertinoDynamicColor_color]: C[22] || CT.C22,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C[22] || CT.C22
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 329,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoDesktopTextSelectionToolbarButton",
        [_Location_column]: 9,
        [_Location_line]: 318,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoDesktopTextSelectionToolbarButton",
        [_Location_column]: 3,
        [_Location_line]: 325,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoButton",
        [_Location_column]: 16,
        [_Location_line]: 372,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MouseRegion",
        [_Location_column]: 14,
        [_Location_line]: 369,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 367,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283453778.0
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290493371.0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[31] || CT.C31,
        [CupertinoDynamicColor_darkElevatedColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_elevatedColor]: C[31] || CT.C31,
        [CupertinoDynamicColor_darkHighContrastColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_highContrastColor]: C[31] || CT.C31,
        [CupertinoDynamicColor_darkColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_color]: C[31] || CT.C31,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C[31] || CT.C31
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281346344.0
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293716198.0
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[33] || CT.C33,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[34] || CT.C34,
        [CupertinoDynamicColor_darkElevatedColor]: C[33] || CT.C33,
        [CupertinoDynamicColor_elevatedColor]: C[34] || CT.C34,
        [CupertinoDynamicColor_darkHighContrastColor]: C[33] || CT.C33,
        [CupertinoDynamicColor_highContrastColor]: C[34] || CT.C34,
        [CupertinoDynamicColor_darkColor]: C[33] || CT.C33,
        [CupertinoDynamicColor_color]: C[34] || CT.C34,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C[34] || CT.C34
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C35() {
      return C[35] = dart.const({
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
        [TextStyle_fontWeight]: C[36] || CT.C36,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    }
  }, false);
  var C = Array(38).fill(void 0);
  var I = [
    "package:flutter/src/cupertino/desktop_text_selection.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/desktop_text_selection.dart"
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
  desktop_text_selection._CupertinoDesktopTextSelectionControls = class _CupertinoDesktopTextSelectionControls extends text_selection.TextSelectionControls {
    getHandleSize(textLineHeight) {
      return ui.Size.zero;
    }
    buildToolbar(context, globalEditableRegion, textLineHeight, selectionMidpoint, endpoints, delegate, clipboardStatus, lastSecondaryTapDownPosition) {
      return new desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar.new({clipboardStatus: clipboardStatus, endpoints: endpoints, globalEditableRegion: globalEditableRegion, handleCut: this.canCut(delegate) ? dart.fn(() => this.handleCut(delegate), T.VoidTovoid()) : null, handleCopy: this.canCopy(delegate) ? dart.fn(() => this.handleCopy(delegate), T.VoidTovoid()) : null, handlePaste: this.canPaste(delegate) ? dart.fn(() => this.handlePaste(delegate), T.VoidTovoid()) : null, handleSelectAll: this.canSelectAll(delegate) ? dart.fn(() => this.handleSelectAll(delegate), T.VoidTovoid()) : null, selectionMidpoint: selectionMidpoint, lastSecondaryTapDownPosition: lastSecondaryTapDownPosition, textLineHeight: textLineHeight, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    buildHandle(context, type, textLineHeight, onTap = null) {
      return C[1] || CT.C1;
    }
    getHandleAnchor(type, textLineHeight) {
      return ui.Offset.zero;
    }
    handleSelectAll(delegate) {
      super.handleSelectAll(delegate);
      delegate.hideToolbar();
    }
    static ['_#new#tearOff']() {
      return new desktop_text_selection._CupertinoDesktopTextSelectionControls.new();
    }
  };
  (desktop_text_selection._CupertinoDesktopTextSelectionControls.new = function() {
    ;
  }).prototype = desktop_text_selection._CupertinoDesktopTextSelectionControls.prototype;
  dart.addTypeTests(desktop_text_selection._CupertinoDesktopTextSelectionControls);
  dart.addTypeCaches(desktop_text_selection._CupertinoDesktopTextSelectionControls);
  dart.setMethodSignature(desktop_text_selection._CupertinoDesktopTextSelectionControls, () => ({
    __proto__: dart.getMethods(desktop_text_selection._CupertinoDesktopTextSelectionControls.__proto__),
    getHandleSize: dart.fnType(ui.Size, [core.double]),
    buildToolbar: dart.fnType(framework.Widget, [framework.BuildContext, ui.Rect, core.double, ui.Offset, core.List$(editable.TextSelectionPoint), text_input.TextSelectionDelegate, dart.nullable(text_selection.ClipboardStatusNotifier), dart.nullable(ui.Offset)]),
    buildHandle: dart.fnType(framework.Widget, [framework.BuildContext, selection.TextSelectionHandleType, core.double], [dart.nullable(dart.fnType(dart.void, []))]),
    getHandleAnchor: dart.fnType(ui.Offset, [selection.TextSelectionHandleType, core.double])
  }));
  dart.setLibraryUri(desktop_text_selection._CupertinoDesktopTextSelectionControls, I[0]);
  var clipboardStatus$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.clipboardStatus");
  var endpoints$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.endpoints");
  var globalEditableRegion$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.globalEditableRegion");
  var handleCopy$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.handleCopy");
  var handleCut$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.handleCut");
  var handlePaste$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.handlePaste");
  var handleSelectAll$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.handleSelectAll");
  var lastSecondaryTapDownPosition$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.lastSecondaryTapDownPosition");
  var selectionMidpoint$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.selectionMidpoint");
  var textLineHeight$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionControlsToolbar.textLineHeight");
  desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar = class _CupertinoDesktopTextSelectionControlsToolbar extends framework.StatefulWidget {
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
      return new desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar.new({clipboardStatus: clipboardStatus, endpoints: endpoints, globalEditableRegion: globalEditableRegion, handleCopy: handleCopy, handleCut: handleCut, handlePaste: handlePaste, handleSelectAll: handleSelectAll, selectionMidpoint: selectionMidpoint, textLineHeight: textLineHeight, lastSecondaryTapDownPosition: lastSecondaryTapDownPosition, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    createState() {
      return new desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState.new();
    }
  };
  (desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar.new = function(opts) {
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
    desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar.prototype;
  dart.addTypeTests(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar);
  dart.addTypeCaches(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar);
  dart.setMethodSignature(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar, () => ({
    __proto__: dart.getMethods(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar.__proto__),
    createState: dart.fnType(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState, [])
  }));
  dart.setLibraryUri(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar, I[0]);
  dart.setFieldSignature(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar, () => ({
    __proto__: dart.getFields(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar.__proto__),
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
  desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState = class _CupertinoDesktopTextSelectionControlsToolbarState extends framework.State$(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar) {
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
      desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbar.as(oldWidget);
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
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[1], 157, 12, "debugCheckHasMediaQuery(context)");
      let mediaQuery = media_query.MediaQuery.of(context);
      let midpointAnchor = new ui.Offset.new(math.clampDouble(this.widget.selectionMidpoint.dx - this.widget.globalEditableRegion.left, mediaQuery.padding.left, mediaQuery.size.width - mediaQuery.padding.right), this.widget.selectionMidpoint.dy - this.widget.globalEditableRegion.top);
      let items = T.JSArrayOfWidget().of([]);
      let localizations = localizations$.CupertinoLocalizations.of(context);
      let onePhysicalPixelVerticalDivider = new basic.SizedBox.new({width: 1.0 / media_query.MediaQuery.of(context).devicePixelRatio, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
      function addToolbarButton(text, onPressed) {
        if (items[$isNotEmpty]) {
          items[$add](onePhysicalPixelVerticalDivider);
        }
        items[$add](new desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.text({context: context, onPressed: onPressed, text: text, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}));
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
        return C[8] || CT.C8;
      }
      return new desktop_text_selection._CupertinoDesktopTextSelectionToolbar.new({anchor: (t0$0 = this.widget.lastSecondaryTapDownPosition, t0$0 == null ? midpointAnchor : t0$0), children: items, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    static ['_#new#tearOff']() {
      return new desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState.new();
    }
  };
  (desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState.new = function() {
    desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState.__proto__.new.call(this);
    ;
  }).prototype = desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState.prototype;
  dart.addTypeTests(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState);
  dart.addTypeCaches(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState);
  dart.setMethodSignature(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState, () => ({
    __proto__: dart.getMethods(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState.__proto__),
    [_onChangedClipboardStatus]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(desktop_text_selection._CupertinoDesktopTextSelectionControlsToolbarState, I[0]);
  var anchor$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionToolbar.anchor");
  var children$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionToolbar.children");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  desktop_text_selection._CupertinoDesktopTextSelectionToolbar = class _CupertinoDesktopTextSelectionToolbar extends framework.StatelessWidget {
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
      return new desktop_text_selection._CupertinoDesktopTextSelectionToolbar.new({anchor: anchor, children: children, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    static _defaultToolbarBuilder(context, child) {
      return new container.Container.new({width: 222, decoration: new box_decoration.BoxDecoration.new({color: desktop_text_selection._kToolbarBackgroundColor.resolveFrom(context), border: box_border.Border.all({color: desktop_text_selection._kToolbarBorderColor.resolveFrom(context)}), borderRadius: C[12] || CT.C12}), child: new basic.Padding.new({padding: C[14] || CT.C14, child: child, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
    build(context) {
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[1], 271, 12, "debugCheckHasMediaQuery(context)");
      let mediaQuery = media_query.MediaQuery.of(context);
      let paddingAbove = mediaQuery.padding.top + 8;
      let localAdjustment = new ui.Offset.new(8, paddingAbove);
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(8, paddingAbove, 8, 8), child: new basic.CustomSingleChildLayout.new({delegate: new desktop_text_selection_toolbar_layout_delegate.DesktopTextSelectionToolbarLayoutDelegate.new({anchor: this.anchor['-'](localAdjustment)}), child: desktop_text_selection._CupertinoDesktopTextSelectionToolbar._defaultToolbarBuilder(context, new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: this.children, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17})), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
  };
  (desktop_text_selection._CupertinoDesktopTextSelectionToolbar.new = function(opts) {
    let anchor = opts && 'anchor' in opts ? opts.anchor : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[anchor$] = anchor;
    this[children$] = children;
    if (!(children[$length] > 0)) dart.assertFailed(null, I[1], 233, 15, "children.length > 0");
    desktop_text_selection._CupertinoDesktopTextSelectionToolbar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = desktop_text_selection._CupertinoDesktopTextSelectionToolbar.prototype;
  dart.addTypeTests(desktop_text_selection._CupertinoDesktopTextSelectionToolbar);
  dart.addTypeCaches(desktop_text_selection._CupertinoDesktopTextSelectionToolbar);
  dart.setMethodSignature(desktop_text_selection._CupertinoDesktopTextSelectionToolbar, () => ({
    __proto__: dart.getMethods(desktop_text_selection._CupertinoDesktopTextSelectionToolbar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(desktop_text_selection._CupertinoDesktopTextSelectionToolbar, () => ['_defaultToolbarBuilder']);
  dart.setLibraryUri(desktop_text_selection._CupertinoDesktopTextSelectionToolbar, I[0]);
  dart.setFieldSignature(desktop_text_selection._CupertinoDesktopTextSelectionToolbar, () => ({
    __proto__: dart.getFields(desktop_text_selection._CupertinoDesktopTextSelectionToolbar.__proto__),
    anchor: dart.finalFieldType(ui.Offset),
    children: dart.finalFieldType(core.List$(framework.Widget))
  }));
  var onPressed$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionToolbarButton.onPressed");
  var child$ = dart.privateName(desktop_text_selection, "_CupertinoDesktopTextSelectionToolbarButton.child");
  var Color_value = dart.privateName(ui, "Color.value");
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastElevatedColor");
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkElevatedColor");
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors, "CupertinoDynamicColor._effectiveColor");
  desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton = class _CupertinoDesktopTextSelectionToolbarButton extends framework.StatefulWidget {
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
      return new desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.new({onPressed: onPressed, child: child, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
    }
    static ['_#text#tearOff'](opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let text = opts && 'text' in opts ? opts.text : null;
      return new desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.text({context: context, onPressed: onPressed, text: text, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
    }
    createState() {
      return new desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState.new();
    }
  };
  (desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.new = function(opts) {
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[child$] = child;
    desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.prototype;
  (desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.text = function(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[child$] = new text$.Text.new(text, {overflow: text_painter.TextOverflow.ellipsis, style: desktop_text_selection._kToolbarButtonFontStyle.copyWith({color: (C[20] || CT.C20).resolveFrom(context)}), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23});
    desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.prototype;
  dart.addTypeTests(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton);
  dart.addTypeCaches(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton);
  dart.setMethodSignature(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton, () => ({
    __proto__: dart.getMethods(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.__proto__),
    createState: dart.fnType(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState, [])
  }));
  dart.setLibraryUri(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton, I[0]);
  dart.setFieldSignature(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton, () => ({
    __proto__: dart.getFields(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    child: dart.finalFieldType(framework.Widget)
  }));
  var _isHovered = dart.privateName(desktop_text_selection, "_isHovered");
  var _onEnter = dart.privateName(desktop_text_selection, "_onEnter");
  var _onExit = dart.privateName(desktop_text_selection, "_onExit");
  desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState = class _CupertinoDesktopTextSelectionToolbarButtonState extends framework.State$(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButton) {
    [_onEnter](event) {
      this.setState(dart.fn(() => {
        this[_isHovered] = true;
      }, T.VoidTovoid()));
    }
    [_onExit](event) {
      this.setState(dart.fn(() => {
        this[_isHovered] = false;
      }, T.VoidTovoid()));
    }
    build(context) {
      return new basic.SizedBox.new({width: 1 / 0, child: new basic.MouseRegion.new({onEnter: dart.bind(this, _onEnter), onExit: dart.bind(this, _onExit), child: new button.CupertinoButton.new({alignment: alignment.Alignment.centerLeft, borderRadius: null, color: this[_isHovered] ? theme.CupertinoTheme.of(context).primaryColor : null, minSize: 0.0, onPressed: this.widget.onPressed, padding: desktop_text_selection._kToolbarButtonPadding, pressedOpacity: 0.7, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[26] || CT.C26}), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
    }
    static ['_#new#tearOff']() {
      return new desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState.new();
    }
  };
  (desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState.new = function() {
    this[_isHovered] = false;
    desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState.__proto__.new.call(this);
    ;
  }).prototype = desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState.prototype;
  dart.addTypeTests(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState);
  dart.addTypeCaches(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState);
  dart.setMethodSignature(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState, () => ({
    __proto__: dart.getMethods(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState.__proto__),
    [_onEnter]: dart.fnType(dart.void, [events.PointerEnterEvent]),
    [_onExit]: dart.fnType(dart.void, [events.PointerExitEvent]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState, I[0]);
  dart.setFieldSignature(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState, () => ({
    __proto__: dart.getFields(desktop_text_selection._CupertinoDesktopTextSelectionToolbarButtonState.__proto__),
    [_isHovered]: dart.fieldType(core.bool)
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
  dart.defineLazy(desktop_text_selection, {
    /*desktop_text_selection._kToolbarScreenPadding*/get _kToolbarScreenPadding() {
      return 8;
    },
    /*desktop_text_selection._kToolbarWidth*/get _kToolbarWidth() {
      return 222;
    },
    /*desktop_text_selection._kToolbarBorderRadius*/get _kToolbarBorderRadius() {
      return C[13] || CT.C13;
    },
    /*desktop_text_selection._kToolbarBorderColor*/get _kToolbarBorderColor() {
      return C[29] || CT.C29;
    },
    /*desktop_text_selection._kToolbarBackgroundColor*/get _kToolbarBackgroundColor() {
      return C[32] || CT.C32;
    },
    /*desktop_text_selection.cupertinoDesktopTextSelectionControls*/get cupertinoDesktopTextSelectionControls() {
      return new desktop_text_selection._CupertinoDesktopTextSelectionControls.new();
    },
    /*desktop_text_selection._kToolbarButtonFontStyle*/get _kToolbarButtonFontStyle() {
      return C[35] || CT.C35;
    },
    /*desktop_text_selection._kToolbarButtonPadding*/get _kToolbarButtonPadding() {
      return C[37] || CT.C37;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/desktop_text_selection.dart", {
    "package:flutter/src/cupertino/desktop_text_selection.dart": desktop_text_selection
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["desktop_text_selection.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/cupertino/desktop_text_selection.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__desktop_text_selection: desktop_text_selection
  };
}));

//# sourceMappingURL=desktop_text_selection.dart.lib.js.map
