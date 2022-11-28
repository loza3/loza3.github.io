define(['dart_sdk'], (function load__packages__cool_alert__src__constants__images_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var images = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:cool_alert/src/constants/images.dart"];
  images.AppAnim = class AppAnim extends core.Object {
    static ['_#new#tearOff']() {
      return new images.AppAnim.new();
    }
  };
  (images.AppAnim.new = function() {
    ;
  }).prototype = images.AppAnim.prototype;
  dart.addTypeTests(images.AppAnim);
  dart.addTypeCaches(images.AppAnim);
  dart.setLibraryUri(images.AppAnim, I[0]);
  dart.setStaticFieldSignature(images.AppAnim, () => ['loading', 'success', 'error', 'warning', 'info']);
  dart.defineLazy(images.AppAnim, {
    /*images.AppAnim.loading*/get loading() {
      return "packages/cool_alert/assets/flare/loading.flr";
    },
    /*images.AppAnim.success*/get success() {
      return "packages/cool_alert/assets/flare/success_check.flr";
    },
    /*images.AppAnim.error*/get error() {
      return "packages/cool_alert/assets/flare/error_check.flr";
    },
    /*images.AppAnim.warning*/get warning() {
      return "packages/cool_alert/assets/flare/warning_check.flr";
    },
    /*images.AppAnim.info*/get info() {
      return "packages/cool_alert/assets/flare/info_check.flr";
    }
  }, false);
  dart.trackLibraries("packages/cool_alert/src/constants/images.dart", {
    "package:cool_alert/src/constants/images.dart": images
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["images.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;EAMA;;;;;;MALe,sBAAO;;;MACP,sBAAO;;;MACP,oBAAK;;;MACL,sBAAO;;;MACP,mBAAI","file":"../../../../../../../../../../../../packages/cool_alert/src/constants/images.dart.lib.js"}');
  // Exports:
  return {
    src__constants__images: images
  };
}));

//# sourceMappingURL=images.dart.lib.js.map
