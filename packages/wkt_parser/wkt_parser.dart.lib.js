define(['dart_sdk', 'packages/wkt_parser/src/parser.dart', 'packages/wkt_parser/src/process.dart', 'packages/wkt_parser/src/clean_wkt.dart', 'packages/wkt_parser/src/proj_wkt.dart'], (function load__packages__wkt_parser__wkt_parser_dart(dart_sdk, packages__wkt_parser__src__parser$46dart, packages__wkt_parser__src__process$46dart, packages__wkt_parser__src__clean_wkt$46dart, packages__wkt_parser__src__proj_wkt$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = packages__wkt_parser__src__parser$46dart.src__parser;
  const process = packages__wkt_parser__src__process$46dart.src__process;
  const clean_wkt = packages__wkt_parser__src__clean_wkt$46dart.src__clean_wkt;
  const proj_wkt = packages__wkt_parser__src__proj_wkt$46dart.src__proj_wkt;
  var wkt_parser = Object.create(dart.library);
  var $removeAt = dartx.removeAt;
  var $toString = dartx.toString;
  var $insert = dartx.insert;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  wkt_parser.parseWKT = function parseWKT(wkt) {
    let lisp = parser.Parser.parseString(wkt);
    let type = dart.toString(lisp[$removeAt](0));
    let name = dart.toString(lisp[$removeAt](0));
    lisp[$insert](0, ["name", name]);
    lisp[$insert](0, ["type", type]);
    let obj = new (T.IdentityMapOfString$dynamic()).new();
    process.sExpr(lisp, obj);
    clean_wkt.cleanWKT(obj);
    let wktObj = new proj_wkt.ProjWKT.new(obj);
    return wktObj;
  };
  dart.trackLibraries("packages/wkt_parser/wkt_parser.dart", {
    "package:wkt_parser/wkt_parser.dart": wkt_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["wkt_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;0CAUwB;AAClB,eAAc,0BAAY,GAAG;AAC7B,eAAwB,cAAjB,AAAK,IAAD,YAAU;AACrB,eAAwB,cAAjB,AAAK,IAAD,YAAU;AACc,IAAvC,AAAK,IAAD,UAAQ,GAAY,CAAC,QAAQ,IAAI;AACE,IAAvC,AAAK,IAAD,UAAQ,GAAY,CAAC,QAAQ,IAAI;AACjC,cAAuB;AACH,IAAhB,cAAM,IAAI,EAAE,GAAG;AACA,IAAb,mBAAS,GAAG;AAClB,iBAAS,yBAAQ,GAAG;AACxB,UAAO,OAAM;EACf","file":"../../../../../../../../../../packages/wkt_parser/wkt_parser.dart.lib.js"}');
  // Exports:
  return {
    wkt_parser: wkt_parser
  };
}));

//# sourceMappingURL=wkt_parser.dart.lib.js.map
