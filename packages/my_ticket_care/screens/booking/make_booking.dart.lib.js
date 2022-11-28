define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/my_ticket_care/screens/booking/create_booking_screens/booking_office_screen.dart', 'packages/my_ticket_care/screens/booking/create_booking_screens/booking_offers_screen.dart', 'packages/my_ticket_care/screens/booking/create_booking_screens/booking_check_screen.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/providers/make_booking_provider.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/widgets/preferred_size.dart', 'packages/my_ticket_care/providers/navigation_booking_provider.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/widgets/bottom_navigation_bar_item.dart'], (function load__packages__my_ticket_care__screens__booking__make_booking_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__my_ticket_care__screens__booking__create_booking_screens__booking_office_screen$46dart, packages__my_ticket_care__screens__booking__create_booking_screens__booking_offers_screen$46dart, packages__my_ticket_care__screens__booking__create_booking_screens__booking_check_screen$46dart, packages__flutter__src__material__icon_button$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__providers__make_booking_provider$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__widgets__preferred_size$46dart, packages__my_ticket_care__providers__navigation_booking_provider$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__widgets__bottom_navigation_bar_item$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const booking_office_screen = packages__my_ticket_care__screens__booking__create_booking_screens__booking_office_screen$46dart.screens__booking__create_booking_screens__booking_office_screen;
  const booking_offers_screen = packages__my_ticket_care__screens__booking__create_booking_screens__booking_offers_screen$46dart.screens__booking__create_booking_screens__booking_offers_screen;
  const booking_check_screen = packages__my_ticket_care__screens__booking__create_booking_screens__booking_check_screen$46dart.screens__booking__create_booking_screens__booking_check_screen;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const bottom_navigation_bar = packages__flutter__src__material__icon_button$46dart.src__material__bottom_navigation_bar;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const make_booking_provider = packages__my_ticket_care__providers__make_booking_provider$46dart.providers__make_booking_provider;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const preferred_size = packages__flutter__src__widgets__preferred_size$46dart.src__widgets__preferred_size;
  const navigation_booking_provider = packages__my_ticket_care__providers__navigation_booking_provider$46dart.providers__navigation_booking_provider;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const bottom_navigation_bar_item = packages__flutter__src__widgets__bottom_navigation_bar_item$46dart.src__widgets__bottom_navigation_bar_item;
  var make_booking = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MakeBookingScreen",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingOfficeScreen",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: booking_office_screen.BookingOfficeScreen.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingOffersScreen",
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: booking_offers_screen.BookingOffersScreen.prototype,
        [Widget__location]: C[4] || CT.C4,
        [Widget_key]: null
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingCheckScreen",
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: booking_check_screen.BookingCheckScreen.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 23,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57490
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[8] || CT.C8,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[9] || CT.C9
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 18,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 60,
        [OffsetBase__dx]: 1 / 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: icon_theme_data.IconThemeData.prototype,
        [IconThemeData_shadows]: null,
        [IconThemeData_size]: 29,
        [IconThemeData__opacity]: null,
        [IconThemeData_color]: null
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58569
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[17] || CT.C17,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[18] || CT.C18
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Sucursal",
        [BottomNavigationBarItem_activeIcon]: C[16] || CT.C16,
        [BottomNavigationBarItem_icon]: C[16] || CT.C16
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57402
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[21] || CT.C21,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[22] || CT.C22
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Ofertas",
        [BottomNavigationBarItem_activeIcon]: C[20] || CT.C20,
        [BottomNavigationBarItem_icon]: C[20] || CT.C20
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59033
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[25] || CT.C25,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[26] || CT.C26
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Revisar",
        [BottomNavigationBarItem_activeIcon]: C[24] || CT.C24,
        [BottomNavigationBarItem_icon]: C[24] || CT.C24
      });
    },
    get C14() {
      return C[14] = dart.constList([C[15] || CT.C15, C[19] || CT.C19, C[23] || CT.C23], bottom_navigation_bar_item.BottomNavigationBarItem);
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BottomNavigationBar",
        [_Location_column]: 20,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PreferredSize",
        [_Location_column]: 17,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppBar",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/make_booking.dart"
      });
    }
  }, false);
  var C = Array(31).fill(void 0);
  var I = ["package:my_ticket_care/screens/booking/make_booking.dart"];
  var officeId$ = dart.privateName(make_booking, "MakeBookingScreen.officeId");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  make_booking.MakeBookingScreen = class MakeBookingScreen extends framework.StatefulWidget {
    get officeId() {
      return this[officeId$];
    }
    set officeId(value) {
      super.officeId = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let officeId = opts && 'officeId' in opts ? opts.officeId : null;
      return new make_booking.MakeBookingScreen.new({key: key, officeId: officeId, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new make_booking._MakeBookingScreenState.new();
    }
  };
  (make_booking.MakeBookingScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let officeId = opts && 'officeId' in opts ? opts.officeId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[officeId$] = officeId;
    make_booking.MakeBookingScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = make_booking.MakeBookingScreen.prototype;
  dart.addTypeTests(make_booking.MakeBookingScreen);
  dart.addTypeCaches(make_booking.MakeBookingScreen);
  dart.setMethodSignature(make_booking.MakeBookingScreen, () => ({
    __proto__: dart.getMethods(make_booking.MakeBookingScreen.__proto__),
    createState: dart.fnType(framework.State$(make_booking.MakeBookingScreen), [])
  }));
  dart.setLibraryUri(make_booking.MakeBookingScreen, I[0]);
  dart.setFieldSignature(make_booking.MakeBookingScreen, () => ({
    __proto__: dart.getFields(make_booking.MakeBookingScreen.__proto__),
    officeId: dart.finalFieldType(dart.nullable(core.int))
  }));
  var _screens = dart.privateName(make_booking, "_screens");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var IconThemeData_shadows = dart.privateName(icon_theme_data, "IconThemeData.shadows");
  var IconThemeData_size = dart.privateName(icon_theme_data, "IconThemeData.size");
  var IconThemeData__opacity = dart.privateName(icon_theme_data, "IconThemeData._opacity");
  var IconThemeData_color = dart.privateName(icon_theme_data, "IconThemeData.color");
  var BottomNavigationBarItem_tooltip = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.tooltip");
  var BottomNavigationBarItem_backgroundColor = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.backgroundColor");
  var BottomNavigationBarItem_label = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.label");
  var BottomNavigationBarItem_activeIcon = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.activeIcon");
  var BottomNavigationBarItem_icon = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.icon");
  make_booking._MakeBookingScreenState = class _MakeBookingScreenState extends framework.State$(make_booking.MakeBookingScreen) {
    initState() {
      super.initState();
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let selectedService = provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).selectedService;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colorScheme.secondary, leading: new icon_button.IconButton.new({icon: C[7] || CT.C7, onPressed: dart.fn(() => {
              navigator.Navigator.pop(T.ObjectN(), context);
            }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), title: new text.Text.new("Reservar: " + selectedService.serviceName, {style: dart.nullCheck(theme.Theme.of(context).textTheme.headline5).copyWith({color: colorScheme.onPrimary}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), bottom: new preferred_size.PreferredSize.new({preferredSize: C[12] || CT.C12, child: new bottom_navigation_bar.BottomNavigationBar.new({elevation: 0.0, onTap: dart.fn(index => {
                provider['ReadContext|read'](navigation_booking_provider.NavigationBookingProvider, context).currentIndex = index;
              }, T.intTovoid()), backgroundColor: colorScheme.secondary, selectedItemColor: colorScheme.background, unselectedItemColor: colorScheme.background, selectedFontSize: 15.0, selectedIconTheme: C[13] || CT.C13, currentIndex: provider['WatchContext|watch'](navigation_booking_provider.NavigationBookingProvider, context).currentIndex, items: C[14] || CT.C14, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), body: T.WidgetN().as(this[_screens][$_get](provider['ReadContext|read'](navigation_booking_provider.NavigationBookingProvider, context).currentIndex)), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
    }
    static ['_#new#tearOff']() {
      return new make_booking._MakeBookingScreenState.new();
    }
  };
  (make_booking._MakeBookingScreenState.new = function() {
    this[_screens] = T.JSArrayOfWidget().of([C[1] || CT.C1, C[3] || CT.C3, C[5] || CT.C5]);
    make_booking._MakeBookingScreenState.__proto__.new.call(this);
    ;
  }).prototype = make_booking._MakeBookingScreenState.prototype;
  dart.addTypeTests(make_booking._MakeBookingScreenState);
  dart.addTypeCaches(make_booking._MakeBookingScreenState);
  dart.setMethodSignature(make_booking._MakeBookingScreenState, () => ({
    __proto__: dart.getMethods(make_booking._MakeBookingScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(make_booking._MakeBookingScreenState, I[0]);
  dart.setFieldSignature(make_booking._MakeBookingScreenState, () => ({
    __proto__: dart.getFields(make_booking._MakeBookingScreenState.__proto__),
    [_screens]: dart.finalFieldType(core.List)
  }));
  dart.trackLibraries("packages/my_ticket_care/screens/booking/make_booking.dart", {
    "package:my_ticket_care/screens/booking/make_booking.dart": make_booking
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["make_booking.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAca;;;;;;;;;;;;AAE+B;IAAyB;;;QAJrC;QAAU;;;AAAa,kEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgBjD,MAAX;IACR;UAG0B;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAC5B,4BACF,AAA6B,0EAArC,OAAO;AAEX,YAAO,oCACG,yCACW,AAAY,WAAD,qBACnB,gEAEI;AACa,cAAZ,qCAAI,OAAO;kGAGlB,kBACL,AAA0C,eAA7B,AAAgB,eAAD,sBAGd,AACT,eAHQ,AACR,AACA,eAFW,OAAO,wCAGF,AAAY,WAAD,iFAE1B,6EAEG,8DACM,YACJ,QAAC;AACwD,gBAAtD,AAAkC,oFAA1C,OAAO,iBAAkD,KAAK;kDAE/C,AAAY,WAAD,+BACT,AAAY,WAAD,kCACT,AAAY,WAAD,+BACd,wDAKN,AAAmC,sFAA3C,OAAO,8OAWb,AAAQ,sBAAS,AAAkC,oFAA1C,OAAO;IAE1B;;;;;;IA7DW,iBAAmB;;;EA8DhC","file":"../../../../../../../../../../packages/my_ticket_care/screens/booking/make_booking.dart.lib.js"}');
  // Exports:
  return {
    screens__booking__make_booking: make_booking
  };
}));

//# sourceMappingURL=make_booking.dart.lib.js.map
