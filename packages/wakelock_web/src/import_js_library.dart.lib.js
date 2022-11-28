define(['dart_sdk'], (function load__packages__wakelock_web__src__import_js_library_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var import_js_library = Object.create(dart.library);
  var $startsWith = dartx.startsWith;
  var $replaceFirst = dartx.replaceFirst;
  var $type = dartx.type;
  var $charset = dartx.charset;
  var $src = dartx.src;
  var $children = dartx.children;
  var $add = dartx.add;
  var $onLoad = dartx.onLoad;
  var $endsWith = dartx.endsWith;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    JSArrayOfFutureOfvoid: () => (T.JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(T.FutureOfvoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  import_js_library.importJsLibrary = function importJsLibrary(opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    let flutterPluginName = opts && 'flutterPluginName' in opts ? opts.flutterPluginName : null;
    if (flutterPluginName == null) {
      import_js_library._importJSLibraries(T.JSArrayOfString().of([url]));
    } else {
      import_js_library._importJSLibraries(T.JSArrayOfString().of([import_js_library._libraryUrl(url, flutterPluginName)]));
    }
  };
  import_js_library._libraryUrl = function _libraryUrl(url, pluginName) {
    if (url[$startsWith]("./")) {
      url = url[$replaceFirst]("./", "");
      return "./assets/packages/" + pluginName + "/" + url;
    }
    if (url[$startsWith]("assets/")) {
      return "./assets/packages/" + pluginName + "/" + url;
    } else {
      return url;
    }
  };
  import_js_library._createScriptTag = function _createScriptTag(library) {
    let t0;
    let script = (t0 = html.ScriptElement.new(), (() => {
      t0[$type] = "text/javascript";
      t0[$charset] = "utf-8";
      t0.async = true;
      t0[$src] = library;
      return t0;
    })());
    return script;
  };
  import_js_library._importJSLibraries = function _importJSLibraries(libraries) {
    let loading = T.JSArrayOfFutureOfvoid().of([]);
    let head = html.querySelector("head");
    for (let library of libraries) {
      if (!import_js_library._isImported(library)) {
        let scriptTag = import_js_library._createScriptTag(library);
        dart.nullCheck(head)[$children][$add](scriptTag);
        loading[$add](scriptTag[$onLoad].first);
      }
    }
    return async.Future.wait(dart.void, loading);
  };
  import_js_library._isImported = function _isImported(url) {
    let head = dart.nullCheck(html.querySelector("head"));
    return import_js_library._isLoaded(head, url);
  };
  import_js_library._isLoaded = function _isLoaded(head, url) {
    if (url[$startsWith]("./")) {
      url = url[$replaceFirst]("./", "");
    }
    for (let element of head[$children]) {
      if (html.ScriptElement.is(element)) {
        if (element[$src][$endsWith](url)) {
          return true;
        }
      }
    }
    return false;
  };
  dart.trackLibraries("packages/wakelock_web/src/import_js_library.dart", {
    "package:wakelock_web/src/import_js_library.dart": import_js_library
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["import_js_library.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAQsC;QAAa;AACjD,QAAI,AAAkB,iBAAD;AACM,MAAzB,qCAAmB,wBAAC,GAAG;;AAEkC,MAAzD,qCAAmB,wBAAC,8BAAY,GAAG,EAAE,iBAAiB;;EAE1D;uDAE0B,KAAY;AACpC,QAAI,AAAI,GAAD,cAAY;AACe,MAAhC,MAAM,AAAI,GAAD,gBAAc,MAAM;AAC7B,YAAO,AAAoC,wBAAhB,UAAU,SAAE,GAAG;;AAE5C,QAAI,AAAI,GAAD,cAAY;AACjB,YAAO,AAAoC,wBAAhB,UAAU,SAAE,GAAG;;AAE1C,YAAO,IAAG;;EAEd;iEAE2C;;AACnC,iDAAc;AAChB,kBAAO;AACP,qBAAU;AACV,iBAAQ;AACR,iBAAM,OAAO;;;AACjB,UAAO,OAAM;EACf;qEAI6C;AACrC,kBAAwB;AACxB,eAAY,mBAAc;AAEhC,aAAW,UAAW,UAAS;AAC7B,WAAK,8BAAY,OAAO;AAChB,wBAAY,mCAAiB,OAAO;AACb,QAAzB,AAAE,AAAS,eAAf,IAAI,mBAAe,SAAS;AACO,QAAnC,AAAQ,OAAD,OAAK,AAAU,AAAO,SAAR;;;AAIzB,UAAc,8BAAK,OAAO;EAC5B;uDAEwB;AAChB,eAAiC,eAArB,mBAAc;AAChC,UAAO,6BAAU,IAAI,EAAE,GAAG;EAC5B;mDAE4B,MAAa;AACvC,QAAI,AAAI,GAAD,cAAY;AACe,MAAhC,MAAM,AAAI,GAAD,gBAAc,MAAM;;AAE/B,aAAS,UAAW,AAAK,KAAD;AACtB,UAAY,sBAAR,OAAO;AACT,YAAI,AAAQ,AAAI,OAAL,kBAAc,GAAG;AAC1B,gBAAO;;;;AAIb,UAAO;EACT","file":"../../../../../../../../../../../packages/wakelock_web/src/import_js_library.dart.lib.js"}');
  // Exports:
  return {
    src__import_js_library: import_js_library
  };
}));

//# sourceMappingURL=import_js_library.dart.lib.js.map
