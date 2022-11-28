define(['dart_sdk'], (function load__packages__proj4dart__src__constants__prime_meridians_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var prime_meridians = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$double: () => (T.IdentityMapOfString$double = dart.constFn(_js_helper.IdentityMap$(core.String, core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  prime_meridians.match = function match(name) {
    return prime_meridians._items[$_get](name);
  };
  dart.defineLazy(prime_meridians, {
    /*prime_meridians.greenwich*/get greenwich() {
      return 0.0;
    },
    /*prime_meridians.lisbon*/get lisbon() {
      return -9.131906111111;
    },
    /*prime_meridians.paris*/get paris() {
      return 2.337229166667;
    },
    /*prime_meridians.bogota*/get bogota() {
      return -74.080916666667;
    },
    /*prime_meridians.madrid*/get madrid() {
      return -3.687938888889;
    },
    /*prime_meridians.rome*/get rome() {
      return 12.452333333333;
    },
    /*prime_meridians.bern*/get bern() {
      return 7.439583333333;
    },
    /*prime_meridians.jakarta*/get jakarta() {
      return 106.807719444444;
    },
    /*prime_meridians.ferro*/get ferro() {
      return -17.666666666667;
    },
    /*prime_meridians.brussels*/get brussels() {
      return 4.367975;
    },
    /*prime_meridians.stockholm*/get stockholm() {
      return 18.058277777778;
    },
    /*prime_meridians.athens*/get athens() {
      return 23.7163375;
    },
    /*prime_meridians.oslo*/get oslo() {
      return 10.722916666667;
    },
    /*prime_meridians._items*/get _items() {
      return new (T.IdentityMapOfString$double()).from(["greenwich", prime_meridians.greenwich, "lisbon", prime_meridians.lisbon, "paris", prime_meridians.paris, "bogota", prime_meridians.bogota, "madrid", prime_meridians.madrid, "rome", prime_meridians.rome, "bern", prime_meridians.bern, "jakarta", prime_meridians.jakarta, "ferro", prime_meridians.ferro, "brussels", prime_meridians.brussels, "stockholm", prime_meridians.stockholm, "athens", prime_meridians.athens, "oslo", prime_meridians.oslo]);
    }
  }, false);
  dart.trackLibraries("packages/proj4dart/src/constants/prime_meridians.dart", {
    "package:proj4dart/src/constants/prime_meridians.dart": prime_meridians
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["prime_meridians.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;yCA8BqB;AACnB,UAAO,AAAM,+BAAC,IAAI;EACpB;;MAhCM,yBAAS;YAAG;;MACZ,sBAAM;YAAG,EAAC;;MACV,qBAAK;YAAG;;MACR,sBAAM;YAAG,EAAC;;MACV,sBAAM;YAAG,EAAC;;MACV,oBAAI;YAAG;;MACP,oBAAI;YAAG;;MACP,uBAAO;YAAG;;MACV,qBAAK;YAAG,EAAC;;MACT,wBAAQ;YAAG;;MACX,yBAAS;YAAG;;MACZ,sBAAM;YAAG;;MACT,oBAAI;YAAG;;MAEP,sBAAM;YAAmB,4CAC7B,aAAa,2BACb,UAAU,wBACV,SAAS,uBACT,UAAU,wBACV,UAAU,wBACV,QAAQ,sBACR,QAAQ,sBACR,WAAW,yBACX,SAAS,uBACT,YAAY,0BACZ,aAAa,2BACb,UAAU,wBACV,QAAQ","file":"../../../../../../../../../../../../packages/proj4dart/src/constants/prime_meridians.dart.lib.js"}');
  // Exports:
  return {
    src__constants__prime_meridians: prime_meridians
  };
}));

//# sourceMappingURL=prime_meridians.dart.lib.js.map
