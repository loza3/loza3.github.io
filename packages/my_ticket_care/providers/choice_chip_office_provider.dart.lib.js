define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__providers__choice_chip_office_provider_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var choice_chip_office_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/choice_chip_office_provider.dart"];
  var _currentIndex = dart.privateName(choice_chip_office_provider, "_currentIndex");
  choice_chip_office_provider.ChoiceChipOfficeProvider = class ChoiceChipOfficeProvider extends change_notifier.ChangeNotifier {
    get index() {
      return this[_currentIndex];
    }
    changeIndex(idx) {
      if (idx !== this[_currentIndex]) {
        this[_currentIndex] = idx;
        this.notifyListeners();
      }
    }
    static ['_#new#tearOff']() {
      return new choice_chip_office_provider.ChoiceChipOfficeProvider.new();
    }
  };
  (choice_chip_office_provider.ChoiceChipOfficeProvider.new = function() {
    this[_currentIndex] = 0;
    choice_chip_office_provider.ChoiceChipOfficeProvider.__proto__.new.call(this);
    ;
  }).prototype = choice_chip_office_provider.ChoiceChipOfficeProvider.prototype;
  dart.addTypeTests(choice_chip_office_provider.ChoiceChipOfficeProvider);
  dart.addTypeCaches(choice_chip_office_provider.ChoiceChipOfficeProvider);
  dart.setMethodSignature(choice_chip_office_provider.ChoiceChipOfficeProvider, () => ({
    __proto__: dart.getMethods(choice_chip_office_provider.ChoiceChipOfficeProvider.__proto__),
    changeIndex: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(choice_chip_office_provider.ChoiceChipOfficeProvider, () => ({
    __proto__: dart.getGetters(choice_chip_office_provider.ChoiceChipOfficeProvider.__proto__),
    index: core.int
  }));
  dart.setLibraryUri(choice_chip_office_provider.ChoiceChipOfficeProvider, I[0]);
  dart.setFieldSignature(choice_chip_office_provider.ChoiceChipOfficeProvider, () => ({
    __proto__: dart.getFields(choice_chip_office_provider.ChoiceChipOfficeProvider.__proto__),
    [_currentIndex]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/my_ticket_care/providers/choice_chip_office_provider.dart", {
    "package:my_ticket_care/providers/choice_chip_office_provider.dart": choice_chip_office_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["choice_chip_office_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAImB;IAAa;gBAET;AACnB,UAAI,GAAG,KAAI;AACU,QAAnB,sBAAgB,GAAG;AACF,QAAjB;;IAEJ;;;;;;IARI,sBAAgB;;;EAStB","file":"../../../../../../../../../packages/my_ticket_care/providers/choice_chip_office_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__choice_chip_office_provider: choice_chip_office_provider
  };
}));

//# sourceMappingURL=choice_chip_office_provider.dart.lib.js.map
