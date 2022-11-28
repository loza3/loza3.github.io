define(['dart_sdk'], (function load__packages__my_ticket_care__models__workday_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var workday = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: workday.Days.prototype,
        [_Enum__name]: "lunes",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: workday.Days.prototype,
        [_Enum__name]: "martes",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: workday.Days.prototype,
        [_Enum__name]: "miercoles",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: workday.Days.prototype,
        [_Enum__name]: "jueves",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: workday.Days.prototype,
        [_Enum__name]: "viernes",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: workday.Days.prototype,
        [_Enum__name]: "sabado",
        [_Enum_index]: 5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: workday.Days.prototype,
        [_Enum__name]: "domingo",
        [_Enum_index]: 6
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7], workday.Days);
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = ["package:my_ticket_care/models/workday.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  workday.Days = class Days extends core._Enum {
    toString() {
      return "Days." + this[_name];
    }
  };
  (workday.Days.new = function(index, name) {
    workday.Days.__proto__.new.call(this, index, name);
    ;
  }).prototype = workday.Days.prototype;
  dart.addTypeTests(workday.Days);
  dart.addTypeCaches(workday.Days);
  dart.setLibraryUri(workday.Days, I[0]);
  dart.setStaticFieldSignature(workday.Days, () => ['values', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']);
  dart.defineExtensionMethods(workday.Days, ['toString']);
  dart.defineLazy(workday.Days, {
    /*workday.Days.values*/get values() {
      return C[0] || CT.C0;
    },
    /*workday.Days.lunes*/get lunes() {
      return C[1] || CT.C1;
    },
    /*workday.Days.martes*/get martes() {
      return C[2] || CT.C2;
    },
    /*workday.Days.miercoles*/get miercoles() {
      return C[3] || CT.C3;
    },
    /*workday.Days.jueves*/get jueves() {
      return C[4] || CT.C4;
    },
    /*workday.Days.viernes*/get viernes() {
      return C[5] || CT.C5;
    },
    /*workday.Days.sabado*/get sabado() {
      return C[6] || CT.C6;
    },
    /*workday.Days.domingo*/get domingo() {
      return C[7] || CT.C7;
    }
  }, false);
  var workdayId$ = dart.privateName(workday, "Workday.workdayId");
  var date$ = dart.privateName(workday, "Workday.date");
  var day$ = dart.privateName(workday, "Workday.day");
  var isHoliday$ = dart.privateName(workday, "Workday.isHoliday");
  var isWorkday$ = dart.privateName(workday, "Workday.isWorkday");
  var detailDay$ = dart.privateName(workday, "Workday.detailDay");
  var officeId$ = dart.privateName(workday, "Workday.officeId");
  workday.Workday = class Workday extends core.Object {
    get workdayId() {
      return this[workdayId$];
    }
    set workdayId(value) {
      this[workdayId$] = value;
    }
    get date() {
      return this[date$];
    }
    set date(value) {
      this[date$] = value;
    }
    get day() {
      return this[day$];
    }
    set day(value) {
      this[day$] = value;
    }
    get isHoliday() {
      return this[isHoliday$];
    }
    set isHoliday(value) {
      this[isHoliday$] = value;
    }
    get isWorkday() {
      return this[isWorkday$];
    }
    set isWorkday(value) {
      this[isWorkday$] = value;
    }
    get detailDay() {
      return this[detailDay$];
    }
    set detailDay(value) {
      this[detailDay$] = value;
    }
    get officeId() {
      return this[officeId$];
    }
    set officeId(value) {
      this[officeId$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let workdayId = opts && 'workdayId' in opts ? opts.workdayId : null;
      let date = opts && 'date' in opts ? opts.date : null;
      let day = opts && 'day' in opts ? opts.day : null;
      let isHoliday = opts && 'isHoliday' in opts ? opts.isHoliday : null;
      let isWorkday = opts && 'isWorkday' in opts ? opts.isWorkday : null;
      let detailDay = opts && 'detailDay' in opts ? opts.detailDay : null;
      let officeId = opts && 'officeId' in opts ? opts.officeId : null;
      return new workday.Workday.new({workdayId: workdayId, date: date, day: day, isHoliday: isHoliday, isWorkday: isWorkday, detailDay: detailDay, officeId: officeId});
    }
    toMap() {
      let result = new (T.IdentityMapOfString$dynamic()).new();
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["workDayId", this.workdayId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["date", this.date.toString()]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["day", this.day.index]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["isHoliday", this.isHoliday]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["isWorkDay", this.isWorkday]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["detailDay", this.detailDay]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["officeId", this.officeId]));
      return result;
    }
    static fromMap(map) {
      let t2, t2$, t2$0;
      return new workday.Workday.new({workdayId: core.int.as(map[$_get]("workDayId")), date: core.DateTime.parse(core.String.as(map[$_get]("date"))), day: workday.Days.values[$_get](core.int.as(map[$_get]("day"))), isHoliday: core.bool.as((t2 = map[$_get]("isHoliday"), t2 == null ? false : t2)), isWorkday: core.bool.as((t2$ = map[$_get]("isWorkDay"), t2$ == null ? false : t2$)), detailDay: core.String.as((t2$0 = map[$_get]("detailDay"), t2$0 == null ? "" : t2$0)), officeId: core.int.as(map[$_get]("officeId"))});
    }
    static ['_#fromMap#tearOff'](map) {
      return workday.Workday.fromMap(map);
    }
    toJson() {
      return convert.json.encode(this.toMap());
    }
    static fromJson(source) {
      return workday.Workday.fromMap(T.MapOfString$dynamic().as(convert.json.decode(source)));
    }
    static ['_#fromJson#tearOff'](source) {
      return workday.Workday.fromJson(source);
    }
  };
  (workday.Workday.new = function(opts) {
    let workdayId = opts && 'workdayId' in opts ? opts.workdayId : null;
    let date = opts && 'date' in opts ? opts.date : null;
    let day = opts && 'day' in opts ? opts.day : null;
    let isHoliday = opts && 'isHoliday' in opts ? opts.isHoliday : null;
    let isWorkday = opts && 'isWorkday' in opts ? opts.isWorkday : null;
    let detailDay = opts && 'detailDay' in opts ? opts.detailDay : null;
    let officeId = opts && 'officeId' in opts ? opts.officeId : null;
    this[workdayId$] = workdayId;
    this[date$] = date;
    this[day$] = day;
    this[isHoliday$] = isHoliday;
    this[isWorkday$] = isWorkday;
    this[detailDay$] = detailDay;
    this[officeId$] = officeId;
    ;
  }).prototype = workday.Workday.prototype;
  dart.addTypeTests(workday.Workday);
  dart.addTypeCaches(workday.Workday);
  dart.setMethodSignature(workday.Workday, () => ({
    __proto__: dart.getMethods(workday.Workday.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    toJson: dart.fnType(core.String, [])
  }));
  dart.setStaticMethodSignature(workday.Workday, () => ['fromMap', 'fromJson']);
  dart.setLibraryUri(workday.Workday, I[0]);
  dart.setFieldSignature(workday.Workday, () => ({
    __proto__: dart.getFields(workday.Workday.__proto__),
    workdayId: dart.fieldType(core.int),
    date: dart.fieldType(core.DateTime),
    day: dart.fieldType(workday.Days),
    isHoliday: dart.fieldType(core.bool),
    isWorkday: dart.fieldType(core.bool),
    detailDay: dart.fieldType(core.String),
    officeId: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/my_ticket_care/models/workday.dart", {
    "package:my_ticket_care/models/workday.dart": workday
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["workday.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAEuE;;;;;;;;;;;;MAAlE,mBAAM;;;MAAC,kBAAK;;;MAAE,mBAAM;;;MAAE,sBAAS;;;MAAE,mBAAM;;;MAAE,oBAAO;;;MAAE,mBAAM;;;MAAE,oBAAO;;;;;;;;;;;;IAGhE;;;;;;IACK;;;;;;IACJ;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;IACH;;;;;;;;;;;;;;;;;AAYI,mBAA0B;AAEO,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACY,MAAxC,AAAO,MAAD,UAAQ,4CAAC,QAAQ,AAAK;AACK,MAAjC,AAAO,MAAD,UAAQ,4CAAC,OAAO,AAAI;AACa,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACW,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACW,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACS,MAArC,AAAO,MAAD,UAAQ,4CAAC,YAAY;AAE3B,YAAO,OAAM;IACf;mBAE6C;;AAC3C,YAAO,iDACM,AAAG,GAAA,QAAC,qBACA,mCAAM,AAAG,GAAA,QAAC,gBACf,AAAM,uCAAC,AAAG,GAAA,QAAC,mCACO,KAAjB,AAAG,GAAA,QAAC,cAAD,aAAiB,uCACH,MAAjB,AAAG,GAAA,QAAC,cAAD,cAAiB,0CACH,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,mCACrB,AAAG,GAAA,QAAC;IAElB;;;;;AAEmB,YAAA,AAAK,qBAAO;IAAQ;oBAEP;AAC5B,YAAQ,oDAAQ,AAAK,oBAAO,MAAM;IAAE;;;;;;QAtCxB;QACA;QACA;QACA;QACA;QACA;QACA;IANA;IACA;IACA;IACA;IACA;IACA;IACA;;EACd","file":"../../../../../../../../../packages/my_ticket_care/models/workday.dart.lib.js"}');
  // Exports:
  return {
    models__workday: workday
  };
}));

//# sourceMappingURL=workday.dart.lib.js.map
