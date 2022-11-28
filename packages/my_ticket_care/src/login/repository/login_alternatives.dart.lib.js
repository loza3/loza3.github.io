define(['dart_sdk', 'packages/my_ticket_care/src/shared/shared_constants/shared_url.dart', 'packages/my_ticket_care/src/shared/shared_utilities/token_manager.dart', 'packages/my_ticket_care/src/shared/models/person.dart', 'packages/intl/src/intl/date_format.dart', 'packages/my_ticket_care/src/shared/shared_utilities/base_repository.dart', 'packages/google_sign_in/google_sign_in.dart', 'packages/flutter_facebook_auth/flutter_facebook_auth.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__my_ticket_care__src__login__repository__login_alternatives_dart(dart_sdk, packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart, packages__my_ticket_care__src__shared__shared_utilities__token_manager$46dart, packages__my_ticket_care__src__shared__models__person$46dart, packages__intl__src__intl__date_format$46dart, packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart, packages__google_sign_in__google_sign_in$46dart, packages__flutter_facebook_auth__flutter_facebook_auth$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_url = packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart.src__shared__shared_constants__shared_url;
  const token_manager = packages__my_ticket_care__src__shared__shared_utilities__token_manager$46dart.src__shared__shared_utilities__token_manager;
  const person$ = packages__my_ticket_care__src__shared__models__person$46dart.src__shared__models__person;
  const date_format = packages__intl__src__intl__date_format$46dart.src__intl__date_format;
  const base_repository = packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart.src__shared__shared_utilities__base_repository;
  const google_sign_in = packages__google_sign_in__google_sign_in$46dart.google_sign_in;
  const flutter_facebook_auth = packages__flutter_facebook_auth__flutter_facebook_auth$46dart.flutter_facebook_auth;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  var login_alternatives = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    GoogleSignInAccountN: () => (T.GoogleSignInAccountN = dart.constFn(dart.nullable(google_sign_in.GoogleSignInAccount)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    PersonN: () => (T.PersonN = dart.constFn(dart.nullable(person$.Person)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/login/repository/login_alternatives.dart"];
  login_alternatives.LoginAlternativeRepository = class LoginAlternativeRepository extends core.Object {};
  (login_alternatives.LoginAlternativeRepository.new = function() {
    ;
  }).prototype = login_alternatives.LoginAlternativeRepository.prototype;
  dart.addTypeTests(login_alternatives.LoginAlternativeRepository);
  dart.addTypeCaches(login_alternatives.LoginAlternativeRepository);
  dart.setLibraryUri(login_alternatives.LoginAlternativeRepository, I[0]);
  login_alternatives.LoginAlternativeRepositoryHttp = class LoginAlternativeRepositoryHttp extends base_repository.BaseRepository {
    emailIsRegisted(email) {
      return async.async(core.bool, (function* emailIsRegisted() {
        let header = T.LinkedHashMapOfString$String().from(this.jsonHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["Email", email]));
        let response = (yield this.fetch(core.Uri.parse(shared_url.urlMyTicket + "Auth/accountexist"), {headers: header}));
        return dart.equals(response.data, "true") ? true : false;
      }).bind(this));
    }
    signInFacebook(email, fbId, fbToken) {
      return async.async(person$.Person, (function* signInFacebook() {
        let body = new (T.IdentityMapOfString$dynamic()).from(["facebookToken", fbToken, "faceboofUserid", fbId, "userEmail", email]);
        let response = (yield this.post(core.Uri.parse(shared_url.urlLogin + "Login/facebooklogin"), {headers: this.jsonHeader, body: convert.jsonEncode(body)}));
        token_manager.TokenManager.new({token: core.String.as(dart.dsend(response.data, '_get', ["token"]))});
        return person$.Person.fromMap(T.MapOfString$dynamic().as(dart.dsend(response.data, '_get', ["person"])));
      }).bind(this));
    }
    registerFacebook(person, fbId, fbToken) {
      return async.async(person$.Person, (function* registerFacebook() {
        person.birthday = new date_format.DateFormat.new("yyyy-MM-dd").format(new date_format.DateFormat.new("dd/MM/yyyy").parse(person.birthday));
        let body = new _js_helper.LinkedMap.from(["facebookToken", fbToken, "faceboofUserid", fbId, "userEmail", person.email, "person", person.toMap()]);
        let response = (yield this.post(core.Uri.parse(shared_url.urlLogin + "Login/facebooklogin"), {headers: this.jsonHeader, body: convert.jsonEncode(body)}));
        let data = core.Map.as(response.data);
        let user = person$.Person.fromMap(T.MapOfString$dynamic().as(data[$_get]("person")));
        token_manager.TokenManager.new({token: core.String.as(data[$_get]("token"))});
        user.facebookProfilePic = person.facebookProfilePic;
        user.facebookId = person.facebookId;
        return user;
      }).bind(this));
    }
    signInGoogle(email, token) {
      return async.async(person$.Person, (function* signInGoogle() {
        let body = new (T.IdentityMapOfString$dynamic()).from(["userEmail", email, "googleToken", token]);
        let response = (yield this.post(core.Uri.parse(shared_url.urlLogin + "Login/googlelogin"), {headers: this.jsonHeader, body: convert.jsonEncode(body)}));
        token_manager.TokenManager.new({token: core.String.as(dart.dsend(response.data, '_get', ["token"]))});
        return person$.Person.fromMap(T.MapOfString$dynamic().as(dart.dsend(response.data, '_get', ["person"])));
      }).bind(this));
    }
    registerGoogle(person, googleToken) {
      return async.async(person$.Person, (function* registerGoogle() {
        person.birthday = new date_format.DateFormat.new("yyyy-MM-dd").format(new date_format.DateFormat.new("dd/MM/yyyy").parse(person.birthday));
        let body = new _js_helper.LinkedMap.from(["googleToken", googleToken, "userEmail", person.email, "person", person.toMap()]);
        let response = (yield this.post(core.Uri.parse(shared_url.urlLogin + "Login/googlelogin"), {headers: this.jsonHeader, body: convert.jsonEncode(body)}));
        let data = core.Map.as(response.data);
        let user = person$.Person.fromMap(T.MapOfString$dynamic().as(data[$_get]("person")));
        token_manager.TokenManager.new({token: core.String.as(data[$_get]("token"))});
        return user;
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new login_alternatives.LoginAlternativeRepositoryHttp.new();
    }
  };
  (login_alternatives.LoginAlternativeRepositoryHttp.new = function() {
    login_alternatives.LoginAlternativeRepositoryHttp.__proto__.new.call(this);
    ;
  }).prototype = login_alternatives.LoginAlternativeRepositoryHttp.prototype;
  dart.addTypeTests(login_alternatives.LoginAlternativeRepositoryHttp);
  dart.addTypeCaches(login_alternatives.LoginAlternativeRepositoryHttp);
  login_alternatives.LoginAlternativeRepositoryHttp[dart.implements] = () => [login_alternatives.LoginAlternativeRepository];
  dart.setMethodSignature(login_alternatives.LoginAlternativeRepositoryHttp, () => ({
    __proto__: dart.getMethods(login_alternatives.LoginAlternativeRepositoryHttp.__proto__),
    emailIsRegisted: dart.fnType(async.Future$(core.bool), [core.String]),
    signInFacebook: dart.fnType(async.Future$(person$.Person), [core.String, core.String, core.String]),
    registerFacebook: dart.fnType(async.Future$(person$.Person), [person$.Person, core.String, core.String]),
    signInGoogle: dart.fnType(async.Future$(person$.Person), [core.String, core.String]),
    registerGoogle: dart.fnType(async.Future$(person$.Person), [person$.Person, core.String])
  }));
  dart.setLibraryUri(login_alternatives.LoginAlternativeRepositoryHttp, I[0]);
  login_alternatives.GoogleSignInApi = class GoogleSignInApi extends core.Object {
    login() {
      return async.async(T.GoogleSignInAccountN(), function* login() {
        try {
          yield login_alternatives.GoogleSignInApi._googleSignIn.signOut();
          return yield login_alternatives.GoogleSignInApi._googleSignIn.signIn();
        } catch (e) {
          let error = dart.getThrown(e);
          let _ = dart.stackTrace(e);
          if (core.Object.is(error)) {
            return null;
          } else
            throw e;
        }
      });
    }
    static ['_#new#tearOff']() {
      return new login_alternatives.GoogleSignInApi.new();
    }
  };
  (login_alternatives.GoogleSignInApi.new = function() {
    ;
  }).prototype = login_alternatives.GoogleSignInApi.prototype;
  dart.addTypeTests(login_alternatives.GoogleSignInApi);
  dart.addTypeCaches(login_alternatives.GoogleSignInApi);
  dart.setMethodSignature(login_alternatives.GoogleSignInApi, () => ({
    __proto__: dart.getMethods(login_alternatives.GoogleSignInApi.__proto__),
    login: dart.fnType(async.Future$(dart.nullable(google_sign_in.GoogleSignInAccount)), [])
  }));
  dart.setLibraryUri(login_alternatives.GoogleSignInApi, I[0]);
  dart.setStaticFieldSignature(login_alternatives.GoogleSignInApi, () => ['_googleSignIn']);
  dart.defineLazy(login_alternatives.GoogleSignInApi, {
    /*login_alternatives.GoogleSignInApi._googleSignIn*/get _googleSignIn() {
      return new google_sign_in.GoogleSignIn.new({scopes: T.JSArrayOfString().of(["email"])});
    }
  }, false);
  login_alternatives.getFacebookData = function getFacebookData() {
    return async.async(T.PersonN(), function* getFacebookData() {
      let loginResult = null;
      try {
        loginResult = (yield flutter_facebook_auth.FacebookAuth.i.login({permissions: T.JSArrayOfString().of(["public_profile", "email", "user_birthday", "user_gender"])}));
      } catch (e) {
        let error = dart.getThrown(e);
        let _ = dart.stackTrace(e);
        if (message_codec.PlatformException.is(error)) {
          return null;
        } else
          throw e;
      }
      if (loginResult.accessToken == null) {
        return null;
      }
      let data = (yield flutter_facebook_auth.FacebookAuth.i.getUserData({fields: "name,email,picture.width(200),birthday,gender"}));
      return person$.Person.fromFacebookMap(data);
    });
  };
  dart.trackLibraries("packages/my_ticket_care/src/login/repository/login_alternatives.dart", {
    "package:my_ticket_care/src/login/repository/login_alternatives.dart": login_alternatives
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_alternatives.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BA;;;;;oBAKsC;AAAR;AACN,qBAAa,sCAAK;AACP,QAA/B,AAAO,MAAD,UAAQ,2CAAC,SAAS,KAAK;AAEvB,wBAAW,MAAM,WACjB,eAAS,AAA8B,yBAAlB,gCAChB,MAAM;AAGjB,cAAsB,aAAd,AAAS,QAAD,OAAS,UAAU,OAAO;MAC5C;;mBAIW,OAAc,MAAa;AADT;AAEN,mBAAO,4CAC1B,iBAAiB,OAAO,EACxB,kBAAkB,IAAI,EACtB,aAAa,KAAK;AAEd,wBAAW,MAAM,UACjB,eAAS,AAA6B,sBAApB,kCACb,uBACH,mBAAW,IAAI;AAGoB,QAA3C,sDAAiC,WAAb,AAAS,QAAD,gBAAM;AAClC,cAAc,mDAAqB,WAAb,AAAS,QAAD,gBAAM;MACtC;;qBAIS,QACA,MACA;AAHsB;AAO5B,QAFD,AAAO,MAAD,YAAY,AAAyB,+BAAd,qBAC3B,AAAyB,+BAAd,oBAAoB,AAAO,MAAD;AAEnC,mBAAO,+BACT,iBAAiB,OAAO,EACxB,kBAAkB,IAAI,EACtB,aAAa,AAAO,MAAD,QACnB,UAAU,AAAO,MAAD;AAEN,wBAAW,MAAM,UACvB,eAAS,AAA6B,sBAApB,kCACb,uBACH,mBAAW,IAAI;AAGnB,+BAAO,AAAS,QAAD;AAEZ,mBAAc,kDAAQ,AAAI,IAAA,QAAC;AACA,QAAlC,sDAAoB,AAAI,IAAA,QAAC;AAE0B,QAAnD,AAAK,IAAD,sBAAsB,AAAO,MAAD;AACG,QAAnC,AAAK,IAAD,cAAc,AAAO,MAAD;AACxB,cAAO,KAAI;MACb;;iBAGmC,OAAc;AAAtB;AACJ,mBAAO,4CAAC,aAAa,KAAK,EAAE,eAAe,KAAK;AAC/D,wBAAW,MAAM,UACjB,eAAS,AAA2B,sBAAlB,gCACb,uBACH,mBAAW,IAAI;AAGoB,QAA3C,sDAAiC,WAAb,AAAS,QAAD,gBAAM;AAClC,cAAc,mDAAqB,WAAb,AAAS,QAAD,gBAAM;MACtC;;mBAGqC,QAAe;AAAvB;AAG1B,QAFD,AAAO,MAAD,YAAY,AAAyB,+BAAd,qBAC3B,AAAyB,+BAAd,oBAAoB,AAAO,MAAD;AAEnC,mBAAO,+BACT,eAAe,WAAW,EAC1B,aAAa,AAAO,MAAD,QACnB,UAAU,AAAO,MAAD;AAGN,wBAAW,MAAM,UACvB,eAAS,AAA2B,sBAAlB,gCACb,uBACH,mBAAW,IAAI;AAGnB,+BAAO,AAAS,QAAD;AAEZ,mBAAc,kDAAQ,AAAI,IAAA,QAAC;AACA,QAAlC,sDAAoB,AAAI,IAAA,QAAC;AAEzB,cAAO,KAAI;MACb;;;;;;;;;EACF;;;;;;;;;;;;;;;AAQoC;AAChC;AAC+B,UAA7B,MAAM,AAAc;AACpB,gBAAO,OAAM,AAAc;;cACpB;cAAO;AAAd;AACA,kBAAO;;;;MAEX;;;;;;;;EACF;;;;;;;;;;MAbe,gDAAa;YAAG,8CACnB,wBACN;;;;AAayB;AACjB;AACZ;AAMI,QALF,eAAc,MAAmB,AAAE,yDAAmB,wBACpD,kBACA,SACA,iBACA;;YAE0B;YAAO;AAAnC;AACA,gBAAO;;;;AAET,UAAI,AAAY,AAAY,WAAb;AACb,cAAO;;AAGY,kBAAO,MAAmB,AAC1C,0DAAoB;AAEzB,YAAc,gCAAgB,IAAI;IACpC","file":"../../../../../../../../../../../packages/my_ticket_care/src/login/repository/login_alternatives.dart.lib.js"}');
  // Exports:
  return {
    src__login__repository__login_alternatives: login_alternatives
  };
}));

//# sourceMappingURL=login_alternatives.dart.lib.js.map
