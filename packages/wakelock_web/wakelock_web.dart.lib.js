define(['dart_sdk', 'packages/wakelock_web/src/import_js_library.dart', 'packages/wakelock_platform_interface/method_channel_wakelock.dart', 'packages/flutter_web_plugins/src/plugin_registry.dart'], (function load__packages__wakelock_web__wakelock_web_dart(dart_sdk, packages__wakelock_web__src__import_js_library$46dart, packages__wakelock_platform_interface__method_channel_wakelock$46dart, packages__flutter_web_plugins__src__plugin_registry$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const import_js_library = packages__wakelock_web__src__import_js_library$46dart.src__import_js_library;
  const wakelock_platform_interface = packages__wakelock_platform_interface__method_channel_wakelock$46dart.wakelock_platform_interface;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  var wakelock_web = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    CompleterOfbool: () => (T.CompleterOfbool = dart.constFn(async.Completer$(core.bool)))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    FutureOrOfbool: () => (T.FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))(),
    FutureOrNOfbool: () => (T.FutureOrNOfbool = dart.constFn(dart.nullable(T.FutureOrOfbool())))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/wakelock_web-0.4.0/lib/wakelock_web.dart",
    "package:wakelock_web/wakelock_web.dart"
  ];
  wakelock_web.WakelockWeb = class WakelockWeb extends wakelock_platform_interface.WakelockPlatformInterface {
    static registerWith(registrar) {
      import_js_library.importJsLibrary({url: "assets/no_sleep.js", flutterPluginName: "wakelock_web"});
      wakelock_platform_interface.WakelockPlatformInterface.instance = new wakelock_web.WakelockWeb.new();
    }
    toggle(opts) {
      let enable = opts && 'enable' in opts ? opts.enable : null;
      return async.async(dart.void, function* toggle() {
        dart.global.Wakelock.toggle(enable);
      });
    }
    get enabled() {
      return async.async(core.bool, function* enabled() {
        let completer = T.CompleterOfbool().new();
        dart.global.Wakelock.enabled().then(js.allowInterop(T.dynamicTodynamic(), dart.fn(value => {
          if (!(typeof value == 'boolean')) dart.assertFailed(null, I[0], 36, 16, "value is bool");
          completer.complete(T.FutureOrNOfbool().as(value));
        }, T.dynamicToNull())), js.allowInterop(T.dynamicTodynamic(), dart.fn(error => {
          completer.completeError(core.Object.as(error));
        }, T.dynamicToNull())));
        return completer.future;
      });
    }
    static ['_#new#tearOff']() {
      return new wakelock_web.WakelockWeb.new();
    }
  };
  (wakelock_web.WakelockWeb.new = function() {
    ;
  }).prototype = wakelock_web.WakelockWeb.prototype;
  dart.addTypeTests(wakelock_web.WakelockWeb);
  dart.addTypeCaches(wakelock_web.WakelockWeb);
  dart.setStaticMethodSignature(wakelock_web.WakelockWeb, () => ['registerWith']);
  dart.setLibraryUri(wakelock_web.WakelockWeb, I[1]);
  dart.trackLibraries("packages/wakelock_web/wakelock_web.dart", {
    "package:wakelock_web/wakelock_web.dart": wakelock_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["wakelock_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;wBAcqC;AAIgC,MADjE,wCACS,yCAAyC;AAEA,MAAxB,iEAAW;IACvC;;UAGmC;AAAhB;AACU,QAAd,4BAAO,MAAM;MAC5B;;;AAGyB;AACjB,wBAAY;AAajB,QAXY,AAAU,oCAErB,sCAAa,QAAC;AACZ,gBAAa,OAAN,KAAK;AAEa,UAAzB,AAAU,SAAD,iCAAU,KAAK;gCAG1B,sCAAa,QAAC;AACkB,UAA9B,AAAU,SAAD,8BAAe,KAAK;;AAIjC,cAAO,AAAU,UAAD;MAClB;;;;;;;;EACF","file":"../../../../../../../../../../packages/wakelock_web/wakelock_web.dart.lib.js"}');
  // Exports:
  return {
    wakelock_web: wakelock_web
  };
}));

//# sourceMappingURL=wakelock_web.dart.lib.js.map
