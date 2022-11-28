define(['dart_sdk'], (function load__packages__google_sign_in_web__src__generated__gapiauth2_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var gapiauth2 = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfGoogleUser: () => (T.FutureOfGoogleUser = dart.constFn(async.Future$(dart.packageJSType("GoogleUser"))))(),
    dynamicToFutureOfGoogleUser: () => (T.dynamicToFutureOfGoogleUser = dart.constFn(dart.fnType(T.FutureOfGoogleUser(), [], [dart.dynamic])))(),
    FutureOfOfflineAccessResponse: () => (T.FutureOfOfflineAccessResponse = dart.constFn(async.Future$(dart.packageJSType("OfflineAccessResponse"))))(),
    OfflineAccessOptionsNToFutureOfOfflineAccessResponse: () => (T.OfflineAccessOptionsNToFutureOfOfflineAccessResponse = dart.constFn(dart.fnType(T.FutureOfOfflineAccessResponse(), [], [dart.nullable(dart.packageJSType("OfflineAccessOptions"))])))(),
    FutureOfAuthResponse: () => (T.FutureOfAuthResponse = dart.constFn(async.Future$(dart.packageJSType("AuthResponse"))))(),
    VoidToFutureOfAuthResponse: () => (T.VoidToFutureOfAuthResponse = dart.constFn(dart.fnType(T.FutureOfAuthResponse(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  gapiauth2['GoogleAuthExtensions|signIn'] = function GoogleAuthExtensions$124signIn($this, options = null) {
    let tt = dart.packageJSType("_GoogleAuth").as($this);
    return js_util.promiseToFuture(dart.packageJSType("GoogleUser"), tt.signIn(options));
  };
  gapiauth2['GoogleAuthExtensions|get#signIn'] = function GoogleAuthExtensions$124get$35signIn($this) {
    return dart.fn((options = null) => gapiauth2['GoogleAuthExtensions|signIn']($this, options), T.dynamicToFutureOfGoogleUser());
  };
  gapiauth2['GoogleAuthExtensions|grantOfflineAccess'] = function GoogleAuthExtensions$124grantOfflineAccess($this, options = null) {
    let tt = dart.packageJSType("_GoogleAuth").as($this);
    return js_util.promiseToFuture(dart.packageJSType("OfflineAccessResponse"), tt.grantOfflineAccess(options));
  };
  gapiauth2['GoogleAuthExtensions|get#grantOfflineAccess'] = function GoogleAuthExtensions$124get$35grantOfflineAccess($this) {
    return dart.fn((options = null) => gapiauth2['GoogleAuthExtensions|grantOfflineAccess']($this, options), T.OfflineAccessOptionsNToFutureOfOfflineAccessResponse());
  };
  gapiauth2['GoogleUserExtensions|reloadAuthResponse'] = function GoogleUserExtensions$124reloadAuthResponse($this) {
    let tt = dart.packageJSType("_GoogleUser").as($this);
    return js_util.promiseToFuture(dart.packageJSType("AuthResponse"), tt.reloadAuthResponse());
  };
  gapiauth2['GoogleUserExtensions|get#reloadAuthResponse'] = function GoogleUserExtensions$124get$35reloadAuthResponse($this) {
    return dart.fn(() => gapiauth2['GoogleUserExtensions|reloadAuthResponse']($this), T.VoidToFutureOfAuthResponse());
  };
  dart.trackLibraries("packages/google_sign_in_web/src/generated/gapiauth2.dart", {
    "package:google_sign_in_web/src/generated/gapiauth2.dart": gapiauth2
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gapiauth2.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;4FAuFsD;AAChC,aAAU;AAC5B,UAAO,2DAAgB,AAAG,EAAD,QAAQ,OAAO;EAC1C;;AAJmB,oBACiC,mEADjC,OAAO;EAI1B;oHAG2B;AACP,aAAU;AAC5B,UAAO,sEAAgB,AAAG,EAAD,oBAAoB,OAAO;EACtD;;AAJ8B,oBACH,+EADG,OAAO;EAIrC;;AAwUoB,aAAU;AAC5B,UAAO,6DAAgB,AAAG,EAAD;EAC3B;;AAHqB;EAGrB","file":"../../../../../../../../../../../../packages/google_sign_in_web/src/generated/gapiauth2.dart.lib.js"}');
  // Exports:
  return {
    src__generated__gapiauth2: gapiauth2
  };
}));

//# sourceMappingURL=gapiauth2.dart.lib.js.map
