define(['dart_sdk', 'packages/intl/src/intl/number_parser.dart', 'packages/latlong2/spline.dart'], (function load__packages__latlong2__latlong_dart(dart_sdk, packages__intl__src__intl__number_parser$46dart, packages__latlong2__spline$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const number_format = packages__intl__src__intl__number_parser$46dart.src__intl__number_format;
  const spline = packages__latlong2__spline$46dart.spline;
  var latlong = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $isNaN = dartx.isNaN;
  var $abs = dartx.abs;
  var $round = dartx.round;
  var $_get = dartx._get;
  var $hashCode = dartx.hashCode;
  var $clear = dartx.clear;
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  var $first = dartx.first;
  var $last = dartx.last;
  var $length = dartx.length;
  var $toInt = dartx.toInt;
  var $modulo = dartx['%'];
  var $insert = dartx.insert;
  var $isEmpty = dartx.isEmpty;
  var $forEach = dartx.forEach;
  var $elementAt = dartx.elementAt;
  var $floor = dartx.floor;
  var $toString = dartx.toString;
  var $floorToDouble = dartx.floorToDouble;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    JSArrayOfdouble: () => (T$.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    IdentityMapOfString$dynamic: () => (T$.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    doubleAnddoubleToLatLng: () => (T$.doubleAnddoubleToLatLng = dart.constFn(dart.fnType(latlong.LatLng, [core.double, core.double])))(),
    PathOfLatLng: () => (T$.PathOfLatLng = dart.constFn(latlong.Path$(latlong.LatLng)))(),
    JSArrayOfLatLng: () => (T$.JSArrayOfLatLng = dart.constFn(_interceptors.JSArray$(latlong.LatLng)))(),
    CatmullRomSpline2DOfdouble: () => (T$.CatmullRomSpline2DOfdouble = dart.constFn(spline.CatmullRomSpline2D$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: latlong.Vincenty.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: latlong.Haversine.prototype
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: latlong.LengthUnit.prototype,
        [scaleFactor$]: 1000
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: latlong.LengthUnit.prototype,
        [scaleFactor$]: 100
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: latlong.LengthUnit.prototype,
        [scaleFactor$]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: latlong.LengthUnit.prototype,
        [scaleFactor$]: 0.001
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: latlong.LengthUnit.prototype,
        [scaleFactor$]: 0.0006213712
      });
    },
    get C7() {
      return C[7] = dart.fn(latlong._defaultLatLngFactory, T$.doubleAnddoubleToLatLng());
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: latlong.Distance.prototype,
        [_calculator]: C[0] || CT.C0,
        [_roundResult]: true,
        [_radius]: 6378137
      });
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = ["package:latlong2/latlong.dart"];
  latlong.DistanceCalculator = class DistanceCalculator extends core.Object {};
  (latlong.DistanceCalculator.new = function() {
    ;
  }).prototype = latlong.DistanceCalculator.prototype;
  dart.addTypeTests(latlong.DistanceCalculator);
  dart.addTypeCaches(latlong.DistanceCalculator);
  dart.setLibraryUri(latlong.DistanceCalculator, I[0]);
  latlong.Haversine = class Haversine extends core.Object {
    static ['_#new#tearOff']() {
      return new latlong.Haversine.new();
    }
    distance(p1, p2) {
      let sinDLat = math.sin((p2.latitudeInRad - p1.latitudeInRad) / 2);
      let sinDLng = math.sin((p2.longitudeInRad - p1.longitudeInRad) / 2);
      let a = sinDLat * sinDLat + sinDLng * sinDLng * math.cos(p1.latitudeInRad) * math.cos(p2.latitudeInRad);
      let c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a));
      return 6378137 * c;
    }
    offset(from, distanceInMeter, bearing) {
      if (bearing < -180 || bearing > 180) {
        dart.throw(new core.ArgumentError.value(bearing, "bearing", "Angle must be between -180 and 180 degrees"));
      }
      let h = latlong.degToRadian(bearing[$toDouble]());
      let a = distanceInMeter / 6378137;
      let lat2 = math.asin(math.sin(from.latitudeInRad) * math.cos(a) + math.cos(from.latitudeInRad) * math.sin(a) * math.cos(h));
      let lng2 = from.longitudeInRad + math.atan2(math.sin(h) * math.sin(a) * math.cos(from.latitudeInRad), math.cos(a) - math.sin(from.latitudeInRad) * math.sin(lat2));
      return new latlong.LatLng.new(latlong.radianToDeg(lat2), latlong.radianToDeg(lng2));
    }
  };
  (latlong.Haversine.new = function() {
    ;
  }).prototype = latlong.Haversine.prototype;
  dart.addTypeTests(latlong.Haversine);
  dart.addTypeCaches(latlong.Haversine);
  latlong.Haversine[dart.implements] = () => [latlong.DistanceCalculator];
  dart.setMethodSignature(latlong.Haversine, () => ({
    __proto__: dart.getMethods(latlong.Haversine.__proto__),
    distance: dart.fnType(core.double, [latlong.LatLng, latlong.LatLng]),
    offset: dart.fnType(latlong.LatLng, [latlong.LatLng, core.double, core.double])
  }));
  dart.setLibraryUri(latlong.Haversine, I[0]);
  latlong.Vincenty = class Vincenty extends core.Object {
    static ['_#new#tearOff']() {
      return new latlong.Vincenty.new();
    }
    distance(p1, p2) {
      let a = 6378137;
      let b = 6356752.314245;
      let f = 0.0033528106647474805;
      let l = p2.longitudeInRad - p1.longitudeInRad;
      let u1 = math.atan((1 - f) * math.tan(p1.latitudeInRad));
      let u2 = math.atan((1 - f) * math.tan(p2.latitudeInRad));
      let sinU1 = math.sin(u1);
      let cosU1 = math.cos(u1);
      let sinU2 = math.sin(u2);
      let cosU2 = math.cos(u2);
      let sinLambda = null;
      let cosLambda = null;
      let sinSigma = null;
      let cosSigma = null;
      let sigma = null;
      let sinAlpha = null;
      let cosSqAlpha = null;
      let cos2SigmaM = null;
      let lambda = l;
      let lambdaP = null;
      let maxIterations = 200;
      do {
        sinLambda = math.sin(lambda);
        cosLambda = math.cos(lambda);
        sinSigma = math.sqrt(cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
        if (sinSigma === 0) {
          return 0.0;
        }
        cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
        sigma = math.atan2(sinSigma, cosSigma);
        sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
        cosSqAlpha = 1 - sinAlpha * sinAlpha;
        cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
        if (cos2SigmaM[$isNaN]) {
          cos2SigmaM = 0.0;
        }
        let C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        lambdaP = lambda;
        lambda = l + (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
      } while ((lambda - lambdaP)[$abs]() > 1e-12 && (maxIterations = maxIterations - 1) > 0);
      if (maxIterations === 0) {
        dart.throw(new core.StateError.new("Distance calculation faild to converge!"));
      }
      let uSq = cosSqAlpha * (a * a - b * b) / (b * b);
      let A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
      let B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
      let deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
      let dist = b * A * (sigma - deltaSigma);
      return dist;
    }
    offset(from, distanceInMeter, bearing) {
      let equatorialRadius = 6378137;
      let latitude = from.latitudeInRad;
      let longitude = from.longitudeInRad;
      let alpha1 = latlong.degToRadian(bearing);
      let sinAlpha1 = math.sin(alpha1);
      let cosAlpha1 = math.cos(alpha1);
      let tanU1 = (1 - 0.0033528106647474805) * math.tan(latitude);
      let cosU1 = 1 / math.sqrt(1 + tanU1 * tanU1);
      let sinU1 = tanU1 * cosU1;
      let sigma1 = math.atan2(tanU1, cosAlpha1);
      let sinAlpha = cosU1 * sinAlpha1;
      let cosSqAlpha = 1 - sinAlpha * sinAlpha;
      let dfUSq = cosSqAlpha * (equatorialRadius * equatorialRadius - 6356752.314245 * 6356752.314245) / (6356752.314245 * 6356752.314245);
      let a = 1 + dfUSq / 16384 * (4096 + dfUSq * (-768 + dfUSq * (320 - 175 * dfUSq)));
      let b = dfUSq / 1024 * (256 + dfUSq * (-128 + dfUSq * (74 - 47 * dfUSq)));
      let sigma = distanceInMeter / (6356752.314245 * a);
      let sigmaP = 2 * 3.141592653589793;
      let sinSigma = 0.0;
      let cosSigma = 0.0;
      let cos2SigmaM = 0.0;
      let deltaSigma = null;
      let maxIterations = 200;
      do {
        cos2SigmaM = math.cos(2 * sigma1 + sigma);
        sinSigma = math.sin(sigma);
        cosSigma = math.cos(sigma);
        deltaSigma = b * sinSigma * (cos2SigmaM + b / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - b / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
        sigmaP = sigma;
        sigma = distanceInMeter / (6356752.314245 * a) + deltaSigma;
      } while ((sigma - sigmaP)[$abs]() > 1e-12 && (maxIterations = maxIterations - 1) > 0);
      if (maxIterations === 0) {
        dart.throw(new core.StateError.new("offset calculation faild to converge!"));
      }
      let tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
      let lat2 = math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1, (1 - 0.0033528106647474805) * math.sqrt(sinAlpha * sinAlpha + tmp * tmp));
      let lambda = math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1);
      let c = 0.0033528106647474805 / 16 * cosSqAlpha * (4 + 0.0033528106647474805 * (4 - 3 * cosSqAlpha));
      let l = lambda - (1 - c) * 0.0033528106647474805 * sinAlpha * (sigma + c * sinSigma * (cos2SigmaM + c * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
      let lon2 = longitude + l;
      if (lon2 > 3.141592653589793) {
        lon2 = lon2 - 2 * 3.141592653589793;
      }
      if (lon2 < -1 * 3.141592653589793) {
        lon2 = lon2 + 2 * 3.141592653589793;
      }
      return new latlong.LatLng.new(latlong.radianToDeg(lat2), latlong.radianToDeg(lon2));
    }
  };
  (latlong.Vincenty.new = function() {
    ;
  }).prototype = latlong.Vincenty.prototype;
  dart.addTypeTests(latlong.Vincenty);
  dart.addTypeCaches(latlong.Vincenty);
  latlong.Vincenty[dart.implements] = () => [latlong.DistanceCalculator];
  dart.setMethodSignature(latlong.Vincenty, () => ({
    __proto__: dart.getMethods(latlong.Vincenty.__proto__),
    distance: dart.fnType(core.double, [latlong.LatLng, latlong.LatLng]),
    offset: dart.fnType(latlong.LatLng, [latlong.LatLng, core.double, core.double])
  }));
  dart.setLibraryUri(latlong.Vincenty, I[0]);
  var _radius = dart.privateName(latlong, "Distance._radius");
  var _roundResult = dart.privateName(latlong, "Distance._roundResult");
  var _calculator = dart.privateName(latlong, "Distance._calculator");
  var _radius$ = dart.privateName(latlong, "_radius");
  var _roundResult$ = dart.privateName(latlong, "_roundResult");
  var _calculator$ = dart.privateName(latlong, "_calculator");
  var _round = dart.privateName(latlong, "_round");
  latlong.Distance = class Distance extends core.Object {
    get [_radius$]() {
      return this[_radius];
    }
    set [_radius$](value) {
      super[_radius$] = value;
    }
    get [_roundResult$]() {
      return this[_roundResult];
    }
    set [_roundResult$](value) {
      super[_roundResult$] = value;
    }
    get [_calculator$]() {
      return this[_calculator];
    }
    set [_calculator$](value) {
      super[_calculator$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
      let calculator = opts && 'calculator' in opts ? opts.calculator : C[0] || CT.C0;
      return new latlong.Distance.new({roundResult: roundResult, calculator: calculator});
    }
    static ['_#withRadius#tearOff'](radius, opts) {
      let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
      let calculator = opts && 'calculator' in opts ? opts.calculator : C[0] || CT.C0;
      return new latlong.Distance.withRadius(radius, {roundResult: roundResult, calculator: calculator});
    }
    get radius() {
      return this[_radius$];
    }
    get calculator() {
      return this[_calculator$];
    }
    call(p1, p2) {
      return this.distance(p1, p2);
    }
    as(unit, p1, p2) {
      let dist = this[_calculator$].distance(p1, p2);
      return this[_round](latlong.LengthUnit.Meter.to(unit, dist));
    }
    distance(p1, p2) {
      return this[_round](this[_calculator$].distance(p1, p2));
    }
    bearing(p1, p2) {
      let diffLongitude = p2.longitudeInRad - p1.longitudeInRad;
      let y = math.sin(diffLongitude);
      let x = math.cos(p1.latitudeInRad) * math.tan(p2.latitudeInRad) - math.sin(p1.latitudeInRad) * math.cos(diffLongitude);
      return latlong.radianToDeg(math.atan2(y, x));
    }
    offset(from, distanceInMeter, bearing) {
      return this[_calculator$].offset(from, distanceInMeter[$toDouble](), bearing[$toDouble]());
    }
    [_round](value) {
      return dart.dtest(this[_roundResult$]) ? value[$round]()[$toDouble]() : value;
    }
  };
  (latlong.Distance.new = function(opts) {
    let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
    let calculator = opts && 'calculator' in opts ? opts.calculator : C[0] || CT.C0;
    this[_radius] = 6378137;
    this[_roundResult] = roundResult;
    this[_calculator] = calculator;
    ;
  }).prototype = latlong.Distance.prototype;
  (latlong.Distance.withRadius = function(radius, opts) {
    let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
    let calculator = opts && 'calculator' in opts ? opts.calculator : C[0] || CT.C0;
    this[_radius] = radius;
    this[_roundResult] = roundResult;
    this[_calculator] = calculator;
    if (radius <= 0) {
      dart.throw(new core.ArgumentError.value(radius, "radius", "Radius must be greater than 0"));
    }
  }).prototype = latlong.Distance.prototype;
  dart.addTypeTests(latlong.Distance);
  dart.addTypeCaches(latlong.Distance);
  latlong.Distance[dart.implements] = () => [latlong.DistanceCalculator];
  dart.setMethodSignature(latlong.Distance, () => ({
    __proto__: dart.getMethods(latlong.Distance.__proto__),
    call: dart.fnType(core.double, [latlong.LatLng, latlong.LatLng]),
    as: dart.fnType(core.double, [latlong.LengthUnit, latlong.LatLng, latlong.LatLng]),
    distance: dart.fnType(core.double, [latlong.LatLng, latlong.LatLng]),
    bearing: dart.fnType(core.double, [latlong.LatLng, latlong.LatLng]),
    offset: dart.fnType(latlong.LatLng, [latlong.LatLng, core.num, core.num]),
    [_round]: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(latlong.Distance, () => ({
    __proto__: dart.getGetters(latlong.Distance.__proto__),
    radius: core.double,
    calculator: latlong.DistanceCalculator
  }));
  dart.setLibraryUri(latlong.Distance, I[0]);
  dart.setFieldSignature(latlong.Distance, () => ({
    __proto__: dart.getFields(latlong.Distance.__proto__),
    [_radius$]: dart.finalFieldType(core.double),
    [_roundResult$]: dart.finalFieldType(dart.dynamic),
    [_calculator$]: dart.finalFieldType(latlong.DistanceCalculator)
  }));
  latlong.DistanceVincenty = class DistanceVincenty extends latlong.Distance {
    static ['_#new#tearOff'](opts) {
      let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
      return new latlong.DistanceVincenty.new({roundResult: roundResult});
    }
    static ['_#withRadius#tearOff'](radius, opts) {
      let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
      return new latlong.DistanceVincenty.withRadius(radius, {roundResult: roundResult});
    }
  };
  (latlong.DistanceVincenty.new = function(opts) {
    let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
    latlong.DistanceVincenty.__proto__.new.call(this, {roundResult: roundResult, calculator: C[0] || CT.C0});
    ;
  }).prototype = latlong.DistanceVincenty.prototype;
  (latlong.DistanceVincenty.withRadius = function(radius, opts) {
    let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
    latlong.DistanceVincenty.__proto__.withRadius.call(this, radius, {roundResult: roundResult, calculator: C[0] || CT.C0});
    if (radius <= 0) {
      dart.throw(new core.ArgumentError.value(radius, "radius", "Radius must be greater than 0"));
    }
  }).prototype = latlong.DistanceVincenty.prototype;
  dart.addTypeTests(latlong.DistanceVincenty);
  dart.addTypeCaches(latlong.DistanceVincenty);
  dart.setLibraryUri(latlong.DistanceVincenty, I[0]);
  latlong.DistanceHaversine = class DistanceHaversine extends latlong.Distance {
    static ['_#new#tearOff'](opts) {
      let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
      return new latlong.DistanceHaversine.new({roundResult: roundResult});
    }
    static ['_#withRadius#tearOff'](radius, opts) {
      let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
      return new latlong.DistanceHaversine.withRadius(radius, {roundResult: roundResult});
    }
  };
  (latlong.DistanceHaversine.new = function(opts) {
    let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
    latlong.DistanceHaversine.__proto__.new.call(this, {roundResult: roundResult, calculator: C[1] || CT.C1});
    ;
  }).prototype = latlong.DistanceHaversine.prototype;
  (latlong.DistanceHaversine.withRadius = function(radius, opts) {
    let roundResult = opts && 'roundResult' in opts ? opts.roundResult : true;
    latlong.DistanceHaversine.__proto__.withRadius.call(this, radius, {roundResult: roundResult, calculator: C[1] || CT.C1});
    if (radius <= 0) {
      dart.throw(new core.ArgumentError.value(radius, "radius", "Radius must be greater than 0"));
    }
  }).prototype = latlong.DistanceHaversine.prototype;
  dart.addTypeTests(latlong.DistanceHaversine);
  dart.addTypeCaches(latlong.DistanceHaversine);
  dart.setLibraryUri(latlong.DistanceHaversine, I[0]);
  var _latitude$ = dart.privateName(latlong, "_latitude");
  var _longitude$ = dart.privateName(latlong, "_longitude");
  latlong.LatLng = class LatLng extends core.Object {
    static ['_#new#tearOff'](_latitude, _longitude) {
      return new latlong.LatLng.new(_latitude, _longitude);
    }
    set latitude(value) {
      if (value < -90 || value > 90) {
        dart.throw(new core.ArgumentError.value(value, "value", "Latitude must be between -90 and 90 degrees"));
      }
      this[_latitude$] = value;
    }
    get latitude() {
      return this[_latitude$];
    }
    set longitude(value) {
      if (value < -180 || value > 180) {
        dart.throw(new core.ArgumentError.value(value, "value", "Longitude must be between -180 and 180 degrees"));
      }
      this[_longitude$] = value;
    }
    get longitude() {
      return this[_longitude$];
    }
    get latitudeInRad() {
      return latlong.degToRadian(this.latitude);
    }
    get longitudeInRad() {
      return latlong.degToRadian(this[_longitude$]);
    }
    static ['_#fromJson#tearOff'](json) {
      return new latlong.LatLng.fromJson(json);
    }
    toJson() {
      return new (T$.IdentityMapOfString$dynamic()).from(["coordinates", T$.JSArrayOfdouble().of([this[_longitude$], this[_latitude$]])]);
    }
    toString() {
      return "LatLng(latitude:" + number_format.NumberFormat.new("0.0#####").format(this.latitude) + ", " + "longitude:" + number_format.NumberFormat.new("0.0#####").format(this.longitude) + ")";
    }
    toSexagesimal() {
      let latDirection = this.latitude >= 0 ? "N" : "S";
      let lonDirection = this.longitude >= 0 ? "E" : "W";
      return latlong.decimal2sexagesimal(this.latitude) + " " + latDirection + ", " + latlong.decimal2sexagesimal(this.longitude) + " " + lonDirection;
    }
    get hashCode() {
      return this.latitude[$hashCode] + this.longitude[$hashCode];
    }
    _equals(other) {
      if (other == null) return false;
      return latlong.LatLng.is(other) && this.latitude === other.latitude && this.longitude === other.longitude;
    }
    round(opts) {
      let decimals = opts && 'decimals' in opts ? opts.decimals : 6;
      return new latlong.LatLng.new(this[_round](this.latitude, {decimals: decimals}), this[_round](this.longitude, {decimals: decimals}));
    }
    [_round](value, opts) {
      let decimals = opts && 'decimals' in opts ? opts.decimals : 6;
      return (value * math.pow(10, decimals))[$round]() / math.pow(10, decimals);
    }
  };
  (latlong.LatLng.new = function(_latitude, _longitude) {
    this[_latitude$] = _latitude;
    this[_longitude$] = _longitude;
    if (this[_latitude$] < -90 || this[_latitude$] > 90) {
      dart.throw(new core.ArgumentError.value(this[_latitude$], "_latitude", "Latitude must be between -90 and 90 degrees"));
    } else if (this[_longitude$] < -180 || this[_longitude$] > 180) {
      dart.throw(new core.ArgumentError.value(this[_longitude$], "_longitude", "Longitude must be between -180 and 180 degrees"));
    }
  }).prototype = latlong.LatLng.prototype;
  (latlong.LatLng.fromJson = function(json) {
    this[_latitude$] = core.double.as(dart.dsend(json[$_get]("coordinates"), '_get', [1]));
    this[_longitude$] = core.double.as(dart.dsend(json[$_get]("coordinates"), '_get', [0]));
    ;
  }).prototype = latlong.LatLng.prototype;
  dart.addTypeTests(latlong.LatLng);
  dart.addTypeCaches(latlong.LatLng);
  dart.setMethodSignature(latlong.LatLng, () => ({
    __proto__: dart.getMethods(latlong.LatLng.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    toSexagesimal: dart.fnType(core.String, []),
    round: dart.fnType(latlong.LatLng, [], {decimals: core.int}, {}),
    [_round]: dart.fnType(core.double, [core.double], {decimals: core.int}, {})
  }));
  dart.setGetterSignature(latlong.LatLng, () => ({
    __proto__: dart.getGetters(latlong.LatLng.__proto__),
    latitude: core.double,
    longitude: core.double,
    latitudeInRad: core.double,
    longitudeInRad: core.double
  }));
  dart.setSetterSignature(latlong.LatLng, () => ({
    __proto__: dart.getSetters(latlong.LatLng.__proto__),
    latitude: core.double,
    longitude: core.double
  }));
  dart.setLibraryUri(latlong.LatLng, I[0]);
  dart.setFieldSignature(latlong.LatLng, () => ({
    __proto__: dart.getFields(latlong.LatLng.__proto__),
    [_latitude$]: dart.fieldType(core.double),
    [_longitude$]: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(latlong.LatLng, ['toString', '_equals']);
  dart.defineExtensionAccessors(latlong.LatLng, ['hashCode']);
  var scaleFactor$ = dart.privateName(latlong, "LengthUnit.scaleFactor");
  latlong.LengthUnit = class LengthUnit extends core.Object {
    get scaleFactor() {
      return this[scaleFactor$];
    }
    set scaleFactor(value) {
      super.scaleFactor = value;
    }
    static ['_#new#tearOff'](scaleFactor) {
      return new latlong.LengthUnit.new(scaleFactor);
    }
    to(unit, value) {
      if (unit.scaleFactor === this.scaleFactor) {
        return value;
      }
      let primaryValue = value / this.scaleFactor;
      return primaryValue * unit.scaleFactor;
    }
  };
  (latlong.LengthUnit.new = function(scaleFactor) {
    this[scaleFactor$] = scaleFactor;
    ;
  }).prototype = latlong.LengthUnit.prototype;
  dart.addTypeTests(latlong.LengthUnit);
  dart.addTypeCaches(latlong.LengthUnit);
  dart.setMethodSignature(latlong.LengthUnit, () => ({
    __proto__: dart.getMethods(latlong.LengthUnit.__proto__),
    to: dart.fnType(core.double, [latlong.LengthUnit, core.double])
  }));
  dart.setLibraryUri(latlong.LengthUnit, I[0]);
  dart.setFieldSignature(latlong.LengthUnit, () => ({
    __proto__: dart.getFields(latlong.LengthUnit.__proto__),
    scaleFactor: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(latlong.LengthUnit, () => ['Millimeter', 'Centimeter', 'Meter', 'Kilometer', 'Mile']);
  dart.defineLazy(latlong.LengthUnit, {
    /*latlong.LengthUnit.Millimeter*/get Millimeter() {
      return C[2] || CT.C2;
    },
    /*latlong.LengthUnit.Centimeter*/get Centimeter() {
      return C[3] || CT.C3;
    },
    /*latlong.LengthUnit.Meter*/get Meter() {
      return C[4] || CT.C4;
    },
    /*latlong.LengthUnit.Kilometer*/get Kilometer() {
      return C[5] || CT.C5;
    },
    /*latlong.LengthUnit.Mile*/get Mile() {
      return C[6] || CT.C6;
    }
  }, false);
  var _distance = dart.privateName(latlong, "_distance");
  var _coordinates = dart.privateName(latlong, "_coordinates");
  var _latLngFactory = dart.privateName(latlong, "_latLngFactory");
  var _createSpline = dart.privateName(latlong, "_createSpline");
  var _pointToLatLng = dart.privateName(latlong, "_pointToLatLng");
  const _is_Path_default = Symbol('_is_Path_default');
  latlong.Path$ = dart.generic(T => {
    var __t$JSArrayOfT = () => (__t$JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    var __t$ListOfT = () => (__t$ListOfT = dart.constFn(core.List$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class Path extends core.Object {
      static ['_#new#tearOff'](T, opts) {
        let factory = opts && 'factory' in opts ? opts.factory : C[7] || CT.C7;
        return new (latlong.Path$(T)).new({factory: factory});
      }
      static ['_#from#tearOff'](T, coordinates, opts) {
        let factory = opts && 'factory' in opts ? opts.factory : C[7] || CT.C7;
        return new (latlong.Path$(T)).from(coordinates, {factory: factory});
      }
      get coordinates() {
        return this[_coordinates];
      }
      clear() {
        return this[_coordinates][$clear]();
      }
      add(value) {
        T.as(value);
        return this[_coordinates][$add](value);
      }
      addAll(values) {
        __t$ListOfT().as(values);
        return this[_coordinates][$addAll](values);
      }
      get first() {
        return this[_coordinates][$first];
      }
      get last() {
        return this[_coordinates][$last];
      }
      equalize(distanceInMeterPerTime, opts) {
        let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
        let smoothPath = opts && 'smoothPath' in opts ? opts.smoothPath : true;
        if (distanceInMeterPerTime <= 0) {
          dart.throw(new core.ArgumentError.value(distanceInMeterPerTime, "distanceInMeterPerTime", "Distance must be greater than 0"));
        }
        if (!(smoothPath && this[_coordinates][$length] >= 3 || !smoothPath && this[_coordinates][$length] >= 2)) {
          dart.throw(new core.ArgumentError.value(smoothPath, "smoothPath", "At least " + dart.str(smoothPath ? 3 : 2) + " coordinates are needed to create the steps in between"));
        }
        let stepDistance = smoothPath ? distanceInMeterPerTime * 2.0 : distanceInMeterPerTime[$toDouble]();
        let baseLength = this.distance;
        if (baseLength < stepDistance) {
          dart.throw(new core.ArgumentError.new("Path distance must be at least " + dart.str(stepDistance) + "mn (step distance) but was " + dart.str(baseLength)));
        }
        if (stepDistance > baseLength / 2) {
          core.print("Warning: Equalizing the path (L: " + dart.str(baseLength) + ") with a key-frame distance of " + dart.str(stepDistance) + " leads to" + "weired results. Turn of path smooting.");
        }
        if (baseLength === stepDistance) {
          return new (T$.PathOfLatLng()).from(T$.JSArrayOfLatLng().of([this[_coordinates][$first], this[_coordinates][$last]]));
        }
        let tempCoordinates = __t$ListOfT().from(this[_coordinates]);
        let path = new (T$.PathOfLatLng()).new();
        let remainingSteps = 0.0;
        let bearing = null;
        path.add(tempCoordinates[$first]);
        let baseStep = tempCoordinates[$first];
        for (let index = 0; index < this.coordinates[$length] - 1; index = index + 1) {
          let distance = (t0 = tempCoordinates[$_get](index), t1 = tempCoordinates[$_get](index + 1), this[_distance].call(t0, t1));
          bearing = this[_distance].bearing(tempCoordinates[$_get](index), tempCoordinates[$_get](index + 1));
          if (remainingSteps <= distance || stepDistance - remainingSteps <= distance) {
            let firstStepPos = stepDistance - remainingSteps;
            let steps = (distance - firstStepPos) / stepDistance + 1;
            let fullSteps = steps[$toInt]();
            remainingSteps = latlong.round(fullSteps > 0 ? steps[$modulo](fullSteps) : steps, {decimals: 6}) * stepDistance;
            baseStep = tempCoordinates[$_get](index);
            for (let stepCounter = 0; stepCounter < fullSteps; stepCounter = stepCounter + 1) {
              let tempStep = this[_distance].offset(baseStep, firstStepPos, bearing);
              let nextStep = (t0$ = tempStep.latitude, t1$ = tempStep.longitude, this[_latLngFactory](t0$, t1$));
              path.add(nextStep);
              firstStepPos = firstStepPos + stepDistance;
              if (smoothPath) {
                let spline = null;
                if (path.nrOfCoordinates === 3) {
                  spline = this[_createSpline](path._get(0), path._get(0), path._get(1), path._get(2));
                  path.coordinates[$insert](1, this[_pointToLatLng](spline.percentage(50)));
                } else if (path.nrOfCoordinates > 3) {
                  let baseIndex = path.nrOfCoordinates - 1;
                  spline = this[_createSpline](path._get(baseIndex - 3), path._get(baseIndex - 2), path._get(baseIndex - 1), path._get(baseIndex));
                  path.coordinates[$insert](baseIndex - 1, this[_pointToLatLng](spline.percentage(50)));
                }
              }
            }
          } else {
            remainingSteps = remainingSteps + distance;
          }
        }
        if (!baseStep.round()._equals(tempCoordinates[$last].round()) && !baseStep.round()._equals(tempCoordinates[$first].round()) && latlong.round((t0$0 = baseStep, t1$0 = tempCoordinates[$last], this[_distance].call(t0$0, t1$0))) > 1) {
          path.add(tempCoordinates[$last]);
        }
        if (smoothPath) {
          let baseIndex = path.nrOfCoordinates - 1;
          if (baseIndex > 3) {
            let spline = this[_createSpline](path._get(baseIndex - 3), path._get(baseIndex - 2), path._get(baseIndex - 1), path._get(baseIndex - 0));
            path.coordinates[$insert](baseIndex - 1, this[_pointToLatLng](spline.percentage(50)));
          }
          baseIndex = path.nrOfCoordinates - 1;
          if ((t0$1 = path._get(baseIndex - 1), t1$1 = path._get(baseIndex), this[_distance].call(t0$1, t1$1)) >= stepDistance) {
            let spline = this[_createSpline](path._get(baseIndex - 1), path._get(baseIndex - 1), path._get(baseIndex - 0), path._get(baseIndex - 0));
            path.coordinates[$insert](baseIndex, this[_pointToLatLng](spline.percentage(50)));
          }
        }
        return path;
      }
      get distance() {
        let t1, t0;
        let tempCoordinates = __t$ListOfT().from(this[_coordinates]);
        let length = 0.0;
        for (let index = 0; index < this.coordinates[$length] - 1; index = index + 1) {
          length = length + (t0 = tempCoordinates[$_get](index), t1 = tempCoordinates[$_get](index + 1), this[_distance].call(t0, t1));
        }
        return latlong.round(length);
      }
      get center() {
        let t1, t0;
        if (this.coordinates[$isEmpty]) {
          dart.throw(new core.AssertionError.new("Coordinates must not be empty!"));
        }
        let X = 0.0;
        let Y = 0.0;
        let Z = 0.0;
        let lat = null;
        let lon = null;
        let hyp = null;
        this.coordinates[$forEach](dart.fn(coordinate => {
          lat = coordinate.latitudeInRad;
          lon = coordinate.longitudeInRad;
          X = X + math.cos(lat) * math.cos(lon);
          Y = Y + math.cos(lat) * math.sin(lon);
          Z = Z + math.sin(lat);
        }, __t$TTovoid()));
        let nrOfCoordinates = this.coordinates[$length];
        X = X / nrOfCoordinates;
        Y = Y / nrOfCoordinates;
        Z = Z / nrOfCoordinates;
        lon = math.atan2(Y, X);
        hyp = math.sqrt(X * X + Y * Y);
        lat = math.atan2(Z, hyp);
        t0 = latlong.round(latlong.radianToDeg(lat));
        t1 = latlong.round(latlong.radianToDeg(lon));
        return this[_latLngFactory](t0, t1);
      }
      get nrOfCoordinates() {
        return this[_coordinates][$length];
      }
      _get(index) {
        return this[_coordinates][$elementAt](index);
      }
      [_createSpline](p0, p1, p2, p3) {
        return new (T$.CatmullRomSpline2DOfdouble()).new(new spline.Point2D.new(p0.latitude, p0.longitude), new spline.Point2D.new(p1.latitude, p1.longitude), new spline.Point2D.new(p2.latitude, p2.longitude), new spline.Point2D.new(p3.latitude, p3.longitude));
      }
      [_pointToLatLng](point) {
        let t1, t0;
        t0 = point.x;
        t1 = point.y;
        return this[_latLngFactory](t0, t1);
      }
    }
    (Path.new = function(opts) {
      let factory = opts && 'factory' in opts ? opts.factory : C[7] || CT.C7;
      this[_distance] = C[8] || CT.C8;
      this[_coordinates] = __t$JSArrayOfT().of([]);
      this[_latLngFactory] = factory;
      ;
    }).prototype = Path.prototype;
    (Path.from = function(coordinates, opts) {
      let factory = opts && 'factory' in opts ? opts.factory : C[7] || CT.C7;
      this[_distance] = C[8] || CT.C8;
      this[_coordinates] = __t$ListOfT().from(coordinates);
      this[_latLngFactory] = factory;
      ;
    }).prototype = Path.prototype;
    dart.addTypeTests(Path);
    Path.prototype[_is_Path_default] = true;
    dart.addTypeCaches(Path);
    dart.setMethodSignature(Path, () => ({
      __proto__: dart.getMethods(Path.__proto__),
      clear: dart.fnType(dart.void, []),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      equalize: dart.fnType(latlong.Path$(latlong.LatLng), [core.double], {smoothPath: core.bool}, {}),
      _get: dart.fnType(T, [core.int]),
      [_createSpline]: dart.fnType(spline.CatmullRomSpline2D$(core.double), [latlong.LatLng, latlong.LatLng, latlong.LatLng, latlong.LatLng]),
      [_pointToLatLng]: dart.fnType(latlong.LatLng, [spline.Point2D])
    }));
    dart.setGetterSignature(Path, () => ({
      __proto__: dart.getGetters(Path.__proto__),
      coordinates: core.List$(T),
      first: T,
      last: T,
      distance: core.double,
      center: latlong.LatLng,
      nrOfCoordinates: core.int
    }));
    dart.setLibraryUri(Path, I[0]);
    dart.setFieldSignature(Path, () => ({
      __proto__: dart.getFields(Path.__proto__),
      [_coordinates]: dart.finalFieldType(core.List$(T)),
      [_distance]: dart.finalFieldType(latlong.Distance),
      [_latLngFactory]: dart.finalFieldType(dart.fnType(latlong.LatLng, [core.double, core.double]))
    }));
    return Path;
  });
  latlong.Path = latlong.Path$();
  dart.addTypeTests(latlong.Path, _is_Path_default);
  var radius$ = dart.privateName(latlong, "Circle.radius");
  var center$ = dart.privateName(latlong, "Circle.center");
  latlong.Circle = class Circle extends core.Object {
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    static ['_#new#tearOff'](center, radius, opts) {
      let calculator = opts && 'calculator' in opts ? opts.calculator : C[0] || CT.C0;
      return new latlong.Circle.new(center, radius, {calculator: calculator});
    }
    isPointInside(point) {
      let distance = new latlong.Distance.new({calculator: this[_calculator$]});
      let dist = distance.call(this.center, point);
      return dist <= this.radius;
    }
  };
  (latlong.Circle.new = function(center, radius, opts) {
    let calculator = opts && 'calculator' in opts ? opts.calculator : C[0] || CT.C0;
    this[center$] = center;
    this[radius$] = radius;
    this[_calculator$] = calculator;
    ;
  }).prototype = latlong.Circle.prototype;
  dart.addTypeTests(latlong.Circle);
  dart.addTypeCaches(latlong.Circle);
  dart.setMethodSignature(latlong.Circle, () => ({
    __proto__: dart.getMethods(latlong.Circle.__proto__),
    isPointInside: dart.fnType(core.bool, [latlong.LatLng])
  }));
  dart.setLibraryUri(latlong.Circle, I[0]);
  dart.setFieldSignature(latlong.Circle, () => ({
    __proto__: dart.getFields(latlong.Circle.__proto__),
    radius: dart.finalFieldType(core.double),
    center: dart.finalFieldType(latlong.LatLng),
    [_calculator$]: dart.finalFieldType(latlong.DistanceCalculator)
  }));
  latlong.degToRadian = function degToRadian(deg) {
    return deg * (3.141592653589793 / 180.0);
  };
  latlong.radianToDeg = function radianToDeg(rad) {
    return rad * (180.0 / 3.141592653589793);
  };
  latlong.round = function round(value, opts) {
    let decimals = opts && 'decimals' in opts ? opts.decimals : 6;
    return (value * math.pow(10, decimals))[$round]() / math.pow(10, decimals);
  };
  latlong.normalizeBearing = function normalizeBearing(bearing) {
    return (bearing + 360)[$modulo](360);
  };
  latlong.decimal2sexagesimal = function decimal2sexagesimal(dec) {
    let buf = new core.StringBuffer.new();
    let absDec = dec[$abs]();
    let deg = absDec[$floor]();
    buf.write(deg[$toString]() + "°");
    let mins = (absDec - deg) * 60.0;
    let min = mins[$round]();
    buf.write(" " + latlong.zeroPad(min) + "'");
    let secs = (mins - mins[$floorToDouble]()) * 60.0;
    let sec = secs[$round]();
    let frac = ((secs - secs[$floorToDouble]()) * 100.0)[$round]();
    buf.write(" " + latlong.zeroPad(sec) + "." + latlong.zeroPad(frac) + "\"");
    return buf.toString();
  };
  latlong.zeroPad = function zeroPad(number) {
    return (number < 10 ? "0" : "") + number[$toString]();
  };
  latlong._defaultLatLngFactory = function _defaultLatLngFactory(latitude, longitude) {
    return new latlong.LatLng.new(latitude, longitude);
  };
  dart.defineLazy(latlong, {
    /*latlong.equatorRadius*/get equatorRadius() {
      return 6378137;
    },
    /*latlong.polarRadius*/get polarRadius() {
      return 6356752.314245;
    },
    /*latlong.flattening*/get flattening() {
      return 0.0033528106647474805;
    },
    /*latlong.earthRadius*/get earthRadius() {
      return 6378137;
    },
    /*latlong.pi*/get pi() {
      return 3.141592653589793;
    }
  }, false);
  dart.trackLibraries("packages/latlong2/latlong.dart", {
    "package:latlong2/latlong.dart": latlong
  }, {
    "package:latlong2/latlong.dart": ["latlong/interfaces.dart", "latlong/calculator/Haversine.dart", "latlong/calculator/Vincenty.dart", "latlong/Distance.dart", "latlong/LatLng.dart", "latlong/LengthUnit.dart", "latlong/Path.dart", "latlong/Circle.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["latlong/interfaces.dart","latlong/calculator/Haversine.dart","latlong/calculator/Vincenty.dart","latlong/Distance.dart","latlong/LatLng.dart","latlong/LengthUnit.dart","latlong/Path.dart","latlong/Circle.dart","latlong.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/latlong2/latlong.dart.lib.js"}');
  // Exports:
  return {
    latlong: latlong
  };
}));

//# sourceMappingURL=latlong.dart.lib.js.map
