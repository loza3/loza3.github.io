define(['dart_sdk', 'packages/http/src/multipart_request.dart', 'packages/my_ticket_care/src/shared/shared_constants/shared_url.dart', 'packages/my_ticket_care/src/shared/models/workday.dart', 'packages/my_ticket_care/src/shared/models/offer.dart', 'packages/my_ticket_care/src/shared/shared_utilities/base_repository.dart'], (function load__packages__my_ticket_care__src__booking__repository__booking_repository_dart(dart_sdk, packages__http__src__multipart_request$46dart, packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart, packages__my_ticket_care__src__shared__models__workday$46dart, packages__my_ticket_care__src__shared__models__offer$46dart, packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const developer = dart_sdk.developer;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__src__multipart_request$46dart.http;
  const shared_url = packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart.src__shared__shared_constants__shared_url;
  const workday = packages__my_ticket_care__src__shared__models__workday$46dart.src__shared__models__workday;
  const offer = packages__my_ticket_care__src__shared__models__offer$46dart.src__shared__models__offer;
  const base_repository = packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart.src__shared__shared_utilities__base_repository;
  var booking_repository = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $where = dartx.where;
  var $toString = dartx.toString;
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    dynamicToWorkday: () => (T.dynamicToWorkday = dart.constFn(dart.fnType(workday.Workday, [dart.dynamic])))(),
    WorkdayTobool: () => (T.WorkdayTobool = dart.constFn(dart.fnType(core.bool, [workday.Workday])))(),
    ListOfWorkday: () => (T.ListOfWorkday = dart.constFn(core.List$(workday.Workday)))(),
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    JSArrayOfOffer: () => (T.JSArrayOfOffer = dart.constFn(_interceptors.JSArray$(offer.Offer)))(),
    dynamicToOffer: () => (T.dynamicToOffer = dart.constFn(dart.fnType(offer.Offer, [dart.dynamic])))(),
    ListOfOffer: () => (T.ListOfOffer = dart.constFn(core.List$(offer.Offer)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/booking/repository/booking_repository.dart"];
  booking_repository.BookingRepository = class BookingRepository extends core.Object {};
  (booking_repository.BookingRepository.new = function() {
    ;
  }).prototype = booking_repository.BookingRepository.prototype;
  dart.addTypeTests(booking_repository.BookingRepository);
  dart.addTypeCaches(booking_repository.BookingRepository);
  dart.setLibraryUri(booking_repository.BookingRepository, I[0]);
  booking_repository.BookingRepositoryHTTP = class BookingRepositoryHTTP extends base_repository.BaseRepository {
    getOfficeWorkdays(officeId) {
      return async.async(T.ListOfWorkday(), (function* getOfficeWorkdays() {
        developer.log("getOfficeWorkdays called");
        let response = (yield http.get(core.Uri.parse(shared_url.urlMyTicket + "WorkDay"), {headers: this.defaultHeader}));
        let workdaysJson = core.List.as(convert.jsonDecode(response.body));
        let workdays = workdaysJson[$map](workday.Workday, dart.fn(e => workday.Workday.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToWorkday()))[$toList]();
        workdays = workdays[$where](dart.fn(day => day.officeId === officeId, T.WorkdayTobool()))[$toList]();
        return workdays;
      }).bind(this));
    }
    getAvailableOffers(officeId, serviceId, workdayId) {
      return async.async(T.ListOfOffer(), (function* getAvailableOffers() {
        developer.log("getoffersbyofficeserviceworkdayid called");
        let header = T.LinkedHashMapOfString$String().from(this.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["ServiceId", serviceId[$toString]()]));
        header[$addAll](new (T.IdentityMapOfString$String()).from(["OfficeId", officeId[$toString]()]));
        header[$addAll](new (T.IdentityMapOfString$String()).from(["WorkDayId", workdayId[$toString]()]));
        let response = (yield http.get(core.Uri.parse(shared_url.urlBooking + "/Booking/getoffersbyofficeserviceworkdayid"), {headers: header}));
        let jsonMap = core.Map.as(convert.jsonDecode(response.body));
        if (dart.equals(jsonMap[$_get]("status"), 110)) {
          return T.JSArrayOfOffer().of([]);
        }
        let offersJsonList = core.List.as(jsonMap[$_get]("data"));
        let offers = offersJsonList[$map](offer.Offer, dart.fn(e => offer.Offer.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToOffer()))[$toList]();
        return offers;
      }).bind(this));
    }
    reserveOffer(newOffer) {
      return async.async(offer.Offer, (function* reserveOffer() {
        developer.log("reserveOffer called");
        let header = T.LinkedHashMapOfString$String().from(this.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["Offerid", newOffer.offerId[$toString]()]));
        let body = new (T.IdentityMapOfString$dynamic()).from(["officeId", newOffer.officeId[$toString](), "employeeId", newOffer.employeeId[$toString](), "clientId", newOffer.clientId[$toString](), "serviceId", newOffer.serviceId[$toString](), "timeId", newOffer.timeId[$toString](), "workDayId", newOffer.workdayId[$toString](), "status", 0, "detailClient", "string", "detailCompany", "string", "rateService", 0.0, "rateCustomer", 0.0, "stage", 0]);
        let bodyJson = convert.jsonEncode(body);
        let response = (yield http.put(core.Uri.parse(shared_url.urlManaging + "Offer"), {headers: header, body: bodyJson}));
        let json = response.body;
        return offer.Offer.fromMapPut(T.MapOfString$dynamic().as(dart.dsend(convert.jsonDecode(json), '_get', ["data"])));
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new booking_repository.BookingRepositoryHTTP.new();
    }
  };
  (booking_repository.BookingRepositoryHTTP.new = function() {
    booking_repository.BookingRepositoryHTTP.__proto__.new.call(this);
    ;
  }).prototype = booking_repository.BookingRepositoryHTTP.prototype;
  dart.addTypeTests(booking_repository.BookingRepositoryHTTP);
  dart.addTypeCaches(booking_repository.BookingRepositoryHTTP);
  booking_repository.BookingRepositoryHTTP[dart.implements] = () => [booking_repository.BookingRepository];
  dart.setMethodSignature(booking_repository.BookingRepositoryHTTP, () => ({
    __proto__: dart.getMethods(booking_repository.BookingRepositoryHTTP.__proto__),
    getOfficeWorkdays: dart.fnType(async.Future$(core.List$(workday.Workday)), [core.int]),
    getAvailableOffers: dart.fnType(async.Future$(core.List$(offer.Offer)), [core.int, core.int, core.int]),
    reserveOffer: dart.fnType(async.Future$(offer.Offer), [offer.Offer])
  }));
  dart.setLibraryUri(booking_repository.BookingRepositoryHTTP, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/repository/booking_repository.dart", {
    "package:my_ticket_care/src/booking/repository/booking_repository.dart": booking_repository
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["booking_repository.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAgBA;;;;;sBAK8C;AAAL;AACN,QAA/B,cAAI;AACK,wBAAW,MAAM,SACpB,eAAS,AAAoB,yBAAR,sBAChB;AAGN,2BAAyC,aAA1B,mBAAW,AAAS,QAAD;AACzB,uBACV,AAAa,AAA+B,YAAhC,wBAAK,QAAC,KAAc,mDAAQ,CAAC;AAEwB,QAArE,WAAW,AAAS,AAAyC,QAA1C,SAAO,QAAC,OAAQ,AAAI,AAAS,GAAV,cAAa,QAAQ;AAC3D,cAAO,SAAQ;MACjB;;uBAIQ,UAAc,WAAe;AADC;AAEW,QAA/C,cAAI;AACgB,qBAAa,sCAAK;AACY,QAAlD,AAAO,MAAD,UAAQ,2CAAC,aAAa,AAAU,SAAD;AACW,QAAhD,AAAO,MAAD,UAAQ,2CAAC,YAAY,AAAS,QAAD;AACe,QAAlD,AAAO,MAAD,UAAQ,2CAAC,aAAa,AAAU,SAAD;AAE5B,wBAAW,MAAM,SACpB,eAAQ,AAAqD,wBAA3C,yDACb,MAAM;AAGb,kCAAU,mBAAW,AAAS,QAAD;AAEjC,YAAsB,YAAlB,AAAO,OAAA,QAAC,WAAa;AACvB,gBAAO;;AAEJ,6BAAiC,aAAhB,AAAO,OAAA,QAAC;AAClB,qBAAS,AAAe,AAA6B,cAA9B,oBAAK,QAAC,KAAY,+CAAQ,CAAC;AAC9D,cAAO,OAAM;MACf;;iBAGiC;AAAP;AACE,QAA1B,cAAI;AACgB,qBAAa,sCAAK;AACiB,QAAvD,AAAO,MAAD,UAAQ,2CAAC,WAAW,AAAS,AAAQ,QAAT;AAGb,mBAAO,4CAC1B,YAAY,AAAS,AAAS,QAAV,wBACpB,cAAc,AAAS,AAAW,QAAZ,0BACtB,YAAY,AAAS,AAAS,QAAV,wBACpB,aAAa,AAAS,AAAU,QAAX,yBACrB,UAAU,AAAS,AAAO,QAAR,sBAClB,aAAa,AAAS,AAAU,QAAX,yBACrB,UAAU,GACV,gBAAgB,UAChB,iBAAiB,UACjB,eAAe,KACf,gBAAgB,KAChB,SAAS;AAGL,uBAAW,mBAAW,IAAI;AAEvB,wBAAW,MAAM,SACpB,eAAS,AAAkB,yBAAN,oBAChB,MAAM,QACT,QAAQ;AAGT,mBAAO,AAAS,QAAD;AACtB,cAAa,mDAA2B,WAAhB,mBAAW,IAAI,YAAE;MAC3C;;;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/repository/booking_repository.dart.lib.js"}');
  // Exports:
  return {
    src__booking__repository__booking_repository: booking_repository
  };
}));

//# sourceMappingURL=booking_repository.dart.lib.js.map
