define(['dart_sdk', 'packages/google_sign_in_platform_interface/src/types.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__google_sign_in_platform_interface__src__utils_dart(dart_sdk, packages__google_sign_in_platform_interface__src__types$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__google_sign_in_platform_interface__src__types$46dart.src__types;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  var utils = Object.create(dart.library);
  var method_channel_google_sign_in = Object.create(dart.library);
  var google_sign_in_platform_interface = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    GoogleSignInUserDataN: () => (T.GoogleSignInUserDataN = dart.constFn(dart.nullable(types.GoogleSignInUserData)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    MapNOfString$dynamic: () => (T.MapNOfString$dynamic = dart.constFn(dart.nullable(T.MapOfString$dynamic())))(),
    MapNOfString$dynamicToGoogleSignInUserDataN: () => (T.MapNOfString$dynamicToGoogleSignInUserDataN = dart.constFn(dart.fnType(T.GoogleSignInUserDataN(), [T.MapNOfString$dynamic()])))(),
    MapNOfString$dynamicToGoogleSignInTokenData: () => (T.MapNOfString$dynamicToGoogleSignInTokenData = dart.constFn(dart.fnType(types.GoogleSignInTokenData, [T.MapNOfString$dynamic()])))(),
    IdentityMapOfString$StringN: () => (T.IdentityMapOfString$StringN = dart.constFn(_js_helper.IdentityMap$(core.String, T.StringN())))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    IdentityMapOfString$ListOfString: () => (T.IdentityMapOfString$ListOfString = dart.constFn(_js_helper.IdentityMap$(core.String, T.ListOfString())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C2() {
      return C[2] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C[2] || CT.C2
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C[1] || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/google_sign_in"
      });
    },
    get C3() {
      return C[3] = dart.constList([], core.String);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: types.SignInOption.prototype,
        [_Enum__name]: "standard",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.fn(utils.getUserDataFromMap, T.MapNOfString$dynamicToGoogleSignInUserDataN());
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "package:google_sign_in_platform_interface/google_sign_in_platform_interface.dart",
    "package:google_sign_in_platform_interface/src/method_channel_google_sign_in.dart"
  ];
  utils.getUserDataFromMap = function getUserDataFromMap(data) {
    if (data == null) {
      return null;
    }
    return new types.GoogleSignInUserData.new({email: core.String.as(dart.nullCheck(data[$_get]("email"))), id: core.String.as(dart.nullCheck(data[$_get]("id"))), displayName: T.StringN().as(data[$_get]("displayName")), photoUrl: T.StringN().as(data[$_get]("photoUrl")), idToken: T.StringN().as(data[$_get]("idToken")), serverAuthCode: T.StringN().as(data[$_get]("serverAuthCode"))});
  };
  utils.getTokenDataFromMap = function getTokenDataFromMap(data) {
    return new types.GoogleSignInTokenData.new({idToken: T.StringN().as(data[$_get]("idToken")), accessToken: T.StringN().as(data[$_get]("accessToken")), serverAuthCode: T.StringN().as(data[$_get]("serverAuthCode"))});
  };
  var channel = dart.privateName(method_channel_google_sign_in, "MethodChannelGoogleSignIn.channel");
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _verifyProvidesDefaultImplementations = dart.privateName(google_sign_in_platform_interface, "_verifyProvidesDefaultImplementations");
  google_sign_in_platform_interface.GoogleSignInPlatform = class GoogleSignInPlatform extends core.Object {
    get isMock() {
      return false;
    }
    static get instance() {
      return google_sign_in_platform_interface.GoogleSignInPlatform._instance;
    }
    static set instance(instance) {
      if (!instance.isMock) {
        try {
          instance[_verifyProvidesDefaultImplementations]();
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.NoSuchMethodError.is(_)) {
            dart.throw(new core.AssertionError.new("Platform interfaces must not be implemented with `implements`"));
          } else
            throw e;
        }
      }
      google_sign_in_platform_interface.GoogleSignInPlatform._instance = instance;
    }
    [_verifyProvidesDefaultImplementations]() {
    }
    init(opts) {
      let scopes = opts && 'scopes' in opts ? opts.scopes : C[3] || CT.C3;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C[4] || CT.C4;
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return async.async(dart.void, function* init() {
        dart.throw(new core.UnimplementedError.new("init() has not been implemented."));
      });
    }
    initWithParams(params) {
      return async.async(dart.void, (function* initWithParams() {
        yield this.init({scopes: params.scopes, signInOption: params.signInOption, hostedDomain: params.hostedDomain, clientId: params.clientId});
      }).bind(this));
    }
    signInSilently() {
      return async.async(T.GoogleSignInUserDataN(), function* signInSilently() {
        dart.throw(new core.UnimplementedError.new("signInSilently() has not been implemented."));
      });
    }
    signIn() {
      return async.async(T.GoogleSignInUserDataN(), function* signIn() {
        dart.throw(new core.UnimplementedError.new("signIn() has not been implemented."));
      });
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : null;
      return async.async(types.GoogleSignInTokenData, function* getTokens() {
        dart.throw(new core.UnimplementedError.new("getTokens() has not been implemented."));
      });
    }
    signOut() {
      return async.async(dart.void, function* signOut() {
        dart.throw(new core.UnimplementedError.new("signOut() has not been implemented."));
      });
    }
    disconnect() {
      return async.async(dart.void, function* disconnect() {
        dart.throw(new core.UnimplementedError.new("disconnect() has not been implemented."));
      });
    }
    isSignedIn() {
      return async.async(core.bool, function* isSignedIn() {
        dart.throw(new core.UnimplementedError.new("isSignedIn() has not been implemented."));
      });
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return async.async(dart.void, function* clearAuthCache() {
        dart.throw(new core.UnimplementedError.new("clearAuthCache() has not been implemented."));
      });
    }
    requestScopes(scopes) {
      return async.async(core.bool, function* requestScopes() {
        dart.throw(new core.UnimplementedError.new("requestScopes() has not been implmented."));
      });
    }
  };
  (google_sign_in_platform_interface.GoogleSignInPlatform.new = function() {
    ;
  }).prototype = google_sign_in_platform_interface.GoogleSignInPlatform.prototype;
  dart.addTypeTests(google_sign_in_platform_interface.GoogleSignInPlatform);
  dart.addTypeCaches(google_sign_in_platform_interface.GoogleSignInPlatform);
  dart.setMethodSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ({
    __proto__: dart.getMethods(google_sign_in_platform_interface.GoogleSignInPlatform.__proto__),
    [_verifyProvidesDefaultImplementations]: dart.fnType(dart.void, []),
    init: dart.fnType(async.Future$(dart.void), [], {clientId: dart.nullable(core.String), hostedDomain: dart.nullable(core.String), scopes: core.List$(core.String), signInOption: types.SignInOption}, {}),
    initWithParams: dart.fnType(async.Future$(dart.void), [types.SignInInitParameters]),
    signInSilently: dart.fnType(async.Future$(dart.nullable(types.GoogleSignInUserData)), []),
    signIn: dart.fnType(async.Future$(dart.nullable(types.GoogleSignInUserData)), []),
    getTokens: dart.fnType(async.Future$(types.GoogleSignInTokenData), [], {shouldRecoverAuth: dart.nullable(core.bool)}, {email: core.String}),
    signOut: dart.fnType(async.Future$(dart.void), []),
    disconnect: dart.fnType(async.Future$(dart.void), []),
    isSignedIn: dart.fnType(async.Future$(core.bool), []),
    clearAuthCache: dart.fnType(async.Future$(dart.void), [], {}, {token: core.String}),
    requestScopes: dart.fnType(async.Future$(core.bool), [core.List$(core.String)])
  }));
  dart.setGetterSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ({
    __proto__: dart.getGetters(google_sign_in_platform_interface.GoogleSignInPlatform.__proto__),
    isMock: core.bool
  }));
  dart.setStaticGetterSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ['instance']);
  dart.setStaticSetterSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ['instance']);
  dart.setLibraryUri(google_sign_in_platform_interface.GoogleSignInPlatform, I[0]);
  dart.setStaticFieldSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ['_instance']);
  dart.defineLazy(google_sign_in_platform_interface.GoogleSignInPlatform, {
    /*google_sign_in_platform_interface.GoogleSignInPlatform._instance*/get _instance() {
      return new method_channel_google_sign_in.MethodChannelGoogleSignIn.new();
    },
    set _instance(_) {}
  }, false);
  method_channel_google_sign_in.MethodChannelGoogleSignIn = class MethodChannelGoogleSignIn extends google_sign_in_platform_interface.GoogleSignInPlatform {
    get channel() {
      return this[channel];
    }
    set channel(value) {
      this[channel] = value;
    }
    init(opts) {
      let scopes = opts && 'scopes' in opts ? opts.scopes : C[3] || CT.C3;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C[4] || CT.C4;
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return this.initWithParams(new types.SignInInitParameters.new({scopes: scopes, signInOption: signInOption, hostedDomain: hostedDomain, clientId: clientId}));
    }
    initWithParams(params) {
      return this.channel.invokeMethod(dart.void, "init", new (T.IdentityMapOfString$dynamic()).from(["signInOption", params.signInOption.toString(), "scopes", params.scopes, "hostedDomain", params.hostedDomain, "clientId", params.clientId, "serverClientId", params.serverClientId, "forceCodeForRefreshToken", params.forceCodeForRefreshToken]));
    }
    signInSilently() {
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "signInSilently").then(T.GoogleSignInUserDataN(), C[5] || CT.C5);
    }
    signIn() {
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "signIn").then(T.GoogleSignInUserDataN(), C[5] || CT.C5);
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : true;
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "getTokens", new (T.IdentityMapOfString$dynamic()).from(["email", email, "shouldRecoverAuth", shouldRecoverAuth])).then(types.GoogleSignInTokenData, dart.fn(result => utils.getTokenDataFromMap(dart.nullCheck(result)), T.MapNOfString$dynamicToGoogleSignInTokenData()));
    }
    signOut() {
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "signOut");
    }
    disconnect() {
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "disconnect");
    }
    isSignedIn() {
      return async.async(core.bool, (function* isSignedIn() {
        return dart.nullCheck(yield this.channel.invokeMethod(core.bool, "isSignedIn"));
      }).bind(this));
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return this.channel.invokeMethod(dart.void, "clearAuthCache", new (T.IdentityMapOfString$StringN()).from(["token", token]));
    }
    requestScopes(scopes) {
      return async.async(core.bool, (function* requestScopes() {
        return dart.nullCheck(yield this.channel.invokeMethod(core.bool, "requestScopes", new (T.IdentityMapOfString$ListOfString()).from(["scopes", scopes])));
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new method_channel_google_sign_in.MethodChannelGoogleSignIn.new();
    }
  };
  (method_channel_google_sign_in.MethodChannelGoogleSignIn.new = function() {
    this[channel] = C[0] || CT.C0;
    ;
  }).prototype = method_channel_google_sign_in.MethodChannelGoogleSignIn.prototype;
  dart.addTypeTests(method_channel_google_sign_in.MethodChannelGoogleSignIn);
  dart.addTypeCaches(method_channel_google_sign_in.MethodChannelGoogleSignIn);
  dart.setMethodSignature(method_channel_google_sign_in.MethodChannelGoogleSignIn, () => ({
    __proto__: dart.getMethods(method_channel_google_sign_in.MethodChannelGoogleSignIn.__proto__),
    clearAuthCache: dart.fnType(async.Future$(dart.void), [], {token: dart.nullable(core.String)}, {})
  }));
  dart.setLibraryUri(method_channel_google_sign_in.MethodChannelGoogleSignIn, I[1]);
  dart.setFieldSignature(method_channel_google_sign_in.MethodChannelGoogleSignIn, () => ({
    __proto__: dart.getFields(method_channel_google_sign_in.MethodChannelGoogleSignIn.__proto__),
    channel: dart.fieldType(platform_channel.MethodChannel)
  }));
  dart.trackLibraries("packages/google_sign_in_platform_interface/src/utils.dart", {
    "package:google_sign_in_platform_interface/src/utils.dart": utils,
    "package:google_sign_in_platform_interface/src/method_channel_google_sign_in.dart": method_channel_google_sign_in,
    "package:google_sign_in_platform_interface/google_sign_in_platform_interface.dart": google_sign_in_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart","../google_sign_in_platform_interface.dart","method_channel_google_sign_in.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yDAO+D;AAC7D,QAAI,AAAK,IAAD;AACN,YAAO;;AAET,UAAO,4CACmB,eAAF,eAAb,AAAI,IAAA,QAAC,gBACI,eAAF,eAAV,AAAI,IAAA,QAAC,sBACwB,eAApB,AAAI,IAAA,QAAC,2BACS,eAAjB,AAAI,IAAA,QAAC,uBACU,eAAhB,AAAI,IAAA,QAAC,6BACyB,eAAvB,AAAI,IAAA,QAAC;EAC3B;2DAG+D;AAC7D,UAAO,+CACoB,eAAhB,AAAI,IAAA,QAAC,0BACmB,eAApB,AAAI,IAAA,QAAC,iCACqB,eAAvB,AAAI,IAAA,QAAC;EAEzB;;;;;;;;;;;ACEqB;IAAK;;AASoB;IAAS;wBAMZ;AACvC,WAAK,AAAS,QAAD;AACX;AACkD,UAAhD,AAAS,QAAD;;cACoB;AAA5B;AAEoE,YADpE,WAAM,4BACF;;;;;AAGY,MAApB,mEAAY,QAAQ;IACtB;;IAS8C;;UAmB/B;UACA;UACL;UACA;AAJO;AAM6C,QAA5D,WAAM,gCAAmB;MAC3B;;mBAQiD;AAAtB;AAMxB,QALD,MAAM,mBACI,AAAO,MAAD,uBACA,AAAO,MAAD,6BACN,AAAO,MAAD,yBACV,AAAO,MAAD;MAEpB;;;AAG4C;AAC4B,QAAtE,WAAM,gCAAmB;MAC3B;;;AAGoC;AAC4B,QAA9D,WAAM,gCAAmB;MAC3B;;;UAIqB;UAAa;AADK;AAE4B,QAAjE,WAAM,gCAAmB;MAC3B;;;AAGoB;AAC6C,QAA/D,WAAM,gCAAmB;MAC3B;;;AAGuB;AAC6C,QAAlE,WAAM,gCAAmB;MAC3B;;;AAGuB;AAC6C,QAAlE,WAAM,gCAAmB;MAC3B;;;UAG6C;AAAlB;AAC6C,QAAtE,WAAM,gCAAmB;MAC3B;;kBAMwC;AAAd;AAC4C,QAApE,WAAM,gCAAmB;MAC3B;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;MA5G8B,gEAAS;YAAG;;;;;ICvB1B;;;;;;;UAKC;UACA;UACL;UACA;AAER,YAAO,qBAAe,4CACV,MAAM,gBACA,YAAY,gBACZ,YAAY,YAChB,QAAQ;IACxB;mBAGiD;AAC/C,YAAO,AAAQ,sCAAmB,QAAyB,4CACzD,gBAAgB,AAAO,AAAa,MAAd,0BACtB,UAAU,AAAO,MAAD,SAChB,gBAAgB,AAAO,MAAD,eACtB,YAAY,AAAO,MAAD,WAClB,kBAAkB,AAAO,MAAD,iBACxB,4BAA4B,AAAO,MAAD;IAEtC;;AAIE,YAAO,AACF,AACA,yDADiC;IAExC;;AAIE,YAAO,AACF,AACA,yDADiC;IAExC;;UAIqB;UAAa;AAChC,YAAO,AACF,AAGF,yDAHmC,aAA8B,4CAClE,SAAS,KAAK,EACd,qBAAqB,iBAAiB,sCAChC,QAAuB,UAAW,0BAA0B,eAAN,MAAM;IACtE;;AAIE,YAAO,AAAQ,yDAAiC;IAClD;;AAIE,YAAO,AAAQ,yDAAiC;IAClD;;AAGuB;AACrB,cAAuD,gBAA/C,MAAM,AAAQ,qCAAmB;MAC3C;;;UAGqC;AACnC,YAAO,AAAQ,sCACb,kBACiB,4CAAC,SAAS,KAAK;IAEpC;kBAGwC;AAAd;AACxB,cAGE,gBAHM,MAAM,AAAQ,qCACpB,iBACsB,iDAAC,UAAU,MAAM;MAE3C;;;;;;;IAlFc;;EAmFhB","file":"../../../../../../../../../../../packages/google_sign_in_platform_interface/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils,
    src__method_channel_google_sign_in: method_channel_google_sign_in,
    google_sign_in_platform_interface: google_sign_in_platform_interface
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
