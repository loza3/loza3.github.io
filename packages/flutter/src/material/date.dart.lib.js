define(['dart_sdk', 'packages/flutter/src/material/icon_button.dart'], (function load__packages__flutter__src__material__date_dart(dart_sdk, packages__flutter__src__material__icon_button$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  var date = Object.create(dart.library);
  var $modulo = dartx['%'];
  var $_get = dartx._get;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], core.int);
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: date.DatePickerEntryMode.prototype,
        [_Enum__name]: "calendar",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: date.DatePickerEntryMode.prototype,
        [_Enum__name]: "input",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: date.DatePickerEntryMode.prototype,
        [_Enum__name]: "calendarOnly",
        [_Enum_index]: 2
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: date.DatePickerEntryMode.prototype,
        [_Enum__name]: "inputOnly",
        [_Enum_index]: 3
      });
    },
    get C1() {
      return C[1] = dart.constList([C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5], date.DatePickerEntryMode);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: date.DatePickerMode.prototype,
        [_Enum__name]: "day",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: date.DatePickerMode.prototype,
        [_Enum__name]: "year",
        [_Enum_index]: 1
      });
    },
    get C6() {
      return C[6] = dart.constList([C[7] || CT.C7, C[8] || CT.C8], date.DatePickerMode);
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "package:flutter/src/material/date.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/date.dart"
  ];
  date.DateUtils = class DateUtils extends core.Object {
    static ['_#_#tearOff']() {
      return new date.DateUtils.__();
    }
    static dateOnly(date) {
      return new core.DateTime.new(date.year, date.month, date.day);
    }
    static datesOnly(range) {
      return new date.DateTimeRange.new({start: date.DateUtils.dateOnly(range.start), end: date.DateUtils.dateOnly(range.end)});
    }
    static isSameDay(dateA, dateB) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      return (t0 = dateA, t0 == null ? null : t0.year) == (t0$ = dateB, t0$ == null ? null : t0$.year) && (t0$0 = dateA, t0$0 == null ? null : t0$0.month) == (t0$1 = dateB, t0$1 == null ? null : t0$1.month) && (t0$2 = dateA, t0$2 == null ? null : t0$2.day) == (t0$3 = dateB, t0$3 == null ? null : t0$3.day);
    }
    static isSameMonth(dateA, dateB) {
      let t0, t0$, t0$0, t0$1;
      return (t0 = dateA, t0 == null ? null : t0.year) == (t0$ = dateB, t0$ == null ? null : t0$.year) && (t0$0 = dateA, t0$0 == null ? null : t0$0.month) == (t0$1 = dateB, t0$1 == null ? null : t0$1.month);
    }
    static monthDelta(startDate, endDate) {
      return (endDate.year - startDate.year) * 12 + endDate.month - startDate.month;
    }
    static addMonthsToMonthDate(monthDate, monthsToAdd) {
      return new core.DateTime.new(monthDate.year, monthDate.month + monthsToAdd);
    }
    static addDaysToDate(date, days) {
      return new core.DateTime.new(date.year, date.month, date.day + days);
    }
    static firstDayOffset(year, month, localizations) {
      let weekdayFromMonday = new core.DateTime.new(year, month).weekday - 1;
      let firstDayOfWeekIndex = localizations.firstDayOfWeekIndex;
      firstDayOfWeekIndex = (firstDayOfWeekIndex - 1)[$modulo](7);
      return (weekdayFromMonday - firstDayOfWeekIndex)[$modulo](7);
    }
    static getDaysInMonth(year, month) {
      if (month === 2) {
        let isLeapYear = year[$modulo](4) === 0 && year[$modulo](100) !== 0 || year[$modulo](400) === 0;
        return isLeapYear ? 29 : 28;
      }
      let daysInMonth = C[0] || CT.C0;
      return daysInMonth[$_get](month - 1);
    }
  };
  (date.DateUtils.__ = function() {
    ;
  }).prototype = date.DateUtils.prototype;
  dart.addTypeTests(date.DateUtils);
  dart.addTypeCaches(date.DateUtils);
  dart.setStaticMethodSignature(date.DateUtils, () => ['dateOnly', 'datesOnly', 'isSameDay', 'isSameMonth', 'monthDelta', 'addMonthsToMonthDate', 'addDaysToDate', 'firstDayOffset', 'getDaysInMonth']);
  dart.setLibraryUri(date.DateUtils, I[0]);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  date.DatePickerEntryMode = class DatePickerEntryMode extends core._Enum {
    toString() {
      return "DatePickerEntryMode." + this[_name];
    }
  };
  (date.DatePickerEntryMode.new = function(index, name) {
    date.DatePickerEntryMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = date.DatePickerEntryMode.prototype;
  dart.addTypeTests(date.DatePickerEntryMode);
  dart.addTypeCaches(date.DatePickerEntryMode);
  dart.setLibraryUri(date.DatePickerEntryMode, I[0]);
  dart.setStaticFieldSignature(date.DatePickerEntryMode, () => ['values', 'calendar', 'input', 'calendarOnly', 'inputOnly']);
  dart.defineExtensionMethods(date.DatePickerEntryMode, ['toString']);
  dart.defineLazy(date.DatePickerEntryMode, {
    /*date.DatePickerEntryMode.values*/get values() {
      return C[1] || CT.C1;
    },
    /*date.DatePickerEntryMode.calendar*/get calendar() {
      return C[2] || CT.C2;
    },
    /*date.DatePickerEntryMode.input*/get input() {
      return C[3] || CT.C3;
    },
    /*date.DatePickerEntryMode.calendarOnly*/get calendarOnly() {
      return C[4] || CT.C4;
    },
    /*date.DatePickerEntryMode.inputOnly*/get inputOnly() {
      return C[5] || CT.C5;
    }
  }, false);
  date.DatePickerMode = class DatePickerMode extends core._Enum {
    toString() {
      return "DatePickerMode." + this[_name];
    }
  };
  (date.DatePickerMode.new = function(index, name) {
    date.DatePickerMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = date.DatePickerMode.prototype;
  dart.addTypeTests(date.DatePickerMode);
  dart.addTypeCaches(date.DatePickerMode);
  dart.setLibraryUri(date.DatePickerMode, I[0]);
  dart.setStaticFieldSignature(date.DatePickerMode, () => ['values', 'day', 'year']);
  dart.defineExtensionMethods(date.DatePickerMode, ['toString']);
  dart.defineLazy(date.DatePickerMode, {
    /*date.DatePickerMode.values*/get values() {
      return C[6] || CT.C6;
    },
    /*date.DatePickerMode.day*/get day() {
      return C[7] || CT.C7;
    },
    /*date.DatePickerMode.year*/get year() {
      return C[8] || CT.C8;
    }
  }, false);
  var start$ = dart.privateName(date, "DateTimeRange.start");
  var end$ = dart.privateName(date, "DateTimeRange.end");
  date.DateTimeRange = class DateTimeRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    static ['_#new#tearOff'](opts) {
      let start = opts && 'start' in opts ? opts.start : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new date.DateTimeRange.new({start: start, end: end});
    }
    get duration() {
      return this.end.difference(this.start);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return date.DateTimeRange.is(other) && other.start._equals(this.start) && other.end._equals(this.end);
    }
    get hashCode() {
      return core.Object.hash(this.start, this.end);
    }
    toString() {
      return dart.str(this.start) + " - " + dart.str(this.end);
    }
  };
  (date.DateTimeRange.new = function(opts) {
    let start = opts && 'start' in opts ? opts.start : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[start$] = start;
    this[end$] = end;
    if (!(start !== null)) dart.assertFailed(null, I[1], 217, 15, "start != null");
    if (!(end !== null)) dart.assertFailed(null, I[1], 218, 15, "end != null");
    if (!!start.isAfter(end)) dart.assertFailed(null, I[1], 219, 15, "!start.isAfter(end)");
    ;
  }).prototype = date.DateTimeRange.prototype;
  dart.addTypeTests(date.DateTimeRange);
  dart.addTypeCaches(date.DateTimeRange);
  dart.setGetterSignature(date.DateTimeRange, () => ({
    __proto__: dart.getGetters(date.DateTimeRange.__proto__),
    duration: core.Duration
  }));
  dart.setLibraryUri(date.DateTimeRange, I[0]);
  dart.setFieldSignature(date.DateTimeRange, () => ({
    __proto__: dart.getFields(date.DateTimeRange.__proto__),
    start: dart.finalFieldType(core.DateTime),
    end: dart.finalFieldType(core.DateTime)
  }));
  dart.defineExtensionMethods(date.DateTimeRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(date.DateTimeRange, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/material/date.dart", {
    "package:flutter/src/material/date.dart": date
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAgBoC;AAChC,YAAO,uBAAS,AAAK,IAAD,OAAO,AAAK,IAAD,QAAQ,AAAK,IAAD;IAC7C;qBAO6C;AAC3C,YAAO,oCAAqB,wBAAS,AAAM,KAAD,cAAc,wBAAS,AAAM,KAAD;IACxE;qBAIgC,OAAiB;;AAC/C,YACc,AACiB,OAD7B,KAAK,eAAL,OAAO,mBAAQ,KAAK,gBAAL,OAAO,aACT,QAAb,KAAK,iBAAL,OAAO,uBAAS,KAAK,iBAAL,OAAO,eACZ,QAAX,KAAK,iBAAL,OAAO,qBAAO,KAAK,iBAAL,OAAO;IACzB;uBAIkC,OAAiB;;AACjD,YACc,AAAe,OAA3B,KAAK,eAAL,OAAO,mBAAQ,KAAK,gBAAL,OAAO,aACT,QAAb,KAAK,iBAAL,OAAO,uBAAS,KAAK,iBAAL,OAAO;IAC3B;sBAY+B,WAAoB;AACjD,YAAuC,AAAK,AAAgB,EAApD,AAAQ,AAAK,OAAN,QAAQ,AAAU,SAAD,SAAS,KAAK,AAAQ,OAAD,SAAS,AAAU,SAAD;IACzE;gCAa+C,WAAe;AAC5D,YAAO,uBAAS,AAAU,SAAD,OAAO,AAAU,AAAM,SAAP,SAAS,WAAW;IAC/D;yBAIuC,MAAU;AAC/C,YAAO,uBAAS,AAAK,IAAD,OAAO,AAAK,IAAD,QAAQ,AAAK,AAAI,IAAL,OAAO,IAAI;IACxD;0BAkC8B,MAAU,OAA6B;AAEzD,8BAAoB,AAAsB,AAAQ,sBAArB,IAAI,EAAE,KAAK,YAAY;AAG1D,gCAAsB,AAAc,aAAD;AAIY,MAAnD,sBAAgD,CAAzB,AAAoB,mBAAD,GAAG,YAAK;AAIlD,YAAiD,EAAzC,AAAkB,iBAAD,GAAG,mBAAmB,WAAI;IACrD;0BAO8B,MAAU;AACtC,UAAI,AAAM,KAAD;AACI,yBAAc,AAAK,AAAI,AAA2B,IAAhC,UAAG,OAAK,KAAO,AAAK,IAAD,UAAG,SAAO,KAAO,AAAK,AAAM,IAAP,UAAG,SAAO;AAC/E,cAAO,WAAU,GAAG,KAAK,EAAR;;AAEH;AAChB,YAAO,AAAW,YAAA,QAAC,AAAM,KAAD,GAAG;IAC7B;;;;EAjIa;;;;;;;;;;;IAoKf;;;;;;;;;;;;MAnBK,+BAAM;;;MAGT,iCAAQ;;;MAKR,8BAAK;;;MAKL,qCAAY;;;MAKZ,kCAAS;;;;;;;IAkBX;;;;;;;;;;;;MANK,0BAAM;;;MAET,uBAAG;;;MAGH,wBAAI;;;;;;;IA6BW;;;;;;IAGA;;;;;;;;;;;;AAKU,YAAA,AAAI,qBAAW;IAAM;YAGtB;;AACtB,WAAI,AAAM,KAAD,uBAAgB;AACvB,cAAO;;AAET,YAAa,AAEX,uBAFK,KAAK,KACP,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAI,KAAL,aAAQ;IACpB;;AAGoB,YAAO,kBAAK,YAAO;IAAI;;AAGtB,YAAe,UAAb,cAAK,iBAAI;IAAI;;;QA/BpB;QACA;IADA;IACA;UACJ,AAAM,KAAD;UACL,AAAI,GAAD;UACF,AAAM,KAAD,SAAS,GAAG;;EAAE","file":"../../../../../../../../../../packages/flutter/src/material/date.dart.lib.js"}');
  // Exports:
  return {
    src__material__date: date
  };
}));

//# sourceMappingURL=date.dart.lib.js.map
