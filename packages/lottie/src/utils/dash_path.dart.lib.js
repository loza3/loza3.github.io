define(['dart_sdk', 'packages/lottie/src/utils/path_factory.dart'], (function load__packages__lottie__src__utils__dash_path_dart(dart_sdk, packages__lottie__src__utils__path_factory$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path_factory = packages__lottie__src__utils__path_factory$46dart.src__utils__path_factory;
  var dash_path = Object.create(dart.library);
  var $length = dartx.length;
  var $fold = dartx.fold;
  var $modulo = dartx['%'];
  var $_get = dartx._get;
  var $isEven = dartx.isEven;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    doubleAnddoubleTodouble: () => (T.doubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double])))(),
    SyncIterableOfRect: () => (T.SyncIterableOfRect = dart.constFn(_js_helper.SyncIterable$(ui.Rect)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/lottie-1.4.3/lib/src/utils/dash_path.dart"];
  dash_path.dashPath = function dashPath(source, opts) {
    let intervals = opts && 'intervals' in opts ? opts.intervals : null;
    let phase = opts && 'phase' in opts ? opts.phase : null;
    if (!(intervals[$length] >= 2)) dart.assertFailed(null, I[0], 10, 10, "intervals.length >= 2");
    phase == null ? phase = 0.0 : null;
    let dest = path_factory.PathFactory.create();
    for (let metric of source.computeMetrics()) {
      for (let dash of dash_path._dashes(metric.length, intervals, phase)) {
        dest.addPath(metric.extractPath(dash.left, dash.right), ui.Offset.zero);
      }
    }
    return dest;
  };
  dash_path._dashes = function _dashes(length, intervals, phase) {
    return new (T.SyncIterableOfRect()).new(function* _dashes() {
      let intervalLength = intervals[$fold](core.double, 0.0, dart.fn((a, b) => a + b, T.doubleAnddoubleTodouble()));
      let distance = 0.0;
      while (distance < length) {
        let position = (distance + phase)[$modulo](intervalLength);
        let end = 0.0;
        for (let i = 0; i < intervals[$length]; i = i + 1) {
          end = end + intervals[$_get](i);
          if (end > position || i === intervals[$length] - 1) {
            let offset = math.max(core.double, 0.1, end - position);
            if (i[$isEven]) {
              yield new ui.Rect.fromLTRB(distance, 0.0, math.min(core.double, length, distance + offset), 0.0);
            }
            distance = distance + offset;
            break;
          }
        }
      }
    });
  };
  dart.trackLibraries("packages/lottie/src/utils/dash_path.dart", {
    "package:lottie/src/utils/dash_path.dart": dash_path
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dash_path.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;yCAKO;QACiB;QACd;AAER,UAAO,AAAU,AAAO,SAAR,aAAW;AAChB,IAAX,AAAM,KAAD,WAAL,QAAU,MAAJ;AAEF,eAAmB;AACvB,aAAW,SAAU,AAAO,OAAD;AACzB,eAAS,OAAQ,mBAAQ,AAAO,MAAD,SAAS,SAAS,EAAE,KAAK;AACc,QAApE,AAAK,IAAD,SAAS,AAAO,MAAD,aAAa,AAAK,IAAD,OAAO,AAAK,IAAD,SAAgB;;;AAInE,UAAO,KAAI;EACb;uCAGW,QAAqB,WAAkB;AAD5B;AAEhB,2BAAiB,AAAU,SAAD,qBAAc,KAAG,SAAC,GAAG,MAAM,AAAE,CAAD,GAAG,CAAC;AAE1D,qBAAW;AACf,aAAO,AAAS,QAAD,GAAG,MAAM;AAClB,uBAA8B,CAAlB,AAAS,QAAD,GAAG,KAAK,WAAI,cAAc;AAC9C,kBAAM;AACV,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAU,SAAD,WAAS,IAAA,AAAC,CAAA;AAClB,UAAnB,MAAA,AAAI,GAAD,GAAI,AAAS,SAAA,QAAC,CAAC;AAClB,cAAI,AAAI,GAAD,GAAG,QAAQ,IAAI,AAAE,CAAD,KAAI,AAAU,AAAO,SAAR,YAAU;AACxC,yBAAS,sBAAI,KAAK,AAAI,GAAD,GAAG,QAAQ;AAEpC,gBAAI,AAAE,CAAD;AACH,oBAAW,qBAAS,QAAQ,EAAE,KAAG,sBAAI,MAAM,EAAE,AAAS,QAAD,GAAG,MAAM,GAAG;;AAGjD,YAAlB,WAAA,AAAS,QAAD,GAAI,MAAM;AAClB;;;;IAIR","file":"../../../../../../../../../../../../packages/lottie/src/utils/dash_path.dart.lib.js"}');
  // Exports:
  return {
    src__utils__dash_path: dash_path
  };
}));

//# sourceMappingURL=dash_path.dart.lib.js.map
