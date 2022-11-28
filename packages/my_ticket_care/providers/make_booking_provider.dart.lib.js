define(['dart_sdk', 'packages/my_ticket_care/models/backend/employee.dart', 'packages/my_ticket_care/models/offer.dart', 'packages/my_ticket_care/models/backend/person.dart', 'packages/my_ticket_care/models/workday.dart', 'packages/flutter/src/material/date_picker.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/my_ticket_care/models/office.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/flutter/src/widgets/title.dart'], (function load__packages__my_ticket_care__providers__make_booking_provider_dart(dart_sdk, packages__my_ticket_care__models__backend__employee$46dart, packages__my_ticket_care__models__offer$46dart, packages__my_ticket_care__models__backend__person$46dart, packages__my_ticket_care__models__workday$46dart, packages__flutter__src__material__date_picker$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__my_ticket_care__models__office$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__flutter__src__widgets__title$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const employee = packages__my_ticket_care__models__backend__employee$46dart.models__backend__employee;
  const offer = packages__my_ticket_care__models__offer$46dart.models__offer;
  const person = packages__my_ticket_care__models__backend__person$46dart.models__backend__person;
  const workday = packages__my_ticket_care__models__workday$46dart.models__workday;
  const date_picker = packages__flutter__src__material__date_picker$46dart.src__material__date_picker;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const office = packages__my_ticket_care__models__office$46dart.models__office;
  const service = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  var make_booking_provider = Object.create(dart.library);
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $map = dartx.map;
  var $toSet = dartx.toSet;
  var $first = dartx.first;
  var $firstWhere = dartx.firstWhere;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    WorkdayTobool: () => (T.WorkdayTobool = dart.constFn(dart.fnType(core.bool, [workday.Workday])))(),
    WorkdayToString: () => (T.WorkdayToString = dart.constFn(dart.fnType(core.String, [workday.Workday])))(),
    DateTimeTobool: () => (T.DateTimeTobool = dart.constFn(dart.fnType(core.bool, [core.DateTime])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/make_booking_provider.dart"];
  var dateWasSelected = dart.privateName(make_booking_provider, "MakeBookingProvider.dateWasSelected");
  var selectedDate = dart.privateName(make_booking_provider, "MakeBookingProvider.selectedDate");
  var horario = dart.privateName(make_booking_provider, "MakeBookingProvider.horario");
  var encargado = dart.privateName(make_booking_provider, "MakeBookingProvider.encargado");
  var employeeName = dart.privateName(make_booking_provider, "MakeBookingProvider.employeeName");
  var startTime = dart.privateName(make_booking_provider, "MakeBookingProvider.startTime");
  var endTime = dart.privateName(make_booking_provider, "MakeBookingProvider.endTime");
  var employeeIndex = dart.privateName(make_booking_provider, "MakeBookingProvider.employeeIndex");
  var offerIndex = dart.privateName(make_booking_provider, "MakeBookingProvider.offerIndex");
  var __MakeBookingProvider_selectedOffice = dart.privateName(make_booking_provider, "_#MakeBookingProvider#selectedOffice");
  var __MakeBookingProvider_companyId = dart.privateName(make_booking_provider, "_#MakeBookingProvider#companyId");
  var __MakeBookingProvider_selectedService = dart.privateName(make_booking_provider, "_#MakeBookingProvider#selectedService");
  var __MakeBookingProvider_selectedEmployee = dart.privateName(make_booking_provider, "_#MakeBookingProvider#selectedEmployee");
  var __MakeBookingProvider_selectedWorkday = dart.privateName(make_booking_provider, "_#MakeBookingProvider#selectedWorkday");
  var __MakeBookingProvider_selectedOffer = dart.privateName(make_booking_provider, "_#MakeBookingProvider#selectedOffer");
  var __MakeBookingProvider_user = dart.privateName(make_booking_provider, "_#MakeBookingProvider#user");
  make_booking_provider.MakeBookingProvider = class MakeBookingProvider extends change_notifier.ChangeNotifier {
    get dateWasSelected() {
      return this[dateWasSelected];
    }
    set dateWasSelected(value) {
      this[dateWasSelected] = value;
    }
    get selectedDate() {
      return this[selectedDate];
    }
    set selectedDate(value) {
      this[selectedDate] = value;
    }
    get horario() {
      return this[horario];
    }
    set horario(value) {
      this[horario] = value;
    }
    get encargado() {
      return this[encargado];
    }
    set encargado(value) {
      this[encargado] = value;
    }
    get employeeName() {
      return this[employeeName];
    }
    set employeeName(value) {
      this[employeeName] = value;
    }
    get startTime() {
      return this[startTime];
    }
    set startTime(value) {
      this[startTime] = value;
    }
    get endTime() {
      return this[endTime];
    }
    set endTime(value) {
      this[endTime] = value;
    }
    get employeeIndex() {
      return this[employeeIndex];
    }
    set employeeIndex(value) {
      this[employeeIndex] = value;
    }
    get offerIndex() {
      return this[offerIndex];
    }
    set offerIndex(value) {
      this[offerIndex] = value;
    }
    get selectedOffice() {
      let t0;
      t0 = this[__MakeBookingProvider_selectedOffice];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("selectedOffice")) : t0;
    }
    set selectedOffice(selectedOffice$35param) {
      this[__MakeBookingProvider_selectedOffice] = selectedOffice$35param;
    }
    get companyId() {
      let t0;
      t0 = this[__MakeBookingProvider_companyId];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("companyId")) : t0;
    }
    set companyId(companyId$35param) {
      this[__MakeBookingProvider_companyId] = companyId$35param;
    }
    get selectedService() {
      let t0;
      t0 = this[__MakeBookingProvider_selectedService];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("selectedService")) : t0;
    }
    set selectedService(selectedService$35param) {
      this[__MakeBookingProvider_selectedService] = selectedService$35param;
    }
    get selectedEmployee() {
      let t0;
      t0 = this[__MakeBookingProvider_selectedEmployee];
      return t0 == null ? this[__MakeBookingProvider_selectedEmployee] = employee.Employee.empty() : t0;
    }
    set selectedEmployee(selectedEmployee$35param) {
      this[__MakeBookingProvider_selectedEmployee] = selectedEmployee$35param;
    }
    get selectedWorkday() {
      let t0;
      t0 = this[__MakeBookingProvider_selectedWorkday];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("selectedWorkday")) : t0;
    }
    set selectedWorkday(selectedWorkday$35param) {
      this[__MakeBookingProvider_selectedWorkday] = selectedWorkday$35param;
    }
    get selectedOffer() {
      let t0;
      t0 = this[__MakeBookingProvider_selectedOffer];
      return t0 == null ? this[__MakeBookingProvider_selectedOffer] = offer.Offer.empty() : t0;
    }
    set selectedOffer(selectedOffer$35param) {
      this[__MakeBookingProvider_selectedOffer] = selectedOffer$35param;
    }
    get user() {
      let t0;
      t0 = this[__MakeBookingProvider_user];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("user")) : t0;
    }
    set user(user$35param) {
      this[__MakeBookingProvider_user] = user$35param;
    }
    setUser(user) {
      user = new person.Person.new({personName: "Sergio Loza", birthDate: new core.DateTime.new(2002, 1, 18)});
    }
    get selectedDateString() {
      return dart.str(this.selectedDate.day) + "/" + dart.str(this.selectedDate.month) + "/" + dart.str(this.selectedDate.year);
    }
    setOffice(office) {
      this.selectedOffice = office;
    }
    setService(service) {
      this.selectedService = service;
    }
    setEmployee(employee) {
      this.selectedEmployee = employee;
    }
    setNewDate(newDate) {
      this.selectedDate = newDate;
    }
    showDatePickerProvider(context, workdays) {
      return async.async(dart.void, (function* showDatePickerProvider() {
        workdays = workdays[$where](dart.fn(day => day.isWorkday, T.WorkdayTobool()))[$toList]();
        let availableDates = workdays[$map](core.String, dart.fn(e => e.date.toString(), T.WorkdayToString()))[$toSet]();
        let picked = (yield date_picker.showDatePicker({context: context, selectableDayPredicate: dart.fn(date => {
            let dateString = dart.str(date) + "Z";
            return availableDates.contains(dateString);
          }, T.DateTimeTobool()), initialDate: workdays[$first].date, firstDate: new core.DateTime.new(2022, 10), lastDate: new core.DateTime.new(2101)}));
        if (picked != null && !dart.equals(picked, this.selectedDate)) {
          this.selectedDate = picked;
          this.selectedWorkday = workdays[$firstWhere](dart.fn(day => day.date.toString() === dart.str(picked) + "Z", T.WorkdayTobool()));
          this.dateWasSelected = true;
          this.notifyListeners();
        }
      }).bind(this));
    }
    setEmployeeName(name) {
      this.employeeName = name;
      this.notifyListeners();
    }
    setStartTime(time) {
      this.startTime = time;
      this.notifyListeners();
    }
    setEndTime(time) {
      this.endTime = time;
      this.notifyListeners();
    }
    setOffer(offer) {
      this.selectedOffer = offer;
      this.notifyListeners();
    }
    static ['_#new#tearOff']() {
      return new make_booking_provider.MakeBookingProvider.new();
    }
  };
  (make_booking_provider.MakeBookingProvider.new = function() {
    this[__MakeBookingProvider_selectedOffice] = null;
    this[__MakeBookingProvider_companyId] = null;
    this[__MakeBookingProvider_selectedService] = null;
    this[__MakeBookingProvider_selectedEmployee] = null;
    this[__MakeBookingProvider_selectedWorkday] = null;
    this[__MakeBookingProvider_selectedOffer] = null;
    this[__MakeBookingProvider_user] = null;
    this[dateWasSelected] = false;
    this[selectedDate] = new core.DateTime.now();
    this[horario] = "";
    this[encargado] = "";
    this[employeeName] = "";
    this[startTime] = "";
    this[endTime] = "";
    this[employeeIndex] = -1;
    this[offerIndex] = -1;
    make_booking_provider.MakeBookingProvider.__proto__.new.call(this);
    ;
  }).prototype = make_booking_provider.MakeBookingProvider.prototype;
  dart.addTypeTests(make_booking_provider.MakeBookingProvider);
  dart.addTypeCaches(make_booking_provider.MakeBookingProvider);
  dart.setMethodSignature(make_booking_provider.MakeBookingProvider, () => ({
    __proto__: dart.getMethods(make_booking_provider.MakeBookingProvider.__proto__),
    setUser: dart.fnType(dart.void, [person.Person]),
    setOffice: dart.fnType(dart.void, [office.Office]),
    setService: dart.fnType(dart.void, [service.Service]),
    setEmployee: dart.fnType(dart.void, [employee.Employee]),
    setNewDate: dart.fnType(dart.void, [core.DateTime]),
    showDatePickerProvider: dart.fnType(async.Future$(dart.void), [framework.BuildContext, core.List$(workday.Workday)]),
    setEmployeeName: dart.fnType(dart.void, [core.String]),
    setStartTime: dart.fnType(dart.void, [core.String]),
    setEndTime: dart.fnType(dart.void, [core.String]),
    setOffer: dart.fnType(dart.void, [offer.Offer])
  }));
  dart.setGetterSignature(make_booking_provider.MakeBookingProvider, () => ({
    __proto__: dart.getGetters(make_booking_provider.MakeBookingProvider.__proto__),
    selectedOffice: office.Office,
    companyId: core.int,
    selectedService: service.Service,
    selectedEmployee: employee.Employee,
    selectedWorkday: workday.Workday,
    selectedOffer: offer.Offer,
    user: person.Person,
    selectedDateString: core.String
  }));
  dart.setSetterSignature(make_booking_provider.MakeBookingProvider, () => ({
    __proto__: dart.getSetters(make_booking_provider.MakeBookingProvider.__proto__),
    selectedOffice: office.Office,
    companyId: core.int,
    selectedService: service.Service,
    selectedEmployee: employee.Employee,
    selectedWorkday: workday.Workday,
    selectedOffer: offer.Offer,
    user: person.Person
  }));
  dart.setLibraryUri(make_booking_provider.MakeBookingProvider, I[0]);
  dart.setFieldSignature(make_booking_provider.MakeBookingProvider, () => ({
    __proto__: dart.getFields(make_booking_provider.MakeBookingProvider.__proto__),
    [__MakeBookingProvider_selectedOffice]: dart.fieldType(dart.nullable(office.Office)),
    [__MakeBookingProvider_companyId]: dart.fieldType(dart.nullable(core.int)),
    [__MakeBookingProvider_selectedService]: dart.fieldType(dart.nullable(service.Service)),
    [__MakeBookingProvider_selectedEmployee]: dart.fieldType(dart.nullable(employee.Employee)),
    [__MakeBookingProvider_selectedWorkday]: dart.fieldType(dart.nullable(workday.Workday)),
    [__MakeBookingProvider_selectedOffer]: dart.fieldType(dart.nullable(offer.Offer)),
    [__MakeBookingProvider_user]: dart.fieldType(dart.nullable(person.Person)),
    dateWasSelected: dart.fieldType(core.bool),
    selectedDate: dart.fieldType(core.DateTime),
    horario: dart.fieldType(core.String),
    encargado: dart.fieldType(core.String),
    employeeName: dart.fieldType(core.String),
    startTime: dart.fieldType(core.String),
    endTime: dart.fieldType(core.String),
    employeeIndex: dart.fieldType(core.int),
    offerIndex: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/my_ticket_care/providers/make_booking_provider.dart", {
    "package:my_ticket_care/providers/make_booking_provider.dart": make_booking_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["make_booking_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYO;;;;;;IAMI;;;;;;IAgDF;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IAEH;;;;;;IACA;;;;;;;;AAtEQ;;IAAc;uBAAd;;IAAc;;;AACjB;;IAAS;kBAAT;;IAAS;;;AACL;;IAAe;wBAAf;;IAAe;;;AACd;yEAA4B;IAAO;yBAAnC;;IAAmC;;;AACpC;;IAAe;wBAAf;;IAAe;;;AACjB;sEAAsB;IAAO;sBAA7B;;IAA6B;;;AAC5B;;IAAI;aAAJ;;IAAI;YAII;AACwD,MAA1E,OAAO,mCAAmB,0BAA0B,sBAAS,MAAM,GAAG;IACxE;;AAKE,YAAuE,UAA7D,AAAa,yBAAI,eAAG,AAAa,2BAAM,eAAG,AAAa;IACnE;cAEsB;AACG,MAAvB,sBAAiB,MAAM;IACzB;eAEwB;AACG,MAAzB,uBAAkB,OAAO;IAC3B;gBAE0B;AACG,MAA3B,wBAAmB,QAAQ;IAC7B;eAEyB;AACD,MAAtB,oBAAe,OAAO;IACxB;2BAGiB,SAAuB;AADL;AAEyB,QAA1D,WAAW,AAAS,AAA8B,QAA/B,SAAO,QAAC,OAAQ,AAAI,GAAD;AAE1B,6BAAiB,AAAS,AAA8B,QAA/B,oBAAK,QAAC,KAAM,AAAE,AAAK,CAAN;AAClC,sBAAS,MAAM,qCAClB,OAAO,0BACQ,QAAC;AAChB,6BAAuB,SAAP,IAAI,IAAC;AAE5B,kBAAO,AAAe,eAAD,UAAU,UAAU;+CAE9B,AAAS,AAAM,QAAP,0BACV,sBAAS,MAAM,eAChB,sBAAS;AAEvB,YAAI,MAAM,yBAAY,MAAM,EAAI;AACT,UAArB,oBAAe,MAAM;AAGgD,UADrE,uBACI,AAAS,QAAD,cAAY,QAAC,OAAQ,AAAI,AAAK,AAAW,GAAjB,qBAAgC,SAAT,MAAM,IAAC;AAC5C,UAAtB,uBAAkB;AACD,UAAjB;;MAEJ;;oBAW4B;AACP,MAAnB,oBAAe,IAAI;AACF,MAAjB;IACF;iBAEyB;AACP,MAAhB,iBAAY,IAAI;AACC,MAAjB;IACF;eAEuB;AACP,MAAd,eAAU,IAAI;AACG,MAAjB;IACF;aAEoB;AACG,MAArB,qBAAgB,KAAK;AACJ,MAAjB;IACF;;;;;;iDAzFY;4CACH;kDACI;mDACC;kDACD;gDACF;uCACC;IAEP,wBAAkB;IAMd,qBAAwB;IAgD1B,gBAAU;IACV,kBAAY;IAEZ,qBAAe;IACf,kBAAY;IACZ,gBAAU;IAEb,sBAAgB,CAAC;IACjB,mBAAa,CAAC;;;EAoBpB","file":"../../../../../../../../../packages/my_ticket_care/providers/make_booking_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__make_booking_provider: make_booking_provider
  };
}));

//# sourceMappingURL=make_booking_provider.dart.lib.js.map
