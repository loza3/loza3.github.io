define(['dart_sdk'], (function load__packages__lottie__src__utils__path_factory_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var path_factory = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/utils/path_factory.dart"];
  path_factory.PathFactory = class PathFactory extends core.Object {
    static create() {
      return ui.Path.new();
    }
    static ['_#new#tearOff']() {
      return new path_factory.PathFactory.new();
    }
  };
  (path_factory.PathFactory.new = function() {
    ;
  }).prototype = path_factory.PathFactory.prototype;
  dart.addTypeTests(path_factory.PathFactory);
  dart.addTypeCaches(path_factory.PathFactory);
  dart.setStaticMethodSignature(path_factory.PathFactory, () => ['create']);
  dart.setLibraryUri(path_factory.PathFactory, I[0]);
  dart.trackLibraries("packages/lottie/src/utils/path_factory.dart", {
    "package:lottie/src/utils/path_factory.dart": path_factory
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_factory.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAII,YAAO;IACT;;;;;;;EACF","file":"../../../../../../../../../../../../packages/lottie/src/utils/path_factory.dart.lib.js"}');
  // Exports:
  return {
    src__utils__path_factory: path_factory
  };
}));

//# sourceMappingURL=path_factory.dart.lib.js.map
