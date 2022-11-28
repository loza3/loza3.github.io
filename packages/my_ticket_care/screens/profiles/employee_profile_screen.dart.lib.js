define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/providers/make_booking_provider.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/my_ticket_care/providers/choice_chip_office_provider.dart', 'packages/flutter/src/widgets/preferred_size.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/async.dart', 'packages/my_ticket_care/src/shared/models/service.dart', 'packages/my_ticket_care/services/service_api.dart', 'packages/my_ticket_care/screens/unimplemented_screen.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/material/progress_indicator.dart', 'packages/flutter/src/material/chip_choice.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/my_ticket_care/reusable/widgets/office_map_widget.dart', 'packages/positioned_tap_detector_2/positioned_tap_detector_2.dart', 'packages/latlong2/latlong.dart', 'packages/my_ticket_care/providers/search_provider.dart', 'packages/my_ticket_care/screens/booking/make_booking.dart', 'packages/font_awesome_flutter/src/icon_data.dart', 'packages/flutter/src/material/page.dart', 'packages/my_ticket_care/models/backend/employee.dart', 'packages/flutter/src/material/circle_avatar.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/my_ticket_care/models/office.dart', 'packages/my_ticket_care/screens/profiles/company_profile_screen.dart', 'packages/my_ticket_care/models/company.dart', 'packages/my_ticket_care/reusable/widgets/unexpected_error.dart', 'packages/my_ticket_care/providers/search_options_provider.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/widgets/visibility.dart', 'packages/flutter/src/material/checkbox.dart', 'packages/my_ticket_care/screens/booking/my_bookings.dart', 'packages/my_ticket_care/screens/profiles/client_profile_screen.dart', 'packages/my_ticket_care/providers/navigation_bar_provider.dart', 'packages/my_ticket_care/reusable/widgets/search_bar.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/widgets/bottom_navigation_bar_item.dart'], (function load__packages__my_ticket_care__screens__profiles__employee_profile_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__providers__make_booking_provider$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__my_ticket_care__providers__choice_chip_office_provider$46dart, packages__flutter__src__widgets__preferred_size$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__async$46dart, packages__my_ticket_care__src__shared__models__service$46dart, packages__my_ticket_care__services__service_api$46dart, packages__my_ticket_care__screens__unimplemented_screen$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__material__progress_indicator$46dart, packages__flutter__src__material__chip_choice$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__my_ticket_care__reusable__widgets__office_map_widget$46dart, packages__positioned_tap_detector_2__positioned_tap_detector_2$46dart, packages__latlong2__latlong$46dart, packages__my_ticket_care__providers__search_provider$46dart, packages__my_ticket_care__screens__booking__make_booking$46dart, packages__font_awesome_flutter__src__icon_data$46dart, packages__flutter__src__material__page$46dart, packages__my_ticket_care__models__backend__employee$46dart, packages__flutter__src__material__circle_avatar$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__my_ticket_care__models__office$46dart, packages__my_ticket_care__screens__profiles__company_profile_screen$46dart, packages__my_ticket_care__models__company$46dart, packages__my_ticket_care__reusable__widgets__unexpected_error$46dart, packages__my_ticket_care__providers__search_options_provider$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__widgets__visibility$46dart, packages__flutter__src__material__checkbox$46dart, packages__my_ticket_care__screens__booking__my_bookings$46dart, packages__my_ticket_care__screens__profiles__client_profile_screen$46dart, packages__my_ticket_care__providers__navigation_bar_provider$46dart, packages__my_ticket_care__reusable__widgets__search_bar$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__widgets__bottom_navigation_bar_item$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const image = packages__flutter__src__widgets__title$46dart.src__widgets__image;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const scrollable = packages__flutter__src__widgets__title$46dart.src__widgets__scrollable;
  const editable_text = packages__flutter__src__widgets__title$46dart.src__widgets__editable_text;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
  const icon_button = packages__flutter__src__material__icon_button$46dart.src__material__icon_button;
  const flexible_space_bar = packages__flutter__src__material__icon_button$46dart.src__material__flexible_space_bar;
  const list_tile = packages__flutter__src__material__icon_button$46dart.src__material__list_tile;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const bottom_navigation_bar = packages__flutter__src__material__icon_button$46dart.src__material__bottom_navigation_bar;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const make_booking_provider = packages__my_ticket_care__providers__make_booking_provider$46dart.providers__make_booking_provider;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const choice_chip_office_provider = packages__my_ticket_care__providers__choice_chip_office_provider$46dart.providers__choice_chip_office_provider;
  const preferred_size = packages__flutter__src__widgets__preferred_size$46dart.src__widgets__preferred_size;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const async = packages__flutter__src__widgets__async$46dart.src__widgets__async;
  const service$ = packages__my_ticket_care__src__shared__models__service$46dart.src__shared__models__service;
  const service_api = packages__my_ticket_care__services__service_api$46dart.services__service_api;
  const unimplemented_screen = packages__my_ticket_care__screens__unimplemented_screen$46dart.screens__unimplemented_screen;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const progress_indicator = packages__flutter__src__material__progress_indicator$46dart.src__material__progress_indicator;
  const chip_choice = packages__flutter__src__material__chip_choice$46dart.src__material__chip_choice;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const office_map_widget = packages__my_ticket_care__reusable__widgets__office_map_widget$46dart.reusable__widgets__office_map_widget;
  const positioned_tap_detector_2 = packages__positioned_tap_detector_2__positioned_tap_detector_2$46dart.positioned_tap_detector_2;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  const search_provider = packages__my_ticket_care__providers__search_provider$46dart.providers__search_provider;
  const make_booking = packages__my_ticket_care__screens__booking__make_booking$46dart.screens__booking__make_booking;
  const icon_data$ = packages__font_awesome_flutter__src__icon_data$46dart.src__icon_data;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const employee = packages__my_ticket_care__models__backend__employee$46dart.models__backend__employee;
  const circle_avatar = packages__flutter__src__material__circle_avatar$46dart.src__material__circle_avatar;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const office$ = packages__my_ticket_care__models__office$46dart.models__office;
  const company_profile_screen = packages__my_ticket_care__screens__profiles__company_profile_screen$46dart.screens__profiles__company_profile_screen;
  const company = packages__my_ticket_care__models__company$46dart.models__company;
  const unexpected_error = packages__my_ticket_care__reusable__widgets__unexpected_error$46dart.reusable__widgets__unexpected_error;
  const search_options_provider = packages__my_ticket_care__providers__search_options_provider$46dart.providers__search_options_provider;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const visibility = packages__flutter__src__widgets__visibility$46dart.src__widgets__visibility;
  const checkbox = packages__flutter__src__material__checkbox$46dart.src__material__checkbox;
  const my_bookings = packages__my_ticket_care__screens__booking__my_bookings$46dart.screens__booking__my_bookings;
  const client_profile_screen = packages__my_ticket_care__screens__profiles__client_profile_screen$46dart.screens__profiles__client_profile_screen;
  const navigation_bar_provider = packages__my_ticket_care__providers__navigation_bar_provider$46dart.providers__navigation_bar_provider;
  const search_bar = packages__my_ticket_care__reusable__widgets__search_bar$46dart.reusable__widgets__search_bar;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const bottom_navigation_bar_item = packages__flutter__src__widgets__bottom_navigation_bar_item$46dart.src__widgets__bottom_navigation_bar_item;
  var employee_profile_screen = Object.create(dart.library);
  var office_profile_screen = Object.create(dart.library);
  var model_cards = Object.create(dart.library);
  var select_company_screen = Object.create(dart.library);
  var search_all_screen = Object.create(dart.library);
  var main_screen = Object.create(dart.library);
  var screens = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $isNotEmpty = dartx.isNotEmpty;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfWidget: () => (T$.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ListOfService: () => (T$.ListOfService = dart.constFn(core.List$(service$.Service)))(),
    FutureBuilderOfListOfService: () => (T$.FutureBuilderOfListOfService = dart.constFn(async.FutureBuilder$(T$.ListOfService())))(),
    BuildContextAndintToServiceCard: () => (T$.BuildContextAndintToServiceCard = dart.constFn(dart.fnType(model_cards.ServiceCard, [framework.BuildContext, core.int])))(),
    AsyncSnapshotOfObjectN: () => (T$.AsyncSnapshotOfObjectN = dart.constFn(async.AsyncSnapshot$(T$.ObjectN())))(),
    BuildContextAndAsyncSnapshotOfObjectNToWidget: () => (T$.BuildContextAndAsyncSnapshotOfObjectNToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T$.AsyncSnapshotOfObjectN()])))(),
    StateOfStatefulWidget: () => (T$.StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))(),
    GlobalKeyOfStateOfStatefulWidget: () => (T$.GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(T$.StateOfStatefulWidget())))(),
    boolTovoid: () => (T$.boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))(),
    TapPositionAndLatLngToNull: () => (T$.TapPositionAndLatLngToNull = dart.constFn(dart.fnType(core.Null, [positioned_tap_detector_2.TapPosition, latlong.LatLng])))(),
    BuildContextToWidget: () => (T$.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    BuildContextToCompanyProfileScreen: () => (T$.BuildContextToCompanyProfileScreen = dart.constFn(dart.fnType(company_profile_screen.CompanyProfileScreen, [framework.BuildContext])))(),
    ListOfOffice: () => (T$.ListOfOffice = dart.constFn(core.List$(office$.Office)))(),
    FutureBuilderOfListOfOffice: () => (T$.FutureBuilderOfListOfOffice = dart.constFn(async.FutureBuilder$(T$.ListOfOffice())))(),
    BuildContextAndintToOfficeCard: () => (T$.BuildContextAndintToOfficeCard = dart.constFn(dart.fnType(model_cards.OfficeCard, [framework.BuildContext, core.int])))(),
    ListModelCardWidgetOfService: () => (T$.ListModelCardWidgetOfService = dart.constFn(search_all_screen.ListModelCardWidget$(service$.Service)))(),
    dynamicToWidget: () => (T$.dynamicToWidget = dart.constFn(dart.fnType(framework.Widget, [dart.dynamic])))(),
    ListModelCardWidgetOfOffice: () => (T$.ListModelCardWidgetOfOffice = dart.constFn(search_all_screen.ListModelCardWidget$(office$.Office)))(),
    ListModelCardWidgetOfEmployee: () => (T$.ListModelCardWidgetOfEmployee = dart.constFn(search_all_screen.ListModelCardWidget$(employee.Employee)))(),
    BuildContextAndintToWidget: () => (T$.BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))(),
    boolN: () => (T$.boolN = dart.constFn(dart.nullable(core.bool)))(),
    boolNTovoid: () => (T$.boolNTovoid = dart.constFn(dart.fnType(dart.void, [T$.boolN()])))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    StringToNull: () => (T$.StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))(),
    intTovoid: () => (T$.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EmployeeProfileScreen",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57490
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[3] || CT.C3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 22,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Especialidad"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 20,
        [OffsetBase__dx]: 1 / 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChipNavigation",
        [_Location_column]: 21,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[13] || CT.C13,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChipNavigation",
        [_Location_column]: 21,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[16] || CT.C16,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChipNavigation",
        [_Location_column]: 21,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 24,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 22,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PreferredSize",
        [_Location_column]: 21,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 50,
        [EdgeInsets_left]: 0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 30,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 27,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlexibleSpaceBar",
        [_Location_column]: 28,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverAppBar",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 15
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationCard",
        [_Location_column]: 20,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 81,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationCard",
        [_Location_column]: 22,
        [_Location_line]: 88,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationCard",
        [_Location_column]: 22,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 96,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 108,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 106,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: scroll_physics.NeverScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UnimplementedScreen",
        [_Location_column]: 45,
        [_Location_line]: 131,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: unimplemented_screen.UnimplementedScreen.prototype,
        [Widget__location]: C[44] || CT.C44,
        [Widget_key]: null
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ServiceCard",
        [_Location_column]: 32,
        [_Location_line]: 129,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 37,
        [_Location_line]: 124,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 34,
        [_Location_line]: 137,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 48,
        [_Location_line]: 137,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[50] || CT.C50,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Error"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[48] || CT.C48,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[49] || CT.C49,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[51] || CT.C51
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 32,
        [_Location_line]: 139,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 28,
        [_Location_line]: 140,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 0
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[55] || CT.C55,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[56] || CT.C56
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[53] || CT.C53,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[54] || CT.C54,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[51] || CT.C51
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FutureBuilder",
        [_Location_column]: 20,
        [_Location_line]: 116,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 100,
        [OffsetBase__dx]: 1 / 0
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 29,
        [_Location_line]: 145,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 144,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomScrollView",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChipNavigation",
        [_Location_column]: 9,
        [_Location_line]: 162,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 14,
        [_Location_line]: 176,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[67] || CT.C67,
        [TextStyle_inherit]: true
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChip",
        [_Location_column]: 12,
        [_Location_line]: 175,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1929379840
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[71] || CT.C71,
        [TextStyle_fontSize]: 19,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[72] || CT.C72,
        [TextStyle_inherit]: true
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 18,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[74] || CT.C74,
        [TextStyle_inherit]: true
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationCard",
        [_Location_column]: 9,
        [_Location_line]: 191,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 20
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 15
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 218,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 219,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 215,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 213,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 12,
        [_Location_line]: 210,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/employee_profile_screen.dart"
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeProfileScreen",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[85] || CT.C85,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[3] || CT.C3
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 22,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[89] || CT.C89,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChipNavigation",
        [_Location_column]: 21,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[92] || CT.C92,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChipNavigation",
        [_Location_column]: 21,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 27,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[95] || CT.C95,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChipNavigation",
        [_Location_column]: 21,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 24,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 22,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PreferredSize",
        [_Location_column]: 21,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Image",
        [_Location_column]: 32,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 27,
        [_Location_line]: 61,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlexibleSpaceBar",
        [_Location_column]: 28,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverAppBar",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationCard",
        [_Location_column]: 20,
        [_Location_line]: 78,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationCard",
        [_Location_column]: 22,
        [_Location_line]: 85,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 84,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C111() {
      return C[111] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C112() {
      return C[112] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 88,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C113() {
      return C[113] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C114() {
      return C[114] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 15
      });
    },
    get C115() {
      return C[115] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeMapWidget",
        [_Location_column]: 22,
        [_Location_line]: 104,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C116() {
      return C[116] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 20,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C117() {
      return C[117] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C118() {
      return C[118] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C119() {
      return C[119] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 109,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C120() {
      return C[120] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 108,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C121() {
      return C[121] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 5,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 5,
        [EdgeInsets_left]: 15
      });
    },
    get C122() {
      return C[122] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 121,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C123() {
      return C[123] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C124() {
      return C[124] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 118,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C125() {
      return C[125] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MakeBookingScreen",
        [_Location_column]: 41,
        [_Location_line]: 145,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C126() {
      return C[126] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ServiceCard",
        [_Location_column]: 34,
        [_Location_line]: 143,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C127() {
      return C[127] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 39,
        [_Location_line]: 138,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C129() {
      return C[129] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 36,
        [_Location_line]: 156,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C131() {
      return C[131] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 50,
        [_Location_line]: 156,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C130() {
      return C[130] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[131] || CT.C131,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Error"
      });
    },
    get C128() {
      return C[128] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[129] || CT.C129,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[130] || CT.C130,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[51] || CT.C51
      });
    },
    get C133() {
      return C[133] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 34,
        [_Location_line]: 158,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C135() {
      return C[135] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 30,
        [_Location_line]: 159,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C134() {
      return C[134] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[135] || CT.C135,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[56] || CT.C56
      });
    },
    get C132() {
      return C[132] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[133] || CT.C133,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[134] || CT.C134,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[51] || CT.C51
      });
    },
    get C136() {
      return C[136] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FutureBuilder",
        [_Location_column]: 22,
        [_Location_line]: 129,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C137() {
      return C[137] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C138() {
      return C[138] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C139() {
      return C[139] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 29,
        [_Location_line]: 165,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C140() {
      return C[140] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverToBoxAdapter",
        [_Location_column]: 11,
        [_Location_line]: 164,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C141() {
      return C[141] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomScrollView",
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C142() {
      return C[142] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C143() {
      return C[143] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChipNavigation",
        [_Location_column]: 9,
        [_Location_line]: 182,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C144() {
      return C[144] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 14,
        [_Location_line]: 196,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C145() {
      return C[145] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChip",
        [_Location_column]: 12,
        [_Location_line]: 195,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C146() {
      return C[146] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationCard",
        [_Location_column]: 9,
        [_Location_line]: 211,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C147() {
      return C[147] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 238,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C148() {
      return C[148] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 239,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C149() {
      return C[149] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 235,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C150() {
      return C[150] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 233,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C151() {
      return C[151] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 12,
        [_Location_line]: 230,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/office_profile_screen.dart"
      });
    },
    get C152() {
      return C[152] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ServiceCard",
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C154() {
      return C[154] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 26,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C156() {
      return C[156] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 20,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C157() {
      return C[157] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61617
      });
    },
    get C155() {
      return C[155] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[156] || CT.C156,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 35,
        [Icon_icon]: C[157] || CT.C157
      });
    },
    get C158() {
      return C[158] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C153() {
      return C[153] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget__location]: C[154] || CT.C154,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[155] || CT.C155,
        [Padding_padding]: C[158] || CT.C158
      });
    },
    get C159() {
      return C[159] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 31,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C161() {
      return C[161] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C162() {
      return C[162] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61068
      });
    },
    get C160() {
      return C[160] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[161] || CT.C161,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[162] || CT.C162
      });
    },
    get C163() {
      return C[163] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 16,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C164() {
      return C[164] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 14,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C165() {
      return C[165] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C166() {
      return C[166] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SpecialistCard",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C168() {
      return C[168] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 26,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C170() {
      return C[170] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 20,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C171() {
      return C[171] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58513
      });
    },
    get C169() {
      return C[169] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[170] || CT.C170,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 35,
        [Icon_icon]: C[171] || CT.C171
      });
    },
    get C167() {
      return C[167] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget__location]: C[168] || CT.C168,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[169] || CT.C169,
        [Padding_padding]: C[158] || CT.C158
      });
    },
    get C172() {
      return C[172] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C173() {
      return C[173] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C175() {
      return C[175] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 69,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C174() {
      return C[174] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[175] || CT.C175,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[162] || CT.C162
      });
    },
    get C176() {
      return C[176] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C177() {
      return C[177] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C178() {
      return C[178] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C179() {
      return C[179] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeCard",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C180() {
      return C[180] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleAvatar",
        [_Location_column]: 20,
        [_Location_line]: 101,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C181() {
      return C[181] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 0
      });
    },
    get C182() {
      return C[182] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 109,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C183() {
      return C[183] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 18,
        [_Location_line]: 107,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C184() {
      return C[184] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C186() {
      return C[186] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 116,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C185() {
      return C[185] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[186] || CT.C186,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[162] || CT.C162
      });
    },
    get C187() {
      return C[187] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 16,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C188() {
      return C[188] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 14,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C189() {
      return C[189] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 12,
        [_Location_line]: 96,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C190() {
      return C[190] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CompanyCard",
        [_Location_column]: 9,
        [_Location_line]: 135,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C191() {
      return C[191] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleAvatar",
        [_Location_column]: 20,
        [_Location_line]: 155,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C192() {
      return C[192] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 161,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C193() {
      return C[193] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 18,
        [_Location_line]: 159,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C194() {
      return C[194] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 163,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C196() {
      return C[196] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 168,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C195() {
      return C[195] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[196] || CT.C196,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[162] || CT.C162
      });
    },
    get C197() {
      return C[197] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CompanyProfileScreen",
        [_Location_column]: 39,
        [_Location_line]: 176,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C198() {
      return C[198] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListTile",
        [_Location_column]: 16,
        [_Location_line]: 154,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C199() {
      return C[199] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 14,
        [_Location_line]: 152,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C200() {
      return C[200] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 12,
        [_Location_line]: 150,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/reusable/widgets/model_cards.dart"
      });
    },
    get C201() {
      return C[201] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectCompanyScreen",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C203() {
      return C[203] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 23,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C202() {
      return C[202] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[203] || CT.C203,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[3] || CT.C3
      });
    },
    get C204() {
      return C[204] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconButton",
        [_Location_column]: 18,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C205() {
      return C[205] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C206() {
      return C[206] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AppBar",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C207() {
      return C[207] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 15
      });
    },
    get C208() {
      return C[208] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C210() {
      return C[210] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C209() {
      return C[209] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[210] || CT.C210,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C211() {
      return C[211] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MakeBookingScreen",
        [_Location_column]: 39,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C212() {
      return C[212] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeCard",
        [_Location_column]: 32,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C213() {
      return C[213] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 37,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C215() {
      return C[215] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 34,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C217() {
      return C[217] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 48,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C216() {
      return C[216] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[217] || CT.C217,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Error"
      });
    },
    get C214() {
      return C[214] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[215] || CT.C215,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[216] || CT.C216,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[51] || CT.C51
      });
    },
    get C219() {
      return C[219] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 32,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C221() {
      return C[221] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 28,
        [_Location_line]: 71,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C220() {
      return C[220] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[221] || CT.C221,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[56] || CT.C56
      });
    },
    get C218() {
      return C[218] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[219] || CT.C219,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[220] || CT.C220,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[51] || CT.C51
      });
    },
    get C222() {
      return C[222] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FutureBuilder",
        [_Location_column]: 22,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C223() {
      return C[223] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C224() {
      return C[224] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C225() {
      return C[225] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C226() {
      return C[226] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/select_company_screen.dart"
      });
    },
    get C227() {
      return C[227] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchAllScreen",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C229() {
      return C[229] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NingunaBusquedaWidget",
        [_Location_column]: 20,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C228() {
      return C[228] = dart.const({
        __proto__: search_all_screen.NingunaBusquedaWidget.prototype,
        [Widget__location]: C[229] || CT.C229,
        [Widget_key]: null
      });
    },
    get C231() {
      return C[231] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 20,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C233() {
      return C[233] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 34,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C232() {
      return C[232] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget__location]: C[233] || CT.C233,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[56] || CT.C56
      });
    },
    get C230() {
      return C[230] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[231] || CT.C231,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[232] || CT.C232,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[51] || CT.C51
      });
    },
    get C235() {
      return C[235] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NoResultsFoundWidget",
        [_Location_column]: 20,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C234() {
      return C[234] = dart.const({
        __proto__: search_all_screen.NoResultsFoundWidget.prototype,
        [Widget__location]: C[235] || CT.C235,
        [Widget_key]: null
      });
    },
    get C237() {
      return C[237] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UnexpectedError",
        [_Location_column]: 20,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C236() {
      return C[236] = dart.const({
        __proto__: unexpected_error.UnexpectedError.prototype,
        [Widget__location]: C[237] || CT.C237,
        [Widget_key]: null
      });
    },
    get C239() {
      return C[239] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C238() {
      return C[238] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[239] || CT.C239,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C241() {
      return C[241] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C240() {
      return C[240] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[241] || CT.C241,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Busqueda avanzada"
      });
    },
    get C242() {
      return C[242] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 18,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C243() {
      return C[243] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 9,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C245() {
      return C[245] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchOptionsWidget",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C244() {
      return C[244] = dart.const({
        __proto__: search_all_screen.SearchOptionsWidget.prototype,
        [Widget__location]: C[245] || CT.C245,
        [Widget_key]: null
      });
    },
    get C246() {
      return C[246] = dart.fn(search_all_screen.createServiceCard, T$.dynamicToWidget());
    },
    get C247() {
      return C[247] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListModelCardWidget",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C248() {
      return C[248] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C249() {
      return C[249] = dart.fn(search_all_screen.createOfficeCard, T$.dynamicToWidget());
    },
    get C250() {
      return C[250] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListModelCardWidget",
        [_Location_column]: 15,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C251() {
      return C[251] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 11,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C252() {
      return C[252] = dart.fn(search_all_screen.createEmployeeCard, T$.dynamicToWidget());
    },
    get C253() {
      return C[253] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListModelCardWidget",
        [_Location_column]: 15,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C254() {
      return C[254] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C255() {
      return C[255] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C256() {
      return C[256] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NingunaBusquedaWidget",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C257() {
      return C[257] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 11,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C258() {
      return C[258] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C259() {
      return C[259] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C260() {
      return C[260] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 92,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C261() {
      return C[261] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 12,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C262() {
      return C[262] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NoResultsFoundWidget",
        [_Location_column]: 9,
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C263() {
      return C[263] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C264() {
      return C[264] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C265() {
      return C[265] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 132,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C266() {
      return C[266] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 120,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C267() {
      return C[267] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 12,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C268() {
      return C[268] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchListViewBuilder",
        [_Location_column]: 9,
        [_Location_line]: 144,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C269() {
      return C[269] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 21,
        [_Location_line]: 152,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C270() {
      return C[270] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListModelCardWidget",
        [_Location_column]: 3,
        [_Location_line]: 163,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C271() {
      return C[271] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 20
      });
    },
    get C272() {
      return C[272] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 189,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C273() {
      return C[273] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 24,
        [_Location_line]: 187,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C274() {
      return C[274] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 15,
        [_Location_line]: 185,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C275() {
      return C[275] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Visibility",
        [_Location_column]: 30,
        [_Location_line]: 200,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C276() {
      return C[276] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchListViewBuilder",
        [_Location_column]: 15,
        [_Location_line]: 195,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C277() {
      return C[277] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 30,
        [_Location_line]: 218,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C278() {
      return C[278] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 21,
        [_Location_line]: 213,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C279() {
      return C[279] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 21,
        [_Location_line]: 220,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C280() {
      return C[280] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C281() {
      return C[281] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 11,
        [_Location_line]: 223,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C282() {
      return C[282] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchOptionsWidget",
        [_Location_column]: 9,
        [_Location_line]: 241,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C283() {
      return C[283] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Checkbox",
        [_Location_column]: 15,
        [_Location_line]: 255,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C285() {
      return C[285] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 262,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C284() {
      return C[284] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[285] || CT.C285,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Servicios"
      });
    },
    get C286() {
      return C[286] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 18,
        [_Location_line]: 252,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C287() {
      return C[287] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 251,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C288() {
      return C[288] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Checkbox",
        [_Location_column]: 15,
        [_Location_line]: 270,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C290() {
      return C[290] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 277,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C289() {
      return C[289] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[290] || CT.C290,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Sucursales"
      });
    },
    get C291() {
      return C[291] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 18,
        [_Location_line]: 267,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C292() {
      return C[292] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 266,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C293() {
      return C[293] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Checkbox",
        [_Location_column]: 15,
        [_Location_line]: 285,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C295() {
      return C[295] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 21,
        [_Location_line]: 292,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C294() {
      return C[294] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[295] || CT.C295,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Empleados"
      });
    },
    get C296() {
      return C[296] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 18,
        [_Location_line]: 282,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C297() {
      return C[297] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 281,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C298() {
      return C[298] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 249,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C300() {
      return C[300] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeProfileScreen",
        [_Location_column]: 53,
        [_Location_line]: 228,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C299() {
      return C[299] = dart.const({
        __proto__: office_profile_screen.OfficeProfileScreen.prototype,
        [Widget__location]: C[300] || CT.C300,
        [Widget_key]: null
      });
    },
    get C301() {
      return C[301] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeCard",
        [_Location_column]: 10,
        [_Location_line]: 228,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C303() {
      return C[303] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectCompanyScreen",
        [_Location_column]: 55,
        [_Location_line]: 232,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C302() {
      return C[302] = dart.const({
        __proto__: select_company_screen.SelectCompanyScreen.prototype,
        [Widget__location]: C[303] || CT.C303,
        [Widget_key]: null
      });
    },
    get C304() {
      return C[304] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ServiceCard",
        [_Location_column]: 10,
        [_Location_line]: 232,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C306() {
      return C[306] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "EmployeeProfileScreen",
        [_Location_column]: 39,
        [_Location_line]: 237,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C305() {
      return C[305] = dart.const({
        __proto__: employee_profile_screen.EmployeeProfileScreen.prototype,
        [Widget__location]: C[306] || CT.C306,
        [Widget_key]: null
      });
    },
    get C307() {
      return C[307] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SpecialistCard",
        [_Location_column]: 10,
        [_Location_line]: 236,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/search/search_all_screen.dart"
      });
    },
    get C310() {
      return C[310] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchAllScreen",
        [_Location_column]: 5,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C309() {
      return C[309] = dart.const({
        __proto__: search_all_screen.SearchAllScreen.prototype,
        [Widget__location]: C[310] || CT.C310,
        [Widget_key]: null
      });
    },
    get C312() {
      return C[312] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MyBookings",
        [_Location_column]: 5,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C311() {
      return C[311] = dart.const({
        __proto__: my_bookings.MyBookings.prototype,
        [Widget__location]: C[312] || CT.C312,
        [Widget_key]: null
      });
    },
    get C314() {
      return C[314] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClientProfileScreen",
        [_Location_column]: 5,
        [_Location_line]: 17,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C313() {
      return C[313] = dart.const({
        __proto__: client_profile_screen.ClientProfileScreen.prototype,
        [Widget__location]: C[314] || CT.C314,
        [Widget_key]: null
      });
    },
    get C308() {
      return C[308] = dart.constList([C[309] || CT.C309, C[311] || CT.C311, C[313] || CT.C313], framework.Widget);
    },
    get C315() {
      return C[315] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MainScreen",
        [_Location_column]: 3,
        [_Location_line]: 12,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C316() {
      return C[316] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 170,
        [OffsetBase__dx]: 1 / 0
      });
    },
    get C317() {
      return C[317] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 25,
        [EdgeInsets_top]: 30,
        [EdgeInsets_left]: 25
      });
    },
    get C318() {
      return C[318] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 19,
        [_Location_line]: 53,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C320() {
      return C[320] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 25,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C319() {
      return C[319] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[320] || CT.C320,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C321() {
      return C[321] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C322() {
      return C[322] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 15,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C323() {
      return C[323] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SearchBar",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C324() {
      return C[324] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C325() {
      return C[325] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 18,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C326() {
      return C[326] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 16,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C327() {
      return C[327] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PreferredSize",
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C328() {
      return C[328] = dart.const({
        __proto__: icon_theme_data.IconThemeData.prototype,
        [IconThemeData_shadows]: null,
        [IconThemeData_size]: 29,
        [IconThemeData__opacity]: null,
        [IconThemeData_color]: null
      });
    },
    get C332() {
      return C[332] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 21,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C333() {
      return C[333] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58727
      });
    },
    get C331() {
      return C[331] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[332] || CT.C332,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[333] || CT.C333
      });
    },
    get C330() {
      return C[330] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Buscar",
        [BottomNavigationBarItem_activeIcon]: C[331] || CT.C331,
        [BottomNavigationBarItem_icon]: C[331] || CT.C331
      });
    },
    get C336() {
      return C[336] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 21,
        [_Location_line]: 105,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C337() {
      return C[337] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57961
      });
    },
    get C335() {
      return C[335] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[336] || CT.C336,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[337] || CT.C337
      });
    },
    get C334() {
      return C[334] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Citas",
        [BottomNavigationBarItem_activeIcon]: C[335] || CT.C335,
        [BottomNavigationBarItem_icon]: C[335] || CT.C335
      });
    },
    get C340() {
      return C[340] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 21,
        [_Location_line]: 110,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C339() {
      return C[339] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[340] || CT.C340,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[171] || CT.C171
      });
    },
    get C338() {
      return C[338] = dart.const({
        __proto__: bottom_navigation_bar_item.BottomNavigationBarItem.prototype,
        [BottomNavigationBarItem_tooltip]: null,
        [BottomNavigationBarItem_backgroundColor]: null,
        [BottomNavigationBarItem_label]: "Perfil",
        [BottomNavigationBarItem_activeIcon]: C[339] || CT.C339,
        [BottomNavigationBarItem_icon]: C[339] || CT.C339
      });
    },
    get C329() {
      return C[329] = dart.constList([C[330] || CT.C330, C[334] || CT.C334, C[338] || CT.C338], bottom_navigation_bar_item.BottomNavigationBarItem);
    },
    get C341() {
      return C[341] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BottomNavigationBar",
        [_Location_column]: 28,
        [_Location_line]: 89,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    },
    get C342() {
      return C[342] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/home/main_screen.dart"
      });
    }
  }, false);
  var C = Array(343).fill(void 0);
  var I = [
    "package:my_ticket_care/screens/profiles/employee_profile_screen.dart",
    "package:my_ticket_care/screens/profiles/office_profile_screen.dart",
    "package:my_ticket_care/reusable/widgets/model_cards.dart",
    "package:my_ticket_care/screens/booking/select_company_screen.dart",
    "package:my_ticket_care/screens/search/search_all_screen.dart",
    "package:my_ticket_care/screens/home/main_screen.dart"
  ];
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
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  var Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  var Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var Align_alignment = dart.privateName(basic, "Align.alignment");
  var ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  var ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  var ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  var ProgressIndicator_color = dart.privateName(progress_indicator, "ProgressIndicator.color");
  var ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  var ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  var CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var CircularProgressIndicator__indicatorType = dart.privateName(progress_indicator, "CircularProgressIndicator._indicatorType");
  employee_profile_screen.EmployeeProfileScreen = class EmployeeProfileScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new employee_profile_screen.EmployeeProfileScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let selectedEmployee = provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).selectedEmployee;
      return new scaffold.Scaffold.new({body: new scroll_view.CustomScrollView.new({slivers: T$.JSArrayOfWidget().of([new app_bar.SliverAppBar.new({leading: new icon_button.IconButton.new({icon: C[1] || CT.C1, onPressed: dart.fn(() => {
                  provider['ReadContext|read'](choice_chip_office_provider.ChoiceChipOfficeProvider, context).changeIndex(0);
                  navigator.Navigator.pop(T$.ObjectN(), context);
                }, T$.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), pinned: true, expandedHeight: 250.0, backgroundColor: colorScheme.primary, title: C[5] || CT.C5, bottom: new preferred_size.PreferredSize.new({preferredSize: C[7] || CT.C7, child: new basic.Padding.new({padding: C[8] || CT.C8, child: new basic.Row.new({children: T$.JSArrayOfWidget().of([C[9] || CT.C9, new employee_profile_screen.ChoiceChipNavigation.new({label: "Información", index: 0, keyContext: employee_profile_screen.ScrollKeys.key1, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), C[12] || CT.C12, new employee_profile_screen.ChoiceChipNavigation.new({label: "Especialidades", index: 1, keyContext: employee_profile_screen.ScrollKeys.key2, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), C[15] || CT.C15, new employee_profile_screen.ChoiceChipNavigation.new({label: "Servicios", index: 2, keyContext: employee_profile_screen.ScrollKeys.key3, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17})]), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), flexibleSpace: new flexible_space_bar.FlexibleSpaceBar.new({background: new container.Container.new({color: colorScheme.primary, padding: C[21] || CT.C21, child: new image.Image.network("https://cdn-icons-png.flaticon.com/512/115/115893.png", {$creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), new basic.SliverToBoxAdapter.new({child: new basic.Padding.new({padding: C[26] || CT.C26, child: new text.Text.new("Información básica", {key: employee_profile_screen.ScrollKeys.key1, style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), new basic.SliverToBoxAdapter.new({child: new employee_profile_screen.OfficeInformationCard.new({title: "Nombre", body: selectedEmployee.personName, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), new basic.SliverToBoxAdapter.new({child: new employee_profile_screen.OfficeInformationCard.new({title: "Compañia", body: selectedEmployee.companyName, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32}), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33}), new basic.SliverToBoxAdapter.new({child: new employee_profile_screen.OfficeInformationCard.new({title: "Contacto", body: selectedEmployee.email + "\n" + selectedEmployee.mobile, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34}), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35}), new basic.SliverToBoxAdapter.new({child: new basic.Padding.new({padding: C[26] || CT.C26, child: new text.Text.new("Especialidades: ", {key: employee_profile_screen.ScrollKeys.key2, style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[36] || CT.C36}), $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38}), new basic.SliverToBoxAdapter.new({child: new basic.Padding.new({padding: C[26] || CT.C26, child: new text.Text.new("Reservar servicios: ", {key: employee_profile_screen.ScrollKeys.key3, style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[39] || CT.C39}), $creationLocationd_0dea112b090073317d4: C[40] || CT.C40}), $creationLocationd_0dea112b090073317d4: C[41] || CT.C41}), new basic.SliverToBoxAdapter.new({child: new (T$.FutureBuilderOfListOfService()).new({future: service_api.ServiceAPI.getServicesFromEmployeeId(selectedEmployee.employeeId), builder: dart.fn((context, snapshot) => {
                  if (snapshot.hasData && snapshot.connectionState === async.ConnectionState.done) {
                    let services = T$.ListOfService().as(snapshot.data);
                    return new scroll_view.ListView.builder({physics: C[42] || CT.C42, shrinkWrap: true, itemCount: services[$length], itemBuilder: dart.fn((context, index) => new model_cards.ServiceCard.new({item: services[$_get](index), nextScreen: C[43] || CT.C43, $creationLocationd_0dea112b090073317d4: C[45] || CT.C45}), T$.BuildContextAndintToServiceCard()), $creationLocationd_0dea112b090073317d4: C[46] || CT.C46});
                  }
                  if (snapshot.hasError) {
                    return C[47] || CT.C47;
                  }
                  return C[52] || CT.C52;
                }, T$.BuildContextAndAsyncSnapshotOfObjectNToWidget()), $creationLocationd_0dea112b090073317d4: C[57] || CT.C57}), $creationLocationd_0dea112b090073317d4: C[58] || CT.C58}), new basic.SliverToBoxAdapter.new({child: new basic.SizedBox.fromSize({size: C[59] || CT.C59, $creationLocationd_0dea112b090073317d4: C[60] || CT.C60}), $creationLocationd_0dea112b090073317d4: C[61] || CT.C61})]), $creationLocationd_0dea112b090073317d4: C[62] || CT.C62}), $creationLocationd_0dea112b090073317d4: C[63] || CT.C63});
    }
  };
  (employee_profile_screen.EmployeeProfileScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    employee_profile_screen.EmployeeProfileScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = employee_profile_screen.EmployeeProfileScreen.prototype;
  dart.addTypeTests(employee_profile_screen.EmployeeProfileScreen);
  dart.addTypeCaches(employee_profile_screen.EmployeeProfileScreen);
  dart.setMethodSignature(employee_profile_screen.EmployeeProfileScreen, () => ({
    __proto__: dart.getMethods(employee_profile_screen.EmployeeProfileScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(employee_profile_screen.EmployeeProfileScreen, I[0]);
  employee_profile_screen.ScrollKeys = class ScrollKeys extends core.Object {
    static ['_#new#tearOff']() {
      return new employee_profile_screen.ScrollKeys.new();
    }
  };
  (employee_profile_screen.ScrollKeys.new = function() {
    ;
  }).prototype = employee_profile_screen.ScrollKeys.prototype;
  dart.addTypeTests(employee_profile_screen.ScrollKeys);
  dart.addTypeCaches(employee_profile_screen.ScrollKeys);
  dart.setLibraryUri(employee_profile_screen.ScrollKeys, I[0]);
  dart.setStaticFieldSignature(employee_profile_screen.ScrollKeys, () => ['key1', 'key2', 'key3']);
  dart.defineLazy(employee_profile_screen.ScrollKeys, {
    /*employee_profile_screen.ScrollKeys.key1*/get key1() {
      return T$.GlobalKeyOfStateOfStatefulWidget().new();
    },
    /*employee_profile_screen.ScrollKeys.key2*/get key2() {
      return T$.GlobalKeyOfStateOfStatefulWidget().new();
    },
    /*employee_profile_screen.ScrollKeys.key3*/get key3() {
      return T$.GlobalKeyOfStateOfStatefulWidget().new();
    }
  }, false);
  var label$ = dart.privateName(employee_profile_screen, "ChoiceChipNavigation.label");
  var index$ = dart.privateName(employee_profile_screen, "ChoiceChipNavigation.index");
  var keyContext$ = dart.privateName(employee_profile_screen, "ChoiceChipNavigation.keyContext");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var Color_value = dart.privateName(ui, "Color.value");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  employee_profile_screen.ChoiceChipNavigation = class ChoiceChipNavigation extends framework.StatelessWidget {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get keyContext() {
      return this[keyContext$];
    }
    set keyContext(value) {
      super.keyContext = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let keyContext = opts && 'keyContext' in opts ? opts.keyContext : null;
      return new employee_profile_screen.ChoiceChipNavigation.new({key: key, label: label, index: index, keyContext: keyContext, $creationLocationd_0dea112b090073317d4: C[64] || CT.C64});
    }
    build(context) {
      let isSelected = provider['WatchContext|watch'](choice_chip_office_provider.ChoiceChipOfficeProvider, context).index === this.index;
      return new chip_choice.ChoiceChip.new({label: new text.Text.new(this.label, {$creationLocationd_0dea112b090073317d4: C[65] || CT.C65}), selected: isSelected, selectedColor: theme.Theme.of(context).colorScheme.secondary, labelStyle: isSelected ? C[66] || CT.C66 : null, onSelected: dart.fn(value => {
          provider['ReadContext|read'](choice_chip_office_provider.ChoiceChipOfficeProvider, context).changeIndex(this.index);
          scrollable.Scrollable.ensureVisible(dart.nullCheck(this.keyContext.currentContext), {duration: C[68] || CT.C68});
        }, T$.boolTovoid()), $creationLocationd_0dea112b090073317d4: C[69] || CT.C69});
    }
  };
  (employee_profile_screen.ChoiceChipNavigation.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let keyContext = opts && 'keyContext' in opts ? opts.keyContext : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[label$] = label;
    this[index$] = index;
    this[keyContext$] = keyContext;
    employee_profile_screen.ChoiceChipNavigation.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = employee_profile_screen.ChoiceChipNavigation.prototype;
  dart.addTypeTests(employee_profile_screen.ChoiceChipNavigation);
  dart.addTypeCaches(employee_profile_screen.ChoiceChipNavigation);
  dart.setMethodSignature(employee_profile_screen.ChoiceChipNavigation, () => ({
    __proto__: dart.getMethods(employee_profile_screen.ChoiceChipNavigation.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(employee_profile_screen.ChoiceChipNavigation, I[0]);
  dart.setFieldSignature(employee_profile_screen.ChoiceChipNavigation, () => ({
    __proto__: dart.getFields(employee_profile_screen.ChoiceChipNavigation.__proto__),
    label: dart.finalFieldType(core.String),
    index: dart.finalFieldType(core.int),
    keyContext: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget)))
  }));
  var title$ = dart.privateName(employee_profile_screen, "OfficeInformationCard.title");
  var body$ = dart.privateName(employee_profile_screen, "OfficeInformationCard.body");
  var titleStyle = dart.privateName(employee_profile_screen, "OfficeInformationCard.titleStyle");
  var bodyStyle = dart.privateName(employee_profile_screen, "OfficeInformationCard.bodyStyle");
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  employee_profile_screen.OfficeInformationCard = class OfficeInformationCard extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    get titleStyle() {
      return this[titleStyle];
    }
    set titleStyle(value) {
      super.titleStyle = value;
    }
    get bodyStyle() {
      return this[bodyStyle];
    }
    set bodyStyle(value) {
      super.bodyStyle = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let body = opts && 'body' in opts ? opts.body : null;
      return new employee_profile_screen.OfficeInformationCard.new({key: key, title: title, body: body, $creationLocationd_0dea112b090073317d4: C[75] || CT.C75});
    }
    build(context) {
      return new card.Card.new({elevation: 5.0, margin: C[76] || CT.C76, child: new basic.Padding.new({padding: C[77] || CT.C77, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T$.JSArrayOfWidget().of([new text.Text.new(this.title, {style: this.titleStyle, $creationLocationd_0dea112b090073317d4: C[78] || CT.C78}), new text.Text.new(this.body, {style: this.bodyStyle, $creationLocationd_0dea112b090073317d4: C[79] || CT.C79})]), $creationLocationd_0dea112b090073317d4: C[80] || CT.C80}), $creationLocationd_0dea112b090073317d4: C[81] || CT.C81}), $creationLocationd_0dea112b090073317d4: C[82] || CT.C82});
    }
  };
  (employee_profile_screen.OfficeInformationCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[titleStyle] = C[70] || CT.C70;
    this[bodyStyle] = C[73] || CT.C73;
    this[title$] = title;
    this[body$] = body;
    employee_profile_screen.OfficeInformationCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = employee_profile_screen.OfficeInformationCard.prototype;
  dart.addTypeTests(employee_profile_screen.OfficeInformationCard);
  dart.addTypeCaches(employee_profile_screen.OfficeInformationCard);
  dart.setMethodSignature(employee_profile_screen.OfficeInformationCard, () => ({
    __proto__: dart.getMethods(employee_profile_screen.OfficeInformationCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(employee_profile_screen.OfficeInformationCard, I[0]);
  dart.setFieldSignature(employee_profile_screen.OfficeInformationCard, () => ({
    __proto__: dart.getFields(employee_profile_screen.OfficeInformationCard.__proto__),
    title: dart.finalFieldType(core.String),
    body: dart.finalFieldType(core.String),
    titleStyle: dart.finalFieldType(text_style.TextStyle),
    bodyStyle: dart.finalFieldType(text_style.TextStyle)
  }));
  office_profile_screen.OfficeProfileScreen = class OfficeProfileScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new office_profile_screen.OfficeProfileScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[83] || CT.C83});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let selectedOffice = provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).selectedOffice;
      return new scaffold.Scaffold.new({body: new scroll_view.CustomScrollView.new({slivers: T$.JSArrayOfWidget().of([new app_bar.SliverAppBar.new({leading: new icon_button.IconButton.new({icon: C[84] || CT.C84, onPressed: dart.fn(() => {
                  provider['ReadContext|read'](choice_chip_office_provider.ChoiceChipOfficeProvider, context).changeIndex(0);
                  navigator.Navigator.pop(T$.ObjectN(), context);
                }, T$.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[86] || CT.C86}), pinned: true, expandedHeight: 250.0, backgroundColor: colorScheme.primary, title: new text.Text.new(selectedOffice.officeName, {$creationLocationd_0dea112b090073317d4: C[87] || CT.C87}), bottom: new preferred_size.PreferredSize.new({preferredSize: C[7] || CT.C7, child: new basic.Padding.new({padding: C[8] || CT.C8, child: new basic.Row.new({children: T$.JSArrayOfWidget().of([C[88] || CT.C88, new office_profile_screen.ChoiceChipNavigation.new({label: "Información", index: 0, keyContext: office_profile_screen.ScrollKeys.key1, $creationLocationd_0dea112b090073317d4: C[90] || CT.C90}), C[91] || CT.C91, new office_profile_screen.ChoiceChipNavigation.new({label: "Ubicación", index: 1, keyContext: office_profile_screen.ScrollKeys.key2, $creationLocationd_0dea112b090073317d4: C[93] || CT.C93}), C[94] || CT.C94, new office_profile_screen.ChoiceChipNavigation.new({label: "Servicios", index: 2, keyContext: office_profile_screen.ScrollKeys.key3, $creationLocationd_0dea112b090073317d4: C[96] || CT.C96})]), $creationLocationd_0dea112b090073317d4: C[97] || CT.C97}), $creationLocationd_0dea112b090073317d4: C[98] || CT.C98}), $creationLocationd_0dea112b090073317d4: C[99] || CT.C99}), flexibleSpace: new flexible_space_bar.FlexibleSpaceBar.new({background: new container.Container.new({color: colorScheme.primary, padding: C[21] || CT.C21, child: new image.Image.network(dart.nullCheck(selectedOffice.companyLogo), {$creationLocationd_0dea112b090073317d4: C[100] || CT.C100}), $creationLocationd_0dea112b090073317d4: C[101] || CT.C101}), $creationLocationd_0dea112b090073317d4: C[102] || CT.C102}), $creationLocationd_0dea112b090073317d4: C[103] || CT.C103}), new basic.SliverToBoxAdapter.new({child: new basic.Padding.new({padding: C[26] || CT.C26, child: new text.Text.new("Información básica", {key: office_profile_screen.ScrollKeys.key1, style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[104] || CT.C104}), $creationLocationd_0dea112b090073317d4: C[105] || CT.C105}), $creationLocationd_0dea112b090073317d4: C[106] || CT.C106}), new basic.SliverToBoxAdapter.new({child: new office_profile_screen.OfficeInformationCard.new({title: "Sucursal", body: selectedOffice.officeName + ", " + dart.nullCheck(selectedOffice.companyName), $creationLocationd_0dea112b090073317d4: C[107] || CT.C107}), $creationLocationd_0dea112b090073317d4: C[108] || CT.C108}), new basic.SliverToBoxAdapter.new({child: new office_profile_screen.OfficeInformationCard.new({title: "Dirección", body: selectedOffice.address, $creationLocationd_0dea112b090073317d4: C[109] || CT.C109}), $creationLocationd_0dea112b090073317d4: C[110] || CT.C110}), new basic.SliverToBoxAdapter.new({child: new basic.Padding.new({padding: C[26] || CT.C26, child: new text.Text.new("Ubicación", {key: office_profile_screen.ScrollKeys.key2, style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[111] || CT.C111}), $creationLocationd_0dea112b090073317d4: C[112] || CT.C112}), $creationLocationd_0dea112b090073317d4: C[113] || CT.C113}), new basic.SliverToBoxAdapter.new({child: new container.Container.new({padding: C[114] || CT.C114, height: 400.0, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10.0)}), child: new office_map_widget.OfficeMapWidget.new({office: selectedOffice, onTap: dart.fn((position, _) => {
                  }, T$.TapPositionAndLatLngToNull()), $creationLocationd_0dea112b090073317d4: C[115] || CT.C115}), $creationLocationd_0dea112b090073317d4: C[116] || CT.C116}), $creationLocationd_0dea112b090073317d4: C[117] || CT.C117}), new basic.SliverToBoxAdapter.new({child: new basic.Padding.new({padding: C[26] || CT.C26, child: new text.Text.new("Servicios", {key: office_profile_screen.ScrollKeys.key3, style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[118] || CT.C118}), $creationLocationd_0dea112b090073317d4: C[119] || CT.C119}), $creationLocationd_0dea112b090073317d4: C[120] || CT.C120}), new basic.SliverToBoxAdapter.new({child: new basic.Padding.new({padding: C[121] || CT.C121, child: new text.Text.new("Elige un servicio para reservar en este sucursal", {style: theme.Theme.of(context).textTheme.bodyLarge, $creationLocationd_0dea112b090073317d4: C[122] || CT.C122}), $creationLocationd_0dea112b090073317d4: C[123] || CT.C123}), $creationLocationd_0dea112b090073317d4: C[124] || CT.C124}), new basic.SliverToBoxAdapter.new({child: new basic.SizedBox.new({child: new (T$.FutureBuilderOfListOfService()).new({future: provider['ReadContext|read'](search_provider.SearchProvider, context).searchServicesByOffice(selectedOffice.officeId), builder: dart.fn((context, snapshot) => {
                    if (snapshot.hasData && snapshot.connectionState === async.ConnectionState.done) {
                      let services = T$.ListOfService().as(snapshot.data);
                      return new scroll_view.ListView.builder({physics: C[42] || CT.C42, shrinkWrap: true, itemCount: services[$length], itemBuilder: dart.fn((context, index) => new model_cards.ServiceCard.new({item: services[$_get](index), nextScreen: new make_booking.MakeBookingScreen.new({officeId: provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).selectedOffice.officeId, $creationLocationd_0dea112b090073317d4: C[125] || CT.C125}), $creationLocationd_0dea112b090073317d4: C[126] || CT.C126}), T$.BuildContextAndintToServiceCard()), $creationLocationd_0dea112b090073317d4: C[127] || CT.C127});
                    }
                    if (snapshot.hasError) {
                      return C[128] || CT.C128;
                    }
                    return C[132] || CT.C132;
                  }, T$.BuildContextAndAsyncSnapshotOfObjectNToWidget()), $creationLocationd_0dea112b090073317d4: C[136] || CT.C136}), $creationLocationd_0dea112b090073317d4: C[137] || CT.C137}), $creationLocationd_0dea112b090073317d4: C[138] || CT.C138}), new basic.SliverToBoxAdapter.new({child: new basic.SizedBox.fromSize({size: C[59] || CT.C59, $creationLocationd_0dea112b090073317d4: C[139] || CT.C139}), $creationLocationd_0dea112b090073317d4: C[140] || CT.C140})]), $creationLocationd_0dea112b090073317d4: C[141] || CT.C141}), $creationLocationd_0dea112b090073317d4: C[142] || CT.C142});
    }
  };
  (office_profile_screen.OfficeProfileScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    office_profile_screen.OfficeProfileScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = office_profile_screen.OfficeProfileScreen.prototype;
  dart.addTypeTests(office_profile_screen.OfficeProfileScreen);
  dart.addTypeCaches(office_profile_screen.OfficeProfileScreen);
  dart.setMethodSignature(office_profile_screen.OfficeProfileScreen, () => ({
    __proto__: dart.getMethods(office_profile_screen.OfficeProfileScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(office_profile_screen.OfficeProfileScreen, I[1]);
  office_profile_screen.ScrollKeys = class ScrollKeys extends core.Object {
    static ['_#new#tearOff']() {
      return new office_profile_screen.ScrollKeys.new();
    }
  };
  (office_profile_screen.ScrollKeys.new = function() {
    ;
  }).prototype = office_profile_screen.ScrollKeys.prototype;
  dart.addTypeTests(office_profile_screen.ScrollKeys);
  dart.addTypeCaches(office_profile_screen.ScrollKeys);
  dart.setLibraryUri(office_profile_screen.ScrollKeys, I[1]);
  dart.setStaticFieldSignature(office_profile_screen.ScrollKeys, () => ['key1', 'key2', 'key3']);
  dart.defineLazy(office_profile_screen.ScrollKeys, {
    /*office_profile_screen.ScrollKeys.key1*/get key1() {
      return T$.GlobalKeyOfStateOfStatefulWidget().new();
    },
    /*office_profile_screen.ScrollKeys.key2*/get key2() {
      return T$.GlobalKeyOfStateOfStatefulWidget().new();
    },
    /*office_profile_screen.ScrollKeys.key3*/get key3() {
      return T$.GlobalKeyOfStateOfStatefulWidget().new();
    }
  }, false);
  var label$0 = dart.privateName(office_profile_screen, "ChoiceChipNavigation.label");
  var index$0 = dart.privateName(office_profile_screen, "ChoiceChipNavigation.index");
  var keyContext$0 = dart.privateName(office_profile_screen, "ChoiceChipNavigation.keyContext");
  office_profile_screen.ChoiceChipNavigation = class ChoiceChipNavigation extends framework.StatelessWidget {
    get label() {
      return this[label$0];
    }
    set label(value) {
      super.label = value;
    }
    get index() {
      return this[index$0];
    }
    set index(value) {
      super.index = value;
    }
    get keyContext() {
      return this[keyContext$0];
    }
    set keyContext(value) {
      super.keyContext = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let keyContext = opts && 'keyContext' in opts ? opts.keyContext : null;
      return new office_profile_screen.ChoiceChipNavigation.new({key: key, label: label, index: index, keyContext: keyContext, $creationLocationd_0dea112b090073317d4: C[143] || CT.C143});
    }
    build(context) {
      let isSelected = provider['WatchContext|watch'](choice_chip_office_provider.ChoiceChipOfficeProvider, context).index === this.index;
      return new chip_choice.ChoiceChip.new({label: new text.Text.new(this.label, {$creationLocationd_0dea112b090073317d4: C[144] || CT.C144}), selected: isSelected, selectedColor: theme.Theme.of(context).colorScheme.secondary, labelStyle: isSelected ? C[66] || CT.C66 : null, onSelected: dart.fn(value => {
          provider['ReadContext|read'](choice_chip_office_provider.ChoiceChipOfficeProvider, context).changeIndex(this.index);
          scrollable.Scrollable.ensureVisible(dart.nullCheck(this.keyContext.currentContext), {duration: C[68] || CT.C68});
        }, T$.boolTovoid()), $creationLocationd_0dea112b090073317d4: C[145] || CT.C145});
    }
  };
  (office_profile_screen.ChoiceChipNavigation.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let keyContext = opts && 'keyContext' in opts ? opts.keyContext : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[label$0] = label;
    this[index$0] = index;
    this[keyContext$0] = keyContext;
    office_profile_screen.ChoiceChipNavigation.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = office_profile_screen.ChoiceChipNavigation.prototype;
  dart.addTypeTests(office_profile_screen.ChoiceChipNavigation);
  dart.addTypeCaches(office_profile_screen.ChoiceChipNavigation);
  dart.setMethodSignature(office_profile_screen.ChoiceChipNavigation, () => ({
    __proto__: dart.getMethods(office_profile_screen.ChoiceChipNavigation.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(office_profile_screen.ChoiceChipNavigation, I[1]);
  dart.setFieldSignature(office_profile_screen.ChoiceChipNavigation, () => ({
    __proto__: dart.getFields(office_profile_screen.ChoiceChipNavigation.__proto__),
    label: dart.finalFieldType(core.String),
    index: dart.finalFieldType(core.int),
    keyContext: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget)))
  }));
  var title$0 = dart.privateName(office_profile_screen, "OfficeInformationCard.title");
  var body$0 = dart.privateName(office_profile_screen, "OfficeInformationCard.body");
  var titleStyle$ = dart.privateName(office_profile_screen, "OfficeInformationCard.titleStyle");
  var bodyStyle$ = dart.privateName(office_profile_screen, "OfficeInformationCard.bodyStyle");
  office_profile_screen.OfficeInformationCard = class OfficeInformationCard extends framework.StatelessWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get body() {
      return this[body$0];
    }
    set body(value) {
      super.body = value;
    }
    get titleStyle() {
      return this[titleStyle$];
    }
    set titleStyle(value) {
      super.titleStyle = value;
    }
    get bodyStyle() {
      return this[bodyStyle$];
    }
    set bodyStyle(value) {
      super.bodyStyle = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let body = opts && 'body' in opts ? opts.body : null;
      return new office_profile_screen.OfficeInformationCard.new({key: key, title: title, body: body, $creationLocationd_0dea112b090073317d4: C[146] || CT.C146});
    }
    build(context) {
      return new card.Card.new({elevation: 5.0, margin: C[76] || CT.C76, child: new basic.Padding.new({padding: C[77] || CT.C77, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T$.JSArrayOfWidget().of([new text.Text.new(this.title, {style: this.titleStyle, $creationLocationd_0dea112b090073317d4: C[147] || CT.C147}), new text.Text.new(this.body, {style: this.bodyStyle, $creationLocationd_0dea112b090073317d4: C[148] || CT.C148})]), $creationLocationd_0dea112b090073317d4: C[149] || CT.C149}), $creationLocationd_0dea112b090073317d4: C[150] || CT.C150}), $creationLocationd_0dea112b090073317d4: C[151] || CT.C151});
    }
  };
  (office_profile_screen.OfficeInformationCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[titleStyle$] = C[70] || CT.C70;
    this[bodyStyle$] = C[73] || CT.C73;
    this[title$0] = title;
    this[body$0] = body;
    office_profile_screen.OfficeInformationCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = office_profile_screen.OfficeInformationCard.prototype;
  dart.addTypeTests(office_profile_screen.OfficeInformationCard);
  dart.addTypeCaches(office_profile_screen.OfficeInformationCard);
  dart.setMethodSignature(office_profile_screen.OfficeInformationCard, () => ({
    __proto__: dart.getMethods(office_profile_screen.OfficeInformationCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(office_profile_screen.OfficeInformationCard, I[1]);
  dart.setFieldSignature(office_profile_screen.OfficeInformationCard, () => ({
    __proto__: dart.getFields(office_profile_screen.OfficeInformationCard.__proto__),
    title: dart.finalFieldType(core.String),
    body: dart.finalFieldType(core.String),
    titleStyle: dart.finalFieldType(text_style.TextStyle),
    bodyStyle: dart.finalFieldType(text_style.TextStyle)
  }));
  var item$ = dart.privateName(model_cards, "ServiceCard.item");
  var nextScreen$ = dart.privateName(model_cards, "ServiceCard.nextScreen");
  var Padding_padding = dart.privateName(basic, "Padding.padding");
  model_cards.ServiceCard = class ServiceCard extends framework.StatelessWidget {
    get item() {
      return this[item$];
    }
    set item(value) {
      super.item = value;
    }
    get nextScreen() {
      return this[nextScreen$];
    }
    set nextScreen(value) {
      super.nextScreen = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let item = opts && 'item' in opts ? opts.item : null;
      let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
      return new model_cards.ServiceCard.new({key: key, item: item, nextScreen: nextScreen, $creationLocationd_0dea112b090073317d4: C[152] || CT.C152});
    }
    build(context) {
      return new basic.SizedBox.new({child: new card.Card.new({elevation: 0.0, child: new list_tile.ListTile.new({leading: C[153] || CT.C153, title: new text.Text.new(this.item.serviceName, {$creationLocationd_0dea112b090073317d4: C[159] || CT.C159}), trailing: C[160] || CT.C160, onTap: dart.fn(() => {
              provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).setService(this.item);
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => this.nextScreen, T$.BuildContextToWidget())}));
            }, T$.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[163] || CT.C163}), $creationLocationd_0dea112b090073317d4: C[164] || CT.C164}), $creationLocationd_0dea112b090073317d4: C[165] || CT.C165});
    }
  };
  (model_cards.ServiceCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$] = item;
    this[nextScreen$] = nextScreen;
    model_cards.ServiceCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = model_cards.ServiceCard.prototype;
  dart.addTypeTests(model_cards.ServiceCard);
  dart.addTypeCaches(model_cards.ServiceCard);
  dart.setMethodSignature(model_cards.ServiceCard, () => ({
    __proto__: dart.getMethods(model_cards.ServiceCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(model_cards.ServiceCard, I[2]);
  dart.setFieldSignature(model_cards.ServiceCard, () => ({
    __proto__: dart.getFields(model_cards.ServiceCard.__proto__),
    item: dart.finalFieldType(service$.Service),
    nextScreen: dart.finalFieldType(framework.Widget)
  }));
  var item$0 = dart.privateName(model_cards, "SpecialistCard.item");
  var nextScreen$0 = dart.privateName(model_cards, "SpecialistCard.nextScreen");
  model_cards.SpecialistCard = class SpecialistCard extends framework.StatelessWidget {
    get item() {
      return this[item$0];
    }
    set item(value) {
      super.item = value;
    }
    get nextScreen() {
      return this[nextScreen$0];
    }
    set nextScreen(value) {
      super.nextScreen = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let item = opts && 'item' in opts ? opts.item : null;
      let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
      return new model_cards.SpecialistCard.new({key: key, item: item, nextScreen: nextScreen, $creationLocationd_0dea112b090073317d4: C[166] || CT.C166});
    }
    build(context) {
      return new basic.SizedBox.new({child: new card.Card.new({elevation: 0.0, child: new list_tile.ListTile.new({leading: C[167] || CT.C167, title: new text.Text.new(this.item.personName, {$creationLocationd_0dea112b090073317d4: C[172] || CT.C172}), subtitle: new text.Text.new(this.item.companyName, {$creationLocationd_0dea112b090073317d4: C[173] || CT.C173}), trailing: C[174] || CT.C174, onTap: dart.fn(() => {
              provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).setEmployee(this.item);
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => this.nextScreen, T$.BuildContextToWidget())}));
            }, T$.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[176] || CT.C176}), $creationLocationd_0dea112b090073317d4: C[177] || CT.C177}), $creationLocationd_0dea112b090073317d4: C[178] || CT.C178});
    }
  };
  (model_cards.SpecialistCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$0] = item;
    this[nextScreen$0] = nextScreen;
    model_cards.SpecialistCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = model_cards.SpecialistCard.prototype;
  dart.addTypeTests(model_cards.SpecialistCard);
  dart.addTypeCaches(model_cards.SpecialistCard);
  dart.setMethodSignature(model_cards.SpecialistCard, () => ({
    __proto__: dart.getMethods(model_cards.SpecialistCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(model_cards.SpecialistCard, I[2]);
  dart.setFieldSignature(model_cards.SpecialistCard, () => ({
    __proto__: dart.getFields(model_cards.SpecialistCard.__proto__),
    item: dart.finalFieldType(employee.Employee),
    nextScreen: dart.finalFieldType(framework.Widget)
  }));
  var item$1 = dart.privateName(model_cards, "OfficeCard.item");
  var nextScreen$1 = dart.privateName(model_cards, "OfficeCard.nextScreen");
  model_cards.OfficeCard = class OfficeCard extends framework.StatelessWidget {
    get item() {
      return this[item$1];
    }
    set item(value) {
      super.item = value;
    }
    get nextScreen() {
      return this[nextScreen$1];
    }
    set nextScreen(value) {
      super.nextScreen = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let item = opts && 'item' in opts ? opts.item : null;
      let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
      return new model_cards.OfficeCard.new({key: key, item: item, nextScreen: nextScreen, $creationLocationd_0dea112b090073317d4: C[179] || CT.C179});
    }
    build(context) {
      let t0;
      return new card.Card.new({elevation: 0.0, child: new basic.SizedBox.new({height: 75.0, child: new list_tile.ListTile.new({leading: new circle_avatar.CircleAvatar.new({backgroundImage: new _network_image_web.NetworkImage.new((t0 = this.item.companyLogo, t0 == null ? "https://cdn-icons-png.flaticon.com/512/172/172802.png" : t0)), $creationLocationd_0dea112b090073317d4: C[180] || CT.C180}), title: new basic.Padding.new({padding: C[181] || CT.C181, child: new text.Text.new(this.item.officeName, {$creationLocationd_0dea112b090073317d4: C[182] || CT.C182}), $creationLocationd_0dea112b090073317d4: C[183] || CT.C183}), subtitle: new text.Text.new(this.item.address, {maxLines: 2, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[184] || CT.C184}), trailing: C[185] || CT.C185, onTap: dart.fn(() => {
              provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).setOffice(this.item);
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => this.nextScreen, T$.BuildContextToWidget())}));
            }, T$.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[187] || CT.C187}), $creationLocationd_0dea112b090073317d4: C[188] || CT.C188}), $creationLocationd_0dea112b090073317d4: C[189] || CT.C189});
    }
  };
  (model_cards.OfficeCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let nextScreen = opts && 'nextScreen' in opts ? opts.nextScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$1] = item;
    this[nextScreen$1] = nextScreen;
    model_cards.OfficeCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = model_cards.OfficeCard.prototype;
  dart.addTypeTests(model_cards.OfficeCard);
  dart.addTypeCaches(model_cards.OfficeCard);
  dart.setMethodSignature(model_cards.OfficeCard, () => ({
    __proto__: dart.getMethods(model_cards.OfficeCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(model_cards.OfficeCard, I[2]);
  dart.setFieldSignature(model_cards.OfficeCard, () => ({
    __proto__: dart.getFields(model_cards.OfficeCard.__proto__),
    item: dart.finalFieldType(office$.Office),
    nextScreen: dart.finalFieldType(framework.Widget)
  }));
  var office$0 = dart.privateName(model_cards, "CompanyCard.office");
  var company$ = dart.privateName(model_cards, "CompanyCard.company");
  var serviceData$ = dart.privateName(model_cards, "CompanyCard.serviceData");
  var makeBooking$ = dart.privateName(model_cards, "CompanyCard.makeBooking");
  model_cards.CompanyCard = class CompanyCard extends framework.StatelessWidget {
    get office() {
      return this[office$0];
    }
    set office(value) {
      super.office = value;
    }
    get company() {
      return this[company$];
    }
    set company(value) {
      super.company = value;
    }
    get serviceData() {
      return this[serviceData$];
    }
    set serviceData(value) {
      super.serviceData = value;
    }
    get makeBooking() {
      return this[makeBooking$];
    }
    set makeBooking(value) {
      super.makeBooking = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let company = opts && 'company' in opts ? opts.company : null;
      let office = opts && 'office' in opts ? opts.office : null;
      let makeBooking = opts && 'makeBooking' in opts ? opts.makeBooking : false;
      let serviceData = opts && 'serviceData' in opts ? opts.serviceData : "";
      return new model_cards.CompanyCard.new({key: key, company: company, office: office, makeBooking: makeBooking, serviceData: serviceData, $creationLocationd_0dea112b090073317d4: C[190] || CT.C190});
    }
    build(context) {
      let t0;
      return new card.Card.new({elevation: 0.0, child: new basic.SizedBox.new({height: 75.0, child: new list_tile.ListTile.new({leading: new circle_avatar.CircleAvatar.new({backgroundImage: new _network_image_web.NetworkImage.new((t0 = this.office.companyLogo, t0 == null ? "https://cdn-icons-png.flaticon.com/512/172/172802.png" : t0)), $creationLocationd_0dea112b090073317d4: C[191] || CT.C191}), title: new basic.Padding.new({padding: C[181] || CT.C181, child: new text.Text.new(this.office.officeName, {$creationLocationd_0dea112b090073317d4: C[192] || CT.C192}), $creationLocationd_0dea112b090073317d4: C[193] || CT.C193}), subtitle: new text.Text.new(this.office.address, {maxLines: 2, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[194] || CT.C194}), trailing: C[195] || CT.C195, onTap: dart.fn(() => {
              if (this.makeBooking) {
                return;
              }
              navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new company_profile_screen.CompanyProfileScreen.new({office: this.office, $creationLocationd_0dea112b090073317d4: C[197] || CT.C197}), T$.BuildContextToCompanyProfileScreen())}));
            }, T$.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[198] || CT.C198}), $creationLocationd_0dea112b090073317d4: C[199] || CT.C199}), $creationLocationd_0dea112b090073317d4: C[200] || CT.C200});
    }
  };
  (model_cards.CompanyCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let company = opts && 'company' in opts ? opts.company : null;
    let office = opts && 'office' in opts ? opts.office : null;
    let makeBooking = opts && 'makeBooking' in opts ? opts.makeBooking : false;
    let serviceData = opts && 'serviceData' in opts ? opts.serviceData : "";
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[company$] = company;
    this[office$0] = office;
    this[makeBooking$] = makeBooking;
    this[serviceData$] = serviceData;
    model_cards.CompanyCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = model_cards.CompanyCard.prototype;
  dart.addTypeTests(model_cards.CompanyCard);
  dart.addTypeCaches(model_cards.CompanyCard);
  dart.setMethodSignature(model_cards.CompanyCard, () => ({
    __proto__: dart.getMethods(model_cards.CompanyCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(model_cards.CompanyCard, I[2]);
  dart.setFieldSignature(model_cards.CompanyCard, () => ({
    __proto__: dart.getFields(model_cards.CompanyCard.__proto__),
    office: dart.finalFieldType(office$.Office),
    company: dart.finalFieldType(company.Company),
    serviceData: dart.finalFieldType(core.String),
    makeBooking: dart.finalFieldType(core.bool)
  }));
  select_company_screen.SelectCompanyScreen = class SelectCompanyScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new select_company_screen.SelectCompanyScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[201] || CT.C201});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colorScheme.secondary, leading: new icon_button.IconButton.new({icon: C[202] || CT.C202, onPressed: dart.fn(() => {
              navigator.Navigator.pop(T$.ObjectN(), context);
            }, T$.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[204] || CT.C204}), title: new text.Text.new("Mostrando sucursales", {style: dart.nullCheck(theme.Theme.of(context).textTheme.headline6).copyWith({color: colorScheme.onPrimary}), $creationLocationd_0dea112b090073317d4: C[205] || CT.C205}), $creationLocationd_0dea112b090073317d4: C[206] || CT.C206}), body: new basic.Padding.new({padding: C[207] || CT.C207, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T$.JSArrayOfWidget().of([new text.Text.new("Que ofrecen: " + provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).selectedService.serviceName, {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[208] || CT.C208}), C[209] || CT.C209, new basic.Expanded.new({child: new (T$.FutureBuilderOfListOfOffice()).new({future: service_api.ServiceAPI.getOfficesFromServiceId(provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).selectedService.serviceId), builder: dart.fn((context, snapshot) => {
                    if (snapshot.hasData) {
                      let offices = T$.ListOfOffice().as(snapshot.data);
                      return new scroll_view.ListView.builder({itemCount: offices[$length], itemBuilder: dart.fn((context, index) => new model_cards.OfficeCard.new({item: offices[$_get](index), nextScreen: new make_booking.MakeBookingScreen.new({officeId: offices[$_get](index).officeId, $creationLocationd_0dea112b090073317d4: C[211] || CT.C211}), $creationLocationd_0dea112b090073317d4: C[212] || CT.C212}), T$.BuildContextAndintToOfficeCard()), $creationLocationd_0dea112b090073317d4: C[213] || CT.C213});
                    }
                    if (snapshot.hasError) {
                      return C[214] || CT.C214;
                    }
                    return C[218] || CT.C218;
                  }, T$.BuildContextAndAsyncSnapshotOfObjectNToWidget()), $creationLocationd_0dea112b090073317d4: C[222] || CT.C222}), $creationLocationd_0dea112b090073317d4: C[223] || CT.C223})]), $creationLocationd_0dea112b090073317d4: C[224] || CT.C224}), $creationLocationd_0dea112b090073317d4: C[225] || CT.C225}), $creationLocationd_0dea112b090073317d4: C[226] || CT.C226});
    }
  };
  (select_company_screen.SelectCompanyScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    select_company_screen.SelectCompanyScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = select_company_screen.SelectCompanyScreen.prototype;
  dart.addTypeTests(select_company_screen.SelectCompanyScreen);
  dart.addTypeCaches(select_company_screen.SelectCompanyScreen);
  dart.setMethodSignature(select_company_screen.SelectCompanyScreen, () => ({
    __proto__: dart.getMethods(select_company_screen.SelectCompanyScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(select_company_screen.SelectCompanyScreen, I[3]);
  search_all_screen.SearchAllScreen = class SearchAllScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_all_screen.SearchAllScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[227] || CT.C227});
    }
    build(context) {
      let searchProvider = provider['WatchContext|watch'](search_provider.SearchProvider, context);
      if (searchProvider.nothingSearched) {
        return C[228] || CT.C228;
      }
      if (searchProvider.loading) {
        return C[230] || CT.C230;
      }
      if (searchProvider.noResults) {
        return C[234] || CT.C234;
      }
      if (searchProvider.errorOcurred) {
        return C[236] || CT.C236;
      }
      return new scroll_view.ListView.new({children: (() => {
          let t0 = T$.JSArrayOfWidget().of([C[238] || CT.C238, new basic.Align.new({alignment: alignment.Alignment.center, child: new text_button.TextButton.new({onPressed: dart.fn(() => provider['ReadContext|read'](search_options_provider.SearchOptionsProvider, context).toggleAdvancedOptions(), T$.VoidTovoid()), child: C[240] || CT.C240, $creationLocationd_0dea112b090073317d4: C[242] || CT.C242}), $creationLocationd_0dea112b090073317d4: C[243] || CT.C243})]);
          if (provider['WatchContext|watch'](search_options_provider.SearchOptionsProvider, context).showAdvancedOptions) t0.push(C[244] || CT.C244);
          if (provider['WatchContext|watch'](search_options_provider.SearchOptionsProvider, context).showServices) t0.push(new basic.Column.new({children: T$.JSArrayOfWidget().of([new (T$.ListModelCardWidgetOfService()).new({itemCard: C[246] || CT.C246, items: searchProvider.serviceResults, title: "Especialidades & Servicios", $creationLocationd_0dea112b090073317d4: C[247] || CT.C247})]), $creationLocationd_0dea112b090073317d4: C[248] || CT.C248}));
          if (provider['WatchContext|watch'](search_options_provider.SearchOptionsProvider, context).showOffices) t0.push(new basic.Column.new({children: T$.JSArrayOfWidget().of([new (T$.ListModelCardWidgetOfOffice()).new({itemCard: C[249] || CT.C249, items: searchProvider.officeResults, title: "Sucursales", $creationLocationd_0dea112b090073317d4: C[250] || CT.C250})]), $creationLocationd_0dea112b090073317d4: C[251] || CT.C251}));
          if (provider['WatchContext|watch'](search_options_provider.SearchOptionsProvider, context).showEmployees) t0.push(new basic.Column.new({children: T$.JSArrayOfWidget().of([new (T$.ListModelCardWidgetOfEmployee()).new({itemCard: C[252] || CT.C252, items: searchProvider.employeeResults, title: "Empleados", $creationLocationd_0dea112b090073317d4: C[253] || CT.C253})]), $creationLocationd_0dea112b090073317d4: C[254] || CT.C254}));
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: C[255] || CT.C255});
    }
  };
  (search_all_screen.SearchAllScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_all_screen.SearchAllScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_all_screen.SearchAllScreen.prototype;
  dart.addTypeTests(search_all_screen.SearchAllScreen);
  dart.addTypeCaches(search_all_screen.SearchAllScreen);
  dart.setMethodSignature(search_all_screen.SearchAllScreen, () => ({
    __proto__: dart.getMethods(search_all_screen.SearchAllScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_all_screen.SearchAllScreen, I[4]);
  search_all_screen.NingunaBusquedaWidget = class NingunaBusquedaWidget extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_all_screen.NingunaBusquedaWidget.new({key: key, $creationLocationd_0dea112b090073317d4: C[256] || CT.C256});
    }
    build(context) {
      return new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T$.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.local_hospital, {size: 50.0, color: theme.Theme.of(context).primaryColor, $creationLocationd_0dea112b090073317d4: C[257] || CT.C257}), new text.Text.new("Busca y reserva tu cita", {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[258] || CT.C258}), new text.Text.new("Con MyTicket.", {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[259] || CT.C259})]), $creationLocationd_0dea112b090073317d4: C[260] || CT.C260}), $creationLocationd_0dea112b090073317d4: C[261] || CT.C261});
    }
  };
  (search_all_screen.NingunaBusquedaWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_all_screen.NingunaBusquedaWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_all_screen.NingunaBusquedaWidget.prototype;
  dart.addTypeTests(search_all_screen.NingunaBusquedaWidget);
  dart.addTypeCaches(search_all_screen.NingunaBusquedaWidget);
  dart.setMethodSignature(search_all_screen.NingunaBusquedaWidget, () => ({
    __proto__: dart.getMethods(search_all_screen.NingunaBusquedaWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_all_screen.NingunaBusquedaWidget, I[4]);
  search_all_screen.NoResultsFoundWidget = class NoResultsFoundWidget extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_all_screen.NoResultsFoundWidget.new({key: key, $creationLocationd_0dea112b090073317d4: C[262] || CT.C262});
    }
    build(context) {
      return new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T$.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.search_off, {size: 50.0, color: theme.Theme.of(context).primaryColor, $creationLocationd_0dea112b090073317d4: C[263] || CT.C263}), new text.Text.new("No se encontro ningun", {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[264] || CT.C264}), new text.Text.new("resultado.", {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[265] || CT.C265})]), $creationLocationd_0dea112b090073317d4: C[266] || CT.C266}), $creationLocationd_0dea112b090073317d4: C[267] || CT.C267});
    }
  };
  (search_all_screen.NoResultsFoundWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_all_screen.NoResultsFoundWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_all_screen.NoResultsFoundWidget.prototype;
  dart.addTypeTests(search_all_screen.NoResultsFoundWidget);
  dart.addTypeCaches(search_all_screen.NoResultsFoundWidget);
  dart.setMethodSignature(search_all_screen.NoResultsFoundWidget, () => ({
    __proto__: dart.getMethods(search_all_screen.NoResultsFoundWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_all_screen.NoResultsFoundWidget, I[4]);
  var itemBuilder$ = dart.privateName(search_all_screen, "SearchListViewBuilder.itemBuilder");
  var itemCount$ = dart.privateName(search_all_screen, "SearchListViewBuilder.itemCount");
  search_all_screen.SearchListViewBuilder = class SearchListViewBuilder extends framework.StatelessWidget {
    get itemBuilder() {
      return this[itemBuilder$];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get itemCount() {
      return this[itemCount$];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      return new search_all_screen.SearchListViewBuilder.new({key: key, itemBuilder: itemBuilder, itemCount: itemCount, $creationLocationd_0dea112b090073317d4: C[268] || CT.C268});
    }
    build(context) {
      return new scroll_view.ListView.builder({itemCount: this.itemCount, padding: C[158] || CT.C158, shrinkWrap: true, itemBuilder: this.itemBuilder, $creationLocationd_0dea112b090073317d4: C[269] || CT.C269});
    }
  };
  (search_all_screen.SearchListViewBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemBuilder$] = itemBuilder;
    this[itemCount$] = itemCount;
    search_all_screen.SearchListViewBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_all_screen.SearchListViewBuilder.prototype;
  dart.addTypeTests(search_all_screen.SearchListViewBuilder);
  dart.addTypeCaches(search_all_screen.SearchListViewBuilder);
  dart.setMethodSignature(search_all_screen.SearchListViewBuilder, () => ({
    __proto__: dart.getMethods(search_all_screen.SearchListViewBuilder.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_all_screen.SearchListViewBuilder, I[4]);
  dart.setFieldSignature(search_all_screen.SearchListViewBuilder, () => ({
    __proto__: dart.getFields(search_all_screen.SearchListViewBuilder.__proto__),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    itemCount: dart.finalFieldType(core.int)
  }));
  var showMore = dart.privateName(search_all_screen, "ListModelCardWidget.showMore");
  var title$1 = dart.privateName(search_all_screen, "ListModelCardWidget.title");
  var items$ = dart.privateName(search_all_screen, "ListModelCardWidget.items");
  var itemCard$ = dart.privateName(search_all_screen, "ListModelCardWidget.itemCard");
  const _is_ListModelCardWidget_default = Symbol('_is_ListModelCardWidget_default');
  search_all_screen.ListModelCardWidget$ = dart.generic(T => {
    var __t$_ListModelCardWidgetStateOfT = () => (__t$_ListModelCardWidgetStateOfT = dart.constFn(search_all_screen._ListModelCardWidgetState$(T)))();
    class ListModelCardWidget extends framework.StatefulWidget {
      get showMore() {
        return this[showMore];
      }
      set showMore(value) {
        this[showMore] = value;
      }
      get title() {
        return this[title$1];
      }
      set title(value) {
        super.title = value;
      }
      get items() {
        return this[items$];
      }
      set items(value) {
        super.items = value;
      }
      get itemCard() {
        return this[itemCard$];
      }
      set itemCard(value) {
        super.itemCard = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let title = opts && 'title' in opts ? opts.title : null;
        let items = opts && 'items' in opts ? opts.items : null;
        let itemCard = opts && 'itemCard' in opts ? opts.itemCard : null;
        return new (search_all_screen.ListModelCardWidget$(T)).new({key: key, title: title, items: items, itemCard: itemCard, $creationLocationd_0dea112b090073317d4: C[270] || CT.C270});
      }
      createState() {
        return new (__t$_ListModelCardWidgetStateOfT()).new();
      }
    }
    (ListModelCardWidget.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let items = opts && 'items' in opts ? opts.items : null;
      let itemCard = opts && 'itemCard' in opts ? opts.itemCard : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[showMore] = false;
      this[title$1] = title;
      this[items$] = items;
      this[itemCard$] = itemCard;
      ListModelCardWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListModelCardWidget.prototype;
    dart.addTypeTests(ListModelCardWidget);
    ListModelCardWidget.prototype[_is_ListModelCardWidget_default] = true;
    dart.addTypeCaches(ListModelCardWidget);
    dart.setMethodSignature(ListModelCardWidget, () => ({
      __proto__: dart.getMethods(ListModelCardWidget.__proto__),
      createState: dart.fnType(framework.State$(search_all_screen.ListModelCardWidget), [])
    }));
    dart.setLibraryUri(ListModelCardWidget, I[4]);
    dart.setFieldSignature(ListModelCardWidget, () => ({
      __proto__: dart.getFields(ListModelCardWidget.__proto__),
      showMore: dart.fieldType(core.bool),
      title: dart.finalFieldType(core.String),
      items: dart.finalFieldType(core.List$(T)),
      itemCard: dart.finalFieldType(dart.fnType(framework.Widget, [T]))
    }));
    return ListModelCardWidget;
  });
  search_all_screen.ListModelCardWidget = search_all_screen.ListModelCardWidget$();
  dart.addTypeTests(search_all_screen.ListModelCardWidget, _is_ListModelCardWidget_default);
  const _is__ListModelCardWidgetState_default = Symbol('_is__ListModelCardWidgetState_default');
  search_all_screen._ListModelCardWidgetState$ = dart.generic(T => {
    class _ListModelCardWidgetState extends framework.State$(search_all_screen.ListModelCardWidget) {
      build(context) {
        return this.widget.items[$isNotEmpty] ? new basic.Column.new({children: T$.JSArrayOfWidget().of([new basic.Padding.new({padding: C[271] || CT.C271, child: new basic.Align.new({alignment: alignment.Alignment.centerLeft, child: new text.Text.new(this.widget.title, {style: theme.Theme.of(context).textTheme.titleLarge, $creationLocationd_0dea112b090073317d4: C[272] || CT.C272}), $creationLocationd_0dea112b090073317d4: C[273] || CT.C273}), $creationLocationd_0dea112b090073317d4: C[274] || CT.C274}), new search_all_screen.SearchListViewBuilder.new({itemBuilder: dart.fn((context, idx) => {
                let t2, t1, t2$, t1$;
                let item = T.as(this.widget.items[$_get](idx));
                if (idx >= 3) {
                  return new visibility.Visibility.new({visible: this.widget.showMore, child: (t1 = this.widget, t2 = item, T$.dynamicToWidget().as(t1.itemCard)(t2)), $creationLocationd_0dea112b090073317d4: C[275] || CT.C275});
                }
                t1$ = this.widget;
                t2$ = item;
                return T$.dynamicToWidget().as(t1$.itemCard)(t2$);
              }, T$.BuildContextAndintToWidget()), itemCount: this.widget.items[$length], $creationLocationd_0dea112b090073317d4: C[276] || CT.C276}), this.widget.items[$length] > 3 ? new text_button.TextButton.new({onPressed: dart.fn(() => {
                this.widget.showMore = !this.widget.showMore;
                this.setState(dart.fn(() => {
                }, T$.VoidTovoid()));
              }, T$.VoidTovoid()), child: new text.Text.new(this.widget.showMore ? "Ver menos" : "Ver mas", {$creationLocationd_0dea112b090073317d4: C[277] || CT.C277}), $creationLocationd_0dea112b090073317d4: C[278] || CT.C278}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C[279] || CT.C279})]), $creationLocationd_0dea112b090073317d4: C[280] || CT.C280}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C[281] || CT.C281});
      }
      static ['_#new#tearOff'](T) {
        return new (search_all_screen._ListModelCardWidgetState$(T)).new();
      }
    }
    (_ListModelCardWidgetState.new = function() {
      _ListModelCardWidgetState.__proto__.new.call(this);
      ;
    }).prototype = _ListModelCardWidgetState.prototype;
    dart.addTypeTests(_ListModelCardWidgetState);
    _ListModelCardWidgetState.prototype[_is__ListModelCardWidgetState_default] = true;
    dart.addTypeCaches(_ListModelCardWidgetState);
    dart.setMethodSignature(_ListModelCardWidgetState, () => ({
      __proto__: dart.getMethods(_ListModelCardWidgetState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(_ListModelCardWidgetState, I[4]);
    return _ListModelCardWidgetState;
  });
  search_all_screen._ListModelCardWidgetState = search_all_screen._ListModelCardWidgetState$();
  dart.addTypeTests(search_all_screen._ListModelCardWidgetState, _is__ListModelCardWidgetState_default);
  search_all_screen.SearchOptionsWidget = class SearchOptionsWidget extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new search_all_screen.SearchOptionsWidget.new({key: key, $creationLocationd_0dea112b090073317d4: C[282] || CT.C282});
    }
    build(context) {
      let showServices = provider['WatchContext|watch'](search_options_provider.SearchOptionsProvider, context).showServices;
      let showOffices = provider['WatchContext|watch'](search_options_provider.SearchOptionsProvider, context).showOffices;
      let showEmployees = provider['WatchContext|watch'](search_options_provider.SearchOptionsProvider, context).showEmployees;
      return new basic.Row.new({children: T$.JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T$.JSArrayOfWidget().of([new checkbox.Checkbox.new({value: showServices, onChanged: dart.fn(val => {
                    provider['ReadContext|read'](search_options_provider.SearchOptionsProvider, context).setShowServices(!showServices);
                  }, T$.boolNTovoid()), $creationLocationd_0dea112b090073317d4: C[283] || CT.C283}), C[284] || CT.C284]), $creationLocationd_0dea112b090073317d4: C[286] || CT.C286}), $creationLocationd_0dea112b090073317d4: C[287] || CT.C287}), new basic.Expanded.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T$.JSArrayOfWidget().of([new checkbox.Checkbox.new({value: showOffices, onChanged: dart.fn(val => {
                    provider['ReadContext|read'](search_options_provider.SearchOptionsProvider, context).setShowOffices(!showOffices);
                  }, T$.boolNTovoid()), $creationLocationd_0dea112b090073317d4: C[288] || CT.C288}), C[289] || CT.C289]), $creationLocationd_0dea112b090073317d4: C[291] || CT.C291}), $creationLocationd_0dea112b090073317d4: C[292] || CT.C292}), new basic.Expanded.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T$.JSArrayOfWidget().of([new checkbox.Checkbox.new({value: showEmployees, onChanged: dart.fn(val => {
                    provider['ReadContext|read'](search_options_provider.SearchOptionsProvider, context).setShowEmployees(!showEmployees);
                  }, T$.boolNTovoid()), $creationLocationd_0dea112b090073317d4: C[293] || CT.C293}), C[294] || CT.C294]), $creationLocationd_0dea112b090073317d4: C[296] || CT.C296}), $creationLocationd_0dea112b090073317d4: C[297] || CT.C297})]), $creationLocationd_0dea112b090073317d4: C[298] || CT.C298});
    }
  };
  (search_all_screen.SearchOptionsWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_all_screen.SearchOptionsWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_all_screen.SearchOptionsWidget.prototype;
  dart.addTypeTests(search_all_screen.SearchOptionsWidget);
  dart.addTypeCaches(search_all_screen.SearchOptionsWidget);
  dart.setMethodSignature(search_all_screen.SearchOptionsWidget, () => ({
    __proto__: dart.getMethods(search_all_screen.SearchOptionsWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_all_screen.SearchOptionsWidget, I[4]);
  search_all_screen.createOfficeCard = function createOfficeCard(office) {
    return new model_cards.OfficeCard.new({item: office$.Office.as(office), nextScreen: C[299] || CT.C299, $creationLocationd_0dea112b090073317d4: C[301] || CT.C301});
  };
  search_all_screen.createServiceCard = function createServiceCard(service) {
    return new model_cards.ServiceCard.new({item: service$.Service.as(service), nextScreen: C[302] || CT.C302, $creationLocationd_0dea112b090073317d4: C[304] || CT.C304});
  };
  search_all_screen.createEmployeeCard = function createEmployeeCard(office) {
    return new model_cards.SpecialistCard.new({item: employee.Employee.as(office), nextScreen: C[305] || CT.C305, $creationLocationd_0dea112b090073317d4: C[307] || CT.C307});
  };
  var searchController = dart.privateName(main_screen, "MainScreen.searchController");
  var _screens = dart.privateName(main_screen, "_screens");
  var _appBarTitles = dart.privateName(main_screen, "_appBarTitles");
  var _appBarSubtitle = dart.privateName(main_screen, "_appBarSubtitle");
  var IconThemeData_shadows = dart.privateName(icon_theme_data, "IconThemeData.shadows");
  var IconThemeData_size = dart.privateName(icon_theme_data, "IconThemeData.size");
  var IconThemeData__opacity = dart.privateName(icon_theme_data, "IconThemeData._opacity");
  var IconThemeData_color = dart.privateName(icon_theme_data, "IconThemeData.color");
  var BottomNavigationBarItem_tooltip = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.tooltip");
  var BottomNavigationBarItem_backgroundColor = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.backgroundColor");
  var BottomNavigationBarItem_label = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.label");
  var BottomNavigationBarItem_activeIcon = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.activeIcon");
  var BottomNavigationBarItem_icon = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.icon");
  main_screen.MainScreen = class MainScreen extends framework.StatelessWidget {
    get searchController() {
      return this[searchController];
    }
    set searchController(value) {
      super.searchController = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main_screen.MainScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[315] || CT.C315});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new scaffold.Scaffold.new({appBar: new preferred_size.PreferredSize.new({preferredSize: C[316] || CT.C316, child: new container.Container.new({height: 170.0, padding: C[317] || CT.C317, decoration: new box_decoration.BoxDecoration.new({color: colorScheme.primary, borderRadius: new border_radius.BorderRadius.vertical({bottom: new ui.Radius.elliptical(media_query.MediaQuery.of(context).size.width, 15.0)})}), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
                let t1 = T$.JSArrayOfWidget().of([new basic.Row.new({children: T$.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.class_outlined, {color: colorScheme.onPrimary, size: 38.0, $creationLocationd_0dea112b090073317d4: C[318] || CT.C318}), C[319] || CT.C319, new text.Text.new(this[_appBarTitles][$_get](provider['WatchContext|watch'](navigation_bar_provider.NavigationBarProvider, context).index), {textAlign: ui.TextAlign.left, style: dart.nullCheck(theme.Theme.of(context).textTheme.headline5).copyWith({color: colorScheme.onPrimary}), $creationLocationd_0dea112b090073317d4: C[321] || CT.C321})]), $creationLocationd_0dea112b090073317d4: C[322] || CT.C322})]);
                if (provider['WatchContext|watch'](navigation_bar_provider.NavigationBarProvider, context).index === 0)
                  t1[$addAll](T$.JSArrayOfWidget().of([new search_bar.SearchBar.new({onChanged: dart.fn(query => {
                        provider['ReadContext|read'](search_provider.SearchProvider, context).searchAllResults(query);
                      }, T$.StringToNull()), searchController: this.searchController, $creationLocationd_0dea112b090073317d4: C[323] || CT.C323})]));
                else
                  t1[$addAll](T$.JSArrayOfWidget().of([new text.Text.new(this[_appBarSubtitle][$_get](provider['WatchContext|watch'](navigation_bar_provider.NavigationBarProvider, context).index), {style: dart.nullCheck(theme.Theme.of(context).textTheme.headline5).copyWith({color: colorScheme.background}), $creationLocationd_0dea112b090073317d4: C[324] || CT.C324})]));
                return t1;
              })(), $creationLocationd_0dea112b090073317d4: C[325] || CT.C325}), $creationLocationd_0dea112b090073317d4: C[326] || CT.C326}), $creationLocationd_0dea112b090073317d4: C[327] || CT.C327}), bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({selectedIconTheme: C[328] || CT.C328, currentIndex: provider['WatchContext|watch'](navigation_bar_provider.NavigationBarProvider, context).index, onTap: dart.fn(index => {
            let t2;
            provider['ReadContext|read'](navigation_bar_provider.NavigationBarProvider, context).changeIndex(index);
            t2 = focus_manager.FocusManager.instance.primaryFocus;
            t2 == null ? null : t2.unfocus();
          }, T$.intTovoid()), items: C[329] || CT.C329, $creationLocationd_0dea112b090073317d4: C[341] || CT.C341}), body: this[_screens][$_get](provider['WatchContext|watch'](navigation_bar_provider.NavigationBarProvider, context).index), $creationLocationd_0dea112b090073317d4: C[342] || CT.C342});
    }
  };
  (main_screen.MainScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_screens] = C[308] || CT.C308;
    this[_appBarTitles] = T$.JSArrayOfString().of(["MyTicket - Busqueda", "MyTicket - Reservas", "MyTicket - Perfil"]);
    this[_appBarSubtitle] = T$.JSArrayOfString().of([" ", "Mis reservas", "Mi perfil"]);
    this[searchController] = new editable_text.TextEditingController.new();
    main_screen.MainScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main_screen.MainScreen.prototype;
  dart.addTypeTests(main_screen.MainScreen);
  dart.addTypeCaches(main_screen.MainScreen);
  dart.setMethodSignature(main_screen.MainScreen, () => ({
    __proto__: dart.getMethods(main_screen.MainScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main_screen.MainScreen, I[5]);
  dart.setFieldSignature(main_screen.MainScreen, () => ({
    __proto__: dart.getFields(main_screen.MainScreen.__proto__),
    [_screens]: dart.finalFieldType(core.List$(framework.Widget)),
    [_appBarTitles]: dart.finalFieldType(core.List$(core.String)),
    [_appBarSubtitle]: dart.finalFieldType(core.List$(core.String)),
    searchController: dart.finalFieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/my_ticket_care/screens/profiles/employee_profile_screen.dart", {
    "package:my_ticket_care/screens/profiles/employee_profile_screen.dart": employee_profile_screen,
    "package:my_ticket_care/screens/profiles/office_profile_screen.dart": office_profile_screen,
    "package:my_ticket_care/reusable/widgets/model_cards.dart": model_cards,
    "package:my_ticket_care/screens/booking/select_company_screen.dart": select_company_screen,
    "package:my_ticket_care/screens/search/search_all_screen.dart": search_all_screen,
    "package:my_ticket_care/screens/home/main_screen.dart": main_screen,
    "package:my_ticket_care/screens/screens.dart": screens
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["employee_profile_screen.dart","office_profile_screen.dart","../../reusable/widgets/model_cards.dart","../booking/select_company_screen.dart","../search/search_all_screen.dart","../home/main_screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE3B,6BACH,AAA6B,0EAArC,OAAO;AACX,YAAO,kCACC,+CACK,yBACP,uCACW,gEAEI;AAC8C,kBAA/C,AAAiC,mFAAzC,OAAO,cAA8C;AAC/B,kBAAZ,sCAAI,OAAO;sGAGjB,sBACQ,wBACC,AAAY,WAAD,wCAEpB,2EAEC,sDAEE,6BACK,wCAER,6DACW,sBACA,eACgB,qHAE3B,6DACS,yBACA,eACgB,qHAGzB,6DACS,oBACA,eACgB,sSAMlB,yDACD,oCACH,AAAY,WAAD,2CAEL,wBACX,sSAKR,yCACS,wDAEE,kBACL,4BACgB,gDACH,AAAY,AAAU,eAAnB,OAAO,yMAI7B,yCACS,8DACE,gBACD,AAAiB,gBAAD,mIAG1B,yCACW,8DACI,kBAAkB,AAAiB,gBAAD,oIACjD,yCACW,8DACI,kBAEA,AAAiB,AAAmC,gBAApC,SAAO,OAAI,AAAiB,gBAAD,+HAC1D,yCACS,wDAEE,kBACL,0BACgB,gDACH,AAAY,AAAU,eAAnB,OAAO,yMAI7B,yCACS,wDAEE,kBACL,8BACgB,gDACH,AAAY,AAAU,eAAnB,OAAO,yMAI7B,yCACS,qDACgB,iDACf,AAAiB,gBAAD,uBACX,SAAC,SAAS;AACjB,sBAAI,AAAS,QAAD,YACR,AAAS,AAAgB,QAAjB,qBAAoC;AAChC,mCAAyB,sBAAd,AAAS,QAAD;AAEjC,0BAAgB,yEAEF,iBACD,AAAS,QAAD,wBACN,SAAC,SAAS,UACd,uCACC,AAAQ,QAAA,QAAC,KAAK;;AAM5B,sBAAI,AAAS,QAAD;AACV;;AAEF;8LAKR,yCACkB;IAO1B;;;QA5IkC;;AAAQ,iFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;EAmJ3D;;;;;;MAHe,uCAAI;YAAG;;MACP,uCAAI;YAAG;;MACP,uCAAI;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUP;;;;;;IACH;;;;;;IACM;;;;;;;;;;;;;UAEU;AACnB,uBAAqB,AAAkC,AAAM,qFAAhD,OAAO,YAA4C;AAErE,YAAO,wCACE,kBAAK,kFACF,UAAU,iBACC,AAAY,AAAY,eAArB,OAAO,qCACnB,UAAU,qBAA0C,IAA1C,cACV,QAAC;AACgD,UAAnD,AAAiC,mFAAzC,OAAO,cAA8C;AAGZ,UAD9B,oCAAuC,eAAzB,AAAW;;IAI1C;;;QAxBW;QACO;QACA;QACA;;IAFA;IACA;IACA;AAJZ,gFACK,GAAG;;EAGgB;;;;;;;;;;;;;;;;;;;;IA6BjB;;;;;;IAAO;;;;;;IAEJ;;;;;;IAMA;;;;;;;;;;;;UAMU;AACxB,YAAO,+BACM,qCAEJ,wDAEE,0CACkC,yCAC7B,yBACR,kBAAK,oBAAc,4EACnB,kBAAK,mBAAa;IAK5B;;;QAhCU;QAAmB;QAAqB;;IAKlC;IAMA;IAXa;IAAqB;AAC5C,iFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;UCpLK;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE7B,2BACD,AAA6B,0EAArC,OAAO;AACX,YAAO,kCACC,+CACK,yBACP,uCACW,kEAEI;AAC8C,kBAA/C,AAAiC,mFAAzC,OAAO,cAA8C;AAC/B,kBAAZ,sCAAI,OAAO;wGAGjB,sBACQ,wBACC,AAAY,WAAD,iBACrB,kBAAK,AAAe,cAAD,iFAClB,2EAEC,sDAEE,6BACK,0CAER,2DACW,sBACA,eACgB,mHAE3B,2DACS,oBACA,eACgB,mHAGzB,2DACS,oBACA,eACgB,oSAMlB,yDACD,oCACD,AAAY,WAAD,2CAEL,wBAAkC,eAA1B,AAAe,cAAD,oQAG3C,yCACS,wDAEE,kBACL,4BACgB,8CACH,AAAY,AAAU,eAAnB,OAAO,+MAI7B,yCACS,4DACE,kBAEA,AAAe,AAA4C,cAA7C,cAAY,OAA8B,eAA1B,AAAe,cAAD,yIAGvD,yCACW,4DACI,mBAAmB,AAAe,cAAD,oIAChD,yCACS,wDAEE,kBACL,mBACgB,8CACH,AAAY,AAAU,eAAnB,OAAO,+MAI7B,yCACS,iEAEG,mBACI,oDACiB,wCAAS,gBAE/B,mDACK,cAAc,SAAS,SAAC,UAAU;8OAGlD,yCACS,wDAEE,kBACL,mBACgB,8CACH,AAAY,AAAU,eAAnB,OAAO,+MAI7B,yCACS,0DAEE,kBACL,4DACa,AAAY,AAAU,eAAnB,OAAO,8MAI7B,yCACS,+BACE,qDAEE,AACA,6DAFG,OAAO,yBAEa,AAAe,cAAD,qBACjC,SAAC,SAAS;AACjB,wBAAI,AAAS,QAAD,YACR,AAAS,AAAgB,QAAjB,qBAAoC;AAChC,qCAAyB,sBAAd,AAAS,QAAD;AAEjC,4BAAgB,yEAEF,iBACD,AAAS,QAAD,wBACN,SAAC,SAAS,UACd,uCACC,AAAQ,QAAA,QAAC,KAAK,eACR,kDAEL,AACA,AACA,wEAHK,OAAO;;AAS3B,wBAAI,AAAS,QAAD;AACV;;AAEF;iQAMV,yCACkB;IAO1B;;;QAjKgC;;AAAQ,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;EAwKzD;;;;;;MAHe,qCAAI;YAAG;;MACP,qCAAI;YAAG;;MACP,qCAAI;YAAG;;;;;;;IAUP;;;;;;IACH;;;;;;IACM;;;;;;;;;;;;;UAEU;AACnB,uBAAqB,AAAkC,AAAM,qFAAhD,OAAO,YAA4C;AAErE,YAAO,wCACE,kBAAK,oFACF,UAAU,iBACC,AAAY,AAAY,eAArB,OAAO,qCACnB,UAAU,qBAA0C,IAA1C,cACV,QAAC;AACgD,UAAnD,AAAiC,mFAAzC,OAAO,cAA8C;AAGZ,UAD9B,oCAAuC,eAAzB,AAAW;;IAI1C;;;QAxBW;QACO;QACA;QACA;;IAFA;IACA;IACA;AAJZ,8EACK,GAAG;;EAGgB;;;;;;;;;;;;;;;;;;;IA6BjB;;;;;;IAAO;;;;;;IAEJ;;;;;;IAMA;;;;;;;;;;;;UAMU;AACxB,YAAO,+BACM,qCAEJ,wDAEE,0CACkC,yCAC7B,yBACR,kBAAK,oBAAc,8EACnB,kBAAK,mBAAa;IAK5B;;;QAhCU;QAAmB;QAAqB;;IAKlC;IAMA;IAXa;IAAqB;AAC5C,+EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;ICtMP;;;;;;IACD;;;;;;;;;;;;UAGa;AACxB,YAAO,gCACE,8BACM,YACJ,+DAQE,kBAAK,AAAK,yHAEV;AAC+C,cAA5C,AAA4B,wEAApC,OAAO,aAAwC;AAM9C,cALS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY;;IAOpC;;;QAnCO;QACS;QACA;;IADA;IACA;AACX,2DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IAuCL;;;;;;IACF;;;;;;;;;;;;UAEa;AACxB,YAAO,gCACE,8BACM,YACJ,+DAQE,kBAAK,AAAK,8FACP,kBAAK,AAAK,yHAEb;AACgD,cAA7C,AAA4B,wEAApC,OAAO,cAAyC;AAM/C,cALS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY;;IAOpC;;;QAjC2B;QAAmB;QAAoB;;IAApB;IAAoB;AAC5D,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IA0CR;;;;;;IACA;;;;;;;;;;;;UAEa;;AACxB,YAAO,+BACM,YACJ,gCACG,aACD,qCACI,qDACU,yCACE,KAAjB,AAAK,uBAAA,aACD,oIAGD,0DAEE,kBAAK,AAAK,2JAET,kBACR,AAAK,8BACK,aACa,qIAGlB;AAGA,cAFG,AAA4B,wEAApC,OAAO,YACD;AAOL,cALS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY;;IAOpC;;;QA5CO;QACS;QACA;;IADA;IACA;AACX,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;IAqDP;;;;;;IACC;;;;;;IACD;;;;;;IACF;;;;;;;;;;;;;;UAGe;;AACxB,YAAO,+BACM,YACJ,gCACG,aACD,qCACI,qDACU,yCAAgC,KAAnB,AAAO,yBAAA,aACjC,oIAEC,0DAEE,kBAAK,AAAO,6JAEX,kBACR,AAAO,gCACG,aACa,qIAGlB;AACL,kBAAI;AACF;;AASD,cAPS,uCACR,OAAO,EACP,yCACW,QAAC,WAAY,6DACZ;;IAQxB;;;QAjDO;QACS;QACA;QACT;QACA;;IAHS;IACA;IACT;IACA;AACF,2DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;UC/HM;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,oCACG,yCACW,AAAY,WAAD,qBACnB,oEAEI;AACa,cAAZ,sCAAI,OAAO;qGAGlB,kBACL,gCAGc,AACT,eAHQ,AACR,AACA,eAFW,OAAO,wCAGF,AAAY,WAAD,8IAG9B,0DAEG,0CACkC,yCAC7B,yBACR,kBACE,AAAkF,kBAA1D,AAA6B,AAAgB,0EAArD,OAAO,uCACV,AAAY,AAAU,eAAnB,OAAO,uGAKzB,+BACS,oDACc,+CACd,AACA,AACA,0EAHsC,OAAO,uCAIzC,SAAC,SAAS;AACjB,wBAAI,AAAS,QAAD;AACG,oCAAwB,qBAAd,AAAS,QAAD;AAC/B,4BAAgB,8CACH,AAAQ,OAAD,wBACL,SAAC,SAAS,UACd,sCACC,AAAO,OAAA,QAAC,KAAK,eACP,kDACA,AAAO,AAAQ,OAAR,QAAC,KAAK;;AAMjC,wBAAI,AAAS,QAAD;AACV;;AAEF;;IAUhB;;;QArEgC;;AAAQ,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;UCU7B;AACH,2BAAyB,+DAAR,OAAO;AAE7C,UAAI,AAAe,cAAD;AAChB;;AAEF,UAAI,AAAe,cAAD;AAChB;;AAGF,UAAI,AAAe,cAAD;AAChB;;AAEF,UAAI,AAAe,cAAD;AAChB;;AAEF,YAAO,yCACK;+DAIR,gCACuB,mCACd,2CACQ,cACC,AAA8B,4EAAtC,OAAO;AAGjB,cAAY,AAA+B,8EAAvC,OAAO,uBACH;AACR,cAAY,AAA+B,8EAAvC,OAAO,gBACT,wCACY,yBACR,iFAES,AAAe,cAAD,wBACd;AAIf,cAAY,AAA+B,8EAAvC,OAAO,eACT,wCACY,yBACR,gFAES,AAAe,cAAD,uBACd;AAIf,cAAY,AAA+B,8EAAvC,OAAO,iBACT,wCACY,yBACR,kFAES,AAAe,cAAD,yBACd;;;IAMrB;;;QAjE4B;;AAAQ,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;UAwEzB;AACxB,YAAO,8BACE,yCACgC,yCAC3B,yBACR,kBACQ,mCACA,aACO,AAAY,eAAT,OAAO,6EAEzB,kBACE,mCACa,AAAY,AAAU,eAAnB,OAAO,qFAEzB,kBACE,yBACa,AAAY,AAAU,eAAnB,OAAO;IAKjC;;;QAxBkC;;AAAQ,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;UA+B/B;AACxB,YAAO,8BACE,yCACgC,yCAC3B,yBACR,kBACQ,+BACA,aACO,AAAY,eAAT,OAAO,6EAEzB,kBACE,iCACa,AAAY,AAAU,eAAnB,OAAO,qFAEzB,kBACE,sBACa,AAAY,AAAU,eAAnB,OAAO;IAKjC;;;QAxBiC;;AAAQ,0EAAW,GAAG;;EAAC;;;;;;;;;;;IAiCf;;;;;;IAC/B;;;;;;;;;;;;UAEgB;AACxB,YAAgB,8CACH,wDAGC,mBACC;IAEjB;;;QAdU;QAAmB;QAA2B;;IAA3B;IAA2B;AAClD,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;MAwBhB;;;;;;MACQ;;;;;;MACC;;;;;;MACgB;;;;;;;;;;;;;;AAGc;MAA8B;;;UAZhE;UACQ;UACA;UACA;;MAGb,iBAAW;MALE;MACA;MACA;AACZ,yDAAW,GAAG;;IAAC;;;;;;;;;;;;;;;;;;;;;;;YAaK;AACxB,cAAO,AAAO,AAAM,kCACd,gCACY,yBACR,0DAES,gCACgB,uCACd,kBACL,AAAO,2BACM,AAAY,AAAU,eAAnB,OAAO,+MAI7B,8DACiB,SAAC,SAAS;;AACnB,gCAAO,AAAO,AAAK,yBAAC,GAAG;AAEzB,oBAAI,AAAI,GAAD,IAAI;AACT,wBAAO,yCACI,AAAO,mCACT,kBACL,IAAI,EADgB,wBAAR;;AAKlB,sBAAO;sBACL,IAAI;sBADgB,yBAAR;8DAIL,AAAO,AAAM,yFAC5B,AAAO,AAAM,AAAO,6BAAE,IAChB,2CACa;AACyB,gBAAlC,AAAO,wBAAY,AAAO;AACX,gBAAf,cAAS;;0CAEJ,kBAAK,AAAO,uBAAW,cAAc,uIAE9C,0JAGV;MACR;;;;;;;;IACF;;;;;;;;;;;;;;;;;;UAmB4B;AACnB,yBAAuB,AAA+B,8EAAvC,OAAO;AACtB,wBAAsB,AAA+B,8EAAvC,OAAO;AACrB,0BAAwB,AAA+B,8EAAvC,OAAO;AAE5B,YAAO,8BACK,yBACR,+BACS,sCACgC,yCAC3B,yBACR,kCACW,YAAY,aACR,QAAC;AAGyB,oBAD9B,AACA,4EAFL,OAAO,mBAEe,YAAY;oPAM9C,+BACS,sCACgC,yCAC3B,yBACR,kCACW,WAAW,aACP,QAAC;AAGuB,oBAD5B,AACA,4EAFL,OAAO,kBAEc,WAAW;oPAM5C,+BACS,sCACgC,yCAC3B,yBACR,kCACW,aAAa,aACT,QAAC;AAG2B,oBADhC,AACA,4EAFL,OAAO,oBAEgB,aAAa;;IAQtD;;;QAzDgC;;AAAQ,yEAAW,GAAG;;EAAC;;;;;;;;iEAdzB;AAC9B,UAAO,yDAAiB,MAAM;EAChC;mEAEiC;AAC/B,UAAO,4DAAkB,OAAO;EAClC;qEAEkC;AAChC,UAAO,gEACG,MAAM;EAClB;;;;;;;;;;;;;;;IClN8B;;;;;;;;;;UAGF;AACZ,wBAAoB,AAAY,eAAT,OAAO;AAE1C,YAAO,oCACG,+EAEC,qCACG,+CAGI,6CACH,AAAY,WAAD,wBACS,iDACV,yBAAsB,AAAY,AAAK,0BAAd,OAAO,cAAc,kBAG1D,yCACgC,wDACE,yCAC7B;kDACR,6BACY,yBACR,kBACQ,oCACC,AAAY,WAAD,kBACZ,sFAGR,kBACE,AAAa,2BAAS,AAA+B,8EAAvC,OAAO,sBACA,0BAGP,AACT,eAHQ,AACR,AACA,eAFW,OAAO,wCAGF,AAAY,WAAD;AAItC,oBAAY,AAA+B,AAAM,8EAA7C,OAAO,YAAyC;AAAM,uDACxD,yCACa,QAAC;AAC4C,wBAA9C,AAAuB,6DAA/B,OAAO,mBAAyC,KAAK;+DAErC;;AAEZ,uDACR,kBACE,AAAe,6BAAS,AAA+B,8EAAvC,OAAO,kBAGT,AACT,eAHQ,AACR,AACA,eAFW,OAAO,wCAGF,AAAY,WAAD;;gOAOvB,uGAIG,AAA+B,8EAAvC,OAAO,gBACd,QAAC;;AACkD,YAAhD,AAA8B,4EAAtC,OAAO,cAA2C,KAAK;AACV,iBAAhC,AAAS;yBAAA,OAAc;2HAoBlC,AAAQ,sBAAS,AAA+B,8EAAvC,OAAO;IAE1B;;;QA1GiB;;IAEX;IAMA,sBAAgB,yBACpB,uBACA,uBACA;IAGI,wBAAkB,yBAAC,KAAK,gBAAgB;IAElB,yBAAmB;AAhBtB,0DAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/screens/profiles/employee_profile_screen.dart.lib.js"}');
  // Exports:
  return {
    screens__profiles__employee_profile_screen: employee_profile_screen,
    screens__profiles__office_profile_screen: office_profile_screen,
    reusable__widgets__model_cards: model_cards,
    screens__booking__select_company_screen: select_company_screen,
    screens__search__search_all_screen: search_all_screen,
    screens__home__main_screen: main_screen,
    screens__screens: screens
  };
}));

//# sourceMappingURL=employee_profile_screen.dart.lib.js.map
