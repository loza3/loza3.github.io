define(['dart_sdk', 'packages/http/src/multipart_request.dart', 'packages/my_ticket_care/models/backend/person.dart', 'packages/my_ticket_care/models/frontend/master_response.dart'], (function load__packages__my_ticket_care__services__login__login_api_dart(dart_sdk, packages__http__src__multipart_request$46dart, packages__my_ticket_care__models__backend__person$46dart, packages__my_ticket_care__models__frontend__master_response$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const response = packages__http__src__multipart_request$46dart.src__response;
  const http = packages__http__src__multipart_request$46dart.http;
  const person$ = packages__my_ticket_care__models__backend__person$46dart.models__backend__person;
  const master_response = packages__my_ticket_care__models__frontend__master_response$46dart.models__frontend__master_response;
  var login_api = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidToResponse: () => (T.VoidToResponse = dart.constFn(dart.fnType(response.Response, [])))(),
    ResponseTodynamic: () => (T.ResponseTodynamic = dart.constFn(dart.fnType(dart.dynamic, [response.Response])))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/services/login/login_api.dart"];
  var _baseURL = dart.privateName(login_api, "_baseURL");
  var _token = dart.privateName(login_api, "_token");
  var _postJsonData = dart.privateName(login_api, "_postJsonData");
  login_api.MyTicketLogin = class MyTicketLogin extends core.Object {
    [_postJsonData](endpoint, person, token, type) {
      return async.async(core.String, (function* _postJsonData() {
        let t3, t3$, t3$0;
        let url = core._Uri.https(this[_baseURL], endpoint);
        let response = null;
        function response$35get() {
          let t1;
          t1 = response;
          return t1 == null ? dart.throw(new _internal.LateError.localNI("response")) : t1;
        }
        dart.fn(response$35get, T.VoidToResponse());
        function response$35set(response$35param) {
          if (response == null)
            return response = response$35param;
          else
            dart.throw(new _internal.LateError.localAI("response"));
        }
        dart.fn(response$35set, T.ResponseTodynamic());
        if (type === "login") {
          response$35set(yield http.post(url, {headers: new (T.IdentityMapOfString$String()).from(["Content-Type", "application/json; charset=UTF-8", "token", (t3 = token, t3 == null ? "" : t3)]), body: person$.personLoginToJson(person)}));
        }
        if (type === "create") {
          response$35set(yield http.post(url, {headers: new (T.IdentityMapOfString$String()).from(["Content-Type", "application/json; charset=UTF-8", "token", (t3$ = token, t3$ == null ? "" : t3$)]), body: person$.personCreateToJson(person)}));
        }
        if (type === "forgot") {
          response$35set(yield http.post(url, {headers: new (T.IdentityMapOfString$String()).from(["Content-Type", "application/json; charset=UTF-8", "token", (t3$0 = token, t3$0 == null ? "" : t3$0)]), body: convert.json.encode(person.email)}));
        }
        return response$35get().body;
      }).bind(this));
    }
    loginPerson(person, type = "login") {
      return async.async(master_response.MasterResponse, (function* loginPerson() {
        let data = (yield this[_postJsonData]("/api/Login/login", person, "", type));
        let masterResponse = master_response.masterResponseFromJsonLogin(data);
        return masterResponse;
      }).bind(this));
    }
    createPerson(person, type = "create") {
      return async.async(master_response.MasterResponse, (function* createPerson() {
        let data = (yield this[_postJsonData]("/api/Login/register", person, this[_token], type));
        let masterResponse = master_response.masterResponseFromJsonCreate(data);
        return masterResponse;
      }).bind(this));
    }
    forgotPassword(person, type = "forgot") {
      return async.async(master_response.MasterResponse, (function* forgotPassword() {
        let data = (yield this[_postJsonData]("/api/Login/recover", person, this[_token], type));
        let masterResponse = master_response.masterResponseFromJsonForgotPassword(data);
        return masterResponse;
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new login_api.MyTicketLogin.new();
    }
  };
  (login_api.MyTicketLogin.new = function() {
    this[_baseURL] = "myticketauthservice.azurewebsites.net";
    this[_token] = "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmljb2xhc21hZHVyb0BnbWFpbC5jb20iLCJleHAiOjE2NjcwMDE2MTh9.Bz-oidWN1KSdOI23wVXM_Ot4_vuKTf7TNOS4EfmXMICK-vLzrDgL8mBH0qxN_Vmn-4k-2I8wBcf5I6etsCJPog";
    ;
  }).prototype = login_api.MyTicketLogin.prototype;
  dart.addTypeTests(login_api.MyTicketLogin);
  dart.addTypeCaches(login_api.MyTicketLogin);
  dart.setMethodSignature(login_api.MyTicketLogin, () => ({
    __proto__: dart.getMethods(login_api.MyTicketLogin.__proto__),
    [_postJsonData]: dart.fnType(async.Future$(core.String), [core.String, person$.Person, dart.nullable(core.String), core.String]),
    loginPerson: dart.fnType(async.Future$(master_response.MasterResponse), [person$.Person], [core.String]),
    createPerson: dart.fnType(async.Future$(master_response.MasterResponse), [person$.Person], [core.String]),
    forgotPassword: dart.fnType(async.Future$(master_response.MasterResponse), [person$.Person], [core.String])
  }));
  dart.setLibraryUri(login_api.MyTicketLogin, I[0]);
  dart.setFieldSignature(login_api.MyTicketLogin, () => ({
    __proto__: dart.getFields(login_api.MyTicketLogin.__proto__),
    [_baseURL]: dart.finalFieldType(core.String),
    [_token]: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/my_ticket_care/services/login/login_api.dart", {
    "package:my_ticket_care/services/login/login_api.dart": login_api
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_api.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAWW,UAAiB,QAAgB,OAAc;AAD5B;;AAEpB,kBAAU,gBAAM,gBAAU,QAAQ;AACf;;;;;;;;;;;;;;AAEzB,YAAI,AAAK,IAAD,KAAI;AAOT,UAND,eAAW,MAAW,UAAK,GAAG,YACH,2CACvB,gBAAgB,mCAChB,UAAe,KAAN,KAAK,EAAL,aAAS,kBAEd,0BAAkB,MAAM;;AAGlC,YAAI,AAAK,IAAD,KAAI;AAOT,UAND,eAAW,MAAW,UAAK,GAAG,YACH,2CACvB,gBAAgB,mCAChB,UAAe,MAAN,KAAK,EAAL,cAAS,mBAEd,2BAAmB,MAAM;;AAGnC,YAAI,AAAK,IAAD,KAAI;AAOT,UAND,eAAW,MAAW,UAAK,GAAG,YACH,2CACvB,gBAAgB,mCAChB,UAAe,OAAN,KAAK,EAAL,eAAS,oBAEd,AAAK,oBAAO,AAAO,MAAD;;AAI5B,cAAO,AAAS;MAClB;;gBAE0C,QAAgB;AAAxB;AAC1B,oBAAO,MAAM,oBAAc,oBAAoB,MAAM,EAAE,IAAI,IAAI;AAC/D,6BAAiB,4CAA4B,IAAI;AACvD,cAAO,eAAc;MACvB;;iBAE2C,QAAgB;AAAxB;AAC3B,oBAAO,MAAM,oBAAc,uBAAuB,MAAM,EAAE,cAAQ,IAAI;AACtE,6BAAiB,6CAA6B,IAAI;AACxD,cAAO,eAAc;MACvB;;mBAE6C,QAAgB;AAAxB;AAC7B,oBAAO,MAAM,oBAAc,sBAAsB,MAAM,EAAE,cAAQ,IAAI;AACrE,6BAAiB,qDAAqC,IAAI;AAChE,cAAO,eAAc;MACvB;;;;;;;IAvDa,iBAAW;IACX,eAAW;;EAuD1B","file":"../../../../../../../../../../packages/my_ticket_care/services/login/login_api.dart.lib.js"}');
  // Exports:
  return {
    services__login__login_api: login_api
  };
}));

//# sourceMappingURL=login_api.dart.lib.js.map
