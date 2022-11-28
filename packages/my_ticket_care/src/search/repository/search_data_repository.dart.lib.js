define(['dart_sdk', 'packages/my_ticket_care/src/shared/shared_constants/shared_url.dart', 'packages/my_ticket_care/src/shared/models/employee.dart', 'packages/my_ticket_care/src/shared/models/office.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/my_ticket_care/src/shared/shared_utilities/base_repository.dart'], (function load__packages__my_ticket_care__src__search__repository__search_data_repository_dart(dart_sdk, packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart, packages__my_ticket_care__src__shared__models__employee$46dart, packages__my_ticket_care__src__shared__models__office$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_url = packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart.src__shared__shared_constants__shared_url;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const base_repository = packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart.src__shared__shared_utilities__base_repository;
  var search_data_repository = Object.create(dart.library);
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfEmployee: () => (T.ListOfEmployee = dart.constFn(core.List$(employee.Employee)))(),
    ListOfOffice: () => (T.ListOfOffice = dart.constFn(core.List$(office.Office)))(),
    ListOfService: () => (T.ListOfService = dart.constFn(core.List$(service.Service)))(),
    JSArrayOfFuture: () => (T.JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/search/repository/search_data_repository.dart"];
  search_data_repository.FetchDataRepository = class FetchDataRepository extends core.Object {};
  (search_data_repository.FetchDataRepository.new = function() {
    ;
  }).prototype = search_data_repository.FetchDataRepository.prototype;
  dart.addTypeTests(search_data_repository.FetchDataRepository);
  dart.addTypeCaches(search_data_repository.FetchDataRepository);
  dart.setLibraryUri(search_data_repository.FetchDataRepository, I[0]);
  search_data_repository.FetchDataRepositoryHTTP = class FetchDataRepositoryHTTP extends base_repository.BaseRepository {
    searchEmployees() {
      return async.async(T.ListOfEmployee(), (function* searchEmployees() {
        let response = (yield this.fetch(core.Uri.parse(shared_url.urlBooking + "Booking/getemployees"), {headers: this.defaultHeader}));
        return employee.Employee.listFromMap(core.List.as(response.data));
      }).bind(this));
    }
    searchOffices() {
      return async.async(T.ListOfOffice(), (function* searchOffices() {
        let response = (yield this.fetch(core.Uri.parse(shared_url.urlBooking + "Booking/getoffices"), {headers: this.defaultHeader}));
        return office.Office.listFromMap(core.List.as(response.data));
      }).bind(this));
    }
    searchServices() {
      return async.async(T.ListOfService(), (function* searchServices() {
        let response = (yield this.fetch(core.Uri.parse(shared_url.urlBooking + "Booking/getservices"), {headers: this.defaultHeader}));
        return service.Service.listFromMap(core.List.as(response.data));
      }).bind(this));
    }
    fetchAllData() {
      return async.async(core.List, (function* fetchAllData() {
        let futures = T.JSArrayOfFuture().of([]);
        futures[$add](this.searchEmployees());
        futures[$add](this.searchOffices());
        futures[$add](this.searchServices());
        return async.Future.wait(dart.dynamic, futures);
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new search_data_repository.FetchDataRepositoryHTTP.new();
    }
  };
  (search_data_repository.FetchDataRepositoryHTTP.new = function() {
    search_data_repository.FetchDataRepositoryHTTP.__proto__.new.call(this);
    ;
  }).prototype = search_data_repository.FetchDataRepositoryHTTP.prototype;
  dart.addTypeTests(search_data_repository.FetchDataRepositoryHTTP);
  dart.addTypeCaches(search_data_repository.FetchDataRepositoryHTTP);
  search_data_repository.FetchDataRepositoryHTTP[dart.implements] = () => [search_data_repository.FetchDataRepository];
  dart.setMethodSignature(search_data_repository.FetchDataRepositoryHTTP, () => ({
    __proto__: dart.getMethods(search_data_repository.FetchDataRepositoryHTTP.__proto__),
    searchEmployees: dart.fnType(async.Future$(core.List$(employee.Employee)), []),
    searchOffices: dart.fnType(async.Future$(core.List$(office.Office)), []),
    searchServices: dart.fnType(async.Future$(core.List$(service.Service)), []),
    fetchAllData: dart.fnType(async.Future$(core.List), [])
  }));
  dart.setLibraryUri(search_data_repository.FetchDataRepositoryHTTP, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/search/repository/search_data_repository.dart", {
    "package:my_ticket_care/src/search/repository/search_data_repository.dart": search_data_repository
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_data_repository.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAQA;;;;;;AAKwC;AAC9B,wBAAW,MAAM,WACjB,eAAS,AAAgC,wBAArB,mCACf;AAGX,cAAgB,4CAAY,AAAS,QAAD;MACtC;;;AAGkC;AAC1B,wBAAW,MAAM,WACjB,eAAS,AAA8B,wBAAnB,iCACf;AAGX,cAAc,wCAAY,AAAS,QAAD;MACpC;;;AAGoC;AAC5B,wBAAW,MAAM,WACjB,eAAS,AAA+B,wBAApB,kCACf;AAGX,cAAe,0CAAY,AAAS,QAAD;MACrC;;;AAEyB;AACV,sBAAU;AAEO,QAA9B,AAAQ,OAAD,OAAK;AACgB,QAA5B,AAAQ,OAAD,OAAK;AACiB,QAA7B,AAAQ,OAAD,OAAK;AAEZ,cAAc,iCAAK,OAAO;MAC5B;;;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/repository/search_data_repository.dart.lib.js"}');
  // Exports:
  return {
    src__search__repository__search_data_repository: search_data_repository
  };
}));

//# sourceMappingURL=search_data_repository.dart.lib.js.map
