define(['dart_sdk'], (function load__packages__my_ticket_care__src__shared__shared_constants__shared_url_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var shared_url = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(shared_url, {
    /*shared_url.urlMyTicket*/get urlMyTicket() {
      return "https://myticketappservice.azurewebsites.net/api/";
    },
    /*shared_url.urlBooking*/get urlBooking() {
      return "https://myticketbookingservice.azurewebsites.net/api/";
    },
    /*shared_url.urlManaging*/get urlManaging() {
      return "https://myticketmanagingservice.azurewebsites.net/api/";
    },
    /*shared_url.urlLogin*/get urlLogin() {
      return "https://myticketauthservice.azurewebsites.net/api/";
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_constants/shared_url.dart", {
    "package:my_ticket_care/src/shared/shared_constants/shared_url.dart": shared_url
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_url.dart"],"names":[],"mappings":";;;;;;;;;;;;MAAM,sBAAW;;;MAEX,qBAAU;;;MAEV,sBAAW;;;MAEX,mBAAQ","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_constants/shared_url.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_constants__shared_url: shared_url
  };
}));

//# sourceMappingURL=shared_url.dart.lib.js.map
