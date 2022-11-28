define(['dart_sdk', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__shared_preferences_platform_interface__method_channel_shared_preferences_dart(dart_sdk, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  var method_channel_shared_preferences = Object.create(dart.library);
  var shared_preferences_platform_interface = Object.create(dart.library);
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$Object: () => (T.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    LinkedHashMapOfString$Object: () => (T.LinkedHashMapOfString$Object = dart.constFn(collection.LinkedHashMap$(core.String, core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C2() {
      return C[2] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C[2] || CT.C2
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C[1] || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/shared_preferences"
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "package:shared_preferences_platform_interface/shared_preferences_platform_interface.dart",
    "package:shared_preferences_platform_interface/method_channel_shared_preferences.dart"
  ];
  shared_preferences_platform_interface.SharedPreferencesStorePlatform = class SharedPreferencesStorePlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return shared_preferences_platform_interface.SharedPreferencesStorePlatform._instance;
    }
    static set instance(instance) {
      if (!instance.isMock) {
        plugin_platform_interface.PlatformInterface.verify(instance, shared_preferences_platform_interface.SharedPreferencesStorePlatform._token);
      }
      shared_preferences_platform_interface.SharedPreferencesStorePlatform._instance = instance;
    }
    get isMock() {
      return false;
    }
  };
  (shared_preferences_platform_interface.SharedPreferencesStorePlatform.new = function() {
    shared_preferences_platform_interface.SharedPreferencesStorePlatform.__proto__.new.call(this, {token: shared_preferences_platform_interface.SharedPreferencesStorePlatform._token});
    ;
  }).prototype = shared_preferences_platform_interface.SharedPreferencesStorePlatform.prototype;
  dart.addTypeTests(shared_preferences_platform_interface.SharedPreferencesStorePlatform);
  dart.addTypeCaches(shared_preferences_platform_interface.SharedPreferencesStorePlatform);
  dart.setGetterSignature(shared_preferences_platform_interface.SharedPreferencesStorePlatform, () => ({
    __proto__: dart.getGetters(shared_preferences_platform_interface.SharedPreferencesStorePlatform.__proto__),
    isMock: core.bool
  }));
  dart.setStaticGetterSignature(shared_preferences_platform_interface.SharedPreferencesStorePlatform, () => ['instance']);
  dart.setStaticSetterSignature(shared_preferences_platform_interface.SharedPreferencesStorePlatform, () => ['instance']);
  dart.setLibraryUri(shared_preferences_platform_interface.SharedPreferencesStorePlatform, I[0]);
  dart.setStaticFieldSignature(shared_preferences_platform_interface.SharedPreferencesStorePlatform, () => ['_token', '_instance']);
  dart.defineLazy(shared_preferences_platform_interface.SharedPreferencesStorePlatform, {
    /*shared_preferences_platform_interface.SharedPreferencesStorePlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*shared_preferences_platform_interface.SharedPreferencesStorePlatform._instance*/get _instance() {
      return new method_channel_shared_preferences.MethodChannelSharedPreferencesStore.new();
    },
    set _instance(_) {}
  }, false);
  method_channel_shared_preferences.MethodChannelSharedPreferencesStore = class MethodChannelSharedPreferencesStore extends shared_preferences_platform_interface.SharedPreferencesStorePlatform {
    remove(key) {
      return async.async(core.bool, function* remove() {
        return dart.nullCheck(yield method_channel_shared_preferences._kChannel.invokeMethod(core.bool, "remove", new (T.IdentityMapOfString$dynamic()).from(["key", key])));
      });
    }
    setValue(valueType, key, value) {
      return async.async(core.bool, function* setValue() {
        return dart.nullCheck(yield method_channel_shared_preferences._kChannel.invokeMethod(core.bool, "set" + valueType, new (T.IdentityMapOfString$dynamic()).from(["key", key, "value", value])));
      });
    }
    clear() {
      return async.async(core.bool, function* clear() {
        return dart.nullCheck(yield method_channel_shared_preferences._kChannel.invokeMethod(core.bool, "clear"));
      });
    }
    getAll() {
      return async.async(T.MapOfString$Object(), function* getAll() {
        let preferences = (yield method_channel_shared_preferences._kChannel.invokeMapMethod(core.String, core.Object, "getAll"));
        if (preferences == null) {
          return new (T.IdentityMapOfString$Object()).new();
        }
        return preferences;
      });
    }
    static ['_#new#tearOff']() {
      return new method_channel_shared_preferences.MethodChannelSharedPreferencesStore.new();
    }
  };
  (method_channel_shared_preferences.MethodChannelSharedPreferencesStore.new = function() {
    method_channel_shared_preferences.MethodChannelSharedPreferencesStore.__proto__.new.call(this);
    ;
  }).prototype = method_channel_shared_preferences.MethodChannelSharedPreferencesStore.prototype;
  dart.addTypeTests(method_channel_shared_preferences.MethodChannelSharedPreferencesStore);
  dart.addTypeCaches(method_channel_shared_preferences.MethodChannelSharedPreferencesStore);
  dart.setMethodSignature(method_channel_shared_preferences.MethodChannelSharedPreferencesStore, () => ({
    __proto__: dart.getMethods(method_channel_shared_preferences.MethodChannelSharedPreferencesStore.__proto__),
    remove: dart.fnType(async.Future$(core.bool), [core.String]),
    setValue: dart.fnType(async.Future$(core.bool), [core.String, core.String, core.Object]),
    clear: dart.fnType(async.Future$(core.bool), []),
    getAll: dart.fnType(async.Future$(core.Map$(core.String, core.Object)), [])
  }));
  dart.setLibraryUri(method_channel_shared_preferences.MethodChannelSharedPreferencesStore, I[1]);
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  dart.defineLazy(method_channel_shared_preferences, {
    /*method_channel_shared_preferences._kChannel*/get _kChannel() {
      return C[0] || CT.C0;
    }
  }, false);
  var _data = dart.privateName(shared_preferences_platform_interface, "_data");
  shared_preferences_platform_interface.InMemorySharedPreferencesStore = class InMemorySharedPreferencesStore extends shared_preferences_platform_interface.SharedPreferencesStorePlatform {
    static ['_#empty#tearOff']() {
      return new shared_preferences_platform_interface.InMemorySharedPreferencesStore.empty();
    }
    static ['_#withData#tearOff'](data) {
      return new shared_preferences_platform_interface.InMemorySharedPreferencesStore.withData(data);
    }
    clear() {
      return async.async(core.bool, (function* clear() {
        this[_data][$clear]();
        return true;
      }).bind(this));
    }
    getAll() {
      return async.async(T.MapOfString$Object(), (function* getAll() {
        return T.LinkedHashMapOfString$Object().from(this[_data]);
      }).bind(this));
    }
    remove(key) {
      return async.async(core.bool, (function* remove() {
        this[_data][$remove](key);
        return true;
      }).bind(this));
    }
    setValue(valueType, key, value) {
      return async.async(core.bool, (function* setValue() {
        this[_data][$_set](key, value);
        return true;
      }).bind(this));
    }
  };
  (shared_preferences_platform_interface.InMemorySharedPreferencesStore.empty = function() {
    this[_data] = new (T.IdentityMapOfString$Object()).new();
    shared_preferences_platform_interface.InMemorySharedPreferencesStore.__proto__.new.call(this);
    ;
  }).prototype = shared_preferences_platform_interface.InMemorySharedPreferencesStore.prototype;
  (shared_preferences_platform_interface.InMemorySharedPreferencesStore.withData = function(data) {
    this[_data] = T.LinkedHashMapOfString$Object().from(data);
    shared_preferences_platform_interface.InMemorySharedPreferencesStore.__proto__.new.call(this);
    ;
  }).prototype = shared_preferences_platform_interface.InMemorySharedPreferencesStore.prototype;
  dart.addTypeTests(shared_preferences_platform_interface.InMemorySharedPreferencesStore);
  dart.addTypeCaches(shared_preferences_platform_interface.InMemorySharedPreferencesStore);
  dart.setMethodSignature(shared_preferences_platform_interface.InMemorySharedPreferencesStore, () => ({
    __proto__: dart.getMethods(shared_preferences_platform_interface.InMemorySharedPreferencesStore.__proto__),
    clear: dart.fnType(async.Future$(core.bool), []),
    getAll: dart.fnType(async.Future$(core.Map$(core.String, core.Object)), []),
    remove: dart.fnType(async.Future$(core.bool), [core.String]),
    setValue: dart.fnType(async.Future$(core.bool), [core.String, core.String, core.Object])
  }));
  dart.setLibraryUri(shared_preferences_platform_interface.InMemorySharedPreferencesStore, I[0]);
  dart.setFieldSignature(shared_preferences_platform_interface.InMemorySharedPreferencesStore, () => ({
    __proto__: dart.getFields(shared_preferences_platform_interface.InMemorySharedPreferencesStore.__proto__),
    [_data]: dart.finalFieldType(core.Map$(core.String, core.Object))
  }));
  dart.trackLibraries("packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart", {
    "package:shared_preferences_platform_interface/method_channel_shared_preferences.dart": method_channel_shared_preferences,
    "package:shared_preferences_platform_interface/shared_preferences_platform_interface.dart": shared_preferences_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences_platform_interface.dart","method_channel_shared_preferences.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BwD;IAAS;wBAIZ;AACjD,WAAK,AAAS,QAAD;AAC+B,QAAxB,mDAAO,QAAQ,EAAE;;AAEjB,MAApB,iFAAY,QAAQ;IACtB;;AAYmB;IAAK;;;AA5BW,0GAAa;;EAAO;;;;;;;;;;;;MAEnC,2EAAM;YAAG;;MAgBS,8EAAS;YAC3C;;;;;WCnBuB;AAAR;AACjB,cAGE,gBAHM,MAAM,AAAU,oEACtB,UACiB,4CAAC,OAAO,GAAG;MAEhC;;aAG6B,WAAkB,KAAY;AAAtC;AACnB,cAGE,gBAHM,MAAM,AAAU,oEACtB,AAAe,QAAV,SAAS,EACG,4CAAC,OAAO,GAAG,EAAE,SAAS,KAAK;MAEhD;;;AAGkB;AAChB,cAAoD,gBAA5C,MAAM,AAAU,oEAAmB;MAC7C;;;AAGkC;AACL,2BACvB,MAAM,AAAU,sFAAgC;AAEpD,YAAI,AAAY,WAAD;AACb,gBAAuB;;AAEzB,cAAO,YAAW;MACpB;;;;;;;;;EACF;;;;;;;;;;;;;;;;MAxCoB,2CAAS;;;;;;;;;;;;;AD2ET;AACH,QAAb,AAAM;AACN,cAAO;MACT;;;AAGkC;AAChC,cAAO,uCAAyB;MAClC;;WAG2B;AAAR;AACA,QAAjB,AAAM,qBAAO,GAAG;AAChB,cAAO;MACT;;aAG6B,WAAkB,KAAY;AAAtC;AACD,QAAlB,AAAK,mBAAC,GAAG,EAAI,KAAK;AAClB,cAAO;MACT;;;;IA7B+C,cAAkB;AAAjE;;EAAmE;4FAGP;IAChD,cAAE,sCAAyB,IAAI;AAD3C;;EAC4C","file":"../../../../../../../../../../packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart.lib.js"}');
  // Exports:
  return {
    method_channel_shared_preferences: method_channel_shared_preferences,
    shared_preferences_platform_interface: shared_preferences_platform_interface
  };
}));

//# sourceMappingURL=method_channel_shared_preferences.dart.lib.js.map
