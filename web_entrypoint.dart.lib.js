define(['dart_sdk', 'packages/my_ticket_care/main.dart', 'web_plugin_registrant.dart'], (function load__web_entrypoint_dart(dart_sdk, packages__my_ticket_care__main$46dart, web_plugin_registrant$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const main = packages__my_ticket_care__main$46dart.main;
  const web_plugin_registrant = web_plugin_registrant$46dart.web_plugin_registrant;
  var web_entrypoint = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    VoidTodynamic: () => (T.VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  web_entrypoint.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
            return T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
          }
          return (C[0] || CT.C0)();
        }, T.VoidTodynamic()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  dart.trackLibraries("web_entrypoint.dart", {
    "org-dartlang-app:/web_entrypoint.dart": web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBiB;AAWd,MAVD,MAAS,gCACC;AACN,cAAoB,6BAGI;AAFtB,kBAAwB,AAAkB,8BAEpB,eAF6B;;AAErD,gBAA4C,EAApB;gDAET;AACmB,UAAjB;;IAGvB","file":"web_entrypoint.dart.lib.js"}');
  // Exports:
  return {
    web_entrypoint: web_entrypoint
  };
}));

//# sourceMappingURL=web_entrypoint.dart.lib.js.map
