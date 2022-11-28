define(['dart_sdk', 'packages/flutter_facebook_auth_platform_interface/src/facebook_auth_plaftorm.dart', 'packages/flutter_facebook_auth_platform_interface/src/login_result.dart', 'packages/flutter_facebook_auth_platform_interface/src/access_token.dart', 'packages/flutter_facebook_auth_web/src/interop/convert_interop.dart', 'packages/flutter_facebook_auth_platform_interface/src/login_behavior.dart', 'packages/flutter_facebook_auth_platform_interface/src/facebook_permissions.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter_web_plugins/src/plugin_registry.dart'], (function load__packages__flutter_facebook_auth_web__src__facebook_auth_plugin_dart(dart_sdk, packages__flutter_facebook_auth_platform_interface__src__facebook_auth_plaftorm$46dart, packages__flutter_facebook_auth_platform_interface__src__login_result$46dart, packages__flutter_facebook_auth_platform_interface__src__access_token$46dart, packages__flutter_facebook_auth_web__src__interop__convert_interop$46dart, packages__flutter_facebook_auth_platform_interface__src__login_behavior$46dart, packages__flutter_facebook_auth_platform_interface__src__facebook_permissions$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter_web_plugins__src__plugin_registry$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const facebook_auth_plaftorm = packages__flutter_facebook_auth_platform_interface__src__facebook_auth_plaftorm$46dart.src__facebook_auth_plaftorm;
  const login_result = packages__flutter_facebook_auth_platform_interface__src__login_result$46dart.src__login_result;
  const access_token = packages__flutter_facebook_auth_platform_interface__src__access_token$46dart.src__access_token;
  const convert_interop = packages__flutter_facebook_auth_web__src__interop__convert_interop$46dart.src__interop__convert_interop;
  const login_behavior = packages__flutter_facebook_auth_platform_interface__src__login_behavior$46dart.src__login_behavior;
  const facebook_permissions = packages__flutter_facebook_auth_platform_interface__src__facebook_permissions$46dart.src__facebook_permissions;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  var facebook_auth_plugin = Object.create(dart.library);
  var $join = dartx.join;
  var $type = dartx.type;
  var $src = dartx.src;
  var $head = dartx.head;
  var $append = dartx.append;
  var $onLoad = dartx.onLoad;
  var $_get = dartx._get;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    CompleterOfLoginResult: () => (T.CompleterOfLoginResult = dart.constFn(async.Completer$(login_result.LoginResult)))(),
    dynamicTovoid: () => (T.dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))(),
    LoginResultTovoid: () => (T.LoginResultTovoid = dart.constFn(dart.fnType(dart.void, [login_result.LoginResult])))(),
    AccessTokenN: () => (T.AccessTokenN = dart.constFn(dart.nullable(access_token.AccessToken)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    CompleterOfMapOfString$dynamic: () => (T.CompleterOfMapOfString$dynamic = dart.constFn(async.Completer$(T.MapOfString$dynamic())))(),
    LinkedHashMapOfString$dynamic: () => (T.LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))(),
    CompleterOfvoid: () => (T.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    FacebookPermissionsN: () => (T.FacebookPermissionsN = dart.constFn(dart.nullable(facebook_permissions.FacebookPermissions)))(),
    CompleterOfFacebookPermissionsN: () => (T.CompleterOfFacebookPermissionsN = dart.constFn(async.Completer$(T.FacebookPermissionsN())))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    FutureOfbool: () => (T.FutureOfbool = dart.constFn(async.Future$(core.bool)))()
  };
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
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_facebook_auth_web-3.2.0/lib/src/facebook_auth_plugin.dart",
    "package:flutter_facebook_auth_web/src/facebook_auth_plugin.dart"
  ];
  var _appId = dart.privateName(facebook_auth_plugin, "_appId");
  var _initialized = dart.privateName(facebook_auth_plugin, "_initialized");
  var _handleResponse = dart.privateName(facebook_auth_plugin, "_handleResponse");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _injectSrcScript = dart.privateName(facebook_auth_plugin, "_injectSrcScript");
  var _checkResponseError = dart.privateName(facebook_auth_plugin, "_checkResponseError");
  facebook_auth_plugin.FlutterFacebookAuthPlugin = class FlutterFacebookAuthPlugin extends facebook_auth_plaftorm.FacebookAuthPlatform {
    static registerWith(registrar) {
      facebook_auth_plaftorm.FacebookAuthPlatform.instance = new facebook_auth_plugin.FlutterFacebookAuthPlugin.new();
    }
    get accessToken() {
      return async.async(T.AccessTokenN(), (function* accessToken() {
        if (!this[_initialized]) return null;
        let completer = T.CompleterOfLoginResult().new();
        dart.global.FB.getLoginStatus(js.allowInterop(T.dynamicTovoid(), dart.fn(jsResponse => {
          this[_handleResponse](jsResponse).then(dart.void, dart.fn(result => completer.complete(result), T.LoginResultTovoid()));
        }, T.dynamicTovoid())));
        let result = (yield completer.future);
        return result.accessToken;
      }).bind(this));
    }
    expressLogin() {
      dart.throw(new core.UnimplementedError.new());
    }
    getUserData(opts) {
      let fields = opts && 'fields' in opts ? opts.fields : "name,email,picture.width(200)";
      return async.async(T.MapOfString$dynamic(), (function* getUserData() {
        if (!this[_initialized]) return new (T.IdentityMapOfString$dynamic()).from(["error", "window.FB is undefined"]);
        let c = T.CompleterOfMapOfString$dynamic().new();
        dart.global.FB.api("/me?fields=" + fields, js.allowInterop(T.dynamicTovoid(), dart.fn(_ => c.complete(T.LinkedHashMapOfString$dynamic().from(convert_interop.convert(_))), T.dynamicTovoid())));
        return c.future;
      }).bind(this));
    }
    logOut() {
      return async.async(dart.void, (function* logOut() {
        if (!this[_initialized]) return;
        let c = T.CompleterOfvoid().new();
        dart.global.FB.logout(js.allowInterop(T.dynamicTovoid(), dart.fn(_ => {
          if (!c.isCompleted) {
            c.complete();
          }
        }, T.dynamicTovoid())));
        return c.future;
      }).bind(this));
    }
    login(opts) {
      let permissions = opts && 'permissions' in opts ? opts.permissions : C[0] || CT.C0;
      let loginBehavior = opts && 'loginBehavior' in opts ? opts.loginBehavior : C[1] || CT.C1;
      return async.async(login_result.LoginResult, (function* login() {
        if (!this[_initialized]) {
          return new login_result.LoginResult.new({status: login_result.LoginStatus.failed, message: "window.FB is undefined"});
        }
        let scope = permissions[$join](",");
        let completer = T.CompleterOfLoginResult().new();
        dart.global.FB.login(js.allowInterop(T.dynamicTovoid(), dart.fn(jsResponse => {
          this[_handleResponse](jsResponse).then(dart.void, dart.fn(result => completer.complete(result), T.LoginResultTovoid()));
        }, T.dynamicTovoid())), {scope: scope, return_scopes: true});
        return completer.future;
      }).bind(this));
    }
    webInitialize(opts) {
      let appId = opts && 'appId' in opts ? opts.appId : null;
      let cookie = opts && 'cookie' in opts ? opts.cookie : null;
      let xfbml = opts && 'xfbml' in opts ? opts.xfbml : null;
      let version = opts && 'version' in opts ? opts.version : null;
      return async.async(dart.void, (function* webInitialize() {
        this[_appId] = appId;
        if (js.context._get("FB") != null) {
          this[_initialized] = true;
          return;
        }
        yield this[_injectSrcScript]();
        dart.global.FB.init({appId: appId, version: version, cookie: cookie, xfbml: xfbml});
        this[_initialized] = true;
      }).bind(this));
    }
    [_injectSrcScript]() {
      return async.async(dart.void, function* _injectSrcScript() {
        let t0;
        let script = (t0 = html.ScriptElement.new(), (() => {
          t0[$type] = "text/javascript";
          t0[$src] = "https://connect.facebook.net/en_US/sdk.js";
          t0.async = true;
          t0.defer = true;
          t0.crossOrigin = "anonymous";
          return t0;
        })());
        if (!(html.document[$head] != null)) dart.assertFailed(null, I[0], 173, 12, "document.head != null");
        dart.nullCheck(html.document[$head])[$append](script);
        yield script[$onLoad].first;
      });
    }
    get permissions() {
      return async.async(T.FacebookPermissionsN(), (function* permissions() {
        if (!this[_initialized]) return null;
        let c = T.CompleterOfFacebookPermissionsN().new();
        dart.global.FB.api("/me/permissions", js.allowInterop(T.dynamicTovoid(), dart.fn(_ => {
          let t1;
          try {
            let granted = T.JSArrayOfString().of([]);
            let declined = T.JSArrayOfString().of([]);
            let response = convert_interop.convert(_);
            this[_checkResponseError](response);
            for (let item of core.List.as(response[$_get]("data"))) {
              let permission = core.String.as(dart.dsend(item, '_get', ["permission"]));
              if (dart.equals(dart.dsend(item, '_get', ["status"]), "granted")) {
                granted[$add](permission);
              } else {
                declined[$add](permission);
              }
            }
            c.complete(new facebook_permissions.FacebookPermissions.new({granted: granted, declined: declined}));
          } catch (e$) {
            let e = dart.getThrown(e$);
            if (message_codec.PlatformException.is(e)) {
              core.print(new core._StringStackTrace.new((t1 = e.message, t1 == null ? "unknown error" : t1)));
              c.complete(null);
            } else
              throw e$;
          }
        }, T.dynamicTovoid())));
        return c.future;
      }).bind(this));
    }
    [_handleResponse](_) {
      return async.async(login_result.LoginResult, (function* _handleResponse() {
        try {
          let response = convert_interop.convert(_);
          this[_checkResponseError](response);
          let status = T.StringN().as(response[$_get]("status"));
          if (status == null) {
            return new login_result.LoginResult.new({status: login_result.LoginStatus.failed});
          }
          if (status === "connected") {
            let authResponse = T.MapOfString$dynamic().as(response[$_get]("authResponse"));
            let expires = new core.DateTime.now().add(new core.Duration.new({seconds: core.int.as(authResponse[$_get]("data_access_expiration_time"))}));
            return new login_result.LoginResult.new({status: login_result.LoginStatus.success, accessToken: new access_token.AccessToken.new({applicationId: this[_appId], grantedPermissions: null, declinedPermissions: null, userId: core.String.as(authResponse[$_get]("userID")), expires: expires, lastRefresh: new core.DateTime.now(), token: core.String.as(authResponse[$_get]("accessToken")), isExpired: false, graphDomain: T.StringN().as(authResponse[$_get]("graphDomain"))})});
          } else if (status === "unknown") {
            return new login_result.LoginResult.new({status: login_result.LoginStatus.cancelled});
          }
          return new login_result.LoginResult.new({status: login_result.LoginStatus.failed, message: "unknown error"});
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (message_codec.PlatformException.is(e)) {
            return new login_result.LoginResult.new({status: login_result.LoginStatus.failed, message: e.message});
          } else
            throw e$;
        }
      }).bind(this));
    }
    [_checkResponseError](response) {
      if (response[$_get]("error") != null) {
        dart.throw(new message_codec.PlatformException.new({code: "REQUEST_ERROR", message: T.StringN().as(dart.dsend(response[$_get]("error"), '_get', ["message"]))}));
      }
    }
    get isWebSdkInitialized() {
      return this[_initialized];
    }
    autoLogAppEventsEnabled(enabled) {
      return async.async(dart.void, function* autoLogAppEventsEnabled() {
      });
    }
    get isAutoLogAppEventsEnabled() {
      return T.FutureOfbool().value(false);
    }
    static ['_#new#tearOff']() {
      return new facebook_auth_plugin.FlutterFacebookAuthPlugin.new();
    }
  };
  (facebook_auth_plugin.FlutterFacebookAuthPlugin.new = function() {
    this[_appId] = "";
    this[_initialized] = false;
    facebook_auth_plugin.FlutterFacebookAuthPlugin.__proto__.new.call(this);
    ;
  }).prototype = facebook_auth_plugin.FlutterFacebookAuthPlugin.prototype;
  dart.addTypeTests(facebook_auth_plugin.FlutterFacebookAuthPlugin);
  dart.addTypeCaches(facebook_auth_plugin.FlutterFacebookAuthPlugin);
  dart.setMethodSignature(facebook_auth_plugin.FlutterFacebookAuthPlugin, () => ({
    __proto__: dart.getMethods(facebook_auth_plugin.FlutterFacebookAuthPlugin.__proto__),
    expressLogin: dart.fnType(async.Future$(login_result.LoginResult), []),
    getUserData: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [], {fields: core.String}, {}),
    logOut: dart.fnType(async.Future$(dart.void), []),
    login: dart.fnType(async.Future$(login_result.LoginResult), [], {loginBehavior: login_behavior.LoginBehavior, permissions: core.List$(core.String)}, {}),
    webInitialize: dart.fnType(async.Future$(dart.void), [], {}, {appId: core.String, cookie: core.bool, version: core.String, xfbml: core.bool}),
    [_injectSrcScript]: dart.fnType(async.Future$(dart.void), []),
    [_handleResponse]: dart.fnType(async.Future$(login_result.LoginResult), [dart.dynamic]),
    [_checkResponseError]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    autoLogAppEventsEnabled: dart.fnType(async.Future$(dart.void), [core.bool])
  }));
  dart.setStaticMethodSignature(facebook_auth_plugin.FlutterFacebookAuthPlugin, () => ['registerWith']);
  dart.setGetterSignature(facebook_auth_plugin.FlutterFacebookAuthPlugin, () => ({
    __proto__: dart.getGetters(facebook_auth_plugin.FlutterFacebookAuthPlugin.__proto__),
    accessToken: async.Future$(dart.nullable(access_token.AccessToken)),
    permissions: async.Future$(dart.nullable(facebook_permissions.FacebookPermissions)),
    isWebSdkInitialized: core.bool,
    isAutoLogAppEventsEnabled: async.Future$(core.bool)
  }));
  dart.setLibraryUri(facebook_auth_plugin.FlutterFacebookAuthPlugin, I[1]);
  dart.setFieldSignature(facebook_auth_plugin.FlutterFacebookAuthPlugin, () => ({
    __proto__: dart.getFields(facebook_auth_plugin.FlutterFacebookAuthPlugin.__proto__),
    [_appId]: dart.fieldType(core.String),
    [_initialized]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter_facebook_auth_web/src/facebook_auth_plugin.dart", {
    "package:flutter_facebook_auth_web/src/facebook_auth_plugin.dart": facebook_auth_plugin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["facebook_auth_plugin.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flutter_facebook_auth_web/src/facebook_auth_plugin.dart.lib.js"}');
  // Exports:
  return {
    src__facebook_auth_plugin: facebook_auth_plugin
  };
}));

//# sourceMappingURL=facebook_auth_plugin.dart.lib.js.map
