define(['dart_sdk'], (function load__packages__url_launcher__src__types_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var types = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: types.LaunchMode.prototype,
        [_Enum__name]: "platformDefault",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: types.LaunchMode.prototype,
        [_Enum__name]: "inAppWebView",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: types.LaunchMode.prototype,
        [_Enum__name]: "externalApplication",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: types.LaunchMode.prototype,
        [_Enum__name]: "externalNonBrowserApplication",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], types.LaunchMode);
    },
    get C5() {
      return C[5] = dart.constMap(core.String, core.String, []);
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = ["package:url_launcher/src/types.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  types.LaunchMode = class LaunchMode extends core._Enum {
    toString() {
      return "LaunchMode." + this[_name];
    }
  };
  (types.LaunchMode.new = function(index, name) {
    types.LaunchMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = types.LaunchMode.prototype;
  dart.addTypeTests(types.LaunchMode);
  dart.addTypeCaches(types.LaunchMode);
  dart.setLibraryUri(types.LaunchMode, I[0]);
  dart.setStaticFieldSignature(types.LaunchMode, () => ['values', 'platformDefault', 'inAppWebView', 'externalApplication', 'externalNonBrowserApplication']);
  dart.defineExtensionMethods(types.LaunchMode, ['toString']);
  dart.defineLazy(types.LaunchMode, {
    /*types.LaunchMode.values*/get values() {
      return C[0] || CT.C0;
    },
    /*types.LaunchMode.platformDefault*/get platformDefault() {
      return C[1] || CT.C1;
    },
    /*types.LaunchMode.inAppWebView*/get inAppWebView() {
      return C[2] || CT.C2;
    },
    /*types.LaunchMode.externalApplication*/get externalApplication() {
      return C[3] || CT.C3;
    },
    /*types.LaunchMode.externalNonBrowserApplication*/get externalNonBrowserApplication() {
      return C[4] || CT.C4;
    }
  }, false);
  var enableJavaScript$ = dart.privateName(types, "WebViewConfiguration.enableJavaScript");
  var enableDomStorage$ = dart.privateName(types, "WebViewConfiguration.enableDomStorage");
  var headers$ = dart.privateName(types, "WebViewConfiguration.headers");
  types.WebViewConfiguration = class WebViewConfiguration extends core.Object {
    get enableJavaScript() {
      return this[enableJavaScript$];
    }
    set enableJavaScript(value) {
      super.enableJavaScript = value;
    }
    get enableDomStorage() {
      return this[enableDomStorage$];
    }
    set enableDomStorage(value) {
      super.enableDomStorage = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    static ['_#new#tearOff'](opts) {
      let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : true;
      let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : true;
      let headers = opts && 'headers' in opts ? opts.headers : C[5] || CT.C5;
      return new types.WebViewConfiguration.new({enableJavaScript: enableJavaScript, enableDomStorage: enableDomStorage, headers: headers});
    }
  };
  (types.WebViewConfiguration.new = function(opts) {
    let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : true;
    let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : true;
    let headers = opts && 'headers' in opts ? opts.headers : C[5] || CT.C5;
    this[enableJavaScript$] = enableJavaScript;
    this[enableDomStorage$] = enableDomStorage;
    this[headers$] = headers;
    ;
  }).prototype = types.WebViewConfiguration.prototype;
  dart.addTypeTests(types.WebViewConfiguration);
  dart.addTypeCaches(types.WebViewConfiguration);
  dart.setLibraryUri(types.WebViewConfiguration, I[0]);
  dart.setFieldSignature(types.WebViewConfiguration, () => ({
    __proto__: dart.getFields(types.WebViewConfiguration.__proto__),
    enableJavaScript: dart.finalFieldType(core.bool),
    enableDomStorage: dart.finalFieldType(core.bool),
    headers: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.trackLibraries("packages/url_launcher/src/types.dart", {
    "package:url_launcher/src/types.dart": types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBA;;;;;;;;;;;;MAbK,uBAAM;;;MAGT,gCAAe;;;MAGf,6BAAY;;;MAGZ,oCAAmB;;;MAGnB,8CAA6B;;;;;;;;IAgBlB;;;;;;IAKA;;;;;;IAQe;;;;;;;;;;;;;;QArBnB;QACA;QACA;IAFA;IACA;IACA;;EACL","file":"../../../../../../../../../../../packages/url_launcher/src/types.dart.lib.js"}');
  // Exports:
  return {
    src__types: types
  };
}));

//# sourceMappingURL=types.dart.lib.js.map
