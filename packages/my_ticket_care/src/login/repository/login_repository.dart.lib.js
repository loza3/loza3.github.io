define(['dart_sdk', 'packages/my_ticket_care/src/shared/shared_constants/shared_url.dart', 'packages/my_ticket_care/src/shared/models/person.dart', 'packages/my_ticket_care/src/shared/shared_utilities/token_manager.dart', 'packages/http/src/multipart_request.dart', 'packages/my_ticket_care/src/shared/shared_utilities/base_repository.dart'], (function load__packages__my_ticket_care__src__login__repository__login_repository_dart(dart_sdk, packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart, packages__my_ticket_care__src__shared__models__person$46dart, packages__my_ticket_care__src__shared__shared_utilities__token_manager$46dart, packages__http__src__multipart_request$46dart, packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_url = packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart.src__shared__shared_constants__shared_url;
  const person$ = packages__my_ticket_care__src__shared__models__person$46dart.src__shared__models__person;
  const token_manager = packages__my_ticket_care__src__shared__shared_utilities__token_manager$46dart.src__shared__shared_utilities__token_manager;
  const http = packages__http__src__multipart_request$46dart.http;
  const base_repository = packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart.src__shared__shared_utilities__base_repository;
  var login_repository = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toString = dartx.toString;
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
  var I = ["package:my_ticket_care/src/login/repository/login_repository.dart"];
  login_repository.LoginRepository = class LoginRepository extends core.Object {};
  (login_repository.LoginRepository.new = function() {
    ;
  }).prototype = login_repository.LoginRepository.prototype;
  dart.addTypeTests(login_repository.LoginRepository);
  dart.addTypeCaches(login_repository.LoginRepository);
  dart.setLibraryUri(login_repository.LoginRepository, I[0]);
  login_repository.LoginRepositoryHTTP = class LoginRepositoryHTTP extends base_repository.BaseRepository {
    registerPerson(person) {
      return async.async(person$.Person, (function* registerPerson() {
        let token = "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmljYXJkb2FzaW4xQGdtYWlsLmNvbSIsImV4cCI6MTY3MjAyMDgyM30.icVEE3YC_8_C7lW_mYup5FzPz00Gdlq8pQYwQykvXpuXtm5HU-eRNrVEMdxUW3npzTw8QEIJK4wOiieIgtjt7g";
        let header = T.LinkedHashMapOfString$String().from(this.jsonHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["token", token]));
        let response = (yield this.post(core.Uri.parse(shared_url.urlLogin + "Login/register"), {headers: header, body: convert.jsonEncode(person.toMap())}));
        let newUser = person$.Person.fromMap(T.MapOfString$dynamic().as(response.data));
        return newUser;
      }).bind(this));
    }
    loginPerson(email, password) {
      return async.async(person$.Person, (function* loginPerson() {
        let response = (yield this.post(core.Uri.parse(shared_url.urlLogin + "Login/login"), {headers: this.jsonHeader, body: convert.jsonEncode(new (T.IdentityMapOfString$String()).from(["email", email, "password", password]))}));
        let data = core.Map.as(response.data);
        let token = core.String.as(data[$_get]("token"));
        token_manager.TokenManager.new({token: token});
        let user = person$.Person.fromMap(T.MapOfString$dynamic().as(data[$_get]("person")));
        user.jwtToken = token;
        return user;
      }).bind(this));
    }
    getUserInformation(userId, token) {
      return async.async(person$.Person, (function* getUserInformation() {
        let header = T.LinkedHashMapOfString$String().from(this.defaultHeader);
        header[$_set]("token", token);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["Personid", userId[$toString]()]));
        let response = (yield http.get(core.Uri.parse(shared_url.urlMyTicket + "/Person/getbypersonid"), {headers: header}));
        return person$.Person.fromMap(T.MapOfString$dynamic().as(convert.jsonDecode(response.body)));
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new login_repository.LoginRepositoryHTTP.new();
    }
  };
  (login_repository.LoginRepositoryHTTP.new = function() {
    login_repository.LoginRepositoryHTTP.__proto__.new.call(this);
    ;
  }).prototype = login_repository.LoginRepositoryHTTP.prototype;
  dart.addTypeTests(login_repository.LoginRepositoryHTTP);
  dart.addTypeCaches(login_repository.LoginRepositoryHTTP);
  login_repository.LoginRepositoryHTTP[dart.implements] = () => [login_repository.LoginRepository];
  dart.setMethodSignature(login_repository.LoginRepositoryHTTP, () => ({
    __proto__: dart.getMethods(login_repository.LoginRepositoryHTTP.__proto__),
    registerPerson: dart.fnType(async.Future$(person$.Person), [person$.Person]),
    loginPerson: dart.fnType(async.Future$(person$.Person), [core.String, core.String]),
    getUserInformation: dart.fnType(async.Future$(person$.Person), [core.int, core.String])
  }));
  dart.setLibraryUri(login_repository.LoginRepositoryHTTP, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/login/repository/login_repository.dart", {
    "package:my_ticket_care/src/login/repository/login_repository.dart": login_repository
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_repository.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAeA;;;;;mBAIuC;AAAR;AACpB,oBACH;AAEgB,qBAAa,sCAAK;AACP,QAA/B,AAAO,MAAD,UAAQ,2CAAC,SAAS,KAAK;AACvB,wBAAW,MAAM,UACjB,eAAS,AAAwB,sBAAf,6BACb,MAAM,QACT,mBACJ,AAAO,MAAD;AAIH,sBAAiB,kDAAQ,AAAS,QAAD;AACxC,cAAO,QAAO;MAChB;;gBAGkC,OAAc;AAAtB;AACZ,wBAAW,MAAM,UACvB,eAAS,AAAqB,sBAAZ,0BACb,uBACH,mBAAW,2CAAC,SAAS,KAAK,EAAE,YAAY,QAAQ;AAGpD,+BAAO,AAAS,QAAD;AAEZ,mCAAQ,AAAI,IAAA,QAAC;AACM,QAA1B,uCAAoB,KAAK;AAElB,mBAAc,kDAAQ,AAAI,IAAA,QAAC;AACb,QAArB,AAAK,IAAD,YAAY,KAAK;AACrB,cAAO,KAAI;MACb;;uBAGsC,QAAe;AAApB;AACX,qBAAa,sCAAK;AACf,QAAvB,AAAM,MAAA,QAAC,SAAW,KAAK;AACuB,QAA9C,AAAO,MAAD,UAAQ,2CAAC,YAAY,AAAO,MAAD;AACnB,wBAAW,MAAW,SAC9B,eAAQ,AAAiC,yBAAtB,oCACd,MAAM;AAGjB,cAAc,mDAAQ,mBAAW,AAAS,QAAD;MAC3C;;;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/src/login/repository/login_repository.dart.lib.js"}');
  // Exports:
  return {
    src__login__repository__login_repository: login_repository
  };
}));

//# sourceMappingURL=login_repository.dart.lib.js.map
