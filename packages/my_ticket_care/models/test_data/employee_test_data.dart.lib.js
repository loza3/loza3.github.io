define(['dart_sdk'], (function load__packages__my_ticket_care__models__test_data__employee_test_data_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var employee_test_data = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$Object: () => (T.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    ListOfMapOfString$String: () => (T.ListOfMapOfString$String = dart.constFn(core.List$(T.MapOfString$String())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.constMap(core.String, core.Object, ["employeeId", 0, "employeeName", "Juan Guerra Medrano", "speciality", "Dentista"]);
    },
    get C2() {
      return C[2] = dart.constMap(core.String, core.Object, ["employeeId", 0, "employeeName", "Mauricio Lopez", "speciality", "Odontologo"]);
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], T.MapOfString$Object());
    },
    get C5() {
      return C[5] = dart.constMap(core.String, core.String, ["startTime", "10:30", "endTime", "11:00"]);
    },
    get C6() {
      return C[6] = dart.constMap(core.String, core.String, ["startTime", "11:00", "endTime", "11:30"]);
    },
    get C7() {
      return C[7] = dart.constMap(core.String, core.String, ["startTime", "11:30", "endTime", "12:00"]);
    },
    get C8() {
      return C[8] = dart.constMap(core.String, core.String, ["startTime", "12:00", "endTime", "12:30"]);
    },
    get C4() {
      return C[4] = dart.constList([C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8], T.MapOfString$String());
    },
    get C10() {
      return C[10] = dart.constMap(core.String, core.String, ["startTime", "15:00", "endTime", "15:30"]);
    },
    get C11() {
      return C[11] = dart.constMap(core.String, core.String, ["startTime", "15:30", "endTime", "16:00"]);
    },
    get C12() {
      return C[12] = dart.constMap(core.String, core.String, ["startTime", "16:00", "endTime", "16:30"]);
    },
    get C9() {
      return C[9] = dart.constList([C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12], T.MapOfString$String());
    },
    get C3() {
      return C[3] = dart.constList([C[4] || CT.C4, C[9] || CT.C9], T.ListOfMapOfString$String());
    }
  }, false);
  var C = Array(13).fill(void 0);
  dart.defineLazy(employee_test_data, {
    /*employee_test_data.listadoEmployees*/get listadoEmployees() {
      return C[0] || CT.C0;
    },
    /*employee_test_data.listadoOffersByEmployee*/get listadoOffersByEmployee() {
      return C[3] || CT.C3;
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/models/test_data/employee_test_data.dart", {
    "package:my_ticket_care/models/test_data/employee_test_data.dart": employee_test_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["employee_test_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAAM,mCAAgB;;;MAahB,0CAAuB","file":"../../../../../../../../../../packages/my_ticket_care/models/test_data/employee_test_data.dart.lib.js"}');
  // Exports:
  return {
    models__test_data__employee_test_data: employee_test_data
  };
}));

//# sourceMappingURL=employee_test_data.dart.lib.js.map
