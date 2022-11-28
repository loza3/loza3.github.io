define(['dart_sdk', 'packages/url_launcher/src/types.dart', 'packages/url_launcher_platform_interface/method_channel_url_launcher.dart', 'packages/url_launcher_platform_interface/src/types.dart', 'packages/url_launcher/src/type_conversion.dart'], (function load__packages__url_launcher__src__url_launcher_uri_dart(dart_sdk, packages__url_launcher__src__types$46dart, packages__url_launcher_platform_interface__method_channel_url_launcher$46dart, packages__url_launcher_platform_interface__src__types$46dart, packages__url_launcher__src__type_conversion$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__url_launcher__src__types$46dart.src__types;
  const url_launcher_platform = packages__url_launcher_platform_interface__method_channel_url_launcher$46dart.src__url_launcher_platform;
  const types$ = packages__url_launcher_platform_interface__src__types$46dart.src__types;
  const type_conversion = packages__url_launcher__src__type_conversion$46dart.src__type_conversion;
  var url_launcher_uri = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: types.LaunchMode.prototype,
        [_Enum__name]: "platformDefault",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.constMap(core.String, core.String, []);
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: types.WebViewConfiguration.prototype,
        [WebViewConfiguration_headers]: C[2] || CT.C2,
        [WebViewConfiguration_enableDomStorage]: true,
        [WebViewConfiguration_enableJavaScript]: true
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var WebViewConfiguration_headers = dart.privateName(types, "WebViewConfiguration.headers");
  var WebViewConfiguration_enableDomStorage = dart.privateName(types, "WebViewConfiguration.enableDomStorage");
  var WebViewConfiguration_enableJavaScript = dart.privateName(types, "WebViewConfiguration.enableJavaScript");
  url_launcher_uri.launchUrl = function launchUrl(url, opts) {
    let mode = opts && 'mode' in opts ? opts.mode : C[0] || CT.C0;
    let webViewConfiguration = opts && 'webViewConfiguration' in opts ? opts.webViewConfiguration : C[1] || CT.C1;
    let webOnlyWindowName = opts && 'webOnlyWindowName' in opts ? opts.webOnlyWindowName : null;
    return async.async(core.bool, function* launchUrl() {
      if (mode === types.LaunchMode.inAppWebView && !(url.scheme === "https" || url.scheme === "http")) {
        dart.throw(new core.ArgumentError.value(url, "url", "To use an in-app web view, you must provide an http(s) URL."));
      }
      return yield url_launcher_platform.UrlLauncherPlatform.instance.launchUrl(url.toString(), new types$.LaunchOptions.new({mode: type_conversion.convertLaunchMode(mode), webViewConfiguration: type_conversion.convertConfiguration(webViewConfiguration), webOnlyWindowName: webOnlyWindowName}));
    });
  };
  url_launcher_uri.canLaunchUrl = function canLaunchUrl(url) {
    return async.async(core.bool, function* canLaunchUrl() {
      return yield url_launcher_platform.UrlLauncherPlatform.instance.canLaunch(url.toString());
    });
  };
  url_launcher_uri.closeInAppWebView = function closeInAppWebView() {
    return async.async(dart.void, function* closeInAppWebView() {
      return yield url_launcher_platform.UrlLauncherPlatform.instance.closeWebView();
    });
  };
  dart.trackLibraries("packages/url_launcher/src/url_launcher_uri.dart", {
    "package:url_launcher/src/url_launcher_uri.dart": url_launcher_uri
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["url_launcher_uri.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kDA0CM;QACO;QACU;QACb;AAJY;AAMpB,UAAI,AAAK,IAAD,KAAe,mCACjB,AAAI,AAAO,GAAR,YAAW,WAAW,AAAI,AAAO,GAAR,YAAW;AAEuB,QADlE,WAAoB,6BAAM,GAAG,EAAE,OAC3B;;AAEN,YAAO,OAA0B,AAAS,6DACxC,AAAI,GAAD,aACH,oCACQ,kCAAkB,IAAI,yBACN,qCAAqB,oBAAoB,sBAC5C,iBAAiB;IAG1C;;wDAgB8B;AAAL;AACvB,YAAO,OAA0B,AAAS,6DAAU,AAAI,GAAD;IACzD;;;AAO8B;AAC5B,YAAO,OAA0B,AAAS;IAC5C","file":"../../../../../../../../../../../packages/url_launcher/src/url_launcher_uri.dart.lib.js"}');
  // Exports:
  return {
    src__url_launcher_uri: url_launcher_uri
  };
}));

//# sourceMappingURL=url_launcher_uri.dart.lib.js.map
