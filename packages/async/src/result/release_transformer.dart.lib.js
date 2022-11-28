define(['dart_sdk', 'packages/async/src/stream_sink_transformer/typed.dart'], (function load__packages__async__src__result__release_transformer_dart(dart_sdk, packages__async__src__stream_sink_transformer__typed$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const stream_sink_transformer = packages__async__src__stream_sink_transformer__typed$46dart.src__stream_sink_transformer;
  const stream_transformer_wrapper = packages__async__src__stream_sink_transformer__typed$46dart.src__stream_sink_transformer__stream_transformer_wrapper;
  var release_transformer = Object.create(dart.library);
  var release_sink = Object.create(dart.library);
  var value$ = Object.create(dart.library);
  var error$ = Object.create(dart.library);
  var capture_transformer = Object.create(dart.library);
  var capture_sink = Object.create(dart.library);
  var result$ = Object.create(dart.library);
  var $length = dartx.length;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    EventSinkOfResult: () => (T$.EventSinkOfResult = dart.constFn(async.EventSink$(result$.Result)))(),
    EventSinkToEventSinkOfResult: () => (T$.EventSinkToEventSinkOfResult = dart.constFn(dart.fnType(T$.EventSinkOfResult(), [async.EventSink])))(),
    ObjectAndStackTraceToErrorResult: () => (T$.ObjectAndStackTraceToErrorResult = dart.constFn(dart.fnType(error$.ErrorResult, [core.Object, core.StackTrace])))(),
    CaptureStreamTransformerOfObject: () => (T$.CaptureStreamTransformerOfObject = dart.constFn(capture_transformer.CaptureStreamTransformer$(core.Object)))(),
    ReleaseStreamTransformerOfObject: () => (T$.ReleaseStreamTransformerOfObject = dart.constFn(release_transformer.ReleaseStreamTransformer$(core.Object)))(),
    ResultOfObject: () => (T$.ResultOfObject = dart.constFn(result$.Result$(core.Object)))(),
    StreamTransformerWrapperOfObject$ResultOfObject: () => (T$.StreamTransformerWrapperOfObject$ResultOfObject = dart.constFn(stream_transformer_wrapper.StreamTransformerWrapper$(core.Object, T$.ResultOfObject())))(),
    StreamTransformerWrapperOfResultOfObject$Object: () => (T$.StreamTransformerWrapperOfResultOfObject$Object = dart.constFn(stream_transformer_wrapper.StreamTransformerWrapper$(T$.ResultOfObject(), core.Object)))(),
    FutureOfNever: () => (T$.FutureOfNever = dart.constFn(async.Future$(dart.Never)))(),
    dynamicAnddynamicTodynamic: () => (T$.dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(release_transformer.ReleaseStreamTransformer._createSink, T$.EventSinkToEventSinkOfResult());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: T$.CaptureStreamTransformerOfObject().prototype
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: T$.ReleaseStreamTransformerOfObject().prototype
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: T$.StreamTransformerWrapperOfObject$ResultOfObject().prototype,
        [StreamTransformerWrapper__transformer]: C[1] || CT.C1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: T$.StreamTransformerWrapperOfResultOfObject$Object().prototype,
        [StreamTransformerWrapper__transformer]: C[2] || CT.C2
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "package:async/src/result/result.dart",
    "package:async/src/result/release_transformer.dart",
    "package:async/src/result/release_sink.dart",
    "package:async/src/result/value.dart",
    "package:async/src/result/error.dart",
    "package:async/src/result/capture_transformer.dart",
    "package:async/src/result/capture_sink.dart"
  ];
  const _is_Result_default = Symbol('_is_Result_default');
  var StreamTransformerWrapper__transformer = dart.privateName(stream_transformer_wrapper, "StreamTransformerWrapper._transformer");
  result$.Result$ = dart.generic(T => {
    class Result extends core.Object {
      static new(computation) {
        try {
          return new (value$.ValueResult$(T)).new(computation());
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          if (core.Object.is(e)) {
            return new error$.ErrorResult.new(e, s);
          } else
            throw e$;
        }
      }
      static ['_#new#tearOff'](T, computation) {
        return result$.Result$(T).new(computation);
      }
      static ['_#value#tearOff'](T, value) {
        return new (value$.ValueResult$(T)).new(value);
      }
      static error(error, stackTrace = null) {
        return new error$.ErrorResult.new(error, stackTrace);
      }
      static ['_#error#tearOff'](T, error, stackTrace = null) {
        return result$.Result$(T).error(error, stackTrace);
      }
      static capture(T, future) {
        return future.then(result$.Result$(T), dart.fn(value => new (value$.ValueResult$(T)).new(value), dart.fnType(value$.ValueResult$(T), [T])), {onError: dart.fn((error, stackTrace) => new error$.ErrorResult.new(error, stackTrace), T$.ObjectAndStackTraceToErrorResult())});
      }
      static captureAll(T, elements) {
        let results = _interceptors.JSArray$(dart.nullable(result$.Result$(T))).of([]);
        let pending = 0;
        let completer = null;
        function completer$35get() {
          let t2;
          t2 = completer;
          return t2 == null ? dart.throw(new _internal.LateError.localNI("completer")) : t2;
        }
        dart.fn(completer$35get, dart.fnType(async.Completer$(core.List$(result$.Result$(T))), []));
        function completer$35set(completer$35param) {
          return completer = completer$35param;
        }
        dart.fn(completer$35set, dart.fnType(dart.dynamic, [async.Completer$(core.List$(result$.Result$(T)))]));
        for (let element of elements) {
          if (async.Future$(T).is(element)) {
            let i = results[$length];
            results[$add](null);
            pending = pending + 1;
            result$.Result.capture(T, element).then(core.Null, dart.fn(result => {
              results[$_set](i, result);
              if ((pending = pending - 1) === 0) {
                completer$35get().complete(core.List$(result$.Result$(T)).from(results));
              }
            }, dart.fnType(core.Null, [result$.Result$(T)])));
          } else {
            results[$add](new (value$.ValueResult$(T)).new(element));
          }
        }
        if (pending === 0) {
          return async.Future$(core.List$(result$.Result$(T))).value(core.List$(result$.Result$(T)).from(results));
        }
        completer$35set(async.Completer$(core.List$(result$.Result$(T))).new());
        return completer$35get().future;
      }
      static release(T, future) {
        return future.then(T, dart.fn(result => result.asFuture, dart.fnType(async.Future$(T), [result$.Result$(T)])));
      }
      static captureStream(T, source) {
        return source.transform(result$.Result$(T), new (capture_transformer.CaptureStreamTransformer$(T)).new());
      }
      static releaseStream(T, source) {
        return source.transform(T, new (release_transformer.ReleaseStreamTransformer$(T)).new());
      }
      static releaseSink(T, sink) {
        return new (release_sink.ReleaseSink$(T)).new(sink);
      }
      static captureSink(T, sink) {
        return new (capture_sink.CaptureSink$(T)).new(sink);
      }
      static flatten(T, result) {
        if (result.isValue) return dart.nullCheck(result.asValue).value;
        return dart.nullCheck(result.asError);
      }
      static flattenAll(T, results) {
        let values = _interceptors.JSArray$(T).of([]);
        for (let result of results) {
          if (result.isValue) {
            values[$add](dart.nullCheck(result.asValue).value);
          } else {
            return dart.nullCheck(result.asError);
          }
        }
        return new (value$.ValueResult$(core.List$(T))).new(values);
      }
    }
    (Result[dart.mixinNew] = function() {
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    dart.addTypeCaches(Result);
    dart.setStaticMethodSignature(Result, () => ['new', 'value', 'error', 'capture', 'captureAll', 'release', 'captureStream', 'releaseStream', 'releaseSink', 'captureSink', 'flatten', 'flattenAll']);
    dart.setLibraryUri(Result, I[0]);
    dart.setStaticFieldSignature(Result, () => ['captureStreamTransformer', 'releaseStreamTransformer', 'captureSinkTransformer', 'releaseSinkTransformer', '_redirecting#']);
    return Result;
  });
  result$.Result = result$.Result$();
  dart.defineLazy(result$.Result, {
    /*result$.Result.captureStreamTransformer*/get captureStreamTransformer() {
      return C[1] || CT.C1;
    },
    /*result$.Result.releaseStreamTransformer*/get releaseStreamTransformer() {
      return C[2] || CT.C2;
    },
    /*result$.Result.captureSinkTransformer*/get captureSinkTransformer() {
      return C[3] || CT.C3;
    },
    /*result$.Result.releaseSinkTransformer*/get releaseSinkTransformer() {
      return C[4] || CT.C4;
    }
  }, false);
  dart.addTypeTests(result$.Result, _is_Result_default);
  const _is_ReleaseStreamTransformer_default = Symbol('_is_ReleaseStreamTransformer_default');
  release_transformer.ReleaseStreamTransformer$ = dart.generic(T => {
    var __t$ResultOfT = () => (__t$ResultOfT = dart.constFn(result$.Result$(T)))();
    var __t$StreamOfResultOfT = () => (__t$StreamOfResultOfT = dart.constFn(async.Stream$(__t$ResultOfT())))();
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    class ReleaseStreamTransformer extends async.StreamTransformerBase$(result$.Result$(T), T) {
      static ['_#new#tearOff'](T) {
        return new (release_transformer.ReleaseStreamTransformer$(T)).new();
      }
      bind(source) {
        __t$StreamOfResultOfT().as(source);
        return __t$StreamOfT().eventTransformed(source, C[0] || CT.C0);
      }
      static _createSink(sink) {
        return new release_sink.ReleaseSink.new(sink);
      }
    }
    (ReleaseStreamTransformer.new = function() {
      ReleaseStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ReleaseStreamTransformer.prototype;
    dart.addTypeTests(ReleaseStreamTransformer);
    ReleaseStreamTransformer.prototype[_is_ReleaseStreamTransformer_default] = true;
    dart.addTypeCaches(ReleaseStreamTransformer);
    dart.setMethodSignature(ReleaseStreamTransformer, () => ({
      __proto__: dart.getMethods(ReleaseStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [dart.nullable(core.Object)])
    }));
    dart.setStaticMethodSignature(ReleaseStreamTransformer, () => ['_createSink']);
    dart.setLibraryUri(ReleaseStreamTransformer, I[1]);
    return ReleaseStreamTransformer;
  });
  release_transformer.ReleaseStreamTransformer = release_transformer.ReleaseStreamTransformer$();
  dart.addTypeTests(release_transformer.ReleaseStreamTransformer, _is_ReleaseStreamTransformer_default);
  var _sink$ = dart.privateName(release_sink, "_sink");
  const _is_ReleaseSink_default = Symbol('_is_ReleaseSink_default');
  release_sink.ReleaseSink$ = dart.generic(T => {
    var __t$ResultOfT = () => (__t$ResultOfT = dart.constFn(result$.Result$(T)))();
    class ReleaseSink extends core.Object {
      static ['_#new#tearOff'](T, _sink) {
        return new (release_sink.ReleaseSink$(T)).new(_sink);
      }
      add(result) {
        __t$ResultOfT().as(result);
        result.addTo(this[_sink$]);
      }
      addError(error, stackTrace = null) {
        this[_sink$].addError(error, stackTrace);
      }
      close() {
        this[_sink$].close();
      }
    }
    (ReleaseSink.new = function(_sink) {
      this[_sink$] = _sink;
      ;
    }).prototype = ReleaseSink.prototype;
    dart.addTypeTests(ReleaseSink);
    ReleaseSink.prototype[_is_ReleaseSink_default] = true;
    dart.addTypeCaches(ReleaseSink);
    ReleaseSink[dart.implements] = () => [async.EventSink$(result$.Result$(T))];
    dart.setMethodSignature(ReleaseSink, () => ({
      __proto__: dart.getMethods(ReleaseSink.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addError: dart.fnType(dart.void, [core.Object], [dart.nullable(core.StackTrace)]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ReleaseSink, I[2]);
    dart.setFieldSignature(ReleaseSink, () => ({
      __proto__: dart.getFields(ReleaseSink.__proto__),
      [_sink$]: dart.finalFieldType(async.EventSink$(T))
    }));
    return ReleaseSink;
  });
  release_sink.ReleaseSink = release_sink.ReleaseSink$();
  dart.addTypeTests(release_sink.ReleaseSink, _is_ReleaseSink_default);
  var value$0 = dart.privateName(value$, "ValueResult.value");
  const _is_ValueResult_default = Symbol('_is_ValueResult_default');
  value$.ValueResult$ = dart.generic(T => {
    var __t$CompleterOfT = () => (__t$CompleterOfT = dart.constFn(async.Completer$(T)))();
    var __t$EventSinkOfT = () => (__t$EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    var __t$FutureOfT = () => (__t$FutureOfT = dart.constFn(async.Future$(T)))();
    class ValueResult extends core.Object {
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      get isValue() {
        return true;
      }
      get isError() {
        return false;
      }
      get asValue() {
        return this;
      }
      get asError() {
        return null;
      }
      static ['_#new#tearOff'](T, value) {
        return new (value$.ValueResult$(T)).new(value);
      }
      complete(completer) {
        __t$CompleterOfT().as(completer);
        completer.complete(this.value);
      }
      addTo(sink) {
        __t$EventSinkOfT().as(sink);
        sink.add(this.value);
      }
      get asFuture() {
        return __t$FutureOfT().value(this.value);
      }
      get hashCode() {
        return (dart.hashCode(this.value) ^ 842997089) >>> 0;
      }
      _equals(other) {
        if (other == null) return false;
        return value$.ValueResult.is(other) && dart.equals(this.value, other.value);
      }
    }
    (ValueResult.new = function(value) {
      this[value$0] = value;
      ;
    }).prototype = ValueResult.prototype;
    dart.addTypeTests(ValueResult);
    ValueResult.prototype[_is_ValueResult_default] = true;
    dart.addTypeCaches(ValueResult);
    ValueResult[dart.implements] = () => [result$.Result$(T)];
    dart.setMethodSignature(ValueResult, () => ({
      __proto__: dart.getMethods(ValueResult.__proto__),
      complete: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addTo: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ValueResult, () => ({
      __proto__: dart.getGetters(ValueResult.__proto__),
      isValue: core.bool,
      isError: core.bool,
      asValue: value$.ValueResult$(T),
      asError: dart.nullable(error$.ErrorResult),
      asFuture: async.Future$(T)
    }));
    dart.setLibraryUri(ValueResult, I[3]);
    dart.setFieldSignature(ValueResult, () => ({
      __proto__: dart.getFields(ValueResult.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueResult, ['_equals']);
    dart.defineExtensionAccessors(ValueResult, ['hashCode']);
    return ValueResult;
  });
  value$.ValueResult = value$.ValueResult$();
  dart.addTypeTests(value$.ValueResult, _is_ValueResult_default);
  var error$0 = dart.privateName(error$, "ErrorResult.error");
  var stackTrace$ = dart.privateName(error$, "ErrorResult.stackTrace");
  error$.ErrorResult = class ErrorResult extends core.Object {
    get error() {
      return this[error$0];
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
    get isValue() {
      return false;
    }
    get isError() {
      return true;
    }
    get asValue() {
      return null;
    }
    get asError() {
      return this;
    }
    static ['_#new#tearOff'](error, stackTrace = null) {
      return new error$.ErrorResult.new(error, stackTrace);
    }
    complete(completer) {
      async.Completer.as(completer);
      completer.completeError(this.error, this.stackTrace);
    }
    addTo(sink) {
      async.EventSink.as(sink);
      sink.addError(this.error, this.stackTrace);
    }
    get asFuture() {
      return T$.FutureOfNever().error(this.error, this.stackTrace);
    }
    handle(errorHandler) {
      if (T$.dynamicAnddynamicTodynamic().is(errorHandler)) {
        errorHandler(this.error, this.stackTrace);
      } else {
        dart.dcall(errorHandler, [this.error]);
      }
    }
    get hashCode() {
      return (this.error[$hashCode] ^ this.stackTrace[$hashCode] ^ 492929599) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return error$.ErrorResult.is(other) && this.error[$_equals](other.error) && this.stackTrace[$_equals](other.stackTrace);
    }
  };
  (error$.ErrorResult.new = function(error, stackTrace = null) {
    let t4;
    this[error$0] = error;
    this[stackTrace$] = (t4 = stackTrace, t4 == null ? async.AsyncError.defaultStackTrace(error) : t4);
    ;
  }).prototype = error$.ErrorResult.prototype;
  dart.addTypeTests(error$.ErrorResult);
  dart.addTypeCaches(error$.ErrorResult);
  error$.ErrorResult[dart.implements] = () => [result$.Result$(dart.Never)];
  dart.setMethodSignature(error$.ErrorResult, () => ({
    __proto__: dart.getMethods(error$.ErrorResult.__proto__),
    complete: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    addTo: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    handle: dart.fnType(dart.void, [core.Function])
  }));
  dart.setGetterSignature(error$.ErrorResult, () => ({
    __proto__: dart.getGetters(error$.ErrorResult.__proto__),
    isValue: core.bool,
    isError: core.bool,
    asValue: dart.nullable(value$.ValueResult$(dart.Never)),
    asError: error$.ErrorResult,
    asFuture: async.Future$(dart.Never)
  }));
  dart.setLibraryUri(error$.ErrorResult, I[4]);
  dart.setFieldSignature(error$.ErrorResult, () => ({
    __proto__: dart.getFields(error$.ErrorResult.__proto__),
    error: dart.finalFieldType(core.Object),
    stackTrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(error$.ErrorResult, ['_equals']);
  dart.defineExtensionAccessors(error$.ErrorResult, ['hashCode']);
  const _is_CaptureStreamTransformer_default = Symbol('_is_CaptureStreamTransformer_default');
  capture_transformer.CaptureStreamTransformer$ = dart.generic(T => {
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    var __t$ResultOfT = () => (__t$ResultOfT = dart.constFn(result$.Result$(T)))();
    var __t$StreamOfResultOfT = () => (__t$StreamOfResultOfT = dart.constFn(async.Stream$(__t$ResultOfT())))();
    var __t$CaptureSinkOfT = () => (__t$CaptureSinkOfT = dart.constFn(capture_sink.CaptureSink$(T)))();
    var __t$EventSinkOfResultOfT = () => (__t$EventSinkOfResultOfT = dart.constFn(async.EventSink$(__t$ResultOfT())))();
    var __t$EventSinkOfResultOfTToCaptureSinkOfT = () => (__t$EventSinkOfResultOfTToCaptureSinkOfT = dart.constFn(dart.fnType(__t$CaptureSinkOfT(), [__t$EventSinkOfResultOfT()])))();
    class CaptureStreamTransformer extends async.StreamTransformerBase$(T, result$.Result$(T)) {
      static ['_#new#tearOff'](T) {
        return new (capture_transformer.CaptureStreamTransformer$(T)).new();
      }
      bind(source) {
        __t$StreamOfT().as(source);
        return __t$StreamOfResultOfT().eventTransformed(source, dart.fn(sink => new (__t$CaptureSinkOfT()).new(sink), __t$EventSinkOfResultOfTToCaptureSinkOfT()));
      }
    }
    (CaptureStreamTransformer.new = function() {
      CaptureStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = CaptureStreamTransformer.prototype;
    dart.addTypeTests(CaptureStreamTransformer);
    CaptureStreamTransformer.prototype[_is_CaptureStreamTransformer_default] = true;
    dart.addTypeCaches(CaptureStreamTransformer);
    dart.setMethodSignature(CaptureStreamTransformer, () => ({
      __proto__: dart.getMethods(CaptureStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(result$.Result$(T)), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(CaptureStreamTransformer, I[5]);
    return CaptureStreamTransformer;
  });
  capture_transformer.CaptureStreamTransformer = capture_transformer.CaptureStreamTransformer$();
  dart.addTypeTests(capture_transformer.CaptureStreamTransformer, _is_CaptureStreamTransformer_default);
  var _sink = dart.privateName(capture_sink, "_sink");
  const _is_CaptureSink_default = Symbol('_is_CaptureSink_default');
  capture_sink.CaptureSink$ = dart.generic(T => {
    var __t$ValueResultOfT = () => (__t$ValueResultOfT = dart.constFn(value$.ValueResult$(T)))();
    var __t$ResultOfT = () => (__t$ResultOfT = dart.constFn(result$.Result$(T)))();
    class CaptureSink extends core.Object {
      static ['_#new#tearOff'](T, sink) {
        return new (capture_sink.CaptureSink$(T)).new(sink);
      }
      add(value) {
        T.as(value);
        this[_sink].add(new (__t$ValueResultOfT()).new(value));
      }
      addError(error, stackTrace = null) {
        this[_sink].add(__t$ResultOfT().error(error, stackTrace));
      }
      close() {
        this[_sink].close();
      }
    }
    (CaptureSink.new = function(sink) {
      this[_sink] = sink;
      ;
    }).prototype = CaptureSink.prototype;
    dart.addTypeTests(CaptureSink);
    CaptureSink.prototype[_is_CaptureSink_default] = true;
    dart.addTypeCaches(CaptureSink);
    CaptureSink[dart.implements] = () => [async.EventSink$(T)];
    dart.setMethodSignature(CaptureSink, () => ({
      __proto__: dart.getMethods(CaptureSink.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addError: dart.fnType(dart.void, [core.Object], [dart.nullable(core.StackTrace)]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(CaptureSink, I[6]);
    dart.setFieldSignature(CaptureSink, () => ({
      __proto__: dart.getFields(CaptureSink.__proto__),
      [_sink]: dart.finalFieldType(async.EventSink$(result$.Result$(T)))
    }));
    return CaptureSink;
  });
  capture_sink.CaptureSink = capture_sink.CaptureSink$();
  dart.addTypeTests(capture_sink.CaptureSink, _is_CaptureSink_default);
  dart.trackLibraries("packages/async/src/result/release_transformer.dart", {
    "package:async/src/result/release_transformer.dart": release_transformer,
    "package:async/src/result/release_sink.dart": release_sink,
    "package:async/src/result/value.dart": value$,
    "package:async/src/result/error.dart": error$,
    "package:async/src/result/capture_transformer.dart": capture_transformer,
    "package:async/src/result/capture_sink.dart": capture_sink,
    "package:async/src/result/result.dart": result$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["result.dart","release_transformer.dart","release_sink.dart","value.dart","error.dart","capture_transformer.dart","capture_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBA8D8B;AAC1B;AACE,gBAAO,kCAAe,AAAW,WAAA;;cAChB;cAAG;AAApB;AACA,kBAAO,4BAAY,CAAC,EAAE,CAAC;;;;MAE3B;;;;;;;mBAU4B,OAAoB;AAC5C,0CAAY,KAAK,EAAE,UAAU;MAAC;;;;wBAMY;AAC5C,cAAO,AAAO,OAAD,0BAAM,QAAC,SAAU,iCAAY,KAAK,wDAClC,SAAQ,OAAkB,eAC/B,2BAAY,KAAK,EAAE,UAAU;MACvC;2BASmE;AAC7D,sBAAsB;AACtB,sBAAU;AACkB;;;;;;;;;;;AAChC,iBAAS,UAAW,SAAQ;AAC1B,cAAY,oBAAR,OAAO;AACL,oBAAI,AAAQ,OAAD;AACE,YAAjB,AAAQ,OAAD,OAAK;AACH,YAAT,UAAA,AAAO,OAAA;AAML,YALK,AAAoB,0BAAT,OAAO,kBAAO,QAAC;AACZ,cAAnB,AAAO,OAAA,QAAC,CAAC,EAAI,MAAM;AACnB,kBAAc,CAAR,UAAF,AAAE,OAAO,GAAT,OAAa;AACuB,gBAAtC,AAAU,2BAAc,oCAAK,OAAO;;;;AAIH,YAArC,AAAQ,OAAD,OAAK,iCAAgB,OAAO;;;AAGvC,YAAI,AAAQ,OAAD,KAAI;AACb,gBAAc,qDAAW,oCAAK,OAAO;;AAEC,QAAxC,gBAAY;AACZ,cAAO,AAAU;MACnB;wBAS8C;AAC1C,cAAA,AAAO,OAAD,SAAS,QAAC,UAAW,AAAO,MAAD;MAAU;8BAMK;AAChD,cAAA,AAAO,OAAD,+BAAW;MAA8B;8BAOC;AAChD,cAAA,AAAO,OAAD,cAAW;MAA8B;4BAOK;AACpD,sDAAe,IAAI;MAAC;4BASgC;AACpD,sDAAe,IAAI;MAAC;wBAQsB;AAC5C,YAAI,AAAO,MAAD,UAAU,MAAqB,AAAE,gBAAhB,AAAO,MAAD;AACjC,cAAqB,gBAAd,AAAO,MAAD;MACf;2BAMyD;AACnD,qBAAY;AAChB,iBAAS,SAAU,QAAO;AACxB,cAAI,AAAO,MAAD;AACyB,YAAjC,AAAO,MAAD,OAAmB,AAAE,eAAhB,AAAO,MAAD;;AAEjB,kBAAqB,gBAAd,AAAO,MAAD;;;AAGjB,cAAO,8CAAsB,MAAM;MACrC;;;;;;;;;;;;;;MAlKI,uCAAwB;;;MAOxB,uCAAwB;;;MAOxB,qCAAsB;;;MAStB,qCAAsB;;;;;;;;;;;;;;WCvCO;;AAC/B,cAAO,kCAA2B,MAAM;MAC1C;yBAG+C;AAAS,gDAAY,IAAI;MAAC;;;AARnE;;IAA0B;;;;;;;;;;;;;;;;;;;;;;UCIb;;AACE,QAAnB,AAAO,MAAD,OAAO;MACf;eAGqB,OAAoB;AAGN,QAAjC,AAAM,sBAAS,KAAK,EAAE,UAAU;MAClC;;AAIe,QAAb,AAAM;MACR;;;MAjBiB;;IAAM;;;;;;;;;;;;;;;;;;;;;;;;;;;MCAf;;;;;;;AAGY;MAAI;;AAEJ;MAAK;;AAEK;MAAI;;AAEN;MAAI;;;;eAKL;;AACA,QAAzB,AAAU,SAAD,UAAU;MACrB;YAGwB;;AACP,QAAf,AAAK,IAAD,KAAK;MACX;;AAG0B,cAAO,uBAAM;MAAM;;AAGzB,cAAe,EAAT,cAAN,cAAiB;MAAU;cAGvB;;AACpB,cAAM,AAAe,uBAArB,KAAK,KAAyB,YAAN,YAAS,AAAM,KAAD;MAAM;;;MApB/B;;IAAM;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICXV;;;;;;IAGI;;;;;;;AAGG;IAAK;;AAEL;IAAI;;AAEW;IAAI;;AAEZ;IAAI;;;;aAMP;;AACoB,MAA1C,AAAU,SAAD,eAAe,YAAO;IACjC;UAGqB;;AACa,MAAhC,AAAK,IAAD,UAAU,YAAO;IACvB;;AAG8B,sCAAoB,YAAO;IAAW;WAQ/C;AACnB,UAAiB,mCAAb,YAAY;AACiB,QAA/B,AAAY,YAAA,CAAC,YAAO;;AAED,QAAP,WAAZ,YAAY,GAAC;;IAEjB;;AAGoB,YAAqC,EAArC,AAAM,AAAS,wBAAE,AAAW,6BAAW;IAAU;YAI7C;;AACpB,YAAM,AACe,uBADrB,KAAK,KACL,AAAM,qBAAG,AAAM,KAAD,WACd,AAAW,0BAAG,AAAM,KAAD;IAAW;;qCAtCjB,OAAoB;;IAApB;IACA,qBAAa,KAAX,UAAU,EAAV,aAAyB,mCAAkB,KAAK;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;WCVnC;;AAC7B,wDACI,MAAM,EAAE,QAAC,QAAS,+BAAe,IAAI;MAAE;;;AALzC;;IAA0B;;;;;;;;;;;;;;;;;;;;;;UCCrB;;AACwB,QAAjC,AAAM,gBAAI,+BAAgB,KAAK;MACjC;eAGqB,OAAoB;AACG,QAA1C,AAAM,gBAAW,sBAAM,KAAK,EAAE,UAAU;MAC1C;;AAIe,QAAb,AAAM;MACR;;gCAfiC;MAAc,cAAE,IAAI","file":"../../../../../../../../../../../../packages/async/src/result/release_transformer.dart.lib.js"}');
  // Exports:
  return {
    src__result__release_transformer: release_transformer,
    src__result__release_sink: release_sink,
    src__result__value: value$,
    src__result__error: error$,
    src__result__capture_transformer: capture_transformer,
    src__result__capture_sink: capture_sink,
    src__result__result: result$
  };
}));

//# sourceMappingURL=release_transformer.dart.lib.js.map
