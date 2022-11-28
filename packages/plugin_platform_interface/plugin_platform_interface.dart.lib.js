define(['dart_sdk'], (function load__packages__plugin_platform_interface__plugin_platform_interface_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var plugin_platform_interface = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Object.prototype
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/plugin_platform_interface-2.1.2/lib/plugin_platform_interface.dart",
    "package:plugin_platform_interface/plugin_platform_interface.dart"
  ];
  var _instanceToken = dart.privateName(plugin_platform_interface, "_instanceToken");
  plugin_platform_interface.PlatformInterface = class PlatformInterface extends core.Object {
    static verify(instance, token) {
      plugin_platform_interface.PlatformInterface._verify(instance, token, {preventConstObject: true});
    }
    static verifyToken(instance, token) {
      plugin_platform_interface.PlatformInterface._verify(instance, token, {preventConstObject: false});
    }
    static _verify(instance, token, opts) {
      let preventConstObject = opts && 'preventConstObject' in opts ? opts.preventConstObject : null;
      if (plugin_platform_interface.MockPlatformInterfaceMixin.is(instance)) {
        let assertionsEnabled = false;
        if (!dart.fn(() => {
          assertionsEnabled = true;
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[0], 81, 14, "() {\n        assertionsEnabled = true;\n        return true;\n      }()");
        if (!assertionsEnabled) {
          dart.throw(new core.AssertionError.new("`MockPlatformInterfaceMixin` is not intended for use in release builds."));
        }
        return;
      }
      if (preventConstObject && instance[_instanceToken] === (C[0] || CT.C0)) {
        dart.throw(new core.AssertionError.new("`const Object()` cannot be used as the token."));
      }
      if (token !== instance[_instanceToken]) {
        dart.throw(new core.AssertionError.new("Platform interfaces must not be implemented with `implements`"));
      }
    }
  };
  (plugin_platform_interface.PlatformInterface.new = function(opts) {
    let token = opts && 'token' in opts ? opts.token : null;
    this[_instanceToken] = token;
    ;
  }).prototype = plugin_platform_interface.PlatformInterface.prototype;
  dart.addTypeTests(plugin_platform_interface.PlatformInterface);
  dart.addTypeCaches(plugin_platform_interface.PlatformInterface);
  dart.setStaticMethodSignature(plugin_platform_interface.PlatformInterface, () => ['verify', 'verifyToken', '_verify']);
  dart.setLibraryUri(plugin_platform_interface.PlatformInterface, I[1]);
  dart.setFieldSignature(plugin_platform_interface.PlatformInterface, () => ({
    __proto__: dart.getFields(plugin_platform_interface.PlatformInterface.__proto__),
    [_instanceToken]: dart.finalFieldType(dart.nullable(core.Object))
  }));
  plugin_platform_interface.MockPlatformInterfaceMixin = class MockPlatformInterfaceMixin extends core.Object {};
  (plugin_platform_interface.MockPlatformInterfaceMixin.new = function() {
    ;
  }).prototype = plugin_platform_interface.MockPlatformInterfaceMixin.prototype;
  dart.addTypeTests(plugin_platform_interface.MockPlatformInterfaceMixin);
  dart.addTypeCaches(plugin_platform_interface.MockPlatformInterfaceMixin);
  plugin_platform_interface.MockPlatformInterfaceMixin[dart.implements] = () => [plugin_platform_interface.PlatformInterface];
  dart.setLibraryUri(plugin_platform_interface.MockPlatformInterfaceMixin, I[1]);
  dart.trackLibraries("packages/plugin_platform_interface/plugin_platform_interface.dart", {
    "package:plugin_platform_interface/plugin_platform_interface.dart": plugin_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["plugin_platform_interface.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;kBA6DuC,UAAiB;AACF,MAAlD,oDAAQ,QAAQ,EAAE,KAAK,uBAAsB;IAC/C;uBAM0C,UAAiB;AACN,MAAnD,oDAAQ,QAAQ,EAAE,KAAK,uBAAsB;IAC/C;mBAGoB,UACX;UACO;AAEd,UAAa,wDAAT,QAAQ;AACL,gCAAoB;AACzB,aAAO,AAGN;AAFyB,UAAxB,oBAAoB;AACpB,gBAAO;;AAET,aAAK,iBAAiB;AAE0D,UAD9E,WAAM,4BACF;;AAEN;;AAEF,UAAI,kBAAkB,IAClB,AAAU,AAAS,QAAD;AACiD,QAArE,WAAM,4BAAe;;AAEvB,UAAe,KAAK,KAAE,AAAS,QAAD;AAEwC,QADpE,WAAM,4BACF;;IAER;;;QApDmC;IAAyB,uBAAE,KAAK;;;;;;;;;;;;;;EAuEG","file":"../../../../../../../../../../packages/plugin_platform_interface/plugin_platform_interface.dart.lib.js"}');
  // Exports:
  return {
    plugin_platform_interface: plugin_platform_interface
  };
}));

//# sourceMappingURL=plugin_platform_interface.dart.lib.js.map
