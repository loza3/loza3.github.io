define(['dart_sdk'], (function load__packages__flutter__src__foundation__math_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var math = Object.create(dart.library);
  var $isNaN = dartx.isNaN;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/foundation/math.dart"];
  math.clampDouble = function clampDouble(x, min, max) {
    if (!(min <= max && !max[$isNaN] && !min[$isNaN])) dart.assertFailed(null, I[0], 12, 10, "min <= max && !max.isNaN && !min.isNaN");
    if (x < min) {
      return min;
    }
    if (x > max) {
      return max;
    }
    if (x[$isNaN]) {
      return max;
    }
    return x;
  };
  dart.trackLibraries("packages/flutter/src/foundation/math.dart", {
    "package:flutter/src/foundation/math.dart": math
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["math.dart"],"names":[],"mappings":";;;;;;;;;;;;;0CAU0B,GAAU,KAAY;AAC9C,UAAO,AAAI,AAAqB,GAAtB,IAAI,GAAG,KAAK,AAAI,GAAD,aAAW,AAAI,GAAD;AACvC,QAAI,AAAE,CAAD,GAAG,GAAG;AACT,YAAO,IAAG;;AAEZ,QAAI,AAAE,CAAD,GAAG,GAAG;AACT,YAAO,IAAG;;AAEZ,QAAI,AAAE,CAAD;AACH,YAAO,IAAG;;AAEZ,UAAO,EAAC;EACV","file":"../../../../../../../../../../packages/flutter/src/foundation/math.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__math: math
  };
}));

//# sourceMappingURL=math.dart.lib.js.map
