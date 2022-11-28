define(['dart_sdk'], (function load__packages__riverpod__src__result_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var result = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:riverpod/src/result.dart"];
  const _is_Result_default = Symbol('_is_Result_default');
  result.Result$ = dart.generic(State => {
    class Result extends core.Object {
      static ['_#data#tearOff'](State, state) {
        return new (result.ResultData$(State)).new(state);
      }
      static ['_#error#tearOff'](State, error, stackTrace) {
        return new (result.ResultError$(State)).new(error, stackTrace);
      }
      static guard(State, cb) {
        try {
          return new (result.ResultData$(State)).new(cb());
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (result.ResultError$(State)).new(err, stack);
          } else
            throw e;
        }
      }
    }
    (Result[dart.mixinNew] = function() {
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    dart.addTypeCaches(Result);
    dart.setStaticMethodSignature(Result, () => ['data', 'error', 'guard']);
    dart.setLibraryUri(Result, I[0]);
    dart.setStaticFieldSignature(Result, () => ['_redirecting#']);
    return Result;
  });
  result.Result = result.Result$();
  dart.addTypeTests(result.Result, _is_Result_default);
  var state$ = dart.privateName(result, "ResultData.state");
  const _is_ResultData_default = Symbol('_is_ResultData_default');
  result.ResultData$ = dart.generic(State => {
    var __t$ResultDataOfState = () => (__t$ResultDataOfState = dart.constFn(result.ResultData$(State)))();
    class ResultData extends core.Object {
      get state() {
        return this[state$];
      }
      set state(value) {
        super.state = value;
      }
      static ['_#new#tearOff'](State, state) {
        return new (result.ResultData$(State)).new(state);
      }
      get hasState() {
        return true;
      }
      get stateOrNull() {
        return this.state;
      }
      get requireState() {
        return this.state;
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        return data(this);
      }
      when(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        return data(this.state);
      }
      _equals(other) {
        if (other == null) return false;
        return __t$ResultDataOfState().is(other) && dart.runtimeType(other)._equals(this[$runtimeType]) && dart.equals(other.state, this.state);
      }
      get hashCode() {
        return core.Object.hash(this[$runtimeType], this.state);
      }
    }
    (ResultData.new = function(state) {
      this[state$] = state;
      ;
    }).prototype = ResultData.prototype;
    dart.addTypeTests(ResultData);
    ResultData.prototype[_is_ResultData_default] = true;
    dart.addTypeCaches(ResultData);
    ResultData[dart.implements] = () => [result.Result$(State)];
    dart.setMethodSignature(ResultData, () => ({
      __proto__: dart.getMethods(ResultData.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [result.ResultData$(State)]), error: dart.fnType(R, [result.ResultError$(State)])}], R => [dart.nullable(core.Object)]),
      when: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [State]), error: dart.fnType(R, [core.Object, core.StackTrace])}], R => [dart.nullable(core.Object)]),
      _equals: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$_equals]: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ResultData, () => ({
      __proto__: dart.getGetters(ResultData.__proto__),
      hasState: core.bool,
      stateOrNull: dart.nullable(State),
      requireState: State
    }));
    dart.setLibraryUri(ResultData, I[0]);
    dart.setFieldSignature(ResultData, () => ({
      __proto__: dart.getFields(ResultData.__proto__),
      state: dart.finalFieldType(State)
    }));
    dart.defineExtensionMethods(ResultData, ['_equals']);
    dart.defineExtensionAccessors(ResultData, ['hashCode']);
    return ResultData;
  });
  result.ResultData = result.ResultData$();
  dart.addTypeTests(result.ResultData, _is_ResultData_default);
  var error$ = dart.privateName(result, "ResultError.error");
  var stackTrace$ = dart.privateName(result, "ResultError.stackTrace");
  const _is_ResultError_default = Symbol('_is_ResultError_default');
  result.ResultError$ = dart.generic(State => {
    var __t$ResultErrorOfState = () => (__t$ResultErrorOfState = dart.constFn(result.ResultError$(State)))();
    class ResultError extends core.Object {
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
      static ['_#new#tearOff'](State, error, stackTrace) {
        return new (result.ResultError$(State)).new(error, stackTrace);
      }
      get hasState() {
        return false;
      }
      get stateOrNull() {
        return null;
      }
      get requireState() {
        return core.Error.throwWithStackTrace(this.error, this.stackTrace);
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        return error(this);
      }
      when(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        return error(this.error, this.stackTrace);
      }
      _equals(other) {
        if (other == null) return false;
        return __t$ResultErrorOfState().is(other) && dart.runtimeType(other)._equals(this[$runtimeType]) && other.stackTrace[$_equals](this.stackTrace) && other.error[$_equals](this.error);
      }
      get hashCode() {
        return core.Object.hash(this[$runtimeType], this.error, this.stackTrace);
      }
    }
    (ResultError.new = function(error, stackTrace) {
      this[error$] = error;
      this[stackTrace$] = stackTrace;
      ;
    }).prototype = ResultError.prototype;
    dart.addTypeTests(ResultError);
    ResultError.prototype[_is_ResultError_default] = true;
    dart.addTypeCaches(ResultError);
    ResultError[dart.implements] = () => [result.Result$(State)];
    dart.setMethodSignature(ResultError, () => ({
      __proto__: dart.getMethods(ResultError.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [result.ResultData$(State)]), error: dart.fnType(R, [result.ResultError$(State)])}], R => [dart.nullable(core.Object)]),
      when: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [State]), error: dart.fnType(R, [core.Object, core.StackTrace])}], R => [dart.nullable(core.Object)]),
      _equals: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$_equals]: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ResultError, () => ({
      __proto__: dart.getGetters(ResultError.__proto__),
      hasState: core.bool,
      stateOrNull: dart.nullable(State),
      requireState: State
    }));
    dart.setLibraryUri(ResultError, I[0]);
    dart.setFieldSignature(ResultError, () => ({
      __proto__: dart.getFields(ResultError.__proto__),
      error: dart.finalFieldType(core.Object),
      stackTrace: dart.finalFieldType(core.StackTrace)
    }));
    dart.defineExtensionMethods(ResultError, ['_equals']);
    dart.defineExtensionAccessors(ResultError, ['hashCode']);
    return ResultError;
  });
  result.ResultError = result.ResultError$();
  dart.addTypeTests(result.ResultError, _is_ResultError_default);
  dart.trackLibraries("packages/riverpod/src/result.dart", {
    "package:riverpod/src/result.dart": result
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["result.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;0BAeqD;AACjD;AACE,gBAAc,qCAAK,AAAE,EAAA;;cACd;cAAK;AAAZ;AACA,kBAAc,sCAAM,GAAG,EAAE,KAAK;;;;MAElC;;;;;;;;;;;;;;;;;;;MAsBY;;;;;;;;;;AAGS;MAAI;;AAGC;MAAK;;AAGL;MAAK;;YAIe;YACJ;AAExC,cAAO,AAAI,KAAA,CAAC;MACd;;YAIkC;YACyB;AAEzD,cAAO,AAAI,KAAA,CAAC;MACd;cAGyB;;AACrB,cAAM,AAC2B,4BADjC,KAAK,KACC,AAAY,iBAAlB,KAAK,UAAgB,uBACT,YAAZ,AAAM,KAAD,QAAU;MAAK;;AAGJ,cAAO,kBAAK,oBAAa;MAAM;;;MApCnC;;IAAM;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA2CT;;;;;;MACI;;;;;;;;;;AAGI;MAAK;;AAGA;MAAI;;AAGJ,cAAM,gCAAoB,YAAO;MAAW;;YAIxB;YACJ;AAExC,cAAO,AAAK,MAAA,CAAC;MACf;;YAIkC;YACyB;AAEzD,cAAO,AAAK,MAAA,CAAM,YAAO;MAC3B;cAGyB;;AACrB,cAAM,AAEyB,6BAF/B,KAAK,KACC,AAAY,iBAAlB,KAAK,UAAgB,uBACrB,AAAM,AAAW,KAAZ,sBAAe,oBACpB,AAAM,AAAM,KAAP,iBAAU;MAAK;;AAGJ,cAAO,kBAAK,oBAAa,YAAO;MAAW;;gCAtC9C,OAAY;MAAZ;MAAY;;IAAW","file":"../../../../../../../../../../../packages/riverpod/src/result.dart.lib.js"}');
  // Exports:
  return {
    src__result: result
  };
}));

//# sourceMappingURL=result.dart.lib.js.map
