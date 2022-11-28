define(['dart_sdk', 'packages/riverpod/src/value_provider.dart', 'packages/my_ticket_care/src/shared/models/person.dart'], (function load__packages__my_ticket_care__src__login__providers__user_data_provider_dart(dart_sdk, packages__riverpod__src__value_provider$46dart, packages__my_ticket_care__src__shared__models__person$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const state_provider = packages__riverpod__src__value_provider$46dart.src__state_provider;
  const person = packages__my_ticket_care__src__shared__models__person$46dart.src__shared__models__person;
  var user_data_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    StateProviderOfPerson: () => (T.StateProviderOfPerson = dart.constFn(state_provider.StateProvider$(person.Person)))(),
    StateProviderRefOfPerson: () => (T.StateProviderRefOfPerson = dart.constFn(state_provider.StateProviderRef$(person.Person)))(),
    StateProviderRefOfPersonToPerson: () => (T.StateProviderRefOfPersonToPerson = dart.constFn(dart.fnType(person.Person, [T.StateProviderRefOfPerson()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(user_data_provider, {
    /*user_data_provider.userDataProvider*/get userDataProvider() {
      return new (T.StateProviderOfPerson()).new(dart.fn(ref => person.Person.empty(), T.StateProviderRefOfPersonToPerson()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/login/providers/user_data_provider.dart", {
    "package:my_ticket_care/src/login/providers/user_data_provider.dart": user_data_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["user_data_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAIM,mCAAgB;YAAG,qCAAsB,QAAC,OAChC","file":"../../../../../../../../../../../packages/my_ticket_care/src/login/providers/user_data_provider.dart.lib.js"}');
  // Exports:
  return {
    src__login__providers__user_data_provider: user_data_provider
  };
}));

//# sourceMappingURL=user_data_provider.dart.lib.js.map
