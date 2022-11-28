define(['dart_sdk', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/services/text_formatter.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/characters/src/extensions.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/cupertino/text_selection.dart', 'packages/flutter/src/cupertino/desktop_text_selection.dart', 'packages/flutter/src/material/text_selection.dart', 'packages/flutter/src/material/desktop_text_selection.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/rendering/proxy_box.dart'], (function load__packages__flutter__src__material__text_field_dart(dart_sdk, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__services__text_formatter$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__characters__src__extensions$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__cupertino__text_selection$46dart, packages__flutter__src__cupertino__desktop_text_selection$46dart, packages__flutter__src__material__text_selection$46dart, packages__flutter__src__material__desktop_text_selection$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__rendering__proxy_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const autofill = packages__flutter__src__services__text_editing_delta$46dart.src__services__autofill;
  const restoration = packages__flutter__src__services__text_editing_delta$46dart.src__services__restoration;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const feedback = packages__flutter__src__material__icon_button$46dart.src__material__feedback;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const debug = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const text_selection = packages__flutter__src__widgets__title$46dart.src__widgets__text_selection;
  const editable_text = packages__flutter__src__widgets__title$46dart.src__widgets__editable_text;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const scroll_controller = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_controller;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const restoration_properties = packages__flutter__src__widgets__title$46dart.src__widgets__restoration_properties;
  const debug$ = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const default_selection_style = packages__flutter__src__widgets__title$46dart.src__widgets__default_selection_style;
  const restoration$ = packages__flutter__src__widgets__title$46dart.src__widgets__restoration;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const routes = packages__flutter__src__widgets__title$46dart.src__widgets__routes;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const strut_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__strut_style;
  const text_formatter = packages__flutter__src__services__text_formatter$46dart.src__services__text_formatter;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const extensions = packages__characters__src__extensions$46dart.src__extensions;
  const theme$0 = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__theme;
  const colors$ = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const text_selection$ = packages__flutter__src__cupertino__text_selection$46dart.src__cupertino__text_selection;
  const desktop_text_selection = packages__flutter__src__cupertino__desktop_text_selection$46dart.src__cupertino__desktop_text_selection;
  const text_selection$0 = packages__flutter__src__material__text_selection$46dart.src__material__text_selection;
  const desktop_text_selection$ = packages__flutter__src__material__desktop_text_selection$46dart.src__material__desktop_text_selection;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  var text_field = Object.create(dart.library);
  var $length = dartx.length;
  var $clamp = dartx.clamp;
  var $isNotEmpty = dartx.isNotEmpty;
  var $toList = dartx.toList;
  var $addAll = dartx.addAll;
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    DiagnosticsPropertyOfTextEditingController: () => (T.DiagnosticsPropertyOfTextEditingController = dart.constFn(diagnostics.DiagnosticsProperty$(editable_text.TextEditingController)))(),
    DiagnosticsPropertyOfFocusNode: () => (T.DiagnosticsPropertyOfFocusNode = dart.constFn(diagnostics.DiagnosticsProperty$(focus_manager.FocusNode)))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    DiagnosticsPropertyOfInputDecoration: () => (T.DiagnosticsPropertyOfInputDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(input_decorator.InputDecoration)))(),
    DiagnosticsPropertyOfTextInputType: () => (T.DiagnosticsPropertyOfTextInputType = dart.constFn(diagnostics.DiagnosticsProperty$(text_input.TextInputType)))(),
    DiagnosticsPropertyOfTextStyle: () => (T.DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))(),
    DiagnosticsPropertyOfString: () => (T.DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))(),
    EnumPropertyOfSmartDashesType: () => (T.EnumPropertyOfSmartDashesType = dart.constFn(diagnostics.EnumProperty$(text_input.SmartDashesType)))(),
    EnumPropertyOfSmartQuotesType: () => (T.EnumPropertyOfSmartQuotesType = dart.constFn(diagnostics.EnumProperty$(text_input.SmartQuotesType)))(),
    EnumPropertyOfMaxLengthEnforcement: () => (T.EnumPropertyOfMaxLengthEnforcement = dart.constFn(diagnostics.EnumProperty$(text_formatter.MaxLengthEnforcement)))(),
    EnumPropertyOfTextInputAction: () => (T.EnumPropertyOfTextInputAction = dart.constFn(diagnostics.EnumProperty$(text_input.TextInputAction)))(),
    EnumPropertyOfTextCapitalization: () => (T.EnumPropertyOfTextCapitalization = dart.constFn(diagnostics.EnumProperty$(text_input.TextCapitalization)))(),
    EnumPropertyOfTextAlign: () => (T.EnumPropertyOfTextAlign = dart.constFn(diagnostics.EnumProperty$(ui.TextAlign)))(),
    DiagnosticsPropertyOfTextAlignVertical: () => (T.DiagnosticsPropertyOfTextAlignVertical = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.TextAlignVertical)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    DiagnosticsPropertyOfRadius: () => (T.DiagnosticsPropertyOfRadius = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Radius)))(),
    DiagnosticsPropertyOfBrightness: () => (T.DiagnosticsPropertyOfBrightness = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Brightness)))(),
    DiagnosticsPropertyOfEdgeInsetsGeometry: () => (T.DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))(),
    DiagnosticsPropertyOfTextSelectionControls: () => (T.DiagnosticsPropertyOfTextSelectionControls = dart.constFn(diagnostics.DiagnosticsProperty$(text_selection.TextSelectionControls)))(),
    DiagnosticsPropertyOfScrollController: () => (T.DiagnosticsPropertyOfScrollController = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_controller.ScrollController)))(),
    DiagnosticsPropertyOfScrollPhysics: () => (T.DiagnosticsPropertyOfScrollPhysics = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_physics.ScrollPhysics)))(),
    DiagnosticsPropertyOfClip: () => (T.DiagnosticsPropertyOfClip = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Clip)))(),
    GlobalKeyOfEditableTextState: () => (T.GlobalKeyOfEditableTextState = dart.constFn(framework.GlobalKey$(editable_text.EditableTextState)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfTextInputFormatter: () => (T.JSArrayOfTextInputFormatter = dart.constFn(_interceptors.JSArray$(text_formatter.TextInputFormatter)))(),
    JSArrayOfListenable: () => (T.JSArrayOfListenable = dart.constFn(_interceptors.JSArray$(change_notifier.Listenable)))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetNToInputDecorator: () => (T.BuildContextAndWidgetNToInputDecorator = dart.constFn(dart.fnType(input_decorator.InputDecorator, [framework.BuildContext, T.WidgetN()])))(),
    LinkedHashSetOfMaterialState: () => (T.LinkedHashSetOfMaterialState = dart.constFn(collection.LinkedHashSet$(material_state.MaterialState)))(),
    PointerEnterEventTovoid: () => (T.PointerEnterEventTovoid = dart.constFn(dart.fnType(dart.void, [events.PointerEnterEvent])))(),
    PointerExitEventTovoid: () => (T.PointerExitEventTovoid = dart.constFn(dart.fnType(dart.void, [events.PointerExitEvent])))(),
    BuildContextAndWidgetNToSemantics: () => (T.BuildContextAndWidgetNToSemantics = dart.constFn(dart.fnType(basic.Semantics, [framework.BuildContext, T.WidgetN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
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
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_constraints]: null,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixIconConstraints]: null,
        [InputDecoration_suffixIconColor]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixIconColor]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIconConstraints]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_floatingLabelAlignment]: null,
        [InputDecoration_floatingLabelBehavior]: null,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintTextDirection]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_floatingLabelStyle]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: null,
        [InputDecoration_label]: null,
        [InputDecoration_iconColor]: null,
        [InputDecoration_icon]: null
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 3
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 4
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.constList([], core.String);
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: editable_text.ToolbarOptions.prototype,
        [ToolbarOptions_selectAll]: false,
        [ToolbarOptions_paste]: false,
        [ToolbarOptions_cut]: false,
        [ToolbarOptions_copy]: false
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: editable_text.ToolbarOptions.prototype,
        [ToolbarOptions_selectAll]: true,
        [ToolbarOptions_paste]: true,
        [ToolbarOptions_cut]: false,
        [ToolbarOptions_copy]: false
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: editable_text.ToolbarOptions.prototype,
        [ToolbarOptions_selectAll]: true,
        [ToolbarOptions_paste]: false,
        [ToolbarOptions_cut]: false,
        [ToolbarOptions_copy]: true
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: editable_text.ToolbarOptions.prototype,
        [ToolbarOptions_selectAll]: true,
        [ToolbarOptions_paste]: true,
        [ToolbarOptions_cut]: true,
        [ToolbarOptions_copy]: true
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextField",
        [_Location_column]: 9,
        [_Location_line]: 277,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 19,
        [_Location_line]: 883,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: media_query.NavigationMode.prototype,
        [_Enum__name]: "traditional",
        [_Enum_index]: 0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: media_query.NavigationMode.prototype,
        [_Enum__name]: "directional",
        [_Enum_index]: 1
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 2,
        [Radius_x]: 2
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EditableText",
        [_Location_column]: 16,
        [_Location_line]: 1222,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UnmanagedRestorationScope",
        [_Location_column]: 14,
        [_Location_line]: 1220,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RepaintBoundary",
        [_Location_column]: 20,
        [_Location_line]: 1219,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InputDecorator",
        [_Location_column]: 18,
        [_Location_line]: 1289,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedBuilder",
        [_Location_column]: 15,
        [_Location_line]: 1286,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 22,
        [_Location_line]: 1334,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedBuilder",
        [_Location_column]: 18,
        [_Location_line]: 1331,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IgnorePointer",
        [_Location_column]: 16,
        [_Location_line]: 1329,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MouseRegion",
        [_Location_column]: 14,
        [_Location_line]: 1325,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FocusTrapArea",
        [_Location_column]: 12,
        [_Location_line]: 1323,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
      });
    }
  }, false);
  var C = Array(34).fill(void 0);
  var I = [
    "package:flutter/src/material/text_field.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_field.dart"
  ];
  var _state = dart.privateName(text_field, "_state");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _requestKeyboard = dart.privateName(text_field, "_requestKeyboard");
  text_field._TextFieldSelectionGestureDetectorBuilder = class _TextFieldSelectionGestureDetectorBuilder extends text_selection.TextSelectionGestureDetectorBuilder {
    static ['_#new#tearOff'](opts) {
      let state = opts && 'state' in opts ? opts.state : null;
      return new text_field._TextFieldSelectionGestureDetectorBuilder.new({state: state});
    }
    onForcePressStart(details) {
      super.onForcePressStart(details);
      if (this.delegate.selectionEnabled && this.shouldShowSelectionToolbar) {
        this.editableText.showToolbar();
      }
    }
    onForcePressEnd(details) {
    }
    onSingleLongTapMoveUpdate(details) {
      if (this.delegate.selectionEnabled) {
        switch (theme$.Theme.of(this[_state].context).platform) {
          case C[0] || CT.C0:
          case C[1] || CT.C1:
            {
              this.renderEditable.selectPositionAt({from: details.globalPosition, cause: text_input.SelectionChangedCause.longPress});
              break;
            }
          case C[2] || CT.C2:
          case C[3] || CT.C3:
          case C[4] || CT.C4:
          case C[5] || CT.C5:
            {
              this.renderEditable.selectWordsInRange({from: details.globalPosition['-'](details.offsetFromOrigin), to: details.globalPosition, cause: text_input.SelectionChangedCause.longPress});
              break;
            }
        }
      }
    }
    onSingleTapUp(details) {
      let t0;
      this.editableText.hideToolbar();
      super.onSingleTapUp(details);
      this[_state][_requestKeyboard]();
      t0 = this[_state].widget.onTap;
      t0 == null ? null : t0();
    }
    onSingleLongTapStart(details) {
      if (this.delegate.selectionEnabled) {
        switch (theme$.Theme.of(this[_state].context).platform) {
          case C[0] || CT.C0:
          case C[1] || CT.C1:
            {
              this.renderEditable.selectPositionAt({from: details.globalPosition, cause: text_input.SelectionChangedCause.longPress});
              break;
            }
          case C[2] || CT.C2:
          case C[3] || CT.C3:
          case C[4] || CT.C4:
          case C[5] || CT.C5:
            {
              this.renderEditable.selectWord({cause: text_input.SelectionChangedCause.longPress});
              feedback.Feedback.forLongPress(this[_state].context);
              break;
            }
        }
      }
    }
  };
  (text_field._TextFieldSelectionGestureDetectorBuilder.new = function(opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    this[_state] = state;
    text_field._TextFieldSelectionGestureDetectorBuilder.__proto__.new.call(this, {delegate: state});
    ;
  }).prototype = text_field._TextFieldSelectionGestureDetectorBuilder.prototype;
  dart.addTypeTests(text_field._TextFieldSelectionGestureDetectorBuilder);
  dart.addTypeCaches(text_field._TextFieldSelectionGestureDetectorBuilder);
  dart.setLibraryUri(text_field._TextFieldSelectionGestureDetectorBuilder, I[0]);
  dart.setFieldSignature(text_field._TextFieldSelectionGestureDetectorBuilder, () => ({
    __proto__: dart.getFields(text_field._TextFieldSelectionGestureDetectorBuilder.__proto__),
    [_state]: dart.finalFieldType(text_field._TextFieldState)
  }));
  var controller$ = dart.privateName(text_field, "TextField.controller");
  var focusNode$ = dart.privateName(text_field, "TextField.focusNode");
  var decoration$ = dart.privateName(text_field, "TextField.decoration");
  var keyboardType$ = dart.privateName(text_field, "TextField.keyboardType");
  var textInputAction$ = dart.privateName(text_field, "TextField.textInputAction");
  var textCapitalization$ = dart.privateName(text_field, "TextField.textCapitalization");
  var style$ = dart.privateName(text_field, "TextField.style");
  var strutStyle$ = dart.privateName(text_field, "TextField.strutStyle");
  var textAlign$ = dart.privateName(text_field, "TextField.textAlign");
  var textAlignVertical$ = dart.privateName(text_field, "TextField.textAlignVertical");
  var textDirection$ = dart.privateName(text_field, "TextField.textDirection");
  var autofocus$ = dart.privateName(text_field, "TextField.autofocus");
  var obscuringCharacter$ = dart.privateName(text_field, "TextField.obscuringCharacter");
  var obscureText$ = dart.privateName(text_field, "TextField.obscureText");
  var autocorrect$ = dart.privateName(text_field, "TextField.autocorrect");
  var smartDashesType$ = dart.privateName(text_field, "TextField.smartDashesType");
  var smartQuotesType$ = dart.privateName(text_field, "TextField.smartQuotesType");
  var enableSuggestions$ = dart.privateName(text_field, "TextField.enableSuggestions");
  var maxLines$ = dart.privateName(text_field, "TextField.maxLines");
  var minLines$ = dart.privateName(text_field, "TextField.minLines");
  var expands$ = dart.privateName(text_field, "TextField.expands");
  var readOnly$ = dart.privateName(text_field, "TextField.readOnly");
  var toolbarOptions$ = dart.privateName(text_field, "TextField.toolbarOptions");
  var showCursor$ = dart.privateName(text_field, "TextField.showCursor");
  var maxLength$ = dart.privateName(text_field, "TextField.maxLength");
  var maxLengthEnforcement$ = dart.privateName(text_field, "TextField.maxLengthEnforcement");
  var onChanged$ = dart.privateName(text_field, "TextField.onChanged");
  var onEditingComplete$ = dart.privateName(text_field, "TextField.onEditingComplete");
  var onSubmitted$ = dart.privateName(text_field, "TextField.onSubmitted");
  var onAppPrivateCommand$ = dart.privateName(text_field, "TextField.onAppPrivateCommand");
  var inputFormatters$ = dart.privateName(text_field, "TextField.inputFormatters");
  var enabled$ = dart.privateName(text_field, "TextField.enabled");
  var cursorWidth$ = dart.privateName(text_field, "TextField.cursorWidth");
  var cursorHeight$ = dart.privateName(text_field, "TextField.cursorHeight");
  var cursorRadius$ = dart.privateName(text_field, "TextField.cursorRadius");
  var cursorColor$ = dart.privateName(text_field, "TextField.cursorColor");
  var selectionHeightStyle$ = dart.privateName(text_field, "TextField.selectionHeightStyle");
  var selectionWidthStyle$ = dart.privateName(text_field, "TextField.selectionWidthStyle");
  var keyboardAppearance$ = dart.privateName(text_field, "TextField.keyboardAppearance");
  var scrollPadding$ = dart.privateName(text_field, "TextField.scrollPadding");
  var enableInteractiveSelection$ = dart.privateName(text_field, "TextField.enableInteractiveSelection");
  var selectionControls$ = dart.privateName(text_field, "TextField.selectionControls");
  var dragStartBehavior$ = dart.privateName(text_field, "TextField.dragStartBehavior");
  var onTap$ = dart.privateName(text_field, "TextField.onTap");
  var mouseCursor$ = dart.privateName(text_field, "TextField.mouseCursor");
  var buildCounter$ = dart.privateName(text_field, "TextField.buildCounter");
  var scrollPhysics$ = dart.privateName(text_field, "TextField.scrollPhysics");
  var scrollController$ = dart.privateName(text_field, "TextField.scrollController");
  var autofillHints$ = dart.privateName(text_field, "TextField.autofillHints");
  var clipBehavior$ = dart.privateName(text_field, "TextField.clipBehavior");
  var restorationId$ = dart.privateName(text_field, "TextField.restorationId");
  var scribbleEnabled$ = dart.privateName(text_field, "TextField.scribbleEnabled");
  var enableIMEPersonalizedLearning$ = dart.privateName(text_field, "TextField.enableIMEPersonalizedLearning");
  var InputDecoration_constraints = dart.privateName(input_decorator, "InputDecoration.constraints");
  var InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  var InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  var InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  var InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  var InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  var InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  var InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  var InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  var InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  var InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  var InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  var InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  var InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  var InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  var InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  var InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  var InputDecoration_suffixIconConstraints = dart.privateName(input_decorator, "InputDecoration.suffixIconConstraints");
  var InputDecoration_suffixIconColor = dart.privateName(input_decorator, "InputDecoration.suffixIconColor");
  var InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  var InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  var InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  var InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  var InputDecoration_prefixIconColor = dart.privateName(input_decorator, "InputDecoration.prefixIconColor");
  var InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  var InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  var InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  var InputDecoration_prefixIconConstraints = dart.privateName(input_decorator, "InputDecoration.prefixIconConstraints");
  var InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  var InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  var InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  var InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  var InputDecoration_floatingLabelAlignment = dart.privateName(input_decorator, "InputDecoration.floatingLabelAlignment");
  var InputDecoration_floatingLabelBehavior = dart.privateName(input_decorator, "InputDecoration.floatingLabelBehavior");
  var InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  var InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  var InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  var InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  var InputDecoration_hintTextDirection = dart.privateName(input_decorator, "InputDecoration.hintTextDirection");
  var InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  var InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  var InputDecoration_helperMaxLines = dart.privateName(input_decorator, "InputDecoration.helperMaxLines");
  var InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  var InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  var InputDecoration_floatingLabelStyle = dart.privateName(input_decorator, "InputDecoration.floatingLabelStyle");
  var InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  var InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  var InputDecoration_label = dart.privateName(input_decorator, "InputDecoration.label");
  var InputDecoration_iconColor = dart.privateName(input_decorator, "InputDecoration.iconColor");
  var InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var ToolbarOptions_selectAll = dart.privateName(editable_text, "ToolbarOptions.selectAll");
  var ToolbarOptions_paste = dart.privateName(editable_text, "ToolbarOptions.paste");
  var ToolbarOptions_cut = dart.privateName(editable_text, "ToolbarOptions.cut");
  var ToolbarOptions_copy = dart.privateName(editable_text, "ToolbarOptions.copy");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  text_field.TextField = class TextField extends framework.StatefulWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get focusNode() {
      return this[focusNode$];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get keyboardType() {
      return this[keyboardType$];
    }
    set keyboardType(value) {
      super.keyboardType = value;
    }
    get textInputAction() {
      return this[textInputAction$];
    }
    set textInputAction(value) {
      super.textInputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get strutStyle() {
      return this[strutStyle$];
    }
    set strutStyle(value) {
      super.strutStyle = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get textAlignVertical() {
      return this[textAlignVertical$];
    }
    set textAlignVertical(value) {
      super.textAlignVertical = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get autofocus() {
      return this[autofocus$];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get obscuringCharacter() {
      return this[obscuringCharacter$];
    }
    set obscuringCharacter(value) {
      super.obscuringCharacter = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get smartDashesType() {
      return this[smartDashesType$];
    }
    set smartDashesType(value) {
      super.smartDashesType = value;
    }
    get smartQuotesType() {
      return this[smartQuotesType$];
    }
    set smartQuotesType(value) {
      super.smartQuotesType = value;
    }
    get enableSuggestions() {
      return this[enableSuggestions$];
    }
    set enableSuggestions(value) {
      super.enableSuggestions = value;
    }
    get maxLines() {
      return this[maxLines$];
    }
    set maxLines(value) {
      super.maxLines = value;
    }
    get minLines() {
      return this[minLines$];
    }
    set minLines(value) {
      super.minLines = value;
    }
    get expands() {
      return this[expands$];
    }
    set expands(value) {
      super.expands = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get toolbarOptions() {
      return this[toolbarOptions$];
    }
    set toolbarOptions(value) {
      super.toolbarOptions = value;
    }
    get showCursor() {
      return this[showCursor$];
    }
    set showCursor(value) {
      super.showCursor = value;
    }
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    get maxLengthEnforcement() {
      return this[maxLengthEnforcement$];
    }
    set maxLengthEnforcement(value) {
      super.maxLengthEnforcement = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get onEditingComplete() {
      return this[onEditingComplete$];
    }
    set onEditingComplete(value) {
      super.onEditingComplete = value;
    }
    get onSubmitted() {
      return this[onSubmitted$];
    }
    set onSubmitted(value) {
      super.onSubmitted = value;
    }
    get onAppPrivateCommand() {
      return this[onAppPrivateCommand$];
    }
    set onAppPrivateCommand(value) {
      super.onAppPrivateCommand = value;
    }
    get inputFormatters() {
      return this[inputFormatters$];
    }
    set inputFormatters(value) {
      super.inputFormatters = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get cursorWidth() {
      return this[cursorWidth$];
    }
    set cursorWidth(value) {
      super.cursorWidth = value;
    }
    get cursorHeight() {
      return this[cursorHeight$];
    }
    set cursorHeight(value) {
      super.cursorHeight = value;
    }
    get cursorRadius() {
      return this[cursorRadius$];
    }
    set cursorRadius(value) {
      super.cursorRadius = value;
    }
    get cursorColor() {
      return this[cursorColor$];
    }
    set cursorColor(value) {
      super.cursorColor = value;
    }
    get selectionHeightStyle() {
      return this[selectionHeightStyle$];
    }
    set selectionHeightStyle(value) {
      super.selectionHeightStyle = value;
    }
    get selectionWidthStyle() {
      return this[selectionWidthStyle$];
    }
    set selectionWidthStyle(value) {
      super.selectionWidthStyle = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    get scrollPadding() {
      return this[scrollPadding$];
    }
    set scrollPadding(value) {
      super.scrollPadding = value;
    }
    get enableInteractiveSelection() {
      return this[enableInteractiveSelection$];
    }
    set enableInteractiveSelection(value) {
      super.enableInteractiveSelection = value;
    }
    get selectionControls() {
      return this[selectionControls$];
    }
    set selectionControls(value) {
      super.selectionControls = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get mouseCursor() {
      return this[mouseCursor$];
    }
    set mouseCursor(value) {
      super.mouseCursor = value;
    }
    get buildCounter() {
      return this[buildCounter$];
    }
    set buildCounter(value) {
      super.buildCounter = value;
    }
    get scrollPhysics() {
      return this[scrollPhysics$];
    }
    set scrollPhysics(value) {
      super.scrollPhysics = value;
    }
    get scrollController() {
      return this[scrollController$];
    }
    set scrollController(value) {
      super.scrollController = value;
    }
    get autofillHints() {
      return this[autofillHints$];
    }
    set autofillHints(value) {
      super.autofillHints = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    get scribbleEnabled() {
      return this[scribbleEnabled$];
    }
    set scribbleEnabled(value) {
      super.scribbleEnabled = value;
    }
    get enableIMEPersonalizedLearning() {
      return this[enableIMEPersonalizedLearning$];
    }
    set enableIMEPersonalizedLearning(value) {
      super.enableIMEPersonalizedLearning = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : C[6] || CT.C6;
      let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
      let textInputAction = opts && 'textInputAction' in opts ? opts.textInputAction : null;
      let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C[7] || CT.C7;
      let style = opts && 'style' in opts ? opts.style : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[8] || CT.C8;
      let textAlignVertical = opts && 'textAlignVertical' in opts ? opts.textAlignVertical : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
      let toolbarOptions = opts && 'toolbarOptions' in opts ? opts.toolbarOptions : null;
      let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
      let obscuringCharacter = opts && 'obscuringCharacter' in opts ? opts.obscuringCharacter : "•";
      let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
      let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
      let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
      let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
      let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
      let minLines = opts && 'minLines' in opts ? opts.minLines : null;
      let expands = opts && 'expands' in opts ? opts.expands : false;
      let maxLength = opts && 'maxLength' in opts ? opts.maxLength : null;
      let maxLengthEnforcement = opts && 'maxLengthEnforcement' in opts ? opts.maxLengthEnforcement : null;
      let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
      let onEditingComplete = opts && 'onEditingComplete' in opts ? opts.onEditingComplete : null;
      let onSubmitted = opts && 'onSubmitted' in opts ? opts.onSubmitted : null;
      let onAppPrivateCommand = opts && 'onAppPrivateCommand' in opts ? opts.onAppPrivateCommand : null;
      let inputFormatters = opts && 'inputFormatters' in opts ? opts.inputFormatters : null;
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 2;
      let cursorHeight = opts && 'cursorHeight' in opts ? opts.cursorHeight : null;
      let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
      let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
      let selectionHeightStyle = opts && 'selectionHeightStyle' in opts ? opts.selectionHeightStyle : C[9] || CT.C9;
      let selectionWidthStyle = opts && 'selectionWidthStyle' in opts ? opts.selectionWidthStyle : C[10] || CT.C10;
      let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : null;
      let scrollPadding = opts && 'scrollPadding' in opts ? opts.scrollPadding : C[11] || CT.C11;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[12] || CT.C12;
      let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
      let selectionControls = opts && 'selectionControls' in opts ? opts.selectionControls : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let mouseCursor = opts && 'mouseCursor' in opts ? opts.mouseCursor : null;
      let buildCounter = opts && 'buildCounter' in opts ? opts.buildCounter : null;
      let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
      let scrollPhysics = opts && 'scrollPhysics' in opts ? opts.scrollPhysics : null;
      let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : C[13] || CT.C13;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[14] || CT.C14;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let scribbleEnabled = opts && 'scribbleEnabled' in opts ? opts.scribbleEnabled : true;
      let enableIMEPersonalizedLearning = opts && 'enableIMEPersonalizedLearning' in opts ? opts.enableIMEPersonalizedLearning : true;
      return new text_field.TextField.new({key: key, controller: controller, focusNode: focusNode, decoration: decoration, keyboardType: keyboardType, textInputAction: textInputAction, textCapitalization: textCapitalization, style: style, strutStyle: strutStyle, textAlign: textAlign, textAlignVertical: textAlignVertical, textDirection: textDirection, readOnly: readOnly, toolbarOptions: toolbarOptions, showCursor: showCursor, autofocus: autofocus, obscuringCharacter: obscuringCharacter, obscureText: obscureText, autocorrect: autocorrect, smartDashesType: smartDashesType, smartQuotesType: smartQuotesType, enableSuggestions: enableSuggestions, maxLines: maxLines, minLines: minLines, expands: expands, maxLength: maxLength, maxLengthEnforcement: maxLengthEnforcement, onChanged: onChanged, onEditingComplete: onEditingComplete, onSubmitted: onSubmitted, onAppPrivateCommand: onAppPrivateCommand, inputFormatters: inputFormatters, enabled: enabled, cursorWidth: cursorWidth, cursorHeight: cursorHeight, cursorRadius: cursorRadius, cursorColor: cursorColor, selectionHeightStyle: selectionHeightStyle, selectionWidthStyle: selectionWidthStyle, keyboardAppearance: keyboardAppearance, scrollPadding: scrollPadding, dragStartBehavior: dragStartBehavior, enableInteractiveSelection: enableInteractiveSelection, selectionControls: selectionControls, onTap: onTap, mouseCursor: mouseCursor, buildCounter: buildCounter, scrollController: scrollController, scrollPhysics: scrollPhysics, autofillHints: autofillHints, clipBehavior: clipBehavior, restorationId: restorationId, scribbleEnabled: scribbleEnabled, enableIMEPersonalizedLearning: enableIMEPersonalizedLearning, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
    get selectionEnabled() {
      return this.enableInteractiveSelection;
    }
    createState() {
      return new text_field._TextFieldState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfTextEditingController()).new("controller", this.controller, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfFocusNode()).new("focusNode", this.focusNode, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("enabled", this.enabled, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfInputDecoration()).new("decoration", this.decoration, {defaultValue: C[6] || CT.C6}));
      properties.add(new (T.DiagnosticsPropertyOfTextInputType()).new("keyboardType", this.keyboardType, {defaultValue: text_input.TextInputType.text}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("style", this.style, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("autofocus", this.autofocus, {defaultValue: false}));
      properties.add(new (T.DiagnosticsPropertyOfString()).new("obscuringCharacter", this.obscuringCharacter, {defaultValue: "•"}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("obscureText", this.obscureText, {defaultValue: false}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("autocorrect", this.autocorrect, {defaultValue: true}));
      properties.add(new (T.EnumPropertyOfSmartDashesType()).new("smartDashesType", this.smartDashesType, {defaultValue: this.obscureText ? text_input.SmartDashesType.disabled : text_input.SmartDashesType.enabled}));
      properties.add(new (T.EnumPropertyOfSmartQuotesType()).new("smartQuotesType", this.smartQuotesType, {defaultValue: this.obscureText ? text_input.SmartQuotesType.disabled : text_input.SmartQuotesType.enabled}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("enableSuggestions", this.enableSuggestions, {defaultValue: true}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {defaultValue: 1}));
      properties.add(new diagnostics.IntProperty.new("minLines", this.minLines, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("expands", this.expands, {defaultValue: false}));
      properties.add(new diagnostics.IntProperty.new("maxLength", this.maxLength, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfMaxLengthEnforcement()).new("maxLengthEnforcement", this.maxLengthEnforcement, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfTextInputAction()).new("textInputAction", this.textInputAction, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfTextCapitalization()).new("textCapitalization", this.textCapitalization, {defaultValue: text_input.TextCapitalization.none}));
      properties.add(new (T.EnumPropertyOfTextAlign()).new("textAlign", this.textAlign, {defaultValue: ui.TextAlign.start}));
      properties.add(new (T.DiagnosticsPropertyOfTextAlignVertical()).new("textAlignVertical", this.textAlignVertical, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("cursorWidth", this.cursorWidth, {defaultValue: 2.0}));
      properties.add(new diagnostics.DoubleProperty.new("cursorHeight", this.cursorHeight, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfRadius()).new("cursorRadius", this.cursorRadius, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("cursorColor", this.cursorColor, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfBrightness()).new("keyboardAppearance", this.keyboardAppearance, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("scrollPadding", this.scrollPadding, {defaultValue: C[11] || CT.C11}));
      properties.add(new diagnostics.FlagProperty.new("selectionEnabled", {value: this.selectionEnabled, defaultValue: true, ifFalse: "selection disabled"}));
      properties.add(new (T.DiagnosticsPropertyOfTextSelectionControls()).new("selectionControls", this.selectionControls, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfScrollController()).new("scrollController", this.scrollController, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfScrollPhysics()).new("scrollPhysics", this.scrollPhysics, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior, {defaultValue: ui.Clip.hardEdge}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("scribbleEnabled", this.scribbleEnabled, {defaultValue: true}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("enableIMEPersonalizedLearning", this.enableIMEPersonalizedLearning, {defaultValue: true}));
    }
  };
  (text_field.TextField.new = function(opts) {
    let t0, t0$, t0$0, t0$1, t0$2;
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : C[6] || CT.C6;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let textInputAction = opts && 'textInputAction' in opts ? opts.textInputAction : null;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C[7] || CT.C7;
    let style = opts && 'style' in opts ? opts.style : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[8] || CT.C8;
    let textAlignVertical = opts && 'textAlignVertical' in opts ? opts.textAlignVertical : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    let toolbarOptions = opts && 'toolbarOptions' in opts ? opts.toolbarOptions : null;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let obscuringCharacter = opts && 'obscuringCharacter' in opts ? opts.obscuringCharacter : "•";
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
    let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
    let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : false;
    let maxLength = opts && 'maxLength' in opts ? opts.maxLength : null;
    let maxLengthEnforcement = opts && 'maxLengthEnforcement' in opts ? opts.maxLengthEnforcement : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let onEditingComplete = opts && 'onEditingComplete' in opts ? opts.onEditingComplete : null;
    let onSubmitted = opts && 'onSubmitted' in opts ? opts.onSubmitted : null;
    let onAppPrivateCommand = opts && 'onAppPrivateCommand' in opts ? opts.onAppPrivateCommand : null;
    let inputFormatters = opts && 'inputFormatters' in opts ? opts.inputFormatters : null;
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 2;
    let cursorHeight = opts && 'cursorHeight' in opts ? opts.cursorHeight : null;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let selectionHeightStyle = opts && 'selectionHeightStyle' in opts ? opts.selectionHeightStyle : C[9] || CT.C9;
    let selectionWidthStyle = opts && 'selectionWidthStyle' in opts ? opts.selectionWidthStyle : C[10] || CT.C10;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : null;
    let scrollPadding = opts && 'scrollPadding' in opts ? opts.scrollPadding : C[11] || CT.C11;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[12] || CT.C12;
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
    let selectionControls = opts && 'selectionControls' in opts ? opts.selectionControls : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let mouseCursor = opts && 'mouseCursor' in opts ? opts.mouseCursor : null;
    let buildCounter = opts && 'buildCounter' in opts ? opts.buildCounter : null;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let scrollPhysics = opts && 'scrollPhysics' in opts ? opts.scrollPhysics : null;
    let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : C[13] || CT.C13;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[14] || CT.C14;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let scribbleEnabled = opts && 'scribbleEnabled' in opts ? opts.scribbleEnabled : true;
    let enableIMEPersonalizedLearning = opts && 'enableIMEPersonalizedLearning' in opts ? opts.enableIMEPersonalizedLearning : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[focusNode$] = focusNode;
    this[decoration$] = decoration;
    this[textInputAction$] = textInputAction;
    this[textCapitalization$] = textCapitalization;
    this[style$] = style;
    this[strutStyle$] = strutStyle;
    this[textAlign$] = textAlign;
    this[textAlignVertical$] = textAlignVertical;
    this[textDirection$] = textDirection;
    this[readOnly$] = readOnly;
    this[showCursor$] = showCursor;
    this[autofocus$] = autofocus;
    this[obscuringCharacter$] = obscuringCharacter;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[enableSuggestions$] = enableSuggestions;
    this[maxLines$] = maxLines;
    this[minLines$] = minLines;
    this[expands$] = expands;
    this[maxLength$] = maxLength;
    this[maxLengthEnforcement$] = maxLengthEnforcement;
    this[onChanged$] = onChanged;
    this[onEditingComplete$] = onEditingComplete;
    this[onSubmitted$] = onSubmitted;
    this[onAppPrivateCommand$] = onAppPrivateCommand;
    this[inputFormatters$] = inputFormatters;
    this[enabled$] = enabled;
    this[cursorWidth$] = cursorWidth;
    this[cursorHeight$] = cursorHeight;
    this[cursorRadius$] = cursorRadius;
    this[cursorColor$] = cursorColor;
    this[selectionHeightStyle$] = selectionHeightStyle;
    this[selectionWidthStyle$] = selectionWidthStyle;
    this[keyboardAppearance$] = keyboardAppearance;
    this[scrollPadding$] = scrollPadding;
    this[dragStartBehavior$] = dragStartBehavior;
    this[selectionControls$] = selectionControls;
    this[onTap$] = onTap;
    this[mouseCursor$] = mouseCursor;
    this[buildCounter$] = buildCounter;
    this[scrollController$] = scrollController;
    this[scrollPhysics$] = scrollPhysics;
    this[autofillHints$] = autofillHints;
    this[clipBehavior$] = clipBehavior;
    this[restorationId$] = restorationId;
    this[scribbleEnabled$] = scribbleEnabled;
    this[enableIMEPersonalizedLearning$] = enableIMEPersonalizedLearning;
    if (!(textAlign !== null)) dart.assertFailed(null, I[1], 332, 15, "textAlign != null");
    if (!(readOnly !== null)) dart.assertFailed(null, I[1], 333, 15, "readOnly != null");
    if (!(autofocus !== null)) dart.assertFailed(null, I[1], 334, 15, "autofocus != null");
    if (!(obscuringCharacter !== null && obscuringCharacter.length === 1)) dart.assertFailed(null, I[1], 335, 15, "obscuringCharacter != null && obscuringCharacter.length == 1");
    if (!(obscureText !== null)) dart.assertFailed(null, I[1], 336, 15, "obscureText != null");
    if (!(autocorrect !== null)) dart.assertFailed(null, I[1], 337, 15, "autocorrect != null");
    this[smartDashesType$] = (t0 = smartDashesType, t0 == null ? obscureText ? text_input.SmartDashesType.disabled : text_input.SmartDashesType.enabled : t0);
    this[smartQuotesType$] = (t0$ = smartQuotesType, t0$ == null ? obscureText ? text_input.SmartQuotesType.disabled : text_input.SmartQuotesType.enabled : t0$);
    if (!(enableSuggestions !== null)) dart.assertFailed(null, I[1], 340, 15, "enableSuggestions != null");
    if (!(scrollPadding !== null)) dart.assertFailed(null, I[1], 341, 15, "scrollPadding != null");
    if (!(dragStartBehavior !== null)) dart.assertFailed(null, I[1], 342, 15, "dragStartBehavior != null");
    if (!(selectionHeightStyle !== null)) dart.assertFailed(null, I[1], 343, 15, "selectionHeightStyle != null");
    if (!(selectionWidthStyle !== null)) dart.assertFailed(null, I[1], 344, 15, "selectionWidthStyle != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, I[1], 345, 15, "maxLines == null || maxLines > 0");
    if (!(minLines == null || dart.notNull(minLines) > 0)) dart.assertFailed(null, I[1], 346, 15, "minLines == null || minLines > 0");
    if (!(maxLines == null || minLines == null || dart.notNull(maxLines) >= dart.notNull(minLines))) dart.assertFailed("minLines can't be greater than maxLines", I[1], 348, 10, "(maxLines == null) || (minLines == null) || (maxLines >= minLines)");
    if (!(expands !== null)) dart.assertFailed(null, I[1], 351, 15, "expands != null");
    if (!(!expands || maxLines == null && minLines == null)) dart.assertFailed("minLines and maxLines must be null when expands is true.", I[1], 353, 10, "!expands || (maxLines == null && minLines == null)");
    if (!(!obscureText || maxLines === 1)) dart.assertFailed("Obscured fields cannot be multiline.", I[1], 356, 15, "!obscureText || maxLines == 1");
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, I[1], 357, 15, "maxLength == null || maxLength == TextField.noMaxLength || maxLength > 0");
    if (!(textInputAction !== text_input.TextInputAction.newline || maxLines === 1 || keyboardType !== text_input.TextInputType.text)) dart.assertFailed("Use keyboardType TextInputType.multiline when using TextInputAction.newline on a multiline TextField.", I[1], 360, 10, "!identical(textInputAction, TextInputAction.newline) ||\n         maxLines == 1 ||\n         !identical(keyboardType, TextInputType.text)");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 365, 15, "clipBehavior != null");
    if (!(enableIMEPersonalizedLearning !== null)) dart.assertFailed(null, I[1], 366, 15, "enableIMEPersonalizedLearning != null");
    this[keyboardType$] = (t0$0 = keyboardType, t0$0 == null ? maxLines === 1 ? text_input.TextInputType.text : text_input.TextInputType.multiline : t0$0);
    this[enableInteractiveSelection$] = (t0$1 = enableInteractiveSelection, t0$1 == null ? !readOnly || !obscureText : t0$1);
    this[toolbarOptions$] = (t0$2 = toolbarOptions, t0$2 == null ? obscureText ? readOnly ? C[15] || CT.C15 : C[16] || CT.C16 : readOnly ? C[17] || CT.C17 : C[18] || CT.C18 : t0$2);
    text_field.TextField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_field.TextField.prototype;
  dart.addTypeTests(text_field.TextField);
  dart.addTypeCaches(text_field.TextField);
  dart.setMethodSignature(text_field.TextField, () => ({
    __proto__: dart.getMethods(text_field.TextField.__proto__),
    createState: dart.fnType(framework.State$(text_field.TextField), [])
  }));
  dart.setGetterSignature(text_field.TextField, () => ({
    __proto__: dart.getGetters(text_field.TextField.__proto__),
    selectionEnabled: core.bool
  }));
  dart.setLibraryUri(text_field.TextField, I[0]);
  dart.setFieldSignature(text_field.TextField, () => ({
    __proto__: dart.getFields(text_field.TextField.__proto__),
    controller: dart.finalFieldType(dart.nullable(editable_text.TextEditingController)),
    focusNode: dart.finalFieldType(dart.nullable(focus_manager.FocusNode)),
    decoration: dart.finalFieldType(dart.nullable(input_decorator.InputDecoration)),
    keyboardType: dart.finalFieldType(text_input.TextInputType),
    textInputAction: dart.finalFieldType(dart.nullable(text_input.TextInputAction)),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    style: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    strutStyle: dart.finalFieldType(dart.nullable(strut_style.StrutStyle)),
    textAlign: dart.finalFieldType(ui.TextAlign),
    textAlignVertical: dart.finalFieldType(dart.nullable(alignment.TextAlignVertical)),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    autofocus: dart.finalFieldType(core.bool),
    obscuringCharacter: dart.finalFieldType(core.String),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    smartDashesType: dart.finalFieldType(text_input.SmartDashesType),
    smartQuotesType: dart.finalFieldType(text_input.SmartQuotesType),
    enableSuggestions: dart.finalFieldType(core.bool),
    maxLines: dart.finalFieldType(dart.nullable(core.int)),
    minLines: dart.finalFieldType(dart.nullable(core.int)),
    expands: dart.finalFieldType(core.bool),
    readOnly: dart.finalFieldType(core.bool),
    toolbarOptions: dart.finalFieldType(editable_text.ToolbarOptions),
    showCursor: dart.finalFieldType(dart.nullable(core.bool)),
    maxLength: dart.finalFieldType(dart.nullable(core.int)),
    maxLengthEnforcement: dart.finalFieldType(dart.nullable(text_formatter.MaxLengthEnforcement)),
    onChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    onEditingComplete: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSubmitted: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    onAppPrivateCommand: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]))),
    inputFormatters: dart.finalFieldType(dart.nullable(core.List$(text_formatter.TextInputFormatter))),
    enabled: dart.finalFieldType(dart.nullable(core.bool)),
    cursorWidth: dart.finalFieldType(core.double),
    cursorHeight: dart.finalFieldType(dart.nullable(core.double)),
    cursorRadius: dart.finalFieldType(dart.nullable(ui.Radius)),
    cursorColor: dart.finalFieldType(dart.nullable(ui.Color)),
    selectionHeightStyle: dart.finalFieldType(ui.BoxHeightStyle),
    selectionWidthStyle: dart.finalFieldType(ui.BoxWidthStyle),
    keyboardAppearance: dart.finalFieldType(dart.nullable(ui.Brightness)),
    scrollPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    enableInteractiveSelection: dart.finalFieldType(core.bool),
    selectionControls: dart.finalFieldType(dart.nullable(text_selection.TextSelectionControls)),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    onTap: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    mouseCursor: dart.finalFieldType(dart.nullable(mouse_cursor.MouseCursor)),
    buildCounter: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(framework.Widget), [framework.BuildContext], {}, {currentLength: core.int, isFocused: core.bool, maxLength: dart.nullable(core.int)}))),
    scrollPhysics: dart.finalFieldType(dart.nullable(scroll_physics.ScrollPhysics)),
    scrollController: dart.finalFieldType(dart.nullable(scroll_controller.ScrollController)),
    autofillHints: dart.finalFieldType(dart.nullable(core.Iterable$(core.String))),
    clipBehavior: dart.finalFieldType(ui.Clip),
    restorationId: dart.finalFieldType(dart.nullable(core.String)),
    scribbleEnabled: dart.finalFieldType(core.bool),
    enableIMEPersonalizedLearning: dart.finalFieldType(core.bool)
  }));
  dart.setStaticFieldSignature(text_field.TextField, () => ['noMaxLength']);
  dart.defineLazy(text_field.TextField, {
    /*text_field.TextField.noMaxLength*/get noMaxLength() {
      return -1;
    }
  }, false);
  var _controller = dart.privateName(text_field, "_controller");
  var _focusNode = dart.privateName(text_field, "_focusNode");
  var _isHovering = dart.privateName(text_field, "_isHovering");
  var _showSelectionHandles = dart.privateName(text_field, "_showSelectionHandles");
  var ___TextFieldState__selectionGestureDetectorBuilder = dart.privateName(text_field, "_#_TextFieldState#_selectionGestureDetectorBuilder");
  var ___TextFieldState_forcePressEnabled = dart.privateName(text_field, "_#_TextFieldState#forcePressEnabled");
  var _effectiveController = dart.privateName(text_field, "_effectiveController");
  var _effectiveFocusNode = dart.privateName(text_field, "_effectiveFocusNode");
  var _effectiveMaxLengthEnforcement = dart.privateName(text_field, "_effectiveMaxLengthEnforcement");
  var _selectionGestureDetectorBuilder = dart.privateName(text_field, "_selectionGestureDetectorBuilder");
  var _isEnabled = dart.privateName(text_field, "_isEnabled");
  var _currentLength = dart.privateName(text_field, "_currentLength");
  var _hasIntrinsicError = dart.privateName(text_field, "_hasIntrinsicError");
  var _hasError = dart.privateName(text_field, "_hasError");
  var _getEffectiveDecoration = dart.privateName(text_field, "_getEffectiveDecoration");
  var _createLocalController = dart.privateName(text_field, "_createLocalController");
  var _handleFocusChanged = dart.privateName(text_field, "_handleFocusChanged");
  var _canRequestFocus = dart.privateName(text_field, "_canRequestFocus");
  var _registerController = dart.privateName(text_field, "_registerController");
  var _editableText = dart.privateName(text_field, "_editableText");
  var _shouldShowSelectionHandles = dart.privateName(text_field, "_shouldShowSelectionHandles");
  var _handleSelectionChanged = dart.privateName(text_field, "_handleSelectionChanged");
  var _handleSelectionHandleTapped = dart.privateName(text_field, "_handleSelectionHandleTapped");
  var _handleHover = dart.privateName(text_field, "_handleHover");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  const State_RestorationMixin$36 = class State_RestorationMixin extends framework.State$(text_field.TextField) {};
  (State_RestorationMixin$36.new = function() {
    restoration$.RestorationMixin$(text_field.TextField)[dart.mixinNew].call(this);
    State_RestorationMixin$36.__proto__.new.call(this);
  }).prototype = State_RestorationMixin$36.prototype;
  dart.applyMixin(State_RestorationMixin$36, restoration$.RestorationMixin$(text_field.TextField));
  text_field._TextFieldState = class _TextFieldState extends State_RestorationMixin$36 {
    get [_effectiveController]() {
      let t0;
      t0 = this.widget.controller;
      return t0 == null ? dart.nullCheck(this[_controller]).value : t0;
    }
    get [_effectiveFocusNode]() {
      let t1, t0;
      t0 = this.widget.focusNode;
      return t0 == null ? (t1 = this[_focusNode], t1 == null ? this[_focusNode] = new focus_manager.FocusNode.new() : t1) : t0;
    }
    get [_effectiveMaxLengthEnforcement]() {
      let t0;
      t0 = this.widget.maxLengthEnforcement;
      return t0 == null ? text_formatter.LengthLimitingTextInputFormatter.getDefaultMaxLengthEnforcement(theme$.Theme.of(this.context).platform) : t0;
    }
    get needsCounter() {
      return this.widget.maxLength != null && this.widget.decoration != null && dart.nullCheck(this.widget.decoration).counterText == null;
    }
    get [_selectionGestureDetectorBuilder]() {
      let t0;
      t0 = this[___TextFieldState__selectionGestureDetectorBuilder];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_selectionGestureDetectorBuilder")) : t0;
    }
    set [_selectionGestureDetectorBuilder](library$32package$58flutter$47src$47material$47text_field$46dart$58$58_selectionGestureDetectorBuilder$35param) {
      this[___TextFieldState__selectionGestureDetectorBuilder] = library$32package$58flutter$47src$47material$47text_field$46dart$58$58_selectionGestureDetectorBuilder$35param;
    }
    get forcePressEnabled() {
      let t0;
      t0 = this[___TextFieldState_forcePressEnabled];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("forcePressEnabled")) : t0;
    }
    set forcePressEnabled(forcePressEnabled$35param) {
      this[___TextFieldState_forcePressEnabled] = forcePressEnabled$35param;
    }
    get selectionEnabled() {
      return this.widget.selectionEnabled;
    }
    get [_isEnabled]() {
      let t1, t0, t0$;
      t0$ = (t0 = this.widget.enabled, t0 == null ? (t1 = this.widget.decoration, t1 == null ? null : t1.enabled) : t0);
      return t0$ == null ? true : t0$;
    }
    get [_currentLength]() {
      return extensions['StringCharacters|get#characters'](this[_effectiveController].value.text)[$length];
    }
    get [_hasIntrinsicError]() {
      return this.widget.maxLength != null && dart.nullCheck(this.widget.maxLength) > 0 && extensions['StringCharacters|get#characters'](this[_effectiveController].value.text)[$length] > dart.nullCheck(this.widget.maxLength);
    }
    get [_hasError]() {
      let t0;
      return (t0 = this.widget.decoration, t0 == null ? null : t0.errorText) != null || this[_hasIntrinsicError];
    }
    [_getEffectiveDecoration]() {
      let t0, t0$, t0$0, t0$1, t0$2;
      let localizations = material_localizations.MaterialLocalizations.of(this.context);
      let themeData = theme$.Theme.of(this.context);
      let effectiveDecoration = (t0 = this.widget.decoration, t0 == null ? C[6] || CT.C6 : t0).applyDefaults(themeData.inputDecorationTheme).copyWith({enabled: this[_isEnabled], hintMaxLines: (t0$0 = (t0$ = this.widget.decoration, t0$ == null ? null : t0$.hintMaxLines), t0$0 == null ? this.widget.maxLines : t0$0)});
      if (effectiveDecoration.counter != null || effectiveDecoration.counterText != null) {
        return effectiveDecoration;
      }
      let counter = null;
      let currentLength = this[_currentLength];
      if (effectiveDecoration.counter == null && effectiveDecoration.counterText == null && this.widget.buildCounter != null) {
        let isFocused = this[_effectiveFocusNode].hasFocus;
        let builtCounter = dart.nullCheck(this.widget.buildCounter)(this.context, {currentLength: currentLength, maxLength: this.widget.maxLength, isFocused: isFocused});
        if (builtCounter != null) {
          counter = new basic.Semantics.new({container: true, liveRegion: isFocused, child: builtCounter, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
        }
        return effectiveDecoration.copyWith({counter: counter});
      }
      if (this.widget.maxLength == null) {
        return effectiveDecoration;
      }
      let counterText = dart.str(currentLength);
      let semanticCounterText = "";
      if (dart.nullCheck(this.widget.maxLength) > 0) {
        counterText = counterText + ("/" + dart.str(this.widget.maxLength));
        let remaining = (dart.nullCheck(this.widget.maxLength) - currentLength)[$clamp](0, dart.nullCheck(this.widget.maxLength));
        semanticCounterText = localizations.remainingTextFieldCharacterCount(remaining);
      }
      if (this[_hasIntrinsicError]) {
        return effectiveDecoration.copyWith({errorText: (t0$1 = effectiveDecoration.errorText, t0$1 == null ? "" : t0$1), counterStyle: (t0$2 = effectiveDecoration.errorStyle, t0$2 == null ? dart.nullCheck(themeData.textTheme.caption).copyWith({color: themeData.errorColor}) : t0$2), counterText: counterText, semanticCounterText: semanticCounterText});
      }
      return effectiveDecoration.copyWith({counterText: counterText, semanticCounterText: semanticCounterText});
    }
    initState() {
      super.initState();
      this[_selectionGestureDetectorBuilder] = new text_field._TextFieldSelectionGestureDetectorBuilder.new({state: this});
      if (this.widget.controller == null) {
        this[_createLocalController]();
      }
      this[_effectiveFocusNode].canRequestFocus = this[_isEnabled];
      this[_effectiveFocusNode].addListener(dart.bind(this, _handleFocusChanged));
    }
    get [_canRequestFocus]() {
      let t0, t0$;
      let mode = (t0$ = (t0 = media_query.MediaQuery.maybeOf(this.context), t0 == null ? null : t0.navigationMode), t0$ == null ? media_query.NavigationMode.traditional : t0$);
      switch (mode) {
        case C[21] || CT.C21:
          {
            return this[_isEnabled];
          }
        case C[22] || CT.C22:
          {
            return true;
          }
      }
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_effectiveFocusNode].canRequestFocus = this[_canRequestFocus];
    }
    didUpdateWidget(oldWidget) {
      let t0, t0$, t0$0, t0$1;
      text_field.TextField.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.controller == null && oldWidget.controller != null) {
        this[_createLocalController](dart.nullCheck(oldWidget.controller).value);
      } else if (this.widget.controller != null && oldWidget.controller == null) {
        this.unregisterFromRestoration(dart.nullCheck(this[_controller]));
        dart.nullCheck(this[_controller]).dispose();
        this[_controller] = null;
      }
      if (!dart.equals(this.widget.focusNode, oldWidget.focusNode)) {
        t0$ = (t0 = oldWidget.focusNode, t0 == null ? this[_focusNode] : t0);
        t0$ == null ? null : t0$.removeListener(dart.bind(this, _handleFocusChanged));
        t0$1 = (t0$0 = this.widget.focusNode, t0$0 == null ? this[_focusNode] : t0$0);
        t0$1 == null ? null : t0$1.addListener(dart.bind(this, _handleFocusChanged));
      }
      this[_effectiveFocusNode].canRequestFocus = this[_canRequestFocus];
      if (this[_effectiveFocusNode].hasFocus && this.widget.readOnly !== oldWidget.readOnly && this[_isEnabled]) {
        if (this[_effectiveController].selection.isCollapsed) {
          this[_showSelectionHandles] = !this.widget.readOnly;
        }
      }
    }
    restoreState(oldBucket, initialRestore) {
      if (this[_controller] != null) {
        this[_registerController]();
      }
    }
    [_registerController]() {
      if (!(this[_controller] != null)) dart.assertFailed(null, I[1], 983, 12, "_controller != null");
      this.registerForRestoration(dart.nullCheck(this[_controller]), "controller");
    }
    [_createLocalController](value = null) {
      if (!(this[_controller] == null)) dart.assertFailed(null, I[1], 988, 12, "_controller == null");
      this[_controller] = value == null ? restoration_properties.RestorableTextEditingController.new() : new restoration_properties.RestorableTextEditingController.fromValue(value);
      if (!this.restorePending) {
        this[_registerController]();
      }
    }
    get restorationId() {
      return this.widget.restorationId;
    }
    dispose() {
      let t0, t0$;
      this[_effectiveFocusNode].removeListener(dart.bind(this, _handleFocusChanged));
      t0 = this[_focusNode];
      t0 == null ? null : t0.dispose();
      t0$ = this[_controller];
      t0$ == null ? null : t0$.dispose();
      super.dispose();
    }
    get [_editableText]() {
      return this.editableTextKey.currentState;
    }
    [_requestKeyboard]() {
      let t0;
      t0 = this[_editableText];
      t0 == null ? null : t0.requestKeyboard();
    }
    [_shouldShowSelectionHandles](cause) {
      if (!this[_selectionGestureDetectorBuilder].shouldShowSelectionToolbar) {
        return false;
      }
      if (cause === text_input.SelectionChangedCause.keyboard) {
        return false;
      }
      if (this.widget.readOnly && this[_effectiveController].selection.isCollapsed) {
        return false;
      }
      if (!this[_isEnabled]) {
        return false;
      }
      if (cause === text_input.SelectionChangedCause.longPress || cause === text_input.SelectionChangedCause.scribble) {
        return true;
      }
      if (this[_effectiveController].text[$isNotEmpty]) {
        return true;
      }
      return false;
    }
    [_handleFocusChanged]() {
      this.setState(dart.fn(() => {
      }, T.VoidTovoid()));
    }
    [_handleSelectionChanged](selection, cause) {
      let t0, t0$;
      let willShowSelectionHandles = this[_shouldShowSelectionHandles](cause);
      if (willShowSelectionHandles !== this[_showSelectionHandles]) {
        this.setState(dart.fn(() => {
          this[_showSelectionHandles] = willShowSelectionHandles;
        }, T.VoidTovoid()));
      }
      switch (theme$.Theme.of(this.context).platform) {
        case C[0] || CT.C0:
        case C[1] || CT.C1:
          {
            if (cause === text_input.SelectionChangedCause.longPress || cause === text_input.SelectionChangedCause.drag) {
              t0 = this[_editableText];
              t0 == null ? null : t0.bringIntoView(selection.extent);
            }
            return;
          }
        case C[4] || CT.C4:
        case C[5] || CT.C5:
        case C[3] || CT.C3:
        case C[2] || CT.C2:
          {
            if (cause === text_input.SelectionChangedCause.drag) {
              t0$ = this[_editableText];
              t0$ == null ? null : t0$.bringIntoView(selection.extent);
            }
            return;
          }
      }
    }
    [_handleSelectionHandleTapped]() {
      if (this[_effectiveController].selection.isCollapsed) {
        dart.nullCheck(this[_editableText]).toggleToolbar();
      }
    }
    [_handleHover](hovering) {
      if (hovering !== this[_isHovering]) {
        this.setState(dart.fn(() => {
          this[_isHovering] = hovering;
        }, T.VoidTovoid()));
      }
    }
    get autofillId() {
      return dart.nullCheck(this[_editableText]).autofillId;
    }
    autofill(newEditingValue) {
      return dart.nullCheck(this[_editableText]).autofill(newEditingValue);
    }
    get textInputConfiguration() {
      let t0, t0$;
      let autofillHints = (t0 = this.widget.autofillHints, t0 == null ? null : t0[$toList]({growable: false}));
      let autofillConfiguration = autofillHints != null ? new autofill.AutofillConfiguration.new({uniqueIdentifier: this.autofillId, autofillHints: autofillHints, currentEditingValue: this[_effectiveController].value, hintText: (t0$ = this.widget.decoration, t0$ == null ? C[6] || CT.C6 : t0$).hintText}) : autofill.AutofillConfiguration.disabled;
      return dart.nullCheck(this[_editableText]).textInputConfiguration.copyWith({autofillConfiguration: autofillConfiguration});
    }
    build(context) {
      let t0, t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13;
      if (!debug.debugCheckHasMaterial(context)) dart.assertFailed(null, I[1], 1118, 12, "debugCheckHasMaterial(context)");
      if (!debug.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[1], 1119, 12, "debugCheckHasMaterialLocalizations(context)");
      if (!debug$.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[1], 1120, 12, "debugCheckHasDirectionality(context)");
      if (!!(this.widget.style != null && dart.nullCheck(this.widget.style).inherit === false && (dart.nullCheck(this.widget.style).fontSize == null || dart.nullCheck(this.widget.style).textBaseline == null))) dart.assertFailed("inherit false style must supply fontSize and textBaseline", I[1], 1122, 7, "!(widget.style != null && widget.style!.inherit == false &&\n        (widget.style!.fontSize == null || widget.style!.textBaseline == null))");
      let theme = theme$.Theme.of(context);
      let selectionStyle = default_selection_style.DefaultSelectionStyle.of(context);
      let style = dart.nullCheck(theme.textTheme.subtitle1).merge(this.widget.style);
      let keyboardAppearance = (t0 = this.widget.keyboardAppearance, t0 == null ? theme.brightness : t0);
      let controller = this[_effectiveController];
      let focusNode = this[_effectiveFocusNode];
      let formatters = (() => {
        let t0 = T.JSArrayOfTextInputFormatter().of([]);
        let t1 = this.widget.inputFormatters;
        if (t1 != null) t0[$addAll](t1);
        if (this.widget.maxLength != null) t0.push(new text_formatter.LengthLimitingTextInputFormatter.new(this.widget.maxLength, {maxLengthEnforcement: this[_effectiveMaxLengthEnforcement]}));
        return t0;
      })();
      let textSelectionControls = this.widget.selectionControls;
      let paintCursorAboveText = null;
      let cursorOpacityAnimates = null;
      let cursorOffset = null;
      let cursorColor = null;
      let selectionColor = null;
      let autocorrectionTextRectColor = null;
      let cursorRadius = this.widget.cursorRadius;
      let handleDidGainAccessibilityFocus = null;
      switch (theme.platform) {
        case C[0] || CT.C0:
          {
            let cupertinoTheme = theme$0.CupertinoTheme.of(context);
            this.forcePressEnabled = true;
            textSelectionControls == null ? textSelectionControls = text_selection$.cupertinoTextSelectionControls : null;
            paintCursorAboveText = true;
            cursorOpacityAnimates = true;
            cursorColor = (t2$ = (t2 = this.widget.cursorColor, t2 == null ? selectionStyle.cursorColor : t2), t2$ == null ? cupertinoTheme.primaryColor : t2$);
            selectionColor = (t2$0 = selectionStyle.selectionColor, t2$0 == null ? cupertinoTheme.primaryColor.withOpacity(0.4) : t2$0);
            cursorRadius == null ? cursorRadius = C[23] || CT.C23 : null;
            cursorOffset = new ui.Offset.new(-2 / media_query.MediaQuery.of(context).devicePixelRatio, 0.0);
            autocorrectionTextRectColor = selectionColor;
            break;
          }
        case C[1] || CT.C1:
          {
            let cupertinoTheme = theme$0.CupertinoTheme.of(context);
            this.forcePressEnabled = false;
            textSelectionControls == null ? textSelectionControls = desktop_text_selection.cupertinoDesktopTextSelectionControls : null;
            paintCursorAboveText = true;
            cursorOpacityAnimates = false;
            cursorColor = (t2$2 = (t2$1 = this.widget.cursorColor, t2$1 == null ? selectionStyle.cursorColor : t2$1), t2$2 == null ? cupertinoTheme.primaryColor : t2$2);
            selectionColor = (t2$3 = selectionStyle.selectionColor, t2$3 == null ? cupertinoTheme.primaryColor.withOpacity(0.4) : t2$3);
            cursorRadius == null ? cursorRadius = C[23] || CT.C23 : null;
            cursorOffset = new ui.Offset.new(-2 / media_query.MediaQuery.of(context).devicePixelRatio, 0.0);
            handleDidGainAccessibilityFocus = dart.fn(() => {
              if (!this[_effectiveFocusNode].hasFocus && this[_effectiveFocusNode].canRequestFocus) {
                this[_effectiveFocusNode].requestFocus();
              }
            }, T.VoidTovoid());
            break;
          }
        case C[2] || CT.C2:
        case C[3] || CT.C3:
          {
            this.forcePressEnabled = false;
            textSelectionControls == null ? textSelectionControls = text_selection$0.materialTextSelectionControls : null;
            paintCursorAboveText = false;
            cursorOpacityAnimates = false;
            cursorColor = (t2$5 = (t2$4 = this.widget.cursorColor, t2$4 == null ? selectionStyle.cursorColor : t2$4), t2$5 == null ? theme.colorScheme.primary : t2$5);
            selectionColor = (t2$6 = selectionStyle.selectionColor, t2$6 == null ? theme.colorScheme.primary.withOpacity(0.4) : t2$6);
            break;
          }
        case C[4] || CT.C4:
          {
            this.forcePressEnabled = false;
            textSelectionControls == null ? textSelectionControls = desktop_text_selection$.desktopTextSelectionControls : null;
            paintCursorAboveText = false;
            cursorOpacityAnimates = false;
            cursorColor = (t2$8 = (t2$7 = this.widget.cursorColor, t2$7 == null ? selectionStyle.cursorColor : t2$7), t2$8 == null ? theme.colorScheme.primary : t2$8);
            selectionColor = (t2$9 = selectionStyle.selectionColor, t2$9 == null ? theme.colorScheme.primary.withOpacity(0.4) : t2$9);
            break;
          }
        case C[5] || CT.C5:
          {
            this.forcePressEnabled = false;
            textSelectionControls == null ? textSelectionControls = desktop_text_selection$.desktopTextSelectionControls : null;
            paintCursorAboveText = false;
            cursorOpacityAnimates = false;
            cursorColor = (t2$11 = (t2$10 = this.widget.cursorColor, t2$10 == null ? selectionStyle.cursorColor : t2$10), t2$11 == null ? theme.colorScheme.primary : t2$11);
            selectionColor = (t2$12 = selectionStyle.selectionColor, t2$12 == null ? theme.colorScheme.primary.withOpacity(0.4) : t2$12);
            handleDidGainAccessibilityFocus = dart.fn(() => {
              if (!this[_effectiveFocusNode].hasFocus && this[_effectiveFocusNode].canRequestFocus) {
                this[_effectiveFocusNode].requestFocus();
              }
            }, T.VoidTovoid());
            break;
          }
      }
      let child = new basic.RepaintBoundary.new({child: new restoration$.UnmanagedRestorationScope.new({bucket: this.bucket, child: new editable_text.EditableText.new({key: this.editableTextKey, readOnly: this.widget.readOnly || !this[_isEnabled], toolbarOptions: this.widget.toolbarOptions, showCursor: this.widget.showCursor, showSelectionHandles: this[_showSelectionHandles], controller: controller, focusNode: focusNode, keyboardType: this.widget.keyboardType, textInputAction: this.widget.textInputAction, textCapitalization: this.widget.textCapitalization, style: style, strutStyle: this.widget.strutStyle, textAlign: this.widget.textAlign, textDirection: this.widget.textDirection, autofocus: this.widget.autofocus, obscuringCharacter: this.widget.obscuringCharacter, obscureText: this.widget.obscureText, autocorrect: this.widget.autocorrect, smartDashesType: this.widget.smartDashesType, smartQuotesType: this.widget.smartQuotesType, enableSuggestions: this.widget.enableSuggestions, maxLines: this.widget.maxLines, minLines: this.widget.minLines, expands: this.widget.expands, selectionColor: focusNode.hasFocus ? selectionColor : null, selectionControls: this.widget.selectionEnabled ? textSelectionControls : null, onChanged: this.widget.onChanged, onSelectionChanged: dart.bind(this, _handleSelectionChanged), onEditingComplete: this.widget.onEditingComplete, onSubmitted: this.widget.onSubmitted, onAppPrivateCommand: this.widget.onAppPrivateCommand, onSelectionHandleTapped: dart.bind(this, _handleSelectionHandleTapped), inputFormatters: formatters, rendererIgnoresPointer: true, mouseCursor: mouse_cursor.MouseCursor.defer, cursorWidth: this.widget.cursorWidth, cursorHeight: this.widget.cursorHeight, cursorRadius: cursorRadius, cursorColor: cursorColor, selectionHeightStyle: this.widget.selectionHeightStyle, selectionWidthStyle: this.widget.selectionWidthStyle, cursorOpacityAnimates: cursorOpacityAnimates, cursorOffset: cursorOffset, paintCursorAboveText: paintCursorAboveText, backgroundCursorColor: colors$.CupertinoColors.inactiveGray, scrollPadding: this.widget.scrollPadding, keyboardAppearance: keyboardAppearance, enableInteractiveSelection: this.widget.enableInteractiveSelection, dragStartBehavior: this.widget.dragStartBehavior, scrollController: this.widget.scrollController, scrollPhysics: this.widget.scrollPhysics, autofillClient: this, autocorrectionTextRectColor: autocorrectionTextRectColor, clipBehavior: this.widget.clipBehavior, restorationId: "editable", scribbleEnabled: this.widget.scribbleEnabled, enableIMEPersonalizedLearning: this.widget.enableIMEPersonalizedLearning, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
      if (this.widget.decoration != null) {
        child = new transitions.AnimatedBuilder.new({animation: new change_notifier._MergingListenable.new(T.JSArrayOfListenable().of([focusNode, controller])), builder: dart.fn((context, child) => new input_decorator.InputDecorator.new({decoration: this[_getEffectiveDecoration](), baseStyle: this.widget.style, textAlign: this.widget.textAlign, textAlignVertical: this.widget.textAlignVertical, isHovering: this[_isHovering], isFocused: focusNode.hasFocus, isEmpty: controller.value.text[$isEmpty], expands: this.widget.expands, child: child, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), T.BuildContextAndWidgetNToInputDecorator()), child: child, $creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
      }
      let effectiveMouseCursor = material_state.MaterialStateProperty.resolveAs(mouse_cursor.MouseCursor, (t2$13 = this.widget.mouseCursor, t2$13 == null ? material_state.MaterialStateMouseCursor.textable : t2$13), (() => {
        let t2 = T.LinkedHashSetOfMaterialState().new();
        if (!this[_isEnabled]) t2.add(material_state.MaterialState.disabled);
        if (this[_isHovering]) t2.add(material_state.MaterialState.hovered);
        if (focusNode.hasFocus) t2.add(material_state.MaterialState.focused);
        if (this[_hasError]) t2.add(material_state.MaterialState.error);
        return t2;
      })());
      let semanticsMaxValueLength = null;
      if (this[_effectiveMaxLengthEnforcement] !== text_formatter.MaxLengthEnforcement.none && this.widget.maxLength != null && dart.nullCheck(this.widget.maxLength) > 0) {
        semanticsMaxValueLength = this.widget.maxLength;
      } else {
        semanticsMaxValueLength = null;
      }
      return new routes.FocusTrapArea.new({focusNode: focusNode, child: new basic.MouseRegion.new({cursor: effectiveMouseCursor, onEnter: dart.fn(event => this[_handleHover](true), T.PointerEnterEventTovoid()), onExit: dart.fn(event => this[_handleHover](false), T.PointerExitEventTovoid()), child: new basic.IgnorePointer.new({ignoring: !this[_isEnabled], child: new transitions.AnimatedBuilder.new({animation: controller, builder: dart.fn((context, child) => new basic.Semantics.new({maxValueLength: semanticsMaxValueLength, currentValueLength: this[_currentLength], onTap: this.widget.readOnly ? null : dart.fn(() => {
                  if (!this[_effectiveController].selection.isValid) {
                    this[_effectiveController].selection = new text_editing.TextSelection.collapsed({offset: this[_effectiveController].text.length});
                  }
                  this[_requestKeyboard]();
                }, T.VoidTovoid()), onDidGainAccessibilityFocus: handleDidGainAccessibilityFocus, child: child, $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), T.BuildContextAndWidgetNToSemantics()), child: this[_selectionGestureDetectorBuilder].buildGestureDetector({behavior: proxy_box.HitTestBehavior.translucent, child: child}), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32}), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
    static ['_#new#tearOff']() {
      return new text_field._TextFieldState.new();
    }
  };
  (text_field._TextFieldState.new = function() {
    this[_controller] = null;
    this[_focusNode] = null;
    this[_isHovering] = false;
    this[_showSelectionHandles] = false;
    this[___TextFieldState__selectionGestureDetectorBuilder] = null;
    this[___TextFieldState_forcePressEnabled] = null;
    this.editableTextKey = T.GlobalKeyOfEditableTextState().new();
    text_field._TextFieldState.__proto__.new.call(this);
    ;
  }).prototype = text_field._TextFieldState.prototype;
  dart.addTypeTests(text_field._TextFieldState);
  dart.addTypeCaches(text_field._TextFieldState);
  text_field._TextFieldState[dart.implements] = () => [text_selection.TextSelectionGestureDetectorBuilderDelegate, autofill.AutofillClient];
  dart.setMethodSignature(text_field._TextFieldState, () => ({
    __proto__: dart.getMethods(text_field._TextFieldState.__proto__),
    [_getEffectiveDecoration]: dart.fnType(input_decorator.InputDecoration, []),
    restoreState: dart.fnType(dart.void, [dart.nullable(restoration.RestorationBucket), core.bool]),
    [_registerController]: dart.fnType(dart.void, []),
    [_createLocalController]: dart.fnType(dart.void, [], [dart.nullable(text_input.TextEditingValue)]),
    [_requestKeyboard]: dart.fnType(dart.void, []),
    [_shouldShowSelectionHandles]: dart.fnType(core.bool, [dart.nullable(text_input.SelectionChangedCause)]),
    [_handleFocusChanged]: dart.fnType(dart.void, []),
    [_handleSelectionChanged]: dart.fnType(dart.void, [text_editing.TextSelection, dart.nullable(text_input.SelectionChangedCause)]),
    [_handleSelectionHandleTapped]: dart.fnType(dart.void, []),
    [_handleHover]: dart.fnType(dart.void, [core.bool]),
    autofill: dart.fnType(dart.void, [text_input.TextEditingValue]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(text_field._TextFieldState, () => ({
    __proto__: dart.getGetters(text_field._TextFieldState.__proto__),
    [_effectiveController]: editable_text.TextEditingController,
    [_effectiveFocusNode]: focus_manager.FocusNode,
    [_effectiveMaxLengthEnforcement]: text_formatter.MaxLengthEnforcement,
    needsCounter: core.bool,
    [_selectionGestureDetectorBuilder]: text_field._TextFieldSelectionGestureDetectorBuilder,
    forcePressEnabled: core.bool,
    selectionEnabled: core.bool,
    [_isEnabled]: core.bool,
    [_currentLength]: core.int,
    [_hasIntrinsicError]: core.bool,
    [_hasError]: core.bool,
    [_canRequestFocus]: core.bool,
    restorationId: dart.nullable(core.String),
    [_editableText]: dart.nullable(editable_text.EditableTextState),
    autofillId: core.String,
    textInputConfiguration: text_input.TextInputConfiguration
  }));
  dart.setSetterSignature(text_field._TextFieldState, () => ({
    __proto__: dart.getSetters(text_field._TextFieldState.__proto__),
    [_selectionGestureDetectorBuilder]: text_field._TextFieldSelectionGestureDetectorBuilder,
    forcePressEnabled: core.bool
  }));
  dart.setLibraryUri(text_field._TextFieldState, I[0]);
  dart.setFieldSignature(text_field._TextFieldState, () => ({
    __proto__: dart.getFields(text_field._TextFieldState.__proto__),
    [_controller]: dart.fieldType(dart.nullable(restoration_properties.RestorableTextEditingController)),
    [_focusNode]: dart.fieldType(dart.nullable(focus_manager.FocusNode)),
    [_isHovering]: dart.fieldType(core.bool),
    [_showSelectionHandles]: dart.fieldType(core.bool),
    [___TextFieldState__selectionGestureDetectorBuilder]: dart.fieldType(dart.nullable(text_field._TextFieldSelectionGestureDetectorBuilder)),
    [___TextFieldState_forcePressEnabled]: dart.fieldType(dart.nullable(core.bool)),
    editableTextKey: dart.finalFieldType(framework.GlobalKey$(editable_text.EditableTextState))
  }));
  dart.trackLibraries("packages/flutter/src/material/text_field.dart", {
    "package:flutter/src/material/text_field.dart": text_field
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_field.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/text_field.dart.lib.js"}');
  // Exports:
  return {
    src__material__text_field: text_field
  };
}));

//# sourceMappingURL=text_field.dart.lib.js.map
