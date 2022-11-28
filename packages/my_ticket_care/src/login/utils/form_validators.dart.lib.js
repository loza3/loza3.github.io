define(['dart_sdk'], (function load__packages__my_ticket_care__src__login__utils__form_validators_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var form_validators = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/login/utils/form_validators.dart"];
  form_validators.Validator = class Validator extends core.Object {
    static validatorName(value) {
      let t0;
      let pattern = "^[a-zA-Z ]+$";
      let regExp = core.RegExp.new(pattern);
      return regExp.hasMatch((t0 = value, t0 == null ? "" : t0)) ? null : "Introduzca un nombre valido";
    }
    static validatorEmail(value) {
      let t0;
      let pattern = "^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
      let regExp = core.RegExp.new(pattern);
      return regExp.hasMatch((t0 = value, t0 == null ? "" : t0)) ? null : "Introduce un email válido";
    }
    static validatorPhoneNumer(value) {
      let t0;
      let pattern = "^[0-9]{8}$";
      let regExp = core.RegExp.new(pattern);
      return regExp.hasMatch((t0 = value, t0 == null ? "" : t0)) ? null : "Introduce un telefono valido";
    }
    static validatorPassword(value) {
      return value != null && value.length >= 3 ? null : "La contraseña debe ser mayor a 3 caracteres";
    }
    static ['_#new#tearOff']() {
      return new form_validators.Validator.new();
    }
  };
  (form_validators.Validator.new = function() {
    ;
  }).prototype = form_validators.Validator.prototype;
  dart.addTypeTests(form_validators.Validator);
  dart.addTypeCaches(form_validators.Validator);
  dart.setStaticMethodSignature(form_validators.Validator, () => ['validatorName', 'validatorEmail', 'validatorPhoneNumer', 'validatorPassword']);
  dart.setLibraryUri(form_validators.Validator, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/login/utils/form_validators.dart", {
    "package:my_ticket_care/src/login/utils/form_validators.dart": form_validators
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["form_validators.dart"],"names":[],"mappings":";;;;;;;;;;;;;yBACuC;;AAC5B,oBAAU;AACV,mBAAS,gBAAO,OAAO;AAC9B,YAAO,AAAO,OAAD,WAAgB,KAAN,KAAK,EAAL,aAAS,YAAM,OAAO;IAC/C;0BAEsC;;AAC7B,oBACH;AACG,mBAAS,gBAAO,OAAO;AAC9B,YAAO,AAAO,OAAD,WAAgB,KAAN,KAAK,EAAL,aAAS,YAAM,OAAO;IAC/C;+BAE2C;;AAClC,oBAAU;AACV,mBAAS,gBAAO,OAAO;AAC9B,YAAO,AAAO,OAAD,WAAgB,KAAN,KAAK,EAAL,aAAS,YAAM,OAAO;IAC/C;6BAEyC;AACvC,YAAO,AAAc,MAAT,YAAY,AAAM,AAAO,KAAR,WAAW,IAClC,OACA;IACR;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/src/login/utils/form_validators.dart.lib.js"}');
  // Exports:
  return {
    src__login__utils__form_validators: form_validators
  };
}));

//# sourceMappingURL=form_validators.dart.lib.js.map
