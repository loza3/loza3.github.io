define(['dart_sdk', 'packages/my_ticket_care/models/office.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/my_ticket_care/models/backend/employee.dart', 'packages/my_ticket_care/services/service_api.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__providers__search_provider_dart(dart_sdk, packages__my_ticket_care__models__office$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__my_ticket_care__models__backend__employee$46dart, packages__my_ticket_care__services__service_api$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const office = packages__my_ticket_care__models__office$46dart.models__office;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const employee = packages__my_ticket_care__models__backend__employee$46dart.models__backend__employee;
  const service_api = packages__my_ticket_care__services__service_api$46dart.services__service_api;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var search_provider = Object.create(dart.library);
  var $toLowerCase = dartx.toLowerCase;
  var $contains = dartx.contains;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfOffice: () => (T.JSArrayOfOffice = dart.constFn(_interceptors.JSArray$(office.Office)))(),
    JSArrayOfService: () => (T.JSArrayOfService = dart.constFn(_interceptors.JSArray$(service.Service)))(),
    JSArrayOfEmployee: () => (T.JSArrayOfEmployee = dart.constFn(_interceptors.JSArray$(employee.Employee)))(),
    ServiceTobool: () => (T.ServiceTobool = dart.constFn(dart.fnType(core.bool, [service.Service])))(),
    ListOfService: () => (T.ListOfService = dart.constFn(core.List$(service.Service)))(),
    OfficeTobool: () => (T.OfficeTobool = dart.constFn(dart.fnType(core.bool, [office.Office])))(),
    ListOfOffice: () => (T.ListOfOffice = dart.constFn(core.List$(office.Office)))(),
    EmployeeTobool: () => (T.EmployeeTobool = dart.constFn(dart.fnType(core.bool, [employee.Employee])))(),
    ListOfEmployee: () => (T.ListOfEmployee = dart.constFn(core.List$(employee.Employee)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/search_provider.dart"];
  var nothingSearched = dart.privateName(search_provider, "SearchProvider.nothingSearched");
  var errorOcurred = dart.privateName(search_provider, "SearchProvider.errorOcurred");
  var noResults = dart.privateName(search_provider, "SearchProvider.noResults");
  var loading = dart.privateName(search_provider, "SearchProvider.loading");
  var __SearchProvider_officeResults = dart.privateName(search_provider, "_#SearchProvider#officeResults");
  var __SearchProvider_serviceResults = dart.privateName(search_provider, "_#SearchProvider#serviceResults");
  var __SearchProvider_employeeResults = dart.privateName(search_provider, "_#SearchProvider#employeeResults");
  search_provider.SearchProvider = class SearchProvider extends change_notifier.ChangeNotifier {
    get nothingSearched() {
      return this[nothingSearched];
    }
    set nothingSearched(value) {
      this[nothingSearched] = value;
    }
    get errorOcurred() {
      return this[errorOcurred];
    }
    set errorOcurred(value) {
      this[errorOcurred] = value;
    }
    get noResults() {
      return this[noResults];
    }
    set noResults(value) {
      this[noResults] = value;
    }
    get loading() {
      return this[loading];
    }
    set loading(value) {
      this[loading] = value;
    }
    get officeResults() {
      let t0;
      t0 = this[__SearchProvider_officeResults];
      return t0 == null ? this[__SearchProvider_officeResults] = T.JSArrayOfOffice().of([]) : t0;
    }
    set officeResults(officeResults$35param) {
      this[__SearchProvider_officeResults] = officeResults$35param;
    }
    get serviceResults() {
      let t0;
      t0 = this[__SearchProvider_serviceResults];
      return t0 == null ? this[__SearchProvider_serviceResults] = T.JSArrayOfService().of([]) : t0;
    }
    set serviceResults(serviceResults$35param) {
      this[__SearchProvider_serviceResults] = serviceResults$35param;
    }
    get employeeResults() {
      let t0;
      t0 = this[__SearchProvider_employeeResults];
      return t0 == null ? this[__SearchProvider_employeeResults] = T.JSArrayOfEmployee().of([]) : t0;
    }
    set employeeResults(employeeResults$35param) {
      this[__SearchProvider_employeeResults] = employeeResults$35param;
    }
    searchServices(query) {
      return async.async(T.ListOfService(), (function* searchServices() {
        query = query[$toLowerCase]();
        this.serviceResults = (yield service_api.ServiceAPI.searchServicesCache());
        this.serviceResults = this.serviceResults[$where](dart.fn(service => service.serviceName[$toLowerCase]()[$contains](query), T.ServiceTobool()))[$toList]();
        return this.serviceResults;
      }).bind(this));
    }
    searchOffices(query) {
      return async.async(T.ListOfOffice(), (function* searchOffices() {
        query = query[$toLowerCase]();
        this.officeResults = (yield service_api.ServiceAPI.searchOfficesCache());
        this.officeResults = this.officeResults[$where](dart.fn(office => office.officeName[$toLowerCase]()[$contains](query), T.OfficeTobool()))[$toList]();
        return this.officeResults;
      }).bind(this));
    }
    searchEmployees(query) {
      return async.async(T.ListOfEmployee(), (function* searchEmployees() {
        query = query[$toLowerCase]();
        this.employeeResults = (yield service_api.ServiceAPI.searchEmployeesCache());
        this.employeeResults = this.employeeResults[$where](dart.fn(employee => employee.personName[$toLowerCase]()[$contains](query), T.EmployeeTobool()))[$toList]();
        return this.employeeResults;
      }).bind(this));
    }
    searchOfficesByService(serviceId) {
      return async.async(T.ListOfOffice(), function* searchOfficesByService() {
        let offices = (yield service_api.ServiceAPI.searchOfficesCache());
        return offices;
      });
    }
    searchServicesByOffice(officeId) {
      return async.async(T.ListOfService(), function* searchServicesByOffice() {
        let services = (yield service_api.ServiceAPI.getServicesFromOfficeId(officeId));
        return services;
      });
    }
    searchAllResults(query) {
      return async.async(dart.void, (function* searchAllResults() {
        query = query[$toLowerCase]();
        if (query[$isEmpty]) {
          this.nothingSearched = true;
          this.notifyListeners();
          return;
        }
        this.nothingSearched = false;
        this.noResults = false;
        this.errorOcurred = false;
        this.loading = true;
        this.notifyListeners();
        try {
          this.serviceResults = (yield this.searchServices(query));
          this.officeResults = (yield this.searchOffices(query));
          this.employeeResults = (yield this.searchEmployees(query));
          this.errorOcurred = false;
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            developer.log(exception[$toString]());
            developer.log(stack.toString());
            this.errorOcurred = true;
          } else
            throw e;
        }
        this.loading = false;
        if (this.serviceResults[$isEmpty] && this.officeResults[$isEmpty] && this.employeeResults[$isEmpty]) {
          this.noResults = true;
        }
        this.notifyListeners();
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new search_provider.SearchProvider.new();
    }
  };
  (search_provider.SearchProvider.new = function() {
    this[__SearchProvider_officeResults] = null;
    this[__SearchProvider_serviceResults] = null;
    this[__SearchProvider_employeeResults] = null;
    this[nothingSearched] = true;
    this[errorOcurred] = false;
    this[noResults] = false;
    this[loading] = false;
    search_provider.SearchProvider.__proto__.new.call(this);
    ;
  }).prototype = search_provider.SearchProvider.prototype;
  dart.addTypeTests(search_provider.SearchProvider);
  dart.addTypeCaches(search_provider.SearchProvider);
  dart.setMethodSignature(search_provider.SearchProvider, () => ({
    __proto__: dart.getMethods(search_provider.SearchProvider.__proto__),
    searchServices: dart.fnType(async.Future$(core.List$(service.Service)), [core.String]),
    searchOffices: dart.fnType(async.Future$(core.List$(office.Office)), [core.String]),
    searchEmployees: dart.fnType(async.Future$(core.List$(employee.Employee)), [core.String]),
    searchOfficesByService: dart.fnType(async.Future$(core.List$(office.Office)), [core.int]),
    searchServicesByOffice: dart.fnType(async.Future$(core.List$(service.Service)), [core.int]),
    searchAllResults: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(search_provider.SearchProvider, () => ({
    __proto__: dart.getGetters(search_provider.SearchProvider.__proto__),
    officeResults: core.List$(office.Office),
    serviceResults: core.List$(service.Service),
    employeeResults: core.List$(employee.Employee)
  }));
  dart.setSetterSignature(search_provider.SearchProvider, () => ({
    __proto__: dart.getSetters(search_provider.SearchProvider.__proto__),
    officeResults: core.List$(office.Office),
    serviceResults: core.List$(service.Service),
    employeeResults: core.List$(employee.Employee)
  }));
  dart.setLibraryUri(search_provider.SearchProvider, I[0]);
  dart.setFieldSignature(search_provider.SearchProvider, () => ({
    __proto__: dart.getFields(search_provider.SearchProvider.__proto__),
    [__SearchProvider_officeResults]: dart.fieldType(dart.nullable(core.List$(office.Office))),
    [__SearchProvider_serviceResults]: dart.fieldType(dart.nullable(core.List$(service.Service))),
    [__SearchProvider_employeeResults]: dart.fieldType(dart.nullable(core.List$(employee.Employee))),
    nothingSearched: dart.fieldType(core.bool),
    errorOcurred: dart.fieldType(core.bool),
    noResults: dart.fieldType(core.bool),
    loading: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/my_ticket_care/providers/search_provider.dart", {
    "package:my_ticket_care/providers/search_provider.dart": search_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBO;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;AAPa;iEAAgB;IAAE;sBAAlB;;IAAkB;;;AACjB;kEAAiB;IAAE;uBAAnB;;IAAmB;;;AAClB;mEAAkB;IAAE;wBAApB;;IAAoB;mBAOI;AAAR;AACP,QAA3B,QAAQ,AAAM,KAAD;AAC0C,QAAvD,uBAAiB,MAAiB;AAGrB,QAFb,sBAAiB,AACZ,AACA,4BADM,QAAC,WAAY,AAAQ,AAAY,AAAc,OAA3B,wCAAoC,KAAK;AAExE,cAAO;MACT;;kBAE0C;AAAR;AACL,QAA3B,QAAQ,AAAM,KAAD;AACwC,QAArD,sBAAgB,MAAiB;AAGpB,QAFb,qBAAgB,AACX,AACA,2BADM,QAAC,UAAW,AAAO,AAAW,AAAc,MAA1B,uCAAmC,KAAK;AAErE,cAAO;MACT;;oBAE8C;AAAR;AACT,QAA3B,QAAQ,AAAM,KAAD;AAC4C,QAAzD,wBAAkB,MAAiB;AAGtB,QAFb,uBAAkB,AACb,AACA,6BADM,QAAC,YAAa,AAAS,AAAW,AAAc,QAA1B,uCAAmC,KAAK;AAEzE,cAAO;MACT;;2BAEgD;AAAL;AAC5B,uBAAU,MAAiB;AAExC,cAAO,QAAO;MAChB;;2BAEiD;AAAL;AAC5B,wBAAW,MAAiB,+CAAwB,QAAQ;AAC1E,cAAO,SAAQ;MACjB;;qBAE6B;AAAR;AACQ,QAA3B,QAAQ,AAAM,KAAD;AAEb,YAAI,AAAM,KAAD;AACe,UAAtB,uBAAkB;AACD,UAAjB;AACA;;AAGqB,QAAvB,uBAAkB;AACD,QAAjB,iBAAY;AACQ,QAApB,oBAAe;AACD,QAAd,eAAU;AACO,QAAjB;AAEA;AAC8C,UAA5C,uBAAiB,MAAM,oBAAe,KAAK;AACD,UAA1C,sBAAgB,MAAM,mBAAc,KAAK;AACK,UAA9C,wBAAkB,MAAM,qBAAgB,KAAK;AACzB,UAApB,oBAAe;;cACR;cAAW;AAAlB;AAEyB,YAAzB,cAAI,AAAU,SAAD;AACQ,YAArB,cAAI,AAAM,KAAD;AACU,YAAnB,oBAAe;;;;AAGF,QAAf,eAAU;AAEV,YAAI,AAAe,iCACf,AAAc,gCACd,AAAgB;AACF,UAAhB,iBAAY;;AAEG,QAAjB;MACF;;;;;;;2CAlFkB;4CACC;6CACC;IAEf,wBAAkB;IAClB,qBAAe;IACf,kBAAY;IACZ,gBAAU;;;EA4EjB","file":"../../../../../../../../../packages/my_ticket_care/providers/search_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__search_provider: search_provider
  };
}));

//# sourceMappingURL=search_provider.dart.lib.js.map
