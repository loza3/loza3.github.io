define(['dart_sdk', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flare_flutter/base/animation/keyframe.dart', 'packages/flare_flutter/base/path_point.dart', 'packages/flare_flutter/base/math/vec2d.dart', 'packages/flare_flutter/base/math/aabb.dart', 'packages/flutter/src/material/colors.dart', 'packages/flare_flutter/trim_path.dart'], (function load__packages__flare_flutter__flare_dart(dart_sdk, packages__flutter__src__services__text_editing_delta$46dart, packages__flare_flutter__base__animation__keyframe$46dart, packages__flare_flutter__base__path_point$46dart, packages__flare_flutter__base__math__vec2d$46dart, packages__flare_flutter__base__math__aabb$46dart, packages__flutter__src__material__colors$46dart, packages__flare_flutter__trim_path$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _engine = dart_sdk._engine;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const asset_bundle = packages__flutter__src__services__text_editing_delta$46dart.src__services__asset_bundle;
  const actor = packages__flare_flutter__base__animation__keyframe$46dart.base__actor;
  const actor_color = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_color;
  const actor_drop_shadow = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_drop_shadow;
  const actor_inner_shadow = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_inner_shadow;
  const actor_layer_effect_renderer = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_layer_effect_renderer;
  const actor_artboard = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_artboard;
  const actor_ellipse = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_ellipse;
  const actor_image = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_image;
  const actor_mask = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_mask;
  const actor_path = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_path;
  const actor_polygon = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_polygon;
  const actor_rectangle = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_rectangle;
  const actor_shape = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_shape;
  const actor_star = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_star;
  const actor_triangle = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_triangle;
  const actor_component = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_component;
  const path_point = packages__flare_flutter__base__path_point$46dart.base__path_point;
  const vec2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__vec2d;
  const mat2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__mat2d;
  const aabb = packages__flare_flutter__base__math__aabb$46dart.base__math__aabb;
  const colors$ = packages__flutter__src__material__colors$46dart.src__material__colors;
  const trim_path = packages__flare_flutter__trim_path$46dart.trim_path;
  var flare = Object.create(dart.library);
  var $clear = dartx.clear;
  var $addAll = dartx.addAll;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $lastIndexOf = dartx.lastIndexOf;
  var $substring = dartx.substring;
  var $buffer = dartx.buffer;
  var $_get = dartx._get;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $add = dartx.add;
  var $modulo = dartx['%'];
  var $_set = dartx._set;
  var $truncate = dartx.truncate;
  var $clamp = dartx.clamp;
  var $toDouble = dartx.toDouble;
  var $isNotEmpty = dartx.isNotEmpty;
  var $abs = dartx.abs;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfImage: () => (T.JSArrayOfImage = dart.constFn(_interceptors.JSArray$(ui.Image)))(),
    FutureOfCodec: () => (T.FutureOfCodec = dart.constFn(async.Future$(ui.Codec)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    Uint8List__ToFutureOfCodec: () => (T.Uint8List__ToFutureOfCodec = dart.constFn(dart.fnType(T.FutureOfCodec(), [typed_data.Uint8List], {allowUpscaling: core.bool, targetHeight: T.intN(), targetWidth: T.intN()}, {})))(),
    FutureOfFrameInfo: () => (T.FutureOfFrameInfo = dart.constFn(async.Future$(ui.FrameInfo)))(),
    CodecToFutureOfFrameInfo: () => (T.CodecToFutureOfFrameInfo = dart.constFn(dart.fnType(T.FutureOfFrameInfo(), [ui.Codec])))(),
    FrameInfoToImage: () => (T.FrameInfoToImage = dart.constFn(dart.fnType(ui.Image, [ui.FrameInfo])))(),
    JSArrayOfPathPoint: () => (T.JSArrayOfPathPoint = dart.constFn(_interceptors.JSArray$(path_point.PathPoint)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(ui.instantiateImageCodec, T.Uint8List__ToFutureOfCodec());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: path_point.PointType.prototype,
        [_Enum__name]: "straight",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.constList([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, -1, 255], core.double);
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: _engine.CkMatrixColorFilter.prototype,
        [CkMatrixColorFilter_matrix]: C[3] || CT.C3
      });
    },
    get C5() {
      return C[5] = dart.constList([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 255], core.double);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: _engine.CkMatrixColorFilter.prototype,
        [CkMatrixColorFilter_matrix]: C[5] || CT.C5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: actor_mask.MaskType.prototype,
        [_Enum__name]: "invertedAlpha",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.constList([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33, 0.59, 0.11, 0, 0], core.double);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: _engine.CkMatrixColorFilter.prototype,
        [CkMatrixColorFilter_matrix]: C[8] || CT.C8
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: actor_mask.MaskType.prototype,
        [_Enum__name]: "luminance",
        [_Enum_index]: 2
      });
    },
    get C11() {
      return C[11] = dart.constList([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.33, -0.59, -0.11, 0, 255], core.double);
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: _engine.CkMatrixColorFilter.prototype,
        [CkMatrixColorFilter_matrix]: C[11] || CT.C11
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: actor_mask.MaskType.prototype,
        [_Enum__name]: "invertedLuminance",
        [_Enum_index]: 3
      });
    },
    get C14() {
      return C[14] = dart.constList([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], core.double);
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: _engine.CkMatrixColorFilter.prototype,
        [CkMatrixColorFilter_matrix]: C[14] || CT.C14
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: actor_mask.MaskType.prototype,
        [_Enum__name]: "alpha",
        [_Enum_index]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: actor_color.FillRule.prototype,
        [_Enum__name]: "evenOdd",
        [_Enum_index]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: actor_color.FillRule.prototype,
        [_Enum__name]: "nonZero",
        [_Enum_index]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_Enum__name]: "butt",
        [_Enum_index]: 0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_Enum__name]: "round",
        [_Enum_index]: 1
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_Enum__name]: "square",
        [_Enum_index]: 2
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_Enum__name]: "miter",
        [_Enum_index]: 0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_Enum__name]: "round",
        [_Enum_index]: 1
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_Enum__name]: "bevel",
        [_Enum_index]: 2
      });
    }
  }, false);
  var C = Array(24).fill(void 0);
  var I = [
    "package:flare_flutter/flare.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flare_flutter-3.0.2/lib/flare.dart"
  ];
  var filename$ = dart.privateName(flare, "AssetBundleContext.filename");
  var bundle$ = dart.privateName(flare, "AssetBundleContext.bundle");
  flare.AssetBundleContext = class AssetBundleContext extends core.Object {
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    static ['_#new#tearOff'](bundle, filename) {
      return new flare.AssetBundleContext.new(bundle, filename);
    }
  };
  (flare.AssetBundleContext.new = function(bundle, filename) {
    this[bundle$] = bundle;
    this[filename$] = filename;
    ;
  }).prototype = flare.AssetBundleContext.prototype;
  dart.addTypeTests(flare.AssetBundleContext);
  dart.addTypeCaches(flare.AssetBundleContext);
  dart.setLibraryUri(flare.AssetBundleContext, I[0]);
  dart.setFieldSignature(flare.AssetBundleContext, () => ({
    __proto__: dart.getFields(flare.AssetBundleContext.__proto__),
    filename: dart.finalFieldType(core.String),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle)
  }));
  var _images = dart.privateName(flare, "_images");
  var _rawAtlasData = dart.privateName(flare, "_rawAtlasData");
  const load = Symbol("load");
  flare.FlutterActor = class FlutterActor extends actor.Actor {
    get images() {
      return this[_images];
    }
    copyFlutterActor(actor) {
      this.copyActor(actor);
      this[_images][$clear]();
      this[_images][$addAll](actor[_images]);
    }
    dispose() {
    }
    loadAtlases(rawAtlases) {
      return async.async(core.bool, (function* loadAtlases() {
        this[_rawAtlasData] = rawAtlases;
        return true;
      }).bind(this));
    }
    loadFromBundle(assetBundle, filename) {
      return async.async(core.bool, (function* loadFromBundle() {
        let data = (yield assetBundle.load(filename));
        return this[load](data, new flare.AssetBundleContext.new(assetBundle, filename));
      }).bind(this));
    }
    loadImages() {
      return async.async(core.bool, (function* loadImages() {
        if (this[_rawAtlasData] == null) {
          return false;
        }
        let data = dart.nullCheck(this[_rawAtlasData]);
        this[_rawAtlasData] = null;
        let codecs = (yield async.Future.wait(ui.Codec, data[$map](T.FutureOfCodec(), C[0] || CT.C0)));
        let frames = (yield async.Future.wait(ui.FrameInfo, codecs[$map](T.FutureOfFrameInfo(), dart.fn(codec => codec.getNextFrame(), T.CodecToFutureOfFrameInfo()))));
        this[_images][$addAll](frames[$map](ui.Image, dart.fn(frame => frame.image, T.FrameInfoToImage()))[$toList]({growable: false}));
        return true;
      }).bind(this));
    }
    makeArtboard() {
      return new flare.FlutterActorArtboard.new(this);
    }
    makeColorFill() {
      return new flare.FlutterColorFill.new();
    }
    makeColorStroke() {
      return new flare.FlutterColorStroke.new();
    }
    makeDropShadow() {
      return new flare.FlutterActorDropShadow.new();
    }
    makeEllipse() {
      return new flare.FlutterActorEllipse.new();
    }
    makeGradientFill() {
      return new flare.FlutterGradientFill.new();
    }
    makeGradientStroke() {
      return new flare.FlutterGradientStroke.new();
    }
    makeImageNode() {
      return new flare.FlutterActorImage.new();
    }
    makeInnerShadow() {
      return new flare.FlutterActorInnerShadow.new();
    }
    makeLayerEffectRenderer() {
      return new flare.FlutterActorLayerEffectRenderer.new();
    }
    makePathNode() {
      return new flare.FlutterActorPath.new();
    }
    makePolygon() {
      return new flare.FlutterActorPolygon.new();
    }
    makeRadialFill() {
      return new flare.FlutterRadialFill.new();
    }
    makeRadialStroke() {
      return new flare.FlutterRadialStroke.new();
    }
    makeRectangle() {
      return new flare.FlutterActorRectangle.new();
    }
    makeShapeNode(source) {
      let t0, t0$;
      return dart.test((t0$ = (t0 = source, t0 == null ? null : t0.transformAffectsStroke), t0$ == null ? false : t0$)) ? new flare.FlutterActorShapeWithTransformedStroke.new() : new flare.FlutterActorShape.new();
    }
    makeStar() {
      return new flare.FlutterActorStar.new();
    }
    makeTriangle() {
      return new flare.FlutterActorTriangle.new();
    }
    readOutOfBandAsset(assetFilename, context) {
      return async.async(typed_data.Uint8List, function* readOutOfBandAsset() {
        let bundleContext = flare.AssetBundleContext.as(context);
        let pathIdx = bundleContext.filename[$lastIndexOf]("/") + 1;
        let basePath = bundleContext.filename[$substring](0, pathIdx);
        let data = (yield bundleContext.bundle.load(basePath + assetFilename));
        return typed_data.Uint8List.view(data[$buffer]);
      });
    }
    static loadFromByteData(data) {
      return async.async(flare.FlutterActor, function* loadFromByteData() {
        let actor = new flare.FlutterActor.new();
        yield actor.load(data, null);
        return actor;
      });
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActor.new();
    }
    [load](data, context) {
      return super.load(data, context);
    }
  };
  (flare.FlutterActor.new = function() {
    this[_images] = T.JSArrayOfImage().of([]);
    this[_rawAtlasData] = null;
    flare.FlutterActor.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActor.prototype;
  dart.addTypeTests(flare.FlutterActor);
  dart.addTypeCaches(flare.FlutterActor);
  dart.setMethodSignature(flare.FlutterActor, () => ({
    __proto__: dart.getMethods(flare.FlutterActor.__proto__),
    copyFlutterActor: dart.fnType(dart.void, [flare.FlutterActor]),
    dispose: dart.fnType(dart.void, []),
    loadAtlases: dart.fnType(async.Future$(core.bool), [core.List$(typed_data.Uint8List)]),
    loadFromBundle: dart.fnType(async.Future$(core.bool), [asset_bundle.AssetBundle, core.String]),
    loadImages: dart.fnType(async.Future$(core.bool), []),
    makeColorFill: dart.fnType(actor_color.ColorFill, []),
    makeColorStroke: dart.fnType(actor_color.ColorStroke, []),
    makeDropShadow: dart.fnType(actor_drop_shadow.ActorDropShadow, []),
    makeGradientFill: dart.fnType(actor_color.GradientFill, []),
    makeGradientStroke: dart.fnType(actor_color.GradientStroke, []),
    makeInnerShadow: dart.fnType(actor_inner_shadow.ActorInnerShadow, []),
    makeLayerEffectRenderer: dart.fnType(actor_layer_effect_renderer.ActorLayerEffectRenderer, []),
    makeRadialFill: dart.fnType(actor_color.RadialGradientFill, []),
    makeRadialStroke: dart.fnType(actor_color.RadialGradientStroke, []),
    readOutOfBandAsset: dart.fnType(async.Future$(typed_data.Uint8List), [core.String, dart.dynamic])
  }));
  dart.setStaticMethodSignature(flare.FlutterActor, () => ['loadFromByteData']);
  dart.setGetterSignature(flare.FlutterActor, () => ({
    __proto__: dart.getGetters(flare.FlutterActor.__proto__),
    images: core.List$(ui.Image)
  }));
  dart.setLibraryUri(flare.FlutterActor, I[0]);
  dart.setFieldSignature(flare.FlutterActor, () => ({
    __proto__: dart.getFields(flare.FlutterActor.__proto__),
    [_images]: dart.finalFieldType(core.List$(ui.Image)),
    [_rawAtlasData]: dart.fieldType(dart.nullable(core.List$(typed_data.Uint8List)))
  }));
  var _antialias = dart.privateName(flare, "_antialias");
  flare.FlutterActorArtboard = class FlutterActorArtboard extends actor_artboard.ActorArtboard {
    static ['_#new#tearOff'](actor) {
      return new flare.FlutterActorArtboard.new(actor);
    }
    get antialias() {
      return this[_antialias];
    }
    set antialias(value) {
      if (this[_antialias] !== value) {
        this[_antialias] = value;
        for (let drawable of this.drawableNodes) {
          flare.FlutterActorDrawable.as(drawable).antialias = this[_antialias];
        }
      }
    }
    dispose() {
    }
    draw(canvas) {
      if (this.clipContents) {
        canvas.save();
        let aabb = this.artboardAABB();
        canvas.clipRect(new ui.Rect.fromLTRB(aabb._get(0), aabb._get(1), aabb._get(2), aabb._get(3)));
      }
      for (let drawable of this.drawableNodes) {
        if (flare.FlutterActorDrawable.is(drawable)) {
          flare.FlutterActorDrawable.as(drawable).draw(canvas);
        }
      }
      if (this.clipContents) {
        canvas.restore();
      }
    }
  };
  (flare.FlutterActorArtboard.new = function(actor) {
    this[_antialias] = true;
    flare.FlutterActorArtboard.__proto__.new.call(this, actor);
    ;
  }).prototype = flare.FlutterActorArtboard.prototype;
  dart.addTypeTests(flare.FlutterActorArtboard);
  dart.addTypeCaches(flare.FlutterActorArtboard);
  dart.setMethodSignature(flare.FlutterActorArtboard, () => ({
    __proto__: dart.getMethods(flare.FlutterActorArtboard.__proto__),
    dispose: dart.fnType(dart.void, []),
    draw: dart.fnType(dart.void, [ui.Canvas])
  }));
  dart.setGetterSignature(flare.FlutterActorArtboard, () => ({
    __proto__: dart.getGetters(flare.FlutterActorArtboard.__proto__),
    antialias: core.bool
  }));
  dart.setSetterSignature(flare.FlutterActorArtboard, () => ({
    __proto__: dart.getSetters(flare.FlutterActorArtboard.__proto__),
    antialias: core.bool
  }));
  dart.setLibraryUri(flare.FlutterActorArtboard, I[0]);
  dart.setFieldSignature(flare.FlutterActorArtboard, () => ({
    __proto__: dart.getFields(flare.FlutterActorArtboard.__proto__),
    [_antialias]: dart.fieldType(core.bool)
  }));
  var _antialias$ = dart.privateName(flare, "FlutterActorDrawable._antialias");
  var _blendMode = dart.privateName(flare, "FlutterActorDrawable._blendMode");
  var _blendMode$ = dart.privateName(flare, "_blendMode");
  flare.FlutterActorDrawable = class FlutterActorDrawable extends core.Object {
    get [_antialias]() {
      return this[_antialias$];
    }
    set [_antialias](value) {
      this[_antialias$] = value;
    }
    get [_blendMode$]() {
      return this[_blendMode];
    }
    set [_blendMode$](value) {
      this[_blendMode] = value;
    }
    get antialias() {
      return this[_antialias];
    }
    set antialias(value) {
      if (value !== this[_antialias]) {
        this[_antialias] = value;
        this.onAntialiasChanged(this[_antialias]);
      }
    }
    get blendMode() {
      return this[_blendMode$];
    }
    set blendMode(mode) {
      if (this[_blendMode$] === mode) {
        return;
      }
      this[_blendMode$] = mode;
      this.onBlendModeChanged(this[_blendMode$]);
    }
    get blendModeId() {
      return this[_blendMode$].index;
    }
    set blendModeId(index) {
      this.blendMode = ui.BlendMode.values[$_get](index);
    }
    clip(canvas) {
      for (let clips of this.clipShapes) {
        for (let clipShape of clips) {
          let shape = clipShape.shape;
          if (shape.renderCollapsed) {
            continue;
          }
          if (clipShape.intersect) {
            canvas.clipPath(flare.FlutterActorShape.as(shape).path);
          } else {
            let artboardRect = new ui.Rect.fromLTWH(this.artboard.origin._get(0) * this.artboard.width, this.artboard.origin._get(1) * this.artboard.height, this.artboard.width, this.artboard.height);
            if (shape.fill != null && dart.nullCheck(shape.fill).fillRule === actor_color.FillRule.evenOdd) {
              let clipPath = ui.Path.new();
              clipPath.addRect(artboardRect);
              for (let path of shape.paths) {
                clipPath.addPath(flare.FlutterPath.as(path).path, ui.Offset.zero, {matrix4: path.pathTransform.mat4});
              }
              clipPath.fillType = ui.PathFillType.evenOdd;
              canvas.clipPath(clipPath);
            } else {
              for (let path of shape.paths) {
                let clipPath = ui.Path.new();
                clipPath.addRect(artboardRect);
                clipPath.addPath(flare.FlutterPath.as(path).path, ui.Offset.zero, {matrix4: path.pathTransform.mat4});
                clipPath.fillType = ui.PathFillType.evenOdd;
                canvas.clipPath(clipPath);
              }
            }
          }
        }
      }
    }
  };
  (flare.FlutterActorDrawable.new = function() {
    this[_antialias$] = true;
    this[_blendMode] = ui.BlendMode.srcOver;
    ;
  }).prototype = flare.FlutterActorDrawable.prototype;
  dart.addTypeTests(flare.FlutterActorDrawable);
  dart.addTypeCaches(flare.FlutterActorDrawable);
  dart.setMethodSignature(flare.FlutterActorDrawable, () => ({
    __proto__: dart.getMethods(flare.FlutterActorDrawable.__proto__),
    clip: dart.fnType(dart.void, [ui.Canvas])
  }));
  dart.setGetterSignature(flare.FlutterActorDrawable, () => ({
    __proto__: dart.getGetters(flare.FlutterActorDrawable.__proto__),
    antialias: core.bool,
    blendMode: ui.BlendMode,
    blendModeId: core.int
  }));
  dart.setSetterSignature(flare.FlutterActorDrawable, () => ({
    __proto__: dart.getSetters(flare.FlutterActorDrawable.__proto__),
    antialias: core.bool,
    blendMode: ui.BlendMode,
    blendModeId: core.int
  }));
  dart.setLibraryUri(flare.FlutterActorDrawable, I[0]);
  dart.setFieldSignature(flare.FlutterActorDrawable, () => ({
    __proto__: dart.getFields(flare.FlutterActorDrawable.__proto__),
    [_antialias]: dart.fieldType(core.bool),
    [_blendMode$]: dart.fieldType(ui.BlendMode)
  }));
  var blendMode = dart.privateName(flare, "FlutterActorDropShadow.blendMode");
  flare.FlutterActorDropShadow = class FlutterActorDropShadow extends actor_drop_shadow.ActorDropShadow {
    get blendMode() {
      return this[blendMode];
    }
    set blendMode(value) {
      this[blendMode] = value;
    }
    get blendModeId() {
      return this.blendMode.index;
    }
    set blendModeId(index) {
      this.blendMode = ui.BlendMode.values[$_get](index);
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorDropShadow.new();
    }
  };
  (flare.FlutterActorDropShadow.new = function() {
    this[blendMode] = ui.BlendMode.srcOver;
    flare.FlutterActorDropShadow.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorDropShadow.prototype;
  dart.addTypeTests(flare.FlutterActorDropShadow);
  dart.addTypeCaches(flare.FlutterActorDropShadow);
  dart.setLibraryUri(flare.FlutterActorDropShadow, I[0]);
  dart.setFieldSignature(flare.FlutterActorDropShadow, () => ({
    __proto__: dart.getFields(flare.FlutterActorDropShadow.__proto__),
    blendMode: dart.fieldType(ui.BlendMode)
  }));
  var _$35FlutterPathPointsPath$35_path = dart.privateName(flare, "FlutterPathPointsPath._#FlutterPathPointsPath#_path");
  var _isValid = dart.privateName(flare, "FlutterPathPointsPath._isValid");
  var __FlutterPathPointsPath__path = dart.privateName(flare, "_#FlutterPathPointsPath#_path");
  var _isValid$ = dart.privateName(flare, "_isValid");
  var _path = dart.privateName(flare, "_path");
  var _makePath = dart.privateName(flare, "_makePath");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  flare.FlutterPathPointsPath = class FlutterPathPointsPath extends core.Object {
    get [__FlutterPathPointsPath__path]() {
      return this[_$35FlutterPathPointsPath$35_path];
    }
    set [__FlutterPathPointsPath__path](value) {
      this[_$35FlutterPathPointsPath$35_path] = value;
    }
    get [_isValid$]() {
      return this[_isValid];
    }
    set [_isValid$](value) {
      this[_isValid] = value;
    }
    get [_path]() {
      let t0;
      t0 = this[__FlutterPathPointsPath__path];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_path")) : t0;
    }
    set [_path](library$32package$58flare_flutter$47flare$46dart$58$58_path$35param) {
      this[__FlutterPathPointsPath__path] = library$32package$58flare_flutter$47flare$46dart$58$58_path$35param;
    }
    get path() {
      if (this[_isValid$]) {
        return this[_path];
      }
      return this[_makePath]();
    }
    initializeGraphics() {
      this[_path] = ui.Path.new();
    }
    invalidatePath() {
      this[_isValid$] = false;
    }
    [_makePath]() {
      let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
      this[_isValid$] = true;
      this[_path].reset();
      let pts = this.deformedPoints;
      if (pts[$isEmpty]) {
        return this[_path];
      }
      let renderPoints = T.JSArrayOfPathPoint().of([]);
      let pl = pts[$length];
      let previous = this.isClosed ? pts[$_get](pl - 1) : null;
      for (let i = 0; i < pl; i = i + 1) {
        let point = pts[$_get](i);
        switch (point.pointType) {
          case C[1] || CT.C1:
            {
              {
                let straightPoint = path_point.StraightPathPoint.as(point);
                let radius = straightPoint.radius;
                if (radius > 0) {
                  if (!this.isClosed && (i === 0 || i === pl - 1)) {
                    renderPoints[$add](point);
                    previous = point;
                  } else {
                    if (!(previous != null)) dart.assertFailed(null, I[1], 1257, 24, "previous != null");
                    let next = pts[$_get]((i + 1)[$modulo](pl));
                    let prevPoint = path_point.CubicPathPoint.is(previous) ? previous.outPoint : dart.nullCheck(previous).translation;
                    let nextPoint = path_point.CubicPathPoint.is(next) ? next.inPoint : next.translation;
                    let pos = point.translation;
                    let toPrev = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), prevPoint, pos);
                    let toPrevLength = vec2d.Vec2D.length(toPrev);
                    t0 = toPrev;
                    t1 = 0;
                    t0._set(t1, t0._get(t1) / toPrevLength);
                    t0$ = toPrev;
                    t1$ = 1;
                    t0$._set(t1$, t0$._get(t1$) / toPrevLength);
                    let toNext = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), nextPoint, pos);
                    let toNextLength = vec2d.Vec2D.length(toNext);
                    t0$0 = toNext;
                    t1$0 = 0;
                    t0$0._set(t1$0, t0$0._get(t1$0) / toNextLength);
                    t0$1 = toNext;
                    t1$1 = 1;
                    t0$1._set(t1$1, t0$1._get(t1$1) / toNextLength);
                    let renderRadius = math.min(core.double, toPrevLength, math.min(core.double, toNextLength, radius));
                    let translation = vec2d.Vec2D.scaleAndAdd(new vec2d.Vec2D.new(), pos, toPrev, renderRadius);
                    renderPoints[$add](new path_point.CubicPathPoint.fromValues(translation, translation, vec2d.Vec2D.scaleAndAdd(new vec2d.Vec2D.new(), pos, toPrev, 0.44999999999999996 * renderRadius)));
                    translation = vec2d.Vec2D.scaleAndAdd(new vec2d.Vec2D.new(), pos, toNext, renderRadius);
                    previous = new path_point.CubicPathPoint.fromValues(translation, vec2d.Vec2D.scaleAndAdd(new vec2d.Vec2D.new(), pos, toNext, 0.44999999999999996 * renderRadius), translation);
                    renderPoints[$add](previous);
                  }
                } else {
                  renderPoints[$add](point);
                  previous = point;
                }
                break;
              }
            }
          default:
            {
              renderPoints[$add](point);
              previous = point;
              break;
            }
        }
      }
      let firstPoint = renderPoints[$_get](0);
      this[_path].moveTo(firstPoint.translation._get(0), firstPoint.translation._get(1));
      for (let i = 0, l = this.isClosed ? renderPoints[$length] : renderPoints[$length] - 1, pl = renderPoints[$length]; i < l; i = i + 1) {
        let point = renderPoints[$_get](i);
        let nextPoint = renderPoints[$_get]((i + 1)[$modulo](pl));
        let cin = path_point.CubicPathPoint.is(nextPoint) ? nextPoint.inPoint : null;
        let cout = path_point.CubicPathPoint.is(point) ? point.outPoint : null;
        if (cin == null && cout == null) {
          this[_path].lineTo(nextPoint.translation._get(0), nextPoint.translation._get(1));
        } else {
          cout == null ? cout = point.translation : null;
          cin == null ? cin = nextPoint.translation : null;
          this[_path].cubicTo(cout._get(0), cout._get(1), cin._get(0), cin._get(1), nextPoint.translation._get(0), nextPoint.translation._get(1));
        }
      }
      if (this.isClosed) {
        this[_path].close();
      }
      return this[_path];
    }
  };
  (flare.FlutterPathPointsPath.new = function() {
    this[_$35FlutterPathPointsPath$35_path] = null;
    this[_isValid] = false;
    ;
  }).prototype = flare.FlutterPathPointsPath.prototype;
  dart.addTypeTests(flare.FlutterPathPointsPath);
  dart.addTypeCaches(flare.FlutterPathPointsPath);
  flare.FlutterPathPointsPath[dart.implements] = () => [flare.FlutterPath];
  dart.setMethodSignature(flare.FlutterPathPointsPath, () => ({
    __proto__: dart.getMethods(flare.FlutterPathPointsPath.__proto__),
    initializeGraphics: dart.fnType(dart.void, []),
    invalidatePath: dart.fnType(dart.void, []),
    [_makePath]: dart.fnType(ui.Path, [])
  }));
  dart.setGetterSignature(flare.FlutterPathPointsPath, () => ({
    __proto__: dart.getGetters(flare.FlutterPathPointsPath.__proto__),
    [_path]: ui.Path,
    path: ui.Path
  }));
  dart.setSetterSignature(flare.FlutterPathPointsPath, () => ({
    __proto__: dart.getSetters(flare.FlutterPathPointsPath.__proto__),
    [_path]: ui.Path
  }));
  dart.setLibraryUri(flare.FlutterPathPointsPath, I[0]);
  dart.setFieldSignature(flare.FlutterPathPointsPath, () => ({
    __proto__: dart.getFields(flare.FlutterPathPointsPath.__proto__),
    [__FlutterPathPointsPath__path]: dart.fieldType(dart.nullable(ui.Path)),
    [_isValid$]: dart.fieldType(core.bool)
  }));
  const ActorEllipse_FlutterPathPointsPath$36 = class ActorEllipse_FlutterPathPointsPath extends actor_ellipse.ActorEllipse {};
  (ActorEllipse_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorEllipse_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorEllipse_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorEllipse_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorEllipse = class FlutterActorEllipse extends ActorEllipse_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorEllipse.new();
      instanceNode.copyPath(this, resetArtboard);
      return instanceNode;
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorEllipse.new();
    }
  };
  (flare.FlutterActorEllipse.new = function() {
    flare.FlutterActorEllipse.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorEllipse.prototype;
  dart.addTypeTests(flare.FlutterActorEllipse);
  dart.addTypeCaches(flare.FlutterActorEllipse);
  dart.setLibraryUri(flare.FlutterActorEllipse, I[0]);
  var __FlutterActorImage__vertexBuffer = dart.privateName(flare, "_#FlutterActorImage#_vertexBuffer");
  var __FlutterActorImage__uvBuffer = dart.privateName(flare, "_#FlutterActorImage#_uvBuffer");
  var __FlutterActorImage__paint = dart.privateName(flare, "_#FlutterActorImage#_paint");
  var _canvasVertices = dart.privateName(flare, "_canvasVertices");
  var __FlutterActorImage__indices = dart.privateName(flare, "_#FlutterActorImage#_indices");
  var _identityMatrix = dart.privateName(flare, "_identityMatrix");
  var _vertexBuffer = dart.privateName(flare, "_vertexBuffer");
  var _uvBuffer = dart.privateName(flare, "_uvBuffer");
  var _paint = dart.privateName(flare, "_paint");
  var _indices = dart.privateName(flare, "_indices");
  const ActorImage_FlutterActorDrawable$36 = class ActorImage_FlutterActorDrawable extends actor_image.ActorImage {};
  (ActorImage_FlutterActorDrawable$36.new = function() {
    flare.FlutterActorDrawable.new.call(this);
    ActorImage_FlutterActorDrawable$36.__proto__.new.call(this);
  }).prototype = ActorImage_FlutterActorDrawable$36.prototype;
  dart.applyMixin(ActorImage_FlutterActorDrawable$36, flare.FlutterActorDrawable);
  flare.FlutterActorImage = class FlutterActorImage extends ActorImage_FlutterActorDrawable$36 {
    get [_vertexBuffer]() {
      let t0;
      t0 = this[__FlutterActorImage__vertexBuffer];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_vertexBuffer")) : t0;
    }
    set [_vertexBuffer](library$32package$58flare_flutter$47flare$46dart$58$58_vertexBuffer$35param) {
      this[__FlutterActorImage__vertexBuffer] = library$32package$58flare_flutter$47flare$46dart$58$58_vertexBuffer$35param;
    }
    get [_uvBuffer]() {
      let t0;
      t0 = this[__FlutterActorImage__uvBuffer];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_uvBuffer")) : t0;
    }
    set [_uvBuffer](library$32package$58flare_flutter$47flare$46dart$58$58_uvBuffer$35param) {
      this[__FlutterActorImage__uvBuffer] = library$32package$58flare_flutter$47flare$46dart$58$58_uvBuffer$35param;
    }
    get [_paint]() {
      let t0;
      t0 = this[__FlutterActorImage__paint];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_paint")) : t0;
    }
    set [_paint](library$32package$58flare_flutter$47flare$46dart$58$58_paint$35param) {
      this[__FlutterActorImage__paint] = library$32package$58flare_flutter$47flare$46dart$58$58_paint$35param;
    }
    get [_indices]() {
      let t0;
      t0 = this[__FlutterActorImage__indices];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_indices")) : t0;
    }
    set [_indices](library$32package$58flare_flutter$47flare$46dart$58$58_indices$35param) {
      this[__FlutterActorImage__indices] = library$32package$58flare_flutter$47flare$46dart$58$58_indices$35param;
    }
    set textureIndex(value) {
      let t0;
      if (this.textureIndex !== value) {
        let images = flare.FlutterActor.as(this.artboard.actor).images;
        this[_paint] = (t0 = ui.Paint.new(), (() => {
          t0.blendMode = this.blendMode;
          t0.shader = this.textureIndex >= 0 && this.textureIndex < images[$length] ? ui.ImageShader.new(images[$_get](this.textureIndex), ui.TileMode.clamp, ui.TileMode.clamp, this[_identityMatrix]) : null;
          t0.filterQuality = ui.FilterQuality.low;
          t0.isAntiAlias = this.antialias;
          return t0;
        })());
        this.onPaintUpdated(this[_paint]);
      }
    }
    get textureIndex() {
      return super.textureIndex;
    }
    changeImage(image) {
      if (this.triangles == null || this.dynamicUV == null) {
        return false;
      }
      this[_uvBuffer] = this.makeVertexUVBuffer();
      let count = this.vertexCount;
      let duv = dart.nullCheck(this.dynamicUV);
      let idx = 0;
      for (let i = 0; i < count; i = i + 1) {
        this[_uvBuffer][$_set](idx, duv[$_get](idx) * image.width);
        this[_uvBuffer][$_set](idx + 1, duv[$_get](idx + 1) * image.height);
        idx = idx + 2;
      }
      this[_paint].shader = ui.ImageShader.new(image, ui.TileMode.clamp, ui.TileMode.clamp, this[_identityMatrix]);
      this[_canvasVertices] = ui.Vertices.raw(ui.VertexMode.triangles, this[_vertexBuffer], {indices: this[_indices], textureCoordinates: this[_uvBuffer]});
      this.onPaintUpdated(this[_paint]);
      return true;
    }
    changeImageFromBundle(bundle, filename) {
      return async.async(core.bool, (function* changeImageFromBundle() {
        let data = (yield bundle.load(filename));
        let codec = (yield ui.instantiateImageCodec(typed_data.Uint8List.view(data[$buffer])));
        let frame = (yield codec.getNextFrame());
        return this.changeImage(frame.image);
      }).bind(this));
    }
    computeAABB() {
      let t0, t0$;
      this.updateVertices();
      let minX = 1 / 0;
      let minY = 1 / 0;
      let maxX = -1 / 0;
      let maxY = -1 / 0;
      let readIdx = 0;
      let nv = (this[_vertexBuffer][$length] / 2)[$truncate]();
      for (let i = 0; i < nv; i = i + 1) {
        let x = this[_vertexBuffer][$_get]((t0 = readIdx, readIdx = t0 + 1, t0));
        let y = this[_vertexBuffer][$_get]((t0$ = readIdx, readIdx = t0$ + 1, t0$));
        if (x < minX) {
          minX = x;
        }
        if (y < minY) {
          minY = y;
        }
        if (x > maxX) {
          maxX = x;
        }
        if (y > maxY) {
          maxY = y;
        }
      }
      return new aabb.AABB.fromValues(minX, minY, maxX, maxY);
    }
    dispose() {
    }
    draw(canvas) {
      if (this.triangles == null || this.renderCollapsed || this.renderOpacity <= 0) {
        return;
      }
      if (this[_canvasVertices] == null && !this.updateVertices()) {
        return;
      }
      canvas.save();
      this.clip(canvas);
      this[_paint].color = this[_paint].color.withOpacity(this.renderOpacity[$clamp](0.0, 1.0)[$toDouble]());
      if (this.imageTransform != null) {
        canvas.transform(dart.nullCheck(this.imageTransform).mat4);
        canvas.drawVertices(dart.nullCheck(this[_canvasVertices]), ui.BlendMode.srcOver, this[_paint]);
      } else {
        canvas.drawVertices(dart.nullCheck(this[_canvasVertices]), ui.BlendMode.srcOver, this[_paint]);
      }
      canvas.restore();
    }
    initializeGraphics() {
      let t0, t1, t0$, t1$, t0$0, t0$1;
      super.initializeGraphics();
      if (this.triangles == null) {
        this[_paint] = ui.Paint.new();
        return;
      }
      this[_vertexBuffer] = this.makeVertexPositionBuffer();
      this[_uvBuffer] = this.makeVertexUVBuffer();
      this[_indices] = dart.nullCheck(this.triangles);
      this.updateVertexUVBuffer(this[_uvBuffer]);
      let count = this.vertexCount;
      let idx = 0;
      let images = flare.FlutterActor.as(this.artboard.actor).images;
      let image = images[$_get](this.textureIndex);
      for (let i = 0; i < count; i = i + 1) {
        this[_uvBuffer][$_set](idx, this[_uvBuffer][$_get](idx) * image.width);
        this[_uvBuffer][$_set](idx + 1, this[_uvBuffer][$_get](idx + 1) * image.height);
        idx = idx + 2;
      }
      if (this.sequenceUVs != null) {
        let suvs = dart.nullCheck(this.sequenceUVs);
        for (let i = 0; i < suvs[$length]; i = i + 1) {
          t0$ = suvs;
          t1 = (t0 = i, i = t0 + 1, t0);
          t0$[$_set](t1, t0$[$_get](t1) * image.width);
          t0$0 = suvs;
          t1$ = i;
          t0$0[$_set](t1$, t0$0[$_get](t1$) * image.height);
        }
      }
      this[_paint] = (t0$1 = ui.Paint.new(), (() => {
        t0$1.blendMode = this.blendMode;
        t0$1.shader = ui.ImageShader.new(image, ui.TileMode.clamp, ui.TileMode.clamp, this[_identityMatrix]);
        t0$1.filterQuality = ui.FilterQuality.low;
        return t0$1;
      })());
      this.onPaintUpdated(this[_paint]);
    }
    invalidateDrawable() {
      this[_canvasVertices] = null;
    }
    onAntialiasChanged(useAA) {
      this[_paint].isAntiAlias = useAA;
      this.onPaintUpdated(this[_paint]);
    }
    onBlendModeChanged(mode) {
      this[_paint].blendMode = mode;
      this.onPaintUpdated(this[_paint]);
    }
    onPaintUpdated(paint) {
    }
    update(dirt) {
      super.update(dirt);
      if ((dirt & 4) !== 0) {
        this.onPaintUpdated(this[_paint]);
      }
    }
    updateVertices() {
      if (this.triangles == null) {
        return false;
      }
      this.updateVertexPositionBuffer(this[_vertexBuffer], false);
      this[_canvasVertices] = ui.Vertices.raw(ui.VertexMode.triangles, this[_vertexBuffer], {indices: this[_indices], textureCoordinates: this[_uvBuffer]});
      return true;
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorImage.new();
    }
  };
  (flare.FlutterActorImage.new = function() {
    this[__FlutterActorImage__vertexBuffer] = null;
    this[__FlutterActorImage__uvBuffer] = null;
    this[__FlutterActorImage__paint] = null;
    this[_canvasVertices] = null;
    this[__FlutterActorImage__indices] = null;
    this[_identityMatrix] = _native_typed_data.NativeFloat64List.fromList(T.JSArrayOfdouble().of([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
    flare.FlutterActorImage.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorImage.prototype;
  dart.addTypeTests(flare.FlutterActorImage);
  dart.addTypeCaches(flare.FlutterActorImage);
  dart.setMethodSignature(flare.FlutterActorImage, () => ({
    __proto__: dart.getMethods(flare.FlutterActorImage.__proto__),
    changeImage: dart.fnType(core.bool, [ui.Image]),
    changeImageFromBundle: dart.fnType(async.Future$(core.bool), [asset_bundle.AssetBundle, core.String]),
    dispose: dart.fnType(dart.void, []),
    draw: dart.fnType(dart.void, [ui.Canvas]),
    onAntialiasChanged: dart.fnType(dart.void, [core.bool]),
    onBlendModeChanged: dart.fnType(dart.void, [ui.BlendMode]),
    onPaintUpdated: dart.fnType(dart.void, [ui.Paint]),
    updateVertices: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(flare.FlutterActorImage, () => ({
    __proto__: dart.getGetters(flare.FlutterActorImage.__proto__),
    [_vertexBuffer]: typed_data.Float32List,
    [_uvBuffer]: typed_data.Float32List,
    [_paint]: ui.Paint,
    [_indices]: typed_data.Uint16List
  }));
  dart.setSetterSignature(flare.FlutterActorImage, () => ({
    __proto__: dart.getSetters(flare.FlutterActorImage.__proto__),
    [_vertexBuffer]: typed_data.Float32List,
    [_uvBuffer]: typed_data.Float32List,
    [_paint]: ui.Paint,
    [_indices]: typed_data.Uint16List,
    textureIndex: core.int
  }));
  dart.setLibraryUri(flare.FlutterActorImage, I[0]);
  dart.setFieldSignature(flare.FlutterActorImage, () => ({
    __proto__: dart.getFields(flare.FlutterActorImage.__proto__),
    [__FlutterActorImage__vertexBuffer]: dart.fieldType(dart.nullable(typed_data.Float32List)),
    [__FlutterActorImage__uvBuffer]: dart.fieldType(dart.nullable(typed_data.Float32List)),
    [__FlutterActorImage__paint]: dart.fieldType(dart.nullable(ui.Paint)),
    [_canvasVertices]: dart.fieldType(dart.nullable(ui.Vertices)),
    [__FlutterActorImage__indices]: dart.fieldType(dart.nullable(typed_data.Uint16List)),
    [_identityMatrix]: dart.finalFieldType(typed_data.Float64List)
  }));
  var blendMode$ = dart.privateName(flare, "FlutterActorInnerShadow.blendMode");
  flare.FlutterActorInnerShadow = class FlutterActorInnerShadow extends actor_inner_shadow.ActorInnerShadow {
    get blendMode() {
      return this[blendMode$];
    }
    set blendMode(value) {
      this[blendMode$] = value;
    }
    get blendModeId() {
      return this.blendMode.index;
    }
    set blendModeId(index) {
      this.blendMode = ui.BlendMode.values[$_get](index);
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorInnerShadow.new();
    }
  };
  (flare.FlutterActorInnerShadow.new = function() {
    this[blendMode$] = ui.BlendMode.srcOver;
    flare.FlutterActorInnerShadow.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorInnerShadow.prototype;
  dart.addTypeTests(flare.FlutterActorInnerShadow);
  dart.addTypeCaches(flare.FlutterActorInnerShadow);
  dart.setLibraryUri(flare.FlutterActorInnerShadow, I[0]);
  dart.setFieldSignature(flare.FlutterActorInnerShadow, () => ({
    __proto__: dart.getFields(flare.FlutterActorInnerShadow.__proto__),
    blendMode: dart.fieldType(ui.BlendMode)
  }));
  var CkMatrixColorFilter_matrix = dart.privateName(_engine, "CkMatrixColorFilter.matrix");
  const ActorLayerEffectRenderer_FlutterActorDrawable$36 = class ActorLayerEffectRenderer_FlutterActorDrawable extends actor_layer_effect_renderer.ActorLayerEffectRenderer {};
  (ActorLayerEffectRenderer_FlutterActorDrawable$36.new = function() {
    flare.FlutterActorDrawable.new.call(this);
    ActorLayerEffectRenderer_FlutterActorDrawable$36.__proto__.new.call(this);
  }).prototype = ActorLayerEffectRenderer_FlutterActorDrawable$36.prototype;
  dart.applyMixin(ActorLayerEffectRenderer_FlutterActorDrawable$36, flare.FlutterActorDrawable);
  flare.FlutterActorLayerEffectRenderer = class FlutterActorLayerEffectRenderer extends ActorLayerEffectRenderer_FlutterActorDrawable$36 {
    draw(canvas) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      let aabb = this.artboard.artboardAABB();
      let bounds = new ui.Rect.fromLTRB(aabb._get(0), aabb._get(1), aabb._get(2), aabb._get(3));
      let baseBlurX = 0.0;
      let baseBlurY = 0.0;
      let layerPaint = (t0 = ui.Paint.new(), (() => {
        t0.isAntiAlias = this.antialias;
        return t0;
      })());
      let layerColor = colors$.Colors.white.withOpacity(dart.nullCheck(this.parent).renderOpacity);
      layerPaint.color = layerColor;
      if (dart.test((t0$0 = (t0$ = this.blur, t0$ == null ? null : t0$.isActive), t0$0 == null ? false : t0$0))) {
        baseBlurX = dart.nullCheck(this.blur).blurX;
        baseBlurY = dart.nullCheck(this.blur).blurY;
        layerPaint.imageFilter = flare._blurFilter(baseBlurX, baseBlurY);
      }
      if (this.dropShadows[$isNotEmpty]) {
        for (let dropShadow of this.dropShadows) {
          if (!dropShadow.isActive) {
            continue;
          }
          canvas.save();
          let color = dropShadow.color;
          canvas.translate(dropShadow.offsetX, dropShadow.offsetY);
          let adjustedBounds = new ui.Rect.fromLTRB(bounds.left - dropShadow.offsetX[$abs](), bounds.top - dropShadow.offsetY[$abs](), bounds.right + dropShadow.offsetX[$abs](), bounds.bottom + dropShadow.offsetY[$abs]());
          let shadowPaint = (t0$1 = ui.Paint.new(), (() => {
            t0$1.isAntiAlias = this.antialias;
            t0$1.color = layerColor;
            t0$1.imageFilter = flare._blurFilter(dropShadow.blurX + baseBlurX, dropShadow.blurY + baseBlurY);
            t0$1.colorFilter = new _engine.CkBlendModeColorFilter.new(new ui.Color.fromRGBO((color[$_get](0) * 255.0)[$round](), (color[$_get](1) * 255.0)[$round](), (color[$_get](2) * 255.0)[$round](), color[$_get](3)), ui.BlendMode.srcIn);
            t0$1.blendMode = ui.BlendMode.values[$_get](dropShadow.blendModeId);
            return t0$1;
          })());
          this.drawPass(canvas, adjustedBounds, shadowPaint);
          canvas.restore();
          canvas.restore();
        }
      }
      this.drawPass(canvas, bounds, layerPaint);
      if (this.innerShadows[$isNotEmpty]) {
        for (let innerShadow of this.innerShadows) {
          if (!innerShadow.isActive) {
            continue;
          }
          let blendMode = ui.BlendMode.values[$_get](innerShadow.blendModeId);
          let extraBlendPass = blendMode !== ui.BlendMode.srcOver;
          if (extraBlendPass) {
            let extraLayerPaint = (t0$2 = ui.Paint.new(), (() => {
              t0$2.blendMode = blendMode;
              t0$2.isAntiAlias = this.antialias;
              return t0$2;
            })());
            this.drawPass(canvas, bounds, extraLayerPaint);
          }
          let color = innerShadow.color;
          let shadowPaint = (t0$3 = ui.Paint.new(), (() => {
            t0$3.isAntiAlias = this.antialias;
            t0$3.color = layerColor;
            t0$3.blendMode = extraBlendPass ? ui.BlendMode.srcIn : ui.BlendMode.srcATop;
            t0$3.imageFilter = flare._blurFilter(innerShadow.blurX + baseBlurX, innerShadow.blurY + baseBlurY);
            t0$3.colorFilter = new _engine.CkBlendModeColorFilter.new(new ui.Color.fromRGBO((color[$_get](0) * 255.0)[$round](), (color[$_get](1) * 255.0)[$round](), (color[$_get](2) * 255.0)[$round](), color[$_get](3)), ui.BlendMode.srcIn);
            return t0$3;
          })());
          canvas.saveLayer(bounds, shadowPaint);
          canvas.translate(innerShadow.offsetX, innerShadow.offsetY);
          let adjustedBounds = new ui.Rect.fromLTRB(bounds.left - innerShadow.offsetX[$abs](), bounds.top - innerShadow.offsetY[$abs](), bounds.right + innerShadow.offsetX[$abs](), bounds.bottom + innerShadow.offsetY[$abs]());
          let invertPaint = (t0$4 = ui.Paint.new(), (() => {
            t0$4.isAntiAlias = this.antialias;
            t0$4.colorFilter = C[2] || CT.C2;
            return t0$4;
          })());
          this.drawPass(canvas, adjustedBounds, invertPaint);
          canvas.restore();
          canvas.restore();
          if (extraBlendPass) {
            canvas.restore();
          }
        }
      }
      canvas.restore();
    }
    drawPass(canvas, bounds, layerPaint) {
      canvas.saveLayer(bounds, layerPaint);
      for (let drawable of this.drawables) {
        if (flare.FlutterActorDrawable.is(drawable)) {
          flare.FlutterActorDrawable.as(drawable).draw(canvas);
        }
      }
      for (let renderMask of this.renderMasks) {
        let mask = renderMask.mask;
        if (!mask.isActive) {
          continue;
        }
        let maskPaint = ui.Paint.new();
        switch (mask.maskType) {
          case C[6] || CT.C6:
            {
              maskPaint.colorFilter = C[4] || CT.C4;
              break;
            }
          case C[9] || CT.C9:
            {
              maskPaint.colorFilter = C[7] || CT.C7;
              break;
            }
          case C[12] || CT.C12:
            {
              maskPaint.colorFilter = C[10] || CT.C10;
              break;
            }
          case C[15] || CT.C15:
          default:
            {
              maskPaint.colorFilter = C[13] || CT.C13;
              break;
            }
        }
        maskPaint.blendMode = ui.BlendMode.dstIn;
        maskPaint.isAntiAlias = this.antialias;
        canvas.saveLayer(bounds, maskPaint);
        for (let drawable of renderMask.drawables) {
          let wasHidden = drawable.isHidden;
          if (wasHidden) {
            drawable.isHidden = false;
          }
          flare.FlutterActorDrawable.as(drawable).draw(canvas);
          if (wasHidden) {
            drawable.isHidden = true;
          }
        }
        canvas.restore();
      }
    }
    onAntialiasChanged(useAA) {
      for (let drawable of this.drawables) {
        if (flare.FlutterActorDrawable.is(drawable)) {
          flare.FlutterActorDrawable.as(drawable).antialias = useAA;
        }
      }
    }
    onBlendModeChanged(blendMode) {
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorLayerEffectRenderer.new();
    }
  };
  (flare.FlutterActorLayerEffectRenderer.new = function() {
    flare.FlutterActorLayerEffectRenderer.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorLayerEffectRenderer.prototype;
  dart.addTypeTests(flare.FlutterActorLayerEffectRenderer);
  dart.addTypeCaches(flare.FlutterActorLayerEffectRenderer);
  dart.setMethodSignature(flare.FlutterActorLayerEffectRenderer, () => ({
    __proto__: dart.getMethods(flare.FlutterActorLayerEffectRenderer.__proto__),
    draw: dart.fnType(dart.void, [ui.Canvas]),
    drawPass: dart.fnType(dart.void, [ui.Canvas, ui.Rect, ui.Paint]),
    onAntialiasChanged: dart.fnType(dart.void, [core.bool]),
    onBlendModeChanged: dart.fnType(dart.void, [ui.BlendMode])
  }));
  dart.setLibraryUri(flare.FlutterActorLayerEffectRenderer, I[0]);
  const ActorPath_FlutterPathPointsPath$36 = class ActorPath_FlutterPathPointsPath extends actor_path.ActorPath {};
  (ActorPath_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorPath_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorPath_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorPath_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorPath = class FlutterActorPath extends ActorPath_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorPath.new();
      instanceNode.copyPath(this, resetArtboard);
      return instanceNode;
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorPath.new();
    }
  };
  (flare.FlutterActorPath.new = function() {
    flare.FlutterActorPath.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorPath.prototype;
  dart.addTypeTests(flare.FlutterActorPath);
  dart.addTypeCaches(flare.FlutterActorPath);
  dart.setLibraryUri(flare.FlutterActorPath, I[0]);
  const ActorPolygon_FlutterPathPointsPath$36 = class ActorPolygon_FlutterPathPointsPath extends actor_polygon.ActorPolygon {};
  (ActorPolygon_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorPolygon_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorPolygon_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorPolygon_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorPolygon = class FlutterActorPolygon extends ActorPolygon_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorPolygon.new();
      instanceNode.copyPolygon(this, resetArtboard);
      return instanceNode;
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorPolygon.new();
    }
  };
  (flare.FlutterActorPolygon.new = function() {
    flare.FlutterActorPolygon.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorPolygon.prototype;
  dart.addTypeTests(flare.FlutterActorPolygon);
  dart.addTypeCaches(flare.FlutterActorPolygon);
  dart.setLibraryUri(flare.FlutterActorPolygon, I[0]);
  const ActorRectangle_FlutterPathPointsPath$36 = class ActorRectangle_FlutterPathPointsPath extends actor_rectangle.ActorRectangle {};
  (ActorRectangle_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorRectangle_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorRectangle_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorRectangle_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorRectangle = class FlutterActorRectangle extends ActorRectangle_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorRectangle.new();
      instanceNode.copyRectangle(this, resetArtboard);
      return instanceNode;
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorRectangle.new();
    }
  };
  (flare.FlutterActorRectangle.new = function() {
    flare.FlutterActorRectangle.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorRectangle.prototype;
  dart.addTypeTests(flare.FlutterActorRectangle);
  dart.addTypeCaches(flare.FlutterActorRectangle);
  dart.setLibraryUri(flare.FlutterActorRectangle, I[0]);
  var __FlutterActorShape__path = dart.privateName(flare, "_#FlutterActorShape#_path");
  var _markPaintDirty = dart.privateName(flare, "_markPaintDirty");
  const ActorShape_FlutterActorDrawable$36 = class ActorShape_FlutterActorDrawable extends actor_shape.ActorShape {};
  (ActorShape_FlutterActorDrawable$36.new = function() {
    flare.FlutterActorDrawable.new.call(this);
    ActorShape_FlutterActorDrawable$36.__proto__.new.call(this);
  }).prototype = ActorShape_FlutterActorDrawable$36.prototype;
  dart.applyMixin(ActorShape_FlutterActorDrawable$36, flare.FlutterActorDrawable);
  flare.FlutterActorShape = class FlutterActorShape extends ActorShape_FlutterActorDrawable$36 {
    get [_path]() {
      let t0;
      t0 = this[__FlutterActorShape__path];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_path")) : t0;
    }
    set [_path](library$32package$58flare_flutter$47flare$46dart$58$58_path$35param) {
      this[__FlutterActorShape__path] = library$32package$58flare_flutter$47flare$46dart$58$58_path$35param;
    }
    get path() {
      if (this[_isValid$]) {
        return this[_path];
      }
      this[_isValid$] = true;
      this[_path].reset();
      if (this.fill != null && dart.nullCheck(this.fill).fillRule === actor_color.FillRule.evenOdd) {
        this[_path].fillType = ui.PathFillType.evenOdd;
      } else {
        this[_path].fillType = ui.PathFillType.nonZero;
      }
      for (let path of this.paths) {
        let transform = path.pathTransform;
        this[_path].addPath(flare.FlutterPath.as(path).path, ui.Offset.zero, {matrix4: transform.mat4});
      }
      return this[_path];
    }
    draw(canvas) {
      if (!this.doesDraw) {
        return;
      }
      canvas.save();
      this.clip(canvas);
      let renderPath = this.getRenderPath(canvas);
      for (let actorFill of this.fills) {
        let fill = flare.FlutterFill.as(actorFill);
        fill.paint(actorFill, canvas, renderPath);
      }
      for (let actorStroke of this.strokes) {
        let stroke = flare.FlutterStroke.as(actorStroke);
        stroke.paint(actorStroke, canvas, renderPath);
      }
      canvas.restore();
    }
    getRenderPath(canvas) {
      return this.path;
    }
    initializeGraphics() {
      super.initializeGraphics();
      this[_path] = ui.Path.new();
      for (let path of this.paths) {
        flare.FlutterPath.as(path).initializeGraphics();
      }
    }
    invalidateShape() {
      let t0;
      this[_isValid$] = false;
      t0 = this.stroke;
      t0 == null ? null : t0.markPathEffectsDirty();
    }
    onAntialiasChanged(useAA) {
      this[_markPaintDirty]();
    }
    onBlendModeChanged(mode) {
      this[_markPaintDirty]();
    }
    [_markPaintDirty]() {
      for (let actorFill of this.fills) {
        actor_color.ActorPaint.as(actorFill).markPaintDirty();
      }
      for (let actorStroke of this.strokes) {
        actor_color.ActorPaint.as(actorStroke).markPaintDirty();
      }
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorShape.new();
    }
  };
  (flare.FlutterActorShape.new = function() {
    this[__FlutterActorShape__path] = null;
    this[_isValid$] = false;
    flare.FlutterActorShape.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorShape.prototype;
  dart.addTypeTests(flare.FlutterActorShape);
  dart.addTypeCaches(flare.FlutterActorShape);
  dart.setMethodSignature(flare.FlutterActorShape, () => ({
    __proto__: dart.getMethods(flare.FlutterActorShape.__proto__),
    draw: dart.fnType(dart.void, [ui.Canvas]),
    getRenderPath: dart.fnType(ui.Path, [ui.Canvas]),
    onAntialiasChanged: dart.fnType(dart.void, [core.bool]),
    onBlendModeChanged: dart.fnType(dart.void, [ui.BlendMode]),
    [_markPaintDirty]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(flare.FlutterActorShape, () => ({
    __proto__: dart.getGetters(flare.FlutterActorShape.__proto__),
    [_path]: ui.Path,
    path: ui.Path
  }));
  dart.setSetterSignature(flare.FlutterActorShape, () => ({
    __proto__: dart.getSetters(flare.FlutterActorShape.__proto__),
    [_path]: ui.Path
  }));
  dart.setLibraryUri(flare.FlutterActorShape, I[0]);
  dart.setFieldSignature(flare.FlutterActorShape, () => ({
    __proto__: dart.getFields(flare.FlutterActorShape.__proto__),
    [__FlutterActorShape__path]: dart.fieldType(dart.nullable(ui.Path)),
    [_isValid$]: dart.fieldType(core.bool)
  }));
  var __FlutterActorShapeWithTransformedStroke__localPath = dart.privateName(flare, "_#FlutterActorShapeWithTransformedStroke#_localPath");
  var _isLocalValid = dart.privateName(flare, "_isLocalValid");
  var _localPath = dart.privateName(flare, "_localPath");
  flare.FlutterActorShapeWithTransformedStroke = class FlutterActorShapeWithTransformedStroke extends flare.FlutterActorShape {
    get [_localPath]() {
      let t0;
      t0 = this[__FlutterActorShapeWithTransformedStroke__localPath];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_localPath")) : t0;
    }
    set [_localPath](library$32package$58flare_flutter$47flare$46dart$58$58_localPath$35param) {
      this[__FlutterActorShapeWithTransformedStroke__localPath] = library$32package$58flare_flutter$47flare$46dart$58$58_localPath$35param;
    }
    get localPath() {
      if (this[_isLocalValid]) {
        return this[_localPath];
      }
      this[_isLocalValid] = true;
      this[_localPath].reset();
      let inverseWorld = new mat2d.Mat2D.new();
      if (!mat2d.Mat2D.invert(inverseWorld, this.worldTransform)) {
        mat2d.Mat2D.identity(inverseWorld);
      }
      for (let path of this.paths) {
        let transform = path.pathTransform;
        let localTransform = new mat2d.Mat2D.new();
        mat2d.Mat2D.multiply(localTransform, inverseWorld, transform);
        this[_localPath].addPath(flare.FlutterPath.as(path).path, ui.Offset.zero, {matrix4: localTransform.mat4});
      }
      return this[_localPath];
    }
    getRenderPath(canvas) {
      canvas.transform(this.worldTransform.mat4);
      return this.localPath;
    }
    initializeGraphics() {
      super.initializeGraphics();
      this[_localPath] = ui.Path.new();
    }
    invalidateShape() {
      this[_isLocalValid] = false;
      super.invalidateShape();
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorShapeWithTransformedStroke.new();
    }
  };
  (flare.FlutterActorShapeWithTransformedStroke.new = function() {
    this[__FlutterActorShapeWithTransformedStroke__localPath] = null;
    this[_isLocalValid] = false;
    flare.FlutterActorShapeWithTransformedStroke.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorShapeWithTransformedStroke.prototype;
  dart.addTypeTests(flare.FlutterActorShapeWithTransformedStroke);
  dart.addTypeCaches(flare.FlutterActorShapeWithTransformedStroke);
  dart.setGetterSignature(flare.FlutterActorShapeWithTransformedStroke, () => ({
    __proto__: dart.getGetters(flare.FlutterActorShapeWithTransformedStroke.__proto__),
    [_localPath]: ui.Path,
    localPath: ui.Path
  }));
  dart.setSetterSignature(flare.FlutterActorShapeWithTransformedStroke, () => ({
    __proto__: dart.getSetters(flare.FlutterActorShapeWithTransformedStroke.__proto__),
    [_localPath]: ui.Path
  }));
  dart.setLibraryUri(flare.FlutterActorShapeWithTransformedStroke, I[0]);
  dart.setFieldSignature(flare.FlutterActorShapeWithTransformedStroke, () => ({
    __proto__: dart.getFields(flare.FlutterActorShapeWithTransformedStroke.__proto__),
    [__FlutterActorShapeWithTransformedStroke__localPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_isLocalValid]: dart.fieldType(core.bool)
  }));
  const ActorStar_FlutterPathPointsPath$36 = class ActorStar_FlutterPathPointsPath extends actor_star.ActorStar {};
  (ActorStar_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorStar_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorStar_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorStar_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorStar = class FlutterActorStar extends ActorStar_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorStar.new();
      instanceNode.copyStar(this, resetArtboard);
      return instanceNode;
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorStar.new();
    }
  };
  (flare.FlutterActorStar.new = function() {
    flare.FlutterActorStar.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorStar.prototype;
  dart.addTypeTests(flare.FlutterActorStar);
  dart.addTypeCaches(flare.FlutterActorStar);
  dart.setLibraryUri(flare.FlutterActorStar, I[0]);
  const ActorTriangle_FlutterPathPointsPath$36 = class ActorTriangle_FlutterPathPointsPath extends actor_triangle.ActorTriangle {};
  (ActorTriangle_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorTriangle_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorTriangle_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorTriangle_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorTriangle = class FlutterActorTriangle extends ActorTriangle_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorTriangle.new();
      instanceNode.copyPath(this, resetArtboard);
      return instanceNode;
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterActorTriangle.new();
    }
  };
  (flare.FlutterActorTriangle.new = function() {
    flare.FlutterActorTriangle.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorTriangle.prototype;
  dart.addTypeTests(flare.FlutterActorTriangle);
  dart.addTypeCaches(flare.FlutterActorTriangle);
  dart.setLibraryUri(flare.FlutterActorTriangle, I[0]);
  var _$35FlutterFill$35_paint = dart.privateName(flare, "FlutterFill._#FlutterFill#_paint");
  var __FlutterFill__paint = dart.privateName(flare, "_#FlutterFill#_paint");
  flare.FlutterFill = class FlutterFill extends core.Object {
    get [__FlutterFill__paint]() {
      return this[_$35FlutterFill$35_paint];
    }
    set [__FlutterFill__paint](value) {
      this[_$35FlutterFill$35_paint] = value;
    }
    get [_paint]() {
      let t0;
      t0 = this[__FlutterFill__paint];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_paint")) : t0;
    }
    set [_paint](library$32package$58flare_flutter$47flare$46dart$58$58_paint$35param) {
      this[__FlutterFill__paint] = library$32package$58flare_flutter$47flare$46dart$58$58_paint$35param;
    }
    initializeGraphics() {
      let t0;
      this[_paint] = (t0 = ui.Paint.new(), (() => {
        t0.style = ui.PaintingStyle.fill;
        return t0;
      })());
      this.onPaintUpdated(this[_paint]);
    }
    onPaintUpdated(paint) {
    }
    paint(fill, canvas, path) {
      switch (fill.fillRule) {
        case C[16] || CT.C16:
          {
            path.fillType = ui.PathFillType.evenOdd;
            break;
          }
        case C[17] || CT.C17:
          {
            path.fillType = ui.PathFillType.nonZero;
            break;
          }
      }
      canvas.drawPath(path, this[_paint]);
    }
  };
  (flare.FlutterFill.new = function() {
    this[_$35FlutterFill$35_paint] = null;
    ;
  }).prototype = flare.FlutterFill.prototype;
  dart.addTypeTests(flare.FlutterFill);
  dart.addTypeCaches(flare.FlutterFill);
  dart.setMethodSignature(flare.FlutterFill, () => ({
    __proto__: dart.getMethods(flare.FlutterFill.__proto__),
    initializeGraphics: dart.fnType(dart.void, []),
    onPaintUpdated: dart.fnType(dart.void, [ui.Paint]),
    paint: dart.fnType(dart.void, [actor_color.ActorFill, ui.Canvas, ui.Path])
  }));
  dart.setGetterSignature(flare.FlutterFill, () => ({
    __proto__: dart.getGetters(flare.FlutterFill.__proto__),
    [_paint]: ui.Paint
  }));
  dart.setSetterSignature(flare.FlutterFill, () => ({
    __proto__: dart.getSetters(flare.FlutterFill.__proto__),
    [_paint]: ui.Paint
  }));
  dart.setLibraryUri(flare.FlutterFill, I[0]);
  dart.setFieldSignature(flare.FlutterFill, () => ({
    __proto__: dart.getFields(flare.FlutterFill.__proto__),
    [__FlutterFill__paint]: dart.fieldType(dart.nullable(ui.Paint))
  }));
  const ColorFill_FlutterFill$36 = class ColorFill_FlutterFill extends actor_color.ColorFill {};
  (ColorFill_FlutterFill$36.new = function() {
    flare.FlutterFill.new.call(this);
    ColorFill_FlutterFill$36.__proto__.new.call(this);
  }).prototype = ColorFill_FlutterFill$36.prototype;
  dart.applyMixin(ColorFill_FlutterFill$36, flare.FlutterFill);
  flare.FlutterColorFill = class FlutterColorFill extends ColorFill_FlutterFill$36 {
    get uiColor() {
      let c = this.displayColor;
      let o = (this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]();
      return new ui.Color.fromRGBO((c[$_get](0) * 255.0)[$round](), (c[$_get](1) * 255.0)[$round](), (c[$_get](2) * 255.0)[$round](), c[$_get](3) * o);
    }
    set uiColor(c) {
      this.color = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([c.red / 255, c.green / 255, c.blue / 255, c.opacity]));
    }
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterColorFill.new();
      instanceNode.copyColorFill(this, resetArtboard);
      return instanceNode;
    }
    update(dirt) {
      let t0;
      super.update(dirt);
      let parentShape = flare.FlutterActorShape.as(this.parent);
      t0 = this[_paint];
      (() => {
        t0.color = this.uiColor;
        t0.isAntiAlias = parentShape.antialias;
        t0.blendMode = parentShape.blendMode;
        return t0;
      })();
      this.onPaintUpdated(this[_paint]);
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterColorFill.new();
    }
  };
  (flare.FlutterColorFill.new = function() {
    flare.FlutterColorFill.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterColorFill.prototype;
  dart.addTypeTests(flare.FlutterColorFill);
  dart.addTypeCaches(flare.FlutterColorFill);
  dart.setMethodSignature(flare.FlutterColorFill, () => ({
    __proto__: dart.getMethods(flare.FlutterColorFill.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(flare.FlutterColorFill, () => ({
    __proto__: dart.getGetters(flare.FlutterColorFill.__proto__),
    uiColor: ui.Color
  }));
  dart.setSetterSignature(flare.FlutterColorFill, () => ({
    __proto__: dart.getSetters(flare.FlutterColorFill.__proto__),
    uiColor: ui.Color
  }));
  dart.setLibraryUri(flare.FlutterColorFill, I[0]);
  var _$35FlutterStroke$35_paint = dart.privateName(flare, "FlutterStroke._#FlutterStroke#_paint");
  var effectPath = dart.privateName(flare, "FlutterStroke.effectPath");
  var __FlutterStroke__paint = dart.privateName(flare, "_#FlutterStroke#_paint");
  flare.FlutterStroke = class FlutterStroke extends core.Object {
    get [__FlutterStroke__paint]() {
      return this[_$35FlutterStroke$35_paint];
    }
    set [__FlutterStroke__paint](value) {
      this[_$35FlutterStroke$35_paint] = value;
    }
    get effectPath() {
      return this[effectPath];
    }
    set effectPath(value) {
      this[effectPath] = value;
    }
    get [_paint]() {
      let t0;
      t0 = this[__FlutterStroke__paint];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_paint")) : t0;
    }
    set [_paint](library$32package$58flare_flutter$47flare$46dart$58$58_paint$35param) {
      this[__FlutterStroke__paint] = library$32package$58flare_flutter$47flare$46dart$58$58_paint$35param;
    }
    initializeGraphics() {
      let t0;
      let stroke = actor_color.ActorStroke.as(this);
      this[_paint] = (t0 = ui.Paint.new(), (() => {
        t0.style = ui.PaintingStyle.stroke;
        t0.strokeWidth = stroke.width;
        t0.strokeCap = flare.FlutterStroke.getStrokeCap(stroke.cap);
        t0.strokeJoin = flare.FlutterStroke.getStrokeJoin(stroke.join);
        return t0;
      })());
      this.onPaintUpdated(this[_paint]);
    }
    markPathEffectsDirty() {
      this.effectPath = null;
    }
    onPaintUpdated(paint) {
    }
    paint(stroke, canvas, path) {
      if (stroke.width === 0) {
        return;
      }
      if (stroke.isTrimmed) {
        if (this.effectPath == null) {
          let isSequential = stroke.trim === actor_color.TrimPath.sequential;
          let start = stroke.trimStart[$clamp](0, 1)[$toDouble]();
          let end = stroke.trimEnd[$clamp](0, 1)[$toDouble]();
          let offset = stroke.trimOffset;
          let inverted = start > end;
          if ((start - end)[$abs]() !== 1.0) {
            start = (start + offset)[$modulo](1.0);
            end = (end + offset)[$modulo](1.0);
            if (start < 0) {
              start = start + 1.0;
            }
            if (end < 0) {
              end = end + 1.0;
            }
            if (inverted) {
              let swap = end;
              end = start;
              start = swap;
            }
            if (end >= start) {
              this.effectPath = trim_path.trimPath(path, start, end, false, isSequential);
            } else {
              this.effectPath = trim_path.trimPath(path, end, start, true, isSequential);
            }
          } else {
            this.effectPath = path;
          }
        }
        path = dart.nullCheck(this.effectPath);
      }
      canvas.drawPath(path, this[_paint]);
    }
    static getStrokeCap(cap) {
      switch (cap) {
        case C[18] || CT.C18:
          {
            return ui.StrokeCap.butt;
          }
        case C[19] || CT.C19:
          {
            return ui.StrokeCap.round;
          }
        case C[20] || CT.C20:
          {
            return ui.StrokeCap.square;
          }
      }
    }
    static getStrokeJoin(join) {
      switch (join) {
        case C[21] || CT.C21:
          {
            return ui.StrokeJoin.miter;
          }
        case C[22] || CT.C22:
          {
            return ui.StrokeJoin.round;
          }
        case C[23] || CT.C23:
          {
            return ui.StrokeJoin.bevel;
          }
      }
    }
  };
  (flare.FlutterStroke.new = function() {
    this[_$35FlutterStroke$35_paint] = null;
    this[effectPath] = null;
    ;
  }).prototype = flare.FlutterStroke.prototype;
  dart.addTypeTests(flare.FlutterStroke);
  dart.addTypeCaches(flare.FlutterStroke);
  dart.setMethodSignature(flare.FlutterStroke, () => ({
    __proto__: dart.getMethods(flare.FlutterStroke.__proto__),
    initializeGraphics: dart.fnType(dart.void, []),
    markPathEffectsDirty: dart.fnType(dart.void, []),
    onPaintUpdated: dart.fnType(dart.void, [ui.Paint]),
    paint: dart.fnType(dart.void, [actor_color.ActorStroke, ui.Canvas, ui.Path])
  }));
  dart.setStaticMethodSignature(flare.FlutterStroke, () => ['getStrokeCap', 'getStrokeJoin']);
  dart.setGetterSignature(flare.FlutterStroke, () => ({
    __proto__: dart.getGetters(flare.FlutterStroke.__proto__),
    [_paint]: ui.Paint
  }));
  dart.setSetterSignature(flare.FlutterStroke, () => ({
    __proto__: dart.getSetters(flare.FlutterStroke.__proto__),
    [_paint]: ui.Paint
  }));
  dart.setLibraryUri(flare.FlutterStroke, I[0]);
  dart.setFieldSignature(flare.FlutterStroke, () => ({
    __proto__: dart.getFields(flare.FlutterStroke.__proto__),
    [__FlutterStroke__paint]: dart.fieldType(dart.nullable(ui.Paint)),
    effectPath: dart.fieldType(dart.nullable(ui.Path))
  }));
  const ColorStroke_FlutterStroke$36 = class ColorStroke_FlutterStroke extends actor_color.ColorStroke {};
  (ColorStroke_FlutterStroke$36.new = function() {
    flare.FlutterStroke.new.call(this);
    ColorStroke_FlutterStroke$36.__proto__.new.call(this);
  }).prototype = ColorStroke_FlutterStroke$36.prototype;
  dart.applyMixin(ColorStroke_FlutterStroke$36, flare.FlutterStroke);
  flare.FlutterColorStroke = class FlutterColorStroke extends ColorStroke_FlutterStroke$36 {
    get uiColor() {
      let c = this.displayColor;
      let o = (this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]();
      return new ui.Color.fromRGBO((c[$_get](0) * 255.0)[$round](), (c[$_get](1) * 255.0)[$round](), (c[$_get](2) * 255.0)[$round](), c[$_get](3) * o);
    }
    set uiColor(c) {
      this.color = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([c.red / 255, c.green / 255, c.blue / 255, c.opacity]));
    }
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterColorStroke.new();
      instanceNode.copyColorStroke(this, resetArtboard);
      return instanceNode;
    }
    update(dirt) {
      let t0;
      super.update(dirt);
      let parentShape = flare.FlutterActorShape.as(this.parent);
      t0 = this[_paint];
      (() => {
        t0.color = this.uiColor;
        t0.strokeWidth = this.width;
        t0.isAntiAlias = parentShape.antialias;
        t0.blendMode = parentShape.blendMode;
        return t0;
      })();
      this.onPaintUpdated(this[_paint]);
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterColorStroke.new();
    }
  };
  (flare.FlutterColorStroke.new = function() {
    flare.FlutterColorStroke.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterColorStroke.prototype;
  dart.addTypeTests(flare.FlutterColorStroke);
  dart.addTypeCaches(flare.FlutterColorStroke);
  dart.setMethodSignature(flare.FlutterColorStroke, () => ({
    __proto__: dart.getMethods(flare.FlutterColorStroke.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(flare.FlutterColorStroke, () => ({
    __proto__: dart.getGetters(flare.FlutterColorStroke.__proto__),
    uiColor: ui.Color
  }));
  dart.setSetterSignature(flare.FlutterColorStroke, () => ({
    __proto__: dart.getSetters(flare.FlutterColorStroke.__proto__),
    uiColor: ui.Color
  }));
  dart.setLibraryUri(flare.FlutterColorStroke, I[0]);
  const GradientFill_FlutterFill$36 = class GradientFill_FlutterFill extends actor_color.GradientFill {};
  (GradientFill_FlutterFill$36.new = function() {
    flare.FlutterFill.new.call(this);
    GradientFill_FlutterFill$36.__proto__.new.call(this);
  }).prototype = GradientFill_FlutterFill$36.prototype;
  dart.applyMixin(GradientFill_FlutterFill$36, flare.FlutterFill);
  flare.FlutterGradientFill = class FlutterGradientFill extends GradientFill_FlutterFill$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterGradientFill.new();
      instanceNode.copyGradientFill(this, resetArtboard);
      return instanceNode;
    }
    update(dirt) {
      let t0;
      super.update(dirt);
      let colors = T.JSArrayOfColor().of([]);
      let stops = T.JSArrayOfdouble().of([]);
      let numStops = (this.colorStops[$length] / 5)[$round]();
      let idx = 0;
      for (let i = 0; i < numStops; i = i + 1) {
        let o = this.colorStops[$_get](idx + 3)[$clamp](0.0, 1.0)[$toDouble]();
        let color = new ui.Color.fromRGBO((this.colorStops[$_get](idx) * 255.0)[$round](), (this.colorStops[$_get](idx + 1) * 255.0)[$round](), (this.colorStops[$_get](idx + 2) * 255.0)[$round](), o);
        colors[$add](color);
        stops[$add](this.colorStops[$_get](idx + 4));
        idx = idx + 5;
      }
      let paintColor = null;
      if (this.artboard.overrideColor == null) {
        paintColor = colors$.Colors.white.withOpacity((this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]());
      } else {
        let overrideColor = dart.nullCheck(this.artboard.overrideColor);
        let o = (overrideColor[$_get](3) * this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]();
        paintColor = new ui.Color.fromRGBO((overrideColor[$_get](0) * 255.0)[$round](), (overrideColor[$_get](1) * 255.0)[$round](), (overrideColor[$_get](2) * 255.0)[$round](), o);
      }
      let parentShape = flare.FlutterActorShape.as(this.parent);
      t0 = this[_paint];
      (() => {
        t0.color = paintColor;
        t0.isAntiAlias = parentShape.antialias;
        t0.blendMode = parentShape.blendMode;
        t0.shader = ui.Gradient.linear(new ui.Offset.new(this.renderStart._get(0), this.renderStart._get(1)), new ui.Offset.new(this.renderEnd._get(0), this.renderEnd._get(1)), colors, stops);
        return t0;
      })();
      this.onPaintUpdated(this[_paint]);
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterGradientFill.new();
    }
  };
  (flare.FlutterGradientFill.new = function() {
    flare.FlutterGradientFill.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterGradientFill.prototype;
  dart.addTypeTests(flare.FlutterGradientFill);
  dart.addTypeCaches(flare.FlutterGradientFill);
  dart.setMethodSignature(flare.FlutterGradientFill, () => ({
    __proto__: dart.getMethods(flare.FlutterGradientFill.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(flare.FlutterGradientFill, I[0]);
  const GradientStroke_FlutterStroke$36 = class GradientStroke_FlutterStroke extends actor_color.GradientStroke {};
  (GradientStroke_FlutterStroke$36.new = function() {
    flare.FlutterStroke.new.call(this);
    GradientStroke_FlutterStroke$36.__proto__.new.call(this);
  }).prototype = GradientStroke_FlutterStroke$36.prototype;
  dart.applyMixin(GradientStroke_FlutterStroke$36, flare.FlutterStroke);
  flare.FlutterGradientStroke = class FlutterGradientStroke extends GradientStroke_FlutterStroke$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterGradientStroke.new();
      instanceNode.copyGradientStroke(this, resetArtboard);
      return instanceNode;
    }
    update(dirt) {
      let t0;
      super.update(dirt);
      let colors = T.JSArrayOfColor().of([]);
      let stops = T.JSArrayOfdouble().of([]);
      let numStops = (this.colorStops[$length] / 5)[$round]();
      let idx = 0;
      for (let i = 0; i < numStops; i = i + 1) {
        let o = this.colorStops[$_get](idx + 3)[$clamp](0.0, 1.0)[$toDouble]();
        let color = new ui.Color.fromRGBO((this.colorStops[$_get](idx) * 255.0)[$round](), (this.colorStops[$_get](idx + 1) * 255.0)[$round](), (this.colorStops[$_get](idx + 2) * 255.0)[$round](), o);
        colors[$add](color);
        stops[$add](this.colorStops[$_get](idx + 4));
        idx = idx + 5;
      }
      let paintColor = null;
      if (this.artboard.overrideColor == null) {
        paintColor = colors$.Colors.white.withOpacity((this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]());
      } else {
        let overrideColor = dart.nullCheck(this.artboard.overrideColor);
        let o = (overrideColor[$_get](3) * this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]();
        paintColor = new ui.Color.fromRGBO((overrideColor[$_get](0) * 255.0)[$round](), (overrideColor[$_get](1) * 255.0)[$round](), (overrideColor[$_get](2) * 255.0)[$round](), o);
      }
      let parentShape = flare.FlutterActorShape.as(this.parent);
      t0 = this[_paint];
      (() => {
        t0.color = paintColor;
        t0.isAntiAlias = parentShape.antialias;
        t0.blendMode = parentShape.blendMode;
        t0.strokeWidth = this.width;
        t0.shader = ui.Gradient.linear(new ui.Offset.new(this.renderStart._get(0), this.renderStart._get(1)), new ui.Offset.new(this.renderEnd._get(0), this.renderEnd._get(1)), colors, stops);
        return t0;
      })();
      this.onPaintUpdated(this[_paint]);
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterGradientStroke.new();
    }
  };
  (flare.FlutterGradientStroke.new = function() {
    flare.FlutterGradientStroke.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterGradientStroke.prototype;
  dart.addTypeTests(flare.FlutterGradientStroke);
  dart.addTypeCaches(flare.FlutterGradientStroke);
  dart.setMethodSignature(flare.FlutterGradientStroke, () => ({
    __proto__: dart.getMethods(flare.FlutterGradientStroke.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(flare.FlutterGradientStroke, I[0]);
  flare.FlutterPath = class FlutterPath extends core.Object {};
  (flare.FlutterPath.new = function() {
    ;
  }).prototype = flare.FlutterPath.prototype;
  dart.addTypeTests(flare.FlutterPath);
  dart.addTypeCaches(flare.FlutterPath);
  dart.setLibraryUri(flare.FlutterPath, I[0]);
  const RadialGradientFill_FlutterFill$36 = class RadialGradientFill_FlutterFill extends actor_color.RadialGradientFill {};
  (RadialGradientFill_FlutterFill$36.new = function() {
    flare.FlutterFill.new.call(this);
    RadialGradientFill_FlutterFill$36.__proto__.new.call(this);
  }).prototype = RadialGradientFill_FlutterFill$36.prototype;
  dart.applyMixin(RadialGradientFill_FlutterFill$36, flare.FlutterFill);
  flare.FlutterRadialFill = class FlutterRadialFill extends RadialGradientFill_FlutterFill$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterRadialFill.new();
      instanceNode.copyRadialFill(this, resetArtboard);
      return instanceNode;
    }
    update(dirt) {
      let t0;
      super.update(dirt);
      let radius = vec2d.Vec2D.distance(this.renderStart, this.renderEnd);
      let colors = T.JSArrayOfColor().of([]);
      let stops = T.JSArrayOfdouble().of([]);
      let numStops = (this.colorStops[$length] / 5)[$round]();
      let idx = 0;
      for (let i = 0; i < numStops; i = i + 1) {
        let o = this.colorStops[$_get](idx + 3)[$clamp](0.0, 1.0)[$toDouble]();
        let color = new ui.Color.fromRGBO((this.colorStops[$_get](idx) * 255.0)[$round](), (this.colorStops[$_get](idx + 1) * 255.0)[$round](), (this.colorStops[$_get](idx + 2) * 255.0)[$round](), o);
        colors[$add](color);
        stops[$add](this.colorStops[$_get](idx + 4));
        idx = idx + 5;
      }
      let radial = ui.Gradient.radial(new ui.Offset.new(this.renderStart._get(0), this.renderStart._get(1)), radius, colors, stops, ui.TileMode.clamp);
      let paintColor = null;
      if (this.artboard.overrideColor == null) {
        paintColor = colors$.Colors.white.withOpacity((this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]());
      } else {
        let overrideColor = dart.nullCheck(this.artboard.overrideColor);
        let o = (overrideColor[$_get](3) * this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]();
        paintColor = new ui.Color.fromRGBO((overrideColor[$_get](0) * 255.0)[$round](), (overrideColor[$_get](1) * 255.0)[$round](), (overrideColor[$_get](2) * 255.0)[$round](), o);
      }
      let parentShape = flare.FlutterActorShape.as(this.parent);
      t0 = this[_paint];
      (() => {
        t0.color = paintColor;
        t0.isAntiAlias = parentShape.antialias;
        t0.blendMode = parentShape.blendMode;
        t0.shader = radial;
        return t0;
      })();
      this.onPaintUpdated(this[_paint]);
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterRadialFill.new();
    }
  };
  (flare.FlutterRadialFill.new = function() {
    flare.FlutterRadialFill.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterRadialFill.prototype;
  dart.addTypeTests(flare.FlutterRadialFill);
  dart.addTypeCaches(flare.FlutterRadialFill);
  dart.setMethodSignature(flare.FlutterRadialFill, () => ({
    __proto__: dart.getMethods(flare.FlutterRadialFill.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(flare.FlutterRadialFill, I[0]);
  const RadialGradientStroke_FlutterStroke$36 = class RadialGradientStroke_FlutterStroke extends actor_color.RadialGradientStroke {};
  (RadialGradientStroke_FlutterStroke$36.new = function() {
    flare.FlutterStroke.new.call(this);
    RadialGradientStroke_FlutterStroke$36.__proto__.new.call(this);
  }).prototype = RadialGradientStroke_FlutterStroke$36.prototype;
  dart.applyMixin(RadialGradientStroke_FlutterStroke$36, flare.FlutterStroke);
  flare.FlutterRadialStroke = class FlutterRadialStroke extends RadialGradientStroke_FlutterStroke$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterRadialStroke.new();
      instanceNode.copyRadialStroke(this, resetArtboard);
      return instanceNode;
    }
    update(dirt) {
      let t0;
      super.update(dirt);
      let radius = vec2d.Vec2D.distance(this.renderStart, this.renderEnd);
      let colors = T.JSArrayOfColor().of([]);
      let stops = T.JSArrayOfdouble().of([]);
      let numStops = (this.colorStops[$length] / 5)[$round]();
      let idx = 0;
      for (let i = 0; i < numStops; i = i + 1) {
        let o = this.colorStops[$_get](idx + 3)[$clamp](0.0, 1.0)[$toDouble]();
        let color = new ui.Color.fromRGBO((this.colorStops[$_get](idx) * 255.0)[$round](), (this.colorStops[$_get](idx + 1) * 255.0)[$round](), (this.colorStops[$_get](idx + 2) * 255.0)[$round](), o);
        colors[$add](color);
        stops[$add](this.colorStops[$_get](idx + 4));
        idx = idx + 5;
      }
      let paintColor = null;
      if (this.artboard.overrideColor == null) {
        paintColor = colors$.Colors.white.withOpacity((this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]());
      } else {
        let overrideColor = dart.nullCheck(this.artboard.overrideColor);
        let o = (overrideColor[$_get](3) * this.artboard.modulateOpacity * this.opacity * this.shape.renderOpacity)[$clamp](0.0, 1.0)[$toDouble]();
        paintColor = new ui.Color.fromRGBO((overrideColor[$_get](0) * 255.0)[$round](), (overrideColor[$_get](1) * 255.0)[$round](), (overrideColor[$_get](2) * 255.0)[$round](), o);
      }
      let parentShape = flare.FlutterActorShape.as(this.parent);
      t0 = this[_paint];
      (() => {
        t0.color = paintColor;
        t0.strokeWidth = this.width;
        t0.isAntiAlias = parentShape.antialias;
        t0.blendMode = parentShape.blendMode;
        t0.shader = ui.Gradient.radial(new ui.Offset.new(this.renderStart._get(0), this.renderStart._get(1)), radius, colors, stops, ui.TileMode.clamp);
        return t0;
      })();
      this.onPaintUpdated(this[_paint]);
    }
    static ['_#new#tearOff']() {
      return new flare.FlutterRadialStroke.new();
    }
  };
  (flare.FlutterRadialStroke.new = function() {
    flare.FlutterRadialStroke.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterRadialStroke.prototype;
  dart.addTypeTests(flare.FlutterRadialStroke);
  dart.addTypeCaches(flare.FlutterRadialStroke);
  dart.setMethodSignature(flare.FlutterRadialStroke, () => ({
    __proto__: dart.getMethods(flare.FlutterRadialStroke.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(flare.FlutterRadialStroke, I[0]);
  flare._blurFilter = function _blurFilter(x, y) {
    let bx = x[$abs]() < 0.1 ? 0.0 : x;
    let by = y[$abs]() < 0.1 ? 0.0 : y;
    return bx === 0 && by === 0 ? null : ui.ImageFilter.blur({sigmaX: bx, sigmaY: by});
  };
  dart.trackLibraries("packages/flare_flutter/flare.dart", {
    "package:flare_flutter/flare.dart": flare
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flare_flutter/flare.dart.lib.js"}');
  // Exports:
  return {
    flare: flare
  };
}));

//# sourceMappingURL=flare.dart.lib.js.map
