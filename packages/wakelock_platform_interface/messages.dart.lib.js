define(['dart_sdk', 'packages/flutter/src/services/text_editing_delta.dart', 'packages/flutter/src/services/binary_messenger.dart'], (function load__packages__wakelock_platform_interface__messages_dart(dart_sdk, packages__flutter__src__services__text_editing_delta$46dart, packages__flutter__src__services__binary_messenger$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  const platform_channel = packages__flutter__src__services__text_editing_delta$46dart.src__services__platform_channel;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const binary_messenger = packages__flutter__src__services__binary_messenger$46dart.src__services__binary_messenger;
  var messages = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    LinkedMapOfObjectN$ObjectN: () => (T.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T.ObjectN(), T.ObjectN())))(),
    MapOfObjectN$ObjectN: () => (T.MapOfObjectN$ObjectN = dart.constFn(core.Map$(T.ObjectN(), T.ObjectN())))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    BasicMessageChannelOfObjectN: () => (T.BasicMessageChannelOfObjectN = dart.constFn(platform_channel.BasicMessageChannel$(T.ObjectN())))(),
    JSArrayOfObject: () => (T.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))(),
    MapNOfObjectN$ObjectN: () => (T.MapNOfObjectN$ObjectN = dart.constFn(dart.nullable(T.MapOfObjectN$ObjectN())))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    IsEnabledMessageN: () => (T.IsEnabledMessageN = dart.constFn(dart.nullable(messages.IsEnabledMessage)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: messages._WakelockApiCodec.prototype
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:wakelock_platform_interface/messages.dart"];
  var enable = dart.privateName(messages, "ToggleMessage.enable");
  messages.ToggleMessage = class ToggleMessage extends core.Object {
    get enable() {
      return this[enable];
    }
    set enable(value) {
      this[enable] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("enable", this.enable);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages.ToggleMessage.new();
      return (() => {
        t0.enable = T.boolN().as(pigeonMap[$_get]("enable"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages.ToggleMessage.new();
    }
  };
  (messages.ToggleMessage.new = function() {
    this[enable] = null;
    ;
  }).prototype = messages.ToggleMessage.prototype;
  dart.addTypeTests(messages.ToggleMessage);
  dart.addTypeCaches(messages.ToggleMessage);
  dart.setMethodSignature(messages.ToggleMessage, () => ({
    __proto__: dart.getMethods(messages.ToggleMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages.ToggleMessage, () => ['decode']);
  dart.setLibraryUri(messages.ToggleMessage, I[0]);
  dart.setFieldSignature(messages.ToggleMessage, () => ({
    __proto__: dart.getFields(messages.ToggleMessage.__proto__),
    enable: dart.fieldType(dart.nullable(core.bool))
  }));
  var enabled = dart.privateName(messages, "IsEnabledMessage.enabled");
  messages.IsEnabledMessage = class IsEnabledMessage extends core.Object {
    get enabled() {
      return this[enabled];
    }
    set enabled(value) {
      this[enabled] = value;
    }
    encode() {
      let pigeonMap = new (T.LinkedMapOfObjectN$ObjectN()).new();
      pigeonMap[$_set]("enabled", this.enabled);
      return pigeonMap;
    }
    static decode(message) {
      let t0;
      let pigeonMap = T.MapOfObjectN$ObjectN().as(message);
      t0 = new messages.IsEnabledMessage.new();
      return (() => {
        t0.enabled = T.boolN().as(pigeonMap[$_get]("enabled"));
        return t0;
      })();
    }
    static ['_#new#tearOff']() {
      return new messages.IsEnabledMessage.new();
    }
  };
  (messages.IsEnabledMessage.new = function() {
    this[enabled] = null;
    ;
  }).prototype = messages.IsEnabledMessage.prototype;
  dart.addTypeTests(messages.IsEnabledMessage);
  dart.addTypeCaches(messages.IsEnabledMessage);
  dart.setMethodSignature(messages.IsEnabledMessage, () => ({
    __proto__: dart.getMethods(messages.IsEnabledMessage.__proto__),
    encode: dart.fnType(core.Object, [])
  }));
  dart.setStaticMethodSignature(messages.IsEnabledMessage, () => ['decode']);
  dart.setLibraryUri(messages.IsEnabledMessage, I[0]);
  dart.setFieldSignature(messages.IsEnabledMessage, () => ({
    __proto__: dart.getFields(messages.IsEnabledMessage.__proto__),
    enabled: dart.fieldType(dart.nullable(core.bool))
  }));
  messages._WakelockApiCodec = class _WakelockApiCodec extends message_codecs.StandardMessageCodec {
    static ['_#new#tearOff']() {
      return new messages._WakelockApiCodec.new();
    }
    writeValue(buffer, value) {
      if (messages.IsEnabledMessage.is(value)) {
        buffer.putUint8(128);
        this.writeValue(buffer, value.encode());
      } else if (messages.ToggleMessage.is(value)) {
        buffer.putUint8(129);
        this.writeValue(buffer, value.encode());
      } else {
        super.writeValue(buffer, value);
      }
    }
    readValueOfType(type, buffer) {
      switch (type) {
        case 128:
          {
            return messages.IsEnabledMessage.decode(dart.nullCheck(this.readValue(buffer)));
          }
        case 129:
          {
            return messages.ToggleMessage.decode(dart.nullCheck(this.readValue(buffer)));
          }
        default:
          {
            return super.readValueOfType(type, buffer);
          }
      }
    }
  };
  (messages._WakelockApiCodec.new = function() {
    messages._WakelockApiCodec.__proto__.new.call(this);
    ;
  }).prototype = messages._WakelockApiCodec.prototype;
  dart.addTypeTests(messages._WakelockApiCodec);
  dart.addTypeCaches(messages._WakelockApiCodec);
  dart.setLibraryUri(messages._WakelockApiCodec, I[0]);
  var _binaryMessenger = dart.privateName(messages, "_binaryMessenger");
  messages.WakelockApi = class WakelockApi extends core.Object {
    static ['_#new#tearOff'](opts) {
      let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
      return new messages.WakelockApi.new({binaryMessenger: binaryMessenger});
    }
    toggle(arg_msg) {
      return async.async(dart.void, (function* toggle() {
        let channel = new (T.BasicMessageChannelOfObjectN()).new("dev.flutter.pigeon.WakelockApi.toggle", messages.WakelockApi.codec, {binaryMessenger: this[_binaryMessenger]});
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(T.JSArrayOfObject().of([arg_msg])));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = dart.nullCheck(T.MapNOfObjectN$ObjectN().as(replyMap[$_get]("error")));
          dart.throw(new message_codec.PlatformException.new({code: dart.nullCheck(T.StringN().as(error[$_get]("code"))), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
          return;
        }
      }).bind(this));
    }
    isEnabled() {
      return async.async(messages.IsEnabledMessage, (function* isEnabled() {
        let channel = new (T.BasicMessageChannelOfObjectN()).new("dev.flutter.pigeon.WakelockApi.isEnabled", messages.WakelockApi.codec, {binaryMessenger: this[_binaryMessenger]});
        let replyMap = T.MapNOfObjectN$ObjectN().as(yield channel.send(null));
        if (replyMap == null) {
          dart.throw(new message_codec.PlatformException.new({code: "channel-error", message: "Unable to establish connection on channel.", details: null}));
        } else if (replyMap[$_get]("error") != null) {
          let error = dart.nullCheck(T.MapNOfObjectN$ObjectN().as(replyMap[$_get]("error")));
          dart.throw(new message_codec.PlatformException.new({code: dart.nullCheck(T.StringN().as(error[$_get]("code"))), message: T.StringN().as(error[$_get]("message")), details: error[$_get]("details")}));
        } else {
          return dart.nullCheck(T.IsEnabledMessageN().as(replyMap[$_get]("result")));
        }
      }).bind(this));
    }
  };
  (messages.WakelockApi.new = function(opts) {
    let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
    this[_binaryMessenger] = binaryMessenger;
    ;
  }).prototype = messages.WakelockApi.prototype;
  dart.addTypeTests(messages.WakelockApi);
  dart.addTypeCaches(messages.WakelockApi);
  dart.setMethodSignature(messages.WakelockApi, () => ({
    __proto__: dart.getMethods(messages.WakelockApi.__proto__),
    toggle: dart.fnType(async.Future$(dart.void), [messages.ToggleMessage]),
    isEnabled: dart.fnType(async.Future$(messages.IsEnabledMessage), [])
  }));
  dart.setLibraryUri(messages.WakelockApi, I[0]);
  dart.setFieldSignature(messages.WakelockApi, () => ({
    __proto__: dart.getFields(messages.WakelockApi.__proto__),
    [_binaryMessenger]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
  }));
  dart.setStaticFieldSignature(messages.WakelockApi, () => ['codec']);
  dart.defineLazy(messages.WakelockApi, {
    /*messages.WakelockApi.codec*/get codec() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/wakelock_platform_interface/messages.dart", {
    "package:wakelock_platform_interface/messages.dart": messages
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["messages.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWQ;;;;;;;AAGwB,sBAA8B;AAC9B,MAA5B,AAAS,SAAA,QAAC,UAAY;AACtB,YAAO,UAAS;IAClB;kBAEmC;;AACL,sBAAoB,4BAAR,OAAO;AAC/C,WAAO;;AAAiB,oBAA6B,aAApB,AAAS,SAAA,QAAC;;;IAC7C;;;;;;IAXM;;EAYR;;;;;;;;;;;;;;;IAGQ;;;;;;;AAGwB,sBAA8B;AAC5B,MAA9B,AAAS,SAAA,QAAC,WAAa;AACvB,YAAO,UAAS;IAClB;kBAEsC;;AACR,sBAAoB,4BAAR,OAAO;AAC/C,WAAO;;AAAoB,qBAA+B,aAArB,AAAS,SAAA,QAAC;;;IACjD;;;;;;IAXM;;EAYR;;;;;;;;;;;;;;;;;eAK8B,QAAgB;AAC1C,UAAU,6BAAN,KAAK;AACa,QAApB,AAAO,MAAD,UAAU;AACkB,QAAlC,gBAAW,MAAM,EAAE,AAAM,KAAD;YACnB,KAAU,0BAAN,KAAK;AACM,QAApB,AAAO,MAAD,UAAU;AACkB,QAAlC,gBAAW,MAAM,EAAE,AAAM,KAAD;;AAEO,QAAzB,iBAAW,MAAM,EAAE,KAAK;;IAElC;oBAG4B,MAAiB;AAC3C,cAAQ,IAAI;;;AAER,kBAAwB,kCAAwB,eAAjB,eAAU,MAAM;;;;AAG/C,kBAAqB,+BAAwB,eAAjB,eAAU,MAAM;;;;AAG5C,kBAAa,uBAAgB,IAAI,EAAE,MAAM;;;IAE/C;;;AA1BM;;EAAmB;;;;;;;;;;WAwCS;AAAf;AACkB,sBAAU,2CACzC,yCAAyC,8CACxB;AACQ,uBACa,6BAAtC,MAAM,AAAQ,OAAD,MAAc,wBAAC,OAAO;AACvC,YAAI,AAAS,QAAD;AAKT,UAJD,WAAM,+CACE,0BACG,uDACA;cAEN,KAAI,AAAQ,QAAA,QAAC;AACU,sBACqB,eAA1B,6BAAlB,AAAQ,QAAA,QAAC;AAKb,UAJD,WAAM,+CAC4B,eAAX,eAAd,AAAK,KAAA,QAAC,oBACa,eAAjB,AAAK,KAAA,QAAC,sBACN,AAAK,KAAA,QAAC;;AAGjB;;MAEJ;;;AAEkC;AACG,sBAAU,2CACzC,4CAA4C,8CAC3B;AACQ,uBACA,6BAAzB,MAAM,AAAQ,OAAD,MAAM;AACvB,YAAI,AAAS,QAAD;AAKT,UAJD,WAAM,+CACE,0BACG,uDACA;cAEN,KAAI,AAAQ,QAAA,QAAC;AACU,sBACqB,eAA1B,6BAAlB,AAAQ,QAAA,QAAC;AAKb,UAJD,WAAM,+CAC4B,eAAX,eAAd,AAAK,KAAA,QAAC,oBACa,eAAjB,AAAK,KAAA,QAAC,sBACN,AAAK,KAAA,QAAC;;AAGjB,gBAAgD,gBAArB,yBAAnB,AAAQ,QAAA,QAAC;;MAErB;;;;QAvD8B;IACP,yBAAE,eAAe;;;;;;;;;;;;;;;;;MAIL,0BAAK","file":"../../../../../../../../../../packages/wakelock_platform_interface/messages.dart.lib.js"}');
  // Exports:
  return {
    messages: messages
  };
}));

//# sourceMappingURL=messages.dart.lib.js.map
