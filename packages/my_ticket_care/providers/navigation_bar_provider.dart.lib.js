define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__my_ticket_care__providers__navigation_bar_provider_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var navigation_bar_provider = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/providers/navigation_bar_provider.dart"];
  var _currentIndex = dart.privateName(navigation_bar_provider, "_currentIndex");
  navigation_bar_provider.NavigationBarProvider = class NavigationBarProvider extends change_notifier.ChangeNotifier {
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
      return new navigation_bar_provider.NavigationBarProvider.new();
    }
  };
  (navigation_bar_provider.NavigationBarProvider.new = function() {
    this[_currentIndex] = 0;
    navigation_bar_provider.NavigationBarProvider.__proto__.new.call(this);
    ;
  }).prototype = navigation_bar_provider.NavigationBarProvider.prototype;
  dart.addTypeTests(navigation_bar_provider.NavigationBarProvider);
  dart.addTypeCaches(navigation_bar_provider.NavigationBarProvider);
  dart.setMethodSignature(navigation_bar_provider.NavigationBarProvider, () => ({
    __proto__: dart.getMethods(navigation_bar_provider.NavigationBarProvider.__proto__),
    changeIndex: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(navigation_bar_provider.NavigationBarProvider, () => ({
    __proto__: dart.getGetters(navigation_bar_provider.NavigationBarProvider.__proto__),
    index: core.int
  }));
  dart.setLibraryUri(navigation_bar_provider.NavigationBarProvider, I[0]);
  dart.setFieldSignature(navigation_bar_provider.NavigationBarProvider, () => ({
    __proto__: dart.getFields(navigation_bar_provider.NavigationBarProvider.__proto__),
    [_currentIndex]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/my_ticket_care/providers/navigation_bar_provider.dart", {
    "package:my_ticket_care/providers/navigation_bar_provider.dart": navigation_bar_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigation_bar_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAImB;IAAa;gBAET;AACnB,UAAI,GAAG,KAAI;AACU,QAAnB,sBAAgB,GAAG;AACF,QAAjB;;IAEJ;;;;;;IARI,sBAAgB;;;EAStB","file":"../../../../../../../../../packages/my_ticket_care/providers/navigation_bar_provider.dart.lib.js"}');
  // Exports:
  return {
    providers__navigation_bar_provider: navigation_bar_provider
  };
}));

//# sourceMappingURL=navigation_bar_provider.dart.lib.js.map
