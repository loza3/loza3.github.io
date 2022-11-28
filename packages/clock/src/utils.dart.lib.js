define(['dart_sdk'], (function load__packages__clock__src__utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], core.int);
    }
  }, false);
  var C = [void 0];
  utils.daysInMonth = function daysInMonth(year, month) {
    return month === 2 && utils.isLeapYear(year) ? 29 : utils._daysInMonth[$_get](month);
  };
  utils.isLeapYear = function isLeapYear(year) {
    return year[$modulo](4) === 0 && (year[$modulo](100) !== 0 || year[$modulo](400) === 0);
  };
  utils.clampDayOfMonth = function clampDayOfMonth(opts) {
    let year = opts && 'year' in opts ? opts.year : null;
    let month = opts && 'month' in opts ? opts.month : null;
    let day = opts && 'day' in opts ? opts.day : null;
    return day[$clamp](1, utils.daysInMonth(year, month));
  };
  dart.defineLazy(utils, {
    /*utils._daysInMonth*/get _daysInMonth() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/clock/src/utils.dart", {
    "package:clock/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;2CA4BoB,MAAU;AAC1B,UAAC,AAAM,AAAqB,MAAtB,UAAyB,iBAAW,IAAI,IAAK,KAAK,AAAY,0BAAC,KAAK;EAAC;yCAU3D;AAChB,UAAA,AAAK,AAAI,AAAK,KAAV,UAAG,OAAK,MAAM,AAAK,IAAD,UAAG,SAAO,KAAK,AAAK,AAAM,IAAP,UAAG,SAAO;EAAE;;QAiBnC;QAAmB;QAAoB;AACzD,UAAA,AAAI,IAAD,SAAO,GAAG,kBAAY,IAAI,EAAE,KAAK;EAAE;;MApCpC,kBAAY","file":"../../../../../../../../../../../packages/clock/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
