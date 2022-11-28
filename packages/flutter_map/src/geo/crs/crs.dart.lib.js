define(['dart_sdk', 'packages/flutter_map/src/core/point.dart', 'packages/flutter_map/src/core/bounds.dart', 'packages/latlong2/latlong.dart', 'packages/tuple/tuple.dart', 'packages/proj4dart/src/classes/projection_tuple.dart', 'packages/proj4dart/src/classes/point.dart'], (function load__packages__flutter_map__src__geo__crs__crs_dart(dart_sdk, packages__flutter_map__src__core__point$46dart, packages__flutter_map__src__core__bounds$46dart, packages__latlong2__latlong$46dart, packages__tuple__tuple$46dart, packages__proj4dart__src__classes__projection_tuple$46dart, packages__proj4dart__src__classes__point$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const point = packages__flutter_map__src__core__point$46dart.src__core__point;
  const bounds = packages__flutter_map__src__core__bounds$46dart.src__core__bounds;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  const tuple = packages__tuple__tuple$46dart.tuple;
  const projection = packages__proj4dart__src__classes__projection_tuple$46dart.src__classes__projection;
  const point$ = packages__proj4dart__src__classes__point$46dart.src__classes__point;
  var crs = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $floor = dartx.floor;
  var $indexOf = dartx.indexOf;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    CustomPointOfnum: () => (T.CustomPointOfnum = dart.constFn(point.CustomPoint$(core.num)))(),
    BoundsOfnum: () => (T.BoundsOfnum = dart.constFn(bounds.Bounds$(core.num)))(),
    Tuple2Ofdouble$double: () => (T.Tuple2Ofdouble$double = dart.constFn(tuple.Tuple2$(core.double, core.double)))(),
    doubleTodouble: () => (T.doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))(),
    CustomPointOfnumToTransformation: () => (T.CustomPointOfnumToTransformation = dart.constFn(dart.fnType(crs.Transformation, [T.CustomPointOfnum()])))(),
    BoundsOfdouble: () => (T.BoundsOfdouble = dart.constFn(bounds.Bounds$(core.double)))(),
    CustomPointOfdouble: () => (T.CustomPointOfdouble = dart.constFn(point.CustomPoint$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: T.CustomPointOfnum().prototype,
        [Point_y]: 0,
        [Point_x]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: crs._LonLat.prototype
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: crs.Transformation.prototype,
        [Transformation_d]: 0,
        [Transformation_c]: -1,
        [Transformation_b]: 0,
        [Transformation_a]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: T.Tuple2Ofdouble$double().prototype,
        [Tuple2_item2]: 180,
        [Tuple2_item1]: -180
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: crs.SphericalMercator.prototype
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: crs.Transformation.prototype,
        [Transformation_d]: 0.5,
        [Transformation_c]: -2.495320233665337e-8,
        [Transformation_b]: 0.5,
        [Transformation_a]: 2.495320233665337e-8
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: crs.Transformation.prototype,
        [Transformation_d]: 0.5,
        [Transformation_c]: -0.005555555555555556,
        [Transformation_b]: 1,
        [Transformation_a]: 0.005555555555555556
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: T.CustomPointOfdouble().prototype,
        [Point_y]: -90,
        [Point_x]: -180
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: T.CustomPointOfdouble().prototype,
        [Point_y]: 90,
        [Point_x]: 180
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: T.CustomPointOfdouble().prototype,
        [Point_y]: -20037508.342789244,
        [Point_x]: -20037508.342789244
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: T.CustomPointOfdouble().prototype,
        [Point_y]: 20037508.342789244,
        [Point_x]: 20037508.342789244
      });
    }
  }, false);
  var C = Array(11).fill(void 0);
  var I = ["package:flutter_map/src/geo/crs/crs.dart"];
  var Point_y = dart.privateName(math, "Point.y");
  var Point_x = dart.privateName(math, "Point.x");
  crs.Crs = class Crs extends core.Object {
    latLngToPoint(latlng, zoom) {
      try {
        let projectedPoint = this.projection.project(latlng);
        let scale = this.scale(zoom);
        return this.transformation.transform(projectedPoint, scale[$toDouble]());
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          return C[0] || CT.C0;
        } else
          throw e$;
      }
    }
    pointToLatLng(point, zoom) {
      let scale = this.scale(zoom);
      let untransformedPoint = this.transformation.untransform(point, scale[$toDouble]());
      try {
        return this.projection.unproject(untransformedPoint);
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          return null;
        } else
          throw e$;
      }
    }
    scale(zoom) {
      return 256 * math.pow(2, zoom);
    }
    zoom(scale) {
      return math.log(scale / 256) / 0.6931471805599453;
    }
    getProjectedBounds(zoom) {
      if (this.infinite) return null;
      let b = dart.nullCheck(this.projection.bounds);
      let s = this.scale(zoom);
      let min = this.transformation.transform(b.min, s[$toDouble]());
      let max = this.transformation.transform(b.max, s[$toDouble]());
      return T.BoundsOfnum().new(min, max);
    }
  };
  (crs.Crs.new = function() {
    ;
  }).prototype = crs.Crs.prototype;
  dart.addTypeTests(crs.Crs);
  dart.addTypeCaches(crs.Crs);
  dart.setMethodSignature(crs.Crs, () => ({
    __proto__: dart.getMethods(crs.Crs.__proto__),
    latLngToPoint: dart.fnType(point.CustomPoint$(core.num), [latlong.LatLng, core.double]),
    pointToLatLng: dart.fnType(dart.nullable(latlong.LatLng), [point.CustomPoint$(core.num), core.double]),
    scale: dart.fnType(core.num, [core.double]),
    zoom: dart.fnType(core.num, [core.double]),
    getProjectedBounds: dart.fnType(dart.nullable(bounds.Bounds$(core.num)), [core.double])
  }));
  dart.setLibraryUri(crs.Crs, I[0]);
  var code = dart.privateName(crs, "CrsSimple.code");
  var projection$ = dart.privateName(crs, "CrsSimple.projection");
  var transformation = dart.privateName(crs, "CrsSimple.transformation");
  var Transformation_d = dart.privateName(crs, "Transformation.d");
  var Transformation_c = dart.privateName(crs, "Transformation.c");
  var Transformation_b = dart.privateName(crs, "Transformation.b");
  var Transformation_a = dart.privateName(crs, "Transformation.a");
  crs.CrsSimple = class CrsSimple extends crs.Crs {
    get code() {
      return this[code];
    }
    set code(value) {
      super.code = value;
    }
    get projection() {
      return this[projection$];
    }
    set projection(value) {
      super.projection = value;
    }
    get transformation() {
      return this[transformation];
    }
    set transformation(value) {
      super.transformation = value;
    }
    static ['_#new#tearOff']() {
      return new crs.CrsSimple.new();
    }
    get infinite() {
      return false;
    }
    get wrapLat() {
      return null;
    }
    get wrapLng() {
      return null;
    }
  };
  (crs.CrsSimple.new = function() {
    this[code] = "CRS.SIMPLE";
    this[projection$] = C[1] || CT.C1;
    this[transformation] = C[2] || CT.C2;
    crs.CrsSimple.__proto__.new.call(this);
    ;
  }).prototype = crs.CrsSimple.prototype;
  dart.addTypeTests(crs.CrsSimple);
  dart.addTypeCaches(crs.CrsSimple);
  dart.setGetterSignature(crs.CrsSimple, () => ({
    __proto__: dart.getGetters(crs.CrsSimple.__proto__),
    infinite: core.bool,
    wrapLat: dart.nullable(tuple.Tuple2$(core.double, core.double)),
    wrapLng: dart.nullable(tuple.Tuple2$(core.double, core.double))
  }));
  dart.setLibraryUri(crs.CrsSimple, I[0]);
  dart.setFieldSignature(crs.CrsSimple, () => ({
    __proto__: dart.getFields(crs.CrsSimple.__proto__),
    code: dart.finalFieldType(core.String),
    projection: dart.finalFieldType(crs.Projection),
    transformation: dart.finalFieldType(crs.Transformation)
  }));
  var wrapLng = dart.privateName(crs, "Earth.wrapLng");
  var wrapLat = dart.privateName(crs, "Earth.wrapLat");
  var Tuple2_item2 = dart.privateName(tuple, "Tuple2.item2");
  var Tuple2_item1 = dart.privateName(tuple, "Tuple2.item1");
  crs.Earth = class Earth extends crs.Crs {
    get wrapLng() {
      return this[wrapLng];
    }
    set wrapLng(value) {
      super.wrapLng = value;
    }
    get wrapLat() {
      return this[wrapLat];
    }
    set wrapLat(value) {
      super.wrapLat = value;
    }
    get infinite() {
      return false;
    }
  };
  (crs.Earth.new = function() {
    this[wrapLng] = C[3] || CT.C3;
    this[wrapLat] = null;
    crs.Earth.__proto__.new.call(this);
    ;
  }).prototype = crs.Earth.prototype;
  dart.addTypeTests(crs.Earth);
  dart.addTypeCaches(crs.Earth);
  dart.setGetterSignature(crs.Earth, () => ({
    __proto__: dart.getGetters(crs.Earth.__proto__),
    infinite: core.bool
  }));
  dart.setLibraryUri(crs.Earth, I[0]);
  dart.setFieldSignature(crs.Earth, () => ({
    __proto__: dart.getFields(crs.Earth.__proto__),
    wrapLng: dart.finalFieldType(tuple.Tuple2$(core.double, core.double)),
    wrapLat: dart.finalFieldType(dart.nullable(tuple.Tuple2$(core.double, core.double)))
  }));
  var code$ = dart.privateName(crs, "Epsg3857.code");
  var projection$0 = dart.privateName(crs, "Epsg3857.projection");
  var transformation$ = dart.privateName(crs, "Epsg3857.transformation");
  crs.Epsg3857 = class Epsg3857 extends crs.Earth {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get projection() {
      return this[projection$0];
    }
    set projection(value) {
      super.projection = value;
    }
    get transformation() {
      return this[transformation$];
    }
    set transformation(value) {
      super.transformation = value;
    }
    static ['_#new#tearOff']() {
      return new crs.Epsg3857.new();
    }
  };
  (crs.Epsg3857.new = function() {
    this[code$] = "EPSG:3857";
    this[projection$0] = C[4] || CT.C4;
    this[transformation$] = C[5] || CT.C5;
    crs.Epsg3857.__proto__.new.call(this);
    ;
  }).prototype = crs.Epsg3857.prototype;
  dart.addTypeTests(crs.Epsg3857);
  dart.addTypeCaches(crs.Epsg3857);
  dart.setLibraryUri(crs.Epsg3857, I[0]);
  dart.setFieldSignature(crs.Epsg3857, () => ({
    __proto__: dart.getFields(crs.Epsg3857.__proto__),
    code: dart.finalFieldType(core.String),
    projection: dart.finalFieldType(crs.Projection),
    transformation: dart.finalFieldType(crs.Transformation)
  }));
  dart.setStaticFieldSignature(crs.Epsg3857, () => ['_scale']);
  dart.defineLazy(crs.Epsg3857, {
    /*crs.Epsg3857._scale*/get _scale() {
      return 2.495320233665337e-8;
    }
  }, false);
  var code$0 = dart.privateName(crs, "Epsg4326.code");
  var projection$1 = dart.privateName(crs, "Epsg4326.projection");
  var transformation$0 = dart.privateName(crs, "Epsg4326.transformation");
  crs.Epsg4326 = class Epsg4326 extends crs.Earth {
    get code() {
      return this[code$0];
    }
    set code(value) {
      super.code = value;
    }
    get projection() {
      return this[projection$1];
    }
    set projection(value) {
      super.projection = value;
    }
    get transformation() {
      return this[transformation$0];
    }
    set transformation(value) {
      super.transformation = value;
    }
    static ['_#new#tearOff']() {
      return new crs.Epsg4326.new();
    }
  };
  (crs.Epsg4326.new = function() {
    this[code$0] = "EPSG:4326";
    this[projection$1] = C[1] || CT.C1;
    this[transformation$0] = C[6] || CT.C6;
    crs.Epsg4326.__proto__.new.call(this);
    ;
  }).prototype = crs.Epsg4326.prototype;
  dart.addTypeTests(crs.Epsg4326);
  dart.addTypeCaches(crs.Epsg4326);
  dart.setLibraryUri(crs.Epsg4326, I[0]);
  dart.setFieldSignature(crs.Epsg4326, () => ({
    __proto__: dart.getFields(crs.Epsg4326.__proto__),
    code: dart.finalFieldType(core.String),
    projection: dart.finalFieldType(crs.Projection),
    transformation: dart.finalFieldType(crs.Transformation)
  }));
  var code$1 = dart.privateName(crs, "Proj4Crs.code");
  var projection$2 = dart.privateName(crs, "Proj4Crs.projection");
  var transformation$1 = dart.privateName(crs, "Proj4Crs.transformation");
  var infinite$ = dart.privateName(crs, "Proj4Crs.infinite");
  var wrapLat$ = dart.privateName(crs, "Proj4Crs.wrapLat");
  var wrapLng$ = dart.privateName(crs, "Proj4Crs.wrapLng");
  var _transformations = dart.privateName(crs, "_transformations");
  var _scales = dart.privateName(crs, "_scales");
  var _getTransformationByZoom = dart.privateName(crs, "_getTransformationByZoom");
  var _closestElement = dart.privateName(crs, "_closestElement");
  crs.Proj4Crs = class Proj4Crs extends crs.Crs {
    get code() {
      return this[code$1];
    }
    set code(value) {
      super.code = value;
    }
    get projection() {
      return this[projection$2];
    }
    set projection(value) {
      super.projection = value;
    }
    get transformation() {
      return this[transformation$1];
    }
    set transformation(value) {
      super.transformation = value;
    }
    get infinite() {
      return this[infinite$];
    }
    set infinite(value) {
      super.infinite = value;
    }
    get wrapLat() {
      return this[wrapLat$];
    }
    set wrapLat(value) {
      super.wrapLat = value;
    }
    get wrapLng() {
      return this[wrapLng$];
    }
    set wrapLng(value) {
      super.wrapLng = value;
    }
    static ['_#_#tearOff'](opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let projection = opts && 'projection' in opts ? opts.projection : null;
      let transformation = opts && 'transformation' in opts ? opts.transformation : null;
      let infinite = opts && 'infinite' in opts ? opts.infinite : null;
      let transformations = opts && 'transformations' in opts ? opts.transformations : null;
      let scales = opts && 'scales' in opts ? opts.scales : null;
      return new crs.Proj4Crs.__({code: code, projection: projection, transformation: transformation, infinite: infinite, transformations: transformations, scales: scales});
    }
    static fromFactory(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let proj4Projection = opts && 'proj4Projection' in opts ? opts.proj4Projection : null;
      let transformation = opts && 'transformation' in opts ? opts.transformation : null;
      let origins = opts && 'origins' in opts ? opts.origins : null;
      let bounds = opts && 'bounds' in opts ? opts.bounds : null;
      let scales = opts && 'scales' in opts ? opts.scales : null;
      let resolutions = opts && 'resolutions' in opts ? opts.resolutions : null;
      let projection = new crs._Proj4Projection.new({proj4Projection: proj4Projection, bounds: bounds});
      let transformations = null;
      let infinite = bounds == null;
      let finalScales = null;
      if (scales != null && scales[$isNotEmpty]) {
        finalScales = scales;
      } else if (resolutions != null && resolutions[$isNotEmpty]) {
        finalScales = resolutions[$map](core.double, dart.fn(r => 1 / r, T.doubleTodouble()))[$toList]({growable: false});
      } else {
        dart.throw(core.Exception.new("Please provide scales or resolutions to determine scales"));
      }
      if (origins == null || origins[$isEmpty]) {
        transformation == null ? transformation = C[2] || CT.C2 : null;
      } else {
        if (origins[$length] === 1) {
          let origin = origins[$_get](0);
          transformation = new crs.Transformation.new(1, -origin.x, -1, origin.y);
        } else {
          transformations = origins[$map](crs.Transformation, dart.fn(p => new crs.Transformation.new(1, -p.x, -1, p.y), T.CustomPointOfnumToTransformation()))[$toList]();
          transformation = null;
        }
      }
      return new crs.Proj4Crs.__({code: code, projection: projection, transformation: dart.nullCheck(transformation), infinite: infinite, transformations: transformations, scales: finalScales});
    }
    static ['_#fromFactory#tearOff'](opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let proj4Projection = opts && 'proj4Projection' in opts ? opts.proj4Projection : null;
      let transformation = opts && 'transformation' in opts ? opts.transformation : null;
      let origins = opts && 'origins' in opts ? opts.origins : null;
      let bounds = opts && 'bounds' in opts ? opts.bounds : null;
      let scales = opts && 'scales' in opts ? opts.scales : null;
      let resolutions = opts && 'resolutions' in opts ? opts.resolutions : null;
      return crs.Proj4Crs.fromFactory({code: code, proj4Projection: proj4Projection, transformation: transformation, origins: origins, bounds: bounds, scales: scales, resolutions: resolutions});
    }
    latLngToPoint(latlng, zoom) {
      try {
        let projectedPoint = this.projection.project(latlng);
        let scale = this.scale(zoom);
        let transformation = this[_getTransformationByZoom](zoom);
        return transformation.transform(projectedPoint, scale[$toDouble]());
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          return C[0] || CT.C0;
        } else
          throw e$;
      }
    }
    pointToLatLng(point, zoom) {
      let scale = this.scale(zoom);
      let transformation = this[_getTransformationByZoom](zoom);
      let untransformedPoint = transformation.untransform(point, scale[$toDouble]());
      try {
        return this.projection.unproject(untransformedPoint);
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          return null;
        } else
          throw e$;
      }
    }
    getProjectedBounds(zoom) {
      if (this.infinite) return null;
      let b = dart.nullCheck(this.projection.bounds);
      let s = this.scale(zoom);
      let transformation = this[_getTransformationByZoom](zoom);
      let min = transformation.transform(b.min, s[$toDouble]());
      let max = transformation.transform(b.max, s[$toDouble]());
      return T.BoundsOfnum().new(min, max);
    }
    scale(zoom) {
      let iZoom = zoom[$floor]();
      if (zoom === iZoom) {
        return this[_scales][$_get](iZoom);
      } else {
        let baseScale = this[_scales][$_get](iZoom);
        let nextScale = this[_scales][$_get](iZoom + 1);
        let scaleDiff = nextScale - baseScale;
        let zDiff = zoom - iZoom;
        return baseScale + scaleDiff * zDiff;
      }
    }
    zoom(scale) {
      let downScale = this[_closestElement](this[_scales], scale);
      if (downScale == null) {
        return -1 / 0;
      }
      let downZoom = this[_scales][$indexOf](downScale);
      if (scale === downScale) {
        return downZoom;
      }
      let nextZoom = downZoom + 1;
      let nextScale = this[_scales][$_get](nextZoom);
      let scaleDiff = nextScale - dart.notNull(downScale);
      return (scale - dart.notNull(downScale)) / scaleDiff + downZoom;
    }
    [_closestElement](array, element) {
      let low = null;
      for (let i = array[$length] - 1; i >= 0; i = i - 1) {
        let curr = array[$_get](i);
        if (curr <= element && (low == null || dart.notNull(low) < curr)) {
          low = curr;
        }
      }
      return low;
    }
    [_getTransformationByZoom](zoom) {
      if (this[_transformations] == null) {
        return this.transformation;
      }
      let iZoom = zoom[$round]();
      let lastIdx = dart.nullCheck(this[_transformations])[$length] - 1;
      return dart.nullCheck(this[_transformations])[$_get](iZoom > lastIdx ? lastIdx : iZoom);
    }
  };
  (crs.Proj4Crs.__ = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let projection = opts && 'projection' in opts ? opts.projection : null;
    let transformation = opts && 'transformation' in opts ? opts.transformation : null;
    let infinite = opts && 'infinite' in opts ? opts.infinite : null;
    let transformations = opts && 'transformations' in opts ? opts.transformations : null;
    let scales = opts && 'scales' in opts ? opts.scales : null;
    this[wrapLat$] = null;
    this[wrapLng$] = null;
    this[code$1] = code;
    this[projection$2] = projection;
    this[transformation$1] = transformation;
    this[infinite$] = infinite;
    this[_transformations] = transformations;
    this[_scales] = scales;
    crs.Proj4Crs.__proto__.new.call(this);
    ;
  }).prototype = crs.Proj4Crs.prototype;
  dart.addTypeTests(crs.Proj4Crs);
  dart.addTypeCaches(crs.Proj4Crs);
  dart.setMethodSignature(crs.Proj4Crs, () => ({
    __proto__: dart.getMethods(crs.Proj4Crs.__proto__),
    [_closestElement]: dart.fnType(dart.nullable(core.double), [core.List$(core.double), core.double]),
    [_getTransformationByZoom]: dart.fnType(crs.Transformation, [core.double])
  }));
  dart.setStaticMethodSignature(crs.Proj4Crs, () => ['fromFactory']);
  dart.setLibraryUri(crs.Proj4Crs, I[0]);
  dart.setFieldSignature(crs.Proj4Crs, () => ({
    __proto__: dart.getFields(crs.Proj4Crs.__proto__),
    code: dart.finalFieldType(core.String),
    projection: dart.finalFieldType(crs.Projection),
    transformation: dart.finalFieldType(crs.Transformation),
    infinite: dart.finalFieldType(core.bool),
    wrapLat: dart.finalFieldType(dart.nullable(tuple.Tuple2$(core.double, core.double))),
    wrapLng: dart.finalFieldType(dart.nullable(tuple.Tuple2$(core.double, core.double))),
    [_transformations]: dart.finalFieldType(dart.nullable(core.List$(crs.Transformation))),
    [_scales]: dart.finalFieldType(core.List$(core.double))
  }));
  var _inclusive = dart.privateName(crs, "_inclusive");
  crs.Projection = class Projection extends core.Object {
    [_inclusive](start, end, value) {
      if (value < start) return start;
      if (value > end) return end;
      return value;
    }
    inclusiveLat(value) {
      return this[_inclusive](-90.0, 90.0, value);
    }
    inclusiveLng(value) {
      return this[_inclusive](-180.0, 180.0, value);
    }
  };
  (crs.Projection.new = function() {
    ;
  }).prototype = crs.Projection.prototype;
  dart.addTypeTests(crs.Projection);
  dart.addTypeCaches(crs.Projection);
  dart.setMethodSignature(crs.Projection, () => ({
    __proto__: dart.getMethods(crs.Projection.__proto__),
    [_inclusive]: dart.fnType(core.double, [core.double, core.double, core.double]),
    inclusiveLat: dart.fnType(core.double, [core.double]),
    inclusiveLng: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(crs.Projection, I[0]);
  crs._LonLat = class _LonLat extends crs.Projection {
    static ['_#new#tearOff']() {
      return new crs._LonLat.new();
    }
    get bounds() {
      return crs._LonLat._bounds;
    }
    project(latlng) {
      return new (T.CustomPointOfnum()).new(latlng.longitude, latlng.latitude);
    }
    unproject(point) {
      return new latlong.LatLng.new(this.inclusiveLat(point.y), this.inclusiveLng(point.x));
    }
  };
  (crs._LonLat.new = function() {
    crs._LonLat.__proto__.new.call(this);
    ;
  }).prototype = crs._LonLat.prototype;
  dart.addTypeTests(crs._LonLat);
  dart.addTypeCaches(crs._LonLat);
  dart.setMethodSignature(crs._LonLat, () => ({
    __proto__: dart.getMethods(crs._LonLat.__proto__),
    project: dart.fnType(point.CustomPoint$(core.num), [latlong.LatLng]),
    unproject: dart.fnType(latlong.LatLng, [point.CustomPoint$(core.num)])
  }));
  dart.setGetterSignature(crs._LonLat, () => ({
    __proto__: dart.getGetters(crs._LonLat.__proto__),
    bounds: bounds.Bounds$(core.double)
  }));
  dart.setLibraryUri(crs._LonLat, I[0]);
  dart.setStaticFieldSignature(crs._LonLat, () => ['_bounds']);
  dart.defineLazy(crs._LonLat, {
    /*crs._LonLat._bounds*/get _bounds() {
      return T.BoundsOfdouble().new(C[7] || CT.C7, C[8] || CT.C8);
    }
  }, false);
  crs.SphericalMercator = class SphericalMercator extends crs.Projection {
    static ['_#new#tearOff']() {
      return new crs.SphericalMercator.new();
    }
    get bounds() {
      return crs.SphericalMercator._bounds;
    }
    project(latlng) {
      let lat = math.max(core.double, math.min(core.double, 85.0511287798, latlng.latitude), -85.0511287798);
      let sin = math.sin(lat * 0.017453292519943295);
      return new (T.CustomPointOfnum()).new(6378137 * latlng.longitude * 0.017453292519943295, 6378137 * math.log((1 + sin) / (1 - sin)) / 2);
    }
    unproject(point) {
      return new latlong.LatLng.new(this.inclusiveLat((2 * math.atan(math.exp(point.y / 6378137)) - 3.141592653589793 / 2) * 57.29577951308232), this.inclusiveLng(point.x * 57.29577951308232 / 6378137));
    }
  };
  (crs.SphericalMercator.new = function() {
    crs.SphericalMercator.__proto__.new.call(this);
    ;
  }).prototype = crs.SphericalMercator.prototype;
  dart.addTypeTests(crs.SphericalMercator);
  dart.addTypeCaches(crs.SphericalMercator);
  dart.setMethodSignature(crs.SphericalMercator, () => ({
    __proto__: dart.getMethods(crs.SphericalMercator.__proto__),
    project: dart.fnType(point.CustomPoint$(core.num), [latlong.LatLng]),
    unproject: dart.fnType(latlong.LatLng, [point.CustomPoint$(core.num)])
  }));
  dart.setGetterSignature(crs.SphericalMercator, () => ({
    __proto__: dart.getGetters(crs.SphericalMercator.__proto__),
    bounds: bounds.Bounds$(core.double)
  }));
  dart.setLibraryUri(crs.SphericalMercator, I[0]);
  dart.setStaticFieldSignature(crs.SphericalMercator, () => ['r', 'maxLatitude', '_boundsD', '_bounds']);
  dart.defineLazy(crs.SphericalMercator, {
    /*crs.SphericalMercator.r*/get r() {
      return 6378137;
    },
    /*crs.SphericalMercator.maxLatitude*/get maxLatitude() {
      return 85.0511287798;
    },
    /*crs.SphericalMercator._boundsD*/get _boundsD() {
      return 20037508.342789244;
    },
    /*crs.SphericalMercator._bounds*/get _bounds() {
      return T.BoundsOfdouble().new(C[9] || CT.C9, C[10] || CT.C10);
    }
  }, false);
  var bounds$ = dart.privateName(crs, "_Proj4Projection.bounds");
  crs._Proj4Projection = class _Proj4Projection extends crs.Projection {
    get bounds() {
      return this[bounds$];
    }
    set bounds(value) {
      super.bounds = value;
    }
    static ['_#new#tearOff'](opts) {
      let proj4Projection = opts && 'proj4Projection' in opts ? opts.proj4Projection : null;
      let bounds = opts && 'bounds' in opts ? opts.bounds : null;
      return new crs._Proj4Projection.new({proj4Projection: proj4Projection, bounds: bounds});
    }
    project(latlng) {
      let point = this.epsg4326.transform(this.proj4Projection, new point$.Point.new({x: latlng.longitude, y: latlng.latitude}));
      return new (T.CustomPointOfnum()).new(point.x, point.y);
    }
    unproject(point) {
      let point2 = this.proj4Projection.transform(this.epsg4326, new point$.Point.new({x: point.x, y: point.y}));
      return new latlong.LatLng.new(this.inclusiveLat(point2.y), this.inclusiveLng(point2.x));
    }
  };
  (crs._Proj4Projection.new = function(opts) {
    let proj4Projection = opts && 'proj4Projection' in opts ? opts.proj4Projection : null;
    let bounds = opts && 'bounds' in opts ? opts.bounds : null;
    this.proj4Projection = proj4Projection;
    this[bounds$] = bounds;
    this.epsg4326 = projection.Projection.WGS84;
    crs._Proj4Projection.__proto__.new.call(this);
    ;
  }).prototype = crs._Proj4Projection.prototype;
  dart.addTypeTests(crs._Proj4Projection);
  dart.addTypeCaches(crs._Proj4Projection);
  dart.setMethodSignature(crs._Proj4Projection, () => ({
    __proto__: dart.getMethods(crs._Proj4Projection.__proto__),
    project: dart.fnType(point.CustomPoint$(core.num), [latlong.LatLng]),
    unproject: dart.fnType(latlong.LatLng, [point.CustomPoint$(core.num)])
  }));
  dart.setLibraryUri(crs._Proj4Projection, I[0]);
  dart.setFieldSignature(crs._Proj4Projection, () => ({
    __proto__: dart.getFields(crs._Proj4Projection.__proto__),
    epsg4326: dart.finalFieldType(projection.Projection),
    proj4Projection: dart.finalFieldType(projection.Projection),
    bounds: dart.finalFieldType(dart.nullable(bounds.Bounds$(core.double)))
  }));
  const a$ = Transformation_a;
  const b$ = Transformation_b;
  const c$ = Transformation_c;
  const d$ = Transformation_d;
  crs.Transformation = class Transformation extends core.Object {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    static ['_#new#tearOff'](a, b, c, d) {
      return new crs.Transformation.new(a, b, c, d);
    }
    transform(point, scale) {
      scale == null ? scale = 1.0 : null;
      let x = dart.notNull(scale) * (this.a * point.x + this.b);
      let y = dart.notNull(scale) * (this.c * point.y + this.d);
      return new (T.CustomPointOfnum()).new(x, y);
    }
    untransform(point, scale) {
      scale == null ? scale = 1.0 : null;
      let x = (point.x / dart.notNull(scale) - this.b) / this.a;
      let y = (point.y / dart.notNull(scale) - this.d) / this.c;
      return new (T.CustomPointOfnum()).new(x, y);
    }
  };
  (crs.Transformation.new = function(a, b, c, d) {
    this[a$] = a;
    this[b$] = b;
    this[c$] = c;
    this[d$] = d;
    ;
  }).prototype = crs.Transformation.prototype;
  dart.addTypeTests(crs.Transformation);
  dart.addTypeCaches(crs.Transformation);
  dart.setMethodSignature(crs.Transformation, () => ({
    __proto__: dart.getMethods(crs.Transformation.__proto__),
    transform: dart.fnType(point.CustomPoint$(core.num), [point.CustomPoint$(core.num), dart.nullable(core.double)]),
    untransform: dart.fnType(point.CustomPoint$(core.num), [point.CustomPoint$(core.num), dart.nullable(core.double)])
  }));
  dart.setLibraryUri(crs.Transformation, I[0]);
  dart.setFieldSignature(crs.Transformation, () => ({
    __proto__: dart.getFields(crs.Transformation.__proto__),
    a: dart.finalFieldType(core.num),
    b: dart.finalFieldType(core.num),
    c: dart.finalFieldType(core.num),
    d: dart.finalFieldType(core.num)
  }));
  dart.trackLibraries("packages/flutter_map/src/geo/crs/crs.dart", {
    "package:flutter_map/src/geo/crs/crs.dart": crs
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["crs.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../../packages/flutter_map/src/geo/crs/crs.dart.lib.js"}');
  // Exports:
  return {
    src__geo__crs__crs: crs
  };
}));

//# sourceMappingURL=crs.dart.lib.js.map
