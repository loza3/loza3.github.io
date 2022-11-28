define(['dart_sdk', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter_facebook_auth_platform_interface/src/login_behavior.dart', 'packages/flutter_facebook_auth_platform_interface/src/access_token.dart', 'packages/flutter_facebook_auth_platform_interface/src/login_result.dart', 'packages/flutter_facebook_auth_platform_interface/src/facebook_permissions.dart'], (function load__packages__flutter_facebook_auth_platform_interface__src__facebook_auth_plaftorm_dart(dart_sdk, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter_facebook_auth_platform_interface__src__login_behavior$46dart, packages__flutter_facebook_auth_platform_interface__src__access_token$46dart, packages__flutter_facebook_auth_platform_interface__src__login_result$46dart, packages__flutter_facebook_auth_platform_interface__src__facebook_permissions$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const login_behavior = packages__flutter_facebook_auth_platform_interface__src__login_behavior$46dart.src__login_behavior;
  const access_token = packages__flutter_facebook_auth_platform_interface__src__access_token$46dart.src__access_token;
  const login_result = packages__flutter_facebook_auth_platform_interface__src__login_result$46dart.src__login_result;
  const facebook_permissions = packages__flutter_facebook_auth_platform_interface__src__facebook_permissions$46dart.src__facebook_permissions;
  var facebook_auth_plaftorm = Object.create(dart.library);
  var facebook_auth_implementation = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    LinkedHashMapOfString$dynamic: () => (T.LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))(),
    FutureOrOfLoginResult: () => (T.FutureOrOfLoginResult = dart.constFn(async.FutureOr$(login_result.LoginResult)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    FutureOrOfMapOfString$dynamic: () => (T.FutureOrOfMapOfString$dynamic = dart.constFn(async.FutureOr$(T.MapOfString$dynamic())))(),
    AccessTokenN: () => (T.AccessTokenN = dart.constFn(dart.nullable(access_token.AccessToken)))(),
    FacebookPermissionsN: () => (T.FacebookPermissionsN = dart.constFn(dart.nullable(facebook_permissions.FacebookPermissions)))(),
    IdentityMapOfString$bool: () => (T.IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C2() {
      return C[2] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C[2] || CT.C2
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C[1] || CT.C1,
        [MethodChannel_name]: "app.meedu/flutter_facebook_auth"
      });
    },
    get C3() {
      return C[3] = dart.constList(["email", "public_profile"], core.String);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: login_behavior.LoginBehavior.prototype,
        [_Enum__name]: "dialogOnly",
        [_Enum_index]: 3
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "package:flutter_facebook_auth_platform_interface/src/facebook_auth_plaftorm.dart",
    "package:flutter_facebook_auth_platform_interface/src/facebook_auth_implementation.dart"
  ];
  facebook_auth_plaftorm.FacebookAuthPlatform = class FacebookAuthPlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return facebook_auth_plaftorm.FacebookAuthPlatform._instance;
    }
    static getInstance() {
      return new facebook_auth_implementation.FacebookAuthPlatformImplementation.new();
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, facebook_auth_plaftorm.FacebookAuthPlatform._token);
      facebook_auth_plaftorm.FacebookAuthPlatform._instance = instance;
    }
  };
  (facebook_auth_plaftorm.FacebookAuthPlatform.new = function() {
    facebook_auth_plaftorm.FacebookAuthPlatform.__proto__.new.call(this, {token: facebook_auth_plaftorm.FacebookAuthPlatform._token});
    ;
  }).prototype = facebook_auth_plaftorm.FacebookAuthPlatform.prototype;
  dart.addTypeTests(facebook_auth_plaftorm.FacebookAuthPlatform);
  dart.addTypeCaches(facebook_auth_plaftorm.FacebookAuthPlatform);
  dart.setStaticMethodSignature(facebook_auth_plaftorm.FacebookAuthPlatform, () => ['getInstance']);
  dart.setStaticGetterSignature(facebook_auth_plaftorm.FacebookAuthPlatform, () => ['instance']);
  dart.setStaticSetterSignature(facebook_auth_plaftorm.FacebookAuthPlatform, () => ['instance']);
  dart.setLibraryUri(facebook_auth_plaftorm.FacebookAuthPlatform, I[0]);
  dart.setStaticFieldSignature(facebook_auth_plaftorm.FacebookAuthPlatform, () => ['_token', '_instance']);
  dart.defineLazy(facebook_auth_plaftorm.FacebookAuthPlatform, {
    /*facebook_auth_plaftorm.FacebookAuthPlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*facebook_auth_plaftorm.FacebookAuthPlatform._instance*/get _instance() {
      return new facebook_auth_implementation.FacebookAuthPlatformImplementation.new();
    },
    set _instance(_) {}
  }, false);
  var channel = dart.privateName(facebook_auth_implementation, "FacebookAuthPlatformImplementation.channel");
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  facebook_auth_implementation.FacebookAuthPlatformImplementation = class FacebookAuthPlatformImplementation extends facebook_auth_plaftorm.FacebookAuthPlatform {
    get channel() {
      return this[channel];
    }
    set channel(value) {
      this[channel] = value;
    }
    get isAndroid() {
      return platform.defaultTargetPlatform === platform.TargetPlatform.android;
    }
    get isIOS() {
      return platform.defaultTargetPlatform === platform.TargetPlatform.iOS;
    }
    login(opts) {
      let permissions = opts && 'permissions' in opts ? opts.permissions : C[3] || CT.C3;
      let loginBehavior = opts && 'loginBehavior' in opts ? opts.loginBehavior : C[4] || CT.C4;
      return async.async(login_result.LoginResult, (function* login() {
        try {
          let result = (yield this.channel.invokeMethod(dart.dynamic, "login", new (T.IdentityMapOfString$Object()).from(["permissions", permissions, "loginBehavior", login_behavior.getLoginBehaviorAsString(loginBehavior)])));
          let token = access_token.AccessToken.fromJson(T.LinkedHashMapOfString$dynamic().from(core.Map.as(result)));
          return new login_result.LoginResult.new({status: login_result.LoginStatus.success, accessToken: token});
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (message_codec.PlatformException.is(e)) {
            return T.FutureOrOfLoginResult().as(login_result.LoginResult.getResultFromException(e));
          } else
            throw e$;
        }
      }).bind(this));
    }
    expressLogin() {
      return async.async(login_result.LoginResult, (function* expressLogin() {
        if (this.isAndroid) {
          try {
            let result = (yield this.channel.invokeMethod(dart.dynamic, "expressLogin"));
            let token = access_token.AccessToken.fromJson(T.LinkedHashMapOfString$dynamic().from(core.Map.as(result)));
            return new login_result.LoginResult.new({status: login_result.LoginStatus.success, accessToken: token});
          } catch (e$) {
            let e = dart.getThrown(e$);
            if (message_codec.PlatformException.is(e)) {
              return T.FutureOrOfLoginResult().as(login_result.LoginResult.getResultFromException(e));
            } else
              throw e$;
          }
        }
        return new login_result.LoginResult.new({status: login_result.LoginStatus.failed, message: "Method only allowed on Android"});
      }).bind(this));
    }
    getUserData(opts) {
      let fields = opts && 'fields' in opts ? opts.fields : "name,email,picture.width(200)";
      return async.async(T.MapOfString$dynamic(), (function* getUserData() {
        let result = (yield this.channel.invokeMethod(dart.dynamic, "getUserData", new (T.IdentityMapOfString$String()).from(["fields", fields])));
        return T.FutureOrOfMapOfString$dynamic().as(this.isAndroid ? convert.jsonDecode(core.String.as(result)) : T.LinkedHashMapOfString$dynamic().from(core.Map.as(result)));
      }).bind(this));
    }
    logOut() {
      return async.async(dart.void, (function* logOut() {
        yield this.channel.invokeMethod(dart.dynamic, "logOut");
      }).bind(this));
    }
    get accessToken() {
      return async.async(T.AccessTokenN(), (function* accessToken() {
        let result = (yield this.channel.invokeMethod(dart.dynamic, "getAccessToken"));
        if (result != null) {
          return access_token.AccessToken.fromJson(T.LinkedHashMapOfString$dynamic().from(core.Map.as(result)));
        }
        return null;
      }).bind(this));
    }
    webInitialize(opts) {
      let appId = opts && 'appId' in opts ? opts.appId : null;
      let cookie = opts && 'cookie' in opts ? opts.cookie : null;
      let xfbml = opts && 'xfbml' in opts ? opts.xfbml : null;
      let version = opts && 'version' in opts ? opts.version : null;
      return async.async(dart.void, function* webInitialize() {
      });
    }
    get permissions() {
      return async.async(T.FacebookPermissionsN(), (function* permissions() {
        let accessToken = (yield this.accessToken);
        if (accessToken != null) {
          return new facebook_permissions.FacebookPermissions.new({granted: dart.nullCheck(accessToken.grantedPermissions), declined: dart.nullCheck(accessToken.declinedPermissions)});
        }
        return null;
      }).bind(this));
    }
    get isWebSdkInitialized() {
      return false;
    }
    get isAutoLogAppEventsEnabled() {
      return async.async(core.bool, (function* isAutoLogAppEventsEnabled() {
        let t2;
        if (this.isIOS) {
          let enabled = (yield this.channel.invokeMethod(core.bool, "isAutoLogAppEventsEnabled"));
          t2 = enabled;
          return t2 == null ? false : t2;
        }
        return false;
      }).bind(this));
    }
    autoLogAppEventsEnabled(enabled) {
      return async.async(dart.void, (function* autoLogAppEventsEnabled() {
        if (this.isIOS) {
          yield this.channel.invokeMethod(dart.dynamic, "updateAutoLogAppEventsEnabled", new (T.IdentityMapOfString$bool()).from(["enabled", enabled]));
        }
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new facebook_auth_implementation.FacebookAuthPlatformImplementation.new();
    }
  };
  (facebook_auth_implementation.FacebookAuthPlatformImplementation.new = function() {
    this[channel] = C[0] || CT.C0;
    facebook_auth_implementation.FacebookAuthPlatformImplementation.__proto__.new.call(this);
    ;
  }).prototype = facebook_auth_implementation.FacebookAuthPlatformImplementation.prototype;
  dart.addTypeTests(facebook_auth_implementation.FacebookAuthPlatformImplementation);
  dart.addTypeCaches(facebook_auth_implementation.FacebookAuthPlatformImplementation);
  dart.setMethodSignature(facebook_auth_implementation.FacebookAuthPlatformImplementation, () => ({
    __proto__: dart.getMethods(facebook_auth_implementation.FacebookAuthPlatformImplementation.__proto__),
    login: dart.fnType(async.Future$(login_result.LoginResult), [], {loginBehavior: login_behavior.LoginBehavior, permissions: core.List$(core.String)}, {}),
    expressLogin: dart.fnType(async.Future$(login_result.LoginResult), []),
    getUserData: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [], {fields: core.String}, {}),
    logOut: dart.fnType(async.Future$(dart.void), []),
    webInitialize: dart.fnType(async.Future$(dart.void), [], {}, {appId: core.String, cookie: core.bool, version: core.String, xfbml: core.bool}),
    autoLogAppEventsEnabled: dart.fnType(async.Future$(dart.void), [core.bool])
  }));
  dart.setGetterSignature(facebook_auth_implementation.FacebookAuthPlatformImplementation, () => ({
    __proto__: dart.getGetters(facebook_auth_implementation.FacebookAuthPlatformImplementation.__proto__),
    isAndroid: core.bool,
    isIOS: core.bool,
    accessToken: async.Future$(dart.nullable(access_token.AccessToken)),
    permissions: async.Future$(dart.nullable(facebook_permissions.FacebookPermissions)),
    isWebSdkInitialized: core.bool,
    isAutoLogAppEventsEnabled: async.Future$(core.bool)
  }));
  dart.setLibraryUri(facebook_auth_implementation.FacebookAuthPlatformImplementation, I[1]);
  dart.setFieldSignature(facebook_auth_implementation.FacebookAuthPlatformImplementation, () => ({
    __proto__: dart.getFields(facebook_auth_implementation.FacebookAuthPlatformImplementation.__proto__),
    channel: dart.fieldType(platform_channel.MethodChannel)
  }));
  dart.trackLibraries("packages/flutter_facebook_auth_platform_interface/src/facebook_auth_plaftorm.dart", {
    "package:flutter_facebook_auth_platform_interface/src/facebook_auth_plaftorm.dart": facebook_auth_plaftorm,
    "package:flutter_facebook_auth_platform_interface/src/facebook_auth_implementation.dart": facebook_auth_implementation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["facebook_auth_plaftorm.dart","facebook_auth_implementation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuB8C;IAAS;;AAIjD;IAAoC;wBAGC;AACQ,MAA7B,wDAAY,QAAQ,EAAE;AACpB,MAApB,wDAAY,QAAQ;IACtB;;;AAfyB,iFAAa;;EAAO;;;;;;;;;MADhC,kDAAM;YAAG;;MAGM,qDAAS;YAAG;;;;;;;;;;;;ICF1B;;;;;;;AAJQ,YAAA,AAAsB,oCAAkB;IAAO;;AACnD,YAAA,AAAsB,oCAAkB;IAAG;;UAc9C;UACC;AAFS;AAIvB;AACQ,wBAAS,MAAM,AAAQ,wCAAa,SAAS,2CACjD,eAAe,WAAW,EAC1B,iBAAiB,wCAAyB,aAAa;AAEnD,sBAAoB,kCAAS,mDAA0B,MAAM;AACnE,gBAAO,2CAAgC,+CAAsB,KAAK;;cACtC;AAA5B;AACA,gDAAmB,gDAAuB,CAAC;;;;MAE/C;;;AAUgC;AAC9B,YAAI;AACF;AACQ,0BAAS,MAAM,AAAQ,wCAAa;AACpC,wBAAoB,kCAAS,mDAA0B,MAAM;AACnE,kBAAO,2CAAgC,+CAAsB,KAAK;;gBACtC;AAA5B;AACA,kDAAmB,gDAAuB,CAAC;;;;;AAG/C,cAAO,2CACe,0CACX;MAEb;;;UAOS;AAD+B;AAGhC,sBAAS,MAAM,AAAQ,wCAAa,eAAe,2CACvD,UAAU,MAAM;AAElB,cACI,sCADG,iBACD,kCAAW,MAAM,KACjB,mDAA0B,MAAM;MACxC;;;AAImB;AACmB,QAApC,MAAM,AAAQ,wCAAa;MAC7B;;;AAIqC;AAC7B,sBAAS,MAAM,AAAQ,wCAAa;AAC1C,YAAI,MAAM;AACR,gBAAmB,mCAAS,mDAA0B,MAAM;;AAE9D,cAAO;MACT;;;UAKkB;UACF;UACA;UACE;AAJQ;MAKhB;;;AAImC;AACxB,2BAAc,MAAW;AAC5C,YAAI,WAAW;AACb,gBAAO,4DACkC,eAA9B,AAAY,WAAD,gCACqB,eAA/B,AAAY,WAAD;;AAGzB,cAAO;MACT;;;AAKgC;IAAK;;AAGM;;AACzC,YAAI;AACI,yBACF,MAAM,AAAQ,qCAAmB;AACrC,eAAO,OAAO;gBAAP,cAAW;;AAEpB,cAAO;MACT;;4BAG0C;AAAN;AAClC,YAAI;AAGA,UAFF,MAAM,AAAQ,wCAAa,iCAAiC,yCAC1D,WAAW,OAAO;;MAGxB;;;;;;;IA7Hc;;;EA8HhB","file":"../../../../../../../../../../../packages/flutter_facebook_auth_platform_interface/src/facebook_auth_plaftorm.dart.lib.js"}');
  // Exports:
  return {
    src__facebook_auth_plaftorm: facebook_auth_plaftorm,
    src__facebook_auth_implementation: facebook_auth_implementation
  };
}));

//# sourceMappingURL=facebook_auth_plaftorm.dart.lib.js.map
