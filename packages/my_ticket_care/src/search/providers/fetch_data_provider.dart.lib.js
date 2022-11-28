define(['dart_sdk', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/search/repository/search_data_repository.dart'], (function load__packages__my_ticket_care__src__search__providers__fetch_data_provider_dart(dart_sdk, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__search__repository__search_data_repository$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const future_provider = packages__riverpod__src__value_provider$46dart.src__future_provider;
  const search_data_repository = packages__my_ticket_care__src__search__repository__search_data_repository$46dart.src__search__repository__search_data_repository;
  var fetch_data_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureProviderOfList: () => (T.FutureProviderOfList = dart.constFn(future_provider.FutureProvider$(core.List)))(),
    FutureOfList: () => (T.FutureOfList = dart.constFn(async.Future$(core.List)))(),
    FutureProviderRefOfList: () => (T.FutureProviderRefOfList = dart.constFn(future_provider.FutureProviderRef$(core.List)))(),
    FutureProviderRefOfListToFutureOfList: () => (T.FutureProviderRefOfListToFutureOfList = dart.constFn(dart.fnType(T.FutureOfList(), [T.FutureProviderRefOfList()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(fetch_data_provider, {
    /*fetch_data_provider.fetchAllDataProvider*/get fetchAllDataProvider() {
      return new (T.FutureProviderOfList()).new(dart.fn(ref => async.async(core.List, function*() {
        let data = (yield new search_data_repository.FetchDataRepositoryHTTP.new().fetchAllData());
        return data;
      }), T.FutureProviderRefOfListToFutureOfList()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/search/providers/fetch_data_provider.dart", {
    "package:my_ticket_care/src/search/providers/fetch_data_provider.dart": fetch_data_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fetch_data_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAIM,wCAAoB;YAAG,oCAC3B,QAAC;AACO,oBAAO,MAAM,AAA0B;AAC7C,cAAO,KAAI;MACZ","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/providers/fetch_data_provider.dart.lib.js"}');
  // Exports:
  return {
    src__search__providers__fetch_data_provider: fetch_data_provider
  };
}));

//# sourceMappingURL=fetch_data_provider.dart.lib.js.map
