define(['dart_sdk', 'packages/http/retry.dart', 'packages/http/src/multipart_request.dart', 'packages/flutter/src/painting/image_stream.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/synchronous_future.dart', 'packages/flutter/src/painting/_network_image_web.dart'], (function load__packages__flutter_map__src__layer__tile_layer__tile_provider__network_image_provider_dart(dart_sdk, packages__http__retry$46dart, packages__http__src__multipart_request$46dart, packages__flutter__src__painting__image_stream$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__synchronous_future$46dart, packages__flutter__src__painting___network_image_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const retry = packages__http__retry$46dart.retry;
  const client = packages__http__src__multipart_request$46dart.src__client;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const synchronous_future = packages__flutter__src__foundation__synchronous_future$46dart.src__foundation__synchronous_future;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  var network_image_provider = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    SyncIterableOfDiagnosticsNode: () => (T.SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))(),
    IterableOfDiagnosticsNode: () => (T.IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))(),
    VoidToIterableOfDiagnosticsNode: () => (T.VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(T.IterableOfDiagnosticsNode(), [])))(),
    SynchronousFutureOfFMNetworkImageProvider: () => (T.SynchronousFutureOfFMNetworkImageProvider = dart.constFn(synchronous_future.SynchronousFuture$(network_image_provider.FMNetworkImageProvider)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constMap(core.String, core.String, []);
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_map-3.0.0/lib/src/layer/tile_layer/tile_provider/network_image_provider.dart",
    "package:flutter_map/src/layer/tile_layer/tile_provider/network_image_provider.dart"
  ];
  var url$ = dart.privateName(network_image_provider, "FMNetworkImageProvider.url");
  var retryClient$ = dart.privateName(network_image_provider, "FMNetworkImageProvider.retryClient");
  var headers$ = dart.privateName(network_image_provider, "FMNetworkImageProvider.headers");
  var _loadWithRetry = dart.privateName(network_image_provider, "_loadWithRetry");
  network_image_provider.FMNetworkImageProvider = class FMNetworkImageProvider extends image_provider.ImageProvider {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get retryClient() {
      return this[retryClient$];
    }
    set retryClient(value) {
      super.retryClient = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    static ['_#new#tearOff'](url, opts) {
      let retryClient = opts && 'retryClient' in opts ? opts.retryClient : null;
      let headers = opts && 'headers' in opts ? opts.headers : C[0] || CT.C0;
      return new network_image_provider.FMNetworkImageProvider.new(url, {retryClient: retryClient, headers: headers});
    }
    loadBuffer(key, decode) {
      network_image_provider.FMNetworkImageProvider.as(key);
      return new image_stream.OneFrameImageStreamCompleter.new(this[_loadWithRetry](key, decode), {informationCollector: dart.fn(() => new (T.SyncIterableOfDiagnosticsNode()).new((function*() {
          yield new assertions.ErrorDescription.new("Image provider: " + dart.str(this));
          yield new assertions.ErrorDescription.new("Image key: " + dart.str(key));
        }).bind(this)), T.VoidToIterableOfDiagnosticsNode())});
    }
    obtainKey(configuration) {
      return new (T.SynchronousFutureOfFMNetworkImageProvider()).new(this);
    }
    [_loadWithRetry](key, decode) {
      return async.async(image_stream.ImageInfo, (function* _loadWithRetry() {
        if (!key[$_equals](this)) dart.assertFailed(null, I[0], 43, 12, "key == this");
        let uri = core.Uri.parse(this.url);
        let response = (yield this.retryClient.get(uri, {headers: this.headers}));
        if (response.statusCode !== 200) {
          dart.throw(new image_provider.NetworkImageLoadException.new({statusCode: response.statusCode, uri: uri}));
        }
        let codec = (yield decode(yield ui.ImmutableBuffer.fromUint8List(response.bodyBytes)));
        let image = (yield codec.getNextFrame()).image;
        return new image_stream.ImageInfo.new({image: image});
      }).bind(this));
    }
  };
  (network_image_provider.FMNetworkImageProvider.new = function(url, opts) {
    let t0;
    let retryClient = opts && 'retryClient' in opts ? opts.retryClient : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[0] || CT.C0;
    this[url$] = url;
    this[headers$] = headers;
    this[retryClient$] = (t0 = retryClient, t0 == null ? new retry.RetryClient.new(client.Client.new()) : t0);
    network_image_provider.FMNetworkImageProvider.__proto__.new.call(this);
    ;
  }).prototype = network_image_provider.FMNetworkImageProvider.prototype;
  dart.addTypeTests(network_image_provider.FMNetworkImageProvider);
  dart.addTypeCaches(network_image_provider.FMNetworkImageProvider);
  dart.setMethodSignature(network_image_provider.FMNetworkImageProvider, () => ({
    __proto__: dart.getMethods(network_image_provider.FMNetworkImageProvider.__proto__),
    obtainKey: dart.fnType(async.Future$(network_image_provider.FMNetworkImageProvider), [image_provider.ImageConfiguration]),
    [_loadWithRetry]: dart.fnType(async.Future$(image_stream.ImageInfo), [network_image_provider.FMNetworkImageProvider, dart.fnType(async.Future$(ui.Codec), [ui.ImmutableBuffer], {allowUpscaling: core.bool, cacheHeight: dart.nullable(core.int), cacheWidth: dart.nullable(core.int)}, {})])
  }));
  dart.setLibraryUri(network_image_provider.FMNetworkImageProvider, I[1]);
  dart.setFieldSignature(network_image_provider.FMNetworkImageProvider, () => ({
    __proto__: dart.getFields(network_image_provider.FMNetworkImageProvider.__proto__),
    url: dart.finalFieldType(core.String),
    retryClient: dart.finalFieldType(retry.RetryClient),
    headers: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.setBaseClass(network_image_provider.FMNetworkImageProvider, image_provider.ImageProvider$(network_image_provider.FMNetworkImageProvider));
  dart.trackLibraries("packages/flutter_map/src/layer/tile_layer/tile_provider/network_image_provider.dart", {
    "package:flutter_map/src/layer/tile_layer/tile_provider/network_image_provider.dart": network_image_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["network_image_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IAGK;;;;;;IAGQ;;;;;;;;;;;eAUC,KAA2B;;AACpD,YAAO,mDAA6B,qBAAe,GAAG,EAAE,MAAM,0BACpC;AACxB,gBAAM,oCAAiB,AAAuB,8BAAL;AACzC,gBAAM,oCAAiB,AAAiB,yBAAJ,GAAG;QACxC;IACH;cAG4D;AAC1D,YAAO,yDAA0C;IACnD;qBAGyB,KACD;AAFQ;AAI9B,aAAO,AAAI,GAAD,WAAI;AAER,kBAAU,eAAM;AAChB,wBAAW,MAAM,AAAY,qBAAI,GAAG,YAAW;AAErD,YAAI,AAAS,QAAD,gBAAe;AAEqB,UAD9C,WAAM,8DACU,AAAS,QAAD,kBAAkB,GAAG;;AAGzC,qBACF,MAAM,AAAM,MAAA,CAAC,MAAsB,iCAAc,AAAS,QAAD;AACvD,oBAAqC,CAA5B,MAAM,AAAM,KAAD;AAE1B,cAAO,wCAAiB,KAAK;MAC/B;;;gEAvCO;;QACQ;QACR;IAFA;IAEA;IACU,sBAAc,KAAZ,WAAW,EAAX,aAAe,0BAAY;AAJ9C;;EAIuD","file":"../../../../../../../../../../../../../../packages/flutter_map/src/layer/tile_layer/tile_provider/network_image_provider.dart.lib.js"}');
  // Exports:
  return {
    src__layer__tile_layer__tile_provider__network_image_provider: network_image_provider
  };
}));

//# sourceMappingURL=network_image_provider.dart.lib.js.map
