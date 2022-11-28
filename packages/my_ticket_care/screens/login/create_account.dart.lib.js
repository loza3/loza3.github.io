define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/form.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/my_ticket_care/reusable/widgets/auth_background.dart', 'packages/flutter/src/widgets/single_child_scroll_view.dart', 'packages/my_ticket_care/reusable/widgets/card_container.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/my_ticket_care/models/backend/person.dart', 'packages/my_ticket_care/services/login/login_api.dart', 'packages/cool_alert/src/widgets/cool_alert_buttons.dart', 'packages/my_ticket_care/reusable/app_colors.dart', 'packages/flutter/src/material/progress_indicator.dart', 'packages/my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/my_ticket_care/models/frontend/validator.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/intl/src/intl/date_format.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/checkbox.dart', 'packages/flutter/src/material/date_picker.dart'], (function load__packages__my_ticket_care__screens__login__create_account_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__form$46dart, packages__flutter__src__material__icon_button$46dart, packages__my_ticket_care__reusable__widgets__auth_background$46dart, packages__flutter__src__widgets__single_child_scroll_view$46dart, packages__my_ticket_care__reusable__widgets__card_container$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__elevated_button$46dart, packages__my_ticket_care__models__backend__person$46dart, packages__my_ticket_care__services__login__login_api$46dart, packages__cool_alert__src__widgets__cool_alert_buttons$46dart, packages__my_ticket_care__reusable__app_colors$46dart, packages__flutter__src__material__progress_indicator$46dart, packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__my_ticket_care__models__frontend__validator$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__intl__src__intl__date_format$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__checkbox$46dart, packages__flutter__src__material__date_picker$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const form = packages__flutter__src__widgets__form$46dart.src__widgets__form;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const list_tile = packages__flutter__src__material__icon_button$46dart.src__material__list_tile;
  const color_scheme = packages__flutter__src__material__icon_button$46dart.src__material__color_scheme;
  const auth_background = packages__my_ticket_care__reusable__widgets__auth_background$46dart.reusable__widgets__auth_background;
  const single_child_scroll_view = packages__flutter__src__widgets__single_child_scroll_view$46dart.src__widgets__single_child_scroll_view;
  const card_container = packages__my_ticket_care__reusable__widgets__card_container$46dart.reusable__widgets__card_container;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const colors$ = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const person$ = packages__my_ticket_care__models__backend__person$46dart.models__backend__person;
  const login_api = packages__my_ticket_care__services__login__login_api$46dart.services__login__login_api;
  const cool_alert = packages__cool_alert__src__widgets__cool_alert_buttons$46dart.cool_alert;
  const app_colors = packages__my_ticket_care__reusable__app_colors$46dart.reusable__app_colors;
  const progress_indicator = packages__flutter__src__material__progress_indicator$46dart.src__material__progress_indicator;
  const custom_text_form_field_widget = packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart.reusable__widgets__custom_text_form_field_widget;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const validator = packages__my_ticket_care__models__frontend__validator$46dart.models__frontend__validator;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const date_format = packages__intl__src__intl__date_format$46dart.src__intl__date_format;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const checkbox = packages__flutter__src__material__checkbox$46dart.src__material__checkbox;
  const date_picker = packages__flutter__src__material__date_picker$46dart.src__material__date_picker;
  var create_account = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    boolNTovoid: () => (T.boolNTovoid = dart.constFn(dart.fnType(dart.void, [T.boolN()])))(),
    DateTimeN: () => (T.DateTimeN = dart.constFn(dart.nullable(core.DateTime)))(),
    DateTimeNToNull: () => (T.DateTimeNToNull = dart.constFn(dart.fnType(core.Null, [T.DateTimeN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CreateAccountScreen",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 21,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 120,
        [SizedBox_width]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 27,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 35,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294962158.0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294954450.0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293892762.0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293227379.0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293874512.0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294198070.0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293212469.0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292030255.0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291176488.0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290190364.0
      });
    },
    get C9() {
      return C[9] = dart.constMap(core.int, ui.Color, [50, C[10] || CT.C10, 100, C[11] || CT.C11, 200, C[12] || CT.C12, 300, C[13] || CT.C13, 400, C[14] || CT.C14, 500, C[15] || CT.C15, 600, C[16] || CT.C16, 700, C[17] || CT.C17, 800, C[18] || CT.C18, 900, C[19] || CT.C19]);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4294198070.0,
        [ColorSwatch__swatch]: C[9] || CT.C9
      });
    },
    get C7() {
      return C[7] = dart.const({
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
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[8] || CT.C8,
        [TextStyle_inherit]: true
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C[7] || CT.C7,
        [Text_textSpan]: null,
        [Text_data]: "Seleccione un genero"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 36,
        [_Location_line]: 75,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 27,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 35,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[24] || CT.C24,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C[7] || CT.C7,
        [Text_textSpan]: null,
        [Text_data]: "Mayor a 18 años"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 30,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Form",
        [_Location_column]: 21,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 24,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CardContainer",
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 18,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SingleChildScrollView",
        [_Location_column]: 16,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AuthBackground",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 21,
        [_Location_line]: 158,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 0
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[35] || CT.C35,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: C[36] || CT.C36,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[37] || CT.C37
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 21,
        [_Location_line]: 161,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[39] || CT.C39,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 24
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 164,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[41] || CT.C41,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Please Wait..."
      });
    },
    get C33() {
      return C[33] = dart.constList([C[34] || CT.C34, C[38] || CT.C38, C[40] || CT.C40], framework.Widget);
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 19,
        [_Location_line]: 157,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 25,
        [_Location_line]: 166,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C45() {
      return C[45] = dart.const({
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
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[44] || CT.C44,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C[45] || CT.C45,
        [Text_textSpan]: null,
        [Text_data]: "Crear cuenta"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 18,
        [_Location_line]: 106,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 103,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 12,
        [_Location_line]: 102,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C49() {
      return C[49] = dart.fn(validator.Validator.validatorName, T.StringNToStringN());
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 9,
        [_Location_line]: 175,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C51() {
      return C[51] = dart.fn(validator.Validator.validatorEmail, T.StringNToStringN());
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 9,
        [_Location_line]: 183,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C53() {
      return C[53] = dart.fn(validator.Validator.validatorPhoneNumer, T.StringNToStringN());
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 9,
        [_Location_line]: 191,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 12,
        [_Location_line]: 173,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C57() {
      return C[57] = dart.const({
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
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 209,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 25,
        [_Location_line]: 213,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 984351
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
        [_Location_name]: "ListTile",
        [_Location_column]: 14,
        [_Location_line]: 208,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 204,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Checkbox",
        [_Location_column]: 9,
        [_Location_line]: 223,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 242,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[66] || CT.C66,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Masculino"
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 9,
        [_Location_line]: 235,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 243,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[69] || CT.C69,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 20
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Checkbox",
        [_Location_column]: 9,
        [_Location_line]: 246,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 265,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[72] || CT.C72,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Femenino"
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 9,
        [_Location_line]: 258,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 220,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 24,
        [_Location_line]: 278,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[76] || CT.C76,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C[45] || CT.C45,
        [Text_textSpan]: null,
        [Text_data]: "Volver"
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 16,
        [_Location_line]: 274,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 272,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 12,
        [_Location_line]: 271,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/create_account.dart"
      });
    }
  }, false);
  var C = Array(80).fill(void 0);
  var I = ["package:my_ticket_care/screens/login/create_account.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  create_account.CreateAccountScreen = class CreateAccountScreen extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new create_account.CreateAccountScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new create_account._CreateAccountScreenState.new();
    }
  };
  (create_account.CreateAccountScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    create_account.CreateAccountScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = create_account.CreateAccountScreen.prototype;
  dart.addTypeTests(create_account.CreateAccountScreen);
  dart.addTypeCaches(create_account.CreateAccountScreen);
  dart.setMethodSignature(create_account.CreateAccountScreen, () => ({
    __proto__: dart.getMethods(create_account.CreateAccountScreen.__proto__),
    createState: dart.fnType(framework.State$(create_account.CreateAccountScreen), [])
  }));
  dart.setLibraryUri(create_account.CreateAccountScreen, I[0]);
  var _dateTime = dart.privateName(create_account, "_dateTime");
  var _key = dart.privateName(create_account, "_key");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var _inputsPerson = dart.privateName(create_account, "_inputsPerson");
  var _genderWidget = dart.privateName(create_account, "_genderWidget");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
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
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var Color_value = dart.privateName(ui, "Color.value");
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _birthDateWidget = dart.privateName(create_account, "_birthDateWidget");
  var _buttonCreate = dart.privateName(create_account, "_buttonCreate");
  var _buttonGoBack = dart.privateName(create_account, "_buttonGoBack");
  var ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  var ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  var ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  var ProgressIndicator_color = dart.privateName(progress_indicator, "ProgressIndicator.color");
  var ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  var ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  var CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var CircularProgressIndicator__indicatorType = dart.privateName(progress_indicator, "CircularProgressIndicator._indicatorType");
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
  var _showDatePicker = dart.privateName(create_account, "_showDatePicker");
  create_account._CreateAccountScreenState = class _CreateAccountScreenState extends framework.State$(create_account.CreateAccountScreen) {
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let titleStyle = dart.nullCheck(theme.Theme.of(context).textTheme.headline4).copyWith({color: colorScheme.onBackground});
      return new scaffold.Scaffold.new({body: new auth_background.AuthBackground.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([C[1] || CT.C1, new card_container.CardContainer.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("Crear cuenta", {style: titleStyle, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), new form.Form.new({key: this[_key], child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
                            let t0 = T.JSArrayOfWidget().of([this[_inputsPerson](), new text.Text.new("Genero", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), this[_genderWidget](colorScheme)]);
                            if (this.isValidGender && !(this.isSelectFemenino || this.isSelectMasculino)) t0.push(C[5] || CT.C5);
                            t0.push(new basic.Padding.new({padding: C[20] || CT.C20, child: new text.Text.new("Fecha de Nacimiento", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}));
                            t0.push(this[_birthDateWidget](colorScheme));
                            if (this.isValidTime) t0.push(C[23] || CT.C23);
                            t0.push(this[_buttonCreate](colorScheme));
                            t0.push(this[_buttonGoBack](colorScheme, context));
                            return t0;
                          })(), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26})]), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28})]), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
    }
    [_buttonCreate](colorScheme) {
      return new basic.Center.new({child: new container.Container.new({margin: C[20] || CT.C20, width: 220.0, child: new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colorScheme.primary}), onPressed: dart.fn(() => async.async(dart.void, (function*() {
              let t1, t1$;
              if (!dart.test((t1$ = (t1 = this[_key].currentState, t1 == null ? null : t1.validate()), t1$ == null ? false : t1$)) || !this.isValidGender || this.isValidTime) {
                this.setState(dart.fn(() => {
                  this.isValidGender = true;
                  if (this[_dateTime].year > 2004) {
                    this.isValidTime = true;
                  } else {
                    this.isValidTime = false;
                  }
                }, T.VoidTovoid()));
              } else {
                let person = new person$.Person.new({personId: 0, personName: this.name, email: this.email, mobile: this.phone, birthDate: this[_dateTime], sex: 1});
                this.setState(dart.fn(() => {
                  this.isValid = true;
                }, T.VoidTovoid()));
                let masterResponse = (yield new login_api.MyTicketLogin.new().createPerson(person, "create"));
                this.setState(dart.fn(() => {
                  this.isValid = false;
                }, T.VoidTovoid()));
                if (masterResponse.status === 200) {
                  cool_alert.CoolAlert.show({context: this.context, type: cool_alert.CoolAlertType.success, text: masterResponse.message, backgroundColor: colorScheme.primary, onConfirmBtnTap: dart.fn(() => navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), this.context, "login_screen"), T.VoidTovoid())});
                } else {
                  cool_alert.CoolAlert.show({context: this.context, type: cool_alert.CoolAlertType.error, text: masterResponse.message, backgroundColor: app_colors.AppColors.primaryColor, onConfirmBtnTap: dart.fn(() => navigator.Navigator.pop(T.ObjectN(), this.context), T.VoidTovoid())});
                }
              }
            }).bind(this)), T.VoidToFutureOfvoid()), child: this.isValid ? new basic.Row.new({children: C[33] || CT.C33, $creationLocationd_0dea112b090073317d4: C[42] || CT.C42}) : C[43] || CT.C43, $creationLocationd_0dea112b090073317d4: C[46] || CT.C46}), $creationLocationd_0dea112b090073317d4: C[47] || CT.C47}), $creationLocationd_0dea112b090073317d4: C[48] || CT.C48});
    }
    [_inputsPerson]() {
      return new basic.Column.new({children: T.JSArrayOfWidget().of([new custom_text_form_field_widget.CustomTextFormField.new({hintText: "", labelText: "Nombre completo", icon: icons.Icons.people, keyboardType: text_input.TextInputType.name_, onChanged: dart.fn(value => this.name = value, T.StringToString()), validator: C[49] || CT.C49, $creationLocationd_0dea112b090073317d4: C[50] || CT.C50}), new custom_text_form_field_widget.CustomTextFormField.new({hintText: "example@gmail.com", labelText: "Email", icon: icons.Icons.email_outlined, keyboardType: text_input.TextInputType.emailAddress, onChanged: dart.fn(value => this.email = value, T.StringToString()), validator: C[51] || CT.C51, $creationLocationd_0dea112b090073317d4: C[52] || CT.C52}), new custom_text_form_field_widget.CustomTextFormField.new({hintText: "73155648", labelText: "Telefono", icon: icons.Icons.numbers_outlined, keyboardType: text_input.TextInputType.phone, onChanged: dart.fn(value => this.phone = value, T.StringToString()), validator: C[53] || CT.C53, $creationLocationd_0dea112b090073317d4: C[54] || CT.C54})]), $creationLocationd_0dea112b090073317d4: C[55] || CT.C55});
    }
    [_birthDateWidget](colorScheme) {
      return new container.Container.new({margin: C[56] || CT.C56, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black26, borderRadius: new border_radius.BorderRadius.circular(10.0)}), child: new list_tile.ListTile.new({title: new text.Text.new(new date_format.DateFormat.new("dd-MM-yyyy").format(this[_dateTime]), {style: C[57] || CT.C57, $creationLocationd_0dea112b090073317d4: C[58] || CT.C58}), trailing: C[59] || CT.C59, onTap: dart.fn(() => this[_showDatePicker](), T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[62] || CT.C62}), $creationLocationd_0dea112b090073317d4: C[63] || CT.C63});
    }
    [_genderWidget](colorScheme) {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new checkbox.Checkbox.new({activeColor: colorScheme.primary, value: this.isSelectMasculino, onChanged: dart.fn(value => this.setState(dart.fn(() => {
              let t1;
              this.isSelectMasculino = (t1 = value, t1 == null ? false : t1);
              this.isSelectFemenino = false;
              this.isValidGender = false;
              this.sex = 0;
              if (!(this.isSelectFemenino && this.isSelectMasculino)) {
                this.isValidGender = true;
              }
            }, T.VoidTovoid())), T.boolNTovoid()), $creationLocationd_0dea112b090073317d4: C[64] || CT.C64}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => this.setState(dart.fn(() => {
              this.isSelectMasculino = true;
              this.isSelectFemenino = false;
              this.isValidGender = false;
              this.sex = 0;
            }, T.VoidTovoid())), T.VoidTovoid()), child: C[65] || CT.C65, $creationLocationd_0dea112b090073317d4: C[67] || CT.C67}), C[68] || CT.C68, new checkbox.Checkbox.new({value: this.isSelectFemenino, activeColor: colorScheme.primary, onChanged: dart.fn(value => this.setState(dart.fn(() => {
              let t1;
              this.isSelectFemenino = (t1 = value, t1 == null ? false : t1);
              this.isSelectMasculino = false;
              this.isValidGender = false;
              this.sex = 1;
              if (!(this.isSelectFemenino && this.isSelectMasculino)) {
                this.isValidGender = true;
              }
            }, T.VoidTovoid())), T.boolNTovoid()), $creationLocationd_0dea112b090073317d4: C[70] || CT.C70}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => this.setState(dart.fn(() => {
              this.isSelectFemenino = true;
              this.isSelectMasculino = false;
              this.isValidGender = false;
              this.sex = 1;
            }, T.VoidTovoid())), T.VoidTovoid()), child: C[71] || CT.C71, $creationLocationd_0dea112b090073317d4: C[73] || CT.C73})]), $creationLocationd_0dea112b090073317d4: C[74] || CT.C74});
    }
    [_buttonGoBack](colorScheme, context) {
      return new basic.Center.new({child: new container.Container.new({margin: C[20] || CT.C20, child: new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colorScheme.secondary}), onPressed: dart.fn(() => navigator.Navigator.pop(T.ObjectN(), context), T.VoidTovoid()), child: C[75] || CT.C75, $creationLocationd_0dea112b090073317d4: C[77] || CT.C77}), $creationLocationd_0dea112b090073317d4: C[78] || CT.C78}), $creationLocationd_0dea112b090073317d4: C[79] || CT.C79});
    }
    [_showDatePicker]() {
      date_picker.showDatePicker({context: this.context, initialDate: new core.DateTime.now(), firstDate: new core.DateTime.new(1925), lastDate: new core.DateTime.now()}).then(core.Null, dart.fn(value => {
        this.setState(dart.fn(() => {
          let t1;
          this[_dateTime] = (t1 = value, t1 == null ? new core.DateTime.now() : t1);
          if (this[_dateTime].year > 2004) {
            this.isValidTime = true;
          } else {
            this.isValidTime = false;
          }
        }, T.VoidTovoid()));
      }, T.DateTimeNToNull()));
    }
    static ['_#new#tearOff']() {
      return new create_account._CreateAccountScreenState.new();
    }
  };
  (create_account._CreateAccountScreenState.new = function() {
    this.isSelectMasculino = false;
    this.isSelectFemenino = false;
    this.isValidGender = false;
    this.isValidTime = false;
    this.isValid = false;
    this[_dateTime] = new core.DateTime.now();
    this.name = "";
    this.email = "";
    this.password = "";
    this.sex = 0;
    this.phone = "";
    this[_key] = T.GlobalKeyOfFormState().new();
    create_account._CreateAccountScreenState.__proto__.new.call(this);
    ;
  }).prototype = create_account._CreateAccountScreenState.prototype;
  dart.addTypeTests(create_account._CreateAccountScreenState);
  dart.addTypeCaches(create_account._CreateAccountScreenState);
  dart.setMethodSignature(create_account._CreateAccountScreenState, () => ({
    __proto__: dart.getMethods(create_account._CreateAccountScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buttonCreate]: dart.fnType(basic.Center, [color_scheme.ColorScheme]),
    [_inputsPerson]: dart.fnType(basic.Column, []),
    [_birthDateWidget]: dart.fnType(container.Container, [color_scheme.ColorScheme]),
    [_genderWidget]: dart.fnType(basic.Row, [color_scheme.ColorScheme]),
    [_buttonGoBack]: dart.fnType(basic.Center, [color_scheme.ColorScheme, framework.BuildContext]),
    [_showDatePicker]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(create_account._CreateAccountScreenState, I[0]);
  dart.setFieldSignature(create_account._CreateAccountScreenState, () => ({
    __proto__: dart.getFields(create_account._CreateAccountScreenState.__proto__),
    isSelectMasculino: dart.fieldType(core.bool),
    isSelectFemenino: dart.fieldType(core.bool),
    isValidGender: dart.fieldType(core.bool),
    isValidTime: dart.fieldType(core.bool),
    isValid: dart.fieldType(core.bool),
    [_dateTime]: dart.fieldType(core.DateTime),
    name: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    password: dart.fieldType(core.String),
    sex: dart.fieldType(core.int),
    phone: dart.fieldType(core.String),
    [_key]: dart.finalFieldType(framework.GlobalKey$(form.FormState))
  }));
  dart.trackLibraries("packages/my_ticket_care/screens/login/create_account.dart", {
    "package:my_ticket_care/screens/login/create_account.dart": create_account
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["create_account.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/my_ticket_care/screens/login/create_account.dart.lib.js"}');
  // Exports:
  return {
    screens__login__create_account: create_account
  };
}));

//# sourceMappingURL=create_account.dart.lib.js.map
