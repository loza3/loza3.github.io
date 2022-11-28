define(['dart_sdk', 'packages/my_ticket_care/src/shared/models/employee.dart', 'packages/my_ticket_care/src/shared/models/office.dart', 'packages/my_ticket_care/src/shared/models/service.dart'], (function load__packages__my_ticket_care__src__search__services__search_type_casting_dart(dart_sdk, packages__my_ticket_care__src__shared__models__employee$46dart, packages__my_ticket_care__src__shared__models__office$46dart, packages__my_ticket_care__src__shared__models__service$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  var search_type_casting = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfEmployee: () => (T.ListOfEmployee = dart.constFn(core.List$(employee.Employee)))(),
    ListOfOffice: () => (T.ListOfOffice = dart.constFn(core.List$(office.Office)))(),
    ListOfService: () => (T.ListOfService = dart.constFn(core.List$(service.Service)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/search/services/search_type_casting.dart"];
  var dataItems = dart.privateName(search_type_casting, "SearchTypeCasting.dataItems");
  search_type_casting.SearchTypeCasting = class SearchTypeCasting extends core.Object {
    get dataItems() {
      return this[dataItems];
    }
    set dataItems(value) {
      this[dataItems] = value;
    }
    static ['_#new#tearOff'](data) {
      return new search_type_casting.SearchTypeCasting.new(data);
    }
    getEmployees() {
      return T.ListOfEmployee().as(this.dataItems[$_get](0));
    }
    getOffices() {
      return T.ListOfOffice().as(this.dataItems[$_get](1));
    }
    getServices() {
      return T.ListOfService().as(this.dataItems[$_get](2));
    }
  };
  (search_type_casting.SearchTypeCasting.new = function(data) {
    this[dataItems] = [];
    this.dataItems = core.List.as(data);
  }).prototype = search_type_casting.SearchTypeCasting.prototype;
  dart.addTypeTests(search_type_casting.SearchTypeCasting);
  dart.addTypeCaches(search_type_casting.SearchTypeCasting);
  dart.setMethodSignature(search_type_casting.SearchTypeCasting, () => ({
    __proto__: dart.getMethods(search_type_casting.SearchTypeCasting.__proto__),
    getEmployees: dart.fnType(core.List$(employee.Employee), []),
    getOffices: dart.fnType(core.List$(office.Office), []),
    getServices: dart.fnType(core.List$(service.Service), [])
  }));
  dart.setLibraryUri(search_type_casting.SearchTypeCasting, I[0]);
  dart.setFieldSignature(search_type_casting.SearchTypeCasting, () => ({
    __proto__: dart.getFields(search_type_casting.SearchTypeCasting.__proto__),
    dataItems: dart.fieldType(core.List)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/search/services/search_type_casting.dart", {
    "package:my_ticket_care/src/search/services/search_type_casting.dart": search_type_casting
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_type_casting.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAGO;;;;;;;;;;AAWH,YAAoB,uBAAb,AAAS,sBAAC;IACnB;;AAGE,YAAoB,qBAAb,AAAS,sBAAC;IACnB;;AAGE,YAAoB,sBAAb,AAAS,sBAAC;IACnB;;wDAlB0B;IAFrB,kBAAY;AAOS,IAAxB,iBAAiB,aAAL,IAAI;EAClB","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/services/search_type_casting.dart.lib.js"}');
  // Exports:
  return {
    src__search__services__search_type_casting: search_type_casting
  };
}));

//# sourceMappingURL=search_type_casting.dart.lib.js.map
