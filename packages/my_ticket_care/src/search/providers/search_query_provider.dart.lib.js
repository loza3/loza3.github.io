define(['dart_sdk', 'packages/riverpod/src/value_provider.dart'], (function load__packages__my_ticket_care__src__search__providers__search_query_provider_dart(dart_sdk, packages__riverpod__src__value_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const state_provider = packages__riverpod__src__value_provider$46dart.src__state_provider;
  var search_query_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StateProviderOfString: () => (T.StateProviderOfString = dart.constFn(state_provider.StateProvider$(core.String)))(),
    StateProviderRefOfString: () => (T.StateProviderRefOfString = dart.constFn(state_provider.StateProviderRef$(core.String)))(),
    StateProviderRefOfStringToString: () => (T.StateProviderRefOfStringToString = dart.constFn(dart.fnType(core.String, [T.StateProviderRefOfString()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(search_query_provider, {
    /*search_query_provider.searchQueryProvider*/get searchQueryProvider() {
      return new (T.StateProviderOfString()).new(dart.fn(ref => "", T.StateProviderRefOfStringToString()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/search/providers/search_query_provider.dart", {
    "package:my_ticket_care/src/search/providers/search_query_provider.dart": search_query_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_query_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAIM,yCAAmB;YAAG,qCAAsB,QAAC,OAAQ","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/providers/search_query_provider.dart.lib.js"}');
  // Exports:
  return {
    src__search__providers__search_query_provider: search_query_provider
  };
}));

//# sourceMappingURL=search_query_provider.dart.lib.js.map
