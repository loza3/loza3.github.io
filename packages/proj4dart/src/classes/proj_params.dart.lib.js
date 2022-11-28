define(['dart_sdk', 'packages/proj4dart/src/classes/datum.dart', 'packages/proj4dart/src/constants/units.dart', 'packages/proj4dart/src/constants/prime_meridians.dart', 'packages/proj4dart/src/constants/datums.dart', 'packages/proj4dart/src/common/derive_constants.dart', 'packages/proj4dart/src/globals/nadgrid_store.dart'], (function load__packages__proj4dart__src__classes__proj_params_dart(dart_sdk, packages__proj4dart__src__classes__datum$46dart, packages__proj4dart__src__constants__units$46dart, packages__proj4dart__src__constants__prime_meridians$46dart, packages__proj4dart__src__constants__datums$46dart, packages__proj4dart__src__common__derive_constants$46dart, packages__proj4dart__src__globals__nadgrid_store$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const datum = packages__proj4dart__src__classes__datum$46dart.src__classes__datum;
  const units = packages__proj4dart__src__constants__units$46dart.src__constants__units;
  const prime_meridians = packages__proj4dart__src__constants__prime_meridians$46dart.src__constants__prime_meridians;
  const datums = packages__proj4dart__src__constants__datums$46dart.src__constants__datums;
  const derive_constants = packages__proj4dart__src__common__derive_constants$46dart.src__common__derive_constants;
  const nadgrid = packages__proj4dart__src__globals__nadgrid_store$46dart.src__classes__nadgrid;
  var proj_params = Object.create(dart.library);
  var $split = dartx.split;
  var $trim = dartx.trim;
  var $map = dartx.map;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isNotEmpty = dartx.isNotEmpty;
  var $forEach = dartx.forEach;
  var $toString = dartx.toString;
  var $contains = dartx.contains;
  var $toLowerCase = dartx.toLowerCase;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$ObjectN: () => (T.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T.ObjectN())))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    StringTovoid: () => (T.StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    ListNOfdouble: () => (T.ListNOfdouble = dart.constFn(dart.nullable(T.ListOfdouble())))(),
    ListN: () => (T.ListN = dart.constFn(dart.nullable(core.List)))(),
    DatumN: () => (T.DatumN = dart.constFn(dart.nullable(datum.Datum)))(),
    StringAnddynamicTovoid: () => (T.StringAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [core.String, dart.dynamic])))(),
    StringTodouble: () => (T.StringTodouble = dart.constFn(dart.fnType(core.double, [core.String])))(),
    StringToNdouble: () => (T.StringToNdouble = dart.constFn(dart.nullable(T.StringTodouble())))(),
    StringAndFnTodouble: () => (T.StringAndFnTodouble = dart.constFn(dart.fnType(core.double, [core.String], [T.StringToNdouble()])))(),
    dynamicTodouble: () => (T.dynamicTodouble = dart.constFn(dart.fnType(core.double, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(core.double.parse, T.StringAndFnTodouble());
    }
  }, false);
  var C = [void 0];
  var I = ["package:proj4dart/src/classes/proj_params.dart"];
  var map = dart.privateName(proj_params, "ProjParams.map");
  var srsCode = dart.privateName(proj_params, "ProjParams.srsCode");
  var _iterateProps = dart.privateName(proj_params, "_iterateProps");
  var _addExtraProps = dart.privateName(proj_params, "_addExtraProps");
  var _parseDatumParams = dart.privateName(proj_params, "_parseDatumParams");
  var _getDatumParamsFromString = dart.privateName(proj_params, "_getDatumParamsFromString");
  proj_params.ProjParams = class ProjParams extends core.Object {
    get map() {
      return this[map];
    }
    set map(value) {
      this[map] = value;
    }
    get srsCode() {
      return this[srsCode];
    }
    set srsCode(value) {
      this[srsCode] = value;
    }
    get title() {
      return T.StringN().as(this.map[$_get]("title"));
    }
    get datumCode() {
      return T.StringN().as(this.map[$_get]("datumCode"));
    }
    get proj() {
      return T.StringN().as(this.map[$_get]("proj"));
    }
    get rf() {
      return T.doubleN().as(this.map[$_get]("rf"));
    }
    get lat0() {
      return T.doubleN().as(this.map[$_get]("lat0"));
    }
    get lat1() {
      return T.doubleN().as(this.map[$_get]("lat1"));
    }
    get lat2() {
      return T.doubleN().as(this.map[$_get]("lat2"));
    }
    get lat_ts() {
      return T.doubleN().as(this.map[$_get]("lat_ts"));
    }
    get long0() {
      let t0;
      t0 = T.doubleN().as(this.map[$_get]("long0"));
      return t0 == null ? 0 / 0 : t0;
    }
    get long1() {
      return T.doubleN().as(this.map[$_get]("long1"));
    }
    get long2() {
      return T.doubleN().as(this.map[$_get]("long2"));
    }
    get alpha() {
      return T.doubleN().as(this.map[$_get]("alpha"));
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
    get k0() {
      return T.doubleN().as(this.map[$_get]("k0"));
    }
    get k() {
      return T.doubleN().as(this.map[$_get]("k"));
    }
    get a() {
      return T.doubleN().as(this.map[$_get]("a"));
    }
    get b() {
      return T.doubleN().as(this.map[$_get]("b"));
    }
    get R_A() {
      return T.boolN().as(this.map[$_get]("R_A"));
    }
    get zone() {
      return T.intN().as(this.map[$_get]("zone"));
    }
    get utmSouth() {
      return T.boolN().as(this.map[$_get]("utmSouth"));
    }
    get datum_params() {
      return T.ListOfdouble().is(this.map[$_get]("datum_params")) ? T.ListNOfdouble().as(this.map[$_get]("datum_params")) : this[_parseDatumParams](T.ListN().as(this.map[$_get]("datum_params")));
    }
    get to_meter() {
      return T.doubleN().as(this.map[$_get]("to_meter"));
    }
    get units() {
      return T.StringN().as(this.map[$_get]("units"));
    }
    get from_greenwich() {
      return T.doubleN().as(this.map[$_get]("from_greenwich"));
    }
    get nadgrids() {
      return T.StringN().as(this.map[$_get]("nadgrids"));
    }
    get axis() {
      return T.StringN().as(this.map[$_get]("axis"));
    }
    get no_defs() {
      return T.boolN().as(this.map[$_get]("no_defs"));
    }
    get ellps() {
      return T.StringN().as(this.map[$_get]("ellps"));
    }
    get datumName() {
      return T.StringN().as(this.map[$_get]("datumName"));
    }
    get sphere() {
      return T.boolN().as(this.map[$_get]("sphere"));
    }
    get es() {
      return T.doubleN().as(this.map[$_get]("es"));
    }
    get e() {
      return T.doubleN().as(this.map[$_get]("e"));
    }
    get ep2() {
      return T.doubleN().as(this.map[$_get]("ep2"));
    }
    get datum() {
      return T.DatumN().as(this.map[$_get]("datum"));
    }
    static ['_#new#tearOff'](defData) {
      return new proj_params.ProjParams.new(defData);
    }
    static ['_#fromWKT#tearOff'](wkt) {
      return new proj_params.ProjParams.fromWKT(wkt);
    }
    [_iterateProps](paramObj) {
      paramObj[$forEach](dart.fn((key, v) => {
        let t0;
        switch (key) {
          case "title":
            {
              this.map[$_set]("title", v);
              break;
            }
          case "rf":
            {
              this.map[$_set]("rf", typeof v == 'number' ? v : core.double.parse(core.String.as(v)));
              break;
            }
          case "lat_0":
            {
              this.map[$_set]("lat0", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "lat_1":
            {
              this.map[$_set]("lat1", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "lat_2":
            {
              this.map[$_set]("lat2", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "lat_ts":
            {
              this.map[$_set]("lat_ts", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "lon_0":
            {
              this.map[$_set]("long0", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "lon_1":
            {
              this.map[$_set]("long1", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "lon_2":
            {
              this.map[$_set]("long2", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "alpha":
            {
              this.map[$_set]("alpha", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "lonc":
            {
              this.map[$_set]("longc", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "x_0":
            {
              this.map[$_set]("x0", typeof v == 'number' ? v : core.double.parse(core.String.as(v)));
              break;
            }
          case "y_0":
            {
              this.map[$_set]("y0", typeof v == 'number' ? v : core.double.parse(core.String.as(v)));
              break;
            }
          case "k_0":
            {
              this.map[$_set]("k0", typeof v == 'number' ? v : core.double.parse(core.String.as(v)));
              break;
            }
          case "k":
            {
              this.map[$_set]("k0", typeof v == 'number' ? v : core.double.parse(core.String.as(v)));
              break;
            }
          case "a":
            {
              this.map[$_set]("a", typeof v == 'number' ? v : core.double.parse(core.String.as(v)));
              break;
            }
          case "b":
            {
              this.map[$_set]("b", typeof v == 'number' ? v : core.double.parse(core.String.as(v)));
              break;
            }
          case "r_a":
            {
              this.map[$_set]("R_A", true);
              break;
            }
          case "zone":
            {
              this.map[$_set]("zone", core.int.is(v) ? v : core.int.parse(core.String.as(v)));
              break;
            }
          case "south":
            {
              this.map[$_set]("utmSouth", true);
              break;
            }
          case "towgs84":
            {
              this.map[$_set]("datum_params", this[_getDatumParamsFromString](dart.toString(v)));
              break;
            }
          case "to_meter":
            {
              this.map[$_set]("to_meter", typeof v == 'number' ? v : core.double.parse(core.String.as(v)));
              break;
            }
          case "units":
            {
              this.map[$_set]("units", v);
              let unit = units.match(core.String.as(v));
              if (unit != null) {
                this.map[$_set]("to_meter", unit.to_meter);
              }
              break;
            }
          case "from_greenwich":
            {
              this.map[$_set]("from_greenwich", typeof v == 'number' ? v : core.double.parse(core.String.as(v)) * 0.017453292519943295);
              break;
            }
          case "pm":
            {
              let primeMeridian = prime_meridians.match(core.String.as(v));
              this.map[$_set]("from_greenwich", dart.notNull((t0 = primeMeridian, t0 == null ? typeof v == 'number' ? v : core.double.parse(core.String.as(v)) : t0)) * 0.017453292519943295);
              break;
            }
          case "datum":
            {
              this.map[$_set]("datumCode", v);
              break;
            }
          case "projName":
            {
              this.map[$_set]("proj", v);
              break;
            }
          case "proj":
            {
              this.map[$_set]("proj", v);
              break;
            }
          case "nadgrids":
            {
              if (dart.equals(v, "@null")) {
                this.map[$_set]("datumCode", "none");
              } else {
                this.map[$_set]("nadgrids", v);
              }
              break;
            }
          case "datum_params":
            {
              this.map[$_set]("datum_params", v);
              break;
            }
          case "axis":
            {
              let legalAxis = "ewnsud";
              let axis = dart.toString(v);
              if (axis.length === 3 && legalAxis[$contains](axis[$_get](0)) && legalAxis[$contains](axis[$_get](1)) && legalAxis[$contains](axis[$_get](2))) {
                this.map[$_set]("axis", v);
              }
              break;
            }
          default:
            {
              this.map[$_set](key, v);
              break;
            }
        }
      }, T.StringAnddynamicTovoid()));
      if (this.datumCode != null && this.datumCode !== "WGS84") {
        this.map[$_set]("datumCode", dart.nullCheck(this.datumCode)[$toLowerCase]());
      }
    }
    [_addExtraProps]() {
      let t0, t0$, t0$0;
      if (this.datumCode != null && this.datumCode !== "none") {
        let datumDef = datums.match(dart.nullCheck(this.datumCode));
        if (datumDef != null) {
          this.map[$_set]("datum_params", datumDef.towgs84 != null ? this[_getDatumParamsFromString](dart.nullCheck(datumDef.towgs84)) : null);
          this.map[$_set]("ellps", datumDef.ellipse);
          this.map[$_set]("datumName", datumDef.datumName);
        }
      }
      this.map[$_set]("k0", (t0 = this.k0, t0 == null ? 1.0 : t0));
      this.map[$_set]("axis", (t0$ = this.axis, t0$ == null ? "enu" : t0$));
      this.map[$_set]("ellps", (t0$0 = this.ellps, t0$0 == null ? "wgs84" : t0$0));
      let sphere = derive_constants.sphere(this.a, this.b, this.rf, dart.nullCheck(this.ellps), T.boolN().as(this.map[$_get]("sphere")));
      let ecc = derive_constants.eccentricity(core.double.as(sphere[$_get]("a")), core.double.as(sphere[$_get]("b")), T.doubleN().as(sphere[$_get]("rf")), this.R_A);
      let parsedNadgrids = nadgrid.Nadgird.getNadgrids(this.nadgrids);
      this.map[$_set]("a", sphere[$_get]("a"));
      this.map[$_set]("b", sphere[$_get]("b"));
      this.map[$_set]("rf", sphere[$_get]("rf"));
      this.map[$_set]("sphere", sphere[$_get]("sphere"));
      this.map[$_set]("es", ecc[$_get]("es"));
      this.map[$_set]("e", ecc[$_get]("e"));
      this.map[$_set]("ep2", ecc[$_get]("ep2"));
      if (this.datum == null) {
        this.map[$_set]("datum", new datum.Datum.new(this.datumCode, this.datum_params, dart.nullCheck(this.a), dart.nullCheck(this.b), dart.nullCheck(this.es), dart.nullCheck(this.ep2), parsedNadgrids));
      }
    }
    [_getDatumParamsFromString](towgs84) {
      return towgs84[$split](",")[$map](core.double, C[0] || CT.C0)[$toList]();
    }
    [_parseDatumParams](paramsList) {
      return paramsList != null ? paramsList[$map](core.double, dart.fn(e => core.double.parse(dart.toString(e)), T.dynamicTodouble()))[$toList]() : null;
    }
  };
  (proj_params.ProjParams.new = function(defData) {
    this[map] = new (T.IdentityMapOfString$ObjectN()).new();
    this[srsCode] = null;
    this.srsCode = defData;
    let paramObj = new (T.IdentityMapOfString$dynamic()).new();
    defData[$split]("+")[$map](core.String, dart.fn(v => v[$trim](), T.StringToString()))[$forEach](dart.fn(a => {
      let split = a[$split]("=");
      if (split[$length] === 2) {
        paramObj[$_set](split[$_get](0), split[$_get](1));
      } else if (split[$length] === 1 && split[$_get](0)[$isNotEmpty]) {
        paramObj[$_set](split[$_get](0), true);
      }
    }, T.StringTovoid()));
    this[_iterateProps](paramObj);
    this[_addExtraProps]();
  }).prototype = proj_params.ProjParams.prototype;
  (proj_params.ProjParams.fromWKT = function(wkt) {
    this[map] = new (T.IdentityMapOfString$ObjectN()).new();
    this[srsCode] = null;
    this[_iterateProps](wkt.map);
    this[_addExtraProps]();
  }).prototype = proj_params.ProjParams.prototype;
  dart.addTypeTests(proj_params.ProjParams);
  dart.addTypeCaches(proj_params.ProjParams);
  dart.setMethodSignature(proj_params.ProjParams, () => ({
    __proto__: dart.getMethods(proj_params.ProjParams.__proto__),
    [_iterateProps]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_addExtraProps]: dart.fnType(dart.void, []),
    [_getDatumParamsFromString]: dart.fnType(core.List$(core.double), [core.String]),
    [_parseDatumParams]: dart.fnType(dart.nullable(core.List$(core.double)), [dart.nullable(core.List)])
  }));
  dart.setGetterSignature(proj_params.ProjParams, () => ({
    __proto__: dart.getGetters(proj_params.ProjParams.__proto__),
    title: dart.nullable(core.String),
    datumCode: dart.nullable(core.String),
    proj: dart.nullable(core.String),
    rf: dart.nullable(core.double),
    lat0: dart.nullable(core.double),
    lat1: dart.nullable(core.double),
    lat2: dart.nullable(core.double),
    lat_ts: dart.nullable(core.double),
    long0: core.double,
    long1: dart.nullable(core.double),
    long2: dart.nullable(core.double),
    alpha: dart.nullable(core.double),
    longc: dart.nullable(core.double),
    x0: dart.nullable(core.double),
    y0: dart.nullable(core.double),
    k0: dart.nullable(core.double),
    k: dart.nullable(core.double),
    a: dart.nullable(core.double),
    b: dart.nullable(core.double),
    R_A: dart.nullable(core.bool),
    zone: dart.nullable(core.int),
    utmSouth: dart.nullable(core.bool),
    datum_params: dart.nullable(core.List$(core.double)),
    to_meter: dart.nullable(core.double),
    units: dart.nullable(core.String),
    from_greenwich: dart.nullable(core.double),
    nadgrids: dart.nullable(core.String),
    axis: dart.nullable(core.String),
    no_defs: dart.nullable(core.bool),
    ellps: dart.nullable(core.String),
    datumName: dart.nullable(core.String),
    sphere: dart.nullable(core.bool),
    es: dart.nullable(core.double),
    e: dart.nullable(core.double),
    ep2: dart.nullable(core.double),
    datum: dart.nullable(datum.Datum)
  }));
  dart.setLibraryUri(proj_params.ProjParams, I[0]);
  dart.setFieldSignature(proj_params.ProjParams, () => ({
    __proto__: dart.getFields(proj_params.ProjParams.__proto__),
    map: dart.fieldType(core.Map$(core.String, dart.nullable(core.Object))),
    srsCode: dart.fieldType(dart.nullable(core.String))
  }));
  dart.trackLibraries("packages/proj4dart/src/classes/proj_params.dart", {
    "package:proj4dart/src/classes/proj_params.dart": proj_params
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["proj_params.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/proj4dart/src/classes/proj_params.dart.lib.js"}');
  // Exports:
  return {
    src__classes__proj_params: proj_params
  };
}));

//# sourceMappingURL=proj_params.dart.lib.js.map
