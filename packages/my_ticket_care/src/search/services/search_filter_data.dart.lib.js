define(['dart_sdk', 'packages/my_ticket_care/src/shared/models/office.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/my_ticket_care/src/shared/models/employee.dart'], (function load__packages__my_ticket_care__src__search__services__search_filter_data_dart(dart_sdk, packages__my_ticket_care__src__shared__models__office$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__my_ticket_care__src__shared__models__employee$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  var search_filter_data = Object.create(dart.library);
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $toLowerCase = dartx.toLowerCase;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    OfficeTobool: () => (T.OfficeTobool = dart.constFn(dart.fnType(core.bool, [office.Office])))(),
    ServiceTobool: () => (T.ServiceTobool = dart.constFn(dart.fnType(core.bool, [service.Service])))(),
    EmployeeTobool: () => (T.EmployeeTobool = dart.constFn(dart.fnType(core.bool, [employee.Employee])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/search/services/search_filter_data.dart"];
  search_filter_data.SearchFilterData = class SearchFilterData extends core.Object {
    static officeByName(data, query) {
      return data[$where](dart.fn(o => search_filter_data._contained(o.officeName, query), T.OfficeTobool()))[$toList]();
    }
    static serviceByName(data, query) {
      return data[$where](dart.fn(o => search_filter_data._contained(o.serviceName, query), T.ServiceTobool()))[$toList]();
    }
    static employeeByName(data, query) {
      return data[$where](dart.fn(o => search_filter_data._contained(o.personName, query), T.EmployeeTobool()))[$toList]();
    }
    static ['_#new#tearOff']() {
      return new search_filter_data.SearchFilterData.new();
    }
  };
  (search_filter_data.SearchFilterData.new = function() {
    ;
  }).prototype = search_filter_data.SearchFilterData.prototype;
  dart.addTypeTests(search_filter_data.SearchFilterData);
  dart.addTypeCaches(search_filter_data.SearchFilterData);
  dart.setStaticMethodSignature(search_filter_data.SearchFilterData, () => ['officeByName', 'serviceByName', 'employeeByName']);
  dart.setLibraryUri(search_filter_data.SearchFilterData, I[0]);
  search_filter_data._contained = function _contained(a, b) {
    return a[$toLowerCase]()[$contains](b[$toLowerCase]());
  };
  dart.trackLibraries("packages/my_ticket_care/src/search/services/search_filter_data.dart", {
    "package:my_ticket_care/src/search/services/search_filter_data.dart": search_filter_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_filter_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;wBAOgD,MAAa;AACzD,YAAO,AAAK,AAA8C,KAA/C,SAAO,QAAC,KAAM,8BAAW,AAAE,CAAD,aAAa,KAAK;IACzD;yBAEiD,MAAa;AAC5D,YAAO,AAAK,AAA+C,KAAhD,SAAO,QAAC,KAAM,8BAAW,AAAE,CAAD,cAAc,KAAK;IAC1D;0BAEoD,MAAa;AAC/D,YAAO,AAAK,AAA8C,KAA/C,SAAO,QAAC,KAAM,8BAAW,AAAE,CAAD,aAAa,KAAK;IACzD;;;;;;;EACF;;;;;sDAhBuB,GAAU;AAC/B,UAAO,AAAE,AAAc,EAAf,4BAAwB,AAAE,CAAD;EACnC","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/services/search_filter_data.dart.lib.js"}');
  // Exports:
  return {
    src__search__services__search_filter_data: search_filter_data
  };
}));

//# sourceMappingURL=search_filter_data.dart.lib.js.map
