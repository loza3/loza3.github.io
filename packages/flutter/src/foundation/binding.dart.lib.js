define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__foundation__binding_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const convert = dart_sdk.convert;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var binding = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    IdentityMapOfString$String: () => (T$.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    FutureOfString: () => (T$.FutureOfString = dart.constFn(async.Future$(core.String)))(),
    VoidToFutureOfString: () => (T$.VoidToFutureOfString = dart.constFn(dart.fnType(T$.FutureOfString(), [])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    StringToFutureOfvoid: () => (T$.StringToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [core.String])))(),
    IdentityMapOfString$dynamic: () => (T$.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T$.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    FutureOfMapOfString$dynamic: () => (T$.FutureOfMapOfString$dynamic = dart.constFn(async.Future$(T$.MapOfString$dynamic())))(),
    MapOfString$String: () => (T$.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    MapOfString$StringToFutureOfMapOfString$dynamic: () => (T$.MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(T$.FutureOfMapOfString$dynamic(), [T$.MapOfString$String()])))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    VoidToFutureOfvoid: () => (T$.VoidToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [])))(),
    VoidToMapOfString$dynamic: () => (T$.VoidToMapOfString$dynamic = dart.constFn(dart.fnType(T$.MapOfString$dynamic(), [])))(),
    MapOfString$dynamicTodynamic: () => (T$.MapOfString$dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.MapOfString$dynamic()])))(),
    FutureOfServiceExtensionResponse: () => (T$.FutureOfServiceExtensionResponse = dart.constFn(async.Future$(developer.ServiceExtensionResponse)))(),
    StringAndMapOfString$StringToFutureOfServiceExtensionResponse: () => (T$.StringAndMapOfString$StringToFutureOfServiceExtensionResponse = dart.constFn(dart.fnType(T$.FutureOfServiceExtensionResponse(), [core.String, T$.MapOfString$String()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/foundation/binding.dart",
    "package:flutter/src/foundation/binding.dart"
  ];
  var _debugConstructed = dart.privateName(binding, "_debugConstructed");
  var _lockCount = dart.privateName(binding, "_lockCount");
  var _postExtensionStateChangedEvent = dart.privateName(binding, "_postExtensionStateChangedEvent");
  binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui.window;
    }
    get platformDispatcher() {
      return ui.PlatformDispatcher.instance;
    }
    initInstances() {
      if (!(binding.BindingBase._debugInitializedType == null)) dart.assertFailed(null, I[0], 262, 12, "_debugInitializedType == null");
      if (!dart.fn(() => {
        binding.BindingBase._debugInitializedType = this[$runtimeType];
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 263, 12, "() {\n      _debugInitializedType = runtimeType;\n      return true;\n    }()");
    }
    static checkInstance(T, instance) {
      if (!dart.fn(() => {
        if (binding.BindingBase._debugInitializedType == null && instance == null) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Binding has not yet been initialized."), new assertions.ErrorDescription.new("The \"instance\" getter on the " + dart.str(dart.wrapType(T)) + " binding mixin is only available once that binding has been initialized."), new assertions.ErrorHint.new("Typically, this is done by calling \"WidgetsFlutterBinding.ensureInitialized()\" or \"runApp()\" (the " + "latter calls the former). Typically this call is done in the \"void main()\" method. The \"ensureInitialized\" method " + "is idempotent; calling it multiple times is not harmful. After calling that method, the \"instance\" getter will " + "return the binding."), new assertions.ErrorHint.new("In a test, one can call \"TestWidgetsFlutterBinding.ensureInitialized()\" as the first line in the test's \"main()\" method " + "to initialize the binding."), new assertions.ErrorHint.new("If " + dart.str(dart.wrapType(T)) + " is a custom binding mixin, there must also be a custom binding class, like WidgetsFlutterBinding, " + "but that mixes in the selected binding, and that is the class that must be constructed before using the \"instance\" getter.")])));
        }
        if (instance == null) {
          if (!(binding.BindingBase._debugInitializedType == null)) dart.assertFailed(null, I[0], 304, 16, "_debugInitializedType == null");
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Binding mixin instance is null but bindings are already initialized."), new assertions.ErrorDescription.new("The \"instance\" property of the " + dart.str(dart.wrapType(T)) + " binding mixin was accessed, but that binding was not initialized when " + "the \"initInstances()\" method was called."), new assertions.ErrorHint.new("This probably indicates that the " + dart.str(dart.wrapType(T)) + " mixin was not mixed into the class that was used to initialize the binding. " + "If this is a custom binding mixin, there must also be a custom binding class, like WidgetsFlutterBinding, " + "but that mixes in the selected binding. If this is a test binding, check that the binding being initialized " + "is the same as the one into which the test binding is mixed."), new assertions.ErrorHint.new("It is also possible that " + dart.str(dart.wrapType(T)) + " does not implement \"initInstances()\" to assign a value to \"instance\". See the " + "documentation of the BaseBinding class for more details."), new assertions.ErrorHint.new("The binding that was initialized was of the type \"" + dart.str(binding.BindingBase._debugInitializedType) + "\". ")])));
        }
        try {
          if (!(instance != null)) dart.assertFailed(null, I[0], 327, 16, "instance != null");
          if (instance[_debugConstructed] && binding.BindingBase._debugInitializedType == null) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Binding initialized without calling initInstances."), new assertions.ErrorDescription.new("An instance of " + dart.str(dart.wrapType(T)) + " is non-null, but BindingBase.initInstances() has not yet been called."), new assertions.ErrorHint.new("This could happen because a binding mixin was somehow used outside of the normal binding mechanisms, or because " + "the binding's initInstances() method did not call \"super.initInstances()\"."), new assertions.ErrorHint.new("This could also happen if some code was invoked that used the binding while the binding was initializing, " + "for example if the \"initInstances\" method invokes a callback. Bindings should not invoke callbacks before " + "\"initInstances\" has completed.")])));
          }
          if (!instance[_debugConstructed]) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Binding did not complete initialization."), new assertions.ErrorDescription.new("An instance of " + dart.str(dart.wrapType(T)) + " is non-null, but the BindingBase() constructor has not yet been called."), new assertions.ErrorHint.new("This could also happen if some code was invoked that used the binding while the binding was initializing, " + "for example if the binding's constructor itself invokes a callback. Bindings should not invoke callbacks " + "before \"initInstances\" has completed.")])));
          }
        } catch (e) {
          let ex = dart.getThrown(e);
          if (core.NoSuchMethodError.is(ex)) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Binding does not extend BindingBase"), new assertions.ErrorDescription.new("An instance of " + dart.str(dart.wrapType(T)) + " was created but the BindingBase constructor was not called."), new assertions.ErrorHint.new("This could happen because the binding was implemented using \"implements\" rather than \"extends\" or \"with\". " + "Concrete binding classes must extend or mix in BindingBase.")])));
          } else
            throw e;
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 282, 12, "() {\n      if (_debugInitializedType == null && instance == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Binding has not yet been initialized.'),\n          ErrorDescription('The \"instance\" getter on the $T binding mixin is only available once that binding has been initialized.'),\n          ErrorHint(\n            'Typically, this is done by calling \"WidgetsFlutterBinding.ensureInitialized()\" or \"runApp()\" (the '\n            'latter calls the former). Typically this call is done in the \"void main()\" method. The \"ensureInitialized\" method '\n            'is idempotent; calling it multiple times is not harmful. After calling that method, the \"instance\" getter will '\n            'return the binding.',\n          ),\n          ErrorHint(\n            'In a test, one can call \"TestWidgetsFlutterBinding.ensureInitialized()\" as the first line in the test\\'s \"main()\" method '\n            'to initialize the binding.',\n          ),\n          ErrorHint(\n            'If $T is a custom binding mixin, there must also be a custom binding class, like WidgetsFlutterBinding, '\n            'but that mixes in the selected binding, and that is the class that must be constructed before using the \"instance\" getter.',\n          ),\n        ]);\n      }\n      if (instance == null) {\n        assert(_debugInitializedType == null);\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Binding mixin instance is null but bindings are already initialized.'),\n          ErrorDescription(\n            'The \"instance\" property of the $T binding mixin was accessed, but that binding was not initialized when '\n            'the \"initInstances()\" method was called.',\n          ),\n          ErrorHint(\n            'This probably indicates that the $T mixin was not mixed into the class that was used to initialize the binding. '\n            'If this is a custom binding mixin, there must also be a custom binding class, like WidgetsFlutterBinding, '\n            'but that mixes in the selected binding. If this is a test binding, check that the binding being initialized '\n            'is the same as the one into which the test binding is mixed.',\n          ),\n          ErrorHint(\n            'It is also possible that $T does not implement \"initInstances()\" to assign a value to \"instance\". See the '\n            'documentation of the BaseBinding class for more details.',\n          ),\n          ErrorHint(\n            'The binding that was initialized was of the type \"$_debugInitializedType\". '\n          ),\n        ]);\n      }\n      try {\n        assert(instance != null);\n        if (instance._debugConstructed && _debugInitializedType == null) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('Binding initialized without calling initInstances.'),\n            ErrorDescription('An instance of $T is non-null, but BindingBase.initInstances() has not yet been called.'),\n            ErrorHint(\n              'This could happen because a binding mixin was somehow used outside of the normal binding mechanisms, or because '\n              'the binding\\'s initInstances() method did not call \"super.initInstances()\".',\n            ),\n            ErrorHint(\n              'This could also happen if some code was invoked that used the binding while the binding was initializing, '\n              'for example if the \"initInstances\" method invokes a callback. Bindings should not invoke callbacks before '\n              '\"initInstances\" has completed.',\n            ),\n          ]);\n        }\n        if (!instance._debugConstructed) {\n          // The state of _debugInitializedType doesn't matter in this failure mode.\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('Binding did not complete initialization.'),\n            ErrorDescription('An instance of $T is non-null, but the BindingBase() constructor has not yet been called.'),\n            ErrorHint(\n              'This could also happen if some code was invoked that used the binding while the binding was initializing, '\n              \"for example if the binding's constructor itself invokes a callback. Bindings should not invoke callbacks \"\n              'before \"initInstances\" has completed.',\n            ),\n          ]);\n        }\n      } on NoSuchMethodError {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Binding does not extend BindingBase'),\n          ErrorDescription('An instance of $T was created but the BindingBase constructor was not called.'),\n          ErrorHint(\n            'This could happen because the binding was implemented using \"implements\" rather than \"extends\" or \"with\". '\n            'Concrete binding classes must extend or mix in BindingBase.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return dart.nullCheck(instance);
    }
    static debugBindingType() {
      return binding.BindingBase._debugInitializedType;
    }
    initServiceExtensions() {
      if (!!binding.BindingBase._debugServiceExtensionsRegistered) dart.assertFailed(null, I[0], 421, 12, "!_debugServiceExtensionsRegistered");
      if (!dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 423, 12, "() {\n      registerSignalServiceExtension(\n        name: 'reassemble',\n        callback: reassembleApplication,\n      );\n      return true;\n    }()");
      {
        ;
        this.registerStringServiceExtension({name: "connectedVmServiceUri", getter: dart.fn(() => async.async(core.String, function*() {
            let t2;
            t2 = debug.connectedVmServiceUri;
            return t2 == null ? "" : t2;
          }), T$.VoidToFutureOfString()), setter: dart.fn(uri => async.async(dart.void, function*() {
            debug.connectedVmServiceUri = uri;
          }), T$.StringToFutureOfvoid())});
        this.registerStringServiceExtension({name: "activeDevToolsServerAddress", getter: dart.fn(() => async.async(core.String, function*() {
            let t2;
            t2 = debug.activeDevToolsServerAddress;
            return t2 == null ? "" : t2;
          }), T$.VoidToFutureOfString()), setter: dart.fn(serverAddress => async.async(dart.void, function*() {
            debug.activeDevToolsServerAddress = serverAddress;
          }), T$.StringToFutureOfvoid())});
      }
      if (!dart.fn(() => {
        this.registerServiceExtension({name: "platformOverride", callback: dart.fn(parameters => async.async(T$.MapOfString$dynamic(), (function*() {
            if (parameters[$containsKey]("value")) {
              switch (parameters[$_get]("value")) {
                case "android":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.android;
                    break;
                  }
                case "fuchsia":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.fuchsia;
                    break;
                  }
                case "iOS":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.iOS;
                    break;
                  }
                case "linux":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.linux;
                    break;
                  }
                case "macOS":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.macOS;
                    break;
                  }
                case "windows":
                  {
                    platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.windows;
                    break;
                  }
                case "default":
                default:
                  {
                    platform.debugDefaultTargetPlatformOverride = null;
                  }
              }
              this[_postExtensionStateChangedEvent]("platformOverride", platform.defaultTargetPlatform.toString()[$substring]((dart.str(dart.wrapType(platform.TargetPlatform)) + ".").length));
              yield this.reassembleApplication();
            }
            return new (T$.IdentityMapOfString$dynamic()).from(["value", platform.defaultTargetPlatform.toString()[$substring]((dart.str(dart.wrapType(platform.TargetPlatform)) + ".").length)]);
          }).bind(this)), T$.MapOfString$StringToFutureOfMapOfString$dynamic())});
        this.registerServiceExtension({name: "brightnessOverride", callback: dart.fn(parameters => async.async(T$.MapOfString$dynamic(), (function*() {
            let t2, t2$;
            if (parameters[$containsKey]("value")) {
              switch (parameters[$_get]("value")) {
                case "Brightness.light":
                  {
                    debug.debugBrightnessOverride = ui.Brightness.light;
                    break;
                  }
                case "Brightness.dark":
                  {
                    debug.debugBrightnessOverride = ui.Brightness.dark;
                    break;
                  }
                default:
                  {
                    debug.debugBrightnessOverride = null;
                  }
              }
              this[_postExtensionStateChangedEvent]("brightnessOverride", dart.toString((t2 = debug.debugBrightnessOverride, t2 == null ? this.platformDispatcher.platformBrightness : t2)));
              yield this.reassembleApplication();
            }
            return new (T$.IdentityMapOfString$dynamic()).from(["value", dart.toString((t2$ = debug.debugBrightnessOverride, t2$ == null ? this.platformDispatcher.platformBrightness : t2$))]);
          }).bind(this)), T$.MapOfString$StringToFutureOfMapOfString$dynamic())});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 455, 12, "() {\n      const String platformOverrideExtensionName = 'platformOverride';\n      registerServiceExtension(\n        name: platformOverrideExtensionName,\n        callback: (Map<String, String> parameters) async {\n          if (parameters.containsKey('value')) {\n            switch (parameters['value']) {\n              case 'android':\n                debugDefaultTargetPlatformOverride = TargetPlatform.android;\n                break;\n              case 'fuchsia':\n                debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;\n                break;\n              case 'iOS':\n                debugDefaultTargetPlatformOverride = TargetPlatform.iOS;\n                break;\n              case 'linux':\n                debugDefaultTargetPlatformOverride = TargetPlatform.linux;\n                break;\n              case 'macOS':\n                debugDefaultTargetPlatformOverride = TargetPlatform.macOS;\n                break;\n              case 'windows':\n                debugDefaultTargetPlatformOverride = TargetPlatform.windows;\n                break;\n              case 'default':\n              default:\n                debugDefaultTargetPlatformOverride = null;\n            }\n            _postExtensionStateChangedEvent(\n              platformOverrideExtensionName,\n              defaultTargetPlatform.toString().substring('$TargetPlatform.'.length),\n            );\n            await reassembleApplication();\n          }\n          return <String, dynamic>{\n            'value': defaultTargetPlatform\n                     .toString()\n                     .substring('$TargetPlatform.'.length),\n          };\n        },\n      );\n\n      const String brightnessOverrideExtensionName = 'brightnessOverride';\n      registerServiceExtension(\n        name: brightnessOverrideExtensionName,\n        callback: (Map<String, String> parameters) async {\n          if (parameters.containsKey('value')) {\n            switch (parameters['value']) {\n              case 'Brightness.light':\n                debugBrightnessOverride = ui.Brightness.light;\n                break;\n              case 'Brightness.dark':\n                debugBrightnessOverride = ui.Brightness.dark;\n                break;\n              default:\n                debugBrightnessOverride = null;\n            }\n            _postExtensionStateChangedEvent(\n              brightnessOverrideExtensionName,\n              (debugBrightnessOverride ?? platformDispatcher.platformBrightness).toString(),\n            );\n            await reassembleApplication();\n          }\n          return <String, dynamic>{\n            'value': (debugBrightnessOverride ?? platformDispatcher.platformBrightness).toString(),\n          };\n        },\n      );\n      return true;\n    }()");
      if (!dart.fn(() => {
        binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 526, 12, "() {\n      _debugServiceExtensionsRegistered = true;\n      return true;\n    }()");
    }
    get locked() {
      return this[_lockCount] > 0;
    }
    lockEvents(callback) {
      let t2;
      let timelineTask = (t2 = new developer.TimelineTask.new(), (() => {
        t2.start("Lock events");
        return t2;
      })());
      if (!(callback !== null)) dart.assertFailed(null, I[0], 555, 12, "callback != null");
      this[_lockCount] = this[_lockCount] + 1;
      let future = callback();
      if (!(future !== null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.", I[0], 558, 12, "future != null");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = this[_lockCount] - 1;
        if (!this.locked) {
          timelineTask.finish();
          this.unlocked();
        }
      }, T$.VoidToNull()));
      return future;
    }
    unlocked() {
      if (!!this.locked) dart.assertFailed(null, I[0], 575, 12, "!locked");
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      assertions.FlutterError.resetErrorCount();
      return T$.FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 629, 12, "name != null");
      if (!(callback !== null)) dart.assertFailed(null, I[0], 630, 12, "callback != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(T$.MapOfString$dynamic(), function*() {
          yield callback();
          return new (T$.IdentityMapOfString$dynamic()).new();
        }), T$.MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 660, 12, "name != null");
      if (!(getter !== null)) dart.assertFailed(null, I[0], 661, 12, "getter != null");
      if (!(setter !== null)) dart.assertFailed(null, I[0], 662, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(T$.MapOfString$dynamic(), (function*() {
          if (parameters[$containsKey]("enabled")) {
            yield setter(parameters[$_get]("enabled") === "true");
            this[_postExtensionStateChangedEvent](name, (yield getter()) ? "true" : "false");
          }
          return new (T$.IdentityMapOfString$dynamic()).from(["enabled", (yield getter()) ? "true" : "false"]);
        }).bind(this)), T$.MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 694, 12, "name != null");
      if (!(getter !== null)) dart.assertFailed(null, I[0], 695, 12, "getter != null");
      if (!(setter !== null)) dart.assertFailed(null, I[0], 696, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(T$.MapOfString$dynamic(), (function*() {
          if (parameters[$containsKey](name)) {
            yield setter(core.double.parse(dart.nullCheck(parameters[$_get](name))));
            this[_postExtensionStateChangedEvent](name, (yield getter())[$toString]());
          }
          return new (T$.IdentityMapOfString$dynamic()).from([name, (yield getter())[$toString]()]);
        }).bind(this)), T$.MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (T$.IdentityMapOfString$dynamic()).from(["extension", "ext.flutter." + name, "value", value]));
    }
    postEvent(eventKind, eventData) {
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 756, 12, "name != null");
      if (!(getter !== null)) dart.assertFailed(null, I[0], 757, 12, "getter != null");
      if (!(setter !== null)) dart.assertFailed(null, I[0], 758, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(T$.MapOfString$dynamic(), (function*() {
          if (parameters[$containsKey]("value")) {
            yield setter(dart.nullCheck(parameters[$_get]("value")));
            this[_postExtensionStateChangedEvent](name, yield getter());
          }
          return new (T$.IdentityMapOfString$dynamic()).from(["value", (yield getter())]);
        }).bind(this)), T$.MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 827, 12, "name != null");
      if (!(callback !== null)) dart.assertFailed(null, I[0], 828, 12, "callback != null");
      let methodName = "ext.flutter." + name;
      developer.registerExtension(methodName, dart.fn((method, parameters) => async.async(developer.ServiceExtensionResponse, function*() {
        if (!(method === methodName)) dart.assertFailed(null, I[0], 831, 14, "method == methodName");
        if (!dart.fn(() => {
          if (debug.debugInstrumentationEnabled) {
            print.debugPrint("service extension method received: " + method + "(" + dart.str(parameters) + ")");
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 832, 14, "() {\n        if (debugInstrumentationEnabled) {\n          debugPrint('service extension method received: $method($parameters)');\n        }\n        return true;\n      }()");
        yield debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => T$.FutureOfvoid().delayed(core.Duration.zero), T$.VoidToFutureOfvoid()));
        let result = null;
        function result$35get() {
          let t3;
          t3 = result;
          return t3 == null ? dart.throw(new _internal.LateError.localNI("result")) : t3;
        }
        dart.fn(result$35get, T$.VoidToMapOfString$dynamic());
        function result$35set(result$35param) {
          return result = result$35param;
        }
        dart.fn(result$35set, T$.MapOfString$dynamicTodynamic());
        try {
          result$35set(yield callback(parameters));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, context: new assertions.ErrorDescription.new("during a service extension callback for \"" + method + "\"")}));
            return new developer.ServiceExtensionResponse.error(-32000, convert.json.encode(new (T$.IdentityMapOfString$String()).from(["exception", exception[$toString](), "stack", stack.toString(), "method", method])));
          } else
            throw e;
        }
        result$35get()[$_set]("type", "_extensionType");
        result$35get()[$_set]("method", method);
        return new developer.ServiceExtensionResponse.result(convert.json.encode(result$35get()));
      }), T$.StringAndMapOfString$StringToFutureOfServiceExtensionResponse()));
    }
    toString() {
      return "<" + object.objectRuntimeType(this, "BindingBase") + ">";
    }
  };
  (binding.BindingBase.new = function() {
    this[_debugConstructed] = false;
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!dart.fn(() => {
      this[_debugConstructed] = true;
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 141, 12, "() {\n      _debugConstructed = true;\n      return true;\n    }()");
    if (!(binding.BindingBase._debugInitializedType == null)) dart.assertFailed(null, I[0], 146, 12, "_debugInitializedType == null");
    this.initInstances();
    if (!(binding.BindingBase._debugInitializedType != null)) dart.assertFailed(null, I[0], 148, 12, "_debugInitializedType != null");
    if (!!binding.BindingBase._debugServiceExtensionsRegistered) dart.assertFailed(null, I[0], 150, 12, "!_debugServiceExtensionsRegistered");
    this.initServiceExtensions();
    if (!binding.BindingBase._debugServiceExtensionsRegistered) dart.assertFailed(null, I[0], 152, 12, "_debugServiceExtensionsRegistered");
    developer.postEvent("Flutter.FrameworkInitialization", new (T$.IdentityMapOfString$String()).new());
    developer.Timeline.finishSync();
  }).prototype = binding.BindingBase.prototype;
  dart.addTypeTests(binding.BindingBase);
  dart.addTypeCaches(binding.BindingBase);
  dart.setMethodSignature(binding.BindingBase, () => ({
    __proto__: dart.getMethods(binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(async.Future$(dart.void), []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {}, {callback: dart.fnType(async.Future$(dart.void), []), name: core.String}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.bool), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.bool])}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.double), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.double])}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [core.String, dart.dynamic]),
    postEvent: dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.String), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.String])}),
    registerServiceExtension: dart.fnType(dart.void, [], {}, {callback: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.Map$(core.String, core.String)]), name: core.String})
  }));
  dart.setStaticMethodSignature(binding.BindingBase, () => ['checkInstance', 'debugBindingType']);
  dart.setGetterSignature(binding.BindingBase, () => ({
    __proto__: dart.getGetters(binding.BindingBase.__proto__),
    window: ui.SingletonFlutterWindow,
    platformDispatcher: ui.PlatformDispatcher,
    locked: core.bool
  }));
  dart.setLibraryUri(binding.BindingBase, I[1]);
  dart.setFieldSignature(binding.BindingBase, () => ({
    __proto__: dart.getFields(binding.BindingBase.__proto__),
    [_debugConstructed]: dart.fieldType(core.bool),
    [_lockCount]: dart.fieldType(core.int)
  }));
  dart.setStaticFieldSignature(binding.BindingBase, () => ['_debugInitializedType', '_debugServiceExtensionsRegistered', 'debugReassembleConfig']);
  dart.defineExtensionMethods(binding.BindingBase, ['toString']);
  dart.defineLazy(binding.BindingBase, {
    /*binding.BindingBase._debugInitializedType*/get _debugInitializedType() {
      return null;
    },
    set _debugInitializedType(_) {},
    /*binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {},
    /*binding.BindingBase.debugReassembleConfig*/get debugReassembleConfig() {
      return null;
    },
    set debugReassembleConfig(_) {}
  }, false);
  var widgetName$ = dart.privateName(binding, "DebugReassembleConfig.widgetName");
  binding.DebugReassembleConfig = class DebugReassembleConfig extends core.Object {
    get widgetName() {
      return this[widgetName$];
    }
    set widgetName(value) {
      super.widgetName = value;
    }
    static ['_#new#tearOff'](opts) {
      let widgetName = opts && 'widgetName' in opts ? opts.widgetName : null;
      return new binding.DebugReassembleConfig.new({widgetName: widgetName});
    }
  };
  (binding.DebugReassembleConfig.new = function(opts) {
    let widgetName = opts && 'widgetName' in opts ? opts.widgetName : null;
    this[widgetName$] = widgetName;
    ;
  }).prototype = binding.DebugReassembleConfig.prototype;
  dart.addTypeTests(binding.DebugReassembleConfig);
  dart.addTypeCaches(binding.DebugReassembleConfig);
  dart.setLibraryUri(binding.DebugReassembleConfig, I[1]);
  dart.setFieldSignature(binding.DebugReassembleConfig, () => ({
    __proto__: dart.getFields(binding.DebugReassembleConfig.__proto__),
    widgetName: dart.finalFieldType(dart.nullable(core.String))
  }));
  binding._exitApplication = function _exitApplication() {
    return async.async(dart.void, function* _exitApplication() {
      io.exit(0);
    });
  };
  dart.trackLibraries("packages/flutter/src/foundation/binding.dart", {
    "package:flutter/src/foundation/binding.dart": binding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/binding.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__binding: binding
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map