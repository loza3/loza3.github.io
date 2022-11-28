define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter_riverpod/src/consumer.dart', 'packages/my_ticket_care/models/test_data/booking_test_data.dart', 'packages/my_ticket_care/reusable/container_cards.dart', 'packages/flutter/src/material/card.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/icons.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/riverpod/src/value_provider.dart', 'packages/riverpod/src/state_controller.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/painting/placeholder_span.dart'], (function load__packages__my_ticket_care__src__user_info__presentation__user_info_bookings_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter_riverpod__src__consumer$46dart, packages__my_ticket_care__models__test_data__booking_test_data$46dart, packages__my_ticket_care__reusable__container_cards$46dart, packages__flutter__src__material__card$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__icons$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__riverpod__src__value_provider$46dart, packages__riverpod__src__state_controller$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__painting__placeholder_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const consumer = packages__flutter_riverpod__src__consumer$46dart.src__consumer;
  const booking_test_data = packages__my_ticket_care__models__test_data__booking_test_data$46dart.models__test_data__booking_test_data;
  const container_cards = packages__my_ticket_care__reusable__container_cards$46dart.reusable__container_cards;
  const card = packages__flutter__src__material__card$46dart.src__material__card;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const state_provider = packages__riverpod__src__value_provider$46dart.src__state_provider;
  const state_controller = packages__riverpod__src__state_controller$46dart.src__state_controller;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  var user_info_bookings = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    StateProviderOfbool: () => (T.StateProviderOfbool = dart.constFn(state_provider.StateProvider$(core.bool)))(),
    StateProviderRefOfbool: () => (T.StateProviderRefOfbool = dart.constFn(state_provider.StateProviderRef$(core.bool)))(),
    StateProviderRefOfboolTobool: () => (T.StateProviderRefOfboolTobool = dart.constFn(dart.fnType(core.bool, [T.StateProviderRefOfbool()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoBookingsScreen",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoBookingsCard",
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingFilterButtons",
        [_Location_column]: 18,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: user_info_bookings.BookingFilterButtons.prototype,
        [Widget__location]: C[7] || CT.C7,
        [Widget_key]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: user_info_bookings.UserInfoBookingsCard.prototype,
        [Widget__location]: C[5] || CT.C5,
        [Widget_key]: null,
        [UserInfoBookingsCard_child]: C[6] || CT.C6,
        [UserInfoBookingsCard_title]: "Reservas: "
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoBookingsCard",
        [_Location_column]: 17,
        [_Location_line]: 40,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IncompleteBookingsList",
        [_Location_column]: 20,
        [_Location_line]: 42,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: user_info_bookings.IncompleteBookingsList.prototype,
        [Widget__location]: C[11] || CT.C11,
        [Widget_key]: null
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: user_info_bookings.UserInfoBookingsCard.prototype,
        [Widget__location]: C[9] || CT.C9,
        [Widget_key]: null,
        [UserInfoBookingsCard_child]: C[10] || CT.C10,
        [UserInfoBookingsCard_title]: "En espera"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoBookingsCard",
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 20,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 24,
        [_Location_line]: 49,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[17] || CT.C17,
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
        [Text_data]: "Ninguna reserva encontrada"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0.5,
        [Alignment_x]: -0.9
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: basic.Align.prototype,
        [Widget__location]: C[15] || CT.C15,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[16] || CT.C16,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[18] || CT.C18
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: user_info_bookings.UserInfoBookingsCard.prototype,
        [Widget__location]: C[13] || CT.C13,
        [Widget_key]: null,
        [UserInfoBookingsCard_child]: C[14] || CT.C14,
        [UserInfoBookingsCard_title]: "Completadas"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoBookingsCard",
        [_Location_column]: 17,
        [_Location_line]: 52,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 20,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 24,
        [_Location_line]: 56,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[24] || CT.C24,
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
        [Text_data]: "Ninguna reserva encontrada"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: basic.Align.prototype,
        [Widget__location]: C[22] || CT.C22,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[23] || CT.C23,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[18] || CT.C18
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: user_info_bookings.UserInfoBookingsCard.prototype,
        [Widget__location]: C[20] || CT.C20,
        [Widget_key]: null,
        [UserInfoBookingsCard_child]: C[21] || CT.C21,
        [UserInfoBookingsCard_title]: "Canceladas"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IncompleteBookingsList",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[28] || CT.C28,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: 3,
        [Divider_height]: null
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 12,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UserInfoBookingsCard",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 20
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284111450.0
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 122,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 19,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[36] || CT.C36,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 8,
        [SizedBox_width]: null
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 116,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Card",
        [_Location_column]: 12,
        [_Location_line]: 113,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingFilterButtons",
        [_Location_column]: 9,
        [_Location_line]: 138,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FilterSelectionButton",
        [_Location_column]: 18,
        [_Location_line]: 147,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 154,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[44] || CT.C44,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 20
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FilterSelectionButton",
        [_Location_column]: 18,
        [_Location_line]: 156,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 155,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 162,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[48] || CT.C48,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 20
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FilterSelectionButton",
        [_Location_column]: 18,
        [_Location_line]: 164,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 144,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FilterSelectionButton",
        [_Location_column]: 9,
        [_Location_line]: 177,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293980400.0
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294704123.0
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 13,
        [_Location_line]: 220,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 225,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 218,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 206,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 12,
        [_Location_line]: 199,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/user_info/presentation/user_info_bookings.dart"
      });
    }
  }, false);
  var C = Array(61).fill(void 0);
  var I = ["package:my_ticket_care/src/user_info/presentation/user_info_bookings.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var UserInfoBookingsCard_child = dart.privateName(user_info_bookings, "UserInfoBookingsCard.child");
  var UserInfoBookingsCard_title = dart.privateName(user_info_bookings, "UserInfoBookingsCard.title");
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
  user_info_bookings.UserInfoBookingsScreen = class UserInfoBookingsScreen extends consumer.ConsumerWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new user_info_bookings.UserInfoBookingsScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context, ref) {
      let titleStyle = dart.nullCheck(theme.Theme.of(context).textTheme.headline4).copyWith({color: colors.Colors.black});
      return new scroll_view.ListView.new({children: (() => {
          let t0 = T.JSArrayOfWidget().of([C[1] || CT.C1, new text.Text.new("Mis reservas", {style: titleStyle, textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), C[4] || CT.C4]);
          if (ref.watch(core.bool, user_info_bookings.showIncompleteBookings)) t0.push(C[8] || CT.C8);
          if (ref.watch(core.bool, user_info_bookings.showCompletedBookings)) t0.push(C[12] || CT.C12);
          if (ref.watch(core.bool, user_info_bookings.showCanceledBookings)) t0.push(C[19] || CT.C19);
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
    }
  };
  (user_info_bookings.UserInfoBookingsScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    user_info_bookings.UserInfoBookingsScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_bookings.UserInfoBookingsScreen.prototype;
  dart.addTypeTests(user_info_bookings.UserInfoBookingsScreen);
  dart.addTypeCaches(user_info_bookings.UserInfoBookingsScreen);
  dart.setMethodSignature(user_info_bookings.UserInfoBookingsScreen, () => ({
    __proto__: dart.getMethods(user_info_bookings.UserInfoBookingsScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef])
  }));
  dart.setLibraryUri(user_info_bookings.UserInfoBookingsScreen, I[0]);
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  user_info_bookings.IncompleteBookingsList = class IncompleteBookingsList extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new user_info_bookings.IncompleteBookingsList.new({key: key, $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
    build(context) {
      let bookItem = booking_test_data.listadoReservas[$_get](0);
      let serviceName = core.String.as(bookItem[$_get]("serviceName"));
      let time = core.String.as(bookItem[$_get]("time"));
      let specialistName = core.String.as(bookItem[$_get]("specialistName"));
      let date = core.String.as(bookItem[$_get]("date"));
      let companyName = core.String.as(bookItem[$_get]("companyName"));
      return new basic.Column.new({children: T.JSArrayOfWidget().of([container_cards.ContainersCards.cardsDecorations({context: context, hora: true, imagen: "https://picsum.photos/300/301", titulo: serviceName, subtitulo: companyName, subtitulo2: specialistName, button1: date, button2: time, shadow: false}), C[27] || CT.C27, container_cards.ContainersCards.cardsDecorations({context: context, hora: true, imagen: "https://picsum.photos/300/300", titulo: serviceName, subtitulo: companyName, subtitulo2: specialistName, button1: date, button2: time})]), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29});
    }
  };
  (user_info_bookings.IncompleteBookingsList.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    user_info_bookings.IncompleteBookingsList.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_bookings.IncompleteBookingsList.prototype;
  dart.addTypeTests(user_info_bookings.IncompleteBookingsList);
  dart.addTypeCaches(user_info_bookings.IncompleteBookingsList);
  dart.setMethodSignature(user_info_bookings.IncompleteBookingsList, () => ({
    __proto__: dart.getMethods(user_info_bookings.IncompleteBookingsList.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(user_info_bookings.IncompleteBookingsList, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Color_value = dart.privateName(ui, "Color.value");
  const title$ = UserInfoBookingsCard_title;
  const child$ = UserInfoBookingsCard_child;
  user_info_bookings.UserInfoBookingsCard = class UserInfoBookingsCard extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new user_info_bookings.UserInfoBookingsCard.new({key: key, title: title, child: child, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
    }
    build(context) {
      return new card.Card.new({margin: C[31] || CT.C31, elevation: 3.0, child: new container.Container.new({padding: C[32] || CT.C32, width: 1 / 0, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(this.title, {style: dart.nullCheck(theme.Theme.of(context).textTheme.headline6).copyWith({color: C[33] || CT.C33}), $creationLocationd_0dea112b090073317d4: C[34] || CT.C34}), C[35] || CT.C35, this.child]), $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38}), $creationLocationd_0dea112b090073317d4: C[39] || CT.C39});
    }
  };
  (user_info_bookings.UserInfoBookingsCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[child$] = child;
    user_info_bookings.UserInfoBookingsCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_bookings.UserInfoBookingsCard.prototype;
  dart.addTypeTests(user_info_bookings.UserInfoBookingsCard);
  dart.addTypeCaches(user_info_bookings.UserInfoBookingsCard);
  dart.setMethodSignature(user_info_bookings.UserInfoBookingsCard, () => ({
    __proto__: dart.getMethods(user_info_bookings.UserInfoBookingsCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(user_info_bookings.UserInfoBookingsCard, I[0]);
  dart.setFieldSignature(user_info_bookings.UserInfoBookingsCard, () => ({
    __proto__: dart.getFields(user_info_bookings.UserInfoBookingsCard.__proto__),
    title: dart.finalFieldType(core.String),
    child: dart.finalFieldType(framework.Widget)
  }));
  user_info_bookings.BookingFilterButtons = class BookingFilterButtons extends consumer.ConsumerWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new user_info_bookings.BookingFilterButtons.new({key: key, $creationLocationd_0dea112b090073317d4: C[40] || CT.C40});
    }
    build(context, ref) {
      return new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Expanded.new({child: new user_info_bookings.FilterSelectionButton.new({iconColor: colors.Colors.grey, iconData: icons.Icons.alarm_add, label: "En espera", provider: user_info_bookings.showIncompleteBookings, $creationLocationd_0dea112b090073317d4: C[41] || CT.C41}), $creationLocationd_0dea112b090073317d4: C[42] || CT.C42}), C[43] || CT.C43, new basic.Expanded.new({child: new user_info_bookings.FilterSelectionButton.new({iconColor: colors.Colors.grey, iconData: icons.Icons.alarm_on, label: "Completados", provider: user_info_bookings.showCompletedBookings, $creationLocationd_0dea112b090073317d4: C[45] || CT.C45}), $creationLocationd_0dea112b090073317d4: C[46] || CT.C46}), C[47] || CT.C47, new basic.Expanded.new({child: new user_info_bookings.FilterSelectionButton.new({iconColor: colors.Colors.grey, iconData: icons.Icons.alarm_off_outlined, label: "Cancelados", provider: user_info_bookings.showCanceledBookings, $creationLocationd_0dea112b090073317d4: C[49] || CT.C49}), $creationLocationd_0dea112b090073317d4: C[50] || CT.C50})]), $creationLocationd_0dea112b090073317d4: C[51] || CT.C51});
    }
  };
  (user_info_bookings.BookingFilterButtons.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    user_info_bookings.BookingFilterButtons.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_bookings.BookingFilterButtons.prototype;
  dart.addTypeTests(user_info_bookings.BookingFilterButtons);
  dart.addTypeCaches(user_info_bookings.BookingFilterButtons);
  dart.setMethodSignature(user_info_bookings.BookingFilterButtons, () => ({
    __proto__: dart.getMethods(user_info_bookings.BookingFilterButtons.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, consumer.WidgetRef])
  }));
  dart.setLibraryUri(user_info_bookings.BookingFilterButtons, I[0]);
  var iconData$ = dart.privateName(user_info_bookings, "FilterSelectionButton.iconData");
  var label$ = dart.privateName(user_info_bookings, "FilterSelectionButton.label");
  var iconColor$ = dart.privateName(user_info_bookings, "FilterSelectionButton.iconColor");
  var provider$ = dart.privateName(user_info_bookings, "FilterSelectionButton.provider");
  user_info_bookings.FilterSelectionButton = class FilterSelectionButton extends consumer.ConsumerStatefulWidget {
    get iconData() {
      return this[iconData$];
    }
    set iconData(value) {
      super.iconData = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get iconColor() {
      return this[iconColor$];
    }
    set iconColor(value) {
      super.iconColor = value;
    }
    get provider() {
      return this[provider$];
    }
    set provider(value) {
      super.provider = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let iconColor = opts && 'iconColor' in opts ? opts.iconColor : null;
      let iconData = opts && 'iconData' in opts ? opts.iconData : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let provider = opts && 'provider' in opts ? opts.provider : null;
      return new user_info_bookings.FilterSelectionButton.new({key: key, iconColor: iconColor, iconData: iconData, label: label, provider: provider, $creationLocationd_0dea112b090073317d4: C[52] || CT.C52});
    }
    createState() {
      return new user_info_bookings._FilterSelectionButtonState.new();
    }
  };
  (user_info_bookings.FilterSelectionButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let iconColor = opts && 'iconColor' in opts ? opts.iconColor : null;
    let iconData = opts && 'iconData' in opts ? opts.iconData : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let provider = opts && 'provider' in opts ? opts.provider : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[iconColor$] = iconColor;
    this[iconData$] = iconData;
    this[label$] = label;
    this[provider$] = provider;
    user_info_bookings.FilterSelectionButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = user_info_bookings.FilterSelectionButton.prototype;
  dart.addTypeTests(user_info_bookings.FilterSelectionButton);
  dart.addTypeCaches(user_info_bookings.FilterSelectionButton);
  dart.setMethodSignature(user_info_bookings.FilterSelectionButton, () => ({
    __proto__: dart.getMethods(user_info_bookings.FilterSelectionButton.__proto__),
    createState: dart.fnType(consumer.ConsumerState$(user_info_bookings.FilterSelectionButton), [])
  }));
  dart.setLibraryUri(user_info_bookings.FilterSelectionButton, I[0]);
  dart.setFieldSignature(user_info_bookings.FilterSelectionButton, () => ({
    __proto__: dart.getFields(user_info_bookings.FilterSelectionButton.__proto__),
    iconData: dart.finalFieldType(icon_data.IconData),
    label: dart.finalFieldType(core.String),
    iconColor: dart.finalFieldType(ui.Color),
    provider: dart.finalFieldType(state_provider.StateProvider)
  }));
  user_info_bookings._FilterSelectionButtonState = class _FilterSelectionButtonState extends consumer.ConsumerState$(user_info_bookings.FilterSelectionButton) {
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          this.isSelected = !this.isSelected;
          this.ref.read(state_controller.StateController, this.widget.provider.state).state = this.isSelected;
          this.setState(dart.fn(() => {
          }, T.VoidTovoid()));
        }, T.VoidTovoid()), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: this.isSelected ? C[53] || CT.C53 : C[54] || CT.C54, borderRadius: new border_radius.BorderRadius.circular(5.0), border: box_border.Border.all({width: 3.0, color: C[53] || CT.C53})}), padding: C[55] || CT.C55, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new icon.Icon.new(this.widget.iconData, {size: 45.0, color: this.widget.iconColor, $creationLocationd_0dea112b090073317d4: C[56] || CT.C56}), new text.Text.new(this.widget.label, {maxLines: 1, overflow: text_painter.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C[57] || CT.C57})]), $creationLocationd_0dea112b090073317d4: C[58] || CT.C58}), $creationLocationd_0dea112b090073317d4: C[59] || CT.C59}), $creationLocationd_0dea112b090073317d4: C[60] || CT.C60});
    }
    static ['_#new#tearOff']() {
      return new user_info_bookings._FilterSelectionButtonState.new();
    }
  };
  (user_info_bookings._FilterSelectionButtonState.new = function() {
    this.isSelected = true;
    user_info_bookings._FilterSelectionButtonState.__proto__.new.call(this);
    ;
  }).prototype = user_info_bookings._FilterSelectionButtonState.prototype;
  dart.addTypeTests(user_info_bookings._FilterSelectionButtonState);
  dart.addTypeCaches(user_info_bookings._FilterSelectionButtonState);
  dart.setMethodSignature(user_info_bookings._FilterSelectionButtonState, () => ({
    __proto__: dart.getMethods(user_info_bookings._FilterSelectionButtonState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(user_info_bookings._FilterSelectionButtonState, I[0]);
  dart.setFieldSignature(user_info_bookings._FilterSelectionButtonState, () => ({
    __proto__: dart.getFields(user_info_bookings._FilterSelectionButtonState.__proto__),
    isSelected: dart.fieldType(core.bool)
  }));
  dart.defineLazy(user_info_bookings, {
    /*user_info_bookings.showIncompleteBookings*/get showIncompleteBookings() {
      return new (T.StateProviderOfbool()).new(dart.fn(ref => true, T.StateProviderRefOfboolTobool()));
    },
    /*user_info_bookings.showCompletedBookings*/get showCompletedBookings() {
      return new (T.StateProviderOfbool()).new(dart.fn(ref => true, T.StateProviderRefOfboolTobool()));
    },
    /*user_info_bookings.showCanceledBookings*/get showCanceledBookings() {
      return new (T.StateProviderOfbool()).new(dart.fn(ref => true, T.StateProviderRefOfboolTobool()));
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/src/user_info/presentation/user_info_bookings.dart", {
    "package:my_ticket_care/src/user_info/presentation/user_info_bookings.dart": user_info_bookings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["user_info_bookings.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAsB4B,SAAmB;AACrC,uBAAkD,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,wCACf;AAEpB,YAAO,yCACK;0DAER,kBACE,wBACO,UAAU,aACI;AAMvB,cAAI,AAAI,GAAD,kBAAO,4CACN;AAIR,cAAI,AAAI,GAAD,kBAAO,2CACN;AAMR,cAAI,AAAI,GAAD,kBAAO,0CACN;;;IAQd;;;QAxCmC;;AAAQ,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;UA+ChC;AACpB,qBAAW,AAAe,yCAAC;AACxB,uCAAc,AAAQ,QAAA,QAAC;AACvB,gCAAO,AAAQ,QAAA,QAAC;AAChB,0CAAiB,AAAQ,QAAA,QAAC;AAC1B,gCAAO,AAAQ,QAAA,QAAC;AAChB,uCAAc,AAAQ,QAAA,QAAC;AAC9B,YAAO,iCACK,wBACQ,2DACL,OAAO,QACV,cACE,yCACA,WAAW,aACR,WAAW,cACV,cAAc,WACjB,IAAI,WACJ,IAAI,UACL,0BAGM,2DACL,OAAO,QACV,cACE,yCACA,WAAW,aACR,WAAW,cACV,cAAc,WACjB,IAAI,WACJ,IAAI;IAIrB;;;QApCmC;;AAAQ,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IA4C7C;;;;;;IACA;;;;;;;;;;;;UAGa;AACxB,YAAO,wDAEM,YACJ,4EAGE,0CACkC,yCAC7B,wBACR,kBACE,oBAC4C,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,uIAKzB;IAKV;;;QA7BU;QAAmB;QAAqB;;IAArB;IAAqB;AAC5C,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;UAqCK,SAAmB;AAC3C,YAAO,8BACK,wBACR,+BACS,6DACa,8BACF,8BACT,uBACG,kLAId,+BACS,6DACe,8BACF,6BACT,yBACG,iLAGhB,+BACS,6DACa,8BACF,uCACT,wBACG;IAKpB;;;QAlCO;;AACF,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;IA6CL;;;;;;IACF;;;;;;IACD;;;;;;IACQ;;;;;;;;;;;;;;;AAIhB;IAA6B;;;QAd1B;QACS;QACA;QACA;QACA;;IAHA;IACA;IACA;IACA;AACX,4EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;UAeM;AACxB,YAAO,kDACE;AACmB,UAAxB,mBAAc;AACoC,UAAlD,AAAI,AAA4B,gDAAvB,AAAO,AAAS,oCAAe;AAEzB,UAAf,cAAS;;mCAEJ,yCACO,6CACH,mEAGoB,wCAAS,cACrB,8BACN,kEAKJ,gCACK,wBACR,kBACE,AAAO,6BACD,aACC,AAAO,kFAEhB,kBACE,AAAO,8BACG,aACa;IAMnC;;;;;;IAtCK,kBAAa;;;EAuCpB;;;;;;;;;;;;;MApOM,yCAAsB;YAAG,mCAAoB,QAAC,OAC3C;;MAGH,wCAAqB;YAAG,mCAAoB,QAAC,OAC1C;;MAGH,uCAAoB;YAAG,mCAAoB,QAAC,OACzC","file":"../../../../../../../../../../../packages/my_ticket_care/src/user_info/presentation/user_info_bookings.dart.lib.js"}');
  // Exports:
  return {
    src__user_info__presentation__user_info_bookings: user_info_bookings
  };
}));

//# sourceMappingURL=user_info_bookings.dart.lib.js.map
