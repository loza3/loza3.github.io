define(['dart_sdk', 'packages/intl/src/intl/date_format.dart'], (function load__packages__my_ticket_care__src__shared__models__person_dart(dart_sdk, packages__intl__src__intl__date_format$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date_format = packages__intl__src__intl__date_format$46dart.src__intl__date_format;
  var person = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: person.AuthMethod.prototype,
        [_Enum__name]: "normal",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: person.AuthMethod.prototype,
        [_Enum__name]: "google",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: person.AuthMethod.prototype,
        [_Enum__name]: "facebook",
        [_Enum_index]: 2
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], person.AuthMethod);
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:my_ticket_care/src/shared/models/person.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  person.AuthMethod = class AuthMethod extends core._Enum {
    toString() {
      return "AuthMethod." + this[_name];
    }
  };
  (person.AuthMethod.new = function(index, name) {
    person.AuthMethod.__proto__.new.call(this, index, name);
    ;
  }).prototype = person.AuthMethod.prototype;
  dart.addTypeTests(person.AuthMethod);
  dart.addTypeCaches(person.AuthMethod);
  dart.setLibraryUri(person.AuthMethod, I[0]);
  dart.setStaticFieldSignature(person.AuthMethod, () => ['values', 'normal', 'google', 'facebook']);
  dart.defineExtensionMethods(person.AuthMethod, ['toString']);
  dart.defineLazy(person.AuthMethod, {
    /*person.AuthMethod.values*/get values() {
      return C[0] || CT.C0;
    },
    /*person.AuthMethod.normal*/get normal() {
      return C[1] || CT.C1;
    },
    /*person.AuthMethod.google*/get google() {
      return C[2] || CT.C2;
    },
    /*person.AuthMethod.facebook*/get facebook() {
      return C[3] || CT.C3;
    }
  }, false);
  var personId$ = dart.privateName(person, "Person.personId");
  var personName$ = dart.privateName(person, "Person.personName");
  var sex$ = dart.privateName(person, "Person.sex");
  var email$ = dart.privateName(person, "Person.email");
  var mobile$ = dart.privateName(person, "Person.mobile");
  var birthday$ = dart.privateName(person, "Person.birthday");
  var facebookId$ = dart.privateName(person, "Person.facebookId");
  var facebookProfilePic$ = dart.privateName(person, "Person.facebookProfilePic");
  var jwtToken$ = dart.privateName(person, "Person.jwtToken");
  var authMethod$ = dart.privateName(person, "Person.authMethod");
  person.Person = class Person extends core.Object {
    get personId() {
      return this[personId$];
    }
    set personId(value) {
      this[personId$] = value;
    }
    get personName() {
      return this[personName$];
    }
    set personName(value) {
      this[personName$] = value;
    }
    get sex() {
      return this[sex$];
    }
    set sex(value) {
      this[sex$] = value;
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
    get birthday() {
      return this[birthday$];
    }
    set birthday(value) {
      this[birthday$] = value;
    }
    get facebookId() {
      return this[facebookId$];
    }
    set facebookId(value) {
      this[facebookId$] = value;
    }
    get facebookProfilePic() {
      return this[facebookProfilePic$];
    }
    set facebookProfilePic(value) {
      this[facebookProfilePic$] = value;
    }
    get jwtToken() {
      return this[jwtToken$];
    }
    set jwtToken(value) {
      this[jwtToken$] = value;
    }
    get authMethod() {
      return this[authMethod$];
    }
    set authMethod(value) {
      this[authMethod$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let personId = opts && 'personId' in opts ? opts.personId : null;
      let personName = opts && 'personName' in opts ? opts.personName : null;
      let birthday = opts && 'birthday' in opts ? opts.birthday : null;
      let sex = opts && 'sex' in opts ? opts.sex : null;
      let email = opts && 'email' in opts ? opts.email : null;
      let mobile = opts && 'mobile' in opts ? opts.mobile : null;
      let facebookId = opts && 'facebookId' in opts ? opts.facebookId : null;
      let jwtToken = opts && 'jwtToken' in opts ? opts.jwtToken : null;
      let facebookProfilePic = opts && 'facebookProfilePic' in opts ? opts.facebookProfilePic : null;
      let authMethod = opts && 'authMethod' in opts ? opts.authMethod : C[1] || CT.C1;
      return new person.Person.new({personId: personId, personName: personName, birthday: birthday, sex: sex, email: email, mobile: mobile, facebookId: facebookId, jwtToken: jwtToken, facebookProfilePic: facebookProfilePic, authMethod: authMethod});
    }
    static changeFormat(date) {
      return new date_format.DateFormat.new("dd/MM/yyyy").format(new date_format.DateFormat.new("yyyy-MM-dd").parse(date));
    }
    static fromMap(map) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3;
      return new person.Person.new({personId: core.int.as((t2 = map[$_get]("personId"), t2 == null ? -1 : t2)), personName: core.String.as((t2$ = map[$_get]("personName"), t2$ == null ? "Null" : t2$)), birthday: person.Person.changeFormat(core.String.as((t2$0 = map[$_get]("birthDate"), t2$0 == null ? "2000-01-01" : t2$0))), sex: core.int.as((t2$1 = map[$_get]("sex"), t2$1 == null ? 0 : t2$1)), email: core.String.as((t2$2 = map[$_get]("email"), t2$2 == null ? "Null" : t2$2)), mobile: core.String.as((t2$3 = map[$_get]("mobile"), t2$3 == null ? "Null" : t2$3))});
    }
    static ['_#fromMap#tearOff'](map) {
      return person.Person.fromMap(map);
    }
    static fromMapWithToken(map) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4;
      return new person.Person.new({personId: core.int.as((t2 = map[$_get]("personId"), t2 == null ? -1 : t2)), personName: core.String.as((t2$ = map[$_get]("personName"), t2$ == null ? "Null" : t2$)), birthday: core.String.as((t2$0 = map[$_get]("birthday"), t2$0 == null ? "01/01/2000" : t2$0)), sex: core.int.as((t2$1 = map[$_get]("sex"), t2$1 == null ? 0 : t2$1)), email: core.String.as((t2$2 = map[$_get]("email"), t2$2 == null ? "Null" : t2$2)), mobile: core.String.as((t2$3 = map[$_get]("mobile"), t2$3 == null ? "Null" : t2$3)), jwtToken: T.StringN().as((t2$4 = map[$_get]("token"), t2$4 == null ? "Null" : t2$4))});
    }
    static ['_#fromMapWithToken#tearOff'](map) {
      return person.Person.fromMapWithToken(map);
    }
    static fromFacebookMap(map) {
      let t2, t2$, t2$0, t2$1, t2$2;
      return new person.Person.new({personId: -1, personName: core.String.as((t2 = map[$_get]("name"), t2 == null ? "" : t2)), email: core.String.as((t2$ = map[$_get]("email"), t2$ == null ? "" : t2$)), birthday: core.String.as((t2$0 = map[$_get]("birthday"), t2$0 == null ? "" : t2$0)), sex: dart.equals(map[$_get]("gender"), "male") ? 0 : 1, mobile: core.String.as((t2$1 = map[$_get]("mobile"), t2$1 == null ? "" : t2$1)), facebookId: T.StringN().as((t2$2 = map[$_get]("id"), t2$2 == null ? "" : t2$2)), facebookProfilePic: T.StringN().as(dart.dsend(dart.dsend(map[$_get]("picture"), '_get', ["data"]), '_get', ["url"])), authMethod: person.AuthMethod.facebook});
    }
    static ['_#fromFacebookMap#tearOff'](map) {
      return person.Person.fromFacebookMap(map);
    }
    static empty() {
      return new person.Person.new({personId: -1, personName: "", sex: 0, email: "", mobile: "", birthday: "01/01/2000", authMethod: person.AuthMethod.normal});
    }
    static ['_#empty#tearOff']() {
      return person.Person.empty();
    }
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3;
      let personId = opts && 'personId' in opts ? opts.personId : null;
      let personName = opts && 'personName' in opts ? opts.personName : null;
      let sex = opts && 'sex' in opts ? opts.sex : null;
      let email = opts && 'email' in opts ? opts.email : null;
      let mobile = opts && 'mobile' in opts ? opts.mobile : null;
      let birthday = opts && 'birthday' in opts ? opts.birthday : null;
      return new person.Person.new({personId: (t2 = personId, t2 == null ? this.personId : t2), personName: (t2$ = personName, t2$ == null ? this.personName : t2$), sex: (t2$0 = sex, t2$0 == null ? this.sex : t2$0), email: (t2$1 = email, t2$1 == null ? this.email : t2$1), mobile: (t2$2 = mobile, t2$2 == null ? this.mobile : t2$2), birthday: (t2$3 = birthday, t2$3 == null ? this.birthday : t2$3)});
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["personId", this.personId, "personName", this.personName, "birthDate", this.birthday, "sex", this.sex, "email", this.email, "mobile", this.mobile, "authMethod", this.authMethod.index]);
    }
  };
  (person.Person.new = function(opts) {
    let personId = opts && 'personId' in opts ? opts.personId : null;
    let personName = opts && 'personName' in opts ? opts.personName : null;
    let birthday = opts && 'birthday' in opts ? opts.birthday : null;
    let sex = opts && 'sex' in opts ? opts.sex : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let mobile = opts && 'mobile' in opts ? opts.mobile : null;
    let facebookId = opts && 'facebookId' in opts ? opts.facebookId : null;
    let jwtToken = opts && 'jwtToken' in opts ? opts.jwtToken : null;
    let facebookProfilePic = opts && 'facebookProfilePic' in opts ? opts.facebookProfilePic : null;
    let authMethod = opts && 'authMethod' in opts ? opts.authMethod : C[1] || CT.C1;
    this[personId$] = personId;
    this[personName$] = personName;
    this[birthday$] = birthday;
    this[sex$] = sex;
    this[email$] = email;
    this[mobile$] = mobile;
    this[facebookId$] = facebookId;
    this[jwtToken$] = jwtToken;
    this[facebookProfilePic$] = facebookProfilePic;
    this[authMethod$] = authMethod;
    ;
  }).prototype = person.Person.prototype;
  dart.addTypeTests(person.Person);
  dart.addTypeCaches(person.Person);
  dart.setMethodSignature(person.Person, () => ({
    __proto__: dart.getMethods(person.Person.__proto__),
    copyWith: dart.fnType(person.Person, [], {birthday: dart.nullable(core.String), email: dart.nullable(core.String), mobile: dart.nullable(core.String), personId: dart.nullable(core.int), personName: dart.nullable(core.String), sex: dart.nullable(core.int)}, {}),
    toMap: dart.fnType(core.Map, [])
  }));
  dart.setStaticMethodSignature(person.Person, () => ['changeFormat', 'fromMap', 'fromMapWithToken', 'fromFacebookMap', 'empty']);
  dart.setLibraryUri(person.Person, I[0]);
  dart.setFieldSignature(person.Person, () => ({
    __proto__: dart.getFields(person.Person.__proto__),
    personId: dart.fieldType(core.int),
    personName: dart.fieldType(core.String),
    sex: dart.fieldType(core.int),
    email: dart.fieldType(core.String),
    mobile: dart.fieldType(core.String),
    birthday: dart.fieldType(core.String),
    facebookId: dart.fieldType(dart.nullable(core.String)),
    facebookProfilePic: dart.fieldType(dart.nullable(core.String)),
    jwtToken: dart.fieldType(dart.nullable(core.String)),
    authMethod: dart.fieldType(person.AuthMethod)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/models/person.dart", {
    "package:my_ticket_care/src/shared/models/person.dart": person
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["person.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMA;;;;;;;;;;;;MAJK,wBAAM;;;MACT,wBAAM;;;MACN,wBAAM;;;MACN,0BAAQ;;;;;;;;;;;;;;;IAIJ;;;;;;IACG;;;;;;IACH;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IAEC;;;;;;IACA;;;;;;IACA;;;;;;IAEG;;;;;;;;;;;;;;;;;;;wBAeuB;AAGhC,YAAO,AACF,gCADa,qBACN,AAAyB,+BAAd,oBAAoB,IAAI;IACjD;mBAE4C;;AAC1C,YAAO,+CACqB,KAAhB,AAAG,GAAA,QAAC,aAAD,aAAgB,CAAC,sCACA,MAAlB,AAAG,GAAA,QAAC,eAAD,cAAkB,0BACvB,2CAA8B,OAAjB,AAAG,GAAA,QAAC,cAAD,eAAiB,0CAC3B,OAAX,AAAG,GAAA,QAAC,QAAD,eAAW,mCACC,OAAb,AAAG,GAAA,QAAC,UAAD,eAAa,yCACD,OAAd,AAAG,GAAA,QAAC,WAAD,eAAc;IAE7B;;;;4BAEqD;;AACnD,YAAO,+CACqB,KAAhB,AAAG,GAAA,QAAC,aAAD,aAAgB,CAAC,sCACA,MAAlB,AAAG,GAAA,QAAC,eAAD,cAAkB,0CACP,OAAhB,AAAG,GAAA,QAAC,aAAD,eAAgB,yCACb,OAAX,AAAG,GAAA,QAAC,QAAD,eAAW,mCACC,OAAb,AAAG,GAAA,QAAC,UAAD,eAAa,yCACD,OAAd,AAAG,GAAA,QAAC,WAAD,eAAc,2CACF,OAAb,AAAG,GAAA,QAAC,UAAD,eAAa;IAE9B;;;;2BAEoD;;AAClD,YAAO,kCACK,CAAC,+BACa,KAAZ,AAAG,GAAA,QAAC,SAAD,aAAY,kCACP,MAAb,AAAG,GAAA,QAAC,UAAD,cAAa,sCACG,OAAhB,AAAG,GAAA,QAAC,aAAD,eAAgB,kBACV,YAAd,AAAG,GAAA,QAAC,WAAa,UAAS,IAAI,2BACb,OAAd,AAAG,GAAA,QAAC,WAAD,eAAc,yCACH,OAAV,AAAG,GAAA,QAAC,OAAD,eAAU,gDACiB,WAAR,WAAd,AAAG,GAAA,QAAC,qBAAW,mBAAQ,sBACpB;IAE3B;;;;;AAGE,YAAO,kCACK,CAAC,eACC,SACP,UACE,YACC,cACE,0BACa;IAE3B;;;;;;UAGO;UACG;UACH;UACG;UACA;UACA;AAER,YAAO,mCACc,KAAT,QAAQ,EAAR,aAAiB,kCACJ,MAAX,UAAU,EAAV,cAAmB,8BACtB,OAAJ,GAAG,EAAH,eAAY,0BACJ,OAAN,KAAK,EAAL,eAAc,6BACN,OAAP,MAAM,EAAN,eAAe,gCACJ,OAAT,QAAQ,EAAR,eAAiB;IAE/B;;AAGE,YAAO,gCACL,YAAY,eACZ,cAAc,iBACd,aAAa,eACb,OAAO,UACP,SAAS,YACT,UAAU,aACV,cAAc,AAAW;IAE7B;;;QAhGgB;QACA;QACA;QACA;QACA;QACA;QACT;QACA;QACA;QACA;IATS;IACA;IACA;IACA;IACA;IACA;IACT;IACA;IACA;IACA;;EACL","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/models/person.dart.lib.js"}');
  // Exports:
  return {
    src__shared__models__person: person
  };
}));

//# sourceMappingURL=person.dart.lib.js.map
