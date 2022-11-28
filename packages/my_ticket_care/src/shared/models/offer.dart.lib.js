define(['dart_sdk'], (function load__packages__my_ticket_care__src__shared__models__offer_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var offer = Object.create(dart.library);
  var $_get = dartx._get;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/shared/models/offer.dart"];
  var offerId$ = dart.privateName(offer, "Offer.offerId");
  var officeId$ = dart.privateName(offer, "Offer.officeId");
  var serviceId$ = dart.privateName(offer, "Offer.serviceId");
  var employeeId$ = dart.privateName(offer, "Offer.employeeId");
  var workdayId$ = dart.privateName(offer, "Offer.workdayId");
  var timeId$ = dart.privateName(offer, "Offer.timeId");
  var clientId$ = dart.privateName(offer, "Offer.clientId");
  var status$ = dart.privateName(offer, "Offer.status");
  var stage$ = dart.privateName(offer, "Offer.stage");
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
    get clientId() {
      return this[clientId$];
    }
    set clientId(value) {
      this[clientId$] = value;
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
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      let workdayId = opts && 'workdayId' in opts ? opts.workdayId : null;
      let timeId = opts && 'timeId' in opts ? opts.timeId : null;
      let status = opts && 'status' in opts ? opts.status : null;
      let stage = opts && 'stage' in opts ? opts.stage : null;
      let startTime = opts && 'startTime' in opts ? opts.startTime : null;
      let endTime = opts && 'endTime' in opts ? opts.endTime : null;
      return new offer.Offer.new({offerId: offerId, officeId: officeId, serviceId: serviceId, employeeId: employeeId, clientId: clientId, workdayId: workdayId, timeId: timeId, status: status, stage: stage, startTime: startTime, endTime: endTime});
    }
    static fromMap(map) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      return new offer.Offer.new({offerId: core.int.as((t0 = map[$_get]("offerId"), t0 == null ? -1 : t0)), officeId: core.int.as((t0$ = map[$_get]("officeId"), t0$ == null ? -1 : t0$)), serviceId: core.int.as((t0$0 = map[$_get]("serviceId"), t0$0 == null ? -1 : t0$0)), employeeId: core.int.as((t0$1 = map[$_get]("employeeId"), t0$1 == null ? -1 : t0$1)), workdayId: core.int.as((t0$2 = map[$_get]("workDayId"), t0$2 == null ? -1 : t0$2)), timeId: core.int.as((t0$3 = map[$_get]("timeId"), t0$3 == null ? -1 : t0$3)), clientId: core.int.as((t0$4 = map[$_get]("clientId"), t0$4 == null ? -1 : t0$4)), status: dart.toString(map[$_get]("status")), stage: dart.toString(map[$_get]("stage")), startTime: core.String.as((t0$5 = dart.dsend(map[$_get]("time"), '_get', ["startTime"]), t0$5 == null ? "00:00" : t0$5)), endTime: core.String.as((t0$6 = dart.dsend(map[$_get]("time"), '_get', ["endTime"]), t0$6 == null ? "00:00" : t0$6))});
    }
    static ['_#fromMap#tearOff'](map) {
      return offer.Offer.fromMap(map);
    }
    static fromMapPut(map) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      return new offer.Offer.new({offerId: core.int.as((t0 = map[$_get]("offerId"), t0 == null ? -1 : t0)), officeId: core.int.as((t0$ = map[$_get]("officeId"), t0$ == null ? -1 : t0$)), serviceId: core.int.as((t0$0 = map[$_get]("serviceId"), t0$0 == null ? -1 : t0$0)), employeeId: core.int.as((t0$1 = map[$_get]("employeeId"), t0$1 == null ? -1 : t0$1)), workdayId: core.int.as((t0$2 = map[$_get]("workDayId"), t0$2 == null ? -1 : t0$2)), timeId: core.int.as((t0$3 = map[$_get]("timeId"), t0$3 == null ? -1 : t0$3)), clientId: core.int.as((t0$4 = map[$_get]("clientId"), t0$4 == null ? -1 : t0$4)), status: dart.toString(map[$_get]("status")), stage: dart.toString(map[$_get]("stage")), startTime: "00:00", endTime: "00:00"});
    }
    static ['_#fromMapPut#tearOff'](map) {
      return offer.Offer.fromMapPut(map);
    }
    static empty() {
      return new offer.Offer.new({offerId: -1, officeId: -1, serviceId: -1, employeeId: -1, clientId: -1, workdayId: -1, timeId: -1, status: "Null", stage: "Null", startTime: "00:00", endTime: "00:00"});
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
    let clientId = opts && 'clientId' in opts ? opts.clientId : null;
    let workdayId = opts && 'workdayId' in opts ? opts.workdayId : null;
    let timeId = opts && 'timeId' in opts ? opts.timeId : null;
    let status = opts && 'status' in opts ? opts.status : null;
    let stage = opts && 'stage' in opts ? opts.stage : null;
    let startTime = opts && 'startTime' in opts ? opts.startTime : null;
    let endTime = opts && 'endTime' in opts ? opts.endTime : null;
    this[offerId$] = offerId;
    this[officeId$] = officeId;
    this[serviceId$] = serviceId;
    this[employeeId$] = employeeId;
    this[clientId$] = clientId;
    this[workdayId$] = workdayId;
    this[timeId$] = timeId;
    this[status$] = status;
    this[stage$] = stage;
    this[startTime$] = startTime;
    this[endTime$] = endTime;
    ;
  }).prototype = offer.Offer.prototype;
  dart.addTypeTests(offer.Offer);
  dart.addTypeCaches(offer.Offer);
  dart.setStaticMethodSignature(offer.Offer, () => ['fromMap', 'fromMapPut', 'empty', 'fromJson']);
  dart.setLibraryUri(offer.Offer, I[0]);
  dart.setFieldSignature(offer.Offer, () => ({
    __proto__: dart.getFields(offer.Offer.__proto__),
    offerId: dart.fieldType(core.int),
    officeId: dart.fieldType(core.int),
    serviceId: dart.fieldType(core.int),
    employeeId: dart.fieldType(core.int),
    workdayId: dart.fieldType(core.int),
    timeId: dart.fieldType(core.int),
    clientId: dart.fieldType(core.int),
    status: dart.fieldType(core.String),
    stage: dart.fieldType(core.String),
    startTime: dart.fieldType(core.String),
    endTime: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/models/offer.dart", {
    "package:my_ticket_care/src/shared/models/offer.dart": offer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["offer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGM;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEG;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;;;;;;;;;;;;;;;mBAgBoC;;AACzC,YAAO,4CACmB,KAAf,AAAG,GAAA,QAAC,YAAD,aAAe,CAAC,iCACF,MAAhB,AAAG,GAAA,QAAC,aAAD,cAAgB,CAAC,mCACF,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,qCACF,OAAlB,AAAG,GAAA,QAAC,eAAD,eAAkB,CAAC,oCACN,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,iCACV,OAAd,AAAG,GAAA,QAAC,WAAD,eAAc,CAAC,mCACA,OAAhB,AAAG,GAAA,QAAC,aAAD,eAAgB,CAAC,oBACR,cAAd,AAAG,GAAA,QAAC,mBACQ,cAAb,AAAG,GAAA,QAAC,sCACyB,OAAd,WAAX,AAAG,GAAA,QAAC,kBAAQ,eAAD,eAAiB,2CACP,OAAZ,WAAX,AAAG,GAAA,QAAC,kBAAQ,aAAD,eAAe;IAEvC;;;;sBAE8C;;AAC5C,YAAO,4CACmB,KAAf,AAAG,GAAA,QAAC,YAAD,aAAe,CAAC,iCACF,MAAhB,AAAG,GAAA,QAAC,aAAD,cAAgB,CAAC,mCACF,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,qCACF,OAAlB,AAAG,GAAA,QAAC,eAAD,eAAkB,CAAC,oCACN,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,iCACV,OAAd,AAAG,GAAA,QAAC,WAAD,eAAc,CAAC,mCACA,OAAhB,AAAG,GAAA,QAAC,aAAD,eAAgB,CAAC,oBACR,cAAd,AAAG,GAAA,QAAC,mBACQ,cAAb,AAAG,GAAA,QAAC,sBACA,kBACF;IAEb;;;;;AAGE,YAAO,+BACI,CAAC,aACA,CAAC,cACA,CAAC,eACA,CAAC,aACH,CAAC,cACA,CAAC,WACJ,CAAC,WACD,eACD,mBACI,kBACF;IAEb;;;;oBAE8B;AAAW,YAAM,gDAAQ,AAAK,oBAAO,MAAM;IAAE;;;;;;QA7D3D;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAVA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACd","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/models/offer.dart.lib.js"}');
  // Exports:
  return {
    src__shared__models__offer: offer
  };
}));

//# sourceMappingURL=offer.dart.lib.js.map
