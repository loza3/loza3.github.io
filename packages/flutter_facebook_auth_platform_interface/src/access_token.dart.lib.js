define(['dart_sdk'], (function load__packages__flutter_facebook_auth_platform_interface__src__access_token_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var access_token = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_facebook_auth_platform_interface/src/access_token.dart"];
  var expires$ = dart.privateName(access_token, "AccessToken.expires");
  var lastRefresh$ = dart.privateName(access_token, "AccessToken.lastRefresh");
  var userId$ = dart.privateName(access_token, "AccessToken.userId");
  var token$ = dart.privateName(access_token, "AccessToken.token");
  var applicationId$ = dart.privateName(access_token, "AccessToken.applicationId");
  var graphDomain$ = dart.privateName(access_token, "AccessToken.graphDomain");
  var declinedPermissions$ = dart.privateName(access_token, "AccessToken.declinedPermissions");
  var grantedPermissions$ = dart.privateName(access_token, "AccessToken.grantedPermissions");
  var isExpired$ = dart.privateName(access_token, "AccessToken.isExpired");
  access_token.AccessToken = class AccessToken extends core.Object {
    get expires() {
      return this[expires$];
    }
    set expires(value) {
      super.expires = value;
    }
    get lastRefresh() {
      return this[lastRefresh$];
    }
    set lastRefresh(value) {
      super.lastRefresh = value;
    }
    get userId() {
      return this[userId$];
    }
    set userId(value) {
      super.userId = value;
    }
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    get applicationId() {
      return this[applicationId$];
    }
    set applicationId(value) {
      super.applicationId = value;
    }
    get graphDomain() {
      return this[graphDomain$];
    }
    set graphDomain(value) {
      super.graphDomain = value;
    }
    get declinedPermissions() {
      return this[declinedPermissions$];
    }
    set declinedPermissions(value) {
      super.declinedPermissions = value;
    }
    get grantedPermissions() {
      return this[grantedPermissions$];
    }
    set grantedPermissions(value) {
      super.grantedPermissions = value;
    }
    get isExpired() {
      return this[isExpired$];
    }
    set isExpired(value) {
      super.isExpired = value;
    }
    static ['_#new#tearOff'](opts) {
      let declinedPermissions = opts && 'declinedPermissions' in opts ? opts.declinedPermissions : null;
      let grantedPermissions = opts && 'grantedPermissions' in opts ? opts.grantedPermissions : null;
      let userId = opts && 'userId' in opts ? opts.userId : null;
      let expires = opts && 'expires' in opts ? opts.expires : null;
      let lastRefresh = opts && 'lastRefresh' in opts ? opts.lastRefresh : null;
      let token = opts && 'token' in opts ? opts.token : null;
      let applicationId = opts && 'applicationId' in opts ? opts.applicationId : null;
      let graphDomain = opts && 'graphDomain' in opts ? opts.graphDomain : null;
      let isExpired = opts && 'isExpired' in opts ? opts.isExpired : null;
      return new access_token.AccessToken.new({declinedPermissions: declinedPermissions, grantedPermissions: grantedPermissions, userId: userId, expires: expires, lastRefresh: lastRefresh, token: token, applicationId: applicationId, graphDomain: graphDomain, isExpired: isExpired});
    }
    static fromJson(json) {
      return new access_token.AccessToken.new({userId: core.String.as(json[$_get]("userId")), token: core.String.as(json[$_get]("token")), expires: new core.DateTime.fromMillisecondsSinceEpoch(core.int.as(dart.dsend(json[$_get]("expires"), 'clamp', [-8640000000000000.0, 8640000000000000.0]))), lastRefresh: new core.DateTime.fromMillisecondsSinceEpoch(core.int.as(json[$_get]("lastRefresh"))), applicationId: core.String.as(json[$_get]("applicationId")), graphDomain: T.StringN().as(json[$_get]("graphDomain")), isExpired: core.bool.as(json[$_get]("isExpired")), declinedPermissions: json[$_get]("declinedPermissions") != null ? T.ListOfString().from(core.Iterable.as(json[$_get]("declinedPermissions"))) : null, grantedPermissions: json[$_get]("grantedPermissions") != null ? T.ListOfString().from(core.Iterable.as(json[$_get]("grantedPermissions"))) : null});
    }
    static ['_#fromJson#tearOff'](json) {
      return access_token.AccessToken.fromJson(json);
    }
    toJson() {
      return new (T.IdentityMapOfString$dynamic()).from(["userId", this.userId, "token", this.token, "expires", this.expires.toIso8601String(), "lastRefresh", this.lastRefresh.toIso8601String(), "applicationId", this.applicationId, "graphDomain", this.graphDomain, "isExpired", this.isExpired, "grantedPermissions", this.grantedPermissions, "declinedPermissions", this.declinedPermissions]);
    }
  };
  (access_token.AccessToken.new = function(opts) {
    let declinedPermissions = opts && 'declinedPermissions' in opts ? opts.declinedPermissions : null;
    let grantedPermissions = opts && 'grantedPermissions' in opts ? opts.grantedPermissions : null;
    let userId = opts && 'userId' in opts ? opts.userId : null;
    let expires = opts && 'expires' in opts ? opts.expires : null;
    let lastRefresh = opts && 'lastRefresh' in opts ? opts.lastRefresh : null;
    let token = opts && 'token' in opts ? opts.token : null;
    let applicationId = opts && 'applicationId' in opts ? opts.applicationId : null;
    let graphDomain = opts && 'graphDomain' in opts ? opts.graphDomain : null;
    let isExpired = opts && 'isExpired' in opts ? opts.isExpired : null;
    this[declinedPermissions$] = declinedPermissions;
    this[grantedPermissions$] = grantedPermissions;
    this[userId$] = userId;
    this[expires$] = expires;
    this[lastRefresh$] = lastRefresh;
    this[token$] = token;
    this[applicationId$] = applicationId;
    this[graphDomain$] = graphDomain;
    this[isExpired$] = isExpired;
    ;
  }).prototype = access_token.AccessToken.prototype;
  dart.addTypeTests(access_token.AccessToken);
  dart.addTypeCaches(access_token.AccessToken);
  dart.setMethodSignature(access_token.AccessToken, () => ({
    __proto__: dart.getMethods(access_token.AccessToken.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setStaticMethodSignature(access_token.AccessToken, () => ['fromJson']);
  dart.setLibraryUri(access_token.AccessToken, I[0]);
  dart.setFieldSignature(access_token.AccessToken, () => ({
    __proto__: dart.getFields(access_token.AccessToken.__proto__),
    expires: dart.finalFieldType(core.DateTime),
    lastRefresh: dart.finalFieldType(core.DateTime),
    userId: dart.finalFieldType(core.String),
    token: dart.finalFieldType(core.String),
    applicationId: dart.finalFieldType(core.String),
    graphDomain: dart.finalFieldType(dart.nullable(core.String)),
    declinedPermissions: dart.finalFieldType(dart.nullable(core.List$(core.String))),
    grantedPermissions: dart.finalFieldType(dart.nullable(core.List$(core.String))),
    isExpired: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(access_token, {
    /*access_token.maxMillisecondsSinceEpoch*/get maxMillisecondsSinceEpoch() {
      return 8640000000000000.0;
    },
    /*access_token.minMillisecondsSinceEpoch*/get minMillisecondsSinceEpoch() {
      return -8640000000000000.0;
    }
  }, false);
  dart.trackLibraries("packages/flutter_facebook_auth_platform_interface/src/access_token.dart", {
    "package:flutter_facebook_auth_platform_interface/src/access_token.dart": access_token
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["access_token.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMiB;;;;;;IAGA;;;;;;IAGF;;;;;;IAGA;;;;;;IAGA;;;;;;IAGC;;;;;;IAGM;;;;;;IAGA;;;;;;IAGT;;;;;;;;;;;;;;;;;;oBAiBuC;AAChD,YAAO,0DACG,AAAI,IAAA,QAAC,kCACN,AAAI,IAAA,QAAC,oBACM,yDACA,WAAhB,AAAI,IAAA,QAAC,gFAKe,yDAA2B,AAAI,IAAA,QAAC,gDACvC,AAAI,IAAA,QAAC,+CACP,AAAI,IAAA,QAAC,yCACP,AAAI,IAAA,QAAC,oCACK,AAAI,AAAwB,IAAxB,QAAC,iCACpB,uCAAkB,AAAI,IAAA,QAAC,2BACvB,0BACc,AAAI,AAAuB,IAAvB,QAAC,gCACnB,uCAAkB,AAAI,IAAA,QAAC,0BACvB;IAEV;;;;;AAGiC,yDAC3B,UAAU,aACV,SAAS,YACT,WAAW,AAAQ,gCACnB,eAAe,AAAY,oCAC3B,iBAAiB,oBACjB,eAAe,kBACf,aAAa,gBACb,sBAAsB,yBACtB,uBAAuB;IACxB;;;QAhDW;QACA;QACA;QACA;QACA;QACA;QACA;QACT;QACS;IARA;IACA;IACA;IACA;IACA;IACA;IACA;IACT;IACS;;EACd;;;;;;;;;;;;;;;;;;;;;;MA1CE,sCAAyB;;;MACzB,sCAAyB","file":"../../../../../../../../../../../packages/flutter_facebook_auth_platform_interface/src/access_token.dart.lib.js"}');
  // Exports:
  return {
    src__access_token: access_token
  };
}));

//# sourceMappingURL=access_token.dart.lib.js.map
