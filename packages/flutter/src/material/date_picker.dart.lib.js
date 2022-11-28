define(['dart_sdk', 'packages/flutter/src/material/date.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/widgets/form.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/overflow_bar.dart', 'packages/flutter/src/material/calendar_date_picker.dart', 'packages/flutter/src/widgets/spacer.dart', 'packages/flutter/src/material/input_date_picker_form_field.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/dialog.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/services/keyboard_key.g.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/widgets/safe_area.dart', 'packages/flutter/src/widgets/preferred_size.dart', 'packages/flutter/src/services/haptic_feedback.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver_grid.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/material/text_field.dart', 'packages/flutter/src/material/input_border.dart'], (function load__packages__flutter__src__material__date_picker_dart(dart_sdk, packages__flutter__src__material__date$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__widgets__form$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__overflow_bar$46dart, packages__flutter__src__material__calendar_date_picker$46dart, packages__flutter__src__widgets__spacer$46dart, packages__flutter__src__material__input_date_picker_form_field$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__dialog$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__services__keyboard_key$46g$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__widgets__safe_area$46dart, packages__flutter__src__widgets__preferred_size$46dart, packages__flutter__src__services__haptic_feedback$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver_grid$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__material__text_field$46dart, packages__flutter__src__material__input_border$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date$ = packages__flutter__src__material__date$46dart.src__material__date;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const restoration_properties = packages__flutter__src__widgets__title$46dart.src__widgets__restoration_properties;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const shortcuts = packages__flutter__src__widgets__title$46dart.src__widgets__shortcuts;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const implicit_animations = packages__flutter__src__widgets__title$46dart.src__widgets__implicit_animations;
  const restoration = packages__flutter__src__widgets__title$46dart.src__widgets__restoration;
  const actions = packages__flutter__src__widgets__title$46dart.src__widgets__actions;
  const focus_traversal = packages__flutter__src__widgets__title$46dart.src__widgets__focus_traversal;
  const scroll_controller = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_controller;
  const sliver = packages__flutter__src__widgets__title$46dart.src__widgets__sliver;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const scroll_position = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_position;
  const scrollable = packages__flutter__src__widgets__title$46dart.src__widgets__scrollable;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const editable_text = packages__flutter__src__widgets__title$46dart.src__widgets__editable_text;
  const localizations = packages__flutter__src__widgets__title$46dart.src__widgets__localizations;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const restoration$ = packages__flutter__src__services__text_editing_delta$46dart.src__services__restoration;
  const form$ = packages__flutter__src__widgets__form$46dart.src__widgets__form;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
  const back_button = packages__flutter__src__material__icon_button$46dart.src__material__back_button;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const debug = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const overflow_bar = packages__flutter__src__widgets__overflow_bar$46dart.src__widgets__overflow_bar;
  const calendar_date_picker = packages__flutter__src__material__calendar_date_picker$46dart.src__material__calendar_date_picker;
  const spacer = packages__flutter__src__widgets__spacer$46dart.src__widgets__spacer;
  const input_date_picker_form_field = packages__flutter__src__material__input_date_picker_form_field$46dart.src__material__input_date_picker_form_field;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const dialog$ = packages__flutter__src__material__dialog$46dart.src__material__dialog;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const keyboard_key$46g = packages__flutter__src__services__keyboard_key$46g$46dart.src__services__keyboard_key$46g;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const safe_area = packages__flutter__src__widgets__safe_area$46dart.src__widgets__safe_area;
  const preferred_size = packages__flutter__src__widgets__preferred_size$46dart.src__widgets__preferred_size;
  const haptic_feedback = packages__flutter__src__services__haptic_feedback$46dart.src__services__haptic_feedback;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver_grid = packages__flutter__src__rendering__sliver_grid$46dart.src__rendering__sliver_grid;
  const sliver$ = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const text_field = packages__flutter__src__material__text_field$46dart.src__material__text_field;
  const input_border = packages__flutter__src__material__input_border$46dart.src__material__input_border;
  var date_picker = Object.create(dart.library);
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $add = dartx.add;
  var $insert = dartx.insert;
  var $truncate = dartx.truncate;
  var $ceil = dartx.ceil;
  var $length = dartx.length;
  var $sublist = dartx.sublist;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StateOfStatefulWidget: () => (T.StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))(),
    GlobalKeyOfStateOfStatefulWidget: () => (T.GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(T.StateOfStatefulWidget())))(),
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form$.FormState)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    VoidToCalendarDatePicker: () => (T.VoidToCalendarDatePicker = dart.constFn(dart.fnType(calendar_date_picker.CalendarDatePicker, [])))(),
    VoidToForm: () => (T.VoidToForm = dart.constFn(dart.fnType(form$.Form, [])))(),
    BuildContextToFlex: () => (T.BuildContextToFlex = dart.constFn(dart.fnType(basic.Flex, [framework.BuildContext])))(),
    DatePickerEntryModeN: () => (T.DatePickerEntryModeN = dart.constFn(dart.nullable(date$.DatePickerEntryMode)))(),
    AutovalidateModeN: () => (T.AutovalidateModeN = dart.constFn(dart.nullable(form$.AutovalidateMode)))(),
    GlobalKeyOf_InputDateRangePickerState: () => (T.GlobalKeyOf_InputDateRangePickerState = dart.constFn(framework.GlobalKey$(date_picker._InputDateRangePickerState)))(),
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    ValueKeyOfString: () => (T.ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))(),
    BuildContextAndintToWidget: () => (T.BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))(),
    CallbackActionOfNextFocusIntent: () => (T.CallbackActionOfNextFocusIntent = dart.constFn(actions.CallbackAction$(focus_traversal.NextFocusIntent)))(),
    CallbackActionOfPreviousFocusIntent: () => (T.CallbackActionOfPreviousFocusIntent = dart.constFn(actions.CallbackAction$(focus_traversal.PreviousFocusIntent)))(),
    CallbackActionOfDirectionalFocusIntent: () => (T.CallbackActionOfDirectionalFocusIntent = dart.constFn(actions.CallbackAction$(focus_traversal.DirectionalFocusIntent)))(),
    ActionOfIntent: () => (T.ActionOfIntent = dart.constFn(actions.Action$(actions.Intent)))(),
    LinkedMapOfType$ActionOfIntent: () => (T.LinkedMapOfType$ActionOfIntent = dart.constFn(_js_helper.LinkedMap$(core.Type, T.ActionOfIntent())))(),
    ListOfFocusNode: () => (T.ListOfFocusNode = dart.constFn(core.List$(focus_manager.FocusNode)))(),
    intToFocusNode: () => (T.intToFocusNode = dart.constFn(dart.fnType(focus_manager.FocusNode, [core.int])))(),
    DateTimeN: () => (T.DateTimeN = dart.constFn(dart.nullable(core.DateTime)))(),
    DateTimeRangeN: () => (T.DateTimeRangeN = dart.constFn(dart.nullable(date$.DateTimeRange)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: date$.DatePickerEntryMode.prototype,
        [_Enum__name]: "calendar",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: date$.DatePickerMode.prototype,
        [_Enum__name]: "day",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DatePickerDialog",
        [_Location_column]: 3,
        [_Location_line]: 244,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: date$.DatePickerEntryMode.prototype,
        [_Enum__name]: "input",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: date$.DatePickerEntryMode.prototype,
        [_Enum__name]: "calendarOnly",
        [_Enum_index]: 2
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: date$.DatePickerEntryMode.prototype,
        [_Enum__name]: "inputOnly",
        [_Enum_index]: 3
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: media_query.Orientation.prototype,
        [_Enum__name]: "portrait",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: media_query.Orientation.prototype,
        [_Enum__name]: "landscape",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 52,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 482,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 11,
        [_Location_line]: 480,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 486,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 11,
        [_Location_line]: 484,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OverflowBar",
        [_Location_column]: 14,
        [_Location_line]: 477,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 28,
        [_Location_line]: 473,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CalendarDatePicker",
        [_Location_column]: 14,
        [_Location_line]: 493,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 24
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 23,
        [_Location_line]: 516,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget__location]: C[19] || CT.C19,
        [Widget_key]: null,
        [Spacer_flex]: 1
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InputDatePickerFormField",
        [_Location_column]: 17,
        [_Location_line]: 517,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 23,
        [_Location_line]: 531,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget__location]: C[22] || CT.C22,
        [Widget_key]: null,
        [Spacer_flex]: 1
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 20,
        [_Location_line]: 514,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Shortcuts",
        [_Location_column]: 18,
        [_Location_line]: 512,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 509,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Form",
        [_Location_column]: 14,
        [_Location_line]: 506,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 23,
        [_Location_line]: 545,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57882
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[28] || CT.C28,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[29] || CT.C29
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 27,
        [_Location_line]: 544,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 23,
        [_Location_line]: 560,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57634
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[32] || CT.C32,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[33] || CT.C33
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 27,
        [_Location_line]: 559,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DatePickerHeader",
        [_Location_column]: 27,
        [_Location_line]: 573,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 24,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 24,
        [EdgeInsets_left]: 16
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 21,
        [_Location_line]: 603,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 24,
        [_Location_line]: 598,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 27,
        [_Location_line]: 618,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 30,
        [_Location_line]: 614,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 21,
        [_Location_line]: 613,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 24,
        [_Location_line]: 608,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Builder",
        [_Location_column]: 18,
        [_Location_line]: 595,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MediaQuery",
        [_Location_column]: 16,
        [_Location_line]: 591,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedContainer",
        [_Location_column]: 14,
        [_Location_line]: 586,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Dialog",
        [_Location_column]: 12,
        [_Location_line]: 583,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967309.0
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
    get C50() {
      return C[50] = dart.const({
        __proto__: focus_traversal.NextFocusIntent.prototype
      });
    },
    get C47() {
      return C[47] = dart.constMap(shortcuts.ShortcutActivator, actions.Intent, [C[48] || CT.C48, C[50] || CT.C50]);
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DatePickerHeader",
        [_Location_column]: 9,
        [_Location_line]: 699,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 23,
        [_Location_line]: 759,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 24,
        [_Location_line]: 765,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 12,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 24
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 25,
        [_Location_line]: 787,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[56] || CT.C56,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 25,
        [_Location_line]: 789,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 41,
        [_Location_line]: 789,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[60] || CT.C60,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 38,
        [SizedBox_width]: null
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: flex.FlexFit.prototype,
        [_Enum__name]: "loose",
        [_Enum_index]: 1
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: basic.Flexible.prototype,
        [Widget__location]: C[58] || CT.C58,
        [Widget_key]: null,
        [ProxyWidget_child]: C[59] || CT.C59,
        [Flexible_fit]: C[61] || CT.C61,
        [Flexible_flex]: 1
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 23,
        [_Location_line]: 792,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 19,
        [_Location_line]: 790,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 22,
        [_Location_line]: 784,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 779,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 18,
        [_Location_line]: 777,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 16,
        [_Location_line]: 775,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 23,
        [_Location_line]: 810,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[69] || CT.C69,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 17,
        [_Location_line]: 811,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 817,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 26,
        [_Location_line]: 819,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 17,
        [_Location_line]: 818,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 19,
        [_Location_line]: 827,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 20,
        [_Location_line]: 807,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 18,
        [_Location_line]: 805,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 16,
        [_Location_line]: 803,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DateRangePickerDialog",
        [_Location_column]: 9,
        [_Location_line]: 1082,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 29,
        [_Location_line]: 1344,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[82] || CT.C82,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[29] || CT.C29
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 15,
        [_Location_line]: 1343,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CalendarRangePickerDialog",
        [_Location_column]: 20,
        [_Location_line]: 1331,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[87] || CT.C87,
        [BorderSide_style]: C[88] || CT.C88,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[89] || CT.C89
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[91] || CT.C91,
        [BorderRadius_bottomLeft]: C[91] || CT.C91,
        [BorderRadius_topRight]: C[91] || CT.C91,
        [BorderRadius_topLeft]: C[91] || CT.C91
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[86] || CT.C86,
        [RoundedRectangleBorder_borderRadius]: C[90] || CT.C90
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 23,
        [_Location_line]: 1373,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget__location]: C[93] || CT.C93,
        [Widget_key]: null,
        [Spacer_flex]: 1
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InputDateRangePicker",
        [_Location_column]: 17,
        [_Location_line]: 1374,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 23,
        [_Location_line]: 1393,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget__location]: C[96] || CT.C96,
        [Widget_key]: null,
        [Spacer_flex]: 1
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 20,
        [_Location_line]: 1371,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 19,
        [_Location_line]: 1366,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 29,
        [_Location_line]: 1401,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[100] || CT.C100,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[33] || CT.C33
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 15,
        [_Location_line]: 1400,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InputDateRangePickerDialog",
        [_Location_column]: 20,
        [_Location_line]: 1362,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Builder",
        [_Location_column]: 18,
        [_Location_line]: 1434,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MediaQuery",
        [_Location_column]: 16,
        [_Location_line]: 1430,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedContainer",
        [_Location_column]: 14,
        [_Location_line]: 1425,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Dialog",
        [_Location_column]: 12,
        [_Location_line]: 1420,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CalendarRangePickerDialog",
        [_Location_column]: 9,
        [_Location_line]: 1444,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CloseButton",
        [_Location_column]: 20,
        [_Location_line]: 1503,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 1511,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 13,
        [_Location_line]: 1509,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C112() {
      return C[112] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 1513,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C111() {
      return C[111] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[112] || CT.C112,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 8
      });
    },
    get C113() {
      return C[113] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 64,
        [OffsetBase__dx]: 1 / 0
      });
    },
    get C114() {
      return C[114] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 1518,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C115() {
      return C[115] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 23,
        [_Location_line]: 1526,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C117() {
      return C[117] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 29,
        [_Location_line]: 1532,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C116() {
      return C[116] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[117] || CT.C117,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 8,
        [SizedBox_width]: null
      });
    },
    get C118() {
      return C[118] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 27,
        [_Location_line]: 1535,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C119() {
      return C[119] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 27,
        [_Location_line]: 1541,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C120() {
      return C[120] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 36,
        [_Location_line]: 1544,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C121() {
      return C[121] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 27,
        [_Location_line]: 1543,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C122() {
      return C[122] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 23,
        [_Location_line]: 1533,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C124() {
      return C[124] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 29,
        [_Location_line]: 1553,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C123() {
      return C[123] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[124] || CT.C124,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C125() {
      return C[125] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 26,
        [_Location_line]: 1523,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C126() {
      return C[126] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 24,
        [_Location_line]: 1520,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C127() {
      return C[127] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 15,
        [_Location_line]: 1519,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C128() {
      return C[128] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 17,
        [_Location_line]: 1559,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C129() {
      return C[129] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 20,
        [_Location_line]: 1517,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C130() {
      return C[130] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PreferredSize",
        [_Location_column]: 19,
        [_Location_line]: 1515,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C131() {
      return C[131] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppBar",
        [_Location_column]: 17,
        [_Location_line]: 1502,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C132() {
      return C[132] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CalendarDateRangePicker",
        [_Location_column]: 15,
        [_Location_line]: 1566,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C133() {
      return C[133] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 14,
        [_Location_line]: 1501,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C134() {
      return C[134] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SafeArea",
        [_Location_column]: 12,
        [_Location_line]: 1497,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C135() {
      return C[135] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CalendarDateRangePicker",
        [_Location_column]: 3,
        [_Location_line]: 1594,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C136() {
      return C[136] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C137() {
      return C[137] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C138() {
      return C[138] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C139() {
      return C[139] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C140() {
      return C[140] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C141() {
      return C[141] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C142() {
      return C[142] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_MonthItem",
        [_Location_column]: 12,
        [_Location_line]: 1737,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C143() {
      return C[143] = dart.const({
        __proto__: T.ValueKeyOfString().prototype,
        [ValueKey_value]: "sliverAfterKey"
      });
    },
    get C145() {
      return C[145] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DayHeaders",
        [_Location_column]: 15,
        [_Location_line]: 1754,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C144() {
      return C[144] = dart.const({
        __proto__: date_picker._DayHeaders.prototype,
        [Widget__location]: C[145] || CT.C145,
        [Widget_key]: null
      });
    },
    get C147() {
      return C[147] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 43,
        [_Location_line]: 1755,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C146() {
      return C[146] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[147] || CT.C147,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 0
      });
    },
    get C148() {
      return C[148] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverList",
        [_Location_column]: 17,
        [_Location_line]: 1770,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C149() {
      return C[149] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverList",
        [_Location_column]: 17,
        [_Location_line]: 1776,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C150() {
      return C[150] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomScrollView",
        [_Location_column]: 20,
        [_Location_line]: 1765,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C151() {
      return C[151] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CalendarKeyboardNavigator",
        [_Location_column]: 18,
        [_Location_line]: 1757,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C152() {
      return C[152] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 1756,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C153() {
      return C[153] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 12,
        [_Location_line]: 1752,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C154() {
      return C[154] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CalendarKeyboardNavigator",
        [_Location_column]: 9,
        [_Location_line]: 1793,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C157() {
      return C[157] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968066.0
      });
    },
    get C156() {
      return C[156] = dart.const({
        __proto__: shortcuts.SingleActivator.prototype,
        [SingleActivator_includeRepeats]: true,
        [SingleActivator_meta]: false,
        [SingleActivator_alt]: false,
        [SingleActivator_shift]: false,
        [SingleActivator_control]: false,
        [SingleActivator_trigger]: C[157] || CT.C157
      });
    },
    get C159() {
      return C[159] = dart.const({
        __proto__: focus_traversal.TraversalDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C158() {
      return C[158] = dart.const({
        __proto__: focus_traversal.DirectionalFocusIntent.prototype,
        [DirectionalFocusIntent_ignoreTextFields]: true,
        [DirectionalFocusIntent_direction]: C[159] || CT.C159
      });
    },
    get C161() {
      return C[161] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968067.0
      });
    },
    get C160() {
      return C[160] = dart.const({
        __proto__: shortcuts.SingleActivator.prototype,
        [SingleActivator_includeRepeats]: true,
        [SingleActivator_meta]: false,
        [SingleActivator_alt]: false,
        [SingleActivator_shift]: false,
        [SingleActivator_control]: false,
        [SingleActivator_trigger]: C[161] || CT.C161
      });
    },
    get C163() {
      return C[163] = dart.const({
        __proto__: focus_traversal.TraversalDirection.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C162() {
      return C[162] = dart.const({
        __proto__: focus_traversal.DirectionalFocusIntent.prototype,
        [DirectionalFocusIntent_ignoreTextFields]: true,
        [DirectionalFocusIntent_direction]: C[163] || CT.C163
      });
    },
    get C165() {
      return C[165] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968065.0
      });
    },
    get C164() {
      return C[164] = dart.const({
        __proto__: shortcuts.SingleActivator.prototype,
        [SingleActivator_includeRepeats]: true,
        [SingleActivator_meta]: false,
        [SingleActivator_alt]: false,
        [SingleActivator_shift]: false,
        [SingleActivator_control]: false,
        [SingleActivator_trigger]: C[165] || CT.C165
      });
    },
    get C167() {
      return C[167] = dart.const({
        __proto__: focus_traversal.TraversalDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
      });
    },
    get C166() {
      return C[166] = dart.const({
        __proto__: focus_traversal.DirectionalFocusIntent.prototype,
        [DirectionalFocusIntent_ignoreTextFields]: true,
        [DirectionalFocusIntent_direction]: C[167] || CT.C167
      });
    },
    get C169() {
      return C[169] = dart.const({
        __proto__: keyboard_key$46g.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968068.0
      });
    },
    get C168() {
      return C[168] = dart.const({
        __proto__: shortcuts.SingleActivator.prototype,
        [SingleActivator_includeRepeats]: true,
        [SingleActivator_meta]: false,
        [SingleActivator_alt]: false,
        [SingleActivator_shift]: false,
        [SingleActivator_control]: false,
        [SingleActivator_trigger]: C[169] || CT.C169
      });
    },
    get C171() {
      return C[171] = dart.const({
        __proto__: focus_traversal.TraversalDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C170() {
      return C[170] = dart.const({
        __proto__: focus_traversal.DirectionalFocusIntent.prototype,
        [DirectionalFocusIntent_ignoreTextFields]: true,
        [DirectionalFocusIntent_direction]: C[171] || CT.C171
      });
    },
    get C155() {
      return C[155] = dart.constMap(shortcuts.ShortcutActivator, actions.Intent, [C[156] || CT.C156, C[158] || CT.C158, C[160] || CT.C160, C[162] || CT.C162, C[164] || CT.C164, C[166] || CT.C166, C[168] || CT.C168, C[170] || CT.C170]);
    },
    get C172() {
      return C[172] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_FocusedDate",
        [_Location_column]: 14,
        [_Location_line]: 1915,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C173() {
      return C[173] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FocusableActionDetector",
        [_Location_column]: 12,
        [_Location_line]: 1910,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C174() {
      return C[174] = dart.constMap(focus_traversal.TraversalDirection, core.int, [C[171] || CT.C171, -7, C[163] || CT.C163, 1, C[167] || CT.C167, 7, C[159] || CT.C159, -1]);
    },
    get C175() {
      return C[175] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_FocusedDate",
        [_Location_column]: 9,
        [_Location_line]: 1929,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C176() {
      return C[176] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DayHeaders",
        [_Location_column]: 9,
        [_Location_line]: 1950,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C177() {
      return C[177] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 30,
        [_Location_line]: 1975,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C178() {
      return C[178] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 16,
        [_Location_line]: 1975,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C179() {
      return C[179] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ExcludeSemantics",
        [_Location_column]: 18,
        [_Location_line]: 1974,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C180() {
      return C[180] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 22,
        [_Location_line]: 1993,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C181() {
      return C[181] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 1994,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C182() {
      return C[182] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 23,
        [_Location_line]: 2003,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C183() {
      return C[183] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 1996,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C184() {
      return C[184] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C185() {
      return C[185] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_MonthItem",
        [_Location_column]: 3,
        [_Location_line]: 2133,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C186() {
      return C[186] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 2343,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C187() {
      return C[187] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ExcludeSemantics",
        [_Location_column]: 18,
        [_Location_line]: 2342,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C188() {
      return C[188] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 16,
        [_Location_line]: 2339,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C189() {
      return C[189] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 14,
        [_Location_line]: 2338,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C190() {
      return C[190] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 24,
        [_Location_line]: 2336,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C191() {
      return C[191] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 19,
        [_Location_line]: 2350,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C192() {
      return C[192] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InkResponse",
        [_Location_column]: 19,
        [_Location_line]: 2357,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C193() {
      return C[193] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 2371,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C194() {
      return C[194] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 22,
        [_Location_line]: 2396,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C195() {
      return C[195] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 2460,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C196() {
      return C[196] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ExcludeSemantics",
        [_Location_column]: 18,
        [_Location_line]: 2459,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C197() {
      return C[197] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 9,
        [_Location_line]: 2454,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C198() {
      return C[198] = dart.const({
        __proto__: scroll_physics.NeverScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C199() {
      return C[199] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 27,
        [_Location_line]: 2471,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C200() {
      return C[200] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 9,
        [_Location_line]: 2466,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C202() {
      return C[202] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 2480,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C201() {
      return C[201] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[202] || CT.C202,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 12,
        [SizedBox_width]: null
      });
    },
    get C203() {
      return C[203] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 12,
        [_Location_line]: 2452,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C205() {
      return C[205] = dart.const({
        __proto__: date_picker._HighlightPainterStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C206() {
      return C[206] = dart.const({
        __proto__: date_picker._HighlightPainterStyle.prototype,
        [_Enum__name]: "highlightLeading",
        [_Enum_index]: 1
      });
    },
    get C207() {
      return C[207] = dart.const({
        __proto__: date_picker._HighlightPainterStyle.prototype,
        [_Enum__name]: "highlightTrailing",
        [_Enum_index]: 2
      });
    },
    get C208() {
      return C[208] = dart.const({
        __proto__: date_picker._HighlightPainterStyle.prototype,
        [_Enum__name]: "highlightAll",
        [_Enum_index]: 3
      });
    },
    get C204() {
      return C[204] = dart.constList([C[205] || CT.C205, C[206] || CT.C206, C[207] || CT.C207, C[208] || CT.C208], date_picker._HighlightPainterStyle);
    },
    get C209() {
      return C[209] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InputDateRangePickerDialog",
        [_Location_column]: 9,
        [_Location_line]: 2560,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C210() {
      return C[210] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DatePickerHeader",
        [_Location_column]: 27,
        [_Location_line]: 2617,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C211() {
      return C[211] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 2636,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C212() {
      return C[212] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 11,
        [_Location_line]: 2634,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C213() {
      return C[213] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 2640,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C214() {
      return C[214] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 11,
        [_Location_line]: 2638,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C215() {
      return C[215] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OverflowBar",
        [_Location_column]: 14,
        [_Location_line]: 2631,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C216() {
      return C[216] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 28,
        [_Location_line]: 2627,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C217() {
      return C[217] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 13,
        [_Location_line]: 2653,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C218() {
      return C[218] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 2648,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C219() {
      return C[219] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 19,
        [_Location_line]: 2669,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C220() {
      return C[220] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 22,
        [_Location_line]: 2665,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C221() {
      return C[221] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 13,
        [_Location_line]: 2664,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C222() {
      return C[222] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 16,
        [_Location_line]: 2659,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C223() {
      return C[223] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InputDateRangePicker",
        [_Location_column]: 3,
        [_Location_line]: 2685,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C226() {
      return C[226] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C225() {
      return C[225] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[87] || CT.C87,
        [BorderSide_style]: C[226] || CT.C226,
        [BorderSide_width]: 1,
        [BorderSide_color]: C[89] || CT.C89
      });
    },
    get C228() {
      return C[228] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C227() {
      return C[227] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[91] || CT.C91,
        [BorderRadius_bottomLeft]: C[91] || CT.C91,
        [BorderRadius_topRight]: C[228] || CT.C228,
        [BorderRadius_topLeft]: C[228] || CT.C228
      });
    },
    get C224() {
      return C[224] = dart.const({
        __proto__: input_border.UnderlineInputBorder.prototype,
        [InputBorder_borderSide]: C[225] || CT.C225,
        [UnderlineInputBorder_borderRadius]: C[227] || CT.C227
      });
    },
    get C229() {
      return C[229] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextField",
        [_Location_column]: 18,
        [_Location_line]: 2894,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C230() {
      return C[230] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 2893,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C232() {
      return C[232] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 2908,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C231() {
      return C[231] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[232] || CT.C232,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 8
      });
    },
    get C233() {
      return C[233] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextField",
        [_Location_column]: 18,
        [_Location_line]: 2910,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C234() {
      return C[234] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 2909,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C235() {
      return C[235] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 2890,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C236() {
      return C[236] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DatePickerDialog",
        [_Location_column]: 19,
        [_Location_line]: 189,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C237() {
      return C[237] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Directionality",
        [_Location_column]: 14,
        [_Location_line]: 208,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C238() {
      return C[238] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Localizations",
        [_Location_column]: 28,
        [_Location_line]: 215,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C239() {
      return C[239] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DateRangePickerDialog",
        [_Location_column]: 19,
        [_Location_line]: 997,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C240() {
      return C[240] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Directionality",
        [_Location_column]: 14,
        [_Location_line]: 1017,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C241() {
      return C[241] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Localizations",
        [_Location_column]: 28,
        [_Location_line]: 1024,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart"
      });
    },
    get C242() {
      return C[242] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 518,
        [OffsetBase__dx]: 330
      });
    },
    get C243() {
      return C[243] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 346,
        [OffsetBase__dx]: 496
      });
    },
    get C244() {
      return C[244] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 270,
        [OffsetBase__dx]: 330
      });
    },
    get C245() {
      return C[245] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 160,
        [OffsetBase__dx]: 496
      });
    },
    get C246() {
      return C[246] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 164,
        [OffsetBase__dx]: 496
      });
    },
    get C247() {
      return C[247] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C248() {
      return C[248] = dart.const({
        __proto__: date_picker._MonthItemGridDelegate.prototype
      });
    }
  }, false);
  var C = Array(249).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date_picker.dart",
    "package:flutter/src/material/date_picker.dart"
  ];
  var initialDate$ = dart.privateName(date_picker, "DatePickerDialog.initialDate");
  var firstDate$ = dart.privateName(date_picker, "DatePickerDialog.firstDate");
  var lastDate$ = dart.privateName(date_picker, "DatePickerDialog.lastDate");
  var currentDate$ = dart.privateName(date_picker, "DatePickerDialog.currentDate");
  var initialEntryMode$ = dart.privateName(date_picker, "DatePickerDialog.initialEntryMode");
  var selectableDayPredicate$ = dart.privateName(date_picker, "DatePickerDialog.selectableDayPredicate");
  var cancelText$ = dart.privateName(date_picker, "DatePickerDialog.cancelText");
  var confirmText$ = dart.privateName(date_picker, "DatePickerDialog.confirmText");
  var helpText$ = dart.privateName(date_picker, "DatePickerDialog.helpText");
  var initialCalendarMode$ = dart.privateName(date_picker, "DatePickerDialog.initialCalendarMode");
  var errorFormatText$ = dart.privateName(date_picker, "DatePickerDialog.errorFormatText");
  var errorInvalidText$ = dart.privateName(date_picker, "DatePickerDialog.errorInvalidText");
  var fieldHintText$ = dart.privateName(date_picker, "DatePickerDialog.fieldHintText");
  var fieldLabelText$ = dart.privateName(date_picker, "DatePickerDialog.fieldLabelText");
  var keyboardType$ = dart.privateName(date_picker, "DatePickerDialog.keyboardType");
  var restorationId$ = dart.privateName(date_picker, "DatePickerDialog.restorationId");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  date_picker.DatePickerDialog = class DatePickerDialog extends framework.StatefulWidget {
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
    get initialEntryMode() {
      return this[initialEntryMode$];
    }
    set initialEntryMode(value) {
      super.initialEntryMode = value;
    }
    get selectableDayPredicate() {
      return this[selectableDayPredicate$];
    }
    set selectableDayPredicate(value) {
      super.selectableDayPredicate = value;
    }
    get cancelText() {
      return this[cancelText$];
    }
    set cancelText(value) {
      super.cancelText = value;
    }
    get confirmText() {
      return this[confirmText$];
    }
    set confirmText(value) {
      super.confirmText = value;
    }
    get helpText() {
      return this[helpText$];
    }
    set helpText(value) {
      super.helpText = value;
    }
    get initialCalendarMode() {
      return this[initialCalendarMode$];
    }
    set initialCalendarMode(value) {
      super.initialCalendarMode = value;
    }
    get errorFormatText() {
      return this[errorFormatText$];
    }
    set errorFormatText(value) {
      super.errorFormatText = value;
    }
    get errorInvalidText() {
      return this[errorInvalidText$];
    }
    set errorInvalidText(value) {
      super.errorInvalidText = value;
    }
    get fieldHintText() {
      return this[fieldHintText$];
    }
    set fieldHintText(value) {
      super.fieldHintText = value;
    }
    get fieldLabelText() {
      return this[fieldLabelText$];
    }
    set fieldLabelText(value) {
      super.fieldLabelText = value;
    }
    get keyboardType() {
      return this[keyboardType$];
    }
    set keyboardType(value) {
      super.keyboardType = value;
    }
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let initialEntryMode = opts && 'initialEntryMode' in opts ? opts.initialEntryMode : C[0] || CT.C0;
      let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
      let cancelText = opts && 'cancelText' in opts ? opts.cancelText : null;
      let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
      let helpText = opts && 'helpText' in opts ? opts.helpText : null;
      let initialCalendarMode = opts && 'initialCalendarMode' in opts ? opts.initialCalendarMode : C[1] || CT.C1;
      let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
      let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
      let fieldHintText = opts && 'fieldHintText' in opts ? opts.fieldHintText : null;
      let fieldLabelText = opts && 'fieldLabelText' in opts ? opts.fieldLabelText : null;
      let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      return new date_picker.DatePickerDialog.new({key: key, initialDate: initialDate, firstDate: firstDate, lastDate: lastDate, currentDate: currentDate, initialEntryMode: initialEntryMode, selectableDayPredicate: selectableDayPredicate, cancelText: cancelText, confirmText: confirmText, helpText: helpText, initialCalendarMode: initialCalendarMode, errorFormatText: errorFormatText, errorInvalidText: errorInvalidText, fieldHintText: fieldHintText, fieldLabelText: fieldLabelText, keyboardType: keyboardType, restorationId: restorationId, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    createState() {
      return new date_picker._DatePickerDialogState.new();
    }
  };
  (date_picker.DatePickerDialog.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let initialEntryMode = opts && 'initialEntryMode' in opts ? opts.initialEntryMode : C[0] || CT.C0;
    let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
    let cancelText = opts && 'cancelText' in opts ? opts.cancelText : null;
    let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
    let helpText = opts && 'helpText' in opts ? opts.helpText : null;
    let initialCalendarMode = opts && 'initialCalendarMode' in opts ? opts.initialCalendarMode : C[1] || CT.C1;
    let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
    let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
    let fieldHintText = opts && 'fieldHintText' in opts ? opts.fieldHintText : null;
    let fieldLabelText = opts && 'fieldLabelText' in opts ? opts.fieldLabelText : null;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[initialEntryMode$] = initialEntryMode;
    this[selectableDayPredicate$] = selectableDayPredicate;
    this[cancelText$] = cancelText;
    this[confirmText$] = confirmText;
    this[helpText$] = helpText;
    this[initialCalendarMode$] = initialCalendarMode;
    this[errorFormatText$] = errorFormatText;
    this[errorInvalidText$] = errorInvalidText;
    this[fieldHintText$] = fieldHintText;
    this[fieldLabelText$] = fieldLabelText;
    this[keyboardType$] = keyboardType;
    this[restorationId$] = restorationId;
    if (!(initialDate !== null)) dart.assertFailed(null, I[0], 262, 15, "initialDate != null");
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 263, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 264, 15, "lastDate != null");
    this[initialDate$] = date$.DateUtils.dateOnly(initialDate);
    this[firstDate$] = date$.DateUtils.dateOnly(firstDate);
    this[lastDate$] = date$.DateUtils.dateOnly(lastDate);
    this[currentDate$] = date$.DateUtils.dateOnly((t0 = currentDate, t0 == null ? new core.DateTime.now() : t0));
    if (!(initialEntryMode !== null)) dart.assertFailed(null, I[0], 269, 15, "initialEntryMode != null");
    if (!(initialCalendarMode !== null)) dart.assertFailed(null, I[0], 270, 15, "initialCalendarMode != null");
    date_picker.DatePickerDialog.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (!!this.lastDate.isBefore(this.firstDate)) dart.assertFailed("lastDate " + dart.str(this.lastDate) + " must be on or after firstDate " + dart.str(this.firstDate) + ".", I[0], 272, 7, "!this.lastDate.isBefore(this.firstDate)");
    if (!!this.initialDate.isBefore(this.firstDate)) dart.assertFailed("initialDate " + dart.str(this.initialDate) + " must be on or after firstDate " + dart.str(this.firstDate) + ".", I[0], 276, 7, "!this.initialDate.isBefore(this.firstDate)");
    if (!!this.initialDate.isAfter(this.lastDate)) dart.assertFailed("initialDate " + dart.str(this.initialDate) + " must be on or before lastDate " + dart.str(this.lastDate) + ".", I[0], 280, 7, "!this.initialDate.isAfter(this.lastDate)");
    if (!(this.selectableDayPredicate == null || dart.nullCheck(this.selectableDayPredicate)(this.initialDate))) dart.assertFailed("Provided initialDate " + dart.str(this.initialDate) + " must satisfy provided selectableDayPredicate", I[0], 284, 7, "selectableDayPredicate == null || selectableDayPredicate!(this.initialDate)");
  }).prototype = date_picker.DatePickerDialog.prototype;
  dart.addTypeTests(date_picker.DatePickerDialog);
  dart.addTypeCaches(date_picker.DatePickerDialog);
  dart.setMethodSignature(date_picker.DatePickerDialog, () => ({
    __proto__: dart.getMethods(date_picker.DatePickerDialog.__proto__),
    createState: dart.fnType(framework.State$(date_picker.DatePickerDialog), [])
  }));
  dart.setLibraryUri(date_picker.DatePickerDialog, I[1]);
  dart.setFieldSignature(date_picker.DatePickerDialog, () => ({
    __proto__: dart.getFields(date_picker.DatePickerDialog.__proto__),
    initialDate: dart.finalFieldType(core.DateTime),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    currentDate: dart.finalFieldType(core.DateTime),
    initialEntryMode: dart.finalFieldType(date$.DatePickerEntryMode),
    selectableDayPredicate: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [core.DateTime]))),
    cancelText: dart.finalFieldType(dart.nullable(core.String)),
    confirmText: dart.finalFieldType(dart.nullable(core.String)),
    helpText: dart.finalFieldType(dart.nullable(core.String)),
    initialCalendarMode: dart.finalFieldType(date$.DatePickerMode),
    errorFormatText: dart.finalFieldType(dart.nullable(core.String)),
    errorInvalidText: dart.finalFieldType(dart.nullable(core.String)),
    fieldHintText: dart.finalFieldType(dart.nullable(core.String)),
    fieldLabelText: dart.finalFieldType(dart.nullable(core.String)),
    keyboardType: dart.finalFieldType(dart.nullable(text_input.TextInputType)),
    restorationId: dart.finalFieldType(dart.nullable(core.String))
  }));
  var ___DatePickerDialogState__selectedDate = dart.privateName(date_picker, "_#_DatePickerDialogState#_selectedDate");
  var ___DatePickerDialogState__entryMode = dart.privateName(date_picker, "_#_DatePickerDialogState#_entryMode");
  var _autovalidateMode = dart.privateName(date_picker, "_autovalidateMode");
  var _calendarPickerKey = dart.privateName(date_picker, "_calendarPickerKey");
  var _formKey = dart.privateName(date_picker, "_formKey");
  var _selectedDate = dart.privateName(date_picker, "_selectedDate");
  var _entryMode = dart.privateName(date_picker, "_entryMode");
  var _handleOk = dart.privateName(date_picker, "_handleOk");
  var _handleCancel = dart.privateName(date_picker, "_handleCancel");
  var _handleEntryModeToggle = dart.privateName(date_picker, "_handleEntryModeToggle");
  var _handleDateChanged = dart.privateName(date_picker, "_handleDateChanged");
  var _dialogSize = dart.privateName(date_picker, "_dialogSize");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
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
  var SingleActivator_includeRepeats = dart.privateName(shortcuts, "SingleActivator.includeRepeats");
  var SingleActivator_meta = dart.privateName(shortcuts, "SingleActivator.meta");
  var SingleActivator_alt = dart.privateName(shortcuts, "SingleActivator.alt");
  var SingleActivator_shift = dart.privateName(shortcuts, "SingleActivator.shift");
  var SingleActivator_control = dart.privateName(shortcuts, "SingleActivator.control");
  var LogicalKeyboardKey_keyId = dart.privateName(keyboard_key$46g, "LogicalKeyboardKey.keyId");
  var SingleActivator_trigger = dart.privateName(shortcuts, "SingleActivator.trigger");
  const State_RestorationMixin$36 = class State_RestorationMixin extends framework.State$(date_picker.DatePickerDialog) {};
  (State_RestorationMixin$36.new = function() {
    restoration.RestorationMixin$(date_picker.DatePickerDialog)[dart.mixinNew].call(this);
    State_RestorationMixin$36.__proto__.new.call(this);
  }).prototype = State_RestorationMixin$36.prototype;
  dart.applyMixin(State_RestorationMixin$36, restoration.RestorationMixin$(date_picker.DatePickerDialog));
  date_picker._DatePickerDialogState = class _DatePickerDialogState extends State_RestorationMixin$36 {
    get [_selectedDate]() {
      let t1, t0;
      t0 = this[___DatePickerDialogState__selectedDate];
      return t0 == null ? (t1 = new restoration_properties.RestorableDateTime.new(this.widget.initialDate), this[___DatePickerDialogState__selectedDate] == null ? this[___DatePickerDialogState__selectedDate] = t1 : dart.throw(new _internal.LateError.fieldADI("_selectedDate"))) : t0;
    }
    get [_entryMode]() {
      let t1, t0;
      t0 = this[___DatePickerDialogState__entryMode];
      return t0 == null ? (t1 = new date_picker._RestorableDatePickerEntryMode.new(this.widget.initialEntryMode), this[___DatePickerDialogState__entryMode] == null ? this[___DatePickerDialogState__entryMode] = t1 : dart.throw(new _internal.LateError.fieldADI("_entryMode"))) : t0;
    }
    get restorationId() {
      return this.widget.restorationId;
    }
    restoreState(oldBucket, initialRestore) {
      this.registerForRestoration(this[_selectedDate], "selected_date");
      this.registerForRestoration(this[_autovalidateMode], "autovalidateMode");
      this.registerForRestoration(this[_entryMode], "calendar_entry_mode");
    }
    [_handleOk]() {
      if (this[_entryMode].value === date$.DatePickerEntryMode.input || this[_entryMode].value === date$.DatePickerEntryMode.inputOnly) {
        let form = dart.nullCheck(this[_formKey].currentState);
        if (!form.validate()) {
          this.setState(dart.fn(() => this[_autovalidateMode].value = form$.AutovalidateMode.always, T.VoidTovoid()));
          return;
        }
        form.save();
      }
      navigator.Navigator.pop(core.DateTime, this.context, this[_selectedDate].value);
    }
    [_handleCancel]() {
      navigator.Navigator.pop(T.ObjectN(), this.context);
    }
    [_handleEntryModeToggle]() {
      this.setState(dart.fn(() => {
        switch (this[_entryMode].value) {
          case C[0] || CT.C0:
            {
              this[_autovalidateMode].value = form$.AutovalidateMode.disabled;
              this[_entryMode].value = date$.DatePickerEntryMode.input;
              break;
            }
          case C[3] || CT.C3:
            {
              dart.nullCheck(this[_formKey].currentState).save();
              this[_entryMode].value = date$.DatePickerEntryMode.calendar;
              break;
            }
          case C[4] || CT.C4:
          case C[5] || CT.C5:
            {
              if (!false) dart.assertFailed("Can not change entry mode from _entryMode", I[0], 415, 18, "false");
              break;
            }
        }
      }, T.VoidTovoid()));
    }
    [_handleDateChanged](date) {
      this.setState(dart.fn(() => {
        this[_selectedDate].value = date;
      }, T.VoidTovoid()));
    }
    [_dialogSize](context) {
      let orientation = media_query.MediaQuery.of(context).orientation;
      switch (this[_entryMode].value) {
        case C[0] || CT.C0:
        case C[4] || CT.C4:
          {
            switch (orientation) {
              case C[6] || CT.C6:
                {
                  return date_picker._calendarPortraitDialogSize;
                }
              case C[7] || CT.C7:
                {
                  return date_picker._calendarLandscapeDialogSize;
                }
            }
          }
        case C[3] || CT.C3:
        case C[5] || CT.C5:
          {
            switch (orientation) {
              case C[6] || CT.C6:
                {
                  return date_picker._inputPortraitDialogSize;
                }
              case C[7] || CT.C7:
                {
                  return date_picker._inputLandscapeDialogSize;
                }
            }
          }
      }
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let theme = theme$.Theme.of(context);
      let colorScheme = theme.colorScheme;
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let orientation = media_query.MediaQuery.of(context).orientation;
      let textTheme = theme.textTheme;
      let textScaleFactor = math.min(core.double, media_query.MediaQuery.of(context).textScaleFactor, 1.3);
      let dateText = localizations.formatMediumDate(this[_selectedDate].value);
      let onPrimarySurface = colorScheme.brightness === ui.Brightness.light ? colorScheme.onPrimary : colorScheme.onSurface;
      let dateStyle = orientation === media_query.Orientation.landscape ? (t0 = textTheme.headline5, t0 == null ? null : t0.copyWith({color: onPrimarySurface})) : (t0$ = textTheme.headline4, t0$ == null ? null : t0$.copyWith({color: onPrimarySurface}));
      let actions = new container.Container.new({alignment: alignment.AlignmentDirectional.centerEnd, constraints: C[8] || CT.C8, padding: C[9] || CT.C9, child: new overflow_bar.OverflowBar.new({spacing: 8.0, children: T.JSArrayOfWidget().of([new text_button.TextButton.new({onPressed: dart.bind(this, _handleCancel), child: new text.Text.new((t0$0 = this.widget.cancelText, t0$0 == null ? localizations.cancelButtonLabel : t0$0), {$creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), new text_button.TextButton.new({onPressed: dart.bind(this, _handleOk), child: new text.Text.new((t0$1 = this.widget.confirmText, t0$1 == null ? localizations.okButtonLabel : t0$1), {$creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13})]), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
      const calendarDatePicker = () => {
        return new calendar_date_picker.CalendarDatePicker.new({key: this[_calendarPickerKey], initialDate: this[_selectedDate].value, firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, currentDate: this.widget.currentDate, onDateChanged: dart.bind(this, _handleDateChanged), selectableDayPredicate: this.widget.selectableDayPredicate, initialCalendarMode: this.widget.initialCalendarMode, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
      };
      dart.fn(calendarDatePicker, T.VoidToCalendarDatePicker());
      const inputDatePicker = () => {
        return new form$.Form.new({key: this[_formKey], autovalidateMode: this[_autovalidateMode].value, child: new container.Container.new({padding: C[17] || CT.C17, height: orientation === media_query.Orientation.portrait ? 98 : 108, child: new shortcuts.Shortcuts.new({shortcuts: date_picker._DatePickerDialogState._formShortcutMap, child: new basic.Column.new({children: T.JSArrayOfWidget().of([C[18] || CT.C18, new input_date_picker_form_field.InputDatePickerFormField.new({initialDate: this[_selectedDate].value, firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, onDateSubmitted: dart.bind(this, _handleDateChanged), onDateSaved: dart.bind(this, _handleDateChanged), selectableDayPredicate: this.widget.selectableDayPredicate, errorFormatText: this.widget.errorFormatText, errorInvalidText: this.widget.errorInvalidText, fieldHintText: this.widget.fieldHintText, fieldLabelText: this.widget.fieldLabelText, keyboardType: this.widget.keyboardType, autofocus: true, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), C[21] || CT.C21]), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
      };
      dart.fn(inputDatePicker, T.VoidToForm());
      let picker = null;
      let entryModeButton = null;
      switch (this[_entryMode].value) {
        case C[0] || CT.C0:
          {
            picker = calendarDatePicker();
            entryModeButton = new icon_button.IconButton.new({icon: C[27] || CT.C27, color: onPrimarySurface, tooltip: localizations.inputDateModeButtonLabel, onPressed: dart.bind(this, _handleEntryModeToggle), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
            break;
          }
        case C[4] || CT.C4:
          {
            picker = calendarDatePicker();
            entryModeButton = null;
            break;
          }
        case C[3] || CT.C3:
          {
            picker = inputDatePicker();
            entryModeButton = new icon_button.IconButton.new({icon: C[31] || CT.C31, color: onPrimarySurface, tooltip: localizations.calendarModeButtonLabel, onPressed: dart.bind(this, _handleEntryModeToggle), $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
            break;
          }
        case C[5] || CT.C5:
          {
            picker = inputDatePicker();
            entryModeButton = null;
            break;
          }
      }
      let header = new date_picker._DatePickerHeader.new({helpText: (t0$2 = this.widget.helpText, t0$2 == null ? localizations.datePickerHelpText : t0$2), titleText: dateText, titleStyle: dateStyle, orientation: orientation, isShort: orientation === media_query.Orientation.landscape, entryModeButton: entryModeButton, $creationLocationd_0dea112b090073317d4: C[35] || CT.C35});
      let dialogSize = this[_dialogSize](context)['*'](textScaleFactor);
      return new dialog$.Dialog.new({insetPadding: C[36] || CT.C36, clipBehavior: ui.Clip.antiAlias, child: new implicit_animations.AnimatedContainer.new({width: dialogSize.width, height: dialogSize.height, duration: date_picker._dialogSizeAnimationDuration, curve: curves.Curves.easeIn, child: new media_query.MediaQuery.new({data: media_query.MediaQuery.of(context).copyWith({textScaleFactor: textScaleFactor}), child: new basic.Builder.new({builder: dart.fn(context => {
                switch (orientation) {
                  case C[6] || CT.C6:
                    {
                      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: T.JSArrayOfWidget().of([header, new basic.Expanded.new({child: picker, $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), actions]), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38});
                    }
                  case C[7] || CT.C7:
                    {
                      return new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: T.JSArrayOfWidget().of([header, new basic.Flexible.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: picker, $creationLocationd_0dea112b090073317d4: C[39] || CT.C39}), actions]), $creationLocationd_0dea112b090073317d4: C[40] || CT.C40}), $creationLocationd_0dea112b090073317d4: C[41] || CT.C41})]), $creationLocationd_0dea112b090073317d4: C[42] || CT.C42});
                    }
                }
              }, T.BuildContextToFlex()), $creationLocationd_0dea112b090073317d4: C[43] || CT.C43}), $creationLocationd_0dea112b090073317d4: C[44] || CT.C44}), $creationLocationd_0dea112b090073317d4: C[45] || CT.C45}), $creationLocationd_0dea112b090073317d4: C[46] || CT.C46});
    }
    static ['_#new#tearOff']() {
      return new date_picker._DatePickerDialogState.new();
    }
  };
  (date_picker._DatePickerDialogState.new = function() {
    this[___DatePickerDialogState__selectedDate] = null;
    this[___DatePickerDialogState__entryMode] = null;
    this[_autovalidateMode] = new date_picker._RestorableAutovalidateMode.new(form$.AutovalidateMode.disabled);
    this[_calendarPickerKey] = T.GlobalKeyOfStateOfStatefulWidget().new();
    this[_formKey] = T.GlobalKeyOfFormState().new();
    date_picker._DatePickerDialogState.__proto__.new.call(this);
    ;
  }).prototype = date_picker._DatePickerDialogState.prototype;
  dart.addTypeTests(date_picker._DatePickerDialogState);
  dart.addTypeCaches(date_picker._DatePickerDialogState);
  dart.setMethodSignature(date_picker._DatePickerDialogState, () => ({
    __proto__: dart.getMethods(date_picker._DatePickerDialogState.__proto__),
    restoreState: dart.fnType(dart.void, [dart.nullable(restoration$.RestorationBucket), core.bool]),
    [_handleOk]: dart.fnType(dart.void, []),
    [_handleCancel]: dart.fnType(dart.void, []),
    [_handleEntryModeToggle]: dart.fnType(dart.void, []),
    [_handleDateChanged]: dart.fnType(dart.void, [core.DateTime]),
    [_dialogSize]: dart.fnType(ui.Size, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(date_picker._DatePickerDialogState, () => ({
    __proto__: dart.getGetters(date_picker._DatePickerDialogState.__proto__),
    [_selectedDate]: restoration_properties.RestorableDateTime,
    [_entryMode]: date_picker._RestorableDatePickerEntryMode,
    restorationId: dart.nullable(core.String)
  }));
  dart.setLibraryUri(date_picker._DatePickerDialogState, I[1]);
  dart.setFieldSignature(date_picker._DatePickerDialogState, () => ({
    __proto__: dart.getFields(date_picker._DatePickerDialogState.__proto__),
    [___DatePickerDialogState__selectedDate]: dart.fieldType(dart.nullable(restoration_properties.RestorableDateTime)),
    [___DatePickerDialogState__entryMode]: dart.fieldType(dart.nullable(date_picker._RestorableDatePickerEntryMode)),
    [_autovalidateMode]: dart.finalFieldType(date_picker._RestorableAutovalidateMode),
    [_calendarPickerKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form$.FormState))
  }));
  dart.setStaticFieldSignature(date_picker._DatePickerDialogState, () => ['_formShortcutMap']);
  dart.defineLazy(date_picker._DatePickerDialogState, {
    /*date_picker._DatePickerDialogState._formShortcutMap*/get _formShortcutMap() {
      return C[47] || CT.C47;
    }
  }, false);
  var _defaultValue = dart.privateName(date_picker, "_defaultValue");
  date_picker._RestorableDatePickerEntryMode = class _RestorableDatePickerEntryMode extends restoration_properties.RestorableValue$(date$.DatePickerEntryMode) {
    static ['_#new#tearOff'](defaultValue) {
      return new date_picker._RestorableDatePickerEntryMode.new(defaultValue);
    }
    createDefaultValue() {
      return this[_defaultValue];
    }
    didUpdateValue(oldValue) {
      T.DatePickerEntryModeN().as(oldValue);
      if (!restoration$.debugIsSerializableForRestoration(this.value.index)) dart.assertFailed(null, I[0], 648, 12, "debugIsSerializableForRestoration(value.index)");
      this.notifyListeners();
    }
    fromPrimitives(data) {
      return date$.DatePickerEntryMode.values[$_get](core.int.as(dart.nullCheck(data)));
    }
    toPrimitives() {
      return this.value.index;
    }
  };
  (date_picker._RestorableDatePickerEntryMode.new = function(defaultValue) {
    this[_defaultValue] = defaultValue;
    date_picker._RestorableDatePickerEntryMode.__proto__.new.call(this);
    ;
  }).prototype = date_picker._RestorableDatePickerEntryMode.prototype;
  dart.addTypeTests(date_picker._RestorableDatePickerEntryMode);
  dart.addTypeCaches(date_picker._RestorableDatePickerEntryMode);
  dart.setMethodSignature(date_picker._RestorableDatePickerEntryMode, () => ({
    __proto__: dart.getMethods(date_picker._RestorableDatePickerEntryMode.__proto__),
    createDefaultValue: dart.fnType(date$.DatePickerEntryMode, []),
    didUpdateValue: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    fromPrimitives: dart.fnType(date$.DatePickerEntryMode, [dart.nullable(core.Object)]),
    toPrimitives: dart.fnType(dart.nullable(core.Object), [])
  }));
  dart.setLibraryUri(date_picker._RestorableDatePickerEntryMode, I[1]);
  dart.setFieldSignature(date_picker._RestorableDatePickerEntryMode, () => ({
    __proto__: dart.getFields(date_picker._RestorableDatePickerEntryMode.__proto__),
    [_defaultValue]: dart.finalFieldType(date$.DatePickerEntryMode)
  }));
  date_picker._RestorableAutovalidateMode = class _RestorableAutovalidateMode extends restoration_properties.RestorableValue$(form$.AutovalidateMode) {
    static ['_#new#tearOff'](defaultValue) {
      return new date_picker._RestorableAutovalidateMode.new(defaultValue);
    }
    createDefaultValue() {
      return this[_defaultValue];
    }
    didUpdateValue(oldValue) {
      T.AutovalidateModeN().as(oldValue);
      if (!restoration$.debugIsSerializableForRestoration(this.value.index)) dart.assertFailed(null, I[0], 674, 12, "debugIsSerializableForRestoration(value.index)");
      this.notifyListeners();
    }
    fromPrimitives(data) {
      return form$.AutovalidateMode.values[$_get](core.int.as(dart.nullCheck(data)));
    }
    toPrimitives() {
      return this.value.index;
    }
  };
  (date_picker._RestorableAutovalidateMode.new = function(defaultValue) {
    this[_defaultValue] = defaultValue;
    date_picker._RestorableAutovalidateMode.__proto__.new.call(this);
    ;
  }).prototype = date_picker._RestorableAutovalidateMode.prototype;
  dart.addTypeTests(date_picker._RestorableAutovalidateMode);
  dart.addTypeCaches(date_picker._RestorableAutovalidateMode);
  dart.setMethodSignature(date_picker._RestorableAutovalidateMode, () => ({
    __proto__: dart.getMethods(date_picker._RestorableAutovalidateMode.__proto__),
    createDefaultValue: dart.fnType(form$.AutovalidateMode, []),
    didUpdateValue: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    fromPrimitives: dart.fnType(form$.AutovalidateMode, [dart.nullable(core.Object)]),
    toPrimitives: dart.fnType(dart.nullable(core.Object), [])
  }));
  dart.setLibraryUri(date_picker._RestorableAutovalidateMode, I[1]);
  dart.setFieldSignature(date_picker._RestorableAutovalidateMode, () => ({
    __proto__: dart.getFields(date_picker._RestorableAutovalidateMode.__proto__),
    [_defaultValue]: dart.finalFieldType(form$.AutovalidateMode)
  }));
  var helpText$0 = dart.privateName(date_picker, "_DatePickerHeader.helpText");
  var titleText$ = dart.privateName(date_picker, "_DatePickerHeader.titleText");
  var titleSemanticsLabel$ = dart.privateName(date_picker, "_DatePickerHeader.titleSemanticsLabel");
  var titleStyle$ = dart.privateName(date_picker, "_DatePickerHeader.titleStyle");
  var orientation$ = dart.privateName(date_picker, "_DatePickerHeader.orientation");
  var isShort$ = dart.privateName(date_picker, "_DatePickerHeader.isShort");
  var entryModeButton$ = dart.privateName(date_picker, "_DatePickerHeader.entryModeButton");
  var EdgeInsetsDirectional_bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  var EdgeInsetsDirectional_end = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  var EdgeInsetsDirectional_top = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  var EdgeInsetsDirectional_start = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var ProxyWidget_child = dart.privateName(framework, "ProxyWidget.child");
  var Flexible_fit = dart.privateName(basic, "Flexible.fit");
  var Flexible_flex = dart.privateName(basic, "Flexible.flex");
  date_picker._DatePickerHeader = class _DatePickerHeader extends framework.StatelessWidget {
    get helpText() {
      return this[helpText$0];
    }
    set helpText(value) {
      super.helpText = value;
    }
    get titleText() {
      return this[titleText$];
    }
    set titleText(value) {
      super.titleText = value;
    }
    get titleSemanticsLabel() {
      return this[titleSemanticsLabel$];
    }
    set titleSemanticsLabel(value) {
      super.titleSemanticsLabel = value;
    }
    get titleStyle() {
      return this[titleStyle$];
    }
    set titleStyle(value) {
      super.titleStyle = value;
    }
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get isShort() {
      return this[isShort$];
    }
    set isShort(value) {
      super.isShort = value;
    }
    get entryModeButton() {
      return this[entryModeButton$];
    }
    set entryModeButton(value) {
      super.entryModeButton = value;
    }
    static ['_#new#tearOff'](opts) {
      let helpText = opts && 'helpText' in opts ? opts.helpText : null;
      let titleText = opts && 'titleText' in opts ? opts.titleText : null;
      let titleSemanticsLabel = opts && 'titleSemanticsLabel' in opts ? opts.titleSemanticsLabel : null;
      let titleStyle = opts && 'titleStyle' in opts ? opts.titleStyle : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let isShort = opts && 'isShort' in opts ? opts.isShort : false;
      let entryModeButton = opts && 'entryModeButton' in opts ? opts.entryModeButton : null;
      return new date_picker._DatePickerHeader.new({helpText: helpText, titleText: titleText, titleSemanticsLabel: titleSemanticsLabel, titleStyle: titleStyle, orientation: orientation, isShort: isShort, entryModeButton: entryModeButton, $creationLocationd_0dea112b090073317d4: C[51] || CT.C51});
    }
    build(context) {
      let t0, t0$;
      let theme = theme$.Theme.of(context);
      let colorScheme = theme.colorScheme;
      let textTheme = theme.textTheme;
      let isDark = colorScheme.brightness === ui.Brightness.dark;
      let primarySurfaceColor = isDark ? colorScheme.surface : colorScheme.primary;
      let onPrimarySurfaceColor = isDark ? colorScheme.onSurface : colorScheme.onPrimary;
      let helpStyle = (t0 = textTheme.overline, t0 == null ? null : t0.copyWith({color: onPrimarySurfaceColor}));
      let help = new text.Text.new(this.helpText, {style: helpStyle, maxLines: 1, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[52] || CT.C52});
      let title = new text.Text.new(this.titleText, {semanticsLabel: (t0$ = this.titleSemanticsLabel, t0$ == null ? this.titleText : t0$), style: this.titleStyle, maxLines: this.orientation === media_query.Orientation.portrait ? 1 : 2, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[53] || CT.C53});
      switch (this.orientation) {
        case C[6] || CT.C6:
          {
            return new basic.SizedBox.new({height: 120, child: new material.Material.new({color: primarySurfaceColor, child: new basic.Padding.new({padding: C[54] || CT.C54, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([C[55] || CT.C55, help, C[57] || CT.C57, new basic.Row.new({children: (() => {
                          let t0 = T.JSArrayOfWidget().of([new basic.Expanded.new({child: title, $creationLocationd_0dea112b090073317d4: C[62] || CT.C62})]);
                          if (this.entryModeButton != null) t0.push(dart.nullCheck(this.entryModeButton));
                          return t0;
                        })(), $creationLocationd_0dea112b090073317d4: C[63] || CT.C63})]), $creationLocationd_0dea112b090073317d4: C[64] || CT.C64}), $creationLocationd_0dea112b090073317d4: C[65] || CT.C65}), $creationLocationd_0dea112b090073317d4: C[66] || CT.C66}), $creationLocationd_0dea112b090073317d4: C[67] || CT.C67});
          }
        case C[7] || CT.C7:
          {
            return new basic.SizedBox.new({width: 152, child: new material.Material.new({color: primarySurfaceColor, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
                    let t1 = T.JSArrayOfWidget().of([C[68] || CT.C68, new basic.Padding.new({padding: C[70] || CT.C70, child: help, $creationLocationd_0dea112b090073317d4: C[71] || CT.C71}), new basic.SizedBox.new({height: this.isShort ? 16.0 : 56.0, $creationLocationd_0dea112b090073317d4: C[72] || CT.C72}), new basic.Expanded.new({child: new basic.Padding.new({padding: C[70] || CT.C70, child: title, $creationLocationd_0dea112b090073317d4: C[73] || CT.C73}), $creationLocationd_0dea112b090073317d4: C[74] || CT.C74})]);
                    if (this.entryModeButton != null) t1.push(new basic.Padding.new({padding: C[75] || CT.C75, child: this.entryModeButton, $creationLocationd_0dea112b090073317d4: C[76] || CT.C76}));
                    return t1;
                  })(), $creationLocationd_0dea112b090073317d4: C[77] || CT.C77}), $creationLocationd_0dea112b090073317d4: C[78] || CT.C78}), $creationLocationd_0dea112b090073317d4: C[79] || CT.C79});
          }
      }
    }
  };
  (date_picker._DatePickerHeader.new = function(opts) {
    let helpText = opts && 'helpText' in opts ? opts.helpText : null;
    let titleText = opts && 'titleText' in opts ? opts.titleText : null;
    let titleSemanticsLabel = opts && 'titleSemanticsLabel' in opts ? opts.titleSemanticsLabel : null;
    let titleStyle = opts && 'titleStyle' in opts ? opts.titleStyle : null;
    let orientation = opts && 'orientation' in opts ? opts.orientation : null;
    let isShort = opts && 'isShort' in opts ? opts.isShort : false;
    let entryModeButton = opts && 'entryModeButton' in opts ? opts.entryModeButton : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[helpText$0] = helpText;
    this[titleText$] = titleText;
    this[titleSemanticsLabel$] = titleSemanticsLabel;
    this[titleStyle$] = titleStyle;
    this[orientation$] = orientation;
    this[isShort$] = isShort;
    this[entryModeButton$] = entryModeButton;
    if (!(helpText !== null)) dart.assertFailed(null, I[0], 707, 15, "helpText != null");
    if (!(orientation !== null)) dart.assertFailed(null, I[0], 708, 15, "orientation != null");
    if (!(isShort !== null)) dart.assertFailed(null, I[0], 709, 15, "isShort != null");
    date_picker._DatePickerHeader.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker._DatePickerHeader.prototype;
  dart.addTypeTests(date_picker._DatePickerHeader);
  dart.addTypeCaches(date_picker._DatePickerHeader);
  dart.setMethodSignature(date_picker._DatePickerHeader, () => ({
    __proto__: dart.getMethods(date_picker._DatePickerHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(date_picker._DatePickerHeader, I[1]);
  dart.setFieldSignature(date_picker._DatePickerHeader, () => ({
    __proto__: dart.getFields(date_picker._DatePickerHeader.__proto__),
    helpText: dart.finalFieldType(core.String),
    titleText: dart.finalFieldType(core.String),
    titleSemanticsLabel: dart.finalFieldType(dart.nullable(core.String)),
    titleStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    orientation: dart.finalFieldType(media_query.Orientation),
    isShort: dart.finalFieldType(core.bool),
    entryModeButton: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  dart.setStaticFieldSignature(date_picker._DatePickerHeader, () => ['_datePickerHeaderLandscapeWidth', '_datePickerHeaderPortraitHeight', '_headerPaddingLandscape']);
  dart.defineLazy(date_picker._DatePickerHeader, {
    /*date_picker._DatePickerHeader._datePickerHeaderLandscapeWidth*/get _datePickerHeaderLandscapeWidth() {
      return 152;
    },
    /*date_picker._DatePickerHeader._datePickerHeaderPortraitHeight*/get _datePickerHeaderPortraitHeight() {
      return 120;
    },
    /*date_picker._DatePickerHeader._headerPaddingLandscape*/get _headerPaddingLandscape() {
      return 16;
    }
  }, false);
  var initialDateRange$ = dart.privateName(date_picker, "DateRangePickerDialog.initialDateRange");
  var firstDate$0 = dart.privateName(date_picker, "DateRangePickerDialog.firstDate");
  var lastDate$0 = dart.privateName(date_picker, "DateRangePickerDialog.lastDate");
  var currentDate$0 = dart.privateName(date_picker, "DateRangePickerDialog.currentDate");
  var initialEntryMode$0 = dart.privateName(date_picker, "DateRangePickerDialog.initialEntryMode");
  var cancelText$0 = dart.privateName(date_picker, "DateRangePickerDialog.cancelText");
  var confirmText$0 = dart.privateName(date_picker, "DateRangePickerDialog.confirmText");
  var saveText$ = dart.privateName(date_picker, "DateRangePickerDialog.saveText");
  var helpText$1 = dart.privateName(date_picker, "DateRangePickerDialog.helpText");
  var errorInvalidRangeText$ = dart.privateName(date_picker, "DateRangePickerDialog.errorInvalidRangeText");
  var errorFormatText$0 = dart.privateName(date_picker, "DateRangePickerDialog.errorFormatText");
  var errorInvalidText$0 = dart.privateName(date_picker, "DateRangePickerDialog.errorInvalidText");
  var fieldStartHintText$ = dart.privateName(date_picker, "DateRangePickerDialog.fieldStartHintText");
  var fieldEndHintText$ = dart.privateName(date_picker, "DateRangePickerDialog.fieldEndHintText");
  var fieldStartLabelText$ = dart.privateName(date_picker, "DateRangePickerDialog.fieldStartLabelText");
  var fieldEndLabelText$ = dart.privateName(date_picker, "DateRangePickerDialog.fieldEndLabelText");
  var restorationId$0 = dart.privateName(date_picker, "DateRangePickerDialog.restorationId");
  date_picker.DateRangePickerDialog = class DateRangePickerDialog extends framework.StatefulWidget {
    get initialDateRange() {
      return this[initialDateRange$];
    }
    set initialDateRange(value) {
      super.initialDateRange = value;
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
    get currentDate() {
      return this[currentDate$0];
    }
    set currentDate(value) {
      super.currentDate = value;
    }
    get initialEntryMode() {
      return this[initialEntryMode$0];
    }
    set initialEntryMode(value) {
      super.initialEntryMode = value;
    }
    get cancelText() {
      return this[cancelText$0];
    }
    set cancelText(value) {
      super.cancelText = value;
    }
    get confirmText() {
      return this[confirmText$0];
    }
    set confirmText(value) {
      super.confirmText = value;
    }
    get saveText() {
      return this[saveText$];
    }
    set saveText(value) {
      super.saveText = value;
    }
    get helpText() {
      return this[helpText$1];
    }
    set helpText(value) {
      super.helpText = value;
    }
    get errorInvalidRangeText() {
      return this[errorInvalidRangeText$];
    }
    set errorInvalidRangeText(value) {
      super.errorInvalidRangeText = value;
    }
    get errorFormatText() {
      return this[errorFormatText$0];
    }
    set errorFormatText(value) {
      super.errorFormatText = value;
    }
    get errorInvalidText() {
      return this[errorInvalidText$0];
    }
    set errorInvalidText(value) {
      super.errorInvalidText = value;
    }
    get fieldStartHintText() {
      return this[fieldStartHintText$];
    }
    set fieldStartHintText(value) {
      super.fieldStartHintText = value;
    }
    get fieldEndHintText() {
      return this[fieldEndHintText$];
    }
    set fieldEndHintText(value) {
      super.fieldEndHintText = value;
    }
    get fieldStartLabelText() {
      return this[fieldStartLabelText$];
    }
    set fieldStartLabelText(value) {
      super.fieldStartLabelText = value;
    }
    get fieldEndLabelText() {
      return this[fieldEndLabelText$];
    }
    set fieldEndLabelText(value) {
      super.fieldEndLabelText = value;
    }
    get restorationId() {
      return this[restorationId$0];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialDateRange = opts && 'initialDateRange' in opts ? opts.initialDateRange : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let initialEntryMode = opts && 'initialEntryMode' in opts ? opts.initialEntryMode : C[0] || CT.C0;
      let helpText = opts && 'helpText' in opts ? opts.helpText : null;
      let cancelText = opts && 'cancelText' in opts ? opts.cancelText : null;
      let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
      let saveText = opts && 'saveText' in opts ? opts.saveText : null;
      let errorInvalidRangeText = opts && 'errorInvalidRangeText' in opts ? opts.errorInvalidRangeText : null;
      let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
      let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
      let fieldStartHintText = opts && 'fieldStartHintText' in opts ? opts.fieldStartHintText : null;
      let fieldEndHintText = opts && 'fieldEndHintText' in opts ? opts.fieldEndHintText : null;
      let fieldStartLabelText = opts && 'fieldStartLabelText' in opts ? opts.fieldStartLabelText : null;
      let fieldEndLabelText = opts && 'fieldEndLabelText' in opts ? opts.fieldEndLabelText : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      return new date_picker.DateRangePickerDialog.new({key: key, initialDateRange: initialDateRange, firstDate: firstDate, lastDate: lastDate, currentDate: currentDate, initialEntryMode: initialEntryMode, helpText: helpText, cancelText: cancelText, confirmText: confirmText, saveText: saveText, errorInvalidRangeText: errorInvalidRangeText, errorFormatText: errorFormatText, errorInvalidText: errorInvalidText, fieldStartHintText: fieldStartHintText, fieldEndHintText: fieldEndHintText, fieldStartLabelText: fieldStartLabelText, fieldEndLabelText: fieldEndLabelText, restorationId: restorationId, $creationLocationd_0dea112b090073317d4: C[80] || CT.C80});
    }
    createState() {
      return new date_picker._DateRangePickerDialogState.new();
    }
  };
  (date_picker.DateRangePickerDialog.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialDateRange = opts && 'initialDateRange' in opts ? opts.initialDateRange : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let initialEntryMode = opts && 'initialEntryMode' in opts ? opts.initialEntryMode : C[0] || CT.C0;
    let helpText = opts && 'helpText' in opts ? opts.helpText : null;
    let cancelText = opts && 'cancelText' in opts ? opts.cancelText : null;
    let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
    let saveText = opts && 'saveText' in opts ? opts.saveText : null;
    let errorInvalidRangeText = opts && 'errorInvalidRangeText' in opts ? opts.errorInvalidRangeText : null;
    let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
    let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
    let fieldStartHintText = opts && 'fieldStartHintText' in opts ? opts.fieldStartHintText : null;
    let fieldEndHintText = opts && 'fieldEndHintText' in opts ? opts.fieldEndHintText : null;
    let fieldStartLabelText = opts && 'fieldStartLabelText' in opts ? opts.fieldStartLabelText : null;
    let fieldEndLabelText = opts && 'fieldEndLabelText' in opts ? opts.fieldEndLabelText : null;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[initialDateRange$] = initialDateRange;
    this[firstDate$0] = firstDate;
    this[lastDate$0] = lastDate;
    this[currentDate$0] = currentDate;
    this[initialEntryMode$0] = initialEntryMode;
    this[helpText$1] = helpText;
    this[cancelText$0] = cancelText;
    this[confirmText$0] = confirmText;
    this[saveText$] = saveText;
    this[errorInvalidRangeText$] = errorInvalidRangeText;
    this[errorFormatText$0] = errorFormatText;
    this[errorInvalidText$0] = errorInvalidText;
    this[fieldStartHintText$] = fieldStartHintText;
    this[fieldEndHintText$] = fieldEndHintText;
    this[fieldStartLabelText$] = fieldStartLabelText;
    this[fieldEndLabelText$] = fieldEndLabelText;
    this[restorationId$0] = restorationId;
    date_picker.DateRangePickerDialog.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker.DateRangePickerDialog.prototype;
  dart.addTypeTests(date_picker.DateRangePickerDialog);
  dart.addTypeCaches(date_picker.DateRangePickerDialog);
  dart.setMethodSignature(date_picker.DateRangePickerDialog, () => ({
    __proto__: dart.getMethods(date_picker.DateRangePickerDialog.__proto__),
    createState: dart.fnType(framework.State$(date_picker.DateRangePickerDialog), [])
  }));
  dart.setLibraryUri(date_picker.DateRangePickerDialog, I[1]);
  dart.setFieldSignature(date_picker.DateRangePickerDialog, () => ({
    __proto__: dart.getFields(date_picker.DateRangePickerDialog.__proto__),
    initialDateRange: dart.finalFieldType(dart.nullable(date$.DateTimeRange)),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    currentDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    initialEntryMode: dart.finalFieldType(date$.DatePickerEntryMode),
    cancelText: dart.finalFieldType(dart.nullable(core.String)),
    confirmText: dart.finalFieldType(dart.nullable(core.String)),
    saveText: dart.finalFieldType(dart.nullable(core.String)),
    helpText: dart.finalFieldType(dart.nullable(core.String)),
    errorInvalidRangeText: dart.finalFieldType(dart.nullable(core.String)),
    errorFormatText: dart.finalFieldType(dart.nullable(core.String)),
    errorInvalidText: dart.finalFieldType(dart.nullable(core.String)),
    fieldStartHintText: dart.finalFieldType(dart.nullable(core.String)),
    fieldEndHintText: dart.finalFieldType(dart.nullable(core.String)),
    fieldStartLabelText: dart.finalFieldType(dart.nullable(core.String)),
    fieldEndLabelText: dart.finalFieldType(dart.nullable(core.String)),
    restorationId: dart.finalFieldType(dart.nullable(core.String))
  }));
  var ___DateRangePickerDialogState__entryMode = dart.privateName(date_picker, "_#_DateRangePickerDialogState#_entryMode");
  var ___DateRangePickerDialogState__selectedStart = dart.privateName(date_picker, "_#_DateRangePickerDialogState#_selectedStart");
  var ___DateRangePickerDialogState__selectedEnd = dart.privateName(date_picker, "_#_DateRangePickerDialogState#_selectedEnd");
  var _autoValidate = dart.privateName(date_picker, "_autoValidate");
  var _inputPickerKey = dart.privateName(date_picker, "_inputPickerKey");
  var _selectedStart = dart.privateName(date_picker, "_selectedStart");
  var _selectedEnd = dart.privateName(date_picker, "_selectedEnd");
  var _hasSelectedDateRange = dart.privateName(date_picker, "_hasSelectedDateRange");
  var _handleStartDateChanged = dart.privateName(date_picker, "_handleStartDateChanged");
  var _handleEndDateChanged = dart.privateName(date_picker, "_handleEndDateChanged");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  const State_RestorationMixin$36$ = class State_RestorationMixin extends framework.State$(date_picker.DateRangePickerDialog) {};
  (State_RestorationMixin$36$.new = function() {
    restoration.RestorationMixin$(date_picker.DateRangePickerDialog)[dart.mixinNew].call(this);
    State_RestorationMixin$36$.__proto__.new.call(this);
  }).prototype = State_RestorationMixin$36$.prototype;
  dart.applyMixin(State_RestorationMixin$36$, restoration.RestorationMixin$(date_picker.DateRangePickerDialog));
  date_picker._DateRangePickerDialogState = class _DateRangePickerDialogState extends State_RestorationMixin$36$ {
    get [_entryMode]() {
      let t3, t2;
      t2 = this[___DateRangePickerDialogState__entryMode];
      return t2 == null ? (t3 = new date_picker._RestorableDatePickerEntryMode.new(this.widget.initialEntryMode), this[___DateRangePickerDialogState__entryMode] == null ? this[___DateRangePickerDialogState__entryMode] = t3 : dart.throw(new _internal.LateError.fieldADI("_entryMode"))) : t2;
    }
    get [_selectedStart]() {
      let t3, t3$, t2;
      t2 = this[___DateRangePickerDialogState__selectedStart];
      return t2 == null ? (t3$ = new restoration_properties.RestorableDateTimeN.new((t3 = this.widget.initialDateRange, t3 == null ? null : t3.start)), this[___DateRangePickerDialogState__selectedStart] == null ? this[___DateRangePickerDialogState__selectedStart] = t3$ : dart.throw(new _internal.LateError.fieldADI("_selectedStart"))) : t2;
    }
    get [_selectedEnd]() {
      let t3, t3$, t2;
      t2 = this[___DateRangePickerDialogState__selectedEnd];
      return t2 == null ? (t3$ = new restoration_properties.RestorableDateTimeN.new((t3 = this.widget.initialDateRange, t3 == null ? null : t3.end)), this[___DateRangePickerDialogState__selectedEnd] == null ? this[___DateRangePickerDialogState__selectedEnd] = t3$ : dart.throw(new _internal.LateError.fieldADI("_selectedEnd"))) : t2;
    }
    get restorationId() {
      return this.widget.restorationId;
    }
    restoreState(oldBucket, initialRestore) {
      this.registerForRestoration(this[_entryMode], "entry_mode");
      this.registerForRestoration(this[_selectedStart], "selected_start");
      this.registerForRestoration(this[_selectedEnd], "selected_end");
      this.registerForRestoration(this[_autoValidate], "autovalidate");
    }
    [_handleOk]() {
      if (this[_entryMode].value === date$.DatePickerEntryMode.input || this[_entryMode].value === date$.DatePickerEntryMode.inputOnly) {
        let picker = dart.nullCheck(this[_inputPickerKey].currentState);
        if (!picker.validate()) {
          this.setState(dart.fn(() => {
            this[_autoValidate].value = true;
          }, T.VoidTovoid()));
          return;
        }
      }
      let selectedRange = this[_hasSelectedDateRange] ? new date$.DateTimeRange.new({start: dart.nullCheck(this[_selectedStart].value), end: dart.nullCheck(this[_selectedEnd].value)}) : null;
      navigator.Navigator.pop(date$.DateTimeRange, this.context, selectedRange);
    }
    [_handleCancel]() {
      navigator.Navigator.pop(T.ObjectN(), this.context);
    }
    [_handleEntryModeToggle]() {
      this.setState(dart.fn(() => {
        switch (this[_entryMode].value) {
          case C[0] || CT.C0:
            {
              this[_autoValidate].value = false;
              this[_entryMode].value = date$.DatePickerEntryMode.input;
              break;
            }
          case C[3] || CT.C3:
            {
              if (this[_selectedStart].value != null && (dart.nullCheck(this[_selectedStart].value).isBefore(this.widget.firstDate) || dart.nullCheck(this[_selectedStart].value).isAfter(this.widget.lastDate))) {
                this[_selectedStart].value = null;
                this[_selectedEnd].value = null;
              }
              if (this[_selectedEnd].value != null && (dart.nullCheck(this[_selectedEnd].value).isBefore(this.widget.firstDate) || dart.nullCheck(this[_selectedEnd].value).isAfter(this.widget.lastDate))) {
                this[_selectedEnd].value = null;
              }
              if (this[_selectedStart].value != null && this[_selectedEnd].value != null && dart.nullCheck(this[_selectedStart].value).isAfter(dart.nullCheck(this[_selectedEnd].value))) {
                this[_selectedEnd].value = null;
              }
              this[_entryMode].value = date$.DatePickerEntryMode.calendar;
              break;
            }
          case C[4] || CT.C4:
          case C[5] || CT.C5:
            {
              if (!false) dart.assertFailed("Can not change entry mode from " + dart.str(this[_entryMode]), I[0], 1293, 18, "false");
              break;
            }
        }
      }, T.VoidTovoid()));
    }
    [_handleStartDateChanged](date) {
      this.setState(dart.fn(() => this[_selectedStart].value = date, T.VoidTovoid()));
    }
    [_handleEndDateChanged](date) {
      this.setState(dart.fn(() => this[_selectedEnd].value = date, T.VoidTovoid()));
    }
    get [_hasSelectedDateRange]() {
      return this[_selectedStart].value != null && this[_selectedEnd].value != null;
    }
    build(context) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3;
      let mediaQuery = media_query.MediaQuery.of(context);
      let orientation = mediaQuery.orientation;
      let textScaleFactor = math.min(core.double, mediaQuery.textScaleFactor, 1.3);
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let colors = theme$.Theme.of(context).colorScheme;
      let onPrimarySurface = colors.brightness === ui.Brightness.light ? colors.onPrimary : colors.onSurface;
      let contents = null;
      let size = null;
      let shape = null;
      let elevation = null;
      let insetPadding = null;
      let showEntryModeButton = this[_entryMode].value === date$.DatePickerEntryMode.calendar || this[_entryMode].value === date$.DatePickerEntryMode.input;
      switch (this[_entryMode].value) {
        case C[0] || CT.C0:
        case C[4] || CT.C4:
          {
            contents = new date_picker._CalendarRangePickerDialog.new({key: this[_calendarPickerKey], selectedStartDate: this[_selectedStart].value, selectedEndDate: this[_selectedEnd].value, firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, currentDate: this.widget.currentDate, onStartDateChanged: dart.bind(this, _handleStartDateChanged), onEndDateChanged: dart.bind(this, _handleEndDateChanged), onConfirm: this[_hasSelectedDateRange] ? dart.bind(this, _handleOk) : null, onCancel: dart.bind(this, _handleCancel), entryModeButton: showEntryModeButton ? new icon_button.IconButton.new({icon: C[81] || CT.C81, padding: edge_insets.EdgeInsets.zero, color: onPrimarySurface, tooltip: localizations.inputDateModeButtonLabel, onPressed: dart.bind(this, _handleEntryModeToggle), $creationLocationd_0dea112b090073317d4: C[83] || CT.C83}) : null, confirmText: (t2 = this.widget.saveText, t2 == null ? localizations.saveButtonLabel : t2), helpText: (t2$ = this.widget.helpText, t2$ == null ? localizations.dateRangePickerHelpText : t2$), $creationLocationd_0dea112b090073317d4: C[84] || CT.C84});
            size = mediaQuery.size;
            insetPadding = edge_insets.EdgeInsets.zero;
            shape = C[85] || CT.C85;
            elevation = 0.0;
            break;
          }
        case C[3] || CT.C3:
        case C[5] || CT.C5:
          {
            contents = new date_picker._InputDateRangePickerDialog.new({selectedStartDate: this[_selectedStart].value, selectedEndDate: this[_selectedEnd].value, currentDate: this.widget.currentDate, picker: new container.Container.new({padding: C[17] || CT.C17, height: orientation === media_query.Orientation.portrait ? 98 : 108, child: new basic.Column.new({children: T.JSArrayOfWidget().of([C[92] || CT.C92, new date_picker._InputDateRangePicker.new({key: this[_inputPickerKey], initialStartDate: this[_selectedStart].value, initialEndDate: this[_selectedEnd].value, firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, onStartDateChanged: dart.bind(this, _handleStartDateChanged), onEndDateChanged: dart.bind(this, _handleEndDateChanged), autofocus: true, autovalidate: this[_autoValidate].value, helpText: this.widget.helpText, errorInvalidRangeText: this.widget.errorInvalidRangeText, errorFormatText: this.widget.errorFormatText, errorInvalidText: this.widget.errorInvalidText, fieldStartHintText: this.widget.fieldStartHintText, fieldEndHintText: this.widget.fieldEndHintText, fieldStartLabelText: this.widget.fieldStartLabelText, fieldEndLabelText: this.widget.fieldEndLabelText, $creationLocationd_0dea112b090073317d4: C[94] || CT.C94}), C[95] || CT.C95]), $creationLocationd_0dea112b090073317d4: C[97] || CT.C97}), $creationLocationd_0dea112b090073317d4: C[98] || CT.C98}), onConfirm: dart.bind(this, _handleOk), onCancel: dart.bind(this, _handleCancel), entryModeButton: showEntryModeButton ? new icon_button.IconButton.new({icon: C[99] || CT.C99, padding: edge_insets.EdgeInsets.zero, color: onPrimarySurface, tooltip: localizations.calendarModeButtonLabel, onPressed: dart.bind(this, _handleEntryModeToggle), $creationLocationd_0dea112b090073317d4: C[101] || CT.C101}) : null, confirmText: (t2$0 = this.widget.confirmText, t2$0 == null ? localizations.okButtonLabel : t2$0), cancelText: (t2$1 = this.widget.cancelText, t2$1 == null ? localizations.cancelButtonLabel : t2$1), helpText: (t2$2 = this.widget.helpText, t2$2 == null ? localizations.dateRangePickerHelpText : t2$2), $creationLocationd_0dea112b090073317d4: C[102] || CT.C102});
            let dialogTheme = theme$.Theme.of(context).dialogTheme;
            size = orientation === media_query.Orientation.portrait ? date_picker._inputPortraitDialogSize : date_picker._inputRangeLandscapeDialogSize;
            insetPadding = C[36] || CT.C36;
            shape = dialogTheme.shape;
            elevation = (t2$3 = dialogTheme.elevation, t2$3 == null ? 24.0 : t2$3);
            break;
          }
      }
      return new dialog$.Dialog.new({insetPadding: insetPadding, shape: shape, elevation: elevation, clipBehavior: ui.Clip.antiAlias, child: new implicit_animations.AnimatedContainer.new({width: size.width, height: size.height, duration: date_picker._dialogSizeAnimationDuration, curve: curves.Curves.easeIn, child: new media_query.MediaQuery.new({data: media_query.MediaQuery.of(context).copyWith({textScaleFactor: textScaleFactor}), child: new basic.Builder.new({builder: dart.fn(context => contents, T.BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: C[103] || CT.C103}), $creationLocationd_0dea112b090073317d4: C[104] || CT.C104}), $creationLocationd_0dea112b090073317d4: C[105] || CT.C105}), $creationLocationd_0dea112b090073317d4: C[106] || CT.C106});
    }
    static ['_#new#tearOff']() {
      return new date_picker._DateRangePickerDialogState.new();
    }
  };
  (date_picker._DateRangePickerDialogState.new = function() {
    this[___DateRangePickerDialogState__entryMode] = null;
    this[___DateRangePickerDialogState__selectedStart] = null;
    this[___DateRangePickerDialogState__selectedEnd] = null;
    this[_autoValidate] = new restoration_properties.RestorableBool.new(false);
    this[_calendarPickerKey] = T.GlobalKeyOfStateOfStatefulWidget().new();
    this[_inputPickerKey] = T.GlobalKeyOf_InputDateRangePickerState().new();
    date_picker._DateRangePickerDialogState.__proto__.new.call(this);
    ;
  }).prototype = date_picker._DateRangePickerDialogState.prototype;
  dart.addTypeTests(date_picker._DateRangePickerDialogState);
  dart.addTypeCaches(date_picker._DateRangePickerDialogState);
  dart.setMethodSignature(date_picker._DateRangePickerDialogState, () => ({
    __proto__: dart.getMethods(date_picker._DateRangePickerDialogState.__proto__),
    restoreState: dart.fnType(dart.void, [dart.nullable(restoration$.RestorationBucket), core.bool]),
    [_handleOk]: dart.fnType(dart.void, []),
    [_handleCancel]: dart.fnType(dart.void, []),
    [_handleEntryModeToggle]: dart.fnType(dart.void, []),
    [_handleStartDateChanged]: dart.fnType(dart.void, [dart.nullable(core.DateTime)]),
    [_handleEndDateChanged]: dart.fnType(dart.void, [dart.nullable(core.DateTime)]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(date_picker._DateRangePickerDialogState, () => ({
    __proto__: dart.getGetters(date_picker._DateRangePickerDialogState.__proto__),
    [_entryMode]: date_picker._RestorableDatePickerEntryMode,
    [_selectedStart]: restoration_properties.RestorableDateTimeN,
    [_selectedEnd]: restoration_properties.RestorableDateTimeN,
    restorationId: dart.nullable(core.String),
    [_hasSelectedDateRange]: core.bool
  }));
  dart.setLibraryUri(date_picker._DateRangePickerDialogState, I[1]);
  dart.setFieldSignature(date_picker._DateRangePickerDialogState, () => ({
    __proto__: dart.getFields(date_picker._DateRangePickerDialogState.__proto__),
    [___DateRangePickerDialogState__entryMode]: dart.fieldType(dart.nullable(date_picker._RestorableDatePickerEntryMode)),
    [___DateRangePickerDialogState__selectedStart]: dart.fieldType(dart.nullable(restoration_properties.RestorableDateTimeN)),
    [___DateRangePickerDialogState__selectedEnd]: dart.fieldType(dart.nullable(restoration_properties.RestorableDateTimeN)),
    [_autoValidate]: dart.finalFieldType(restoration_properties.RestorableBool),
    [_calendarPickerKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_inputPickerKey]: dart.finalFieldType(framework.GlobalKey$(date_picker._InputDateRangePickerState))
  }));
  var selectedStartDate$ = dart.privateName(date_picker, "_CalendarRangePickerDialog.selectedStartDate");
  var selectedEndDate$ = dart.privateName(date_picker, "_CalendarRangePickerDialog.selectedEndDate");
  var firstDate$1 = dart.privateName(date_picker, "_CalendarRangePickerDialog.firstDate");
  var lastDate$1 = dart.privateName(date_picker, "_CalendarRangePickerDialog.lastDate");
  var currentDate$1 = dart.privateName(date_picker, "_CalendarRangePickerDialog.currentDate");
  var onStartDateChanged$ = dart.privateName(date_picker, "_CalendarRangePickerDialog.onStartDateChanged");
  var onEndDateChanged$ = dart.privateName(date_picker, "_CalendarRangePickerDialog.onEndDateChanged");
  var onConfirm$ = dart.privateName(date_picker, "_CalendarRangePickerDialog.onConfirm");
  var onCancel$ = dart.privateName(date_picker, "_CalendarRangePickerDialog.onCancel");
  var confirmText$1 = dart.privateName(date_picker, "_CalendarRangePickerDialog.confirmText");
  var helpText$2 = dart.privateName(date_picker, "_CalendarRangePickerDialog.helpText");
  var entryModeButton$0 = dart.privateName(date_picker, "_CalendarRangePickerDialog.entryModeButton");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  date_picker._CalendarRangePickerDialog = class _CalendarRangePickerDialog extends framework.StatelessWidget {
    get selectedStartDate() {
      return this[selectedStartDate$];
    }
    set selectedStartDate(value) {
      super.selectedStartDate = value;
    }
    get selectedEndDate() {
      return this[selectedEndDate$];
    }
    set selectedEndDate(value) {
      super.selectedEndDate = value;
    }
    get firstDate() {
      return this[firstDate$1];
    }
    set firstDate(value) {
      super.firstDate = value;
    }
    get lastDate() {
      return this[lastDate$1];
    }
    set lastDate(value) {
      super.lastDate = value;
    }
    get currentDate() {
      return this[currentDate$1];
    }
    set currentDate(value) {
      super.currentDate = value;
    }
    get onStartDateChanged() {
      return this[onStartDateChanged$];
    }
    set onStartDateChanged(value) {
      super.onStartDateChanged = value;
    }
    get onEndDateChanged() {
      return this[onEndDateChanged$];
    }
    set onEndDateChanged(value) {
      super.onEndDateChanged = value;
    }
    get onConfirm() {
      return this[onConfirm$];
    }
    set onConfirm(value) {
      super.onConfirm = value;
    }
    get onCancel() {
      return this[onCancel$];
    }
    set onCancel(value) {
      super.onCancel = value;
    }
    get confirmText() {
      return this[confirmText$1];
    }
    set confirmText(value) {
      super.confirmText = value;
    }
    get helpText() {
      return this[helpText$2];
    }
    set helpText(value) {
      super.helpText = value;
    }
    get entryModeButton() {
      return this[entryModeButton$0];
    }
    set entryModeButton(value) {
      super.entryModeButton = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let selectedStartDate = opts && 'selectedStartDate' in opts ? opts.selectedStartDate : null;
      let selectedEndDate = opts && 'selectedEndDate' in opts ? opts.selectedEndDate : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let onStartDateChanged = opts && 'onStartDateChanged' in opts ? opts.onStartDateChanged : null;
      let onEndDateChanged = opts && 'onEndDateChanged' in opts ? opts.onEndDateChanged : null;
      let onConfirm = opts && 'onConfirm' in opts ? opts.onConfirm : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
      let helpText = opts && 'helpText' in opts ? opts.helpText : null;
      let entryModeButton = opts && 'entryModeButton' in opts ? opts.entryModeButton : null;
      return new date_picker._CalendarRangePickerDialog.new({key: key, selectedStartDate: selectedStartDate, selectedEndDate: selectedEndDate, firstDate: firstDate, lastDate: lastDate, currentDate: currentDate, onStartDateChanged: onStartDateChanged, onEndDateChanged: onEndDateChanged, onConfirm: onConfirm, onCancel: onCancel, confirmText: confirmText, helpText: helpText, entryModeButton: entryModeButton, $creationLocationd_0dea112b090073317d4: C[107] || CT.C107});
    }
    build(context) {
      let t2, t2$;
      let theme = theme$.Theme.of(context);
      let colorScheme = theme.colorScheme;
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let orientation = media_query.MediaQuery.of(context).orientation;
      let textTheme = theme.textTheme;
      let headerForeground = colorScheme.brightness === ui.Brightness.light ? colorScheme.onPrimary : colorScheme.onSurface;
      let headerDisabledForeground = headerForeground.withOpacity(0.38);
      let startDateText = date_picker._formatRangeStartDate(localizations, this.selectedStartDate, this.selectedEndDate);
      let endDateText = date_picker._formatRangeEndDate(localizations, this.selectedStartDate, this.selectedEndDate, new core.DateTime.now());
      let headlineStyle = textTheme.headline5;
      let startDateStyle = (t2 = headlineStyle, t2 == null ? null : t2.apply({color: this.selectedStartDate != null ? headerForeground : headerDisabledForeground}));
      let endDateStyle = (t2$ = headlineStyle, t2$ == null ? null : t2$.apply({color: this.selectedEndDate != null ? headerForeground : headerDisabledForeground}));
      let saveButtonStyle = dart.nullCheck(textTheme.button).apply({color: this.onConfirm != null ? headerForeground : headerDisabledForeground});
      return new safe_area.SafeArea.new({top: false, left: false, right: false, child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: new back_button.CloseButton.new({onPressed: this.onCancel, $creationLocationd_0dea112b090073317d4: C[108] || CT.C108}), actions: (() => {
              let t2 = T.JSArrayOfWidget().of([]);
              if (orientation === media_query.Orientation.landscape && this.entryModeButton != null) t2.push(dart.nullCheck(this.entryModeButton));
              t2.push(new text_button.TextButton.new({onPressed: this.onConfirm, child: new text.Text.new(this.confirmText, {style: saveButtonStyle, $creationLocationd_0dea112b090073317d4: C[109] || CT.C109}), $creationLocationd_0dea112b090073317d4: C[110] || CT.C110}));
              t2.push(C[111] || CT.C111);
              return t2;
            })(), bottom: new preferred_size.PreferredSize.new({preferredSize: C[113] || CT.C113, child: new basic.Row.new({children: (() => {
                  let t3 = T.JSArrayOfWidget().of([new basic.SizedBox.new({width: media_query.MediaQuery.of(context).size.width < 360 ? 42.0 : 72.0, $creationLocationd_0dea112b090073317d4: C[114] || CT.C114}), new basic.Expanded.new({child: new basic.Semantics.new({label: this.helpText + " " + startDateText + " to " + endDateText, excludeSemantics: true, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(this.helpText, {style: dart.nullCheck(textTheme.overline).apply({color: headerForeground}), $creationLocationd_0dea112b090073317d4: C[115] || CT.C115}), C[116] || CT.C116, new basic.Row.new({children: T.JSArrayOfWidget().of([new text.Text.new(startDateText, {style: startDateStyle, maxLines: 1, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[118] || CT.C118}), new text.Text.new(" – ", {style: startDateStyle, $creationLocationd_0dea112b090073317d4: C[119] || CT.C119}), new basic.Flexible.new({child: new text.Text.new(endDateText, {style: endDateStyle, maxLines: 1, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[120] || CT.C120}), $creationLocationd_0dea112b090073317d4: C[121] || CT.C121})]), $creationLocationd_0dea112b090073317d4: C[122] || CT.C122}), C[123] || CT.C123]), $creationLocationd_0dea112b090073317d4: C[125] || CT.C125}), $creationLocationd_0dea112b090073317d4: C[126] || CT.C126}), $creationLocationd_0dea112b090073317d4: C[127] || CT.C127})]);
                  if (orientation === media_query.Orientation.portrait && this.entryModeButton != null) t3.push(new basic.Padding.new({padding: C[9] || CT.C9, child: this.entryModeButton, $creationLocationd_0dea112b090073317d4: C[128] || CT.C128}));
                  return t3;
                })(), $creationLocationd_0dea112b090073317d4: C[129] || CT.C129}), $creationLocationd_0dea112b090073317d4: C[130] || CT.C130}), $creationLocationd_0dea112b090073317d4: C[131] || CT.C131}), body: new date_picker._CalendarDateRangePicker.new({initialStartDate: this.selectedStartDate, initialEndDate: this.selectedEndDate, firstDate: this.firstDate, lastDate: this.lastDate, currentDate: this.currentDate, onStartDateChanged: this.onStartDateChanged, onEndDateChanged: this.onEndDateChanged, $creationLocationd_0dea112b090073317d4: C[132] || CT.C132}), $creationLocationd_0dea112b090073317d4: C[133] || CT.C133}), $creationLocationd_0dea112b090073317d4: C[134] || CT.C134});
    }
  };
  (date_picker._CalendarRangePickerDialog.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let selectedStartDate = opts && 'selectedStartDate' in opts ? opts.selectedStartDate : null;
    let selectedEndDate = opts && 'selectedEndDate' in opts ? opts.selectedEndDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let onStartDateChanged = opts && 'onStartDateChanged' in opts ? opts.onStartDateChanged : null;
    let onEndDateChanged = opts && 'onEndDateChanged' in opts ? opts.onEndDateChanged : null;
    let onConfirm = opts && 'onConfirm' in opts ? opts.onConfirm : null;
    let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
    let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
    let helpText = opts && 'helpText' in opts ? opts.helpText : null;
    let entryModeButton = opts && 'entryModeButton' in opts ? opts.entryModeButton : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[selectedStartDate$] = selectedStartDate;
    this[selectedEndDate$] = selectedEndDate;
    this[firstDate$1] = firstDate;
    this[lastDate$1] = lastDate;
    this[currentDate$1] = currentDate;
    this[onStartDateChanged$] = onStartDateChanged;
    this[onEndDateChanged$] = onEndDateChanged;
    this[onConfirm$] = onConfirm;
    this[onCancel$] = onCancel;
    this[confirmText$1] = confirmText;
    this[helpText$2] = helpText;
    this[entryModeButton$0] = entryModeButton;
    date_picker._CalendarRangePickerDialog.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker._CalendarRangePickerDialog.prototype;
  dart.addTypeTests(date_picker._CalendarRangePickerDialog);
  dart.addTypeCaches(date_picker._CalendarRangePickerDialog);
  dart.setMethodSignature(date_picker._CalendarRangePickerDialog, () => ({
    __proto__: dart.getMethods(date_picker._CalendarRangePickerDialog.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(date_picker._CalendarRangePickerDialog, I[1]);
  dart.setFieldSignature(date_picker._CalendarRangePickerDialog, () => ({
    __proto__: dart.getFields(date_picker._CalendarRangePickerDialog.__proto__),
    selectedStartDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    selectedEndDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    currentDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    onStartDateChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    onEndDateChanged: dart.finalFieldType(dart.fnType(dart.void, [dart.nullable(core.DateTime)])),
    onConfirm: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onCancel: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    confirmText: dart.finalFieldType(core.String),
    helpText: dart.finalFieldType(core.String),
    entryModeButton: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  date_picker._CalendarDateRangePicker = class _CalendarDateRangePicker extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let initialStartDate = opts && 'initialStartDate' in opts ? opts.initialStartDate : null;
      let initialEndDate = opts && 'initialEndDate' in opts ? opts.initialEndDate : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let onStartDateChanged = opts && 'onStartDateChanged' in opts ? opts.onStartDateChanged : null;
      let onEndDateChanged = opts && 'onEndDateChanged' in opts ? opts.onEndDateChanged : null;
      return new date_picker._CalendarDateRangePicker.new({initialStartDate: initialStartDate, initialEndDate: initialEndDate, firstDate: firstDate, lastDate: lastDate, currentDate: currentDate, onStartDateChanged: onStartDateChanged, onEndDateChanged: onEndDateChanged, $creationLocationd_0dea112b090073317d4: C[135] || CT.C135});
    }
    createState() {
      return new date_picker._CalendarDateRangePickerState.new();
    }
  };
  (date_picker._CalendarDateRangePicker.new = function(opts) {
    let t4;
    let initialStartDate = opts && 'initialStartDate' in opts ? opts.initialStartDate : null;
    let initialEndDate = opts && 'initialEndDate' in opts ? opts.initialEndDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let onStartDateChanged = opts && 'onStartDateChanged' in opts ? opts.onStartDateChanged : null;
    let onEndDateChanged = opts && 'onEndDateChanged' in opts ? opts.onEndDateChanged : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.onStartDateChanged = onStartDateChanged;
    this.onEndDateChanged = onEndDateChanged;
    this.initialStartDate = initialStartDate != null ? date$.DateUtils.dateOnly(initialStartDate) : null;
    this.initialEndDate = initialEndDate != null ? date$.DateUtils.dateOnly(initialEndDate) : null;
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 1604, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 1605, 15, "lastDate != null");
    this.firstDate = date$.DateUtils.dateOnly(firstDate);
    this.lastDate = date$.DateUtils.dateOnly(lastDate);
    this.currentDate = date$.DateUtils.dateOnly((t4 = currentDate, t4 == null ? new core.DateTime.now() : t4));
    date_picker._CalendarDateRangePicker.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (!(this.initialStartDate == null || this.initialEndDate == null || !dart.nullCheck(this.initialStartDate).isAfter(dart.nullCheck(initialEndDate)))) dart.assertFailed("initialStartDate must be on or before initialEndDate.", I[0], 1610, 7, "this.initialStartDate == null || this.initialEndDate == null || !this.initialStartDate!.isAfter(initialEndDate!)");
    if (!!this.lastDate.isBefore(this.firstDate)) dart.assertFailed("firstDate must be on or before lastDate.", I[0], 1614, 7, "!this.lastDate.isBefore(this.firstDate)");
  }).prototype = date_picker._CalendarDateRangePicker.prototype;
  dart.addTypeTests(date_picker._CalendarDateRangePicker);
  dart.addTypeCaches(date_picker._CalendarDateRangePicker);
  dart.setMethodSignature(date_picker._CalendarDateRangePicker, () => ({
    __proto__: dart.getMethods(date_picker._CalendarDateRangePicker.__proto__),
    createState: dart.fnType(date_picker._CalendarDateRangePickerState, [])
  }));
  dart.setLibraryUri(date_picker._CalendarDateRangePicker, I[1]);
  dart.setFieldSignature(date_picker._CalendarDateRangePicker, () => ({
    __proto__: dart.getFields(date_picker._CalendarDateRangePicker.__proto__),
    initialStartDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    initialEndDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    currentDate: dart.finalFieldType(core.DateTime),
    onStartDateChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.DateTime]))),
    onEndDateChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dart.nullable(core.DateTime)])))
  }));
  var _scrollViewKey = dart.privateName(date_picker, "_scrollViewKey");
  var _startDate = dart.privateName(date_picker, "_startDate");
  var _endDate = dart.privateName(date_picker, "_endDate");
  var _initialMonthIndex = dart.privateName(date_picker, "_initialMonthIndex");
  var ___CalendarDateRangePickerState__controller = dart.privateName(date_picker, "_#_CalendarDateRangePickerState#_controller");
  var ___CalendarDateRangePickerState__showWeekBottomDivider = dart.privateName(date_picker, "_#_CalendarDateRangePickerState#_showWeekBottomDivider");
  var _controller = dart.privateName(date_picker, "_controller");
  var _showWeekBottomDivider = dart.privateName(date_picker, "_showWeekBottomDivider");
  var _scrollListener = dart.privateName(date_picker, "_scrollListener");
  var _numberOfMonths = dart.privateName(date_picker, "_numberOfMonths");
  var _vibrate = dart.privateName(date_picker, "_vibrate");
  var _updateSelection = dart.privateName(date_picker, "_updateSelection");
  var _buildMonthItem = dart.privateName(date_picker, "_buildMonthItem");
  var ValueKey_value = dart.privateName(key, "ValueKey.value");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  date_picker._CalendarDateRangePickerState = class _CalendarDateRangePickerState extends framework.State$(date_picker._CalendarDateRangePicker) {
    get [_controller]() {
      let t4;
      t4 = this[___CalendarDateRangePickerState__controller];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t4;
    }
    set [_controller](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_controller$35param) {
      this[___CalendarDateRangePickerState__controller] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_controller$35param;
    }
    get [_showWeekBottomDivider]() {
      let t4;
      t4 = this[___CalendarDateRangePickerState__showWeekBottomDivider];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_showWeekBottomDivider")) : t4;
    }
    set [_showWeekBottomDivider](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_showWeekBottomDivider$35param) {
      this[___CalendarDateRangePickerState__showWeekBottomDivider] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_showWeekBottomDivider$35param;
    }
    initState() {
      let t4;
      super.initState();
      this[_controller] = new scroll_controller.ScrollController.new();
      this[_controller].addListener(dart.bind(this, _scrollListener));
      this[_startDate] = this.widget.initialStartDate;
      this[_endDate] = this.widget.initialEndDate;
      let initialDate = (t4 = this.widget.initialStartDate, t4 == null ? this.widget.currentDate : t4);
      if (!initialDate.isBefore(this.widget.firstDate) && !initialDate.isAfter(this.widget.lastDate)) {
        this[_initialMonthIndex] = date$.DateUtils.monthDelta(this.widget.firstDate, initialDate);
      }
      this[_showWeekBottomDivider] = this[_initialMonthIndex] !== 0;
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_scrollListener]() {
      if (this[_controller].offset <= this[_controller].position.minScrollExtent) {
        this.setState(dart.fn(() => {
          this[_showWeekBottomDivider] = false;
        }, T.VoidTovoid()));
      } else if (!this[_showWeekBottomDivider]) {
        this.setState(dart.fn(() => {
          this[_showWeekBottomDivider] = true;
        }, T.VoidTovoid()));
      }
    }
    get [_numberOfMonths]() {
      return date$.DateUtils.monthDelta(this.widget.firstDate, this.widget.lastDate) + 1;
    }
    [_vibrate]() {
      switch (theme$.Theme.of(this.context).platform) {
        case C[136] || CT.C136:
        case C[137] || CT.C137:
          {
            haptic_feedback.HapticFeedback.vibrate();
            break;
          }
        case C[138] || CT.C138:
        case C[139] || CT.C139:
        case C[140] || CT.C140:
        case C[141] || CT.C141:
          {
            break;
          }
      }
    }
    [_updateSelection](date) {
      this[_vibrate]();
      this.setState(dart.fn(() => {
        let t4, t4$, t4$0;
        if (this[_startDate] != null && this[_endDate] == null && !date.isBefore(dart.nullCheck(this[_startDate]))) {
          this[_endDate] = date;
          t4 = this.widget.onEndDateChanged;
          t4 == null ? null : t4(this[_endDate]);
        } else {
          this[_startDate] = date;
          t4$ = this.widget.onStartDateChanged;
          t4$ == null ? null : t4$(dart.nullCheck(this[_startDate]));
          if (this[_endDate] != null) {
            this[_endDate] = null;
            t4$0 = this.widget.onEndDateChanged;
            t4$0 == null ? null : t4$0(this[_endDate]);
          }
        }
      }, T.VoidTovoid()));
    }
    [_buildMonthItem](context, index, beforeInitialMonth) {
      let monthIndex = beforeInitialMonth ? this[_initialMonthIndex] - index - 1 : this[_initialMonthIndex] + index;
      let month = date$.DateUtils.addMonthsToMonthDate(this.widget.firstDate, monthIndex);
      return new date_picker._MonthItem.new({selectedDateStart: this[_startDate], selectedDateEnd: this[_endDate], currentDate: this.widget.currentDate, firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, displayedMonth: month, onChanged: dart.bind(this, _updateSelection), $creationLocationd_0dea112b090073317d4: C[142] || CT.C142});
    }
    build(context) {
      let t5, t5$;
      let sliverAfterKey = C[143] || CT.C143;
      return new basic.Column.new({children: (() => {
          let t4 = T.JSArrayOfWidget().of([C[144] || CT.C144]);
          if (this[_showWeekBottomDivider]) t4.push(C[146] || CT.C146);
          t4.push(new basic.Expanded.new({child: new date_picker._CalendarKeyboardNavigator.new({firstDate: this.widget.firstDate, lastDate: this.widget.lastDate, initialFocusedDay: (t5$ = (t5 = this[_startDate], t5 == null ? this.widget.initialStartDate : t5), t5$ == null ? this.widget.currentDate : t5$), child: new scroll_view.CustomScrollView.new({key: this[_scrollViewKey], controller: this[_controller], center: sliverAfterKey, slivers: T.JSArrayOfWidget().of([new sliver.SliverList.new({delegate: new sliver.SliverChildBuilderDelegate.new(dart.fn((context, index) => this[_buildMonthItem](context, index, true), T.BuildContextAndintToWidget()), {childCount: this[_initialMonthIndex]}), $creationLocationd_0dea112b090073317d4: C[148] || CT.C148}), new sliver.SliverList.new({key: sliverAfterKey, delegate: new sliver.SliverChildBuilderDelegate.new(dart.fn((context, index) => this[_buildMonthItem](context, index, false), T.BuildContextAndintToWidget()), {childCount: this[_numberOfMonths] - this[_initialMonthIndex]}), $creationLocationd_0dea112b090073317d4: C[149] || CT.C149})]), $creationLocationd_0dea112b090073317d4: C[150] || CT.C150}), $creationLocationd_0dea112b090073317d4: C[151] || CT.C151}), $creationLocationd_0dea112b090073317d4: C[152] || CT.C152}));
          return t4;
        })(), $creationLocationd_0dea112b090073317d4: C[153] || CT.C153});
    }
    static ['_#new#tearOff']() {
      return new date_picker._CalendarDateRangePickerState.new();
    }
  };
  (date_picker._CalendarDateRangePickerState.new = function() {
    this[_scrollViewKey] = T.GlobalKeyOfStateOfStatefulWidget().new();
    this[_startDate] = null;
    this[_endDate] = null;
    this[_initialMonthIndex] = 0;
    this[___CalendarDateRangePickerState__controller] = null;
    this[___CalendarDateRangePickerState__showWeekBottomDivider] = null;
    date_picker._CalendarDateRangePickerState.__proto__.new.call(this);
    ;
  }).prototype = date_picker._CalendarDateRangePickerState.prototype;
  dart.addTypeTests(date_picker._CalendarDateRangePickerState);
  dart.addTypeCaches(date_picker._CalendarDateRangePickerState);
  dart.setMethodSignature(date_picker._CalendarDateRangePickerState, () => ({
    __proto__: dart.getMethods(date_picker._CalendarDateRangePickerState.__proto__),
    [_scrollListener]: dart.fnType(dart.void, []),
    [_vibrate]: dart.fnType(dart.void, []),
    [_updateSelection]: dart.fnType(dart.void, [core.DateTime]),
    [_buildMonthItem]: dart.fnType(framework.Widget, [framework.BuildContext, core.int, core.bool]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(date_picker._CalendarDateRangePickerState, () => ({
    __proto__: dart.getGetters(date_picker._CalendarDateRangePickerState.__proto__),
    [_controller]: scroll_controller.ScrollController,
    [_showWeekBottomDivider]: core.bool,
    [_numberOfMonths]: core.int
  }));
  dart.setSetterSignature(date_picker._CalendarDateRangePickerState, () => ({
    __proto__: dart.getSetters(date_picker._CalendarDateRangePickerState.__proto__),
    [_controller]: scroll_controller.ScrollController,
    [_showWeekBottomDivider]: core.bool
  }));
  dart.setLibraryUri(date_picker._CalendarDateRangePickerState, I[1]);
  dart.setFieldSignature(date_picker._CalendarDateRangePickerState, () => ({
    __proto__: dart.getFields(date_picker._CalendarDateRangePickerState.__proto__),
    [_scrollViewKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_startDate]: dart.fieldType(dart.nullable(core.DateTime)),
    [_endDate]: dart.fieldType(dart.nullable(core.DateTime)),
    [_initialMonthIndex]: dart.fieldType(core.int),
    [___CalendarDateRangePickerState__controller]: dart.fieldType(dart.nullable(scroll_controller.ScrollController)),
    [___CalendarDateRangePickerState__showWeekBottomDivider]: dart.fieldType(dart.nullable(core.bool))
  }));
  var child$ = dart.privateName(date_picker, "_CalendarKeyboardNavigator.child");
  var firstDate$2 = dart.privateName(date_picker, "_CalendarKeyboardNavigator.firstDate");
  var lastDate$2 = dart.privateName(date_picker, "_CalendarKeyboardNavigator.lastDate");
  var initialFocusedDay$ = dart.privateName(date_picker, "_CalendarKeyboardNavigator.initialFocusedDay");
  date_picker._CalendarKeyboardNavigator = class _CalendarKeyboardNavigator extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get firstDate() {
      return this[firstDate$2];
    }
    set firstDate(value) {
      super.firstDate = value;
    }
    get lastDate() {
      return this[lastDate$2];
    }
    set lastDate(value) {
      super.lastDate = value;
    }
    get initialFocusedDay() {
      return this[initialFocusedDay$];
    }
    set initialFocusedDay(value) {
      super.initialFocusedDay = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let initialFocusedDay = opts && 'initialFocusedDay' in opts ? opts.initialFocusedDay : null;
      return new date_picker._CalendarKeyboardNavigator.new({child: child, firstDate: firstDate, lastDate: lastDate, initialFocusedDay: initialFocusedDay, $creationLocationd_0dea112b090073317d4: C[154] || CT.C154});
    }
    createState() {
      return new date_picker._CalendarKeyboardNavigatorState.new();
    }
  };
  (date_picker._CalendarKeyboardNavigator.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let initialFocusedDay = opts && 'initialFocusedDay' in opts ? opts.initialFocusedDay : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[firstDate$2] = firstDate;
    this[lastDate$2] = lastDate;
    this[initialFocusedDay$] = initialFocusedDay;
    date_picker._CalendarKeyboardNavigator.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker._CalendarKeyboardNavigator.prototype;
  dart.addTypeTests(date_picker._CalendarKeyboardNavigator);
  dart.addTypeCaches(date_picker._CalendarKeyboardNavigator);
  dart.setMethodSignature(date_picker._CalendarKeyboardNavigator, () => ({
    __proto__: dart.getMethods(date_picker._CalendarKeyboardNavigator.__proto__),
    createState: dart.fnType(date_picker._CalendarKeyboardNavigatorState, [])
  }));
  dart.setLibraryUri(date_picker._CalendarKeyboardNavigator, I[1]);
  dart.setFieldSignature(date_picker._CalendarKeyboardNavigator, () => ({
    __proto__: dart.getFields(date_picker._CalendarKeyboardNavigator.__proto__),
    child: dart.finalFieldType(framework.Widget),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    initialFocusedDay: dart.finalFieldType(core.DateTime)
  }));
  var _shortcutMap = dart.privateName(date_picker, "_shortcutMap");
  var DirectionalFocusIntent_ignoreTextFields = dart.privateName(focus_traversal, "DirectionalFocusIntent.ignoreTextFields");
  var DirectionalFocusIntent_direction = dart.privateName(focus_traversal, "DirectionalFocusIntent.direction");
  var ___CalendarKeyboardNavigatorState__actionMap = dart.privateName(date_picker, "_#_CalendarKeyboardNavigatorState#_actionMap");
  var ___CalendarKeyboardNavigatorState__dayGridFocus = dart.privateName(date_picker, "_#_CalendarKeyboardNavigatorState#_dayGridFocus");
  var _dayTraversalDirection = dart.privateName(date_picker, "_dayTraversalDirection");
  var _focusedDay = dart.privateName(date_picker, "_focusedDay");
  var _actionMap = dart.privateName(date_picker, "_actionMap");
  var _dayGridFocus = dart.privateName(date_picker, "_dayGridFocus");
  var _handleGridNextFocus = dart.privateName(date_picker, "_handleGridNextFocus");
  var _handleGridPreviousFocus = dart.privateName(date_picker, "_handleGridPreviousFocus");
  var _handleDirectionFocus = dart.privateName(date_picker, "_handleDirectionFocus");
  var _handleGridFocusChange = dart.privateName(date_picker, "_handleGridFocusChange");
  var _nextDateInDirection = dart.privateName(date_picker, "_nextDateInDirection");
  var _dayDirectionOffset = dart.privateName(date_picker, "_dayDirectionOffset");
  date_picker._CalendarKeyboardNavigatorState = class _CalendarKeyboardNavigatorState extends framework.State$(date_picker._CalendarKeyboardNavigator) {
    get [_actionMap]() {
      let t5;
      t5 = this[___CalendarKeyboardNavigatorState__actionMap];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_actionMap")) : t5;
    }
    set [_actionMap](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_actionMap$35param) {
      this[___CalendarKeyboardNavigatorState__actionMap] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_actionMap$35param;
    }
    get [_dayGridFocus]() {
      let t5;
      t5 = this[___CalendarKeyboardNavigatorState__dayGridFocus];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_dayGridFocus")) : t5;
    }
    set [_dayGridFocus](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_dayGridFocus$35param) {
      this[___CalendarKeyboardNavigatorState__dayGridFocus] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_dayGridFocus$35param;
    }
    initState() {
      super.initState();
      this[_actionMap] = new (T.LinkedMapOfType$ActionOfIntent()).from([dart.wrapType(focus_traversal.NextFocusIntent), new (T.CallbackActionOfNextFocusIntent()).new({onInvoke: dart.bind(this, _handleGridNextFocus)}), dart.wrapType(focus_traversal.PreviousFocusIntent), new (T.CallbackActionOfPreviousFocusIntent()).new({onInvoke: dart.bind(this, _handleGridPreviousFocus)}), dart.wrapType(focus_traversal.DirectionalFocusIntent), new (T.CallbackActionOfDirectionalFocusIntent()).new({onInvoke: dart.bind(this, _handleDirectionFocus)})]);
      this[_dayGridFocus] = new focus_manager.FocusNode.new({debugLabel: "Day Grid"});
    }
    dispose() {
      this[_dayGridFocus].dispose();
      super.dispose();
    }
    [_handleGridFocusChange](focused) {
      this.setState(dart.fn(() => {
        if (focused) {
          this[_focusedDay] == null ? this[_focusedDay] = this.widget.initialFocusedDay : null;
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
      if (!(this[_focusedDay] != null)) dart.assertFailed(null, I[0], 1870, 12, "_focusedDay != null");
      this.setState(dart.fn(() => {
        let nextDate = this[_nextDateInDirection](dart.nullCheck(this[_focusedDay]), intent.direction);
        if (nextDate != null) {
          this[_focusedDay] = nextDate;
          this[_dayTraversalDirection] = intent.direction;
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
      return dart.nullCheck(date_picker._CalendarKeyboardNavigatorState._directionOffset[$_get](traversalDirection));
    }
    [_nextDateInDirection](date, direction) {
      let textDirection = basic.Directionality.of(this.context);
      let nextDate = date$.DateUtils.addDaysToDate(date, this[_dayDirectionOffset](direction, textDirection));
      if (!nextDate.isBefore(this.widget.firstDate) && !nextDate.isAfter(this.widget.lastDate)) {
        return nextDate;
      }
      return null;
    }
    build(context) {
      return new actions.FocusableActionDetector.new({shortcuts: this[_shortcutMap], actions: this[_actionMap], focusNode: this[_dayGridFocus], onFocusChange: dart.bind(this, _handleGridFocusChange), child: new date_picker._FocusedDate.new({date: this[_dayGridFocus].hasFocus ? this[_focusedDay] : null, scrollDirection: this[_dayGridFocus].hasFocus ? this[_dayTraversalDirection] : null, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[172] || CT.C172}), $creationLocationd_0dea112b090073317d4: C[173] || CT.C173});
    }
    static ['_#new#tearOff']() {
      return new date_picker._CalendarKeyboardNavigatorState.new();
    }
  };
  (date_picker._CalendarKeyboardNavigatorState.new = function() {
    this[_shortcutMap] = C[155] || CT.C155;
    this[___CalendarKeyboardNavigatorState__actionMap] = null;
    this[___CalendarKeyboardNavigatorState__dayGridFocus] = null;
    this[_dayTraversalDirection] = null;
    this[_focusedDay] = null;
    date_picker._CalendarKeyboardNavigatorState.__proto__.new.call(this);
    ;
  }).prototype = date_picker._CalendarKeyboardNavigatorState.prototype;
  dart.addTypeTests(date_picker._CalendarKeyboardNavigatorState);
  dart.addTypeCaches(date_picker._CalendarKeyboardNavigatorState);
  dart.setMethodSignature(date_picker._CalendarKeyboardNavigatorState, () => ({
    __proto__: dart.getMethods(date_picker._CalendarKeyboardNavigatorState.__proto__),
    [_handleGridFocusChange]: dart.fnType(dart.void, [core.bool]),
    [_handleGridNextFocus]: dart.fnType(dart.void, [focus_traversal.NextFocusIntent]),
    [_handleGridPreviousFocus]: dart.fnType(dart.void, [focus_traversal.PreviousFocusIntent]),
    [_handleDirectionFocus]: dart.fnType(dart.void, [focus_traversal.DirectionalFocusIntent]),
    [_dayDirectionOffset]: dart.fnType(core.int, [focus_traversal.TraversalDirection, ui.TextDirection]),
    [_nextDateInDirection]: dart.fnType(dart.nullable(core.DateTime), [core.DateTime, focus_traversal.TraversalDirection]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(date_picker._CalendarKeyboardNavigatorState, () => ({
    __proto__: dart.getGetters(date_picker._CalendarKeyboardNavigatorState.__proto__),
    [_actionMap]: core.Map$(core.Type, actions.Action$(actions.Intent)),
    [_dayGridFocus]: focus_manager.FocusNode
  }));
  dart.setSetterSignature(date_picker._CalendarKeyboardNavigatorState, () => ({
    __proto__: dart.getSetters(date_picker._CalendarKeyboardNavigatorState.__proto__),
    [_actionMap]: core.Map$(core.Type, actions.Action$(actions.Intent)),
    [_dayGridFocus]: focus_manager.FocusNode
  }));
  dart.setLibraryUri(date_picker._CalendarKeyboardNavigatorState, I[1]);
  dart.setFieldSignature(date_picker._CalendarKeyboardNavigatorState, () => ({
    __proto__: dart.getFields(date_picker._CalendarKeyboardNavigatorState.__proto__),
    [_shortcutMap]: dart.finalFieldType(core.Map$(shortcuts.ShortcutActivator, actions.Intent)),
    [___CalendarKeyboardNavigatorState__actionMap]: dart.fieldType(dart.nullable(core.Map$(core.Type, actions.Action$(actions.Intent)))),
    [___CalendarKeyboardNavigatorState__dayGridFocus]: dart.fieldType(dart.nullable(focus_manager.FocusNode)),
    [_dayTraversalDirection]: dart.fieldType(dart.nullable(focus_traversal.TraversalDirection)),
    [_focusedDay]: dart.fieldType(dart.nullable(core.DateTime))
  }));
  dart.setStaticFieldSignature(date_picker._CalendarKeyboardNavigatorState, () => ['_directionOffset']);
  dart.defineLazy(date_picker._CalendarKeyboardNavigatorState, {
    /*date_picker._CalendarKeyboardNavigatorState._directionOffset*/get _directionOffset() {
      return C[174] || CT.C174;
    }
  }, false);
  var date$0 = dart.privateName(date_picker, "_FocusedDate.date");
  var scrollDirection$ = dart.privateName(date_picker, "_FocusedDate.scrollDirection");
  date_picker._FocusedDate = class _FocusedDate extends framework.InheritedWidget {
    get date() {
      return this[date$0];
    }
    set date(value) {
      super.date = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let date = opts && 'date' in opts ? opts.date : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      return new date_picker._FocusedDate.new({child: child, date: date, scrollDirection: scrollDirection, $creationLocationd_0dea112b090073317d4: C[175] || CT.C175});
    }
    updateShouldNotify(oldWidget) {
      date_picker._FocusedDate.as(oldWidget);
      return !date$.DateUtils.isSameDay(this.date, oldWidget.date) || this.scrollDirection != oldWidget.scrollDirection;
    }
    static of(context) {
      return context.dependOnInheritedWidgetOfExactType(date_picker._FocusedDate);
    }
  };
  (date_picker._FocusedDate.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let date = opts && 'date' in opts ? opts.date : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[date$0] = date;
    this[scrollDirection$] = scrollDirection;
    date_picker._FocusedDate.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker._FocusedDate.prototype;
  dart.addTypeTests(date_picker._FocusedDate);
  dart.addTypeCaches(date_picker._FocusedDate);
  dart.setMethodSignature(date_picker._FocusedDate, () => ({
    __proto__: dart.getMethods(date_picker._FocusedDate.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setStaticMethodSignature(date_picker._FocusedDate, () => ['of']);
  dart.setLibraryUri(date_picker._FocusedDate, I[1]);
  dart.setFieldSignature(date_picker._FocusedDate, () => ({
    __proto__: dart.getFields(date_picker._FocusedDate.__proto__),
    date: dart.finalFieldType(dart.nullable(core.DateTime)),
    scrollDirection: dart.finalFieldType(dart.nullable(focus_traversal.TraversalDirection))
  }));
  var _getDayHeaders = dart.privateName(date_picker, "_getDayHeaders");
  date_picker._DayHeaders = class _DayHeaders extends framework.StatelessWidget {
    static ['_#new#tearOff']() {
      return new date_picker._DayHeaders.new({$creationLocationd_0dea112b090073317d4: C[176] || CT.C176});
    }
    [_getDayHeaders](headerStyle, localizations) {
      let result = T.JSArrayOfWidget().of([]);
      for (let i = localizations.firstDayOfWeekIndex; true; i = (i + 1)[$modulo](7)) {
        let weekday = localizations.narrowWeekdays[$_get](i);
        result[$add](new basic.ExcludeSemantics.new({child: new basic.Center.new({child: new text.Text.new(weekday, {style: headerStyle, $creationLocationd_0dea112b090073317d4: C[177] || CT.C177}), $creationLocationd_0dea112b090073317d4: C[178] || CT.C178}), $creationLocationd_0dea112b090073317d4: C[179] || CT.C179}));
        if (i === (localizations.firstDayOfWeekIndex - 1)[$modulo](7)) {
          break;
        }
      }
      return result;
    }
    build(context) {
      let themeData = theme$.Theme.of(context);
      let colorScheme = themeData.colorScheme;
      let textStyle = dart.nullCheck(themeData.textTheme.subtitle2).apply({color: colorScheme.onSurface});
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let labels = this[_getDayHeaders](textStyle, localizations);
      labels[$insert](0, new container.Container.new({$creationLocationd_0dea112b090073317d4: C[180] || CT.C180}));
      labels[$add](new container.Container.new({$creationLocationd_0dea112b090073317d4: C[181] || CT.C181}));
      return new container.Container.new({constraints: new box.BoxConstraints.new({maxWidth: media_query.MediaQuery.of(context).orientation === media_query.Orientation.landscape ? 384 : 480, maxHeight: 42}), child: new scroll_view.GridView.custom({shrinkWrap: true, gridDelegate: date_picker._monthItemGridDelegate, childrenDelegate: new sliver.SliverChildListDelegate.new(labels, {addRepaintBoundaries: false}), $creationLocationd_0dea112b090073317d4: C[182] || CT.C182}), $creationLocationd_0dea112b090073317d4: C[183] || CT.C183});
    }
  };
  (date_picker._DayHeaders.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    date_picker._DayHeaders.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker._DayHeaders.prototype;
  dart.addTypeTests(date_picker._DayHeaders);
  dart.addTypeCaches(date_picker._DayHeaders);
  dart.setMethodSignature(date_picker._DayHeaders, () => ({
    __proto__: dart.getMethods(date_picker._DayHeaders.__proto__),
    [_getDayHeaders]: dart.fnType(core.List$(framework.Widget), [text_style.TextStyle, material_localizations.MaterialLocalizations]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(date_picker._DayHeaders, I[1]);
  date_picker._MonthItemGridDelegate = class _MonthItemGridDelegate extends sliver_grid.SliverGridDelegate {
    static ['_#new#tearOff']() {
      return new date_picker._MonthItemGridDelegate.new();
    }
    getLayout(constraints) {
      let tileWidth = (constraints.crossAxisExtent - 2 * 8) / 7;
      return new date_picker._MonthSliverGridLayout.new({crossAxisCount: 7 + 2, dayChildWidth: tileWidth, edgeChildWidth: 8, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      date_picker._MonthItemGridDelegate.as(oldDelegate);
      return false;
    }
  };
  (date_picker._MonthItemGridDelegate.new = function() {
    date_picker._MonthItemGridDelegate.__proto__.new.call(this);
    ;
  }).prototype = date_picker._MonthItemGridDelegate.prototype;
  dart.addTypeTests(date_picker._MonthItemGridDelegate);
  dart.addTypeCaches(date_picker._MonthItemGridDelegate);
  dart.setMethodSignature(date_picker._MonthItemGridDelegate, () => ({
    __proto__: dart.getMethods(date_picker._MonthItemGridDelegate.__proto__),
    getLayout: dart.fnType(sliver_grid.SliverGridLayout, [sliver$.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(date_picker._MonthItemGridDelegate, I[1]);
  var crossAxisCount$ = dart.privateName(date_picker, "_MonthSliverGridLayout.crossAxisCount");
  var dayChildWidth$ = dart.privateName(date_picker, "_MonthSliverGridLayout.dayChildWidth");
  var edgeChildWidth$ = dart.privateName(date_picker, "_MonthSliverGridLayout.edgeChildWidth");
  var reverseCrossAxis$ = dart.privateName(date_picker, "_MonthSliverGridLayout.reverseCrossAxis");
  var _rowHeight = dart.privateName(date_picker, "_rowHeight");
  var _childHeight = dart.privateName(date_picker, "_childHeight");
  var _getCrossAxisOffset = dart.privateName(date_picker, "_getCrossAxisOffset");
  date_picker._MonthSliverGridLayout = class _MonthSliverGridLayout extends sliver_grid.SliverGridLayout {
    get crossAxisCount() {
      return this[crossAxisCount$];
    }
    set crossAxisCount(value) {
      super.crossAxisCount = value;
    }
    get dayChildWidth() {
      return this[dayChildWidth$];
    }
    set dayChildWidth(value) {
      super.dayChildWidth = value;
    }
    get edgeChildWidth() {
      return this[edgeChildWidth$];
    }
    set edgeChildWidth(value) {
      super.edgeChildWidth = value;
    }
    get reverseCrossAxis() {
      return this[reverseCrossAxis$];
    }
    set reverseCrossAxis(value) {
      super.reverseCrossAxis = value;
    }
    static ['_#new#tearOff'](opts) {
      let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
      let dayChildWidth = opts && 'dayChildWidth' in opts ? opts.dayChildWidth : null;
      let edgeChildWidth = opts && 'edgeChildWidth' in opts ? opts.edgeChildWidth : null;
      let reverseCrossAxis = opts && 'reverseCrossAxis' in opts ? opts.reverseCrossAxis : null;
      return new date_picker._MonthSliverGridLayout.new({crossAxisCount: crossAxisCount, dayChildWidth: dayChildWidth, edgeChildWidth: edgeChildWidth, reverseCrossAxis: reverseCrossAxis});
    }
    get [_rowHeight]() {
      return 42 + 8;
    }
    get [_childHeight]() {
      return 42;
    }
    getMinChildIndexForScrollOffset(scrollOffset) {
      return this.crossAxisCount * (scrollOffset / this[_rowHeight])[$truncate]();
    }
    getMaxChildIndexForScrollOffset(scrollOffset) {
      let mainAxisCount = (scrollOffset / this[_rowHeight])[$ceil]();
      return math.max(core.int, 0, this.crossAxisCount * mainAxisCount - 1);
    }
    [_getCrossAxisOffset](crossAxisStart, isPadding) {
      if (this.reverseCrossAxis) {
        return (this.crossAxisCount - 2) * this.dayChildWidth + 2 * this.edgeChildWidth - crossAxisStart - (isPadding ? this.edgeChildWidth : this.dayChildWidth);
      }
      return crossAxisStart;
    }
    getGeometryForChildIndex(index) {
      let adjustedIndex = index[$modulo](this.crossAxisCount);
      let isEdge = adjustedIndex === 0 || adjustedIndex === this.crossAxisCount - 1;
      let crossAxisStart = math.max(core.double, 0.0, (adjustedIndex - 1) * this.dayChildWidth + this.edgeChildWidth);
      return new sliver_grid.SliverGridGeometry.new({scrollOffset: (index / this.crossAxisCount)[$truncate]() * this[_rowHeight], crossAxisOffset: this[_getCrossAxisOffset](crossAxisStart, isEdge), mainAxisExtent: this[_childHeight], crossAxisExtent: isEdge ? this.edgeChildWidth : this.dayChildWidth});
    }
    computeMaxScrollOffset(childCount) {
      if (!(childCount >= 0)) dart.assertFailed(null, I[0], 2120, 12, "childCount >= 0");
      let mainAxisCount = ((childCount - 1) / this.crossAxisCount)[$truncate]() + 1;
      let mainAxisSpacing = this[_rowHeight] - this[_childHeight];
      return this[_rowHeight] * mainAxisCount - mainAxisSpacing;
    }
  };
  (date_picker._MonthSliverGridLayout.new = function(opts) {
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let dayChildWidth = opts && 'dayChildWidth' in opts ? opts.dayChildWidth : null;
    let edgeChildWidth = opts && 'edgeChildWidth' in opts ? opts.edgeChildWidth : null;
    let reverseCrossAxis = opts && 'reverseCrossAxis' in opts ? opts.reverseCrossAxis : null;
    this[crossAxisCount$] = crossAxisCount;
    this[dayChildWidth$] = dayChildWidth;
    this[edgeChildWidth$] = edgeChildWidth;
    this[reverseCrossAxis$] = reverseCrossAxis;
    if (!(crossAxisCount !== null && crossAxisCount > 0)) dart.assertFailed(null, I[0], 2047, 15, "crossAxisCount != null && crossAxisCount > 0");
    if (!(dayChildWidth !== null && dayChildWidth >= 0)) dart.assertFailed(null, I[0], 2048, 15, "dayChildWidth != null && dayChildWidth >= 0");
    if (!(edgeChildWidth !== null && edgeChildWidth >= 0)) dart.assertFailed(null, I[0], 2049, 15, "edgeChildWidth != null && edgeChildWidth >= 0");
    if (!(reverseCrossAxis !== null)) dart.assertFailed(null, I[0], 2050, 15, "reverseCrossAxis != null");
    date_picker._MonthSliverGridLayout.__proto__.new.call(this);
    ;
  }).prototype = date_picker._MonthSliverGridLayout.prototype;
  dart.addTypeTests(date_picker._MonthSliverGridLayout);
  dart.addTypeCaches(date_picker._MonthSliverGridLayout);
  dart.setMethodSignature(date_picker._MonthSliverGridLayout, () => ({
    __proto__: dart.getMethods(date_picker._MonthSliverGridLayout.__proto__),
    getMinChildIndexForScrollOffset: dart.fnType(core.int, [core.double]),
    getMaxChildIndexForScrollOffset: dart.fnType(core.int, [core.double]),
    [_getCrossAxisOffset]: dart.fnType(core.double, [core.double, core.bool]),
    getGeometryForChildIndex: dart.fnType(sliver_grid.SliverGridGeometry, [core.int]),
    computeMaxScrollOffset: dart.fnType(core.double, [core.int])
  }));
  dart.setGetterSignature(date_picker._MonthSliverGridLayout, () => ({
    __proto__: dart.getGetters(date_picker._MonthSliverGridLayout.__proto__),
    [_rowHeight]: core.double,
    [_childHeight]: core.double
  }));
  dart.setLibraryUri(date_picker._MonthSliverGridLayout, I[1]);
  dart.setFieldSignature(date_picker._MonthSliverGridLayout, () => ({
    __proto__: dart.getFields(date_picker._MonthSliverGridLayout.__proto__),
    crossAxisCount: dart.finalFieldType(core.int),
    dayChildWidth: dart.finalFieldType(core.double),
    edgeChildWidth: dart.finalFieldType(core.double),
    reverseCrossAxis: dart.finalFieldType(core.bool)
  }));
  date_picker._MonthItem = class _MonthItem extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let selectedDateStart = opts && 'selectedDateStart' in opts ? opts.selectedDateStart : null;
      let selectedDateEnd = opts && 'selectedDateEnd' in opts ? opts.selectedDateEnd : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let displayedMonth = opts && 'displayedMonth' in opts ? opts.displayedMonth : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[184] || CT.C184;
      return new date_picker._MonthItem.new({selectedDateStart: selectedDateStart, selectedDateEnd: selectedDateEnd, currentDate: currentDate, onChanged: onChanged, firstDate: firstDate, lastDate: lastDate, displayedMonth: displayedMonth, dragStartBehavior: dragStartBehavior, $creationLocationd_0dea112b090073317d4: C[185] || CT.C185});
    }
    createState() {
      return new date_picker._MonthItemState.new();
    }
  };
  (date_picker._MonthItem.new = function(opts) {
    let selectedDateStart = opts && 'selectedDateStart' in opts ? opts.selectedDateStart : null;
    let selectedDateEnd = opts && 'selectedDateEnd' in opts ? opts.selectedDateEnd : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let displayedMonth = opts && 'displayedMonth' in opts ? opts.displayedMonth : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[184] || CT.C184;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.selectedDateStart = selectedDateStart;
    this.selectedDateEnd = selectedDateEnd;
    this.currentDate = currentDate;
    this.onChanged = onChanged;
    this.firstDate = firstDate;
    this.lastDate = lastDate;
    this.displayedMonth = displayedMonth;
    this.dragStartBehavior = dragStartBehavior;
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 2142, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 2143, 15, "lastDate != null");
    if (!!firstDate.isAfter(lastDate)) dart.assertFailed(null, I[0], 2144, 15, "!firstDate.isAfter(lastDate)");
    if (!(selectedDateStart == null || !selectedDateStart.isBefore(firstDate))) dart.assertFailed(null, I[0], 2145, 15, "selectedDateStart == null || !selectedDateStart.isBefore(firstDate)");
    if (!(selectedDateEnd == null || !selectedDateEnd.isBefore(firstDate))) dart.assertFailed(null, I[0], 2146, 15, "selectedDateEnd == null || !selectedDateEnd.isBefore(firstDate)");
    if (!(selectedDateStart == null || !selectedDateStart.isAfter(lastDate))) dart.assertFailed(null, I[0], 2147, 15, "selectedDateStart == null || !selectedDateStart.isAfter(lastDate)");
    if (!(selectedDateEnd == null || !selectedDateEnd.isAfter(lastDate))) dart.assertFailed(null, I[0], 2148, 15, "selectedDateEnd == null || !selectedDateEnd.isAfter(lastDate)");
    if (!(selectedDateStart == null || selectedDateEnd == null || !selectedDateStart.isAfter(selectedDateEnd))) dart.assertFailed(null, I[0], 2149, 15, "selectedDateStart == null || selectedDateEnd == null || !selectedDateStart.isAfter(selectedDateEnd)");
    if (!(currentDate !== null)) dart.assertFailed(null, I[0], 2150, 15, "currentDate != null");
    if (!(onChanged !== null)) dart.assertFailed(null, I[0], 2151, 15, "onChanged != null");
    if (!(displayedMonth !== null)) dart.assertFailed(null, I[0], 2152, 15, "displayedMonth != null");
    if (!(dragStartBehavior !== null)) dart.assertFailed(null, I[0], 2153, 15, "dragStartBehavior != null");
    date_picker._MonthItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker._MonthItem.prototype;
  dart.addTypeTests(date_picker._MonthItem);
  dart.addTypeCaches(date_picker._MonthItem);
  dart.setMethodSignature(date_picker._MonthItem, () => ({
    __proto__: dart.getMethods(date_picker._MonthItem.__proto__),
    createState: dart.fnType(date_picker._MonthItemState, [])
  }));
  dart.setLibraryUri(date_picker._MonthItem, I[1]);
  dart.setFieldSignature(date_picker._MonthItem, () => ({
    __proto__: dart.getFields(date_picker._MonthItem.__proto__),
    selectedDateStart: dart.finalFieldType(dart.nullable(core.DateTime)),
    selectedDateEnd: dart.finalFieldType(dart.nullable(core.DateTime)),
    currentDate: dart.finalFieldType(core.DateTime),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    displayedMonth: dart.finalFieldType(core.DateTime),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior)
  }));
  var ___MonthItemState__dayFocusNodes = dart.privateName(date_picker, "_#_MonthItemState#_dayFocusNodes");
  var _dayFocusNodes = dart.privateName(date_picker, "_dayFocusNodes");
  var _highlightColor = dart.privateName(date_picker, "_highlightColor");
  var _dayFocusChanged = dart.privateName(date_picker, "_dayFocusChanged");
  var _buildDayItem = dart.privateName(date_picker, "_buildDayItem");
  var _buildEdgeContainer = dart.privateName(date_picker, "_buildEdgeContainer");
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  date_picker._MonthItemState = class _MonthItemState extends framework.State$(date_picker._MonthItem) {
    get [_dayFocusNodes]() {
      let t5;
      t5 = this[___MonthItemState__dayFocusNodes];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_dayFocusNodes")) : t5;
    }
    set [_dayFocusNodes](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_dayFocusNodes$35param) {
      this[___MonthItemState__dayFocusNodes] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_dayFocusNodes$35param;
    }
    initState() {
      super.initState();
      let daysInMonth = date$.DateUtils.getDaysInMonth(this.widget.displayedMonth.year, this.widget.displayedMonth.month);
      this[_dayFocusNodes] = T.ListOfFocusNode().generate(daysInMonth, dart.fn(index => new focus_manager.FocusNode.new({skipTraversal: true, debugLabel: "Day " + dart.str(index + 1)}), T.intToFocusNode()));
    }
    didChangeDependencies() {
      let t5;
      super.didChangeDependencies();
      let focusedDate = (t5 = date_picker._FocusedDate.of(this.context), t5 == null ? null : t5.date);
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
    [_highlightColor](context) {
      return theme$.Theme.of(context).colorScheme.primary.withOpacity(0.12);
    }
    [_dayFocusChanged](focused) {
      let t5;
      if (focused) {
        let focusDirection = (t5 = date_picker._FocusedDate.of(this.context), t5 == null ? null : t5.scrollDirection);
        if (focusDirection != null) {
          let policy = scroll_position.ScrollPositionAlignmentPolicy.explicit;
          switch (focusDirection) {
            case C[171] || CT.C171:
            case C[159] || CT.C159:
              {
                policy = scroll_position.ScrollPositionAlignmentPolicy.keepVisibleAtStart;
                break;
              }
            case C[163] || CT.C163:
            case C[167] || CT.C167:
              {
                policy = scroll_position.ScrollPositionAlignmentPolicy.keepVisibleAtEnd;
                break;
              }
          }
          scrollable.Scrollable.ensureVisible(dart.nullCheck(dart.nullCheck(focus_manager.primaryFocus).context), {duration: date_picker._monthScrollDuration, alignmentPolicy: policy});
        }
      }
    }
    [_buildDayItem](context, dayToBuild, firstDayOffset, daysInMonth) {
      let t5, t5$, t5$0;
      let theme = theme$.Theme.of(context);
      let colorScheme = theme.colorScheme;
      let textTheme = theme.textTheme;
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let textDirection = basic.Directionality.of(context);
      let highlightColor = this[_highlightColor](context);
      let day = dayToBuild.day;
      let isDisabled = dayToBuild.isAfter(this.widget.lastDate) || dayToBuild.isBefore(this.widget.firstDate);
      let decoration = null;
      let itemStyle = textTheme.bodyText2;
      let isRangeSelected = this.widget.selectedDateStart != null && this.widget.selectedDateEnd != null;
      let isSelectedDayStart = this.widget.selectedDateStart != null && dayToBuild.isAtSameMomentAs(dart.nullCheck(this.widget.selectedDateStart));
      let isSelectedDayEnd = this.widget.selectedDateEnd != null && dayToBuild.isAtSameMomentAs(dart.nullCheck(this.widget.selectedDateEnd));
      let isInRange = isRangeSelected && dayToBuild.isAfter(dart.nullCheck(this.widget.selectedDateStart)) && dayToBuild.isBefore(dart.nullCheck(this.widget.selectedDateEnd));
      let highlightPainter = null;
      if (isSelectedDayStart || isSelectedDayEnd) {
        itemStyle = (t5 = textTheme.bodyText2, t5 == null ? null : t5.apply({color: colorScheme.onPrimary}));
        decoration = new box_decoration.BoxDecoration.new({color: colorScheme.primary, shape: box_border.BoxShape.circle});
        if (isRangeSelected && !dart.equals(this.widget.selectedDateStart, this.widget.selectedDateEnd)) {
          let style = isSelectedDayStart ? date_picker._HighlightPainterStyle.highlightTrailing : date_picker._HighlightPainterStyle.highlightLeading;
          highlightPainter = new date_picker._HighlightPainter.new({color: highlightColor, style: style, textDirection: textDirection});
        }
      } else if (isInRange) {
        highlightPainter = new date_picker._HighlightPainter.new({color: highlightColor, style: date_picker._HighlightPainterStyle.highlightAll, textDirection: textDirection});
      } else if (isDisabled) {
        itemStyle = (t5$ = textTheme.bodyText2, t5$ == null ? null : t5$.apply({color: colorScheme.onSurface.withOpacity(0.38)}));
      } else if (date$.DateUtils.isSameDay(this.widget.currentDate, dayToBuild)) {
        itemStyle = (t5$0 = textTheme.bodyText2, t5$0 == null ? null : t5$0.apply({color: colorScheme.primary}));
        decoration = new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: colorScheme.primary}), shape: box_border.BoxShape.circle});
      }
      let semanticLabel = localizations.formatDecimal(day) + ", " + localizations.formatFullDate(dayToBuild);
      if (isSelectedDayStart) {
        semanticLabel = localizations.dateRangeStartDateSemanticLabel(semanticLabel);
      } else if (isSelectedDayEnd) {
        semanticLabel = localizations.dateRangeEndDateSemanticLabel(semanticLabel);
      }
      let dayWidget = new container.Container.new({decoration: decoration, child: new basic.Center.new({child: new basic.Semantics.new({label: semanticLabel, selected: isSelectedDayStart || isSelectedDayEnd, child: new basic.ExcludeSemantics.new({child: new text.Text.new(localizations.formatDecimal(day), {style: itemStyle, $creationLocationd_0dea112b090073317d4: C[186] || CT.C186}), $creationLocationd_0dea112b090073317d4: C[187] || CT.C187}), $creationLocationd_0dea112b090073317d4: C[188] || CT.C188}), $creationLocationd_0dea112b090073317d4: C[189] || CT.C189}), $creationLocationd_0dea112b090073317d4: C[190] || CT.C190});
      if (highlightPainter != null) {
        dayWidget = new basic.CustomPaint.new({painter: highlightPainter, child: dayWidget, $creationLocationd_0dea112b090073317d4: C[191] || CT.C191});
      }
      if (!isDisabled) {
        dayWidget = new ink_well.InkResponse.new({focusNode: this[_dayFocusNodes][$_get](day - 1), onTap: dart.fn(() => {
            let t6, t5;
            t5 = this.widget;
            t6 = dayToBuild;
            return t5.onChanged(t6);
          }, T.VoidTovoid()), radius: 42 / 2 + 4, splashColor: colorScheme.primary.withOpacity(0.38), onFocusChange: dart.bind(this, _dayFocusChanged), child: dayWidget, $creationLocationd_0dea112b090073317d4: C[192] || CT.C192});
      }
      return dayWidget;
    }
    [_buildEdgeContainer](context, isHighlighted) {
      return new container.Container.new({color: isHighlighted ? this[_highlightColor](context) : null, $creationLocationd_0dea112b090073317d4: C[193] || CT.C193});
    }
    build(context) {
      let themeData = theme$.Theme.of(context);
      let textTheme = themeData.textTheme;
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let year = this.widget.displayedMonth.year;
      let month = this.widget.displayedMonth.month;
      let daysInMonth = date$.DateUtils.getDaysInMonth(year, month);
      let dayOffset = date$.DateUtils.firstDayOffset(year, month, localizations);
      let weeks = ((daysInMonth + dayOffset) / 7)[$ceil]();
      let gridHeight = weeks * 42 + (weeks - 1) * 8;
      let dayItems = T.JSArrayOfWidget().of([]);
      for (let i = 0; true; i = i + 1) {
        let day = i - dayOffset + 1;
        if (day > daysInMonth) {
          break;
        }
        if (day < 1) {
          dayItems[$add](new container.Container.new({$creationLocationd_0dea112b090073317d4: C[194] || CT.C194}));
        } else {
          let dayToBuild = new core.DateTime.new(year, month, day);
          let dayItem = this[_buildDayItem](context, dayToBuild, dayOffset, daysInMonth);
          dayItems[$add](dayItem);
        }
      }
      let paddedDayItems = T.JSArrayOfWidget().of([]);
      for (let i = 0; i < weeks; i = i + 1) {
        let start = i * 7;
        let end = math.min(core.int, start + 7, dayItems[$length]);
        let weekList = dayItems[$sublist](start, end);
        let dateAfterLeadingPadding = new core.DateTime.new(year, month, start - dayOffset + 1);
        let isLeadingInRange = !(dayOffset > 0 && i === 0) && this.widget.selectedDateStart != null && this.widget.selectedDateEnd != null && dateAfterLeadingPadding.isAfter(dart.nullCheck(this.widget.selectedDateStart)) && !dateAfterLeadingPadding.isAfter(dart.nullCheck(this.widget.selectedDateEnd));
        weekList[$insert](0, this[_buildEdgeContainer](context, isLeadingInRange));
        if (end < dayItems[$length] || end === dayItems[$length] && dayItems[$length][$modulo](7) === 0) {
          let dateBeforeTrailingPadding = new core.DateTime.new(year, month, end - dayOffset);
          let isTrailingInRange = this.widget.selectedDateStart != null && this.widget.selectedDateEnd != null && !dateBeforeTrailingPadding.isBefore(dart.nullCheck(this.widget.selectedDateStart)) && dateBeforeTrailingPadding.isBefore(dart.nullCheck(this.widget.selectedDateEnd));
          weekList[$add](this[_buildEdgeContainer](context, isTrailingInRange));
        }
        paddedDayItems[$addAll](weekList);
      }
      let maxWidth = media_query.MediaQuery.of(context).orientation === media_query.Orientation.landscape ? 384 : 480;
      return new basic.Column.new({children: T.JSArrayOfWidget().of([new container.Container.new({constraints: new box.BoxConstraints.new({maxWidth: maxWidth}), height: 58, padding: C[70] || CT.C70, alignment: alignment.AlignmentDirectional.centerStart, child: new basic.ExcludeSemantics.new({child: new text.Text.new(localizations.formatMonthYear(this.widget.displayedMonth), {style: dart.nullCheck(textTheme.bodyText2).apply({color: themeData.colorScheme.onSurface}), $creationLocationd_0dea112b090073317d4: C[195] || CT.C195}), $creationLocationd_0dea112b090073317d4: C[196] || CT.C196}), $creationLocationd_0dea112b090073317d4: C[197] || CT.C197}), new container.Container.new({constraints: new box.BoxConstraints.new({maxWidth: maxWidth, maxHeight: gridHeight}), child: new scroll_view.GridView.custom({physics: C[198] || CT.C198, gridDelegate: date_picker._monthItemGridDelegate, childrenDelegate: new sliver.SliverChildListDelegate.new(paddedDayItems, {addRepaintBoundaries: false}), $creationLocationd_0dea112b090073317d4: C[199] || CT.C199}), $creationLocationd_0dea112b090073317d4: C[200] || CT.C200}), C[201] || CT.C201]), $creationLocationd_0dea112b090073317d4: C[203] || CT.C203});
    }
    static ['_#new#tearOff']() {
      return new date_picker._MonthItemState.new();
    }
  };
  (date_picker._MonthItemState.new = function() {
    this[___MonthItemState__dayFocusNodes] = null;
    date_picker._MonthItemState.__proto__.new.call(this);
    ;
  }).prototype = date_picker._MonthItemState.prototype;
  dart.addTypeTests(date_picker._MonthItemState);
  dart.addTypeCaches(date_picker._MonthItemState);
  dart.setMethodSignature(date_picker._MonthItemState, () => ({
    __proto__: dart.getMethods(date_picker._MonthItemState.__proto__),
    [_highlightColor]: dart.fnType(ui.Color, [framework.BuildContext]),
    [_dayFocusChanged]: dart.fnType(dart.void, [core.bool]),
    [_buildDayItem]: dart.fnType(framework.Widget, [framework.BuildContext, core.DateTime, core.int, core.int]),
    [_buildEdgeContainer]: dart.fnType(framework.Widget, [framework.BuildContext, core.bool]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(date_picker._MonthItemState, () => ({
    __proto__: dart.getGetters(date_picker._MonthItemState.__proto__),
    [_dayFocusNodes]: core.List$(focus_manager.FocusNode)
  }));
  dart.setSetterSignature(date_picker._MonthItemState, () => ({
    __proto__: dart.getSetters(date_picker._MonthItemState.__proto__),
    [_dayFocusNodes]: core.List$(focus_manager.FocusNode)
  }));
  dart.setLibraryUri(date_picker._MonthItemState, I[1]);
  dart.setFieldSignature(date_picker._MonthItemState, () => ({
    __proto__: dart.getFields(date_picker._MonthItemState.__proto__),
    [___MonthItemState__dayFocusNodes]: dart.fieldType(dart.nullable(core.List$(focus_manager.FocusNode)))
  }));
  var _name = dart.privateName(core, "_name");
  date_picker._HighlightPainterStyle = class _HighlightPainterStyle extends core._Enum {
    toString() {
      return "_HighlightPainterStyle." + this[_name];
    }
  };
  (date_picker._HighlightPainterStyle.new = function(index, name) {
    date_picker._HighlightPainterStyle.__proto__.new.call(this, index, name);
    ;
  }).prototype = date_picker._HighlightPainterStyle.prototype;
  dart.addTypeTests(date_picker._HighlightPainterStyle);
  dart.addTypeCaches(date_picker._HighlightPainterStyle);
  dart.setLibraryUri(date_picker._HighlightPainterStyle, I[1]);
  dart.setStaticFieldSignature(date_picker._HighlightPainterStyle, () => ['values', 'none', 'highlightLeading', 'highlightTrailing', 'highlightAll']);
  dart.defineExtensionMethods(date_picker._HighlightPainterStyle, ['toString']);
  dart.defineLazy(date_picker._HighlightPainterStyle, {
    /*date_picker._HighlightPainterStyle.values*/get values() {
      return C[204] || CT.C204;
    },
    /*date_picker._HighlightPainterStyle.none*/get none() {
      return C[205] || CT.C205;
    },
    /*date_picker._HighlightPainterStyle.highlightLeading*/get highlightLeading() {
      return C[206] || CT.C206;
    },
    /*date_picker._HighlightPainterStyle.highlightTrailing*/get highlightTrailing() {
      return C[207] || CT.C207;
    },
    /*date_picker._HighlightPainterStyle.highlightAll*/get highlightAll() {
      return C[208] || CT.C208;
    }
  }, false);
  date_picker._HighlightPainter = class _HighlightPainter extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let style = opts && 'style' in opts ? opts.style : C[205] || CT.C205;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new date_picker._HighlightPainter.new({color: color, style: style, textDirection: textDirection});
    }
    paint(canvas, size) {
      let t7;
      if (this.style === date_picker._HighlightPainterStyle.none) {
        return;
      }
      let paint = (t7 = ui.Paint.new(), (() => {
        t7.color = this.color;
        t7.style = ui.PaintingStyle.fill;
        return t7;
      })());
      let rectLeft = new ui.Rect.fromLTWH(0.0, 0.0, size.width / 2, size.height);
      let rectRight = new ui.Rect.fromLTWH(size.width / 2, 0.0, size.width / 2, size.height);
      switch (this.style) {
        case C[207] || CT.C207:
          {
            canvas.drawRect(this.textDirection === ui.TextDirection.ltr ? rectRight : rectLeft, paint);
            break;
          }
        case C[206] || CT.C206:
          {
            canvas.drawRect(this.textDirection === ui.TextDirection.ltr ? rectLeft : rectRight, paint);
            break;
          }
        case C[208] || CT.C208:
          {
            canvas.drawRect(new ui.Rect.fromLTWH(0.0, 0.0, size.width, size.height), paint);
            break;
          }
        case C[205] || CT.C205:
          {
            break;
          }
      }
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return false;
    }
  };
  (date_picker._HighlightPainter.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let style = opts && 'style' in opts ? opts.style : C[205] || CT.C205;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this.color = color;
    this.style = style;
    this.textDirection = textDirection;
    date_picker._HighlightPainter.__proto__.new.call(this);
    ;
  }).prototype = date_picker._HighlightPainter.prototype;
  dart.addTypeTests(date_picker._HighlightPainter);
  dart.addTypeCaches(date_picker._HighlightPainter);
  dart.setMethodSignature(date_picker._HighlightPainter, () => ({
    __proto__: dart.getMethods(date_picker._HighlightPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(date_picker._HighlightPainter, I[1]);
  dart.setFieldSignature(date_picker._HighlightPainter, () => ({
    __proto__: dart.getFields(date_picker._HighlightPainter.__proto__),
    color: dart.finalFieldType(ui.Color),
    style: dart.finalFieldType(date_picker._HighlightPainterStyle),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection))
  }));
  var selectedStartDate$0 = dart.privateName(date_picker, "_InputDateRangePickerDialog.selectedStartDate");
  var selectedEndDate$0 = dart.privateName(date_picker, "_InputDateRangePickerDialog.selectedEndDate");
  var currentDate$2 = dart.privateName(date_picker, "_InputDateRangePickerDialog.currentDate");
  var picker$ = dart.privateName(date_picker, "_InputDateRangePickerDialog.picker");
  var onConfirm$0 = dart.privateName(date_picker, "_InputDateRangePickerDialog.onConfirm");
  var onCancel$0 = dart.privateName(date_picker, "_InputDateRangePickerDialog.onCancel");
  var confirmText$2 = dart.privateName(date_picker, "_InputDateRangePickerDialog.confirmText");
  var cancelText$1 = dart.privateName(date_picker, "_InputDateRangePickerDialog.cancelText");
  var helpText$3 = dart.privateName(date_picker, "_InputDateRangePickerDialog.helpText");
  var entryModeButton$1 = dart.privateName(date_picker, "_InputDateRangePickerDialog.entryModeButton");
  var _formatDateRange = dart.privateName(date_picker, "_formatDateRange");
  date_picker._InputDateRangePickerDialog = class _InputDateRangePickerDialog extends framework.StatelessWidget {
    get selectedStartDate() {
      return this[selectedStartDate$0];
    }
    set selectedStartDate(value) {
      super.selectedStartDate = value;
    }
    get selectedEndDate() {
      return this[selectedEndDate$0];
    }
    set selectedEndDate(value) {
      super.selectedEndDate = value;
    }
    get currentDate() {
      return this[currentDate$2];
    }
    set currentDate(value) {
      super.currentDate = value;
    }
    get picker() {
      return this[picker$];
    }
    set picker(value) {
      super.picker = value;
    }
    get onConfirm() {
      return this[onConfirm$0];
    }
    set onConfirm(value) {
      super.onConfirm = value;
    }
    get onCancel() {
      return this[onCancel$0];
    }
    set onCancel(value) {
      super.onCancel = value;
    }
    get confirmText() {
      return this[confirmText$2];
    }
    set confirmText(value) {
      super.confirmText = value;
    }
    get cancelText() {
      return this[cancelText$1];
    }
    set cancelText(value) {
      super.cancelText = value;
    }
    get helpText() {
      return this[helpText$3];
    }
    set helpText(value) {
      super.helpText = value;
    }
    get entryModeButton() {
      return this[entryModeButton$1];
    }
    set entryModeButton(value) {
      super.entryModeButton = value;
    }
    static ['_#new#tearOff'](opts) {
      let selectedStartDate = opts && 'selectedStartDate' in opts ? opts.selectedStartDate : null;
      let selectedEndDate = opts && 'selectedEndDate' in opts ? opts.selectedEndDate : null;
      let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
      let picker = opts && 'picker' in opts ? opts.picker : null;
      let onConfirm = opts && 'onConfirm' in opts ? opts.onConfirm : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
      let cancelText = opts && 'cancelText' in opts ? opts.cancelText : null;
      let helpText = opts && 'helpText' in opts ? opts.helpText : null;
      let entryModeButton = opts && 'entryModeButton' in opts ? opts.entryModeButton : null;
      return new date_picker._InputDateRangePickerDialog.new({selectedStartDate: selectedStartDate, selectedEndDate: selectedEndDate, currentDate: currentDate, picker: picker, onConfirm: onConfirm, onCancel: onCancel, confirmText: confirmText, cancelText: cancelText, helpText: helpText, entryModeButton: entryModeButton, $creationLocationd_0dea112b090073317d4: C[209] || CT.C209});
    }
    [_formatDateRange](context, start, end, now) {
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let startText = date_picker._formatRangeStartDate(localizations, start, end);
      let endText = date_picker._formatRangeEndDate(localizations, start, end, now);
      if (start == null || end == null) {
        return localizations.unspecifiedDateRange;
      }
      if (basic.Directionality.of(context) === ui.TextDirection.ltr) {
        return startText + " – " + endText;
      } else {
        return endText + " – " + startText;
      }
    }
    build(context) {
      let t7, t7$, t7$0, t7$1, t7$2;
      let theme = theme$.Theme.of(context);
      let colorScheme = theme.colorScheme;
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let orientation = media_query.MediaQuery.of(context).orientation;
      let textTheme = theme.textTheme;
      let onPrimarySurfaceColor = colorScheme.brightness === ui.Brightness.light ? colorScheme.onPrimary : colorScheme.onSurface;
      let dateStyle = orientation === media_query.Orientation.landscape ? (t7 = textTheme.headline5, t7 == null ? null : t7.apply({color: onPrimarySurfaceColor})) : (t7$ = textTheme.headline4, t7$ == null ? null : t7$.apply({color: onPrimarySurfaceColor}));
      let dateText = this[_formatDateRange](context, this.selectedStartDate, this.selectedEndDate, dart.nullCheck(this.currentDate));
      let semanticDateText = this.selectedStartDate != null && this.selectedEndDate != null ? localizations.formatMediumDate(dart.nullCheck(this.selectedStartDate)) + " – " + localizations.formatMediumDate(dart.nullCheck(this.selectedEndDate)) : "";
      let header = new date_picker._DatePickerHeader.new({helpText: (t7$0 = this.helpText, t7$0 == null ? localizations.dateRangePickerHelpText : t7$0), titleText: dateText, titleSemanticsLabel: semanticDateText, titleStyle: dateStyle, orientation: orientation, isShort: orientation === media_query.Orientation.landscape, entryModeButton: this.entryModeButton, $creationLocationd_0dea112b090073317d4: C[210] || CT.C210});
      let actions = new container.Container.new({alignment: alignment.AlignmentDirectional.centerEnd, constraints: C[8] || CT.C8, padding: C[9] || CT.C9, child: new overflow_bar.OverflowBar.new({spacing: 8.0, children: T.JSArrayOfWidget().of([new text_button.TextButton.new({onPressed: this.onCancel, child: new text.Text.new((t7$1 = this.cancelText, t7$1 == null ? localizations.cancelButtonLabel : t7$1), {$creationLocationd_0dea112b090073317d4: C[211] || CT.C211}), $creationLocationd_0dea112b090073317d4: C[212] || CT.C212}), new text_button.TextButton.new({onPressed: this.onConfirm, child: new text.Text.new((t7$2 = this.confirmText, t7$2 == null ? localizations.okButtonLabel : t7$2), {$creationLocationd_0dea112b090073317d4: C[213] || CT.C213}), $creationLocationd_0dea112b090073317d4: C[214] || CT.C214})]), $creationLocationd_0dea112b090073317d4: C[215] || CT.C215}), $creationLocationd_0dea112b090073317d4: C[216] || CT.C216});
      switch (orientation) {
        case C[6] || CT.C6:
          {
            return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: T.JSArrayOfWidget().of([header, new basic.Expanded.new({child: this.picker, $creationLocationd_0dea112b090073317d4: C[217] || CT.C217}), actions]), $creationLocationd_0dea112b090073317d4: C[218] || CT.C218});
          }
        case C[7] || CT.C7:
          {
            return new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: T.JSArrayOfWidget().of([header, new basic.Flexible.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: this.picker, $creationLocationd_0dea112b090073317d4: C[219] || CT.C219}), actions]), $creationLocationd_0dea112b090073317d4: C[220] || CT.C220}), $creationLocationd_0dea112b090073317d4: C[221] || CT.C221})]), $creationLocationd_0dea112b090073317d4: C[222] || CT.C222});
          }
      }
    }
  };
  (date_picker._InputDateRangePickerDialog.new = function(opts) {
    let selectedStartDate = opts && 'selectedStartDate' in opts ? opts.selectedStartDate : null;
    let selectedEndDate = opts && 'selectedEndDate' in opts ? opts.selectedEndDate : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let picker = opts && 'picker' in opts ? opts.picker : null;
    let onConfirm = opts && 'onConfirm' in opts ? opts.onConfirm : null;
    let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
    let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
    let cancelText = opts && 'cancelText' in opts ? opts.cancelText : null;
    let helpText = opts && 'helpText' in opts ? opts.helpText : null;
    let entryModeButton = opts && 'entryModeButton' in opts ? opts.entryModeButton : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[selectedStartDate$0] = selectedStartDate;
    this[selectedEndDate$0] = selectedEndDate;
    this[currentDate$2] = currentDate;
    this[picker$] = picker;
    this[onConfirm$0] = onConfirm;
    this[onCancel$0] = onCancel;
    this[confirmText$2] = confirmText;
    this[cancelText$1] = cancelText;
    this[helpText$3] = helpText;
    this[entryModeButton$1] = entryModeButton;
    date_picker._InputDateRangePickerDialog.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker._InputDateRangePickerDialog.prototype;
  dart.addTypeTests(date_picker._InputDateRangePickerDialog);
  dart.addTypeCaches(date_picker._InputDateRangePickerDialog);
  dart.setMethodSignature(date_picker._InputDateRangePickerDialog, () => ({
    __proto__: dart.getMethods(date_picker._InputDateRangePickerDialog.__proto__),
    [_formatDateRange]: dart.fnType(core.String, [framework.BuildContext, dart.nullable(core.DateTime), dart.nullable(core.DateTime), core.DateTime]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(date_picker._InputDateRangePickerDialog, I[1]);
  dart.setFieldSignature(date_picker._InputDateRangePickerDialog, () => ({
    __proto__: dart.getFields(date_picker._InputDateRangePickerDialog.__proto__),
    selectedStartDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    selectedEndDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    currentDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    picker: dart.finalFieldType(framework.Widget),
    onConfirm: dart.finalFieldType(dart.fnType(dart.void, [])),
    onCancel: dart.finalFieldType(dart.fnType(dart.void, [])),
    confirmText: dart.finalFieldType(dart.nullable(core.String)),
    cancelText: dart.finalFieldType(dart.nullable(core.String)),
    helpText: dart.finalFieldType(dart.nullable(core.String)),
    entryModeButton: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  date_picker._InputDateRangePicker = class _InputDateRangePicker extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialStartDate = opts && 'initialStartDate' in opts ? opts.initialStartDate : null;
      let initialEndDate = opts && 'initialEndDate' in opts ? opts.initialEndDate : null;
      let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
      let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
      let onStartDateChanged = opts && 'onStartDateChanged' in opts ? opts.onStartDateChanged : null;
      let onEndDateChanged = opts && 'onEndDateChanged' in opts ? opts.onEndDateChanged : null;
      let helpText = opts && 'helpText' in opts ? opts.helpText : null;
      let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
      let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
      let errorInvalidRangeText = opts && 'errorInvalidRangeText' in opts ? opts.errorInvalidRangeText : null;
      let fieldStartHintText = opts && 'fieldStartHintText' in opts ? opts.fieldStartHintText : null;
      let fieldEndHintText = opts && 'fieldEndHintText' in opts ? opts.fieldEndHintText : null;
      let fieldStartLabelText = opts && 'fieldStartLabelText' in opts ? opts.fieldStartLabelText : null;
      let fieldEndLabelText = opts && 'fieldEndLabelText' in opts ? opts.fieldEndLabelText : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
      let autovalidate = opts && 'autovalidate' in opts ? opts.autovalidate : false;
      return new date_picker._InputDateRangePicker.new({key: key, initialStartDate: initialStartDate, initialEndDate: initialEndDate, firstDate: firstDate, lastDate: lastDate, onStartDateChanged: onStartDateChanged, onEndDateChanged: onEndDateChanged, helpText: helpText, errorFormatText: errorFormatText, errorInvalidText: errorInvalidText, errorInvalidRangeText: errorInvalidRangeText, fieldStartHintText: fieldStartHintText, fieldEndHintText: fieldEndHintText, fieldStartLabelText: fieldStartLabelText, fieldEndLabelText: fieldEndLabelText, autofocus: autofocus, autovalidate: autovalidate, $creationLocationd_0dea112b090073317d4: C[223] || CT.C223});
    }
    createState() {
      return new date_picker._InputDateRangePickerState.new();
    }
  };
  (date_picker._InputDateRangePicker.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialStartDate = opts && 'initialStartDate' in opts ? opts.initialStartDate : null;
    let initialEndDate = opts && 'initialEndDate' in opts ? opts.initialEndDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let onStartDateChanged = opts && 'onStartDateChanged' in opts ? opts.onStartDateChanged : null;
    let onEndDateChanged = opts && 'onEndDateChanged' in opts ? opts.onEndDateChanged : null;
    let helpText = opts && 'helpText' in opts ? opts.helpText : null;
    let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
    let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
    let errorInvalidRangeText = opts && 'errorInvalidRangeText' in opts ? opts.errorInvalidRangeText : null;
    let fieldStartHintText = opts && 'fieldStartHintText' in opts ? opts.fieldStartHintText : null;
    let fieldEndHintText = opts && 'fieldEndHintText' in opts ? opts.fieldEndHintText : null;
    let fieldStartLabelText = opts && 'fieldStartLabelText' in opts ? opts.fieldStartLabelText : null;
    let fieldEndLabelText = opts && 'fieldEndLabelText' in opts ? opts.fieldEndLabelText : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let autovalidate = opts && 'autovalidate' in opts ? opts.autovalidate : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.onStartDateChanged = onStartDateChanged;
    this.onEndDateChanged = onEndDateChanged;
    this.helpText = helpText;
    this.errorFormatText = errorFormatText;
    this.errorInvalidText = errorInvalidText;
    this.errorInvalidRangeText = errorInvalidRangeText;
    this.fieldStartHintText = fieldStartHintText;
    this.fieldEndHintText = fieldEndHintText;
    this.fieldStartLabelText = fieldStartLabelText;
    this.fieldEndLabelText = fieldEndLabelText;
    this.autofocus = autofocus;
    this.autovalidate = autovalidate;
    this.initialStartDate = initialStartDate == null ? null : date$.DateUtils.dateOnly(initialStartDate);
    this.initialEndDate = initialEndDate == null ? null : date$.DateUtils.dateOnly(initialEndDate);
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 2705, 15, "firstDate != null");
    this.firstDate = date$.DateUtils.dateOnly(firstDate);
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 2707, 15, "lastDate != null");
    this.lastDate = date$.DateUtils.dateOnly(lastDate);
    if (!(firstDate !== null)) dart.assertFailed(null, I[0], 2709, 15, "firstDate != null");
    if (!(lastDate !== null)) dart.assertFailed(null, I[0], 2710, 15, "lastDate != null");
    if (!(autofocus !== null)) dart.assertFailed(null, I[0], 2711, 15, "autofocus != null");
    if (!(autovalidate !== null)) dart.assertFailed(null, I[0], 2712, 15, "autovalidate != null");
    date_picker._InputDateRangePicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_picker._InputDateRangePicker.prototype;
  dart.addTypeTests(date_picker._InputDateRangePicker);
  dart.addTypeCaches(date_picker._InputDateRangePicker);
  dart.setMethodSignature(date_picker._InputDateRangePicker, () => ({
    __proto__: dart.getMethods(date_picker._InputDateRangePicker.__proto__),
    createState: dart.fnType(date_picker._InputDateRangePickerState, [])
  }));
  dart.setLibraryUri(date_picker._InputDateRangePicker, I[1]);
  dart.setFieldSignature(date_picker._InputDateRangePicker, () => ({
    __proto__: dart.getFields(date_picker._InputDateRangePicker.__proto__),
    initialStartDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    initialEndDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    firstDate: dart.finalFieldType(core.DateTime),
    lastDate: dart.finalFieldType(core.DateTime),
    onStartDateChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dart.nullable(core.DateTime)]))),
    onEndDateChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dart.nullable(core.DateTime)]))),
    helpText: dart.finalFieldType(dart.nullable(core.String)),
    errorFormatText: dart.finalFieldType(dart.nullable(core.String)),
    errorInvalidText: dart.finalFieldType(dart.nullable(core.String)),
    errorInvalidRangeText: dart.finalFieldType(dart.nullable(core.String)),
    fieldStartHintText: dart.finalFieldType(dart.nullable(core.String)),
    fieldEndHintText: dart.finalFieldType(dart.nullable(core.String)),
    fieldStartLabelText: dart.finalFieldType(dart.nullable(core.String)),
    fieldEndLabelText: dart.finalFieldType(dart.nullable(core.String)),
    autofocus: dart.finalFieldType(core.bool),
    autovalidate: dart.finalFieldType(core.bool)
  }));
  var ___InputDateRangePickerState__startInputText = dart.privateName(date_picker, "_#_InputDateRangePickerState#_startInputText");
  var ___InputDateRangePickerState__endInputText = dart.privateName(date_picker, "_#_InputDateRangePickerState#_endInputText");
  var ___InputDateRangePickerState__startController = dart.privateName(date_picker, "_#_InputDateRangePickerState#_startController");
  var ___InputDateRangePickerState__endController = dart.privateName(date_picker, "_#_InputDateRangePickerState#_endController");
  var _startErrorText = dart.privateName(date_picker, "_startErrorText");
  var _endErrorText = dart.privateName(date_picker, "_endErrorText");
  var _autoSelected = dart.privateName(date_picker, "_autoSelected");
  var _startInputText = dart.privateName(date_picker, "_startInputText");
  var _endInputText = dart.privateName(date_picker, "_endInputText");
  var _startController = dart.privateName(date_picker, "_startController");
  var _endController = dart.privateName(date_picker, "_endController");
  var _updateController = dart.privateName(date_picker, "_updateController");
  var _validateDate = dart.privateName(date_picker, "_validateDate");
  var _parseDate = dart.privateName(date_picker, "_parseDate");
  var _handleStartChanged = dart.privateName(date_picker, "_handleStartChanged");
  var _handleEndChanged = dart.privateName(date_picker, "_handleEndChanged");
  var InputBorder_borderSide = dart.privateName(input_border, "InputBorder.borderSide");
  var UnderlineInputBorder_borderRadius = dart.privateName(input_border, "UnderlineInputBorder.borderRadius");
  date_picker._InputDateRangePickerState = class _InputDateRangePickerState extends framework.State$(date_picker._InputDateRangePicker) {
    get [_startInputText]() {
      let t7;
      t7 = this[___InputDateRangePickerState__startInputText];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_startInputText")) : t7;
    }
    set [_startInputText](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_startInputText$35param) {
      this[___InputDateRangePickerState__startInputText] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_startInputText$35param;
    }
    get [_endInputText]() {
      let t7;
      t7 = this[___InputDateRangePickerState__endInputText];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_endInputText")) : t7;
    }
    set [_endInputText](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_endInputText$35param) {
      this[___InputDateRangePickerState__endInputText] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_endInputText$35param;
    }
    get [_startController]() {
      let t7;
      t7 = this[___InputDateRangePickerState__startController];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_startController")) : t7;
    }
    set [_startController](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_startController$35param) {
      this[___InputDateRangePickerState__startController] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_startController$35param;
    }
    get [_endController]() {
      let t7;
      t7 = this[___InputDateRangePickerState__endController];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_endController")) : t7;
    }
    set [_endController](library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_endController$35param) {
      this[___InputDateRangePickerState__endController] = library$32package$58flutter$47src$47material$47date_picker$46dart$58$58_endController$35param;
    }
    initState() {
      super.initState();
      this[_startDate] = this.widget.initialStartDate;
      this[_startController] = new editable_text.TextEditingController.new();
      this[_endDate] = this.widget.initialEndDate;
      this[_endController] = new editable_text.TextEditingController.new();
    }
    dispose() {
      this[_startController].dispose();
      this[_endController].dispose();
      super.dispose();
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      let localizations = material_localizations.MaterialLocalizations.of(this.context);
      if (this[_startDate] != null) {
        this[_startInputText] = localizations.formatCompactDate(dart.nullCheck(this[_startDate]));
        let selectText = this.widget.autofocus && !this[_autoSelected];
        this[_updateController](this[_startController], this[_startInputText], selectText);
        this[_autoSelected] = selectText;
      }
      if (this[_endDate] != null) {
        this[_endInputText] = localizations.formatCompactDate(dart.nullCheck(this[_endDate]));
        this[_updateController](this[_endController], this[_endInputText], false);
      }
    }
    validate() {
      let t7;
      let startError = this[_validateDate](this[_startDate]);
      let endError = this[_validateDate](this[_endDate]);
      if (startError == null && endError == null) {
        if (dart.nullCheck(this[_startDate]).isAfter(dart.nullCheck(this[_endDate]))) {
          startError = (t7 = this.widget.errorInvalidRangeText, t7 == null ? material_localizations.MaterialLocalizations.of(this.context).invalidDateRangeLabel : t7);
        }
      }
      this.setState(dart.fn(() => {
        this[_startErrorText] = startError;
        this[_endErrorText] = endError;
      }, T.VoidTovoid()));
      return startError == null && endError == null;
    }
    [_parseDate](text) {
      let localizations = material_localizations.MaterialLocalizations.of(this.context);
      return localizations.parseCompactDate(text);
    }
    [_validateDate](date) {
      let t7, t7$;
      if (date == null) {
        t7 = this.widget.errorFormatText;
        return t7 == null ? material_localizations.MaterialLocalizations.of(this.context).invalidDateFormatLabel : t7;
      } else if (date.isBefore(this.widget.firstDate) || date.isAfter(this.widget.lastDate)) {
        t7$ = this.widget.errorInvalidText;
        return t7$ == null ? material_localizations.MaterialLocalizations.of(this.context).dateOutOfRangeLabel : t7$;
      }
      return null;
    }
    [_updateController](controller, text, selectText) {
      let textEditingValue = controller.value.copyWith({text: text});
      if (selectText) {
        textEditingValue = textEditingValue.copyWith({selection: new text_editing.TextSelection.new({baseOffset: 0, extentOffset: text.length})});
      }
      controller.value = textEditingValue;
    }
    [_handleStartChanged](text) {
      this.setState(dart.fn(() => {
        let t7;
        this[_startInputText] = text;
        this[_startDate] = this[_parseDate](text);
        t7 = this.widget.onStartDateChanged;
        t7 == null ? null : t7(this[_startDate]);
      }, T.VoidTovoid()));
      if (this.widget.autovalidate) {
        this.validate();
      }
    }
    [_handleEndChanged](text) {
      this.setState(dart.fn(() => {
        let t7;
        this[_endInputText] = text;
        this[_endDate] = this[_parseDate](text);
        t7 = this.widget.onEndDateChanged;
        t7 == null ? null : t7(this[_endDate]);
      }, T.VoidTovoid()));
      if (this.widget.autovalidate) {
        this.validate();
      }
    }
    build(context) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3;
      let localizations = material_localizations.MaterialLocalizations.of(context);
      let inputTheme = theme$.Theme.of(context).inputDecorationTheme;
      return new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new text_field.TextField.new({controller: this[_startController], decoration: new input_decorator.InputDecoration.new({border: (t7 = inputTheme.border, t7 == null ? C[224] || CT.C224 : t7), filled: inputTheme.filled, hintText: (t7$ = this.widget.fieldStartHintText, t7$ == null ? localizations.dateHelpText : t7$), labelText: (t7$0 = this.widget.fieldStartLabelText, t7$0 == null ? localizations.dateRangeStartLabel : t7$0), errorText: this[_startErrorText]}), keyboardType: text_input.TextInputType.datetime, onChanged: dart.bind(this, _handleStartChanged), autofocus: this.widget.autofocus, $creationLocationd_0dea112b090073317d4: C[229] || CT.C229}), $creationLocationd_0dea112b090073317d4: C[230] || CT.C230}), C[231] || CT.C231, new basic.Expanded.new({child: new text_field.TextField.new({controller: this[_endController], decoration: new input_decorator.InputDecoration.new({border: (t7$1 = inputTheme.border, t7$1 == null ? C[224] || CT.C224 : t7$1), filled: inputTheme.filled, hintText: (t7$2 = this.widget.fieldEndHintText, t7$2 == null ? localizations.dateHelpText : t7$2), labelText: (t7$3 = this.widget.fieldEndLabelText, t7$3 == null ? localizations.dateRangeEndLabel : t7$3), errorText: this[_endErrorText]}), keyboardType: text_input.TextInputType.datetime, onChanged: dart.bind(this, _handleEndChanged), $creationLocationd_0dea112b090073317d4: C[233] || CT.C233}), $creationLocationd_0dea112b090073317d4: C[234] || CT.C234})]), $creationLocationd_0dea112b090073317d4: C[235] || CT.C235});
    }
    static ['_#new#tearOff']() {
      return new date_picker._InputDateRangePickerState.new();
    }
  };
  (date_picker._InputDateRangePickerState.new = function() {
    this[___InputDateRangePickerState__startInputText] = null;
    this[___InputDateRangePickerState__endInputText] = null;
    this[_startDate] = null;
    this[_endDate] = null;
    this[___InputDateRangePickerState__startController] = null;
    this[___InputDateRangePickerState__endController] = null;
    this[_startErrorText] = null;
    this[_endErrorText] = null;
    this[_autoSelected] = false;
    date_picker._InputDateRangePickerState.__proto__.new.call(this);
    ;
  }).prototype = date_picker._InputDateRangePickerState.prototype;
  dart.addTypeTests(date_picker._InputDateRangePickerState);
  dart.addTypeCaches(date_picker._InputDateRangePickerState);
  dart.setMethodSignature(date_picker._InputDateRangePickerState, () => ({
    __proto__: dart.getMethods(date_picker._InputDateRangePickerState.__proto__),
    validate: dart.fnType(core.bool, []),
    [_parseDate]: dart.fnType(dart.nullable(core.DateTime), [dart.nullable(core.String)]),
    [_validateDate]: dart.fnType(dart.nullable(core.String), [dart.nullable(core.DateTime)]),
    [_updateController]: dart.fnType(dart.void, [editable_text.TextEditingController, core.String, core.bool]),
    [_handleStartChanged]: dart.fnType(dart.void, [core.String]),
    [_handleEndChanged]: dart.fnType(dart.void, [core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(date_picker._InputDateRangePickerState, () => ({
    __proto__: dart.getGetters(date_picker._InputDateRangePickerState.__proto__),
    [_startInputText]: core.String,
    [_endInputText]: core.String,
    [_startController]: editable_text.TextEditingController,
    [_endController]: editable_text.TextEditingController
  }));
  dart.setSetterSignature(date_picker._InputDateRangePickerState, () => ({
    __proto__: dart.getSetters(date_picker._InputDateRangePickerState.__proto__),
    [_startInputText]: core.String,
    [_endInputText]: core.String,
    [_startController]: editable_text.TextEditingController,
    [_endController]: editable_text.TextEditingController
  }));
  dart.setLibraryUri(date_picker._InputDateRangePickerState, I[1]);
  dart.setFieldSignature(date_picker._InputDateRangePickerState, () => ({
    __proto__: dart.getFields(date_picker._InputDateRangePickerState.__proto__),
    [___InputDateRangePickerState__startInputText]: dart.fieldType(dart.nullable(core.String)),
    [___InputDateRangePickerState__endInputText]: dart.fieldType(dart.nullable(core.String)),
    [_startDate]: dart.fieldType(dart.nullable(core.DateTime)),
    [_endDate]: dart.fieldType(dart.nullable(core.DateTime)),
    [___InputDateRangePickerState__startController]: dart.fieldType(dart.nullable(editable_text.TextEditingController)),
    [___InputDateRangePickerState__endController]: dart.fieldType(dart.nullable(editable_text.TextEditingController)),
    [_startErrorText]: dart.fieldType(dart.nullable(core.String)),
    [_endErrorText]: dart.fieldType(dart.nullable(core.String)),
    [_autoSelected]: dart.fieldType(core.bool)
  }));
  date_picker.showDatePicker = function showDatePicker(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let initialDate = opts && 'initialDate' in opts ? opts.initialDate : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let initialEntryMode = opts && 'initialEntryMode' in opts ? opts.initialEntryMode : C[0] || CT.C0;
    let selectableDayPredicate = opts && 'selectableDayPredicate' in opts ? opts.selectableDayPredicate : null;
    let helpText = opts && 'helpText' in opts ? opts.helpText : null;
    let cancelText = opts && 'cancelText' in opts ? opts.cancelText : null;
    let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let useRootNavigator = opts && 'useRootNavigator' in opts ? opts.useRootNavigator : true;
    let routeSettings = opts && 'routeSettings' in opts ? opts.routeSettings : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let initialDatePickerMode = opts && 'initialDatePickerMode' in opts ? opts.initialDatePickerMode : C[1] || CT.C1;
    let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
    let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
    let fieldHintText = opts && 'fieldHintText' in opts ? opts.fieldHintText : null;
    let fieldLabelText = opts && 'fieldLabelText' in opts ? opts.fieldLabelText : null;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let anchorPoint = opts && 'anchorPoint' in opts ? opts.anchorPoint : null;
    return async.async(T.DateTimeN(), function* showDatePicker() {
      if (!(context !== null)) dart.assertFailed(null, I[0], 161, 10, "context != null");
      if (!(initialDate !== null)) dart.assertFailed(null, I[0], 162, 10, "initialDate != null");
      if (!(firstDate !== null)) dart.assertFailed(null, I[0], 163, 10, "firstDate != null");
      if (!(lastDate !== null)) dart.assertFailed(null, I[0], 164, 10, "lastDate != null");
      initialDate = date$.DateUtils.dateOnly(initialDate);
      firstDate = date$.DateUtils.dateOnly(firstDate);
      lastDate = date$.DateUtils.dateOnly(lastDate);
      if (!!lastDate.isBefore(firstDate)) dart.assertFailed("lastDate " + dart.str(lastDate) + " must be on or after firstDate " + dart.str(firstDate) + ".", I[0], 169, 5, "!lastDate.isBefore(firstDate)");
      if (!!initialDate.isBefore(firstDate)) dart.assertFailed("initialDate " + dart.str(initialDate) + " must be on or after firstDate " + dart.str(firstDate) + ".", I[0], 173, 5, "!initialDate.isBefore(firstDate)");
      if (!!initialDate.isAfter(lastDate)) dart.assertFailed("initialDate " + dart.str(initialDate) + " must be on or before lastDate " + dart.str(lastDate) + ".", I[0], 177, 5, "!initialDate.isAfter(lastDate)");
      if (!(selectableDayPredicate == null || selectableDayPredicate(initialDate))) dart.assertFailed("Provided initialDate " + dart.str(initialDate) + " must satisfy provided selectableDayPredicate.", I[0], 181, 5, "selectableDayPredicate == null || selectableDayPredicate(initialDate)");
      if (!(initialEntryMode !== null)) dart.assertFailed(null, I[0], 184, 10, "initialEntryMode != null");
      if (!(useRootNavigator !== null)) dart.assertFailed(null, I[0], 185, 10, "useRootNavigator != null");
      if (!(initialDatePickerMode !== null)) dart.assertFailed(null, I[0], 186, 10, "initialDatePickerMode != null");
      if (!debug.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[0], 187, 10, "debugCheckHasMaterialLocalizations(context)");
      let dialog = new date_picker.DatePickerDialog.new({initialDate: initialDate, firstDate: firstDate, lastDate: lastDate, currentDate: currentDate, initialEntryMode: initialEntryMode, selectableDayPredicate: selectableDayPredicate, helpText: helpText, cancelText: cancelText, confirmText: confirmText, initialCalendarMode: initialDatePickerMode, errorFormatText: errorFormatText, errorInvalidText: errorInvalidText, fieldHintText: fieldHintText, fieldLabelText: fieldLabelText, keyboardType: keyboardType, $creationLocationd_0dea112b090073317d4: C[236] || CT.C236});
      if (textDirection != null) {
        dialog = new basic.Directionality.new({textDirection: textDirection, child: dialog, $creationLocationd_0dea112b090073317d4: C[237] || CT.C237});
      }
      if (locale != null) {
        dialog = localizations.Localizations.override({context: context, locale: locale, child: dialog, $creationLocationd_0dea112b090073317d4: C[238] || CT.C238});
      }
      return dialog$.showDialog(core.DateTime, {context: context, useRootNavigator: useRootNavigator, routeSettings: routeSettings, builder: dart.fn(context => builder == null ? dialog : builder(context, dialog), T.BuildContextToWidget()), anchorPoint: anchorPoint});
    });
  };
  date_picker.showDateRangePicker = function showDateRangePicker(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let initialDateRange = opts && 'initialDateRange' in opts ? opts.initialDateRange : null;
    let firstDate = opts && 'firstDate' in opts ? opts.firstDate : null;
    let lastDate = opts && 'lastDate' in opts ? opts.lastDate : null;
    let currentDate = opts && 'currentDate' in opts ? opts.currentDate : null;
    let initialEntryMode = opts && 'initialEntryMode' in opts ? opts.initialEntryMode : C[0] || CT.C0;
    let helpText = opts && 'helpText' in opts ? opts.helpText : null;
    let cancelText = opts && 'cancelText' in opts ? opts.cancelText : null;
    let confirmText = opts && 'confirmText' in opts ? opts.confirmText : null;
    let saveText = opts && 'saveText' in opts ? opts.saveText : null;
    let errorFormatText = opts && 'errorFormatText' in opts ? opts.errorFormatText : null;
    let errorInvalidText = opts && 'errorInvalidText' in opts ? opts.errorInvalidText : null;
    let errorInvalidRangeText = opts && 'errorInvalidRangeText' in opts ? opts.errorInvalidRangeText : null;
    let fieldStartHintText = opts && 'fieldStartHintText' in opts ? opts.fieldStartHintText : null;
    let fieldEndHintText = opts && 'fieldEndHintText' in opts ? opts.fieldEndHintText : null;
    let fieldStartLabelText = opts && 'fieldStartLabelText' in opts ? opts.fieldStartLabelText : null;
    let fieldEndLabelText = opts && 'fieldEndLabelText' in opts ? opts.fieldEndLabelText : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let useRootNavigator = opts && 'useRootNavigator' in opts ? opts.useRootNavigator : true;
    let routeSettings = opts && 'routeSettings' in opts ? opts.routeSettings : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let anchorPoint = opts && 'anchorPoint' in opts ? opts.anchorPoint : null;
    return async.async(T.DateTimeRangeN(), function* showDateRangePicker() {
      let t7;
      if (!(context !== null)) dart.assertFailed(null, I[0], 958, 10, "context != null");
      if (!(initialDateRange == null || initialDateRange.start !== null && initialDateRange.end !== null)) dart.assertFailed("initialDateRange must be null or have non-null start and end dates.", I[0], 960, 5, "initialDateRange == null || (initialDateRange.start != null && initialDateRange.end != null)");
      if (!(initialDateRange == null || !initialDateRange.start.isAfter(initialDateRange.end))) dart.assertFailed("initialDateRange's start date must not be after it's end date.", I[0], 964, 5, "initialDateRange == null || !initialDateRange.start.isAfter(initialDateRange.end)");
      initialDateRange = initialDateRange == null ? null : date$.DateUtils.datesOnly(initialDateRange);
      if (!(firstDate !== null)) dart.assertFailed(null, I[0], 968, 10, "firstDate != null");
      firstDate = date$.DateUtils.dateOnly(firstDate);
      if (!(lastDate !== null)) dart.assertFailed(null, I[0], 970, 10, "lastDate != null");
      lastDate = date$.DateUtils.dateOnly(lastDate);
      if (!!lastDate.isBefore(firstDate)) dart.assertFailed("lastDate " + dart.str(lastDate) + " must be on or after firstDate " + dart.str(firstDate) + ".", I[0], 973, 5, "!lastDate.isBefore(firstDate)");
      if (!(initialDateRange == null || !initialDateRange.start.isBefore(firstDate))) dart.assertFailed("initialDateRange's start date must be on or after firstDate " + dart.str(firstDate) + ".", I[0], 977, 5, "initialDateRange == null || !initialDateRange.start.isBefore(firstDate)");
      if (!(initialDateRange == null || !initialDateRange.end.isBefore(firstDate))) dart.assertFailed("initialDateRange's end date must be on or after firstDate " + dart.str(firstDate) + ".", I[0], 981, 5, "initialDateRange == null || !initialDateRange.end.isBefore(firstDate)");
      if (!(initialDateRange == null || !initialDateRange.start.isAfter(lastDate))) dart.assertFailed("initialDateRange's start date must be on or before lastDate " + dart.str(lastDate) + ".", I[0], 985, 5, "initialDateRange == null || !initialDateRange.start.isAfter(lastDate)");
      if (!(initialDateRange == null || !initialDateRange.end.isAfter(lastDate))) dart.assertFailed("initialDateRange's end date must be on or before lastDate " + dart.str(lastDate) + ".", I[0], 989, 5, "initialDateRange == null || !initialDateRange.end.isAfter(lastDate)");
      currentDate = date$.DateUtils.dateOnly((t7 = currentDate, t7 == null ? new core.DateTime.now() : t7));
      if (!(initialEntryMode !== null)) dart.assertFailed(null, I[0], 993, 10, "initialEntryMode != null");
      if (!(useRootNavigator !== null)) dart.assertFailed(null, I[0], 994, 10, "useRootNavigator != null");
      if (!debug.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[0], 995, 10, "debugCheckHasMaterialLocalizations(context)");
      let dialog = new date_picker.DateRangePickerDialog.new({initialDateRange: initialDateRange, firstDate: firstDate, lastDate: lastDate, currentDate: currentDate, initialEntryMode: initialEntryMode, helpText: helpText, cancelText: cancelText, confirmText: confirmText, saveText: saveText, errorFormatText: errorFormatText, errorInvalidText: errorInvalidText, errorInvalidRangeText: errorInvalidRangeText, fieldStartHintText: fieldStartHintText, fieldEndHintText: fieldEndHintText, fieldStartLabelText: fieldStartLabelText, fieldEndLabelText: fieldEndLabelText, $creationLocationd_0dea112b090073317d4: C[239] || CT.C239});
      if (textDirection != null) {
        dialog = new basic.Directionality.new({textDirection: textDirection, child: dialog, $creationLocationd_0dea112b090073317d4: C[240] || CT.C240});
      }
      if (locale != null) {
        dialog = localizations.Localizations.override({context: context, locale: locale, child: dialog, $creationLocationd_0dea112b090073317d4: C[241] || CT.C241});
      }
      return dialog$.showDialog(date$.DateTimeRange, {context: context, useRootNavigator: useRootNavigator, routeSettings: routeSettings, useSafeArea: false, builder: dart.fn(context => builder == null ? dialog : builder(context, dialog), T.BuildContextToWidget()), anchorPoint: anchorPoint});
    });
  };
  date_picker._formatRangeStartDate = function _formatRangeStartDate(localizations, startDate, endDate) {
    return startDate == null ? localizations.dateRangeStartLabel : endDate == null || startDate.year === endDate.year ? localizations.formatShortMonthDay(startDate) : localizations.formatShortDate(startDate);
  };
  date_picker._formatRangeEndDate = function _formatRangeEndDate(localizations, startDate, endDate, currentDate) {
    return endDate == null ? localizations.dateRangeEndLabel : startDate != null && startDate.year === endDate.year && startDate.year === currentDate.year ? localizations.formatShortMonthDay(endDate) : localizations.formatShortDate(endDate);
  };
  var Duration__duration = dart.privateName(core, "Duration._duration");
  dart.defineLazy(date_picker, {
    /*date_picker._calendarPortraitDialogSize*/get _calendarPortraitDialogSize() {
      return C[242] || CT.C242;
    },
    /*date_picker._calendarLandscapeDialogSize*/get _calendarLandscapeDialogSize() {
      return C[243] || CT.C243;
    },
    /*date_picker._inputPortraitDialogSize*/get _inputPortraitDialogSize() {
      return C[244] || CT.C244;
    },
    /*date_picker._inputLandscapeDialogSize*/get _inputLandscapeDialogSize() {
      return C[245] || CT.C245;
    },
    /*date_picker._inputRangeLandscapeDialogSize*/get _inputRangeLandscapeDialogSize() {
      return C[246] || CT.C246;
    },
    /*date_picker._dialogSizeAnimationDuration*/get _dialogSizeAnimationDuration() {
      return C[247] || CT.C247;
    },
    /*date_picker._inputFormPortraitHeight*/get _inputFormPortraitHeight() {
      return 98;
    },
    /*date_picker._inputFormLandscapeHeight*/get _inputFormLandscapeHeight() {
      return 108;
    },
    /*date_picker._monthScrollDuration*/get _monthScrollDuration() {
      return C[247] || CT.C247;
    },
    /*date_picker._monthItemHeaderHeight*/get _monthItemHeaderHeight() {
      return 58;
    },
    /*date_picker._monthItemFooterHeight*/get _monthItemFooterHeight() {
      return 12;
    },
    /*date_picker._monthItemRowHeight*/get _monthItemRowHeight() {
      return 42;
    },
    /*date_picker._monthItemSpaceBetweenRows*/get _monthItemSpaceBetweenRows() {
      return 8;
    },
    /*date_picker._horizontalPadding*/get _horizontalPadding() {
      return 8;
    },
    /*date_picker._maxCalendarWidthLandscape*/get _maxCalendarWidthLandscape() {
      return 384;
    },
    /*date_picker._maxCalendarWidthPortrait*/get _maxCalendarWidthPortrait() {
      return 480;
    },
    /*date_picker._monthItemGridDelegate*/get _monthItemGridDelegate() {
      return C[248] || CT.C248;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/date_picker.dart", {
    "package:flutter/src/material/date_picker.dart": date_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_picker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiSiB;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAMW;;;;;;IAGI;;;;;;IAGhB;;;;;;IAGA;;;;;;IAKA;;;;;;IAGO;;;;;;IAGP;;;;;;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","file":"../../../../../../../../../../packages/flutter/src/material/date_picker.dart.lib.js"}');
  // Exports:
  return {
    src__material__date_picker: date_picker
  };
}));

//# sourceMappingURL=date_picker.dart.lib.js.map