define(['dart_sdk', 'packages/my_ticket_care/models/backend/person.dart'], (function load__packages__my_ticket_care__models__frontend__master_response_dart(dart_sdk, packages__my_ticket_care__models__backend__person$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const person = packages__my_ticket_care__models__backend__person$46dart.models__backend__person;
  var master_response = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/models/frontend/master_response.dart"];
  var status$ = dart.privateName(master_response, "MasterResponse.status");
  var message$ = dart.privateName(master_response, "MasterResponse.message");
  var data$ = dart.privateName(master_response, "MasterResponse.data");
  master_response.MasterResponse = class MasterResponse extends core.Object {
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static ['_#new#tearOff'](opts) {
      let status = opts && 'status' in opts ? opts.status : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let data = opts && 'data' in opts ? opts.data : null;
      return new master_response.MasterResponse.new({status: status, message: message, data: data});
    }
    static fromJsonLogin(json) {
      return new master_response.MasterResponse.new({status: core.int.as(json[$_get]("status")), message: core.String.as(json[$_get]("message")), data: json[$_get]("data") == null ? new master_response.Data.new() : master_response.Data.fromJsonLoginPerson(T.MapOfString$dynamic().as(json[$_get]("data")))});
    }
    static ['_#fromJsonLogin#tearOff'](json) {
      return master_response.MasterResponse.fromJsonLogin(json);
    }
    static fromJsonCreate(json) {
      return new master_response.MasterResponse.new({status: core.int.as(json[$_get]("status")), message: core.String.as(json[$_get]("message")), data: json[$_get]("data") == null ? new master_response.Data.new() : master_response.Data.fromJsonCreatePerson(T.MapOfString$dynamic().as(json[$_get]("data")))});
    }
    static ['_#fromJsonCreate#tearOff'](json) {
      return master_response.MasterResponse.fromJsonCreate(json);
    }
    static fromJsonForgotPassword(json) {
      return new master_response.MasterResponse.new({status: core.int.as(json[$_get]("status")), message: core.String.as(json[$_get]("message")), data: json[$_get]("data") == null ? new master_response.Data.new() : master_response.Data.fromJsonForgotPassword()});
    }
    static ['_#fromJsonForgotPassword#tearOff'](json) {
      return master_response.MasterResponse.fromJsonForgotPassword(json);
    }
  };
  (master_response.MasterResponse.new = function(opts) {
    let status = opts && 'status' in opts ? opts.status : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let data = opts && 'data' in opts ? opts.data : null;
    this[status$] = status;
    this[message$] = message;
    this[data$] = data;
    ;
  }).prototype = master_response.MasterResponse.prototype;
  dart.addTypeTests(master_response.MasterResponse);
  dart.addTypeCaches(master_response.MasterResponse);
  dart.setStaticMethodSignature(master_response.MasterResponse, () => ['fromJsonLogin', 'fromJsonCreate', 'fromJsonForgotPassword']);
  dart.setLibraryUri(master_response.MasterResponse, I[0]);
  dart.setFieldSignature(master_response.MasterResponse, () => ({
    __proto__: dart.getFields(master_response.MasterResponse.__proto__),
    status: dart.finalFieldType(core.int),
    message: dart.finalFieldType(core.String),
    data: dart.finalFieldType(master_response.Data)
  }));
  var token$ = dart.privateName(master_response, "Data.token");
  var person$ = dart.privateName(master_response, "Data.person");
  master_response.Data = class Data extends core.Object {
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    get person() {
      return this[person$];
    }
    set person(value) {
      super.person = value;
    }
    static ['_#new#tearOff'](opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      let person = opts && 'person' in opts ? opts.person : null;
      return new master_response.Data.new({token: token, person: person});
    }
    static fromJsonLoginPerson(json) {
      return new master_response.Data.new({token: T.StringN().as(json[$_get]("token")), person: person.Person.fromJson(T.MapOfString$dynamic().as(json[$_get]("person")))});
    }
    static ['_#fromJsonLoginPerson#tearOff'](json) {
      return master_response.Data.fromJsonLoginPerson(json);
    }
    static fromJsonCreatePerson(json) {
      return new master_response.Data.new({person: person.Person.fromJson(T.MapOfString$dynamic().as(json[$_get]("person")))});
    }
    static ['_#fromJsonCreatePerson#tearOff'](json) {
      return master_response.Data.fromJsonCreatePerson(json);
    }
    static fromJsonForgotPassword() {
      return new master_response.Data.new();
    }
    static ['_#fromJsonForgotPassword#tearOff']() {
      return master_response.Data.fromJsonForgotPassword();
    }
    static fromJsonService(json) {
      return new master_response.Data.new();
    }
    static ['_#fromJsonService#tearOff'](json) {
      return master_response.Data.fromJsonService(json);
    }
  };
  (master_response.Data.new = function(opts) {
    let token = opts && 'token' in opts ? opts.token : null;
    let person = opts && 'person' in opts ? opts.person : null;
    this[token$] = token;
    this[person$] = person;
    ;
  }).prototype = master_response.Data.prototype;
  dart.addTypeTests(master_response.Data);
  dart.addTypeCaches(master_response.Data);
  dart.setStaticMethodSignature(master_response.Data, () => ['fromJsonLoginPerson', 'fromJsonCreatePerson', 'fromJsonForgotPassword', 'fromJsonService']);
  dart.setLibraryUri(master_response.Data, I[0]);
  dart.setFieldSignature(master_response.Data, () => ({
    __proto__: dart.getFields(master_response.Data.__proto__),
    token: dart.finalFieldType(dart.nullable(core.String)),
    person: dart.finalFieldType(dart.nullable(person.Person))
  }));
  master_response.masterResponseFromJsonLogin = function masterResponseFromJsonLogin(str) {
    return master_response.MasterResponse.fromJsonLogin(T.MapOfString$dynamic().as(convert.json.decode(str)));
  };
  master_response.masterResponseFromJsonCreate = function masterResponseFromJsonCreate(str) {
    return master_response.MasterResponse.fromJsonCreate(T.MapOfString$dynamic().as(convert.json.decode(str)));
  };
  master_response.masterResponseFromJsonForgotPassword = function masterResponseFromJsonForgotPassword(str) {
    return master_response.MasterResponse.fromJsonForgotPassword(T.MapOfString$dynamic().as(convert.json.decode(str)));
  };
  dart.trackLibraries("packages/my_ticket_care/models/frontend/master_response.dart", {
    "package:my_ticket_care/models/frontend/master_response.dart": master_response
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["master_response.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAYY;;;;;;IACG;;;;;;IACF;;;;;;;;;;;;yBAQ+C;AACtD,yEACU,AAAI,IAAA,QAAC,oCACJ,AAAI,IAAA,QAAC,mBACR,AAAI,AAAS,IAAT,QAAC,kBACL,iCACK,oEAAoB,AAAI,IAAA,QAAC;IACrC;;;;0BAEsD;AACvD,yEACY,AAAI,IAAA,QAAC,oCACJ,AAAI,IAAA,QAAC,mBACR,AAAI,AAAS,IAAT,QAAC,kBACL,iCACK,qEAAqB,AAAI,IAAA,QAAC;IAAS;;;;kCAEa;AAC/D,yEACY,AAAI,IAAA,QAAC,oCACJ,AAAI,IAAA,QAAC,mBACR,AAAI,AAAS,IAAT,QAAC,kBAAkB,iCAAc;IAAyB;;;;;;QA1B5D;QACA;QACA;IAFA;IACA;IACA;;EACd;;;;;;;;;;;;;;IA2BY;;;;;;IAEA;;;;;;;;;;;+BAOwC;AAAS,iEAClD,AAAI,IAAA,QAAC,mBACG,kDAAS,AAAI,IAAA,QAAC;IAC9B;;;;gCAEkD;AACnD,mDAAoB,kDAAS,AAAI,IAAA,QAAC;IAAW;;;;;AAER;IAAM;;;;2BAEG;AAAS;IAAM;;;;;;QAd1D;QACA;IADA;IACA;;EACL;;;;;;;;;;qFAlD8C;AAC9C,UAAe,yEAAc,AAAK,oBAAO,GAAG;EAAE;uFACC;AAC/C,UAAe,0EAAe,AAAK,oBAAO,GAAG;EAAE;uGACQ;AACvD,UAAe,kFAAuB,AAAK,oBAAO,GAAG;EAAE","file":"../../../../../../../../../../packages/my_ticket_care/models/frontend/master_response.dart.lib.js"}');
  // Exports:
  return {
    models__frontend__master_response: master_response
  };
}));

//# sourceMappingURL=master_response.dart.lib.js.map
