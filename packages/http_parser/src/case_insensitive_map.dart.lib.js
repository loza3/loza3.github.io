define(['dart_sdk', 'packages/collection/src/canonicalized_map.dart'], (function load__packages__http_parser__src__case_insensitive_map_dart(dart_sdk, packages__collection__src__canonicalized_map$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const canonicalized_map = packages__collection__src__canonicalized_map$46dart.src__canonicalized_map;
  var case_insensitive_map = Object.create(dart.library);
  var $toLowerCase = dartx.toLowerCase;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:http_parser/src/case_insensitive_map.dart"];
  const _is_CaseInsensitiveMap_default = Symbol('_is_CaseInsensitiveMap_default');
  case_insensitive_map.CaseInsensitiveMap$ = dart.generic(V => {
    class CaseInsensitiveMap extends canonicalized_map.CanonicalizedMap$(core.String, core.String, V) {
      static ['_#new#tearOff'](V) {
        return new (case_insensitive_map.CaseInsensitiveMap$(V)).new();
      }
      static ['_#from#tearOff'](V, other) {
        return new (case_insensitive_map.CaseInsensitiveMap$(V)).from(other);
      }
    }
    (CaseInsensitiveMap.new = function() {
      CaseInsensitiveMap.__proto__.new.call(this, dart.fn(key => key[$toLowerCase](), T.StringToString()));
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    (CaseInsensitiveMap.from = function(other) {
      CaseInsensitiveMap.__proto__.from.call(this, other, dart.fn(key => key[$toLowerCase](), T.StringToString()));
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    dart.addTypeTests(CaseInsensitiveMap);
    CaseInsensitiveMap.prototype[_is_CaseInsensitiveMap_default] = true;
    dart.addTypeCaches(CaseInsensitiveMap);
    dart.setLibraryUri(CaseInsensitiveMap, I[0]);
    return CaseInsensitiveMap;
  });
  case_insensitive_map.CaseInsensitiveMap = case_insensitive_map.CaseInsensitiveMap$();
  dart.addTypeTests(case_insensitive_map.CaseInsensitiveMap, _is_CaseInsensitiveMap_default);
  dart.trackLibraries("packages/http_parser/src/case_insensitive_map.dart", {
    "package:http_parser/src/case_insensitive_map.dart": case_insensitive_map
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["case_insensitive_map.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUyB,kDAAM,QAAC,OAAQ,AAAI,GAAD;;IAAe;wCAEjB;AAC3B,mDAAK,KAAK,EAAE,QAAC,OAAQ,AAAI,GAAD;;IAAe","file":"../../../../../../../../../../../packages/http_parser/src/case_insensitive_map.dart.lib.js"}');
  // Exports:
  return {
    src__case_insensitive_map: case_insensitive_map
  };
}));

//# sourceMappingURL=case_insensitive_map.dart.lib.js.map
