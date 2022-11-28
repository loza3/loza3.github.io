define(['dart_sdk', 'packages/video_player_platform_interface/method_channel_video_player.dart', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/video_player_web/src/duration_utils.dart'], (function load__packages__video_player_web__src__video_player_dart(dart_sdk, packages__video_player_platform_interface__method_channel_video_player$46dart, packages__flutter__src__services__text_editing_delta$46dart, packages__video_player_web__src__duration_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const video_player_platform_interface = packages__video_player_platform_interface__method_channel_video_player$46dart.video_player_platform_interface;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const duration_utils = packages__video_player_web__src__duration_utils$46dart.src__duration_utils;
  var video_player = Object.create(dart.library);
  var $autoplay = dartx.autoplay;
  var $controls = dartx.controls;
  var $setAttribute = dartx.setAttribute;
  var $onCanPlay = dartx.onCanPlay;
  var $onCanPlayThrough = dartx.onCanPlayThrough;
  var $onPlaying = dartx.onPlaying;
  var $onWaiting = dartx.onWaiting;
  var $onError = dartx.onError;
  var $code = dartx.code;
  var $_get = dartx._get;
  var $onEnded = dartx.onEnded;
  var $play = dartx.play;
  var $name = dartx.name;
  var $loop = dartx.loop;
  var $muted = dartx.muted;
  var $volume = dartx.volume;
  var $playbackRate = dartx.playbackRate;
  var $currentTime = dartx.currentTime;
  var $toDouble = dartx.toDouble;
  var $round = dartx.round;
  var $removeAttribute = dartx.removeAttribute;
  var $duration = dartx.duration;
  var $isFinite = dartx.isFinite;
  var $videoHeight = dartx.videoHeight;
  var $videoWidth = dartx.videoWidth;
  var $buffered = dartx.buffered;
  var $length = dartx.length;
  var $start = dartx.start;
  var $end = dartx.end;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StreamControllerOfVideoEvent: () => (T.StreamControllerOfVideoEvent = dart.constFn(async.StreamController$(video_player_platform_interface.VideoEvent)))(),
    dynamicTovoid: () => (T.dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))(),
    EventTovoid: () => (T.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))(),
    ObjectToNull: () => (T.ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))(),
    ObjectTobool: () => (T.ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))(),
    JSArrayOfDurationRange: () => (T.JSArrayOfDurationRange = dart.constFn(_interceptors.JSArray$(video_player_platform_interface.DurationRange)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constMap(core.int, core.String, [1, "MEDIA_ERR_ABORTED", 2, "MEDIA_ERR_NETWORK", 3, "MEDIA_ERR_DECODE", 4, "MEDIA_ERR_SRC_NOT_SUPPORTED"]);
    },
    get C1() {
      return C[1] = dart.constMap(core.int, core.String, [1, "The user canceled the fetching of the video.", 2, "A network error occurred while fetching the video, despite having previously been available.", 3, "An error occurred while trying to decode the video, despite having previously been determined to be usable.", 4, "The video has been found to be unsuitable (missing or in a format not supported by your browser)."]);
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/video_player_web-2.0.12/lib/src/video_player.dart",
    "package:video_player_web/src/video_player.dart"
  ];
  var _isInitialized = dart.privateName(video_player, "_isInitialized");
  var _isBuffering = dart.privateName(video_player, "_isBuffering");
  var _videoElement = dart.privateName(video_player, "_videoElement");
  var _eventController = dart.privateName(video_player, "_eventController");
  var _sendInitialized = dart.privateName(video_player, "_sendInitialized");
  var _sendBufferingRangesUpdate = dart.privateName(video_player, "_sendBufferingRangesUpdate");
  var _toDurationRange = dart.privateName(video_player, "_toDurationRange");
  video_player.VideoPlayer = class VideoPlayer extends core.Object {
    static ['_#new#tearOff'](opts) {
      let videoElement = opts && 'videoElement' in opts ? opts.videoElement : null;
      let eventController = opts && 'eventController' in opts ? opts.eventController : null;
      return new video_player.VideoPlayer.new({videoElement: videoElement, eventController: eventController});
    }
    get events() {
      return this[_eventController].stream;
    }
    initialize() {
      let t0;
      t0 = this[_videoElement];
      (() => {
        t0[$autoplay] = false;
        t0[$controls] = false;
        return t0;
      })();
      this[_videoElement][$setAttribute]("playsinline", "true");
      this[_videoElement][$setAttribute]("autoplay", "false");
      this[_videoElement][$onCanPlay].listen(dart.fn(_ => {
        if (!this[_isInitialized]) {
          this[_isInitialized] = true;
          this[_sendInitialized]();
        }
      }, T.dynamicTovoid()));
      this[_videoElement][$onCanPlayThrough].listen(dart.fn(_ => {
        this.setBuffering(false);
      }, T.dynamicTovoid()));
      this[_videoElement][$onPlaying].listen(dart.fn(_ => {
        this.setBuffering(false);
      }, T.dynamicTovoid()));
      this[_videoElement][$onWaiting].listen(dart.fn(_ => {
        this.setBuffering(true);
        this[_sendBufferingRangesUpdate]();
      }, T.dynamicTovoid()));
      this[_videoElement][$onError].listen(dart.fn(_ => {
        this.setBuffering(false);
        let error = dart.nullCheck(this[_videoElement].error);
        this[_eventController].addError(new message_codec.PlatformException.new({code: dart.nullCheck(video_player._kErrorValueToErrorName[$_get](error[$code])), message: error.message !== "" ? error.message : video_player._kDefaultErrorMessage, details: video_player._kErrorValueToErrorDescription[$_get](error[$code])}));
      }, T.EventTovoid()));
      this[_videoElement][$onEnded].listen(dart.fn(_ => {
        this.setBuffering(false);
        this[_eventController].add(new video_player_platform_interface.VideoEvent.new({eventType: video_player_platform_interface.VideoEventType.completed}));
      }, T.dynamicTovoid()));
    }
    play() {
      return this[_videoElement][$play]().catchError(dart.fn(e => {
        let exception = html.DomException.as(e);
        this[_eventController].addError(new message_codec.PlatformException.new({code: exception[$name], message: exception.message}));
      }, T.ObjectToNull()), {test: dart.fn(e => html.DomException.is(e), T.ObjectTobool())});
    }
    pause() {
      this[_videoElement].pause();
    }
    setLooping(value) {
      this[_videoElement][$loop] = value;
    }
    setVolume(volume) {
      if (!(volume >= 0 && volume <= 1)) dart.assertFailed(null, I[0], 151, 12, "volume >= 0 && volume <= 1");
      this[_videoElement][$muted] = !(volume > 0.0);
      this[_videoElement][$volume] = volume;
    }
    setPlaybackSpeed(speed) {
      if (!(speed > 0)) dart.assertFailed(null, I[0], 171, 12, "speed > 0");
      this[_videoElement][$playbackRate] = speed;
    }
    seekTo(position) {
      if (!!position.isNegative) dart.assertFailed(null, I[0], 180, 12, "!position.isNegative");
      this[_videoElement][$currentTime] = position.inMilliseconds[$toDouble]() / 1000;
    }
    getPosition() {
      this[_sendBufferingRangesUpdate]();
      return new core.Duration.new({milliseconds: (this[_videoElement][$currentTime] * 1000)[$round]()});
    }
    dispose() {
      this[_videoElement][$removeAttribute]("src");
      this[_videoElement].load();
    }
    [_sendInitialized]() {
      let duration = duration_utils.convertNumVideoDurationToPluginDuration(this[_videoElement][$duration]);
      let size = this[_videoElement][$videoHeight][$isFinite] ? new ui.Size.new(this[_videoElement][$videoWidth][$toDouble](), this[_videoElement][$videoHeight][$toDouble]()) : null;
      this[_eventController].add(new video_player_platform_interface.VideoEvent.new({eventType: video_player_platform_interface.VideoEventType.initialized, duration: duration, size: size}));
    }
    setBuffering(buffering) {
      if (this[_isBuffering] !== buffering) {
        this[_isBuffering] = buffering;
        this[_eventController].add(new video_player_platform_interface.VideoEvent.new({eventType: this[_isBuffering] ? video_player_platform_interface.VideoEventType.bufferingStart : video_player_platform_interface.VideoEventType.bufferingEnd}));
      }
    }
    [_sendBufferingRangesUpdate]() {
      this[_eventController].add(new video_player_platform_interface.VideoEvent.new({buffered: this[_toDurationRange](this[_videoElement][$buffered]), eventType: video_player_platform_interface.VideoEventType.bufferingUpdate}));
    }
    [_toDurationRange](buffered) {
      let durationRange = T.JSArrayOfDurationRange().of([]);
      for (let i = 0; i < buffered[$length]; i = i + 1) {
        durationRange[$add](new video_player_platform_interface.DurationRange.new(new core.Duration.new({milliseconds: (buffered[$start](i) * 1000)[$round]()}), new core.Duration.new({milliseconds: (buffered[$end](i) * 1000)[$round]()})));
      }
      return durationRange;
    }
  };
  (video_player.VideoPlayer.new = function(opts) {
    let t0;
    let videoElement = opts && 'videoElement' in opts ? opts.videoElement : null;
    let eventController = opts && 'eventController' in opts ? opts.eventController : null;
    this[_isInitialized] = false;
    this[_isBuffering] = false;
    this[_videoElement] = videoElement;
    this[_eventController] = (t0 = eventController, t0 == null ? T.StreamControllerOfVideoEvent().new() : t0);
    ;
  }).prototype = video_player.VideoPlayer.prototype;
  dart.addTypeTests(video_player.VideoPlayer);
  dart.addTypeCaches(video_player.VideoPlayer);
  dart.setMethodSignature(video_player.VideoPlayer, () => ({
    __proto__: dart.getMethods(video_player.VideoPlayer.__proto__),
    initialize: dart.fnType(dart.void, []),
    play: dart.fnType(async.Future$(dart.void), []),
    pause: dart.fnType(dart.void, []),
    setLooping: dart.fnType(dart.void, [core.bool]),
    setVolume: dart.fnType(dart.void, [core.double]),
    setPlaybackSpeed: dart.fnType(dart.void, [core.double]),
    seekTo: dart.fnType(dart.void, [core.Duration]),
    getPosition: dart.fnType(core.Duration, []),
    dispose: dart.fnType(dart.void, []),
    [_sendInitialized]: dart.fnType(dart.void, []),
    setBuffering: dart.fnType(dart.void, [core.bool]),
    [_sendBufferingRangesUpdate]: dart.fnType(dart.void, []),
    [_toDurationRange]: dart.fnType(core.List$(video_player_platform_interface.DurationRange), [html.TimeRanges])
  }));
  dart.setGetterSignature(video_player.VideoPlayer, () => ({
    __proto__: dart.getGetters(video_player.VideoPlayer.__proto__),
    events: async.Stream$(video_player_platform_interface.VideoEvent)
  }));
  dart.setLibraryUri(video_player.VideoPlayer, I[1]);
  dart.setFieldSignature(video_player.VideoPlayer, () => ({
    __proto__: dart.getFields(video_player.VideoPlayer.__proto__),
    [_eventController]: dart.finalFieldType(async.StreamController$(video_player_platform_interface.VideoEvent)),
    [_videoElement]: dart.finalFieldType(html.VideoElement),
    [_isInitialized]: dart.fieldType(core.bool),
    [_isBuffering]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(video_player, {
    /*video_player._kErrorValueToErrorName*/get _kErrorValueToErrorName() {
      return C[0] || CT.C0;
    },
    /*video_player._kErrorValueToErrorDescription*/get _kErrorValueToErrorDescription() {
      return C[1] || CT.C1;
    },
    /*video_player._kDefaultErrorMessage*/get _kDefaultErrorMessage() {
      return "No further diagnostic information can be determined or provided.";
    }
  }, false);
  dart.trackLibraries("packages/video_player_web/src/video_player.dart", {
    "package:video_player_web/src/video_player.dart": video_player
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["video_player.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/video_player_web/src/video_player.dart.lib.js"}');
  // Exports:
  return {
    src__video_player: video_player
  };
}));

//# sourceMappingURL=video_player.dart.lib.js.map
