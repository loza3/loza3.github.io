define(['dart_sdk'], (function load__packages__wkt_parser__src__process_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var process = Object.create(dart.library);
  var $insert = dartx.insert;
  var $fold = dartx.fold;
  var $_set = dartx._set;
  var $removeAt = dartx.removeAt;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $isEmpty = dartx.isEmpty;
  var $containsKey = dartx.containsKey;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    MapOfString$dynamicAnddynamicToMapOfString$dynamic: () => (T.MapOfString$dynamicAnddynamicToMapOfString$dynamic = dart.constFn(dart.fnType(T.MapOfString$dynamic(), [T.MapOfString$dynamic(), dart.dynamic])))(),
    JSArrayOfList: () => (T.JSArrayOfList = dart.constFn(_interceptors.JSArray$(core.List)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  process.reduceFn = function reduceFn(newObj, item) {
    process.sExpr(item, newObj);
    return newObj;
  };
  process.mapit = function mapit(obj, key, value) {
    if (core.List.is(key)) {
      value[$insert](0, key);
      key = null;
    }
    let thing = key != null ? new (T.IdentityMapOfString$dynamic()).new() : obj;
    let out = value[$fold](T.MapOfString$dynamic(), thing, dart.fn((newObj, item) => process.reduceFn(newObj, item), T.MapOfString$dynamicAnddynamicToMapOfString$dynamic()));
    if (key != null) {
      obj[$_set](core.String.as(key), out);
    }
  };
  process.sExpr = function sExpr(value, obj) {
    if (!core.List.is(value)) {
      obj[$_set](core.String.as(value), true);
      return;
    }
    let v = value;
    let key = v[$removeAt](0);
    if (dart.equals(key, "PARAMETER")) {
      key = v[$removeAt](0);
    }
    if (v[$length] === 1) {
      if (core.List.is(v[$_get](0))) {
        obj[$_set](core.String.as(key), new (T.IdentityMapOfString$dynamic()).new());
        process.sExpr(v[$_get](0), T.MapOfString$dynamic().as(obj[$_get](key)));
        return;
      }
      obj[$_set](core.String.as(key), v[$_get](0));
      return;
    }
    if (v[$isEmpty]) {
      obj[$_set](core.String.as(key), true);
      return;
    }
    if (dart.equals(key, "TOWGS84")) {
      obj[$_set](core.String.as(key), v);
      return;
    }
    if (dart.equals(key, "AXIS")) {
      if (!obj[$containsKey](key)) {
        obj[$_set](core.String.as(key), T.JSArrayOfList().of([]));
      }
      dart.dsend(obj[$_get](key), 'add', [v]);
      return;
    }
    if (!core.List.is(key)) {
      obj[$_set](core.String.as(key), new (T.IdentityMapOfString$dynamic()).new());
    }
    switch (key) {
      case "UNIT":
      case "PRIMEM":
      case "VERT_DATUM":
        {
          obj[$_set](core.String.as(key), new (T.IdentityMapOfString$dynamic()).from(["name", dart.dsend(v[$_get](0), 'toLowerCase', []), "convert", v[$_get](1)]));
          if (v[$length] === 3) {
            process.sExpr(v[$_get](2), T.MapOfString$dynamic().as(obj[$_get](key)));
          }
          return;
        }
      case "SPHEROID":
      case "ELLIPSOID":
        {
          obj[$_set](core.String.as(key), new (T.IdentityMapOfString$dynamic()).from(["name", v[$_get](0), "a", v[$_get](1), "rf", v[$_get](2)]));
          if (v[$length] === 4) {
            process.sExpr(v[$_get](3), T.MapOfString$dynamic().as(obj[$_get](key)));
          }
          return;
        }
      case "PROJECTEDCRS":
      case "PROJCRS":
      case "GEOGCS":
      case "GEOCCS":
      case "PROJCS":
      case "LOCAL_CS":
      case "GEODCRS":
      case "GEODETICCRS":
      case "GEODETICDATUM":
      case "EDATUM":
      case "ENGINEERINGDATUM":
      case "VERT_CS":
      case "VERTCRS":
      case "VERTICALCRS":
      case "COMPD_CS":
      case "COMPOUNDCRS":
      case "ENGINEERINGCRS":
      case "ENGCRS":
      case "FITTED_CS":
      case "LOCAL_DATUM":
      case "DATUM":
        {
          v[$_set](0, ["name", v[$_get](0)]);
          process.mapit(obj, key, v);
          return;
        }
      default:
        {
          let i = -1;
          while ((i = i + 1) < v[$length]) {
            if (!core.List.is(v[$_get](i))) {
              return process.sExpr(v, T.MapOfString$dynamic().as(obj[$_get](key)));
            }
          }
          return process.mapit(obj, key, v);
        }
    }
  };
  dart.trackLibraries("packages/wkt_parser/src/process.dart", {
    "package:wkt_parser/src/process.dart": process
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["process.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;uCAAmD,QAAgB;AAC9C,IAAnB,cAAM,IAAI,EAAE,MAAM;AAClB,UAAO,OAAM;EACf;iCAEgC,KAAa,KAAmB;AAC9D,QAAQ,aAAJ,GAAG;AACe,MAApB,AAAM,KAAD,UAAQ,GAAG,GAAG;AACT,MAAV,MAAM;;AAEJ,gBAAQ,AAAI,GAAD,WAA4B,8CAAK,GAAG;AAC/C,cAAM,AAAM,KAAD,iCACX,KAAK,EAAE,SAAsB,QAAQ,SAAS,iBAAS,MAAM,EAAE,IAAI;AACvE,QAAI,GAAG;AACS,MAAd,AAAG,GAAA,uBAAC,GAAG,GAAI,GAAG;;EAElB;iCAEmB,OAA4B;AAC7C,SAAY,aAAN,KAAK;AACQ,MAAjB,AAAG,GAAA,uBAAC,KAAK,GAAI;AACb;;AAEE,YAAI,KAAK;AACT,cAAM,AAAE,CAAD,YAAU;AACrB,QAAQ,YAAJ,GAAG,EAAI;AACU,MAAnB,MAAM,AAAE,CAAD,YAAU;;AAEnB,QAAI,AAAE,AAAO,CAAR,cAAW;AACd,UAAS,aAAL,AAAC,CAAA,QAAC;AAC0B,QAA9B,AAAG,GAAA,uBAAC,GAAG,GAAqB;AACP,QAArB,cAAM,AAAC,CAAA,QAAC,+BAAI,AAAG,GAAA,QAAC,GAAG;AACnB;;AAEa,MAAf,AAAG,GAAA,uBAAC,GAAG,GAAI,AAAC,CAAA,QAAC;AACb;;AAEF,QAAI,AAAE,CAAD;AACY,MAAf,AAAG,GAAA,uBAAC,GAAG,GAAI;AACX;;AAEF,QAAQ,YAAJ,GAAG,EAAI;AACG,MAAZ,AAAG,GAAA,uBAAC,GAAG,GAAI,CAAC;AACZ;;AAEF,QAAQ,YAAJ,GAAG,EAAI;AACT,WAAK,AAAI,GAAD,eAAa,GAAG;AACM,QAA5B,AAAG,GAAA,uBAAC,GAAG,GAAmB;;AAEb,MAAN,WAAT,AAAG,GAAA,QAAC,GAAG,WAAM,CAAC;AACd;;AAEF,SAAU,aAAJ,GAAG;AACuB,MAA9B,AAAG,GAAA,uBAAC,GAAG,GAAqB;;AAG9B,YAAQ,GAAG;;;;;AAIkE,UAAzE,AAAG,GAAA,uBAAC,GAAG,GAAqB,4CAAC,QAAa,WAAL,AAAC,CAAA,QAAC,wBAAkB,WAAW,AAAC,CAAA,QAAC;AACtE,cAAI,AAAE,AAAO,CAAR,cAAW;AACO,YAArB,cAAM,AAAC,CAAA,QAAC,+BAAI,AAAG,GAAA,QAAC,GAAG;;AAErB;;;;;AAGiE,UAAjE,AAAG,GAAA,uBAAC,GAAG,GAAqB,4CAAC,QAAQ,AAAC,CAAA,QAAC,IAAI,KAAK,AAAC,CAAA,QAAC,IAAI,MAAM,AAAC,CAAA,QAAC;AAC9D,cAAI,AAAE,AAAO,CAAR,cAAW;AACO,YAArB,cAAM,AAAC,CAAA,QAAC,+BAAI,AAAG,GAAA,QAAC,GAAG;;AAErB;;;;;;;;;;;;;;;;;;;;;;;;AAsB8B,UAA9B,AAAC,CAAA,QAAC,GAAc,CAAC,QAAQ,AAAC,CAAA,QAAC;AACT,UAAlB,cAAM,GAAG,EAAE,GAAG,EAAE,CAAC;AACjB;;;;AAEI,kBAAI,CAAC;AACT,iBAAW,CAAF,IAAF,AAAE,CAAC,GAAH,KAAM,AAAE,CAAD;AACZ,iBAAW,aAAL,AAAC,CAAA,QAAC,CAAC;AACP,oBAAO,eAAM,CAAC,6BAAE,AAAG,GAAA,QAAC,GAAG;;;AAG3B,gBAAO,eAAM,GAAG,EAAE,GAAG,EAAE,CAAC;;;EAE9B","file":"../../../../../../../../../../../packages/wkt_parser/src/process.dart.lib.js"}');
  // Exports:
  return {
    src__process: process
  };
}));

//# sourceMappingURL=process.dart.lib.js.map
