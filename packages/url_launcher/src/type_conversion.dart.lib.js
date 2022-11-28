define(['dart_sdk', 'packages/url_launcher_platform_interface/src/types.dart', 'packages/url_launcher/src/types.dart'], (function load__packages__url_launcher__src__type_conversion_dart(dart_sdk, packages__url_launcher_platform_interface__src__types$46dart, packages__url_launcher__src__types$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__url_launcher_platform_interface__src__types$46dart.src__types;
  const types$ = packages__url_launcher__src__types$46dart.src__types;
  var type_conversion = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: types$.LaunchMode.prototype,
        [_Enum__name]: "platformDefault",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: types$.LaunchMode.prototype,
        [_Enum__name]: "inAppWebView",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: types$.LaunchMode.prototype,
        [_Enum__name]: "externalApplication",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: types$.LaunchMode.prototype,
        [_Enum__name]: "externalNonBrowserApplication",
        [_Enum_index]: 3
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  type_conversion.convertConfiguration = function convertConfiguration(config) {
    return new types.InAppWebViewConfiguration.new({enableJavaScript: config.enableJavaScript, enableDomStorage: config.enableDomStorage, headers: config.headers});
  };
  type_conversion.convertLaunchMode = function convertLaunchMode(mode) {
    switch (mode) {
      case C[0] || CT.C0:
        {
          return types.PreferredLaunchMode.platformDefault;
        }
      case C[1] || CT.C1:
        {
          return types.PreferredLaunchMode.inAppWebView;
        }
      case C[2] || CT.C2:
        {
          return types.PreferredLaunchMode.externalApplication;
        }
      case C[3] || CT.C3:
        {
          return types.PreferredLaunchMode.externalNonBrowserApplication;
        }
    }
  };
  dart.trackLibraries("packages/url_launcher/src/type_conversion.dart", {
    "package:url_launcher/src/type_conversion.dart": type_conversion
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["type_conversion.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uEAUoE;AAClE,UAAO,4DACa,AAAO,MAAD,qCACN,AAAO,MAAD,4BACf,AAAO,MAAD;EAEnB;iEAIiD;AAC/C,YAAQ,IAAI;;;AAER,gBAA2B;;;;AAE3B,gBAA2B;;;;AAE3B,gBAA2B;;;;AAE3B,gBAA2B;;;EAEjC","file":"../../../../../../../../../../../packages/url_launcher/src/type_conversion.dart.lib.js"}');
  // Exports:
  return {
    src__type_conversion: type_conversion
  };
}));

//# sourceMappingURL=type_conversion.dart.lib.js.map
