define(['dart_sdk', 'packages/my_ticket_care/src/shared/models/office.dart', 'packages/my_ticket_care/src/shared/models/employee.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/my_ticket_care/src/shared/models/workday.dart', 'packages/my_ticket_care/src/shared/models/offer.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__src__booking__providers__booking_state_dart(dart_sdk, packages__my_ticket_care__src__shared__models__office$46dart, packages__my_ticket_care__src__shared__models__employee$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__my_ticket_care__src__shared__models__workday$46dart, packages__my_ticket_care__src__shared__models__offer$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const workday = packages__my_ticket_care__src__shared__models__workday$46dart.src__shared__models__workday;
  const offer = packages__my_ticket_care__src__shared__models__offer$46dart.src__shared__models__offer;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var booking_state = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/booking/providers/booking_state.dart"];
  var selectedOffice = dart.privateName(booking_state, "BookingStateProvider.selectedOffice");
  var selectedEmployee = dart.privateName(booking_state, "BookingStateProvider.selectedEmployee");
  var selectedService = dart.privateName(booking_state, "BookingStateProvider.selectedService");
  var selectedWorkday = dart.privateName(booking_state, "BookingStateProvider.selectedWorkday");
  var selectedOffer = dart.privateName(booking_state, "BookingStateProvider.selectedOffer");
  var selectedClientId = dart.privateName(booking_state, "BookingStateProvider.selectedClientId");
  booking_state.BookingStateProvider = class BookingStateProvider extends change_notifier.ChangeNotifier {
    get selectedOffice() {
      return this[selectedOffice];
    }
    set selectedOffice(value) {
      this[selectedOffice] = value;
    }
    get selectedEmployee() {
      return this[selectedEmployee];
    }
    set selectedEmployee(value) {
      this[selectedEmployee] = value;
    }
    get selectedService() {
      return this[selectedService];
    }
    set selectedService(value) {
      this[selectedService] = value;
    }
    get selectedWorkday() {
      return this[selectedWorkday];
    }
    set selectedWorkday(value) {
      this[selectedWorkday] = value;
    }
    get selectedOffer() {
      return this[selectedOffer];
    }
    set selectedOffer(value) {
      this[selectedOffer] = value;
    }
    get selectedClientId() {
      return this[selectedClientId];
    }
    set selectedClientId(value) {
      this[selectedClientId] = value;
    }
    setOffice(office) {
      this.selectedOffice = office;
      this.notifyListeners();
    }
    setEmployee(employee) {
      this.selectedEmployee = employee;
      this.notifyListeners();
    }
    setService(service) {
      this.selectedService = service;
      this.notifyListeners();
    }
    setWorkday(workday) {
      this.selectedWorkday = workday;
      this.notifyListeners();
    }
    setClientId(id) {
      this.selectedClientId = id;
      this.notifyListeners();
    }
    setOffer(offer) {
      this.selectedOffer = offer;
      this.notifyListeners();
    }
    static ['_#new#tearOff']() {
      return new booking_state.BookingStateProvider.new();
    }
  };
  (booking_state.BookingStateProvider.new = function() {
    this[selectedOffice] = office.Office.empty();
    this[selectedEmployee] = employee.Employee.empty();
    this[selectedService] = service.Service.empty();
    this[selectedWorkday] = workday.Workday.empty();
    this[selectedOffer] = offer.Offer.empty();
    this[selectedClientId] = -1;
    booking_state.BookingStateProvider.__proto__.new.call(this);
    ;
  }).prototype = booking_state.BookingStateProvider.prototype;
  dart.addTypeTests(booking_state.BookingStateProvider);
  dart.addTypeCaches(booking_state.BookingStateProvider);
  dart.setMethodSignature(booking_state.BookingStateProvider, () => ({
    __proto__: dart.getMethods(booking_state.BookingStateProvider.__proto__),
    setOffice: dart.fnType(dart.void, [office.Office]),
    setEmployee: dart.fnType(dart.void, [employee.Employee]),
    setService: dart.fnType(dart.void, [service.Service]),
    setWorkday: dart.fnType(dart.void, [workday.Workday]),
    setClientId: dart.fnType(dart.void, [core.int]),
    setOffer: dart.fnType(dart.void, [offer.Offer])
  }));
  dart.setLibraryUri(booking_state.BookingStateProvider, I[0]);
  dart.setFieldSignature(booking_state.BookingStateProvider, () => ({
    __proto__: dart.getFields(booking_state.BookingStateProvider.__proto__),
    selectedOffice: dart.fieldType(office.Office),
    selectedEmployee: dart.fieldType(employee.Employee),
    selectedService: dart.fieldType(service.Service),
    selectedWorkday: dart.fieldType(workday.Workday),
    selectedOffer: dart.fieldType(offer.Offer),
    selectedClientId: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/booking/providers/booking_state.dart", {
    "package:my_ticket_care/src/booking/providers/booking_state.dart": booking_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["booking_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAQS;;;;;;IACE;;;;;;IACD;;;;;;IACA;;;;;;IACF;;;;;;IACF;;;;;;cAEkB;AACG,MAAvB,sBAAiB,MAAM;AACN,MAAjB;IACF;gBAE0B;AACG,MAA3B,wBAAmB,QAAQ;AACV,MAAjB;IACF;eAEwB;AACG,MAAzB,uBAAkB,OAAO;AACR,MAAjB;IACF;eAEwB;AACG,MAAzB,uBAAkB,OAAO;AACR,MAAjB;IACF;gBAEqB;AACE,MAArB,wBAAmB,EAAE;AACJ,MAAjB;IACF;aAEoB;AACG,MAArB,qBAAgB,KAAK;AACJ,MAAjB;IACF;;;;;;IAnCO,uBAAwB;IACtB,yBAA4B;IAC7B,wBAA0B;IAC1B,wBAA0B;IAC5B,sBAAsB;IACxB,yBAAmB,CAAC;;;EA+B1B","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/providers/booking_state.dart.lib.js"}');
  // Exports:
  return {
    src__booking__providers__booking_state: booking_state
  };
}));

//# sourceMappingURL=booking_state.dart.lib.js.map
