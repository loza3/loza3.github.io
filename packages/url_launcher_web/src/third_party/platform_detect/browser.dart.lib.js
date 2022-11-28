define(['dart_sdk'], (function load__packages__url_launcher_web__src__third_party__platform_detect__browser_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var browser = Object.create(dart.library);
  var $vendor = dartx.vendor;
  var $appVersion = dartx.appVersion;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  browser.navigatorIsSafari = function navigatorIsSafari(navigator) {
    let vendor = navigator[$vendor];
    let appVersion = navigator[$appVersion];
    return vendor !== null && vendor[$contains]("Apple") && appVersion !== null && appVersion[$contains]("Version");
  };
  dart.trackLibraries("packages/url_launcher_web/src/third_party/platform_detect/browser.dart", {
    "package:url_launcher_web/src/third_party/platform_detect/browser.dart": browser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["browser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;yDA0BsC;AAEvB,iBAAS,AAAU,SAAD;AAClB,qBAAa,AAAU,SAAD;AACnC,UAAO,AAEgB,OAFV,aACT,AAAO,MAAD,YAAU,YAChB,UAAU,aACV,AAAW,UAAD,YAAU;EAC1B","file":"../../../../../../../../../../../../../packages/url_launcher_web/src/third_party/platform_detect/browser.dart.lib.js"}');
  // Exports:
  return {
    src__third_party__platform_detect__browser: browser
  };
}));

//# sourceMappingURL=browser.dart.lib.js.map
