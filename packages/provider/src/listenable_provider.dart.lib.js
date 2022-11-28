define(['dart_sdk', 'packages/provider/src/provider.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/widgets/title.dart'], (function load__packages__provider__src__listenable_provider_dart(dart_sdk, packages__provider__src__provider$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__widgets__title$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  var listenable_provider = Object.create(dart.library);
  var change_notifier_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListenableN: () => (T$.ListenableN = dart.constFn(dart.nullable(change_notifier.Listenable)))(),
    InheritedContextAndListenableNToFn: () => (T$.InheritedContextAndListenableNToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [provider.InheritedContext, T$.ListenableN()])))(),
    ChangeNotifierN: () => (T$.ChangeNotifierN = dart.constFn(dart.nullable(change_notifier.ChangeNotifier)))(),
    BuildContextAndChangeNotifierNTovoid: () => (T$.BuildContextAndChangeNotifierNTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T$.ChangeNotifierN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(listenable_provider.ListenableProvider._startListening, T$.InheritedContextAndListenableNToFn());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProvider",
        [_Location_column]: 3,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProvider",
        [_Location_column]: 3,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProxyProvider0",
        [_Location_column]: 3,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProxyProvider",
        [_Location_column]: 3,
        [_Location_line]: 109,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProxyProvider2",
        [_Location_column]: 3,
        [_Location_line]: 136,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProxyProvider3",
        [_Location_column]: 3,
        [_Location_line]: 164,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProxyProvider4",
        [_Location_column]: 3,
        [_Location_line]: 193,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProxyProvider5",
        [_Location_column]: 3,
        [_Location_line]: 223,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListenableProxyProvider6",
        [_Location_column]: 3,
        [_Location_line]: 254,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart"
      });
    },
    get C10() {
      return C[10] = dart.fn(change_notifier_provider.ChangeNotifierProvider._dispose, T$.BuildContextAndChangeNotifierNTovoid());
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 3,
        [_Location_line]: 104,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 3,
        [_Location_line]: 120,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProxyProvider",
        [_Location_column]: 3,
        [_Location_line]: 214,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProxyProvider0",
        [_Location_column]: 3,
        [_Location_line]: 236,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProxyProvider2",
        [_Location_column]: 3,
        [_Location_line]: 258,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProxyProvider3",
        [_Location_column]: 3,
        [_Location_line]: 280,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProxyProvider4",
        [_Location_column]: 3,
        [_Location_line]: 302,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProxyProvider5",
        [_Location_column]: 3,
        [_Location_line]: 324,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProxyProvider6",
        [_Location_column]: 3,
        [_Location_line]: 347,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart"
      });
    }
  }, false);
  var C = Array(20).fill(void 0);
  var I = [
    "package:provider/src/listenable_provider.dart",
    "package:provider/src/change_notifier_provider.dart"
  ];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  const _is_ListenableProvider_default = Symbol('_is_ListenableProvider_default');
  listenable_provider.ListenableProvider$ = dart.generic(T => {
    class ListenableProvider extends provider.InheritedProvider$(T) {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProvider$(T)).new({key: key, create: create, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProvider$(T)).value({key: key, value: value, updateShouldNotify: updateShouldNotify, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
      }
      static _startListening(e, value) {
        let t0;
        t0 = value;
        t0 == null ? null : t0.addListener(dart.bind(e, 'markNeedsNotifyDependents'));
        return dart.fn(() => {
          let t0;
          t0 = value;
          return t0 == null ? null : t0.removeListener(dart.bind(e, 'markNeedsNotifyDependents'));
        }, T$.VoidTovoid());
      }
    }
    (ListenableProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProvider.__proto__.new.call(this, {key: key, startListening: C[0] || CT.C0, create: create, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProvider.prototype;
    (ListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProvider.__proto__.value.call(this, {key: key, builder: builder, value: value, updateShouldNotify: updateShouldNotify, startListening: C[0] || CT.C0, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProvider.prototype;
    dart.addTypeTests(ListenableProvider);
    ListenableProvider.prototype[_is_ListenableProvider_default] = true;
    dart.addTypeCaches(ListenableProvider);
    dart.setStaticMethodSignature(ListenableProvider, () => ['_startListening']);
    dart.setLibraryUri(ListenableProvider, I[0]);
    return ListenableProvider;
  });
  listenable_provider.ListenableProvider = listenable_provider.ListenableProvider$();
  dart.addTypeTests(listenable_provider.ListenableProvider, _is_ListenableProvider_default);
  const _is_ListenableProxyProvider0_default = Symbol('_is_ListenableProxyProvider0_default');
  listenable_provider.ListenableProxyProvider0$ = dart.generic(R => {
    class ListenableProxyProvider0 extends provider.InheritedProvider$(R) {
      static ['_#new#tearOff'](R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider0$(R)).new({key: key, create: create, update: update, dispose: dispose, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
      }
    }
    (ListenableProxyProvider0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider0.__proto__.new.call(this, {key: key, create: create, update: update, lazy: lazy, builder: builder, dispose: dispose, updateShouldNotify: updateShouldNotify, startListening: C[0] || CT.C0, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider0.prototype;
    dart.addTypeTests(ListenableProxyProvider0);
    ListenableProxyProvider0.prototype[_is_ListenableProxyProvider0_default] = true;
    dart.addTypeCaches(ListenableProxyProvider0);
    dart.setLibraryUri(ListenableProxyProvider0, I[0]);
    return ListenableProxyProvider0;
  });
  listenable_provider.ListenableProxyProvider0 = listenable_provider.ListenableProxyProvider0$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider0, _is_ListenableProxyProvider0_default);
  const _is_ListenableProxyProvider_default = Symbol('_is_ListenableProxyProvider_default');
  listenable_provider.ListenableProxyProvider$ = dart.generic((T, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider$(T, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
      }
    }
    (ListenableProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider.prototype;
    dart.addTypeTests(ListenableProxyProvider);
    ListenableProxyProvider.prototype[_is_ListenableProxyProvider_default] = true;
    dart.addTypeCaches(ListenableProxyProvider);
    dart.setLibraryUri(ListenableProxyProvider, I[0]);
    return ListenableProxyProvider;
  });
  listenable_provider.ListenableProxyProvider = listenable_provider.ListenableProxyProvider$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider, _is_ListenableProxyProvider_default);
  const _is_ListenableProxyProvider2_default = Symbol('_is_ListenableProxyProvider2_default');
  listenable_provider.ListenableProxyProvider2$ = dart.generic((T, T2, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider2 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider2$(T, T2, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
      }
    }
    (ListenableProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider2.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider2.prototype;
    dart.addTypeTests(ListenableProxyProvider2);
    ListenableProxyProvider2.prototype[_is_ListenableProxyProvider2_default] = true;
    dart.addTypeCaches(ListenableProxyProvider2);
    dart.setLibraryUri(ListenableProxyProvider2, I[0]);
    return ListenableProxyProvider2;
  });
  listenable_provider.ListenableProxyProvider2 = listenable_provider.ListenableProxyProvider2$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider2, _is_ListenableProxyProvider2_default);
  const _is_ListenableProxyProvider3_default = Symbol('_is_ListenableProxyProvider3_default');
  listenable_provider.ListenableProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider3 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider3$(T, T2, T3, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
      }
    }
    (ListenableProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider3.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider3.prototype;
    dart.addTypeTests(ListenableProxyProvider3);
    ListenableProxyProvider3.prototype[_is_ListenableProxyProvider3_default] = true;
    dart.addTypeCaches(ListenableProxyProvider3);
    dart.setLibraryUri(ListenableProxyProvider3, I[0]);
    return ListenableProxyProvider3;
  });
  listenable_provider.ListenableProxyProvider3 = listenable_provider.ListenableProxyProvider3$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider3, _is_ListenableProxyProvider3_default);
  const _is_ListenableProxyProvider4_default = Symbol('_is_ListenableProxyProvider4_default');
  listenable_provider.ListenableProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider4 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider4$(T, T2, T3, T4, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
      }
    }
    (ListenableProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider4.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider4.prototype;
    dart.addTypeTests(ListenableProxyProvider4);
    ListenableProxyProvider4.prototype[_is_ListenableProxyProvider4_default] = true;
    dart.addTypeCaches(ListenableProxyProvider4);
    dart.setLibraryUri(ListenableProxyProvider4, I[0]);
    return ListenableProxyProvider4;
  });
  listenable_provider.ListenableProxyProvider4 = listenable_provider.ListenableProxyProvider4$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider4, _is_ListenableProxyProvider4_default);
  const _is_ListenableProxyProvider5_default = Symbol('_is_ListenableProxyProvider5_default');
  listenable_provider.ListenableProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider5 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider5$(T, T2, T3, T4, T5, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
      }
    }
    (ListenableProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider5.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), provider.Provider.of(T5, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider5.prototype;
    dart.addTypeTests(ListenableProxyProvider5);
    ListenableProxyProvider5.prototype[_is_ListenableProxyProvider5_default] = true;
    dart.addTypeCaches(ListenableProxyProvider5);
    dart.setLibraryUri(ListenableProxyProvider5, I[0]);
    return ListenableProxyProvider5;
  });
  listenable_provider.ListenableProxyProvider5 = listenable_provider.ListenableProxyProvider5$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider5, _is_ListenableProxyProvider5_default);
  const _is_ListenableProxyProvider6_default = Symbol('_is_ListenableProxyProvider6_default');
  listenable_provider.ListenableProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider6 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, T6, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider6$(T, T2, T3, T4, T5, T6, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
      }
    }
    (ListenableProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider6.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), provider.Provider.of(T5, context), provider.Provider.of(T6, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider6.prototype;
    dart.addTypeTests(ListenableProxyProvider6);
    ListenableProxyProvider6.prototype[_is_ListenableProxyProvider6_default] = true;
    dart.addTypeCaches(ListenableProxyProvider6);
    dart.setLibraryUri(ListenableProxyProvider6, I[0]);
    return ListenableProxyProvider6;
  });
  listenable_provider.ListenableProxyProvider6 = listenable_provider.ListenableProxyProvider6$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider6, _is_ListenableProxyProvider6_default);
  const _is_ChangeNotifierProvider_default = Symbol('_is_ChangeNotifierProvider_default');
  change_notifier_provider.ChangeNotifierProvider$ = dart.generic(T => {
    class ChangeNotifierProvider extends listenable_provider.ListenableProvider$(T) {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProvider$(T)).new({key: key, create: create, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProvider$(T)).value({key: key, value: value, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
      }
      static _dispose(context, notifier) {
        let t0;
        t0 = notifier;
        t0 == null ? null : t0.dispose();
      }
    }
    (ChangeNotifierProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProvider.__proto__.new.call(this, {key: key, create: create, dispose: C[10] || CT.C10, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    (ChangeNotifierProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProvider.__proto__.value.call(this, {key: key, builder: builder, value: value, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    dart.addTypeTests(ChangeNotifierProvider);
    ChangeNotifierProvider.prototype[_is_ChangeNotifierProvider_default] = true;
    dart.addTypeCaches(ChangeNotifierProvider);
    dart.setStaticMethodSignature(ChangeNotifierProvider, () => ['_dispose']);
    dart.setLibraryUri(ChangeNotifierProvider, I[1]);
    return ChangeNotifierProvider;
  });
  change_notifier_provider.ChangeNotifierProvider = change_notifier_provider.ChangeNotifierProvider$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProvider, _is_ChangeNotifierProvider_default);
  const _is_ChangeNotifierProxyProvider_default = Symbol('_is_ChangeNotifierProxyProvider_default');
  change_notifier_provider.ChangeNotifierProxyProvider$ = dart.generic((T, R) => {
    class ChangeNotifierProxyProvider extends listenable_provider.ListenableProxyProvider$(T, R) {
      static ['_#new#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider$(T, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
      }
    }
    (ChangeNotifierProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[10] || CT.C10, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider);
    ChangeNotifierProxyProvider.prototype[_is_ChangeNotifierProxyProvider_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider);
    dart.setLibraryUri(ChangeNotifierProxyProvider, I[1]);
    return ChangeNotifierProxyProvider;
  });
  change_notifier_provider.ChangeNotifierProxyProvider = change_notifier_provider.ChangeNotifierProxyProvider$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider, _is_ChangeNotifierProxyProvider_default);
  const _is_ChangeNotifierProxyProvider0_default = Symbol('_is_ChangeNotifierProxyProvider0_default');
  change_notifier_provider.ChangeNotifierProxyProvider0$ = dart.generic(R => {
    class ChangeNotifierProxyProvider0 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider0$(R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
      }
    }
    (ChangeNotifierProxyProvider0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider0.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[10] || CT.C10, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider0.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider0);
    ChangeNotifierProxyProvider0.prototype[_is_ChangeNotifierProxyProvider0_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider0);
    dart.setLibraryUri(ChangeNotifierProxyProvider0, I[1]);
    return ChangeNotifierProxyProvider0;
  });
  change_notifier_provider.ChangeNotifierProxyProvider0 = change_notifier_provider.ChangeNotifierProxyProvider0$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider0, _is_ChangeNotifierProxyProvider0_default);
  const _is_ChangeNotifierProxyProvider2_default = Symbol('_is_ChangeNotifierProxyProvider2_default');
  change_notifier_provider.ChangeNotifierProxyProvider2$ = dart.generic((T, T2, R) => {
    class ChangeNotifierProxyProvider2 extends listenable_provider.ListenableProxyProvider2$(T, T2, R) {
      static ['_#new#tearOff'](T, T2, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider2$(T, T2, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
      }
    }
    (ChangeNotifierProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider2.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[10] || CT.C10, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider2.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider2);
    ChangeNotifierProxyProvider2.prototype[_is_ChangeNotifierProxyProvider2_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider2);
    dart.setLibraryUri(ChangeNotifierProxyProvider2, I[1]);
    return ChangeNotifierProxyProvider2;
  });
  change_notifier_provider.ChangeNotifierProxyProvider2 = change_notifier_provider.ChangeNotifierProxyProvider2$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider2, _is_ChangeNotifierProxyProvider2_default);
  const _is_ChangeNotifierProxyProvider3_default = Symbol('_is_ChangeNotifierProxyProvider3_default');
  change_notifier_provider.ChangeNotifierProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    class ChangeNotifierProxyProvider3 extends listenable_provider.ListenableProxyProvider3$(T, T2, T3, R) {
      static ['_#new#tearOff'](T, T2, T3, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider3$(T, T2, T3, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
      }
    }
    (ChangeNotifierProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider3.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[10] || CT.C10, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider3.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider3);
    ChangeNotifierProxyProvider3.prototype[_is_ChangeNotifierProxyProvider3_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider3);
    dart.setLibraryUri(ChangeNotifierProxyProvider3, I[1]);
    return ChangeNotifierProxyProvider3;
  });
  change_notifier_provider.ChangeNotifierProxyProvider3 = change_notifier_provider.ChangeNotifierProxyProvider3$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider3, _is_ChangeNotifierProxyProvider3_default);
  const _is_ChangeNotifierProxyProvider4_default = Symbol('_is_ChangeNotifierProxyProvider4_default');
  change_notifier_provider.ChangeNotifierProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    class ChangeNotifierProxyProvider4 extends listenable_provider.ListenableProxyProvider4$(T, T2, T3, T4, R) {
      static ['_#new#tearOff'](T, T2, T3, T4, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider4$(T, T2, T3, T4, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
      }
    }
    (ChangeNotifierProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider4.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[10] || CT.C10, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider4.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider4);
    ChangeNotifierProxyProvider4.prototype[_is_ChangeNotifierProxyProvider4_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider4);
    dart.setLibraryUri(ChangeNotifierProxyProvider4, I[1]);
    return ChangeNotifierProxyProvider4;
  });
  change_notifier_provider.ChangeNotifierProxyProvider4 = change_notifier_provider.ChangeNotifierProxyProvider4$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider4, _is_ChangeNotifierProxyProvider4_default);
  const _is_ChangeNotifierProxyProvider5_default = Symbol('_is_ChangeNotifierProxyProvider5_default');
  change_notifier_provider.ChangeNotifierProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    class ChangeNotifierProxyProvider5 extends listenable_provider.ListenableProxyProvider5$(T, T2, T3, T4, T5, R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider5$(T, T2, T3, T4, T5, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
      }
    }
    (ChangeNotifierProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider5.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[10] || CT.C10, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider5.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider5);
    ChangeNotifierProxyProvider5.prototype[_is_ChangeNotifierProxyProvider5_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider5);
    dart.setLibraryUri(ChangeNotifierProxyProvider5, I[1]);
    return ChangeNotifierProxyProvider5;
  });
  change_notifier_provider.ChangeNotifierProxyProvider5 = change_notifier_provider.ChangeNotifierProxyProvider5$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider5, _is_ChangeNotifierProxyProvider5_default);
  const _is_ChangeNotifierProxyProvider6_default = Symbol('_is_ChangeNotifierProxyProvider6_default');
  change_notifier_provider.ChangeNotifierProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    class ChangeNotifierProxyProvider6 extends listenable_provider.ListenableProxyProvider6$(T, T2, T3, T4, T5, T6, R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, T6, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider6$(T, T2, T3, T4, T5, T6, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
      }
    }
    (ChangeNotifierProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider6.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[10] || CT.C10, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider6.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider6);
    ChangeNotifierProxyProvider6.prototype[_is_ChangeNotifierProxyProvider6_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider6);
    dart.setLibraryUri(ChangeNotifierProxyProvider6, I[1]);
    return ChangeNotifierProxyProvider6;
  });
  change_notifier_provider.ChangeNotifierProxyProvider6 = change_notifier_provider.ChangeNotifierProxyProvider6$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider6, _is_ChangeNotifierProxyProvider6_default);
  dart.trackLibraries("packages/provider/src/listenable_provider.dart", {
    "package:provider/src/listenable_provider.dart": listenable_provider,
    "package:provider/src/change_notifier_provider.dart": change_notifier_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["listenable_provider.dart","change_notifier_provider.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/provider/src/listenable_provider.dart.lib.js"}');
  // Exports:
  return {
    src__listenable_provider: listenable_provider,
    src__change_notifier_provider: change_notifier_provider
  };
}));

//# sourceMappingURL=listenable_provider.dart.lib.js.map
