define(['dart_sdk', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__flutter_secure_storage_platform_interface__flutter_secure_storage_platform_interface_dart(dart_sdk, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  var flutter_secure_storage_platform_interface = Object.create(dart.library);
  var $cast = dartx.cast;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    IdentityMapOfString$MapOfString$String: () => (T.IdentityMapOfString$MapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, T.MapOfString$String())))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))()
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
        [MethodChannel_name]: "plugins.it_nomads.com/flutter_secure_storage"
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:flutter_secure_storage_platform_interface/flutter_secure_storage_platform_interface.dart"];
  flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform = class FlutterSecureStoragePlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform._token);
      flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform._instance = instance;
    }
  };
  (flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform.new = function() {
    flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform.__proto__.new.call(this, {token: flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform._token});
    ;
  }).prototype = flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform.prototype;
  dart.addTypeTests(flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform);
  dart.addTypeCaches(flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform);
  dart.setStaticGetterSignature(flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform, () => ['instance']);
  dart.setStaticSetterSignature(flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform, () => ['instance']);
  dart.setLibraryUri(flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform, I[0]);
  dart.setStaticFieldSignature(flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform, () => ['_token', '_instance']);
  dart.defineLazy(flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform, {
    /*flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform._instance*/get _instance() {
      return new flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage.new();
    },
    set _instance(_) {}
  }, false);
  flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage = class MethodChannelFlutterSecureStorage extends flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform {
    containsKey(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(core.bool, function* containsKey() {
        return dart.nullCheck(yield flutter_secure_storage_platform_interface._channel.invokeMethod(core.bool, "containsKey", new (T.IdentityMapOfString$Object()).from(["key", key, "options", options])));
      });
    }
    delete(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return flutter_secure_storage_platform_interface._channel.invokeMethod(dart.void, "delete", new (T.IdentityMapOfString$Object()).from(["key", key, "options", options]));
    }
    deleteAll(opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return flutter_secure_storage_platform_interface._channel.invokeMethod(dart.void, "deleteAll", new (T.IdentityMapOfString$MapOfString$String()).from(["options", options]));
    }
    read(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return flutter_secure_storage_platform_interface._channel.invokeMethod(T.StringN(), "read", new (T.IdentityMapOfString$Object()).from(["key", key, "options", options]));
    }
    readAll(opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(T.MapOfString$String(), function* readAll() {
        let t0, t0$;
        let results = (yield flutter_secure_storage_platform_interface._channel.invokeMethod(core.Map, "readAll", new (T.IdentityMapOfString$MapOfString$String()).from(["options", options])));
        t0$ = (t0 = results, t0 == null ? null : t0[$cast](core.String, core.String));
        return t0$ == null ? new (T.IdentityMapOfString$String()).new() : t0$;
      });
    }
    write(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return flutter_secure_storage_platform_interface._channel.invokeMethod(dart.void, "write", new (T.IdentityMapOfString$Object()).from(["key", key, "value", value, "options", options]));
    }
    static ['_#new#tearOff']() {
      return new flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage.new();
    }
  };
  (flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage.new = function() {
    flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage.__proto__.new.call(this);
    ;
  }).prototype = flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage.prototype;
  dart.addTypeTests(flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage);
  dart.addTypeCaches(flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage);
  dart.setMethodSignature(flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage, () => ({
    __proto__: dart.getMethods(flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage.__proto__),
    containsKey: dart.fnType(async.Future$(core.bool), [], {}, {key: core.String, options: core.Map$(core.String, core.String)}),
    delete: dart.fnType(async.Future$(dart.void), [], {}, {key: core.String, options: core.Map$(core.String, core.String)}),
    deleteAll: dart.fnType(async.Future$(dart.void), [], {}, {options: core.Map$(core.String, core.String)}),
    read: dart.fnType(async.Future$(dart.nullable(core.String)), [], {}, {key: core.String, options: core.Map$(core.String, core.String)}),
    readAll: dart.fnType(async.Future$(core.Map$(core.String, core.String)), [], {}, {options: core.Map$(core.String, core.String)}),
    write: dart.fnType(async.Future$(dart.void), [], {}, {key: core.String, options: core.Map$(core.String, core.String), value: core.String})
  }));
  dart.setLibraryUri(flutter_secure_storage_platform_interface.MethodChannelFlutterSecureStorage, I[0]);
  flutter_secure_storage_platform_interface.Options = class Options extends core.Object {
    get params() {
      return this.toMap();
    }
  };
  (flutter_secure_storage_platform_interface.Options.new = function() {
    ;
  }).prototype = flutter_secure_storage_platform_interface.Options.prototype;
  dart.addTypeTests(flutter_secure_storage_platform_interface.Options);
  dart.addTypeCaches(flutter_secure_storage_platform_interface.Options);
  dart.setGetterSignature(flutter_secure_storage_platform_interface.Options, () => ({
    __proto__: dart.getGetters(flutter_secure_storage_platform_interface.Options.__proto__),
    params: core.Map$(core.String, core.String)
  }));
  dart.setLibraryUri(flutter_secure_storage_platform_interface.Options, I[0]);
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  dart.defineLazy(flutter_secure_storage_platform_interface, {
    /*flutter_secure_storage_platform_interface._channel*/get _channel() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/flutter_secure_storage_platform_interface/flutter_secure_storage_platform_interface.dart", {
    "package:flutter_secure_storage_platform_interface/flutter_secure_storage_platform_interface.dart": flutter_secure_storage_platform_interface
  }, {
    "package:flutter_secure_storage_platform_interface/flutter_secure_storage_platform_interface.dart": ["./src/method_channel_flutter_secure_storage.dart", "./src/options.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["flutter_secure_storage_platform_interface.dart","src/method_channel_flutter_secure_storage.dart","src/options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBsD;IAAS;wBAEZ;AACA,MAA7B,wDAAY,QAAQ,EAAE;AACpB,MAApB,mFAAY,QAAQ;IACtB;;;AAZiC,4GAAa;;EAAO;;;;;;;;MAEjC,6EAAM;YAAG;;MAEO,gFAAS;YACzC;;;;;;UCdc;UACa;AAFP;AAIpB,cAME,gBAND,MAAM,AAAS,2EACd,eACA,2CACE,OAAO,GAAG,EACV,WAAW,OAAO;MAEnB;;;UAIW;UACa;AAE3B,YAAA,AAAS,4EACP,UACA,2CACE,OAAO,GAAG,EACV,WAAW,OAAO;IAErB;;UAI0B;AAE3B,YAAA,AAAS,4EACP,aACA,uDACE,WAAW,OAAO;IAErB;;UAIa;UACa;AAE3B,YAAA,AAAS,8EACP,QACA,2CACE,OAAO,GAAG,EACV,WAAW,OAAO;IAErB;;UAI0B;AADI;;AAG3B,uBAAU,MAAM,AAAS,0EAC7B,WACA,uDACE,WAAW,OAAO;AAItB,oBAAO,OAAO,eAAP,OAAS;cAAT,eAAmD;MAC5D;;;UAIkB;UACA;UACa;AAE3B,YAAA,AAAS,4EAAmB,SAAS,2CACnC,OAAO,GAAG,EACV,SAAS,KAAK,EACd,WAAW,OAAO;IAClB;;;;;;;;EACR;;;;;;;;;;;;;;;AC5EoC;IAAO;;;;EAF1B;;;;;;;;;;;;;MDDG,kDAAQ","file":"../../../../../../../../../../packages/flutter_secure_storage_platform_interface/flutter_secure_storage_platform_interface.dart.lib.js"}');
  // Exports:
  return {
    flutter_secure_storage_platform_interface: flutter_secure_storage_platform_interface
  };
}));

//# sourceMappingURL=flutter_secure_storage_platform_interface.dart.lib.js.map
