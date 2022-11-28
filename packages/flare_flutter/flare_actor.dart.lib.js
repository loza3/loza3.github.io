define(['dart_sdk', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flare_flutter/provider/asset_flare.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flare_flutter/provider/memory_flare.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flare_flutter/asset_provider.dart', 'packages/flare_flutter/flare_controller.dart', 'packages/flare_flutter/base/math/vec2d.dart', 'packages/flare_flutter/base/math/aabb.dart', 'packages/flare_flutter/base/animation/keyframe.dart', 'packages/flare_flutter/flare.dart', 'packages/flare_flutter/flare_render_box.dart'], (function load__packages__flare_flutter__flare_actor_dart(dart_sdk, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__painting__alignment$46dart, packages__flare_flutter__provider__asset_flare$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flare_flutter__provider__memory_flare$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__layer$46dart, packages__flare_flutter__asset_provider$46dart, packages__flare_flutter__flare_controller$46dart, packages__flare_flutter__base__math__vec2d$46dart, packages__flare_flutter__base__math__aabb$46dart, packages__flare_flutter__base__animation__keyframe$46dart, packages__flare_flutter__flare$46dart, packages__flare_flutter__flare_render_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const asset_flare = packages__flare_flutter__provider__asset_flare$46dart.provider__asset_flare;
  const asset_bundle = packages__flutter__src__services__text_editing_delta$46dart.src__services__asset_bundle;
  const memory_flare = packages__flare_flutter__provider__memory_flare$46dart.provider__memory_flare;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const asset_provider = packages__flare_flutter__asset_provider$46dart.asset_provider;
  const flare_controller = packages__flare_flutter__flare_controller$46dart.flare_controller;
  const mat2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__mat2d;
  const aabb = packages__flare_flutter__base__math__aabb$46dart.base__math__aabb;
  const actor_node = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_node;
  const actor_drawable = packages__flare_flutter__base__animation__keyframe$46dart.base__actor_drawable;
  const actor_animation = packages__flare_flutter__base__animation__keyframe$46dart.base__animation__actor_animation;
  const flare = packages__flare_flutter__flare$46dart.flare;
  const flare_render_box = packages__flare_flutter__flare_render_box$46dart.flare_render_box;
  var flare_actor = Object.create(dart.library);
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $add = dartx.add;
  var $removeRange = dartx.removeRange;
  var $removeAt = dartx.removeAt;
  var $remove = dartx.remove;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfFlareAnimationLayer: () => (T.JSArrayOfFlareAnimationLayer = dart.constFn(_interceptors.JSArray$(flare_actor.FlareAnimationLayer)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "contain",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlareActor",
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flare_flutter-3.0.2/lib/flare_actor.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlareActor",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flare_flutter-3.0.2/lib/flare_actor.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlareActor",
        [_Location_column]: 3,
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flare_flutter-3.0.2/lib/flare_actor.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlareActor",
        [_Location_column]: 3,
        [_Location_line]: 134,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flare_flutter-3.0.2/lib/flare_actor.dart"
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = ["package:flare_flutter/flare_actor.dart"];
  var filename$ = dart.privateName(flare_actor, "FlareActor.filename");
  var flareProvider$ = dart.privateName(flare_actor, "FlareActor.flareProvider");
  var artboard$ = dart.privateName(flare_actor, "FlareActor.artboard");
  var animation$ = dart.privateName(flare_actor, "FlareActor.animation");
  var snapToEnd$ = dart.privateName(flare_actor, "FlareActor.snapToEnd");
  var fit$ = dart.privateName(flare_actor, "FlareActor.fit");
  var alignment$ = dart.privateName(flare_actor, "FlareActor.alignment");
  var isPaused$ = dart.privateName(flare_actor, "FlareActor.isPaused");
  var shouldClip$ = dart.privateName(flare_actor, "FlareActor.shouldClip");
  var controller$ = dart.privateName(flare_actor, "FlareActor.controller");
  var callback$ = dart.privateName(flare_actor, "FlareActor.callback");
  var color$ = dart.privateName(flare_actor, "FlareActor.color");
  var boundsNode$ = dart.privateName(flare_actor, "FlareActor.boundsNode");
  var sizeFromArtboard$ = dart.privateName(flare_actor, "FlareActor.sizeFromArtboard");
  var antialias$ = dart.privateName(flare_actor, "FlareActor.antialias");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  flare_actor.FlareActor = class FlareActor extends framework.LeafRenderObjectWidget {
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get flareProvider() {
      return this[flareProvider$];
    }
    set flareProvider(value) {
      super.flareProvider = value;
    }
    get artboard() {
      return this[artboard$];
    }
    set artboard(value) {
      super.artboard = value;
    }
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    get snapToEnd() {
      return this[snapToEnd$];
    }
    set snapToEnd(value) {
      super.snapToEnd = value;
    }
    get fit() {
      return this[fit$];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get isPaused() {
      return this[isPaused$];
    }
    set isPaused(value) {
      super.isPaused = value;
    }
    get shouldClip() {
      return this[shouldClip$];
    }
    set shouldClip(value) {
      super.shouldClip = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get callback() {
      return this[callback$];
    }
    set callback(value) {
      super.callback = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get boundsNode() {
      return this[boundsNode$];
    }
    set boundsNode(value) {
      super.boundsNode = value;
    }
    get sizeFromArtboard() {
      return this[sizeFromArtboard$];
    }
    set sizeFromArtboard(value) {
      super.sizeFromArtboard = value;
    }
    get antialias() {
      return this[antialias$];
    }
    set antialias(value) {
      super.antialias = value;
    }
    static ['_#new#tearOff'](filename, opts) {
      let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let fit = opts && 'fit' in opts ? opts.fit : C[0] || CT.C0;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
      let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
      let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
      let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
      let artboard = opts && 'artboard' in opts ? opts.artboard : null;
      let antialias = opts && 'antialias' in opts ? opts.antialias : true;
      return new flare_actor.FlareActor.new(filename, {boundsNode: boundsNode, animation: animation, fit: fit, alignment: alignment, isPaused: isPaused, snapToEnd: snapToEnd, controller: controller, callback: callback, color: color, shouldClip: shouldClip, sizeFromArtboard: sizeFromArtboard, artboard: artboard, antialias: antialias, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    static ['_#asset#tearOff'](flareProvider, opts) {
      let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let fit = opts && 'fit' in opts ? opts.fit : C[0] || CT.C0;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
      let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
      let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
      let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
      let artboard = opts && 'artboard' in opts ? opts.artboard : null;
      let antialias = opts && 'antialias' in opts ? opts.antialias : true;
      return new flare_actor.FlareActor.asset(flareProvider, {boundsNode: boundsNode, animation: animation, fit: fit, alignment: alignment, isPaused: isPaused, snapToEnd: snapToEnd, controller: controller, callback: callback, color: color, shouldClip: shouldClip, sizeFromArtboard: sizeFromArtboard, artboard: artboard, antialias: antialias, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    static ['_#bundle#tearOff'](name, opts) {
      let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let fit = opts && 'fit' in opts ? opts.fit : C[0] || CT.C0;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
      let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
      let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
      let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
      let artboard = opts && 'artboard' in opts ? opts.artboard : null;
      let antialias = opts && 'antialias' in opts ? opts.antialias : true;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      return new flare_actor.FlareActor.bundle(name, {boundsNode: boundsNode, animation: animation, fit: fit, alignment: alignment, isPaused: isPaused, snapToEnd: snapToEnd, controller: controller, callback: callback, color: color, shouldClip: shouldClip, sizeFromArtboard: sizeFromArtboard, artboard: artboard, antialias: antialias, bundle: bundle, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    static ['_#memory#tearOff'](bytes, opts) {
      let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let fit = opts && 'fit' in opts ? opts.fit : C[0] || CT.C0;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
      let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
      let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
      let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
      let artboard = opts && 'artboard' in opts ? opts.artboard : null;
      let antialias = opts && 'antialias' in opts ? opts.antialias : true;
      return new flare_actor.FlareActor.memory(bytes, {boundsNode: boundsNode, animation: animation, fit: fit, alignment: alignment, isPaused: isPaused, snapToEnd: snapToEnd, controller: controller, callback: callback, color: color, shouldClip: shouldClip, sizeFromArtboard: sizeFromArtboard, artboard: artboard, antialias: antialias, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    createRenderObject(context) {
      let t1, t0;
      t0 = new flare_actor.FlareActorRenderObject.new();
      return (() => {
        t0.assetProvider = (t1 = this.flareProvider, t1 == null ? new asset_flare.AssetFlare.new({bundle: asset_bundle.rootBundle, name: dart.nullCheck(this.filename)}) : t1);
        t0.fit = this.fit;
        t0.alignment = this.alignment;
        t0.animationName = this.animation;
        t0.snapToEnd = this.snapToEnd;
        t0.isPaused = this.isPaused;
        t0.controller = this.controller;
        t0.completed = this.callback;
        t0.color = this.color;
        t0.shouldClip = this.shouldClip;
        t0.boundsNodeName = this.boundsNode;
        t0.useIntrinsicSize = this.sizeFromArtboard;
        t0.artboardName = this.artboard;
        t0.useAntialias = this.antialias;
        return t0;
      })();
    }
    didUnmountRenderObject(renderObject) {
      flare_actor.FlareActorRenderObject.as(renderObject);
      renderObject.dispose();
    }
    updateRenderObject(context, renderObject) {
      let t1, t0;
      flare_actor.FlareActorRenderObject.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.assetProvider = (t1 = this.flareProvider, t1 == null ? new asset_flare.AssetFlare.new({bundle: asset_bundle.rootBundle, name: dart.nullCheck(this.filename)}) : t1);
        t0.fit = this.fit;
        t0.alignment = this.alignment;
        t0.animationName = this.animation;
        t0.snapToEnd = this.snapToEnd;
        t0.isPaused = this.isPaused;
        t0.color = this.color;
        t0.shouldClip = this.shouldClip;
        t0.boundsNodeName = this.boundsNode;
        t0.useIntrinsicSize = this.sizeFromArtboard;
        t0.artboardName = this.artboard;
        t0.useAntialias = this.antialias;
        return t0;
      })();
    }
  };
  (flare_actor.FlareActor.new = function(filename, opts) {
    let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let fit = opts && 'fit' in opts ? opts.fit : C[0] || CT.C0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
    let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
    let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let callback = opts && 'callback' in opts ? opts.callback : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
    let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
    let artboard = opts && 'artboard' in opts ? opts.artboard : null;
    let antialias = opts && 'antialias' in opts ? opts.antialias : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[filename$] = filename;
    this[boundsNode$] = boundsNode;
    this[animation$] = animation;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[isPaused$] = isPaused;
    this[snapToEnd$] = snapToEnd;
    this[controller$] = controller;
    this[callback$] = callback;
    this[color$] = color;
    this[shouldClip$] = shouldClip;
    this[sizeFromArtboard$] = sizeFromArtboard;
    this[artboard$] = artboard;
    this[antialias$] = antialias;
    this[flareProvider$] = null;
    flare_actor.FlareActor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flare_actor.FlareActor.prototype;
  (flare_actor.FlareActor.asset = function(flareProvider, opts) {
    let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let fit = opts && 'fit' in opts ? opts.fit : C[0] || CT.C0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
    let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
    let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let callback = opts && 'callback' in opts ? opts.callback : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
    let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
    let artboard = opts && 'artboard' in opts ? opts.artboard : null;
    let antialias = opts && 'antialias' in opts ? opts.antialias : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[flareProvider$] = flareProvider;
    this[boundsNode$] = boundsNode;
    this[animation$] = animation;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[isPaused$] = isPaused;
    this[snapToEnd$] = snapToEnd;
    this[controller$] = controller;
    this[callback$] = callback;
    this[color$] = color;
    this[shouldClip$] = shouldClip;
    this[sizeFromArtboard$] = sizeFromArtboard;
    this[artboard$] = artboard;
    this[antialias$] = antialias;
    this[filename$] = null;
    flare_actor.FlareActor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flare_actor.FlareActor.prototype;
  (flare_actor.FlareActor.bundle = function(name, opts) {
    let t0;
    let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let fit = opts && 'fit' in opts ? opts.fit : C[0] || CT.C0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
    let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
    let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let callback = opts && 'callback' in opts ? opts.callback : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
    let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
    let artboard = opts && 'artboard' in opts ? opts.artboard : null;
    let antialias = opts && 'antialias' in opts ? opts.antialias : true;
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[boundsNode$] = boundsNode;
    this[animation$] = animation;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[isPaused$] = isPaused;
    this[snapToEnd$] = snapToEnd;
    this[controller$] = controller;
    this[callback$] = callback;
    this[color$] = color;
    this[shouldClip$] = shouldClip;
    this[sizeFromArtboard$] = sizeFromArtboard;
    this[artboard$] = artboard;
    this[antialias$] = antialias;
    this[filename$] = null;
    this[flareProvider$] = new asset_flare.AssetFlare.new({bundle: (t0 = bundle, t0 == null ? asset_bundle.rootBundle : t0), name: name});
    flare_actor.FlareActor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flare_actor.FlareActor.prototype;
  (flare_actor.FlareActor.memory = function(bytes, opts) {
    let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let fit = opts && 'fit' in opts ? opts.fit : C[0] || CT.C0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
    let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
    let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let callback = opts && 'callback' in opts ? opts.callback : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
    let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
    let artboard = opts && 'artboard' in opts ? opts.artboard : null;
    let antialias = opts && 'antialias' in opts ? opts.antialias : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[boundsNode$] = boundsNode;
    this[animation$] = animation;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[isPaused$] = isPaused;
    this[snapToEnd$] = snapToEnd;
    this[controller$] = controller;
    this[callback$] = callback;
    this[color$] = color;
    this[shouldClip$] = shouldClip;
    this[sizeFromArtboard$] = sizeFromArtboard;
    this[artboard$] = artboard;
    this[antialias$] = antialias;
    this[filename$] = null;
    this[flareProvider$] = new memory_flare.MemoryFlare.new({bytes: bytes});
    flare_actor.FlareActor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flare_actor.FlareActor.prototype;
  dart.addTypeTests(flare_actor.FlareActor);
  dart.addTypeCaches(flare_actor.FlareActor);
  dart.setMethodSignature(flare_actor.FlareActor, () => ({
    __proto__: dart.getMethods(flare_actor.FlareActor.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(flare_actor.FlareActor, I[0]);
  dart.setFieldSignature(flare_actor.FlareActor, () => ({
    __proto__: dart.getFields(flare_actor.FlareActor.__proto__),
    filename: dart.finalFieldType(dart.nullable(core.String)),
    flareProvider: dart.finalFieldType(dart.nullable(asset_provider.AssetProvider)),
    artboard: dart.finalFieldType(dart.nullable(core.String)),
    animation: dart.finalFieldType(dart.nullable(core.String)),
    snapToEnd: dart.finalFieldType(core.bool),
    fit: dart.finalFieldType(box_fit.BoxFit),
    alignment: dart.finalFieldType(alignment.Alignment),
    isPaused: dart.finalFieldType(core.bool),
    shouldClip: dart.finalFieldType(core.bool),
    controller: dart.finalFieldType(dart.nullable(flare_controller.FlareController)),
    callback: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    boundsNode: dart.finalFieldType(dart.nullable(core.String)),
    sizeFromArtboard: dart.finalFieldType(core.bool),
    antialias: dart.finalFieldType(core.bool)
  }));
  var snapToEnd = dart.privateName(flare_actor, "FlareActorRenderObject.snapToEnd");
  var shouldClip = dart.privateName(flare_actor, "FlareActorRenderObject.shouldClip");
  var _lastControllerViewTransform = dart.privateName(flare_actor, "_lastControllerViewTransform");
  var _assetProvider = dart.privateName(flare_actor, "_assetProvider");
  var _artboardName = dart.privateName(flare_actor, "_artboardName");
  var _animationName = dart.privateName(flare_actor, "_animationName");
  var _boundsNodeName = dart.privateName(flare_actor, "_boundsNodeName");
  var _controller = dart.privateName(flare_actor, "_controller");
  var _completedCallback = dart.privateName(flare_actor, "_completedCallback");
  var _isPaused = dart.privateName(flare_actor, "_isPaused");
  var _useAntialias = dart.privateName(flare_actor, "_useAntialias");
  var _actor = dart.privateName(flare_actor, "_actor");
  var _animationLayers = dart.privateName(flare_actor, "_animationLayers");
  var __FlareActorRenderObject__artboard = dart.privateName(flare_actor, "_#FlareActorRenderObject#_artboard");
  var __FlareActorRenderObject__setupAABB = dart.privateName(flare_actor, "_#FlareActorRenderObject#_setupAABB");
  var _color = dart.privateName(flare_actor, "_color");
  var _artboard = dart.privateName(flare_actor, "_artboard");
  var _setupAABB = dart.privateName(flare_actor, "_setupAABB");
  var _updateAnimation = dart.privateName(flare_actor, "_updateAnimation");
  var _instanceArtboard = dart.privateName(flare_actor, "_instanceArtboard");
  flare_actor.FlareActorRenderObject = class FlareActorRenderObject extends flare_render_box.FlareRenderBox {
    get snapToEnd() {
      return this[snapToEnd];
    }
    set snapToEnd(value) {
      this[snapToEnd] = value;
    }
    get shouldClip() {
      return this[shouldClip];
    }
    set shouldClip(value) {
      this[shouldClip] = value;
    }
    set [_artboard](library$32package$58flare_flutter$47flare_actor$46dart$58$58_artboard$35param) {
      this[__FlareActorRenderObject__artboard] = library$32package$58flare_flutter$47flare_actor$46dart$58$58_artboard$35param;
    }
    get [_artboard]() {
      let t0;
      t0 = this[__FlareActorRenderObject__artboard];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_artboard")) : t0;
    }
    get [_setupAABB]() {
      let t0;
      t0 = this[__FlareActorRenderObject__setupAABB];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_setupAABB")) : t0;
    }
    set [_setupAABB](library$32package$58flare_flutter$47flare_actor$46dart$58$58_setupAABB$35param) {
      this[__FlareActorRenderObject__setupAABB] = library$32package$58flare_flutter$47flare_actor$46dart$58$58_setupAABB$35param;
    }
    get aabb() {
      return this[_actor] == null ? new aabb.AABB.new() : this[_setupAABB];
    }
    get animationName() {
      return this[_animationName];
    }
    set animationName(value) {
      if (value != this[_animationName]) {
        this[_animationName] = value;
        this[_updateAnimation]();
      }
    }
    get artboardName() {
      return this[_artboardName];
    }
    set artboardName(name) {
      if (this[_artboardName] == name) {
        return;
      }
      this[_artboardName] = name;
      this[_instanceArtboard]();
    }
    get assetProvider() {
      return this[_assetProvider];
    }
    set assetProvider(value) {
      if (dart.equals(value, this[_assetProvider])) {
        return;
      }
      this[_assetProvider] = value;
      this.markNeedsPaint();
      this[_animationLayers][$clear]();
      this.load();
    }
    get boundsNodeName() {
      return this[_boundsNodeName];
    }
    set boundsNodeName(value) {
      if (this[_boundsNodeName] == value) {
        return;
      }
      this[_boundsNodeName] = value;
      this.updateBounds();
    }
    get color() {
      return this[_color];
    }
    set color(value) {
      if (!dart.equals(value, this[_color])) {
        this[_color] = value;
        if (this[_actor] != null) {
          this[_artboard].overrideColor = value == null ? null : _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([value.red / 255.0, value.green / 255.0, value.blue / 255.0, value.opacity]));
        }
        this.markNeedsPaint();
      }
    }
    get completed() {
      return this[_completedCallback];
    }
    set completed(value) {
      if (!dart.equals(this[_completedCallback], value)) {
        this[_completedCallback] = value;
      }
    }
    get controller() {
      return this[_controller];
    }
    set controller(c) {
      let t0, t0$;
      if (!dart.equals(this[_controller], c)) {
        mat2d.Mat2D.copy(this[_lastControllerViewTransform], new mat2d.Mat2D.new());
        t0 = this[_controller];
        t0 == null ? null : t0.isActive.removeListener(dart.bind(this, 'onControllerActiveChange'));
        this[_controller] = c;
        t0$ = this[_controller];
        t0$ == null ? null : t0$.isActive.addListener(dart.bind(this, 'onControllerActiveChange'));
        if (this[_controller] != null && this[_actor] != null) {
          dart.nullCheck(this[_controller]).initialize(this[_artboard]);
        }
      }
    }
    get isPaused() {
      return this[_isPaused];
    }
    set isPaused(value) {
      if (this[_isPaused] === value) {
        return;
      }
      this[_isPaused] = value;
      this.updatePlayState();
    }
    get isPlaying() {
      let t0, t0$;
      return !this[_isPaused] && (dart.test((t0$ = (t0 = this[_controller], t0 == null ? null : t0.isActive.value), t0$ == null ? false : t0$)) || this[_animationLayers][$isNotEmpty]);
    }
    get useAntialias() {
      return this[_useAntialias];
    }
    set useAntialias(value) {
      if (value !== this[_useAntialias]) {
        this[_useAntialias] = value;
        if (this[_actor] != null) {
          this[_artboard].antialias = this[_useAntialias];
        }
        this.markNeedsPaint();
      }
    }
    advance(elapsedSeconds) {
      let t0, t0$, t0$0, t0$1;
      if (this.isPlaying) {
        let lastFullyMixed = -1;
        let lastMix = 0.0;
        let completed = T.JSArrayOfFlareAnimationLayer().of([]);
        for (let i = 0; i < this[_animationLayers][$length]; i = i + 1) {
          let layer = this[_animationLayers][$_get](i);
          if (this.snapToEnd && !layer.animation.isLooping) {
            layer.mix = 1.0;
            layer.time = layer.duration;
          } else {
            t0 = layer;
            t0.mix = t0.mix + elapsedSeconds;
            t0$ = layer;
            t0$.time = t0$.time + elapsedSeconds;
          }
          lastMix = layer.mixSeconds === 0.0 ? 1.0 : math.min(core.double, 1.0, layer.mix / layer.mixSeconds);
          if (layer.animation.isLooping) {
            t0$0 = layer;
            t0$0.time = t0$0.time[$modulo](layer.animation.duration);
          }
          layer.animation.apply(layer.time, this[_artboard], lastMix);
          if (lastMix === 1.0) {
            lastFullyMixed = i;
          }
          if (layer.time > layer.animation.duration) {
            completed[$add](layer);
          }
        }
        if (lastFullyMixed !== -1) {
          this[_animationLayers][$removeRange](0, lastFullyMixed);
        }
        if (this.animationName == null && this[_animationLayers][$length] === 1 && lastMix === 1.0) {
          this[_animationLayers][$removeAt](0);
        }
        for (let animation of completed) {
          this[_animationLayers][$remove](animation);
          if (this[_completedCallback] != null) {
            dart.nullCheck(this[_completedCallback])(animation.name);
          }
        }
      }
      if (this[_actor] != null && this[_controller] != null && !dart.nullCheck(this[_controller]).advance(this[_artboard], elapsedSeconds)) {
        t0$1 = this[_controller];
        t0$1 == null ? null : t0$1.isActive.value = false;
      }
      if (this[_actor] != null) {
        this[_artboard].advance(elapsedSeconds);
      }
    }
    coldLoad() {
      return async.async(dart.void, (function* coldLoad() {
        this[_actor] = (yield this.loadFlare(dart.nullCheck(this[_assetProvider])));
        this[_instanceArtboard]();
      }).bind(this));
    }
    onControllerActiveChange() {
      this.updatePlayState();
    }
    onUnload() {
      this[_animationLayers][$clear]();
    }
    paintFlare(canvas, viewTransform) {
      let t0;
      if (this[_actor] == null) {
        return;
      }
      if (!mat2d.Mat2D.areEqual(this[_lastControllerViewTransform], viewTransform)) {
        mat2d.Mat2D.copy(this[_lastControllerViewTransform], viewTransform);
        t0 = this.controller;
        t0 == null ? null : t0.setViewTransform(viewTransform);
      }
      this[_artboard].draw(canvas);
    }
    prePaint(canvas, offset) {
      if (this.shouldClip) {
        canvas.clipRect(offset['&'](this.size));
      }
    }
    updateBounds() {
      if (this[_actor] != null) {
        let node = null;
        if (this[_boundsNodeName] != null && actor_drawable.ActorDrawable.is(node = this[_artboard].getNode(actor_node.ActorNode, dart.nullCheck(this[_boundsNodeName])))) {
          this[_setupAABB] = actor_drawable.ActorDrawable.as(node).computeAABB();
        } else {
          this[_setupAABB] = this[_artboard].artboardAABB();
        }
      }
    }
    warmLoad() {
      let actor = this.getWarmFlare(dart.nullCheck(this[_assetProvider]));
      if (actor == null) {
        return false;
      }
      this[_actor] = actor;
      return this[_instanceArtboard]();
    }
    [_instanceArtboard]() {
      let t0, t0$;
      let sourceArtboard = (t0 = this[_actor], t0 == null ? null : t0.getArtboard(this[_artboardName]));
      if (sourceArtboard == null) {
        return false;
      }
      let artboard = flare.FlutterActorArtboard.as(sourceArtboard.makeInstance());
      artboard.initializeGraphics();
      this[_artboard] = artboard;
      this.intrinsicSize = new ui.Size.new(artboard.width, artboard.height);
      this[_artboard].overrideColor = this[_color] == null ? null : _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([dart.nullCheck(this[_color]).red / 255.0, dart.nullCheck(this[_color]).green / 255.0, dart.nullCheck(this[_color]).blue / 255.0, dart.nullCheck(this[_color]).opacity]));
      this[_artboard].antialias = this[_useAntialias];
      t0$ = this[_controller];
      t0$ == null ? null : t0$.initialize(this[_artboard]);
      this[_animationLayers][$clear]();
      this[_updateAnimation]({onlyWhenMissing: true});
      this.advance(0.0);
      this.updateBounds();
      this.markNeedsPaint();
      return true;
    }
    [_updateAnimation](opts) {
      let t0;
      let onlyWhenMissing = opts && 'onlyWhenMissing' in opts ? opts.onlyWhenMissing : false;
      if (onlyWhenMissing && this[_animationLayers][$isNotEmpty]) {
        return;
      }
      if (this[_animationName] != null && this[_actor] != null) {
        let animation = this[_artboard].getAnimation(dart.nullCheck(this[_animationName]));
        if (animation != null) {
          this[_animationLayers][$add]((t0 = new flare_actor.FlareAnimationLayer.new(dart.nullCheck(this[_animationName]), animation), (() => {
            t0.mix = 1.0;
            t0.mixSeconds = 0.2;
            return t0;
          })()));
          animation.apply(0.0, this[_artboard], 1.0);
          this[_artboard].advance(0.0);
          this.updatePlayState();
        }
      }
    }
    static ['_#new#tearOff']() {
      return new flare_actor.FlareActorRenderObject.new();
    }
  };
  (flare_actor.FlareActorRenderObject.new = function() {
    this[_lastControllerViewTransform] = new mat2d.Mat2D.new();
    this[_assetProvider] = null;
    this[_artboardName] = null;
    this[_animationName] = null;
    this[_boundsNodeName] = null;
    this[_controller] = null;
    this[_completedCallback] = null;
    this[snapToEnd] = false;
    this[_isPaused] = false;
    this[_useAntialias] = true;
    this[_actor] = null;
    this[_animationLayers] = T.JSArrayOfFlareAnimationLayer().of([]);
    this[shouldClip] = true;
    this[__FlareActorRenderObject__artboard] = null;
    this[__FlareActorRenderObject__setupAABB] = null;
    this[_color] = null;
    flare_actor.FlareActorRenderObject.__proto__.new.call(this);
    ;
  }).prototype = flare_actor.FlareActorRenderObject.prototype;
  dart.addTypeTests(flare_actor.FlareActorRenderObject);
  dart.addTypeCaches(flare_actor.FlareActorRenderObject);
  dart.setMethodSignature(flare_actor.FlareActorRenderObject, () => ({
    __proto__: dart.getMethods(flare_actor.FlareActorRenderObject.__proto__),
    advance: dart.fnType(dart.void, [core.double]),
    onControllerActiveChange: dart.fnType(dart.void, []),
    paintFlare: dart.fnType(dart.void, [ui.Canvas, mat2d.Mat2D]),
    updateBounds: dart.fnType(dart.void, []),
    [_instanceArtboard]: dart.fnType(core.bool, []),
    [_updateAnimation]: dart.fnType(dart.void, [], {onlyWhenMissing: core.bool}, {})
  }));
  dart.setGetterSignature(flare_actor.FlareActorRenderObject, () => ({
    __proto__: dart.getGetters(flare_actor.FlareActorRenderObject.__proto__),
    [_artboard]: flare.FlutterActorArtboard,
    [_setupAABB]: aabb.AABB,
    aabb: aabb.AABB,
    animationName: dart.nullable(core.String),
    artboardName: dart.nullable(core.String),
    assetProvider: dart.nullable(asset_provider.AssetProvider),
    boundsNodeName: dart.nullable(core.String),
    color: dart.nullable(ui.Color),
    completed: dart.nullable(dart.fnType(dart.void, [core.String])),
    controller: dart.nullable(flare_controller.FlareController),
    isPaused: core.bool,
    isPlaying: core.bool,
    useAntialias: core.bool
  }));
  dart.setSetterSignature(flare_actor.FlareActorRenderObject, () => ({
    __proto__: dart.getSetters(flare_actor.FlareActorRenderObject.__proto__),
    [_artboard]: flare.FlutterActorArtboard,
    [_setupAABB]: aabb.AABB,
    animationName: dart.nullable(core.String),
    artboardName: dart.nullable(core.String),
    assetProvider: dart.nullable(asset_provider.AssetProvider),
    boundsNodeName: dart.nullable(core.String),
    color: dart.nullable(ui.Color),
    completed: dart.nullable(dart.fnType(dart.void, [core.String])),
    controller: dart.nullable(flare_controller.FlareController),
    isPaused: core.bool,
    useAntialias: core.bool
  }));
  dart.setLibraryUri(flare_actor.FlareActorRenderObject, I[0]);
  dart.setFieldSignature(flare_actor.FlareActorRenderObject, () => ({
    __proto__: dart.getFields(flare_actor.FlareActorRenderObject.__proto__),
    [_lastControllerViewTransform]: dart.finalFieldType(mat2d.Mat2D),
    [_assetProvider]: dart.fieldType(dart.nullable(asset_provider.AssetProvider)),
    [_artboardName]: dart.fieldType(dart.nullable(core.String)),
    [_animationName]: dart.fieldType(dart.nullable(core.String)),
    [_boundsNodeName]: dart.fieldType(dart.nullable(core.String)),
    [_controller]: dart.fieldType(dart.nullable(flare_controller.FlareController)),
    [_completedCallback]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    snapToEnd: dart.fieldType(core.bool),
    [_isPaused]: dart.fieldType(core.bool),
    [_useAntialias]: dart.fieldType(core.bool),
    [_actor]: dart.fieldType(dart.nullable(flare.FlutterActor)),
    [_animationLayers]: dart.finalFieldType(core.List$(flare_actor.FlareAnimationLayer)),
    shouldClip: dart.fieldType(core.bool),
    [__FlareActorRenderObject__artboard]: dart.fieldType(dart.nullable(flare.FlutterActorArtboard)),
    [__FlareActorRenderObject__setupAABB]: dart.fieldType(dart.nullable(aabb.AABB)),
    [_color]: dart.fieldType(dart.nullable(ui.Color))
  }));
  var name$ = dart.privateName(flare_actor, "FlareAnimationLayer.name");
  var animation$0 = dart.privateName(flare_actor, "FlareAnimationLayer.animation");
  var time = dart.privateName(flare_actor, "FlareAnimationLayer.time");
  var mix = dart.privateName(flare_actor, "FlareAnimationLayer.mix");
  var mixSeconds = dart.privateName(flare_actor, "FlareAnimationLayer.mixSeconds");
  flare_actor.FlareAnimationLayer = class FlareAnimationLayer extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get animation() {
      return this[animation$0];
    }
    set animation(value) {
      super.animation = value;
    }
    get time() {
      return this[time];
    }
    set time(value) {
      this[time] = value;
    }
    get mix() {
      return this[mix];
    }
    set mix(value) {
      this[mix] = value;
    }
    get mixSeconds() {
      return this[mixSeconds];
    }
    set mixSeconds(value) {
      this[mixSeconds] = value;
    }
    static ['_#new#tearOff'](name, animation) {
      return new flare_actor.FlareAnimationLayer.new(name, animation);
    }
    get duration() {
      return this.animation.duration;
    }
    get isDone() {
      return this.time >= this.animation.duration;
    }
    apply(artboard) {
      this.animation.apply(this.time, artboard, this.mix);
    }
  };
  (flare_actor.FlareAnimationLayer.new = function(name, animation) {
    this[time] = 0.0;
    this[mix] = 0.0;
    this[mixSeconds] = 0.2;
    this[name$] = name;
    this[animation$0] = animation;
    ;
  }).prototype = flare_actor.FlareAnimationLayer.prototype;
  dart.addTypeTests(flare_actor.FlareAnimationLayer);
  dart.addTypeCaches(flare_actor.FlareAnimationLayer);
  dart.setMethodSignature(flare_actor.FlareAnimationLayer, () => ({
    __proto__: dart.getMethods(flare_actor.FlareAnimationLayer.__proto__),
    apply: dart.fnType(dart.void, [flare.FlutterActorArtboard])
  }));
  dart.setGetterSignature(flare_actor.FlareAnimationLayer, () => ({
    __proto__: dart.getGetters(flare_actor.FlareAnimationLayer.__proto__),
    duration: core.double,
    isDone: core.bool
  }));
  dart.setLibraryUri(flare_actor.FlareAnimationLayer, I[0]);
  dart.setFieldSignature(flare_actor.FlareAnimationLayer, () => ({
    __proto__: dart.getFields(flare_actor.FlareAnimationLayer.__proto__),
    name: dart.finalFieldType(core.String),
    animation: dart.finalFieldType(actor_animation.ActorAnimation),
    time: dart.fieldType(core.double),
    mix: dart.fieldType(core.double),
    mixSeconds: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/flare_flutter/flare_actor.dart", {
    "package:flare_flutter/flare_actor.dart": flare_actor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_actor.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flare_flutter/flare_actor.dart.lib.js"}');
  // Exports:
  return {
    flare_actor: flare_actor
  };
}));

//# sourceMappingURL=flare_actor.dart.lib.js.map
