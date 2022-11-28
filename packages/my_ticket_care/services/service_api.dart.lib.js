define(['dart_sdk', 'packages/my_ticket_care/services/cache_manager.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/my_ticket_care/models/office.dart', 'packages/my_ticket_care/models/backend/employee.dart', 'packages/http/src/multipart_request.dart', 'packages/my_ticket_care/models/workday.dart', 'packages/my_ticket_care/models/offer.dart'], (function load__packages__my_ticket_care__services__service_api_dart(dart_sdk, packages__my_ticket_care__services__cache_manager$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__my_ticket_care__models__office$46dart, packages__my_ticket_care__models__backend__employee$46dart, packages__http__src__multipart_request$46dart, packages__my_ticket_care__models__workday$46dart, packages__my_ticket_care__models__offer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cache_manager = packages__my_ticket_care__services__cache_manager$46dart.services__cache_manager;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const office$ = packages__my_ticket_care__models__office$46dart.models__office;
  const employee = packages__my_ticket_care__models__backend__employee$46dart.models__backend__employee;
  const http = packages__http__src__multipart_request$46dart.http;
  const workday = packages__my_ticket_care__models__workday$46dart.models__workday;
  const offer = packages__my_ticket_care__models__offer$46dart.models__offer;
  var service_api = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $where = dartx.where;
  var $toString = dartx.toString;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    dynamicToService: () => (T.dynamicToService = dart.constFn(dart.fnType(service.Service, [dart.dynamic])))(),
    ListOfService: () => (T.ListOfService = dart.constFn(core.List$(service.Service)))(),
    dynamicToOffice: () => (T.dynamicToOffice = dart.constFn(dart.fnType(office$.Office, [dart.dynamic])))(),
    ListOfOffice: () => (T.ListOfOffice = dart.constFn(core.List$(office$.Office)))(),
    dynamicToEmployee: () => (T.dynamicToEmployee = dart.constFn(dart.fnType(employee.Employee, [dart.dynamic])))(),
    ListOfEmployee: () => (T.ListOfEmployee = dart.constFn(core.List$(employee.Employee)))(),
    dynamicToWorkday: () => (T.dynamicToWorkday = dart.constFn(dart.fnType(workday.Workday, [dart.dynamic])))(),
    WorkdayTobool: () => (T.WorkdayTobool = dart.constFn(dart.fnType(core.bool, [workday.Workday])))(),
    ListOfWorkday: () => (T.ListOfWorkday = dart.constFn(core.List$(workday.Workday)))(),
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    dynamicToOffer: () => (T.dynamicToOffer = dart.constFn(dart.fnType(offer.Offer, [dart.dynamic])))(),
    JSArrayOfOffer: () => (T.JSArrayOfOffer = dart.constFn(_interceptors.JSArray$(offer.Offer)))(),
    ListOfOffer: () => (T.ListOfOffer = dart.constFn(core.List$(offer.Offer)))(),
    FutureOrOfMap: () => (T.FutureOrOfMap = dart.constFn(async.FutureOr$(core.Map)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/services/service_api.dart"];
  service_api.ServiceAPI = class ServiceAPI extends core.Object {
    static searchServicesCache() {
      return async.async(T.ListOfService(), function* searchServicesCache() {
        let response = (yield cache_manager.CacheManager.new().getRequest({url: service_api.ServiceAPI.baseBookingURL + "getservices", headers: service_api.ServiceAPI.defaultHeader}));
        let servicesJsonList = core.List.as(dart.dsend(convert.jsonDecode(response), '_get', ["data"]));
        let services = servicesJsonList[$map](service.Service, dart.fn(e => service.Service.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToService()))[$toList]();
        return services;
      });
    }
    static searchOfficesCache() {
      return async.async(T.ListOfOffice(), function* searchOfficesCache() {
        let response = (yield cache_manager.CacheManager.new().getRequest({url: service_api.ServiceAPI.baseBookingURL + "getoffices", headers: service_api.ServiceAPI.defaultHeader}));
        let officesJsonList = core.List.as(dart.dsend(convert.jsonDecode(response), '_get', ["data"]));
        let offices = officesJsonList[$map](office$.Office, dart.fn(e => office$.Office.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToOffice()))[$toList]();
        return offices;
      });
    }
    static searchEmployeesCache() {
      return async.async(T.ListOfEmployee(), function* searchEmployeesCache() {
        let response = (yield cache_manager.CacheManager.new().getRequest({url: service_api.ServiceAPI.baseBookingURL + "getemployees", headers: service_api.ServiceAPI.defaultHeader}));
        let employeesJsonList = core.List.as(dart.dsend(convert.jsonDecode(response), '_get', ["data"]));
        let employees = employeesJsonList[$map](employee.Employee, dart.fn(e => employee.Employee.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToEmployee()))[$toList]();
        return employees;
      });
    }
    static getWorkdaysFromOfficeId(officeId) {
      return async.async(T.ListOfWorkday(), function* getWorkdaysFromOfficeId() {
        let response = (yield http.get(core.Uri.parse("https://myticketappservice.azurewebsites.net/api/WorkDay"), {headers: service_api.ServiceAPI.defaultHeader}));
        let json = response.body;
        let workdaysJsonList = core.List.as(convert.jsonDecode(json));
        let workdays = workdaysJsonList[$map](workday.Workday, dart.fn(e => workday.Workday.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToWorkday()))[$toList]();
        return workdays[$where](dart.fn(workday => workday.officeId === officeId, T.WorkdayTobool()))[$toList]();
      });
    }
    static getServicesFromOfficeId(officeId) {
      return async.async(T.ListOfService(), function* getServicesFromOfficeId() {
        let header = T.LinkedHashMapOfString$String().from(service_api.ServiceAPI.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["OfficeId", officeId[$toString]()]));
        let response = (yield http.get(core.Uri.parse("https://myticketmanagingservice.azurewebsites.net/api/Office/GetServices"), {headers: header}));
        let json = response.body;
        let servicesJsonList = core.List.as(dart.dsend(dart.dsend(convert.jsonDecode(json), '_get', ["data"]), '_get', ["services"]));
        let services = servicesJsonList[$map](service.Service, dart.fn(e => service.Service.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToService()))[$toList]();
        return services;
      });
    }
    static getOfficesFromServiceId(serviceId) {
      return async.async(T.ListOfOffice(), function* getOfficesFromServiceId() {
        let header = T.LinkedHashMapOfString$String().from(service_api.ServiceAPI.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["ServiceId", serviceId[$toString]()]));
        let response = (yield http.get(core.Uri.parse("https://myticketmanagingservice.azurewebsites.net/api/Service/GetOffices"), {headers: header}));
        let json = response.body;
        let officesJsonList = core.List.as(dart.dsend(dart.dsend(convert.jsonDecode(json), '_get', ["data"]), '_get', ["offices"]));
        for (let office of officesJsonList) {
          let companyInfo = (yield service_api.ServiceAPI.getCompanyById(core.int.as(dart.dsend(office, '_get', ["companyId"]))));
          dart.dsend(office, '_set', ["company", companyInfo]);
        }
        let offices = officesJsonList[$map](office$.Office, dart.fn(e => office$.Office.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToOffice()))[$toList]();
        return offices;
      });
    }
    static getServicesFromEmployeeId(employeeId) {
      return async.async(T.ListOfService(), function* getServicesFromEmployeeId() {
        let header = T.LinkedHashMapOfString$String().from(service_api.ServiceAPI.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["EmployeeId", employeeId[$toString]()]));
        let response = (yield http.get(core.Uri.parse("https://myticketmanagingservice.azurewebsites.net/api/Employee/GetServices"), {headers: header}));
        let json = response.body;
        let servicesJsonList = core.List.as(dart.dsend(dart.dsend(convert.jsonDecode(json), '_get', ["data"]), '_get', ["services"]));
        let services = servicesJsonList[$map](service.Service, dart.fn(e => service.Service.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToService()))[$toList]();
        return services;
      });
    }
    static getOffers(serviceId, officeId, workdayId) {
      return async.async(T.ListOfOffer(), function* getOffers() {
        let header = T.LinkedHashMapOfString$String().from(service_api.ServiceAPI.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["ServiceId", serviceId[$toString]()]));
        header[$addAll](new (T.IdentityMapOfString$String()).from(["OfficeId", officeId[$toString]()]));
        header[$addAll](new (T.IdentityMapOfString$String()).from(["WorkDayId", workdayId[$toString]()]));
        let response = (yield http.get(core.Uri.parse(service_api.ServiceAPI.baseBookingURL + "/getoffersbyofficeserviceworkdayid"), {headers: header}));
        let json = response.body;
        try {
          let offersJsonList = core.List.as(dart.dsend(convert.jsonDecode(json), '_get', ["data"]));
          let offers = offersJsonList[$map](offer.Offer, dart.fn(e => offer.Offer.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToOffer()))[$toList]();
          return offers;
        } catch (e) {
          let error = dart.getThrown(e);
          if (core.Object.is(error)) {
            return T.JSArrayOfOffer().of([]);
          } else
            throw e;
        }
      });
    }
    static getCompanyById(companyId) {
      return async.async(core.Map, function* getCompanyById() {
        let header = T.LinkedHashMapOfString$String().from(service_api.ServiceAPI.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["CompanyId", companyId[$toString]()]));
        let response = (yield http.get(core.Uri.parse(service_api.ServiceAPI.baseBookingURL + "/Company/getbycompanyid"), {headers: header}));
        let json = response.body;
        return T.FutureOrOfMap().as(dart.dsend(convert.jsonDecode(json), '_get', ["data"]));
      });
    }
    static getEmployeeById(employeeId) {
      return async.async(employee.Employee, function* getEmployeeById() {
        let header = T.LinkedHashMapOfString$String().from(service_api.ServiceAPI.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["Employeeid", employeeId[$toString]()]));
        let response = (yield http.get(core.Uri.parse(service_api.ServiceAPI.baseManagingURL + "/Employee/GetEspecialities"), {headers: header}));
        let json = response.body;
        return employee.Employee.fromMapWithSpecialities(T.MapOfString$dynamic().as(dart.dsend(convert.jsonDecode(json), '_get', ["data"])));
      });
    }
    static ['_#new#tearOff']() {
      return new service_api.ServiceAPI.new();
    }
  };
  (service_api.ServiceAPI.new = function() {
    ;
  }).prototype = service_api.ServiceAPI.prototype;
  dart.addTypeTests(service_api.ServiceAPI);
  dart.addTypeCaches(service_api.ServiceAPI);
  dart.setStaticMethodSignature(service_api.ServiceAPI, () => ['searchServicesCache', 'searchOfficesCache', 'searchEmployeesCache', 'getWorkdaysFromOfficeId', 'getServicesFromOfficeId', 'getOfficesFromServiceId', 'getServicesFromEmployeeId', 'getOffers', 'getCompanyById', 'getEmployeeById']);
  dart.setLibraryUri(service_api.ServiceAPI, I[0]);
  dart.setStaticFieldSignature(service_api.ServiceAPI, () => ['baseBookingURL', 'baseManagingURL', 'token', 'defaultHeader']);
  dart.defineLazy(service_api.ServiceAPI, {
    /*service_api.ServiceAPI.baseBookingURL*/get baseBookingURL() {
      return "https://myticketbookingservice.azurewebsites.net/api/Booking/";
    },
    set baseBookingURL(_) {},
    /*service_api.ServiceAPI.baseManagingURL*/get baseManagingURL() {
      return "https://myticketmanagingservice.azurewebsites.net/api/";
    },
    set baseManagingURL(_) {},
    /*service_api.ServiceAPI.token*/get token() {
      return "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4uY29tIiwiZXhwIjoxNjY4NjQ0NTk4fQ.ynfM2hKL9HXvV2BLzMqZO1oSLIRodZtb0zw_puxK3pfCj-4JLpyzKEJAbWCs5pb-AQ88lGICMcLN-r1Ag0gDCA";
    },
    set token(_) {},
    /*service_api.ServiceAPI.defaultHeader*/get defaultHeader() {
      return new (T.IdentityMapOfString$String()).from(["Content-Type", "application/json; charset=UTF-8", "token", service_api.ServiceAPI.token]);
    },
    set defaultHeader(_) {}
  }, false);
  dart.trackLibraries("packages/my_ticket_care/services/service_api.dart", {
    "package:my_ticket_care/services/service_api.dart": service_api
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["service_api.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../packages/my_ticket_care/services/service_api.dart.lib.js"}');
  // Exports:
  return {
    services__service_api: service_api
  };
}));

//# sourceMappingURL=service_api.dart.lib.js.map
