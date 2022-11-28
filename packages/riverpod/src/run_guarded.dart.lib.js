define(['dart_sdk'], (function load__packages__riverpod__src__run_guarded_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var run_guarded = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  run_guarded.runGuarded = function runGuarded(cb) {
    try {
      cb();
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  run_guarded.runUnaryGuarded = function runUnaryGuarded(T, Res, cb, value) {
    try {
      cb(value);
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  run_guarded.runBinaryGuarded = function runBinaryGuarded(A, B, cb, value, value2) {
    try {
      cb(value, value2);
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  run_guarded.runTernaryGuarded = function runTernaryGuarded(A, B, C, cb, value, value2, value3) {
    try {
      cb(value, value2, value3);
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  run_guarded.runQuaternaryGuarded = function runQuaternaryGuarded(A, B, C, D, cb, value, value2, value3, value4) {
    try {
      cb(value, value2, value3, value4);
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  dart.trackLibraries("packages/riverpod/src/run_guarded.dart", {
    "package:riverpod/src/run_guarded.dart": run_guarded
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["run_guarded.dart"],"names":[],"mappings":";;;;;;;;;;;;+CAMgC;AAC9B;AACM,MAAJ,AAAE,EAAA;;UACK;UAAK;AAAZ;AAC4C,QAAvC,AAAQ,uCAAoB,GAAG,EAAE,KAAK;;;;EAE/C;iEAI6C,IAAM;AACjD;AACW,MAAT,AAAE,EAAA,CAAC,KAAK;;UACD;UAAK;AAAZ;AAC4C,QAAvC,AAAQ,uCAAoB,GAAG,EAAE,KAAK;;;;EAE/C;iEAIgD,IAAM,OAAS;AAC7D;AACmB,MAAjB,AAAE,EAAA,CAAC,KAAK,EAAE,MAAM;;UACT;UAAK;AAAZ;AAC4C,QAAvC,AAAQ,uCAAoB,GAAG,EAAE,KAAK;;;;EAE/C;sEAKyB,IACrB,OACA,QACA;AAEF;AAC2B,MAAzB,AAAE,EAAA,CAAC,KAAK,EAAE,MAAM,EAAE,MAAM;;UACjB;UAAK;AAAZ;AAC4C,QAAvC,AAAQ,uCAAoB,GAAG,EAAE,KAAK;;;;EAE/C;+EAK4B,IACxB,OACA,QACA,QACA;AAEF;AACmC,MAAjC,AAAE,EAAA,CAAC,KAAK,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM;;UACzB;UAAK;AAAZ;AAC4C,QAAvC,AAAQ,uCAAoB,GAAG,EAAE,KAAK;;;;EAE/C","file":"../../../../../../../../../../../packages/riverpod/src/run_guarded.dart.lib.js"}');
  // Exports:
  return {
    src__run_guarded: run_guarded
  };
}));

//# sourceMappingURL=run_guarded.dart.lib.js.map
