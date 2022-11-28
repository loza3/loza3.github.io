define(['dart_sdk'], (function load__packages__lottie__src__utils__pair_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var pair = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/utils/pair.dart"];
  var first$ = dart.privateName(pair, "Pair.first");
  var second$ = dart.privateName(pair, "Pair.second");
  const _is_Pair_default = Symbol('_is_Pair_default');
  pair.Pair$ = dart.generic((T, U) => {
    class Pair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get second() {
        return this[second$];
      }
      set second(value) {
        super.second = value;
      }
      static ['_#new#tearOff'](T, U, first, second) {
        return new (pair.Pair$(T, U)).new(first, second);
      }
    }
    (Pair.new = function(first, second) {
      this[first$] = first;
      this[second$] = second;
      ;
    }).prototype = Pair.prototype;
    dart.addTypeTests(Pair);
    Pair.prototype[_is_Pair_default] = true;
    dart.addTypeCaches(Pair);
    dart.setLibraryUri(Pair, I[0]);
    dart.setFieldSignature(Pair, () => ({
      __proto__: dart.getFields(Pair.__proto__),
      first: dart.finalFieldType(T),
      second: dart.finalFieldType(U)
    }));
    return Pair;
  });
  pair.Pair = pair.Pair$();
  dart.addTypeTests(pair.Pair, _is_Pair_default);
  dart.trackLibraries("packages/lottie/src/utils/pair.dart", {
    "package:lottie/src/utils/pair.dart": pair
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pair.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MACU;;;;;;MACA;;;;;;;;;;yBAEE,OAAY;MAAZ;MAAY;;IAAO","file":"../../../../../../../../../../../../packages/lottie/src/utils/pair.dart.lib.js"}');
  // Exports:
  return {
    src__utils__pair: pair
  };
}));

//# sourceMappingURL=pair.dart.lib.js.map
