define(['dart_sdk', 'packages/http/src/multipart_request.dart', 'packages/my_ticket_care/src/shared/shared_constants/shared_url.dart', 'packages/my_ticket_care/src/shared/models/office.dart', 'packages/my_ticket_care/src/shared/shared_utilities/base_repository.dart'], (function load__packages__my_ticket_care__src__search__repository__search_related_data_repository_dart(dart_sdk, packages__http__src__multipart_request$46dart, packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart, packages__my_ticket_care__src__shared__models__office$46dart, packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__src__multipart_request$46dart.http;
  const shared_url = packages__my_ticket_care__src__shared__shared_constants__shared_url$46dart.src__shared__shared_constants__shared_url;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  const base_repository = packages__my_ticket_care__src__shared__shared_utilities__base_repository$46dart.src__shared__shared_utilities__base_repository;
  var search_related_data_repository = Object.create(dart.library);
  var $toString = dartx.toString;
  var $addAll = dartx.addAll;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    dynamicToOffice: () => (T.dynamicToOffice = dart.constFn(dart.fnType(office.Office, [dart.dynamic])))(),
    ListOfOffice: () => (T.ListOfOffice = dart.constFn(core.List$(office.Office)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/src/search/repository/search_related_data_repository.dart"];
  search_related_data_repository.SearchRelatedDataRepository = class SearchRelatedDataRepository extends core.Object {};
  (search_related_data_repository.SearchRelatedDataRepository.new = function() {
    ;
  }).prototype = search_related_data_repository.SearchRelatedDataRepository.prototype;
  dart.addTypeTests(search_related_data_repository.SearchRelatedDataRepository);
  dart.addTypeCaches(search_related_data_repository.SearchRelatedDataRepository);
  dart.setLibraryUri(search_related_data_repository.SearchRelatedDataRepository, I[0]);
  search_related_data_repository.SearchRelatedDataRepositoryHTTP = class SearchRelatedDataRepositoryHTTP extends base_repository.BaseRepository {
    fetchOfficesFromServiceId(serviceId) {
      return async.async(T.ListOfOffice(), (function* fetchOfficesFromServiceId() {
        let header = T.LinkedHashMapOfString$String().from(this.defaultHeader);
        header[$addAll](new (T.IdentityMapOfString$String()).from(["ServiceId", serviceId[$toString]()]));
        let response = (yield http.get(core.Uri.parse(shared_url.urlManaging + "Service/GetOffices"), {headers: header}));
        let json = response.body;
        let officesJson = core.List.as(dart.dsend(dart.dsend(convert.jsonDecode(json), '_get', ["data"]), '_get', ["offices"]));
        let offices = officesJson[$map](office.Office, dart.fn(e => office.Office.fromMap(T.MapOfString$dynamic().as(e)), T.dynamicToOffice()))[$toList]();
        return offices;
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new search_related_data_repository.SearchRelatedDataRepositoryHTTP.new();
    }
  };
  (search_related_data_repository.SearchRelatedDataRepositoryHTTP.new = function() {
    search_related_data_repository.SearchRelatedDataRepositoryHTTP.__proto__.new.call(this);
    ;
  }).prototype = search_related_data_repository.SearchRelatedDataRepositoryHTTP.prototype;
  dart.addTypeTests(search_related_data_repository.SearchRelatedDataRepositoryHTTP);
  dart.addTypeCaches(search_related_data_repository.SearchRelatedDataRepositoryHTTP);
  search_related_data_repository.SearchRelatedDataRepositoryHTTP[dart.implements] = () => [search_related_data_repository.SearchRelatedDataRepository];
  dart.setMethodSignature(search_related_data_repository.SearchRelatedDataRepositoryHTTP, () => ({
    __proto__: dart.getMethods(search_related_data_repository.SearchRelatedDataRepositoryHTTP.__proto__),
    fetchOfficesFromServiceId: dart.fnType(async.Future$(core.List$(office.Office)), [core.int])
  }));
  dart.setLibraryUri(search_related_data_repository.SearchRelatedDataRepositoryHTTP, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/search/repository/search_related_data_repository.dart", {
    "package:my_ticket_care/src/search/repository/search_related_data_repository.dart": search_related_data_repository
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_related_data_repository.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAUA;;;;;8BAKqD;AAAL;AACxB,qBAAa,sCAAK;AACY,QAAlD,AAAO,MAAD,UAAQ,2CAAC,aAAa,AAAU,SAAD;AAC5B,wBAAW,MAAM,SACpB,eAAS,AAA+B,yBAAnB,iCAChB,MAAM;AAGV,mBAAO,AAAS,QAAD;AACjB,0BAAkD,aAAZ,WAAR,WAAhB,mBAAW,IAAI,YAAE,mBAAQ;AAE/B,sBAAU,AAAY,AAA8B,WAA/B,sBAAK,QAAC,KAAa,iDAAQ,CAAC;AAE9D,cAAO,QAAO;MAChB;;;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/src/search/repository/search_related_data_repository.dart.lib.js"}');
  // Exports:
  return {
    src__search__repository__search_related_data_repository: search_related_data_repository
  };
}));

//# sourceMappingURL=search_related_data_repository.dart.lib.js.map
