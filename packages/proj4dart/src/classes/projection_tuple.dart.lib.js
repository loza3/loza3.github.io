define(['dart_sdk', 'packages/proj4dart/src/classes/point.dart', 'packages/proj4dart/src/classes/proj_params.dart', 'packages/wkt_parser/wkt_parser.dart', 'packages/proj4dart/src/globals/nadgrid_store.dart', 'packages/wkt_parser/src/proj_wkt.dart', 'packages/proj4dart/src/classes/datum.dart', 'packages/proj4dart/src/constants/faces.dart', 'packages/proj4dart/src/constants/areas.dart', 'packages/proj4dart/src/common/datum_utils.dart'], (function load__packages__proj4dart__src__classes__projection_tuple_dart(dart_sdk, packages__proj4dart__src__classes__point$46dart, packages__proj4dart__src__classes__proj_params$46dart, packages__wkt_parser__wkt_parser$46dart, packages__proj4dart__src__globals__nadgrid_store$46dart, packages__wkt_parser__src__proj_wkt$46dart, packages__proj4dart__src__classes__datum$46dart, packages__proj4dart__src__constants__faces$46dart, packages__proj4dart__src__constants__areas$46dart, packages__proj4dart__src__common__datum_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const point$ = packages__proj4dart__src__classes__point$46dart.src__classes__point;
  const proj_params = packages__proj4dart__src__classes__proj_params$46dart.src__classes__proj_params;
  const wkt_parser = packages__wkt_parser__wkt_parser$46dart.wkt_parser;
  const nadgrid = packages__proj4dart__src__globals__nadgrid_store$46dart.src__classes__nadgrid;
  const proj_wkt = packages__wkt_parser__src__proj_wkt$46dart.src__proj_wkt;
  const datum = packages__proj4dart__src__classes__datum$46dart.src__classes__datum;
  const faces = packages__proj4dart__src__constants__faces$46dart.src__constants__faces;
  const areas = packages__proj4dart__src__constants__areas$46dart.src__constants__areas;
  const datum_utils = packages__proj4dart__src__common__datum_utils$46dart.src__common__datum_utils;
  var projection_tuple = Object.create(dart.library);
  var vandg = Object.create(dart.library);
  var utm = Object.create(dart.library);
  var tmerc = Object.create(dart.library);
  var sterea = Object.create(dart.library);
  var stere = Object.create(dart.library);
  var somerc = Object.create(dart.library);
  var sinu = Object.create(dart.library);
  var robin = Object.create(dart.library);
  var qsc = Object.create(dart.library);
  var poly = Object.create(dart.library);
  var ortho = Object.create(dart.library);
  var omerc = Object.create(dart.library);
  var nzmg = Object.create(dart.library);
  var moll = Object.create(dart.library);
  var mill = Object.create(dart.library);
  var merc = Object.create(dart.library);
  var longlat = Object.create(dart.library);
  var lcc = Object.create(dart.library);
  var laea = Object.create(dart.library);
  var krovak = Object.create(dart.library);
  var gstmerc = Object.create(dart.library);
  var gnom = Object.create(dart.library);
  var geocent = Object.create(dart.library);
  var gauss = Object.create(dart.library);
  var etmerc = Object.create(dart.library);
  var eqdc = Object.create(dart.library);
  var eqc = Object.create(dart.library);
  var cea = Object.create(dart.library);
  var cass = Object.create(dart.library);
  var aeqd = Object.create(dart.library);
  var aea = Object.create(dart.library);
  var initializers = Object.create(dart.library);
  var projection_store = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var datum_transform = Object.create(dart.library);
  var projection = Object.create(dart.library);
  var proj4dart = Object.create(dart.library);
  var $abs = dartx.abs;
  var $_get = dartx._get;
  var $contains = dartx.contains;
  var $isNaN = dartx.isNaN;
  var $_set = dartx._set;
  var $floor = dartx.floor;
  var $isEmpty = dartx.isEmpty;
  var $addAll = dartx.addAll;
  var $clear = dartx.clear;
  var $containsKey = dartx.containsKey;
  var $length = dartx.length;
  var $isFinite = dartx.isFinite;
  var $add = dartx.add;
  var $floorToDouble = dartx.floorToDouble;
  var $toInt = dartx.toInt;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    dynamicTodouble: () => (T.dynamicTodouble = dart.constFn(dart.fnType(core.double, [dart.dynamic])))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    JSArrayOfListOfdouble: () => (T.JSArrayOfListOfdouble = dart.constFn(_interceptors.JSArray$(T.ListOfdouble())))(),
    IdentityMapOfString$int: () => (T.IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))(),
    IdentityMapOfString$double: () => (T.IdentityMapOfString$double = dart.constFn(_js_helper.IdentityMap$(core.String, core.double)))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    ProjParamsToProjection: () => (T.ProjParamsToProjection = dart.constFn(dart.fnType(projection.Projection, [proj_params.ProjParams])))(),
    LinkedHashMapOfString$ProjParamsToProjection: () => (T.LinkedHashMapOfString$ProjParamsToProjection = dart.constFn(collection.LinkedHashMap$(core.String, T.ProjParamsToProjection())))(),
    IdentityMapOfString$ProjParamsToProjection: () => (T.IdentityMapOfString$ProjParamsToProjection = dart.constFn(_js_helper.IdentityMap$(core.String, T.ProjParamsToProjection())))(),
    ProjParamsToPseudoMercatorProjection: () => (T.ProjParamsToPseudoMercatorProjection = dart.constFn(dart.fnType(merc.PseudoMercatorProjection, [proj_params.ProjParams])))(),
    ProjParamsToLongLat: () => (T.ProjParamsToLongLat = dart.constFn(dart.fnType(longlat.LongLat, [proj_params.ProjParams])))(),
    ProjParamsToSwissObliqueMercatorProjection: () => (T.ProjParamsToSwissObliqueMercatorProjection = dart.constFn(dart.fnType(somerc.SwissObliqueMercatorProjection, [proj_params.ProjParams])))(),
    ProjParamsToAlbersProjection: () => (T.ProjParamsToAlbersProjection = dart.constFn(dart.fnType(aea.AlbersProjection, [proj_params.ProjParams])))(),
    ProjParamsToAzimuthalEquidistantProjection: () => (T.ProjParamsToAzimuthalEquidistantProjection = dart.constFn(dart.fnType(aeqd.AzimuthalEquidistantProjection, [proj_params.ProjParams])))(),
    ProjParamsToCassiniProjection: () => (T.ProjParamsToCassiniProjection = dart.constFn(dart.fnType(cass.CassiniProjection, [proj_params.ProjParams])))(),
    ProjParamsToCentralCylindricalProjection: () => (T.ProjParamsToCentralCylindricalProjection = dart.constFn(dart.fnType(cea.CentralCylindricalProjection, [proj_params.ProjParams])))(),
    ProjParamsToEquidistantCylindricalProjection: () => (T.ProjParamsToEquidistantCylindricalProjection = dart.constFn(dart.fnType(eqc.EquidistantCylindricalProjection, [proj_params.ProjParams])))(),
    ProjParamsToEquidistantConicProjection: () => (T.ProjParamsToEquidistantConicProjection = dart.constFn(dart.fnType(eqdc.EquidistantConicProjection, [proj_params.ProjParams])))(),
    ProjParamsToExtendedTransverseMercatorProjection: () => (T.ProjParamsToExtendedTransverseMercatorProjection = dart.constFn(dart.fnType(etmerc.ExtendedTransverseMercatorProjection, [proj_params.ProjParams])))(),
    ProjParamsToUniversalTransverseMercatorProjection: () => (T.ProjParamsToUniversalTransverseMercatorProjection = dart.constFn(dart.fnType(utm.UniversalTransverseMercatorProjection, [proj_params.ProjParams])))(),
    ProjParamsToVanDerGrintenProjection: () => (T.ProjParamsToVanDerGrintenProjection = dart.constFn(dart.fnType(vandg.VanDerGrintenProjection, [proj_params.ProjParams])))(),
    ProjParamsToGaussProjection: () => (T.ProjParamsToGaussProjection = dart.constFn(dart.fnType(gauss.GaussProjection, [proj_params.ProjParams])))(),
    ProjParamsToStereographicNorthProjection: () => (T.ProjParamsToStereographicNorthProjection = dart.constFn(dart.fnType(sterea.StereographicNorthProjection, [proj_params.ProjParams])))(),
    ProjParamsToStereographicSouthProjection: () => (T.ProjParamsToStereographicSouthProjection = dart.constFn(dart.fnType(stere.StereographicSouthProjection, [proj_params.ProjParams])))(),
    ProjParamsToSinusoidalProjection: () => (T.ProjParamsToSinusoidalProjection = dart.constFn(dart.fnType(sinu.SinusoidalProjection, [proj_params.ProjParams])))(),
    ProjParamsToRobinsonProjection: () => (T.ProjParamsToRobinsonProjection = dart.constFn(dart.fnType(robin.RobinsonProjection, [proj_params.ProjParams])))(),
    ProjParamsToGeocentricProjection: () => (T.ProjParamsToGeocentricProjection = dart.constFn(dart.fnType(geocent.GeocentricProjection, [proj_params.ProjParams])))(),
    ProjParamsToGnomicProjection: () => (T.ProjParamsToGnomicProjection = dart.constFn(dart.fnType(gnom.GnomicProjection, [proj_params.ProjParams])))(),
    ProjParamsToGaussSchreiberTransverseMercatorProjection: () => (T.ProjParamsToGaussSchreiberTransverseMercatorProjection = dart.constFn(dart.fnType(gstmerc.GaussSchreiberTransverseMercatorProjection, [proj_params.ProjParams])))(),
    ProjParamsToKrovakProjection: () => (T.ProjParamsToKrovakProjection = dart.constFn(dart.fnType(krovak.KrovakProjection, [proj_params.ProjParams])))(),
    ProjParamsToLambertAzimuthalEqualAreaProjection: () => (T.ProjParamsToLambertAzimuthalEqualAreaProjection = dart.constFn(dart.fnType(laea.LambertAzimuthalEqualAreaProjection, [proj_params.ProjParams])))(),
    ProjParamsToLambertConformalConicProjection: () => (T.ProjParamsToLambertConformalConicProjection = dart.constFn(dart.fnType(lcc.LambertConformalConicProjection, [proj_params.ProjParams])))(),
    ProjParamsToMillerCylindricalProjection: () => (T.ProjParamsToMillerCylindricalProjection = dart.constFn(dart.fnType(mill.MillerCylindricalProjection, [proj_params.ProjParams])))(),
    ProjParamsToMollweideProjection: () => (T.ProjParamsToMollweideProjection = dart.constFn(dart.fnType(moll.MollweideProjection, [proj_params.ProjParams])))(),
    ProjParamsToNewZealandMapGridProjection: () => (T.ProjParamsToNewZealandMapGridProjection = dart.constFn(dart.fnType(nzmg.NewZealandMapGridProjection, [proj_params.ProjParams])))(),
    ProjParamsToHotineObliqueMercatorProjection: () => (T.ProjParamsToHotineObliqueMercatorProjection = dart.constFn(dart.fnType(omerc.HotineObliqueMercatorProjection, [proj_params.ProjParams])))(),
    ProjParamsToOrthographicProjection: () => (T.ProjParamsToOrthographicProjection = dart.constFn(dart.fnType(ortho.OrthographicProjection, [proj_params.ProjParams])))(),
    ProjParamsToPolyconicProjection: () => (T.ProjParamsToPolyconicProjection = dart.constFn(dart.fnType(poly.PolyconicProjection, [proj_params.ProjParams])))(),
    ProjParamsToQuadrilateralizedSphericalCubeProjection: () => (T.ProjParamsToQuadrilateralizedSphericalCubeProjection = dart.constFn(dart.fnType(qsc.QuadrilateralizedSphericalCubeProjection, [proj_params.ProjParams])))(),
    ProjParamsToTransverseMercatorProjection: () => (T.ProjParamsToTransverseMercatorProjection = dart.constFn(dart.fnType(tmerc.TransverseMercatorProjection, [proj_params.ProjParams])))(),
    IdentityMapOfString$Projection: () => (T.IdentityMapOfString$Projection = dart.constFn(_js_helper.IdentityMap$(core.String, projection.Projection)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:proj4dart/src/classes/projection_tuple.dart",
    "package:proj4dart/src/classes/projection.dart",
    "package:proj4dart/src/projections/vandg.dart",
    "package:proj4dart/src/projections/etmerc.dart",
    "package:proj4dart/src/projections/utm.dart",
    "package:proj4dart/src/projections/tmerc.dart",
    "package:proj4dart/src/projections/gauss.dart",
    "package:proj4dart/src/projections/sterea.dart",
    "package:proj4dart/src/projections/stere.dart",
    "package:proj4dart/src/projections/somerc.dart",
    "package:proj4dart/src/projections/sinu.dart",
    "package:proj4dart/src/projections/robin.dart",
    "package:proj4dart/src/projections/qsc.dart",
    "package:proj4dart/src/projections/poly.dart",
    "package:proj4dart/src/projections/ortho.dart",
    "package:proj4dart/src/projections/omerc.dart",
    "package:proj4dart/src/projections/nzmg.dart",
    "package:proj4dart/src/projections/moll.dart",
    "package:proj4dart/src/projections/mill.dart",
    "package:proj4dart/src/projections/merc.dart",
    "package:proj4dart/src/projections/longlat.dart",
    "package:proj4dart/src/projections/lcc.dart",
    "package:proj4dart/src/projections/laea.dart",
    "package:proj4dart/src/projections/krovak.dart",
    "package:proj4dart/src/projections/gstmerc.dart",
    "package:proj4dart/src/projections/gnom.dart",
    "package:proj4dart/src/projections/geocent.dart",
    "package:proj4dart/src/projections/eqdc.dart",
    "package:proj4dart/src/projections/eqc.dart",
    "package:proj4dart/src/projections/cea.dart",
    "package:proj4dart/src/projections/cass.dart",
    "package:proj4dart/src/projections/aeqd.dart",
    "package:proj4dart/src/projections/aea.dart",
    "package:proj4dart/src/globals/projection_store.dart"
  ];
  var fromProj$ = dart.privateName(projection_tuple, "ProjectionTuple.fromProj");
  var toProj$ = dart.privateName(projection_tuple, "ProjectionTuple.toProj");
  projection_tuple.ProjectionTuple = class ProjectionTuple extends core.Object {
    get fromProj() {
      return this[fromProj$];
    }
    set fromProj(value) {
      super.fromProj = value;
    }
    get toProj() {
      return this[toProj$];
    }
    set toProj(value) {
      super.toProj = value;
    }
    static ['_#new#tearOff'](opts) {
      let fromProj = opts && 'fromProj' in opts ? opts.fromProj : null;
      let toProj = opts && 'toProj' in opts ? opts.toProj : null;
      return new projection_tuple.ProjectionTuple.new({fromProj: fromProj, toProj: toProj});
    }
    forward(point) {
      return this.fromProj.transform(this.toProj, point);
    }
    inverse(point) {
      return this.toProj.transform(this.fromProj, point);
    }
  };
  (projection_tuple.ProjectionTuple.new = function(opts) {
    let fromProj = opts && 'fromProj' in opts ? opts.fromProj : null;
    let toProj = opts && 'toProj' in opts ? opts.toProj : null;
    this[fromProj$] = fromProj;
    this[toProj$] = toProj;
    ;
  }).prototype = projection_tuple.ProjectionTuple.prototype;
  dart.addTypeTests(projection_tuple.ProjectionTuple);
  dart.addTypeCaches(projection_tuple.ProjectionTuple);
  dart.setMethodSignature(projection_tuple.ProjectionTuple, () => ({
    __proto__: dart.getMethods(projection_tuple.ProjectionTuple.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setLibraryUri(projection_tuple.ProjectionTuple, I[0]);
  dart.setFieldSignature(projection_tuple.ProjectionTuple, () => ({
    __proto__: dart.getFields(projection_tuple.ProjectionTuple.__proto__),
    fromProj: dart.finalFieldType(projection.Projection),
    toProj: dart.finalFieldType(projection.Projection)
  }));
  var __VanDerGrintenProjection_R = dart.privateName(vandg, "_#VanDerGrintenProjection#R");
  var __VanDerGrintenProjection_long0 = dart.privateName(vandg, "_#VanDerGrintenProjection#long0");
  var __VanDerGrintenProjection_x0 = dart.privateName(vandg, "_#VanDerGrintenProjection#x0");
  var __VanDerGrintenProjection_y0 = dart.privateName(vandg, "_#VanDerGrintenProjection#y0");
  var projName = dart.privateName(projection, "Projection.projName");
  var ellps = dart.privateName(projection, "Projection.ellps");
  var noDefs = dart.privateName(projection, "Projection.noDefs");
  var k0 = dart.privateName(projection, "Projection.k0");
  var axis = dart.privateName(projection, "Projection.axis");
  var a = dart.privateName(projection, "Projection.a");
  var b = dart.privateName(projection, "Projection.b");
  var rf = dart.privateName(projection, "Projection.rf");
  var sphere = dart.privateName(projection, "Projection.sphere");
  var es = dart.privateName(projection, "Projection.es");
  var e = dart.privateName(projection, "Projection.e");
  var ep2 = dart.privateName(projection, "Projection.ep2");
  var datum$ = dart.privateName(projection, "Projection.datum");
  var from_greenwich = dart.privateName(projection, "Projection.from_greenwich");
  var to_meter = dart.privateName(projection, "Projection.to_meter");
  projection.Projection = class Projection extends core.Object {
    get projName() {
      return this[projName];
    }
    set projName(value) {
      this[projName] = value;
    }
    get ellps() {
      return this[ellps];
    }
    set ellps(value) {
      this[ellps] = value;
    }
    get noDefs() {
      return this[noDefs];
    }
    set noDefs(value) {
      this[noDefs] = value;
    }
    get k0() {
      return this[k0];
    }
    set k0(value) {
      this[k0] = value;
    }
    get axis() {
      return this[axis];
    }
    set axis(value) {
      this[axis] = value;
    }
    get a() {
      return this[a];
    }
    set a(value) {
      this[a] = value;
    }
    get b() {
      return this[b];
    }
    set b(value) {
      this[b] = value;
    }
    get rf() {
      return this[rf];
    }
    set rf(value) {
      this[rf] = value;
    }
    get sphere() {
      return this[sphere];
    }
    set sphere(value) {
      this[sphere] = value;
    }
    get es() {
      return this[es];
    }
    set es(value) {
      this[es] = value;
    }
    get e() {
      return this[e];
    }
    set e(value) {
      this[e] = value;
    }
    get ep2() {
      return this[ep2];
    }
    set ep2(value) {
      this[ep2] = value;
    }
    get datum() {
      return this[datum$];
    }
    set datum(value) {
      this[datum$] = value;
    }
    get from_greenwich() {
      return this[from_greenwich];
    }
    set from_greenwich(value) {
      this[from_greenwich] = value;
    }
    get to_meter() {
      return this[to_meter];
    }
    set to_meter(value) {
      this[to_meter] = value;
    }
    static get WGS84() {
      return projection_store.ProjectionStore.new().WGS84;
    }
    static get GOOGLE() {
      return projection_store.ProjectionStore.new().GOOGLE;
    }
    static get(code) {
      let result = projection_store.ProjectionStore.new().get(code);
      return result;
    }
    static add(code, defString) {
      let params = projection.Projection.parse(defString);
      return projection_store.ProjectionStore.new().register(code, params);
    }
    static ['_#add#tearOff'](code, defString) {
      return projection.Projection.add(code, defString);
    }
    static parse(defString) {
      let params = null;
      if (defString[$_get](0) === "+") {
        params = new proj_params.ProjParams.new(defString);
      } else {
        let projWKT = wkt_parser.parseWKT(defString);
        if (projection.Projection._checkMercator(projWKT)) {
          return projection.Projection.GOOGLE;
        }
        let extensionProjStr = projection.Projection._checkProjStr(projWKT);
        if (extensionProjStr != null) {
          params = new proj_params.ProjParams.new(extensionProjStr);
        } else {
          params = new proj_params.ProjParams.fromWKT(projWKT);
        }
      }
      let projName = params.proj;
      let initializer = initializers.initializers[$_get](dart.nullCheck(projName));
      if (initializer == null) {
        dart.throw(core.Exception.new("Projection initializer not found by projname: " + dart.str(projName)));
      }
      return initializer(params);
    }
    static ['_#parse#tearOff'](defString) {
      return projection.Projection.parse(defString);
    }
    static nadgrid(key, data) {
      nadgrid.Nadgird.factory(key, data);
    }
    static _checkMercator(wkt) {
      let authority = wkt.AUTHORITY;
      if (authority == null) {
        return false;
      }
      let epsg = null;
      if (authority[$_get]("EPSG") != null) {
        epsg = T.StringN().as(authority[$_get]("EPSG"));
      } else if (authority[$_get]("epsg") != null) {
        epsg = T.StringN().as(authority[$_get]("epsg"));
      }
      return epsg != null && projection.Projection._mercatorCodes[$contains](epsg);
    }
    static _checkProjStr(wkt) {
      let ext = wkt.EXTENSION;
      if (ext == null) {
        return null;
      }
      if (ext[$_get]("PROJ4") != null) {
        return T.StringN().as(ext[$_get]("PROJ4"));
      } else if (ext[$_get]("proj4") != null) {
        return T.StringN().as(ext[$_get]("proj4"));
      }
      return null;
    }
    static _checkNotWGS(source, dest) {
      return (source.datum.datumType === 1 || source.datum.datumType === 2) && dest.projName !== "longlat" || (dest.datum.datumType === 1 || dest.datum.datumType === 2) && source.projName !== "longlat";
    }
    transform(dest, point) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let source = this;
      point = new point$.Point.copy(point);
      let shouldRemoveZ = point.z == null;
      utils.checkSanity(point);
      if (projection.Projection._checkNotWGS(source, dest)) {
        let wgs84 = projection.Projection.WGS84;
        point = source.transform(wgs84, point);
        source = wgs84;
      }
      if (source.axis !== "enu") {
        point = utils.adjust_axis(source, false, point);
      }
      if (source.projName === "longlat") {
        point = new point$.Point.withZ({x: point.x * 0.017453292519943295, y: point.y * 0.017453292519943295, z: (t0 = point.z, t0 == null ? 0.0 : t0)});
      } else {
        if (source.to_meter != null) {
          point = new point$.Point.withZ({x: point.x * dart.nullCheck(source.to_meter), y: point.y * dart.nullCheck(source.to_meter), z: (t0$ = point.z, t0$ == null ? 0.0 : t0$)});
        }
        point = source.inverse(point);
      }
      if (source.from_greenwich != null) {
        t0$0 = point;
        t0$0.x = t0$0.x + dart.nullCheck(source.from_greenwich);
      }
      point = datum_transform.transform(source.datum, dest.datum, point);
      if (dest.from_greenwich != null) {
        point = new point$.Point.withZ({x: point.x - dart.nullCheck(dest.from_greenwich), y: point.y, z: (t0$1 = point.z, t0$1 == null ? 0.0 : t0$1)});
      }
      if (dest.projName === "longlat") {
        point = new point$.Point.withZ({x: point.x * 57.29577951308232, y: point.y * 57.29577951308232, z: (t0$2 = point.z, t0$2 == null ? 0.0 : t0$2)});
      } else {
        point = dest.forward(point);
        if (dest.to_meter != null) {
          point = new point$.Point.withZ({x: point.x / dart.nullCheck(dest.to_meter), y: point.y / dart.nullCheck(dest.to_meter), z: (t0$3 = point.z, t0$3 == null ? 0.0 : t0$3)});
        }
      }
      if (dest.axis !== "enu") {
        point = utils.adjust_axis(dest, true, point);
      }
      if (shouldRemoveZ) {
        point.z = null;
        point.m = null;
        return point;
      } else {
        return point;
      }
    }
  };
  (projection.Projection.init = function(params) {
    this[projName] = dart.nullCheck(params.proj);
    this[ellps] = dart.nullCheck(params.ellps);
    this[noDefs] = params.no_defs;
    this[k0] = dart.nullCheck(params.k0);
    this[axis] = dart.nullCheck(params.axis);
    this[a] = dart.nullCheck(params.a);
    this[b] = dart.nullCheck(params.b);
    this[rf] = params.rf;
    this[sphere] = params.sphere;
    this[es] = dart.nullCheck(params.es);
    this[e] = dart.nullCheck(params.e);
    this[ep2] = dart.nullCheck(params.ep2);
    this[datum$] = dart.nullCheck(params.datum);
    this[from_greenwich] = params.from_greenwich;
    this[to_meter] = params.to_meter;
    ;
  }).prototype = projection.Projection.prototype;
  dart.addTypeTests(projection.Projection);
  dart.addTypeCaches(projection.Projection);
  dart.setMethodSignature(projection.Projection, () => ({
    __proto__: dart.getMethods(projection.Projection.__proto__),
    transform: dart.fnType(point$.Point, [projection.Projection, point$.Point])
  }));
  dart.setStaticMethodSignature(projection.Projection, () => ['get', 'add', 'parse', 'nadgrid', '_checkMercator', '_checkProjStr', '_checkNotWGS']);
  dart.setStaticGetterSignature(projection.Projection, () => ['WGS84', 'GOOGLE']);
  dart.setLibraryUri(projection.Projection, I[1]);
  dart.setFieldSignature(projection.Projection, () => ({
    __proto__: dart.getFields(projection.Projection.__proto__),
    projName: dart.fieldType(core.String),
    ellps: dart.fieldType(core.String),
    noDefs: dart.fieldType(dart.nullable(core.bool)),
    k0: dart.fieldType(core.double),
    axis: dart.fieldType(core.String),
    a: dart.fieldType(core.double),
    b: dart.fieldType(core.double),
    rf: dart.fieldType(dart.nullable(core.double)),
    sphere: dart.fieldType(dart.nullable(core.bool)),
    es: dart.fieldType(core.double),
    e: dart.fieldType(core.double),
    ep2: dart.fieldType(core.double),
    datum: dart.fieldType(datum.Datum),
    from_greenwich: dart.fieldType(dart.nullable(core.double)),
    to_meter: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(projection.Projection, () => ['_mercatorCodes']);
  dart.defineLazy(projection.Projection, {
    /*projection.Projection._mercatorCodes*/get _mercatorCodes() {
      return T.JSArrayOfString().of(["3857", "900913", "3785", "102113"]);
    }
  }, false);
  vandg.VanDerGrintenProjection = class VanDerGrintenProjection extends projection.Projection {
    get R() {
      let t0;
      t0 = this[__VanDerGrintenProjection_R];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("R")) : t0;
    }
    set R(R$35param) {
      this[__VanDerGrintenProjection_R] = R$35param;
    }
    get long0() {
      let t0;
      t0 = this[__VanDerGrintenProjection_long0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t0;
    }
    set long0(long0$35param) {
      this[__VanDerGrintenProjection_long0] = long0$35param;
    }
    get x0() {
      let t0;
      t0 = this[__VanDerGrintenProjection_x0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t0;
    }
    set x0(x0$35param) {
      this[__VanDerGrintenProjection_x0] = x0$35param;
    }
    get y0() {
      let t0;
      t0 = this[__VanDerGrintenProjection_y0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t0;
    }
    set y0(y0$35param) {
      this[__VanDerGrintenProjection_y0] = y0$35param;
    }
    static ['_#init#tearOff'](params) {
      return new vandg.VanDerGrintenProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let dlon = utils.adjust_lon(lon - this.long0);
      let x = null;
      let y = null;
      if (lat[$abs]() <= 1e-10) {
        x = this.x0 + this.R * dlon;
        y = this.y0;
      }
      let theta = utils.asinz(2 * (lat / 3.141592653589793)[$abs]());
      if (dlon[$abs]() <= 1e-10 || (lat[$abs]() - 1.5707963267948966)[$abs]() <= 1e-10) {
        x = this.x0;
        if (lat >= 0) {
          y = this.y0 + 3.141592653589793 * this.R * math.tan(0.5 * theta);
        } else {
          y = this.y0 + 3.141592653589793 * this.R * -math.tan(0.5 * theta);
        }
      }
      let al = 0.5 * (3.141592653589793 / dlon - dlon / 3.141592653589793)[$abs]();
      let asq = al * al;
      let sinth = math.sin(theta);
      let costh = math.cos(theta);
      let g = costh / (sinth + costh - 1);
      let gsq = g * g;
      let m = g * (2 / sinth - 1);
      let msq = m * m;
      let con = 3.141592653589793 * this.R * (al * (g - msq) + math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
      if (dlon < 0) {
        con = -con;
      }
      x = this.x0 + con;
      let q = asq + g;
      con = 3.141592653589793 * this.R * (m * q - al * math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
      if (lat >= 0) {
        y = this.y0 + con;
      } else {
        y = this.y0 - con;
      }
      p.x = core.double.as(x);
      p.y = core.double.as(y);
      return p;
    }
    inverse(p) {
      let t0, t0$;
      let lon = null;
      let lat = null;
      let xx = null;
      let yy = null;
      let xys = null;
      let c1 = null;
      let c2 = null;
      let c3 = null;
      let a1 = null;
      let m1 = null;
      let con = null;
      let th1 = null;
      let d = null;
      t0 = p;
      t0.x = t0.x - this.x0;
      t0$ = p;
      t0$.y = t0$.y - this.y0;
      con = 3.141592653589793 * this.R;
      xx = p.x / con;
      yy = p.y / con;
      xys = xx * xx + yy * yy;
      c1 = -yy[$abs]() * (1 + xys);
      c2 = c1 - 2 * yy * yy + xx * xx;
      c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
      d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
      a1 = (c1 - c2 * c2 / 3 / c3) / c3;
      m1 = 2 * math.sqrt(-a1 / 3);
      con = 3 * d / a1 / m1;
      if (con[$abs]() > 1) {
        if (con >= 0) {
          con = 1.0;
        } else {
          con = -1.0;
        }
      }
      th1 = math.acos(con) / 3;
      if (p.y >= 0) {
        lat = (-m1 * math.cos(th1 + 3.141592653589793 / 3) - c2 / 3 / c3) * 3.141592653589793;
      } else {
        lat = -(-m1 * math.cos(th1 + 3.141592653589793 / 3) - c2 / 3 / c3) * 3.141592653589793;
      }
      if (xx[$abs]() < 1e-10) {
        lon = this.long0;
      } else {
        lon = utils.adjust_lon(this.long0 + 3.141592653589793 * (xys - 1 + math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (vandg.VanDerGrintenProjection.init = function(params) {
    this[__VanDerGrintenProjection_R] = null;
    this[__VanDerGrintenProjection_long0] = null;
    this[__VanDerGrintenProjection_x0] = null;
    this[__VanDerGrintenProjection_y0] = null;
    vandg.VanDerGrintenProjection.__proto__.init.call(this, params);
    this.R = dart.nullCheck(params.a);
    this.long0 = params.long0;
    this.x0 = dart.nullCheck(params.x0);
    this.y0 = dart.nullCheck(params.y0);
  }).prototype = vandg.VanDerGrintenProjection.prototype;
  dart.addTypeTests(vandg.VanDerGrintenProjection);
  dart.addTypeCaches(vandg.VanDerGrintenProjection);
  dart.setMethodSignature(vandg.VanDerGrintenProjection, () => ({
    __proto__: dart.getMethods(vandg.VanDerGrintenProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(vandg.VanDerGrintenProjection, () => ({
    __proto__: dart.getGetters(vandg.VanDerGrintenProjection.__proto__),
    R: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setSetterSignature(vandg.VanDerGrintenProjection, () => ({
    __proto__: dart.getSetters(vandg.VanDerGrintenProjection.__proto__),
    R: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setLibraryUri(vandg.VanDerGrintenProjection, I[2]);
  dart.setFieldSignature(vandg.VanDerGrintenProjection, () => ({
    __proto__: dart.getFields(vandg.VanDerGrintenProjection.__proto__),
    [__VanDerGrintenProjection_R]: dart.fieldType(dart.nullable(core.double)),
    [__VanDerGrintenProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__VanDerGrintenProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__VanDerGrintenProjection_y0]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(vandg.VanDerGrintenProjection, () => ['names']);
  dart.defineLazy(vandg.VanDerGrintenProjection, {
    /*vandg.VanDerGrintenProjection.names*/get names() {
      return T.JSArrayOfString().of(["Van_der_Grinten_I", "VanDerGrinten", "vandg"]);
    }
  }, false);
  var zone = dart.privateName(utm, "UniversalTransverseMercatorProjection.zone");
  var utmSouth = dart.privateName(utm, "UniversalTransverseMercatorProjection.utmSouth");
  var lat0 = dart.privateName(utm, "UniversalTransverseMercatorProjection.lat0");
  var long0 = dart.privateName(utm, "UniversalTransverseMercatorProjection.long0");
  var x0 = dart.privateName(utm, "UniversalTransverseMercatorProjection.x0");
  var y0 = dart.privateName(utm, "UniversalTransverseMercatorProjection.y0");
  var k0$ = dart.privateName(utm, "UniversalTransverseMercatorProjection.k0");
  var __ExtendedTransverseMercatorProjection_x0 = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#x0");
  var __ExtendedTransverseMercatorProjection_y0 = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#y0");
  var __ExtendedTransverseMercatorProjection_long0 = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#long0");
  var __ExtendedTransverseMercatorProjection_lat0 = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#lat0");
  var __ExtendedTransverseMercatorProjection_Qn = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#Qn");
  var __ExtendedTransverseMercatorProjection_Zb = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#Zb");
  var __ExtendedTransverseMercatorProjection_cgb = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#cgb");
  var __ExtendedTransverseMercatorProjection_cbg = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#cbg");
  var __ExtendedTransverseMercatorProjection_utg = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#utg");
  var __ExtendedTransverseMercatorProjection_gtu = dart.privateName(etmerc, "_#ExtendedTransverseMercatorProjection#gtu");
  etmerc.ExtendedTransverseMercatorProjection = class ExtendedTransverseMercatorProjection extends projection.Projection {
    get x0() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_x0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t0;
    }
    set x0(x0$35param) {
      this[__ExtendedTransverseMercatorProjection_x0] = x0$35param;
    }
    get y0() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_y0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t0;
    }
    set y0(y0$35param) {
      this[__ExtendedTransverseMercatorProjection_y0] = y0$35param;
    }
    get long0() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_long0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t0;
    }
    set long0(long0$35param) {
      this[__ExtendedTransverseMercatorProjection_long0] = long0$35param;
    }
    get lat0() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_lat0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("lat0")) : t0;
    }
    set lat0(lat0$35param) {
      this[__ExtendedTransverseMercatorProjection_lat0] = lat0$35param;
    }
    get Qn() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_Qn];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("Qn")) : t0;
    }
    set Qn(Qn$35param) {
      this[__ExtendedTransverseMercatorProjection_Qn] = Qn$35param;
    }
    get Zb() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_Zb];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("Zb")) : t0;
    }
    set Zb(Zb$35param) {
      this[__ExtendedTransverseMercatorProjection_Zb] = Zb$35param;
    }
    get cgb() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_cgb];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("cgb")) : t0;
    }
    set cgb(cgb$35param) {
      this[__ExtendedTransverseMercatorProjection_cgb] = cgb$35param;
    }
    get cbg() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_cbg];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("cbg")) : t0;
    }
    set cbg(cbg$35param) {
      this[__ExtendedTransverseMercatorProjection_cbg] = cbg$35param;
    }
    get utg() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_utg];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("utg")) : t0;
    }
    set utg(utg$35param) {
      this[__ExtendedTransverseMercatorProjection_utg] = utg$35param;
    }
    get gtu() {
      let t0;
      t0 = this[__ExtendedTransverseMercatorProjection_gtu];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("gtu")) : t0;
    }
    set gtu(gtu$35param) {
      this[__ExtendedTransverseMercatorProjection_gtu] = gtu$35param;
    }
    static ['_#init#tearOff'](params) {
      return new etmerc.ExtendedTransverseMercatorProjection.init(params);
    }
    forward(p) {
      let Ce = utils.adjust_lon(p.x - this.long0);
      let Cn = p.y;
      Cn = utils.gatg(this.cbg, Cn);
      let sin_Cn = math.sin(Cn);
      let cos_Cn = math.cos(Cn);
      let sin_Ce = math.sin(Ce);
      let cos_Ce = math.cos(Ce);
      Cn = math.atan2(sin_Cn, cos_Ce * cos_Cn);
      Ce = math.atan2(sin_Ce * cos_Cn, utils.hypot(sin_Cn, cos_Cn * cos_Ce));
      Ce = utils.asinhy(math.tan(Ce));
      let tmp = utils.clens_cmplx(this.gtu, 2 * Cn, 2 * Ce);
      Cn = Cn + tmp[$_get](0);
      Ce = Ce + tmp[$_get](1);
      let x = null;
      let y = null;
      if (Ce[$abs]() <= 2.623395162778) {
        x = this.a * (this.Qn * Ce) + this.x0;
        y = this.a * (this.Qn * Cn + this.Zb) + this.y0;
      } else {
        x = 1 / 0;
        y = 1 / 0;
      }
      p.x = x;
      p.y = y;
      return p;
    }
    inverse(p) {
      let Ce = (p.x - this.x0) * (1 / this.a);
      let Cn = (p.y - this.y0) * (1 / this.a);
      Cn = (Cn - this.Zb) / this.Qn;
      Ce = Ce / this.Qn;
      let lon = null;
      let lat = null;
      if (Ce[$abs]() <= 2.623395162778) {
        let tmp = utils.clens_cmplx(this.utg, 2 * Cn, 2 * Ce);
        Cn = Cn + tmp[$_get](0);
        Ce = Ce + tmp[$_get](1);
        Ce = math.atan(utils.sinh(Ce));
        let sin_Cn = math.sin(Cn);
        let cos_Cn = math.cos(Cn);
        let sin_Ce = math.sin(Ce);
        let cos_Ce = math.cos(Ce);
        Cn = math.atan2(sin_Cn * cos_Ce, utils.hypot(sin_Ce, cos_Ce * cos_Cn));
        Ce = math.atan2(sin_Ce, cos_Ce * cos_Cn);
        lon = utils.adjust_lon(Ce + this.long0);
        lat = utils.gatg(this.cgb, Cn);
      } else {
        lon = 1 / 0;
        lat = 1 / 0;
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (etmerc.ExtendedTransverseMercatorProjection.init = function(params) {
    this[__ExtendedTransverseMercatorProjection_x0] = null;
    this[__ExtendedTransverseMercatorProjection_y0] = null;
    this[__ExtendedTransverseMercatorProjection_long0] = null;
    this[__ExtendedTransverseMercatorProjection_lat0] = null;
    this[__ExtendedTransverseMercatorProjection_Qn] = null;
    this[__ExtendedTransverseMercatorProjection_Zb] = null;
    this[__ExtendedTransverseMercatorProjection_cgb] = null;
    this[__ExtendedTransverseMercatorProjection_cbg] = null;
    this[__ExtendedTransverseMercatorProjection_utg] = null;
    this[__ExtendedTransverseMercatorProjection_gtu] = null;
    etmerc.ExtendedTransverseMercatorProjection.__proto__.init.call(this, params);
    if (params.es == null || dart.nullCheck(params.es) <= 0) {
      dart.throw(core.Exception.new("Incorrect elliptical usage"));
    }
    this.es = dart.nullCheck(params.es);
    if (this.long0[$isNaN]) {
      this.long0 = 0.0;
    }
    this.cgb = T.ListOfdouble().filled(6, 0.0);
    this.cbg = T.ListOfdouble().filled(6, 0.0);
    this.utg = T.ListOfdouble().filled(6, 0.0);
    this.gtu = T.ListOfdouble().filled(6, 0.0);
    let f = this.es / (1 + math.sqrt(1 - this.es));
    let n = f / (2 - f);
    let np = n;
    this.cgb[$_set](0, n * (2 + n * (-2 / 3 + n * (-2 + n * (116 / 45 + n * (26 / 45 + n * (-2854 / 675)))))));
    this.cbg[$_set](0, n * (-2 + n * (2 / 3 + n * (4 / 3 + n * (-82 / 45 + n * (32 / 45 + n * (4642 / 4725)))))));
    np = np * n;
    this.cgb[$_set](1, np * (7 / 3 + n * (-8 / 5 + n * (-227 / 45 + n * (2704 / 315 + n * (2323 / 945))))));
    this.cbg[$_set](1, np * (5 / 3 + n * (-16 / 15 + n * (-13 / 9 + n * (904 / 315 + n * (-1522 / 945))))));
    np = np * n;
    this.cgb[$_set](2, np * (56 / 15 + n * (-136 / 35 + n * (-1262 / 105 + n * (73814 / 2835)))));
    this.cbg[$_set](2, np * (-26 / 15 + n * (34 / 21 + n * (8 / 5 + n * (-12686 / 2835)))));
    np = np * n;
    this.cgb[$_set](3, np * (4279 / 630 + n * (-332 / 35 + n * (-399572 / 14175))));
    this.cbg[$_set](3, np * (1237 / 630 + n * (-12 / 5 + n * (-24832 / 14175))));
    np = np * n;
    this.cgb[$_set](4, np * (4174 / 315 + n * (-144838 / 6237)));
    this.cbg[$_set](4, np * (-734 / 315 + n * (109598 / 31185)));
    np = np * n;
    this.cgb[$_set](5, np * (601676 / 22275));
    this.cbg[$_set](5, np * (444337 / 155925));
    np = math.pow(n, 2);
    this.Qn = this.k0 / (1 + n) * (1 + np * (1 / 4 + np * (1 / 64 + np / 256)));
    this.utg[$_set](0, n * (-0.5 + n * (2 / 3 + n * (-37 / 96 + n * (1 / 360 + n * (81 / 512 + n * (-96199 / 604800)))))));
    this.gtu[$_set](0, n * (0.5 + n * (-2 / 3 + n * (5 / 16 + n * (41 / 180 + n * (-127 / 288 + n * (7891 / 37800)))))));
    this.utg[$_set](1, np * (-1 / 48 + n * (-1 / 15 + n * (437 / 1440 + n * (-46 / 105 + n * (1118711 / 3870720))))));
    this.gtu[$_set](1, np * (13 / 48 + n * (-3 / 5 + n * (557 / 1440 + n * (281 / 630 + n * (-1983433 / 1935360))))));
    np = np * n;
    this.utg[$_set](2, np * (-17 / 480 + n * (37 / 840 + n * (209 / 4480 + n * (-5569 / 90720)))));
    this.gtu[$_set](2, np * (61 / 240 + n * (-103 / 140 + n * (15061 / 26880 + n * (167603 / 181440)))));
    np = np * n;
    this.utg[$_set](3, np * (-4397 / 161280 + n * (11 / 504 + n * (830251 / 7257600))));
    this.gtu[$_set](3, np * (49561 / 161280 + n * (-179 / 168 + n * (6601661 / 7257600))));
    np = np * n;
    this.utg[$_set](4, np * (-4583 / 161280 + n * (108847 / 3991680)));
    this.gtu[$_set](4, np * (34729 / 80640 + n * (-3418889 / 1995840)));
    np = np * n;
    this.utg[$_set](5, np * (-20648693 / 638668800));
    this.gtu[$_set](5, np * (212378941 / 319334400));
    let Z = utils.gatg(this.cbg, this.lat0);
    this.Zb = -this.Qn * (Z + utils.clens(this.gtu, 2 * Z));
  }).prototype = etmerc.ExtendedTransverseMercatorProjection.prototype;
  dart.addTypeTests(etmerc.ExtendedTransverseMercatorProjection);
  dart.addTypeCaches(etmerc.ExtendedTransverseMercatorProjection);
  dart.setMethodSignature(etmerc.ExtendedTransverseMercatorProjection, () => ({
    __proto__: dart.getMethods(etmerc.ExtendedTransverseMercatorProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(etmerc.ExtendedTransverseMercatorProjection, () => ({
    __proto__: dart.getGetters(etmerc.ExtendedTransverseMercatorProjection.__proto__),
    x0: core.double,
    y0: core.double,
    long0: core.double,
    lat0: core.double,
    Qn: core.double,
    Zb: core.double,
    cgb: core.List$(core.double),
    cbg: core.List$(core.double),
    utg: core.List$(core.double),
    gtu: core.List$(core.double)
  }));
  dart.setSetterSignature(etmerc.ExtendedTransverseMercatorProjection, () => ({
    __proto__: dart.getSetters(etmerc.ExtendedTransverseMercatorProjection.__proto__),
    x0: core.double,
    y0: core.double,
    long0: core.double,
    lat0: core.double,
    Qn: core.double,
    Zb: core.double,
    cgb: core.List$(core.double),
    cbg: core.List$(core.double),
    utg: core.List$(core.double),
    gtu: core.List$(core.double)
  }));
  dart.setLibraryUri(etmerc.ExtendedTransverseMercatorProjection, I[3]);
  dart.setFieldSignature(etmerc.ExtendedTransverseMercatorProjection, () => ({
    __proto__: dart.getFields(etmerc.ExtendedTransverseMercatorProjection.__proto__),
    [__ExtendedTransverseMercatorProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__ExtendedTransverseMercatorProjection_y0]: dart.fieldType(dart.nullable(core.double)),
    [__ExtendedTransverseMercatorProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__ExtendedTransverseMercatorProjection_lat0]: dart.fieldType(dart.nullable(core.double)),
    [__ExtendedTransverseMercatorProjection_Qn]: dart.fieldType(dart.nullable(core.double)),
    [__ExtendedTransverseMercatorProjection_Zb]: dart.fieldType(dart.nullable(core.double)),
    [__ExtendedTransverseMercatorProjection_cgb]: dart.fieldType(dart.nullable(core.List$(core.double))),
    [__ExtendedTransverseMercatorProjection_cbg]: dart.fieldType(dart.nullable(core.List$(core.double))),
    [__ExtendedTransverseMercatorProjection_utg]: dart.fieldType(dart.nullable(core.List$(core.double))),
    [__ExtendedTransverseMercatorProjection_gtu]: dart.fieldType(dart.nullable(core.List$(core.double)))
  }));
  dart.setStaticFieldSignature(etmerc.ExtendedTransverseMercatorProjection, () => ['names']);
  dart.defineLazy(etmerc.ExtendedTransverseMercatorProjection, {
    /*etmerc.ExtendedTransverseMercatorProjection.names*/get names() {
      return T.JSArrayOfString().of(["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc"]);
    }
  }, false);
  utm.UniversalTransverseMercatorProjection = class UniversalTransverseMercatorProjection extends etmerc.ExtendedTransverseMercatorProjection {
    get zone() {
      return this[zone];
    }
    set zone(value) {
      this[zone] = value;
    }
    get utmSouth() {
      return this[utmSouth];
    }
    set utmSouth(value) {
      this[utmSouth] = value;
    }
    get lat0() {
      return this[lat0];
    }
    set lat0(value) {
      this[lat0] = value;
    }
    get long0() {
      return this[long0];
    }
    set long0(value) {
      this[long0] = value;
    }
    get x0() {
      return this[x0];
    }
    set x0(value) {
      this[x0] = value;
    }
    get y0() {
      return this[y0];
    }
    set y0(value) {
      this[y0] = value;
    }
    get k0() {
      return this[k0$];
    }
    set k0(value) {
      this[k0$] = value;
    }
    static ['_#init#tearOff'](params) {
      return new utm.UniversalTransverseMercatorProjection.init(params);
    }
  };
  (utm.UniversalTransverseMercatorProjection.init = function(params) {
    this[zone] = utils.adjust_zone(params.zone, params.long0);
    this[utmSouth] = params.utmSouth === true;
    this[lat0] = 0.0;
    this[long0] = (6 * dart.nullCheck(params.zone)[$abs]() - 183) * 0.017453292519943295;
    this[x0] = 500000.0;
    this[y0] = params.utmSouth === true ? 10000000.0 : 0.0;
    this[k0$] = 0.9996;
    utm.UniversalTransverseMercatorProjection.__proto__.init.call(this, params);
    ;
  }).prototype = utm.UniversalTransverseMercatorProjection.prototype;
  dart.addTypeTests(utm.UniversalTransverseMercatorProjection);
  dart.addTypeCaches(utm.UniversalTransverseMercatorProjection);
  dart.setLibraryUri(utm.UniversalTransverseMercatorProjection, I[4]);
  dart.setFieldSignature(utm.UniversalTransverseMercatorProjection, () => ({
    __proto__: dart.getFields(utm.UniversalTransverseMercatorProjection.__proto__),
    zone: dart.fieldType(core.int),
    utmSouth: dart.fieldType(core.bool),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    k0: dart.fieldType(core.double)
  }));
  dart.setStaticFieldSignature(utm.UniversalTransverseMercatorProjection, () => ['names']);
  dart.defineLazy(utm.UniversalTransverseMercatorProjection, {
    /*utm.UniversalTransverseMercatorProjection.names*/get names() {
      return T.JSArrayOfString().of(["Universal Transverse Mercator System", "utm"]);
    }
  }, false);
  var lat0$ = dart.privateName(tmerc, "TransverseMercatorProjection.lat0");
  var long0$ = dart.privateName(tmerc, "TransverseMercatorProjection.long0");
  var x0$ = dart.privateName(tmerc, "TransverseMercatorProjection.x0");
  var y0$ = dart.privateName(tmerc, "TransverseMercatorProjection.y0");
  var __TransverseMercatorProjection_en = dart.privateName(tmerc, "_#TransverseMercatorProjection#en");
  var __TransverseMercatorProjection_ml0 = dart.privateName(tmerc, "_#TransverseMercatorProjection#ml0");
  tmerc.TransverseMercatorProjection = class TransverseMercatorProjection extends projection.Projection {
    get lat0() {
      return this[lat0$];
    }
    set lat0(value) {
      this[lat0$] = value;
    }
    get long0() {
      return this[long0$];
    }
    set long0(value) {
      this[long0$] = value;
    }
    get x0() {
      return this[x0$];
    }
    set x0(value) {
      this[x0$] = value;
    }
    get y0() {
      return this[y0$];
    }
    set y0(value) {
      this[y0$] = value;
    }
    get en() {
      let t0;
      t0 = this[__TransverseMercatorProjection_en];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("en")) : t0;
    }
    set en(en$35param) {
      this[__TransverseMercatorProjection_en] = en$35param;
    }
    get ml0() {
      let t0;
      t0 = this[__TransverseMercatorProjection_ml0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("ml0")) : t0;
    }
    set ml0(ml0$35param) {
      this[__TransverseMercatorProjection_ml0] = ml0$35param;
    }
    static ['_#init#tearOff'](params) {
      return new tmerc.TransverseMercatorProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let delta_lon = utils.adjust_lon(lon - this.long0);
      let con = null;
      let x = null;
      let y = null;
      let sin_phi = math.sin(lat);
      let cos_phi = math.cos(lat);
      if (this.es === 0.0) {
        let b = cos_phi * math.sin(delta_lon);
        if ((b[$abs]() - 1)[$abs]() < 1e-10) {
          return p;
        } else {
          x = 0.5 * this.a * this.k0 * math.log((1 + b) / (1 - b)) + this.x0;
          y = cos_phi * math.cos(delta_lon) / math.sqrt(1 - math.pow(b, 2));
          b = y[$abs]();
          if (b >= 1) {
            if (b - 1 > 1e-10) {
              return p;
            } else {
              y = 0.0;
            }
          } else {
            y = math.acos(y);
          }
          if (lat < 0) {
            y = -y;
          }
          y = this.a * this.k0 * (y - this.lat0) + this.y0;
        }
      } else {
        let al = cos_phi * delta_lon;
        let als = math.pow(al, 2);
        let c = this.ep2 * math.pow(cos_phi, 2);
        let cs = math.pow(c, 2);
        let tq = cos_phi[$abs]() > 1e-10 ? math.tan(lat) : 0;
        let t = math.pow(tq, 2);
        let ts = math.pow(t, 2);
        con = 1 - this.es * math.pow(sin_phi, 2);
        al = al / math.sqrt(con);
        let ml = utils.pj_mlfn(lat, sin_phi, cos_phi, this.en);
        x = this.a * (this.k0 * al * (1 + als / 6 * (1 - t + c + als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c + als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) + this.x0;
        y = this.a * (this.k0 * (ml - this.ml0 + sin_phi * delta_lon * al / 2 * (1 + als / 12 * (5 - t + 9 * c + 4 * cs + als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c + als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) + this.y0;
      }
      p.x = x;
      p.y = y;
      return p;
    }
    inverse(p) {
      let con = null;
      let phi = null;
      let lat = null;
      let lon = null;
      let x = (p.x - this.x0) * (1 / this.a);
      let y = (p.y - this.y0) * (1 / this.a);
      if (this.es === 0.0) {
        let f = math.exp(x / this.k0);
        let g = 0.5 * (f - 1 / f);
        let temp = this.lat0 + y / this.k0;
        let h = math.cos(temp);
        con = math.sqrt((1 - math.pow(h, 2)) / (1 + math.pow(g, 2)));
        lat = math.asin(con);
        if (y < 0) {
          lat = -lat;
        }
        if (g === 0 && h === 0) {
          lon = 0.0;
        } else {
          lon = utils.adjust_lon(math.atan2(g, h) + this.long0);
        }
      } else {
        con = this.ml0 + y / this.k0;
        phi = utils.pj_inv_mlfn(con, this.es, this.en);
        if (phi[$abs]() < 1.5707963267948966) {
          let sin_phi = math.sin(phi);
          let cos_phi = math.cos(phi);
          let tan_phi = cos_phi[$abs]() > 1e-10 ? math.tan(phi) : 0;
          let c = this.ep2 * math.pow(cos_phi, 2);
          let cs = math.pow(c, 2);
          let t = math.pow(tan_phi, 2);
          let ts = math.pow(t, 2);
          con = 1 - this.es * math.pow(sin_phi, 2);
          let d = x * math.sqrt(con) / this.k0;
          let ds = math.pow(d, 2);
          con = con * tan_phi;
          lat = phi - con * ds / (1 - this.es) * 0.5 * (1 - ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs - ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c - ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));
          lon = utils.adjust_lon(this.long0 + d * (1 - ds / 6 * (1 + 2 * t + c - ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c - ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi);
        } else {
          lat = 1.5707963267948966 * utils.sign(y);
          lon = 0.0;
        }
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (tmerc.TransverseMercatorProjection.init = function(params) {
    let t0, t0$, t0$0;
    this[__TransverseMercatorProjection_en] = null;
    this[__TransverseMercatorProjection_ml0] = null;
    this[lat0$] = (t0 = params.lat0, t0 == null ? 0.0 : t0);
    this[long0$] = params.long0;
    this[x0$] = (t0$ = params.x0, t0$ == null ? 0.0 : t0$);
    this[y0$] = (t0$0 = params.y0, t0$0 == null ? 0.0 : t0$0);
    tmerc.TransverseMercatorProjection.__proto__.init.call(this, params);
    if (this.long0[$isNaN]) {
      this.long0 = 0.0;
    }
    if (this.es !== 0.0) {
      this.en = utils.pj_enfn(this.es);
      this.ml0 = utils.pj_mlfn(this.lat0, math.sin(this.lat0), math.cos(this.lat0), this.en);
    }
  }).prototype = tmerc.TransverseMercatorProjection.prototype;
  dart.addTypeTests(tmerc.TransverseMercatorProjection);
  dart.addTypeCaches(tmerc.TransverseMercatorProjection);
  dart.setMethodSignature(tmerc.TransverseMercatorProjection, () => ({
    __proto__: dart.getMethods(tmerc.TransverseMercatorProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(tmerc.TransverseMercatorProjection, () => ({
    __proto__: dart.getGetters(tmerc.TransverseMercatorProjection.__proto__),
    en: core.List$(core.double),
    ml0: core.double
  }));
  dart.setSetterSignature(tmerc.TransverseMercatorProjection, () => ({
    __proto__: dart.getSetters(tmerc.TransverseMercatorProjection.__proto__),
    en: core.List$(core.double),
    ml0: core.double
  }));
  dart.setLibraryUri(tmerc.TransverseMercatorProjection, I[5]);
  dart.setFieldSignature(tmerc.TransverseMercatorProjection, () => ({
    __proto__: dart.getFields(tmerc.TransverseMercatorProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    [__TransverseMercatorProjection_en]: dart.fieldType(dart.nullable(core.List$(core.double))),
    [__TransverseMercatorProjection_ml0]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(tmerc.TransverseMercatorProjection, () => ['names']);
  dart.defineLazy(tmerc.TransverseMercatorProjection, {
    /*tmerc.TransverseMercatorProjection.names*/get names() {
      return T.JSArrayOfString().of(["Transverse_Mercator", "Transverse Mercator", "tmerc"]);
    }
  }, false);
  var __StereographicNorthProjection_sinc0 = dart.privateName(sterea, "_#StereographicNorthProjection#sinc0");
  var __StereographicNorthProjection_cosc0 = dart.privateName(sterea, "_#StereographicNorthProjection#cosc0");
  var __StereographicNorthProjection_R2 = dart.privateName(sterea, "_#StereographicNorthProjection#R2");
  var __GaussProjection_lat0 = dart.privateName(gauss, "_#GaussProjection#lat0");
  var __GaussProjection_long0 = dart.privateName(gauss, "_#GaussProjection#long0");
  var __GaussProjection_rc = dart.privateName(gauss, "_#GaussProjection#rc");
  var __GaussProjection_C = dart.privateName(gauss, "_#GaussProjection#C");
  var __GaussProjection_phic0 = dart.privateName(gauss, "_#GaussProjection#phic0");
  var __GaussProjection_ratexp = dart.privateName(gauss, "_#GaussProjection#ratexp");
  var __GaussProjection_K = dart.privateName(gauss, "_#GaussProjection#K");
  var __GaussProjection_x0 = dart.privateName(gauss, "_#GaussProjection#x0");
  var __GaussProjection_y0 = dart.privateName(gauss, "_#GaussProjection#y0");
  gauss.GaussProjection = class GaussProjection extends projection.Projection {
    get lat0() {
      let t0;
      t0 = this[__GaussProjection_lat0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("lat0")) : t0;
    }
    set lat0(lat0$35param) {
      this[__GaussProjection_lat0] = lat0$35param;
    }
    get long0() {
      let t0;
      t0 = this[__GaussProjection_long0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t0;
    }
    set long0(long0$35param) {
      this[__GaussProjection_long0] = long0$35param;
    }
    get rc() {
      let t0;
      t0 = this[__GaussProjection_rc];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("rc")) : t0;
    }
    set rc(rc$35param) {
      this[__GaussProjection_rc] = rc$35param;
    }
    get C() {
      let t0;
      t0 = this[__GaussProjection_C];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("C")) : t0;
    }
    set C(C$35param) {
      this[__GaussProjection_C] = C$35param;
    }
    get phic0() {
      let t0;
      t0 = this[__GaussProjection_phic0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("phic0")) : t0;
    }
    set phic0(phic0$35param) {
      this[__GaussProjection_phic0] = phic0$35param;
    }
    get ratexp() {
      let t0;
      t0 = this[__GaussProjection_ratexp];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("ratexp")) : t0;
    }
    set ratexp(ratexp$35param) {
      this[__GaussProjection_ratexp] = ratexp$35param;
    }
    get K() {
      let t0;
      t0 = this[__GaussProjection_K];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("K")) : t0;
    }
    set K(K$35param) {
      this[__GaussProjection_K] = K$35param;
    }
    get x0() {
      let t0;
      t0 = this[__GaussProjection_x0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t0;
    }
    set x0(x0$35param) {
      this[__GaussProjection_x0] = x0$35param;
    }
    get y0() {
      let t0;
      t0 = this[__GaussProjection_y0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t0;
    }
    set y0(y0$35param) {
      this[__GaussProjection_y0] = y0$35param;
    }
    static ['_#init#tearOff'](params) {
      return new gauss.GaussProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      p.y = 2 * math.atan(this.K * math.pow(math.tan(0.5 * lat + 0.7853981633974483), this.C) * utils.srat(this.e * math.sin(lat), this.ratexp)) - 1.5707963267948966;
      p.x = this.C * lon;
      return p;
    }
    inverse(p) {
      let DEL_TOL = 1e-14;
      let lon = p.x / this.C;
      let lat = p.y;
      let num = math.pow(math.tan(0.5 * lat + 0.7853981633974483) / this.K, 1 / this.C);
      for (let i = 0; i < gauss.MAX_ITER; i = i + 1) {
        lat = 2 * math.atan(num * utils.srat(this.e * math.sin(p.y), -0.5 * this.e)) - 1.5707963267948966;
        if ((lat - p.y)[$abs]() < DEL_TOL) {
          break;
        }
        p.y = lat;
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (gauss.GaussProjection.init = function(params) {
    this[__GaussProjection_lat0] = null;
    this[__GaussProjection_long0] = null;
    this[__GaussProjection_rc] = null;
    this[__GaussProjection_C] = null;
    this[__GaussProjection_phic0] = null;
    this[__GaussProjection_ratexp] = null;
    this[__GaussProjection_K] = null;
    this[__GaussProjection_x0] = null;
    this[__GaussProjection_y0] = null;
    this[__GaussProjection_lat0] = dart.nullCheck(params.lat0);
    this[__GaussProjection_long0] = params.long0;
    this[__GaussProjection_x0] = dart.nullCheck(params.x0);
    this[__GaussProjection_y0] = dart.nullCheck(params.y0);
    gauss.GaussProjection.__proto__.init.call(this, params);
    let sphi = math.sin(this.lat0);
    let cphi = math.cos(this.lat0);
    cphi = cphi * cphi;
    this.rc = math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
    this.C = math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
    this.phic0 = math.asin(sphi / this.C);
    this.ratexp = 0.5 * this.C * this.e;
    this.K = math.tan(0.5 * this.phic0 + 0.7853981633974483) / (math.pow(math.tan(0.5 * this.lat0 + 0.7853981633974483), this.C) * utils.srat(this.e * sphi, this.ratexp));
  }).prototype = gauss.GaussProjection.prototype;
  dart.addTypeTests(gauss.GaussProjection);
  dart.addTypeCaches(gauss.GaussProjection);
  dart.setMethodSignature(gauss.GaussProjection, () => ({
    __proto__: dart.getMethods(gauss.GaussProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(gauss.GaussProjection, () => ({
    __proto__: dart.getGetters(gauss.GaussProjection.__proto__),
    lat0: core.double,
    long0: core.double,
    rc: core.double,
    C: core.double,
    phic0: core.double,
    ratexp: core.double,
    K: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setSetterSignature(gauss.GaussProjection, () => ({
    __proto__: dart.getSetters(gauss.GaussProjection.__proto__),
    lat0: core.double,
    long0: core.double,
    rc: core.double,
    C: core.double,
    phic0: core.double,
    ratexp: core.double,
    K: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setLibraryUri(gauss.GaussProjection, I[6]);
  dart.setFieldSignature(gauss.GaussProjection, () => ({
    __proto__: dart.getFields(gauss.GaussProjection.__proto__),
    [__GaussProjection_lat0]: dart.fieldType(dart.nullable(core.double)),
    [__GaussProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__GaussProjection_rc]: dart.fieldType(dart.nullable(core.double)),
    [__GaussProjection_C]: dart.fieldType(dart.nullable(core.double)),
    [__GaussProjection_phic0]: dart.fieldType(dart.nullable(core.double)),
    [__GaussProjection_ratexp]: dart.fieldType(dart.nullable(core.double)),
    [__GaussProjection_K]: dart.fieldType(dart.nullable(core.double)),
    [__GaussProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__GaussProjection_y0]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(gauss.GaussProjection, () => ['names']);
  dart.defineLazy(gauss.GaussProjection, {
    /*gauss.GaussProjection.names*/get names() {
      return T.JSArrayOfString().of(["gauss"]);
    }
  }, false);
  sterea.StereographicNorthProjection = class StereographicNorthProjection extends gauss.GaussProjection {
    get sinc0() {
      let t0;
      t0 = this[__StereographicNorthProjection_sinc0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("sinc0")) : t0;
    }
    set sinc0(sinc0$35param) {
      this[__StereographicNorthProjection_sinc0] = sinc0$35param;
    }
    get cosc0() {
      let t0;
      t0 = this[__StereographicNorthProjection_cosc0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("cosc0")) : t0;
    }
    set cosc0(cosc0$35param) {
      this[__StereographicNorthProjection_cosc0] = cosc0$35param;
    }
    get R2() {
      let t0;
      t0 = this[__StereographicNorthProjection_R2];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("R2")) : t0;
    }
    set R2(R2$35param) {
      this[__StereographicNorthProjection_R2] = R2$35param;
    }
    static ['_#init#tearOff'](params) {
      return new sterea.StereographicNorthProjection.init(params);
    }
    forward(p) {
      let sinc = null;
      let cosc = null;
      let cosl = null;
      let k = null;
      p.x = utils.adjust_lon(p.x - this.long0);
      super.forward(p);
      sinc = math.sin(p.y);
      cosc = math.cos(p.y);
      cosl = math.cos(p.x);
      k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
      p.x = k * cosc * math.sin(p.x);
      p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
      p.x = this.a * p.x + this.x0;
      p.y = this.a * p.y + this.y0;
      return p;
    }
    inverse(p) {
      let t0, t0$;
      let sinc = null;
      let cosc = null;
      let lon = null;
      let lat = null;
      let rho = null;
      p.x = (p.x - this.x0) / this.a;
      p.y = (p.y - this.y0) / this.a;
      t0 = p;
      t0.x = t0.x / this.k0;
      t0$ = p;
      t0$.y = t0$.y / this.k0;
      if (!(rho = math.sqrt(p.x * p.x + p.y * p.y))[$isNaN]) {
        let c = 2 * math.atan2(rho, this.R2);
        sinc = math.sin(c);
        cosc = math.cos(c);
        lat = math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
        lon = math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
      } else {
        lat = this.phic0;
        lon = 0.0;
      }
      p.x = lon;
      p.y = lat;
      super.inverse(p);
      p.x = utils.adjust_lon(p.x + this.long0);
      return p;
    }
  };
  (sterea.StereographicNorthProjection.init = function(params) {
    this[__StereographicNorthProjection_sinc0] = null;
    this[__StereographicNorthProjection_cosc0] = null;
    this[__StereographicNorthProjection_R2] = null;
    sterea.StereographicNorthProjection.__proto__.init.call(this, params);
    if (this.rc === 0) {
      return;
    }
    this.sinc0 = math.sin(this.phic0);
    this.cosc0 = math.cos(this.phic0);
    this.R2 = 2 * this.rc;
  }).prototype = sterea.StereographicNorthProjection.prototype;
  dart.addTypeTests(sterea.StereographicNorthProjection);
  dart.addTypeCaches(sterea.StereographicNorthProjection);
  dart.setGetterSignature(sterea.StereographicNorthProjection, () => ({
    __proto__: dart.getGetters(sterea.StereographicNorthProjection.__proto__),
    sinc0: core.double,
    cosc0: core.double,
    R2: core.double
  }));
  dart.setSetterSignature(sterea.StereographicNorthProjection, () => ({
    __proto__: dart.getSetters(sterea.StereographicNorthProjection.__proto__),
    sinc0: core.double,
    cosc0: core.double,
    R2: core.double
  }));
  dart.setLibraryUri(sterea.StereographicNorthProjection, I[7]);
  dart.setFieldSignature(sterea.StereographicNorthProjection, () => ({
    __proto__: dart.getFields(sterea.StereographicNorthProjection.__proto__),
    [__StereographicNorthProjection_sinc0]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicNorthProjection_cosc0]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicNorthProjection_R2]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(sterea.StereographicNorthProjection, () => ['names']);
  dart.defineLazy(sterea.StereographicNorthProjection, {
    /*sterea.StereographicNorthProjection.names*/get names() {
      return T.JSArrayOfString().of(["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"]);
    }
  }, false);
  var lat0$0 = dart.privateName(stere, "StereographicSouthProjection.lat0");
  var long0$0 = dart.privateName(stere, "StereographicSouthProjection.long0");
  var lat_ts = dart.privateName(stere, "StereographicSouthProjection.lat_ts");
  var x0$0 = dart.privateName(stere, "StereographicSouthProjection.x0");
  var y0$0 = dart.privateName(stere, "StereographicSouthProjection.y0");
  var __StereographicSouthProjection_sinlat0 = dart.privateName(stere, "_#StereographicSouthProjection#sinlat0");
  var __StereographicSouthProjection_coslat0 = dart.privateName(stere, "_#StereographicSouthProjection#coslat0");
  var __StereographicSouthProjection_rh = dart.privateName(stere, "_#StereographicSouthProjection#rh");
  var __StereographicSouthProjection_con = dart.privateName(stere, "_#StereographicSouthProjection#con");
  var __StereographicSouthProjection_cons = dart.privateName(stere, "_#StereographicSouthProjection#cons");
  var __StereographicSouthProjection_ms1 = dart.privateName(stere, "_#StereographicSouthProjection#ms1");
  var __StereographicSouthProjection_X0 = dart.privateName(stere, "_#StereographicSouthProjection#X0");
  var __StereographicSouthProjection_cosX0 = dart.privateName(stere, "_#StereographicSouthProjection#cosX0");
  var __StereographicSouthProjection_sinX0 = dart.privateName(stere, "_#StereographicSouthProjection#sinX0");
  var _ssfn = dart.privateName(stere, "_ssfn");
  stere.StereographicSouthProjection = class StereographicSouthProjection extends projection.Projection {
    get lat0() {
      return this[lat0$0];
    }
    set lat0(value) {
      this[lat0$0] = value;
    }
    get long0() {
      return this[long0$0];
    }
    set long0(value) {
      this[long0$0] = value;
    }
    get lat_ts() {
      return this[lat_ts];
    }
    set lat_ts(value) {
      this[lat_ts] = value;
    }
    get x0() {
      return this[x0$0];
    }
    set x0(value) {
      this[x0$0] = value;
    }
    get y0() {
      return this[y0$0];
    }
    set y0(value) {
      this[y0$0] = value;
    }
    get sinlat0() {
      let t0;
      t0 = this[__StereographicSouthProjection_sinlat0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("sinlat0")) : t0;
    }
    set sinlat0(sinlat0$35param) {
      this[__StereographicSouthProjection_sinlat0] = sinlat0$35param;
    }
    get coslat0() {
      let t0;
      t0 = this[__StereographicSouthProjection_coslat0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("coslat0")) : t0;
    }
    set coslat0(coslat0$35param) {
      this[__StereographicSouthProjection_coslat0] = coslat0$35param;
    }
    get rh() {
      let t0;
      t0 = this[__StereographicSouthProjection_rh];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("rh")) : t0;
    }
    set rh(rh$35param) {
      this[__StereographicSouthProjection_rh] = rh$35param;
    }
    get con() {
      let t0;
      t0 = this[__StereographicSouthProjection_con];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("con")) : t0;
    }
    set con(con$35param) {
      this[__StereographicSouthProjection_con] = con$35param;
    }
    get cons() {
      let t0;
      t0 = this[__StereographicSouthProjection_cons];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("cons")) : t0;
    }
    set cons(cons$35param) {
      this[__StereographicSouthProjection_cons] = cons$35param;
    }
    get ms1() {
      let t0;
      t0 = this[__StereographicSouthProjection_ms1];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("ms1")) : t0;
    }
    set ms1(ms1$35param) {
      this[__StereographicSouthProjection_ms1] = ms1$35param;
    }
    get X0() {
      let t0;
      t0 = this[__StereographicSouthProjection_X0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("X0")) : t0;
    }
    set X0(X0$35param) {
      this[__StereographicSouthProjection_X0] = X0$35param;
    }
    get cosX0() {
      let t0;
      t0 = this[__StereographicSouthProjection_cosX0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("cosX0")) : t0;
    }
    set cosX0(cosX0$35param) {
      this[__StereographicSouthProjection_cosX0] = cosX0$35param;
    }
    get sinX0() {
      let t0;
      t0 = this[__StereographicSouthProjection_sinX0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("sinX0")) : t0;
    }
    set sinX0(sinX0$35param) {
      this[__StereographicSouthProjection_sinX0] = sinX0$35param;
    }
    [_ssfn](phit, sinphi, eccen) {
      sinphi = sinphi * eccen;
      return math.tan(0.5 * (1.5707963267948966 + phit)) * math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen);
    }
    static ['_#init#tearOff'](params) {
      return new stere.StereographicSouthProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let sinlat = math.sin(lat);
      let coslat = math.cos(lat);
      let A = null;
      let X = null;
      let sinX = null;
      let cosX = null;
      let ts = null;
      let rh = null;
      let dlon = utils.adjust_lon(lon - this.long0);
      if (((lon - this.long0)[$abs]() - 3.141592653589793)[$abs]() <= 1e-10 && (lat + this.lat0)[$abs]() <= 1e-10) {
        p.x = 0 / 0;
        p.y = 0 / 0;
        return p;
      }
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * math.cos(dlon));
        p.x = this.a * core.num.as(A) * coslat * math.sin(dlon) + this.x0;
        p.y = this.a * core.num.as(A) * (this.coslat0 * sinlat - this.sinlat0 * coslat * math.cos(dlon)) + this.y0;
        return p;
      } else {
        X = 2 * math.atan(this[_ssfn](lat, sinlat, this.e)) - 1.5707963267948966;
        cosX = math.cos(core.num.as(X));
        sinX = math.sin(core.num.as(X));
        if (this.coslat0[$abs]() <= 1e-10) {
          ts = utils.tsfnz(this.e, lat * this.con, this.con * sinlat);
          rh = 2 * this.a * this.k0 * core.num.as(ts) / this.cons;
          p.x = this.x0 + core.num.as(dart.dsend(rh, '*', [math.sin(lon - this.long0)]));
          p.y = this.y0 - this.con * core.num.as(rh) * math.cos(lon - this.long0);
          return p;
        } else if (this.sinlat0[$abs]() < 1e-10) {
          A = 2 * this.a * this.k0 / (1 + core.num.as(dart.dsend(cosX, '*', [math.cos(dlon)])));
          p.y = core.double.as(dart.dsend(A, '*', [sinX]));
        } else {
          A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * core.num.as(sinX) + this.cosX0 * core.num.as(cosX) * math.cos(dlon)));
          p.y = core.double.as(dart.dsend(dart.dsend(A, '*', [this.cosX0 * core.num.as(sinX) - this.sinX0 * core.num.as(cosX) * math.cos(dlon)]), '+', [this.y0]));
        }
        p.x = core.double.as(dart.dsend(dart.dsend(dart.dsend(A, '*', [cosX]), '*', [math.sin(dlon)]), '+', [this.x0]));
      }
      return p;
    }
    inverse(p) {
      let t0, t0$, t0$0, t0$1;
      t0 = p;
      t0.x = t0.x - this.x0;
      t0$ = p;
      t0$.y = t0$.y - this.y0;
      let lon = null;
      let lat = null;
      let ts = null;
      let ce = null;
      let Chi = null;
      let rh = math.sqrt(p.x * p.x + p.y * p.y);
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        let c = 2 * math.atan(rh / (2 * this.a * this.k0));
        lon = this.long0;
        lat = this.lat0;
        if (rh <= 1e-10) {
          p.x = lon;
          p.y = lat;
          return p;
        }
        lat = math.asin(math.cos(c) * this.sinlat0 + p.y * math.sin(c) * this.coslat0 / rh);
        if (this.coslat0[$abs]() < 1e-10) {
          if (this.lat0 > 0) {
            lon = utils.adjust_lon(this.long0 + math.atan2(p.x, -1 * p.y));
          } else {
            lon = utils.adjust_lon(this.long0 + math.atan2(p.x, p.y));
          }
        } else {
          lon = utils.adjust_lon(this.long0 + math.atan2(p.x * math.sin(c), rh * this.coslat0 * math.cos(c) - p.y * this.sinlat0 * math.sin(c)));
        }
        p.x = lon;
        p.y = lat;
        return p;
      } else {
        if (this.coslat0[$abs]() <= 1e-10) {
          if (rh <= 1e-10) {
            lat = this.lat0;
            lon = this.long0;
            p.x = lon;
            p.y = lat;
            return p;
          }
          t0$0 = p;
          t0$0.x = t0$0.x * this.con;
          t0$1 = p;
          t0$1.y = t0$1.y * this.con;
          ts = rh * this.cons / (2 * this.a * this.k0);
          lat = this.con * utils.phi2z(this.e, ts);
          lon = this.con * utils.adjust_lon(this.con * this.long0 + math.atan2(p.x, -1 * p.y));
        } else {
          ce = 2 * math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
          lon = this.long0;
          if (rh <= 1e-10) {
            Chi = this.X0;
          } else {
            Chi = math.asin(math.cos(ce) * this.sinX0 + p.y * math.sin(ce) * this.cosX0 / rh);
            lon = utils.adjust_lon(this.long0 + math.atan2(p.x * math.sin(ce), rh * this.cosX0 * math.cos(ce) - p.y * this.sinX0 * math.sin(ce)));
          }
          lat = -1 * utils.phi2z(this.e, math.tan(0.5 * (1.5707963267948966 + Chi)));
        }
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (stere.StereographicSouthProjection.init = function(params) {
    let t0;
    this[__StereographicSouthProjection_sinlat0] = null;
    this[__StereographicSouthProjection_coslat0] = null;
    this[__StereographicSouthProjection_rh] = null;
    this[__StereographicSouthProjection_con] = null;
    this[__StereographicSouthProjection_cons] = null;
    this[__StereographicSouthProjection_ms1] = null;
    this[__StereographicSouthProjection_X0] = null;
    this[__StereographicSouthProjection_cosX0] = null;
    this[__StereographicSouthProjection_sinX0] = null;
    this[lat0$0] = dart.nullCheck(params.lat0);
    this[long0$0] = params.long0;
    this[lat_ts] = (t0 = params.lat_ts, t0 == null ? 0 / 0 : t0);
    this[x0$0] = dart.nullCheck(params.x0);
    this[y0$0] = dart.nullCheck(params.y0);
    stere.StereographicSouthProjection.__proto__.init.call(this, params);
    this.coslat0 = math.cos(this.lat0);
    this.sinlat0 = math.sin(this.lat0);
    if (this.sphere != null && dart.nullCheck(this.sphere)) {
      if (this.k0 === 1.0 && !this.lat_ts[$isNaN] && this.coslat0[$abs]() <= 1e-10) {
        this.k0 = 0.5 * (1 + utils.sign(this.lat0) * math.sin(this.lat_ts));
      }
    } else {
      if (this.coslat0[$abs]() <= 1e-10) {
        if (this.lat0 > 0) {
          this.con = 1.0;
        } else {
          this.con = -1.0;
        }
      }
      this.cons = math.sqrt(math.pow(1 + this.e, 1 + this.e) * math.pow(1 - this.e, 1 - this.e));
      if (this.k0 === 1 && !this.lat_ts[$isNaN] && this.coslat0[$abs]() <= 1e-10) {
        this.k0 = 0.5 * this.cons * utils.msfnz(this.e, math.sin(this.lat_ts), math.cos(this.lat_ts)) / utils.tsfnz(this.e, this.con * this.lat_ts, this.con * math.sin(this.lat_ts));
      }
      this.ms1 = utils.msfnz(this.e, this.sinlat0, this.coslat0);
      this.X0 = 2 * math.atan(this[_ssfn](this.lat0, this.sinlat0, this.e)) - 1.5707963267948966;
      this.cosX0 = math.cos(this.X0);
      this.sinX0 = math.sin(this.X0);
    }
  }).prototype = stere.StereographicSouthProjection.prototype;
  dart.addTypeTests(stere.StereographicSouthProjection);
  dart.addTypeCaches(stere.StereographicSouthProjection);
  dart.setMethodSignature(stere.StereographicSouthProjection, () => ({
    __proto__: dart.getMethods(stere.StereographicSouthProjection.__proto__),
    [_ssfn]: dart.fnType(core.double, [core.double, core.double, core.double]),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(stere.StereographicSouthProjection, () => ({
    __proto__: dart.getGetters(stere.StereographicSouthProjection.__proto__),
    sinlat0: core.double,
    coslat0: core.double,
    rh: core.double,
    con: core.double,
    cons: core.double,
    ms1: core.double,
    X0: core.double,
    cosX0: core.double,
    sinX0: core.double
  }));
  dart.setSetterSignature(stere.StereographicSouthProjection, () => ({
    __proto__: dart.getSetters(stere.StereographicSouthProjection.__proto__),
    sinlat0: core.double,
    coslat0: core.double,
    rh: core.double,
    con: core.double,
    cons: core.double,
    ms1: core.double,
    X0: core.double,
    cosX0: core.double,
    sinX0: core.double
  }));
  dart.setLibraryUri(stere.StereographicSouthProjection, I[8]);
  dart.setFieldSignature(stere.StereographicSouthProjection, () => ({
    __proto__: dart.getFields(stere.StereographicSouthProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    lat_ts: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    [__StereographicSouthProjection_sinlat0]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicSouthProjection_coslat0]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicSouthProjection_rh]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicSouthProjection_con]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicSouthProjection_cons]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicSouthProjection_ms1]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicSouthProjection_X0]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicSouthProjection_cosX0]: dart.fieldType(dart.nullable(core.double)),
    [__StereographicSouthProjection_sinX0]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(stere.StereographicSouthProjection, () => ['names']);
  dart.defineLazy(stere.StereographicSouthProjection, {
    /*stere.StereographicSouthProjection.names*/get names() {
      return T.JSArrayOfString().of(["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"]);
    }
  }, false);
  var __SwissObliqueMercatorProjection_x0 = dart.privateName(somerc, "_#SwissObliqueMercatorProjection#x0");
  var __SwissObliqueMercatorProjection_y0 = dart.privateName(somerc, "_#SwissObliqueMercatorProjection#y0");
  var __SwissObliqueMercatorProjection_lambda0 = dart.privateName(somerc, "_#SwissObliqueMercatorProjection#lambda0");
  var __SwissObliqueMercatorProjection_R = dart.privateName(somerc, "_#SwissObliqueMercatorProjection#R");
  var __SwissObliqueMercatorProjection_alpha = dart.privateName(somerc, "_#SwissObliqueMercatorProjection#alpha");
  var __SwissObliqueMercatorProjection_b0 = dart.privateName(somerc, "_#SwissObliqueMercatorProjection#b0");
  var __SwissObliqueMercatorProjection_K = dart.privateName(somerc, "_#SwissObliqueMercatorProjection#K");
  somerc.SwissObliqueMercatorProjection = class SwissObliqueMercatorProjection extends projection.Projection {
    get x0() {
      let t0;
      t0 = this[__SwissObliqueMercatorProjection_x0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t0;
    }
    set x0(x0$35param) {
      this[__SwissObliqueMercatorProjection_x0] = x0$35param;
    }
    get y0() {
      let t0;
      t0 = this[__SwissObliqueMercatorProjection_y0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t0;
    }
    set y0(y0$35param) {
      this[__SwissObliqueMercatorProjection_y0] = y0$35param;
    }
    get lambda0() {
      let t0;
      t0 = this[__SwissObliqueMercatorProjection_lambda0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("lambda0")) : t0;
    }
    set lambda0(lambda0$35param) {
      this[__SwissObliqueMercatorProjection_lambda0] = lambda0$35param;
    }
    get R() {
      let t0;
      t0 = this[__SwissObliqueMercatorProjection_R];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("R")) : t0;
    }
    set R(R$35param) {
      this[__SwissObliqueMercatorProjection_R] = R$35param;
    }
    get alpha() {
      let t0;
      t0 = this[__SwissObliqueMercatorProjection_alpha];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("alpha")) : t0;
    }
    set alpha(alpha$35param) {
      this[__SwissObliqueMercatorProjection_alpha] = alpha$35param;
    }
    get b0() {
      let t0;
      t0 = this[__SwissObliqueMercatorProjection_b0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("b0")) : t0;
    }
    set b0(b0$35param) {
      this[__SwissObliqueMercatorProjection_b0] = b0$35param;
    }
    get K() {
      let t0;
      t0 = this[__SwissObliqueMercatorProjection_K];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("K")) : t0;
    }
    set K(K$35param) {
      this[__SwissObliqueMercatorProjection_K] = K$35param;
    }
    static ['_#init#tearOff'](params) {
      return new somerc.SwissObliqueMercatorProjection.init(params);
    }
    forward(p) {
      let Sa1 = math.log(math.tan(3.141592653589793 / 4 - p.y / 2));
      let Sa2 = this.e / 2 * math.log((1 + this.e * math.sin(p.y)) / (1 - this.e * math.sin(p.y)));
      let S = -this.alpha * (Sa1 + Sa2) + this.K;
      let b = 2 * (math.atan(math.exp(S)) - 3.141592653589793 / 4);
      let I = this.alpha * (p.x - this.lambda0);
      let rotI = math.atan(math.sin(I) / (math.sin(this.b0) * math.tan(b) + math.cos(this.b0) * math.cos(I)));
      let rotB = math.asin(math.cos(this.b0) * math.sin(b) - math.sin(this.b0) * math.cos(b) * math.cos(I));
      p.y = this.R / 2 * math.log((1 + math.sin(rotB)) / (1 - math.sin(rotB))) + this.y0;
      p.x = this.R * rotI + this.x0;
      return p;
    }
    inverse(p) {
      let Y = p.x - this.x0;
      let X = p.y - this.y0;
      let rotI = Y / this.R;
      let rotB = 2 * (math.atan(math.exp(X / this.R)) - 3.141592653589793 / 4);
      let b = math.asin(math.cos(this.b0) * math.sin(rotB) + math.sin(this.b0) * math.cos(rotB) * math.cos(rotI));
      let I = math.atan(math.sin(rotI) / (math.cos(this.b0) * math.cos(rotI) - math.sin(this.b0) * math.tan(rotB)));
      let lambda = this.lambda0 + I / this.alpha;
      let S = 0.0;
      let phy = b;
      let prevPhy = -1000.0;
      let iteration = 0;
      while ((phy - prevPhy)[$abs]() > 1e-7) {
        if ((iteration = iteration + 1) > 20) {
          return p;
        }
        S = 1 / this.alpha * (math.log(math.tan(3.141592653589793 / 4 + b / 2)) - this.K) + this.e * math.log(math.tan(3.141592653589793 / 4 + math.asin(this.e * math.sin(phy)) / 2));
        prevPhy = phy;
        phy = 2 * math.atan(math.exp(S)) - 3.141592653589793 / 2;
      }
      p.x = lambda;
      p.y = phy;
      return p;
    }
  };
  (somerc.SwissObliqueMercatorProjection.init = function(params) {
    this[__SwissObliqueMercatorProjection_x0] = null;
    this[__SwissObliqueMercatorProjection_y0] = null;
    this[__SwissObliqueMercatorProjection_lambda0] = null;
    this[__SwissObliqueMercatorProjection_R] = null;
    this[__SwissObliqueMercatorProjection_alpha] = null;
    this[__SwissObliqueMercatorProjection_b0] = null;
    this[__SwissObliqueMercatorProjection_K] = null;
    somerc.SwissObliqueMercatorProjection.__proto__.init.call(this, params);
    let lat0 = dart.nullCheck(params.lat0);
    let long0 = params.long0;
    this.x0 = dart.nullCheck(params.x0);
    this.y0 = dart.nullCheck(params.y0);
    let phy0 = lat0;
    this.lambda0 = long0;
    let sinPhy0 = math.sin(phy0);
    let semiMajorAxis = this.a;
    let invF = dart.nullCheck(this.rf);
    let flattening = 1 / invF;
    let e2 = 2 * flattening - math.pow(flattening, 2);
    this.e = math.sqrt(e2);
    this.R = this.k0 * semiMajorAxis * math.sqrt(1 - e2) / (1 - e2 * math.pow(sinPhy0, 2));
    this.alpha = math.sqrt(1 + e2 / (1 - e2) * math.pow(math.cos(phy0), 4));
    this.b0 = math.asin(sinPhy0 / this.alpha);
    let k1 = math.log(math.tan(3.141592653589793 / 4 + this.b0 / 2));
    let k2 = math.log(math.tan(3.141592653589793 / 4 + phy0 / 2));
    let k3 = math.log((1 + this.e * sinPhy0) / (1 - this.e * sinPhy0));
    this.K = k1 - this.alpha * k2 + this.alpha * this.e / 2 * k3;
  }).prototype = somerc.SwissObliqueMercatorProjection.prototype;
  dart.addTypeTests(somerc.SwissObliqueMercatorProjection);
  dart.addTypeCaches(somerc.SwissObliqueMercatorProjection);
  dart.setMethodSignature(somerc.SwissObliqueMercatorProjection, () => ({
    __proto__: dart.getMethods(somerc.SwissObliqueMercatorProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(somerc.SwissObliqueMercatorProjection, () => ({
    __proto__: dart.getGetters(somerc.SwissObliqueMercatorProjection.__proto__),
    x0: core.double,
    y0: core.double,
    lambda0: core.double,
    R: core.double,
    alpha: core.double,
    b0: core.double,
    K: core.double
  }));
  dart.setSetterSignature(somerc.SwissObliqueMercatorProjection, () => ({
    __proto__: dart.getSetters(somerc.SwissObliqueMercatorProjection.__proto__),
    x0: core.double,
    y0: core.double,
    lambda0: core.double,
    R: core.double,
    alpha: core.double,
    b0: core.double,
    K: core.double
  }));
  dart.setLibraryUri(somerc.SwissObliqueMercatorProjection, I[9]);
  dart.setFieldSignature(somerc.SwissObliqueMercatorProjection, () => ({
    __proto__: dart.getFields(somerc.SwissObliqueMercatorProjection.__proto__),
    [__SwissObliqueMercatorProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__SwissObliqueMercatorProjection_y0]: dart.fieldType(dart.nullable(core.double)),
    [__SwissObliqueMercatorProjection_lambda0]: dart.fieldType(dart.nullable(core.double)),
    [__SwissObliqueMercatorProjection_R]: dart.fieldType(dart.nullable(core.double)),
    [__SwissObliqueMercatorProjection_alpha]: dart.fieldType(dart.nullable(core.double)),
    [__SwissObliqueMercatorProjection_b0]: dart.fieldType(dart.nullable(core.double)),
    [__SwissObliqueMercatorProjection_K]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(somerc.SwissObliqueMercatorProjection, () => ['names']);
  dart.defineLazy(somerc.SwissObliqueMercatorProjection, {
    /*somerc.SwissObliqueMercatorProjection.names*/get names() {
      return T.JSArrayOfString().of(["somerc"]);
    }
  }, false);
  var lat0$1 = dart.privateName(sinu, "SinusoidalProjection.lat0");
  var long0$1 = dart.privateName(sinu, "SinusoidalProjection.long0");
  var x0$1 = dart.privateName(sinu, "SinusoidalProjection.x0");
  var y0$1 = dart.privateName(sinu, "SinusoidalProjection.y0");
  var m = dart.privateName(sinu, "SinusoidalProjection.m");
  var __SinusoidalProjection_en = dart.privateName(sinu, "_#SinusoidalProjection#en");
  var __SinusoidalProjection_n = dart.privateName(sinu, "_#SinusoidalProjection#n");
  var __SinusoidalProjection_C_y = dart.privateName(sinu, "_#SinusoidalProjection#C_y");
  var __SinusoidalProjection_C_x = dart.privateName(sinu, "_#SinusoidalProjection#C_x");
  sinu.SinusoidalProjection = class SinusoidalProjection extends projection.Projection {
    get lat0() {
      return this[lat0$1];
    }
    set lat0(value) {
      this[lat0$1] = value;
    }
    get long0() {
      return this[long0$1];
    }
    set long0(value) {
      this[long0$1] = value;
    }
    get x0() {
      return this[x0$1];
    }
    set x0(value) {
      this[x0$1] = value;
    }
    get y0() {
      return this[y0$1];
    }
    set y0(value) {
      this[y0$1] = value;
    }
    get m() {
      return this[m];
    }
    set m(value) {
      this[m] = value;
    }
    get en() {
      let t0;
      t0 = this[__SinusoidalProjection_en];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("en")) : t0;
    }
    set en(en$35param) {
      this[__SinusoidalProjection_en] = en$35param;
    }
    get n() {
      let t0;
      t0 = this[__SinusoidalProjection_n];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("n")) : t0;
    }
    set n(n$35param) {
      this[__SinusoidalProjection_n] = n$35param;
    }
    get C_y() {
      let t0;
      t0 = this[__SinusoidalProjection_C_y];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("C_y")) : t0;
    }
    set C_y(C_y$35param) {
      this[__SinusoidalProjection_C_y] = C_y$35param;
    }
    get C_x() {
      let t0;
      t0 = this[__SinusoidalProjection_C_x];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("C_x")) : t0;
    }
    set C_x(C_x$35param) {
      this[__SinusoidalProjection_C_x] = C_x$35param;
    }
    static ['_#init#tearOff'](params) {
      return new sinu.SinusoidalProjection.init(params);
    }
    forward(p) {
      let x = null;
      let y = null;
      let lon = p.x;
      let lat = p.y;
      lon = utils.adjust_lon(lon - this.long0);
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        if (this.m == null) {
          lat = this.n !== 1 ? math.asin(this.n * math.sin(lat)) : lat;
        } else {
          let k = this.n * math.sin(lat);
          for (let i = 0; i < sinu.SinusoidalProjection.MAX_ITER; i = i + 1) {
            let V = (dart.nullCheck(this.m) * lat + math.sin(lat) - k) / (dart.nullCheck(this.m) + math.cos(lat));
            lat = lat - V;
            if (V[$abs]() < 1e-10) {
              break;
            }
          }
        }
        x = this.a * this.C_x * lon * (dart.nullCheck(this.m) + math.cos(lat));
        y = this.a * this.C_y * lat;
      } else {
        let s = math.sin(lat);
        let c = math.cos(lat);
        y = this.a * utils.pj_mlfn(lat, s, c, this.en);
        x = this.a * lon * c / math.sqrt(1 - this.es * s * s);
      }
      p.x = x;
      p.y = y;
      return p;
    }
    inverse(p) {
      let t0, t0$;
      let lat = null;
      let temp = null;
      let lon = null;
      let s = null;
      t0 = p;
      t0.x = t0.x - this.x0;
      lon = p.x / this.a;
      t0$ = p;
      t0$.y = t0$.y - this.y0;
      lat = p.y / this.a;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        lat = lat / this.C_y;
        lon = lon / (this.C_x * (dart.nullCheck(this.m) + math.cos(lat)));
        if (this.m != null) {
          lat = utils.asinz((dart.nullCheck(this.m) * lat + math.sin(lat)) / this.n);
        } else if (this.n !== 1) {
          lat = utils.asinz(math.sin(lat) / this.n);
        }
        lon = utils.adjust_lon(lon + this.long0);
        lat = utils.adjust_lat(lat);
      } else {
        lat = utils.pj_inv_mlfn(p.y / this.a, this.es, this.en);
        s = lat[$abs]();
        if (s < 1.5707963267948966) {
          s = math.sin(lat);
          temp = this.long0 + p.x * math.sqrt(1 - this.es * s * s) / (this.a * math.cos(lat));
          lon = utils.adjust_lon(temp);
        } else if (s - 1e-10 < 1.5707963267948966) {
          lon = this.long0;
        }
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (sinu.SinusoidalProjection.init = function(params) {
    this[__SinusoidalProjection_en] = null;
    this[__SinusoidalProjection_n] = null;
    this[m] = null;
    this[__SinusoidalProjection_C_y] = null;
    this[__SinusoidalProjection_C_x] = null;
    this[lat0$1] = params.lat0;
    this[long0$1] = params.long0;
    this[x0$1] = dart.nullCheck(params.x0);
    this[y0$1] = dart.nullCheck(params.y0);
    sinu.SinusoidalProjection.__proto__.init.call(this, params);
    if (this.sphere == null || this.sphere != null && !dart.nullCheck(this.sphere)) {
      this.en = utils.pj_enfn(this.es);
    } else {
      this.n = 1.0;
      this.m = 0.0;
      this.es = 0.0;
      this.C_y = math.sqrt((dart.nullCheck(this.m) + 1) / this.n);
      this.C_x = this.C_y / (dart.nullCheck(this.m) + 1);
    }
  }).prototype = sinu.SinusoidalProjection.prototype;
  dart.addTypeTests(sinu.SinusoidalProjection);
  dart.addTypeCaches(sinu.SinusoidalProjection);
  dart.setMethodSignature(sinu.SinusoidalProjection, () => ({
    __proto__: dart.getMethods(sinu.SinusoidalProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(sinu.SinusoidalProjection, () => ({
    __proto__: dart.getGetters(sinu.SinusoidalProjection.__proto__),
    en: core.List$(core.double),
    n: core.double,
    C_y: core.double,
    C_x: core.double
  }));
  dart.setSetterSignature(sinu.SinusoidalProjection, () => ({
    __proto__: dart.getSetters(sinu.SinusoidalProjection.__proto__),
    en: core.List$(core.double),
    n: core.double,
    C_y: core.double,
    C_x: core.double
  }));
  dart.setLibraryUri(sinu.SinusoidalProjection, I[10]);
  dart.setFieldSignature(sinu.SinusoidalProjection, () => ({
    __proto__: dart.getFields(sinu.SinusoidalProjection.__proto__),
    [__SinusoidalProjection_en]: dart.fieldType(dart.nullable(core.List$(core.double))),
    lat0: dart.fieldType(dart.nullable(core.double)),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    [__SinusoidalProjection_n]: dart.fieldType(dart.nullable(core.double)),
    m: dart.fieldType(dart.nullable(core.double)),
    [__SinusoidalProjection_C_y]: dart.fieldType(dart.nullable(core.double)),
    [__SinusoidalProjection_C_x]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(sinu.SinusoidalProjection, () => ['names', 'MAX_ITER']);
  dart.defineLazy(sinu.SinusoidalProjection, {
    /*sinu.SinusoidalProjection.names*/get names() {
      return T.JSArrayOfString().of(["Sinusoidal", "sinu"]);
    },
    /*sinu.SinusoidalProjection.MAX_ITER*/get MAX_ITER() {
      return 20;
    }
  }, false);
  var x0$2 = dart.privateName(robin, "RobinsonProjection.x0");
  var y0$2 = dart.privateName(robin, "RobinsonProjection.y0");
  var long0$2 = dart.privateName(robin, "RobinsonProjection.long0");
  var es$ = dart.privateName(robin, "RobinsonProjection.es");
  var title = dart.privateName(robin, "RobinsonProjection.title");
  var _poly3_val = dart.privateName(robin, "_poly3_val");
  var _poly3_der = dart.privateName(robin, "_poly3_der");
  var _newton_rapshon = dart.privateName(robin, "_newton_rapshon");
  robin.RobinsonProjection = class RobinsonProjection extends projection.Projection {
    get x0() {
      return this[x0$2];
    }
    set x0(value) {
      this[x0$2] = value;
    }
    get y0() {
      return this[y0$2];
    }
    set y0(value) {
      this[y0$2] = value;
    }
    get long0() {
      return this[long0$2];
    }
    set long0(value) {
      this[long0$2] = value;
    }
    get es() {
      return this[es$];
    }
    set es(value) {
      this[es$] = value;
    }
    get title() {
      return this[title];
    }
    set title(value) {
      this[title] = value;
    }
    static ['_#init#tearOff'](params) {
      return new robin.RobinsonProjection.init(params);
    }
    forward(ll) {
      let lon = utils.adjust_lon(ll.x - this.long0);
      let dphi = ll.y[$abs]();
      let i = (dphi * robin.C1)[$floor]();
      if (i < 0) {
        i = 0;
      } else if (i >= robin.NODES) {
        i = robin.NODES - 1;
      }
      dphi = 57.29577951308232 * (dphi - robin.RC1 * i);
      let xy = new point$.Point.new({x: this[_poly3_val](robin.COEFS_X[$_get](i), dphi) * lon, y: this[_poly3_val](robin.COEFS_Y[$_get](i), dphi)});
      if (ll.y < 0) {
        xy.y = -xy.y;
      }
      xy.x = xy.x * this.a * robin.FXC + this.x0;
      xy.y = xy.y * this.a * robin.FYC + this.y0;
      return xy;
    }
    inverse(xy) {
      let t0, t0$;
      let ll = new point$.Point.new({x: (xy.x - this.x0) / (this.a * robin.FXC), y: (xy.y - this.y0)[$abs]() / (this.a * robin.FYC)});
      if (ll.y >= 1) {
        t0 = ll;
        t0.x = t0.x / robin.COEFS_X[$_get](robin.NODES)[$_get](0);
        ll.y = xy.y < 0 ? -1.5707963267948966 : 1.5707963267948966;
      } else {
        let i = (ll.y * robin.NODES)[$floor]();
        if (i < 0) {
          i = 0;
        } else if (i >= robin.NODES) {
          i = robin.NODES - 1;
        }
        for (;;) {
          if (robin.COEFS_Y[$_get](i)[$_get](0) > ll.y) {
            i = i - 1;
          } else if (robin.COEFS_Y[$_get](i + 1)[$_get](0) <= ll.y) {
            i = i + 1;
          } else {
            break;
          }
        }
        let coefs = robin.COEFS_Y[$_get](i);
        let t = 5 * (ll.y - coefs[$_get](0)) / (robin.COEFS_Y[$_get](i + 1)[$_get](0) - coefs[$_get](0));
        t = this[_newton_rapshon](dart.fn(x => (this[_poly3_val](coefs, core.double.as(x)) - ll.y) / this[_poly3_der](coefs, core.double.as(x)), T.dynamicTodouble()), t, 1e-10, 100);
        t0$ = ll;
        t0$.x = t0$.x / this[_poly3_val](robin.COEFS_X[$_get](i), t);
        ll.y = (5 * i + t) * 0.017453292519943295;
        if (xy.y < 0) {
          ll.y = -ll.y;
        }
      }
      ll.x = utils.adjust_lon(ll.x + this.long0);
      return ll;
    }
    [_poly3_val](coefs, x) {
      return coefs[$_get](0) + x * (coefs[$_get](1) + x * (coefs[$_get](2) + x * coefs[$_get](3)));
    }
    [_poly3_der](coefs, x) {
      return coefs[$_get](1) + x * (2 * coefs[$_get](2) + x * 3 * coefs[$_get](3));
    }
    [_newton_rapshon](f_df, start, max_err, iters) {
      let x = start;
      for (let i = 0; i < core.num.as(iters); i = i + 1) {
        let upd = dart.dcall(f_df, [x]);
        x = x - core.num.as(upd);
        if (dart.dtest(dart.dsend(dart.dsend(upd, 'abs', []), '<', [max_err]))) {
          break;
        }
      }
      return x;
    }
  };
  (robin.RobinsonProjection.init = function(params) {
    let t0, t0$, t0$0;
    this[x0$2] = (t0 = params.x0, t0 == null ? 0.0 : t0);
    this[y0$2] = (t0$ = params.y0, t0$ == null ? 0.0 : t0$);
    this[long0$2] = params.long0[$isNaN] ? 0.0 : params.long0;
    this[es$] = 0.0;
    this[title] = (t0$0 = params.title, t0$0 == null ? "Robinson" : t0$0);
    robin.RobinsonProjection.__proto__.init.call(this, params);
    ;
  }).prototype = robin.RobinsonProjection.prototype;
  dart.addTypeTests(robin.RobinsonProjection);
  dart.addTypeCaches(robin.RobinsonProjection);
  dart.setMethodSignature(robin.RobinsonProjection, () => ({
    __proto__: dart.getMethods(robin.RobinsonProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point]),
    [_poly3_val]: dart.fnType(core.double, [core.List$(core.double), core.double]),
    [_poly3_der]: dart.fnType(core.double, [core.List$(core.double), core.double]),
    [_newton_rapshon]: dart.fnType(core.double, [core.Function, core.double, dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(robin.RobinsonProjection, I[11]);
  dart.setFieldSignature(robin.RobinsonProjection, () => ({
    __proto__: dart.getFields(robin.RobinsonProjection.__proto__),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    es: dart.fieldType(core.double),
    title: dart.fieldType(core.String)
  }));
  dart.setStaticFieldSignature(robin.RobinsonProjection, () => ['names']);
  dart.defineLazy(robin.RobinsonProjection, {
    /*robin.RobinsonProjection.names*/get names() {
      return T.JSArrayOfString().of(["Robinson", "robin"]);
    }
  }, false);
  dart.defineLazy(robin, {
    /*robin.COEFS_X*/get COEFS_X() {
      return T.JSArrayOfListOfdouble().of([T.JSArrayOfdouble().of([1.0, 2.2199e-17, -0.0000715515, 0.0000031103]), T.JSArrayOfdouble().of([0.9986, -0.000482243, -0.000024897, -0.0000013309]), T.JSArrayOfdouble().of([0.9954, -0.00083103, -0.0000448605, -9.86701e-7]), T.JSArrayOfdouble().of([0.99, -0.00135364, -0.000059661, 0.0000036777]), T.JSArrayOfdouble().of([0.9822, -0.00167442, -0.00000449547, -0.00000572411]), T.JSArrayOfdouble().of([0.973, -0.00214868, -0.0000903571, 1.8736e-8]), T.JSArrayOfdouble().of([0.96, -0.00305085, -0.0000900761, 0.00000164917]), T.JSArrayOfdouble().of([0.9427, -0.00382792, -0.0000653386, -0.0000026154]), T.JSArrayOfdouble().of([0.9216, -0.00467746, -0.00010457, 0.00000481243]), T.JSArrayOfdouble().of([0.8962, -0.00536223, -0.0000323831, -0.00000543432]), T.JSArrayOfdouble().of([0.8679, -0.00609363, -0.000113898, 0.00000332484]), T.JSArrayOfdouble().of([0.835, -0.00698325, -0.0000640253, 9.34959e-7]), T.JSArrayOfdouble().of([0.7986, -0.00755338, -0.0000500009, 9.35324e-7]), T.JSArrayOfdouble().of([0.7597, -0.00798324, -0.000035971, -0.00000227626]), T.JSArrayOfdouble().of([0.7186, -0.00851367, -0.0000701149, -0.0000086303]), T.JSArrayOfdouble().of([0.6732, -0.00986209, -0.000199569, 0.0000191974]), T.JSArrayOfdouble().of([0.6213, -0.010418, 0.0000883923, 0.00000624051]), T.JSArrayOfdouble().of([0.5722, -0.00906601, 0.000182, 0.00000624051]), T.JSArrayOfdouble().of([0.5322, -0.00677797, 0.000275608, 0.00000624051])]);
    },
    set COEFS_X(_) {},
    /*robin.COEFS_Y*/get COEFS_Y() {
      return T.JSArrayOfListOfdouble().of([T.JSArrayOfdouble().of([-5.20417e-18, 0.0124, 1.21431e-18, -8.45284e-11]), T.JSArrayOfdouble().of([0.062, 0.0124, -1.26793e-9, 4.22642e-10]), T.JSArrayOfdouble().of([0.124, 0.0124, 5.07171e-9, -1.60604e-9]), T.JSArrayOfdouble().of([0.186, 0.0123999, -1.90189e-8, 6.00152e-9]), T.JSArrayOfdouble().of([0.248, 0.0124002, 7.10039e-8, -2.24e-8]), T.JSArrayOfdouble().of([0.31, 0.0123992, -2.64997e-7, 8.35986e-8]), T.JSArrayOfdouble().of([0.372, 0.0124029, 9.88983e-7, -3.11994e-7]), T.JSArrayOfdouble().of([0.434, 0.0123893, -0.00000369093, -4.35621e-7]), T.JSArrayOfdouble().of([0.4958, 0.0123198, -0.0000102252, -3.45523e-7]), T.JSArrayOfdouble().of([0.5571, 0.0121916, -0.0000154081, -5.82288e-7]), T.JSArrayOfdouble().of([0.6176, 0.0119938, -0.0000241424, -5.25327e-7]), T.JSArrayOfdouble().of([0.6769, 0.011713, -0.0000320223, -5.16405e-7]), T.JSArrayOfdouble().of([0.7346, 0.0113541, -0.0000397684, -6.09052e-7]), T.JSArrayOfdouble().of([0.7903, 0.0109107, -0.0000489042, -0.00000104739]), T.JSArrayOfdouble().of([0.8435, 0.0103431, -0.000064615, -1.40374e-9]), T.JSArrayOfdouble().of([0.8936, 0.00969686, -0.000064636, -0.000008547]), T.JSArrayOfdouble().of([0.9394, 0.00840947, -0.000192841, -0.0000042106]), T.JSArrayOfdouble().of([0.9761, 0.00616527, -0.000256, -0.0000042106]), T.JSArrayOfdouble().of([1.0, 0.00328947, -0.000319159, -0.0000042106])]);
    },
    set COEFS_Y(_) {},
    /*robin.FXC*/get FXC() {
      return 0.8487;
    },
    set FXC(_) {},
    /*robin.FYC*/get FYC() {
      return 1.3523;
    },
    set FYC(_) {},
    /*robin.C1*/get C1() {
      return 57.29577951308232 / 5;
    },
    set C1(_) {},
    /*robin.RC1*/get RC1() {
      return 1 / robin.C1;
    },
    set RC1(_) {},
    /*robin.NODES*/get NODES() {
      return 18;
    },
    set NODES(_) {}
  }, false);
  var lat0$2 = dart.privateName(qsc, "QuadrilateralizedSphericalCubeProjection.lat0");
  var long0$3 = dart.privateName(qsc, "QuadrilateralizedSphericalCubeProjection.long0");
  var x0$3 = dart.privateName(qsc, "QuadrilateralizedSphericalCubeProjection.x0");
  var y0$3 = dart.privateName(qsc, "QuadrilateralizedSphericalCubeProjection.y0");
  var lat_ts$ = dart.privateName(qsc, "QuadrilateralizedSphericalCubeProjection.lat_ts");
  var title$ = dart.privateName(qsc, "QuadrilateralizedSphericalCubeProjection.title");
  var __QuadrilateralizedSphericalCubeProjection_face = dart.privateName(qsc, "_#QuadrilateralizedSphericalCubeProjection#face");
  var __QuadrilateralizedSphericalCubeProjection_one_minus_f = dart.privateName(qsc, "_#QuadrilateralizedSphericalCubeProjection#one_minus_f");
  var __QuadrilateralizedSphericalCubeProjection_one_minus_f_squared = dart.privateName(qsc, "_#QuadrilateralizedSphericalCubeProjection#one_minus_f_squared");
  var _qsc_shift_lon_origin = dart.privateName(qsc, "_qsc_shift_lon_origin");
  var _qsc_fwd_equat_face_theta = dart.privateName(qsc, "_qsc_fwd_equat_face_theta");
  qsc.QuadrilateralizedSphericalCubeProjection = class QuadrilateralizedSphericalCubeProjection extends projection.Projection {
    get lat0() {
      return this[lat0$2];
    }
    set lat0(value) {
      this[lat0$2] = value;
    }
    get long0() {
      return this[long0$3];
    }
    set long0(value) {
      this[long0$3] = value;
    }
    get x0() {
      return this[x0$3];
    }
    set x0(value) {
      this[x0$3] = value;
    }
    get y0() {
      return this[y0$3];
    }
    set y0(value) {
      this[y0$3] = value;
    }
    get lat_ts() {
      return this[lat_ts$];
    }
    set lat_ts(value) {
      this[lat_ts$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get face() {
      let t0;
      t0 = this[__QuadrilateralizedSphericalCubeProjection_face];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("face")) : t0;
    }
    set face(face$35param) {
      this[__QuadrilateralizedSphericalCubeProjection_face] = face$35param;
    }
    get one_minus_f() {
      let t0;
      t0 = this[__QuadrilateralizedSphericalCubeProjection_one_minus_f];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("one_minus_f")) : t0;
    }
    set one_minus_f(one_minus_f$35param) {
      this[__QuadrilateralizedSphericalCubeProjection_one_minus_f] = one_minus_f$35param;
    }
    get one_minus_f_squared() {
      let t0;
      t0 = this[__QuadrilateralizedSphericalCubeProjection_one_minus_f_squared];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("one_minus_f_squared")) : t0;
    }
    set one_minus_f_squared(one_minus_f_squared$35param) {
      this[__QuadrilateralizedSphericalCubeProjection_one_minus_f_squared] = one_minus_f_squared$35param;
    }
    static ['_#init#tearOff'](params) {
      return new qsc.QuadrilateralizedSphericalCubeProjection.init(params);
    }
    forward(p) {
      let t0;
      let xy = new point$.Point.new({x: 0.0, y: 0.0});
      let lat = null;
      let lon = null;
      let theta = null;
      let phi = null;
      let t = null;
      let mu = null;
      let area = new (T.IdentityMapOfString$int()).from(["value", 0]);
      t0 = p;
      t0.x = t0.x - this.long0;
      if (this.es !== 0) {
        lat = math.atan(this.one_minus_f_squared * math.tan(p.y));
      } else {
        lat = p.y;
      }
      lon = p.x;
      if (this.face === faces.TOP) {
        phi = 1.5707963267948966 - lat;
        if (lon >= 0.7853981633974483 && lon <= 1.5707963267948966 + 0.7853981633974483) {
          area[$_set]("value", areas.AREA_0);
          theta = lon - 1.5707963267948966;
        } else if (lon > 1.5707963267948966 + 0.7853981633974483 || lon <= -(1.5707963267948966 + 0.7853981633974483)) {
          area[$_set]("value", areas.AREA_1);
          theta = lon > 0.0 ? lon - 3.14159265359 : lon + 3.14159265359;
        } else if (lon > -(1.5707963267948966 + 0.7853981633974483) && lon <= -0.7853981633974483) {
          area[$_set]("value", areas.AREA_2);
          theta = lon + 1.5707963267948966;
        } else {
          area[$_set]("value", areas.AREA_3);
          theta = lon;
        }
      } else if (this.face === faces.BOTTOM) {
        phi = 1.5707963267948966 + lat;
        if (lon >= 0.7853981633974483 && lon <= 1.5707963267948966 + 0.7853981633974483) {
          area[$_set]("value", areas.AREA_0);
          theta = -lon + 1.5707963267948966;
        } else if (lon < 0.7853981633974483 && lon >= -0.7853981633974483) {
          area[$_set]("value", areas.AREA_1);
          theta = -lon;
        } else if (lon < -0.7853981633974483 && lon >= -(1.5707963267948966 + 0.7853981633974483)) {
          area[$_set]("value", areas.AREA_2);
          theta = -lon - 1.5707963267948966;
        } else {
          area[$_set]("value", areas.AREA_3);
          theta = lon > 0.0 ? -lon + 3.14159265359 : -lon - 3.14159265359;
        }
      } else {
        let q = null;
        let r = null;
        let s = null;
        let sinlat = null;
        let coslat = null;
        let sinlon = null;
        let coslon = null;
        if (this.face === faces.RIGHT) {
          lon = this[_qsc_shift_lon_origin](lon, 1.5707963267948966);
        } else if (this.face === faces.BACK) {
          lon = this[_qsc_shift_lon_origin](lon, 3.14159265359);
        } else if (this.face === faces.LEFT) {
          lon = this[_qsc_shift_lon_origin](lon, -1.5707963267948966);
        }
        sinlat = math.sin(lat);
        coslat = math.cos(lat);
        sinlon = math.sin(lon);
        coslon = math.cos(lon);
        q = coslat * coslon;
        r = coslat * sinlon;
        s = sinlat;
        if (this.face === faces.FRONT) {
          phi = math.acos(q);
          theta = this[_qsc_fwd_equat_face_theta](phi, s, r, area);
        } else if (this.face === faces.RIGHT) {
          phi = math.acos(r);
          theta = this[_qsc_fwd_equat_face_theta](phi, s, -q, area);
        } else if (this.face === faces.BACK) {
          phi = math.acos(-q);
          theta = this[_qsc_fwd_equat_face_theta](phi, s, -r, area);
        } else if (this.face === faces.LEFT) {
          phi = math.acos(-r);
          theta = this[_qsc_fwd_equat_face_theta](phi, s, q, area);
        } else {
          phi = theta = 0.0;
          area[$_set]("value", areas.AREA_0);
        }
      }
      mu = math.atan(12 / 3.14159265359 * (theta + math.acos(math.sin(theta) * math.cos(0.7853981633974483)) - 1.5707963267948966));
      t = math.sqrt((1 - math.cos(phi)) / (math.cos(mu) * math.cos(mu)) / (1 - math.cos(math.atan(1 / math.cos(theta)))));
      if (area[$_get]("value") === areas.AREA_1) {
        mu = mu + 1.5707963267948966;
      } else if (area[$_get]("value") === areas.AREA_2) {
        mu = mu + 3.14159265359;
      } else if (area[$_get]("value") === areas.AREA_3) {
        mu = mu + 1.5 * 3.14159265359;
      }
      xy.x = t * math.cos(mu);
      xy.y = t * math.sin(mu);
      xy.x = xy.x * this.a + this.x0;
      xy.y = xy.y * this.a + this.y0;
      p.x = xy.x;
      p.y = xy.y;
      return p;
    }
    inverse(p) {
      let lp = new (T.IdentityMapOfString$double()).from(["lam", 0.0, "phi", 0.0]);
      let mu = null;
      let nu = null;
      let cosmu = null;
      let tannu = null;
      let tantheta = null;
      let theta = null;
      let cosphi = null;
      let phi = null;
      let t = null;
      let area = new (T.IdentityMapOfString$int()).from(["value", 0]);
      p.x = (p.x - this.x0) / this.a;
      p.y = (p.y - this.y0) / this.a;
      nu = math.atan(math.sqrt(p.x * p.x + p.y * p.y));
      mu = math.atan2(p.y, p.x);
      if (p.x >= 0.0 && p.x >= p.y[$abs]()) {
        area[$_set]("value", areas.AREA_0);
      } else if (p.y >= 0.0 && p.y >= p.x[$abs]()) {
        area[$_set]("value", areas.AREA_1);
        mu = mu - 1.5707963267948966;
      } else if (p.x < 0.0 && -p.x >= p.y[$abs]()) {
        area[$_set]("value", areas.AREA_2);
        mu = mu < 0.0 ? mu + 3.14159265359 : mu - 3.14159265359;
      } else {
        area[$_set]("value", areas.AREA_3);
        mu = mu + 1.5707963267948966;
      }
      t = 3.14159265359 / 12 * math.tan(mu);
      tantheta = math.sin(t) / (math.cos(t) - 1 / math.sqrt(2));
      theta = math.atan(tantheta);
      cosmu = math.cos(mu);
      tannu = math.tan(nu);
      cosphi = 1 - cosmu * cosmu * tannu * tannu * (1 - math.cos(math.atan(1 / math.cos(theta))));
      if (cosphi < -1) {
        cosphi = -1.0;
      } else if (cosphi > 1) {
        cosphi = 1.0;
      }
      if (this.face === faces.TOP) {
        phi = math.acos(cosphi);
        lp[$_set]("phi", 1.5707963267948966 - phi);
        if (area[$_get]("value") === areas.AREA_0) {
          lp[$_set]("lam", theta + 1.5707963267948966);
        } else if (area[$_get]("value") === areas.AREA_1) {
          lp[$_set]("lam", theta < 0.0 ? theta + 3.14159265359 : theta - 3.14159265359);
        } else if (area[$_get]("value") === areas.AREA_2) {
          lp[$_set]("lam", theta - 1.5707963267948966);
        } else {
          lp[$_set]("lam", theta);
        }
      } else if (this.face === faces.BOTTOM) {
        phi = math.acos(cosphi);
        lp[$_set]("phi", phi - 1.5707963267948966);
        if (area[$_get]("value") === areas.AREA_0) {
          lp[$_set]("lam", -theta + 1.5707963267948966);
        } else if (area[$_get]("value") === areas.AREA_1) {
          lp[$_set]("lam", -theta);
        } else if (area[$_get]("value") === areas.AREA_2) {
          lp[$_set]("lam", -theta - 1.5707963267948966);
        } else {
          lp[$_set]("lam", theta < 0.0 ? -theta - 3.14159265359 : -theta + 3.14159265359);
        }
      } else {
        let q = null;
        let r = null;
        let s = null;
        q = cosphi;
        t = q * q;
        if (t >= 1) {
          s = 0.0;
        } else {
          s = math.sqrt(1 - t) * math.sin(theta);
        }
        t = t + s * s;
        if (t >= 1) {
          r = 0.0;
        } else {
          r = math.sqrt(1 - t);
        }
        if (area[$_get]("value") === areas.AREA_1) {
          t = r;
          r = -s;
          s = t;
        } else if (area[$_get]("value") === areas.AREA_2) {
          r = -r;
          s = -s;
        } else if (area[$_get]("value") === areas.AREA_3) {
          t = r;
          r = s;
          s = -t;
        }
        if (this.face === faces.RIGHT) {
          t = q;
          q = -r;
          r = t;
        } else if (this.face === faces.BACK) {
          q = -q;
          r = -r;
        } else if (this.face === faces.LEFT) {
          t = q;
          q = r;
          r = -t;
        }
        lp[$_set]("phi", math.acos(-s) - 1.5707963267948966);
        lp[$_set]("lam", math.atan2(r, q));
        if (this.face === faces.RIGHT) {
          lp[$_set]("lam", this[_qsc_shift_lon_origin](dart.nullCheck(lp[$_get]("lam")), -1.5707963267948966));
        } else if (this.face === faces.BACK) {
          lp[$_set]("lam", this[_qsc_shift_lon_origin](dart.nullCheck(lp[$_get]("lam")), -3.14159265359));
        } else if (this.face === faces.LEFT) {
          lp[$_set]("lam", this[_qsc_shift_lon_origin](dart.nullCheck(lp[$_get]("lam")), 1.5707963267948966));
        }
      }
      if (this.es !== 0) {
        let invert_sign = null;
        let tanphi = null;
        let xa = null;
        invert_sign = dart.nullCheck(lp[$_get]("phi")) < 0 ? 1 : 0;
        tanphi = math.tan(dart.nullCheck(lp[$_get]("phi")));
        xa = this.b / math.sqrt(tanphi * tanphi + this.one_minus_f_squared);
        lp[$_set]("phi", math.atan(math.sqrt(this.a * this.a - xa * xa) / (this.one_minus_f * xa)));
        if (invert_sign !== 0) {
          lp[$_set]("phi", -dart.nullCheck(lp[$_get]("phi")));
        }
      }
      p.x = dart.nullCheck(lp[$_get]("lam")) + this.long0;
      p.y = dart.nullCheck(lp[$_get]("phi"));
      return p;
    }
    [_qsc_fwd_equat_face_theta](phi, y, x, area) {
      let theta = null;
      if (phi < 1e-10) {
        area[$_set]("value", areas.AREA_0);
        theta = 0.0;
      } else {
        theta = math.atan2(y, x);
        if (theta[$abs]() <= 0.7853981633974483) {
          area[$_set]("value", areas.AREA_0);
        } else if (theta > 0.7853981633974483 && theta <= 1.5707963267948966 + 0.7853981633974483) {
          area[$_set]("value", areas.AREA_1);
          theta = theta - 1.5707963267948966;
        } else if (theta > 1.5707963267948966 + 0.7853981633974483 || theta <= -(1.5707963267948966 + 0.7853981633974483)) {
          area[$_set]("value", areas.AREA_2);
          theta = theta >= 0.0 ? theta - 3.14159265359 : theta + 3.14159265359;
        } else {
          area[$_set]("value", areas.AREA_3);
          theta = theta + 1.5707963267948966;
        }
      }
      return theta;
    }
    [_qsc_shift_lon_origin](lon, offset) {
      let slon = lon + offset;
      if (slon < -3.14159265359) {
        slon = slon + 6.283185307179586;
      } else if (slon > 3.14159265359) {
        slon = slon - 6.283185307179586;
      }
      return slon;
    }
  };
  (qsc.QuadrilateralizedSphericalCubeProjection.init = function(params) {
    let t0, t0$, t0$0, t0$1, t0$2;
    this[__QuadrilateralizedSphericalCubeProjection_face] = null;
    this[__QuadrilateralizedSphericalCubeProjection_one_minus_f] = null;
    this[__QuadrilateralizedSphericalCubeProjection_one_minus_f_squared] = null;
    this[lat0$2] = (t0 = params.lat0, t0 == null ? 0.0 : t0);
    this[long0$3] = params.long0[$isNaN] ? 0.0 : params.long0;
    this[x0$3] = (t0$ = params.x0, t0$ == null ? 0.0 : t0$);
    this[y0$3] = (t0$0 = params.y0, t0$0 == null ? 0.0 : t0$0);
    this[lat_ts$] = (t0$1 = params.lat_ts, t0$1 == null ? 0.0 : t0$1);
    this[title$] = (t0$2 = params.title, t0$2 == null ? "Quadrilateralized Spherical Cube" : t0$2);
    qsc.QuadrilateralizedSphericalCubeProjection.__proto__.init.call(this, params);
    if (this.lat0 >= 1.5707963267948966 - 0.7853981633974483 / 2.0) {
      this.face = faces.TOP;
    } else if (this.lat0 <= -(1.5707963267948966 - 0.7853981633974483 / 2.0)) {
      this.face = faces.BOTTOM;
    } else if (this.long0[$abs]() <= 0.7853981633974483) {
      this.face = faces.FRONT;
    } else if (this.long0[$abs]() <= 1.5707963267948966 + 0.7853981633974483) {
      this.face = this.long0 > 0.0 ? faces.RIGHT : faces.LEFT;
    } else {
      this.face = faces.BACK;
    }
    if (this.es !== 0) {
      this.one_minus_f = 1 - (this.a - this.b) / this.a;
      this.one_minus_f_squared = this.one_minus_f * this.one_minus_f;
    }
  }).prototype = qsc.QuadrilateralizedSphericalCubeProjection.prototype;
  dart.addTypeTests(qsc.QuadrilateralizedSphericalCubeProjection);
  dart.addTypeCaches(qsc.QuadrilateralizedSphericalCubeProjection);
  dart.setMethodSignature(qsc.QuadrilateralizedSphericalCubeProjection, () => ({
    __proto__: dart.getMethods(qsc.QuadrilateralizedSphericalCubeProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point]),
    [_qsc_fwd_equat_face_theta]: dart.fnType(core.double, [core.double, core.double, core.double, core.Map$(core.String, core.int)]),
    [_qsc_shift_lon_origin]: dart.fnType(core.double, [core.double, core.double])
  }));
  dart.setGetterSignature(qsc.QuadrilateralizedSphericalCubeProjection, () => ({
    __proto__: dart.getGetters(qsc.QuadrilateralizedSphericalCubeProjection.__proto__),
    face: core.int,
    one_minus_f: core.double,
    one_minus_f_squared: core.double
  }));
  dart.setSetterSignature(qsc.QuadrilateralizedSphericalCubeProjection, () => ({
    __proto__: dart.getSetters(qsc.QuadrilateralizedSphericalCubeProjection.__proto__),
    face: core.int,
    one_minus_f: core.double,
    one_minus_f_squared: core.double
  }));
  dart.setLibraryUri(qsc.QuadrilateralizedSphericalCubeProjection, I[12]);
  dart.setFieldSignature(qsc.QuadrilateralizedSphericalCubeProjection, () => ({
    __proto__: dart.getFields(qsc.QuadrilateralizedSphericalCubeProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    lat_ts: dart.fieldType(core.double),
    title: dart.fieldType(core.String),
    [__QuadrilateralizedSphericalCubeProjection_face]: dart.fieldType(dart.nullable(core.int)),
    [__QuadrilateralizedSphericalCubeProjection_one_minus_f]: dart.fieldType(dart.nullable(core.double)),
    [__QuadrilateralizedSphericalCubeProjection_one_minus_f_squared]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(qsc.QuadrilateralizedSphericalCubeProjection, () => ['names']);
  dart.defineLazy(qsc.QuadrilateralizedSphericalCubeProjection, {
    /*qsc.QuadrilateralizedSphericalCubeProjection.names*/get names() {
      return T.JSArrayOfString().of(["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"]);
    }
  }, false);
  var lat0$3 = dart.privateName(poly, "PolyconicProjection.lat0");
  var long0$4 = dart.privateName(poly, "PolyconicProjection.long0");
  var x0$4 = dart.privateName(poly, "PolyconicProjection.x0");
  var y0$4 = dart.privateName(poly, "PolyconicProjection.y0");
  var __PolyconicProjection_temp = dart.privateName(poly, "_#PolyconicProjection#temp");
  var __PolyconicProjection_e1 = dart.privateName(poly, "_#PolyconicProjection#e1");
  var __PolyconicProjection_ml0 = dart.privateName(poly, "_#PolyconicProjection#ml0");
  var __PolyconicProjection_e0 = dart.privateName(poly, "_#PolyconicProjection#e0");
  var __PolyconicProjection_e2 = dart.privateName(poly, "_#PolyconicProjection#e2");
  var __PolyconicProjection_e3 = dart.privateName(poly, "_#PolyconicProjection#e3");
  poly.PolyconicProjection = class PolyconicProjection extends projection.Projection {
    get lat0() {
      return this[lat0$3];
    }
    set lat0(value) {
      this[lat0$3] = value;
    }
    get long0() {
      return this[long0$4];
    }
    set long0(value) {
      this[long0$4] = value;
    }
    get x0() {
      return this[x0$4];
    }
    set x0(value) {
      this[x0$4] = value;
    }
    get y0() {
      return this[y0$4];
    }
    set y0(value) {
      this[y0$4] = value;
    }
    get temp() {
      let t0;
      t0 = this[__PolyconicProjection_temp];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("temp")) : t0;
    }
    set temp(temp$35param) {
      this[__PolyconicProjection_temp] = temp$35param;
    }
    get e1() {
      let t0;
      t0 = this[__PolyconicProjection_e1];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("e1")) : t0;
    }
    set e1(e1$35param) {
      this[__PolyconicProjection_e1] = e1$35param;
    }
    get ml0() {
      let t0;
      t0 = this[__PolyconicProjection_ml0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("ml0")) : t0;
    }
    set ml0(ml0$35param) {
      this[__PolyconicProjection_ml0] = ml0$35param;
    }
    get e0() {
      let t0;
      t0 = this[__PolyconicProjection_e0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("e0")) : t0;
    }
    set e0(e0$35param) {
      this[__PolyconicProjection_e0] = e0$35param;
    }
    get e2() {
      let t0;
      t0 = this[__PolyconicProjection_e2];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("e2")) : t0;
    }
    set e2(e2$35param) {
      this[__PolyconicProjection_e2] = e2$35param;
    }
    get e3() {
      let t0;
      t0 = this[__PolyconicProjection_e3];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("e3")) : t0;
    }
    set e3(e3$35param) {
      this[__PolyconicProjection_e3] = e3$35param;
    }
    static ['_#init#tearOff'](params) {
      return new poly.PolyconicProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let x = null;
      let y = null;
      let el = null;
      let dlon = utils.adjust_lon(lon - this.long0);
      el = dlon * math.sin(lat);
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        if (lat[$abs]() <= 1e-10) {
          x = this.a * dlon;
          y = -1 * this.a * this.lat0;
        } else {
          x = this.a * math.sin(el) / math.tan(lat);
          y = this.a * (utils.adjust_lat(lat - this.lat0) + (1 - math.cos(el)) / math.tan(lat));
        }
      } else {
        if (lat[$abs]() <= 1e-10) {
          x = this.a * dlon;
          y = -1 * this.ml0;
        } else {
          let nl = utils.gN(this.a, this.e, math.sin(lat)) / math.tan(lat);
          x = nl * math.sin(el);
          y = this.a * utils.mlfn(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - math.cos(el));
        }
      }
      p.x = x + this.x0;
      p.y = y + this.y0;
      return p;
    }
    inverse(p) {
      let lon = null;
      let lat = null;
      let x = null;
      let y = null;
      let al = null;
      let bl = null;
      let phi = null;
      let dphi = null;
      lat = 0 / 0;
      x = p.x - this.x0;
      y = p.y - this.y0;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        if ((y + this.a * this.lat0)[$abs]() <= 1e-10) {
          lon = utils.adjust_lon(x / this.a + this.long0);
          lat = 0.0;
        } else {
          al = this.lat0 + y / this.a;
          bl = x * x / this.a / this.a + al * al;
          phi = al;
          let tanphi = null;
          for (let i = poly.MAX_ITER; i > 0; i = i - 1) {
            tanphi = math.tan(phi);
            dphi = -1 * (al * (phi * core.num.as(tanphi) + 1) - phi - 0.5 * (phi * phi + bl) * core.num.as(tanphi)) / ((phi - al) / core.num.as(tanphi) - 1);
            phi = phi + dphi;
            if (dphi[$abs]() <= 1e-10) {
              lat = phi;
              break;
            }
          }
          lon = utils.adjust_lon(this.long0 + math.asin(x * math.tan(phi) / this.a) / math.sin(lat));
        }
      } else {
        if ((y + this.ml0)[$abs]() <= 1e-10) {
          lat = 0.0;
          lon = utils.adjust_lon(this.long0 + x / this.a);
        } else {
          al = (this.ml0 + y) / this.a;
          bl = x * x / this.a / this.a + al * al;
          phi = al;
          let cl = null;
          let mln = null;
          let mlnp = null;
          let ma = null;
          let con = null;
          for (let i = poly.MAX_ITER; i > 0; i = i - 1) {
            con = this.e * math.sin(phi);
            cl = math.sqrt(1 - core.num.as(dart.dsend(con, '*', [con]))) * math.tan(phi);
            mln = this.a * utils.mlfn(this.e0, this.e1, this.e2, this.e3, phi);
            mlnp = this.e0 - 2 * this.e1 * math.cos(2 * phi) + 4 * this.e2 * math.cos(4 * phi) - 6 * this.e3 * math.cos(6 * phi);
            ma = dart.dsend(mln, '/', [this.a]);
            dphi = (al * core.num.as(dart.dsend(dart.dsend(cl, '*', [ma]), '+', [1])) - core.num.as(ma) - 0.5 * core.num.as(cl) * core.num.as(dart.dsend(dart.dsend(ma, '*', [ma]), '+', [bl]))) / (this.es * math.sin(2 * phi) * core.num.as(dart.dsend(dart.dsend(dart.dsend(ma, '*', [ma]), '+', [bl]), '-', [2 * al * core.num.as(ma)])) / (4 * core.num.as(cl)) + (al - core.num.as(ma)) * core.num.as(dart.dsend(dart.dsend(cl, '*', [mlnp]), '-', [2 / math.sin(2 * phi)])) - core.num.as(mlnp));
            phi = phi - dphi;
            if (dphi[$abs]() <= 1e-10) {
              lat = phi;
              break;
            }
          }
          cl = math.sqrt(1 - this.es * math.pow(math.sin(lat), 2)) * math.tan(lat);
          lon = utils.adjust_lon(this.long0 + math.asin(x * core.num.as(cl) / this.a) / math.sin(lat));
        }
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (poly.PolyconicProjection.init = function(params) {
    this[__PolyconicProjection_temp] = null;
    this[__PolyconicProjection_e1] = null;
    this[__PolyconicProjection_ml0] = null;
    this[__PolyconicProjection_e0] = null;
    this[__PolyconicProjection_e2] = null;
    this[__PolyconicProjection_e3] = null;
    this[lat0$3] = dart.nullCheck(params.lat0);
    this[long0$4] = params.long0;
    this[x0$4] = dart.nullCheck(params.x0);
    this[y0$4] = dart.nullCheck(params.y0);
    poly.PolyconicProjection.__proto__.init.call(this, params);
    this.temp = this.b / this.a;
    this.es = 1 - math.pow(this.temp, 2);
    this.e = math.sqrt(this.es);
    this.e0 = utils.e0fn(this.es);
    this.e1 = utils.e1fn(this.es);
    this.e2 = utils.e2fn(this.es);
    this.e3 = utils.e3fn(this.es);
    this.ml0 = this.a * utils.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }).prototype = poly.PolyconicProjection.prototype;
  dart.addTypeTests(poly.PolyconicProjection);
  dart.addTypeCaches(poly.PolyconicProjection);
  dart.setMethodSignature(poly.PolyconicProjection, () => ({
    __proto__: dart.getMethods(poly.PolyconicProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(poly.PolyconicProjection, () => ({
    __proto__: dart.getGetters(poly.PolyconicProjection.__proto__),
    temp: core.double,
    e1: core.double,
    ml0: core.double,
    e0: core.double,
    e2: core.double,
    e3: core.double
  }));
  dart.setSetterSignature(poly.PolyconicProjection, () => ({
    __proto__: dart.getSetters(poly.PolyconicProjection.__proto__),
    temp: core.double,
    e1: core.double,
    ml0: core.double,
    e0: core.double,
    e2: core.double,
    e3: core.double
  }));
  dart.setLibraryUri(poly.PolyconicProjection, I[13]);
  dart.setFieldSignature(poly.PolyconicProjection, () => ({
    __proto__: dart.getFields(poly.PolyconicProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    [__PolyconicProjection_temp]: dart.fieldType(dart.nullable(core.double)),
    [__PolyconicProjection_e1]: dart.fieldType(dart.nullable(core.double)),
    [__PolyconicProjection_ml0]: dart.fieldType(dart.nullable(core.double)),
    [__PolyconicProjection_e0]: dart.fieldType(dart.nullable(core.double)),
    [__PolyconicProjection_e2]: dart.fieldType(dart.nullable(core.double)),
    [__PolyconicProjection_e3]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(poly.PolyconicProjection, () => ['names']);
  dart.defineLazy(poly.PolyconicProjection, {
    /*poly.PolyconicProjection.names*/get names() {
      return T.JSArrayOfString().of(["Polyconic", "poly"]);
    }
  }, false);
  dart.defineLazy(poly, {
    /*poly.MAX_ITER*/get MAX_ITER() {
      return 20;
    },
    set MAX_ITER(_) {}
  }, false);
  var lat0$4 = dart.privateName(ortho, "OrthographicProjection.lat0");
  var long0$5 = dart.privateName(ortho, "OrthographicProjection.long0");
  var x0$5 = dart.privateName(ortho, "OrthographicProjection.x0");
  var y0$5 = dart.privateName(ortho, "OrthographicProjection.y0");
  var __OrthographicProjection_sin_p14 = dart.privateName(ortho, "_#OrthographicProjection#sin_p14");
  var __OrthographicProjection_cos_p14 = dart.privateName(ortho, "_#OrthographicProjection#cos_p14");
  ortho.OrthographicProjection = class OrthographicProjection extends projection.Projection {
    get lat0() {
      return this[lat0$4];
    }
    set lat0(value) {
      this[lat0$4] = value;
    }
    get long0() {
      return this[long0$5];
    }
    set long0(value) {
      this[long0$5] = value;
    }
    get x0() {
      return this[x0$5];
    }
    set x0(value) {
      this[x0$5] = value;
    }
    get y0() {
      return this[y0$5];
    }
    set y0(value) {
      this[y0$5] = value;
    }
    get sin_p14() {
      let t0;
      t0 = this[__OrthographicProjection_sin_p14];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("sin_p14")) : t0;
    }
    set sin_p14(sin_p14$35param) {
      this[__OrthographicProjection_sin_p14] = sin_p14$35param;
    }
    get cos_p14() {
      let t0;
      t0 = this[__OrthographicProjection_cos_p14];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("cos_p14")) : t0;
    }
    set cos_p14(cos_p14$35param) {
      this[__OrthographicProjection_cos_p14] = cos_p14$35param;
    }
    static ['_#init#tearOff'](params) {
      return new ortho.OrthographicProjection.init(params);
    }
    forward(p) {
      let sinphi = null;
      let cosphi = null;
      let dlon = null;
      let coslon = null;
      let ksp = null;
      let g = null;
      let x = null;
      let y = null;
      let lon = p.x;
      let lat = p.y;
      dlon = utils.adjust_lon(lon - this.long0);
      sinphi = math.sin(lat);
      cosphi = math.cos(lat);
      coslon = math.cos(dlon);
      g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
      ksp = 1.0;
      if (g > 0 || g[$abs]() <= 1e-10) {
        x = this.a * ksp * cosphi * math.sin(dlon);
        y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
        p.x = x;
        p.y = y;
        return p;
      }
      dart.throw("Shouldn't reach");
    }
    inverse(p) {
      let t0, t0$;
      let rh = null;
      let z = null;
      let sinz = null;
      let cosz = null;
      let con = null;
      let lon = null;
      let lat = null;
      t0 = p;
      t0.x = t0.x - this.x0;
      t0$ = p;
      t0$.y = t0$.y - this.y0;
      rh = math.sqrt(p.x * p.x + p.y * p.y);
      z = utils.asinz(rh / this.a);
      sinz = math.sin(z);
      cosz = math.cos(z);
      lon = this.long0;
      if (rh[$abs]() <= 1e-10) {
        lat = this.lat0;
        p.x = lon;
        p.y = lat;
        return p;
      }
      lat = utils.asinz(cosz * this.sin_p14 + p.y * sinz * this.cos_p14 / rh);
      con = this.lat0[$abs]() - 1.5707963267948966;
      if (con[$abs]() <= 1e-10) {
        if (this.lat0 >= 0) {
          lon = utils.adjust_lon(this.long0 + math.atan2(p.x, -p.y));
        } else {
          lon = utils.adjust_lon(this.long0 - math.atan2(-p.x, p.y));
        }
        p.x = lon;
        p.y = lat;
        return p;
      }
      lon = utils.adjust_lon(this.long0 + math.atan2(p.x * sinz, rh * this.cos_p14 * cosz - p.y * this.sin_p14 * sinz));
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (ortho.OrthographicProjection.init = function(params) {
    this[__OrthographicProjection_sin_p14] = null;
    this[__OrthographicProjection_cos_p14] = null;
    this[lat0$4] = dart.nullCheck(params.lat0);
    this[long0$5] = params.long0;
    this[x0$5] = dart.nullCheck(params.x0);
    this[y0$5] = dart.nullCheck(params.y0);
    ortho.OrthographicProjection.__proto__.init.call(this, params);
    this.sin_p14 = math.sin(this.lat0);
    this.cos_p14 = math.cos(this.lat0);
  }).prototype = ortho.OrthographicProjection.prototype;
  dart.addTypeTests(ortho.OrthographicProjection);
  dart.addTypeCaches(ortho.OrthographicProjection);
  dart.setMethodSignature(ortho.OrthographicProjection, () => ({
    __proto__: dart.getMethods(ortho.OrthographicProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(ortho.OrthographicProjection, () => ({
    __proto__: dart.getGetters(ortho.OrthographicProjection.__proto__),
    sin_p14: core.double,
    cos_p14: core.double
  }));
  dart.setSetterSignature(ortho.OrthographicProjection, () => ({
    __proto__: dart.getSetters(ortho.OrthographicProjection.__proto__),
    sin_p14: core.double,
    cos_p14: core.double
  }));
  dart.setLibraryUri(ortho.OrthographicProjection, I[14]);
  dart.setFieldSignature(ortho.OrthographicProjection, () => ({
    __proto__: dart.getFields(ortho.OrthographicProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    [__OrthographicProjection_sin_p14]: dart.fieldType(dart.nullable(core.double)),
    [__OrthographicProjection_cos_p14]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(ortho.OrthographicProjection, () => ['names']);
  dart.defineLazy(ortho.OrthographicProjection, {
    /*ortho.OrthographicProjection.names*/get names() {
      return T.JSArrayOfString().of(["ortho"]);
    }
  }, false);
  var lat0$5 = dart.privateName(omerc, "HotineObliqueMercatorProjection.lat0");
  var long0$6 = dart.privateName(omerc, "HotineObliqueMercatorProjection.long0");
  var longc = dart.privateName(omerc, "HotineObliqueMercatorProjection.longc");
  var x0$6 = dart.privateName(omerc, "HotineObliqueMercatorProjection.x0");
  var y0$6 = dart.privateName(omerc, "HotineObliqueMercatorProjection.y0");
  var lat1 = dart.privateName(omerc, "HotineObliqueMercatorProjection.lat1");
  var lat2 = dart.privateName(omerc, "HotineObliqueMercatorProjection.lat2");
  var long1 = dart.privateName(omerc, "HotineObliqueMercatorProjection.long1");
  var long2 = dart.privateName(omerc, "HotineObliqueMercatorProjection.long2");
  var alpha = dart.privateName(omerc, "HotineObliqueMercatorProjection.alpha");
  var no_off = dart.privateName(omerc, "HotineObliqueMercatorProjection.no_off");
  var no_rot = dart.privateName(omerc, "HotineObliqueMercatorProjection.no_rot");
  var __HotineObliqueMercatorProjection_bl = dart.privateName(omerc, "_#HotineObliqueMercatorProjection#bl");
  var __HotineObliqueMercatorProjection_al = dart.privateName(omerc, "_#HotineObliqueMercatorProjection#al");
  var __HotineObliqueMercatorProjection_el = dart.privateName(omerc, "_#HotineObliqueMercatorProjection#el");
  var __HotineObliqueMercatorProjection_gamma0 = dart.privateName(omerc, "_#HotineObliqueMercatorProjection#gamma0");
  var __HotineObliqueMercatorProjection_uc = dart.privateName(omerc, "_#HotineObliqueMercatorProjection#uc");
  omerc.HotineObliqueMercatorProjection = class HotineObliqueMercatorProjection extends projection.Projection {
    get lat0() {
      return this[lat0$5];
    }
    set lat0(value) {
      this[lat0$5] = value;
    }
    get long0() {
      return this[long0$6];
    }
    set long0(value) {
      this[long0$6] = value;
    }
    get longc() {
      return this[longc];
    }
    set longc(value) {
      this[longc] = value;
    }
    get x0() {
      return this[x0$6];
    }
    set x0(value) {
      this[x0$6] = value;
    }
    get y0() {
      return this[y0$6];
    }
    set y0(value) {
      this[y0$6] = value;
    }
    get lat1() {
      return this[lat1];
    }
    set lat1(value) {
      this[lat1] = value;
    }
    get lat2() {
      return this[lat2];
    }
    set lat2(value) {
      this[lat2] = value;
    }
    get long1() {
      return this[long1];
    }
    set long1(value) {
      this[long1] = value;
    }
    get long2() {
      return this[long2];
    }
    set long2(value) {
      this[long2] = value;
    }
    get alpha() {
      return this[alpha];
    }
    set alpha(value) {
      this[alpha] = value;
    }
    get no_off() {
      return this[no_off];
    }
    set no_off(value) {
      this[no_off] = value;
    }
    get no_rot() {
      return this[no_rot];
    }
    set no_rot(value) {
      this[no_rot] = value;
    }
    get bl() {
      let t0;
      t0 = this[__HotineObliqueMercatorProjection_bl];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("bl")) : t0;
    }
    set bl(bl$35param) {
      this[__HotineObliqueMercatorProjection_bl] = bl$35param;
    }
    get al() {
      let t0;
      t0 = this[__HotineObliqueMercatorProjection_al];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("al")) : t0;
    }
    set al(al$35param) {
      this[__HotineObliqueMercatorProjection_al] = al$35param;
    }
    get el() {
      let t0;
      t0 = this[__HotineObliqueMercatorProjection_el];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("el")) : t0;
    }
    set el(el$35param) {
      this[__HotineObliqueMercatorProjection_el] = el$35param;
    }
    get gamma0() {
      let t0;
      t0 = this[__HotineObliqueMercatorProjection_gamma0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("gamma0")) : t0;
    }
    set gamma0(gamma0$35param) {
      this[__HotineObliqueMercatorProjection_gamma0] = gamma0$35param;
    }
    get uc() {
      let t0;
      t0 = this[__HotineObliqueMercatorProjection_uc];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("uc")) : t0;
    }
    set uc(uc$35param) {
      this[__HotineObliqueMercatorProjection_uc] = uc$35param;
    }
    static ['_#init#tearOff'](params) {
      return new omerc.HotineObliqueMercatorProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let dlon = utils.adjust_lon(lon - this.long0);
      let us = null;
      let vs = null;
      let con = null;
      if ((lat[$abs]() - 1.5707963267948966)[$abs]() <= 1e-10) {
        if (lat > 0) {
          con = -1.0;
        } else {
          con = 1.0;
        }
        vs = this.al / this.bl * math.log(math.tan(0.7853981633974483 + con * this.gamma0 * 0.5));
        us = -1 * con * 1.5707963267948966 * this.al / this.bl;
      } else {
        let t = utils.tsfnz(this.e, lat, math.sin(lat));
        let ql = this.el / math.pow(t, this.bl);
        let sl = 0.5 * (ql - 1 / ql);
        let tl = 0.5 * (ql + 1 / ql);
        let vl = math.sin(this.bl * dlon);
        let ul = (sl * math.sin(this.gamma0) - vl * math.cos(this.gamma0)) / tl;
        if ((ul[$abs]() - 1)[$abs]() <= 1e-10) {
          vs = 1 / 0;
        } else {
          vs = 0.5 * this.al * math.log((1 - ul) / (1 + ul)) / this.bl;
        }
        if (math.cos(this.bl * dlon)[$abs]() <= 1e-10) {
          us = this.al * this.bl * dlon;
        } else {
          us = this.al * math.atan2(sl * math.cos(this.gamma0) + vl * math.sin(this.gamma0), math.cos(this.bl * dlon)) / this.bl;
        }
      }
      if (this.no_rot) {
        p.x = this.x0 + us;
        p.y = this.y0 + vs;
      } else {
        us = us - this.uc;
        p.x = this.x0 + vs * math.cos(dart.nullCheck(this.alpha)) + us * math.sin(dart.nullCheck(this.alpha));
        p.y = this.y0 + us * math.cos(dart.nullCheck(this.alpha)) - vs * math.sin(dart.nullCheck(this.alpha));
      }
      return p;
    }
    inverse(p) {
      let us = null;
      let vs = null;
      if (this.no_rot) {
        vs = p.y - this.y0;
        us = p.x - this.x0;
      } else {
        vs = (p.x - this.x0) * math.cos(dart.nullCheck(this.alpha)) - (p.y - this.y0) * math.sin(dart.nullCheck(this.alpha));
        us = (p.y - this.y0) * math.cos(dart.nullCheck(this.alpha)) + (p.x - this.x0) * math.sin(dart.nullCheck(this.alpha));
        us = us + this.uc;
      }
      let qp = math.exp(-1 * this.bl * vs / this.al);
      let sp = 0.5 * (qp - 1 / qp);
      let tp = 0.5 * (qp + 1 / qp);
      let vp = math.sin(this.bl * us / this.al);
      let up = (vp * math.cos(this.gamma0) + sp * math.sin(this.gamma0)) / tp;
      let ts = math.pow(this.el / math.sqrt((1 + up) / (1 - up)), 1 / this.bl);
      if ((up - 1)[$abs]() < 1e-10) {
        p.x = this.long0;
        p.y = 1.5707963267948966;
      } else if ((up + 1)[$abs]() < 1e-10) {
        p.x = this.long0;
        p.y = -1 * 1.5707963267948966;
      } else {
        p.y = utils.phi2z(this.e, ts);
        p.x = utils.adjust_lon(this.long0 - math.atan2(sp * math.cos(this.gamma0) - vp * math.sin(this.gamma0), math.cos(this.bl * us / this.al)) / this.bl);
      }
      return p;
    }
  };
  (omerc.HotineObliqueMercatorProjection.init = function(params) {
    this[__HotineObliqueMercatorProjection_bl] = null;
    this[__HotineObliqueMercatorProjection_al] = null;
    this[__HotineObliqueMercatorProjection_el] = null;
    this[__HotineObliqueMercatorProjection_gamma0] = null;
    this[__HotineObliqueMercatorProjection_uc] = null;
    this[lat0$5] = dart.nullCheck(params.lat0);
    this[long0$6] = params.long0;
    this[longc] = params.longc;
    this[x0$6] = dart.nullCheck(params.x0);
    this[y0$6] = dart.nullCheck(params.y0);
    this[lat1] = params.lat1;
    this[lat2] = params.lat2;
    this[long1] = params.long1;
    this[long2] = params.long2;
    this[alpha] = params.alpha;
    this[no_off] = dart.equals(params.map[$_get]("no_off"), true);
    this[no_rot] = dart.equals(params.map[$_get]("no_rot"), true);
    omerc.HotineObliqueMercatorProjection.__proto__.init.call(this, params);
    if (this.k0 === 0.0 || this.k0[$isNaN]) {
      this.k0 = 1.0;
    }
    let sinlat = math.sin(this.lat0);
    let coslat = math.cos(this.lat0);
    let con = this.e * sinlat;
    this.bl = math.sqrt(1 + this.es / (1 - this.es) * math.pow(coslat, 4));
    this.al = this.a * this.bl * this.k0 * math.sqrt(1 - this.es) / (1 - con * con);
    let t0 = utils.tsfnz(this.e, this.lat0, sinlat);
    let dl = this.bl / coslat * math.sqrt((1 - this.es) / (1 - con * con));
    if (dl * dl < 1) {
      dl = 1.0;
    }
    let fl = null;
    let gl = null;
    if (this.longc != null) {
      if (this.lat0 >= 0) {
        fl = dl + math.sqrt(dl * dl - 1);
      } else {
        fl = dl - math.sqrt(dl * dl - 1);
      }
      this.el = fl * math.pow(t0, this.bl);
      gl = 0.5 * (fl - 1 / fl);
      this.gamma0 = math.asin(math.sin(dart.nullCheck(this.alpha)) / dl);
      this.long0 = dart.nullCheck(this.longc) - math.asin(gl * math.tan(this.gamma0)) / this.bl;
    } else {
      let t1 = utils.tsfnz(this.e, dart.nullCheck(this.lat1), math.sin(dart.nullCheck(this.lat1)));
      let t2 = utils.tsfnz(this.e, dart.nullCheck(this.lat2), math.sin(dart.nullCheck(this.lat2)));
      if (this.lat0 >= 0) {
        this.el = (dl + math.sqrt(dl * dl - 1)) * math.pow(t0, this.bl);
      } else {
        this.el = (dl - math.sqrt(dl * dl - 1)) * math.pow(t0, this.bl);
      }
      let hl = math.pow(t1, this.bl);
      let ll = math.pow(t2, this.bl);
      fl = this.el / hl;
      gl = 0.5 * (fl - 1 / fl);
      let jl = (this.el * this.el - ll * hl) / (this.el * this.el + ll * hl);
      let pl = (ll - hl) / (ll + hl);
      let dlon12 = utils.adjust_lon(dart.nullCheck(this.long1) - dart.nullCheck(this.long2));
      this.long0 = 0.5 * (dart.nullCheck(this.long1) + dart.nullCheck(this.long2)) - math.atan(jl * math.tan(0.5 * this.bl * dlon12) / pl) / this.bl;
      this.long0 = utils.adjust_lon(this.long0);
      let dlon10 = utils.adjust_lon(dart.nullCheck(this.long1) - this.long0);
      this.gamma0 = math.atan(math.sin(this.bl * dlon10) / gl);
      this.alpha = math.asin(dl * math.sin(this.gamma0));
    }
    if (this.no_off) {
      this.uc = 0.0;
    } else {
      if (this.lat0 >= 0) {
        this.uc = this.al / this.bl * math.atan2(math.sqrt(dl * dl - 1), math.cos(dart.nullCheck(this.alpha)));
      } else {
        this.uc = -1 * this.al / this.bl * math.atan2(math.sqrt(dl * dl - 1), math.cos(dart.nullCheck(this.alpha)));
      }
    }
  }).prototype = omerc.HotineObliqueMercatorProjection.prototype;
  dart.addTypeTests(omerc.HotineObliqueMercatorProjection);
  dart.addTypeCaches(omerc.HotineObliqueMercatorProjection);
  dart.setMethodSignature(omerc.HotineObliqueMercatorProjection, () => ({
    __proto__: dart.getMethods(omerc.HotineObliqueMercatorProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(omerc.HotineObliqueMercatorProjection, () => ({
    __proto__: dart.getGetters(omerc.HotineObliqueMercatorProjection.__proto__),
    bl: core.double,
    al: core.double,
    el: core.double,
    gamma0: core.double,
    uc: core.double
  }));
  dart.setSetterSignature(omerc.HotineObliqueMercatorProjection, () => ({
    __proto__: dart.getSetters(omerc.HotineObliqueMercatorProjection.__proto__),
    bl: core.double,
    al: core.double,
    el: core.double,
    gamma0: core.double,
    uc: core.double
  }));
  dart.setLibraryUri(omerc.HotineObliqueMercatorProjection, I[15]);
  dart.setFieldSignature(omerc.HotineObliqueMercatorProjection, () => ({
    __proto__: dart.getFields(omerc.HotineObliqueMercatorProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    longc: dart.fieldType(dart.nullable(core.double)),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    lat1: dart.fieldType(dart.nullable(core.double)),
    lat2: dart.fieldType(dart.nullable(core.double)),
    long1: dart.fieldType(dart.nullable(core.double)),
    long2: dart.fieldType(dart.nullable(core.double)),
    alpha: dart.fieldType(dart.nullable(core.double)),
    no_off: dart.fieldType(core.bool),
    no_rot: dart.fieldType(core.bool),
    [__HotineObliqueMercatorProjection_bl]: dart.fieldType(dart.nullable(core.double)),
    [__HotineObliqueMercatorProjection_al]: dart.fieldType(dart.nullable(core.double)),
    [__HotineObliqueMercatorProjection_el]: dart.fieldType(dart.nullable(core.double)),
    [__HotineObliqueMercatorProjection_gamma0]: dart.fieldType(dart.nullable(core.double)),
    [__HotineObliqueMercatorProjection_uc]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(omerc.HotineObliqueMercatorProjection, () => ['names']);
  dart.defineLazy(omerc.HotineObliqueMercatorProjection, {
    /*omerc.HotineObliqueMercatorProjection.names*/get names() {
      return T.JSArrayOfString().of(["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"]);
    }
  }, false);
  var lat0$6 = dart.privateName(nzmg, "NewZealandMapGridProjection.lat0");
  var long0$7 = dart.privateName(nzmg, "NewZealandMapGridProjection.long0");
  var x0$7 = dart.privateName(nzmg, "NewZealandMapGridProjection.x0");
  var y0$7 = dart.privateName(nzmg, "NewZealandMapGridProjection.y0");
  var A = dart.privateName(nzmg, "NewZealandMapGridProjection.A");
  var B_re = dart.privateName(nzmg, "NewZealandMapGridProjection.B_re");
  var B_im = dart.privateName(nzmg, "NewZealandMapGridProjection.B_im");
  var C_re = dart.privateName(nzmg, "NewZealandMapGridProjection.C_re");
  var C_im = dart.privateName(nzmg, "NewZealandMapGridProjection.C_im");
  var D = dart.privateName(nzmg, "NewZealandMapGridProjection.D");
  nzmg.NewZealandMapGridProjection = class NewZealandMapGridProjection extends projection.Projection {
    get lat0() {
      return this[lat0$6];
    }
    set lat0(value) {
      this[lat0$6] = value;
    }
    get long0() {
      return this[long0$7];
    }
    set long0(value) {
      this[long0$7] = value;
    }
    get x0() {
      return this[x0$7];
    }
    set x0(value) {
      this[x0$7] = value;
    }
    get y0() {
      return this[y0$7];
    }
    set y0(value) {
      this[y0$7] = value;
    }
    get A() {
      return this[A];
    }
    set A(value) {
      this[A] = value;
    }
    get B_re() {
      return this[B_re];
    }
    set B_re(value) {
      this[B_re] = value;
    }
    get B_im() {
      return this[B_im];
    }
    set B_im(value) {
      this[B_im] = value;
    }
    get C_re() {
      return this[C_re];
    }
    set C_re(value) {
      this[C_re] = value;
    }
    get C_im() {
      return this[C_im];
    }
    set C_im(value) {
      this[C_im] = value;
    }
    get D() {
      return this[D];
    }
    set D(value) {
      this[D] = value;
    }
    static ['_#init#tearOff'](params) {
      return new nzmg.NewZealandMapGridProjection.init(params);
    }
    forward(p) {
      let n = null;
      let lon = p.x;
      let lat = p.y;
      let delta_lat = lat - this.lat0;
      let delta_lon = lon - this.long0;
      let d_phi = delta_lat / 0.00000484813681109536 * 0.00001;
      let d_lambda = delta_lon;
      let d_phi_n = 1.0;
      let d_psi = 0.0;
      for (let t0 = n = 1; n <= 10; n = n + 1) {
        d_phi_n = d_phi_n * d_phi;
        d_psi = d_psi + this.A[$_get](n) * d_phi_n;
      }
      let th_re = d_psi;
      let th_im = d_lambda;
      let th_n_re = 1.0;
      let th_n_im = 0.0;
      let th_n_re1 = null;
      let th_n_im1 = null;
      let z_re = 0.0;
      let z_im = 0.0;
      for (let t1 = n = 1; n <= 6; n = n + 1) {
        th_n_re1 = th_n_re * th_re - th_n_im * th_im;
        th_n_im1 = th_n_im * th_re + th_n_re * th_im;
        th_n_re = core.double.as(th_n_re1);
        th_n_im = core.double.as(th_n_im1);
        z_re = z_re + this.B_re[$_get](n) * th_n_re - this.B_im[$_get](n) * th_n_im;
        z_im = z_im + this.B_im[$_get](n) * th_n_re + this.B_re[$_get](n) * th_n_im;
      }
      p.x = z_im * this.a + this.x0;
      p.y = z_re * this.a + this.y0;
      return p;
    }
    inverse(p) {
      let n = null;
      let x = p.x;
      let y = p.y;
      let delta_x = x - this.x0;
      let delta_y = y - this.y0;
      let z_re = delta_y / this.a;
      let z_im = delta_x / this.a;
      let z_n_re = 1.0;
      let z_n_im = 0.0;
      let z_n_re1 = null;
      let z_n_im1 = null;
      let th_re = 0.0;
      let th_im = 0.0;
      for (let t2 = n = 1; n <= 6; n = n + 1) {
        z_n_re1 = z_n_re * z_re - z_n_im * z_im;
        z_n_im1 = z_n_im * z_re + z_n_re * z_im;
        z_n_re = core.double.as(z_n_re1);
        z_n_im = core.double.as(z_n_im1);
        th_re = th_re + this.C_re[$_get](n) * z_n_re - this.C_im[$_get](n) * z_n_im;
        th_im = th_im + this.C_im[$_get](n) * z_n_re + this.C_re[$_get](n) * z_n_im;
      }
      for (let i = 0; i < nzmg.iterations; i = i + 1) {
        let th_n_re = th_re;
        let th_n_im = th_im;
        let th_n_re1 = null;
        let th_n_im1 = null;
        let num_re = z_re;
        let num_im = z_im;
        for (let t3 = n = 2; n <= 6; n = n + 1) {
          th_n_re1 = th_n_re * th_re - th_n_im * th_im;
          th_n_im1 = th_n_im * th_re + th_n_re * th_im;
          th_n_re = core.double.as(th_n_re1);
          th_n_im = core.double.as(th_n_im1);
          num_re = num_re + (n - 1) * (this.B_re[$_get](n) * th_n_re - this.B_im[$_get](n) * th_n_im);
          num_im = num_im + (n - 1) * (this.B_im[$_get](n) * th_n_re + this.B_re[$_get](n) * th_n_im);
        }
        th_n_re = 1.0;
        th_n_im = 0.0;
        let den_re = this.B_re[$_get](1);
        let den_im = this.B_im[$_get](1);
        for (let t4 = n = 2; n <= 6; n = n + 1) {
          th_n_re1 = th_n_re * th_re - th_n_im * th_im;
          th_n_im1 = th_n_im * th_re + th_n_re * th_im;
          th_n_re = core.double.as(th_n_re1);
          th_n_im = core.double.as(th_n_im1);
          den_re = den_re + n * (this.B_re[$_get](n) * th_n_re - this.B_im[$_get](n) * th_n_im);
          den_im = den_im + n * (this.B_im[$_get](n) * th_n_re + this.B_re[$_get](n) * th_n_im);
        }
        let den2 = den_re * den_re + den_im * den_im;
        th_re = (num_re * den_re + num_im * den_im) / den2;
        th_im = (num_im * den_re - num_re * den_im) / den2;
      }
      let d_psi = th_re;
      let d_lambda = th_im;
      let d_psi_n = 1.0;
      let d_phi = 0.0;
      for (let t5 = n = 1; n <= 9; n = n + 1) {
        d_psi_n = d_psi_n * d_psi;
        d_phi = d_phi + this.D[$_get](n) * d_psi_n;
      }
      let lat = this.lat0 + d_phi * 0.00000484813681109536 * 100000.0;
      let lon = this.long0 + d_lambda;
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (nzmg.NewZealandMapGridProjection.init = function(params) {
    this[A] = T.ListOfdouble().filled(11, 0.0);
    this[B_re] = T.ListOfdouble().filled(7, 0.0);
    this[B_im] = T.ListOfdouble().filled(7, 0.0);
    this[C_re] = T.ListOfdouble().filled(7, 0.0);
    this[C_im] = T.ListOfdouble().filled(7, 0.0);
    this[D] = T.ListOfdouble().filled(10, 0.0);
    this[lat0$6] = dart.nullCheck(params.lat0);
    this[long0$7] = params.long0;
    this[x0$7] = dart.nullCheck(params.x0);
    this[y0$7] = dart.nullCheck(params.y0);
    nzmg.NewZealandMapGridProjection.__proto__.init.call(this, params);
    this.A[$_set](1, 0.6399175073);
    this.A[$_set](2, -0.1358797613);
    this.A[$_set](3, 0.063294409);
    this.A[$_set](4, -0.02526853);
    this.A[$_set](5, 0.0117879);
    this.A[$_set](6, -0.0055161);
    this.A[$_set](7, 0.0026906);
    this.A[$_set](8, -0.001333);
    this.A[$_set](9, 0.00067);
    this.A[$_set](10, -0.00034);
    this.B_re[$_set](1, 0.7557853228);
    this.B_im[$_set](1, 0.0);
    this.B_re[$_set](2, 0.249204646);
    this.B_im[$_set](2, 0.003371507);
    this.B_re[$_set](3, -0.001541739);
    this.B_im[$_set](3, 0.04105856);
    this.B_re[$_set](4, -0.10162907);
    this.B_im[$_set](4, 0.01727609);
    this.B_re[$_set](5, -0.26623489);
    this.B_im[$_set](5, -0.36249218);
    this.B_re[$_set](6, -0.6870983);
    this.B_im[$_set](6, -1.1651967);
    this.C_re[$_set](1, 1.3231270439);
    this.C_im[$_set](1, 0.0);
    this.C_re[$_set](2, -0.577245789);
    this.C_im[$_set](2, -0.007809598);
    this.C_re[$_set](3, 0.508307513);
    this.C_im[$_set](3, -0.112208952);
    this.C_re[$_set](4, -0.15094762);
    this.C_im[$_set](4, 0.18200602);
    this.C_re[$_set](5, 1.01418179);
    this.C_im[$_set](5, 1.64497696);
    this.C_re[$_set](6, 1.9660549);
    this.C_im[$_set](6, 2.5127645);
    this.D[$_set](1, 1.5627014243);
    this.D[$_set](2, 0.5185406398);
    this.D[$_set](3, -0.03333098);
    this.D[$_set](4, -0.1052906);
    this.D[$_set](5, -0.0368594);
    this.D[$_set](6, 0.007317);
    this.D[$_set](7, 0.0122);
    this.D[$_set](8, 0.00394);
    this.D[$_set](9, -0.0013);
  }).prototype = nzmg.NewZealandMapGridProjection.prototype;
  dart.addTypeTests(nzmg.NewZealandMapGridProjection);
  dart.addTypeCaches(nzmg.NewZealandMapGridProjection);
  dart.setMethodSignature(nzmg.NewZealandMapGridProjection, () => ({
    __proto__: dart.getMethods(nzmg.NewZealandMapGridProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setLibraryUri(nzmg.NewZealandMapGridProjection, I[16]);
  dart.setFieldSignature(nzmg.NewZealandMapGridProjection, () => ({
    __proto__: dart.getFields(nzmg.NewZealandMapGridProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    A: dart.fieldType(core.List$(core.double)),
    B_re: dart.fieldType(core.List$(core.double)),
    B_im: dart.fieldType(core.List$(core.double)),
    C_re: dart.fieldType(core.List$(core.double)),
    C_im: dart.fieldType(core.List$(core.double)),
    D: dart.fieldType(core.List$(core.double))
  }));
  dart.setStaticFieldSignature(nzmg.NewZealandMapGridProjection, () => ['names']);
  dart.defineLazy(nzmg.NewZealandMapGridProjection, {
    /*nzmg.NewZealandMapGridProjection.names*/get names() {
      return T.JSArrayOfString().of(["New_Zealand_Map_Grid", "nzmg"]);
    }
  }, false);
  dart.defineLazy(nzmg, {
    /*nzmg.iterations*/get iterations() {
      return 1;
    },
    set iterations(_) {}
  }, false);
  var long0$8 = dart.privateName(moll, "MollweideProjection.long0");
  var x0$8 = dart.privateName(moll, "MollweideProjection.x0");
  var y0$8 = dart.privateName(moll, "MollweideProjection.y0");
  moll.MollweideProjection = class MollweideProjection extends projection.Projection {
    get long0() {
      return this[long0$8];
    }
    set long0(value) {
      this[long0$8] = value;
    }
    get x0() {
      return this[x0$8];
    }
    set x0(value) {
      this[x0$8] = value;
    }
    get y0() {
      return this[y0$8];
    }
    set y0(value) {
      this[y0$8] = value;
    }
    static ['_#init#tearOff'](params) {
      return new moll.MollweideProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let delta_lon = utils.adjust_lon(lon - this.long0);
      let theta = lat;
      let con = 3.141592653589793 * math.sin(lat);
      while (true) {
        let delta_theta = -(theta + math.sin(theta) - con) / (1 + math.cos(theta));
        theta = theta + delta_theta;
        if (delta_theta[$abs]() < 1e-10) {
          break;
        }
      }
      theta = theta / 2;
      if (3.141592653589793 / 2 - lat[$abs]() < 1e-10) {
        delta_lon = 0.0;
      }
      let x = 0.900316316158 * this.a * delta_lon * math.cos(theta) + this.x0;
      let y = 1.4142135623731 * this.a * math.sin(theta) + this.y0;
      p.x = x;
      p.y = y;
      return p;
    }
    inverse(p) {
      let t6, t6$;
      let theta = null;
      let arg = null;
      t6 = p;
      t6.x = t6.x - this.x0;
      t6$ = p;
      t6$.y = t6$.y - this.y0;
      arg = p.y / (1.4142135623731 * this.a);
      if (arg[$abs]() > 0.999999999999) {
        arg = 0.999999999999;
      }
      theta = math.asin(arg);
      let lon = utils.adjust_lon(this.long0 + p.x / (0.900316316158 * this.a * math.cos(theta)));
      if (lon < -3.141592653589793) {
        lon = -3.141592653589793;
      }
      if (lon > 3.141592653589793) {
        lon = 3.141592653589793;
      }
      arg = (2 * theta + math.sin(2 * theta)) / 3.141592653589793;
      if (arg[$abs]() > 1) {
        arg = 1.0;
      }
      let lat = math.asin(arg);
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (moll.MollweideProjection.init = function(params) {
    this[long0$8] = params.long0;
    this[x0$8] = dart.nullCheck(params.x0);
    this[y0$8] = dart.nullCheck(params.y0);
    moll.MollweideProjection.__proto__.init.call(this, params);
    ;
  }).prototype = moll.MollweideProjection.prototype;
  dart.addTypeTests(moll.MollweideProjection);
  dart.addTypeCaches(moll.MollweideProjection);
  dart.setMethodSignature(moll.MollweideProjection, () => ({
    __proto__: dart.getMethods(moll.MollweideProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setLibraryUri(moll.MollweideProjection, I[17]);
  dart.setFieldSignature(moll.MollweideProjection, () => ({
    __proto__: dart.getFields(moll.MollweideProjection.__proto__),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double)
  }));
  dart.setStaticFieldSignature(moll.MollweideProjection, () => ['names']);
  dart.defineLazy(moll.MollweideProjection, {
    /*moll.MollweideProjection.names*/get names() {
      return T.JSArrayOfString().of(["Mollweide", "moll"]);
    }
  }, false);
  var long0$9 = dart.privateName(mill, "MillerCylindricalProjection.long0");
  var x0$9 = dart.privateName(mill, "MillerCylindricalProjection.x0");
  var y0$9 = dart.privateName(mill, "MillerCylindricalProjection.y0");
  mill.MillerCylindricalProjection = class MillerCylindricalProjection extends projection.Projection {
    get long0() {
      return this[long0$9];
    }
    set long0(value) {
      this[long0$9] = value;
    }
    get x0() {
      return this[x0$9];
    }
    set x0(value) {
      this[x0$9] = value;
    }
    get y0() {
      return this[y0$9];
    }
    set y0(value) {
      this[y0$9] = value;
    }
    static ['_#init#tearOff'](params) {
      return new mill.MillerCylindricalProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let dlon = utils.adjust_lon(lon - this.long0);
      let x = this.x0 + this.a * dlon;
      let y = this.y0 + this.a * math.log(math.tan(3.141592653589793 / 4 + lat / 2.5)) * 1.25;
      p.x = x;
      p.y = y;
      return p;
    }
    inverse(p) {
      let t6, t6$;
      t6 = p;
      t6.x = t6.x - this.x0;
      t6$ = p;
      t6$.y = t6$.y - this.y0;
      let lon = utils.adjust_lon(this.long0 + p.x / this.a);
      let lat = 2.5 * (math.atan(math.exp(0.8 * p.y / this.a)) - 3.141592653589793 / 4);
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (mill.MillerCylindricalProjection.init = function(params) {
    this[long0$9] = params.long0;
    this[x0$9] = dart.nullCheck(params.x0);
    this[y0$9] = dart.nullCheck(params.y0);
    mill.MillerCylindricalProjection.__proto__.init.call(this, params);
    ;
  }).prototype = mill.MillerCylindricalProjection.prototype;
  dart.addTypeTests(mill.MillerCylindricalProjection);
  dart.addTypeCaches(mill.MillerCylindricalProjection);
  dart.setMethodSignature(mill.MillerCylindricalProjection, () => ({
    __proto__: dart.getMethods(mill.MillerCylindricalProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setLibraryUri(mill.MillerCylindricalProjection, I[18]);
  dart.setFieldSignature(mill.MillerCylindricalProjection, () => ({
    __proto__: dart.getFields(mill.MillerCylindricalProjection.__proto__),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double)
  }));
  dart.setStaticFieldSignature(mill.MillerCylindricalProjection, () => ['names']);
  dart.defineLazy(mill.MillerCylindricalProjection, {
    /*mill.MillerCylindricalProjection.names*/get names() {
      return T.JSArrayOfString().of(["Miller_Cylindrical", "mill"]);
    }
  }, false);
  var long0$10 = dart.privateName(merc, "PseudoMercatorProjection.long0");
  var x0$10 = dart.privateName(merc, "PseudoMercatorProjection.x0");
  var y0$10 = dart.privateName(merc, "PseudoMercatorProjection.y0");
  merc.PseudoMercatorProjection = class PseudoMercatorProjection extends projection.Projection {
    get long0() {
      return this[long0$10];
    }
    set long0(value) {
      this[long0$10] = value;
    }
    get x0() {
      return this[x0$10];
    }
    set x0(value) {
      this[x0$10] = value;
    }
    get y0() {
      return this[y0$10];
    }
    set y0(value) {
      this[y0$10] = value;
    }
    static ['_#init#tearOff'](params) {
      return new merc.PseudoMercatorProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      if (lat * 57.29577951308232 > 90 && lat * 57.29577951308232 < -90 && lon * 57.29577951308232 > 180 && lon * 57.29577951308232 < -180) {
        dart.throw("Shouldn't reach");
      }
      let x = null;
      let y = null;
      if ((lat[$abs]() - 1.5707963267948966)[$abs]() <= 1e-10) {
        dart.throw("Shouldn't reach");
      } else {
        if (this.sphere != null && dart.nullCheck(this.sphere)) {
          x = this.x0 + this.a * this.k0 * utils.adjust_lon(lon - this.long0);
          y = this.y0 + this.a * this.k0 * math.log(math.tan(0.7853981633974483 + 0.5 * lat));
        } else {
          let sinphi = math.sin(lat);
          let ts = utils.tsfnz(this.e, lat, sinphi);
          x = this.x0 + this.a * this.k0 * utils.adjust_lon(lon - this.long0);
          y = this.y0 - this.a * this.k0 * math.log(ts);
        }
        p.x = core.double.as(x);
        p.y = core.double.as(y);
        return p;
      }
    }
    inverse(p) {
      let x = p.x - this.x0;
      let y = p.y - this.y0;
      let lon = null;
      let lat = null;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        lat = 1.5707963267948966 - 2 * math.atan(math.exp(-y / (this.a * this.k0)));
      } else {
        let ts = math.exp(-y / (this.a * this.k0));
        lat = utils.phi2z(this.e, ts);
        if (lat === -9999.0) {
          dart.throw("Shouldn't reach");
        }
      }
      lon = utils.adjust_lon(this.long0 + x / (this.a * this.k0));
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (merc.PseudoMercatorProjection.init = function(params) {
    let t6, t6$;
    this[long0$10] = params.long0;
    this[x0$10] = (t6 = params.x0, t6 == null ? 0.0 : t6);
    this[y0$10] = (t6$ = params.y0, t6$ == null ? 0.0 : t6$);
    merc.PseudoMercatorProjection.__proto__.init.call(this, params);
    let k = params.k;
    let lat_ts = params.lat_ts;
    let con = this.b / this.a;
    this.es = 1 - con * con;
    this.e = math.sqrt(this.es);
    if (lat_ts != null) {
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        this.k0 = math.cos(lat_ts);
      } else {
        this.k0 = utils.msfnz(this.e, math.sin(lat_ts), math.cos(lat_ts));
      }
    } else {
      if (this.k0 === 0.0) {
        if (k != null) {
          this.k0 = k;
        } else {
          this.k0 = 1.0;
        }
      }
    }
  }).prototype = merc.PseudoMercatorProjection.prototype;
  dart.addTypeTests(merc.PseudoMercatorProjection);
  dart.addTypeCaches(merc.PseudoMercatorProjection);
  dart.setMethodSignature(merc.PseudoMercatorProjection, () => ({
    __proto__: dart.getMethods(merc.PseudoMercatorProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setLibraryUri(merc.PseudoMercatorProjection, I[19]);
  dart.setFieldSignature(merc.PseudoMercatorProjection, () => ({
    __proto__: dart.getFields(merc.PseudoMercatorProjection.__proto__),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double)
  }));
  dart.setStaticFieldSignature(merc.PseudoMercatorProjection, () => ['names']);
  dart.defineLazy(merc.PseudoMercatorProjection, {
    /*merc.PseudoMercatorProjection.names*/get names() {
      return T.JSArrayOfString().of(["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"]);
    }
  }, false);
  var datumCode = dart.privateName(longlat, "LongLat.datumCode");
  var datumName = dart.privateName(longlat, "LongLat.datumName");
  longlat.LongLat = class LongLat extends projection.Projection {
    get datumCode() {
      return this[datumCode];
    }
    set datumCode(value) {
      super.datumCode = value;
    }
    get datumName() {
      return this[datumName];
    }
    set datumName(value) {
      super.datumName = value;
    }
    static ['_#init#tearOff'](params) {
      return new longlat.LongLat.init(params);
    }
    forward(p) {
      return p;
    }
    inverse(p) {
      return p;
    }
  };
  (longlat.LongLat.init = function(params) {
    this[datumCode] = params.datumCode;
    this[datumName] = params.datumName;
    longlat.LongLat.__proto__.init.call(this, params);
    ;
  }).prototype = longlat.LongLat.prototype;
  dart.addTypeTests(longlat.LongLat);
  dart.addTypeCaches(longlat.LongLat);
  dart.setMethodSignature(longlat.LongLat, () => ({
    __proto__: dart.getMethods(longlat.LongLat.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setLibraryUri(longlat.LongLat, I[20]);
  dart.setFieldSignature(longlat.LongLat, () => ({
    __proto__: dart.getFields(longlat.LongLat.__proto__),
    datumCode: dart.finalFieldType(dart.nullable(core.String)),
    datumName: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(longlat.LongLat, () => ['names']);
  dart.defineLazy(longlat.LongLat, {
    /*longlat.LongLat.names*/get names() {
      return T.JSArrayOfString().of(["longlat", "identity"]);
    }
  }, false);
  var __LambertConformalConicProjection_lat0 = dart.privateName(lcc, "_#LambertConformalConicProjection#lat0");
  var __LambertConformalConicProjection_long0 = dart.privateName(lcc, "_#LambertConformalConicProjection#long0");
  var __LambertConformalConicProjection_lat1 = dart.privateName(lcc, "_#LambertConformalConicProjection#lat1");
  var __LambertConformalConicProjection_lat2 = dart.privateName(lcc, "_#LambertConformalConicProjection#lat2");
  var __LambertConformalConicProjection_x0 = dart.privateName(lcc, "_#LambertConformalConicProjection#x0");
  var __LambertConformalConicProjection_y0 = dart.privateName(lcc, "_#LambertConformalConicProjection#y0");
  var __LambertConformalConicProjection_ns = dart.privateName(lcc, "_#LambertConformalConicProjection#ns");
  var __LambertConformalConicProjection_f0 = dart.privateName(lcc, "_#LambertConformalConicProjection#f0");
  var __LambertConformalConicProjection_rh = dart.privateName(lcc, "_#LambertConformalConicProjection#rh");
  var __LambertConformalConicProjection_title = dart.privateName(lcc, "_#LambertConformalConicProjection#title");
  lcc.LambertConformalConicProjection = class LambertConformalConicProjection extends projection.Projection {
    get lat0() {
      let t6;
      t6 = this[__LambertConformalConicProjection_lat0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat0")) : t6;
    }
    set lat0(lat0$35param) {
      this[__LambertConformalConicProjection_lat0] = lat0$35param;
    }
    get long0() {
      let t6;
      t6 = this[__LambertConformalConicProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__LambertConformalConicProjection_long0] = long0$35param;
    }
    get lat1() {
      let t6;
      t6 = this[__LambertConformalConicProjection_lat1];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat1")) : t6;
    }
    set lat1(lat1$35param) {
      this[__LambertConformalConicProjection_lat1] = lat1$35param;
    }
    get lat2() {
      let t6;
      t6 = this[__LambertConformalConicProjection_lat2];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat2")) : t6;
    }
    set lat2(lat2$35param) {
      this[__LambertConformalConicProjection_lat2] = lat2$35param;
    }
    get x0() {
      let t6;
      t6 = this[__LambertConformalConicProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__LambertConformalConicProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__LambertConformalConicProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__LambertConformalConicProjection_y0] = y0$35param;
    }
    get ns() {
      let t6;
      t6 = this[__LambertConformalConicProjection_ns];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("ns")) : t6;
    }
    set ns(ns$35param) {
      this[__LambertConformalConicProjection_ns] = ns$35param;
    }
    get f0() {
      let t6;
      t6 = this[__LambertConformalConicProjection_f0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("f0")) : t6;
    }
    set f0(f0$35param) {
      this[__LambertConformalConicProjection_f0] = f0$35param;
    }
    get rh() {
      let t6;
      t6 = this[__LambertConformalConicProjection_rh];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("rh")) : t6;
    }
    set rh(rh$35param) {
      this[__LambertConformalConicProjection_rh] = rh$35param;
    }
    get title() {
      let t6;
      t6 = this[__LambertConformalConicProjection_title];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("title")) : t6;
    }
    set title(title$35param) {
      this[__LambertConformalConicProjection_title] = title$35param;
    }
    static ['_#init#tearOff'](params) {
      return new lcc.LambertConformalConicProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      if ((2 * lat[$abs]() - 3.141592653589793)[$abs]() <= 1e-10) {
        lat = utils.sign(lat) * (1.5707963267948966 - 2 * 1e-10);
      }
      let con = (lat[$abs]() - 1.5707963267948966)[$abs]();
      let ts = null;
      let rh1 = null;
      if (con > 1e-10) {
        ts = utils.tsfnz(this.e, lat, math.sin(lat));
        rh1 = this.a * this.f0 * math.pow(core.num.as(ts), this.ns);
      } else {
        con = lat * this.ns;
        if (con <= 0) {
          dart.throw("Shouldn't reach");
        }
        rh1 = 0;
      }
      let theta = this.ns * utils.adjust_lon(lon - this.long0);
      p.x = this.k0 * core.num.as(dart.dsend(rh1, '*', [math.sin(theta)])) + this.x0;
      p.y = this.k0 * (this.rh - core.num.as(dart.dsend(rh1, '*', [math.cos(theta)]))) + this.y0;
      return p;
    }
    inverse(p) {
      let rh1 = null;
      let con = null;
      let ts = null;
      let lat = null;
      let lon = null;
      let x = (p.x - this.x0) / this.k0;
      let y = this.rh - (p.y - this.y0) / this.k0;
      if (this.ns > 0) {
        rh1 = math.sqrt(x * x + y * y);
        con = 1.0;
      } else {
        rh1 = -math.sqrt(x * x + y * y);
        con = -1.0;
      }
      let theta = 0.0;
      if (rh1 !== 0) {
        theta = math.atan2(con * x, con * y);
      }
      if (rh1 !== 0 || this.ns > 0) {
        con = 1 / this.ns;
        ts = math.pow(rh1 / (this.a * this.f0), con);
        lat = utils.phi2z(this.e, ts);
        if (lat === -9999) {
          dart.throw("Shouldn't reach");
        }
      } else {
        lat = -1.5707963267948966;
      }
      lon = utils.adjust_lon(theta / this.ns + this.long0);
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (lcc.LambertConformalConicProjection.init = function(params) {
    let t6, t6$, t6$0;
    this[__LambertConformalConicProjection_lat0] = null;
    this[__LambertConformalConicProjection_long0] = null;
    this[__LambertConformalConicProjection_lat1] = null;
    this[__LambertConformalConicProjection_lat2] = null;
    this[__LambertConformalConicProjection_x0] = null;
    this[__LambertConformalConicProjection_y0] = null;
    this[__LambertConformalConicProjection_ns] = null;
    this[__LambertConformalConicProjection_f0] = null;
    this[__LambertConformalConicProjection_rh] = null;
    this[__LambertConformalConicProjection_title] = null;
    this[__LambertConformalConicProjection_lat0] = dart.nullCheck(params.lat0);
    this[__LambertConformalConicProjection_long0] = params.long0;
    this[__LambertConformalConicProjection_lat1] = dart.nullCheck(params.lat1);
    this[__LambertConformalConicProjection_lat2] = (t6 = params.lat2, t6 == null ? dart.nullCheck(params.lat1) : t6);
    this[__LambertConformalConicProjection_x0] = (t6$ = params.x0, t6$ == null ? 0.0 : t6$);
    this[__LambertConformalConicProjection_y0] = (t6$0 = params.y0, t6$0 == null ? 0.0 : t6$0);
    lcc.LambertConformalConicProjection.__proto__.init.call(this, params);
    if (this.k0 === 0.0 || this.k0[$isNaN]) {
      this.k0 = 1.0;
    }
    if ((this.lat1 + this.lat2)[$abs]() < 1e-10) {
      return;
    }
    let temp = this.b / this.a;
    this.e = math.sqrt(1 - temp * temp);
    let sin1 = math.sin(this.lat1);
    let cos1 = math.cos(this.lat1);
    let ms1 = utils.msfnz(this.e, sin1, cos1);
    let ts1 = utils.tsfnz(this.e, this.lat1, sin1);
    let sin2 = math.sin(this.lat2);
    let cos2 = math.cos(this.lat2);
    let ms2 = utils.msfnz(this.e, sin2, cos2);
    let ts2 = utils.tsfnz(this.e, this.lat2, sin2);
    let ts0 = utils.tsfnz(this.e, this.lat0, math.sin(this.lat0));
    if ((this.lat1 - this.lat2)[$abs]() > 1e-10) {
      this.ns = math.log(ms1 / ms2) / math.log(ts1 / ts2);
    } else {
      this.ns = sin1;
    }
    if (this.ns[$isNaN]) {
      this.ns = sin1;
    }
    this.f0 = ms1 / (this.ns * math.pow(ts1, this.ns));
    this.rh = this.a * this.f0 * math.pow(ts0, this.ns);
    this.title = "Lambert Conformal Conic";
  }).prototype = lcc.LambertConformalConicProjection.prototype;
  dart.addTypeTests(lcc.LambertConformalConicProjection);
  dart.addTypeCaches(lcc.LambertConformalConicProjection);
  dart.setMethodSignature(lcc.LambertConformalConicProjection, () => ({
    __proto__: dart.getMethods(lcc.LambertConformalConicProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(lcc.LambertConformalConicProjection, () => ({
    __proto__: dart.getGetters(lcc.LambertConformalConicProjection.__proto__),
    lat0: core.double,
    long0: core.double,
    lat1: core.double,
    lat2: core.double,
    x0: core.double,
    y0: core.double,
    ns: core.double,
    f0: core.double,
    rh: core.double,
    title: core.String
  }));
  dart.setSetterSignature(lcc.LambertConformalConicProjection, () => ({
    __proto__: dart.getSetters(lcc.LambertConformalConicProjection.__proto__),
    lat0: core.double,
    long0: core.double,
    lat1: core.double,
    lat2: core.double,
    x0: core.double,
    y0: core.double,
    ns: core.double,
    f0: core.double,
    rh: core.double,
    title: core.String
  }));
  dart.setLibraryUri(lcc.LambertConformalConicProjection, I[21]);
  dart.setFieldSignature(lcc.LambertConformalConicProjection, () => ({
    __proto__: dart.getFields(lcc.LambertConformalConicProjection.__proto__),
    [__LambertConformalConicProjection_lat0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_lat1]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_lat2]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_y0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_ns]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_f0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_rh]: dart.fieldType(dart.nullable(core.double)),
    [__LambertConformalConicProjection_title]: dart.fieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(lcc.LambertConformalConicProjection, () => ['names']);
  dart.defineLazy(lcc.LambertConformalConicProjection, {
    /*lcc.LambertConformalConicProjection.names*/get names() {
      return T.JSArrayOfString().of(["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"]);
    }
  }, false);
  var phi0 = dart.privateName(laea, "LambertAzimuthalEqualAreaProjection.phi0");
  var __LambertAzimuthalEqualAreaProjection_lat0 = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#lat0");
  var __LambertAzimuthalEqualAreaProjection_long0 = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#long0");
  var __LambertAzimuthalEqualAreaProjection_x0 = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#x0");
  var __LambertAzimuthalEqualAreaProjection_y0 = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#y0");
  var __LambertAzimuthalEqualAreaProjection_mode = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#mode");
  var __LambertAzimuthalEqualAreaProjection_apa = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#apa");
  var __LambertAzimuthalEqualAreaProjection_qp = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#qp");
  var __LambertAzimuthalEqualAreaProjection_mmf = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#mmf");
  var __LambertAzimuthalEqualAreaProjection_dd = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#dd");
  var __LambertAzimuthalEqualAreaProjection_rq = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#rq");
  var __LambertAzimuthalEqualAreaProjection_xmf = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#xmf");
  var __LambertAzimuthalEqualAreaProjection_ymf = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#ymf");
  var __LambertAzimuthalEqualAreaProjection_sinb1 = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#sinb1");
  var __LambertAzimuthalEqualAreaProjection_cosb1 = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#cosb1");
  var __LambertAzimuthalEqualAreaProjection_sinph0 = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#sinph0");
  var __LambertAzimuthalEqualAreaProjection_cosph0 = dart.privateName(laea, "_#LambertAzimuthalEqualAreaProjection#cosph0");
  var _authset = dart.privateName(laea, "_authset");
  var _authlat = dart.privateName(laea, "_authlat");
  laea.LambertAzimuthalEqualAreaProjection = class LambertAzimuthalEqualAreaProjection extends projection.Projection {
    get phi0() {
      return this[phi0];
    }
    set phi0(value) {
      this[phi0] = value;
    }
    get lat0() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_lat0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat0")) : t6;
    }
    set lat0(lat0$35param) {
      this[__LambertAzimuthalEqualAreaProjection_lat0] = lat0$35param;
    }
    get long0() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__LambertAzimuthalEqualAreaProjection_long0] = long0$35param;
    }
    get x0() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__LambertAzimuthalEqualAreaProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__LambertAzimuthalEqualAreaProjection_y0] = y0$35param;
    }
    get mode() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_mode];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("mode")) : t6;
    }
    set mode(mode$35param) {
      this[__LambertAzimuthalEqualAreaProjection_mode] = mode$35param;
    }
    get apa() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_apa];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("apa")) : t6;
    }
    set apa(apa$35param) {
      this[__LambertAzimuthalEqualAreaProjection_apa] = apa$35param;
    }
    get qp() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_qp];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("qp")) : t6;
    }
    set qp(qp$35param) {
      this[__LambertAzimuthalEqualAreaProjection_qp] = qp$35param;
    }
    get mmf() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_mmf];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("mmf")) : t6;
    }
    set mmf(mmf$35param) {
      this[__LambertAzimuthalEqualAreaProjection_mmf] = mmf$35param;
    }
    get dd() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_dd];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("dd")) : t6;
    }
    set dd(dd$35param) {
      this[__LambertAzimuthalEqualAreaProjection_dd] = dd$35param;
    }
    get rq() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_rq];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("rq")) : t6;
    }
    set rq(rq$35param) {
      this[__LambertAzimuthalEqualAreaProjection_rq] = rq$35param;
    }
    get xmf() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_xmf];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("xmf")) : t6;
    }
    set xmf(xmf$35param) {
      this[__LambertAzimuthalEqualAreaProjection_xmf] = xmf$35param;
    }
    get ymf() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_ymf];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("ymf")) : t6;
    }
    set ymf(ymf$35param) {
      this[__LambertAzimuthalEqualAreaProjection_ymf] = ymf$35param;
    }
    set sinb1(sinb1$35param) {
      this[__LambertAzimuthalEqualAreaProjection_sinb1] = sinb1$35param;
    }
    get sinb1() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_sinb1];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("sinb1")) : t6;
    }
    get cosb1() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_cosb1];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("cosb1")) : t6;
    }
    set cosb1(cosb1$35param) {
      this[__LambertAzimuthalEqualAreaProjection_cosb1] = cosb1$35param;
    }
    get sinph0() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_sinph0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("sinph0")) : t6;
    }
    set sinph0(sinph0$35param) {
      this[__LambertAzimuthalEqualAreaProjection_sinph0] = sinph0$35param;
    }
    get cosph0() {
      let t6;
      t6 = this[__LambertAzimuthalEqualAreaProjection_cosph0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("cosph0")) : t6;
    }
    set cosph0(cosph0$35param) {
      this[__LambertAzimuthalEqualAreaProjection_cosph0] = cosph0$35param;
    }
    static ['_#init#tearOff'](params) {
      return new laea.LambertAzimuthalEqualAreaProjection.init(params);
    }
    forward(p) {
      let x = null;
      let y = null;
      let coslam = null;
      let sinlam = null;
      let sinphi = null;
      let q = null;
      let sinb = null;
      let cosb = null;
      let b = null;
      let cosphi = null;
      let lam = p.x;
      let phi = p.y;
      lam = utils.adjust_lon(lam - this.long0);
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        sinphi = math.sin(phi);
        cosphi = math.cos(phi);
        coslam = math.cos(lam);
        if (this.mode === 4 || this.mode === 3) {
          y = this.mode === 3 ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
          if (dart.notNull(y) <= 1e-10) {
            dart.throw("Shouldn't reach");
          }
          y = math.sqrt(2 / dart.notNull(y));
          x = dart.notNull(y) * cosphi * math.sin(lam);
          y = dart.notNull(y) * (this.mode === 3 ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam);
        } else if (this.mode === 2 || this.mode === 1) {
          if (this.mode === 2) {
            coslam = -coslam;
          }
          if (this.phi0 != null && (phi + dart.nullCheck(this.phi0))[$abs]() < 1e-10) {
            dart.throw("Shouldn't reach");
          }
          y = 0.7853981633974483 - phi * 0.5;
          y = 2 * (this.mode === 1 ? math.cos(y) : math.sin(y));
          x = dart.notNull(y) * math.sin(lam);
          y = dart.notNull(y) * coslam;
        }
      } else {
        sinb = 0.0;
        cosb = 0.0;
        b = 0.0;
        coslam = math.cos(lam);
        sinlam = math.sin(lam);
        sinphi = math.sin(phi);
        q = utils.qsfnz(this.e, sinphi);
        if (this.mode === 4 || this.mode === 3) {
          sinb = q / this.qp;
          cosb = math.sqrt(1 - sinb * sinb);
        }
        switch (this.mode) {
          case 4:
            {
              b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
              break;
            }
          case 3:
            {
              b = 1 + cosb * coslam;
              break;
            }
          case 2:
            {
              b = 1.5707963267948966 + phi;
              q = this.qp - q;
              break;
            }
          case 1:
            {
              b = phi - 1.5707963267948966;
              q = this.qp + q;
              break;
            }
        }
        if (b[$abs]() < 1e-10) {
          dart.throw("Shouldn't reach");
        }
        switch (this.mode) {
          case 4:
          case 3:
            {
              b = math.sqrt(2 / b);
              if (this.mode === 4) {
                y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
              } else {
                y = (b = math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
              }
              x = this.xmf * b * cosb * sinlam;
              break;
            }
          case 2:
          case 1:
            {
              if (q >= 0) {
                x = (b = math.sqrt(q)) * sinlam;
                y = coslam * (this.mode === 1 ? b : -b);
              } else {
                x = y = 0.0;
              }
              break;
            }
        }
      }
      p.x = this.a * dart.nullCheck(x) + this.x0;
      p.y = this.a * dart.nullCheck(y) + this.y0;
      return p;
    }
    inverse(p) {
      let t6, t6$;
      t6 = p;
      t6.x = t6.x - this.x0;
      t6$ = p;
      t6$.y = t6$.y - this.y0;
      let x = p.x / this.a;
      let y = p.y / this.a;
      let lam = null;
      let phi = null;
      let cCe = null;
      let sCe = null;
      let q = null;
      let rho = null;
      let ab = null;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        let cosz = 0.0;
        let rh = null;
        let sinz = 0.0;
        rh = math.sqrt(x * x + y * y);
        phi = rh * 0.5;
        if (phi > 1) {
          dart.throw("Shouldn't reach");
        }
        phi = 2 * math.asin(phi);
        if (this.mode === 4 || this.mode === 3) {
          sinz = math.sin(phi);
          cosz = math.cos(phi);
        }
        switch (this.mode) {
          case 3:
            {
              phi = rh[$abs]() <= 1e-10 ? 0.0 : math.asin(y * sinz / rh);
              x = x * sinz;
              y = cosz * rh;
              break;
            }
          case 4:
            {
              phi = rh[$abs]() <= 1e-10 ? dart.nullCheck(this.phi0) : math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
              x = x * (sinz * this.cosph0);
              y = (cosz - math.sin(phi) * this.sinph0) * rh;
              break;
            }
          case 2:
            {
              y = -y;
              phi = 1.5707963267948966 - phi;
              break;
            }
          case 1:
            {
              phi = phi - 1.5707963267948966;
              break;
            }
        }
        lam = y === 0 && (this.mode === 3 || this.mode === 4) ? 0.0 : math.atan2(x, y);
      } else {
        ab = 0.0;
        if (this.mode === 4 || this.mode === 3) {
          x = x / this.dd;
          y = y * this.dd;
          rho = math.sqrt(x * x + y * y);
          if (rho < 1e-10) {
            p.x = 0.0;
            p.y = dart.nullCheck(this.phi0);
            return p;
          }
          sCe = 2 * math.asin(0.5 * rho / this.rq);
          cCe = math.cos(sCe);
          x = x * (sCe = math.sin(sCe));
          if (this.mode === 4) {
            ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
            q = this.qp * ab;
            y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
          } else {
            ab = y * sCe / rho;
            q = this.qp * ab;
            y = rho * cCe;
          }
        } else if (this.mode === 2 || this.mode === 1) {
          if (this.mode === 2) {
            y = -y;
          }
          q = x * x + y * y;
          if (q === 0.0) {
            p.x = 0.0;
            p.y = dart.nullCheck(this.phi0);
            return p;
          }
          ab = 1 - q / this.qp;
          if (this.mode === 1) {
            ab = -ab;
          }
        }
        lam = math.atan2(x, y);
        phi = this[_authlat](math.asin(ab), this.apa);
      }
      p.x = utils.adjust_lon(this.long0 + lam);
      p.y = phi;
      return p;
    }
    [_authset](es) {
      let t7, t6, t7$, t6$, t7$0, t6$0;
      let t = null;
      let APA = T.ListOfdouble().filled(3, 0.0);
      APA[$_set](0, es * laea.P00);
      t = es * es;
      t6 = APA;
      t7 = 0;
      t6[$_set](t7, t6[$_get](t7) + t * laea.P01);
      APA[$_set](1, t * laea.P10);
      t = t * es;
      t6$ = APA;
      t7$ = 0;
      t6$[$_set](t7$, t6$[$_get](t7$) + t * laea.P02);
      t6$0 = APA;
      t7$0 = 1;
      t6$0[$_set](t7$0, t6$0[$_get](t7$0) + t * laea.P11);
      APA[$_set](2, t * laea.P20);
      return APA;
    }
    [_authlat](beta, APA) {
      let t = beta + beta;
      return beta + APA[$_get](0) * math.sin(t) + APA[$_get](1) * math.sin(t + t) + APA[$_get](2) * math.sin(t + t + t);
    }
  };
  (laea.LambertAzimuthalEqualAreaProjection.init = function(params) {
    this[__LambertAzimuthalEqualAreaProjection_lat0] = null;
    this[__LambertAzimuthalEqualAreaProjection_long0] = null;
    this[__LambertAzimuthalEqualAreaProjection_x0] = null;
    this[__LambertAzimuthalEqualAreaProjection_y0] = null;
    this[__LambertAzimuthalEqualAreaProjection_mode] = null;
    this[__LambertAzimuthalEqualAreaProjection_apa] = null;
    this[__LambertAzimuthalEqualAreaProjection_qp] = null;
    this[__LambertAzimuthalEqualAreaProjection_mmf] = null;
    this[__LambertAzimuthalEqualAreaProjection_dd] = null;
    this[__LambertAzimuthalEqualAreaProjection_rq] = null;
    this[__LambertAzimuthalEqualAreaProjection_xmf] = null;
    this[__LambertAzimuthalEqualAreaProjection_ymf] = null;
    this[__LambertAzimuthalEqualAreaProjection_sinb1] = null;
    this[__LambertAzimuthalEqualAreaProjection_cosb1] = null;
    this[__LambertAzimuthalEqualAreaProjection_sinph0] = null;
    this[__LambertAzimuthalEqualAreaProjection_cosph0] = null;
    this[__LambertAzimuthalEqualAreaProjection_lat0] = dart.nullCheck(params.lat0);
    this[__LambertAzimuthalEqualAreaProjection_long0] = params.long0;
    this[__LambertAzimuthalEqualAreaProjection_x0] = dart.nullCheck(params.x0);
    this[__LambertAzimuthalEqualAreaProjection_y0] = dart.nullCheck(params.y0);
    this[phi0] = T.doubleN().as(params.map[$_get]("phi0"));
    laea.LambertAzimuthalEqualAreaProjection.__proto__.init.call(this, params);
    let t = this.lat0[$abs]();
    if ((t - 1.5707963267948966)[$abs]() < 1e-10) {
      this.mode = this.lat0 < 0 ? 1 : 2;
    } else if (t[$abs]() < 1e-10) {
      this.mode = 3;
    } else {
      this.mode = 4;
    }
    if (this.es > 0) {
      let sinphi = null;
      this.qp = utils.qsfnz(this.e, 1.0);
      this.mmf = 0.5 / (1 - this.es);
      this.apa = this[_authset](this.es);
      switch (this.mode) {
        case 2:
          {
            this.dd = 1.0;
            break;
          }
        case 1:
          {
            this.dd = 1.0;
            break;
          }
        case 3:
          {
            this.rq = math.sqrt(0.5 * this.qp);
            this.dd = 1 / this.rq;
            this.xmf = 1.0;
            this.ymf = 0.5 * this.qp;
            break;
          }
        case 4:
          {
            this.rq = math.sqrt(0.5 * this.qp);
            sinphi = math.sin(this.lat0);
            this.sinb1 = utils.qsfnz(this.e, core.double.as(sinphi)) / this.qp;
            this.cosb1 = math.sqrt(1 - this.sinb1 * this.sinb1);
            this.dd = math.cos(this.lat0) / (math.sqrt(1 - this.es * core.num.as(sinphi) * core.num.as(sinphi)) * this.rq * this.cosb1);
            this.ymf = (this.xmf = this.rq) / this.dd;
            this.xmf = this.xmf * this.dd;
            break;
          }
      }
    } else {
      if (this.mode === 4) {
        this.sinph0 = math.sin(this.lat0);
        this.cosph0 = math.cos(this.lat0);
      }
    }
  }).prototype = laea.LambertAzimuthalEqualAreaProjection.prototype;
  dart.addTypeTests(laea.LambertAzimuthalEqualAreaProjection);
  dart.addTypeCaches(laea.LambertAzimuthalEqualAreaProjection);
  dart.setMethodSignature(laea.LambertAzimuthalEqualAreaProjection, () => ({
    __proto__: dart.getMethods(laea.LambertAzimuthalEqualAreaProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point]),
    [_authset]: dart.fnType(core.List$(core.double), [core.double]),
    [_authlat]: dart.fnType(core.double, [core.double, core.List$(core.double)])
  }));
  dart.setGetterSignature(laea.LambertAzimuthalEqualAreaProjection, () => ({
    __proto__: dart.getGetters(laea.LambertAzimuthalEqualAreaProjection.__proto__),
    lat0: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double,
    mode: core.int,
    apa: core.List$(core.double),
    qp: core.double,
    mmf: core.double,
    dd: core.double,
    rq: core.double,
    xmf: core.double,
    ymf: core.double,
    sinb1: core.double,
    cosb1: core.double,
    sinph0: core.double,
    cosph0: core.double
  }));
  dart.setSetterSignature(laea.LambertAzimuthalEqualAreaProjection, () => ({
    __proto__: dart.getSetters(laea.LambertAzimuthalEqualAreaProjection.__proto__),
    lat0: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double,
    mode: core.int,
    apa: core.List$(core.double),
    qp: core.double,
    mmf: core.double,
    dd: core.double,
    rq: core.double,
    xmf: core.double,
    ymf: core.double,
    sinb1: core.double,
    cosb1: core.double,
    sinph0: core.double,
    cosph0: core.double
  }));
  dart.setLibraryUri(laea.LambertAzimuthalEqualAreaProjection, I[22]);
  dart.setFieldSignature(laea.LambertAzimuthalEqualAreaProjection, () => ({
    __proto__: dart.getFields(laea.LambertAzimuthalEqualAreaProjection.__proto__),
    [__LambertAzimuthalEqualAreaProjection_lat0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_y0]: dart.fieldType(dart.nullable(core.double)),
    phi0: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_mode]: dart.fieldType(dart.nullable(core.int)),
    [__LambertAzimuthalEqualAreaProjection_apa]: dart.fieldType(dart.nullable(core.List$(core.double))),
    [__LambertAzimuthalEqualAreaProjection_qp]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_mmf]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_dd]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_rq]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_xmf]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_ymf]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_sinb1]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_cosb1]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_sinph0]: dart.fieldType(dart.nullable(core.double)),
    [__LambertAzimuthalEqualAreaProjection_cosph0]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(laea.LambertAzimuthalEqualAreaProjection, () => ['names', 'S_POLE', 'N_POLE', 'EQUIT', 'OBLIQ']);
  dart.defineLazy(laea.LambertAzimuthalEqualAreaProjection, {
    /*laea.LambertAzimuthalEqualAreaProjection.names*/get names() {
      return T.JSArrayOfString().of(["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"]);
    },
    /*laea.LambertAzimuthalEqualAreaProjection.S_POLE*/get S_POLE() {
      return 1;
    },
    /*laea.LambertAzimuthalEqualAreaProjection.N_POLE*/get N_POLE() {
      return 2;
    },
    /*laea.LambertAzimuthalEqualAreaProjection.EQUIT*/get EQUIT() {
      return 3;
    },
    /*laea.LambertAzimuthalEqualAreaProjection.OBLIQ*/get OBLIQ() {
      return 4;
    }
  }, false);
  dart.defineLazy(laea, {
    /*laea.P00*/get P00() {
      return 0.3333333333333333;
    },
    set P00(_) {},
    /*laea.P01*/get P01() {
      return 0.17222222222222222;
    },
    set P01(_) {},
    /*laea.P02*/get P02() {
      return 0.10257936507936508;
    },
    set P02(_) {},
    /*laea.P10*/get P10() {
      return 0.06388888888888888;
    },
    set P10(_) {},
    /*laea.P11*/get P11() {
      return 0.0664021164021164;
    },
    set P11(_) {},
    /*laea.P20*/get P20() {
      return 0.016415012942191543;
    },
    set P20(_) {}
  }, false);
  var lat0$7 = dart.privateName(krovak, "KrovakProjection.lat0");
  var long0$11 = dart.privateName(krovak, "KrovakProjection.long0");
  var czech = dart.privateName(krovak, "KrovakProjection.czech");
  var __KrovakProjection_s45 = dart.privateName(krovak, "_#KrovakProjection#s45");
  var __KrovakProjection_s90 = dart.privateName(krovak, "_#KrovakProjection#s90");
  var __KrovakProjection_fi0 = dart.privateName(krovak, "_#KrovakProjection#fi0");
  var __KrovakProjection_e2 = dart.privateName(krovak, "_#KrovakProjection#e2");
  var __KrovakProjection_alfa = dart.privateName(krovak, "_#KrovakProjection#alfa");
  var __KrovakProjection_uq = dart.privateName(krovak, "_#KrovakProjection#uq");
  var __KrovakProjection_u0 = dart.privateName(krovak, "_#KrovakProjection#u0");
  var __KrovakProjection_g = dart.privateName(krovak, "_#KrovakProjection#g");
  var __KrovakProjection_k1 = dart.privateName(krovak, "_#KrovakProjection#k1");
  var __KrovakProjection_k = dart.privateName(krovak, "_#KrovakProjection#k");
  var __KrovakProjection_n0 = dart.privateName(krovak, "_#KrovakProjection#n0");
  var __KrovakProjection_s0 = dart.privateName(krovak, "_#KrovakProjection#s0");
  var __KrovakProjection_n = dart.privateName(krovak, "_#KrovakProjection#n");
  var __KrovakProjection_ro0 = dart.privateName(krovak, "_#KrovakProjection#ro0");
  var __KrovakProjection_ad = dart.privateName(krovak, "_#KrovakProjection#ad");
  krovak.KrovakProjection = class KrovakProjection extends projection.Projection {
    get lat0() {
      return this[lat0$7];
    }
    set lat0(value) {
      this[lat0$7] = value;
    }
    get long0() {
      return this[long0$11];
    }
    set long0(value) {
      this[long0$11] = value;
    }
    get czech() {
      return this[czech];
    }
    set czech(value) {
      this[czech] = value;
    }
    get s45() {
      let t6;
      t6 = this[__KrovakProjection_s45];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("s45")) : t6;
    }
    set s45(s45$35param) {
      this[__KrovakProjection_s45] = s45$35param;
    }
    get s90() {
      let t6;
      t6 = this[__KrovakProjection_s90];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("s90")) : t6;
    }
    set s90(s90$35param) {
      this[__KrovakProjection_s90] = s90$35param;
    }
    get fi0() {
      let t6;
      t6 = this[__KrovakProjection_fi0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("fi0")) : t6;
    }
    set fi0(fi0$35param) {
      this[__KrovakProjection_fi0] = fi0$35param;
    }
    get e2() {
      let t6;
      t6 = this[__KrovakProjection_e2];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e2")) : t6;
    }
    set e2(e2$35param) {
      this[__KrovakProjection_e2] = e2$35param;
    }
    get alfa() {
      let t6;
      t6 = this[__KrovakProjection_alfa];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("alfa")) : t6;
    }
    set alfa(alfa$35param) {
      this[__KrovakProjection_alfa] = alfa$35param;
    }
    get uq() {
      let t6;
      t6 = this[__KrovakProjection_uq];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("uq")) : t6;
    }
    set uq(uq$35param) {
      this[__KrovakProjection_uq] = uq$35param;
    }
    get u0() {
      let t6;
      t6 = this[__KrovakProjection_u0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("u0")) : t6;
    }
    set u0(u0$35param) {
      this[__KrovakProjection_u0] = u0$35param;
    }
    get g() {
      let t6;
      t6 = this[__KrovakProjection_g];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("g")) : t6;
    }
    set g(g$35param) {
      this[__KrovakProjection_g] = g$35param;
    }
    get k1() {
      let t6;
      t6 = this[__KrovakProjection_k1];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("k1")) : t6;
    }
    set k1(k1$35param) {
      this[__KrovakProjection_k1] = k1$35param;
    }
    get k() {
      let t6;
      t6 = this[__KrovakProjection_k];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("k")) : t6;
    }
    set k(k$35param) {
      this[__KrovakProjection_k] = k$35param;
    }
    get n0() {
      let t6;
      t6 = this[__KrovakProjection_n0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("n0")) : t6;
    }
    set n0(n0$35param) {
      this[__KrovakProjection_n0] = n0$35param;
    }
    get s0() {
      let t6;
      t6 = this[__KrovakProjection_s0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("s0")) : t6;
    }
    set s0(s0$35param) {
      this[__KrovakProjection_s0] = s0$35param;
    }
    get n() {
      let t6;
      t6 = this[__KrovakProjection_n];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("n")) : t6;
    }
    set n(n$35param) {
      this[__KrovakProjection_n] = n$35param;
    }
    get ro0() {
      let t6;
      t6 = this[__KrovakProjection_ro0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("ro0")) : t6;
    }
    set ro0(ro0$35param) {
      this[__KrovakProjection_ro0] = ro0$35param;
    }
    get ad() {
      let t6;
      t6 = this[__KrovakProjection_ad];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("ad")) : t6;
    }
    set ad(ad$35param) {
      this[__KrovakProjection_ad] = ad$35param;
    }
    static ['_#init#tearOff'](params) {
      return new krovak.KrovakProjection.init(params);
    }
    forward(p) {
      let t6, t6$;
      let gfi = null;
      let u = null;
      let deltav = null;
      let s = null;
      let d = null;
      let eps = null;
      let ro = null;
      let lon = p.x;
      let lat = p.y;
      let delta_lon = utils.adjust_lon(lon - this.long0);
      gfi = math.pow((1 + this.e * math.sin(lat)) / (1 - this.e * math.sin(lat)), this.alfa * this.e / 2);
      u = 2 * (math.atan(this.k * math.pow(math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
      deltav = -delta_lon * this.alfa;
      s = math.asin(math.cos(this.ad) * math.sin(u) + math.sin(this.ad) * math.cos(u) * math.cos(deltav));
      d = math.asin(math.cos(u) * math.sin(deltav) / math.cos(s));
      eps = this.n * d;
      ro = this.ro0 * math.pow(math.tan(this.s0 / 2 + this.s45), this.n) / math.pow(math.tan(s / 2 + this.s45), this.n);
      p.y = ro * math.cos(eps) / 1;
      p.x = ro * math.sin(eps) / 1;
      if (!this.czech) {
        t6 = p;
        t6.y = t6.y * -1;
        t6$ = p;
        t6$.x = t6$.x * -1;
      }
      return p;
    }
    inverse(p) {
      let t6, t6$;
      let u = null;
      let deltav = null;
      let s = null;
      let d = null;
      let eps = null;
      let ro = null;
      let fi1 = null;
      let ok = null;
      let tmp = p.x;
      p.x = p.y;
      p.y = tmp;
      if (!this.czech) {
        t6 = p;
        t6.y = t6.y * -1;
        t6$ = p;
        t6$.x = t6$.x * -1;
      }
      ro = math.sqrt(p.x * p.x + p.y * p.y);
      eps = math.atan2(p.y, p.x);
      d = eps / math.sin(this.s0);
      s = 2 * (math.atan(math.pow(this.ro0 / ro, 1 / this.n) * math.tan(this.s0 / 2 + this.s45)) - this.s45);
      u = math.asin(math.cos(this.ad) * math.sin(s) - math.sin(this.ad) * math.cos(s) * math.cos(d));
      deltav = math.asin(math.cos(s) * math.sin(d) / math.cos(u));
      p.x = this.long0 - deltav / this.alfa;
      fi1 = u;
      ok = 0;
      let iter = 0;
      do {
        p.y = 2 * (math.atan(math.pow(this.k, -1 / this.alfa) * math.pow(math.tan(u / 2 + this.s45), 1 / this.alfa) * math.pow((1 + this.e * math.sin(fi1)) / (1 - this.e * math.sin(fi1)), this.e / 2)) - this.s45);
        if ((fi1 - p.y)[$abs]() < 1e-10) {
          ok = 1;
        }
        fi1 = p.y;
        iter = iter + 1;
      } while (dart.equals(ok, 0) && iter < 15);
      if (iter >= 15) {
        dart.throw("Shouldn't reach");
      }
      return p;
    }
  };
  (krovak.KrovakProjection.init = function(params) {
    let t6;
    this[__KrovakProjection_s45] = null;
    this[__KrovakProjection_s90] = null;
    this[__KrovakProjection_fi0] = null;
    this[__KrovakProjection_e2] = null;
    this[__KrovakProjection_alfa] = null;
    this[__KrovakProjection_uq] = null;
    this[__KrovakProjection_u0] = null;
    this[__KrovakProjection_g] = null;
    this[__KrovakProjection_k1] = null;
    this[__KrovakProjection_k] = null;
    this[__KrovakProjection_n0] = null;
    this[__KrovakProjection_s0] = null;
    this[__KrovakProjection_n] = null;
    this[__KrovakProjection_ro0] = null;
    this[__KrovakProjection_ad] = null;
    this[lat0$7] = (t6 = params.lat0, t6 == null ? 0.863937979737193 : t6);
    this[long0$11] = params.long0;
    this[czech] = dart.equals(params.map[$_get]("czech"), true);
    krovak.KrovakProjection.__proto__.init.call(this, params);
    this.a = 6377397.155;
    this.es = 0.006674372230614;
    this.e = math.sqrt(this.es);
    if (this.long0[$isNaN]) {
      this.long0 = 0.7417649320975901 - 0.308341501185665;
    }
    if (this.k0 === 0.0 || this.k0[$isNaN]) {
      this.k0 = 0.9999;
    }
    this.s45 = 0.785398163397448;
    this.s90 = 2 * this.s45;
    this.fi0 = this.lat0;
    this.e2 = this.es;
    this.e = math.sqrt(this.e2);
    this.alfa = math.sqrt(1 + this.e2 * math.pow(math.cos(this.fi0), 4) / (1 - this.e2));
    this.uq = 1.04216856380474;
    this.u0 = math.asin(math.sin(this.fi0) / this.alfa);
    this.g = math.pow((1 + this.e * math.sin(this.fi0)) / (1 - this.e * math.sin(this.fi0)), this.alfa * this.e / 2);
    this.k = math.tan(this.u0 / 2 + this.s45) / math.pow(math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
    this.k1 = this.k0;
    this.n0 = this.a * math.sqrt(1 - this.e2) / (1 - this.e2 * math.pow(math.sin(this.fi0), 2));
    this.s0 = 1.37008346281555;
    this.n = math.sin(this.s0);
    this.ro0 = this.k1 * this.n0 / math.tan(this.s0);
    this.ad = this.s90 - this.uq;
  }).prototype = krovak.KrovakProjection.prototype;
  dart.addTypeTests(krovak.KrovakProjection);
  dart.addTypeCaches(krovak.KrovakProjection);
  dart.setMethodSignature(krovak.KrovakProjection, () => ({
    __proto__: dart.getMethods(krovak.KrovakProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(krovak.KrovakProjection, () => ({
    __proto__: dart.getGetters(krovak.KrovakProjection.__proto__),
    s45: core.double,
    s90: core.double,
    fi0: core.double,
    e2: core.double,
    alfa: core.double,
    uq: core.double,
    u0: core.double,
    g: core.double,
    k1: core.double,
    k: core.double,
    n0: core.double,
    s0: core.double,
    n: core.double,
    ro0: core.double,
    ad: core.double
  }));
  dart.setSetterSignature(krovak.KrovakProjection, () => ({
    __proto__: dart.getSetters(krovak.KrovakProjection.__proto__),
    s45: core.double,
    s90: core.double,
    fi0: core.double,
    e2: core.double,
    alfa: core.double,
    uq: core.double,
    u0: core.double,
    g: core.double,
    k1: core.double,
    k: core.double,
    n0: core.double,
    s0: core.double,
    n: core.double,
    ro0: core.double,
    ad: core.double
  }));
  dart.setLibraryUri(krovak.KrovakProjection, I[23]);
  dart.setFieldSignature(krovak.KrovakProjection, () => ({
    __proto__: dart.getFields(krovak.KrovakProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    [__KrovakProjection_s45]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_s90]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_fi0]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_e2]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_alfa]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_uq]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_u0]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_g]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_k1]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_k]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_n0]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_s0]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_n]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_ro0]: dart.fieldType(dart.nullable(core.double)),
    [__KrovakProjection_ad]: dart.fieldType(dart.nullable(core.double)),
    czech: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(krovak.KrovakProjection, () => ['names']);
  dart.defineLazy(krovak.KrovakProjection, {
    /*krovak.KrovakProjection.names*/get names() {
      return T.JSArrayOfString().of(["Krovak", "krovak"]);
    }
  }, false);
  var __GaussSchreiberTransverseMercatorProjection_long0 = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#long0");
  var __GaussSchreiberTransverseMercatorProjection_lat0 = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#lat0");
  var __GaussSchreiberTransverseMercatorProjection_x0 = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#x0");
  var __GaussSchreiberTransverseMercatorProjection_y0 = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#y0");
  var __GaussSchreiberTransverseMercatorProjection_lc = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#lc");
  var __GaussSchreiberTransverseMercatorProjection_rs = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#rs");
  var __GaussSchreiberTransverseMercatorProjection_cp = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#cp");
  var __GaussSchreiberTransverseMercatorProjection_n2 = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#n2");
  var __GaussSchreiberTransverseMercatorProjection_xs = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#xs");
  var __GaussSchreiberTransverseMercatorProjection_ys = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#ys");
  var __GaussSchreiberTransverseMercatorProjection_title = dart.privateName(gstmerc, "_#GaussSchreiberTransverseMercatorProjection#title");
  gstmerc.GaussSchreiberTransverseMercatorProjection = class GaussSchreiberTransverseMercatorProjection extends projection.Projection {
    get long0() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_long0] = long0$35param;
    }
    get lat0() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_lat0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat0")) : t6;
    }
    set lat0(lat0$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_lat0] = lat0$35param;
    }
    get x0() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_y0] = y0$35param;
    }
    get lc() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_lc];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lc")) : t6;
    }
    set lc(lc$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_lc] = lc$35param;
    }
    get rs() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_rs];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("rs")) : t6;
    }
    set rs(rs$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_rs] = rs$35param;
    }
    get cp() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_cp];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("cp")) : t6;
    }
    set cp(cp$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_cp] = cp$35param;
    }
    get n2() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_n2];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("n2")) : t6;
    }
    set n2(n2$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_n2] = n2$35param;
    }
    get xs() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_xs];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("xs")) : t6;
    }
    set xs(xs$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_xs] = xs$35param;
    }
    get ys() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_ys];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("ys")) : t6;
    }
    set ys(ys$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_ys] = ys$35param;
    }
    get title() {
      let t6;
      t6 = this[__GaussSchreiberTransverseMercatorProjection_title];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("title")) : t6;
    }
    set title(title$35param) {
      this[__GaussSchreiberTransverseMercatorProjection_title] = title$35param;
    }
    static ['_#init#tearOff'](params) {
      return new gstmerc.GaussSchreiberTransverseMercatorProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let L = this.rs * (lon - this.lc);
      let Ls = this.cp + this.rs * utils.latiso(this.e, lat, math.sin(lat));
      let lat1 = math.asin(math.sin(L) / utils.cosh(Ls));
      let Ls1 = utils.latiso(0.0, lat1, math.sin(lat1));
      p.x = this.xs + this.n2 * Ls1;
      p.y = this.ys + this.n2 * math.atan(utils.sinh(Ls) / math.cos(L));
      return p;
    }
    inverse(p) {
      let x = p.x;
      let y = p.y;
      let L = math.atan(utils.sinh((x - this.xs) / this.n2) / math.cos((y - this.ys) / this.n2));
      let lat1 = math.asin(math.sin((y - this.ys) / this.n2) / utils.cosh((x - this.xs) / this.n2));
      let LC = utils.latiso(0.0, lat1, math.sin(lat1));
      p.x = this.lc + L / this.rs;
      p.y = utils.invlatiso(this.e, (LC - this.cp) / this.rs);
      return p;
    }
  };
  (gstmerc.GaussSchreiberTransverseMercatorProjection.init = function(params) {
    this[__GaussSchreiberTransverseMercatorProjection_long0] = null;
    this[__GaussSchreiberTransverseMercatorProjection_lat0] = null;
    this[__GaussSchreiberTransverseMercatorProjection_x0] = null;
    this[__GaussSchreiberTransverseMercatorProjection_y0] = null;
    this[__GaussSchreiberTransverseMercatorProjection_lc] = null;
    this[__GaussSchreiberTransverseMercatorProjection_rs] = null;
    this[__GaussSchreiberTransverseMercatorProjection_cp] = null;
    this[__GaussSchreiberTransverseMercatorProjection_n2] = null;
    this[__GaussSchreiberTransverseMercatorProjection_xs] = null;
    this[__GaussSchreiberTransverseMercatorProjection_ys] = null;
    this[__GaussSchreiberTransverseMercatorProjection_title] = null;
    gstmerc.GaussSchreiberTransverseMercatorProjection.__proto__.init.call(this, params);
    let temp = this.b / this.a;
    this.e = math.sqrt(1 - temp * temp);
    this.lc = this.long0;
    this.rs = math.sqrt(1 + this.e * this.e * math.pow(math.cos(this.lat0), 4) / (1 - this.e * this.e));
    let sinz = math.sin(this.lat0);
    let pc = math.asin(sinz / this.rs);
    let sinzpc = math.sin(pc);
    this.cp = utils.latiso(0.0, pc, sinzpc) - this.rs * utils.latiso(this.e, this.lat0, sinz);
    this.n2 = this.k0 * this.a * math.sqrt(1 - this.e * this.e) / (1 - this.e * this.e * sinz * sinz);
    this.xs = this.x0;
    this.ys = this.y0 - this.n2 * pc;
    if (this.title[$isEmpty]) {
      this.title = "Gauss Schreiber transverse mercator";
    }
  }).prototype = gstmerc.GaussSchreiberTransverseMercatorProjection.prototype;
  dart.addTypeTests(gstmerc.GaussSchreiberTransverseMercatorProjection);
  dart.addTypeCaches(gstmerc.GaussSchreiberTransverseMercatorProjection);
  dart.setMethodSignature(gstmerc.GaussSchreiberTransverseMercatorProjection, () => ({
    __proto__: dart.getMethods(gstmerc.GaussSchreiberTransverseMercatorProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(gstmerc.GaussSchreiberTransverseMercatorProjection, () => ({
    __proto__: dart.getGetters(gstmerc.GaussSchreiberTransverseMercatorProjection.__proto__),
    long0: core.double,
    lat0: core.double,
    x0: core.double,
    y0: core.double,
    lc: core.double,
    rs: core.double,
    cp: core.double,
    n2: core.double,
    xs: core.double,
    ys: core.double,
    title: core.String
  }));
  dart.setSetterSignature(gstmerc.GaussSchreiberTransverseMercatorProjection, () => ({
    __proto__: dart.getSetters(gstmerc.GaussSchreiberTransverseMercatorProjection.__proto__),
    long0: core.double,
    lat0: core.double,
    x0: core.double,
    y0: core.double,
    lc: core.double,
    rs: core.double,
    cp: core.double,
    n2: core.double,
    xs: core.double,
    ys: core.double,
    title: core.String
  }));
  dart.setLibraryUri(gstmerc.GaussSchreiberTransverseMercatorProjection, I[24]);
  dart.setFieldSignature(gstmerc.GaussSchreiberTransverseMercatorProjection, () => ({
    __proto__: dart.getFields(gstmerc.GaussSchreiberTransverseMercatorProjection.__proto__),
    [__GaussSchreiberTransverseMercatorProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_lat0]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_y0]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_lc]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_rs]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_cp]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_n2]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_xs]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_ys]: dart.fieldType(dart.nullable(core.double)),
    [__GaussSchreiberTransverseMercatorProjection_title]: dart.fieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(gstmerc.GaussSchreiberTransverseMercatorProjection, () => ['names']);
  dart.defineLazy(gstmerc.GaussSchreiberTransverseMercatorProjection, {
    /*gstmerc.GaussSchreiberTransverseMercatorProjection.names*/get names() {
      return T.JSArrayOfString().of(["gstmerg", "gstmerc"]);
    }
  }, false);
  var lat0$8 = dart.privateName(gnom, "GnomicProjection.lat0");
  var long0$12 = dart.privateName(gnom, "GnomicProjection.long0");
  var x0$11 = dart.privateName(gnom, "GnomicProjection.x0");
  var y0$11 = dart.privateName(gnom, "GnomicProjection.y0");
  var phic0 = dart.privateName(gnom, "GnomicProjection.phic0");
  var __GnomicProjection_sin_p14 = dart.privateName(gnom, "_#GnomicProjection#sin_p14");
  var __GnomicProjection_cos_p14 = dart.privateName(gnom, "_#GnomicProjection#cos_p14");
  var __GnomicProjection_infinity_dist = dart.privateName(gnom, "_#GnomicProjection#infinity_dist");
  var __GnomicProjection_rc = dart.privateName(gnom, "_#GnomicProjection#rc");
  gnom.GnomicProjection = class GnomicProjection extends projection.Projection {
    get lat0() {
      return this[lat0$8];
    }
    set lat0(value) {
      this[lat0$8] = value;
    }
    get long0() {
      return this[long0$12];
    }
    set long0(value) {
      this[long0$12] = value;
    }
    get x0() {
      return this[x0$11];
    }
    set x0(value) {
      this[x0$11] = value;
    }
    get y0() {
      return this[y0$11];
    }
    set y0(value) {
      this[y0$11] = value;
    }
    get phic0() {
      return this[phic0];
    }
    set phic0(value) {
      this[phic0] = value;
    }
    get sin_p14() {
      let t6;
      t6 = this[__GnomicProjection_sin_p14];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("sin_p14")) : t6;
    }
    set sin_p14(sin_p14$35param) {
      this[__GnomicProjection_sin_p14] = sin_p14$35param;
    }
    get cos_p14() {
      let t6;
      t6 = this[__GnomicProjection_cos_p14];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("cos_p14")) : t6;
    }
    set cos_p14(cos_p14$35param) {
      this[__GnomicProjection_cos_p14] = cos_p14$35param;
    }
    get infinity_dist() {
      let t6;
      t6 = this[__GnomicProjection_infinity_dist];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("infinity_dist")) : t6;
    }
    set infinity_dist(infinity_dist$35param) {
      this[__GnomicProjection_infinity_dist] = infinity_dist$35param;
    }
    get rc() {
      let t6;
      t6 = this[__GnomicProjection_rc];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("rc")) : t6;
    }
    set rc(rc$35param) {
      this[__GnomicProjection_rc] = rc$35param;
    }
    static ['_#init#tearOff'](params) {
      return new gnom.GnomicProjection.init(params);
    }
    forward(p) {
      let sinphi = null;
      let cosphi = null;
      let dlon = null;
      let coslon = null;
      let ksp = null;
      let g = null;
      let x = null;
      let y = null;
      let lon = p.x;
      let lat = p.y;
      dlon = utils.adjust_lon(lon - this.long0);
      sinphi = math.sin(lat);
      cosphi = math.cos(lat);
      coslon = math.cos(dlon);
      g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
      ksp = 1.0;
      if (g > 0 || g[$abs]() <= 1e-10) {
        x = this.x0 + this.a * ksp * cosphi * math.sin(dlon) / g;
        y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
      } else {
        x = this.x0 + this.infinity_dist * cosphi * math.sin(dlon);
        y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
      }
      p.x = x;
      p.y = y;
      return p;
    }
    inverse(p) {
      let t6, t6$;
      let rh = null;
      let sinc = null;
      let cosc = null;
      let c = null;
      let lon = null;
      let lat = null;
      p.x = (p.x - this.x0) / this.a;
      p.y = (p.y - this.y0) / this.a;
      t6 = p;
      t6.x = t6.x / this.k0;
      t6$ = p;
      t6$.y = t6$.y / this.k0;
      if (!(rh = math.sqrt(p.x * p.x + p.y * p.y))[$isNaN]) {
        c = math.atan2(rh, this.rc);
        sinc = math.sin(c);
        cosc = math.cos(c);
        lat = utils.asinz(cosc * this.sin_p14 + p.y * sinc * this.cos_p14 / rh);
        lon = math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
        lon = utils.adjust_lon(this.long0 + lon);
      } else {
        lat = dart.nullCheck(this.phic0);
        lon = 0.0;
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
  };
  (gnom.GnomicProjection.init = function(params) {
    this[__GnomicProjection_sin_p14] = null;
    this[__GnomicProjection_cos_p14] = null;
    this[__GnomicProjection_infinity_dist] = null;
    this[__GnomicProjection_rc] = null;
    this[lat0$8] = dart.nullCheck(params.lat0);
    this[long0$12] = params.long0;
    this[x0$11] = dart.nullCheck(params.x0);
    this[y0$11] = dart.nullCheck(params.y0);
    this[phic0] = T.doubleN().as(params.map[$_get]("phic0"));
    gnom.GnomicProjection.__proto__.init.call(this, params);
    this.sin_p14 = math.sin(this.lat0);
    this.cos_p14 = math.cos(this.lat0);
    this.infinity_dist = 1000 * this.a;
    this.rc = 1.0;
  }).prototype = gnom.GnomicProjection.prototype;
  dart.addTypeTests(gnom.GnomicProjection);
  dart.addTypeCaches(gnom.GnomicProjection);
  dart.setMethodSignature(gnom.GnomicProjection, () => ({
    __proto__: dart.getMethods(gnom.GnomicProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(gnom.GnomicProjection, () => ({
    __proto__: dart.getGetters(gnom.GnomicProjection.__proto__),
    sin_p14: core.double,
    cos_p14: core.double,
    infinity_dist: core.double,
    rc: core.double
  }));
  dart.setSetterSignature(gnom.GnomicProjection, () => ({
    __proto__: dart.getSetters(gnom.GnomicProjection.__proto__),
    sin_p14: core.double,
    cos_p14: core.double,
    infinity_dist: core.double,
    rc: core.double
  }));
  dart.setLibraryUri(gnom.GnomicProjection, I[25]);
  dart.setFieldSignature(gnom.GnomicProjection, () => ({
    __proto__: dart.getFields(gnom.GnomicProjection.__proto__),
    lat0: dart.fieldType(core.double),
    long0: dart.fieldType(core.double),
    x0: dart.fieldType(core.double),
    y0: dart.fieldType(core.double),
    [__GnomicProjection_sin_p14]: dart.fieldType(dart.nullable(core.double)),
    [__GnomicProjection_cos_p14]: dart.fieldType(dart.nullable(core.double)),
    [__GnomicProjection_infinity_dist]: dart.fieldType(dart.nullable(core.double)),
    [__GnomicProjection_rc]: dart.fieldType(dart.nullable(core.double)),
    phic0: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(gnom.GnomicProjection, () => ['names']);
  dart.defineLazy(gnom.GnomicProjection, {
    /*gnom.GnomicProjection.names*/get names() {
      return T.JSArrayOfString().of(["gnom"]);
    }
  }, false);
  var name = dart.privateName(geocent, "GeocentricProjection.name");
  geocent.GeocentricProjection = class GeocentricProjection extends projection.Projection {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    static ['_#init#tearOff'](params) {
      return new geocent.GeocentricProjection.init(params);
    }
    forward(p) {
      let point = datum_utils.geodeticToGeocentric(p, this.es, this.a);
      return point;
    }
    inverse(p) {
      let point = datum_utils.geocentricToGeodetic(p, this.es, this.a, this.b);
      return point;
    }
  };
  (geocent.GeocentricProjection.init = function(params) {
    this[name] = "geocent";
    geocent.GeocentricProjection.__proto__.init.call(this, params);
    ;
  }).prototype = geocent.GeocentricProjection.prototype;
  dart.addTypeTests(geocent.GeocentricProjection);
  dart.addTypeCaches(geocent.GeocentricProjection);
  dart.setMethodSignature(geocent.GeocentricProjection, () => ({
    __proto__: dart.getMethods(geocent.GeocentricProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setLibraryUri(geocent.GeocentricProjection, I[26]);
  dart.setFieldSignature(geocent.GeocentricProjection, () => ({
    __proto__: dart.getFields(geocent.GeocentricProjection.__proto__),
    name: dart.fieldType(core.String)
  }));
  dart.setStaticFieldSignature(geocent.GeocentricProjection, () => ['names']);
  dart.defineLazy(geocent.GeocentricProjection, {
    /*geocent.GeocentricProjection.names*/get names() {
      return T.JSArrayOfString().of(["Geocentric", "geocentric", "geocent", "Geocent"]);
    }
  }, false);
  dart.defineLazy(gauss, {
    /*gauss.MAX_ITER*/get MAX_ITER() {
      return 20;
    },
    set MAX_ITER(_) {}
  }, false);
  var __EquidistantConicProjection_e0 = dart.privateName(eqdc, "_#EquidistantConicProjection#e0");
  var __EquidistantConicProjection_e1 = dart.privateName(eqdc, "_#EquidistantConicProjection#e1");
  var __EquidistantConicProjection_e2 = dart.privateName(eqdc, "_#EquidistantConicProjection#e2");
  var __EquidistantConicProjection_e3 = dart.privateName(eqdc, "_#EquidistantConicProjection#e3");
  var __EquidistantConicProjection_long0 = dart.privateName(eqdc, "_#EquidistantConicProjection#long0");
  var __EquidistantConicProjection_x0 = dart.privateName(eqdc, "_#EquidistantConicProjection#x0");
  var __EquidistantConicProjection_y0 = dart.privateName(eqdc, "_#EquidistantConicProjection#y0");
  var __EquidistantConicProjection_ns = dart.privateName(eqdc, "_#EquidistantConicProjection#ns");
  var __EquidistantConicProjection_g = dart.privateName(eqdc, "_#EquidistantConicProjection#g");
  var __EquidistantConicProjection_rh = dart.privateName(eqdc, "_#EquidistantConicProjection#rh");
  eqdc.EquidistantConicProjection = class EquidistantConicProjection extends projection.Projection {
    get e0() {
      let t6;
      t6 = this[__EquidistantConicProjection_e0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e0")) : t6;
    }
    set e0(e0$35param) {
      this[__EquidistantConicProjection_e0] = e0$35param;
    }
    get e1() {
      let t6;
      t6 = this[__EquidistantConicProjection_e1];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e1")) : t6;
    }
    set e1(e1$35param) {
      this[__EquidistantConicProjection_e1] = e1$35param;
    }
    get e2() {
      let t6;
      t6 = this[__EquidistantConicProjection_e2];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e2")) : t6;
    }
    set e2(e2$35param) {
      this[__EquidistantConicProjection_e2] = e2$35param;
    }
    get e3() {
      let t6;
      t6 = this[__EquidistantConicProjection_e3];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e3")) : t6;
    }
    set e3(e3$35param) {
      this[__EquidistantConicProjection_e3] = e3$35param;
    }
    get long0() {
      let t6;
      t6 = this[__EquidistantConicProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__EquidistantConicProjection_long0] = long0$35param;
    }
    get x0() {
      let t6;
      t6 = this[__EquidistantConicProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__EquidistantConicProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__EquidistantConicProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__EquidistantConicProjection_y0] = y0$35param;
    }
    get ns() {
      let t6;
      t6 = this[__EquidistantConicProjection_ns];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("ns")) : t6;
    }
    set ns(ns$35param) {
      this[__EquidistantConicProjection_ns] = ns$35param;
    }
    get g() {
      let t6;
      t6 = this[__EquidistantConicProjection_g];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("g")) : t6;
    }
    set g(g$35param) {
      this[__EquidistantConicProjection_g] = g$35param;
    }
    get rh() {
      let t6;
      t6 = this[__EquidistantConicProjection_rh];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("rh")) : t6;
    }
    set rh(rh$35param) {
      this[__EquidistantConicProjection_rh] = rh$35param;
    }
    static ['_#init#tearOff'](params) {
      return new eqdc.EquidistantConicProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let rh1 = null;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        rh1 = this.a * (this.g - lat);
      } else {
        let ml = utils.mlfn(this.e0, this.e1, this.e2, this.e3, lat);
        rh1 = this.a * (this.g - ml);
      }
      let theta = this.ns * utils.adjust_lon(lon - this.long0);
      let x = this.x0 + core.num.as(dart.dsend(rh1, '*', [math.sin(theta)]));
      let y = this.y0 + this.rh - core.num.as(dart.dsend(rh1, '*', [math.cos(theta)]));
      p.x = x;
      p.y = y;
      return p;
    }
    inverse(p) {
      let t6;
      t6 = p;
      t6.x = t6.x - this.x0;
      p.y = this.rh - p.y + this.y0;
      let con = null;
      let rh1 = null;
      let lat = null;
      let lon = null;
      if (this.ns >= 0) {
        rh1 = math.sqrt(p.x * p.x + p.y * p.y);
        con = 1;
      } else {
        rh1 = -math.sqrt(p.x * p.x + p.y * p.y);
        con = -1;
      }
      let theta = 0.0;
      if (!dart.equals(rh1, 0)) {
        theta = math.atan2(core.num.as(dart.dsend(con, '*', [p.x])), core.num.as(dart.dsend(con, '*', [p.y])));
      }
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        lon = utils.adjust_lon(this.long0 + theta / this.ns);
        lat = utils.adjust_lat(this.g - core.num.as(dart.dsend(rh1, '/', [this.a])));
        p.x = core.double.as(lon);
        p.y = core.double.as(lat);
        return p;
      } else {
        let ml = this.g - core.num.as(dart.dsend(rh1, '/', [this.a]));
        lat = utils.imlfn(ml, this.e0, this.e1, this.e2, this.e3);
        lon = utils.adjust_lon(this.long0 + theta / this.ns);
        p.x = core.double.as(lon);
        p.y = core.double.as(lat);
        return p;
      }
    }
  };
  (eqdc.EquidistantConicProjection.init = function(params) {
    this[__EquidistantConicProjection_e0] = null;
    this[__EquidistantConicProjection_e1] = null;
    this[__EquidistantConicProjection_e2] = null;
    this[__EquidistantConicProjection_e3] = null;
    this[__EquidistantConicProjection_long0] = null;
    this[__EquidistantConicProjection_x0] = null;
    this[__EquidistantConicProjection_y0] = null;
    this[__EquidistantConicProjection_ns] = null;
    this[__EquidistantConicProjection_g] = null;
    this[__EquidistantConicProjection_rh] = null;
    eqdc.EquidistantConicProjection.__proto__.init.call(this, params);
    let lat1 = dart.nullCheck(params.lat1);
    let lat2 = dart.nullCheck(params.lat2);
    let lat0 = params.lat0;
    this.long0 = params.long0;
    this.x0 = dart.nullCheck(params.x0);
    this.y0 = dart.nullCheck(params.y0);
    if ((lat1 + lat2)[$abs]() < 1e-10) {
      return;
    }
    lat2 = lat2 === 0.0 ? lat1 : lat2;
    let temp = this.b / this.a;
    let es = 1 - math.pow(temp, 2);
    this.e = math.sqrt(es);
    this.e0 = utils.e0fn(es);
    this.e1 = utils.e1fn(es);
    this.e2 = utils.e2fn(es);
    this.e3 = utils.e3fn(es);
    let sinphi = math.sin(lat1);
    let cosphi = math.cos(lat1);
    let ms1 = utils.msfnz(this.e, sinphi, cosphi);
    let ml1 = utils.mlfn(this.e0, this.e1, this.e2, this.e3, lat1);
    if ((lat1 - lat2)[$abs]() < 1e-10) {
      this.ns = sinphi;
    } else {
      sinphi = math.sin(lat2);
      cosphi = math.cos(lat2);
      let ms2 = utils.msfnz(this.e, sinphi, cosphi);
      let ml2 = utils.mlfn(this.e0, this.e1, this.e2, this.e3, lat2);
      this.ns = (ms1 - ms2) / (ml2 - ml1);
    }
    this.g = ml1 + ms1 / this.ns;
    let ml0 = utils.mlfn(this.e0, this.e1, this.e2, this.e3, dart.nullCheck(lat0));
    this.rh = this.a * (this.g - ml0);
  }).prototype = eqdc.EquidistantConicProjection.prototype;
  dart.addTypeTests(eqdc.EquidistantConicProjection);
  dart.addTypeCaches(eqdc.EquidistantConicProjection);
  dart.setMethodSignature(eqdc.EquidistantConicProjection, () => ({
    __proto__: dart.getMethods(eqdc.EquidistantConicProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(eqdc.EquidistantConicProjection, () => ({
    __proto__: dart.getGetters(eqdc.EquidistantConicProjection.__proto__),
    e0: core.double,
    e1: core.double,
    e2: core.double,
    e3: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double,
    ns: core.double,
    g: core.double,
    rh: core.double
  }));
  dart.setSetterSignature(eqdc.EquidistantConicProjection, () => ({
    __proto__: dart.getSetters(eqdc.EquidistantConicProjection.__proto__),
    e0: core.double,
    e1: core.double,
    e2: core.double,
    e3: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double,
    ns: core.double,
    g: core.double,
    rh: core.double
  }));
  dart.setLibraryUri(eqdc.EquidistantConicProjection, I[27]);
  dart.setFieldSignature(eqdc.EquidistantConicProjection, () => ({
    __proto__: dart.getFields(eqdc.EquidistantConicProjection.__proto__),
    [__EquidistantConicProjection_e0]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_e1]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_e2]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_e3]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_y0]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_ns]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_g]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantConicProjection_rh]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(eqdc.EquidistantConicProjection, () => ['names']);
  dart.defineLazy(eqdc.EquidistantConicProjection, {
    /*eqdc.EquidistantConicProjection.names*/get names() {
      return T.JSArrayOfString().of(["Equidistant_Conic", "eqdc"]);
    }
  }, false);
  var __EquidistantCylindricalProjection_long0 = dart.privateName(eqc, "_#EquidistantCylindricalProjection#long0");
  var __EquidistantCylindricalProjection_x0 = dart.privateName(eqc, "_#EquidistantCylindricalProjection#x0");
  var __EquidistantCylindricalProjection_y0 = dart.privateName(eqc, "_#EquidistantCylindricalProjection#y0");
  var __EquidistantCylindricalProjection_lat_ts = dart.privateName(eqc, "_#EquidistantCylindricalProjection#lat_ts");
  var __EquidistantCylindricalProjection_lat0 = dart.privateName(eqc, "_#EquidistantCylindricalProjection#lat0");
  var __EquidistantCylindricalProjection_rc = dart.privateName(eqc, "_#EquidistantCylindricalProjection#rc");
  eqc.EquidistantCylindricalProjection = class EquidistantCylindricalProjection extends projection.Projection {
    get long0() {
      let t6;
      t6 = this[__EquidistantCylindricalProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__EquidistantCylindricalProjection_long0] = long0$35param;
    }
    get x0() {
      let t6;
      t6 = this[__EquidistantCylindricalProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__EquidistantCylindricalProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__EquidistantCylindricalProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__EquidistantCylindricalProjection_y0] = y0$35param;
    }
    get lat_ts() {
      let t6;
      t6 = this[__EquidistantCylindricalProjection_lat_ts];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat_ts")) : t6;
    }
    set lat_ts(lat_ts$35param) {
      this[__EquidistantCylindricalProjection_lat_ts] = lat_ts$35param;
    }
    get lat0() {
      let t6;
      t6 = this[__EquidistantCylindricalProjection_lat0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat0")) : t6;
    }
    set lat0(lat0$35param) {
      this[__EquidistantCylindricalProjection_lat0] = lat0$35param;
    }
    get rc() {
      let t6;
      t6 = this[__EquidistantCylindricalProjection_rc];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("rc")) : t6;
    }
    set rc(rc$35param) {
      this[__EquidistantCylindricalProjection_rc] = rc$35param;
    }
    static ['_#init#tearOff'](params) {
      return new eqc.EquidistantCylindricalProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let dlon = utils.adjust_lon(lon - this.long0);
      let dlat = utils.adjust_lat(lat - this.lat0);
      p.x = this.x0 + this.a * dlon * this.rc;
      p.y = this.y0 + this.a * dlat;
      return p;
    }
    inverse(p) {
      let x = p.x;
      let y = p.y;
      p.x = utils.adjust_lon(this.long0 + (x - this.x0) / (this.a * this.rc));
      p.y = utils.adjust_lat(this.lat0 + (y - this.y0) / this.a);
      return p;
    }
  };
  (eqc.EquidistantCylindricalProjection.init = function(params) {
    let t6, t6$, t6$0, t6$1;
    this[__EquidistantCylindricalProjection_long0] = null;
    this[__EquidistantCylindricalProjection_x0] = null;
    this[__EquidistantCylindricalProjection_y0] = null;
    this[__EquidistantCylindricalProjection_lat_ts] = null;
    this[__EquidistantCylindricalProjection_lat0] = null;
    this[__EquidistantCylindricalProjection_rc] = null;
    eqc.EquidistantCylindricalProjection.__proto__.init.call(this, params);
    this.long0 = params.long0;
    this.x0 = (t6 = params.x0, t6 == null ? 0.0 : t6);
    this.y0 = (t6$ = params.y0, t6$ == null ? 0.0 : t6$);
    this.lat0 = (t6$0 = params.lat0, t6$0 == null ? 0.0 : t6$0);
    if (this.long0[$isNaN]) {
      this.long0 = 0.0;
    }
    this.lat_ts = (t6$1 = params.lat_ts, t6$1 == null ? 0.0 : t6$1);
    this.rc = math.cos(this.lat_ts);
  }).prototype = eqc.EquidistantCylindricalProjection.prototype;
  dart.addTypeTests(eqc.EquidistantCylindricalProjection);
  dart.addTypeCaches(eqc.EquidistantCylindricalProjection);
  dart.setMethodSignature(eqc.EquidistantCylindricalProjection, () => ({
    __proto__: dart.getMethods(eqc.EquidistantCylindricalProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(eqc.EquidistantCylindricalProjection, () => ({
    __proto__: dart.getGetters(eqc.EquidistantCylindricalProjection.__proto__),
    long0: core.double,
    x0: core.double,
    y0: core.double,
    lat_ts: core.double,
    lat0: core.double,
    rc: core.double
  }));
  dart.setSetterSignature(eqc.EquidistantCylindricalProjection, () => ({
    __proto__: dart.getSetters(eqc.EquidistantCylindricalProjection.__proto__),
    long0: core.double,
    x0: core.double,
    y0: core.double,
    lat_ts: core.double,
    lat0: core.double,
    rc: core.double
  }));
  dart.setLibraryUri(eqc.EquidistantCylindricalProjection, I[28]);
  dart.setFieldSignature(eqc.EquidistantCylindricalProjection, () => ({
    __proto__: dart.getFields(eqc.EquidistantCylindricalProjection.__proto__),
    [__EquidistantCylindricalProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantCylindricalProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantCylindricalProjection_y0]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantCylindricalProjection_lat_ts]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantCylindricalProjection_lat0]: dart.fieldType(dart.nullable(core.double)),
    [__EquidistantCylindricalProjection_rc]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(eqc.EquidistantCylindricalProjection, () => ['names']);
  dart.defineLazy(eqc.EquidistantCylindricalProjection, {
    /*eqc.EquidistantCylindricalProjection.names*/get names() {
      return T.JSArrayOfString().of(["Equirectangular", "Equidistant_Cylindrical", "eqc"]);
    }
  }, false);
  var __CentralCylindricalProjection_long0 = dart.privateName(cea, "_#CentralCylindricalProjection#long0");
  var __CentralCylindricalProjection_x0 = dart.privateName(cea, "_#CentralCylindricalProjection#x0");
  var __CentralCylindricalProjection_y0 = dart.privateName(cea, "_#CentralCylindricalProjection#y0");
  var __CentralCylindricalProjection_lat_ts = dart.privateName(cea, "_#CentralCylindricalProjection#lat_ts");
  cea.CentralCylindricalProjection = class CentralCylindricalProjection extends projection.Projection {
    get long0() {
      let t6;
      t6 = this[__CentralCylindricalProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__CentralCylindricalProjection_long0] = long0$35param;
    }
    get x0() {
      let t6;
      t6 = this[__CentralCylindricalProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__CentralCylindricalProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__CentralCylindricalProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__CentralCylindricalProjection_y0] = y0$35param;
    }
    get lat_ts() {
      let t6;
      t6 = this[__CentralCylindricalProjection_lat_ts];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat_ts")) : t6;
    }
    set lat_ts(lat_ts$35param) {
      this[__CentralCylindricalProjection_lat_ts] = lat_ts$35param;
    }
    static ['_#init#tearOff'](params) {
      return new cea.CentralCylindricalProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let x = null;
      let y = null;
      let dlon = utils.adjust_lon(lon - this.long0);
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        x = this.x0 + this.a * dlon * math.cos(this.lat_ts);
        y = this.y0 + this.a * math.sin(lat) / math.cos(this.lat_ts);
      } else {
        let qs = utils.qsfnz(this.e, math.sin(lat));
        x = this.x0 + this.a * this.k0 * dlon;
        y = this.y0 + this.a * qs * 0.5 / this.k0;
      }
      p.x = core.double.as(x);
      p.y = core.double.as(y);
      return p;
    }
    inverse(p) {
      let t6, t6$;
      t6 = p;
      t6.x = t6.x - this.x0;
      t6$ = p;
      t6$.y = t6$.y - this.y0;
      let lon = null;
      let lat = null;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        lon = utils.adjust_lon(this.long0 + p.x / this.a / math.cos(this.lat_ts));
        lat = math.asin(p.y / this.a * math.cos(this.lat_ts));
      } else {
        lat = utils.iqsfnz(this.e, 2 * p.y * this.k0 / this.a);
        lon = utils.adjust_lon(this.long0 + p.x / (this.a * this.k0));
      }
      p.x = core.double.as(lon);
      p.y = core.double.as(lat);
      return p;
    }
  };
  (cea.CentralCylindricalProjection.init = function(params) {
    this[__CentralCylindricalProjection_long0] = null;
    this[__CentralCylindricalProjection_x0] = null;
    this[__CentralCylindricalProjection_y0] = null;
    this[__CentralCylindricalProjection_lat_ts] = null;
    cea.CentralCylindricalProjection.__proto__.init.call(this, params);
    this.long0 = params.long0;
    this.x0 = dart.nullCheck(params.x0);
    this.y0 = dart.nullCheck(params.y0);
    this.lat_ts = dart.nullCheck(params.lat_ts);
    if (this.sphere == null || !dart.nullCheck(this.sphere)) {
      this.k0 = utils.msfnz(this.e, math.sin(this.lat_ts), math.cos(this.lat_ts));
    }
  }).prototype = cea.CentralCylindricalProjection.prototype;
  dart.addTypeTests(cea.CentralCylindricalProjection);
  dart.addTypeCaches(cea.CentralCylindricalProjection);
  dart.setMethodSignature(cea.CentralCylindricalProjection, () => ({
    __proto__: dart.getMethods(cea.CentralCylindricalProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(cea.CentralCylindricalProjection, () => ({
    __proto__: dart.getGetters(cea.CentralCylindricalProjection.__proto__),
    long0: core.double,
    x0: core.double,
    y0: core.double,
    lat_ts: core.double
  }));
  dart.setSetterSignature(cea.CentralCylindricalProjection, () => ({
    __proto__: dart.getSetters(cea.CentralCylindricalProjection.__proto__),
    long0: core.double,
    x0: core.double,
    y0: core.double,
    lat_ts: core.double
  }));
  dart.setLibraryUri(cea.CentralCylindricalProjection, I[29]);
  dart.setFieldSignature(cea.CentralCylindricalProjection, () => ({
    __proto__: dart.getFields(cea.CentralCylindricalProjection.__proto__),
    [__CentralCylindricalProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__CentralCylindricalProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__CentralCylindricalProjection_y0]: dart.fieldType(dart.nullable(core.double)),
    [__CentralCylindricalProjection_lat_ts]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(cea.CentralCylindricalProjection, () => ['names']);
  dart.defineLazy(cea.CentralCylindricalProjection, {
    /*cea.CentralCylindricalProjection.names*/get names() {
      return T.JSArrayOfString().of(["cea"]);
    }
  }, false);
  var __CassiniProjection_e0 = dart.privateName(cass, "_#CassiniProjection#e0");
  var __CassiniProjection_e1 = dart.privateName(cass, "_#CassiniProjection#e1");
  var __CassiniProjection_e2 = dart.privateName(cass, "_#CassiniProjection#e2");
  var __CassiniProjection_e3 = dart.privateName(cass, "_#CassiniProjection#e3");
  var __CassiniProjection_ml0 = dart.privateName(cass, "_#CassiniProjection#ml0");
  var __CassiniProjection_lat0 = dart.privateName(cass, "_#CassiniProjection#lat0");
  var __CassiniProjection_long0 = dart.privateName(cass, "_#CassiniProjection#long0");
  var __CassiniProjection_x0 = dart.privateName(cass, "_#CassiniProjection#x0");
  var __CassiniProjection_y0 = dart.privateName(cass, "_#CassiniProjection#y0");
  cass.CassiniProjection = class CassiniProjection extends projection.Projection {
    get e0() {
      let t6;
      t6 = this[__CassiniProjection_e0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e0")) : t6;
    }
    set e0(e0$35param) {
      this[__CassiniProjection_e0] = e0$35param;
    }
    get e1() {
      let t6;
      t6 = this[__CassiniProjection_e1];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e1")) : t6;
    }
    set e1(e1$35param) {
      this[__CassiniProjection_e1] = e1$35param;
    }
    get e2() {
      let t6;
      t6 = this[__CassiniProjection_e2];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e2")) : t6;
    }
    set e2(e2$35param) {
      this[__CassiniProjection_e2] = e2$35param;
    }
    get e3() {
      let t6;
      t6 = this[__CassiniProjection_e3];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e3")) : t6;
    }
    set e3(e3$35param) {
      this[__CassiniProjection_e3] = e3$35param;
    }
    get ml0() {
      let t6;
      t6 = this[__CassiniProjection_ml0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("ml0")) : t6;
    }
    set ml0(ml0$35param) {
      this[__CassiniProjection_ml0] = ml0$35param;
    }
    get lat0() {
      let t6;
      t6 = this[__CassiniProjection_lat0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat0")) : t6;
    }
    set lat0(lat0$35param) {
      this[__CassiniProjection_lat0] = lat0$35param;
    }
    get long0() {
      let t6;
      t6 = this[__CassiniProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__CassiniProjection_long0] = long0$35param;
    }
    get x0() {
      let t6;
      t6 = this[__CassiniProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__CassiniProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__CassiniProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__CassiniProjection_y0] = y0$35param;
    }
    static ['_#init#tearOff'](params) {
      return new cass.CassiniProjection.init(params);
    }
    forward(p) {
      let x = null;
      let y = null;
      let lam = p.x;
      let phi = p.y;
      lam = utils.adjust_lon(lam - this.long0);
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        x = this.a * math.asin(math.cos(phi) * math.sin(lam));
        y = this.a * (math.atan2(math.tan(phi), math.cos(lam)) - this.lat0);
      } else {
        let sinphi = math.sin(phi);
        let cosphi = math.cos(phi);
        let nl = utils.gN(this.a, this.e, sinphi);
        let tl = math.tan(phi) * math.tan(phi);
        let al = lam * math.cos(phi);
        let asq = al * al;
        let cl = this.es * cosphi * cosphi / (1 - this.es);
        let ml = this.a * utils.mlfn(this.e0, this.e1, this.e2, this.e3, phi);
        x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
        y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);
      }
      p.x = core.double.as(dart.dsend(x, '+', [this.x0]));
      p.y = core.double.as(dart.dsend(y, '+', [this.y0]));
      return p;
    }
    inverse(p) {
      let t6, t6$, t6$0;
      t6 = p;
      t6.x = t6.x - this.x0;
      t6$ = p;
      t6$.y = t6$.y - this.y0;
      let x = p.x / this.a;
      let y = p.y / this.a;
      let phi = null;
      let lam = null;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        let dd = y + this.lat0;
        phi = math.asin(math.sin(dd) * math.cos(x));
        lam = math.atan2(math.tan(x), math.cos(dd));
      } else {
        let ml1 = this.ml0 / this.a + y;
        let phi1 = utils.imlfn(ml1, this.e0, this.e1, this.e2, this.e3);
        if ((phi1[$abs]() - 1.5707963267948966)[$abs]() <= 1e-10) {
          p.x = this.long0;
          p.y = 1.5707963267948966;
          if (y < 0) {
            t6$0 = p;
            t6$0.y = t6$0.y * -1;
          }
          return p;
        }
        let nl1 = utils.gN(this.a, this.e, math.sin(phi1));
        let rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
        let tl1 = math.pow(math.tan(phi1), 2);
        let dl = x * this.a / nl1;
        let dsq = dl * dl;
        phi = phi1 - nl1 * math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
        lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / math.cos(phi1);
      }
      p.x = utils.adjust_lon(core.double.as(dart.dsend(lam, '+', [this.long0])));
      p.y = utils.adjust_lat(core.double.as(phi));
      return p;
    }
  };
  (cass.CassiniProjection.init = function(params) {
    this[__CassiniProjection_e0] = null;
    this[__CassiniProjection_e1] = null;
    this[__CassiniProjection_e2] = null;
    this[__CassiniProjection_e3] = null;
    this[__CassiniProjection_ml0] = null;
    this[__CassiniProjection_lat0] = null;
    this[__CassiniProjection_long0] = null;
    this[__CassiniProjection_x0] = null;
    this[__CassiniProjection_y0] = null;
    cass.CassiniProjection.__proto__.init.call(this, params);
    this.lat0 = dart.nullCheck(params.lat0);
    this.long0 = params.long0;
    this.x0 = dart.nullCheck(params.x0);
    this.y0 = dart.nullCheck(params.y0);
    if (this.sphere == null || this.sphere != null && !dart.nullCheck(this.sphere)) {
      this.e0 = utils.e0fn(this.es);
      this.e1 = utils.e1fn(this.es);
      this.e2 = utils.e2fn(this.es);
      this.e3 = utils.e3fn(this.es);
      this.ml0 = this.a * utils.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
    }
  }).prototype = cass.CassiniProjection.prototype;
  dart.addTypeTests(cass.CassiniProjection);
  dart.addTypeCaches(cass.CassiniProjection);
  dart.setMethodSignature(cass.CassiniProjection, () => ({
    __proto__: dart.getMethods(cass.CassiniProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(cass.CassiniProjection, () => ({
    __proto__: dart.getGetters(cass.CassiniProjection.__proto__),
    e0: core.double,
    e1: core.double,
    e2: core.double,
    e3: core.double,
    ml0: core.double,
    lat0: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setSetterSignature(cass.CassiniProjection, () => ({
    __proto__: dart.getSetters(cass.CassiniProjection.__proto__),
    e0: core.double,
    e1: core.double,
    e2: core.double,
    e3: core.double,
    ml0: core.double,
    lat0: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setLibraryUri(cass.CassiniProjection, I[30]);
  dart.setFieldSignature(cass.CassiniProjection, () => ({
    __proto__: dart.getFields(cass.CassiniProjection.__proto__),
    [__CassiniProjection_e0]: dart.fieldType(dart.nullable(core.double)),
    [__CassiniProjection_e1]: dart.fieldType(dart.nullable(core.double)),
    [__CassiniProjection_e2]: dart.fieldType(dart.nullable(core.double)),
    [__CassiniProjection_e3]: dart.fieldType(dart.nullable(core.double)),
    [__CassiniProjection_ml0]: dart.fieldType(dart.nullable(core.double)),
    [__CassiniProjection_lat0]: dart.fieldType(dart.nullable(core.double)),
    [__CassiniProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__CassiniProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__CassiniProjection_y0]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(cass.CassiniProjection, () => ['names']);
  dart.defineLazy(cass.CassiniProjection, {
    /*cass.CassiniProjection.names*/get names() {
      return T.JSArrayOfString().of(["Cassini", "Cassini_Soldner", "cass"]);
    }
  }, false);
  var __AzimuthalEquidistantProjection_sin_p12 = dart.privateName(aeqd, "_#AzimuthalEquidistantProjection#sin_p12");
  var __AzimuthalEquidistantProjection_cos_p12 = dart.privateName(aeqd, "_#AzimuthalEquidistantProjection#cos_p12");
  var __AzimuthalEquidistantProjection_lat0 = dart.privateName(aeqd, "_#AzimuthalEquidistantProjection#lat0");
  var __AzimuthalEquidistantProjection_long0 = dart.privateName(aeqd, "_#AzimuthalEquidistantProjection#long0");
  var __AzimuthalEquidistantProjection_x0 = dart.privateName(aeqd, "_#AzimuthalEquidistantProjection#x0");
  var __AzimuthalEquidistantProjection_y0 = dart.privateName(aeqd, "_#AzimuthalEquidistantProjection#y0");
  aeqd.AzimuthalEquidistantProjection = class AzimuthalEquidistantProjection extends projection.Projection {
    get sin_p12() {
      let t6;
      t6 = this[__AzimuthalEquidistantProjection_sin_p12];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("sin_p12")) : t6;
    }
    set sin_p12(sin_p12$35param) {
      this[__AzimuthalEquidistantProjection_sin_p12] = sin_p12$35param;
    }
    get cos_p12() {
      let t6;
      t6 = this[__AzimuthalEquidistantProjection_cos_p12];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("cos_p12")) : t6;
    }
    set cos_p12(cos_p12$35param) {
      this[__AzimuthalEquidistantProjection_cos_p12] = cos_p12$35param;
    }
    get lat0() {
      let t6;
      t6 = this[__AzimuthalEquidistantProjection_lat0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("lat0")) : t6;
    }
    set lat0(lat0$35param) {
      this[__AzimuthalEquidistantProjection_lat0] = lat0$35param;
    }
    get long0() {
      let t6;
      t6 = this[__AzimuthalEquidistantProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__AzimuthalEquidistantProjection_long0] = long0$35param;
    }
    get x0() {
      let t6;
      t6 = this[__AzimuthalEquidistantProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__AzimuthalEquidistantProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__AzimuthalEquidistantProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__AzimuthalEquidistantProjection_y0] = y0$35param;
    }
    static ['_#init#tearOff'](params) {
      return new aeqd.AzimuthalEquidistantProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let sinphi = math.sin(p.y);
      let cosphi = math.cos(p.y);
      let dlon = utils.adjust_lon(lon - this.long0);
      let e0 = null;
      let e1 = null;
      let e2 = null;
      let e3 = null;
      let Mlp = null;
      let Ml = null;
      let tanphi = null;
      let Nl1 = null;
      let Nl = null;
      let psi = null;
      let Az = null;
      let G = null;
      let H = null;
      let GH = null;
      let Hs = null;
      let c = null;
      let kp = null;
      let cos_c = null;
      let s = null;
      let s2 = null;
      let s3 = null;
      let s4 = null;
      let s5 = null;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        if ((this.sin_p12 - 1)[$abs]() <= 1e-10) {
          p.x = this.x0 + this.a * (1.5707963267948966 - lat) * math.sin(dlon);
          p.y = this.y0 - this.a * (1.5707963267948966 - lat) * math.cos(dlon);
          return p;
        } else if ((this.sin_p12 + 1)[$abs]() <= 1e-10) {
          p.x = this.x0 + this.a * (1.5707963267948966 + lat) * math.sin(dlon);
          p.y = this.y0 + this.a * (1.5707963267948966 + lat) * math.cos(dlon);
          return p;
        } else {
          cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * math.cos(dlon);
          c = math.acos(core.num.as(cos_c));
          kp = dart.dsend(c, '/', [math.sin(core.num.as(c))]);
          p.x = this.x0 + this.a * core.num.as(kp) * cosphi * math.sin(dlon);
          p.y = this.y0 + this.a * core.num.as(kp) * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * math.cos(dlon));
          return p;
        }
      } else {
        e0 = utils.e0fn(this.es);
        e1 = utils.e1fn(this.es);
        e2 = utils.e2fn(this.es);
        e3 = utils.e3fn(this.es);
        if ((this.sin_p12 - 1)[$abs]() <= 1e-10) {
          Mlp = this.a * utils.mlfn(core.double.as(e0), core.double.as(e1), core.double.as(e2), core.double.as(e3), 1.5707963267948966);
          Ml = this.a * utils.mlfn(core.double.as(e0), core.double.as(e1), core.double.as(e2), core.double.as(e3), lat);
          p.x = this.x0 + core.num.as(dart.dsend(dart.dsend(Mlp, '-', [Ml]), '*', [math.sin(dlon)]));
          p.y = this.y0 - core.num.as(dart.dsend(dart.dsend(Mlp, '-', [Ml]), '*', [math.cos(dlon)]));
          return p;
        } else if ((this.sin_p12 + 1)[$abs]() <= 1e-10) {
          Mlp = this.a * utils.mlfn(core.double.as(e0), core.double.as(e1), core.double.as(e2), core.double.as(e3), 1.5707963267948966);
          Ml = this.a * utils.mlfn(core.double.as(e0), core.double.as(e1), core.double.as(e2), core.double.as(e3), lat);
          p.x = this.x0 + core.num.as(dart.dsend(dart.dsend(Mlp, '+', [Ml]), '*', [math.sin(dlon)]));
          p.y = this.y0 + core.num.as(dart.dsend(dart.dsend(Mlp, '+', [Ml]), '*', [math.cos(dlon)]));
          return p;
        } else {
          tanphi = sinphi / cosphi;
          Nl1 = utils.gN(this.a, this.e, this.sin_p12);
          Nl = utils.gN(this.a, this.e, sinphi);
          psi = math.atan((1 - this.es) * core.num.as(tanphi) + this.es * core.num.as(Nl1) * this.sin_p12 / core.num.as(dart.dsend(Nl, '*', [cosphi])));
          Az = math.atan2(math.sin(dlon), this.cos_p12 * math.tan(core.num.as(psi)) - this.sin_p12 * math.cos(dlon));
          if (dart.equals(Az, 0)) {
            s = math.asin(this.cos_p12 * math.sin(core.num.as(psi)) - this.sin_p12 * math.cos(core.num.as(psi)));
          } else if (dart.dtest(dart.dsend(dart.dsend(dart.dsend(dart.dsend(Az, 'abs', []), '-', [3.141592653589793]), 'abs', []), '<=', [1e-10]))) {
            s = -math.asin(this.cos_p12 * math.sin(core.num.as(psi)) - this.sin_p12 * math.cos(core.num.as(psi)));
          } else {
            s = math.asin(math.sin(dlon) * math.cos(core.num.as(psi)) / math.sin(core.num.as(Az)));
          }
          G = this.e * this.sin_p12 / math.sqrt(1 - this.es);
          H = this.e * this.cos_p12 * math.cos(core.num.as(Az)) / math.sqrt(1 - this.es);
          GH = dart.dsend(G, '*', [H]);
          Hs = dart.dsend(H, '*', [H]);
          s2 = dart.dsend(s, '*', [s]);
          s3 = dart.dsend(s2, '*', [s]);
          s4 = dart.dsend(s3, '*', [s]);
          s5 = dart.dsend(s4, '*', [s]);
          c = dart.dsend(dart.dsend(Nl1, '*', [s]), '*', [1 - core.num.as(dart.dsend(dart.dsend(dart.dsend(s2, '*', [Hs]), '*', [1 - core.num.as(Hs)]), '/', [6])) + core.num.as(dart.dsend(dart.dsend(dart.dsend(s3, '/', [8]), '*', [GH]), '*', [1 - 2 * core.num.as(Hs)])) + core.num.as(dart.dsend(dart.dsend(s4, '/', [120]), '*', [dart.dsend(dart.dsend(Hs, '*', [4 - 7 * core.num.as(Hs)]), '-', [3 * core.num.as(G) * core.num.as(G) * (1 - 7 * core.num.as(Hs))])])) - core.num.as(dart.dsend(dart.dsend(s5, '/', [48]), '*', [GH]))]);
          p.x = this.x0 + core.num.as(dart.dsend(c, '*', [math.sin(core.num.as(Az))]));
          p.y = this.y0 + core.num.as(dart.dsend(c, '*', [math.cos(core.num.as(Az))]));
          return p;
        }
      }
    }
    inverse(p) {
      let t6, t6$;
      t6 = p;
      t6.x = t6.x - this.x0;
      t6$ = p;
      t6$.y = t6$.y - this.y0;
      let rh = null;
      let z = null;
      let sinz = null;
      let cosz = null;
      let lon = null;
      let lat = null;
      let con = null;
      let e0 = null;
      let e1 = null;
      let e2 = null;
      let e3 = null;
      let Mlp = null;
      let M = null;
      let N1 = null;
      let psi = null;
      let Az = null;
      let cosAz = null;
      let tmp = null;
      let A = null;
      let B = null;
      let D = null;
      let Ee = null;
      let F = null;
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        rh = math.sqrt(p.x * p.x + p.y * p.y);
        if (dart.dtest(dart.dsend(rh, '>', [2 * 1.5707963267948966 * this.a]))) {
          return p;
        }
        z = dart.dsend(rh, '/', [this.a]);
        sinz = math.sin(core.num.as(z));
        cosz = math.cos(core.num.as(z));
        lon = this.long0;
        if (dart.dtest(dart.dsend(dart.dsend(rh, 'abs', []), '<=', [1e-10]))) {
          lat = this.lat0;
        } else {
          lat = utils.asinz(core.double.as(dart.dsend(dart.dsend(cosz, '*', [this.sin_p12]), '+', [p.y * core.num.as(sinz) * this.cos_p12 / core.num.as(rh)])));
          con = this.lat0[$abs]() - 1.5707963267948966;
          if (dart.dtest(dart.dsend(dart.dsend(con, 'abs', []), '<=', [1e-10]))) {
            if (this.lat0 >= 0) {
              lon = utils.adjust_lon(this.long0 + math.atan2(p.x, -p.y));
            } else {
              lon = utils.adjust_lon(this.long0 - math.atan2(-p.x, p.y));
            }
          } else {
            lon = utils.adjust_lon(this.long0 + math.atan2(p.x * core.num.as(sinz), core.num.as(dart.dsend(dart.dsend(dart.dsend(rh, '*', [this.cos_p12]), '*', [cosz]), '-', [p.y * this.sin_p12 * core.num.as(sinz)]))));
          }
        }
        p.x = core.double.as(lon);
        p.y = core.double.as(lat);
        return p;
      } else {
        e0 = utils.e0fn(this.es);
        e1 = utils.e1fn(this.es);
        e2 = utils.e2fn(this.es);
        e3 = utils.e3fn(this.es);
        if ((this.sin_p12 - 1)[$abs]() <= 1e-10) {
          Mlp = this.a * utils.mlfn(core.double.as(e0), core.double.as(e1), core.double.as(e2), core.double.as(e3), 1.5707963267948966);
          rh = math.sqrt(p.x * p.x + p.y * p.y);
          M = dart.dsend(Mlp, '-', [rh]);
          lat = utils.imlfn(core.double.as(dart.dsend(M, '/', [this.a])), core.double.as(e0), core.double.as(e1), core.double.as(e2), core.double.as(e3));
          lon = utils.adjust_lon(this.long0 + math.atan2(p.x, -1 * p.y));
          p.x = core.double.as(lon);
          p.y = core.double.as(lat);
          return p;
        } else if ((this.sin_p12 + 1)[$abs]() <= 1e-10) {
          Mlp = this.a * utils.mlfn(core.double.as(e0), core.double.as(e1), core.double.as(e2), core.double.as(e3), 1.5707963267948966);
          rh = math.sqrt(p.x * p.x + p.y * p.y);
          M = dart.dsend(rh, '-', [Mlp]);
          lat = utils.imlfn(core.double.as(dart.dsend(M, '/', [this.a])), core.double.as(e0), core.double.as(e1), core.double.as(e2), core.double.as(e3));
          lon = utils.adjust_lon(this.long0 + math.atan2(p.x, p.y));
          p.x = core.double.as(lon);
          p.y = core.double.as(lat);
          return p;
        } else {
          rh = math.sqrt(p.x * p.x + p.y * p.y);
          Az = math.atan2(p.x, p.y);
          N1 = utils.gN(this.a, this.e, this.sin_p12);
          cosAz = math.cos(core.num.as(Az));
          tmp = this.e * this.cos_p12 * core.num.as(cosAz);
          A = dart.dsend(dart.dsend(dart.dsend(tmp, '_negate', []), '*', [tmp]), '/', [1 - this.es]);
          B = 3 * this.es * (1 - core.num.as(A)) * this.sin_p12 * this.cos_p12 * core.num.as(cosAz) / (1 - this.es);
          D = dart.dsend(rh, '/', [N1]);
          Ee = dart.dsend(dart.dsend(D, '-', [dart.dsend(dart.dsend(dart.dsend(A, '*', [1 + core.num.as(A)]), '*', [math.pow(core.num.as(D), 3)]), '/', [6])]), '-', [dart.dsend(dart.dsend(dart.dsend(B, '*', [1 + 3 * core.num.as(A)]), '*', [math.pow(core.num.as(D), 4)]), '/', [24])]);
          F = 1 - core.num.as(dart.dsend(dart.dsend(dart.dsend(A, '*', [Ee]), '*', [Ee]), '/', [2])) - core.num.as(dart.dsend(dart.dsend(dart.dsend(dart.dsend(D, '*', [Ee]), '*', [Ee]), '*', [Ee]), '/', [6]));
          psi = math.asin(this.sin_p12 * math.cos(core.num.as(Ee)) + this.cos_p12 * math.sin(core.num.as(Ee)) * core.num.as(cosAz));
          lon = utils.adjust_lon(this.long0 + math.asin(math.sin(core.num.as(Az)) * math.sin(core.num.as(Ee)) / math.cos(core.num.as(psi))));
          lat = math.atan((1 - this.es * core.num.as(F) * this.sin_p12 / math.sin(core.num.as(psi))) * math.tan(core.num.as(psi)) / (1 - this.es));
          p.x = core.double.as(lon);
          p.y = core.double.as(lat);
          return p;
        }
      }
    }
  };
  (aeqd.AzimuthalEquidistantProjection.init = function(params) {
    this[__AzimuthalEquidistantProjection_sin_p12] = null;
    this[__AzimuthalEquidistantProjection_cos_p12] = null;
    this[__AzimuthalEquidistantProjection_lat0] = null;
    this[__AzimuthalEquidistantProjection_long0] = null;
    this[__AzimuthalEquidistantProjection_x0] = null;
    this[__AzimuthalEquidistantProjection_y0] = null;
    aeqd.AzimuthalEquidistantProjection.__proto__.init.call(this, params);
    this.lat0 = dart.nullCheck(params.lat0);
    this.long0 = params.long0;
    this.x0 = dart.nullCheck(params.x0);
    this.y0 = dart.nullCheck(params.y0);
    this.sin_p12 = math.sin(this.lat0);
    this.cos_p12 = math.cos(this.lat0);
  }).prototype = aeqd.AzimuthalEquidistantProjection.prototype;
  dart.addTypeTests(aeqd.AzimuthalEquidistantProjection);
  dart.addTypeCaches(aeqd.AzimuthalEquidistantProjection);
  dart.setMethodSignature(aeqd.AzimuthalEquidistantProjection, () => ({
    __proto__: dart.getMethods(aeqd.AzimuthalEquidistantProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point])
  }));
  dart.setGetterSignature(aeqd.AzimuthalEquidistantProjection, () => ({
    __proto__: dart.getGetters(aeqd.AzimuthalEquidistantProjection.__proto__),
    sin_p12: core.double,
    cos_p12: core.double,
    lat0: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setSetterSignature(aeqd.AzimuthalEquidistantProjection, () => ({
    __proto__: dart.getSetters(aeqd.AzimuthalEquidistantProjection.__proto__),
    sin_p12: core.double,
    cos_p12: core.double,
    lat0: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setLibraryUri(aeqd.AzimuthalEquidistantProjection, I[31]);
  dart.setFieldSignature(aeqd.AzimuthalEquidistantProjection, () => ({
    __proto__: dart.getFields(aeqd.AzimuthalEquidistantProjection.__proto__),
    [__AzimuthalEquidistantProjection_sin_p12]: dart.fieldType(dart.nullable(core.double)),
    [__AzimuthalEquidistantProjection_cos_p12]: dart.fieldType(dart.nullable(core.double)),
    [__AzimuthalEquidistantProjection_lat0]: dart.fieldType(dart.nullable(core.double)),
    [__AzimuthalEquidistantProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__AzimuthalEquidistantProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__AzimuthalEquidistantProjection_y0]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(aeqd.AzimuthalEquidistantProjection, () => ['names']);
  dart.defineLazy(aeqd.AzimuthalEquidistantProjection, {
    /*aeqd.AzimuthalEquidistantProjection.names*/get names() {
      return T.JSArrayOfString().of(["Azimuthal_Equidistant", "aeqd"]);
    }
  }, false);
  var __AlbersProjection_e3 = dart.privateName(aea, "_#AlbersProjection#e3");
  var __AlbersProjection_ns0 = dart.privateName(aea, "_#AlbersProjection#ns0");
  var __AlbersProjection_c = dart.privateName(aea, "_#AlbersProjection#c");
  var __AlbersProjection_rh = dart.privateName(aea, "_#AlbersProjection#rh");
  var __AlbersProjection_long0 = dart.privateName(aea, "_#AlbersProjection#long0");
  var __AlbersProjection_x0 = dart.privateName(aea, "_#AlbersProjection#x0");
  var __AlbersProjection_y0 = dart.privateName(aea, "_#AlbersProjection#y0");
  var _phi1z = dart.privateName(aea, "_phi1z");
  aea.AlbersProjection = class AlbersProjection extends projection.Projection {
    get e3() {
      let t6;
      t6 = this[__AlbersProjection_e3];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("e3")) : t6;
    }
    set e3(e3$35param) {
      this[__AlbersProjection_e3] = e3$35param;
    }
    get ns0() {
      let t6;
      t6 = this[__AlbersProjection_ns0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("ns0")) : t6;
    }
    set ns0(ns0$35param) {
      this[__AlbersProjection_ns0] = ns0$35param;
    }
    get c() {
      let t6;
      t6 = this[__AlbersProjection_c];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("c")) : t6;
    }
    set c(c$35param) {
      this[__AlbersProjection_c] = c$35param;
    }
    get rh() {
      let t6;
      t6 = this[__AlbersProjection_rh];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("rh")) : t6;
    }
    set rh(rh$35param) {
      this[__AlbersProjection_rh] = rh$35param;
    }
    get long0() {
      let t6;
      t6 = this[__AlbersProjection_long0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("long0")) : t6;
    }
    set long0(long0$35param) {
      this[__AlbersProjection_long0] = long0$35param;
    }
    get x0() {
      let t6;
      t6 = this[__AlbersProjection_x0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("x0")) : t6;
    }
    set x0(x0$35param) {
      this[__AlbersProjection_x0] = x0$35param;
    }
    get y0() {
      let t6;
      t6 = this[__AlbersProjection_y0];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("y0")) : t6;
    }
    set y0(y0$35param) {
      this[__AlbersProjection_y0] = y0$35param;
    }
    static ['_#init#tearOff'](params) {
      return new aea.AlbersProjection.init(params);
    }
    forward(p) {
      let lon = p.x;
      let lat = p.y;
      let sin_phi = math.sin(lat);
      let qs = utils.qsfnz(this.e3, sin_phi);
      let rh1 = this.a * math.sqrt(this.c - this.ns0 * qs) / this.ns0;
      let theta = this.ns0 * utils.adjust_lon(lon - this.long0);
      let x = rh1 * math.sin(theta) + this.x0;
      let y = this.rh - rh1 * math.cos(theta) + this.y0;
      p.x = x;
      p.y = y;
      return p;
    }
    inverse(p) {
      let t6;
      let rh1 = null;
      let qs = null;
      let con = null;
      let theta = null;
      let lon = null;
      let lat = null;
      t6 = p;
      t6.x = t6.x - this.x0;
      p.y = this.rh - p.y + this.y0;
      if (this.ns0 >= 0) {
        rh1 = math.sqrt(p.x * p.x + p.y * p.y);
        con = 1;
      } else {
        rh1 = -math.sqrt(p.x * p.x + p.y * p.y);
        con = -1;
      }
      theta = 0;
      if (!dart.equals(rh1, 0)) {
        theta = math.atan2(core.num.as(dart.dsend(con, '*', [p.x])), core.num.as(dart.dsend(con, '*', [p.y])));
      }
      con = dart.dsend(dart.dsend(rh1, '*', [this.ns0]), '/', [this.a]);
      if (this.sphere != null && dart.nullCheck(this.sphere)) {
        lat = math.asin((this.c - core.num.as(dart.dsend(con, '*', [con]))) / (2 * this.ns0));
      } else {
        qs = (this.c - core.num.as(dart.dsend(con, '*', [con]))) / this.ns0;
        lat = this[_phi1z](this.e3, qs);
      }
      lon = utils.adjust_lon(core.double.as(dart.dsend(dart.dsend(theta, '/', [this.ns0]), '+', [this.long0])));
      p.x = core.double.as(lon);
      p.y = core.double.as(lat);
      return p;
    }
    [_phi1z](eccent, qs) {
      let sinphi = null;
      let cosphi = null;
      let con = null;
      let com = null;
      let dphi = null;
      let phi = utils.asinz(0.5 * core.num.as(qs));
      if (dart.dtest(dart.dsend(eccent, '<', [1e-10]))) {
        return phi;
      }
      let eccnts = dart.dsend(eccent, '*', [eccent]);
      for (let i = 1; i <= 25; i = i + 1) {
        sinphi = math.sin(phi);
        cosphi = math.cos(phi);
        con = dart.dsend(eccent, '*', [sinphi]);
        com = 1 - core.num.as(dart.dsend(con, '*', [con]));
        dphi = 0.5 * core.num.as(com) * core.num.as(com) / core.num.as(cosphi) * core.num.as(dart.dsend(dart.dsend(dart.dsend(qs, '/', [1 - core.num.as(eccnts)]), '-', [dart.dsend(sinphi, '/', [com])]), '+', [0.5 / core.num.as(eccent) * math.log((1 - core.num.as(con)) / (1 + core.num.as(con)))]));
        phi = phi + core.num.as(dphi);
        if (dart.dtest(dart.dsend(dart.dsend(dphi, 'abs', []), '<=', [1e-7]))) {
          return phi;
        }
      }
      dart.throw("Shouldn't reach");
    }
  };
  (aea.AlbersProjection.init = function(params) {
    this[__AlbersProjection_e3] = null;
    this[__AlbersProjection_ns0] = null;
    this[__AlbersProjection_c] = null;
    this[__AlbersProjection_rh] = null;
    this[__AlbersProjection_long0] = null;
    this[__AlbersProjection_x0] = null;
    this[__AlbersProjection_y0] = null;
    aea.AlbersProjection.__proto__.init.call(this, params);
    let lat1 = dart.nullCheck(params.lat1);
    let lat2 = dart.nullCheck(params.lat2);
    this.long0 = params.long0;
    this.x0 = dart.nullCheck(params.x0);
    this.y0 = dart.nullCheck(params.y0);
    if ((lat1 + lat2)[$abs]() < 1e-10) {
      return;
    }
    let temp = this.b / this.a;
    this.es = 1 - math.pow(temp, 2);
    this.e3 = math.sqrt(this.es);
    let sin_po = math.sin(lat1);
    let cos_po = math.cos(lat1);
    let con = sin_po;
    let ms1 = utils.msfnz(this.e3, sin_po, cos_po);
    let qs1 = utils.qsfnz(this.e3, sin_po);
    sin_po = math.sin(lat2);
    cos_po = math.cos(lat2);
    let ms2 = utils.msfnz(this.e3, sin_po, cos_po);
    let qs2 = utils.qsfnz(this.e3, sin_po);
    sin_po = math.sin(dart.nullCheck(params.lat0));
    cos_po = math.cos(dart.nullCheck(params.lat0));
    let qs0 = utils.qsfnz(this.e3, sin_po);
    if ((lat1 - lat2)[$abs]() > 1e-10) {
      this.ns0 = (ms1 * ms1 - ms2 * ms2) / (qs2 - qs1);
    } else {
      this.ns0 = con;
    }
    this.c = ms1 * ms1 + this.ns0 * qs1;
    this.rh = this.a * math.sqrt(this.c - this.ns0 * qs0) / this.ns0;
  }).prototype = aea.AlbersProjection.prototype;
  dart.addTypeTests(aea.AlbersProjection);
  dart.addTypeCaches(aea.AlbersProjection);
  dart.setMethodSignature(aea.AlbersProjection, () => ({
    __proto__: dart.getMethods(aea.AlbersProjection.__proto__),
    forward: dart.fnType(point$.Point, [point$.Point]),
    inverse: dart.fnType(point$.Point, [point$.Point]),
    [_phi1z]: dart.fnType(core.double, [dart.dynamic, dart.dynamic])
  }));
  dart.setGetterSignature(aea.AlbersProjection, () => ({
    __proto__: dart.getGetters(aea.AlbersProjection.__proto__),
    e3: core.double,
    ns0: core.double,
    c: core.double,
    rh: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setSetterSignature(aea.AlbersProjection, () => ({
    __proto__: dart.getSetters(aea.AlbersProjection.__proto__),
    e3: core.double,
    ns0: core.double,
    c: core.double,
    rh: core.double,
    long0: core.double,
    x0: core.double,
    y0: core.double
  }));
  dart.setLibraryUri(aea.AlbersProjection, I[32]);
  dart.setFieldSignature(aea.AlbersProjection, () => ({
    __proto__: dart.getFields(aea.AlbersProjection.__proto__),
    [__AlbersProjection_e3]: dart.fieldType(dart.nullable(core.double)),
    [__AlbersProjection_ns0]: dart.fieldType(dart.nullable(core.double)),
    [__AlbersProjection_c]: dart.fieldType(dart.nullable(core.double)),
    [__AlbersProjection_rh]: dart.fieldType(dart.nullable(core.double)),
    [__AlbersProjection_long0]: dart.fieldType(dart.nullable(core.double)),
    [__AlbersProjection_x0]: dart.fieldType(dart.nullable(core.double)),
    [__AlbersProjection_y0]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(aea.AlbersProjection, () => ['names']);
  dart.defineLazy(aea.AlbersProjection, {
    /*aea.AlbersProjection.names*/get names() {
      return T.JSArrayOfString().of(["Albers_Conic_Equal_Area", "Albers", "aea"]);
    }
  }, false);
  dart.defineLazy(initializers, {
    /*initializers.initializers*/get initializers() {
      return (() => {
        let t6 = T.LinkedHashMapOfString$ProjParamsToProjection().of((() => {
          let t7 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of merc.PseudoMercatorProjection.names)
            t7[$_set](name, dart.fn(params => new merc.PseudoMercatorProjection.init(params), T.ProjParamsToPseudoMercatorProjection()));
          return t7;
        })());
        t6[$addAll]((() => {
          let t8 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of longlat.LongLat.names)
            t8[$_set](name, dart.fn(params => new longlat.LongLat.init(params), T.ProjParamsToLongLat()));
          return t8;
        })());
        t6[$addAll]((() => {
          let t9 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of somerc.SwissObliqueMercatorProjection.names)
            t9[$_set](name, dart.fn(params => new somerc.SwissObliqueMercatorProjection.init(params), T.ProjParamsToSwissObliqueMercatorProjection()));
          return t9;
        })());
        t6[$addAll]((() => {
          let t10 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of aea.AlbersProjection.names)
            t10[$_set](name, dart.fn(params => new aea.AlbersProjection.init(params), T.ProjParamsToAlbersProjection()));
          return t10;
        })());
        t6[$addAll]((() => {
          let t11 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of aeqd.AzimuthalEquidistantProjection.names)
            t11[$_set](name, dart.fn(params => new aeqd.AzimuthalEquidistantProjection.init(params), T.ProjParamsToAzimuthalEquidistantProjection()));
          return t11;
        })());
        t6[$addAll]((() => {
          let t12 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of cass.CassiniProjection.names)
            t12[$_set](name, dart.fn(params => new cass.CassiniProjection.init(params), T.ProjParamsToCassiniProjection()));
          return t12;
        })());
        t6[$addAll]((() => {
          let t13 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of cea.CentralCylindricalProjection.names)
            t13[$_set](name, dart.fn(params => new cea.CentralCylindricalProjection.init(params), T.ProjParamsToCentralCylindricalProjection()));
          return t13;
        })());
        t6[$addAll]((() => {
          let t14 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of eqc.EquidistantCylindricalProjection.names)
            t14[$_set](name, dart.fn(params => new eqc.EquidistantCylindricalProjection.init(params), T.ProjParamsToEquidistantCylindricalProjection()));
          return t14;
        })());
        t6[$addAll]((() => {
          let t15 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of eqdc.EquidistantConicProjection.names)
            t15[$_set](name, dart.fn(params => new eqdc.EquidistantConicProjection.init(params), T.ProjParamsToEquidistantConicProjection()));
          return t15;
        })());
        t6[$addAll]((() => {
          let t16 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of etmerc.ExtendedTransverseMercatorProjection.names)
            t16[$_set](name, dart.fn(params => new etmerc.ExtendedTransverseMercatorProjection.init(params), T.ProjParamsToExtendedTransverseMercatorProjection()));
          return t16;
        })());
        t6[$addAll]((() => {
          let t17 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of utm.UniversalTransverseMercatorProjection.names)
            t17[$_set](name, dart.fn(params => new utm.UniversalTransverseMercatorProjection.init(params), T.ProjParamsToUniversalTransverseMercatorProjection()));
          return t17;
        })());
        t6[$addAll]((() => {
          let t18 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of vandg.VanDerGrintenProjection.names)
            t18[$_set](name, dart.fn(params => new vandg.VanDerGrintenProjection.init(params), T.ProjParamsToVanDerGrintenProjection()));
          return t18;
        })());
        t6[$addAll]((() => {
          let t19 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of gauss.GaussProjection.names)
            t19[$_set](name, dart.fn(params => new gauss.GaussProjection.init(params), T.ProjParamsToGaussProjection()));
          return t19;
        })());
        t6[$addAll]((() => {
          let t20 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of sterea.StereographicNorthProjection.names)
            t20[$_set](name, dart.fn(params => new sterea.StereographicNorthProjection.init(params), T.ProjParamsToStereographicNorthProjection()));
          return t20;
        })());
        t6[$addAll]((() => {
          let t21 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of stere.StereographicSouthProjection.names)
            t21[$_set](name, dart.fn(params => new stere.StereographicSouthProjection.init(params), T.ProjParamsToStereographicSouthProjection()));
          return t21;
        })());
        t6[$addAll]((() => {
          let t22 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of sinu.SinusoidalProjection.names)
            t22[$_set](name, dart.fn(params => new sinu.SinusoidalProjection.init(params), T.ProjParamsToSinusoidalProjection()));
          return t22;
        })());
        t6[$addAll]((() => {
          let t23 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of robin.RobinsonProjection.names)
            t23[$_set](name, dart.fn(params => new robin.RobinsonProjection.init(params), T.ProjParamsToRobinsonProjection()));
          return t23;
        })());
        t6[$addAll]((() => {
          let t24 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of geocent.GeocentricProjection.names)
            t24[$_set](name, dart.fn(params => new geocent.GeocentricProjection.init(params), T.ProjParamsToGeocentricProjection()));
          return t24;
        })());
        t6[$addAll]((() => {
          let t25 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of gnom.GnomicProjection.names)
            t25[$_set](name, dart.fn(params => new gnom.GnomicProjection.init(params), T.ProjParamsToGnomicProjection()));
          return t25;
        })());
        t6[$addAll]((() => {
          let t26 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of gstmerc.GaussSchreiberTransverseMercatorProjection.names)
            t26[$_set](name, dart.fn(params => new gstmerc.GaussSchreiberTransverseMercatorProjection.init(params), T.ProjParamsToGaussSchreiberTransverseMercatorProjection()));
          return t26;
        })());
        t6[$addAll]((() => {
          let t27 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of krovak.KrovakProjection.names)
            t27[$_set](name, dart.fn(params => new krovak.KrovakProjection.init(params), T.ProjParamsToKrovakProjection()));
          return t27;
        })());
        t6[$addAll]((() => {
          let t28 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of laea.LambertAzimuthalEqualAreaProjection.names)
            t28[$_set](name, dart.fn(params => new laea.LambertAzimuthalEqualAreaProjection.init(params), T.ProjParamsToLambertAzimuthalEqualAreaProjection()));
          return t28;
        })());
        t6[$addAll]((() => {
          let t29 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of lcc.LambertConformalConicProjection.names)
            t29[$_set](name, dart.fn(params => new lcc.LambertConformalConicProjection.init(params), T.ProjParamsToLambertConformalConicProjection()));
          return t29;
        })());
        t6[$addAll]((() => {
          let t30 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of mill.MillerCylindricalProjection.names)
            t30[$_set](name, dart.fn(params => new mill.MillerCylindricalProjection.init(params), T.ProjParamsToMillerCylindricalProjection()));
          return t30;
        })());
        t6[$addAll]((() => {
          let t31 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of moll.MollweideProjection.names)
            t31[$_set](name, dart.fn(params => new moll.MollweideProjection.init(params), T.ProjParamsToMollweideProjection()));
          return t31;
        })());
        t6[$addAll]((() => {
          let t32 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of nzmg.NewZealandMapGridProjection.names)
            t32[$_set](name, dart.fn(params => new nzmg.NewZealandMapGridProjection.init(params), T.ProjParamsToNewZealandMapGridProjection()));
          return t32;
        })());
        t6[$addAll]((() => {
          let t33 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of omerc.HotineObliqueMercatorProjection.names)
            t33[$_set](name, dart.fn(params => new omerc.HotineObliqueMercatorProjection.init(params), T.ProjParamsToHotineObliqueMercatorProjection()));
          return t33;
        })());
        t6[$addAll]((() => {
          let t34 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of ortho.OrthographicProjection.names)
            t34[$_set](name, dart.fn(params => new ortho.OrthographicProjection.init(params), T.ProjParamsToOrthographicProjection()));
          return t34;
        })());
        t6[$addAll]((() => {
          let t35 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of poly.PolyconicProjection.names)
            t35[$_set](name, dart.fn(params => new poly.PolyconicProjection.init(params), T.ProjParamsToPolyconicProjection()));
          return t35;
        })());
        t6[$addAll]((() => {
          let t36 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of qsc.QuadrilateralizedSphericalCubeProjection.names)
            t36[$_set](name, dart.fn(params => new qsc.QuadrilateralizedSphericalCubeProjection.init(params), T.ProjParamsToQuadrilateralizedSphericalCubeProjection()));
          return t36;
        })());
        t6[$addAll]((() => {
          let t37 = new (T.IdentityMapOfString$ProjParamsToProjection()).new();
          for (let name of tmerc.TransverseMercatorProjection.names)
            t37[$_set](name, dart.fn(params => new tmerc.TransverseMercatorProjection.init(params), T.ProjParamsToTransverseMercatorProjection()));
          return t37;
        })());
        return t6;
      })();
    }
  }, false);
  var WGS84 = dart.privateName(projection_store, "ProjectionStore.WGS84");
  var GOOGLE = dart.privateName(projection_store, "ProjectionStore.GOOGLE");
  var NAD83 = dart.privateName(projection_store, "ProjectionStore.NAD83");
  var _projectionCache = dart.privateName(projection_store, "_projectionCache");
  var _fillProjectionCache = dart.privateName(projection_store, "_fillProjectionCache");
  projection_store.ProjectionStore = class ProjectionStore extends core.Object {
    get WGS84() {
      return this[WGS84];
    }
    set WGS84(value) {
      super.WGS84 = value;
    }
    get GOOGLE() {
      return this[GOOGLE];
    }
    set GOOGLE(value) {
      super.GOOGLE = value;
    }
    get NAD83() {
      return this[NAD83];
    }
    set NAD83(value) {
      super.NAD83 = value;
    }
    get isEmpty() {
      return this[_projectionCache][$isEmpty];
    }
    clearProjectionCache() {
      this[_projectionCache][$clear]();
      this[_fillProjectionCache]();
    }
    static new() {
      return projection_store.ProjectionStore._projStore;
    }
    static ['_#new#tearOff']() {
      return projection_store.ProjectionStore.new();
    }
    static ['_#_internalInitializer#tearOff'](opts) {
      let wgs84 = opts && 'wgs84' in opts ? opts.wgs84 : null;
      let nad83 = opts && 'nad83' in opts ? opts.nad83 : null;
      let google = opts && 'google' in opts ? opts.google : null;
      return new projection_store.ProjectionStore._internalInitializer({wgs84: wgs84, nad83: nad83, google: google});
    }
    [_fillProjectionCache]() {
      this.register("WGS84", this.WGS84);
      this.register("EPSG:4326", this.WGS84);
      this.register("EPSG:4269", this.NAD83);
      this.register("EPSG:3857", this.GOOGLE);
      this.register("EPSG:3785", this.GOOGLE);
      this.register("GOOGLE", this.GOOGLE);
      this.register("EPSG:900913", this.GOOGLE);
      this.register("EPSG:102113", this.GOOGLE);
    }
    static ['_#_internal#tearOff']() {
      return new projection_store.ProjectionStore._internal();
    }
    get(srsCode) {
      return this[_projectionCache][$_get](srsCode);
    }
    register(code, projection) {
      let t40, t39, t38;
      if (this[_projectionCache][$containsKey](code)) {
        core.print("Warning a Projection was already registered with the following name: " + code + ", it will be overridden");
      }
      t38 = this[_projectionCache];
      t39 = code;
      t40 = projection;
      t38[$_set](t39, t40);
      return t40;
    }
  };
  (projection_store.ProjectionStore._internalInitializer = function(opts) {
    let wgs84 = opts && 'wgs84' in opts ? opts.wgs84 : null;
    let nad83 = opts && 'nad83' in opts ? opts.nad83 : null;
    let google = opts && 'google' in opts ? opts.google : null;
    this[WGS84] = wgs84;
    this[GOOGLE] = google;
    this[NAD83] = nad83;
    this[_projectionCache] = new (T.IdentityMapOfString$Projection()).new();
    this[_fillProjectionCache]();
  }).prototype = projection_store.ProjectionStore.prototype;
  (projection_store.ProjectionStore._internal = function() {
    projection_store.ProjectionStore._internalInitializer.call(this, {wgs84: projection.Projection.parse("+proj=longlat +datum=WGS84 +no_defs"), nad83: projection.Projection.parse("+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), google: projection.Projection.parse("+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs")});
  }).prototype = projection_store.ProjectionStore.prototype;
  dart.addTypeTests(projection_store.ProjectionStore);
  dart.addTypeCaches(projection_store.ProjectionStore);
  dart.setMethodSignature(projection_store.ProjectionStore, () => ({
    __proto__: dart.getMethods(projection_store.ProjectionStore.__proto__),
    clearProjectionCache: dart.fnType(dart.void, []),
    [_fillProjectionCache]: dart.fnType(dart.void, []),
    get: dart.fnType(dart.nullable(projection.Projection), [core.String]),
    register: dart.fnType(projection.Projection, [core.String, projection.Projection])
  }));
  dart.setStaticMethodSignature(projection_store.ProjectionStore, () => ['new']);
  dart.setGetterSignature(projection_store.ProjectionStore, () => ({
    __proto__: dart.getGetters(projection_store.ProjectionStore.__proto__),
    isEmpty: core.bool
  }));
  dart.setLibraryUri(projection_store.ProjectionStore, I[33]);
  dart.setFieldSignature(projection_store.ProjectionStore, () => ({
    __proto__: dart.getFields(projection_store.ProjectionStore.__proto__),
    WGS84: dart.finalFieldType(projection.Projection),
    GOOGLE: dart.finalFieldType(projection.Projection),
    NAD83: dart.finalFieldType(projection.Projection),
    [_projectionCache]: dart.finalFieldType(core.Map$(core.String, projection.Projection))
  }));
  dart.setStaticFieldSignature(projection_store.ProjectionStore, () => ['_projStore']);
  dart.defineLazy(projection_store.ProjectionStore, {
    /*projection_store.ProjectionStore._projStore*/get _projStore() {
      return new projection_store.ProjectionStore._internal();
    }
  }, false);
  utils.acosh = function acosh(x) {
    return 2 * math.log(math.sqrt((x + 1) / 2) + math.sqrt((x - 1) / 2));
  };
  utils.adjust_lat = function adjust_lat(x) {
    return x[$abs]() < 1.5707963267948966 ? x : x - utils.sign(x) * 3.141592653589793;
  };
  utils.adjust_lon = function adjust_lon(x) {
    return x[$abs]() <= 3.14159265359 ? x : x - utils.sign(x) * 6.283185307179586;
  };
  utils.adjust_zone = function adjust_zone(zone, lon) {
    if (zone == null) {
      zone = ((utils.adjust_lon(lon) + 3.141592653589793) * 30 / 3.141592653589793)[$floor]() + 1;
      if (dart.notNull(zone) < 0) {
        return 0;
      } else if (dart.notNull(zone) > 60) {
        return 60;
      }
    }
    return zone;
  };
  utils.asinh = function asinh(x) {
    let s = x >= 0 ? 1 : -1;
    return s * math.log(x[$abs]() + math.sqrt(x * x + 1));
  };
  utils.asinhy = function asinhy(x) {
    let y = x[$abs]();
    y = utils.log1py(y * (1 + y / (utils.hypot(1.0, y) + 1)));
    return x < 0 ? -y : y;
  };
  utils.asinz = function asinz(x) {
    if (x[$abs]() > 1) {
      x = x > 1 ? 1.0 : -1.0;
    }
    return math.asin(x);
  };
  utils.atanh = function atanh(x) {
    return math.log((x - 1) / (x + 1)) / 2;
  };
  utils.clens_cmplx = function clens_cmplx(pp, arg_r, arg_i) {
    let sin_arg_r = math.sin(arg_r);
    let cos_arg_r = math.cos(arg_r);
    let sinh_arg_i = utils.sinh(arg_i);
    let cosh_arg_i = utils.cosh(arg_i);
    let r = 2 * cos_arg_r * cosh_arg_i;
    let i = -2 * sin_arg_r * sinh_arg_i;
    let j = pp[$length] - 1;
    let hr = pp[$_get](j);
    let hi1 = 0.0;
    let hr1 = 0.0;
    let hi = 0.0;
    let hr2 = null;
    let hi2 = null;
    while ((j = j - 1) >= 0) {
      hr2 = hr1;
      hi2 = hi1;
      hr1 = hr;
      hi1 = hi;
      hr = -hr2 + r * hr1 - i * hi1 + pp[$_get](j);
      hi = -hi2 + i * hr1 + r * hi1;
    }
    r = sin_arg_r * cosh_arg_i;
    i = cos_arg_r * sinh_arg_i;
    return T.JSArrayOfdouble().of([r * hr - i * hi, r * hi + i * hr]);
  };
  utils.clens = function clens(pp, arg_r) {
    let r = 2 * math.cos(arg_r);
    let i = pp[$length] - 1;
    let hr1 = pp[$_get](i);
    let hr2 = 0.0;
    let hr = 0.0;
    if (i <= 0) {
      dart.throw("i must be positive number");
    }
    while ((i = i - 1) >= 0) {
      hr = -hr2 + r * hr1 + pp[$_get](i);
      hr2 = hr1;
      hr1 = hr;
    }
    return math.sin(arg_r) * hr;
  };
  utils.cosh = function cosh(x) {
    let r = math.exp(x);
    r = (r + 1 / r) / 2;
    return r;
  };
  utils.e0fn = function e0fn(x) {
    return 1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x));
  };
  utils.e1fn = function e1fn(x) {
    return 0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x));
  };
  utils.e2fn = function e2fn(x) {
    return 0.05859375 * x * x * (1 + 0.75 * x);
  };
  utils.e3fn = function e3fn(x) {
    return x * x * x * (35 / 3072);
  };
  utils.fL = function fL(x, L) {
    return 2 * math.atan(x * math.exp(L)) - 1.5707963267948966;
  };
  utils.gatg = function gatg(pp, B) {
    let cos_2B = 2 * math.cos(2 * B);
    let i = pp[$length] - 1;
    let h1 = pp[$_get](i);
    let h2 = 0.0;
    let h = 0.0;
    if (i <= 0) {
      dart.throw("i must be positive number");
    }
    while ((i = i - 1) >= 0) {
      h = -h2 + cos_2B * h1 + pp[$_get](i);
      h2 = h1;
      h1 = h;
    }
    return B + h * math.sin(2 * B);
  };
  utils.gN = function gN(a, e, sinphi) {
    let temp = e * sinphi;
    return a / math.sqrt(1 - temp * temp);
  };
  utils.hypot = function hypot(x, y) {
    x = x[$abs]();
    y = y[$abs]();
    let a = math.max(core.double, x, y);
    let b = math.min(core.double, x, y) / (a === 0 ? 1 : a);
    return a * math.sqrt(1 + math.pow(b, 2));
  };
  utils.imlfn = function imlfn(ml, e0, e1, e2, e3) {
    let phi = null;
    let dphi = null;
    phi = ml / e0;
    for (let i = 0; i < 15; i = i + 1) {
      dphi = (ml - (e0 * phi - e1 * math.sin(2 * phi) + e2 * math.sin(4 * phi) - e3 * math.sin(6 * phi))) / (e0 - 2 * e1 * math.cos(2 * phi) + 4 * e2 * math.cos(4 * phi) - 6 * e3 * math.cos(6 * phi));
      phi = phi + dphi;
      if (dphi[$abs]() <= 1e-10) {
        return phi;
      }
    }
    return 0 / 0;
  };
  utils.invlatiso = function invlatiso(eccent, ts) {
    let phi = utils.fL(1.0, ts);
    let Iphi = 0.0;
    let con = 0.0;
    do {
      Iphi = phi;
      con = eccent * math.sin(Iphi);
      phi = utils.fL(math.exp(eccent * math.log((1 + con) / (1 - con)) / 2), ts);
    } while ((phi - Iphi)[$abs]() > 1e-12);
    return phi;
  };
  utils.iqsfnz = function iqsfnz(eccent, q) {
    let temp = 1 - (1 - eccent * eccent) / (2 * eccent) * math.log((1 - eccent) / (1 + eccent));
    if ((q[$abs]() - temp)[$abs]() < 0.000001) {
      if (q < 0) {
        return -1 * 1.5707963267948966;
      } else {
        return 1.5707963267948966;
      }
    }
    let phi = math.asin(0.5 * q);
    let dphi = null;
    let sin_phi = null;
    let cos_phi = null;
    let con = null;
    for (let i = 0; i < 30; i = i + 1) {
      sin_phi = math.sin(phi);
      cos_phi = math.cos(phi);
      con = eccent * sin_phi;
      dphi = math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * math.log((1 - con) / (1 + con)));
      phi = phi + dphi;
      if (dphi[$abs]() <= 1e-10) {
        return phi;
      }
    }
    return 0 / 0;
  };
  utils.latiso = function latiso(eccent, phi, sinphi) {
    if (phi[$abs]() > 1.5707963267948966) {
      return 0 / 0;
    }
    if (phi === 1.5707963267948966) {
      return 1 / 0;
    }
    if (phi === -1 * 1.5707963267948966) {
      return -1 / 0;
    }
    let con = eccent * sinphi;
    return math.log(math.tan((1.5707963267948966 + phi) / 2)) + eccent * math.log((1 - con) / (1 + con)) / 2;
  };
  utils.log1py = function log1py(x) {
    let y = 1 + x;
    let z = y - 1;
    return z === 0 ? x : x * math.log(y) / z;
  };
  utils.mlfn = function mlfn(e0, e1, e2, e3, phi) {
    return e0 * phi - e1 * math.sin(2 * phi) + e2 * math.sin(4 * phi) - e3 * math.sin(6 * phi);
  };
  utils.msfnz = function msfnz(eccent, sinphi, cosphi) {
    let con = eccent * sinphi;
    return cosphi / math.sqrt(1 - con * con);
  };
  utils.phi2z = function phi2z(eccent, ts) {
    let eccnth = 0.5 * eccent;
    let con = null;
    let dphi = null;
    let phi = 1.5707963267948966 - 2 * math.atan(ts);
    for (let i = 0; i <= 15; i = i + 1) {
      con = eccent * math.sin(phi);
      dphi = 1.5707963267948966 - 2 * math.atan(ts * math.pow((1 - con) / (1 + con), eccnth)) - phi;
      phi = phi + dphi;
      if (dphi[$abs]() <= 1e-10) {
        return phi;
      }
    }
    return -9999.0;
  };
  utils.pj_enfn = function pj_enfn(es) {
    let C00 = 1.0;
    let C02 = 0.25;
    let C04 = 0.046875;
    let C06 = 0.01953125;
    let C08 = 0.01068115234375;
    let C22 = 0.75;
    let C44 = 0.46875;
    let C46 = 0.013020833333333334;
    let C48 = 0.007120768229166667;
    let C66 = 0.3645833333333333;
    let C68 = 0.005696614583333333;
    let C88 = 0.3076171875;
    let en = T.ListOfdouble().filled(5, 0.0);
    en[$_set](0, C00 - es * (C02 + es * (C04 + es * (C06 + es * C08))));
    en[$_set](1, es * (C22 - es * (C04 + es * (C06 + es * C08))));
    let t = es * es;
    en[$_set](2, t * (C44 - es * (C46 + es * C48)));
    t = t * es;
    en[$_set](3, t * (C66 - es * C68));
    en[$_set](4, t * es * C88);
    return en;
  };
  utils.pj_inv_mlfn = function pj_inv_mlfn(arg, es, en) {
    let MAX_ITER = 20;
    let k = 1 / (1 - es);
    let phi = arg;
    for (let i = 0; i < MAX_ITER; i = i + 1) {
      let s = math.sin(phi);
      let t = 1 - es * s * s;
      t = (utils.pj_mlfn(phi, s, math.cos(phi), en) - arg) * (t * math.sqrt(t)) * k;
      phi = phi - t;
      if (t[$abs]() < 1e-10) {
        return phi;
      }
    }
    return phi;
  };
  utils.pj_mlfn = function pj_mlfn(phi, sphi, cphi, en) {
    cphi = cphi * sphi;
    sphi = sphi * sphi;
    return en[$_get](0) * phi - cphi * (en[$_get](1) + sphi * (en[$_get](2) + sphi * (en[$_get](3) + sphi * en[$_get](4))));
  };
  utils.qsfnz = function qsfnz(eccent, sinphi) {
    let con = null;
    if (eccent > 1e-7) {
      con = eccent * sinphi;
      return (1 - eccent * eccent) * (sinphi / (1 - con * con) - 0.5 / eccent * math.log((1 - con) / (1 + con)));
    } else {
      return 2 * sinphi;
    }
  };
  utils.sign = function sign(x) {
    return x < 0 ? -1.0 : 1.0;
  };
  utils.sinh = function sinh(x) {
    let r = math.exp(x);
    r = (r - 1 / r) / 2;
    return r;
  };
  utils.srat = function srat(esinp, exp) {
    return math.pow((1 - esinp) / (1 + esinp), exp);
  };
  utils.tanh = function tanh(x) {
    let r = math.exp(x);
    r = (r - 1 / r) / (r + 1 / r);
    return r;
  };
  utils.toPoint = function toPoint(array) {
    let out = new point$.Point.new({x: array[$_get](0), y: array[$_get](1)});
    if (array[$length] > 2) {
      out.z = array[$_get](2);
    }
    if (array[$length] > 3) {
      out.m = array[$_get](3);
    }
    return out;
  };
  utils.tsfnz = function tsfnz(eccent, phi, sinphi) {
    let con = eccent * sinphi;
    let com = 0.5 * eccent;
    con = math.pow((1 - con) / (1 + con), com);
    return math.tan(0.5 * (1.5707963267948966 - phi)) / con;
  };
  utils.checkCoord = function checkCoord(coord) {
    if (coord[$isFinite]) {
      return;
    }
    dart.throw(core.Exception.new("coordinates must be finite numbers"));
  };
  utils.checkSanity = function checkSanity(point) {
    utils.checkCoord(point.x);
    utils.checkCoord(point.y);
  };
  utils.adjust_axis = function adjust_axis(crs, denorm, point) {
    let t38;
    let xin = point.x;
    let yin = point.y;
    let zin = (t38 = point.z, t38 == null ? 0.0 : t38);
    let v = null;
    let t = null;
    let i = null;
    let pointString = "      {\n        \"x\": " + dart.str(point.x) + ", \n        \"y\": " + dart.str(point.y) + ", \n        \"z\": " + dart.str(point.z) + "\n      }\n    ";
    let pointObj = convert.jsonDecode(pointString);
    let outString = "      {\n        \"x\": null, \n        \"y\": null, \n        \"z\": null\n      }\n    ";
    let out = convert.jsonDecode(outString);
    for (let t38$ = i = 0; dart.dtest(dart.dsend(i, '<', [3])); i = dart.dsend(i, '+', [1])) {
      if (denorm && dart.equals(i, 2) && point.z == null) {
        continue;
      }
      if (dart.equals(i, 0)) {
        v = xin;
        if ("ew"[$contains](crs.axis[$_get](core.int.as(i)))) {
          t = "x";
        } else {
          t = "y";
        }
      } else if (dart.equals(i, 1)) {
        v = yin;
        if ("ns"[$contains](crs.axis[$_get](core.int.as(i)))) {
          t = "y";
        } else {
          t = "x";
        }
      } else {
        v = zin;
        t = "z";
      }
      switch (crs.axis[$_get](core.int.as(i))) {
        case "e":
        case "w":
        case "n":
        case "s":
          {
            dart.dsend(out, '_set', [t, v]);
            break;
          }
        case "u":
          {
            if (dart.dsend(pointObj, '_get', [t]) != null) {
              dart.dsend(out, '_set', ["z", v]);
            }
            break;
          }
        case "d":
          {
            if (dart.dsend(pointObj, '_get', [t]) != null) {
              dart.dsend(out, '_set', ["z", dart.dsend(v, '_negate', [])]);
            }
            break;
          }
        default:
          {
            dart.throw("ERROR: unknow axis (" + crs.axis[$_get](core.int.as(i)) + ") - check definition of " + crs.projName);
          }
      }
    }
    return new point$.Point.withZ({x: core.double.as(dart.dsend(out, '_get', ["x"])), y: core.double.as(dart.dsend(out, '_get', ["y"])), z: T.doubleN().as(dart.dsend(out, '_get', ["z"]))});
  };
  datum_transform.checkParams = function checkParams(type) {
    return type === 1 || type === 2;
  };
  datum_transform.transform = function transform(source, dest, point) {
    if (datum_utils.compareDatums(source, dest)) {
      return point;
    }
    if (source.datumType === 5 || dest.datumType === 5) {
      return point;
    }
    let source_a = source.a;
    let source_es = source.es;
    if (source.datumType === 3) {
      datum_transform.applyGridShift(source, false, point);
      source_a = 6378137;
      source_es = 0.0066943799901413165;
    }
    let dest_a = dest.a;
    let dest_b = dest.b;
    let dest_es = dest.es;
    if (dest.datumType === 3) {
      dest_a = 6378137;
      dest_b = 6356752.314;
      dest_es = 0.0066943799901413165;
    }
    if (source_es === dest_es && source_a === dest_a && !datum_transform.checkParams(source.datumType) && !datum_transform.checkParams(dest.datumType)) {
      return point;
    }
    point = datum_utils.geodeticToGeocentric(point, source_es, source_a);
    if (datum_transform.checkParams(source.datumType)) {
      point = datum_utils.geocentricToWgs84(point, source.datumType, source.datumParams);
    }
    if (datum_transform.checkParams(dest.datumType)) {
      point = datum_utils.geocentricFromWgs84(point, dest.datumType, dest.datumParams);
    }
    point = datum_utils.geocentricToGeodetic(point, dest_es, dest_a, dest_b);
    if (dest.datumType === 3) {
      datum_transform.applyGridShift(dest, true, point);
    }
    return point;
  };
  datum_transform.applyGridShift = function applyGridShift(source, inverse, point) {
    if (source.grids == null || dart.nullCheck(source.grids)[$isEmpty]) {
      dart.throw(core.Exception.new("Grid shift grids not found"));
    }
    let input = new point$.Point.new({x: -point.x, y: point.y});
    let output = new point$.Point.new({x: 0 / 0, y: 0 / 0});
    let onlyMandatoryGrids = false;
    let attemptedGrids = T.JSArrayOfString().of([]);
    for (let i = 0; i < dart.nullCheck(source.grids)[$length]; i = i + 1) {
      let grid = dart.nullCheck(source.grids)[$_get](i);
      attemptedGrids[$add](grid.name);
      if (grid.isNull) {
        output = input;
        break;
      }
      onlyMandatoryGrids = grid.mandatory;
      if (grid.grid == null) {
        if (grid.mandatory) {
          dart.throw(core.Exception.new("Unable to find mandatory grid '" + grid.name + "'"));
        }
        continue;
      }
      let subgrid = dart.nullCheck(grid.grid).subgrids[$_get](0);
      let epsilon = (subgrid.del[$_get](1)[$abs]() + subgrid.del[$_get](0)[$abs]()) / 10000.0;
      let minX = subgrid.ll[$_get](0) - epsilon;
      let minY = subgrid.ll[$_get](1) - epsilon;
      let maxX = subgrid.ll[$_get](0) + (subgrid.lim[$_get](0) - 1) * subgrid.del[$_get](0) + epsilon;
      let maxY = subgrid.ll[$_get](1) + (subgrid.lim[$_get](1) - 1) * subgrid.del[$_get](1) + epsilon;
      if (minY > input.y || minX > input.x || maxY < input.y || maxX < input.x) {
        continue;
      }
      output = datum_transform.applySubgridShift(input, inverse, subgrid);
      if (!output.x[$isNaN]) {
        break;
      }
    }
    if (output.x[$isNaN]) {
      dart.throw(core.Exception.new("Failed to find a grid shift table for location '" + dart.str(-input.x * 57.29577951308232) + " " + dart.str(input.y * 57.29577951308232) + " tried: " + dart.str(attemptedGrids) + "'"));
    }
    point.x = -output.x;
    point.y = output.y;
  };
  datum_transform.applySubgridShift = function applySubgridShift(pin, inverse, ct) {
    let t39, t39$, t39$0, t39$1, t39$2;
    let val = new point$.Point.new({x: 0 / 0, y: 0 / 0});
    if (pin.x[$isNaN]) {
      return val;
    }
    let tb = new point$.Point.new({x: pin.x, y: pin.y});
    t39 = tb;
    t39.x = t39.x - ct.ll[$_get](0);
    t39$ = tb;
    t39$.y = t39$.y - ct.ll[$_get](1);
    tb.x = utils.adjust_lon(tb.x - 3.141592653589793) + 3.141592653589793;
    let t = datum_transform.nadInterpolate(tb, ct);
    if (inverse) {
      if (t.x[$isNaN]) {
        return val;
      }
      t.x = tb.x - t.x;
      t.y = tb.y - t.y;
      let i = 9;
      let tol = 1e-12;
      let dif = null;
      let del = null;
      do {
        del = datum_transform.nadInterpolate(t, ct);
        if (del.x[$isNaN]) {
          core.print("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
          break;
        }
        dif = new point$.Point.new({x: tb.x - (del.x + t.x), y: tb.y - (del.y + t.y)});
        t39$0 = t;
        t39$0.x = t39$0.x + dif.x;
        t39$1 = t;
        t39$1.y = t39$1.y + dif.y;
      } while ((t39$2 = i, i = t39$2 - 1, t39$2) !== 0 && dif.x[$abs]() > tol && dif.y[$abs]() > tol);
      if (i < 0) {
        core.print("Inverse grid shift iterator failed to converge.");
        return val;
      }
      val.x = utils.adjust_lon(t.x + ct.ll[$_get](0));
      val.y = t.y + ct.ll[$_get](1);
    } else {
      if (!t.x[$isNaN]) {
        val.x = pin.x + t.x;
        val.y = pin.y + t.y;
      }
    }
    return val;
  };
  datum_transform.nadInterpolate = function nadInterpolate(pin, ct) {
    let t = new point$.Point.new({x: pin.x / ct.del[$_get](0), y: pin.y / ct.del[$_get](1)});
    let indx = new point$.Point.new({x: t.x[$floorToDouble](), y: t.y[$floorToDouble]()});
    let frct = new point$.Point.new({x: t.x - 1.0 * indx.x, y: t.y - 1.0 * indx.y});
    let val = new point$.Point.new({x: 0 / 0, y: 0 / 0});
    let inx = null;
    if (indx.x < 0 || indx.x >= ct.lim[$_get](0)) {
      return val;
    }
    if (indx.y < 0 || indx.y >= ct.lim[$_get](1)) {
      return val;
    }
    inx = (indx.y * ct.lim[$_get](0) + indx.x)[$toInt]();
    let f00 = new point$.Point.new({x: ct.cvs[$_get](inx)[$_get](0), y: ct.cvs[$_get](inx)[$_get](1)});
    inx = inx + 1;
    let f10 = new point$.Point.new({x: ct.cvs[$_get](inx)[$_get](0), y: ct.cvs[$_get](inx)[$_get](1)});
    inx = inx + ct.lim[$_get](0);
    let f11 = new point$.Point.new({x: ct.cvs[$_get](inx)[$_get](0), y: ct.cvs[$_get](inx)[$_get](1)});
    inx = inx - 1;
    let f01 = new point$.Point.new({x: ct.cvs[$_get](inx)[$_get](0), y: ct.cvs[$_get](inx)[$_get](1)});
    let m11 = frct.x * frct.y;
    let m10 = frct.x * (1.0 - frct.y);
    let m00 = (1.0 - frct.x) * (1.0 - frct.y);
    let m01 = (1.0 - frct.x) * frct.y;
    val.x = m00 * f00.x + m10 * f10.x + m01 * f01.x + m11 * f11.x;
    val.y = m00 * f00.y + m10 * f10.y + m01 * f01.y + m11 * f11.y;
    return val;
  };
  dart.trackLibraries("packages/proj4dart/src/classes/projection_tuple.dart", {
    "package:proj4dart/src/classes/projection_tuple.dart": projection_tuple,
    "package:proj4dart/src/projections/vandg.dart": vandg,
    "package:proj4dart/src/projections/utm.dart": utm,
    "package:proj4dart/src/projections/tmerc.dart": tmerc,
    "package:proj4dart/src/projections/sterea.dart": sterea,
    "package:proj4dart/src/projections/stere.dart": stere,
    "package:proj4dart/src/projections/somerc.dart": somerc,
    "package:proj4dart/src/projections/sinu.dart": sinu,
    "package:proj4dart/src/projections/robin.dart": robin,
    "package:proj4dart/src/projections/qsc.dart": qsc,
    "package:proj4dart/src/projections/poly.dart": poly,
    "package:proj4dart/src/projections/ortho.dart": ortho,
    "package:proj4dart/src/projections/omerc.dart": omerc,
    "package:proj4dart/src/projections/nzmg.dart": nzmg,
    "package:proj4dart/src/projections/moll.dart": moll,
    "package:proj4dart/src/projections/mill.dart": mill,
    "package:proj4dart/src/projections/merc.dart": merc,
    "package:proj4dart/src/projections/longlat.dart": longlat,
    "package:proj4dart/src/projections/lcc.dart": lcc,
    "package:proj4dart/src/projections/laea.dart": laea,
    "package:proj4dart/src/projections/krovak.dart": krovak,
    "package:proj4dart/src/projections/gstmerc.dart": gstmerc,
    "package:proj4dart/src/projections/gnom.dart": gnom,
    "package:proj4dart/src/projections/geocent.dart": geocent,
    "package:proj4dart/src/projections/gauss.dart": gauss,
    "package:proj4dart/src/projections/etmerc.dart": etmerc,
    "package:proj4dart/src/projections/eqdc.dart": eqdc,
    "package:proj4dart/src/projections/eqc.dart": eqc,
    "package:proj4dart/src/projections/cea.dart": cea,
    "package:proj4dart/src/projections/cass.dart": cass,
    "package:proj4dart/src/projections/aeqd.dart": aeqd,
    "package:proj4dart/src/projections/aea.dart": aea,
    "package:proj4dart/src/constants/initializers.dart": initializers,
    "package:proj4dart/src/globals/projection_store.dart": projection_store,
    "package:proj4dart/src/common/utils.dart": utils,
    "package:proj4dart/src/common/datum_transform.dart": datum_transform,
    "package:proj4dart/src/classes/projection.dart": projection,
    "package:proj4dart/proj4dart.dart": proj4dart
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["projection_tuple.dart","projection.dart","../projections/vandg.dart","../projections/etmerc.dart","../projections/utm.dart","../projections/tmerc.dart","../projections/gauss.dart","../projections/sterea.dart","../projections/stere.dart","../projections/somerc.dart","../projections/sinu.dart","../projections/robin.dart","../projections/qsc.dart","../projections/poly.dart","../projections/ortho.dart","../projections/omerc.dart","../projections/nzmg.dart","../projections/moll.dart","../projections/mill.dart","../projections/merc.dart","../projections/longlat.dart","../projections/lcc.dart","../projections/laea.dart","../projections/krovak.dart","../projections/gstmerc.dart","../projections/gnom.dart","../projections/geocent.dart","../projections/eqdc.dart","../projections/eqc.dart","../projections/cea.dart","../projections/cass.dart","../projections/aeqd.dart","../projections/aea.dart","../constants/initializers.dart","../globals/projection_store.dart","../common/utils.dart","../common/datum_transform.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/proj4dart/src/classes/projection_tuple.dart.lib.js"}');
  // Exports:
  return {
    src__classes__projection_tuple: projection_tuple,
    src__projections__vandg: vandg,
    src__projections__utm: utm,
    src__projections__tmerc: tmerc,
    src__projections__sterea: sterea,
    src__projections__stere: stere,
    src__projections__somerc: somerc,
    src__projections__sinu: sinu,
    src__projections__robin: robin,
    src__projections__qsc: qsc,
    src__projections__poly: poly,
    src__projections__ortho: ortho,
    src__projections__omerc: omerc,
    src__projections__nzmg: nzmg,
    src__projections__moll: moll,
    src__projections__mill: mill,
    src__projections__merc: merc,
    src__projections__longlat: longlat,
    src__projections__lcc: lcc,
    src__projections__laea: laea,
    src__projections__krovak: krovak,
    src__projections__gstmerc: gstmerc,
    src__projections__gnom: gnom,
    src__projections__geocent: geocent,
    src__projections__gauss: gauss,
    src__projections__etmerc: etmerc,
    src__projections__eqdc: eqdc,
    src__projections__eqc: eqc,
    src__projections__cea: cea,
    src__projections__cass: cass,
    src__projections__aeqd: aeqd,
    src__projections__aea: aea,
    src__constants__initializers: initializers,
    src__globals__projection_store: projection_store,
    src__common__utils: utils,
    src__common__datum_transform: datum_transform,
    src__classes__projection: projection,
    proj4dart: proj4dart
  };
}));

//# sourceMappingURL=projection_tuple.dart.lib.js.map
