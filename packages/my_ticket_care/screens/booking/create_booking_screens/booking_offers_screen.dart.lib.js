define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/providers/make_booking_provider.dart', 'packages/my_ticket_care/services/service_api.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/my_ticket_care/models/workday.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/widgets/spacer.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/widgets/async.dart', 'packages/my_ticket_care/models/offer.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/my_ticket_care/models/backend/employee.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/material/icons.dart', 'packages/my_ticket_care/models/test_data/employee_test_data.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/my_ticket_care/providers/navigation_booking_provider.dart'], (function load__packages__my_ticket_care__screens__booking__create_booking_screens__booking_offers_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__providers__make_booking_provider$46dart, packages__my_ticket_care__services__service_api$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__my_ticket_care__models__workday$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__widgets__spacer$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__widgets__async$46dart, packages__my_ticket_care__models__offer$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__my_ticket_care__models__backend__employee$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__material__icons$46dart, packages__my_ticket_care__models__test_data__employee_test_data$46dart, packages__flutter__src__material__elevated_button$46dart, packages__my_ticket_care__providers__navigation_booking_provider$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const make_booking_provider = packages__my_ticket_care__providers__make_booking_provider$46dart.providers__make_booking_provider;
  const service_api = packages__my_ticket_care__services__service_api$46dart.services__service_api;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const workday = packages__my_ticket_care__models__workday$46dart.models__workday;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const spacer = packages__flutter__src__widgets__spacer$46dart.src__widgets__spacer;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const async$ = packages__flutter__src__widgets__async$46dart.src__widgets__async;
  const offer = packages__my_ticket_care__models__offer$46dart.models__offer;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const employee$ = packages__my_ticket_care__models__backend__employee$46dart.models__backend__employee;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const employee_test_data = packages__my_ticket_care__models__test_data__employee_test_data$46dart.models__test_data__employee_test_data;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const navigation_booking_provider = packages__my_ticket_care__providers__navigation_booking_provider$46dart.providers__navigation_booking_provider;
  var booking_offers_screen = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $keys = dartx.keys;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $where = dartx.where;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    ListOfWorkday: () => (T.ListOfWorkday = dart.constFn(core.List$(workday.Workday)))(),
    ListOfWorkdayToFutureOfNull: () => (T.ListOfWorkdayToFutureOfNull = dart.constFn(dart.fnType(T.FutureOfNull(), [T.ListOfWorkday()])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ListOfOffer: () => (T.ListOfOffer = dart.constFn(core.List$(offer.Offer)))(),
    FutureBuilderOfListOfOffer: () => (T.FutureBuilderOfListOfOffer = dart.constFn(async$.FutureBuilder$(T.ListOfOffer())))(),
    IdentityMapOfint$List: () => (T.IdentityMapOfint$List = dart.constFn(_js_helper.IdentityMap$(core.int, core.List)))(),
    FutureBuilderOfEmployee: () => (T.FutureBuilderOfEmployee = dart.constFn(async$.FutureBuilder$(employee$.Employee)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    AsyncSnapshotOfObjectN: () => (T.AsyncSnapshotOfObjectN = dart.constFn(async$.AsyncSnapshot$(T.ObjectN())))(),
    BuildContextAndAsyncSnapshotOfObjectNToWidget: () => (T.BuildContextAndAsyncSnapshotOfObjectNToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T.AsyncSnapshotOfObjectN()])))(),
    BuildContextAndintToFutureBuilderOfEmployee: () => (T.BuildContextAndintToFutureBuilderOfEmployee = dart.constFn(dart.fnType(T.FutureBuilderOfEmployee(), [framework.BuildContext, core.int])))(),
    OfferTobool: () => (T.OfferTobool = dart.constFn(dart.fnType(core.bool, [offer.Offer])))(),
    BuildContextAndintToColumn: () => (T.BuildContextAndintToColumn = dart.constFn(dart.fnType(basic.Column, [framework.BuildContext, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingOffersScreen",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[3] || CT.C3,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[7] || CT.C7,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 3,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 3
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 27,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57782
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[11] || CT.C11
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TextButtonWithIcon",
        [_Location_column]: 31,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[16] || CT.C16,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SelectOffert",
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 23,
        [_Location_line]: 75,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 23,
        [_Location_line]: 78,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[21] || CT.C21,
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
        [Text_data]: "Elija una fecha para ver las ofertas disponibles"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: basic.Align.prototype,
        [Widget__location]: C[19] || CT.C19,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[20] || CT.C20,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[22] || CT.C22
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget__location]: C[24] || CT.C24,
        [Widget_key]: null,
        [Spacer_flex]: 1
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ManagementButton",
        [_Location_column]: 11,
        [_Location_line]: 81,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 82,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[27] || CT.C27,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 50,
        [SizedBox_width]: null
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 30,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 108,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[32] || CT.C32,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 5,
        [SizedBox_width]: null
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CardOffers",
        [_Location_column]: 36,
        [_Location_line]: 137,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 42,
        [_Location_line]: 143,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 56,
        [_Location_line]: 143,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[37] || CT.C37,
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
    get C34() {
      return C[34] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[35] || CT.C35,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[36] || CT.C36,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[22] || CT.C22
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 40,
        [_Location_line]: 145,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[39] || CT.C39,
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
        [Text_data]: "Cargando employees..."
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FutureBuilder",
        [_Location_column]: 28,
        [_Location_line]: 132,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 33,
        [_Location_line]: 129,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 30,
        [_Location_line]: 152,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[43] || CT.C43,
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
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 28,
        [_Location_line]: 154,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 24,
        [_Location_line]: 155,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[47] || CT.C47,
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
        [Text_data]: "Cargando offers"
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget__location]: C[45] || CT.C45,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[46] || CT.C46,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[22] || CT.C22
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FutureBuilder",
        [_Location_column]: 18,
        [_Location_line]: 114,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 12,
        [_Location_line]: 101,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SelectOffert",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CardOffers",
        [_Location_column]: 9,
        [_Location_line]: 168,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 5
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 28,
        [_Location_line]: 193,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 19,
        [_Location_line]: 190,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 23,
        [_Location_line]: 206,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 23,
        [_Location_line]: 207,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 19,
        [_Location_line]: 203,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 15,
        [_Location_line]: 188,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 29,
        [_Location_line]: 220,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[62] || CT.C62,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 0
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectableTimeOfferWidget",
        [_Location_column]: 23,
        [_Location_line]: 223,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 26,
        [_Location_line]: 218,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 24,
        [_Location_line]: 212,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 18,
        [_Location_line]: 184,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 16,
        [_Location_line]: 181,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 179,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 12,
        [_Location_line]: 177,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SelectableTimeOfferWidget",
        [_Location_column]: 9,
        [_Location_line]: 244,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 6,
        [EdgeInsets_right]: 6,
        [EdgeInsets_top]: 6,
        [EdgeInsets_left]: 6
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 282,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 16,
        [_Location_line]: 272,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 14,
        [_Location_line]: 270,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 266,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 300,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[77] || CT.C77,
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
        [Text_data]: "Atras"
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 9,
        [_Location_line]: 296,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 305,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[80] || CT.C80,
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
        [Text_data]: "Siguiente"
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 9,
        [_Location_line]: 301,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 293,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ManagementButton",
        [_Location_column]: 7,
        [_Location_line]: 290,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_offers_screen.dart"
      });
    }
  }, false);
  var C = Array(84).fill(void 0);
  var I = ["package:my_ticket_care/screens/booking/create_booking_screens/booking_offers_screen.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  booking_offers_screen.BookingOffersScreen = class BookingOffersScreen extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new booking_offers_screen.BookingOffersScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new booking_offers_screen._BookingOffersScreenState.new();
    }
  };
  (booking_offers_screen.BookingOffersScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    booking_offers_screen.BookingOffersScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_offers_screen.BookingOffersScreen.prototype;
  dart.addTypeTests(booking_offers_screen.BookingOffersScreen);
  dart.addTypeCaches(booking_offers_screen.BookingOffersScreen);
  dart.setMethodSignature(booking_offers_screen.BookingOffersScreen, () => ({
    __proto__: dart.getMethods(booking_offers_screen.BookingOffersScreen.__proto__),
    createState: dart.fnType(framework.State$(booking_offers_screen.BookingOffersScreen), [])
  }));
  dart.setLibraryUri(booking_offers_screen.BookingOffersScreen, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
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
  var Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  var Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var Align_alignment = dart.privateName(basic, "Align.alignment");
  var Spacer_flex = dart.privateName(spacer, "Spacer.flex");
  booking_offers_screen._BookingOffersScreenState = class _BookingOffersScreenState extends framework.State$(booking_offers_screen.BookingOffersScreen) {
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      let officeId = provider.Provider.of(make_booking_provider.MakeBookingProvider, context, {listen: false}).selectedOffice.officeId;
      this.officeWorkdays == null ? this.officeWorkdays = service_api.ServiceAPI.getWorkdaysFromOfficeId(officeId) : null;
      return new container.Container.new({height: 900.0, padding: C[1] || CT.C1, width: 1 / 0, child: new basic.Column.new({children: T.JSArrayOfWidget().of([C[2] || CT.C2, new basic.Align.new({alignment: alignment.Alignment.centerLeft, child: new text.Text.new("Seleccione la fecha:", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), C[6] || CT.C6, new container.Container.new({padding: C[8] || CT.C8, decoration: new box_decoration.BoxDecoration.new({color: colorScheme.primaryContainer, borderRadius: new border_radius.BorderRadius.circular(8.0)}), child: new text_button._TextButtonWithIcon.new({onPressed: dart.fn(() => {
                  let t0;
                  t0 = this.officeWorkdays;
                  t0 == null ? null : t0.then(core.Null, dart.fn(value => async.async(core.Null, function*() {
                    provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).showDatePickerProvider(context, value);
                  }), T.ListOfWorkdayToFutureOfNull()));
                }, T.VoidTovoid()), icon: C[9] || CT.C9, label: new text.Text.new(provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).selectedDateString, {style: theme.Theme.of(context).textTheme.bodyLarge, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), C[15] || CT.C15, provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).dateWasSelected ? new booking_offers_screen._SelectOffert.new({$creationLocationd_0dea112b090073317d4: C[17] || CT.C17}) : C[18] || CT.C18, C[23] || CT.C23, new booking_offers_screen._ManagementButton.new({$creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), C[26] || CT.C26]), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29});
    }
    static ['_#new#tearOff']() {
      return new booking_offers_screen._BookingOffersScreenState.new();
    }
  };
  (booking_offers_screen._BookingOffersScreenState.new = function() {
    this.officeWorkdays = null;
    booking_offers_screen._BookingOffersScreenState.__proto__.new.call(this);
    ;
  }).prototype = booking_offers_screen._BookingOffersScreenState.prototype;
  dart.addTypeTests(booking_offers_screen._BookingOffersScreenState);
  dart.addTypeCaches(booking_offers_screen._BookingOffersScreenState);
  dart.setMethodSignature(booking_offers_screen._BookingOffersScreenState, () => ({
    __proto__: dart.getMethods(booking_offers_screen._BookingOffersScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_offers_screen._BookingOffersScreenState, I[0]);
  dart.setFieldSignature(booking_offers_screen._BookingOffersScreenState, () => ({
    __proto__: dart.getFields(booking_offers_screen._BookingOffersScreenState.__proto__),
    officeWorkdays: dart.fieldType(dart.nullable(async.Future$(core.List$(workday.Workday))))
  }));
  booking_offers_screen._SelectOffert = class _SelectOffert extends framework.StatelessWidget {
    build(context) {
      let t0;
      let bookingInfo = provider.Provider.of(make_booking_provider.MakeBookingProvider, context, {listen: true});
      this.offers = (t0 = this.offers, t0 == null ? service_api.ServiceAPI.getOffers(bookingInfo.selectedService.serviceId, bookingInfo.selectedOffice.officeId, bookingInfo.selectedWorkday.workdayId) : t0);
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new("Seleccione el empleado:", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), C[31] || CT.C31, new container.Container.new({height: media_query.MediaQuery.of(context).size.height * 0.4, color: colors.Colors.white12, child: new (T.FutureBuilderOfListOfOffer()).new({future: this.offers, builder: dart.fn((context, snapshot) => {
                let t0;
                if (snapshot.hasData) {
                  let offers = T.ListOfOffer().as(snapshot.data);
                  let employees = new (T.IdentityMapOfint$List()).new();
                  for (let offer of offers) {
                    employees[$addAll](new (T.IdentityMapOfint$List()).from([offer.employeeId, []]));
                  }
                  for (let offer of offers) {
                    t0 = employees[$_get](offer.employeeId);
                    t0 == null ? null : t0[$add](offer);
                  }
                  let employeesId = employees[$keys][$toList]();
                  return new scroll_view.ListView.builder({itemCount: employeesId[$length], itemBuilder: dart.fn((context, index) => new (T.FutureBuilderOfEmployee()).new({future: service_api.ServiceAPI.getEmployeeById(core.int.as(employeesId[$_get](index))), builder: dart.fn((context, snapshot) => {
                        if (snapshot.hasData) {
                          let employee = employee$.Employee.as(snapshot.data);
                          return new booking_offers_screen._CardOffers.new({index: index, employee: employee, offers: offers, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
                        }
                        if (snapshot.hasError) {
                          return C[34] || CT.C34;
                        }
                        return C[38] || CT.C38;
                      }, T.BuildContextAndAsyncSnapshotOfObjectNToWidget()), $creationLocationd_0dea112b090073317d4: C[40] || CT.C40}), T.BuildContextAndintToFutureBuilderOfEmployee()), $creationLocationd_0dea112b090073317d4: C[41] || CT.C41});
                }
                if (snapshot.hasError) {
                  return C[42] || CT.C42;
                }
                return C[44] || CT.C44;
              }, T.BuildContextAndAsyncSnapshotOfObjectNToWidget()), $creationLocationd_0dea112b090073317d4: C[48] || CT.C48}), $creationLocationd_0dea112b090073317d4: C[49] || CT.C49})]), $creationLocationd_0dea112b090073317d4: C[50] || CT.C50});
    }
    static ['_#new#tearOff']() {
      return new booking_offers_screen._SelectOffert.new({$creationLocationd_0dea112b090073317d4: C[51] || CT.C51});
    }
  };
  (booking_offers_screen._SelectOffert.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.offers = null;
    booking_offers_screen._SelectOffert.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_offers_screen._SelectOffert.prototype;
  dart.addTypeTests(booking_offers_screen._SelectOffert);
  dart.addTypeCaches(booking_offers_screen._SelectOffert);
  dart.setMethodSignature(booking_offers_screen._SelectOffert, () => ({
    __proto__: dart.getMethods(booking_offers_screen._SelectOffert.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_offers_screen._SelectOffert, I[0]);
  dart.setFieldSignature(booking_offers_screen._SelectOffert, () => ({
    __proto__: dart.getFields(booking_offers_screen._SelectOffert.__proto__),
    offers: dart.fieldType(dart.nullable(async.Future$(core.List$(offer.Offer))))
  }));
  var index$ = dart.privateName(booking_offers_screen, "_CardOffers.index");
  var employee$0 = dart.privateName(booking_offers_screen, "_CardOffers.employee");
  var offers$ = dart.privateName(booking_offers_screen, "_CardOffers.offers");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  booking_offers_screen._CardOffers = class _CardOffers extends framework.StatelessWidget {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get employee() {
      return this[employee$0];
    }
    set employee(value) {
      super.employee = value;
    }
    get offers() {
      return this[offers$];
    }
    set offers(value) {
      super.offers = value;
    }
    static ['_#new#tearOff'](opts) {
      let index = opts && 'index' in opts ? opts.index : null;
      let employee = opts && 'employee' in opts ? opts.employee : null;
      let offers = opts && 'offers' in opts ? opts.offers : null;
      return new booking_offers_screen._CardOffers.new({index: index, employee: employee, offers: offers, $creationLocationd_0dea112b090073317d4: C[52] || CT.C52});
    }
    build(context) {
      let validOffers = this.offers[$where](dart.fn(e => e.employeeId === this.employee.employeeId, T.OfferTobool()))[$toList]();
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
        }, T.VoidTovoid()), child: new container.Container.new({padding: C[53] || CT.C53, child: new card.Card.new({elevation: 4.0, color: colors.Colors.white, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: C[54] || CT.C54, child: new icon.Icon.new(icons.Icons.people, {size: 50.0, color: provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).employeeIndex === this.index ? colors.Colors.green : colors.Colors.indigo, $creationLocationd_0dea112b090073317d4: C[55] || CT.C55}), $creationLocationd_0dea112b090073317d4: C[56] || CT.C56}), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(this.employee.personName, {$creationLocationd_0dea112b090073317d4: C[57] || CT.C57}), new text.Text.new(dart.toString(this.employee.specialities), {$creationLocationd_0dea112b090073317d4: C[58] || CT.C58})]), $creationLocationd_0dea112b090073317d4: C[59] || CT.C59})]), $creationLocationd_0dea112b090073317d4: C[60] || CT.C60}), new scroll_view.ListView.builder({shrinkWrap: true, itemCount: validOffers[$length], itemBuilder: dart.fn((context, itemIndex) => {
                    let startTime = validOffers[$_get](itemIndex).startTime;
                    let endTime = validOffers[$_get](itemIndex).endTime;
                    return new basic.Column.new({children: T.JSArrayOfWidget().of([C[61] || CT.C61, new booking_offers_screen.SelectableTimeOfferWidget.new({index: this.index, selectedOffer: validOffers[$_get](itemIndex), employee: this.employee, startTime: startTime, endTime: endTime, selfIndex: itemIndex, $creationLocationd_0dea112b090073317d4: C[63] || CT.C63})]), $creationLocationd_0dea112b090073317d4: C[64] || CT.C64});
                  }, T.BuildContextAndintToColumn()), $creationLocationd_0dea112b090073317d4: C[65] || CT.C65})]), $creationLocationd_0dea112b090073317d4: C[66] || CT.C66}), $creationLocationd_0dea112b090073317d4: C[67] || CT.C67}), $creationLocationd_0dea112b090073317d4: C[68] || CT.C68}), $creationLocationd_0dea112b090073317d4: C[69] || CT.C69});
    }
  };
  (booking_offers_screen._CardOffers.new = function(opts) {
    let index = opts && 'index' in opts ? opts.index : null;
    let employee = opts && 'employee' in opts ? opts.employee : null;
    let offers = opts && 'offers' in opts ? opts.offers : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[index$] = index;
    this[employee$0] = employee;
    this[offers$] = offers;
    booking_offers_screen._CardOffers.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_offers_screen._CardOffers.prototype;
  dart.addTypeTests(booking_offers_screen._CardOffers);
  dart.addTypeCaches(booking_offers_screen._CardOffers);
  dart.setMethodSignature(booking_offers_screen._CardOffers, () => ({
    __proto__: dart.getMethods(booking_offers_screen._CardOffers.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_offers_screen._CardOffers, I[0]);
  dart.setFieldSignature(booking_offers_screen._CardOffers, () => ({
    __proto__: dart.getFields(booking_offers_screen._CardOffers.__proto__),
    index: dart.finalFieldType(core.int),
    employee: dart.finalFieldType(employee$.Employee),
    offers: dart.finalFieldType(core.List$(offer.Offer))
  }));
  var index$0 = dart.privateName(booking_offers_screen, "SelectableTimeOfferWidget.index");
  var selectedOffer$ = dart.privateName(booking_offers_screen, "SelectableTimeOfferWidget.selectedOffer");
  var startTime$ = dart.privateName(booking_offers_screen, "SelectableTimeOfferWidget.startTime");
  var endTime$ = dart.privateName(booking_offers_screen, "SelectableTimeOfferWidget.endTime");
  var employee$1 = dart.privateName(booking_offers_screen, "SelectableTimeOfferWidget.employee");
  var selfIndex$ = dart.privateName(booking_offers_screen, "SelectableTimeOfferWidget.selfIndex");
  booking_offers_screen.SelectableTimeOfferWidget = class SelectableTimeOfferWidget extends framework.StatelessWidget {
    get index() {
      return this[index$0];
    }
    set index(value) {
      super.index = value;
    }
    get selectedOffer() {
      return this[selectedOffer$];
    }
    set selectedOffer(value) {
      super.selectedOffer = value;
    }
    get startTime() {
      return this[startTime$];
    }
    set startTime(value) {
      super.startTime = value;
    }
    get endTime() {
      return this[endTime$];
    }
    set endTime(value) {
      super.endTime = value;
    }
    get employee() {
      return this[employee$1];
    }
    set employee(value) {
      super.employee = value;
    }
    get selfIndex() {
      return this[selfIndex$];
    }
    set selfIndex(value) {
      super.selfIndex = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let selectedOffer = opts && 'selectedOffer' in opts ? opts.selectedOffer : null;
      let employee = opts && 'employee' in opts ? opts.employee : null;
      let startTime = opts && 'startTime' in opts ? opts.startTime : null;
      let endTime = opts && 'endTime' in opts ? opts.endTime : null;
      let selfIndex = opts && 'selfIndex' in opts ? opts.selfIndex : null;
      return new booking_offers_screen.SelectableTimeOfferWidget.new({key: key, index: index, selectedOffer: selectedOffer, employee: employee, startTime: startTime, endTime: endTime, selfIndex: selfIndex, $creationLocationd_0dea112b090073317d4: C[70] || CT.C70});
    }
    build(context) {
      let isSelected = provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).selectedOffer.offerId === this.selectedOffer.offerId;
      return new container.Container.new({width: 1 / 0, padding: C[71] || CT.C71, color: isSelected ? colors.Colors.green : null, child: new basic.Align.new({alignment: alignment.Alignment.center, child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
              provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).setEmployeeName(core.String.as(employee_test_data.listadoEmployees[$_get](this.index)[$_get]("employeeName")));
              provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).setStartTime(this.startTime);
              provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).setEndTime(this.endTime);
              provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).setOffer(this.selectedOffer);
              provider['ReadContext|read'](make_booking_provider.MakeBookingProvider, context).setEmployee(this.employee);
            }, T.VoidTovoid()), child: new text.Text.new(this.startTime + " - " + this.endTime, {$creationLocationd_0dea112b090073317d4: C[72] || CT.C72}), $creationLocationd_0dea112b090073317d4: C[73] || CT.C73}), $creationLocationd_0dea112b090073317d4: C[74] || CT.C74}), $creationLocationd_0dea112b090073317d4: C[75] || CT.C75});
    }
  };
  (booking_offers_screen.SelectableTimeOfferWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let selectedOffer = opts && 'selectedOffer' in opts ? opts.selectedOffer : null;
    let employee = opts && 'employee' in opts ? opts.employee : null;
    let startTime = opts && 'startTime' in opts ? opts.startTime : null;
    let endTime = opts && 'endTime' in opts ? opts.endTime : null;
    let selfIndex = opts && 'selfIndex' in opts ? opts.selfIndex : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[index$0] = index;
    this[selectedOffer$] = selectedOffer;
    this[employee$1] = employee;
    this[startTime$] = startTime;
    this[endTime$] = endTime;
    this[selfIndex$] = selfIndex;
    booking_offers_screen.SelectableTimeOfferWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_offers_screen.SelectableTimeOfferWidget.prototype;
  dart.addTypeTests(booking_offers_screen.SelectableTimeOfferWidget);
  dart.addTypeCaches(booking_offers_screen.SelectableTimeOfferWidget);
  dart.setMethodSignature(booking_offers_screen.SelectableTimeOfferWidget, () => ({
    __proto__: dart.getMethods(booking_offers_screen.SelectableTimeOfferWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_offers_screen.SelectableTimeOfferWidget, I[0]);
  dart.setFieldSignature(booking_offers_screen.SelectableTimeOfferWidget, () => ({
    __proto__: dart.getFields(booking_offers_screen.SelectableTimeOfferWidget.__proto__),
    index: dart.finalFieldType(core.int),
    selectedOffer: dart.finalFieldType(offer.Offer),
    startTime: dart.finalFieldType(core.String),
    endTime: dart.finalFieldType(core.String),
    employee: dart.finalFieldType(employee$.Employee),
    selfIndex: dart.finalFieldType(core.int)
  }));
  booking_offers_screen._ManagementButton = class _ManagementButton extends framework.StatelessWidget {
    build(context) {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: T.JSArrayOfWidget().of([new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
              let t1, t0;
              t0 = provider['ReadContext|read'](navigation_booking_provider.NavigationBookingProvider, context);
              t1 = t0.currentIndex;
              t0.currentIndex = t1 - 1;
              return t1;
            }, T.VoidTovoid()), style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colors.Colors.grey}), child: C[76] || CT.C76, $creationLocationd_0dea112b090073317d4: C[78] || CT.C78}), new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
              let t1, t0;
              t0 = provider['ReadContext|read'](navigation_booking_provider.NavigationBookingProvider, context);
              t1 = t0.currentIndex;
              t0.currentIndex = t1 + 1;
              return t1;
            }, T.VoidTovoid()), style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colors.Colors.green}), child: C[79] || CT.C79, $creationLocationd_0dea112b090073317d4: C[81] || CT.C81})]), $creationLocationd_0dea112b090073317d4: C[82] || CT.C82});
    }
    static ['_#new#tearOff']() {
      return new booking_offers_screen._ManagementButton.new({$creationLocationd_0dea112b090073317d4: C[83] || CT.C83});
    }
  };
  (booking_offers_screen._ManagementButton.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    booking_offers_screen._ManagementButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_offers_screen._ManagementButton.prototype;
  dart.addTypeTests(booking_offers_screen._ManagementButton);
  dart.addTypeCaches(booking_offers_screen._ManagementButton);
  dart.setMethodSignature(booking_offers_screen._ManagementButton, () => ({
    __proto__: dart.getMethods(booking_offers_screen._ManagementButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_offers_screen._ManagementButton, I[0]);
  dart.trackLibraries("packages/my_ticket_care/screens/booking/create_booking_screens/booking_offers_screen.dart", {
    "package:my_ticket_care/screens/booking/create_booking_screens/booking_offers_screen.dart": booking_offers_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["booking_offers_screen.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/my_ticket_care/screens/booking/create_booking_screens/booking_offers_screen.dart.lib.js"}');
  // Exports:
  return {
    screens__booking__create_booking_screens__booking_offers_screen: booking_offers_screen
  };
}));

//# sourceMappingURL=booking_offers_screen.dart.lib.js.map
