define(['dart_sdk', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/url_launcher_platform_interface/src/types.dart', 'packages/flutter/src/widgets/title.dart', 'packages/url_launcher_platform_interface/link.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__url_launcher_platform_interface__method_channel_url_launcher_dart(dart_sdk, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__url_launcher_platform_interface__src__types$46dart, packages__flutter__src__widgets__title$46dart, packages__url_launcher_platform_interface__link$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const types = packages__url_launcher_platform_interface__src__types$46dart.src__types;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const link = packages__url_launcher_platform_interface__link$46dart.link;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  var method_channel_url_launcher = Object.create(dart.library);
  var url_launcher_platform = Object.create(dart.library);
  var url_launcher_platform_interface = Object.create(dart.library);
  var $startsWith = dartx.startsWith;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    boolNTobool: () => (T.boolNTobool = dart.constFn(dart.fnType(core.bool, [T.boolN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C2() {
      return C[2] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C[2] || CT.C2
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C[1] || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/url_launcher"
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "package:url_launcher_platform_interface/src/url_launcher_platform.dart",
    "package:url_launcher_platform_interface/method_channel_url_launcher.dart"
  ];
  var linkDelegate = dart.privateName(method_channel_url_launcher, "MethodChannelUrlLauncher.linkDelegate");
  url_launcher_platform.UrlLauncherPlatform = class UrlLauncherPlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return url_launcher_platform.UrlLauncherPlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verify(instance, url_launcher_platform.UrlLauncherPlatform._token);
      url_launcher_platform.UrlLauncherPlatform._instance = instance;
    }
    canLaunch(url) {
      dart.throw(new core.UnimplementedError.new("canLaunch() has not been implemented."));
    }
    launch(url, opts) {
      let useSafariVC = opts && 'useSafariVC' in opts ? opts.useSafariVC : null;
      let useWebView = opts && 'useWebView' in opts ? opts.useWebView : null;
      let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : null;
      let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : null;
      let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let webOnlyWindowName = opts && 'webOnlyWindowName' in opts ? opts.webOnlyWindowName : null;
      dart.throw(new core.UnimplementedError.new("launch() has not been implemented."));
    }
    launchUrl(url, options) {
      let isWebURL = url[$startsWith]("http:") || url[$startsWith]("https:");
      let useWebView = options.mode === types.PreferredLaunchMode.inAppWebView || isWebURL && options.mode === types.PreferredLaunchMode.platformDefault;
      return this.launch(url, {useSafariVC: useWebView, useWebView: useWebView, enableJavaScript: options.webViewConfiguration.enableJavaScript, enableDomStorage: options.webViewConfiguration.enableDomStorage, universalLinksOnly: options.mode === types.PreferredLaunchMode.externalNonBrowserApplication, headers: options.webViewConfiguration.headers, webOnlyWindowName: options.webOnlyWindowName});
    }
    closeWebView() {
      dart.throw(new core.UnimplementedError.new("closeWebView() has not been implemented."));
    }
  };
  (url_launcher_platform.UrlLauncherPlatform.new = function() {
    url_launcher_platform.UrlLauncherPlatform.__proto__.new.call(this, {token: url_launcher_platform.UrlLauncherPlatform._token});
    ;
  }).prototype = url_launcher_platform.UrlLauncherPlatform.prototype;
  dart.addTypeTests(url_launcher_platform.UrlLauncherPlatform);
  dart.addTypeCaches(url_launcher_platform.UrlLauncherPlatform);
  dart.setMethodSignature(url_launcher_platform.UrlLauncherPlatform, () => ({
    __proto__: dart.getMethods(url_launcher_platform.UrlLauncherPlatform.__proto__),
    canLaunch: dart.fnType(async.Future$(core.bool), [core.String]),
    launch: dart.fnType(async.Future$(core.bool), [core.String], {webOnlyWindowName: dart.nullable(core.String)}, {enableDomStorage: core.bool, enableJavaScript: core.bool, headers: core.Map$(core.String, core.String), universalLinksOnly: core.bool, useSafariVC: core.bool, useWebView: core.bool}),
    launchUrl: dart.fnType(async.Future$(core.bool), [core.String, types.LaunchOptions]),
    closeWebView: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setStaticGetterSignature(url_launcher_platform.UrlLauncherPlatform, () => ['instance']);
  dart.setStaticSetterSignature(url_launcher_platform.UrlLauncherPlatform, () => ['instance']);
  dart.setLibraryUri(url_launcher_platform.UrlLauncherPlatform, I[0]);
  dart.setStaticFieldSignature(url_launcher_platform.UrlLauncherPlatform, () => ['_token', '_instance']);
  dart.defineLazy(url_launcher_platform.UrlLauncherPlatform, {
    /*url_launcher_platform.UrlLauncherPlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*url_launcher_platform.UrlLauncherPlatform._instance*/get _instance() {
      return new method_channel_url_launcher.MethodChannelUrlLauncher.new();
    },
    set _instance(_) {}
  }, false);
  method_channel_url_launcher.MethodChannelUrlLauncher = class MethodChannelUrlLauncher extends url_launcher_platform.UrlLauncherPlatform {
    get linkDelegate() {
      return this[linkDelegate];
    }
    set linkDelegate(value) {
      super.linkDelegate = value;
    }
    canLaunch(url) {
      return method_channel_url_launcher._channel.invokeMethod(core.bool, "canLaunch", new (T.IdentityMapOfString$Object()).from(["url", url])).then(core.bool, dart.fn(value => {
        let t0;
        t0 = value;
        return t0 == null ? false : t0;
      }, T.boolNTobool()));
    }
    closeWebView() {
      return method_channel_url_launcher._channel.invokeMethod(dart.void, "closeWebView");
    }
    launch(url, opts) {
      let useSafariVC = opts && 'useSafariVC' in opts ? opts.useSafariVC : null;
      let useWebView = opts && 'useWebView' in opts ? opts.useWebView : null;
      let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : null;
      let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : null;
      let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let webOnlyWindowName = opts && 'webOnlyWindowName' in opts ? opts.webOnlyWindowName : null;
      return method_channel_url_launcher._channel.invokeMethod(core.bool, "launch", new (T.IdentityMapOfString$Object()).from(["url", url, "useSafariVC", useSafariVC, "useWebView", useWebView, "enableJavaScript", enableJavaScript, "enableDomStorage", enableDomStorage, "universalLinksOnly", universalLinksOnly, "headers", headers])).then(core.bool, dart.fn(value => {
        let t0;
        t0 = value;
        return t0 == null ? false : t0;
      }, T.boolNTobool()));
    }
    static ['_#new#tearOff']() {
      return new method_channel_url_launcher.MethodChannelUrlLauncher.new();
    }
  };
  (method_channel_url_launcher.MethodChannelUrlLauncher.new = function() {
    this[linkDelegate] = null;
    method_channel_url_launcher.MethodChannelUrlLauncher.__proto__.new.call(this);
    ;
  }).prototype = method_channel_url_launcher.MethodChannelUrlLauncher.prototype;
  dart.addTypeTests(method_channel_url_launcher.MethodChannelUrlLauncher);
  dart.addTypeCaches(method_channel_url_launcher.MethodChannelUrlLauncher);
  dart.setLibraryUri(method_channel_url_launcher.MethodChannelUrlLauncher, I[1]);
  dart.setFieldSignature(method_channel_url_launcher.MethodChannelUrlLauncher, () => ({
    __proto__: dart.getFields(method_channel_url_launcher.MethodChannelUrlLauncher.__proto__),
    linkDelegate: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [link.LinkInfo])))
  }));
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  dart.defineLazy(method_channel_url_launcher, {
    /*method_channel_url_launcher._channel*/get _channel() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/url_launcher_platform_interface/method_channel_url_launcher.dart", {
    "package:url_launcher_platform_interface/method_channel_url_launcher.dart": method_channel_url_launcher,
    "package:url_launcher_platform_interface/src/url_launcher_platform.dart": url_launcher_platform,
    "package:url_launcher_platform_interface/url_launcher_platform_interface.dart": url_launcher_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/url_launcher_platform.dart","method_channel_url_launcher.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8B6C;IAAS;wBAMZ;AACI,MAAxB,mDAAO,QAAQ,EAAE;AACf,MAApB,sDAAY,QAAQ;IACtB;cAM8B;AACqC,MAAjE,WAAM,gCAAmB;IAC3B;WASS;UACO;UACA;UACA;UACA;UACA;UACe;UACrB;AAEsD,MAA9D,WAAM,gCAAmB;IAC3B;cAK8B,KAAmB;AACpC,qBAAW,AAAI,AAAoB,GAArB,cAAY,YAAY,AAAI,GAAD,cAAY;AACrD,uBAAa,AAAQ,AAAK,AAAoC,OAA1C,UAA6B,0CACvD,QAAQ,IAAI,AAAQ,AAAK,OAAN,UAA6B;AAErD,YAAO,aACL,GAAG,gBACU,UAAU,cACX,UAAU,oBACJ,AAAQ,AAAqB,OAAtB,0DACP,AAAQ,AAAqB,OAAtB,4DAErB,AAAQ,AAAK,OAAN,UAA6B,kEAC/B,AAAQ,AAAqB,OAAtB,kDACG,AAAQ,OAAD;IAE9B;;AAIsE,MAApE,WAAM,gCAAmB;IAC3B;;;AAvEwB,+EAAa;;EAAO;;;;;;;;;;;;;;;MAExB,gDAAM;YAAG;;MAEF,mDAAS;YAAG;;;;;ICTnB;;;;;;cAGU;AAC5B,YAAO,AAAS,AAGd,8DAFA,aACgB,2CAAC,OAAO,GAAG,oBACtB,QAAO;;AAAU,kBAAK;cAAL,cAAS;;IACnC;;AAIE,YAAO,AAAS,8DAAmB;IACrC;WAIS;UACO;UACA;UACA;UACA;UACA;UACe;UACrB;AAER,YAAO,AAAS,AAWd,8DAVA,UACgB,2CACd,OAAO,GAAG,EACV,eAAe,WAAW,EAC1B,cAAc,UAAU,EACxB,oBAAoB,gBAAgB,EACpC,oBAAoB,gBAAgB,EACpC,sBAAsB,kBAAkB,EACxC,WAAW,OAAO,oBAEf,QAAO;;AAAU,kBAAK;cAAL,cAAS;;IACnC;;;;;;IAtCoB,qBAAe;;;EAuCrC;;;;;;;;;;;;;MA5CoB,oCAAQ","file":"../../../../../../../../../../packages/url_launcher_platform_interface/method_channel_url_launcher.dart.lib.js"}');
  // Exports:
  return {
    method_channel_url_launcher: method_channel_url_launcher,
    src__url_launcher_platform: url_launcher_platform,
    url_launcher_platform_interface: url_launcher_platform_interface
  };
}));

//# sourceMappingURL=method_channel_url_launcher.dart.lib.js.map
