define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/scheduler/binding.dart'], (function load__packages__flutter__src__painting__image_stream_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__scheduler__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  var image_stream = Object.create(dart.library);
  var $length = dartx.length;
  var $runtimeType = dartx.runtimeType;
  var $_equals = dartx._equals;
  var $forEach = dartx.forEach;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $removeAt = dartx.removeAt;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $toList = dartx.toList;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $map = dartx.map;
  var $whereType = dartx.whereType;
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfImageStreamListener: () => (T.JSArrayOfImageStreamListener = dart.constFn(_interceptors.JSArray$(image_stream.ImageStreamListener)))(),
    ObjectFlagPropertyOfImageStreamCompleter: () => (T.ObjectFlagPropertyOfImageStreamCompleter = dart.constFn(diagnostics.ObjectFlagProperty$(image_stream.ImageStreamCompleter)))(),
    ListOfImageStreamListener: () => (T.ListOfImageStreamListener = dart.constFn(core.List$(image_stream.ImageStreamListener)))(),
    ObjectFlagPropertyOfListOfImageStreamListener: () => (T.ObjectFlagPropertyOfListOfImageStreamListener = dart.constFn(diagnostics.ObjectFlagProperty$(T.ListOfImageStreamListener())))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfVoidTovoid: () => (T.JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(T.VoidTovoid())))(),
    StackTraceN: () => (T.StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))(),
    ObjectAndStackTraceNTovoid: () => (T.ObjectAndStackTraceNTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, T.StackTraceN()])))(),
    ObjectAndStackTraceNToNvoid: () => (T.ObjectAndStackTraceNToNvoid = dart.constFn(dart.nullable(T.ObjectAndStackTraceNTovoid())))(),
    ImageStreamListenerToFn: () => (T.ImageStreamListenerToFn = dart.constFn(dart.fnType(T.ObjectAndStackTraceNToNvoid(), [image_stream.ImageStreamListener])))(),
    ImageChunkEventTovoid: () => (T.ImageChunkEventTovoid = dart.constFn(dart.fnType(dart.void, [image_stream.ImageChunkEvent])))(),
    ImageChunkEventToNvoid: () => (T.ImageChunkEventToNvoid = dart.constFn(dart.nullable(T.ImageChunkEventTovoid())))(),
    ImageStreamListenerToFn$1: () => (T.ImageStreamListenerToFn$1 = dart.constFn(dart.fnType(T.ImageChunkEventToNvoid(), [image_stream.ImageStreamListener])))(),
    DiagnosticsPropertyOfImageInfo: () => (T.DiagnosticsPropertyOfImageInfo = dart.constFn(diagnostics.DiagnosticsProperty$(image_stream.ImageInfo)))(),
    ObjectAndStackTraceToNull: () => (T.ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/image_stream.dart",
    "package:flutter/src/painting/image_stream.dart"
  ];
  var image$ = dart.privateName(image_stream, "ImageInfo.image");
  var scale$ = dart.privateName(image_stream, "ImageInfo.scale");
  var debugLabel$ = dart.privateName(image_stream, "ImageInfo.debugLabel");
  image_stream.ImageInfo = class ImageInfo extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    static ['_#new#tearOff'](opts) {
      let image = opts && 'image' in opts ? opts.image : null;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      return new image_stream.ImageInfo.new({image: image, scale: scale, debugLabel: debugLabel});
    }
    clone() {
      return new image_stream.ImageInfo.new({image: this.image.clone(), scale: this.scale, debugLabel: this.debugLabel});
    }
    isCloneOf(other) {
      return other.image.isCloneOf(this.image) && this.scale === this.scale && other.debugLabel == this.debugLabel;
    }
    get sizeBytes() {
      return this.image.height * this.image.width * 4;
    }
    dispose() {
      let t0, t0$;
      if (!(dart.notNull((t0$ = (t0 = this.image.debugGetOpenHandleStackTraces(), t0 == null ? null : t0[$length]), t0$ == null ? 1 : t0$)) > 0)) dart.assertFailed(null, I[0], 124, 12, "(image.debugGetOpenHandleStackTraces()?.length ?? 1) > 0");
      this.image.dispose();
    }
    toString() {
      return (this.debugLabel != null ? dart.str(this.debugLabel) + " " : "") + dart.str(this.image) + " @ " + debug.debugFormatDouble(this.scale) + "x";
    }
    get hashCode() {
      return core.Object.hash(this.image, this.scale, this.debugLabel);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_stream.ImageInfo.is(other) && other.image[$_equals](this.image) && other.scale === this.scale && other.debugLabel == this.debugLabel;
    }
  };
  (image_stream.ImageInfo.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    this[image$] = image;
    this[scale$] = scale;
    this[debugLabel$] = debugLabel;
    if (!(image !== null)) dart.assertFailed(null, I[0], 27, 14, "image != null");
    if (!(scale !== null)) dart.assertFailed(null, I[0], 28, 14, "scale != null");
    ;
  }).prototype = image_stream.ImageInfo.prototype;
  dart.addTypeTests(image_stream.ImageInfo);
  dart.addTypeCaches(image_stream.ImageInfo);
  dart.setMethodSignature(image_stream.ImageInfo, () => ({
    __proto__: dart.getMethods(image_stream.ImageInfo.__proto__),
    clone: dart.fnType(image_stream.ImageInfo, []),
    isCloneOf: dart.fnType(core.bool, [image_stream.ImageInfo]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(image_stream.ImageInfo, () => ({
    __proto__: dart.getGetters(image_stream.ImageInfo.__proto__),
    sizeBytes: core.int
  }));
  dart.setLibraryUri(image_stream.ImageInfo, I[1]);
  dart.setFieldSignature(image_stream.ImageInfo, () => ({
    __proto__: dart.getFields(image_stream.ImageInfo.__proto__),
    image: dart.finalFieldType(ui.Image),
    scale: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(image_stream.ImageInfo, ['toString', '_equals']);
  dart.defineExtensionAccessors(image_stream.ImageInfo, ['hashCode']);
  var onImage$ = dart.privateName(image_stream, "ImageStreamListener.onImage");
  var onChunk$ = dart.privateName(image_stream, "ImageStreamListener.onChunk");
  var onError$ = dart.privateName(image_stream, "ImageStreamListener.onError");
  image_stream.ImageStreamListener = class ImageStreamListener extends core.Object {
    get onImage() {
      return this[onImage$];
    }
    set onImage(value) {
      super.onImage = value;
    }
    get onChunk() {
      return this[onChunk$];
    }
    set onChunk(value) {
      super.onChunk = value;
    }
    get onError() {
      return this[onError$];
    }
    set onError(value) {
      super.onError = value;
    }
    static ['_#new#tearOff'](onImage, opts) {
      let onChunk = opts && 'onChunk' in opts ? opts.onChunk : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      return new image_stream.ImageStreamListener.new(onImage, {onChunk: onChunk, onError: onError});
    }
    get hashCode() {
      return core.Object.hash(this.onImage, this.onChunk, this.onError);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_stream.ImageStreamListener.is(other) && other.onImage[$_equals](this.onImage) && dart.equals(other.onChunk, this.onChunk) && dart.equals(other.onError, this.onError);
    }
  };
  (image_stream.ImageStreamListener.new = function(onImage, opts) {
    let onChunk = opts && 'onChunk' in opts ? opts.onChunk : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    this[onImage$] = onImage;
    this[onChunk$] = onChunk;
    this[onError$] = onError;
    if (!(onImage !== null)) dart.assertFailed(null, I[0], 165, 15, "onImage != null");
    ;
  }).prototype = image_stream.ImageStreamListener.prototype;
  dart.addTypeTests(image_stream.ImageStreamListener);
  dart.addTypeCaches(image_stream.ImageStreamListener);
  dart.setLibraryUri(image_stream.ImageStreamListener, I[1]);
  dart.setFieldSignature(image_stream.ImageStreamListener, () => ({
    __proto__: dart.getFields(image_stream.ImageStreamListener.__proto__),
    onImage: dart.finalFieldType(dart.fnType(dart.void, [image_stream.ImageInfo, core.bool])),
    onChunk: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [image_stream.ImageChunkEvent]))),
    onError: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)])))
  }));
  dart.defineExtensionMethods(image_stream.ImageStreamListener, ['_equals']);
  dart.defineExtensionAccessors(image_stream.ImageStreamListener, ['hashCode']);
  var cumulativeBytesLoaded$ = dart.privateName(image_stream, "ImageChunkEvent.cumulativeBytesLoaded");
  var expectedTotalBytes$ = dart.privateName(image_stream, "ImageChunkEvent.expectedTotalBytes");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  image_stream.ImageChunkEvent = class ImageChunkEvent extends Object_Diagnosticable$36 {
    get cumulativeBytesLoaded() {
      return this[cumulativeBytesLoaded$];
    }
    set cumulativeBytesLoaded(value) {
      super.cumulativeBytesLoaded = value;
    }
    get expectedTotalBytes() {
      return this[expectedTotalBytes$];
    }
    set expectedTotalBytes(value) {
      super.expectedTotalBytes = value;
    }
    static ['_#new#tearOff'](opts) {
      let cumulativeBytesLoaded = opts && 'cumulativeBytesLoaded' in opts ? opts.cumulativeBytesLoaded : null;
      let expectedTotalBytes = opts && 'expectedTotalBytes' in opts ? opts.expectedTotalBytes : null;
      return new image_stream.ImageChunkEvent.new({cumulativeBytesLoaded: cumulativeBytesLoaded, expectedTotalBytes: expectedTotalBytes});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("cumulativeBytesLoaded", this.cumulativeBytesLoaded));
      properties.add(new diagnostics.IntProperty.new("expectedTotalBytes", this.expectedTotalBytes));
    }
  };
  (image_stream.ImageChunkEvent.new = function(opts) {
    let cumulativeBytesLoaded = opts && 'cumulativeBytesLoaded' in opts ? opts.cumulativeBytesLoaded : null;
    let expectedTotalBytes = opts && 'expectedTotalBytes' in opts ? opts.expectedTotalBytes : null;
    this[cumulativeBytesLoaded$] = cumulativeBytesLoaded;
    this[expectedTotalBytes$] = expectedTotalBytes;
    if (!(cumulativeBytesLoaded >= 0)) dart.assertFailed(null, I[0], 268, 15, "cumulativeBytesLoaded >= 0");
    if (!(expectedTotalBytes == null || dart.notNull(expectedTotalBytes) >= 0)) dart.assertFailed(null, I[0], 269, 15, "expectedTotalBytes == null || expectedTotalBytes >= 0");
    ;
  }).prototype = image_stream.ImageChunkEvent.prototype;
  dart.addTypeTests(image_stream.ImageChunkEvent);
  dart.addTypeCaches(image_stream.ImageChunkEvent);
  dart.setLibraryUri(image_stream.ImageChunkEvent, I[1]);
  dart.setFieldSignature(image_stream.ImageChunkEvent, () => ({
    __proto__: dart.getFields(image_stream.ImageChunkEvent.__proto__),
    cumulativeBytesLoaded: dart.finalFieldType(core.int),
    expectedTotalBytes: dart.finalFieldType(dart.nullable(core.int))
  }));
  var _completer$ = dart.privateName(image_stream, "_completer");
  var _listeners = dart.privateName(image_stream, "_listeners");
  var _addingInitialListeners = dart.privateName(image_stream, "_addingInitialListeners");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  image_stream.ImageStream = class ImageStream extends Object_Diagnosticable$36$ {
    static ['_#new#tearOff']() {
      return new image_stream.ImageStream.new();
    }
    get completer() {
      return this[_completer$];
    }
    setCompleter(value) {
      if (!(this[_completer$] == null)) dart.assertFailed(null, I[0], 339, 12, "_completer == null");
      this[_completer$] = value;
      if (this[_listeners] != null) {
        let initialListeners = dart.nullCheck(this[_listeners]);
        this[_listeners] = null;
        dart.nullCheck(this[_completer$])[_addingInitialListeners] = true;
        initialListeners[$forEach](dart.bind(dart.nullCheck(this[_completer$]), 'addListener'));
        dart.nullCheck(this[_completer$])[_addingInitialListeners] = false;
      }
    }
    addListener(listener) {
      if (this[_completer$] != null) {
        return dart.nullCheck(this[_completer$]).addListener(listener);
      }
      this[_listeners] == null ? this[_listeners] = T.JSArrayOfImageStreamListener().of([]) : null;
      dart.nullCheck(this[_listeners])[$add](listener);
    }
    removeListener(listener) {
      if (this[_completer$] != null) {
        return dart.nullCheck(this[_completer$]).removeListener(listener);
      }
      if (!(this[_listeners] != null)) dart.assertFailed(null, I[0], 387, 12, "_listeners != null");
      for (let i = 0; i < dart.nullCheck(this[_listeners])[$length]; i = i + 1) {
        if (dart.nullCheck(this[_listeners])[$_get](i)._equals(listener)) {
          dart.nullCheck(this[_listeners])[$removeAt](i);
          break;
        }
      }
    }
    get key() {
      let t0;
      t0 = this[_completer$];
      return t0 == null ? this : t0;
    }
    debugFillProperties(properties) {
      let t0, t0$, t0$0, t0$1;
      super.debugFillProperties(properties);
      properties.add(new (T.ObjectFlagPropertyOfImageStreamCompleter()).new("completer", this[_completer$], {ifPresent: (t0 = this[_completer$], t0 == null ? null : t0.toStringShort()), ifNull: "unresolved"}));
      properties.add(new (T.ObjectFlagPropertyOfListOfImageStreamListener()).new("listeners", this[_listeners], {ifPresent: dart.str((t0$ = this[_listeners], t0$ == null ? null : t0$[$length])) + " listener" + ((t0$0 = this[_listeners], t0$0 == null ? null : t0$0[$length]) === 1 ? "" : "s"), ifNull: "no listeners", level: this[_completer$] != null ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info}));
      t0$1 = this[_completer$];
      t0$1 == null ? null : t0$1.debugFillProperties(properties);
    }
  };
  (image_stream.ImageStream.new = function() {
    this[_completer$] = null;
    this[_listeners] = null;
    ;
  }).prototype = image_stream.ImageStream.prototype;
  dart.addTypeTests(image_stream.ImageStream);
  dart.addTypeCaches(image_stream.ImageStream);
  dart.setMethodSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getMethods(image_stream.ImageStream.__proto__),
    setCompleter: dart.fnType(dart.void, [image_stream.ImageStreamCompleter]),
    addListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    removeListener: dart.fnType(dart.void, [image_stream.ImageStreamListener])
  }));
  dart.setGetterSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getGetters(image_stream.ImageStream.__proto__),
    completer: dart.nullable(image_stream.ImageStreamCompleter),
    key: core.Object
  }));
  dart.setLibraryUri(image_stream.ImageStream, I[1]);
  dart.setFieldSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getFields(image_stream.ImageStream.__proto__),
    [_completer$]: dart.fieldType(dart.nullable(image_stream.ImageStreamCompleter)),
    [_listeners]: dart.fieldType(dart.nullable(core.List$(image_stream.ImageStreamListener)))
  }));
  var _keepAliveHandles = dart.privateName(image_stream, "_keepAliveHandles");
  var _disposed = dart.privateName(image_stream, "_disposed");
  var _maybeDispose = dart.privateName(image_stream, "_maybeDispose");
  image_stream.ImageStreamCompleterHandle = class ImageStreamCompleterHandle extends core.Object {
    static ['_#_#tearOff'](_completer) {
      return new image_stream.ImageStreamCompleterHandle.__(_completer);
    }
    dispose() {
      let t0;
      if (!(this[_completer$] != null)) dart.assertFailed(null, I[0], 450, 12, "_completer != null");
      if (!(dart.nullCheck(this[_completer$])[_keepAliveHandles] > 0)) dart.assertFailed(null, I[0], 451, 12, "_completer!._keepAliveHandles > 0");
      if (!!dart.nullCheck(this[_completer$])[_disposed]) dart.assertFailed(null, I[0], 452, 12, "!_completer!._disposed");
      t0 = dart.nullCheck(this[_completer$]);
      t0[_keepAliveHandles] = t0[_keepAliveHandles] - 1;
      dart.nullCheck(this[_completer$])[_maybeDispose]();
      this[_completer$] = null;
    }
  };
  (image_stream.ImageStreamCompleterHandle.__ = function(_completer) {
    let t0;
    this[_completer$] = _completer;
    t0 = dart.nullCheck(this[_completer$]);
    t0[_keepAliveHandles] = t0[_keepAliveHandles] + 1;
  }).prototype = image_stream.ImageStreamCompleterHandle.prototype;
  dart.addTypeTests(image_stream.ImageStreamCompleterHandle);
  dart.addTypeCaches(image_stream.ImageStreamCompleterHandle);
  dart.setMethodSignature(image_stream.ImageStreamCompleterHandle, () => ({
    __proto__: dart.getMethods(image_stream.ImageStreamCompleterHandle.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(image_stream.ImageStreamCompleterHandle, I[1]);
  dart.setFieldSignature(image_stream.ImageStreamCompleterHandle, () => ({
    __proto__: dart.getFields(image_stream.ImageStreamCompleterHandle.__proto__),
    [_completer$]: dart.fieldType(dart.nullable(image_stream.ImageStreamCompleter))
  }));
  var debugLabel = dart.privateName(image_stream, "ImageStreamCompleter.debugLabel");
  var _currentImage = dart.privateName(image_stream, "_currentImage");
  var _currentError = dart.privateName(image_stream, "_currentError");
  var _hadAtLeastOneListener = dart.privateName(image_stream, "_hadAtLeastOneListener");
  var _onLastListenerRemovedCallbacks = dart.privateName(image_stream, "_onLastListenerRemovedCallbacks");
  var _checkDisposed = dart.privateName(image_stream, "_checkDisposed");
  const Object_Diagnosticable$36$0 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$0.new = function() {
  }).prototype = Object_Diagnosticable$36$0.prototype;
  dart.applyMixin(Object_Diagnosticable$36$0, diagnostics.Diagnosticable);
  image_stream.ImageStreamCompleter = class ImageStreamCompleter extends Object_Diagnosticable$36$0 {
    get debugLabel() {
      return this[debugLabel];
    }
    set debugLabel(value) {
      this[debugLabel] = value;
    }
    get hasListeners() {
      return this[_listeners][$isNotEmpty];
    }
    addListener(listener) {
      let t2, t1, t0;
      this[_checkDisposed]();
      this[_hadAtLeastOneListener] = true;
      this[_listeners][$add](listener);
      if (this[_currentImage] != null) {
        try {
          t0 = listener;
          t1 = dart.nullCheck(this[_currentImage]).clone();
          t2 = !this[_addingInitialListeners];
          t0.onImage(t1, t2);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            this.reportError({context: new assertions.ErrorDescription.new("by a synchronously-called image listener"), exception: exception, stack: stack});
          } else
            throw e;
        }
      }
      if (this[_currentError] != null && listener.onError != null) {
        try {
          dart.nullCheck(listener.onError)(dart.nullCheck(this[_currentError]).exception, dart.nullCheck(this[_currentError]).stack);
        } catch (e$) {
          let newException = dart.getThrown(e$);
          let newStack = dart.stackTrace(e$);
          if (core.Object.is(newException)) {
            if (!newException[$_equals](dart.nullCheck(this[_currentError]).exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: newException, library: "image resource service", context: new assertions.ErrorDescription.new("by a synchronously-called image error listener"), stack: newStack}));
            }
          } else
            throw e$;
        }
      }
    }
    keepAlive() {
      this[_checkDisposed]();
      return new image_stream.ImageStreamCompleterHandle.__(this);
    }
    removeListener(listener) {
      this[_checkDisposed]();
      for (let i = 0; i < this[_listeners][$length]; i = i + 1) {
        if (this[_listeners][$_get](i)._equals(listener)) {
          this[_listeners][$removeAt](i);
          break;
        }
      }
      if (this[_listeners][$isEmpty]) {
        let callbacks = this[_onLastListenerRemovedCallbacks][$toList]();
        for (let callback of callbacks) {
          callback();
        }
        this[_onLastListenerRemovedCallbacks][$clear]();
        this[_maybeDispose]();
      }
    }
    [_maybeDispose]() {
      let t2;
      if (!this[_hadAtLeastOneListener] || this[_disposed] || this[_listeners][$isNotEmpty] || this[_keepAliveHandles] !== 0) {
        return;
      }
      t2 = this[_currentImage];
      t2 == null ? null : t2.dispose();
      this[_currentImage] = null;
      this[_disposed] = true;
    }
    [_checkDisposed]() {
      if (this[_disposed]) {
        dart.throw(new core.StateError.new("Stream has been disposed.\n" + "An ImageStream is considered disposed once at least one listener has " + "been added and subsequently all listeners have been removed and no " + "handles are outstanding from the keepAlive method.\n" + "To resolve this error, maintain at least one listener on the stream, " + "or create an ImageStreamCompleterHandle from the keepAlive " + "method, or create a new stream for the image."));
      }
    }
    addOnLastListenerRemovedCallback(callback) {
      if (!(callback !== null)) dart.assertFailed(null, I[0], 621, 12, "callback != null");
      this[_checkDisposed]();
      this[_onLastListenerRemovedCallbacks][$add](callback);
    }
    removeOnLastListenerRemovedCallback(callback) {
      if (!(callback !== null)) dart.assertFailed(null, I[0], 629, 12, "callback != null");
      this[_checkDisposed]();
      this[_onLastListenerRemovedCallbacks][$remove](callback);
    }
    setImage(image) {
      let t2, t4, t3, t2$;
      this[_checkDisposed]();
      t2 = this[_currentImage];
      t2 == null ? null : t2.dispose();
      this[_currentImage] = image;
      if (this[_listeners][$isEmpty]) {
        return;
      }
      let localListeners = T.ListOfImageStreamListener().of(this[_listeners]);
      for (let listener of localListeners) {
        try {
          t2$ = listener;
          t3 = image.clone();
          t4 = false;
          t2$.onImage(t3, t4);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            this.reportError({context: new assertions.ErrorDescription.new("by an image listener"), exception: exception, stack: stack});
          } else
            throw e;
        }
      }
    }
    reportError(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let silent = opts && 'silent' in opts ? opts.silent : false;
      this[_currentError] = new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "image resource service", context: context, informationCollector: informationCollector, silent: silent});
      let localErrorListeners = this[_listeners][$map](T.ObjectAndStackTraceNToNvoid(), dart.fn(listener => listener.onError, T.ImageStreamListenerToFn()))[$whereType](T.ObjectAndStackTraceNTovoid())[$toList]();
      let handled = false;
      for (let errorListener of localErrorListeners) {
        try {
          errorListener(exception, stack);
          handled = true;
        } catch (e) {
          let newException = dart.getThrown(e);
          let newStack = dart.stackTrace(e);
          if (core.Object.is(newException)) {
            if (!newException[$_equals](exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({context: new assertions.ErrorDescription.new("when reporting an error to an image listener"), library: "image resource service", exception: newException, stack: newStack}));
            }
          } else
            throw e;
        }
      }
      if (!handled) {
        assertions.FlutterError.reportError(dart.nullCheck(this[_currentError]));
      }
    }
    reportImageChunkEvent(event) {
      this[_checkDisposed]();
      if (this.hasListeners) {
        let localListeners = this[_listeners][$map](T.ImageChunkEventToNvoid(), dart.fn(listener => listener.onChunk, T.ImageStreamListenerToFn$1()))[$whereType](T.ImageChunkEventTovoid())[$toList]();
        for (let listener of localListeners) {
          listener(event);
        }
      }
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T.DiagnosticsPropertyOfImageInfo()).new("current", this[_currentImage], {ifNull: "unresolved", showName: false}));
      description.add(new (T.ObjectFlagPropertyOfListOfImageStreamListener()).new("listeners", this[_listeners], {ifPresent: dart.str(this[_listeners][$length]) + " listener" + (this[_listeners][$length] === 1 ? "" : "s")}));
      description.add(new diagnostics.FlagProperty.new("disposed", {value: this[_disposed], ifTrue: "<disposed>"}));
    }
  };
  (image_stream.ImageStreamCompleter.new = function() {
    this[_listeners] = T.JSArrayOfImageStreamListener().of([]);
    this[_currentImage] = null;
    this[_currentError] = null;
    this[debugLabel] = null;
    this[_hadAtLeastOneListener] = false;
    this[_addingInitialListeners] = false;
    this[_keepAliveHandles] = 0;
    this[_disposed] = false;
    this[_onLastListenerRemovedCallbacks] = T.JSArrayOfVoidTovoid().of([]);
    ;
  }).prototype = image_stream.ImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.ImageStreamCompleter);
  dart.addTypeCaches(image_stream.ImageStreamCompleter);
  dart.setMethodSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getMethods(image_stream.ImageStreamCompleter.__proto__),
    addListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    keepAlive: dart.fnType(image_stream.ImageStreamCompleterHandle, []),
    removeListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    [_maybeDispose]: dart.fnType(dart.void, []),
    [_checkDisposed]: dart.fnType(dart.void, []),
    addOnLastListenerRemovedCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeOnLastListenerRemovedCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    setImage: dart.fnType(dart.void, [image_stream.ImageInfo]),
    reportError: dart.fnType(dart.void, [], {context: dart.nullable(diagnostics.DiagnosticsNode), informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])), silent: core.bool, stack: dart.nullable(core.StackTrace)}, {exception: core.Object}),
    reportImageChunkEvent: dart.fnType(dart.void, [image_stream.ImageChunkEvent])
  }));
  dart.setGetterSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getGetters(image_stream.ImageStreamCompleter.__proto__),
    hasListeners: core.bool
  }));
  dart.setLibraryUri(image_stream.ImageStreamCompleter, I[1]);
  dart.setFieldSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getFields(image_stream.ImageStreamCompleter.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(image_stream.ImageStreamListener)),
    [_currentImage]: dart.fieldType(dart.nullable(image_stream.ImageInfo)),
    [_currentError]: dart.fieldType(dart.nullable(assertions.FlutterErrorDetails)),
    debugLabel: dart.fieldType(dart.nullable(core.String)),
    [_hadAtLeastOneListener]: dart.fieldType(core.bool),
    [_addingInitialListeners]: dart.fieldType(core.bool),
    [_keepAliveHandles]: dart.fieldType(core.int),
    [_disposed]: dart.fieldType(core.bool),
    [_onLastListenerRemovedCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [])))
  }));
  image_stream.OneFrameImageStreamCompleter = class OneFrameImageStreamCompleter extends image_stream.ImageStreamCompleter {
    static ['_#new#tearOff'](image, opts) {
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      return new image_stream.OneFrameImageStreamCompleter.new(image, {informationCollector: informationCollector});
    }
  };
  (image_stream.OneFrameImageStreamCompleter.new = function(image, opts) {
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    if (!(image !== null)) dart.assertFailed(null, I[0], 788, 16, "image != null");
    image_stream.OneFrameImageStreamCompleter.__proto__.new.call(this);
    image.then(dart.void, dart.bind(this, 'setImage'), {onError: dart.fn((error, stack) => {
        this.reportError({context: new assertions.ErrorDescription.new("resolving a single-frame image stream"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, T.ObjectAndStackTraceToNull())});
  }).prototype = image_stream.OneFrameImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.OneFrameImageStreamCompleter);
  dart.addTypeCaches(image_stream.OneFrameImageStreamCompleter);
  dart.setLibraryUri(image_stream.OneFrameImageStreamCompleter, I[1]);
  var _chunkSubscription = dart.privateName(image_stream, "_chunkSubscription");
  var _codec = dart.privateName(image_stream, "_codec");
  var _nextFrame = dart.privateName(image_stream, "_nextFrame");
  var __MultiFrameImageStreamCompleter__shownTimestamp = dart.privateName(image_stream, "_#MultiFrameImageStreamCompleter#_shownTimestamp");
  var _frameDuration = dart.privateName(image_stream, "_frameDuration");
  var _framesEmitted = dart.privateName(image_stream, "_framesEmitted");
  var _timer = dart.privateName(image_stream, "_timer");
  var _frameCallbackScheduled = dart.privateName(image_stream, "_frameCallbackScheduled");
  var _informationCollector = dart.privateName(image_stream, "_informationCollector");
  var _scale = dart.privateName(image_stream, "_scale");
  var _handleCodecReady = dart.privateName(image_stream, "_handleCodecReady");
  var _shownTimestamp = dart.privateName(image_stream, "_shownTimestamp");
  var _decodeNextFrameAndSchedule = dart.privateName(image_stream, "_decodeNextFrameAndSchedule");
  var _isFirstFrame = dart.privateName(image_stream, "_isFirstFrame");
  var _hasFrameDurationPassed = dart.privateName(image_stream, "_hasFrameDurationPassed");
  var _emitFrame = dart.privateName(image_stream, "_emitFrame");
  var _scheduleAppFrame = dart.privateName(image_stream, "_scheduleAppFrame");
  var _handleAppFrame = dart.privateName(image_stream, "_handleAppFrame");
  image_stream.MultiFrameImageStreamCompleter = class MultiFrameImageStreamCompleter extends image_stream.ImageStreamCompleter {
    static ['_#new#tearOff'](opts) {
      let codec = opts && 'codec' in opts ? opts.codec : null;
      let scale = opts && 'scale' in opts ? opts.scale : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let chunkEvents = opts && 'chunkEvents' in opts ? opts.chunkEvents : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: codec, scale: scale, debugLabel: debugLabel, chunkEvents: chunkEvents, informationCollector: informationCollector});
    }
    get [_shownTimestamp]() {
      let t4;
      t4 = this[__MultiFrameImageStreamCompleter__shownTimestamp];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_shownTimestamp")) : t4;
    }
    set [_shownTimestamp](library$32package$58flutter$47src$47painting$47image_stream$46dart$58$58_shownTimestamp$35param) {
      this[__MultiFrameImageStreamCompleter__shownTimestamp] = library$32package$58flutter$47src$47painting$47image_stream$46dart$58$58_shownTimestamp$35param;
    }
    [_handleCodecReady](codec) {
      this[_codec] = codec;
      if (!(this[_codec] != null)) dart.assertFailed(null, I[0], 903, 12, "_codec != null");
      if (this.hasListeners) {
        this[_decodeNextFrameAndSchedule]();
      }
    }
    [_handleAppFrame](timestamp) {
      this[_frameCallbackScheduled] = false;
      if (!this.hasListeners) {
        return;
      }
      if (!(this[_nextFrame] != null)) dart.assertFailed(null, I[0], 915, 12, "_nextFrame != null");
      if (this[_isFirstFrame]() || this[_hasFrameDurationPassed](timestamp)) {
        this[_emitFrame](new image_stream.ImageInfo.new({image: dart.nullCheck(this[_nextFrame]).image.clone(), scale: this[_scale], debugLabel: this.debugLabel}));
        this[_shownTimestamp] = timestamp;
        this[_frameDuration] = dart.nullCheck(this[_nextFrame]).duration;
        dart.nullCheck(this[_nextFrame]).image.dispose();
        this[_nextFrame] = null;
        let completedCycles = (this[_framesEmitted] / dart.nullCheck(this[_codec]).frameCount)[$truncate]();
        if (dart.nullCheck(this[_codec]).repetitionCount === -1 || completedCycles <= dart.nullCheck(this[_codec]).repetitionCount) {
          this[_decodeNextFrameAndSchedule]();
        }
        return;
      }
      let delay = dart.nullCheck(this[_frameDuration])['-'](timestamp['-'](this[_shownTimestamp]));
      this[_timer] = async.Timer.new(delay['*'](binding.timeDilation), dart.fn(() => {
        this[_scheduleAppFrame]();
      }, T.VoidTovoid()));
    }
    [_isFirstFrame]() {
      return this[_frameDuration] == null;
    }
    [_hasFrameDurationPassed](timestamp) {
      return timestamp['-'](this[_shownTimestamp])['>='](dart.nullCheck(this[_frameDuration]));
    }
    [_decodeNextFrameAndSchedule]() {
      return async.async(dart.void, (function* _decodeNextFrameAndSchedule() {
        let t4;
        t4 = this[_nextFrame];
        t4 == null ? null : t4.image.dispose();
        this[_nextFrame] = null;
        try {
          this[_nextFrame] = (yield dart.nullCheck(this[_codec]).getNextFrame());
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            this.reportError({context: new assertions.ErrorDescription.new("resolving an image frame"), exception: exception, stack: stack, informationCollector: this[_informationCollector], silent: true});
            return;
          } else
            throw e;
        }
        if (dart.nullCheck(this[_codec]).frameCount === 1) {
          if (!this.hasListeners) {
            return;
          }
          this[_emitFrame](new image_stream.ImageInfo.new({image: dart.nullCheck(this[_nextFrame]).image.clone(), scale: this[_scale], debugLabel: this.debugLabel}));
          dart.nullCheck(this[_nextFrame]).image.dispose();
          this[_nextFrame] = null;
          return;
        }
        this[_scheduleAppFrame]();
      }).bind(this));
    }
    [_scheduleAppFrame]() {
      if (this[_frameCallbackScheduled]) {
        return;
      }
      this[_frameCallbackScheduled] = true;
      binding.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _handleAppFrame));
    }
    [_emitFrame](imageInfo) {
      this.setImage(imageInfo);
      this[_framesEmitted] = this[_framesEmitted] + 1;
    }
    addListener(listener) {
      if (!this.hasListeners && this[_codec] != null && (this[_currentImage] == null || dart.nullCheck(this[_codec]).frameCount > 1)) {
        this[_decodeNextFrameAndSchedule]();
      }
      super.addListener(listener);
    }
    removeListener(listener) {
      let t5;
      super.removeListener(listener);
      if (!this.hasListeners) {
        t5 = this[_timer];
        t5 == null ? null : t5.cancel();
        this[_timer] = null;
      }
    }
    [_maybeDispose]() {
      let t5, t5$;
      super[_maybeDispose]();
      if (this[_disposed]) {
        t5 = this[_chunkSubscription];
        t5 == null ? null : t5.onData(null);
        t5$ = this[_chunkSubscription];
        t5$ == null ? null : t5$.cancel();
        this[_chunkSubscription] = null;
      }
    }
  };
  (image_stream.MultiFrameImageStreamCompleter.new = function(opts) {
    let codec = opts && 'codec' in opts ? opts.codec : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let chunkEvents = opts && 'chunkEvents' in opts ? opts.chunkEvents : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    this[_chunkSubscription] = null;
    this[_codec] = null;
    this[_nextFrame] = null;
    this[__MultiFrameImageStreamCompleter__shownTimestamp] = null;
    this[_frameDuration] = null;
    this[_framesEmitted] = 0;
    this[_timer] = null;
    this[_frameCallbackScheduled] = false;
    if (!(codec !== null)) dart.assertFailed(null, I[0], 857, 15, "codec != null");
    this[_informationCollector] = informationCollector;
    this[_scale] = scale;
    image_stream.MultiFrameImageStreamCompleter.__proto__.new.call(this);
    this.debugLabel = debugLabel;
    codec.then(dart.void, dart.bind(this, _handleCodecReady), {onError: dart.fn((error, stack) => {
        this.reportError({context: new assertions.ErrorDescription.new("resolving an image codec"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, T.ObjectAndStackTraceToNull())});
    if (chunkEvents != null) {
      this[_chunkSubscription] = chunkEvents.listen(dart.bind(this, 'reportImageChunkEvent'), {onError: dart.fn((error, stack) => {
          this.reportError({context: new assertions.ErrorDescription.new("loading an image"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
        }, T.ObjectAndStackTraceToNull())});
    }
  }).prototype = image_stream.MultiFrameImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.MultiFrameImageStreamCompleter);
  dart.addTypeCaches(image_stream.MultiFrameImageStreamCompleter);
  dart.setMethodSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getMethods(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_handleCodecReady]: dart.fnType(dart.void, [ui.Codec]),
    [_handleAppFrame]: dart.fnType(dart.void, [core.Duration]),
    [_isFirstFrame]: dart.fnType(core.bool, []),
    [_hasFrameDurationPassed]: dart.fnType(core.bool, [core.Duration]),
    [_decodeNextFrameAndSchedule]: dart.fnType(async.Future$(dart.void), []),
    [_scheduleAppFrame]: dart.fnType(dart.void, []),
    [_emitFrame]: dart.fnType(dart.void, [image_stream.ImageInfo])
  }));
  dart.setGetterSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getGetters(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_shownTimestamp]: core.Duration
  }));
  dart.setSetterSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getSetters(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_shownTimestamp]: core.Duration
  }));
  dart.setLibraryUri(image_stream.MultiFrameImageStreamCompleter, I[1]);
  dart.setFieldSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getFields(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_chunkSubscription]: dart.fieldType(dart.nullable(async.StreamSubscription$(image_stream.ImageChunkEvent))),
    [_codec]: dart.fieldType(dart.nullable(ui.Codec)),
    [_scale]: dart.finalFieldType(core.double),
    [_informationCollector]: dart.finalFieldType(dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), []))),
    [_nextFrame]: dart.fieldType(dart.nullable(ui.FrameInfo)),
    [__MultiFrameImageStreamCompleter__shownTimestamp]: dart.fieldType(dart.nullable(core.Duration)),
    [_frameDuration]: dart.fieldType(dart.nullable(core.Duration)),
    [_framesEmitted]: dart.fieldType(core.int),
    [_timer]: dart.fieldType(dart.nullable(async.Timer)),
    [_frameCallbackScheduled]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/painting/image_stream.dart", {
    "package:flutter/src/painting/image_stream.dart": image_stream
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_stream.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/image_stream.dart.lib.js"}');
  // Exports:
  return {
    src__painting__image_stream: image_stream
  };
}));

//# sourceMappingURL=image_stream.dart.lib.js.map
