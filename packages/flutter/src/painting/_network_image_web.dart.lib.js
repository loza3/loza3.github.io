define(['dart_sdk', 'packages/flutter/src/foundation/synchronous_future.dart', 'packages/flutter/src/painting/image_stream.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/image_cache.dart', 'packages/flutter/src/painting/binding.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/foundation/_platform_web.dart'], (function load__packages__flutter__src__painting___network_image_web_dart(dart_sdk, packages__flutter__src__foundation__synchronous_future$46dart, packages__flutter__src__painting__image_stream$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting__image_cache$46dart, packages__flutter__src__painting__binding$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__foundation___platform_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const typed_data = dart_sdk.typed_data;
  const ui = dart_sdk.ui;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const synchronous_future = packages__flutter__src__foundation__synchronous_future$46dart.src__foundation__synchronous_future;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const image_cache = packages__flutter__src__painting__image_cache$46dart.src__painting__image_cache;
  const binding = packages__flutter__src__painting__binding$46dart.src__painting__binding;
  const asset_bundle = packages__flutter__src__services__text_editing_delta$46dart.src__services__asset_bundle;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  var _network_image_web = Object.create(dart.library);
  var image_provider = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $responseType = dartx.responseType;
  var $forEach = dartx.forEach;
  var $onLoad = dartx.onLoad;
  var $onError = dartx.onError;
  var $response = dartx.response;
  var $asUint8List = dartx.asUint8List;
  var $lengthInBytes = dartx.lengthInBytes;
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $_equals = dartx._equals;
  var $buffer = dartx.buffer;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    SynchronousFutureOfNetworkImage: () => (T$.SynchronousFutureOfNetworkImage = dart.constFn(synchronous_future.SynchronousFuture$(_network_image_web.NetworkImage)))(),
    StreamControllerOfImageChunkEvent: () => (T$.StreamControllerOfImageChunkEvent = dart.constFn(async.StreamController$(image_stream.ImageChunkEvent)))(),
    ImageProviderOfObject: () => (T$.ImageProviderOfObject = dart.constFn(image_provider.ImageProvider$(core.Object)))(),
    DiagnosticsPropertyOfImageProviderOfObject: () => (T$.DiagnosticsPropertyOfImageProviderOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(T$.ImageProviderOfObject())))(),
    DiagnosticsPropertyOfNetworkImage: () => (T$.DiagnosticsPropertyOfNetworkImage = dart.constFn(diagnostics.DiagnosticsProperty$(_network_image_web.NetworkImage)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T$.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T$.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T$.ListOfDiagnosticsNode(), [])))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    CompleterOfHttpRequest: () => (T$.CompleterOfHttpRequest = dart.constFn(async.Completer$(html.HttpRequest)))(),
    StringAndStringTovoid: () => (T$.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    ProgressEventTovoid: () => (T$.ProgressEventTovoid = dart.constFn(dart.fnType(dart.void, [html.ProgressEvent])))(),
    intAndintTovoid: () => (T$.intAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int])))(),
    StackTraceN: () => (T$.StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))(),
    ObjectAndStackTraceNTovoid: () => (T$.ObjectAndStackTraceNTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, T$.StackTraceN()])))(),
    DiagnosticsPropertyOfImageConfiguration: () => (T$.DiagnosticsPropertyOfImageConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageConfiguration)))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    ImageCacheStatusN: () => (T$.ImageCacheStatusN = dart.constFn(dart.nullable(image_cache.ImageCacheStatus)))(),
    CompleterOfImageCacheStatusN: () => (T$.CompleterOfImageCacheStatusN = dart.constFn(async.Completer$(T$.ImageCacheStatusN())))(),
    ObjectAndStackTraceNToFutureOfvoid: () => (T$.ObjectAndStackTraceNToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [core.Object, T$.StackTraceN()])))(),
    VoidToImageStreamCompleter: () => (T$.VoidToImageStreamCompleter = dart.constFn(dart.fnType(image_stream.ImageStreamCompleter, [])))(),
    VoidToHttpRequest: () => (T$.VoidToHttpRequest = dart.constFn(dart.fnType(html.HttpRequest, [])))(),
    DiagnosticsPropertyOfAssetBundleImageKey: () => (T$.DiagnosticsPropertyOfAssetBundleImageKey = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.AssetBundleImageKey)))(),
    FutureOfCodec: () => (T$.FutureOfCodec = dart.constFn(async.Future$(ui.Codec)))(),
    boolN: () => (T$.boolN = dart.constFn(dart.nullable(core.bool)))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    Uint8List__ToFutureOfCodec: () => (T$.Uint8List__ToFutureOfCodec = dart.constFn(dart.fnType(T$.FutureOfCodec(), [typed_data.Uint8List], {allowUpscaling: T$.boolN(), cacheHeight: T$.intN(), cacheWidth: T$.intN()}, {})))(),
    ImmutableBuffer__ToFutureOfCodec: () => (T$.ImmutableBuffer__ToFutureOfCodec = dart.constFn(dart.fnType(T$.FutureOfCodec(), [ui.ImmutableBuffer], {allowUpscaling: T$.boolN(), cacheHeight: T$.intN(), cacheWidth: T$.intN()}, {})))(),
    SynchronousFutureOfResizeImageKey: () => (T$.SynchronousFutureOfResizeImageKey = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.ResizeImageKey)))(),
    ObjectToNull: () => (T$.ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))(),
    CompleterOfResizeImageKey: () => (T$.CompleterOfResizeImageKey = dart.constFn(async.Completer$(image_provider.ResizeImageKey)))(),
    SynchronousFutureOfFileImage: () => (T$.SynchronousFutureOfFileImage = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.FileImage)))(),
    SynchronousFutureOfMemoryImage: () => (T$.SynchronousFutureOfMemoryImage = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.MemoryImage)))(),
    SynchronousFutureOfAssetBundleImageKey: () => (T$.SynchronousFutureOfAssetBundleImageKey = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.AssetBundleImageKey)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: image_provider.ImageConfiguration.prototype,
        [ImageConfiguration_platform]: null,
        [ImageConfiguration_size]: null,
        [ImageConfiguration_textDirection]: null,
        [ImageConfiguration_locale]: null,
        [ImageConfiguration_devicePixelRatio]: null,
        [ImageConfiguration_bundle]: null
      });
    },
    get C1() {
      return C[1] = dart.fn(_network_image_web._httpClient, T$.VoidToHttpRequest());
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/_network_image_web.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/image_provider.dart",
    "package:flutter/src/painting/image_provider.dart",
    "package:flutter/src/painting/_network_image_web.dart"
  ];
  var url$ = dart.privateName(_network_image_web, "NetworkImage.url");
  var scale$ = dart.privateName(_network_image_web, "NetworkImage.scale");
  var headers$ = dart.privateName(_network_image_web, "NetworkImage.headers");
  var _loadAsync = dart.privateName(_network_image_web, "_loadAsync");
  var _imageStreamInformationCollector = dart.privateName(_network_image_web, "_imageStreamInformationCollector");
  var _createErrorHandlerAndKey = dart.privateName(image_provider, "_createErrorHandlerAndKey");
  var ImageConfiguration_platform = dart.privateName(image_provider, "ImageConfiguration.platform");
  var ImageConfiguration_size = dart.privateName(image_provider, "ImageConfiguration.size");
  var ImageConfiguration_textDirection = dart.privateName(image_provider, "ImageConfiguration.textDirection");
  var ImageConfiguration_locale = dart.privateName(image_provider, "ImageConfiguration.locale");
  var ImageConfiguration_devicePixelRatio = dart.privateName(image_provider, "ImageConfiguration.devicePixelRatio");
  var ImageConfiguration_bundle = dart.privateName(image_provider, "ImageConfiguration.bundle");
  const _is_ImageProvider_default = Symbol('_is_ImageProvider_default');
  image_provider.ImageProvider$ = dart.generic(T => {
    var __t$TAndFnTovoid = () => (__t$TAndFnTovoid = dart.constFn(dart.fnType(dart.void, [T, T$.ObjectAndStackTraceNTovoid()])))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$TNAndObjectAndStackTraceNToFutureOfvoid = () => (__t$TNAndObjectAndStackTraceNToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [__t$TN(), core.Object, T$.StackTraceN()])))();
    var __t$TToNull = () => (__t$TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class ImageProvider extends core.Object {
      resolve(configuration) {
        if (!(configuration !== null)) dart.assertFailed(null, I[1], 351, 12, "configuration != null");
        let stream = this.createStream(configuration);
        this[_createErrorHandlerAndKey](configuration, dart.fn((key, errorHandler) => {
          this.resolveStreamForKey(configuration, stream, key, errorHandler);
        }, __t$TAndFnTovoid()), dart.fn((key, exception, stack) => async.async(dart.void, (function*() {
          yield null;
          let collector = null;
          if (!dart.fn(() => {
            collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this), new (T$.DiagnosticsPropertyOfImageConfiguration()).new("Image configuration", configuration), new (__t$DiagnosticsPropertyOfT()).new("Image key", key, {defaultValue: null})]), T$.VoidToListOfDiagnosticsNode());
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 363, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<ImageProvider>('Image provider', this),\n            DiagnosticsProperty<ImageConfiguration>('Image configuration', configuration),\n            DiagnosticsProperty<T>('Image key', key, defaultValue: null),\n          ];\n          return true;\n        }()");
          if (stream.completer == null) {
            stream.setCompleter(new image_provider._ErrorImageCompleter.new());
          }
          dart.nullCheck(stream.completer).reportError({exception: exception, stack: stack, context: new assertions.ErrorDescription.new("while resolving an image"), silent: true, informationCollector: collector});
        }).bind(this)), __t$TNAndObjectAndStackTraceNToFutureOfvoid()));
        return stream;
      }
      createStream(configuration) {
        return new image_stream.ImageStream.new();
      }
      obtainCacheStatus(opts) {
        let configuration = opts && 'configuration' in opts ? opts.configuration : null;
        let handleError = opts && 'handleError' in opts ? opts.handleError : null;
        if (!(configuration !== null)) dart.assertFailed(null, I[1], 410, 12, "configuration != null");
        let completer = T$.CompleterOfImageCacheStatusN().new();
        this[_createErrorHandlerAndKey](configuration, dart.fn((key, innerHandleError) => {
          completer.complete(binding.PaintingBinding.instance.imageCache.statusForKey(key));
        }, __t$TAndFnTovoid()), dart.fn((key, exception, stack) => async.async(dart.void, (function*() {
          if (handleError != null) {
            handleError(exception, stack);
          } else {
            let collector = null;
            if (!dart.fn(() => {
              collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this), new (T$.DiagnosticsPropertyOfImageConfiguration()).new("Image configuration", configuration), new (__t$DiagnosticsPropertyOfT()).new("Image key", key, {defaultValue: null})]), T$.VoidToListOfDiagnosticsNode());
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 422, 18, "() {\n            collector = () => <DiagnosticsNode>[\n              DiagnosticsProperty<ImageProvider>('Image provider', this),\n              DiagnosticsProperty<ImageConfiguration>('Image configuration', configuration),\n              DiagnosticsProperty<T>('Image key', key, defaultValue: null),\n            ];\n            return true;\n          }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({context: new assertions.ErrorDescription.new("while checking the cache location of an image"), informationCollector: collector, exception: exception, stack: stack}));
            completer.complete(null);
          }
        }).bind(this)), __t$TNAndObjectAndStackTraceNToFutureOfvoid()));
        return completer.future;
      }
      [_createErrorHandlerAndKey](configuration, successCallback, errorCallback) {
        let obtainedKey = null;
        let didError = false;
        function handleError(exception, stack) {
          return async.async(dart.void, function* handleError() {
            if (didError) {
              return;
            }
            if (!didError) {
              errorCallback(obtainedKey, exception, stack);
            }
            didError = true;
          });
        }
        dart.fn(handleError, T$.ObjectAndStackTraceNToFutureOfvoid());
        let key = null;
        try {
          key = this.obtainKey(configuration);
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          if (core.Object.is(error)) {
            handleError(error, stackTrace);
            return;
          } else
            throw e;
        }
        key.then(dart.void, dart.fn(key => {
          obtainedKey = key;
          try {
            successCallback(key, handleError);
          } catch (e) {
            let error = dart.getThrown(e);
            let stackTrace = dart.stackTrace(e);
            if (core.Object.is(error)) {
              handleError(error, stackTrace);
            } else
              throw e;
          }
        }, __t$TToNull())).catchError(handleError);
      }
      resolveStreamForKey(configuration, stream, key, handleError) {
        T.as(key);
        if (stream.completer != null) {
          let completer = binding.PaintingBinding.instance.imageCache.putIfAbsent(key, dart.fn(() => dart.nullCheck(stream.completer), T$.VoidToImageStreamCompleter()), {onError: handleError});
          if (!(completer == stream.completer)) dart.assertFailed(null, I[1], 508, 14, "identical(completer, stream.completer)");
          return;
        }
        let completer = binding.PaintingBinding.instance.imageCache.putIfAbsent(key, dart.fn(() => this.loadBuffer(key, dart.bind(binding.PaintingBinding.instance, 'instantiateImageCodecFromBuffer')), T$.VoidToImageStreamCompleter()), {onError: handleError});
        if (completer != null) {
          stream.setCompleter(completer);
        }
      }
      evict(opts) {
        let cache = opts && 'cache' in opts ? opts.cache : null;
        let configuration = opts && 'configuration' in opts ? opts.configuration : C[0] || CT.C0;
        return async.async(core.bool, (function* evict() {
          cache == null ? cache = binding.imageCache : null;
          let key = (yield this.obtainKey(configuration));
          return cache.evict(key);
        }).bind(this));
      }
      load(key, decode) {
        T.as(key);
        dart.throw(new core.UnsupportedError.new("Implement loadBuffer for faster image loading"));
      }
      loadBuffer(key, decode) {
        T.as(key);
        return this.load(key, dart.bind(binding.PaintingBinding.instance, 'instantiateImageCodec'));
      }
      toString() {
        return object.objectRuntimeType(this, "ImageConfiguration") + "()";
      }
    }
    (ImageProvider.new = function() {
      ;
    }).prototype = ImageProvider.prototype;
    dart.addTypeTests(ImageProvider);
    ImageProvider.prototype[_is_ImageProvider_default] = true;
    dart.addTypeCaches(ImageProvider);
    dart.setMethodSignature(ImageProvider, () => ({
      __proto__: dart.getMethods(ImageProvider.__proto__),
      resolve: dart.fnType(image_stream.ImageStream, [image_provider.ImageConfiguration]),
      createStream: dart.fnType(image_stream.ImageStream, [image_provider.ImageConfiguration]),
      obtainCacheStatus: dart.fnType(async.Future$(dart.nullable(image_cache.ImageCacheStatus)), [], {handleError: dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)]))}, {configuration: image_provider.ImageConfiguration}),
      [_createErrorHandlerAndKey]: dart.fnType(dart.void, [image_provider.ImageConfiguration, dart.fnType(dart.void, [T, dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)])]), dart.fnType(async.Future$(dart.void), [dart.nullable(T), core.Object, dart.nullable(core.StackTrace)])]),
      resolveStreamForKey: dart.fnType(dart.void, [image_provider.ImageConfiguration, image_stream.ImageStream, dart.nullable(core.Object), dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)])]),
      evict: dart.fnType(async.Future$(core.bool), [], {cache: dart.nullable(image_cache.ImageCache), configuration: image_provider.ImageConfiguration}, {}),
      load: dart.fnType(image_stream.ImageStreamCompleter, [dart.nullable(core.Object), dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})]),
      loadBuffer: dart.fnType(image_stream.ImageStreamCompleter, [dart.nullable(core.Object), dart.fnType(async.Future$(ui.Codec), [ui.ImmutableBuffer], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})])
    }));
    dart.setLibraryUri(ImageProvider, I[2]);
    dart.defineExtensionMethods(ImageProvider, ['toString']);
    return ImageProvider;
  });
  image_provider.ImageProvider = image_provider.ImageProvider$();
  dart.addTypeTests(image_provider.ImageProvider, _is_ImageProvider_default);
  image_provider.NetworkImage = class NetworkImage extends image_provider.ImageProvider {
    static ['_#new#tearOff'](url, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return new _network_image_web.NetworkImage.new(url, {scale: scale, headers: headers});
    }
  };
  dart.addTypeTests(image_provider.NetworkImage);
  dart.addTypeCaches(image_provider.NetworkImage);
  dart.setStaticMethodSignature(image_provider.NetworkImage, () => ['new']);
  dart.setLibraryUri(image_provider.NetworkImage, I[2]);
  dart.setStaticFieldSignature(image_provider.NetworkImage, () => ['_redirecting#']);
  _network_image_web.NetworkImage = class NetworkImage extends image_provider.ImageProvider$(image_provider.NetworkImage) {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    static ['_#new#tearOff'](url, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return new _network_image_web.NetworkImage.new(url, {scale: scale, headers: headers});
    }
    obtainKey(configuration) {
      return new (T$.SynchronousFutureOfNetworkImage()).new(this);
    }
    load(key, decode) {
      image_provider.NetworkImage.as(key);
      let chunkEvents = T$.StreamControllerOfImageChunkEvent().new();
      return new image_stream.MultiFrameImageStreamCompleter.new({chunkEvents: chunkEvents.stream, codec: this[_loadAsync](_network_image_web.NetworkImage.as(key), null, decode, chunkEvents), scale: key.scale, debugLabel: key.url, informationCollector: this[_imageStreamInformationCollector](key)});
    }
    loadBuffer(key, decode) {
      image_provider.NetworkImage.as(key);
      let chunkEvents = T$.StreamControllerOfImageChunkEvent().new();
      return new image_stream.MultiFrameImageStreamCompleter.new({chunkEvents: chunkEvents.stream, codec: this[_loadAsync](_network_image_web.NetworkImage.as(key), decode, null, chunkEvents), scale: key.scale, debugLabel: key.url, informationCollector: this[_imageStreamInformationCollector](key)});
    }
    [_imageStreamInformationCollector](key) {
      let collector = null;
      if (!dart.fn(() => {
        collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this), new (T$.DiagnosticsPropertyOfNetworkImage()).new("Image key", _network_image_web.NetworkImage.as(key))]), T$.VoidToListOfDiagnosticsNode());
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 95, 12, "() {\n      collector = () => <DiagnosticsNode>[\n        DiagnosticsProperty<image_provider.ImageProvider>('Image provider', this),\n        DiagnosticsProperty<NetworkImage>('Image key', key as NetworkImage),\n      ];\n      return true;\n    }()");
      return collector;
    }
    [_loadAsync](key, decode, decodeDepreacted, chunkEvents) {
      return async.async(ui.Codec, (function* _loadAsync() {
        let t0, t0$;
        if (!key._equals(this)) dart.assertFailed(null, I[0], 117, 12, "key == this");
        let resolved = core.Uri.base.resolve(key.url);
        if (dart.test((t0$ = (t0 = key.headers, t0 == null ? null : t0[$isNotEmpty]), t0$ == null ? false : t0$))) {
          let completer = T$.CompleterOfHttpRequest().new();
          let request = _network_image_web.httpRequestFactory();
          request.open("GET", key.url, {async: true});
          request[$responseType] = "arraybuffer";
          dart.nullCheck(key.headers)[$forEach](dart.fn((header, value) => {
            request.setRequestHeader(header, value);
          }, T$.StringAndStringTovoid()));
          request[$onLoad].listen(dart.fn(e => {
            let t0;
            let status = request.status;
            let accepted = dart.nullCheck(status) >= 200 && dart.notNull(status) < 300;
            let fileUri = status === 0;
            let notModified = status === 304;
            let unknownRedirect = dart.notNull(status) > 307 && dart.notNull(status) < 400;
            let success = accepted || fileUri || notModified || unknownRedirect;
            if (success) {
              completer.complete(request);
            } else {
              completer.completeError(e);
              dart.throw(new image_provider.NetworkImageLoadException.new({statusCode: (t0 = request.status, t0 == null ? 400 : t0), uri: resolved}));
            }
          }, T$.ProgressEventTovoid()));
          request[$onError].listen(dart.bind(completer, 'completeError'));
          request.send();
          yield completer.future;
          let bytes = typed_data.ByteBuffer.as(request[$response])[$asUint8List]();
          if (bytes[$lengthInBytes] === 0) {
            dart.throw(new image_provider.NetworkImageLoadException.new({statusCode: dart.nullCheck(request.status), uri: resolved}));
          }
          if (decode != null) {
            let buffer = (yield ui.ImmutableBuffer.fromUint8List(bytes));
            return decode(buffer);
          } else {
            if (!(decodeDepreacted != null)) dart.assertFailed(null, I[0], 169, 16, "decodeDepreacted != null");
            return dart.nullCheck(decodeDepreacted)(bytes);
          }
        } else {
          return ui.webOnlyInstantiateImageCodecFromUrl(resolved, {chunkCallback: dart.fn((bytes, total) => {
              chunkEvents.add(new image_stream.ImageChunkEvent.new({cumulativeBytesLoaded: bytes, expectedTotalBytes: total}));
            }, T$.intAndintTovoid())});
        }
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return _network_image_web.NetworkImage.is(other) && other.url === this.url && other.scale === this.scale;
    }
    get hashCode() {
      return core.Object.hash(this.url, this.scale);
    }
    toString() {
      return object.objectRuntimeType(this, "NetworkImage") + "(\"" + this.url + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (_network_image_web.NetworkImage.new = function(url, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    this[url$] = url;
    this[scale$] = scale;
    this[headers$] = headers;
    if (!(url !== null)) dart.assertFailed(null, I[0], 42, 16, "url != null");
    if (!(scale !== null)) dart.assertFailed(null, I[0], 43, 16, "scale != null");
    _network_image_web.NetworkImage.__proto__.new.call(this);
    ;
  }).prototype = _network_image_web.NetworkImage.prototype;
  dart.addTypeTests(_network_image_web.NetworkImage);
  dart.addTypeCaches(_network_image_web.NetworkImage);
  _network_image_web.NetworkImage[dart.implements] = () => [image_provider.NetworkImage];
  dart.setMethodSignature(_network_image_web.NetworkImage, () => ({
    __proto__: dart.getMethods(_network_image_web.NetworkImage.__proto__),
    obtainKey: dart.fnType(async.Future$(_network_image_web.NetworkImage), [image_provider.ImageConfiguration]),
    [_imageStreamInformationCollector]: dart.fnType(dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])), [image_provider.NetworkImage]),
    [_loadAsync]: dart.fnType(async.Future$(ui.Codec), [_network_image_web.NetworkImage, dart.nullable(dart.fnType(async.Future$(ui.Codec), [ui.ImmutableBuffer], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})), dart.nullable(dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})), async.StreamController$(image_stream.ImageChunkEvent)])
  }));
  dart.setLibraryUri(_network_image_web.NetworkImage, I[3]);
  dart.setFieldSignature(_network_image_web.NetworkImage, () => ({
    __proto__: dart.getFields(_network_image_web.NetworkImage.__proto__),
    url: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    headers: dart.finalFieldType(dart.nullable(core.Map$(core.String, core.String)))
  }));
  dart.defineExtensionMethods(_network_image_web.NetworkImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(_network_image_web.NetworkImage, ['hashCode']);
  _network_image_web._httpClient = function _httpClient() {
    return html.HttpRequest.new();
  };
  _network_image_web.debugRestoreHttpRequestFactory = function debugRestoreHttpRequestFactory() {
    _network_image_web.httpRequestFactory = C[1] || CT.C1;
  };
  dart.defineLazy(_network_image_web, {
    /*_network_image_web.httpRequestFactory*/get httpRequestFactory() {
      return C[1] || CT.C1;
    },
    set httpRequestFactory(_) {}
  }, false);
  const bundle$ = ImageConfiguration_bundle;
  const devicePixelRatio$ = ImageConfiguration_devicePixelRatio;
  const locale$ = ImageConfiguration_locale;
  const textDirection$ = ImageConfiguration_textDirection;
  const size$ = ImageConfiguration_size;
  const platform$ = ImageConfiguration_platform;
  image_provider.ImageConfiguration = class ImageConfiguration extends core.Object {
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get devicePixelRatio() {
      return this[devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      super.devicePixelRatio = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get platform() {
      return this[platform$];
    }
    set platform(value) {
      super.platform = value;
    }
    static ['_#new#tearOff'](opts) {
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      return new image_provider.ImageConfiguration.new({bundle: bundle, devicePixelRatio: devicePixelRatio, locale: locale, textDirection: textDirection, size: size, platform: platform});
    }
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      return new image_provider.ImageConfiguration.new({bundle: (t2 = bundle, t2 == null ? this.bundle : t2), devicePixelRatio: (t2$ = devicePixelRatio, t2$ == null ? this.devicePixelRatio : t2$), locale: (t2$0 = locale, t2$0 == null ? this.locale : t2$0), textDirection: (t2$1 = textDirection, t2$1 == null ? this.textDirection : t2$1), size: (t2$2 = size, t2$2 == null ? this.size : t2$2), platform: (t2$3 = platform, t2$3 == null ? this.platform : t2$3)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_provider.ImageConfiguration.is(other) && dart.equals(other.bundle, this.bundle) && other.devicePixelRatio == this.devicePixelRatio && dart.equals(other.locale, this.locale) && other.textDirection == this.textDirection && dart.equals(other.size, this.size) && other.platform == this.platform;
    }
    get hashCode() {
      return core.Object.hash(this.bundle, this.devicePixelRatio, this.locale, this.size, this.platform);
    }
    toString() {
      let result = new core.StringBuffer.new();
      result.write("ImageConfiguration(");
      let hasArguments = false;
      if (this.bundle != null) {
        result.write("bundle: " + dart.str(this.bundle));
        hasArguments = true;
      }
      if (this.devicePixelRatio != null) {
        if (hasArguments) {
          result.write(", ");
        }
        result.write("devicePixelRatio: " + dart.nullCheck(this.devicePixelRatio)[$toStringAsFixed](1));
        hasArguments = true;
      }
      if (this.locale != null) {
        if (hasArguments) {
          result.write(", ");
        }
        result.write("locale: " + dart.str(this.locale));
        hasArguments = true;
      }
      if (this.textDirection != null) {
        if (hasArguments) {
          result.write(", ");
        }
        result.write("textDirection: " + dart.str(this.textDirection));
        hasArguments = true;
      }
      if (this.size != null) {
        if (hasArguments) {
          result.write(", ");
        }
        result.write("size: " + dart.str(this.size));
        hasArguments = true;
      }
      if (this.platform != null) {
        if (hasArguments) {
          result.write(", ");
        }
        result.write("platform: " + core['EnumName|get#name'](dart.nullCheck(this.platform)));
        hasArguments = true;
      }
      result.write(")");
      return result.toString();
    }
  };
  (image_provider.ImageConfiguration.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let platform = opts && 'platform' in opts ? opts.platform : null;
    this[bundle$] = bundle;
    this[devicePixelRatio$] = devicePixelRatio;
    this[locale$] = locale;
    this[textDirection$] = textDirection;
    this[size$] = size;
    this[platform$] = platform;
    ;
  }).prototype = image_provider.ImageConfiguration.prototype;
  dart.addTypeTests(image_provider.ImageConfiguration);
  dart.addTypeCaches(image_provider.ImageConfiguration);
  dart.setMethodSignature(image_provider.ImageConfiguration, () => ({
    __proto__: dart.getMethods(image_provider.ImageConfiguration.__proto__),
    copyWith: dart.fnType(image_provider.ImageConfiguration, [], {bundle: dart.nullable(asset_bundle.AssetBundle), devicePixelRatio: dart.nullable(core.double), locale: dart.nullable(ui.Locale), platform: dart.nullable(platform.TargetPlatform), size: dart.nullable(ui.Size), textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setLibraryUri(image_provider.ImageConfiguration, I[2]);
  dart.setFieldSignature(image_provider.ImageConfiguration, () => ({
    __proto__: dart.getFields(image_provider.ImageConfiguration.__proto__),
    bundle: dart.finalFieldType(dart.nullable(asset_bundle.AssetBundle)),
    devicePixelRatio: dart.finalFieldType(dart.nullable(core.double)),
    locale: dart.finalFieldType(dart.nullable(ui.Locale)),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    size: dart.finalFieldType(dart.nullable(ui.Size)),
    platform: dart.finalFieldType(dart.nullable(platform.TargetPlatform))
  }));
  dart.setStaticFieldSignature(image_provider.ImageConfiguration, () => ['empty']);
  dart.defineExtensionMethods(image_provider.ImageConfiguration, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.ImageConfiguration, ['hashCode']);
  dart.defineLazy(image_provider.ImageConfiguration, {
    /*image_provider.ImageConfiguration.empty*/get empty() {
      return C[0] || CT.C0;
    }
  }, false);
  var bundle$0 = dart.privateName(image_provider, "AssetBundleImageKey.bundle");
  var name$ = dart.privateName(image_provider, "AssetBundleImageKey.name");
  var scale$0 = dart.privateName(image_provider, "AssetBundleImageKey.scale");
  image_provider.AssetBundleImageKey = class AssetBundleImageKey extends core.Object {
    get bundle() {
      return this[bundle$0];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get scale() {
      return this[scale$0];
    }
    set scale(value) {
      super.scale = value;
    }
    static ['_#new#tearOff'](opts) {
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let scale = opts && 'scale' in opts ? opts.scale : null;
      return new image_provider.AssetBundleImageKey.new({bundle: bundle, name: name, scale: scale});
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_provider.AssetBundleImageKey.is(other) && other.bundle[$_equals](this.bundle) && other.name === this.name && other.scale === this.scale;
    }
    get hashCode() {
      return core.Object.hash(this.bundle, this.name, this.scale);
    }
    toString() {
      return object.objectRuntimeType(this, "AssetBundleImageKey") + "(bundle: " + dart.str(this.bundle) + ", name: \"" + this.name + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.AssetBundleImageKey.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    this[bundle$0] = bundle;
    this[name$] = name;
    this[scale$0] = scale;
    if (!(bundle !== null)) dart.assertFailed(null, I[1], 638, 15, "bundle != null");
    if (!(name !== null)) dart.assertFailed(null, I[1], 639, 15, "name != null");
    if (!(scale !== null)) dart.assertFailed(null, I[1], 640, 15, "scale != null");
    ;
  }).prototype = image_provider.AssetBundleImageKey.prototype;
  dart.addTypeTests(image_provider.AssetBundleImageKey);
  dart.addTypeCaches(image_provider.AssetBundleImageKey);
  dart.setLibraryUri(image_provider.AssetBundleImageKey, I[2]);
  dart.setFieldSignature(image_provider.AssetBundleImageKey, () => ({
    __proto__: dart.getFields(image_provider.AssetBundleImageKey.__proto__),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle),
    name: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.AssetBundleImageKey, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.AssetBundleImageKey, ['hashCode']);
  var _loadAsync$ = dart.privateName(image_provider, "_loadAsync");
  image_provider.AssetBundleImageProvider = class AssetBundleImageProvider extends image_provider.ImageProvider$(image_provider.AssetBundleImageKey) {
    loadBuffer(key, decode) {
      image_provider.AssetBundleImageKey.as(key);
      let collector = null;
      if (!dart.fn(() => {
        collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this), new (T$.DiagnosticsPropertyOfAssetBundleImageKey()).new("Image key", key)]), T$.VoidToListOfDiagnosticsNode());
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 687, 12, "() {\n      collector = () => <DiagnosticsNode>[\n        DiagnosticsProperty<ImageProvider>('Image provider', this),\n        DiagnosticsProperty<AssetBundleImageKey>('Image key', key),\n      ];\n      return true;\n    }()");
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, decode, null), scale: key.scale, debugLabel: key.name, informationCollector: collector});
    }
    load(key, decode) {
      image_provider.AssetBundleImageKey.as(key);
      let collector = null;
      if (!dart.fn(() => {
        collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfImageProviderOfObject()).new("Image provider", this), new (T$.DiagnosticsPropertyOfAssetBundleImageKey()).new("Image key", key)]), T$.VoidToListOfDiagnosticsNode());
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 705, 12, "() {\n      collector = () => <DiagnosticsNode>[\n        DiagnosticsProperty<ImageProvider>('Image provider', this),\n        DiagnosticsProperty<AssetBundleImageKey>('Image key', key),\n      ];\n      return true;\n    }()");
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, null, decode), scale: key.scale, debugLabel: key.name, informationCollector: collector});
    }
    [_loadAsync$](key, decode, decodeDepreacted) {
      return async.async(ui.Codec, function* _loadAsync() {
        if (decode != null) {
          let buffer = null;
          try {
            buffer = (yield key.bundle.loadBuffer(key.name));
          } catch (e) {
            let ex = dart.getThrown(e);
            if (assertions.FlutterError.is(ex)) {
              binding.PaintingBinding.instance.imageCache.evict(key);
              dart.rethrow(e);
            } else
              throw e;
          }
          if (buffer == null) {
            binding.PaintingBinding.instance.imageCache.evict(key);
            dart.throw(new core.StateError.new("Unable to read data"));
          }
          return decode(buffer);
        }
        let data = null;
        try {
          data = (yield key.bundle.load(key.name));
        } catch (e$) {
          let ex$ = dart.getThrown(e$);
          if (assertions.FlutterError.is(ex$)) {
            binding.PaintingBinding.instance.imageCache.evict(key);
            dart.rethrow(e$);
          } else
            throw e$;
        }
        if (data === null) {
          binding.PaintingBinding.instance.imageCache.evict(key);
          dart.throw(new core.StateError.new("Unable to read data"));
        }
        return dart.nullCheck(decodeDepreacted)(data[$buffer][$asUint8List]());
      });
    }
  };
  (image_provider.AssetBundleImageProvider.new = function() {
    image_provider.AssetBundleImageProvider.__proto__.new.call(this);
    ;
  }).prototype = image_provider.AssetBundleImageProvider.prototype;
  dart.addTypeTests(image_provider.AssetBundleImageProvider);
  dart.addTypeCaches(image_provider.AssetBundleImageProvider);
  dart.setMethodSignature(image_provider.AssetBundleImageProvider, () => ({
    __proto__: dart.getMethods(image_provider.AssetBundleImageProvider.__proto__),
    [_loadAsync$]: dart.fnType(async.Future$(ui.Codec), [image_provider.AssetBundleImageKey, dart.nullable(dart.fnType(async.Future$(ui.Codec), [ui.ImmutableBuffer], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})), dart.nullable(dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {}))])
  }));
  dart.setLibraryUri(image_provider.AssetBundleImageProvider, I[2]);
  var _providerCacheKey$ = dart.privateName(image_provider, "ResizeImageKey._providerCacheKey");
  var _width$ = dart.privateName(image_provider, "ResizeImageKey._width");
  var _height$ = dart.privateName(image_provider, "ResizeImageKey._height");
  var _providerCacheKey = dart.privateName(image_provider, "_providerCacheKey");
  var _width = dart.privateName(image_provider, "_width");
  var _height = dart.privateName(image_provider, "_height");
  image_provider.ResizeImageKey = class ResizeImageKey extends core.Object {
    get [_providerCacheKey]() {
      return this[_providerCacheKey$];
    }
    set [_providerCacheKey](value) {
      super[_providerCacheKey] = value;
    }
    get [_width]() {
      return this[_width$];
    }
    set [_width](value) {
      super[_width] = value;
    }
    get [_height]() {
      return this[_height$];
    }
    set [_height](value) {
      super[_height] = value;
    }
    static ['_#_#tearOff'](_providerCacheKey, _width, _height) {
      return new image_provider.ResizeImageKey.__(_providerCacheKey, _width, _height);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_provider.ResizeImageKey.is(other) && other[_providerCacheKey][$_equals](this[_providerCacheKey]) && other[_width] == this[_width] && other[_height] == this[_height];
    }
    get hashCode() {
      return core.Object.hash(this[_providerCacheKey], this[_width], this[_height]);
    }
  };
  (image_provider.ResizeImageKey.__ = function(_providerCacheKey, _width, _height) {
    this[_providerCacheKey$] = _providerCacheKey;
    this[_width$] = _width;
    this[_height$] = _height;
    ;
  }).prototype = image_provider.ResizeImageKey.prototype;
  dart.addTypeTests(image_provider.ResizeImageKey);
  dart.addTypeCaches(image_provider.ResizeImageKey);
  dart.setLibraryUri(image_provider.ResizeImageKey, I[2]);
  dart.setFieldSignature(image_provider.ResizeImageKey, () => ({
    __proto__: dart.getFields(image_provider.ResizeImageKey.__proto__),
    [_providerCacheKey]: dart.finalFieldType(core.Object),
    [_width]: dart.finalFieldType(dart.nullable(core.int)),
    [_height]: dart.finalFieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(image_provider.ResizeImageKey, ['_equals']);
  dart.defineExtensionAccessors(image_provider.ResizeImageKey, ['hashCode']);
  var imageProvider$ = dart.privateName(image_provider, "ResizeImage.imageProvider");
  var width$ = dart.privateName(image_provider, "ResizeImage.width");
  var height$ = dart.privateName(image_provider, "ResizeImage.height");
  var allowUpscaling$ = dart.privateName(image_provider, "ResizeImage.allowUpscaling");
  image_provider.ResizeImage = class ResizeImage extends image_provider.ImageProvider$(image_provider.ResizeImageKey) {
    get imageProvider() {
      return this[imageProvider$];
    }
    set imageProvider(value) {
      super.imageProvider = value;
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
    get allowUpscaling() {
      return this[allowUpscaling$];
    }
    set allowUpscaling(value) {
      super.allowUpscaling = value;
    }
    static ['_#new#tearOff'](imageProvider, opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : false;
      return new image_provider.ResizeImage.new(imageProvider, {width: width, height: height, allowUpscaling: allowUpscaling});
    }
    static resizeIfNeeded(cacheWidth, cacheHeight, provider) {
      if (cacheWidth != null || cacheHeight != null) {
        return new image_provider.ResizeImage.new(provider, {width: cacheWidth, height: cacheHeight});
      }
      return provider;
    }
    load(key, decode) {
      image_provider.ResizeImageKey.as(key);
      const decodeResize = (buffer, opts) => {
        let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : null;
        let cacheHeight = opts && 'cacheHeight' in opts ? opts.cacheHeight : null;
        let cacheWidth = opts && 'cacheWidth' in opts ? opts.cacheWidth : null;
        if (!(cacheWidth == null && cacheHeight == null && allowUpscaling == null)) dart.assertFailed("ResizeImage cannot be composed with another ImageProvider that applies " + "cacheWidth, cacheHeight, or allowUpscaling.", I[1], 843, 9, "cacheWidth == null && cacheHeight == null && allowUpscaling == null");
        return decode(buffer, {cacheWidth: this.width, cacheHeight: this.height, allowUpscaling: this.allowUpscaling});
      };
      dart.fn(decodeResize, T$.Uint8List__ToFutureOfCodec());
      let completer = this.imageProvider.load(key[_providerCacheKey], decodeResize);
      {
        completer.debugLabel = dart.str(completer.debugLabel) + " - Resized(" + dart.str(key[_width]) + "×" + dart.str(key[_height]) + ")";
      }
      return completer;
    }
    loadBuffer(key, decode) {
      image_provider.ResizeImageKey.as(key);
      const decodeResize = (buffer, opts) => {
        let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : null;
        let cacheHeight = opts && 'cacheHeight' in opts ? opts.cacheHeight : null;
        let cacheWidth = opts && 'cacheWidth' in opts ? opts.cacheWidth : null;
        if (!(cacheWidth == null && cacheHeight == null && allowUpscaling == null)) dart.assertFailed("ResizeImage cannot be composed with another ImageProvider that applies " + "cacheWidth, cacheHeight, or allowUpscaling.", I[1], 860, 9, "cacheWidth == null && cacheHeight == null && allowUpscaling == null");
        return decode(buffer, {cacheWidth: this.width, cacheHeight: this.height, allowUpscaling: this.allowUpscaling});
      };
      dart.fn(decodeResize, T$.ImmutableBuffer__ToFutureOfCodec());
      let completer = this.imageProvider.loadBuffer(key[_providerCacheKey], decodeResize);
      {
        completer.debugLabel = dart.str(completer.debugLabel) + " - Resized(" + dart.str(key[_width]) + "×" + dart.str(key[_height]) + ")";
      }
      return completer;
    }
    obtainKey(configuration) {
      let completer = null;
      let result = null;
      this.imageProvider.obtainKey(configuration).then(core.Null, dart.fn(key => {
        if (completer == null) {
          result = new (T$.SynchronousFutureOfResizeImageKey()).new(new image_provider.ResizeImageKey.__(key, this.width, this.height));
        } else {
          completer.complete(new image_provider.ResizeImageKey.__(key, this.width, this.height));
        }
      }, T$.ObjectToNull()));
      if (result != null) {
        return dart.nullCheck(result);
      }
      completer = T$.CompleterOfResizeImageKey().new();
      return completer.future;
    }
  };
  (image_provider.ResizeImage.new = function(imageProvider, opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let allowUpscaling = opts && 'allowUpscaling' in opts ? opts.allowUpscaling : false;
    this[imageProvider$] = imageProvider;
    this[width$] = width;
    this[height$] = height;
    this[allowUpscaling$] = allowUpscaling;
    if (!(width != null || height != null)) dart.assertFailed(null, I[1], 806, 15, "width != null || height != null");
    if (!(allowUpscaling !== null)) dart.assertFailed(null, I[1], 807, 15, "allowUpscaling != null");
    image_provider.ResizeImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.ResizeImage.prototype;
  dart.addTypeTests(image_provider.ResizeImage);
  dart.addTypeCaches(image_provider.ResizeImage);
  dart.setMethodSignature(image_provider.ResizeImage, () => ({
    __proto__: dart.getMethods(image_provider.ResizeImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.ResizeImageKey), [image_provider.ImageConfiguration])
  }));
  dart.setStaticMethodSignature(image_provider.ResizeImage, () => ['resizeIfNeeded']);
  dart.setLibraryUri(image_provider.ResizeImage, I[2]);
  dart.setFieldSignature(image_provider.ResizeImage, () => ({
    __proto__: dart.getFields(image_provider.ResizeImage.__proto__),
    imageProvider: dart.finalFieldType(image_provider.ImageProvider$(core.Object)),
    width: dart.finalFieldType(dart.nullable(core.int)),
    height: dart.finalFieldType(dart.nullable(core.int)),
    allowUpscaling: dart.finalFieldType(core.bool)
  }));
  var file$ = dart.privateName(image_provider, "FileImage.file");
  var scale$1 = dart.privateName(image_provider, "FileImage.scale");
  image_provider.FileImage = class FileImage extends image_provider.ImageProvider {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get scale() {
      return this[scale$1];
    }
    set scale(value) {
      super.scale = value;
    }
    static ['_#new#tearOff'](file, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      return new image_provider.FileImage.new(file, {scale: scale});
    }
    obtainKey(configuration) {
      return new (T$.SynchronousFutureOfFileImage()).new(this);
    }
    load(key, decode) {
      image_provider.FileImage.as(key);
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, null, decode), scale: key.scale, debugLabel: key.file.path, informationCollector: dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new("Path: " + this.file.path)]), T$.VoidToListOfDiagnosticsNode())});
    }
    loadBuffer(key, decode) {
      image_provider.FileImage.as(key);
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, decode, null), scale: key.scale, debugLabel: key.file.path, informationCollector: dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new("Path: " + this.file.path)]), T$.VoidToListOfDiagnosticsNode())});
    }
    [_loadAsync$](key, decode, decodeDeprecated) {
      return async.async(ui.Codec, (function* _loadAsync() {
        if (!key._equals(this)) dart.assertFailed(null, I[1], 992, 12, "key == this");
        let bytes = (yield this.file.readAsBytes());
        if (bytes[$lengthInBytes] === 0) {
          binding.PaintingBinding.instance.imageCache.evict(key);
          dart.throw(new core.StateError.new(dart.str(this.file) + " is empty and cannot be loaded as an image."));
        }
        if (decode != null) {
          return decode(yield ui.ImmutableBuffer.fromUint8List(bytes));
        }
        return dart.nullCheck(decodeDeprecated)(bytes);
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_provider.FileImage.is(other) && other.file.path === this.file.path && other.scale === this.scale;
    }
    get hashCode() {
      return core.Object.hash(this.file.path, this.scale);
    }
    toString() {
      return object.objectRuntimeType(this, "FileImage") + "(\"" + this.file.path + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.FileImage.new = function(file, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    this[file$] = file;
    this[scale$1] = scale;
    if (!(file !== null)) dart.assertFailed(null, I[1], 953, 14, "file != null");
    if (!(scale !== null)) dart.assertFailed(null, I[1], 954, 14, "scale != null");
    image_provider.FileImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.FileImage.prototype;
  dart.addTypeTests(image_provider.FileImage);
  dart.addTypeCaches(image_provider.FileImage);
  dart.setMethodSignature(image_provider.FileImage, () => ({
    __proto__: dart.getMethods(image_provider.FileImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.FileImage), [image_provider.ImageConfiguration]),
    [_loadAsync$]: dart.fnType(async.Future$(ui.Codec), [image_provider.FileImage, dart.nullable(dart.fnType(async.Future$(ui.Codec), [ui.ImmutableBuffer], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})), dart.nullable(dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {}))])
  }));
  dart.setLibraryUri(image_provider.FileImage, I[2]);
  dart.setFieldSignature(image_provider.FileImage, () => ({
    __proto__: dart.getFields(image_provider.FileImage.__proto__),
    file: dart.finalFieldType(io.File),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.FileImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.FileImage, ['hashCode']);
  var bytes$ = dart.privateName(image_provider, "MemoryImage.bytes");
  var scale$2 = dart.privateName(image_provider, "MemoryImage.scale");
  image_provider.MemoryImage = class MemoryImage extends image_provider.ImageProvider {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    get scale() {
      return this[scale$2];
    }
    set scale(value) {
      super.scale = value;
    }
    static ['_#new#tearOff'](bytes, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      return new image_provider.MemoryImage.new(bytes, {scale: scale});
    }
    obtainKey(configuration) {
      return new (T$.SynchronousFutureOfMemoryImage()).new(this);
    }
    load(key, decode) {
      image_provider.MemoryImage.as(key);
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, null, decode), scale: key.scale, debugLabel: "MemoryImage(" + diagnostics.describeIdentity(key.bytes) + ")"});
    }
    loadBuffer(key, decode) {
      image_provider.MemoryImage.as(key);
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](key, decode, null), scale: key.scale, debugLabel: "MemoryImage(" + diagnostics.describeIdentity(key.bytes) + ")"});
    }
    [_loadAsync$](key, decode, decodeDepreacted) {
      return async.async(ui.Codec, (function* _loadAsync() {
        if (!key._equals(this)) dart.assertFailed(null, I[1], 1087, 12, "key == this");
        if (decode != null) {
          let buffer = (yield ui.ImmutableBuffer.fromUint8List(this.bytes));
          return decode(buffer);
        }
        return dart.nullCheck(decodeDepreacted)(this.bytes);
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_provider.MemoryImage.is(other) && other.bytes[$_equals](this.bytes) && other.scale === this.scale;
    }
    get hashCode() {
      return core.Object.hash(this.bytes[$hashCode], this.scale);
    }
    toString() {
      return object.objectRuntimeType(this, "MemoryImage") + "(" + diagnostics.describeIdentity(this.bytes) + ", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.MemoryImage.new = function(bytes, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    this[bytes$] = bytes;
    this[scale$2] = scale;
    if (!(bytes !== null)) dart.assertFailed(null, I[1], 1042, 14, "bytes != null");
    if (!(scale !== null)) dart.assertFailed(null, I[1], 1043, 14, "scale != null");
    image_provider.MemoryImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.MemoryImage.prototype;
  dart.addTypeTests(image_provider.MemoryImage);
  dart.addTypeCaches(image_provider.MemoryImage);
  dart.setMethodSignature(image_provider.MemoryImage, () => ({
    __proto__: dart.getMethods(image_provider.MemoryImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.MemoryImage), [image_provider.ImageConfiguration]),
    [_loadAsync$]: dart.fnType(async.Future$(ui.Codec), [image_provider.MemoryImage, dart.nullable(dart.fnType(async.Future$(ui.Codec), [ui.ImmutableBuffer], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})), dart.nullable(dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {}))])
  }));
  dart.setLibraryUri(image_provider.MemoryImage, I[2]);
  dart.setFieldSignature(image_provider.MemoryImage, () => ({
    __proto__: dart.getFields(image_provider.MemoryImage.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.MemoryImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.MemoryImage, ['hashCode']);
  var assetName$ = dart.privateName(image_provider, "ExactAssetImage.assetName");
  var scale$3 = dart.privateName(image_provider, "ExactAssetImage.scale");
  var bundle$1 = dart.privateName(image_provider, "ExactAssetImage.bundle");
  var $package$ = dart.privateName(image_provider, "ExactAssetImage.package");
  image_provider.ExactAssetImage = class ExactAssetImage extends image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get scale() {
      return this[scale$3];
    }
    set scale(value) {
      super.scale = value;
    }
    get bundle() {
      return this[bundle$1];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[$package$];
    }
    set package(value) {
      super.package = value;
    }
    static ['_#new#tearOff'](assetName, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      return new image_provider.ExactAssetImage.new(assetName, {scale: scale, bundle: bundle, package: $package});
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + this.assetName;
    }
    obtainKey(configuration) {
      let t6, t6$;
      return new (T$.SynchronousFutureOfAssetBundleImageKey()).new(new image_provider.AssetBundleImageKey.new({bundle: (t6$ = (t6 = this.bundle, t6 == null ? configuration.bundle : t6), t6$ == null ? asset_bundle.rootBundle : t6$), name: this.keyName, scale: this.scale}));
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_provider.ExactAssetImage.is(other) && other.keyName === this.keyName && other.scale === this.scale && dart.equals(other.bundle, this.bundle);
    }
    get hashCode() {
      return core.Object.hash(this.keyName, this.scale, this.bundle);
    }
    toString() {
      return object.objectRuntimeType(this, "ExactAssetImage") + "(name: \"" + this.keyName + "\", scale: " + dart.str(this.scale) + ", bundle: " + dart.str(this.bundle) + ")";
    }
  };
  (image_provider.ExactAssetImage.new = function(assetName, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[assetName$] = assetName;
    this[scale$3] = scale;
    this[bundle$1] = bundle;
    this[$package$] = $package;
    if (!(assetName !== null)) dart.assertFailed(null, I[1], 1202, 15, "assetName != null");
    if (!(scale !== null)) dart.assertFailed(null, I[1], 1203, 15, "scale != null");
    image_provider.ExactAssetImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.ExactAssetImage.prototype;
  dart.addTypeTests(image_provider.ExactAssetImage);
  dart.addTypeCaches(image_provider.ExactAssetImage);
  dart.setMethodSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getMethods(image_provider.ExactAssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.AssetBundleImageKey), [image_provider.ImageConfiguration])
  }));
  dart.setGetterSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getGetters(image_provider.ExactAssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(image_provider.ExactAssetImage, I[2]);
  dart.setFieldSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getFields(image_provider.ExactAssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    bundle: dart.finalFieldType(dart.nullable(asset_bundle.AssetBundle)),
    package: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(image_provider.ExactAssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.ExactAssetImage, ['hashCode']);
  image_provider._ErrorImageCompleter = class _ErrorImageCompleter extends image_stream.ImageStreamCompleter {
    static ['_#new#tearOff']() {
      return new image_provider._ErrorImageCompleter.new();
    }
  };
  (image_provider._ErrorImageCompleter.new = function() {
    image_provider._ErrorImageCompleter.__proto__.new.call(this);
    ;
  }).prototype = image_provider._ErrorImageCompleter.prototype;
  dart.addTypeTests(image_provider._ErrorImageCompleter);
  dart.addTypeCaches(image_provider._ErrorImageCompleter);
  dart.setLibraryUri(image_provider._ErrorImageCompleter, I[2]);
  var statusCode$ = dart.privateName(image_provider, "NetworkImageLoadException.statusCode");
  var uri$ = dart.privateName(image_provider, "NetworkImageLoadException.uri");
  var _message = dart.privateName(image_provider, "_message");
  image_provider.NetworkImageLoadException = class NetworkImageLoadException extends core.Object {
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    static ['_#new#tearOff'](opts) {
      let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
      let uri = opts && 'uri' in opts ? opts.uri : null;
      return new image_provider.NetworkImageLoadException.new({statusCode: statusCode, uri: uri});
    }
    toString() {
      return this[_message];
    }
  };
  (image_provider.NetworkImageLoadException.new = function(opts) {
    let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
    let uri = opts && 'uri' in opts ? opts.uri : null;
    this[statusCode$] = statusCode;
    this[uri$] = uri;
    if (!(uri !== null)) dart.assertFailed(null, I[1], 1264, 16, "uri != null");
    if (!(statusCode !== null)) dart.assertFailed(null, I[1], 1265, 16, "statusCode != null");
    this[_message] = "HTTP request failed, statusCode: " + dart.str(statusCode) + ", " + dart.str(uri);
    ;
  }).prototype = image_provider.NetworkImageLoadException.prototype;
  dart.addTypeTests(image_provider.NetworkImageLoadException);
  dart.addTypeCaches(image_provider.NetworkImageLoadException);
  image_provider.NetworkImageLoadException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(image_provider.NetworkImageLoadException, I[2]);
  dart.setFieldSignature(image_provider.NetworkImageLoadException, () => ({
    __proto__: dart.getFields(image_provider.NetworkImageLoadException.__proto__),
    statusCode: dart.finalFieldType(core.int),
    [_message]: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.defineExtensionMethods(image_provider.NetworkImageLoadException, ['toString']);
  dart.setBaseClass(image_provider.NetworkImage, image_provider.ImageProvider$(image_provider.NetworkImage));
  dart.setBaseClass(image_provider.FileImage, image_provider.ImageProvider$(image_provider.FileImage));
  dart.setBaseClass(image_provider.MemoryImage, image_provider.ImageProvider$(image_provider.MemoryImage));
  dart.trackLibraries("packages/flutter/src/painting/_network_image_web.dart", {
    "package:flutter/src/painting/_network_image_web.dart": _network_image_web,
    "package:flutter/src/painting/image_provider.dart": image_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_provider.dart","_network_image_web.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/_network_image_web.dart.lib.js"}');
  // Exports:
  return {
    src__painting___network_image_web: _network_image_web,
    src__painting__image_provider: image_provider
  };
}));

//# sourceMappingURL=_network_image_web.dart.lib.js.map