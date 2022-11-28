define(['dart_sdk', 'packages/latlong2/latlong.dart'], (function load__packages__flutter_map__src__geo__latlng_bounds_dart(dart_sdk, packages__latlong2__latlong$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  var latlng_bounds = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $abs = dartx.abs;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_map/src/geo/latlng_bounds.dart"];
  var _sw = dart.privateName(latlng_bounds, "_sw");
  var _ne = dart.privateName(latlng_bounds, "_ne");
  var _extend = dart.privateName(latlng_bounds, "_extend");
  latlng_bounds.LatLngBounds = class LatLngBounds extends core.Object {
    static ['_#new#tearOff'](corner1 = null, corner2 = null) {
      return new latlng_bounds.LatLngBounds.new(corner1, corner2);
    }
    static ['_#fromPoints#tearOff'](points) {
      return new latlng_bounds.LatLngBounds.fromPoints(points);
    }
    extend(latlng) {
      if (latlng == null) {
        return;
      }
      this[_extend](latlng, latlng);
    }
    extendBounds(bounds) {
      this[_extend](bounds[_sw], bounds[_ne]);
    }
    [_extend](sw2, ne2) {
      if (this[_sw] == null && this[_ne] == null) {
        this[_sw] = new latlong.LatLng.new(dart.nullCheck(sw2).latitude, sw2.longitude);
        this[_ne] = new latlong.LatLng.new(dart.nullCheck(ne2).latitude, ne2.longitude);
      } else {
        dart.nullCheck(this[_sw]).latitude = math.min(core.double, dart.nullCheck(sw2).latitude, dart.nullCheck(this[_sw]).latitude);
        dart.nullCheck(this[_sw]).longitude = math.min(core.double, sw2.longitude, dart.nullCheck(this[_sw]).longitude);
        dart.nullCheck(this[_ne]).latitude = math.max(core.double, dart.nullCheck(ne2).latitude, dart.nullCheck(this[_ne]).latitude);
        dart.nullCheck(this[_ne]).longitude = math.max(core.double, ne2.longitude, dart.nullCheck(this[_ne]).longitude);
      }
    }
    get west() {
      return dart.nullCheck(this.southWest).longitude;
    }
    get south() {
      return dart.nullCheck(this.southWest).latitude;
    }
    get east() {
      return dart.nullCheck(this.northEast).longitude;
    }
    get north() {
      return dart.nullCheck(this.northEast).latitude;
    }
    get southWest() {
      return this[_sw];
    }
    get northEast() {
      return this[_ne];
    }
    get northWest() {
      return new latlong.LatLng.new(this.north, this.west);
    }
    get southEast() {
      return new latlong.LatLng.new(this.south, this.east);
    }
    get center() {
      let phi1 = dart.nullCheck(this.southWest).latitudeInRad;
      let lambda1 = dart.nullCheck(this.southWest).longitudeInRad;
      let phi2 = dart.nullCheck(this.northEast).latitudeInRad;
      let dLambda = latlong.degToRadian(dart.nullCheck(this.northEast).longitude - dart.nullCheck(this.southWest).longitude);
      let bx = math.cos(phi2) * math.cos(dLambda);
      let by = math.cos(phi2) * math.sin(dLambda);
      let phi3 = math.atan2(math.sin(phi1) + math.sin(phi2), math.sqrt((math.cos(phi1) + bx) * (math.cos(phi1) + bx) + by * by));
      let lambda3 = lambda1 + math.atan2(by, math.cos(phi1) + bx);
      return new latlong.LatLng.new(latlong.radianToDeg(phi3), latlong.radianToDeg(lambda3));
    }
    get isValid() {
      return this[_sw] != null && this[_ne] != null;
    }
    contains(point) {
      if (!this.isValid) {
        return false;
      }
      let sw2 = point;
      let ne2 = point;
      return this.containsBounds(new latlng_bounds.LatLngBounds.new(sw2, ne2));
    }
    containsBounds(bounds) {
      let sw2 = dart.nullCheck(bounds[_sw]);
      let ne2 = bounds[_ne];
      return sw2.latitude >= dart.nullCheck(this[_sw]).latitude && dart.nullCheck(ne2).latitude <= dart.nullCheck(this[_ne]).latitude && sw2.longitude >= dart.nullCheck(this[_sw]).longitude && ne2.longitude <= dart.nullCheck(this[_ne]).longitude;
    }
    isOverlapping(bounds) {
      if (!this.isValid) {
        return false;
      }
      if (dart.nullCheck(this[_sw]).latitude > dart.nullCheck(dart.nullCheck(bounds)[_ne]).latitude || dart.nullCheck(this[_ne]).latitude < dart.nullCheck(bounds[_sw]).latitude || dart.nullCheck(this[_ne]).longitude < dart.nullCheck(bounds[_sw]).longitude || dart.nullCheck(this[_sw]).longitude > dart.nullCheck(bounds[_ne]).longitude) {
        return false;
      }
      return true;
    }
    pad(bufferRatio) {
      let heightBuffer = (dart.nullCheck(this[_sw]).latitude - dart.nullCheck(this[_ne]).latitude)[$abs]() * bufferRatio;
      let widthBuffer = (dart.nullCheck(this[_sw]).longitude - dart.nullCheck(this[_ne]).longitude)[$abs]() * bufferRatio;
      this[_sw] = new latlong.LatLng.new(dart.nullCheck(this[_sw]).latitude - heightBuffer, dart.nullCheck(this[_sw]).longitude - widthBuffer);
      this[_ne] = new latlong.LatLng.new(dart.nullCheck(this[_ne]).latitude + heightBuffer, dart.nullCheck(this[_ne]).longitude + widthBuffer);
    }
    get hashCode() {
      return dart.hashCode(this[_sw]) + dart.hashCode(this[_ne]);
    }
    _equals(other) {
      if (other == null) return false;
      return latlng_bounds.LatLngBounds.is(other) && dart.equals(other[_sw], this[_sw]) && dart.equals(other[_ne], this[_ne]);
    }
  };
  (latlng_bounds.LatLngBounds.new = function(corner1 = null, corner2 = null) {
    this[_sw] = null;
    this[_ne] = null;
    this.extend(corner1);
    this.extend(corner2);
  }).prototype = latlng_bounds.LatLngBounds.prototype;
  (latlng_bounds.LatLngBounds.fromPoints = function(points) {
    this[_sw] = null;
    this[_ne] = null;
    if (points[$isNotEmpty]) {
      let minX = null;
      let maxX = null;
      let minY = null;
      let maxY = null;
      for (let point of points) {
        let x = point.longitudeInRad;
        let y = point.latitudeInRad;
        if (minX == null || dart.notNull(minX) > x) {
          minX = x;
        }
        if (minY == null || dart.notNull(minY) > y) {
          minY = y;
        }
        if (maxX == null || dart.notNull(maxX) < x) {
          maxX = x;
        }
        if (maxY == null || dart.notNull(maxY) < y) {
          maxY = y;
        }
      }
      this[_sw] = new latlong.LatLng.new(latlong.radianToDeg(dart.nullCast(minY, core.double)), latlong.radianToDeg(dart.nullCast(minX, core.double)));
      this[_ne] = new latlong.LatLng.new(latlong.radianToDeg(dart.nullCast(maxY, core.double)), latlong.radianToDeg(dart.nullCast(maxX, core.double)));
    }
  }).prototype = latlng_bounds.LatLngBounds.prototype;
  dart.addTypeTests(latlng_bounds.LatLngBounds);
  dart.addTypeCaches(latlng_bounds.LatLngBounds);
  dart.setMethodSignature(latlng_bounds.LatLngBounds, () => ({
    __proto__: dart.getMethods(latlng_bounds.LatLngBounds.__proto__),
    extend: dart.fnType(dart.void, [dart.nullable(latlong.LatLng)]),
    extendBounds: dart.fnType(dart.void, [latlng_bounds.LatLngBounds]),
    [_extend]: dart.fnType(dart.void, [dart.nullable(latlong.LatLng), dart.nullable(latlong.LatLng)]),
    contains: dart.fnType(core.bool, [dart.nullable(latlong.LatLng)]),
    containsBounds: dart.fnType(core.bool, [latlng_bounds.LatLngBounds]),
    isOverlapping: dart.fnType(core.bool, [dart.nullable(latlng_bounds.LatLngBounds)]),
    pad: dart.fnType(dart.void, [core.double])
  }));
  dart.setGetterSignature(latlng_bounds.LatLngBounds, () => ({
    __proto__: dart.getGetters(latlng_bounds.LatLngBounds.__proto__),
    west: core.double,
    south: core.double,
    east: core.double,
    north: core.double,
    southWest: dart.nullable(latlong.LatLng),
    northEast: dart.nullable(latlong.LatLng),
    northWest: latlong.LatLng,
    southEast: latlong.LatLng,
    center: latlong.LatLng,
    isValid: core.bool
  }));
  dart.setLibraryUri(latlng_bounds.LatLngBounds, I[0]);
  dart.setFieldSignature(latlng_bounds.LatLngBounds, () => ({
    __proto__: dart.getFields(latlng_bounds.LatLngBounds.__proto__),
    [_sw]: dart.fieldType(dart.nullable(latlong.LatLng)),
    [_ne]: dart.fieldType(dart.nullable(latlong.LatLng))
  }));
  dart.defineExtensionMethods(latlng_bounds.LatLngBounds, ['_equals']);
  dart.defineExtensionAccessors(latlng_bounds.LatLngBounds, ['hashCode']);
  dart.trackLibraries("packages/flutter_map/src/geo/latlng_bounds.dart", {
    "package:flutter_map/src/geo/latlng_bounds.dart": latlng_bounds
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["latlng_bounds.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/flutter_map/src/geo/latlng_bounds.dart.lib.js"}');
  // Exports:
  return {
    src__geo__latlng_bounds: latlng_bounds
  };
}));

//# sourceMappingURL=latlng_bounds.dart.lib.js.map
