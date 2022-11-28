define(['dart_sdk', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/shared/models/employee.dart', 'packages/my_ticket_care/src/booking/repository/employee_repository.dart', 'packages/my_ticket_care/src/shared/models/workday.dart', 'packages/my_ticket_care/src/booking/repository/booking_repository.dart', 'packages/my_ticket_care/src/shared/models/offer.dart', 'packages/my_ticket_care/src/booking/repository/client_subscription_repository.dart'], (function load__packages__my_ticket_care__src__booking__providers__fetch_booking_data_dart(dart_sdk, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__shared__models__employee$46dart, packages__my_ticket_care__src__booking__repository__employee_repository$46dart, packages__my_ticket_care__src__shared__models__workday$46dart, packages__my_ticket_care__src__booking__repository__booking_repository$46dart, packages__my_ticket_care__src__shared__models__offer$46dart, packages__my_ticket_care__src__booking__repository__client_subscription_repository$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const future_provider = packages__riverpod__src__value_provider$46dart.src__future_provider;
  const state_provider = packages__riverpod__src__value_provider$46dart.src__state_provider;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  const employee_repository = packages__my_ticket_care__src__booking__repository__employee_repository$46dart.src__booking__repository__employee_repository;
  const workday = packages__my_ticket_care__src__shared__models__workday$46dart.src__shared__models__workday;
  const booking_repository = packages__my_ticket_care__src__booking__repository__booking_repository$46dart.src__booking__repository__booking_repository;
  const offer = packages__my_ticket_care__src__shared__models__offer$46dart.src__shared__models__offer;
  const client_subscription_repository = packages__my_ticket_care__src__booking__repository__client_subscription_repository$46dart.src__booking__repository__client_subscription_repository;
  var fetch_booking_data = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfEmployee: () => (T.FutureOfEmployee = dart.constFn(async.Future$(employee.Employee)))(),
    FutureProviderRefOfEmployee: () => (T.FutureProviderRefOfEmployee = dart.constFn(future_provider.FutureProviderRef$(employee.Employee)))(),
    FutureProviderRefOfEmployeeAndintToFutureOfEmployee: () => (T.FutureProviderRefOfEmployeeAndintToFutureOfEmployee = dart.constFn(dart.fnType(T.FutureOfEmployee(), [T.FutureProviderRefOfEmployee(), core.int])))(),
    ListOfWorkday: () => (T.ListOfWorkday = dart.constFn(core.List$(workday.Workday)))(),
    FutureOfListOfWorkday: () => (T.FutureOfListOfWorkday = dart.constFn(async.Future$(T.ListOfWorkday())))(),
    FutureProviderRefOfListOfWorkday: () => (T.FutureProviderRefOfListOfWorkday = dart.constFn(future_provider.FutureProviderRef$(T.ListOfWorkday())))(),
    FutureProviderRefOfListOfWorkdayAndintToFutureOfListOfWorkday: () => (T.FutureProviderRefOfListOfWorkdayAndintToFutureOfListOfWorkday = dart.constFn(dart.fnType(T.FutureOfListOfWorkday(), [T.FutureProviderRefOfListOfWorkday(), core.int])))(),
    ListOfOffer: () => (T.ListOfOffer = dart.constFn(core.List$(offer.Offer)))(),
    JSArrayOfOffer: () => (T.JSArrayOfOffer = dart.constFn(_interceptors.JSArray$(offer.Offer)))(),
    FutureOfListOfOffer: () => (T.FutureOfListOfOffer = dart.constFn(async.Future$(T.ListOfOffer())))(),
    FutureProviderRefOfListOfOffer: () => (T.FutureProviderRefOfListOfOffer = dart.constFn(future_provider.FutureProviderRef$(T.ListOfOffer())))(),
    FutureProviderRefOfListOfOfferAndOfferParametersToFutureOfListOfOffer: () => (T.FutureProviderRefOfListOfOfferAndOfferParametersToFutureOfListOfOffer = dart.constFn(dart.fnType(T.FutureOfListOfOffer(), [T.FutureProviderRefOfListOfOffer(), fetch_booking_data.OfferParameters])))(),
    StateProviderOfint: () => (T.StateProviderOfint = dart.constFn(state_provider.StateProvider$(core.int)))(),
    StateProviderRefOfint: () => (T.StateProviderRefOfint = dart.constFn(state_provider.StateProviderRef$(core.int)))(),
    StateProviderRefOfintToint: () => (T.StateProviderRefOfintToint = dart.constFn(dart.fnType(core.int, [T.StateProviderRefOfint()])))(),
    FutureOfint: () => (T.FutureOfint = dart.constFn(async.Future$(core.int)))(),
    FutureProviderRefOfint: () => (T.FutureProviderRefOfint = dart.constFn(future_provider.FutureProviderRef$(core.int)))(),
    FutureProviderRefOfintAndSubscribeParameterToFutureOfint: () => (T.FutureProviderRefOfintAndSubscribeParameterToFutureOfint = dart.constFn(dart.fnType(T.FutureOfint(), [T.FutureProviderRefOfint(), fetch_booking_data.SubscribeParameter])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/booking/providers/fetch_booking_data.dart"];
  var officeId$ = dart.privateName(fetch_booking_data, "OfferParameters.officeId");
  var serviceId$ = dart.privateName(fetch_booking_data, "OfferParameters.serviceId");
  var workdayId$ = dart.privateName(fetch_booking_data, "OfferParameters.workdayId");
  fetch_booking_data.OfferParameters = class OfferParameters extends core.Object {
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
    get workdayId() {
      return this[workdayId$];
    }
    set workdayId(value) {
      this[workdayId$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let officeId = opts && 'officeId' in opts ? opts.officeId : null;
      let serviceId = opts && 'serviceId' in opts ? opts.serviceId : null;
      let workdayId = opts && 'workdayId' in opts ? opts.workdayId : null;
      return new fetch_booking_data.OfferParameters.new({officeId: officeId, serviceId: serviceId, workdayId: workdayId});
    }
    get hashCode() {
      return core.Object.hash(this.officeId, this.serviceId, this.workdayId);
    }
    _equals(other) {
      if (other == null) return false;
      return fetch_booking_data.OfferParameters.is(other) && other[$runtimeType]._equals(this[$runtimeType]) && other.officeId === this.officeId && other.serviceId === this.serviceId && other.workdayId === this.workdayId;
    }
  };
  (fetch_booking_data.OfferParameters.new = function(opts) {
    let officeId = opts && 'officeId' in opts ? opts.officeId : null;
    let serviceId = opts && 'serviceId' in opts ? opts.serviceId : null;
    let workdayId = opts && 'workdayId' in opts ? opts.workdayId : null;
    this[officeId$] = officeId;
    this[serviceId$] = serviceId;
    this[workdayId$] = workdayId;
    ;
  }).prototype = fetch_booking_data.OfferParameters.prototype;
  dart.addTypeTests(fetch_booking_data.OfferParameters);
  dart.addTypeCaches(fetch_booking_data.OfferParameters);
  dart.setLibraryUri(fetch_booking_data.OfferParameters, I[0]);
  dart.setFieldSignature(fetch_booking_data.OfferParameters, () => ({
    __proto__: dart.getFields(fetch_booking_data.OfferParameters.__proto__),
    officeId: dart.fieldType(core.int),
    serviceId: dart.fieldType(core.int),
    workdayId: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(fetch_booking_data.OfferParameters, ['_equals']);
  dart.defineExtensionAccessors(fetch_booking_data.OfferParameters, ['hashCode']);
  var personId$ = dart.privateName(fetch_booking_data, "SubscribeParameter.personId");
  var companyId$ = dart.privateName(fetch_booking_data, "SubscribeParameter.companyId");
  fetch_booking_data.SubscribeParameter = class SubscribeParameter extends core.Object {
    get personId() {
      return this[personId$];
    }
    set personId(value) {
      this[personId$] = value;
    }
    get companyId() {
      return this[companyId$];
    }
    set companyId(value) {
      this[companyId$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let personId = opts && 'personId' in opts ? opts.personId : null;
      let companyId = opts && 'companyId' in opts ? opts.companyId : null;
      return new fetch_booking_data.SubscribeParameter.new({personId: personId, companyId: companyId});
    }
    get hashCode() {
      return core.Object.hash(this.personId, this.companyId);
    }
    _equals(other) {
      if (other == null) return false;
      return fetch_booking_data.SubscribeParameter.is(other) && other[$runtimeType]._equals(this[$runtimeType]) && other.personId === this.personId && other.companyId === this.companyId;
    }
  };
  (fetch_booking_data.SubscribeParameter.new = function(opts) {
    let personId = opts && 'personId' in opts ? opts.personId : null;
    let companyId = opts && 'companyId' in opts ? opts.companyId : null;
    this[personId$] = personId;
    this[companyId$] = companyId;
    ;
  }).prototype = fetch_booking_data.SubscribeParameter.prototype;
  dart.addTypeTests(fetch_booking_data.SubscribeParameter);
  dart.addTypeCaches(fetch_booking_data.SubscribeParameter);
  dart.setLibraryUri(fetch_booking_data.SubscribeParameter, I[0]);
  dart.setFieldSignature(fetch_booking_data.SubscribeParameter, () => ({
    __proto__: dart.getFields(fetch_booking_data.SubscribeParameter.__proto__),
    personId: dart.fieldType(core.int),
    companyId: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(fetch_booking_data.SubscribeParameter, ['_equals']);
  dart.defineExtensionAccessors(fetch_booking_data.SubscribeParameter, ['hashCode']);
  dart.defineLazy(fetch_booking_data, {
    /*fetch_booking_data.fetchEmployeeProvider*/get fetchEmployeeProvider() {
      return future_provider.FutureProvider.family.call(employee.Employee, core.int, dart.fn((ref, employeeId) => async.async(employee.Employee, function*() {
        let api = new employee_repository.EmployeeRepositoryHTTP.new();
        let employee = (yield api.getEmployeeWithSpecialities(employeeId));
        return employee;
      }), T.FutureProviderRefOfEmployeeAndintToFutureOfEmployee()));
    },
    /*fetch_booking_data.fetchWorkdaysProvider*/get fetchWorkdaysProvider() {
      return future_provider.FutureProvider.family.call(T.ListOfWorkday(), core.int, dart.fn((ref, officeId) => async.async(T.ListOfWorkday(), function*() {
        let workdays = (yield new booking_repository.BookingRepositoryHTTP.new().getOfficeWorkdays(officeId));
        return workdays;
      }), T.FutureProviderRefOfListOfWorkdayAndintToFutureOfListOfWorkday()));
    },
    /*fetch_booking_data.fetchOffersProvider*/get fetchOffersProvider() {
      return future_provider.FutureProvider.family.call(T.ListOfOffer(), fetch_booking_data.OfferParameters, dart.fn((ref, parameters) => async.async(T.ListOfOffer(), function*() {
        let serviceId = parameters.serviceId;
        let officeId = parameters.officeId;
        let workdayId = parameters.workdayId;
        if (workdayId === -1) {
          return T.JSArrayOfOffer().of([offer.Offer.empty()]);
        }
        let offers = (yield new booking_repository.BookingRepositoryHTTP.new().getAvailableOffers(officeId, serviceId, workdayId));
        return offers;
      }), T.FutureProviderRefOfListOfOfferAndOfferParametersToFutureOfListOfOffer()));
    },
    /*fetch_booking_data.clientIdProvider*/get clientIdProvider() {
      return new (T.StateProviderOfint()).new(dart.fn(ref => -1, T.StateProviderRefOfintToint()));
    },
    /*fetch_booking_data.fetchIsSubscribedProvider*/get fetchIsSubscribedProvider() {
      return future_provider.FutureProvider.family.call(core.int, fetch_booking_data.SubscribeParameter, dart.fn((ref, parameters) => async.async(core.int, function*() {
        let personId = parameters.personId;
        let companyId = parameters.companyId;
        let maybeClientId = ref.watch(core.int, fetch_booking_data.clientIdProvider);
        if (maybeClientId !== -1) return maybeClientId;
        let api = new client_subscription_repository.SubscriptionRepositoryHTTP.new();
        let clientId = (yield api.isSusbcribed(personId, companyId));
        return clientId;
      }), T.FutureProviderRefOfintAndSubscribeParameterToFutureOfint()));
    },
    /*fetch_booking_data.fetchSubscribePersonProvider*/get fetchSubscribePersonProvider() {
      return future_provider.FutureProvider.family.call(core.int, fetch_booking_data.SubscribeParameter, dart.fn((ref, parameters) => async.async(core.int, function*() {
        let personId = parameters.personId;
        let companyId = parameters.companyId;
        let api = new client_subscription_repository.SubscriptionRepositoryHTTP.new();
        let clientId = (yield api.subscribePerson(personId, companyId));
        return clientId;
      }), T.FutureProviderRefOfintAndSubscribeParameterToFutureOfint()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/booking/providers/fetch_booking_data.dart", {
    "package:my_ticket_care/src/booking/providers/fetch_booking_data.dart": fetch_booking_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fetch_booking_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2BM;;;;;;IACA;;;;;;IACA;;;;;;;;;;;;;AASgB,YAAO,kBAAK,eAAU,gBAAW;IAAU;YAGvC;;AACtB,YAAa,AAGoB,uCAH1B,KAAK,KACR,AAAM,AAAY,KAAb,uBAAgB,uBACrB,AAAM,AAAS,KAAV,cAAa,iBAClB,AAAM,AAAU,KAAX,eAAc,kBACnB,AAAM,AAAU,KAAX,eAAc;IACzB;;;QAfgB;QACA;QACA;IAFA;IACA;IACA;;EACd;;;;;;;;;;;;;;;IA+BE;;;;;;IACA;;;;;;;;;;;;AAQgB,YAAO,kBAAK,eAAU;IAAU;YAG5B;;AACtB,YAAa,AAEkB,0CAFxB,KAAK,KACR,AAAM,AAAY,KAAb,uBAAgB,uBACrB,AAAM,AAAS,KAAV,cAAa,iBAClB,AAAM,AAAU,KAAX,eAAc;IACzB;;;QAbgB;QACA;IADA;IACA;;EACd;;;;;;;;;;;;MAhEE,wCAAqB;YACR,AAAM,yEAAgB,SAAC,KAAK;AACvC,kBAAM;AACN,wBAAW,MAAM,AAAI,GAAD,6BAA6B,UAAU;AAEjE,cAAO,SAAQ;MAChB;;MAGK,wCAAqB;YACR,AAAM,yEAAqB,SAAC,KAAK;AAC5C,wBAAW,MAAM,AAAwB,qEAAkB,QAAQ;AAEzE,cAAO,SAAQ;MAChB;;MA4BK,sCAAmB;YAAkB,AAAM,iGAC7C,SAAC,KAAK;AACJ,wBAAY,AAAW,UAAD;AACtB,uBAAW,AAAW,UAAD;AACrB,wBAAY,AAAW,UAAD;AAE1B,YAAI,AAAU,SAAD,KAAI,CAAC;AAChB,gBAAO,wBAAO;;AAEV,sBAAS,MAAM,AAChB,sEAAmB,QAAQ,EAAE,SAAS,EAAE,SAAS;AAEtD,cAAO,OAAM;MACd;;MAuBK,mCAAgB;YAAG,kCAAmB,QAAC,OAAQ,CAAC;;MAEhD,4CAAyB;YACZ,AAAM,6FACvB,SAAC,KAAK;AACA,uBAAW,AAAW,UAAD;AACrB,wBAAY,AAAW,UAAD;AAEpB,4BAAgB,AAAI,GAAD,iBAAO;AAChC,YAAI,aAAa,KAAI,CAAC,GAAG,MAAO,cAAa;AAEvC,kBAAM;AACN,wBAAW,MAAM,AAAI,GAAD,cAAc,QAAQ,EAAE,SAAS;AAE3D,cAAO,SAAQ;MAChB;;MAGG,+CAA4B;YACf,AAAM,6FACvB,SAAC,KAAK;AACA,uBAAW,AAAW,UAAD;AACrB,wBAAY,AAAW,UAAD;AAEpB,kBAAM;AACN,wBAAW,MAAM,AAAI,GAAD,iBAAiB,QAAQ,EAAE,SAAS;AAE9D,cAAO,SAAQ;MAChB","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/providers/fetch_booking_data.dart.lib.js"}');
  // Exports:
  return {
    src__booking__providers__fetch_booking_data: fetch_booking_data
  };
}));

//# sourceMappingURL=fetch_booking_data.dart.lib.js.map
