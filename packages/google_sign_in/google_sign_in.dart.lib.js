define(['dart_sdk', 'packages/google_sign_in_platform_interface/src/types.dart', 'packages/google_sign_in_platform_interface/src/utils.dart', 'packages/google_sign_in/src/common.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__google_sign_in__google_sign_in_dart(dart_sdk, packages__google_sign_in_platform_interface__src__types$46dart, packages__google_sign_in_platform_interface__src__utils$46dart, packages__google_sign_in__src__common$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__google_sign_in_platform_interface__src__types$46dart.src__types;
  const google_sign_in_platform_interface = packages__google_sign_in_platform_interface__src__utils$46dart.google_sign_in_platform_interface;
  const common = packages__google_sign_in__src__common$46dart.src__common;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  var google_sign_in = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    GoogleSignInAccountN: () => (T.GoogleSignInAccountN = dart.constFn(dart.nullable(google_sign_in.GoogleSignInAccount)))(),
    StreamControllerOfGoogleSignInAccountN: () => (T.StreamControllerOfGoogleSignInAccountN = dart.constFn(async.StreamController$(T.GoogleSignInAccountN())))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    CompleterOfvoid: () => (T.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    FutureOrNOfvoidTovoid: () => (T.FutureOrNOfvoidTovoid = dart.constFn(dart.fnType(dart.void, [], [dart.void])))(),
    FutureOrOfGoogleSignInAccountN: () => (T.FutureOrOfGoogleSignInAccountN = dart.constFn(async.FutureOr$(T.GoogleSignInAccountN())))(),
    voidToFutureOrOfGoogleSignInAccountN: () => (T.voidToFutureOrOfGoogleSignInAccountN = dart.constFn(dart.fnType(T.FutureOrOfGoogleSignInAccountN(), [dart.void])))(),
    dynamicTobool: () => (T.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: types.SignInOption.prototype,
        [_Enum__name]: "standard",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.constList([], core.String);
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "package:google_sign_in/google_sign_in.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/google_sign_in-5.4.2/lib/google_sign_in.dart"
  ];
  var _data$ = dart.privateName(google_sign_in, "_data");
  google_sign_in.GoogleSignInAuthentication = class GoogleSignInAuthentication extends core.Object {
    static ['_#_#tearOff'](_data) {
      return new google_sign_in.GoogleSignInAuthentication.__(_data);
    }
    get idToken() {
      return this[_data$].idToken;
    }
    get accessToken() {
      return this[_data$].accessToken;
    }
    get serverAuthCode() {
      return this[_data$].serverAuthCode;
    }
    toString() {
      return "GoogleSignInAuthentication:" + dart.str(this[_data$]);
    }
  };
  (google_sign_in.GoogleSignInAuthentication.__ = function(_data) {
    this[_data$] = _data;
    ;
  }).prototype = google_sign_in.GoogleSignInAuthentication.prototype;
  dart.addTypeTests(google_sign_in.GoogleSignInAuthentication);
  dart.addTypeCaches(google_sign_in.GoogleSignInAuthentication);
  dart.setGetterSignature(google_sign_in.GoogleSignInAuthentication, () => ({
    __proto__: dart.getGetters(google_sign_in.GoogleSignInAuthentication.__proto__),
    idToken: dart.nullable(core.String),
    accessToken: dart.nullable(core.String),
    serverAuthCode: dart.nullable(core.String)
  }));
  dart.setLibraryUri(google_sign_in.GoogleSignInAuthentication, I[0]);
  dart.setFieldSignature(google_sign_in.GoogleSignInAuthentication, () => ({
    __proto__: dart.getFields(google_sign_in.GoogleSignInAuthentication.__proto__),
    [_data$]: dart.finalFieldType(types.GoogleSignInTokenData)
  }));
  dart.defineExtensionMethods(google_sign_in.GoogleSignInAuthentication, ['toString']);
  var displayName = dart.privateName(google_sign_in, "GoogleSignInAccount.displayName");
  var email = dart.privateName(google_sign_in, "GoogleSignInAccount.email");
  var id = dart.privateName(google_sign_in, "GoogleSignInAccount.id");
  var photoUrl = dart.privateName(google_sign_in, "GoogleSignInAccount.photoUrl");
  var serverAuthCode = dart.privateName(google_sign_in, "GoogleSignInAccount.serverAuthCode");
  var _googleSignIn$ = dart.privateName(google_sign_in, "_googleSignIn");
  var _idToken = dart.privateName(google_sign_in, "_idToken");
  google_sign_in.GoogleSignInAccount = class GoogleSignInAccount extends core.Object {
    get displayName() {
      return this[displayName];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get email() {
      return this[email];
    }
    set email(value) {
      super.email = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    get photoUrl() {
      return this[photoUrl];
    }
    set photoUrl(value) {
      super.photoUrl = value;
    }
    get serverAuthCode() {
      return this[serverAuthCode];
    }
    set serverAuthCode(value) {
      super.serverAuthCode = value;
    }
    static ['_#_#tearOff'](_googleSignIn, data) {
      return new google_sign_in.GoogleSignInAccount.__(_googleSignIn, data);
    }
    get authentication() {
      return async.async(google_sign_in.GoogleSignInAuthentication, (function* authentication() {
        let t0;
        if (!dart.equals(this[_googleSignIn$].currentUser, this)) {
          dart.throw(new core.StateError.new("User is no longer signed in."));
        }
        let response = (yield google_sign_in_platform_interface.GoogleSignInPlatform.instance.getTokens({email: this.email, shouldRecoverAuth: true}));
        t0 = response;
        t0.idToken == null ? t0.idToken = this[_idToken] : null;
        return new google_sign_in.GoogleSignInAuthentication.__(response);
      }).bind(this));
    }
    get authHeaders() {
      return async.async(T.MapOfString$String(), (function* authHeaders() {
        let token = (yield this.authentication).accessToken;
        return new (T.IdentityMapOfString$String()).from(["Authorization", "Bearer " + dart.str(token), "X-Goog-AuthUser", "0"]);
      }).bind(this));
    }
    clearAuthCache() {
      return async.async(dart.void, (function* clearAuthCache() {
        let token = dart.nullCheck((yield this.authentication).accessToken);
        yield google_sign_in_platform_interface.GoogleSignInPlatform.instance.clearAuthCache({token: token});
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!google_sign_in.GoogleSignInAccount.is(other)) {
        return false;
      }
      let otherAccount = other;
      return this.displayName == otherAccount.displayName && this.email === otherAccount.email && this.id === otherAccount.id && this.photoUrl == otherAccount.photoUrl && this.serverAuthCode == otherAccount.serverAuthCode && this[_idToken] == otherAccount[_idToken];
    }
    get hashCode() {
      return core.Object.hash(this.displayName, this.email, this.id, this.photoUrl, this[_idToken], this.serverAuthCode);
    }
    toString() {
      let data = new (T.IdentityMapOfString$dynamic()).from(["displayName", this.displayName, "email", this.email, "id", this.id, "photoUrl", this.photoUrl, "serverAuthCode", this.serverAuthCode]);
      return "GoogleSignInAccount:" + dart.str(data);
    }
  };
  (google_sign_in.GoogleSignInAccount.__ = function(_googleSignIn, data) {
    this[_googleSignIn$] = _googleSignIn;
    this[displayName] = data.displayName;
    this[email] = data.email;
    this[id] = data.id;
    this[photoUrl] = data.photoUrl;
    this[serverAuthCode] = data.serverAuthCode;
    this[_idToken] = data.idToken;
    if (!(this.id !== null)) dart.assertFailed(null, I[1], 52, 12, "id != null");
  }).prototype = google_sign_in.GoogleSignInAccount.prototype;
  dart.addTypeTests(google_sign_in.GoogleSignInAccount);
  dart.addTypeCaches(google_sign_in.GoogleSignInAccount);
  google_sign_in.GoogleSignInAccount[dart.implements] = () => [common.GoogleIdentity];
  dart.setMethodSignature(google_sign_in.GoogleSignInAccount, () => ({
    __proto__: dart.getMethods(google_sign_in.GoogleSignInAccount.__proto__),
    clearAuthCache: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(google_sign_in.GoogleSignInAccount, () => ({
    __proto__: dart.getGetters(google_sign_in.GoogleSignInAccount.__proto__),
    authentication: async.Future$(google_sign_in.GoogleSignInAuthentication),
    authHeaders: async.Future$(core.Map$(core.String, core.String))
  }));
  dart.setLibraryUri(google_sign_in.GoogleSignInAccount, I[0]);
  dart.setFieldSignature(google_sign_in.GoogleSignInAccount, () => ({
    __proto__: dart.getFields(google_sign_in.GoogleSignInAccount.__proto__),
    displayName: dart.finalFieldType(dart.nullable(core.String)),
    email: dart.finalFieldType(core.String),
    id: dart.finalFieldType(core.String),
    photoUrl: dart.finalFieldType(dart.nullable(core.String)),
    serverAuthCode: dart.finalFieldType(dart.nullable(core.String)),
    [_idToken]: dart.finalFieldType(dart.nullable(core.String)),
    [_googleSignIn$]: dart.finalFieldType(google_sign_in.GoogleSignIn)
  }));
  dart.setStaticFieldSignature(google_sign_in.GoogleSignInAccount, () => ['kFailedToRecoverAuthError', 'kUserRecoverableAuthError']);
  dart.defineExtensionMethods(google_sign_in.GoogleSignInAccount, ['_equals', 'toString']);
  dart.defineExtensionAccessors(google_sign_in.GoogleSignInAccount, ['hashCode']);
  dart.defineLazy(google_sign_in.GoogleSignInAccount, {
    /*google_sign_in.GoogleSignInAccount.kFailedToRecoverAuthError*/get kFailedToRecoverAuthError() {
      return "failed_to_recover_auth";
    },
    /*google_sign_in.GoogleSignInAccount.kUserRecoverableAuthError*/get kUserRecoverableAuthError() {
      return "user_recoverable_auth";
    }
  }, false);
  var signInOption$ = dart.privateName(google_sign_in, "GoogleSignIn.signInOption");
  var scopes$ = dart.privateName(google_sign_in, "GoogleSignIn.scopes");
  var hostedDomain$ = dart.privateName(google_sign_in, "GoogleSignIn.hostedDomain");
  var clientId$ = dart.privateName(google_sign_in, "GoogleSignIn.clientId");
  var serverClientId$ = dart.privateName(google_sign_in, "GoogleSignIn.serverClientId");
  var forceCodeForRefreshToken$ = dart.privateName(google_sign_in, "GoogleSignIn.forceCodeForRefreshToken");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _currentUserController = dart.privateName(google_sign_in, "_currentUserController");
  var _initialization = dart.privateName(google_sign_in, "_initialization");
  var _lastMethodCall = dart.privateName(google_sign_in, "_lastMethodCall");
  var _currentUser = dart.privateName(google_sign_in, "_currentUser");
  var _ensureInitialized = dart.privateName(google_sign_in, "_ensureInitialized");
  var _setCurrentUser = dart.privateName(google_sign_in, "_setCurrentUser");
  var _callMethod = dart.privateName(google_sign_in, "_callMethod");
  var _addMethodCall = dart.privateName(google_sign_in, "_addMethodCall");
  google_sign_in.GoogleSignIn = class GoogleSignIn extends core.Object {
    get signInOption() {
      return this[signInOption$];
    }
    set signInOption(value) {
      super.signInOption = value;
    }
    get scopes() {
      return this[scopes$];
    }
    set scopes(value) {
      super.scopes = value;
    }
    get hostedDomain() {
      return this[hostedDomain$];
    }
    set hostedDomain(value) {
      super.hostedDomain = value;
    }
    get clientId() {
      return this[clientId$];
    }
    set clientId(value) {
      super.clientId = value;
    }
    get serverClientId() {
      return this[serverClientId$];
    }
    set serverClientId(value) {
      super.serverClientId = value;
    }
    get forceCodeForRefreshToken() {
      return this[forceCodeForRefreshToken$];
    }
    set forceCodeForRefreshToken(value) {
      super.forceCodeForRefreshToken = value;
    }
    static ['_#new#tearOff'](opts) {
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C[0] || CT.C0;
      let scopes = opts && 'scopes' in opts ? opts.scopes : C[1] || CT.C1;
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      let serverClientId = opts && 'serverClientId' in opts ? opts.serverClientId : null;
      let forceCodeForRefreshToken = opts && 'forceCodeForRefreshToken' in opts ? opts.forceCodeForRefreshToken : false;
      return new google_sign_in.GoogleSignIn.new({signInOption: signInOption, scopes: scopes, hostedDomain: hostedDomain, clientId: clientId, serverClientId: serverClientId, forceCodeForRefreshToken: forceCodeForRefreshToken});
    }
    static standard(opts) {
      let scopes = opts && 'scopes' in opts ? opts.scopes : C[1] || CT.C1;
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      return new google_sign_in.GoogleSignIn.new({scopes: scopes, hostedDomain: hostedDomain});
    }
    static ['_#standard#tearOff'](opts) {
      let scopes = opts && 'scopes' in opts ? opts.scopes : C[1] || CT.C1;
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      return google_sign_in.GoogleSignIn.standard({scopes: scopes, hostedDomain: hostedDomain});
    }
    static games() {
      return new google_sign_in.GoogleSignIn.new({signInOption: types.SignInOption.games});
    }
    static ['_#games#tearOff']() {
      return google_sign_in.GoogleSignIn.games();
    }
    get onCurrentUserChanged() {
      return this[_currentUserController].stream;
    }
    [_callMethod](method) {
      return async.async(T.GoogleSignInAccountN(), (function* _callMethod() {
        yield this[_ensureInitialized]();
        let response = (yield dart.dcall(method, []));
        return this[_setCurrentUser](response != null && types.GoogleSignInUserData.is(response) ? new google_sign_in.GoogleSignInAccount.__(this, response) : null);
      }).bind(this));
    }
    [_setCurrentUser](currentUser) {
      if (!dart.equals(currentUser, this[_currentUser])) {
        this[_currentUser] = currentUser;
        this[_currentUserController].add(this[_currentUser]);
      }
      return this[_currentUser];
    }
    [_ensureInitialized]() {
      let t1, t0;
      t0 = this[_initialization];
      return t0 == null ? this[_initialization] = (t1 = google_sign_in_platform_interface.GoogleSignInPlatform.instance.initWithParams(new types.SignInInitParameters.new({signInOption: this.signInOption, scopes: this.scopes, hostedDomain: this.hostedDomain, clientId: this.clientId, serverClientId: this.serverClientId, forceCodeForRefreshToken: this.forceCodeForRefreshToken})), (() => {
        t1.catchError(dart.fn(_ => {
          this[_initialization] = null;
        }, T.dynamicToNull()));
        return t1;
      })()) : t0;
    }
    static _waitFor(future) {
      let completer = T.CompleterOfvoid().new();
      future.whenComplete(T.FutureOrNOfvoidTovoid().as(dart.bind(completer, 'complete'))).catchError(dart.fn(_ => {
      }, T.dynamicToNull()));
      return completer.future;
    }
    [_addMethodCall](method, opts) {
      let canSkipCall = opts && 'canSkipCall' in opts ? opts.canSkipCall : false;
      return async.async(T.GoogleSignInAccountN(), (function* _addMethodCall() {
        let response = null;
        if (this[_lastMethodCall] == null) {
          response = this[_callMethod](method);
        } else {
          response = dart.nullCheck(this[_lastMethodCall]).then(T.GoogleSignInAccountN(), dart.fn(_ => {
            if (canSkipCall && this[_currentUser] != null) {
              return this[_currentUser];
            }
            return this[_callMethod](method);
          }, T.voidToFutureOrOfGoogleSignInAccountN()));
        }
        this[_lastMethodCall] = google_sign_in.GoogleSignIn._waitFor(response);
        return response;
      }).bind(this));
    }
    get currentUser() {
      return this[_currentUser];
    }
    signInSilently(opts) {
      let suppressErrors = opts && 'suppressErrors' in opts ? opts.suppressErrors : true;
      let reAuthenticate = opts && 'reAuthenticate' in opts ? opts.reAuthenticate : false;
      return async.async(T.GoogleSignInAccountN(), (function* signInSilently() {
        try {
          return yield this[_addMethodCall](dart.bind(google_sign_in_platform_interface.GoogleSignInPlatform.instance, 'signInSilently'), {canSkipCall: !reAuthenticate});
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
            if (suppressErrors) {
              return null;
            } else {
              dart.rethrow(e);
            }
          } else
            throw e;
        }
      }).bind(this));
    }
    isSignedIn() {
      return async.async(core.bool, (function* isSignedIn() {
        yield this[_ensureInitialized]();
        return google_sign_in_platform_interface.GoogleSignInPlatform.instance.isSignedIn();
      }).bind(this));
    }
    signIn() {
      let result = this[_addMethodCall](dart.bind(google_sign_in_platform_interface.GoogleSignInPlatform.instance, 'signIn'), {canSkipCall: true});
      function isCanceled(error) {
        return message_codec.PlatformException.is(error) && error.code === "sign_in_canceled";
      }
      dart.fn(isCanceled, T.dynamicTobool());
      return result.catchError(dart.fn(_ => null, T.dynamicToNull()), {test: isCanceled});
    }
    signOut() {
      return this[_addMethodCall](dart.bind(google_sign_in_platform_interface.GoogleSignInPlatform.instance, 'signOut'));
    }
    disconnect() {
      return this[_addMethodCall](dart.bind(google_sign_in_platform_interface.GoogleSignInPlatform.instance, 'disconnect'));
    }
    requestScopes(scopes) {
      return async.async(core.bool, (function* requestScopes() {
        yield this[_ensureInitialized]();
        return google_sign_in_platform_interface.GoogleSignInPlatform.instance.requestScopes(scopes);
      }).bind(this));
    }
  };
  (google_sign_in.GoogleSignIn.new = function(opts) {
    let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C[0] || CT.C0;
    let scopes = opts && 'scopes' in opts ? opts.scopes : C[1] || CT.C1;
    let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
    let clientId = opts && 'clientId' in opts ? opts.clientId : null;
    let serverClientId = opts && 'serverClientId' in opts ? opts.serverClientId : null;
    let forceCodeForRefreshToken = opts && 'forceCodeForRefreshToken' in opts ? opts.forceCodeForRefreshToken : false;
    this[_currentUserController] = T.StreamControllerOfGoogleSignInAccountN().broadcast();
    this[_initialization] = null;
    this[_lastMethodCall] = null;
    this[_currentUser] = null;
    this[signInOption$] = signInOption;
    this[scopes$] = scopes;
    this[hostedDomain$] = hostedDomain;
    this[clientId$] = clientId;
    this[serverClientId$] = serverClientId;
    this[forceCodeForRefreshToken$] = forceCodeForRefreshToken;
    ;
  }).prototype = google_sign_in.GoogleSignIn.prototype;
  dart.addTypeTests(google_sign_in.GoogleSignIn);
  dart.addTypeCaches(google_sign_in.GoogleSignIn);
  dart.setMethodSignature(google_sign_in.GoogleSignIn, () => ({
    __proto__: dart.getMethods(google_sign_in.GoogleSignIn.__proto__),
    [_callMethod]: dart.fnType(async.Future$(dart.nullable(google_sign_in.GoogleSignInAccount)), [core.Function]),
    [_setCurrentUser]: dart.fnType(dart.nullable(google_sign_in.GoogleSignInAccount), [dart.nullable(google_sign_in.GoogleSignInAccount)]),
    [_ensureInitialized]: dart.fnType(async.Future$(dart.void), []),
    [_addMethodCall]: dart.fnType(async.Future$(dart.nullable(google_sign_in.GoogleSignInAccount)), [core.Function], {canSkipCall: core.bool}, {}),
    signInSilently: dart.fnType(async.Future$(dart.nullable(google_sign_in.GoogleSignInAccount)), [], {reAuthenticate: core.bool, suppressErrors: core.bool}, {}),
    isSignedIn: dart.fnType(async.Future$(core.bool), []),
    signIn: dart.fnType(async.Future$(dart.nullable(google_sign_in.GoogleSignInAccount)), []),
    signOut: dart.fnType(async.Future$(dart.nullable(google_sign_in.GoogleSignInAccount)), []),
    disconnect: dart.fnType(async.Future$(dart.nullable(google_sign_in.GoogleSignInAccount)), []),
    requestScopes: dart.fnType(async.Future$(core.bool), [core.List$(core.String)])
  }));
  dart.setStaticMethodSignature(google_sign_in.GoogleSignIn, () => ['standard', 'games', '_waitFor']);
  dart.setGetterSignature(google_sign_in.GoogleSignIn, () => ({
    __proto__: dart.getGetters(google_sign_in.GoogleSignIn.__proto__),
    onCurrentUserChanged: async.Stream$(dart.nullable(google_sign_in.GoogleSignInAccount)),
    currentUser: dart.nullable(google_sign_in.GoogleSignInAccount)
  }));
  dart.setLibraryUri(google_sign_in.GoogleSignIn, I[0]);
  dart.setFieldSignature(google_sign_in.GoogleSignIn, () => ({
    __proto__: dart.getFields(google_sign_in.GoogleSignIn.__proto__),
    signInOption: dart.finalFieldType(types.SignInOption),
    scopes: dart.finalFieldType(core.List$(core.String)),
    hostedDomain: dart.finalFieldType(dart.nullable(core.String)),
    clientId: dart.finalFieldType(dart.nullable(core.String)),
    serverClientId: dart.finalFieldType(dart.nullable(core.String)),
    forceCodeForRefreshToken: dart.finalFieldType(core.bool),
    [_currentUserController]: dart.finalFieldType(async.StreamController$(dart.nullable(google_sign_in.GoogleSignInAccount))),
    [_initialization]: dart.fieldType(dart.nullable(async.Future$(dart.void))),
    [_lastMethodCall]: dart.fieldType(dart.nullable(async.Future$(dart.void))),
    [_currentUser]: dart.fieldType(dart.nullable(google_sign_in.GoogleSignInAccount))
  }));
  dart.setStaticFieldSignature(google_sign_in.GoogleSignIn, () => ['kSignInRequiredError', 'kSignInCanceledError', 'kNetworkError', 'kSignInFailedError']);
  dart.defineLazy(google_sign_in.GoogleSignIn, {
    /*google_sign_in.GoogleSignIn.kSignInRequiredError*/get kSignInRequiredError() {
      return "sign_in_required";
    },
    /*google_sign_in.GoogleSignIn.kSignInCanceledError*/get kSignInCanceledError() {
      return "sign_in_canceled";
    },
    /*google_sign_in.GoogleSignIn.kNetworkError*/get kNetworkError() {
      return "network_error";
    },
    /*google_sign_in.GoogleSignIn.kSignInFailedError*/get kSignInFailedError() {
      return "sign_in_failed";
    }
  }, false);
  dart.trackLibraries("packages/google_sign_in/google_sign_in.dart", {
    "package:google_sign_in/google_sign_in.dart": google_sign_in
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["google_sign_in.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyByB,YAAA,AAAM;IAAO;;AAGT,YAAA,AAAM;IAAW;;AAId,YAAA,AAAM;IAAc;;AAG7B,YAAA,AAAmC,0CAAN;IAAM;;;IAftB;;EAAM;;;;;;;;;;;;;;;;;;;;;;;IA2C1B;;;;;;IAGD;;;;;;IAGA;;;;;;IAGC;;;;;;IAGA;;;;;;;;;;AAewC;;AACpD,yBAAI,AAAc,kCAAe;AACiB,UAAhD,WAAM,wBAAW;;AAGS,wBACxB,MAA2B,AAAS,kFAC/B,+BACY;AAKQ,aAA7B,QAAQ;QAAS,qBAAR,aAAY,iBAAJ;AAEjB,cAAkC,kDAAE,QAAQ;MAC9C;;;AAM4C;AAC5B,oBAA+B,CAAtB,MAAM;AAC7B,cAAuB,4CACrB,iBAAiB,AAAe,qBAAN,KAAK,GAG/B,mBAAmB;MAEvB;;;AAM2B;AACZ,oBAA0C,eAAX,CAAtB,MAAM;AACoC,QAAhE,MAA2B,AAAS,uFAAsB,KAAK;MACjE;;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK;AACvB,cAAO;;AAET,WAAU,sCAAN,KAAK;AACP,cAAO;;AAEiB,yBAAe,KAAK;AAC9C,YAAO,AAAY,AAI+B,qBAJ5B,AAAa,YAAD,gBAC9B,AAAM,eAAG,AAAa,YAAD,UACrB,AAAG,YAAG,AAAa,YAAD,OAClB,AAAS,iBAAG,AAAa,YAAD,aACxB,AAAe,uBAAG,AAAa,YAAD,mBAC9B,AAAS,kBAAG,AAAa,YAAD;IAC9B;;AAII,YAAO,kBAAK,kBAAa,YAAO,SAAI,eAAU,gBAAU;IAAe;;AAI9C,iBAAwB,4CACjD,eAAe,kBACf,SAAS,YACT,MAAM,SACN,YAAY,eACZ,kBAAkB;AAEpB,YAAO,AAA2B,mCAAL,IAAI;IACnC;;oDAtH2B,eAAoC;IAApC;IACT,oBAAE,AAAK,IAAD;IACZ,cAAE,AAAK,IAAD;IACT,WAAE,AAAK,IAAD;IACA,iBAAE,AAAK,IAAD;IACA,uBAAE,AAAK,IAAD;IACZ,iBAAE,AAAK,IAAD;AACnB,UAAO,AAAG;EACZ;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAKoB,4DAAyB;;;MAGzB,4DAAyB;;;;;;;;;;;;;;;;;;;;;IAqK1B;;;;;;IAGA;;;;;;IAGL;;;;;;IASA;;;;;;IAcA;;;;;;IAGH;;;;;;;;;;;;;;;;UA9DI;UACL;AAER,YAAO,8CAAqB,MAAM,gBAAgB,YAAY;IAChE;;;;;;;AAKE,YAAO,oDAAwC;IACjD;;;;;AA2DI,YAAA,AAAuB;IAAM;kBAKiB;AAAV;AACZ,QAA1B,MAAM;AAEQ,wBAAW,MAAY,WAAN,MAAM;AAErC,cAAO,uBAAgB,AAAiB,QAAT,YAAqB,8BAAT,QAAQ,IACzB,0CAAE,MAAM,QAAQ,IACpC;MACR;;sBAE0D;AACxD,uBAAI,WAAW,EAAI;AACS,QAA1B,qBAAe,WAAW;AACc,QAAxC,AAAuB,iCAAI;;AAE7B,YAAO;IACT;;;AAGE,WAAO;YAAgB,cAAhB,8BACkB,AAAS,+EAAe,kDACjC,2BACN,2BACM,6BACJ,+BACM,+CACU,kCANM;AAQ1B,sBAAW,QAAS;AAEE,UAAtB,wBAAkB;;;;IAE5B;oBAO0C;AAClB,sBAAY;AAIhC,MAHF,AAAO,AAAiC,MAAlC,2CAAwB,UAAV,SAAS,2BAAsB,QAAS;;AAI5D,YAAO,AAAU,UAAD;IAClB;qBAWW;UACJ;AAFoC;AAIZ;AAC7B,YAAI,AAAgB;AACY,UAA9B,WAAW,kBAAY,MAAM;;AAU3B,UARF,WAA0B,AAAE,eAAjB,sDAAsB,QAAC;AAIhC,gBAAI,WAAW,IAAI;AACjB,oBAAO;;AAET,kBAAO,mBAAY,MAAM;;;AAIO,QAApC,wBAAkB,qCAAS,QAAQ;AACnC,cAAO,SAAQ;MACjB;;;AAGwC;IAAY;;UAuB7C;UACA;AAFoC;AAIzC;AACE,gBAAO,OAAM,qBAA6C,UAAT,mGAC/B,cAAc;;cACzB;AAAP;AACA,gBAAI,cAAc;AAChB,oBAAO;;AAEA,cAAP;;;;;MAGN;;;AAGuB;AACK,QAA1B,MAAM;AACN,cAA4B,AAAS;MACvC;;;AAaqC,mBAC/B,qBAA6C,UAAT,0FAA8B;AACtE,eAAK,WAAmB;AACpB,cAAM,AAAqB,oCAA3B,KAAK,KAAyB,AAAM,AAAK,KAAN;;;AACvC,YAAO,AAAO,OAAD,YAAY,QAAS,KAAM,iCAAY,UAAU;IAChE;;AAII,kCAA6C,UAAT;IAAiB;;AAKrD,kCAA6C,UAAT;IAAoB;kBAGpB;AAAd;AACE,QAA1B,MAAM;AACN,cAA4B,AAAS,+EAAc,MAAM;MAC3D;;;;QA/OO;QACA;QACA;QACA;QACA;QACA;IAqEsC,+BACzC;IAOU;IAqCA;IA8CO;IArKd;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAoBkB,gDAAoB;;;MAIpB,gDAAoB;;;MAGpB,yCAAa;;;MAGb,8CAAkB","file":"../../../../../../../../../../packages/google_sign_in/google_sign_in.dart.lib.js"}');
  // Exports:
  return {
    google_sign_in: google_sign_in
  };
}));

//# sourceMappingURL=google_sign_in.dart.lib.js.map
