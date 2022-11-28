define(['dart_sdk', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/search/repository/search_related_data_repository.dart', 'packages/my_ticket_care/src/search/repository/search_data_repository.dart', 'packages/my_ticket_care/src/shared/models/office.dart'], (function load__packages__my_ticket_care__src__search__providers__fetch_related_data_provider_dart(dart_sdk, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__search__repository__search_related_data_repository$46dart, packages__my_ticket_care__src__search__repository__search_data_repository$46dart, packages__my_ticket_care__src__shared__models__office$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const future_provider = packages__riverpod__src__value_provider$46dart.src__future_provider;
  const search_related_data_repository = packages__my_ticket_care__src__search__repository__search_related_data_repository$46dart.src__search__repository__search_related_data_repository;
  const search_data_repository = packages__my_ticket_care__src__search__repository__search_data_repository$46dart.src__search__repository__search_data_repository;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  var fetch_related_data_provider = Object.create(dart.library);
  var $_get = dartx._get;
  var $length = dartx.length;
  var $firstWhere = dartx.firstWhere;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfOffice: () => (T.ListOfOffice = dart.constFn(core.List$(office.Office)))(),
    OfficeTobool: () => (T.OfficeTobool = dart.constFn(dart.fnType(core.bool, [office.Office])))(),
    FutureOfListOfOffice: () => (T.FutureOfListOfOffice = dart.constFn(async.Future$(T.ListOfOffice())))(),
    FutureProviderRefOfList: () => (T.FutureProviderRefOfList = dart.constFn(future_provider.FutureProviderRef$(core.List)))(),
    FutureProviderRefOfListAndintToFutureOfListOfOffice: () => (T.FutureProviderRefOfListAndintToFutureOfListOfOffice = dart.constFn(dart.fnType(T.FutureOfListOfOffice(), [T.FutureProviderRefOfList(), core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(fetch_related_data_provider, {
    /*fetch_related_data_provider.fetchOfficesFromServiceProvider*/get fetchOfficesFromServiceProvider() {
      return future_provider.FutureProvider.family.call(core.List, core.int, dart.fn((ref, serviceId) => async.async(T.ListOfOffice(), function*() {
        let api = new search_related_data_repository.SearchRelatedDataRepositoryHTTP.new();
        let offices = (yield api.fetchOfficesFromServiceId(serviceId));
        let all = (yield new search_data_repository.FetchDataRepositoryHTTP.new().fetchAllData());
        let allOffices = T.ListOfOffice().as(all[$_get](1));
        for (let i = 0; i < offices[$length]; i = i + 1) {
          let officeId = offices[$_get](i).officeId;
          offices[$_set](i, allOffices[$firstWhere](dart.fn(o => o.officeId === officeId, T.OfficeTobool())));
        }
        return offices;
      }), T.FutureProviderRefOfListAndintToFutureOfListOfOffice()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/search/providers/fetch_related_data_provider.dart", {
    "package:my_ticket_care/src/search/providers/fetch_related_data_provider.dart": fetch_related_data_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fetch_related_data_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;MAMM,2DAA+B;YAClB,AAAM,iEAAY,SAAC,KAAK;AACnC,kBAAM;AACN,uBAAU,MAAM,AAAI,GAAD,2BAA2B,SAAS;AAEvD,mBAAM,MAAM,AAA0B;AAC/B,6CAAa,AAAG,GAAA,QAAC;AAE9B,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAQ,OAAD,WAAS,IAAA,AAAC,CAAA;AAC/B,yBAAW,AAAO,AAAI,OAAJ,QAAC,CAAC;AACyC,UAAjE,AAAO,OAAA,QAAC,CAAC,EAAI,AAAW,UAAD,cAAY,QAAC,KAAM,AAAE,AAAS,CAAV,cAAa,QAAQ;;AAElE,cAAO,QAAO;MACf","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/providers/fetch_related_data_provider.dart.lib.js"}');
  // Exports:
  return {
    src__search__providers__fetch_related_data_provider: fetch_related_data_provider
  };
}));

//# sourceMappingURL=fetch_related_data_provider.dart.lib.js.map
