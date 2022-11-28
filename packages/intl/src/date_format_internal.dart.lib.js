define(['dart_sdk', 'packages/intl/src/intl_helpers.dart', 'packages/intl/date_symbols.dart'], (function load__packages__intl__src__date_format_internal_dart(dart_sdk, packages__intl__src__intl_helpers$46dart, packages__intl__date_symbols$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl_helpers = packages__intl__src__intl_helpers$46dart.src__intl_helpers;
  const date_symbols = packages__intl__date_symbols$46dart.date_symbols;
  var date_format_internal = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    UninitializedLocaleDataOfDateSymbols: () => (T.UninitializedLocaleDataOfDateSymbols = dart.constFn(intl_helpers.UninitializedLocaleData$(date_symbols.DateSymbols)))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    UninitializedLocaleDataOfMapOfString$String: () => (T.UninitializedLocaleDataOfMapOfString$String = dart.constFn(intl_helpers.UninitializedLocaleData$(T.MapOfString$String())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  date_format_internal.initializeDateSymbols = function initializeDateSymbols(symbols) {
    if (intl_helpers.UninitializedLocaleData.is(date_format_internal.dateTimeSymbols)) {
      date_format_internal.dateTimeSymbols = dart.dcall(symbols, []);
    }
  };
  date_format_internal.initializeDatePatterns = function initializeDatePatterns(patterns) {
    if (intl_helpers.UninitializedLocaleData.is(date_format_internal.dateTimePatterns)) {
      date_format_internal.dateTimePatterns = dart.dcall(patterns, []);
    }
  };
  date_format_internal.initializeIndividualLocaleDateFormatting = function initializeIndividualLocaleDateFormatting(init) {
    return async.Future.as(dart.dcall(init, [date_format_internal.dateTimeSymbols, date_format_internal.dateTimePatterns]));
  };
  dart.copyProperties(date_format_internal, {
    get dateTimeSymbols() {
      return date_format_internal._dateTimeSymbols;
    },
    set dateTimeSymbols(symbols) {
      date_format_internal._dateTimeSymbols = symbols;
      date_format_internal.cachedDateSymbols = null;
      date_format_internal.lastDateSymbolLocale = null;
    }
  });
  dart.defineLazy(date_format_internal, {
    /*date_format_internal._dateTimeSymbols*/get _dateTimeSymbols() {
      return new (T.UninitializedLocaleDataOfDateSymbols()).new("initializeDateFormatting(<locale>)", date_symbols.en_USSymbols);
    },
    set _dateTimeSymbols(_) {},
    /*date_format_internal.cachedDateSymbols*/get cachedDateSymbols() {
      return null;
    },
    set cachedDateSymbols(_) {},
    /*date_format_internal.lastDateSymbolLocale*/get lastDateSymbolLocale() {
      return null;
    },
    set lastDateSymbolLocale(_) {},
    /*date_format_internal.dateTimePatterns*/get dateTimePatterns() {
      return new (T.UninitializedLocaleDataOfMapOfString$String()).new("initializeDateFormatting(<locale>)", date_symbols.en_USPatterns);
    },
    set dateTimePatterns(_) {}
  }, false);
  dart.trackLibraries("packages/intl/src/date_format_internal.dart", {
    "package:intl/src/date_format_internal.dart": date_format_internal
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_format_internal.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;8EA6DoC;AAClC,QAAoB,wCAAhB;AACyB,MAA3B,uCAAyB,WAAP,OAAO;;EAE7B;gFAMqC;AACnC,QAAqB,wCAAjB;AAC2B,MAA7B,wCAA2B,WAAR,QAAQ;;EAE/B;oHAEkE;AAChE,2BAAW,WAAJ,IAAI,GAAC,sCAAiB;EAC/B;;;AAvD+B;IAAgB;wBAGnB;AAMA,MAA1B,wCAAmB,OAAO;AACF,MAAxB,yCAAoB;AACO,MAA3B,4CAAuB;IACzB;;;MAEQ,qCAAgB;YACpB,oDAAwB,sCAAsC;;;MAGrD,sCAAiB;;;;MAGtB,yCAAoB;;;;MASpB,qCAAgB;YAAG,2DACvB,sCAAsC","file":"../../../../../../../../../../../packages/intl/src/date_format_internal.dart.lib.js"}');
  // Exports:
  return {
    src__date_format_internal: date_format_internal
  };
}));

//# sourceMappingURL=date_format_internal.dart.lib.js.map
