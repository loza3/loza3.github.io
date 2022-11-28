define(['dart_sdk', 'packages/my_ticket_care/models/backend/person.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/form.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__providers__login_from_provider_dart(dart_sdk, packages__my_ticket_care__models__backend__person$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__form$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const person = packages__my_ticket_care__models__backend__person$46dart.models__backend__person;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const form = packages__flutter__src__widgets__form$46dart.src__widgets__form;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var login_from_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/login_from_provider.dart"];
  var email = dart.privateName(login_from_provider, "LoginFormProvider.email");
  var password = dart.privateName(login_from_provider, "LoginFormProvider.password");
  var formKey = dart.privateName(login_from_provider, "LoginFormProvider.formKey");
  var _isLoading = dart.privateName(login_from_provider, "_isLoading");
  var _personResponse = dart.privateName(login_from_provider, "_personResponse");
  login_from_provider.LoginFormProvider = class LoginFormProvider extends change_notifier.ChangeNotifier {
    get email() {
      return this[email];
    }
    set email(value) {
      this[email] = value;
    }
    get password() {
      return this[password];
    }
    set password(value) {
      this[password] = value;
    }
    get formKey() {
      return this[formKey];
    }
    set formKey(value) {
      this[formKey] = value;
    }
    get isLoading() {
      return this[_isLoading];
    }
    set isLoading(value) {
      this[_isLoading] = value;
      this.notifyListeners();
    }
    get personResponse() {
      return this[_personResponse];
    }
    set personResponse(person) {
      this[_personResponse] = person;
      this.notifyListeners();
    }
    isValidForm() {
      let t0, t0$;
      t0$ = (t0 = this.formKey.currentState, t0 == null ? null : t0.validate());
      return t0$ == null ? false : t0$;
    }
    static ['_#new#tearOff']() {
      return new login_from_provider.LoginFormProvider.new();
    }
  };
  (login_from_provider.LoginFormProvider.new = function() {
    this[email] = "";
    this[password] = "";
    this[_isLoading] = false;
    this[_personResponse] = new person.Person.new();
    this[formKey] = T.GlobalKeyOfFormState().new();
    login_from_provider.LoginFormProvider.__proto__.new.call(this);
    ;
  }).prototype = login_from_provider.LoginFormProvider.prototype;
  dart.addTypeTests(login_from_provider.LoginFormProvider);
  dart.addTypeCaches(login_from_provider.LoginFormProvider);
  dart.setMethodSignature(login_from_provider.LoginFormProvider, () => ({
    __proto__: dart.getMethods(login_from_provider.LoginFormProvider.__proto__),
    isValidForm: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(login_from_provider.LoginFormProvider, () => ({
    __proto__: dart.getGetters(login_from_provider.LoginFormProvider.__proto__),
    isLoading: core.bool,
    personResponse: person.Person
  }));
  dart.setSetterSignature(login_from_provider.LoginFormProvider, () => ({
    __proto__: dart.getSetters(login_from_provider.LoginFormProvider.__proto__),
    isLoading: core.bool,
    personResponse: person.Person
  }));
  dart.setLibraryUri(login_from_provider.LoginFormProvider, I[0]);
  dart.setFieldSignature(login_from_provider.LoginFormProvider, () => ({
    __proto__: dart.getFields(login_from_provider.LoginFormProvider.__proto__),
    email: dart.fieldType(core.String),
    password: dart.fieldType(core.String),
    [_isLoading]: dart.fieldType(core.bool),
    [_personResponse]: dart.fieldType(person.Person),
    formKey: dart.fieldType(framework.GlobalKey$(form.FormState))
  }));
  dart.trackLibraries("packages/my_ticket_care/providers/login_from_provider.dart", {
    "package:my_ticket_care/providers/login_from_provider.dart": login_from_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_from_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACA;;;;;;IAmBc;;;;;;;AAdC;IAAU;kBAEb;AACC,MAAlB,mBAAa,KAAK;AACD,MAAjB;IACF;;AAE6B;IAAe;uBAElB;AACA,MAAxB,wBAAkB,MAAM;AACP,MAAjB;IACF;;;AAIsB,kBAAA,AAAQ,wCAAA,OAAc;YAAd,eAA4B;IAAK;;;;;;IAtBxD,cAAQ;IACR,iBAAW;IACb,mBAAa;IAEX,wBAAkB;IAgBJ,gBAAU;;;EAGjC","file":"../../../../../../../../../packages/my_ticket_care/providers/login_from_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__login_from_provider: login_from_provider
  };
}));

//# sourceMappingURL=login_from_provider.dart.lib.js.map
