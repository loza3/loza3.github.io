define(['dart_sdk'], (function load__packages__path__src__utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  var $codeUnitAt = dartx.codeUnitAt;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  utils.isAlphabetic = function isAlphabetic(char) {
    return char >= 65 && char <= 90 || char >= 97 && char <= 122;
  };
  utils.isNumeric = function isNumeric(char) {
    return char >= 48 && char <= 57;
  };
  utils.isDriveLetter = function isDriveLetter(path, index) {
    if (path.length < index + 2) return false;
    if (!utils.isAlphabetic(path[$codeUnitAt](index))) return false;
    if (path[$codeUnitAt](index + 1) !== 58) return false;
    if (path.length === index + 2) return true;
    return path[$codeUnitAt](index + 2) === 47;
  };
  dart.trackLibraries("packages/path/src/utils.dart", {
    "package:path/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;6CAQsB;AAClB,UAAC,AAAK,AAAyC,KAA1C,UAAoB,AAAK,IAAD,UAC5B,AAAK,IAAD,UAAoB,AAAK,IAAD;EAAiB;uCAG/B;AAAS,UAAA,AAAK,AAAc,KAAf,UAAkB,AAAK,IAAD;EAAc;+CAI1C,MAAU;AAClC,QAAI,AAAK,AAAO,IAAR,UAAU,AAAM,KAAD,GAAG,GAAG,MAAO;AACpC,SAAK,mBAAa,AAAK,IAAD,cAAY,KAAK,IAAI,MAAO;AAClD,QAAI,AAAK,IAAD,cAAY,AAAM,KAAD,GAAG,WAAmB,MAAO;AACtD,QAAI,AAAK,AAAO,IAAR,YAAW,AAAM,KAAD,GAAG,GAAG,MAAO;AACrC,UAAO,AAAK,AAAsB,KAAvB,cAAY,AAAM,KAAD,GAAG;EACjC","file":"../../../../../../../../../../../packages/path/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
