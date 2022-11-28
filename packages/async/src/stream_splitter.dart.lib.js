define(['dart_sdk', 'packages/async/src/result/release_transformer.dart', 'packages/async/src/future_group.dart'], (function load__packages__async__src__stream_splitter_dart(dart_sdk, packages__async__src__result__release_transformer$46dart, packages__async__src__future_group$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const result = packages__async__src__result__release_transformer$46dart.src__result__result;
  const value = packages__async__src__result__release_transformer$46dart.src__result__value;
  const future_group = packages__async__src__future_group$46dart.src__future_group;
  var stream_splitter = Object.create(dart.library);
  var $clear = dartx.clear;
  var $isEmpty = dartx.isEmpty;
  var $every = dartx.every;
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/async-2.9.0/lib/src/stream_splitter.dart",
    "package:async/src/stream_splitter.dart"
  ];
  var _subscription = dart.privateName(stream_splitter, "_subscription");
  var _buffer = dart.privateName(stream_splitter, "_buffer");
  var _controllers = dart.privateName(stream_splitter, "_controllers");
  var _closeGroup = dart.privateName(stream_splitter, "_closeGroup");
  var _isDone = dart.privateName(stream_splitter, "_isDone");
  var _isClosed = dart.privateName(stream_splitter, "_isClosed");
  var _stream$ = dart.privateName(stream_splitter, "_stream");
  var _onListen = dart.privateName(stream_splitter, "_onListen");
  var _onPause = dart.privateName(stream_splitter, "_onPause");
  var _onResume = dart.privateName(stream_splitter, "_onResume");
  var _onCancel = dart.privateName(stream_splitter, "_onCancel");
  var _cancelSubscription = dart.privateName(stream_splitter, "_cancelSubscription");
  var _onData = dart.privateName(stream_splitter, "_onData");
  var _onError = dart.privateName(stream_splitter, "_onError");
  var _onDone = dart.privateName(stream_splitter, "_onDone");
  const _is_StreamSplitter_default = Symbol('_is_StreamSplitter_default');
  stream_splitter.StreamSplitter$ = dart.generic(T => {
    var __t$ResultOfT = () => (__t$ResultOfT = dart.constFn(result.Result$(T)))();
    var __t$JSArrayOfResultOfT = () => (__t$JSArrayOfResultOfT = dart.constFn(_interceptors.JSArray$(__t$ResultOfT())))();
    var __t$StreamControllerOfT = () => (__t$StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var __t$LinkedHashSetOfStreamControllerOfT = () => (__t$LinkedHashSetOfStreamControllerOfT = dart.constFn(collection.LinkedHashSet$(__t$StreamControllerOfT())))();
    var __t$StreamControllerOfTTobool = () => (__t$StreamControllerOfTTobool = dart.constFn(dart.fnType(core.bool, [__t$StreamControllerOfT()])))();
    var __t$ValueResultOfT = () => (__t$ValueResultOfT = dart.constFn(value.ValueResult$(T)))();
    class StreamSplitter extends core.Object {
      static splitFrom(T, stream, count = null) {
        count == null ? count = 2 : null;
        let splitter = new (stream_splitter.StreamSplitter$(T)).new(stream);
        let streams = core.List$(async.Stream$(T)).generate(count, dart.fn(_ => splitter.split(), dart.fnType(async.Stream$(T), [core.int])));
        splitter.close();
        return streams;
      }
      static ['_#new#tearOff'](T, _stream) {
        return new (stream_splitter.StreamSplitter$(T)).new(_stream);
      }
      split() {
        if (this[_isClosed]) {
          dart.throw(new core.StateError.new("Can't call split() on a closed StreamSplitter."));
        }
        let controller = __t$StreamControllerOfT().new({onListen: dart.bind(this, _onListen), onPause: dart.bind(this, _onPause), onResume: dart.bind(this, _onResume)});
        controller.onCancel = dart.fn(() => this[_onCancel](controller), T$.VoidTovoid());
        for (let result of this[_buffer]) {
          result.addTo(controller);
        }
        if (this[_isDone]) {
          this[_closeGroup].add(controller.close());
        } else {
          this[_controllers].add(controller);
        }
        return controller.stream;
      }
      close() {
        if (this[_isClosed]) return this[_closeGroup].future;
        this[_isClosed] = true;
        this[_buffer][$clear]();
        if (this[_controllers][$isEmpty]) this[_cancelSubscription]();
        return this[_closeGroup].future;
      }
      [_cancelSubscription]() {
        if (!this[_controllers][$isEmpty]) dart.assertFailed(null, I[0], 125, 12, "_controllers.isEmpty");
        if (!this[_isClosed]) dart.assertFailed(null, I[0], 126, 12, "_isClosed");
        let future = null;
        if (this[_subscription] != null) future = dart.nullCheck(this[_subscription]).cancel();
        if (future != null) this[_closeGroup].add(future);
        this[_closeGroup].close();
      }
      [_onListen]() {
        if (this[_isDone]) return;
        if (this[_subscription] != null) {
          dart.nullCheck(this[_subscription]).resume();
        } else {
          this[_subscription] = this[_stream$].listen(dart.bind(this, _onData), {onError: dart.bind(this, _onError), onDone: dart.bind(this, _onDone)});
        }
      }
      [_onPause]() {
        if (!this[_controllers][$every](dart.fn(controller => controller.isPaused, __t$StreamControllerOfTTobool()))) return;
        dart.nullCheck(this[_subscription]).pause();
      }
      [_onResume]() {
        dart.nullCheck(this[_subscription]).resume();
      }
      [_onCancel](controller) {
        this[_controllers].remove(controller);
        if (this[_controllers][$isNotEmpty]) return;
        if (this[_isClosed]) {
          this[_cancelSubscription]();
        } else {
          dart.nullCheck(this[_subscription]).pause();
        }
      }
      [_onData](data) {
        T.as(data);
        if (!this[_isClosed]) this[_buffer][$add](new (__t$ValueResultOfT()).new(data));
        for (let controller of this[_controllers]) {
          controller.add(data);
        }
      }
      [_onError](error, stackTrace) {
        if (!this[_isClosed]) this[_buffer][$add](__t$ResultOfT().error(error, stackTrace));
        for (let controller of this[_controllers]) {
          controller.addError(error, stackTrace);
        }
      }
      [_onDone]() {
        this[_isDone] = true;
        for (let controller of this[_controllers]) {
          this[_closeGroup].add(controller.close());
        }
      }
    }
    (StreamSplitter.new = function(_stream) {
      this[_subscription] = null;
      this[_buffer] = __t$JSArrayOfResultOfT().of([]);
      this[_controllers] = __t$LinkedHashSetOfStreamControllerOfT().new();
      this[_closeGroup] = new future_group.FutureGroup.new();
      this[_isDone] = false;
      this[_isClosed] = false;
      this[_stream$] = _stream;
      ;
    }).prototype = StreamSplitter.prototype;
    dart.addTypeTests(StreamSplitter);
    StreamSplitter.prototype[_is_StreamSplitter_default] = true;
    dart.addTypeCaches(StreamSplitter);
    dart.setMethodSignature(StreamSplitter, () => ({
      __proto__: dart.getMethods(StreamSplitter.__proto__),
      split: dart.fnType(async.Stream$(T), []),
      close: dart.fnType(async.Future, []),
      [_cancelSubscription]: dart.fnType(dart.void, []),
      [_onListen]: dart.fnType(dart.void, []),
      [_onPause]: dart.fnType(dart.void, []),
      [_onResume]: dart.fnType(dart.void, []),
      [_onCancel]: dart.fnType(dart.void, [async.StreamController]),
      [_onData]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [_onError]: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      [_onDone]: dart.fnType(dart.void, [])
    }));
    dart.setStaticMethodSignature(StreamSplitter, () => ['splitFrom']);
    dart.setLibraryUri(StreamSplitter, I[1]);
    dart.setFieldSignature(StreamSplitter, () => ({
      __proto__: dart.getFields(StreamSplitter.__proto__),
      [_stream$]: dart.finalFieldType(async.Stream$(T)),
      [_subscription]: dart.fieldType(dart.nullable(async.StreamSubscription$(T))),
      [_buffer]: dart.finalFieldType(core.List$(result.Result$(T))),
      [_controllers]: dart.finalFieldType(core.Set$(async.StreamController$(T))),
      [_closeGroup]: dart.finalFieldType(future_group.FutureGroup),
      [_isDone]: dart.fieldType(core.bool),
      [_isClosed]: dart.fieldType(core.bool)
    }));
    return StreamSplitter;
  });
  stream_splitter.StreamSplitter = stream_splitter.StreamSplitter$();
  dart.addTypeTests(stream_splitter.StreamSplitter, _is_StreamSplitter_default);
  dart.trackLibraries("packages/async/src/stream_splitter.dart", {
    "package:async/src/stream_splitter.dart": stream_splitter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stream_splitter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BA2DgD,QAAc;AAC/C,QAAX,AAAM,KAAD,WAAL,QAAU,IAAJ;AACF,uBAAW,6CAAkB,MAAM;AACnC,sBAAU,sCAAyB,KAAK,EAAE,QAAC,KAAM,AAAS,QAAD;AAC7C,QAAhB,AAAS,QAAD;AACR,cAAO,QAAO;MAChB;;;;;AAQE,YAAI;AACgE,UAAlE,WAAM,wBAAW;;AAGf,yBAAa,mDACH,qCAAoB,qCAAoB;AACL,QAAjD,AAAW,UAAD,YAAY,cAAM,gBAAU,UAAU;AAEhD,iBAAS,SAAU;AACO,UAAxB,AAAO,MAAD,OAAO,UAAU;;AAGzB,YAAI;AACiC,UAAnC,AAAY,sBAAI,AAAW,UAAD;;AAEE,UAA5B,AAAa,uBAAI,UAAU;;AAG7B,cAAO,AAAW,WAAD;MACnB;;AAYE,YAAI,iBAAW,MAAO,AAAY;AAClB,QAAhB,kBAAY;AAEG,QAAf,AAAQ;AACR,YAAI,AAAa,8BAAS,AAAqB;AAE/C,cAAO,AAAY;MACrB;;AAaE,aAAO,AAAa;AACpB,aAAO;AAEC;AACR,YAAI,6BAAuB,AAAgC,SAAV,AAAE,eAAf;AACpC,YAAI,MAAM,UAAU,AAAY,AAAW,sBAAP,MAAM;AACvB,QAAnB,AAAY;MACd;;AAOE,YAAI,eAAS;AAEb,YAAI;AAIqB,UAAV,AAAE,eAAf;;AAG+D,UAD/D,sBACI,AAAQ,gCAAO,oCAAkB,mCAAkB;;MAE3D;;AAIE,aAAK,AAAa,2BAAM,QAAC,cAAe,AAAW,UAAD,8CAAY;AACxC,QAAT,AAAE,eAAf;MACF;;AAMyB,QAAV,AAAE,eAAf;MACF;kBAQgC;AACC,QAA/B,AAAa,0BAAO,UAAU;AAC9B,YAAI,AAAa,iCAAY;AAE7B,YAAI;AACmB,UAArB;;AAEsB,UAAT,AAAE,eAAf;;MAEJ;gBAKe;;AACb,aAAK,iBAAW,AAAQ,AAAuB,oBAAZ,+BAAM,IAAI;AAC7C,iBAAS,aAAc;AACD,UAApB,AAAW,UAAD,KAAK,IAAI;;MAEvB;iBAGqB,OAAkB;AACrC,aAAK,iBAAW,AAAQ,AAAoC,oBAAzB,sBAAM,KAAK,EAAE,UAAU;AAC1D,iBAAS,aAAc;AACiB,UAAtC,AAAW,UAAD,UAAU,KAAK,EAAE,UAAU;;MAEzC;;AAIgB,QAAd,gBAAU;AACV,iBAAS,aAAc;AACc,UAAnC,AAAY,sBAAI,AAAW,UAAD;;MAE9B;;mCA1IoB;MArCG;MAIjB,gBAAqB;MAOrB,qBAAoC;MAMpC,oBAAc;MAGhB,gBAAU;MAGV,kBAAY;MAcI;;IAAQ","file":"../../../../../../../../../../../packages/async/src/stream_splitter.dart.lib.js"}');
  // Exports:
  return {
    src__stream_splitter: stream_splitter
  };
}));

//# sourceMappingURL=stream_splitter.dart.lib.js.map
