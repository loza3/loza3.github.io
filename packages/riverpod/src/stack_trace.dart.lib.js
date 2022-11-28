define(['dart_sdk', 'packages/stack_trace/src/stack_zone_specification.dart'], (function load__packages__riverpod__src__stack_trace_dart(dart_sdk, packages__stack_trace__src__stack_zone_specification$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const chain$ = packages__stack_trace__src__stack_zone_specification$46dart.src__chain;
  const trace = packages__stack_trace__src__stack_zone_specification$46dart.src__trace;
  const frame = packages__stack_trace__src__stack_zone_specification$46dart.src__frame;
  var stack_trace = Object.create(dart.library);
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfTrace: () => (T.JSArrayOfTrace = dart.constFn(_interceptors.JSArray$(trace.Trace)))(),
    FrameTobool: () => (T.FrameTobool = dart.constFn(dart.fnType(core.bool, [frame.Frame])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  stack_trace.throwErrorWithCombinedStackTrace = function throwErrorWithCombinedStackTrace(error, stackTrace) {
    let chain = new chain$.Chain.new((() => {
      let t0 = T.JSArrayOfTrace().of([trace.Trace.current()]);
      t0[$addAll](chain$.Chain.forTrace(stackTrace).traces);
      return t0;
    })()).foldFrames(dart.fn(frame => frame.package === "riverpod", T.FrameTobool()));
    core.Error.throwWithStackTrace(error, chain);
  };
  dart.trackLibraries("packages/riverpod/src/stack_trace.dart", {
    "package:riverpod/src/stack_trace.dart": stack_trace
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stack_trace.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;2FAM8C,OAAkB;AACxD,gBAAQ,AAGX,qBAHiB;sCACZ;AACwB,kBAArB,sBAAS,UAAU;;qBAChB,QAAC,SAAU,AAAM,AAAQ,KAAT,aAAY;AAEH,IAAjC,+BAAoB,KAAK,EAAE,KAAK;EACxC","file":"../../../../../../../../../../../packages/riverpod/src/stack_trace.dart.lib.js"}');
  // Exports:
  return {
    src__stack_trace: stack_trace
  };
}));

//# sourceMappingURL=stack_trace.dart.lib.js.map
