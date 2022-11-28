define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/form.dart', 'packages/my_ticket_care/src/shared/models/person.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/my_ticket_care/src/login/presentation/widgets/background_widget.dart', 'packages/my_ticket_care/src/login/presentation/widgets/login_card.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/my_ticket_care/src/login/utils/form_validators.dart', 'packages/my_ticket_care/src/shared/shared_utilities/form_related.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/intl/src/intl/date_format.dart', 'packages/my_ticket_care/src/login/repository/login_repository.dart', 'packages/riverpod/src/value_provider.dart'], (function load__packages__my_ticket_care__src__login__presentation__register_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__form$46dart, packages__my_ticket_care__src__shared__models__person$46dart, packages__flutter__src__material__icon_button$46dart, packages__my_ticket_care__src__login__presentation__widgets__background_widget$46dart, packages__my_ticket_care__src__login__presentation__widgets__login_card$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__my_ticket_care__src__login__utils__form_validators$46dart, packages__my_ticket_care__src__shared__shared_utilities__form_related$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__elevated_button$46dart, packages__intl__src__intl__date_format$46dart, packages__my_ticket_care__src__login__repository__login_repository$46dart, packages__riverpod__src__value_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const form = packages__flutter__src__widgets__form$46dart.src__widgets__form;
  const person$ = packages__my_ticket_care__src__shared__models__person$46dart.src__shared__models__person;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const background_widget = packages__my_ticket_care__src__login__presentation__widgets__background_widget$46dart.src__login__presentation__widgets__background_widget;
  const login_card = packages__my_ticket_care__src__login__presentation__widgets__login_card$46dart.src__login__presentation__widgets__login_card;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const custom_text_form_field_widget = packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart.reusable__widgets__custom_text_form_field_widget;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const form_validators = packages__my_ticket_care__src__login__utils__form_validators$46dart.src__login__utils__form_validators;
  const form_related = packages__my_ticket_care__src__shared__shared_utilities__form_related$46dart.src__shared__shared_utilities__form_related;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const date_format = packages__intl__src__intl__date_format$46dart.src__intl__date_format;
  const login_repository = packages__my_ticket_care__src__login__repository__login_repository$46dart.src__login__repository__login_repository;
  const state_provider = packages__riverpod__src__value_provider$46dart.src__state_provider;
  var register_screen = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetRefAndWidgetNToStatelessWidget: () => (T.BuildContextAndWidgetRefAndWidgetNToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, consumer.WidgetRef, T.WidgetN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    DateTimeN: () => (T.DateTimeN = dart.constFn(dart.nullable(core.DateTime)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    StateProviderOfGender: () => (T.StateProviderOfGender = dart.constFn(state_provider.StateProvider$(form_related.Gender)))(),
    StateProviderRefOfGender: () => (T.StateProviderRefOfGender = dart.constFn(state_provider.StateProviderRef$(form_related.Gender)))(),
    StateProviderRefOfGenderToGender: () => (T.StateProviderRefOfGenderToGender = dart.constFn(dart.fnType(form_related.Gender, [T.StateProviderRefOfGender()])))(),
    StateProviderOfDateTimeN: () => (T.StateProviderOfDateTimeN = dart.constFn(state_provider.StateProvider$(T.DateTimeN())))(),
    StateProviderRefOfDateTimeN: () => (T.StateProviderRefOfDateTimeN = dart.constFn(state_provider.StateProviderRef$(T.DateTimeN())))(),
    StateProviderRefOfDateTimeNToNull: () => (T.StateProviderRefOfDateTimeNToNull = dart.constFn(dart.fnType(core.Null, [T.StateProviderRefOfDateTimeN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RegisterScreen",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
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
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C4() {
      return C[4] = dart.fn(form_validators.Validator.validatorEmail, T.StringNToStringN());
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C6() {
      return C[6] = dart.fn(form_validators.Validator.validatorName, T.StringNToStringN());
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C8() {
      return C[8] = dart.fn(form_validators.Validator.validatorPhoneNumer, T.StringNToStringN());
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 19,
        [_Location_line]: 66,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GenderPickerWidget",
        [_Location_column]: 19,
        [_Location_line]: 75,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 19,
        [_Location_line]: 78,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 25,
        [_Location_line]: 79,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[14] || CT.C14,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DatePickerWidget",
        [_Location_column]: 19,
        [_Location_line]: 80,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 30,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 28,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 25,
        [_Location_line]: 93,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[20] || CT.C20,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 29,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GoBackButton",
        [_Location_column]: 45,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: register_screen.GoBackButton.prototype,
        [Widget__location]: C[24] || CT.C24,
        [Widget_key]: null
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: flex.FlexFit.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget__location]: C[22] || CT.C22,
        [Widget_key]: null,
        [ProxyWidget_child]: C[23] || CT.C23,
        [Flexible_fit]: C[25] || CT.C25,
        [Flexible_flex]: 1
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 29,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[27] || CT.C27,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 15
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CreateAccountButton",
        [_Location_column]: 32,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 23,
        [_Location_line]: 99,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 22,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Form",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginCard",
        [_Location_column]: 16,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AuthBackground",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CreateAccountButton",
        [_Location_column]: 9,
        [_Location_line]: 116,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 161,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[38] || CT.C38,
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
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 12,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GoBackButton",
        [_Location_column]: 9,
        [_Location_line]: 167,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 179,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[42] || CT.C42,
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
    get C43() {
      return C[43] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 12,
        [_Location_line]: 174,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_screen.dart"
      });
    }
  }, false);
  var C = Array(44).fill(void 0);
  var I = ["package:my_ticket_care/src/login/presentation/register_screen.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  register_screen.RegisterScreen = class RegisterScreen extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new register_screen.RegisterScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new register_screen._RegisterScreenState.new();
    }
  };
  (register_screen.RegisterScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    register_screen.RegisterScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = register_screen.RegisterScreen.prototype;
  dart.addTypeTests(register_screen.RegisterScreen);
  dart.addTypeCaches(register_screen.RegisterScreen);
  dart.setMethodSignature(register_screen.RegisterScreen, () => ({
    __proto__: dart.getMethods(register_screen.RegisterScreen.__proto__),
    createState: dart.fnType(framework.State$(register_screen.RegisterScreen), [])
  }));
  dart.setLibraryUri(register_screen.RegisterScreen, I[0]);
  var _formKey = dart.privateName(register_screen, "_formKey");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var ProxyWidget_child = dart.privateName(framework, "ProxyWidget.child");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var Flexible_fit = dart.privateName(basic, "Flexible.fit");
  var Flexible_flex = dart.privateName(basic, "Flexible.flex");
  register_screen._RegisterScreenState = class _RegisterScreenState extends framework.State$(register_screen.RegisterScreen) {
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let titleStyle = dart.nullCheck(theme.Theme.of(context).textTheme.headline4).copyWith({color: colorScheme.onBackground});
      let subtitleStyle = theme.Theme.of(context).textTheme.headline6;
      return new scaffold.Scaffold.new({body: new background_widget.AuthBackground.new({child: new login_card.LoginCard.new({margin: C[1] || CT.C1, padding: C[2] || CT.C2, children: T.JSArrayOfWidget().of([new text.Text.new("Crear cuenta", {style: titleStyle, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), new form.Form.new({key: this[_formKey], child: new basic.Column.new({children: T.JSArrayOfWidget().of([new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(e => this.email = e, T.StringToString()), hintText: "example@gmail.com", labelText: "Email", icon: icons.Icons.email_outlined, keyboardType: text_input.TextInputType.emailAddress, validator: C[4] || CT.C4, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(n => this.name = n, T.StringToString()), labelText: "Nombre completo", icon: icons.Icons.people, keyboardType: text_input.TextInputType.name_, validator: C[6] || CT.C6, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(m => this.mobile = m, T.StringToString()), hintText: "73155648", labelText: "Telefono", icon: icons.Icons.numbers_outlined, keyboardType: text_input.TextInputType.phone, validator: C[8] || CT.C8, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), new text.Text.new("Genero", {style: subtitleStyle, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), new form_related.GenderPickerWidget.new({genderProvider: register_screen.genderSelectedProvider, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), new text.Text.new("Fecha de nacimiento", {style: subtitleStyle, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), C[13] || CT.C13, new form_related.DatePickerWidget.new({dateProvider: register_screen.dateSelectedProvider, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), new consumer.Consumer.new({builder: dart.fn((context, ref, _) => {
                        let gender = ref.watch(form_related.Gender, register_screen.genderSelectedProvider);
                        if (gender === form_related.Gender.unselected) {
                          return new text.Text.new("Seleccione un genero", {style: new text_style.TextStyle.new({color: colorScheme.error}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
                        }
                        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
                      }, T.BuildContextAndWidgetRefAndWidgetNToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), C[19] || CT.C19, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: T.JSArrayOfWidget().of([C[21] || CT.C21, C[26] || CT.C26, new basic.Expanded.new({child: new register_screen.CreateAccountButton.new({formKey: this[_formKey], formData: this.userData, $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29})]), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30})]), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32})]), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33}), $creationLocationd_0dea112b090073317d4: C[34] || CT.C34}), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35});
    }
    static ['_#new#tearOff']() {
      return new register_screen._RegisterScreenState.new();
    }
  };
  (register_screen._RegisterScreenState.new = function() {
    this[_formKey] = T.GlobalKeyOfFormState().new();
    this.name = "";
    this.email = "";
    this.mobile = "";
    this.userData = person$.Person.empty();
    register_screen._RegisterScreenState.__proto__.new.call(this);
    ;
  }).prototype = register_screen._RegisterScreenState.prototype;
  dart.addTypeTests(register_screen._RegisterScreenState);
  dart.addTypeCaches(register_screen._RegisterScreenState);
  dart.setMethodSignature(register_screen._RegisterScreenState, () => ({
    __proto__: dart.getMethods(register_screen._RegisterScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(register_screen._RegisterScreenState, I[0]);
  dart.setFieldSignature(register_screen._RegisterScreenState, () => ({
    __proto__: dart.getFields(register_screen._RegisterScreenState.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    name: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    mobile: dart.fieldType(core.String),
    userData: dart.fieldType(person$.Person)
  }));
  var formKey$ = dart.privateName(register_screen, "CreateAccountButton.formKey");
  var formData$ = dart.privateName(register_screen, "CreateAccountButton.formData");
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
  register_screen.CreateAccountButton = class CreateAccountButton extends consumer.ConsumerWidget {
    get formKey() {
      return this[formKey$];
    }
    set formKey(value) {
      super.formKey = value;
    }
    get formData() {
      return this[formData$];
    }
    set formData(value) {
      super.formData = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let formKey = opts && 'formKey' in opts ? opts.formKey : null;
      let formData = opts && 'formData' in opts ? opts.formData : null;
      return new register_screen.CreateAccountButton.new({key: key, formKey: formKey, formData: formData, $creationLocationd_0dea112b090073317d4: C[36] || CT.C36});
    }
    formIsValid() {
      let t0, t0$;
      t0$ = (t0 = this.formKey.currentState, t0 == null ? null : t0.validate());
      return t0$ == null ? false : t0$;
    }
    build(context, ref) {
      return new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => async.async(dart.void, (function*() {
          if (!this.formIsValid()) {
            return;
          }
          let name = this.formData.personName;
          let email = this.formData.email;
          let mobile = this.formData.mobile;
          let date = ref.watch(T.DateTimeN(), register_screen.dateSelectedProvider);
          let gender = ref.watch(form_related.Gender, register_screen.genderSelectedProvider);
          if (date == null || gender === form_related.Gender.unselected) {
            return;
          }
          let person = new person$.Person.new({personId: -1, personName: name, birthday: new date_format.DateFormat.new("yyyy-MM-dd").format(date), sex: gender.index, email: email, mobile: mobile, authMethod: person$.AuthMethod.normal});
          let api = new login_repository.LoginRepositoryHTTP.new();
          try {
            let user = (yield api.registerPerson(person));
          } catch (e) {
            let error = dart.getThrown(e);
            let _ = dart.stackTrace(e);
            if (core.Object.is(error)) {
            } else
              throw e;
          }
        }).bind(this)), T.VoidToFutureOfvoid()), child: C[37] || CT.C37, $creationLocationd_0dea112b090073317d4: C[39] || CT.C39});
    }
  };
  (register_screen.CreateAccountButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let formKey = opts && 'formKey' in opts ? opts.formKey : null;
    let formData = opts && 'formData' in opts ? opts.formData : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[formKey$] = formKey;
    this[formData$] = formData;
    register_screen.CreateAccountButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = register_screen.CreateAccountButton.prototype;
  dart.addTypeTests(register_screen.CreateAccountButton);
  dart.addTypeCaches(register_screen.CreateAccountButton);
  dart.setMethodSignature(register_screen.CreateAccountButton, () => ({
    __proto__: dart.getMethods(register_screen.CreateAccountButton.__proto__),
    formIsValid: dart.fnType(core.bool, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef])
  }));
  dart.setLibraryUri(register_screen.CreateAccountButton, I[0]);
  dart.setFieldSignature(register_screen.CreateAccountButton, () => ({
    __proto__: dart.getFields(register_screen.CreateAccountButton.__proto__),
    formKey: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    formData: dart.finalFieldType(person$.Person)
  }));
  register_screen.GoBackButton = class GoBackButton extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new register_screen.GoBackButton.new({key: key, $creationLocationd_0dea112b090073317d4: C[40] || CT.C40});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colorScheme.secondary}), onPressed: dart.fn(() => {
          navigator.Navigator.pop(T.ObjectN(), context);
        }, T.VoidTovoid()), child: C[41] || CT.C41, $creationLocationd_0dea112b090073317d4: C[43] || CT.C43});
    }
  };
  (register_screen.GoBackButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    register_screen.GoBackButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = register_screen.GoBackButton.prototype;
  dart.addTypeTests(register_screen.GoBackButton);
  dart.addTypeCaches(register_screen.GoBackButton);
  dart.setMethodSignature(register_screen.GoBackButton, () => ({
    __proto__: dart.getMethods(register_screen.GoBackButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(register_screen.GoBackButton, I[0]);
  dart.defineLazy(register_screen, {
    /*register_screen.genderSelectedProvider*/get genderSelectedProvider() {
      return new (T.StateProviderOfGender()).new(dart.fn(ref => form_related.Gender.unselected, T.StateProviderRefOfGenderToGender()));
    },
    /*register_screen.dateSelectedProvider*/get dateSelectedProvider() {
      return new (T.StateProviderOfDateTimeN()).new(dart.fn(ref => null, T.StateProviderRefOfDateTimeNToNull()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/login/presentation/register_screen.dart", {
    "package:my_ticket_care/src/login/presentation/register_screen.dart": register_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["register_screen.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/my_ticket_care/src/login/presentation/register_screen.dart.lib.js"}');
  // Exports:
  return {
    src__login__presentation__register_screen: register_screen
  };
}));

//# sourceMappingURL=register_screen.dart.lib.js.map
