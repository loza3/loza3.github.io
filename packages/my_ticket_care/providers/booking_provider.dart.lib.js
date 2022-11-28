define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__providers__booking_provider_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var booking_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/booking_provider.dart"];
  var _isSelectIndexService = dart.privateName(booking_provider, "_isSelectIndexService");
  var _isSelectIndexOffert = dart.privateName(booking_provider, "_isSelectIndexOffert");
  var _isSelectOffert = dart.privateName(booking_provider, "_isSelectOffert");
  booking_provider.BookingProvider = class BookingProvider extends change_notifier.ChangeNotifier {
    get isSelectIndexService() {
      return this[_isSelectIndexService];
    }
    set isSelectIndexService(isSelectIndexService) {
      this[_isSelectIndexService] = isSelectIndexService;
      this.notifyListeners();
    }
    get isSelectIndexOffert() {
      return this[_isSelectIndexOffert];
    }
    set isSelectIndexOffert(isSelectIndexOffert) {
      this[_isSelectIndexOffert] = isSelectIndexOffert;
      this.notifyListeners();
    }
    get isSelectOffert() {
      return this[_isSelectOffert];
    }
    set isSelectOffert(isSelectOffert) {
      this[_isSelectOffert] = isSelectOffert;
      this.notifyListeners();
    }
    static ['_#new#tearOff']() {
      return new booking_provider.BookingProvider.new();
    }
  };
  (booking_provider.BookingProvider.new = function() {
    this[_isSelectIndexService] = 0;
    this[_isSelectIndexOffert] = 0;
    this[_isSelectOffert] = false;
    booking_provider.BookingProvider.__proto__.new.call(this);
    ;
  }).prototype = booking_provider.BookingProvider.prototype;
  dart.addTypeTests(booking_provider.BookingProvider);
  dart.addTypeCaches(booking_provider.BookingProvider);
  dart.setGetterSignature(booking_provider.BookingProvider, () => ({
    __proto__: dart.getGetters(booking_provider.BookingProvider.__proto__),
    isSelectIndexService: core.int,
    isSelectIndexOffert: core.int,
    isSelectOffert: core.bool
  }));
  dart.setSetterSignature(booking_provider.BookingProvider, () => ({
    __proto__: dart.getSetters(booking_provider.BookingProvider.__proto__),
    isSelectIndexService: core.int,
    isSelectIndexOffert: core.int,
    isSelectOffert: core.bool
  }));
  dart.setLibraryUri(booking_provider.BookingProvider, I[0]);
  dart.setFieldSignature(booking_provider.BookingProvider, () => ({
    __proto__: dart.getFields(booking_provider.BookingProvider.__proto__),
    [_isSelectIndexService]: dart.fieldType(core.int),
    [_isSelectIndexOffert]: dart.fieldType(core.int),
    [_isSelectOffert]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/my_ticket_care/providers/booking_provider.dart", {
    "package:my_ticket_care/providers/booking_provider.dart": booking_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["booking_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAQkC;IAAqB;6BACxB;AACiB,MAA5C,8BAAwB,oBAAoB;AAC3B,MAAjB;IACF;;AAE+B;IAAoB;4BACvB;AACgB,MAA1C,6BAAuB,mBAAmB;AACzB,MAAjB;IACF;;AAE2B;IAAe;uBAClB;AACU,MAAhC,wBAAkB,cAAc;AACf,MAAjB;IACF;;;;;;IApBI,8BAAwB;IACxB,6BAAwB;IACvB,wBAAkB;;;EAmBzB","file":"../../../../../../../../../packages/my_ticket_care/providers/booking_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__booking_provider: booking_provider
  };
}));

//# sourceMappingURL=booking_provider.dart.lib.js.map
