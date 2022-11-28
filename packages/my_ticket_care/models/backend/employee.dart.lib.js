define(['dart_sdk', 'packages/my_ticket_care/models/model_state.dart'], (function load__packages__my_ticket_care__models__backend__employee_dart(dart_sdk, packages__my_ticket_care__models__model_state$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model_state = packages__my_ticket_care__models__model_state$46dart.models__model_state;
  var employee = Object.create(dart.library);
  var models = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  var $map = dartx.map;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], core.String);
    }
  }, false);
  var C = [void 0];
  var I = ["package:my_ticket_care/models/backend/employee.dart"];
  var specialities$ = dart.privateName(employee, "Employee.specialities");
  var __Employee_employeeId = dart.privateName(employee, "_#Employee#employeeId");
  var __Employee_employeeState = dart.privateName(employee, "_#Employee#employeeState");
  var __Employee_role = dart.privateName(employee, "_#Employee#role");
  var __Employee_companyId = dart.privateName(employee, "_#Employee#companyId");
  var __Employee_personName = dart.privateName(employee, "_#Employee#personName");
  var __Employee_email = dart.privateName(employee, "_#Employee#email");
  var __Employee_mobile = dart.privateName(employee, "_#Employee#mobile");
  var __Employee_birthDate = dart.privateName(employee, "_#Employee#birthDate");
  var __Employee_sex = dart.privateName(employee, "_#Employee#sex");
  var __Employee_companyName = dart.privateName(employee, "_#Employee#companyName");
  employee.Employee = class Employee extends core.Object {
    get specialities() {
      return this[specialities$];
    }
    set specialities(value) {
      this[specialities$] = value;
    }
    get employeeId() {
      let t0;
      t0 = this[__Employee_employeeId];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("employeeId")) : t0;
    }
    set employeeId(employeeId$35param) {
      this[__Employee_employeeId] = employeeId$35param;
    }
    get employeeState() {
      let t0;
      t0 = this[__Employee_employeeState];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("employeeState")) : t0;
    }
    set employeeState(employeeState$35param) {
      this[__Employee_employeeState] = employeeState$35param;
    }
    get role() {
      let t0;
      t0 = this[__Employee_role];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("role")) : t0;
    }
    set role(role$35param) {
      this[__Employee_role] = role$35param;
    }
    get companyId() {
      let t0;
      t0 = this[__Employee_companyId];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("companyId")) : t0;
    }
    set companyId(companyId$35param) {
      this[__Employee_companyId] = companyId$35param;
    }
    get personName() {
      let t0;
      t0 = this[__Employee_personName];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("personName")) : t0;
    }
    set personName(personName$35param) {
      this[__Employee_personName] = personName$35param;
    }
    get email() {
      let t0;
      t0 = this[__Employee_email];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("email")) : t0;
    }
    set email(email$35param) {
      this[__Employee_email] = email$35param;
    }
    get mobile() {
      let t0;
      t0 = this[__Employee_mobile];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("mobile")) : t0;
    }
    set mobile(mobile$35param) {
      this[__Employee_mobile] = mobile$35param;
    }
    get birthDate() {
      let t0;
      t0 = this[__Employee_birthDate];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("birthDate")) : t0;
    }
    set birthDate(birthDate$35param) {
      this[__Employee_birthDate] = birthDate$35param;
    }
    get sex() {
      let t0;
      t0 = this[__Employee_sex];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("sex")) : t0;
    }
    set sex(sex$35param) {
      this[__Employee_sex] = sex$35param;
    }
    get companyName() {
      let t0;
      t0 = this[__Employee_companyName];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("companyName")) : t0;
    }
    set companyName(companyName$35param) {
      this[__Employee_companyName] = companyName$35param;
    }
    static ['_#new#tearOff'](employeeId, employeeState, role, companyId, personName, email, mobile, birthDate, sex, companyName, opts) {
      let specialities = opts && 'specialities' in opts ? opts.specialities : C[0] || CT.C0;
      return new employee.Employee.new(employeeId, employeeState, role, companyId, personName, email, mobile, birthDate, sex, companyName, {specialities: specialities});
    }
    toMap() {
      let result = new (T.IdentityMapOfString$dynamic()).new();
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["employeeId", this.employeeId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["employeeState", this.employeeState.index]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["role", this.role]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["companyId", this.companyId]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["personName", this.personName]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["email", this.email]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["mobile", this.mobile]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["birthDate", this.birthDate]));
      result[$addAll](new (T.IdentityMapOfString$dynamic()).from(["sex", this.sex]));
      return result;
    }
    static fromMap(map) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      let personMap = T.MapOfString$dynamic().as(map[$_get]("person"));
      let companyMap = T.MapOfString$dynamic().as(map[$_get]("company"));
      return new employee.Employee.new(core.int.as((t0 = map[$_get]("employeeId"), t0 == null ? -1 : t0)), model_state.ModelState.values[$_get](core.int.as(map[$_get]("employeeState"))), core.int.as((t0$ = map[$_get]("role"), t0$ == null ? -1 : t0$)), core.int.as((t0$0 = map[$_get]("companyId"), t0$0 == null ? -1 : t0$0)), core.String.as((t0$1 = personMap[$_get]("personName"), t0$1 == null ? "Null" : t0$1)), core.String.as((t0$2 = personMap[$_get]("email"), t0$2 == null ? "Null" : t0$2)), core.String.as((t0$3 = personMap[$_get]("mobile"), t0$3 == null ? "Null" : t0$3)), core.String.as((t0$4 = personMap[$_get]("birthDate"), t0$4 == null ? "Null" : t0$4)), core.int.as((t0$5 = personMap[$_get]("sex"), t0$5 == null ? 0 : t0$5)), core.String.as((t0$6 = companyMap[$_get]("companyName"), t0$6 == null ? "Null" : t0$6)));
    }
    static ['_#fromMap#tearOff'](map) {
      return employee.Employee.fromMap(map);
    }
    static fromMapWithSpecialities(map) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      let specialities = core.List.as(map[$_get]("especialities"));
      let specialitiesString = T.ListOfString().from(specialities[$map](dart.dynamic, dart.fn(e => dart.dsend(e, '_get', ["especialityName"]), T.dynamicTodynamic())));
      return new employee.Employee.new(core.int.as((t0 = map[$_get]("employeeId"), t0 == null ? -1 : t0)), model_state.ModelState.values[$_get](0), core.int.as((t0$ = map[$_get]("role"), t0$ == null ? -1 : t0$)), core.int.as((t0$0 = map[$_get]("companyId"), t0$0 == null ? -1 : t0$0)), core.String.as((t0$1 = map[$_get]("name"), t0$1 == null ? "Null" : t0$1)), core.String.as((t0$2 = map[$_get]("email"), t0$2 == null ? "Null" : t0$2)), core.String.as((t0$3 = map[$_get]("mobile"), t0$3 == null ? "Null" : t0$3)), core.String.as((t0$4 = map[$_get]("birthDate"), t0$4 == null ? "Null" : t0$4)), core.int.as((t0$5 = map[$_get]("sex"), t0$5 == null ? 0 : t0$5)), core.String.as((t0$6 = map[$_get]("companyName"), t0$6 == null ? "Null" : t0$6)), {specialities: specialitiesString});
    }
    static ['_#fromMapWithSpecialities#tearOff'](map) {
      return employee.Employee.fromMapWithSpecialities(map);
    }
    toJson() {
      return convert.json.encode(this.toMap());
    }
    static fromJson(source) {
      return employee.Employee.fromMap(T.MapOfString$dynamic().as(convert.json.decode(source)));
    }
    static ['_#fromJson#tearOff'](source) {
      return employee.Employee.fromJson(source);
    }
    static empty() {
      return new employee.Employee.new(-1, model_state.ModelState.active, -1, -1, "No elegido", "", "", "", 0, "");
    }
    static ['_#empty#tearOff']() {
      return employee.Employee.empty();
    }
  };
  (employee.Employee.new = function(employeeId, employeeState, role, companyId, personName, email, mobile, birthDate, sex, companyName, opts) {
    let specialities = opts && 'specialities' in opts ? opts.specialities : C[0] || CT.C0;
    this[__Employee_employeeId] = null;
    this[__Employee_employeeState] = null;
    this[__Employee_role] = null;
    this[__Employee_companyId] = null;
    this[__Employee_personName] = null;
    this[__Employee_email] = null;
    this[__Employee_mobile] = null;
    this[__Employee_birthDate] = null;
    this[__Employee_sex] = null;
    this[__Employee_companyName] = null;
    this[__Employee_employeeId] = employeeId;
    this[__Employee_employeeState] = employeeState;
    this[__Employee_role] = role;
    this[__Employee_companyId] = companyId;
    this[__Employee_personName] = personName;
    this[__Employee_email] = email;
    this[__Employee_mobile] = mobile;
    this[__Employee_birthDate] = birthDate;
    this[__Employee_sex] = sex;
    this[__Employee_companyName] = companyName;
    this[specialities$] = specialities;
    ;
  }).prototype = employee.Employee.prototype;
  dart.addTypeTests(employee.Employee);
  dart.addTypeCaches(employee.Employee);
  dart.setMethodSignature(employee.Employee, () => ({
    __proto__: dart.getMethods(employee.Employee.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    toJson: dart.fnType(core.String, [])
  }));
  dart.setStaticMethodSignature(employee.Employee, () => ['fromMap', 'fromMapWithSpecialities', 'fromJson', 'empty']);
  dart.setGetterSignature(employee.Employee, () => ({
    __proto__: dart.getGetters(employee.Employee.__proto__),
    employeeId: core.int,
    employeeState: model_state.ModelState,
    role: core.int,
    companyId: core.int,
    personName: core.String,
    email: core.String,
    mobile: core.String,
    birthDate: core.String,
    sex: core.int,
    companyName: core.String
  }));
  dart.setSetterSignature(employee.Employee, () => ({
    __proto__: dart.getSetters(employee.Employee.__proto__),
    employeeId: core.int,
    employeeState: model_state.ModelState,
    role: core.int,
    companyId: core.int,
    personName: core.String,
    email: core.String,
    mobile: core.String,
    birthDate: core.String,
    sex: core.int,
    companyName: core.String
  }));
  dart.setLibraryUri(employee.Employee, I[0]);
  dart.setFieldSignature(employee.Employee, () => ({
    __proto__: dart.getFields(employee.Employee.__proto__),
    [__Employee_employeeId]: dart.fieldType(dart.nullable(core.int)),
    [__Employee_employeeState]: dart.fieldType(dart.nullable(model_state.ModelState)),
    [__Employee_role]: dart.fieldType(dart.nullable(core.int)),
    [__Employee_companyId]: dart.fieldType(dart.nullable(core.int)),
    [__Employee_personName]: dart.fieldType(dart.nullable(core.String)),
    [__Employee_email]: dart.fieldType(dart.nullable(core.String)),
    [__Employee_mobile]: dart.fieldType(dart.nullable(core.String)),
    [__Employee_birthDate]: dart.fieldType(dart.nullable(core.String)),
    [__Employee_sex]: dart.fieldType(dart.nullable(core.int)),
    [__Employee_companyName]: dart.fieldType(dart.nullable(core.String)),
    specialities: dart.fieldType(dart.nullable(core.List$(core.String)))
  }));
  dart.trackLibraries("packages/my_ticket_care/models/backend/employee.dart", {
    "package:my_ticket_care/models/backend/employee.dart": employee,
    "package:my_ticket_care/models/models.dart": models
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["employee.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBgB;;;;;;;;AAbL;;IAAU;mBAAV;;IAAU;;;AACH;;IAAa;sBAAb;;IAAa;;;AACpB;;IAAI;aAAJ;;IAAI;;;AACJ;;IAAS;kBAAT;;IAAS;;;AAEN;;IAAU;mBAAV;;IAAU;;;AACV;;IAAK;cAAL;;IAAK;;;AACL;;IAAM;eAAN;;IAAM;;;AACN;;IAAS;kBAAT;;IAAS;;;AACZ;;IAAG;YAAH;;IAAG;;;AAEA;;IAAW;oBAAX;;IAAW;;;;;;AAkBf,mBAA0B;AAES,MAAzC,AAAO,MAAD,UAAQ,4CAAC,cAAc;AACwB,MAArD,AAAO,MAAD,UAAQ,4CAAC,iBAAiB,AAAc;AACjB,MAA7B,AAAO,MAAD,UAAQ,4CAAC,QAAQ;AACgB,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACa,MAAzC,AAAO,MAAD,UAAQ,4CAAC,cAAc;AACE,MAA/B,AAAO,MAAD,UAAQ,4CAAC,SAAS;AACS,MAAjC,AAAO,MAAD,UAAQ,4CAAC,UAAU;AACc,MAAvC,AAAO,MAAD,UAAQ,4CAAC,aAAa;AACD,MAA3B,AAAO,MAAD,UAAQ,4CAAC,OAAO;AAEtB,YAAO,OAAM;IACf;mBAE8C;;AACvB,iDAAY,AAAG,GAAA,QAAC;AAChB,kDAAa,AAAG,GAAA,QAAC;AACtC,YAAO,wCACa,KAAlB,AAAG,GAAA,QAAC,eAAD,aAAkB,CAAC,UACX,AAAM,iDAAC,AAAG,GAAA,QAAC,iCACV,MAAZ,AAAG,GAAA,QAAC,SAAD,cAAY,CAAC,wBACC,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,4BACG,OAAxB,AAAS,SAAA,QAAC,eAAD,eAAkB,iCACR,OAAnB,AAAS,SAAA,QAAC,UAAD,eAAa,iCACF,OAApB,AAAS,SAAA,QAAC,WAAD,eAAc,iCACA,OAAvB,AAAS,SAAA,QAAC,cAAD,eAAiB,8BACT,OAAjB,AAAS,SAAA,QAAC,QAAD,eAAW,4BACM,OAA1B,AAAU,UAAA,QAAC,gBAAD,eAAmB;IAEjC;;;;mCAE8D;;AAC9C,sCAAe,AAAG,GAAA,QAAC;AAEpB,+BACT,sBAAkB,AAAa,YAAD,qBAAK,QAAC,KAAO,WAAD,CAAC,WAAC;AAChD,YAAO,wCACe,KAAlB,AAAG,GAAA,QAAC,eAAD,aAAkB,CAAC,UACX,AAAM,qCAAC,iBACN,MAAZ,AAAG,GAAA,QAAC,SAAD,cAAY,CAAC,wBACC,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,CAAC,4BACT,OAAZ,AAAG,GAAA,QAAC,SAAD,eAAY,iCACF,OAAb,AAAG,GAAA,QAAC,UAAD,eAAa,iCACF,OAAd,AAAG,GAAA,QAAC,WAAD,eAAc,iCACA,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,8BACT,OAAX,AAAG,GAAA,QAAC,QAAD,eAAW,4BACK,OAAnB,AAAG,GAAA,QAAC,gBAAD,eAAmB,gCACR,kBAAkB;IACtC;;;;;AAEmB,YAAA,AAAK,qBAAO;IAAQ;oBAEN;AAC7B,YAAS,sDAAQ,AAAK,oBAAO,MAAM;IAAE;;;;;AAGvC,YAAO,2BACL,CAAC,GACU,+BACX,CAAC,GACD,CAAC,GACD,cACA,IACA,IACA,IACA,GACA;IAEJ;;;;;oCAlFS,YACA,eACA,MACA,WACA,YACA,OACA,QACA,WACA,KACA;QACC;kCA1BD;qCACO;4BACP;iCACA;kCAEG;6BACA;8BACA;iCACA;2BACH;mCAEG;IAKH;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACC;;EAAyB","file":"../../../../../../../../../../packages/my_ticket_care/models/backend/employee.dart.lib.js"}');
  // Exports:
  return {
    models__backend__employee: employee,
    models__models: models
  };
}));

//# sourceMappingURL=employee.dart.lib.js.map
