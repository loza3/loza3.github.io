define(['dart_sdk'], (function load__packages__lottie__src__model__content__gradient_type_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var gradient_type = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: gradient_type.GradientType.prototype,
        [_Enum__name]: "linear",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: gradient_type.GradientType.prototype,
        [_Enum__name]: "radial",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], gradient_type.GradientType);
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:lottie/src/model/content/gradient_type.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  gradient_type.GradientType = class GradientType extends core._Enum {
    toString() {
      return "GradientType." + this[_name];
    }
  };
  (gradient_type.GradientType.new = function(index, name) {
    gradient_type.GradientType.__proto__.new.call(this, index, name);
    ;
  }).prototype = gradient_type.GradientType.prototype;
  dart.addTypeTests(gradient_type.GradientType);
  dart.addTypeCaches(gradient_type.GradientType);
  dart.setLibraryUri(gradient_type.GradientType, I[0]);
  dart.setStaticFieldSignature(gradient_type.GradientType, () => ['values', 'linear', 'radial']);
  dart.defineExtensionMethods(gradient_type.GradientType, ['toString']);
  dart.defineLazy(gradient_type.GradientType, {
    /*gradient_type.GradientType.values*/get values() {
      return C[0] || CT.C0;
    },
    /*gradient_type.GradientType.linear*/get linear() {
      return C[1] || CT.C1;
    },
    /*gradient_type.GradientType.radial*/get radial() {
      return C[2] || CT.C2;
    }
  }, false);
  dart.trackLibraries("packages/lottie/src/model/content/gradient_type.dart", {
    "package:lottie/src/model/content/gradient_type.dart": gradient_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gradient_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAAmC;;;;;;;;;;;;MAA9B,iCAAM;;;MAAS,iCAAM;;;MAAE,iCAAM","file":"../../../../../../../../../../../../../packages/lottie/src/model/content/gradient_type.dart.lib.js"}');
  // Exports:
  return {
    src__model__content__gradient_type: gradient_type
  };
}));

//# sourceMappingURL=gradient_type.dart.lib.js.map
