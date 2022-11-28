define(['dart_sdk', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/semantics/debug.dart'], (function load__packages__flutter__src__semantics__binding_dart(dart_sdk, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__semantics__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const debug = packages__flutter__src__semantics__debug$46dart.src__semantics__debug;
  var binding$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/semantics/binding.dart",
    "package:flutter/src/semantics/binding.dart"
  ];
  var __SemanticsBinding__accessibilityFeatures = dart.privateName(binding$, "_#SemanticsBinding#_accessibilityFeatures");
  var _accessibilityFeatures = dart.privateName(binding$, "_accessibilityFeatures");
  binding$.SemanticsBinding = class SemanticsBinding extends binding.BindingBase {
    static get instance() {
      return binding.BindingBase.checkInstance(binding$.SemanticsBinding, binding$.SemanticsBinding._instance);
    }
  };
  binding$.SemanticsBinding[dart.mixinOn] = BindingBase => class SemanticsBinding extends BindingBase {
    initInstances() {
      super.initInstances();
      binding$.SemanticsBinding._instance = this;
      this[_accessibilityFeatures] = this.platformDispatcher.accessibilityFeatures;
    }
    handleAccessibilityFeaturesChanged() {
      this[_accessibilityFeatures] = this.platformDispatcher.accessibilityFeatures;
    }
    createSemanticsUpdateBuilder() {
      return new ui.SemanticsUpdateBuilder.new();
    }
    get accessibilityFeatures() {
      return this[_accessibilityFeatures];
    }
    get [_accessibilityFeatures]() {
      let t0;
      t0 = this[__SemanticsBinding__accessibilityFeatures];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_accessibilityFeatures")) : t0;
    }
    set [_accessibilityFeatures](library$32package$58flutter$47src$47semantics$47binding$46dart$58$58_accessibilityFeatures$35param) {
      this[__SemanticsBinding__accessibilityFeatures] = library$32package$58flutter$47src$47semantics$47binding$46dart$58$58_accessibilityFeatures$35param;
    }
    get disableAnimations() {
      let value = this[_accessibilityFeatures].disableAnimations;
      if (!dart.fn(() => {
        if (debug.debugSemanticsDisableAnimations != null) {
          value = dart.nullCheck(debug.debugSemanticsDisableAnimations);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 66, 12, "() {\n      if (debugSemanticsDisableAnimations != null) {\n        value = debugSemanticsDisableAnimations!;\n      }\n      return true;\n    }()");
      return value;
    }
  };
  (binding$.SemanticsBinding[dart.mixinNew] = function() {
    this[__SemanticsBinding__accessibilityFeatures] = null;
  }).prototype = binding$.SemanticsBinding.prototype;
  dart.addTypeTests(binding$.SemanticsBinding);
  dart.addTypeCaches(binding$.SemanticsBinding);
  binding$.SemanticsBinding[dart.implements] = () => [binding.BindingBase];
  dart.setMethodSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getMethods(binding$.SemanticsBinding.__proto__),
    handleAccessibilityFeaturesChanged: dart.fnType(dart.void, []),
    createSemanticsUpdateBuilder: dart.fnType(ui.SemanticsUpdateBuilder, [])
  }));
  dart.setGetterSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getGetters(binding$.SemanticsBinding.__proto__),
    accessibilityFeatures: ui.AccessibilityFeatures,
    [_accessibilityFeatures]: ui.AccessibilityFeatures,
    disableAnimations: core.bool
  }));
  dart.setSetterSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getSetters(binding$.SemanticsBinding.__proto__),
    [_accessibilityFeatures]: ui.AccessibilityFeatures
  }));
  dart.setStaticGetterSignature(binding$.SemanticsBinding, () => ['instance']);
  dart.setLibraryUri(binding$.SemanticsBinding, I[1]);
  dart.setFieldSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getFields(binding$.SemanticsBinding.__proto__),
    [__SemanticsBinding__accessibilityFeatures]: dart.fieldType(dart.nullable(ui.AccessibilityFeatures))
  }));
  dart.setStaticFieldSignature(binding$.SemanticsBinding, () => ['_instance']);
  dart.defineLazy(binding$.SemanticsBinding, {
    /*binding$.SemanticsBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/semantics/binding.dart", {
    "package:flutter/src/semantics/binding.dart": binding$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AA2B0C,YAAY,8DAAc;IAAU;;;;AAVrD,MAAf;AACU,MAAhB,sCAAY;AACqD,MAAjE,+BAAyB,AAAmB;IAC9C;;AAemE,MAAjE,+BAAyB,AAAmB;IAC9C;;AASE,YAAU;IACZ;;AAUsD;IAAsB;;;AAC9C;;IAAsB;iCAAtB;;IAAsB;;AAO7C,kBAAQ,AAAuB;AACpC,WAAO,AAKN;AAJC,YAAI;AACsC,UAAxC,QAAuC,eAA/B;;AAEV,cAAO;;AAET,YAAO,MAAK;IACd;;;sDAf8B;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA7BL,mCAAS","file":"../../../../../../../../../../packages/flutter/src/semantics/binding.dart.lib.js"}');
  // Exports:
  return {
    src__semantics__binding: binding$
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map
