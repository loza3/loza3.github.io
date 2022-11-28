define(['dart_sdk'], (function load__packages__wkt_parser__src__proj_wkt_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var proj_wkt = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    MapNOfString$dynamic: () => (T.MapNOfString$dynamic = dart.constFn(dart.nullable(T.MapOfString$dynamic())))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    ListOfList: () => (T.ListOfList = dart.constFn(core.List$(core.List)))(),
    ListNOfList: () => (T.ListNOfList = dart.constFn(dart.nullable(T.ListOfList())))(),
    ListN: () => (T.ListN = dart.constFn(dart.nullable(core.List)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:wkt_parser/src/proj_wkt.dart"];
  var map$ = dart.privateName(proj_wkt, "ProjWKT.map");
  proj_wkt.ProjWKT = class ProjWKT extends core.Object {
    get map() {
      return this[map$];
    }
    set map(value) {
      this[map$] = value;
    }
    toString() {
      return convert.jsonEncode(this.map);
    }
    get type() {
      return T.StringN().as(this.map[$_get]("type"));
    }
    get name() {
      return T.StringN().as(this.map[$_get]("name"));
    }
    get GEOGCS() {
      return T.MapNOfString$dynamic().as(this.map[$_get]("GEOGCS"));
    }
    get PROJECTION() {
      return T.StringN().as(this.map[$_get]("PROJECTION"));
    }
    get latitude_of_center() {
      return T.doubleN().as(this.map[$_get]("latitude_of_center"));
    }
    get longitude_of_center() {
      return T.doubleN().as(this.map[$_get]("longitude_of_center"));
    }
    get azimuth() {
      return T.doubleN().as(this.map[$_get]("azimuth"));
    }
    get central_meridian() {
      return T.doubleN().as(this.map[$_get]("central_meridian"));
    }
    get rectified_grid_angle() {
      return T.doubleN().as(this.map[$_get]("rectified_grid_angle"));
    }
    get scale_factor() {
      return T.doubleN().as(this.map[$_get]("scale_factor"));
    }
    get false_easting() {
      return T.doubleN().as(this.map[$_get]("false_easting"));
    }
    get false_northing() {
      return T.doubleN().as(this.map[$_get]("false_northing"));
    }
    get UNIT() {
      return T.MapNOfString$dynamic().as(this.map[$_get]("UNIT"));
    }
    get AXIS() {
      return T.ListNOfList().as(this.map[$_get]("AXIS"));
    }
    get EXTENSION() {
      return T.MapNOfString$dynamic().as(this.map[$_get]("EXTENSION"));
    }
    get AUTHORITY() {
      return T.MapNOfString$dynamic().as(this.map[$_get]("AUTHORITY"));
    }
    get projName() {
      return T.StringN().as(this.map[$_get]("projName"));
    }
    get units() {
      return T.StringN().as(this.map[$_get]("units"));
    }
    get to_meter() {
      return T.doubleN().as(this.map[$_get]("to_meter"));
    }
    get datumCode() {
      return T.StringN().as(this.map[$_get]("datumCode"));
    }
    get ellps() {
      return T.StringN().as(this.map[$_get]("ellps"));
    }
    get a() {
      return T.doubleN().as(this.map[$_get]("a"));
    }
    get rf() {
      return T.doubleN().as(this.map[$_get]("rf"));
    }
    get datum_params() {
      return T.ListN().as(this.map[$_get]("datum_params"));
    }
    get k0() {
      return T.doubleN().as(this.map[$_get]("k0"));
    }
    get lat0() {
      return T.doubleN().as(this.map[$_get]("lat0"));
    }
    get long0() {
      return T.doubleN().as(this.map[$_get]("long0"));
    }
    get longc() {
      return T.doubleN().as(this.map[$_get]("longc"));
    }
    get x0() {
      return T.doubleN().as(this.map[$_get]("x0"));
    }
    get y0() {
      return T.doubleN().as(this.map[$_get]("y0"));
    }
    get alpha() {
      return T.doubleN().as(this.map[$_get]("alpha"));
    }
    get srsCode() {
      return T.StringN().as(this.map[$_get]("srsCode"));
    }
    static ['_#new#tearOff'](map) {
      return new proj_wkt.ProjWKT.new(map);
    }
  };
  (proj_wkt.ProjWKT.new = function(map) {
    this[map$] = map;
    ;
  }).prototype = proj_wkt.ProjWKT.prototype;
  dart.addTypeTests(proj_wkt.ProjWKT);
  dart.addTypeCaches(proj_wkt.ProjWKT);
  dart.setGetterSignature(proj_wkt.ProjWKT, () => ({
    __proto__: dart.getGetters(proj_wkt.ProjWKT.__proto__),
    type: dart.nullable(core.String),
    name: dart.nullable(core.String),
    GEOGCS: dart.nullable(core.Map$(core.String, dart.dynamic)),
    PROJECTION: dart.nullable(core.String),
    latitude_of_center: dart.nullable(core.double),
    longitude_of_center: dart.nullable(core.double),
    azimuth: dart.nullable(core.double),
    central_meridian: dart.nullable(core.double),
    rectified_grid_angle: dart.nullable(core.double),
    scale_factor: dart.nullable(core.double),
    false_easting: dart.nullable(core.double),
    false_northing: dart.nullable(core.double),
    UNIT: dart.nullable(core.Map$(core.String, dart.dynamic)),
    AXIS: dart.nullable(core.List$(core.List)),
    EXTENSION: dart.nullable(core.Map$(core.String, dart.dynamic)),
    AUTHORITY: dart.nullable(core.Map$(core.String, dart.dynamic)),
    projName: dart.nullable(core.String),
    units: dart.nullable(core.String),
    to_meter: dart.nullable(core.double),
    datumCode: dart.nullable(core.String),
    ellps: dart.nullable(core.String),
    a: dart.nullable(core.double),
    rf: dart.nullable(core.double),
    datum_params: dart.nullable(core.List),
    k0: dart.nullable(core.double),
    lat0: dart.nullable(core.double),
    long0: dart.nullable(core.double),
    longc: dart.nullable(core.double),
    x0: dart.nullable(core.double),
    y0: dart.nullable(core.double),
    alpha: dart.nullable(core.double),
    srsCode: dart.nullable(core.String)
  }));
  dart.setLibraryUri(proj_wkt.ProjWKT, I[0]);
  dart.setFieldSignature(proj_wkt.ProjWKT, () => ({
    __proto__: dart.getFields(proj_wkt.ProjWKT.__proto__),
    map: dart.fieldType(core.Map$(core.String, dart.dynamic))
  }));
  dart.defineExtensionMethods(proj_wkt.ProjWKT, ['toString']);
  dart.trackLibraries("packages/wkt_parser/src/proj_wkt.dart", {
    "package:wkt_parser/src/proj_wkt.dart": proj_wkt
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["proj_wkt.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAIuB;;;;;;;AAGA,gCAAW;IAAI;;AAEhB,4BAAA,AAAG,gBAAC;IAAO;;AACX,4BAAA,AAAG,gBAAC;IAAO;;AACK,yCAAA,AAAG,gBAAC;IAAS;;AACvB,4BAAA,AAAG,gBAAC;IAAa;;AACT,4BAAA,AAAG,gBAAC;IAAqB;;AACxB,4BAAA,AAAG,gBAAC;IAAsB;;AACtC,4BAAA,AAAG,gBAAC;IAAU;;AACL,4BAAA,AAAG,gBAAC;IAAmB;;AACnB,4BAAA,AAAG,gBAAC;IAAuB;;AACnC,4BAAA,AAAG,gBAAC;IAAe;;AAClB,4BAAA,AAAG,gBAAC;IAAgB;;AACnB,4BAAA,AAAG,gBAAC;IAAiB;;AACjB,yCAAA,AAAG,gBAAC;IAAO;;AACZ,gCAAA,AAAG,gBAAC;IAAO;;AACL,yCAAA,AAAG,gBAAC;IAAY;;AAChB,yCAAA,AAAG,gBAAC;IAAY;;AAC/B,4BAAA,AAAG,gBAAC;IAAW;;AAClB,4BAAA,AAAG,gBAAC;IAAQ;;AACT,4BAAA,AAAG,gBAAC;IAAW;;AACd,4BAAA,AAAG,gBAAC;IAAY;;AACpB,4BAAA,AAAG,gBAAC;IAAQ;;AAChB,4BAAA,AAAG,gBAAC;IAAI;;AACP,4BAAA,AAAG,gBAAC;IAAK;;AACQ,0BAAA,AAAG,gBAAC;IAAe;;AACpC,4BAAA,AAAG,gBAAC;IAAK;;AACP,4BAAA,AAAG,gBAAC;IAAO;;AACV,4BAAA,AAAG,gBAAC;IAAQ;;AACZ,4BAAA,AAAG,gBAAC;IAAQ;;AACf,4BAAA,AAAG,gBAAC;IAAK;;AACT,4BAAA,AAAG,gBAAC;IAAK;;AACN,4BAAA,AAAG,gBAAC;IAAQ;;AACV,4BAAA,AAAG,gBAAC;IAAU;;;;;;IAExB;;EAAI","file":"../../../../../../../../../../../packages/wkt_parser/src/proj_wkt.dart.lib.js"}');
  // Exports:
  return {
    src__proj_wkt: proj_wkt
  };
}));

//# sourceMappingURL=proj_wkt.dart.lib.js.map
