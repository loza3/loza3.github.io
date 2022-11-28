define(['dart_sdk'], (function load__packages__wkt_parser__src__clean_wkt_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var clean_wkt = Object.create(dart.library);
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $first = dartx.first;
  var $keys = dartx.keys;
  var $toString = dartx.toString;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $contains = dartx.contains;
  var $replaceAll = dartx.replaceAll;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $toLowerCase = dartx.toLowerCase;
  var $isFinite = dartx.isFinite;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    doubleTodouble: () => (T.doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))(),
    ListTovoid: () => (T.ListTovoid = dart.constFn(dart.fnType(dart.void, [core.List])))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    MatchToString: () => (T.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    JSArrayOfObject: () => (T.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))(),
    ListOfObject: () => (T.ListOfObject = dart.constFn(core.List$(core.Object)))(),
    JSArrayOfListOfObject: () => (T.JSArrayOfListOfObject = dart.constFn(_interceptors.JSArray$(T.ListOfObject())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(clean_wkt._d2r, T.doubleTodouble());
    }
  }, false);
  var C = [void 0];
  clean_wkt._d2r = function _d2r(input) {
    return input * clean_wkt._D2R;
  };
  clean_wkt._rename = function _rename(obj, params) {
    let outName = params[$_get](0);
    let inName = params[$_get](1);
    if (!obj[$containsKey](outName) && obj[$containsKey](inName)) {
      obj[$_set](core.String.as(outName), obj[$_get](inName));
      if (params[$length] === 3) {
        obj[$_set](core.String.as(outName), dart.dcall(params[$_get](2), [obj[$_get](outName)]));
      }
    }
  };
  clean_wkt.cleanWKT = function cleanWKT(wkt) {
    function _toMeter(input) {
      let t0;
      let ratio = (t0 = wkt[$_get]("to_meter"), t0 == null ? 1.0 : t0);
      return input * core.num.as(ratio);
    }
    dart.fn(_toMeter, T.doubleTodouble());
    function _renamer(a) {
      return clean_wkt._rename(wkt, a);
    }
    dart.fn(_renamer, T.ListTovoid());
    if (dart.equals(wkt[$_get]("type"), "GEOGCS")) {
      wkt[$_set]("projName", "longlat");
    } else if (dart.equals(wkt[$_get]("type"), "LOCAL_CS")) {
      wkt[$_set]("projName", "identity");
      wkt[$_set]("local", true);
    } else {
      if (T.MapOfString$dynamic().is(wkt[$_get]("PROJECTION"))) {
        wkt[$_set]("projName", T.MapOfString$dynamic().as(wkt[$_get]("PROJECTION"))[$keys][$first]);
      } else {
        wkt[$_set]("projName", wkt[$_get]("PROJECTION"));
      }
    }
    if (wkt[$_get]("AXIS") != null) {
      let axisOrder = "";
      for (let i = 0; i < core.num.as(dart.dload(wkt[$_get]("AXIS"), 'length')); i = i + 1) {
        let axis = dart.dsend(wkt[$_get]("AXIS"), '_get', [i]);
        let descriptor = dart.dsend(dart.dsend(axis, '_get', [0]), 'toLowerCase', []);
        if (dart.dtest(dart.dsend(descriptor, 'contains', ["north"]))) {
          axisOrder = axisOrder + "n";
        } else if (dart.dtest(dart.dsend(descriptor, 'contains', ["south"]))) {
          axisOrder = axisOrder + "s";
        } else if (dart.dtest(dart.dsend(descriptor, 'contains', ["east"]))) {
          axisOrder = axisOrder + "e";
        } else if (dart.dtest(dart.dsend(descriptor, 'contains', ["west"]))) {
          axisOrder = axisOrder + "w";
        }
      }
      if (axisOrder.length === 2) {
        axisOrder = axisOrder + "u";
      }
      if (axisOrder.length === 3) {
        wkt[$_set]("axis", axisOrder);
      }
    }
    if (wkt[$_get]("UNIT") != null) {
      wkt[$_set]("units", dart.dsend(dart.dsend(wkt[$_get]("UNIT"), '_get', ["name"]), 'toLowerCase', []));
      if (dart.equals(wkt[$_get]("units"), "metre")) {
        wkt[$_set]("units", "meter");
      }
      if (dart.dsend(wkt[$_get]("UNIT"), '_get', ["convert"]) != null) {
        if (dart.equals(wkt[$_get]("type"), "GEOGCS")) {
          if (wkt[$_get]("DATUM") != null && dart.dsend(wkt[$_get]("DATUM"), '_get', ["SPHEROID"]) != null) {
            wkt[$_set]("to_meter", dart.dsend(dart.dsend(wkt[$_get]("UNIT"), '_get', ["convert"]), '*', [dart.dsend(dart.dsend(wkt[$_get]("DATUM"), '_get', ["SPHEROID"]), '_get', ["a"])]));
          }
        } else {
          wkt[$_set]("to_meter", dart.dsend(wkt[$_get]("UNIT"), '_get', ["convert"]));
        }
      }
    }
    let geogcs = wkt[$_get]("GEOGCS");
    if (dart.equals(wkt[$_get]("type"), "GEOGCS")) {
      geogcs = wkt;
    }
    if (geogcs != null) {
      if (dart.dsend(geogcs, '_get', ["DATUM"]) != null) {
        wkt[$_set]("datumCode", dart.dsend(dart.dsend(dart.dsend(geogcs, '_get', ["DATUM"]), '_get', ["name"]), 'toLowerCase', []));
      } else {
        wkt[$_set]("datumCode", dart.dsend(dart.dsend(geogcs, '_get', ["name"]), 'toLowerCase', []));
      }
      if (dart.toString(wkt[$_get]("datumCode"))[$startsWith]("d_")) {
        wkt[$_set]("datumCode", dart.toString(wkt[$_get]("datumCode"))[$substring](2, dart.toString(wkt[$_get]("datumCode")).length));
      }
      if (dart.equals(wkt[$_get]("datumCode"), "new_zealand_geodetic_datum_1949") || dart.equals(wkt[$_get]("datumCode"), "new_zealand_1949")) {
        wkt[$_set]("datumCode", "nzgd49");
      }
      if (dart.equals(wkt[$_get]("datumCode"), "wgs_1984") || dart.equals(wkt[$_get]("datumCode"), "world_geodetic_system_1984")) {
        if (dart.equals(wkt[$_get]("PROJECTION"), "Mercator_Auxiliary_Sphere")) {
          wkt[$_set]("sphere", true);
        }
        wkt[$_set]("datumCode", "wgs84");
      }
      if (dart.toString(wkt[$_get]("datumCode")).length >= 6 && dart.toString(wkt[$_get]("datumCode"))[$substring](dart.toString(wkt[$_get]("datumCode")).length - 6, dart.toString(wkt[$_get]("datumCode")).length) === "_ferro") {
        wkt[$_set]("datumCode", dart.toString(wkt[$_get]("datumCode"))[$substring](0, dart.toString(wkt[$_get]("datumCode")).length - 6));
      }
      if (dart.toString(wkt[$_get]("datumCode")).length >= 8 && dart.toString(wkt[$_get]("datumCode"))[$substring](dart.toString(wkt[$_get]("datumCode")).length - 8, dart.toString(wkt[$_get]("datumCode")).length) === "_jakarta") {
        wkt[$_set]("datumCode", dart.toString(wkt[$_get]("datumCode"))[$substring](0, dart.toString(wkt[$_get]("datumCode")).length - 8));
      }
      if (dart.toString(wkt[$_get]("datumCode"))[$contains]("belge")) {
        wkt[$_set]("datumCode", "rnb72");
      }
      if (dart.dsend(geogcs, '_get', ["DATUM"]) != null && dart.dsend(dart.dsend(geogcs, '_get', ["DATUM"]), '_get', ["SPHEROID"]) != null) {
        wkt[$_set]("ellps", dart.toString(dart.dsend(dart.dsend(dart.dsend(geogcs, '_get', ["DATUM"]), '_get', ["SPHEROID"]), '_get', ["name"]))[$replaceAll]("_19", "")[$toString]()[$replaceAllMapped](core.RegExp.new("[Cc]larke\\_18"), dart.fn(match => "clrk", T.MatchToString())));
        let ellps = dart.toString(wkt[$_get]("ellps"))[$toLowerCase]();
        if (ellps.length >= 13 && ellps[$substring](0, 13) === "international") {
          wkt[$_set]("ellps", "intl");
        }
        wkt[$_set]("a", dart.dsend(dart.dsend(dart.dsend(geogcs, '_get', ["DATUM"]), '_get', ["SPHEROID"]), '_get', ["a"]));
        wkt[$_set]("rf", core.double.parse(dart.toString(dart.dsend(dart.dsend(dart.dsend(geogcs, '_get', ["DATUM"]), '_get', ["SPHEROID"]), '_get', ["rf"]))));
      }
      if (dart.dsend(geogcs, '_get', ["DATUM"]) != null && dart.dsend(dart.dsend(geogcs, '_get', ["DATUM"]), '_get', ["TOWGS84"]) != null) {
        wkt[$_set]("datum_params", dart.dsend(dart.dsend(geogcs, '_get', ["DATUM"]), '_get', ["TOWGS84"]));
      }
      if (dart.toString(wkt[$_get]("datumCode"))[$contains]("osgb_1936")) {
        wkt[$_set]("datumCode", "osgb36");
      }
      if (dart.toString(wkt[$_get]("datumCode"))[$contains]("osni_1952")) {
        wkt[$_set]("datumCode", "osni52");
      }
      if (dart.toString(wkt[$_get]("datumCode"))[$contains]("tm65") || dart.toString(wkt[$_get]("datumCode"))[$contains]("geodetic_datum_of_1965")) {
        wkt[$_set]("datumCode", "ire65");
      }
      if (dart.equals(wkt[$_get]("datumCode"), "ch1903+")) {
        wkt[$_set]("datumCode", "ch1903");
      }
      if (dart.toString(wkt[$_get]("datumCode"))[$contains]("israel")) {
        wkt[$_set]("datumCode", "isr93");
      }
    }
    if (wkt[$_get]("b") != null && !core.double.parse(core.String.as(wkt[$_get]("b")))[$isFinite]) {
      wkt[$_set]("b", wkt[$_get]("a"));
    }
    let list = T.JSArrayOfListOfObject().of([T.JSArrayOfString().of(["standard_parallel_1", "Standard_Parallel_1"]), T.JSArrayOfString().of(["standard_parallel_2", "Standard_Parallel_2"]), T.JSArrayOfString().of(["false_easting", "False_Easting"]), T.JSArrayOfString().of(["false_northing", "False_Northing"]), T.JSArrayOfString().of(["central_meridian", "Central_Meridian"]), T.JSArrayOfString().of(["latitude_of_origin", "Latitude_Of_Origin"]), T.JSArrayOfString().of(["latitude_of_origin", "Central_Parallel"]), T.JSArrayOfString().of(["scale_factor", "Scale_Factor"]), T.JSArrayOfString().of(["k0", "scale_factor"]), T.JSArrayOfString().of(["latitude_of_center", "Latitude_Of_Center"]), T.JSArrayOfString().of(["latitude_of_center", "Latitude_of_center"]), T.JSArrayOfObject().of(["lat0", "latitude_of_center", C[0] || CT.C0]), T.JSArrayOfString().of(["longitude_of_center", "Longitude_Of_Center"]), T.JSArrayOfString().of(["longitude_of_center", "Longitude_of_center"]), T.JSArrayOfObject().of(["longc", "longitude_of_center", C[0] || CT.C0]), T.JSArrayOfObject().of(["x0", "false_easting", _toMeter]), T.JSArrayOfObject().of(["y0", "false_northing", _toMeter]), T.JSArrayOfObject().of(["long0", "central_meridian", C[0] || CT.C0]), T.JSArrayOfObject().of(["lat0", "latitude_of_origin", C[0] || CT.C0]), T.JSArrayOfObject().of(["lat0", "standard_parallel_1", C[0] || CT.C0]), T.JSArrayOfObject().of(["lat1", "standard_parallel_1", C[0] || CT.C0]), T.JSArrayOfObject().of(["lat2", "standard_parallel_2", C[0] || CT.C0]), T.JSArrayOfString().of(["azimuth", "Azimuth"]), T.JSArrayOfObject().of(["alpha", "azimuth", C[0] || CT.C0]), T.JSArrayOfString().of(["srsCode", "name"])]);
    list[$forEach](_renamer);
    if (wkt[$_get]("long0") == null && wkt[$_get]("longc") != null && (dart.equals(wkt[$_get]("projName"), "Albers_Conic_Equal_Area") || dart.equals(wkt[$_get]("projName"), "Lambert_Azimuthal_Equal_Area"))) {
      wkt[$_set]("long0", wkt[$_get]("longc"));
    }
    if (wkt[$_get]("lat_ts") == null && wkt[$_get]("lat1") != null && (dart.equals(wkt[$_get]("projName"), "Stereographic_South_Pole") || dart.equals(wkt[$_get]("projName"), "Polar Stereographic (variant B)"))) {
      wkt[$_set]("lat0", clean_wkt._d2r(dart.dtest(dart.dsend(wkt[$_get]("lat1"), '>', [0])) ? 90.0 : -90.0));
      wkt[$_set]("lat_ts", wkt[$_get]("lat1"));
    }
  };
  dart.defineLazy(clean_wkt, {
    /*clean_wkt._D2R*/get _D2R() {
      return 0.017453292519943295;
    },
    set _D2R(_) {}
  }, false);
  dart.trackLibraries("packages/wkt_parser/src/clean_wkt.dart", {
    "package:wkt_parser/src/clean_wkt.dart": clean_wkt
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clean_wkt.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/wkt_parser/src/clean_wkt.dart.lib.js"}');
  // Exports:
  return {
    src__clean_wkt: clean_wkt
  };
}));

//# sourceMappingURL=clean_wkt.dart.lib.js.map
