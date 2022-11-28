define(['dart_sdk', 'packages/flutter/src/material/date.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/semantics/semantics_service.dart', 'packages/flutter/src/services/haptic_feedback.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/widgets/page_view.dart', 'packages/flutter/src/services/keyboard_key.g.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/widgets/spacer.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/rendering/sliver_grid.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__flutter__src__material__calendar_date_picker_dart(dart_sdk, packages__flutter__src__material__date$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__semantics__semantics_service$46dart, packages__flutter__src__services__haptic_feedback$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__widgets__page_view$46dart, packages__flutter__src__services__keyboard_key$46g$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__widgets__spacer$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__rendering__sliver_grid$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date$ = packages__flutter__src__material__date$46dart.src__material__date;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const shortcuts = packages__flutter__src__widgets__title$46dart.src__widgets__shortcuts;
  const focus_traversal = packages__flutter__src__widgets__title$46dart.src__widgets__focus_traversal;
  const actions = packages__flutter__src__widgets__title$46dart.src__widgets__actions;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const binding = packages__flutter__src__widgets__title$46dart.src__widgets__binding;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const sliver = packages__flutter__src__widgets__title$46dart.src__widgets__sliver;
  const scroll_controller = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_controller;
  const debug$ = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const semantics_service = packages__flutter__src__semantics__semantics_service$46dart.src__semantics__semantics_service;
  const haptic_feedback = packages__flutter__src__services__haptic_feedback$46dart.src__services__haptic_feedback;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const page_view = packages__flutter__src__widgets__page_view$46dart.src__widgets__page_view;
  const keyboard_key$46g = packages__flutter__src__services__keyboard_key$46g$46dart.src__services__keyboard_key$46g;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const spacer = packages__flutter__src__widgets__spacer$46dart.src__widgets__spacer;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const sliver_grid = packages__flutter__src__rendering__sliver_grid$46dart.src__rendering__sliver_grid;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver$ = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var calendar_date_picker = Object.create(dart.library);
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $add = dartx.add;
  var $truncate = dartx.truncate;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StateOfStatefulWidget: () => (T.StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))(),
    GlobalKeyOfStateOfStatefulWidget: () => (T.GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(T.StateOfStatefulWidget())))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    CallbackActionOfNextFocusIntent: () => (T.CallbackActionOfNextFocusIntent = dart.constFn(actions.CallbackAction$(focus_traversal.NextFocusIntent)))(),
    CallbackActionOfPreviousFocusIntent: () => (T.CallbackActionOfPreviousFocusIntent = dart.constFn(actions.CallbackAction$(focus_traversal.PreviousFocusIntent)))(),
    CallbackActionOfDirectionalFocusIntent: () => (T.CallbackActionOfDirectionalFocusIntent = dart.constFn(actions.CallbackAction$(focus_traversal.DirectionalFocusIntent)))(),
    ActionOfIntent: () => (T.ActionOfIntent = dart.constFn(actions.Action$(actions.Intent)))(),
    LinkedMapOfType$ActionOfIntent: () => (T.LinkedMapOfType$ActionOfIntent = dart.constFn(_js_helper.LinkedMap$(core.Type, T.ActionOfIntent())))(),
    DurationTovoid: () => (T.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    ValueKeyOfDateTime: () => (T.ValueKeyOfDateTime = dart.constFn(key.ValueKey$(core.DateTime)))(),
    ListOfFocusNode: () => (T.ListOfFocusNode = dart.constFn(core.List$(focus_manager.FocusNode)))(),
    intToFocusNode: () => (T.intToFocusNode = dart.constFn(dart.fnType(focus_manager.FocusNode, [core.int])))(),
    ValueKeyOfint: () => (T.ValueKeyOfint = dart.constFn(key.ValueKey$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: date$.DatePickerMode.prototype,
        [_Enum__name]: "day",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CalendarDatePicker",
        [_Location_column]: 3,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
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
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_MonthPicker",
        [_Location_column]: 16,
        [_Location_line]: 265,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 52,
        [EdgeInsets_left]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "YearPicker",
        [_Location_column]: 18,
        [_Location_line]: 279,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 16,
        [_Location_line]: 277,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: date$.DatePickerMode.prototype,
        [_Enum__name]: "year",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 9,
        [_Location_line]: 299,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DatePickerModeToggleButton",
        [_Location_column]: 9,
        [_Location_line]: 304,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 12,
        [_Location_line]: 297,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DatePickerModeToggleButton",
        [_Location_column]: 9,
        [_Location_line]: 322,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 4,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 16
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 34,
        [_Location_line]: 394,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 25,
        [_Location_line]: 393,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 34,
        [_Location_line]: 404,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RotationTransition",
        [_Location_column]: 25,
        [_Location_line]: 402,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 28,
        [_Location_line]: 391,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 26,
        [_Location_line]: 389,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InkWell",
        [_Location_column]: 24,
        [_Location_line]: 387,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 22,
        [_Location_line]: 385,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 20,
        [_Location_line]: 381,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 11,
        [_Location_line]: 380,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 418,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[31] || CT.C31,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 108
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 14,
        [_Location_line]: 378,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 375,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_MonthPicker",
        [_Location_column]: 3,
        [_Location_line]: 433,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968066.0
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: shortcuts.SingleActivator.prototype,
        [SingleActivator_includeRepeats]: true,
        [SingleActivator_meta]: false,
        [SingleActivator_alt]: false,
        [SingleActivator_shift]: false,
        [SingleActivator_control]: false,
        [SingleActivator_trigger]: C[37] || CT.C37
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: focus_traversal.TraversalDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: focus_traversal.DirectionalFocusIntent.prototype,
        [DirectionalFocusIntent_ignoreTextFields]: true,
        [DirectionalFocusIntent_direction]: C[39] || CT.C39
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968067.0
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: shortcuts.SingleActivator.prototype,
        [SingleActivator_includeRepeats]: true,
        [SingleActivator_meta]: false,
        [SingleActivator_alt]: false,
        [SingleActivator_shift]: false,
        [SingleActivator_control]: false,
        [SingleActivator_trigger]: C[41] || CT.C41
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: focus_traversal.TraversalDirection.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: focus_traversal.DirectionalFocusIntent.prototype,
        [DirectionalFocusIntent_ignoreTextFields]: true,
        [DirectionalFocusIntent_direction]: C[43] || CT.C43
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968065.0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: shortcuts.SingleActivator.prototype,
        [SingleActivator_includeRepeats]: true,
        [SingleActivator_meta]: false,
        [SingleActivator_alt]: false,
        [SingleActivator_shift]: false,
        [SingleActivator_control]: false,
        [SingleActivator_trigger]: C[45] || CT.C45
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: focus_traversal.TraversalDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: focus_traversal.DirectionalFocusIntent.prototype,
        [DirectionalFocusIntent_ignoreTextFields]: true,
        [DirectionalFocusIntent_direction]: C[47] || CT.C47
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968068.0
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: shortcuts.SingleActivator.prototype,
        [SingleActivator_includeRepeats]: true,
        [SingleActivator_meta]: false,
        [SingleActivator_alt]: false,
        [SingleActivator_shift]: false,
        [SingleActivator_control]: false,
        [SingleActivator_trigger]: C[49] || CT.C49
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: focus_traversal.TraversalDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: focus_traversal.DirectionalFocusIntent.prototype,
        [DirectionalFocusIntent_ignoreTextFields]: true,
        [DirectionalFocusIntent_direction]: C[51] || CT.C51
      });
    },
    get C35() {
      return C[35] = dart.constMap(shortcuts.ShortcutActivator, actions.Intent, [C[36] || CT.C36, C[38] || CT.C38, C[40] || CT.C40, C[42] || CT.C42, C[44] || CT.C44, C[46] || CT.C46, C[48] || CT.C48, C[50] || CT.C50]);
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DayPicker",
        [_Location_column]: 12,
        [_Location_line]: 728,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 23,
        [_Location_line]: 752,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget__location]: C[54] || CT.C54,
        [Widget_key]: null,
        [Spacer_flex]: 1
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 31,
        [_Location_line]: 754,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57694
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[56] || CT.C56,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[57] || CT.C57
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 17,
        [_Location_line]: 753,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 31,
        [_Location_line]: 760,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57695
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[60] || CT.C60,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[61] || CT.C61
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 17,
        [_Location_line]: 759,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 20,
        [_Location_line]: 750,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 11,
        [_Location_line]: 747,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PageView",
        [_Location_column]: 33,
        [_Location_line]: 776,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_FocusedDate",
        [_Location_column]: 22,
        [_Location_line]: 774,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FocusableActionDetector",
        [_Location_column]: 20,
        [_Location_line]: 769,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 11,
        [_Location_line]: 768,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 745,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 744,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C71() {
      return C[71] = dart.constMap(focus_traversal.TraversalDirection, core.int, [C[51] || CT.C51, -7, C[43] || CT.C43, 1, C[47] || CT.C47, 7, C[39] || CT.C39, -1]);
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_FocusedDate",
        [_Location_column]: 9,
        [_Location_line]: 797,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DayPicker",
        [_Location_column]: 3,
        [_Location_line]: 821,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 30,
        [_Location_line]: 927,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 16,
        [_Location_line]: 927,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ExcludeSemantics",
        [_Location_column]: 18,
        [_Location_line]: 926,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 22,
        [_Location_line]: 964,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 998,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 18,
        [_Location_line]: 997,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 28,
        [_Location_line]: 995,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ExcludeSemantics",
        [_Location_column]: 23,
        [_Location_line]: 1003,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 20,
        [_Location_line]: 1012,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InkResponse",
        [_Location_column]: 23,
        [_Location_line]: 1007,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: scroll_physics.ClampingScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 23,
        [_Location_line]: 1035,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 1031,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "YearPicker",
        [_Location_column]: 3,
        [_Location_line]: 1092,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 1215,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 18,
        [_Location_line]: 1212,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 16,
        [_Location_line]: 1211,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 1207,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 23,
        [_Location_line]: 1206,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ExcludeSemantics",
        [_Location_column]: 18,
        [_Location_line]: 1222,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InkWell",
        [_Location_column]: 18,
        [_Location_line]: 1226,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 15,
        [_Location_line]: 1245,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[97] || CT.C97,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 27,
        [_Location_line]: 1247,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 1246,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 15,
        [_Location_line]: 1256,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[102] || CT.C102,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 12,
        [_Location_line]: 1243,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart"
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: calendar_date_picker._DayPickerGridDelegate.prototype
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: calendar_date_picker._YearPickerGridDelegate.prototype
      });
    }
  }, false);
  var C = Array(106).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/calendar_date_picker.dart",
    "package:flutter/src/material/calendar_date_picker.dart"
  ];
  var initialDate$ = dart.privateName(calendar_date_picker, "CalendarDatePicker.initialDate");
  var firstDate$ = dart.privateName(calendar_date_picker, "CalendarDatePicker.firstDate");
  var lastDate$ = dart.privateName(calendar_date_picker, "CalendarDatePicker.lastDate");
  var currentDate$ = dart.privateName(calendar_date_picker, "CalendarDatePicker.currentDate");
  var onDateChanged$ = dart.privateName(calendar_date_picker, "CalendarDatePicker.onDateChanged");
  var onDisplayedMonthChanged$ = dart.privateName(calendar_date_picker, "CalendarDatePicker.onDisplayedMonthChanged");
  var initialCalendarMode$ = dart.privateName(calendar_date_picker, "CalendarDatePicker.initialCalendarMode");
  var selectableDayPredicate$ = dart.privateName(calendar_date_picker, "CalendarDatePicker.selectableDayPredicate");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  calendar_date_picker.CalendarDatePicker = class CalendarDatePicker extends framework.StatefulWidget {
    get initialDate() {
      return this[initialDate$];
    }
    set initialDate(value) {
      super.initialDate = value;
    }
    get firstDate() {
      return this[firstDate$];
    }
    set firstDate(value) {
      super.firstDate = value;
    }
    get lastDate() {
      return this[lastDate$];
    }
    set lastDate(value) {
      super.lastDate = value;
    }
    get currentDate() {
      return this[currentDate$];
    }
    set currentDate(value) {
      super.currentDate = value;
    }
    get onDateChanged() {
      return this[onDateChanged$];
    }
    set onDateChanged(value) {
      super.onDateChanged = value;
    }
    get onDisplayedMonthChanged() {
      return this[onDisplayedMonthChanged$];
    }
    set onDisplayedMonthChanged(value) {
      super.onDisplayedMonthChanged = value;
    }
    get initialCalendarMode() {
      return this[initialCalendarMode$];
    }
    set initialCalendarMode(value) {
      super.initialCalendarMode = value;
    }
    get selectableDayPredicate() {
      return this[selectableDayPredicate$];
    }
    set selectableDayPredicate(value) {
      super.selectableDayPredicate = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let onDateChanged = opts && 'onDateChanged' in opts ? opts.onDateChanged : null;
      let onDisplayedMonthChanged = opts && 'onDisplayedMonthChanged' in opts ? opts.onDisplayedMonthChanged : null;
      let initialCalendarMode = opts && 'initialCalendarMode' in opts ? opts.initialCalendarMode : C[0] || CT.C0;
      let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
      return new calendar_date_picker.CalendarDatePicker.new({key: key, initialDate: initialDate, firstDate: firstDate, lastDate: lastDate, currentDate: currentDate, onDateChanged: onDateChanged, onDisplayedMonthChanged: onDisplayedMonthChanged, initialCalendarMode: initialCalendarMode, selectableDayPredicate: selectableDayPredicate, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    createState() {
      return new calendar_date_picker._CalendarDatePickerState.new();
    }
  };
  (calendar_date_picker.CalendarDatePicker.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let onDateChanged = opts && 'onDateChanged' in opts ? opts.onDateChanged : null;
    let onDisplayedMonthChanged = opts && 'onDisplayedMonthChanged' in opts ? opts.onDisplayedMonthChanged : null;
    let initialCalendarMode = opts && 'initialCalendarMode' in opts ? opts.initialCalendarMode : C[0] || CT.C0;
    let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onDateChanged$] = onDateChanged;
    this[onDisplayedMonthChanged$] = onDisplayedMonthChanged;
    this[initialCalendarMode$] = initialCalendarMode;
    this[selectableDayPredicate$] = selectableDayPredicate;
    if (!(initialDate !== null)) dart.assertFailed(null, I[0], 96, 15, "initialDate != null");
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 97, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 98, 15, "lastDate != null");
    this[initialDate$] = date$.DateUtils.dateOnly(initialDate);
    this[firstDate$] = date$.DateUtils.dateOnly(firstDate);
    this[lastDate$] = date$.DateUtils.dateOnly(lastDate);
    this[currentDate$] = date$.DateUtils.dateOnly((t0 = currentDate, t0 == null ? new core.DateTime.now() : t0));
    if (!(onDateChanged !== null)) dart.assertFailed(null, I[0], 103, 15, "onDateChanged != null");
    if (!(initialCalendarMode !== null)) dart.assertFailed(null, I[0], 104, 15, "initialCalendarMode != null");
    calendar_date_picker.CalendarDatePicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (!!this.lastDate.isBefore(this.firstDate)) dart.assertFailed("lastDate " + dart.str(this.lastDate) + " must be on or after firstDate " + dart.str(this.firstDate) + ".", I[0], 106, 7, "!this.lastDate.isBefore(this.firstDate)");
    if (!!this.initialDate.isBefore(this.firstDate)) dart.assertFailed("initialDate " + dart.str(this.initialDate) + " must be on or after firstDate " + dart.str(this.firstDate) + ".", I[0], 110, 7, "!this.initialDate.isBefore(this.firstDate)");
    if (!!this.initialDate.isAfter(this.lastDate)) dart.assertFailed("initialDate " + dart.str(this.initialDate) + " must be on or before lastDate " + dart.str(this.lastDate) + ".", I[0], 114, 7, "!this.initialDate.isAfter(this.lastDate)");
    if (!(this.selectableDayPredicate == null || dart.nullCheck(this.selectableDayPredicate)(this.initialDate))) dart.assertFailed("Provided initialDate " + dart.str(this.initialDate) + " must satisfy provided selectableDayPredicate.", I[0], 118, 7, "selectableDayPredicate == null || selectableDayPredicate!(this.initialDate)");
  }).prototype = calendar_date_picker.CalendarDatePicker.prototype;
  dart.addTypeTests(calendar_date_picker.CalendarDatePicker);
  dart.addTypeCaches(calendar_date_picker.CalendarDatePicker);
  dart.setMethodSignature(calendar_date_picker.CalendarDatePicker, () => ({
    __proto__: dart.getMethods(calendar_date_picker.CalendarDatePicker.__proto__),
    createState: dart.fnType(framework.State$(calendar_date_picker.CalendarDatePicker), [])
  }));
  dart.setLibraryUri(calendar_date_picker.CalendarDatePicker, I[1]);
  dart.setFieldSignature(calendar_date_picker.CalendarDatePicker, () => ({
    __proto__: dart.getFields(calendar_date_picker.CalendarDatePicker.__proto__),
    initialDate: dart.finalFieldType(core.DateTime),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    currentDate: dart.finalFieldType(core.DateTime),
    onDateChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    onDisplayedMonthChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.DateTime]))),
    initialCalendarMode: dart.finalFieldType(date$.DatePickerMode),
    selectableDayPredicate: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [core.DateTime])))
  }));
  var _announcedInitialDate = dart.privateName(calendar_date_picker, "_announcedInitialDate");
  var ___CalendarDatePickerState__mode = dart.privateName(calendar_date_picker, "_#_CalendarDatePickerState#_mode");
  var ___CalendarDatePickerState__currentDisplayedMonthDate = dart.privateName(calendar_date_picker, "_#_CalendarDatePickerState#_currentDisplayedMonthDate");
  var ___CalendarDatePickerState__selectedDate = dart.privateName(calendar_date_picker, "_#_CalendarDatePickerState#_selectedDate");
  var _monthPickerKey = dart.privateName(calendar_date_picker, "_monthPickerKey");
  var _yearPickerKey = dart.privateName(calendar_date_picker, "_yearPickerKey");
  var ___CalendarDatePickerState__localizations = dart.privateName(calendar_date_picker, "_#_CalendarDatePickerState#_localizations");
  var ___CalendarDatePickerState__textDirection = dart.privateName(calendar_date_picker, "_#_CalendarDatePickerState#_textDirection");
  var _mode = dart.privateName(calendar_date_picker, "_mode");
  var _currentDisplayedMonthDate = dart.privateName(calendar_date_picker, "_currentDisplayedMonthDate");
  var _selectedDate = dart.privateName(calendar_date_picker, "_selectedDate");
  var _localizations = dart.privateName(calendar_date_picker, "_localizations");
  var _textDirection = dart.privateName(calendar_date_picker, "_textDirection");
  var _vibrate = dart.privateName(calendar_date_picker, "_vibrate");
  var _handleModeChanged = dart.privateName(calendar_date_picker, "_handleModeChanged");
  var _handleMonthChanged = dart.privateName(calendar_date_picker, "_handleMonthChanged");
  var _handleYearChanged = dart.privateName(calendar_date_picker, "_handleYearChanged");
  var _handleDayChanged = dart.privateName(calendar_date_picker, "_handleDayChanged");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _buildPicker = dart.privateName(calendar_date_picker, "_buildPicker");
  calendar_date_picker._CalendarDatePickerState = class _CalendarDatePickerState extends framework.State$(calendar_date_picker.CalendarDatePicker) {
    get [_mode]() {
      let t0;
      t0 = this[___CalendarDatePickerState__mode];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_mode")) : t0;
    }
    set [_mode](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_mode$35param) {
      this[___CalendarDatePickerState__mode] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_mode$35param;
    }
    get [_currentDisplayedMonthDate]() {
      let t0;
      t0 = this[___CalendarDatePickerState__currentDisplayedMonthDate];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_currentDisplayedMonthDate")) : t0;
    }
    set [_currentDisplayedMonthDate](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_currentDisplayedMonthDate$35param) {
      this[___CalendarDatePickerState__currentDisplayedMonthDate] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_currentDisplayedMonthDate$35param;
    }
    get [_selectedDate]() {
      let t0;
      t0 = this[___CalendarDatePickerState__selectedDate];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_selectedDate")) : t0;
    }
    set [_selectedDate](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_selectedDate$35param) {
      this[___CalendarDatePickerState__selectedDate] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_selectedDate$35param;
    }
    get [_localizations]() {
      let t0;
      t0 = this[___CalendarDatePickerState__localizations];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_localizations")) : t0;
    }
    set [_localizations](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_localizations$35param) {
      this[___CalendarDatePickerState__localizations] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_localizations$35param;
    }
    get [_textDirection]() {
      let t0;
      t0 = this[___CalendarDatePickerState__textDirection];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_textDirection")) : t0;
    }
    set [_textDirection](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_textDirection$35param) {
      this[___CalendarDatePickerState__textDirection] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_textDirection$35param;
    }
    initState() {
      super.initState();
      this[_mode] = this.widget.initialCalendarMode;
      this[_currentDisplayedMonthDate] = new core.DateTime.new(this.widget.initialDate.year, this.widget.initialDate.month);
      this[_selectedDate] = this.widget.initialDate;
    }
    didUpdateWidget(oldWidget) {
      calendar_date_picker.CalendarDatePicker.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.initialCalendarMode !== oldWidget.initialCalendarMode) {
        this[_mode] = this.widget.initialCalendarMode;
      }
      if (!date$.DateUtils.isSameDay(this.widget.initialDate, oldWidget.initialDate)) {
        this[_currentDisplayedMonthDate] = new core.DateTime.new(this.widget.initialDate.year, this.widget.initialDate.month);
        this[_selectedDate] = this.widget.initialDate;
      }
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      if (!debug$.debugCheckHasMaterial(this.context)) dart.assertFailed(null, I[0], 184, 12, "debugCheckHasMaterial(context)");
      if (!debug$.debugCheckHasMaterialLocalizations(this.context)) dart.assertFailed(null, I[0], 185, 12, "debugCheckHasMaterialLocalizations(context)");
      if (!debug.debugCheckHasDirectionality(this.context)) dart.assertFailed(null, I[0], 186, 12, "debugCheckHasDirectionality(context)");
      this[_localizations] = material_localizations.MaterialLocalizations.of(this.context);
      this[_textDirection] = basic.Directionality.of(this.context);
      if (!this[_announcedInitialDate]) {
        this[_announcedInitialDate] = true;
        semantics_service.SemanticsService.announce(this[_localizations].formatFullDate(this[_selectedDate]), this[_textDirection]);
      }
    }
    [_vibrate]() {
      switch (theme.Theme.of(this.context).platform) {
        case C[2] || CT.C2:
        case C[3] || CT.C3:
        case C[4] || CT.C4:
        case C[5] || CT.C5:
          {
            haptic_feedback.HapticFeedback.vibrate();
            break;
          }
        case C[6] || CT.C6:
        case C[7] || CT.C7:
          {
            break;
          }
      }
    }
    [_handleModeChanged](mode) {
      this[_vibrate]();
      this.setState(dart.fn(() => {
        this[_mode] = mode;
        if (this[_mode] === date$.DatePickerMode.day) {
          semantics_service.SemanticsService.announce(this[_localizations].formatMonthYear(this[_selectedDate]), this[_textDirection]);
        } else {
          semantics_service.SemanticsService.announce(this[_localizations].formatYear(this[_selectedDate]), this[_textDirection]);
        }
      }, T.VoidTovoid()));
    }
    [_handleMonthChanged](date) {
      this.setState(dart.fn(() => {
        let t0;
        if (this[_currentDisplayedMonthDate].year !== date.year || this[_currentDisplayedMonthDate].month !== date.month) {
          this[_currentDisplayedMonthDate] = new core.DateTime.new(date.year, date.month);
          t0 = this.widget.onDisplayedMonthChanged;
          t0 == null ? null : t0(this[_currentDisplayedMonthDate]);
        }
      }, T.VoidTovoid()));
    }
    [_handleYearChanged](value) {
      this[_vibrate]();
      if (value.isBefore(this.widget.firstDate)) {
        value = this.widget.firstDate;
      } else if (value.isAfter(this.widget.lastDate)) {
        value = this.widget.lastDate;
      }
      this.setState(dart.fn(() => {
        this[_mode] = date$.DatePickerMode.day;
        this[_handleMonthChanged](value);
      }, T.VoidTovoid()));
    }
    [_handleDayChanged](value) {
      this[_vibrate]();
      this.setState(dart.fn(() => {
        let t1, t0;
        this[_selectedDate] = value;
        t0 = this.widget;
        t1 = this[_selectedDate];
        t0.onDateChanged(t1);
      }, T.VoidTovoid()));
    }
    [_buildPicker]() {
      switch (this[_mode]) {
        case C[0] || CT.C0:
          {
            return new calendar_date_picker._MonthPicker.new({key: this[_monthPickerKey], initialMonth: this[_currentDisplayedMonthDate], currentDate: this.widget.currentDate, firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, selectedDate: this[_selectedDate], onChanged: dart.bind(this, _handleDayChanged), onDisplayedMonthChanged: dart.bind(this, _handleMonthChanged), selectableDayPredicate: this.widget.selectableDayPredicate, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
          }
        case C[12] || CT.C12:
          {
            return new basic.Padding.new({padding: C[9] || CT.C9, child: new calendar_date_picker.YearPicker.new({key: this[_yearPickerKey], currentDate: this.widget.currentDate, firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, initialDate: this[_currentDisplayedMonthDate], selectedDate: this[_selectedDate], onChanged: dart.bind(this, _handleYearChanged), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
          }
      }
    }
    build(context) {
      if (!debug$.debugCheckHasMaterial(context)) dart.assertFailed(null, I[0], 294, 12, "debugCheckHasMaterial(context)");
      if (!debug$.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[0], 295, 12, "debugCheckHasMaterialLocalizations(context)");
      if (!debug.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[0], 296, 12, "debugCheckHasDirectionality(context)");
      return new basic.Stack.new({children: T.JSArrayOfWidget().of([new basic.SizedBox.new({height: 52 + 294, child: this[_buildPicker](), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), new calendar_date_picker._DatePickerModeToggleButton.new({mode: this[_mode], title: this[_localizations].formatMonthYear(this[_currentDisplayedMonthDate]), onTitlePressed: dart.fn(() => {
              this[_handleModeChanged](this[_mode] === date$.DatePickerMode.day ? date$.DatePickerMode.year : date$.DatePickerMode.day);
            }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14})]), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
    static ['_#new#tearOff']() {
      return new calendar_date_picker._CalendarDatePickerState.new();
    }
  };
  (calendar_date_picker._CalendarDatePickerState.new = function() {
    this[_announcedInitialDate] = false;
    this[___CalendarDatePickerState__mode] = null;
    this[___CalendarDatePickerState__currentDisplayedMonthDate] = null;
    this[___CalendarDatePickerState__selectedDate] = null;
    this[_monthPickerKey] = T.GlobalKeyOfStateOfStatefulWidget().new();
    this[_yearPickerKey] = T.GlobalKeyOfStateOfStatefulWidget().new();
    this[___CalendarDatePickerState__localizations] = null;
    this[___CalendarDatePickerState__textDirection] = null;
    calendar_date_picker._CalendarDatePickerState.__proto__.new.call(this);
    ;
  }).prototype = calendar_date_picker._CalendarDatePickerState.prototype;
  dart.addTypeTests(calendar_date_picker._CalendarDatePickerState);
  dart.addTypeCaches(calendar_date_picker._CalendarDatePickerState);
  dart.setMethodSignature(calendar_date_picker._CalendarDatePickerState, () => ({
    __proto__: dart.getMethods(calendar_date_picker._CalendarDatePickerState.__proto__),
    [_vibrate]: dart.fnType(dart.void, []),
    [_handleModeChanged]: dart.fnType(dart.void, [date$.DatePickerMode]),
    [_handleMonthChanged]: dart.fnType(dart.void, [core.DateTime]),
    [_handleYearChanged]: dart.fnType(dart.void, [core.DateTime]),
    [_handleDayChanged]: dart.fnType(dart.void, [core.DateTime]),
    [_buildPicker]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(calendar_date_picker._CalendarDatePickerState, () => ({
    __proto__: dart.getGetters(calendar_date_picker._CalendarDatePickerState.__proto__),
    [_mode]: date$.DatePickerMode,
    [_currentDisplayedMonthDate]: core.DateTime,
    [_selectedDate]: core.DateTime,
    [_localizations]: material_localizations.MaterialLocalizations,
    [_textDirection]: ui.TextDirection
  }));
  dart.setSetterSignature(calendar_date_picker._CalendarDatePickerState, () => ({
    __proto__: dart.getSetters(calendar_date_picker._CalendarDatePickerState.__proto__),
    [_mode]: date$.DatePickerMode,
    [_currentDisplayedMonthDate]: core.DateTime,
    [_selectedDate]: core.DateTime,
    [_localizations]: material_localizations.MaterialLocalizations,
    [_textDirection]: ui.TextDirection
  }));
  dart.setLibraryUri(calendar_date_picker._CalendarDatePickerState, I[1]);
  dart.setFieldSignature(calendar_date_picker._CalendarDatePickerState, () => ({
    __proto__: dart.getFields(calendar_date_picker._CalendarDatePickerState.__proto__),
    [_announcedInitialDate]: dart.fieldType(core.bool),
    [___CalendarDatePickerState__mode]: dart.fieldType(dart.nullable(date$.DatePickerMode)),
    [___CalendarDatePickerState__currentDisplayedMonthDate]: dart.fieldType(dart.nullable(core.DateTime)),
    [___CalendarDatePickerState__selectedDate]: dart.fieldType(dart.nullable(core.DateTime)),
    [_monthPickerKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_yearPickerKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [___CalendarDatePickerState__localizations]: dart.fieldType(dart.nullable(material_localizations.MaterialLocalizations)),
    [___CalendarDatePickerState__textDirection]: dart.fieldType(dart.nullable(ui.TextDirection))
  }));
  var mode$ = dart.privateName(calendar_date_picker, "_DatePickerModeToggleButton.mode");
  var title$ = dart.privateName(calendar_date_picker, "_DatePickerModeToggleButton.title");
  var onTitlePressed$ = dart.privateName(calendar_date_picker, "_DatePickerModeToggleButton.onTitlePressed");
  calendar_date_picker._DatePickerModeToggleButton = class _DatePickerModeToggleButton extends framework.StatefulWidget {
    get mode() {
      return this[mode$];
    }
    set mode(value) {
      super.mode = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get onTitlePressed() {
      return this[onTitlePressed$];
    }
    set onTitlePressed(value) {
      super.onTitlePressed = value;
    }
    static ['_#new#tearOff'](opts) {
      let mode = opts && 'mode' in opts ? opts.mode : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let onTitlePressed = opts && 'onTitlePressed' in opts ? opts.onTitlePressed : null;
      return new calendar_date_picker._DatePickerModeToggleButton.new({mode: mode, title: title, onTitlePressed: onTitlePressed, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
    createState() {
      return new calendar_date_picker._DatePickerModeToggleButtonState.new();
    }
  };
  (calendar_date_picker._DatePickerModeToggleButton.new = function(opts) {
    let mode = opts && 'mode' in opts ? opts.mode : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let onTitlePressed = opts && 'onTitlePressed' in opts ? opts.onTitlePressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[mode$] = mode;
    this[title$] = title;
    this[onTitlePressed$] = onTitlePressed;
    calendar_date_picker._DatePickerModeToggleButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = calendar_date_picker._DatePickerModeToggleButton.prototype;
  dart.addTypeTests(calendar_date_picker._DatePickerModeToggleButton);
  dart.addTypeCaches(calendar_date_picker._DatePickerModeToggleButton);
  dart.setMethodSignature(calendar_date_picker._DatePickerModeToggleButton, () => ({
    __proto__: dart.getMethods(calendar_date_picker._DatePickerModeToggleButton.__proto__),
    createState: dart.fnType(calendar_date_picker._DatePickerModeToggleButtonState, [])
  }));
  dart.setLibraryUri(calendar_date_picker._DatePickerModeToggleButton, I[1]);
  dart.setFieldSignature(calendar_date_picker._DatePickerModeToggleButton, () => ({
    __proto__: dart.getFields(calendar_date_picker._DatePickerModeToggleButton.__proto__),
    mode: dart.finalFieldType(date$.DatePickerMode),
    title: dart.finalFieldType(core.String),
    onTitlePressed: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  var ___DatePickerModeToggleButtonState__controller = dart.privateName(calendar_date_picker, "_#_DatePickerModeToggleButtonState#_controller");
  var _controller = dart.privateName(calendar_date_picker, "_controller");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var EdgeInsetsDirectional_bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  var EdgeInsetsDirectional_end = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  var EdgeInsetsDirectional_top = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  var EdgeInsetsDirectional_start = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(calendar_date_picker._DatePickerModeToggleButton) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(calendar_date_picker._DatePickerModeToggleButton)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(calendar_date_picker._DatePickerModeToggleButton));
  calendar_date_picker._DatePickerModeToggleButtonState = class _DatePickerModeToggleButtonState extends State_SingleTickerProviderStateMixin$36 {
    get [_controller]() {
      let t0;
      t0 = this[___DatePickerModeToggleButtonState__controller];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t0;
    }
    set [_controller](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_controller$35param) {
      this[___DatePickerModeToggleButtonState__controller] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_controller$35param;
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({value: this.widget.mode === date$.DatePickerMode.year ? 0.5 : 0.0, upperBound: 0.5, duration: C[17] || CT.C17, vsync: this});
    }
    didUpdateWidget(oldWidget) {
      calendar_date_picker._DatePickerModeToggleButton.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (oldWidget.mode === this.widget.mode) {
        return;
      }
      if (this.widget.mode === date$.DatePickerMode.year) {
        this[_controller].forward();
      } else {
        this[_controller].reverse();
      }
    }
    build(context) {
      let t1;
      let colorScheme = theme.Theme.of(context).colorScheme;
      let textTheme = theme.Theme.of(context).textTheme;
      let controlColor = colorScheme.onSurface.withOpacity(0.6);
      return new container.Container.new({padding: C[18] || CT.C18, height: 52, child: new basic.Row.new({children: (() => {
            let t0 = T.JSArrayOfWidget().of([new basic.Flexible.new({child: new basic.Semantics.new({label: material_localizations.MaterialLocalizations.of(context).selectYearSemanticsLabel, excludeSemantics: true, button: true, child: new basic.SizedBox.new({height: 52, child: new ink_well.InkWell.new({onTap: this.widget.onTitlePressed, child: new basic.Padding.new({padding: C[19] || CT.C19, child: new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Flexible.new({child: new text.Text.new(this.widget.title, {overflow: text_painter.TextOverflow.ellipsis, style: (t1 = textTheme.subtitle2, t1 == null ? null : t1.copyWith({color: controlColor})), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), $creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), new transitions.RotationTransition.new({turns: this[_controller], child: new icon.Icon.new(icons.Icons.arrow_drop_down, {color: controlColor, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23})]), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26}), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29})]);
            if (this.widget.mode === date$.DatePickerMode.day) t0.push(C[30] || CT.C30);
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32}), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    static ['_#new#tearOff']() {
      return new calendar_date_picker._DatePickerModeToggleButtonState.new();
    }
  };
  (calendar_date_picker._DatePickerModeToggleButtonState.new = function() {
    this[___DatePickerModeToggleButtonState__controller] = null;
    calendar_date_picker._DatePickerModeToggleButtonState.__proto__.new.call(this);
    ;
  }).prototype = calendar_date_picker._DatePickerModeToggleButtonState.prototype;
  dart.addTypeTests(calendar_date_picker._DatePickerModeToggleButtonState);
  dart.addTypeCaches(calendar_date_picker._DatePickerModeToggleButtonState);
  dart.setMethodSignature(calendar_date_picker._DatePickerModeToggleButtonState, () => ({
    __proto__: dart.getMethods(calendar_date_picker._DatePickerModeToggleButtonState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(calendar_date_picker._DatePickerModeToggleButtonState, () => ({
    __proto__: dart.getGetters(calendar_date_picker._DatePickerModeToggleButtonState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(calendar_date_picker._DatePickerModeToggleButtonState, () => ({
    __proto__: dart.getSetters(calendar_date_picker._DatePickerModeToggleButtonState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(calendar_date_picker._DatePickerModeToggleButtonState, I[1]);
  dart.setFieldSignature(calendar_date_picker._DatePickerModeToggleButtonState, () => ({
    __proto__: dart.getFields(calendar_date_picker._DatePickerModeToggleButtonState.__proto__),
    [___DatePickerModeToggleButtonState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  calendar_date_picker._MonthPicker = class _MonthPicker extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialMonth = opts && 'initialMonth' in opts ? opts.initialMonth : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
      let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
      let onDisplayedMonthChanged = opts && 'onDisplayedMonthChanged' in opts ? opts.onDisplayedMonthChanged : null;
      let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
      return new calendar_date_picker._MonthPicker.new({key: key, initialMonth: initialMonth, currentDate: currentDate, firstDate: firstDate, lastDate: lastDate, selectedDate: selectedDate, onChanged: onChanged, onDisplayedMonthChanged: onDisplayedMonthChanged, selectableDayPredicate: selectableDayPredicate, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
    }
    createState() {
      return new calendar_date_picker._MonthPickerState.new();
    }
  };
  (calendar_date_picker._MonthPicker.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialMonth = opts && 'initialMonth' in opts ? opts.initialMonth : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let onDisplayedMonthChanged = opts && 'onDisplayedMonthChanged' in opts ? opts.onDisplayedMonthChanged : null;
    let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.initialMonth = initialMonth;
    this.currentDate = currentDate;
    this.firstDate = firstDate;
    this.lastDate = lastDate;
    this.selectedDate = selectedDate;
    this.onChanged = onChanged;
    this.onDisplayedMonthChanged = onDisplayedMonthChanged;
    this.selectableDayPredicate = selectableDayPredicate;
    if (!(selectedDate !== null)) dart.assertFailed(null, I[0], 443, 15, "selectedDate != null");
    if (!(currentDate !== null)) dart.assertFailed(null, I[0], 444, 15, "currentDate != null");
    if (!(onChanged !== null)) dart.assertFailed(null, I[0], 445, 15, "onChanged != null");
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 446, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 447, 15, "lastDate != null");
    if (!!firstDate.isAfter(lastDate)) dart.assertFailed(null, I[0], 448, 15, "!firstDate.isAfter(lastDate)");
    if (!!selectedDate.isBefore(firstDate)) dart.assertFailed(null, I[0], 449, 15, "!selectedDate.isBefore(firstDate)");
    if (!!selectedDate.isAfter(lastDate)) dart.assertFailed(null, I[0], 450, 15, "!selectedDate.isAfter(lastDate)");
    calendar_date_picker._MonthPicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = calendar_date_picker._MonthPicker.prototype;
  dart.addTypeTests(calendar_date_picker._MonthPicker);
  dart.addTypeCaches(calendar_date_picker._MonthPicker);
  dart.setMethodSignature(calendar_date_picker._MonthPicker, () => ({
    __proto__: dart.getMethods(calendar_date_picker._MonthPicker.__proto__),
    createState: dart.fnType(calendar_date_picker._MonthPickerState, [])
  }));
  dart.setLibraryUri(calendar_date_picker._MonthPicker, I[1]);
  dart.setFieldSignature(calendar_date_picker._MonthPicker, () => ({
    __proto__: dart.getFields(calendar_date_picker._MonthPicker.__proto__),
    initialMonth: dart.finalFieldType(core.DateTime),
    currentDate: dart.finalFieldType(core.DateTime),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    selectedDate: dart.finalFieldType(core.DateTime),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    onDisplayedMonthChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    selectableDayPredicate: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [core.DateTime])))
  }));
  var _pageViewKey = dart.privateName(calendar_date_picker, "_pageViewKey");
  var ___MonthPickerState__currentMonth = dart.privateName(calendar_date_picker, "_#_MonthPickerState#_currentMonth");
  var ___MonthPickerState__pageController = dart.privateName(calendar_date_picker, "_#_MonthPickerState#_pageController");
  var ___MonthPickerState__localizations = dart.privateName(calendar_date_picker, "_#_MonthPickerState#_localizations");
  var ___MonthPickerState__textDirection = dart.privateName(calendar_date_picker, "_#_MonthPickerState#_textDirection");
  var _shortcutMap = dart.privateName(calendar_date_picker, "_shortcutMap");
  var _actionMap = dart.privateName(calendar_date_picker, "_actionMap");
  var ___MonthPickerState__dayGridFocus = dart.privateName(calendar_date_picker, "_#_MonthPickerState#_dayGridFocus");
  var _focusedDay = dart.privateName(calendar_date_picker, "_focusedDay");
  var _currentMonth = dart.privateName(calendar_date_picker, "_currentMonth");
  var _pageController = dart.privateName(calendar_date_picker, "_pageController");
  var _dayGridFocus = dart.privateName(calendar_date_picker, "_dayGridFocus");
  var SingleActivator_includeRepeats = dart.privateName(shortcuts, "SingleActivator.includeRepeats");
  var SingleActivator_meta = dart.privateName(shortcuts, "SingleActivator.meta");
  var SingleActivator_alt = dart.privateName(shortcuts, "SingleActivator.alt");
  var SingleActivator_shift = dart.privateName(shortcuts, "SingleActivator.shift");
  var SingleActivator_control = dart.privateName(shortcuts, "SingleActivator.control");
  var LogicalKeyboardKey_keyId = dart.privateName(keyboard_key$46g, "LogicalKeyboardKey.keyId");
  var SingleActivator_trigger = dart.privateName(shortcuts, "SingleActivator.trigger");
  var DirectionalFocusIntent_ignoreTextFields = dart.privateName(focus_traversal, "DirectionalFocusIntent.ignoreTextFields");
  var DirectionalFocusIntent_direction = dart.privateName(focus_traversal, "DirectionalFocusIntent.direction");
  var _handleGridNextFocus = dart.privateName(calendar_date_picker, "_handleGridNextFocus");
  var _handleGridPreviousFocus = dart.privateName(calendar_date_picker, "_handleGridPreviousFocus");
  var _handleDirectionFocus = dart.privateName(calendar_date_picker, "_handleDirectionFocus");
  var _showMonth = dart.privateName(calendar_date_picker, "_showMonth");
  var _handleDateSelected = dart.privateName(calendar_date_picker, "_handleDateSelected");
  var _focusableDayForMonth = dart.privateName(calendar_date_picker, "_focusableDayForMonth");
  var _handleMonthPageChanged = dart.privateName(calendar_date_picker, "_handleMonthPageChanged");
  var _isSelectable = dart.privateName(calendar_date_picker, "_isSelectable");
  var _isDisplayingLastMonth = dart.privateName(calendar_date_picker, "_isDisplayingLastMonth");
  var _handleNextMonth = dart.privateName(calendar_date_picker, "_handleNextMonth");
  var _isDisplayingFirstMonth = dart.privateName(calendar_date_picker, "_isDisplayingFirstMonth");
  var _handlePreviousMonth = dart.privateName(calendar_date_picker, "_handlePreviousMonth");
  var _handleGridFocusChange = dart.privateName(calendar_date_picker, "_handleGridFocusChange");
  var _nextDateInDirection = dart.privateName(calendar_date_picker, "_nextDateInDirection");
  var _dayDirectionOffset = dart.privateName(calendar_date_picker, "_dayDirectionOffset");
  var _buildItems = dart.privateName(calendar_date_picker, "_buildItems");
  var Spacer_flex = dart.privateName(spacer, "Spacer.flex");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  calendar_date_picker._MonthPickerState = class _MonthPickerState extends framework.State$(calendar_date_picker._MonthPicker) {
    get [_currentMonth]() {
      let t1;
      t1 = this[___MonthPickerState__currentMonth];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_currentMonth")) : t1;
    }
    set [_currentMonth](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_currentMonth$35param) {
      this[___MonthPickerState__currentMonth] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_currentMonth$35param;
    }
    get [_pageController]() {
      let t1;
      t1 = this[___MonthPickerState__pageController];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_pageController")) : t1;
    }
    set [_pageController](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_pageController$35param) {
      this[___MonthPickerState__pageController] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_pageController$35param;
    }
    get [_localizations]() {
      let t1;
      t1 = this[___MonthPickerState__localizations];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_localizations")) : t1;
    }
    set [_localizations](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_localizations$35param) {
      this[___MonthPickerState__localizations] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_localizations$35param;
    }
    get [_textDirection]() {
      let t1;
      t1 = this[___MonthPickerState__textDirection];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_textDirection")) : t1;
    }
    set [_textDirection](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_textDirection$35param) {
      this[___MonthPickerState__textDirection] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_textDirection$35param;
    }
    get [_dayGridFocus]() {
      let t1;
      t1 = this[___MonthPickerState__dayGridFocus];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_dayGridFocus")) : t1;
    }
    set [_dayGridFocus](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_dayGridFocus$35param) {
      this[___MonthPickerState__dayGridFocus] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_dayGridFocus$35param;
    }
    initState() {
      super.initState();
      this[_currentMonth] = this.widget.initialMonth;
      this[_pageController] = new page_view.PageController.new({initialPage: date$.DateUtils.monthDelta(this.widget.firstDate, this[_currentMonth])});
      this[_shortcutMap] = C[35] || CT.C35;
      this[_actionMap] = new (T.LinkedMapOfType$ActionOfIntent()).from([dart.wrapType(focus_traversal.NextFocusIntent), new (T.CallbackActionOfNextFocusIntent()).new({onInvoke: dart.bind(this, _handleGridNextFocus)}), dart.wrapType(focus_traversal.PreviousFocusIntent), new (T.CallbackActionOfPreviousFocusIntent()).new({onInvoke: dart.bind(this, _handleGridPreviousFocus)}), dart.wrapType(focus_traversal.DirectionalFocusIntent), new (T.CallbackActionOfDirectionalFocusIntent()).new({onInvoke: dart.bind(this, _handleDirectionFocus)})]);
      this[_dayGridFocus] = new focus_manager.FocusNode.new({debugLabel: "Day Grid"});
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_localizations] = material_localizations.MaterialLocalizations.of(this.context);
      this[_textDirection] = basic.Directionality.of(this.context);
    }
    didUpdateWidget(oldWidget) {
      calendar_date_picker._MonthPicker.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!this.widget.initialMonth._equals(oldWidget.initialMonth) && !this.widget.initialMonth._equals(this[_currentMonth])) {
        binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(timeStamp => this[_showMonth](this.widget.initialMonth, {jump: true}), T.DurationTovoid()));
      }
    }
    dispose() {
      this[_pageController].dispose();
      this[_dayGridFocus].dispose();
      super.dispose();
    }
    [_handleDateSelected](selectedDate) {
      let t2, t1;
      this[_focusedDay] = selectedDate;
      t1 = this.widget;
      t2 = selectedDate;
      t1.onChanged(t2);
    }
    [_handleMonthPageChanged](monthPage) {
      this.setState(dart.fn(() => {
        let t2, t1;
        let monthDate = date$.DateUtils.addMonthsToMonthDate(this.widget.firstDate, monthPage);
        if (!date$.DateUtils.isSameMonth(this[_currentMonth], monthDate)) {
          this[_currentMonth] = new core.DateTime.new(monthDate.year, monthDate.month);
          t1 = this.widget;
          t2 = this[_currentMonth];
          t1.onDisplayedMonthChanged(t2);
          if (this[_focusedDay] != null && !date$.DateUtils.isSameMonth(this[_focusedDay], this[_currentMonth])) {
            this[_focusedDay] = this[_focusableDayForMonth](this[_currentMonth], dart.nullCheck(this[_focusedDay]).day);
          }
          semantics_service.SemanticsService.announce(this[_localizations].formatMonthYear(this[_currentMonth]), this[_textDirection]);
        }
      }, T.VoidTovoid()));
    }
    [_focusableDayForMonth](month, preferredDay) {
      let daysInMonth = date$.DateUtils.getDaysInMonth(month.year, month.month);
      if (preferredDay <= daysInMonth) {
        let newFocus = new core.DateTime.new(month.year, month.month, preferredDay);
        if (this[_isSelectable](newFocus)) {
          return newFocus;
        }
      }
      for (let day = 1; day <= daysInMonth; day = day + 1) {
        let newFocus = new core.DateTime.new(month.year, month.month, day);
        if (this[_isSelectable](newFocus)) {
          return newFocus;
        }
      }
      return null;
    }
    [_handleNextMonth]() {
      if (!this[_isDisplayingLastMonth]) {
        this[_pageController].nextPage({duration: calendar_date_picker._monthScrollDuration, curve: curves.Curves.ease});
      }
    }
    [_handlePreviousMonth]() {
      if (!this[_isDisplayingFirstMonth]) {
        this[_pageController].previousPage({duration: calendar_date_picker._monthScrollDuration, curve: curves.Curves.ease});
      }
    }
    [_showMonth](month, opts) {
      let jump = opts && 'jump' in opts ? opts.jump : false;
      let monthPage = date$.DateUtils.monthDelta(this.widget.firstDate, month);
      if (jump) {
        this[_pageController].jumpToPage(monthPage);
      } else {
        this[_pageController].animateToPage(monthPage, {duration: calendar_date_picker._monthScrollDuration, curve: curves.Curves.ease});
      }
    }
    get [_isDisplayingFirstMonth]() {
      return !this[_currentMonth].isAfter(new core.DateTime.new(this.widget.firstDate.year, this.widget.firstDate.month));
    }
    get [_isDisplayingLastMonth]() {
      return !this[_currentMonth].isBefore(new core.DateTime.new(this.widget.lastDate.year, this.widget.lastDate.month));
    }
    [_handleGridFocusChange](focused) {
      this.setState(dart.fn(() => {
        if (focused && this[_focusedDay] == null) {
          if (date$.DateUtils.isSameMonth(this.widget.selectedDate, this[_currentMonth])) {
            this[_focusedDay] = this.widget.selectedDate;
          } else if (date$.DateUtils.isSameMonth(this.widget.currentDate, this[_currentMonth])) {
            this[_focusedDay] = this[_focusableDayForMonth](this[_currentMonth], this.widget.currentDate.day);
          } else {
            this[_focusedDay] = this[_focusableDayForMonth](this[_currentMonth], 1);
          }
        }
      }, T.VoidTovoid()));
    }
    [_handleGridNextFocus](intent) {
      this[_dayGridFocus].requestFocus();
      this[_dayGridFocus].nextFocus();
    }
    [_handleGridPreviousFocus](intent) {
      this[_dayGridFocus].requestFocus();
      this[_dayGridFocus].previousFocus();
    }
    [_handleDirectionFocus](intent) {
      if (!(this[_focusedDay] != null)) dart.assertFailed(null, I[0], 679, 12, "_focusedDay != null");
      this.setState(dart.fn(() => {
        let nextDate = this[_nextDateInDirection](dart.nullCheck(this[_focusedDay]), intent.direction);
        if (nextDate != null) {
          this[_focusedDay] = nextDate;
          if (!date$.DateUtils.isSameMonth(this[_focusedDay], this[_currentMonth])) {
            this[_showMonth](dart.nullCheck(this[_focusedDay]));
          }
        }
      }, T.VoidTovoid()));
    }
    [_dayDirectionOffset](traversalDirection, textDirection) {
      if (textDirection === ui.TextDirection.rtl) {
        if (traversalDirection === focus_traversal.TraversalDirection.left) {
          traversalDirection = focus_traversal.TraversalDirection.right;
        } else if (traversalDirection === focus_traversal.TraversalDirection.right) {
          traversalDirection = focus_traversal.TraversalDirection.left;
        }
      }
      return dart.nullCheck(calendar_date_picker._MonthPickerState._directionOffset[$_get](traversalDirection));
    }
    [_nextDateInDirection](date, direction) {
      let textDirection = basic.Directionality.of(this.context);
      let nextDate = date$.DateUtils.addDaysToDate(date, this[_dayDirectionOffset](direction, textDirection));
      while (!nextDate.isBefore(this.widget.firstDate) && !nextDate.isAfter(this.widget.lastDate)) {
        if (this[_isSelectable](nextDate)) {
          return nextDate;
        }
        nextDate = date$.DateUtils.addDaysToDate(nextDate, this[_dayDirectionOffset](direction, textDirection));
      }
      return null;
    }
    [_isSelectable](date) {
      return this.widget.selectableDayPredicate == null || dart.nullCheck(this.widget.selectableDayPredicate)(date);
    }
    [_buildItems](context, index) {
      let month = date$.DateUtils.addMonthsToMonthDate(this.widget.firstDate, index);
      return new calendar_date_picker._DayPicker.new({key: new (T.ValueKeyOfDateTime()).new(month), selectedDate: this.widget.selectedDate, currentDate: this.widget.currentDate, onChanged: dart.bind(this, _handleDateSelected), firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, displayedMonth: month, selectableDayPredicate: this.widget.selectableDayPredicate, $creationLocationd_0dea112b090073317d4: C[52] || CT.C52});
    }
    build(context) {
      let controlColor = theme.Theme.of(context).colorScheme.onSurface.withOpacity(0.6);
      return new basic.Semantics.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([new container.Container.new({padding: C[18] || CT.C18, height: 52, child: new basic.Row.new({children: T.JSArrayOfWidget().of([C[53] || CT.C53, new icon_button.IconButton.new({icon: C[55] || CT.C55, color: controlColor, tooltip: this[_isDisplayingFirstMonth] ? null : this[_localizations].previousMonthTooltip, onPressed: this[_isDisplayingFirstMonth] ? null : dart.bind(this, _handlePreviousMonth), $creationLocationd_0dea112b090073317d4: C[58] || CT.C58}), new icon_button.IconButton.new({icon: C[59] || CT.C59, color: controlColor, tooltip: this[_isDisplayingLastMonth] ? null : this[_localizations].nextMonthTooltip, onPressed: this[_isDisplayingLastMonth] ? null : dart.bind(this, _handleNextMonth), $creationLocationd_0dea112b090073317d4: C[62] || CT.C62})]), $creationLocationd_0dea112b090073317d4: C[63] || CT.C63}), $creationLocationd_0dea112b090073317d4: C[64] || CT.C64}), new basic.Expanded.new({child: new actions.FocusableActionDetector.new({shortcuts: this[_shortcutMap], actions: this[_actionMap], focusNode: this[_dayGridFocus], onFocusChange: dart.bind(this, _handleGridFocusChange), child: new calendar_date_picker._FocusedDate.new({date: this[_dayGridFocus].hasFocus ? this[_focusedDay] : null, child: new page_view.PageView.builder({key: this[_pageViewKey], controller: this[_pageController], itemBuilder: dart.bind(this, _buildItems), itemCount: date$.DateUtils.monthDelta(this.widget.firstDate, this.widget.lastDate) + 1, onPageChanged: dart.bind(this, _handleMonthPageChanged), $creationLocationd_0dea112b090073317d4: C[65] || CT.C65}), $creationLocationd_0dea112b090073317d4: C[66] || CT.C66}), $creationLocationd_0dea112b090073317d4: C[67] || CT.C67}), $creationLocationd_0dea112b090073317d4: C[68] || CT.C68})]), $creationLocationd_0dea112b090073317d4: C[69] || CT.C69}), $creationLocationd_0dea112b090073317d4: C[70] || CT.C70});
    }
    static ['_#new#tearOff']() {
      return new calendar_date_picker._MonthPickerState.new();
    }
  };
  (calendar_date_picker._MonthPickerState.new = function() {
    this[_pageViewKey] = T.GlobalKeyOfStateOfStatefulWidget().new();
    this[___MonthPickerState__currentMonth] = null;
    this[___MonthPickerState__pageController] = null;
    this[___MonthPickerState__localizations] = null;
    this[___MonthPickerState__textDirection] = null;
    this[_shortcutMap] = null;
    this[_actionMap] = null;
    this[___MonthPickerState__dayGridFocus] = null;
    this[_focusedDay] = null;
    calendar_date_picker._MonthPickerState.__proto__.new.call(this);
    ;
  }).prototype = calendar_date_picker._MonthPickerState.prototype;
  dart.addTypeTests(calendar_date_picker._MonthPickerState);
  dart.addTypeCaches(calendar_date_picker._MonthPickerState);
  dart.setMethodSignature(calendar_date_picker._MonthPickerState, () => ({
    __proto__: dart.getMethods(calendar_date_picker._MonthPickerState.__proto__),
    [_handleDateSelected]: dart.fnType(dart.void, [core.DateTime]),
    [_handleMonthPageChanged]: dart.fnType(dart.void, [core.int]),
    [_focusableDayForMonth]: dart.fnType(dart.nullable(core.DateTime), [core.DateTime, core.int]),
    [_handleNextMonth]: dart.fnType(dart.void, []),
    [_handlePreviousMonth]: dart.fnType(dart.void, []),
    [_showMonth]: dart.fnType(dart.void, [core.DateTime], {jump: core.bool}, {}),
    [_handleGridFocusChange]: dart.fnType(dart.void, [core.bool]),
    [_handleGridNextFocus]: dart.fnType(dart.void, [focus_traversal.NextFocusIntent]),
    [_handleGridPreviousFocus]: dart.fnType(dart.void, [focus_traversal.PreviousFocusIntent]),
    [_handleDirectionFocus]: dart.fnType(dart.void, [focus_traversal.DirectionalFocusIntent]),
    [_dayDirectionOffset]: dart.fnType(core.int, [focus_traversal.TraversalDirection, ui.TextDirection]),
    [_nextDateInDirection]: dart.fnType(dart.nullable(core.DateTime), [core.DateTime, focus_traversal.TraversalDirection]),
    [_isSelectable]: dart.fnType(core.bool, [core.DateTime]),
    [_buildItems]: dart.fnType(framework.Widget, [framework.BuildContext, core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(calendar_date_picker._MonthPickerState, () => ({
    __proto__: dart.getGetters(calendar_date_picker._MonthPickerState.__proto__),
    [_currentMonth]: core.DateTime,
    [_pageController]: page_view.PageController,
    [_localizations]: material_localizations.MaterialLocalizations,
    [_textDirection]: ui.TextDirection,
    [_dayGridFocus]: focus_manager.FocusNode,
    [_isDisplayingFirstMonth]: core.bool,
    [_isDisplayingLastMonth]: core.bool
  }));
  dart.setSetterSignature(calendar_date_picker._MonthPickerState, () => ({
    __proto__: dart.getSetters(calendar_date_picker._MonthPickerState.__proto__),
    [_currentMonth]: core.DateTime,
    [_pageController]: page_view.PageController,
    [_localizations]: material_localizations.MaterialLocalizations,
    [_textDirection]: ui.TextDirection,
    [_dayGridFocus]: focus_manager.FocusNode
  }));
  dart.setLibraryUri(calendar_date_picker._MonthPickerState, I[1]);
  dart.setFieldSignature(calendar_date_picker._MonthPickerState, () => ({
    __proto__: dart.getFields(calendar_date_picker._MonthPickerState.__proto__),
    [_pageViewKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [___MonthPickerState__currentMonth]: dart.fieldType(dart.nullable(core.DateTime)),
    [___MonthPickerState__pageController]: dart.fieldType(dart.nullable(page_view.PageController)),
    [___MonthPickerState__localizations]: dart.fieldType(dart.nullable(material_localizations.MaterialLocalizations)),
    [___MonthPickerState__textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_shortcutMap]: dart.fieldType(dart.nullable(core.Map$(shortcuts.ShortcutActivator, actions.Intent))),
    [_actionMap]: dart.fieldType(dart.nullable(core.Map$(core.Type, actions.Action$(actions.Intent)))),
    [___MonthPickerState__dayGridFocus]: dart.fieldType(dart.nullable(focus_manager.FocusNode)),
    [_focusedDay]: dart.fieldType(dart.nullable(core.DateTime))
  }));
  dart.setStaticFieldSignature(calendar_date_picker._MonthPickerState, () => ['_directionOffset']);
  dart.defineLazy(calendar_date_picker._MonthPickerState, {
    /*calendar_date_picker._MonthPickerState._directionOffset*/get _directionOffset() {
      return C[71] || CT.C71;
    }
  }, false);
  var date$0 = dart.privateName(calendar_date_picker, "_FocusedDate.date");
  calendar_date_picker._FocusedDate = class _FocusedDate extends framework.InheritedWidget {
    get date() {
      return this[date$0];
    }
    set date(value) {
      super.date = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let date = opts && 'date' in opts ? opts.date : null;
      return new calendar_date_picker._FocusedDate.new({child: child, date: date, $creationLocationd_0dea112b090073317d4: C[72] || CT.C72});
    }
    updateShouldNotify(oldWidget) {
      calendar_date_picker._FocusedDate.as(oldWidget);
      return !date$.DateUtils.isSameDay(this.date, oldWidget.date);
    }
    static of(context) {
      let t1;
      let focusedDate = context.dependOnInheritedWidgetOfExactType(calendar_date_picker._FocusedDate);
      t1 = focusedDate;
      return t1 == null ? null : t1.date;
    }
  };
  (calendar_date_picker._FocusedDate.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let date = opts && 'date' in opts ? opts.date : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[date$0] = date;
    calendar_date_picker._FocusedDate.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = calendar_date_picker._FocusedDate.prototype;
  dart.addTypeTests(calendar_date_picker._FocusedDate);
  dart.addTypeCaches(calendar_date_picker._FocusedDate);
  dart.setMethodSignature(calendar_date_picker._FocusedDate, () => ({
    __proto__: dart.getMethods(calendar_date_picker._FocusedDate.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setStaticMethodSignature(calendar_date_picker._FocusedDate, () => ['of']);
  dart.setLibraryUri(calendar_date_picker._FocusedDate, I[1]);
  dart.setFieldSignature(calendar_date_picker._FocusedDate, () => ({
    __proto__: dart.getFields(calendar_date_picker._FocusedDate.__proto__),
    date: dart.finalFieldType(dart.nullable(core.DateTime))
  }));
  calendar_date_picker._DayPicker = class _DayPicker extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let displayedMonth = opts && 'displayedMonth' in opts ? opts.displayedMonth : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
      let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
      let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
      return new calendar_date_picker._DayPicker.new({key: key, currentDate: currentDate, displayedMonth: displayedMonth, firstDate: firstDate, lastDate: lastDate, selectedDate: selectedDate, onChanged: onChanged, selectableDayPredicate: selectableDayPredicate, $creationLocationd_0dea112b090073317d4: C[73] || CT.C73});
    }
    createState() {
      return new calendar_date_picker._DayPickerState.new();
    }
  };
  (calendar_date_picker._DayPicker.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let displayedMonth = opts && 'displayedMonth' in opts ? opts.displayedMonth : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.currentDate = currentDate;
    this.displayedMonth = displayedMonth;
    this.firstDate = firstDate;
    this.lastDate = lastDate;
    this.selectedDate = selectedDate;
    this.onChanged = onChanged;
    this.selectableDayPredicate = selectableDayPredicate;
    if (!(currentDate !== null)) dart.assertFailed(null, I[0], 830, 15, "currentDate != null");
    if (!(displayedMonth !== null)) dart.assertFailed(null, I[0], 831, 15, "displayedMonth != null");
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 832, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 833, 15, "lastDate != null");
    if (!(selectedDate !== null)) dart.assertFailed(null, I[0], 834, 15, "selectedDate != null");
    if (!(onChanged !== null)) dart.assertFailed(null, I[0], 835, 15, "onChanged != null");
    if (!!firstDate.isAfter(lastDate)) dart.assertFailed(null, I[0], 836, 15, "!firstDate.isAfter(lastDate)");
    if (!!selectedDate.isBefore(firstDate)) dart.assertFailed(null, I[0], 837, 15, "!selectedDate.isBefore(firstDate)");
    if (!!selectedDate.isAfter(lastDate)) dart.assertFailed(null, I[0], 838, 15, "!selectedDate.isAfter(lastDate)");
    calendar_date_picker._DayPicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = calendar_date_picker._DayPicker.prototype;
  dart.addTypeTests(calendar_date_picker._DayPicker);
  dart.addTypeCaches(calendar_date_picker._DayPicker);
  dart.setMethodSignature(calendar_date_picker._DayPicker, () => ({
    __proto__: dart.getMethods(calendar_date_picker._DayPicker.__proto__),
    createState: dart.fnType(calendar_date_picker._DayPickerState, [])
  }));
  dart.setLibraryUri(calendar_date_picker._DayPicker, I[1]);
  dart.setFieldSignature(calendar_date_picker._DayPicker, () => ({
    __proto__: dart.getFields(calendar_date_picker._DayPicker.__proto__),
    selectedDate: dart.finalFieldType(core.DateTime),
    currentDate: dart.finalFieldType(core.DateTime),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    displayedMonth: dart.finalFieldType(core.DateTime),
    selectableDayPredicate: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [core.DateTime])))
  }));
  var ___DayPickerState__dayFocusNodes = dart.privateName(calendar_date_picker, "_#_DayPickerState#_dayFocusNodes");
  var _dayFocusNodes = dart.privateName(calendar_date_picker, "_dayFocusNodes");
  var _dayHeaders = dart.privateName(calendar_date_picker, "_dayHeaders");
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  calendar_date_picker._DayPickerState = class _DayPickerState extends framework.State$(calendar_date_picker._DayPicker) {
    get [_dayFocusNodes]() {
      let t1;
      t1 = this[___DayPickerState__dayFocusNodes];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_dayFocusNodes")) : t1;
    }
    set [_dayFocusNodes](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_dayFocusNodes$35param) {
      this[___DayPickerState__dayFocusNodes] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_dayFocusNodes$35param;
    }
    initState() {
      super.initState();
      let daysInMonth = date$.DateUtils.getDaysInMonth(this.widget.displayedMonth.year, this.widget.displayedMonth.month);
      this[_dayFocusNodes] = T.ListOfFocusNode().generate(daysInMonth, dart.fn(index => new focus_manager.FocusNode.new({skipTraversal: true, debugLabel: "Day " + dart.str(index + 1)}), T.intToFocusNode()));
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      let focusedDate = calendar_date_picker._FocusedDate.of(this.context);
      if (focusedDate != null && date$.DateUtils.isSameMonth(this.widget.displayedMonth, focusedDate)) {
        this[_dayFocusNodes][$_get](focusedDate.day - 1).requestFocus();
      }
    }
    dispose() {
      for (let node of this[_dayFocusNodes]) {
        node.dispose();
      }
      super.dispose();
    }
    [_dayHeaders](headerStyle, localizations) {
      let result = T.JSArrayOfWidget().of([]);
      for (let i = localizations.firstDayOfWeekIndex; true; i = (i + 1)[$modulo](7)) {
        let weekday = localizations.narrowWeekdays[$_get](i);
        result[$add](new basic.ExcludeSemantics.new({child: new basic.Center.new({child: new text.Text.new(weekday, {style: headerStyle, $creationLocationd_0dea112b090073317d4: C[74] || CT.C74}), $creationLocationd_0dea112b090073317d4: C[75] || CT.C75}), $creationLocationd_0dea112b090073317d4: C[76] || CT.C76}));
        if (i === (localizations.firstDayOfWeekIndex - 1)[$modulo](7)) {
          break;
        }
      }
      return result;
    }
    build(context) {
      let t1;
      let colorScheme = theme.Theme.of(context).colorScheme;
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let textTheme = theme.Theme.of(context).textTheme;
      let headerStyle = (t1 = textTheme.caption, t1 == null ? null : t1.apply({color: colorScheme.onSurface.withOpacity(0.6)}));
      let dayStyle = dart.nullCheck(textTheme.caption);
      let enabledDayColor = colorScheme.onSurface.withOpacity(0.87);
      let disabledDayColor = colorScheme.onSurface.withOpacity(0.38);
      let selectedDayColor = colorScheme.onPrimary;
      let selectedDayBackground = colorScheme.primary;
      let todayColor = colorScheme.primary;
      let year = this.widget.displayedMonth.year;
      let month = this.widget.displayedMonth.month;
      let daysInMonth = date$.DateUtils.getDaysInMonth(year, month);
      let dayOffset = date$.DateUtils.firstDayOffset(year, month, localizations);
      let dayItems = this[_dayHeaders](headerStyle, localizations);
      let day = -dayOffset;
      while (day < daysInMonth) {
        day = day + 1;
        if (day < 1) {
          dayItems[$add](new container.Container.new({$creationLocationd_0dea112b090073317d4: C[77] || CT.C77}));
        } else {
          let dayToBuild = new core.DateTime.new(year, month, day);
          let isDisabled = dayToBuild.isAfter(this.widget.lastDate) || dayToBuild.isBefore(this.widget.firstDate) || this.widget.selectableDayPredicate != null && !dart.nullCheck(this.widget.selectableDayPredicate)(dayToBuild);
          let isSelectedDay = date$.DateUtils.isSameDay(this.widget.selectedDate, dayToBuild);
          let isToday = date$.DateUtils.isSameDay(this.widget.currentDate, dayToBuild);
          let decoration = null;
          let dayColor = enabledDayColor;
          if (isSelectedDay) {
            dayColor = selectedDayColor;
            decoration = new box_decoration.BoxDecoration.new({color: selectedDayBackground, shape: box_border.BoxShape.circle});
          } else if (isDisabled) {
            dayColor = disabledDayColor;
          } else if (isToday) {
            dayColor = todayColor;
            decoration = new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: todayColor}), shape: box_border.BoxShape.circle});
          }
          let dayWidget = new container.Container.new({decoration: decoration, child: new basic.Center.new({child: new text.Text.new(localizations.formatDecimal(day), {style: dayStyle.apply({color: dayColor}), $creationLocationd_0dea112b090073317d4: C[78] || CT.C78}), $creationLocationd_0dea112b090073317d4: C[79] || CT.C79}), $creationLocationd_0dea112b090073317d4: C[80] || CT.C80});
          if (isDisabled) {
            dayWidget = new basic.ExcludeSemantics.new({child: dayWidget, $creationLocationd_0dea112b090073317d4: C[81] || CT.C81});
          } else {
            dayWidget = new ink_well.InkResponse.new({focusNode: this[_dayFocusNodes][$_get](day - 1), onTap: dart.fn(() => {
                let t2, t1;
                t1 = this.widget;
                t2 = dayToBuild;
                return t1.onChanged(t2);
              }, T.VoidTovoid()), radius: 42 / 2 + 4, splashColor: selectedDayBackground.withOpacity(0.38), child: new basic.Semantics.new({label: localizations.formatDecimal(day) + ", " + localizations.formatFullDate(dayToBuild), selected: isSelectedDay, excludeSemantics: true, child: dayWidget, $creationLocationd_0dea112b090073317d4: C[82] || CT.C82}), $creationLocationd_0dea112b090073317d4: C[83] || CT.C83});
          }
          dayItems[$add](dayWidget);
        }
      }
      return new basic.Padding.new({padding: C[19] || CT.C19, child: new scroll_view.GridView.custom({physics: C[84] || CT.C84, gridDelegate: calendar_date_picker._dayPickerGridDelegate, childrenDelegate: new sliver.SliverChildListDelegate.new(dayItems, {addRepaintBoundaries: false}), $creationLocationd_0dea112b090073317d4: C[85] || CT.C85}), $creationLocationd_0dea112b090073317d4: C[86] || CT.C86});
    }
    static ['_#new#tearOff']() {
      return new calendar_date_picker._DayPickerState.new();
    }
  };
  (calendar_date_picker._DayPickerState.new = function() {
    this[___DayPickerState__dayFocusNodes] = null;
    calendar_date_picker._DayPickerState.__proto__.new.call(this);
    ;
  }).prototype = calendar_date_picker._DayPickerState.prototype;
  dart.addTypeTests(calendar_date_picker._DayPickerState);
  dart.addTypeCaches(calendar_date_picker._DayPickerState);
  dart.setMethodSignature(calendar_date_picker._DayPickerState, () => ({
    __proto__: dart.getMethods(calendar_date_picker._DayPickerState.__proto__),
    [_dayHeaders]: dart.fnType(core.List$(framework.Widget), [dart.nullable(text_style.TextStyle), material_localizations.MaterialLocalizations]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(calendar_date_picker._DayPickerState, () => ({
    __proto__: dart.getGetters(calendar_date_picker._DayPickerState.__proto__),
    [_dayFocusNodes]: core.List$(focus_manager.FocusNode)
  }));
  dart.setSetterSignature(calendar_date_picker._DayPickerState, () => ({
    __proto__: dart.getSetters(calendar_date_picker._DayPickerState.__proto__),
    [_dayFocusNodes]: core.List$(focus_manager.FocusNode)
  }));
  dart.setLibraryUri(calendar_date_picker._DayPickerState, I[1]);
  dart.setFieldSignature(calendar_date_picker._DayPickerState, () => ({
    __proto__: dart.getFields(calendar_date_picker._DayPickerState.__proto__),
    [___DayPickerState__dayFocusNodes]: dart.fieldType(dart.nullable(core.List$(focus_manager.FocusNode)))
  }));
  calendar_date_picker._DayPickerGridDelegate = class _DayPickerGridDelegate extends sliver_grid.SliverGridDelegate {
    static ['_#new#tearOff']() {
      return new calendar_date_picker._DayPickerGridDelegate.new();
    }
    getLayout(constraints) {
      let tileWidth = constraints.crossAxisExtent / 7;
      let tileHeight = math.min(core.double, 42, constraints.viewportMainAxisExtent / (6 + 1));
      return new sliver_grid.SliverGridRegularTileLayout.new({childCrossAxisExtent: tileWidth, childMainAxisExtent: tileHeight, crossAxisCount: 7, crossAxisStride: tileWidth, mainAxisStride: tileHeight, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      calendar_date_picker._DayPickerGridDelegate.as(oldDelegate);
      return false;
    }
  };
  (calendar_date_picker._DayPickerGridDelegate.new = function() {
    calendar_date_picker._DayPickerGridDelegate.__proto__.new.call(this);
    ;
  }).prototype = calendar_date_picker._DayPickerGridDelegate.prototype;
  dart.addTypeTests(calendar_date_picker._DayPickerGridDelegate);
  dart.addTypeCaches(calendar_date_picker._DayPickerGridDelegate);
  dart.setMethodSignature(calendar_date_picker._DayPickerGridDelegate, () => ({
    __proto__: dart.getMethods(calendar_date_picker._DayPickerGridDelegate.__proto__),
    getLayout: dart.fnType(sliver_grid.SliverGridLayout, [sliver$.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(calendar_date_picker._DayPickerGridDelegate, I[1]);
  var currentDate$0 = dart.privateName(calendar_date_picker, "YearPicker.currentDate");
  var firstDate$0 = dart.privateName(calendar_date_picker, "YearPicker.firstDate");
  var lastDate$0 = dart.privateName(calendar_date_picker, "YearPicker.lastDate");
  var initialDate$0 = dart.privateName(calendar_date_picker, "YearPicker.initialDate");
  var selectedDate$ = dart.privateName(calendar_date_picker, "YearPicker.selectedDate");
  var onChanged$ = dart.privateName(calendar_date_picker, "YearPicker.onChanged");
  var dragStartBehavior$ = dart.privateName(calendar_date_picker, "YearPicker.dragStartBehavior");
  calendar_date_picker.YearPicker = class YearPicker extends framework.StatefulWidget {
    get currentDate() {
      return this[currentDate$0];
    }
    set currentDate(value) {
      super.currentDate = value;
    }
    get firstDate() {
      return this[firstDate$0];
    }
    set firstDate(value) {
      super.firstDate = value;
    }
    get lastDate() {
      return this[lastDate$0];
    }
    set lastDate(value) {
      super.lastDate = value;
    }
    get initialDate() {
      return this[initialDate$0];
    }
    set initialDate(value) {
      super.initialDate = value;
    }
    get selectedDate() {
      return this[selectedDate$];
    }
    set selectedDate(value) {
      super.selectedDate = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
      let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
      let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[87] || CT.C87;
      return new calendar_date_picker.YearPicker.new({key: key, currentDate: currentDate, firstDate: firstDate, lastDate: lastDate, initialDate: initialDate, selectedDate: selectedDate, onChanged: onChanged, dragStartBehavior: dragStartBehavior, $creationLocationd_0dea112b090073317d4: C[88] || CT.C88});
    }
    createState() {
      return new calendar_date_picker._YearPickerState.new();
    }
  };
  (calendar_date_picker.YearPicker.new = function(opts) {
    let t1, t1$;
    let key = opts && 'key' in opts ? opts.key : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
    let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[87] || CT.C87;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[firstDate$0] = firstDate;
    this[lastDate$0] = lastDate;
    this[selectedDate$] = selectedDate;
    this[onChanged$] = onChanged;
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 1101, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 1102, 15, "lastDate != null");
    if (!(selectedDate !== null)) dart.assertFailed(null, I[0], 1103, 15, "selectedDate != null");
    if (!(onChanged !== null)) dart.assertFailed(null, I[0], 1104, 15, "onChanged != null");
    if (!!firstDate.isAfter(lastDate)) dart.assertFailed(null, I[0], 1105, 15, "!firstDate.isAfter(lastDate)");
    this[currentDate$0] = date$.DateUtils.dateOnly((t1 = currentDate, t1 == null ? new core.DateTime.now() : t1));
    this[initialDate$0] = date$.DateUtils.dateOnly((t1$ = initialDate, t1$ == null ? selectedDate : t1$));
    calendar_date_picker.YearPicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = calendar_date_picker.YearPicker.prototype;
  dart.addTypeTests(calendar_date_picker.YearPicker);
  dart.addTypeCaches(calendar_date_picker.YearPicker);
  dart.setMethodSignature(calendar_date_picker.YearPicker, () => ({
    __proto__: dart.getMethods(calendar_date_picker.YearPicker.__proto__),
    createState: dart.fnType(framework.State$(calendar_date_picker.YearPicker), [])
  }));
  dart.setLibraryUri(calendar_date_picker.YearPicker, I[1]);
  dart.setFieldSignature(calendar_date_picker.YearPicker, () => ({
    __proto__: dart.getFields(calendar_date_picker.YearPicker.__proto__),
    currentDate: dart.finalFieldType(core.DateTime),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    initialDate: dart.finalFieldType(core.DateTime),
    selectedDate: dart.finalFieldType(core.DateTime),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior)
  }));
  var ___YearPickerState__scrollController = dart.privateName(calendar_date_picker, "_#_YearPickerState#_scrollController");
  var _scrollController = dart.privateName(calendar_date_picker, "_scrollController");
  var _scrollOffsetForYear = dart.privateName(calendar_date_picker, "_scrollOffsetForYear");
  var _itemCount = dart.privateName(calendar_date_picker, "_itemCount");
  var _buildYearItem = dart.privateName(calendar_date_picker, "_buildYearItem");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  calendar_date_picker._YearPickerState = class _YearPickerState extends framework.State$(calendar_date_picker.YearPicker) {
    get [_scrollController]() {
      let t1;
      t1 = this[___YearPickerState__scrollController];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_scrollController")) : t1;
    }
    set [_scrollController](library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_scrollController$35param) {
      this[___YearPickerState__scrollController] = library$32package$58flutter$47src$47material$47calendar_date_picker$46dart$58$58_scrollController$35param;
    }
    initState() {
      super.initState();
      this[_scrollController] = new scroll_controller.ScrollController.new({initialScrollOffset: this[_scrollOffsetForYear](this.widget.selectedDate)});
    }
    didUpdateWidget(oldWidget) {
      calendar_date_picker.YearPicker.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!this.widget.selectedDate._equals(oldWidget.selectedDate)) {
        this[_scrollController].jumpTo(this[_scrollOffsetForYear](this.widget.selectedDate));
      }
    }
    [_scrollOffsetForYear](date) {
      let initialYearIndex = date.year - this.widget.firstDate.year;
      let initialYearRow = (initialYearIndex / 3)[$truncate]();
      let centeredYearRow = initialYearRow - 2;
      return this[_itemCount] < 18 ? 0.0 : centeredYearRow * 52;
    }
    [_buildYearItem](context, index) {
      let t1;
      let colorScheme = theme.Theme.of(context).colorScheme;
      let textTheme = theme.Theme.of(context).textTheme;
      let offset = this[_itemCount] < 18 ? ((18 - this[_itemCount]) / 2)[$truncate]() : 0;
      let year = this.widget.firstDate.year + index - offset;
      let isSelected = year === this.widget.selectedDate.year;
      let isCurrentYear = year === this.widget.currentDate.year;
      let isDisabled = year < this.widget.firstDate.year || year > this.widget.lastDate.year;
      let textColor = null;
      if (isSelected) {
        textColor = colorScheme.onPrimary;
      } else if (isDisabled) {
        textColor = colorScheme.onSurface.withOpacity(0.38);
      } else if (isCurrentYear) {
        textColor = colorScheme.primary;
      } else {
        textColor = colorScheme.onSurface.withOpacity(0.87);
      }
      let itemStyle = (t1 = textTheme.bodyText1, t1 == null ? null : t1.apply({color: textColor}));
      let decoration = null;
      if (isSelected) {
        decoration = new box_decoration.BoxDecoration.new({color: colorScheme.primary, borderRadius: new border_radius.BorderRadius.circular(36 / 2)});
      } else if (isCurrentYear && !isDisabled) {
        decoration = new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: colorScheme.primary}), borderRadius: new border_radius.BorderRadius.circular(36 / 2)});
      }
      let yearItem = new basic.Center.new({child: new container.Container.new({decoration: decoration, height: 36, width: 72, child: new basic.Center.new({child: new basic.Semantics.new({selected: isSelected, button: true, child: new text.Text.new(year[$toString](), {style: itemStyle, $creationLocationd_0dea112b090073317d4: C[89] || CT.C89}), $creationLocationd_0dea112b090073317d4: C[90] || CT.C90}), $creationLocationd_0dea112b090073317d4: C[91] || CT.C91}), $creationLocationd_0dea112b090073317d4: C[92] || CT.C92}), $creationLocationd_0dea112b090073317d4: C[93] || CT.C93});
      if (isDisabled) {
        yearItem = new basic.ExcludeSemantics.new({child: yearItem, $creationLocationd_0dea112b090073317d4: C[94] || CT.C94});
      } else {
        yearItem = new ink_well.InkWell.new({key: new (T.ValueKeyOfint()).new(year), onTap: dart.fn(() => {
            let t2, t1;
            t1 = this.widget;
            t2 = new core.DateTime.new(year, this.widget.initialDate.month);
            return t1.onChanged(t2);
          }, T.VoidTovoid()), child: yearItem, $creationLocationd_0dea112b090073317d4: C[95] || CT.C95});
      }
      return yearItem;
    }
    get [_itemCount]() {
      return this.widget.lastDate.year - this.widget.firstDate.year + 1;
    }
    build(context) {
      if (!debug$.debugCheckHasMaterial(context)) dart.assertFailed(null, I[0], 1242, 12, "debugCheckHasMaterial(context)");
      return new basic.Column.new({children: T.JSArrayOfWidget().of([C[96] || CT.C96, new basic.Expanded.new({child: new scroll_view.GridView.builder({controller: this[_scrollController], dragStartBehavior: this.widget.dragStartBehavior, gridDelegate: calendar_date_picker._yearPickerGridDelegate, itemBuilder: dart.bind(this, _buildYearItem), itemCount: math.max(core.int, this[_itemCount], 18), padding: C[98] || CT.C98, $creationLocationd_0dea112b090073317d4: C[99] || CT.C99}), $creationLocationd_0dea112b090073317d4: C[100] || CT.C100}), C[101] || CT.C101]), $creationLocationd_0dea112b090073317d4: C[103] || CT.C103});
    }
    static ['_#new#tearOff']() {
      return new calendar_date_picker._YearPickerState.new();
    }
  };
  (calendar_date_picker._YearPickerState.new = function() {
    this[___YearPickerState__scrollController] = null;
    calendar_date_picker._YearPickerState.__proto__.new.call(this);
    ;
  }).prototype = calendar_date_picker._YearPickerState.prototype;
  dart.addTypeTests(calendar_date_picker._YearPickerState);
  dart.addTypeCaches(calendar_date_picker._YearPickerState);
  dart.setMethodSignature(calendar_date_picker._YearPickerState, () => ({
    __proto__: dart.getMethods(calendar_date_picker._YearPickerState.__proto__),
    [_scrollOffsetForYear]: dart.fnType(core.double, [core.DateTime]),
    [_buildYearItem]: dart.fnType(framework.Widget, [framework.BuildContext, core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(calendar_date_picker._YearPickerState, () => ({
    __proto__: dart.getGetters(calendar_date_picker._YearPickerState.__proto__),
    [_scrollController]: scroll_controller.ScrollController,
    [_itemCount]: core.int
  }));
  dart.setSetterSignature(calendar_date_picker._YearPickerState, () => ({
    __proto__: dart.getSetters(calendar_date_picker._YearPickerState.__proto__),
    [_scrollController]: scroll_controller.ScrollController
  }));
  dart.setLibraryUri(calendar_date_picker._YearPickerState, I[1]);
  dart.setFieldSignature(calendar_date_picker._YearPickerState, () => ({
    __proto__: dart.getFields(calendar_date_picker._YearPickerState.__proto__),
    [___YearPickerState__scrollController]: dart.fieldType(dart.nullable(scroll_controller.ScrollController))
  }));
  dart.setStaticFieldSignature(calendar_date_picker._YearPickerState, () => ['minYears']);
  dart.defineLazy(calendar_date_picker._YearPickerState, {
    /*calendar_date_picker._YearPickerState.minYears*/get minYears() {
      return 18;
    }
  }, false);
  calendar_date_picker._YearPickerGridDelegate = class _YearPickerGridDelegate extends sliver_grid.SliverGridDelegate {
    static ['_#new#tearOff']() {
      return new calendar_date_picker._YearPickerGridDelegate.new();
    }
    getLayout(constraints) {
      let tileWidth = (constraints.crossAxisExtent - (3 - 1) * 8) / 3;
      return new sliver_grid.SliverGridRegularTileLayout.new({childCrossAxisExtent: tileWidth, childMainAxisExtent: 52, crossAxisCount: 3, crossAxisStride: tileWidth + 8, mainAxisStride: 52, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      calendar_date_picker._YearPickerGridDelegate.as(oldDelegate);
      return false;
    }
  };
  (calendar_date_picker._YearPickerGridDelegate.new = function() {
    calendar_date_picker._YearPickerGridDelegate.__proto__.new.call(this);
    ;
  }).prototype = calendar_date_picker._YearPickerGridDelegate.prototype;
  dart.addTypeTests(calendar_date_picker._YearPickerGridDelegate);
  dart.addTypeCaches(calendar_date_picker._YearPickerGridDelegate);
  dart.setMethodSignature(calendar_date_picker._YearPickerGridDelegate, () => ({
    __proto__: dart.getMethods(calendar_date_picker._YearPickerGridDelegate.__proto__),
    getLayout: dart.fnType(sliver_grid.SliverGridLayout, [sliver$.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(calendar_date_picker._YearPickerGridDelegate, I[1]);
  dart.defineLazy(calendar_date_picker, {
    /*calendar_date_picker._monthScrollDuration*/get _monthScrollDuration() {
      return C[17] || CT.C17;
    },
    /*calendar_date_picker._dayPickerRowHeight*/get _dayPickerRowHeight() {
      return 42;
    },
    /*calendar_date_picker._maxDayPickerRowCount*/get _maxDayPickerRowCount() {
      return 6;
    },
    /*calendar_date_picker._maxDayPickerHeight*/get _maxDayPickerHeight() {
      return 294;
    },
    /*calendar_date_picker._monthPickerHorizontalPadding*/get _monthPickerHorizontalPadding() {
      return 8;
    },
    /*calendar_date_picker._yearPickerColumnCount*/get _yearPickerColumnCount() {
      return 3;
    },
    /*calendar_date_picker._yearPickerPadding*/get _yearPickerPadding() {
      return 16;
    },
    /*calendar_date_picker._yearPickerRowHeight*/get _yearPickerRowHeight() {
      return 52;
    },
    /*calendar_date_picker._yearPickerRowSpacing*/get _yearPickerRowSpacing() {
      return 8;
    },
    /*calendar_date_picker._subHeaderHeight*/get _subHeaderHeight() {
      return 52;
    },
    /*calendar_date_picker._monthNavButtonsWidth*/get _monthNavButtonsWidth() {
      return 108;
    },
    /*calendar_date_picker._dayPickerGridDelegate*/get _dayPickerGridDelegate() {
      return C[104] || CT.C104;
    },
    /*calendar_date_picker._yearPickerGridDelegate*/get _yearPickerGridDelegate() {
      return C[105] || CT.C105;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/calendar_date_picker.dart", {
    "package:flutter/src/material/calendar_date_picker.dart": calendar_date_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["calendar_date_picker.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/calendar_date_picker.dart.lib.js"}');
  // Exports:
  return {
    src__material__calendar_date_picker: calendar_date_picker
  };
}));

//# sourceMappingURL=calendar_date_picker.dart.lib.js.map
