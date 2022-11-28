define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__providers__client_provider_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var client_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/client_provider.dart"];
  client_provider.ClientProvider = class ClientProvider extends change_notifier.ChangeNotifier {
    static ['_#new#tearOff']() {
      return new client_provider.ClientProvider.new();
    }
  };
  (client_provider.ClientProvider.new = function() {
    client_provider.ClientProvider.__proto__.new.call(this);
    ;
  }).prototype = client_provider.ClientProvider.prototype;
  dart.addTypeTests(client_provider.ClientProvider);
  dart.addTypeCaches(client_provider.ClientProvider);
  dart.setLibraryUri(client_provider.ClientProvider, I[0]);
  dart.trackLibraries("packages/my_ticket_care/providers/client_provider.dart", {
    "package:my_ticket_care/providers/client_provider.dart": client_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["client_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;EAcA","file":"../../../../../../../../../packages/my_ticket_care/providers/client_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__client_provider: client_provider
  };
}));

//# sourceMappingURL=client_provider.dart.lib.js.map
