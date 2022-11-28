define(['dart_sdk', 'packages/google_sign_in_platform_interface/src/types.dart'], (function load__packages__google_sign_in_web__src__utils_dart(dart_sdk, packages__google_sign_in_platform_interface__src__types$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__google_sign_in_platform_interface__src__types$46dart.src__types;
  var utils = Object.create(dart.library);
  var $src = dartx.src;
  var $onLoad = dartx.onLoad;
  var $add = dartx.add;
  var $children = dartx.children;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    JSArrayOfFutureOfvoid: () => (T.JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(T.FutureOfvoid())))(),
    JSArrayOfHtmlElement: () => (T.JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  utils.injectJSLibraries = function injectJSLibraries(libraries, opts) {
    let t0, t0$;
    let target = opts && 'target' in opts ? opts.target : null;
    let loading = T.JSArrayOfFutureOfvoid().of([]);
    let tags = T.JSArrayOfHtmlElement().of([]);
    let targetElement = (t0 = target, t0 == null ? dart.nullCheck(html.querySelector("head")) : t0);
    for (let library of libraries) {
      let script = (t0$ = html.ScriptElement.new(), (() => {
        t0$.async = true;
        t0$.defer = true;
        t0$[$src] = library;
        return t0$;
      })());
      loading[$add](script[$onLoad].first);
      tags[$add](script);
    }
    targetElement[$children][$addAll](tags);
    return async.Future.wait(dart.void, loading);
  };
  utils.gapiUserToPluginUserData = function gapiUserToPluginUserData(currentUser) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8;
    let isSignedIn = (t0$ = (t0 = currentUser, t0 == null ? null : t0.isSignedIn()), t0$ == null ? false : t0$);
    let profile = (t0$0 = currentUser, t0$0 == null ? null : t0$0.getBasicProfile());
    if (!isSignedIn || (t0$1 = profile, t0$1 == null ? null : t0$1.getId()) == null) {
      return null;
    }
    return new types.GoogleSignInUserData.new({displayName: (t0$2 = profile, t0$2 == null ? null : t0$2.getName()), email: (t0$4 = (t0$3 = profile, t0$3 == null ? null : t0$3.getEmail()), t0$4 == null ? "" : t0$4), id: (t0$6 = (t0$5 = profile, t0$5 == null ? null : t0$5.getId()), t0$6 == null ? "" : t0$6), photoUrl: (t0$7 = profile, t0$7 == null ? null : t0$7.getImageUrl()), idToken: (t0$8 = currentUser, t0$8 == null ? null : t0$8.getAuthResponse().id_token)});
  };
  dart.trackLibraries("packages/google_sign_in_web/src/utils.dart", {
    "package:google_sign_in_web/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;uDAmBe;;QACK;AAEO,kBAAwB;AACpB,eAAyB;AAEnC,yBAAuB,KAAP,MAAM,EAAN,aAAoC,eAArB,mBAAc;AAEhE,aAAkB,UAAW,UAAS;AACX,oDAAc;AACnC,oBAAQ;AACR,oBAAQ;AAER,oBAAM,OAAO;;;AAEe,MAAhC,AAAQ,OAAD,OAAK,AAAO,AAAO,MAAR;AACF,MAAhB,AAAK,IAAD,OAAK,MAAM;;AAGkB,IAAnC,AAAc,AAAS,aAAV,qBAAiB,IAAI;AAClC,UAAc,8BAAK,OAAO;EAC5B;qEAKiE;;AACpD,sBAAuC,YAA1B,WAAW,eAAX,OAAa,kBAAb,cAA6B;AAC3B,0BAAU,WAAW,iBAAX,OAAa;AACjD,SAAK,UAAU,IAAqB,QAAjB,OAAO,iBAAP,OAAS;AAC1B,YAAO;;AAGT,UAAO,0DACQ,OAAO,iBAAP,OAAS,yBACK,eAApB,OAAO,iBAAP,OAAS,kBAAT,eAAuB,iBACT,eAAjB,OAAO,iBAAP,OAAS,eAAT,eAAoB,8BACd,OAAO,iBAAP,OAAS,sCACV,WAAW,iBAAX,OAAa,AAAkB;EAE5C","file":"../../../../../../../../../../../packages/google_sign_in_web/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
