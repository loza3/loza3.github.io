define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/form.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/my_ticket_care/reusable/widgets/custom_text_form_field_widget.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/my_ticket_care/models/frontend/validator.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/my_ticket_care/models/backend/person.dart', 'packages/my_ticket_care/services/login/login_api.dart', 'packages/cool_alert/src/widgets/cool_alert_buttons.dart', 'packages/flutter/src/material/colors.dart'], (function load__packages__my_ticket_care__screens__login__forget_password_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__form$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__my_ticket_care__models__frontend__validator$46dart, packages__flutter__src__material__elevated_button$46dart, packages__my_ticket_care__models__backend__person$46dart, packages__my_ticket_care__services__login__login_api$46dart, packages__cool_alert__src__widgets__cool_alert_buttons$46dart, packages__flutter__src__material__colors$46dart) {
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
  const form = packages__flutter__src__widgets__form$46dart.src__widgets__form;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const custom_text_form_field_widget = packages__my_ticket_care__reusable__widgets__custom_text_form_field_widget$46dart.reusable__widgets__custom_text_form_field_widget;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const text_input = packages__flutter__src__services__text_editing_delta$46dart.src__services__text_input;
  const validator = packages__my_ticket_care__models__frontend__validator$46dart.models__frontend__validator;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const person$ = packages__my_ticket_care__models__backend__person$46dart.models__backend__person;
  const login_api = packages__my_ticket_care__services__login__login_api$46dart.services__login__login_api;
  const cool_alert = packages__cool_alert__src__widgets__cool_alert_buttons$46dart.cool_alert;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  var forget_password = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
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
        [_Location_name]: "ForgotPasswordScreen",
        [_Location_column]: 9,
        [_Location_line]: 8,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[2] || CT.C2,
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
        [Text_data]: "Recuperar tu cuenta"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppBar",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[5] || CT.C5,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 80,
        [SizedBox_width]: null
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 19,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C8() {
      return C[8] = dart.const({
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
        [TextStyle_fontWeight]: C[9] || CT.C9,
        [TextStyle_fontSize]: 30,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[7] || CT.C7,
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
        [Text_style]: C[8] || CT.C8,
        [Text_textSpan]: null,
        [Text_data]: "Ingresa tu correo"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[11] || CT.C11,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C12() {
      return C[12] = dart.fn(validator.Validator.validatorEmail, T.StringNToStringN());
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomTextFormField",
        [_Location_column]: 21,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 48,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[15] || CT.C15,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 30,
        [SizedBox_width]: null
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 38,
        [_Location_line]: 79,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
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
        [TextStyle_fontWeight]: C[9] || CT.C9,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[17] || CT.C17,
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
        [Text_style]: C[18] || CT.C18,
        [Text_textSpan]: null,
        [Text_data]: "Recuperar"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 21,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 24,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Form",
        [_Location_column]: 22,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/login/forget_password.dart"
      });
    }
  }, false);
  var C = Array(26).fill(void 0);
  var I = ["package:my_ticket_care/screens/login/forget_password.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
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
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
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
  forget_password.ForgotPasswordScreen = class ForgotPasswordScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new forget_password.ForgotPasswordScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let key = T.GlobalKeyOfFormState().new();
      let email = "";
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[1] || CT.C1, centerTitle: true, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), body: new basic.SizedBox.new({width: 1 / 0, child: new basic.Column.new({children: T.JSArrayOfWidget().of([C[4] || CT.C4, C[6] || CT.C6, C[10] || CT.C10, new basic.SizedBox.new({width: 300.0, child: new form.Form.new({key: key, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new custom_text_form_field_widget.CustomTextFormField.new({hintText: "example@gmail.com", labelText: "Email", icon: icons.Icons.email, keyboardType: text_input.TextInputType.emailAddress, onChanged: dart.fn(value => email = value, T.StringToString()), validator: C[12] || CT.C12, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), C[14] || CT.C14, new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => async.async(dart.void, function*() {
                          let t0, t0$;
                          if (dart.test((t0$ = (t0 = key.currentState, t0 == null ? null : t0.validate()), t0$ == null ? false : t0$))) {
                            let person = new person$.Person.new({email: email});
                            let masterResponse = (yield new login_api.MyTicketLogin.new().forgotPassword(person));
                            if (masterResponse.status === 200) {
                              cool_alert.CoolAlert.show({context: context, type: cool_alert.CoolAlertType.success, text: masterResponse.message, backgroundColor: colors.Colors.blue, onConfirmBtnTap: dart.fn(() => navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), context, "login_screen"), T.VoidTovoid())});
                            } else {
                              cool_alert.CoolAlert.show({context: context, type: cool_alert.CoolAlertType.error, text: masterResponse.message, backgroundColor: colors.Colors.blue, onConfirmBtnTap: dart.fn(() => navigator.Navigator.pop(T.ObjectN(), context), T.VoidTovoid())});
                            }
                          }
                        }), T.VoidToFutureOfvoid()), child: C[16] || CT.C16, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19})]), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), $creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22})]), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
    }
  };
  (forget_password.ForgotPasswordScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    forget_password.ForgotPasswordScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = forget_password.ForgotPasswordScreen.prototype;
  dart.addTypeTests(forget_password.ForgotPasswordScreen);
  dart.addTypeCaches(forget_password.ForgotPasswordScreen);
  dart.setMethodSignature(forget_password.ForgotPasswordScreen, () => ({
    __proto__: dart.getMethods(forget_password.ForgotPasswordScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(forget_password.ForgotPasswordScreen, I[0]);
  dart.trackLibraries("packages/my_ticket_care/screens/login/forget_password.dart", {
    "package:my_ticket_care/screens/login/forget_password.dart": forget_password
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["forget_password.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AAClB,gBAAM;AACL,kBAAQ;AAEf,YAAO,oCACG,2DAEO,qEAET,6CAEG,gCACK,uEAWR,+BACS,cACA,wBACA,GAAG,SACD,gCACK,wBACR,qEACY,gCACC,eACC,iCACgB,kDACjB,QAAC,SAAU,QAAQ,KAAK,+HAMrC,mDACe;;AACT,yCAAiC,YAA7B,AAAI,GAAD,4BAAC,OAAc,gBAAd,cAA4B;AAC5B,yCAAS,+BAAc,KAAK;AAC5B,kDACF,MAAM,AAAgB,iDAAe,MAAM;AAE/C,gCAAI,AAAe,AAAO,cAAR,YAAW;AAS1B,8BARS,oCACC,OAAO,QACI,wCACd,AAAe,cAAD,2BACI,qCACP,cACH,mEACN,OAAO,EAAE;;AASlB,8BANS,oCACC,OAAO,QACI,sCACd,AAAe,cAAD,2BACI,qCACP,cAAgB,qCAAI,OAAO;;;wBAInD;IAcvB;;;QApFiC;;AAAQ,wEAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/screens/login/forget_password.dart.lib.js"}');
  // Exports:
  return {
    screens__login__forget_password: forget_password
  };
}));

//# sourceMappingURL=forget_password.dart.lib.js.map
