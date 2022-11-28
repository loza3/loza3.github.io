define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/provider/src/provider.dart', 'packages/provider/src/listenable_provider.dart', 'packages/my_ticket_care/providers/client_provider.dart', 'packages/my_ticket_care/providers/search_provider.dart', 'packages/my_ticket_care/providers/search_options_provider.dart', 'packages/my_ticket_care/providers/navigation_bar_provider.dart', 'packages/my_ticket_care/providers/make_booking_provider.dart', 'packages/my_ticket_care/providers/navigation_booking_provider.dart', 'packages/my_ticket_care/providers/login_from_provider.dart', 'packages/my_ticket_care/providers/booking_provider.dart', 'packages/my_ticket_care/providers/choice_chip_office_provider.dart', 'packages/my_ticket_care/src/booking/providers/booking_state.dart', 'packages/nested/nested.dart', 'packages/my_ticket_care/reusable/app_theme.dart', 'packages/flutter/src/material/app.dart', 'packages/my_ticket_care/src/login/presentation/register_facebook_screen.dart', 'packages/my_ticket_care/routes/app_routes.dart', 'packages/flutter_riverpod/src/framework.dart'], (function load__packages__my_ticket_care__main_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__provider__src__provider$46dart, packages__provider__src__listenable_provider$46dart, packages__my_ticket_care__providers__client_provider$46dart, packages__my_ticket_care__providers__search_provider$46dart, packages__my_ticket_care__providers__search_options_provider$46dart, packages__my_ticket_care__providers__navigation_bar_provider$46dart, packages__my_ticket_care__providers__make_booking_provider$46dart, packages__my_ticket_care__providers__navigation_booking_provider$46dart, packages__my_ticket_care__providers__login_from_provider$46dart, packages__my_ticket_care__providers__booking_provider$46dart, packages__my_ticket_care__providers__choice_chip_office_provider$46dart, packages__my_ticket_care__src__booking__providers__booking_state$46dart, packages__nested__nested$46dart, packages__my_ticket_care__reusable__app_theme$46dart, packages__flutter__src__material__app$46dart, packages__my_ticket_care__src__login__presentation__register_facebook_screen$46dart, packages__my_ticket_care__routes__app_routes$46dart, packages__flutter_riverpod__src__framework$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const binding = packages__flutter__src__widgets__title$46dart.src__widgets__binding;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const change_notifier_provider = packages__provider__src__listenable_provider$46dart.src__change_notifier_provider;
  const client_provider = packages__my_ticket_care__providers__client_provider$46dart.providers__client_provider;
  const search_provider = packages__my_ticket_care__providers__search_provider$46dart.providers__search_provider;
  const search_options_provider = packages__my_ticket_care__providers__search_options_provider$46dart.providers__search_options_provider;
  const navigation_bar_provider = packages__my_ticket_care__providers__navigation_bar_provider$46dart.providers__navigation_bar_provider;
  const make_booking_provider = packages__my_ticket_care__providers__make_booking_provider$46dart.providers__make_booking_provider;
  const navigation_booking_provider = packages__my_ticket_care__providers__navigation_booking_provider$46dart.providers__navigation_booking_provider;
  const login_from_provider = packages__my_ticket_care__providers__login_from_provider$46dart.providers__login_from_provider;
  const booking_provider = packages__my_ticket_care__providers__booking_provider$46dart.providers__booking_provider;
  const choice_chip_office_provider = packages__my_ticket_care__providers__choice_chip_office_provider$46dart.providers__choice_chip_office_provider;
  const booking_state = packages__my_ticket_care__src__booking__providers__booking_state$46dart.src__booking__providers__booking_state;
  const nested = packages__nested__nested$46dart.nested;
  const app_theme = packages__my_ticket_care__reusable__app_theme$46dart.reusable__app_theme;
  const app = packages__flutter__src__material__app$46dart.src__material__app;
  const splash_screen = packages__my_ticket_care__src__login__presentation__register_facebook_screen$46dart.src__login__presentation__splash_screen;
  const app_routes = packages__my_ticket_care__routes__app_routes$46dart.routes__app_routes;
  const framework$ = packages__flutter_riverpod__src__framework$46dart.src__framework;
  var main = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ChangeNotifierProviderOfClientProvider: () => (T.ChangeNotifierProviderOfClientProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(client_provider.ClientProvider)))(),
    BuildContextToClientProvider: () => (T.BuildContextToClientProvider = dart.constFn(dart.fnType(client_provider.ClientProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfSearchProvider: () => (T.ChangeNotifierProviderOfSearchProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(search_provider.SearchProvider)))(),
    BuildContextToSearchProvider: () => (T.BuildContextToSearchProvider = dart.constFn(dart.fnType(search_provider.SearchProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfSearchOptionsProvider: () => (T.ChangeNotifierProviderOfSearchOptionsProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(search_options_provider.SearchOptionsProvider)))(),
    BuildContextToSearchOptionsProvider: () => (T.BuildContextToSearchOptionsProvider = dart.constFn(dart.fnType(search_options_provider.SearchOptionsProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfNavigationBarProvider: () => (T.ChangeNotifierProviderOfNavigationBarProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(navigation_bar_provider.NavigationBarProvider)))(),
    BuildContextToNavigationBarProvider: () => (T.BuildContextToNavigationBarProvider = dart.constFn(dart.fnType(navigation_bar_provider.NavigationBarProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfMakeBookingProvider: () => (T.ChangeNotifierProviderOfMakeBookingProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(make_booking_provider.MakeBookingProvider)))(),
    BuildContextToMakeBookingProvider: () => (T.BuildContextToMakeBookingProvider = dart.constFn(dart.fnType(make_booking_provider.MakeBookingProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfNavigationBookingProvider: () => (T.ChangeNotifierProviderOfNavigationBookingProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(navigation_booking_provider.NavigationBookingProvider)))(),
    BuildContextToNavigationBookingProvider: () => (T.BuildContextToNavigationBookingProvider = dart.constFn(dart.fnType(navigation_booking_provider.NavigationBookingProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfLoginFormProvider: () => (T.ChangeNotifierProviderOfLoginFormProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(login_from_provider.LoginFormProvider)))(),
    BuildContextToLoginFormProvider: () => (T.BuildContextToLoginFormProvider = dart.constFn(dart.fnType(login_from_provider.LoginFormProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfBookingProvider: () => (T.ChangeNotifierProviderOfBookingProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(booking_provider.BookingProvider)))(),
    BuildContextToBookingProvider: () => (T.BuildContextToBookingProvider = dart.constFn(dart.fnType(booking_provider.BookingProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfChoiceChipOfficeProvider: () => (T.ChangeNotifierProviderOfChoiceChipOfficeProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(choice_chip_office_provider.ChoiceChipOfficeProvider)))(),
    BuildContextToChoiceChipOfficeProvider: () => (T.BuildContextToChoiceChipOfficeProvider = dart.constFn(dart.fnType(choice_chip_office_provider.ChoiceChipOfficeProvider, [framework.BuildContext])))(),
    ChangeNotifierProviderOfBookingStateProvider: () => (T.ChangeNotifierProviderOfBookingStateProvider = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(booking_state.BookingStateProvider)))(),
    BuildContextToBookingStateProvider: () => (T.BuildContextToBookingStateProvider = dart.constFn(dart.fnType(booking_state.BookingStateProvider, [framework.BuildContext])))(),
    JSArrayOfSingleChildWidget: () => (T.JSArrayOfSingleChildWidget = dart.constFn(_interceptors.JSArray$(nested.SingleChildWidget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppState",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChangeNotifierProvider",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MyApp",
        [_Location_column]: 20,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget__location]: C[12] || CT.C12,
        [Widget_key]: null
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MultiProvider",
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MyApp",
        [_Location_column]: 9,
        [_Location_line]: 66,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SplashScreen",
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MaterialApp",
        [_Location_column]: 12,
        [_Location_line]: 75,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppState",
        [_Location_column]: 41,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: main.AppState.prototype,
        [Widget__location]: C[18] || CT.C18,
        [Widget_key]: null
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ProviderScope",
        [_Location_column]: 14,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/main.dart"
      });
    }
  }, false);
  var C = Array(20).fill(void 0);
  var I = ["package:my_ticket_care/main.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.AppState = class AppState extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.AppState.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new provider.MultiProvider.new({providers: T.JSArrayOfSingleChildWidget().of([new (T.ChangeNotifierProviderOfClientProvider()).new({create: dart.fn(context => new client_provider.ClientProvider.new(), T.BuildContextToClientProvider()), $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), new (T.ChangeNotifierProviderOfSearchProvider()).new({create: dart.fn(context => new search_provider.SearchProvider.new(), T.BuildContextToSearchProvider()), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), new (T.ChangeNotifierProviderOfSearchOptionsProvider()).new({create: dart.fn(context => new search_options_provider.SearchOptionsProvider.new(), T.BuildContextToSearchOptionsProvider()), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), new (T.ChangeNotifierProviderOfNavigationBarProvider()).new({create: dart.fn(context => new navigation_bar_provider.NavigationBarProvider.new(), T.BuildContextToNavigationBarProvider()), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), new (T.ChangeNotifierProviderOfMakeBookingProvider()).new({create: dart.fn(context => new make_booking_provider.MakeBookingProvider.new(), T.BuildContextToMakeBookingProvider()), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), new (T.ChangeNotifierProviderOfNavigationBookingProvider()).new({create: dart.fn(context => new navigation_booking_provider.NavigationBookingProvider.new(), T.BuildContextToNavigationBookingProvider()), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), new (T.ChangeNotifierProviderOfLoginFormProvider()).new({create: dart.fn(context => new login_from_provider.LoginFormProvider.new(), T.BuildContextToLoginFormProvider()), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), new (T.ChangeNotifierProviderOfBookingProvider()).new({create: dart.fn(context => new booking_provider.BookingProvider.new(), T.BuildContextToBookingProvider()), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), new (T.ChangeNotifierProviderOfChoiceChipOfficeProvider()).new({create: dart.fn(context => new choice_chip_office_provider.ChoiceChipOfficeProvider.new(), T.BuildContextToChoiceChipOfficeProvider()), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), new (T.ChangeNotifierProviderOfBookingStateProvider()).new({create: dart.fn(context => new booking_state.BookingStateProvider.new(), T.BuildContextToBookingStateProvider()), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10})]), child: C[11] || CT.C11, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
  };
  (main.AppState.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.AppState.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.AppState.prototype;
  dart.addTypeTests(main.AppState);
  dart.addTypeCaches(main.AppState);
  dart.setMethodSignature(main.AppState, () => ({
    __proto__: dart.getMethods(main.AppState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.AppState, I[0]);
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    build(context) {
      let themeType = app_theme.ThemeType.light;
      let theme = new app_theme.AppTheme.new({type: themeType});
      return new app.MaterialApp.new({title: "My Ticket", debugShowCheckedModeBanner: false, home: new splash_screen.SplashScreen.new({$creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), routes: app_routes.AppRoutes.getRoutes(), theme: theme.currentTheme, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.main = function main$() {
    binding.runApp(new framework$.ProviderScope.new({child: C[17] || CT.C17, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}));
  };
  dart.trackLibraries("packages/my_ticket_care/main.dart", {
    "package:my_ticket_care/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAyB4B;AACxB,YAAO,4CACM,mCACT,8DACW,QAAC,WAAY,sIAExB,8DACW,QAAC,WAAY,sIAExB,qEACW,QAAC,WAAY,4JAExB,qEACU,QAAC,WAAY,4JAEvB,mEACU,QAAC,WAAY,sJAEvB,yEACU,QAAC,WAAY,wKAEvB,iEACU,QAAC,WAAY,gJAEvB,+DACU,QAAC,WAAY,yIAEvB,wEACU,QAAC,WAAY,sKAEvB,oEACU,QAAC,WAAY;IAK7B;;;QAtCqB;;AAAQ,iDAAW,GAAG;;EAAC;;;;;;;;;;;;;UA8ClB;AACd,sBAAsB;AAEvB,kBAAQ,kCAAe,SAAS;AAEzC,YAAO,iCACE,yCACqB,aACtB,uGACY,yCACX,AAAM,KAAD;IAEhB;;;QAhBkB;;AAAQ,8CAAW,GAAG;;EAAC;;;;;;;;;AA9CS,IAAlD,eAAW;EACb","file":"../../../../../../../../packages/my_ticket_care/main.dart.lib.js"}');
  // Exports:
  return {
    main: main
  };
}));

//# sourceMappingURL=main.dart.lib.js.map
