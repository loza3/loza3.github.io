define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/riverpod/src/value_provider.dart', 'packages/flutter_riverpod/src/framework.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/riverpod/src/result.dart', 'packages/riverpod/src/run_guarded.dart'], (function load__packages__flutter_riverpod__src__consumer_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__riverpod__src__value_provider$46dart, packages__flutter_riverpod__src__framework$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__riverpod__src__result$46dart, packages__riverpod__src__run_guarded$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const framework$ = packages__riverpod__src__value_provider$46dart.src__framework;
  const listenable = packages__riverpod__src__value_provider$46dart.src__listenable;
  const framework$0 = packages__flutter_riverpod__src__framework$46dart.src__framework;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const result = packages__riverpod__src__result$46dart.src__result;
  const run_guarded = packages__riverpod__src__run_guarded$46dart.src__run_guarded;
  var consumer = Object.create(dart.library);
  var internals = Object.create(dart.library);
  var builders = Object.create(dart.library);
  var change_notifier_provider = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $values = dartx.values;
  var $clear = dartx.clear;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $putIfAbsent = dartx.putIfAbsent;
  var $toList = dartx.toList;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    LinkedMapOfProviderListenable$ProviderSubscription: () => (T$.LinkedMapOfProviderListenable$ProviderSubscription = dart.constFn(_js_helper.LinkedMap$(framework$.ProviderListenable, framework$.ProviderSubscription)))(),
    JSArrayOfProviderSubscription: () => (T$.JSArrayOfProviderSubscription = dart.constFn(_interceptors.JSArray$(framework$.ProviderSubscription)))(),
    VoidToProviderSubscription: () => (T$.VoidToProviderSubscription = dart.constFn(dart.fnType(framework$.ProviderSubscription, [])))(),
    JSArrayOf_ListenManual: () => (T$.JSArrayOf_ListenManual = dart.constFn(_interceptors.JSArray$(consumer._ListenManual)))(),
    ListOfProviderOrFamily: () => (T$.ListOfProviderOrFamily = dart.constFn(core.List$(framework$.ProviderOrFamily)))(),
    ListNOfProviderOrFamily: () => (T$.ListNOfProviderOrFamily = dart.constFn(dart.nullable(T$.ListOfProviderOrFamily())))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    ChangeNotifierN: () => (T$.ChangeNotifierN = dart.constFn(dart.nullable(change_notifier.ChangeNotifier)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    Fn__ToAutoDisposeChangeNotifierProviderFamilyOfNotifierT$Arg: () => (T$.Fn__ToAutoDisposeChangeNotifierProviderFamilyOfNotifierT$Arg = dart.constFn(dart.gFnType((NotifierT, Arg) => [change_notifier_provider.AutoDisposeChangeNotifierProviderFamily$(NotifierT, Arg), [dart.fnType(NotifierT, [change_notifier_provider.AutoDisposeChangeNotifierProviderRef$(NotifierT), Arg])], {dependencies: T$.ListNOfProviderOrFamily(), name: T$.StringN()}, {}], (NotifierT, Arg) => [T$.ChangeNotifierN(), T$.ObjectN()])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidToString: () => (T$.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    VoidToNString: () => (T$.VoidToNString = dart.constFn(dart.nullable(T$.VoidToString())))(),
    FamilyN: () => (T$.FamilyN = dart.constFn(dart.nullable(framework$.Family)))(),
    Fn__ToAutoDisposeChangeNotifierProviderOfNotifierT: () => (T$.Fn__ToAutoDisposeChangeNotifierProviderOfNotifierT = dart.constFn(dart.gFnType(NotifierT => [change_notifier_provider.AutoDisposeChangeNotifierProvider$(NotifierT), [dart.fnType(NotifierT, [change_notifier_provider.AutoDisposeChangeNotifierProviderRef$(NotifierT)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], NotifierT => [T$.ChangeNotifierN()])))(),
    Fn__ToChangeNotifierProviderOfNotifierT: () => (T$.Fn__ToChangeNotifierProviderOfNotifierT = dart.constFn(dart.gFnType(NotifierT => [change_notifier_provider.ChangeNotifierProvider$(NotifierT), [dart.fnType(NotifierT, [change_notifier_provider.ChangeNotifierProviderRef$(NotifierT)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], NotifierT => [T$.ChangeNotifierN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 9,
        [_Location_line]: 316,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_riverpod-2.0.2/lib/src/consumer.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: builders.AutoDisposeChangeNotifierProviderBuilder.prototype
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: builders.ChangeNotifierProviderFamilyBuilder.prototype
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: builders.AutoDisposeChangeNotifierProviderFamilyBuilder.prototype
      });
    },
    get C4() {
      return C[4] = dart.fn(change_notifier_provider.AutoDisposeChangeNotifierProviderFamily['_#new#tearOff'], T$.Fn__ToAutoDisposeChangeNotifierProviderFamilyOfNotifierT$Arg());
    },
    get C5() {
      return C[5] = dart.fn(change_notifier_provider.AutoDisposeChangeNotifierProvider['_#new#tearOff'], T$.Fn__ToAutoDisposeChangeNotifierProviderOfNotifierT());
    },
    get C6() {
      return C[6] = dart.fn(change_notifier_provider.ChangeNotifierProvider['_#new#tearOff'], T$.Fn__ToChangeNotifierProviderOfNotifierT());
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "package:flutter_riverpod/src/consumer.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flutter_riverpod-2.0.2/lib/src/consumer.dart",
    "package:flutter_riverpod/src/builders.dart",
    "package:flutter_riverpod/src/change_notifier_provider.dart"
  ];
  consumer.WidgetRef = class WidgetRef extends core.Object {};
  (consumer.WidgetRef.new = function() {
    ;
  }).prototype = consumer.WidgetRef.prototype;
  dart.addTypeTests(consumer.WidgetRef);
  dart.addTypeCaches(consumer.WidgetRef);
  dart.setLibraryUri(consumer.WidgetRef, I[0]);
  var _builder = dart.privateName(consumer, "Consumer._builder");
  var _child = dart.privateName(consumer, "Consumer._child");
  var _builder$ = dart.privateName(consumer, "_builder");
  var _child$ = dart.privateName(consumer, "_child");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  consumer.ConsumerStatefulWidget = class ConsumerStatefulWidget extends framework.StatefulWidget {
    createElement() {
      return new consumer.ConsumerStatefulElement.new(this);
    }
  };
  (consumer.ConsumerStatefulWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    consumer.ConsumerStatefulWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = consumer.ConsumerStatefulWidget.prototype;
  dart.addTypeTests(consumer.ConsumerStatefulWidget);
  dart.addTypeCaches(consumer.ConsumerStatefulWidget);
  dart.setMethodSignature(consumer.ConsumerStatefulWidget, () => ({
    __proto__: dart.getMethods(consumer.ConsumerStatefulWidget.__proto__),
    createElement: dart.fnType(consumer.ConsumerStatefulElement, [])
  }));
  dart.setLibraryUri(consumer.ConsumerStatefulWidget, I[0]);
  consumer.ConsumerWidget = class ConsumerWidget extends consumer.ConsumerStatefulWidget {
    createState() {
      return new consumer._ConsumerState.new();
    }
  };
  (consumer.ConsumerWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    consumer.ConsumerWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = consumer.ConsumerWidget.prototype;
  dart.addTypeTests(consumer.ConsumerWidget);
  dart.addTypeCaches(consumer.ConsumerWidget);
  dart.setMethodSignature(consumer.ConsumerWidget, () => ({
    __proto__: dart.getMethods(consumer.ConsumerWidget.__proto__),
    createState: dart.fnType(consumer._ConsumerState, [])
  }));
  dart.setLibraryUri(consumer.ConsumerWidget, I[0]);
  consumer.Consumer = class Consumer extends consumer.ConsumerWidget {
    get [_builder$]() {
      return this[_builder];
    }
    set [_builder$](value) {
      super[_builder$] = value;
    }
    get [_child$]() {
      return this[_child];
    }
    set [_child$](value) {
      super[_child$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new consumer.Consumer.new({key: key, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context, ref) {
      let t2, t1, t0;
      t0 = context;
      t1 = ref;
      t2 = this[_child$];
      return this[_builder$](t0, t1, t2);
    }
  };
  (consumer.Consumer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_child] = child;
    this[_builder] = builder;
    consumer.Consumer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = consumer.Consumer.prototype;
  dart.addTypeTests(consumer.Consumer);
  dart.addTypeCaches(consumer.Consumer);
  dart.setMethodSignature(consumer.Consumer, () => ({
    __proto__: dart.getMethods(consumer.Consumer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef])
  }));
  dart.setLibraryUri(consumer.Consumer, I[0]);
  dart.setFieldSignature(consumer.Consumer, () => ({
    __proto__: dart.getFields(consumer.Consumer.__proto__),
    [_builder$]: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef, dart.nullable(framework.Widget)])),
    [_child$]: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  var __ConsumerState_ref = dart.privateName(consumer, "_#ConsumerState#ref");
  const _is_ConsumerState_default = Symbol('_is_ConsumerState_default');
  consumer.ConsumerState$ = dart.generic(T => {
    class ConsumerState extends framework.State$(T) {
      get ref() {
        let t1, t0;
        t0 = this[__ConsumerState_ref];
        return t0 == null ? (t1 = consumer.WidgetRef.as(this.context), this[__ConsumerState_ref] == null ? this[__ConsumerState_ref] = t1 : dart.throw(new _internal.LateError.fieldADI("ref"))) : t0;
      }
    }
    (ConsumerState.new = function() {
      this[__ConsumerState_ref] = null;
      ConsumerState.__proto__.new.call(this);
      ;
    }).prototype = ConsumerState.prototype;
    dart.addTypeTests(ConsumerState);
    ConsumerState.prototype[_is_ConsumerState_default] = true;
    dart.addTypeCaches(ConsumerState);
    dart.setGetterSignature(ConsumerState, () => ({
      __proto__: dart.getGetters(ConsumerState.__proto__),
      ref: consumer.WidgetRef
    }));
    dart.setLibraryUri(ConsumerState, I[0]);
    dart.setFieldSignature(ConsumerState, () => ({
      __proto__: dart.getFields(ConsumerState.__proto__),
      [__ConsumerState_ref]: dart.fieldType(dart.nullable(consumer.WidgetRef))
    }));
    return ConsumerState;
  });
  consumer.ConsumerState = consumer.ConsumerState$();
  dart.addTypeTests(consumer.ConsumerState, _is_ConsumerState_default);
  consumer._ConsumerState = class _ConsumerState extends consumer.ConsumerState$(consumer.ConsumerWidget) {
    get ref() {
      return consumer.WidgetRef.as(this.context);
    }
    build(context) {
      return this.widget.build(context, this.ref);
    }
    static ['_#new#tearOff']() {
      return new consumer._ConsumerState.new();
    }
  };
  (consumer._ConsumerState.new = function() {
    consumer._ConsumerState.__proto__.new.call(this);
    ;
  }).prototype = consumer._ConsumerState.prototype;
  dart.addTypeTests(consumer._ConsumerState);
  dart.addTypeCaches(consumer._ConsumerState);
  dart.setMethodSignature(consumer._ConsumerState, () => ({
    __proto__: dart.getMethods(consumer._ConsumerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(consumer._ConsumerState, I[0]);
  var __ConsumerStatefulElement__container = dart.privateName(consumer, "_#ConsumerStatefulElement#_container");
  var _dependencies = dart.privateName(consumer, "_dependencies");
  var _oldDependencies = dart.privateName(consumer, "_oldDependencies");
  var _listeners = dart.privateName(consumer, "_listeners");
  var _manualListeners = dart.privateName(consumer, "_manualListeners");
  var _container = dart.privateName(consumer, "_container");
  consumer.ConsumerStatefulElement = class ConsumerStatefulElement extends framework.StatefulElement {
    static ['_#new#tearOff'](widget) {
      return new consumer.ConsumerStatefulElement.new(widget);
    }
    get [_container]() {
      let t0;
      t0 = this[__ConsumerStatefulElement__container];
      return t0 == null ? this[__ConsumerStatefulElement__container] = framework$0.ProviderScope.containerOf(this) : t0;
    }
    set [_container](library$32package$58flutter_riverpod$47src$47consumer$46dart$58$58_container$35param) {
      this[__ConsumerStatefulElement__container] = library$32package$58flutter_riverpod$47src$47consumer$46dart$58$58_container$35param;
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      let newContainer = framework$0.ProviderScope.containerOf(this);
      if (!this[_container][$_equals](newContainer)) {
        this[_container] = newContainer;
        for (let dependency of this[_dependencies][$values]) {
          dependency.close();
        }
        this[_dependencies][$clear]();
      }
    }
    build() {
      try {
        this[_oldDependencies] = this[_dependencies];
        for (let i = 0; i < this[_listeners][$length]; i = i + 1) {
          this[_listeners][$_get](i).close();
        }
        this[_listeners][$clear]();
        this[_dependencies] = new (T$.LinkedMapOfProviderListenable$ProviderSubscription()).new();
        return super.build();
      } finally {
        for (let dep of dart.nullCheck(this[_oldDependencies])[$values]) {
          dep.close();
        }
        this[_oldDependencies] = null;
      }
    }
    watch(Res, target) {
      return Res.as(this[_dependencies][$putIfAbsent](target, dart.fn(() => {
        let t0;
        let oldDependency = (t0 = this[_oldDependencies], t0 == null ? null : t0[$remove](target));
        if (oldDependency != null) {
          return oldDependency;
        }
        return this[_container].listen(Res, target, dart.fn((_, __) => this.markNeedsBuild(), dart.fnType(dart.void, [dart.nullable(Res), Res])));
      }, T$.VoidToProviderSubscription())).read());
    }
    unmount() {
      let t0;
      for (let dependency of this[_dependencies][$values]) {
        dependency.close();
      }
      for (let i = 0; i < this[_listeners][$length]; i = i + 1) {
        this[_listeners][$_get](i).close();
      }
      let manualListeners = (t0 = this[_manualListeners], t0 == null ? null : t0[$toList]());
      if (manualListeners != null) {
        for (let listener of manualListeners) {
          listener.close();
        }
        this[_manualListeners] = null;
      }
      super.unmount();
    }
    listen(T, provider, listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (!this.debugDoingBuild) dart.assertFailed("ref.listen can only be used within the build method of a ConsumerWidget", I[1], 539, 7, "debugDoingBuild");
      let sub = this[_container].listen(T, provider, listener, {onError: onError});
      this[_listeners][$add](sub);
    }
    read(T, provider) {
      return framework$0.ProviderScope.containerOf(this, {listen: false}).read(T, provider);
    }
    refresh(State, provider) {
      return framework$0.ProviderScope.containerOf(this, {listen: false}).refresh(State, provider);
    }
    invalidate(provider) {
      this[_container].invalidate(provider);
    }
    listenManual(T, provider, listener, opts) {
      let t0;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : false;
      let listeners = (t0 = this[_manualListeners], t0 == null ? this[_manualListeners] = T$.JSArrayOf_ListenManual().of([]) : t0);
      let sub = new (consumer._ListenManual$(T)).new(framework$0.ProviderScope.containerOf(this, {listen: false}).listen(T, provider, listener, {onError: onError, fireImmediately: fireImmediately}), this);
      listeners[$add](sub);
      return sub;
    }
    get context() {
      return this;
    }
  };
  (consumer.ConsumerStatefulElement.new = function(widget) {
    this[__ConsumerStatefulElement__container] = null;
    this[_dependencies] = new (T$.LinkedMapOfProviderListenable$ProviderSubscription()).new();
    this[_oldDependencies] = null;
    this[_listeners] = T$.JSArrayOfProviderSubscription().of([]);
    this[_manualListeners] = null;
    consumer.ConsumerStatefulElement.__proto__.new.call(this, widget);
    ;
  }).prototype = consumer.ConsumerStatefulElement.prototype;
  dart.addTypeTests(consumer.ConsumerStatefulElement);
  dart.addTypeCaches(consumer.ConsumerStatefulElement);
  consumer.ConsumerStatefulElement[dart.implements] = () => [consumer.WidgetRef];
  dart.setMethodSignature(consumer.ConsumerStatefulElement, () => ({
    __proto__: dart.getMethods(consumer.ConsumerStatefulElement.__proto__),
    watch: dart.gFnType(Res => [Res, [framework$.ProviderListenable$(Res)]], Res => [dart.nullable(core.Object)]),
    listen: dart.gFnType(T => [dart.void, [framework$.ProviderListenable$(T), dart.fnType(dart.void, [dart.nullable(T), T])], {onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {}], T => [dart.nullable(core.Object)]),
    read: dart.gFnType(T => [T, [framework$.ProviderListenable$(T)]], T => [dart.nullable(core.Object)]),
    refresh: dart.gFnType(State => [State, [framework$.Refreshable$(State)]], State => [dart.nullable(core.Object)]),
    invalidate: dart.fnType(dart.void, [framework$.ProviderOrFamily]),
    listenManual: dart.gFnType(T => [framework$.ProviderSubscription$(T), [framework$.ProviderListenable$(T), dart.fnType(dart.void, [dart.nullable(T), T])], {fireImmediately: core.bool, onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {}], T => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(consumer.ConsumerStatefulElement, () => ({
    __proto__: dart.getGetters(consumer.ConsumerStatefulElement.__proto__),
    [_container]: framework$.ProviderContainer,
    context: framework.BuildContext
  }));
  dart.setSetterSignature(consumer.ConsumerStatefulElement, () => ({
    __proto__: dart.getSetters(consumer.ConsumerStatefulElement.__proto__),
    [_container]: framework$.ProviderContainer
  }));
  dart.setLibraryUri(consumer.ConsumerStatefulElement, I[0]);
  dart.setFieldSignature(consumer.ConsumerStatefulElement, () => ({
    __proto__: dart.getFields(consumer.ConsumerStatefulElement.__proto__),
    [__ConsumerStatefulElement__container]: dart.fieldType(dart.nullable(framework$.ProviderContainer)),
    [_dependencies]: dart.fieldType(core.Map$(framework$.ProviderListenable, framework$.ProviderSubscription)),
    [_oldDependencies]: dart.fieldType(dart.nullable(core.Map$(framework$.ProviderListenable, framework$.ProviderSubscription))),
    [_listeners]: dart.finalFieldType(core.List$(framework$.ProviderSubscription)),
    [_manualListeners]: dart.fieldType(dart.nullable(core.List$(consumer._ListenManual)))
  }));
  var _subscription$ = dart.privateName(consumer, "_subscription");
  var _element$ = dart.privateName(consumer, "_element");
  const _is__ListenManual_default = Symbol('_is__ListenManual_default');
  consumer._ListenManual$ = dart.generic(T => {
    class _ListenManual extends core.Object {
      static ['_#new#tearOff'](T, _subscription, _element) {
        return new (consumer._ListenManual$(T)).new(_subscription, _element);
      }
      close() {
        let t0;
        this[_subscription$].close();
        t0 = this[_element$][_manualListeners];
        t0 == null ? null : t0[$remove](this);
      }
      read() {
        return this[_subscription$].read();
      }
    }
    (_ListenManual.new = function(_subscription, _element) {
      this[_subscription$] = _subscription;
      this[_element$] = _element;
      ;
    }).prototype = _ListenManual.prototype;
    dart.addTypeTests(_ListenManual);
    _ListenManual.prototype[_is__ListenManual_default] = true;
    dart.addTypeCaches(_ListenManual);
    _ListenManual[dart.implements] = () => [framework$.ProviderSubscription$(T)];
    dart.setMethodSignature(_ListenManual, () => ({
      __proto__: dart.getMethods(_ListenManual.__proto__),
      close: dart.fnType(dart.void, []),
      read: dart.fnType(T, [])
    }));
    dart.setLibraryUri(_ListenManual, I[0]);
    dart.setFieldSignature(_ListenManual, () => ({
      __proto__: dart.getFields(_ListenManual.__proto__),
      [_subscription$]: dart.finalFieldType(framework$.ProviderSubscription$(T)),
      [_element$]: dart.finalFieldType(consumer.ConsumerStatefulElement)
    }));
    return _ListenManual;
  });
  consumer._ListenManual = consumer._ListenManual$();
  dart.addTypeTests(consumer._ListenManual, _is__ListenManual_default);
  builders.ChangeNotifierProviderBuilder = class ChangeNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.ChangeNotifierProviderBuilder.new();
    }
    call(Notifier, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (change_notifier_provider.ChangeNotifierProvider$(Notifier)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[1] || CT.C1;
    }
    get family() {
      return C[2] || CT.C2;
    }
  };
  (builders.ChangeNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.ChangeNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.ChangeNotifierProviderBuilder);
  dart.addTypeCaches(builders.ChangeNotifierProviderBuilder);
  dart.setMethodSignature(builders.ChangeNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.ChangeNotifierProviderBuilder.__proto__),
    call: dart.gFnType(Notifier => [change_notifier_provider.ChangeNotifierProvider$(Notifier), [dart.fnType(Notifier, [change_notifier_provider.ChangeNotifierProviderRef$(Notifier)])], {dependencies: dart.nullable(core.List$(framework$.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], Notifier => [dart.nullable(change_notifier.ChangeNotifier)])
  }));
  dart.setGetterSignature(builders.ChangeNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.ChangeNotifierProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeChangeNotifierProviderBuilder,
    family: builders.ChangeNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.ChangeNotifierProviderBuilder, I[2]);
  builders.ChangeNotifierProviderFamilyBuilder = class ChangeNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.ChangeNotifierProviderFamilyBuilder.new();
    }
    call(Notifier, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (change_notifier_provider.ChangeNotifierProviderFamily$(Notifier, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[3] || CT.C3;
    }
  };
  (builders.ChangeNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.ChangeNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.ChangeNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.ChangeNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.ChangeNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.ChangeNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((Notifier, Arg) => [change_notifier_provider.ChangeNotifierProviderFamily$(Notifier, Arg), [dart.fnType(Notifier, [change_notifier_provider.ChangeNotifierProviderRef$(Notifier), Arg])], {dependencies: dart.nullable(core.List$(framework$.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (Notifier, Arg) => [dart.nullable(change_notifier.ChangeNotifier), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.ChangeNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.ChangeNotifierProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeChangeNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.ChangeNotifierProviderFamilyBuilder, I[2]);
  builders.AutoDisposeChangeNotifierProviderBuilder = class AutoDisposeChangeNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeChangeNotifierProviderBuilder.new();
    }
    call(Notifier, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (change_notifier_provider.AutoDisposeChangeNotifierProvider$(Notifier)).new(create, {name: name, dependencies: dependencies});
    }
    get family() {
      return C[3] || CT.C3;
    }
  };
  (builders.AutoDisposeChangeNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeChangeNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeChangeNotifierProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeChangeNotifierProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeChangeNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeChangeNotifierProviderBuilder.__proto__),
    call: dart.gFnType(Notifier => [change_notifier_provider.AutoDisposeChangeNotifierProvider$(Notifier), [dart.fnType(Notifier, [change_notifier_provider.AutoDisposeChangeNotifierProviderRef$(Notifier)])], {dependencies: dart.nullable(core.List$(framework$.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], Notifier => [dart.nullable(change_notifier.ChangeNotifier)])
  }));
  dart.setGetterSignature(builders.AutoDisposeChangeNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeChangeNotifierProviderBuilder.__proto__),
    family: builders.AutoDisposeChangeNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeChangeNotifierProviderBuilder, I[2]);
  builders.AutoDisposeChangeNotifierProviderFamilyBuilder = class AutoDisposeChangeNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeChangeNotifierProviderFamilyBuilder.new();
    }
    call(Notifier, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (change_notifier_provider.AutoDisposeChangeNotifierProviderFamily$(Notifier, Arg)).new(create, {name: name, dependencies: dependencies});
    }
  };
  (builders.AutoDisposeChangeNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeChangeNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeChangeNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeChangeNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeChangeNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeChangeNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((Notifier, Arg) => [change_notifier_provider.AutoDisposeChangeNotifierProviderFamily$(Notifier, Arg), [dart.fnType(Notifier, [change_notifier_provider.AutoDisposeChangeNotifierProviderRef$(Notifier), Arg])], {dependencies: dart.nullable(core.List$(framework$.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (Notifier, Arg) => [dart.nullable(change_notifier.ChangeNotifier), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeChangeNotifierProviderFamilyBuilder, I[2]);
  var dependencies$ = dart.privateName(change_notifier_provider, "_ChangeNotifierProviderBase.dependencies");
  const _is__ChangeNotifierProviderBase_default = Symbol('_is__ChangeNotifierProviderBase_default');
  change_notifier_provider._ChangeNotifierProviderBase$ = dart.generic(NotifierT => {
    class _ChangeNotifierProviderBase extends framework$.ProviderBase$(NotifierT) {
      get dependencies() {
        return this[dependencies$];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
    }
    (_ChangeNotifierProviderBase.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[dependencies$] = dependencies;
      _ChangeNotifierProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = _ChangeNotifierProviderBase.prototype;
    dart.addTypeTests(_ChangeNotifierProviderBase);
    _ChangeNotifierProviderBase.prototype[_is__ChangeNotifierProviderBase_default] = true;
    dart.addTypeCaches(_ChangeNotifierProviderBase);
    dart.setLibraryUri(_ChangeNotifierProviderBase, I[3]);
    dart.setFieldSignature(_ChangeNotifierProviderBase, () => ({
      __proto__: dart.getFields(_ChangeNotifierProviderBase.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework$.ProviderOrFamily)))
    }));
    return _ChangeNotifierProviderBase;
  });
  change_notifier_provider._ChangeNotifierProviderBase = change_notifier_provider._ChangeNotifierProviderBase$();
  dart.addTypeTests(change_notifier_provider._ChangeNotifierProviderBase, _is__ChangeNotifierProviderBase_default);
  const _is_ChangeNotifierProviderRef_default = Symbol('_is_ChangeNotifierProviderRef_default');
  change_notifier_provider.ChangeNotifierProviderRef$ = dart.generic(NotifierT => {
    class ChangeNotifierProviderRef extends core.Object {}
    (ChangeNotifierProviderRef.new = function() {
      ;
    }).prototype = ChangeNotifierProviderRef.prototype;
    dart.addTypeTests(ChangeNotifierProviderRef);
    ChangeNotifierProviderRef.prototype[_is_ChangeNotifierProviderRef_default] = true;
    dart.addTypeCaches(ChangeNotifierProviderRef);
    ChangeNotifierProviderRef[dart.implements] = () => [framework$.Ref$(NotifierT)];
    dart.setLibraryUri(ChangeNotifierProviderRef, I[3]);
    return ChangeNotifierProviderRef;
  });
  change_notifier_provider.ChangeNotifierProviderRef = change_notifier_provider.ChangeNotifierProviderRef$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProviderRef, _is_ChangeNotifierProviderRef_default);
  const _is_AutoDisposeChangeNotifierProviderRef_default = Symbol('_is_AutoDisposeChangeNotifierProviderRef_default');
  change_notifier_provider.AutoDisposeChangeNotifierProviderRef$ = dart.generic(NotifierT => {
    class AutoDisposeChangeNotifierProviderRef extends change_notifier_provider.ChangeNotifierProviderRef$(NotifierT) {}
    (AutoDisposeChangeNotifierProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeChangeNotifierProviderRef.prototype;
    dart.addTypeTests(AutoDisposeChangeNotifierProviderRef);
    AutoDisposeChangeNotifierProviderRef.prototype[_is_AutoDisposeChangeNotifierProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeChangeNotifierProviderRef);
    AutoDisposeChangeNotifierProviderRef[dart.implements] = () => [framework$.AutoDisposeRef$(NotifierT)];
    dart.setLibraryUri(AutoDisposeChangeNotifierProviderRef, I[3]);
    return AutoDisposeChangeNotifierProviderRef;
  });
  change_notifier_provider.AutoDisposeChangeNotifierProviderRef = change_notifier_provider.AutoDisposeChangeNotifierProviderRef$();
  dart.addTypeTests(change_notifier_provider.AutoDisposeChangeNotifierProviderRef, _is_AutoDisposeChangeNotifierProviderRef_default);
  var __AutoDisposeChangeNotifierProvider_notifier = dart.privateName(change_notifier_provider, "_#AutoDisposeChangeNotifierProvider#notifier");
  var _createFn$ = dart.privateName(change_notifier_provider, "_createFn");
  var _create = dart.privateName(change_notifier_provider, "_create");
  const _is_AutoDisposeChangeNotifierProvider_default = Symbol('_is_AutoDisposeChangeNotifierProvider_default');
  change_notifier_provider.AutoDisposeChangeNotifierProvider$ = dart.generic(NotifierT => {
    var __t$AutoDisposeChangeNotifierProviderElementOfNotifierT = () => (__t$AutoDisposeChangeNotifierProviderElementOfNotifierT = dart.constFn(change_notifier_provider.AutoDisposeChangeNotifierProviderElement$(NotifierT)))();
    class AutoDisposeChangeNotifierProvider extends change_notifier_provider._ChangeNotifierProviderBase$(NotifierT) {
      static ['_#new#tearOff'](NotifierT, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (change_notifier_provider.AutoDisposeChangeNotifierProvider$(NotifierT)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create](ref) {
        let t0;
        t0 = ref;
        return this[_createFn$](t0);
      }
      createElement() {
        return new (__t$AutoDisposeChangeNotifierProviderElementOfNotifierT()).__(this);
      }
      get notifier() {
        let t1, t0;
        t0 = this[__AutoDisposeChangeNotifierProvider_notifier];
        return t0 == null ? (t1 = change_notifier_provider._notifier(NotifierT, this), this[__AutoDisposeChangeNotifierProvider_notifier] == null ? this[__AutoDisposeChangeNotifierProvider_notifier] = t1 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t0;
      }
    }
    (AutoDisposeChangeNotifierProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeChangeNotifierProvider_notifier] = null;
      this[_createFn$] = _createFn;
      AutoDisposeChangeNotifierProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeChangeNotifierProvider.prototype;
    dart.addTypeTests(AutoDisposeChangeNotifierProvider);
    AutoDisposeChangeNotifierProvider.prototype[_is_AutoDisposeChangeNotifierProvider_default] = true;
    dart.addTypeCaches(AutoDisposeChangeNotifierProvider);
    dart.setMethodSignature(AutoDisposeChangeNotifierProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeChangeNotifierProvider.__proto__),
      [_create]: dart.fnType(NotifierT, [change_notifier_provider.AutoDisposeChangeNotifierProviderElement$(NotifierT)]),
      createElement: dart.fnType(change_notifier_provider.AutoDisposeChangeNotifierProviderElement$(NotifierT), [])
    }));
    dart.setGetterSignature(AutoDisposeChangeNotifierProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeChangeNotifierProvider.__proto__),
      notifier: framework$.Refreshable$(NotifierT)
    }));
    dart.setLibraryUri(AutoDisposeChangeNotifierProvider, I[3]);
    dart.setFieldSignature(AutoDisposeChangeNotifierProvider, () => ({
      __proto__: dart.getFields(AutoDisposeChangeNotifierProvider.__proto__),
      [_createFn$]: dart.finalFieldType(dart.fnType(NotifierT, [change_notifier_provider.AutoDisposeChangeNotifierProviderRef$(NotifierT)])),
      [__AutoDisposeChangeNotifierProvider_notifier]: dart.fieldType(dart.nullable(framework$.Refreshable$(NotifierT)))
    }));
    dart.setStaticFieldSignature(AutoDisposeChangeNotifierProvider, () => ['family']);
    return AutoDisposeChangeNotifierProvider;
  });
  change_notifier_provider.AutoDisposeChangeNotifierProvider = change_notifier_provider.AutoDisposeChangeNotifierProvider$();
  dart.defineLazy(change_notifier_provider.AutoDisposeChangeNotifierProvider, {
    /*change_notifier_provider.AutoDisposeChangeNotifierProvider.family*/get family() {
      return C[4] || CT.C4;
    }
  }, false);
  dart.addTypeTests(change_notifier_provider.AutoDisposeChangeNotifierProvider, _is_AutoDisposeChangeNotifierProvider_default);
  var _keepAliveLinks = dart.privateName(framework$, "_keepAliveLinks");
  var _maintainState = dart.privateName(framework$, "_maintainState");
  var _notifierNotifier = dart.privateName(change_notifier_provider, "_notifierNotifier");
  var _removeListener = dart.privateName(change_notifier_provider, "_removeListener");
  const _is_ChangeNotifierProviderElement_default = Symbol('_is_ChangeNotifierProviderElement_default');
  change_notifier_provider.ChangeNotifierProviderElement$ = dart.generic(NotifierT => {
    var __t$ProxyElementValueNotifierOfNotifierT = () => (__t$ProxyElementValueNotifierOfNotifierT = dart.constFn(listenable.ProxyElementValueNotifier$(NotifierT)))();
    var __t$_ChangeNotifierProviderBaseOfNotifierT = () => (__t$_ChangeNotifierProviderBaseOfNotifierT = dart.constFn(change_notifier_provider._ChangeNotifierProviderBase$(NotifierT)))();
    var __t$VoidToNotifierT = () => (__t$VoidToNotifierT = dart.constFn(dart.fnType(NotifierT, [])))();
    class ChangeNotifierProviderElement extends framework$.ProviderElementBase$(NotifierT) {
      static ['_#_#tearOff'](NotifierT, provider) {
        return new (change_notifier_provider.ChangeNotifierProviderElement$(NotifierT)).__(provider);
      }
      get notifier() {
        return this[_notifierNotifier].value;
      }
      create(opts) {
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        let provider = __t$_ChangeNotifierProviderBaseOfNotifierT().as(this.provider);
        let notifierResult = this[_notifierNotifier].result = result.Result.guard(NotifierT, dart.fn(() => provider[_create](this), __t$VoidToNotifierT()));
        let notifier = notifierResult.requireState;
        this.setState(notifier);
        if (notifier != null) {
          const listener = () => {
            return this.setState(notifier);
          };
          dart.fn(listener, T$.VoidTovoid());
          notifier.addListener(listener);
          this[_removeListener] = dart.fn(() => notifier.removeListener(listener), T$.VoidTovoid());
        }
      }
      updateShouldNotify(previous, next) {
        NotifierT.as(previous);
        NotifierT.as(next);
        return true;
      }
      runOnDispose() {
        let t0, t0$;
        super.runOnDispose();
        t0 = this[_removeListener];
        t0 == null ? null : t0();
        this[_removeListener] = null;
        let notifier = (t0$ = this[_notifierNotifier].result, t0$ == null ? null : t0$.stateOrNull);
        if (notifier != null) {
          run_guarded.runGuarded(dart.bind(notifier, 'dispose'));
        }
        this[_notifierNotifier].result = null;
      }
      visitChildren(opts) {
        let elementVisitor = opts && 'elementVisitor' in opts ? opts.elementVisitor : null;
        let notifierVisitor = opts && 'notifierVisitor' in opts ? opts.notifierVisitor : null;
        super.visitChildren({elementVisitor: elementVisitor, notifierVisitor: notifierVisitor});
        notifierVisitor(this[_notifierNotifier]);
      }
    }
    (ChangeNotifierProviderElement.__ = function(provider) {
      this[_notifierNotifier] = new (__t$ProxyElementValueNotifierOfNotifierT()).new();
      this[_removeListener] = null;
      ChangeNotifierProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = ChangeNotifierProviderElement.prototype;
    dart.addTypeTests(ChangeNotifierProviderElement);
    ChangeNotifierProviderElement.prototype[_is_ChangeNotifierProviderElement_default] = true;
    dart.addTypeCaches(ChangeNotifierProviderElement);
    ChangeNotifierProviderElement[dart.implements] = () => [change_notifier_provider.ChangeNotifierProviderRef$(NotifierT)];
    dart.setMethodSignature(ChangeNotifierProviderElement, () => ({
      __proto__: dart.getMethods(ChangeNotifierProviderElement.__proto__),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ChangeNotifierProviderElement, () => ({
      __proto__: dart.getGetters(ChangeNotifierProviderElement.__proto__),
      notifier: NotifierT
    }));
    dart.setLibraryUri(ChangeNotifierProviderElement, I[3]);
    dart.setFieldSignature(ChangeNotifierProviderElement, () => ({
      __proto__: dart.getFields(ChangeNotifierProviderElement.__proto__),
      [_notifierNotifier]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(NotifierT)),
      [_removeListener]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [])))
    }));
    return ChangeNotifierProviderElement;
  });
  change_notifier_provider.ChangeNotifierProviderElement = change_notifier_provider.ChangeNotifierProviderElement$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProviderElement, _is_ChangeNotifierProviderElement_default);
  const _is_AutoDisposeChangeNotifierProviderElement_default = Symbol('_is_AutoDisposeChangeNotifierProviderElement_default');
  change_notifier_provider.AutoDisposeChangeNotifierProviderElement$ = dart.generic(NotifierT => {
    const ChangeNotifierProviderElement_AutoDisposeProviderElementMixin$36 = class ChangeNotifierProviderElement_AutoDisposeProviderElementMixin extends change_notifier_provider.ChangeNotifierProviderElement$(NotifierT) {};
    (ChangeNotifierProviderElement_AutoDisposeProviderElementMixin$36.__ = function(provider) {
      framework$.AutoDisposeProviderElementMixin$(NotifierT)[dart.mixinNew].call(this);
      ChangeNotifierProviderElement_AutoDisposeProviderElementMixin$36.__proto__.__.call(this, provider);
    }).prototype = ChangeNotifierProviderElement_AutoDisposeProviderElementMixin$36.prototype;
    dart.applyMixin(ChangeNotifierProviderElement_AutoDisposeProviderElementMixin$36, framework$.AutoDisposeProviderElementMixin$(NotifierT));
    class AutoDisposeChangeNotifierProviderElement extends ChangeNotifierProviderElement_AutoDisposeProviderElementMixin$36 {
      static ['_#_#tearOff'](NotifierT, provider) {
        return new (change_notifier_provider.AutoDisposeChangeNotifierProviderElement$(NotifierT)).__(provider);
      }
      get [_keepAliveLinks]() {
        return this[_keepAliveLinks];
      }
      set [_keepAliveLinks](value) {
        return this[_keepAliveLinks] = value;
      }
      get [_maintainState]() {
        return this[_maintainState];
      }
      set [_maintainState](value) {
        return this[_maintainState] = value;
      }
      get maintainState() {
        return super.maintainState;
      }
      set maintainState(value) {
        return super.maintainState = value;
      }
      keepAlive() {
        return super.keepAlive();
      }
      mayNeedDispose() {
        return super.mayNeedDispose();
      }
      runOnDispose() {
        return super.runOnDispose();
      }
    }
    (AutoDisposeChangeNotifierProviderElement.__ = function(provider) {
      AutoDisposeChangeNotifierProviderElement.__proto__.__.call(this, provider);
      ;
    }).prototype = AutoDisposeChangeNotifierProviderElement.prototype;
    dart.addTypeTests(AutoDisposeChangeNotifierProviderElement);
    AutoDisposeChangeNotifierProviderElement.prototype[_is_AutoDisposeChangeNotifierProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeChangeNotifierProviderElement);
    AutoDisposeChangeNotifierProviderElement[dart.implements] = () => [change_notifier_provider.AutoDisposeChangeNotifierProviderRef$(NotifierT)];
    dart.setMethodSignature(AutoDisposeChangeNotifierProviderElement, () => ({
      __proto__: dart.getMethods(AutoDisposeChangeNotifierProviderElement.__proto__),
      keepAlive: dart.fnType(framework$.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeChangeNotifierProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeChangeNotifierProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework$.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeChangeNotifierProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeChangeNotifierProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework$.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeChangeNotifierProviderElement, I[3]);
    return AutoDisposeChangeNotifierProviderElement;
  });
  change_notifier_provider.AutoDisposeChangeNotifierProviderElement = change_notifier_provider.AutoDisposeChangeNotifierProviderElement$();
  dart.addTypeTests(change_notifier_provider.AutoDisposeChangeNotifierProviderElement, _is_AutoDisposeChangeNotifierProviderElement_default);
  const _is_AutoDisposeChangeNotifierProviderFamily_default = Symbol('_is_AutoDisposeChangeNotifierProviderFamily_default');
  change_notifier_provider.AutoDisposeChangeNotifierProviderFamily$ = dart.generic((NotifierT, Arg) => {
    class AutoDisposeChangeNotifierProviderFamily extends framework$.AutoDisposeFamilyBase$(change_notifier_provider.AutoDisposeChangeNotifierProviderRef$(NotifierT), NotifierT, Arg, NotifierT, change_notifier_provider.AutoDisposeChangeNotifierProvider$(NotifierT)) {
      static ['_#new#tearOff'](NotifierT, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (change_notifier_provider.AutoDisposeChangeNotifierProviderFamily$(NotifierT, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AutoDisposeChangeNotifierProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AutoDisposeChangeNotifierProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[5] || CT.C5, NotifierT), name: name, dependencies: dependencies});
      ;
    }).prototype = AutoDisposeChangeNotifierProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeChangeNotifierProviderFamily);
    AutoDisposeChangeNotifierProviderFamily.prototype[_is_AutoDisposeChangeNotifierProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeChangeNotifierProviderFamily);
    dart.setLibraryUri(AutoDisposeChangeNotifierProviderFamily, I[3]);
    return AutoDisposeChangeNotifierProviderFamily;
  });
  change_notifier_provider.AutoDisposeChangeNotifierProviderFamily = change_notifier_provider.AutoDisposeChangeNotifierProviderFamily$();
  dart.addTypeTests(change_notifier_provider.AutoDisposeChangeNotifierProviderFamily, _is_AutoDisposeChangeNotifierProviderFamily_default);
  var __ChangeNotifierProvider_notifier = dart.privateName(change_notifier_provider, "_#ChangeNotifierProvider#notifier");
  const _is_ChangeNotifierProvider_default = Symbol('_is_ChangeNotifierProvider_default');
  change_notifier_provider.ChangeNotifierProvider$ = dart.generic(NotifierT => {
    var __t$ChangeNotifierProviderElementOfNotifierT = () => (__t$ChangeNotifierProviderElementOfNotifierT = dart.constFn(change_notifier_provider.ChangeNotifierProviderElement$(NotifierT)))();
    const _ChangeNotifierProviderBase_AlwaysAliveProviderBase$36 = class _ChangeNotifierProviderBase_AlwaysAliveProviderBase extends change_notifier_provider._ChangeNotifierProviderBase$(NotifierT) {};
    (_ChangeNotifierProviderBase_AlwaysAliveProviderBase$36.new = function(opts) {
      _ChangeNotifierProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, opts);
    }).prototype = _ChangeNotifierProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(_ChangeNotifierProviderBase_AlwaysAliveProviderBase$36, framework$.AlwaysAliveProviderBase$(NotifierT));
    class ChangeNotifierProvider extends _ChangeNotifierProviderBase_AlwaysAliveProviderBase$36 {
      static ['_#new#tearOff'](NotifierT, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (change_notifier_provider.ChangeNotifierProvider$(NotifierT)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create](ref) {
        let t0;
        t0 = ref;
        return this[_createFn$](t0);
      }
      createElement() {
        return new (__t$ChangeNotifierProviderElementOfNotifierT()).__(this);
      }
      get notifier() {
        let t1, t0;
        t0 = this[__ChangeNotifierProvider_notifier];
        return t0 == null ? (t1 = change_notifier_provider._notifier(NotifierT, this), this[__ChangeNotifierProvider_notifier] == null ? this[__ChangeNotifierProvider_notifier] = t1 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t0;
      }
    }
    (ChangeNotifierProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__ChangeNotifierProvider_notifier] = null;
      this[_createFn$] = _createFn;
      ChangeNotifierProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    dart.addTypeTests(ChangeNotifierProvider);
    ChangeNotifierProvider.prototype[_is_ChangeNotifierProvider_default] = true;
    dart.addTypeCaches(ChangeNotifierProvider);
    dart.setMethodSignature(ChangeNotifierProvider, () => ({
      __proto__: dart.getMethods(ChangeNotifierProvider.__proto__),
      [_create]: dart.fnType(NotifierT, [change_notifier_provider.ChangeNotifierProviderElement$(NotifierT)]),
      createElement: dart.fnType(change_notifier_provider.ChangeNotifierProviderElement$(NotifierT), [])
    }));
    dart.setGetterSignature(ChangeNotifierProvider, () => ({
      __proto__: dart.getGetters(ChangeNotifierProvider.__proto__),
      notifier: framework$.AlwaysAliveRefreshable$(NotifierT)
    }));
    dart.setLibraryUri(ChangeNotifierProvider, I[3]);
    dart.setFieldSignature(ChangeNotifierProvider, () => ({
      __proto__: dart.getFields(ChangeNotifierProvider.__proto__),
      [_createFn$]: dart.finalFieldType(dart.fnType(NotifierT, [change_notifier_provider.ChangeNotifierProviderRef$(NotifierT)])),
      [__ChangeNotifierProvider_notifier]: dart.fieldType(dart.nullable(framework$.AlwaysAliveRefreshable$(NotifierT)))
    }));
    dart.setStaticFieldSignature(ChangeNotifierProvider, () => ['autoDispose', 'family']);
    return ChangeNotifierProvider;
  });
  change_notifier_provider.ChangeNotifierProvider = change_notifier_provider.ChangeNotifierProvider$();
  dart.defineLazy(change_notifier_provider.ChangeNotifierProvider, {
    /*change_notifier_provider.ChangeNotifierProvider.autoDispose*/get autoDispose() {
      return C[1] || CT.C1;
    },
    /*change_notifier_provider.ChangeNotifierProvider.family*/get family() {
      return C[2] || CT.C2;
    }
  }, false);
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProvider, _is_ChangeNotifierProvider_default);
  const _is_ChangeNotifierProviderFamily_default = Symbol('_is_ChangeNotifierProviderFamily_default');
  change_notifier_provider.ChangeNotifierProviderFamily$ = dart.generic((NotifierT, Arg) => {
    class ChangeNotifierProviderFamily extends framework$.FamilyBase$(change_notifier_provider.ChangeNotifierProviderRef$(NotifierT), NotifierT, Arg, NotifierT, change_notifier_provider.ChangeNotifierProvider$(NotifierT)) {
      static ['_#new#tearOff'](NotifierT, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (change_notifier_provider.ChangeNotifierProviderFamily$(NotifierT, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (ChangeNotifierProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      ChangeNotifierProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[6] || CT.C6, NotifierT), name: name, dependencies: dependencies});
      ;
    }).prototype = ChangeNotifierProviderFamily.prototype;
    dart.addTypeTests(ChangeNotifierProviderFamily);
    ChangeNotifierProviderFamily.prototype[_is_ChangeNotifierProviderFamily_default] = true;
    dart.addTypeCaches(ChangeNotifierProviderFamily);
    dart.setLibraryUri(ChangeNotifierProviderFamily, I[3]);
    return ChangeNotifierProviderFamily;
  });
  change_notifier_provider.ChangeNotifierProviderFamily = change_notifier_provider.ChangeNotifierProviderFamily$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProviderFamily, _is_ChangeNotifierProviderFamily_default);
  change_notifier_provider._notifier = function _notifier(NotifierT, that) {
    return new (framework$.ProviderElementProxy$(NotifierT, NotifierT)).new(that, dart.fn(element => change_notifier_provider.ChangeNotifierProviderElement$(NotifierT).as(element)[_notifierNotifier], dart.fnType(listenable.ProxyElementValueNotifier$(NotifierT), [framework$.ProviderElementBase$(NotifierT)])));
  };
  dart.trackLibraries("packages/flutter_riverpod/src/consumer.dart", {
    "package:flutter_riverpod/src/consumer.dart": consumer,
    "package:flutter_riverpod/src/internals.dart": internals,
    "package:flutter_riverpod/src/builders.dart": builders,
    "package:flutter_riverpod/src/change_notifier_provider.dart": change_notifier_provider
  }, {
    "package:flutter_riverpod/src/change_notifier_provider.dart": ["change_notifier_provider/auto_dispose.dart", "change_notifier_provider/base.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["consumer.dart","builders.dart","change_notifier_provider.dart","change_notifier_provider/base.dart","change_notifier_provider/auto_dispose.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flutter_riverpod/src/consumer.dart.lib.js"}');
  // Exports:
  return {
    src__consumer: consumer,
    src__internals: internals,
    src__builders: builders,
    src__change_notifier_provider: change_notifier_provider
  };
}));

//# sourceMappingURL=consumer.dart.lib.js.map
