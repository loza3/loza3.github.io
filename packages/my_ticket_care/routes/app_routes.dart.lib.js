define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/my_ticket_care/models/frontend/menu_option.dart', 'packages/my_ticket_care/screens/booking/my_bookings.dart', 'packages/my_ticket_care/screens/profiles/employee_profile_screen.dart', 'packages/my_ticket_care/screens/login/create_account.dart', 'packages/my_ticket_care/screens/login/forget_password.dart', 'packages/my_ticket_care/screens/login/login_screen.dart', 'packages/my_ticket_care/screens/profiles/client_profile_screen.dart'], (function load__packages__my_ticket_care__routes__app_routes_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__my_ticket_care__models__frontend__menu_option$46dart, packages__my_ticket_care__screens__booking__my_bookings$46dart, packages__my_ticket_care__screens__profiles__employee_profile_screen$46dart, packages__my_ticket_care__screens__login__create_account$46dart, packages__my_ticket_care__screens__login__forget_password$46dart, packages__my_ticket_care__screens__login__login_screen$46dart, packages__my_ticket_care__screens__profiles__client_profile_screen$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const menu_option = packages__my_ticket_care__models__frontend__menu_option$46dart.models__frontend__menu_option;
  const my_bookings = packages__my_ticket_care__screens__booking__my_bookings$46dart.screens__booking__my_bookings;
  const main_screen = packages__my_ticket_care__screens__profiles__employee_profile_screen$46dart.screens__home__main_screen;
  const search_all_screen = packages__my_ticket_care__screens__profiles__employee_profile_screen$46dart.screens__search__search_all_screen;
  const create_account = packages__my_ticket_care__screens__login__create_account$46dart.screens__login__create_account;
  const forget_password = packages__my_ticket_care__screens__login__forget_password$46dart.screens__login__forget_password;
  const login_screen = packages__my_ticket_care__screens__login__login_screen$46dart.screens__login__login_screen;
  const client_profile_screen = packages__my_ticket_care__screens__profiles__client_profile_screen$46dart.screens__profiles__client_profile_screen;
  var app_routes = Object.create(dart.library);
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    IdentityMapOfString$BuildContextToWidget: () => (T.IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, T.BuildContextToWidget())))(),
    JSArrayOfMenuOption: () => (T.JSArrayOfMenuOption = dart.constFn(_interceptors.JSArray$(menu_option.MenuOption)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MyBookings",
        [_Location_column]: 59,
        [_Location_line]: 8,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/routes/app_routes.dart"
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: my_bookings.MyBookings.prototype,
        [Widget__location]: C[1] || CT.C1,
        [Widget_key]: null
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MainScreen",
        [_Location_column]: 46,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/routes/app_routes.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CreateAccountScreen",
        [_Location_column]: 62,
        [_Location_line]: 10,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/routes/app_routes.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: create_account.CreateAccountScreen.prototype,
        [Widget__location]: C[4] || CT.C4,
        [Widget_key]: null
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ForgotPasswordScreen",
        [_Location_column]: 63,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/routes/app_routes.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: forget_password.ForgotPasswordScreen.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LoginScreen",
        [_Location_column]: 53,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/routes/app_routes.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: login_screen.LoginScreen.prototype,
        [Widget__location]: C[8] || CT.C8,
        [Widget_key]: null
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClientProfileScreen",
        [_Location_column]: 62,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/routes/app_routes.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: client_profile_screen.ClientProfileScreen.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchAllScreen",
        [_Location_column]: 58,
        [_Location_line]: 14,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/routes/app_routes.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: search_all_screen.SearchAllScreen.prototype,
        [Widget__location]: C[12] || CT.C12,
        [Widget_key]: null
      });
    }
  }, false);
  var C = Array(13).fill(void 0);
  var I = ["package:my_ticket_care/routes/app_routes.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  app_routes.AppRoutes = class AppRoutes extends core.Object {
    static getRoutes() {
      let routes = new (T.IdentityMapOfString$BuildContextToWidget()).new();
      for (let option of app_routes.AppRoutes.menuOptions) {
        routes[$addAll](new (T.IdentityMapOfString$BuildContextToWidget()).from([option.route, dart.fn(context => option.screen, T.BuildContextToWidget())]));
      }
      return routes;
    }
    static ['_#new#tearOff']() {
      return new app_routes.AppRoutes.new();
    }
  };
  (app_routes.AppRoutes.new = function() {
    ;
  }).prototype = app_routes.AppRoutes.prototype;
  dart.addTypeTests(app_routes.AppRoutes);
  dart.addTypeCaches(app_routes.AppRoutes);
  dart.setStaticMethodSignature(app_routes.AppRoutes, () => ['getRoutes']);
  dart.setLibraryUri(app_routes.AppRoutes, I[0]);
  dart.setStaticFieldSignature(app_routes.AppRoutes, () => ['menuOptions']);
  dart.defineLazy(app_routes.AppRoutes, {
    /*app_routes.AppRoutes.menuOptions*/get menuOptions() {
      return T.JSArrayOfMenuOption().of([new menu_option.MenuOption.new({route: "my_bookings_screen", screen: C[0] || CT.C0}), new menu_option.MenuOption.new({route: "main_screen", screen: new main_screen.MainScreen.new({$creationLocationd_0dea112b090073317d4: C[2] || CT.C2})}), new menu_option.MenuOption.new({route: "create_account_screen", screen: C[3] || CT.C3}), new menu_option.MenuOption.new({route: "forgot_password_screen", screen: C[5] || CT.C5}), new menu_option.MenuOption.new({route: "login_screen", screen: C[7] || CT.C7}), new menu_option.MenuOption.new({route: "client_profile_screen", screen: C[9] || CT.C9}), new menu_option.MenuOption.new({route: "search_all_screen", screen: C[11] || CT.C11})]);
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/routes/app_routes.dart", {
    "package:my_ticket_care/routes/app_routes.dart": app_routes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_routes.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiB+C,mBAAS;AACpD,eAAW,SAAU;AACmD,QAAtE,AAAO,MAAD,UAAQ,yDAAC,AAAO,MAAD,QAAQ,QAAc,WAAY,AAAO,MAAD;;AAE/D,YAAO,OAAM;IACf;;;;;;;EACF;;;;;;;MAjBe,gCAAW;YAAe,6BACrC,uCAAkB,+CAClB,uCAAkB,uBAAuB,2FACzC,uCAAkB,kDAClB,uCAAkB,mDAClB,uCAAkB,yCAClB,uCAAkB,kDAClB,uCAAkB","file":"../../../../../../../../../packages/my_ticket_care/routes/app_routes.dart.lib.js"}');
  // Exports:
  return {
    routes__app_routes: app_routes
  };
}));

//# sourceMappingURL=app_routes.dart.lib.js.map
