define(['dart_sdk'], (function load__packages__qr__src__error_correct_level_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var error_correct_level = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([1, 0, 3, 2], core.int);
    }
  }, false);
  var C = [void 0];
  var I = ["package:qr/src/error_correct_level.dart"];
  error_correct_level.QrErrorCorrectLevel = class QrErrorCorrectLevel extends core.Object {
    static getName(level) {
      switch (level) {
        case 1:
          {
            return "Low";
          }
        case 0:
          {
            return "Medium";
          }
        case 3:
          {
            return "Quality";
          }
        case 2:
          {
            return "High";
          }
        default:
          {
            dart.throw(new core.ArgumentError.new("level " + dart.str(level) + " not supported"));
          }
      }
    }
    static ['_#new#tearOff']() {
      return new error_correct_level.QrErrorCorrectLevel.new();
    }
  };
  (error_correct_level.QrErrorCorrectLevel.new = function() {
    ;
  }).prototype = error_correct_level.QrErrorCorrectLevel.prototype;
  dart.addTypeTests(error_correct_level.QrErrorCorrectLevel);
  dart.addTypeCaches(error_correct_level.QrErrorCorrectLevel);
  dart.setStaticMethodSignature(error_correct_level.QrErrorCorrectLevel, () => ['getName']);
  dart.setLibraryUri(error_correct_level.QrErrorCorrectLevel, I[0]);
  dart.setStaticFieldSignature(error_correct_level.QrErrorCorrectLevel, () => ['L', 'M', 'Q', 'H', 'levels']);
  dart.defineLazy(error_correct_level.QrErrorCorrectLevel, {
    /*error_correct_level.QrErrorCorrectLevel.L*/get L() {
      return 1;
    },
    /*error_correct_level.QrErrorCorrectLevel.M*/get M() {
      return 0;
    },
    /*error_correct_level.QrErrorCorrectLevel.Q*/get Q() {
      return 3;
    },
    /*error_correct_level.QrErrorCorrectLevel.H*/get H() {
      return 2;
    },
    /*error_correct_level.QrErrorCorrectLevel.levels*/get levels() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/qr/src/error_correct_level.dart", {
    "package:qr/src/error_correct_level.dart": error_correct_level
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["error_correct_level.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;mBAW4B;AACxB,cAAQ,KAAK;;;AAET,kBAAO;;;;AAEP,kBAAO;;;;AAEP,kBAAO;;;;AAEP,kBAAO;;;;AAE0C,YAAjD,WAAM,2BAAc,AAA4B,oBAApB,KAAK;;;IAEvC;;;;;;;EACF;;;;;;;MAxBmB,yCAAC;;;MACD,yCAAC;;;MACD,yCAAC;;;MACD,yCAAC;;;MAKK,8CAAM","file":"../../../../../../../../../../../packages/qr/src/error_correct_level.dart.lib.js"}');
  // Exports:
  return {
    src__error_correct_level: error_correct_level
  };
}));

//# sourceMappingURL=error_correct_level.dart.lib.js.map
