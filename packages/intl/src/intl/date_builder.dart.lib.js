define(['dart_sdk', 'packages/intl/src/intl/date_computation.dart', 'packages/clock/src/stopwatch.dart'], (function load__packages__intl__src__intl__date_builder_dart(dart_sdk, packages__intl__src__intl__date_computation$46dart, packages__clock__src__stopwatch$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date_computation = packages__intl__src__intl__date_computation$46dart.src__intl__date_computation;
  const $default = packages__clock__src__stopwatch$46dart.src__default;
  var date_builder = Object.create(dart.library);
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/intl-0.17.0/lib/src/intl/date_builder.dart",
    "package:intl/src/intl/date_builder.dart"
  ];
  var year = dart.privateName(date_builder, "DateBuilder.year");
  var month = dart.privateName(date_builder, "DateBuilder.month");
  var day = dart.privateName(date_builder, "DateBuilder.day");
  var dayOfYear = dart.privateName(date_builder, "DateBuilder.dayOfYear");
  var hour = dart.privateName(date_builder, "DateBuilder.hour");
  var minute = dart.privateName(date_builder, "DateBuilder.minute");
  var second = dart.privateName(date_builder, "DateBuilder.second");
  var fractionalSecond = dart.privateName(date_builder, "DateBuilder.fractionalSecond");
  var pm = dart.privateName(date_builder, "DateBuilder.pm");
  var utc = dart.privateName(date_builder, "DateBuilder.utc");
  var dateOnly = dart.privateName(date_builder, "DateBuilder.dateOnly");
  var _hasAmbiguousCentury = dart.privateName(date_builder, "_hasAmbiguousCentury");
  var _date = dart.privateName(date_builder, "_date");
  var _retried = dart.privateName(date_builder, "_retried");
  var _locale$ = dart.privateName(date_builder, "_locale");
  var _dateTimeConstructor$ = dart.privateName(date_builder, "_dateTimeConstructor");
  var _verify = dart.privateName(date_builder, "_verify");
  var _offsetYear = dart.privateName(date_builder, "_offsetYear");
  var _correctForErrors = dart.privateName(date_builder, "_correctForErrors");
  date_builder.DateBuilder = class DateBuilder extends core.Object {
    get year() {
      return this[year];
    }
    set year(value) {
      this[year] = value;
    }
    get month() {
      return this[month];
    }
    set month(value) {
      this[month] = value;
    }
    get day() {
      return this[day];
    }
    set day(value) {
      this[day] = value;
    }
    get dayOfYear() {
      return this[dayOfYear];
    }
    set dayOfYear(value) {
      this[dayOfYear] = value;
    }
    get hour() {
      return this[hour];
    }
    set hour(value) {
      this[hour] = value;
    }
    get minute() {
      return this[minute];
    }
    set minute(value) {
      this[minute] = value;
    }
    get second() {
      return this[second];
    }
    set second(value) {
      this[second] = value;
    }
    get fractionalSecond() {
      return this[fractionalSecond];
    }
    set fractionalSecond(value) {
      this[fractionalSecond] = value;
    }
    get pm() {
      return this[pm];
    }
    set pm(value) {
      this[pm] = value;
    }
    get utc() {
      return this[utc];
    }
    set utc(value) {
      this[utc] = value;
    }
    get dateOnly() {
      return this[dateOnly];
    }
    set dateOnly(value) {
      this[dateOnly] = value;
    }
    static ['_#new#tearOff'](_locale, _dateTimeConstructor) {
      return new date_builder.DateBuilder.new(_locale, _dateTimeConstructor);
    }
    setYear(x) {
      this.year = x;
    }
    setHasAmbiguousCentury(isAmbiguous) {
      this[_hasAmbiguousCentury] = isAmbiguous;
    }
    setMonth(x) {
      this.month = x;
    }
    setDay(x) {
      this.day = x;
    }
    setDayOfYear(x) {
      this.dayOfYear = x;
    }
    get dayOrDayOfYear() {
      return this.dayOfYear === 0 ? this.day : this.dayOfYear;
    }
    setHour(x) {
      this.hour = x;
    }
    setMinute(x) {
      this.minute = x;
    }
    setSecond(x) {
      this.second = x;
    }
    setFractionalSecond(x) {
      this.fractionalSecond = x;
    }
    get hour24() {
      return this.pm ? this.hour + 12 : this.hour;
    }
    verify(s) {
      this[_verify](this.month, 1, 12, "month", s);
      this[_verify](this.hour24, 0, 23, "hour", s);
      this[_verify](this.minute, 0, 59, "minute", s);
      this[_verify](this.second, 0, 59, "second", s);
      this[_verify](this.fractionalSecond, 0, 999, "fractional second", s);
      let date = this.asDate();
      let minimumDate = this.dateOnly && date.hour === 1 ? 0 : date.hour;
      this[_verify](this.hour24, minimumDate, date.hour, "hour", s, date);
      if (this.dayOfYear > 0) {
        let leapYear = date_computation.isLeapYear(date);
        let correspondingDay = date_computation.dayOfYear(date.month, date.day, leapYear);
        this[_verify](this.dayOfYear, correspondingDay, correspondingDay, "dayOfYear", s, date);
      } else {
        this[_verify](this.day, date.day, date.day, "day", s, date);
      }
      this[_verify](this.year, date.year, date.year, "year", s, date);
    }
    [_verify](value, min, max, desc, originalInput, parsed = null) {
      let t0, t0$;
      if (value < min || value > max) {
        let parsedDescription = parsed == null ? "" : " Date parsed as " + dart.str(parsed) + ".";
        let errorDescription = "Error parsing " + originalInput + ", invalid " + desc + " value: " + dart.str(value) + " in " + this[_locale$] + " with time zone offset " + dart.str((t0$ = (t0 = parsed, t0 == null ? null : t0.timeZoneOffset), t0$ == null ? "unknown" : t0$)) + "." + " Expected value between " + dart.str(min) + " and " + dart.str(max) + "." + parsedDescription + ".";
        if (this[_retried] > 0) {
          errorDescription = errorDescription + (" Failed after " + dart.str(this[_retried]) + " retries.");
        }
        dart.throw(new core.FormatException.new(errorDescription));
      }
    }
    [_offsetYear](dateTime, offsetYears) {
      let t7, t6, t5, t4, t3, t2, t1, t0;
      t0 = dateTime.year + offsetYears;
      t1 = dateTime.month;
      t2 = dateTime.day;
      t3 = dateTime.hour;
      t4 = dateTime.minute;
      t5 = dateTime.second;
      t6 = dateTime.millisecond;
      t7 = dateTime.isUtc;
      return this[_dateTimeConstructor$](t0, t1, t2, t3, t4, t5, t6, t7);
    }
    asDate(opts) {
      let t7, t6, t5, t4, t3, t2, t1, t0, t7$, t6$, t5$, t4$, t3$, t2$, t1$, t0$, t7$0, t6$0, t5$0, t4$0, t3$0, t2$0, t1$0, t0$0;
      let retries = opts && 'retries' in opts ? opts.retries : 3;
      if (this[_date] != null) return dart.nullCheck(this[_date]);
      let preliminaryResult = null;
      let hasCentury = !this[_hasAmbiguousCentury] || this.year < 0 || this.year >= 100;
      if (hasCentury) {
        preliminaryResult = (t0 = this.year, t1 = this.month, t2 = this.dayOrDayOfYear, t3 = this.hour24, t4 = this.minute, t5 = this.second, t6 = this.fractionalSecond, t7 = this.utc, this[_dateTimeConstructor$](t0, t1, t2, t3, t4, t5, t6, t7));
      } else {
        let now = $default.clock.now();
        if (this.utc) {
          now = now.toUtc();
        }
        let lowerDate = this[_offsetYear](now, -80);
        let upperDate = this[_offsetYear](now, 100 - 80);
        let lowerCentury = (lowerDate.year / 100)[$truncate]() * 100;
        let upperCentury = (upperDate.year / 100)[$truncate]() * 100;
        preliminaryResult = (t0$ = upperCentury + this.year, t1$ = this.month, t2$ = this.dayOrDayOfYear, t3$ = this.hour24, t4$ = this.minute, t5$ = this.second, t6$ = this.fractionalSecond, t7$ = this.utc, this[_dateTimeConstructor$](t0$, t1$, t2$, t3$, t4$, t5$, t6$, t7$));
        if (preliminaryResult.compareTo(upperDate) <= 0) {
          if (!(preliminaryResult.compareTo(lowerDate) > 0)) dart.assertFailed(null, I[0], 217, 16, "preliminaryResult.compareTo(lowerDate) > 0");
        } else {
          preliminaryResult = (t0$0 = lowerCentury + this.year, t1$0 = this.month, t2$0 = this.dayOrDayOfYear, t3$0 = this.hour24, t4$0 = this.minute, t5$0 = this.second, t6$0 = this.fractionalSecond, t7$0 = this.utc, this[_dateTimeConstructor$](t0$0, t1$0, t2$0, t3$0, t4$0, t5$0, t6$0, t7$0));
        }
      }
      if (this.utc && hasCentury) {
        this[_date] = preliminaryResult;
      } else {
        this[_date] = this[_correctForErrors](preliminaryResult, retries);
      }
      return dart.nullCheck(this[_date]);
    }
    [_correctForErrors](result, retries) {
      if (retries <= 0) {
        return result;
      }
      let leapYear = date_computation.isLeapYear(result);
      let resultDayOfYear = date_computation.dayOfYear(result.month, result.day, leapYear);
      if (!this.utc && result.isUtc && (result.hour !== this.hour24 || result.day !== resultDayOfYear || !new core.DateTime.now().isUtc)) {
        this[_retried] = this[_retried] + 1;
        return this.asDate({retries: retries - 1});
      }
      if (this.dateOnly && result.hour !== 0) {
        let tryAgain = this.asDate({retries: retries - 1});
        if (!tryAgain._equals(result)) {
          return tryAgain;
        }
        let expectedDayOfYear = this.dayOfYear === 0 ? date_computation.dayOfYear(this.month, this.day, leapYear) : this.dayOfYear;
        let daysPrevious = expectedDayOfYear - resultDayOfYear;
        let offset = daysPrevious * 24 - result.hour;
        let adjusted = result.add(new core.Duration.new({hours: offset}));
        if (adjusted.hour === 0) {
          return adjusted;
        }
        let adjustedDayOfYear = date_computation.dayOfYear(adjusted.month, adjusted.day, leapYear);
        if (adjustedDayOfYear !== expectedDayOfYear) {
          return result;
        }
        return adjusted;
      }
      return result;
    }
  };
  (date_builder.DateBuilder.new = function(_locale, _dateTimeConstructor) {
    this[year] = 1970;
    this[month] = 1;
    this[day] = 1;
    this[dayOfYear] = 0;
    this[hour] = 0;
    this[minute] = 0;
    this[second] = 0;
    this[fractionalSecond] = 0;
    this[pm] = false;
    this[utc] = false;
    this[_hasAmbiguousCentury] = false;
    this[_date] = null;
    this[_retried] = 0;
    this[dateOnly] = false;
    this[_locale$] = _locale;
    this[_dateTimeConstructor$] = _dateTimeConstructor;
    ;
  }).prototype = date_builder.DateBuilder.prototype;
  dart.addTypeTests(date_builder.DateBuilder);
  dart.addTypeCaches(date_builder.DateBuilder);
  dart.setMethodSignature(date_builder.DateBuilder, () => ({
    __proto__: dart.getMethods(date_builder.DateBuilder.__proto__),
    setYear: dart.fnType(dart.void, [core.int]),
    setHasAmbiguousCentury: dart.fnType(dart.void, [core.bool]),
    setMonth: dart.fnType(dart.void, [core.int]),
    setDay: dart.fnType(dart.void, [core.int]),
    setDayOfYear: dart.fnType(dart.void, [core.int]),
    setHour: dart.fnType(dart.void, [core.int]),
    setMinute: dart.fnType(dart.void, [core.int]),
    setSecond: dart.fnType(dart.void, [core.int]),
    setFractionalSecond: dart.fnType(dart.void, [core.int]),
    verify: dart.fnType(dart.void, [core.String]),
    [_verify]: dart.fnType(dart.void, [core.int, core.int, core.int, core.String, core.String], [dart.nullable(core.DateTime)]),
    [_offsetYear]: dart.fnType(core.DateTime, [core.DateTime, core.int]),
    asDate: dart.fnType(core.DateTime, [], {retries: core.int}, {}),
    [_correctForErrors]: dart.fnType(core.DateTime, [core.DateTime, core.int])
  }));
  dart.setGetterSignature(date_builder.DateBuilder, () => ({
    __proto__: dart.getGetters(date_builder.DateBuilder.__proto__),
    dayOrDayOfYear: core.int,
    hour24: core.int
  }));
  dart.setLibraryUri(date_builder.DateBuilder, I[1]);
  dart.setFieldSignature(date_builder.DateBuilder, () => ({
    __proto__: dart.getFields(date_builder.DateBuilder.__proto__),
    year: dart.fieldType(core.int),
    month: dart.fieldType(core.int),
    day: dart.fieldType(core.int),
    dayOfYear: dart.fieldType(core.int),
    hour: dart.fieldType(core.int),
    minute: dart.fieldType(core.int),
    second: dart.fieldType(core.int),
    fractionalSecond: dart.fieldType(core.int),
    pm: dart.fieldType(core.bool),
    utc: dart.fieldType(core.bool),
    [_hasAmbiguousCentury]: dart.fieldType(core.bool),
    [_locale$]: dart.finalFieldType(core.String),
    [_date]: dart.fieldType(dart.nullable(core.DateTime)),
    [_retried]: dart.fieldType(core.int),
    dateOnly: dart.fieldType(core.bool),
    [_dateTimeConstructor$]: dart.finalFieldType(dart.fnType(core.DateTime, [core.int, core.int, core.int, core.int, core.int, core.int, core.int, core.bool]))
  }));
  dart.trackLibraries("packages/intl/src/intl/date_builder.dart", {
    "package:intl/src/intl/date_builder.dart": date_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_builder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaM;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACC;;;;;;IACA;;;;;;IAgCD;;;;;;;;;YAWa;AACP,MAAR,YAAO,CAAC;IACV;2BAIiC;AACG,MAAlC,6BAAuB,WAAW;IACpC;aAEkB;AACP,MAAT,aAAQ,CAAC;IACX;WAEgB;AACP,MAAP,WAAM,CAAC;IACT;iBAEsB;AACP,MAAb,iBAAY,CAAC;IACf;;AAI0B,YAAA,AAAU,oBAAG,IAAI,WAAM;IAAS;YAEzC;AACP,MAAR,YAAO,CAAC;IACV;cAEmB;AACP,MAAV,cAAS,CAAC;IACZ;cAEmB;AACP,MAAV,cAAS,CAAC;IACZ;wBAE6B;AACP,MAApB,wBAAmB,CAAC;IACtB;;AAEkB,uBAAK,AAAK,YAAE,KAAK;IAAI;WAKpB;AACgB,MAAjC,cAAQ,YAAO,GAAG,IAAI,SAAS,CAAC;AACC,MAAjC,cAAQ,aAAQ,GAAG,IAAI,QAAQ,CAAC;AACG,MAAnC,cAAQ,aAAQ,GAAG,IAAI,UAAU,CAAC;AACC,MAAnC,cAAQ,aAAQ,GAAG,IAAI,UAAU,CAAC;AACuB,MAAzD,cAAQ,uBAAkB,GAAG,KAAK,qBAAqB,CAAC;AAMpD,iBAAO;AAMP,wBAAc,AAAS,iBAAG,AAAK,AAAK,IAAN,UAAS,IAAI,IAAI,AAAK,IAAD;AACC,MAAxD,cAAQ,aAAQ,WAAW,EAAE,AAAK,IAAD,OAAO,QAAQ,CAAC,EAAE,IAAI;AACvD,UAAI,AAAU,iBAAE;AAGV,uBAA4B,4BAAW,IAAI;AAC3C,+BACiB,2BAAU,AAAK,IAAD,QAAQ,AAAK,IAAD,MAAM,QAAQ;AAEW,QADxE,cACI,gBAAW,gBAAgB,EAAE,gBAAgB,EAAE,aAAa,CAAC,EAAE,IAAI;;AAGvB,QAAhD,cAAQ,UAAK,AAAK,IAAD,MAAM,AAAK,IAAD,MAAM,OAAO,CAAC,EAAE,IAAI;;AAEG,MAApD,cAAQ,WAAM,AAAK,IAAD,OAAO,AAAK,IAAD,OAAO,QAAQ,CAAC,EAAE,IAAI;IACrD;cAEiB,OAAW,KAAS,KAAY,MAAa,eAC/C;;AACb,UAAI,AAAM,KAAD,GAAG,GAAG,IAAI,AAAM,KAAD,GAAG,GAAG;AACxB,gCAAoB,AAAO,MAAD,WAAW,KAAK,AAA0B,8BAAR,MAAM;AAClE,+BAAiB,AACjB,mBAAgB,aAAa,kBAAW,IAAI,yBAAS,KAAK,IAC1D,SAAM,iBACN,sCAAiD,YAAvB,MAAM,eAAN,OAAQ,oBAAR,cAA0B,oBAAU,MAC9D,sCAA0B,GAAG,uBAAM,GAAG,UAAE,iBAAiB;AAC7D,YAAI,AAAS,iBAAE;AACyC,UAAtD,mBAAA,AAAiB,gBAAD,IAAI,AAAkC,4BAAlB,kBAAQ;;AAEP,QAAvC,WAAM,6BAAgB,gBAAgB;;IAE1C;kBAO8B,UAAc;;AACxC,WACI,AAAS,AAAK,QAAN,QAAQ,WAAW;WAC3B,AAAS,QAAD;WACR,AAAS,QAAD;WACR,AAAS,QAAD;WACR,AAAS,QAAD;WACR,AAAS,QAAD;WACR,AAAS,QAAD;WACR,AAAS,QAAD;YARZ,AAAoB;IAQD;;;UAIF;AAGnB,UAAI,qBAAe,MAAY,gBAAL;AAEjB;AACH,uBAA+C,CAAjC,8BAAwB,AAAK,YAAE,KAAK,AAAK,aAAG;AAChE,UAAI,UAAU;AAEsC,QADlD,0BAAyC,gBAAM,iBAAO,0BAClD,kBAAQ,kBAAQ,kBAAQ,4BAAkB,UAD1B,AAAoB;;AAGpC,kBAAM,AAAM;AAChB,YAAI;AACe,UAAjB,MAAM,AAAI,GAAD;;AAIP,wBAAY,kBAAY,GAAG,EAAE;AAC7B,wBAAY,kBAAY,GAAG,EAAE,AAAI;AACjC,2BAA+B,AAAQ,CAAvB,AAAU,SAAD,QAAS,oBAAO;AACzC,2BAA+B,AAAQ,CAAvB,AAAU,SAAD,QAAS,oBAAO;AAEqB,QADlE,2BAAyC,AAAa,YAAD,GAAG,iBAAM,kBAC1D,2BAAgB,mBAAQ,mBAAQ,mBAAQ,6BAAkB,UAD1C,AAAoB;AAaxC,YAAI,AAAkB,AAAqB,iBAAtB,WAAW,SAAS,KAAK;AAE5C,gBAAO,AAAkB,AAAqB,iBAAtB,WAAW,SAAS,IAAI;;AAGkB,UADlE,4BAAyC,AAAa,YAAD,GAAG,kBAAM,mBAC1D,4BAAgB,oBAAQ,oBAAQ,oBAAQ,8BAAkB,UAD1C,AAAoB;;;AAK5C,UAAI,YAAO,UAAU;AACM,QAAzB,cAAQ,iBAAiB;;AAE4B,QAArD,cAAQ,wBAAkB,iBAAiB,EAAE,OAAO;;AAEtD,YAAY,gBAAL;IACT;wBAIoC,QAAY;AAwB9C,UAAI,AAAQ,OAAD,IAAI;AACb,cAAO,OAAM;;AAGX,qBAA4B,4BAAW,MAAM;AAC7C,4BACiB,2BAAU,AAAO,MAAD,QAAQ,AAAO,MAAD,MAAM,QAAQ;AAMjE,WAAK,YACD,AAAO,MAAD,WACL,AAAO,MAAD,UAAS,eACZ,AAAO,MAAD,SAAQ,eAAe,KACnB,AAAM;AAGZ,QAAV,iBAAA,AAAQ,iBAAA;AACR,cAAO,uBAAgB,AAAQ,OAAD,GAAG;;AAGnC,UAAI,iBAAY,AAAO,MAAD,UAAS;AAEzB,uBAAW,sBAAgB,AAAQ,OAAD,GAAG;AACzC,aAAI,QAAQ,SAAI,MAAM;AAEpB,gBAAO,SAAQ;;AAIb,gCAAoB,AAAU,mBAAG,IACd,2BAAU,YAAO,UAAK,QAAQ,IAC/C;AAQF,2BAAe,AAAkB,iBAAD,GAAG,eAAe;AAGlD,qBAAU,AAAa,AAAM,YAAP,GAAG,KAAM,AAAO,MAAD;AACrC,uBAAW,AAAO,MAAD,KAAK,8BAAgB,MAAM;AAGhD,YAAI,AAAS,AAAK,QAAN,UAAS;AACnB,gBAAO,SAAQ;;AAQb,gCACiB,2BAAU,AAAS,QAAD,QAAQ,AAAS,QAAD,MAAM,QAAQ;AACrE,YAAI,iBAAiB,KAAI,iBAAiB;AACxC,gBAAO,OAAM;;AAEf,cAAO,SAAQ;;AAGjB,YAAO,OAAM;IACf;;2CAvQiB,SAAc;IAhD3B,aAAO;IACP,cAAQ;IACR,YAAM;IACN,kBAAY;IACZ,aAAO;IACP,eAAS;IACT,eAAS;IACT,yBAAmB;IAClB,WAAK;IACL,YAAM;IAKN,6BAAuB;IASlB;IAGN,iBAAW;IAeX,iBAAW;IAOE;IAAc;;EAAqB","file":"../../../../../../../../../../../../packages/intl/src/intl/date_builder.dart.lib.js"}');
  // Exports:
  return {
    src__intl__date_builder: date_builder
  };
}));

//# sourceMappingURL=date_builder.dart.lib.js.map
