define(['dart_sdk'], (function load__packages__my_ticket_care__models__offer_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var offer = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/models/offer.dart"];
  var offerId$ = dart.privateName(offer, "Offer.offerId");
  var officeId$ = dart.privateName(offer, "Offer.officeId");
  var serviceId$ = dart.privateName(offer, "Offer.serviceId");
  var employeeId$ = dart.privateName(offer, "Offer.employeeId");
  var workdayId$ = dart.privateName(offer, "Offer.workdayId");
  var timeId$ = dart.privateName(offer, "Offer.timeId");
  var status$ = dart.privateName(offer, "Offer.status");
  var stage$ = dart.privateName(offer, "Offer.stage");
  var clientId$ = dart.privateName(offer, "Offer.clientId");
  var employeeName$ = dart.privateName(offer, "Offer.employeeName");
  var startTime$ = dart.privateName(offer, "Offer.startTime");
  var endTime$ = dart.privateName(offer, "Offer.endTime");
  offer.Offer = class Offer extends core.Object {
    get offerId() {
      return this[offerId$];
    }
    set offerId(value) {
      this[offerId$] = value;
    }
    get officeId() {
      return this[officeId$];
    }
    set officeId(value) {
      this[officeId$] = value;
    }
    get serviceId() {
      return this[serviceId$];
    }
    set serviceId(value) {
      this[serviceId$] = value;
    }
    get employeeId() {
      return this[employeeId$];
    }
    set employeeId(value) {
      this[employeeId$] = value;
    }
    get workdayId() {
      return this[workdayId$];
    }
    set workdayId(value) {
      this[workdayId$] = value;
    }
    get timeId() {
      return this[timeId$];
    }
    set timeId(value) {
      this[timeId$] = value;
    }
    get status() {
      return this[status$];
    }
    set status(value) {
      this[status$] = value;
    }
    get stage() {
      return this[stage$];
    }
    set stage(value) {
      this[stage$] = value;
    }
    get clientId() {
      return this[clientId$];
    }
    set clientId(value) {
      this[clientId$] = value;
    }
    get employeeName() {
      return this[employeeName$];
    }
    set employeeName(value) {
      this[employeeName$] = value;
    }
    get startTime() {
      return this[startTime$];
    }
    set startTime(value) {
      this[startTime$] = value;
    }
    get endTime() {
      return this[endTime$];
    }
    set endTime(value) {
      this[endTime$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let offerId = opts && 'offerId' in opts ? opts.offerId : null;
      let officeId = opts && 'officeId' in opts ? opts.officeId : null;
      let serviceId = opts && 'serviceId' in opts ? opts.serviceId : null;
      let employeeId = opts && 'employeeId' in opts ? opts.employeeId : null;
      let workdayId = opts && 'workdayId' in opts ? opts.workdayId : null;
      let timeId = opts && 'timeId' in opts ? opts.timeId : null;
      let status = opts && 'status' in opts ? opts.status : null;
      let stage = opts && 'stage' in opts ? opts.stage : null;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      let employeeName = opts && 'employeeName' in opts ? opts.employeeName : null;
      let startTime = opts && 'startTime' in opts ? opts.startTime : null;
      let endTime = opts && 'endTime' in opts ? opts.endTime : null;
      return new offer.Offer.new({offerId: offerId, officeId: officeId, serviceId: serviceId, employeeId: employeeId, workdayId: workdayId, timeId: timeId, status: status, stage: stage, clientId: clientId, employeeName: employeeName, startTime: startTime, endTime: endTime});
    }
    toMap() {
      let result = new (T.IdentityMapOfString$dynamic()).new();
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["offerId", this.offerId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["officeId", this.officeId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["serviceId", this.serviceId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["employeeId", this.employeeId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["workDayId", this.workdayId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["timeId", this.timeId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["status", this.status]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["stage", this.stage]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["clientId", this.clientId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["startTime", this.startTime]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["endTime", this.endTime]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["employeeName", this.employeeName]));
      return result;
    }
    static fromMap(map) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7;
      return new offer.Offer.new({offerId: core.int.as((t0 = map[$_get]("offerId"), t0 == null ? -1 : t0)), officeId: core.int.as((t0$ = map[$_get]("officeId"), t0$ == null ? -1 : t0$)), serviceId: core.int.as((t0$0 = map[$_get]("serviceId"), t0$0 == null ? -1 : t0$0)), employeeId: core.int.as((t0$1 = map[$_get]("employeeId"), t0$1 == null ? -1 : t0$1)), workdayId: core.int.as((t0$2 = map[$_get]("workDayId"), t0$2 == null ? -1 : t0$2)), timeId: core.int.as((t0$3 = map[$_get]("timeId"), t0$3 == null ? -1 : t0$3)), status: dart.toString(map[$_get]("status")), stage: dart.toString(map[$_get]("stage")), clientId: core.int.as((t0$4 = map[$_get]("clientId"), t0$4 == null ? -1 : t0$4)), startTime: core.String.as((t0$5 = dart.dsend(map[$_get]("time"), '_get', ["startTime"]), t0$5 == null ? "00:00" : t0$5)), endTime: core.String.as((t0$6 = dart.dsend(map[$_get]("time"), '_get', ["endTime"]), t0$6 == null ? "00:00" : t0$6)), employeeName: core.String.as((t0$7 = map[$_get]("employeeName"), t0$7 == null ? "null" : t0$7))});
    }
    static ['_#fromMap#tearOff'](map) {
      return offer.Offer.fromMap(map);
    }
    toJson() {
      return convert.json.encode(this.toMap());
    }
    static empty() {
      return new offer.Offer.new({offerId: -1, officeId: -1, serviceId: -1, employeeId: -1, workdayId: -1, timeId: -1, status: "", stage: "", clientId: -1, employeeName: "No elegido", startTime: "No elegido", endTime: ""});
    }
    static ['_#empty#tearOff']() {
      return offer.Offer.empty();
    }
    static fromJson(source) {
      return offer.Offer.fromMap(T.MapOfString$dynamic().as(convert.json.decode(source)));
    }
    static ['_#fromJson#tearOff'](source) {
      return offer.Offer.fromJson(source);
    }
  };
  (offer.Offer.new = function(opts) {
    let offerId = opts && 'offerId' in opts ? opts.offerId : null;
    let officeId = opts && 'officeId' in opts ? opts.officeId : null;
    let serviceId = opts && 'serviceId' in opts ? opts.serviceId : null;
    let employeeId = opts && 'employeeId' in opts ? opts.employeeId : null;
    let workdayId = opts && 'workdayId' in opts ? opts.workdayId : null;
    let timeId = opts && 'timeId' in opts ? opts.timeId : null;
    let status = opts && 'status' in opts ? opts.status : null;
    let stage = opts && 'stage' in opts ? opts.stage : null;
    let clientId = opts && 'clientId' in opts ? opts.clientId : null;
    let employeeName = opts && 'employeeName' in opts ? opts.employeeName : null;
    let startTime = opts && 'startTime' in opts ? opts.startTime : null;
    let endTime = opts && 'endTime' in opts ? opts.endTime : null;
    this[offerId$] = offerId;
    this[officeId$] = officeId;
    this[serviceId$] = serviceId;
    this[employeeId$] = employeeId;
    this[workdayId$] = workdayId;
    this[timeId$] = timeId;
    this[status$] = status;
    this[stage$] = stage;
    this[clientId$] = clientId;
    this[employeeName$] = employeeName;
    this[startTime$] = startTime;
    this[endTime$] = endTime;
    ;
  }).prototype = offer.Offer.prototype;
  dart.addTypeTests(offer.Offer);
  dart.addTypeCaches(offer.Offer);
  dart.setMethodSignature(offer.Offer, () => ({
    __proto__: dart.getMethods(offer.Offer.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    toJson: dart.fnType(core.String, [])
  }));
  dart.setStaticMethodSignature(offer.Offer, () => ['fromMap', 'empty', 'fromJson']);
  dart.setLibraryUri(offer.Offer, I[0]);
  dart.setFieldSignature(offer.Offer, () => ({
    __proto__: dart.getFields(offer.Offer.__proto__),
    offerId: dart.fieldType(core.int),
    officeId: dart.fieldType(core.int),
    serviceId: dart.fieldType(core.int),
    employeeId: dart.fieldType(core.int),
    workdayId: dart.fieldType(core.int),
    timeId: dart.fieldType(core.int),
    status: dart.fieldType(core.String),
    stage: dart.fieldType(core.String),
    clientId: dart.fieldType(core.int),
    employeeName: dart.fieldType(core.String),
    startTime: dart.fieldType(core.String),
    endTime: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/my_ticket_care/models/offer.dart", {
    "package:my_ticket_care/models/offer.dart": offer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["offer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGM;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IAEG;;;;;;IACA;;;;;;IAEH;;;;;;IAEG;;;;;;IACA;;;;;;IACA;;;;;;;;;;;;;;;;;;;;;;AAkBC,mBAA0B;AAEG,MAAnC,AAAO,MAAD,UAAQ,4CAAC,WAAW;AACW,MAArC,AAAO,MAAD,UAAQ,4CAAC,YAAY;AACY,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACa,MAAzC,AAAO,MAAD,UAAQ,4CAAC,cAAc;AACU,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACK,MAAjC,AAAO,MAAD,UAAQ,4CAAC,UAAU;AACQ,MAAjC,AAAO,MAAD,UAAQ,4CAAC,UAAU;AACM,MAA/B,AAAO,MAAD,UAAQ,4CAAC,SAAS;AACa,MAArC,AAAO,MAAD,UAAQ,4CAAC,YAAY;AACY,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACO,MAAnC,AAAO,MAAD,UAAQ,4CAAC,WAAW;AACmB,MAA7C,AAAO,MAAD,UAAQ,4CAAC,gBAAgB;AAE/B,YAAO,OAAM;IACf;mBAE2C;;AACzC,YAAO,4CACqB,KAAf,AAAG,GAAA,QAAC,YAAD,aAAe,CAAC,iCACF,MAAhB,AAAG,GAAA,QAAC,aAAD,cAAgB,CAAC,mCACF,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,qCACF,OAAlB,AAAG,GAAA,QAAC,eAAD,eAAkB,CAAC,oCACN,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,iCACV,OAAd,AAAG,GAAA,QAAC,WAAD,eAAc,CAAC,oBACJ,cAAd,AAAG,GAAA,QAAC,mBACQ,cAAb,AAAG,GAAA,QAAC,kCACe,OAAhB,AAAG,GAAA,QAAC,aAAD,eAAgB,CAAC,uCACM,OAAd,WAAX,AAAG,GAAA,QAAC,kBAAQ,eAAD,eAAiB,2CACP,OAAZ,WAAX,AAAG,GAAA,QAAC,kBAAQ,aAAD,eAAe,gDACD,OAApB,AAAG,GAAA,QAAC,iBAAD,eAAoB;IAC3C;;;;;AAEmB,YAAA,AAAK,qBAAO;IAAQ;;AAGrC,YAAO,+BACI,CAAC,aACA,CAAC,cACA,CAAC,eACA,CAAC,cACF,CAAC,WACJ,CAAC,WACD,WACD,cACG,CAAC,iBACG,yBACH,uBACF;IAEb;;;;oBAE8B;AAAW,YAAM,gDAAQ,AAAK,oBAAO,MAAM;IAAE;;;;;;QApE3D;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAXA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACd","file":"../../../../../../../../../packages/my_ticket_care/models/offer.dart.lib.js"}');
  // Exports:
  return {
    models__offer: offer
  };
}));

//# sourceMappingURL=offer.dart.lib.js.map
