define(['dart_sdk', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter_signin_button/button_list.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter_signin_button/button_builder.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/image_resolution.dart', 'packages/font_awesome_flutter/src/fa_icon.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/painting/borders.dart'], (function load__packages__flutter_signin_button__button_view_dart(dart_sdk, packages__flutter__src__painting__edge_insets$46dart, packages__flutter_signin_button__button_list$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter_signin_button__button_builder$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__image_resolution$46dart, packages__font_awesome_flutter__src__fa_icon$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__painting__borders$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const button_list = packages__flutter_signin_button__button_list$46dart.button_list;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const image = packages__flutter__src__widgets__title$46dart.src__widgets__image;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const button_builder = packages__flutter_signin_button__button_builder$46dart.button_builder;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const image_resolution = packages__flutter__src__painting__image_resolution$46dart.src__painting__image_resolution;
  const font_awesome_flutter = packages__font_awesome_flutter__src__fa_icon$46dart.font_awesome_flutter;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  var button_view = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ValueKeyOfString: () => (T.ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButton",
        [_Location_column]: 3,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 22,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRRect",
        [_Location_column]: 20,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 18,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Google",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "GoogleDark",
        [_Enum_index]: 2
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 26,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRRect",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Facebook",
        [_Enum_index]: 3
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "FacebookNew",
        [_Enum_index]: 4
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 118,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "GitHub",
        [_Enum_index]: 5
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 131,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Apple",
        [_Enum_index]: 6
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "AppleDark",
        [_Enum_index]: 7
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 146,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "LinkedIn",
        [_Enum_index]: 8
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 158,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Pinterest",
        [_Enum_index]: 9
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 170,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Tumblr",
        [_Enum_index]: 10
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 182,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Twitter",
        [_Enum_index]: 11
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 194,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Reddit",
        [_Enum_index]: 12
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 206,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Quora",
        [_Enum_index]: 13
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 217,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Yahoo",
        [_Enum_index]: 14
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 228,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Hotmail",
        [_Enum_index]: 15
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 239,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Xbox",
        [_Enum_index]: 16
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 250,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Microsoft",
        [_Enum_index]: 17
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButtonBuilder",
        [_Location_column]: 16,
        [_Location_line]: 262,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Email",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(40).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_signin_button-2.0.0/lib/button_view.dart",
    "package:flutter_signin_button/button_view.dart"
  ];
  var onPressed$ = dart.privateName(button_view, "SignInButton.onPressed");
  var button$ = dart.privateName(button_view, "SignInButton.button");
  var mini$ = dart.privateName(button_view, "SignInButton.mini");
  var shape$ = dart.privateName(button_view, "SignInButton.shape");
  var text$ = dart.privateName(button_view, "SignInButton.text");
  var padding$ = dart.privateName(button_view, "SignInButton.padding");
  var elevation$ = dart.privateName(button_view, "SignInButton.elevation");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  button_view.SignInButton = class SignInButton extends framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get button() {
      return this[button$];
    }
    set button(value) {
      super.button = value;
    }
    get mini() {
      return this[mini$];
    }
    set mini(value) {
      super.mini = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    static ['_#new#tearOff'](button, opts) {
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let mini = opts && 'mini' in opts ? opts.mini : false;
      let padding = opts && 'padding' in opts ? opts.padding : C[0] || CT.C0;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let text = opts && 'text' in opts ? opts.text : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 2;
      return new button_view.SignInButton.new(button, {onPressed: onPressed, mini: mini, padding: padding, shape: shape, text: text, elevation: elevation, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12;
      switch (this.button) {
        case C[6] || CT.C6:
        case C[7] || CT.C7:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("Google"), text: (t0 = this.text, t0 == null ? "Sign in with Google" : t0), textColor: this.button === button_list.Buttons.Google ? new ui.Color.fromRGBO(0, 0, 0, 0.54) : new ui.Color.new(4294967295), image: new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(8.0), child: new image.Image.new({image: new image_resolution.AssetImage.new(this.button === button_list.Buttons.Google ? "assets/logos/google_light.png" : "assets/logos/google_dark.png", {package: "flutter_signin_button"}), height: 36.0, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), backgroundColor: this.button === button_list.Buttons.Google ? new ui.Color.new(4294967295) : new ui.Color.new(4282549748), onPressed: this.onPressed, padding: this.padding, innerPadding: new edge_insets.EdgeInsets.all(0.0), shape: this.shape, height: 36.0, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
          }
        case C[11] || CT.C11:
        case C[12] || CT.C12:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("Facebook"), mini: this.mini, text: (t0$ = this.text, t0$ == null ? "Sign in with Facebook" : t0$), icon: font_awesome_flutter.FontAwesomeIcons.facebookF, image: this.button === button_list.Buttons.FacebookNew ? new basic.ClipRRect.new({child: new image.Image.new({image: new image_resolution.AssetImage.new("assets/logos/facebook_new.png", {package: "flutter_signin_button"}), height: 24.0, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}) : null, backgroundColor: this.button === button_list.Buttons.FacebookNew ? new ui.Color.new(4279793650) : new ui.Color.new(4282079640), innerPadding: this.button === button_list.Buttons.FacebookNew ? new edge_insets.EdgeInsets.fromLTRB(12.0, 0.0, 11.0, 0.0) : null, onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
          }
        case C[14] || CT.C14:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("GitHub"), mini: this.mini, text: (t0$0 = this.text, t0$0 == null ? "Sign in with GitHub" : t0$0), icon: font_awesome_flutter.FontAwesomeIcons.github, backgroundColor: new ui.Color.new(4282664004), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
          }
        case C[16] || CT.C16:
        case C[17] || CT.C17:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("Apple"), mini: this.mini, text: (t0$1 = this.text, t0$1 == null ? "Sign in with Apple" : t0$1), textColor: this.button === button_list.Buttons.Apple ? colors.Colors.black : colors.Colors.white, icon: font_awesome_flutter.FontAwesomeIcons.apple, iconColor: this.button === button_list.Buttons.Apple ? colors.Colors.black : colors.Colors.white, backgroundColor: this.button === button_list.Buttons.Apple ? new ui.Color.new(4294967295) : new ui.Color.new(4278190080), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
          }
        case C[19] || CT.C19:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("LinkedIn"), mini: this.mini, text: (t0$2 = this.text, t0$2 == null ? "Sign in with LinkedIn" : t0$2), icon: font_awesome_flutter.FontAwesomeIcons.linkedinIn, backgroundColor: new ui.Color.new(4278221750), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
          }
        case C[21] || CT.C21:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("Pinterest"), mini: this.mini, text: (t0$3 = this.text, t0$3 == null ? "Sign in with Pinterest" : t0$3), icon: font_awesome_flutter.FontAwesomeIcons.pinterest, backgroundColor: new ui.Color.new(4291502119), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
          }
        case C[23] || CT.C23:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("Tumblr"), mini: this.mini, text: (t0$4 = this.text, t0$4 == null ? "Sign in with Tumblr" : t0$4), icon: font_awesome_flutter.FontAwesomeIcons.tumblr, backgroundColor: new ui.Color.new(4281619055), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
          }
        case C[25] || CT.C25:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("Twitter"), mini: this.mini, text: (t0$5 = this.text, t0$5 == null ? "Sign in with Twitter" : t0$5), icon: font_awesome_flutter.FontAwesomeIcons.twitter, backgroundColor: new ui.Color.new(4280132082), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
          }
        case C[27] || CT.C27:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("Reddit"), mini: this.mini, text: (t0$6 = this.text, t0$6 == null ? "Sign in with Reddit" : t0$6), icon: font_awesome_flutter.FontAwesomeIcons.reddit, backgroundColor: new ui.Color.new(4294919424), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
          }
        case C[29] || CT.C29:
          {
            return new button_builder.SignInButtonBuilder.new({key: new (T.ValueKeyOfString()).new("Quora"), mini: this.mini, text: (t0$7 = this.text, t0$7 == null ? "Sign in with Quora" : t0$7), icon: font_awesome_flutter.FontAwesomeIcons.quora, backgroundColor: new ui.Color.new(10750464), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
          }
        case C[31] || CT.C31:
          {
            return new button_builder.SignInButtonBuilder.new({key: new (T.ValueKeyOfString()).new("Yahoo"), mini: this.mini, text: (t0$8 = this.text, t0$8 == null ? "Sign in with Yahoo" : t0$8), icon: font_awesome_flutter.FontAwesomeIcons.yahoo, backgroundColor: new ui.Color.new(6291922), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
          }
        case C[33] || CT.C33:
          {
            return new button_builder.SignInButtonBuilder.new({key: new (T.ValueKeyOfString()).new("Hotmail"), mini: this.mini, text: (t0$9 = this.text, t0$9 == null ? "Sign in with Hotmail" : t0$9), icon: font_awesome_flutter.FontAwesomeIcons.sms, backgroundColor: new ui.Color.new(29382), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
          }
        case C[35] || CT.C35:
          {
            return new button_builder.SignInButtonBuilder.new({key: new (T.ValueKeyOfString()).new("Xbox"), mini: this.mini, text: (t0$10 = this.text, t0$10 == null ? "Sign in with Xbox" : t0$10), icon: font_awesome_flutter.FontAwesomeIcons.xbox, backgroundColor: new ui.Color.new(1080335), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
          }
        case C[37] || CT.C37:
          {
            return new button_builder.SignInButtonBuilder.new({key: new (T.ValueKeyOfString()).new("Microsoft"), mini: this.mini, text: (t0$11 = this.text, t0$11 == null ? "Sign in with Microsoft" : t0$11), icon: font_awesome_flutter.FontAwesomeIcons.microsoft, backgroundColor: new ui.Color.new(4280507039), onPressed: this.onPressed, padding: this.padding, shape: this.shape, $creationLocationd_0dea112b090073317d4: C[36] || CT.C36});
          }
        case C[39] || CT.C39:
        default:
          {
            return new button_builder.SignInButtonBuilder.new({elevation: this.elevation, key: new (T.ValueKeyOfString()).new("Email"), mini: this.mini, text: (t0$12 = this.text, t0$12 == null ? "Sign in with Email" : t0$12), icon: icons.Icons.email, onPressed: this.onPressed, padding: this.padding, backgroundColor: dart.nullCheck(colors.Colors.grey._get(700)), shape: this.shape, $creationLocationd_0dea112b090073317d4: C[38] || CT.C38});
          }
      }
    }
  };
  (button_view.SignInButton.new = function(button, opts) {
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let mini = opts && 'mini' in opts ? opts.mini : false;
    let padding = opts && 'padding' in opts ? opts.padding : C[0] || CT.C0;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 2;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[button$] = button;
    this[onPressed$] = onPressed;
    this[mini$] = mini;
    this[padding$] = padding;
    this[shape$] = shape;
    this[text$] = text;
    this[elevation$] = elevation;
    if (!(mini !== true || !(button === button_list.Buttons.Google || button === button_list.Buttons.GoogleDark || button === button_list.Buttons.FacebookNew))) dart.assertFailed("Google and FacebookNew buttons do not support mini mode", I[0], 45, 13, "mini != true ||\n                !(button == Buttons.Google ||\n                    button == Buttons.GoogleDark ||\n                    button == Buttons.FacebookNew)");
    button_view.SignInButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = button_view.SignInButton.prototype;
  dart.addTypeTests(button_view.SignInButton);
  dart.addTypeCaches(button_view.SignInButton);
  dart.setMethodSignature(button_view.SignInButton, () => ({
    __proto__: dart.getMethods(button_view.SignInButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(button_view.SignInButton, I[1]);
  dart.setFieldSignature(button_view.SignInButton, () => ({
    __proto__: dart.getFields(button_view.SignInButton.__proto__),
    onPressed: dart.finalFieldType(core.Function),
    button: dart.finalFieldType(button_list.Buttons),
    mini: dart.finalFieldType(core.bool),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    text: dart.finalFieldType(dart.nullable(core.String)),
    padding: dart.finalFieldType(edge_insets.EdgeInsets),
    elevation: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter_signin_button/button_view.dart", {
    "package:flutter_signin_button/button_view.dart": button_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_view.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter_signin_button/button_view.dart.lib.js"}');
  // Exports:
  return {
    button_view: button_view
  };
}));

//# sourceMappingURL=button_view.dart.lib.js.map
