define(['dart_sdk'], (function load__packages__qr__src__math_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var math = Object.create(dart.library);
  var $_get = dartx._get;
  var $leftShift = dartx['<<'];
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  math.glog = function glog(n) {
    if (n < 1) {
      dart.throw(new core.ArgumentError.new("glog(" + dart.str(n) + ")"));
    }
    return math._logTable[$_get](n);
  };
  math.gexp = function gexp(n) {
    while (n < 0) {
      n = n + 255;
    }
    while (n >= 256) {
      n = n - 255;
    }
    return math._expTable[$_get](n);
  };
  math._createExpTable = function _createExpTable() {
    let list = _native_typed_data.NativeUint8List.new(256);
    for (let i = 0; i < 8; i = i + 1) {
      list[$_set](i, (1)[$leftShift](i));
    }
    for (let i = 8; i < 256; i = i + 1) {
      list[$_set](i, (list[$_get](i - 4) ^ list[$_get](i - 5) ^ list[$_get](i - 6) ^ list[$_get](i - 8)) >>> 0);
    }
    return list;
  };
  math._createLogTable = function _createLogTable() {
    let list = _native_typed_data.NativeUint8List.new(256);
    for (let i = 0; i < 255; i = i + 1) {
      list[$_set](math._expTable[$_get](i), i);
    }
    return list;
  };
  dart.defineLazy(math, {
    /*math._logTable*/get _logTable() {
      return math._createLogTable();
    },
    /*math._expTable*/get _expTable() {
      return math._createExpTable();
    }
  }, false);
  dart.trackLibraries("packages/qr/src/math.dart", {
    "package:qr/src/math.dart": math
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["math.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;4BAKa;AACX,QAAI,AAAE,CAAD,GAAG;AACyB,MAA/B,WAAM,2BAAc,AAAU,mBAAH,CAAC;;AAG9B,UAAO,AAAS,uBAAC,CAAC;EACpB;4BAEa;AACX,WAAO,AAAE,CAAD,GAAG;AACD,MAAR,IAAA,AAAE,CAAD,GAAI;;AAGP,WAAO,AAAE,CAAD,IAAI;AACF,MAAR,IAAA,AAAE,CAAD,GAAI;;AAGP,UAAO,AAAS,uBAAC,CAAC;EACpB;;AAGQ,eAAO,uCAAU;AACvB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACN,MAAhB,AAAI,IAAA,QAAC,CAAC,EAAM,CAAF,eAAK,CAAC;;AAElB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,IAAA,AAAC,CAAA;AACuC,MAA/D,AAAI,IAAA,QAAC,CAAC,EAA4C,CAAxC,AAAI,AAAQ,AAAc,IAAtB,QAAC,AAAE,CAAD,GAAG,KAAK,AAAI,IAAA,QAAC,AAAE,CAAD,GAAG,KAAK,AAAI,IAAA,QAAC,AAAE,CAAD,GAAG,KAAK,AAAI,IAAA,QAAC,AAAE,CAAD,GAAG;;AAE/D,UAAO,KAAI;EACb;;AAGQ,eAAO,uCAAU;AACvB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,IAAA,AAAC,CAAA;AACF,MAAtB,AAAI,IAAA,QAAC,AAAS,sBAAC,CAAC,GAAK,CAAC;;AAExB,UAAO,KAAI;EACb;;MAxCgB,cAAS;YAAG;;MACZ,cAAS;YAAG","file":"../../../../../../../../../../../packages/qr/src/math.dart.lib.js"}');
  // Exports:
  return {
    src__math: math
  };
}));

//# sourceMappingURL=math.dart.lib.js.map
