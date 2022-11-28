define(['dart_sdk'], (function load__packages__intl__src__intl__date_computation_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var date_computation = Object.create(dart.library);
  var $floor = dartx.floor;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  date_computation.dayOfYear = function dayOfYear(month, day, leapYear) {
    if (month === 1) return day;
    if (month === 2) return day + 31;
    return date_computation.ordinalDayFromMarchFirst(month, day) + 59 + (leapYear ? 1 : 0);
  };
  date_computation.isLeapYear = function isLeapYear(date) {
    let feb29 = new core.DateTime.new(date.year, 2, 29);
    return feb29.month === 2;
  };
  date_computation.ordinalDayFromMarchFirst = function ordinalDayFromMarchFirst(month, day) {
    return (30.6 * month - 91.4)[$floor]() + day;
  };
  dart.trackLibraries("packages/intl/src/intl/date_computation.dart", {
    "package:intl/src/intl/date_computation.dart": date_computation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_computation.dart"],"names":[],"mappings":";;;;;;;;;;;;kDAUkB,OAAW,KAAU;AACrC,QAAI,AAAM,KAAD,KAAI,GAAG,MAAO,IAAG;AAC1B,QAAI,AAAM,KAAD,KAAI,GAAG,MAAO,AAAI,IAAD,GAAG;AAC7B,UAAO,AAAqC,AAAK,2CAAjB,KAAK,EAAE,GAAG,IAAI,MAAM,QAAQ,GAAG,IAAI,CAAP;EAC9D;oDAIyB;AACnB,gBAAQ,sBAAS,AAAK,IAAD,OAAO,GAAG;AACnC,UAAO,AAAM,AAAM,MAAP,WAAU;EACxB;gFAKiC,OAAW;AACxC,UAAwB,AAAQ,EAA9B,AAAK,AAAS,OAAP,KAAK,GAAI,kBAAgB,GAAG","file":"../../../../../../../../../../../../packages/intl/src/intl/date_computation.dart.lib.js"}');
  // Exports:
  return {
    src__intl__date_computation: date_computation
  };
}));

//# sourceMappingURL=date_computation.dart.lib.js.map
