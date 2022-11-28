define(['dart_sdk', 'packages/wakelock_platform_interface/messages.dart'], (function load__packages__wakelock_platform_interface__method_channel_wakelock_dart(dart_sdk, packages__wakelock_platform_interface__messages$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const messages = packages__wakelock_platform_interface__messages$46dart.messages;
  var method_channel_wakelock = Object.create(dart.library);
  var wakelock_platform_interface = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:wakelock_platform_interface/wakelock_platform_interface.dart",
    "package:wakelock_platform_interface/method_channel_wakelock.dart"
  ];
  var _api = dart.privateName(method_channel_wakelock, "_api");
  var _verifyProvidesDefaultImplementations = dart.privateName(wakelock_platform_interface, "_verifyProvidesDefaultImplementations");
  wakelock_platform_interface.WakelockPlatformInterface = class WakelockPlatformInterface extends core.Object {
    static get instance() {
      return wakelock_platform_interface.WakelockPlatformInterface._instance;
    }
    static set instance(instance) {
      if (!instance.isMock) {
        instance[_verifyProvidesDefaultImplementations]();
      }
      wakelock_platform_interface.WakelockPlatformInterface._instance = instance;
    }
    get isMock() {
      return false;
    }
    toggle(opts) {
      let enable = opts && 'enable' in opts ? opts.enable : null;
      dart.throw(new core.UnimplementedError.new("toggle() has not been implemented."));
    }
    get enabled() {
      dart.throw(new core.UnimplementedError.new("isEnabled has not been implemented."));
    }
    [_verifyProvidesDefaultImplementations]() {
    }
  };
  (wakelock_platform_interface.WakelockPlatformInterface.new = function() {
    ;
  }).prototype = wakelock_platform_interface.WakelockPlatformInterface.prototype;
  dart.addTypeTests(wakelock_platform_interface.WakelockPlatformInterface);
  dart.addTypeCaches(wakelock_platform_interface.WakelockPlatformInterface);
  dart.setMethodSignature(wakelock_platform_interface.WakelockPlatformInterface, () => ({
    __proto__: dart.getMethods(wakelock_platform_interface.WakelockPlatformInterface.__proto__),
    toggle: dart.fnType(async.Future$(dart.void), [], {}, {enable: core.bool}),
    [_verifyProvidesDefaultImplementations]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(wakelock_platform_interface.WakelockPlatformInterface, () => ({
    __proto__: dart.getGetters(wakelock_platform_interface.WakelockPlatformInterface.__proto__),
    isMock: core.bool,
    enabled: async.Future$(core.bool)
  }));
  dart.setStaticGetterSignature(wakelock_platform_interface.WakelockPlatformInterface, () => ['instance']);
  dart.setStaticSetterSignature(wakelock_platform_interface.WakelockPlatformInterface, () => ['instance']);
  dart.setLibraryUri(wakelock_platform_interface.WakelockPlatformInterface, I[0]);
  dart.setStaticFieldSignature(wakelock_platform_interface.WakelockPlatformInterface, () => ['_instance']);
  dart.defineLazy(wakelock_platform_interface.WakelockPlatformInterface, {
    /*wakelock_platform_interface.WakelockPlatformInterface._instance*/get _instance() {
      return new method_channel_wakelock.MethodChannelWakelock.new();
    },
    set _instance(_) {}
  }, false);
  method_channel_wakelock.MethodChannelWakelock = class MethodChannelWakelock extends wakelock_platform_interface.WakelockPlatformInterface {
    get enabled() {
      return async.async(core.bool, (function* enabled() {
        let message = (yield this[_api].isEnabled());
        return dart.nullCheck(message.enabled);
      }).bind(this));
    }
    toggle(opts) {
      let enable = opts && 'enable' in opts ? opts.enable : null;
      return async.async(dart.void, (function* toggle() {
        let message = new messages.ToggleMessage.new();
        message.enable = enable;
        yield this[_api].toggle(message);
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new method_channel_wakelock.MethodChannelWakelock.new();
    }
  };
  (method_channel_wakelock.MethodChannelWakelock.new = function() {
    this[_api] = new messages.WakelockApi.new();
    ;
  }).prototype = method_channel_wakelock.MethodChannelWakelock.prototype;
  dart.addTypeTests(method_channel_wakelock.MethodChannelWakelock);
  dart.addTypeCaches(method_channel_wakelock.MethodChannelWakelock);
  dart.setLibraryUri(method_channel_wakelock.MethodChannelWakelock, I[1]);
  dart.setFieldSignature(method_channel_wakelock.MethodChannelWakelock, () => ({
    __proto__: dart.getFields(method_channel_wakelock.MethodChannelWakelock.__proto__),
    [_api]: dart.finalFieldType(messages.WakelockApi)
  }));
  dart.trackLibraries("packages/wakelock_platform_interface/method_channel_wakelock.dart", {
    "package:wakelock_platform_interface/method_channel_wakelock.dart": method_channel_wakelock,
    "package:wakelock_platform_interface/wakelock_platform_interface.dart": wakelock_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["wakelock_platform_interface.dart","method_channel_wakelock.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAmBmD;IAAS;wBAMZ;AAC5C,WAAK,AAAS,QAAD;AACqC,QAAhD,AAAS,QAAD;;AAEU,MAApB,kEAAY,QAAQ;IACtB;;AASmB;IAAK;;UAGW;AAC6B,MAA9D,WAAM,gCAAmB;IAC3B;;AAIiE,MAA/D,WAAM,gCAAmB;IAC3B;;IAQ8C;;;;EAChD;;;;;;;;;;;;;;;;;;MAhDmC,+DAAS;YAAG;;;;;;ACFpB;AACjB,uBAAU,MAAM,AAAK;AAE3B,cAAsB,gBAAf,AAAQ,OAAD;MAChB;;;UAGmC;AAAhB;AACX,sBAAU;AACO,QAAvB,AAAQ,OAAD,UAAU,MAAM;AAEG,QAA1B,MAAM,AAAK,kBAAO,OAAO;MAC3B;;;;;;;IAfM,aAAO;;EAgBf","file":"../../../../../../../../../../packages/wakelock_platform_interface/method_channel_wakelock.dart.lib.js"}');
  // Exports:
  return {
    method_channel_wakelock: method_channel_wakelock,
    wakelock_platform_interface: wakelock_platform_interface
  };
}));

//# sourceMappingURL=method_channel_wakelock.dart.lib.js.map
