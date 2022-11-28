define(['dart_sdk', 'packages/flutter/src/services/system_navigator.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/services/text_editing_delta.dart'], (function load__packages__url_launcher_platform_interface__link_dart(dart_sdk, packages__flutter__src__services__system_navigator$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__services__text_editing_delta$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_navigator = packages__flutter__src__services__system_navigator$46dart.src__services__system_navigator;
  const binding = packages__flutter__src__widgets__title$46dart.src__widgets__binding;
  const message_codec = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codec;
  const message_codecs = packages__flutter__src__services__text_editing_delta$46dart.src__services__message_codecs;
  var link = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    CompleterOfByteData: () => (T.CompleterOfByteData = dart.constFn(async.Completer$(typed_data.ByteData)))(),
    FutureOrOfByteData: () => (T.FutureOrOfByteData = dart.constFn(async.FutureOr$(typed_data.ByteData)))(),
    FutureOrNOfByteData: () => (T.FutureOrNOfByteData = dart.constFn(dart.nullable(T.FutureOrOfByteData())))(),
    FutureOrNOfByteDataTovoid: () => (T.FutureOrNOfByteDataTovoid = dart.constFn(dart.fnType(dart.void, [], [T.FutureOrNOfByteData()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: link.LinkTarget.prototype,
        [debugLabel$]: "defaultTarget"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: link.LinkTarget.prototype,
        [debugLabel$]: "self"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: link.LinkTarget.prototype,
        [debugLabel$]: "blank"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: message_codecs.JSONMethodCodec.prototype
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:url_launcher_platform_interface/link.dart"];
  var debugLabel$ = dart.privateName(link, "LinkTarget.debugLabel");
  link.LinkTarget = class LinkTarget extends core.Object {
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    static ['_#_#tearOff'](opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      return new link.LinkTarget.__({debugLabel: debugLabel});
    }
  };
  (link.LinkTarget.__ = function(opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    this[debugLabel$] = debugLabel;
    ;
  }).prototype = link.LinkTarget.prototype;
  dart.addTypeTests(link.LinkTarget);
  dart.addTypeCaches(link.LinkTarget);
  dart.setLibraryUri(link.LinkTarget, I[0]);
  dart.setFieldSignature(link.LinkTarget, () => ({
    __proto__: dart.getFields(link.LinkTarget.__proto__),
    debugLabel: dart.finalFieldType(core.String)
  }));
  dart.setStaticFieldSignature(link.LinkTarget, () => ['defaultTarget', 'self', 'blank']);
  dart.defineLazy(link.LinkTarget, {
    /*link.LinkTarget.defaultTarget*/get defaultTarget() {
      return C[0] || CT.C0;
    },
    /*link.LinkTarget.self*/get self() {
      return C[1] || CT.C1;
    },
    /*link.LinkTarget.blank*/get blank() {
      return C[2] || CT.C2;
    }
  }, false);
  link.LinkInfo = class LinkInfo extends core.Object {};
  (link.LinkInfo.new = function() {
    ;
  }).prototype = link.LinkInfo.prototype;
  dart.addTypeTests(link.LinkInfo);
  dart.addTypeCaches(link.LinkInfo);
  dart.setLibraryUri(link.LinkInfo, I[0]);
  link.pushRouteNameToFramework = function pushRouteNameToFramework(_, routeName) {
    let t0, t0$;
    let completer = T.CompleterOfByteData().new();
    system_navigator.SystemNavigator.routeInformationUpdated({location: routeName});
    let sendMessage = (t0$ = (t0 = link._ambiguate(binding.WidgetsBinding, binding.WidgetsBinding.instance), t0 == null ? null : t0.platformDispatcher.onPlatformMessage), t0$ == null ? dart.bind(ui.channelBuffers, 'push') : t0$);
    sendMessage("flutter/navigation", link._codec.encodeMethodCall(new message_codec.MethodCall.new("pushRouteInformation", new _js_helper.LinkedMap.from(["location", routeName, "state", null]))), T.FutureOrNOfByteDataTovoid().as(dart.bind(completer, 'complete')));
    return completer.future;
  };
  link._ambiguate = function _ambiguate(T, value) {
    return value;
  };
  dart.defineLazy(link, {
    /*link._codec*/get _codec() {
      return C[3] || CT.C3;
    }
  }, false);
  dart.trackLibraries("packages/url_launcher_platform_interface/link.dart", {
    "package:url_launcher_platform_interface/link.dart": link
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["link.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoCe;;;;;;;;;;;;QAHqB;;;EAAY;;;;;;;;;;MAWtB,6BAAa;;;MAOb,oBAAI;;;MAOJ,qBAAK;;;;;;;EAgB/B;;;;oEAakD,GAAU;;AAChC,oBAAY;AACsB,IAA5C,oEAAkC,SAAS;AACxC,uBAEQ,YAFM,wCAA0B,+CAA1B,OACvB,AACD,0CAFwB,cAGX,UAAf;AAUN,IATD,AAAW,WAAA,CACT,sBACA,AAAO,6BACL,iCAAW,wBAA0C,+BACnD,YAAY,SAAS,EACrB,SAAS,2CAGH,UAAV,SAAS;AAEX,UAAO,AAAU,UAAD;EAClB;2CAOoB;AAAU,gBAAK;;;MAxFjB,WAAM","file":"../../../../../../../../../../packages/url_launcher_platform_interface/link.dart.lib.js"}');
  // Exports:
  return {
    link: link
  };
}));

//# sourceMappingURL=link.dart.lib.js.map
