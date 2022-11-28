define(['dart_sdk', 'packages/flutter_web_plugins/src/navigation_common/url_strategy.dart', 'packages/flutter_web_plugins/src/navigation/utils.dart', 'packages/flutter_web_plugins/src/navigation/js_url_strategy.dart'], (function load__packages__flutter_web_plugins__src__navigation__url_strategy_dart(dart_sdk, packages__flutter_web_plugins__src__navigation_common__url_strategy$46dart, packages__flutter_web_plugins__src__navigation__utils$46dart, packages__flutter_web_plugins__src__navigation__js_url_strategy$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const url_strategy = packages__flutter_web_plugins__src__navigation_common__url_strategy$46dart.src__navigation_common__url_strategy;
  const utils = packages__flutter_web_plugins__src__navigation__utils$46dart.src__navigation__utils;
  const js_url_strategy = packages__flutter_web_plugins__src__navigation__js_url_strategy$46dart.src__navigation__js_url_strategy;
  var url_strategy$ = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $isNotEmpty = dartx.isNotEmpty;
  var $location = dartx.location;
  var $history = dartx.history;
  var $addEventListener = dartx.addEventListener;
  var $removeEventListener = dartx.removeEventListener;
  var $hash = dartx.hash;
  var $state = dartx.state;
  var $pushState = dartx.pushState;
  var $replaceState = dartx.replaceState;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    CompleterOfvoid: () => (T.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    VoidToFn: () => (T.VoidToFn = dart.constFn(dart.fnType(T.VoidTovoid(), [])))(),
    FnTodynamic: () => (T.FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.VoidTovoid()])))(),
    ObjectToNull: () => (T.ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: url_strategy$.BrowserPlatformLocation.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: url_strategy$.HashUrlStrategy.prototype,
        [_platformLocation$]: C[0] || CT.C0
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter_web_plugins/lib/src/navigation/url_strategy.dart",
    "package:flutter_web_plugins/src/navigation/url_strategy.dart"
  ];
  var _platformLocation$ = dart.privateName(url_strategy$, "HashUrlStrategy._platformLocation");
  var _platformLocation = dart.privateName(url_strategy$, "_platformLocation");
  var _waitForPopState = dart.privateName(url_strategy$, "_waitForPopState");
  url_strategy$.HashUrlStrategy = class HashUrlStrategy extends url_strategy.UrlStrategy {
    get [_platformLocation]() {
      return this[_platformLocation$];
    }
    set [_platformLocation](value) {
      super[_platformLocation] = value;
    }
    static ['_#new#tearOff'](_platformLocation = C[0] || CT.C0) {
      return new url_strategy$.HashUrlStrategy.new(_platformLocation);
    }
    addPopStateListener(fn) {
      this[_platformLocation].addPopStateListener(fn);
      return dart.fn(() => this[_platformLocation].removePopStateListener(fn), T.VoidTovoid());
    }
    getPath() {
      let path = this[_platformLocation].hash;
      if (!(path[$isEmpty] || path[$startsWith]("#"))) dart.assertFailed(null, I[0], 84, 12, "path.isEmpty || path.startsWith('#')");
      if (path[$isEmpty] || path === "#") {
        return "/";
      }
      return path[$substring](1);
    }
    getState() {
      return this[_platformLocation].state;
    }
    prepareExternalUrl(internalUrl) {
      return internalUrl[$isEmpty] ? this[_platformLocation].pathname + this[_platformLocation].search : "#" + internalUrl;
    }
    pushState(state, title, url) {
      this[_platformLocation].pushState(state, title, this.prepareExternalUrl(url));
    }
    replaceState(state, title, url) {
      this[_platformLocation].replaceState(state, title, this.prepareExternalUrl(url));
    }
    go(count) {
      this[_platformLocation].go(count);
      return this[_waitForPopState]();
    }
    [_waitForPopState]() {
      let completer = T.CompleterOfvoid().new();
      let unsubscribe = null;
      function unsubscribe$35get() {
        let t1;
        t1 = unsubscribe;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("unsubscribe")) : t1;
      }
      dart.fn(unsubscribe$35get, T.VoidToFn());
      function unsubscribe$35set(unsubscribe$35param) {
        return unsubscribe = unsubscribe$35param;
      }
      dart.fn(unsubscribe$35set, T.FnTodynamic());
      unsubscribe$35set(this.addPopStateListener(dart.fn(_ => {
        unsubscribe$35get()();
        completer.complete();
      }, T.ObjectToNull())));
      return completer.future;
    }
  };
  (url_strategy$.HashUrlStrategy.new = function(_platformLocation = C[0] || CT.C0) {
    this[_platformLocation$] = _platformLocation;
    url_strategy$.HashUrlStrategy.__proto__.new.call(this);
    ;
  }).prototype = url_strategy$.HashUrlStrategy.prototype;
  dart.addTypeTests(url_strategy$.HashUrlStrategy);
  dart.addTypeCaches(url_strategy$.HashUrlStrategy);
  dart.setMethodSignature(url_strategy$.HashUrlStrategy, () => ({
    __proto__: dart.getMethods(url_strategy$.HashUrlStrategy.__proto__),
    addPopStateListener: dart.fnType(dart.fnType(dart.void, []), [dart.fnType(dart.dynamic, [core.Object])]),
    getPath: dart.fnType(core.String, []),
    getState: dart.fnType(dart.nullable(core.Object), []),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    pushState: dart.fnType(dart.void, [dart.nullable(core.Object), core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.nullable(core.Object), core.String, core.String]),
    go: dart.fnType(async.Future$(dart.void), [core.int]),
    [_waitForPopState]: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(url_strategy$.HashUrlStrategy, I[1]);
  dart.setFieldSignature(url_strategy$.HashUrlStrategy, () => ({
    __proto__: dart.getFields(url_strategy$.HashUrlStrategy.__proto__),
    [_platformLocation]: dart.finalFieldType(url_strategy.PlatformLocation)
  }));
  var _basePath = dart.privateName(url_strategy$, "_basePath");
  url_strategy$.PathUrlStrategy = class PathUrlStrategy extends url_strategy$.HashUrlStrategy {
    static ['_#new#tearOff'](platformLocation) {
      return new url_strategy$.PathUrlStrategy.new(platformLocation);
    }
    getPath() {
      let path = this[_platformLocation].pathname + this[_platformLocation].search;
      if (this[_basePath][$isNotEmpty] && path[$startsWith](this[_basePath])) {
        return utils.ensureLeadingSlash(path[$substring](this[_basePath].length));
      }
      return utils.ensureLeadingSlash(path);
    }
    prepareExternalUrl(internalUrl) {
      if (internalUrl[$isNotEmpty] && !internalUrl[$startsWith]("/")) {
        internalUrl = "/" + internalUrl;
      }
      return this[_basePath] + internalUrl;
    }
  };
  (url_strategy$.PathUrlStrategy.new = function(platformLocation = C[0] || CT.C0) {
    this[_basePath] = utils.stripTrailingSlash(utils.extractPathname(utils.checkBaseHref(platformLocation.getBaseHref())));
    url_strategy$.PathUrlStrategy.__proto__.new.call(this, platformLocation);
    ;
  }).prototype = url_strategy$.PathUrlStrategy.prototype;
  dart.addTypeTests(url_strategy$.PathUrlStrategy);
  dart.addTypeCaches(url_strategy$.PathUrlStrategy);
  dart.setLibraryUri(url_strategy$.PathUrlStrategy, I[1]);
  dart.setFieldSignature(url_strategy$.PathUrlStrategy, () => ({
    __proto__: dart.getFields(url_strategy$.PathUrlStrategy.__proto__),
    [_basePath]: dart.finalFieldType(core.String)
  }));
  var _location = dart.privateName(url_strategy$, "_location");
  var _history = dart.privateName(url_strategy$, "_history");
  url_strategy$.BrowserPlatformLocation = class BrowserPlatformLocation extends url_strategy.PlatformLocation {
    static ['_#new#tearOff']() {
      return new url_strategy$.BrowserPlatformLocation.new();
    }
    get [_location]() {
      return html.window[$location];
    }
    get [_history]() {
      return html.window[$history];
    }
    addPopStateListener(fn) {
      html.window[$addEventListener]("popstate", fn);
    }
    removePopStateListener(fn) {
      html.window[$removeEventListener]("popstate", fn);
    }
    get pathname() {
      let t3;
      t3 = this[_location].pathname;
      return t3 == null ? "" : t3;
    }
    get search() {
      let t3;
      t3 = this[_location].search;
      return t3 == null ? "" : t3;
    }
    get hash() {
      return this[_location][$hash];
    }
    get state() {
      return this[_history][$state];
    }
    pushState(state, title, url) {
      this[_history][$pushState](state, title, url);
    }
    replaceState(state, title, url) {
      this[_history][$replaceState](state, title, url);
    }
    go(count) {
      this[_history].go(count);
    }
    getBaseHref() {
      return utils.getBaseElementHrefFromDom();
    }
  };
  (url_strategy$.BrowserPlatformLocation.new = function() {
    url_strategy$.BrowserPlatformLocation.__proto__.new.call(this);
    ;
  }).prototype = url_strategy$.BrowserPlatformLocation.prototype;
  dart.addTypeTests(url_strategy$.BrowserPlatformLocation);
  dart.addTypeCaches(url_strategy$.BrowserPlatformLocation);
  dart.setMethodSignature(url_strategy$.BrowserPlatformLocation, () => ({
    __proto__: dart.getMethods(url_strategy$.BrowserPlatformLocation.__proto__),
    addPopStateListener: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    removePopStateListener: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    pushState: dart.fnType(dart.void, [dart.nullable(core.Object), core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.nullable(core.Object), core.String, core.String]),
    go: dart.fnType(dart.void, [core.int]),
    getBaseHref: dart.fnType(dart.nullable(core.String), [])
  }));
  dart.setGetterSignature(url_strategy$.BrowserPlatformLocation, () => ({
    __proto__: dart.getGetters(url_strategy$.BrowserPlatformLocation.__proto__),
    [_location]: html.Location,
    [_history]: html.History,
    pathname: core.String,
    search: core.String,
    hash: core.String,
    state: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(url_strategy$.BrowserPlatformLocation, I[1]);
  dart.setStaticFieldSignature(url_strategy$.BrowserPlatformLocation, () => ['_defaultPathname', '_defaultSearch']);
  dart.defineLazy(url_strategy$.BrowserPlatformLocation, {
    /*url_strategy$.BrowserPlatformLocation._defaultPathname*/get _defaultPathname() {
      return "";
    },
    /*url_strategy$.BrowserPlatformLocation._defaultSearch*/get _defaultSearch() {
      return "";
    }
  }, false);
  url_strategy$.setUrlStrategy = function setUrlStrategy(strategy) {
    url_strategy$._urlStrategy = strategy;
    let jsUrlStrategy = null;
    if (strategy != null) {
      jsUrlStrategy = js_url_strategy.convertToJsUrlStrategy(strategy);
    }
    dart.global._flutter_web_set_location_strategy(jsUrlStrategy);
  };
  url_strategy$.usePathUrlStrategy = function usePathUrlStrategy() {
    url_strategy$.setUrlStrategy(new url_strategy$.PathUrlStrategy.new());
  };
  dart.copyProperties(url_strategy$, {
    get urlStrategy() {
      return url_strategy$._urlStrategy;
    }
  });
  dart.defineLazy(url_strategy$, {
    /*url_strategy$._urlStrategy*/get _urlStrategy() {
      return C[1] || CT.C1;
    },
    set _urlStrategy(_) {}
  }, false);
  dart.trackLibraries("packages/flutter_web_plugins/src/navigation/url_strategy.dart", {
    "package:flutter_web_plugins/src/navigation/url_strategy.dart": url_strategy$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["url_strategy.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsEyB;;;;;;;;;wBAG2B;AACP,MAAzC,AAAkB,4CAAoB,EAAE;AACxC,YAAO,eAAM,AAAkB,+CAAuB,EAAE;IAC1D;;AAMe,iBAAO,AAAkB;AACtC,YAAO,AAAK,AAAQ,IAAT,cAAY,AAAK,IAAD,cAAY;AAGvC,UAAI,AAAK,IAAD,cAAY,AAAK,IAAD,KAAI;AAC1B,cAAO;;AAGT,YAAO,AAAK,KAAD,aAAW;IACxB;;AAGsB,YAAA,AAAkB;IAAK;uBAGZ;AAK/B,YAAO,AAAY,YAAD,aACT,AAAkB,AACvB,mCADkC,AAAkB,iCAClD,AAAe,MAAZ,WAAW;IACtB;cAGuB,OAAc,OAAc;AACiB,MAAlE,AAAkB,kCAAU,KAAK,EAAE,KAAK,EAAE,wBAAmB,GAAG;IAClE;iBAG0B,OAAc,OAAc;AACiB,MAArE,AAAkB,qCAAa,KAAK,EAAE,KAAK,EAAE,wBAAmB,GAAG;IACrE;OAGoB;AACS,MAA3B,AAAkB,2BAAG,KAAK;AAC1B,YAAO;IACT;;AAOwB,sBAAY;AACb;;;;;;;;;;;AAInB,MAHF,kBAAc,yBAAoB,QAAC;AACpB,QAAb,AAAW;AACS,QAApB,AAAU,SAAD;;AAEX,YAAO,AAAU,UAAD;IAClB;;;IAnEU;AADJ;;EACyD;;;;;;;;;;;;;;;;;;;;;;;;;AA+FhD,iBAAO,AAAkB,AAAS,mCAAE,AAAkB;AACnE,UAAI,AAAU,gCAAc,AAAK,IAAD,cAAY;AAC1C,cAAO,0BAAmB,AAAK,IAAD,aAAW,AAAU;;AAErD,YAAO,0BAAmB,IAAI;IAChC;uBAGiC;AAC/B,UAAI,AAAY,WAAD,kBAAgB,AAAY,WAAD,cAAY;AACvB,QAA7B,cAAc,AAAe,MAAZ,WAAW;;AAE9B,YAAS,AAAsB,mBAAZ,WAAW;IAChC;;gDAtBQ;IACQ,kBAAE,yBAAmB,sBAAgB,oBAC7C,AAAiB,gBAAD;AAHxB,2DACQ,gBAAgB;;EAGf;;;;;;;;;;;;;;;AAmCsB,YAAK,AAAO;IAAQ;;AAEtB,YAAK,AAAO;IAAO;wBAGJ;AACE,MAAvC,AAAO,+BAAiB,YAAY,EAAE;IAC7C;2BAG+C;AACE,MAA1C,AAAO,kCAAoB,YAAY,EAAE;IAChD;;;AAGuB,WAAA,AAAU;YAAA;IAA4B;;;AAGxC,WAAA,AAAU;YAAA;IAAwB;;AAGpC,YAAA,AAAU;IAAI;;AAGZ,YAAA,AAAS;IAAK;cAGZ,OAAc,OAAc;AACZ,MAArC,AAAS,2BAAU,KAAK,EAAE,KAAK,EAAE,GAAG;IACtC;iBAG0B,OAAc,OAAc;AACZ,MAAxC,AAAS,8BAAa,KAAK,EAAE,KAAK,EAAE,GAAG;IACzC;OAGY;AACQ,MAAlB,AAAS,kBAAG,KAAK;IACnB;;AAGyB;IAA2B;;;AApD9C;;EAAyB;;;;;;;;;;;;;;;;;;;;;;;;MAIX,sDAAgB;;;MAIhB,oDAAc;;;;yDA7JH;AACR,IAAvB,6BAAe,QAAQ;AAER;AACf,QAAI,QAAQ;AACsC,MAAhD,gBAAgB,uCAAuB,QAAQ;;AAElB,IAA/B,AAAgB,+CAAC,aAAa;EAChC;;AAImC,IAAjC,6BAAe;EACjB;;;AAlBgC;IAAY;;;MAN/B,0BAAY","file":"../../../../../../../../../../packages/flutter_web_plugins/src/navigation/url_strategy.dart.lib.js"}');
  // Exports:
  return {
    src__navigation__url_strategy: url_strategy$
  };
}));

//# sourceMappingURL=url_strategy.dart.lib.js.map
