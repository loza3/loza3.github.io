define(['dart_sdk'], (function load__packages__my_ticket_care__models__test_data__booking_test_data_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var booking_test_data = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.constMap(core.String, core.String, ["serviceName", "Corte simple", "time", "10:30AM - 12:00AM", "specialistName", "Employee", "date", "19/10/2022", "companyName", "Peluqueria", "QRlink", "https://pentestlab.files.wordpress.com/2012/04/qrcode_attack.png?w=645"]);
    },
    get C2() {
      return C[2] = dart.constMap(core.String, core.String, ["serviceName", "Medir la presión", "time", "10:30AM - 12:00AM", "specialistName", "Dra. Maria Angel", "date", "19/10/2022", "companyName", "Clinica Incor", "QRlink", "https://pentestlab.files.wordpress.com/2012/04/qrcode_attack.png?w=645"]);
    },
    get C3() {
      return C[3] = dart.constMap(core.String, core.String, ["serviceName", "Examen de sangre", "time", "15:30PM - 17:00PM", "specialistName", "Dr. Pedro Garcia", "date", "19/10/2022", "companyName", "Centro Medico San Pedro", "QRlink", "https://pentestlab.files.wordpress.com/2012/04/qrcode_attack.png?w=645"]);
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], T.MapOfString$String());
    }
  }, false);
  var C = Array(4).fill(void 0);
  dart.defineLazy(booking_test_data, {
    /*booking_test_data.listadoReservas*/get listadoReservas() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/models/test_data/booking_test_data.dart", {
    "package:my_ticket_care/models/test_data/booking_test_data.dart": booking_test_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["booking_test_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAAM,iCAAe","file":"../../../../../../../../../../packages/my_ticket_care/models/test_data/booking_test_data.dart.lib.js"}');
  // Exports:
  return {
    models__test_data__booking_test_data: booking_test_data
  };
}));

//# sourceMappingURL=booking_test_data.dart.lib.js.map
