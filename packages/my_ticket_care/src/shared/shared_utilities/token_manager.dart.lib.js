define(['dart_sdk'], (function load__packages__my_ticket_care__src__shared__shared_utilities__token_manager_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var token_manager = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/shared/shared_utilities/token_manager.dart"];
  var _token = dart.privateName(token_manager, "_token");
  token_manager.TokenManager = class TokenManager extends core.Object {
    static ['_#_constr#tearOff']() {
      return new token_manager.TokenManager._constr();
    }
    static new(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      token_manager.TokenManager._singleton[_token] = token;
      return token_manager.TokenManager._singleton;
    }
    static ['_#new#tearOff'](opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return token_manager.TokenManager.new({token: token});
    }
    static getToken() {
      return token_manager.TokenManager._singleton[_token];
    }
  };
  (token_manager.TokenManager._constr = function() {
    this[_token] = null;
    ;
  }).prototype = token_manager.TokenManager.prototype;
  dart.addTypeTests(token_manager.TokenManager);
  dart.addTypeCaches(token_manager.TokenManager);
  dart.setStaticMethodSignature(token_manager.TokenManager, () => ['new', 'getToken']);
  dart.setLibraryUri(token_manager.TokenManager, I[0]);
  dart.setFieldSignature(token_manager.TokenManager, () => ({
    __proto__: dart.getFields(token_manager.TokenManager.__proto__),
    [_token]: dart.fieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(token_manager.TokenManager, () => ['_singleton']);
  dart.defineLazy(token_manager.TokenManager, {
    /*token_manager.TokenManager._singleton*/get _singleton() {
      return new token_manager.TokenManager._constr();
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_utilities/token_manager.dart", {
    "package:my_ticket_care/src/shared/shared_utilities/token_manager.dart": token_manager
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["token_manager.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;UASwC;AACX,MAAzB,AAAW,gDAAS,KAAK;AACzB,YAAO;IACT;;;;;;AAIE,YAAO,AAAW;IACpB;;;IAbQ;;EAGc;;;;;;;;;;;MAFI,qCAAU;YAAgB","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_utilities/token_manager.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_utilities__token_manager: token_manager
  };
}));

//# sourceMappingURL=token_manager.dart.lib.js.map
