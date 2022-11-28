define(['dart_sdk', 'packages/google_sign_in_web/src/utils.dart'], (function load__packages__google_sign_in_web__src__load_gapi_dart(dart_sdk, packages__google_sign_in_web__src__utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__google_sign_in_web__src__utils$46dart.src__utils;
  var load_gapi = Object.create(dart.library);
  var $startsWith = dartx.startsWith;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    CompleterOfvoid: () => (T.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    JSArrayOfFutureOfvoid: () => (T.JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(T.FutureOfvoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], core.String);
    }
  }, false);
  var C = [void 0];
  load_gapi._addOnloadToScript = function _addOnloadToScript(url) {
    return url[$startsWith]("data:") ? url : url + "?onload=" + "gapiOnloadCallback";
  };
  load_gapi.inject = function inject(url, opts) {
    let libraries = opts && 'libraries' in opts ? opts.libraries : C[0] || CT.C0;
    let gapiOnLoad = T.CompleterOfvoid().new();
    dart.global.gapiOnloadCallback = js.allowInterop(core.Function, dart.fn(() => {
      gapiOnLoad.complete();
    }, T.VoidToNull()));
    let allLibraries = (() => {
      let t0 = T.JSArrayOfString().of([load_gapi._addOnloadToScript(url)]);
      t0[$addAll](libraries);
      return t0;
    })();
    return async.Future.wait(dart.void, T.JSArrayOfFutureOfvoid().of([utils.injectJSLibraries(allLibraries), gapiOnLoad.future]));
  };
  load_gapi.init = function init() {
    let gapiLoadCompleter = T.CompleterOfvoid().new();
    dart.global.gapi.load("auth2", js.allowInterop(T.VoidToNull(), dart.fn(() => {
      gapiLoadCompleter.complete();
    }, T.VoidToNull())));
    return gapiLoadCompleter.future;
  };
  dart.defineLazy(load_gapi, {
    /*load_gapi.kGapiOnloadCallbackFunctionName*/get kGapiOnloadCallbackFunctionName() {
      return "gapiOnloadCallback";
    }
  }, false);
  dart.trackLibraries("packages/google_sign_in_web/src/load_gapi.dart", {
    "package:google_sign_in_web/src/load_gapi.dart": load_gapi
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["load_gapi.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6DAuBiC;AAAQ,UAAA,AAAI,IAAD,cAAY,WAClD,GAAG,GACD,AAA4C,GAAzC;EAAyC;qCAKzB;QAAmB;AAEtB,qBAAa;AAIjC,IAHF,iCAAqB,+BAAa;AAEX,MAArB,AAAW,UAAD;;AAIO,uBAAuB;uCACxC,6BAAmB,GAAG;AACnB,2BAAS;;;AAGd,UAAc,8BACI,8BAAC,wBAAkB,YAAY,GAAG,AAAW,UAAD;EAChE;;AAKwB,4BAAoB;AAGvC,IAFE,sBAAK,SAAS,gCAAa;AACF,MAA5B,AAAkB,iBAAD;;AAInB,UAAO,AAAkB,kBAAD;EAC1B;;MApCa,yCAA+B","file":"../../../../../../../../../../../packages/google_sign_in_web/src/load_gapi.dart.lib.js"}');
  // Exports:
  return {
    src__load_gapi: load_gapi
  };
}));

//# sourceMappingURL=load_gapi.dart.lib.js.map
