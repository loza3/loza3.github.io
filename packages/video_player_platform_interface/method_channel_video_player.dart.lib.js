define(['dart_sdk', 'packages/video_player_platform_interface/messages.g.dart', 'packages/flutter/src/widgets/texture.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/plugin_platform_interface/plugin_platform_interface.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__video_player_platform_interface__method_channel_video_player_dart(dart_sdk, packages__video_player_platform_interface__messages$46g$46dart, packages__flutter__src__widgets__texture$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__plugin_platform_interface__plugin_platform_interface$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const messages$46g = packages__video_player_platform_interface__messages$46g$46dart.messages$46g;
  const texture = packages__flutter__src__widgets__texture$46dart.src__widgets__texture;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface$46dart.plugin_platform_interface;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var method_channel_video_player = Object.create(dart.library);
  var video_player_platform_interface = Object.create(dart.library);
  var $_get = dartx._get;
  var $toDouble = dartx.toDouble;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    numN: () => (T.numN = dart.constFn(dart.nullable(core.num)))(),
    dynamicToVideoEvent: () => (T.dynamicToVideoEvent = dart.constFn(dart.fnType(video_player_platform_interface.VideoEvent, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: video_player_platform_interface.DataSourceType.prototype,
        [_Enum__name]: "asset",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: video_player_platform_interface.DataSourceType.prototype,
        [_Enum__name]: "network",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: video_player_platform_interface.DataSourceType.prototype,
        [_Enum__name]: "file",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: video_player_platform_interface.DataSourceType.prototype,
        [_Enum__name]: "contentUri",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Texture",
        [_Location_column]: 12,
        [_Location_line]: 142,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/video_player_platform_interface-5.1.4/lib/method_channel_video_player.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: video_player_platform_interface.VideoFormat.prototype,
        [_Enum__name]: "ss",
        [_Enum_index]: 2
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: video_player_platform_interface.VideoFormat.prototype,
        [_Enum__name]: "hls",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: video_player_platform_interface.VideoFormat.prototype,
        [_Enum__name]: "dash",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: video_player_platform_interface.VideoFormat.prototype,
        [_Enum__name]: "other",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.constMap(video_player_platform_interface.VideoFormat, core.String, [C[6] || CT.C6, "ss", C[7] || CT.C7, "hls", C[8] || CT.C8, "dash", C[9] || CT.C9, "other"]);
    },
    get C10() {
      return C[10] = dart.constMap(core.String, core.String, []);
    },
    get C11() {
      return C[11] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], video_player_platform_interface.DataSourceType);
    },
    get C12() {
      return C[12] = dart.constList([C[8] || CT.C8, C[7] || CT.C7, C[6] || CT.C6, C[9] || CT.C9], video_player_platform_interface.VideoFormat);
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: video_player_platform_interface.VideoEventType.prototype,
        [_Enum__name]: "initialized",
        [_Enum_index]: 0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: video_player_platform_interface.VideoEventType.prototype,
        [_Enum__name]: "completed",
        [_Enum_index]: 1
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: video_player_platform_interface.VideoEventType.prototype,
        [_Enum__name]: "bufferingUpdate",
        [_Enum_index]: 2
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: video_player_platform_interface.VideoEventType.prototype,
        [_Enum__name]: "bufferingStart",
        [_Enum_index]: 3
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: video_player_platform_interface.VideoEventType.prototype,
        [_Enum__name]: "bufferingEnd",
        [_Enum_index]: 4
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: video_player_platform_interface.VideoEventType.prototype,
        [_Enum__name]: "unknown",
        [_Enum_index]: 5
      });
    },
    get C13() {
      return C[13] = dart.constList([C[14] || CT.C14, C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17, C[18] || CT.C18, C[19] || CT.C19], video_player_platform_interface.VideoEventType);
    }
  }, false);
  var C = Array(20).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/video_player_platform_interface-5.1.4/lib/method_channel_video_player.dart",
    "package:video_player_platform_interface/video_player_platform_interface.dart",
    "package:video_player_platform_interface/method_channel_video_player.dart"
  ];
  var _api = dart.privateName(method_channel_video_player, "_api");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _eventChannelFor = dart.privateName(method_channel_video_player, "_eventChannelFor");
  var _toDurationRange = dart.privateName(method_channel_video_player, "_toDurationRange");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  video_player_platform_interface.VideoPlayerPlatform = class VideoPlayerPlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return video_player_platform_interface.VideoPlayerPlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verify(instance, video_player_platform_interface.VideoPlayerPlatform._token);
      video_player_platform_interface.VideoPlayerPlatform._instance = instance;
    }
    init() {
      dart.throw(new core.UnimplementedError.new("init() has not been implemented."));
    }
    dispose(textureId) {
      dart.throw(new core.UnimplementedError.new("dispose() has not been implemented."));
    }
    create(dataSource) {
      dart.throw(new core.UnimplementedError.new("create() has not been implemented."));
    }
    videoEventsFor(textureId) {
      dart.throw(new core.UnimplementedError.new("videoEventsFor() has not been implemented."));
    }
    setLooping(textureId, looping) {
      dart.throw(new core.UnimplementedError.new("setLooping() has not been implemented."));
    }
    play(textureId) {
      dart.throw(new core.UnimplementedError.new("play() has not been implemented."));
    }
    pause(textureId) {
      dart.throw(new core.UnimplementedError.new("pause() has not been implemented."));
    }
    setVolume(textureId, volume) {
      dart.throw(new core.UnimplementedError.new("setVolume() has not been implemented."));
    }
    seekTo(textureId, position) {
      dart.throw(new core.UnimplementedError.new("seekTo() has not been implemented."));
    }
    setPlaybackSpeed(textureId, speed) {
      dart.throw(new core.UnimplementedError.new("setPlaybackSpeed() has not been implemented."));
    }
    getPosition(textureId) {
      dart.throw(new core.UnimplementedError.new("getPosition() has not been implemented."));
    }
    buildView(textureId) {
      dart.throw(new core.UnimplementedError.new("buildView() has not been implemented."));
    }
    setMixWithOthers(mixWithOthers) {
      dart.throw(new core.UnimplementedError.new("setMixWithOthers() has not been implemented."));
    }
  };
  (video_player_platform_interface.VideoPlayerPlatform.new = function() {
    video_player_platform_interface.VideoPlayerPlatform.__proto__.new.call(this, {token: video_player_platform_interface.VideoPlayerPlatform._token});
    ;
  }).prototype = video_player_platform_interface.VideoPlayerPlatform.prototype;
  dart.addTypeTests(video_player_platform_interface.VideoPlayerPlatform);
  dart.addTypeCaches(video_player_platform_interface.VideoPlayerPlatform);
  dart.setMethodSignature(video_player_platform_interface.VideoPlayerPlatform, () => ({
    __proto__: dart.getMethods(video_player_platform_interface.VideoPlayerPlatform.__proto__),
    init: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(async.Future$(dart.void), [core.int]),
    create: dart.fnType(async.Future$(dart.nullable(core.int)), [video_player_platform_interface.DataSource]),
    videoEventsFor: dart.fnType(async.Stream$(video_player_platform_interface.VideoEvent), [core.int]),
    setLooping: dart.fnType(async.Future$(dart.void), [core.int, core.bool]),
    play: dart.fnType(async.Future$(dart.void), [core.int]),
    pause: dart.fnType(async.Future$(dart.void), [core.int]),
    setVolume: dart.fnType(async.Future$(dart.void), [core.int, core.double]),
    seekTo: dart.fnType(async.Future$(dart.void), [core.int, core.Duration]),
    setPlaybackSpeed: dart.fnType(async.Future$(dart.void), [core.int, core.double]),
    getPosition: dart.fnType(async.Future$(core.Duration), [core.int]),
    buildView: dart.fnType(framework.Widget, [core.int]),
    setMixWithOthers: dart.fnType(async.Future$(dart.void), [core.bool])
  }));
  dart.setStaticGetterSignature(video_player_platform_interface.VideoPlayerPlatform, () => ['instance']);
  dart.setStaticSetterSignature(video_player_platform_interface.VideoPlayerPlatform, () => ['instance']);
  dart.setLibraryUri(video_player_platform_interface.VideoPlayerPlatform, I[1]);
  dart.setStaticFieldSignature(video_player_platform_interface.VideoPlayerPlatform, () => ['_token', '_instance']);
  dart.defineLazy(video_player_platform_interface.VideoPlayerPlatform, {
    /*video_player_platform_interface.VideoPlayerPlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*video_player_platform_interface.VideoPlayerPlatform._instance*/get _instance() {
      return new method_channel_video_player.MethodChannelVideoPlayer.new();
    },
    set _instance(_) {}
  }, false);
  method_channel_video_player.MethodChannelVideoPlayer = class MethodChannelVideoPlayer extends video_player_platform_interface.VideoPlayerPlatform {
    init() {
      return this[_api].initialize();
    }
    dispose(textureId) {
      let t0;
      return this[_api].dispose((t0 = new messages$46g.TextureMessage.new(), (() => {
        t0.textureId = textureId;
        return t0;
      })()));
    }
    create(dataSource) {
      return async.async(T.intN(), (function* create() {
        let message = new messages$46g.CreateMessage.new();
        switch (dataSource.sourceType) {
          case C[0] || CT.C0:
            {
              message.asset = dataSource.asset;
              message.packageName = dataSource.package;
              break;
            }
          case C[1] || CT.C1:
            {
              message.uri = dataSource.uri;
              message.formatHint = method_channel_video_player.MethodChannelVideoPlayer._videoFormatStringMap[$_get](dataSource.formatHint);
              message.httpHeaders = dataSource.httpHeaders;
              break;
            }
          case C[2] || CT.C2:
            {
              message.uri = dataSource.uri;
              break;
            }
          case C[3] || CT.C3:
            {
              message.uri = dataSource.uri;
              break;
            }
        }
        let response = (yield this[_api].create(message));
        return response.textureId;
      }).bind(this));
    }
    setLooping(textureId, looping) {
      let t0;
      return this[_api].setLooping((t0 = new messages$46g.LoopingMessage.new(), (() => {
        t0.textureId = textureId;
        t0.isLooping = looping;
        return t0;
      })()));
    }
    play(textureId) {
      let t0;
      return this[_api].play((t0 = new messages$46g.TextureMessage.new(), (() => {
        t0.textureId = textureId;
        return t0;
      })()));
    }
    pause(textureId) {
      let t0;
      return this[_api].pause((t0 = new messages$46g.TextureMessage.new(), (() => {
        t0.textureId = textureId;
        return t0;
      })()));
    }
    setVolume(textureId, volume) {
      let t0;
      return this[_api].setVolume((t0 = new messages$46g.VolumeMessage.new(), (() => {
        t0.textureId = textureId;
        t0.volume = volume;
        return t0;
      })()));
    }
    setPlaybackSpeed(textureId, speed) {
      let t0;
      if (!(speed > 0)) dart.assertFailed(null, I[0], 83, 12, "speed > 0");
      return this[_api].setPlaybackSpeed((t0 = new messages$46g.PlaybackSpeedMessage.new(), (() => {
        t0.textureId = textureId;
        t0.speed = speed;
        return t0;
      })()));
    }
    seekTo(textureId, position) {
      let t0;
      return this[_api].seekTo((t0 = new messages$46g.PositionMessage.new(), (() => {
        t0.textureId = textureId;
        t0.position = position.inMilliseconds;
        return t0;
      })()));
    }
    getPosition(textureId) {
      return async.async(core.Duration, (function* getPosition() {
        let t0;
        let response = (yield this[_api].position((t0 = new messages$46g.TextureMessage.new(), (() => {
          t0.textureId = textureId;
          return t0;
        })())));
        return new core.Duration.new({milliseconds: dart.nullCheck(response.position)});
      }).bind(this));
    }
    videoEventsFor(textureId) {
      return this[_eventChannelFor](textureId).receiveBroadcastStream().map(video_player_platform_interface.VideoEvent, dart.fn(event => {
        let t0, t0$, t0$0, t0$1, t0$2;
        let map = core.Map.as(event);
        switch (map[$_get]("event")) {
          case "initialized":
            {
              return new video_player_platform_interface.VideoEvent.new({eventType: video_player_platform_interface.VideoEventType.initialized, duration: new core.Duration.new({milliseconds: core.int.as(dart.nullCheck(map[$_get]("duration")))}), size: new ui.Size.new((t0$ = (t0 = T.numN().as(map[$_get]("width")), t0 == null ? null : t0[$toDouble]()), t0$ == null ? 0.0 : t0$), (t0$1 = (t0$0 = T.numN().as(map[$_get]("height")), t0$0 == null ? null : t0$0[$toDouble]()), t0$1 == null ? 0.0 : t0$1)), rotationCorrection: (t0$2 = T.intN().as(map[$_get]("rotationCorrection")), t0$2 == null ? 0 : t0$2)});
            }
          case "completed":
            {
              return new video_player_platform_interface.VideoEvent.new({eventType: video_player_platform_interface.VideoEventType.completed});
            }
          case "bufferingUpdate":
            {
              let values = core.List.as(dart.nullCheck(map[$_get]("values")));
              return new video_player_platform_interface.VideoEvent.new({buffered: values[$map](video_player_platform_interface.DurationRange, dart.bind(this, _toDurationRange))[$toList](), eventType: video_player_platform_interface.VideoEventType.bufferingUpdate});
            }
          case "bufferingStart":
            {
              return new video_player_platform_interface.VideoEvent.new({eventType: video_player_platform_interface.VideoEventType.bufferingStart});
            }
          case "bufferingEnd":
            {
              return new video_player_platform_interface.VideoEvent.new({eventType: video_player_platform_interface.VideoEventType.bufferingEnd});
            }
          default:
            {
              return new video_player_platform_interface.VideoEvent.new({eventType: video_player_platform_interface.VideoEventType.unknown});
            }
        }
      }, T.dynamicToVideoEvent()));
    }
    buildView(textureId) {
      return new texture.Texture.new({textureId: textureId, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    setMixWithOthers(mixWithOthers) {
      let t0;
      return this[_api].setMixWithOthers((t0 = new messages$46g.MixWithOthersMessage.new(), (() => {
        t0.mixWithOthers = mixWithOthers;
        return t0;
      })()));
    }
    [_eventChannelFor](textureId) {
      return new platform_channel.EventChannel.new("flutter.io/videoPlayer/videoEvents" + dart.str(textureId));
    }
    [_toDurationRange](value) {
      let pair = core.List.as(value);
      return new video_player_platform_interface.DurationRange.new(new core.Duration.new({milliseconds: core.int.as(dart.nullCheck(pair[$_get](0)))}), new core.Duration.new({milliseconds: core.int.as(dart.nullCheck(pair[$_get](1)))}));
    }
    static ['_#new#tearOff']() {
      return new method_channel_video_player.MethodChannelVideoPlayer.new();
    }
  };
  (method_channel_video_player.MethodChannelVideoPlayer.new = function() {
    this[_api] = new messages$46g.VideoPlayerApi.new();
    method_channel_video_player.MethodChannelVideoPlayer.__proto__.new.call(this);
    ;
  }).prototype = method_channel_video_player.MethodChannelVideoPlayer.prototype;
  dart.addTypeTests(method_channel_video_player.MethodChannelVideoPlayer);
  dart.addTypeCaches(method_channel_video_player.MethodChannelVideoPlayer);
  dart.setMethodSignature(method_channel_video_player.MethodChannelVideoPlayer, () => ({
    __proto__: dart.getMethods(method_channel_video_player.MethodChannelVideoPlayer.__proto__),
    [_eventChannelFor]: dart.fnType(platform_channel.EventChannel, [core.int]),
    [_toDurationRange]: dart.fnType(video_player_platform_interface.DurationRange, [dart.dynamic])
  }));
  dart.setLibraryUri(method_channel_video_player.MethodChannelVideoPlayer, I[2]);
  dart.setFieldSignature(method_channel_video_player.MethodChannelVideoPlayer, () => ({
    __proto__: dart.getFields(method_channel_video_player.MethodChannelVideoPlayer.__proto__),
    [_api]: dart.finalFieldType(messages$46g.VideoPlayerApi)
  }));
  dart.setStaticFieldSignature(method_channel_video_player.MethodChannelVideoPlayer, () => ['_videoFormatStringMap']);
  dart.defineLazy(method_channel_video_player.MethodChannelVideoPlayer, {
    /*method_channel_video_player.MethodChannelVideoPlayer._videoFormatStringMap*/get _videoFormatStringMap() {
      return C[5] || CT.C5;
    }
  }, false);
  var sourceType$ = dart.privateName(video_player_platform_interface, "DataSource.sourceType");
  var uri$ = dart.privateName(video_player_platform_interface, "DataSource.uri");
  var formatHint$ = dart.privateName(video_player_platform_interface, "DataSource.formatHint");
  var httpHeaders$ = dart.privateName(video_player_platform_interface, "DataSource.httpHeaders");
  var asset$ = dart.privateName(video_player_platform_interface, "DataSource.asset");
  var $package$ = dart.privateName(video_player_platform_interface, "DataSource.package");
  video_player_platform_interface.DataSource = class DataSource extends core.Object {
    get sourceType() {
      return this[sourceType$];
    }
    set sourceType(value) {
      super.sourceType = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    get formatHint() {
      return this[formatHint$];
    }
    set formatHint(value) {
      super.formatHint = value;
    }
    get httpHeaders() {
      return this[httpHeaders$];
    }
    set httpHeaders(value) {
      this[httpHeaders$] = value;
    }
    get asset() {
      return this[asset$];
    }
    set asset(value) {
      super.asset = value;
    }
    get package() {
      return this[$package$];
    }
    set package(value) {
      super.package = value;
    }
    static ['_#new#tearOff'](opts) {
      let sourceType = opts && 'sourceType' in opts ? opts.sourceType : null;
      let uri = opts && 'uri' in opts ? opts.uri : null;
      let formatHint = opts && 'formatHint' in opts ? opts.formatHint : null;
      let asset = opts && 'asset' in opts ? opts.asset : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      let httpHeaders = opts && 'httpHeaders' in opts ? opts.httpHeaders : C[10] || CT.C10;
      return new video_player_platform_interface.DataSource.new({sourceType: sourceType, uri: uri, formatHint: formatHint, asset: asset, package: $package, httpHeaders: httpHeaders});
    }
  };
  (video_player_platform_interface.DataSource.new = function(opts) {
    let sourceType = opts && 'sourceType' in opts ? opts.sourceType : null;
    let uri = opts && 'uri' in opts ? opts.uri : null;
    let formatHint = opts && 'formatHint' in opts ? opts.formatHint : null;
    let asset = opts && 'asset' in opts ? opts.asset : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    let httpHeaders = opts && 'httpHeaders' in opts ? opts.httpHeaders : C[10] || CT.C10;
    this[sourceType$] = sourceType;
    this[uri$] = uri;
    this[formatHint$] = formatHint;
    this[asset$] = asset;
    this[$package$] = $package;
    this[httpHeaders$] = httpHeaders;
    ;
  }).prototype = video_player_platform_interface.DataSource.prototype;
  dart.addTypeTests(video_player_platform_interface.DataSource);
  dart.addTypeCaches(video_player_platform_interface.DataSource);
  dart.setLibraryUri(video_player_platform_interface.DataSource, I[1]);
  dart.setFieldSignature(video_player_platform_interface.DataSource, () => ({
    __proto__: dart.getFields(video_player_platform_interface.DataSource.__proto__),
    sourceType: dart.finalFieldType(video_player_platform_interface.DataSourceType),
    uri: dart.finalFieldType(dart.nullable(core.String)),
    formatHint: dart.finalFieldType(dart.nullable(video_player_platform_interface.VideoFormat)),
    httpHeaders: dart.fieldType(core.Map$(core.String, core.String)),
    asset: dart.finalFieldType(dart.nullable(core.String)),
    package: dart.finalFieldType(dart.nullable(core.String))
  }));
  var _name = dart.privateName(core, "_name");
  video_player_platform_interface.DataSourceType = class DataSourceType extends core._Enum {
    toString() {
      return "DataSourceType." + this[_name];
    }
  };
  (video_player_platform_interface.DataSourceType.new = function(index, name) {
    video_player_platform_interface.DataSourceType.__proto__.new.call(this, index, name);
    ;
  }).prototype = video_player_platform_interface.DataSourceType.prototype;
  dart.addTypeTests(video_player_platform_interface.DataSourceType);
  dart.addTypeCaches(video_player_platform_interface.DataSourceType);
  dart.setLibraryUri(video_player_platform_interface.DataSourceType, I[1]);
  dart.setStaticFieldSignature(video_player_platform_interface.DataSourceType, () => ['values', 'asset', 'network', 'file', 'contentUri']);
  dart.defineExtensionMethods(video_player_platform_interface.DataSourceType, ['toString']);
  dart.defineLazy(video_player_platform_interface.DataSourceType, {
    /*video_player_platform_interface.DataSourceType.values*/get values() {
      return C[11] || CT.C11;
    },
    /*video_player_platform_interface.DataSourceType.asset*/get asset() {
      return C[0] || CT.C0;
    },
    /*video_player_platform_interface.DataSourceType.network*/get network() {
      return C[1] || CT.C1;
    },
    /*video_player_platform_interface.DataSourceType.file*/get file() {
      return C[2] || CT.C2;
    },
    /*video_player_platform_interface.DataSourceType.contentUri*/get contentUri() {
      return C[3] || CT.C3;
    }
  }, false);
  video_player_platform_interface.VideoFormat = class VideoFormat extends core._Enum {
    toString() {
      return "VideoFormat." + this[_name];
    }
  };
  (video_player_platform_interface.VideoFormat.new = function(index, name) {
    video_player_platform_interface.VideoFormat.__proto__.new.call(this, index, name);
    ;
  }).prototype = video_player_platform_interface.VideoFormat.prototype;
  dart.addTypeTests(video_player_platform_interface.VideoFormat);
  dart.addTypeCaches(video_player_platform_interface.VideoFormat);
  dart.setLibraryUri(video_player_platform_interface.VideoFormat, I[1]);
  dart.setStaticFieldSignature(video_player_platform_interface.VideoFormat, () => ['values', 'dash', 'hls', 'ss', 'other']);
  dart.defineExtensionMethods(video_player_platform_interface.VideoFormat, ['toString']);
  dart.defineLazy(video_player_platform_interface.VideoFormat, {
    /*video_player_platform_interface.VideoFormat.values*/get values() {
      return C[12] || CT.C12;
    },
    /*video_player_platform_interface.VideoFormat.dash*/get dash() {
      return C[8] || CT.C8;
    },
    /*video_player_platform_interface.VideoFormat.hls*/get hls() {
      return C[7] || CT.C7;
    },
    /*video_player_platform_interface.VideoFormat.ss*/get ss() {
      return C[6] || CT.C6;
    },
    /*video_player_platform_interface.VideoFormat.other*/get other() {
      return C[9] || CT.C9;
    }
  }, false);
  var eventType$ = dart.privateName(video_player_platform_interface, "VideoEvent.eventType");
  var duration$ = dart.privateName(video_player_platform_interface, "VideoEvent.duration");
  var size$ = dart.privateName(video_player_platform_interface, "VideoEvent.size");
  var rotationCorrection$ = dart.privateName(video_player_platform_interface, "VideoEvent.rotationCorrection");
  var buffered$ = dart.privateName(video_player_platform_interface, "VideoEvent.buffered");
  video_player_platform_interface.VideoEvent = class VideoEvent extends core.Object {
    get eventType() {
      return this[eventType$];
    }
    set eventType(value) {
      super.eventType = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get rotationCorrection() {
      return this[rotationCorrection$];
    }
    set rotationCorrection(value) {
      super.rotationCorrection = value;
    }
    get buffered() {
      return this[buffered$];
    }
    set buffered(value) {
      super.buffered = value;
    }
    static ['_#new#tearOff'](opts) {
      let eventType = opts && 'eventType' in opts ? opts.eventType : null;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let rotationCorrection = opts && 'rotationCorrection' in opts ? opts.rotationCorrection : null;
      let buffered = opts && 'buffered' in opts ? opts.buffered : null;
      return new video_player_platform_interface.VideoEvent.new({eventType: eventType, duration: duration, size: size, rotationCorrection: rotationCorrection, buffered: buffered});
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || video_player_platform_interface.VideoEvent.is(other) && this[$runtimeType]._equals(other[$runtimeType]) && this.eventType === other.eventType && dart.equals(this.duration, other.duration) && dart.equals(this.size, other.size) && this.rotationCorrection == other.rotationCorrection && collections.listEquals(video_player_platform_interface.DurationRange, this.buffered, other.buffered);
    }
    get hashCode() {
      return core.Object.hash(this.eventType, this.duration, this.size, this.rotationCorrection, this.buffered);
    }
  };
  (video_player_platform_interface.VideoEvent.new = function(opts) {
    let eventType = opts && 'eventType' in opts ? opts.eventType : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let rotationCorrection = opts && 'rotationCorrection' in opts ? opts.rotationCorrection : null;
    let buffered = opts && 'buffered' in opts ? opts.buffered : null;
    this[eventType$] = eventType;
    this[duration$] = duration;
    this[size$] = size;
    this[rotationCorrection$] = rotationCorrection;
    this[buffered$] = buffered;
    ;
  }).prototype = video_player_platform_interface.VideoEvent.prototype;
  dart.addTypeTests(video_player_platform_interface.VideoEvent);
  dart.addTypeCaches(video_player_platform_interface.VideoEvent);
  dart.setLibraryUri(video_player_platform_interface.VideoEvent, I[1]);
  dart.setFieldSignature(video_player_platform_interface.VideoEvent, () => ({
    __proto__: dart.getFields(video_player_platform_interface.VideoEvent.__proto__),
    eventType: dart.finalFieldType(video_player_platform_interface.VideoEventType),
    duration: dart.finalFieldType(dart.nullable(core.Duration)),
    size: dart.finalFieldType(dart.nullable(ui.Size)),
    rotationCorrection: dart.finalFieldType(dart.nullable(core.int)),
    buffered: dart.finalFieldType(dart.nullable(core.List$(video_player_platform_interface.DurationRange)))
  }));
  dart.defineExtensionMethods(video_player_platform_interface.VideoEvent, ['_equals']);
  dart.defineExtensionAccessors(video_player_platform_interface.VideoEvent, ['hashCode']);
  video_player_platform_interface.VideoEventType = class VideoEventType extends core._Enum {
    toString() {
      return "VideoEventType." + this[_name];
    }
  };
  (video_player_platform_interface.VideoEventType.new = function(index, name) {
    video_player_platform_interface.VideoEventType.__proto__.new.call(this, index, name);
    ;
  }).prototype = video_player_platform_interface.VideoEventType.prototype;
  dart.addTypeTests(video_player_platform_interface.VideoEventType);
  dart.addTypeCaches(video_player_platform_interface.VideoEventType);
  dart.setLibraryUri(video_player_platform_interface.VideoEventType, I[1]);
  dart.setStaticFieldSignature(video_player_platform_interface.VideoEventType, () => ['values', 'initialized', 'completed', 'bufferingUpdate', 'bufferingStart', 'bufferingEnd', 'unknown']);
  dart.defineExtensionMethods(video_player_platform_interface.VideoEventType, ['toString']);
  dart.defineLazy(video_player_platform_interface.VideoEventType, {
    /*video_player_platform_interface.VideoEventType.values*/get values() {
      return C[13] || CT.C13;
    },
    /*video_player_platform_interface.VideoEventType.initialized*/get initialized() {
      return C[14] || CT.C14;
    },
    /*video_player_platform_interface.VideoEventType.completed*/get completed() {
      return C[15] || CT.C15;
    },
    /*video_player_platform_interface.VideoEventType.bufferingUpdate*/get bufferingUpdate() {
      return C[16] || CT.C16;
    },
    /*video_player_platform_interface.VideoEventType.bufferingStart*/get bufferingStart() {
      return C[17] || CT.C17;
    },
    /*video_player_platform_interface.VideoEventType.bufferingEnd*/get bufferingEnd() {
      return C[18] || CT.C18;
    },
    /*video_player_platform_interface.VideoEventType.unknown*/get unknown() {
      return C[19] || CT.C19;
    }
  }, false);
  var start$ = dart.privateName(video_player_platform_interface, "DurationRange.start");
  var end$ = dart.privateName(video_player_platform_interface, "DurationRange.end");
  video_player_platform_interface.DurationRange = class DurationRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    static ['_#new#tearOff'](start, end) {
      return new video_player_platform_interface.DurationRange.new(start, end);
    }
    startFraction(duration) {
      return this.start.inMilliseconds / duration.inMilliseconds;
    }
    endFraction(duration) {
      return this.end.inMilliseconds / duration.inMilliseconds;
    }
    toString() {
      return object.objectRuntimeType(this, "DurationRange") + "(start: " + dart.str(this.start) + ", end: " + dart.str(this.end) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || video_player_platform_interface.DurationRange.is(other) && this[$runtimeType]._equals(other[$runtimeType]) && this.start._equals(other.start) && this.end._equals(other.end);
    }
    get hashCode() {
      return core.Object.hash(this.start, this.end);
    }
  };
  (video_player_platform_interface.DurationRange.new = function(start, end) {
    this[start$] = start;
    this[end$] = end;
    ;
  }).prototype = video_player_platform_interface.DurationRange.prototype;
  dart.addTypeTests(video_player_platform_interface.DurationRange);
  dart.addTypeCaches(video_player_platform_interface.DurationRange);
  dart.setMethodSignature(video_player_platform_interface.DurationRange, () => ({
    __proto__: dart.getMethods(video_player_platform_interface.DurationRange.__proto__),
    startFraction: dart.fnType(core.double, [core.Duration]),
    endFraction: dart.fnType(core.double, [core.Duration])
  }));
  dart.setLibraryUri(video_player_platform_interface.DurationRange, I[1]);
  dart.setFieldSignature(video_player_platform_interface.DurationRange, () => ({
    __proto__: dart.getFields(video_player_platform_interface.DurationRange.__proto__),
    start: dart.finalFieldType(core.Duration),
    end: dart.finalFieldType(core.Duration)
  }));
  dart.defineExtensionMethods(video_player_platform_interface.DurationRange, ['toString', '_equals']);
  dart.defineExtensionAccessors(video_player_platform_interface.DurationRange, ['hashCode']);
  var allowBackgroundPlayback$ = dart.privateName(video_player_platform_interface, "VideoPlayerOptions.allowBackgroundPlayback");
  var mixWithOthers$ = dart.privateName(video_player_platform_interface, "VideoPlayerOptions.mixWithOthers");
  video_player_platform_interface.VideoPlayerOptions = class VideoPlayerOptions extends core.Object {
    get allowBackgroundPlayback() {
      return this[allowBackgroundPlayback$];
    }
    set allowBackgroundPlayback(value) {
      super.allowBackgroundPlayback = value;
    }
    get mixWithOthers() {
      return this[mixWithOthers$];
    }
    set mixWithOthers(value) {
      super.mixWithOthers = value;
    }
    static ['_#new#tearOff'](opts) {
      let mixWithOthers = opts && 'mixWithOthers' in opts ? opts.mixWithOthers : false;
      let allowBackgroundPlayback = opts && 'allowBackgroundPlayback' in opts ? opts.allowBackgroundPlayback : false;
      return new video_player_platform_interface.VideoPlayerOptions.new({mixWithOthers: mixWithOthers, allowBackgroundPlayback: allowBackgroundPlayback});
    }
  };
  (video_player_platform_interface.VideoPlayerOptions.new = function(opts) {
    let mixWithOthers = opts && 'mixWithOthers' in opts ? opts.mixWithOthers : false;
    let allowBackgroundPlayback = opts && 'allowBackgroundPlayback' in opts ? opts.allowBackgroundPlayback : false;
    this[mixWithOthers$] = mixWithOthers;
    this[allowBackgroundPlayback$] = allowBackgroundPlayback;
    ;
  }).prototype = video_player_platform_interface.VideoPlayerOptions.prototype;
  dart.addTypeTests(video_player_platform_interface.VideoPlayerOptions);
  dart.addTypeCaches(video_player_platform_interface.VideoPlayerOptions);
  dart.setLibraryUri(video_player_platform_interface.VideoPlayerOptions, I[1]);
  dart.setFieldSignature(video_player_platform_interface.VideoPlayerOptions, () => ({
    __proto__: dart.getFields(video_player_platform_interface.VideoPlayerOptions.__proto__),
    allowBackgroundPlayback: dart.finalFieldType(core.bool),
    mixWithOthers: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/video_player_platform_interface/method_channel_video_player.dart", {
    "package:video_player_platform_interface/method_channel_video_player.dart": method_channel_video_player,
    "package:video_player_platform_interface/video_player_platform_interface.dart": video_player_platform_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["video_player_platform_interface.dart","method_channel_video_player.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/video_player_platform_interface/method_channel_video_player.dart.lib.js"}');
  // Exports:
  return {
    method_channel_video_player: method_channel_video_player,
    video_player_platform_interface: video_player_platform_interface
  };
}));

//# sourceMappingURL=method_channel_video_player.dart.lib.js.map
