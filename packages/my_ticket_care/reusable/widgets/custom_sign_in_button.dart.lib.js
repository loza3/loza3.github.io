define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter_signin_button/button_view.dart', 'packages/flutter_signin_button/button_list.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__my_ticket_care__reusable__widgets__custom_sign_in_button_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter_signin_button__button_view$46dart, packages__flutter_signin_button__button_list$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const button_view = packages__flutter_signin_button__button_view$46dart.button_view;
  const button_list = packages__flutter_signin_button__button_list$46dart.button_list;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var custom_sign_in_button = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomSignInButton",
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/custom_sign_in_button.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SignInButton",
        [_Location_column]: 14,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/custom_sign_in_button.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/custom_sign_in_button.dart"
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:my_ticket_care/reusable/widgets/custom_sign_in_button.dart"];
  var buttons$ = dart.privateName(custom_sign_in_button, "CustomSignInButton.buttons");
  var buttonText$ = dart.privateName(custom_sign_in_button, "CustomSignInButton.buttonText");
  var onPressed$ = dart.privateName(custom_sign_in_button, "CustomSignInButton.onPressed");
  var margin$ = dart.privateName(custom_sign_in_button, "CustomSignInButton.margin");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  custom_sign_in_button.CustomSignInButton = class CustomSignInButton extends framework.StatelessWidget {
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get buttonText() {
      return this[buttonText$];
    }
    set buttonText(value) {
      super.buttonText = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let buttonText = opts && 'buttonText' in opts ? opts.buttonText : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let margin = opts && 'margin' in opts ? opts.margin : null;
      return new custom_sign_in_button.CustomSignInButton.new({key: key, buttons: buttons, buttonText: buttonText, onPressed: onPressed, margin: margin, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new basic.Padding.new({padding: this.margin, child: new button_view.SignInButton.new(this.buttons, {text: this.buttonText, onPressed: this.onPressed, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
  };
  (custom_sign_in_button.CustomSignInButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : null;
    let buttonText = opts && 'buttonText' in opts ? opts.buttonText : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[buttons$] = buttons;
    this[buttonText$] = buttonText;
    this[onPressed$] = onPressed;
    this[margin$] = margin;
    custom_sign_in_button.CustomSignInButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = custom_sign_in_button.CustomSignInButton.prototype;
  dart.addTypeTests(custom_sign_in_button.CustomSignInButton);
  dart.addTypeCaches(custom_sign_in_button.CustomSignInButton);
  dart.setMethodSignature(custom_sign_in_button.CustomSignInButton, () => ({
    __proto__: dart.getMethods(custom_sign_in_button.CustomSignInButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(custom_sign_in_button.CustomSignInButton, I[0]);
  dart.setFieldSignature(custom_sign_in_button.CustomSignInButton, () => ({
    __proto__: dart.getFields(custom_sign_in_button.CustomSignInButton.__proto__),
    buttons: dart.finalFieldType(button_list.Buttons),
    buttonText: dart.finalFieldType(core.String),
    onPressed: dart.finalFieldType(core.Function),
    margin: dart.finalFieldType(edge_insets.EdgeInsets)
  }));
  dart.trackLibraries("packages/my_ticket_care/reusable/widgets/custom_sign_in_button.dart", {
    "package:my_ticket_care/reusable/widgets/custom_sign_in_button.dart": custom_sign_in_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_sign_in_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIgB;;;;;;IACD;;;;;;IACE;;;;;;IACE;;;;;;;;;;;;;;UAUS;AACxB,YAAO,iCACI,oBACF,iCACL,qBACM,4BACK;IAGjB;;;QAjBO;QACS;QACA;QACA;QACA;;IAHA;IACA;IACA;IACA;AACX,4EAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/reusable/widgets/custom_sign_in_button.dart.lib.js"}');
  // Exports:
  return {
    reusable__widgets__custom_sign_in_button: custom_sign_in_button
  };
}));

//# sourceMappingURL=custom_sign_in_button.dart.lib.js.map
