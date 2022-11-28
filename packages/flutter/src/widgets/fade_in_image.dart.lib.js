define(['dart_sdk', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/image_resolution.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/tween_sequence.dart', 'packages/flutter/src/rendering/stack.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__fade_in_image_dart(dart_sdk, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__image_resolution$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__tween_sequence$46dart, packages__flutter__src__rendering__stack$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const image_resolution = packages__flutter__src__painting__image_resolution$46dart.src__painting__image_resolution;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const image$ = packages__flutter__src__widgets__title$46dart.src__widgets__image;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const implicit_animations = packages__flutter__src__widgets__title$46dart.src__widgets__implicit_animations;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const tween_sequence = packages__flutter__src__animation__tween_sequence$46dart.src__animation__tween_sequence;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var fade_in_image = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    BuildContextAndWidgetAndintN__To_AnimatedFadeOutFadeIn: () => (T.BuildContextAndWidgetAndintN__To_AnimatedFadeOutFadeIn = dart.constFn(dart.fnType(fade_in_image._AnimatedFadeOutFadeIn, [framework.BuildContext, framework.Widget, T.intN(), core.bool])))(),
    AlwaysStoppedAnimationOfdouble: () => (T.AlwaysStoppedAnimationOfdouble = dart.constFn(animations.AlwaysStoppedAnimation$(core.double)))(),
    TweenOfdouble: () => (T.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))(),
    dynamicToTweenOfdouble: () => (T.dynamicToTweenOfdouble = dart.constFn(dart.fnType(T.TweenOfdouble(), [dart.dynamic])))(),
    TweenNOfdouble: () => (T.TweenNOfdouble = dart.constFn(dart.nullable(T.TweenOfdouble())))(),
    TweenSequenceOfdouble: () => (T.TweenSequenceOfdouble = dart.constFn(tween_sequence.TweenSequence$(core.double)))(),
    TweenSequenceItemOfdouble: () => (T.TweenSequenceItemOfdouble = dart.constFn(tween_sequence.TweenSequenceItem$(core.double)))(),
    ConstantTweenOfdouble: () => (T.ConstantTweenOfdouble = dart.constFn(tween.ConstantTween$(core.double)))(),
    JSArrayOfTweenSequenceItemOfdouble: () => (T.JSArrayOfTweenSequenceItemOfdouble = dart.constFn(_interceptors.JSArray$(T.TweenSequenceItemOfdouble())))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    AnimationStatusTovoid: () => (T.AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation.AnimationStatus])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    AnimationOfdouble: () => (T.AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))(),
    DiagnosticsPropertyOfAnimationOfdouble: () => (T.DiagnosticsPropertyOfAnimationOfdouble = dart.constFn(diagnostics.DiagnosticsProperty$(T.AnimationOfdouble())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 700000
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "noRepeat",
        [_Enum_index]: 3
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeInImage",
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeInImage",
        [_Location_column]: 3,
        [_Location_line]: 133,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeInImage",
        [_Location_column]: 3,
        [_Location_line]: 203,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 12,
        [_Location_line]: 385,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_AnimatedFadeOutFadeIn",
        [_Location_column]: 16,
        [_Location_line]: 412,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 16,
        [_Location_line]: 433,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: T.AlwaysStoppedAnimationOfdouble().prototype,
        [AlwaysStoppedAnimation_value]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_AnimatedFadeOutFadeIn",
        [_Location_column]: 9,
        [_Location_line]: 446,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 12,
        [_Location_line]: 546,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart"
      });
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/fade_in_image.dart",
    "package:flutter/src/widgets/fade_in_image.dart"
  ];
  var placeholder$ = dart.privateName(fade_in_image, "FadeInImage.placeholder");
  var placeholderErrorBuilder$ = dart.privateName(fade_in_image, "FadeInImage.placeholderErrorBuilder");
  var image$0 = dart.privateName(fade_in_image, "FadeInImage.image");
  var imageErrorBuilder$ = dart.privateName(fade_in_image, "FadeInImage.imageErrorBuilder");
  var fadeOutDuration$ = dart.privateName(fade_in_image, "FadeInImage.fadeOutDuration");
  var fadeOutCurve$ = dart.privateName(fade_in_image, "FadeInImage.fadeOutCurve");
  var fadeInDuration$ = dart.privateName(fade_in_image, "FadeInImage.fadeInDuration");
  var fadeInCurve$ = dart.privateName(fade_in_image, "FadeInImage.fadeInCurve");
  var width$ = dart.privateName(fade_in_image, "FadeInImage.width");
  var height$ = dart.privateName(fade_in_image, "FadeInImage.height");
  var fit$ = dart.privateName(fade_in_image, "FadeInImage.fit");
  var placeholderFit$ = dart.privateName(fade_in_image, "FadeInImage.placeholderFit");
  var alignment$ = dart.privateName(fade_in_image, "FadeInImage.alignment");
  var repeat$ = dart.privateName(fade_in_image, "FadeInImage.repeat");
  var matchTextDirection$ = dart.privateName(fade_in_image, "FadeInImage.matchTextDirection");
  var excludeFromSemantics$ = dart.privateName(fade_in_image, "FadeInImage.excludeFromSemantics");
  var imageSemanticLabel$ = dart.privateName(fade_in_image, "FadeInImage.imageSemanticLabel");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  fade_in_image.FadeInImage = class FadeInImage extends framework.StatefulWidget {
    get placeholder() {
      return this[placeholder$];
    }
    set placeholder(value) {
      super.placeholder = value;
    }
    get placeholderErrorBuilder() {
      return this[placeholderErrorBuilder$];
    }
    set placeholderErrorBuilder(value) {
      super.placeholderErrorBuilder = value;
    }
    get image() {
      return this[image$0];
    }
    set image(value) {
      super.image = value;
    }
    get imageErrorBuilder() {
      return this[imageErrorBuilder$];
    }
    set imageErrorBuilder(value) {
      super.imageErrorBuilder = value;
    }
    get fadeOutDuration() {
      return this[fadeOutDuration$];
    }
    set fadeOutDuration(value) {
      super.fadeOutDuration = value;
    }
    get fadeOutCurve() {
      return this[fadeOutCurve$];
    }
    set fadeOutCurve(value) {
      super.fadeOutCurve = value;
    }
    get fadeInDuration() {
      return this[fadeInDuration$];
    }
    set fadeInDuration(value) {
      super.fadeInDuration = value;
    }
    get fadeInCurve() {
      return this[fadeInCurve$];
    }
    set fadeInCurve(value) {
      super.fadeInCurve = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get fit() {
      return this[fit$];
    }
    set fit(value) {
      super.fit = value;
    }
    get placeholderFit() {
      return this[placeholderFit$];
    }
    set placeholderFit(value) {
      super.placeholderFit = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get repeat() {
      return this[repeat$];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    get excludeFromSemantics() {
      return this[excludeFromSemantics$];
    }
    set excludeFromSemantics(value) {
      super.excludeFromSemantics = value;
    }
    get imageSemanticLabel() {
      return this[imageSemanticLabel$];
    }
    set imageSemanticLabel(value) {
      super.imageSemanticLabel = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let placeholderErrorBuilder = opts && 'placeholderErrorBuilder' in opts ? opts.placeholderErrorBuilder : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let imageErrorBuilder = opts && 'imageErrorBuilder' in opts ? opts.imageErrorBuilder : null;
      let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
      let imageSemanticLabel = opts && 'imageSemanticLabel' in opts ? opts.imageSemanticLabel : null;
      let fadeOutDuration = opts && 'fadeOutDuration' in opts ? opts.fadeOutDuration : C[0] || CT.C0;
      let fadeOutCurve = opts && 'fadeOutCurve' in opts ? opts.fadeOutCurve : C[1] || CT.C1;
      let fadeInDuration = opts && 'fadeInDuration' in opts ? opts.fadeInDuration : C[2] || CT.C2;
      let fadeInCurve = opts && 'fadeInCurve' in opts ? opts.fadeInCurve : C[3] || CT.C3;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let placeholderFit = opts && 'placeholderFit' in opts ? opts.placeholderFit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[4] || CT.C4;
      let repeat = opts && 'repeat' in opts ? opts.repeat : C[5] || CT.C5;
      let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
      return new fade_in_image.FadeInImage.new({key: key, placeholder: placeholder, placeholderErrorBuilder: placeholderErrorBuilder, image: image, imageErrorBuilder: imageErrorBuilder, excludeFromSemantics: excludeFromSemantics, imageSemanticLabel: imageSemanticLabel, fadeOutDuration: fadeOutDuration, fadeOutCurve: fadeOutCurve, fadeInDuration: fadeInDuration, fadeInCurve: fadeInCurve, width: width, height: height, fit: fit, placeholderFit: placeholderFit, alignment: alignment, repeat: repeat, matchTextDirection: matchTextDirection, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
    static ['_#memoryNetwork#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let placeholderErrorBuilder = opts && 'placeholderErrorBuilder' in opts ? opts.placeholderErrorBuilder : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let imageErrorBuilder = opts && 'imageErrorBuilder' in opts ? opts.imageErrorBuilder : null;
      let placeholderScale = opts && 'placeholderScale' in opts ? opts.placeholderScale : 1;
      let imageScale = opts && 'imageScale' in opts ? opts.imageScale : 1;
      let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
      let imageSemanticLabel = opts && 'imageSemanticLabel' in opts ? opts.imageSemanticLabel : null;
      let fadeOutDuration = opts && 'fadeOutDuration' in opts ? opts.fadeOutDuration : C[0] || CT.C0;
      let fadeOutCurve = opts && 'fadeOutCurve' in opts ? opts.fadeOutCurve : C[1] || CT.C1;
      let fadeInDuration = opts && 'fadeInDuration' in opts ? opts.fadeInDuration : C[2] || CT.C2;
      let fadeInCurve = opts && 'fadeInCurve' in opts ? opts.fadeInCurve : C[3] || CT.C3;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let placeholderFit = opts && 'placeholderFit' in opts ? opts.placeholderFit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[4] || CT.C4;
      let repeat = opts && 'repeat' in opts ? opts.repeat : C[5] || CT.C5;
      let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
      let placeholderCacheWidth = opts && 'placeholderCacheWidth' in opts ? opts.placeholderCacheWidth : null;
      let placeholderCacheHeight = opts && 'placeholderCacheHeight' in opts ? opts.placeholderCacheHeight : null;
      let imageCacheWidth = opts && 'imageCacheWidth' in opts ? opts.imageCacheWidth : null;
      let imageCacheHeight = opts && 'imageCacheHeight' in opts ? opts.imageCacheHeight : null;
      return new fade_in_image.FadeInImage.memoryNetwork({key: key, placeholder: placeholder, placeholderErrorBuilder: placeholderErrorBuilder, image: image, imageErrorBuilder: imageErrorBuilder, placeholderScale: placeholderScale, imageScale: imageScale, excludeFromSemantics: excludeFromSemantics, imageSemanticLabel: imageSemanticLabel, fadeOutDuration: fadeOutDuration, fadeOutCurve: fadeOutCurve, fadeInDuration: fadeInDuration, fadeInCurve: fadeInCurve, width: width, height: height, fit: fit, placeholderFit: placeholderFit, alignment: alignment, repeat: repeat, matchTextDirection: matchTextDirection, placeholderCacheWidth: placeholderCacheWidth, placeholderCacheHeight: placeholderCacheHeight, imageCacheWidth: imageCacheWidth, imageCacheHeight: imageCacheHeight, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    static ['_#assetNetwork#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let placeholderErrorBuilder = opts && 'placeholderErrorBuilder' in opts ? opts.placeholderErrorBuilder : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let imageErrorBuilder = opts && 'imageErrorBuilder' in opts ? opts.imageErrorBuilder : null;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let placeholderScale = opts && 'placeholderScale' in opts ? opts.placeholderScale : null;
      let imageScale = opts && 'imageScale' in opts ? opts.imageScale : 1;
      let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
      let imageSemanticLabel = opts && 'imageSemanticLabel' in opts ? opts.imageSemanticLabel : null;
      let fadeOutDuration = opts && 'fadeOutDuration' in opts ? opts.fadeOutDuration : C[0] || CT.C0;
      let fadeOutCurve = opts && 'fadeOutCurve' in opts ? opts.fadeOutCurve : C[1] || CT.C1;
      let fadeInDuration = opts && 'fadeInDuration' in opts ? opts.fadeInDuration : C[2] || CT.C2;
      let fadeInCurve = opts && 'fadeInCurve' in opts ? opts.fadeInCurve : C[3] || CT.C3;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let placeholderFit = opts && 'placeholderFit' in opts ? opts.placeholderFit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[4] || CT.C4;
      let repeat = opts && 'repeat' in opts ? opts.repeat : C[5] || CT.C5;
      let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
      let placeholderCacheWidth = opts && 'placeholderCacheWidth' in opts ? opts.placeholderCacheWidth : null;
      let placeholderCacheHeight = opts && 'placeholderCacheHeight' in opts ? opts.placeholderCacheHeight : null;
      let imageCacheWidth = opts && 'imageCacheWidth' in opts ? opts.imageCacheWidth : null;
      let imageCacheHeight = opts && 'imageCacheHeight' in opts ? opts.imageCacheHeight : null;
      return new fade_in_image.FadeInImage.assetNetwork({key: key, placeholder: placeholder, placeholderErrorBuilder: placeholderErrorBuilder, image: image, imageErrorBuilder: imageErrorBuilder, bundle: bundle, placeholderScale: placeholderScale, imageScale: imageScale, excludeFromSemantics: excludeFromSemantics, imageSemanticLabel: imageSemanticLabel, fadeOutDuration: fadeOutDuration, fadeOutCurve: fadeOutCurve, fadeInDuration: fadeInDuration, fadeInCurve: fadeInCurve, width: width, height: height, fit: fit, placeholderFit: placeholderFit, alignment: alignment, repeat: repeat, matchTextDirection: matchTextDirection, placeholderCacheWidth: placeholderCacheWidth, placeholderCacheHeight: placeholderCacheHeight, imageCacheWidth: imageCacheWidth, imageCacheHeight: imageCacheHeight, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    createState() {
      return new fade_in_image._FadeInImageState.new();
    }
  };
  (fade_in_image.FadeInImage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
    let placeholderErrorBuilder = opts && 'placeholderErrorBuilder' in opts ? opts.placeholderErrorBuilder : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let imageErrorBuilder = opts && 'imageErrorBuilder' in opts ? opts.imageErrorBuilder : null;
    let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
    let imageSemanticLabel = opts && 'imageSemanticLabel' in opts ? opts.imageSemanticLabel : null;
    let fadeOutDuration = opts && 'fadeOutDuration' in opts ? opts.fadeOutDuration : C[0] || CT.C0;
    let fadeOutCurve = opts && 'fadeOutCurve' in opts ? opts.fadeOutCurve : C[1] || CT.C1;
    let fadeInDuration = opts && 'fadeInDuration' in opts ? opts.fadeInDuration : C[2] || CT.C2;
    let fadeInCurve = opts && 'fadeInCurve' in opts ? opts.fadeInCurve : C[3] || CT.C3;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let placeholderFit = opts && 'placeholderFit' in opts ? opts.placeholderFit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[4] || CT.C4;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C[5] || CT.C5;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[placeholder$] = placeholder;
    this[placeholderErrorBuilder$] = placeholderErrorBuilder;
    this[image$0] = image;
    this[imageErrorBuilder$] = imageErrorBuilder;
    this[excludeFromSemantics$] = excludeFromSemantics;
    this[imageSemanticLabel$] = imageSemanticLabel;
    this[fadeOutDuration$] = fadeOutDuration;
    this[fadeOutCurve$] = fadeOutCurve;
    this[fadeInDuration$] = fadeInDuration;
    this[fadeInCurve$] = fadeInCurve;
    this[width$] = width;
    this[height$] = height;
    this[fit$] = fit;
    this[placeholderFit$] = placeholderFit;
    this[alignment$] = alignment;
    this[repeat$] = repeat;
    this[matchTextDirection$] = matchTextDirection;
    if (!(placeholder !== null)) dart.assertFailed(null, I[0], 95, 15, "placeholder != null");
    if (!(image !== null)) dart.assertFailed(null, I[0], 96, 15, "image != null");
    if (!(fadeOutDuration !== null)) dart.assertFailed(null, I[0], 97, 15, "fadeOutDuration != null");
    if (!(fadeOutCurve !== null)) dart.assertFailed(null, I[0], 98, 15, "fadeOutCurve != null");
    if (!(fadeInDuration !== null)) dart.assertFailed(null, I[0], 99, 15, "fadeInDuration != null");
    if (!(fadeInCurve !== null)) dart.assertFailed(null, I[0], 100, 15, "fadeInCurve != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 101, 15, "alignment != null");
    if (!(repeat !== null)) dart.assertFailed(null, I[0], 102, 15, "repeat != null");
    if (!(matchTextDirection !== null)) dart.assertFailed(null, I[0], 103, 15, "matchTextDirection != null");
    fade_in_image.FadeInImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fade_in_image.FadeInImage.prototype;
  (fade_in_image.FadeInImage.memoryNetwork = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
    let placeholderErrorBuilder = opts && 'placeholderErrorBuilder' in opts ? opts.placeholderErrorBuilder : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let imageErrorBuilder = opts && 'imageErrorBuilder' in opts ? opts.imageErrorBuilder : null;
    let placeholderScale = opts && 'placeholderScale' in opts ? opts.placeholderScale : 1;
    let imageScale = opts && 'imageScale' in opts ? opts.imageScale : 1;
    let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
    let imageSemanticLabel = opts && 'imageSemanticLabel' in opts ? opts.imageSemanticLabel : null;
    let fadeOutDuration = opts && 'fadeOutDuration' in opts ? opts.fadeOutDuration : C[0] || CT.C0;
    let fadeOutCurve = opts && 'fadeOutCurve' in opts ? opts.fadeOutCurve : C[1] || CT.C1;
    let fadeInDuration = opts && 'fadeInDuration' in opts ? opts.fadeInDuration : C[2] || CT.C2;
    let fadeInCurve = opts && 'fadeInCurve' in opts ? opts.fadeInCurve : C[3] || CT.C3;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let placeholderFit = opts && 'placeholderFit' in opts ? opts.placeholderFit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[4] || CT.C4;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C[5] || CT.C5;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    let placeholderCacheWidth = opts && 'placeholderCacheWidth' in opts ? opts.placeholderCacheWidth : null;
    let placeholderCacheHeight = opts && 'placeholderCacheHeight' in opts ? opts.placeholderCacheHeight : null;
    let imageCacheWidth = opts && 'imageCacheWidth' in opts ? opts.imageCacheWidth : null;
    let imageCacheHeight = opts && 'imageCacheHeight' in opts ? opts.imageCacheHeight : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[placeholderErrorBuilder$] = placeholderErrorBuilder;
    this[imageErrorBuilder$] = imageErrorBuilder;
    this[excludeFromSemantics$] = excludeFromSemantics;
    this[imageSemanticLabel$] = imageSemanticLabel;
    this[fadeOutDuration$] = fadeOutDuration;
    this[fadeOutCurve$] = fadeOutCurve;
    this[fadeInDuration$] = fadeInDuration;
    this[fadeInCurve$] = fadeInCurve;
    this[width$] = width;
    this[height$] = height;
    this[fit$] = fit;
    this[placeholderFit$] = placeholderFit;
    this[alignment$] = alignment;
    this[repeat$] = repeat;
    this[matchTextDirection$] = matchTextDirection;
    if (!(placeholder !== null)) dart.assertFailed(null, I[0], 158, 15, "placeholder != null");
    if (!(image !== null)) dart.assertFailed(null, I[0], 159, 15, "image != null");
    if (!(placeholderScale !== null)) dart.assertFailed(null, I[0], 160, 15, "placeholderScale != null");
    if (!(imageScale !== null)) dart.assertFailed(null, I[0], 161, 15, "imageScale != null");
    if (!(fadeOutDuration !== null)) dart.assertFailed(null, I[0], 162, 15, "fadeOutDuration != null");
    if (!(fadeOutCurve !== null)) dart.assertFailed(null, I[0], 163, 15, "fadeOutCurve != null");
    if (!(fadeInDuration !== null)) dart.assertFailed(null, I[0], 164, 15, "fadeInDuration != null");
    if (!(fadeInCurve !== null)) dart.assertFailed(null, I[0], 165, 15, "fadeInCurve != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 166, 15, "alignment != null");
    if (!(repeat !== null)) dart.assertFailed(null, I[0], 167, 15, "repeat != null");
    if (!(matchTextDirection !== null)) dart.assertFailed(null, I[0], 168, 15, "matchTextDirection != null");
    this[placeholder$] = image_provider.ResizeImage.resizeIfNeeded(placeholderCacheWidth, placeholderCacheHeight, new image_provider.MemoryImage.new(placeholder, {scale: placeholderScale}));
    this[image$0] = image_provider.ResizeImage.resizeIfNeeded(imageCacheWidth, imageCacheHeight, new _network_image_web.NetworkImage.new(image, {scale: imageScale}));
    fade_in_image.FadeInImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fade_in_image.FadeInImage.prototype;
  (fade_in_image.FadeInImage.assetNetwork = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
    let placeholderErrorBuilder = opts && 'placeholderErrorBuilder' in opts ? opts.placeholderErrorBuilder : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let imageErrorBuilder = opts && 'imageErrorBuilder' in opts ? opts.imageErrorBuilder : null;
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let placeholderScale = opts && 'placeholderScale' in opts ? opts.placeholderScale : null;
    let imageScale = opts && 'imageScale' in opts ? opts.imageScale : 1;
    let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
    let imageSemanticLabel = opts && 'imageSemanticLabel' in opts ? opts.imageSemanticLabel : null;
    let fadeOutDuration = opts && 'fadeOutDuration' in opts ? opts.fadeOutDuration : C[0] || CT.C0;
    let fadeOutCurve = opts && 'fadeOutCurve' in opts ? opts.fadeOutCurve : C[1] || CT.C1;
    let fadeInDuration = opts && 'fadeInDuration' in opts ? opts.fadeInDuration : C[2] || CT.C2;
    let fadeInCurve = opts && 'fadeInCurve' in opts ? opts.fadeInCurve : C[3] || CT.C3;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let placeholderFit = opts && 'placeholderFit' in opts ? opts.placeholderFit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[4] || CT.C4;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C[5] || CT.C5;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    let placeholderCacheWidth = opts && 'placeholderCacheWidth' in opts ? opts.placeholderCacheWidth : null;
    let placeholderCacheHeight = opts && 'placeholderCacheHeight' in opts ? opts.placeholderCacheHeight : null;
    let imageCacheWidth = opts && 'imageCacheWidth' in opts ? opts.imageCacheWidth : null;
    let imageCacheHeight = opts && 'imageCacheHeight' in opts ? opts.imageCacheHeight : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[placeholderErrorBuilder$] = placeholderErrorBuilder;
    this[imageErrorBuilder$] = imageErrorBuilder;
    this[excludeFromSemantics$] = excludeFromSemantics;
    this[imageSemanticLabel$] = imageSemanticLabel;
    this[fadeOutDuration$] = fadeOutDuration;
    this[fadeOutCurve$] = fadeOutCurve;
    this[fadeInDuration$] = fadeInDuration;
    this[fadeInCurve$] = fadeInCurve;
    this[width$] = width;
    this[height$] = height;
    this[fit$] = fit;
    this[placeholderFit$] = placeholderFit;
    this[alignment$] = alignment;
    this[repeat$] = repeat;
    this[matchTextDirection$] = matchTextDirection;
    if (!(placeholder !== null)) dart.assertFailed(null, I[0], 229, 15, "placeholder != null");
    if (!(image !== null)) dart.assertFailed(null, I[0], 230, 15, "image != null");
    this[placeholder$] = placeholderScale != null ? image_provider.ResizeImage.resizeIfNeeded(placeholderCacheWidth, placeholderCacheHeight, new image_provider.ExactAssetImage.new(placeholder, {bundle: bundle, scale: placeholderScale})) : image_provider.ResizeImage.resizeIfNeeded(placeholderCacheWidth, placeholderCacheHeight, new image_resolution.AssetImage.new(placeholder, {bundle: bundle}));
    if (!(imageScale !== null)) dart.assertFailed(null, I[0], 234, 15, "imageScale != null");
    if (!(fadeOutDuration !== null)) dart.assertFailed(null, I[0], 235, 15, "fadeOutDuration != null");
    if (!(fadeOutCurve !== null)) dart.assertFailed(null, I[0], 236, 15, "fadeOutCurve != null");
    if (!(fadeInDuration !== null)) dart.assertFailed(null, I[0], 237, 15, "fadeInDuration != null");
    if (!(fadeInCurve !== null)) dart.assertFailed(null, I[0], 238, 15, "fadeInCurve != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 239, 15, "alignment != null");
    if (!(repeat !== null)) dart.assertFailed(null, I[0], 240, 15, "repeat != null");
    if (!(matchTextDirection !== null)) dart.assertFailed(null, I[0], 241, 15, "matchTextDirection != null");
    this[image$0] = image_provider.ResizeImage.resizeIfNeeded(imageCacheWidth, imageCacheHeight, new _network_image_web.NetworkImage.new(image, {scale: imageScale}));
    fade_in_image.FadeInImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fade_in_image.FadeInImage.prototype;
  dart.addTypeTests(fade_in_image.FadeInImage);
  dart.addTypeCaches(fade_in_image.FadeInImage);
  dart.setMethodSignature(fade_in_image.FadeInImage, () => ({
    __proto__: dart.getMethods(fade_in_image.FadeInImage.__proto__),
    createState: dart.fnType(framework.State$(fade_in_image.FadeInImage), [])
  }));
  dart.setLibraryUri(fade_in_image.FadeInImage, I[1]);
  dart.setFieldSignature(fade_in_image.FadeInImage, () => ({
    __proto__: dart.getFields(fade_in_image.FadeInImage.__proto__),
    placeholder: dart.finalFieldType(image_provider.ImageProvider$(core.Object)),
    placeholderErrorBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.Object, dart.nullable(core.StackTrace)]))),
    image: dart.finalFieldType(image_provider.ImageProvider$(core.Object)),
    imageErrorBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.Object, dart.nullable(core.StackTrace)]))),
    fadeOutDuration: dart.finalFieldType(core.Duration),
    fadeOutCurve: dart.finalFieldType(curves.Curve),
    fadeInDuration: dart.finalFieldType(core.Duration),
    fadeInCurve: dart.finalFieldType(curves.Curve),
    width: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double)),
    fit: dart.finalFieldType(dart.nullable(box_fit.BoxFit)),
    placeholderFit: dart.finalFieldType(dart.nullable(box_fit.BoxFit)),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    repeat: dart.finalFieldType(decoration_image.ImageRepeat),
    matchTextDirection: dart.finalFieldType(core.bool),
    excludeFromSemantics: dart.finalFieldType(core.bool),
    imageSemanticLabel: dart.finalFieldType(dart.nullable(core.String))
  }));
  var _imageAnimation = dart.privateName(fade_in_image, "_imageAnimation");
  var _placeholderAnimation = dart.privateName(fade_in_image, "_placeholderAnimation");
  var _image = dart.privateName(fade_in_image, "_image");
  var AlwaysStoppedAnimation_value = dart.privateName(animations, "AlwaysStoppedAnimation.value");
  fade_in_image._FadeInImageState = class _FadeInImageState extends framework.State$(fade_in_image.FadeInImage) {
    [_image](opts) {
      let image = opts && 'image' in opts ? opts.image : null;
      let errorBuilder = opts && 'errorBuilder' in opts ? opts.errorBuilder : null;
      let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      if (!(image !== null)) dart.assertFailed(null, I[0], 384, 12, "image != null");
      return new image$.Image.new({image: image, errorBuilder: errorBuilder, frameBuilder: frameBuilder, opacity: opacity, width: this.widget.width, height: this.widget.height, fit: fit, alignment: this.widget.alignment, repeat: this.widget.repeat, matchTextDirection: this.widget.matchTextDirection, gaplessPlayback: true, excludeFromSemantics: true, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    build(context) {
      let t0;
      let result = this[_image]({image: this.widget.image, errorBuilder: this.widget.imageErrorBuilder, opacity: this[_imageAnimation], fit: this.widget.fit, frameBuilder: dart.fn((context, child, frame, wasSynchronouslyLoaded) => {
          let t0;
          if (wasSynchronouslyLoaded || frame != null) {
            this.targetLoaded = true;
          }
          return new fade_in_image._AnimatedFadeOutFadeIn.new({target: child, targetProxyAnimation: this[_imageAnimation], placeholder: this[_image]({image: this.widget.placeholder, errorBuilder: this.widget.placeholderErrorBuilder, opacity: this[_placeholderAnimation], fit: (t0 = this.widget.placeholderFit, t0 == null ? this.widget.fit : t0)}), placeholderProxyAnimation: this[_placeholderAnimation], isTargetLoaded: this.targetLoaded, wasSynchronouslyLoaded: wasSynchronouslyLoaded, fadeInDuration: this.widget.fadeInDuration, fadeOutDuration: this.widget.fadeOutDuration, fadeInCurve: this.widget.fadeInCurve, fadeOutCurve: this.widget.fadeOutCurve, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
        }, T.BuildContextAndWidgetAndintN__To_AnimatedFadeOutFadeIn())});
      if (!this.widget.excludeFromSemantics) {
        result = new basic.Semantics.new({container: this.widget.imageSemanticLabel != null, image: true, label: (t0 = this.widget.imageSemanticLabel, t0 == null ? "" : t0), child: result, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
      }
      return result;
    }
    static ['_#new#tearOff']() {
      return new fade_in_image._FadeInImageState.new();
    }
  };
  (fade_in_image._FadeInImageState.new = function() {
    this.targetLoaded = false;
    this[_imageAnimation] = new animations.ProxyAnimation.new(fade_in_image._FadeInImageState._kOpaqueAnimation);
    this[_placeholderAnimation] = new animations.ProxyAnimation.new(fade_in_image._FadeInImageState._kOpaqueAnimation);
    fade_in_image._FadeInImageState.__proto__.new.call(this);
    ;
  }).prototype = fade_in_image._FadeInImageState.prototype;
  dart.addTypeTests(fade_in_image._FadeInImageState);
  dart.addTypeCaches(fade_in_image._FadeInImageState);
  dart.setMethodSignature(fade_in_image._FadeInImageState, () => ({
    __proto__: dart.getMethods(fade_in_image._FadeInImageState.__proto__),
    [_image]: dart.fnType(image$.Image, [], {errorBuilder: dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.Object, dart.nullable(core.StackTrace)])), fit: dart.nullable(box_fit.BoxFit), frameBuilder: dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, dart.nullable(core.int), core.bool]))}, {image: image_provider.ImageProvider$(core.Object), opacity: animation.Animation$(core.double)}),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fade_in_image._FadeInImageState, I[1]);
  dart.setFieldSignature(fade_in_image._FadeInImageState, () => ({
    __proto__: dart.getFields(fade_in_image._FadeInImageState.__proto__),
    targetLoaded: dart.fieldType(core.bool),
    [_imageAnimation]: dart.finalFieldType(animations.ProxyAnimation),
    [_placeholderAnimation]: dart.finalFieldType(animations.ProxyAnimation)
  }));
  dart.setStaticFieldSignature(fade_in_image._FadeInImageState, () => ['_kOpaqueAnimation']);
  dart.defineLazy(fade_in_image._FadeInImageState, {
    /*fade_in_image._FadeInImageState._kOpaqueAnimation*/get _kOpaqueAnimation() {
      return C[12] || CT.C12;
    }
  }, false);
  var target$ = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.target");
  var targetProxyAnimation$ = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.targetProxyAnimation");
  var placeholder$0 = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.placeholder");
  var placeholderProxyAnimation$ = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.placeholderProxyAnimation");
  var isTargetLoaded$ = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.isTargetLoaded");
  var fadeInDuration$0 = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.fadeInDuration");
  var fadeOutDuration$0 = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.fadeOutDuration");
  var fadeInCurve$0 = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.fadeInCurve");
  var fadeOutCurve$0 = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.fadeOutCurve");
  var wasSynchronouslyLoaded$ = dart.privateName(fade_in_image, "_AnimatedFadeOutFadeIn.wasSynchronouslyLoaded");
  fade_in_image._AnimatedFadeOutFadeIn = class _AnimatedFadeOutFadeIn extends implicit_animations.ImplicitlyAnimatedWidget {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    get targetProxyAnimation() {
      return this[targetProxyAnimation$];
    }
    set targetProxyAnimation(value) {
      super.targetProxyAnimation = value;
    }
    get placeholder() {
      return this[placeholder$0];
    }
    set placeholder(value) {
      super.placeholder = value;
    }
    get placeholderProxyAnimation() {
      return this[placeholderProxyAnimation$];
    }
    set placeholderProxyAnimation(value) {
      super.placeholderProxyAnimation = value;
    }
    get isTargetLoaded() {
      return this[isTargetLoaded$];
    }
    set isTargetLoaded(value) {
      super.isTargetLoaded = value;
    }
    get fadeInDuration() {
      return this[fadeInDuration$0];
    }
    set fadeInDuration(value) {
      super.fadeInDuration = value;
    }
    get fadeOutDuration() {
      return this[fadeOutDuration$0];
    }
    set fadeOutDuration(value) {
      super.fadeOutDuration = value;
    }
    get fadeInCurve() {
      return this[fadeInCurve$0];
    }
    set fadeInCurve(value) {
      super.fadeInCurve = value;
    }
    get fadeOutCurve() {
      return this[fadeOutCurve$0];
    }
    set fadeOutCurve(value) {
      super.fadeOutCurve = value;
    }
    get wasSynchronouslyLoaded() {
      return this[wasSynchronouslyLoaded$];
    }
    set wasSynchronouslyLoaded(value) {
      super.wasSynchronouslyLoaded = value;
    }
    static ['_#new#tearOff'](opts) {
      let target = opts && 'target' in opts ? opts.target : null;
      let targetProxyAnimation = opts && 'targetProxyAnimation' in opts ? opts.targetProxyAnimation : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let placeholderProxyAnimation = opts && 'placeholderProxyAnimation' in opts ? opts.placeholderProxyAnimation : null;
      let isTargetLoaded = opts && 'isTargetLoaded' in opts ? opts.isTargetLoaded : null;
      let fadeOutDuration = opts && 'fadeOutDuration' in opts ? opts.fadeOutDuration : null;
      let fadeOutCurve = opts && 'fadeOutCurve' in opts ? opts.fadeOutCurve : null;
      let fadeInDuration = opts && 'fadeInDuration' in opts ? opts.fadeInDuration : null;
      let fadeInCurve = opts && 'fadeInCurve' in opts ? opts.fadeInCurve : null;
      let wasSynchronouslyLoaded = opts && 'wasSynchronouslyLoaded' in opts ? opts.wasSynchronouslyLoaded : null;
      return new fade_in_image._AnimatedFadeOutFadeIn.new({target: target, targetProxyAnimation: targetProxyAnimation, placeholder: placeholder, placeholderProxyAnimation: placeholderProxyAnimation, isTargetLoaded: isTargetLoaded, fadeOutDuration: fadeOutDuration, fadeOutCurve: fadeOutCurve, fadeInDuration: fadeInDuration, fadeInCurve: fadeInCurve, wasSynchronouslyLoaded: wasSynchronouslyLoaded, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    createState() {
      return new fade_in_image._AnimatedFadeOutFadeInState.new();
    }
  };
  (fade_in_image._AnimatedFadeOutFadeIn.new = function(opts) {
    let target = opts && 'target' in opts ? opts.target : null;
    let targetProxyAnimation = opts && 'targetProxyAnimation' in opts ? opts.targetProxyAnimation : null;
    let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
    let placeholderProxyAnimation = opts && 'placeholderProxyAnimation' in opts ? opts.placeholderProxyAnimation : null;
    let isTargetLoaded = opts && 'isTargetLoaded' in opts ? opts.isTargetLoaded : null;
    let fadeOutDuration = opts && 'fadeOutDuration' in opts ? opts.fadeOutDuration : null;
    let fadeOutCurve = opts && 'fadeOutCurve' in opts ? opts.fadeOutCurve : null;
    let fadeInDuration = opts && 'fadeInDuration' in opts ? opts.fadeInDuration : null;
    let fadeInCurve = opts && 'fadeInCurve' in opts ? opts.fadeInCurve : null;
    let wasSynchronouslyLoaded = opts && 'wasSynchronouslyLoaded' in opts ? opts.wasSynchronouslyLoaded : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[target$] = target;
    this[targetProxyAnimation$] = targetProxyAnimation;
    this[placeholder$0] = placeholder;
    this[placeholderProxyAnimation$] = placeholderProxyAnimation;
    this[isTargetLoaded$] = isTargetLoaded;
    this[fadeOutDuration$0] = fadeOutDuration;
    this[fadeOutCurve$0] = fadeOutCurve;
    this[fadeInDuration$0] = fadeInDuration;
    this[fadeInCurve$0] = fadeInCurve;
    this[wasSynchronouslyLoaded$] = wasSynchronouslyLoaded;
    if (!(target !== null)) dart.assertFailed(null, I[0], 457, 15, "target != null");
    if (!(placeholder !== null)) dart.assertFailed(null, I[0], 458, 15, "placeholder != null");
    if (!(isTargetLoaded !== null)) dart.assertFailed(null, I[0], 459, 15, "isTargetLoaded != null");
    if (!(fadeOutDuration !== null)) dart.assertFailed(null, I[0], 460, 15, "fadeOutDuration != null");
    if (!(fadeOutCurve !== null)) dart.assertFailed(null, I[0], 461, 15, "fadeOutCurve != null");
    if (!(fadeInDuration !== null)) dart.assertFailed(null, I[0], 462, 15, "fadeInDuration != null");
    if (!(fadeInCurve !== null)) dart.assertFailed(null, I[0], 463, 15, "fadeInCurve != null");
    if (!(!wasSynchronouslyLoaded || isTargetLoaded)) dart.assertFailed(null, I[0], 464, 15, "!wasSynchronouslyLoaded || isTargetLoaded");
    fade_in_image._AnimatedFadeOutFadeIn.__proto__.new.call(this, {duration: fadeInDuration['+'](fadeOutDuration), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fade_in_image._AnimatedFadeOutFadeIn.prototype;
  dart.addTypeTests(fade_in_image._AnimatedFadeOutFadeIn);
  dart.addTypeCaches(fade_in_image._AnimatedFadeOutFadeIn);
  dart.setMethodSignature(fade_in_image._AnimatedFadeOutFadeIn, () => ({
    __proto__: dart.getMethods(fade_in_image._AnimatedFadeOutFadeIn.__proto__),
    createState: dart.fnType(fade_in_image._AnimatedFadeOutFadeInState, [])
  }));
  dart.setLibraryUri(fade_in_image._AnimatedFadeOutFadeIn, I[1]);
  dart.setFieldSignature(fade_in_image._AnimatedFadeOutFadeIn, () => ({
    __proto__: dart.getFields(fade_in_image._AnimatedFadeOutFadeIn.__proto__),
    target: dart.finalFieldType(framework.Widget),
    targetProxyAnimation: dart.finalFieldType(animations.ProxyAnimation),
    placeholder: dart.finalFieldType(framework.Widget),
    placeholderProxyAnimation: dart.finalFieldType(animations.ProxyAnimation),
    isTargetLoaded: dart.finalFieldType(core.bool),
    fadeInDuration: dart.finalFieldType(core.Duration),
    fadeOutDuration: dart.finalFieldType(core.Duration),
    fadeInCurve: dart.finalFieldType(curves.Curve),
    fadeOutCurve: dart.finalFieldType(curves.Curve),
    wasSynchronouslyLoaded: dart.finalFieldType(core.bool)
  }));
  var _targetOpacity = dart.privateName(fade_in_image, "_targetOpacity");
  var _placeholderOpacity = dart.privateName(fade_in_image, "_placeholderOpacity");
  var _targetOpacityAnimation = dart.privateName(fade_in_image, "_targetOpacityAnimation");
  var _placeholderOpacityAnimation = dart.privateName(fade_in_image, "_placeholderOpacityAnimation");
  fade_in_image._AnimatedFadeOutFadeInState = class _AnimatedFadeOutFadeInState extends implicit_animations.ImplicitlyAnimatedWidgetState$(fade_in_image._AnimatedFadeOutFadeIn) {
    forEachTween(visitor) {
      this[_targetOpacity] = T.TweenNOfdouble().as(visitor(this[_targetOpacity], this.widget.isTargetLoaded ? 1.0 : 0.0, dart.fn(value => new (T.TweenOfdouble()).new({begin: core.double.as(value)}), T.dynamicToTweenOfdouble())));
      this[_placeholderOpacity] = T.TweenNOfdouble().as(visitor(this[_placeholderOpacity], this.widget.isTargetLoaded ? 0.0 : 1.0, dart.fn(value => new (T.TweenOfdouble()).new({begin: core.double.as(value)}), T.dynamicToTweenOfdouble())));
    }
    didUpdateTweens() {
      let t0;
      if (this.widget.wasSynchronouslyLoaded) {
        return;
      }
      this[_placeholderOpacityAnimation] = (t0 = this.animation.drive(core.double, new (T.TweenSequenceOfdouble()).new(T.JSArrayOfTweenSequenceItemOfdouble().of([new (T.TweenSequenceItemOfdouble()).new({tween: dart.nullCheck(this[_placeholderOpacity]).chain(new tween.CurveTween.new({curve: this.widget.fadeOutCurve})), weight: this.widget.fadeOutDuration.inMilliseconds[$toDouble]()}), new (T.TweenSequenceItemOfdouble()).new({tween: new (T.ConstantTweenOfdouble()).new(0.0), weight: this.widget.fadeInDuration.inMilliseconds[$toDouble]()})]))), (() => {
        t0.addStatusListener(dart.fn(status => {
          if (dart.nullCheck(this[_placeholderOpacityAnimation]).isCompleted) {
            this.setState(dart.fn(() => {
            }, T.VoidTovoid()));
          }
        }, T.AnimationStatusTovoid()));
        return t0;
      })());
      this[_targetOpacityAnimation] = this.animation.drive(core.double, new (T.TweenSequenceOfdouble()).new(T.JSArrayOfTweenSequenceItemOfdouble().of([new (T.TweenSequenceItemOfdouble()).new({tween: new (T.ConstantTweenOfdouble()).new(0.0), weight: this.widget.fadeOutDuration.inMilliseconds[$toDouble]()}), new (T.TweenSequenceItemOfdouble()).new({tween: dart.nullCheck(this[_targetOpacity]).chain(new tween.CurveTween.new({curve: this.widget.fadeInCurve})), weight: this.widget.fadeInDuration.inMilliseconds[$toDouble]()})])));
      this.widget.targetProxyAnimation.parent = this[_targetOpacityAnimation];
      this.widget.placeholderProxyAnimation.parent = this[_placeholderOpacityAnimation];
    }
    build(context) {
      if (this.widget.wasSynchronouslyLoaded || dart.nullCheck(this[_placeholderOpacityAnimation]).isCompleted) {
        return this.widget.target;
      }
      return new basic.Stack.new({fit: stack.StackFit.passthrough, alignment: alignment.AlignmentDirectional.center, textDirection: ui.TextDirection.ltr, children: T.JSArrayOfWidget().of([this.widget.target, this.widget.placeholder]), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfAnimationOfdouble()).new("targetOpacity", this[_targetOpacityAnimation]));
      properties.add(new (T.DiagnosticsPropertyOfAnimationOfdouble()).new("placeholderOpacity", this[_placeholderOpacityAnimation]));
    }
    static ['_#new#tearOff']() {
      return new fade_in_image._AnimatedFadeOutFadeInState.new();
    }
  };
  (fade_in_image._AnimatedFadeOutFadeInState.new = function() {
    this[_targetOpacity] = null;
    this[_placeholderOpacity] = null;
    this[_targetOpacityAnimation] = null;
    this[_placeholderOpacityAnimation] = null;
    fade_in_image._AnimatedFadeOutFadeInState.__proto__.new.call(this);
    ;
  }).prototype = fade_in_image._AnimatedFadeOutFadeInState.prototype;
  dart.addTypeTests(fade_in_image._AnimatedFadeOutFadeInState);
  dart.addTypeCaches(fade_in_image._AnimatedFadeOutFadeInState);
  dart.setMethodSignature(fade_in_image._AnimatedFadeOutFadeInState, () => ({
    __proto__: dart.getMethods(fade_in_image._AnimatedFadeOutFadeInState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fade_in_image._AnimatedFadeOutFadeInState, I[1]);
  dart.setFieldSignature(fade_in_image._AnimatedFadeOutFadeInState, () => ({
    __proto__: dart.getFields(fade_in_image._AnimatedFadeOutFadeInState.__proto__),
    [_targetOpacity]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_placeholderOpacity]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_targetOpacityAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_placeholderOpacityAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/fade_in_image.dart", {
    "package:flutter/src/widgets/fade_in_image.dart": fade_in_image
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fade_in_image.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/fade_in_image.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__fade_in_image: fade_in_image
  };
}));

//# sourceMappingURL=fade_in_image.dart.lib.js.map
