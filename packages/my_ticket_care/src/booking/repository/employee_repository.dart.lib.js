define(['dart_sdk', 'packages/http/src/multipart_request.dart', 'packages/my_ticket_care/src/shared/shared_constants/shared_url.dart', 'packages/my_ticket_care/src/shared/models/employee.dart'], (function load__packages__my_ticket_care__src__booking__repository__employee_repository_dart(dart_sdk, packages__http__src__multipart_request$46dart, packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart, packages__my_ticket_care__src__shared__models__employee$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__src__multipart_request$46dart.http;
  const shared_url = packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart.src__shared__shared_constants__shared_url;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  var employee_repository = Object.create(dart.library);
  var $toString = dartx.toString;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/booking/repository/employee_repository.dart"];
  employee_repository.EmployeeRepository = class EmployeeRepository extends core.Object {};
  (employee_repository.EmployeeRepository.new = function() {
    ;
  }).prototype = employee_repository.EmployeeRepository.prototype;
  dart.addTypeTests(employee_repository.EmployeeRepository);
  dart.addTypeCaches(employee_repository.EmployeeRepository);
  dart.setLibraryUri(employee_repository.EmployeeRepository, I[0]);
  employee_repository.EmployeeRepositoryHTTP = class EmployeeRepositoryHTTP extends core.Object {
    getEmployeeWithSpecialities(employeeId) {
      return async.async(employee.Employee, function* getEmployeeWithSpecialities() {
        let header = T.LinkedHashMapOfString$String().from(employee_repository.EmployeeRepositoryHTTP.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["Employeeid", employeeId[$toString]()]));
        let response = (yield http.get(core.Uri.parse(shared_url.urlManaging + "/Employee/GetEspecialities"), {headers: header}));
        let json = response.body;
        return employee.Employee.fromMapWithSpecialities(T.MapOfString$dynamic().as(dart.dsend(convert.jsonDecode(json), '_get', ["data"])));
      });
    }
    static ['_#new#tearOff']() {
      return new employee_repository.EmployeeRepositoryHTTP.new();
    }
  };
  (employee_repository.EmployeeRepositoryHTTP.new = function() {
    ;
  }).prototype = employee_repository.EmployeeRepositoryHTTP.prototype;
  dart.addTypeTests(employee_repository.EmployeeRepositoryHTTP);
  dart.addTypeCaches(employee_repository.EmployeeRepositoryHTTP);
  employee_repository.EmployeeRepositoryHTTP[dart.implements] = () => [employee_repository.EmployeeRepository];
  dart.setMethodSignature(employee_repository.EmployeeRepositoryHTTP, () => ({
    __proto__: dart.getMethods(employee_repository.EmployeeRepositoryHTTP.__proto__),
    getEmployeeWithSpecialities: dart.fnType(async.Future$(employee.Employee), [core.int])
  }));
  dart.setLibraryUri(employee_repository.EmployeeRepositoryHTTP, I[0]);
  dart.setStaticFieldSignature(employee_repository.EmployeeRepositoryHTTP, () => ['token', 'defaultHeader']);
  dart.defineLazy(employee_repository.EmployeeRepositoryHTTP, {
    /*employee_repository.EmployeeRepositoryHTTP.token*/get token() {
      return "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4uY29tIiwiZXhwIjoxNjY4NjQ0NTk4fQ.ynfM2hKL9HXvV2BLzMqZO1oSLIRodZtb0zw_puxK3pfCj-4JLpyzKEJAbWCs5pb-AQ88lGICMcLN-r1Ag0gDCA";
    },
    set token(_) {},
    /*employee_repository.EmployeeRepositoryHTTP.defaultHeader*/get defaultHeader() {
      return new (T.IdentityMapOfString$String()).from(["Content-Type", "application/json; charset=UTF-8", "token", employee_repository.EmployeeRepositoryHTTP.token]);
    },
    set defaultHeader(_) {}
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/booking/repository/employee_repository.dart", {
    "package:my_ticket_care/src/booking/repository/employee_repository.dart": employee_repository
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["employee_repository.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;EASA;;;;;gCAYmD;AAAL;AACtB,qBAAa,sCAAK;AACc,QAApD,AAAO,MAAD,UAAQ,2CAAC,cAAc,AAAW,UAAD;AAC9B,wBAAW,MAAM,SACpB,eAAQ,AAAsC,yBAA3B,yCACd,MAAM;AAGV,mBAAO,AAAS,QAAD;AAEtB,cAAgB,sEAAwC,WAAhB,mBAAW,IAAI,YAAE;MAC3D;;;;;;;;EACF;;;;;;;;;;;MArBgB,gDAAK;YACf;;;MAEuB,wDAAa;YAAG,4CACzC,gBAAgB,mCAChB,SAAS","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/repository/employee_repository.dart.lib.js"}');
  // Exports:
  return {
    src__booking__repository__employee_repository: employee_repository
  };
}));

//# sourceMappingURL=employee_repository.dart.lib.js.map
