define(['dart_sdk', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__video_player_platform_interface__messages_g_dart(dart_sdk, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  var messages$46g = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    LinkedMapOfObjectN$ObjectN: () => (T.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T.ObjectN(), T.ObjectN())))(),
    MapOfObjectN$ObjectN: () => (T.MapOfObjectN$ObjectN = dart.constFn(core.Map$(T.ObjectN(), T.ObjectN())))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    MapNOfObjectN$ObjectN: () => (T.MapNOfObjectN$ObjectN = dart.constFn(dart.nullable(T.MapOfObjectN$ObjectN())))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    BasicMessageChannelOfObjectN: () => (T.BasicMessageChannelOfObjectN = dart.constFn(platform_channel.BasicMessageChannel$(T.ObjectN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.initialize"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.create"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.dispose"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.setLooping"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.setVolume"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.setPlaybackSpeed"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.play"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.position"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.seekTo"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.pause"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: T.BasicMessageChannelOfObjectN().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C[1] || CT.C1,
        [BasicMessageChannel_name]: "dev.flutter.pigeon.VideoPlayerApi.setMixWithOthers"
      });
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = ["package:video_player_platform_interface/messages.g.dart"];
  var textureId = dart.privateName(messages$46g, "TextureMessage.textureId");
  messages$46g.TextureMessage = class TextureMessage extends core.Object {
    get textureId() {
      return this[textureId];
    }
    set textureId(value) {
      this[textureId] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("textureId", this.textureId);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages$46g.TextureMessage.new();
      return (() => {
        t0.textureId = T.intN().as(pigeonMap[$_get]("textureId"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages$46g.TextureMessage.new();
    }
  };
  (messages$46g.TextureMessage.new = function() {
    this[textureId] = null;
    ;
  }).prototype = messages$46g.TextureMessage.prototype;
  dart.addTypeTests(messages$46g.TextureMessage);
  dart.addTypeCaches(messages$46g.TextureMessage);
  dart.setMethodSignature(messages$46g.TextureMessage, () => ({
    __proto__: dart.getMethods(messages$46g.TextureMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages$46g.TextureMessage, () => ['decode']);
  dart.setLibraryUri(messages$46g.TextureMessage, I[0]);
  dart.setFieldSignature(messages$46g.TextureMessage, () => ({
    __proto__: dart.getFields(messages$46g.TextureMessage.__proto__),
    textureId: dart.fieldType(dart.nullable(core.int))
  }));
  var asset = dart.privateName(messages$46g, "CreateMessage.asset");
  var uri = dart.privateName(messages$46g, "CreateMessage.uri");
  var packageName = dart.privateName(messages$46g, "CreateMessage.packageName");
  var formatHint = dart.privateName(messages$46g, "CreateMessage.formatHint");
  var httpHeaders = dart.privateName(messages$46g, "CreateMessage.httpHeaders");
  messages$46g.CreateMessage = class CreateMessage extends core.Object {
    get asset() {
      return this[asset];
    }
    set asset(value) {
      this[asset] = value;
    }
    get uri() {
      return this[uri];
    }
    set uri(value) {
      this[uri] = value;
    }
    get packageName() {
      return this[packageName];
    }
    set packageName(value) {
      this[packageName] = value;
    }
    get formatHint() {
      return this[formatHint];
    }
    set formatHint(value) {
      this[formatHint] = value;
    }
    get httpHeaders() {
      return this[httpHeaders];
    }
    set httpHeaders(value) {
      this[httpHeaders] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("asset", this.asset);
      pigeonMap[$_set]("uri", this.uri);
      pigeonMap[$_set]("packageName", this.packageName);
      pigeonMap[$_set]("formatHint", this.formatHint);
      pigeonMap[$_set]("httpHeaders", this.httpHeaders);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages$46g.CreateMessage.new();
      return (() => {
        t0.asset = T.StringN().as(pigeonMap[$_get]("asset"));
        t0.uri = T.StringN().as(pigeonMap[$_get]("uri"));
        t0.packageName = T.StringN().as(pigeonMap[$_get]("packageName"));
        t0.formatHint = T.StringN().as(pigeonMap[$_get]("formatHint"));
        t0.httpHeaders = T.MapNOfObjectN$ObjectN().as(pigeonMap[$_get]("httpHeaders"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages$46g.CreateMessage.new();
    }
  };
  (messages$46g.CreateMessage.new = function() {
    this[asset] = null;
    this[uri] = null;
    this[packageName] = null;
    this[formatHint] = null;
    this[httpHeaders] = null;
    ;
  }).prototype = messages$46g.CreateMessage.prototype;
  dart.addTypeTests(messages$46g.CreateMessage);
  dart.addTypeCaches(messages$46g.CreateMessage);
  dart.setMethodSignature(messages$46g.CreateMessage, () => ({
    __proto__: dart.getMethods(messages$46g.CreateMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages$46g.CreateMessage, () => ['decode']);
  dart.setLibraryUri(messages$46g.CreateMessage, I[0]);
  dart.setFieldSignature(messages$46g.CreateMessage, () => ({
    __proto__: dart.getFields(messages$46g.CreateMessage.__proto__),
    asset: dart.fieldType(dart.nullable(core.String)),
    uri: dart.fieldType(dart.nullable(core.String)),
    packageName: dart.fieldType(dart.nullable(core.String)),
    formatHint: dart.fieldType(dart.nullable(core.String)),
    httpHeaders: dart.fieldType(dart.nullable(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))))
  }));
  var textureId$ = dart.privateName(messages$46g, "LoopingMessage.textureId");
  var isLooping = dart.privateName(messages$46g, "LoopingMessage.isLooping");
  messages$46g.LoopingMessage = class LoopingMessage extends core.Object {
    get textureId() {
      return this[textureId$];
    }
    set textureId(value) {
      this[textureId$] = value;
    }
    get isLooping() {
      return this[isLooping];
    }
    set isLooping(value) {
      this[isLooping] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("textureId", this.textureId);
      pigeonMap[$_set]("isLooping", this.isLooping);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages$46g.LoopingMessage.new();
      return (() => {
        t0.textureId = T.intN().as(pigeonMap[$_get]("textureId"));
        t0.isLooping = T.boolN().as(pigeonMap[$_get]("isLooping"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages$46g.LoopingMessage.new();
    }
  };
  (messages$46g.LoopingMessage.new = function() {
    this[textureId$] = null;
    this[isLooping] = null;
    ;
  }).prototype = messages$46g.LoopingMessage.prototype;
  dart.addTypeTests(messages$46g.LoopingMessage);
  dart.addTypeCaches(messages$46g.LoopingMessage);
  dart.setMethodSignature(messages$46g.LoopingMessage, () => ({
    __proto__: dart.getMethods(messages$46g.LoopingMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages$46g.LoopingMessage, () => ['decode']);
  dart.setLibraryUri(messages$46g.LoopingMessage, I[0]);
  dart.setFieldSignature(messages$46g.LoopingMessage, () => ({
    __proto__: dart.getFields(messages$46g.LoopingMessage.__proto__),
    textureId: dart.fieldType(dart.nullable(core.int)),
    isLooping: dart.fieldType(dart.nullable(core.bool))
  }));
  var textureId$0 = dart.privateName(messages$46g, "VolumeMessage.textureId");
  var volume = dart.privateName(messages$46g, "VolumeMessage.volume");
  messages$46g.VolumeMessage = class VolumeMessage extends core.Object {
    get textureId() {
      return this[textureId$0];
    }
    set textureId(value) {
      this[textureId$0] = value;
    }
    get volume() {
      return this[volume];
    }
    set volume(value) {
      this[volume] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("textureId", this.textureId);
      pigeonMap[$_set]("volume", this.volume);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages$46g.VolumeMessage.new();
      return (() => {
        t0.textureId = T.intN().as(pigeonMap[$_get]("textureId"));
        t0.volume = T.doubleN().as(pigeonMap[$_get]("volume"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages$46g.VolumeMessage.new();
    }
  };
  (messages$46g.VolumeMessage.new = function() {
    this[textureId$0] = null;
    this[volume] = null;
    ;
  }).prototype = messages$46g.VolumeMessage.prototype;
  dart.addTypeTests(messages$46g.VolumeMessage);
  dart.addTypeCaches(messages$46g.VolumeMessage);
  dart.setMethodSignature(messages$46g.VolumeMessage, () => ({
    __proto__: dart.getMethods(messages$46g.VolumeMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages$46g.VolumeMessage, () => ['decode']);
  dart.setLibraryUri(messages$46g.VolumeMessage, I[0]);
  dart.setFieldSignature(messages$46g.VolumeMessage, () => ({
    __proto__: dart.getFields(messages$46g.VolumeMessage.__proto__),
    textureId: dart.fieldType(dart.nullable(core.int)),
    volume: dart.fieldType(dart.nullable(core.double))
  }));
  var textureId$1 = dart.privateName(messages$46g, "PlaybackSpeedMessage.textureId");
  var speed = dart.privateName(messages$46g, "PlaybackSpeedMessage.speed");
  messages$46g.PlaybackSpeedMessage = class PlaybackSpeedMessage extends core.Object {
    get textureId() {
      return this[textureId$1];
    }
    set textureId(value) {
      this[textureId$1] = value;
    }
    get speed() {
      return this[speed];
    }
    set speed(value) {
      this[speed] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("textureId", this.textureId);
      pigeonMap[$_set]("speed", this.speed);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages$46g.PlaybackSpeedMessage.new();
      return (() => {
        t0.textureId = T.intN().as(pigeonMap[$_get]("textureId"));
        t0.speed = T.doubleN().as(pigeonMap[$_get]("speed"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages$46g.PlaybackSpeedMessage.new();
    }
  };
  (messages$46g.PlaybackSpeedMessage.new = function() {
    this[textureId$1] = null;
    this[speed] = null;
    ;
  }).prototype = messages$46g.PlaybackSpeedMessage.prototype;
  dart.addTypeTests(messages$46g.PlaybackSpeedMessage);
  dart.addTypeCaches(messages$46g.PlaybackSpeedMessage);
  dart.setMethodSignature(messages$46g.PlaybackSpeedMessage, () => ({
    __proto__: dart.getMethods(messages$46g.PlaybackSpeedMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages$46g.PlaybackSpeedMessage, () => ['decode']);
  dart.setLibraryUri(messages$46g.PlaybackSpeedMessage, I[0]);
  dart.setFieldSignature(messages$46g.PlaybackSpeedMessage, () => ({
    __proto__: dart.getFields(messages$46g.PlaybackSpeedMessage.__proto__),
    textureId: dart.fieldType(dart.nullable(core.int)),
    speed: dart.fieldType(dart.nullable(core.double))
  }));
  var textureId$2 = dart.privateName(messages$46g, "PositionMessage.textureId");
  var position = dart.privateName(messages$46g, "PositionMessage.position");
  messages$46g.PositionMessage = class PositionMessage extends core.Object {
    get textureId() {
      return this[textureId$2];
    }
    set textureId(value) {
      this[textureId$2] = value;
    }
    get position() {
      return this[position];
    }
    set position(value) {
      this[position] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("textureId", this.textureId);
      pigeonMap[$_set]("position", this.position);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages$46g.PositionMessage.new();
      return (() => {
        t0.textureId = T.intN().as(pigeonMap[$_get]("textureId"));
        t0.position = T.intN().as(pigeonMap[$_get]("position"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages$46g.PositionMessage.new();
    }
  };
  (messages$46g.PositionMessage.new = function() {
    this[textureId$2] = null;
    this[position] = null;
    ;
  }).prototype = messages$46g.PositionMessage.prototype;
  dart.addTypeTests(messages$46g.PositionMessage);
  dart.addTypeCaches(messages$46g.PositionMessage);
  dart.setMethodSignature(messages$46g.PositionMessage, () => ({
    __proto__: dart.getMethods(messages$46g.PositionMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages$46g.PositionMessage, () => ['decode']);
  dart.setLibraryUri(messages$46g.PositionMessage, I[0]);
  dart.setFieldSignature(messages$46g.PositionMessage, () => ({
    __proto__: dart.getFields(messages$46g.PositionMessage.__proto__),
    textureId: dart.fieldType(dart.nullable(core.int)),
    position: dart.fieldType(dart.nullable(core.int))
  }));
  var mixWithOthers = dart.privateName(messages$46g, "MixWithOthersMessage.mixWithOthers");
  messages$46g.MixWithOthersMessage = class MixWithOthersMessage extends core.Object {
    get mixWithOthers() {
      return this[mixWithOthers];
    }
    set mixWithOthers(value) {
      this[mixWithOthers] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("mixWithOthers", this.mixWithOthers);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages$46g.MixWithOthersMessage.new();
      return (() => {
        t0.mixWithOthers = T.boolN().as(pigeonMap[$_get]("mixWithOthers"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages$46g.MixWithOthersMessage.new();
    }
  };
  (messages$46g.MixWithOthersMessage.new = function() {
    this[mixWithOthers] = null;
    ;
  }).prototype = messages$46g.MixWithOthersMessage.prototype;
  dart.addTypeTests(messages$46g.MixWithOthersMessage);
  dart.addTypeCaches(messages$46g.MixWithOthersMessage);
  dart.setMethodSignature(messages$46g.MixWithOthersMessage, () => ({
    __proto__: dart.getMethods(messages$46g.MixWithOthersMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages$46g.MixWithOthersMessage, () => ['decode']);
  dart.setLibraryUri(messages$46g.MixWithOthersMessage, I[0]);
  dart.setFieldSignature(messages$46g.MixWithOthersMessage, () => ({
    __proto__: dart.getFields(messages$46g.MixWithOthersMessage.__proto__),
    mixWithOthers: dart.fieldType(dart.nullable(core.bool))
  }));
  var BasicMessageChannel__binaryMessenger = dart.privateName(platform_channel, "BasicMessageChannel._binaryMessenger");
  var BasicMessageChannel_codec = dart.privateName(platform_channel, "BasicMessageChannel.codec");
  var BasicMessageChannel_name = dart.privateName(platform_channel, "BasicMessageChannel.name");
  messages$46g.VideoPlayerApi = class VideoPlayerApi extends core.Object {
    initialize() {
      return async.async(dart.void, function* initialize() {
        let channel = C[0] || CT.C0;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(null));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    create(arg) {
      return async.async(messages$46g.TextureMessage, function* create() {
        let encoded = arg.encode();
        let channel = C[2] || CT.C2;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
          return messages$46g.TextureMessage.decode(dart.nullCheck(replyMap[$_get]("result")));
        }
      });
    }
    dispose(arg) {
      return async.async(dart.void, function* dispose() {
        let encoded = arg.encode();
        let channel = C[3] || CT.C3;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    setLooping(arg) {
      return async.async(dart.void, function* setLooping() {
        let encoded = arg.encode();
        let channel = C[4] || CT.C4;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    setVolume(arg) {
      return async.async(dart.void, function* setVolume() {
        let encoded = arg.encode();
        let channel = C[5] || CT.C5;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    setPlaybackSpeed(arg) {
      return async.async(dart.void, function* setPlaybackSpeed() {
        let encoded = arg.encode();
        let channel = C[6] || CT.C6;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    play(arg) {
      return async.async(dart.void, function* play() {
        let encoded = arg.encode();
        let channel = C[7] || CT.C7;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    position(arg) {
      return async.async(messages$46g.PositionMessage, function* position() {
        let encoded = arg.encode();
        let channel = C[8] || CT.C8;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
          return messages$46g.PositionMessage.decode(dart.nullCheck(replyMap[$_get]("result")));
        }
      });
    }
    seekTo(arg) {
      return async.async(dart.void, function* seekTo() {
        let encoded = arg.encode();
        let channel = C[9] || CT.C9;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    pause(arg) {
      return async.async(dart.void, function* pause() {
        let encoded = arg.encode();
        let channel = C[10] || CT.C10;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    setMixWithOthers(arg) {
      return async.async(dart.void, function* setMixWithOthers() {
        let encoded = arg.encode();
        let channel = C[11] || CT.C11;
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(encoded));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = T.MapOfObjectN$ObjectN().as(replyMap[$_get]("error"));
          dart.throw(new message_codec.PlatformException.new({code: core.String.as(error[$_get]("code")), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
        }
      });
    }
    static ['_#new#tearOff']() {
      return new messages$46g.VideoPlayerApi.new();
    }
  };
  (messages$46g.VideoPlayerApi.new = function() {
    ;
  }).prototype = messages$46g.VideoPlayerApi.prototype;
  dart.addTypeTests(messages$46g.VideoPlayerApi);
  dart.addTypeCaches(messages$46g.VideoPlayerApi);
  dart.setMethodSignature(messages$46g.VideoPlayerApi, () => ({
    __proto__: dart.getMethods(messages$46g.VideoPlayerApi.__proto__),
    initialize: dart.fnType(async.Future$(dart.void), []),
    create: dart.fnType(async.Future$(messages$46g.TextureMessage), [messages$46g.CreateMessage]),
    dispose: dart.fnType(async.Future$(dart.void), [messages$46g.TextureMessage]),
    setLooping: dart.fnType(async.Future$(dart.void), [messages$46g.LoopingMessage]),
    setVolume: dart.fnType(async.Future$(dart.void), [messages$46g.VolumeMessage]),
    setPlaybackSpeed: dart.fnType(async.Future$(dart.void), [messages$46g.PlaybackSpeedMessage]),
    play: dart.fnType(async.Future$(dart.void), [messages$46g.TextureMessage]),
    position: dart.fnType(async.Future$(messages$46g.PositionMessage), [messages$46g.TextureMessage]),
    seekTo: dart.fnType(async.Future$(dart.void), [messages$46g.PositionMessage]),
    pause: dart.fnType(async.Future$(dart.void), [messages$46g.TextureMessage]),
    setMixWithOthers: dart.fnType(async.Future$(dart.void), [messages$46g.MixWithOthersMessage])
  }));
  dart.setLibraryUri(messages$46g.VideoPlayerApi, I[0]);
  dart.trackLibraries("packages/video_player_platform_interface/messages.g.dart", {
    "package:video_player_platform_interface/messages.g.dart": messages$46g
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["messages.g.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/video_player_platform_interface/messages.g.dart.lib.js"}');
  // Exports:
  return {
    messages$46g: messages$46g
  };
}));

//# sourceMappingURL=messages.g.dart.lib.js.map
