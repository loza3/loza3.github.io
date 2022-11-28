define(['dart_sdk'], (function load__packages__quiver__src__core__hash_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var hash = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $fold = dartx.fold;
  var $rightShift = dartx['>>'];
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    intAnddynamicToint: () => (T.intAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  hash.hashObjects = function hashObjects(objects) {
    return hash._finish(objects[$fold](core.int, 0, dart.fn((h, i) => hash._combine(h, dart.hashCode(i)), T.intAnddynamicToint())));
  };
  hash.hash2 = function hash2(a, b) {
    return hash._finish(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)));
  };
  hash.hash3 = function hash3(a, b, c) {
    return hash._finish(hash._combine(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)));
  };
  hash.hash4 = function hash4(a, b, c, d) {
    return hash._finish(hash._combine(hash._combine(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)), dart.hashCode(d)));
  };
  hash._combine = function _combine(hash, value) {
    hash = 536870911 & hash + value;
    hash = 536870911 & hash + ((524287 & hash) << 10);
    return (hash ^ hash[$rightShift](6)) >>> 0;
  };
  hash._finish = function _finish(hash) {
    hash = 536870911 & hash + ((67108863 & hash) << 3);
    hash = (hash ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & hash + ((16383 & hash) << 15);
  };
  dart.trackLibraries("packages/quiver/src/core/hash.dart", {
    "package:quiver/src/core/hash.dart": hash
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hash.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;0CAeyB;AACrB,wBAAQ,AAAQ,OAAD,kBAAM,GAAG,SAAC,GAAG,MAAM,cAAS,CAAC,EAAI,cAAF,CAAC;EAAY;8BAGrD,GAAG;AAAM,wBAAQ,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC;EAAW;8BAG/D,GAAG,GAAG;AAAM,wBAClB,cAAS,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC,IAAc,cAAF,CAAC;EAAW;8BAG9D,GAAG,GAAG,GAAG;AAAM,wBAAQ,cAC7B,cAAS,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC,IAAc,cAAF,CAAC,IACvD,cAAF,CAAC;EAAW;oCAIC,MAAU;AACS,IAAlC,OAAO,AAAW,YAAG,AAAK,IAAD,GAAG,KAAK;AACuB,IAAxD,OAAO,AAAW,YAAG,AAAK,IAAD,IAAwB,CAAnB,AAAW,SAAE,IAAI,KAAK;AACpD,UAAY,EAAL,IAAI,GAAI,AAAK,IAAD,cAAI;EACzB;kCAEgB;AACyC,IAAvD,OAAO,AAAW,YAAG,AAAK,IAAD,IAAwB,CAAnB,AAAW,WAAE,IAAI,KAAK;AAC1B,IAA1B,OAAY,CAAL,IAAI,GAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAG,AAAK,IAAD,IAAwB,CAAnB,AAAW,QAAE,IAAI,KAAK;EACtD","file":"../../../../../../../../../../../../packages/quiver/src/core/hash.dart.lib.js"}');
  // Exports:
  return {
    src__core__hash: hash
  };
}));

//# sourceMappingURL=hash.dart.lib.js.map
