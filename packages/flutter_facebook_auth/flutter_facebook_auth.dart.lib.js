define(['dart_sdk', 'packages/flutter_facebook_auth_platform_interface/src/facebook_auth_plaftorm.dart', 'packages/flutter_facebook_auth_platform_interface/src/login_behavior.dart', 'packages/flutter_facebook_auth_platform_interface/src/access_token.dart', 'packages/flutter_facebook_auth_platform_interface/src/login_result.dart', 'packages/flutter_facebook_auth_platform_interface/src/facebook_permissions.dart'], (function load__packages__flutter_facebook_auth__flutter_facebook_auth_dart(dart_sdk, packages__flutter_facebook_auth_platform_interface__src__facebook_auth_plaftorm$46dart, packages__flutter_facebook_auth_platform_interface__src__login_behavior$46dart, packages__flutter_facebook_auth_platform_interface__src__access_token$46dart, packages__flutter_facebook_auth_platform_interface__src__login_result$46dart, packages__flutter_facebook_auth_platform_interface__src__facebook_permissions$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const facebook_auth_plaftorm = packages__flutter_facebook_auth_platform_interface__src__facebook_auth_plaftorm$46dart.src__facebook_auth_plaftorm;
  const login_behavior = packages__flutter_facebook_auth_platform_interface__src__login_behavior$46dart.src__login_behavior;
  const access_token = packages__flutter_facebook_auth_platform_interface__src__access_token$46dart.src__access_token;
  const login_result = packages__flutter_facebook_auth_platform_interface__src__login_result$46dart.src__login_result;
  const facebook_permissions = packages__flutter_facebook_auth_platform_interface__src__facebook_permissions$46dart.src__facebook_permissions;
  var flutter_facebook_auth = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList(["email", "public_profile"], core.String);
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: login_behavior.LoginBehavior.prototype,
        [_Enum__name]: "dialogOnly",
        [_Enum_index]: 3
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = ["package:flutter_facebook_auth/flutter_facebook_auth.dart"];
  var _authPlatform = dart.privateName(flutter_facebook_auth, "_authPlatform");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  flutter_facebook_auth.FacebookAuth = class FacebookAuth extends core.Object {
    static ['_#_#tearOff']() {
      return new flutter_facebook_auth.FacebookAuth.__();
    }
    static get i() {
      return flutter_facebook_auth.FacebookAuth.instance;
    }
    static getInstance() {
      return new flutter_facebook_auth.FacebookAuth.__();
    }
    get accessToken() {
      return this[_authPlatform].accessToken;
    }
    expressLogin() {
      return this[_authPlatform].expressLogin();
    }
    getUserData(opts) {
      let fields = opts && 'fields' in opts ? opts.fields : "name,email,picture.width(200)";
      return this[_authPlatform].getUserData({fields: fields});
    }
    logOut() {
      return this[_authPlatform].logOut();
    }
    login(opts) {
      let permissions = opts && 'permissions' in opts ? opts.permissions : C[0] || CT.C0;
      let loginBehavior = opts && 'loginBehavior' in opts ? opts.loginBehavior : C[1] || CT.C1;
      return this[_authPlatform].login({permissions: permissions, loginBehavior: loginBehavior});
    }
    webInitialize(opts) {
      let appId = opts && 'appId' in opts ? opts.appId : null;
      let cookie = opts && 'cookie' in opts ? opts.cookie : null;
      let xfbml = opts && 'xfbml' in opts ? opts.xfbml : null;
      let version = opts && 'version' in opts ? opts.version : null;
      return this[_authPlatform].webInitialize({appId: appId, cookie: cookie, xfbml: xfbml, version: version});
    }
    get permissions() {
      return this[_authPlatform].permissions;
    }
    get isWebSdkInitialized() {
      return this[_authPlatform].isWebSdkInitialized;
    }
    autoLogAppEventsEnabled(enabled) {
      return this[_authPlatform].autoLogAppEventsEnabled(enabled);
    }
    get isAutoLogAppEventsEnabled() {
      return this[_authPlatform].isAutoLogAppEventsEnabled;
    }
  };
  (flutter_facebook_auth.FacebookAuth.__ = function() {
    this[_authPlatform] = facebook_auth_plaftorm.FacebookAuthPlatform.instance;
    ;
  }).prototype = flutter_facebook_auth.FacebookAuth.prototype;
  dart.addTypeTests(flutter_facebook_auth.FacebookAuth);
  dart.addTypeCaches(flutter_facebook_auth.FacebookAuth);
  dart.setMethodSignature(flutter_facebook_auth.FacebookAuth, () => ({
    __proto__: dart.getMethods(flutter_facebook_auth.FacebookAuth.__proto__),
    expressLogin: dart.fnType(async.Future$(login_result.LoginResult), []),
    getUserData: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [], {fields: core.String}, {}),
    logOut: dart.fnType(async.Future$(dart.void), []),
    login: dart.fnType(async.Future$(login_result.LoginResult), [], {loginBehavior: login_behavior.LoginBehavior, permissions: core.List$(core.String)}, {}),
    webInitialize: dart.fnType(async.Future$(dart.void), [], {}, {appId: core.String, cookie: core.bool, version: core.String, xfbml: core.bool}),
    autoLogAppEventsEnabled: dart.fnType(async.Future$(dart.void), [core.bool])
  }));
  dart.setStaticMethodSignature(flutter_facebook_auth.FacebookAuth, () => ['getInstance']);
  dart.setGetterSignature(flutter_facebook_auth.FacebookAuth, () => ({
    __proto__: dart.getGetters(flutter_facebook_auth.FacebookAuth.__proto__),
    accessToken: async.Future$(dart.nullable(access_token.AccessToken)),
    permissions: async.Future$(dart.nullable(facebook_permissions.FacebookPermissions)),
    isWebSdkInitialized: core.bool,
    isAutoLogAppEventsEnabled: async.Future$(core.bool)
  }));
  dart.setStaticGetterSignature(flutter_facebook_auth.FacebookAuth, () => ['i']);
  dart.setLibraryUri(flutter_facebook_auth.FacebookAuth, I[0]);
  dart.setFieldSignature(flutter_facebook_auth.FacebookAuth, () => ({
    __proto__: dart.getFields(flutter_facebook_auth.FacebookAuth.__proto__),
    [_authPlatform]: dart.finalFieldType(facebook_auth_plaftorm.FacebookAuthPlatform)
  }));
  dart.setStaticFieldSignature(flutter_facebook_auth.FacebookAuth, () => ['instance']);
  dart.defineLazy(flutter_facebook_auth.FacebookAuth, {
    /*flutter_facebook_auth.FacebookAuth.instance*/get instance() {
      return new flutter_facebook_auth.FacebookAuth.__();
    },
    set instance(_) {}
  }, false);
  dart.trackLibraries("packages/flutter_facebook_auth/flutter_facebook_auth.dart", {
    "package:flutter_facebook_auth/flutter_facebook_auth.dart": flutter_facebook_auth
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_facebook_auth.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmB+B;IAAQ;;AAMA,YAAa;IAAG;;AAGb,YAAA,AAAc;IAAW;;AAS3B,YAAA,AAAc;IAAc;;UAwBzD;AAEL,YAAA,AAAc,0CAAoB,MAAM;IAAC;;AAGpB,YAAA,AAAc;IAAQ;;UAShC;UACC;AAEZ,YAAA,AAAc,yCACC,WAAW,iBACT,aAAa;IAC7B;;UAIa;UACF;UACA;UACE;AAEhB,YAAO,AAAc,2CACZ,KAAK,UACJ,MAAM,SACP,KAAK,WACH,OAAO;IAEpB;;AAKgD,YAAA,AAAc;IAAW;;AAIzC,YAAA,AAAc;IAAmB;4BAGvB;AACxC,YAAO,AAAc,6CAAwB,OAAO;IACtD;;AAKI,YAAA,AAAc;IAAyB;;;IA9FhB,sBAAqC;;EAPhD;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEI,2CAAQ;YAAgB","file":"../../../../../../../../../../packages/flutter_facebook_auth/flutter_facebook_auth.dart.lib.js"}');
  // Exports:
  return {
    flutter_facebook_auth: flutter_facebook_auth
  };
}));

//# sourceMappingURL=flutter_facebook_auth.dart.lib.js.map
