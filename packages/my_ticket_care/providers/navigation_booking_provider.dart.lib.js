define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__providers__navigation_booking_provider_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var navigation_booking_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/navigation_booking_provider.dart"];
  var _currentIndex = dart.privateName(navigation_booking_provider, "_currentIndex");
  navigation_booking_provider.NavigationBookingProvider = class NavigationBookingProvider extends change_notifier.ChangeNotifier {
    get currentIndex() {
      return this[_currentIndex];
    }
    set currentIndex(index) {
      this[_currentIndex] = index;
      this.notifyListeners();
    }
    static ['_#new#tearOff']() {
      return new navigation_booking_provider.NavigationBookingProvider.new();
    }
  };
  (navigation_booking_provider.NavigationBookingProvider.new = function() {
    this[_currentIndex] = 0;
    navigation_booking_provider.NavigationBookingProvider.__proto__.new.call(this);
    ;
  }).prototype = navigation_booking_provider.NavigationBookingProvider.prototype;
  dart.addTypeTests(navigation_booking_provider.NavigationBookingProvider);
  dart.addTypeCaches(navigation_booking_provider.NavigationBookingProvider);
  dart.setGetterSignature(navigation_booking_provider.NavigationBookingProvider, () => ({
    __proto__: dart.getGetters(navigation_booking_provider.NavigationBookingProvider.__proto__),
    currentIndex: core.int
  }));
  dart.setSetterSignature(navigation_booking_provider.NavigationBookingProvider, () => ({
    __proto__: dart.getSetters(navigation_booking_provider.NavigationBookingProvider.__proto__),
    currentIndex: core.int
  }));
  dart.setLibraryUri(navigation_booking_provider.NavigationBookingProvider, I[0]);
  dart.setFieldSignature(navigation_booking_provider.NavigationBookingProvider, () => ({
    __proto__: dart.getFields(navigation_booking_provider.NavigationBookingProvider.__proto__),
    [_currentIndex]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/my_ticket_care/providers/navigation_booking_provider.dart", {
    "package:my_ticket_care/providers/navigation_booking_provider.dart": navigation_booking_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigation_booking_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAK0B;IAAa;qBAEhB;AACE,MAArB,sBAAgB,KAAK;AACJ,MAAjB;IACF;;;;;;IAPI,sBAAgB;;;EAQtB","file":"../../../../../../../../../packages/my_ticket_care/providers/navigation_booking_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__navigation_booking_provider: navigation_booking_provider
  };
}));

//# sourceMappingURL=navigation_booking_provider.dart.lib.js.map
