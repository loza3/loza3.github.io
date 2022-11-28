define(['dart_sdk', 'packages/http/src/multipart_request.dart', 'packages/my_ticket_care/src/shared/shared_constants/shared_url.dart'], (function load__packages__my_ticket_care__src__booking__repository__client_subscription_repository_dart(dart_sdk, packages__http__src__multipart_request$46dart, packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const developer = dart_sdk.developer;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__src__multipart_request$46dart.http;
  const shared_url = packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart.src__shared__shared_constants__shared_url;
  var client_subscription_repository = Object.create(dart.library);
  var $toString = dartx.toString;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    IdentityMapOfString$int: () => (T.IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/booking/repository/client_subscription_repository.dart"];
  client_subscription_repository.SubscriptionRepository = class SubscriptionRepository extends core.Object {};
  (client_subscription_repository.SubscriptionRepository.new = function() {
    ;
  }).prototype = client_subscription_repository.SubscriptionRepository.prototype;
  dart.addTypeTests(client_subscription_repository.SubscriptionRepository);
  dart.addTypeCaches(client_subscription_repository.SubscriptionRepository);
  dart.setLibraryUri(client_subscription_repository.SubscriptionRepository, I[0]);
  client_subscription_repository.SubscriptionRepositoryHTTP = class SubscriptionRepositoryHTTP extends core.Object {
    isSusbcribed(personId, companyId) {
      return async.async(core.int, function* isSusbcribed() {
        let header = T.LinkedHashMapOfString$String().from(client_subscription_repository.SubscriptionRepositoryHTTP.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["Personid", personId[$toString]()]));
        header[$addAll](new (T.IdentityMapOfString$String()).from(["Companyid", companyId[$toString]()]));
        let response = (yield http.get(core.Uri.parse(shared_url.urlBooking + "/Client/Getbypersoncompanyid"), {headers: header}));
        let clientId = -1;
        try {
          clientId = core.int.as(dart.dsend(dart.dsend(convert.jsonDecode(response.body), '_get', ["data"]), '_get', ["clientId"]));
          return clientId;
        } catch (e) {
          let error = dart.getThrown(e);
          if (core.Object.is(error)) {
            developer.log(error[$toString]());
            return -1;
          } else
            throw e;
        }
      });
    }
    subscribePerson(personId, companyId) {
      return async.async(core.int, function* subscribePerson() {
        let response = (yield http.post(core.Uri.parse(shared_url.urlBooking + "Client"), {headers: client_subscription_repository.SubscriptionRepositoryHTTP.defaultHeader, body: convert.jsonEncode(new (T.IdentityMapOfString$int()).from(["companyId", companyId, "personId", personId]))}));
        let clientId = core.int.as(dart.dsend(dart.dsend(convert.jsonDecode(response.body), '_get', ["data"]), '_get', ["clientId"]));
        return clientId;
      });
    }
    static ['_#new#tearOff']() {
      return new client_subscription_repository.SubscriptionRepositoryHTTP.new();
    }
  };
  (client_subscription_repository.SubscriptionRepositoryHTTP.new = function() {
    ;
  }).prototype = client_subscription_repository.SubscriptionRepositoryHTTP.prototype;
  dart.addTypeTests(client_subscription_repository.SubscriptionRepositoryHTTP);
  dart.addTypeCaches(client_subscription_repository.SubscriptionRepositoryHTTP);
  client_subscription_repository.SubscriptionRepositoryHTTP[dart.implements] = () => [client_subscription_repository.SubscriptionRepository];
  dart.setMethodSignature(client_subscription_repository.SubscriptionRepositoryHTTP, () => ({
    __proto__: dart.getMethods(client_subscription_repository.SubscriptionRepositoryHTTP.__proto__),
    isSusbcribed: dart.fnType(async.Future$(core.int), [core.int, core.int]),
    subscribePerson: dart.fnType(async.Future$(core.int), [core.int, core.int])
  }));
  dart.setLibraryUri(client_subscription_repository.SubscriptionRepositoryHTTP, I[0]);
  dart.setStaticFieldSignature(client_subscription_repository.SubscriptionRepositoryHTTP, () => ['defaultHeader', 'token']);
  dart.defineLazy(client_subscription_repository.SubscriptionRepositoryHTTP, {
    /*client_subscription_repository.SubscriptionRepositoryHTTP.defaultHeader*/get defaultHeader() {
      return new (T.IdentityMapOfString$String()).from(["Content-Type", "application/json; charset=UTF-8", "token", client_subscription_repository.SubscriptionRepositoryHTTP.token]);
    },
    set defaultHeader(_) {},
    /*client_subscription_repository.SubscriptionRepositoryHTTP.token*/get token() {
      return "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4uY29tIiwiZXhwIjoxNjY4NjQ0NTk4fQ.ynfM2hKL9HXvV2BLzMqZO1oSLIRodZtb0zw_puxK3pfCj-4JLpyzKEJAbWCs5pb-AQ88lGICMcLN-r1Ag0gDCA";
    },
    set token(_) {}
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/booking/repository/client_subscription_repository.dart", {
    "package:my_ticket_care/src/booking/repository/client_subscription_repository.dart": client_subscription_repository
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["client_subscription_repository.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAUA;;;;;iBAW+B,UAAc;AAAnB;AACF,qBAAa,sCAAK;AACU,QAAhD,AAAO,MAAD,UAAQ,2CAAC,YAAY,AAAS,QAAD;AACe,QAAlD,AAAO,MAAD,UAAQ,2CAAC,aAAa,AAAU,SAAD;AAE5B,wBAAW,MAAM,SAClB,eAAQ,AAAuC,wBAA7B,2CACb,MAAM;AAEf,uBAAW,CAAC;AAChB;AAC0D,qBAAxD,YAA4C,WAAR,WAAzB,mBAAW,AAAS,QAAD,iBAAO,mBAAQ;AAC7C,gBAAO,SAAQ;;cACR;AAAP;AACqB,YAArB,cAAI,AAAM,KAAD;AACT,kBAAO,EAAC;;;;MAEZ;;oBAGgC,UAAc;AAAnB;AAChB,wBAAW,MAAM,UAAS,eAAS,AAAkB,wBAAP,qBAC1C,+EACH,mBAAW,wCACf,aAAa,SAAS,EACtB,YAAY,QAAQ;AAGtB,mCAA4C,WAAR,WAAzB,mBAAW,AAAS,QAAD,iBAAO,mBAAQ;AACjD,cAAO,SAAQ;MACjB;;;;;;;;EACF;;;;;;;;;;;;MAvC6B,uEAAa;YAAG,4CACzC,gBAAgB,mCAChB,SAAS;;;MAGG,+DAAK;YACf","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/repository/client_subscription_repository.dart.lib.js"}');
  // Exports:
  return {
    src__booking__repository__client_subscription_repository: client_subscription_repository
  };
}));

//# sourceMappingURL=client_subscription_repository.dart.lib.js.map
