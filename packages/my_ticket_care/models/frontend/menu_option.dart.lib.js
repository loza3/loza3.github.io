define(['dart_sdk', 'packages/flutter/src/widgets/title.dart'], (function load__packages__my_ticket_care__models__frontend__menu_option_dart(dart_sdk, packages__flutter__src__widgets__title$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  var menu_option = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:my_ticket_care/models/frontend/menu_option.dart"];
  var route$ = dart.privateName(menu_option, "MenuOption.route");
  var screen$ = dart.privateName(menu_option, "MenuOption.screen");
  menu_option.MenuOption = class MenuOption extends core.Object {
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    get screen() {
      return this[screen$];
    }
    set screen(value) {
      super.screen = value;
    }
    static ['_#new#tearOff'](opts) {
      let route = opts && 'route' in opts ? opts.route : null;
      let screen = opts && 'screen' in opts ? opts.screen : null;
      return new menu_option.MenuOption.new({route: route, screen: screen});
    }
  };
  (menu_option.MenuOption.new = function(opts) {
    let route = opts && 'route' in opts ? opts.route : null;
    let screen = opts && 'screen' in opts ? opts.screen : null;
    this[route$] = route;
    this[screen$] = screen;
    ;
  }).prototype = menu_option.MenuOption.prototype;
  dart.addTypeTests(menu_option.MenuOption);
  dart.addTypeCaches(menu_option.MenuOption);
  dart.setLibraryUri(menu_option.MenuOption, I[0]);
  dart.setFieldSignature(menu_option.MenuOption, () => ({
    __proto__: dart.getFields(menu_option.MenuOption.__proto__),
    route: dart.finalFieldType(core.String),
    screen: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/my_ticket_care/models/frontend/menu_option.dart", {
    "package:my_ticket_care/models/frontend/menu_option.dart": menu_option
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_option.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;;;;;;;;QAGG;QACA;IADA;IACA;;EACd","file":"../../../../../../../../../../packages/my_ticket_care/models/frontend/menu_option.dart.lib.js"}');
  // Exports:
  return {
    models__frontend__menu_option: menu_option
  };
}));

//# sourceMappingURL=menu_option.dart.lib.js.map
