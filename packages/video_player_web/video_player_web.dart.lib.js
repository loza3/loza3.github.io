define(['dart_sdk', 'packages/video_player_web/src/video_player.dart', 'packages/video_player_platform_interface/method_channel_video_player.dart', 'packages/flutter/src/widgets/platform_view.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter_web_plugins/src/plugin_registry.dart'], (function load__packages__video_player_web__video_player_web_dart(dart_sdk, packages__video_player_web__src__video_player$46dart, packages__video_player_platform_interface__method_channel_video_player$46dart, packages__flutter__src__widgets__platform_view$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter_web_plugins__src__plugin_registry$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const video_player = packages__video_player_web__src__video_player$46dart.src__video_player;
  const video_player_platform_interface = packages__video_player_platform_interface__method_channel_video_player$46dart.video_player_platform_interface;
  const platform_view = packages__flutter__src__widgets__platform_view$46dart.src__widgets__platform_view;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const plugin_registry = packages__flutter_web_plugins__src__plugin_registry$46dart.src__plugin_registry;
  var video_player_web = Object.create(dart.library);
  var $remove = dartx.remove;
  var $values = dartx.values;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $id = dartx.id;
  var $src = dartx.src;
  var $border = dartx.border;
  var $style = dartx.style;
  var $height = dartx.height;
  var $width = dartx.width;
  var $_set = dartx._set;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfint$VideoPlayer: () => (T.IdentityMapOfint$VideoPlayer = dart.constFn(_js_helper.IdentityMap$(core.int, video_player.VideoPlayer)))(),
    VoidToString: () => (T.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    StringTodynamic: () => (T.StringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String])))(),
    FutureOfint: () => (T.FutureOfint = dart.constFn(async.Future$(core.int)))(),
    intToVideoElement: () => (T.intToVideoElement = dart.constFn(dart.fnType(html.VideoElement, [core.int])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: video_player_platform_interface.DataSourceType.prototype,
        [_Enum__name]: "network",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: video_player_platform_interface.DataSourceType.prototype,
        [_Enum__name]: "asset",
        [_Enum_index]: 0
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
        [_Location_name]: "HtmlElementView",
        [_Location_column]: 12,
        [_Location_line]: 143,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/video_player_web-2.0.12/lib/video_player_web.dart"
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = ["package:video_player_web/video_player_web.dart"];
  var _videoPlayers = dart.privateName(video_player_web, "_videoPlayers");
  var _textureCounter = dart.privateName(video_player_web, "_textureCounter");
  var _disposeAllPlayers = dart.privateName(video_player_web, "_disposeAllPlayers");
  var _player = dart.privateName(video_player_web, "_player");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  video_player_web.VideoPlayerPlugin = class VideoPlayerPlugin extends video_player_platform_interface.VideoPlayerPlatform {
    static registerWith(registrar) {
      video_player_platform_interface.VideoPlayerPlatform.instance = new video_player_web.VideoPlayerPlugin.new();
    }
    init() {
      return async.async(dart.void, (function* init() {
        return this[_disposeAllPlayers]();
      }).bind(this));
    }
    dispose(textureId) {
      return async.async(dart.void, (function* dispose() {
        this[_player](textureId).dispose();
        this[_videoPlayers][$remove](textureId);
        return;
      }).bind(this));
    }
    [_disposeAllPlayers]() {
      for (let videoPlayer of this[_videoPlayers][$values]) {
        videoPlayer.dispose();
      }
      this[_videoPlayers][$clear]();
    }
    create(dataSource) {
      return async.async(core.int, (function* create() {
        let t0, t3, t3$, t3$0;
        let textureId = (t0 = this[_textureCounter], this[_textureCounter] = t0 + 1, t0);
        let uri = null;
        function uri$35get() {
          let t1;
          t1 = uri;
          return t1 == null ? dart.throw(new _internal.LateError.localNI("uri")) : t1;
        }
        dart.fn(uri$35get, T.VoidToString());
        function uri$35set(uri$35param) {
          return uri = uri$35param;
        }
        dart.fn(uri$35set, T.StringTodynamic());
        switch (dataSource.sourceType) {
          case C[0] || CT.C0:
            {
              uri$35set((t3 = dataSource.uri, t3 == null ? "" : t3));
              break;
            }
          case C[1] || CT.C1:
            {
              let assetUrl = dart.nullCheck(dataSource.asset);
              if (dataSource.package != null && dart.nullCheck(dataSource.package)[$isNotEmpty]) {
                assetUrl = "packages/" + dart.str(dataSource.package) + "/" + assetUrl;
              }
              assetUrl = ui.webOnlyAssetManager.getAssetUrl(assetUrl);
              uri$35set(assetUrl);
              break;
            }
          case C[2] || CT.C2:
            {
              return T.FutureOfint().error(new core.UnimplementedError.new("web implementation of video_player cannot play local files"));
            }
          case C[3] || CT.C3:
            {
              return T.FutureOfint().error(new core.UnimplementedError.new("web implementation of video_player cannot play content uri"));
            }
        }
        let videoElement = (t3$ = html.VideoElement.new(), (() => {
          t3$[$id] = "videoElement-" + dart.str(textureId);
          t3$[$src] = uri$35get();
          t3$[$style][$border] = "none";
          t3$[$style][$height] = "100%";
          t3$[$style][$width] = "100%";
          return t3$;
        })());
        ui.platformViewRegistry.registerViewFactory("videoPlayer-" + dart.str(textureId), dart.fn(viewId => videoElement, T.intToVideoElement()));
        let player = (t3$0 = new video_player.VideoPlayer.new({videoElement: videoElement}), (() => {
          t3$0.initialize();
          return t3$0;
        })());
        this[_videoPlayers][$_set](textureId, player);
        return textureId;
      }).bind(this));
    }
    setLooping(textureId, looping) {
      return async.async(dart.void, (function* setLooping() {
        return this[_player](textureId).setLooping(looping);
      }).bind(this));
    }
    play(textureId) {
      return async.async(dart.void, (function* play() {
        return this[_player](textureId).play();
      }).bind(this));
    }
    pause(textureId) {
      return async.async(dart.void, (function* pause() {
        return this[_player](textureId).pause();
      }).bind(this));
    }
    setVolume(textureId, volume) {
      return async.async(dart.void, (function* setVolume() {
        return this[_player](textureId).setVolume(volume);
      }).bind(this));
    }
    setPlaybackSpeed(textureId, speed) {
      return async.async(dart.void, (function* setPlaybackSpeed() {
        return this[_player](textureId).setPlaybackSpeed(speed);
      }).bind(this));
    }
    seekTo(textureId, position) {
      return async.async(dart.void, (function* seekTo() {
        return this[_player](textureId).seekTo(position);
      }).bind(this));
    }
    getPosition(textureId) {
      return async.async(core.Duration, (function* getPosition() {
        return this[_player](textureId).getPosition();
      }).bind(this));
    }
    videoEventsFor(textureId) {
      return this[_player](textureId).events;
    }
    [_player](id) {
      return dart.nullCheck(this[_videoPlayers][$_get](id));
    }
    buildView(textureId) {
      return new platform_view.HtmlElementView.new({viewType: "videoPlayer-" + dart.str(textureId), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    setMixWithOthers(mixWithOthers) {
      return T.FutureOfvoid().value();
    }
    static ['_#new#tearOff']() {
      return new video_player_web.VideoPlayerPlugin.new();
    }
  };
  (video_player_web.VideoPlayerPlugin.new = function() {
    this[_videoPlayers] = new (T.IdentityMapOfint$VideoPlayer()).new();
    this[_textureCounter] = 1;
    video_player_web.VideoPlayerPlugin.__proto__.new.call(this);
    ;
  }).prototype = video_player_web.VideoPlayerPlugin.prototype;
  dart.addTypeTests(video_player_web.VideoPlayerPlugin);
  dart.addTypeCaches(video_player_web.VideoPlayerPlugin);
  dart.setMethodSignature(video_player_web.VideoPlayerPlugin, () => ({
    __proto__: dart.getMethods(video_player_web.VideoPlayerPlugin.__proto__),
    [_disposeAllPlayers]: dart.fnType(dart.void, []),
    create: dart.fnType(async.Future$(core.int), [video_player_platform_interface.DataSource]),
    [_player]: dart.fnType(video_player.VideoPlayer, [core.int])
  }));
  dart.setStaticMethodSignature(video_player_web.VideoPlayerPlugin, () => ['registerWith']);
  dart.setLibraryUri(video_player_web.VideoPlayerPlugin, I[0]);
  dart.setFieldSignature(video_player_web.VideoPlayerPlugin, () => ({
    __proto__: dart.getFields(video_player_web.VideoPlayerPlugin.__proto__),
    [_videoPlayers]: dart.finalFieldType(core.Map$(core.int, video_player.VideoPlayer)),
    [_textureCounter]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/video_player_web/video_player_web.dart", {
    "package:video_player_web/video_player_web.dart": video_player_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["video_player_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wBAmBqC;AACiB,MAA9B,+DAAW;IACjC;;AASiB;AACf,cAAO;MACT;;YAGyB;AAAL;AACU,QAA5B,AAAmB,cAAX,SAAS;AACc,QAA/B,AAAc,6BAAO,SAAS;AAC9B;MACF;;;AAGE,eAAuB,cAAe,AAAc;AAC7B,QAArB,AAAY,WAAD;;AAEQ,MAArB,AAAc;IAChB;WAG8B;AAAZ;;AACN,yBAA2B,4BAAf,6BAAe;AAEzB;;;;;;;;;;;AACZ,gBAAQ,AAAW,UAAD;;;AAIY,cAA1B,WAAqB,KAAf,AAAW,UAAD,MAAC,aAAO;AACxB;;;;AAEO,6BAA2B,eAAhB,AAAW,UAAD;AAC5B,kBAAI,AAAW,UAAD,oBAAsC,AAAE,eAApB,AAAW,UAAD;AACW,gBAArD,WAAW,AAA0C,uBAA9B,AAAW,UAAD,YAAS,MAAE,QAAQ;;AAEC,cAAvD,WAAc,AAAoB,mCAAY,QAAQ;AACxC,cAAd,UAAM,QAAQ;AACd;;;;AAEA,oBAAO,uBAAkB,gCACrB;;;;AAEJ,oBAAO,uBAAkB,gCACrB;;;AAGW,2DAAe;AAC9B,qBAAK,AACP,2BADsB,SAAS;AAC7B,sBAAM;AACA,UAAN,uBAAe;AACT,UAAN,uBAAe;AACT,UAAN,sBAAc;;;AAIyC,QADxD,AAAqB,4CACpB,AAAwB,0BAAV,SAAS,GAAG,QAAK,UAAW,YAAY;AAExC,6BAAS,gDAA0B,YAAY,IAAtC;AACvB;;;AAE6B,QAAjC,AAAa,2BAAC,SAAS,EAAI,MAAM;AAEjC,cAAO,UAAS;MAClB;;eAG4B,WAAgB;AAArB;AACrB,cAAO,AAAmB,eAAX,SAAS,aAAa,OAAO;MAC9C;;SAGsB;AAAL;AACf,cAAO,AAAmB,eAAX,SAAS;MAC1B;;UAGuB;AAAL;AAChB,cAAO,AAAmB,eAAX,SAAS;MAC1B;;cAG2B,WAAkB;AAAvB;AACpB,cAAO,AAAmB,eAAX,SAAS,YAAY,MAAM;MAC5C;;qBAGkC,WAAkB;AAAvB;AAC3B,cAAO,AAAmB,eAAX,SAAS,mBAAmB,KAAK;MAClD;;WAGwB,WAAoB;AAAzB;AACjB,cAAO,AAAmB,eAAX,SAAS,SAAS,QAAQ;MAC3C;;gBAGiC;AAAL;AAC1B,cAAO,AAAmB,eAAX,SAAS;MAC1B;;mBAGsC;AACpC,YAAO,AAAmB,eAAX,SAAS;IAC1B;cAIwB;AACtB,YAAwB,gBAAjB,AAAa,2BAAC,EAAE;IACzB;cAGqB;AACnB,YAAO,kDAA0B,AAAwB,0BAAV,SAAS;IAC1D;qBAImC;AAAkB;IAAoB;;;;;;IA3H7C,sBAAkC;IAG1D,wBAAkB;;;EAyHxB","file":"../../../../../../../../../../packages/video_player_web/video_player_web.dart.lib.js"}');
  // Exports:
  return {
    video_player_web: video_player_web
  };
}));

//# sourceMappingURL=video_player_web.dart.lib.js.map
