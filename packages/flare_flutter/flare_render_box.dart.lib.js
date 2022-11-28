define(['dart_sdk', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flare_flutter/flare_cache_asset.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flare_flutter/flare_cache.dart', 'packages/flare_flutter/flare.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flare_flutter/base/math/vec2d.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flare_flutter/asset_provider.dart'], (function load__packages__flare_flutter__flare_render_box_dart(dart_sdk, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__painting__alignment$46dart, packages__flare_flutter__flare_cache_asset$46dart, packages__flutter__src__rendering__layer$46dart, packages__flare_flutter__flare_cache$46dart, packages__flare_flutter__flare$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flare_flutter__base__math__vec2d$46dart, packages__flutter__src__rendering__box$46dart, packages__flare_flutter__asset_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const flare_cache_asset = packages__flare_flutter__flare_cache_asset$46dart.flare_cache_asset;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const flare_cache = packages__flare_flutter__flare_cache$46dart.flare_cache;
  const flare = packages__flare_flutter__flare$46dart.flare;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const mat2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__mat2d;
  const vec2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__vec2d;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const asset_provider = packages__flare_flutter__asset_provider$46dart.asset_provider;
  var flare_render_box = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LinkedHashSetOfFlareCacheAsset: () => (T.LinkedHashSetOfFlareCacheAsset = dart.constFn(collection.LinkedHashSet$(flare_cache_asset.FlareCacheAsset)))(),
    voidToNull: () => (T.voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))(),
    FlutterActorN: () => (T.FlutterActorN = dart.constFn(dart.nullable(flare.FlutterActor)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fill",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "contain",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "cover",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fitHeight",
        [_Enum_index]: 4
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fitWidth",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "scaleDown",
        [_Enum_index]: 6
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = ["package:flare_flutter/flare_render_box.dart"];
  var _fit = dart.privateName(flare_render_box, "_fit");
  var _alignment = dart.privateName(flare_render_box, "_alignment");
  var _frameCallbackID = dart.privateName(flare_render_box, "_frameCallbackID");
  var _lastFrameTime = dart.privateName(flare_render_box, "_lastFrameTime");
  var _assets = dart.privateName(flare_render_box, "_assets");
  var _useIntrinsicSize = dart.privateName(flare_render_box, "_useIntrinsicSize");
  var _intrinsicSize = dart.privateName(flare_render_box, "_intrinsicSize");
  var _isLoading = dart.privateName(flare_render_box, "_isLoading");
  var _reloadQueued = dart.privateName(flare_render_box, "_reloadQueued");
  var _unload = dart.privateName(flare_render_box, "_unload");
  var _completeLoad = dart.privateName(flare_render_box, "_completeLoad");
  var _beginFrame = dart.privateName(flare_render_box, "_beginFrame");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  flare_render_box.FlareRenderBox = class FlareRenderBox extends box.RenderBox {
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (!value._equals(this[_alignment])) {
        this[_alignment] = value;
        this.markNeedsPaint();
      }
    }
    get canLoad() {
      return this.attached;
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (value !== this[_fit]) {
        this[_fit] = value;
        this.markNeedsPaint();
      }
    }
    get intrinsicSize() {
      return this[_intrinsicSize];
    }
    set intrinsicSize(value) {
      if (this[_intrinsicSize]._equals(value)) {
        return;
      }
      this[_intrinsicSize] = value;
      if (this.parent != null) {
        this.markNeedsLayoutForSizedByParentChange();
      }
    }
    get isLoading() {
      return this[_isLoading];
    }
    get sizedByParent() {
      return !this[_useIntrinsicSize] || this[_intrinsicSize]._equals(ui.Size.zero);
    }
    get useIntrinsicSize() {
      return this[_useIntrinsicSize];
    }
    set useIntrinsicSize(value) {
      if (this[_useIntrinsicSize] === value) {
        return;
      }
      this[_useIntrinsicSize] = value;
      if (this.parent != null) {
        this.markNeedsLayoutForSizedByParentChange();
      }
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      super.attach(owner);
      this.updatePlayState();
      if (this[_assets][$isEmpty]) {
        this.load();
      }
    }
    coldLoad() {
      return async.async(dart.void, function* coldLoad() {
      });
    }
    detach() {
      super.detach();
      this.dispose();
    }
    dispose() {
      this.updatePlayState();
      this[_unload]();
    }
    getWarmFlare(assetProvider) {
      let asset = flare_cache.getWarmActor(assetProvider);
      if (!this.attached || asset == null) {
        return null;
      }
      this[_assets].add(asset);
      asset.ref();
      return asset.actor;
    }
    hitTestSelf(screenOffset) {
      return true;
    }
    load() {
      if (!this.canLoad) {
        return;
      }
      if (this[_isLoading]) {
        this[_reloadQueued] = true;
        return;
      }
      this[_isLoading] = true;
      this[_unload]();
      if (!this.warmLoad()) {
        this.coldLoad().then(core.Null, dart.fn(_ => {
          this[_completeLoad]();
        }, T.voidToNull()));
      } else {
        this[_completeLoad]();
      }
    }
    loadFlare(assetProvider) {
      return async.async(T.FlutterActorN(), (function* loadFlare() {
        let asset = (yield flare_cache.cachedActor(assetProvider));
        if (!this.attached) {
          return null;
        }
        this[_assets].add(asset);
        asset.ref();
        return asset.actor;
      }).bind(this));
    }
    onUnload() {
    }
    paint(context, offset) {
      let t0, t0$, t0$0;
      if (this.isPlaying) {
        if (this[_frameCallbackID] !== -1) {
          t0 = binding.SchedulerBinding.instance;
          t0 === null ? null : t0.cancelFrameCallbackWithId(this[_frameCallbackID]);
        }
        this[_frameCallbackID] = (t0$0 = (t0$ = binding.SchedulerBinding.instance, t0$ === null ? null : t0$.scheduleFrameCallback(dart.bind(this, _beginFrame))), t0$0 == null ? -1 : t0$0);
      }
      let canvas = context.canvas;
      let bounds = this.aabb;
      let contentWidth = bounds._get(2) - bounds._get(0);
      let contentHeight = bounds._get(3) - bounds._get(1);
      let x = -1 * bounds._get(0) - contentWidth / 2.0 - this[_alignment].x * contentWidth / 2.0;
      let y = -1 * bounds._get(1) - contentHeight / 2.0 - this[_alignment].y * contentHeight / 2.0;
      let scaleX = 1.0;
      let scaleY = 1.0;
      canvas.save();
      this.prePaint(canvas, offset);
      switch (this[_fit]) {
        case C[0] || CT.C0:
          {
            scaleX = this.size.width / contentWidth;
            scaleY = this.size.height / contentHeight;
            break;
          }
        case C[1] || CT.C1:
          {
            let minScale = math.min(core.double, this.size.width / contentWidth, this.size.height / contentHeight);
            scaleX = scaleY = minScale;
            break;
          }
        case C[2] || CT.C2:
          {
            let maxScale = math.max(core.double, this.size.width / contentWidth, this.size.height / contentHeight);
            scaleX = scaleY = maxScale;
            break;
          }
        case C[3] || CT.C3:
          {
            let minScale = this.size.height / contentHeight;
            scaleX = scaleY = minScale;
            break;
          }
        case C[4] || CT.C4:
          {
            let minScale = this.size.width / contentWidth;
            scaleX = scaleY = minScale;
            break;
          }
        case C[5] || CT.C5:
          {
            scaleX = scaleY = 1.0;
            break;
          }
        case C[6] || CT.C6:
          {
            let minScale = math.min(core.double, this.size.width / contentWidth, this.size.height / contentHeight);
            scaleX = scaleY = minScale < 1.0 ? minScale : 1.0;
            break;
          }
      }
      let transform = new mat2d.Mat2D.new();
      transform._set(4, offset.dx + this.size.width / 2.0 + this[_alignment].x * this.size.width / 2.0);
      transform._set(5, offset.dy + this.size.height / 2.0 + this[_alignment].y * this.size.height / 2.0);
      mat2d.Mat2D.scale(transform, transform, new vec2d.Vec2D.fromValues(scaleX, scaleY));
      let center = new mat2d.Mat2D.new();
      center._set(4, x);
      center._set(5, y);
      mat2d.Mat2D.multiply(transform, transform, center);
      canvas.translate(offset.dx + this.size.width / 2.0 + this[_alignment].x * this.size.width / 2.0, offset.dy + this.size.height / 2.0 + this[_alignment].y * this.size.height / 2.0);
      canvas.scale(scaleX, scaleY);
      canvas.translate(x, y);
      this.paintFlare(canvas, transform);
      canvas.restore();
      this.postPaint(canvas, offset);
    }
    performLayout() {
      if (!this.sizedByParent) {
        this.size = this.constraints.constrain(this[_intrinsicSize]);
      }
    }
    performResize() {
      this.size = this[_useIntrinsicSize] ? this.constraints.smallest : this.constraints.biggest;
    }
    postPaint(canvas, offset) {
    }
    prePaint(canvas, offset) {
    }
    updatePlayState() {
      let t0;
      if (this.isPlaying && this.attached) {
        this.markNeedsPaint();
      } else {
        this[_lastFrameTime] = -1;
        if (this[_frameCallbackID] !== -1) {
          t0 = binding.SchedulerBinding.instance;
          t0 === null ? null : t0.cancelFrameCallbackWithId(this[_frameCallbackID]);
        }
      }
    }
    warmLoad() {
      return false;
    }
    [_beginFrame](timestamp) {
      this[_frameCallbackID] = -1;
      let t = timestamp.inMicroseconds / 1000000;
      let elapsedSeconds = this[_lastFrameTime] === -1 ? 0.0 : t - this[_lastFrameTime];
      this[_lastFrameTime] = t;
      this.advance(elapsedSeconds);
      if (!this.isPlaying) {
        this[_lastFrameTime] = -1;
      }
      this.markNeedsPaint();
    }
    [_completeLoad]() {
      this[_isLoading] = false;
      if (this[_reloadQueued]) {
        this[_reloadQueued] = false;
        this.load();
      }
    }
    [_unload]() {
      for (let asset of this[_assets]) {
        asset.deref();
      }
      this[_assets].clear();
      this.onUnload();
    }
  };
  (flare_render_box.FlareRenderBox.new = function() {
    this[_fit] = box_fit.BoxFit.contain;
    this[_alignment] = alignment.Alignment.center;
    this[_frameCallbackID] = -1;
    this[_lastFrameTime] = -1;
    this[_assets] = T.LinkedHashSetOfFlareCacheAsset().new();
    this[_useIntrinsicSize] = false;
    this[_intrinsicSize] = ui.Size.zero;
    this[_isLoading] = false;
    this[_reloadQueued] = false;
    flare_render_box.FlareRenderBox.__proto__.new.call(this);
    ;
  }).prototype = flare_render_box.FlareRenderBox.prototype;
  dart.addTypeTests(flare_render_box.FlareRenderBox);
  dart.addTypeCaches(flare_render_box.FlareRenderBox);
  dart.setMethodSignature(flare_render_box.FlareRenderBox, () => ({
    __proto__: dart.getMethods(flare_render_box.FlareRenderBox.__proto__),
    coldLoad: dart.fnType(async.Future$(dart.void), []),
    getWarmFlare: dart.fnType(dart.nullable(flare.FlutterActor), [asset_provider.AssetProvider]),
    load: dart.fnType(dart.void, []),
    loadFlare: dart.fnType(async.Future$(dart.nullable(flare.FlutterActor)), [asset_provider.AssetProvider]),
    onUnload: dart.fnType(dart.void, []),
    postPaint: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    prePaint: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    updatePlayState: dart.fnType(dart.void, []),
    warmLoad: dart.fnType(core.bool, []),
    [_beginFrame]: dart.fnType(dart.void, [core.Duration]),
    [_completeLoad]: dart.fnType(dart.void, []),
    [_unload]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(flare_render_box.FlareRenderBox, () => ({
    __proto__: dart.getGetters(flare_render_box.FlareRenderBox.__proto__),
    alignment: alignment.Alignment,
    canLoad: core.bool,
    fit: box_fit.BoxFit,
    intrinsicSize: ui.Size,
    isLoading: core.bool,
    useIntrinsicSize: core.bool
  }));
  dart.setSetterSignature(flare_render_box.FlareRenderBox, () => ({
    __proto__: dart.getSetters(flare_render_box.FlareRenderBox.__proto__),
    alignment: alignment.Alignment,
    fit: box_fit.BoxFit,
    intrinsicSize: ui.Size,
    useIntrinsicSize: core.bool
  }));
  dart.setLibraryUri(flare_render_box.FlareRenderBox, I[0]);
  dart.setFieldSignature(flare_render_box.FlareRenderBox, () => ({
    __proto__: dart.getFields(flare_render_box.FlareRenderBox.__proto__),
    [_fit]: dart.fieldType(box_fit.BoxFit),
    [_alignment]: dart.fieldType(alignment.Alignment),
    [_frameCallbackID]: dart.fieldType(core.int),
    [_lastFrameTime]: dart.fieldType(core.double),
    [_assets]: dart.finalFieldType(core.Set$(flare_cache_asset.FlareCacheAsset)),
    [_useIntrinsicSize]: dart.fieldType(core.bool),
    [_intrinsicSize]: dart.fieldType(ui.Size),
    [_isLoading]: dart.fieldType(core.bool),
    [_reloadQueued]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(flare_render_box.FlareRenderBox, () => ['_notPlayingFlag']);
  dart.defineLazy(flare_render_box.FlareRenderBox, {
    /*flare_render_box.FlareRenderBox._notPlayingFlag*/get _notPlayingFlag() {
      return -1;
    }
  }, false);
  dart.trackLibraries("packages/flare_flutter/flare_render_box.dart", {
    "package:flare_flutter/flare_render_box.dart": flare_render_box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_render_box.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8B6B;IAAU;kBAEb;AACtB,WAAI,KAAK,SAAI;AACO,QAAlB,mBAAa,KAAK;AACF,QAAhB;;IAEJ;;AAMoB;IAAQ;;AACV;IAAI;YAEP;AACb,UAAI,KAAK,KAAI;AACC,QAAZ,aAAO,KAAK;AACI,QAAhB;;IAEJ;;AAE0B;IAAc;sBACjB;AACrB,UAAI,AAAe,6BAAG,KAAK;AACzB;;AAEoB,MAAtB,uBAAiB,KAAK;AACtB,UAAI;AACqC,QAAvC;;IAEJ;;AAEsB;IAAU;;AAKN,YAAmB,EAAlB,2BAAqB,AAAe,6BAAQ;IAAI;;AAE9C;IAAiB;yBAEpB;AACxB,UAAI,AAAkB,4BAAG,KAAK;AAC5B;;AAEuB,MAAzB,0BAAoB,KAAK;AACzB,UAAI;AACqC,QAAvC;;IAEJ;WAM0B;;AACL,MAAb,aAAO,KAAK;AACD,MAAjB;AACA,UAAI,AAAQ;AACJ,QAAN;;IAEJ;;AAEqB;MAAU;;;AAIf,MAAR;AACG,MAAT;IACF;;AAGmB,MAAjB;AACS,MAAT;IACF;iBAGyC;AACnC,kBAAQ,yBAAa,aAAa;AACtC,WAAK,iBAAY,AAAM,KAAD;AACpB,cAAO;;AAES,MAAlB,AAAQ,kBAAI,KAAK;AACN,MAAX,AAAM,KAAD;AACL,YAAO,AAAM,MAAD;IACd;gBAGwB;AAAiB;IAAI;;AAQ3C,WAAK;AACH;;AAEF,UAAI;AACkB,QAApB,sBAAgB;AAChB;;AAEe,MAAjB,mBAAa;AACJ,MAAT;AAGA,WAAK;AAGD,QAFF,AAAW,gCAAK,QAAC;AACA,UAAf;;;AAGa,QAAf;;IAEJ;cAG8C;AAAf;AACb,qBAAQ,MAAM,wBAAY,aAAa;AAEvD,aAAK;AACH,gBAAO;;AAES,QAAlB,AAAQ,kBAAI,KAAK;AACN,QAAX,AAAM,KAAD;AACL,cAAO,AAAM,MAAD;MACd;;;IAEiB;UAEU,SAAgB;;AACzC,UAAI;AAEF,YAAI,2BAAoB,CAAC;AAC+C,eAArD;+BAAU,6BAA0B;;AAGgB,QADvE,0BACkE,gEAA7C,OAAU,oCAAsB,sBAAhC,eAAgD,CAAC;;AAG3D,mBAAS,AAAQ,OAAD;AAExB,mBAAS;AACP,yBAAe,AAAM,AAAI,MAAJ,MAAC,KAAK,AAAM,MAAA,MAAC;AAClC,0BAAgB,AAAM,AAAI,MAAJ,MAAC,KAAK,AAAM,MAAA,MAAC;AACnC,cAAI,AAAG,AAAY,AACH,CADX,IAAI,AAAM,MAAA,MAAC,KACnB,AAAa,YAAD,GAAG,MACd,AAAW,AAAE,AAAe,qBAAb,YAAY,GAAG;AAC5B,cAAI,AAAG,AAAY,AACF,CADZ,IAAI,AAAM,MAAA,MAAC,KACnB,AAAc,aAAD,GAAG,MACf,AAAW,AAAE,AAAgB,qBAAd,aAAa,GAAG;AAE7B,mBAAS;AAAK,mBAAS;AAEjB,MAAb,AAAO,MAAD;AACkB,MAAxB,cAAS,MAAM,EAAE,MAAM;AAEvB,cAAQ;;;AAE8B,YAAlC,SAAS,AAAK,AAAM,kBAAE,YAAY;AACE,YAApC,SAAS,AAAK,AAAO,mBAAE,aAAa;AACpC;;;;AAEO,2BACH,sBAAI,AAAK,AAAM,kBAAE,YAAY,EAAE,AAAK,AAAO,mBAAE,aAAa;AACpC,YAA1B,SAAS,SAAS,QAAQ;AAC1B;;;;AAEO,2BACH,sBAAI,AAAK,AAAM,kBAAE,YAAY,EAAE,AAAK,AAAO,mBAAE,aAAa;AACpC,YAA1B,SAAS,SAAS,QAAQ;AAC1B;;;;AAEO,2BAAW,AAAK,AAAO,mBAAE,aAAa;AACnB,YAA1B,SAAS,SAAS,QAAQ;AAC1B;;;;AAEO,2BAAW,AAAK,AAAM,kBAAE,YAAY;AACjB,YAA1B,SAAS,SAAS,QAAQ;AAC1B;;;;AAEqB,YAArB,SAAS,SAAS;AAClB;;;;AAEO,2BACH,sBAAI,AAAK,AAAM,kBAAE,YAAY,EAAE,AAAK,AAAO,mBAAE,aAAa;AACb,YAAjD,SAAS,SAAS,AAAS,QAAD,GAAG,MAAM,QAAQ,GAAG;AAC9C;;;AAGE,sBAAY;AAEkD,MADpE,AAAS,SAAA,MAAC,GACN,AAAO,AAAG,AAAmB,MAAvB,MAAM,AAAK,AAAM,kBAAE,MAAO,AAAW,AAAE,AAAa,qBAAX,AAAK,kBAAQ;AAEM,MADtE,AAAS,SAAA,MAAC,GACN,AAAO,AAAG,AAAoB,MAAxB,MAAM,AAAK,AAAO,mBAAE,MAAO,AAAW,AAAE,AAAc,qBAAZ,AAAK,mBAAS;AACC,MAA7D,kBAAM,SAAS,EAAE,SAAS,EAAQ,2BAAW,MAAM,EAAE,MAAM;AAC3D,mBAAS;AACF,MAAb,AAAM,MAAA,MAAC,GAAK,CAAC;AACA,MAAb,AAAM,MAAA,MAAC,GAAK,CAAC;AAC+B,MAAtC,qBAAS,SAAS,EAAE,SAAS,EAAE,MAAM;AAK1C,MAHD,AAAO,MAAD,WACJ,AAAO,AAAG,AAAmB,MAAvB,MAAM,AAAK,AAAM,kBAAE,MAAO,AAAW,AAAE,AAAa,qBAAX,AAAK,kBAAQ,KAC5D,AAAO,AAAG,AAAoB,MAAxB,MAAM,AAAK,AAAO,mBAAE,MAAO,AAAW,AAAE,AAAc,qBAAZ,AAAK,mBAAS;AAGpC,MAA5B,AAAO,MAAD,OAAO,MAAM,EAAE,MAAM;AACL,MAAtB,AAAO,MAAD,WAAW,CAAC,EAAE,CAAC;AAEQ,MAA7B,gBAAW,MAAM,EAAE,SAAS;AAEZ,MAAhB,AAAO,MAAD;AACmB,MAAzB,eAAU,MAAM,EAAE,MAAM;IAC1B;;AAME,WAAK;AACyC,QAA5C,YAAO,AAAY,2BAAU;;IAEjC;;AAIuE,MAArE,YAAO,0BAAoB,AAAY,4BAAW,AAAY;IAChE;cAEsB,QAAe;IAAS;aAEzB,QAAe;IAAS;;;AAG3C,UAAI,kBAAa;AACC,QAAhB;;AAEgC,QAAhC;AACA,YAAI,2BAAoB,CAAC;AAC+C,eAArD;+BAAU,6BAA0B;;;IAG3D;;AAGE,YAAO;IACT;kBAE0B;AACH,MAArB,yBAAmB,CAAC;AACP,cAAI,AAAU,AAAe,SAAhB;AACnB,2BACH,AAAe,8BAAqB,MAAM,AAAE,CAAD,GAAG;AAChC,MAAlB,uBAAiB,CAAC;AAEK,MAAvB,aAAQ,cAAc;AACtB,WAAK;AAC6B,QAAhC;;AAEc,MAAhB;IACF;;AAKoB,MAAlB,mBAAa;AACb,UAAI;AACmB,QAArB,sBAAgB;AACV,QAAN;;IAEJ;;AAGE,eAA2B,QAAS;AACrB,QAAb,AAAM,KAAD;;AAEQ,MAAf,AAAQ;AACE,MAAV;IACF;;;IAtSO,aAAc;IACX,mBAAuB;IAC7B,yBAAmB,CAAC;IACjB;IACoB,gBAAU;IAChC,0BAAoB;IAEpB,uBAAsB;IACtB,mBAAa;IAEb,sBAAgB;;;EA6RvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAxSsB,+CAAe","file":"../../../../../../../../../../packages/flare_flutter/flare_render_box.dart.lib.js"}');
  // Exports:
  return {
    flare_render_box: flare_render_box
  };
}));

//# sourceMappingURL=flare_render_box.dart.lib.js.map
