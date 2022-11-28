define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flare_flutter__flare_controller_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var flare_controller = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ValueNotifierOfbool: () => (T.ValueNotifierOfbool = dart.constFn(change_notifier.ValueNotifier$(core.bool)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flare_flutter/flare_controller.dart"];
  var isActive = dart.privateName(flare_controller, "FlareController.isActive");
  flare_controller.FlareController = class FlareController extends core.Object {
    get isActive() {
      return this[isActive];
    }
    set isActive(value) {
      this[isActive] = value;
    }
  };
  (flare_controller.FlareController.new = function() {
    this[isActive] = new (T.ValueNotifierOfbool()).new(true);
    ;
  }).prototype = flare_controller.FlareController.prototype;
  dart.addTypeTests(flare_controller.FlareController);
  dart.addTypeCaches(flare_controller.FlareController);
  dart.setLibraryUri(flare_controller.FlareController, I[0]);
  dart.setFieldSignature(flare_controller.FlareController, () => ({
    __proto__: dart.getFields(flare_controller.FlareController.__proto__),
    isActive: dart.fieldType(change_notifier.ValueNotifier$(core.bool))
  }));
  dart.trackLibraries("packages/flare_flutter/flare_controller.dart", {
    "package:flare_flutter/flare_controller.dart": flare_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IA0BsB;;;;;;;;qBAAW,kCAAoB;;EAYrD","file":"../../../../../../../../../../packages/flare_flutter/flare_controller.dart.lib.js"}');
  // Exports:
  return {
    flare_controller: flare_controller
  };
}));

//# sourceMappingURL=flare_controller.dart.lib.js.map
