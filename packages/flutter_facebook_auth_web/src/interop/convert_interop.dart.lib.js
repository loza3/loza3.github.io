define(['dart_sdk'], (function load__packages__flutter_facebook_auth_web__src__interop__convert_interop_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var convert_interop = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  convert_interop.convert = function convert$(object) {
    return T.MapOfString$dynamic().as(convert.jsonDecode(dart.global.JSON.stringify(core.Object.as(object))));
  };
  dart.trackLibraries("packages/flutter_facebook_auth_web/src/interop/convert_interop.dart", {
    "package:flutter_facebook_auth_web/src/interop/convert_interop.dart": convert_interop
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["convert_interop.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;8CAWqC;AACnC,sCAAO,mBAAW,0CAAU,MAAM;EACpC","file":"../../../../../../../../../../../../packages/flutter_facebook_auth_web/src/interop/convert_interop.dart.lib.js"}');
  // Exports:
  return {
    src__interop__convert_interop: convert_interop
  };
}));

//# sourceMappingURL=convert_interop.dart.lib.js.map
