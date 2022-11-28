define(['dart_sdk'], (function load__packages__flutter_facebook_auth_platform_interface__src__login_behavior_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var login_behavior = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: login_behavior.LoginBehavior.prototype,
        [_Enum__name]: "nativeWithFallback",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: login_behavior.LoginBehavior.prototype,
        [_Enum__name]: "nativeOnly",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: login_behavior.LoginBehavior.prototype,
        [_Enum__name]: "katanaOnly",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: login_behavior.LoginBehavior.prototype,
        [_Enum__name]: "dialogOnly",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: login_behavior.LoginBehavior.prototype,
        [_Enum__name]: "deviceAuth",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: login_behavior.LoginBehavior.prototype,
        [_Enum__name]: "webOnly",
        [_Enum_index]: 5
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6], login_behavior.LoginBehavior);
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = ["package:flutter_facebook_auth_platform_interface/src/login_behavior.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  login_behavior.LoginBehavior = class LoginBehavior extends core._Enum {
    toString() {
      return "LoginBehavior." + this[_name];
    }
  };
  (login_behavior.LoginBehavior.new = function(index, name) {
    login_behavior.LoginBehavior.__proto__.new.call(this, index, name);
    ;
  }).prototype = login_behavior.LoginBehavior.prototype;
  dart.addTypeTests(login_behavior.LoginBehavior);
  dart.addTypeCaches(login_behavior.LoginBehavior);
  dart.setLibraryUri(login_behavior.LoginBehavior, I[0]);
  dart.setStaticFieldSignature(login_behavior.LoginBehavior, () => ['values', 'nativeWithFallback', 'nativeOnly', 'katanaOnly', 'dialogOnly', 'deviceAuth', 'webOnly']);
  dart.defineExtensionMethods(login_behavior.LoginBehavior, ['toString']);
  dart.defineLazy(login_behavior.LoginBehavior, {
    /*login_behavior.LoginBehavior.values*/get values() {
      return C[0] || CT.C0;
    },
    /*login_behavior.LoginBehavior.nativeWithFallback*/get nativeWithFallback() {
      return C[1] || CT.C1;
    },
    /*login_behavior.LoginBehavior.nativeOnly*/get nativeOnly() {
      return C[2] || CT.C2;
    },
    /*login_behavior.LoginBehavior.katanaOnly*/get katanaOnly() {
      return C[3] || CT.C3;
    },
    /*login_behavior.LoginBehavior.dialogOnly*/get dialogOnly() {
      return C[4] || CT.C4;
    },
    /*login_behavior.LoginBehavior.deviceAuth*/get deviceAuth() {
      return C[5] || CT.C5;
    },
    /*login_behavior.LoginBehavior.webOnly*/get webOnly() {
      return C[6] || CT.C6;
    }
  }, false);
  login_behavior.getLoginBehaviorAsString = function getLoginBehaviorAsString(behavior) {
    switch (behavior) {
      case C[1] || CT.C1:
        {
          return "NATIVE_WITH_FALLBACK";
        }
      case C[2] || CT.C2:
        {
          return "NATIVE_ONLY";
        }
      case C[3] || CT.C3:
        {
          return "KATANA_ONLY";
        }
      case C[4] || CT.C4:
        {
          return "DIALOG_ONLY";
        }
      case C[5] || CT.C5:
        {
          return "DEVICE_AUTH";
        }
      case C[6] || CT.C6:
        {
          return "WEB_ONLY";
        }
    }
  };
  dart.trackLibraries("packages/flutter_facebook_auth_platform_interface/src/login_behavior.dart", {
    "package:flutter_facebook_auth_platform_interface/src/login_behavior.dart": login_behavior
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_behavior.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQA;;;;;;;;;;;;MAPK,mCAAM;;;MACT,+CAAkB;;;MAClB,uCAAU;;;MACV,uCAAU;;;MACV,uCAAU;;;MACV,uCAAU;;;MACV,oCAAO;;;;8EAIqC;AAC5C,YAAQ,QAAQ;;;AAEZ,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;EAEb","file":"../../../../../../../../../../../packages/flutter_facebook_auth_platform_interface/src/login_behavior.dart.lib.js"}');
  // Exports:
  return {
    src__login_behavior: login_behavior
  };
}));

//# sourceMappingURL=login_behavior.dart.lib.js.map
