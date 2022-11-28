define(['dart_sdk'], (function load__packages__flutter_signin_button__button_list_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var button_list = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Email",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Google",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "GoogleDark",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Facebook",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "FacebookNew",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "GitHub",
        [_Enum_index]: 5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Apple",
        [_Enum_index]: 6
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "AppleDark",
        [_Enum_index]: 7
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "LinkedIn",
        [_Enum_index]: 8
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Pinterest",
        [_Enum_index]: 9
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Tumblr",
        [_Enum_index]: 10
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Twitter",
        [_Enum_index]: 11
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Reddit",
        [_Enum_index]: 12
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Quora",
        [_Enum_index]: 13
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Yahoo",
        [_Enum_index]: 14
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Hotmail",
        [_Enum_index]: 15
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Xbox",
        [_Enum_index]: 16
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: button_list.Buttons.prototype,
        [_Enum__name]: "Microsoft",
        [_Enum_index]: 17
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17, C[18] || CT.C18], button_list.Buttons);
    }
  }, false);
  var C = Array(19).fill(void 0);
  var I = ["package:flutter_signin_button/button_list.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  button_list.Buttons = class Buttons extends core._Enum {
    toString() {
      return "Buttons." + this[_name];
    }
  };
  (button_list.Buttons.new = function(index, name) {
    button_list.Buttons.__proto__.new.call(this, index, name);
    ;
  }).prototype = button_list.Buttons.prototype;
  dart.addTypeTests(button_list.Buttons);
  dart.addTypeCaches(button_list.Buttons);
  dart.setLibraryUri(button_list.Buttons, I[0]);
  dart.setStaticFieldSignature(button_list.Buttons, () => ['values', 'Email', 'Google', 'GoogleDark', 'Facebook', 'FacebookNew', 'GitHub', 'Apple', 'AppleDark', 'LinkedIn', 'Pinterest', 'Tumblr', 'Twitter', 'Reddit', 'Quora', 'Yahoo', 'Hotmail', 'Xbox', 'Microsoft']);
  dart.defineExtensionMethods(button_list.Buttons, ['toString']);
  dart.defineLazy(button_list.Buttons, {
    /*button_list.Buttons.values*/get values() {
      return C[0] || CT.C0;
    },
    /*button_list.Buttons.Email*/get Email() {
      return C[1] || CT.C1;
    },
    /*button_list.Buttons.Google*/get Google() {
      return C[2] || CT.C2;
    },
    /*button_list.Buttons.GoogleDark*/get GoogleDark() {
      return C[3] || CT.C3;
    },
    /*button_list.Buttons.Facebook*/get Facebook() {
      return C[4] || CT.C4;
    },
    /*button_list.Buttons.FacebookNew*/get FacebookNew() {
      return C[5] || CT.C5;
    },
    /*button_list.Buttons.GitHub*/get GitHub() {
      return C[6] || CT.C6;
    },
    /*button_list.Buttons.Apple*/get Apple() {
      return C[7] || CT.C7;
    },
    /*button_list.Buttons.AppleDark*/get AppleDark() {
      return C[8] || CT.C8;
    },
    /*button_list.Buttons.LinkedIn*/get LinkedIn() {
      return C[9] || CT.C9;
    },
    /*button_list.Buttons.Pinterest*/get Pinterest() {
      return C[10] || CT.C10;
    },
    /*button_list.Buttons.Tumblr*/get Tumblr() {
      return C[11] || CT.C11;
    },
    /*button_list.Buttons.Twitter*/get Twitter() {
      return C[12] || CT.C12;
    },
    /*button_list.Buttons.Reddit*/get Reddit() {
      return C[13] || CT.C13;
    },
    /*button_list.Buttons.Quora*/get Quora() {
      return C[14] || CT.C14;
    },
    /*button_list.Buttons.Yahoo*/get Yahoo() {
      return C[15] || CT.C15;
    },
    /*button_list.Buttons.Hotmail*/get Hotmail() {
      return C[16] || CT.C16;
    },
    /*button_list.Buttons.Xbox*/get Xbox() {
      return C[17] || CT.C17;
    },
    /*button_list.Buttons.Microsoft*/get Microsoft() {
      return C[18] || CT.C18;
    }
  }, false);
  dart.trackLibraries("packages/flutter_signin_button/button_list.dart", {
    "package:flutter_signin_button/button_list.dart": button_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBA;;;;;;;;;;;;MApBK,0BAAM;;;MAET,yBAAK;;;MACL,0BAAM;;;MACN,8BAAU;;;MACV,4BAAQ;;;MACR,+BAAW;;;MACX,0BAAM;;;MACN,yBAAK;;;MACL,6BAAS;;;MACT,4BAAQ;;;MACR,6BAAS;;;MACT,0BAAM;;;MACN,2BAAO;;;MACP,0BAAM;;;MACN,yBAAK;;;MACL,yBAAK;;;MACL,2BAAO;;;MACP,wBAAI;;;MACJ,6BAAS","file":"../../../../../../../../../../packages/flutter_signin_button/button_list.dart.lib.js"}');
  // Exports:
  return {
    button_list: button_list
  };
}));

//# sourceMappingURL=button_list.dart.lib.js.map
