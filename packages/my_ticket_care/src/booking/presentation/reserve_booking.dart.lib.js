define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/tab_controller.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/src/booking/providers/booking_state.dart', 'packages/my_ticket_care/reusable/app_theme.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/my_ticket_care/src/shared/models/workday.dart', 'packages/my_ticket_care/src/shared/models/offer.dart', 'packages/my_ticket_care/src/shared/models/employee.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/my_ticket_care/src/booking/presentation/reserve_booking_office.dart', 'packages/my_ticket_care/src/booking/presentation/reserve_booking_offer.dart', 'packages/my_ticket_care/src/booking/presentation/reserve_booking_verify.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__my_ticket_care__src__booking__presentation__reserve_booking_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__tab_controller$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__src__booking__providers__booking_state$46dart, packages__my_ticket_care__reusable__app_theme$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__my_ticket_care__src__shared__models__workday$46dart, packages__my_ticket_care__src__shared__models__offer$46dart, packages__my_ticket_care__src__shared__models__employee$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__my_ticket_care__src__booking__presentation__reserve_booking_office$46dart, packages__my_ticket_care__src__booking__presentation__reserve_booking_offer$46dart, packages__my_ticket_care__src__booking__presentation__reserve_booking_verify$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const tabs = packages__flutter__src__material__icon_button$46dart.src__material__tabs;
  const tab_controller = packages__flutter__src__material__tab_controller$46dart.src__material__tab_controller;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const booking_state = packages__my_ticket_care__src__booking__providers__booking_state$46dart.src__booking__providers__booking_state;
  const app_theme = packages__my_ticket_care__reusable__app_theme$46dart.reusable__app_theme;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const workday = packages__my_ticket_care__src__shared__models__workday$46dart.src__shared__models__workday;
  const offer = packages__my_ticket_care__src__shared__models__offer$46dart.src__shared__models__offer;
  const employee = packages__my_ticket_care__src__shared__models__employee$46dart.src__shared__models__employee;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const reserve_booking_office = packages__my_ticket_care__src__booking__presentation__reserve_booking_office$46dart.src__booking__presentation__reserve_booking_office;
  const reserve_booking_offer = packages__my_ticket_care__src__booking__presentation__reserve_booking_offer$46dart.src__booking__presentation__reserve_booking_offer;
  const reserve_booking_verify = packages__my_ticket_care__src__booking__presentation__reserve_booking_verify$46dart.src__booking__presentation__reserve_booking_verify;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var reserve_booking = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ReserveBookingScreen",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 25,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57490
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[3] || CT.C3,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[4] || CT.C4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 20,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppBar",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TabBarView",
        [_Location_column]: 21,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ReserveBookingOfficeScreen",
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: reserve_booking_office.ReserveBookingOfficeScreen.prototype,
        [Widget__location]: C[13] || CT.C13,
        [Widget_key]: null
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ReserveBookingOfferScreen",
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: reserve_booking_offer.ReserveBookingOfferScreen.prototype,
        [Widget__location]: C[15] || CT.C15,
        [Widget_key]: null
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ReserveBookingVerifyScreen",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: reserve_booking_verify.ReserveBookingVerifyScreen.prototype,
        [Widget__location]: C[17] || CT.C17,
        [Widget_key]: null
      });
    },
    get C11() {
      return C[11] = dart.constList([C[12] || CT.C12, C[14] || CT.C14, C[16] || CT.C16], framework.Widget);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: tabs.TabBarView.prototype,
        [Widget__location]: C[8] || CT.C8,
        [Widget_key]: null,
        [TabBarView_clipBehavior]: C[9] || CT.C9,
        [TabBarView_viewportFraction]: 1,
        [TabBarView_dragStartBehavior]: C[10] || CT.C10,
        [TabBarView_physics]: null,
        [TabBarView_children]: C[11] || CT.C11,
        [TabBarView_controller]: null
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 14,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTabController",
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TabBar",
        [_Location_column]: 18,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Tab",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 17,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58569
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[28] || CT.C28,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[29] || CT.C29
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: tabs.Tab.prototype,
        [Widget__location]: C[25] || CT.C25,
        [Widget_key]: null,
        [Tab_height]: null,
        [Tab_iconMargin]: C[26] || CT.C26,
        [Tab_icon]: C[27] || CT.C27,
        [Tab_child]: null,
        [Tab_text]: "Sucursal"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Tab",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57402
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[33] || CT.C33,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[34] || CT.C34
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: tabs.Tab.prototype,
        [Widget__location]: C[31] || CT.C31,
        [Widget_key]: null,
        [Tab_height]: null,
        [Tab_iconMargin]: C[26] || CT.C26,
        [Tab_icon]: C[32] || CT.C32,
        [Tab_child]: null,
        [Tab_text]: "Ofertas"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Tab",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 17,
        [_Location_line]: 66,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59033
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[38] || CT.C38,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[39] || CT.C39
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: tabs.Tab.prototype,
        [Widget__location]: C[36] || CT.C36,
        [Widget_key]: null,
        [Tab_height]: null,
        [Tab_iconMargin]: C[26] || CT.C26,
        [Tab_icon]: C[37] || CT.C37,
        [Tab_child]: null,
        [Tab_text]: "Revisar"
      });
    },
    get C23() {
      return C[23] = dart.constList([C[24] || CT.C24, C[30] || CT.C30, C[35] || CT.C35], framework.Widget);
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: tabs.TabBar.prototype,
        [Widget__location]: C[21] || CT.C21,
        [Widget_key]: null,
        [TabBar_splashBorderRadius]: null,
        [TabBar_splashFactory]: null,
        [TabBar_physics]: null,
        [TabBar_onTap]: null,
        [TabBar_enableFeedback]: null,
        [TabBar_mouseCursor]: null,
        [TabBar_dragStartBehavior]: C[10] || CT.C10,
        [TabBar_overlayColor]: null,
        [TabBar_unselectedLabelStyle]: null,
        [TabBar_labelPadding]: null,
        [TabBar_labelStyle]: null,
        [TabBar_unselectedLabelColor]: null,
        [TabBar_labelColor]: null,
        [TabBar_indicatorSize]: null,
        [TabBar_automaticIndicatorColorAdjustment]: true,
        [TabBar_indicator]: null,
        [TabBar_indicatorPadding]: C[22] || CT.C22,
        [TabBar_indicatorWeight]: 2,
        [TabBar_indicatorColor]: null,
        [TabBar_padding]: null,
        [TabBar_isScrollable]: false,
        [TabBar_controller]: null,
        [TabBar_tabs]: C[23] || CT.C23
      });
    }
  }, false);
  var C = Array(40).fill(void 0);
  var I = ["package:my_ticket_care/src/booking/presentation/reserve_booking.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
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
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var TabBarView_clipBehavior = dart.privateName(tabs, "TabBarView.clipBehavior");
  var TabBarView_viewportFraction = dart.privateName(tabs, "TabBarView.viewportFraction");
  var TabBarView_dragStartBehavior = dart.privateName(tabs, "TabBarView.dragStartBehavior");
  var TabBarView_physics = dart.privateName(tabs, "TabBarView.physics");
  var TabBarView_children = dart.privateName(tabs, "TabBarView.children");
  var TabBarView_controller = dart.privateName(tabs, "TabBarView.controller");
  var TabBar_splashBorderRadius = dart.privateName(tabs, "TabBar.splashBorderRadius");
  var TabBar_splashFactory = dart.privateName(tabs, "TabBar.splashFactory");
  var TabBar_physics = dart.privateName(tabs, "TabBar.physics");
  var TabBar_onTap = dart.privateName(tabs, "TabBar.onTap");
  var TabBar_enableFeedback = dart.privateName(tabs, "TabBar.enableFeedback");
  var TabBar_mouseCursor = dart.privateName(tabs, "TabBar.mouseCursor");
  var TabBar_dragStartBehavior = dart.privateName(tabs, "TabBar.dragStartBehavior");
  var TabBar_overlayColor = dart.privateName(tabs, "TabBar.overlayColor");
  var TabBar_unselectedLabelStyle = dart.privateName(tabs, "TabBar.unselectedLabelStyle");
  var TabBar_labelPadding = dart.privateName(tabs, "TabBar.labelPadding");
  var TabBar_labelStyle = dart.privateName(tabs, "TabBar.labelStyle");
  var TabBar_unselectedLabelColor = dart.privateName(tabs, "TabBar.unselectedLabelColor");
  var TabBar_labelColor = dart.privateName(tabs, "TabBar.labelColor");
  var TabBar_indicatorSize = dart.privateName(tabs, "TabBar.indicatorSize");
  var TabBar_automaticIndicatorColorAdjustment = dart.privateName(tabs, "TabBar.automaticIndicatorColorAdjustment");
  var TabBar_indicator = dart.privateName(tabs, "TabBar.indicator");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var TabBar_indicatorPadding = dart.privateName(tabs, "TabBar.indicatorPadding");
  var TabBar_indicatorWeight = dart.privateName(tabs, "TabBar.indicatorWeight");
  var TabBar_indicatorColor = dart.privateName(tabs, "TabBar.indicatorColor");
  var TabBar_padding = dart.privateName(tabs, "TabBar.padding");
  var TabBar_isScrollable = dart.privateName(tabs, "TabBar.isScrollable");
  var TabBar_controller = dart.privateName(tabs, "TabBar.controller");
  var Tab_height = dart.privateName(tabs, "Tab.height");
  var Tab_iconMargin = dart.privateName(tabs, "Tab.iconMargin");
  var Tab_icon = dart.privateName(tabs, "Tab.icon");
  var Tab_child = dart.privateName(tabs, "Tab.child");
  var Tab_text = dart.privateName(tabs, "Tab.text");
  var TabBar_tabs = dart.privateName(tabs, "TabBar.tabs");
  reserve_booking.ReserveBookingScreen = class ReserveBookingScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new reserve_booking.ReserveBookingScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new tab_controller.DefaultTabController.new({initialIndex: 0, length: 3, child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Reservar: " + provider['ReadContext|read'](booking_state.BookingStateProvider, context).selectedService.serviceName, {style: app_theme.AppTheme.whiteText.headline5, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), leading: new icon_button.IconButton.new({icon: C[2] || CT.C2, onPressed: dart.fn(() => {
                provider['ReadContext|read'](booking_state.BookingStateProvider, context).setWorkday(workday.Workday.empty());
                provider['ReadContext|read'](booking_state.BookingStateProvider, context).setOffer(offer.Offer.empty());
                provider['ReadContext|read'](booking_state.BookingStateProvider, context).setClientId(-1);
                provider['ReadContext|read'](booking_state.BookingStateProvider, context).setEmployee(employee.Employee.empty());
                navigator.Navigator.pop(T.ObjectN(), context);
              }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), backgroundColor: colorScheme.secondary, bottom: this.bookingTabBars(), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), body: C[7] || CT.C7, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
    bookingTabBars() {
      return C[20] || CT.C20;
    }
  };
  (reserve_booking.ReserveBookingScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    reserve_booking.ReserveBookingScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reserve_booking.ReserveBookingScreen.prototype;
  dart.addTypeTests(reserve_booking.ReserveBookingScreen);
  dart.addTypeCaches(reserve_booking.ReserveBookingScreen);
  dart.setMethodSignature(reserve_booking.ReserveBookingScreen, () => ({
    __proto__: dart.getMethods(reserve_booking.ReserveBookingScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    bookingTabBars: dart.fnType(tabs.TabBar, [])
  }));
  dart.setLibraryUri(reserve_booking.ReserveBookingScreen, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/reserve_booking.dart", {
    "package:my_ticket_care/src/booking/presentation/reserve_booking.dart": reserve_booking
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reserve_booking.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAc4B;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,4DACS,WACN,UACD,mCACG,+BACC,kBACL,AAA+E,eAA1D,AAA6B,AAAgB,iEAArD,OAAO,uCACJ,AAAU,0GAEnB,gEAEI;AACuD,gBAAxD,AAA6B,iEAArC,OAAO,aAAiD;AACI,gBAApD,AAA6B,iEAArC,OAAO,WAA6C;AACA,gBAA5C,AAA6B,iEAArC,OAAO,cAA0C,CAAC;AAGhB,gBAD7B,AACA,iEAFL,OAAO,cAEmB;AAEJ,gBAAZ,qCAAI,OAAO;4GAGR,AAAY,WAAD,oBACpB;IAWhB;;AAGE;IAgBF;;;QA3DiC;;AAAQ,wEAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/reserve_booking.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__reserve_booking: reserve_booking
  };
}));

//# sourceMappingURL=reserve_booking.dart.lib.js.map
