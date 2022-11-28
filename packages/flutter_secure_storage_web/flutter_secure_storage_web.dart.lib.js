define(['dart_sdk', 'packages/flutter_secure_storage_platform_interface/flutter_secure_storage_platform_interface.dart', 'packages/flutter_web_plugins/src/plugin_registry.dart'], (function load__packages__flutter_secure_storage_web__flutter_secure_storage_web_dart(dart_sdk, packages__flutter_secure_storage_platform_interface__flutter_secure_storage_platform_interface$46dart, packages__flutter_web_plugins__src__plugin_registry$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const convert = dart_sdk.convert;
  const js_util = dart_sdk.js_util;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flutter_secure_storage_platform_interface = packages__flutter_secure_storage_platform_interface__flutter_secure_storage_platform_interface$46dart.flutter_secure_storage_platform_interface;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  var flutter_secure_storage_web = Object.create(dart.library);
  var $localStorage = dartx.localStorage;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $remove = dartx.remove;
  var $removeWhere = dartx.removeWhere;
  var $length = dartx.length;
  var $entries = dartx.entries;
  var $elementAt = dartx.elementAt;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $_set = dartx._set;
  var $asUint8List = dartx.asUint8List;
  var $buffer = dartx.buffer;
  var $getRandomValues = dartx.getRandomValues;
  var $split = dartx.split;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfbool: () => (T.FutureOfbool = dart.constFn(async.Future$(core.bool)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    StringAndStringTobool: () => (T.StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    VoidToCryptoKey: () => (T.VoidToCryptoKey = dart.constFn(dart.fnType(html.CryptoKey, [])))(),
    CryptoKeyTodynamic: () => (T.CryptoKeyTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.CryptoKey])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_secure_storage_web/flutter_secure_storage_web.dart"];
  var _decryptValue = dart.privateName(flutter_secure_storage_web, "_decryptValue");
  var _getAlgorithm = dart.privateName(flutter_secure_storage_web, "_getAlgorithm");
  var _getEncryptionKey = dart.privateName(flutter_secure_storage_web, "_getEncryptionKey");
  flutter_secure_storage_web.FlutterSecureStorageWeb = class FlutterSecureStorageWeb extends flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform {
    static registerWith(registrar) {
      flutter_secure_storage_platform_interface.FlutterSecureStoragePlatform.instance = new flutter_secure_storage_web.FlutterSecureStorageWeb.new();
    }
    containsKey(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return T.FutureOfbool().value(html.window[$localStorage][$containsKey](dart.nullCheck(options[$_get]("publicKey")) + "." + key));
    }
    delete(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return T.FutureOfvoid().value(html.window[$localStorage][$remove](dart.nullCheck(options[$_get]("publicKey")) + "." + key));
    }
    deleteAll(opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return T.FutureOfvoid().sync(dart.fn(() => html.window[$localStorage][$removeWhere](dart.fn((key, value) => true, T.StringAndStringTobool())), T.VoidTovoid()));
    }
    read(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(T.StringN(), (function* read() {
        let value = html.window[$localStorage][$_get](dart.nullCheck(options[$_get]("publicKey")) + "." + key);
        return yield this[_decryptValue](value, options);
      }).bind(this));
    }
    readAll(opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(T.MapOfString$String(), (function* readAll() {
        let map = new (T.IdentityMapOfString$String()).new();
        let prefix = dart.nullCheck(options[$_get]("publicKey")) + ".";
        for (let j = 0; j < html.window[$localStorage][$length]; j = j + 1) {
          let entry = html.window[$localStorage][$entries][$elementAt](j);
          if (!entry.key[$startsWith](prefix)) {
            continue;
          }
          let value = (yield this[_decryptValue](entry.value, options));
          if (value == null) {
            continue;
          }
          map[$_set](entry.key[$substring](prefix.length), value);
        }
        return map;
      }).bind(this));
    }
    [_getAlgorithm](iv) {
      return {name: "AES-GCM", length: 256, iv: iv};
    }
    [_getEncryptionKey](algorithm, options) {
      return async.async(html.CryptoKey, function* _getEncryptionKey() {
        let encryptionKey = null;
        function encryptionKey$35get() {
          let t1;
          t1 = encryptionKey;
          return t1 == null ? dart.throw(new _internal.LateError.localNI("encryptionKey")) : t1;
        }
        dart.fn(encryptionKey$35get, T.VoidToCryptoKey());
        function encryptionKey$35set(encryptionKey$35param) {
          return encryptionKey = encryptionKey$35param;
        }
        dart.fn(encryptionKey$35set, T.CryptoKeyTodynamic());
        let key = dart.nullCheck(options[$_get]("publicKey"));
        if (html.window[$localStorage][$containsKey](key)) {
          let jwk = convert.base64Decode(dart.nullCheck(html.window[$localStorage][$_get](key)));
          encryptionKey$35set(yield js_util.promiseToFuture(html.CryptoKey, dart.global.crypto.subtle.importKey("raw", jwk, algorithm, false, T.JSArrayOfString().of(["encrypt", "decrypt"]))));
        } else {
          encryptionKey$35set(yield js_util.promiseToFuture(html.CryptoKey, dart.global.crypto.subtle.generateKey(algorithm, true, T.JSArrayOfString().of(["encrypt", "decrypt"]))));
          let jsonWebKey = (yield js_util.promiseToFuture(typed_data.ByteBuffer, dart.global.crypto.subtle.exportKey("raw", encryptionKey$35get())));
          html.window[$localStorage][$_set](key, convert.base64Encode(jsonWebKey[$asUint8List]()));
        }
        return encryptionKey$35get();
      });
    }
    write(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(dart.void, (function* write() {
        let iv = dart.nullCheck(html.window.crypto)[$getRandomValues](_native_typed_data.NativeUint8List.new(12))[$buffer][$asUint8List]();
        let algorithm = this[_getAlgorithm](iv);
        let encryptionKey = (yield this[_getEncryptionKey](algorithm, options));
        let encryptedContent = (yield js_util.promiseToFuture(typed_data.ByteBuffer, dart.global.crypto.subtle.encrypt(algorithm, encryptionKey, _native_typed_data.NativeUint8List.fromList(convert.utf8.encode(value)))));
        let encoded = convert.base64Encode(iv) + "." + convert.base64Encode(encryptedContent[$asUint8List]());
        html.window[$localStorage][$_set](dart.nullCheck(options[$_get]("publicKey")) + "." + key, encoded);
      }).bind(this));
    }
    [_decryptValue](cypherText, options) {
      return async.async(T.StringN(), (function* _decryptValue() {
        if (cypherText == null) {
          return null;
        }
        let parts = cypherText[$split](".");
        let iv = convert.base64Decode(parts[$_get](0));
        let algorithm = this[_getAlgorithm](iv);
        let decryptionKey = (yield this[_getEncryptionKey](algorithm, options));
        let value = convert.base64Decode(parts[$_get](1));
        let decryptedContent = (yield js_util.promiseToFuture(typed_data.ByteBuffer, dart.global.crypto.subtle.decrypt(this[_getAlgorithm](iv), decryptionKey, _native_typed_data.NativeUint8List.fromList(value))));
        let plainText = convert.utf8.decode(decryptedContent[$asUint8List]());
        return plainText;
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new flutter_secure_storage_web.FlutterSecureStorageWeb.new();
    }
  };
  (flutter_secure_storage_web.FlutterSecureStorageWeb.new = function() {
    flutter_secure_storage_web.FlutterSecureStorageWeb.__proto__.new.call(this);
    ;
  }).prototype = flutter_secure_storage_web.FlutterSecureStorageWeb.prototype;
  dart.addTypeTests(flutter_secure_storage_web.FlutterSecureStorageWeb);
  dart.addTypeCaches(flutter_secure_storage_web.FlutterSecureStorageWeb);
  dart.setMethodSignature(flutter_secure_storage_web.FlutterSecureStorageWeb, () => ({
    __proto__: dart.getMethods(flutter_secure_storage_web.FlutterSecureStorageWeb.__proto__),
    containsKey: dart.fnType(async.Future$(core.bool), [], {}, {key: core.String, options: core.Map$(core.String, core.String)}),
    delete: dart.fnType(async.Future$(dart.void), [], {}, {key: core.String, options: core.Map$(core.String, core.String)}),
    deleteAll: dart.fnType(async.Future$(dart.void), [], {}, {options: core.Map$(core.String, core.String)}),
    read: dart.fnType(async.Future$(dart.nullable(core.String)), [], {}, {key: core.String, options: core.Map$(core.String, core.String)}),
    readAll: dart.fnType(async.Future$(core.Map$(core.String, core.String)), [], {}, {options: core.Map$(core.String, core.String)}),
    [_getAlgorithm]: dart.fnType(dart.packageJSType("Algorithm"), [typed_data.Uint8List]),
    [_getEncryptionKey]: dart.fnType(async.Future$(html.CryptoKey), [dart.packageJSType("Algorithm"), core.Map$(core.String, core.String)]),
    write: dart.fnType(async.Future$(dart.void), [], {}, {key: core.String, options: core.Map$(core.String, core.String), value: core.String}),
    [_decryptValue]: dart.fnType(async.Future$(dart.nullable(core.String)), [dart.nullable(core.String), core.Map$(core.String, core.String)])
  }));
  dart.setStaticMethodSignature(flutter_secure_storage_web.FlutterSecureStorageWeb, () => ['registerWith']);
  dart.setLibraryUri(flutter_secure_storage_web.FlutterSecureStorageWeb, I[0]);
  dart.setStaticFieldSignature(flutter_secure_storage_web.FlutterSecureStorageWeb, () => ['_PUBLIC_KEY']);
  dart.defineLazy(flutter_secure_storage_web.FlutterSecureStorageWeb, {
    /*flutter_secure_storage_web.FlutterSecureStorageWeb._PUBLIC_KEY*/get _PUBLIC_KEY() {
      return "publicKey";
    }
  }, false);
  dart.trackLibraries("packages/flutter_secure_storage_web/flutter_secure_storage_web.dart", {
    "package:flutter_secure_storage_web/flutter_secure_storage_web.dart": flutter_secure_storage_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_secure_storage_web.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter_secure_storage_web/flutter_secure_storage_web.dart.lib.js"}');
  // Exports:
  return {
    flutter_secure_storage_web: flutter_secure_storage_web
  };
}));

//# sourceMappingURL=flutter_secure_storage_web.dart.lib.js.map
