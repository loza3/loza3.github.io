define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/image_stream.dart', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/painting/binding.dart', 'packages/flutter/src/scheduler/binding.dart'], (function load__packages__flutter__src__painting__decoration_image_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__image_stream$46dart, packages__flutter__src__painting__debug$46dart, packages__flutter__src__painting__binding$46dart, packages__flutter__src__scheduler__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _engine = dart_sdk._engine;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  const debug = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const binding = packages__flutter__src__painting__binding$46dart.src__painting__binding;
  const binding$ = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  var decoration_image = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_equals = dartx._equals;
  var $join = dartx.join;
  var $isNotEmpty = dartx.isNotEmpty;
  var $toDouble = dartx.toDouble;
  var $truncate = dartx.truncate;
  var $toInt = dartx.toInt;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $values = dartx.values;
  var $toSet = dartx.toSet;
  var $isEmpty = dartx.isEmpty;
  var $floor = dartx.floor;
  var $ceil = dartx.ceil;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    DiagnosticsPropertyOfDecorationImage: () => (T.DiagnosticsPropertyOfDecorationImage = dart.constFn(diagnostics.DiagnosticsProperty$(decoration_image.DecorationImage)))(),
    DiagnosticsPropertyOfImageConfiguration: () => (T.DiagnosticsPropertyOfImageConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageConfiguration)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    LinkedHashSetOfImageSizeInfo: () => (T.LinkedHashSetOfImageSizeInfo = dart.constFn(collection.LinkedHashSet$(debug.ImageSizeInfo)))(),
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    IdentityMapOfString$ImageSizeInfo: () => (T.IdentityMapOfString$ImageSizeInfo = dart.constFn(_js_helper.IdentityMap$(core.String, debug.ImageSizeInfo)))(),
    DurationTovoid: () => (T.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    JSArrayOfRect: () => (T.JSArrayOfRect = dart.constFn(_interceptors.JSArray$(ui.Rect)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "repeat",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "repeatX",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "repeatY",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "noRepeat",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], decoration_image.ImageRepeat);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_Enum__name]: "low",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.constList([-1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0], core.double);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: _engine.CkMatrixColorFilter.prototype,
        [CkMatrixColorFilter_matrix]: C[8] || CT.C8
      });
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "package:flutter/src/painting/decoration_image.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/decoration_image.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  decoration_image.ImageRepeat = class ImageRepeat extends core._Enum {
    toString() {
      return "ImageRepeat." + this[_name];
    }
  };
  (decoration_image.ImageRepeat.new = function(index, name) {
    decoration_image.ImageRepeat.__proto__.new.call(this, index, name);
    ;
  }).prototype = decoration_image.ImageRepeat.prototype;
  dart.addTypeTests(decoration_image.ImageRepeat);
  dart.addTypeCaches(decoration_image.ImageRepeat);
  dart.setLibraryUri(decoration_image.ImageRepeat, I[0]);
  dart.setStaticFieldSignature(decoration_image.ImageRepeat, () => ['values', 'repeat', 'repeatX', 'repeatY', 'noRepeat']);
  dart.defineExtensionMethods(decoration_image.ImageRepeat, ['toString']);
  dart.defineLazy(decoration_image.ImageRepeat, {
    /*decoration_image.ImageRepeat.values*/get values() {
      return C[0] || CT.C0;
    },
    /*decoration_image.ImageRepeat.repeat*/get repeat() {
      return C[1] || CT.C1;
    },
    /*decoration_image.ImageRepeat.repeatX*/get repeatX() {
      return C[2] || CT.C2;
    },
    /*decoration_image.ImageRepeat.repeatY*/get repeatY() {
      return C[3] || CT.C3;
    },
    /*decoration_image.ImageRepeat.noRepeat*/get noRepeat() {
      return C[4] || CT.C4;
    }
  }, false);
  var image$ = dart.privateName(decoration_image, "DecorationImage.image");
  var onError$ = dart.privateName(decoration_image, "DecorationImage.onError");
  var colorFilter$ = dart.privateName(decoration_image, "DecorationImage.colorFilter");
  var fit$ = dart.privateName(decoration_image, "DecorationImage.fit");
  var alignment$ = dart.privateName(decoration_image, "DecorationImage.alignment");
  var centerSlice$ = dart.privateName(decoration_image, "DecorationImage.centerSlice");
  var repeat$ = dart.privateName(decoration_image, "DecorationImage.repeat");
  var matchTextDirection$ = dart.privateName(decoration_image, "DecorationImage.matchTextDirection");
  var scale$ = dart.privateName(decoration_image, "DecorationImage.scale");
  var opacity$ = dart.privateName(decoration_image, "DecorationImage.opacity");
  var filterQuality$ = dart.privateName(decoration_image, "DecorationImage.filterQuality");
  var invertColors$ = dart.privateName(decoration_image, "DecorationImage.invertColors");
  var isAntiAlias$ = dart.privateName(decoration_image, "DecorationImage.isAntiAlias");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  decoration_image.DecorationImage = class DecorationImage extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get onError() {
      return this[onError$];
    }
    set onError(value) {
      super.onError = value;
    }
    get colorFilter() {
      return this[colorFilter$];
    }
    set colorFilter(value) {
      super.colorFilter = value;
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
    get centerSlice() {
      return this[centerSlice$];
    }
    set centerSlice(value) {
      super.centerSlice = value;
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
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    get invertColors() {
      return this[invertColors$];
    }
    set invertColors(value) {
      super.invertColors = value;
    }
    get isAntiAlias() {
      return this[isAntiAlias$];
    }
    set isAntiAlias(value) {
      super.isAntiAlias = value;
    }
    static ['_#new#tearOff'](opts) {
      let image = opts && 'image' in opts ? opts.image : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[5] || CT.C5;
      let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : C[4] || CT.C4;
      let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[6] || CT.C6;
      let invertColors = opts && 'invertColors' in opts ? opts.invertColors : false;
      let isAntiAlias = opts && 'isAntiAlias' in opts ? opts.isAntiAlias : false;
      return new decoration_image.DecorationImage.new({image: image, onError: onError, colorFilter: colorFilter, fit: fit, alignment: alignment, centerSlice: centerSlice, repeat: repeat, matchTextDirection: matchTextDirection, scale: scale, opacity: opacity, filterQuality: filterQuality, invertColors: invertColors, isAntiAlias: isAntiAlias});
    }
    createPainter(onChanged) {
      if (!(onChanged !== null)) dart.assertFailed(null, I[1], 183, 12, "onChanged != null");
      return new decoration_image.DecorationImagePainter.__(this, onChanged);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return decoration_image.DecorationImage.is(other) && other.image[$_equals](this.image) && dart.equals(other.colorFilter, this.colorFilter) && other.fit == this.fit && other.alignment._equals(this.alignment) && dart.equals(other.centerSlice, this.centerSlice) && other.repeat === this.repeat && other.matchTextDirection === this.matchTextDirection && other.scale === this.scale && other.opacity === this.opacity && other.filterQuality === this.filterQuality && other.invertColors === this.invertColors && other.isAntiAlias === this.isAntiAlias;
    }
    get hashCode() {
      return core.Object.hash(this.image, this.colorFilter, this.fit, this.alignment, this.centerSlice, this.repeat, this.matchTextDirection, this.scale, this.opacity, this.filterQuality, this.invertColors, this.isAntiAlias);
    }
    toString() {
      let properties = (() => {
        let t2 = T.JSArrayOfString().of([dart.str(this.image)]);
        if (this.colorFilter != null) t2.push(dart.str(this.colorFilter));
        if (this.fit != null && !(this.fit === box_fit.BoxFit.fill && this.centerSlice != null) && !(this.fit === box_fit.BoxFit.scaleDown && this.centerSlice == null)) t2.push(dart.str(this.fit));
        t2.push(dart.str(this.alignment));
        if (this.centerSlice != null) t2.push("centerSlice: " + dart.str(this.centerSlice));
        if (this.repeat !== decoration_image.ImageRepeat.noRepeat) t2.push(dart.str(this.repeat));
        if (this.matchTextDirection) t2.push("match text direction");
        t2.push("scale " + dart.str(this.scale));
        t2.push("opacity " + dart.str(this.opacity));
        t2.push(dart.str(this.filterQuality));
        if (this.invertColors) t2.push("invert colors");
        if (this.isAntiAlias) t2.push("use anti-aliasing");
        return t2;
      })();
      return object.objectRuntimeType(this, "DecorationImage") + "(" + properties[$join](", ") + ")";
    }
  };
  (decoration_image.DecorationImage.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[5] || CT.C5;
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C[4] || CT.C4;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[6] || CT.C6;
    let invertColors = opts && 'invertColors' in opts ? opts.invertColors : false;
    let isAntiAlias = opts && 'isAntiAlias' in opts ? opts.isAntiAlias : false;
    this[image$] = image;
    this[onError$] = onError;
    this[colorFilter$] = colorFilter;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[centerSlice$] = centerSlice;
    this[repeat$] = repeat;
    this[matchTextDirection$] = matchTextDirection;
    this[scale$] = scale;
    this[opacity$] = opacity;
    this[filterQuality$] = filterQuality;
    this[invertColors$] = invertColors;
    this[isAntiAlias$] = isAntiAlias;
    if (!(image !== null)) dart.assertFailed(null, I[1], 59, 15, "image != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[1], 60, 15, "alignment != null");
    if (!(repeat !== null)) dart.assertFailed(null, I[1], 61, 15, "repeat != null");
    if (!(matchTextDirection !== null)) dart.assertFailed(null, I[1], 62, 15, "matchTextDirection != null");
    if (!(scale !== null)) dart.assertFailed(null, I[1], 63, 15, "scale != null");
    ;
  }).prototype = decoration_image.DecorationImage.prototype;
  dart.addTypeTests(decoration_image.DecorationImage);
  dart.addTypeCaches(decoration_image.DecorationImage);
  dart.setMethodSignature(decoration_image.DecorationImage, () => ({
    __proto__: dart.getMethods(decoration_image.DecorationImage.__proto__),
    createPainter: dart.fnType(decoration_image.DecorationImagePainter, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(decoration_image.DecorationImage, I[0]);
  dart.setFieldSignature(decoration_image.DecorationImage, () => ({
    __proto__: dart.getFields(decoration_image.DecorationImage.__proto__),
    image: dart.finalFieldType(image_provider.ImageProvider$(core.Object)),
    onError: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)]))),
    colorFilter: dart.finalFieldType(dart.nullable(ui.ColorFilter)),
    fit: dart.finalFieldType(dart.nullable(box_fit.BoxFit)),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    centerSlice: dart.finalFieldType(dart.nullable(ui.Rect)),
    repeat: dart.finalFieldType(decoration_image.ImageRepeat),
    matchTextDirection: dart.finalFieldType(core.bool),
    scale: dart.finalFieldType(core.double),
    opacity: dart.finalFieldType(core.double),
    filterQuality: dart.finalFieldType(ui.FilterQuality),
    invertColors: dart.finalFieldType(core.bool),
    isAntiAlias: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(decoration_image.DecorationImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(decoration_image.DecorationImage, ['hashCode']);
  var _imageStream = dart.privateName(decoration_image, "_imageStream");
  var _image = dart.privateName(decoration_image, "_image");
  var _details$ = dart.privateName(decoration_image, "_details");
  var _onChanged$ = dart.privateName(decoration_image, "_onChanged");
  var _handleImage = dart.privateName(decoration_image, "_handleImage");
  decoration_image.DecorationImagePainter = class DecorationImagePainter extends core.Object {
    static ['_#_#tearOff'](_details, _onChanged) {
      return new decoration_image.DecorationImagePainter.__(_details, _onChanged);
    }
    paint(canvas, rect, clipPath, configuration) {
      let t3, t3$;
      if (!(canvas !== null)) dart.assertFailed(null, I[1], 290, 12, "canvas != null");
      if (!(rect !== null)) dart.assertFailed(null, I[1], 291, 12, "rect != null");
      if (!(configuration !== null)) dart.assertFailed(null, I[1], 292, 12, "configuration != null");
      let flipHorizontally = false;
      if (this[_details$].matchTextDirection) {
        if (!dart.fn(() => {
          if (configuration.textDirection == null) {
            dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("DecorationImage.matchTextDirection can only be used when a TextDirection is available."), new assertions.ErrorDescription.new("When DecorationImagePainter.paint() was called, there was no text direction provided " + "in the ImageConfiguration object to match."), new (T.DiagnosticsPropertyOfDecorationImage()).new("The DecorationImage was", this[_details$], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (T.DiagnosticsPropertyOfImageConfiguration()).new("The ImageConfiguration was", configuration, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 296, 14, "() {\n        // We check this first so that the assert will fire immediately, not just\n        // when the image is ready.\n        if (configuration.textDirection == null) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('DecorationImage.matchTextDirection can only be used when a TextDirection is available.'),\n            ErrorDescription(\n              'When DecorationImagePainter.paint() was called, there was no text direction provided '\n              'in the ImageConfiguration object to match.',\n            ),\n            DiagnosticsProperty<DecorationImage>('The DecorationImage was', _details, style: DiagnosticsTreeStyle.errorProperty),\n            DiagnosticsProperty<ImageConfiguration>('The ImageConfiguration was', configuration, style: DiagnosticsTreeStyle.errorProperty),\n          ]);\n        }\n        return true;\n      }()");
        if (configuration.textDirection === ui.TextDirection.rtl) {
          flipHorizontally = true;
        }
      }
      let newImageStream = this[_details$].image.resolve(configuration);
      if (!newImageStream.key[$_equals]((t3 = this[_imageStream], t3 == null ? null : t3.key))) {
        let listener = new image_stream.ImageStreamListener.new(dart.bind(this, _handleImage), {onError: this[_details$].onError});
        t3$ = this[_imageStream];
        t3$ == null ? null : t3$.removeListener(listener);
        this[_imageStream] = newImageStream;
        dart.nullCheck(this[_imageStream]).addListener(listener);
      }
      if (this[_image] == null) {
        return;
      }
      if (clipPath != null) {
        canvas.save();
        canvas.clipPath(clipPath);
      }
      decoration_image.paintImage({canvas: canvas, rect: rect, image: dart.nullCheck(this[_image]).image, debugImageLabel: dart.nullCheck(this[_image]).debugLabel, scale: this[_details$].scale * dart.nullCheck(this[_image]).scale, colorFilter: this[_details$].colorFilter, fit: this[_details$].fit, alignment: this[_details$].alignment.resolve(configuration.textDirection), centerSlice: this[_details$].centerSlice, repeat: this[_details$].repeat, flipHorizontally: flipHorizontally, opacity: this[_details$].opacity, filterQuality: this[_details$].filterQuality, invertColors: this[_details$].invertColors, isAntiAlias: this[_details$].isAntiAlias});
      if (clipPath != null) {
        canvas.restore();
      }
    }
    [_handleImage](value, synchronousCall) {
      let t3;
      if (dart.equals(this[_image], value)) {
        return;
      }
      if (this[_image] != null && dart.nullCheck(this[_image]).isCloneOf(value)) {
        value.dispose();
        return;
      }
      t3 = this[_image];
      t3 == null ? null : t3.dispose();
      this[_image] = value;
      if (!(this[_onChanged$] !== null)) dart.assertFailed(null, I[1], 369, 12, "_onChanged != null");
      if (!synchronousCall) {
        this[_onChanged$]();
      }
    }
    dispose() {
      let t3, t3$;
      t3 = this[_imageStream];
      t3 == null ? null : t3.removeListener(new image_stream.ImageStreamListener.new(dart.bind(this, _handleImage), {onError: this[_details$].onError}));
      t3$ = this[_image];
      t3$ == null ? null : t3$.dispose();
      this[_image] = null;
    }
    toString() {
      return object.objectRuntimeType(this, "DecorationImagePainter") + "(stream: " + dart.str(this[_imageStream]) + ", image: " + dart.str(this[_image]) + ") for " + dart.str(this[_details$]);
    }
  };
  (decoration_image.DecorationImagePainter.__ = function(_details, _onChanged) {
    this[_imageStream] = null;
    this[_image] = null;
    this[_details$] = _details;
    this[_onChanged$] = _onChanged;
    if (!(_details !== null)) dart.assertFailed(null, I[1], 267, 69, "_details != null");
    ;
  }).prototype = decoration_image.DecorationImagePainter.prototype;
  dart.addTypeTests(decoration_image.DecorationImagePainter);
  dart.addTypeCaches(decoration_image.DecorationImagePainter);
  dart.setMethodSignature(decoration_image.DecorationImagePainter, () => ({
    __proto__: dart.getMethods(decoration_image.DecorationImagePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect, dart.nullable(ui.Path), image_provider.ImageConfiguration]),
    [_handleImage]: dart.fnType(dart.void, [image_stream.ImageInfo, core.bool]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(decoration_image.DecorationImagePainter, I[0]);
  dart.setFieldSignature(decoration_image.DecorationImagePainter, () => ({
    __proto__: dart.getFields(decoration_image.DecorationImagePainter.__proto__),
    [_details$]: dart.finalFieldType(decoration_image.DecorationImage),
    [_onChanged$]: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_imageStream]: dart.fieldType(dart.nullable(image_stream.ImageStream)),
    [_image]: dart.fieldType(dart.nullable(image_stream.ImageInfo))
  }));
  dart.defineExtensionMethods(decoration_image.DecorationImagePainter, ['toString']);
  var CkMatrixColorFilter_matrix = dart.privateName(_engine, "CkMatrixColorFilter.matrix");
  decoration_image.debugFlushLastFrameImageSizeInfo = function debugFlushLastFrameImageSizeInfo() {
    if (!dart.fn(() => {
      decoration_image._lastFrameImageSizeInfo = T.LinkedHashSetOfImageSizeInfo().new();
      return true;
    }, T.VoidTobool())()) dart.assertFailed(null, I[1], 409, 10, "() {\n    _lastFrameImageSizeInfo = <ImageSizeInfo>{};\n    return true;\n  }()");
  };
  decoration_image.paintImage = function paintImage(opts) {
    let t3, t3$, t3$0, t3$1, t3$2;
    let canvas = opts && 'canvas' in opts ? opts.canvas : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let debugImageLabel = opts && 'debugImageLabel' in opts ? opts.debugImageLabel : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[5] || CT.C5;
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C[4] || CT.C4;
    let flipHorizontally = opts && 'flipHorizontally' in opts ? opts.flipHorizontally : false;
    let invertColors = opts && 'invertColors' in opts ? opts.invertColors : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[6] || CT.C6;
    let isAntiAlias = opts && 'isAntiAlias' in opts ? opts.isAntiAlias : false;
    if (!(canvas !== null)) dart.assertFailed(null, I[1], 502, 10, "canvas != null");
    if (!(image !== null)) dart.assertFailed(null, I[1], 503, 10, "image != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[1], 504, 10, "alignment != null");
    if (!(repeat !== null)) dart.assertFailed(null, I[1], 505, 10, "repeat != null");
    if (!(flipHorizontally !== null)) dart.assertFailed(null, I[1], 506, 10, "flipHorizontally != null");
    if (!(isAntiAlias !== null)) dart.assertFailed(null, I[1], 507, 10, "isAntiAlias != null");
    if (!dart.test((t3$ = (t3 = image.debugGetOpenHandleStackTraces(), t3 == null ? null : t3[$isNotEmpty]), t3$ == null ? true : t3$))) dart.assertFailed("Cannot paint an image that is disposed.\n" + "The caller of paintImage is expected to wait to dispose the image until " + "after painting has completed.", I[1], 509, 5, "image.debugGetOpenHandleStackTraces()?.isNotEmpty ?? true");
    if (rect.isEmpty) {
      return;
    }
    let outputSize = rect.size;
    let inputSize = new ui.Size.new(image.width[$toDouble](), image.height[$toDouble]());
    let sliceBorder = null;
    if (centerSlice != null) {
      sliceBorder = ui.Offset.as(inputSize['/'](scale)['-'](centerSlice.size));
      outputSize = ui.Size.as(outputSize['-'](sliceBorder));
      inputSize = ui.Size.as(inputSize['-'](sliceBorder['*'](scale)));
    }
    fit == null ? fit = centerSlice == null ? box_fit.BoxFit.scaleDown : box_fit.BoxFit.fill : null;
    if (!(centerSlice == null || fit !== box_fit.BoxFit.none && fit !== box_fit.BoxFit.cover)) dart.assertFailed(null, I[1], 526, 10, "centerSlice == null || (fit != BoxFit.none && fit != BoxFit.cover)");
    let fittedSizes = box_fit.applyBoxFit(fit, inputSize['/'](scale), outputSize);
    let sourceSize = fittedSizes.source['*'](scale);
    let destinationSize = fittedSizes.destination;
    if (centerSlice != null) {
      outputSize = outputSize['+'](dart.nullCheck(sliceBorder));
      destinationSize = destinationSize['+'](sliceBorder);
      if (!sourceSize._equals(inputSize)) dart.assertFailed("centerSlice was used with a BoxFit that does not guarantee that the image is fully visible.", I[1], 535, 12, "sourceSize == inputSize");
    }
    if (repeat !== decoration_image.ImageRepeat.noRepeat && destinationSize._equals(outputSize)) {
      repeat = decoration_image.ImageRepeat.noRepeat;
    }
    let paint = (t3$0 = ui.Paint.new(), (() => {
      t3$0.isAntiAlias = isAntiAlias;
      return t3$0;
    })());
    if (colorFilter != null) {
      paint.colorFilter = colorFilter;
    }
    paint.color = new ui.Color.fromRGBO(0, 0, 0, opacity);
    paint.filterQuality = filterQuality;
    paint.invertColors = invertColors;
    let halfWidthDelta = (outputSize.width - destinationSize.width) / 2.0;
    let halfHeightDelta = (outputSize.height - destinationSize.height) / 2.0;
    let dx = halfWidthDelta + (flipHorizontally ? -alignment.x : alignment.x) * halfWidthDelta;
    let dy = halfHeightDelta + alignment.y * halfHeightDelta;
    let destinationPosition = rect.topLeft.translate(dx, dy);
    let destinationRect = destinationPosition['&'](destinationSize);
    let invertedCanvas = false;
    {
      let sizeInfo = new debug.ImageSizeInfo.new({source: (t3$1 = debugImageLabel, t3$1 == null ? "<Unknown Image(" + dart.str(image.width) + "×" + dart.str(image.height) + ")>" : t3$1), imageSize: new ui.Size.new(image.width[$toDouble](), image.height[$toDouble]()), displaySize: outputSize['*'](binding.PaintingBinding.instance.window.devicePixelRatio)});
      if (!dart.fn(() => {
        let t3;
        if (debug.debugInvertOversizedImages && sizeInfo.decodedSizeInBytes > sizeInfo.displaySizeInBytes + debug.debugImageOverheadAllowance) {
          let overheadInKilobytes = ((sizeInfo.decodedSizeInBytes - sizeInfo.displaySizeInBytes) / 1024)[$truncate]();
          let outputWidth = sizeInfo.displaySize.width[$toInt]();
          let outputHeight = sizeInfo.displaySize.height[$toInt]();
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: "Image " + dart.str(debugImageLabel) + " has a display size of " + dart.str(outputWidth) + "×" + dart.str(outputHeight) + " but a decode size of " + dart.str(image.width) + "×" + dart.str(image.height) + ", which uses an additional " + dart.str(overheadInKilobytes) + "KB.\n\n" + "Consider resizing the asset ahead of time, supplying a cacheWidth " + "parameter of " + dart.str(outputWidth) + ", a cacheHeight parameter of " + dart.str(outputHeight) + ", or using a ResizeImage.", library: "painting library", context: new assertions.ErrorDescription.new("while painting an image")}));
          canvas.saveLayer(destinationRect, (t3 = ui.Paint.new(), (() => {
            t3.colorFilter = C[7] || CT.C7;
            return t3;
          })()));
          let dy = -(rect.top + rect.height / 2.0);
          canvas.translate(0.0, -dy);
          canvas.scale(1.0, -1.0);
          canvas.translate(0.0, dy);
          invertedCanvas = true;
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 569, 12, "() {\n      if (debugInvertOversizedImages &&\n          sizeInfo.decodedSizeInBytes > sizeInfo.displaySizeInBytes + debugImageOverheadAllowance) {\n        final int overheadInKilobytes = (sizeInfo.decodedSizeInBytes - sizeInfo.displaySizeInBytes) ~/ 1024;\n        final int outputWidth = sizeInfo.displaySize.width.toInt();\n        final int outputHeight = sizeInfo.displaySize.height.toInt();\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: 'Image $debugImageLabel has a display size of '\n            '$outputWidth×$outputHeight but a decode size of '\n            '${image.width}×${image.height}, which uses an additional '\n            '${overheadInKilobytes}KB.\\n\\n'\n            'Consider resizing the asset ahead of time, supplying a cacheWidth '\n            'parameter of $outputWidth, a cacheHeight parameter of '\n            '$outputHeight, or using a ResizeImage.',\n          library: 'painting library',\n          context: ErrorDescription('while painting an image'),\n        ));\n        // Invert the colors of the canvas.\n        canvas.saveLayer(\n          destinationRect,\n          Paint()..colorFilter = const ColorFilter.matrix(<double>[\n            -1,  0,  0, 0, 255,\n             0, -1,  0, 0, 255,\n             0,  0, -1, 0, 255,\n             0,  0,  0, 1,   0,\n          ]),\n        );\n        // Flip the canvas vertically.\n        final double dy = -(rect.top + rect.height / 2.0);\n        canvas.translate(0.0, -dy);\n        canvas.scale(1.0, -1.0);\n        canvas.translate(0.0, dy);\n        invertedCanvas = true;\n      }\n      return true;\n    }()");
      if (!decoration_image._lastFrameImageSizeInfo.contains(sizeInfo)) {
        let existingSizeInfo = decoration_image._pendingImageSizeInfo[$_get](sizeInfo.source);
        if (existingSizeInfo == null || existingSizeInfo.displaySizeInBytes < sizeInfo.displaySizeInBytes) {
          decoration_image._pendingImageSizeInfo[$_set](dart.nullCheck(sizeInfo.source), sizeInfo);
        }
        t3$2 = debug.debugOnPaintImage;
        t3$2 == null ? null : t3$2(sizeInfo);
        binding$.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timeStamp => {
          decoration_image._lastFrameImageSizeInfo = decoration_image._pendingImageSizeInfo[$values][$toSet]();
          if (decoration_image._pendingImageSizeInfo[$isEmpty]) {
            return;
          }
          developer.postEvent("Flutter.ImageSizesForFrame", (() => {
            let t3 = new (T.IdentityMapOfString$Object()).new();
            for (let imageSizeInfo of decoration_image._pendingImageSizeInfo[$values])
              t3[$_set](dart.nullCheck(imageSizeInfo.source), imageSizeInfo.toJson());
            return t3;
          })());
          decoration_image._pendingImageSizeInfo = new (T.IdentityMapOfString$ImageSizeInfo()).new();
        }, T.DurationTovoid()));
      }
    }
    let needSave = centerSlice != null || repeat !== decoration_image.ImageRepeat.noRepeat || flipHorizontally;
    if (needSave) {
      canvas.save();
    }
    if (repeat !== decoration_image.ImageRepeat.noRepeat) {
      canvas.clipRect(rect);
    }
    if (flipHorizontally) {
      let dx = -(rect.left + rect.width / 2.0);
      canvas.translate(-dx, 0.0);
      canvas.scale(-1.0, 1.0);
      canvas.translate(dx, 0.0);
    }
    if (centerSlice == null) {
      let sourceRect = alignment.inscribe(sourceSize, ui.Offset.zero['&'](inputSize));
      if (repeat === decoration_image.ImageRepeat.noRepeat) {
        canvas.drawImageRect(image, sourceRect, destinationRect, paint);
      } else {
        for (let tileRect of decoration_image._generateImageTileRects(rect, destinationRect, repeat)) {
          canvas.drawImageRect(image, sourceRect, tileRect, paint);
        }
      }
    } else {
      canvas.scale(1 / scale);
      if (repeat === decoration_image.ImageRepeat.noRepeat) {
        canvas.drawImageNine(image, decoration_image._scaleRect(centerSlice, scale), decoration_image._scaleRect(destinationRect, scale), paint);
      } else {
        for (let tileRect of decoration_image._generateImageTileRects(rect, destinationRect, repeat)) {
          canvas.drawImageNine(image, decoration_image._scaleRect(centerSlice, scale), decoration_image._scaleRect(tileRect, scale), paint);
        }
      }
    }
    if (needSave) {
      canvas.restore();
    }
    if (invertedCanvas) {
      canvas.restore();
    }
  };
  decoration_image._generateImageTileRects = function _generateImageTileRects(outputRect, fundamentalRect, repeat) {
    let startX = 0;
    let startY = 0;
    let stopX = 0;
    let stopY = 0;
    let strideX = fundamentalRect.width;
    let strideY = fundamentalRect.height;
    if (repeat === decoration_image.ImageRepeat.repeat || repeat === decoration_image.ImageRepeat.repeatX) {
      startX = ((outputRect.left - fundamentalRect.left) / strideX)[$floor]();
      stopX = ((outputRect.right - fundamentalRect.right) / strideX)[$ceil]();
    }
    if (repeat === decoration_image.ImageRepeat.repeat || repeat === decoration_image.ImageRepeat.repeatY) {
      startY = ((outputRect.top - fundamentalRect.top) / strideY)[$floor]();
      stopY = ((outputRect.bottom - fundamentalRect.bottom) / strideY)[$ceil]();
    }
    return (() => {
      let t4 = T.JSArrayOfRect().of([]);
      for (let i = startX; i <= stopX; i = i + 1)
        for (let j = startY; j <= stopY; j = j + 1)
          t4.push(fundamentalRect.shift(new ui.Offset.new(i * strideX, j * strideY)));
      return t4;
    })();
  };
  decoration_image._scaleRect = function _scaleRect(rect, scale) {
    return new ui.Rect.fromLTRB(rect.left * scale, rect.top * scale, rect.right * scale, rect.bottom * scale);
  };
  dart.defineLazy(decoration_image, {
    /*decoration_image._pendingImageSizeInfo*/get _pendingImageSizeInfo() {
      return new (T.IdentityMapOfString$ImageSizeInfo()).new();
    },
    set _pendingImageSizeInfo(_) {},
    /*decoration_image._lastFrameImageSizeInfo*/get _lastFrameImageSizeInfo() {
      return T.LinkedHashSetOfImageSizeInfo().new();
    },
    set _lastFrameImageSizeInfo(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/decoration_image.dart", {
    "package:flutter/src/painting/decoration_image.dart": decoration_image
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["decoration_image.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/decoration_image.dart.lib.js"}');
  // Exports:
  return {
    src__painting__decoration_image: decoration_image
  };
}));

//# sourceMappingURL=decoration_image.dart.lib.js.map