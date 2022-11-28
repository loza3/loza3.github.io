define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/my_ticket_care/reusable/widgets/auth_background.dart', 'packages/flutter/src/widgets/single_child_scroll_view.dart', 'packages/my_ticket_care/reusable/widgets/card_container.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/providers/login_from_provider.dart', 'packages/flutter/src/widgets/form.dart', 'packages/my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/my_ticket_care/models/frontend/validator.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/my_ticket_care/models/backend/person.dart', 'packages/my_ticket_care/services/login/login_api.dart', 'packages/cool_alert/src/widgets/cool_alert_buttons.dart', 'packages/my_ticket_care/reusable/app_colors.dart', 'packages/flutter/src/material/progress_indicator.dart'], (function load__packages__my_ticket_care__screens__login__login_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__my_ticket_care__reusable__widgets__auth_background$46dart, packages__flutter__src__widgets__single_child_scroll_view$46dart, packages__my_ticket_care__reusable__widgets__card_container$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__providers__login_from_provider$46dart, packages__flutter__src__widgets__form$46dart, packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__my_ticket_care__models__frontend__validator$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__material__elevated_button$46dart, packages__my_ticket_care__models__backend__person$46dart, packages__my_ticket_care__services__login__login_api$46dart, packages__cool_alert__src__widgets__cool_alert_buttons$46dart, packages__my_ticket_care__reusable__app_colors$46dart, packages__flutter__src__material__progress_indicator$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const focus_scope = packages__flutter__src__widgets__title$46dart.src__widgets__focus_scope;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const auth_background = packages__my_ticket_care__reusable__widgets__auth_background$46dart.reusable__widgets__auth_background;
  const single_child_scroll_view = packages__flutter__src__widgets__single_child_scroll_view$46dart.src__widgets__single_child_scroll_view;
  const card_container = packages__my_ticket_care__reusable__widgets__card_container$46dart.reusable__widgets__card_container;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const login_from_provider = packages__my_ticket_care__providers__login_from_provider$46dart.providers__login_from_provider;
  const form = packages__flutter__src__widgets__form$46dart.src__widgets__form;
  const custom_text_form_field_widget = packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart.reusable__widgets__custom_text_form_field_widget;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const validator = packages__my_ticket_care__models__frontend__validator$46dart.models__frontend__validator;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const colors$ = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const person$ = packages__my_ticket_care__models__backend__person$46dart.models__backend__person;
  const login_api = packages__my_ticket_care__services__login__login_api$46dart.services__login__login_api;
  const cool_alert = packages__cool_alert__src__widgets__cool_alert_buttons$46dart.cool_alert;
  const app_colors = packages__my_ticket_care__reusable__app_colors$46dart.reusable__app_colors;
  const progress_indicator = packages__flutter__src__material__progress_indicator$46dart.src__material__progress_indicator;
  var login_screen = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginScreen",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 140,
        [SizedBox_width]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[4] || CT.C4,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[7] || CT.C7,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 30,
        [SizedBox_width]: null
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_LoginForm",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 20,
        [_Location_line]: 30,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CardContainer",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[12] || CT.C12,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 30,
        [SizedBox_width]: null
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SingleChildScrollView",
        [_Location_column]: 20,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AuthBackground",
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C17() {
      return C[17] = dart.fn(validator.Validator.validatorEmail, T.StringNToStringN());
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C19() {
      return C[19] = dart.fn(validator.Validator.validatorPassword, T.StringNToStringN());
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[22] || CT.C22,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ForgotPassword",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: login_screen._ForgotPassword.prototype,
        [Widget__location]: C[24] || CT.C24,
        [Widget_key]: null
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[26] || CT.C26,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ButtonLoginForm",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[29] || CT.C29,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ButtonCrearCuenta",
        [_Location_column]: 15,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: login_screen._ButtonCrearCuenta.prototype,
        [Widget__location]: C[31] || CT.C31,
        [Widget_key]: null
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 15,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330.0
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294309365.0
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293848814.0
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292927712.0
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292269782.0
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290624957.0
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288585374.0
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861.0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284572001.0
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282532418.0
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281348144.0
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280361249.0
      });
    },
    get C35() {
      return C[35] = dart.constMap(core.int, ui.Color, [50, C[36] || CT.C36, 100, C[37] || CT.C37, 200, C[38] || CT.C38, 300, C[39] || CT.C39, 350, C[40] || CT.C40, 400, C[41] || CT.C41, 500, C[42] || CT.C42, 600, C[43] || CT.C43, 700, C[44] || CT.C44, 800, C[45] || CT.C45, 850, C[46] || CT.C46, 900, C[47] || CT.C47]);
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4288585374.0,
        [ColorSwatch__swatch]: C[35] || CT.C35
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[33] || CT.C33,
        [Widget_key]: null,
        [Divider_color]: C[34] || CT.C34,
        [Divider_endIndent]: 10,
        [Divider_indent]: 10,
        [Divider_thickness]: 1,
        [Divider_height]: 30
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 15,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C50() {
      return C[50] = dart.const({
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
        [TextStyle_fontWeight]: C[51] || CT.C51,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[49] || CT.C49,
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
        [Text_style]: C[50] || CT.C50,
        [Text_textSpan]: null,
        [Text_data]: "O iniciar sesión con:"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Form",
        [_Location_column]: 12,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_LoginForm",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ForgotPassword",
        [_Location_column]: 9,
        [_Location_line]: 108,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "rectangle",
        [_Enum_index]: 0
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[60] || CT.C60,
        [BorderSide_style]: C[61] || CT.C61,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[62] || CT.C62
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[60] || CT.C60,
        [BorderSide_style]: C[64] || CT.C64,
        [BorderSide_width]: 1,
        [BorderSide_color]: C[62] || CT.C62
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C[59] || CT.C59,
        [Border_bottom]: C[63] || CT.C63,
        [Border_right]: C[59] || CT.C59,
        [Border_top]: C[59] || CT.C59
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C[57] || CT.C57,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: C[58] || CT.C58,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 24,
        [_Location_line]: 121,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C67() {
      return C[67] = dart.const({
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
        [TextStyle_fontWeight]: C[51] || CT.C51,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
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
        [Text_style]: C[67] || CT.C67,
        [Text_textSpan]: null,
        [Text_data]: "Olvidaste tu contraseña"
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 16,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 116,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 114,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ButtonCrearCuenta",
        [_Location_column]: 9,
        [_Location_line]: 132,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 145,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 14,
        [_Location_line]: 140,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 138,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ButtonLoginForm",
        [_Location_column]: 9,
        [_Location_line]: 158,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 19,
        [_Location_line]: 199,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 0
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[78] || CT.C78,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: C[79] || CT.C79,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[80] || CT.C80
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 202,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[82] || CT.C82,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 24
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 19,
        [_Location_line]: 205,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[84] || CT.C84,
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
    get C76() {
      return C[76] = dart.constList([C[77] || CT.C77, C[81] || CT.C81, C[83] || CT.C83], framework.Widget);
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 15,
        [_Location_line]: 197,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 15,
        [_Location_line]: 208,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 14,
        [_Location_line]: 167,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 165,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/login_screen.dart"
      });
    }
  }, false);
  var C = Array(89).fill(void 0);
  var I = ["package:my_ticket_care/screens/login/login_screen.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  login_screen.LoginScreen = class LoginScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_screen.LoginScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let theme = dart.nullCheck(theme$.Theme.of(context).textTheme.headline4).copyWith({color: theme$.Theme.of(context).colorScheme.onBackground});
      return new scaffold.Scaffold.new({body: new auth_background.AuthBackground.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([C[1] || CT.C1, new card_container.CardContainer.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([C[3] || CT.C3, new text.Text.new("Iniciar sesión", {style: theme, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), C[6] || CT.C6, new login_screen._LoginForm.new({$creationLocationd_0dea112b090073317d4: C[8] || CT.C8})]), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), C[11] || CT.C11]), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
  };
  (login_screen.LoginScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_screen.LoginScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen.LoginScreen.prototype;
  dart.addTypeTests(login_screen.LoginScreen);
  dart.addTypeCaches(login_screen.LoginScreen);
  dart.setMethodSignature(login_screen.LoginScreen, () => ({
    __proto__: dart.getMethods(login_screen.LoginScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_screen.LoginScreen, I[0]);
  var Color_value = dart.privateName(ui, "Color.value");
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
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
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  login_screen._LoginForm = class _LoginForm extends framework.StatelessWidget {
    build(context) {
      let loginForm = provider.Provider.of(login_from_provider.LoginFormProvider, context);
      return new form.Form.new({key: loginForm.formKey, autovalidateMode: form.AutovalidateMode.onUserInteraction, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new custom_text_form_field_widget.CustomTextFormField.new({hintText: "example@email.com", labelText: "Email", icon: icons.Icons.alternate_email_sharp, keyboardType: text_input.TextInputType.emailAddress, onChanged: dart.fn(value => loginForm.email = value, T.StringToString()), validator: C[17] || CT.C17, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), new custom_text_form_field_widget.CustomTextFormField.new({hintText: "**********", labelText: "Password", icon: icons.Icons.lock_outline_sharp, keyboardType: text_input.TextInputType.emailAddress, obscureText: true, onChanged: dart.fn(value => loginForm.password = value, T.StringToString()), validator: C[19] || CT.C19, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), C[21] || CT.C21, C[23] || CT.C23, C[25] || CT.C25, new login_screen._ButtonLoginForm.new({loginForm: loginForm, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), C[28] || CT.C28, C[30] || CT.C30, C[32] || CT.C32, C[48] || CT.C48]), $creationLocationd_0dea112b090073317d4: C[52] || CT.C52}), $creationLocationd_0dea112b090073317d4: C[53] || CT.C53});
    }
    static ['_#new#tearOff']() {
      return new login_screen._LoginForm.new({$creationLocationd_0dea112b090073317d4: C[54] || CT.C54});
    }
  };
  (login_screen._LoginForm.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_screen._LoginForm.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen._LoginForm.prototype;
  dart.addTypeTests(login_screen._LoginForm);
  dart.addTypeCaches(login_screen._LoginForm);
  dart.setMethodSignature(login_screen._LoginForm, () => ({
    __proto__: dart.getMethods(login_screen._LoginForm.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_screen._LoginForm, I[0]);
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  var BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  var BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  var BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  var BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var Border_left = dart.privateName(box_border, "Border.left");
  var Border_bottom = dart.privateName(box_border, "Border.bottom");
  var Border_right = dart.privateName(box_border, "Border.right");
  var Border_top = dart.privateName(box_border, "Border.top");
  var BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  var BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  var BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  login_screen._ForgotPassword = class _ForgotPassword extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_screen._ForgotPassword.new({key: key, $creationLocationd_0dea112b090073317d4: C[55] || CT.C55});
    }
    build(context) {
      return new container.Container.new({alignment: alignment.Alignment.centerRight, child: new container.Container.new({decoration: C[56] || CT.C56, child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => navigator.Navigator.pushNamed(T.ObjectN(), context, "forgot_password_screen"), T.VoidTovoid()), child: C[65] || CT.C65, $creationLocationd_0dea112b090073317d4: C[68] || CT.C68}), $creationLocationd_0dea112b090073317d4: C[69] || CT.C69}), $creationLocationd_0dea112b090073317d4: C[70] || CT.C70});
    }
  };
  (login_screen._ForgotPassword.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_screen._ForgotPassword.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen._ForgotPassword.prototype;
  dart.addTypeTests(login_screen._ForgotPassword);
  dart.addTypeCaches(login_screen._ForgotPassword);
  dart.setMethodSignature(login_screen._ForgotPassword, () => ({
    __proto__: dart.getMethods(login_screen._ForgotPassword.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_screen._ForgotPassword, I[0]);
  login_screen._ButtonCrearCuenta = class _ButtonCrearCuenta extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_screen._ButtonCrearCuenta.new({key: key, $creationLocationd_0dea112b090073317d4: C[71] || CT.C71});
    }
    build(context) {
      return new basic.SizedBox.new({width: 200.0, child: new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: theme$.Theme.of(context).colorScheme.secondary}), onPressed: dart.fn(() => navigator.Navigator.pushNamed(T.ObjectN(), context, "create_account_screen"), T.VoidTovoid()), child: new text.Text.new("Crear cuenta", {style: new text_style.TextStyle.new({color: theme$.Theme.of(context).colorScheme.onSecondary}), $creationLocationd_0dea112b090073317d4: C[72] || CT.C72}), $creationLocationd_0dea112b090073317d4: C[73] || CT.C73}), $creationLocationd_0dea112b090073317d4: C[74] || CT.C74});
    }
  };
  (login_screen._ButtonCrearCuenta.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_screen._ButtonCrearCuenta.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen._ButtonCrearCuenta.prototype;
  dart.addTypeTests(login_screen._ButtonCrearCuenta);
  dart.addTypeCaches(login_screen._ButtonCrearCuenta);
  dart.setMethodSignature(login_screen._ButtonCrearCuenta, () => ({
    __proto__: dart.getMethods(login_screen._ButtonCrearCuenta.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_screen._ButtonCrearCuenta, I[0]);
  var loginForm$ = dart.privateName(login_screen, "_ButtonLoginForm.loginForm");
  var mounted = dart.privateName(login_screen, "_ButtonLoginForm.mounted");
  var ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  var ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  var ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  var ProgressIndicator_color = dart.privateName(progress_indicator, "ProgressIndicator.color");
  var ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  var ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  var CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  var CircularProgressIndicator__indicatorType = dart.privateName(progress_indicator, "CircularProgressIndicator._indicatorType");
  login_screen._ButtonLoginForm = class _ButtonLoginForm extends framework.StatelessWidget {
    get loginForm() {
      return this[loginForm$];
    }
    set loginForm(value) {
      super.loginForm = value;
    }
    get mounted() {
      return this[mounted];
    }
    set mounted(value) {
      super.mounted = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let loginForm = opts && 'loginForm' in opts ? opts.loginForm : null;
      return new login_screen._ButtonLoginForm.new({key: key, loginForm: loginForm, $creationLocationd_0dea112b090073317d4: C[75] || CT.C75});
    }
    build(context) {
      return new basic.SizedBox.new({width: 200.0, child: new elevated_button.ElevatedButton.new({onPressed: this.loginForm.isLoading ? null : dart.fn(() => async.async(dart.void, (function*() {
            if (!this.loginForm.isValidForm()) return;
            focus_scope.FocusScope.of(context).unfocus();
            let person = new person$.Person.new({email: this.loginForm.email, password: this.loginForm.password});
            this.loginForm.isLoading = true;
            let masterResponse = (yield new login_api.MyTicketLogin.new().loginPerson(person));
            if (masterResponse.status === 101) {
              this.loginForm.isLoading = false;
              cool_alert.CoolAlert.show({context: context, type: cool_alert.CoolAlertType.error, text: masterResponse.message, backgroundColor: app_colors.AppColors.primaryColor, onConfirmBtnTap: dart.fn(() => navigator.Navigator.pop(T.ObjectN(), context), T.VoidTovoid())});
            } else {
              this.loginForm.personResponse = dart.nullCheck(masterResponse.data.person);
              if (!this.mounted) return;
              this.loginForm.isLoading = false;
              navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), context, "main_screen");
            }
          }).bind(this)), T.VoidToFutureOfvoid()), child: this.loginForm.isLoading ? new basic.Row.new({children: C[76] || CT.C76, $creationLocationd_0dea112b090073317d4: C[85] || CT.C85}) : new text.Text.new("Ingresar", {style: new text_style.TextStyle.new({color: theme$.Theme.of(context).colorScheme.onPrimary}), $creationLocationd_0dea112b090073317d4: C[86] || CT.C86}), $creationLocationd_0dea112b090073317d4: C[87] || CT.C87}), $creationLocationd_0dea112b090073317d4: C[88] || CT.C88});
    }
  };
  (login_screen._ButtonLoginForm.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let loginForm = opts && 'loginForm' in opts ? opts.loginForm : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[mounted] = true;
    this[loginForm$] = loginForm;
    login_screen._ButtonLoginForm.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen._ButtonLoginForm.prototype;
  dart.addTypeTests(login_screen._ButtonLoginForm);
  dart.addTypeCaches(login_screen._ButtonLoginForm);
  dart.setMethodSignature(login_screen._ButtonLoginForm, () => ({
    __proto__: dart.getMethods(login_screen._ButtonLoginForm.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_screen._ButtonLoginForm, I[0]);
  dart.setFieldSignature(login_screen._ButtonLoginForm, () => ({
    __proto__: dart.getFields(login_screen._ButtonLoginForm.__proto__),
    loginForm: dart.finalFieldType(login_from_provider.LoginFormProvider),
    mounted: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/my_ticket_care/screens/login/login_screen.dart", {
    "package:my_ticket_care/screens/login/login_screen.dart": login_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_screen.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/my_ticket_care/screens/login/login_screen.dart.lib.js"}');
  // Exports:
  return {
    screens__login__login_screen: login_screen
  };
}));

//# sourceMappingURL=login_screen.dart.lib.js.map
