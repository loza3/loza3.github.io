define(['dart_sdk', 'packages/quiver/src/core/hash.dart'], (function load__packages__google_sign_in_platform_interface__src__types_dart(dart_sdk, packages__quiver__src__core__hash$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__src__core__hash$46dart.src__core__hash;
  var types = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    JSArrayOfStringN: () => (T.JSArrayOfStringN = dart.constFn(_interceptors.JSArray$(T.StringN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: types.SignInOption.prototype,
        [_Enum__name]: "standard",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: types.SignInOption.prototype,
        [_Enum__name]: "games",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], types.SignInOption);
    },
    get C3() {
      return C[3] = dart.constList([], core.String);
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:google_sign_in_platform_interface/src/types.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  types.SignInOption = class SignInOption extends core._Enum {
    toString() {
      return "SignInOption." + this[_name];
    }
  };
  (types.SignInOption.new = function(index, name) {
    types.SignInOption.__proto__.new.call(this, index, name);
    ;
  }).prototype = types.SignInOption.prototype;
  dart.addTypeTests(types.SignInOption);
  dart.addTypeCaches(types.SignInOption);
  dart.setLibraryUri(types.SignInOption, I[0]);
  dart.setStaticFieldSignature(types.SignInOption, () => ['values', 'standard', 'games']);
  dart.defineExtensionMethods(types.SignInOption, ['toString']);
  dart.defineLazy(types.SignInOption, {
    /*types.SignInOption.values*/get values() {
      return C[0] || CT.C0;
    },
    /*types.SignInOption.standard*/get standard() {
      return C[1] || CT.C1;
    },
    /*types.SignInOption.games*/get games() {
      return C[2] || CT.C2;
    }
  }, false);
  var scopes$ = dart.privateName(types, "SignInInitParameters.scopes");
  var signInOption$ = dart.privateName(types, "SignInInitParameters.signInOption");
  var hostedDomain$ = dart.privateName(types, "SignInInitParameters.hostedDomain");
  var clientId$ = dart.privateName(types, "SignInInitParameters.clientId");
  var serverClientId$ = dart.privateName(types, "SignInInitParameters.serverClientId");
  var forceCodeForRefreshToken$ = dart.privateName(types, "SignInInitParameters.forceCodeForRefreshToken");
  types.SignInInitParameters = class SignInInitParameters extends core.Object {
    get scopes() {
      return this[scopes$];
    }
    set scopes(value) {
      super.scopes = value;
    }
    get signInOption() {
      return this[signInOption$];
    }
    set signInOption(value) {
      super.signInOption = value;
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
      let scopes = opts && 'scopes' in opts ? opts.scopes : C[3] || CT.C3;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C[1] || CT.C1;
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      let serverClientId = opts && 'serverClientId' in opts ? opts.serverClientId : null;
      let forceCodeForRefreshToken = opts && 'forceCodeForRefreshToken' in opts ? opts.forceCodeForRefreshToken : false;
      return new types.SignInInitParameters.new({scopes: scopes, signInOption: signInOption, hostedDomain: hostedDomain, clientId: clientId, serverClientId: serverClientId, forceCodeForRefreshToken: forceCodeForRefreshToken});
    }
  };
  (types.SignInInitParameters.new = function(opts) {
    let scopes = opts && 'scopes' in opts ? opts.scopes : C[3] || CT.C3;
    let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C[1] || CT.C1;
    let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
    let clientId = opts && 'clientId' in opts ? opts.clientId : null;
    let serverClientId = opts && 'serverClientId' in opts ? opts.serverClientId : null;
    let forceCodeForRefreshToken = opts && 'forceCodeForRefreshToken' in opts ? opts.forceCodeForRefreshToken : false;
    this[scopes$] = scopes;
    this[signInOption$] = signInOption;
    this[hostedDomain$] = hostedDomain;
    this[clientId$] = clientId;
    this[serverClientId$] = serverClientId;
    this[forceCodeForRefreshToken$] = forceCodeForRefreshToken;
    ;
  }).prototype = types.SignInInitParameters.prototype;
  dart.addTypeTests(types.SignInInitParameters);
  dart.addTypeCaches(types.SignInInitParameters);
  dart.setLibraryUri(types.SignInInitParameters, I[0]);
  dart.setFieldSignature(types.SignInInitParameters, () => ({
    __proto__: dart.getFields(types.SignInInitParameters.__proto__),
    scopes: dart.finalFieldType(core.List$(core.String)),
    signInOption: dart.finalFieldType(types.SignInOption),
    hostedDomain: dart.finalFieldType(dart.nullable(core.String)),
    clientId: dart.finalFieldType(dart.nullable(core.String)),
    serverClientId: dart.finalFieldType(dart.nullable(core.String)),
    forceCodeForRefreshToken: dart.finalFieldType(core.bool)
  }));
  var displayName$ = dart.privateName(types, "GoogleSignInUserData.displayName");
  var email$ = dart.privateName(types, "GoogleSignInUserData.email");
  var id$ = dart.privateName(types, "GoogleSignInUserData.id");
  var photoUrl$ = dart.privateName(types, "GoogleSignInUserData.photoUrl");
  var idToken$ = dart.privateName(types, "GoogleSignInUserData.idToken");
  var serverAuthCode$ = dart.privateName(types, "GoogleSignInUserData.serverAuthCode");
  types.GoogleSignInUserData = class GoogleSignInUserData extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      this[displayName$] = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      this[email$] = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get photoUrl() {
      return this[photoUrl$];
    }
    set photoUrl(value) {
      this[photoUrl$] = value;
    }
    get idToken() {
      return this[idToken$];
    }
    set idToken(value) {
      this[idToken$] = value;
    }
    get serverAuthCode() {
      return this[serverAuthCode$];
    }
    set serverAuthCode(value) {
      this[serverAuthCode$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let id = opts && 'id' in opts ? opts.id : null;
      let displayName = opts && 'displayName' in opts ? opts.displayName : null;
      let photoUrl = opts && 'photoUrl' in opts ? opts.photoUrl : null;
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let serverAuthCode = opts && 'serverAuthCode' in opts ? opts.serverAuthCode : null;
      return new types.GoogleSignInUserData.new({email: email, id: id, displayName: displayName, photoUrl: photoUrl, idToken: idToken, serverAuthCode: serverAuthCode});
    }
    get hashCode() {
      return hash.hashObjects(T.JSArrayOfStringN().of([this.displayName, this.email, this.id, this.photoUrl, this.idToken, this.serverAuthCode]));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!types.GoogleSignInUserData.is(other)) {
        return false;
      }
      let otherUserData = other;
      return otherUserData.displayName == this.displayName && otherUserData.email === this.email && otherUserData.id === this.id && otherUserData.photoUrl == this.photoUrl && otherUserData.idToken == this.idToken && otherUserData.serverAuthCode == this.serverAuthCode;
    }
  };
  (types.GoogleSignInUserData.new = function(opts) {
    let email = opts && 'email' in opts ? opts.email : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    let photoUrl = opts && 'photoUrl' in opts ? opts.photoUrl : null;
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    let serverAuthCode = opts && 'serverAuthCode' in opts ? opts.serverAuthCode : null;
    this[email$] = email;
    this[id$] = id;
    this[displayName$] = displayName;
    this[photoUrl$] = photoUrl;
    this[idToken$] = idToken;
    this[serverAuthCode$] = serverAuthCode;
    ;
  }).prototype = types.GoogleSignInUserData.prototype;
  dart.addTypeTests(types.GoogleSignInUserData);
  dart.addTypeCaches(types.GoogleSignInUserData);
  dart.setLibraryUri(types.GoogleSignInUserData, I[0]);
  dart.setFieldSignature(types.GoogleSignInUserData, () => ({
    __proto__: dart.getFields(types.GoogleSignInUserData.__proto__),
    displayName: dart.fieldType(dart.nullable(core.String)),
    email: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    photoUrl: dart.fieldType(dart.nullable(core.String)),
    idToken: dart.fieldType(dart.nullable(core.String)),
    serverAuthCode: dart.fieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(types.GoogleSignInUserData, ['_equals']);
  dart.defineExtensionAccessors(types.GoogleSignInUserData, ['hashCode']);
  var idToken$0 = dart.privateName(types, "GoogleSignInTokenData.idToken");
  var accessToken$ = dart.privateName(types, "GoogleSignInTokenData.accessToken");
  var serverAuthCode$0 = dart.privateName(types, "GoogleSignInTokenData.serverAuthCode");
  types.GoogleSignInTokenData = class GoogleSignInTokenData extends core.Object {
    get idToken() {
      return this[idToken$0];
    }
    set idToken(value) {
      this[idToken$0] = value;
    }
    get accessToken() {
      return this[accessToken$];
    }
    set accessToken(value) {
      this[accessToken$] = value;
    }
    get serverAuthCode() {
      return this[serverAuthCode$0];
    }
    set serverAuthCode(value) {
      this[serverAuthCode$0] = value;
    }
    static ['_#new#tearOff'](opts) {
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
      let serverAuthCode = opts && 'serverAuthCode' in opts ? opts.serverAuthCode : null;
      return new types.GoogleSignInTokenData.new({idToken: idToken, accessToken: accessToken, serverAuthCode: serverAuthCode});
    }
    get hashCode() {
      return hash.hash3(this.idToken, this.accessToken, this.serverAuthCode);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!types.GoogleSignInTokenData.is(other)) {
        return false;
      }
      let otherTokenData = other;
      return otherTokenData.idToken == this.idToken && otherTokenData.accessToken == this.accessToken && otherTokenData.serverAuthCode == this.serverAuthCode;
    }
  };
  (types.GoogleSignInTokenData.new = function(opts) {
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    let serverAuthCode = opts && 'serverAuthCode' in opts ? opts.serverAuthCode : null;
    this[idToken$0] = idToken;
    this[accessToken$] = accessToken;
    this[serverAuthCode$0] = serverAuthCode;
    ;
  }).prototype = types.GoogleSignInTokenData.prototype;
  dart.addTypeTests(types.GoogleSignInTokenData);
  dart.addTypeCaches(types.GoogleSignInTokenData);
  dart.setLibraryUri(types.GoogleSignInTokenData, I[0]);
  dart.setFieldSignature(types.GoogleSignInTokenData, () => ({
    __proto__: dart.getFields(types.GoogleSignInTokenData.__proto__),
    idToken: dart.fieldType(dart.nullable(core.String)),
    accessToken: dart.fieldType(dart.nullable(core.String)),
    serverAuthCode: dart.fieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(types.GoogleSignInTokenData, ['_equals']);
  dart.defineExtensionAccessors(types.GoogleSignInTokenData, ['hashCode']);
  dart.trackLibraries("packages/google_sign_in_platform_interface/src/types.dart", {
    "package:google_sign_in_platform_interface/src/types.dart": types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuBA;;;;;;;;;;;;MAbK,yBAAM;;;MAIT,2BAAQ;;;MAQR,wBAAK;;;;;;;;;;;IAoBc;;;;;;IAIA;;;;;;IAIL;;;;;;IAWA;;;;;;IAaA;;;;;;IAMH;;;;;;;;;;;;;;;;;QA/CJ;QACA;QACA;QACA;QACA;QACA;IALA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;IA2DM;;;;;;IAUD;;;;;;IASA;;;;;;IAKC;;;;;;IAIA;;;;;;IAGA;;;;;;;;;;;;;;;;AAKY,8BACP,yBAAC,kBAAa,YAAO,SAAI,eAAU,cAAS;IAAgB;YAKjD;;AACtB,UAAI,AAAU,SAAM,KAAK;AACvB,cAAO;;AAET,WAAU,8BAAN,KAAK;AACP,cAAO;;AAEkB,0BAAgB,KAAK;AAChD,YAAO,AAAc,AAAY,AAII,cAJjB,gBAAgB,oBAChC,AAAc,AAAM,aAAP,WAAU,cACvB,AAAc,AAAG,aAAJ,QAAO,WACpB,AAAc,AAAS,aAAV,aAAa,iBAC1B,AAAc,AAAQ,aAAT,YAAY,gBACzB,AAAc,AAAe,aAAhB,mBAAmB;IACtC;;;QAnEgB;QACA;QACT;QACA;QACA;QACA;IALS;IACA;IACT;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;IA0EM;;;;;;IAGA;;;;;;IAGA;;;;;;;;;;;;;AAKY,wBAAM,cAAS,kBAAa;IAAe;YAKvC;;AACtB,UAAI,AAAU,SAAM,KAAK;AACvB,cAAO;;AAET,WAAU,+BAAN,KAAK;AACP,cAAO;;AAEmB,2BAAiB,KAAK;AAClD,YAAO,AAAe,AAAQ,AACgB,eADzB,YAAY,gBAC7B,AAAe,AAAY,cAAb,gBAAgB,oBAC9B,AAAe,AAAe,cAAhB,mBAAmB;IACvC;;;QAjCO;QACA;QACA;IAFA;IACA;IACA;;EACL","file":"../../../../../../../../../../../packages/google_sign_in_platform_interface/src/types.dart.lib.js"}');
  // Exports:
  return {
    src__types: types
  };
}));

//# sourceMappingURL=types.dart.lib.js.map
