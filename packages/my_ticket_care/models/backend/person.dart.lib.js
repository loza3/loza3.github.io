define(['dart_sdk'], (function load__packages__my_ticket_care__models__backend__person_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var person = Object.create(dart.library);
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var $padLeft = dartx.padLeft;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/models/backend/person.dart"];
  var personId$ = dart.privateName(person, "Person.personId");
  var personName$ = dart.privateName(person, "Person.personName");
  var birthDate$ = dart.privateName(person, "Person.birthDate");
  var sex$ = dart.privateName(person, "Person.sex");
  var email$ = dart.privateName(person, "Person.email");
  var mobile$ = dart.privateName(person, "Person.mobile");
  var password$ = dart.privateName(person, "Person.password");
  person.Person = class Person extends core.Object {
    get personId() {
      return this[personId$];
    }
    set personId(value) {
      super.personId = value;
    }
    get personName() {
      return this[personName$];
    }
    set personName(value) {
      super.personName = value;
    }
    get birthDate() {
      return this[birthDate$];
    }
    set birthDate(value) {
      super.birthDate = value;
    }
    get sex() {
      return this[sex$];
    }
    set sex(value) {
      super.sex = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get mobile() {
      return this[mobile$];
    }
    set mobile(value) {
      super.mobile = value;
    }
    get password() {
      return this[password$];
    }
    set password(value) {
      super.password = value;
    }
    static ['_#new#tearOff'](opts) {
      let personId = opts && 'personId' in opts ? opts.personId : null;
      let personName = opts && 'personName' in opts ? opts.personName : null;
      let birthDate = opts && 'birthDate' in opts ? opts.birthDate : null;
      let sex = opts && 'sex' in opts ? opts.sex : null;
      let email = opts && 'email' in opts ? opts.email : null;
      let mobile = opts && 'mobile' in opts ? opts.mobile : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return new person.Person.new({personId: personId, personName: personName, birthDate: birthDate, sex: sex, email: email, mobile: mobile, password: password});
    }
    static fromJson(json) {
      return new person.Person.new({personId: T.intN().as(json[$_get]("personId")), personName: T.StringN().as(json[$_get]("personName")), birthDate: core.DateTime.parse(core.String.as(json[$_get]("birthDate"))), sex: T.intN().as(json[$_get]("sex")), email: T.StringN().as(json[$_get]("email")), mobile: T.StringN().as(json[$_get]("mobile"))});
    }
    static ['_#fromJson#tearOff'](json) {
      return person.Person.fromJson(json);
    }
    toJsonForgotPassword() {
      return new (T.IdentityMapOfString$String()).from(["email", dart.nullCheck(this.email)]);
    }
    toJsonLogin() {
      return new (T.IdentityMapOfString$String()).from(["email", dart.nullCheck(this.email), "password", dart.nullCheck(this.password)]);
    }
    toJson() {
      return new (T.IdentityMapOfString$dynamic()).from(["personId", this.personId, "personName", this.personName, "birthDate", dart.nullCheck(this.birthDate).year[$toString]()[$padLeft](4, "0") + "-" + dart.nullCheck(this.birthDate).month[$toString]()[$padLeft](2, "0") + "-" + dart.nullCheck(this.birthDate).day[$toString]()[$padLeft](2, "0"), "sex", this.sex, "email", this.email, "mobile", this.mobile]);
    }
  };
  (person.Person.new = function(opts) {
    let personId = opts && 'personId' in opts ? opts.personId : null;
    let personName = opts && 'personName' in opts ? opts.personName : null;
    let birthDate = opts && 'birthDate' in opts ? opts.birthDate : null;
    let sex = opts && 'sex' in opts ? opts.sex : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let mobile = opts && 'mobile' in opts ? opts.mobile : null;
    let password = opts && 'password' in opts ? opts.password : null;
    this[personId$] = personId;
    this[personName$] = personName;
    this[birthDate$] = birthDate;
    this[sex$] = sex;
    this[email$] = email;
    this[mobile$] = mobile;
    this[password$] = password;
    ;
  }).prototype = person.Person.prototype;
  dart.addTypeTests(person.Person);
  dart.addTypeCaches(person.Person);
  dart.setMethodSignature(person.Person, () => ({
    __proto__: dart.getMethods(person.Person.__proto__),
    toJsonForgotPassword: dart.fnType(core.Map$(core.String, core.String), []),
    toJsonLogin: dart.fnType(core.Map$(core.String, core.String), []),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setStaticMethodSignature(person.Person, () => ['fromJson']);
  dart.setLibraryUri(person.Person, I[0]);
  dart.setFieldSignature(person.Person, () => ({
    __proto__: dart.getFields(person.Person.__proto__),
    personId: dart.finalFieldType(dart.nullable(core.int)),
    personName: dart.finalFieldType(dart.nullable(core.String)),
    birthDate: dart.finalFieldType(dart.nullable(core.DateTime)),
    sex: dart.finalFieldType(dart.nullable(core.int)),
    email: dart.finalFieldType(dart.nullable(core.String)),
    mobile: dart.finalFieldType(dart.nullable(core.String)),
    password: dart.finalFieldType(dart.nullable(core.String))
  }));
  person.personFromJson = function personFromJson(str) {
    return person.Person.fromJson(T.MapOfString$dynamic().as(convert.json.decode(str)));
  };
  person.personLoginToJson = function personLoginToJson(data) {
    return convert.json.encode(data.toJsonLogin());
  };
  person.personForgotPasswordToJson = function personForgotPasswordToJson(data) {
    return convert.json.encode(data.toJsonForgotPassword());
  };
  person.personCreateToJson = function personCreateToJson(data) {
    return convert.json.encode(data.toJson());
  };
  dart.trackLibraries("packages/my_ticket_care/models/backend/person.dart", {
    "package:my_ticket_care/models/backend/person.dart": person
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["person.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUkB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;;;;;;;;;oBAe6B;AAAS,0DACvC,AAAI,IAAA,QAAC,yCACL,AAAI,IAAA,QAAC,2BACI,mCAAM,AAAI,IAAA,QAAC,iCACpB,AAAI,IAAA,QAAC,+BACL,AAAI,IAAA,QAAC,kCACL,AAAI,IAAA,QAAC;IACnB;;;;;AAE6C,wDAC5C,SAAkB,eAAL;IACd;;AAEoC,wDACnC,SAAkB,eAAL,aACb,YAAqB,eAAR;IACd;;AAEgC,yDAC/B,YAAc,eACd,cAAc,iBACd,aAA0B,AAAE,AAAK,AAAW,AAA6G,eAAxI,4CAAmC,GAAG,OAAK,MAAY,AAAE,AAAM,AAAW,eAA5B,6CAAoC,GAAG,OAAK,MAAY,AAAE,AAAI,AAAW,eAA1B,2CAAkC,GAAG,MACnJ,OAAc,UACd,SAAc,YACd,UAAc;IACf;;;QApCM;QACA;QACA;QACA;QACA;QACA;QACA;IANA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;kDAzByB;AAAQ,UAAO,mDAAS,AAAK,oBAAO,GAAG;EAAE;wDAE3B;AAAU,UAAA,AAAK,qBAAO,AAAK,IAAD;EAAe;0EACzC;AAAU,UAAA,AAAK,qBAAO,AAAK,IAAD;EAAwB;0DAClD;AAAU,UAAA,AAAK,qBAAO,AAAK,IAAD;EAAU","file":"../../../../../../../../../../packages/my_ticket_care/models/backend/person.dart.lib.js"}');
  // Exports:
  return {
    models__backend__person: person
  };
}));

//# sourceMappingURL=person.dart.lib.js.map
