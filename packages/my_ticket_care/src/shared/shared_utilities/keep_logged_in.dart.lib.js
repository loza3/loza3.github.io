define(['dart_sdk', 'packages/shared_preferences/shared_preferences.dart'], (function load__packages__my_ticket_care__src__shared__shared_utilities__keep_logged_in_dart(dart_sdk, packages__shared_preferences__shared_preferences$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_preferences = packages__shared_preferences__shared_preferences$46dart.shared_preferences;
  var keep_logged_in = Object.create(dart.library);
  var $split = dartx.split;
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $times = dartx['*'];
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: convert.Utf8Decoder.prototype,
        [Utf8Decoder__allowMalformed]: false
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:my_ticket_care/src/shared/shared_utilities/keep_logged_in.dart"];
  keep_logged_in.KeepLoggedInToken = class KeepLoggedInToken extends core.Object {
    static ['_#new#tearOff']() {
      return new keep_logged_in.KeepLoggedInToken.new();
    }
  };
  (keep_logged_in.KeepLoggedInToken.new = function() {
    ;
  }).prototype = keep_logged_in.KeepLoggedInToken.prototype;
  dart.addTypeTests(keep_logged_in.KeepLoggedInToken);
  dart.addTypeCaches(keep_logged_in.KeepLoggedInToken);
  dart.setLibraryUri(keep_logged_in.KeepLoggedInToken, I[0]);
  dart.setStaticFieldSignature(keep_logged_in.KeepLoggedInToken, () => ['key', 'userId']);
  dart.defineLazy(keep_logged_in.KeepLoggedInToken, {
    /*keep_logged_in.KeepLoggedInToken.key*/get key() {
      return "user_token";
    },
    /*keep_logged_in.KeepLoggedInToken.userId*/get userId() {
      return "user_id";
    }
  }, false);
  var Utf8Decoder__allowMalformed = dart.privateName(convert, "Utf8Decoder._allowMalformed");
  keep_logged_in.retrieveLoginToken = function retrieveLoginToken() {
    return async.async(T.StringN(), function* retrieveLoginToken() {
      let prefs = (yield shared_preferences.SharedPreferences.getInstance());
      let token = prefs.getString("user_token");
      if (token == null) {
        return null;
      }
      if (keep_logged_in._tokenIsValid(token)) {
        return token;
      }
      return null;
    });
  };
  keep_logged_in.retrieveUserId = function retrieveUserId() {
    return async.async(T.intN(), function* retrieveUserId() {
      let prefs = (yield shared_preferences.SharedPreferences.getInstance());
      let userId = prefs.getInt("user_id");
      if (userId == null) {
        return null;
      }
      return userId;
    });
  };
  keep_logged_in._tokenIsValid = function _tokenIsValid(token) {
    let body = null;
    try {
      let body64 = token[$split](".")[$_get](1);
      let paddingBase64 = (4 - body64.length[$modulo](4)) * (body64.length[$modulo](4) === 0 ? 0 : 1);
      body64 = body64 + "="[$times](paddingBase64);
      body = (C[0] || CT.C0).convert(convert.base64.decode(body64));
    } catch (e) {
      let exception = dart.getThrown(e);
      let _ = dart.stackTrace(e);
      if (core.Object.is(exception)) {
        return false;
      } else
        throw e;
    }
    let data = core.Map.as(convert.jsonDecode(body));
    let expiration = new core.DateTime.fromMillisecondsSinceEpoch(core.int.as(dart.dsend(data[$_get]("exp"), '*', [1000])), {isUtc: true});
    if (expiration.isAfter(new core.DateTime.now().toUtc())) {
      return true;
    }
    return false;
  };
  keep_logged_in.storeLoginToken = function storeLoginToken(token, personId) {
    return async.async(dart.void, function* storeLoginToken() {
      let prefs = (yield shared_preferences.SharedPreferences.getInstance());
      prefs.setString("user_token", token);
      prefs.setInt("user_id", personId);
    });
  };
  keep_logged_in.logOutDeleteToken = function logOutDeleteToken() {
    return async.async(dart.void, function* logOutDeleteToken() {
      let prefs = (yield shared_preferences.SharedPreferences.getInstance());
      yield prefs.remove("user_token");
      yield prefs.remove("user_id");
    });
  };
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_utilities/keep_logged_in.dart", {
    "package:my_ticket_care/src/shared/shared_utilities/keep_logged_in.dart": keep_logged_in
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keep_logged_in.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAOA;;;;;;MAFe,oCAAG;;;MACH,uCAAM;;;;;;AAGa;AAC1B,mBAAQ,MAAwB;AAE9B,kBAAQ,AAAM,KAAD;AAErB,UAAI,AAAM,KAAD;AACP,cAAO;;AAGT,UAAI,6BAAc,KAAK;AACrB,cAAO,MAAK;;AAEd,YAAO;IACT;;;AAE2B;AACnB,mBAAQ,MAAwB;AAEjC,mBAAS,AAAM,KAAD;AAEnB,UAAI,AAAO,MAAD;AACR,cAAO;;AAGT,YAAO,OAAM;IACf;;wDAE0B;AACjB;AACP;AACS,mBAAS,AAAM,AAAU,KAAX,SAAO,YAAK;AAE7B,0BACwB,CAAvB,AAAE,IAAE,AAAO,AAAO,MAAR,iBAAU,OAAO,AAAO,AAAO,AAAI,MAAZ,iBAAU,OAAK,IAAK,IAAI;AAEjC,MAA7B,SAAA,AAAO,MAAD,GAAI,AAAI,YAAE,aAAa;AAC4B,MAAzD,OAA2B,wBAAQ,AAAO,sBAAO,MAAM;;UAChD;UAAW;AAAlB;AACA,cAAO;;;;AAEL,2BAAO,mBAAW,IAAI;AACjB,qBACI,yDAAuC,WAAZ,AAAI,IAAA,QAAC,cAAS,iBAAa;AAEnE,QAAI,AAAW,UAAD,SAAkB,AAAM;AACpC,YAAO;;AAET,UAAO;EACT;4DAEoC,OAAW;AAAnB;AACpB,mBAAQ,MAAwB;AAEO,MAA7C,AAAM,KAAD,yBAAkC,KAAK;AACI,MAAhD,AAAM,KAAD,mBAAkC,QAAQ;IACjD;;;AAE8B;AACtB,mBAAQ,MAAwB;AAEG,MAAzC,MAAM,AAAM,KAAD;AACiC,MAA5C,MAAM,AAAM,KAAD;IACb","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_utilities/keep_logged_in.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_utilities__keep_logged_in: keep_logged_in
  };
}));

//# sourceMappingURL=keep_logged_in.dart.lib.js.map
