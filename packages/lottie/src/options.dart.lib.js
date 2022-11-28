define(['dart_sdk'], (function load__packages__lottie__src__options_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var options = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/options.dart"];
  var enableMergePaths$ = dart.privateName(options, "LottieOptions.enableMergePaths");
  options.LottieOptions = class LottieOptions extends core.Object {
    get enableMergePaths() {
      return this[enableMergePaths$];
    }
    set enableMergePaths(value) {
      super.enableMergePaths = value;
    }
    static ['_#new#tearOff'](opts) {
      let enableMergePaths = opts && 'enableMergePaths' in opts ? opts.enableMergePaths : null;
      return new options.LottieOptions.new({enableMergePaths: enableMergePaths});
    }
  };
  (options.LottieOptions.new = function(opts) {
    let t0;
    let enableMergePaths = opts && 'enableMergePaths' in opts ? opts.enableMergePaths : null;
    this[enableMergePaths$] = (t0 = enableMergePaths, t0 == null ? false : t0);
    ;
  }).prototype = options.LottieOptions.prototype;
  dart.addTypeTests(options.LottieOptions);
  dart.addTypeCaches(options.LottieOptions);
  dart.setLibraryUri(options.LottieOptions, I[0]);
  dart.setFieldSignature(options.LottieOptions, () => ({
    __proto__: dart.getFields(options.LottieOptions.__proto__),
    enableMergePaths: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/lottie/src/options.dart", {
    "package:lottie/src/options.dart": options
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAMa;;;;;;;;;;;;;QAEU;IACE,2BAAmB,KAAjB,gBAAgB,EAAhB,aAAoB;;EAAK","file":"../../../../../../../../../../../packages/lottie/src/options.dart.lib.js"}');
  // Exports:
  return {
    src__options: options
  };
}));

//# sourceMappingURL=options.dart.lib.js.map
