define(['dart_sdk', 'packages/google_sign_in_web/src/load_gapi.dart', 'packages/google_sign_in_platform_interface/src/utils.dart', 'packages/google_sign_in_platform_interface/src/types.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/google_sign_in_web/src/utils.dart', 'packages/google_sign_in_web/src/generated/gapiauth2.dart', 'packages/flutter_web_plugins/src/plugin_registry.dart'], (function load__packages__google_sign_in_web__google_sign_in_web_dart(dart_sdk, packages__google_sign_in_web__src__load_gapi$46dart, packages__google_sign_in_platform_interface__src__utils$46dart, packages__google_sign_in_platform_interface__src__types$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__google_sign_in_web__src__utils$46dart, packages__google_sign_in_web__src__generated__gapiauth2$46dart, packages__flutter_web_plugins__src__plugin_registry$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const load_gapi = packages__google_sign_in_web__src__load_gapi$46dart.src__load_gapi;
  const google_sign_in_platform_interface = packages__google_sign_in_platform_interface__src__utils$46dart.google_sign_in_platform_interface;
  const types = packages__google_sign_in_platform_interface__src__types$46dart.src__types;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const utils = packages__google_sign_in_web__src__utils$46dart.src__utils;
  const gapiauth2 = packages__google_sign_in_web__src__generated__gapiauth2$46dart.src__generated__gapiauth2;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  var google_sign_in_web = Object.create(dart.library);
  var $getAttribute = dartx.getAttribute;
  var $contains = dartx.contains;
  var $any = dartx.any;
  var $join = dartx.join;
  var $where = dartx.where;
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    voidToFutureOfvoid: () => (T.voidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [dart.void])))(),
    JSArrayOfFutureOfvoid: () => (T.JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(T.FutureOfvoid())))(),
    StringTobool: () => (T.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))(),
    CompleterOfvoid: () => (T.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    GoogleAuthTodynamic: () => (T.GoogleAuthTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.packageJSType("gapi.auth2.GoogleAuth")])))(),
    GoogleAuthToNull: () => (T.GoogleAuthToNull = dart.constFn(dart.fnType(core.Null, [dart.packageJSType("gapi.auth2.GoogleAuth")])))(),
    GoogleAuthInitFailureErrorTodynamic: () => (T.GoogleAuthInitFailureErrorTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.packageJSType("GoogleAuthInitFailureError")])))(),
    GoogleAuthInitFailureErrorToNull: () => (T.GoogleAuthInitFailureErrorToNull = dart.constFn(dart.fnType(core.Null, [dart.packageJSType("GoogleAuthInitFailureError")])))(),
    GoogleSignInUserDataN: () => (T.GoogleSignInUserDataN = dart.constFn(dart.nullable(types.GoogleSignInUserData)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], core.String);
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: types.SignInOption.prototype,
        [_Enum__name]: "standard",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/google_sign_in_web-0.10.2/lib/google_sign_in_web.dart",
    "package:google_sign_in_web/google_sign_in_web.dart"
  ];
  var __GoogleSignInPlugin__isGapiInitialized = dart.privateName(google_sign_in_web, "_#GoogleSignInPlugin#_isGapiInitialized");
  var __GoogleSignInPlugin__isAuthInitialized = dart.privateName(google_sign_in_web, "_#GoogleSignInPlugin#_isAuthInitialized");
  var _isInitCalled = dart.privateName(google_sign_in_web, "_isInitCalled");
  var _autoDetectedClientId = dart.privateName(google_sign_in_web, "_autoDetectedClientId");
  var _isGapiInitialized = dart.privateName(google_sign_in_web, "_isGapiInitialized");
  var _isAuthInitialized = dart.privateName(google_sign_in_web, "_isAuthInitialized");
  var _assertIsInitCalled = dart.privateName(google_sign_in_web, "_assertIsInitCalled");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  google_sign_in_web.GoogleSignInPlugin = class GoogleSignInPlugin extends google_sign_in_platform_interface.GoogleSignInPlatform {
    static ['_#new#tearOff']() {
      return new google_sign_in_web.GoogleSignInPlugin.new();
    }
    get [_isGapiInitialized]() {
      let t0;
      t0 = this[__GoogleSignInPlugin__isGapiInitialized];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_isGapiInitialized")) : t0;
    }
    set [_isGapiInitialized](library$32package$58google_sign_in_web$47google_sign_in_web$46dart$58$58_isGapiInitialized$35param) {
      this[__GoogleSignInPlugin__isGapiInitialized] = library$32package$58google_sign_in_web$47google_sign_in_web$46dart$58$58_isGapiInitialized$35param;
    }
    get [_isAuthInitialized]() {
      let t0;
      t0 = this[__GoogleSignInPlugin__isAuthInitialized];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_isAuthInitialized")) : t0;
    }
    set [_isAuthInitialized](library$32package$58google_sign_in_web$47google_sign_in_web$46dart$58$58_isAuthInitialized$35param) {
      this[__GoogleSignInPlugin__isAuthInitialized] = library$32package$58google_sign_in_web$47google_sign_in_web$46dart$58$58_isAuthInitialized$35param;
    }
    [_assertIsInitCalled]() {
      if (!this[_isInitCalled]) {
        dart.throw(new core.StateError.new("GoogleSignInPlugin::init() or GoogleSignInPlugin::initWithParams() " + "must be called before any other method in this plugin."));
      }
    }
    get initialized() {
      this[_assertIsInitCalled]();
      return async.Future.wait(dart.void, T.JSArrayOfFutureOfvoid().of([this[_isGapiInitialized], this[_isAuthInitialized]]));
    }
    static registerWith(registrar) {
      google_sign_in_platform_interface.GoogleSignInPlatform.instance = new google_sign_in_web.GoogleSignInPlugin.new();
    }
    init(opts) {
      let scopes = opts && 'scopes' in opts ? opts.scopes : C[0] || CT.C0;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C[1] || CT.C1;
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return this.initWithParams(new types.SignInInitParameters.new({scopes: scopes, signInOption: signInOption, hostedDomain: hostedDomain, clientId: clientId}));
    }
    initWithParams(params) {
      return async.async(dart.void, (function* initWithParams() {
        let t0;
        let appClientId = (t0 = params.clientId, t0 == null ? this[_autoDetectedClientId] : t0);
        if (!(appClientId != null)) dart.assertFailed("ClientID not set. Either set it on a " + "<meta name=\"google-signin-client_id\" content=\"CLIENT_ID\" /> tag," + " or pass clientId when initializing GoogleSignIn", I[0], 89, 9, "appClientId != null");
        if (!(params.serverClientId == null)) dart.assertFailed("serverClientId is not supported on Web.", I[0], 94, 12, "params.serverClientId == null");
        if (!!params.scopes[$any](dart.fn(scope => scope[$contains](" "), T.StringTobool()))) dart.assertFailed("OAuth 2.0 Scopes for Google APIs can't contain spaces. " + "Check https://developers.google.com/identity/protocols/googlescopes " + "for a list of valid OAuth 2.0 scopes.", I[0], 98, 9, "!params.scopes.any((String scope) => scope.contains(' '))");
        yield this[_isGapiInitialized];
        let auth = dart.global.gapi.auth2.init({hosted_domain: params.hostedDomain, scope: params.scopes[$join](" "), client_id: dart.nullCheck(appClientId), plugin_name: "dart-google_sign_in_web"});
        let isAuthInitialized = T.CompleterOfvoid().new();
        this[_isAuthInitialized] = isAuthInitialized.future;
        this[_isInitCalled] = true;
        auth.then(js.allowInterop(T.GoogleAuthTodynamic(), dart.fn(initializedAuth => {
          isAuthInitialized.complete();
        }, T.GoogleAuthToNull())), js.allowInterop(T.GoogleAuthInitFailureErrorTodynamic(), dart.fn(reason => {
          isAuthInitialized.completeError(new message_codec.PlatformException.new({code: reason.error, message: reason.details, details: "https://developers.google.com/identity/sign-in/web/reference#error_codes"}));
        }, T.GoogleAuthInitFailureErrorToNull())));
        return this[_isAuthInitialized];
      }).bind(this));
    }
    signInSilently() {
      return async.async(T.GoogleSignInUserDataN(), (function* signInSilently() {
        let t1, t0;
        yield this.initialized;
        return utils.gapiUserToPluginUserData((t0 = dart.global.gapi.auth2.getAuthInstance(), t0 == null ? null : (t1 = t0.currentUser, t1 == null ? null : t1.get())));
      }).bind(this));
    }
    signIn() {
      return async.async(T.GoogleSignInUserDataN(), (function* signIn() {
        let t0;
        yield this.initialized;
        try {
          return utils.gapiUserToPluginUserData(yield (t0 = dart.global.gapi.auth2.getAuthInstance(), t0 == null ? null : gapiauth2['GoogleAuthExtensions|signIn'](t0)));
        } catch (e) {
          let reason = dart.getThrown(e);
          if (dart.packageJSType("GoogleAuthSignInError").is(reason)) {
            dart.throw(new message_codec.PlatformException.new({code: reason.error, message: "Exception raised from GoogleAuth.signIn()", details: "https://developers.google.com/identity/sign-in/web/reference#error_codes_2"}));
          } else
            throw e;
        }
      }).bind(this));
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : null;
      return async.async(types.GoogleSignInTokenData, (function* getTokens() {
        let t2, t1, t1$, t1$0, t1$1;
        yield this.initialized;
        let currentUser = (t1 = dart.global.gapi.auth2.getAuthInstance(), t1 == null ? null : (t2 = t1.currentUser, t2 == null ? null : t2.get()));
        let response = (t1$ = currentUser, t1$ == null ? null : t1$.getAuthResponse());
        return new types.GoogleSignInTokenData.new({idToken: (t1$0 = response, t1$0 == null ? null : t1$0.id_token), accessToken: (t1$1 = response, t1$1 == null ? null : t1$1.access_token)});
      }).bind(this));
    }
    signOut() {
      return async.async(dart.void, (function* signOut() {
        let t1;
        yield this.initialized;
        t1 = dart.global.gapi.auth2.getAuthInstance();
        return t1 == null ? null : t1.signOut();
      }).bind(this));
    }
    disconnect() {
      return async.async(dart.void, (function* disconnect() {
        let t2, t1;
        yield this.initialized;
        let currentUser = (t1 = dart.global.gapi.auth2.getAuthInstance(), t1 == null ? null : (t2 = t1.currentUser, t2 == null ? null : t2.get()));
        if (currentUser == null) {
          return;
        }
        return currentUser.disconnect();
      }).bind(this));
    }
    isSignedIn() {
      return async.async(core.bool, (function* isSignedIn() {
        let t2, t1;
        yield this.initialized;
        let currentUser = (t1 = dart.global.gapi.auth2.getAuthInstance(), t1 == null ? null : (t2 = t1.currentUser, t2 == null ? null : t2.get()));
        if (currentUser == null) {
          return false;
        }
        return currentUser.isSignedIn();
      }).bind(this));
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return async.async(dart.void, (function* clearAuthCache() {
        let t1;
        yield this.initialized;
        t1 = dart.global.gapi.auth2.getAuthInstance();
        return t1 == null ? null : t1.disconnect();
      }).bind(this));
    }
    requestScopes(scopes) {
      return async.async(core.bool, (function* requestScopes() {
        let t2, t1, t1$;
        yield this.initialized;
        let currentUser = (t1 = dart.global.gapi.auth2.getAuthInstance(), t1 == null ? null : (t2 = t1.currentUser, t2 == null ? null : t2.get()));
        if (currentUser == null) {
          return false;
        }
        let grantedScopes = (t1$ = currentUser.getGrantedScopes(), t1$ == null ? "" : t1$);
        let missingScopes = scopes[$where](dart.fn(scope => !grantedScopes[$contains](scope), T.StringTobool()));
        if (missingScopes[$isEmpty]) {
          return true;
        }
        let response = (yield currentUser.grant({scope: missingScopes[$join](" ")}));
        return response != null;
      }).bind(this));
    }
  };
  (google_sign_in_web.GoogleSignInPlugin.new = function() {
    let t0;
    this[__GoogleSignInPlugin__isGapiInitialized] = null;
    this[__GoogleSignInPlugin__isAuthInitialized] = null;
    this[_isInitCalled] = false;
    this[_autoDetectedClientId] = null;
    this[_autoDetectedClientId] = (t0 = html.querySelector(google_sign_in_web._kClientIdMetaSelector), t0 == null ? null : t0[$getAttribute]("content"));
    this[_isGapiInitialized] = load_gapi.inject(google_sign_in_web.gapiUrl).then(dart.void, dart.fn(_ => load_gapi.init(), T.voidToFutureOfvoid()));
  }).prototype = google_sign_in_web.GoogleSignInPlugin.prototype;
  dart.addTypeTests(google_sign_in_web.GoogleSignInPlugin);
  dart.addTypeCaches(google_sign_in_web.GoogleSignInPlugin);
  dart.setMethodSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getMethods(google_sign_in_web.GoogleSignInPlugin.__proto__),
    [_assertIsInitCalled]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(google_sign_in_web.GoogleSignInPlugin, () => ['registerWith']);
  dart.setGetterSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getGetters(google_sign_in_web.GoogleSignInPlugin.__proto__),
    [_isGapiInitialized]: async.Future$(dart.void),
    [_isAuthInitialized]: async.Future$(dart.void),
    initialized: async.Future$(dart.void)
  }));
  dart.setSetterSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getSetters(google_sign_in_web.GoogleSignInPlugin.__proto__),
    [_isGapiInitialized]: async.Future$(dart.void),
    [_isAuthInitialized]: async.Future$(dart.void)
  }));
  dart.setLibraryUri(google_sign_in_web.GoogleSignInPlugin, I[1]);
  dart.setFieldSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getFields(google_sign_in_web.GoogleSignInPlugin.__proto__),
    [__GoogleSignInPlugin__isGapiInitialized]: dart.fieldType(dart.nullable(async.Future$(dart.void))),
    [__GoogleSignInPlugin__isAuthInitialized]: dart.fieldType(dart.nullable(async.Future$(dart.void))),
    [_isInitCalled]: dart.fieldType(core.bool),
    [_autoDetectedClientId]: dart.fieldType(dart.nullable(core.String))
  }));
  dart.defineLazy(google_sign_in_web, {
    /*google_sign_in_web._kClientIdMetaSelector*/get _kClientIdMetaSelector() {
      return "meta[name=google-signin-client_id]";
    },
    /*google_sign_in_web._kClientIdAttributeName*/get _kClientIdAttributeName() {
      return "content";
    },
    /*google_sign_in_web.gapiUrl*/get gapiUrl() {
      return "https://apis.google.com/js/platform.js";
    },
    set gapiUrl(_) {}
  }, false);
  dart.trackLibraries("packages/google_sign_in_web/google_sign_in_web.dart", {
    "package:google_sign_in_web/google_sign_in_web.dart": google_sign_in_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["google_sign_in_web.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/google_sign_in_web/google_sign_in_web.dart.lib.js"}');
  // Exports:
  return {
    google_sign_in_web: google_sign_in_web
  };
}));

//# sourceMappingURL=google_sign_in_web.dart.lib.js.map
