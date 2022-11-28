define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/services/binary_messenger.dart'], (function load__packages__flutter_web_plugins__src__plugin_registry_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__services__binary_messenger$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const binary_messenger = packages__flutter__src__services__binary_messenger$46dart.src__services__binary_messenger;
  var plugin_registry = Object.create(dart.library);
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ByteDataN: () => (T.ByteDataN = dart.constFn(dart.nullable(typed_data.ByteData)))(),
    FutureOfByteDataN: () => (T.FutureOfByteDataN = dart.constFn(async.Future$(T.ByteDataN())))(),
    FutureNOfByteDataN: () => (T.FutureNOfByteDataN = dart.constFn(dart.nullable(T.FutureOfByteDataN())))(),
    ByteDataNToFutureNOfByteDataN: () => (T.ByteDataNToFutureNOfByteDataN = dart.constFn(dart.fnType(T.FutureNOfByteDataN(), [T.ByteDataN()])))(),
    IdentityMapOfString$ByteDataNToFutureNOfByteDataN: () => (T.IdentityMapOfString$ByteDataNToFutureNOfByteDataN = dart.constFn(_js_helper.IdentityMap$(core.String, T.ByteDataNToFutureNOfByteDataN())))(),
    CompleterOfByteDataN: () => (T.CompleterOfByteDataN = dart.constFn(async.Completer$(T.ByteDataN())))(),
    ByteDataNTovoid: () => (T.ByteDataNTovoid = dart.constFn(dart.fnType(dart.void, [T.ByteDataN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_web_plugins/src/plugin_registry.dart"];
  var _handlers = dart.privateName(plugin_registry, "_handlers");
  plugin_registry.Registrar = class Registrar extends binary_messenger.BinaryMessenger {
    static ['_#new#tearOff'](binaryMessenger = null) {
      return new plugin_registry.Registrar.new(binaryMessenger);
    }
    registerMessageHandler() {
      ui.webOnlySetPluginHandler(dart.bind(this, 'handleFrameworkMessage'));
    }
    handlePlatformMessage(channel, data, callback) {
      return this.handleFrameworkMessage(channel, data, callback);
    }
    handleFrameworkMessage(channel, data, callback) {
      return async.async(dart.void, (function* handleFrameworkMessage() {
        let response = null;
        try {
          let handler = this[_handlers][$_get](channel);
          if (handler != null) {
            response = (yield handler(data));
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "flutter web plugins", context: new assertions.ErrorDescription.new("during a framework-to-plugin message")}));
          } else
            throw e;
        } finally {
          if (callback != null) {
            callback(response);
          }
        }
      }).bind(this));
    }
    get messenger() {
      return this;
    }
    send(channel, message) {
      let completer = T.CompleterOfByteDataN().new();
      ui.channelBuffers.push(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "flutter web plugins", context: new assertions.ErrorDescription.new("during a plugin-to-framework message")}));
          } else
            throw e;
        }
      }, T.ByteDataNTovoid()));
      return completer.future;
    }
    setMessageHandler(channel, handler) {
      if (handler == null) {
        this[_handlers][$remove](channel);
      } else {
        this[_handlers][$_set](channel, handler);
      }
    }
  };
  (plugin_registry.Registrar.new = function(binaryMessenger = null) {
    this[_handlers] = new (T.IdentityMapOfString$ByteDataNToFutureNOfByteDataN()).new();
    plugin_registry.Registrar.__proto__.new.call(this);
    ;
  }).prototype = plugin_registry.Registrar.prototype;
  dart.addTypeTests(plugin_registry.Registrar);
  dart.addTypeCaches(plugin_registry.Registrar);
  dart.setMethodSignature(plugin_registry.Registrar, () => ({
    __proto__: dart.getMethods(plugin_registry.Registrar.__proto__),
    registerMessageHandler: dart.fnType(dart.void, []),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(typed_data.ByteData), dart.nullable(dart.fnType(dart.void, [dart.nullable(typed_data.ByteData)]))]),
    handleFrameworkMessage: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(typed_data.ByteData), dart.nullable(dart.fnType(dart.void, [dart.nullable(typed_data.ByteData)]))]),
    send: dart.fnType(async.Future$(dart.nullable(typed_data.ByteData)), [core.String, dart.nullable(typed_data.ByteData)]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))])
  }));
  dart.setGetterSignature(plugin_registry.Registrar, () => ({
    __proto__: dart.getGetters(plugin_registry.Registrar.__proto__),
    messenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(plugin_registry.Registrar, I[0]);
  dart.setFieldSignature(plugin_registry.Registrar, () => ({
    __proto__: dart.getFields(plugin_registry.Registrar.__proto__),
    [_handlers]: dart.finalFieldType(core.Map$(core.String, dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)])))
  }));
  plugin_registry.PluginRegistry = class PluginRegistry extends plugin_registry.Registrar {
    static ['_#new#tearOff'](binaryMessenger = null) {
      return new plugin_registry.PluginRegistry.new(binaryMessenger);
    }
    registrarFor(key) {
      return this;
    }
  };
  (plugin_registry.PluginRegistry.new = function(binaryMessenger = null) {
    plugin_registry.PluginRegistry.__proto__.new.call(this);
    ;
  }).prototype = plugin_registry.PluginRegistry.prototype;
  dart.addTypeTests(plugin_registry.PluginRegistry);
  dart.addTypeCaches(plugin_registry.PluginRegistry);
  dart.setMethodSignature(plugin_registry.PluginRegistry, () => ({
    __proto__: dart.getMethods(plugin_registry.PluginRegistry.__proto__),
    registrarFor: dart.fnType(plugin_registry.Registrar, [core.Type])
  }));
  dart.setLibraryUri(plugin_registry.PluginRegistry, I[0]);
  dart.copyProperties(plugin_registry, {
    get webPluginRegistry() {
      return plugin_registry.PluginRegistry.as(plugin_registry.webPluginRegistrar);
    },
    get pluginBinaryMessenger() {
      return plugin_registry.webPluginRegistrar;
    }
  });
  dart.defineLazy(plugin_registry, {
    /*plugin_registry.webPluginRegistrar*/get webPluginRegistrar() {
      return new plugin_registry.PluginRegistry.new();
    }
  }, false);
  dart.trackLibraries("packages/flutter_web_plugins/src/plugin_registry.dart", {
    "package:flutter_web_plugins/src/plugin_registry.dart": plugin_registry
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["plugin_registry.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiEsD,MAA/C,qCAAwB;IAC7B;0BAWS,SACG,MAC0B;AACjC,yCAAuB,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;2BA0B3C,SACG,MAC0B;AAHH;AAKvB;AACV;AACwB,wBAAU,AAAS,uBAAC,OAAO;AACjD,cAAI,OAAO;AACqB,YAA9B,YAAW,MAAM,AAAO,OAAA,CAAC,IAAI;;;cAExB;cAAW;AAAlB;AAME,YALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,gCACA,oCAAiB;;;;AAG5B,cAAI,QAAQ;AACQ,YAAlB,AAAQ,QAAA,CAAC,QAAQ;;;MAGvB;;;AAOiC;IAAI;SAMP,SAAmB;AACpB,sBAAY;AAYrC,MAXC,AAAe,uBAAK,OAAO,EAAE,OAAO,EAAE,QAAW;AAClD;AAC2B,UAAzB,AAAU,SAAD,UAAU,KAAK;;cACjB;cAAW;AAAlB;AAME,YALW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,gCACA,oCAAiB;;;;;AAIhC,YAAO,AAAU,UAAD;IAClB;sBAG8B,SAAyB;AACrD,UAAI,AAAQ,OAAD;AACgB,QAAzB,AAAU,yBAAO,OAAO;;AAEI,QAA5B,AAAS,uBAAC,OAAO,EAAI,OAAO;;IAEhC;;4CAvHmB;IA2Fe,kBAAoC;AAhGtE;;EAME;;;;;;;;;;;;;;;;;;;;;;;;iBAoJ0B;AAAQ;IAAI;;iDARrB;AACd;;EAAO;;;;;;;;;;AAkB0B,YAAmB,mCAAnB;IAAoC;;AAO/B;IAAkB;;;MAd/C,kCAAkB;YAAG","file":"../../../../../../../../../packages/flutter_web_plugins/src/plugin_registry.dart.lib.js"}');
  // Exports:
  return {
    src__plugin_registry: plugin_registry
  };
}));

//# sourceMappingURL=plugin_registry.dart.lib.js.map
