define(['dart_sdk', 'packages/proj4dart/src/constants/ellipsoids.dart'], (function load__packages__proj4dart__src__common__derive_constants_dart(dart_sdk, packages__proj4dart__src__constants__ellipsoids$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ellipsoids = packages__proj4dart__src__constants__ellipsoids$46dart.src__constants__ellipsoids;
  var derive_constants = Object.create(dart.library);
  var $isNaN = dartx.isNaN;
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$double: () => (T.IdentityMapOfString$double = dart.constFn(_js_helper.IdentityMap$(core.String, core.double)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$ObjectN: () => (T.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T.ObjectN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  derive_constants.eccentricity = function eccentricity(a, b, rf, R_A) {
    let a2 = a * a;
    let b2 = b * b;
    let es = (a2 - b2) / a2;
    let e = 0.0;
    if (R_A != null) {
      a = a * (1 - es * (0.16666666666666666 + es * (0.04722222222222222 + es * 0.022156084656084655)));
      a2 = a * a;
      es = 0.0;
    } else {
      e = math.sqrt(es);
    }
    let ep2 = (a2 - b2) / b2;
    return new (T.IdentityMapOfString$double()).from(["es", es, "e", e, "ep2", ep2]);
  };
  derive_constants.sphere = function sphere(a, b, rf, ellps, sphere) {
    if (a == null || a[$isNaN]) {
      let ellipse = ellipsoids.match(ellps);
      ellipse == null ? ellipse = ellipsoids.WGS84 : null;
      a = ellipse.a;
      b = ellipse.b;
      rf = ellipse.rf;
    }
    if (rf != null && b == null) {
      b = (1.0 - 1.0 / dart.notNull(rf)) * dart.notNull(a);
    }
    if (rf === 0 || (dart.notNull(a) - dart.nullCheck(b))[$abs]() < 1e-10) {
      sphere = true;
      b = a;
    }
    return new (T.IdentityMapOfString$ObjectN()).from(["a", a, "b", b, "rf", rf, "sphere", sphere]);
  };
  dart.trackLibraries("packages/proj4dart/src/common/derive_constants.dart", {
    "package:proj4dart/src/common/derive_constants.dart": derive_constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["derive_constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;wDAKwC,GAAU,GAAW,IAAU;AACjE,aAAK,AAAE,CAAD,GAAG,CAAC;AACV,aAAK,AAAE,CAAD,GAAG,CAAC;AACV,aAAe,CAAT,AAAG,EAAD,GAAG,EAAE,IAAI,EAAE;AACnB,YAAI;AACR,QAAI,GAAG;AAC6D,MAAlE,IAAA,AAAE,CAAD,IAAI,AAAE,IAAE,AAAG,EAAD,IAAiB,sBAAE,AAAG,EAAD,IAAe,sBAAE,AAAG,EAAD;AACzC,MAAV,KAAK,AAAE,CAAD,GAAG,CAAC;AACF,MAAR,KAAK;;AAEY,MAAjB,IAAS,UAAK,EAAE;;AAEd,cAAgB,CAAT,AAAG,EAAD,GAAG,EAAE,IAAI,EAAE;AACxB,UAAO,4CAAC,MAAM,EAAE,EAAE,KAAK,CAAC,EAAE,OAAO,GAAG;EACtC;4CAGY,GAAW,GAAW,IAAW,OAAa;AACxD,QAAI,AAAE,CAAD,YAAY,AAAE,CAAD;AAEZ,oBAAqB,iBAAM,KAAK;AAER,MAA5B,AAAQ,OAAD,WAAP,UAAuB,mBAAf;AACK,MAAb,IAAI,AAAQ,OAAD;AACE,MAAb,IAAI,AAAQ,OAAD;AACI,MAAf,KAAK,AAAQ,OAAD;;AAEd,QAAI,EAAE,YAAY,AAAE,CAAD;AACO,MAAxB,IAAqB,CAAhB,AAAI,MAAE,AAAI,mBAAE,EAAE,kBAAI,CAAC;;AAE1B,QAAI,AAAG,EAAD,KAAI,KAAc,AAAM,CAAZ,aAAF,CAAC,IAAI,eAAD,CAAC;AACN,MAAb,SAAS;AACJ,MAAL,IAAI,CAAC;;AAEP,UAAO,6CAAC,KAAK,CAAC,EAAE,KAAK,CAAC,EAAE,MAAM,EAAE,EAAE,UAAU,MAAM;EACpD","file":"../../../../../../../../../../../../packages/proj4dart/src/common/derive_constants.dart.lib.js"}');
  // Exports:
  return {
    src__common__derive_constants: derive_constants
  };
}));

//# sourceMappingURL=derive_constants.dart.lib.js.map
