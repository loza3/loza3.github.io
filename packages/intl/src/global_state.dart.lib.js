define(['dart_sdk'], (function load__packages__intl__src__global_state_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var global_state = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(new _internal.Symbol.new('Intl.locale'));
    }
  }, false);
  var C = [void 0];
  global_state.getCurrentLocale = function getCurrentLocale() {
    global_state.defaultLocale == null ? global_state.defaultLocale = global_state.systemLocale : null;
    return dart.nullCheck(global_state.defaultLocale);
  };
  dart.copyProperties(global_state, {
    set defaultLocale(newLocale) {
      global_state._defaultLocale = newLocale;
    },
    get defaultLocale() {
      let zoneLocale = T.StringN().as(async.Zone.current._get(C[0] || CT.C0));
      return zoneLocale == null ? global_state._defaultLocale : zoneLocale;
    }
  });
  dart.defineLazy(global_state, {
    /*global_state.systemLocale*/get systemLocale() {
      return "en_US";
    },
    set systemLocale(_) {},
    /*global_state._defaultLocale*/get _defaultLocale() {
      return null;
    },
    set _defaultLocale(_) {}
  }, false);
  dart.trackLibraries("packages/intl/src/global_state.dart", {
    "package:intl/src/global_state.dart": global_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["global_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAgBgC,IAA9B,AAAc,qCAAA,6BAAI,4BAAJ;AACd,UAAoB,gBAAb;EACT;;sBAZ0B;AACE,MAA1B,8BAAiB,SAAS;IAC5B;;AAGM,uBAAwC,eAAtB,AAAO;AAC7B,YAAO,AAAW,WAAD,WAAW,8BAAiB,UAAU;IACzD;;;MAXO,yBAAY;YAAG;;;MAEd,2BAAc","file":"../../../../../../../../../../../packages/intl/src/global_state.dart.lib.js"}');
  // Exports:
  return {
    src__global_state: global_state
  };
}));

//# sourceMappingURL=global_state.dart.lib.js.map
