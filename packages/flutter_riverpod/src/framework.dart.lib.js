define(['dart_sdk', 'packages/riverpod/src/value_provider.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/scheduler/binding.dart'], (function load__packages__flutter_riverpod__src__framework_dart(dart_sdk, packages__riverpod__src__value_provider$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__scheduler__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__riverpod__src__value_provider$46dart.src__framework;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework$ = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  var framework$0 = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    UncontrolledProviderScopeN: () => (T.UncontrolledProviderScopeN = dart.constFn(dart.nullable(framework$0.UncontrolledProviderScope)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], framework.Override);
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ProviderScope",
        [_Location_column]: 9,
        [_Location_line]: 79,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_riverpod-2.0.2/lib/src/framework.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UncontrolledProviderScope",
        [_Location_column]: 12,
        [_Location_line]: 247,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_riverpod-2.0.2/lib/src/framework.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UncontrolledProviderScope",
        [_Location_column]: 9,
        [_Location_line]: 268,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_riverpod-2.0.2/lib/src/framework.dart"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "package:flutter_riverpod/src/framework.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_riverpod-2.0.2/lib/src/framework.dart"
  ];
  var parent$ = dart.privateName(framework$0, "ProviderScope.parent");
  var child$ = dart.privateName(framework$0, "ProviderScope.child");
  var observers$ = dart.privateName(framework$0, "ProviderScope.observers");
  var overrides$ = dart.privateName(framework$0, "ProviderScope.overrides");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  framework$0.ProviderScope = class ProviderScope extends framework$.StatefulWidget {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get observers() {
      return this[observers$];
    }
    set observers(value) {
      super.observers = value;
    }
    get overrides() {
      return this[overrides$];
    }
    set overrides(value) {
      super.overrides = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let overrides = opts && 'overrides' in opts ? opts.overrides : C[0] || CT.C0;
      let observers = opts && 'observers' in opts ? opts.observers : null;
      let parent = opts && 'parent' in opts ? opts.parent : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new framework$0.ProviderScope.new({key: key, overrides: overrides, observers: observers, parent: parent, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static containerOf(context, opts) {
      let t0;
      let listen = opts && 'listen' in opts ? opts.listen : true;
      let scope = null;
      if (listen) {
        scope = context.dependOnInheritedWidgetOfExactType(framework$0.UncontrolledProviderScope);
      } else {
        scope = T.UncontrolledProviderScopeN().as((t0 = context.getElementForInheritedWidgetOfExactType(framework$0.UncontrolledProviderScope), t0 == null ? null : t0.widget));
      }
      if (scope == null) {
        dart.throw(new core.StateError.new("No ProviderScope found"));
      }
      return scope.container;
    }
    createState() {
      return new framework$0.ProviderScopeState.new();
    }
  };
  (framework$0.ProviderScope.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let overrides = opts && 'overrides' in opts ? opts.overrides : C[0] || CT.C0;
    let observers = opts && 'observers' in opts ? opts.observers : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[overrides$] = overrides;
    this[observers$] = observers;
    this[parent$] = parent;
    this[child$] = child;
    framework$0.ProviderScope.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = framework$0.ProviderScope.prototype;
  dart.addTypeTests(framework$0.ProviderScope);
  dart.addTypeCaches(framework$0.ProviderScope);
  dart.setMethodSignature(framework$0.ProviderScope, () => ({
    __proto__: dart.getMethods(framework$0.ProviderScope.__proto__),
    createState: dart.fnType(framework$0.ProviderScopeState, [])
  }));
  dart.setStaticMethodSignature(framework$0.ProviderScope, () => ['containerOf']);
  dart.setLibraryUri(framework$0.ProviderScope, I[0]);
  dart.setFieldSignature(framework$0.ProviderScope, () => ({
    __proto__: dart.getFields(framework$0.ProviderScope.__proto__),
    parent: dart.finalFieldType(dart.nullable(framework.ProviderContainer)),
    child: dart.finalFieldType(framework$.Widget),
    observers: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderObserver))),
    overrides: dart.finalFieldType(core.List$(framework.Override))
  }));
  var __ProviderScopeState_container = dart.privateName(framework$0, "_#ProviderScopeState#container");
  var _debugParentOwner = dart.privateName(framework$0, "_debugParentOwner");
  var _dirty = dart.privateName(framework$0, "_dirty");
  var _getParent = dart.privateName(framework$0, "_getParent");
  framework$0.ProviderScopeState = class ProviderScopeState extends framework$.State$(framework$0.ProviderScope) {
    get container() {
      let t0;
      t0 = this[__ProviderScopeState_container];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("container")) : t0;
    }
    set container(container$35param) {
      if (this[__ProviderScopeState_container] == null)
        this[__ProviderScopeState_container] = container$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("container"));
    }
    initState() {
      super.initState();
      let parent = this[_getParent]();
      if (!dart.fn(() => {
        this[_debugParentOwner] = parent;
        return true;
      }, T.VoidTobool())()) dart.assertFailed("", I[1], 169, 7, "() {\n        _debugParentOwner = parent;\n        return true;\n      }()");
      this.container = new framework.ProviderContainer.new({parent: parent, overrides: this.widget.overrides, observers: this.widget.observers});
    }
    [_getParent]() {
      let t0, t0$;
      if (this.widget.parent != null) {
        return this.widget.parent;
      } else {
        let scope = T.UncontrolledProviderScopeN().as((t0 = this.context.getElementForInheritedWidgetOfExactType(framework$0.UncontrolledProviderScope), t0 == null ? null : t0.widget));
        t0$ = scope;
        return t0$ == null ? null : t0$.container;
      }
    }
    didUpdateWidget(oldWidget) {
      framework$0.ProviderScope.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      this[_dirty] = true;
      if (!dart.equals(oldWidget.parent, this.widget.parent)) {
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({library: "flutter_riverpod", exception: new core.UnsupportedError.new("Changing ProviderScope.parent is not supported"), context: new assertions.ErrorDescription.new("while rebuilding ProviderScope")}));
      }
    }
    build(context) {
      if (!dart.fn(() => {
        if (this.widget.parent != null) {
          return true;
        }
        let parent = this[_getParent]();
        if (!dart.equals(parent, this[_debugParentOwner])) {
          dart.throw(new core.UnsupportedError.new("ProviderScope was rebuilt with a different ProviderScope ancestor"));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed("", I[1], 226, 7, "() {\n        if (widget.parent != null) {\n          // didUpdateWidget already takes care of widget.parent change\n          return true;\n        }\n        final parent = _getParent();\n\n        if (parent != _debugParentOwner) {\n          throw UnsupportedError(\n            'ProviderScope was rebuilt with a different ProviderScope ancestor',\n          );\n        }\n        return true;\n      }()");
      if (this[_dirty]) {
        this[_dirty] = false;
        this.container.updateOverrides(this.widget.overrides);
      }
      return new framework$0.UncontrolledProviderScope.new({container: this.container, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    dispose() {
      this.container.dispose();
      super.dispose();
    }
    static ['_#new#tearOff']() {
      return new framework$0.ProviderScopeState.new();
    }
  };
  (framework$0.ProviderScopeState.new = function() {
    this[__ProviderScopeState_container] = null;
    this[_debugParentOwner] = null;
    this[_dirty] = false;
    framework$0.ProviderScopeState.__proto__.new.call(this);
    ;
  }).prototype = framework$0.ProviderScopeState.prototype;
  dart.addTypeTests(framework$0.ProviderScopeState);
  dart.addTypeCaches(framework$0.ProviderScopeState);
  dart.setMethodSignature(framework$0.ProviderScopeState, () => ({
    __proto__: dart.getMethods(framework$0.ProviderScopeState.__proto__),
    [_getParent]: dart.fnType(dart.nullable(framework.ProviderContainer), []),
    build: dart.fnType(framework$.Widget, [framework$.BuildContext])
  }));
  dart.setGetterSignature(framework$0.ProviderScopeState, () => ({
    __proto__: dart.getGetters(framework$0.ProviderScopeState.__proto__),
    container: framework.ProviderContainer
  }));
  dart.setSetterSignature(framework$0.ProviderScopeState, () => ({
    __proto__: dart.getSetters(framework$0.ProviderScopeState.__proto__),
    container: framework.ProviderContainer
  }));
  dart.setLibraryUri(framework$0.ProviderScopeState, I[0]);
  dart.setFieldSignature(framework$0.ProviderScopeState, () => ({
    __proto__: dart.getFields(framework$0.ProviderScopeState.__proto__),
    [__ProviderScopeState_container]: dart.fieldType(dart.nullable(framework.ProviderContainer)),
    [_debugParentOwner]: dart.fieldType(dart.nullable(framework.ProviderContainer)),
    [_dirty]: dart.fieldType(core.bool)
  }));
  var container$ = dart.privateName(framework$0, "UncontrolledProviderScope.container");
  framework$0.UncontrolledProviderScope = class UncontrolledProviderScope extends framework$.InheritedWidget {
    get container() {
      return this[container$];
    }
    set container(value) {
      super.container = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let container = opts && 'container' in opts ? opts.container : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new framework$0.UncontrolledProviderScope.new({key: key, container: container, child: child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    updateShouldNotify(oldWidget) {
      framework$0.UncontrolledProviderScope.as(oldWidget);
      return !this.container[$_equals](oldWidget.container);
    }
    createElement() {
      return new framework$0._UncontrolledProviderScopeElement.new(this);
    }
  };
  (framework$0.UncontrolledProviderScope.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let container = opts && 'container' in opts ? opts.container : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[container$] = container;
    framework$0.UncontrolledProviderScope.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = framework$0.UncontrolledProviderScope.prototype;
  dart.addTypeTests(framework$0.UncontrolledProviderScope);
  dart.addTypeCaches(framework$0.UncontrolledProviderScope);
  dart.setMethodSignature(framework$0.UncontrolledProviderScope, () => ({
    __proto__: dart.getMethods(framework$0.UncontrolledProviderScope.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    createElement: dart.fnType(framework$0._UncontrolledProviderScopeElement, [])
  }));
  dart.setLibraryUri(framework$0.UncontrolledProviderScope, I[0]);
  dart.setFieldSignature(framework$0.UncontrolledProviderScope, () => ({
    __proto__: dart.getFields(framework$0.UncontrolledProviderScope.__proto__),
    container: dart.finalFieldType(framework.ProviderContainer)
  }));
  var _task = dart.privateName(framework$0, "_task");
  var _mounted = dart.privateName(framework$0, "_mounted");
  var _containerOf = dart.privateName(framework$0, "_containerOf");
  var _debugCanModifyProviders = dart.privateName(framework$0, "_debugCanModifyProviders");
  var _flutterVsync = dart.privateName(framework$0, "_flutterVsync");
  framework$0._UncontrolledProviderScopeElement = class _UncontrolledProviderScopeElement extends framework$.InheritedElement {
    static ['_#new#tearOff'](widget) {
      return new framework$0._UncontrolledProviderScopeElement.new(widget);
    }
    [_containerOf](widget) {
      return framework$0.UncontrolledProviderScope.as(widget).container;
    }
    mount(parent, newSlot) {
      {
        this[_containerOf](this.widget).debugCanModifyProviders = dart.bind(this, _debugCanModifyProviders);
      }
      if (!(this[_containerOf](this.widget).vsyncOverride == null)) dart.assertFailed("The ProviderContainer was already associated with a different widget", I[1], 305, 7, "_containerOf(widget).vsyncOverride == null");
      this[_containerOf](this.widget).vsyncOverride = dart.bind(this, _flutterVsync);
      super.mount(parent, newSlot);
    }
    reassemble() {
      super.reassemble();
      if (!dart.fn(() => {
        this[_containerOf](this.widget).debugReassemble();
        return true;
      }, T.VoidTobool())()) dart.assertFailed("", I[1], 317, 7, "() {\n        _containerOf(widget).debugReassemble();\n        return true;\n      }()");
    }
    update(newWidget) {
      framework$.ProxyWidget.as(newWidget);
      {
        this[_containerOf](this.widget).debugCanModifyProviders = null;
        this[_containerOf](newWidget).debugCanModifyProviders = dart.bind(this, _debugCanModifyProviders);
      }
      this[_containerOf](this.widget).vsyncOverride = null;
      if (!(this[_containerOf](newWidget).vsyncOverride == null)) dart.assertFailed("The ProviderContainer was already associated with a different widget", I[1], 335, 7, "_containerOf(newWidget).vsyncOverride == null");
      this[_containerOf](newWidget).vsyncOverride = dart.bind(this, _flutterVsync);
      super.update(newWidget);
    }
    [_flutterVsync](task) {
      if (!(this[_task] == null)) dart.assertFailed("Only one task can be scheduled at a time", I[1], 344, 12, "_task == null");
      this[_task] = task;
      if (binding.SchedulerBinding.instance.schedulerPhase === binding.SchedulerPhase.transientCallbacks) {
        this.markNeedsBuild();
      } else {
        T.FutureOfNull().microtask(dart.fn(() => {
          if (this[_mounted]) this.markNeedsBuild();
        }, T.VoidToNull()));
      }
    }
    [_debugCanModifyProviders]() {
      this.markNeedsBuild();
    }
    unmount() {
      this[_mounted] = false;
      {
        this[_containerOf](this.widget).debugCanModifyProviders = null;
      }
      this[_containerOf](this.widget).vsyncOverride = null;
      super.unmount();
    }
    build() {
      let t0;
      t0 = this[_task];
      t0 == null ? null : t0();
      this[_task] = null;
      return super.build();
    }
  };
  (framework$0._UncontrolledProviderScopeElement.new = function(widget) {
    this[_task] = null;
    this[_mounted] = true;
    framework$0._UncontrolledProviderScopeElement.__proto__.new.call(this, widget);
    ;
  }).prototype = framework$0._UncontrolledProviderScopeElement.prototype;
  dart.addTypeTests(framework$0._UncontrolledProviderScopeElement);
  dart.addTypeCaches(framework$0._UncontrolledProviderScopeElement);
  dart.setMethodSignature(framework$0._UncontrolledProviderScopeElement, () => ({
    __proto__: dart.getMethods(framework$0._UncontrolledProviderScopeElement.__proto__),
    [_containerOf]: dart.fnType(framework.ProviderContainer, [framework$.Widget]),
    [_flutterVsync]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_debugCanModifyProviders]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(framework$0._UncontrolledProviderScopeElement, I[0]);
  dart.setFieldSignature(framework$0._UncontrolledProviderScopeElement, () => ({
    __proto__: dart.getFields(framework$0._UncontrolledProviderScopeElement.__proto__),
    [_task]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_mounted]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter_riverpod/src/framework.dart", {
    "package:flutter_riverpod/src/framework.dart": framework$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["framework.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flutter_riverpod/src/framework.dart.lib.js"}');
  // Exports:
  return {
    src__framework: framework$0
  };
}));

//# sourceMappingURL=framework.dart.lib.js.map
