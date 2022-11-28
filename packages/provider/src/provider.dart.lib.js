define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/nested/nested.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/provider/src/reassemble_handler.dart', 'packages/flutter/src/widgets/layout_builder.dart', 'packages/collection/src/equality.dart'], (function load__packages__provider__src__provider_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__nested__nested$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__foundation__debug$46dart, packages__provider__src__reassemble_handler$46dart, packages__flutter__src__widgets__layout_builder$46dart, packages__collection__src__equality$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const sliver = packages__flutter__src__widgets__title$46dart.src__widgets__sliver;
  const nested = packages__nested__nested$46dart.nested;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const reassemble_handler = packages__provider__src__reassemble_handler$46dart.src__reassemble_handler;
  const layout_builder = packages__flutter__src__widgets__layout_builder$46dart.src__widgets__layout_builder;
  const equality = packages__collection__src__equality$46dart.src__equality;
  var provider = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    BuildContextToWidget: () => (T$.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    TTovoid$1: () => (T$.TTovoid$1 = dart.constFn(dart.gFnType(T => [dart.void, [T]], T => [T$.ObjectN()])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfPostEventCall: () => (T$.JSArrayOfPostEventCall = dart.constFn(_interceptors.JSArray$(provider.PostEventCall)))(),
    IdentityMapOfString$ProviderNode: () => (T$.IdentityMapOfString$ProviderNode = dart.constFn(_js_helper.IdentityMap$(core.String, provider.ProviderNode)))(),
    ElementTovoid: () => (T$.ElementTovoid = dart.constFn(dart.fnType(dart.void, [framework.Element])))(),
    ElementTobool: () => (T$.ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))(),
    LinkedHashMapOfString$ProviderNode: () => (T$.LinkedHashMapOfString$ProviderNode = dart.constFn(collection.LinkedHashMap$(core.String, provider.ProviderNode)))(),
    FutureOfNull: () => (T$.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    DefaultEqualityOfNever: () => (T$.DefaultEqualityOfNever = dart.constFn(equality.DefaultEquality$(dart.Never)))(),
    FnToR: () => (T$.FnToR = dart.constFn(dart.gFnType((T, R) => {
      var __t$TToR = () => (__t$TToR = dart.constFn(dart.fnType(R, [T])))();
      return [R, [__t$TToR()]];
    }, (T, R) => {
      var __t$TToR = () => (__t$TToR = dart.constFn(dart.fnType(R, [T])))();
      return [T$.ObjectN(), T$.ObjectN()];
    })))(),
    VoidToT: () => (T$.VoidToT = dart.constFn(dart.gFnType(T => [T, []], T => [T$.ObjectN()])))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    JSArrayOfintN: () => (T$.JSArrayOfintN = dart.constFn(_interceptors.JSArray$(T$.intN())))(),
    ListOfint: () => (T$.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Builder",
        [_Location_column]: 17,
        [_Location_line]: 134,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/provider.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MultiProvider",
        [_Location_column]: 3,
        [_Location_line]: 125,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/provider.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Provider",
        [_Location_column]: 3,
        [_Location_line]: 208,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/provider.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Provider",
        [_Location_column]: 3,
        [_Location_line]: 237,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/provider.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InheritedProvider",
        [_Location_column]: 3,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InheritedProvider",
        [_Location_column]: 3,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InheritedProvider",
        [_Location_column]: 3,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Builder",
        [_Location_column]: 13,
        [_Location_line]: 166,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InheritedProviderScope",
        [_Location_column]: 12,
        [_Location_line]: 161,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DeferredInheritedProvider",
        [_Location_column]: 3,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/deferred_inherited_provider.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DeferredInheritedProvider",
        [_Location_column]: 3,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/deferred_inherited_provider.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InheritedProviderScope",
        [_Location_column]: 9,
        [_Location_line]: 337,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart"
      });
    },
    get C12() {
      return C[12] = dart.constList([], core.String);
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: core.Object.prototype
      });
    },
    get C14() {
      return C[14] = dart.constMap(T$.ObjectN(), T$.ObjectN(), []);
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: T$.DefaultEqualityOfNever().prototype
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: equality.DeepCollectionEquality.prototype,
        [DeepCollectionEquality__unordered]: false,
        [DeepCollectionEquality__base]: C[16] || CT.C16
      });
    }
  }, false);
  var C = Array(17).fill(void 0);
  var I = [
    "package:provider/src/provider.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/provider.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/deferred_inherited_provider.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/devtool.dart"
  ];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  provider.MultiProvider = class MultiProvider extends nested.Nested {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      return new provider.MultiProvider.new({key: key, providers: providers, child: child, builder: builder, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
  };
  (provider.MultiProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    provider.MultiProvider.__proto__.new.call(this, {key: key, children: providers, child: builder != null ? new basic.Builder.new({builder: dart.fn(context => builder(context, child), T$.BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: C[0] || CT.C0}) : child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = provider.MultiProvider.prototype;
  dart.addTypeTests(provider.MultiProvider);
  dart.addTypeCaches(provider.MultiProvider);
  dart.setLibraryUri(provider.MultiProvider, I[0]);
  var builder$ = dart.privateName(provider, "InheritedProvider.builder");
  var _lazy = dart.privateName(provider, "_lazy");
  var _delegate = dart.privateName(provider, "_delegate");
  const _is_InheritedProvider_default = Symbol('_is_InheritedProvider_default');
  provider.InheritedProvider$ = dart.generic(T => {
    var __t$_CreateInheritedProviderOfT = () => (__t$_CreateInheritedProviderOfT = dart.constFn(provider._CreateInheritedProvider$(T)))();
    var __t$_ValueInheritedProviderOfT = () => (__t$_ValueInheritedProviderOfT = dart.constFn(provider._ValueInheritedProvider$(T)))();
    var __t$_InheritedProviderElementOfT = () => (__t$_InheritedProviderElementOfT = dart.constFn(provider._InheritedProviderElement$(T)))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$_InheritedProviderScopeOfTN = () => (__t$_InheritedProviderScopeOfTN = dart.constFn(provider._InheritedProviderScope$(__t$TN())))();
    class InheritedProvider extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider.InheritedProvider$(T)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: debugCheckInvalidValueType, startListening: startListening, dispose: dispose, builder: builder, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider.InheritedProvider$(T)).value({key: key, value: value, updateShouldNotify: updateShouldNotify, startListening: startListening, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
      }
      static ['_#_constructor#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let delegate = opts && 'delegate' in opts ? opts.delegate : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider.InheritedProvider$(T))._constructor({key: key, delegate: delegate, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this[_delegate].debugFillProperties(properties);
      }
      createElement() {
        return new (__t$_InheritedProviderElementOfT()).new(this);
      }
      buildWithChild(context, child) {
        if (!(this.builder != null || child != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " used outside of MultiProvider must specify a child", I[2], 158, 7, "builder != null || child != null");
        return new (__t$_InheritedProviderScopeOfTN()).new({owner: this, debugType: dart.str(this[$runtimeType]), child: this.builder != null ? new basic.Builder.new({builder: dart.fn(context => dart.nullCheck(this.builder)(context, child), T$.BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}) : dart.nullCheck(child), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
      }
    }
    (InheritedProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[_lazy] = lazy;
      this[_delegate] = new (__t$_CreateInheritedProviderOfT()).new({create: create, update: update, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: debugCheckInvalidValueType, startListening: startListening, dispose: dispose});
      InheritedProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = InheritedProvider.prototype;
    (InheritedProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[_lazy] = lazy;
      this[_delegate] = new (__t$_ValueInheritedProviderOfT()).new({value: value, updateShouldNotify: updateShouldNotify, startListening: startListening});
      InheritedProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = InheritedProvider.prototype;
    (InheritedProvider._constructor = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[_lazy] = lazy;
      this[_delegate] = delegate;
      InheritedProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = InheritedProvider.prototype;
    dart.addTypeTests(InheritedProvider);
    InheritedProvider.prototype[_is_InheritedProvider_default] = true;
    dart.addTypeCaches(InheritedProvider);
    dart.setMethodSignature(InheritedProvider, () => ({
      __proto__: dart.getMethods(InheritedProvider.__proto__),
      createElement: dart.fnType(provider._InheritedProviderElement$(T), []),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(InheritedProvider, I[0]);
    dart.setFieldSignature(InheritedProvider, () => ({
      __proto__: dart.getFields(InheritedProvider.__proto__),
      [_delegate]: dart.finalFieldType(provider._Delegate$(T)),
      [_lazy]: dart.finalFieldType(dart.nullable(core.bool)),
      builder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])))
    }));
    return InheritedProvider;
  });
  provider.InheritedProvider = provider.InheritedProvider$();
  dart.addTypeTests(provider.InheritedProvider, _is_InheritedProvider_default);
  const _is_Provider_default = Symbol('_is_Provider_default');
  provider.Provider$ = dart.generic(T => {
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class Provider extends provider.InheritedProvider$(T) {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider.Provider$(T)).new({key: key, create: create, dispose: dispose, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider.Provider$(T)).value({key: key, value: value, updateShouldNotify: updateShouldNotify, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
      }
      static of(T, context, opts) {
        let t0;
        let listen = opts && 'listen' in opts ? opts.listen : true;
        if (!(dart.nullCheck(context.owner).debugBuilding || listen === false || provider.debugIsInInheritedProviderUpdate)) dart.assertFailed("Tried to listen to a value exposed with provider, from outside of the widget tree.\n\nThis is likely caused by an event handler (like a button's onPressed) that called\nProvider.of without passing `listen: false`.\n\nTo fix, write:\nProvider.of<" + dart.str(dart.wrapType(T)) + ">(context, listen: false);\n\nIt is unsupported because may pointlessly rebuild the widget associated to the\nevent handler, when the widget tree doesn't care about the value.\n\nThe context used was: " + dart.str(context) + "\n", I[1], 274, 7, "context.owner!.debugBuilding ||\n          listen == false ||\n          debugIsInInheritedProviderUpdate");
        let inheritedElement = provider.Provider._inheritedElementOf(T, context);
        if (listen) {
          context.dependOnInheritedWidgetOfExactType(provider._InheritedProviderScope$(dart.nullable(T)));
        }
        let value = (t0 = inheritedElement, t0 == null ? null : t0.value);
        if (provider._isSoundMode) {
          if (!T.is(value)) {
            dart.throw(new provider.ProviderNullException.new(dart.wrapType(T), context.widget[$runtimeType]));
          }
          return value;
        }
        return T.as(value);
      }
      static _inheritedElementOf(T, context) {
        if (!(context !== null)) dart.assertFailed("Tried to call context.read/watch/select or similar on a `context` that is null.\n\nThis can happen if you used the context of a StatefulWidget and that\nStatefulWidget was disposed.\n", I[1], 319, 12, "context != null");
        if (!(provider._debugIsSelecting === false)) dart.assertFailed("Cannot call context.read/watch/select inside the callback of a context.select", I[1], 326, 7, "_debugIsSelecting == false");
        if (!!dart.wrapType(T)._equals(dart.wrapType(dart.dynamic))) dart.assertFailed("Tried to call Provider.of<dynamic>. This is likely a mistake and is therefore\nunsupported.\n\nIf you want to expose a variable that can be anything, consider changing\n`dynamic` to `Object` instead.\n", I[1], 330, 7, "T != dynamic");
        let inheritedElement = dart.nullable(provider._InheritedProviderScopeElement$(dart.nullable(T))).as(context.getElementForInheritedWidgetOfExactType(provider._InheritedProviderScope$(dart.nullable(T))));
        if (inheritedElement == null && !T.is(null)) {
          dart.throw(new provider.ProviderNotFoundException.new(dart.wrapType(T), context.widget[$runtimeType]));
        }
        return inheritedElement;
      }
    }
    (Provider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      Provider.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, dispose: dispose, debugCheckInvalidValueType: dart.fn(value => {
          let t0;
          t0 = provider.Provider.debugCheckInvalidValueType;
          return t0 == null ? null : t0(T, value);
        }, __t$TTovoid()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Provider.prototype;
    (Provider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!dart.fn(() => {
        let t0;
        t0 = provider.Provider.debugCheckInvalidValueType;
        t0 == null ? null : t0(T, value);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 243, 16, "() {\n          Provider.debugCheckInvalidValueType?.call<T>(value);\n          return true;\n        }()");
      Provider.__proto__.value.call(this, {key: key, builder: builder, value: value, updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.addTypeCaches(Provider);
    dart.setStaticMethodSignature(Provider, () => ['of', '_inheritedElementOf']);
    dart.setLibraryUri(Provider, I[0]);
    dart.setStaticFieldSignature(Provider, () => ['debugCheckInvalidValueType']);
    return Provider;
  });
  provider.Provider = provider.Provider$();
  dart.defineLazy(provider.Provider, {
    /*provider.Provider.debugCheckInvalidValueType*/get debugCheckInvalidValueType() {
      return dart.fn((T, value) => {
        if (!dart.fn(() => {
          if (change_notifier.Listenable.is(value) || async.Stream.is(value)) {
            dart.throw(assertions.FlutterError.new("Tried to use Provider with a subtype of Listenable/Stream (" + dart.str(dart.wrapType(T)) + ").\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen " + dart.str(dart.wrapType(T)) + " is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mechanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n"));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 385, 12, "() {\n      if (value is Listenable || value is Stream) {\n        throw FlutterError('''\nTried to use Provider with a subtype of Listenable/Stream ($T).\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen $T is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mechanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n''');\n      }\n      return true;\n    }()");
      }, T$.TTovoid$1());
    },
    set debugCheckInvalidValueType(_) {}
  }, false);
  dart.addTypeTests(provider.Provider, _is_Provider_default);
  var valueType$ = dart.privateName(provider, "ProviderNullException.valueType");
  var widgetType$ = dart.privateName(provider, "ProviderNullException.widgetType");
  provider.ProviderNullException = class ProviderNullException extends core.Object {
    get valueType() {
      return this[valueType$];
    }
    set valueType(value) {
      super.valueType = value;
    }
    get widgetType() {
      return this[widgetType$];
    }
    set widgetType(value) {
      super.widgetType = value;
    }
    static ['_#new#tearOff'](valueType, widgetType) {
      return new provider.ProviderNullException.new(valueType, widgetType);
    }
    toString() {
      ;
      return "Error: The widget " + dart.str(this.widgetType) + " tried to read Provider<" + dart.str(this.valueType) + "> but the matching\nprovider returned null.\n\nTo fix the error, consider changing Provider<" + dart.str(this.valueType) + "> to Provider<" + dart.str(this.valueType) + "?>.\n";
    }
  };
  (provider.ProviderNullException.new = function(valueType, widgetType) {
    this[valueType$] = valueType;
    this[widgetType$] = widgetType;
    ;
  }).prototype = provider.ProviderNullException.prototype;
  dart.addTypeTests(provider.ProviderNullException);
  dart.addTypeCaches(provider.ProviderNullException);
  provider.ProviderNullException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(provider.ProviderNullException, I[0]);
  dart.setFieldSignature(provider.ProviderNullException, () => ({
    __proto__: dart.getFields(provider.ProviderNullException.__proto__),
    valueType: dart.finalFieldType(core.Type),
    widgetType: dart.finalFieldType(core.Type)
  }));
  dart.defineExtensionMethods(provider.ProviderNullException, ['toString']);
  var valueType$0 = dart.privateName(provider, "ProviderNotFoundException.valueType");
  var widgetType$0 = dart.privateName(provider, "ProviderNotFoundException.widgetType");
  provider.ProviderNotFoundException = class ProviderNotFoundException extends core.Object {
    get valueType() {
      return this[valueType$0];
    }
    set valueType(value) {
      super.valueType = value;
    }
    get widgetType() {
      return this[widgetType$0];
    }
    set widgetType(value) {
      super.widgetType = value;
    }
    static ['_#new#tearOff'](valueType, widgetType) {
      return new provider.ProviderNotFoundException.new(valueType, widgetType);
    }
    toString() {
      ;
      return "Error: Could not find the correct Provider<" + dart.str(this.valueType) + "> above this " + dart.str(this.widgetType) + " Widget\n\nThis happens because you used a `BuildContext` that does not include the provider\nof your choice. There are a few common scenarios:\n\n- You added a new provider in your `main.dart` and performed a hot-reload.\n  To fix, perform a hot-restart.\n\n- The provider you are trying to read is in a different route.\n\n  Providers are \"scoped\". So if you insert of provider inside a route, then\n  other routes will not be able to access that provider.\n\n- You used a `BuildContext` that is an ancestor of the provider you are trying to read.\n\n  Make sure that " + dart.str(this.widgetType) + " is under your MultiProvider/Provider<" + dart.str(this.valueType) + ">.\n  This usually happens when you are creating a provider and trying to read it immediately.\n\n  For example, instead of:\n\n  ```\n  Widget build(BuildContext context) {\n    return Provider<Example>(\n      create: (_) => Example(),\n      // Will throw a ProviderNotFoundError, because `context` is associated\n      // to the widget that is the parent of `Provider<Example>`\n      child: Text(context.watch<Example>().toString()),\n    );\n  }\n  ```\n\n  consider using `builder` like so:\n\n  ```\n  Widget build(BuildContext context) {\n    return Provider<Example>(\n      create: (_) => Example(),\n      // we use `builder` to obtain a new `BuildContext` that has access to the provider\n      builder: (context, child) {\n        // No longer throws\n        return Text(context.watch<Example>().toString());\n      }\n    );\n  }\n  ```\n\nIf none of these solutions work, consider asking for help on StackOverflow:\nhttps://stackoverflow.com/questions/tagged/flutter\n";
    }
  };
  (provider.ProviderNotFoundException.new = function(valueType, widgetType) {
    this[valueType$0] = valueType;
    this[widgetType$0] = widgetType;
    ;
  }).prototype = provider.ProviderNotFoundException.prototype;
  dart.addTypeTests(provider.ProviderNotFoundException);
  dart.addTypeCaches(provider.ProviderNotFoundException);
  provider.ProviderNotFoundException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(provider.ProviderNotFoundException, I[0]);
  dart.setFieldSignature(provider.ProviderNotFoundException, () => ({
    __proto__: dart.getFields(provider.ProviderNotFoundException.__proto__),
    valueType: dart.finalFieldType(core.Type),
    widgetType: dart.finalFieldType(core.Type)
  }));
  dart.defineExtensionMethods(provider.ProviderNotFoundException, ['toString']);
  const _is_DeferredInheritedProvider_default = Symbol('_is_DeferredInheritedProvider_default');
  provider.DeferredInheritedProvider$ = dart.generic((T, R) => {
    var __t$_CreateDeferredInheritedProviderOfT$R = () => (__t$_CreateDeferredInheritedProviderOfT$R = dart.constFn(provider._CreateDeferredInheritedProvider$(T, R)))();
    var __t$_ValueDeferredInheritedProviderOfT$R = () => (__t$_ValueDeferredInheritedProviderOfT$R = dart.constFn(provider._ValueDeferredInheritedProvider$(T, R)))();
    class DeferredInheritedProvider extends provider.InheritedProvider$(R) {
      static ['_#new#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider.DeferredInheritedProvider$(T, R)).new({key: key, create: create, dispose: dispose, startListening: startListening, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
      }
      static ['_#value#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider.DeferredInheritedProvider$(T, R)).value({key: key, value: value, startListening: startListening, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
      }
    }
    (DeferredInheritedProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      DeferredInheritedProvider.__proto__._constructor.call(this, {key: key, child: child, lazy: lazy, builder: builder, delegate: new (__t$_CreateDeferredInheritedProviderOfT$R()).new({create: create, dispose: dispose, updateShouldNotify: updateShouldNotify, startListening: startListening}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = DeferredInheritedProvider.prototype;
    (DeferredInheritedProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      DeferredInheritedProvider.__proto__._constructor.call(this, {key: key, lazy: lazy, builder: builder, delegate: new (__t$_ValueDeferredInheritedProviderOfT$R()).new(value, updateShouldNotify, startListening), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = DeferredInheritedProvider.prototype;
    dart.addTypeTests(DeferredInheritedProvider);
    DeferredInheritedProvider.prototype[_is_DeferredInheritedProvider_default] = true;
    dart.addTypeCaches(DeferredInheritedProvider);
    dart.setLibraryUri(DeferredInheritedProvider, I[0]);
    return DeferredInheritedProvider;
  });
  provider.DeferredInheritedProvider = provider.DeferredInheritedProvider$();
  dart.addTypeTests(provider.DeferredInheritedProvider, _is_DeferredInheritedProvider_default);
  const _is__Delegate_default = Symbol('_is__Delegate_default');
  provider._Delegate$ = dart.generic(T => {
    class _Delegate extends core.Object {
      debugFillProperties(properties) {
      }
    }
    (_Delegate.new = function() {
      ;
    }).prototype = _Delegate.prototype;
    dart.addTypeTests(_Delegate);
    _Delegate.prototype[_is__Delegate_default] = true;
    dart.addTypeCaches(_Delegate);
    dart.setMethodSignature(_Delegate, () => ({
      __proto__: dart.getMethods(_Delegate.__proto__),
      debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder])
    }));
    dart.setLibraryUri(_Delegate, I[0]);
    return _Delegate;
  });
  provider._Delegate = provider._Delegate$();
  dart.addTypeTests(provider._Delegate, _is__Delegate_default);
  const _is__DeferredDelegate_default = Symbol('_is__DeferredDelegate_default');
  provider._DeferredDelegate$ = dart.generic((T, R) => {
    class _DeferredDelegate extends provider._Delegate$(R) {}
    (_DeferredDelegate.new = function(updateShouldNotify, startListening) {
      this.updateShouldNotify = updateShouldNotify;
      this.startListening = startListening;
      ;
    }).prototype = _DeferredDelegate.prototype;
    dart.addTypeTests(_DeferredDelegate);
    _DeferredDelegate.prototype[_is__DeferredDelegate_default] = true;
    dart.addTypeCaches(_DeferredDelegate);
    dart.setLibraryUri(_DeferredDelegate, I[0]);
    dart.setFieldSignature(_DeferredDelegate, () => ({
      __proto__: dart.getFields(_DeferredDelegate.__proto__),
      updateShouldNotify: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [R, R]))),
      startListening: dart.finalFieldType(dart.fnType(dart.fnType(dart.void, []), [provider.InheritedContext$(dart.nullable(R)), dart.fnType(dart.void, [R]), T, dart.nullable(R)]))
    }));
    return _DeferredDelegate;
  });
  provider._DeferredDelegate = provider._DeferredDelegate$();
  dart.addTypeTests(provider._DeferredDelegate, _is__DeferredDelegate_default);
  var _removeListener = dart.privateName(provider, "_removeListener");
  var _value = dart.privateName(provider, "_value");
  var _hasValue = dart.privateName(provider, "_hasValue");
  var _isNotifyDependentsEnabled = dart.privateName(provider, "_isNotifyDependentsEnabled");
  var element = dart.privateName(provider, "_DelegateState.element");
  var _debugSetInheritedLock = dart.privateName(provider, "_debugSetInheritedLock");
  const _is__DelegateState_default = Symbol('_is__DelegateState_default');
  provider._DelegateState$ = dart.generic((T, D) => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$_InheritedProviderScopeElementOfTN = () => (__t$_InheritedProviderScopeElementOfTN = dart.constFn(provider._InheritedProviderScopeElement$(__t$TN())))();
    var __t$_InheritedProviderScopeElementNOfTN = () => (__t$_InheritedProviderScopeElementNOfTN = dart.constFn(dart.nullable(__t$_InheritedProviderScopeElementOfTN())))();
    class _DelegateState extends core.Object {
      get element() {
        return this[element];
      }
      set element(value) {
        this[element] = __t$_InheritedProviderScopeElementNOfTN().as(value);
      }
      get delegate() {
        return D.as(dart.nullCheck(this.element).widget.owner[_delegate]);
      }
      debugSetInheritedLock(value) {
        return dart.nullCheck(this.element)[_debugSetInheritedLock](value);
      }
      willUpdateDelegate(newDelegate) {
        D.as(newDelegate);
        return false;
      }
      dispose() {
      }
      debugFillProperties(properties) {
      }
      build(opts) {
        let isBuildFromExternalSources = opts && 'isBuildFromExternalSources' in opts ? opts.isBuildFromExternalSources : null;
      }
    }
    (_DelegateState.new = function() {
      this[element] = null;
      ;
    }).prototype = _DelegateState.prototype;
    dart.addTypeTests(_DelegateState);
    _DelegateState.prototype[_is__DelegateState_default] = true;
    dart.addTypeCaches(_DelegateState);
    dart.setMethodSignature(_DelegateState, () => ({
      __proto__: dart.getMethods(_DelegateState.__proto__),
      debugSetInheritedLock: dart.fnType(core.bool, [core.bool]),
      willUpdateDelegate: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      dispose: dart.fnType(dart.void, []),
      debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder]),
      build: dart.fnType(dart.void, [], {}, {isBuildFromExternalSources: core.bool})
    }));
    dart.setGetterSignature(_DelegateState, () => ({
      __proto__: dart.getGetters(_DelegateState.__proto__),
      delegate: D
    }));
    dart.setLibraryUri(_DelegateState, I[0]);
    dart.setFieldSignature(_DelegateState, () => ({
      __proto__: dart.getFields(_DelegateState.__proto__),
      element: dart.fieldType(dart.nullable(provider._InheritedProviderScopeElement$(dart.nullable(T))))
    }));
    return _DelegateState;
  });
  provider._DelegateState = provider._DelegateState$();
  dart.addTypeTests(provider._DelegateState, _is__DelegateState_default);
  const _is__DeferredDelegateState_default = Symbol('_is__DeferredDelegateState_default');
  provider._DeferredDelegateState$ = dart.generic((T, R, W) => {
    var __t$InheritedContextOfRNAndFnAndT__ToFn = () => (__t$InheritedContextOfRNAndFnAndT__ToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [__t$InheritedContextOfRN(), __t$RTovoid(), T, __t$RN()])))();
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$InheritedContextOfRN = () => (__t$InheritedContextOfRN = dart.constFn(provider.InheritedContext$(__t$RN())))();
    var __t$RTovoid = () => (__t$RTovoid = dart.constFn(dart.fnType(dart.void, [R])))();
    var __t$RAndRTobool = () => (__t$RAndRTobool = dart.constFn(dart.fnType(core.bool, [R, R])))();
    var __t$RAndRToNbool = () => (__t$RAndRToNbool = dart.constFn(dart.nullable(__t$RAndRTobool())))();
    class _DeferredDelegateState extends provider._DelegateState$(R, W) {
      get value() {
        let t4, t3, t2, t1, t0;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = (t0 = this.delegate, t1 = dart.nullCheck(this.element), t2 = dart.bind(this, 'setState'), t3 = this.controller, t4 = this[_value], __t$InheritedContextOfRNAndFnAndT__ToFn().as(t0.startListening)(t1, t2, t3, t4)) : null;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = true;
        if (!dart.nullCheck(this.element).hasValue) dart.assertFailed("The callback \"startListening\" was called, but it left DeferredInhertitedProviderElement<" + dart.str(dart.wrapType(T)) + ", " + dart.str(dart.wrapType(R)) + ">\nin an uninitialized state.\n\nIt is necessary for \"startListening\" to call \"setState\" at least once the very\nfirst time \"value\" is requested.\n\nTo fix, consider:\n\nDeferredInheritedProvider(\n  ...,\n  startListening: (element, setState, controller, value) {\n    if (!element.hasValue) {\n      setState(myInitialValue); // TODO replace myInitialValue with your own\n    }\n    ...\n  }\n)\n    ", I[3], 109, 12, "element!.hasValue");
        if (!(this[_removeListener] != null)) dart.assertFailed(null, I[3], 128, 12, "_removeListener != null");
        return R.as(this[_value]);
      }
      dispose() {
        let t0;
        super.dispose();
        t0 = this[_removeListener];
        t0 == null ? null : t0();
      }
      get isLoaded() {
        return this[_removeListener] != null;
      }
      get hasValue() {
        return this[_hasValue];
      }
      setState(value) {
        R.as(value);
        if (this[_hasValue]) {
          let shouldNotify = __t$RAndRToNbool().as(this.delegate.updateShouldNotify) != null ? dart.nullCheck(__t$RAndRToNbool().as(this.delegate.updateShouldNotify))(R.as(this[_value]), value) : !dart.equals(this[_value], value);
          if (shouldNotify) {
            dart.nullCheck(this.element).markNeedsNotifyDependents();
          }
        }
        this[_hasValue] = true;
        this[_value] = value;
      }
    }
    (_DeferredDelegateState.new = function() {
      this[_removeListener] = null;
      this[_value] = null;
      this[_hasValue] = false;
      _DeferredDelegateState.__proto__.new.call(this);
      ;
    }).prototype = _DeferredDelegateState.prototype;
    dart.addTypeTests(_DeferredDelegateState);
    _DeferredDelegateState.prototype[_is__DeferredDelegateState_default] = true;
    dart.addTypeCaches(_DeferredDelegateState);
    dart.setMethodSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getMethods(_DeferredDelegateState.__proto__),
      setState: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getGetters(_DeferredDelegateState.__proto__),
      value: R,
      isLoaded: core.bool,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_DeferredDelegateState, I[0]);
    dart.setFieldSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getFields(_DeferredDelegateState.__proto__),
      [_removeListener]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
      [_value]: dart.fieldType(dart.nullable(R)),
      [_hasValue]: dart.fieldType(core.bool)
    }));
    return _DeferredDelegateState;
  });
  provider._DeferredDelegateState = provider._DeferredDelegateState$();
  dart.addTypeTests(provider._DeferredDelegateState, _is__DeferredDelegateState_default);
  const _is__CreateDeferredInheritedProvider_default = Symbol('_is__CreateDeferredInheritedProvider_default');
  provider._CreateDeferredInheritedProvider$ = dart.generic((T, R) => {
    var __t$_CreateDeferredInheritedProviderElementOfT$R = () => (__t$_CreateDeferredInheritedProviderElementOfT$R = dart.constFn(provider._CreateDeferredInheritedProviderElement$(T, R)))();
    class _CreateDeferredInheritedProvider extends provider._DeferredDelegate$(T, R) {
      static ['_#new#tearOff'](T, R, opts) {
        let create = opts && 'create' in opts ? opts.create : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        return new (provider._CreateDeferredInheritedProvider$(T, R)).new({create: create, dispose: dispose, updateShouldNotify: updateShouldNotify, startListening: startListening});
      }
      createState() {
        return new (__t$_CreateDeferredInheritedProviderElementOfT$R()).new();
      }
    }
    (_CreateDeferredInheritedProvider.new = function(opts) {
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      this.create = create;
      this.dispose = dispose;
      _CreateDeferredInheritedProvider.__proto__.new.call(this, updateShouldNotify, startListening);
      ;
    }).prototype = _CreateDeferredInheritedProvider.prototype;
    dart.addTypeTests(_CreateDeferredInheritedProvider);
    _CreateDeferredInheritedProvider.prototype[_is__CreateDeferredInheritedProvider_default] = true;
    dart.addTypeCaches(_CreateDeferredInheritedProvider);
    dart.setMethodSignature(_CreateDeferredInheritedProvider, () => ({
      __proto__: dart.getMethods(_CreateDeferredInheritedProvider.__proto__),
      createState: dart.fnType(provider._CreateDeferredInheritedProviderElement$(T, R), [])
    }));
    dart.setLibraryUri(_CreateDeferredInheritedProvider, I[0]);
    dart.setFieldSignature(_CreateDeferredInheritedProvider, () => ({
      __proto__: dart.getFields(_CreateDeferredInheritedProvider.__proto__),
      create: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      dispose: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [framework.BuildContext, T])))
    }));
    return _CreateDeferredInheritedProvider;
  });
  provider._CreateDeferredInheritedProvider = provider._CreateDeferredInheritedProvider$();
  dart.addTypeTests(provider._CreateDeferredInheritedProvider, _is__CreateDeferredInheritedProvider_default);
  var _didBuild = dart.privateName(provider, "_didBuild");
  var _controller = dart.privateName(provider, "_controller");
  const _is__CreateDeferredInheritedProviderElement_default = Symbol('_is__CreateDeferredInheritedProviderElement_default');
  provider._CreateDeferredInheritedProviderElement$ = dart.generic((T, R) => {
    var __t$BuildContextAndTTovoid = () => (__t$BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    var __t$BuildContextAndTToNvoid = () => (__t$BuildContextAndTToNvoid = dart.constFn(dart.nullable(__t$BuildContextAndTTovoid())))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var __t$DiagnosticsPropertyOfR = () => (__t$DiagnosticsPropertyOfR = dart.constFn(diagnostics.DiagnosticsProperty$(R)))();
    class _CreateDeferredInheritedProviderElement extends provider._DeferredDelegateState$(T, R, provider._CreateDeferredInheritedProvider$(T, R)) {
      get controller() {
        let t1, t0;
        if (!this[_didBuild]) {
          if (!this.debugSetInheritedLock(true)) dart.assertFailed(null, I[3], 186, 14, "debugSetInheritedLock(true)");
          let _debugPreviousIsInInheritedProviderCreate = null;
          let _debugPreviousIsInInheritedProviderUpdate = null;
          if (!dart.fn(() => {
            _debugPreviousIsInInheritedProviderCreate = provider.debugIsInInheritedProviderCreate;
            _debugPreviousIsInInheritedProviderUpdate = provider.debugIsInInheritedProviderUpdate;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 190, 14, "() {\n        _debugPreviousIsInInheritedProviderCreate =\n            debugIsInInheritedProviderCreate;\n        _debugPreviousIsInInheritedProviderUpdate =\n            debugIsInInheritedProviderUpdate;\n        return true;\n      }()");
          try {
            if (!dart.fn(() => {
              provider.debugIsInInheritedProviderCreate = true;
              provider.debugIsInInheritedProviderUpdate = false;
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 199, 16, "() {\n          debugIsInInheritedProviderCreate = true;\n          debugIsInInheritedProviderUpdate = false;\n          return true;\n        }()");
            this[_controller] = (t0 = this.delegate, t1 = dart.nullCheck(this.element), t0.create(t1));
          } finally {
            if (!dart.fn(() => {
              provider.debugIsInInheritedProviderCreate = dart.nullCheck(_debugPreviousIsInInheritedProviderCreate);
              provider.debugIsInInheritedProviderUpdate = dart.nullCheck(_debugPreviousIsInInheritedProviderUpdate);
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 206, 16, "() {\n          debugIsInInheritedProviderCreate =\n              _debugPreviousIsInInheritedProviderCreate!;\n          debugIsInInheritedProviderUpdate =\n              _debugPreviousIsInInheritedProviderUpdate!;\n          return true;\n        }()");
          }
          this[_didBuild] = true;
        }
        return T.as(this[_controller]);
      }
      dispose() {
        let t0;
        super.dispose();
        if (this[_didBuild]) {
          t0 = __t$BuildContextAndTToNvoid().as(this.delegate.dispose);
          t0 == null ? null : t0(dart.nullCheck(this.element), T.as(this[_controller]));
        }
      }
      debugFillProperties(properties) {
        let t0, t0$;
        super.debugFillProperties(properties);
        if (this.isLoaded) {
          t0 = properties;
          (() => {
            t0.add(new (__t$DiagnosticsPropertyOfT()).new("controller", this.controller));
            t0.add(new (__t$DiagnosticsPropertyOfR()).new("value", this.value));
            return t0;
          })();
        } else {
          t0$ = properties;
          (() => {
            t0$.add(new diagnostics.FlagProperty.new("controller", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
            t0$.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
            return t0$;
          })();
        }
      }
      static ['_#new#tearOff'](T, R) {
        return new (provider._CreateDeferredInheritedProviderElement$(T, R)).new();
      }
    }
    (_CreateDeferredInheritedProviderElement.new = function() {
      this[_didBuild] = false;
      this[_controller] = null;
      _CreateDeferredInheritedProviderElement.__proto__.new.call(this);
      ;
    }).prototype = _CreateDeferredInheritedProviderElement.prototype;
    dart.addTypeTests(_CreateDeferredInheritedProviderElement);
    _CreateDeferredInheritedProviderElement.prototype[_is__CreateDeferredInheritedProviderElement_default] = true;
    dart.addTypeCaches(_CreateDeferredInheritedProviderElement);
    dart.setGetterSignature(_CreateDeferredInheritedProviderElement, () => ({
      __proto__: dart.getGetters(_CreateDeferredInheritedProviderElement.__proto__),
      controller: T
    }));
    dart.setLibraryUri(_CreateDeferredInheritedProviderElement, I[0]);
    dart.setFieldSignature(_CreateDeferredInheritedProviderElement, () => ({
      __proto__: dart.getFields(_CreateDeferredInheritedProviderElement.__proto__),
      [_didBuild]: dart.fieldType(core.bool),
      [_controller]: dart.fieldType(dart.nullable(T))
    }));
    return _CreateDeferredInheritedProviderElement;
  });
  provider._CreateDeferredInheritedProviderElement = provider._CreateDeferredInheritedProviderElement$();
  dart.addTypeTests(provider._CreateDeferredInheritedProviderElement, _is__CreateDeferredInheritedProviderElement_default);
  const _is__ValueDeferredInheritedProvider_default = Symbol('_is__ValueDeferredInheritedProvider_default');
  provider._ValueDeferredInheritedProvider$ = dart.generic((T, R) => {
    var __t$_ValueDeferredInheritedProviderStateOfT$R = () => (__t$_ValueDeferredInheritedProviderStateOfT$R = dart.constFn(provider._ValueDeferredInheritedProviderState$(T, R)))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    class _ValueDeferredInheritedProvider extends provider._DeferredDelegate$(T, R) {
      static ['_#new#tearOff'](T, R, value, updateShouldNotify, startListening) {
        return new (provider._ValueDeferredInheritedProvider$(T, R)).new(value, updateShouldNotify, startListening);
      }
      createState() {
        return new (__t$_ValueDeferredInheritedProviderStateOfT$R()).new();
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (__t$DiagnosticsPropertyOfT()).new("controller", this.value));
      }
    }
    (_ValueDeferredInheritedProvider.new = function(value, updateShouldNotify, startListening) {
      this.value = value;
      _ValueDeferredInheritedProvider.__proto__.new.call(this, updateShouldNotify, startListening);
      ;
    }).prototype = _ValueDeferredInheritedProvider.prototype;
    dart.addTypeTests(_ValueDeferredInheritedProvider);
    _ValueDeferredInheritedProvider.prototype[_is__ValueDeferredInheritedProvider_default] = true;
    dart.addTypeCaches(_ValueDeferredInheritedProvider);
    dart.setMethodSignature(_ValueDeferredInheritedProvider, () => ({
      __proto__: dart.getMethods(_ValueDeferredInheritedProvider.__proto__),
      createState: dart.fnType(provider._ValueDeferredInheritedProviderState$(T, R), [])
    }));
    dart.setLibraryUri(_ValueDeferredInheritedProvider, I[0]);
    dart.setFieldSignature(_ValueDeferredInheritedProvider, () => ({
      __proto__: dart.getFields(_ValueDeferredInheritedProvider.__proto__),
      value: dart.finalFieldType(T)
    }));
    return _ValueDeferredInheritedProvider;
  });
  provider._ValueDeferredInheritedProvider = provider._ValueDeferredInheritedProvider$();
  dart.addTypeTests(provider._ValueDeferredInheritedProvider, _is__ValueDeferredInheritedProvider_default);
  const _is__ValueDeferredInheritedProviderState_default = Symbol('_is__ValueDeferredInheritedProviderState_default');
  provider._ValueDeferredInheritedProviderState$ = dart.generic((T, R) => {
    var __t$_ValueDeferredInheritedProviderOfT$R = () => (__t$_ValueDeferredInheritedProviderOfT$R = dart.constFn(provider._ValueDeferredInheritedProvider$(T, R)))();
    var __t$DiagnosticsPropertyOfR = () => (__t$DiagnosticsPropertyOfR = dart.constFn(diagnostics.DiagnosticsProperty$(R)))();
    class _ValueDeferredInheritedProviderState extends provider._DeferredDelegateState$(T, R, provider._ValueDeferredInheritedProvider$(T, R)) {
      willUpdateDelegate(oldDelegate) {
        __t$_ValueDeferredInheritedProviderOfT$R().as(oldDelegate);
        if (!dart.equals(this.delegate.value, oldDelegate.value)) {
          if (this[_removeListener] != null) {
            dart.nullCheck(this[_removeListener])();
            this[_removeListener] = null;
          }
          return true;
        }
        return false;
      }
      get controller() {
        return this.delegate.value;
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        if (this[_removeListener] != null) {
          properties.add(new (__t$DiagnosticsPropertyOfR()).new("value", this.value));
        } else {
          properties.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
        }
      }
      static ['_#new#tearOff'](T, R) {
        return new (provider._ValueDeferredInheritedProviderState$(T, R)).new();
      }
    }
    (_ValueDeferredInheritedProviderState.new = function() {
      _ValueDeferredInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ValueDeferredInheritedProviderState.prototype;
    dart.addTypeTests(_ValueDeferredInheritedProviderState);
    _ValueDeferredInheritedProviderState.prototype[_is__ValueDeferredInheritedProviderState_default] = true;
    dart.addTypeCaches(_ValueDeferredInheritedProviderState);
    dart.setGetterSignature(_ValueDeferredInheritedProviderState, () => ({
      __proto__: dart.getGetters(_ValueDeferredInheritedProviderState.__proto__),
      controller: T
    }));
    dart.setLibraryUri(_ValueDeferredInheritedProviderState, I[0]);
    return _ValueDeferredInheritedProviderState;
  });
  provider._ValueDeferredInheritedProviderState = provider._ValueDeferredInheritedProviderState$();
  dart.addTypeTests(provider._ValueDeferredInheritedProviderState, _is__ValueDeferredInheritedProviderState_default);
  var eventKind$ = dart.privateName(provider, "PostEventCall.eventKind");
  var event$ = dart.privateName(provider, "PostEventCall.event");
  provider.PostEventCall = class PostEventCall extends core.Object {
    get eventKind() {
      return this[eventKind$];
    }
    set eventKind(value) {
      super.eventKind = value;
    }
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
    static ['_#_#tearOff'](eventKind, event) {
      return new provider.PostEventCall.__(eventKind, event);
    }
  };
  (provider.PostEventCall.__ = function(eventKind, event) {
    this[eventKind$] = eventKind;
    this[event$] = event;
    ;
  }).prototype = provider.PostEventCall.prototype;
  dart.addTypeTests(provider.PostEventCall);
  dart.addTypeCaches(provider.PostEventCall);
  dart.setLibraryUri(provider.PostEventCall, I[0]);
  dart.setFieldSignature(provider.PostEventCall, () => ({
    __proto__: dart.getFields(provider.PostEventCall.__proto__),
    eventKind: dart.finalFieldType(core.String),
    event: dart.finalFieldType(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)))
  }));
  var logs = dart.privateName(provider, "PostEventSpy.logs");
  var _postEvent = dart.privateName(provider, "_postEvent");
  provider.PostEventSpy = class PostEventSpy extends core.Object {
    get logs() {
      return this[logs];
    }
    set logs(value) {
      super.logs = value;
    }
    static ['_#_#tearOff']() {
      return new provider.PostEventSpy.__();
    }
    dispose() {
      if (!dart.equals(provider._debugPostEventOverride, dart.bind(this, _postEvent))) dart.assertFailed("disposed a spy different from the current spy", I[4], 43, 7, "_debugPostEventOverride == _postEvent");
      provider._debugPostEventOverride = null;
    }
    [_postEvent](eventKind, event) {
      this.logs[$add](new provider.PostEventCall.__(eventKind, event));
    }
  };
  (provider.PostEventSpy.__ = function() {
    this[logs] = T$.JSArrayOfPostEventCall().of([]);
    ;
  }).prototype = provider.PostEventSpy.prototype;
  dart.addTypeTests(provider.PostEventSpy);
  dart.addTypeCaches(provider.PostEventSpy);
  dart.setMethodSignature(provider.PostEventSpy, () => ({
    __proto__: dart.getMethods(provider.PostEventSpy.__proto__),
    dispose: dart.fnType(dart.void, []),
    [_postEvent]: dart.fnType(dart.void, [core.String, core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))])
  }));
  dart.setLibraryUri(provider.PostEventSpy, I[0]);
  dart.setFieldSignature(provider.PostEventSpy, () => ({
    __proto__: dart.getFields(provider.PostEventSpy.__proto__),
    logs: dart.finalFieldType(core.List$(provider.PostEventCall))
  }));
  var id$ = dart.privateName(provider, "ProviderNode.id");
  var type$ = dart.privateName(provider, "ProviderNode.type");
  var childrenNodeIds$ = dart.privateName(provider, "ProviderNode.childrenNodeIds");
  var _element = dart.privateName(provider, "ProviderNode._element");
  var _element$ = dart.privateName(provider, "_element");
  var _delegateState = dart.privateName(provider, "_delegateState");
  provider.ProviderNode = class ProviderNode extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get childrenNodeIds() {
      return this[childrenNodeIds$];
    }
    set childrenNodeIds(value) {
      super.childrenNodeIds = value;
    }
    get [_element$]() {
      return this[_element];
    }
    set [_element$](value) {
      super[_element$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let childrenNodeIds = opts && 'childrenNodeIds' in opts ? opts.childrenNodeIds : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let element = opts && 'element' in opts ? opts.element : null;
      return new provider.ProviderNode.new({id: id, childrenNodeIds: childrenNodeIds, type: type, element: element});
    }
    get value() {
      return this[_element$][_delegateState].value;
    }
  };
  (provider.ProviderNode.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let childrenNodeIds = opts && 'childrenNodeIds' in opts ? opts.childrenNodeIds : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let element = opts && 'element' in opts ? opts.element : null;
    this[id$] = id;
    this[childrenNodeIds$] = childrenNodeIds;
    this[type$] = type;
    this[_element] = element;
    ;
  }).prototype = provider.ProviderNode.prototype;
  dart.addTypeTests(provider.ProviderNode);
  dart.addTypeCaches(provider.ProviderNode);
  dart.setGetterSignature(provider.ProviderNode, () => ({
    __proto__: dart.getGetters(provider.ProviderNode.__proto__),
    value: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(provider.ProviderNode, I[0]);
  dart.setFieldSignature(provider.ProviderNode, () => ({
    __proto__: dart.getFields(provider.ProviderNode.__proto__),
    id: dart.finalFieldType(core.String),
    type: dart.finalFieldType(core.String),
    childrenNodeIds: dart.finalFieldType(core.List$(core.String)),
    [_element$]: dart.finalFieldType(provider._InheritedProviderScopeElement)
  }));
  var _providerDetails = dart.privateName(provider, "_providerDetails");
  provider.ProviderBinding = class ProviderBinding extends core.Object {
    static ['_#_#tearOff']() {
      return new provider.ProviderBinding.__();
    }
    get providerDetails() {
      return this[_providerDetails];
    }
    set providerDetails(value) {
      provider.debugPostEvent("provider:provider_list_changed", new _js_helper.LinkedMap.new());
      this[_providerDetails] = value;
    }
    providerDidChange(providerId) {
      provider.debugPostEvent("provider:provider_changed", new _js_helper.LinkedMap.from(["id", providerId]));
    }
  };
  (provider.ProviderBinding.__ = function() {
    this[_providerDetails] = new (T$.IdentityMapOfString$ProviderNode()).new();
    ;
  }).prototype = provider.ProviderBinding.prototype;
  dart.addTypeTests(provider.ProviderBinding);
  dart.addTypeCaches(provider.ProviderBinding);
  dart.setMethodSignature(provider.ProviderBinding, () => ({
    __proto__: dart.getMethods(provider.ProviderBinding.__proto__),
    providerDidChange: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(provider.ProviderBinding, () => ({
    __proto__: dart.getGetters(provider.ProviderBinding.__proto__),
    providerDetails: core.Map$(core.String, provider.ProviderNode)
  }));
  dart.setSetterSignature(provider.ProviderBinding, () => ({
    __proto__: dart.getSetters(provider.ProviderBinding.__proto__),
    providerDetails: core.Map$(core.String, provider.ProviderNode)
  }));
  dart.setLibraryUri(provider.ProviderBinding, I[0]);
  dart.setFieldSignature(provider.ProviderBinding, () => ({
    __proto__: dart.getFields(provider.ProviderBinding.__proto__),
    [_providerDetails]: dart.fieldType(core.Map$(core.String, provider.ProviderNode))
  }));
  dart.setStaticFieldSignature(provider.ProviderBinding, () => ['debugInstance']);
  dart.defineLazy(provider.ProviderBinding, {
    /*provider.ProviderBinding.debugInstance*/get debugInstance() {
      return new provider.ProviderBinding.__();
    }
  }, false);
  const _is__InheritedProviderElement_default = Symbol('_is__InheritedProviderElement_default');
  provider._InheritedProviderElement$ = dart.generic(T => {
    class _InheritedProviderElement extends nested.SingleChildStatelessElement {
      static ['_#new#tearOff'](T, widget) {
        return new (provider._InheritedProviderElement$(T)).new(widget);
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this.visitChildren(dart.fn(e => e.debugFillProperties(properties), T$.ElementTovoid()));
      }
    }
    (_InheritedProviderElement.new = function(widget) {
      _InheritedProviderElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _InheritedProviderElement.prototype;
    dart.addTypeTests(_InheritedProviderElement);
    _InheritedProviderElement.prototype[_is__InheritedProviderElement_default] = true;
    dart.addTypeCaches(_InheritedProviderElement);
    dart.setLibraryUri(_InheritedProviderElement, I[0]);
    return _InheritedProviderElement;
  });
  provider._InheritedProviderElement = provider._InheritedProviderElement$();
  dart.addTypeTests(provider._InheritedProviderElement, _is__InheritedProviderElement_default);
  const _is_InheritedContext_default = Symbol('_is_InheritedContext_default');
  provider.InheritedContext$ = dart.generic(T => {
    class InheritedContext extends framework.BuildContext {}
    (InheritedContext.new = function() {
      ;
    }).prototype = InheritedContext.prototype;
    dart.addTypeTests(InheritedContext);
    InheritedContext.prototype[_is_InheritedContext_default] = true;
    dart.addTypeCaches(InheritedContext);
    dart.setLibraryUri(InheritedContext, I[0]);
    return InheritedContext;
  });
  provider.InheritedContext = provider.InheritedContext$();
  dart.addTypeTests(provider.InheritedContext, _is_InheritedContext_default);
  var owner$ = dart.privateName(provider, "_InheritedProviderScope.owner");
  var debugType$ = dart.privateName(provider, "_InheritedProviderScope.debugType");
  const _is__InheritedProviderScope_default = Symbol('_is__InheritedProviderScope_default');
  provider._InheritedProviderScope$ = dart.generic(T => {
    var __t$_InheritedProviderScopeElementOfT = () => (__t$_InheritedProviderScopeElementOfT = dart.constFn(provider._InheritedProviderScopeElement$(T)))();
    class _InheritedProviderScope extends framework.InheritedWidget {
      get owner() {
        return this[owner$];
      }
      set owner(value) {
        super.owner = value;
      }
      get debugType() {
        return this[debugType$];
      }
      set debugType(value) {
        super.debugType = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let owner = opts && 'owner' in opts ? opts.owner : null;
        let debugType = opts && 'debugType' in opts ? opts.debugType : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider._InheritedProviderScope$(T)).new({owner: owner, debugType: debugType, child: child, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
      }
      updateShouldNotify(oldWidget) {
        framework.InheritedWidget.as(oldWidget);
        return false;
      }
      createElement() {
        return new (__t$_InheritedProviderScopeElementOfT()).new(this);
      }
    }
    (_InheritedProviderScope.new = function(opts) {
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let debugType = opts && 'debugType' in opts ? opts.debugType : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[owner$] = owner;
      this[debugType$] = debugType;
      if (!T.is(null)) dart.assertFailed(null, I[2], 341, 16, "null is T");
      _InheritedProviderScope.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _InheritedProviderScope.prototype;
    dart.addTypeTests(_InheritedProviderScope);
    _InheritedProviderScope.prototype[_is__InheritedProviderScope_default] = true;
    dart.addTypeCaches(_InheritedProviderScope);
    dart.setMethodSignature(_InheritedProviderScope, () => ({
      __proto__: dart.getMethods(_InheritedProviderScope.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      createElement: dart.fnType(provider._InheritedProviderScopeElement$(T), [])
    }));
    dart.setLibraryUri(_InheritedProviderScope, I[0]);
    dart.setFieldSignature(_InheritedProviderScope, () => ({
      __proto__: dart.getFields(_InheritedProviderScope.__proto__),
      owner: dart.finalFieldType(provider.InheritedProvider$(T)),
      debugType: dart.finalFieldType(core.String)
    }));
    return _InheritedProviderScope;
  });
  provider._InheritedProviderScope = provider._InheritedProviderScope$();
  dart.addTypeTests(provider._InheritedProviderScope, _is__InheritedProviderScope_default);
  const _is__Dependency_default = Symbol('_is__Dependency_default');
  provider._Dependency$ = dart.generic(T => {
    var __t$TTobool = () => (__t$TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    var __t$JSArrayOfTTobool = () => (__t$JSArrayOfTTobool = dart.constFn(_interceptors.JSArray$(__t$TTobool())))();
    class _Dependency extends core.Object {
      static ['_#new#tearOff'](T) {
        return new (provider._Dependency$(T)).new();
      }
    }
    (_Dependency.new = function() {
      this.shouldClearSelectors = false;
      this.shouldClearMutationScheduled = false;
      this.selectors = __t$JSArrayOfTTobool().of([]);
      ;
    }).prototype = _Dependency.prototype;
    dart.addTypeTests(_Dependency);
    _Dependency.prototype[_is__Dependency_default] = true;
    dart.addTypeCaches(_Dependency);
    dart.setLibraryUri(_Dependency, I[0]);
    dart.setFieldSignature(_Dependency, () => ({
      __proto__: dart.getFields(_Dependency.__proto__),
      shouldClearSelectors: dart.fieldType(core.bool),
      shouldClearMutationScheduled: dart.fieldType(core.bool),
      selectors: dart.finalFieldType(core.List$(dart.fnType(core.bool, [T])))
    }));
    return _Dependency;
  });
  provider._Dependency = provider._Dependency$();
  dart.addTypeTests(provider._Dependency, _is__Dependency_default);
  var _shouldNotifyDependents = dart.privateName(provider, "_shouldNotifyDependents");
  var _debugInheritLocked = dart.privateName(provider, "_debugInheritLocked");
  var _updatedShouldNotify = dart.privateName(provider, "_updatedShouldNotify");
  var _isBuildFromExternalSources = dart.privateName(provider, "_isBuildFromExternalSources");
  var ___InheritedProviderScopeElement__delegateState = dart.privateName(provider, "_#_InheritedProviderScopeElement#_delegateState");
  var ___InheritedProviderScopeElement__debugId = dart.privateName(provider, "_#_InheritedProviderScopeElement#_debugId");
  var _debugId = dart.privateName(provider, "_debugId");
  const _is__InheritedProviderScopeElement_default = Symbol('_is__InheritedProviderScopeElement_default');
  provider._InheritedProviderScopeElement$ = dart.generic(T => {
    var __t$_InheritedProviderScopeOfT = () => (__t$_InheritedProviderScopeOfT = dart.constFn(provider._InheritedProviderScope$(T)))();
    var __t$_DependencyOfT = () => (__t$_DependencyOfT = dart.constFn(provider._Dependency$(T)))();
    var __t$TTobool = () => (__t$TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    var __t$ListOfTTobool = () => (__t$ListOfTTobool = dart.constFn(core.List$(__t$TTobool())))();
    class _InheritedProviderScopeElement extends framework.InheritedElement {
      static ['_#new#tearOff'](T, widget) {
        return new (provider._InheritedProviderScopeElement$(T)).new(widget);
      }
      get [_delegateState]() {
        let t1, t1$, t0;
        t0 = this[___InheritedProviderScopeElement__delegateState];
        return t0 == null ? (t1$ = (t1 = this.widget.owner[_delegate].createState(), (() => {
          t1.element = this;
          return t1;
        })()), this[___InheritedProviderScopeElement__delegateState] == null ? this[___InheritedProviderScopeElement__delegateState] = t1$ : dart.throw(new _internal.LateError.fieldADI("_delegateState"))) : t0;
      }
      get [_debugId]() {
        let t0;
        t0 = this[___InheritedProviderScopeElement__debugId];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_debugId")) : t0;
      }
      set [_debugId](library$32package$58provider$47src$47inherited_provider$46dart$58$58_debugId$35param) {
        this[___InheritedProviderScopeElement__debugId] = library$32package$58provider$47src$47inherited_provider$46dart$58$58_debugId$35param;
      }
      getElementForInheritedWidgetOfExactType(InheritedWidgetType) {
        let inheritedElement = null;
        this.visitAncestorElements(dart.fn(parent => {
          inheritedElement = parent.getElementForInheritedWidgetOfExactType(InheritedWidgetType);
          return false;
        }, T$.ElementTobool()));
        return inheritedElement;
      }
      mount(parent, newSlot) {
        let t0;
        {
          this[_debugId] = dart.str((t0 = provider._InheritedProviderScopeElement._nextProviderId, provider._InheritedProviderScopeElement._nextProviderId = t0 + 1, t0));
          provider.ProviderBinding.debugInstance.providerDetails = (() => {
            let t0 = T$.LinkedHashMapOfString$ProviderNode().of(provider.ProviderBinding.debugInstance.providerDetails);
            t0[$_set](this[_debugId], new provider.ProviderNode.new({id: this[_debugId], childrenNodeIds: C[12] || CT.C12, type: this.widget.debugType, element: this}));
            return t0;
          })();
        }
        super.mount(parent, newSlot);
      }
      get widget() {
        return __t$_InheritedProviderScopeOfT().as(super.widget);
      }
      reassemble() {
        super.reassemble();
        let value = this[_delegateState].hasValue ? this[_delegateState].value : null;
        if (reassemble_handler.ReassembleHandler.is(value)) {
          value.reassemble();
        }
      }
      updateDependencies(dependent, aspect) {
        let t1;
        let dependencies = this.getDependencies(dependent);
        if (dependencies != null && !__t$_DependencyOfT().is(dependencies)) {
          return;
        }
        if (__t$TTobool().is(aspect)) {
          let selectorDependency = __t$_DependencyOfT().as((t1 = dependencies, t1 == null ? new (__t$_DependencyOfT()).new() : t1));
          if (selectorDependency.shouldClearSelectors) {
            selectorDependency.shouldClearSelectors = false;
            __t$ListOfTTobool().as(selectorDependency.selectors)[$clear]();
          }
          if (selectorDependency.shouldClearMutationScheduled === false) {
            selectorDependency.shouldClearMutationScheduled = true;
            T$.FutureOfNull().microtask(dart.fn(() => {
              let t1;
              t1 = selectorDependency;
              (() => {
                t1.shouldClearMutationScheduled = false;
                t1.shouldClearSelectors = true;
                return t1;
              })();
            }, T$.VoidToNull()));
          }
          __t$ListOfTTobool().as(selectorDependency.selectors)[$add](aspect);
          this.setDependencies(dependent, selectorDependency);
        } else {
          this.setDependencies(dependent, C[13] || CT.C13);
        }
      }
      notifyDependent(oldWidget, dependent) {
        framework.InheritedWidget.as(oldWidget);
        let dependencies = this.getDependencies(dependent);
        {
          provider.ProviderBinding.debugInstance.providerDidChange(this[_debugId]);
        }
        let shouldNotify = false;
        if (dependencies != null) {
          if (__t$_DependencyOfT().is(dependencies)) {
            if (dependent.dirty) {
              return;
            }
            for (let updateShouldNotify of __t$ListOfTTobool().as(dependencies.selectors)) {
              try {
                if (!dart.fn(() => {
                  provider._debugIsSelecting = true;
                  return true;
                }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 480, 20, "() {\n              _debugIsSelecting = true;\n              return true;\n            }()");
                shouldNotify = updateShouldNotify(this.value);
              } finally {
                if (!dart.fn(() => {
                  provider._debugIsSelecting = false;
                  return true;
                }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 486, 20, "() {\n              _debugIsSelecting = false;\n              return true;\n            }()");
              }
              if (shouldNotify) {
                break;
              }
            }
          } else {
            shouldNotify = true;
          }
        }
        if (shouldNotify) {
          dependent.didChangeDependencies();
        }
      }
      update(newWidget) {
        __t$_InheritedProviderScopeOfT().as(newWidget);
        if (!dart.fn(() => {
          if (!this.widget.owner[_delegate][$runtimeType]._equals(newWidget.owner[_delegate][$runtimeType])) {
            dart.throw(new core.StateError.new("Rebuilt " + dart.str(this.widget) + " using a different constructor.\n      \nThis is likely a mistake and is unsupported.\nIf you're in this situation, consider passing a `key` unique to each individual constructor.\n"));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 507, 12, "() {\n      if (widget.owner._delegate.runtimeType !=\n          newWidget.owner._delegate.runtimeType) {\n        throw StateError('''\nRebuilt $widget using a different constructor.\n      \nThis is likely a mistake and is unsupported.\nIf you're in this situation, consider passing a `key` unique to each individual constructor.\n''');\n      }\n      return true;\n    }()");
        this[_isBuildFromExternalSources] = true;
        this[_updatedShouldNotify] = this[_delegateState].willUpdateDelegate(newWidget.owner[_delegate]);
        super.update(newWidget);
        this[_updatedShouldNotify] = false;
      }
      updated(oldWidget) {
        framework.InheritedWidget.as(oldWidget);
        super.updated(oldWidget);
        if (this[_updatedShouldNotify]) {
          this.notifyClients(oldWidget);
        }
      }
      didChangeDependencies() {
        this[_isBuildFromExternalSources] = true;
        super.didChangeDependencies();
      }
      build() {
        if (this.widget.owner[_lazy] === false) {
          this.value;
        }
        this[_delegateState].build({isBuildFromExternalSources: this[_isBuildFromExternalSources]});
        this[_isBuildFromExternalSources] = false;
        if (this[_shouldNotifyDependents]) {
          this[_shouldNotifyDependents] = false;
          this.notifyClients(this.widget);
        }
        return super.build();
      }
      unmount() {
        let t2;
        this[_delegateState].dispose();
        {
          provider.ProviderBinding.debugInstance.providerDetails = (t2 = (() => {
            let t1 = T$.LinkedHashMapOfString$ProviderNode().of(provider.ProviderBinding.debugInstance.providerDetails);
            return t1;
          })(), (() => {
            t2[$remove](this[_debugId]);
            return t2;
          })());
        }
        super.unmount();
      }
      get hasValue() {
        return this[_delegateState].hasValue;
      }
      markNeedsNotifyDependents() {
        if (!this[_isNotifyDependentsEnabled]) {
          return;
        }
        this.markNeedsBuild();
        this[_shouldNotifyDependents] = true;
      }
      [_debugSetInheritedLock](value) {
        if (!dart.fn(() => {
          this[_debugInheritLocked] = value;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 582, 12, "() {\n      _debugInheritLocked = value;\n      return true;\n    }()");
        return true;
      }
      get value() {
        return this[_delegateState].value;
      }
      dependOnInheritedElement(ancestor, opts) {
        let aspect = opts && 'aspect' in opts ? opts.aspect : null;
        if (!dart.fn(() => {
          if (this[_debugInheritLocked]) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to listen to an InheritedWidget " + "in a life-cycle that will never be called again."), new assertions.ErrorDescription.new("This error typically happens when calling Provider.of with `listen` to `true`,\nin a situation where listening to the provider doesn't make sense, such as:\n- initState of a StatefulWidget\n- the \"create\" callback of a provider\n\nThis is undesired because these life-cycles are called only once in the\nlifetime of a widget. As such, while `listen` is `true`, the widget has\nno mean to handle the update scenario.\n\nTo fix, consider:\n- passing `listen: false` to `Provider.of`\n- use a life-cycle that handles updates (like didChangeDependencies)\n- use a provider that handles updates (like ProxyProvider).\n")])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 597, 12, "() {\n      if (_debugInheritLocked) {\n        throw FlutterError.fromParts(\n          <DiagnosticsNode>[\n            ErrorSummary(\n              'Tried to listen to an InheritedWidget '\n              'in a life-cycle that will never be called again.',\n            ),\n            ErrorDescription('''\nThis error typically happens when calling Provider.of with `listen` to `true`,\nin a situation where listening to the provider doesn't make sense, such as:\n- initState of a StatefulWidget\n- the \"create\" callback of a provider\n\nThis is undesired because these life-cycles are called only once in the\nlifetime of a widget. As such, while `listen` is `true`, the widget has\nno mean to handle the update scenario.\n\nTo fix, consider:\n- passing `listen: false` to `Provider.of`\n- use a life-cycle that handles updates (like didChangeDependencies)\n- use a provider that handles updates (like ProxyProvider).\n'''),\n          ],\n        );\n      }\n      return true;\n    }()");
        return super.dependOnInheritedElement(ancestor, {aspect: aspect});
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this[_delegateState].debugFillProperties(properties);
      }
    }
    (_InheritedProviderScopeElement.new = function(widget) {
      this[_shouldNotifyDependents] = false;
      this[_debugInheritLocked] = false;
      this[_isNotifyDependentsEnabled] = true;
      this[_updatedShouldNotify] = false;
      this[_isBuildFromExternalSources] = false;
      this[___InheritedProviderScopeElement__delegateState] = null;
      this[___InheritedProviderScopeElement__debugId] = null;
      _InheritedProviderScopeElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _InheritedProviderScopeElement.prototype;
    dart.addTypeTests(_InheritedProviderScopeElement);
    _InheritedProviderScopeElement.prototype[_is__InheritedProviderScopeElement_default] = true;
    dart.addTypeCaches(_InheritedProviderScopeElement);
    _InheritedProviderScopeElement[dart.implements] = () => [provider.InheritedContext$(T)];
    dart.setMethodSignature(_InheritedProviderScopeElement, () => ({
      __proto__: dart.getMethods(_InheritedProviderScopeElement.__proto__),
      mount: dart.fnType(dart.void, [dart.nullable(framework.Element), dart.dynamic]),
      markNeedsNotifyDependents: dart.fnType(dart.void, []),
      [_debugSetInheritedLock]: dart.fnType(core.bool, [core.bool])
    }));
    dart.setGetterSignature(_InheritedProviderScopeElement, () => ({
      __proto__: dart.getGetters(_InheritedProviderScopeElement.__proto__),
      [_delegateState]: provider._DelegateState$(T, provider._Delegate$(T)),
      [_debugId]: core.String,
      widget: provider._InheritedProviderScope$(T),
      hasValue: core.bool,
      value: T
    }));
    dart.setSetterSignature(_InheritedProviderScopeElement, () => ({
      __proto__: dart.getSetters(_InheritedProviderScopeElement.__proto__),
      [_debugId]: core.String
    }));
    dart.setLibraryUri(_InheritedProviderScopeElement, I[0]);
    dart.setFieldSignature(_InheritedProviderScopeElement, () => ({
      __proto__: dart.getFields(_InheritedProviderScopeElement.__proto__),
      [_shouldNotifyDependents]: dart.fieldType(core.bool),
      [_debugInheritLocked]: dart.fieldType(core.bool),
      [_isNotifyDependentsEnabled]: dart.fieldType(core.bool),
      [_updatedShouldNotify]: dart.fieldType(core.bool),
      [_isBuildFromExternalSources]: dart.fieldType(core.bool),
      [___InheritedProviderScopeElement__delegateState]: dart.fieldType(dart.nullable(provider._DelegateState$(T, provider._Delegate$(T)))),
      [___InheritedProviderScopeElement__debugId]: dart.fieldType(dart.nullable(core.String))
    }));
    dart.setStaticFieldSignature(_InheritedProviderScopeElement, () => ['_nextProviderId']);
    return _InheritedProviderScopeElement;
  });
  provider._InheritedProviderScopeElement = provider._InheritedProviderScopeElement$();
  dart.defineLazy(provider._InheritedProviderScopeElement, {
    /*provider._InheritedProviderScopeElement._nextProviderId*/get _nextProviderId() {
      return 0;
    },
    set _nextProviderId(_) {}
  }, false);
  dart.addTypeTests(provider._InheritedProviderScopeElement, _is__InheritedProviderScopeElement_default);
  var _updateShouldNotify = dart.privateName(provider, "_updateShouldNotify");
  const _is__CreateInheritedProvider_default = Symbol('_is__CreateInheritedProvider_default');
  provider._CreateInheritedProvider$ = dart.generic(T => {
    var __t$_CreateInheritedProviderStateOfT = () => (__t$_CreateInheritedProviderStateOfT = dart.constFn(provider._CreateInheritedProviderState$(T)))();
    class _CreateInheritedProvider extends provider._Delegate$(T) {
      static ['_#new#tearOff'](T, opts) {
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        return new (provider._CreateInheritedProvider$(T)).new({create: create, update: update, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: debugCheckInvalidValueType, startListening: startListening, dispose: dispose});
      }
      createState() {
        return new (__t$_CreateInheritedProviderStateOfT()).new();
      }
    }
    (_CreateInheritedProvider.new = function(opts) {
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      this.create = create;
      this.update = update;
      this.debugCheckInvalidValueType = debugCheckInvalidValueType;
      this.startListening = startListening;
      this.dispose = dispose;
      if (!(create != null || update != null)) dart.assertFailed(null, I[2], 674, 16, "create != null || update != null");
      this[_updateShouldNotify] = updateShouldNotify;
      ;
    }).prototype = _CreateInheritedProvider.prototype;
    dart.addTypeTests(_CreateInheritedProvider);
    _CreateInheritedProvider.prototype[_is__CreateInheritedProvider_default] = true;
    dart.addTypeCaches(_CreateInheritedProvider);
    dart.setMethodSignature(_CreateInheritedProvider, () => ({
      __proto__: dart.getMethods(_CreateInheritedProvider.__proto__),
      createState: dart.fnType(provider._CreateInheritedProviderState$(T), [])
    }));
    dart.setLibraryUri(_CreateInheritedProvider, I[0]);
    dart.setFieldSignature(_CreateInheritedProvider, () => ({
      __proto__: dart.getFields(_CreateInheritedProvider.__proto__),
      create: dart.finalFieldType(dart.nullable(dart.fnType(T, [framework.BuildContext]))),
      update: dart.finalFieldType(dart.nullable(dart.fnType(T, [framework.BuildContext, dart.nullable(T)]))),
      [_updateShouldNotify]: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [T, T]))),
      debugCheckInvalidValueType: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [T]))),
      startListening: dart.finalFieldType(dart.nullable(dart.fnType(dart.fnType(dart.void, []), [provider.InheritedContext$(dart.nullable(T)), T]))),
      dispose: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [framework.BuildContext, T])))
    }));
    return _CreateInheritedProvider;
  });
  provider._CreateInheritedProvider = provider._CreateInheritedProvider$();
  dart.addTypeTests(provider._CreateInheritedProvider, _is__CreateInheritedProvider_default);
  var _didInitValue = dart.privateName(provider, "_didInitValue");
  var _previousWidget = dart.privateName(provider, "_previousWidget");
  var _initError = dart.privateName(provider, "_initError");
  const _is__CreateInheritedProviderState_default = Symbol('_is__CreateInheritedProviderState_default');
  provider._CreateInheritedProviderState$ = dart.generic(T => {
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    var __t$TToNvoid = () => (__t$TToNvoid = dart.constFn(dart.nullable(__t$TTovoid())))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$BuildContextAndTNToT = () => (__t$BuildContextAndTNToT = dart.constFn(dart.fnType(T, [framework.BuildContext, __t$TN()])))();
    var __t$BuildContextAndTNToNT = () => (__t$BuildContextAndTNToNT = dart.constFn(dart.nullable(__t$BuildContextAndTNToT())))();
    var __t$InheritedContextOfTN = () => (__t$InheritedContextOfTN = dart.constFn(provider.InheritedContext$(__t$TN())))();
    var __t$InheritedContextOfTNAndTToFn = () => (__t$InheritedContextOfTNAndTToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [__t$InheritedContextOfTN(), T])))();
    var __t$InheritedContextOfTNAndTToNFn = () => (__t$InheritedContextOfTNAndTToNFn = dart.constFn(dart.nullable(__t$InheritedContextOfTNAndTToFn())))();
    var __t$BuildContextAndTTovoid = () => (__t$BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    var __t$BuildContextAndTToNvoid = () => (__t$BuildContextAndTToNvoid = dart.constFn(dart.nullable(__t$BuildContextAndTTovoid())))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var __t$TAndTTobool = () => (__t$TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    var __t$TAndTToNbool = () => (__t$TAndTToNbool = dart.constFn(dart.nullable(__t$TAndTTobool())))();
    class _CreateInheritedProviderState extends provider._DelegateState$(T, provider._CreateInheritedProvider$(T)) {
      get value() {
        let t2, t3;
        if (this[_didInitValue] && this[_initError] != null) {
          dart.throw(new core.StateError.new("Tried to read a provider that threw during the creation of its value.\n" + "The exception occurred during the creation of type " + dart.str(dart.wrapType(T)) + ".\n\n" + dart.str((t2 = this[_initError], t2 == null ? null : dart.toString(t2)))));
        }
        let _debugPreviousIsInInheritedProviderCreate = null;
        let _debugPreviousIsInInheritedProviderUpdate = null;
        if (!dart.fn(() => {
          _debugPreviousIsInInheritedProviderCreate = provider.debugIsInInheritedProviderCreate;
          _debugPreviousIsInInheritedProviderUpdate = provider.debugIsInInheritedProviderUpdate;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 718, 12, "() {\n      _debugPreviousIsInInheritedProviderCreate =\n          debugIsInInheritedProviderCreate;\n      _debugPreviousIsInInheritedProviderUpdate =\n          debugIsInInheritedProviderUpdate;\n      return true;\n    }()");
        if (!this[_didInitValue]) {
          this[_didInitValue] = true;
          if (this.delegate.create != null) {
            if (!this.debugSetInheritedLock(true)) dart.assertFailed(null, I[2], 729, 16, "debugSetInheritedLock(true)");
            try {
              if (!dart.fn(() => {
                provider.debugIsInInheritedProviderCreate = true;
                provider.debugIsInInheritedProviderUpdate = false;
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 731, 18, "() {\n            debugIsInInheritedProviderCreate = true;\n            debugIsInInheritedProviderUpdate = false;\n            return true;\n          }()");
              this[_value] = dart.nullCheck(this.delegate.create)(dart.nullCheck(this.element));
            } catch (e$) {
              let e = dart.getThrown(e$);
              let stackTrace = dart.stackTrace(e$);
              if (core.Object.is(e)) {
                this[_initError] = new assertions.FlutterErrorDetails.new({library: "provider", exception: e, stack: stackTrace});
                dart.rethrow(e$);
              } else
                throw e$;
            } finally {
              if (!dart.fn(() => {
                provider.debugIsInInheritedProviderCreate = dart.nullCheck(_debugPreviousIsInInheritedProviderCreate);
                provider.debugIsInInheritedProviderUpdate = dart.nullCheck(_debugPreviousIsInInheritedProviderUpdate);
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 745, 18, "() {\n            debugIsInInheritedProviderCreate =\n                _debugPreviousIsInInheritedProviderCreate!;\n            debugIsInInheritedProviderUpdate =\n                _debugPreviousIsInInheritedProviderUpdate!;\n            return true;\n          }()");
            }
            if (!this.debugSetInheritedLock(false)) dart.assertFailed(null, I[2], 753, 16, "debugSetInheritedLock(false)");
            if (!dart.fn(() => {
              let t3;
              t3 = __t$TToNvoid().as(this.delegate.debugCheckInvalidValueType);
              t3 == null ? null : t3(T.as(this[_value]));
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 755, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value as T);\n          return true;\n        }()");
          }
          if (__t$BuildContextAndTNToNT().as(this.delegate.update) != null) {
            try {
              if (!dart.fn(() => {
                provider.debugIsInInheritedProviderCreate = false;
                provider.debugIsInInheritedProviderUpdate = true;
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 762, 18, "() {\n            debugIsInInheritedProviderCreate = false;\n            debugIsInInheritedProviderUpdate = true;\n            return true;\n          }()");
              this[_value] = dart.nullCheck(__t$BuildContextAndTNToNT().as(this.delegate.update))(dart.nullCheck(this.element), this[_value]);
            } finally {
              if (!dart.fn(() => {
                provider.debugIsInInheritedProviderCreate = dart.nullCheck(_debugPreviousIsInInheritedProviderCreate);
                provider.debugIsInInheritedProviderUpdate = dart.nullCheck(_debugPreviousIsInInheritedProviderUpdate);
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 769, 18, "() {\n            debugIsInInheritedProviderCreate =\n                _debugPreviousIsInInheritedProviderCreate!;\n            debugIsInInheritedProviderUpdate =\n                _debugPreviousIsInInheritedProviderUpdate!;\n            return true;\n          }()");
            }
            if (!dart.fn(() => {
              let t3;
              t3 = __t$TToNvoid().as(this.delegate.debugCheckInvalidValueType);
              t3 == null ? null : t3(T.as(this[_value]));
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 778, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value as T);\n          return true;\n        }()");
          }
        }
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = (t3 = __t$InheritedContextOfTNAndTToNFn().as(this.delegate.startListening), t3 == null ? null : t3(dart.nullCheck(this.element), T.as(this[_value]))) : null;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = true;
        if (!(__t$InheritedContextOfTNAndTToNFn().as(this.delegate.startListening) == null || this[_removeListener] != null)) dart.assertFailed(null, I[2], 788, 12, "delegate.startListening == null || _removeListener != null");
        return T.as(this[_value]);
      }
      dispose() {
        let t3, t3$;
        super.dispose();
        t3 = this[_removeListener];
        t3 == null ? null : t3();
        if (this[_didInitValue]) {
          t3$ = __t$BuildContextAndTToNvoid().as(this.delegate.dispose);
          t3$ == null ? null : t3$(dart.nullCheck(this.element), T.as(this[_value]));
        }
      }
      debugFillProperties(properties) {
        let t3;
        super.debugFillProperties(properties);
        if (this[_didInitValue]) {
          t3 = properties;
          (() => {
            t3.add(new (__t$DiagnosticsPropertyOfT()).new("value", this.value));
            t3.add(new diagnostics.FlagProperty.new("", {value: this[_removeListener] != null, defaultValue: false, ifTrue: "listening to value"}));
            return t3;
          })();
        } else {
          properties.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
        }
      }
      build(opts) {
        let t4, t3;
        let isBuildFromExternalSources = opts && 'isBuildFromExternalSources' in opts ? opts.isBuildFromExternalSources : null;
        let shouldNotify = false;
        if (isBuildFromExternalSources && this[_didInitValue] && __t$BuildContextAndTNToNT().as(this.delegate.update) != null) {
          let previousValue = this[_value];
          let _debugPreviousIsInInheritedProviderCreate = null;
          let _debugPreviousIsInInheritedProviderUpdate = null;
          if (!dart.fn(() => {
            _debugPreviousIsInInheritedProviderCreate = provider.debugIsInInheritedProviderCreate;
            _debugPreviousIsInInheritedProviderUpdate = provider.debugIsInInheritedProviderUpdate;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 839, 14, "() {\n        _debugPreviousIsInInheritedProviderCreate =\n            debugIsInInheritedProviderCreate;\n        _debugPreviousIsInInheritedProviderUpdate =\n            debugIsInInheritedProviderUpdate;\n        return true;\n      }()");
          try {
            if (!dart.fn(() => {
              provider.debugIsInInheritedProviderCreate = false;
              provider.debugIsInInheritedProviderUpdate = true;
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 847, 16, "() {\n          debugIsInInheritedProviderCreate = false;\n          debugIsInInheritedProviderUpdate = true;\n          return true;\n        }()");
            this[_value] = dart.nullCheck(__t$BuildContextAndTNToNT().as(this.delegate.update))(dart.nullCheck(this.element), T.as(this[_value]));
          } finally {
            if (!dart.fn(() => {
              provider.debugIsInInheritedProviderCreate = dart.nullCheck(_debugPreviousIsInInheritedProviderCreate);
              provider.debugIsInInheritedProviderUpdate = dart.nullCheck(_debugPreviousIsInInheritedProviderUpdate);
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 854, 16, "() {\n          debugIsInInheritedProviderCreate =\n              _debugPreviousIsInInheritedProviderCreate!;\n          debugIsInInheritedProviderUpdate =\n              _debugPreviousIsInInheritedProviderUpdate!;\n          return true;\n        }()");
          }
          if (__t$TAndTToNbool().as(this.delegate[_updateShouldNotify]) != null) {
            shouldNotify = dart.nullCheck(__t$TAndTToNbool().as(this.delegate[_updateShouldNotify]))(T.as(previousValue), T.as(this[_value]));
          } else {
            shouldNotify = !dart.equals(this[_value], previousValue);
          }
          if (shouldNotify) {
            if (!dart.fn(() => {
              let t3;
              t3 = __t$TToNvoid().as(this.delegate.debugCheckInvalidValueType);
              t3 == null ? null : t3(T.as(this[_value]));
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 873, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value as T);\n          return true;\n        }()");
            if (this[_removeListener] != null) {
              dart.nullCheck(this[_removeListener])();
              this[_removeListener] = null;
            }
            t3 = this[_previousWidget];
            t3 == null ? null : (t4 = __t$BuildContextAndTToNvoid().as(t3.dispose), t4 == null ? null : t4(dart.nullCheck(this.element), T.as(previousValue)));
          }
        }
        if (shouldNotify) {
          dart.nullCheck(this.element)[_shouldNotifyDependents] = true;
        }
        this[_previousWidget] = this.delegate;
        return super.build({isBuildFromExternalSources: isBuildFromExternalSources});
      }
      get hasValue() {
        return this[_didInitValue];
      }
      static ['_#new#tearOff'](T) {
        return new (provider._CreateInheritedProviderState$(T)).new();
      }
    }
    (_CreateInheritedProviderState.new = function() {
      this[_removeListener] = null;
      this[_didInitValue] = false;
      this[_value] = null;
      this[_previousWidget] = null;
      this[_initError] = null;
      _CreateInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _CreateInheritedProviderState.prototype;
    dart.addTypeTests(_CreateInheritedProviderState);
    _CreateInheritedProviderState.prototype[_is__CreateInheritedProviderState_default] = true;
    dart.addTypeCaches(_CreateInheritedProviderState);
    dart.setGetterSignature(_CreateInheritedProviderState, () => ({
      __proto__: dart.getGetters(_CreateInheritedProviderState.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_CreateInheritedProviderState, I[0]);
    dart.setFieldSignature(_CreateInheritedProviderState, () => ({
      __proto__: dart.getFields(_CreateInheritedProviderState.__proto__),
      [_removeListener]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
      [_didInitValue]: dart.fieldType(core.bool),
      [_value]: dart.fieldType(dart.nullable(T)),
      [_previousWidget]: dart.fieldType(dart.nullable(provider._CreateInheritedProvider$(T))),
      [_initError]: dart.fieldType(dart.nullable(assertions.FlutterErrorDetails))
    }));
    return _CreateInheritedProviderState;
  });
  provider._CreateInheritedProviderState = provider._CreateInheritedProviderState$();
  dart.addTypeTests(provider._CreateInheritedProviderState, _is__CreateInheritedProviderState_default);
  const _is__ValueInheritedProvider_default = Symbol('_is__ValueInheritedProvider_default');
  provider._ValueInheritedProvider$ = dart.generic(T => {
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var __t$_ValueInheritedProviderStateOfT = () => (__t$_ValueInheritedProviderStateOfT = dart.constFn(provider._ValueInheritedProviderState$(T)))();
    class _ValueInheritedProvider extends provider._Delegate$(T) {
      static ['_#new#tearOff'](T, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        return new (provider._ValueInheritedProvider$(T)).new({value: value, updateShouldNotify: updateShouldNotify, startListening: startListening});
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (__t$DiagnosticsPropertyOfT()).new("value", this.value));
      }
      createState() {
        return new (__t$_ValueInheritedProviderStateOfT()).new();
      }
    }
    (_ValueInheritedProvider.new = function(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      this.value = value;
      this.startListening = startListening;
      this[_updateShouldNotify] = updateShouldNotify;
      ;
    }).prototype = _ValueInheritedProvider.prototype;
    dart.addTypeTests(_ValueInheritedProvider);
    _ValueInheritedProvider.prototype[_is__ValueInheritedProvider_default] = true;
    dart.addTypeCaches(_ValueInheritedProvider);
    dart.setMethodSignature(_ValueInheritedProvider, () => ({
      __proto__: dart.getMethods(_ValueInheritedProvider.__proto__),
      createState: dart.fnType(provider._ValueInheritedProviderState$(T), [])
    }));
    dart.setLibraryUri(_ValueInheritedProvider, I[0]);
    dart.setFieldSignature(_ValueInheritedProvider, () => ({
      __proto__: dart.getFields(_ValueInheritedProvider.__proto__),
      value: dart.finalFieldType(T),
      [_updateShouldNotify]: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [T, T]))),
      startListening: dart.finalFieldType(dart.nullable(dart.fnType(dart.fnType(dart.void, []), [provider.InheritedContext$(dart.nullable(T)), T])))
    }));
    return _ValueInheritedProvider;
  });
  provider._ValueInheritedProvider = provider._ValueInheritedProvider$();
  dart.addTypeTests(provider._ValueInheritedProvider, _is__ValueInheritedProvider_default);
  const _is__ValueInheritedProviderState_default = Symbol('_is__ValueInheritedProviderState_default');
  provider._ValueInheritedProviderState$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$InheritedContextOfTN = () => (__t$InheritedContextOfTN = dart.constFn(provider.InheritedContext$(__t$TN())))();
    var __t$InheritedContextOfTNAndTToFn = () => (__t$InheritedContextOfTNAndTToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [__t$InheritedContextOfTN(), T])))();
    var __t$InheritedContextOfTNAndTToNFn = () => (__t$InheritedContextOfTNAndTToNFn = dart.constFn(dart.nullable(__t$InheritedContextOfTNAndTToFn())))();
    var __t$_ValueInheritedProviderOfT = () => (__t$_ValueInheritedProviderOfT = dart.constFn(provider._ValueInheritedProvider$(T)))();
    var __t$TAndTTobool = () => (__t$TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    var __t$TAndTToNbool = () => (__t$TAndTToNbool = dart.constFn(dart.nullable(__t$TAndTTobool())))();
    class _ValueInheritedProviderState extends provider._DelegateState$(T, provider._ValueInheritedProvider$(T)) {
      get value() {
        let t3;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = (t3 = __t$InheritedContextOfTNAndTToNFn().as(this.delegate.startListening), t3 == null ? null : t3(dart.nullCheck(this.element), this.delegate.value)) : null;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = true;
        if (!(__t$InheritedContextOfTNAndTToNFn().as(this.delegate.startListening) == null || this[_removeListener] != null)) dart.assertFailed(null, I[2], 928, 12, "delegate.startListening == null || _removeListener != null");
        return this.delegate.value;
      }
      willUpdateDelegate(newDelegate) {
        __t$_ValueInheritedProviderOfT().as(newDelegate);
        let shouldNotify = null;
        if (__t$TAndTToNbool().as(this.delegate[_updateShouldNotify]) != null) {
          shouldNotify = dart.nullCheck(__t$TAndTToNbool().as(this.delegate[_updateShouldNotify]))(this.delegate.value, newDelegate.value);
        } else {
          shouldNotify = !dart.equals(newDelegate.value, this.delegate.value);
        }
        if (shouldNotify && this[_removeListener] != null) {
          dart.nullCheck(this[_removeListener])();
          this[_removeListener] = null;
        }
        return shouldNotify;
      }
      dispose() {
        let t3;
        super.dispose();
        t3 = this[_removeListener];
        t3 == null ? null : t3();
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new diagnostics.FlagProperty.new("", {value: this[_removeListener] != null, defaultValue: false, ifTrue: "listening to value"}));
      }
      get hasValue() {
        return true;
      }
      static ['_#new#tearOff'](T) {
        return new (provider._ValueInheritedProviderState$(T)).new();
      }
    }
    (_ValueInheritedProviderState.new = function() {
      this[_removeListener] = null;
      _ValueInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ValueInheritedProviderState.prototype;
    dart.addTypeTests(_ValueInheritedProviderState);
    _ValueInheritedProviderState.prototype[_is__ValueInheritedProviderState_default] = true;
    dart.addTypeCaches(_ValueInheritedProviderState);
    dart.setGetterSignature(_ValueInheritedProviderState, () => ({
      __proto__: dart.getGetters(_ValueInheritedProviderState.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_ValueInheritedProviderState, I[0]);
    dart.setFieldSignature(_ValueInheritedProviderState, () => ({
      __proto__: dart.getFields(_ValueInheritedProviderState.__proto__),
      [_removeListener]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [])))
    }));
    return _ValueInheritedProviderState;
  });
  provider._ValueInheritedProviderState = provider._ValueInheritedProviderState$();
  dart.addTypeTests(provider._ValueInheritedProviderState, _is__ValueInheritedProviderState_default);
  var DeepCollectionEquality__unordered = dart.privateName(equality, "DeepCollectionEquality._unordered");
  var DeepCollectionEquality__base = dart.privateName(equality, "DeepCollectionEquality._base");
  provider.debugPostEvent = function debugPostEvent(eventKind, event = C[14] || CT.C14) {
    if (provider._debugPostEventOverride != null) {
      dart.nullCheck(provider._debugPostEventOverride)(eventKind, event);
    } else {
      developer.postEvent(eventKind, event);
    }
  };
  provider.spyPostEvent = function spyPostEvent() {
    if (!(provider._debugPostEventOverride == null)) dart.assertFailed("postEvent is already spied", I[4], 22, 10, "_debugPostEventOverride == null");
    let spy = new provider.PostEventSpy.__();
    provider._debugPostEventOverride = dart.bind(spy, _postEvent);
    return spy;
  };
  provider['SelectContext|select'] = function SelectContext$124select(T, R, $this, selector) {
    let t4;
    if (!!sliver.SliverWithKeepAliveWidget.is($this.widget)) dart.assertFailed("    Tried to use context.select inside a SliverList/SliderGridView.\n\n    This is likely a mistake, as instead of rebuilding only the item that cares\n    about the selected value, this would rebuild the entire list/grid.\n\n    To fix, add a `Builder` or extract the content of `itemBuilder` in a separate widget:\n\n    ```dart\n    ListView.builder(\n      itemBuilder: (context, index) {\n        return Builder(builder: (context) {\n          final todo = context.select((TodoList list) => list[index]);\n          return Text(todo.name);\n        });\n      },\n    );\n    ```\n    ", I[2], 247, 12, "widget is! SliverWithKeepAliveWidget");
    if (!(layout_builder.LayoutBuilder.is($this.widget) || $this.debugDoingBuild)) dart.assertFailed("Tried to use `context.select` outside of the `build` method of a widget.\n\nAny usage other than inside the `build` method of a widget are not supported.\n", I[2], 266, 12, "widget is LayoutBuilder || debugDoingBuild");
    let inheritedElement = provider.Provider._inheritedElementOf(T, $this);
    try {
      let value = (t4 = inheritedElement, t4 == null ? null : t4.value);
      if (!T.is(value)) {
        dart.throw(new provider.ProviderNullException.new(dart.wrapType(T), $this.widget[$runtimeType]));
      }
      if (!dart.fn(() => {
        provider._debugIsSelecting = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 279, 14, "() {\n        _debugIsSelecting = true;\n        return true;\n      }()");
      let selected = selector(value);
      if (inheritedElement != null) {
        $this.dependOnInheritedElement(inheritedElement, {aspect: dart.fn(newValue => {
            if (!T.is(newValue)) {
              dart.throw(new provider.ProviderNullException.new(dart.wrapType(T), $this.widget[$runtimeType]));
            }
            return !(C[15] || CT.C15).equals(selector(newValue), selected);
          }, dart.fnType(core.bool, [dart.nullable(T)]))});
      } else {
        $this.dependOnInheritedWidgetOfExactType(provider._InheritedProviderScope$(dart.nullable(T)));
      }
      return selected;
    } finally {
      if (!dart.fn(() => {
        provider._debugIsSelecting = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[2], 304, 14, "() {\n        _debugIsSelecting = false;\n        return true;\n      }()");
    }
  };
  provider['SelectContext|get#select'] = function SelectContext$124get$35select($this) {
    return dart.fn((T, R, selector) => provider['SelectContext|select'](T, R, $this, selector), T$.FnToR());
  };
  provider['ReadContext|read'] = function ReadContext$124read(T, $this) {
    return provider.Provider.of(T, $this, {listen: false});
  };
  provider['ReadContext|get#read'] = function ReadContext$124get$35read($this) {
    return dart.fn(T => provider['ReadContext|read'](T, $this), T$.VoidToT());
  };
  provider['WatchContext|watch'] = function WatchContext$124watch(T, $this) {
    return provider.Provider.of(T, $this);
  };
  provider['WatchContext|get#watch'] = function WatchContext$124get$35watch($this) {
    return dart.fn(T => provider['WatchContext|watch'](T, $this), T$.VoidToT());
  };
  dart.defineLazy(provider, {
    /*provider._isSoundMode*/get _isSoundMode() {
      return !T$.ListOfint().is(T$.JSArrayOfintN().of([]));
    },
    /*provider._debugPostEventOverride*/get _debugPostEventOverride() {
      return null;
    },
    set _debugPostEventOverride(_) {},
    /*provider._debugIsSelecting*/get _debugIsSelecting() {
      return false;
    },
    set _debugIsSelecting(_) {},
    /*provider.debugIsInInheritedProviderUpdate*/get debugIsInInheritedProviderUpdate() {
      return false;
    },
    set debugIsInInheritedProviderUpdate(_) {},
    /*provider.debugIsInInheritedProviderCreate*/get debugIsInInheritedProviderCreate() {
      return false;
    },
    set debugIsInInheritedProviderCreate(_) {}
  }, false);
  dart.trackLibraries("packages/provider/src/provider.dart", {
    "package:provider/src/provider.dart": provider
  }, {
    "package:provider/src/provider.dart": ["deferred_inherited_provider.dart", "devtool.dart", "inherited_provider.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["provider.dart","inherited_provider.dart","deferred_inherited_provider.dart","devtool.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/provider/src/provider.dart.lib.js"}');
  // Exports:
  return {
    src__provider: provider
  };
}));

//# sourceMappingURL=provider.dart.lib.js.map
