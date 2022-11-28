define(['dart_sdk', 'packages/riverpod/src/result.dart', 'packages/riverpod/src/stack_trace.dart', 'packages/riverpod/src/run_guarded.dart', 'packages/riverpod/src/state_controller.dart', 'packages/riverpod/src/synchronous_future.dart', 'packages/state_notifier/state_notifier.dart'], (function load__packages__riverpod__src__value_provider_dart(dart_sdk, packages__riverpod__src__result$46dart, packages__riverpod__src__stack_trace$46dart, packages__riverpod__src__run_guarded$46dart, packages__riverpod__src__state_controller$46dart, packages__riverpod__src__synchronous_future$46dart, packages__state_notifier__state_notifier$46dart) {
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
  const result = packages__riverpod__src__result$46dart.src__result;
  const stack_trace = packages__riverpod__src__stack_trace$46dart.src__stack_trace;
  const run_guarded = packages__riverpod__src__run_guarded$46dart.src__run_guarded;
  const state_controller = packages__riverpod__src__state_controller$46dart.src__state_controller;
  const synchronous_future = packages__riverpod__src__synchronous_future$46dart.src__synchronous_future;
  const state_notifier = packages__state_notifier__state_notifier$46dart.state_notifier;
  var value_provider = Object.create(dart.library);
  var state_provider = Object.create(dart.library);
  var notifier = Object.create(dart.library);
  var listenable = Object.create(dart.library);
  var stream_provider = Object.create(dart.library);
  var state_notifier_provider = Object.create(dart.library);
  var provider$ = Object.create(dart.library);
  var future_provider = Object.create(dart.library);
  var devtool = Object.create(dart.library);
  var framework = Object.create(dart.library);
  var common = Object.create(dart.library);
  var internals = Object.create(dart.library);
  var builders = Object.create(dart.library);
  var async_notifier = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $entries = dartx.entries;
  var $remove = dartx.remove;
  var $toList = dartx.toList;
  var $contains = dartx.contains;
  var $add = dartx.add;
  var $putIfAbsent = dartx.putIfAbsent;
  var $keys = dartx.keys;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $first = dartx.first;
  var $isEmpty = dartx.isEmpty;
  var $_set = dartx._set;
  var $addAll = dartx.addAll;
  var $join = dartx.join;
  var $values = dartx.values;
  var $_equals = dartx._equals;
  var $containsKey = dartx.containsKey;
  var $map = dartx.map;
  var $where = dartx.where;
  var $fold = dartx.fold;
  var $reversed = dartx.reversed;
  var $toUnsigned = dartx.toUnsigned;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    JSArrayOf_ProviderListener: () => (T$.JSArrayOf_ProviderListener = dart.constFn(_interceptors.JSArray$(framework._ProviderListener)))(),
    JSArrayOfProviderElementBase: () => (T$.JSArrayOfProviderElementBase = dart.constFn(_interceptors.JSArray$(framework.ProviderElementBase)))(),
    LinkedMapOfProviderElementBase$Object: () => (T$.LinkedMapOfProviderElementBase$Object = dart.constFn(_js_helper.LinkedMap$(framework.ProviderElementBase, core.Object)))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    ObjectAndStackTraceToNever: () => (T$.ObjectAndStackTraceToNever = dart.constFn(dart.fnType(dart.Never, [core.Object, core.StackTrace])))(),
    ProviderElementBaseTovoid: () => (T$.ProviderElementBaseTovoid = dart.constFn(dart.fnType(dart.void, [framework.ProviderElementBase])))(),
    ProxyElementValueNotifierTovoid: () => (T$.ProxyElementValueNotifierTovoid = dart.constFn(dart.fnType(dart.void, [listenable.ProxyElementValueNotifier])))(),
    ListQueueOfProviderElementBase: () => (T$.ListQueueOfProviderElementBase = dart.constFn(collection.ListQueue$(framework.ProviderElementBase)))(),
    ObjectAndStackTraceTovoid: () => (T$.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    VoidToObject: () => (T$.VoidToObject = dart.constFn(dart.fnType(core.Object, [])))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ObjectNAndObjectNTovoid: () => (T$.ObjectNAndObjectNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ObjectN(), T$.ObjectN()])))(),
    JSArrayOfObjectAndStackTraceTovoid: () => (T$.JSArrayOfObjectAndStackTraceTovoid = dart.constFn(_interceptors.JSArray$(T$.ObjectAndStackTraceTovoid())))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FnTovoid: () => (T$.FnTovoid = dart.constFn(dart.fnType(dart.void, [T$.VoidTovoid()])))(),
    JSArrayOfVoidTovoid: () => (T$.JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(T$.VoidTovoid())))(),
    ProviderBaseOfObjectN: () => (T$.ProviderBaseOfObjectN = dart.constFn(framework.ProviderBase$(T$.ObjectN())))(),
    ListOfProviderOrFamily: () => (T$.ListOfProviderOrFamily = dart.constFn(core.List$(framework.ProviderOrFamily)))(),
    ListNOfProviderOrFamily: () => (T$.ListNOfProviderOrFamily = dart.constFn(dart.nullable(T$.ListOfProviderOrFamily())))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    Fn__ToAutoDisposeStateProviderFamilyOfR$Arg: () => (T$.Fn__ToAutoDisposeStateProviderFamilyOfR$Arg = dart.constFn(dart.gFnType((R, Arg) => [state_provider.AutoDisposeStateProviderFamily$(R, Arg), [dart.fnType(R, [state_provider.AutoDisposeStateProviderRef$(R), Arg])], {dependencies: T$.ListNOfProviderOrFamily(), name: T$.StringN()}, {}], (R, Arg) => [T$.ObjectN(), T$.ObjectN()])))(),
    JSArrayOfKeepAliveLink: () => (T$.JSArrayOfKeepAliveLink = dart.constFn(_interceptors.JSArray$(framework.KeepAliveLink)))(),
    VoidToKeepAliveLink: () => (T$.VoidToKeepAliveLink = dart.constFn(dart.fnType(framework.KeepAliveLink, [])))(),
    KeepAliveLinkTodynamic: () => (T$.KeepAliveLinkTodynamic = dart.constFn(dart.fnType(dart.dynamic, [framework.KeepAliveLink])))(),
    VoidToString: () => (T$.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    VoidToNString: () => (T$.VoidToNString = dart.constFn(dart.nullable(T$.VoidToString())))(),
    FamilyN: () => (T$.FamilyN = dart.constFn(dart.nullable(framework.Family)))(),
    Fn__ToAutoDisposeStateProviderOfT: () => (T$.Fn__ToAutoDisposeStateProviderOfT = dart.constFn(dart.gFnType(T => [state_provider.AutoDisposeStateProvider$(T), [dart.fnType(T, [state_provider.AutoDisposeStateProviderRef$(T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], T => [T$.ObjectN()])))(),
    Fn__ToStateProviderOfT: () => (T$.Fn__ToStateProviderOfT = dart.constFn(dart.gFnType(T => [state_provider.StateProvider$(T), [dart.fnType(T, [state_provider.StateProviderRef$(T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], T => [T$.ObjectN()])))(),
    Fn__ToAutoDisposeNotifierProviderFamilyOfNotifierT$T$Arg: () => (T$.Fn__ToAutoDisposeNotifierProviderFamilyOfNotifierT$T$Arg = dart.constFn(dart.gFnType((NotifierT, T, Arg) => [notifier.AutoDisposeNotifierProviderFamily$(NotifierT, T, Arg), [dart.fnType(NotifierT, [])], {dependencies: T$.ListNOfProviderOrFamily(), name: T$.StringN()}, {}], (NotifierT, T, Arg) => [notifier.AutoDisposeFamilyNotifier$(T, Arg), T$.ObjectN(), T$.ObjectN()])))(),
    Fn__ToAutoDisposeFamilyNotifierProviderImplOfNotifierT$T$Arg: () => (T$.Fn__ToAutoDisposeFamilyNotifierProviderImplOfNotifierT$T$Arg = dart.constFn(dart.gFnType((NotifierT, T, Arg) => [notifier.AutoDisposeFamilyNotifierProviderImpl$(NotifierT, T, Arg), [dart.fnType(NotifierT, [])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], (NotifierT, T, Arg) => [notifier.NotifierBase$(T), T$.ObjectN(), T$.ObjectN()])))(),
    Fn__ToFamilyNotifierProviderImplOfNotifierT$T$Arg: () => (T$.Fn__ToFamilyNotifierProviderImplOfNotifierT$T$Arg = dart.constFn(dart.gFnType((NotifierT, T, Arg) => [notifier.FamilyNotifierProviderImpl$(NotifierT, T, Arg), [dart.fnType(NotifierT, [])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], (NotifierT, T, Arg) => [notifier.NotifierBase$(T), T$.ObjectN(), T$.ObjectN()])))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    Fn__ToAutoDisposeStreamProviderFamilyOfR$Arg: () => (T$.Fn__ToAutoDisposeStreamProviderFamilyOfR$Arg = dart.constFn(dart.gFnType((R, Arg) => [stream_provider.AutoDisposeStreamProviderFamily$(R, Arg), [dart.fnType(async.Stream$(R), [stream_provider.AutoDisposeStreamProviderRef$(R), Arg])], {dependencies: T$.ListNOfProviderOrFamily(), name: T$.StringN()}, {}], (R, Arg) => [T$.ObjectN(), T$.ObjectN()])))(),
    ObjectAndStackTraceToNull: () => (T$.ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))(),
    Fn__ToAutoDisposeStreamProviderOfT: () => (T$.Fn__ToAutoDisposeStreamProviderOfT = dart.constFn(dart.gFnType(T => [stream_provider.AutoDisposeStreamProvider$(T), [dart.fnType(async.Stream$(T), [stream_provider.AutoDisposeStreamProviderRef$(T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], T => [T$.ObjectN()])))(),
    Fn__ToStreamProviderOfT: () => (T$.Fn__ToStreamProviderOfT = dart.constFn(dart.gFnType(T => [stream_provider.StreamProvider$(T), [dart.fnType(async.Stream$(T), [stream_provider.StreamProviderRef$(T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], T => [T$.ObjectN()])))(),
    Fn__ToAutoDisposeStateNotifierProviderFamilyOfNotifierT$T$Arg: () => (T$.Fn__ToAutoDisposeStateNotifierProviderFamilyOfNotifierT$T$Arg = dart.constFn(dart.gFnType((NotifierT, T, Arg) => [state_notifier_provider.AutoDisposeStateNotifierProviderFamily$(NotifierT, T, Arg), [dart.fnType(NotifierT, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(NotifierT, T), Arg])], {dependencies: T$.ListNOfProviderOrFamily(), name: T$.StringN()}, {}], (NotifierT, T, Arg) => [state_notifier.StateNotifier$(T), T$.ObjectN(), T$.ObjectN()])))(),
    Fn__ToAutoDisposeStateNotifierProviderOfNotifierT$T: () => (T$.Fn__ToAutoDisposeStateNotifierProviderOfNotifierT$T = dart.constFn(dart.gFnType((NotifierT, T) => [state_notifier_provider.AutoDisposeStateNotifierProvider$(NotifierT, T), [dart.fnType(NotifierT, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(NotifierT, T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], (NotifierT, T) => [state_notifier.StateNotifier$(T), T$.ObjectN()])))(),
    Fn__ToStateNotifierProviderOfNotifierT$T: () => (T$.Fn__ToStateNotifierProviderOfNotifierT$T = dart.constFn(dart.gFnType((NotifierT, T) => [state_notifier_provider.StateNotifierProvider$(NotifierT, T), [dart.fnType(NotifierT, [state_notifier_provider.StateNotifierProviderRef$(NotifierT, T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], (NotifierT, T) => [state_notifier.StateNotifier$(T), T$.ObjectN()])))(),
    Fn__ToAutoDisposeProviderFamilyOfR$Arg: () => (T$.Fn__ToAutoDisposeProviderFamilyOfR$Arg = dart.constFn(dart.gFnType((R, Arg) => [provider$.AutoDisposeProviderFamily$(R, Arg), [dart.fnType(R, [provider$.AutoDisposeProviderRef$(R), Arg])], {dependencies: T$.ListNOfProviderOrFamily(), name: T$.StringN()}, {}], (R, Arg) => [T$.ObjectN(), T$.ObjectN()])))(),
    Fn__ToAutoDisposeProviderOfT: () => (T$.Fn__ToAutoDisposeProviderOfT = dart.constFn(dart.gFnType(T => [provider$.AutoDisposeProvider$(T), [dart.fnType(T, [provider$.AutoDisposeProviderRef$(T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], T => [T$.ObjectN()])))(),
    Fn__ToProviderOfState: () => (T$.Fn__ToProviderOfState = dart.constFn(dart.gFnType(State => [provider$.Provider$(State), [dart.fnType(State, [provider$.ProviderRef$(State)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], State => [T$.ObjectN()])))(),
    Fn__ToAutoDisposeFutureProviderFamilyOfR$Arg: () => (T$.Fn__ToAutoDisposeFutureProviderFamilyOfR$Arg = dart.constFn(dart.gFnType((R, Arg) => [future_provider.AutoDisposeFutureProviderFamily$(R, Arg), [dart.fnType(async.FutureOr$(R), [future_provider.AutoDisposeFutureProviderRef$(R), Arg])], {dependencies: T$.ListNOfProviderOrFamily(), name: T$.StringN()}, {}], (R, Arg) => [T$.ObjectN(), T$.ObjectN()])))(),
    Fn__ToAutoDisposeFutureProviderOfT: () => (T$.Fn__ToAutoDisposeFutureProviderOfT = dart.constFn(dart.gFnType(T => [future_provider.AutoDisposeFutureProvider$(T), [dart.fnType(async.FutureOr$(T), [future_provider.AutoDisposeFutureProviderRef$(T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], T => [T$.ObjectN()])))(),
    Fn__ToFutureProviderOfT: () => (T$.Fn__ToFutureProviderOfT = dart.constFn(dart.gFnType(T => [future_provider.FutureProvider$(T), [dart.fnType(async.FutureOr$(T), [future_provider.FutureProviderRef$(T)])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], T => [T$.ObjectN()])))(),
    JSArrayOfPostEventCall: () => (T$.JSArrayOfPostEventCall = dart.constFn(_interceptors.JSArray$(devtool.PostEventCall)))(),
    IdentityMapOfString$ProviderContainer: () => (T$.IdentityMapOfString$ProviderContainer = dart.constFn(_js_helper.IdentityMap$(core.String, framework.ProviderContainer)))(),
    LinkedMapOfObjectN$ObjectN: () => (T$.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T$.ObjectN(), T$.ObjectN())))(),
    StackTraceN: () => (T$.StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))(),
    ObjectAndStackTraceN__Tovoid: () => (T$.ObjectAndStackTraceN__Tovoid = dart.constFn(dart.fnType(dart.void, [core.Object, T$.StackTraceN()], {}, {callListeners: core.bool})))(),
    AsyncValueOfvoid: () => (T$.AsyncValueOfvoid = dart.constFn(common.AsyncValue$(dart.void)))(),
    AsyncValueOfvoidTovoid: () => (T$.AsyncValueOfvoidTovoid = dart.constFn(dart.fnType(dart.void, [T$.AsyncValueOfvoid()])))(),
    ResultDataOfObjectN: () => (T$.ResultDataOfObjectN = dart.constFn(result.ResultData$(T$.ObjectN())))(),
    ResultDataOfObjectNTovoid: () => (T$.ResultDataOfObjectNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ResultDataOfObjectN()])))(),
    ResultErrorTovoid: () => (T$.ResultErrorTovoid = dart.constFn(dart.fnType(dart.void, [result.ResultError])))(),
    JSArrayOfProviderContainer: () => (T$.JSArrayOfProviderContainer = dart.constFn(_interceptors.JSArray$(framework.ProviderContainer)))(),
    LinkedMapOfProviderBase$ProviderBase: () => (T$.LinkedMapOfProviderBase$ProviderBase = dart.constFn(_js_helper.LinkedMap$(framework.ProviderBase, framework.ProviderBase)))(),
    LinkedMapOfFamily$_FamilyOverrideRef: () => (T$.LinkedMapOfFamily$_FamilyOverrideRef = dart.constFn(_js_helper.LinkedMap$(framework.Family, framework._FamilyOverrideRef)))(),
    JSArrayOfProviderObserver: () => (T$.JSArrayOfProviderObserver = dart.constFn(_interceptors.JSArray$(framework.ProviderObserver)))(),
    LinkedMapOfProviderBase$_StateReader: () => (T$.LinkedMapOfProviderBase$_StateReader = dart.constFn(_js_helper.LinkedMap$(framework.ProviderBase, framework._StateReader)))(),
    LinkedHashMapOfString$ProviderContainer: () => (T$.LinkedHashMapOfString$ProviderContainer = dart.constFn(collection.LinkedHashMap$(core.String, framework.ProviderContainer)))(),
    UnmodifiableListViewOfProviderContainer: () => (T$.UnmodifiableListViewOfProviderContainer = dart.constFn(collection.UnmodifiableListView$(framework.ProviderContainer)))(),
    ProviderContainerTovoid: () => (T$.ProviderContainerTovoid = dart.constFn(dart.fnType(dart.void, [framework.ProviderContainer])))(),
    ListOfOverride: () => (T$.ListOfOverride = dart.constFn(core.List$(framework.Override)))(),
    ProviderBaseTovoid: () => (T$.ProviderBaseTovoid = dart.constFn(dart.fnType(dart.void, [framework.ProviderBase])))(),
    LinkedHashSetOfProviderBase: () => (T$.LinkedHashSetOfProviderBase = dart.constFn(collection.LinkedHashSet$(framework.ProviderBase)))(),
    ListQueueOfProviderBase: () => (T$.ListQueueOfProviderBase = dart.constFn(collection.ListQueue$(framework.ProviderBase)))(),
    __Tovoid: () => (T$.__Tovoid = dart.constFn(dart.fnType(dart.void, [], {}, {origin: framework.ProviderBase, override: framework.ProviderBase})))(),
    ProviderContainerN: () => (T$.ProviderContainerN = dart.constFn(dart.nullable(framework.ProviderContainer)))(),
    ProviderOrFamilyToProviderContainerN: () => (T$.ProviderOrFamilyToProviderContainerN = dart.constFn(dart.fnType(T$.ProviderContainerN(), [framework.ProviderOrFamily])))(),
    ProviderContainerNTobool: () => (T$.ProviderContainerNTobool = dart.constFn(dart.fnType(core.bool, [T$.ProviderContainerN()])))(),
    ProviderContainerAndProviderContainerNToProviderContainer: () => (T$.ProviderContainerAndProviderContainerNToProviderContainer = dart.constFn(dart.fnType(framework.ProviderContainer, [framework.ProviderContainer, T$.ProviderContainerN()])))(),
    VoidTo_StateReader: () => (T$.VoidTo_StateReader = dart.constFn(dart.fnType(framework._StateReader, [])))(),
    SyncIterableOfProviderElementBase: () => (T$.SyncIterableOfProviderElementBase = dart.constFn(_js_helper.SyncIterable$(framework.ProviderElementBase)))(),
    _HashSetOfProviderElementBase: () => (T$._HashSetOfProviderElementBase = dart.constFn(collection._HashSet$(framework.ProviderElementBase)))(),
    DoubleLinkedQueueOfProviderElementBase: () => (T$.DoubleLinkedQueueOfProviderElementBase = dart.constFn(collection.DoubleLinkedQueue$(framework.ProviderElementBase)))(),
    JSArrayOfAutoDisposeProviderElementMixin: () => (T$.JSArrayOfAutoDisposeProviderElementMixin = dart.constFn(_interceptors.JSArray$(framework.AutoDisposeProviderElementMixin)))(),
    CompleterOfvoid: () => (T$.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    LinkedHashSetOfProviderOrFamily: () => (T$.LinkedHashSetOfProviderOrFamily = dart.constFn(collection.LinkedHashSet$(framework.ProviderOrFamily)))(),
    ProviderOrFamilyTovoid: () => (T$.ProviderOrFamilyTovoid = dart.constFn(dart.fnType(dart.void, [framework.ProviderOrFamily])))(),
    __Tovoid$1: () => (T$.__Tovoid$1 = dart.constFn(dart.fnType(dart.void, [], {shouldClearPreviousState: core.bool}, {})))(),
    AsyncErrorN: () => (T$.AsyncErrorN = dart.constFn(dart.nullable(common.AsyncError)))(),
    Fn__ToAutoDisposeAsyncNotifierProviderFamilyOfNotifierT$T$Arg: () => (T$.Fn__ToAutoDisposeAsyncNotifierProviderFamilyOfNotifierT$T$Arg = dart.constFn(dart.gFnType((NotifierT, T, Arg) => [async_notifier.AutoDisposeAsyncNotifierProviderFamily$(NotifierT, T, Arg), [dart.fnType(NotifierT, [])], {dependencies: T$.ListNOfProviderOrFamily(), name: T$.StringN()}, {}], (NotifierT, T, Arg) => [async_notifier.AutoDisposeFamilyAsyncNotifier$(T, Arg), T$.ObjectN(), T$.ObjectN()])))(),
    Fn__ToAutoDisposeFamilyAsyncNotifierProviderImplOfNotifierT$T$Arg: () => (T$.Fn__ToAutoDisposeFamilyAsyncNotifierProviderImplOfNotifierT$T$Arg = dart.constFn(dart.gFnType((NotifierT, T, Arg) => [async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl$(NotifierT, T, Arg), [dart.fnType(NotifierT, [])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], (NotifierT, T, Arg) => [async_notifier.AsyncNotifierBase$(T), T$.ObjectN(), T$.ObjectN()])))(),
    Fn__ToFamilyAsyncNotifierProviderImplOfNotifierT$T$Arg: () => (T$.Fn__ToFamilyAsyncNotifierProviderImplOfNotifierT$T$Arg = dart.constFn(dart.gFnType((NotifierT, T, Arg) => [async_notifier.FamilyAsyncNotifierProviderImpl$(NotifierT, T, Arg), [dart.fnType(NotifierT, [])], {argument: T$.ObjectN(), debugGetCreateSourceHash: T$.VoidToNString(), dependencies: T$.ListNOfProviderOrFamily(), from: T$.FamilyN(), name: T$.StringN()}, {}], (NotifierT, T, Arg) => [async_notifier.AsyncNotifierBase$(T), T$.ObjectN(), T$.ObjectN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(stack_trace.throwErrorWithCombinedStackTrace, T$.ObjectAndStackTraceToNever());
    },
    get C1() {
      return C[1] = dart.fn(run_guarded.runGuarded, T$.FnTovoid());
    },
    get C2() {
      return C[2] = dart.fn(state_provider.AutoDisposeStateProviderFamily['_#new#tearOff'], T$.Fn__ToAutoDisposeStateProviderFamilyOfR$Arg());
    },
    get C3() {
      return C[3] = dart.fn(state_provider.AutoDisposeStateProvider['_#new#tearOff'], T$.Fn__ToAutoDisposeStateProviderOfT());
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: builders.AutoDisposeStateProviderBuilder.prototype
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: builders.StateProviderFamilyBuilder.prototype
      });
    },
    get C6() {
      return C[6] = dart.fn(state_provider.StateProvider['_#new#tearOff'], T$.Fn__ToStateProviderOfT());
    },
    get C7() {
      return C[7] = dart.fn(notifier.AutoDisposeNotifierProviderFamily['_#new#tearOff'], T$.Fn__ToAutoDisposeNotifierProviderFamilyOfNotifierT$T$Arg());
    },
    get C8() {
      return C[8] = dart.fn(notifier.AutoDisposeFamilyNotifierProviderImpl['_#new#tearOff'], T$.Fn__ToAutoDisposeFamilyNotifierProviderImplOfNotifierT$T$Arg());
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: builders.AutoDisposeNotifierProviderBuilder.prototype
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: builders.NotifierProviderFamilyBuilder.prototype
      });
    },
    get C11() {
      return C[11] = dart.fn(notifier.FamilyNotifierProviderImpl['_#new#tearOff'], T$.Fn__ToFamilyNotifierProviderImplOfNotifierT$T$Arg());
    },
    get C12() {
      return C[12] = dart.fn(stream_provider.AutoDisposeStreamProviderFamily['_#new#tearOff'], T$.Fn__ToAutoDisposeStreamProviderFamilyOfR$Arg());
    },
    get C13() {
      return C[13] = dart.fn(stream_provider.AutoDisposeStreamProvider['_#new#tearOff'], T$.Fn__ToAutoDisposeStreamProviderOfT());
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: builders.AutoDisposeStreamProviderBuilder.prototype
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: builders.StreamProviderFamilyBuilder.prototype
      });
    },
    get C16() {
      return C[16] = dart.fn(stream_provider.StreamProvider['_#new#tearOff'], T$.Fn__ToStreamProviderOfT());
    },
    get C17() {
      return C[17] = dart.fn(state_notifier_provider.AutoDisposeStateNotifierProviderFamily['_#new#tearOff'], T$.Fn__ToAutoDisposeStateNotifierProviderFamilyOfNotifierT$T$Arg());
    },
    get C18() {
      return C[18] = dart.fn(state_notifier_provider.AutoDisposeStateNotifierProvider['_#new#tearOff'], T$.Fn__ToAutoDisposeStateNotifierProviderOfNotifierT$T());
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: builders.AutoDisposeStateNotifierProviderBuilder.prototype
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: builders.StateNotifierProviderFamilyBuilder.prototype
      });
    },
    get C21() {
      return C[21] = dart.fn(state_notifier_provider.StateNotifierProvider['_#new#tearOff'], T$.Fn__ToStateNotifierProviderOfNotifierT$T());
    },
    get C22() {
      return C[22] = dart.fn(provider$.AutoDisposeProviderFamily['_#new#tearOff'], T$.Fn__ToAutoDisposeProviderFamilyOfR$Arg());
    },
    get C23() {
      return C[23] = dart.fn(provider$.AutoDisposeProvider['_#new#tearOff'], T$.Fn__ToAutoDisposeProviderOfT());
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: builders.ProviderFamilyBuilder.prototype
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: builders.AutoDisposeProviderBuilder.prototype
      });
    },
    get C26() {
      return C[26] = dart.fn(provider$.Provider['_#new#tearOff'], T$.Fn__ToProviderOfState());
    },
    get C27() {
      return C[27] = dart.fn(future_provider.AutoDisposeFutureProviderFamily['_#new#tearOff'], T$.Fn__ToAutoDisposeFutureProviderFamilyOfR$Arg());
    },
    get C28() {
      return C[28] = dart.fn(future_provider.AutoDisposeFutureProvider['_#new#tearOff'], T$.Fn__ToAutoDisposeFutureProviderOfT());
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: builders.AutoDisposeFutureProviderBuilder.prototype
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: builders.FutureProviderFamilyBuilder.prototype
      });
    },
    get C31() {
      return C[31] = dart.fn(future_provider.FutureProvider['_#new#tearOff'], T$.Fn__ToFutureProviderOfT());
    },
    get C32() {
      return C[32] = dart.constMap(T$.ObjectN(), T$.ObjectN(), []);
    },
    get C33() {
      return C[33] = dart.constList([], framework.Override);
    },
    get C34() {
      return C[34] = dart.fn(framework._defaultVsync, T$.FnTovoid());
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: builders.AutoDisposeAsyncNotifierProviderBuilder.prototype
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: builders.AsyncNotifierProviderFamilyBuilder.prototype
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: builders.AutoDisposeAsyncNotifierProviderFamilyBuilder.prototype
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: builders.AutoDisposeNotifierProviderFamilyBuilder.prototype
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: builders.AutoDisposeStateProviderFamilyBuilder.prototype
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: builders.AutoDisposeStateNotifierProviderFamilyBuilder.prototype
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: builders.AutoDisposeProviderFamilyBuilder.prototype
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: builders.AutoDisposeFutureProviderFamilyBuilder.prototype
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: builders.AutoDisposeStreamProviderFamilyBuilder.prototype
      });
    },
    get C44() {
      return C[44] = dart.fn(async_notifier.AutoDisposeAsyncNotifierProviderFamily['_#new#tearOff'], T$.Fn__ToAutoDisposeAsyncNotifierProviderFamilyOfNotifierT$T$Arg());
    },
    get C45() {
      return C[45] = dart.fn(async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl['_#new#tearOff'], T$.Fn__ToAutoDisposeFamilyAsyncNotifierProviderImplOfNotifierT$T$Arg());
    },
    get C46() {
      return C[46] = dart.fn(async_notifier.FamilyAsyncNotifierProviderImpl['_#new#tearOff'], T$.Fn__ToFamilyAsyncNotifierProviderImplOfNotifierT$T$Arg());
    }
  }, false);
  var C = Array(47).fill(void 0);
  var I = [
    "package:riverpod/src/framework.dart",
    "package:riverpod/src/value_provider.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/framework/element.dart",
    "package:riverpod/src/state_provider.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/framework/auto_dispose.dart",
    "package:riverpod/src/notifier.dart",
    "package:riverpod/src/listenable.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/listenable.dart",
    "package:riverpod/src/common.dart",
    "package:riverpod/src/stream_provider.dart",
    "package:riverpod/src/state_notifier_provider.dart",
    "package:riverpod/src/provider.dart",
    "package:riverpod/src/future_provider.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/async_notifier/base.dart",
    "package:riverpod/src/async_notifier.dart",
    "package:riverpod/src/devtool.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/devtool.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/framework/async_selector.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/framework/container.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/framework/selector.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/framework/scheduler.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/riverpod-2.0.2/lib/src/framework/provider_base.dart",
    "package:riverpod/src/builders.dart"
  ];
  var _value$ = dart.privateName(value_provider, "_value");
  var debugGetCreateSourceHash$ = dart.privateName(framework, "ProviderBase.debugGetCreateSourceHash");
  var name$ = dart.privateName(framework, "ProviderBase.name");
  var from$ = dart.privateName(framework, "ProviderBase.from");
  var argument$ = dart.privateName(framework, "ProviderBase.argument");
  var _origin = dart.privateName(framework, "_origin");
  var _override = dart.privateName(framework, "_override");
  var _onListen = dart.privateName(framework, "_onListen");
  var _listenElement = dart.privateName(framework, "_listenElement");
  framework.ProviderOrFamily = class ProviderOrFamily extends core.Object {};
  (framework.ProviderOrFamily.new = function() {
    ;
  }).prototype = framework.ProviderOrFamily.prototype;
  dart.addTypeTests(framework.ProviderOrFamily);
  dart.addTypeCaches(framework.ProviderOrFamily);
  dart.setLibraryUri(framework.ProviderOrFamily, I[0]);
  const _is_ProviderListenable_default = Symbol('_is_ProviderListenable_default');
  framework.ProviderListenable$ = dart.generic(State => {
    class ProviderListenable extends core.Object {}
    ProviderListenable[dart.mixinOn] = Object => class ProviderListenable extends Object {
      select(Selected, selector) {
        return new (framework._ProviderSelector$(State, Selected)).new({provider: this, selector: selector});
      }
    };
    (ProviderListenable[dart.mixinNew] = function() {
    }).prototype = ProviderListenable.prototype;
    dart.addTypeTests(ProviderListenable);
    ProviderListenable.prototype[_is_ProviderListenable_default] = true;
    dart.addTypeCaches(ProviderListenable);
    ProviderListenable[dart.implements] = () => [core.Object];
    dart.setMethodSignature(ProviderListenable, () => ({
      __proto__: dart.getMethods(ProviderListenable.__proto__),
      select: dart.gFnType(Selected => [framework.ProviderListenable$(Selected), [dart.fnType(Selected, [State])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(ProviderListenable, I[0]);
    return ProviderListenable;
  });
  framework.ProviderListenable = framework.ProviderListenable$();
  dart.addTypeTests(framework.ProviderListenable, _is_ProviderListenable_default);
  const _is_ProviderBase_default = Symbol('_is_ProviderBase_default');
  framework.ProviderBase$ = dart.generic(State => {
    var __t$ProviderBaseOfState = () => (__t$ProviderBaseOfState = dart.constFn(framework.ProviderBase$(State)))();
    const ProviderOrFamily_ProviderListenable$36 = class ProviderOrFamily_ProviderListenable extends framework.ProviderOrFamily {};
    (ProviderOrFamily_ProviderListenable$36.new = function() {
      ProviderOrFamily_ProviderListenable$36.__proto__.new.call(this);
    }).prototype = ProviderOrFamily_ProviderListenable$36.prototype;
    dart.applyMixin(ProviderOrFamily_ProviderListenable$36, framework.ProviderListenable$(State));
    class ProviderBase extends ProviderOrFamily_ProviderListenable$36 {
      get debugGetCreateSourceHash() {
        return this[debugGetCreateSourceHash$];
      }
      set debugGetCreateSourceHash(value) {
        super.debugGetCreateSourceHash = value;
      }
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get from() {
        return this[from$];
      }
      set from(value) {
        super.from = value;
      }
      get argument() {
        return this[argument$];
      }
      set argument(value) {
        super.argument = value;
      }
      get [_origin]() {
        return this;
      }
      get [_override]() {
        return this;
      }
      get allTransitiveDependencies() {
        return this.dependencies == null ? null : framework._allTransitiveDependencies(dart.nullCheck(this.dependencies));
      }
      addListener(node, listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDependencyMayHaveChanged = opts && 'onDependencyMayHaveChanged' in opts ? opts.onDependencyMayHaveChanged : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : null;
        onError == null ? onError = dart.bind(async.Zone.current, 'handleUncaughtError') : null;
        let element = node.readProviderElement(State, this);
        element.flush();
        if (fireImmediately) {
          framework.handleFireImmediately(State, dart.nullCheck(element.getState()), {listener: listener, onError: onError});
        }
        element[_onListen]();
        return node[_listenElement](State, element, {listener: listener, onError: onError});
      }
      read(node) {
        let element = node.readProviderElement(State, this);
        element.flush();
        element.mayNeedDispose();
        return element.requireState;
      }
      get hashCode() {
        if (this.from == null) return super[$hashCode];
        return (dart.hashCode(this.from) ^ dart.hashCode(this.argument)) >>> 0;
      }
      _equals(other) {
        if (other == null) return false;
        if (this.from == null) return other === this;
        return other[$runtimeType]._equals(this[$runtimeType]) && __t$ProviderBaseOfState().is(other) && dart.equals(other.from, this.from) && dart.equals(other.argument, this.argument);
      }
      toString() {
        let leading = "";
        if (this.from != null) {
          leading = "(" + dart.str(this.argument) + ")";
        }
        let trailing = "";
        if (this.name != null) {
          trailing = dart.str(this.name) + ":";
        }
        return trailing + framework.describeIdentity(this) + leading;
      }
    }
    (ProviderBase.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[name$] = name;
      this[from$] = from;
      this[argument$] = argument;
      this[debugGetCreateSourceHash$] = debugGetCreateSourceHash;
      ProviderBase.__proto__.new.call(this);
      ;
    }).prototype = ProviderBase.prototype;
    dart.addTypeTests(ProviderBase);
    ProviderBase.prototype[_is_ProviderBase_default] = true;
    dart.addTypeCaches(ProviderBase);
    ProviderBase[dart.implements] = () => [framework.ProviderOverride, framework.Refreshable$(State)];
    dart.setMethodSignature(ProviderBase, () => ({
      __proto__: dart.getMethods(ProviderBase.__proto__),
      addListener: dart.fnType(framework.ProviderSubscription$(State), [framework.Node, dart.fnType(dart.void, [dart.nullable(State), State])], {}, {fireImmediately: core.bool, onDependencyMayHaveChanged: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}),
      read: dart.fnType(State, [framework.Node])
    }));
    dart.setGetterSignature(ProviderBase, () => ({
      __proto__: dart.getGetters(ProviderBase.__proto__),
      [_origin]: framework.ProviderBase,
      [_override]: framework.ProviderBase,
      allTransitiveDependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(ProviderBase, I[0]);
    dart.setFieldSignature(ProviderBase, () => ({
      __proto__: dart.getFields(ProviderBase.__proto__),
      debugGetCreateSourceHash: dart.finalFieldType(dart.nullable(dart.fnType(core.String, []))),
      name: dart.finalFieldType(dart.nullable(core.String)),
      from: dart.finalFieldType(dart.nullable(framework.Family)),
      argument: dart.finalFieldType(dart.nullable(core.Object))
    }));
    dart.defineExtensionMethods(ProviderBase, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ProviderBase, ['hashCode']);
    return ProviderBase;
  });
  framework.ProviderBase = framework.ProviderBase$();
  dart.addTypeTests(framework.ProviderBase, _is_ProviderBase_default);
  const _is_AlwaysAliveProviderBase_default = Symbol('_is_AlwaysAliveProviderBase_default');
  framework.AlwaysAliveProviderBase$ = dart.generic(State => {
    class AlwaysAliveProviderBase extends framework.ProviderBase$(State) {}
    AlwaysAliveProviderBase[dart.mixinOn] = ProviderBase => class AlwaysAliveProviderBase extends ProviderBase {
      select(Selected, selector) {
        return new (framework._AlwaysAliveProviderSelector$(State, Selected)).new({provider: this, selector: selector});
      }
    };
    dart.addTypeTests(AlwaysAliveProviderBase);
    AlwaysAliveProviderBase.prototype[_is_AlwaysAliveProviderBase_default] = true;
    dart.addTypeCaches(AlwaysAliveProviderBase);
    AlwaysAliveProviderBase[dart.implements] = () => [framework.AlwaysAliveProviderListenable$(State), framework.AlwaysAliveRefreshable$(State), framework.ProviderBase$(State)];
    dart.setMethodSignature(AlwaysAliveProviderBase, () => ({
      __proto__: dart.getMethods(AlwaysAliveProviderBase.__proto__),
      select: dart.gFnType(Selected => [framework.AlwaysAliveProviderListenable$(Selected), [dart.fnType(Selected, [State])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AlwaysAliveProviderBase, I[0]);
    return AlwaysAliveProviderBase;
  });
  framework.AlwaysAliveProviderBase = framework.AlwaysAliveProviderBase$();
  dart.addTypeTests(framework.AlwaysAliveProviderBase, _is_AlwaysAliveProviderBase_default);
  const _is_ValueProvider_default = Symbol('_is_ValueProvider_default');
  value_provider.ValueProvider$ = dart.generic(State => {
    var __t$ValueProviderElementOfState = () => (__t$ValueProviderElementOfState = dart.constFn(value_provider.ValueProviderElement$(State)))();
    const ProviderBase_AlwaysAliveProviderBase$36 = class ProviderBase_AlwaysAliveProviderBase extends framework.ProviderBase$(State) {};
    (ProviderBase_AlwaysAliveProviderBase$36.new = function(opts) {
      ProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, opts);
    }).prototype = ProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(ProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(State));
    class ValueProvider extends ProviderBase_AlwaysAliveProviderBase$36 {
      static ['_#new#tearOff'](State, _value) {
        return new (value_provider.ValueProvider$(State)).new(_value);
      }
      get dependencies() {
        return null;
      }
      createElement() {
        return new (__t$ValueProviderElementOfState()).new(this);
      }
    }
    (ValueProvider.new = function(_value) {
      this[_value$] = _value;
      ValueProvider.__proto__.new.call(this, {name: null, from: null, argument: null, debugGetCreateSourceHash: null});
      ;
    }).prototype = ValueProvider.prototype;
    dart.addTypeTests(ValueProvider);
    ValueProvider.prototype[_is_ValueProvider_default] = true;
    dart.addTypeCaches(ValueProvider);
    dart.setMethodSignature(ValueProvider, () => ({
      __proto__: dart.getMethods(ValueProvider.__proto__),
      createElement: dart.fnType(value_provider.ValueProviderElement$(State), [])
    }));
    dart.setGetterSignature(ValueProvider, () => ({
      __proto__: dart.getGetters(ValueProvider.__proto__),
      dependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(ValueProvider, I[1]);
    dart.setFieldSignature(ValueProvider, () => ({
      __proto__: dart.getFields(ValueProvider.__proto__),
      [_value$]: dart.finalFieldType(State)
    }));
    return ValueProvider;
  });
  value_provider.ValueProvider = value_provider.ValueProvider$();
  dart.addTypeTests(value_provider.ValueProvider, _is_ValueProvider_default);
  var onChange = dart.privateName(value_provider, "ValueProviderElement.onChange");
  var _provider$ = dart.privateName(framework, "ProviderElementBase._provider");
  var _debugCurrentCreateHash = dart.privateName(framework, "_debugCurrentCreateHash");
  var _debugSkipNotifyListenersAsserts = dart.privateName(framework, "_debugSkipNotifyListenersAsserts");
  var __ProviderElementBase__origin = dart.privateName(framework, "_#ProviderElementBase#_origin");
  var __ProviderElementBase__container = dart.privateName(framework, "_#ProviderElementBase#_container");
  var _externalDependents = dart.privateName(framework, "_externalDependents");
  var _listenedProviderSubscriptions = dart.privateName(framework, "_listenedProviderSubscriptions");
  var _providerDependents = dart.privateName(framework, "_providerDependents");
  var _subscribers = dart.privateName(framework, "_subscribers");
  var _dependencies = dart.privateName(framework, "_dependencies");
  var _previousDependencies = dart.privateName(framework, "_previousDependencies");
  var _onDisposeListeners = dart.privateName(framework, "_onDisposeListeners");
  var _onResumeListeners = dart.privateName(framework, "_onResumeListeners");
  var _onCancelListeners = dart.privateName(framework, "_onCancelListeners");
  var _onAddListeners = dart.privateName(framework, "_onAddListeners");
  var _onRemoveListeners = dart.privateName(framework, "_onRemoveListeners");
  var _onChangeSelfListeners = dart.privateName(framework, "_onChangeSelfListeners");
  var _onErrorSelfListeners = dart.privateName(framework, "_onErrorSelfListeners");
  var _mustRecomputeState = dart.privateName(framework, "_mustRecomputeState");
  var _dependencyMayHaveChanged = dart.privateName(framework, "_dependencyMayHaveChanged");
  var _didChangeDependency = dart.privateName(framework, "_didChangeDependency");
  var _didCancelOnce = dart.privateName(framework, "_didCancelOnce");
  var _mounted = dart.privateName(framework, "_mounted");
  var _debugDidSetState = dart.privateName(framework, "_debugDidSetState");
  var _didBuild = dart.privateName(framework, "_didBuild");
  var _state = dart.privateName(framework, "_state");
  var _provider = dart.privateName(framework, "_provider");
  var _container = dart.privateName(framework, "_container");
  var _notifyListeners = dart.privateName(framework, "_notifyListeners");
  var _debugId = dart.privateName(framework, "_debugId");
  var _scheduler = dart.privateName(framework, "_scheduler");
  var _markDependencyMayHaveChanged = dart.privateName(framework, "_markDependencyMayHaveChanged");
  var _maybeRebuildDependencies = dart.privateName(framework, "_maybeRebuildDependencies");
  var _performBuild = dart.privateName(framework, "_performBuild");
  var _onRemoveListener = dart.privateName(framework, "_onRemoveListener");
  var _listener$ = dart.privateName(framework, "_listener");
  var _markDependencyChanged = dart.privateName(framework, "_markDependencyChanged");
  var _observers = dart.privateName(framework, "_observers");
  var _debugAssertCanDependOn = dart.privateName(framework, "_debugAssertCanDependOn");
  var _assertNotOutdated = dart.privateName(framework, "_assertNotOutdated");
  const _is_ProviderElementBase_default = Symbol('_is_ProviderElementBase_default');
  framework.ProviderElementBase$ = dart.generic(State => {
    var __t$_ExternalProviderSubscriptionOfState = () => (__t$_ExternalProviderSubscriptionOfState = dart.constFn(framework._ExternalProviderSubscription$(State)))();
    var __t$JSArrayOf_ExternalProviderSubscriptionOfState = () => (__t$JSArrayOf_ExternalProviderSubscriptionOfState = dart.constFn(_interceptors.JSArray$(__t$_ExternalProviderSubscriptionOfState())))();
    var __t$ProviderBaseOfState = () => (__t$ProviderBaseOfState = dart.constFn(framework.ProviderBase$(State)))();
    var __t$ResultDataOfState = () => (__t$ResultDataOfState = dart.constFn(result.ResultData$(State)))();
    var __t$StateToState = () => (__t$StateToState = dart.constFn(dart.fnType(State, [State])))();
    var __t$ResultDataOfStateToNull = () => (__t$ResultDataOfStateToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultDataOfState()])))();
    var __t$ResultErrorOfState = () => (__t$ResultErrorOfState = dart.constFn(result.ResultError$(State)))();
    var __t$ResultErrorOfStateToNull = () => (__t$ResultErrorOfStateToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultErrorOfState()])))();
    var __t$StateN = () => (__t$StateN = dart.constFn(dart.nullable(State)))();
    var __t$StateNAndStateTovoid = () => (__t$StateNAndStateTovoid = dart.constFn(dart.fnType(dart.void, [__t$StateN(), State])))();
    var __t$JSArrayOfStateNAndStateTovoid = () => (__t$JSArrayOfStateNAndStateTovoid = dart.constFn(_interceptors.JSArray$(__t$StateNAndStateTovoid())))();
    class ProviderElementBase extends core.Object {
      get [_provider]() {
        return this[_provider$];
      }
      set [_provider](value) {
        this[_provider$] = __t$ProviderBaseOfState().as(value);
      }
      get origin() {
        return this[_origin];
      }
      get [_origin]() {
        let t0;
        t0 = this[__ProviderElementBase__origin];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_origin")) : t0;
      }
      set [_origin](library$32package$58riverpod$47src$47framework$47element$46dart$58$58_origin$35param) {
        this[__ProviderElementBase__origin] = library$32package$58riverpod$47src$47framework$47element$46dart$58$58_origin$35param;
      }
      get provider() {
        return this[_provider];
      }
      get container() {
        return this[_container];
      }
      get [_container]() {
        let t0;
        t0 = this[__ProviderElementBase__container];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_container")) : t0;
      }
      set [_container](library$32package$58riverpod$47src$47framework$47element$46dart$58$58_container$35param) {
        this[__ProviderElementBase__container] = library$32package$58riverpod$47src$47framework$47element$46dart$58$58_container$35param;
      }
      get hasListeners() {
        return this[_externalDependents][$isNotEmpty] || this[_subscribers][$isNotEmpty] || this[_providerDependents][$isNotEmpty];
      }
      get mounted() {
        return this[_mounted];
      }
      get debugAssertDidSetStateEnabled() {
        return true;
      }
      setState(newState) {
        State.as(newState);
        if (!dart.fn(() => {
          this[_debugDidSetState] = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 133, 7, "() {\n        _debugDidSetState = true;\n        return true;\n      }()");
        let previousResult = this.getState();
        let result = this[_state] = new (__t$ResultDataOfState()).new(newState);
        if (this[_didBuild]) {
          this[_notifyListeners](result, previousResult);
        }
      }
      getState() {
        return this[_state];
      }
      get requireState() {
        if (!dart.fn(() => {
          if (this.debugAssertDidSetStateEnabled && !this[_debugDidSetState]) {
            dart.throw(new core.StateError.new("Tried to read the state of an uninitialized provider"));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 169, 7, "() {\n        if (debugAssertDidSetStateEnabled && !_debugDidSetState) {\n          throw StateError(\n            'Tried to read the state of an uninitialized provider',\n          );\n        }\n        return true;\n      }()");
        let state = this.getState();
        if (state == null) {
          dart.throw(new core.StateError.new("Tried to read the state of an uninitialized provider"));
        }
        return state.when(State, {error: C[0] || CT.C0, data: dart.fn(data => data, __t$StateToState())});
      }
      debugReassemble() {
        if (!dart.fn(() => {
          let t0;
          let previousHash = this[_debugCurrentCreateHash];
          this[_debugCurrentCreateHash] = (t0 = this.provider.debugGetCreateSourceHash, t0 == null ? null : t0());
          if (previousHash != this[_debugCurrentCreateHash]) {
            this.invalidateSelf();
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 206, 7, "() {\n        final previousHash = _debugCurrentCreateHash;\n        _debugCurrentCreateHash = provider.debugGetCreateSourceHash?.call();\n\n        if (previousHash != _debugCurrentCreateHash) {\n          invalidateSelf();\n        }\n\n        return true;\n      }()");
      }
      mount() {
        this[_mounted] = true;
        if (!dart.fn(() => {
          let t0;
          devtool.RiverpodBinding.debugInstance.providerListChangedFor({containerId: this.container[_debugId]});
          this[_debugCurrentCreateHash] = (t0 = this.provider.debugGetCreateSourceHash, t0 == null ? null : t0());
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 226, 7, "() {\n        RiverpodBinding.debugInstance\n            .providerListChangedFor(containerId: container._debugId);\n\n        _debugCurrentCreateHash = provider.debugGetCreateSourceHash?.call();\n\n        return true;\n      }()");
        this.buildState();
        dart.nullCheck(this[_state]).map(core.Null, {data: dart.fn(newState => {
            let onChangeSelfListeners = this[_onChangeSelfListeners];
            if (onChangeSelfListeners != null) {
              for (let i = 0; i < onChangeSelfListeners[$length]; i = i + 1) {
                async.Zone.current.runBinaryGuarded(core.Null, State, onChangeSelfListeners[$_get](i), null, newState.state);
              }
            }
          }, __t$ResultDataOfStateToNull()), error: dart.fn(newState => {
            let onErrorSelfListeners = this[_onErrorSelfListeners];
            if (onErrorSelfListeners != null) {
              for (let i = 0; i < onErrorSelfListeners[$length]; i = i + 1) {
                async.Zone.current.runBinaryGuarded(core.Object, core.StackTrace, onErrorSelfListeners[$_get](i), newState.error, newState.stackTrace);
              }
            }
          }, __t$ResultErrorOfStateToNull())});
      }
      update(newProvider) {
        __t$ProviderBaseOfState().as(newProvider);
        this[_provider] = newProvider;
      }
      invalidate(provider) {
        this[_container].invalidate(provider);
      }
      invalidateSelf() {
        if (this[_mustRecomputeState]) return;
        this[_mustRecomputeState] = true;
        this.runOnDispose();
        this[_container][_scheduler].scheduleProviderRefresh(this);
        this.visitChildren({elementVisitor: dart.fn(element => element[_markDependencyMayHaveChanged](), T$.ProviderElementBaseTovoid()), notifierVisitor: dart.fn(notifier => notifier.notifyDependencyMayHaveChanged(), T$.ProxyElementValueNotifierTovoid())});
      }
      flush() {
        this[_maybeRebuildDependencies]();
        if (this[_mustRecomputeState]) {
          this[_mustRecomputeState] = false;
          this[_performBuild]();
        }
      }
      [_maybeRebuildDependencies]() {
        if (!this[_dependencyMayHaveChanged]) return;
        this[_dependencyMayHaveChanged] = false;
        this.visitAncestors(dart.fn(element => {
          element.flush();
        }, T$.ProviderElementBaseTovoid()));
      }
      [_performBuild]() {
        let t0;
        this[_previousDependencies] = this[_dependencies];
        this[_dependencies] = new (T$.LinkedMapOfProviderElementBase$Object()).new();
        let previousStateResult = this[_state];
        if (!dart.fn(() => {
          this[_debugDidSetState] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 346, 7, "() {\n        _debugDidSetState = false;\n        return true;\n      }()");
        this.buildState();
        if (this[_state] != previousStateResult) {
          if (!dart.fn(() => {
            this[_debugSkipNotifyListenersAsserts] = true;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[2], 356, 9, "() {\n          // Asserts would otherwise prevent a provider rebuild from updating\n          // other providers\n          _debugSkipNotifyListenersAsserts = true;\n          return true;\n        }()");
          this[_notifyListeners](dart.nullCheck(this[_state]), previousStateResult);
          if (!dart.fn(() => {
            this[_debugSkipNotifyListenersAsserts] = false;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[2], 366, 9, "() {\n          _debugSkipNotifyListenersAsserts = false;\n          return true;\n        }()");
        }
        for (let sub of dart.nullCheck(this[_previousDependencies])[$entries]) {
          t0 = sub.key;
          (() => {
            t0[_providerDependents][$remove](this);
            t0[_onRemoveListener]();
            return t0;
          })();
        }
        this[_previousDependencies] = null;
      }
      buildState() {
        let debugPreviouslyBuildingElement = null;
        let previousDidChangeDependency = this[_didChangeDependency];
        this[_didChangeDependency] = false;
        if (!dart.fn(() => {
          debugPreviouslyBuildingElement = framework.ProviderElementBase._debugCurrentlyBuildingElement;
          framework.ProviderElementBase._debugCurrentlyBuildingElement = this;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 403, 7, "() {\n        debugPreviouslyBuildingElement = _debugCurrentlyBuildingElement;\n        _debugCurrentlyBuildingElement = this;\n        return true;\n      }()");
        this[_didBuild] = false;
        try {
          this[_mounted] = true;
          this.create({didChangeDependency: previousDidChangeDependency});
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            if (!dart.fn(() => {
              this[_debugDidSetState] = true;
              return true;
            }, T$.VoidTobool())()) dart.assertFailed("", I[2], 417, 9, "() {\n          _debugDidSetState = true;\n          return true;\n        }()");
            this[_state] = new (__t$ResultErrorOfState()).new(err, stack);
          } else
            throw e;
        } finally {
          this[_didBuild] = true;
          if (!dart.fn(() => {
            framework.ProviderElementBase._debugCurrentlyBuildingElement = debugPreviouslyBuildingElement;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[2], 427, 9, "() {\n          _debugCurrentlyBuildingElement = debugPreviouslyBuildingElement;\n          return true;\n        }()");
          if (!(this.getState() != null)) dart.assertFailed("Bad state, the provider did not initialize. Did \"create\" forget to set the state?", I[2], 435, 9, "getState() != null");
        }
      }
      [_notifyListeners](newState, previousStateResult) {
        let t1;
        if (!dart.fn(() => {
          let t1;
          if (this[_debugSkipNotifyListenersAsserts]) return true;
          if (!(framework.ProviderElementBase._debugCurrentlyBuildingElement == null || dart.equals(framework.ProviderElementBase._debugCurrentlyBuildingElement, this))) dart.assertFailed("Providers are not allowed to modify other providers during their initialization.\n\nThe provider " + dart.str(dart.nullCheck(framework.ProviderElementBase._debugCurrentlyBuildingElement).origin) + " modified " + dart.str(this.origin) + " while building.\n", I[2], 450, 11, "_debugCurrentlyBuildingElement == null ||\n              _debugCurrentlyBuildingElement == this");
          t1 = this.container.debugCanModifyProviders;
          t1 == null ? null : t1();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 446, 7, "() {\n        if (_debugSkipNotifyListenersAsserts) return true;\n\n        assert(\n          _debugCurrentlyBuildingElement == null ||\n              _debugCurrentlyBuildingElement == this,\n          '''\nProviders are not allowed to modify other providers during their initialization.\n\nThe provider ${_debugCurrentlyBuildingElement!.origin} modified $origin while building.\n''',\n        );\n\n        container.debugCanModifyProviders?.call();\n        return true;\n      }()");
        let previousState = (t1 = previousStateResult, t1 == null ? null : t1.stateOrNull);
        newState.map(core.Null, {data: dart.fn(newState => {
            let onChangeSelfListeners = this[_onChangeSelfListeners];
            if (onChangeSelfListeners != null) {
              for (let i = 0; i < onChangeSelfListeners[$length]; i = i + 1) {
                async.Zone.current.runBinaryGuarded(__t$StateN(), State, onChangeSelfListeners[$_get](i), previousState, newState.state);
              }
            }
          }, __t$ResultDataOfStateToNull()), error: dart.fn(newState => {
            let onErrorSelfListeners = this[_onErrorSelfListeners];
            if (onErrorSelfListeners != null) {
              for (let i = 0; i < onErrorSelfListeners[$length]; i = i + 1) {
                async.Zone.current.runBinaryGuarded(core.Object, core.StackTrace, onErrorSelfListeners[$_get](i), newState.error, newState.stackTrace);
              }
            }
          }, __t$ResultErrorOfStateToNull())});
        if (previousStateResult != null && previousStateResult.hasState && newState.hasState && !this.updateShouldNotify(State.as(previousState), newState.requireState)) {
          return;
        }
        let listeners = this[_externalDependents][$toList]({growable: false});
        let subscribers = this[_subscribers][$toList]({growable: false});
        newState.map(core.Null, {data: dart.fn(newState => {
            for (let i = 0; i < listeners[$length]; i = i + 1) {
              async.Zone.current.runBinaryGuarded(__t$StateN(), State, __t$StateNAndStateTovoid().as(listeners[$_get](i)[_listener$]), previousState, newState.state);
            }
            for (let i = 0; i < subscribers[$length]; i = i + 1) {
              async.Zone.current.runBinaryGuarded(__t$StateN(), State, subscribers[$_get](i).listener, previousState, newState.state);
            }
          }, __t$ResultDataOfStateToNull()), error: dart.fn(newState => {
            for (let i = 0; i < listeners[$length]; i = i + 1) {
              async.Zone.current.runBinaryGuarded(core.Object, core.StackTrace, listeners[$_get](i).onError, newState.error, newState.stackTrace);
            }
            for (let i = 0; i < subscribers[$length]; i = i + 1) {
              async.Zone.current.runBinaryGuarded(core.Object, core.StackTrace, subscribers[$_get](i).onError, newState.error, newState.stackTrace);
            }
          }, __t$ResultErrorOfStateToNull())});
        for (let i = 0; i < this[_providerDependents][$length]; i = i + 1) {
          this[_providerDependents][$_get](i)[_markDependencyChanged]();
        }
        for (let observer of this[_container][_observers]) {
          run_guarded.runQuaternaryGuarded(__t$ProviderBaseOfState(), __t$StateN(), __t$StateN(), framework.ProviderContainer, dart.bind(observer, 'didUpdateProvider'), this.provider, previousState, newState.stateOrNull, this[_container]);
        }
        for (let observer of this[_container][_observers]) {
          newState.map(core.Null, {data: dart.fn(_ => {
            }, __t$ResultDataOfStateToNull()), error: dart.fn(newState => {
              run_guarded.runQuaternaryGuarded(__t$ProviderBaseOfState(), core.Object, core.StackTrace, framework.ProviderContainer, dart.bind(observer, 'providerDidFail'), this.provider, newState.error, newState.stackTrace, this[_container]);
            }, __t$ResultErrorOfStateToNull())});
        }
      }
      [_markDependencyChanged]() {
        this[_didChangeDependency] = true;
        if (this[_mustRecomputeState]) return;
        this.invalidateSelf();
      }
      [_markDependencyMayHaveChanged]() {
        if (this[_dependencyMayHaveChanged]) return;
        this[_dependencyMayHaveChanged] = true;
        this.visitChildren({elementVisitor: dart.fn(element => element[_markDependencyMayHaveChanged](), T$.ProviderElementBaseTovoid()), notifierVisitor: dart.fn(notifier => notifier.notifyDependencyMayHaveChanged(), T$.ProxyElementValueNotifierTovoid())});
      }
      [_debugAssertCanDependOn](listenable) {
        if (!dart.fn(() => {
          if (!framework.ProviderBase.is(listenable)) return true;
          if (!!listenable[_origin]._equals(this.origin)) dart.assertFailed("A provider cannot depend on itself", I[2], 597, 11, "listenable._origin != origin");
          if (!(!this.provider._equals(this.origin) || this.origin.from != null && dart.equals(listenable.from, this.origin.from) || this.origin.dependencies == null || dart.nullCheck(this.origin.dependencies)[$contains](listenable.from) || dart.nullCheck(this.origin.dependencies)[$contains](listenable))) dart.assertFailed("The provider " + dart.str(this.origin) + " tried to read " + dart.str(listenable) + ", but it specified a " + "'dependendencies' list yet that list does not contain " + dart.str(listenable) + ".\n\n" + "To fix, add " + dart.str(listenable) + " to " + dart.str(this.origin) + "'s 'dependencies' parameter", I[2], 602, 11, "provider != origin ||\n              // Families are allowed to depend on themselves with different parameters.\n              (origin.from != null && listenable.from == origin.from) ||\n              origin.dependencies == null ||\n              origin.dependencies!.contains(listenable.from) ||\n              origin.dependencies!.contains(listenable)");
          let queue = T$.ListQueueOfProviderElementBase().from(this[_providerDependents]);
          while (queue[$isNotEmpty]) {
            let current = queue.removeFirst();
            queue.addAll(current[_providerDependents]);
            if (current.origin._equals(listenable)) {
              dart.throw(new framework.CircularDependencyError.__());
            }
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 593, 7, "() {\n        if (listenable is! ProviderBase) return true;\n\n        assert(\n          listenable._origin != origin,\n          'A provider cannot depend on itself',\n        );\n\n        assert(\n          provider != origin ||\n              // Families are allowed to depend on themselves with different parameters.\n              (origin.from != null && listenable.from == origin.from) ||\n              origin.dependencies == null ||\n              origin.dependencies!.contains(listenable.from) ||\n              origin.dependencies!.contains(listenable),\n          'The provider $origin tried to read $listenable, but it specified a '\n          \"'dependendencies' list yet that list does not contain $listenable.\\n\\n\"\n          \"To fix, add $listenable to $origin's 'dependencies' parameter\",\n        );\n\n        final queue = Queue<ProviderElementBase>.from(_providerDependents);\n\n        while (queue.isNotEmpty) {\n          final current = queue.removeFirst();\n          queue.addAll(current._providerDependents);\n\n          if (current.origin == listenable) {\n            throw CircularDependencyError._();\n          }\n        }\n\n        return true;\n      }()");
        return true;
      }
      [_assertNotOutdated]() {
        if (!(this[_didChangeDependency] === false)) dart.assertFailed("Cannot use ref functions after the dependency of a provider changed but before the provider rebuilt", I[2], 633, 7, "_didChangeDependency == false");
      }
      refresh(T, provider) {
        this[_assertNotOutdated]();
        return this[_container].refresh(T, provider);
      }
      read(T, provider) {
        this[_assertNotOutdated]();
        if (!!framework._debugIsRunningSelector) dart.assertFailed("Cannot call ref.read inside a selector", I[2], 647, 12, "!_debugIsRunningSelector");
        if (!this[_debugAssertCanDependOn](provider)) dart.assertFailed("", I[2], 648, 12, "_debugAssertCanDependOn(provider)");
        return this[_container].read(T, provider);
      }
      watch(T, listenable) {
        this[_assertNotOutdated]();
        if (!!framework._debugIsRunningSelector) dart.assertFailed("Cannot call ref.watch inside a selector", I[2], 655, 12, "!_debugIsRunningSelector");
        if (!framework.ProviderBase$(T).is(listenable)) {
          let sub = this.listen(T, listenable, dart.fn((prev, value) => this[_markDependencyChanged](), dart.fnType(dart.void, [dart.nullable(T), T])), {onError: dart.fn((err, stack) => this[_markDependencyChanged](), T$.ObjectAndStackTraceTovoid()), onDependencyMayHaveChanged: dart.bind(this, _markDependencyMayHaveChanged)});
          return sub.read();
        }
        if (!this[_debugAssertCanDependOn](listenable)) dart.assertFailed("", I[2], 668, 12, "_debugAssertCanDependOn(listenable)");
        let element = this[_container].readProviderElement(T, listenable);
        this[_dependencies][$putIfAbsent](element, dart.fn(() => {
          let t1, t1$;
          let previousSub = (t1 = this[_previousDependencies], t1 == null ? null : t1[$remove](element));
          if (previousSub != null) {
            return previousSub;
          }
          if (!dart.fn(() => {
            element.flush();
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[2], 678, 9, "() {\n          // Flushing the provider before adding a new dependency\n          // as otherwise this could cause false positives with certain asserts.\n          // It's done only in debug mode since `readSelf` will flush the value\n          // again anyway, and the only value of this flush is to not break asserts.\n          element.flush();\n          return true;\n        }()");
          t1$ = element;
          (() => {
            t1$[_onListen]();
            t1$[_providerDependents][$add](this);
            return t1$;
          })();
          return new core.Object.new();
        }, T$.VoidToObject()));
        return element.readSelf();
      }
      readProviderElement(T, provider) {
        return this[_container].readProviderElement(T, provider);
      }
      [_listenElement](T, element, opts) {
        let listener = opts && 'listener' in opts ? opts.listener : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let sub = new (framework._ProviderListener$(T)).__({listenedElement: element, dependentElement: this, listener: dart.fn((prev, value) => listener(dart.nullable(T).as(prev), T.as(value)), T$.ObjectNAndObjectNTovoid()), onError: onError});
        element[_subscribers][$add](sub);
        this[_listenedProviderSubscriptions][$add](sub);
        return sub;
      }
      listen(T, listenable, listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : false;
        let onDependencyMayHaveChanged = opts && 'onDependencyMayHaveChanged' in opts ? opts.onDependencyMayHaveChanged : null;
        this[_assertNotOutdated]();
        if (!!framework._debugIsRunningSelector) dart.assertFailed("Cannot call ref.read inside a selector", I[2], 733, 12, "!_debugIsRunningSelector");
        if (!this[_debugAssertCanDependOn](listenable)) dart.assertFailed("", I[2], 734, 12, "_debugAssertCanDependOn(listenable)");
        return listenable.addListener(this, listener, {fireImmediately: fireImmediately, onError: onError, onDependencyMayHaveChanged: onDependencyMayHaveChanged});
      }
      listenSelf(listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        this[_onChangeSelfListeners] == null ? this[_onChangeSelfListeners] = __t$JSArrayOfStateNAndStateTovoid().of([]) : null;
        dart.nullCheck(this[_onChangeSelfListeners])[$add](listener);
        if (onError != null) {
          this[_onErrorSelfListeners] == null ? this[_onErrorSelfListeners] = T$.JSArrayOfObjectAndStackTraceTovoid().of([]) : null;
          dart.nullCheck(this[_onErrorSelfListeners])[$add](onError);
        }
      }
      readSelf() {
        this.flush();
        return this.requireState;
      }
      visitChildren(opts) {
        let elementVisitor = opts && 'elementVisitor' in opts ? opts.elementVisitor : null;
        let notifierVisitor = opts && 'notifierVisitor' in opts ? opts.notifierVisitor : null;
        for (let i = 0; i < this[_providerDependents][$length]; i = i + 1) {
          elementVisitor(this[_providerDependents][$_get](i));
        }
        for (let i = 0; i < this[_subscribers][$length]; i = i + 1) {
          elementVisitor(this[_subscribers][$_get](i).dependentElement);
        }
      }
      visitAncestors(visitor) {
        this[_dependencies][$keys][$forEach](visitor);
        for (let i = 0; i < this[_listenedProviderSubscriptions][$length]; i = i + 1) {
          visitor(this[_listenedProviderSubscriptions][$_get](i).listenedElement);
        }
      }
      dispose() {
        if (!dart.fn(() => {
          devtool.RiverpodBinding.debugInstance.providerListChangedFor({containerId: this.container[_debugId]});
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[2], 823, 7, "() {\n        RiverpodBinding.debugInstance\n            .providerListChangedFor(containerId: container._debugId);\n        return true;\n      }()");
        this.runOnDispose();
        for (let sub of this[_dependencies][$entries]) {
          sub.key[_providerDependents][$remove](this);
          sub.key[_onRemoveListener]();
        }
        this[_dependencies][$clear]();
        this[_externalDependents][$clear]();
      }
      [_onListen]() {
        let t1, t1$;
        t1 = this[_onAddListeners];
        t1 == null ? null : t1[$forEach](C[1] || CT.C1);
        if (this[_didCancelOnce] && !this.hasListeners) {
          t1$ = this[_onResumeListeners];
          t1$ == null ? null : t1$[$forEach](C[1] || CT.C1);
        }
      }
      [_onRemoveListener]() {
        let t1, t1$;
        t1 = this[_onRemoveListeners];
        t1 == null ? null : t1[$forEach](C[1] || CT.C1);
        if (!this.hasListeners) {
          this[_didCancelOnce] = true;
          t1$ = this[_onCancelListeners];
          t1$ == null ? null : t1$[$forEach](C[1] || CT.C1);
        }
        this.mayNeedDispose();
      }
      mayNeedDispose() {
      }
      onDispose(listener) {
        this[_assertNotOutdated]();
        if (!this[_mounted]) {
          dart.throw(new core.StateError.new("Cannot call onDispose after a provider was dispose"));
        }
        this[_onDisposeListeners] == null ? this[_onDisposeListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onDisposeListeners])[$add](listener);
      }
      runOnDispose() {
        let t1;
        if (!this[_mounted]) return;
        this[_mounted] = false;
        while (this[_listenedProviderSubscriptions][$isNotEmpty]) {
          this[_listenedProviderSubscriptions][$first].close();
        }
        t1 = this[_onDisposeListeners];
        t1 == null ? null : t1[$forEach](C[1] || CT.C1);
        for (let observer of this[_container][_observers]) {
          run_guarded.runBinaryGuarded(T$.ProviderBaseOfObjectN(), framework.ProviderContainer, dart.bind(observer, 'didDisposeProvider'), this[_origin], this[_container]);
        }
        this[_onDisposeListeners] = null;
        this[_onCancelListeners] = null;
        this[_onResumeListeners] = null;
        this[_onAddListeners] = null;
        this[_onRemoveListeners] = null;
        this[_onChangeSelfListeners] = null;
        this[_onErrorSelfListeners] = null;
        this[_didCancelOnce] = false;
      }
      onAddListener(cb) {
        this[_onAddListeners] == null ? this[_onAddListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onAddListeners])[$add](cb);
      }
      onRemoveListener(cb) {
        this[_onRemoveListeners] == null ? this[_onRemoveListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onRemoveListeners])[$add](cb);
      }
      onCancel(cb) {
        this[_onCancelListeners] == null ? this[_onCancelListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onCancelListeners])[$add](cb);
      }
      onResume(cb) {
        this[_onResumeListeners] == null ? this[_onResumeListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onResumeListeners])[$add](cb);
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(provider: " + dart.str(this.provider) + ", origin: " + dart.str(this.origin) + ")";
      }
    }
    (ProviderElementBase.new = function(_provider) {
      this[_debugCurrentCreateHash] = null;
      this[_debugSkipNotifyListenersAsserts] = false;
      this[__ProviderElementBase__origin] = null;
      this[__ProviderElementBase__container] = null;
      this[_externalDependents] = __t$JSArrayOf_ExternalProviderSubscriptionOfState().of([]);
      this[_listenedProviderSubscriptions] = T$.JSArrayOf_ProviderListener().of([]);
      this[_providerDependents] = T$.JSArrayOfProviderElementBase().of([]);
      this[_subscribers] = T$.JSArrayOf_ProviderListener().of([]);
      this[_dependencies] = new (T$.LinkedMapOfProviderElementBase$Object()).new();
      this[_previousDependencies] = null;
      this[_onDisposeListeners] = null;
      this[_onResumeListeners] = null;
      this[_onCancelListeners] = null;
      this[_onAddListeners] = null;
      this[_onRemoveListeners] = null;
      this[_onChangeSelfListeners] = null;
      this[_onErrorSelfListeners] = null;
      this[_mustRecomputeState] = false;
      this[_dependencyMayHaveChanged] = false;
      this[_didChangeDependency] = false;
      this[_didCancelOnce] = false;
      this[_mounted] = false;
      this[_debugDidSetState] = false;
      this[_didBuild] = false;
      this[_state] = null;
      this[_provider$] = _provider;
      ;
    }).prototype = ProviderElementBase.prototype;
    dart.addTypeTests(ProviderElementBase);
    ProviderElementBase.prototype[_is_ProviderElementBase_default] = true;
    dart.addTypeCaches(ProviderElementBase);
    ProviderElementBase[dart.implements] = () => [framework.Ref$(State), framework.Node];
    dart.setMethodSignature(ProviderElementBase, () => ({
      __proto__: dart.getMethods(ProviderElementBase.__proto__),
      setState: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      getState: dart.fnType(dart.nullable(result.Result$(State)), []),
      debugReassemble: dart.fnType(dart.void, []),
      mount: dart.fnType(dart.void, []),
      update: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      invalidate: dart.fnType(dart.void, [framework.ProviderOrFamily]),
      invalidateSelf: dart.fnType(dart.void, []),
      flush: dart.fnType(dart.void, []),
      [_maybeRebuildDependencies]: dart.fnType(dart.void, []),
      [_performBuild]: dart.fnType(dart.void, []),
      buildState: dart.fnType(dart.void, []),
      [_notifyListeners]: dart.fnType(dart.void, [result.Result$(State), dart.nullable(result.Result$(State))]),
      [_markDependencyChanged]: dart.fnType(dart.void, []),
      [_markDependencyMayHaveChanged]: dart.fnType(dart.void, []),
      [_debugAssertCanDependOn]: dart.fnType(core.bool, [framework.ProviderListenable]),
      [_assertNotOutdated]: dart.fnType(dart.void, []),
      refresh: dart.gFnType(T => [T, [framework.Refreshable$(T)]], T => [dart.nullable(core.Object)]),
      read: dart.gFnType(T => [T, [framework.ProviderListenable$(T)]], T => [dart.nullable(core.Object)]),
      watch: dart.gFnType(T => [T, [framework.ProviderListenable$(T)]], T => [dart.nullable(core.Object)]),
      readProviderElement: dart.gFnType(T => [framework.ProviderElementBase$(T), [framework.ProviderBase$(T)]], T => [dart.nullable(core.Object)]),
      [_listenElement]: dart.gFnType(T => [framework.ProviderSubscription$(T), [framework.ProviderElementBase$(T)], {}, {listener: dart.fnType(dart.void, [dart.nullable(T), T]), onError: dart.fnType(dart.void, [core.Object, core.StackTrace])}], T => [dart.nullable(core.Object)]),
      listen: dart.gFnType(T => [framework.ProviderSubscription$(T), [framework.ProviderListenable$(T), dart.fnType(dart.void, [dart.nullable(T), T])], {fireImmediately: core.bool, onDependencyMayHaveChanged: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {}], T => [dart.nullable(core.Object)]),
      listenSelf: dart.fnType(dart.void, [dart.fnType(dart.void, [dart.nullable(State), State])], {onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {}),
      readSelf: dart.fnType(State, []),
      visitChildren: dart.fnType(dart.void, [], {}, {elementVisitor: dart.fnType(dart.void, [framework.ProviderElementBase]), notifierVisitor: dart.fnType(dart.void, [listenable.ProxyElementValueNotifier])}),
      visitAncestors: dart.fnType(dart.void, [dart.fnType(dart.void, [framework.ProviderElementBase])]),
      dispose: dart.fnType(dart.void, []),
      [_onListen]: dart.fnType(dart.void, []),
      [_onRemoveListener]: dart.fnType(dart.void, []),
      mayNeedDispose: dart.fnType(dart.void, []),
      onDispose: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      runOnDispose: dart.fnType(dart.void, []),
      onAddListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onRemoveListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onCancel: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onResume: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
    }));
    dart.setGetterSignature(ProviderElementBase, () => ({
      __proto__: dart.getGetters(ProviderElementBase.__proto__),
      origin: framework.ProviderBase$(dart.nullable(core.Object)),
      [_origin]: framework.ProviderBase$(dart.nullable(core.Object)),
      provider: framework.ProviderBase$(State),
      container: framework.ProviderContainer,
      [_container]: framework.ProviderContainer,
      hasListeners: core.bool,
      mounted: core.bool,
      debugAssertDidSetStateEnabled: core.bool,
      requireState: State
    }));
    dart.setSetterSignature(ProviderElementBase, () => ({
      __proto__: dart.getSetters(ProviderElementBase.__proto__),
      [_origin]: framework.ProviderBase$(dart.nullable(core.Object)),
      [_container]: framework.ProviderContainer
    }));
    dart.setLibraryUri(ProviderElementBase, I[0]);
    dart.setFieldSignature(ProviderElementBase, () => ({
      __proto__: dart.getFields(ProviderElementBase.__proto__),
      [_debugCurrentCreateHash]: dart.fieldType(dart.nullable(core.String)),
      [_debugSkipNotifyListenersAsserts]: dart.fieldType(core.bool),
      [__ProviderElementBase__origin]: dart.fieldType(dart.nullable(framework.ProviderBase$(dart.nullable(core.Object)))),
      [_provider]: dart.fieldType(framework.ProviderBase$(State)),
      [__ProviderElementBase__container]: dart.fieldType(dart.nullable(framework.ProviderContainer)),
      [_externalDependents]: dart.finalFieldType(core.List$(framework._ExternalProviderSubscription$(State))),
      [_listenedProviderSubscriptions]: dart.finalFieldType(core.List$(framework._ProviderListener)),
      [_providerDependents]: dart.finalFieldType(core.List$(framework.ProviderElementBase)),
      [_subscribers]: dart.finalFieldType(core.List$(framework._ProviderListener)),
      [_dependencies]: dart.fieldType(collection.HashMap$(framework.ProviderElementBase, core.Object)),
      [_previousDependencies]: dart.fieldType(dart.nullable(collection.HashMap$(framework.ProviderElementBase, core.Object))),
      [_onDisposeListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onResumeListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onCancelListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onAddListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onRemoveListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onChangeSelfListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [dart.nullable(State), State])))),
      [_onErrorSelfListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [core.Object, core.StackTrace])))),
      [_mustRecomputeState]: dart.fieldType(core.bool),
      [_dependencyMayHaveChanged]: dart.fieldType(core.bool),
      [_didChangeDependency]: dart.fieldType(core.bool),
      [_didCancelOnce]: dart.fieldType(core.bool),
      [_mounted]: dart.fieldType(core.bool),
      [_debugDidSetState]: dart.fieldType(core.bool),
      [_didBuild]: dart.fieldType(core.bool),
      [_state]: dart.fieldType(dart.nullable(result.Result$(State)))
    }));
    dart.setStaticFieldSignature(ProviderElementBase, () => ['_debugCurrentlyBuildingElement']);
    dart.defineExtensionMethods(ProviderElementBase, ['toString']);
    return ProviderElementBase;
  });
  framework.ProviderElementBase = framework.ProviderElementBase$();
  dart.defineLazy(framework.ProviderElementBase, {
    /*framework.ProviderElementBase._debugCurrentlyBuildingElement*/get _debugCurrentlyBuildingElement() {
      return null;
    },
    set _debugCurrentlyBuildingElement(_) {}
  }, false);
  dart.addTypeTests(framework.ProviderElementBase, _is_ProviderElementBase_default);
  const _is_ValueProviderElement_default = Symbol('_is_ValueProviderElement_default');
  value_provider.ValueProviderElement$ = dart.generic(State => {
    var __t$ProviderBaseOfState = () => (__t$ProviderBaseOfState = dart.constFn(framework.ProviderBase$(State)))();
    var __t$ValueProviderOfState = () => (__t$ValueProviderOfState = dart.constFn(value_provider.ValueProvider$(State)))();
    var __t$ResultDataOfState = () => (__t$ResultDataOfState = dart.constFn(result.ResultData$(State)))();
    class ValueProviderElement extends framework.ProviderElementBase$(State) {
      get onChange() {
        return this[onChange];
      }
      set onChange(value) {
        this[onChange] = value;
      }
      static ['_#new#tearOff'](State, provider) {
        return new (value_provider.ValueProviderElement$(State)).new(provider);
      }
      update(newProvider) {
        let t0;
        __t$ProviderBaseOfState().as(newProvider);
        super.update(newProvider);
        let newValue = __t$ValueProviderOfState().as(this.provider)[_value$];
        let previousState = __t$ResultDataOfState().as(dart.nullCheck(this.getState()));
        if (!dart.equals(newValue, previousState.state)) {
          this.setState(newValue);
          t0 = this.onChange;
          t0 == null ? null : t0(newValue);
        }
      }
      create(opts) {
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        let provider = __t$ValueProviderOfState().as(this.provider);
        this.setState(provider[_value$]);
      }
      updateShouldNotify(previous, next) {
        State.as(previous);
        State.as(next);
        return true;
      }
    }
    (ValueProviderElement.new = function(provider) {
      this[onChange] = null;
      ValueProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = ValueProviderElement.prototype;
    dart.addTypeTests(ValueProviderElement);
    ValueProviderElement.prototype[_is_ValueProviderElement_default] = true;
    dart.addTypeCaches(ValueProviderElement);
    dart.setMethodSignature(ValueProviderElement, () => ({
      __proto__: dart.getMethods(ValueProviderElement.__proto__),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(ValueProviderElement, I[1]);
    dart.setFieldSignature(ValueProviderElement, () => ({
      __proto__: dart.getFields(ValueProviderElement.__proto__),
      onChange: dart.fieldType(dart.nullable(dart.fnType(dart.void, [State])))
    }));
    return ValueProviderElement;
  });
  value_provider.ValueProviderElement = value_provider.ValueProviderElement$();
  dart.addTypeTests(value_provider.ValueProviderElement, _is_ValueProviderElement_default);
  var dependencies$ = dart.privateName(state_provider, "_StateProviderBase.dependencies");
  const _is__StateProviderBase_default = Symbol('_is__StateProviderBase_default');
  state_provider._StateProviderBase$ = dart.generic(T => {
    class _StateProviderBase extends framework.ProviderBase$(T) {
      get dependencies() {
        return this[dependencies$];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
    }
    (_StateProviderBase.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[dependencies$] = dependencies;
      _StateProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = _StateProviderBase.prototype;
    dart.addTypeTests(_StateProviderBase);
    _StateProviderBase.prototype[_is__StateProviderBase_default] = true;
    dart.addTypeCaches(_StateProviderBase);
    dart.setLibraryUri(_StateProviderBase, I[3]);
    dart.setFieldSignature(_StateProviderBase, () => ({
      __proto__: dart.getFields(_StateProviderBase.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return _StateProviderBase;
  });
  state_provider._StateProviderBase = state_provider._StateProviderBase$();
  dart.addTypeTests(state_provider._StateProviderBase, _is__StateProviderBase_default);
  const _is_StateProviderRef_default = Symbol('_is_StateProviderRef_default');
  state_provider.StateProviderRef$ = dart.generic(State => {
    class StateProviderRef extends core.Object {}
    (StateProviderRef.new = function() {
      ;
    }).prototype = StateProviderRef.prototype;
    dart.addTypeTests(StateProviderRef);
    StateProviderRef.prototype[_is_StateProviderRef_default] = true;
    dart.addTypeCaches(StateProviderRef);
    StateProviderRef[dart.implements] = () => [framework.Ref$(State)];
    dart.setLibraryUri(StateProviderRef, I[3]);
    return StateProviderRef;
  });
  state_provider.StateProviderRef = state_provider.StateProviderRef$();
  dart.addTypeTests(state_provider.StateProviderRef, _is_StateProviderRef_default);
  const _is_AutoDisposeStateProviderRef_default = Symbol('_is_AutoDisposeStateProviderRef_default');
  state_provider.AutoDisposeStateProviderRef$ = dart.generic(State => {
    class AutoDisposeStateProviderRef extends state_provider.StateProviderRef$(State) {}
    (AutoDisposeStateProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeStateProviderRef.prototype;
    dart.addTypeTests(AutoDisposeStateProviderRef);
    AutoDisposeStateProviderRef.prototype[_is_AutoDisposeStateProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeStateProviderRef);
    AutoDisposeStateProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(State)];
    dart.setLibraryUri(AutoDisposeStateProviderRef, I[3]);
    return AutoDisposeStateProviderRef;
  });
  state_provider.AutoDisposeStateProviderRef = state_provider.AutoDisposeStateProviderRef$();
  dart.addTypeTests(state_provider.AutoDisposeStateProviderRef, _is_AutoDisposeStateProviderRef_default);
  var __AutoDisposeStateProvider_notifier = dart.privateName(state_provider, "_#AutoDisposeStateProvider#notifier");
  var __AutoDisposeStateProvider_state = dart.privateName(state_provider, "_#AutoDisposeStateProvider#state");
  var _createFn$ = dart.privateName(state_provider, "_createFn");
  var _create = dart.privateName(state_provider, "_create");
  const _is_AutoDisposeStateProvider_default = Symbol('_is_AutoDisposeStateProvider_default');
  state_provider.AutoDisposeStateProvider$ = dart.generic(T => {
    var __t$AutoDisposeStateProviderElementOfT = () => (__t$AutoDisposeStateProviderElementOfT = dart.constFn(state_provider.AutoDisposeStateProviderElement$(T)))();
    class AutoDisposeStateProvider extends state_provider._StateProviderBase$(T) {
      static ['_#new#tearOff'](T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (state_provider.AutoDisposeStateProvider$(T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create](ref) {
        let t1;
        t1 = ref;
        return this[_createFn$](t1);
      }
      createElement() {
        return new (__t$AutoDisposeStateProviderElementOfT()).__(this);
      }
      get notifier() {
        let t2, t1;
        t1 = this[__AutoDisposeStateProvider_notifier];
        return t1 == null ? (t2 = state_provider._notifier(T, this), this[__AutoDisposeStateProvider_notifier] == null ? this[__AutoDisposeStateProvider_notifier] = t2 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t1;
      }
      get state() {
        let t2, t1;
        t1 = this[__AutoDisposeStateProvider_state];
        return t1 == null ? (t2 = state_provider._state(T, this), this[__AutoDisposeStateProvider_state] == null ? this[__AutoDisposeStateProvider_state] = t2 : dart.throw(new _internal.LateError.fieldADI("state"))) : t1;
      }
    }
    (AutoDisposeStateProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeStateProvider_notifier] = null;
      this[__AutoDisposeStateProvider_state] = null;
      this[_createFn$] = _createFn;
      AutoDisposeStateProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeStateProvider.prototype;
    dart.addTypeTests(AutoDisposeStateProvider);
    AutoDisposeStateProvider.prototype[_is_AutoDisposeStateProvider_default] = true;
    dart.addTypeCaches(AutoDisposeStateProvider);
    dart.setMethodSignature(AutoDisposeStateProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeStateProvider.__proto__),
      [_create]: dart.fnType(T, [state_provider.AutoDisposeStateProviderElement$(T)]),
      createElement: dart.fnType(state_provider.AutoDisposeStateProviderElement$(T), [])
    }));
    dart.setGetterSignature(AutoDisposeStateProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeStateProvider.__proto__),
      notifier: framework.Refreshable$(state_controller.StateController$(T)),
      state: framework.Refreshable$(state_controller.StateController$(T))
    }));
    dart.setLibraryUri(AutoDisposeStateProvider, I[3]);
    dart.setFieldSignature(AutoDisposeStateProvider, () => ({
      __proto__: dart.getFields(AutoDisposeStateProvider.__proto__),
      [_createFn$]: dart.finalFieldType(dart.fnType(T, [state_provider.AutoDisposeStateProviderRef$(T)])),
      [__AutoDisposeStateProvider_notifier]: dart.fieldType(dart.nullable(framework.Refreshable$(state_controller.StateController$(T)))),
      [__AutoDisposeStateProvider_state]: dart.fieldType(dart.nullable(framework.Refreshable$(state_controller.StateController$(T))))
    }));
    dart.setStaticFieldSignature(AutoDisposeStateProvider, () => ['family']);
    return AutoDisposeStateProvider;
  });
  state_provider.AutoDisposeStateProvider = state_provider.AutoDisposeStateProvider$();
  dart.defineLazy(state_provider.AutoDisposeStateProvider, {
    /*state_provider.AutoDisposeStateProvider.family*/get family() {
      return C[2] || CT.C2;
    }
  }, false);
  dart.addTypeTests(state_provider.AutoDisposeStateProvider, _is_AutoDisposeStateProvider_default);
  var _keepAliveLinks = dart.privateName(framework, "_keepAliveLinks");
  var _maintainState = dart.privateName(framework, "_maintainState");
  var _controllerNotifier = dart.privateName(state_provider, "_controllerNotifier");
  var _stateNotifier = dart.privateName(state_provider, "_stateNotifier");
  var _removeListener = dart.privateName(state_provider, "_removeListener");
  const _is_StateProviderElement_default = Symbol('_is_StateProviderElement_default');
  state_provider.StateProviderElement$ = dart.generic(T => {
    var __t$StateControllerOfT = () => (__t$StateControllerOfT = dart.constFn(state_controller.StateController$(T)))();
    var __t$ProxyElementValueNotifierOfStateControllerOfT = () => (__t$ProxyElementValueNotifierOfStateControllerOfT = dart.constFn(listenable.ProxyElementValueNotifier$(__t$StateControllerOfT())))();
    var __t$_StateProviderBaseOfT = () => (__t$_StateProviderBaseOfT = dart.constFn(state_provider._StateProviderBase$(T)))();
    var __t$ResultDataOfStateControllerOfT = () => (__t$ResultDataOfStateControllerOfT = dart.constFn(result.ResultData$(__t$StateControllerOfT())))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class StateProviderElement extends framework.ProviderElementBase$(T) {
      static ['_#_#tearOff'](T, provider) {
        return new (state_provider.StateProviderElement$(T)).__(provider);
      }
      get controller() {
        return this[_controllerNotifier].value;
      }
      create(opts) {
        let t2, t1;
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        let provider = __t$_StateProviderBaseOfT().as(this.provider);
        let initialState = provider[_create](this);
        let controller = new (__t$StateControllerOfT()).new(initialState);
        this[_controllerNotifier].result = new (__t$ResultDataOfStateControllerOfT()).new(controller);
        this[_removeListener] = (t1 = controller, t2 = true, t1.addListener(dart.fn(state => {
          this[_stateNotifier].result = this[_controllerNotifier].result;
          this.setState(state);
        }, __t$TTovoid()), {fireImmediately: t2}));
      }
      updateShouldNotify(previous, next) {
        T.as(previous);
        T.as(next);
        return !core.identical(previous, next);
      }
      runOnDispose() {
        let t1, t2, t1$;
        super.runOnDispose();
        t1 = this[_removeListener];
        t1 == null ? null : t1();
        this[_removeListener] = null;
        t1$ = this[_controllerNotifier].result;
        t1$ == null ? null : (t2 = t1$.stateOrNull, t2 == null ? null : t2.dispose());
        this[_controllerNotifier].result = null;
      }
      visitChildren(opts) {
        let elementVisitor = opts && 'elementVisitor' in opts ? opts.elementVisitor : null;
        let notifierVisitor = opts && 'notifierVisitor' in opts ? opts.notifierVisitor : null;
        super.visitChildren({elementVisitor: elementVisitor, notifierVisitor: notifierVisitor});
        notifierVisitor(this[_stateNotifier]);
        notifierVisitor(this[_controllerNotifier]);
      }
    }
    (StateProviderElement.__ = function(provider) {
      this[_controllerNotifier] = new (__t$ProxyElementValueNotifierOfStateControllerOfT()).new();
      this[_stateNotifier] = new (__t$ProxyElementValueNotifierOfStateControllerOfT()).new();
      this[_removeListener] = null;
      StateProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = StateProviderElement.prototype;
    dart.addTypeTests(StateProviderElement);
    StateProviderElement.prototype[_is_StateProviderElement_default] = true;
    dart.addTypeCaches(StateProviderElement);
    StateProviderElement[dart.implements] = () => [state_provider.StateProviderRef$(T)];
    dart.setMethodSignature(StateProviderElement, () => ({
      __proto__: dart.getMethods(StateProviderElement.__proto__),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(StateProviderElement, () => ({
      __proto__: dart.getGetters(StateProviderElement.__proto__),
      controller: state_controller.StateController$(T)
    }));
    dart.setLibraryUri(StateProviderElement, I[3]);
    dart.setFieldSignature(StateProviderElement, () => ({
      __proto__: dart.getFields(StateProviderElement.__proto__),
      [_controllerNotifier]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(state_controller.StateController$(T))),
      [_stateNotifier]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(state_controller.StateController$(T))),
      [_removeListener]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [])))
    }));
    return StateProviderElement;
  });
  state_provider.StateProviderElement = state_provider.StateProviderElement$();
  dart.addTypeTests(state_provider.StateProviderElement, _is_StateProviderElement_default);
  const _is_AutoDisposeProviderElementMixin_default = Symbol('_is_AutoDisposeProviderElementMixin_default');
  framework.AutoDisposeProviderElementMixin$ = dart.generic(State => {
    class AutoDisposeProviderElementMixin extends framework.ProviderElementBase$(State) {}
    AutoDisposeProviderElementMixin[dart.mixinOn] = ProviderElementBase => class AutoDisposeProviderElementMixin extends ProviderElementBase {
      get maintainState() {
        return this[_maintainState];
      }
      set maintainState(value) {
        this[_maintainState] = value;
        if (!value) this.mayNeedDispose();
      }
      keepAlive() {
        let t1;
        let links = (t1 = this[_keepAliveLinks], t1 == null ? this[_keepAliveLinks] = T$.JSArrayOfKeepAliveLink().of([]) : t1);
        let link = null;
        function link$35get() {
          let t2;
          t2 = link;
          return t2 == null ? dart.throw(new _internal.LateError.localNI("link")) : t2;
        }
        dart.fn(link$35get, T$.VoidToKeepAliveLink());
        function link$35set(link$35param) {
          return link = link$35param;
        }
        dart.fn(link$35set, T$.KeepAliveLinkTodynamic());
        link$35set(new framework.KeepAliveLink.__(dart.fn(() => {
          if (links[$remove](link$35get())) {
            if (links[$isEmpty]) this.mayNeedDispose();
          }
        }, T$.VoidTovoid())));
        links[$add](link$35get());
        return link$35get();
      }
      mayNeedDispose() {
        let links = this[_keepAliveLinks];
        if (!this.maintainState && !this.hasListeners && (links == null || links[$isEmpty])) {
          this[_container][_scheduler].scheduleProviderDispose(this);
        }
      }
      runOnDispose() {
        let t4;
        t4 = this[_keepAliveLinks];
        t4 == null ? null : t4[$clear]();
        super.runOnDispose();
        if (!(this[_keepAliveLinks] == null || dart.nullCheck(this[_keepAliveLinks])[$isEmpty])) dart.assertFailed("Cannot call keepAlive() within onDispose listeners", I[4], 49, 7, "_keepAliveLinks == null || _keepAliveLinks!.isEmpty");
      }
    };
    (AutoDisposeProviderElementMixin[dart.mixinNew] = function() {
      this[_keepAliveLinks] = null;
      this[_maintainState] = false;
    }).prototype = AutoDisposeProviderElementMixin.prototype;
    dart.addTypeTests(AutoDisposeProviderElementMixin);
    AutoDisposeProviderElementMixin.prototype[_is_AutoDisposeProviderElementMixin_default] = true;
    dart.addTypeCaches(AutoDisposeProviderElementMixin);
    AutoDisposeProviderElementMixin[dart.implements] = () => [framework.AutoDisposeRef$(State), framework.ProviderElementBase$(State)];
    dart.setMethodSignature(AutoDisposeProviderElementMixin, () => ({
      __proto__: dart.getMethods(AutoDisposeProviderElementMixin.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeProviderElementMixin, () => ({
      __proto__: dart.getGetters(AutoDisposeProviderElementMixin.__proto__),
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeProviderElementMixin, () => ({
      __proto__: dart.getSetters(AutoDisposeProviderElementMixin.__proto__),
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeProviderElementMixin, I[0]);
    dart.setFieldSignature(AutoDisposeProviderElementMixin, () => ({
      __proto__: dart.getFields(AutoDisposeProviderElementMixin.__proto__),
      [_keepAliveLinks]: dart.fieldType(dart.nullable(core.List$(framework.KeepAliveLink))),
      [_maintainState]: dart.fieldType(core.bool)
    }));
    return AutoDisposeProviderElementMixin;
  });
  framework.AutoDisposeProviderElementMixin = framework.AutoDisposeProviderElementMixin$();
  dart.addTypeTests(framework.AutoDisposeProviderElementMixin, _is_AutoDisposeProviderElementMixin_default);
  const _is_AutoDisposeStateProviderElement_default = Symbol('_is_AutoDisposeStateProviderElement_default');
  state_provider.AutoDisposeStateProviderElement$ = dart.generic(T => {
    const StateProviderElement_AutoDisposeProviderElementMixin$36 = class StateProviderElement_AutoDisposeProviderElementMixin extends state_provider.StateProviderElement$(T) {};
    (StateProviderElement_AutoDisposeProviderElementMixin$36.__ = function(provider) {
      framework.AutoDisposeProviderElementMixin$(T)[dart.mixinNew].call(this);
      StateProviderElement_AutoDisposeProviderElementMixin$36.__proto__.__.call(this, provider);
    }).prototype = StateProviderElement_AutoDisposeProviderElementMixin$36.prototype;
    dart.applyMixin(StateProviderElement_AutoDisposeProviderElementMixin$36, framework.AutoDisposeProviderElementMixin$(T));
    class AutoDisposeStateProviderElement extends StateProviderElement_AutoDisposeProviderElementMixin$36 {
      static ['_#_#tearOff'](T, provider) {
        return new (state_provider.AutoDisposeStateProviderElement$(T)).__(provider);
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
    (AutoDisposeStateProviderElement.__ = function(provider) {
      AutoDisposeStateProviderElement.__proto__.__.call(this, provider);
      ;
    }).prototype = AutoDisposeStateProviderElement.prototype;
    dart.addTypeTests(AutoDisposeStateProviderElement);
    AutoDisposeStateProviderElement.prototype[_is_AutoDisposeStateProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeStateProviderElement);
    AutoDisposeStateProviderElement[dart.implements] = () => [state_provider.AutoDisposeStateProviderRef$(T)];
    dart.setMethodSignature(AutoDisposeStateProviderElement, () => ({
      __proto__: dart.getMethods(AutoDisposeStateProviderElement.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeStateProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeStateProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeStateProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeStateProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeStateProviderElement, I[3]);
    return AutoDisposeStateProviderElement;
  });
  state_provider.AutoDisposeStateProviderElement = state_provider.AutoDisposeStateProviderElement$();
  dart.addTypeTests(state_provider.AutoDisposeStateProviderElement, _is_AutoDisposeStateProviderElement_default);
  var name$0 = dart.privateName(framework, "AutoDisposeFamilyBase.name");
  var dependencies$0 = dart.privateName(framework, "AutoDisposeFamilyBase.dependencies");
  var __AutoDisposeFamilyBase_allTransitiveDependencies = dart.privateName(framework, "_#AutoDisposeFamilyBase#allTransitiveDependencies");
  var __AutoDisposeFamilyBase_allTransitiveDependencies_isSet = dart.privateName(framework, "_#AutoDisposeFamilyBase#allTransitiveDependencies#isSet");
  var _createFn$0 = dart.privateName(framework, "_createFn");
  var _providerFactory = dart.privateName(framework, "_providerFactory");
  const _is_Family_default = Symbol('_is_Family_default');
  framework.Family$ = dart.generic(State => {
    class Family extends framework.ProviderOrFamily {
      get from() {
        return null;
      }
      get overriddenFamily() {
        return this;
      }
    }
    (Family.new = function() {
      Family.__proto__.new.call(this);
      ;
    }).prototype = Family.prototype;
    dart.addTypeTests(Family);
    Family.prototype[_is_Family_default] = true;
    dart.addTypeCaches(Family);
    Family[dart.implements] = () => [framework.FamilyOverride$(State)];
    dart.setGetterSignature(Family, () => ({
      __proto__: dart.getGetters(Family.__proto__),
      from: dart.nullable(framework.Family$(dart.nullable(core.Object))),
      overriddenFamily: framework.Family$(State)
    }));
    dart.setLibraryUri(Family, I[0]);
    return Family;
  });
  framework.Family = framework.Family$();
  dart.addTypeTests(framework.Family, _is_Family_default);
  const _is__FamilyMixin_default = Symbol('_is__FamilyMixin_default');
  framework._FamilyMixin$ = dart.generic((State, Arg, FamilyProvider) => {
    var __t$_FamilyOverrideOfState$Arg$FamilyProvider = () => (__t$_FamilyOverrideOfState$Arg$FamilyProvider = dart.constFn(framework._FamilyOverride$(State, Arg, FamilyProvider)))();
    var __t$ProviderBaseOfState = () => (__t$ProviderBaseOfState = dart.constFn(framework.ProviderBase$(State)))();
    var __t$ArgToFamilyProvider = () => (__t$ArgToFamilyProvider = dart.constFn(dart.fnType(FamilyProvider, [Arg])))();
    class _FamilyMixin extends framework.Family$(State) {}
    _FamilyMixin[dart.mixinOn] = Family => class _FamilyMixin extends Family {
      overrideWithProvider(override) {
        __t$ArgToFamilyProvider().as(override);
        return new (__t$_FamilyOverrideOfState$Arg$FamilyProvider()).new(this, override);
      }
      getProviderOverride(provider) {
        __t$ProviderBaseOfState().as(provider);
        return this.call(Arg.as(provider.argument));
      }
    };
    dart.addTypeTests(_FamilyMixin);
    _FamilyMixin.prototype[_is__FamilyMixin_default] = true;
    dart.addTypeCaches(_FamilyMixin);
    _FamilyMixin[dart.implements] = () => [framework.Family$(State)];
    dart.setMethodSignature(_FamilyMixin, () => ({
      __proto__: dart.getMethods(_FamilyMixin.__proto__),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)]),
      getProviderOverride: dart.fnType(framework.ProviderBase$(State), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_FamilyMixin, I[0]);
    return _FamilyMixin;
  });
  framework._FamilyMixin = framework._FamilyMixin$();
  dart.addTypeTests(framework._FamilyMixin, _is__FamilyMixin_default);
  const _is_AutoDisposeFamilyBase_default = Symbol('_is_AutoDisposeFamilyBase_default');
  framework.AutoDisposeFamilyBase$ = dart.generic((RefT, R, Arg, Created, ProviderT) => {
    var __t$RefTToCreated = () => (__t$RefTToCreated = dart.constFn(dart.fnType(Created, [RefT])))();
    const Family__FamilyMixin$36 = class Family__FamilyMixin extends framework.Family$(R) {};
    (Family__FamilyMixin$36.new = function() {
      Family__FamilyMixin$36.__proto__.new.call(this);
    }).prototype = Family__FamilyMixin$36.prototype;
    dart.applyMixin(Family__FamilyMixin$36, framework._FamilyMixin$(R, Arg, ProviderT));
    class AutoDisposeFamilyBase extends Family__FamilyMixin$36 {
      get name() {
        return this[name$0];
      }
      set name(value) {
        super.name = value;
      }
      get dependencies() {
        return this[dependencies$0];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](RefT, R, Arg, Created, ProviderT, _createFn, opts) {
        let providerFactory = opts && 'providerFactory' in opts ? opts.providerFactory : null;
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (framework.AutoDisposeFamilyBase$(RefT, R, Arg, Created, ProviderT)).new(_createFn, {providerFactory: providerFactory, name: name, dependencies: dependencies});
      }
      call(argument) {
        let t6, t5, t4;
        Arg.as(argument);
        t4 = this.name;
        t5 = argument;
        t6 = this.dependencies;
        return this[_providerFactory](dart.fn(ref => {
          let t5, t4;
          t4 = ref;
          t5 = argument;
          return this[_createFn$0](t4, t5);
        }, __t$RefTToCreated()), {name: t4, from: this, argument: t5, dependencies: t6});
      }
      get allTransitiveDependencies() {
        if (!this[__AutoDisposeFamilyBase_allTransitiveDependencies_isSet]) {
          let t4 = this.dependencies == null ? null : framework._allTransitiveDependencies(dart.nullCheck(this.dependencies));
          if (this[__AutoDisposeFamilyBase_allTransitiveDependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("allTransitiveDependencies"));
          this[__AutoDisposeFamilyBase_allTransitiveDependencies] = t4;
          this[__AutoDisposeFamilyBase_allTransitiveDependencies_isSet] = true;
        }
        return this[__AutoDisposeFamilyBase_allTransitiveDependencies];
      }
    }
    (AutoDisposeFamilyBase.new = function(_createFn, opts) {
      let providerFactory = opts && 'providerFactory' in opts ? opts.providerFactory : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[__AutoDisposeFamilyBase_allTransitiveDependencies] = null;
      this[__AutoDisposeFamilyBase_allTransitiveDependencies_isSet] = false;
      this[_createFn$0] = _createFn;
      this[name$0] = name;
      this[dependencies$0] = dependencies;
      this[_providerFactory] = providerFactory;
      AutoDisposeFamilyBase.__proto__.new.call(this);
      ;
    }).prototype = AutoDisposeFamilyBase.prototype;
    dart.addTypeTests(AutoDisposeFamilyBase);
    AutoDisposeFamilyBase.prototype[_is_AutoDisposeFamilyBase_default] = true;
    dart.addTypeCaches(AutoDisposeFamilyBase);
    dart.setMethodSignature(AutoDisposeFamilyBase, () => ({
      __proto__: dart.getMethods(AutoDisposeFamilyBase.__proto__),
      call: dart.fnType(ProviderT, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AutoDisposeFamilyBase, () => ({
      __proto__: dart.getGetters(AutoDisposeFamilyBase.__proto__),
      allTransitiveDependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(AutoDisposeFamilyBase, I[0]);
    dart.setFieldSignature(AutoDisposeFamilyBase, () => ({
      __proto__: dart.getFields(AutoDisposeFamilyBase.__proto__),
      [_providerFactory]: dart.finalFieldType(dart.fnType(ProviderT, [dart.fnType(Created, [RefT])], {argument: dart.nullable(core.Object), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), from: framework.Family, name: dart.nullable(core.String)}, {})),
      [_createFn$0]: dart.finalFieldType(dart.fnType(Created, [RefT, Arg])),
      name: dart.finalFieldType(dart.nullable(core.String)),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AutoDisposeFamilyBase_allTransitiveDependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AutoDisposeFamilyBase_allTransitiveDependencies_isSet]: dart.fieldType(core.bool)
    }));
    return AutoDisposeFamilyBase;
  });
  framework.AutoDisposeFamilyBase = framework.AutoDisposeFamilyBase$();
  dart.addTypeTests(framework.AutoDisposeFamilyBase, _is_AutoDisposeFamilyBase_default);
  const _is_AutoDisposeStateProviderFamily_default = Symbol('_is_AutoDisposeStateProviderFamily_default');
  state_provider.AutoDisposeStateProviderFamily$ = dart.generic((R, Arg) => {
    class AutoDisposeStateProviderFamily extends framework.AutoDisposeFamilyBase$(state_provider.AutoDisposeStateProviderRef$(R), R, Arg, R, state_provider.AutoDisposeStateProvider$(R)) {
      static ['_#new#tearOff'](R, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (state_provider.AutoDisposeStateProviderFamily$(R, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AutoDisposeStateProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AutoDisposeStateProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[3] || CT.C3, R), name: name, dependencies: dependencies});
      ;
    }).prototype = AutoDisposeStateProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeStateProviderFamily);
    AutoDisposeStateProviderFamily.prototype[_is_AutoDisposeStateProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeStateProviderFamily);
    dart.setLibraryUri(AutoDisposeStateProviderFamily, I[3]);
    return AutoDisposeStateProviderFamily;
  });
  state_provider.AutoDisposeStateProviderFamily = state_provider.AutoDisposeStateProviderFamily$();
  dart.addTypeTests(state_provider.AutoDisposeStateProviderFamily, _is_AutoDisposeStateProviderFamily_default);
  var __StateProvider_notifier = dart.privateName(state_provider, "_#StateProvider#notifier");
  var __StateProvider_state = dart.privateName(state_provider, "_#StateProvider#state");
  const _is_StateProvider_default = Symbol('_is_StateProvider_default');
  state_provider.StateProvider$ = dart.generic(T => {
    var __t$StateProviderElementOfT = () => (__t$StateProviderElementOfT = dart.constFn(state_provider.StateProviderElement$(T)))();
    const _StateProviderBase_AlwaysAliveProviderBase$36 = class _StateProviderBase_AlwaysAliveProviderBase extends state_provider._StateProviderBase$(T) {};
    (_StateProviderBase_AlwaysAliveProviderBase$36.new = function(opts) {
      _StateProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, opts);
    }).prototype = _StateProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(_StateProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(T));
    class StateProvider extends _StateProviderBase_AlwaysAliveProviderBase$36 {
      static ['_#new#tearOff'](T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (state_provider.StateProvider$(T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create](ref) {
        let t5;
        t5 = ref;
        return this[_createFn$](t5);
      }
      createElement() {
        return new (__t$StateProviderElementOfT()).__(this);
      }
      get notifier() {
        let t6, t5;
        t5 = this[__StateProvider_notifier];
        return t5 == null ? (t6 = state_provider._notifier(T, this), this[__StateProvider_notifier] == null ? this[__StateProvider_notifier] = t6 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t5;
      }
      get state() {
        let t6, t5;
        t5 = this[__StateProvider_state];
        return t5 == null ? (t6 = state_provider._state(T, this), this[__StateProvider_state] == null ? this[__StateProvider_state] = t6 : dart.throw(new _internal.LateError.fieldADI("state"))) : t5;
      }
    }
    (StateProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__StateProvider_notifier] = null;
      this[__StateProvider_state] = null;
      this[_createFn$] = _createFn;
      StateProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = StateProvider.prototype;
    dart.addTypeTests(StateProvider);
    StateProvider.prototype[_is_StateProvider_default] = true;
    dart.addTypeCaches(StateProvider);
    dart.setMethodSignature(StateProvider, () => ({
      __proto__: dart.getMethods(StateProvider.__proto__),
      [_create]: dart.fnType(T, [state_provider.StateProviderElement$(T)]),
      createElement: dart.fnType(state_provider.StateProviderElement$(T), [])
    }));
    dart.setGetterSignature(StateProvider, () => ({
      __proto__: dart.getGetters(StateProvider.__proto__),
      notifier: framework.AlwaysAliveRefreshable$(state_controller.StateController$(T)),
      state: framework.AlwaysAliveRefreshable$(state_controller.StateController$(T))
    }));
    dart.setLibraryUri(StateProvider, I[3]);
    dart.setFieldSignature(StateProvider, () => ({
      __proto__: dart.getFields(StateProvider.__proto__),
      [_createFn$]: dart.finalFieldType(dart.fnType(T, [state_provider.StateProviderRef$(T)])),
      [__StateProvider_notifier]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(state_controller.StateController$(T)))),
      [__StateProvider_state]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(state_controller.StateController$(T))))
    }));
    dart.setStaticFieldSignature(StateProvider, () => ['autoDispose', 'family']);
    return StateProvider;
  });
  state_provider.StateProvider = state_provider.StateProvider$();
  dart.defineLazy(state_provider.StateProvider, {
    /*state_provider.StateProvider.autoDispose*/get autoDispose() {
      return C[4] || CT.C4;
    },
    /*state_provider.StateProvider.family*/get family() {
      return C[5] || CT.C5;
    }
  }, false);
  dart.addTypeTests(state_provider.StateProvider, _is_StateProvider_default);
  var name$1 = dart.privateName(framework, "FamilyBase.name");
  var dependencies$1 = dart.privateName(framework, "FamilyBase.dependencies");
  var __FamilyBase_allTransitiveDependencies = dart.privateName(framework, "_#FamilyBase#allTransitiveDependencies");
  var __FamilyBase_allTransitiveDependencies_isSet = dart.privateName(framework, "_#FamilyBase#allTransitiveDependencies#isSet");
  const _is_FamilyBase_default = Symbol('_is_FamilyBase_default');
  framework.FamilyBase$ = dart.generic((RefT, R, Arg, Created, ProviderT) => {
    var __t$RefTToCreated = () => (__t$RefTToCreated = dart.constFn(dart.fnType(Created, [RefT])))();
    const Family__FamilyMixin$36 = class Family__FamilyMixin extends framework.Family$(R) {};
    (Family__FamilyMixin$36.new = function() {
      Family__FamilyMixin$36.__proto__.new.call(this);
    }).prototype = Family__FamilyMixin$36.prototype;
    dart.applyMixin(Family__FamilyMixin$36, framework._FamilyMixin$(R, Arg, ProviderT));
    class FamilyBase extends Family__FamilyMixin$36 {
      get name() {
        return this[name$1];
      }
      set name(value) {
        super.name = value;
      }
      get dependencies() {
        return this[dependencies$1];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](RefT, R, Arg, Created, ProviderT, _createFn, opts) {
        let providerFactory = opts && 'providerFactory' in opts ? opts.providerFactory : null;
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (framework.FamilyBase$(RefT, R, Arg, Created, ProviderT)).new(_createFn, {providerFactory: providerFactory, name: name, dependencies: dependencies});
      }
      call(argument) {
        let t7, t6, t5;
        Arg.as(argument);
        t5 = this.name;
        t6 = argument;
        t7 = this.dependencies;
        return this[_providerFactory](dart.fn(ref => {
          let t6, t5;
          t5 = ref;
          t6 = argument;
          return this[_createFn$0](t5, t6);
        }, __t$RefTToCreated()), {name: t5, from: this, argument: t6, dependencies: t7});
      }
      get allTransitiveDependencies() {
        if (!this[__FamilyBase_allTransitiveDependencies_isSet]) {
          let t5 = this.dependencies == null ? null : framework._allTransitiveDependencies(dart.nullCheck(this.dependencies));
          if (this[__FamilyBase_allTransitiveDependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("allTransitiveDependencies"));
          this[__FamilyBase_allTransitiveDependencies] = t5;
          this[__FamilyBase_allTransitiveDependencies_isSet] = true;
        }
        return this[__FamilyBase_allTransitiveDependencies];
      }
    }
    (FamilyBase.new = function(_createFn, opts) {
      let providerFactory = opts && 'providerFactory' in opts ? opts.providerFactory : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[__FamilyBase_allTransitiveDependencies] = null;
      this[__FamilyBase_allTransitiveDependencies_isSet] = false;
      this[_createFn$0] = _createFn;
      this[name$1] = name;
      this[dependencies$1] = dependencies;
      this[_providerFactory] = providerFactory;
      FamilyBase.__proto__.new.call(this);
      ;
    }).prototype = FamilyBase.prototype;
    dart.addTypeTests(FamilyBase);
    FamilyBase.prototype[_is_FamilyBase_default] = true;
    dart.addTypeCaches(FamilyBase);
    dart.setMethodSignature(FamilyBase, () => ({
      __proto__: dart.getMethods(FamilyBase.__proto__),
      call: dart.fnType(ProviderT, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(FamilyBase, () => ({
      __proto__: dart.getGetters(FamilyBase.__proto__),
      allTransitiveDependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(FamilyBase, I[0]);
    dart.setFieldSignature(FamilyBase, () => ({
      __proto__: dart.getFields(FamilyBase.__proto__),
      [_providerFactory]: dart.finalFieldType(dart.fnType(ProviderT, [dart.fnType(Created, [RefT])], {argument: dart.nullable(core.Object), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), from: framework.Family, name: dart.nullable(core.String)}, {})),
      [_createFn$0]: dart.finalFieldType(dart.fnType(Created, [RefT, Arg])),
      name: dart.finalFieldType(dart.nullable(core.String)),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__FamilyBase_allTransitiveDependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__FamilyBase_allTransitiveDependencies_isSet]: dart.fieldType(core.bool)
    }));
    return FamilyBase;
  });
  framework.FamilyBase = framework.FamilyBase$();
  dart.addTypeTests(framework.FamilyBase, _is_FamilyBase_default);
  const _is_StateProviderFamily_default = Symbol('_is_StateProviderFamily_default');
  state_provider.StateProviderFamily$ = dart.generic((R, Arg) => {
    class StateProviderFamily extends framework.FamilyBase$(state_provider.StateProviderRef$(R), R, Arg, R, state_provider.StateProvider$(R)) {
      static ['_#new#tearOff'](R, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (state_provider.StateProviderFamily$(R, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (StateProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      StateProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[6] || CT.C6, R), name: name, dependencies: dependencies});
      ;
    }).prototype = StateProviderFamily.prototype;
    dart.addTypeTests(StateProviderFamily);
    StateProviderFamily.prototype[_is_StateProviderFamily_default] = true;
    dart.addTypeCaches(StateProviderFamily);
    dart.setLibraryUri(StateProviderFamily, I[3]);
    return StateProviderFamily;
  });
  state_provider.StateProviderFamily = state_provider.StateProviderFamily$();
  dart.addTypeTests(state_provider.StateProviderFamily, _is_StateProviderFamily_default);
  state_provider._notifier = function _notifier(T, that) {
    return new (framework.ProviderElementProxy$(T, state_controller.StateController$(T))).new(that, dart.fn(element => state_provider.StateProviderElement$(T).as(element)[_controllerNotifier], dart.fnType(listenable.ProxyElementValueNotifier$(state_controller.StateController$(T)), [framework.ProviderElementBase$(T)])));
  };
  state_provider._state = function _state$(T, that) {
    return new (framework.ProviderElementProxy$(T, state_controller.StateController$(T))).new(that, dart.fn(element => state_provider.StateProviderElement$(T).as(element)[_stateNotifier], dart.fnType(listenable.ProxyElementValueNotifier$(state_controller.StateController$(T)), [framework.ProviderElementBase$(T)])));
  };
  var _element = dart.privateName(notifier, "_element");
  const _is_NotifierBase_default = Symbol('_is_NotifierBase_default');
  notifier.NotifierBase$ = dart.generic(State => {
    class NotifierBase extends core.Object {
      get state() {
        this[_element].flush();
        return this[_element].requireState;
      }
      set state(value) {
        State.as(value);
        this[_element].setState(value);
      }
      updateShouldNotify(previous, next) {
        State.as(previous);
        State.as(next);
        return !core.identical(previous, next);
      }
    }
    (NotifierBase.new = function() {
      ;
    }).prototype = NotifierBase.prototype;
    dart.addTypeTests(NotifierBase);
    NotifierBase.prototype[_is_NotifierBase_default] = true;
    dart.addTypeCaches(NotifierBase);
    dart.setMethodSignature(NotifierBase, () => ({
      __proto__: dart.getMethods(NotifierBase.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(NotifierBase, () => ({
      __proto__: dart.getGetters(NotifierBase.__proto__),
      state: State
    }));
    dart.setSetterSignature(NotifierBase, () => ({
      __proto__: dart.getSetters(NotifierBase.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(NotifierBase, I[5]);
    return NotifierBase;
  });
  notifier.NotifierBase = notifier.NotifierBase$();
  dart.addTypeTests(notifier.NotifierBase, _is_NotifierBase_default);
  var dependencies$2 = dart.privateName(notifier, "NotifierProviderBase.dependencies");
  var _createNotifier$ = dart.privateName(notifier, "_createNotifier");
  const _is_NotifierProviderBase_default = Symbol('_is_NotifierProviderBase_default');
  notifier.NotifierProviderBase$ = dart.generic((NotifierT, T) => {
    class NotifierProviderBase extends framework.ProviderBase$(T) {
      get dependencies() {
        return this[dependencies$2];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
    }
    (NotifierProviderBase.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[_createNotifier$] = _createNotifier;
      this[dependencies$2] = dependencies;
      NotifierProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = NotifierProviderBase.prototype;
    dart.addTypeTests(NotifierProviderBase);
    NotifierProviderBase.prototype[_is_NotifierProviderBase_default] = true;
    dart.addTypeCaches(NotifierProviderBase);
    dart.setLibraryUri(NotifierProviderBase, I[5]);
    dart.setFieldSignature(NotifierProviderBase, () => ({
      __proto__: dart.getFields(NotifierProviderBase.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [_createNotifier$]: dart.finalFieldType(dart.fnType(NotifierT, []))
    }));
    return NotifierProviderBase;
  });
  notifier.NotifierProviderBase = notifier.NotifierProviderBase$();
  dart.addTypeTests(notifier.NotifierProviderBase, _is_NotifierProviderBase_default);
  var __BuildlessAutoDisposeNotifier__element = dart.privateName(notifier, "_#BuildlessAutoDisposeNotifier#_element");
  var _setElement = dart.privateName(notifier, "_setElement");
  const _is_BuildlessAutoDisposeNotifier_default = Symbol('_is_BuildlessAutoDisposeNotifier_default');
  notifier.BuildlessAutoDisposeNotifier$ = dart.generic(State => {
    var __t$NotifierBaseOfState = () => (__t$NotifierBaseOfState = dart.constFn(notifier.NotifierBase$(State)))();
    var __t$AutoDisposeNotifierProviderElementOfNotifierBaseOfState$State = () => (__t$AutoDisposeNotifierProviderElementOfNotifierBaseOfState$State = dart.constFn(notifier.AutoDisposeNotifierProviderElement$(__t$NotifierBaseOfState(), State)))();
    class BuildlessAutoDisposeNotifier extends notifier.NotifierBase$(State) {
      get [_element]() {
        let t6;
        t6 = this[__BuildlessAutoDisposeNotifier__element];
        return t6 == null ? dart.throw(new _internal.LateError.fieldNI("_element")) : t6;
      }
      set [_element](library$32package$58riverpod$47src$47notifier$47auto_dispose$46dart$58$58_element$35param) {
        if (this[__BuildlessAutoDisposeNotifier__element] == null)
          this[__BuildlessAutoDisposeNotifier__element] = library$32package$58riverpod$47src$47notifier$47auto_dispose$46dart$58$58_element$35param;
        else
          dart.throw(new _internal.LateError.fieldAI("_element"));
      }
      [_setElement](element) {
        this[_element] = __t$AutoDisposeNotifierProviderElementOfNotifierBaseOfState$State().as(element);
      }
      get ref() {
        return this[_element];
      }
    }
    (BuildlessAutoDisposeNotifier.new = function() {
      this[__BuildlessAutoDisposeNotifier__element] = null;
      ;
    }).prototype = BuildlessAutoDisposeNotifier.prototype;
    dart.addTypeTests(BuildlessAutoDisposeNotifier);
    BuildlessAutoDisposeNotifier.prototype[_is_BuildlessAutoDisposeNotifier_default] = true;
    dart.addTypeCaches(BuildlessAutoDisposeNotifier);
    dart.setMethodSignature(BuildlessAutoDisposeNotifier, () => ({
      __proto__: dart.getMethods(BuildlessAutoDisposeNotifier.__proto__),
      [_setElement]: dart.fnType(dart.void, [framework.ProviderElementBase$(State)])
    }));
    dart.setGetterSignature(BuildlessAutoDisposeNotifier, () => ({
      __proto__: dart.getGetters(BuildlessAutoDisposeNotifier.__proto__),
      [_element]: notifier.AutoDisposeNotifierProviderElement$(notifier.NotifierBase$(State), State),
      ref: notifier.AutoDisposeNotifierProviderRef$(State)
    }));
    dart.setSetterSignature(BuildlessAutoDisposeNotifier, () => ({
      __proto__: dart.getSetters(BuildlessAutoDisposeNotifier.__proto__),
      [_element]: notifier.AutoDisposeNotifierProviderElement$(notifier.NotifierBase$(State), State)
    }));
    dart.setLibraryUri(BuildlessAutoDisposeNotifier, I[5]);
    dart.setFieldSignature(BuildlessAutoDisposeNotifier, () => ({
      __proto__: dart.getFields(BuildlessAutoDisposeNotifier.__proto__),
      [__BuildlessAutoDisposeNotifier__element]: dart.fieldType(dart.nullable(notifier.AutoDisposeNotifierProviderElement$(notifier.NotifierBase$(State), State)))
    }));
    return BuildlessAutoDisposeNotifier;
  });
  notifier.BuildlessAutoDisposeNotifier = notifier.BuildlessAutoDisposeNotifier$();
  dart.addTypeTests(notifier.BuildlessAutoDisposeNotifier, _is_BuildlessAutoDisposeNotifier_default);
  const _is_AutoDisposeNotifier_default = Symbol('_is_AutoDisposeNotifier_default');
  notifier.AutoDisposeNotifier$ = dart.generic(State => {
    class AutoDisposeNotifier extends notifier.BuildlessAutoDisposeNotifier$(State) {}
    (AutoDisposeNotifier.new = function() {
      AutoDisposeNotifier.__proto__.new.call(this);
      ;
    }).prototype = AutoDisposeNotifier.prototype;
    dart.addTypeTests(AutoDisposeNotifier);
    AutoDisposeNotifier.prototype[_is_AutoDisposeNotifier_default] = true;
    dart.addTypeCaches(AutoDisposeNotifier);
    dart.setLibraryUri(AutoDisposeNotifier, I[5]);
    return AutoDisposeNotifier;
  });
  notifier.AutoDisposeNotifier = notifier.AutoDisposeNotifier$();
  dart.addTypeTests(notifier.AutoDisposeNotifier, _is_AutoDisposeNotifier_default);
  const _is_AutoDisposeNotifierProviderRef_default = Symbol('_is_AutoDisposeNotifierProviderRef_default');
  notifier.AutoDisposeNotifierProviderRef$ = dart.generic(T => {
    class AutoDisposeNotifierProviderRef extends core.Object {}
    (AutoDisposeNotifierProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeNotifierProviderRef.prototype;
    dart.addTypeTests(AutoDisposeNotifierProviderRef);
    AutoDisposeNotifierProviderRef.prototype[_is_AutoDisposeNotifierProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeNotifierProviderRef);
    AutoDisposeNotifierProviderRef[dart.implements] = () => [notifier.NotifierProviderRef$(T), framework.AutoDisposeRef$(T)];
    dart.setLibraryUri(AutoDisposeNotifierProviderRef, I[5]);
    return AutoDisposeNotifierProviderRef;
  });
  notifier.AutoDisposeNotifierProviderRef = notifier.AutoDisposeNotifierProviderRef$();
  dart.addTypeTests(notifier.AutoDisposeNotifierProviderRef, _is_AutoDisposeNotifierProviderRef_default);
  var __AutoDisposeNotifierProviderImpl_notifier = dart.privateName(notifier, "_#AutoDisposeNotifierProviderImpl#notifier");
  const _is_AutoDisposeNotifierProviderImpl_default = Symbol('_is_AutoDisposeNotifierProviderImpl_default');
  notifier.AutoDisposeNotifierProviderImpl$ = dart.generic((NotifierT, T) => {
    var __t$AutoDisposeNotifierProviderElementOfNotifierT$T = () => (__t$AutoDisposeNotifierProviderElementOfNotifierT$T = dart.constFn(notifier.AutoDisposeNotifierProviderElement$(NotifierT, T)))();
    var __t$NotifierBaseOfT = () => (__t$NotifierBaseOfT = dart.constFn(notifier.NotifierBase$(T)))();
    var __t$AutoDisposeNotifierOfT = () => (__t$AutoDisposeNotifierOfT = dart.constFn(notifier.AutoDisposeNotifier$(T)))();
    class AutoDisposeNotifierProviderImpl extends notifier.NotifierProviderBase$(NotifierT, T) {
      static ['_#new#tearOff'](NotifierT, T, _createNotifier, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (notifier.AutoDisposeNotifierProviderImpl$(NotifierT, T)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get notifier() {
        let t7, t6;
        t6 = this[__AutoDisposeNotifierProviderImpl_notifier];
        return t6 == null ? (t7 = notifier._notifier(NotifierT, T, this), this[__AutoDisposeNotifierProviderImpl_notifier] == null ? this[__AutoDisposeNotifierProviderImpl_notifier] = t7 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t6;
      }
      createElement() {
        return new (__t$AutoDisposeNotifierProviderElementOfNotifierT$T()).__(this);
      }
      runNotifierBuild(notifier) {
        __t$NotifierBaseOfT().as(notifier);
        return __t$AutoDisposeNotifierOfT().as(notifier).build();
      }
    }
    (AutoDisposeNotifierProviderImpl.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeNotifierProviderImpl_notifier] = null;
      AutoDisposeNotifierProviderImpl.__proto__.new.call(this, _createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeNotifierProviderImpl.prototype;
    dart.addTypeTests(AutoDisposeNotifierProviderImpl);
    AutoDisposeNotifierProviderImpl.prototype[_is_AutoDisposeNotifierProviderImpl_default] = true;
    dart.addTypeCaches(AutoDisposeNotifierProviderImpl);
    dart.setMethodSignature(AutoDisposeNotifierProviderImpl, () => ({
      __proto__: dart.getMethods(AutoDisposeNotifierProviderImpl.__proto__),
      createElement: dart.fnType(notifier.AutoDisposeNotifierProviderElement$(NotifierT, T), []),
      runNotifierBuild: dart.fnType(T, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AutoDisposeNotifierProviderImpl, () => ({
      __proto__: dart.getGetters(AutoDisposeNotifierProviderImpl.__proto__),
      notifier: framework.Refreshable$(NotifierT)
    }));
    dart.setLibraryUri(AutoDisposeNotifierProviderImpl, I[5]);
    dart.setFieldSignature(AutoDisposeNotifierProviderImpl, () => ({
      __proto__: dart.getFields(AutoDisposeNotifierProviderImpl.__proto__),
      [__AutoDisposeNotifierProviderImpl_notifier]: dart.fieldType(dart.nullable(framework.Refreshable$(NotifierT)))
    }));
    dart.setStaticFieldSignature(AutoDisposeNotifierProviderImpl, () => ['family']);
    return AutoDisposeNotifierProviderImpl;
  });
  notifier.AutoDisposeNotifierProviderImpl = notifier.AutoDisposeNotifierProviderImpl$();
  dart.defineLazy(notifier.AutoDisposeNotifierProviderImpl, {
    /*notifier.AutoDisposeNotifierProviderImpl.family*/get family() {
      return C[7] || CT.C7;
    }
  }, false);
  dart.addTypeTests(notifier.AutoDisposeNotifierProviderImpl, _is_AutoDisposeNotifierProviderImpl_default);
  var _notifierNotifier = dart.privateName(notifier, "_notifierNotifier");
  const _is_NotifierProviderElement_default = Symbol('_is_NotifierProviderElement_default');
  notifier.NotifierProviderElement$ = dart.generic((NotifierT, T) => {
    var __t$ProxyElementValueNotifierOfNotifierT = () => (__t$ProxyElementValueNotifierOfNotifierT = dart.constFn(listenable.ProxyElementValueNotifier$(NotifierT)))();
    var __t$NotifierProviderBaseOfNotifierT$T = () => (__t$NotifierProviderBaseOfNotifierT$T = dart.constFn(notifier.NotifierProviderBase$(NotifierT, T)))();
    var __t$VoidToNotifierT = () => (__t$VoidToNotifierT = dart.constFn(dart.fnType(NotifierT, [])))();
    class NotifierProviderElement extends framework.ProviderElementBase$(T) {
      static ['_#_#tearOff'](NotifierT, T, provider) {
        return new (notifier.NotifierProviderElement$(NotifierT, T)).__(provider);
      }
      create(opts) {
        let t7, t6;
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        let provider = __t$NotifierProviderBaseOfNotifierT$T().as(this.provider);
        let notifierResult = (t6 = this[_notifierNotifier], t7 = t6.result, t7 == null ? t6.result = result.Result.guard(NotifierT, dart.fn(() => {
          let t8;
          t8 = provider[_createNotifier$]();
          return (() => {
            t8[_setElement](this);
            return t8;
          })();
        }, __t$VoidToNotifierT())) : t7);
        let notifier = notifierResult.requireState;
        this.setState(provider.runNotifierBuild(notifier));
      }
      visitChildren(opts) {
        let elementVisitor = opts && 'elementVisitor' in opts ? opts.elementVisitor : null;
        let notifierVisitor = opts && 'notifierVisitor' in opts ? opts.notifierVisitor : null;
        super.visitChildren({elementVisitor: elementVisitor, notifierVisitor: notifierVisitor});
        notifierVisitor(this[_notifierNotifier]);
      }
      updateShouldNotify(previous, next) {
        let t7, t6, t6$;
        T.as(previous);
        T.as(next);
        t6$ = (t6 = this[_notifierNotifier].result, t6 == null ? null : (t7 = t6.stateOrNull, t7 == null ? null : t7.updateShouldNotify(previous, next)));
        return t6$ == null ? true : t6$;
      }
    }
    (NotifierProviderElement.__ = function(provider) {
      this[_notifierNotifier] = new (__t$ProxyElementValueNotifierOfNotifierT()).new();
      NotifierProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = NotifierProviderElement.prototype;
    dart.addTypeTests(NotifierProviderElement);
    NotifierProviderElement.prototype[_is_NotifierProviderElement_default] = true;
    dart.addTypeCaches(NotifierProviderElement);
    NotifierProviderElement[dart.implements] = () => [notifier.NotifierProviderRef$(T)];
    dart.setMethodSignature(NotifierProviderElement, () => ({
      __proto__: dart.getMethods(NotifierProviderElement.__proto__),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(NotifierProviderElement, I[5]);
    dart.setFieldSignature(NotifierProviderElement, () => ({
      __proto__: dart.getFields(NotifierProviderElement.__proto__),
      [_notifierNotifier]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(NotifierT))
    }));
    return NotifierProviderElement;
  });
  notifier.NotifierProviderElement = notifier.NotifierProviderElement$();
  dart.addTypeTests(notifier.NotifierProviderElement, _is_NotifierProviderElement_default);
  const _is_AutoDisposeNotifierProviderElement_default = Symbol('_is_AutoDisposeNotifierProviderElement_default');
  notifier.AutoDisposeNotifierProviderElement$ = dart.generic((NotifierT, T) => {
    const NotifierProviderElement_AutoDisposeProviderElementMixin$36 = class NotifierProviderElement_AutoDisposeProviderElementMixin extends notifier.NotifierProviderElement$(NotifierT, T) {};
    (NotifierProviderElement_AutoDisposeProviderElementMixin$36.__ = function(provider) {
      framework.AutoDisposeProviderElementMixin$(T)[dart.mixinNew].call(this);
      NotifierProviderElement_AutoDisposeProviderElementMixin$36.__proto__.__.call(this, provider);
    }).prototype = NotifierProviderElement_AutoDisposeProviderElementMixin$36.prototype;
    dart.applyMixin(NotifierProviderElement_AutoDisposeProviderElementMixin$36, framework.AutoDisposeProviderElementMixin$(T));
    class AutoDisposeNotifierProviderElement extends NotifierProviderElement_AutoDisposeProviderElementMixin$36 {
      static ['_#_#tearOff'](NotifierT, T, provider) {
        return new (notifier.AutoDisposeNotifierProviderElement$(NotifierT, T)).__(provider);
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
    (AutoDisposeNotifierProviderElement.__ = function(provider) {
      AutoDisposeNotifierProviderElement.__proto__.__.call(this, provider);
      ;
    }).prototype = AutoDisposeNotifierProviderElement.prototype;
    dart.addTypeTests(AutoDisposeNotifierProviderElement);
    AutoDisposeNotifierProviderElement.prototype[_is_AutoDisposeNotifierProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeNotifierProviderElement);
    AutoDisposeNotifierProviderElement[dart.implements] = () => [notifier.AutoDisposeNotifierProviderRef$(T)];
    dart.setMethodSignature(AutoDisposeNotifierProviderElement, () => ({
      __proto__: dart.getMethods(AutoDisposeNotifierProviderElement.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeNotifierProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeNotifierProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeNotifierProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeNotifierProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeNotifierProviderElement, I[5]);
    return AutoDisposeNotifierProviderElement;
  });
  notifier.AutoDisposeNotifierProviderElement = notifier.AutoDisposeNotifierProviderElement$();
  dart.addTypeTests(notifier.AutoDisposeNotifierProviderElement, _is_AutoDisposeNotifierProviderElement_default);
  var __AutoDisposeFamilyNotifier_arg = dart.privateName(notifier, "_#AutoDisposeFamilyNotifier#arg");
  var __AutoDisposeFamilyNotifier_arg_isSet = dart.privateName(notifier, "_#AutoDisposeFamilyNotifier#arg#isSet");
  const _is_AutoDisposeFamilyNotifier_default = Symbol('_is_AutoDisposeFamilyNotifier_default');
  notifier.AutoDisposeFamilyNotifier$ = dart.generic((State, Arg) => {
    class AutoDisposeFamilyNotifier extends notifier.BuildlessAutoDisposeNotifier$(State) {
      get arg() {
        let t6;
        return this[__AutoDisposeFamilyNotifier_arg_isSet] ? (t6 = this[__AutoDisposeFamilyNotifier_arg], t6) : dart.throw(new _internal.LateError.fieldNI("arg"));
      }
      set arg(arg$35param) {
        if (this[__AutoDisposeFamilyNotifier_arg_isSet])
          dart.throw(new _internal.LateError.fieldAI("arg"));
        else {
          this[__AutoDisposeFamilyNotifier_arg_isSet] = true;
          this[__AutoDisposeFamilyNotifier_arg] = arg$35param;
        }
      }
      [_setElement](element) {
        super[_setElement](element);
        this.arg = Arg.as(element.origin.argument);
      }
    }
    (AutoDisposeFamilyNotifier.new = function() {
      this[__AutoDisposeFamilyNotifier_arg] = null;
      this[__AutoDisposeFamilyNotifier_arg_isSet] = false;
      AutoDisposeFamilyNotifier.__proto__.new.call(this);
      ;
    }).prototype = AutoDisposeFamilyNotifier.prototype;
    dart.addTypeTests(AutoDisposeFamilyNotifier);
    AutoDisposeFamilyNotifier.prototype[_is_AutoDisposeFamilyNotifier_default] = true;
    dart.addTypeCaches(AutoDisposeFamilyNotifier);
    dart.setGetterSignature(AutoDisposeFamilyNotifier, () => ({
      __proto__: dart.getGetters(AutoDisposeFamilyNotifier.__proto__),
      arg: Arg
    }));
    dart.setSetterSignature(AutoDisposeFamilyNotifier, () => ({
      __proto__: dart.getSetters(AutoDisposeFamilyNotifier.__proto__),
      arg: Arg
    }));
    dart.setLibraryUri(AutoDisposeFamilyNotifier, I[5]);
    dart.setFieldSignature(AutoDisposeFamilyNotifier, () => ({
      __proto__: dart.getFields(AutoDisposeFamilyNotifier.__proto__),
      [__AutoDisposeFamilyNotifier_arg]: dart.fieldType(dart.nullable(Arg)),
      [__AutoDisposeFamilyNotifier_arg_isSet]: dart.fieldType(core.bool)
    }));
    return AutoDisposeFamilyNotifier;
  });
  notifier.AutoDisposeFamilyNotifier = notifier.AutoDisposeFamilyNotifier$();
  dart.addTypeTests(notifier.AutoDisposeFamilyNotifier, _is_AutoDisposeFamilyNotifier_default);
  var __AutoDisposeFamilyNotifierProviderImpl_notifier = dart.privateName(notifier, "_#AutoDisposeFamilyNotifierProviderImpl#notifier");
  const _is_AutoDisposeFamilyNotifierProviderImpl_default = Symbol('_is_AutoDisposeFamilyNotifierProviderImpl_default');
  notifier.AutoDisposeFamilyNotifierProviderImpl$ = dart.generic((NotifierT, T, Arg) => {
    var __t$AutoDisposeNotifierProviderElementOfNotifierT$T = () => (__t$AutoDisposeNotifierProviderElementOfNotifierT$T = dart.constFn(notifier.AutoDisposeNotifierProviderElement$(NotifierT, T)))();
    var __t$AutoDisposeFamilyNotifierOfT$Arg = () => (__t$AutoDisposeFamilyNotifierOfT$Arg = dart.constFn(notifier.AutoDisposeFamilyNotifier$(T, Arg)))();
    class AutoDisposeFamilyNotifierProviderImpl extends notifier.NotifierProviderBase$(NotifierT, T) {
      static ['_#new#tearOff'](NotifierT, T, Arg, _createNotifier, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (notifier.AutoDisposeFamilyNotifierProviderImpl$(NotifierT, T, Arg)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get notifier() {
        let t7, t6;
        t6 = this[__AutoDisposeFamilyNotifierProviderImpl_notifier];
        return t6 == null ? (t7 = notifier._notifier(NotifierT, T, this), this[__AutoDisposeFamilyNotifierProviderImpl_notifier] == null ? this[__AutoDisposeFamilyNotifierProviderImpl_notifier] = t7 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t6;
      }
      createElement() {
        return new (__t$AutoDisposeNotifierProviderElementOfNotifierT$T()).__(this);
      }
      runNotifierBuild(notifier) {
        __t$AutoDisposeFamilyNotifierOfT$Arg().as(notifier);
        return notifier.build(notifier.arg);
      }
    }
    (AutoDisposeFamilyNotifierProviderImpl.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeFamilyNotifierProviderImpl_notifier] = null;
      AutoDisposeFamilyNotifierProviderImpl.__proto__.new.call(this, _createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeFamilyNotifierProviderImpl.prototype;
    dart.addTypeTests(AutoDisposeFamilyNotifierProviderImpl);
    AutoDisposeFamilyNotifierProviderImpl.prototype[_is_AutoDisposeFamilyNotifierProviderImpl_default] = true;
    dart.addTypeCaches(AutoDisposeFamilyNotifierProviderImpl);
    dart.setMethodSignature(AutoDisposeFamilyNotifierProviderImpl, () => ({
      __proto__: dart.getMethods(AutoDisposeFamilyNotifierProviderImpl.__proto__),
      createElement: dart.fnType(notifier.AutoDisposeNotifierProviderElement$(NotifierT, T), []),
      runNotifierBuild: dart.fnType(T, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AutoDisposeFamilyNotifierProviderImpl, () => ({
      __proto__: dart.getGetters(AutoDisposeFamilyNotifierProviderImpl.__proto__),
      notifier: framework.Refreshable$(NotifierT)
    }));
    dart.setLibraryUri(AutoDisposeFamilyNotifierProviderImpl, I[5]);
    dart.setFieldSignature(AutoDisposeFamilyNotifierProviderImpl, () => ({
      __proto__: dart.getFields(AutoDisposeFamilyNotifierProviderImpl.__proto__),
      [__AutoDisposeFamilyNotifierProviderImpl_notifier]: dart.fieldType(dart.nullable(framework.Refreshable$(NotifierT)))
    }));
    return AutoDisposeFamilyNotifierProviderImpl;
  });
  notifier.AutoDisposeFamilyNotifierProviderImpl = notifier.AutoDisposeFamilyNotifierProviderImpl$();
  dart.addTypeTests(notifier.AutoDisposeFamilyNotifierProviderImpl, _is_AutoDisposeFamilyNotifierProviderImpl_default);
  var name$2 = dart.privateName(framework, "AutoDisposeNotifierFamilyBase.name");
  var dependencies$3 = dart.privateName(framework, "AutoDisposeNotifierFamilyBase.dependencies");
  var __AutoDisposeNotifierFamilyBase_allTransitiveDependencies = dart.privateName(framework, "_#AutoDisposeNotifierFamilyBase#allTransitiveDependencies");
  var __AutoDisposeNotifierFamilyBase_allTransitiveDependencies_isSet = dart.privateName(framework, "_#AutoDisposeNotifierFamilyBase#allTransitiveDependencies#isSet");
  const _is_AutoDisposeNotifierFamilyBase_default = Symbol('_is_AutoDisposeNotifierFamilyBase_default');
  framework.AutoDisposeNotifierFamilyBase$ = dart.generic((RefT, R, Arg, NotifierT, ProviderT) => {
    const Family__FamilyMixin$36 = class Family__FamilyMixin extends framework.Family$(R) {};
    (Family__FamilyMixin$36.new = function() {
      Family__FamilyMixin$36.__proto__.new.call(this);
    }).prototype = Family__FamilyMixin$36.prototype;
    dart.applyMixin(Family__FamilyMixin$36, framework._FamilyMixin$(R, Arg, ProviderT));
    class AutoDisposeNotifierFamilyBase extends Family__FamilyMixin$36 {
      get name() {
        return this[name$2];
      }
      set name(value) {
        super.name = value;
      }
      get dependencies() {
        return this[dependencies$3];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](RefT, R, Arg, NotifierT, ProviderT, _createFn, opts) {
        let providerFactory = opts && 'providerFactory' in opts ? opts.providerFactory : null;
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (framework.AutoDisposeNotifierFamilyBase$(RefT, R, Arg, NotifierT, ProviderT)).new(_createFn, {providerFactory: providerFactory, name: name, dependencies: dependencies});
      }
      call(argument) {
        let t9, t8, t7, t6;
        Arg.as(argument);
        t6 = this[_createFn$0];
        t7 = this.name;
        t8 = argument;
        t9 = this.dependencies;
        return this[_providerFactory](t6, {name: t7, from: this, argument: t8, dependencies: t9});
      }
      get allTransitiveDependencies() {
        if (!this[__AutoDisposeNotifierFamilyBase_allTransitiveDependencies_isSet]) {
          let t6 = this.dependencies == null ? null : framework._allTransitiveDependencies(dart.nullCheck(this.dependencies));
          if (this[__AutoDisposeNotifierFamilyBase_allTransitiveDependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("allTransitiveDependencies"));
          this[__AutoDisposeNotifierFamilyBase_allTransitiveDependencies] = t6;
          this[__AutoDisposeNotifierFamilyBase_allTransitiveDependencies_isSet] = true;
        }
        return this[__AutoDisposeNotifierFamilyBase_allTransitiveDependencies];
      }
    }
    (AutoDisposeNotifierFamilyBase.new = function(_createFn, opts) {
      let providerFactory = opts && 'providerFactory' in opts ? opts.providerFactory : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[__AutoDisposeNotifierFamilyBase_allTransitiveDependencies] = null;
      this[__AutoDisposeNotifierFamilyBase_allTransitiveDependencies_isSet] = false;
      this[_createFn$0] = _createFn;
      this[name$2] = name;
      this[dependencies$3] = dependencies;
      this[_providerFactory] = providerFactory;
      AutoDisposeNotifierFamilyBase.__proto__.new.call(this);
      ;
    }).prototype = AutoDisposeNotifierFamilyBase.prototype;
    dart.addTypeTests(AutoDisposeNotifierFamilyBase);
    AutoDisposeNotifierFamilyBase.prototype[_is_AutoDisposeNotifierFamilyBase_default] = true;
    dart.addTypeCaches(AutoDisposeNotifierFamilyBase);
    dart.setMethodSignature(AutoDisposeNotifierFamilyBase, () => ({
      __proto__: dart.getMethods(AutoDisposeNotifierFamilyBase.__proto__),
      call: dart.fnType(ProviderT, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AutoDisposeNotifierFamilyBase, () => ({
      __proto__: dart.getGetters(AutoDisposeNotifierFamilyBase.__proto__),
      allTransitiveDependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(AutoDisposeNotifierFamilyBase, I[0]);
    dart.setFieldSignature(AutoDisposeNotifierFamilyBase, () => ({
      __proto__: dart.getFields(AutoDisposeNotifierFamilyBase.__proto__),
      [_providerFactory]: dart.finalFieldType(dart.fnType(ProviderT, [dart.fnType(NotifierT, [])], {argument: dart.nullable(core.Object), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), from: framework.Family, name: dart.nullable(core.String)}, {})),
      [_createFn$0]: dart.finalFieldType(dart.fnType(NotifierT, [])),
      name: dart.finalFieldType(dart.nullable(core.String)),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AutoDisposeNotifierFamilyBase_allTransitiveDependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AutoDisposeNotifierFamilyBase_allTransitiveDependencies_isSet]: dart.fieldType(core.bool)
    }));
    return AutoDisposeNotifierFamilyBase;
  });
  framework.AutoDisposeNotifierFamilyBase = framework.AutoDisposeNotifierFamilyBase$();
  dart.addTypeTests(framework.AutoDisposeNotifierFamilyBase, _is_AutoDisposeNotifierFamilyBase_default);
  const _is_AutoDisposeNotifierProviderFamily_default = Symbol('_is_AutoDisposeNotifierProviderFamily_default');
  notifier.AutoDisposeNotifierProviderFamily$ = dart.generic((NotifierT, T, Arg) => {
    class AutoDisposeNotifierProviderFamily extends framework.AutoDisposeNotifierFamilyBase$(notifier.AutoDisposeNotifierProviderRef$(T), T, Arg, NotifierT, notifier.AutoDisposeFamilyNotifierProviderImpl$(NotifierT, T, Arg)) {
      static ['_#new#tearOff'](NotifierT, T, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (notifier.AutoDisposeNotifierProviderFamily$(NotifierT, T, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AutoDisposeNotifierProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AutoDisposeNotifierProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[8] || CT.C8, NotifierT, T, Arg), name: name, dependencies: dependencies});
      ;
    }).prototype = AutoDisposeNotifierProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeNotifierProviderFamily);
    AutoDisposeNotifierProviderFamily.prototype[_is_AutoDisposeNotifierProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeNotifierProviderFamily);
    dart.setLibraryUri(AutoDisposeNotifierProviderFamily, I[5]);
    return AutoDisposeNotifierProviderFamily;
  });
  notifier.AutoDisposeNotifierProviderFamily = notifier.AutoDisposeNotifierProviderFamily$();
  dart.addTypeTests(notifier.AutoDisposeNotifierProviderFamily, _is_AutoDisposeNotifierProviderFamily_default);
  var __BuildlessNotifier__element = dart.privateName(notifier, "_#BuildlessNotifier#_element");
  const _is_BuildlessNotifier_default = Symbol('_is_BuildlessNotifier_default');
  notifier.BuildlessNotifier$ = dart.generic(State => {
    var __t$NotifierBaseOfState = () => (__t$NotifierBaseOfState = dart.constFn(notifier.NotifierBase$(State)))();
    var __t$NotifierProviderElementOfNotifierBaseOfState$State = () => (__t$NotifierProviderElementOfNotifierBaseOfState$State = dart.constFn(notifier.NotifierProviderElement$(__t$NotifierBaseOfState(), State)))();
    class BuildlessNotifier extends notifier.NotifierBase$(State) {
      get [_element]() {
        let t7;
        t7 = this[__BuildlessNotifier__element];
        return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_element")) : t7;
      }
      set [_element](library$32package$58riverpod$47src$47notifier$47base$46dart$58$58_element$35param) {
        if (this[__BuildlessNotifier__element] == null)
          this[__BuildlessNotifier__element] = library$32package$58riverpod$47src$47notifier$47base$46dart$58$58_element$35param;
        else
          dart.throw(new _internal.LateError.fieldAI("_element"));
      }
      [_setElement](element) {
        this[_element] = __t$NotifierProviderElementOfNotifierBaseOfState$State().as(element);
      }
      get ref() {
        return this[_element];
      }
    }
    (BuildlessNotifier.new = function() {
      this[__BuildlessNotifier__element] = null;
      ;
    }).prototype = BuildlessNotifier.prototype;
    dart.addTypeTests(BuildlessNotifier);
    BuildlessNotifier.prototype[_is_BuildlessNotifier_default] = true;
    dart.addTypeCaches(BuildlessNotifier);
    dart.setMethodSignature(BuildlessNotifier, () => ({
      __proto__: dart.getMethods(BuildlessNotifier.__proto__),
      [_setElement]: dart.fnType(dart.void, [framework.ProviderElementBase$(State)])
    }));
    dart.setGetterSignature(BuildlessNotifier, () => ({
      __proto__: dart.getGetters(BuildlessNotifier.__proto__),
      [_element]: notifier.NotifierProviderElement$(notifier.NotifierBase$(State), State),
      ref: notifier.NotifierProviderRef$(State)
    }));
    dart.setSetterSignature(BuildlessNotifier, () => ({
      __proto__: dart.getSetters(BuildlessNotifier.__proto__),
      [_element]: notifier.NotifierProviderElement$(notifier.NotifierBase$(State), State)
    }));
    dart.setLibraryUri(BuildlessNotifier, I[5]);
    dart.setFieldSignature(BuildlessNotifier, () => ({
      __proto__: dart.getFields(BuildlessNotifier.__proto__),
      [__BuildlessNotifier__element]: dart.fieldType(dart.nullable(notifier.NotifierProviderElement$(notifier.NotifierBase$(State), State)))
    }));
    return BuildlessNotifier;
  });
  notifier.BuildlessNotifier = notifier.BuildlessNotifier$();
  dart.addTypeTests(notifier.BuildlessNotifier, _is_BuildlessNotifier_default);
  const _is_Notifier_default = Symbol('_is_Notifier_default');
  notifier.Notifier$ = dart.generic(State => {
    class Notifier extends notifier.BuildlessNotifier$(State) {}
    (Notifier.new = function() {
      Notifier.__proto__.new.call(this);
      ;
    }).prototype = Notifier.prototype;
    dart.addTypeTests(Notifier);
    Notifier.prototype[_is_Notifier_default] = true;
    dart.addTypeCaches(Notifier);
    dart.setLibraryUri(Notifier, I[5]);
    return Notifier;
  });
  notifier.Notifier = notifier.Notifier$();
  dart.addTypeTests(notifier.Notifier, _is_Notifier_default);
  const _is_NotifierProviderRef_default = Symbol('_is_NotifierProviderRef_default');
  notifier.NotifierProviderRef$ = dart.generic(T => {
    class NotifierProviderRef extends core.Object {}
    (NotifierProviderRef.new = function() {
      ;
    }).prototype = NotifierProviderRef.prototype;
    dart.addTypeTests(NotifierProviderRef);
    NotifierProviderRef.prototype[_is_NotifierProviderRef_default] = true;
    dart.addTypeCaches(NotifierProviderRef);
    NotifierProviderRef[dart.implements] = () => [framework.Ref$(T)];
    dart.setLibraryUri(NotifierProviderRef, I[5]);
    return NotifierProviderRef;
  });
  notifier.NotifierProviderRef = notifier.NotifierProviderRef$();
  dart.addTypeTests(notifier.NotifierProviderRef, _is_NotifierProviderRef_default);
  var __NotifierProviderImpl_notifier = dart.privateName(notifier, "_#NotifierProviderImpl#notifier");
  const _is_NotifierProviderImpl_default = Symbol('_is_NotifierProviderImpl_default');
  notifier.NotifierProviderImpl$ = dart.generic((NotifierT, T) => {
    var __t$NotifierProviderElementOfNotifierT$T = () => (__t$NotifierProviderElementOfNotifierT$T = dart.constFn(notifier.NotifierProviderElement$(NotifierT, T)))();
    var __t$NotifierBaseOfT = () => (__t$NotifierBaseOfT = dart.constFn(notifier.NotifierBase$(T)))();
    var __t$NotifierOfT = () => (__t$NotifierOfT = dart.constFn(notifier.Notifier$(T)))();
    const NotifierProviderBase_AlwaysAliveProviderBase$36 = class NotifierProviderBase_AlwaysAliveProviderBase extends notifier.NotifierProviderBase$(NotifierT, T) {};
    (NotifierProviderBase_AlwaysAliveProviderBase$36.new = function(_createNotifier, opts) {
      NotifierProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, _createNotifier, opts);
    }).prototype = NotifierProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(NotifierProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(T));
    class NotifierProviderImpl extends NotifierProviderBase_AlwaysAliveProviderBase$36 {
      static ['_#new#tearOff'](NotifierT, T, _createNotifier, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (notifier.NotifierProviderImpl$(NotifierT, T)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      createElement() {
        return new (__t$NotifierProviderElementOfNotifierT$T()).__(this);
      }
      get notifier() {
        let t8, t7;
        t7 = this[__NotifierProviderImpl_notifier];
        return t7 == null ? (t8 = notifier._notifier(NotifierT, T, this), this[__NotifierProviderImpl_notifier] == null ? this[__NotifierProviderImpl_notifier] = t8 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t7;
      }
      runNotifierBuild(notifier) {
        __t$NotifierBaseOfT().as(notifier);
        return __t$NotifierOfT().as(notifier).build();
      }
    }
    (NotifierProviderImpl.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__NotifierProviderImpl_notifier] = null;
      NotifierProviderImpl.__proto__.new.call(this, _createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = NotifierProviderImpl.prototype;
    dart.addTypeTests(NotifierProviderImpl);
    NotifierProviderImpl.prototype[_is_NotifierProviderImpl_default] = true;
    dart.addTypeCaches(NotifierProviderImpl);
    dart.setMethodSignature(NotifierProviderImpl, () => ({
      __proto__: dart.getMethods(NotifierProviderImpl.__proto__),
      createElement: dart.fnType(notifier.NotifierProviderElement$(NotifierT, T), []),
      runNotifierBuild: dart.fnType(T, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(NotifierProviderImpl, () => ({
      __proto__: dart.getGetters(NotifierProviderImpl.__proto__),
      notifier: framework.AlwaysAliveRefreshable$(NotifierT)
    }));
    dart.setLibraryUri(NotifierProviderImpl, I[5]);
    dart.setFieldSignature(NotifierProviderImpl, () => ({
      __proto__: dart.getFields(NotifierProviderImpl.__proto__),
      [__NotifierProviderImpl_notifier]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(NotifierT)))
    }));
    dart.setStaticFieldSignature(NotifierProviderImpl, () => ['autoDispose', 'family']);
    return NotifierProviderImpl;
  });
  notifier.NotifierProviderImpl = notifier.NotifierProviderImpl$();
  dart.defineLazy(notifier.NotifierProviderImpl, {
    /*notifier.NotifierProviderImpl.autoDispose*/get autoDispose() {
      return C[9] || CT.C9;
    },
    /*notifier.NotifierProviderImpl.family*/get family() {
      return C[10] || CT.C10;
    }
  }, false);
  dart.addTypeTests(notifier.NotifierProviderImpl, _is_NotifierProviderImpl_default);
  var __FamilyNotifier_arg = dart.privateName(notifier, "_#FamilyNotifier#arg");
  var __FamilyNotifier_arg_isSet = dart.privateName(notifier, "_#FamilyNotifier#arg#isSet");
  const _is_FamilyNotifier_default = Symbol('_is_FamilyNotifier_default');
  notifier.FamilyNotifier$ = dart.generic((State, Arg) => {
    class FamilyNotifier extends notifier.BuildlessNotifier$(State) {
      get arg() {
        let t7;
        return this[__FamilyNotifier_arg_isSet] ? (t7 = this[__FamilyNotifier_arg], t7) : dart.throw(new _internal.LateError.fieldNI("arg"));
      }
      set arg(arg$35param) {
        if (this[__FamilyNotifier_arg_isSet])
          dart.throw(new _internal.LateError.fieldAI("arg"));
        else {
          this[__FamilyNotifier_arg_isSet] = true;
          this[__FamilyNotifier_arg] = arg$35param;
        }
      }
      [_setElement](element) {
        super[_setElement](element);
        this.arg = Arg.as(element.origin.argument);
      }
    }
    (FamilyNotifier.new = function() {
      this[__FamilyNotifier_arg] = null;
      this[__FamilyNotifier_arg_isSet] = false;
      FamilyNotifier.__proto__.new.call(this);
      ;
    }).prototype = FamilyNotifier.prototype;
    dart.addTypeTests(FamilyNotifier);
    FamilyNotifier.prototype[_is_FamilyNotifier_default] = true;
    dart.addTypeCaches(FamilyNotifier);
    dart.setGetterSignature(FamilyNotifier, () => ({
      __proto__: dart.getGetters(FamilyNotifier.__proto__),
      arg: Arg
    }));
    dart.setSetterSignature(FamilyNotifier, () => ({
      __proto__: dart.getSetters(FamilyNotifier.__proto__),
      arg: Arg
    }));
    dart.setLibraryUri(FamilyNotifier, I[5]);
    dart.setFieldSignature(FamilyNotifier, () => ({
      __proto__: dart.getFields(FamilyNotifier.__proto__),
      [__FamilyNotifier_arg]: dart.fieldType(dart.nullable(Arg)),
      [__FamilyNotifier_arg_isSet]: dart.fieldType(core.bool)
    }));
    return FamilyNotifier;
  });
  notifier.FamilyNotifier = notifier.FamilyNotifier$();
  dart.addTypeTests(notifier.FamilyNotifier, _is_FamilyNotifier_default);
  var __FamilyNotifierProviderImpl_notifier = dart.privateName(notifier, "_#FamilyNotifierProviderImpl#notifier");
  const _is_FamilyNotifierProviderImpl_default = Symbol('_is_FamilyNotifierProviderImpl_default');
  notifier.FamilyNotifierProviderImpl$ = dart.generic((NotifierT, T, Arg) => {
    var __t$NotifierProviderElementOfNotifierT$T = () => (__t$NotifierProviderElementOfNotifierT$T = dart.constFn(notifier.NotifierProviderElement$(NotifierT, T)))();
    var __t$FamilyNotifierOfT$Arg = () => (__t$FamilyNotifierOfT$Arg = dart.constFn(notifier.FamilyNotifier$(T, Arg)))();
    const NotifierProviderBase_AlwaysAliveProviderBase$36 = class NotifierProviderBase_AlwaysAliveProviderBase extends notifier.NotifierProviderBase$(NotifierT, T) {};
    (NotifierProviderBase_AlwaysAliveProviderBase$36.new = function(_createNotifier, opts) {
      NotifierProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, _createNotifier, opts);
    }).prototype = NotifierProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(NotifierProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(T));
    class FamilyNotifierProviderImpl extends NotifierProviderBase_AlwaysAliveProviderBase$36 {
      static ['_#new#tearOff'](NotifierT, T, Arg, _createNotifier, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (notifier.FamilyNotifierProviderImpl$(NotifierT, T, Arg)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get notifier() {
        let t8, t7;
        t7 = this[__FamilyNotifierProviderImpl_notifier];
        return t7 == null ? (t8 = notifier._notifier(NotifierT, T, this), this[__FamilyNotifierProviderImpl_notifier] == null ? this[__FamilyNotifierProviderImpl_notifier] = t8 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t7;
      }
      createElement() {
        return new (__t$NotifierProviderElementOfNotifierT$T()).__(this);
      }
      runNotifierBuild(notifier) {
        __t$FamilyNotifierOfT$Arg().as(notifier);
        return notifier.build(notifier.arg);
      }
    }
    (FamilyNotifierProviderImpl.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__FamilyNotifierProviderImpl_notifier] = null;
      FamilyNotifierProviderImpl.__proto__.new.call(this, _createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = FamilyNotifierProviderImpl.prototype;
    dart.addTypeTests(FamilyNotifierProviderImpl);
    FamilyNotifierProviderImpl.prototype[_is_FamilyNotifierProviderImpl_default] = true;
    dart.addTypeCaches(FamilyNotifierProviderImpl);
    dart.setMethodSignature(FamilyNotifierProviderImpl, () => ({
      __proto__: dart.getMethods(FamilyNotifierProviderImpl.__proto__),
      createElement: dart.fnType(notifier.NotifierProviderElement$(NotifierT, T), []),
      runNotifierBuild: dart.fnType(T, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(FamilyNotifierProviderImpl, () => ({
      __proto__: dart.getGetters(FamilyNotifierProviderImpl.__proto__),
      notifier: framework.AlwaysAliveRefreshable$(NotifierT)
    }));
    dart.setLibraryUri(FamilyNotifierProviderImpl, I[5]);
    dart.setFieldSignature(FamilyNotifierProviderImpl, () => ({
      __proto__: dart.getFields(FamilyNotifierProviderImpl.__proto__),
      [__FamilyNotifierProviderImpl_notifier]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(NotifierT)))
    }));
    dart.setStaticFieldSignature(FamilyNotifierProviderImpl, () => ['autoDispose']);
    return FamilyNotifierProviderImpl;
  });
  notifier.FamilyNotifierProviderImpl = notifier.FamilyNotifierProviderImpl$();
  dart.defineLazy(notifier.FamilyNotifierProviderImpl, {
    /*notifier.FamilyNotifierProviderImpl.autoDispose*/get autoDispose() {
      return C[7] || CT.C7;
    }
  }, false);
  dart.addTypeTests(notifier.FamilyNotifierProviderImpl, _is_FamilyNotifierProviderImpl_default);
  var name$3 = dart.privateName(framework, "NotifierFamilyBase.name");
  var dependencies$4 = dart.privateName(framework, "NotifierFamilyBase.dependencies");
  var __NotifierFamilyBase_allTransitiveDependencies = dart.privateName(framework, "_#NotifierFamilyBase#allTransitiveDependencies");
  var __NotifierFamilyBase_allTransitiveDependencies_isSet = dart.privateName(framework, "_#NotifierFamilyBase#allTransitiveDependencies#isSet");
  const _is_NotifierFamilyBase_default = Symbol('_is_NotifierFamilyBase_default');
  framework.NotifierFamilyBase$ = dart.generic((RefT, R, Arg, NotifierT, ProviderT) => {
    const Family__FamilyMixin$36 = class Family__FamilyMixin extends framework.Family$(R) {};
    (Family__FamilyMixin$36.new = function() {
      Family__FamilyMixin$36.__proto__.new.call(this);
    }).prototype = Family__FamilyMixin$36.prototype;
    dart.applyMixin(Family__FamilyMixin$36, framework._FamilyMixin$(R, Arg, ProviderT));
    class NotifierFamilyBase extends Family__FamilyMixin$36 {
      get name() {
        return this[name$3];
      }
      set name(value) {
        super.name = value;
      }
      get dependencies() {
        return this[dependencies$4];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](RefT, R, Arg, NotifierT, ProviderT, _createFn, opts) {
        let providerFactory = opts && 'providerFactory' in opts ? opts.providerFactory : null;
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (framework.NotifierFamilyBase$(RefT, R, Arg, NotifierT, ProviderT)).new(_createFn, {providerFactory: providerFactory, name: name, dependencies: dependencies});
      }
      call(argument) {
        let t10, t9, t8, t7;
        Arg.as(argument);
        t7 = this[_createFn$0];
        t8 = this.name;
        t9 = argument;
        t10 = this.dependencies;
        return this[_providerFactory](t7, {name: t8, from: this, argument: t9, dependencies: t10});
      }
      get allTransitiveDependencies() {
        if (!this[__NotifierFamilyBase_allTransitiveDependencies_isSet]) {
          let t7 = this.dependencies == null ? null : framework._allTransitiveDependencies(dart.nullCheck(this.dependencies));
          if (this[__NotifierFamilyBase_allTransitiveDependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("allTransitiveDependencies"));
          this[__NotifierFamilyBase_allTransitiveDependencies] = t7;
          this[__NotifierFamilyBase_allTransitiveDependencies_isSet] = true;
        }
        return this[__NotifierFamilyBase_allTransitiveDependencies];
      }
    }
    (NotifierFamilyBase.new = function(_createFn, opts) {
      let providerFactory = opts && 'providerFactory' in opts ? opts.providerFactory : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[__NotifierFamilyBase_allTransitiveDependencies] = null;
      this[__NotifierFamilyBase_allTransitiveDependencies_isSet] = false;
      this[_createFn$0] = _createFn;
      this[name$3] = name;
      this[dependencies$4] = dependencies;
      this[_providerFactory] = providerFactory;
      NotifierFamilyBase.__proto__.new.call(this);
      ;
    }).prototype = NotifierFamilyBase.prototype;
    dart.addTypeTests(NotifierFamilyBase);
    NotifierFamilyBase.prototype[_is_NotifierFamilyBase_default] = true;
    dart.addTypeCaches(NotifierFamilyBase);
    dart.setMethodSignature(NotifierFamilyBase, () => ({
      __proto__: dart.getMethods(NotifierFamilyBase.__proto__),
      call: dart.fnType(ProviderT, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(NotifierFamilyBase, () => ({
      __proto__: dart.getGetters(NotifierFamilyBase.__proto__),
      allTransitiveDependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(NotifierFamilyBase, I[0]);
    dart.setFieldSignature(NotifierFamilyBase, () => ({
      __proto__: dart.getFields(NotifierFamilyBase.__proto__),
      [_providerFactory]: dart.finalFieldType(dart.fnType(ProviderT, [dart.fnType(NotifierT, [])], {argument: dart.nullable(core.Object), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), from: framework.Family, name: dart.nullable(core.String)}, {})),
      [_createFn$0]: dart.finalFieldType(dart.fnType(NotifierT, [])),
      name: dart.finalFieldType(dart.nullable(core.String)),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__NotifierFamilyBase_allTransitiveDependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__NotifierFamilyBase_allTransitiveDependencies_isSet]: dart.fieldType(core.bool)
    }));
    return NotifierFamilyBase;
  });
  framework.NotifierFamilyBase = framework.NotifierFamilyBase$();
  dart.addTypeTests(framework.NotifierFamilyBase, _is_NotifierFamilyBase_default);
  const _is_NotifierProviderFamily_default = Symbol('_is_NotifierProviderFamily_default');
  notifier.NotifierProviderFamily$ = dart.generic((NotifierT, T, Arg) => {
    class NotifierProviderFamily extends framework.NotifierFamilyBase$(notifier.NotifierProviderRef$(T), T, Arg, NotifierT, notifier.FamilyNotifierProviderImpl$(NotifierT, T, Arg)) {
      static ['_#new#tearOff'](NotifierT, T, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (notifier.NotifierProviderFamily$(NotifierT, T, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (NotifierProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      NotifierProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[11] || CT.C11, NotifierT, T, Arg), name: name, dependencies: dependencies});
      ;
    }).prototype = NotifierProviderFamily.prototype;
    dart.addTypeTests(NotifierProviderFamily);
    NotifierProviderFamily.prototype[_is_NotifierProviderFamily_default] = true;
    dart.addTypeCaches(NotifierProviderFamily);
    dart.setLibraryUri(NotifierProviderFamily, I[5]);
    return NotifierProviderFamily;
  });
  notifier.NotifierProviderFamily = notifier.NotifierProviderFamily$();
  dart.addTypeTests(notifier.NotifierProviderFamily, _is_NotifierProviderFamily_default);
  notifier._notifier = function _notifier$(NotifierT, T, that) {
    return new (framework.ProviderElementProxy$(T, NotifierT)).new(that, dart.fn(element => notifier.NotifierProviderElement$(NotifierT, T).as(element)[_notifierNotifier], dart.fnType(listenable.ProxyElementValueNotifier$(NotifierT), [framework.ProviderElementBase$(T)])));
  };
  notifier['_#AutoDisposeNotifierProvider#new#tearOff'] = function _$35AutoDisposeNotifierProvider$35new$35tearOff(NotifierT, T, _createNotifier, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let argument = opts && 'argument' in opts ? opts.argument : null;
    let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
    let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
    return new (notifier.AutoDisposeNotifierProviderImpl$(NotifierT, T)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
  };
  notifier['_#AutoDisposeFamilyNotifierProvider#new#tearOff'] = function _$35AutoDisposeFamilyNotifierProvider$35new$35tearOff(NotifierT, T, Arg, _createNotifier, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let argument = opts && 'argument' in opts ? opts.argument : null;
    let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
    let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
    return new (notifier.AutoDisposeFamilyNotifierProviderImpl$(NotifierT, T, Arg)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
  };
  notifier['_#NotifierProvider#new#tearOff'] = function _$35NotifierProvider$35new$35tearOff(NotifierT, T, _createNotifier, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let argument = opts && 'argument' in opts ? opts.argument : null;
    let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
    let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
    return new (notifier.NotifierProviderImpl$(NotifierT, T)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
  };
  notifier['_#NotifierFamilyProvider#new#tearOff'] = function _$35NotifierFamilyProvider$35new$35tearOff(NotifierT, T, Arg, _createNotifier, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let argument = opts && 'argument' in opts ? opts.argument : null;
    let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
    let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
    return new (notifier.FamilyNotifierProviderImpl$(NotifierT, T, Arg)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
  };
  const _is__Listener_default = Symbol('_is__Listener_default');
  listenable._Listener$ = dart.generic(T => {
    class _Listener extends core.Object {
      static ['_#_#tearOff'](T, onValue, onError, onDependencyMayHaveChanged) {
        return new (listenable._Listener$(T)).__(onValue, onError, onDependencyMayHaveChanged);
      }
    }
    (_Listener.__ = function(onValue, onError, onDependencyMayHaveChanged) {
      this.onValue = onValue;
      this.onError = onError;
      this.onDependencyMayHaveChanged = onDependencyMayHaveChanged;
      ;
    }).prototype = _Listener.prototype;
    dart.addTypeTests(_Listener);
    _Listener.prototype[_is__Listener_default] = true;
    dart.addTypeCaches(_Listener);
    dart.setLibraryUri(_Listener, I[6]);
    dart.setFieldSignature(_Listener, () => ({
      __proto__: dart.getFields(_Listener.__proto__),
      onValue: dart.finalFieldType(dart.fnType(dart.void, [dart.nullable(T), T])),
      onError: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))),
      onDependencyMayHaveChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [])))
    }));
    return _Listener;
  });
  listenable._Listener = listenable._Listener$();
  dart.addTypeTests(listenable._Listener, _is__Listener_default);
  var _result = dart.privateName(listenable, "_result");
  var _notifyValue = dart.privateName(listenable, "_notifyValue");
  var _notifyError = dart.privateName(listenable, "_notifyError");
  var _count = dart.privateName(listenable, "_count");
  var _listeners = dart.privateName(listenable, "_listeners");
  var _notificationCallStackDepth = dart.privateName(listenable, "_notificationCallStackDepth");
  var _reentrantlyRemovedListeners = dart.privateName(listenable, "_reentrantlyRemovedListeners");
  var _debugDisposed = dart.privateName(listenable, "_debugDisposed");
  var _removeListener$ = dart.privateName(listenable, "_removeListener");
  var _removeAt = dart.privateName(listenable, "_removeAt");
  var _notifyListeners$ = dart.privateName(listenable, "_notifyListeners");
  const _is__ValueListenable_default = Symbol('_is__ValueListenable_default');
  listenable._ValueListenable$ = dart.generic(T => {
    var __t$_ListenerOfT = () => (__t$_ListenerOfT = dart.constFn(listenable._Listener$(T)))();
    var __t$_ListenerNOfT = () => (__t$_ListenerNOfT = dart.constFn(dart.nullable(__t$_ListenerOfT())))();
    var __t$ListOf_ListenerNOfT = () => (__t$ListOf_ListenerNOfT = dart.constFn(core.List$(__t$_ListenerNOfT())))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$TNAndTTovoid = () => (__t$TNAndTTovoid = dart.constFn(dart.fnType(dart.void, [__t$TN(), T])))();
    var __t$_ListenerOfTTovoid = () => (__t$_ListenerOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$_ListenerOfT()])))();
    class _ValueListenable extends core.Object {
      static _emptyListeners(T) {
        return core.List$(dart.nullable(listenable._Listener$(T))).filled(0, null);
      }
      static debugAssertNotDisposed(notifier) {
        if (!!notifier[_debugDisposed]) dart.assertFailed("A " + dart.str(notifier[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(notifier[$runtimeType]) + ", it " + "can no longer be used.", I[7], 70, 7, "!notifier._debugDisposed");
        return true;
      }
      get hasListeners() {
        return this[_count] > 0;
      }
      addListener(onChange, opts) {
        let t8;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDependencyMayHaveChanged = opts && 'onDependencyMayHaveChanged' in opts ? opts.onDependencyMayHaveChanged : null;
        if (!listenable._ValueListenable.debugAssertNotDisposed(this)) dart.assertFailed("", I[7], 129, 12, "_ValueListenable.debugAssertNotDisposed(this)");
        let listener = new (__t$_ListenerOfT()).__(onChange, onError, onDependencyMayHaveChanged);
        if (this[_count] === this[_listeners][$length]) {
          if (this[_count] === 0) {
            this[_listeners] = __t$ListOf_ListenerNOfT().filled(1, null);
          } else {
            let newListeners = __t$ListOf_ListenerNOfT().filled(this[_listeners][$length] * 2, null);
            for (let i = 0; i < this[_count]; i = i + 1) {
              newListeners[$_set](i, this[_listeners][$_get](i));
            }
            this[_listeners] = newListeners;
          }
        }
        this[_listeners][$_set]((t8 = this[_count], this[_count] = t8 + 1, t8), listener);
        return dart.fn(() => this[_removeListener$](listener), T$.VoidTovoid());
      }
      [_removeAt](index) {
        this[_count] = this[_count] - 1;
        if (this[_count] * 2 <= this[_listeners][$length]) {
          let newListeners = __t$ListOf_ListenerNOfT().filled(this[_count], null);
          for (let i = 0; i < index; i = i + 1) {
            newListeners[$_set](i, this[_listeners][$_get](i));
          }
          for (let i = index; i < this[_count]; i = i + 1) {
            newListeners[$_set](i, this[_listeners][$_get](i + 1));
          }
          this[_listeners] = newListeners;
        } else {
          for (let i = index; i < this[_count]; i = i + 1) {
            this[_listeners][$_set](i, this[_listeners][$_get](i + 1));
          }
          this[_listeners][$_set](this[_count], null);
        }
      }
      [_removeListener$](listener) {
        for (let i = 0; i < this[_count]; i = i + 1) {
          let listenerAtIndex = this[_listeners][$_get](i);
          if (dart.equals(listenerAtIndex, listener)) {
            if (this[_notificationCallStackDepth] > 0) {
              this[_listeners][$_set](i, null);
              this[_reentrantlyRemovedListeners] = this[_reentrantlyRemovedListeners] + 1;
            } else {
              this[_removeAt](i);
            }
            break;
          }
        }
      }
      dispose() {
        if (!dart.fn(() => {
          this[_debugDisposed] = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[7], 232, 7, "() {\n        _debugDisposed = true;\n        return true;\n      }()");
        this[_listeners] = listenable._ValueListenable._emptyListeners(T);
        this[_count] = 0;
      }
      [_notifyListeners$](notify) {
        let t9;
        if (!listenable._ValueListenable.debugAssertNotDisposed(this)) dart.assertFailed("", I[7], 259, 12, "_ValueListenable.debugAssertNotDisposed(this)");
        if (this[_count] === 0) {
          return;
        }
        this[_notificationCallStackDepth] = this[_notificationCallStackDepth] + 1;
        let end = this[_count];
        for (let i = 0; i < end; i = i + 1) {
          try {
            let listener = this[_listeners][$_get](i);
            if (listener != null) {
              notify(listener);
            }
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              dart.throw(new core.StateError.new("An exception was thrown inside a _ChangeNotifier listener:" + "\n" + dart.str(exception) + "\n" + dart.str(stack)));
            } else
              throw e;
          }
        }
        this[_notificationCallStackDepth] = this[_notificationCallStackDepth] - 1;
        if (this[_notificationCallStackDepth] === 0 && this[_reentrantlyRemovedListeners] > 0) {
          let newLength = this[_count] - this[_reentrantlyRemovedListeners];
          if (newLength * 2 <= this[_listeners][$length]) {
            let newListeners = __t$ListOf_ListenerNOfT().filled(newLength, null);
            let newIndex = 0;
            for (let i = 0; i < this[_count]; i = i + 1) {
              let listener = this[_listeners][$_get](i);
              if (listener != null) {
                newListeners[$_set]((t9 = newIndex, newIndex = t9 + 1, t9), listener);
              }
            }
            this[_listeners] = newListeners;
          } else {
            for (let i = 0; i < newLength; i = i + 1) {
              if (this[_listeners][$_get](i) == null) {
                let swapIndex = i + 1;
                while (this[_listeners][$_get](swapIndex) == null) {
                  swapIndex = swapIndex + 1;
                }
                this[_listeners][$_set](i, this[_listeners][$_get](swapIndex));
                this[_listeners][$_set](swapIndex, null);
              }
            }
          }
          this[_reentrantlyRemovedListeners] = 0;
          this[_count] = newLength;
        }
      }
      [_notifyValue](prev, next) {
        this[_notifyListeners$](dart.fn(listener => {
          let t11, t10, t9;
          t9 = listener;
          t10 = prev;
          t11 = next;
          return __t$TNAndTTovoid().as(t9.onValue)(t10, t11);
        }, __t$_ListenerOfTTovoid()));
      }
      [_notifyError](err, stack) {
        this[_notifyListeners$](dart.fn(listener => {
          let t9;
          t9 = listener.onError;
          return t9 == null ? null : t9(err, stack);
        }, __t$_ListenerOfTTovoid()));
      }
      notifyDependencyMayHaveChanged() {
        this[_notifyListeners$](dart.fn(listener => {
          let t9;
          t9 = listener.onDependencyMayHaveChanged;
          return t9 == null ? null : t9();
        }, __t$_ListenerOfTTovoid()));
      }
      static ['_#new#tearOff'](T) {
        return new (listenable._ValueListenable$(T)).new();
      }
    }
    (_ValueListenable.new = function() {
      this[_count] = 0;
      this[_listeners] = listenable._ValueListenable._emptyListeners(T);
      this[_notificationCallStackDepth] = 0;
      this[_reentrantlyRemovedListeners] = 0;
      this[_debugDisposed] = false;
      ;
    }).prototype = _ValueListenable.prototype;
    dart.addTypeTests(_ValueListenable);
    _ValueListenable.prototype[_is__ValueListenable_default] = true;
    dart.addTypeCaches(_ValueListenable);
    dart.setMethodSignature(_ValueListenable, () => ({
      __proto__: dart.getMethods(_ValueListenable.__proto__),
      addListener: dart.fnType(dart.fnType(dart.void, []), [dart.fnType(dart.void, [dart.nullable(T), T])], {}, {onDependencyMayHaveChanged: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}),
      [_removeAt]: dart.fnType(dart.void, [core.int]),
      [_removeListener$]: dart.fnType(dart.void, [listenable._Listener$(T)]),
      dispose: dart.fnType(dart.void, []),
      [_notifyListeners$]: dart.fnType(dart.void, [dart.fnType(dart.void, [listenable._Listener$(T)])]),
      [_notifyValue]: dart.fnType(dart.void, [dart.nullable(T), T]),
      [_notifyError]: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      notifyDependencyMayHaveChanged: dart.fnType(dart.void, [])
    }));
    dart.setStaticMethodSignature(_ValueListenable, () => ['_emptyListeners', 'debugAssertNotDisposed']);
    dart.setGetterSignature(_ValueListenable, () => ({
      __proto__: dart.getGetters(_ValueListenable.__proto__),
      hasListeners: core.bool
    }));
    dart.setLibraryUri(_ValueListenable, I[6]);
    dart.setFieldSignature(_ValueListenable, () => ({
      __proto__: dart.getFields(_ValueListenable.__proto__),
      [_count]: dart.fieldType(core.int),
      [_listeners]: dart.fieldType(core.List$(dart.nullable(listenable._Listener$(T)))),
      [_notificationCallStackDepth]: dart.fieldType(core.int),
      [_reentrantlyRemovedListeners]: dart.fieldType(core.int),
      [_debugDisposed]: dart.fieldType(core.bool)
    }));
    return _ValueListenable;
  });
  listenable._ValueListenable = listenable._ValueListenable$();
  dart.addTypeTests(listenable._ValueListenable, _is__ValueListenable_default);
  const _is_ProxyElementValueNotifier_default = Symbol('_is_ProxyElementValueNotifier_default');
  listenable.ProxyElementValueNotifier$ = dart.generic(T => {
    var __t$ResultOfT = () => (__t$ResultOfT = dart.constFn(result.Result$(T)))();
    var __t$ResultNOfT = () => (__t$ResultNOfT = dart.constFn(dart.nullable(__t$ResultOfT())))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class ProxyElementValueNotifier extends listenable._ValueListenable$(T) {
      get value() {
        let result = this[_result];
        if (result == null) {
          dart.throw(new core.StateError.new("Trying to read an uninitialized value."));
        }
        return result.requireState;
      }
      get result() {
        return this[_result];
      }
      set result(value) {
        let t8;
        __t$ResultNOfT().as(value);
        let previous = this[_result];
        this[_result] = value;
        t8 = value;
        t8 == null ? null : t8.when(dart.void, {data: dart.fn(newValue => {
            let t9;
            return this[_notifyValue]((t9 = previous, t9 == null ? null : t9.stateOrNull), newValue);
          }, __t$TTovoid()), error: dart.bind(this, _notifyError)});
      }
      UNSAFE_setResultWithoutNotifyingListeners(value) {
        __t$ResultNOfT().as(value);
        this[_result] = value;
      }
      static ['_#new#tearOff'](T) {
        return new (listenable.ProxyElementValueNotifier$(T)).new();
      }
    }
    (ProxyElementValueNotifier.new = function() {
      this[_result] = null;
      ProxyElementValueNotifier.__proto__.new.call(this);
      ;
    }).prototype = ProxyElementValueNotifier.prototype;
    dart.addTypeTests(ProxyElementValueNotifier);
    ProxyElementValueNotifier.prototype[_is_ProxyElementValueNotifier_default] = true;
    dart.addTypeCaches(ProxyElementValueNotifier);
    dart.setMethodSignature(ProxyElementValueNotifier, () => ({
      __proto__: dart.getMethods(ProxyElementValueNotifier.__proto__),
      UNSAFE_setResultWithoutNotifyingListeners: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ProxyElementValueNotifier, () => ({
      __proto__: dart.getGetters(ProxyElementValueNotifier.__proto__),
      value: T,
      result: dart.nullable(result.Result$(T))
    }));
    dart.setSetterSignature(ProxyElementValueNotifier, () => ({
      __proto__: dart.getSetters(ProxyElementValueNotifier.__proto__),
      result: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(ProxyElementValueNotifier, I[6]);
    dart.setFieldSignature(ProxyElementValueNotifier, () => ({
      __proto__: dart.getFields(ProxyElementValueNotifier.__proto__),
      [_result]: dart.fieldType(dart.nullable(result.Result$(T)))
    }));
    return ProxyElementValueNotifier;
  });
  listenable.ProxyElementValueNotifier = listenable.ProxyElementValueNotifier$();
  dart.addTypeTests(listenable.ProxyElementValueNotifier, _is_ProxyElementValueNotifier_default);
  var dependencies$5 = dart.privateName(stream_provider, "_StreamProviderBase.dependencies");
  const _is_AsyncValue_default = Symbol('_is_AsyncValue_default');
  common.AsyncValue$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$AsyncLoadingOfT = () => (__t$AsyncLoadingOfT = dart.constFn(common.AsyncLoading$(T)))();
    var __t$AsyncDataOfT = () => (__t$AsyncDataOfT = dart.constFn(common.AsyncData$(T)))();
    var __t$AsyncDataOfTToAsyncValueOfT = () => (__t$AsyncDataOfTToAsyncValueOfT = dart.constFn(dart.fnType(__t$AsyncValueOfT(), [__t$AsyncDataOfT()])))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    var __t$AsyncErrorOfTToAsyncValueOfT = () => (__t$AsyncErrorOfTToAsyncValueOfT = dart.constFn(dart.fnType(__t$AsyncValueOfT(), [__t$AsyncErrorOfT()])))();
    var __t$AsyncLoadingOfTToAsyncLoadingOfT = () => (__t$AsyncLoadingOfTToAsyncLoadingOfT = dart.constFn(dart.fnType(__t$AsyncLoadingOfT(), [__t$AsyncLoadingOfT()])))();
    class AsyncValue extends core.Object {
      static ['_#data#tearOff'](T, value) {
        return new (common.AsyncData$(T)).new(value);
      }
      static ['_#loading#tearOff'](T) {
        return new (common.AsyncLoading$(T)).new();
      }
      static ['_#error#tearOff'](T, error, stackTrace) {
        return new (common.AsyncError$(T)).new(error, stackTrace);
      }
      static guard(T, future) {
        return async.async(common.AsyncValue$(T), function* guard() {
          try {
            return new (common.AsyncData$(T)).new(yield future());
          } catch (e) {
            let err = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(err)) {
              return new (common.AsyncError$(T)).new(err, stack);
            } else
              throw e;
          }
        });
      }
      unwrapPrevious() {
        return this.map(__t$AsyncValueOfT(), {data: dart.fn(d => {
            if (d.isLoading) return new (__t$AsyncLoadingOfT()).new();
            return new (__t$AsyncDataOfT()).new(d.value);
          }, __t$AsyncDataOfTToAsyncValueOfT()), error: dart.fn(e => {
            if (e.isLoading) return new (__t$AsyncLoadingOfT()).new();
            return new (__t$AsyncErrorOfT()).new(e.error, e.stackTrace);
          }, __t$AsyncErrorOfTToAsyncValueOfT()), loading: dart.fn(l => l, __t$AsyncLoadingOfTToAsyncLoadingOfT())});
      }
      toString() {
        let content = (() => {
          let t10 = T$.JSArrayOfString().of([]);
          if (this.isLoading) t10.push("isLoading: " + dart.str(this.isLoading));
          if (this.hasValue) t10.push("value: " + dart.str(this.value));
          if (common['AsyncValueX|get#hasError'](T, this)) t10[$addAll](T$.JSArrayOfString().of(["error: " + dart.str(this.error), "stackTrace: " + dart.str(this.stackTrace)]));
          return t10;
        })()[$join](", ");
        return dart.str(this[$runtimeType]) + "(" + content + ")";
      }
      _equals(other) {
        if (other == null) return false;
        return this[$runtimeType]._equals(other[$runtimeType]) && __t$AsyncValueOfT().is(other) && other.isLoading === this.isLoading && other.hasValue === this.hasValue && dart.equals(other.error, this.error) && dart.equals(other.stackTrace, this.stackTrace) && dart.equals(common['AsyncValueX|get#valueOrNull'](T, other), common['AsyncValueX|get#valueOrNull'](T, this));
      }
      get hashCode() {
        let t11, t11$, t11$0;
        return core.Object.hash(this[$runtimeType], this.isLoading, this.hasValue, (t11 = common['AsyncValueX|get#valueOrNull'](T, this), t11 == null ? 0 : t11), (t11$ = this.error, t11$ == null ? 0 : t11$), (t11$0 = this.stackTrace, t11$0 == null ? 0 : t11$0));
      }
    }
    (AsyncValue.__ = function() {
      ;
    }).prototype = AsyncValue.prototype;
    dart.addTypeTests(AsyncValue);
    AsyncValue.prototype[_is_AsyncValue_default] = true;
    dart.addTypeCaches(AsyncValue);
    dart.setMethodSignature(AsyncValue, () => ({
      __proto__: dart.getMethods(AsyncValue.__proto__),
      unwrapPrevious: dart.fnType(common.AsyncValue$(T), [])
    }));
    dart.setStaticMethodSignature(AsyncValue, () => ['data', 'loading', 'error', 'guard']);
    dart.setLibraryUri(AsyncValue, I[8]);
    dart.setStaticFieldSignature(AsyncValue, () => ['_redirecting#']);
    dart.defineExtensionMethods(AsyncValue, ['toString', '_equals']);
    dart.defineExtensionAccessors(AsyncValue, ['hashCode']);
    return AsyncValue;
  });
  common.AsyncValue = common.AsyncValue$();
  dart.addTypeTests(common.AsyncValue, _is_AsyncValue_default);
  const _is__StreamProviderBase_default = Symbol('_is__StreamProviderBase_default');
  stream_provider._StreamProviderBase$ = dart.generic(T => {
    class _StreamProviderBase extends framework.ProviderBase$(common.AsyncValue$(T)) {
      get dependencies() {
        return this[dependencies$5];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
    }
    (_StreamProviderBase.new = function(opts) {
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[dependencies$5] = dependencies;
      _StreamProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = _StreamProviderBase.prototype;
    dart.addTypeTests(_StreamProviderBase);
    _StreamProviderBase.prototype[_is__StreamProviderBase_default] = true;
    dart.addTypeCaches(_StreamProviderBase);
    dart.setLibraryUri(_StreamProviderBase, I[9]);
    dart.setFieldSignature(_StreamProviderBase, () => ({
      __proto__: dart.getFields(_StreamProviderBase.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return _StreamProviderBase;
  });
  stream_provider._StreamProviderBase = stream_provider._StreamProviderBase$();
  dart.addTypeTests(stream_provider._StreamProviderBase, _is__StreamProviderBase_default);
  const _is_StreamProviderRef_default = Symbol('_is_StreamProviderRef_default');
  stream_provider.StreamProviderRef$ = dart.generic(State => {
    class StreamProviderRef extends core.Object {}
    (StreamProviderRef.new = function() {
      ;
    }).prototype = StreamProviderRef.prototype;
    dart.addTypeTests(StreamProviderRef);
    StreamProviderRef.prototype[_is_StreamProviderRef_default] = true;
    dart.addTypeCaches(StreamProviderRef);
    StreamProviderRef[dart.implements] = () => [framework.Ref$(common.AsyncValue$(State))];
    dart.setLibraryUri(StreamProviderRef, I[9]);
    return StreamProviderRef;
  });
  stream_provider.StreamProviderRef = stream_provider.StreamProviderRef$();
  dart.addTypeTests(stream_provider.StreamProviderRef, _is_StreamProviderRef_default);
  const _is_AutoDisposeStreamProviderRef_default = Symbol('_is_AutoDisposeStreamProviderRef_default');
  stream_provider.AutoDisposeStreamProviderRef$ = dart.generic(State => {
    class AutoDisposeStreamProviderRef extends stream_provider.StreamProviderRef$(State) {}
    (AutoDisposeStreamProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeStreamProviderRef.prototype;
    dart.addTypeTests(AutoDisposeStreamProviderRef);
    AutoDisposeStreamProviderRef.prototype[_is_AutoDisposeStreamProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeStreamProviderRef);
    AutoDisposeStreamProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(common.AsyncValue$(State))];
    dart.setLibraryUri(AutoDisposeStreamProviderRef, I[9]);
    return AutoDisposeStreamProviderRef;
  });
  stream_provider.AutoDisposeStreamProviderRef = stream_provider.AutoDisposeStreamProviderRef$();
  dart.addTypeTests(stream_provider.AutoDisposeStreamProviderRef, _is_AutoDisposeStreamProviderRef_default);
  var __AutoDisposeStreamProvider_future = dart.privateName(stream_provider, "_#AutoDisposeStreamProvider#future");
  var __AutoDisposeStreamProvider_stream = dart.privateName(stream_provider, "_#AutoDisposeStreamProvider#stream");
  var _createFn$1 = dart.privateName(stream_provider, "_createFn");
  var _create$ = dart.privateName(stream_provider, "_create");
  const _is_AsyncSelector_default = Symbol('_is_AsyncSelector_default');
  framework.AsyncSelector$ = dart.generic(Input => {
    class AsyncSelector extends framework.ProviderListenable$(common.AsyncValue$(Input)) {}
    AsyncSelector[dart.mixinOn] = ProviderListenable => class AsyncSelector extends ProviderListenable {
      selectAsync(Output, selector) {
        return new (framework._AlwaysAliveAsyncSelector$(Input, Output)).new({selector: selector, provider: this, future: this.future});
      }
    };
    dart.addTypeTests(AsyncSelector);
    AsyncSelector.prototype[_is_AsyncSelector_default] = true;
    dart.addTypeCaches(AsyncSelector);
    AsyncSelector[dart.implements] = () => [framework.ProviderListenable$(common.AsyncValue$(Input))];
    dart.setMethodSignature(AsyncSelector, () => ({
      __proto__: dart.getMethods(AsyncSelector.__proto__),
      selectAsync: dart.gFnType(Output => [framework.ProviderListenable$(async.Future$(Output)), [dart.fnType(Output, [Input])]], Output => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AsyncSelector, I[0]);
    return AsyncSelector;
  });
  framework.AsyncSelector = framework.AsyncSelector$();
  dart.addTypeTests(framework.AsyncSelector, _is_AsyncSelector_default);
  const _is_AutoDisposeStreamProvider_default = Symbol('_is_AutoDisposeStreamProvider_default');
  stream_provider.AutoDisposeStreamProvider$ = dart.generic(T => {
    var __t$AutoDisposeStreamProviderElementOfT = () => (__t$AutoDisposeStreamProviderElementOfT = dart.constFn(stream_provider.AutoDisposeStreamProviderElement$(T)))();
    const _StreamProviderBase_AsyncSelector$36 = class _StreamProviderBase_AsyncSelector extends stream_provider._StreamProviderBase$(T) {};
    (_StreamProviderBase_AsyncSelector$36.new = function(opts) {
      _StreamProviderBase_AsyncSelector$36.__proto__.new.call(this, opts);
    }).prototype = _StreamProviderBase_AsyncSelector$36.prototype;
    dart.applyMixin(_StreamProviderBase_AsyncSelector$36, framework.AsyncSelector$(T));
    class AutoDisposeStreamProvider extends _StreamProviderBase_AsyncSelector$36 {
      static ['_#new#tearOff'](T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (stream_provider.AutoDisposeStreamProvider$(T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create$](ref) {
        let t11;
        t11 = ref;
        return this[_createFn$1](t11);
      }
      createElement() {
        return new (__t$AutoDisposeStreamProviderElementOfT()).__(this);
      }
      get future() {
        let t12, t11;
        t11 = this[__AutoDisposeStreamProvider_future];
        return t11 == null ? (t12 = stream_provider._future(T, this), this[__AutoDisposeStreamProvider_future] == null ? this[__AutoDisposeStreamProvider_future] = t12 : dart.throw(new _internal.LateError.fieldADI("future"))) : t11;
      }
      get stream() {
        let t12, t11;
        t11 = this[__AutoDisposeStreamProvider_stream];
        return t11 == null ? (t12 = stream_provider._stream(T, this), this[__AutoDisposeStreamProvider_stream] == null ? this[__AutoDisposeStreamProvider_stream] = t12 : dart.throw(new _internal.LateError.fieldADI("stream"))) : t11;
      }
    }
    (AutoDisposeStreamProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeStreamProvider_future] = null;
      this[__AutoDisposeStreamProvider_stream] = null;
      this[_createFn$1] = _createFn;
      AutoDisposeStreamProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeStreamProvider.prototype;
    dart.addTypeTests(AutoDisposeStreamProvider);
    AutoDisposeStreamProvider.prototype[_is_AutoDisposeStreamProvider_default] = true;
    dart.addTypeCaches(AutoDisposeStreamProvider);
    dart.setMethodSignature(AutoDisposeStreamProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeStreamProvider.__proto__),
      [_create$]: dart.fnType(async.Stream$(T), [stream_provider.AutoDisposeStreamProviderElement$(T)]),
      createElement: dart.fnType(stream_provider.AutoDisposeStreamProviderElement$(T), [])
    }));
    dart.setGetterSignature(AutoDisposeStreamProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeStreamProvider.__proto__),
      future: framework.Refreshable$(async.Future$(T)),
      stream: framework.Refreshable$(async.Stream$(T))
    }));
    dart.setLibraryUri(AutoDisposeStreamProvider, I[9]);
    dart.setFieldSignature(AutoDisposeStreamProvider, () => ({
      __proto__: dart.getFields(AutoDisposeStreamProvider.__proto__),
      [_createFn$1]: dart.finalFieldType(dart.fnType(async.Stream$(T), [stream_provider.AutoDisposeStreamProviderRef$(T)])),
      [__AutoDisposeStreamProvider_future]: dart.fieldType(dart.nullable(framework.Refreshable$(async.Future$(T)))),
      [__AutoDisposeStreamProvider_stream]: dart.fieldType(dart.nullable(framework.Refreshable$(async.Stream$(T))))
    }));
    dart.setStaticFieldSignature(AutoDisposeStreamProvider, () => ['family']);
    return AutoDisposeStreamProvider;
  });
  stream_provider.AutoDisposeStreamProvider = stream_provider.AutoDisposeStreamProvider$();
  dart.defineLazy(stream_provider.AutoDisposeStreamProvider, {
    /*stream_provider.AutoDisposeStreamProvider.family*/get family() {
      return C[12] || CT.C12;
    }
  }, false);
  dart.addTypeTests(stream_provider.AutoDisposeStreamProvider, _is_AutoDisposeStreamProvider_default);
  var _futureNotifier = dart.privateName(stream_provider, "_futureNotifier");
  var _completer = dart.privateName(stream_provider, "_completer");
  var _streamNotifier = dart.privateName(stream_provider, "_streamNotifier");
  var _streamController = dart.privateName(stream_provider, "_streamController");
  var _streamSubscription = dart.privateName(stream_provider, "_streamSubscription");
  var _listenStream = dart.privateName(stream_provider, "_listenStream");
  const _is_StreamProviderElement_default = Symbol('_is_StreamProviderElement_default');
  stream_provider.StreamProviderElement$ = dart.generic(T => {
    var __t$FutureOfT = () => (__t$FutureOfT = dart.constFn(async.Future$(T)))();
    var __t$ProxyElementValueNotifierOfFutureOfT = () => (__t$ProxyElementValueNotifierOfFutureOfT = dart.constFn(listenable.ProxyElementValueNotifier$(__t$FutureOfT())))();
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    var __t$ProxyElementValueNotifierOfStreamOfT = () => (__t$ProxyElementValueNotifierOfStreamOfT = dart.constFn(listenable.ProxyElementValueNotifier$(__t$StreamOfT())))();
    var __t$StreamControllerOfT = () => (__t$StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$ResultDataOfStreamOfT = () => (__t$ResultDataOfStreamOfT = dart.constFn(result.ResultData$(__t$StreamOfT())))();
    var __t$_StreamProviderBaseOfT = () => (__t$_StreamProviderBaseOfT = dart.constFn(stream_provider._StreamProviderBase$(T)))();
    var __t$VoidToStreamOfT = () => (__t$VoidToStreamOfT = dart.constFn(dart.fnType(__t$StreamOfT(), [])))();
    var __t$ResultDataOfFutureOfT = () => (__t$ResultDataOfFutureOfT = dart.constFn(result.ResultData$(__t$FutureOfT())))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    var __t$CompleterOfT = () => (__t$CompleterOfT = dart.constFn(async.Completer$(T)))();
    var __t$SynchronousFutureOfT = () => (__t$SynchronousFutureOfT = dart.constFn(synchronous_future.SynchronousFuture$(T)))();
    var __t$AsyncDataOfT = () => (__t$AsyncDataOfT = dart.constFn(common.AsyncData$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class StreamProviderElement extends framework.ProviderElementBase$(common.AsyncValue$(T)) {
      static ['_#_#tearOff'](T, provider) {
        return new (stream_provider.StreamProviderElement$(T)).__(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(state) {
        __t$AsyncValueOfT().as(state);
        return this.setState(state);
      }
      create(opts) {
        let t11;
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        common['AsyncTransition|asyncTransition'](T, this, {shouldClearPreviousState: didChangeDependency});
        t11 = this[_streamNotifier];
        t11.result == null ? t11.result = new (__t$ResultDataOfStreamOfT()).new(this[_streamController].stream) : null;
        let streamResult = result.Result.guard(__t$StreamOfT(), dart.fn(() => {
          let provider = __t$_StreamProviderBaseOfT().as(this.provider);
          return provider[_create$](this);
        }, __t$VoidToStreamOfT()));
        streamResult.when(dart.void, {data: dart.bind(this, _listenStream), error: dart.fn((err, stack) => {
            let t11;
            this[_futureNotifier].result = new (__t$ResultDataOfFutureOfT()).new((t11 = __t$FutureOfT().error(err, stack), (() => {
              async['FutureExtensions|ignore'](T, t11);
              return t11;
            })()));
            this.setState(new (__t$AsyncErrorOfT()).new(err, stack));
          }, T$.ObjectAndStackTraceToNull())});
      }
      updateShouldNotify(previous, next) {
        __t$AsyncValueOfT().as(previous);
        __t$AsyncValueOfT().as(next);
        let wasLoading = common.AsyncLoading.is(previous);
        let isLoading = common.AsyncLoading.is(next);
        if (wasLoading || isLoading) return wasLoading !== isLoading;
        return true;
      }
      [_listenStream](stream) {
        __t$StreamOfT().as(stream);
        if (this[_completer] == null) {
          let completer = this[_completer] = __t$CompleterOfT().new();
          this[_futureNotifier].result = new (__t$ResultDataOfFutureOfT()).new(completer.future);
        }
        this[_streamSubscription] = stream.listen(dart.fn(event => {
          let completer = this[_completer];
          if (completer != null) {
            completer.complete(event);
            this[_completer] = null;
            this[_futureNotifier].UNSAFE_setResultWithoutNotifyingListeners(new (__t$ResultDataOfFutureOfT()).new(new (__t$SynchronousFutureOfT()).new(event)));
          } else {
            this[_futureNotifier].result = new (__t$ResultDataOfFutureOfT()).new(new (__t$SynchronousFutureOfT()).new(event));
          }
          this.setState(new (__t$AsyncDataOfT()).new(event));
          this[_streamController].add(event);
        }, __t$TTovoid()), {onError: dart.fn((err, stack) => {
            let t11, t11$;
            let completer = this[_completer];
            if (completer != null) {
              t11 = completer;
              (() => {
                t11.completeError(err, stack);
                async['FutureExtensions|ignore'](T, t11.future);
                return t11;
              })();
              this[_completer] = null;
            } else {
              this[_futureNotifier].result = new (__t$ResultDataOfFutureOfT()).new((t11$ = __t$FutureOfT().error(err, stack), (() => {
                async['FutureExtensions|ignore'](T, t11$);
                return t11$;
              })()));
            }
            this.setState(new (__t$AsyncErrorOfT()).new(err, stack));
            this[_streamController].addError(err, stack);
          }, T$.ObjectAndStackTraceToNull())});
      }
      runOnDispose() {
        let t11;
        super.runOnDispose();
        t11 = this[_streamSubscription];
        t11 == null ? null : t11.cancel();
      }
      dispose() {
        super.dispose();
        this[_streamController].close();
      }
      visitChildren(opts) {
        let elementVisitor = opts && 'elementVisitor' in opts ? opts.elementVisitor : null;
        let notifierVisitor = opts && 'notifierVisitor' in opts ? opts.notifierVisitor : null;
        super.visitChildren({elementVisitor: elementVisitor, notifierVisitor: notifierVisitor});
        notifierVisitor(this[_futureNotifier]);
        notifierVisitor(this[_streamNotifier]);
      }
    }
    (StreamProviderElement.__ = function(provider) {
      this[_futureNotifier] = new (__t$ProxyElementValueNotifierOfFutureOfT()).new();
      this[_completer] = null;
      this[_streamNotifier] = new (__t$ProxyElementValueNotifierOfStreamOfT()).new();
      this[_streamController] = __t$StreamControllerOfT().broadcast();
      this[_streamSubscription] = null;
      StreamProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = StreamProviderElement.prototype;
    dart.addTypeTests(StreamProviderElement);
    StreamProviderElement.prototype[_is_StreamProviderElement_default] = true;
    dart.addTypeCaches(StreamProviderElement);
    StreamProviderElement[dart.implements] = () => [stream_provider.StreamProviderRef$(T)];
    dart.setMethodSignature(StreamProviderElement, () => ({
      __proto__: dart.getMethods(StreamProviderElement.__proto__),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [_listenStream]: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(StreamProviderElement, () => ({
      __proto__: dart.getGetters(StreamProviderElement.__proto__),
      state: common.AsyncValue$(T)
    }));
    dart.setSetterSignature(StreamProviderElement, () => ({
      __proto__: dart.getSetters(StreamProviderElement.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(StreamProviderElement, I[9]);
    dart.setFieldSignature(StreamProviderElement, () => ({
      __proto__: dart.getFields(StreamProviderElement.__proto__),
      [_futureNotifier]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(async.Future$(T))),
      [_completer]: dart.fieldType(dart.nullable(async.Completer$(T))),
      [_streamNotifier]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(async.Stream$(T))),
      [_streamController]: dart.finalFieldType(async.StreamController$(T)),
      [_streamSubscription]: dart.fieldType(dart.nullable(async.StreamSubscription$(T)))
    }));
    return StreamProviderElement;
  });
  stream_provider.StreamProviderElement = stream_provider.StreamProviderElement$();
  dart.addTypeTests(stream_provider.StreamProviderElement, _is_StreamProviderElement_default);
  const _is_AutoDisposeStreamProviderElement_default = Symbol('_is_AutoDisposeStreamProviderElement_default');
  stream_provider.AutoDisposeStreamProviderElement$ = dart.generic(T => {
    const StreamProviderElement_AutoDisposeProviderElementMixin$36 = class StreamProviderElement_AutoDisposeProviderElementMixin extends stream_provider.StreamProviderElement$(T) {};
    (StreamProviderElement_AutoDisposeProviderElementMixin$36.__ = function(provider) {
      framework.AutoDisposeProviderElementMixin$(common.AsyncValue$(T))[dart.mixinNew].call(this);
      StreamProviderElement_AutoDisposeProviderElementMixin$36.__proto__.__.call(this, provider);
    }).prototype = StreamProviderElement_AutoDisposeProviderElementMixin$36.prototype;
    dart.applyMixin(StreamProviderElement_AutoDisposeProviderElementMixin$36, framework.AutoDisposeProviderElementMixin$(common.AsyncValue$(T)));
    class AutoDisposeStreamProviderElement extends StreamProviderElement_AutoDisposeProviderElementMixin$36 {
      static ['_#_#tearOff'](T, provider) {
        return new (stream_provider.AutoDisposeStreamProviderElement$(T)).__(provider);
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
    (AutoDisposeStreamProviderElement.__ = function(provider) {
      AutoDisposeStreamProviderElement.__proto__.__.call(this, provider);
      ;
    }).prototype = AutoDisposeStreamProviderElement.prototype;
    dart.addTypeTests(AutoDisposeStreamProviderElement);
    AutoDisposeStreamProviderElement.prototype[_is_AutoDisposeStreamProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeStreamProviderElement);
    AutoDisposeStreamProviderElement[dart.implements] = () => [stream_provider.AutoDisposeStreamProviderRef$(T)];
    dart.setMethodSignature(AutoDisposeStreamProviderElement, () => ({
      __proto__: dart.getMethods(AutoDisposeStreamProviderElement.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeStreamProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeStreamProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeStreamProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeStreamProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeStreamProviderElement, I[9]);
    return AutoDisposeStreamProviderElement;
  });
  stream_provider.AutoDisposeStreamProviderElement = stream_provider.AutoDisposeStreamProviderElement$();
  dart.addTypeTests(stream_provider.AutoDisposeStreamProviderElement, _is_AutoDisposeStreamProviderElement_default);
  const _is_AutoDisposeStreamProviderFamily_default = Symbol('_is_AutoDisposeStreamProviderFamily_default');
  stream_provider.AutoDisposeStreamProviderFamily$ = dart.generic((R, Arg) => {
    class AutoDisposeStreamProviderFamily extends framework.AutoDisposeFamilyBase$(stream_provider.AutoDisposeStreamProviderRef$(R), common.AsyncValue$(R), Arg, async.Stream$(R), stream_provider.AutoDisposeStreamProvider$(R)) {
      static ['_#new#tearOff'](R, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (stream_provider.AutoDisposeStreamProviderFamily$(R, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AutoDisposeStreamProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AutoDisposeStreamProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[13] || CT.C13, R), name: name, dependencies: dependencies});
      ;
    }).prototype = AutoDisposeStreamProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeStreamProviderFamily);
    AutoDisposeStreamProviderFamily.prototype[_is_AutoDisposeStreamProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeStreamProviderFamily);
    dart.setLibraryUri(AutoDisposeStreamProviderFamily, I[9]);
    return AutoDisposeStreamProviderFamily;
  });
  stream_provider.AutoDisposeStreamProviderFamily = stream_provider.AutoDisposeStreamProviderFamily$();
  dart.addTypeTests(stream_provider.AutoDisposeStreamProviderFamily, _is_AutoDisposeStreamProviderFamily_default);
  var __StreamProvider_future = dart.privateName(stream_provider, "_#StreamProvider#future");
  var __StreamProvider_stream = dart.privateName(stream_provider, "_#StreamProvider#stream");
  const _is_AlwaysAliveProviderListenable_default = Symbol('_is_AlwaysAliveProviderListenable_default');
  framework.AlwaysAliveProviderListenable$ = dart.generic(State => {
    class AlwaysAliveProviderListenable extends framework.ProviderListenable$(State) {}
    AlwaysAliveProviderListenable[dart.mixinOn] = ProviderListenable => class AlwaysAliveProviderListenable extends ProviderListenable {
      select(Selected, selector) {
        return new (framework._AlwaysAliveProviderSelector$(State, Selected)).new({provider: this, selector: selector});
      }
    };
    dart.addTypeTests(AlwaysAliveProviderListenable);
    AlwaysAliveProviderListenable.prototype[_is_AlwaysAliveProviderListenable_default] = true;
    dart.addTypeCaches(AlwaysAliveProviderListenable);
    AlwaysAliveProviderListenable[dart.implements] = () => [framework.ProviderListenable$(State)];
    dart.setMethodSignature(AlwaysAliveProviderListenable, () => ({
      __proto__: dart.getMethods(AlwaysAliveProviderListenable.__proto__),
      select: dart.gFnType(Selected => [framework.AlwaysAliveProviderListenable$(Selected), [dart.fnType(Selected, [State])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AlwaysAliveProviderListenable, I[0]);
    return AlwaysAliveProviderListenable;
  });
  framework.AlwaysAliveProviderListenable = framework.AlwaysAliveProviderListenable$();
  dart.addTypeTests(framework.AlwaysAliveProviderListenable, _is_AlwaysAliveProviderListenable_default);
  const _is_AlwaysAliveAsyncSelector_default = Symbol('_is_AlwaysAliveAsyncSelector_default');
  framework.AlwaysAliveAsyncSelector$ = dart.generic(Input => {
    class AlwaysAliveAsyncSelector extends framework.AlwaysAliveProviderListenable$(common.AsyncValue$(Input)) {}
    AlwaysAliveAsyncSelector[dart.mixinOn] = AlwaysAliveProviderListenable => class AlwaysAliveAsyncSelector extends AlwaysAliveProviderListenable {
      selectAsync(Output, selector) {
        return new (framework._AlwaysAliveAsyncSelector$(Input, Output)).new({selector: selector, provider: this, future: this.future});
      }
    };
    dart.addTypeTests(AlwaysAliveAsyncSelector);
    AlwaysAliveAsyncSelector.prototype[_is_AlwaysAliveAsyncSelector_default] = true;
    dart.addTypeCaches(AlwaysAliveAsyncSelector);
    AlwaysAliveAsyncSelector[dart.implements] = () => [framework.AlwaysAliveProviderListenable$(common.AsyncValue$(Input))];
    dart.setMethodSignature(AlwaysAliveAsyncSelector, () => ({
      __proto__: dart.getMethods(AlwaysAliveAsyncSelector.__proto__),
      selectAsync: dart.gFnType(Output => [framework.AlwaysAliveProviderListenable$(async.Future$(Output)), [dart.fnType(Output, [Input])]], Output => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AlwaysAliveAsyncSelector, I[0]);
    return AlwaysAliveAsyncSelector;
  });
  framework.AlwaysAliveAsyncSelector = framework.AlwaysAliveAsyncSelector$();
  dart.addTypeTests(framework.AlwaysAliveAsyncSelector, _is_AlwaysAliveAsyncSelector_default);
  const _is_StreamProvider_default = Symbol('_is_StreamProvider_default');
  stream_provider.StreamProvider$ = dart.generic(T => {
    var __t$StreamProviderElementOfT = () => (__t$StreamProviderElementOfT = dart.constFn(stream_provider.StreamProviderElement$(T)))();
    const _StreamProviderBase_AlwaysAliveProviderBase$36 = class _StreamProviderBase_AlwaysAliveProviderBase extends stream_provider._StreamProviderBase$(T) {};
    (_StreamProviderBase_AlwaysAliveProviderBase$36.new = function(opts) {
      _StreamProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, opts);
    }).prototype = _StreamProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(_StreamProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(common.AsyncValue$(T)));
    const _StreamProviderBase_AlwaysAliveAsyncSelector$36 = class _StreamProviderBase_AlwaysAliveAsyncSelector extends _StreamProviderBase_AlwaysAliveProviderBase$36 {};
    (_StreamProviderBase_AlwaysAliveAsyncSelector$36.new = function(opts) {
      _StreamProviderBase_AlwaysAliveAsyncSelector$36.__proto__.new.call(this, opts);
    }).prototype = _StreamProviderBase_AlwaysAliveAsyncSelector$36.prototype;
    dart.applyMixin(_StreamProviderBase_AlwaysAliveAsyncSelector$36, framework.AlwaysAliveAsyncSelector$(T));
    class StreamProvider extends _StreamProviderBase_AlwaysAliveAsyncSelector$36 {
      static ['_#new#tearOff'](T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (stream_provider.StreamProvider$(T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get future() {
        let t12, t11;
        t11 = this[__StreamProvider_future];
        return t11 == null ? (t12 = stream_provider._future(T, this), this[__StreamProvider_future] == null ? this[__StreamProvider_future] = t12 : dart.throw(new _internal.LateError.fieldADI("future"))) : t11;
      }
      get stream() {
        let t12, t11;
        t11 = this[__StreamProvider_stream];
        return t11 == null ? (t12 = stream_provider._stream(T, this), this[__StreamProvider_stream] == null ? this[__StreamProvider_stream] = t12 : dart.throw(new _internal.LateError.fieldADI("stream"))) : t11;
      }
      [_create$](ref) {
        let t11;
        t11 = ref;
        return this[_createFn$1](t11);
      }
      createElement() {
        return new (__t$StreamProviderElementOfT()).__(this);
      }
    }
    (StreamProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__StreamProvider_future] = null;
      this[__StreamProvider_stream] = null;
      this[_createFn$1] = _createFn;
      StreamProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = StreamProvider.prototype;
    dart.addTypeTests(StreamProvider);
    StreamProvider.prototype[_is_StreamProvider_default] = true;
    dart.addTypeCaches(StreamProvider);
    dart.setMethodSignature(StreamProvider, () => ({
      __proto__: dart.getMethods(StreamProvider.__proto__),
      [_create$]: dart.fnType(async.Stream$(T), [stream_provider.StreamProviderElement$(T)]),
      createElement: dart.fnType(stream_provider.StreamProviderElement$(T), [])
    }));
    dart.setGetterSignature(StreamProvider, () => ({
      __proto__: dart.getGetters(StreamProvider.__proto__),
      future: framework.AlwaysAliveRefreshable$(async.Future$(T)),
      stream: framework.AlwaysAliveRefreshable$(async.Stream$(T))
    }));
    dart.setLibraryUri(StreamProvider, I[9]);
    dart.setFieldSignature(StreamProvider, () => ({
      __proto__: dart.getFields(StreamProvider.__proto__),
      [_createFn$1]: dart.finalFieldType(dart.fnType(async.Stream$(T), [stream_provider.StreamProviderRef$(T)])),
      [__StreamProvider_future]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(async.Future$(T)))),
      [__StreamProvider_stream]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(async.Stream$(T))))
    }));
    dart.setStaticFieldSignature(StreamProvider, () => ['autoDispose', 'family']);
    return StreamProvider;
  });
  stream_provider.StreamProvider = stream_provider.StreamProvider$();
  dart.defineLazy(stream_provider.StreamProvider, {
    /*stream_provider.StreamProvider.autoDispose*/get autoDispose() {
      return C[14] || CT.C14;
    },
    /*stream_provider.StreamProvider.family*/get family() {
      return C[15] || CT.C15;
    }
  }, false);
  dart.addTypeTests(stream_provider.StreamProvider, _is_StreamProvider_default);
  const _is_StreamProviderFamily_default = Symbol('_is_StreamProviderFamily_default');
  stream_provider.StreamProviderFamily$ = dart.generic((R, Arg) => {
    class StreamProviderFamily extends framework.FamilyBase$(stream_provider.StreamProviderRef$(R), common.AsyncValue$(R), Arg, async.Stream$(R), stream_provider.StreamProvider$(R)) {
      static ['_#new#tearOff'](R, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (stream_provider.StreamProviderFamily$(R, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (StreamProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      StreamProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[16] || CT.C16, R), name: name, dependencies: dependencies});
      ;
    }).prototype = StreamProviderFamily.prototype;
    dart.addTypeTests(StreamProviderFamily);
    StreamProviderFamily.prototype[_is_StreamProviderFamily_default] = true;
    dart.addTypeCaches(StreamProviderFamily);
    dart.setLibraryUri(StreamProviderFamily, I[9]);
    return StreamProviderFamily;
  });
  stream_provider.StreamProviderFamily = stream_provider.StreamProviderFamily$();
  dart.addTypeTests(stream_provider.StreamProviderFamily, _is_StreamProviderFamily_default);
  stream_provider._future = function _future(T, that) {
    return new (framework.ProviderElementProxy$(common.AsyncValue$(T), async.Future$(T))).new(that, dart.fn(element => stream_provider.StreamProviderElement$(T).as(element)[_futureNotifier], dart.fnType(listenable.ProxyElementValueNotifier$(async.Future$(T)), [framework.ProviderElementBase$(common.AsyncValue$(T))])));
  };
  stream_provider._stream = function _stream(T, that) {
    return new (framework.ProviderElementProxy$(common.AsyncValue$(T), async.Stream$(T))).new(that, dart.fn(element => stream_provider.StreamProviderElement$(T).as(element)[_streamNotifier], dart.fnType(listenable.ProxyElementValueNotifier$(async.Stream$(T)), [framework.ProviderElementBase$(common.AsyncValue$(T))])));
  };
  var dependencies$6 = dart.privateName(state_notifier_provider, "_StateNotifierProviderBase.dependencies");
  const _is__StateNotifierProviderBase_default = Symbol('_is__StateNotifierProviderBase_default');
  state_notifier_provider._StateNotifierProviderBase$ = dart.generic((NotifierT, T) => {
    class _StateNotifierProviderBase extends framework.ProviderBase$(T) {
      get dependencies() {
        return this[dependencies$6];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
    }
    (_StateNotifierProviderBase.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[dependencies$6] = dependencies;
      _StateNotifierProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = _StateNotifierProviderBase.prototype;
    dart.addTypeTests(_StateNotifierProviderBase);
    _StateNotifierProviderBase.prototype[_is__StateNotifierProviderBase_default] = true;
    dart.addTypeCaches(_StateNotifierProviderBase);
    dart.setLibraryUri(_StateNotifierProviderBase, I[10]);
    dart.setFieldSignature(_StateNotifierProviderBase, () => ({
      __proto__: dart.getFields(_StateNotifierProviderBase.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return _StateNotifierProviderBase;
  });
  state_notifier_provider._StateNotifierProviderBase = state_notifier_provider._StateNotifierProviderBase$();
  dart.addTypeTests(state_notifier_provider._StateNotifierProviderBase, _is__StateNotifierProviderBase_default);
  const _is_StateNotifierProviderRef_default = Symbol('_is_StateNotifierProviderRef_default');
  state_notifier_provider.StateNotifierProviderRef$ = dart.generic((NotifierT, T) => {
    class StateNotifierProviderRef extends core.Object {}
    (StateNotifierProviderRef.new = function() {
      ;
    }).prototype = StateNotifierProviderRef.prototype;
    dart.addTypeTests(StateNotifierProviderRef);
    StateNotifierProviderRef.prototype[_is_StateNotifierProviderRef_default] = true;
    dart.addTypeCaches(StateNotifierProviderRef);
    StateNotifierProviderRef[dart.implements] = () => [framework.Ref$(T)];
    dart.setLibraryUri(StateNotifierProviderRef, I[10]);
    return StateNotifierProviderRef;
  });
  state_notifier_provider.StateNotifierProviderRef = state_notifier_provider.StateNotifierProviderRef$();
  dart.addTypeTests(state_notifier_provider.StateNotifierProviderRef, _is_StateNotifierProviderRef_default);
  const _is_AutoDisposeStateNotifierProviderRef_default = Symbol('_is_AutoDisposeStateNotifierProviderRef_default');
  state_notifier_provider.AutoDisposeStateNotifierProviderRef$ = dart.generic((NotifierT, T) => {
    class AutoDisposeStateNotifierProviderRef extends state_notifier_provider.StateNotifierProviderRef$(NotifierT, T) {}
    (AutoDisposeStateNotifierProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeStateNotifierProviderRef.prototype;
    dart.addTypeTests(AutoDisposeStateNotifierProviderRef);
    AutoDisposeStateNotifierProviderRef.prototype[_is_AutoDisposeStateNotifierProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeStateNotifierProviderRef);
    AutoDisposeStateNotifierProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(T)];
    dart.setLibraryUri(AutoDisposeStateNotifierProviderRef, I[10]);
    return AutoDisposeStateNotifierProviderRef;
  });
  state_notifier_provider.AutoDisposeStateNotifierProviderRef = state_notifier_provider.AutoDisposeStateNotifierProviderRef$();
  dart.addTypeTests(state_notifier_provider.AutoDisposeStateNotifierProviderRef, _is_AutoDisposeStateNotifierProviderRef_default);
  var __AutoDisposeStateNotifierProvider_notifier = dart.privateName(state_notifier_provider, "_#AutoDisposeStateNotifierProvider#notifier");
  var _createFn$2 = dart.privateName(state_notifier_provider, "_createFn");
  var _create$0 = dart.privateName(state_notifier_provider, "_create");
  const _is_AutoDisposeStateNotifierProvider_default = Symbol('_is_AutoDisposeStateNotifierProvider_default');
  state_notifier_provider.AutoDisposeStateNotifierProvider$ = dart.generic((NotifierT, T) => {
    var __t$AutoDisposeStateNotifierProviderElementOfNotifierT$T = () => (__t$AutoDisposeStateNotifierProviderElementOfNotifierT$T = dart.constFn(state_notifier_provider.AutoDisposeStateNotifierProviderElement$(NotifierT, T)))();
    class AutoDisposeStateNotifierProvider extends state_notifier_provider._StateNotifierProviderBase$(NotifierT, T) {
      static ['_#new#tearOff'](NotifierT, T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (state_notifier_provider.AutoDisposeStateNotifierProvider$(NotifierT, T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create$0](ref) {
        let t11;
        t11 = ref;
        return this[_createFn$2](t11);
      }
      createElement() {
        return new (__t$AutoDisposeStateNotifierProviderElementOfNotifierT$T()).__(this);
      }
      get notifier() {
        let t12, t11;
        t11 = this[__AutoDisposeStateNotifierProvider_notifier];
        return t11 == null ? (t12 = state_notifier_provider._notifier(NotifierT, T, this), this[__AutoDisposeStateNotifierProvider_notifier] == null ? this[__AutoDisposeStateNotifierProvider_notifier] = t12 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t11;
      }
    }
    (AutoDisposeStateNotifierProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeStateNotifierProvider_notifier] = null;
      this[_createFn$2] = _createFn;
      AutoDisposeStateNotifierProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeStateNotifierProvider.prototype;
    dart.addTypeTests(AutoDisposeStateNotifierProvider);
    AutoDisposeStateNotifierProvider.prototype[_is_AutoDisposeStateNotifierProvider_default] = true;
    dart.addTypeCaches(AutoDisposeStateNotifierProvider);
    dart.setMethodSignature(AutoDisposeStateNotifierProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeStateNotifierProvider.__proto__),
      [_create$0]: dart.fnType(NotifierT, [state_notifier_provider.AutoDisposeStateNotifierProviderElement$(NotifierT, T)]),
      createElement: dart.fnType(state_notifier_provider.AutoDisposeStateNotifierProviderElement$(NotifierT, T), [])
    }));
    dart.setGetterSignature(AutoDisposeStateNotifierProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeStateNotifierProvider.__proto__),
      notifier: framework.Refreshable$(NotifierT)
    }));
    dart.setLibraryUri(AutoDisposeStateNotifierProvider, I[10]);
    dart.setFieldSignature(AutoDisposeStateNotifierProvider, () => ({
      __proto__: dart.getFields(AutoDisposeStateNotifierProvider.__proto__),
      [_createFn$2]: dart.finalFieldType(dart.fnType(NotifierT, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(NotifierT, T)])),
      [__AutoDisposeStateNotifierProvider_notifier]: dart.fieldType(dart.nullable(framework.Refreshable$(NotifierT)))
    }));
    dart.setStaticFieldSignature(AutoDisposeStateNotifierProvider, () => ['family']);
    return AutoDisposeStateNotifierProvider;
  });
  state_notifier_provider.AutoDisposeStateNotifierProvider = state_notifier_provider.AutoDisposeStateNotifierProvider$();
  dart.defineLazy(state_notifier_provider.AutoDisposeStateNotifierProvider, {
    /*state_notifier_provider.AutoDisposeStateNotifierProvider.family*/get family() {
      return C[17] || CT.C17;
    }
  }, false);
  dart.addTypeTests(state_notifier_provider.AutoDisposeStateNotifierProvider, _is_AutoDisposeStateNotifierProvider_default);
  var _notifierNotifier$ = dart.privateName(state_notifier_provider, "_notifierNotifier");
  var _removeListener$0 = dart.privateName(state_notifier_provider, "_removeListener");
  const _is_StateNotifierProviderElement_default = Symbol('_is_StateNotifierProviderElement_default');
  state_notifier_provider.StateNotifierProviderElement$ = dart.generic((NotifierT, T) => {
    var __t$ProxyElementValueNotifierOfNotifierT = () => (__t$ProxyElementValueNotifierOfNotifierT = dart.constFn(listenable.ProxyElementValueNotifier$(NotifierT)))();
    var __t$_StateNotifierProviderBaseOfNotifierT$T = () => (__t$_StateNotifierProviderBaseOfNotifierT$T = dart.constFn(state_notifier_provider._StateNotifierProviderBase$(NotifierT, T)))();
    var __t$VoidToNotifierT = () => (__t$VoidToNotifierT = dart.constFn(dart.fnType(NotifierT, [])))();
    class StateNotifierProviderElement extends framework.ProviderElementBase$(T) {
      static ['_#_#tearOff'](NotifierT, T, provider) {
        return new (state_notifier_provider.StateNotifierProviderElement$(NotifierT, T)).__(provider);
      }
      get notifier() {
        return this[_notifierNotifier$].value;
      }
      create(opts) {
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        let provider = __t$_StateNotifierProviderBaseOfNotifierT$T().as(this.provider);
        let notifier = this[_notifierNotifier$].result = result.Result.guard(NotifierT, dart.fn(() => provider[_create$0](this), __t$VoidToNotifierT()));
        this[_removeListener$0] = notifier.requireState.addListener(dart.bind(this, 'setState'), {fireImmediately: true});
      }
      updateShouldNotify(previous, next) {
        T.as(previous);
        T.as(next);
        return dart.nullCheck(this[_notifierNotifier$].result).requireState.updateShouldNotify(previous, next);
      }
      runOnDispose() {
        let t11, t11$;
        super.runOnDispose();
        t11 = this[_removeListener$0];
        t11 == null ? null : t11();
        this[_removeListener$0] = null;
        let notifier = (t11$ = this[_notifierNotifier$].result, t11$ == null ? null : t11$.stateOrNull);
        if (notifier != null) {
          run_guarded.runGuarded(dart.bind(notifier, 'dispose'));
        }
        this[_notifierNotifier$].result = null;
      }
      visitChildren(opts) {
        let elementVisitor = opts && 'elementVisitor' in opts ? opts.elementVisitor : null;
        let notifierVisitor = opts && 'notifierVisitor' in opts ? opts.notifierVisitor : null;
        super.visitChildren({elementVisitor: elementVisitor, notifierVisitor: notifierVisitor});
        notifierVisitor(this[_notifierNotifier$]);
      }
    }
    (StateNotifierProviderElement.__ = function(provider) {
      this[_notifierNotifier$] = new (__t$ProxyElementValueNotifierOfNotifierT()).new();
      this[_removeListener$0] = null;
      StateNotifierProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = StateNotifierProviderElement.prototype;
    dart.addTypeTests(StateNotifierProviderElement);
    StateNotifierProviderElement.prototype[_is_StateNotifierProviderElement_default] = true;
    dart.addTypeCaches(StateNotifierProviderElement);
    StateNotifierProviderElement[dart.implements] = () => [state_notifier_provider.StateNotifierProviderRef$(NotifierT, T)];
    dart.setMethodSignature(StateNotifierProviderElement, () => ({
      __proto__: dart.getMethods(StateNotifierProviderElement.__proto__),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(StateNotifierProviderElement, () => ({
      __proto__: dart.getGetters(StateNotifierProviderElement.__proto__),
      notifier: NotifierT
    }));
    dart.setLibraryUri(StateNotifierProviderElement, I[10]);
    dart.setFieldSignature(StateNotifierProviderElement, () => ({
      __proto__: dart.getFields(StateNotifierProviderElement.__proto__),
      [_notifierNotifier$]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(NotifierT)),
      [_removeListener$0]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [])))
    }));
    return StateNotifierProviderElement;
  });
  state_notifier_provider.StateNotifierProviderElement = state_notifier_provider.StateNotifierProviderElement$();
  dart.addTypeTests(state_notifier_provider.StateNotifierProviderElement, _is_StateNotifierProviderElement_default);
  const _is_AutoDisposeStateNotifierProviderElement_default = Symbol('_is_AutoDisposeStateNotifierProviderElement_default');
  state_notifier_provider.AutoDisposeStateNotifierProviderElement$ = dart.generic((NotifierT, T) => {
    const StateNotifierProviderElement_AutoDisposeProviderElementMixin$36 = class StateNotifierProviderElement_AutoDisposeProviderElementMixin extends state_notifier_provider.StateNotifierProviderElement$(NotifierT, T) {};
    (StateNotifierProviderElement_AutoDisposeProviderElementMixin$36.__ = function(provider) {
      framework.AutoDisposeProviderElementMixin$(T)[dart.mixinNew].call(this);
      StateNotifierProviderElement_AutoDisposeProviderElementMixin$36.__proto__.__.call(this, provider);
    }).prototype = StateNotifierProviderElement_AutoDisposeProviderElementMixin$36.prototype;
    dart.applyMixin(StateNotifierProviderElement_AutoDisposeProviderElementMixin$36, framework.AutoDisposeProviderElementMixin$(T));
    class AutoDisposeStateNotifierProviderElement extends StateNotifierProviderElement_AutoDisposeProviderElementMixin$36 {
      static ['_#_#tearOff'](NotifierT, T, provider) {
        return new (state_notifier_provider.AutoDisposeStateNotifierProviderElement$(NotifierT, T)).__(provider);
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
    (AutoDisposeStateNotifierProviderElement.__ = function(provider) {
      AutoDisposeStateNotifierProviderElement.__proto__.__.call(this, provider);
      ;
    }).prototype = AutoDisposeStateNotifierProviderElement.prototype;
    dart.addTypeTests(AutoDisposeStateNotifierProviderElement);
    AutoDisposeStateNotifierProviderElement.prototype[_is_AutoDisposeStateNotifierProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeStateNotifierProviderElement);
    AutoDisposeStateNotifierProviderElement[dart.implements] = () => [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(NotifierT, T)];
    dart.setMethodSignature(AutoDisposeStateNotifierProviderElement, () => ({
      __proto__: dart.getMethods(AutoDisposeStateNotifierProviderElement.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeStateNotifierProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeStateNotifierProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeStateNotifierProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeStateNotifierProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeStateNotifierProviderElement, I[10]);
    return AutoDisposeStateNotifierProviderElement;
  });
  state_notifier_provider.AutoDisposeStateNotifierProviderElement = state_notifier_provider.AutoDisposeStateNotifierProviderElement$();
  dart.addTypeTests(state_notifier_provider.AutoDisposeStateNotifierProviderElement, _is_AutoDisposeStateNotifierProviderElement_default);
  const _is_AutoDisposeStateNotifierProviderFamily_default = Symbol('_is_AutoDisposeStateNotifierProviderFamily_default');
  state_notifier_provider.AutoDisposeStateNotifierProviderFamily$ = dart.generic((NotifierT, T, Arg) => {
    class AutoDisposeStateNotifierProviderFamily extends framework.AutoDisposeFamilyBase$(state_notifier_provider.AutoDisposeStateNotifierProviderRef$(NotifierT, T), T, Arg, NotifierT, state_notifier_provider.AutoDisposeStateNotifierProvider$(NotifierT, T)) {
      static ['_#new#tearOff'](NotifierT, T, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (state_notifier_provider.AutoDisposeStateNotifierProviderFamily$(NotifierT, T, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AutoDisposeStateNotifierProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AutoDisposeStateNotifierProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[18] || CT.C18, NotifierT, T), name: name, dependencies: dependencies});
      ;
    }).prototype = AutoDisposeStateNotifierProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeStateNotifierProviderFamily);
    AutoDisposeStateNotifierProviderFamily.prototype[_is_AutoDisposeStateNotifierProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeStateNotifierProviderFamily);
    dart.setLibraryUri(AutoDisposeStateNotifierProviderFamily, I[10]);
    return AutoDisposeStateNotifierProviderFamily;
  });
  state_notifier_provider.AutoDisposeStateNotifierProviderFamily = state_notifier_provider.AutoDisposeStateNotifierProviderFamily$();
  dart.addTypeTests(state_notifier_provider.AutoDisposeStateNotifierProviderFamily, _is_AutoDisposeStateNotifierProviderFamily_default);
  var __StateNotifierProvider_notifier = dart.privateName(state_notifier_provider, "_#StateNotifierProvider#notifier");
  const _is_StateNotifierProvider_default = Symbol('_is_StateNotifierProvider_default');
  state_notifier_provider.StateNotifierProvider$ = dart.generic((NotifierT, T) => {
    var __t$StateNotifierProviderElementOfNotifierT$T = () => (__t$StateNotifierProviderElementOfNotifierT$T = dart.constFn(state_notifier_provider.StateNotifierProviderElement$(NotifierT, T)))();
    const _StateNotifierProviderBase_AlwaysAliveProviderBase$36 = class _StateNotifierProviderBase_AlwaysAliveProviderBase extends state_notifier_provider._StateNotifierProviderBase$(NotifierT, T) {};
    (_StateNotifierProviderBase_AlwaysAliveProviderBase$36.new = function(opts) {
      _StateNotifierProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, opts);
    }).prototype = _StateNotifierProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(_StateNotifierProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(T));
    class StateNotifierProvider extends _StateNotifierProviderBase_AlwaysAliveProviderBase$36 {
      static ['_#new#tearOff'](NotifierT, T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (state_notifier_provider.StateNotifierProvider$(NotifierT, T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create$0](ref) {
        let t11;
        t11 = ref;
        return this[_createFn$2](t11);
      }
      createElement() {
        return new (__t$StateNotifierProviderElementOfNotifierT$T()).__(this);
      }
      get notifier() {
        let t12, t11;
        t11 = this[__StateNotifierProvider_notifier];
        return t11 == null ? (t12 = state_notifier_provider._notifier(NotifierT, T, this), this[__StateNotifierProvider_notifier] == null ? this[__StateNotifierProvider_notifier] = t12 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t11;
      }
    }
    (StateNotifierProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__StateNotifierProvider_notifier] = null;
      this[_createFn$2] = _createFn;
      StateNotifierProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = StateNotifierProvider.prototype;
    dart.addTypeTests(StateNotifierProvider);
    StateNotifierProvider.prototype[_is_StateNotifierProvider_default] = true;
    dart.addTypeCaches(StateNotifierProvider);
    dart.setMethodSignature(StateNotifierProvider, () => ({
      __proto__: dart.getMethods(StateNotifierProvider.__proto__),
      [_create$0]: dart.fnType(NotifierT, [state_notifier_provider.StateNotifierProviderElement$(NotifierT, T)]),
      createElement: dart.fnType(state_notifier_provider.StateNotifierProviderElement$(NotifierT, T), [])
    }));
    dart.setGetterSignature(StateNotifierProvider, () => ({
      __proto__: dart.getGetters(StateNotifierProvider.__proto__),
      notifier: framework.AlwaysAliveRefreshable$(NotifierT)
    }));
    dart.setLibraryUri(StateNotifierProvider, I[10]);
    dart.setFieldSignature(StateNotifierProvider, () => ({
      __proto__: dart.getFields(StateNotifierProvider.__proto__),
      [_createFn$2]: dart.finalFieldType(dart.fnType(NotifierT, [state_notifier_provider.StateNotifierProviderRef$(NotifierT, T)])),
      [__StateNotifierProvider_notifier]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(NotifierT)))
    }));
    dart.setStaticFieldSignature(StateNotifierProvider, () => ['autoDispose', 'family']);
    return StateNotifierProvider;
  });
  state_notifier_provider.StateNotifierProvider = state_notifier_provider.StateNotifierProvider$();
  dart.defineLazy(state_notifier_provider.StateNotifierProvider, {
    /*state_notifier_provider.StateNotifierProvider.autoDispose*/get autoDispose() {
      return C[19] || CT.C19;
    },
    /*state_notifier_provider.StateNotifierProvider.family*/get family() {
      return C[20] || CT.C20;
    }
  }, false);
  dart.addTypeTests(state_notifier_provider.StateNotifierProvider, _is_StateNotifierProvider_default);
  const _is_StateNotifierProviderFamily_default = Symbol('_is_StateNotifierProviderFamily_default');
  state_notifier_provider.StateNotifierProviderFamily$ = dart.generic((NotifierT, T, Arg) => {
    class StateNotifierProviderFamily extends framework.FamilyBase$(state_notifier_provider.StateNotifierProviderRef$(NotifierT, T), T, Arg, NotifierT, state_notifier_provider.StateNotifierProvider$(NotifierT, T)) {
      static ['_#new#tearOff'](NotifierT, T, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (state_notifier_provider.StateNotifierProviderFamily$(NotifierT, T, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (StateNotifierProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      StateNotifierProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[21] || CT.C21, NotifierT, T), name: name, dependencies: dependencies});
      ;
    }).prototype = StateNotifierProviderFamily.prototype;
    dart.addTypeTests(StateNotifierProviderFamily);
    StateNotifierProviderFamily.prototype[_is_StateNotifierProviderFamily_default] = true;
    dart.addTypeCaches(StateNotifierProviderFamily);
    dart.setLibraryUri(StateNotifierProviderFamily, I[10]);
    return StateNotifierProviderFamily;
  });
  state_notifier_provider.StateNotifierProviderFamily = state_notifier_provider.StateNotifierProviderFamily$();
  dart.addTypeTests(state_notifier_provider.StateNotifierProviderFamily, _is_StateNotifierProviderFamily_default);
  state_notifier_provider._notifier = function _notifier$0(NotifierT, T, that) {
    return new (framework.ProviderElementProxy$(T, NotifierT)).new(that, dart.fn(element => state_notifier_provider.StateNotifierProviderElement$(NotifierT, T).as(element)[_notifierNotifier$], dart.fnType(listenable.ProxyElementValueNotifier$(NotifierT), [framework.ProviderElementBase$(T)])));
  };
  var dependencies$7 = dart.privateName(provider$, "InternalProvider.dependencies");
  const _is_OverrideWithValueMixin_default = Symbol('_is_OverrideWithValueMixin_default');
  framework.OverrideWithValueMixin$ = dart.generic(State => {
    var __t$ValueProviderOfState = () => (__t$ValueProviderOfState = dart.constFn(value_provider.ValueProvider$(State)))();
    class OverrideWithValueMixin extends framework.ProviderBase$(State) {}
    OverrideWithValueMixin[dart.mixinOn] = ProviderBase => class OverrideWithValueMixin extends ProviderBase {
      overrideWithValue(value) {
        State.as(value);
        return new framework.ProviderOverride.new({origin: this, override: new (__t$ValueProviderOfState()).new(value)});
      }
    };
    dart.addTypeTests(OverrideWithValueMixin);
    OverrideWithValueMixin.prototype[_is_OverrideWithValueMixin_default] = true;
    dart.addTypeCaches(OverrideWithValueMixin);
    OverrideWithValueMixin[dart.implements] = () => [framework.ProviderBase$(State)];
    dart.setMethodSignature(OverrideWithValueMixin, () => ({
      __proto__: dart.getMethods(OverrideWithValueMixin.__proto__),
      overrideWithValue: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(OverrideWithValueMixin, I[0]);
    return OverrideWithValueMixin;
  });
  framework.OverrideWithValueMixin = framework.OverrideWithValueMixin$();
  dart.addTypeTests(framework.OverrideWithValueMixin, _is_OverrideWithValueMixin_default);
  const _is_InternalProvider_default = Symbol('_is_InternalProvider_default');
  provider$.InternalProvider$ = dart.generic(State => {
    const ProviderBase_OverrideWithValueMixin$36 = class ProviderBase_OverrideWithValueMixin extends framework.ProviderBase$(State) {};
    (ProviderBase_OverrideWithValueMixin$36.new = function(opts) {
      ProviderBase_OverrideWithValueMixin$36.__proto__.new.call(this, opts);
    }).prototype = ProviderBase_OverrideWithValueMixin$36.prototype;
    dart.applyMixin(ProviderBase_OverrideWithValueMixin$36, framework.OverrideWithValueMixin$(State));
    class InternalProvider extends ProviderBase_OverrideWithValueMixin$36 {
      get dependencies() {
        return this[dependencies$7];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
    }
    (InternalProvider.new = function(opts) {
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[dependencies$7] = dependencies;
      InternalProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = InternalProvider.prototype;
    dart.addTypeTests(InternalProvider);
    InternalProvider.prototype[_is_InternalProvider_default] = true;
    dart.addTypeCaches(InternalProvider);
    dart.setLibraryUri(InternalProvider, I[11]);
    dart.setFieldSignature(InternalProvider, () => ({
      __proto__: dart.getFields(InternalProvider.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return InternalProvider;
  });
  provider$.InternalProvider = provider$.InternalProvider$();
  dart.addTypeTests(provider$.InternalProvider, _is_InternalProvider_default);
  const _is_ProviderRef_default = Symbol('_is_ProviderRef_default');
  provider$.ProviderRef$ = dart.generic(State => {
    class ProviderRef extends core.Object {}
    (ProviderRef.new = function() {
      ;
    }).prototype = ProviderRef.prototype;
    dart.addTypeTests(ProviderRef);
    ProviderRef.prototype[_is_ProviderRef_default] = true;
    dart.addTypeCaches(ProviderRef);
    ProviderRef[dart.implements] = () => [framework.Ref$(State)];
    dart.setLibraryUri(ProviderRef, I[11]);
    return ProviderRef;
  });
  provider$.ProviderRef = provider$.ProviderRef$();
  dart.addTypeTests(provider$.ProviderRef, _is_ProviderRef_default);
  const _is_AutoDisposeProviderRef_default = Symbol('_is_AutoDisposeProviderRef_default');
  provider$.AutoDisposeProviderRef$ = dart.generic(State => {
    class AutoDisposeProviderRef extends provider$.ProviderRef$(State) {}
    (AutoDisposeProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeProviderRef.prototype;
    dart.addTypeTests(AutoDisposeProviderRef);
    AutoDisposeProviderRef.prototype[_is_AutoDisposeProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeProviderRef);
    AutoDisposeProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(State)];
    dart.setLibraryUri(AutoDisposeProviderRef, I[11]);
    return AutoDisposeProviderRef;
  });
  provider$.AutoDisposeProviderRef = provider$.AutoDisposeProviderRef$();
  dart.addTypeTests(provider$.AutoDisposeProviderRef, _is_AutoDisposeProviderRef_default);
  var _createFn$3 = dart.privateName(provider$, "_createFn");
  var _create$1 = dart.privateName(provider$, "_create");
  const _is_AutoDisposeProvider_default = Symbol('_is_AutoDisposeProvider_default');
  provider$.AutoDisposeProvider$ = dart.generic(T => {
    var __t$AutoDisposeProviderElementOfT = () => (__t$AutoDisposeProviderElementOfT = dart.constFn(provider$.AutoDisposeProviderElement$(T)))();
    class AutoDisposeProvider extends provider$.InternalProvider$(T) {
      static ['_#new#tearOff'](T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (provider$.AutoDisposeProvider$(T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create$1](ref) {
        let t11;
        t11 = ref;
        return this[_createFn$3](t11);
      }
      createElement() {
        return new (__t$AutoDisposeProviderElementOfT()).__(this);
      }
    }
    (AutoDisposeProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[_createFn$3] = _createFn;
      AutoDisposeProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeProvider.prototype;
    dart.addTypeTests(AutoDisposeProvider);
    AutoDisposeProvider.prototype[_is_AutoDisposeProvider_default] = true;
    dart.addTypeCaches(AutoDisposeProvider);
    dart.setMethodSignature(AutoDisposeProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeProvider.__proto__),
      [_create$1]: dart.fnType(T, [provider$.AutoDisposeProviderElement$(T)]),
      createElement: dart.fnType(provider$.AutoDisposeProviderElement$(T), [])
    }));
    dart.setLibraryUri(AutoDisposeProvider, I[11]);
    dart.setFieldSignature(AutoDisposeProvider, () => ({
      __proto__: dart.getFields(AutoDisposeProvider.__proto__),
      [_createFn$3]: dart.finalFieldType(dart.fnType(T, [provider$.AutoDisposeProviderRef$(T)]))
    }));
    dart.setStaticFieldSignature(AutoDisposeProvider, () => ['family']);
    return AutoDisposeProvider;
  });
  provider$.AutoDisposeProvider = provider$.AutoDisposeProvider$();
  dart.defineLazy(provider$.AutoDisposeProvider, {
    /*provider$.AutoDisposeProvider.family*/get family() {
      return C[22] || CT.C22;
    }
  }, false);
  dart.addTypeTests(provider$.AutoDisposeProvider, _is_AutoDisposeProvider_default);
  const _is_ProviderElement_default = Symbol('_is_ProviderElement_default');
  provider$.ProviderElement$ = dart.generic(State => {
    var __t$InternalProviderOfState = () => (__t$InternalProviderOfState = dart.constFn(provider$.InternalProvider$(State)))();
    class ProviderElement extends framework.ProviderElementBase$(State) {
      static ['_#_#tearOff'](State, provider) {
        return new (provider$.ProviderElement$(State)).__(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(newState) {
        State.as(newState);
        return this.setState(newState);
      }
      create(opts) {
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        let provider = __t$InternalProviderOfState().as(this.provider);
        this.setState(provider[_create$1](this));
      }
      updateShouldNotify(previous, next) {
        State.as(previous);
        State.as(next);
        return !dart.equals(previous, next);
      }
    }
    (ProviderElement.__ = function(provider) {
      ProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = ProviderElement.prototype;
    dart.addTypeTests(ProviderElement);
    ProviderElement.prototype[_is_ProviderElement_default] = true;
    dart.addTypeCaches(ProviderElement);
    ProviderElement[dart.implements] = () => [provider$.ProviderRef$(State)];
    dart.setMethodSignature(ProviderElement, () => ({
      __proto__: dart.getMethods(ProviderElement.__proto__),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ProviderElement, () => ({
      __proto__: dart.getGetters(ProviderElement.__proto__),
      state: State
    }));
    dart.setSetterSignature(ProviderElement, () => ({
      __proto__: dart.getSetters(ProviderElement.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(ProviderElement, I[11]);
    return ProviderElement;
  });
  provider$.ProviderElement = provider$.ProviderElement$();
  dart.addTypeTests(provider$.ProviderElement, _is_ProviderElement_default);
  const _is_AutoDisposeProviderElement_default = Symbol('_is_AutoDisposeProviderElement_default');
  provider$.AutoDisposeProviderElement$ = dart.generic(T => {
    const ProviderElement_AutoDisposeProviderElementMixin$36 = class ProviderElement_AutoDisposeProviderElementMixin extends provider$.ProviderElement$(T) {};
    (ProviderElement_AutoDisposeProviderElementMixin$36.__ = function(provider) {
      framework.AutoDisposeProviderElementMixin$(T)[dart.mixinNew].call(this);
      ProviderElement_AutoDisposeProviderElementMixin$36.__proto__.__.call(this, provider);
    }).prototype = ProviderElement_AutoDisposeProviderElementMixin$36.prototype;
    dart.applyMixin(ProviderElement_AutoDisposeProviderElementMixin$36, framework.AutoDisposeProviderElementMixin$(T));
    class AutoDisposeProviderElement extends ProviderElement_AutoDisposeProviderElementMixin$36 {
      static ['_#_#tearOff'](T, provider) {
        return new (provider$.AutoDisposeProviderElement$(T)).__(provider);
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
    (AutoDisposeProviderElement.__ = function(provider) {
      AutoDisposeProviderElement.__proto__.__.call(this, provider);
      ;
    }).prototype = AutoDisposeProviderElement.prototype;
    dart.addTypeTests(AutoDisposeProviderElement);
    AutoDisposeProviderElement.prototype[_is_AutoDisposeProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeProviderElement);
    AutoDisposeProviderElement[dart.implements] = () => [provider$.AutoDisposeProviderRef$(T)];
    dart.setMethodSignature(AutoDisposeProviderElement, () => ({
      __proto__: dart.getMethods(AutoDisposeProviderElement.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeProviderElement, I[11]);
    return AutoDisposeProviderElement;
  });
  provider$.AutoDisposeProviderElement = provider$.AutoDisposeProviderElement$();
  dart.addTypeTests(provider$.AutoDisposeProviderElement, _is_AutoDisposeProviderElement_default);
  const _is_AutoDisposeProviderFamily_default = Symbol('_is_AutoDisposeProviderFamily_default');
  provider$.AutoDisposeProviderFamily$ = dart.generic((R, Arg) => {
    class AutoDisposeProviderFamily extends framework.AutoDisposeFamilyBase$(provider$.AutoDisposeProviderRef$(R), R, Arg, R, provider$.AutoDisposeProvider$(R)) {
      static ['_#new#tearOff'](R, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (provider$.AutoDisposeProviderFamily$(R, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AutoDisposeProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AutoDisposeProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[23] || CT.C23, R), name: name, dependencies: dependencies});
      ;
    }).prototype = AutoDisposeProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeProviderFamily);
    AutoDisposeProviderFamily.prototype[_is_AutoDisposeProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeProviderFamily);
    dart.setLibraryUri(AutoDisposeProviderFamily, I[11]);
    return AutoDisposeProviderFamily;
  });
  provider$.AutoDisposeProviderFamily = provider$.AutoDisposeProviderFamily$();
  dart.addTypeTests(provider$.AutoDisposeProviderFamily, _is_AutoDisposeProviderFamily_default);
  const _is_Provider_default = Symbol('_is_Provider_default');
  provider$.Provider$ = dart.generic(State => {
    var __t$ProviderElementOfState = () => (__t$ProviderElementOfState = dart.constFn(provider$.ProviderElement$(State)))();
    const InternalProvider_AlwaysAliveProviderBase$36 = class InternalProvider_AlwaysAliveProviderBase extends provider$.InternalProvider$(State) {};
    (InternalProvider_AlwaysAliveProviderBase$36.new = function(opts) {
      InternalProvider_AlwaysAliveProviderBase$36.__proto__.new.call(this, opts);
    }).prototype = InternalProvider_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(InternalProvider_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(State));
    class Provider extends InternalProvider_AlwaysAliveProviderBase$36 {
      static ['_#new#tearOff'](State, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (provider$.Provider$(State)).new(_createFn, {name: name, dependencies: dependencies, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create$1](ref) {
        let t11;
        t11 = ref;
        return this[_createFn$3](t11);
      }
      createElement() {
        return new (__t$ProviderElementOfState()).__(this);
      }
    }
    (Provider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[_createFn$3] = _createFn;
      Provider.__proto__.new.call(this, {name: name, dependencies: dependencies, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.addTypeCaches(Provider);
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      [_create$1]: dart.fnType(State, [provider$.ProviderElement$(State)]),
      createElement: dart.fnType(provider$.ProviderElement$(State), [])
    }));
    dart.setLibraryUri(Provider, I[11]);
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      [_createFn$3]: dart.finalFieldType(dart.fnType(State, [provider$.ProviderRef$(State)]))
    }));
    dart.setStaticFieldSignature(Provider, () => ['family', 'autoDispose']);
    return Provider;
  });
  provider$.Provider = provider$.Provider$();
  dart.defineLazy(provider$.Provider, {
    /*provider$.Provider.family*/get family() {
      return C[24] || CT.C24;
    },
    /*provider$.Provider.autoDispose*/get autoDispose() {
      return C[25] || CT.C25;
    }
  }, false);
  dart.addTypeTests(provider$.Provider, _is_Provider_default);
  const _is_ProviderFamily_default = Symbol('_is_ProviderFamily_default');
  provider$.ProviderFamily$ = dart.generic((R, Arg) => {
    class ProviderFamily extends framework.FamilyBase$(provider$.ProviderRef$(R), R, Arg, R, provider$.Provider$(R)) {
      static ['_#new#tearOff'](R, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (provider$.ProviderFamily$(R, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (ProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      ProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[26] || CT.C26, R), name: name, dependencies: dependencies});
      ;
    }).prototype = ProviderFamily.prototype;
    dart.addTypeTests(ProviderFamily);
    ProviderFamily.prototype[_is_ProviderFamily_default] = true;
    dart.addTypeCaches(ProviderFamily);
    dart.setLibraryUri(ProviderFamily, I[11]);
    return ProviderFamily;
  });
  provider$.ProviderFamily = provider$.ProviderFamily$();
  dart.addTypeTests(provider$.ProviderFamily, _is_ProviderFamily_default);
  var dependencies$8 = dart.privateName(future_provider, "_FutureProviderBase.dependencies");
  const _is__FutureProviderBase_default = Symbol('_is__FutureProviderBase_default');
  future_provider._FutureProviderBase$ = dart.generic(T => {
    class _FutureProviderBase extends framework.ProviderBase$(common.AsyncValue$(T)) {
      get dependencies() {
        return this[dependencies$8];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
    }
    (_FutureProviderBase.new = function(opts) {
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[dependencies$8] = dependencies;
      _FutureProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = _FutureProviderBase.prototype;
    dart.addTypeTests(_FutureProviderBase);
    _FutureProviderBase.prototype[_is__FutureProviderBase_default] = true;
    dart.addTypeCaches(_FutureProviderBase);
    dart.setLibraryUri(_FutureProviderBase, I[12]);
    dart.setFieldSignature(_FutureProviderBase, () => ({
      __proto__: dart.getFields(_FutureProviderBase.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return _FutureProviderBase;
  });
  future_provider._FutureProviderBase = future_provider._FutureProviderBase$();
  dart.addTypeTests(future_provider._FutureProviderBase, _is__FutureProviderBase_default);
  const _is_FutureProviderRef_default = Symbol('_is_FutureProviderRef_default');
  future_provider.FutureProviderRef$ = dart.generic(State => {
    class FutureProviderRef extends core.Object {}
    (FutureProviderRef.new = function() {
      ;
    }).prototype = FutureProviderRef.prototype;
    dart.addTypeTests(FutureProviderRef);
    FutureProviderRef.prototype[_is_FutureProviderRef_default] = true;
    dart.addTypeCaches(FutureProviderRef);
    FutureProviderRef[dart.implements] = () => [framework.Ref$(common.AsyncValue$(State))];
    dart.setLibraryUri(FutureProviderRef, I[12]);
    return FutureProviderRef;
  });
  future_provider.FutureProviderRef = future_provider.FutureProviderRef$();
  dart.addTypeTests(future_provider.FutureProviderRef, _is_FutureProviderRef_default);
  const _is_AutoDisposeFutureProviderRef_default = Symbol('_is_AutoDisposeFutureProviderRef_default');
  future_provider.AutoDisposeFutureProviderRef$ = dart.generic(State => {
    class AutoDisposeFutureProviderRef extends future_provider.FutureProviderRef$(State) {}
    (AutoDisposeFutureProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeFutureProviderRef.prototype;
    dart.addTypeTests(AutoDisposeFutureProviderRef);
    AutoDisposeFutureProviderRef.prototype[_is_AutoDisposeFutureProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeFutureProviderRef);
    AutoDisposeFutureProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(common.AsyncValue$(State))];
    dart.setLibraryUri(AutoDisposeFutureProviderRef, I[12]);
    return AutoDisposeFutureProviderRef;
  });
  future_provider.AutoDisposeFutureProviderRef = future_provider.AutoDisposeFutureProviderRef$();
  dart.addTypeTests(future_provider.AutoDisposeFutureProviderRef, _is_AutoDisposeFutureProviderRef_default);
  var __AutoDisposeFutureProvider_future = dart.privateName(future_provider, "_#AutoDisposeFutureProvider#future");
  var _createFn$4 = dart.privateName(future_provider, "_createFn");
  var _create$2 = dart.privateName(future_provider, "_create");
  const _is_AutoDisposeFutureProvider_default = Symbol('_is_AutoDisposeFutureProvider_default');
  future_provider.AutoDisposeFutureProvider$ = dart.generic(T => {
    var __t$AutoDisposeFutureProviderElementOfT = () => (__t$AutoDisposeFutureProviderElementOfT = dart.constFn(future_provider.AutoDisposeFutureProviderElement$(T)))();
    const _FutureProviderBase_AsyncSelector$36 = class _FutureProviderBase_AsyncSelector extends future_provider._FutureProviderBase$(T) {};
    (_FutureProviderBase_AsyncSelector$36.new = function(opts) {
      _FutureProviderBase_AsyncSelector$36.__proto__.new.call(this, opts);
    }).prototype = _FutureProviderBase_AsyncSelector$36.prototype;
    dart.applyMixin(_FutureProviderBase_AsyncSelector$36, framework.AsyncSelector$(T));
    class AutoDisposeFutureProvider extends _FutureProviderBase_AsyncSelector$36 {
      static ['_#new#tearOff'](T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (future_provider.AutoDisposeFutureProvider$(T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      [_create$2](ref) {
        let t11;
        t11 = ref;
        return this[_createFn$4](t11);
      }
      createElement() {
        return new (__t$AutoDisposeFutureProviderElementOfT()).__(this);
      }
      get future() {
        let t12, t11;
        t11 = this[__AutoDisposeFutureProvider_future];
        return t11 == null ? (t12 = future_provider._future(T, this), this[__AutoDisposeFutureProvider_future] == null ? this[__AutoDisposeFutureProvider_future] = t12 : dart.throw(new _internal.LateError.fieldADI("future"))) : t11;
      }
    }
    (AutoDisposeFutureProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeFutureProvider_future] = null;
      this[_createFn$4] = _createFn;
      AutoDisposeFutureProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeFutureProvider.prototype;
    dart.addTypeTests(AutoDisposeFutureProvider);
    AutoDisposeFutureProvider.prototype[_is_AutoDisposeFutureProvider_default] = true;
    dart.addTypeCaches(AutoDisposeFutureProvider);
    dart.setMethodSignature(AutoDisposeFutureProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeFutureProvider.__proto__),
      [_create$2]: dart.fnType(async.FutureOr$(T), [future_provider.AutoDisposeFutureProviderElement$(T)]),
      createElement: dart.fnType(future_provider.AutoDisposeFutureProviderElement$(T), [])
    }));
    dart.setGetterSignature(AutoDisposeFutureProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeFutureProvider.__proto__),
      future: framework.Refreshable$(async.Future$(T))
    }));
    dart.setLibraryUri(AutoDisposeFutureProvider, I[12]);
    dart.setFieldSignature(AutoDisposeFutureProvider, () => ({
      __proto__: dart.getFields(AutoDisposeFutureProvider.__proto__),
      [_createFn$4]: dart.finalFieldType(dart.fnType(async.FutureOr$(T), [future_provider.AutoDisposeFutureProviderRef$(T)])),
      [__AutoDisposeFutureProvider_future]: dart.fieldType(dart.nullable(framework.Refreshable$(async.Future$(T))))
    }));
    dart.setStaticFieldSignature(AutoDisposeFutureProvider, () => ['family']);
    return AutoDisposeFutureProvider;
  });
  future_provider.AutoDisposeFutureProvider = future_provider.AutoDisposeFutureProvider$();
  dart.defineLazy(future_provider.AutoDisposeFutureProvider, {
    /*future_provider.AutoDisposeFutureProvider.family*/get family() {
      return C[27] || CT.C27;
    }
  }, false);
  dart.addTypeTests(future_provider.AutoDisposeFutureProvider, _is_AutoDisposeFutureProvider_default);
  var _futureNotifier$ = dart.privateName(async_notifier, "FutureHandlerProviderElementMixin._futureNotifier");
  var _futureCompleter = dart.privateName(async_notifier, "FutureHandlerProviderElementMixin._futureCompleter");
  var _builtFuture = dart.privateName(async_notifier, "FutureHandlerProviderElementMixin._builtFuture");
  var _futureNotifier$0 = dart.privateName(async_notifier, "_futureNotifier");
  var _futureCompleter$ = dart.privateName(async_notifier, "_futureCompleter");
  var _builtFuture$ = dart.privateName(async_notifier, "_builtFuture");
  var _errorTransition = dart.privateName(async_notifier, "_errorTransition");
  var _loadingTransition = dart.privateName(async_notifier, "_loadingTransition");
  var _dataTransition = dart.privateName(async_notifier, "_dataTransition");
  const _is_FutureHandlerProviderElementMixin_default = Symbol('_is_FutureHandlerProviderElementMixin_default');
  async_notifier.FutureHandlerProviderElementMixin$ = dart.generic(T => {
    var __t$FutureOfT = () => (__t$FutureOfT = dart.constFn(async.Future$(T)))();
    var __t$ProxyElementValueNotifierOfFutureOfT = () => (__t$ProxyElementValueNotifierOfFutureOfT = dart.constFn(listenable.ProxyElementValueNotifier$(__t$FutureOfT())))();
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$ResultDataOfFutureOfT = () => (__t$ResultDataOfFutureOfT = dart.constFn(result.ResultData$(__t$FutureOfT())))();
    var __t$SynchronousFutureOfT = () => (__t$SynchronousFutureOfT = dart.constFn(synchronous_future.SynchronousFuture$(T)))();
    var __t$CompleterOfT = () => (__t$CompleterOfT = dart.constFn(async.Completer$(T)))();
    var __t$FutureOrOfT = () => (__t$FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    var __t$VoidToFutureOrOfT = () => (__t$VoidToFutureOrOfT = dart.constFn(dart.fnType(__t$FutureOrOfT(), [])))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    var __t$AsyncDataOfT = () => (__t$AsyncDataOfT = dart.constFn(common.AsyncData$(T)))();
    var __t$TToNull = () => (__t$TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    var __t$FutureOrOfTToNull = () => (__t$FutureOrOfTToNull = dart.constFn(dart.fnType(core.Null, [__t$FutureOrOfT()])))();
    var __t$FutureOrNOfT = () => (__t$FutureOrNOfT = dart.constFn(dart.nullable(__t$FutureOrOfT())))();
    var __t$FutureOrNOfTTovoid = () => (__t$FutureOrNOfTTovoid = dart.constFn(dart.fnType(dart.void, [], [__t$FutureOrNOfT()])))();
    class FutureHandlerProviderElementMixin extends framework.ProviderElementBase$(common.AsyncValue$(T)) {
      static handleUpdateShouldNotify(T, previous, next) {
        let wasLoading = previous.isLoading;
        let isLoading = next.isLoading;
        if (wasLoading || isLoading) return wasLoading !== isLoading;
        return true;
      }
      static futureNotifierOf(T, handler) {
        return handler[_futureNotifier$0];
      }
    }
    FutureHandlerProviderElementMixin[dart.mixinOn] = ProviderElementBase => class FutureHandlerProviderElementMixin extends ProviderElementBase {
      get [_futureNotifier$0]() {
        return this[_futureNotifier$];
      }
      set [_futureNotifier$0](value) {
        super[_futureNotifier$0] = value;
      }
      get [_futureCompleter$]() {
        return this[_futureCompleter];
      }
      set [_futureCompleter$](value) {
        this[_futureCompleter] = value;
      }
      get [_builtFuture$]() {
        return this[_builtFuture];
      }
      set [_builtFuture$](value) {
        this[_builtFuture] = value;
      }
      set state(newState) {
        __t$AsyncValueOfT().as(newState);
        common['AsyncValueX|when'](T, dart.void, newState, {error: dart.bind(this, _errorTransition), loading: dart.bind(this, _loadingTransition), data: dart.bind(this, _dataTransition)});
        this.setState(newState);
      }
      [_dataTransition](value) {
        T.as(value);
        this[_builtFuture$] = null;
        let completer = this[_futureCompleter$];
        if (completer != null) {
          completer.complete(value);
          this[_futureCompleter$] = null;
          this[_futureNotifier$0].UNSAFE_setResultWithoutNotifyingListeners(new (__t$ResultDataOfFutureOfT()).new(new (__t$SynchronousFutureOfT()).new(value)));
        } else {
          this[_futureNotifier$0].result = new (__t$ResultDataOfFutureOfT()).new(new (__t$SynchronousFutureOfT()).new(value));
        }
      }
      [_loadingTransition]() {
        if (this[_futureCompleter$] == null) {
          let completer = this[_futureCompleter$] = __t$CompleterOfT().new();
          this[_futureNotifier$0].result = new (__t$ResultDataOfFutureOfT()).new(completer.future);
        }
      }
      [_errorTransition](err, stackTrace) {
        let t11, t11$;
        this[_builtFuture$] = null;
        let completer = this[_futureCompleter$];
        if (completer != null) {
          t11 = completer;
          (() => {
            async['FutureExtensions|ignore'](T, t11.future);
            t11.completeError(err, stackTrace);
            return t11;
          })();
          this[_futureCompleter$] = null;
        } else {
          this[_futureNotifier$0].result = new (__t$ResultDataOfFutureOfT()).new((t11$ = __t$FutureOfT().error(err, stackTrace), (() => {
            async['FutureExtensions|ignore'](T, t11$);
            return t11$;
          })()));
        }
      }
      handleFuture(create, opts) {
        __t$VoidToFutureOrOfT().as(create);
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        if (!(this[_builtFuture$] == null)) dart.assertFailed("Bad state", I[13], 208, 12, "_builtFuture == null");
        this[_loadingTransition]();
        common['AsyncTransition|asyncTransition'](T, this, {shouldClearPreviousState: didChangeDependency});
        let futureOrResult = result.Result.guard(__t$FutureOrOfT(), create);
        futureOrResult.when(core.Null, {error: dart.fn((error, stackTrace) => {
            this[_errorTransition](error, stackTrace);
            this.setState(new (__t$AsyncErrorOfT()).new(error, stackTrace));
          }, T$.ObjectAndStackTraceToNull()), data: dart.fn(futureOr => {
            if (__t$FutureOfT().is(futureOr)) {
              this[_builtFuture$] = futureOr;
              futureOr.then(core.Null, dart.fn(value => {
                if (dart.equals(this[_builtFuture$], futureOr)) {
                  this[_dataTransition](value);
                  this.setState(new (__t$AsyncDataOfT()).new(value));
                  this[_builtFuture$] = null;
                }
              }, __t$TToNull()), {onError: dart.fn((error, stackTrace) => {
                  if (dart.equals(this[_builtFuture$], futureOr)) {
                    this[_errorTransition](error, stackTrace);
                    this.setState(new (__t$AsyncErrorOfT()).new(error, stackTrace));
                    this[_builtFuture$] = null;
                  }
                }, T$.ObjectAndStackTraceToNull())});
            } else {
              this[_dataTransition](futureOr);
              this.setState(new (__t$AsyncDataOfT()).new(futureOr));
            }
          }, __t$FutureOrOfTToNull())});
      }
      runOnDispose() {
        this[_builtFuture$] = null;
        super.runOnDispose();
      }
      dispose() {
        let completer = this[_futureCompleter$];
        if (completer != null) {
          let future = this[_builtFuture$];
          async['FutureExtensions|ignore'](T, completer.future);
          if (future != null) {
            future.then(dart.void, __t$FutureOrNOfTTovoid().as(dart.bind(completer, 'complete')), {onError: dart.bind(completer, 'completeError')});
          } else {
            completer.completeError(new core.StateError.new("The provider " + dart.str(this.origin) + " was disposed during loading state, " + "yet no value could be emitted."));
          }
        }
        super.dispose();
      }
      visitChildren(opts) {
        let elementVisitor = opts && 'elementVisitor' in opts ? opts.elementVisitor : null;
        let notifierVisitor = opts && 'notifierVisitor' in opts ? opts.notifierVisitor : null;
        super.visitChildren({elementVisitor: elementVisitor, notifierVisitor: notifierVisitor});
        notifierVisitor(this[_futureNotifier$0]);
      }
    };
    (FutureHandlerProviderElementMixin[dart.mixinNew] = function() {
      this[_futureNotifier$] = new (__t$ProxyElementValueNotifierOfFutureOfT()).new();
      this[_futureCompleter] = null;
      this[_builtFuture] = null;
    }).prototype = FutureHandlerProviderElementMixin.prototype;
    dart.addTypeTests(FutureHandlerProviderElementMixin);
    FutureHandlerProviderElementMixin.prototype[_is_FutureHandlerProviderElementMixin_default] = true;
    dart.addTypeCaches(FutureHandlerProviderElementMixin);
    FutureHandlerProviderElementMixin[dart.implements] = () => [framework.ProviderElementBase$(common.AsyncValue$(T))];
    dart.setMethodSignature(FutureHandlerProviderElementMixin, () => ({
      __proto__: dart.getMethods(FutureHandlerProviderElementMixin.__proto__),
      [_dataTransition]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [_loadingTransition]: dart.fnType(dart.void, []),
      [_errorTransition]: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      handleFuture: dart.fnType(dart.void, [dart.nullable(core.Object)], {didChangeDependency: core.bool}, {})
    }));
    dart.setStaticMethodSignature(FutureHandlerProviderElementMixin, () => ['handleUpdateShouldNotify', 'futureNotifierOf']);
    dart.setSetterSignature(FutureHandlerProviderElementMixin, () => ({
      __proto__: dart.getSetters(FutureHandlerProviderElementMixin.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(FutureHandlerProviderElementMixin, I[14]);
    dart.setFieldSignature(FutureHandlerProviderElementMixin, () => ({
      __proto__: dart.getFields(FutureHandlerProviderElementMixin.__proto__),
      [_futureNotifier$0]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(async.Future$(T))),
      [_futureCompleter$]: dart.fieldType(dart.nullable(async.Completer$(T))),
      [_builtFuture$]: dart.fieldType(dart.nullable(async.Future$(T)))
    }));
    return FutureHandlerProviderElementMixin;
  });
  async_notifier.FutureHandlerProviderElementMixin = async_notifier.FutureHandlerProviderElementMixin$();
  dart.addTypeTests(async_notifier.FutureHandlerProviderElementMixin, _is_FutureHandlerProviderElementMixin_default);
  const _is_FutureProviderElement_default = Symbol('_is_FutureProviderElement_default');
  future_provider.FutureProviderElement$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$_FutureProviderBaseOfT = () => (__t$_FutureProviderBaseOfT = dart.constFn(future_provider._FutureProviderBase$(T)))();
    var __t$FutureOrOfT = () => (__t$FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    var __t$VoidToFutureOrOfT = () => (__t$VoidToFutureOrOfT = dart.constFn(dart.fnType(__t$FutureOrOfT(), [])))();
    const ProviderElementBase_FutureHandlerProviderElementMixin$36 = class ProviderElementBase_FutureHandlerProviderElementMixin extends framework.ProviderElementBase$(common.AsyncValue$(T)) {};
    (ProviderElementBase_FutureHandlerProviderElementMixin$36.new = function(_provider) {
      async_notifier.FutureHandlerProviderElementMixin$(T)[dart.mixinNew].call(this);
      ProviderElementBase_FutureHandlerProviderElementMixin$36.__proto__.new.call(this, _provider);
    }).prototype = ProviderElementBase_FutureHandlerProviderElementMixin$36.prototype;
    dart.applyMixin(ProviderElementBase_FutureHandlerProviderElementMixin$36, async_notifier.FutureHandlerProviderElementMixin$(T));
    class FutureProviderElement extends ProviderElementBase_FutureHandlerProviderElementMixin$36 {
      static ['_#_#tearOff'](T, provider) {
        return new (future_provider.FutureProviderElement$(T)).__(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(value) {
        super.state = value;
      }
      updateShouldNotify(previous, next) {
        __t$AsyncValueOfT().as(previous);
        __t$AsyncValueOfT().as(next);
        return async_notifier.FutureHandlerProviderElementMixin.handleUpdateShouldNotify(T, previous, next);
      }
      create(opts) {
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        let provider = __t$_FutureProviderBaseOfT().as(this.provider);
        return this.handleFuture(dart.fn(() => provider[_create$2](this), __t$VoidToFutureOrOfT()), {didChangeDependency: didChangeDependency});
      }
    }
    (FutureProviderElement.__ = function(provider) {
      FutureProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = FutureProviderElement.prototype;
    dart.addTypeTests(FutureProviderElement);
    FutureProviderElement.prototype[_is_FutureProviderElement_default] = true;
    dart.addTypeCaches(FutureProviderElement);
    FutureProviderElement[dart.implements] = () => [future_provider.FutureProviderRef$(T)];
    dart.setMethodSignature(FutureProviderElement, () => ({
      __proto__: dart.getMethods(FutureProviderElement.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool})
    }));
    dart.setGetterSignature(FutureProviderElement, () => ({
      __proto__: dart.getGetters(FutureProviderElement.__proto__),
      state: common.AsyncValue$(T)
    }));
    dart.setLibraryUri(FutureProviderElement, I[12]);
    return FutureProviderElement;
  });
  future_provider.FutureProviderElement = future_provider.FutureProviderElement$();
  dart.addTypeTests(future_provider.FutureProviderElement, _is_FutureProviderElement_default);
  const _is_AutoDisposeFutureProviderElement_default = Symbol('_is_AutoDisposeFutureProviderElement_default');
  future_provider.AutoDisposeFutureProviderElement$ = dart.generic(T => {
    const FutureProviderElement_AutoDisposeProviderElementMixin$36 = class FutureProviderElement_AutoDisposeProviderElementMixin extends future_provider.FutureProviderElement$(T) {};
    (FutureProviderElement_AutoDisposeProviderElementMixin$36.__ = function(provider) {
      framework.AutoDisposeProviderElementMixin$(common.AsyncValue$(T))[dart.mixinNew].call(this);
      FutureProviderElement_AutoDisposeProviderElementMixin$36.__proto__.__.call(this, provider);
    }).prototype = FutureProviderElement_AutoDisposeProviderElementMixin$36.prototype;
    dart.applyMixin(FutureProviderElement_AutoDisposeProviderElementMixin$36, framework.AutoDisposeProviderElementMixin$(common.AsyncValue$(T)));
    class AutoDisposeFutureProviderElement extends FutureProviderElement_AutoDisposeProviderElementMixin$36 {
      static ['_#_#tearOff'](T, provider) {
        return new (future_provider.AutoDisposeFutureProviderElement$(T)).__(provider);
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
    (AutoDisposeFutureProviderElement.__ = function(provider) {
      AutoDisposeFutureProviderElement.__proto__.__.call(this, provider);
      ;
    }).prototype = AutoDisposeFutureProviderElement.prototype;
    dart.addTypeTests(AutoDisposeFutureProviderElement);
    AutoDisposeFutureProviderElement.prototype[_is_AutoDisposeFutureProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeFutureProviderElement);
    AutoDisposeFutureProviderElement[dart.implements] = () => [future_provider.AutoDisposeFutureProviderRef$(T)];
    dart.setMethodSignature(AutoDisposeFutureProviderElement, () => ({
      __proto__: dart.getMethods(AutoDisposeFutureProviderElement.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeFutureProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeFutureProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeFutureProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeFutureProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeFutureProviderElement, I[12]);
    return AutoDisposeFutureProviderElement;
  });
  future_provider.AutoDisposeFutureProviderElement = future_provider.AutoDisposeFutureProviderElement$();
  dart.addTypeTests(future_provider.AutoDisposeFutureProviderElement, _is_AutoDisposeFutureProviderElement_default);
  const _is_AutoDisposeFutureProviderFamily_default = Symbol('_is_AutoDisposeFutureProviderFamily_default');
  future_provider.AutoDisposeFutureProviderFamily$ = dart.generic((R, Arg) => {
    class AutoDisposeFutureProviderFamily extends framework.AutoDisposeFamilyBase$(future_provider.AutoDisposeFutureProviderRef$(R), common.AsyncValue$(R), Arg, async.FutureOr$(R), future_provider.AutoDisposeFutureProvider$(R)) {
      static ['_#new#tearOff'](R, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (future_provider.AutoDisposeFutureProviderFamily$(R, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AutoDisposeFutureProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AutoDisposeFutureProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[28] || CT.C28, R), name: name, dependencies: dependencies});
      ;
    }).prototype = AutoDisposeFutureProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeFutureProviderFamily);
    AutoDisposeFutureProviderFamily.prototype[_is_AutoDisposeFutureProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeFutureProviderFamily);
    dart.setLibraryUri(AutoDisposeFutureProviderFamily, I[12]);
    return AutoDisposeFutureProviderFamily;
  });
  future_provider.AutoDisposeFutureProviderFamily = future_provider.AutoDisposeFutureProviderFamily$();
  dart.addTypeTests(future_provider.AutoDisposeFutureProviderFamily, _is_AutoDisposeFutureProviderFamily_default);
  var __FutureProvider_future = dart.privateName(future_provider, "_#FutureProvider#future");
  const _is_FutureProvider_default = Symbol('_is_FutureProvider_default');
  future_provider.FutureProvider$ = dart.generic(T => {
    var __t$FutureProviderElementOfT = () => (__t$FutureProviderElementOfT = dart.constFn(future_provider.FutureProviderElement$(T)))();
    const _FutureProviderBase_AlwaysAliveProviderBase$36 = class _FutureProviderBase_AlwaysAliveProviderBase extends future_provider._FutureProviderBase$(T) {};
    (_FutureProviderBase_AlwaysAliveProviderBase$36.new = function(opts) {
      _FutureProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, opts);
    }).prototype = _FutureProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(_FutureProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(common.AsyncValue$(T)));
    const _FutureProviderBase_AlwaysAliveAsyncSelector$36 = class _FutureProviderBase_AlwaysAliveAsyncSelector extends _FutureProviderBase_AlwaysAliveProviderBase$36 {};
    (_FutureProviderBase_AlwaysAliveAsyncSelector$36.new = function(opts) {
      _FutureProviderBase_AlwaysAliveAsyncSelector$36.__proto__.new.call(this, opts);
    }).prototype = _FutureProviderBase_AlwaysAliveAsyncSelector$36.prototype;
    dart.applyMixin(_FutureProviderBase_AlwaysAliveAsyncSelector$36, framework.AlwaysAliveAsyncSelector$(T));
    class FutureProvider extends _FutureProviderBase_AlwaysAliveAsyncSelector$36 {
      static ['_#new#tearOff'](T, _createFn, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (future_provider.FutureProvider$(T)).new(_createFn, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get future() {
        let t12, t11;
        t11 = this[__FutureProvider_future];
        return t11 == null ? (t12 = future_provider._future(T, this), this[__FutureProvider_future] == null ? this[__FutureProvider_future] = t12 : dart.throw(new _internal.LateError.fieldADI("future"))) : t11;
      }
      [_create$2](ref) {
        let t11;
        t11 = ref;
        return this[_createFn$4](t11);
      }
      createElement() {
        return new (__t$FutureProviderElementOfT()).__(this);
      }
    }
    (FutureProvider.new = function(_createFn, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__FutureProvider_future] = null;
      this[_createFn$4] = _createFn;
      FutureProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = FutureProvider.prototype;
    dart.addTypeTests(FutureProvider);
    FutureProvider.prototype[_is_FutureProvider_default] = true;
    dart.addTypeCaches(FutureProvider);
    dart.setMethodSignature(FutureProvider, () => ({
      __proto__: dart.getMethods(FutureProvider.__proto__),
      [_create$2]: dart.fnType(async.FutureOr$(T), [future_provider.FutureProviderElement$(T)]),
      createElement: dart.fnType(future_provider.FutureProviderElement$(T), [])
    }));
    dart.setGetterSignature(FutureProvider, () => ({
      __proto__: dart.getGetters(FutureProvider.__proto__),
      future: framework.AlwaysAliveRefreshable$(async.Future$(T))
    }));
    dart.setLibraryUri(FutureProvider, I[12]);
    dart.setFieldSignature(FutureProvider, () => ({
      __proto__: dart.getFields(FutureProvider.__proto__),
      [_createFn$4]: dart.finalFieldType(dart.fnType(async.FutureOr$(T), [future_provider.FutureProviderRef$(T)])),
      [__FutureProvider_future]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(async.Future$(T))))
    }));
    dart.setStaticFieldSignature(FutureProvider, () => ['autoDispose', 'family']);
    return FutureProvider;
  });
  future_provider.FutureProvider = future_provider.FutureProvider$();
  dart.defineLazy(future_provider.FutureProvider, {
    /*future_provider.FutureProvider.autoDispose*/get autoDispose() {
      return C[29] || CT.C29;
    },
    /*future_provider.FutureProvider.family*/get family() {
      return C[30] || CT.C30;
    }
  }, false);
  dart.addTypeTests(future_provider.FutureProvider, _is_FutureProvider_default);
  const _is_FutureProviderFamily_default = Symbol('_is_FutureProviderFamily_default');
  future_provider.FutureProviderFamily$ = dart.generic((R, Arg) => {
    class FutureProviderFamily extends framework.FamilyBase$(future_provider.FutureProviderRef$(R), common.AsyncValue$(R), Arg, async.FutureOr$(R), future_provider.FutureProvider$(R)) {
      static ['_#new#tearOff'](R, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (future_provider.FutureProviderFamily$(R, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (FutureProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      FutureProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[31] || CT.C31, R), name: name, dependencies: dependencies});
      ;
    }).prototype = FutureProviderFamily.prototype;
    dart.addTypeTests(FutureProviderFamily);
    FutureProviderFamily.prototype[_is_FutureProviderFamily_default] = true;
    dart.addTypeCaches(FutureProviderFamily);
    dart.setLibraryUri(FutureProviderFamily, I[12]);
    return FutureProviderFamily;
  });
  future_provider.FutureProviderFamily = future_provider.FutureProviderFamily$();
  dart.addTypeTests(future_provider.FutureProviderFamily, _is_FutureProviderFamily_default);
  future_provider._future = function _future$(T, that) {
    return new (framework.ProviderElementProxy$(common.AsyncValue$(T), async.Future$(T))).new(that, dart.fn(element => async_notifier.FutureHandlerProviderElementMixin.futureNotifierOf(T, async_notifier.FutureHandlerProviderElementMixin$(T).as(element)), dart.fnType(listenable.ProxyElementValueNotifier$(async.Future$(T)), [framework.ProviderElementBase$(common.AsyncValue$(T))])));
  };
  var eventKind$ = dart.privateName(devtool, "PostEventCall.eventKind");
  var event$ = dart.privateName(devtool, "PostEventCall.event");
  devtool.PostEventCall = class PostEventCall extends core.Object {
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
      return new devtool.PostEventCall.__(eventKind, event);
    }
  };
  (devtool.PostEventCall.__ = function(eventKind, event) {
    this[eventKind$] = eventKind;
    this[event$] = event;
    ;
  }).prototype = devtool.PostEventCall.prototype;
  dart.addTypeTests(devtool.PostEventCall);
  dart.addTypeCaches(devtool.PostEventCall);
  dart.setLibraryUri(devtool.PostEventCall, I[15]);
  dart.setFieldSignature(devtool.PostEventCall, () => ({
    __proto__: dart.getFields(devtool.PostEventCall.__proto__),
    eventKind: dart.finalFieldType(core.String),
    event: dart.finalFieldType(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)))
  }));
  var logs = dart.privateName(devtool, "PostEventSpy.logs");
  var _postEvent = dart.privateName(devtool, "_postEvent");
  devtool.PostEventSpy = class PostEventSpy extends core.Object {
    get logs() {
      return this[logs];
    }
    set logs(value) {
      super.logs = value;
    }
    static ['_#_#tearOff']() {
      return new devtool.PostEventSpy.__();
    }
    dispose() {
      if (!dart.equals(devtool._debugPostEventOverride, dart.bind(this, _postEvent))) dart.assertFailed("disposed a spy different from the current spy", I[16], 48, 7, "_debugPostEventOverride == _postEvent");
      devtool._debugPostEventOverride = null;
    }
    [_postEvent](eventKind, event) {
      this.logs[$add](new devtool.PostEventCall.__(eventKind, event));
    }
  };
  (devtool.PostEventSpy.__ = function() {
    this[logs] = T$.JSArrayOfPostEventCall().of([]);
    ;
  }).prototype = devtool.PostEventSpy.prototype;
  dart.addTypeTests(devtool.PostEventSpy);
  dart.addTypeCaches(devtool.PostEventSpy);
  dart.setMethodSignature(devtool.PostEventSpy, () => ({
    __proto__: dart.getMethods(devtool.PostEventSpy.__proto__),
    dispose: dart.fnType(dart.void, []),
    [_postEvent]: dart.fnType(dart.void, [core.String, core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))])
  }));
  dart.setLibraryUri(devtool.PostEventSpy, I[15]);
  dart.setFieldSignature(devtool.PostEventSpy, () => ({
    __proto__: dart.getFields(devtool.PostEventSpy.__proto__),
    logs: dart.finalFieldType(core.List$(devtool.PostEventCall))
  }));
  var _containers = dart.privateName(devtool, "_containers");
  devtool.RiverpodBinding = class RiverpodBinding extends core.Object {
    static ['_#_#tearOff']() {
      return new devtool.RiverpodBinding.__();
    }
    static get debugInstance() {
      let binding = null;
      if (!dart.fn(() => {
        binding = devtool.RiverpodBinding._instance;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[16], 71, 7, "() {\n        binding = _instance;\n        return true;\n      }()");
      return dart.nullCheck(binding);
    }
    get containers() {
      return this[_containers];
    }
    set containers(value) {
      devtool.debugPostEvent("riverpod:container_list_changed");
      this[_containers] = value;
    }
    providerListChangedFor(opts) {
      let containerId = opts && 'containerId' in opts ? opts.containerId : null;
      devtool.debugPostEvent("riverpod:provider_list_changed", new (T$.LinkedMapOfObjectN$ObjectN()).from(["container_id", containerId]));
    }
    providerChanged(opts) {
      let containerId = opts && 'containerId' in opts ? opts.containerId : null;
      let providerId = opts && 'providerId' in opts ? opts.providerId : null;
      devtool.debugPostEvent("riverpod:provider_changed", new (T$.LinkedMapOfObjectN$ObjectN()).from(["container_id", containerId, "provider_id", providerId]));
    }
  };
  (devtool.RiverpodBinding.__ = function() {
    this[_containers] = new (T$.IdentityMapOfString$ProviderContainer()).new();
    ;
  }).prototype = devtool.RiverpodBinding.prototype;
  dart.addTypeTests(devtool.RiverpodBinding);
  dart.addTypeCaches(devtool.RiverpodBinding);
  dart.setMethodSignature(devtool.RiverpodBinding, () => ({
    __proto__: dart.getMethods(devtool.RiverpodBinding.__proto__),
    providerListChangedFor: dart.fnType(dart.void, [], {}, {containerId: core.String}),
    providerChanged: dart.fnType(dart.void, [], {}, {containerId: core.String, providerId: core.String})
  }));
  dart.setGetterSignature(devtool.RiverpodBinding, () => ({
    __proto__: dart.getGetters(devtool.RiverpodBinding.__proto__),
    containers: core.Map$(core.String, framework.ProviderContainer)
  }));
  dart.setSetterSignature(devtool.RiverpodBinding, () => ({
    __proto__: dart.getSetters(devtool.RiverpodBinding.__proto__),
    containers: core.Map$(core.String, framework.ProviderContainer)
  }));
  dart.setStaticGetterSignature(devtool.RiverpodBinding, () => ['debugInstance']);
  dart.setLibraryUri(devtool.RiverpodBinding, I[15]);
  dart.setFieldSignature(devtool.RiverpodBinding, () => ({
    __proto__: dart.getFields(devtool.RiverpodBinding.__proto__),
    [_containers]: dart.fieldType(core.Map$(core.String, framework.ProviderContainer))
  }));
  dart.setStaticFieldSignature(devtool.RiverpodBinding, () => ['_instance']);
  dart.defineLazy(devtool.RiverpodBinding, {
    /*devtool.RiverpodBinding._instance*/get _instance() {
      return new devtool.RiverpodBinding.__();
    }
  }, false);
  devtool.debugPostEvent = function debugPostEvent(eventKind, event = C[32] || CT.C32) {
    if (devtool._debugPostEventOverride != null) {
      dart.nullCheck(devtool._debugPostEventOverride)(eventKind, event);
    } else {
      developer.postEvent(eventKind, event);
    }
  };
  devtool.spyPostEvent = function spyPostEvent() {
    if (!(devtool._debugPostEventOverride == null)) dart.assertFailed("postEvent is already spied", I[16], 27, 10, "_debugPostEventOverride == null");
    let spy = new devtool.PostEventSpy.__();
    devtool._debugPostEventOverride = dart.bind(spy, _postEvent);
    return spy;
  };
  dart.defineLazy(devtool, {
    /*devtool._debugPostEventOverride*/get _debugPostEventOverride() {
      return null;
    },
    set _debugPostEventOverride(_) {}
  }, false);
  var _close$ = dart.privateName(framework, "_close");
  framework.KeepAliveLink = class KeepAliveLink extends core.Object {
    static ['_#_#tearOff'](_close) {
      return new framework.KeepAliveLink.__(_close);
    }
    close() {
      return this[_close$]();
    }
  };
  (framework.KeepAliveLink.__ = function(_close) {
    this[_close$] = _close;
    ;
  }).prototype = framework.KeepAliveLink.prototype;
  dart.addTypeTests(framework.KeepAliveLink);
  dart.addTypeCaches(framework.KeepAliveLink);
  dart.setMethodSignature(framework.KeepAliveLink, () => ({
    __proto__: dart.getMethods(framework.KeepAliveLink.__proto__),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(framework.KeepAliveLink, I[0]);
  dart.setFieldSignature(framework.KeepAliveLink, () => ({
    __proto__: dart.getFields(framework.KeepAliveLink.__proto__),
    [_close$]: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  var _select = dart.privateName(framework, "_select");
  const _is__AsyncSelector_default = Symbol('_is__AsyncSelector_default');
  framework._AsyncSelector$ = dart.generic((Input, Output) => {
    var __t$AsyncDataOfInput = () => (__t$AsyncDataOfInput = dart.constFn(common.AsyncData$(Input)))();
    var __t$AsyncDataOfInputToNull = () => (__t$AsyncDataOfInputToNull = dart.constFn(dart.fnType(core.Null, [__t$AsyncDataOfInput()])))();
    var __t$AsyncErrorOfInput = () => (__t$AsyncErrorOfInput = dart.constFn(common.AsyncError$(Input)))();
    var __t$AsyncErrorOfInputToNull = () => (__t$AsyncErrorOfInputToNull = dart.constFn(dart.fnType(core.Null, [__t$AsyncErrorOfInput()])))();
    var __t$AsyncValueOfInput = () => (__t$AsyncValueOfInput = dart.constFn(common.AsyncValue$(Input)))();
    var __t$AsyncValueOfInput__Tovoid = () => (__t$AsyncValueOfInput__Tovoid = dart.constFn(dart.fnType(dart.void, [__t$AsyncValueOfInput()], {callListeners: core.bool}, {})))();
    var __t$AsyncValueNOfInput = () => (__t$AsyncValueNOfInput = dart.constFn(dart.nullable(__t$AsyncValueOfInput())))();
    var __t$AsyncValueNOfInputAndAsyncValueOfInputTovoid = () => (__t$AsyncValueNOfInputAndAsyncValueOfInputTovoid = dart.constFn(dart.fnType(dart.void, [__t$AsyncValueNOfInput(), __t$AsyncValueOfInput()])))();
    var __t$_SelectorSubscriptionOfAsyncValueOfInput$FutureOfOutput = () => (__t$_SelectorSubscriptionOfAsyncValueOfInput$FutureOfOutput = dart.constFn(framework._SelectorSubscription$(__t$AsyncValueOfInput(), __t$FutureOfOutput())))();
    var __t$ResultDataOfOutput = () => (__t$ResultDataOfOutput = dart.constFn(result.ResultData$(Output)))();
    var __t$ResultErrorOfOutput = () => (__t$ResultErrorOfOutput = dart.constFn(result.ResultError$(Output)))();
    var __t$FutureOfOutput = () => (__t$FutureOfOutput = dart.constFn(async.Future$(Output)))();
    var __t$Output__Tovoid = () => (__t$Output__Tovoid = dart.constFn(dart.fnType(dart.void, [Output], {}, {callListeners: core.bool})))();
    var __t$CompleterOfOutput = () => (__t$CompleterOfOutput = dart.constFn(async.Completer$(Output)))();
    var __t$ResultDataOfOutputToNull = () => (__t$ResultDataOfOutputToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultDataOfOutput()])))();
    var __t$ResultErrorOfOutputToNull = () => (__t$ResultErrorOfOutputToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultErrorOfOutput()])))();
    var __t$VoidToFutureOfOutput = () => (__t$VoidToFutureOfOutput = dart.constFn(dart.fnType(__t$FutureOfOutput(), [])))();
    const Object_ProviderListenable$36 = class Object_ProviderListenable extends core.Object {};
    (Object_ProviderListenable$36.new = function() {
    }).prototype = Object_ProviderListenable$36.prototype;
    dart.applyMixin(Object_ProviderListenable$36, framework.ProviderListenable$(async.Future$(Output)));
    class _AsyncSelector extends Object_ProviderListenable$36 {
      static ['_#new#tearOff'](Input, Output, opts) {
        let provider = opts && 'provider' in opts ? opts.provider : null;
        let future = opts && 'future' in opts ? opts.future : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        return new (framework._AsyncSelector$(Input, Output)).new({provider: provider, future: future, selector: selector});
      }
      [_select](value) {
        let t11;
        if (!dart.fn(() => {
          framework._debugIsRunningSelector = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[17], 92, 7, "() {\n        _debugIsRunningSelector = true;\n        return true;\n      }()");
        try {
          return new (__t$ResultDataOfOutput()).new((t11 = value, this.selector(t11)));
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (__t$ResultErrorOfOutput()).new(err, stack);
          } else
            throw e;
        } finally {
          if (!dart.fn(() => {
            framework._debugIsRunningSelector = false;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[17], 105, 9, "() {\n          _debugIsRunningSelector = false;\n          return true;\n        }()");
        }
      }
      addListener(node, listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDependencyMayHaveChanged = opts && 'onDependencyMayHaveChanged' in opts ? opts.onDependencyMayHaveChanged : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : null;
        let lastSelectedValue = null;
        let selectedCompleter = null;
        let selectedFuture = null;
        function emitData(data, opts) {
          let callListeners = opts && 'callListeners' in opts ? opts.callListeners : null;
          let previousFuture = selectedFuture;
          if (selectedCompleter != null) {
            dart.nullCheck(selectedCompleter).complete(data);
            selectedCompleter = null;
          } else {
            selectedFuture = __t$FutureOfOutput().value(data);
            if (callListeners) listener(previousFuture, dart.nullCheck(selectedFuture));
          }
        }
        dart.fn(emitData, __t$Output__Tovoid());
        function emitError(err, stack, opts) {
          let callListeners = opts && 'callListeners' in opts ? opts.callListeners : null;
          let previousFuture = selectedFuture;
          if (selectedCompleter != null) {
            dart.nullCheck(selectedCompleter).completeError(err, stack);
            selectedCompleter = null;
          } else {
            selectedFuture = __t$FutureOfOutput().error(err, stack);
            if (callListeners) listener(previousFuture, dart.nullCheck(selectedFuture));
          }
        }
        dart.fn(emitError, T$.ObjectAndStackTraceN__Tovoid());
        const playValue = (value, opts) => {
          let callListeners = opts && 'callListeners' in opts ? opts.callListeners : true;
          function onLoading(loading) {
            if (selectedFuture == null) {
              selectedCompleter = __t$CompleterOfOutput().new();
              selectedFuture = dart.nullCheck(selectedCompleter).future;
            }
          }
          dart.fn(onLoading, T$.AsyncValueOfvoidTovoid());
          value.map(dart.void, {loading: onLoading, data: dart.fn(value => {
              if (common['AsyncValueX|get#isRefreshing'](Input, value)) {
                onLoading(value);
                return;
              }
              let newSelectedValue = this[_select](value.value);
              newSelectedValue.map(core.Null, {data: dart.fn(newSelectedValue => {
                  if (!newSelectedValue._equals(lastSelectedValue)) {
                    emitData(newSelectedValue.state, {callListeners: callListeners});
                  }
                }, __t$ResultDataOfOutputToNull()), error: dart.fn(newSelectedValue => {
                  emitError(newSelectedValue.error, newSelectedValue.stackTrace, {callListeners: callListeners});
                }, __t$ResultErrorOfOutputToNull())});
              lastSelectedValue = newSelectedValue;
            }, __t$AsyncDataOfInputToNull()), error: dart.fn(value => {
              if (common['AsyncValueX|get#isRefreshing'](Input, value)) {
                onLoading(value);
                return;
              }
              emitError(value.error, value.stackTrace, {callListeners: callListeners});
              async['FutureExtensions|ignore'](Output, dart.nullCheck(selectedFuture));
            }, __t$AsyncErrorOfInputToNull())});
        };
        dart.fn(playValue, __t$AsyncValueOfInput__Tovoid());
        let sub = node.listen(__t$AsyncValueOfInput(), this.provider, dart.fn((prev, input) => playValue(input), __t$AsyncValueNOfInputAndAsyncValueOfInputTovoid()), {onError: onError});
        playValue(sub.read(), {callListeners: false});
        if (fireImmediately) {
          listener(null, dart.nullCheck(selectedFuture));
        }
        return new (__t$_SelectorSubscriptionOfAsyncValueOfInput$FutureOfOutput()).new(sub, dart.fn(() => dart.nullCheck(selectedFuture), __t$VoidToFutureOfOutput()));
      }
      read(node) {
        return this.future.read(node).then(Output, this.selector);
      }
    }
    (_AsyncSelector.new = function(opts) {
      let provider = opts && 'provider' in opts ? opts.provider : null;
      let future = opts && 'future' in opts ? opts.future : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      this.provider = provider;
      this.future = future;
      this.selector = selector;
      ;
    }).prototype = _AsyncSelector.prototype;
    dart.addTypeTests(_AsyncSelector);
    _AsyncSelector.prototype[_is__AsyncSelector_default] = true;
    dart.addTypeCaches(_AsyncSelector);
    dart.setMethodSignature(_AsyncSelector, () => ({
      __proto__: dart.getMethods(_AsyncSelector.__proto__),
      [_select]: dart.fnType(result.Result$(Output), [Input]),
      addListener: dart.fnType(framework._SelectorSubscription$(common.AsyncValue$(Input), async.Future$(Output)), [framework.Node, dart.fnType(dart.void, [dart.nullable(async.Future$(Output)), async.Future$(Output)])], {}, {fireImmediately: core.bool, onDependencyMayHaveChanged: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}),
      read: dart.fnType(async.Future$(Output), [framework.Node])
    }));
    dart.setLibraryUri(_AsyncSelector, I[0]);
    dart.setFieldSignature(_AsyncSelector, () => ({
      __proto__: dart.getFields(_AsyncSelector.__proto__),
      provider: dart.finalFieldType(framework.ProviderListenable$(common.AsyncValue$(Input))),
      future: dart.finalFieldType(framework.ProviderListenable$(async.Future$(Input))),
      selector: dart.finalFieldType(dart.fnType(Output, [Input]))
    }));
    return _AsyncSelector;
  });
  framework._AsyncSelector = framework._AsyncSelector$();
  dart.addTypeTests(framework._AsyncSelector, _is__AsyncSelector_default);
  const _is__AlwaysAliveAsyncSelector_default = Symbol('_is__AlwaysAliveAsyncSelector_default');
  framework._AlwaysAliveAsyncSelector$ = dart.generic((Input, Output) => {
    const _AsyncSelector_AlwaysAliveProviderListenable$36 = class _AsyncSelector_AlwaysAliveProviderListenable extends framework._AsyncSelector$(Input, Output) {};
    (_AsyncSelector_AlwaysAliveProviderListenable$36.new = function(opts) {
      _AsyncSelector_AlwaysAliveProviderListenable$36.__proto__.new.call(this, opts);
    }).prototype = _AsyncSelector_AlwaysAliveProviderListenable$36.prototype;
    dart.applyMixin(_AsyncSelector_AlwaysAliveProviderListenable$36, framework.AlwaysAliveProviderListenable$(async.Future$(Output)));
    class _AlwaysAliveAsyncSelector extends _AsyncSelector_AlwaysAliveProviderListenable$36 {
      static ['_#new#tearOff'](Input, Output, opts) {
        let provider = opts && 'provider' in opts ? opts.provider : null;
        let future = opts && 'future' in opts ? opts.future : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        return new (framework._AlwaysAliveAsyncSelector$(Input, Output)).new({provider: provider, future: future, selector: selector});
      }
      select(Selected, selector) {
        return super.select(Selected, selector);
      }
    }
    (_AlwaysAliveAsyncSelector.new = function(opts) {
      let provider = opts && 'provider' in opts ? opts.provider : null;
      let future = opts && 'future' in opts ? opts.future : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      _AlwaysAliveAsyncSelector.__proto__.new.call(this, {provider: provider, future: future, selector: selector});
      ;
    }).prototype = _AlwaysAliveAsyncSelector.prototype;
    dart.addTypeTests(_AlwaysAliveAsyncSelector);
    _AlwaysAliveAsyncSelector.prototype[_is__AlwaysAliveAsyncSelector_default] = true;
    dart.addTypeCaches(_AlwaysAliveAsyncSelector);
    dart.setMethodSignature(_AlwaysAliveAsyncSelector, () => ({
      __proto__: dart.getMethods(_AlwaysAliveAsyncSelector.__proto__),
      select: dart.gFnType(Selected => [framework.AlwaysAliveProviderListenable$(Selected), [dart.fnType(Selected, [async.Future$(Output)])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_AlwaysAliveAsyncSelector, I[0]);
    return _AlwaysAliveAsyncSelector;
  });
  framework._AlwaysAliveAsyncSelector = framework._AlwaysAliveAsyncSelector$();
  dart.addTypeTests(framework._AlwaysAliveAsyncSelector, _is__AlwaysAliveAsyncSelector_default);
  var _closed = dart.privateName(framework, "_closed");
  var _listenedElement$ = dart.privateName(framework, "_listenedElement");
  const _is__ExternalProviderSubscription_default = Symbol('_is__ExternalProviderSubscription_default');
  framework._ExternalProviderSubscription$ = dart.generic(State => {
    class _ExternalProviderSubscription extends core.Object {
      static ['_#_#tearOff'](State, _listenedElement, _listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return new (framework._ExternalProviderSubscription$(State)).__(_listenedElement, _listener, {onError: onError});
      }
      close() {
        this[_closed] = true;
        this[_listenedElement$][_externalDependents][$remove](this);
        this[_listenedElement$][_onRemoveListener]();
      }
      read() {
        if (this[_closed]) {
          dart.throw(new core.StateError.new("called ProviderSubscription.read on a subscription that was closed"));
        }
        return this[_listenedElement$].readSelf();
      }
    }
    (_ExternalProviderSubscription.__ = function(_listenedElement, _listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      this[_closed] = false;
      this[_listenedElement$] = _listenedElement;
      this[_listener$] = _listener;
      this.onError = onError;
      ;
    }).prototype = _ExternalProviderSubscription.prototype;
    dart.addTypeTests(_ExternalProviderSubscription);
    _ExternalProviderSubscription.prototype[_is__ExternalProviderSubscription_default] = true;
    dart.addTypeCaches(_ExternalProviderSubscription);
    _ExternalProviderSubscription[dart.implements] = () => [framework.ProviderSubscription$(State)];
    dart.setMethodSignature(_ExternalProviderSubscription, () => ({
      __proto__: dart.getMethods(_ExternalProviderSubscription.__proto__),
      close: dart.fnType(dart.void, []),
      read: dart.fnType(State, [])
    }));
    dart.setLibraryUri(_ExternalProviderSubscription, I[0]);
    dart.setFieldSignature(_ExternalProviderSubscription, () => ({
      __proto__: dart.getFields(_ExternalProviderSubscription.__proto__),
      [_listener$]: dart.finalFieldType(dart.fnType(dart.void, [dart.nullable(State), State])),
      [_listenedElement$]: dart.finalFieldType(framework.ProviderElementBase$(State)),
      onError: dart.finalFieldType(dart.fnType(dart.void, [core.Object, core.StackTrace])),
      [_closed]: dart.fieldType(core.bool)
    }));
    return _ExternalProviderSubscription;
  });
  framework._ExternalProviderSubscription = framework._ExternalProviderSubscription$();
  dart.addTypeTests(framework._ExternalProviderSubscription, _is__ExternalProviderSubscription_default);
  const _is__ProviderListener_default = Symbol('_is__ProviderListener_default');
  framework._ProviderListener$ = dart.generic(State => {
    class _ProviderListener extends core.Object {
      static ['_#_#tearOff'](State, opts) {
        let listenedElement = opts && 'listenedElement' in opts ? opts.listenedElement : null;
        let dependentElement = opts && 'dependentElement' in opts ? opts.dependentElement : null;
        let listener = opts && 'listener' in opts ? opts.listener : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return new (framework._ProviderListener$(State)).__({listenedElement: listenedElement, dependentElement: dependentElement, listener: listener, onError: onError});
      }
      close() {
        let t12;
        this.dependentElement[_listenedProviderSubscriptions][$remove](this);
        t12 = this.listenedElement;
        (() => {
          t12[_subscribers][$remove](this);
          t12[_onRemoveListener]();
          return t12;
        })();
      }
      read() {
        return this.listenedElement.readSelf();
      }
    }
    (_ProviderListener.__ = function(opts) {
      let listenedElement = opts && 'listenedElement' in opts ? opts.listenedElement : null;
      let dependentElement = opts && 'dependentElement' in opts ? opts.dependentElement : null;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      this.listenedElement = listenedElement;
      this.dependentElement = dependentElement;
      this.listener = listener;
      this.onError = onError;
      ;
    }).prototype = _ProviderListener.prototype;
    dart.addTypeTests(_ProviderListener);
    _ProviderListener.prototype[_is__ProviderListener_default] = true;
    dart.addTypeCaches(_ProviderListener);
    _ProviderListener[dart.implements] = () => [framework.ProviderSubscription$(State)];
    dart.setMethodSignature(_ProviderListener, () => ({
      __proto__: dart.getMethods(_ProviderListener.__proto__),
      close: dart.fnType(dart.void, []),
      read: dart.fnType(State, [])
    }));
    dart.setLibraryUri(_ProviderListener, I[0]);
    dart.setFieldSignature(_ProviderListener, () => ({
      __proto__: dart.getFields(_ProviderListener.__proto__),
      listener: dart.finalFieldType(dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)])),
      dependentElement: dart.finalFieldType(framework.ProviderElementBase$(dart.nullable(core.Object))),
      listenedElement: dart.finalFieldType(framework.ProviderElementBase$(State)),
      onError: dart.finalFieldType(dart.fnType(dart.void, [core.Object, core.StackTrace]))
    }));
    return _ProviderListener;
  });
  framework._ProviderListener = framework._ProviderListener$();
  dart.addTypeTests(framework._ProviderListener, _is__ProviderListener_default);
  const _is_Refreshable_default = Symbol('_is_Refreshable_default');
  framework.Refreshable$ = dart.generic(T => {
    class Refreshable extends core.Object {}
    (Refreshable.new = function() {
      ;
    }).prototype = Refreshable.prototype;
    dart.addTypeTests(Refreshable);
    Refreshable.prototype[_is_Refreshable_default] = true;
    dart.addTypeCaches(Refreshable);
    Refreshable[dart.implements] = () => [framework.ProviderListenable$(T)];
    dart.setLibraryUri(Refreshable, I[0]);
    return Refreshable;
  });
  framework.Refreshable = framework.Refreshable$();
  dart.addTypeTests(framework.Refreshable, _is_Refreshable_default);
  const _is_AlwaysAliveRefreshable_default = Symbol('_is_AlwaysAliveRefreshable_default');
  framework.AlwaysAliveRefreshable$ = dart.generic(T => {
    class AlwaysAliveRefreshable extends core.Object {}
    (AlwaysAliveRefreshable.new = function() {
      ;
    }).prototype = AlwaysAliveRefreshable.prototype;
    dart.addTypeTests(AlwaysAliveRefreshable);
    AlwaysAliveRefreshable.prototype[_is_AlwaysAliveRefreshable_default] = true;
    dart.addTypeCaches(AlwaysAliveRefreshable);
    AlwaysAliveRefreshable[dart.implements] = () => [framework.Refreshable$(T), framework.AlwaysAliveProviderListenable$(T)];
    dart.setLibraryUri(AlwaysAliveRefreshable, I[0]);
    return AlwaysAliveRefreshable;
  });
  framework.AlwaysAliveRefreshable = framework.AlwaysAliveRefreshable$();
  dart.addTypeTests(framework.AlwaysAliveRefreshable, _is_AlwaysAliveRefreshable_default);
  framework._FamilyOverrideRef = class _FamilyOverrideRef extends core.Object {
    static ['_#new#tearOff'](override, container) {
      return new framework._FamilyOverrideRef.new(override, container);
    }
  };
  (framework._FamilyOverrideRef.new = function(override, container) {
    this.override = override;
    this.container = container;
    ;
  }).prototype = framework._FamilyOverrideRef.prototype;
  dart.addTypeTests(framework._FamilyOverrideRef);
  dart.addTypeCaches(framework._FamilyOverrideRef);
  dart.setLibraryUri(framework._FamilyOverrideRef, I[0]);
  dart.setFieldSignature(framework._FamilyOverrideRef, () => ({
    __proto__: dart.getFields(framework._FamilyOverrideRef.__proto__),
    override: dart.fieldType(framework.FamilyOverride),
    container: dart.finalFieldType(framework.ProviderContainer)
  }));
  var _element$ = dart.privateName(framework, "_element");
  var _create$3 = dart.privateName(framework, "_create");
  framework._StateReader = class _StateReader extends core.Object {
    static ['_#new#tearOff'](opts) {
      let origin = opts && 'origin' in opts ? opts.origin : null;
      let override = opts && 'override' in opts ? opts.override : null;
      let container = opts && 'container' in opts ? opts.container : null;
      let isDynamicallyCreated = opts && 'isDynamicallyCreated' in opts ? opts.isDynamicallyCreated : null;
      return new framework._StateReader.new({origin: origin, override: override, container: container, isDynamicallyCreated: isDynamicallyCreated});
    }
    getElement() {
      let t12;
      t12 = this[_element$];
      return t12 == null ? this[_element$] = this[_create$3]() : t12;
    }
    [_create$3]() {
      let t12;
      if (this.origin._equals(framework._circularDependencyLock)) {
        dart.throw(new framework.CircularDependencyError.__());
      }
      framework._circularDependencyLock == null ? framework._circularDependencyLock = this.origin : null;
      try {
        let element = (t12 = this.override.createElement(), (() => {
          t12[_provider] = this.override;
          t12[_origin] = this.origin;
          t12[_container] = this.container;
          t12.mount();
          return t12;
        })());
        dart.nullCheck(element.getState()).map(dart.void, {data: dart.fn(data => {
            for (let observer of this.container[_observers]) {
              run_guarded.runTernaryGuarded(framework.ProviderBase, T$.ObjectN(), framework.ProviderContainer, dart.bind(observer, 'didAddProvider'), this.origin, data.state, this.container);
            }
          }, T$.ResultDataOfObjectNTovoid()), error: dart.fn(error => {
            for (let observer of this.container[_observers]) {
              run_guarded.runTernaryGuarded(framework.ProviderBase, core.Null, framework.ProviderContainer, dart.bind(observer, 'didAddProvider'), this.origin, null, this.container);
            }
            for (let observer of this.container[_observers]) {
              run_guarded.runQuaternaryGuarded(framework.ProviderBase, core.Object, core.StackTrace, framework.ProviderContainer, dart.bind(observer, 'providerDidFail'), this.origin, error.error, error.stackTrace, this.container);
            }
          }, T$.ResultErrorTovoid())});
        return element;
      } finally {
        if (dart.equals(framework._circularDependencyLock, this.origin)) {
          framework._circularDependencyLock = null;
        }
      }
    }
  };
  (framework._StateReader.new = function(opts) {
    let origin = opts && 'origin' in opts ? opts.origin : null;
    let override = opts && 'override' in opts ? opts.override : null;
    let container = opts && 'container' in opts ? opts.container : null;
    let isDynamicallyCreated = opts && 'isDynamicallyCreated' in opts ? opts.isDynamicallyCreated : null;
    this[_element$] = null;
    this.origin = origin;
    this.override = override;
    this.container = container;
    this.isDynamicallyCreated = isDynamicallyCreated;
    ;
  }).prototype = framework._StateReader.prototype;
  dart.addTypeTests(framework._StateReader);
  dart.addTypeCaches(framework._StateReader);
  dart.setMethodSignature(framework._StateReader, () => ({
    __proto__: dart.getMethods(framework._StateReader.__proto__),
    getElement: dart.fnType(framework.ProviderElementBase, []),
    [_create$3]: dart.fnType(framework.ProviderElementBase, [])
  }));
  dart.setLibraryUri(framework._StateReader, I[0]);
  dart.setFieldSignature(framework._StateReader, () => ({
    __proto__: dart.getFields(framework._StateReader.__proto__),
    origin: dart.finalFieldType(framework.ProviderBase),
    override: dart.fieldType(framework.ProviderBase),
    container: dart.finalFieldType(framework.ProviderContainer),
    isDynamicallyCreated: dart.finalFieldType(core.bool),
    [_element$]: dart.fieldType(dart.nullable(framework.ProviderElementBase))
  }));
  var vsyncOverride = dart.privateName(framework, "ProviderContainer.vsyncOverride");
  var depth = dart.privateName(framework, "ProviderContainer.depth");
  var debugCanModifyProviders = dart.privateName(framework, "ProviderContainer.debugCanModifyProviders");
  var __ProviderContainer__scheduler = dart.privateName(framework, "_#ProviderContainer#_scheduler");
  var __ProviderContainer__debugId = dart.privateName(framework, "_#ProviderContainer#_debugId");
  var _children = dart.privateName(framework, "_children");
  var _overrideForProvider = dart.privateName(framework, "_overrideForProvider");
  var _overrideForFamily = dart.privateName(framework, "_overrideForFamily");
  var _disposed = dart.privateName(framework, "_disposed");
  var _debugOverridesLength = dart.privateName(framework, "_debugOverridesLength");
  var _parent = dart.privateName(framework, "_parent");
  var _stateReaders = dart.privateName(framework, "_stateReaders");
  var _root = dart.privateName(framework, "_root");
  var _getStateReader = dart.privateName(framework, "_getStateReader");
  var _disposeProvider = dart.privateName(framework, "_disposeProvider");
  framework.ProviderContainer = class ProviderContainer extends core.Object {
    get vsyncOverride() {
      return this[vsyncOverride];
    }
    set vsyncOverride(value) {
      this[vsyncOverride] = value;
    }
    get depth() {
      return this[depth];
    }
    set depth(value) {
      super.depth = value;
    }
    get debugCanModifyProviders() {
      return this[debugCanModifyProviders];
    }
    set debugCanModifyProviders(value) {
      this[debugCanModifyProviders] = value;
    }
    static ['_#new#tearOff'](opts) {
      let parent = opts && 'parent' in opts ? opts.parent : null;
      let overrides = opts && 'overrides' in opts ? opts.overrides : C[33] || CT.C33;
      let observers = opts && 'observers' in opts ? opts.observers : null;
      return new framework.ProviderContainer.new({parent: parent, overrides: overrides, observers: observers});
    }
    get vsync() {
      let t16;
      t16 = this.vsyncOverride;
      return t16 == null ? C[34] || CT.C34 : t16;
    }
    get [_scheduler]() {
      let t17, t17$, t17$0, t16;
      t16 = this[__ProviderContainer__scheduler];
      return t16 == null ? (t17$0 = (t17$ = (t17 = this[_parent], t17 == null ? null : t17[_scheduler]), t17$ == null ? new framework._ProviderScheduler.new(this.vsync) : t17$), this[__ProviderContainer__scheduler] == null ? this[__ProviderContainer__scheduler] = t17$0 : dart.throw(new _internal.LateError.fieldADI("_scheduler"))) : t16;
    }
    get [_debugId]() {
      let t16;
      t16 = this[__ProviderContainer__debugId];
      return t16 == null ? dart.throw(new _internal.LateError.fieldNI("_debugId")) : t16;
    }
    set [_debugId](library$32package$58riverpod$47src$47framework$47container$46dart$58$58_debugId$35param) {
      if (this[__ProviderContainer__debugId] == null)
        this[__ProviderContainer__debugId] = library$32package$58riverpod$47src$47framework$47container$46dart$58$58_debugId$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_debugId"));
    }
    get debugId() {
      let id = null;
      if (!dart.fn(() => {
        id = this[_debugId];
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[18], 191, 7, "() {\n        id = _debugId;\n        return true;\n      }()");
      return dart.nullCheck(id);
    }
    get debugChildren() {
      return new (T$.UnmodifiableListViewOfProviderContainer()).new(this[_children]);
    }
    pump() {
      return async.async(dart.void, (function* pump() {
        return this[_scheduler].pendingFuture;
      }).bind(this));
    }
    read(Result, provider) {
      return provider.read(this);
    }
    debugReassemble() {
      if (!dart.fn(() => {
        for (let element of this.getAllProviderElements()) {
          element.debugReassemble();
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[18], 261, 7, "() {\n        for (final element in getAllProviderElements()) {\n          element.debugReassemble();\n        }\n\n        return true;\n      }()");
    }
    [_listenElement](State, element, opts) {
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let sub = new (framework._ExternalProviderSubscription$(State)).__(element, listener, {onError: onError});
      element[_externalDependents][$add](sub);
      return sub;
    }
    listen(State, provider, listener, opts) {
      let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : false;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      return provider.addListener(this, listener, {fireImmediately: fireImmediately, onError: onError, onDependencyMayHaveChanged: null});
    }
    invalidate(provider) {
      let t16, t16$, t16$0, t16$1, t16$2;
      if (framework.ProviderBase.is(provider)) {
        let reader = this[_getStateReader](provider[_origin]);
        t16 = reader[_element$];
        t16 == null ? null : t16.invalidateSelf();
      } else {
        framework.Family.as(provider);
        let familyContainer = (t16$1 = (t16$0 = (t16$ = this[_overrideForFamily][$_get](provider), t16$ == null ? null : t16$.container), t16$0 == null ? this[_root] : t16$0), t16$1 == null ? this : t16$1);
        for (let stateReader of familyContainer[_stateReaders][$values]) {
          if (!dart.equals(stateReader.origin.from, provider)) continue;
          t16$2 = stateReader[_element$];
          t16$2 == null ? null : t16$2.invalidateSelf();
        }
      }
    }
    refresh(State, provider) {
      this.invalidate(provider[_origin]);
      return this.read(State, provider);
    }
    [_disposeProvider](provider) {
      let element = this.readProviderElement(T$.ObjectN(), provider);
      element.dispose();
      let reader = dart.nullCheck(this[_stateReaders][$_get](element[_origin]));
      if (reader.isDynamicallyCreated) {
        function removeStateReaderFrom(container) {
          if (dart.equals(container[_stateReaders][$_get](element[_origin]), reader)) {
            container[_stateReaders][$remove](element[_origin]);
            container[_children][$forEach](removeStateReaderFrom);
          }
        }
        dart.fn(removeStateReaderFrom, T$.ProviderContainerTovoid());
        removeStateReaderFrom(this);
      } else {
        reader[_element$] = null;
      }
    }
    updateOverrides(overrides) {
      let t19, t18, t17;
      if (this[_disposed]) {
        dart.throw(new core.StateError.new("Called updateOverrides on a ProviderContainer that was already disposed"));
      }
      if (!(this[_debugOverridesLength] === overrides[$length])) dart.assertFailed("Tried to change the number of overrides. This is not allowed – " + "overrides cannot be removed/added, they can only be updated.", I[18], 371, 7, "_debugOverridesLength == overrides.length");
      let unusedOverrides = null;
      if (!dart.fn(() => {
        unusedOverrides = (() => {
          let t16 = T$.ListOfOverride().of(overrides);
          return t16;
        })();
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[18], 378, 7, "() {\n        unusedOverrides = [...overrides];\n        return true;\n      }()");
      for (let override of overrides) {
        if (framework.ProviderOverride.is(override)) {
          if (!dart.fn(() => {
            dart.nullCheck(unusedOverrides)[$remove](override);
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[18], 388, 11, "() {\n            unusedOverrides!.remove(override);\n            return true;\n          }()");
          if (!dart.runtimeType(this[_overrideForProvider][$_get](override[_origin]))._equals(override[_override][$runtimeType])) dart.assertFailed("Replaced the override of type " + dart.str(dart.runtimeType(this[_overrideForProvider][$_get](override[_origin]))) + " " + "with an override of type " + dart.str(override[_override][$runtimeType]) + ", which is different.\n" + "Changing the kind of override or reordering overrides is not supported.", I[18], 396, 11, "_overrideForProvider[override._origin].runtimeType ==\n              override._override.runtimeType");
          let reader = dart.nullCheck(this[_stateReaders][$_get](override[_origin]));
          reader.override = (t17 = this[_overrideForProvider], t18 = override[_origin], t19 = override[_override], t17[$_set](t18, t19), t19);
          let element = reader[_element$];
          if (element == null) continue;
          run_guarded.runUnaryGuarded(framework.ProviderBase, dart.void, T$.ProviderBaseTovoid().as(dart.bind(element, 'update')), override[_override]);
        } else if (framework.FamilyOverride.is(override)) {
          if (!dart.fn(() => {
            dart.nullCheck(unusedOverrides)[$remove](override);
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[18], 415, 11, "() {\n            unusedOverrides!.remove(override);\n            return true;\n          }()");
          dart.nullCheck(this[_overrideForFamily][$_get](override.overriddenFamily)).override = override;
        }
      }
      if (!dart.nullCheck(unusedOverrides)[$isEmpty]) dart.assertFailed("Updated the list of overrides with providers that were not overridden before", I[18], 428, 7, "unusedOverrides!.isEmpty");
    }
    readProviderElement(State, provider) {
      if (this[_disposed]) {
        dart.throw(new core.StateError.new("Tried to read a provider from a ProviderContainer that was already disposed"));
      }
      let reader = this[_getStateReader](provider);
      if (!dart.fn(() => {
        if (!framework._debugVerifyDependenciesAreRespectedEnabled) return true;
        try {
          framework._debugVerifyDependenciesAreRespectedEnabled = false;
          let targetElement = reader.getElement();
          let visitedDependencies = T$.LinkedHashSetOfProviderBase().new();
          let queue = new (T$.ListQueueOfProviderBase()).new();
          targetElement.visitAncestors(dart.fn(e => queue.add(e.origin), T$.ProviderElementBaseTovoid()));
          while (queue[$isNotEmpty]) {
            let dependency = queue.removeFirst();
            if (visitedDependencies.add(dependency)) {
              let dependencyElement = this.readProviderElement(T$.ObjectN(), dependency);
              if (!(!targetElement.provider._equals(targetElement.origin) || dependencyElement[$_equals](targetElement.container.readProviderElement(T$.ObjectN(), dependency)))) dart.assertFailed("Tried to read " + dart.str(provider) + " from a place where one of its dependencies were overridden but the provider is not.\n\nTo fix this error, you can add add \"dependencies\" to " + dart.str(provider) + " such that we have:\n\n```\nfinal a = Provider(...);\nfinal b = Provider((ref) => ref.watch(a), dependencies: [a]);\n```\n", I[18], 467, 17, "targetElement.provider != targetElement.origin ||\n                    dependencyElement ==\n                        targetElement.container\n                            .readProviderElement<Object?>(dependency)");
              dependencyElement.visitAncestors(dart.fn(e => queue.add(e.origin), T$.ProviderElementBaseTovoid()));
            }
          }
        } finally {
          framework._debugVerifyDependenciesAreRespectedEnabled = true;
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[18], 446, 7, "() {\n        // Avoid having the assert trigger itself exponentially\n        if (!_debugVerifyDependenciesAreRespectedEnabled) return true;\n\n        try {\n          _debugVerifyDependenciesAreRespectedEnabled = false;\n\n          // Check that this containers doesn't have access to an overridden\n          // dependency of the targeted provider\n          final targetElement = reader.getElement();\n          final visitedDependencies = <ProviderBase>{};\n          final queue = Queue<ProviderBase>();\n          targetElement.visitAncestors((e) => queue.add(e.origin));\n\n          while (queue.isNotEmpty) {\n            final dependency = queue.removeFirst();\n            if (visitedDependencies.add(dependency)) {\n              final dependencyElement =\n                  readProviderElement<Object?>(dependency);\n\n              assert(\n                targetElement.provider != targetElement.origin ||\n                    dependencyElement ==\n                        targetElement.container\n                            .readProviderElement<Object?>(dependency),\n                '''\nTried to read $provider from a place where one of its dependencies were overridden but the provider is not.\n\nTo fix this error, you can add add \"dependencies\" to $provider such that we have:\n\n```\nfinal a = Provider(...);\nfinal b = Provider((ref) => ref.watch(a), dependencies: [a]);\n```\n''',\n              );\n\n              dependencyElement.visitAncestors((e) => queue.add(e.origin));\n            }\n          }\n        } finally {\n          _debugVerifyDependenciesAreRespectedEnabled = true;\n        }\n        return true;\n      }()");
      return framework.ProviderElementBase$(State).as(reader.getElement());
    }
    [_getStateReader](provider) {
      let t19, t18, t17;
      let currentReader = this[_stateReaders][$_get](provider);
      if (currentReader != null) return currentReader;
      const getReader = () => {
        let t17, t17$, t17$0, t17$1, t17$2, t17$3, t17$4;
        if (provider.from != null) {
          let familyOverrideRef = this[_overrideForFamily][$_get](provider.from);
          if (familyOverrideRef != null) {
            if (familyOverrideRef.container[_stateReaders][$containsKey](provider)) {
              return dart.nullCheck(familyOverrideRef.container[_stateReaders][$_get](provider));
            }
            function setupOverride(opts) {
              let t18, t17;
              let origin = opts && 'origin' in opts ? opts.origin : null;
              let override = opts && 'override' in opts ? opts.override : null;
              if (!(origin._equals(override) || override.dependencies == null)) dart.assertFailed("A provider override cannot specify `dependencies`", I[18], 518, 15, "origin == override || override.dependencies == null");
              t17 = familyOverrideRef.container[_stateReaders];
              t18 = origin;
              t17[$_get](t18) == null ? t17[$_set](t18, new framework._StateReader.new({origin: origin, override: override, container: familyOverrideRef.container, isDynamicallyCreated: true})) : null;
            }
            dart.fn(setupOverride, T$.__Tovoid());
            let providerOverride = familyOverrideRef.override.getProviderOverride(provider);
            setupOverride({origin: provider, override: providerOverride});
            t17 = familyOverrideRef.container[_stateReaders][$_get](provider);
            return t17 == null ? new framework._StateReader.new({origin: provider, override: provider, container: familyOverrideRef.container, isDynamicallyCreated: true}) : t17;
          }
        }
        let root = this[_root];
        if (root != null) {
          let dependencies = (t17$0 = (t17$ = provider.from, t17$ == null ? null : t17$.allTransitiveDependencies), t17$0 == null ? provider.allTransitiveDependencies : t17$0);
          let containerForDependencyOverride = (t17$1 = dependencies, t17$1 == null ? null : t17$1[$map](T$.ProviderContainerN(), dart.fn(dep => {
            let t18;
            let reader = this[_stateReaders][$_get](dep);
            if (reader != null) {
              return reader.container;
            }
            let familyOverride = this[_overrideForFamily][$_get](dep);
            t18 = familyOverride;
            return t18 == null ? null : t18.container;
          }, T$.ProviderOrFamilyToProviderContainerN()))[$where](dart.fn(container => container != null, T$.ProviderContainerNTobool()))[$toList]());
          if (containerForDependencyOverride != null && containerForDependencyOverride[$isNotEmpty]) {
            let deepestOverrideContainer = containerForDependencyOverride[$fold](framework.ProviderContainer, root, dart.fn((previous, container) => {
              if (dart.nullCheck(container).depth > previous.depth) {
                return container;
              }
              return previous;
            }, T$.ProviderContainerAndProviderContainerNToProviderContainer()));
            return deepestOverrideContainer[_stateReaders][$putIfAbsent](provider, dart.fn(() => new framework._StateReader.new({origin: provider, override: provider, container: deepestOverrideContainer, isDynamicallyCreated: true}), T$.VoidTo_StateReader()));
          }
        }
        if (dart.test((t17$3 = (t17$2 = this[_root], t17$2 == null ? null : t17$2[_stateReaders][$containsKey](provider)), t17$3 == null ? false : t17$3))) {
          return dart.nullCheck(dart.nullCheck(this[_root])[_stateReaders][$_get](provider));
        }
        let reader = new framework._StateReader.new({origin: provider, override: provider, container: (t17$4 = this[_root], t17$4 == null ? this : t17$4), isDynamicallyCreated: true});
        if (this[_root] != null) {
          dart.nullCheck(this[_root])[_stateReaders][$_set](provider, reader);
        }
        return reader;
      };
      dart.fn(getReader, T$.VoidTo_StateReader());
      t17 = this[_stateReaders];
      t18 = provider;
      t19 = getReader();
      t17[$_set](t18, t19);
      return t19;
    }
    dispose() {
      let t17;
      if (this[_disposed]) {
        return;
      }
      if (this[_children][$isNotEmpty]) {
        dart.throw(new core.StateError.new("Tried to dispose a ProviderContainer that still has children containers."));
      }
      if (!dart.fn(() => {
        let t17;
        devtool.RiverpodBinding.debugInstance.containers = (t17 = T$.LinkedHashMapOfString$ProviderContainer().from(devtool.RiverpodBinding.debugInstance.containers), (() => {
          t17[$remove](this[_debugId]);
          return t17;
        })());
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[18], 638, 7, "() {\n        RiverpodBinding.debugInstance.containers =\n            Map.from(RiverpodBinding.debugInstance.containers)\n              ..remove(_debugId);\n        return true;\n      }()");
      t17 = this[_parent];
      t17 == null ? null : t17[_children][$remove](this);
      this[_disposed] = true;
      for (let element of this.getAllProviderElementsInOrder()[$toList]()[$reversed]) {
        element.dispose();
      }
      if (this[_root] == null) this[_scheduler].dispose();
    }
    getAllProviderElements() {
      return new (T$.SyncIterableOfProviderElementBase()).new((function* getAllProviderElements() {
        for (let reader of this[_stateReaders][$values]) {
          if (reader[_element$] != null && reader.container[$_equals](this)) {
            yield dart.nullCheck(reader[_element$]);
          }
        }
      }).bind(this));
    }
    getAllProviderElementsInOrder() {
      return new (T$.SyncIterableOfProviderElementBase()).new((function* getAllProviderElementsInOrder() {
        let visitedNodes = new (T$._HashSetOfProviderElementBase()).new();
        let queue = new (T$.DoubleLinkedQueueOfProviderElementBase()).new();
        for (let reader of this[_stateReaders][$values]) {
          if (!reader.container[$_equals](this)) continue;
          let element = reader[_element$];
          if (element == null) continue;
          let hasAncestorsInContainer = false;
          element.visitAncestors(dart.fn(element => {
            if (element[_container][$_equals](this)) {
              hasAncestorsInContainer = true;
            }
          }, T$.ProviderElementBaseTovoid()));
          if (!hasAncestorsInContainer) {
            queue.add(element);
          }
        }
        while (queue[$isNotEmpty]) {
          let element = queue.removeFirst();
          if (!visitedNodes.add(element)) {
            continue;
          }
          yield element;
          element.visitChildren({elementVisitor: dart.fn(dependent => {
              if (dependent.container[$_equals](this)) {
                let areAllAncestorsAlreadyVisited = true;
                dependent.visitAncestors(dart.fn(e => {
                  if (e[_container][$_equals](this) && !visitedNodes.contains(e)) {
                    areAllAncestorsAlreadyVisited = false;
                  }
                }, T$.ProviderElementBaseTovoid()));
                if (areAllAncestorsAlreadyVisited) queue.add(dependent);
              }
            }, T$.ProviderElementBaseTovoid()), notifierVisitor: dart.fn(_ => {
            }, T$.ProxyElementValueNotifierTovoid())});
        }
      }).bind(this));
    }
  };
  (framework.ProviderContainer.new = function(opts) {
    let t15, t15$;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let overrides = opts && 'overrides' in opts ? opts.overrides : C[33] || CT.C33;
    let observers = opts && 'observers' in opts ? opts.observers : null;
    this[vsyncOverride] = null;
    this[__ProviderContainer__scheduler] = null;
    this[__ProviderContainer__debugId] = null;
    this[_children] = T$.JSArrayOfProviderContainer().of([]);
    this[_overrideForProvider] = new (T$.LinkedMapOfProviderBase$ProviderBase()).new();
    this[_overrideForFamily] = new (T$.LinkedMapOfFamily$_FamilyOverrideRef()).new();
    this[debugCanModifyProviders] = null;
    this[_disposed] = false;
    this[_debugOverridesLength] = overrides[$length];
    this[depth] = parent == null ? 0 : parent.depth + 1;
    this[_parent] = parent;
    this[_observers] = (() => {
      let t12 = T$.JSArrayOfProviderObserver().of([]);
      let t13 = observers;
      if (t13 != null) t12[$addAll](t13);
      if (parent != null) t12[$addAll](parent[_observers]);
      return t12;
    })();
    this[_stateReaders] = (() => {
      let t14 = new (T$.LinkedMapOfProviderBase$_StateReader()).new();
      if (parent != null) for (let entry of parent[_stateReaders][$entries])
        if (!entry.value.isDynamicallyCreated) t14[$_set](entry.key, entry.value);
      return t14;
    })();
    this[_root] = (t15$ = (t15 = parent, t15 == null ? null : t15[_root]), t15$ == null ? parent : t15$);
    if (!dart.fn(() => {
      let t15;
      this[_debugId] = dart.str((t15 = framework._debugNextId, framework._debugNextId = t15 + 1, t15));
      devtool.RiverpodBinding.debugInstance.containers = (() => {
        let t15 = T$.LinkedHashMapOfString$ProviderContainer().of(devtool.RiverpodBinding.debugInstance.containers);
        t15[$_set](this[_debugId], this);
        return t15;
      })();
      return true;
    }, T$.VoidTobool())()) dart.assertFailed("", I[18], 126, 7, "() {\n        _debugId = '${_debugNextId++}';\n        RiverpodBinding.debugInstance.containers = {\n          ...RiverpodBinding.debugInstance.containers,\n          _debugId: this,\n        };\n        return true;\n      }()");
    if (parent != null) {
      parent[_children][$add](this);
      this[_overrideForFamily][$addAll](parent[_overrideForFamily]);
    }
    for (let override of overrides) {
      if (framework.ProviderOverride.is(override)) {
        this[_overrideForProvider][$_set](override[_origin], override[_override]);
        this[_stateReaders][$_set](override[_origin], new framework._StateReader.new({origin: override[_origin], override: override[_override], container: this, isDynamicallyCreated: false}));
      } else if (framework.FamilyOverride.is(override)) {
        this[_overrideForFamily][$_set](override.overriddenFamily, new framework._FamilyOverrideRef.new(override, this));
      }
    }
  }).prototype = framework.ProviderContainer.prototype;
  dart.addTypeTests(framework.ProviderContainer);
  dart.addTypeCaches(framework.ProviderContainer);
  framework.ProviderContainer[dart.implements] = () => [framework.Node];
  dart.setMethodSignature(framework.ProviderContainer, () => ({
    __proto__: dart.getMethods(framework.ProviderContainer.__proto__),
    pump: dart.fnType(async.Future$(dart.void), []),
    read: dart.gFnType(Result => [Result, [framework.ProviderListenable$(Result)]], Result => [dart.nullable(core.Object)]),
    debugReassemble: dart.fnType(dart.void, []),
    [_listenElement]: dart.gFnType(State => [framework.ProviderSubscription$(State), [framework.ProviderElementBase$(State)], {}, {listener: dart.fnType(dart.void, [dart.nullable(State), State]), onError: dart.fnType(dart.void, [core.Object, core.StackTrace])}], State => [dart.nullable(core.Object)]),
    listen: dart.gFnType(State => [framework.ProviderSubscription$(State), [framework.ProviderListenable$(State), dart.fnType(dart.void, [dart.nullable(State), State])], {fireImmediately: core.bool, onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {}], State => [dart.nullable(core.Object)]),
    invalidate: dart.fnType(dart.void, [framework.ProviderOrFamily]),
    refresh: dart.gFnType(State => [State, [framework.Refreshable$(State)]], State => [dart.nullable(core.Object)]),
    [_disposeProvider]: dart.fnType(dart.void, [framework.ProviderBase$(dart.nullable(core.Object))]),
    updateOverrides: dart.fnType(dart.void, [core.List$(framework.Override)]),
    readProviderElement: dart.gFnType(State => [framework.ProviderElementBase$(State), [framework.ProviderBase$(State)]], State => [dart.nullable(core.Object)]),
    [_getStateReader]: dart.fnType(framework._StateReader, [framework.ProviderBase]),
    dispose: dart.fnType(dart.void, []),
    getAllProviderElements: dart.fnType(core.Iterable$(framework.ProviderElementBase), []),
    getAllProviderElementsInOrder: dart.fnType(core.Iterable$(framework.ProviderElementBase), [])
  }));
  dart.setGetterSignature(framework.ProviderContainer, () => ({
    __proto__: dart.getGetters(framework.ProviderContainer.__proto__),
    vsync: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_scheduler]: framework._ProviderScheduler,
    [_debugId]: core.String,
    debugId: core.String,
    debugChildren: core.List$(framework.ProviderContainer)
  }));
  dart.setSetterSignature(framework.ProviderContainer, () => ({
    __proto__: dart.getSetters(framework.ProviderContainer.__proto__),
    [_debugId]: core.String
  }));
  dart.setLibraryUri(framework.ProviderContainer, I[0]);
  dart.setFieldSignature(framework.ProviderContainer, () => ({
    __proto__: dart.getFields(framework.ProviderContainer.__proto__),
    [_debugOverridesLength]: dart.finalFieldType(core.int),
    vsyncOverride: dart.fieldType(dart.nullable(dart.fnType(dart.void, [dart.fnType(dart.void, [])]))),
    [__ProviderContainer__scheduler]: dart.fieldType(dart.nullable(framework._ProviderScheduler)),
    [__ProviderContainer__debugId]: dart.fieldType(dart.nullable(core.String)),
    depth: dart.finalFieldType(core.int),
    [_root]: dart.finalFieldType(dart.nullable(framework.ProviderContainer)),
    [_parent]: dart.finalFieldType(dart.nullable(framework.ProviderContainer)),
    [_children]: dart.finalFieldType(core.List$(framework.ProviderContainer)),
    [_overrideForProvider]: dart.finalFieldType(collection.HashMap$(framework.ProviderBase, framework.ProviderBase)),
    [_overrideForFamily]: dart.finalFieldType(collection.HashMap$(framework.Family, framework._FamilyOverrideRef)),
    [_stateReaders]: dart.finalFieldType(core.Map$(framework.ProviderBase, framework._StateReader)),
    [_observers]: dart.finalFieldType(core.List$(framework.ProviderObserver)),
    debugCanModifyProviders: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_disposed]: dart.fieldType(core.bool)
  }));
  framework.ProviderObserver = class ProviderObserver extends core.Object {
    didAddProvider(provider, value, container) {
    }
    providerDidFail(provider, error, stackTrace, container) {
    }
    didUpdateProvider(provider, previousValue, newValue, container) {
    }
    didDisposeProvider(provider, container) {
    }
  };
  (framework.ProviderObserver.new = function() {
    ;
  }).prototype = framework.ProviderObserver.prototype;
  dart.addTypeTests(framework.ProviderObserver);
  dart.addTypeCaches(framework.ProviderObserver);
  dart.setMethodSignature(framework.ProviderObserver, () => ({
    __proto__: dart.getMethods(framework.ProviderObserver.__proto__),
    didAddProvider: dart.fnType(dart.void, [framework.ProviderBase, dart.nullable(core.Object), framework.ProviderContainer]),
    providerDidFail: dart.fnType(dart.void, [framework.ProviderBase, core.Object, core.StackTrace, framework.ProviderContainer]),
    didUpdateProvider: dart.fnType(dart.void, [framework.ProviderBase, dart.nullable(core.Object), dart.nullable(core.Object), framework.ProviderContainer]),
    didDisposeProvider: dart.fnType(dart.void, [framework.ProviderBase, framework.ProviderContainer])
  }));
  dart.setLibraryUri(framework.ProviderObserver, I[0]);
  framework.ProviderOverride = class ProviderOverride extends core.Object {
    static ['_#new#tearOff'](opts) {
      let origin = opts && 'origin' in opts ? opts.origin : null;
      let override = opts && 'override' in opts ? opts.override : null;
      return new framework.ProviderOverride.new({origin: origin, override: override});
    }
  };
  (framework.ProviderOverride.new = function(opts) {
    let origin = opts && 'origin' in opts ? opts.origin : null;
    let override = opts && 'override' in opts ? opts.override : null;
    this[_origin] = origin;
    this[_override] = override;
    ;
  }).prototype = framework.ProviderOverride.prototype;
  dart.addTypeTests(framework.ProviderOverride);
  dart.addTypeCaches(framework.ProviderOverride);
  framework.ProviderOverride[dart.implements] = () => [framework.Override];
  dart.setLibraryUri(framework.ProviderOverride, I[0]);
  dart.setFieldSignature(framework.ProviderOverride, () => ({
    __proto__: dart.getFields(framework.ProviderOverride.__proto__),
    [_origin]: dart.finalFieldType(framework.ProviderBase),
    [_override]: dart.finalFieldType(framework.ProviderBase)
  }));
  framework.Override = class Override extends core.Object {};
  (framework.Override.new = function() {
    ;
  }).prototype = framework.Override.prototype;
  dart.addTypeTests(framework.Override);
  dart.addTypeCaches(framework.Override);
  dart.setLibraryUri(framework.Override, I[0]);
  framework.CircularDependencyError = class CircularDependencyError extends core.Error {
    static ['_#_#tearOff']() {
      return new framework.CircularDependencyError.__();
    }
  };
  (framework.CircularDependencyError.__ = function() {
    framework.CircularDependencyError.__proto__.new.call(this);
    ;
  }).prototype = framework.CircularDependencyError.prototype;
  dart.addTypeTests(framework.CircularDependencyError);
  dart.addTypeCaches(framework.CircularDependencyError);
  dart.setLibraryUri(framework.CircularDependencyError, I[0]);
  const _is_FamilyOverride_default = Symbol('_is_FamilyOverride_default');
  framework.FamilyOverride$ = dart.generic(State => {
    class FamilyOverride extends core.Object {}
    (FamilyOverride.new = function() {
      ;
    }).prototype = FamilyOverride.prototype;
    dart.addTypeTests(FamilyOverride);
    FamilyOverride.prototype[_is_FamilyOverride_default] = true;
    dart.addTypeCaches(FamilyOverride);
    FamilyOverride[dart.implements] = () => [framework.Override];
    dart.setLibraryUri(FamilyOverride, I[0]);
    return FamilyOverride;
  });
  framework.FamilyOverride = framework.FamilyOverride$();
  dart.addTypeTests(framework.FamilyOverride, _is_FamilyOverride_default);
  var _newCreate$ = dart.privateName(framework, "_newCreate");
  const _is__FamilyOverride_default = Symbol('_is__FamilyOverride_default');
  framework._FamilyOverride$ = dart.generic((State, Arg, FamilyProvider) => {
    var __t$ProviderBaseOfState = () => (__t$ProviderBaseOfState = dart.constFn(framework.ProviderBase$(State)))();
    class _FamilyOverride extends core.Object {
      static ['_#new#tearOff'](State, Arg, FamilyProvider, overriddenFamily, _newCreate) {
        return new (framework._FamilyOverride$(State, Arg, FamilyProvider)).new(overriddenFamily, _newCreate);
      }
      getProviderOverride(provider) {
        let t17;
        __t$ProviderBaseOfState().as(provider);
        let arg = Arg.as(provider.argument);
        t17 = arg;
        return this[_newCreate$](t17);
      }
    }
    (_FamilyOverride.new = function(overriddenFamily, _newCreate) {
      this.overriddenFamily = overriddenFamily;
      this[_newCreate$] = _newCreate;
      ;
    }).prototype = _FamilyOverride.prototype;
    dart.addTypeTests(_FamilyOverride);
    _FamilyOverride.prototype[_is__FamilyOverride_default] = true;
    dart.addTypeCaches(_FamilyOverride);
    _FamilyOverride[dart.implements] = () => [framework.FamilyOverride$(State)];
    dart.setMethodSignature(_FamilyOverride, () => ({
      __proto__: dart.getMethods(_FamilyOverride.__proto__),
      getProviderOverride: dart.fnType(framework.ProviderBase$(State), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_FamilyOverride, I[0]);
    dart.setFieldSignature(_FamilyOverride, () => ({
      __proto__: dart.getFields(_FamilyOverride.__proto__),
      [_newCreate$]: dart.finalFieldType(dart.fnType(FamilyProvider, [Arg])),
      overriddenFamily: dart.finalFieldType(framework._FamilyMixin$(State, Arg, FamilyProvider))
    }));
    return _FamilyOverride;
  });
  framework._FamilyOverride = framework._FamilyOverride$();
  dart.addTypeTests(framework._FamilyOverride, _is__FamilyOverride_default);
  const _is_ProviderSubscription_default = Symbol('_is_ProviderSubscription_default');
  framework.ProviderSubscription$ = dart.generic(State => {
    class ProviderSubscription extends core.Object {}
    (ProviderSubscription.new = function() {
      ;
    }).prototype = ProviderSubscription.prototype;
    dart.addTypeTests(ProviderSubscription);
    ProviderSubscription.prototype[_is_ProviderSubscription_default] = true;
    dart.addTypeCaches(ProviderSubscription);
    dart.setLibraryUri(ProviderSubscription, I[0]);
    return ProviderSubscription;
  });
  framework.ProviderSubscription = framework.ProviderSubscription$();
  dart.addTypeTests(framework.ProviderSubscription, _is_ProviderSubscription_default);
  var _removeListeners$ = dart.privateName(framework, "_removeListeners");
  var _read$ = dart.privateName(framework, "_read");
  const _is__ProxySubscription_default = Symbol('_is__ProxySubscription_default');
  framework._ProxySubscription$ = dart.generic(T => {
    class _ProxySubscription extends framework.ProviderSubscription$(T) {
      static ['_#new#tearOff'](T, _removeListeners, _read, opts) {
        let innerSubscription = opts && 'innerSubscription' in opts ? opts.innerSubscription : null;
        return new (framework._ProxySubscription$(T)).new(_removeListeners, _read, {innerSubscription: innerSubscription});
      }
      close() {
        this.innerSubscription.close();
        this[_removeListeners$]();
      }
      read() {
        return this[_read$]();
      }
    }
    (_ProxySubscription.new = function(_removeListeners, _read, opts) {
      let innerSubscription = opts && 'innerSubscription' in opts ? opts.innerSubscription : null;
      this[_removeListeners$] = _removeListeners;
      this[_read$] = _read;
      this.innerSubscription = innerSubscription;
      ;
    }).prototype = _ProxySubscription.prototype;
    dart.addTypeTests(_ProxySubscription);
    _ProxySubscription.prototype[_is__ProxySubscription_default] = true;
    dart.addTypeCaches(_ProxySubscription);
    dart.setMethodSignature(_ProxySubscription, () => ({
      __proto__: dart.getMethods(_ProxySubscription.__proto__),
      close: dart.fnType(dart.void, []),
      read: dart.fnType(T, [])
    }));
    dart.setLibraryUri(_ProxySubscription, I[0]);
    dart.setFieldSignature(_ProxySubscription, () => ({
      __proto__: dart.getFields(_ProxySubscription.__proto__),
      innerSubscription: dart.finalFieldType(framework.ProviderSubscription),
      [_removeListeners$]: dart.finalFieldType(dart.fnType(dart.void, [])),
      [_read$]: dart.finalFieldType(dart.fnType(T, []))
    }));
    return _ProxySubscription;
  });
  framework._ProxySubscription = framework._ProxySubscription$();
  dart.addTypeTests(framework._ProxySubscription, _is__ProxySubscription_default);
  var _origin$ = dart.privateName(framework, "ProviderElementProxy._origin");
  var _lense$ = dart.privateName(framework, "ProviderElementProxy._lense");
  var _lense = dart.privateName(framework, "_lense");
  const _is_ProviderElementProxy_default = Symbol('_is_ProviderElementProxy_default');
  framework.ProviderElementProxy$ = dart.generic((Input, Output) => {
    var __t$InputN = () => (__t$InputN = dart.constFn(dart.nullable(Input)))();
    var __t$InputNAndInputTovoid = () => (__t$InputNAndInputTovoid = dart.constFn(dart.fnType(dart.void, [__t$InputN(), Input])))();
    var __t$ProviderElementProxyOfInput$Output = () => (__t$ProviderElementProxyOfInput$Output = dart.constFn(framework.ProviderElementProxy$(Input, Output)))();
    var __t$OutputToNull = () => (__t$OutputToNull = dart.constFn(dart.fnType(core.Null, [Output])))();
    var __t$_ProxySubscriptionOfOutput = () => (__t$_ProxySubscriptionOfOutput = dart.constFn(framework._ProxySubscription$(Output)))();
    var __t$VoidToOutput = () => (__t$VoidToOutput = dart.constFn(dart.fnType(Output, [])))();
    const Object_ProviderListenable$36 = class Object_ProviderListenable extends core.Object {};
    (Object_ProviderListenable$36.new = function() {
    }).prototype = Object_ProviderListenable$36.prototype;
    dart.applyMixin(Object_ProviderListenable$36, framework.ProviderListenable$(Output));
    const Object_AlwaysAliveProviderListenable$36 = class Object_AlwaysAliveProviderListenable extends Object_ProviderListenable$36 {};
    (Object_AlwaysAliveProviderListenable$36.new = function() {
    }).prototype = Object_AlwaysAliveProviderListenable$36.prototype;
    dart.applyMixin(Object_AlwaysAliveProviderListenable$36, framework.AlwaysAliveProviderListenable$(Output));
    class ProviderElementProxy extends Object_AlwaysAliveProviderListenable$36 {
      get [_origin]() {
        return this[_origin$];
      }
      set [_origin](value) {
        super[_origin] = value;
      }
      get [_lense]() {
        return this[_lense$];
      }
      set [_lense](value) {
        super[_lense] = value;
      }
      static ['_#new#tearOff'](Input, Output, _origin, _lense) {
        return new (framework.ProviderElementProxy$(Input, Output)).new(_origin, _lense);
      }
      addListener(node, listener, opts) {
        let t17, t17$;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDependencyMayHaveChanged = opts && 'onDependencyMayHaveChanged' in opts ? opts.onDependencyMayHaveChanged : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : null;
        let element = node.readProviderElement(Input, this[_origin]);
        let notifier = (t17 = element, this[_lense](t17));
        if (fireImmediately) {
          t17$ = notifier.result;
          t17$ == null ? null : t17$.when(core.Null, {data: dart.fn(data => {
              run_guarded.runBinaryGuarded(core.Null, Output, listener, null, data);
            }, __t$OutputToNull()), error: dart.fn((err, stack) => {
              if (onError != null) {
                run_guarded.runBinaryGuarded(core.Object, core.StackTrace, onError, err, stack);
              }
            }, T$.ObjectAndStackTraceToNull())});
        }
        let removeListener = notifier.addListener(listener, {onError: onError, onDependencyMayHaveChanged: onDependencyMayHaveChanged});
        return new (__t$_ProxySubscriptionOfOutput()).new(removeListener, dart.fn(() => this.read(node), __t$VoidToOutput()), {innerSubscription: node[_listenElement](Input, element, {listener: dart.fn((prev, next) => {
            }, __t$InputNAndInputTovoid()), onError: dart.fn((err, stack) => {
            }, T$.ObjectAndStackTraceTovoid())})});
      }
      read(node) {
        let t17;
        let element = node.readProviderElement(Input, this[_origin]);
        element.flush();
        element.mayNeedDispose();
        return (t17 = element, this[_lense](t17)).value;
      }
      _equals(other) {
        if (other == null) return false;
        return __t$ProviderElementProxyOfInput$Output().is(other) && other[_origin]._equals(this[_origin]);
      }
      get hashCode() {
        return this[_origin].hashCode;
      }
    }
    (ProviderElementProxy.new = function(_origin, _lense) {
      this[_origin$] = _origin;
      this[_lense$] = _lense;
      ;
    }).prototype = ProviderElementProxy.prototype;
    dart.addTypeTests(ProviderElementProxy);
    ProviderElementProxy.prototype[_is_ProviderElementProxy_default] = true;
    dart.addTypeCaches(ProviderElementProxy);
    ProviderElementProxy[dart.implements] = () => [framework.AlwaysAliveRefreshable$(Output)];
    dart.setMethodSignature(ProviderElementProxy, () => ({
      __proto__: dart.getMethods(ProviderElementProxy.__proto__),
      addListener: dart.fnType(framework.ProviderSubscription$(Output), [framework.Node, dart.fnType(dart.void, [dart.nullable(Output), Output])], {}, {fireImmediately: core.bool, onDependencyMayHaveChanged: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}),
      read: dart.fnType(Output, [framework.Node])
    }));
    dart.setLibraryUri(ProviderElementProxy, I[0]);
    dart.setFieldSignature(ProviderElementProxy, () => ({
      __proto__: dart.getFields(ProviderElementProxy.__proto__),
      [_origin]: dart.finalFieldType(framework.ProviderBase$(Input)),
      [_lense]: dart.finalFieldType(dart.fnType(listenable.ProxyElementValueNotifier$(Output), [framework.ProviderElementBase$(Input)]))
    }));
    dart.defineExtensionMethods(ProviderElementProxy, ['_equals']);
    dart.defineExtensionAccessors(ProviderElementProxy, ['hashCode']);
    return ProviderElementProxy;
  });
  framework.ProviderElementProxy = framework.ProviderElementProxy$();
  dart.addTypeTests(framework.ProviderElementProxy, _is_ProviderElementProxy_default);
  const _is_Ref_default = Symbol('_is_Ref_default');
  framework.Ref$ = dart.generic(State => {
    class Ref extends core.Object {}
    (Ref.new = function() {
      ;
    }).prototype = Ref.prototype;
    dart.addTypeTests(Ref);
    Ref.prototype[_is_Ref_default] = true;
    dart.addTypeCaches(Ref);
    dart.setLibraryUri(Ref, I[0]);
    return Ref;
  });
  framework.Ref = framework.Ref$();
  dart.addTypeTests(framework.Ref, _is_Ref_default);
  const _is_AutoDisposeRef_default = Symbol('_is_AutoDisposeRef_default');
  framework.AutoDisposeRef$ = dart.generic(State => {
    class AutoDisposeRef extends framework.Ref$(State) {}
    (AutoDisposeRef.new = function() {
      ;
    }).prototype = AutoDisposeRef.prototype;
    dart.addTypeTests(AutoDisposeRef);
    AutoDisposeRef.prototype[_is_AutoDisposeRef_default] = true;
    dart.addTypeCaches(AutoDisposeRef);
    dart.setLibraryUri(AutoDisposeRef, I[0]);
    return AutoDisposeRef;
  });
  framework.AutoDisposeRef = framework.AutoDisposeRef$();
  dart.addTypeTests(framework.AutoDisposeRef, _is_AutoDisposeRef_default);
  framework.Node = class Node extends core.Object {};
  (framework.Node.new = function() {
    ;
  }).prototype = framework.Node.prototype;
  dart.addTypeTests(framework.Node);
  dart.addTypeCaches(framework.Node);
  dart.setLibraryUri(framework.Node, I[0]);
  var _selectOnChange = dart.privateName(framework, "_selectOnChange");
  const _is__ProviderSelector_default = Symbol('_is__ProviderSelector_default');
  framework._ProviderSelector$ = dart.generic((Input, Output) => {
    var __t$ResultDataOfInput = () => (__t$ResultDataOfInput = dart.constFn(result.ResultData$(Input)))();
    var __t$ResultDataOfInputToResultOfOutput = () => (__t$ResultDataOfInputToResultOfOutput = dart.constFn(dart.fnType(__t$ResultOfOutput(), [__t$ResultDataOfInput()])))();
    var __t$ResultErrorOfInput = () => (__t$ResultErrorOfInput = dart.constFn(result.ResultError$(Input)))();
    var __t$ResultErrorOfInputToResultOfOutput = () => (__t$ResultErrorOfInputToResultOfOutput = dart.constFn(dart.fnType(__t$ResultOfOutput(), [__t$ResultErrorOfInput()])))();
    var __t$InputN = () => (__t$InputN = dart.constFn(dart.nullable(Input)))();
    var __t$InputNAndInputTovoid = () => (__t$InputNAndInputTovoid = dart.constFn(dart.fnType(dart.void, [__t$InputN(), Input])))();
    var __t$_SelectorSubscriptionOfInput$Output = () => (__t$_SelectorSubscriptionOfInput$Output = dart.constFn(framework._SelectorSubscription$(Input, Output)))();
    var __t$ResultOfOutput = () => (__t$ResultOfOutput = dart.constFn(result.Result$(Output)))();
    var __t$ResultDataOfOutput = () => (__t$ResultDataOfOutput = dart.constFn(result.ResultData$(Output)))();
    var __t$ResultErrorOfOutput = () => (__t$ResultErrorOfOutput = dart.constFn(result.ResultError$(Output)))();
    var __t$ResultDataOfOutputToNull = () => (__t$ResultDataOfOutputToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultDataOfOutput()])))();
    var __t$ResultErrorOfOutputTovoid = () => (__t$ResultErrorOfOutputTovoid = dart.constFn(dart.fnType(dart.void, [__t$ResultErrorOfOutput()])))();
    var __t$VoidToResultOfOutput = () => (__t$VoidToResultOfOutput = dart.constFn(dart.fnType(__t$ResultOfOutput(), [])))();
    var __t$ResultOfOutputTodynamic = () => (__t$ResultOfOutputTodynamic = dart.constFn(dart.fnType(dart.dynamic, [__t$ResultOfOutput()])))();
    var __t$ResultOfOutputTovoid = () => (__t$ResultOfOutputTovoid = dart.constFn(dart.fnType(dart.void, [__t$ResultOfOutput()])))();
    var __t$ResultDataOfOutputToOutput = () => (__t$ResultDataOfOutputToOutput = dart.constFn(dart.fnType(Output, [__t$ResultDataOfOutput()])))();
    var __t$ResultErrorOfOutputToNever = () => (__t$ResultErrorOfOutputToNever = dart.constFn(dart.fnType(dart.Never, [__t$ResultErrorOfOutput()])))();
    var __t$VoidToOutput = () => (__t$VoidToOutput = dart.constFn(dart.fnType(Output, [])))();
    const Object_ProviderListenable$36 = class Object_ProviderListenable extends core.Object {};
    (Object_ProviderListenable$36.new = function() {
    }).prototype = Object_ProviderListenable$36.prototype;
    dart.applyMixin(Object_ProviderListenable$36, framework.ProviderListenable$(Output));
    class _ProviderSelector extends Object_ProviderListenable$36 {
      static ['_#new#tearOff'](Input, Output, opts) {
        let provider = opts && 'provider' in opts ? opts.provider : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        return new (framework._ProviderSelector$(Input, Output)).new({provider: provider, selector: selector});
      }
      [_select](value) {
        if (!dart.fn(() => {
          framework._debugIsRunningSelector = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[19], 50, 7, "() {\n        _debugIsRunningSelector = true;\n        return true;\n      }()");
        try {
          return value.map(__t$ResultOfOutput(), {data: dart.fn(data => {
              let t17;
              return new (__t$ResultDataOfOutput()).new((t17 = data.state, this.selector(t17)));
            }, __t$ResultDataOfInputToResultOfOutput()), error: dart.fn(error => new (__t$ResultErrorOfOutput()).new(error.error, error.stackTrace), __t$ResultErrorOfInputToResultOfOutput())});
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (__t$ResultErrorOfOutput()).new(err, stack);
          } else
            throw e;
        } finally {
          if (!dart.fn(() => {
            framework._debugIsRunningSelector = false;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[19], 68, 9, "() {\n          _debugIsRunningSelector = false;\n          return true;\n        }()");
        }
      }
      [_selectOnChange](opts) {
        let newState = opts && 'newState' in opts ? opts.newState : null;
        let lastSelectedValue = opts && 'lastSelectedValue' in opts ? opts.lastSelectedValue : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let listener = opts && 'listener' in opts ? opts.listener : null;
        let onChange = opts && 'onChange' in opts ? opts.onChange : null;
        let newSelectedValue = this[_select](new (__t$ResultDataOfInput()).new(newState));
        if (!lastSelectedValue.hasState || !newSelectedValue.hasState || !dart.equals(lastSelectedValue.requireState, newSelectedValue.requireState)) {
          onChange(newSelectedValue);
          newSelectedValue.map(dart.void, {data: dart.fn(data => {
              listener(lastSelectedValue.stateOrNull, data.state);
            }, __t$ResultDataOfOutputToNull()), error: dart.fn(error => onError(error.error, error.stackTrace), __t$ResultErrorOfOutputTovoid())});
        }
      }
      addListener(node, listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDependencyMayHaveChanged = opts && 'onDependencyMayHaveChanged' in opts ? opts.onDependencyMayHaveChanged : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : null;
        onError == null ? onError = dart.bind(async.Zone.current, 'handleUncaughtError') : null;
        let lastSelectedValue = null;
        function lastSelectedValue$35get() {
          let t19;
          t19 = lastSelectedValue;
          return t19 == null ? dart.throw(new _internal.LateError.localNI("lastSelectedValue")) : t19;
        }
        dart.fn(lastSelectedValue$35get, __t$VoidToResultOfOutput());
        function lastSelectedValue$35set(lastSelectedValue$35param) {
          return lastSelectedValue = lastSelectedValue$35param;
        }
        dart.fn(lastSelectedValue$35set, __t$ResultOfOutputTodynamic());
        let sub = node.listen(Input, this.provider, dart.fn((prev, input) => {
          this[_selectOnChange]({newState: input, lastSelectedValue: lastSelectedValue$35get(), listener: listener, onError: dart.nullCheck(onError), onChange: dart.fn(newState => lastSelectedValue$35set(newState), __t$ResultOfOutputTovoid())});
        }, __t$InputNAndInputTovoid()), {onError: onError});
        lastSelectedValue$35set(this[_select](result.Result.guard(Input, dart.bind(sub, 'read'))));
        if (fireImmediately) {
          framework.handleFireImmediately(Output, lastSelectedValue$35get(), {listener: listener, onError: onError});
        }
        return new (__t$_SelectorSubscriptionOfInput$Output()).new(sub, dart.fn(() => lastSelectedValue$35get().map(Output, {data: dart.fn(data => data.state, __t$ResultDataOfOutputToOutput()), error: dart.fn(error => stack_trace.throwErrorWithCombinedStackTrace(error.error, error.stackTrace), __t$ResultErrorOfOutputToNever())}), __t$VoidToOutput()));
      }
      read(node) {
        let t21;
        let input = this.provider.read(node);
        t21 = input;
        return this.selector(t21);
      }
    }
    (_ProviderSelector.new = function(opts) {
      let provider = opts && 'provider' in opts ? opts.provider : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      this.provider = provider;
      this.selector = selector;
      ;
    }).prototype = _ProviderSelector.prototype;
    dart.addTypeTests(_ProviderSelector);
    _ProviderSelector.prototype[_is__ProviderSelector_default] = true;
    dart.addTypeCaches(_ProviderSelector);
    dart.setMethodSignature(_ProviderSelector, () => ({
      __proto__: dart.getMethods(_ProviderSelector.__proto__),
      [_select]: dart.fnType(result.Result$(Output), [result.Result$(Input)]),
      [_selectOnChange]: dart.fnType(dart.void, [], {}, {lastSelectedValue: result.Result$(Output), listener: dart.fnType(dart.void, [dart.nullable(Output), Output]), newState: Input, onChange: dart.fnType(dart.void, [result.Result$(Output)]), onError: dart.fnType(dart.void, [core.Object, core.StackTrace])}),
      addListener: dart.fnType(framework._SelectorSubscription$(Input, Output), [framework.Node, dart.fnType(dart.void, [dart.nullable(Output), Output])], {}, {fireImmediately: core.bool, onDependencyMayHaveChanged: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}),
      read: dart.fnType(Output, [framework.Node])
    }));
    dart.setLibraryUri(_ProviderSelector, I[0]);
    dart.setFieldSignature(_ProviderSelector, () => ({
      __proto__: dart.getFields(_ProviderSelector.__proto__),
      provider: dart.finalFieldType(framework.ProviderListenable$(Input)),
      selector: dart.finalFieldType(dart.fnType(Output, [Input]))
    }));
    return _ProviderSelector;
  });
  framework._ProviderSelector = framework._ProviderSelector$();
  dart.addTypeTests(framework._ProviderSelector, _is__ProviderSelector_default);
  var _internalSub$ = dart.privateName(framework, "_internalSub");
  const _is__SelectorSubscription_default = Symbol('_is__SelectorSubscription_default');
  framework._SelectorSubscription$ = dart.generic((Input, Output) => {
    class _SelectorSubscription extends core.Object {
      static ['_#new#tearOff'](Input, Output, _internalSub, _read) {
        return new (framework._SelectorSubscription$(Input, Output)).new(_internalSub, _read);
      }
      close() {
        this[_closed] = true;
        this[_internalSub$].close();
      }
      read() {
        if (this[_closed]) {
          dart.throw(new core.StateError.new("called ProviderSubscription.read on a subscription that was closed"));
        }
        this[_internalSub$].read();
        return this[_read$]();
      }
    }
    (_SelectorSubscription.new = function(_internalSub, _read) {
      this[_closed] = false;
      this[_internalSub$] = _internalSub;
      this[_read$] = _read;
      ;
    }).prototype = _SelectorSubscription.prototype;
    dart.addTypeTests(_SelectorSubscription);
    _SelectorSubscription.prototype[_is__SelectorSubscription_default] = true;
    dart.addTypeCaches(_SelectorSubscription);
    _SelectorSubscription[dart.implements] = () => [framework.ProviderSubscription$(Output)];
    dart.setMethodSignature(_SelectorSubscription, () => ({
      __proto__: dart.getMethods(_SelectorSubscription.__proto__),
      close: dart.fnType(dart.void, []),
      read: dart.fnType(Output, [])
    }));
    dart.setLibraryUri(_SelectorSubscription, I[0]);
    dart.setFieldSignature(_SelectorSubscription, () => ({
      __proto__: dart.getFields(_SelectorSubscription.__proto__),
      [_internalSub$]: dart.finalFieldType(framework.ProviderSubscription$(Input)),
      [_read$]: dart.finalFieldType(dart.fnType(Output, [])),
      [_closed]: dart.fieldType(core.bool)
    }));
    return _SelectorSubscription;
  });
  framework._SelectorSubscription = framework._SelectorSubscription$();
  dart.addTypeTests(framework._SelectorSubscription, _is__SelectorSubscription_default);
  const _is__AlwaysAliveProviderSelector_default = Symbol('_is__AlwaysAliveProviderSelector_default');
  framework._AlwaysAliveProviderSelector$ = dart.generic((Input, Output) => {
    const _ProviderSelector_AlwaysAliveProviderListenable$36 = class _ProviderSelector_AlwaysAliveProviderListenable extends framework._ProviderSelector$(Input, Output) {};
    (_ProviderSelector_AlwaysAliveProviderListenable$36.new = function(opts) {
      _ProviderSelector_AlwaysAliveProviderListenable$36.__proto__.new.call(this, opts);
    }).prototype = _ProviderSelector_AlwaysAliveProviderListenable$36.prototype;
    dart.applyMixin(_ProviderSelector_AlwaysAliveProviderListenable$36, framework.AlwaysAliveProviderListenable$(Output));
    class _AlwaysAliveProviderSelector extends _ProviderSelector_AlwaysAliveProviderListenable$36 {
      static ['_#new#tearOff'](Input, Output, opts) {
        let provider = opts && 'provider' in opts ? opts.provider : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        return new (framework._AlwaysAliveProviderSelector$(Input, Output)).new({provider: provider, selector: selector});
      }
      select(Selected, selector) {
        return super.select(Selected, selector);
      }
    }
    (_AlwaysAliveProviderSelector.new = function(opts) {
      let provider = opts && 'provider' in opts ? opts.provider : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      _AlwaysAliveProviderSelector.__proto__.new.call(this, {provider: provider, selector: selector});
      ;
    }).prototype = _AlwaysAliveProviderSelector.prototype;
    dart.addTypeTests(_AlwaysAliveProviderSelector);
    _AlwaysAliveProviderSelector.prototype[_is__AlwaysAliveProviderSelector_default] = true;
    dart.addTypeCaches(_AlwaysAliveProviderSelector);
    dart.setMethodSignature(_AlwaysAliveProviderSelector, () => ({
      __proto__: dart.getMethods(_AlwaysAliveProviderSelector.__proto__),
      select: dart.gFnType(Selected => [framework.AlwaysAliveProviderListenable$(Selected), [dart.fnType(Selected, [Output])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_AlwaysAliveProviderSelector, I[0]);
    return _AlwaysAliveProviderSelector;
  });
  framework._AlwaysAliveProviderSelector = framework._AlwaysAliveProviderSelector$();
  dart.addTypeTests(framework._AlwaysAliveProviderSelector, _is__AlwaysAliveProviderSelector_default);
  var _stateToDispose = dart.privateName(framework, "_stateToDispose");
  var _stateToRefresh = dart.privateName(framework, "_stateToRefresh");
  var _pendingTaskCompleter = dart.privateName(framework, "_pendingTaskCompleter");
  var _scheduleTask = dart.privateName(framework, "_scheduleTask");
  var _task = dart.privateName(framework, "_task");
  var _performRefresh = dart.privateName(framework, "_performRefresh");
  var _performDispose = dart.privateName(framework, "_performDispose");
  framework._ProviderScheduler = class _ProviderScheduler extends core.Object {
    static ['_#new#tearOff'](vsync) {
      return new framework._ProviderScheduler.new(vsync);
    }
    get pendingFuture() {
      let t21;
      t21 = this[_pendingTaskCompleter];
      return t21 == null ? null : t21.future;
    }
    scheduleProviderRefresh(element) {
      this[_stateToRefresh][$add](element);
      this[_scheduleTask]();
    }
    [_scheduleTask]() {
      let t21;
      if (this[_pendingTaskCompleter] != null) return;
      this[_pendingTaskCompleter] = T$.CompleterOfvoid().new();
      t21 = dart.bind(this, _task);
      this.vsync(t21);
    }
    [_task]() {
      let pendingTaskCompleter = this[_pendingTaskCompleter];
      if (pendingTaskCompleter == null) return;
      pendingTaskCompleter.complete();
      this[_performRefresh]();
      this[_performDispose]();
      this[_stateToRefresh][$clear]();
      this[_stateToDispose][$clear]();
      this[_pendingTaskCompleter] = null;
    }
    [_performRefresh]() {
      for (let i = 0; i < this[_stateToRefresh][$length]; i = i + 1) {
        let element = this[_stateToRefresh][$_get](i);
        if (element.hasListeners) element.flush();
      }
    }
    scheduleProviderDispose(element) {
      if (!!element.hasListeners) dart.assertFailed("Tried to dispose " + dart.str(element[_provider]) + " , but still has listeners", I[20], 55, 7, "!element.hasListeners");
      this[_stateToDispose][$add](element);
      this[_scheduleTask]();
    }
    [_performDispose]() {
      for (let i = 0; i < this[_stateToDispose][$length]; i = i + 1) {
        let element = this[_stateToDispose][$_get](i);
        let links = element[_keepAliveLinks];
        if (element.maintainState || links != null && links[$isNotEmpty] || element.hasListeners || element[_container][_disposed]) {
          continue;
        }
        element[_container][_disposeProvider](element[_origin]);
      }
    }
    dispose() {
      let t21;
      t21 = this[_pendingTaskCompleter];
      t21 == null ? null : t21.complete();
      this[_pendingTaskCompleter] = null;
    }
  };
  (framework._ProviderScheduler.new = function(vsync) {
    this[_stateToDispose] = T$.JSArrayOfAutoDisposeProviderElementMixin().of([]);
    this[_stateToRefresh] = T$.JSArrayOfProviderElementBase().of([]);
    this[_pendingTaskCompleter] = null;
    this.vsync = vsync;
    ;
  }).prototype = framework._ProviderScheduler.prototype;
  dart.addTypeTests(framework._ProviderScheduler);
  dart.addTypeCaches(framework._ProviderScheduler);
  dart.setMethodSignature(framework._ProviderScheduler, () => ({
    __proto__: dart.getMethods(framework._ProviderScheduler.__proto__),
    scheduleProviderRefresh: dart.fnType(dart.void, [framework.ProviderElementBase]),
    [_scheduleTask]: dart.fnType(dart.void, []),
    [_task]: dart.fnType(dart.void, []),
    [_performRefresh]: dart.fnType(dart.void, []),
    scheduleProviderDispose: dart.fnType(dart.void, [framework.AutoDisposeProviderElementMixin]),
    [_performDispose]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(framework._ProviderScheduler, () => ({
    __proto__: dart.getGetters(framework._ProviderScheduler.__proto__),
    pendingFuture: dart.nullable(async.Future$(dart.void))
  }));
  dart.setLibraryUri(framework._ProviderScheduler, I[0]);
  dart.setFieldSignature(framework._ProviderScheduler, () => ({
    __proto__: dart.getFields(framework._ProviderScheduler.__proto__),
    vsync: dart.finalFieldType(dart.fnType(dart.void, [dart.fnType(dart.void, [])])),
    [_stateToDispose]: dart.finalFieldType(core.List$(framework.AutoDisposeProviderElementMixin)),
    [_stateToRefresh]: dart.finalFieldType(core.List$(framework.ProviderElementBase)),
    [_pendingTaskCompleter]: dart.fieldType(dart.nullable(async.Completer$(dart.void)))
  }));
  framework._defaultVsync = function _defaultVsync(task) {
    T$.FutureOfvoid().new(task);
  };
  framework._allTransitiveDependencies = function _allTransitiveDependencies(dependencies) {
    let result = T$.LinkedHashSetOfProviderOrFamily().new();
    function visitDependency(dep) {
      if (result.add(dep) && dep.dependencies != null) {
        dart.nullCheck(dep.dependencies)[$forEach](visitDependency);
      }
      let depFamily = dep.from;
      if (depFamily != null && result.add(depFamily) && depFamily.dependencies != null) {
        dart.nullCheck(depFamily.dependencies)[$forEach](visitDependency);
      }
    }
    dart.fn(visitDependency, T$.ProviderOrFamilyTovoid());
    dependencies[$forEach](visitDependency);
    return T$.ListOfProviderOrFamily().unmodifiable(result);
  };
  framework.describeIdentity = function describeIdentity(object) {
    return dart.str(dart.runtimeType(object)) + "#" + framework.shortHash(object);
  };
  framework.shortHash = function shortHash(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  framework.handleFireImmediately = function handleFireImmediately(State, currentState, opts) {
    let listener = opts && 'listener' in opts ? opts.listener : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    currentState.map(dart.void, {data: dart.fn(data => run_guarded.runBinaryGuarded(core.Null, State, listener, null, data.state), dart.fnType(dart.void, [result.ResultData$(State)])), error: dart.fn(error => run_guarded.runBinaryGuarded(core.Object, core.StackTrace, onError, error.error, error.stackTrace), dart.fnType(dart.void, [result.ResultError$(State)]))});
  };
  framework['OverrideWithProviderExtension|overrideWithProvider'] = function OverrideWithProviderExtension$124overrideWithProvider(State, ProviderType, $this, override) {
    if (!(override.dependencies == null)) dart.assertFailed("When using overrideWithProvider, the override cannot specify `dependencies`.", I[21], 289, 7, "override.dependencies == null");
    return new framework.ProviderOverride.new({origin: $this, override: override});
  };
  framework['OverrideWithProviderExtension|get#overrideWithProvider'] = function OverrideWithProviderExtension$124get$35overrideWithProvider(State, ProviderType, $this) {
    return dart.fn(override => framework['OverrideWithProviderExtension|overrideWithProvider'](State, ProviderType, $this, override), dart.fnType(framework.Override, [ProviderType]));
  };
  dart.defineLazy(framework, {
    /*framework._debugIsRunningSelector*/get _debugIsRunningSelector() {
      return false;
    },
    set _debugIsRunningSelector(_) {},
    /*framework._circularDependencyLock*/get _circularDependencyLock() {
      return null;
    },
    set _circularDependencyLock(_) {},
    /*framework._debugNextId*/get _debugNextId() {
      return 0;
    },
    set _debugNextId(_) {},
    /*framework._debugVerifyDependenciesAreRespectedEnabled*/get _debugVerifyDependenciesAreRespectedEnabled() {
      return true;
    },
    set _debugVerifyDependenciesAreRespectedEnabled(_) {}
  }, false);
  var value$ = dart.privateName(common, "AsyncData.value");
  var isLoading$ = dart.privateName(common, "AsyncData.isLoading");
  var error$ = dart.privateName(common, "AsyncData.error");
  var stackTrace$ = dart.privateName(common, "AsyncData.stackTrace");
  const _is_AsyncData_default = Symbol('_is_AsyncData_default');
  common.AsyncData$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    class AsyncData extends common.AsyncValue$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get isLoading() {
        return this[isLoading$];
      }
      set isLoading(value) {
        super.isLoading = value;
      }
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static ['_#new#tearOff'](T, value) {
        return new (common.AsyncData$(T)).new(value);
      }
      static ['_#_#tearOff'](T, value, opts) {
        let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
        let error = opts && 'error' in opts ? opts.error : null;
        let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
        return new (common.AsyncData$(T)).__(value, {isLoading: isLoading, error: error, stackTrace: stackTrace});
      }
      get hasValue() {
        return true;
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        let loading = opts && 'loading' in opts ? opts.loading : null;
        return data(this);
      }
      copyWithPrevious(previous) {
        __t$AsyncValueOfT().as(previous);
        return this;
      }
    }
    (AsyncData.new = function(value) {
      AsyncData.__.call(this, value, {isLoading: false, error: null, stackTrace: null});
    }).prototype = AsyncData.prototype;
    (AsyncData.__ = function(value, opts) {
      let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
      this[value$] = value;
      this[isLoading$] = isLoading;
      this[error$] = error;
      this[stackTrace$] = stackTrace;
      AsyncData.__proto__.__.call(this);
      ;
    }).prototype = AsyncData.prototype;
    dart.addTypeTests(AsyncData);
    AsyncData.prototype[_is_AsyncData_default] = true;
    dart.addTypeCaches(AsyncData);
    dart.setMethodSignature(AsyncData, () => ({
      __proto__: dart.getMethods(AsyncData.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [common.AsyncData$(T)]), error: dart.fnType(R, [common.AsyncError$(T)]), loading: dart.fnType(R, [common.AsyncLoading$(T)])}], R => [dart.nullable(core.Object)]),
      copyWithPrevious: dart.fnType(common.AsyncData$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AsyncData, () => ({
      __proto__: dart.getGetters(AsyncData.__proto__),
      hasValue: core.bool
    }));
    dart.setLibraryUri(AsyncData, I[8]);
    dart.setFieldSignature(AsyncData, () => ({
      __proto__: dart.getFields(AsyncData.__proto__),
      value: dart.finalFieldType(T),
      isLoading: dart.finalFieldType(core.bool),
      error: dart.finalFieldType(dart.nullable(core.Object)),
      stackTrace: dart.finalFieldType(dart.nullable(core.StackTrace))
    }));
    return AsyncData;
  });
  common.AsyncData = common.AsyncData$();
  dart.addTypeTests(common.AsyncData, _is_AsyncData_default);
  const _is_AsyncLoading_default = Symbol('_is_AsyncLoading_default');
  common.AsyncLoading$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$AsyncDataOfT = () => (__t$AsyncDataOfT = dart.constFn(common.AsyncData$(T)))();
    var __t$AsyncDataOfTToAsyncDataOfT = () => (__t$AsyncDataOfTToAsyncDataOfT = dart.constFn(dart.fnType(__t$AsyncDataOfT(), [__t$AsyncDataOfT()])))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    var __t$AsyncErrorOfTToAsyncErrorOfT = () => (__t$AsyncErrorOfTToAsyncErrorOfT = dart.constFn(dart.fnType(__t$AsyncErrorOfT(), [__t$AsyncErrorOfT()])))();
    var __t$AsyncLoadingOfT = () => (__t$AsyncLoadingOfT = dart.constFn(common.AsyncLoading$(T)))();
    var __t$AsyncLoadingOfTToAsyncLoadingOfT = () => (__t$AsyncLoadingOfTToAsyncLoadingOfT = dart.constFn(dart.fnType(__t$AsyncLoadingOfT(), [__t$AsyncLoadingOfT()])))();
    class AsyncLoading extends common.AsyncValue$(T) {
      static ['_#new#tearOff'](T) {
        return new (common.AsyncLoading$(T)).new();
      }
      get isLoading() {
        return true;
      }
      get hasValue() {
        return false;
      }
      get value() {
        return null;
      }
      get error() {
        return null;
      }
      get stackTrace() {
        return null;
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        let loading = opts && 'loading' in opts ? opts.loading : null;
        return loading(this);
      }
      copyWithPrevious(previous) {
        __t$AsyncValueOfT().as(previous);
        return previous.map(__t$AsyncValueOfT(), {data: dart.fn(d => new (__t$AsyncDataOfT()).__(d.value, {isLoading: true, error: d.error, stackTrace: d.stackTrace}), __t$AsyncDataOfTToAsyncDataOfT()), error: dart.fn(e => new (__t$AsyncErrorOfT()).__(e.error, {isLoading: true, value: common['AsyncValueX|get#valueOrNull'](T, e), stackTrace: e.stackTrace, hasValue: e.hasValue}), __t$AsyncErrorOfTToAsyncErrorOfT()), loading: dart.fn(_ => this, __t$AsyncLoadingOfTToAsyncLoadingOfT())});
      }
      toString() {
        return "AsyncLoading<" + dart.str(dart.wrapType(T)) + ">()";
      }
    }
    (AsyncLoading.new = function() {
      AsyncLoading.__proto__.__.call(this);
      ;
    }).prototype = AsyncLoading.prototype;
    dart.addTypeTests(AsyncLoading);
    AsyncLoading.prototype[_is_AsyncLoading_default] = true;
    dart.addTypeCaches(AsyncLoading);
    dart.setMethodSignature(AsyncLoading, () => ({
      __proto__: dart.getMethods(AsyncLoading.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [common.AsyncData$(T)]), error: dart.fnType(R, [common.AsyncError$(T)]), loading: dart.fnType(R, [common.AsyncLoading$(T)])}], R => [dart.nullable(core.Object)]),
      copyWithPrevious: dart.fnType(common.AsyncValue$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AsyncLoading, () => ({
      __proto__: dart.getGetters(AsyncLoading.__proto__),
      isLoading: core.bool,
      hasValue: core.bool,
      value: dart.nullable(T),
      error: dart.nullable(core.Object),
      stackTrace: dart.nullable(core.StackTrace)
    }));
    dart.setLibraryUri(AsyncLoading, I[8]);
    dart.defineExtensionMethods(AsyncLoading, ['toString']);
    return AsyncLoading;
  });
  common.AsyncLoading = common.AsyncLoading$();
  dart.addTypeTests(common.AsyncLoading, _is_AsyncLoading_default);
  var isLoading$0 = dart.privateName(common, "AsyncError.isLoading");
  var hasValue$ = dart.privateName(common, "AsyncError.hasValue");
  var _value = dart.privateName(common, "AsyncError._value");
  var error$0 = dart.privateName(common, "AsyncError.error");
  var stackTrace$0 = dart.privateName(common, "AsyncError.stackTrace");
  var _value$0 = dart.privateName(common, "_value");
  const _is_AsyncError_default = Symbol('_is_AsyncError_default');
  common.AsyncError$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    class AsyncError extends common.AsyncValue$(T) {
      get isLoading() {
        return this[isLoading$0];
      }
      set isLoading(value) {
        super.isLoading = value;
      }
      get hasValue() {
        return this[hasValue$];
      }
      set hasValue(value) {
        super.hasValue = value;
      }
      get [_value$0]() {
        return this[_value];
      }
      set [_value$0](value) {
        super[_value$0] = value;
      }
      get error() {
        return this[error$0];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$0];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static ['_#new#tearOff'](T, error, stackTrace) {
        return new (common.AsyncError$(T)).new(error, stackTrace);
      }
      static ['_#_#tearOff'](T, error, opts) {
        let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let hasValue = opts && 'hasValue' in opts ? opts.hasValue : null;
        let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
        return new (common.AsyncError$(T)).__(error, {stackTrace: stackTrace, value: value, hasValue: hasValue, isLoading: isLoading});
      }
      get value() {
        if (!this.hasValue) {
          stack_trace.throwErrorWithCombinedStackTrace(this.error, this.stackTrace);
        }
        return this[_value$0];
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        let loading = opts && 'loading' in opts ? opts.loading : null;
        return error(this);
      }
      copyWithPrevious(previous) {
        __t$AsyncValueOfT().as(previous);
        return new (__t$AsyncErrorOfT()).__(this.error, {stackTrace: this.stackTrace, isLoading: this.isLoading, value: common['AsyncValueX|get#valueOrNull'](T, previous), hasValue: previous.hasValue});
      }
    }
    (AsyncError.new = function(error, stackTrace) {
      AsyncError.__.call(this, error, {stackTrace: stackTrace, isLoading: false, hasValue: false, value: null});
    }).prototype = AsyncError.prototype;
    (AsyncError.__ = function(error, opts) {
      let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let hasValue = opts && 'hasValue' in opts ? opts.hasValue : null;
      let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
      this[error$0] = error;
      this[stackTrace$0] = stackTrace;
      this[hasValue$] = hasValue;
      this[isLoading$0] = isLoading;
      this[_value] = value;
      AsyncError.__proto__.__.call(this);
      ;
    }).prototype = AsyncError.prototype;
    dart.addTypeTests(AsyncError);
    AsyncError.prototype[_is_AsyncError_default] = true;
    dart.addTypeCaches(AsyncError);
    dart.setMethodSignature(AsyncError, () => ({
      __proto__: dart.getMethods(AsyncError.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [common.AsyncData$(T)]), error: dart.fnType(R, [common.AsyncError$(T)]), loading: dart.fnType(R, [common.AsyncLoading$(T)])}], R => [dart.nullable(core.Object)]),
      copyWithPrevious: dart.fnType(common.AsyncError$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AsyncError, () => ({
      __proto__: dart.getGetters(AsyncError.__proto__),
      value: dart.nullable(T)
    }));
    dart.setLibraryUri(AsyncError, I[8]);
    dart.setFieldSignature(AsyncError, () => ({
      __proto__: dart.getFields(AsyncError.__proto__),
      isLoading: dart.finalFieldType(core.bool),
      hasValue: dart.finalFieldType(core.bool),
      [_value$0]: dart.finalFieldType(dart.nullable(T)),
      error: dart.finalFieldType(core.Object),
      stackTrace: dart.finalFieldType(core.StackTrace)
    }));
    return AsyncError;
  });
  common.AsyncError = common.AsyncError$();
  dart.addTypeTests(common.AsyncError, _is_AsyncError_default);
  common['AsyncTransition|asyncTransition'] = function AsyncTransition$124asyncTransition(T, $this, opts) {
    let t24;
    let shouldClearPreviousState = opts && 'shouldClearPreviousState' in opts ? opts.shouldClearPreviousState : null;
    let previous = (t24 = $this.getState(), t24 == null ? null : t24.requireState);
    if (previous == null || shouldClearPreviousState) {
      $this.setState(new (common.AsyncLoading$(T)).new());
    } else {
      $this.setState(new (common.AsyncLoading$(T)).new().copyWithPrevious(previous));
    }
  };
  common['AsyncTransition|get#asyncTransition'] = function AsyncTransition$124get$35asyncTransition(T, $this) {
    return dart.fn(opts => {
      let shouldClearPreviousState = opts && 'shouldClearPreviousState' in opts ? opts.shouldClearPreviousState : null;
      return common['AsyncTransition|asyncTransition'](T, $this, {shouldClearPreviousState: shouldClearPreviousState});
    }, T$.__Tovoid$1());
  };
  common['AsyncValueX|get#valueOrNull'] = function AsyncValueX$124get$35valueOrNull(T, $this) {
    if ($this.hasValue) return $this.value;
    return null;
  };
  common['AsyncValueX|get#isRefreshing'] = function AsyncValueX$124get$35isRefreshing(T, $this) {
    return $this.isLoading && ($this.hasValue || common['AsyncValueX|get#hasError'](T, $this));
  };
  common['AsyncValueX|get#hasError'] = function AsyncValueX$124get$35hasError(T, $this) {
    return $this.error != null;
  };
  common['AsyncValueX|get#asData'] = function AsyncValueX$124get$35asData(T, $this) {
    return $this.map(dart.nullable(common.AsyncData$(T)), {data: dart.fn(d => d, dart.fnType(common.AsyncData$(T), [common.AsyncData$(T)])), error: dart.fn(e => null, dart.fnType(core.Null, [common.AsyncError$(T)])), loading: dart.fn(l => null, dart.fnType(core.Null, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#asError'] = function AsyncValueX$124get$35asError(T, $this) {
    return $this.map(T$.AsyncErrorN(), {data: dart.fn(_ => null, dart.fnType(core.Null, [common.AsyncData$(T)])), error: dart.fn(e => e, dart.fnType(common.AsyncError$(T), [common.AsyncError$(T)])), loading: dart.fn(_ => null, dart.fnType(core.Null, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|whenData'] = function AsyncValueX$124whenData(T, R, $this, cb) {
    return $this.map(common.AsyncValue$(R), {data: dart.fn(d => {
        try {
          return new (common.AsyncData$(R)).__(cb(d.value), {isLoading: d.isLoading, error: d.error, stackTrace: d.stackTrace});
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (common.AsyncError$(R)).__(err, {stackTrace: stack, isLoading: d.isLoading, value: null, hasValue: false});
          } else
            throw e;
        }
      }, dart.fnType(common.AsyncValue$(R), [common.AsyncData$(T)])), error: dart.fn(e => new (common.AsyncError$(R)).__(e.error, {stackTrace: e.stackTrace, isLoading: e.isLoading, value: null, hasValue: false}), dart.fnType(common.AsyncError$(R), [common.AsyncError$(T)])), loading: dart.fn(l => new (common.AsyncLoading$(R)).new(), dart.fnType(common.AsyncLoading$(R), [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#whenData'] = function AsyncValueX$124get$35whenData(T, $this) {
    return dart.fn((R, cb) => common['AsyncValueX|whenData'](T, R, $this, cb), dart.gFnType(R => {
      var __t$AsyncValueOfR = () => (__t$AsyncValueOfR = dart.constFn(common.AsyncValue$(R)))();
      return [__t$AsyncValueOfR(), [dart.fnType(R, [T])]];
    }, R => {
      var __t$AsyncValueOfR = () => (__t$AsyncValueOfR = dart.constFn(common.AsyncValue$(R)))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|maybeWhen'] = function AsyncValueX$124maybeWhen(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    return $this.map(R, {data: dart.fn(d => {
        if (data != null) return data(d.value);
        return orElse();
      }, dart.fnType(R, [common.AsyncData$(T)])), error: dart.fn(e => {
        if (error != null) return error(e.error, e.stackTrace);
        return orElse();
      }, dart.fnType(R, [common.AsyncError$(T)])), loading: dart.fn(l => {
        if (loading != null) return loading();
        return orElse();
      }, dart.fnType(R, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#maybeWhen'] = function AsyncValueX$124get$35maybeWhen(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      let orElse = opts && 'orElse' in opts ? opts.orElse : null;
      return common['AsyncValueX|maybeWhen'](T, R, $this, {data: data, error: error, loading: loading, orElse: orElse});
    }, dart.gFnType(R => {
      var __t$ObjectAndStackTraceToR = () => (__t$ObjectAndStackTraceToR = dart.constFn(dart.fnType(R, [core.Object, core.StackTrace])))();
      var __t$ObjectAndStackTraceToNR = () => (__t$ObjectAndStackTraceToNR = dart.constFn(dart.nullable(__t$ObjectAndStackTraceToR())))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      var __t$VoidToNR = () => (__t$VoidToNR = dart.constFn(dart.nullable(__t$VoidToR())))();
      return [R, [], {data: dart.nullable(dart.fnType(R, [T])), error: __t$ObjectAndStackTraceToNR(), loading: __t$VoidToNR(), orElse: __t$VoidToR()}, {}];
    }, R => {
      var __t$ObjectAndStackTraceToR = () => (__t$ObjectAndStackTraceToR = dart.constFn(dart.fnType(R, [core.Object, core.StackTrace])))();
      var __t$ObjectAndStackTraceToNR = () => (__t$ObjectAndStackTraceToNR = dart.constFn(dart.nullable(__t$ObjectAndStackTraceToR())))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      var __t$VoidToNR = () => (__t$VoidToNR = dart.constFn(dart.nullable(__t$VoidToR())))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|when'] = function AsyncValueX$124when(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    return $this.map(R, {data: dart.fn(d => data(d.value), dart.fnType(R, [common.AsyncData$(T)])), error: dart.fn(e => error(e.error, e.stackTrace), dart.fnType(R, [common.AsyncError$(T)])), loading: dart.fn(l => loading(), dart.fnType(R, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#when'] = function AsyncValueX$124get$35when(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      return common['AsyncValueX|when'](T, R, $this, {data: data, error: error, loading: loading});
    }, dart.gFnType(R => {
      var __t$ObjectAndStackTraceToR = () => (__t$ObjectAndStackTraceToR = dart.constFn(dart.fnType(R, [core.Object, core.StackTrace])))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      return [R, [], {data: dart.fnType(R, [T]), error: __t$ObjectAndStackTraceToR(), loading: __t$VoidToR()}, {}];
    }, R => {
      var __t$ObjectAndStackTraceToR = () => (__t$ObjectAndStackTraceToR = dart.constFn(dart.fnType(R, [core.Object, core.StackTrace])))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|whenOrNull'] = function AsyncValueX$124whenOrNull(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    return $this.map(dart.nullable(R), {data: dart.fn(d => {
        let t38;
        t38 = data;
        return t38 == null ? null : t38(d.value);
      }, dart.fnType(dart.nullable(R), [common.AsyncData$(T)])), error: dart.fn(e => {
        let t38;
        t38 = error;
        return t38 == null ? null : t38(e.error, e.stackTrace);
      }, dart.fnType(dart.nullable(R), [common.AsyncError$(T)])), loading: dart.fn(l => {
        let t38;
        t38 = loading;
        return t38 == null ? null : t38();
      }, dart.fnType(dart.nullable(R), [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#whenOrNull'] = function AsyncValueX$124get$35whenOrNull(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      return common['AsyncValueX|whenOrNull'](T, R, $this, {data: data, error: error, loading: loading});
    }, dart.gFnType(R => {
      var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
      var __t$ObjectAndStackTraceToR = () => (__t$ObjectAndStackTraceToR = dart.constFn(dart.fnType(R, [core.Object, core.StackTrace])))();
      var __t$ObjectAndStackTraceToNR = () => (__t$ObjectAndStackTraceToNR = dart.constFn(dart.nullable(__t$ObjectAndStackTraceToR())))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      var __t$VoidToNR = () => (__t$VoidToNR = dart.constFn(dart.nullable(__t$VoidToR())))();
      return [__t$RN(), [], {data: dart.nullable(dart.fnType(R, [T])), error: __t$ObjectAndStackTraceToNR(), loading: __t$VoidToNR()}, {}];
    }, R => {
      var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
      var __t$ObjectAndStackTraceToR = () => (__t$ObjectAndStackTraceToR = dart.constFn(dart.fnType(R, [core.Object, core.StackTrace])))();
      var __t$ObjectAndStackTraceToNR = () => (__t$ObjectAndStackTraceToNR = dart.constFn(dart.nullable(__t$ObjectAndStackTraceToR())))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      var __t$VoidToNR = () => (__t$VoidToNR = dart.constFn(dart.nullable(__t$VoidToR())))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|maybeMap'] = function AsyncValueX$124maybeMap(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    return $this.map(R, {data: dart.fn(d => {
        if (data != null) return data(d);
        return orElse();
      }, dart.fnType(R, [common.AsyncData$(T)])), error: dart.fn(d => {
        if (error != null) return error(d);
        return orElse();
      }, dart.fnType(R, [common.AsyncError$(T)])), loading: dart.fn(d => {
        if (loading != null) return loading(d);
        return orElse();
      }, dart.fnType(R, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#maybeMap'] = function AsyncValueX$124get$35maybeMap(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      let orElse = opts && 'orElse' in opts ? opts.orElse : null;
      return common['AsyncValueX|maybeMap'](T, R, $this, {data: data, error: error, loading: loading, orElse: orElse});
    }, dart.gFnType(R => {
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      return [R, [], {data: dart.nullable(dart.fnType(R, [common.AsyncData$(T)])), error: dart.nullable(dart.fnType(R, [common.AsyncError$(T)])), loading: dart.nullable(dart.fnType(R, [common.AsyncLoading$(T)])), orElse: __t$VoidToR()}, {}];
    }, R => {
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|mapOrNull'] = function AsyncValueX$124mapOrNull(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    return $this.map(dart.nullable(R), {data: dart.fn(d => {
        let t42;
        t42 = data;
        return t42 == null ? null : t42(d);
      }, dart.fnType(dart.nullable(R), [common.AsyncData$(T)])), error: dart.fn(d => {
        let t42;
        t42 = error;
        return t42 == null ? null : t42(d);
      }, dart.fnType(dart.nullable(R), [common.AsyncError$(T)])), loading: dart.fn(d => {
        let t42;
        t42 = loading;
        return t42 == null ? null : t42(d);
      }, dart.fnType(dart.nullable(R), [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#mapOrNull'] = function AsyncValueX$124get$35mapOrNull(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      return common['AsyncValueX|mapOrNull'](T, R, $this, {data: data, error: error, loading: loading});
    }, dart.gFnType(R => {
      var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
      return [__t$RN(), [], {data: dart.nullable(dart.fnType(R, [common.AsyncData$(T)])), error: dart.nullable(dart.fnType(R, [common.AsyncError$(T)])), loading: dart.nullable(dart.fnType(R, [common.AsyncLoading$(T)]))}, {}];
    }, R => {
      var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
      return [T$.ObjectN()];
    }));
  };
  builders.AsyncNotifierProviderBuilder = class AsyncNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AsyncNotifierProviderBuilder.new();
    }
    call(NotifierT, T, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (async_notifier.AsyncNotifierProviderImpl$(NotifierT, T)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[35] || CT.C35;
    }
    get family() {
      return C[36] || CT.C36;
    }
  };
  (builders.AsyncNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.AsyncNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.AsyncNotifierProviderBuilder);
  dart.addTypeCaches(builders.AsyncNotifierProviderBuilder);
  dart.setMethodSignature(builders.AsyncNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AsyncNotifierProviderBuilder.__proto__),
    call: dart.gFnType((NotifierT, T) => [async_notifier.AsyncNotifierProviderImpl$(NotifierT, T), [dart.fnType(NotifierT, [])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (NotifierT, T) => [async_notifier.AsyncNotifier$(T), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AsyncNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AsyncNotifierProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeAsyncNotifierProviderBuilder,
    family: builders.AsyncNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AsyncNotifierProviderBuilder, I[22]);
  builders.AsyncNotifierProviderFamilyBuilder = class AsyncNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AsyncNotifierProviderFamilyBuilder.new();
    }
    call(NotifierT, T, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (async_notifier.AsyncNotifierProviderFamily$(NotifierT, T, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[37] || CT.C37;
    }
  };
  (builders.AsyncNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AsyncNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AsyncNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.AsyncNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.AsyncNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AsyncNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((NotifierT, T, Arg) => [async_notifier.AsyncNotifierProviderFamily$(NotifierT, T, Arg), [dart.fnType(NotifierT, [])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (NotifierT, T, Arg) => [async_notifier.FamilyAsyncNotifier$(T, Arg), dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AsyncNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.AsyncNotifierProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeAsyncNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AsyncNotifierProviderFamilyBuilder, I[22]);
  builders.AutoDisposeAsyncNotifierProviderBuilder = class AutoDisposeAsyncNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeAsyncNotifierProviderBuilder.new();
    }
    call(NotifierT, T, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (async_notifier.AutoDisposeAsyncNotifierProviderImpl$(NotifierT, T)).new(create, {name: name, dependencies: dependencies});
    }
    get family() {
      return C[37] || CT.C37;
    }
  };
  (builders.AutoDisposeAsyncNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeAsyncNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeAsyncNotifierProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeAsyncNotifierProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeAsyncNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeAsyncNotifierProviderBuilder.__proto__),
    call: dart.gFnType((NotifierT, T) => [async_notifier.AutoDisposeAsyncNotifierProviderImpl$(NotifierT, T), [dart.fnType(NotifierT, [])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (NotifierT, T) => [async_notifier.AutoDisposeAsyncNotifier$(T), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeAsyncNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeAsyncNotifierProviderBuilder.__proto__),
    family: builders.AutoDisposeAsyncNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeAsyncNotifierProviderBuilder, I[22]);
  builders.AutoDisposeAsyncNotifierProviderFamilyBuilder = class AutoDisposeAsyncNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeAsyncNotifierProviderFamilyBuilder.new();
    }
    call(NotifierT, T, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (async_notifier.AutoDisposeAsyncNotifierProviderFamily$(NotifierT, T, Arg)).new(create, {name: name, dependencies: dependencies});
    }
  };
  (builders.AutoDisposeAsyncNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeAsyncNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeAsyncNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeAsyncNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeAsyncNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeAsyncNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((NotifierT, T, Arg) => [async_notifier.AutoDisposeAsyncNotifierProviderFamily$(NotifierT, T, Arg), [dart.fnType(NotifierT, [])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (NotifierT, T, Arg) => [async_notifier.AutoDisposeFamilyAsyncNotifier$(T, Arg), dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeAsyncNotifierProviderFamilyBuilder, I[22]);
  builders.NotifierProviderBuilder = class NotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.NotifierProviderBuilder.new();
    }
    call(NotifierT, State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (notifier.NotifierProviderImpl$(NotifierT, State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[9] || CT.C9;
    }
    get family() {
      return C[10] || CT.C10;
    }
  };
  (builders.NotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.NotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.NotifierProviderBuilder);
  dart.addTypeCaches(builders.NotifierProviderBuilder);
  dart.setMethodSignature(builders.NotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.NotifierProviderBuilder.__proto__),
    call: dart.gFnType((NotifierT, State) => [notifier.NotifierProviderImpl$(NotifierT, State), [dart.fnType(NotifierT, [])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (NotifierT, State) => [notifier.Notifier$(State), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.NotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.NotifierProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeNotifierProviderBuilder,
    family: builders.NotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.NotifierProviderBuilder, I[22]);
  builders.NotifierProviderFamilyBuilder = class NotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.NotifierProviderFamilyBuilder.new();
    }
    call(NotifierT, State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (notifier.NotifierProviderFamily$(NotifierT, State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[38] || CT.C38;
    }
  };
  (builders.NotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.NotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.NotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.NotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.NotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.NotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((NotifierT, State, Arg) => [notifier.NotifierProviderFamily$(NotifierT, State, Arg), [dart.fnType(NotifierT, [])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (NotifierT, State, Arg) => [notifier.FamilyNotifier$(State, Arg), dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.NotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.NotifierProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.NotifierProviderFamilyBuilder, I[22]);
  builders.AutoDisposeNotifierProviderBuilder = class AutoDisposeNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeNotifierProviderBuilder.new();
    }
    call(NotifierT, State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (notifier.AutoDisposeNotifierProviderImpl$(NotifierT, State)).new(create, {name: name, dependencies: dependencies});
    }
    get family() {
      return C[38] || CT.C38;
    }
  };
  (builders.AutoDisposeNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeNotifierProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeNotifierProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeNotifierProviderBuilder.__proto__),
    call: dart.gFnType((NotifierT, State) => [notifier.AutoDisposeNotifierProviderImpl$(NotifierT, State), [dart.fnType(NotifierT, [])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (NotifierT, State) => [notifier.AutoDisposeNotifier$(State), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeNotifierProviderBuilder.__proto__),
    family: builders.AutoDisposeNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeNotifierProviderBuilder, I[22]);
  builders.AutoDisposeNotifierProviderFamilyBuilder = class AutoDisposeNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeNotifierProviderFamilyBuilder.new();
    }
    call(NotifierT, State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (notifier.AutoDisposeNotifierProviderFamily$(NotifierT, State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
  };
  (builders.AutoDisposeNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((NotifierT, State, Arg) => [notifier.AutoDisposeNotifierProviderFamily$(NotifierT, State, Arg), [dart.fnType(NotifierT, [])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (NotifierT, State, Arg) => [notifier.AutoDisposeFamilyNotifier$(State, Arg), dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeNotifierProviderFamilyBuilder, I[22]);
  builders.StateProviderBuilder = class StateProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StateProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_provider.StateProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[4] || CT.C4;
    }
    get family() {
      return C[5] || CT.C5;
    }
  };
  (builders.StateProviderBuilder.new = function() {
    ;
  }).prototype = builders.StateProviderBuilder.prototype;
  dart.addTypeTests(builders.StateProviderBuilder);
  dart.addTypeCaches(builders.StateProviderBuilder);
  dart.setMethodSignature(builders.StateProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.StateProviderBuilder.__proto__),
    call: dart.gFnType(State => [state_provider.StateProvider$(State), [dart.fnType(State, [state_provider.StateProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StateProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.StateProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeStateProviderBuilder,
    family: builders.StateProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StateProviderBuilder, I[22]);
  builders.StateProviderFamilyBuilder = class StateProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StateProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_provider.StateProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[39] || CT.C39;
    }
  };
  (builders.StateProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.StateProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.StateProviderFamilyBuilder);
  dart.addTypeCaches(builders.StateProviderFamilyBuilder);
  dart.setMethodSignature(builders.StateProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.StateProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [state_provider.StateProviderFamily$(State, Arg), [dart.fnType(State, [state_provider.StateProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StateProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.StateProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeStateProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StateProviderFamilyBuilder, I[22]);
  builders.StateNotifierProviderBuilder = class StateNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StateNotifierProviderBuilder.new();
    }
    call(Notifier, State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_notifier_provider.StateNotifierProvider$(Notifier, State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[19] || CT.C19;
    }
    get family() {
      return C[20] || CT.C20;
    }
  };
  (builders.StateNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.StateNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.StateNotifierProviderBuilder);
  dart.addTypeCaches(builders.StateNotifierProviderBuilder);
  dart.setMethodSignature(builders.StateNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.StateNotifierProviderBuilder.__proto__),
    call: dart.gFnType((Notifier, State) => [state_notifier_provider.StateNotifierProvider$(Notifier, State), [dart.fnType(Notifier, [state_notifier_provider.StateNotifierProviderRef$(Notifier, State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (Notifier, State) => [state_notifier.StateNotifier$(State), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StateNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.StateNotifierProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeStateNotifierProviderBuilder,
    family: builders.StateNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StateNotifierProviderBuilder, I[22]);
  builders.StateNotifierProviderFamilyBuilder = class StateNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StateNotifierProviderFamilyBuilder.new();
    }
    call(Notifier, State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_notifier_provider.StateNotifierProviderFamily$(Notifier, State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[40] || CT.C40;
    }
  };
  (builders.StateNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.StateNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.StateNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.StateNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.StateNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.StateNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((Notifier, State, Arg) => [state_notifier_provider.StateNotifierProviderFamily$(Notifier, State, Arg), [dart.fnType(Notifier, [state_notifier_provider.StateNotifierProviderRef$(Notifier, State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (Notifier, State, Arg) => [state_notifier.StateNotifier$(State), dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StateNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.StateNotifierProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeStateNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StateNotifierProviderFamilyBuilder, I[22]);
  builders.ProviderBuilder = class ProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.ProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (provider$.Provider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[25] || CT.C25;
    }
    get family() {
      return C[24] || CT.C24;
    }
  };
  (builders.ProviderBuilder.new = function() {
    ;
  }).prototype = builders.ProviderBuilder.prototype;
  dart.addTypeTests(builders.ProviderBuilder);
  dart.addTypeCaches(builders.ProviderBuilder);
  dart.setMethodSignature(builders.ProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.ProviderBuilder.__proto__),
    call: dart.gFnType(State => [provider$.Provider$(State), [dart.fnType(State, [provider$.ProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.ProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.ProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeProviderBuilder,
    family: builders.ProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.ProviderBuilder, I[22]);
  builders.ProviderFamilyBuilder = class ProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.ProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (provider$.ProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[41] || CT.C41;
    }
  };
  (builders.ProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.ProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.ProviderFamilyBuilder);
  dart.addTypeCaches(builders.ProviderFamilyBuilder);
  dart.setMethodSignature(builders.ProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.ProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [provider$.ProviderFamily$(State, Arg), [dart.fnType(State, [provider$.ProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.ProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.ProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.ProviderFamilyBuilder, I[22]);
  builders.FutureProviderBuilder = class FutureProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.FutureProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (future_provider.FutureProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[29] || CT.C29;
    }
    get family() {
      return C[30] || CT.C30;
    }
  };
  (builders.FutureProviderBuilder.new = function() {
    ;
  }).prototype = builders.FutureProviderBuilder.prototype;
  dart.addTypeTests(builders.FutureProviderBuilder);
  dart.addTypeCaches(builders.FutureProviderBuilder);
  dart.setMethodSignature(builders.FutureProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.FutureProviderBuilder.__proto__),
    call: dart.gFnType(State => [future_provider.FutureProvider$(State), [dart.fnType(async.FutureOr$(State), [future_provider.FutureProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.FutureProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.FutureProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeFutureProviderBuilder,
    family: builders.FutureProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.FutureProviderBuilder, I[22]);
  builders.FutureProviderFamilyBuilder = class FutureProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.FutureProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (future_provider.FutureProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[42] || CT.C42;
    }
  };
  (builders.FutureProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.FutureProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.FutureProviderFamilyBuilder);
  dart.addTypeCaches(builders.FutureProviderFamilyBuilder);
  dart.setMethodSignature(builders.FutureProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.FutureProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [future_provider.FutureProviderFamily$(State, Arg), [dart.fnType(async.FutureOr$(State), [future_provider.FutureProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.FutureProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.FutureProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeFutureProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.FutureProviderFamilyBuilder, I[22]);
  builders.StreamProviderBuilder = class StreamProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StreamProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (stream_provider.StreamProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[14] || CT.C14;
    }
    get family() {
      return C[15] || CT.C15;
    }
  };
  (builders.StreamProviderBuilder.new = function() {
    ;
  }).prototype = builders.StreamProviderBuilder.prototype;
  dart.addTypeTests(builders.StreamProviderBuilder);
  dart.addTypeCaches(builders.StreamProviderBuilder);
  dart.setMethodSignature(builders.StreamProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.StreamProviderBuilder.__proto__),
    call: dart.gFnType(State => [stream_provider.StreamProvider$(State), [dart.fnType(async.Stream$(State), [stream_provider.StreamProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StreamProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.StreamProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeStreamProviderBuilder,
    family: builders.StreamProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StreamProviderBuilder, I[22]);
  builders.StreamProviderFamilyBuilder = class StreamProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StreamProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (stream_provider.StreamProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[43] || CT.C43;
    }
  };
  (builders.StreamProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.StreamProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.StreamProviderFamilyBuilder);
  dart.addTypeCaches(builders.StreamProviderFamilyBuilder);
  dart.setMethodSignature(builders.StreamProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.StreamProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [stream_provider.StreamProviderFamily$(State, Arg), [dart.fnType(async.Stream$(State), [stream_provider.StreamProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StreamProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.StreamProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeStreamProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StreamProviderFamilyBuilder, I[22]);
  builders.AutoDisposeStateProviderBuilder = class AutoDisposeStateProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStateProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_provider.AutoDisposeStateProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get family() {
      return C[39] || CT.C39;
    }
  };
  (builders.AutoDisposeStateProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStateProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStateProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeStateProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeStateProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStateProviderBuilder.__proto__),
    call: dart.gFnType(State => [state_provider.AutoDisposeStateProvider$(State), [dart.fnType(State, [state_provider.AutoDisposeStateProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeStateProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeStateProviderBuilder.__proto__),
    family: builders.AutoDisposeStateProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeStateProviderBuilder, I[22]);
  builders.AutoDisposeStateProviderFamilyBuilder = class AutoDisposeStateProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStateProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_provider.AutoDisposeStateProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
  };
  (builders.AutoDisposeStateProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStateProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStateProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeStateProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeStateProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStateProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [state_provider.AutoDisposeStateProviderFamily$(State, Arg), [dart.fnType(State, [state_provider.AutoDisposeStateProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeStateProviderFamilyBuilder, I[22]);
  builders.AutoDisposeStateNotifierProviderBuilder = class AutoDisposeStateNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStateNotifierProviderBuilder.new();
    }
    call(Notifier, State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State)).new(create, {name: name, dependencies: dependencies});
    }
    get family() {
      return C[40] || CT.C40;
    }
  };
  (builders.AutoDisposeStateNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStateNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStateNotifierProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeStateNotifierProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeStateNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStateNotifierProviderBuilder.__proto__),
    call: dart.gFnType((Notifier, State) => [state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State), [dart.fnType(Notifier, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (Notifier, State) => [state_notifier.StateNotifier$(State), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeStateNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeStateNotifierProviderBuilder.__proto__),
    family: builders.AutoDisposeStateNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeStateNotifierProviderBuilder, I[22]);
  builders.AutoDisposeStateNotifierProviderFamilyBuilder = class AutoDisposeStateNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStateNotifierProviderFamilyBuilder.new();
    }
    call(Notifier, State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_notifier_provider.AutoDisposeStateNotifierProviderFamily$(Notifier, State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
  };
  (builders.AutoDisposeStateNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStateNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStateNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeStateNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeStateNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStateNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((Notifier, State, Arg) => [state_notifier_provider.AutoDisposeStateNotifierProviderFamily$(Notifier, State, Arg), [dart.fnType(Notifier, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (Notifier, State, Arg) => [state_notifier.StateNotifier$(State), dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeStateNotifierProviderFamilyBuilder, I[22]);
  builders.AutoDisposeProviderBuilder = class AutoDisposeProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (provider$.AutoDisposeProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get family() {
      return C[41] || CT.C41;
    }
  };
  (builders.AutoDisposeProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeProviderBuilder.__proto__),
    call: dart.gFnType(State => [provider$.AutoDisposeProvider$(State), [dart.fnType(State, [provider$.AutoDisposeProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeProviderBuilder.__proto__),
    family: builders.AutoDisposeProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeProviderBuilder, I[22]);
  builders.AutoDisposeProviderFamilyBuilder = class AutoDisposeProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (provider$.AutoDisposeProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
  };
  (builders.AutoDisposeProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [provider$.AutoDisposeProviderFamily$(State, Arg), [dart.fnType(State, [provider$.AutoDisposeProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeProviderFamilyBuilder, I[22]);
  builders.AutoDisposeFutureProviderBuilder = class AutoDisposeFutureProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeFutureProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (future_provider.AutoDisposeFutureProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get family() {
      return C[42] || CT.C42;
    }
  };
  (builders.AutoDisposeFutureProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeFutureProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeFutureProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeFutureProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeFutureProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeFutureProviderBuilder.__proto__),
    call: dart.gFnType(State => [future_provider.AutoDisposeFutureProvider$(State), [dart.fnType(async.FutureOr$(State), [future_provider.AutoDisposeFutureProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeFutureProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeFutureProviderBuilder.__proto__),
    family: builders.AutoDisposeFutureProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeFutureProviderBuilder, I[22]);
  builders.AutoDisposeFutureProviderFamilyBuilder = class AutoDisposeFutureProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeFutureProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (future_provider.AutoDisposeFutureProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
  };
  (builders.AutoDisposeFutureProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeFutureProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeFutureProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeFutureProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeFutureProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeFutureProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [future_provider.AutoDisposeFutureProviderFamily$(State, Arg), [dart.fnType(async.FutureOr$(State), [future_provider.AutoDisposeFutureProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeFutureProviderFamilyBuilder, I[22]);
  builders.AutoDisposeStreamProviderBuilder = class AutoDisposeStreamProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStreamProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (stream_provider.AutoDisposeStreamProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get family() {
      return C[43] || CT.C43;
    }
  };
  (builders.AutoDisposeStreamProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStreamProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStreamProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeStreamProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeStreamProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStreamProviderBuilder.__proto__),
    call: dart.gFnType(State => [stream_provider.AutoDisposeStreamProvider$(State), [dart.fnType(async.Stream$(State), [stream_provider.AutoDisposeStreamProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeStreamProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeStreamProviderBuilder.__proto__),
    family: builders.AutoDisposeStreamProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeStreamProviderBuilder, I[22]);
  builders.AutoDisposeStreamProviderFamilyBuilder = class AutoDisposeStreamProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStreamProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (stream_provider.AutoDisposeStreamProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
  };
  (builders.AutoDisposeStreamProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStreamProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStreamProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeStreamProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeStreamProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStreamProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [stream_provider.AutoDisposeStreamProviderFamily$(State, Arg), [dart.fnType(async.Stream$(State), [stream_provider.AutoDisposeStreamProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeStreamProviderFamilyBuilder, I[22]);
  var _element$0 = dart.privateName(async_notifier, "_element");
  const _is_AsyncNotifierBase_default = Symbol('_is_AsyncNotifierBase_default');
  async_notifier.AsyncNotifierBase$ = dart.generic(State => {
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    var __t$FutureOrOfState = () => (__t$FutureOrOfState = dart.constFn(async.FutureOr$(State)))();
    var __t$StateToFutureOrOfState = () => (__t$StateToFutureOrOfState = dart.constFn(dart.fnType(__t$FutureOrOfState(), [State])))();
    var __t$ObjectAndStackTraceToFutureOrOfState = () => (__t$ObjectAndStackTraceToFutureOrOfState = dart.constFn(dart.fnType(__t$FutureOrOfState(), [core.Object, core.StackTrace])))();
    var __t$ObjectAndStackTraceToNFutureOrOfState = () => (__t$ObjectAndStackTraceToNFutureOrOfState = dart.constFn(dart.nullable(__t$ObjectAndStackTraceToFutureOrOfState())))();
    var __t$AsyncDataOfState = () => (__t$AsyncDataOfState = dart.constFn(common.AsyncData$(State)))();
    class AsyncNotifierBase extends core.Object {
      get state() {
        this[_element$0].flush();
        return this[_element$0].requireState;
      }
      set state(newState) {
        __t$AsyncValueOfState().as(newState);
        this[_element$0].state = newState;
      }
      get future() {
        this[_element$0].flush();
        return this[_element$0][_futureNotifier$0].value;
      }
      update(cb, opts) {
        __t$StateToFutureOrOfState().as(cb);
        let onError = opts && 'onError' in opts ? opts.onError : null;
        __t$ObjectAndStackTraceToNFutureOrOfState().as(onError);
        return async.async(State, (function* update() {
          let newState = (yield this.future.then(State, cb, {onError: onError}));
          this.state = new (__t$AsyncDataOfState()).new(newState);
          return newState;
        }).bind(this));
      }
      updateShouldNotify(previous, next) {
        __t$AsyncValueOfState().as(previous);
        __t$AsyncValueOfState().as(next);
        return async_notifier.FutureHandlerProviderElementMixin.handleUpdateShouldNotify(State, previous, next);
      }
    }
    (AsyncNotifierBase.new = function() {
      ;
    }).prototype = AsyncNotifierBase.prototype;
    dart.addTypeTests(AsyncNotifierBase);
    AsyncNotifierBase.prototype[_is_AsyncNotifierBase_default] = true;
    dart.addTypeCaches(AsyncNotifierBase);
    dart.setMethodSignature(AsyncNotifierBase, () => ({
      __proto__: dart.getMethods(AsyncNotifierBase.__proto__),
      update: dart.fnType(async.Future$(State), [dart.nullable(core.Object)], {onError: dart.nullable(core.Object)}, {}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AsyncNotifierBase, () => ({
      __proto__: dart.getGetters(AsyncNotifierBase.__proto__),
      state: common.AsyncValue$(State),
      future: async.Future$(State)
    }));
    dart.setSetterSignature(AsyncNotifierBase, () => ({
      __proto__: dart.getSetters(AsyncNotifierBase.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(AsyncNotifierBase, I[14]);
    return AsyncNotifierBase;
  });
  async_notifier.AsyncNotifierBase = async_notifier.AsyncNotifierBase$();
  dart.addTypeTests(async_notifier.AsyncNotifierBase, _is_AsyncNotifierBase_default);
  var dependencies$9 = dart.privateName(async_notifier, "AsyncNotifierProviderBase.dependencies");
  var _createNotifier$0 = dart.privateName(async_notifier, "_createNotifier");
  const _is_AsyncNotifierProviderBase_default = Symbol('_is_AsyncNotifierProviderBase_default');
  async_notifier.AsyncNotifierProviderBase$ = dart.generic((NotifierT, T) => {
    class AsyncNotifierProviderBase extends framework.ProviderBase$(common.AsyncValue$(T)) {
      get dependencies() {
        return this[dependencies$9];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
    }
    (AsyncNotifierProviderBase.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[_createNotifier$0] = _createNotifier;
      this[dependencies$9] = dependencies;
      AsyncNotifierProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AsyncNotifierProviderBase.prototype;
    dart.addTypeTests(AsyncNotifierProviderBase);
    AsyncNotifierProviderBase.prototype[_is_AsyncNotifierProviderBase_default] = true;
    dart.addTypeCaches(AsyncNotifierProviderBase);
    dart.setLibraryUri(AsyncNotifierProviderBase, I[14]);
    dart.setFieldSignature(AsyncNotifierProviderBase, () => ({
      __proto__: dart.getFields(AsyncNotifierProviderBase.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [_createNotifier$0]: dart.finalFieldType(dart.fnType(NotifierT, []))
    }));
    return AsyncNotifierProviderBase;
  });
  async_notifier.AsyncNotifierProviderBase = async_notifier.AsyncNotifierProviderBase$();
  dart.addTypeTests(async_notifier.AsyncNotifierProviderBase, _is_AsyncNotifierProviderBase_default);
  var __BuildlessAutoDisposeAsyncNotifier__element = dart.privateName(async_notifier, "_#BuildlessAutoDisposeAsyncNotifier#_element");
  var _setElement$ = dart.privateName(async_notifier, "_setElement");
  const _is_BuildlessAutoDisposeAsyncNotifier_default = Symbol('_is_BuildlessAutoDisposeAsyncNotifier_default');
  async_notifier.BuildlessAutoDisposeAsyncNotifier$ = dart.generic(State => {
    var __t$AsyncNotifierBaseOfState = () => (__t$AsyncNotifierBaseOfState = dart.constFn(async_notifier.AsyncNotifierBase$(State)))();
    var __t$AutoDisposeAsyncNotifierProviderElementOfAsyncNotifierBaseOfState$State = () => (__t$AutoDisposeAsyncNotifierProviderElementOfAsyncNotifierBaseOfState$State = dart.constFn(async_notifier.AutoDisposeAsyncNotifierProviderElement$(__t$AsyncNotifierBaseOfState(), State)))();
    class BuildlessAutoDisposeAsyncNotifier extends async_notifier.AsyncNotifierBase$(State) {
      get [_element$0]() {
        let t43;
        t43 = this[__BuildlessAutoDisposeAsyncNotifier__element];
        return t43 == null ? dart.throw(new _internal.LateError.fieldNI("_element")) : t43;
      }
      set [_element$0](library$32package$58riverpod$47src$47async_notifier$47auto_dispose$46dart$58$58_element$35param) {
        if (this[__BuildlessAutoDisposeAsyncNotifier__element] == null)
          this[__BuildlessAutoDisposeAsyncNotifier__element] = library$32package$58riverpod$47src$47async_notifier$47auto_dispose$46dart$58$58_element$35param;
        else
          dart.throw(new _internal.LateError.fieldAI("_element"));
      }
      [_setElement$](element) {
        this[_element$0] = __t$AutoDisposeAsyncNotifierProviderElementOfAsyncNotifierBaseOfState$State().as(element);
      }
      get ref() {
        return this[_element$0];
      }
    }
    (BuildlessAutoDisposeAsyncNotifier.new = function() {
      this[__BuildlessAutoDisposeAsyncNotifier__element] = null;
      ;
    }).prototype = BuildlessAutoDisposeAsyncNotifier.prototype;
    dart.addTypeTests(BuildlessAutoDisposeAsyncNotifier);
    BuildlessAutoDisposeAsyncNotifier.prototype[_is_BuildlessAutoDisposeAsyncNotifier_default] = true;
    dart.addTypeCaches(BuildlessAutoDisposeAsyncNotifier);
    dart.setMethodSignature(BuildlessAutoDisposeAsyncNotifier, () => ({
      __proto__: dart.getMethods(BuildlessAutoDisposeAsyncNotifier.__proto__),
      [_setElement$]: dart.fnType(dart.void, [framework.ProviderElementBase$(common.AsyncValue$(State))])
    }));
    dart.setGetterSignature(BuildlessAutoDisposeAsyncNotifier, () => ({
      __proto__: dart.getGetters(BuildlessAutoDisposeAsyncNotifier.__proto__),
      [_element$0]: async_notifier.AutoDisposeAsyncNotifierProviderElement$(async_notifier.AsyncNotifierBase$(State), State),
      ref: async_notifier.AutoDisposeAsyncNotifierProviderRef$(State)
    }));
    dart.setSetterSignature(BuildlessAutoDisposeAsyncNotifier, () => ({
      __proto__: dart.getSetters(BuildlessAutoDisposeAsyncNotifier.__proto__),
      [_element$0]: async_notifier.AutoDisposeAsyncNotifierProviderElement$(async_notifier.AsyncNotifierBase$(State), State)
    }));
    dart.setLibraryUri(BuildlessAutoDisposeAsyncNotifier, I[14]);
    dart.setFieldSignature(BuildlessAutoDisposeAsyncNotifier, () => ({
      __proto__: dart.getFields(BuildlessAutoDisposeAsyncNotifier.__proto__),
      [__BuildlessAutoDisposeAsyncNotifier__element]: dart.fieldType(dart.nullable(async_notifier.AutoDisposeAsyncNotifierProviderElement$(async_notifier.AsyncNotifierBase$(State), State)))
    }));
    return BuildlessAutoDisposeAsyncNotifier;
  });
  async_notifier.BuildlessAutoDisposeAsyncNotifier = async_notifier.BuildlessAutoDisposeAsyncNotifier$();
  dart.addTypeTests(async_notifier.BuildlessAutoDisposeAsyncNotifier, _is_BuildlessAutoDisposeAsyncNotifier_default);
  const _is_AutoDisposeAsyncNotifier_default = Symbol('_is_AutoDisposeAsyncNotifier_default');
  async_notifier.AutoDisposeAsyncNotifier$ = dart.generic(State => {
    class AutoDisposeAsyncNotifier extends async_notifier.BuildlessAutoDisposeAsyncNotifier$(State) {}
    (AutoDisposeAsyncNotifier.new = function() {
      AutoDisposeAsyncNotifier.__proto__.new.call(this);
      ;
    }).prototype = AutoDisposeAsyncNotifier.prototype;
    dart.addTypeTests(AutoDisposeAsyncNotifier);
    AutoDisposeAsyncNotifier.prototype[_is_AutoDisposeAsyncNotifier_default] = true;
    dart.addTypeCaches(AutoDisposeAsyncNotifier);
    dart.setLibraryUri(AutoDisposeAsyncNotifier, I[14]);
    return AutoDisposeAsyncNotifier;
  });
  async_notifier.AutoDisposeAsyncNotifier = async_notifier.AutoDisposeAsyncNotifier$();
  dart.addTypeTests(async_notifier.AutoDisposeAsyncNotifier, _is_AutoDisposeAsyncNotifier_default);
  const _is_AutoDisposeAsyncNotifierProviderRef_default = Symbol('_is_AutoDisposeAsyncNotifierProviderRef_default');
  async_notifier.AutoDisposeAsyncNotifierProviderRef$ = dart.generic(T => {
    class AutoDisposeAsyncNotifierProviderRef extends core.Object {}
    (AutoDisposeAsyncNotifierProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeAsyncNotifierProviderRef.prototype;
    dart.addTypeTests(AutoDisposeAsyncNotifierProviderRef);
    AutoDisposeAsyncNotifierProviderRef.prototype[_is_AutoDisposeAsyncNotifierProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeAsyncNotifierProviderRef);
    AutoDisposeAsyncNotifierProviderRef[dart.implements] = () => [async_notifier.AsyncNotifierProviderRef$(T), framework.AutoDisposeRef$(common.AsyncValue$(T))];
    dart.setLibraryUri(AutoDisposeAsyncNotifierProviderRef, I[14]);
    return AutoDisposeAsyncNotifierProviderRef;
  });
  async_notifier.AutoDisposeAsyncNotifierProviderRef = async_notifier.AutoDisposeAsyncNotifierProviderRef$();
  dart.addTypeTests(async_notifier.AutoDisposeAsyncNotifierProviderRef, _is_AutoDisposeAsyncNotifierProviderRef_default);
  var __AutoDisposeAsyncNotifierProviderImpl_notifier = dart.privateName(async_notifier, "_#AutoDisposeAsyncNotifierProviderImpl#notifier");
  var __AutoDisposeAsyncNotifierProviderImpl_future = dart.privateName(async_notifier, "_#AutoDisposeAsyncNotifierProviderImpl#future");
  const _is_AutoDisposeAsyncNotifierProviderImpl_default = Symbol('_is_AutoDisposeAsyncNotifierProviderImpl_default');
  async_notifier.AutoDisposeAsyncNotifierProviderImpl$ = dart.generic((NotifierT, T) => {
    var __t$AutoDisposeAsyncNotifierProviderElementOfNotifierT$T = () => (__t$AutoDisposeAsyncNotifierProviderElementOfNotifierT$T = dart.constFn(async_notifier.AutoDisposeAsyncNotifierProviderElement$(NotifierT, T)))();
    var __t$AsyncNotifierBaseOfT = () => (__t$AsyncNotifierBaseOfT = dart.constFn(async_notifier.AsyncNotifierBase$(T)))();
    var __t$AutoDisposeAsyncNotifierOfT = () => (__t$AutoDisposeAsyncNotifierOfT = dart.constFn(async_notifier.AutoDisposeAsyncNotifier$(T)))();
    const AsyncNotifierProviderBase_AsyncSelector$36 = class AsyncNotifierProviderBase_AsyncSelector extends async_notifier.AsyncNotifierProviderBase$(NotifierT, T) {};
    (AsyncNotifierProviderBase_AsyncSelector$36.new = function(_createNotifier, opts) {
      AsyncNotifierProviderBase_AsyncSelector$36.__proto__.new.call(this, _createNotifier, opts);
    }).prototype = AsyncNotifierProviderBase_AsyncSelector$36.prototype;
    dart.applyMixin(AsyncNotifierProviderBase_AsyncSelector$36, framework.AsyncSelector$(T));
    class AutoDisposeAsyncNotifierProviderImpl extends AsyncNotifierProviderBase_AsyncSelector$36 {
      static ['_#new#tearOff'](NotifierT, T, _createNotifier, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (async_notifier.AutoDisposeAsyncNotifierProviderImpl$(NotifierT, T)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get notifier() {
        let t44, t43;
        t43 = this[__AutoDisposeAsyncNotifierProviderImpl_notifier];
        return t43 == null ? (t44 = async_notifier._notifier(NotifierT, T, this), this[__AutoDisposeAsyncNotifierProviderImpl_notifier] == null ? this[__AutoDisposeAsyncNotifierProviderImpl_notifier] = t44 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t43;
      }
      get future() {
        let t44, t43;
        t43 = this[__AutoDisposeAsyncNotifierProviderImpl_future];
        return t43 == null ? (t44 = async_notifier._future(T, this), this[__AutoDisposeAsyncNotifierProviderImpl_future] == null ? this[__AutoDisposeAsyncNotifierProviderImpl_future] = t44 : dart.throw(new _internal.LateError.fieldADI("future"))) : t43;
      }
      createElement() {
        return new (__t$AutoDisposeAsyncNotifierProviderElementOfNotifierT$T()).__(this);
      }
      runNotifierBuild(notifier) {
        __t$AsyncNotifierBaseOfT().as(notifier);
        return __t$AutoDisposeAsyncNotifierOfT().as(notifier).build();
      }
    }
    (AutoDisposeAsyncNotifierProviderImpl.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeAsyncNotifierProviderImpl_notifier] = null;
      this[__AutoDisposeAsyncNotifierProviderImpl_future] = null;
      AutoDisposeAsyncNotifierProviderImpl.__proto__.new.call(this, _createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeAsyncNotifierProviderImpl.prototype;
    dart.addTypeTests(AutoDisposeAsyncNotifierProviderImpl);
    AutoDisposeAsyncNotifierProviderImpl.prototype[_is_AutoDisposeAsyncNotifierProviderImpl_default] = true;
    dart.addTypeCaches(AutoDisposeAsyncNotifierProviderImpl);
    dart.setMethodSignature(AutoDisposeAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getMethods(AutoDisposeAsyncNotifierProviderImpl.__proto__),
      createElement: dart.fnType(async_notifier.AutoDisposeAsyncNotifierProviderElement$(NotifierT, T), []),
      runNotifierBuild: dart.fnType(async.FutureOr$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AutoDisposeAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getGetters(AutoDisposeAsyncNotifierProviderImpl.__proto__),
      notifier: framework.Refreshable$(NotifierT),
      future: framework.Refreshable$(async.Future$(T))
    }));
    dart.setLibraryUri(AutoDisposeAsyncNotifierProviderImpl, I[14]);
    dart.setFieldSignature(AutoDisposeAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getFields(AutoDisposeAsyncNotifierProviderImpl.__proto__),
      [__AutoDisposeAsyncNotifierProviderImpl_notifier]: dart.fieldType(dart.nullable(framework.Refreshable$(NotifierT))),
      [__AutoDisposeAsyncNotifierProviderImpl_future]: dart.fieldType(dart.nullable(framework.Refreshable$(async.Future$(T))))
    }));
    dart.setStaticFieldSignature(AutoDisposeAsyncNotifierProviderImpl, () => ['family']);
    return AutoDisposeAsyncNotifierProviderImpl;
  });
  async_notifier.AutoDisposeAsyncNotifierProviderImpl = async_notifier.AutoDisposeAsyncNotifierProviderImpl$();
  dart.defineLazy(async_notifier.AutoDisposeAsyncNotifierProviderImpl, {
    /*async_notifier.AutoDisposeAsyncNotifierProviderImpl.family*/get family() {
      return C[44] || CT.C44;
    }
  }, false);
  dart.addTypeTests(async_notifier.AutoDisposeAsyncNotifierProviderImpl, _is_AutoDisposeAsyncNotifierProviderImpl_default);
  var _notifierNotifier$0 = dart.privateName(async_notifier, "_notifierNotifier");
  const _is_AsyncNotifierProviderElement_default = Symbol('_is_AsyncNotifierProviderElement_default');
  async_notifier.AsyncNotifierProviderElement$ = dart.generic((NotifierT, T) => {
    var __t$ProxyElementValueNotifierOfNotifierT = () => (__t$ProxyElementValueNotifierOfNotifierT = dart.constFn(listenable.ProxyElementValueNotifier$(NotifierT)))();
    var __t$AsyncNotifierProviderBaseOfNotifierT$T = () => (__t$AsyncNotifierProviderBaseOfNotifierT$T = dart.constFn(async_notifier.AsyncNotifierProviderBase$(NotifierT, T)))();
    var __t$VoidToNotifierT = () => (__t$VoidToNotifierT = dart.constFn(dart.fnType(NotifierT, [])))();
    var __t$NotifierTTovoid = () => (__t$NotifierTTovoid = dart.constFn(dart.fnType(dart.void, [NotifierT])))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    var __t$FutureOrOfT = () => (__t$FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    var __t$VoidToFutureOrOfT = () => (__t$VoidToFutureOrOfT = dart.constFn(dart.fnType(__t$FutureOrOfT(), [])))();
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    const ProviderElementBase_FutureHandlerProviderElementMixin$36 = class ProviderElementBase_FutureHandlerProviderElementMixin extends framework.ProviderElementBase$(common.AsyncValue$(T)) {};
    (ProviderElementBase_FutureHandlerProviderElementMixin$36.new = function(_provider) {
      async_notifier.FutureHandlerProviderElementMixin$(T)[dart.mixinNew].call(this);
      ProviderElementBase_FutureHandlerProviderElementMixin$36.__proto__.new.call(this, _provider);
    }).prototype = ProviderElementBase_FutureHandlerProviderElementMixin$36.prototype;
    dart.applyMixin(ProviderElementBase_FutureHandlerProviderElementMixin$36, async_notifier.FutureHandlerProviderElementMixin$(T));
    class AsyncNotifierProviderElement extends ProviderElementBase_FutureHandlerProviderElementMixin$36 {
      static ['_#_#tearOff'](NotifierT, T, provider) {
        return new (async_notifier.AsyncNotifierProviderElement$(NotifierT, T)).__(provider);
      }
      create(opts) {
        let t44, t43;
        let didChangeDependency = opts && 'didChangeDependency' in opts ? opts.didChangeDependency : null;
        let provider = __t$AsyncNotifierProviderBaseOfNotifierT$T().as(this.provider);
        let notifierResult = (t43 = this[_notifierNotifier$0], t44 = t43.result, t44 == null ? t43.result = result.Result.guard(NotifierT, dart.fn(() => {
          let t45;
          t45 = provider[_createNotifier$0]();
          return (() => {
            t45[_setElement$](this);
            return t45;
          })();
        }, __t$VoidToNotifierT())) : t44);
        notifierResult.when(dart.void, {error: dart.fn((error, stackTrace) => {
            this[_errorTransition](error, stackTrace);
            this.setState(new (__t$AsyncErrorOfT()).new(error, stackTrace));
          }, T$.ObjectAndStackTraceToNull()), data: dart.fn(notifier => this.handleFuture(dart.fn(() => provider.runNotifierBuild(notifier), __t$VoidToFutureOrOfT()), {didChangeDependency: didChangeDependency}), __t$NotifierTTovoid())});
      }
      visitChildren(opts) {
        let elementVisitor = opts && 'elementVisitor' in opts ? opts.elementVisitor : null;
        let notifierVisitor = opts && 'notifierVisitor' in opts ? opts.notifierVisitor : null;
        super.visitChildren({elementVisitor: elementVisitor, notifierVisitor: notifierVisitor});
        notifierVisitor(this[_notifierNotifier$0]);
      }
      updateShouldNotify(previous, next) {
        let t44, t43, t43$;
        __t$AsyncValueOfT().as(previous);
        __t$AsyncValueOfT().as(next);
        t43$ = (t43 = this[_notifierNotifier$0].result, t43 == null ? null : (t44 = t43.stateOrNull, t44 == null ? null : t44.updateShouldNotify(previous, next)));
        return t43$ == null ? true : t43$;
      }
    }
    (AsyncNotifierProviderElement.__ = function(provider) {
      this[_notifierNotifier$0] = new (__t$ProxyElementValueNotifierOfNotifierT()).new();
      AsyncNotifierProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = AsyncNotifierProviderElement.prototype;
    dart.addTypeTests(AsyncNotifierProviderElement);
    AsyncNotifierProviderElement.prototype[_is_AsyncNotifierProviderElement_default] = true;
    dart.addTypeCaches(AsyncNotifierProviderElement);
    AsyncNotifierProviderElement[dart.implements] = () => [async_notifier.AsyncNotifierProviderRef$(T)];
    dart.setMethodSignature(AsyncNotifierProviderElement, () => ({
      __proto__: dart.getMethods(AsyncNotifierProviderElement.__proto__),
      create: dart.fnType(dart.void, [], {}, {didChangeDependency: core.bool}),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AsyncNotifierProviderElement, I[14]);
    dart.setFieldSignature(AsyncNotifierProviderElement, () => ({
      __proto__: dart.getFields(AsyncNotifierProviderElement.__proto__),
      [_notifierNotifier$0]: dart.finalFieldType(listenable.ProxyElementValueNotifier$(NotifierT))
    }));
    return AsyncNotifierProviderElement;
  });
  async_notifier.AsyncNotifierProviderElement = async_notifier.AsyncNotifierProviderElement$();
  dart.addTypeTests(async_notifier.AsyncNotifierProviderElement, _is_AsyncNotifierProviderElement_default);
  const _is_AutoDisposeAsyncNotifierProviderElement_default = Symbol('_is_AutoDisposeAsyncNotifierProviderElement_default');
  async_notifier.AutoDisposeAsyncNotifierProviderElement$ = dart.generic((NotifierT, T) => {
    const AsyncNotifierProviderElement_AutoDisposeProviderElementMixin$36 = class AsyncNotifierProviderElement_AutoDisposeProviderElementMixin extends async_notifier.AsyncNotifierProviderElement$(NotifierT, T) {};
    (AsyncNotifierProviderElement_AutoDisposeProviderElementMixin$36.__ = function(provider) {
      framework.AutoDisposeProviderElementMixin$(common.AsyncValue$(T))[dart.mixinNew].call(this);
      AsyncNotifierProviderElement_AutoDisposeProviderElementMixin$36.__proto__.__.call(this, provider);
    }).prototype = AsyncNotifierProviderElement_AutoDisposeProviderElementMixin$36.prototype;
    dart.applyMixin(AsyncNotifierProviderElement_AutoDisposeProviderElementMixin$36, framework.AutoDisposeProviderElementMixin$(common.AsyncValue$(T)));
    class AutoDisposeAsyncNotifierProviderElement extends AsyncNotifierProviderElement_AutoDisposeProviderElementMixin$36 {
      static ['_#_#tearOff'](NotifierT, T, provider) {
        return new (async_notifier.AutoDisposeAsyncNotifierProviderElement$(NotifierT, T)).__(provider);
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
    (AutoDisposeAsyncNotifierProviderElement.__ = function(provider) {
      AutoDisposeAsyncNotifierProviderElement.__proto__.__.call(this, provider);
      ;
    }).prototype = AutoDisposeAsyncNotifierProviderElement.prototype;
    dart.addTypeTests(AutoDisposeAsyncNotifierProviderElement);
    AutoDisposeAsyncNotifierProviderElement.prototype[_is_AutoDisposeAsyncNotifierProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeAsyncNotifierProviderElement);
    AutoDisposeAsyncNotifierProviderElement[dart.implements] = () => [async_notifier.AutoDisposeAsyncNotifierProviderRef$(T)];
    dart.setMethodSignature(AutoDisposeAsyncNotifierProviderElement, () => ({
      __proto__: dart.getMethods(AutoDisposeAsyncNotifierProviderElement.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeAsyncNotifierProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeAsyncNotifierProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeAsyncNotifierProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeAsyncNotifierProviderElement.__proto__),
      [_keepAliveLinks]: dart.nullable(core.List$(framework.KeepAliveLink)),
      [_maintainState]: core.bool,
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeAsyncNotifierProviderElement, I[14]);
    return AutoDisposeAsyncNotifierProviderElement;
  });
  async_notifier.AutoDisposeAsyncNotifierProviderElement = async_notifier.AutoDisposeAsyncNotifierProviderElement$();
  dart.addTypeTests(async_notifier.AutoDisposeAsyncNotifierProviderElement, _is_AutoDisposeAsyncNotifierProviderElement_default);
  var __AutoDisposeFamilyAsyncNotifier_arg = dart.privateName(async_notifier, "_#AutoDisposeFamilyAsyncNotifier#arg");
  var __AutoDisposeFamilyAsyncNotifier_arg_isSet = dart.privateName(async_notifier, "_#AutoDisposeFamilyAsyncNotifier#arg#isSet");
  const _is_AutoDisposeFamilyAsyncNotifier_default = Symbol('_is_AutoDisposeFamilyAsyncNotifier_default');
  async_notifier.AutoDisposeFamilyAsyncNotifier$ = dart.generic((State, Arg) => {
    class AutoDisposeFamilyAsyncNotifier extends async_notifier.BuildlessAutoDisposeAsyncNotifier$(State) {
      get arg() {
        let t43;
        return this[__AutoDisposeFamilyAsyncNotifier_arg_isSet] ? (t43 = this[__AutoDisposeFamilyAsyncNotifier_arg], t43) : dart.throw(new _internal.LateError.fieldNI("arg"));
      }
      set arg(arg$35param) {
        if (this[__AutoDisposeFamilyAsyncNotifier_arg_isSet])
          dart.throw(new _internal.LateError.fieldAI("arg"));
        else {
          this[__AutoDisposeFamilyAsyncNotifier_arg_isSet] = true;
          this[__AutoDisposeFamilyAsyncNotifier_arg] = arg$35param;
        }
      }
      [_setElement$](element) {
        super[_setElement$](element);
        this.arg = Arg.as(element.origin.argument);
      }
    }
    (AutoDisposeFamilyAsyncNotifier.new = function() {
      this[__AutoDisposeFamilyAsyncNotifier_arg] = null;
      this[__AutoDisposeFamilyAsyncNotifier_arg_isSet] = false;
      AutoDisposeFamilyAsyncNotifier.__proto__.new.call(this);
      ;
    }).prototype = AutoDisposeFamilyAsyncNotifier.prototype;
    dart.addTypeTests(AutoDisposeFamilyAsyncNotifier);
    AutoDisposeFamilyAsyncNotifier.prototype[_is_AutoDisposeFamilyAsyncNotifier_default] = true;
    dart.addTypeCaches(AutoDisposeFamilyAsyncNotifier);
    dart.setGetterSignature(AutoDisposeFamilyAsyncNotifier, () => ({
      __proto__: dart.getGetters(AutoDisposeFamilyAsyncNotifier.__proto__),
      arg: Arg
    }));
    dart.setSetterSignature(AutoDisposeFamilyAsyncNotifier, () => ({
      __proto__: dart.getSetters(AutoDisposeFamilyAsyncNotifier.__proto__),
      arg: Arg
    }));
    dart.setLibraryUri(AutoDisposeFamilyAsyncNotifier, I[14]);
    dart.setFieldSignature(AutoDisposeFamilyAsyncNotifier, () => ({
      __proto__: dart.getFields(AutoDisposeFamilyAsyncNotifier.__proto__),
      [__AutoDisposeFamilyAsyncNotifier_arg]: dart.fieldType(dart.nullable(Arg)),
      [__AutoDisposeFamilyAsyncNotifier_arg_isSet]: dart.fieldType(core.bool)
    }));
    return AutoDisposeFamilyAsyncNotifier;
  });
  async_notifier.AutoDisposeFamilyAsyncNotifier = async_notifier.AutoDisposeFamilyAsyncNotifier$();
  dart.addTypeTests(async_notifier.AutoDisposeFamilyAsyncNotifier, _is_AutoDisposeFamilyAsyncNotifier_default);
  var __AutoDisposeFamilyAsyncNotifierProviderImpl_notifier = dart.privateName(async_notifier, "_#AutoDisposeFamilyAsyncNotifierProviderImpl#notifier");
  var __AutoDisposeFamilyAsyncNotifierProviderImpl_future = dart.privateName(async_notifier, "_#AutoDisposeFamilyAsyncNotifierProviderImpl#future");
  const _is_AutoDisposeFamilyAsyncNotifierProviderImpl_default = Symbol('_is_AutoDisposeFamilyAsyncNotifierProviderImpl_default');
  async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl$ = dart.generic((NotifierT, T, Arg) => {
    var __t$AutoDisposeAsyncNotifierProviderElementOfNotifierT$T = () => (__t$AutoDisposeAsyncNotifierProviderElementOfNotifierT$T = dart.constFn(async_notifier.AutoDisposeAsyncNotifierProviderElement$(NotifierT, T)))();
    var __t$AutoDisposeFamilyAsyncNotifierOfT$Arg = () => (__t$AutoDisposeFamilyAsyncNotifierOfT$Arg = dart.constFn(async_notifier.AutoDisposeFamilyAsyncNotifier$(T, Arg)))();
    const AsyncNotifierProviderBase_AsyncSelector$36 = class AsyncNotifierProviderBase_AsyncSelector extends async_notifier.AsyncNotifierProviderBase$(NotifierT, T) {};
    (AsyncNotifierProviderBase_AsyncSelector$36.new = function(_createNotifier, opts) {
      AsyncNotifierProviderBase_AsyncSelector$36.__proto__.new.call(this, _createNotifier, opts);
    }).prototype = AsyncNotifierProviderBase_AsyncSelector$36.prototype;
    dart.applyMixin(AsyncNotifierProviderBase_AsyncSelector$36, framework.AsyncSelector$(T));
    class AutoDisposeFamilyAsyncNotifierProviderImpl extends AsyncNotifierProviderBase_AsyncSelector$36 {
      static ['_#new#tearOff'](NotifierT, T, Arg, _createNotifier, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl$(NotifierT, T, Arg)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get notifier() {
        let t44, t43;
        t43 = this[__AutoDisposeFamilyAsyncNotifierProviderImpl_notifier];
        return t43 == null ? (t44 = async_notifier._notifier(NotifierT, T, this), this[__AutoDisposeFamilyAsyncNotifierProviderImpl_notifier] == null ? this[__AutoDisposeFamilyAsyncNotifierProviderImpl_notifier] = t44 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t43;
      }
      get future() {
        let t44, t43;
        t43 = this[__AutoDisposeFamilyAsyncNotifierProviderImpl_future];
        return t43 == null ? (t44 = async_notifier._future(T, this), this[__AutoDisposeFamilyAsyncNotifierProviderImpl_future] == null ? this[__AutoDisposeFamilyAsyncNotifierProviderImpl_future] = t44 : dart.throw(new _internal.LateError.fieldADI("future"))) : t43;
      }
      createElement() {
        return new (__t$AutoDisposeAsyncNotifierProviderElementOfNotifierT$T()).__(this);
      }
      runNotifierBuild(notifier) {
        __t$AutoDisposeFamilyAsyncNotifierOfT$Arg().as(notifier);
        return notifier.build(notifier.arg);
      }
    }
    (AutoDisposeFamilyAsyncNotifierProviderImpl.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AutoDisposeFamilyAsyncNotifierProviderImpl_notifier] = null;
      this[__AutoDisposeFamilyAsyncNotifierProviderImpl_future] = null;
      AutoDisposeFamilyAsyncNotifierProviderImpl.__proto__.new.call(this, _createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AutoDisposeFamilyAsyncNotifierProviderImpl.prototype;
    dart.addTypeTests(AutoDisposeFamilyAsyncNotifierProviderImpl);
    AutoDisposeFamilyAsyncNotifierProviderImpl.prototype[_is_AutoDisposeFamilyAsyncNotifierProviderImpl_default] = true;
    dart.addTypeCaches(AutoDisposeFamilyAsyncNotifierProviderImpl);
    dart.setMethodSignature(AutoDisposeFamilyAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getMethods(AutoDisposeFamilyAsyncNotifierProviderImpl.__proto__),
      createElement: dart.fnType(async_notifier.AutoDisposeAsyncNotifierProviderElement$(NotifierT, T), []),
      runNotifierBuild: dart.fnType(async.FutureOr$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AutoDisposeFamilyAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getGetters(AutoDisposeFamilyAsyncNotifierProviderImpl.__proto__),
      notifier: framework.Refreshable$(NotifierT),
      future: framework.Refreshable$(async.Future$(T))
    }));
    dart.setLibraryUri(AutoDisposeFamilyAsyncNotifierProviderImpl, I[14]);
    dart.setFieldSignature(AutoDisposeFamilyAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getFields(AutoDisposeFamilyAsyncNotifierProviderImpl.__proto__),
      [__AutoDisposeFamilyAsyncNotifierProviderImpl_notifier]: dart.fieldType(dart.nullable(framework.Refreshable$(NotifierT))),
      [__AutoDisposeFamilyAsyncNotifierProviderImpl_future]: dart.fieldType(dart.nullable(framework.Refreshable$(async.Future$(T))))
    }));
    return AutoDisposeFamilyAsyncNotifierProviderImpl;
  });
  async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl = async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl$();
  dart.addTypeTests(async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl, _is_AutoDisposeFamilyAsyncNotifierProviderImpl_default);
  const _is_AutoDisposeAsyncNotifierProviderFamily_default = Symbol('_is_AutoDisposeAsyncNotifierProviderFamily_default');
  async_notifier.AutoDisposeAsyncNotifierProviderFamily$ = dart.generic((NotifierT, T, Arg) => {
    class AutoDisposeAsyncNotifierProviderFamily extends framework.AutoDisposeNotifierFamilyBase$(async_notifier.AutoDisposeAsyncNotifierProviderRef$(T), common.AsyncValue$(T), Arg, NotifierT, async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl$(NotifierT, T, Arg)) {
      static ['_#new#tearOff'](NotifierT, T, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (async_notifier.AutoDisposeAsyncNotifierProviderFamily$(NotifierT, T, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AutoDisposeAsyncNotifierProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AutoDisposeAsyncNotifierProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[45] || CT.C45, NotifierT, T, Arg), name: name, dependencies: dependencies});
      ;
    }).prototype = AutoDisposeAsyncNotifierProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeAsyncNotifierProviderFamily);
    AutoDisposeAsyncNotifierProviderFamily.prototype[_is_AutoDisposeAsyncNotifierProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeAsyncNotifierProviderFamily);
    dart.setLibraryUri(AutoDisposeAsyncNotifierProviderFamily, I[14]);
    return AutoDisposeAsyncNotifierProviderFamily;
  });
  async_notifier.AutoDisposeAsyncNotifierProviderFamily = async_notifier.AutoDisposeAsyncNotifierProviderFamily$();
  dart.addTypeTests(async_notifier.AutoDisposeAsyncNotifierProviderFamily, _is_AutoDisposeAsyncNotifierProviderFamily_default);
  var __BuildlessAsyncNotifier__element = dart.privateName(async_notifier, "_#BuildlessAsyncNotifier#_element");
  const _is_BuildlessAsyncNotifier_default = Symbol('_is_BuildlessAsyncNotifier_default');
  async_notifier.BuildlessAsyncNotifier$ = dart.generic(State => {
    var __t$AsyncNotifierBaseOfState = () => (__t$AsyncNotifierBaseOfState = dart.constFn(async_notifier.AsyncNotifierBase$(State)))();
    var __t$AsyncNotifierProviderElementOfAsyncNotifierBaseOfState$State = () => (__t$AsyncNotifierProviderElementOfAsyncNotifierBaseOfState$State = dart.constFn(async_notifier.AsyncNotifierProviderElement$(__t$AsyncNotifierBaseOfState(), State)))();
    class BuildlessAsyncNotifier extends async_notifier.AsyncNotifierBase$(State) {
      get [_element$0]() {
        let t43;
        t43 = this[__BuildlessAsyncNotifier__element];
        return t43 == null ? dart.throw(new _internal.LateError.fieldNI("_element")) : t43;
      }
      set [_element$0](library$32package$58riverpod$47src$47async_notifier$47base$46dart$58$58_element$35param) {
        if (this[__BuildlessAsyncNotifier__element] == null)
          this[__BuildlessAsyncNotifier__element] = library$32package$58riverpod$47src$47async_notifier$47base$46dart$58$58_element$35param;
        else
          dart.throw(new _internal.LateError.fieldAI("_element"));
      }
      [_setElement$](element) {
        this[_element$0] = __t$AsyncNotifierProviderElementOfAsyncNotifierBaseOfState$State().as(element);
      }
      get ref() {
        return this[_element$0];
      }
    }
    (BuildlessAsyncNotifier.new = function() {
      this[__BuildlessAsyncNotifier__element] = null;
      ;
    }).prototype = BuildlessAsyncNotifier.prototype;
    dart.addTypeTests(BuildlessAsyncNotifier);
    BuildlessAsyncNotifier.prototype[_is_BuildlessAsyncNotifier_default] = true;
    dart.addTypeCaches(BuildlessAsyncNotifier);
    dart.setMethodSignature(BuildlessAsyncNotifier, () => ({
      __proto__: dart.getMethods(BuildlessAsyncNotifier.__proto__),
      [_setElement$]: dart.fnType(dart.void, [framework.ProviderElementBase$(common.AsyncValue$(State))])
    }));
    dart.setGetterSignature(BuildlessAsyncNotifier, () => ({
      __proto__: dart.getGetters(BuildlessAsyncNotifier.__proto__),
      [_element$0]: async_notifier.AsyncNotifierProviderElement$(async_notifier.AsyncNotifierBase$(State), State),
      ref: async_notifier.AsyncNotifierProviderRef$(State)
    }));
    dart.setSetterSignature(BuildlessAsyncNotifier, () => ({
      __proto__: dart.getSetters(BuildlessAsyncNotifier.__proto__),
      [_element$0]: async_notifier.AsyncNotifierProviderElement$(async_notifier.AsyncNotifierBase$(State), State)
    }));
    dart.setLibraryUri(BuildlessAsyncNotifier, I[14]);
    dart.setFieldSignature(BuildlessAsyncNotifier, () => ({
      __proto__: dart.getFields(BuildlessAsyncNotifier.__proto__),
      [__BuildlessAsyncNotifier__element]: dart.fieldType(dart.nullable(async_notifier.AsyncNotifierProviderElement$(async_notifier.AsyncNotifierBase$(State), State)))
    }));
    return BuildlessAsyncNotifier;
  });
  async_notifier.BuildlessAsyncNotifier = async_notifier.BuildlessAsyncNotifier$();
  dart.addTypeTests(async_notifier.BuildlessAsyncNotifier, _is_BuildlessAsyncNotifier_default);
  const _is_AsyncNotifier_default = Symbol('_is_AsyncNotifier_default');
  async_notifier.AsyncNotifier$ = dart.generic(State => {
    class AsyncNotifier extends async_notifier.BuildlessAsyncNotifier$(State) {}
    (AsyncNotifier.new = function() {
      AsyncNotifier.__proto__.new.call(this);
      ;
    }).prototype = AsyncNotifier.prototype;
    dart.addTypeTests(AsyncNotifier);
    AsyncNotifier.prototype[_is_AsyncNotifier_default] = true;
    dart.addTypeCaches(AsyncNotifier);
    dart.setLibraryUri(AsyncNotifier, I[14]);
    return AsyncNotifier;
  });
  async_notifier.AsyncNotifier = async_notifier.AsyncNotifier$();
  dart.addTypeTests(async_notifier.AsyncNotifier, _is_AsyncNotifier_default);
  const _is_AsyncNotifierProviderRef_default = Symbol('_is_AsyncNotifierProviderRef_default');
  async_notifier.AsyncNotifierProviderRef$ = dart.generic(T => {
    class AsyncNotifierProviderRef extends core.Object {}
    (AsyncNotifierProviderRef.new = function() {
      ;
    }).prototype = AsyncNotifierProviderRef.prototype;
    dart.addTypeTests(AsyncNotifierProviderRef);
    AsyncNotifierProviderRef.prototype[_is_AsyncNotifierProviderRef_default] = true;
    dart.addTypeCaches(AsyncNotifierProviderRef);
    AsyncNotifierProviderRef[dart.implements] = () => [framework.Ref$(common.AsyncValue$(T))];
    dart.setLibraryUri(AsyncNotifierProviderRef, I[14]);
    return AsyncNotifierProviderRef;
  });
  async_notifier.AsyncNotifierProviderRef = async_notifier.AsyncNotifierProviderRef$();
  dart.addTypeTests(async_notifier.AsyncNotifierProviderRef, _is_AsyncNotifierProviderRef_default);
  var __AsyncNotifierProviderImpl_notifier = dart.privateName(async_notifier, "_#AsyncNotifierProviderImpl#notifier");
  var __AsyncNotifierProviderImpl_future = dart.privateName(async_notifier, "_#AsyncNotifierProviderImpl#future");
  const _is_AsyncNotifierProviderImpl_default = Symbol('_is_AsyncNotifierProviderImpl_default');
  async_notifier.AsyncNotifierProviderImpl$ = dart.generic((NotifierT, T) => {
    var __t$AsyncNotifierProviderElementOfNotifierT$T = () => (__t$AsyncNotifierProviderElementOfNotifierT$T = dart.constFn(async_notifier.AsyncNotifierProviderElement$(NotifierT, T)))();
    var __t$AsyncNotifierBaseOfT = () => (__t$AsyncNotifierBaseOfT = dart.constFn(async_notifier.AsyncNotifierBase$(T)))();
    var __t$AsyncNotifierOfT = () => (__t$AsyncNotifierOfT = dart.constFn(async_notifier.AsyncNotifier$(T)))();
    const AsyncNotifierProviderBase_AlwaysAliveProviderBase$36 = class AsyncNotifierProviderBase_AlwaysAliveProviderBase extends async_notifier.AsyncNotifierProviderBase$(NotifierT, T) {};
    (AsyncNotifierProviderBase_AlwaysAliveProviderBase$36.new = function(_createNotifier, opts) {
      AsyncNotifierProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, _createNotifier, opts);
    }).prototype = AsyncNotifierProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(AsyncNotifierProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(common.AsyncValue$(T)));
    const AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36 = class AsyncNotifierProviderBase_AlwaysAliveAsyncSelector extends AsyncNotifierProviderBase_AlwaysAliveProviderBase$36 {};
    (AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36.new = function(_createNotifier, opts) {
      AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36.__proto__.new.call(this, _createNotifier, opts);
    }).prototype = AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36.prototype;
    dart.applyMixin(AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36, framework.AlwaysAliveAsyncSelector$(T));
    class AsyncNotifierProviderImpl extends AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36 {
      static ['_#new#tearOff'](NotifierT, T, _createNotifier, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (async_notifier.AsyncNotifierProviderImpl$(NotifierT, T)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get notifier() {
        let t44, t43;
        t43 = this[__AsyncNotifierProviderImpl_notifier];
        return t43 == null ? (t44 = async_notifier._notifier(NotifierT, T, this), this[__AsyncNotifierProviderImpl_notifier] == null ? this[__AsyncNotifierProviderImpl_notifier] = t44 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t43;
      }
      get future() {
        let t44, t43;
        t43 = this[__AsyncNotifierProviderImpl_future];
        return t43 == null ? (t44 = async_notifier._future(T, this), this[__AsyncNotifierProviderImpl_future] == null ? this[__AsyncNotifierProviderImpl_future] = t44 : dart.throw(new _internal.LateError.fieldADI("future"))) : t43;
      }
      createElement() {
        return new (__t$AsyncNotifierProviderElementOfNotifierT$T()).__(this);
      }
      runNotifierBuild(notifier) {
        __t$AsyncNotifierBaseOfT().as(notifier);
        return __t$AsyncNotifierOfT().as(notifier).build();
      }
    }
    (AsyncNotifierProviderImpl.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__AsyncNotifierProviderImpl_notifier] = null;
      this[__AsyncNotifierProviderImpl_future] = null;
      AsyncNotifierProviderImpl.__proto__.new.call(this, _createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = AsyncNotifierProviderImpl.prototype;
    dart.addTypeTests(AsyncNotifierProviderImpl);
    AsyncNotifierProviderImpl.prototype[_is_AsyncNotifierProviderImpl_default] = true;
    dart.addTypeCaches(AsyncNotifierProviderImpl);
    dart.setMethodSignature(AsyncNotifierProviderImpl, () => ({
      __proto__: dart.getMethods(AsyncNotifierProviderImpl.__proto__),
      createElement: dart.fnType(async_notifier.AsyncNotifierProviderElement$(NotifierT, T), []),
      runNotifierBuild: dart.fnType(async.FutureOr$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AsyncNotifierProviderImpl, () => ({
      __proto__: dart.getGetters(AsyncNotifierProviderImpl.__proto__),
      notifier: framework.AlwaysAliveRefreshable$(NotifierT),
      future: framework.AlwaysAliveRefreshable$(async.Future$(T))
    }));
    dart.setLibraryUri(AsyncNotifierProviderImpl, I[14]);
    dart.setFieldSignature(AsyncNotifierProviderImpl, () => ({
      __proto__: dart.getFields(AsyncNotifierProviderImpl.__proto__),
      [__AsyncNotifierProviderImpl_notifier]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(NotifierT))),
      [__AsyncNotifierProviderImpl_future]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(async.Future$(T))))
    }));
    dart.setStaticFieldSignature(AsyncNotifierProviderImpl, () => ['autoDispose', 'family']);
    return AsyncNotifierProviderImpl;
  });
  async_notifier.AsyncNotifierProviderImpl = async_notifier.AsyncNotifierProviderImpl$();
  dart.defineLazy(async_notifier.AsyncNotifierProviderImpl, {
    /*async_notifier.AsyncNotifierProviderImpl.autoDispose*/get autoDispose() {
      return C[35] || CT.C35;
    },
    /*async_notifier.AsyncNotifierProviderImpl.family*/get family() {
      return C[36] || CT.C36;
    }
  }, false);
  dart.addTypeTests(async_notifier.AsyncNotifierProviderImpl, _is_AsyncNotifierProviderImpl_default);
  var __FamilyAsyncNotifier_arg = dart.privateName(async_notifier, "_#FamilyAsyncNotifier#arg");
  var __FamilyAsyncNotifier_arg_isSet = dart.privateName(async_notifier, "_#FamilyAsyncNotifier#arg#isSet");
  const _is_FamilyAsyncNotifier_default = Symbol('_is_FamilyAsyncNotifier_default');
  async_notifier.FamilyAsyncNotifier$ = dart.generic((State, Arg) => {
    class FamilyAsyncNotifier extends async_notifier.BuildlessAsyncNotifier$(State) {
      get arg() {
        let t43;
        return this[__FamilyAsyncNotifier_arg_isSet] ? (t43 = this[__FamilyAsyncNotifier_arg], t43) : dart.throw(new _internal.LateError.fieldNI("arg"));
      }
      set arg(arg$35param) {
        if (this[__FamilyAsyncNotifier_arg_isSet])
          dart.throw(new _internal.LateError.fieldAI("arg"));
        else {
          this[__FamilyAsyncNotifier_arg_isSet] = true;
          this[__FamilyAsyncNotifier_arg] = arg$35param;
        }
      }
      [_setElement$](element) {
        super[_setElement$](element);
        this.arg = Arg.as(element.origin.argument);
      }
    }
    (FamilyAsyncNotifier.new = function() {
      this[__FamilyAsyncNotifier_arg] = null;
      this[__FamilyAsyncNotifier_arg_isSet] = false;
      FamilyAsyncNotifier.__proto__.new.call(this);
      ;
    }).prototype = FamilyAsyncNotifier.prototype;
    dart.addTypeTests(FamilyAsyncNotifier);
    FamilyAsyncNotifier.prototype[_is_FamilyAsyncNotifier_default] = true;
    dart.addTypeCaches(FamilyAsyncNotifier);
    dart.setGetterSignature(FamilyAsyncNotifier, () => ({
      __proto__: dart.getGetters(FamilyAsyncNotifier.__proto__),
      arg: Arg
    }));
    dart.setSetterSignature(FamilyAsyncNotifier, () => ({
      __proto__: dart.getSetters(FamilyAsyncNotifier.__proto__),
      arg: Arg
    }));
    dart.setLibraryUri(FamilyAsyncNotifier, I[14]);
    dart.setFieldSignature(FamilyAsyncNotifier, () => ({
      __proto__: dart.getFields(FamilyAsyncNotifier.__proto__),
      [__FamilyAsyncNotifier_arg]: dart.fieldType(dart.nullable(Arg)),
      [__FamilyAsyncNotifier_arg_isSet]: dart.fieldType(core.bool)
    }));
    return FamilyAsyncNotifier;
  });
  async_notifier.FamilyAsyncNotifier = async_notifier.FamilyAsyncNotifier$();
  dart.addTypeTests(async_notifier.FamilyAsyncNotifier, _is_FamilyAsyncNotifier_default);
  var __FamilyAsyncNotifierProviderImpl_notifier = dart.privateName(async_notifier, "_#FamilyAsyncNotifierProviderImpl#notifier");
  var __FamilyAsyncNotifierProviderImpl_future = dart.privateName(async_notifier, "_#FamilyAsyncNotifierProviderImpl#future");
  const _is_FamilyAsyncNotifierProviderImpl_default = Symbol('_is_FamilyAsyncNotifierProviderImpl_default');
  async_notifier.FamilyAsyncNotifierProviderImpl$ = dart.generic((NotifierT, T, Arg) => {
    var __t$AsyncNotifierProviderElementOfNotifierT$T = () => (__t$AsyncNotifierProviderElementOfNotifierT$T = dart.constFn(async_notifier.AsyncNotifierProviderElement$(NotifierT, T)))();
    var __t$FamilyAsyncNotifierOfT$Arg = () => (__t$FamilyAsyncNotifierOfT$Arg = dart.constFn(async_notifier.FamilyAsyncNotifier$(T, Arg)))();
    const AsyncNotifierProviderBase_AlwaysAliveProviderBase$36 = class AsyncNotifierProviderBase_AlwaysAliveProviderBase extends async_notifier.AsyncNotifierProviderBase$(NotifierT, T) {};
    (AsyncNotifierProviderBase_AlwaysAliveProviderBase$36.new = function(_createNotifier, opts) {
      AsyncNotifierProviderBase_AlwaysAliveProviderBase$36.__proto__.new.call(this, _createNotifier, opts);
    }).prototype = AsyncNotifierProviderBase_AlwaysAliveProviderBase$36.prototype;
    dart.applyMixin(AsyncNotifierProviderBase_AlwaysAliveProviderBase$36, framework.AlwaysAliveProviderBase$(common.AsyncValue$(T)));
    const AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36 = class AsyncNotifierProviderBase_AlwaysAliveAsyncSelector extends AsyncNotifierProviderBase_AlwaysAliveProviderBase$36 {};
    (AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36.new = function(_createNotifier, opts) {
      AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36.__proto__.new.call(this, _createNotifier, opts);
    }).prototype = AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36.prototype;
    dart.applyMixin(AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36, framework.AlwaysAliveAsyncSelector$(T));
    class FamilyAsyncNotifierProviderImpl extends AsyncNotifierProviderBase_AlwaysAliveAsyncSelector$36 {
      static ['_#new#tearOff'](NotifierT, T, Arg, _createNotifier, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
        return new (async_notifier.FamilyAsyncNotifierProviderImpl$(NotifierT, T, Arg)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      }
      get notifier() {
        let t44, t43;
        t43 = this[__FamilyAsyncNotifierProviderImpl_notifier];
        return t43 == null ? (t44 = async_notifier._notifier(NotifierT, T, this), this[__FamilyAsyncNotifierProviderImpl_notifier] == null ? this[__FamilyAsyncNotifierProviderImpl_notifier] = t44 : dart.throw(new _internal.LateError.fieldADI("notifier"))) : t43;
      }
      get future() {
        let t44, t43;
        t43 = this[__FamilyAsyncNotifierProviderImpl_future];
        return t43 == null ? (t44 = async_notifier._future(T, this), this[__FamilyAsyncNotifierProviderImpl_future] == null ? this[__FamilyAsyncNotifierProviderImpl_future] = t44 : dart.throw(new _internal.LateError.fieldADI("future"))) : t43;
      }
      createElement() {
        return new (__t$AsyncNotifierProviderElementOfNotifierT$T()).__(this);
      }
      runNotifierBuild(notifier) {
        __t$FamilyAsyncNotifierOfT$Arg().as(notifier);
        return notifier.build(notifier.arg);
      }
    }
    (FamilyAsyncNotifierProviderImpl.new = function(_createNotifier, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
      this[__FamilyAsyncNotifierProviderImpl_notifier] = null;
      this[__FamilyAsyncNotifierProviderImpl_future] = null;
      FamilyAsyncNotifierProviderImpl.__proto__.new.call(this, _createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
      ;
    }).prototype = FamilyAsyncNotifierProviderImpl.prototype;
    dart.addTypeTests(FamilyAsyncNotifierProviderImpl);
    FamilyAsyncNotifierProviderImpl.prototype[_is_FamilyAsyncNotifierProviderImpl_default] = true;
    dart.addTypeCaches(FamilyAsyncNotifierProviderImpl);
    dart.setMethodSignature(FamilyAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getMethods(FamilyAsyncNotifierProviderImpl.__proto__),
      createElement: dart.fnType(async_notifier.AsyncNotifierProviderElement$(NotifierT, T), []),
      runNotifierBuild: dart.fnType(async.FutureOr$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(FamilyAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getGetters(FamilyAsyncNotifierProviderImpl.__proto__),
      notifier: framework.AlwaysAliveRefreshable$(NotifierT),
      future: framework.AlwaysAliveRefreshable$(async.Future$(T))
    }));
    dart.setLibraryUri(FamilyAsyncNotifierProviderImpl, I[14]);
    dart.setFieldSignature(FamilyAsyncNotifierProviderImpl, () => ({
      __proto__: dart.getFields(FamilyAsyncNotifierProviderImpl.__proto__),
      [__FamilyAsyncNotifierProviderImpl_notifier]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(NotifierT))),
      [__FamilyAsyncNotifierProviderImpl_future]: dart.fieldType(dart.nullable(framework.AlwaysAliveRefreshable$(async.Future$(T))))
    }));
    dart.setStaticFieldSignature(FamilyAsyncNotifierProviderImpl, () => ['autoDispose']);
    return FamilyAsyncNotifierProviderImpl;
  });
  async_notifier.FamilyAsyncNotifierProviderImpl = async_notifier.FamilyAsyncNotifierProviderImpl$();
  dart.defineLazy(async_notifier.FamilyAsyncNotifierProviderImpl, {
    /*async_notifier.FamilyAsyncNotifierProviderImpl.autoDispose*/get autoDispose() {
      return C[44] || CT.C44;
    }
  }, false);
  dart.addTypeTests(async_notifier.FamilyAsyncNotifierProviderImpl, _is_FamilyAsyncNotifierProviderImpl_default);
  const _is_AsyncNotifierProviderFamily_default = Symbol('_is_AsyncNotifierProviderFamily_default');
  async_notifier.AsyncNotifierProviderFamily$ = dart.generic((NotifierT, T, Arg) => {
    class AsyncNotifierProviderFamily extends framework.NotifierFamilyBase$(async_notifier.AsyncNotifierProviderRef$(T), common.AsyncValue$(T), Arg, NotifierT, async_notifier.FamilyAsyncNotifierProviderImpl$(NotifierT, T, Arg)) {
      static ['_#new#tearOff'](NotifierT, T, Arg, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (async_notifier.AsyncNotifierProviderFamily$(NotifierT, T, Arg)).new(create, {name: name, dependencies: dependencies});
      }
    }
    (AsyncNotifierProviderFamily.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      AsyncNotifierProviderFamily.__proto__.new.call(this, create, {providerFactory: dart.gbind(C[46] || CT.C46, NotifierT, T, Arg), name: name, dependencies: dependencies});
      ;
    }).prototype = AsyncNotifierProviderFamily.prototype;
    dart.addTypeTests(AsyncNotifierProviderFamily);
    AsyncNotifierProviderFamily.prototype[_is_AsyncNotifierProviderFamily_default] = true;
    dart.addTypeCaches(AsyncNotifierProviderFamily);
    dart.setLibraryUri(AsyncNotifierProviderFamily, I[14]);
    return AsyncNotifierProviderFamily;
  });
  async_notifier.AsyncNotifierProviderFamily = async_notifier.AsyncNotifierProviderFamily$();
  dart.addTypeTests(async_notifier.AsyncNotifierProviderFamily, _is_AsyncNotifierProviderFamily_default);
  async_notifier._notifier = function _notifier$1(NotifierT, T, that) {
    return new (framework.ProviderElementProxy$(common.AsyncValue$(T), NotifierT)).new(that, dart.fn(element => async_notifier.AsyncNotifierProviderElement$(NotifierT, T).as(element)[_notifierNotifier$0], dart.fnType(listenable.ProxyElementValueNotifier$(NotifierT), [framework.ProviderElementBase$(common.AsyncValue$(T))])));
  };
  async_notifier._future = function _future$0(T, that) {
    return new (framework.ProviderElementProxy$(common.AsyncValue$(T), async.Future$(T))).new(that, dart.fn(element => async_notifier.AsyncNotifierProviderElement$(async_notifier.AsyncNotifierBase$(T), T).as(element)[_futureNotifier$0], dart.fnType(listenable.ProxyElementValueNotifier$(async.Future$(T)), [framework.ProviderElementBase$(common.AsyncValue$(T))])));
  };
  async_notifier['_#AutoDisposeAsyncNotifierProvider#new#tearOff'] = function _$35AutoDisposeAsyncNotifierProvider$35new$35tearOff(NotifierT, T, _createNotifier, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let argument = opts && 'argument' in opts ? opts.argument : null;
    let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
    let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
    return new (async_notifier.AutoDisposeAsyncNotifierProviderImpl$(NotifierT, T)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
  };
  async_notifier['_#AutoDisposeFamilyAsyncNotifierProvider#new#tearOff'] = function _$35AutoDisposeFamilyAsyncNotifierProvider$35new$35tearOff(NotifierT, T, Arg, _createNotifier, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let argument = opts && 'argument' in opts ? opts.argument : null;
    let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
    let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
    return new (async_notifier.AutoDisposeFamilyAsyncNotifierProviderImpl$(NotifierT, T, Arg)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
  };
  async_notifier['_#AsyncNotifierProvider#new#tearOff'] = function _$35AsyncNotifierProvider$35new$35tearOff(NotifierT, T, _createNotifier, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let argument = opts && 'argument' in opts ? opts.argument : null;
    let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
    let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
    return new (async_notifier.AsyncNotifierProviderImpl$(NotifierT, T)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
  };
  async_notifier['_#AsyncNotifierFamilyProvider#new#tearOff'] = function _$35AsyncNotifierFamilyProvider$35new$35tearOff(NotifierT, T, Arg, _createNotifier, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let argument = opts && 'argument' in opts ? opts.argument : null;
    let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
    let debugGetCreateSourceHash = opts && 'debugGetCreateSourceHash' in opts ? opts.debugGetCreateSourceHash : null;
    return new (async_notifier.FamilyAsyncNotifierProviderImpl$(NotifierT, T, Arg)).new(_createNotifier, {name: name, from: from, argument: argument, dependencies: dependencies, debugGetCreateSourceHash: debugGetCreateSourceHash});
  };
  dart.trackLibraries("packages/riverpod/src/value_provider.dart", {
    "package:riverpod/src/value_provider.dart": value_provider,
    "package:riverpod/src/state_provider.dart": state_provider,
    "package:riverpod/src/notifier.dart": notifier,
    "package:riverpod/src/listenable.dart": listenable,
    "package:riverpod/src/stream_provider.dart": stream_provider,
    "package:riverpod/src/state_notifier_provider.dart": state_notifier_provider,
    "package:riverpod/src/provider.dart": provider$,
    "package:riverpod/src/future_provider.dart": future_provider,
    "package:riverpod/src/devtool.dart": devtool,
    "package:riverpod/src/framework.dart": framework,
    "package:riverpod/src/common.dart": common,
    "package:riverpod/src/internals.dart": internals,
    "package:riverpod/src/builders.dart": builders,
    "package:riverpod/src/async_notifier.dart": async_notifier
  }, {
    "package:riverpod/src/state_provider.dart": ["state_provider/auto_dispose.dart", "state_provider/base.dart"],
    "package:riverpod/src/notifier.dart": ["notifier/auto_dispose.dart", "notifier/auto_dispose_family.dart", "notifier/base.dart", "notifier/family.dart"],
    "package:riverpod/src/stream_provider.dart": ["stream_provider/auto_dispose.dart", "stream_provider/base.dart"],
    "package:riverpod/src/state_notifier_provider.dart": ["state_notifier_provider/auto_dispose.dart", "state_notifier_provider/base.dart"],
    "package:riverpod/src/provider.dart": ["provider/auto_dispose.dart", "provider/base.dart"],
    "package:riverpod/src/future_provider.dart": ["future_provider/auto_dispose.dart", "future_provider/base.dart"],
    "package:riverpod/src/framework.dart": ["framework/always_alive.dart", "framework/auto_dispose.dart", "framework/async_selector.dart", "framework/provider_base.dart", "framework/element.dart", "framework/container.dart", "framework/family.dart", "framework/listen.dart", "framework/foundation.dart", "framework/proxy_provider_listenable.dart", "framework/ref.dart", "framework/selector.dart", "framework/scheduler.dart"],
    "package:riverpod/src/async_notifier.dart": ["async_notifier/auto_dispose.dart", "async_notifier/auto_dispose_family.dart", "async_notifier/base.dart", "async_notifier/family.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["framework/foundation.dart","framework/provider_base.dart","framework/always_alive.dart","value_provider.dart","framework/element.dart","state_provider.dart","state_provider/base.dart","state_provider/auto_dispose.dart","framework/auto_dispose.dart","framework/family.dart","notifier.dart","notifier/auto_dispose.dart","notifier/base.dart","notifier/auto_dispose_family.dart","notifier/family.dart","listenable.dart","common.dart","stream_provider.dart","stream_provider/base.dart","stream_provider/auto_dispose.dart","framework/async_selector.dart","state_notifier_provider.dart","state_notifier_provider/base.dart","state_notifier_provider/auto_dispose.dart","provider.dart","provider/base.dart","provider/auto_dispose.dart","future_provider.dart","future_provider/base.dart","future_provider/auto_dispose.dart","async_notifier/base.dart","devtool.dart","framework/container.dart","framework/proxy_provider_listenable.dart","framework/ref.dart","framework/selector.dart","framework/scheduler.dart","framework/listen.dart","builders.dart","async_notifier.dart","async_notifier/auto_dispose.dart","async_notifier/auto_dispose_family.dart","async_notifier/family.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/riverpod/src/value_provider.dart.lib.js"}');
  // Exports:
  return {
    src__value_provider: value_provider,
    src__state_provider: state_provider,
    src__notifier: notifier,
    src__listenable: listenable,
    src__stream_provider: stream_provider,
    src__state_notifier_provider: state_notifier_provider,
    src__provider: provider$,
    src__future_provider: future_provider,
    src__devtool: devtool,
    src__framework: framework,
    src__common: common,
    src__internals: internals,
    src__builders: builders,
    src__async_notifier: async_notifier
  };
}));

//# sourceMappingURL=value_provider.dart.lib.js.map
