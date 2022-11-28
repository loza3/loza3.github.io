define(['dart_sdk'], (function load__packages__flutter_web_plugins__src__navigation__js_url_strategy_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var js_url_strategy = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidToString: () => (T.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidToObjectN: () => (T.VoidToObjectN = dart.constFn(dart.fnType(T.ObjectN(), [])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ObjectTodynamic: () => (T.ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))(),
    FnToFn: () => (T.FnToFn = dart.constFn(dart.fnType(T.VoidTovoid(), [T.ObjectTodynamic()])))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    ObjectAndStringAndStringTovoid: () => (T.ObjectAndStringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.String, core.String])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    intToFutureOfvoid: () => (T.intToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  js_url_strategy.convertToJsUrlStrategy = function convertToJsUrlStrategy(strategy) {
    return {getPath: js.allowInterop(T.VoidToString(), dart.bind(strategy, 'getPath')), getState: js.allowInterop(T.VoidToObjectN(), dart.bind(strategy, 'getState')), addPopStateListener: js.allowInterop(T.FnToFn(), dart.bind(strategy, 'addPopStateListener')), prepareExternalUrl: js.allowInterop(T.StringToString(), dart.bind(strategy, 'prepareExternalUrl')), pushState: js.allowInterop(T.ObjectAndStringAndStringTovoid(), dart.bind(strategy, 'pushState')), replaceState: js.allowInterop(T.ObjectAndStringAndStringTovoid(), dart.bind(strategy, 'replaceState')), go: js.allowInterop(T.intToFutureOfvoid(), dart.bind(strategy, 'go'))};
  };
  dart.trackLibraries("packages/flutter_web_plugins/src/navigation/js_url_strategy.dart", {
    "package:flutter_web_plugins/src/navigation/js_url_strategy.dart": js_url_strategy
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["js_url_strategy.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;2EA6CiD;AAC/C,UAAO,WACI,kCAAsB,UAAT,QAAQ,yBACpB,mCAAsB,UAAT,QAAQ,qCACV,4BAAsB,UAAT,QAAQ,+CACtB,oCAAsB,UAAT,QAAQ,qCAC9B,oDAAsB,UAAT,QAAQ,+BAClB,oDAAsB,UAAT,QAAQ,wBAC/B,uCAAsB,UAAT,QAAQ;EAE7B","file":"../../../../../../../../../../packages/flutter_web_plugins/src/navigation/js_url_strategy.dart.lib.js"}');
  // Exports:
  return {
    src__navigation__js_url_strategy: js_url_strategy
  };
}));

//# sourceMappingURL=js_url_strategy.dart.lib.js.map
