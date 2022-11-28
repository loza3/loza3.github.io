define(['dart_sdk', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/painting/image_cache.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/painting/shader_warm_up.dart'], (function load__packages__flutter__src__painting__binding_dart(dart_sdk, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__painting__image_cache$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__painting__shader_warm_up$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const image_cache = packages__flutter__src__painting__image_cache$46dart.src__painting__image_cache;
  const binding$ = packages__flutter__src__services__text_editing_delta$46dart.src__services__binding;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const shader_warm_up = packages__flutter__src__painting__shader_warm_up$46dart.src__painting__shader_warm_up;
  var binding$0 = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    LinkedHashSetOfVoidTovoid: () => (T.LinkedHashSetOfVoidTovoid = dart.constFn(collection.LinkedHashSet$(T.VoidTovoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/binding.dart",
    "package:flutter/src/painting/binding.dart"
  ];
  var __PaintingBinding__imageCache = dart.privateName(binding$0, "_#PaintingBinding#_imageCache");
  var _systemFonts = dart.privateName(binding$0, "_systemFonts");
  var _imageCache = dart.privateName(binding$0, "_imageCache");
  const handleSystemMessage = Symbol("handleSystemMessage");
  binding$0.PaintingBinding = class PaintingBinding extends core.Object {
    static get instance() {
      return binding.BindingBase.checkInstance(binding$0.PaintingBinding, binding$0.PaintingBinding._instance);
    }
  };
  binding$0.PaintingBinding[dart.mixinOn] = _PaintingBinding$36BindingBase$36ServicesBinding => class PaintingBinding extends _PaintingBinding$36BindingBase$36ServicesBinding {
    initInstances() {
      let t0;
      super.initInstances();
      binding$0.PaintingBinding._instance = this;
      this[_imageCache] = this.createImageCache();
      t0 = binding$0.PaintingBinding.shaderWarmUp;
      t0 == null ? null : t0.execute();
    }
    get imageCache() {
      return this[_imageCache];
    }
    get [_imageCache]() {
      let t0;
      t0 = this[__PaintingBinding__imageCache];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_imageCache")) : t0;
    }
    set [_imageCache](library$32package$58flutter$47src$47painting$47binding$46dart$58$58_imageCache$35param) {
      this[__PaintingBinding__imageCache] = library$32package$58flutter$47src$47painting$47binding$46dart$58$58_imageCache$35param;
    }
    createImageCache() {
      return new image_cache.ImageCache.new();
    }
    instantiateImageCodec(bytes, opts) {
      let cacheWidth = opts && 'cacheWidth' in opts ? opts.cacheWidth : null;
      let cacheHeight = opts && 'cacheHeight' in opts ? opts.cacheHeight : null;
      let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : false;
      if (!(cacheWidth == null || dart.notNull(cacheWidth) > 0)) dart.assertFailed(null, I[0], 112, 12, "cacheWidth == null || cacheWidth > 0");
      if (!(cacheHeight == null || dart.notNull(cacheHeight) > 0)) dart.assertFailed(null, I[0], 113, 12, "cacheHeight == null || cacheHeight > 0");
      if (!(allowUpscaling !== null)) dart.assertFailed(null, I[0], 114, 12, "allowUpscaling != null");
      return ui.instantiateImageCodec(bytes, {targetWidth: cacheWidth, targetHeight: cacheHeight, allowUpscaling: allowUpscaling});
    }
    instantiateImageCodecFromBuffer(buffer, opts) {
      let cacheWidth = opts && 'cacheWidth' in opts ? opts.cacheWidth : null;
      let cacheHeight = opts && 'cacheHeight' in opts ? opts.cacheHeight : null;
      let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : false;
      if (!(cacheWidth == null || dart.notNull(cacheWidth) > 0)) dart.assertFailed(null, I[0], 150, 12, "cacheWidth == null || cacheWidth > 0");
      if (!(cacheHeight == null || dart.notNull(cacheHeight) > 0)) dart.assertFailed(null, I[0], 151, 12, "cacheHeight == null || cacheHeight > 0");
      if (!(allowUpscaling !== null)) dart.assertFailed(null, I[0], 152, 12, "allowUpscaling != null");
      return ui.instantiateImageCodecFromBuffer(buffer, {targetWidth: cacheWidth, targetHeight: cacheHeight, allowUpscaling: allowUpscaling});
    }
    evict(asset) {
      super.evict(asset);
      this.imageCache.clear();
      this.imageCache.clearLiveImages();
    }
    handleMemoryPressure() {
      super.handleMemoryPressure();
      this.imageCache.clear();
    }
    get systemFonts() {
      return this[_systemFonts];
    }
    handleSystemMessage(systemMessage) {
      return async.async(dart.void, (function* handleSystemMessage$() {
        yield this[handleSystemMessage](systemMessage);
        let message = T.MapOfString$dynamic().as(systemMessage);
        let type = core.String.as(message[$_get]("type"));
        switch (type) {
          case "fontsChange":
            {
              this[_systemFonts].notifyListeners();
              break;
            }
        }
        return;
      }).bind(this));
    }
    [handleSystemMessage](systemMessage) {
      return super.handleSystemMessage(systemMessage);
    }
  };
  (binding$0.PaintingBinding[dart.mixinNew] = function() {
    this[__PaintingBinding__imageCache] = null;
    this[_systemFonts] = new binding$0._SystemFontsNotifier.new();
  }).prototype = binding$0.PaintingBinding.prototype;
  dart.addTypeTests(binding$0.PaintingBinding);
  dart.addTypeCaches(binding$0.PaintingBinding);
  binding$0.PaintingBinding[dart.implements] = () => [binding$.ServicesBinding, binding.BindingBase];
  dart.setMethodSignature(binding$0.PaintingBinding, () => ({
    __proto__: dart.getMethods(binding$0.PaintingBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    createImageCache: dart.fnType(image_cache.ImageCache, []),
    instantiateImageCodec: dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {}),
    instantiateImageCodecFromBuffer: dart.fnType(async.Future$(ui.Codec), [ui.ImmutableBuffer], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {}),
    evict: dart.fnType(dart.void, [core.String]),
    handleMemoryPressure: dart.fnType(dart.void, []),
    handleSystemMessage: dart.fnType(async.Future$(dart.void), [core.Object])
  }));
  dart.setGetterSignature(binding$0.PaintingBinding, () => ({
    __proto__: dart.getGetters(binding$0.PaintingBinding.__proto__),
    imageCache: image_cache.ImageCache,
    [_imageCache]: image_cache.ImageCache,
    systemFonts: change_notifier.Listenable
  }));
  dart.setSetterSignature(binding$0.PaintingBinding, () => ({
    __proto__: dart.getSetters(binding$0.PaintingBinding.__proto__),
    [_imageCache]: image_cache.ImageCache
  }));
  dart.setStaticGetterSignature(binding$0.PaintingBinding, () => ['instance']);
  dart.setLibraryUri(binding$0.PaintingBinding, I[1]);
  dart.setFieldSignature(binding$0.PaintingBinding, () => ({
    __proto__: dart.getFields(binding$0.PaintingBinding.__proto__),
    [__PaintingBinding__imageCache]: dart.fieldType(dart.nullable(image_cache.ImageCache)),
    [_systemFonts]: dart.finalFieldType(binding$0._SystemFontsNotifier)
  }));
  dart.setStaticFieldSignature(binding$0.PaintingBinding, () => ['_instance', 'shaderWarmUp']);
  dart.defineLazy(binding$0.PaintingBinding, {
    /*binding$0.PaintingBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {},
    /*binding$0.PaintingBinding.shaderWarmUp*/get shaderWarmUp() {
      return null;
    },
    set shaderWarmUp(_) {}
  }, false);
  var _systemFontsCallbacks = dart.privateName(binding$0, "_systemFontsCallbacks");
  binding$0._SystemFontsNotifier = class _SystemFontsNotifier extends change_notifier.Listenable {
    notifyListeners() {
      for (let callback of this[_systemFontsCallbacks]) {
        callback();
      }
    }
    addListener(listener) {
      this[_systemFontsCallbacks].add(listener);
    }
    removeListener(listener) {
      this[_systemFontsCallbacks].remove(listener);
    }
    static ['_#new#tearOff']() {
      return new binding$0._SystemFontsNotifier.new();
    }
  };
  (binding$0._SystemFontsNotifier.new = function() {
    this[_systemFontsCallbacks] = T.LinkedHashSetOfVoidTovoid().new();
    binding$0._SystemFontsNotifier.__proto__.new.call(this);
    ;
  }).prototype = binding$0._SystemFontsNotifier.prototype;
  dart.addTypeTests(binding$0._SystemFontsNotifier);
  dart.addTypeCaches(binding$0._SystemFontsNotifier);
  dart.setMethodSignature(binding$0._SystemFontsNotifier, () => ({
    __proto__: dart.getMethods(binding$0._SystemFontsNotifier.__proto__),
    notifyListeners: dart.fnType(dart.void, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(binding$0._SystemFontsNotifier, I[1]);
  dart.setFieldSignature(binding$0._SystemFontsNotifier, () => ({
    __proto__: dart.getFields(binding$0._SystemFontsNotifier.__proto__),
    [_systemFontsCallbacks]: dart.finalFieldType(core.Set$(dart.fnType(dart.void, [])))
  }));
  dart.copyProperties(binding$0, {
    get imageCache() {
      return binding$0.PaintingBinding.instance.imageCache;
    }
  });
  dart.trackLibraries("packages/flutter/src/painting/binding.dart", {
    "package:flutter/src/painting/binding.dart": binding$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8ByC,YAAY,8DAAc;IAAU;;;;;AAXpD,MAAf;AACU,MAAhB,sCAAY;AACoB,MAAhC,oBAAc;AACS,WAAvB;0BAAc;IAChB;;AAgD6B;IAAW;;;AACxB;;IAAW;sBAAX;;IAAW;;AAMM;IAAY;0BA4BjC;UACL;UACA;UACA;AAEL,YAAO,AAAW,AAAQ,UAAT,YAAuB,aAAX,UAAU,IAAG;AAC1C,YAAO,AAAY,AAAQ,WAAT,YAAwB,aAAZ,WAAW,IAAG;AAC5C,YAAO,AAAe,cAAD;AACrB,YAAU,0BACR,KAAK,gBACQ,UAAU,gBACT,WAAW,kBACT,cAAc;IAElC;oCAwBqB;UACd;UACA;UACA;AAEL,YAAO,AAAW,AAAQ,UAAT,YAAuB,aAAX,UAAU,IAAG;AAC1C,YAAO,AAAY,AAAQ,WAAT,YAAwB,aAAZ,WAAW,IAAG;AAC5C,YAAO,AAAe,cAAD;AACrB,YAAU,oCACR,MAAM,gBACO,UAAU,gBACT,WAAW,kBACT,cAAc;IAElC;UAGkB;AACE,MAAZ,YAAM,KAAK;AACC,MAAlB,AAAW;AACiB,MAA5B,AAAW;IACb;;AAI8B,MAAtB;AACY,MAAlB,AAAW;IACb;;AAW8B;IAAY;wBAIF;AAAR;AACgB,QAA9C,MAAY,0BAAoB,aAAa;AAClB,sBAAwB,2BAAd,aAAa;AACrC,mBAAuB,eAAhB,AAAO,OAAA,QAAC;AAC5B,gBAAQ,IAAI;;;AAEsB,cAA9B,AAAa;AACb;;;AAEJ;MACF;;;;;;;0CA5HgB;IA+GW,qBAAe;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAxJlB,mCAAS;;;;MA+BZ,sCAAY;;;;;;;;AA6I/B,eAAwB,WAAY;AACxB,QAAV,AAAQ,QAAA;;IAEZ;gBAG8B;AACO,MAAnC,AAAsB,gCAAI,QAAQ;IACpC;mBAEiC;AACO,MAAtC,AAAsB,mCAAO,QAAQ;IACvC;;;;;;IAfwB,8BAAsC;;;EAgBhE;;;;;;;;;;;;;;;;AAS6B,YAAgB,AAAS;IAAU","file":"../../../../../../../../../../packages/flutter/src/painting/binding.dart.lib.js"}');
  // Exports:
  return {
    src__painting__binding: binding$0
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map