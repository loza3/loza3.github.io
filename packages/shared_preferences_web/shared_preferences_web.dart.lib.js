define(['dart_sdk', 'packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart', 'packages/flutter_web_plugins/src/plugin_registry.dart'], (function load__packages__shared_preferences_web__shared_preferences_web_dart(dart_sdk, packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart, packages__flutter_web_plugins__src__plugin_registry$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_preferences_platform_interface = packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart.shared_preferences_platform_interface;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  var shared_preferences_web = Object.create(dart.library);
  var $remove = dartx.remove;
  var $localStorage = dartx.localStorage;
  var $forEach = dartx.forEach;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $startsWith = dartx.startsWith;
  var $keys = dartx.keys;
  var $where = dartx.where;
  var $cast = dartx.cast;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$Object: () => (T.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    StringTobool: () => (T.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:shared_preferences_web/shared_preferences_web.dart"];
  var _storedFlutterKeys = dart.privateName(shared_preferences_web, "_storedFlutterKeys");
  var _decodeValue = dart.privateName(shared_preferences_web, "_decodeValue");
  var _checkPrefix = dart.privateName(shared_preferences_web, "_checkPrefix");
  var _encodeValue = dart.privateName(shared_preferences_web, "_encodeValue");
  shared_preferences_web.SharedPreferencesPlugin = class SharedPreferencesPlugin extends shared_preferences_platform_interface.SharedPreferencesStorePlatform {
    static registerWith(registrar) {
      shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance = new shared_preferences_web.SharedPreferencesPlugin.new();
    }
    clear() {
      return async.async(core.bool, (function* clear() {
        this[_storedFlutterKeys][$forEach](dart.bind(html.window[$localStorage], $remove));
        return true;
      }).bind(this));
    }
    getAll() {
      return async.async(T.MapOfString$Object(), (function* getAll() {
        let allData = new (T.IdentityMapOfString$Object()).new();
        for (let key of this[_storedFlutterKeys]) {
          allData[$_set](key, this[_decodeValue](dart.nullCheck(html.window[$localStorage][$_get](key))));
        }
        return allData;
      }).bind(this));
    }
    remove(key) {
      return async.async(core.bool, (function* remove() {
        this[_checkPrefix](key);
        html.window[$localStorage][$remove](key);
        return true;
      }).bind(this));
    }
    setValue(valueType, key, value) {
      return async.async(core.bool, (function* setValue() {
        this[_checkPrefix](key);
        html.window[$localStorage][$_set](key, this[_encodeValue](value));
        return true;
      }).bind(this));
    }
    [_checkPrefix](key) {
      if (!key[$startsWith]("flutter.")) {
        dart.throw(new core.FormatException.new("Shared preferences keys must start with prefix \"flutter.\".", key, 0));
      }
    }
    get [_storedFlutterKeys]() {
      return html.window[$localStorage][$keys][$where](dart.fn(key => key[$startsWith]("flutter."), T.StringTobool()));
    }
    [_encodeValue](value) {
      return convert.json.encode(value);
    }
    [_decodeValue](encodedValue) {
      let decodedValue = convert.json.decode(encodedValue);
      if (core.List.is(decodedValue)) {
        return decodedValue[$cast](core.String);
      }
      return dart.nullCheck(decodedValue);
    }
    static ['_#new#tearOff']() {
      return new shared_preferences_web.SharedPreferencesPlugin.new();
    }
  };
  (shared_preferences_web.SharedPreferencesPlugin.new = function() {
    shared_preferences_web.SharedPreferencesPlugin.__proto__.new.call(this);
    ;
  }).prototype = shared_preferences_web.SharedPreferencesPlugin.prototype;
  dart.addTypeTests(shared_preferences_web.SharedPreferencesPlugin);
  dart.addTypeCaches(shared_preferences_web.SharedPreferencesPlugin);
  dart.setMethodSignature(shared_preferences_web.SharedPreferencesPlugin, () => ({
    __proto__: dart.getMethods(shared_preferences_web.SharedPreferencesPlugin.__proto__),
    clear: dart.fnType(async.Future$(core.bool), []),
    getAll: dart.fnType(async.Future$(core.Map$(core.String, core.Object)), []),
    remove: dart.fnType(async.Future$(core.bool), [core.String]),
    setValue: dart.fnType(async.Future$(core.bool), [core.String, core.String, dart.nullable(core.Object)]),
    [_checkPrefix]: dart.fnType(dart.void, [core.String]),
    [_encodeValue]: dart.fnType(core.String, [dart.nullable(core.Object)]),
    [_decodeValue]: dart.fnType(core.Object, [core.String])
  }));
  dart.setStaticMethodSignature(shared_preferences_web.SharedPreferencesPlugin, () => ['registerWith']);
  dart.setGetterSignature(shared_preferences_web.SharedPreferencesPlugin, () => ({
    __proto__: dart.getGetters(shared_preferences_web.SharedPreferencesPlugin.__proto__),
    [_storedFlutterKeys]: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(shared_preferences_web.SharedPreferencesPlugin, I[0]);
  dart.trackLibraries("packages/shared_preferences_web/shared_preferences_web.dart", {
    "package:shared_preferences_web/shared_preferences_web.dart": shared_preferences_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wBAgBsC;AACiC,MAApC,gFAAW;IAC5C;;AAGkB;AAI2C,QAA3D,AAAmB,mCAAiC,UAApB,AAAO;AACvC,cAAO;MACT;;;AAGkC;AACN,sBAA0B;AACpD,iBAAkB,MAAO;AACoC,UAA3D,AAAO,OAAA,QAAC,GAAG,EAAI,mBAA0C,eAAxB,AAAO,AAAY,kCAAC,GAAG;;AAE1D,cAAO,QAAO;MAChB;;WAG2B;AAAR;AACA,QAAjB,mBAAa,GAAG;AACoB,QAA/B,AAAO,AAAa,oCAAO,GAAG;AACnC,cAAO;MACT;;aAG6B,WAAkB,KAAa;AAAvC;AACF,QAAjB,mBAAa,GAAG;AACmC,QAA9C,AAAO,AAAY,kCAAC,GAAG,EAAI,mBAAa,KAAK;AAClD,cAAO;MACT;;mBAEyB;AACvB,WAAK,AAAI,GAAD,cAAY;AAKjB,QAJD,WAAM,6BACJ,gEACA,GAAG,EACH;;IAGN;;AAGE,YAAY,AAAO,AAAa,AAC3B,2CAAM,QAAQ,OAAQ,AAAI,GAAD,cAAY;IAC5C;mBAE4B;AAC1B,YAAO,AAAK,qBAAO,KAAK;IAC1B;mBAE2B;AACX,yBAAe,AAAK,oBAAO,YAAY;AAErD,UAAiB,aAAb,YAAY;AAId,cAAO,AAAa,aAAD;;AAGrB,YAAmB,gBAAZ,YAAY;IACrB;;;;;;;;EACF","file":"../../../../../../../../../../packages/shared_preferences_web/shared_preferences_web.dart.lib.js"}');
  // Exports:
  return {
    shared_preferences_web: shared_preferences_web
  };
}));

//# sourceMappingURL=shared_preferences_web.dart.lib.js.map
