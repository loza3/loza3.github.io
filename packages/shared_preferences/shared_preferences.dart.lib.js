define(['dart_sdk', 'packages/shared_preferences_platform_interface/method_channel_shared_preferences.dart'], (function load__packages__shared_preferences__shared_preferences_dart(dart_sdk, packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_preferences_platform_interface = packages__shared_preferences_platform_interface__method_channel_shared_preferences$46dart.shared_preferences_platform_interface;
  var shared_preferences = Object.create(dart.library);
  var $keys = dartx.keys;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $cast = dartx.cast;
  var $toList = dartx.toList;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $clear = dartx.clear;
  var $addAll = dartx.addAll;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $map = dartx.map;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    CompleterOfSharedPreferences: () => (T.CompleterOfSharedPreferences = dart.constFn(async.Completer$(shared_preferences.SharedPreferences)))(),
    LinkedHashSetOfString: () => (T.LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    ListN: () => (T.ListN = dart.constFn(dart.nullable(core.List)))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListNOfString: () => (T.ListNOfString = dart.constFn(dart.nullable(T.ListOfString())))(),
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$Object: () => (T.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    MapEntryOfString$Object: () => (T.MapEntryOfString$Object = dart.constFn(core.MapEntry$(core.String, core.Object)))(),
    StringAndObjectToMapEntryOfString$Object: () => (T.StringAndObjectToMapEntryOfString$Object = dart.constFn(dart.fnType(T.MapEntryOfString$Object(), [core.String, core.Object])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/shared_preferences-2.0.15/lib/shared_preferences.dart",
    "package:shared_preferences/shared_preferences.dart"
  ];
  var _preferenceCache$ = dart.privateName(shared_preferences, "_preferenceCache");
  var _setValue = dart.privateName(shared_preferences, "_setValue");
  shared_preferences.SharedPreferences = class SharedPreferences extends core.Object {
    static ['_#_#tearOff'](_preferenceCache) {
      return new shared_preferences.SharedPreferences.__(_preferenceCache);
    }
    static get _store() {
      return shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance;
    }
    static getInstance() {
      return async.async(shared_preferences.SharedPreferences, function* getInstance() {
        if (shared_preferences.SharedPreferences._completer == null) {
          let completer = T.CompleterOfSharedPreferences().new();
          try {
            let preferencesMap = (yield shared_preferences.SharedPreferences._getSharedPreferencesMap());
            completer.complete(new shared_preferences.SharedPreferences.__(preferencesMap));
          } catch (e$) {
            let e = dart.getThrown(e$);
            if (core.Exception.is(e)) {
              completer.completeError(e);
              let sharedPrefsFuture = completer.future;
              shared_preferences.SharedPreferences._completer = null;
              return sharedPrefsFuture;
            } else
              throw e$;
          }
          shared_preferences.SharedPreferences._completer = completer;
        }
        return dart.nullCheck(shared_preferences.SharedPreferences._completer).future;
      });
    }
    getKeys() {
      return T.LinkedHashSetOfString().from(this[_preferenceCache$][$keys]);
    }
    get(key) {
      return this[_preferenceCache$][$_get](key);
    }
    getBool(key) {
      return T.boolN().as(this[_preferenceCache$][$_get](key));
    }
    getInt(key) {
      return T.intN().as(this[_preferenceCache$][$_get](key));
    }
    getDouble(key) {
      return T.doubleN().as(this[_preferenceCache$][$_get](key));
    }
    getString(key) {
      return T.StringN().as(this[_preferenceCache$][$_get](key));
    }
    containsKey(key) {
      return this[_preferenceCache$][$containsKey](key);
    }
    getStringList(key) {
      let t1;
      let list = T.ListN().as(this[_preferenceCache$][$_get](key));
      if (list != null && !T.ListOfString().is(list)) {
        list = list[$cast](core.String)[$toList]();
        this[_preferenceCache$][$_set](key, list);
      }
      return T.ListNOfString().as((t1 = list, t1 == null ? null : t1[$toList]()));
    }
    setBool(key, value) {
      return this[_setValue]("Bool", key, value);
    }
    setInt(key, value) {
      return this[_setValue]("Int", key, value);
    }
    setDouble(key, value) {
      return this[_setValue]("Double", key, value);
    }
    setString(key, value) {
      return this[_setValue]("String", key, value);
    }
    setStringList(key, value) {
      return this[_setValue]("StringList", key, value);
    }
    remove(key) {
      let prefixedKey = "flutter." + key;
      this[_preferenceCache$][$remove](key);
      return shared_preferences.SharedPreferences._store.remove(prefixedKey);
    }
    [_setValue](valueType, key, value) {
      core.ArgumentError.checkNotNull(core.Object, value, "value");
      let prefixedKey = "flutter." + key;
      if (T.ListOfString().is(value)) {
        this[_preferenceCache$][$_set](key, value[$toList]());
      } else {
        this[_preferenceCache$][$_set](key, value);
      }
      return shared_preferences.SharedPreferences._store.setValue(valueType, prefixedKey, value);
    }
    commit() {
      return async.async(core.bool, function* commit() {
        return true;
      });
    }
    clear() {
      this[_preferenceCache$][$clear]();
      return shared_preferences.SharedPreferences._store.clear();
    }
    reload() {
      return async.async(dart.void, (function* reload() {
        let preferences = (yield shared_preferences.SharedPreferences._getSharedPreferencesMap());
        this[_preferenceCache$][$clear]();
        this[_preferenceCache$][$addAll](preferences);
      }).bind(this));
    }
    static _getSharedPreferencesMap() {
      return async.async(T.MapOfString$Object(), function* _getSharedPreferencesMap() {
        let fromSystem = (yield shared_preferences.SharedPreferences._store.getAll());
        if (!(fromSystem !== null)) dart.assertFailed(null, I[0], 165, 12, "fromSystem != null");
        let preferencesMap = new (T.IdentityMapOfString$Object()).new();
        for (let key of fromSystem[$keys]) {
          if (!key[$startsWith]("flutter.")) dart.assertFailed(null, I[0], 169, 14, "key.startsWith(_prefix)");
          preferencesMap[$_set](key[$substring]("flutter.".length), dart.nullCheck(fromSystem[$_get](key)));
        }
        return preferencesMap;
      });
    }
    static setMockInitialValues(values) {
      let newValues = values[$map](core.String, core.Object, dart.fn((key, value) => {
        let newKey = key;
        if (!key[$startsWith]("flutter.")) {
          newKey = "flutter." + key;
        }
        return new (T.MapEntryOfString$Object()).__(newKey, value);
      }, T.StringAndObjectToMapEntryOfString$Object()));
      shared_preferences_platform_interface.SharedPreferencesStorePlatform.instance = new shared_preferences_platform_interface.InMemorySharedPreferencesStore.withData(newValues);
      shared_preferences.SharedPreferences._completer = null;
    }
  };
  (shared_preferences.SharedPreferences.__ = function(_preferenceCache) {
    this[_preferenceCache$] = _preferenceCache;
    ;
  }).prototype = shared_preferences.SharedPreferences.prototype;
  dart.addTypeTests(shared_preferences.SharedPreferences);
  dart.addTypeCaches(shared_preferences.SharedPreferences);
  dart.setMethodSignature(shared_preferences.SharedPreferences, () => ({
    __proto__: dart.getMethods(shared_preferences.SharedPreferences.__proto__),
    getKeys: dart.fnType(core.Set$(core.String), []),
    get: dart.fnType(dart.nullable(core.Object), [core.String]),
    getBool: dart.fnType(dart.nullable(core.bool), [core.String]),
    getInt: dart.fnType(dart.nullable(core.int), [core.String]),
    getDouble: dart.fnType(dart.nullable(core.double), [core.String]),
    getString: dart.fnType(dart.nullable(core.String), [core.String]),
    containsKey: dart.fnType(core.bool, [core.String]),
    getStringList: dart.fnType(dart.nullable(core.List$(core.String)), [core.String]),
    setBool: dart.fnType(async.Future$(core.bool), [core.String, core.bool]),
    setInt: dart.fnType(async.Future$(core.bool), [core.String, core.int]),
    setDouble: dart.fnType(async.Future$(core.bool), [core.String, core.double]),
    setString: dart.fnType(async.Future$(core.bool), [core.String, core.String]),
    setStringList: dart.fnType(async.Future$(core.bool), [core.String, core.List$(core.String)]),
    remove: dart.fnType(async.Future$(core.bool), [core.String]),
    [_setValue]: dart.fnType(async.Future$(core.bool), [core.String, core.String, core.Object]),
    commit: dart.fnType(async.Future$(core.bool), []),
    clear: dart.fnType(async.Future$(core.bool), []),
    reload: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setStaticMethodSignature(shared_preferences.SharedPreferences, () => ['getInstance', '_getSharedPreferencesMap', 'setMockInitialValues']);
  dart.setStaticGetterSignature(shared_preferences.SharedPreferences, () => ['_store']);
  dart.setLibraryUri(shared_preferences.SharedPreferences, I[1]);
  dart.setFieldSignature(shared_preferences.SharedPreferences, () => ({
    __proto__: dart.getFields(shared_preferences.SharedPreferences.__proto__),
    [_preferenceCache$]: dart.finalFieldType(core.Map$(core.String, core.Object))
  }));
  dart.setStaticFieldSignature(shared_preferences.SharedPreferences, () => ['_prefix', '_completer']);
  dart.defineLazy(shared_preferences.SharedPreferences, {
    /*shared_preferences.SharedPreferences._prefix*/get _prefix() {
      return "flutter.";
    },
    /*shared_preferences.SharedPreferences._completer*/get _completer() {
      return null;
    },
    set _completer(_) {}
  }, false);
  dart.trackLibraries("packages/shared_preferences/shared_preferences.dart", {
    "package:shared_preferences/shared_preferences.dart": shared_preferences
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBM,YAA+B;IAAQ;;AAMC;AAC1C,YAAI,AAAW;AACsB,0BAC/B;AACJ;AAC4B,kCACtB,MAAM;AAC6C,YAAvD,AAAU,SAAD,UAA4B,4CAAE,cAAc;;gBACjC;AAApB;AAG0B,cAA1B,AAAU,SAAD,eAAe,CAAC;AACO,sCAAoB,AAAU,SAAD;AAC5C,cAAjB,kDAAa;AACb,oBAAO,kBAAiB;;;;AAEJ,UAAtB,kDAAa,SAAS;;AAExB,cAAiB,AAAE,gBAAZ;MACT;;;AAayB,4CAAiB,AAAiB;IAAK;QAG7C;AAAQ,YAAA,AAAgB,gCAAC,GAAG;IAAC;YAI3B;AAAQ,YAAsB,cAAtB,AAAgB,+BAAC,GAAG;IAAU;WAIxC;AAAQ,YAAsB,aAAtB,AAAgB,+BAAC,GAAG;IAAS;cAI/B;AAAQ,YAAsB,gBAAtB,AAAgB,+BAAC,GAAG;IAAY;cAIxC;AAAQ,YAAsB,gBAAtB,AAAgB,+BAAC,GAAG;IAAY;gBAGzC;AAAQ,YAAA,AAAiB,uCAAY,GAAG;IAAC;kBAI9B;;AAClB,iBAA6B,aAAtB,AAAgB,+BAAC,GAAG;AAC1C,UAAI,IAAI,aAAiB,oBAAL,IAAI;AACa,QAAnC,OAAO,AAAK,AAAe,IAAhB;AACiB,QAA5B,AAAgB,+BAAC,GAAG,EAAI,IAAI;;AAG9B,YAAsB,4BAAf,IAAI,eAAJ,OAAM;IACf;YAG4B,KAAU;AAAU,6BAAU,QAAQ,GAAG,EAAE,KAAK;IAAC;WAGlD,KAAS;AAAU,6BAAU,OAAO,GAAG,EAAE,KAAK;IAAC;cAK5C,KAAY;AACtC,6BAAU,UAAU,GAAG,EAAE,KAAK;IAAC;cAUL,KAAY;AACtC,6BAAU,UAAU,GAAG,EAAE,KAAK;IAAC;kBAGD,KAAkB;AAChD,6BAAU,cAAc,GAAG,EAAE,KAAK;IAAC;WAGZ;AACZ,wBAA4B,aAAJ,GAAG;AACZ,MAA5B,AAAiB,iCAAO,GAAG;AAC3B,YAAO,AAAO,oDAAO,WAAW;IAClC;gBAE8B,WAAkB,KAAY;AAChB,MAA5B,6CAAa,KAAK,EAAE;AACrB,wBAA4B,aAAJ,GAAG;AACxC,UAAU,oBAAN,KAAK;AAE+B,QAAtC,AAAgB,+BAAC,GAAG,EAAI,AAAM,KAAD;;AAEA,QAA7B,AAAgB,+BAAC,GAAG,EAAI,KAAK;;AAE/B,YAAO,AAAO,sDAAS,SAAS,EAAE,WAAW,EAAE,KAAK;IACtD;;AAKmB;AAAY;MAAI;;;AAIT,MAAxB,AAAiB;AACjB,YAAO,AAAO;IAChB;;AAMmB;AACS,2BACtB,MAAwB;AACJ,QAAxB,AAAiB;AACmB,QAApC,AAAiB,iCAAO,WAAW;MACrC;;;AAE2D;AAC/B,0BAAa,MAAM,AAAO;AACpD,cAAO,AAAW,UAAD;AAES,6BAAiC;AAC3D,iBAAkB,MAAO,AAAW,WAAD;AACjC,eAAO,AAAI,GAAD;AACsD,UAAhE,AAAc,cAAA,QAAC,AAAI,GAAD,aAAmB,oBAA0B,eAAf,AAAU,UAAA,QAAC,GAAG;;AAEhE,cAAO,eAAc;MACvB;;gCAMqD;AACzB,sBACtB,AAAO,MAAD,iCAAqB,SAAQ,KAAY;AAC1C,qBAAS,GAAG;AACnB,aAAK,AAAI,GAAD;AACiB,UAAvB,SAAuB,aAAJ,GAAG;;AAExB,cAAO,sCAAyB,MAAM,EAAE,KAAK;;AAGO,MADvB,gFACI,kFAAS,SAAS;AACpC,MAAjB,kDAAa;IACf;;;IAhLyB;;EAAiB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEtB,4CAAO;;;MACU,+CAAU","file":"../../../../../../../../../../packages/shared_preferences/shared_preferences.dart.lib.js"}');
  // Exports:
  return {
    shared_preferences: shared_preferences
  };
}));

//# sourceMappingURL=shared_preferences.dart.lib.js.map
