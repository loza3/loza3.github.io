define(['dart_sdk', 'packages/http/src/multipart_request.dart', 'packages/async/src/stream_splitter.dart'], (function load__packages__http__retry_dart(dart_sdk, packages__http__src__multipart_request$46dart, packages__async__src__stream_splitter$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base_response = packages__http__src__multipart_request$46dart.src__base_response;
  const streamed_response = packages__http__src__multipart_request$46dart.src__streamed_response;
  const streamed_request = packages__http__src__multipart_request$46dart.src__streamed_request;
  const base_client = packages__http__src__multipart_request$46dart.src__base_client;
  const base_request = packages__http__src__multipart_request$46dart.src__base_request;
  const client = packages__http__src__multipart_request$46dart.src__client;
  const stream_splitter = packages__async__src__stream_splitter$46dart.src__stream_splitter;
  var retry = Object.create(dart.library);
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BaseResponseTobool: () => (T.BaseResponseTobool = dart.constFn(dart.fnType(core.bool, [base_response.BaseResponse])))(),
    ObjectAndStackTraceTobool: () => (T.ObjectAndStackTraceTobool = dart.constFn(dart.fnType(core.bool, [core.Object, core.StackTrace])))(),
    intToDuration: () => (T.intToDuration = dart.constFn(dart.fnType(core.Duration, [core.int])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    StreamSplitterOfListOfint: () => (T.StreamSplitterOfListOfint = dart.constFn(stream_splitter.StreamSplitter$(T.ListOfint())))(),
    ListOfintTovoid: () => (T.ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [T.ListOfint()])))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(retry._defaultWhen, T.BaseResponseTobool());
    },
    get C1() {
      return C[1] = dart.fn(retry._defaultWhenError, T.ObjectAndStackTraceTobool());
    },
    get C2() {
      return C[2] = dart.fn(retry._defaultDelay, T.intToDuration());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:http/retry.dart"];
  var _inner$ = dart.privateName(retry, "_inner");
  var _retries = dart.privateName(retry, "_retries");
  var _when = dart.privateName(retry, "_when");
  var _whenError = dart.privateName(retry, "_whenError");
  var _delay = dart.privateName(retry, "_delay");
  var _onRetry = dart.privateName(retry, "_onRetry");
  var _copyRequest = dart.privateName(retry, "_copyRequest");
  retry.RetryClient = class RetryClient extends base_client.BaseClient {
    static ['_#new#tearOff'](_inner, opts) {
      let retries = opts && 'retries' in opts ? opts.retries : 3;
      let when = opts && 'when' in opts ? opts.when : C[0] || CT.C0;
      let whenError = opts && 'whenError' in opts ? opts.whenError : C[1] || CT.C1;
      let delay = opts && 'delay' in opts ? opts.delay : C[2] || CT.C2;
      let onRetry = opts && 'onRetry' in opts ? opts.onRetry : null;
      return new retry.RetryClient.new(_inner, {retries: retries, when: when, whenError: whenError, delay: delay, onRetry: onRetry});
    }
    static ['_#withDelays#tearOff'](inner, delays, opts) {
      let when = opts && 'when' in opts ? opts.when : C[0] || CT.C0;
      let whenError = opts && 'whenError' in opts ? opts.whenError : C[1] || CT.C1;
      let onRetry = opts && 'onRetry' in opts ? opts.onRetry : null;
      return new retry.RetryClient.withDelays(inner, delays, {when: when, whenError: whenError, onRetry: onRetry});
    }
    static ['_#_withDelays#tearOff'](inner, delays, opts) {
      let when = opts && 'when' in opts ? opts.when : null;
      let whenError = opts && 'whenError' in opts ? opts.whenError : null;
      let onRetry = opts && 'onRetry' in opts ? opts.onRetry : null;
      return new retry.RetryClient._withDelays(inner, delays, {when: when, whenError: whenError, onRetry: onRetry});
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let t2, t1, t1$, t1$0, t1$1;
        let splitter = new (T.StreamSplitterOfListOfint()).new(request.finalize());
        let i = 0;
        for (;;) {
          let response = null;
          try {
            response = (yield this[_inner$].send(this[_copyRequest](request, splitter.split())));
          } catch (e) {
            let error = dart.getThrown(e);
            let stackTrace = dart.stackTrace(e);
            if (core.Object.is(error)) {
              if (i === this[_retries] || !(yield (t1 = error, t2 = stackTrace, this[_whenError](t1, t2)))) dart.rethrow(e);
            } else
              throw e;
          }
          if (response != null) {
            if (i === this[_retries] || !(yield (t1$ = response, this[_when](t1$)))) return response;
            retry._unawaited(response.stream.listen(dart.fn(_ => {
            }, T.ListOfintTovoid())).cancel().catchError(dart.fn(_ => {
            }, T.dynamicToNull())));
          }
          yield T.FutureOfvoid().delayed((t1$0 = i, this[_delay](t1$0)));
          yield (t1$1 = this[_onRetry], t1$1 == null ? null : t1$1(request, response, i));
          i = i + 1;
        }
      }).bind(this));
    }
    [_copyRequest](original, body) {
      let t1;
      let request = (t1 = new streamed_request.StreamedRequest.new(original.method, original.url), (() => {
        t1.contentLength = original.contentLength;
        t1.followRedirects = original.followRedirects;
        t1.headers[$addAll](original.headers);
        t1.maxRedirects = original.maxRedirects;
        t1.persistentConnection = original.persistentConnection;
        return t1;
      })());
      body.listen(T.ListOfintTovoid().as(dart.bind(request.sink, 'add')), {onError: dart.bind(request.sink, 'addError'), onDone: dart.bind(request.sink, 'close'), cancelOnError: true});
      return request;
    }
    close() {
      return this[_inner$].close();
    }
  };
  (retry.RetryClient.new = function(_inner, opts) {
    let retries = opts && 'retries' in opts ? opts.retries : 3;
    let when = opts && 'when' in opts ? opts.when : C[0] || CT.C0;
    let whenError = opts && 'whenError' in opts ? opts.whenError : C[1] || CT.C1;
    let delay = opts && 'delay' in opts ? opts.delay : C[2] || CT.C2;
    let onRetry = opts && 'onRetry' in opts ? opts.onRetry : null;
    this[_inner$] = _inner;
    this[_retries] = retries;
    this[_when] = when;
    this[_whenError] = whenError;
    this[_delay] = delay;
    this[_onRetry] = onRetry;
    core.RangeError.checkNotNegative(this[_retries], "retries");
  }).prototype = retry.RetryClient.prototype;
  (retry.RetryClient.withDelays = function(inner, delays, opts) {
    let when = opts && 'when' in opts ? opts.when : C[0] || CT.C0;
    let whenError = opts && 'whenError' in opts ? opts.whenError : C[1] || CT.C1;
    let onRetry = opts && 'onRetry' in opts ? opts.onRetry : null;
    retry.RetryClient._withDelays.call(this, inner, delays[$toList](), {when: when, whenError: whenError, onRetry: onRetry});
  }).prototype = retry.RetryClient.prototype;
  (retry.RetryClient._withDelays = function(inner, delays, opts) {
    let when = opts && 'when' in opts ? opts.when : null;
    let whenError = opts && 'whenError' in opts ? opts.whenError : null;
    let onRetry = opts && 'onRetry' in opts ? opts.onRetry : null;
    retry.RetryClient.new.call(this, inner, {retries: delays[$length], delay: dart.fn(retryCount => delays[$_get](retryCount), T.intToDuration()), when: when, whenError: whenError, onRetry: onRetry});
  }).prototype = retry.RetryClient.prototype;
  dart.addTypeTests(retry.RetryClient);
  dart.addTypeCaches(retry.RetryClient);
  dart.setMethodSignature(retry.RetryClient, () => ({
    __proto__: dart.getMethods(retry.RetryClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest]),
    [_copyRequest]: dart.fnType(streamed_request.StreamedRequest, [base_request.BaseRequest, async.Stream$(core.List$(core.int))])
  }));
  dart.setLibraryUri(retry.RetryClient, I[0]);
  dart.setFieldSignature(retry.RetryClient, () => ({
    __proto__: dart.getFields(retry.RetryClient.__proto__),
    [_inner$]: dart.finalFieldType(client.Client),
    [_retries]: dart.finalFieldType(core.int),
    [_when]: dart.finalFieldType(dart.fnType(async.FutureOr$(core.bool), [base_response.BaseResponse])),
    [_whenError]: dart.finalFieldType(dart.fnType(async.FutureOr$(core.bool), [core.Object, core.StackTrace])),
    [_delay]: dart.finalFieldType(dart.fnType(core.Duration, [core.int])),
    [_onRetry]: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [base_request.BaseRequest, dart.nullable(base_response.BaseResponse), core.int])))
  }));
  var Duration__duration = dart.privateName(core, "Duration._duration");
  retry._defaultWhen = function _defaultWhen(response) {
    return response.statusCode === 503;
  };
  retry._defaultWhenError = function _defaultWhenError(error, stackTrace) {
    return false;
  };
  retry._defaultDelay = function _defaultDelay(retryCount) {
    return (C[3] || CT.C3)['*'](math.pow(1.5, retryCount));
  };
  retry._unawaited = function _unawaited(f) {
  };
  dart.trackLibraries("packages/http/retry.dart", {
    "package:http/retry.dart": retry
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["retry.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;SAuG4C;AAAb;;AACrB,uBAAW,wCAAe,AAAQ,OAAD;AAEnC,gBAAI;AACR;AACoB;AAClB;AACuE,YAArE,YAAW,MAAM,AAAO,mBAAK,mBAAa,OAAO,EAAE,AAAS,QAAD;;gBACpD;gBAAO;AAAd;AACA,kBAAI,AAAE,CAAD,KAAI,oBAAa,YAAiB,KAAK,OAAE,UAAU,EAA5B,AAAU,4BAAqB,AAAO;;;;AAGpE,cAAI,QAAQ;AACV,gBAAI,AAAE,CAAD,KAAI,oBAAa,aAAY,QAAQ,EAAd,AAAK,oBAAY,MAAO,SAAQ;AAIU,YAAtE,iBAAW,AAAS,AAAO,AAAe,AAAS,QAAhC,eAAe,QAAC;yDAA2B,QAAC;;;AAG5B,UAArC,MAAM,iCAA4B,CAAC,EAAR,AAAM;AACS,UAA1C,6CAAM,OAAU,KAAK,OAAO,EAAE,QAAQ,EAAE,CAAC;AACtC,UAAH,IAAA,AAAC,CAAA;;MAEL;;mBAGyC,UAA4B;;AAC7D,0BAAU,yCAAgB,AAAS,QAAD,SAAS,AAAS,QAAD,OAAzC;AACZ,2BAAgB,AAAS,QAAD;AACxB,6BAAkB,AAAS,QAAD;AAClB,QAAR,oBAAe,AAAS,QAAD;AACvB,0BAAe,AAAS,QAAD;AACvB,kCAAuB,AAAS,QAAD;;;AAKX,MAHxB,AAAK,IAAD,+BAAqB,UAAb,AAAQ,OAAD,0BACO,UAAb,AAAQ,OAAD,4BACK,UAAb,AAAQ,OAAD,gCACA;AAEnB,YAAO,QAAO;IAChB;;AAGgB,YAAA,AAAO;IAAO;;oCAhGvB;QACD;QACkC;QACM;QACV;QAE9B;IANC;IAOQ,iBAAE,OAAO;IACZ,cAAE,IAAI;IACD,mBAAE,SAAS;IACf,eAAE,KAAK;IACL,iBAAE,OAAO;AAC0B,IAArC,iCAAiB,gBAAU;EACxC;2CASS,OACY;QACmB;QACM;QAExC;6CAEE,KAAK,EACL,AAAO,MAAD,oBACA,IAAI,aACC,SAAS,WACX,OAAO;EACjB;4CAGE,OACQ;QACgC;QACM;QACc;qCAE7D,KAAK,YACI,AAAO,MAAD,kBACR,QAAC,cAAe,AAAM,MAAA,QAAC,UAAU,6BAClC,IAAI,aACC,SAAS,WACX,OAAO;EACjB;;;;;;;;;;;;;;;;;;;6CAkDsB;AAAa,UAAA,AAAS,AAAW,SAAZ,gBAAe;EAAG;uDAExC,OAAkB;AAAe;EAAK;+CAEzC;AACvB,UAAkC,sBAAO,SAAI,KAAK,UAAU;EAAC;yCAEnC;EAAI","file":"../../../../../../../../../../packages/http/retry.dart.lib.js"}');
  // Exports:
  return {
    retry: retry
  };
}));

//# sourceMappingURL=retry.dart.lib.js.map
