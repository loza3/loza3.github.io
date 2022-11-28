define(['dart_sdk'], (function load__packages__async__src__delegate__stream_sink_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var stream_sink = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:async/src/delegate/stream_sink.dart"];
  var _sink$ = dart.privateName(stream_sink, "_sink");
  const _is_DelegatingStreamSink_default = Symbol('_is_DelegatingStreamSink_default');
  stream_sink.DelegatingStreamSink$ = dart.generic(T => {
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelegatingStreamSink extends core.Object {
      get done() {
        return this[_sink$].done;
      }
      static ['_#new#tearOff'](T, sink) {
        return new (stream_sink.DelegatingStreamSink$(T)).new(sink);
      }
      static ['_#_#tearOff'](T, _sink) {
        return new (stream_sink.DelegatingStreamSink$(T)).__(_sink);
      }
      static typed(T, sink) {
        return async.StreamSink$(T).is(sink) ? sink : new (stream_sink.DelegatingStreamSink$(T)).__(sink);
      }
      add(data) {
        T.as(data);
        this[_sink$].add(data);
      }
      addError(error, stackTrace = null) {
        this[_sink$].addError(error, stackTrace);
      }
      addStream(stream) {
        __t$StreamOfT().as(stream);
        return this[_sink$].addStream(stream);
      }
      close() {
        return this[_sink$].close();
      }
    }
    (DelegatingStreamSink.new = function(sink) {
      this[_sink$] = sink;
      ;
    }).prototype = DelegatingStreamSink.prototype;
    (DelegatingStreamSink.__ = function(_sink) {
      this[_sink$] = _sink;
      ;
    }).prototype = DelegatingStreamSink.prototype;
    dart.addTypeTests(DelegatingStreamSink);
    DelegatingStreamSink.prototype[_is_DelegatingStreamSink_default] = true;
    dart.addTypeCaches(DelegatingStreamSink);
    DelegatingStreamSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getMethods(DelegatingStreamSink.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addError: dart.fnType(dart.void, [core.Object], [dart.nullable(core.StackTrace)]),
      addStream: dart.fnType(async.Future, [dart.nullable(core.Object)]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setStaticMethodSignature(DelegatingStreamSink, () => ['typed']);
    dart.setGetterSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getGetters(DelegatingStreamSink.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(DelegatingStreamSink, I[0]);
    dart.setFieldSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getFields(DelegatingStreamSink.__proto__),
      [_sink$]: dart.finalFieldType(async.StreamSink)
    }));
    return DelegatingStreamSink;
  });
  stream_sink.DelegatingStreamSink = stream_sink.DelegatingStreamSink$();
  dart.addTypeTests(stream_sink.DelegatingStreamSink, _is_DelegatingStreamSink_default);
  dart.trackLibraries("packages/async/src/delegate/stream_sink.dart", {
    "package:async/src/delegate/stream_sink.dart": stream_sink
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stream_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AAcqB,cAAA,AAAM;MAAI;;;;;;;sBAeY;AACrC,cAAK,yBAAL,IAAI,IAAoB,IAAI,GAAwB,8CAAE,IAAI;MAAC;UAGpD;;AACM,QAAf,AAAM,iBAAI,IAAI;MAChB;eAGc,OAAoB;AACC,QAAjC,AAAM,sBAAS,KAAK,EAAE,UAAU;MAClC;gBAG2B;;AAAW,cAAA,AAAM,wBAAU,MAAM;MAAC;;AAG3C,cAAA,AAAM;MAAO;;yCA7BI;MAAc,eAAE,IAAI;;;;MAE3B;;IAAM","file":"../../../../../../../../../../../../packages/async/src/delegate/stream_sink.dart.lib.js"}');
  // Exports:
  return {
    src__delegate__stream_sink: stream_sink
  };
}));

//# sourceMappingURL=stream_sink.dart.lib.js.map
