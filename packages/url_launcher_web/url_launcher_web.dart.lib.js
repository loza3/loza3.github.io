define(['dart_sdk', 'packages/url_launcher_web/src/third_party/platform_detect/browser.dart', 'packages/url_launcher_platform_interface/method_channel_url_launcher.dart', 'packages/url_launcher_web/src/link.dart', 'packages/flutter/src/widgets/title.dart', 'packages/url_launcher_platform_interface/link.dart', 'packages/flutter_web_plugins/src/plugin_registry.dart'], (function load__packages__url_launcher_web__url_launcher_web_dart(dart_sdk, packages__url_launcher_web__src__third_party__platform_detect__browser$46dart, packages__url_launcher_platform_interface__method_channel_url_launcher$46dart, packages__url_launcher_web__src__link$46dart, packages__flutter__src__widgets__title$46dart, packages__url_launcher_platform_interface__link$46dart, packages__flutter_web_plugins__src__plugin_registry$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const browser = packages__url_launcher_web__src__third_party__platform_detect__browser$46dart.src__third_party__platform_detect__browser;
  const url_launcher_platform = packages__url_launcher_platform_interface__method_channel_url_launcher$46dart.src__url_launcher_platform;
  const link = packages__url_launcher_web__src__link$46dart.src__link;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const link$ = packages__url_launcher_platform_interface__link$46dart.link;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  var url_launcher_web = Object.create(dart.library);
  var $navigator = dartx.navigator;
  var $open = dartx.open;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LinkInfoToWebLinkDelegate: () => (T.LinkInfoToWebLinkDelegate = dart.constFn(dart.fnType(link.WebLinkDelegate, [link$.LinkInfo])))(),
    FutureOfbool: () => (T.FutureOfbool = dart.constFn(async.Future$(core.bool)))(),
    LinkedHashSetOfString: () => (T.LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "WebLinkDelegate",
        [_Location_column]: 35,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/url_launcher_web-2.0.13/lib/url_launcher_web.dart"
      });
    },
    get C1() {
      return C[1] = dart.constMap(core.String, core.String, []);
    },
    get C2() {
      return C[2] = dart.constSet(core.String, ["mailto", "tel", "sms"]);
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:url_launcher_web/url_launcher_web.dart"];
  var _isSafari = dart.privateName(url_launcher_web, "_isSafari");
  var _window = dart.privateName(url_launcher_web, "_window");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  url_launcher_web.UrlLauncherPlugin = class UrlLauncherPlugin extends url_launcher_platform.UrlLauncherPlatform {
    static ['_#new#tearOff'](opts) {
      let debugWindow = opts && 'debugWindow' in opts ? opts.debugWindow : null;
      return new url_launcher_web.UrlLauncherPlugin.new({debugWindow: debugWindow});
    }
    static registerWith(registrar) {
      url_launcher_platform.UrlLauncherPlatform.instance = new url_launcher_web.UrlLauncherPlugin.new();
      ui.platformViewRegistry.registerViewFactory("__url_launcher::link", link.linkViewFactory, {isVisible: false});
    }
    get linkDelegate() {
      return dart.fn(linkInfo => new link.WebLinkDelegate.new(linkInfo, {$creationLocationd_0dea112b090073317d4: C[0] || CT.C0}), T.LinkInfoToWebLinkDelegate());
    }
    openNewWindow(url, opts) {
      let t0;
      let webOnlyWindowName = opts && 'webOnlyWindowName' in opts ? opts.webOnlyWindowName : null;
      let target = (t0 = webOnlyWindowName, t0 == null ? this[_isSafari] && url_launcher_web._isSafariTargetTopScheme(url) ? "_top" : "" : t0);
      return this[_window][$open](url, target);
    }
    canLaunch(url) {
      return T.FutureOfbool().value(url_launcher_web.UrlLauncherPlugin._supportedSchemes.contains(url_launcher_web._getUrlScheme(url)));
    }
    launch(url, opts) {
      let useSafariVC = opts && 'useSafariVC' in opts ? opts.useSafariVC : false;
      let useWebView = opts && 'useWebView' in opts ? opts.useWebView : false;
      let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : false;
      let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : false;
      let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : false;
      let headers = opts && 'headers' in opts ? opts.headers : C[1] || CT.C1;
      let webOnlyWindowName = opts && 'webOnlyWindowName' in opts ? opts.webOnlyWindowName : null;
      return T.FutureOfbool().value(this.openNewWindow(url, {webOnlyWindowName: webOnlyWindowName}) !== null);
    }
  };
  (url_launcher_web.UrlLauncherPlugin.new = function(opts) {
    let t0;
    let debugWindow = opts && 'debugWindow' in opts ? opts.debugWindow : null;
    this[_isSafari] = false;
    this[_window] = (t0 = debugWindow, t0 == null ? html.window : t0);
    url_launcher_web.UrlLauncherPlugin.__proto__.new.call(this);
    this[_isSafari] = browser.navigatorIsSafari(this[_window][$navigator]);
  }).prototype = url_launcher_web.UrlLauncherPlugin.prototype;
  dart.addTypeTests(url_launcher_web.UrlLauncherPlugin);
  dart.addTypeCaches(url_launcher_web.UrlLauncherPlugin);
  dart.setMethodSignature(url_launcher_web.UrlLauncherPlugin, () => ({
    __proto__: dart.getMethods(url_launcher_web.UrlLauncherPlugin.__proto__),
    openNewWindow: dart.fnType(html.WindowBase, [core.String], {webOnlyWindowName: dart.nullable(core.String)}, {}),
    launch: dart.fnType(async.Future$(core.bool), [core.String], {enableDomStorage: core.bool, enableJavaScript: core.bool, headers: core.Map$(core.String, core.String), universalLinksOnly: core.bool, useSafariVC: core.bool, useWebView: core.bool, webOnlyWindowName: dart.nullable(core.String)}, {})
  }));
  dart.setStaticMethodSignature(url_launcher_web.UrlLauncherPlugin, () => ['registerWith']);
  dart.setGetterSignature(url_launcher_web.UrlLauncherPlugin, () => ({
    __proto__: dart.getGetters(url_launcher_web.UrlLauncherPlugin.__proto__),
    linkDelegate: dart.fnType(framework.Widget, [link$.LinkInfo])
  }));
  dart.setLibraryUri(url_launcher_web.UrlLauncherPlugin, I[0]);
  dart.setFieldSignature(url_launcher_web.UrlLauncherPlugin, () => ({
    __proto__: dart.getFields(url_launcher_web.UrlLauncherPlugin.__proto__),
    [_window]: dart.finalFieldType(html.Window),
    [_isSafari]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(url_launcher_web.UrlLauncherPlugin, () => ['_supportedSchemes']);
  dart.defineLazy(url_launcher_web.UrlLauncherPlugin, {
    /*url_launcher_web.UrlLauncherPlugin._supportedSchemes*/get _supportedSchemes() {
      return T.LinkedHashSetOfString().from(["http", "https"]).union(url_launcher_web._safariTargetTopSchemes);
    }
  }, false);
  url_launcher_web._getUrlScheme = function _getUrlScheme(url) {
    let t0;
    t0 = core.Uri.tryParse(url);
    return t0 == null ? null : t0.scheme;
  };
  url_launcher_web._isSafariTargetTopScheme = function _isSafariTargetTopScheme(url) {
    return url_launcher_web._safariTargetTopSchemes.contains(url_launcher_web._getUrlScheme(url));
  };
  dart.defineLazy(url_launcher_web, {
    /*url_launcher_web._safariTargetTopSchemes*/get _safariTargetTopSchemes() {
      return C[2] || CT.C2;
    }
  }, false);
  dart.trackLibraries("packages/url_launcher_web/url_launcher_web.dart", {
    "package:url_launcher_web/url_launcher_web.dart": url_launcher_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["url_launcher_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wBA8CqC;AACiB,MAA9B,qDAAW;AAE0C,MADtE,AACE,oEAAkC,kCAA4B;IACrE;;AAIE,YAAO,SAAU,YAAa,6BAAgB,QAAQ;IACxD;kBAMqC;;UAAc;AAGpC,oBAA2B,KAAlB,iBAAiB,EAAjB,aAChB,AAAU,mBAAG,0CAAyB,GAAG,IAAK,SAAS;AAE7D,YAAO,AAAQ,sBAAK,GAAG,EAAE,MAAM;IACjC;cAG8B;AAC5B,YAAO,wBAAmB,AAAkB,8DAAS,+BAAc,GAAG;IACxE;WAIS;UACF;UACA;UACA;UACA;UACA;UACe;UACZ;AAER,YAAO,wBACH,AAAyD,mBAA3C,GAAG,sBAAqB,iBAAiB;IAC7D;;;;QAzDmD;IAM9C,kBAAY;IALH,iBAAc,KAAZ,WAAW,EAAX,aAAoB;AADpC;AAEkD,IAAhD,kBAAY,0BAAkB,AAAQ;EACxC;;;;;;;;;;;;;;;;;;;;;MAMyB,oDAAiB;YAAW,AAGnD,iCAFA,QACA,gBACM;;;0DAtBmB;;AAAQ,SAAI,kBAAS,GAAG;wBAAZ,OAAe;EAAM;gFAEzB;AACjC,UAAA,AAAwB,mDAAS,+BAAc,GAAG;EAAE;;MARtC,wCAAuB","file":"../../../../../../../../../../packages/url_launcher_web/url_launcher_web.dart.lib.js"}');
  // Exports:
  return {
    url_launcher_web: url_launcher_web
  };
}));

//# sourceMappingURL=url_launcher_web.dart.lib.js.map
