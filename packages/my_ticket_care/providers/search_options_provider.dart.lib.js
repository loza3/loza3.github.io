define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__providers__search_options_provider_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var search_options_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/search_options_provider.dart"];
  var showAdvancedOptions = dart.privateName(search_options_provider, "SearchOptionsProvider.showAdvancedOptions");
  var showOffices = dart.privateName(search_options_provider, "SearchOptionsProvider.showOffices");
  var showServices = dart.privateName(search_options_provider, "SearchOptionsProvider.showServices");
  var showEmployees = dart.privateName(search_options_provider, "SearchOptionsProvider.showEmployees");
  var seeMoreOffices = dart.privateName(search_options_provider, "SearchOptionsProvider.seeMoreOffices");
  var seeMoreServices = dart.privateName(search_options_provider, "SearchOptionsProvider.seeMoreServices");
  var seeMoreEmployees = dart.privateName(search_options_provider, "SearchOptionsProvider.seeMoreEmployees");
  search_options_provider.SearchOptionsProvider = class SearchOptionsProvider extends change_notifier.ChangeNotifier {
    get showAdvancedOptions() {
      return this[showAdvancedOptions];
    }
    set showAdvancedOptions(value) {
      this[showAdvancedOptions] = value;
    }
    get showOffices() {
      return this[showOffices];
    }
    set showOffices(value) {
      this[showOffices] = value;
    }
    get showServices() {
      return this[showServices];
    }
    set showServices(value) {
      this[showServices] = value;
    }
    get showEmployees() {
      return this[showEmployees];
    }
    set showEmployees(value) {
      this[showEmployees] = value;
    }
    get seeMoreOffices() {
      return this[seeMoreOffices];
    }
    set seeMoreOffices(value) {
      this[seeMoreOffices] = value;
    }
    get seeMoreServices() {
      return this[seeMoreServices];
    }
    set seeMoreServices(value) {
      this[seeMoreServices] = value;
    }
    get seeMoreEmployees() {
      return this[seeMoreEmployees];
    }
    set seeMoreEmployees(value) {
      this[seeMoreEmployees] = value;
    }
    toggleAdvancedOptions() {
      this.showAdvancedOptions = !this.showAdvancedOptions;
      this.notifyListeners();
    }
    setShowOffices(val) {
      this.showOffices = val;
      this.notifyListeners();
    }
    setShowServices(val) {
      this.showServices = val;
      this.notifyListeners();
    }
    setShowEmployees(val) {
      this.showEmployees = val;
      this.notifyListeners();
    }
    toggleSeeMoreOffices() {
      this.seeMoreEmployees = !this.seeMoreEmployees;
      this.notifyListeners();
    }
    toggleSeeMoreServices() {
      this.seeMoreServices = !this.seeMoreServices;
      this.notifyListeners();
    }
    toggleSeeMoreEmployees() {
      this.seeMoreEmployees = !this.seeMoreEmployees;
      this.notifyListeners();
    }
    static ['_#new#tearOff']() {
      return new search_options_provider.SearchOptionsProvider.new();
    }
  };
  (search_options_provider.SearchOptionsProvider.new = function() {
    this[showAdvancedOptions] = false;
    this[showOffices] = true;
    this[showServices] = true;
    this[showEmployees] = true;
    this[seeMoreOffices] = false;
    this[seeMoreServices] = false;
    this[seeMoreEmployees] = false;
    search_options_provider.SearchOptionsProvider.__proto__.new.call(this);
    ;
  }).prototype = search_options_provider.SearchOptionsProvider.prototype;
  dart.addTypeTests(search_options_provider.SearchOptionsProvider);
  dart.addTypeCaches(search_options_provider.SearchOptionsProvider);
  dart.setMethodSignature(search_options_provider.SearchOptionsProvider, () => ({
    __proto__: dart.getMethods(search_options_provider.SearchOptionsProvider.__proto__),
    toggleAdvancedOptions: dart.fnType(dart.void, []),
    setShowOffices: dart.fnType(dart.void, [core.bool]),
    setShowServices: dart.fnType(dart.void, [core.bool]),
    setShowEmployees: dart.fnType(dart.void, [core.bool]),
    toggleSeeMoreOffices: dart.fnType(dart.void, []),
    toggleSeeMoreServices: dart.fnType(dart.void, []),
    toggleSeeMoreEmployees: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(search_options_provider.SearchOptionsProvider, I[0]);
  dart.setFieldSignature(search_options_provider.SearchOptionsProvider, () => ({
    __proto__: dart.getFields(search_options_provider.SearchOptionsProvider.__proto__),
    showAdvancedOptions: dart.fieldType(core.bool),
    showOffices: dart.fieldType(core.bool),
    showServices: dart.fieldType(core.bool),
    showEmployees: dart.fieldType(core.bool),
    seeMoreOffices: dart.fieldType(core.bool),
    seeMoreServices: dart.fieldType(core.bool),
    seeMoreEmployees: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/my_ticket_care/providers/search_options_provider.dart", {
    "package:my_ticket_care/providers/search_options_provider.dart": search_options_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_options_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAGO;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;;AAGuC,MAA1C,4BAAuB;AAEN,MAAjB;IACF;mBAEyB;AACN,MAAjB,mBAAc,GAAG;AACA,MAAjB;IACF;oBAE0B;AACN,MAAlB,oBAAe,GAAG;AACD,MAAjB;IACF;qBAE2B;AACN,MAAnB,qBAAgB,GAAG;AACF,MAAjB;IACF;;AAGsC,MAApC,yBAAoB;AACH,MAAjB;IACF;;AAGoC,MAAlC,wBAAmB;AACF,MAAjB;IACF;;AAGsC,MAApC,yBAAoB;AACH,MAAjB;IACF;;;;;;IA5CK,4BAAsB;IAEtB,oBAAc;IACd,qBAAe;IACf,sBAAgB;IAEhB,uBAAiB;IACjB,wBAAkB;IAClB,yBAAmB;;;EAqC1B","file":"../../../../../../../../../packages/my_ticket_care/providers/search_options_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__search_options_provider: search_options_provider
  };
}));

//# sourceMappingURL=search_options_provider.dart.lib.js.map
