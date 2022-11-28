define(['dart_sdk', 'packages/proj4dart/src/classes/point.dart'], (function load__packages__proj4dart__src__common__datum_utils_dart(dart_sdk, packages__proj4dart__src__classes__point$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const point = packages__proj4dart__src__classes__point$46dart.src__classes__point;
  var datum_utils = Object.create(dart.library);
  var $abs = dartx.abs;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  datum_utils.compareDatums = function compareDatums(source, dest) {
    if (source.datumType !== dest.datumType) {
      return false;
    } else if (source.a !== dest.a || (source.es - dest.es)[$abs]() > 5e-11) {
      return false;
    } else if (source.datumType === 1) {
      return source.datumParams[$_get](0) === dest.datumParams[$_get](0) && source.datumParams[$_get](1) === dest.datumParams[$_get](1) && source.datumParams[$_get](2) === dest.datumParams[$_get](2);
    } else if (source.datumType === 2) {
      return source.datumParams[$_get](0) === dest.datumParams[$_get](0) && source.datumParams[$_get](1) === dest.datumParams[$_get](1) && source.datumParams[$_get](2) === dest.datumParams[$_get](2) && source.datumParams[$_get](3) === dest.datumParams[$_get](3) && source.datumParams[$_get](4) === dest.datumParams[$_get](4) && source.datumParams[$_get](5) === dest.datumParams[$_get](5) && source.datumParams[$_get](6) === dest.datumParams[$_get](6);
    } else {
      return true;
    }
  };
  datum_utils.geodeticToGeocentric = function geodeticToGeocentric(p, es, a) {
    let t0;
    let Longitude = p.x;
    let Latitude = p.y;
    let Height = (t0 = p.z, t0 == null ? 0.0 : t0);
    let Rn = null;
    let Sin_Lat = null;
    let Sin2_Lat = null;
    let Cos_Lat = null;
    if (Latitude < -1.5707963267948966 && Latitude > -1.001 * 1.5707963267948966) {
      Latitude = -1.5707963267948966;
    } else if (Latitude > 1.5707963267948966 && Latitude < 1.001 * 1.5707963267948966) {
      Latitude = 1.5707963267948966;
    } else if (Latitude < -1.5707963267948966) {
      return new point.Point.withZ({x: -(1 / 0), y: -(1 / 0), z: p.z});
    } else if (Latitude > 1.5707963267948966) {
      return new point.Point.withZ({x: 1 / 0, y: 1 / 0, z: p.z});
    }
    if (Longitude > 3.141592653589793) {
      Longitude = Longitude - 2 * 3.141592653589793;
    }
    Sin_Lat = math.sin(Latitude);
    Cos_Lat = math.cos(Latitude);
    Sin2_Lat = dart.dsend(Sin_Lat, '*', [Sin_Lat]);
    Rn = dart.dsend(a, '/', [math.sqrt(1.0 - core.num.as(dart.dsend(es, '*', [Sin2_Lat])))]);
    return new point.Point.withZ({x: core.double.as(dart.dsend(dart.dsend(dart.dsend(Rn, '+', [Height]), '*', [Cos_Lat]), '*', [math.cos(Longitude)])), y: core.double.as(dart.dsend(dart.dsend(dart.dsend(Rn, '+', [Height]), '*', [Cos_Lat]), '*', [math.sin(Longitude)])), z: T.doubleN().as(dart.dsend(dart.dsend(dart.dsend(Rn, '*', [1 - core.num.as(es)]), '+', [Height]), '*', [Sin_Lat]))});
  };
  datum_utils.geocentricToGeodetic = function geocentricToGeodetic(p, es, a, b) {
    let t0;
    let genau = 1e-12;
    let genau2 = genau * genau;
    let maxiter = 30;
    let P = null;
    let RR = null;
    let CT = null;
    let ST = null;
    let RX = null;
    let RK = null;
    let RN = null;
    let CPHI0 = null;
    let SPHI0 = null;
    let CPHI = null;
    let SPHI = null;
    let SDPHI = null;
    let iter = null;
    let X = p.x;
    let Y = p.y;
    let Z = (t0 = p.z, t0 == null ? 0.0 : t0);
    let Longitude = null;
    let Latitude = null;
    let Height = null;
    P = math.sqrt(X * X + Y * Y);
    RR = math.sqrt(X * X + Y * Y + Z * Z);
    if (P / a < genau) {
      Longitude = 0.0;
      if (RR / a < genau) {
        Latitude = 1.5707963267948966;
        Height = -b;
        return new point.Point.withZ({x: p.x, y: p.y, z: p.z});
      }
    } else {
      Longitude = math.atan2(Y, X);
    }
    CT = Z / RR;
    ST = P / RR;
    RX = 1.0 / math.sqrt(1.0 - es * (2.0 - es) * ST * ST);
    CPHI0 = ST * (1.0 - es) * RX;
    SPHI0 = CT * RX;
    iter = 0;
    do {
      iter = dart.dsend(iter, '+', [1]);
      RN = a / math.sqrt(1.0 - es * SPHI0 * SPHI0);
      Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - es * SPHI0 * SPHI0);
      RK = es * RN / (RN + Height);
      RX = 1.0 / math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
      CPHI = ST * (1.0 - RK) * RX;
      SPHI = CT * RX;
      SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
      CPHI0 = CPHI;
      SPHI0 = SPHI;
    } while (SDPHI * SDPHI > genau2 && dart.dtest(dart.dsend(iter, '<', [maxiter])));
    Latitude = math.atan(SPHI / CPHI[$abs]());
    return new point.Point.withZ({x: Longitude, y: Latitude, z: Height});
  };
  datum_utils.geocentricToWgs84 = function geocentricToWgs84(p, datumType, datumParams) {
    let t0;
    if (datumType === 1) {
      return new point.Point.withZ({x: p.x + datumParams[$_get](0), y: p.y + datumParams[$_get](1), z: p.z != null ? dart.nullCheck(p.z) + datumParams[$_get](2) : 0.0});
    } else if (datumType === 2) {
      let Dx_BF = datumParams[$_get](0);
      let Dy_BF = datumParams[$_get](1);
      let Dz_BF = datumParams[$_get](2);
      let Rx_BF = datumParams[$_get](3);
      let Ry_BF = datumParams[$_get](4);
      let Rz_BF = datumParams[$_get](5);
      let M_BF = datumParams[$_get](6);
      p.z = (t0 = p.z, t0 == null ? 0.0 : t0);
      return new point.Point.withZ({x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * dart.nullCheck(p.z)) + Dx_BF, y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * dart.nullCheck(p.z)) + Dy_BF, z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + dart.nullCheck(p.z)) + Dz_BF});
    }
    dart.throw("Shouldn't reach");
  };
  datum_utils.geocentricFromWgs84 = function geocentricFromWgs84(p, datumType, datumParams) {
    if (datumType === 1) {
      return new point.Point.withZ({x: p.x - datumParams[$_get](0), y: p.y - datumParams[$_get](1), z: dart.nullCheck(p.z) - datumParams[$_get](2)});
    } else if (datumType === 2) {
      let Dx_BF = datumParams[$_get](0);
      let Dy_BF = datumParams[$_get](1);
      let Dz_BF = datumParams[$_get](2);
      let Rx_BF = datumParams[$_get](3);
      let Ry_BF = datumParams[$_get](4);
      let Rz_BF = datumParams[$_get](5);
      let M_BF = datumParams[$_get](6);
      let x_tmp = (p.x - Dx_BF) / M_BF;
      let y_tmp = (p.y - Dy_BF) / M_BF;
      let z_tmp = (dart.nullCheck(p.z) - Dz_BF) / M_BF;
      return new point.Point.withZ({x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp, y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp, z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp});
    }
    dart.throw("Shouldn't reach");
  };
  dart.trackLibraries("packages/proj4dart/src/common/datum_utils.dart", {
    "package:proj4dart/src/common/datum_utils.dart": datum_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["datum_utils.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/proj4dart/src/common/datum_utils.dart.lib.js"}');
  // Exports:
  return {
    src__common__datum_utils: datum_utils
  };
}));

//# sourceMappingURL=datum_utils.dart.lib.js.map
