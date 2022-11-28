define(['dart_sdk', 'packages/my_ticket_care/src/shared/models/model_state.dart'], (function load__packages__my_ticket_care__src__shared__models__employee_dart(dart_sdk, packages__my_ticket_care__src__shared__models__model_state$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model_state = packages__my_ticket_care__src__shared__models__model_state$46dart.src__shared__models__model_state;
  var employee = Object.create(dart.library);
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    dynamicToEmployee: () => (T.dynamicToEmployee = dart.constFn(dart.fnType(employee.Employee, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/shared/models/employee.dart"];
  var employeeId$ = dart.privateName(employee, "Employee.employeeId");
  var employeeState$ = dart.privateName(employee, "Employee.employeeState");
  var role$ = dart.privateName(employee, "Employee.role");
  var companyId$ = dart.privateName(employee, "Employee.companyId");
  var personName$ = dart.privateName(employee, "Employee.personName");
  var email$ = dart.privateName(employee, "Employee.email");
  var mobile$ = dart.privateName(employee, "Employee.mobile");
  var birthDate$ = dart.privateName(employee, "Employee.birthDate");
  var sex$ = dart.privateName(employee, "Employee.sex");
  var companyName$ = dart.privateName(employee, "Employee.companyName");
  var specialities$ = dart.privateName(employee, "Employee.specialities");
  employee.Employee = class Employee extends core.Object {
    get employeeId() {
      return this[employeeId$];
    }
    set employeeId(value) {
      this[employeeId$] = value;
    }
    get employeeState() {
      return this[employeeState$];
    }
    set employeeState(value) {
      this[employeeState$] = value;
    }
    get role() {
      return this[role$];
    }
    set role(value) {
      this[role$] = value;
    }
    get companyId() {
      return this[companyId$];
    }
    set companyId(value) {
      this[companyId$] = value;
    }
    get personName() {
      return this[personName$];
    }
    set personName(value) {
      this[personName$] = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      this[email$] = value;
    }
    get mobile() {
      return this[mobile$];
    }
    set mobile(value) {
      this[mobile$] = value;
    }
    get birthDate() {
      return this[birthDate$];
    }
    set birthDate(value) {
      this[birthDate$] = value;
    }
    get sex() {
      return this[sex$];
    }
    set sex(value) {
      this[sex$] = value;
    }
    get companyName() {
      return this[companyName$];
    }
    set companyName(value) {
      this[companyName$] = value;
    }
    get specialities() {
      return this[specialities$];
    }
    set specialities(value) {
      this[specialities$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let employeeId = opts && 'employeeId' in opts ? opts.employeeId : null;
      let employeeState = opts && 'employeeState' in opts ? opts.employeeState : null;
      let role = opts && 'role' in opts ? opts.role : null;
      let companyId = opts && 'companyId' in opts ? opts.companyId : null;
      let personName = opts && 'personName' in opts ? opts.personName : null;
      let email = opts && 'email' in opts ? opts.email : null;
      let mobile = opts && 'mobile' in opts ? opts.mobile : null;
      let birthDate = opts && 'birthDate' in opts ? opts.birthDate : null;
      let sex = opts && 'sex' in opts ? opts.sex : null;
      let companyName = opts && 'companyName' in opts ? opts.companyName : null;
      let specialities = opts && 'specialities' in opts ? opts.specialities : null;
      return new employee.Employee.new({employeeId: employeeId, employeeState: employeeState, role: role, companyId: companyId, personName: personName, email: email, mobile: mobile, birthDate: birthDate, sex: sex, companyName: companyName, specialities: specialities});
    }
    static fromMap(map) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let personMap = T.MapOfString$dynamic().as((t0 = map[$_get]("person"), t0 == null ? new (T.IdentityMapOfString$dynamic()).new() : t0));
      let companyMap = T.MapOfString$dynamic().as((t0$ = map[$_get]("company"), t0$ == null ? new (T.IdentityMapOfString$dynamic()).new() : t0$));
      return new employee.Employee.new({employeeId: core.int.as((t0$0 = map[$_get]("employeeId"), t0$0 == null ? -1 : t0$0)), employeeState: model_state.ModelState.values[$_get](core.int.as((t0$1 = map[$_get]("employeeState"), t0$1 == null ? 0 : t0$1))), role: core.int.as((t0$2 = map[$_get]("role"), t0$2 == null ? -1 : t0$2)), companyId: core.int.as((t0$3 = map[$_get]("companyId"), t0$3 == null ? -1 : t0$3)), personName: core.String.as((t0$4 = personMap[$_get]("personName"), t0$4 == null ? "Null" : t0$4)), email: core.String.as((t0$5 = personMap[$_get]("email"), t0$5 == null ? "Null" : t0$5)), mobile: core.String.as((t0$6 = personMap[$_get]("mobile"), t0$6 == null ? "Null" : t0$6)), birthDate: core.String.as((t0$7 = personMap[$_get]("birthDate"), t0$7 == null ? "Null" : t0$7)), sex: core.int.as((t0$8 = personMap[$_get]("sex"), t0$8 == null ? 0 : t0$8)), companyName: core.String.as((t0$9 = companyMap[$_get]("companyName"), t0$9 == null ? "Null" : t0$9))});
    }
    static ['_#fromMap#tearOff'](map) {
      return employee.Employee.fromMap(map);
    }
    static fromMapWithSpecialities(map) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8;
      return new employee.Employee.new({employeeId: core.int.as((t0 = map[$_get]("employeeId"), t0 == null ? -1 : t0)), employeeState: model_state.ModelState.values[$_get](core.int.as((t0$ = map[$_get]("employeeState"), t0$ == null ? 0 : t0$))), role: core.int.as((t0$0 = map[$_get]("role"), t0$0 == null ? -1 : t0$0)), companyId: core.int.as((t0$1 = map[$_get]("companyId"), t0$1 == null ? -1 : t0$1)), personName: core.String.as((t0$2 = map[$_get]("name"), t0$2 == null ? "Null" : t0$2)), email: core.String.as((t0$3 = map[$_get]("email"), t0$3 == null ? "Null" : t0$3)), mobile: core.String.as((t0$4 = map[$_get]("mobile"), t0$4 == null ? "Null" : t0$4)), birthDate: core.String.as((t0$5 = map[$_get]("birthDate"), t0$5 == null ? "Null" : t0$5)), sex: core.int.as((t0$6 = map[$_get]("sex"), t0$6 == null ? -1 : t0$6)), companyName: core.String.as((t0$7 = map[$_get]("companyName"), t0$7 == null ? "Null" : t0$7)), specialities: T.ListOfString().from(core.Iterable.as(dart.dsend((t0$8 = map[$_get]("especialities"), t0$8 == null ? [] : t0$8), 'map', [dart.fn(e => dart.dsend(e, '_get', ["especialityName"]), T.dynamicTodynamic())])))});
    }
    static ['_#fromMapWithSpecialities#tearOff'](map) {
      return employee.Employee.fromMapWithSpecialities(map);
    }
    static empty() {
      return new employee.Employee.new({employeeId: -1, employeeState: model_state.ModelState.active, role: -1, companyId: -1, personName: "Person", email: "Null", mobile: "Null", birthDate: "2001-01-01", sex: 0, companyName: "Null"});
    }
    static ['_#empty#tearOff']() {
      return employee.Employee.empty();
    }
    static fromJson(source) {
      return employee.Employee.fromMap(T.MapOfString$dynamic().as(convert.json.decode(source)));
    }
    static ['_#fromJson#tearOff'](source) {
      return employee.Employee.fromJson(source);
    }
    static listFromMap(data) {
      return data[$map](employee.Employee, dart.fn(e => employee.Employee.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToEmployee()))[$toList]();
    }
  };
  (employee.Employee.new = function(opts) {
    let employeeId = opts && 'employeeId' in opts ? opts.employeeId : null;
    let employeeState = opts && 'employeeState' in opts ? opts.employeeState : null;
    let role = opts && 'role' in opts ? opts.role : null;
    let companyId = opts && 'companyId' in opts ? opts.companyId : null;
    let personName = opts && 'personName' in opts ? opts.personName : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let mobile = opts && 'mobile' in opts ? opts.mobile : null;
    let birthDate = opts && 'birthDate' in opts ? opts.birthDate : null;
    let sex = opts && 'sex' in opts ? opts.sex : null;
    let companyName = opts && 'companyName' in opts ? opts.companyName : null;
    let specialities = opts && 'specialities' in opts ? opts.specialities : null;
    this[employeeId$] = employeeId;
    this[employeeState$] = employeeState;
    this[role$] = role;
    this[companyId$] = companyId;
    this[personName$] = personName;
    this[email$] = email;
    this[mobile$] = mobile;
    this[birthDate$] = birthDate;
    this[sex$] = sex;
    this[companyName$] = companyName;
    this[specialities$] = specialities;
    ;
  }).prototype = employee.Employee.prototype;
  dart.addTypeTests(employee.Employee);
  dart.addTypeCaches(employee.Employee);
  dart.setStaticMethodSignature(employee.Employee, () => ['fromMap', 'fromMapWithSpecialities', 'empty', 'fromJson', 'listFromMap']);
  dart.setLibraryUri(employee.Employee, I[0]);
  dart.setFieldSignature(employee.Employee, () => ({
    __proto__: dart.getFields(employee.Employee.__proto__),
    employeeId: dart.fieldType(core.int),
    employeeState: dart.fieldType(model_state.ModelState),
    role: dart.fieldType(core.int),
    companyId: dart.fieldType(core.int),
    personName: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    mobile: dart.fieldType(core.String),
    birthDate: dart.fieldType(core.String),
    sex: dart.fieldType(core.int),
    companyName: dart.fieldType(core.String),
    specialities: dart.fieldType(dart.nullable(core.List$(core.String)))
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/models/employee.dart", {
    "package:my_ticket_care/src/shared/models/employee.dart": employee
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["employee.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKM;;;;;;IACO;;;;;;IACP;;;;;;IACA;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACH;;;;;;IAEG;;;;;;IAEO;;;;;;;;;;;;;;;;;;;;mBAgBgC;;AACvB,kDAA0B,KAAd,AAAG,GAAA,QAAC,WAAD,aAAc;AAC7B,mDAA4B,MAAf,AAAG,GAAA,QAAC,YAAD,cAAe;AAEpD,YAAO,qDACyB,OAAlB,AAAG,GAAA,QAAC,eAAD,eAAkB,CAAC,2BACR,AAAM,kDAAsB,OAArB,AAAG,GAAA,QAAC,kBAAD,eAAqB,gCACvC,OAAZ,AAAG,GAAA,QAAC,SAAD,eAAY,CAAC,oCACM,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,wCACI,OAAxB,AAAS,SAAA,QAAC,eAAD,eAAkB,wCACb,OAAnB,AAAS,SAAA,QAAC,UAAD,eAAa,yCACD,OAApB,AAAS,SAAA,QAAC,WAAD,eAAc,4CACG,OAAvB,AAAS,SAAA,QAAC,cAAD,eAAiB,mCACf,OAAjB,AAAS,SAAA,QAAC,QAAD,eAAW,yCACc,OAA1B,AAAU,UAAA,QAAC,gBAAD,eAAmB;IAE9C;;;;mCAE8D;;AAC5D,YAAO,qDACyB,KAAlB,AAAG,GAAA,QAAC,eAAD,aAAkB,CAAC,yBACR,AAAM,kDAAsB,MAArB,AAAG,GAAA,QAAC,kBAAD,cAAqB,+BACvC,OAAZ,AAAG,GAAA,QAAC,SAAD,eAAY,CAAC,oCACM,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,wCACR,OAAZ,AAAG,GAAA,QAAC,SAAD,eAAY,wCACP,OAAb,AAAG,GAAA,QAAC,UAAD,eAAa,yCACD,OAAd,AAAG,GAAA,QAAC,WAAD,eAAc,4CACG,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,mCACf,OAAX,AAAG,GAAA,QAAC,QAAD,eAAW,CAAC,yCACY,OAAnB,AAAG,GAAA,QAAC,gBAAD,eAAmB,+BACrB,uCACiB,YAAP,OAArB,AAAG,GAAA,QAAC,kBAAD,eAAqB,oBAAQ,QAAC,KAAO,WAAD,CAAC,WAAC;IAGhD;;;;;AAGE,YAAO,wCACO,CAAC,kBACa,qCACpB,CAAC,cACI,CAAC,eACA,iBACL,gBACC,mBACG,mBACN,gBACQ;IAEjB;;;;oBAEiC;AAC7B,YAAS,sDAAQ,AAAK,oBAAO,MAAM;IAAE;;;;uBAEO;AAC9C,YAAO,AAAK,AAAgC,KAAjC,0BAAK,QAAC,KAAe,qDAAQ,CAAC;IAC3C;;;QArEgB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACT;IAVS;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACT;;EACL","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/models/employee.dart.lib.js"}');
  // Exports:
  return {
    src__shared__models__employee: employee
  };
}));

//# sourceMappingURL=employee.dart.lib.js.map
