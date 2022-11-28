define(['dart_sdk'], (function load__packages__async__src__future_group_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var future_group = Object.create(dart.library);
  var $length = dartx.length;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $whereType = dartx.whereType;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    ObjectAndStackTraceToNull: () => (T$.ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:async/src/future_group.dart"];
  var _pending = dart.privateName(future_group, "_pending");
  var _closed = dart.privateName(future_group, "_closed");
  var _completer = dart.privateName(future_group, "_completer");
  var _onIdleController = dart.privateName(future_group, "_onIdleController");
  var _values = dart.privateName(future_group, "_values");
  const _is_FutureGroup_default = Symbol('_is_FutureGroup_default');
  future_group.FutureGroup$ = dart.generic(T => {
    var __t$ListOfT = () => (__t$ListOfT = dart.constFn(core.List$(T)))();
    var __t$CompleterOfListOfT = () => (__t$CompleterOfListOfT = dart.constFn(async.Completer$(__t$ListOfT())))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$JSArrayOfTN = () => (__t$JSArrayOfTN = dart.constFn(_interceptors.JSArray$(__t$TN())))();
    var __t$FutureOfT = () => (__t$FutureOfT = dart.constFn(async.Future$(T)))();
    var __t$TToNull = () => (__t$TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class FutureGroup extends core.Object {
      get isClosed() {
        return this[_closed];
      }
      get future() {
        return this[_completer].future;
      }
      get isIdle() {
        return this[_pending] === 0;
      }
      get onIdle() {
        let t0;
        return (t0 = this[_onIdleController], t0 == null ? this[_onIdleController] = async.StreamController.broadcast({sync: true}) : t0).stream;
      }
      add(task) {
        __t$FutureOfT().as(task);
        if (this[_closed]) dart.throw(new core.StateError.new("The FutureGroup is closed."));
        let index = this[_values][$length];
        this[_values][$add](null);
        this[_pending] = this[_pending] + 1;
        task.then(core.Null, dart.fn(value => {
          if (this[_completer].isCompleted) return null;
          this[_pending] = this[_pending] - 1;
          this[_values][$_set](index, value);
          if (this[_pending] !== 0) return null;
          let onIdleController = this[_onIdleController];
          if (onIdleController != null) onIdleController.add(null);
          if (!this[_closed]) return null;
          if (onIdleController != null) onIdleController.close();
          this[_completer].complete(this[_values][$whereType](T)[$toList]());
        }, __t$TToNull())).catchError(dart.fn((error, stackTrace) => {
          if (this[_completer].isCompleted) return null;
          this[_completer].completeError(error, stackTrace);
        }, T$.ObjectAndStackTraceToNull()));
      }
      close() {
        this[_closed] = true;
        if (this[_pending] !== 0) return;
        if (this[_completer].isCompleted) return;
        this[_completer].complete(this[_values][$whereType](T)[$toList]());
      }
      static ['_#new#tearOff'](T) {
        return new (future_group.FutureGroup$(T)).new();
      }
    }
    (FutureGroup.new = function() {
      this[_pending] = 0;
      this[_closed] = false;
      this[_completer] = __t$CompleterOfListOfT().new();
      this[_onIdleController] = null;
      this[_values] = __t$JSArrayOfTN().of([]);
      ;
    }).prototype = FutureGroup.prototype;
    dart.addTypeTests(FutureGroup);
    FutureGroup.prototype[_is_FutureGroup_default] = true;
    dart.addTypeCaches(FutureGroup);
    FutureGroup[dart.implements] = () => [core.Sink$(async.Future$(T))];
    dart.setMethodSignature(FutureGroup, () => ({
      __proto__: dart.getMethods(FutureGroup.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(FutureGroup, () => ({
      __proto__: dart.getGetters(FutureGroup.__proto__),
      isClosed: core.bool,
      future: async.Future$(core.List$(T)),
      isIdle: core.bool,
      onIdle: async.Stream
    }));
    dart.setLibraryUri(FutureGroup, I[0]);
    dart.setFieldSignature(FutureGroup, () => ({
      __proto__: dart.getFields(FutureGroup.__proto__),
      [_pending]: dart.fieldType(core.int),
      [_closed]: dart.fieldType(core.bool),
      [_completer]: dart.finalFieldType(async.Completer$(core.List$(T))),
      [_onIdleController]: dart.fieldType(dart.nullable(async.StreamController)),
      [_values]: dart.finalFieldType(core.List$(dart.nullable(T)))
    }));
    return FutureGroup;
  });
  future_group.FutureGroup = future_group.FutureGroup$();
  dart.addTypeTests(future_group.FutureGroup, _is_FutureGroup_default);
  dart.trackLibraries("packages/async/src/future_group.dart", {
    "package:async/src/future_group.dart": future_group
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["future_group.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyBuB;MAAO;;AASE,cAAA,AAAW;MAAM;;AAQ5B,cAAA,AAAS,oBAAG;MAAC;;;AAc5B,cAA+D,EAA5C,KAAlB,yBAAkB,aAAlB,0BAAuC,wCAAgB;MAAa;UAYtD;;AACjB,YAAI,eAAS,AAA8C,WAAxC,wBAAW;AAK1B,oBAAQ,AAAQ;AACH,QAAjB,AAAQ,oBAAI;AAEF,QAAV,iBAAA,AAAQ,iBAAA;AAiBN,QAhBF,AAAK,AAaF,IAbC,iBAAM,QAAC;AACT,cAAI,AAAW,8BAAa,MAAO;AAEzB,UAAV,iBAAA,AAAQ,iBAAA;AACc,UAAtB,AAAO,qBAAC,KAAK,EAAI,KAAK;AAEtB,cAAI,mBAAY,GAAG,MAAO;AACtB,iCAAmB;AACvB,cAAI,gBAAgB,UAAU,AAAiB,AAAS,gBAAV,KAAK;AAEnD,eAAK,eAAS,MAAO;AACrB,cAAI,gBAAgB,UAAU,AAAiB,AAAO,gBAAR;AACM,UAApD,AAAW,0BAAS,AAAQ,AAAe;sCAC/B,SAAQ,OAAkB;AACtC,cAAI,AAAW,8BAAa,MAAO;AACQ,UAA3C,AAAW,+BAAc,KAAK,EAAE,UAAU;;MAE9C;;AAMgB,QAAd,gBAAU;AACV,YAAI,mBAAY,GAAG;AACnB,YAAI,AAAW,8BAAa;AACwB,QAApD,AAAW,0BAAS,AAAQ,AAAe;MAC7C;;;;;;MAnFI,iBAAW;MAKX,gBAAU;MAQR,mBAAa;MAuBD;MAMZ,gBAAc;;IA0CtB","file":"../../../../../../../../../../../packages/async/src/future_group.dart.lib.js"}');
  // Exports:
  return {
    src__future_group: future_group
  };
}));

//# sourceMappingURL=future_group.dart.lib.js.map
