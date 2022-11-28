define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/my_ticket_care/src/shared/models/person.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/my_ticket_care/src/login/presentation/widgets/background_widget.dart', 'packages/my_ticket_care/src/login/presentation/widgets/login_card.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/my_ticket_care/src/login/utils/form_validators.dart', 'packages/my_ticket_care/src/shared/shared_utilities/form_related.dart', 'packages/intl/src/intl/date_format.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/my_ticket_care/src/login/repository/login_alternatives.dart'], (function load__packages__my_ticket_care__src__login__presentation__register_google_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__my_ticket_care__src__shared__models__person$46dart, packages__flutter__src__material__icon_button$46dart, packages__my_ticket_care__src__login__presentation__widgets__background_widget$46dart, packages__my_ticket_care__src__login__presentation__widgets__login_card$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__my_ticket_care__src__login__utils__form_validators$46dart, packages__my_ticket_care__src__shared__shared_utilities__form_related$46dart, packages__intl__src__intl__date_format$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__elevated_button$46dart, packages__my_ticket_care__src__login__repository__login_alternatives$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const person = packages__my_ticket_care__src__shared__models__person$46dart.src__shared__models__person;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const background_widget = packages__my_ticket_care__src__login__presentation__widgets__background_widget$46dart.src__login__presentation__widgets__background_widget;
  const login_card = packages__my_ticket_care__src__login__presentation__widgets__login_card$46dart.src__login__presentation__widgets__login_card;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const custom_text_form_field_widget = packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart.reusable__widgets__custom_text_form_field_widget;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const form_validators = packages__my_ticket_care__src__login__utils__form_validators$46dart.src__login__utils__form_validators;
  const form_related = packages__my_ticket_care__src__shared__shared_utilities__form_related$46dart.src__shared__shared_utilities__form_related;
  const date_format = packages__intl__src__intl__date_format$46dart.src__intl__date_format;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const login_alternatives = packages__my_ticket_care__src__login__repository__login_alternatives$46dart.src__login__repository__login_alternatives;
  var register_google_screen = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RegisterGoogleScreen",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GenderPickerWidget2",
        [_Location_column]: 13,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 99,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_line]: 101,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 17,
        [_Location_line]: 110,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 23,
        [_Location_line]: 118,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
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
        [_Location_name]: "Text",
        [_Location_column]: 34,
        [_Location_line]: 133,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[30] || CT.C30,
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
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 26,
        [_Location_line]: 120,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 17,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 13,
        [_Location_line]: 107,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginCard",
        [_Location_column]: 16,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AuthBackground",
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/register_google_screen.dart"
      });
    }
  }, false);
  var C = Array(37).fill(void 0);
  var I = ["package:my_ticket_care/src/login/presentation/register_google_screen.dart"];
  var person$ = dart.privateName(register_google_screen, "RegisterGoogleScreen.person");
  var token$ = dart.privateName(register_google_screen, "RegisterGoogleScreen.token");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  register_google_screen.RegisterGoogleScreen = class RegisterGoogleScreen extends framework.StatefulWidget {
    get person() {
      return this[person$];
    }
    set person(value) {
      super.person = value;
    }
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let person = opts && 'person' in opts ? opts.person : null;
      let token = opts && 'token' in opts ? opts.token : null;
      return new register_google_screen.RegisterGoogleScreen.new({key: key, person: person, token: token, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new register_google_screen._RegisterGoogleScreenState.new();
    }
  };
  (register_google_screen.RegisterGoogleScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let person = opts && 'person' in opts ? opts.person : null;
    let token = opts && 'token' in opts ? opts.token : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[person$] = person;
    this[token$] = token;
    register_google_screen.RegisterGoogleScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = register_google_screen.RegisterGoogleScreen.prototype;
  dart.addTypeTests(register_google_screen.RegisterGoogleScreen);
  dart.addTypeCaches(register_google_screen.RegisterGoogleScreen);
  dart.setMethodSignature(register_google_screen.RegisterGoogleScreen, () => ({
    __proto__: dart.getMethods(register_google_screen.RegisterGoogleScreen.__proto__),
    createState: dart.fnType(framework.State$(register_google_screen.RegisterGoogleScreen), [])
  }));
  dart.setLibraryUri(register_google_screen.RegisterGoogleScreen, I[0]);
  dart.setFieldSignature(register_google_screen.RegisterGoogleScreen, () => ({
    __proto__: dart.getFields(register_google_screen.RegisterGoogleScreen.__proto__),
    person: dart.finalFieldType(person.Person),
    token: dart.finalFieldType(core.String)
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
  register_google_screen._RegisterGoogleScreenState = class _RegisterGoogleScreenState extends framework.State$(register_google_screen.RegisterGoogleScreen) {
    build(context) {
      this.userData = this.widget.person;
      let colorScheme = theme.Theme.of(context).colorScheme;
      let titleStyle = dart.nullCheck(theme.Theme.of(context).textTheme.headline4).copyWith({color: colorScheme.onBackground});
      let subtitleStyle = theme.Theme.of(context).textTheme.headline6;
      let infoStyle = dart.nullCheck(theme.Theme.of(context).textTheme.subtitle1).copyWith({color: colorScheme.onBackground.withAlpha(150)});
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, body: new background_widget.AuthBackground.new({child: new login_card.LoginCard.new({margin: C[1] || CT.C1, padding: C[2] || CT.C2, children: T.JSArrayOfWidget().of([new text.Text.new("Inicio con Google", {textAlign: ui.TextAlign.center, style: titleStyle, maxLines: 1, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), C[4] || CT.C4, new text.Text.new("Verifica tu información para registrarte con MyTicket", {textAlign: ui.TextAlign.center, style: infoStyle, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), C[7] || CT.C7, new custom_text_form_field_widget.CustomTextFormField.new({enabled: false, initialValue: this.widget.person.email, hintText: "example@gmail.com", labelText: "Email", icon: icons.Icons.email_outlined, keyboardType: text_input.TextInputType.emailAddress, validator: C[9] || CT.C9, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(n => this.userData.personName = n, T.StringToString()), hintText: "", initialValue: this.widget.person.personName, labelText: "Nombre completo", icon: icons.Icons.people, keyboardType: text_input.TextInputType.name_, validator: C[11] || CT.C11, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), new custom_text_form_field_widget.CustomTextFormField.new({onChanged: dart.fn(m => this.userData.mobile = m, T.StringToString()), initialValue: this.widget.person.mobile, hintText: "73155648", labelText: "Telefono", icon: icons.Icons.numbers_outlined, keyboardType: text_input.TextInputType.phone, validator: C[13] || CT.C13, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), new text.Text.new("Genero", {style: subtitleStyle, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), new form_related.GenderPickerWidget2.new({person: this.userData, initialValue: form_related.Gender.values[$_get](this.widget.person.sex), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), new text.Text.new("Fecha de nacimiento", {style: subtitleStyle, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), C[18] || CT.C18, new form_related.DatePickerWidget2.new({person: this.widget.person, initialDate: new date_format.DateFormat.new("dd/MM/yyyy").parse(this.widget.person.birthday), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), C[21] || CT.C21, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                        navigator.Navigator.pop(T.ObjectN(), context);
                      }, T.VoidTovoid()), child: C[23] || CT.C23, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26}), C[27] || CT.C27, new basic.Expanded.new({child: new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colorScheme.secondary}), onPressed: dart.fn(() => async.async(dart.void, (function*() {
                        let api = new login_alternatives.LoginAlternativeRepositoryHttp.new();
                        try {
                          yield api.registerGoogle(this.userData, this.widget.token);
                        } catch (e) {
                          let error = dart.getThrown(e);
                          let _ = dart.stackTrace(e);
                          if (core.Object.is(error)) {
                          } else
                            throw e;
                        }
                      }).bind(this)), T.VoidToFutureOfvoid()), child: C[29] || CT.C29, $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32})]), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33})]), $creationLocationd_0dea112b090073317d4: C[34] || CT.C34}), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35}), $creationLocationd_0dea112b090073317d4: C[36] || CT.C36});
    }
    static ['_#new#tearOff']() {
      return new register_google_screen._RegisterGoogleScreenState.new();
    }
  };
  (register_google_screen._RegisterGoogleScreenState.new = function() {
    this.userData = person.Person.empty();
    register_google_screen._RegisterGoogleScreenState.__proto__.new.call(this);
    ;
  }).prototype = register_google_screen._RegisterGoogleScreenState.prototype;
  dart.addTypeTests(register_google_screen._RegisterGoogleScreenState);
  dart.addTypeCaches(register_google_screen._RegisterGoogleScreenState);
  dart.setMethodSignature(register_google_screen._RegisterGoogleScreenState, () => ({
    __proto__: dart.getMethods(register_google_screen._RegisterGoogleScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(register_google_screen._RegisterGoogleScreenState, I[0]);
  dart.setFieldSignature(register_google_screen._RegisterGoogleScreenState, () => ({
    __proto__: dart.getFields(register_google_screen._RegisterGoogleScreenState.__proto__),
    userData: dart.fieldType(person.Person)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/login/presentation/register_google_screen.dart", {
    "package:my_ticket_care/src/login/presentation/register_google_screen.dart": register_google_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["register_google_screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBe;;;;;;IACA;;;;;;;;;;;;;AAEgC;IAA4B;;;QARlE;QACS;QACA;;IADA;IACA;AACX,+EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAYM;AACA,MAAxB,gBAAW,AAAO;AAEZ,wBAAoB,AAAY,eAAT,OAAO;AAE9B,uBAAkD,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,wCACtB,AAAY,WAAD;AAGlB,0BAAsB,AAAY,AAAU,eAAnB,OAAO;AAChC,sBAAiD,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,wCACrB,AAAY,AAAa,WAAd,wBAAwB;AAGhD,YAAO,sDACqB,aACpB,iDACG,uFAGK,wBACR,kBACE,iCACqB,4BACd,UAAU,YACP,aACa,4GAGzB,kBACE,qEACqB,4BACd,SAAS,0EAGlB,oEACW,qBACK,AAAO,AAAO,oCAClB,gCACC,eACC,0CACgB,4HAG9B,sEACa,QAAC,KAAM,AAAS,2BAAa,CAAC,iCAC/B,kBACI,AAAO,AAAO,0CACjB,yBACC,kCACgB,uHAG9B,sEACa,QAAC,KAAM,AAAS,uBAAS,CAAC,qCACvB,AAAO,AAAO,qCAClB,uBACC,kBACC,4CACgB,uHAG9B,kBACE,kBACO,aAAa,6DAEtB,kDACU,6BACa,AAAM,kCAAC,AAAO,AAAO,oFAE5C,kBAAK,+BAA8B,aAAa,8EAEhD,gDACU,AAAO,iCAEX,AAAyB,+BAAd,oBAAoB,AAAO,AAAO,0GAGnD,sCACuC,8CAC3B,wBACR,+BACS,mDACM;AACa,wBAAZ,qCAAI,OAAO;yMAM3B,+BACS,+CACiB,2DACH,AAAY,WAAD,yBAEnB;AACH,kCAAM;AAEZ;AACkD,0BAAhD,MAAM,AAAI,GAAD,gBAAgB,eAAU,AAAO;;8BACnC;8BAAO;AAAd;;;;sBAGH;IAUnB;;;;;;IApHO,gBAAkB;;;EAqH3B","file":"../../../../../../../../../../../packages/my_ticket_care/src/login/presentation/register_google_screen.dart.lib.js"}');
  // Exports:
  return {
    src__login__presentation__register_google_screen: register_google_screen
  };
}));

//# sourceMappingURL=register_google_screen.dart.lib.js.map
