define(['dart_sdk', 'packages/my_ticket_care/src/shared/shared_utilities/token_manager.dart', 'packages/http/src/multipart_request.dart'], (function load__packages__my_ticket_care__src__shared__shared_utilities__base_repository_dart(dart_sdk, packages__my_ticket_care__src__shared__shared_utilities__token_manager$46dart, packages__http__src__multipart_request$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const developer = dart_sdk.developer;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const token_manager = packages__my_ticket_care__src__shared__shared_utilities__token_manager$46dart.src__shared__shared_utilities__token_manager;
  const http = packages__http__src__multipart_request$46dart.http;
  const response = packages__http__src__multipart_request$46dart.src__response;
  var base_repository = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/shared/shared_utilities/base_repository.dart"];
  var statusAPI$ = dart.privateName(base_repository, "ResponseAPI.statusAPI");
  var message$ = dart.privateName(base_repository, "ResponseAPI.message");
  var data$ = dart.privateName(base_repository, "ResponseAPI.data");
  base_repository.ResponseAPI = class ResponseAPI extends core.Object {
    get statusAPI() {
      return this[statusAPI$];
    }
    set statusAPI(value) {
      super.statusAPI = value;
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
      let statusAPI = opts && 'statusAPI' in opts ? opts.statusAPI : null;
      let data = opts && 'data' in opts ? opts.data : null;
      let message = opts && 'message' in opts ? opts.message : null;
      return new base_repository.ResponseAPI.new({statusAPI: statusAPI, data: data, message: message});
    }
    static fromMap(map) {
      return new base_repository.ResponseAPI.new({statusAPI: core.int.as(map[$_get]("status")), data: map[$_get]("data"), message: core.String.as(map[$_get]("message"))});
    }
    static ['_#fromMap#tearOff'](map) {
      return base_repository.ResponseAPI.fromMap(map);
    }
    static odioEsto(data) {
      return new base_repository.ResponseAPI.new({statusAPI: 200, data: data, message: ""});
    }
    static ['_#odioEsto#tearOff'](data) {
      return base_repository.ResponseAPI.odioEsto(data);
    }
  };
  (base_repository.ResponseAPI.new = function(opts) {
    let statusAPI = opts && 'statusAPI' in opts ? opts.statusAPI : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let message = opts && 'message' in opts ? opts.message : null;
    this[statusAPI$] = statusAPI;
    this[data$] = data;
    this[message$] = message;
    ;
  }).prototype = base_repository.ResponseAPI.prototype;
  dart.addTypeTests(base_repository.ResponseAPI);
  dart.addTypeCaches(base_repository.ResponseAPI);
  dart.setStaticMethodSignature(base_repository.ResponseAPI, () => ['fromMap', 'odioEsto']);
  dart.setLibraryUri(base_repository.ResponseAPI, I[0]);
  dart.setFieldSignature(base_repository.ResponseAPI, () => ({
    __proto__: dart.getFields(base_repository.ResponseAPI.__proto__),
    statusAPI: dart.finalFieldType(core.int),
    message: dart.finalFieldType(core.String),
    data: dart.finalFieldType(dart.dynamic)
  }));
  var defaultHeader = dart.privateName(base_repository, "BaseRepository.defaultHeader");
  var jsonHeader = dart.privateName(base_repository, "BaseRepository.jsonHeader");
  var _token = dart.privateName(base_repository, "_token");
  var _successfulResponse = dart.privateName(base_repository, "_successfulResponse");
  var _successfulResponseAPI = dart.privateName(base_repository, "_successfulResponseAPI");
  base_repository.BaseRepository = class BaseRepository extends core.Object {
    get defaultHeader() {
      return this[defaultHeader];
    }
    set defaultHeader(value) {
      this[defaultHeader] = value;
    }
    get jsonHeader() {
      return this[jsonHeader];
    }
    set jsonHeader(value) {
      this[jsonHeader] = value;
    }
    static ['_#new#tearOff']() {
      return new base_repository.BaseRepository.new();
    }
    [_successfulResponse](response) {
      if (response.statusCode === 200) {
        return true;
      }
      developer.log(response.body);
      developer.log("Codigo: " + dart.str(response.statusCode));
      return false;
    }
    [_successfulResponseAPI](response) {
      if (response.statusAPI === 200) {
        return true;
      }
      developer.log(response.message);
      developer.log("Codigo: " + dart.str(response.statusAPI));
      return false;
    }
    fetch(path, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(base_repository.ResponseAPI, (function* fetch() {
        let httpResponse = (yield http.get(path, {headers: headers}));
        if (!this[_successfulResponse](httpResponse)) {
          dart.throw(core.Exception.new("Error de petición"));
        }
        let response = null;
        try {
          let data = T.MapOfString$dynamic().as(convert.jsonDecode(httpResponse.body));
          response = base_repository.ResponseAPI.fromMap(data);
        } catch (e) {
          let exception = dart.getThrown(e);
          let _ = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            developer.log("Error resolviendo response.body, usando constructor secundario...");
            developer.log("Exception: " + dart.str(exception));
            developer.log("Response.body: " + httpResponse.body);
            response = base_repository.ResponseAPI.odioEsto(httpResponse.body);
          } else
            throw e;
        }
        if (!this[_successfulResponseAPI](response)) {
          dart.throw(core.Exception.new("Error de petición con la API"));
        }
        return response;
      }).bind(this));
    }
    post(path, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      return async.async(base_repository.ResponseAPI, (function* post() {
        let httpResponse = (yield http.post(path, {headers: headers, body: body}));
        if (!this[_successfulResponse](httpResponse)) {
          dart.throw(core.Exception.new("Error de petición"));
        }
        let data = T.MapOfString$dynamic().as(convert.jsonDecode(httpResponse.body));
        let response = base_repository.ResponseAPI.fromMap(data);
        if (!this[_successfulResponseAPI](response)) {
          dart.throw(core.Exception.new("Error de petición con la API"));
        }
        return response;
      }).bind(this));
    }
  };
  (base_repository.BaseRepository.new = function() {
    let t0;
    this[_token] = token_manager.TokenManager.getToken();
    this[defaultHeader] = new (T.IdentityMapOfString$String()).new();
    this[jsonHeader] = new (T.IdentityMapOfString$String()).from(["Access-Control-Allow-Origin", "*", "Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD", "Content-Type", "application/json; charset=UTF-8"]);
    this.defaultHeader = new (T.IdentityMapOfString$String()).from(["Content-Type", "application/json; charset=UTF-8", "token", (t0 = this[_token], t0 == null ? "" : t0)]);
  }).prototype = base_repository.BaseRepository.prototype;
  dart.addTypeTests(base_repository.BaseRepository);
  dart.addTypeCaches(base_repository.BaseRepository);
  dart.setMethodSignature(base_repository.BaseRepository, () => ({
    __proto__: dart.getMethods(base_repository.BaseRepository.__proto__),
    [_successfulResponse]: dart.fnType(core.bool, [response.Response]),
    [_successfulResponseAPI]: dart.fnType(core.bool, [base_repository.ResponseAPI]),
    fetch: dart.fnType(async.Future$(base_repository.ResponseAPI), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    post: dart.fnType(async.Future$(base_repository.ResponseAPI), [core.Uri], {body: dart.nullable(core.Object), headers: dart.nullable(core.Map$(core.String, core.String))}, {})
  }));
  dart.setLibraryUri(base_repository.BaseRepository, I[0]);
  dart.setFieldSignature(base_repository.BaseRepository, () => ({
    __proto__: dart.getFields(base_repository.BaseRepository.__proto__),
    [_token]: dart.finalFieldType(dart.nullable(core.String)),
    defaultHeader: dart.fieldType(core.Map$(core.String, core.String)),
    jsonHeader: dart.fieldType(core.Map$(core.String, core.String))
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_utilities/base_repository.dart", {
    "package:my_ticket_care/src/shared/shared_utilities/base_repository.dart": base_repository
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_repository.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUY;;;;;;IACG;;;;;;IACC;;;;;;;;;;;;mBAQmC;AAC/C,YAAO,6DACQ,AAAG,GAAA,QAAC,kBAAiB,AAAG,GAAA,QAAC,iCAAkB,AAAG,GAAA,QAAC;IAChE;;;;oBAEoC;AAClC,YAAO,iDAAuB,WAAW,IAAI,WAAW;IAC1D;;;;;;QAZgB;QACA;QACA;IAFA;IACA;IACA;;EACd;;;;;;;;;;;;;;;;;IAgBkB;;;;;;IAEA;;;;;;;;;0BAamB;AACrC,UAAI,AAAS,AAAW,QAAZ,gBAAe;AACzB,cAAO;;AAES,MAAlB,cAAI,AAAS,QAAD;AACyB,MAArC,cAAI,AAAgC,sBAArB,AAAS,QAAD;AACvB,YAAO;IACT;6BAEwC;AACtC,UAAI,AAAS,AAAU,QAAX,eAAc;AACxB,cAAO;;AAEY,MAArB,cAAI,AAAS,QAAD;AACwB,MAApC,cAAI,AAA+B,sBAApB,AAAS,QAAD;AACvB,YAAO;IACT;UAS8B;UAA4B;AAAjC;AACT,4BAAe,MAAW,SAAI,IAAI,YAAW,OAAO;AAElE,aAAK,0BAAoB,YAAY;AACC,UAApC,WAAM,mBAAU;;AAGN;AACZ;AACuB,gDAAO,mBAAW,AAAa,YAAD;AACf,UAApC,WAAuB,oCAAQ,IAAI;;cAC5B;cAAW;AAAlB;AACwE,YAAxE,cAAI;AACwB,YAA5B,cAAI,AAAuB,yBAAV,SAAS;AACgB,YAA1C,cAAI,AAAqC,oBAAnB,AAAa,YAAD;AACgB,YAAlD,WAAuB,qCAAS,AAAa,YAAD;;;;AAG9C,aAAK,6BAAuB,QAAQ;AACa,UAA/C,WAAM,mBAAU;;AAGlB,cAAO,SAAQ;MACjB;;SAE6B;UACH;UAAiB;AADnB;AAER,4BACV,MAAW,UAAK,IAAI,YAAW,OAAO,QAAQ,IAAI;AAEtD,aAAK,0BAAoB,YAAY;AACC,UAApC,WAAM,mBAAU;;AAGG,8CAAO,mBAAW,AAAa,YAAD;AAC7C,uBAAuB,oCAAQ,IAAI;AAEzC,aAAK,6BAAuB,QAAQ;AACa,UAA/C,WAAM,mBAAU;;AAGlB,cAAO,SAAQ;MACjB;;;;;IArFc,eAAsB;IAGhB,sBAAgB;IAEhB,mBAAa,2CAC/B,+BAA+B,KAC/B,gCAAgC,yCAChC,gBAAgB;AAOf,IAHD,qBAAgB,2CACd,gBAAgB,mCAChB,UAAgB,mBAAP,aAAU;EAEvB","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_utilities/base_repository.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_utilities__base_repository: base_repository
  };
}));

//# sourceMappingURL=base_repository.dart.lib.js.map
