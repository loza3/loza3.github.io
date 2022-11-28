define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/my_ticket_care/src/shared/models/person.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/my_ticket_care/src/login/presentation/widgets/background_widget.dart', 'packages/my_ticket_care/src/login/presentation/widgets/login_card.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/my_ticket_care/src/login/utils/form_validators.dart', 'packages/my_ticket_care/src/shared/shared_utilities/form_related.dart', 'packages/intl/src/intl/date_format.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/my_ticket_care/src/login/repository/login_alternatives.dart', 'packages/riverpod/src/state_controller.dart', 'packages/my_ticket_care/src/login/providers/user_data_provider.dart', 'packages/flutter/src/material/page.dart', 'packages/my_ticket_care/src/shared/shared_utilities/keep_logged_in.dart', 'packages/my_ticket_care/src/login/repository/login_repository.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter_facebook_auth/flutter_facebook_auth.dart', 'packages/google_sign_in/google_sign_in.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/material/tab_controller.dart', 'packages/flutter/src/widgets/preferred_size.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/my_ticket_care/src/search/presentation/search_results.dart', 'packages/my_ticket_care/src/user_info/presentation/user_info_bookings.dart', 'packages/flutter/src/painting/box_shadow.dart', 'packages/my_ticket_care/src/login/presentation/widgets/login_buttons.dart', 'packages/my_ticket_care/reusable/widgets/custom_sign_in_button.dart', 'packages/flutter_signin_button/button_list.dart', 'packages/my_ticket_care/src/login/presentation/register_google_screen.dart', 'packages/flutter/src/widgets/form.dart', 'packages/my_ticket_care/src/shared/shared_widgets/loading_dialog.dart', 'packages/flutter/src/material/checkbox_list_tile.dart', 'packages/riverpod/src/value_provider.dart'], (function load__packages__my_ticket_care__src__login__presentation__register_facebook_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__my_ticket_care__src__shared__models__person$46dart, packages__flutter__src__material__icon_button$46dart, packages__my_ticket_care__src__login__presentation__widgets__background_widget$46dart, packages__my_ticket_care__src__login__presentation__widgets__login_card$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__my_ticket_care__src__login__utils__form_validators$46dart, packages__my_ticket_care__src__shared__shared_utilities__form_related$46dart, packages__intl__src__intl__date_format$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__elevated_button$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__my_ticket_care__src__login__repository__login_alternatives$46dart, packages__riverpod__src__state_controller$46dart, packages__my_ticket_care__src__login__providers__user_data_provider$46dart, packages__flutter__src__material__page$46dart, packages__my_ticket_care__src__shared__shared_utilities__keep_logged_in$46dart, packages__my_ticket_care__src__login__repository__login_repository$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter_facebook_auth__flutter_facebook_auth$46dart, packages__google_sign_in__google_sign_in$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__material__tab_controller$46dart, packages__flutter__src__widgets__preferred_size$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__my_ticket_care__src__search__presentation__search_results$46dart, packages__my_ticket_care__src__user_info__presentation__user_info_bookings$46dart, packages__flutter__src__painting__box_shadow$46dart, packages__my_ticket_care__src__login__presentation__widgets__login_buttons$46dart, packages__my_ticket_care__reusable__widgets__custom_sign_in_button$46dart, packages__flutter_signin_button__button_list$46dart, packages__my_ticket_care__src__login__presentation__register_google_screen$46dart, packages__flutter__src__widgets__form$46dart, packages__my_ticket_care__src__shared__shared_widgets__loading_dialog$46dart, packages__flutter__src__material__checkbox_list_tile$46dart, packages__riverpod__src__value_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const binding = packages__flutter__src__widgets__title$46dart.src__widgets__binding;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const image = packages__flutter__src__widgets__title$46dart.src__widgets__image;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const editable_text = packages__flutter__src__widgets__title$46dart.src__widgets__editable_text;
  const person$ = packages__my_ticket_care__src__shared__models__person$46dart.src__shared__models__person;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const list_tile = packages__flutter__src__material__icon_button$46dart.src__material__list_tile;
  const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
  const tabs = packages__flutter__src__material__icon_button$46dart.src__material__tabs;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const background_widget = packages__my_ticket_care__src__login__presentation__widgets__background_widget$46dart.src__login__presentation__widgets__background_widget;
  const login_card = packages__my_ticket_care__src__login__presentation__widgets__login_card$46dart.src__login__presentation__widgets__login_card;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const custom_text_form_field_widget = packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart.reusable__widgets__custom_text_form_field_widget;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const form_validators = packages__my_ticket_care__src__login__utils__form_validators$46dart.src__login__utils__form_validators;
  const form_related = packages__my_ticket_care__src__shared__shared_utilities__form_related$46dart.src__shared__shared_utilities__form_related;
  const date_format = packages__intl__src__intl__date_format$46dart.src__intl__date_format;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const login_alternatives = packages__my_ticket_care__src__login__repository__login_alternatives$46dart.src__login__repository__login_alternatives;
  const state_controller = packages__riverpod__src__state_controller$46dart.src__state_controller;
  const user_data_provider = packages__my_ticket_care__src__login__providers__user_data_provider$46dart.src__login__providers__user_data_provider;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const keep_logged_in = packages__my_ticket_care__src__shared__shared_utilities__keep_logged_in$46dart.src__shared__shared_utilities__keep_logged_in;
  const login_repository = packages__my_ticket_care__src__login__repository__login_repository$46dart.src__login__repository__login_repository;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const flutter_facebook_auth = packages__flutter_facebook_auth__flutter_facebook_auth$46dart.flutter_facebook_auth;
  const google_sign_in = packages__google_sign_in__google_sign_in$46dart.google_sign_in;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const tab_controller = packages__flutter__src__material__tab_controller$46dart.src__material__tab_controller;
  const preferred_size = packages__flutter__src__widgets__preferred_size$46dart.src__widgets__preferred_size;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const search_results = packages__my_ticket_care__src__search__presentation__search_results$46dart.src__search__presentation__search_results;
  const user_info_bookings = packages__my_ticket_care__src__user_info__presentation__user_info_bookings$46dart.src__user_info__presentation__user_info_bookings;
  const box_shadow = packages__flutter__src__painting__box_shadow$46dart.src__painting__box_shadow;
  const login_buttons = packages__my_ticket_care__src__login__presentation__widgets__login_buttons$46dart.src__login__presentation__widgets__login_buttons;
  const custom_sign_in_button = packages__my_ticket_care__reusable__widgets__custom_sign_in_button$46dart.reusable__widgets__custom_sign_in_button;
  const button_list = packages__flutter_signin_button__button_list$46dart.button_list;
  const register_google_screen = packages__my_ticket_care__src__login__presentation__register_google_screen$46dart.src__login__presentation__register_google_screen;
  const form = packages__flutter__src__widgets__form$46dart.src__widgets__form;
  const loading_dialog = packages__my_ticket_care__src__shared__shared_widgets__loading_dialog$46dart.src__shared__shared_widgets__loading_dialog;
  const checkbox_list_tile = packages__flutter__src__material__checkbox_list_tile$46dart.src__material__checkbox_list_tile;
  const state_provider = packages__riverpod__src__value_provider$46dart.src__state_provider;
  var register_facebook_screen = Object.create(dart.library);
  var splash_screen = Object.create(dart.library);
  var user_info_profile = Object.create(dart.library);
  var home = Object.create(dart.library);
  var login_screen = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    StateControllerOfPerson: () => (T.StateControllerOfPerson = dart.constFn(state_controller.StateController$(person$.Person)))(),
    BuildContextToHomeScreen: () => (T.BuildContextToHomeScreen = dart.constFn(dart.fnType(home.HomeScreen, [framework.BuildContext])))(),
    RouteTobool: () => (T.RouteTobool = dart.constFn(dart.fnType(core.bool, [navigator.Route])))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetRefAndWidgetNToElevatedButton: () => (T.BuildContextAndWidgetRefAndWidgetNToElevatedButton = dart.constFn(dart.fnType(elevated_button.ElevatedButton, [framework.BuildContext, consumer.WidgetRef, T.WidgetN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    DurationTovoid: () => (T.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    BuildContextToLoginScreen: () => (T.BuildContextToLoginScreen = dart.constFn(dart.fnType(login_screen.LoginScreen, [framework.BuildContext])))(),
    PersonToNull: () => (T.PersonToNull = dart.constFn(dart.fnType(core.Null, [person$.Person])))(),
    StringNToNull: () => (T.StringNToNull = dart.constFn(dart.fnType(core.Null, [T.StringN()])))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    BuildContextToSplashScreen: () => (T.BuildContextToSplashScreen = dart.constFn(dart.fnType(splash_screen.SplashScreen, [framework.BuildContext])))(),
    voidToNull: () => (T.voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))(),
    BuildContextToRegisterGoogleScreen: () => (T.BuildContextToRegisterGoogleScreen = dart.constFn(dart.fnType(register_google_screen.RegisterGoogleScreen, [framework.BuildContext])))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    VoidToFutureOfNull: () => (T.VoidToFutureOfNull = dart.constFn(dart.fnType(T.FutureOfNull(), [])))(),
    BuildContextToRegisterFacebookScreen: () => (T.BuildContextToRegisterFacebookScreen = dart.constFn(dart.fnType(register_facebook_screen.RegisterFacebookScreen, [framework.BuildContext])))(),
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    StateControllerOfbool: () => (T.StateControllerOfbool = dart.constFn(state_controller.StateController$(core.bool)))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    boolNTovoid: () => (T.boolNTovoid = dart.constFn(dart.fnType(dart.void, [T.boolN()])))(),
    StateProviderOfbool: () => (T.StateProviderOfbool = dart.constFn(state_provider.StateProvider$(core.bool)))(),
    StateProviderRefOfbool: () => (T.StateProviderRefOfbool = dart.constFn(state_provider.StateProviderRef$(core.bool)))(),
    StateProviderRefOfboolTobool: () => (T.StateProviderRefOfboolTobool = dart.constFn(dart.fnType(core.bool, [T.StateProviderRefOfbool()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RegisterFacebookScreen",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 120,
        [EdgeInsets_left]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 10
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[5] || CT.C5,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[8] || CT.C8,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C9() {
      return C[9] = dart.fn(form_validators.Validator.validatorEmail, T.StringNToStringN());
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C11() {
      return C[11] = dart.fn(form_validators.Validator.validatorName, T.StringNToStringN());
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C13() {
      return C[13] = dart.fn(form_validators.Validator.validatorPhoneNumer, T.StringNToStringN());
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 13,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GenderPickerWidget2",
        [_Location_column]: 13,
        [_Location_line]: 99,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 103,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[19] || CT.C19,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DatePickerWidget2",
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 110,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
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
        [_Location_name]: "Text",
        [_Location_column]: 34,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
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
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Volver"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 26,
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 17,
        [_Location_line]: 114,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 23,
        [_Location_line]: 122,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[28] || CT.C28,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 15
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HomeScreen",
        [_Location_column]: 63,
        [_Location_line]: 141,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: home.HomeScreen.prototype,
        [Widget__location]: C[30] || CT.C30,
        [Widget_key]: null
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 36,
        [_Location_line]: 145,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[32] || CT.C32,
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
        [Text_data]: "Crear"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 28,
        [_Location_line]: 125,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 26,
        [_Location_line]: 124,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 17,
        [_Location_line]: 123,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 13,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginCard",
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AuthBackground",
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_facebook_screen.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SplashScreen",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginScreen",
        [_Location_column]: 41,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: login_screen.LoginScreen.prototype,
        [Widget__location]: C[42] || CT.C42,
        [Widget_key]: null
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HomeScreen",
        [_Location_column]: 41,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: home.HomeScreen.prototype,
        [Widget__location]: C[44] || CT.C44,
        [Widget_key]: null
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/splash_screen.dart"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoProfileScreen",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[53] || CT.C53,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserProfileIconWidget",
        [_Location_column]: 21,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: user_info_profile.UserProfileIconWidget.prototype,
        [Widget__location]: C[55] || CT.C55,
        [Widget_key]: null
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserProfileFacebookWidget",
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoProfileTileWidget",
        [_Location_column]: 9,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoProfileTileWidget",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoProfileTileWidget",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoProfileTileWidget",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoProfileTileWidget",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 40
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SplashScreen",
        [_Location_column]: 53,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: splash_screen.SplashScreen.prototype,
        [Widget__location]: C[64] || CT.C64,
        [Widget_key]: null
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 71,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
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
        [Text_data]: "Cerrar sesión"
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 18,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoProfileTileWidget",
        [_Location_column]: 9,
        [_Location_line]: 80,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 0
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 16,
        [_Location_line]: 96,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 16,
        [_Location_line]: 94,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 14,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 17,
        [_Location_line]: 99,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 12,
        [_Location_line]: 93,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserProfileIconWidget",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 20,
        [_Location_line]: 118,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58513
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[79] || CT.C79,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C[80] || CT.C80,
        [Icon_size]: 150,
        [Icon_icon]: C[81] || CT.C81
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 113,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserProfileFacebookWidget",
        [_Location_column]: 9,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 24,
        [_Location_line]: 139,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 16,
        [_Location_line]: 136,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipOval",
        [_Location_column]: 14,
        [_Location_line]: 135,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 12,
        [_Location_line]: 134,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_profile.dart"
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HomeScreen",
        [_Location_column]: 9,
        [_Location_line]: 8,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HomeTitleWidget",
        [_Location_column]: 17,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: home.HomeTitleWidget.prototype,
        [Widget__location]: C[91] || CT.C91,
        [Widget_key]: null
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SettingsButton",
        [_Location_column]: 17,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: home.SettingsButton.prototype,
        [Widget__location]: C[93] || CT.C93,
        [Widget_key]: null
      });
    },
    get C89() {
      return C[89] = dart.constList([C[90] || CT.C90, C[92] || CT.C92], framework.Widget);
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 20,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppBar",
        [_Location_column]: 18,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PreferredSize",
        [_Location_column]: 17,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NavigationBarTab",
        [_Location_column]: 36,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: home.NavigationBarTab.prototype,
        [Widget__location]: C[98] || CT.C98,
        [Widget_key]: null
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TabBarView",
        [_Location_column]: 21,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchResultsScreen",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: search_results.SearchResultsScreen.prototype,
        [Widget__location]: C[105] || CT.C105,
        [Widget_key]: null
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoBookingsScreen",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: user_info_bookings.UserInfoBookingsScreen.prototype,
        [Widget__location]: C[107] || CT.C107,
        [Widget_key]: null
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoProfileScreen",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: user_info_profile.UserInfoProfileScreen.prototype,
        [Widget__location]: C[109] || CT.C109,
        [Widget_key]: null
      });
    },
    get C103() {
      return C[103] = dart.constList([C[104] || CT.C104, C[106] || CT.C106, C[108] || CT.C108], framework.Widget);
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: tabs.TabBarView.prototype,
        [Widget__location]: C[100] || CT.C100,
        [Widget_key]: null,
        [TabBarView_clipBehavior]: C[101] || CT.C101,
        [TabBarView_viewportFraction]: 1,
        [TabBarView_dragStartBehavior]: C[102] || CT.C102,
        [TabBarView_physics]: null,
        [TabBarView_children]: C[103] || CT.C103,
        [TabBarView_controller]: null
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 14,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C111() {
      return C[111] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTabController",
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C112() {
      return C[112] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NavigationBarTab",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C115() {
      return C[115] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0.5,
        [OffsetBase__dx]: 0
      });
    },
    get C116() {
      return C[116] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1107296256
      });
    },
    get C117() {
      return C[117] = dart.const({
        __proto__: ui.BlurStyle.prototype,
        [_Enum__name]: "normal",
        [_Enum_index]: 0
      });
    },
    get C114() {
      return C[114] = dart.const({
        __proto__: box_shadow.BoxShadow.prototype,
        [Shadow_blurRadius]: 5,
        [Shadow_offset]: C[115] || CT.C115,
        [Shadow_color]: C[116] || CT.C116,
        [BoxShadow_blurStyle]: C[117] || CT.C117,
        [BoxShadow_spreadRadius]: 0
      });
    },
    get C113() {
      return C[113] = dart.constList([C[114] || CT.C114], box_shadow.BoxShadow);
    },
    get C120() {
      return C[120] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Tab",
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C121() {
      return C[121] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C123() {
      return C[123] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 33,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C124() {
      return C[124] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58727
      });
    },
    get C122() {
      return C[122] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[123] || CT.C123,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[124] || CT.C124
      });
    },
    get C119() {
      return C[119] = dart.const({
        __proto__: tabs.Tab.prototype,
        [Widget__location]: C[120] || CT.C120,
        [Widget_key]: null,
        [Tab_height]: 70,
        [Tab_iconMargin]: C[121] || CT.C121,
        [Tab_icon]: C[122] || CT.C122,
        [Tab_child]: null,
        [Tab_text]: "Buscar"
      });
    },
    get C126() {
      return C[126] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Tab",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C128() {
      return C[128] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 33,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C129() {
      return C[129] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57961
      });
    },
    get C127() {
      return C[127] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[128] || CT.C128,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[129] || CT.C129
      });
    },
    get C125() {
      return C[125] = dart.const({
        __proto__: tabs.Tab.prototype,
        [Widget__location]: C[126] || CT.C126,
        [Widget_key]: null,
        [Tab_height]: 70,
        [Tab_iconMargin]: C[121] || CT.C121,
        [Tab_icon]: C[127] || CT.C127,
        [Tab_child]: null,
        [Tab_text]: "Reservas"
      });
    },
    get C131() {
      return C[131] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Tab",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C133() {
      return C[133] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 33,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C132() {
      return C[132] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[133] || CT.C133,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[81] || CT.C81
      });
    },
    get C130() {
      return C[130] = dart.const({
        __proto__: tabs.Tab.prototype,
        [Widget__location]: C[131] || CT.C131,
        [Widget_key]: null,
        [Tab_height]: 70,
        [Tab_iconMargin]: C[121] || CT.C121,
        [Tab_icon]: C[132] || CT.C132,
        [Tab_child]: null,
        [Tab_text]: "Perfil"
      });
    },
    get C118() {
      return C[118] = dart.constList([C[119] || CT.C119, C[125] || CT.C125, C[130] || CT.C130], framework.Widget);
    },
    get C134() {
      return C[134] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TabBar",
        [_Location_column]: 14,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C135() {
      return C[135] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C136() {
      return C[136] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SettingsButton",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C138() {
      return C[138] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 21,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C139() {
      return C[139] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58751
      });
    },
    get C137() {
      return C[137] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[138] || CT.C138,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 30,
        [Icon_icon]: C[139] || CT.C139
      });
    },
    get C140() {
      return C[140] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 12,
        [_Location_line]: 88,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C141() {
      return C[141] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HomeTitleWidget",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C142() {
      return C[142] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C144() {
      return C[144] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C143() {
      return C[143] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[144] || CT.C144,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C145() {
      return C[145] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 9,
        [_Location_line]: 116,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C146() {
      return C[146] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 106,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/home/presentation/home.dart"
      });
    },
    get C147() {
      return C[147] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginScreen",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C149() {
      return C[149] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C148() {
      return C[148] = dart.const({
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
        [TextStyle_fontWeight]: C[149] || CT.C149,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C151() {
      return C[151] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C150() {
      return C[150] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[151] || CT.C151,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C152() {
      return C[152] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C154() {
      return C[154] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 48,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C153() {
      return C[153] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[154] || CT.C154,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C156() {
      return C[156] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginForm",
        [_Location_column]: 19,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C155() {
      return C[155] = dart.const({
        __proto__: login_screen.LoginForm.prototype,
        [Widget__location]: C[156] || CT.C156,
        [Widget_key]: null
      });
    },
    get C158() {
      return C[158] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "KeepLoggedInWidget",
        [_Location_column]: 19,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C157() {
      return C[157] = dart.const({
        __proto__: login_screen.KeepLoggedInWidget.prototype,
        [Widget__location]: C[158] || CT.C158,
        [Widget_key]: null
      });
    },
    get C160() {
      return C[160] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ForgottenPassword",
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C159() {
      return C[159] = dart.const({
        __proto__: login_buttons.ForgottenPassword.prototype,
        [Widget__location]: C[160] || CT.C160,
        [Widget_key]: null
      });
    },
    get C162() {
      return C[162] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C161() {
      return C[161] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[162] || CT.C162,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 30
      });
    },
    get C164() {
      return C[164] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 53,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C163() {
      return C[163] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[164] || CT.C164,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C166() {
      return C[166] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 19,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C167() {
      return C[167] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C165() {
      return C[165] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[166] || CT.C166,
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
        [Text_textAlign]: C[167] || CT.C167,
        [Text_strutStyle]: null,
        [Text_style]: C[148] || CT.C148,
        [Text_textSpan]: null,
        [Text_data]: "O iniciar sesión con:"
      });
    },
    get C169() {
      return C[169] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignUpGoogle",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C168() {
      return C[168] = dart.const({
        __proto__: login_screen.SignUpGoogle.prototype,
        [Widget__location]: C[169] || CT.C169,
        [Widget_key]: null
      });
    },
    get C171() {
      return C[171] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignUpFacebook",
        [_Location_column]: 19,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C170() {
      return C[170] = dart.const({
        __proto__: login_screen.SignUpFacebook.prototype,
        [Widget__location]: C[171] || CT.C171,
        [Widget_key]: null
      });
    },
    get C173() {
      return C[173] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C172() {
      return C[172] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[173] || CT.C173,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C174() {
      return C[174] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginCard",
        [_Location_column]: 16,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C175() {
      return C[175] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AuthBackground",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C176() {
      return C[176] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C177() {
      return C[177] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignUpGoogle",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C178() {
      return C[178] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C180() {
      return C[180] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HomeScreen",
        [_Location_column]: 59,
        [_Location_line]: 112,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C179() {
      return C[179] = dart.const({
        __proto__: home.HomeScreen.prototype,
        [Widget__location]: C[180] || CT.C180,
        [Widget_key]: null
      });
    },
    get C181() {
      return C[181] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RegisterGoogleScreen",
        [_Location_column]: 35,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C182() {
      return C[182] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomSignInButton",
        [_Location_column]: 12,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C183() {
      return C[183] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignUpFacebook",
        [_Location_column]: 9,
        [_Location_line]: 136,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C185() {
      return C[185] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HomeScreen",
        [_Location_column]: 59,
        [_Location_line]: 166,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C184() {
      return C[184] = dart.const({
        __proto__: home.HomeScreen.prototype,
        [Widget__location]: C[185] || CT.C185,
        [Widget_key]: null
      });
    },
    get C186() {
      return C[186] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RegisterFacebookScreen",
        [_Location_column]: 35,
        [_Location_line]: 173,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C187() {
      return C[187] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomSignInButton",
        [_Location_column]: 12,
        [_Location_line]: 142,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C188() {
      return C[188] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginForm",
        [_Location_column]: 9,
        [_Location_line]: 186,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C189() {
      return C[189] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 30
      });
    },
    get C190() {
      return C[190] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 13,
        [_Location_line]: 208,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C191() {
      return C[191] = dart.fn(form_validators.Validator.validatorPassword, T.StringNToStringN());
    },
    get C192() {
      return C[192] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 13,
        [_Location_line]: 218,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C194() {
      return C[194] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 229,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C193() {
      return C[193] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[194] || CT.C194,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C195() {
      return C[195] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 26,
        [_Location_line]: 233,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C196() {
      return C[196] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 17,
        [_Location_line]: 232,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C198() {
      return C[198] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 23,
        [_Location_line]: 235,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C197() {
      return C[197] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[198] || CT.C198,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C200() {
      return C[200] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 23,
        [_Location_line]: 236,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C202() {
      return C[202] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RegisterButton",
        [_Location_column]: 26,
        [_Location_line]: 237,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C201() {
      return C[201] = dart.const({
        __proto__: login_buttons.RegisterButton.prototype,
        [Widget__location]: C[202] || CT.C202,
        [Widget_key]: null
      });
    },
    get C203() {
      return C[203] = dart.const({
        __proto__: flex.FlexFit.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C199() {
      return C[199] = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget__location]: C[200] || CT.C200,
        [Widget_key]: null,
        [ProxyWidget_child]: C[201] || CT.C201,
        [Flexible_fit]: C[203] || CT.C203,
        [Flexible_flex]: 1
      });
    },
    get C204() {
      return C[204] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 13,
        [_Location_line]: 230,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C205() {
      return C[205] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 206,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C206() {
      return C[206] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 204,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C207() {
      return C[207] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Form",
        [_Location_column]: 12,
        [_Location_line]: 201,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C209() {
      return C[209] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HomeScreen",
        [_Location_column]: 63,
        [_Location_line]: 273,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C208() {
      return C[208] = dart.const({
        __proto__: home.HomeScreen.prototype,
        [Widget__location]: C[209] || CT.C209,
        [Widget_key]: null
      });
    },
    get C210() {
      return C[210] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginButton",
        [_Location_column]: 12,
        [_Location_line]: 248,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C211() {
      return C[211] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "KeepLoggedInWidget",
        [_Location_column]: 9,
        [_Location_line]: 287,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C212() {
      return C[212] = dart.const({
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
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C213() {
      return C[213] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 25
      });
    },
    get C215() {
      return C[215] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 317,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C214() {
      return C[214] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[215] || CT.C215,
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
        [Text_style]: C[212] || CT.C212,
        [Text_textSpan]: null,
        [Text_data]: "Mantener sesión iniciada"
      });
    },
    get C216() {
      return C[216] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CheckboxListTile",
        [_Location_column]: 14,
        [_Location_line]: 303,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    },
    get C217() {
      return C[217] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 301,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/login_screen.dart"
      });
    }
  }, false);
  var C = Array(218).fill(void 0);
  var I = [
    "package:my_ticket_care/src/login/presentation/register_facebook_screen.dart",
    "package:my_ticket_care/src/login/presentation/splash_screen.dart",
    "package:my_ticket_care/src/user_info/presentation/user_info_profile.dart",
    "package:my_ticket_care/src/home/presentation/home.dart",
    "package:my_ticket_care/src/login/presentation/login_screen.dart"
  ];
  var person$0 = dart.privateName(register_facebook_screen, "RegisterFacebookScreen.person");
  var fbToken$ = dart.privateName(register_facebook_screen, "RegisterFacebookScreen.fbToken");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  register_facebook_screen.RegisterFacebookScreen = class RegisterFacebookScreen extends framework.StatefulWidget {
    get person() {
      return this[person$0];
    }
    set person(value) {
      super.person = value;
    }
    get fbToken() {
      return this[fbToken$];
    }
    set fbToken(value) {
      super.fbToken = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let person = opts && 'person' in opts ? opts.person : null;
      let fbToken = opts && 'fbToken' in opts ? opts.fbToken : null;
      return new register_facebook_screen.RegisterFacebookScreen.new({key: key, person: person, fbToken: fbToken, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new register_facebook_screen._RegisterFacebookScreenState.new();
    }
  };
  (register_facebook_screen.RegisterFacebookScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let person = opts && 'person' in opts ? opts.person : null;
    let fbToken = opts && 'fbToken' in opts ? opts.fbToken : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[person$0] = person;
    this[fbToken$] = fbToken;
    register_facebook_screen.RegisterFacebookScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = register_facebook_screen.RegisterFacebookScreen.prototype;
  dart.addTypeTests(register_facebook_screen.RegisterFacebookScreen);
  dart.addTypeCaches(register_facebook_screen.RegisterFacebookScreen);
  dart.setMethodSignature(register_facebook_screen.RegisterFacebookScreen, () => ({
    __proto__: dart.getMethods(register_facebook_screen.RegisterFacebookScreen.__proto__),
    createState: dart.fnType(framework.State$(register_facebook_screen.RegisterFacebookScreen), [])
  }));
  dart.setLibraryUri(register_facebook_screen.RegisterFacebookScreen, I[0]);
  dart.setFieldSignature(register_facebook_screen.RegisterFacebookScreen, () => ({
    __proto__: dart.getFields(register_facebook_screen.RegisterFacebookScreen.__proto__),
    person: dart.finalFieldType(person$.Person),
    fbToken: dart.finalFieldType(core.String)
  }));
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
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
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  register_facebook_screen._RegisterFacebookScreenState = class _RegisterFacebookScreenState extends framework.State$(register_facebook_screen.RegisterFacebookScreen) {
    build(context) {
      this.userData = this.widget.person;
      let colorScheme = theme.Theme.of(context).colorScheme;
      let titleStyle = dart.nullCheck(theme.Theme.of(context).textTheme.headline4).copyWith({color: colorScheme.onBackground});
      let subtitleStyle = theme.Theme.of(context).textTheme.headline6;
      let infoStyle = dart.nullCheck(theme.Theme.of(context).textTheme.subtitle1).copyWith({color: colorScheme.onBackground.withAlpha(150)});
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, body: new background_widget.AuthBackground.new({child: new login_card.LoginCard.new({margin: C[1] || CT.C1, padding: C[2] || CT.C2, children: T.JSArrayOfWidget().of([new text.Text.new("Inicio con Facebook", {textAlign: ui.TextAlign.center, style: titleStyle, maxLines: 1, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), C[4] || CT.C4, new text.Text.new("Verifica tu información para registrarte con MyTicket", {textAlign: ui.TextAlign.center, style: infoStyle, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), C[7] || CT.C7, new custom_text_form_field_widget.CustomTextFormField.new({enabled: false, initialValue: this.widget.person.email, hintText: "example@gmail.com", labelText: "Email", icon: icons.Icons.email_outlined, keyboardType: text_input.TextInputType.emailAddress, validator: C[9] || CT.C9, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(n => this.userData.personName = n, T.StringToString()), hintText: "", initialValue: this.widget.person.personName, labelText: "Nombre completo", icon: icons.Icons.people, keyboardType: text_input.TextInputType.name_, validator: C[11] || CT.C11, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(m => this.userData.mobile = m, T.StringToString()), initialValue: this.widget.person.mobile, hintText: "73155648", labelText: "Telefono", icon: icons.Icons.numbers_outlined, keyboardType: text_input.TextInputType.phone, validator: C[13] || CT.C13, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), new text.Text.new("Genero", {style: subtitleStyle, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), new form_related.GenderPickerWidget2.new({person: this.userData, initialValue: form_related.Gender.values[$_get](this.widget.person.sex), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), new text.Text.new("Fecha de nacimiento", {style: subtitleStyle, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), C[18] || CT.C18, new form_related.DatePickerWidget2.new({person: this.widget.person, initialDate: new date_format.DateFormat.new("dd/MM/yyyy").parse(this.widget.person.birthday), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), C[21] || CT.C21, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                        navigator.Navigator.pop(T.ObjectN(), context);
                      }, T.VoidTovoid()), child: C[23] || CT.C23, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26}), C[27] || CT.C27, new basic.Expanded.new({child: new consumer.Consumer.new({builder: dart.fn((context, ref, _) => new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colorScheme.secondary}), onPressed: dart.fn(() => async.async(dart.void, (function*() {
                          let api = new login_alternatives.LoginAlternativeRepositoryHttp.new();
                          let newUser = (yield api.registerFacebook(this.userData, dart.nullCheck(this.userData.facebookId), this.widget.fbToken));
                          ref.read(T.StateControllerOfPerson(), user_data_provider.userDataProvider.state).state = newUser;
                          async.Future.delayed(core.Duration.zero).then(core.Null, dart.fn(_ => {
                            navigator.Navigator.pushAndRemoveUntil(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(builder => C[29] || CT.C29, T.BuildContextToHomeScreen())}), dart.fn(route => route.isFirst, T.RouteTobool()));
                          }, T.dynamicToNull()));
                        }).bind(this)), T.VoidToFutureOfvoid()), child: C[31] || CT.C31, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33}), T.BuildContextAndWidgetRefAndWidgetNToElevatedButton()), $creationLocationd_0dea112b090073317d4: C[34] || CT.C34}), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35})]), $creationLocationd_0dea112b090073317d4: C[36] || CT.C36})]), $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38}), $creationLocationd_0dea112b090073317d4: C[39] || CT.C39});
    }
    static ['_#new#tearOff']() {
      return new register_facebook_screen._RegisterFacebookScreenState.new();
    }
  };
  (register_facebook_screen._RegisterFacebookScreenState.new = function() {
    this.userData = person$.Person.empty();
    register_facebook_screen._RegisterFacebookScreenState.__proto__.new.call(this);
    ;
  }).prototype = register_facebook_screen._RegisterFacebookScreenState.prototype;
  dart.addTypeTests(register_facebook_screen._RegisterFacebookScreenState);
  dart.addTypeCaches(register_facebook_screen._RegisterFacebookScreenState);
  dart.setMethodSignature(register_facebook_screen._RegisterFacebookScreenState, () => ({
    __proto__: dart.getMethods(register_facebook_screen._RegisterFacebookScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(register_facebook_screen._RegisterFacebookScreenState, I[0]);
  dart.setFieldSignature(register_facebook_screen._RegisterFacebookScreenState, () => ({
    __proto__: dart.getFields(register_facebook_screen._RegisterFacebookScreenState.__proto__),
    userData: dart.fieldType(person$.Person)
  }));
  splash_screen.SplashScreen = class SplashScreen extends consumer.ConsumerStatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new splash_screen.SplashScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[40] || CT.C40});
    }
    createState() {
      return new splash_screen._SplashScreenState.new();
    }
  };
  (splash_screen.SplashScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    splash_screen.SplashScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = splash_screen.SplashScreen.prototype;
  dart.addTypeTests(splash_screen.SplashScreen);
  dart.addTypeCaches(splash_screen.SplashScreen);
  dart.setMethodSignature(splash_screen.SplashScreen, () => ({
    __proto__: dart.getMethods(splash_screen.SplashScreen.__proto__),
    createState: dart.fnType(consumer.ConsumerState$(splash_screen.SplashScreen), [])
  }));
  dart.setLibraryUri(splash_screen.SplashScreen, I[1]);
  var _checkUserIsLoggedIn = dart.privateName(splash_screen, "_checkUserIsLoggedIn");
  splash_screen._SplashScreenState = class _SplashScreenState extends consumer.ConsumerState$(splash_screen.SplashScreen) {
    initState() {
      super.initState();
      binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
        this[_checkUserIsLoggedIn]();
      }, T.DurationTovoid()));
    }
    [_checkUserIsLoggedIn]() {
      return async.async(dart.dynamic, (function* _checkUserIsLoggedIn() {
        let userId = (yield keep_logged_in.retrieveUserId());
        keep_logged_in.retrieveLoginToken().then(core.Null, dart.fn(token => {
          if (token == null || userId == null) {
            navigator.Navigator.pushReplacement(dart.dynamic, T.ObjectN(), this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[41] || CT.C41, T.BuildContextToLoginScreen())}));
            return;
          }
          this.action = "Iniciando sesión...";
          this.setState(dart.fn(() => {
          }, T.VoidTovoid()));
          let api = new login_repository.LoginRepositoryHTTP.new();
          api.getUserInformation(userId, token).then(core.Null, dart.fn(user => {
            this.ref.read(T.StateControllerOfPerson(), user_data_provider.userDataProvider.state).state = user;
            navigator.Navigator.pushReplacement(dart.dynamic, T.ObjectN(), this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[43] || CT.C43, T.BuildContextToHomeScreen())}));
          }, T.PersonToNull()));
        }, T.StringNToNull()));
      }).bind(this));
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let titleStyle = new text_style.TextStyle.new({fontSize: 40.0, color: colorScheme.background});
      let actionStyle = new text_style.TextStyle.new({fontSize: 25.0, color: colorScheme.background});
      return new scaffold.Scaffold.new({body: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColor().of([colorScheme.primary, colorScheme.secondary])})}), height: 1 / 0, width: 1 / 0, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.class_outlined, {color: colorScheme.background, size: 75.0, $creationLocationd_0dea112b090073317d4: C[45] || CT.C45}), new text.Text.new("MyTicket", {style: titleStyle, $creationLocationd_0dea112b090073317d4: C[46] || CT.C46}), new text.Text.new(this.action, {style: actionStyle, $creationLocationd_0dea112b090073317d4: C[47] || CT.C47})]), $creationLocationd_0dea112b090073317d4: C[48] || CT.C48}), $creationLocationd_0dea112b090073317d4: C[49] || CT.C49}), $creationLocationd_0dea112b090073317d4: C[50] || CT.C50});
    }
    static ['_#new#tearOff']() {
      return new splash_screen._SplashScreenState.new();
    }
  };
  (splash_screen._SplashScreenState.new = function() {
    this.action = "";
    splash_screen._SplashScreenState.__proto__.new.call(this);
    ;
  }).prototype = splash_screen._SplashScreenState.prototype;
  dart.addTypeTests(splash_screen._SplashScreenState);
  dart.addTypeCaches(splash_screen._SplashScreenState);
  dart.setMethodSignature(splash_screen._SplashScreenState, () => ({
    __proto__: dart.getMethods(splash_screen._SplashScreenState.__proto__),
    [_checkUserIsLoggedIn]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(splash_screen._SplashScreenState, I[1]);
  dart.setFieldSignature(splash_screen._SplashScreenState, () => ({
    __proto__: dart.getFields(splash_screen._SplashScreenState.__proto__),
    action: dart.fieldType(core.String)
  }));
  user_info_profile.UserInfoProfileScreen = class UserInfoProfileScreen extends consumer.ConsumerWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new user_info_profile.UserInfoProfileScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[51] || CT.C51});
    }
    build(context, ref) {
      let person = ref.watch(person$.Person, user_data_provider.userDataProvider);
      return new scroll_view.ListView.new({children: T.JSArrayOfWidget().of([C[52] || CT.C52, person.facebookProfilePic == null ? C[54] || CT.C54 : new user_info_profile.UserProfileFacebookWidget.new({image: dart.nullCheck(person.facebookProfilePic), $creationLocationd_0dea112b090073317d4: C[56] || CT.C56}), new user_info_profile.UserInfoProfileTileWidget.new({title: "Nombre", subtitle: person.personName, iconData: icons.Icons.person, $creationLocationd_0dea112b090073317d4: C[57] || CT.C57}), new user_info_profile.UserInfoProfileTileWidget.new({title: "Correo electrónico", subtitle: person.email, iconData: icons.Icons.email, $creationLocationd_0dea112b090073317d4: C[58] || CT.C58}), new user_info_profile.UserInfoProfileTileWidget.new({title: "Teléfono", subtitle: person.mobile, iconData: icons.Icons.phone, $creationLocationd_0dea112b090073317d4: C[59] || CT.C59}), new user_info_profile.UserInfoProfileTileWidget.new({title: "Fecha de nacimiento", subtitle: person.birthday, iconData: icons.Icons.cake, $creationLocationd_0dea112b090073317d4: C[60] || CT.C60}), new user_info_profile.UserInfoProfileTileWidget.new({title: "Genero", subtitle: person.sex === 0 ? "Masculino" : "Femenino", iconData: person.sex === 0 ? icons.Icons.male : icons.Icons.female, $creationLocationd_0dea112b090073317d4: C[61] || CT.C61}), new basic.Padding.new({padding: C[62] || CT.C62, child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => async.async(dart.void, function*() {
                if (person.authMethod === person$.AuthMethod.facebook) {
                  yield flutter_facebook_auth.FacebookAuth.i.logOut();
                }
                let googleSignIn = new google_sign_in.GoogleSignIn.new();
                let isSignedIn = (yield googleSignIn.isSignedIn());
                if (isSignedIn) {
                  yield googleSignIn.disconnect();
                  yield googleSignIn.signOut();
                }
                keep_logged_in.logOutDeleteToken().then(core.Null, dart.fn(_ => {
                  navigator.Navigator.pushReplacement(dart.dynamic, T.ObjectN(), context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[63] || CT.C63, T.BuildContextToSplashScreen())}));
                  ref.read(T.StateControllerOfPerson(), user_data_provider.userDataProvider.state).state = person$.Person.empty();
                }, T.voidToNull()));
              }), T.VoidToFutureOfvoid()), child: C[65] || CT.C65, $creationLocationd_0dea112b090073317d4: C[67] || CT.C67}), $creationLocationd_0dea112b090073317d4: C[68] || CT.C68})]), $creationLocationd_0dea112b090073317d4: C[69] || CT.C69});
    }
  };
  (user_info_profile.UserInfoProfileScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    user_info_profile.UserInfoProfileScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_profile.UserInfoProfileScreen.prototype;
  dart.addTypeTests(user_info_profile.UserInfoProfileScreen);
  dart.addTypeCaches(user_info_profile.UserInfoProfileScreen);
  dart.setMethodSignature(user_info_profile.UserInfoProfileScreen, () => ({
    __proto__: dart.getMethods(user_info_profile.UserInfoProfileScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef])
  }));
  dart.setLibraryUri(user_info_profile.UserInfoProfileScreen, I[2]);
  var title$ = dart.privateName(user_info_profile, "UserInfoProfileTileWidget.title");
  var subtitle$ = dart.privateName(user_info_profile, "UserInfoProfileTileWidget.subtitle");
  var iconData$ = dart.privateName(user_info_profile, "UserInfoProfileTileWidget.iconData");
  user_info_profile.UserInfoProfileTileWidget = class UserInfoProfileTileWidget extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      super.subtitle = value;
    }
    get iconData() {
      return this[iconData$];
    }
    set iconData(value) {
      super.iconData = value;
    }
    static ['_#new#tearOff'](opts) {
      let title = opts && 'title' in opts ? opts.title : null;
      let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
      let iconData = opts && 'iconData' in opts ? opts.iconData : null;
      let key = opts && 'key' in opts ? opts.key : null;
      return new user_info_profile.UserInfoProfileTileWidget.new({title: title, subtitle: subtitle, iconData: iconData, key: key, $creationLocationd_0dea112b090073317d4: C[70] || CT.C70});
    }
    build(context) {
      return new list_tile.ListTile.new({leading: new basic.Padding.new({padding: C[71] || CT.C71, child: new icon.Icon.new(this.iconData, {$creationLocationd_0dea112b090073317d4: C[72] || CT.C72}), $creationLocationd_0dea112b090073317d4: C[73] || CT.C73}), title: new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C[74] || CT.C74}), subtitle: new text.Text.new(this.subtitle, {$creationLocationd_0dea112b090073317d4: C[75] || CT.C75}), $creationLocationd_0dea112b090073317d4: C[76] || CT.C76});
    }
  };
  (user_info_profile.UserInfoProfileTileWidget.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let iconData = opts && 'iconData' in opts ? opts.iconData : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[subtitle$] = subtitle;
    this[iconData$] = iconData;
    user_info_profile.UserInfoProfileTileWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_profile.UserInfoProfileTileWidget.prototype;
  dart.addTypeTests(user_info_profile.UserInfoProfileTileWidget);
  dart.addTypeCaches(user_info_profile.UserInfoProfileTileWidget);
  dart.setMethodSignature(user_info_profile.UserInfoProfileTileWidget, () => ({
    __proto__: dart.getMethods(user_info_profile.UserInfoProfileTileWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(user_info_profile.UserInfoProfileTileWidget, I[2]);
  dart.setFieldSignature(user_info_profile.UserInfoProfileTileWidget, () => ({
    __proto__: dart.getFields(user_info_profile.UserInfoProfileTileWidget.__proto__),
    title: dart.finalFieldType(core.String),
    subtitle: dart.finalFieldType(core.String),
    iconData: dart.finalFieldType(icon_data.IconData)
  }));
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Color_value = dart.privateName(ui, "Color.value");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  user_info_profile.UserProfileIconWidget = class UserProfileIconWidget extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new user_info_profile.UserProfileIconWidget.new({key: key, $creationLocationd_0dea112b090073317d4: C[77] || CT.C77});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: colorScheme.primary}), child: C[78] || CT.C78, $creationLocationd_0dea112b090073317d4: C[82] || CT.C82});
    }
  };
  (user_info_profile.UserProfileIconWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    user_info_profile.UserProfileIconWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_profile.UserProfileIconWidget.prototype;
  dart.addTypeTests(user_info_profile.UserProfileIconWidget);
  dart.addTypeCaches(user_info_profile.UserProfileIconWidget);
  dart.setMethodSignature(user_info_profile.UserProfileIconWidget, () => ({
    __proto__: dart.getMethods(user_info_profile.UserProfileIconWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(user_info_profile.UserProfileIconWidget, I[2]);
  var image$ = dart.privateName(user_info_profile, "UserProfileFacebookWidget.image");
  user_info_profile.UserProfileFacebookWidget = class UserProfileFacebookWidget extends framework.StatelessWidget {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let image = opts && 'image' in opts ? opts.image : null;
      return new user_info_profile.UserProfileFacebookWidget.new({key: key, image: image, $creationLocationd_0dea112b090073317d4: C[83] || CT.C83});
    }
    build(context) {
      return new basic.Center.new({child: new basic.ClipOval.new({child: new basic.SizedBox.new({height: 150.0, width: 150.0, child: new image.Image.network(this.image, {height: 150.0, width: 150.0, fit: box_fit.BoxFit.fitHeight, $creationLocationd_0dea112b090073317d4: C[84] || CT.C84}), $creationLocationd_0dea112b090073317d4: C[85] || CT.C85}), $creationLocationd_0dea112b090073317d4: C[86] || CT.C86}), $creationLocationd_0dea112b090073317d4: C[87] || CT.C87});
    }
  };
  (user_info_profile.UserProfileFacebookWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[image$] = image;
    user_info_profile.UserProfileFacebookWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_profile.UserProfileFacebookWidget.prototype;
  dart.addTypeTests(user_info_profile.UserProfileFacebookWidget);
  dart.addTypeCaches(user_info_profile.UserProfileFacebookWidget);
  dart.setMethodSignature(user_info_profile.UserProfileFacebookWidget, () => ({
    __proto__: dart.getMethods(user_info_profile.UserProfileFacebookWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(user_info_profile.UserProfileFacebookWidget, I[2]);
  dart.setFieldSignature(user_info_profile.UserProfileFacebookWidget, () => ({
    __proto__: dart.getFields(user_info_profile.UserProfileFacebookWidget.__proto__),
    image: dart.finalFieldType(core.String)
  }));
  home.HomeScreen = class HomeScreen extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new home.HomeScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[88] || CT.C88});
    }
    createState() {
      return new home._HomeScreenState.new();
    }
  };
  (home.HomeScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.HomeScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.HomeScreen.prototype;
  dart.addTypeTests(home.HomeScreen);
  dart.addTypeCaches(home.HomeScreen);
  dart.setMethodSignature(home.HomeScreen, () => ({
    __proto__: dart.getMethods(home.HomeScreen.__proto__),
    createState: dart.fnType(framework.State$(home.HomeScreen), [])
  }));
  dart.setLibraryUri(home.HomeScreen, I[3]);
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var TabBarView_clipBehavior = dart.privateName(tabs, "TabBarView.clipBehavior");
  var TabBarView_viewportFraction = dart.privateName(tabs, "TabBarView.viewportFraction");
  var TabBarView_dragStartBehavior = dart.privateName(tabs, "TabBarView.dragStartBehavior");
  var TabBarView_physics = dart.privateName(tabs, "TabBarView.physics");
  var TabBarView_children = dart.privateName(tabs, "TabBarView.children");
  var TabBarView_controller = dart.privateName(tabs, "TabBarView.controller");
  home._HomeScreenState = class _HomeScreenState extends framework.State$(home.HomeScreen) {
    build(context) {
      return new tab_controller.DefaultTabController.new({length: 3, child: new scaffold.Scaffold.new({appBar: new preferred_size.PreferredSize.new({preferredSize: new ui.Size.fromHeight(media_query.MediaQuery.of(context).size.height * 0.09), child: new app_bar.AppBar.new({title: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.end, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: C[89] || CT.C89, $creationLocationd_0dea112b090073317d4: C[94] || CT.C94}), automaticallyImplyLeading: false, $creationLocationd_0dea112b090073317d4: C[95] || CT.C95}), $creationLocationd_0dea112b090073317d4: C[96] || CT.C96}), bottomNavigationBar: C[97] || CT.C97, body: C[99] || CT.C99, $creationLocationd_0dea112b090073317d4: C[110] || CT.C110}), $creationLocationd_0dea112b090073317d4: C[111] || CT.C111});
    }
    static ['_#new#tearOff']() {
      return new home._HomeScreenState.new();
    }
  };
  (home._HomeScreenState.new = function() {
    home._HomeScreenState.__proto__.new.call(this);
    ;
  }).prototype = home._HomeScreenState.prototype;
  dart.addTypeTests(home._HomeScreenState);
  dart.addTypeCaches(home._HomeScreenState);
  dart.setMethodSignature(home._HomeScreenState, () => ({
    __proto__: dart.getMethods(home._HomeScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home._HomeScreenState, I[3]);
  var Shadow_blurRadius = dart.privateName(ui, "Shadow.blurRadius");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var Shadow_offset = dart.privateName(ui, "Shadow.offset");
  var Shadow_color = dart.privateName(ui, "Shadow.color");
  var BoxShadow_blurStyle = dart.privateName(box_shadow, "BoxShadow.blurStyle");
  var BoxShadow_spreadRadius = dart.privateName(box_shadow, "BoxShadow.spreadRadius");
  var Tab_height = dart.privateName(tabs, "Tab.height");
  var Tab_iconMargin = dart.privateName(tabs, "Tab.iconMargin");
  var Tab_icon = dart.privateName(tabs, "Tab.icon");
  var Tab_child = dart.privateName(tabs, "Tab.child");
  var Tab_text = dart.privateName(tabs, "Tab.text");
  home.NavigationBarTab = class NavigationBarTab extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new home.NavigationBarTab.new({key: key, $creationLocationd_0dea112b090073317d4: C[112] || CT.C112});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: colorScheme.background, boxShadow: C[113] || CT.C113}), child: new tabs.TabBar.new({labelColor: colorScheme.primary, unselectedLabelColor: colorScheme.secondary.withAlpha(135), labelStyle: theme.Theme.of(context).textTheme.bodyLarge, tabs: C[118] || CT.C118, $creationLocationd_0dea112b090073317d4: C[134] || CT.C134}), $creationLocationd_0dea112b090073317d4: C[135] || CT.C135});
    }
  };
  (home.NavigationBarTab.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.NavigationBarTab.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.NavigationBarTab.prototype;
  dart.addTypeTests(home.NavigationBarTab);
  dart.addTypeCaches(home.NavigationBarTab);
  dart.setMethodSignature(home.NavigationBarTab, () => ({
    __proto__: dart.getMethods(home.NavigationBarTab.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.NavigationBarTab, I[3]);
  home.SettingsButton = class SettingsButton extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new home.SettingsButton.new({key: key, $creationLocationd_0dea112b090073317d4: C[136] || CT.C136});
    }
    build(context) {
      return new icon_button.IconButton.new({onPressed: dart.fn(() => {
        }, T.VoidTovoid()), icon: C[137] || CT.C137, $creationLocationd_0dea112b090073317d4: C[140] || CT.C140});
    }
  };
  (home.SettingsButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.SettingsButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.SettingsButton.prototype;
  dart.addTypeTests(home.SettingsButton);
  dart.addTypeCaches(home.SettingsButton);
  dart.setMethodSignature(home.SettingsButton, () => ({
    __proto__: dart.getMethods(home.SettingsButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.SettingsButton, I[3]);
  home.HomeTitleWidget = class HomeTitleWidget extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new home.HomeTitleWidget.new({key: key, $creationLocationd_0dea112b090073317d4: C[141] || CT.C141});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.class_outlined, {color: colorScheme.onPrimary, size: 33.0, $creationLocationd_0dea112b090073317d4: C[142] || CT.C142}), C[143] || CT.C143, new text.Text.new("My Ticket", {style: dart.nullCheck(theme.Theme.of(context).textTheme.headline5).copyWith({color: colorScheme.onPrimary, fontSize: 27.0}), $creationLocationd_0dea112b090073317d4: C[145] || CT.C145})]), $creationLocationd_0dea112b090073317d4: C[146] || CT.C146});
    }
  };
  (home.HomeTitleWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.HomeTitleWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.HomeTitleWidget.prototype;
  dart.addTypeTests(home.HomeTitleWidget);
  dart.addTypeCaches(home.HomeTitleWidget);
  dart.setMethodSignature(home.HomeTitleWidget, () => ({
    __proto__: dart.getMethods(home.HomeTitleWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.HomeTitleWidget, I[3]);
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
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  login_screen.LoginScreen = class LoginScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_screen.LoginScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[147] || CT.C147});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let titleStyle = dart.nullCheck(theme.Theme.of(context).textTheme.headline4).copyWith({color: colorScheme.onBackground});
      let loginWithStyle = C[148] || CT.C148;
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, body: new background_widget.AuthBackground.new({child: new login_card.LoginCard.new({margin: C[1] || CT.C1, children: T.JSArrayOfWidget().of([C[150] || CT.C150, new text.Text.new("Iniciar sesión", {textAlign: ui.TextAlign.center, style: titleStyle, $creationLocationd_0dea112b090073317d4: C[152] || CT.C152}), C[153] || CT.C153, C[155] || CT.C155, C[157] || CT.C157, C[159] || CT.C159, C[161] || CT.C161, C[163] || CT.C163, C[165] || CT.C165, C[168] || CT.C168, C[170] || CT.C170, C[172] || CT.C172]), $creationLocationd_0dea112b090073317d4: C[174] || CT.C174}), $creationLocationd_0dea112b090073317d4: C[175] || CT.C175}), $creationLocationd_0dea112b090073317d4: C[176] || CT.C176});
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
  dart.setLibraryUri(login_screen.LoginScreen, I[4]);
  login_screen.SignUpGoogle = class SignUpGoogle extends consumer.ConsumerWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_screen.SignUpGoogle.new({key: key, $creationLocationd_0dea112b090073317d4: C[177] || CT.C177});
    }
    build(context, ref) {
      return new custom_sign_in_button.CustomSignInButton.new({margin: C[178] || CT.C178, buttons: button_list.Buttons.Google, buttonText: "Iniciar con Google", onPressed: dart.fn(() => async.async(core.Null, function*() {
          let t0, t1;
          let api = new login_alternatives.GoogleSignInApi.new();
          let account = (yield api.login());
          if (account == null) {
            return;
          }
          let auth = (yield account.authentication);
          let token = auth.idToken;
          if (token == null) {
            return;
          }
          let person = person$.Person.empty();
          person.personName = (t0 = account.displayName, t0 == null ? "" : t0);
          person.email = account.email;
          person.authMethod = person$.AuthMethod.google;
          let loginApi = new login_alternatives.LoginAlternativeRepositoryHttp.new();
          let emailExists = (yield loginApi.emailIsRegisted(person.email));
          if (emailExists) {
            try {
              let user = (yield loginApi.signInGoogle(person.email, token));
              ref.read(T.StateControllerOfPerson(), user_data_provider.userDataProvider.state).state = user;
            } catch (e) {
              let exception = dart.getThrown(e);
              let _ = dart.stackTrace(e);
              if (core.Object.is(exception)) {
              } else
                throw e;
            }
            async.Future.delayed(core.Duration.zero).then(core.Null, dart.fn(_ => {
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(a => C[179] || CT.C179, T.BuildContextToHomeScreen())}));
            }, T.dynamicToNull()));
          } else {
            async.Future.delayed(core.Duration.zero).then(core.Null, dart.fn(_ => {
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(a => new register_google_screen.RegisterGoogleScreen.new({person: person, token: token, $creationLocationd_0dea112b090073317d4: C[181] || CT.C181}), T.BuildContextToRegisterGoogleScreen())}));
            }, T.dynamicToNull()));
          }
          let googleKey = (yield account.authentication);
          developer.log((t1 = googleKey.idToken, t1 == null ? "" : t1));
        }), T.VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C[182] || CT.C182});
    }
    signIn() {
      return async.async(dart.dynamic, function* signIn() {
      });
    }
  };
  (login_screen.SignUpGoogle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_screen.SignUpGoogle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen.SignUpGoogle.prototype;
  dart.addTypeTests(login_screen.SignUpGoogle);
  dart.addTypeCaches(login_screen.SignUpGoogle);
  dart.setMethodSignature(login_screen.SignUpGoogle, () => ({
    __proto__: dart.getMethods(login_screen.SignUpGoogle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef]),
    signIn: dart.fnType(async.Future, [])
  }));
  dart.setLibraryUri(login_screen.SignUpGoogle, I[4]);
  login_screen.SignUpFacebook = class SignUpFacebook extends consumer.ConsumerWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_screen.SignUpFacebook.new({key: key, $creationLocationd_0dea112b090073317d4: C[183] || CT.C183});
    }
    build(context, ref) {
      return new custom_sign_in_button.CustomSignInButton.new({margin: C[178] || CT.C178, buttons: button_list.Buttons.Facebook, buttonText: "Iniciar con Facebook", onPressed: dart.fn(() => async.async(core.Null, function*() {
          let person = (yield login_alternatives.getFacebookData());
          if (person == null) {
            return;
          }
          let token = (yield flutter_facebook_auth.FacebookAuth.i.accessToken);
          let api = new login_alternatives.LoginAlternativeRepositoryHttp.new();
          let emailExists = (yield api.emailIsRegisted(person.email));
          if (emailExists) {
            api.signInFacebook(person.email, dart.nullCheck(person.facebookId), dart.nullCheck(token).token).then(core.Null, dart.fn(user => {
              user.facebookId = person.facebookId;
              user.facebookProfilePic = person.facebookProfilePic;
              ref.read(T.StateControllerOfPerson(), user_data_provider.userDataProvider.state).state = user;
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(a => C[184] || CT.C184, T.BuildContextToHomeScreen())}));
            }, T.PersonToNull()));
          } else {
            async.Future.delayed(core.Duration.zero).then(core.Null, dart.fn(_ => {
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(a => new register_facebook_screen.RegisterFacebookScreen.new({person: person, fbToken: dart.nullCheck(token).token, $creationLocationd_0dea112b090073317d4: C[186] || CT.C186}), T.BuildContextToRegisterFacebookScreen())}));
            }, T.dynamicToNull()));
          }
        }), T.VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C[187] || CT.C187});
    }
  };
  (login_screen.SignUpFacebook.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_screen.SignUpFacebook.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen.SignUpFacebook.prototype;
  dart.addTypeTests(login_screen.SignUpFacebook);
  dart.addTypeCaches(login_screen.SignUpFacebook);
  dart.setMethodSignature(login_screen.SignUpFacebook, () => ({
    __proto__: dart.getMethods(login_screen.SignUpFacebook.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef])
  }));
  dart.setLibraryUri(login_screen.SignUpFacebook, I[4]);
  login_screen.LoginForm = class LoginForm extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_screen.LoginForm.new({key: key, $creationLocationd_0dea112b090073317d4: C[188] || CT.C188});
    }
    createState() {
      return new login_screen._LoginFormState.new();
    }
  };
  (login_screen.LoginForm.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_screen.LoginForm.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen.LoginForm.prototype;
  dart.addTypeTests(login_screen.LoginForm);
  dart.addTypeCaches(login_screen.LoginForm);
  dart.setMethodSignature(login_screen.LoginForm, () => ({
    __proto__: dart.getMethods(login_screen.LoginForm.__proto__),
    createState: dart.fnType(framework.State$(login_screen.LoginForm), [])
  }));
  dart.setLibraryUri(login_screen.LoginForm, I[4]);
  var ProxyWidget_child = dart.privateName(framework, "ProxyWidget.child");
  var Flexible_fit = dart.privateName(basic, "Flexible.fit");
  var Flexible_flex = dart.privateName(basic, "Flexible.flex");
  login_screen._LoginFormState = class _LoginFormState extends framework.State$(login_screen.LoginForm) {
    build(context) {
      return new form.Form.new({key: this.formKey, autovalidateMode: form.AutovalidateMode.onUserInteraction, child: new basic.Padding.new({padding: C[189] || CT.C189, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(val => {
                  let t1;
                  this.email = (t1 = val, t1 == null ? "" : t1);
                }, T.StringNToNull()), hintText: "example@gmail.com", labelText: "Email", icon: icons.Icons.alternate_email, keyboardType: text_input.TextInputType.emailAddress, validator: C[9] || CT.C9, $creationLocationd_0dea112b090073317d4: C[190] || CT.C190}), new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(val => {
                  let t1;
                  this.password = (t1 = val, t1 == null ? "" : t1);
                }, T.StringNToNull()), hintText: "********", labelText: "Contraseña", icon: icons.Icons.lock_outline_sharp, keyboardType: text_input.TextInputType.visiblePassword, obscureText: true, validator: C[191] || CT.C191, $creationLocationd_0dea112b090073317d4: C[192] || CT.C192}), C[193] || CT.C193, new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new consumer.Consumer.new({builder: dart.bind(this, 'loginButtonPress'), $creationLocationd_0dea112b090073317d4: C[195] || CT.C195}), $creationLocationd_0dea112b090073317d4: C[196] || CT.C196}), C[197] || CT.C197, C[199] || CT.C199]), $creationLocationd_0dea112b090073317d4: C[204] || CT.C204})]), $creationLocationd_0dea112b090073317d4: C[205] || CT.C205}), $creationLocationd_0dea112b090073317d4: C[206] || CT.C206}), $creationLocationd_0dea112b090073317d4: C[207] || CT.C207});
    }
    loginButtonPress(context, ref, child) {
      return new login_buttons.LoginButton.new({onPressed: dart.fn(() => async.async(core.Null, (function*() {
          let t1, t1$;
          if (!dart.test((t1$ = (t1 = this.formKey.currentState, t1 == null ? null : t1.validate()), t1$ == null ? false : t1$))) {
            return;
          }
          let api = new login_repository.LoginRepositoryHTTP.new();
          loading_dialog.showLoadingDialog(context);
          try {
            yield api.loginPerson(this.email, this.password).then(core.Null, dart.fn(user => {
              navigator.Navigator.pop(T.ObjectN(), context);
              let keepLoggedIn = ref.watch(core.bool, login_screen.keepLoggedInProvider);
              if (keepLoggedIn) {
                keep_logged_in.storeLoginToken(dart.nullCheck(user.jwtToken), user.personId);
              }
              ref.read(T.StateControllerOfPerson(), user_data_provider.userDataProvider.state).state = user;
              this.passwordTextController.clear();
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[208] || CT.C208, T.BuildContextToHomeScreen())}));
            }, T.PersonToNull()));
          } catch (e) {
            let error = dart.getThrown(e);
            let _ = dart.stackTrace(e);
            if (core.Object.is(error)) {
              core.print("HOLa");
              navigator.Navigator.pop(T.ObjectN(), context);
            } else
              throw e;
          }
        }).bind(this)), T.VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C[210] || CT.C210});
    }
    static ['_#new#tearOff']() {
      return new login_screen._LoginFormState.new();
    }
  };
  (login_screen._LoginFormState.new = function() {
    this.formKey = T.GlobalKeyOfFormState().new();
    this.email = "";
    this.password = "";
    this.emailTextController = new editable_text.TextEditingController.new();
    this.passwordTextController = new editable_text.TextEditingController.new();
    login_screen._LoginFormState.__proto__.new.call(this);
    ;
  }).prototype = login_screen._LoginFormState.prototype;
  dart.addTypeTests(login_screen._LoginFormState);
  dart.addTypeCaches(login_screen._LoginFormState);
  dart.setMethodSignature(login_screen._LoginFormState, () => ({
    __proto__: dart.getMethods(login_screen._LoginFormState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    loginButtonPress: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef, dart.nullable(framework.Widget)])
  }));
  dart.setLibraryUri(login_screen._LoginFormState, I[4]);
  dart.setFieldSignature(login_screen._LoginFormState, () => ({
    __proto__: dart.getFields(login_screen._LoginFormState.__proto__),
    formKey: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    email: dart.fieldType(core.String),
    password: dart.fieldType(core.String),
    emailTextController: dart.finalFieldType(editable_text.TextEditingController),
    passwordTextController: dart.finalFieldType(editable_text.TextEditingController)
  }));
  login_screen.KeepLoggedInWidget = class KeepLoggedInWidget extends consumer.ConsumerStatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_screen.KeepLoggedInWidget.new({key: key, $creationLocationd_0dea112b090073317d4: C[211] || CT.C211});
    }
    createState() {
      return new login_screen._KeepLoggedInWidgetState.new();
    }
  };
  (login_screen.KeepLoggedInWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_screen.KeepLoggedInWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_screen.KeepLoggedInWidget.prototype;
  dart.addTypeTests(login_screen.KeepLoggedInWidget);
  dart.addTypeCaches(login_screen.KeepLoggedInWidget);
  dart.setMethodSignature(login_screen.KeepLoggedInWidget, () => ({
    __proto__: dart.getMethods(login_screen.KeepLoggedInWidget.__proto__),
    createState: dart.fnType(consumer.ConsumerState$(login_screen.KeepLoggedInWidget), [])
  }));
  dart.setLibraryUri(login_screen.KeepLoggedInWidget, I[4]);
  login_screen._KeepLoggedInWidgetState = class _KeepLoggedInWidgetState extends consumer.ConsumerState$(login_screen.KeepLoggedInWidget) {
    build(context) {
      let titleStyle = C[212] || CT.C212;
      return new basic.Padding.new({padding: C[213] || CT.C213, child: new checkbox_list_tile.CheckboxListTile.new({onChanged: dart.fn(value => {
            if (value == null) return;
            this.ref.read(T.StateControllerOfbool(), login_screen.keepLoggedInProvider.state).state = value;
            this.keepSession = value;
            this.setState(dart.fn(() => {
            }, T.VoidTovoid()));
          }, T.boolNTovoid()), value: this.keepSession, visualDensity: theme_data.VisualDensity.compact, contentPadding: edge_insets.EdgeInsets.zero, dense: true, controlAffinity: list_tile.ListTileControlAffinity.leading, title: C[214] || CT.C214, $creationLocationd_0dea112b090073317d4: C[216] || CT.C216}), $creationLocationd_0dea112b090073317d4: C[217] || CT.C217});
    }
    static ['_#new#tearOff']() {
      return new login_screen._KeepLoggedInWidgetState.new();
    }
  };
  (login_screen._KeepLoggedInWidgetState.new = function() {
    this.keepSession = false;
    login_screen._KeepLoggedInWidgetState.__proto__.new.call(this);
    ;
  }).prototype = login_screen._KeepLoggedInWidgetState.prototype;
  dart.addTypeTests(login_screen._KeepLoggedInWidgetState);
  dart.addTypeCaches(login_screen._KeepLoggedInWidgetState);
  dart.setMethodSignature(login_screen._KeepLoggedInWidgetState, () => ({
    __proto__: dart.getMethods(login_screen._KeepLoggedInWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_screen._KeepLoggedInWidgetState, I[4]);
  dart.setFieldSignature(login_screen._KeepLoggedInWidgetState, () => ({
    __proto__: dart.getFields(login_screen._KeepLoggedInWidgetState.__proto__),
    keepSession: dart.fieldType(core.bool)
  }));
  dart.defineLazy(login_screen, {
    /*login_screen.keepLoggedInProvider*/get keepLoggedInProvider() {
      return new (T.StateProviderOfbool()).new(dart.fn(ref => false, T.StateProviderRefOfboolTobool()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/login/presentation/register_facebook_screen.dart", {
    "package:my_ticket_care/src/login/presentation/register_facebook_screen.dart": register_facebook_screen,
    "package:my_ticket_care/src/login/presentation/splash_screen.dart": splash_screen,
    "package:my_ticket_care/src/user_info/presentation/user_info_profile.dart": user_info_profile,
    "package:my_ticket_care/src/home/presentation/home.dart": home,
    "package:my_ticket_care/src/login/presentation/login_screen.dart": login_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["register_facebook_screen.dart","splash_screen.dart","../../user_info/presentation/user_info_profile.dart","../../home/presentation/home.dart","login_screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqBe;;;;;;IACA;;;;;;;;;;;;;AAGkC;IAA8B;;;QATtE;QACS;QACA;;IADA;IACA;AACX,mFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAaM;AACA,MAAxB,gBAAW,AAAO;AAEZ,wBAAoB,AAAY,eAAT,OAAO;AAE9B,uBAAkD,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,wCACtB,AAAY,WAAD;AAGlB,0BAAsB,AAAY,AAAU,eAAnB,OAAO;AAChC,sBAAiD,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,wCACrB,AAAY,AAAa,WAAd,wBAAwB;AAGhD,YAAO,sDACqB,aACpB,iDACG,uFAGK,wBACR,kBACE,mCACqB,4BACd,UAAU,YACP,aACa,4GAGzB,kBACE,qEACqB,4BACd,SAAS,0EAGlB,oEACW,qBACK,AAAO,AAAO,oCAClB,gCACC,eACC,0CACgB,4HAG9B,sEACa,QAAC,KAAM,AAAS,2BAAa,CAAC,iCAC/B,kBACI,AAAO,AAAO,0CACjB,yBACC,kCACgB,uHAG9B,sEACa,QAAC,KAAM,AAAS,uBAAS,CAAC,qCACvB,AAAO,AAAO,qCAClB,uBACC,kBACC,4CACgB,uHAG9B,kBACE,kBACO,aAAa,6DAEtB,kDACU,6BACa,AAAM,kCAAC,AAAO,AAAO,oFAE5C,kBAAK,+BAA8B,aAAa,8EAEhD,gDACU,AAAO,iCAEX,AAAyB,+BAAd,oBAAoB,AAAO,AAAO,0GAGnD,sCACuC,8CAC3B,wBACR,+BACS,mDACM;AACa,wBAAZ,qCAAI,OAAO;yMAM3B,+BACS,oCAAkB,SAAC,SAAS,KAAK,MAC/B,+CACiB,2DACH,AAAY,WAAD,yBAEnB;AACH,oCAAM;AAGL,yCAAU,MAAM,AAAI,GAAD,kBACtB,eAA6B,eAAnB,AAAS,2BAAa,AAAO;AACK,0BAAhD,AAAI,AAA6B,GAA9B,mCAAM,AAAiB,mDAAe,OAAO;AAQ9C,0BANK,AAAuB,qBAAN,oCAAW,QAAC;AAKL,4BAJnB,qDACN,OAAO,EACP,yCACa,QAAC,6DACd,QAAC,SAAU,AAAM,KAAD;;wBAEvB;IAWrB;;;;;;IA7HO,gBAAkB;;;EA8H3B;;;;;;;;;;;;;;;;;;AC9I+C;IAAoB;;;QAHxC;;AAAQ,8DAAW,GAAG;;EAAC;;;;;;;;;;;AAW7B,MAAX;AAIJ,MAFa,AAAS,qDAAqB,QAAC;AACtB,QAAtB;;IAEJ;;AAEoB;AACb,sBAAS,MAAM;AAyBlB,QAvBF,AAAqB,oDAAK,QAAC;AACzB,cAAI,AAAM,KAAD,YAAY,AAAO,MAAD;AAMxB,YALS,+DACR,cACA,yCACW,QAAC;AAGd;;AAG4B,UAA9B,cAAS;AACM,UAAf,cAAS;;AACH,oBAAM;AASV,UARF,AAAI,AAAkC,GAAnC,oBAAoB,MAAM,EAAE,KAAK,kBAAO,QAAC;AACG,YAA7C,AAAI,AAA6B,2CAAxB,AAAiB,mDAAe,IAAI;AAM5C,YALS,+DACR,cACA,yCACW,QAAC;;;MAKpB;;UAG0B;AAClB,wBAAoB,AAAY,eAAT,OAAO;AAC9B,uBAAa,wCACP,aACH,AAAY,WAAD;AAGd,wBAAc,wCACR,aACH,AAAY,WAAD;AAEpB,YAAO,kCACC,yCACQ,gDACA,yCACA,uBACN,AAAY,WAAD,UACX,AAAY,WAAD,sDAMV,yCACgC,yCAC3B,wBACR,kBACQ,oCACC,AAAY,WAAD,mBACZ,iEAER,kBAAK,oBAAmB,UAAU,6DAClC,kBAAK,qBAAe,WAAW;IAKzC;;;;;;IA9EO,cAAS;;;EA+ElB;;;;;;;;;;;;;;;;;;UClF4B,SAAmB;AACrC,mBAAS,AAAI,GAAD,uBAAO;AACzB,YAAO,yCACK,yCAEP,AAAO,AAAmB,MAApB,gDAED,4DAA0D,eAAzB,AAAO,MAAD,iFAC7C,4DACS,oBACG,AAAO,MAAD,uBACA,+EAElB,4DACS,gCACG,AAAO,MAAD,kBACA,8EAElB,4DACS,sBACG,AAAO,MAAD,mBACA,8EAElB,4DACS,iCACG,AAAO,MAAD,qBACA,6EAElB,4DACS,oBACI,AAAO,AAAI,MAAL,SAAQ,IAAK,cAAc,sBACjC,AAAO,AAAI,MAAL,SAAQ,IAAW,mBAAa,+EAEnD,wDAES,mDACM;AACT,oBAAI,AAAO,AAAW,MAAZ,gBAA0B;AACL,kBAA7B,MAAmB,AAAE;;AAGjB,mCAAe;AAEhB,kCAAa,MAAM,AAAa,YAAD;AACpC,oBAAI,UAAU;AACmB,kBAA/B,MAAM,AAAa,YAAD;AACU,kBAA5B,MAAM,AAAa,YAAD;;AAQlB,gBANF,AAAoB,mDAAK,QAAC;AAI4B,kBAH1C,+DACN,OAAO,EACP,yCACa,QAAC;AACqC,kBAAvD,AAAI,AAA6B,GAA9B,mCAAM,AAAiB,mDAAsB;;cAEnD;IAMX;;;QAhEkC;;AAAQ,2EAAW,GAAG;;EAAC;;;;;;;;;;;;IA2E5C;;;;;;IACA;;;;;;IACE;;;;;;;;;;;;;UAGW;AACxB,YAAO,sCACI,wDAEA,kBAAK,6IAEP,kBAAK,kFACF,kBAAK;IAEnB;;;QApBgB;QACA;QACA;QACT;;IAHS;IACA;IACA;AAEX,+EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAyBM;AAClB,wBAAoB,AAAY,eAAT,OAAO;AAEpC,YAAO,0CACO,6CACM,mCACT,AAAY,WAAD;IAQxB;;;QAlBO;;AACF,2EAAW,GAAG;;EAAC;;;;;;;;;;IAwBP;;;;;;;;;;;UAEa;AACxB,YAAO,8BACE,+BACE,gCACG,cACD,cACM,wBACX,qBACQ,cACD,YACK;IAKtB;;;QApBsC;QAAmB;;;AACnD,+EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;ACtHc;IAAkB;;;QAH9B;;AAAQ,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;UAQpB;AACxB,YAAO,sDACG,UACD,mCACG,qDAEG,uBAAsB,AAAY,AAAK,AAAO,0BAArB,OAAO,gBAAgB,cAClD,+BACE,uCACkC,gDACF,sJAMZ;IAarC;;;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAC1C,YAAO,0CACO,6CACH,AAAY,WAAD,oDASb,iCACO,AAAY,WAAD,gCACD,AAAY,AAAU,WAAX,qBAAqB,kBACpC,AAAY,AAAU,eAAnB,OAAO;IAQlC;;;QA5BO;;AACF,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;UAoCM;AACxB,YAAO,4CACQ;;IAKjB;;;QAXO;;AACF,uDAAW,GAAG;;EAAC;;;;;;;;;;;;;UAmBM;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,uCACgC,mDACE,0CAC7B,wBACR,kBACQ,oCACC,AAAY,WAAD,kBACZ,sFAGR,kBACE,qBAC4C,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,wCACV,AAAY,WAAD,sBACR;IAKxB;;;QA1BO;;AACF,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCxEM;AACZ,wBAAoB,AAAY,eAAT,OAAO;AACpC,uBAEQ,AACT,eAHoB,AACpB,AACA,eAFuB,OAAO,wCAGd,AAAY,WAAD;AAE1B;AACN,YAAO,sDACqB,aACpB,iDACG,+DAEK,2CAER,kBACE,8BACqB,4BACd,UAAU;IAoB7B;;;QAzCwB;;AAAQ,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;UAkDrB,SAAmB;AAC3C,YAAO,uFAEc,wCACL,iCACD;;AACH,oBAAM;AACN,yBAAU,MAAM,AAAI,GAAD;AAEzB,cAAI,AAAQ,OAAD;AACT;;AAGI,sBAAO,MAAM,AAAQ,OAAD;AACpB,sBAAQ,AAAK,IAAD;AAElB,cAAI,AAAM,KAAD;AAEP;;AAGK,uBAAgB;AACsB,UAA7C,AAAO,MAAD,eAAkC,KAApB,AAAQ,OAAD,cAAC,aAAe;AACf,UAA5B,AAAO,MAAD,SAAS,AAAQ,OAAD;AACe,UAArC,AAAO,MAAD,cAAyB;AACzB,yBAAW;AACZ,6BAAc,MAAM,AAAS,QAAD,iBAAiB,AAAO,MAAD;AACxD,cAAI,WAAW;AACb;AACQ,0BAAO,MAAM,AAAS,QAAD,cAAc,AAAO,MAAD,QAAQ,KAAK;AACf,cAA7C,AAAI,AAA6B,GAA9B,mCAAM,AAAiB,mDAAe,IAAI;;kBACtC;kBAAW;AAAlB;;;;AAOA,YAHK,AAAuB,qBAAN,oCAAW,QAAC;AAEwB,cADhD,uCAAK,OAAO,EAClB,yCAA2B,QAAC;;;AAahC,YAVK,AAAuB,qBAAN,oCAAW,QAAC;AASjC,cARS,uCACR,OAAO,EACP,yCACW,QAAC,KAAM,6DACN,MAAM,SACP,KAAK;;;AAMhB,2BAAY,MAAM,AAAQ,OAAD;AACH,UAA5B,eAAsB,KAAlB,AAAU,SAAD,UAAC,aAAW;QAC1B;IACP;;AAEa;MAAU;;;;QA7DhB;;AACF,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;UAqEM,SAAmB;AAC3C,YAAO,uFAEc,0CACL,mCACD;AACD,wBAAS,MAAM;AAEvB,cAAI,AAAO,MAAD;AACR;;AAGI,uBAAQ,MAAmB,AAAE;AAE7B,oBAAM;AACP,6BAAc,MAAM,AAAI,GAAD,iBAAiB,AAAO,MAAD;AAEnD,cAAI,WAAW;AASX,YARF,AACK,AACA,GAFF,gBACiB,AAAO,MAAD,QAAyB,eAAjB,AAAO,MAAD,cAAmB,AAAE,eAAP,KAAK,yBACjD,QAAC;AAC0B,cAAnC,AAAK,IAAD,cAAc,AAAO,MAAD;AAC2B,cAAnD,AAAK,IAAD,sBAAsB,AAAO,MAAD;AACa,cAA7C,AAAI,AAA6B,GAA9B,mCAAM,AAAiB,mDAAe,IAAI;AAEa,cADhD,uCAAK,OAAO,EAClB,yCAA2B,QAAC;;;AAahC,YAVK,AAAuB,qBAAN,oCAAW,QAAC;AASjC,cARS,uCACR,OAAO,EACP,yCACW,QAAC,KAAM,iEACN,MAAM,WACA,AAAE,eAAP,KAAK;;;QAMzB;IACP;;;QA7CO;;AACF,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;AAmDc;IAAiB;;;QAH7B;;AAAQ,0DAAW,GAAG;;EAAC;;;;;;;;;;;;UAcnB;AACxB,YAAO,yBACA,gCAC8B,gDAC5B,0DAEE,gCACK,wBACR,sEACa,QAAS;;AACD,kBAAjB,cAAY,KAAJ,GAAG,EAAH,aAAO;iDAEP,gCACC,eACC,2CACgB,8HAG9B,sEACa,QAAS;;AACE,kBAApB,iBAAe,KAAJ,GAAG,EAAH,aAAO;iDAEV,uBACC,oBACC,8CACgB,uDACf,oHAIf,6BACY,wBACR,+BACS,8CAAkB;IAYzC;qBAEqC,SAAmB,KAAa;AACnE,YAAO,+CACM;;AACT,0BAAuC,YAAjC,AAAQ,wCAAA,OAAc,gBAAd,cAA4B;AACxC;;AAGI,oBAAM;AAEc,UAA1B,iCAAkB,OAAO;AAEzB;AAgBI,YAfF,MAAM,AAAI,AAA6B,GAA9B,aAAa,YAAO,+BAAe,QAAC;AACrB,cAAZ,qCAAI,OAAO;AAEf,iCAAe,AAAI,GAAD,kBAAO;AAE/B,kBAAI,YAAY;AACgC,gBAA9C,+BAA6B,eAAb,AAAK,IAAD,YAAY,AAAK,IAAD;;AAIO,cAA7C,AAAI,AAA6B,GAA9B,mCAAM,AAAiB,mDAAe,IAAI;AAEf,cAA9B,AAAuB;AAEyC,cADtD,uCAAK,OAAO,EAClB,yCAA2B,QAAC;;;gBAE3B;gBAAO;AAAd;AACa,cAAb,WAAM;AACgB,cAAZ,qCAAI,OAAO;;;;QAExB;IAEL;;;;;;IAxF2B,eAAU;IAE9B,aAAQ;IAAI,gBAAW;IAExB,2BAAsB;IACtB,8BAAyB;;;EAoFjC;;;;;;;;;;;;;;;;;;;;;;;AAQqD;IAA0B;;;QAH9C;;AAAQ,mEAAW,GAAG;;EAAC;;;;;;;;;UAS5B;AAClB;AAIN,YAAO,2DAEE,wDACM,QAAC;AAEV,gBAAI,AAAM,KAAD,UAAU;AAE+B,YAAlD,AAAI,AAAiC,yCAA5B,AAAqB,iDAAe,KAAK;AAC/B,YAAnB,mBAAc,KAAK;AACJ,YAAf,cAAS;;sCAEJ,iCACsB,kDACF,oCACpB,uBACkC;IAI/C;;;;;;IA1BK,mBAAc;;;EA2BrB;;;;;;;;;;;;;MArCM,iCAAoB;YAAG,mCAAoB,QAAC,OAAQ","file":"../../../../../../../../../../../packages/my_ticket_care/src/login/presentation/register_facebook_screen.dart.lib.js"}');
  // Exports:
  return {
    src__login__presentation__register_facebook_screen: register_facebook_screen,
    src__login__presentation__splash_screen: splash_screen,
    src__user_info__presentation__user_info_profile: user_info_profile,
    src__home__presentation__home: home,
    src__login__presentation__login_screen: login_screen
  };
}));

//# sourceMappingURL=register_facebook_screen.dart.lib.js.map
