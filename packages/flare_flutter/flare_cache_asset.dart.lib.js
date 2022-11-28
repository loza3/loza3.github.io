define(['dart_sdk', 'packages/flutter/src/foundation/_isolates_web.dart', 'packages/flare_flutter/flare.dart', 'packages/flare_flutter/cache_asset.dart', 'packages/flare_flutter/asset_provider.dart'], (function load__packages__flare_flutter__flare_cache_asset_dart(dart_sdk, packages__flutter__src__foundation___isolates_web$46dart, packages__flare_flutter__flare$46dart, packages__flare_flutter__cache_asset$46dart, packages__flare_flutter__asset_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const isolates = packages__flutter__src__foundation___isolates_web$46dart.src__foundation__isolates;
  const flare = packages__flare_flutter__flare$46dart.flare;
  const cache_asset = packages__flare_flutter__cache_asset$46dart.cache_asset;
  const asset_provider = packages__flare_flutter__asset_provider$46dart.asset_provider;
  var flare_cache_asset = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfFlutterActor: () => (T.FutureOfFlutterActor = dart.constFn(async.Future$(flare.FlutterActor)))(),
    ByteDataToFutureOfFlutterActor: () => (T.ByteDataToFutureOfFlutterActor = dart.constFn(dart.fnType(T.FutureOfFlutterActor(), [typed_data.ByteData])))(),
    FlutterActorTovoid: () => (T.FlutterActorTovoid = dart.constFn(dart.fnType(dart.void, [flare.FlutterActor])))(),
    ByteDataToNull: () => (T.ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))(),
    boolToNull: () => (T.boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(flare.FlutterActor.loadFromByteData, T.ByteDataToFutureOfFlutterActor());
    }
  }, false);
  var C = [void 0];
  var I = ["package:flare_flutter/flare_cache_asset.dart"];
  var _actor = dart.privateName(flare_cache_asset, "_actor");
  flare_cache_asset.FlareCacheAsset = class FlareCacheAsset extends cache_asset.CacheAsset {
    get actor() {
      return this[_actor];
    }
    get isAvailable() {
      return this[_actor] != null;
    }
    load(cache, assetProvider) {
      super.load(cache, assetProvider);
      assetProvider.load().then(core.Null, dart.fn(data => {
        if (flare_cache_asset.FlareCacheAsset.useCompute) {
          isolates.compute(typed_data.ByteData, flare.FlutterActor, C[0] || CT.C0, data).then(dart.void, dart.fn(actor => this.loadedActor(actor, assetProvider), T.FlutterActorTovoid()));
        } else {
          flare.FlutterActor.loadFromByteData(data).then(dart.void, dart.fn(actor => this.loadedActor(actor, assetProvider), T.FlutterActorTovoid()));
        }
      }, T.ByteDataToNull()));
    }
    loadedActor(actor, assetProvider) {
      actor.loadImages().then(core.Null, dart.fn(_ => {
        this[_actor] = actor;
        this.completeLoad();
      }, T.boolToNull()));
    }
    static ['_#new#tearOff']() {
      return new flare_cache_asset.FlareCacheAsset.new();
    }
  };
  (flare_cache_asset.FlareCacheAsset.new = function() {
    this[_actor] = null;
    flare_cache_asset.FlareCacheAsset.__proto__.new.call(this);
    ;
  }).prototype = flare_cache_asset.FlareCacheAsset.prototype;
  dart.addTypeTests(flare_cache_asset.FlareCacheAsset);
  dart.addTypeCaches(flare_cache_asset.FlareCacheAsset);
  dart.setMethodSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getMethods(flare_cache_asset.FlareCacheAsset.__proto__),
    loadedActor: dart.fnType(dart.void, [flare.FlutterActor, asset_provider.AssetProvider])
  }));
  dart.setGetterSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getGetters(flare_cache_asset.FlareCacheAsset.__proto__),
    actor: dart.nullable(flare.FlutterActor),
    isAvailable: core.bool
  }));
  dart.setLibraryUri(flare_cache_asset.FlareCacheAsset, I[0]);
  dart.setFieldSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getFields(flare_cache_asset.FlareCacheAsset.__proto__),
    [_actor]: dart.fieldType(dart.nullable(flare.FlutterActor))
  }));
  dart.setStaticFieldSignature(flare_cache_asset.FlareCacheAsset, () => ['useCompute']);
  dart.defineLazy(flare_cache_asset.FlareCacheAsset, {
    /*flare_cache_asset.FlareCacheAsset.useCompute*/get useCompute() {
      return true;
    },
    set useCompute(_) {}
  }, false);
  dart.trackLibraries("packages/flare_flutter/flare_cache_asset.dart", {
    "package:flare_flutter/flare_cache_asset.dart": flare_cache_asset
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_cache_asset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAY6B;IAAM;;AAGT,YAAA,AAAO;IAAO;SAGtB,OAAqB;AACH,MAA1B,WAAK,KAAK,EAAE,aAAa;AAS7B,MARF,AAAc,AAAO,aAAR,wBAAa,QAAU;AAClC,YAAI;AAEkE,UADpE,AAAO,AACF,yEADkC,IAAI,kBACjC,QAAc,SAAU,iBAAY,KAAK,EAAE,aAAa;;AAGE,UADvD,AACR,oCADyB,IAAI,kBACxB,QAAc,SAAU,iBAAY,KAAK,EAAE,aAAa;;;IAGxE;gBAE8B,OAAqB;AAI/C,MAHF,AAAM,AAAa,KAAd,8BAAmB,QAAC;AACT,QAAd,eAAS,KAAK;AACA,QAAd;;IAEJ;;;;;;IA1Bc;;;EA2BhB;;;;;;;;;;;;;;;;;;;MA5Bc,4CAAU;YAAG","file":"../../../../../../../../../../packages/flare_flutter/flare_cache_asset.dart.lib.js"}');
  // Exports:
  return {
    flare_cache_asset: flare_cache_asset
  };
}));

//# sourceMappingURL=flare_cache_asset.dart.lib.js.map
