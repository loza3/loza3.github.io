define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/material/page.dart', 'packages/my_ticket_care/src/login/presentation/register_screen.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/placeholder_span.dart'], (function load__packages__my_ticket_care__src__login__presentation__widgets__login_buttons_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__elevated_button$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__material__page$46dart, packages__my_ticket_care__src__login__presentation__register_screen$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__placeholder_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const register_screen = packages__my_ticket_care__src__login__presentation__register_screen$46dart.src__login__presentation__register_screen;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  var login_buttons = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BuildContextToRegisterScreen: () => (T.BuildContextToRegisterScreen = dart.constFn(dart.fnType(register_screen.RegisterScreen, [framework.BuildContext])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RegisterButton",
        [_Location_column]: 9,
        [_Location_line]: 6,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 38,
        [OffsetBase__dx]: 1 / 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RegisterScreen",
        [_Location_column]: 59,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: register_screen.RegisterScreen.prototype,
        [Widget__location]: C[3] || CT.C3,
        [Widget_key]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[5] || CT.C5,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: 1,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Registrarse"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginButton",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[9] || CT.C9,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: 1,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Ingresar"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ForgottenPassword",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "rectangle",
        [_Enum_index]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[17] || CT.C17,
        [BorderSide_style]: C[18] || CT.C18,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[19] || CT.C19
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281413937.0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[17] || CT.C17,
        [BorderSide_style]: C[21] || CT.C21,
        [BorderSide_width]: 1,
        [BorderSide_color]: C[22] || CT.C22
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C[16] || CT.C16,
        [Border_bottom]: C[20] || CT.C20,
        [Border_right]: C[16] || CT.C16,
        [Border_top]: C[16] || CT.C16
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C[14] || CT.C14,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: C[15] || CT.C15,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 24,
        [_Location_line]: 66,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C25() {
      return C[25] = dart.const({
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
        [TextStyle_fontWeight]: C[26] || CT.C26,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[22] || CT.C22,
        [TextStyle_inherit]: true
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
        [Text_style]: C[25] || CT.C25,
        [Text_textSpan]: null,
        [Text_data]: "¿Olvidaste tu contraseña?"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 16,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/login/presentation/widgets/login_buttons.dart"
      });
    }
  }, false);
  var C = Array(30).fill(void 0);
  var I = ["package:my_ticket_care/src/login/presentation/widgets/login_buttons.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
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
  login_buttons.RegisterButton = class RegisterButton extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_buttons.RegisterButton.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: theme.Theme.of(context).colorScheme.secondary, minimumSize: C[1] || CT.C1, maximumSize: C[1] || CT.C1, padding: edge_insets.EdgeInsets.zero}), onPressed: dart.fn(() => {
          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[2] || CT.C2, T.BuildContextToRegisterScreen())}));
        }, T.VoidTovoid()), child: C[4] || CT.C4, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
  };
  (login_buttons.RegisterButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_buttons.RegisterButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_buttons.RegisterButton.prototype;
  dart.addTypeTests(login_buttons.RegisterButton);
  dart.addTypeCaches(login_buttons.RegisterButton);
  dart.setMethodSignature(login_buttons.RegisterButton, () => ({
    __proto__: dart.getMethods(login_buttons.RegisterButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_buttons.RegisterButton, I[0]);
  var onPressed$ = dart.privateName(login_buttons, "LoginButton.onPressed");
  login_buttons.LoginButton = class LoginButton extends framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      return new login_buttons.LoginButton.new({key: key, onPressed: onPressed, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    build(context) {
      return new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({minimumSize: C[1] || CT.C1, maximumSize: C[1] || CT.C1, padding: edge_insets.EdgeInsets.zero}), onPressed: this.onPressed, child: C[8] || CT.C8, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
  };
  (login_buttons.LoginButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    login_buttons.LoginButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_buttons.LoginButton.prototype;
  dart.addTypeTests(login_buttons.LoginButton);
  dart.addTypeCaches(login_buttons.LoginButton);
  dart.setMethodSignature(login_buttons.LoginButton, () => ({
    __proto__: dart.getMethods(login_buttons.LoginButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_buttons.LoginButton, I[0]);
  dart.setFieldSignature(login_buttons.LoginButton, () => ({
    __proto__: dart.getFields(login_buttons.LoginButton.__proto__),
    onPressed: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, [])))
  }));
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
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
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var Border_left = dart.privateName(box_border, "Border.left");
  var Border_bottom = dart.privateName(box_border, "Border.bottom");
  var Border_right = dart.privateName(box_border, "Border.right");
  var Border_top = dart.privateName(box_border, "Border.top");
  var BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  var BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  var BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
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
  login_buttons.ForgottenPassword = class ForgottenPassword extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new login_buttons.ForgottenPassword.new({key: key, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    build(context) {
      return new container.Container.new({alignment: alignment.Alignment.center, padding: C[12] || CT.C12, child: new container.Container.new({decoration: C[13] || CT.C13, child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => navigator.Navigator.pushNamed(T.ObjectN(), context, "forgot_password_screen"), T.VoidTovoid()), child: C[23] || CT.C23, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29});
    }
  };
  (login_buttons.ForgottenPassword.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_buttons.ForgottenPassword.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_buttons.ForgottenPassword.prototype;
  dart.addTypeTests(login_buttons.ForgottenPassword);
  dart.addTypeCaches(login_buttons.ForgottenPassword);
  dart.setMethodSignature(login_buttons.ForgottenPassword, () => ({
    __proto__: dart.getMethods(login_buttons.ForgottenPassword.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_buttons.ForgottenPassword, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/login/presentation/widgets/login_buttons.dart", {
    "package:my_ticket_care/src/login/presentation/widgets/login_buttons.dart": login_buttons
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_buttons.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,gDACiB,2DACG,AAAY,AAAY,eAArB,OAAO,0FAGb,0CAEX;AAE2D,UAD1D,uCAAK,OAAO,EAClB,yCAA2B,QAAC;;IAItC;;;QAlBO;;AACF,gEAAW,GAAG;;EAAC;;;;;;;;;;IA0BF;;;;;;;;;;;UAEQ;AACxB,YAAO,gDACiB,2GAGA,0CAEX;IAGf;;;QAhBO;QACS;;;AACX,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAuBM;AACxB,YAAO,yCACgB,6DAEd,iEAKE,iDACE,cAAgB,2CAAU,OAAO,EAAE;IAYlD;;;QA1BO;;AACF,mEAAW,GAAG;;EAAC","file":"../../../../../../../../../../../../packages/my_ticket_care/src/login/presentation/widgets/login_buttons.dart.lib.js"}');
  // Exports:
  return {
    src__login__presentation__widgets__login_buttons: login_buttons
  };
}));

//# sourceMappingURL=login_buttons.dart.lib.js.map
