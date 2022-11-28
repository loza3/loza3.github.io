define(['dart_sdk', 'packages/lottie/src/utils/mean_calculator.dart', 'packages/flutter/src/foundation/print.dart', 'packages/lottie/src/utils/pair.dart'], (function load__packages__lottie__src__performance_tracker_dart(dart_sdk, packages__lottie__src__utils__mean_calculator$46dart, packages__flutter__src__foundation__print$46dart, packages__lottie__src__utils__pair$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mean_calculator = packages__lottie__src__utils__mean_calculator$46dart.src__utils__mean_calculator;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const pair = packages__lottie__src__utils__pair$46dart.src__utils__pair;
  var performance_tracker = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $clear = dartx.clear;
  var $entries = dartx.entries;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $compareTo = dartx.compareTo;
  var $sort = dartx.sort;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LinkedHashSetOfFrameListener: () => (T.LinkedHashSetOfFrameListener = dart.constFn(collection.LinkedHashSet$(performance_tracker.FrameListener)))(),
    IdentityMapOfString$MeanCalculator: () => (T.IdentityMapOfString$MeanCalculator = dart.constFn(_js_helper.IdentityMap$(core.String, mean_calculator.MeanCalculator)))(),
    PairOfString$double: () => (T.PairOfString$double = dart.constFn(pair.Pair$(core.String, core.double)))(),
    JSArrayOfPairOfString$double: () => (T.JSArrayOfPairOfString$double = dart.constFn(_interceptors.JSArray$(T.PairOfString$double())))(),
    MapEntryOfString$MeanCalculator: () => (T.MapEntryOfString$MeanCalculator = dart.constFn(core.MapEntry$(core.String, mean_calculator.MeanCalculator)))(),
    MapEntryOfString$MeanCalculatorToPairOfString$double: () => (T.MapEntryOfString$MeanCalculatorToPairOfString$double = dart.constFn(dart.fnType(T.PairOfString$double(), [T.MapEntryOfString$MeanCalculator()])))(),
    PairOfString$doubleAndPairOfString$doubleToint: () => (T.PairOfString$doubleAndPairOfString$doubleToint = dart.constFn(dart.fnType(core.int, [T.PairOfString$double(), T.PairOfString$double()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/performance_tracker.dart"];
  var enabled = dart.privateName(performance_tracker, "PerformanceTracker.enabled");
  var _frameListeners = dart.privateName(performance_tracker, "_frameListeners");
  var _layerRenderTimes = dart.privateName(performance_tracker, "_layerRenderTimes");
  performance_tracker.PerformanceTracker = class PerformanceTracker extends core.Object {
    get enabled() {
      return this[enabled];
    }
    set enabled(value) {
      this[enabled] = value;
    }
    recordRenderTime(layerName, millis) {
      if (!this.enabled) return;
      if (!this[_layerRenderTimes][$containsKey](layerName)) {
        this[_layerRenderTimes][$_set](layerName, new mean_calculator.MeanCalculator.new());
      }
      let calculator = dart.nullCheck(this[_layerRenderTimes][$_get](layerName));
      calculator.add(millis);
      if (layerName === "__container") {
        for (let listener of this[_frameListeners]) {
          listener.onFrameRendered(millis);
        }
      }
    }
    addFrameListener(listener) {
      this[_frameListeners].add(listener);
    }
    removeFrameListener(listener) {
      this[_frameListeners].remove(listener);
    }
    clearRenderTimes() {
      this[_layerRenderTimes][$clear]();
    }
    logRenderTimes() {
      if (!this.enabled) return;
      let sortedRenderTimes = this.getSortedRenderTimes();
      print.debugPrint("[Lottie] Render Times:");
      for (let layer of sortedRenderTimes) {
        print.debugPrint("[Lottie]\t\t" + layer.first + ": " + dart.str(layer.second) + "ms");
      }
    }
    getSortedRenderTimes() {
      if (!this.enabled) return T.JSArrayOfPairOfString$double().of([]);
      let sortedRenderTimes = this[_layerRenderTimes][$entries][$map](T.PairOfString$double(), dart.fn(e => new (T.PairOfString$double()).new(e.key, e.value.mean), T.MapEntryOfString$MeanCalculatorToPairOfString$double()))[$toList]();
      sortedRenderTimes[$sort](dart.fn((p1, p2) => p1.second[$compareTo](p2.second), T.PairOfString$doubleAndPairOfString$doubleToint()));
      return sortedRenderTimes;
    }
    static ['_#new#tearOff']() {
      return new performance_tracker.PerformanceTracker.new();
    }
  };
  (performance_tracker.PerformanceTracker.new = function() {
    this[_frameListeners] = T.LinkedHashSetOfFrameListener().new();
    this[_layerRenderTimes] = new (T.IdentityMapOfString$MeanCalculator()).new();
    this[enabled] = false;
    ;
  }).prototype = performance_tracker.PerformanceTracker.prototype;
  dart.addTypeTests(performance_tracker.PerformanceTracker);
  dart.addTypeCaches(performance_tracker.PerformanceTracker);
  dart.setMethodSignature(performance_tracker.PerformanceTracker, () => ({
    __proto__: dart.getMethods(performance_tracker.PerformanceTracker.__proto__),
    recordRenderTime: dart.fnType(dart.void, [core.String, core.double]),
    addFrameListener: dart.fnType(dart.void, [performance_tracker.FrameListener]),
    removeFrameListener: dart.fnType(dart.void, [performance_tracker.FrameListener]),
    clearRenderTimes: dart.fnType(dart.void, []),
    logRenderTimes: dart.fnType(dart.void, []),
    getSortedRenderTimes: dart.fnType(core.List$(pair.Pair$(core.String, core.double)), [])
  }));
  dart.setLibraryUri(performance_tracker.PerformanceTracker, I[0]);
  dart.setFieldSignature(performance_tracker.PerformanceTracker, () => ({
    __proto__: dart.getFields(performance_tracker.PerformanceTracker.__proto__),
    [_frameListeners]: dart.finalFieldType(core.Set$(performance_tracker.FrameListener)),
    [_layerRenderTimes]: dart.finalFieldType(core.Map$(core.String, mean_calculator.MeanCalculator)),
    enabled: dart.fieldType(core.bool)
  }));
  performance_tracker.FrameListener = class FrameListener extends core.Object {};
  (performance_tracker.FrameListener.new = function() {
    ;
  }).prototype = performance_tracker.FrameListener.prototype;
  dart.addTypeTests(performance_tracker.FrameListener);
  dart.addTypeCaches(performance_tracker.FrameListener);
  dart.setLibraryUri(performance_tracker.FrameListener, I[0]);
  dart.trackLibraries("packages/lottie/src/performance_tracker.dart", {
    "package:lottie/src/performance_tracker.dart": performance_tracker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["performance_tracker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQO;;;;;;qBAEwB,WAAkB;AAC7C,WAAK,cAAS;AAEd,WAAK,AAAkB,sCAAY,SAAS;AACK,QAA/C,AAAiB,+BAAC,SAAS,EAAI;;AAG3B,uBAAyC,eAA5B,AAAiB,+BAAC,SAAS;AAExB,MAAtB,AAAW,UAAD,KAAK,MAAM;AAErB,UAAI,AAAU,SAAD,KAAI;AACf,iBAAS,WAAY;AACa,UAAhC,AAAS,QAAD,iBAAiB,MAAM;;;IAGrC;qBAEoC;AACL,MAA7B,AAAgB,0BAAI,QAAQ;IAC9B;wBAEuC;AACL,MAAhC,AAAgB,6BAAO,QAAQ;IACjC;;AAG2B,MAAzB,AAAkB;IACpB;;AAGE,WAAK,cAAS;AAER,8BAAoB;AAEU,MAApC,AAAU,iBAAC;AACX,eAAS,QAAS,kBAAiB;AAC0B,QAA3D,AAAU,iBAAC,AAA+C,iBAAhC,AAAM,KAAD,SAAO,gBAAI,AAAM,KAAD,WAAQ;;IAE3D;;AAGE,WAAK,cAAS,MAAO;AAEf,8BAAoB,AAAkB,AACvC,AACA,iEADI,QAAC,KAAM,kCAAK,AAAE,CAAD,MAAM,AAAE,AAAM,CAAP;AAGqC,MAAlE,AAAkB,iBAAD,QAAM,SAAC,IAAI,OAAO,AAAG,AAAO,EAAR,oBAAkB,AAAG,EAAD;AAEzD,YAAO,kBAAiB;IAC1B;;;;;;IAxDM,wBAAiC;IACjC,0BAA4C;IAE7C,gBAAU;;EAsDjB;;;;;;;;;;;;;;;;;;;;;;EAIA","file":"../../../../../../../../../../../packages/lottie/src/performance_tracker.dart.lib.js"}');
  // Exports:
  return {
    src__performance_tracker: performance_tracker
  };
}));

//# sourceMappingURL=performance_tracker.dart.lib.js.map
