define(['dart_sdk', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter_facebook_auth_platform_interface/src/access_token.dart'], (function load__packages__flutter_facebook_auth_platform_interface__src__login_result_dart(dart_sdk, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter_facebook_auth_platform_interface__src__access_token$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const access_token = packages__flutter_facebook_auth_platform_interface__src__access_token$46dart.src__access_token;
  var login_result = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidToLoginStatus: () => (T.VoidToLoginStatus = dart.constFn(dart.fnType(login_result.LoginStatus, [])))(),
    LoginStatusTodynamic: () => (T.LoginStatusTodynamic = dart.constFn(dart.fnType(dart.dynamic, [login_result.LoginStatus])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: login_result.LoginStatus.prototype,
        [_Enum__name]: "success",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: login_result.LoginStatus.prototype,
        [_Enum__name]: "cancelled",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: login_result.LoginStatus.prototype,
        [_Enum__name]: "failed",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: login_result.LoginStatus.prototype,
        [_Enum__name]: "operationInProgress",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], login_result.LoginStatus);
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = ["package:flutter_facebook_auth_platform_interface/src/login_result.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  login_result.LoginStatus = class LoginStatus extends core._Enum {
    toString() {
      return "LoginStatus." + this[_name];
    }
  };
  (login_result.LoginStatus.new = function(index, name) {
    login_result.LoginStatus.__proto__.new.call(this, index, name);
    ;
  }).prototype = login_result.LoginStatus.prototype;
  dart.addTypeTests(login_result.LoginStatus);
  dart.addTypeCaches(login_result.LoginStatus);
  dart.setLibraryUri(login_result.LoginStatus, I[0]);
  dart.setStaticFieldSignature(login_result.LoginStatus, () => ['values', 'success', 'cancelled', 'failed', 'operationInProgress']);
  dart.defineExtensionMethods(login_result.LoginStatus, ['toString']);
  dart.defineLazy(login_result.LoginStatus, {
    /*login_result.LoginStatus.values*/get values() {
      return C[0] || CT.C0;
    },
    /*login_result.LoginStatus.success*/get success() {
      return C[1] || CT.C1;
    },
    /*login_result.LoginStatus.cancelled*/get cancelled() {
      return C[2] || CT.C2;
    },
    /*login_result.LoginStatus.failed*/get failed() {
      return C[3] || CT.C3;
    },
    /*login_result.LoginStatus.operationInProgress*/get operationInProgress() {
      return C[4] || CT.C4;
    }
  }, false);
  var status$ = dart.privateName(login_result, "LoginResult.status");
  var message$ = dart.privateName(login_result, "LoginResult.message");
  var accessToken$ = dart.privateName(login_result, "LoginResult.accessToken");
  login_result.LoginResult = class LoginResult extends core.Object {
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get accessToken() {
      return this[accessToken$];
    }
    set accessToken(value) {
      super.accessToken = value;
    }
    static ['_#new#tearOff'](opts) {
      let status = opts && 'status' in opts ? opts.status : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      return new login_result.LoginResult.new({status: status, message: message, accessToken: accessToken});
    }
    static getResultFromException(e) {
      let status = null;
      function status$35get() {
        let t3;
        t3 = status;
        return t3 == null ? dart.throw(new _internal.LateError.localNI("status")) : t3;
      }
      dart.fn(status$35get, T.VoidToLoginStatus());
      function status$35set(status$35param) {
        return status = status$35param;
      }
      dart.fn(status$35set, T.LoginStatusTodynamic());
      switch (e.code) {
        case "CANCELLED":
          {
            status$35set(login_result.LoginStatus.cancelled);
            break;
          }
        case "OPERATION_IN_PROGRESS":
          {
            status$35set(login_result.LoginStatus.operationInProgress);
            break;
          }
        default:
          {
            status$35set(login_result.LoginStatus.failed);
          }
      }
      return new login_result.LoginResult.new({status: status$35get(), message: e.message});
    }
  };
  (login_result.LoginResult.new = function(opts) {
    let status = opts && 'status' in opts ? opts.status : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    this[status$] = status;
    this[message$] = message;
    this[accessToken$] = accessToken;
    ;
  }).prototype = login_result.LoginResult.prototype;
  dart.addTypeTests(login_result.LoginResult);
  dart.addTypeCaches(login_result.LoginResult);
  dart.setStaticMethodSignature(login_result.LoginResult, () => ['getResultFromException']);
  dart.setLibraryUri(login_result.LoginResult, I[0]);
  dart.setFieldSignature(login_result.LoginResult, () => ({
    __proto__: dart.getFields(login_result.LoginResult.__proto__),
    status: dart.finalFieldType(login_result.LoginStatus),
    message: dart.finalFieldType(dart.nullable(core.String)),
    accessToken: dart.finalFieldType(dart.nullable(access_token.AccessToken))
  }));
  dart.trackLibraries("packages/flutter_facebook_auth_platform_interface/src/login_result.dart", {
    "package:flutter_facebook_auth_platform_interface/src/login_result.dart": login_result
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_result.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAImE;;;;;;;;;;;;MAA9D,+BAAM;;;MAAQ,gCAAO;;;MAAE,kCAAS;;;MAAE,+BAAM;;;MAAE,4CAAmB;;;;;;;;IAK9C;;;;;;IAGJ;;;;;;IAIK;;;;;;;;;;;;kCAS6B;AAE7B;;;;;;;;;;;AACjB,cAAQ,AAAE,CAAD;;;AAEyB,YAA9B,aAAqB;AACrB;;;;AAEwC,YAAxC,aAAqB;AACrB;;;;AAE2B,YAA3B,aAAqB;;;AAGzB,YAAO,2CAAoB,yBAAiB,AAAE,CAAD;IAC/C;;;QArBgB;QACT;QACA;IAFS;IACT;IACA;;EACL","file":"../../../../../../../../../../../packages/flutter_facebook_auth_platform_interface/src/login_result.dart.lib.js"}');
  // Exports:
  return {
    src__login_result: login_result
  };
}));

//# sourceMappingURL=login_result.dart.lib.js.map
