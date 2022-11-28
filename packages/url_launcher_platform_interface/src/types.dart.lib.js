define(['dart_sdk'], (function load__packages__url_launcher_platform_interface__src__types_dart(dart_sdk) {
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
        __proto__: types.PreferredLaunchMode.prototype,
        [_Enum__name]: "platformDefault",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: types.PreferredLaunchMode.prototype,
        [_Enum__name]: "inAppWebView",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: types.PreferredLaunchMode.prototype,
        [_Enum__name]: "externalApplication",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: types.PreferredLaunchMode.prototype,
        [_Enum__name]: "externalNonBrowserApplication",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], types.PreferredLaunchMode);
    },
    get C5() {
      return C[5] = dart.constMap(core.String, core.String, []);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: types.InAppWebViewConfiguration.prototype,
        [headers$]: C[5] || CT.C5,
        [enableDomStorage$]: true,
        [enableJavaScript$]: true
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = ["package:url_launcher_platform_interface/src/types.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  types.PreferredLaunchMode = class PreferredLaunchMode extends core._Enum {
    toString() {
      return "PreferredLaunchMode." + this[_name];
    }
  };
  (types.PreferredLaunchMode.new = function(index, name) {
    types.PreferredLaunchMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = types.PreferredLaunchMode.prototype;
  dart.addTypeTests(types.PreferredLaunchMode);
  dart.addTypeCaches(types.PreferredLaunchMode);
  dart.setLibraryUri(types.PreferredLaunchMode, I[0]);
  dart.setStaticFieldSignature(types.PreferredLaunchMode, () => ['values', 'platformDefault', 'inAppWebView', 'externalApplication', 'externalNonBrowserApplication']);
  dart.defineExtensionMethods(types.PreferredLaunchMode, ['toString']);
  dart.defineLazy(types.PreferredLaunchMode, {
    /*types.PreferredLaunchMode.values*/get values() {
      return C[0] || CT.C0;
    },
    /*types.PreferredLaunchMode.platformDefault*/get platformDefault() {
      return C[1] || CT.C1;
    },
    /*types.PreferredLaunchMode.inAppWebView*/get inAppWebView() {
      return C[2] || CT.C2;
    },
    /*types.PreferredLaunchMode.externalApplication*/get externalApplication() {
      return C[3] || CT.C3;
    },
    /*types.PreferredLaunchMode.externalNonBrowserApplication*/get externalNonBrowserApplication() {
      return C[4] || CT.C4;
    }
  }, false);
  var enableJavaScript$ = dart.privateName(types, "InAppWebViewConfiguration.enableJavaScript");
  var enableDomStorage$ = dart.privateName(types, "InAppWebViewConfiguration.enableDomStorage");
  var headers$ = dart.privateName(types, "InAppWebViewConfiguration.headers");
  types.InAppWebViewConfiguration = class InAppWebViewConfiguration extends core.Object {
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
      return new types.InAppWebViewConfiguration.new({enableJavaScript: enableJavaScript, enableDomStorage: enableDomStorage, headers: headers});
    }
  };
  (types.InAppWebViewConfiguration.new = function(opts) {
    let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : true;
    let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : true;
    let headers = opts && 'headers' in opts ? opts.headers : C[5] || CT.C5;
    this[enableJavaScript$] = enableJavaScript;
    this[enableDomStorage$] = enableDomStorage;
    this[headers$] = headers;
    ;
  }).prototype = types.InAppWebViewConfiguration.prototype;
  dart.addTypeTests(types.InAppWebViewConfiguration);
  dart.addTypeCaches(types.InAppWebViewConfiguration);
  dart.setLibraryUri(types.InAppWebViewConfiguration, I[0]);
  dart.setFieldSignature(types.InAppWebViewConfiguration, () => ({
    __proto__: dart.getFields(types.InAppWebViewConfiguration.__proto__),
    enableJavaScript: dart.finalFieldType(core.bool),
    enableDomStorage: dart.finalFieldType(core.bool),
    headers: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  var mode$ = dart.privateName(types, "LaunchOptions.mode");
  var webViewConfiguration$ = dart.privateName(types, "LaunchOptions.webViewConfiguration");
  var webOnlyWindowName$ = dart.privateName(types, "LaunchOptions.webOnlyWindowName");
  types.LaunchOptions = class LaunchOptions extends core.Object {
    get mode() {
      return this[mode$];
    }
    set mode(value) {
      super.mode = value;
    }
    get webViewConfiguration() {
      return this[webViewConfiguration$];
    }
    set webViewConfiguration(value) {
      super.webViewConfiguration = value;
    }
    get webOnlyWindowName() {
      return this[webOnlyWindowName$];
    }
    set webOnlyWindowName(value) {
      super.webOnlyWindowName = value;
    }
    static ['_#new#tearOff'](opts) {
      let mode = opts && 'mode' in opts ? opts.mode : C[1] || CT.C1;
      let webViewConfiguration = opts && 'webViewConfiguration' in opts ? opts.webViewConfiguration : C[6] || CT.C6;
      let webOnlyWindowName = opts && 'webOnlyWindowName' in opts ? opts.webOnlyWindowName : null;
      return new types.LaunchOptions.new({mode: mode, webViewConfiguration: webViewConfiguration, webOnlyWindowName: webOnlyWindowName});
    }
  };
  (types.LaunchOptions.new = function(opts) {
    let mode = opts && 'mode' in opts ? opts.mode : C[1] || CT.C1;
    let webViewConfiguration = opts && 'webViewConfiguration' in opts ? opts.webViewConfiguration : C[6] || CT.C6;
    let webOnlyWindowName = opts && 'webOnlyWindowName' in opts ? opts.webOnlyWindowName : null;
    this[mode$] = mode;
    this[webViewConfiguration$] = webViewConfiguration;
    this[webOnlyWindowName$] = webOnlyWindowName;
    ;
  }).prototype = types.LaunchOptions.prototype;
  dart.addTypeTests(types.LaunchOptions);
  dart.addTypeCaches(types.LaunchOptions);
  dart.setLibraryUri(types.LaunchOptions, I[0]);
  dart.setFieldSignature(types.LaunchOptions, () => ({
    __proto__: dart.getFields(types.LaunchOptions.__proto__),
    mode: dart.finalFieldType(types.PreferredLaunchMode),
    webViewConfiguration: dart.finalFieldType(types.InAppWebViewConfiguration),
    webOnlyWindowName: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.trackLibraries("packages/url_launcher_platform_interface/src/types.dart", {
    "package:url_launcher_platform_interface/src/types.dart": types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuBA;;;;;;;;;;;;MAbK,gCAAM;;;MAGT,yCAAe;;;MAGf,sCAAY;;;MAGZ,6CAAmB;;;MAGnB,uDAA6B;;;;;;;;IAiBlB;;;;;;IAGA;;;;;;IAGe;;;;;;;;;;;;;;QAZnB;QACA;QACA;IAFA;IACA;IACA;;EACL;;;;;;;;;;;;;;IAuBwB;;;;;;IAGM;;;;;;IAKlB;;;;;;;;;;;;;;QAdP;QACA;QACA;IAFA;IACA;IACA;;EACL","file":"../../../../../../../../../../../packages/url_launcher_platform_interface/src/types.dart.lib.js"}');
  // Exports:
  return {
    src__types: types
  };
}));

//# sourceMappingURL=types.dart.lib.js.map
