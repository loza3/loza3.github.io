define(['dart_sdk', 'packages/flare_flutter/asset_provider.dart'], (function load__packages__flare_flutter__cache_asset_dart(dart_sdk, packages__flare_flutter__asset_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const asset_provider = packages__flare_flutter__asset_provider$46dart.asset_provider;
  var cache_asset = Object.create(dart.library);
  var cache = Object.create(dart.library);
  var $clear = dartx.clear;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $_equals = dartx._equals;
  var $removeWhere = dartx.removeWhere;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    CompleterOfCacheAsset: () => (T.CompleterOfCacheAsset = dart.constFn(async.Completer$(cache_asset.CacheAsset)))(),
    JSArrayOfCompleterOfCacheAsset: () => (T.JSArrayOfCompleterOfCacheAsset = dart.constFn(_interceptors.JSArray$(T.CompleterOfCacheAsset())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flare_flutter/cache_asset.dart",
    "package:flare_flutter/cache.dart"
  ];
  var __CacheAsset__cache = dart.privateName(cache_asset, "_#CacheAsset#_cache");
  var _refCount = dart.privateName(cache_asset, "_refCount");
  var _callbacks = dart.privateName(cache_asset, "_callbacks");
  var _cache = dart.privateName(cache_asset, "_cache");
  cache_asset.CacheAsset = class CacheAsset extends core.Object {
    get [_cache]() {
      let t0;
      t0 = this[__CacheAsset__cache];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_cache")) : t0;
    }
    set [_cache](library$32package$58flare_flutter$47cache_asset$46dart$58$58_cache$35param) {
      this[__CacheAsset__cache] = library$32package$58flare_flutter$47cache_asset$46dart$58$58_cache$35param;
    }
    completeLoad() {
      for (let callback of this[_callbacks]) {
        callback.complete(this);
      }
      this[_callbacks][$clear]();
    }
    deref() {
      this[_refCount] = this[_refCount] - 1;
      if (this[_refCount] === 0) {
        this[_cache].drop(this);
      }
    }
    load(cache, assetProvider) {
      return this[_cache] = cache;
    }
    onLoaded() {
      return async.async(cache_asset.CacheAsset, (function* onLoaded() {
        if (this.isAvailable) {
          return this;
        }
        let completer = T.CompleterOfCacheAsset().new();
        this[_callbacks][$add](completer);
        return completer.future;
      }).bind(this));
    }
    ref() {
      this[_refCount] = this[_refCount] + 1;
      if (this[_refCount] === 1) {
        this[_cache].hold(this);
      }
    }
  };
  (cache_asset.CacheAsset.new = function() {
    this[__CacheAsset__cache] = null;
    this[_refCount] = 0;
    this[_callbacks] = T.JSArrayOfCompleterOfCacheAsset().of([]);
    ;
  }).prototype = cache_asset.CacheAsset.prototype;
  dart.addTypeTests(cache_asset.CacheAsset);
  dart.addTypeCaches(cache_asset.CacheAsset);
  dart.setMethodSignature(cache_asset.CacheAsset, () => ({
    __proto__: dart.getMethods(cache_asset.CacheAsset.__proto__),
    completeLoad: dart.fnType(dart.void, []),
    deref: dart.fnType(dart.void, []),
    load: dart.fnType(dart.void, [cache.Cache$(cache_asset.CacheAsset), asset_provider.AssetProvider]),
    onLoaded: dart.fnType(async.Future$(cache_asset.CacheAsset), []),
    ref: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(cache_asset.CacheAsset, () => ({
    __proto__: dart.getGetters(cache_asset.CacheAsset.__proto__),
    [_cache]: cache.Cache$(cache_asset.CacheAsset)
  }));
  dart.setSetterSignature(cache_asset.CacheAsset, () => ({
    __proto__: dart.getSetters(cache_asset.CacheAsset.__proto__),
    [_cache]: cache.Cache$(cache_asset.CacheAsset)
  }));
  dart.setLibraryUri(cache_asset.CacheAsset, I[0]);
  dart.setFieldSignature(cache_asset.CacheAsset, () => ({
    __proto__: dart.getFields(cache_asset.CacheAsset.__proto__),
    [__CacheAsset__cache]: dart.fieldType(dart.nullable(cache.Cache$(cache_asset.CacheAsset))),
    [_refCount]: dart.fieldType(core.int),
    [_callbacks]: dart.finalFieldType(core.List$(async.Completer$(cache_asset.CacheAsset)))
  }));
  var _assets = dart.privateName(cache, "_assets");
  var _toPrune = dart.privateName(cache, "_toPrune");
  var _pruneTimer = dart.privateName(cache, "_pruneTimer");
  var _prune = dart.privateName(cache, "_prune");
  const _is_Cache_default = Symbol('_is_Cache_default');
  cache.Cache$ = dart.generic(T => {
    var __t$LinkedMapOfAssetProvider$T = () => (__t$LinkedMapOfAssetProvider$T = dart.constFn(_js_helper.LinkedMap$(asset_provider.AssetProvider, T)))();
    var __t$LinkedHashSetOfT = () => (__t$LinkedHashSetOfT = dart.constFn(collection.LinkedHashSet$(T)))();
    var __t$AssetProviderAndTTobool = () => (__t$AssetProviderAndTTobool = dart.constFn(dart.fnType(core.bool, [asset_provider.AssetProvider, T])))();
    class Cache extends core.Object {
      get isPruningEnabled() {
        return true;
      }
      drop(asset) {
        let t0;
        T.as(asset);
        this[_toPrune].add(asset);
        t0 = this[_pruneTimer];
        t0 == null ? null : t0.cancel();
        if (this.isPruningEnabled) {
          this[_pruneTimer] = async.Timer.new(this.pruneAfter, dart.bind(this, _prune));
        }
      }
      getAsset(assetProvider) {
        return async.async(T, (function* getAsset() {
          let asset = this[_assets][$_get](assetProvider);
          if (asset != null) {
            if (asset.isAvailable) {
              return asset;
            } else {
              return T.as(yield asset.onLoaded());
            }
          }
          asset = this.makeAsset();
          this[_assets][$_set](assetProvider, asset);
          asset.load(this, assetProvider);
          return asset.isAvailable ? asset : T.as(yield asset.onLoaded());
        }).bind(this));
      }
      getWarmAsset(assetProvider) {
        let t0, t0$;
        let asset = this[_assets][$_get](assetProvider);
        return dart.test((t0$ = (t0 = asset, t0 == null ? null : t0.isAvailable), t0$ == null ? false : t0$)) ? asset : null;
      }
      hold(asset) {
        T.as(asset);
        this[_toPrune].remove(asset);
      }
      [_prune]() {
        for (let asset of this[_toPrune]) {
          this[_assets][$removeWhere](dart.fn((assetProvider, cached) => cached[$_equals](asset), __t$AssetProviderAndTTobool()));
        }
        this[_toPrune].clear();
        this[_pruneTimer] = null;
      }
    }
    (Cache.new = function() {
      this[_assets] = new (__t$LinkedMapOfAssetProvider$T()).new();
      this[_toPrune] = __t$LinkedHashSetOfT().new();
      this[_pruneTimer] = null;
      ;
    }).prototype = Cache.prototype;
    dart.addTypeTests(Cache);
    Cache.prototype[_is_Cache_default] = true;
    dart.addTypeCaches(Cache);
    dart.setMethodSignature(Cache, () => ({
      __proto__: dart.getMethods(Cache.__proto__),
      drop: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      getAsset: dart.fnType(async.Future$(T), [asset_provider.AssetProvider]),
      getWarmAsset: dart.fnType(dart.nullable(T), [asset_provider.AssetProvider]),
      hold: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [_prune]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(Cache, () => ({
      __proto__: dart.getGetters(Cache.__proto__),
      isPruningEnabled: core.bool
    }));
    dart.setLibraryUri(Cache, I[1]);
    dart.setFieldSignature(Cache, () => ({
      __proto__: dart.getFields(Cache.__proto__),
      [_assets]: dart.finalFieldType(core.Map$(asset_provider.AssetProvider, T)),
      [_toPrune]: dart.finalFieldType(core.Set$(T)),
      [_pruneTimer]: dart.fieldType(dart.nullable(async.Timer))
    }));
    return Cache;
  });
  cache.Cache = cache.Cache$();
  dart.addTypeTests(cache.Cache, _is_Cache_default);
  dart.trackLibraries("packages/flare_flutter/cache_asset.dart", {
    "package:flare_flutter/cache_asset.dart": cache_asset,
    "package:flare_flutter/cache.dart": cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cache_asset.dart","cache.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOa;;IAAM;iBAAN;;IAAM;;AAOf,eAAiC,WAAY;AACpB,QAAvB,AAAS,QAAD,UAAU;;AAEF,MAAlB,AAAW;IACb;;AAGa,MAAX,kBAAA,AAAS,kBAAA;AACT,UAAI,AAAU,oBAAG;AACE,QAAjB,AAAO,kBAAK;;IAEhB;SAEgB,OAAqB;AAAkB,4BAAS,KAAK;;;AAE1C;AACzB,YAAI;AACF,gBAAO;;AAEa,wBAAY;AACT,QAAzB,AAAW,uBAAI,SAAS;AACxB,cAAO,AAAU,UAAD;MAClB;;;AAGa,MAAX,kBAAA,AAAS,kBAAA;AACT,UAAI,AAAU,oBAAG;AACE,QAAjB,AAAO,kBAAK;;IAEhB;;;gCApCW;IACP,kBAAY;IACkB,mBAAa;;EAmCjD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AC/B+B;MAAI;WAGrB;;;AACS,QAAnB,AAAS,mBAAI,KAAK;AACG,aAArB;4BAAa;AACb,YAAI;AACqC,UAAvC,oBAAc,gBAAM,2BAAY;;MAEpC;eAGiC;AAAf;AACb,sBAAQ,AAAO,qBAAC,aAAa;AAChC,cAAI,KAAK;AACP,gBAAI,AAAM,KAAD;AACP,oBAAO,MAAK;;AAEZ,oBAA8B,MAAvB,MAAM,AAAM,KAAD;;;AAIH,UAAnB,QAAQ;AAEsB,UAA9B,AAAO,qBAAC,aAAa,EAAI,KAAK;AACC,UAA/B,AAAM,KAAD,MAAM,MAAM,aAAa;AAC9B,gBAAO,AAAM,MAAD,eAAe,KAAK,GAA0B,KAAvB,MAAM,AAAM,KAAD;QAChD;;mBAG8B;;AACzB,oBAAQ,AAAO,qBAAC,aAAa;AAChC,0BAA2B,YAAnB,KAAK,eAAL,OAAO,iBAAP,cAAsB,gBAAS,KAAK,GAAG;MACjD;WAEY;;AACY,QAAtB,AAAS,sBAAO,KAAK;MACvB;;AAKE,iBAAa,QAAS;AAGlB,UAFF,AAAQ,4BAAY,SAAe,eAAiB,WAC3C,AAAO,MAAD,WAAI,KAAK;;AAGV,QAAhB,AAAS;AACS,QAAlB,oBAAc;MAChB;;;MArD4B,gBAAU;MACzB,iBAAc;MACpB;;IAoDT","file":"../../../../../../../../../../packages/flare_flutter/cache_asset.dart.lib.js"}');
  // Exports:
  return {
    cache_asset: cache_asset,
    cache: cache
  };
}));

//# sourceMappingURL=cache_asset.dart.lib.js.map
