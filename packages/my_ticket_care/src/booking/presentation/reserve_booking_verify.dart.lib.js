define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/my_ticket_care/src/booking/presentation/widgets/verify_information_widgets.dart', 'packages/flutter/src/material/icons.dart', 'packages/provider/src/selector.dart', 'packages/my_ticket_care/src/booking/providers/booking_state.dart', 'packages/font_awesome_flutter/src/fa_icon.dart', 'packages/my_ticket_care/src/booking/presentation/widgets/verify_subscription_button.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/my_ticket_care/src/booking/repository/booking_repository.dart', 'packages/cool_alert/src/widgets/cool_alert_buttons.dart', 'packages/flutter/src/material/page.dart', 'packages/my_ticket_care/screens/unimplemented_screen.dart', 'packages/my_ticket_care/src/shared/models/offer.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart'], (function load__packages__my_ticket_care__src__booking__presentation__reserve_booking_verify_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__material__icon_button$46dart, packages__my_ticket_care__src__booking__presentation__widgets__verify_information_widgets$46dart, packages__flutter__src__material__icons$46dart, packages__provider__src__selector$46dart, packages__my_ticket_care__src__booking__providers__booking_state$46dart, packages__font_awesome_flutter__src__fa_icon$46dart, packages__my_ticket_care__src__booking__presentation__widgets__verify_subscription_button$46dart, packages__flutter__src__material__elevated_button$46dart, packages__my_ticket_care__src__booking__repository__booking_repository$46dart, packages__cool_alert__src__widgets__cool_alert_buttons$46dart, packages__flutter__src__material__page$46dart, packages__my_ticket_care__screens__unimplemented_screen$46dart, packages__my_ticket_care__src__shared__models__offer$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const verify_information_widgets = packages__my_ticket_care__src__booking__presentation__widgets__verify_information_widgets$46dart.src__booking__presentation__widgets__verify_information_widgets;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const consumer = packages__provider__src__selector$46dart.src__consumer;
  const booking_state = packages__my_ticket_care__src__booking__providers__booking_state$46dart.src__booking__providers__booking_state;
  const font_awesome_flutter = packages__font_awesome_flutter__src__fa_icon$46dart.font_awesome_flutter;
  const verify_subscription_button = packages__my_ticket_care__src__booking__presentation__widgets__verify_subscription_button$46dart.src__booking__presentation__widgets__verify_subscription_button;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const booking_repository = packages__my_ticket_care__src__booking__repository__booking_repository$46dart.src__booking__repository__booking_repository;
  const cool_alert = packages__cool_alert__src__widgets__cool_alert_buttons$46dart.cool_alert;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const unimplemented_screen = packages__my_ticket_care__screens__unimplemented_screen$46dart.screens__unimplemented_screen;
  const offer = packages__my_ticket_care__src__shared__models__offer$46dart.src__shared__models__offer;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  var reserve_booking_verify = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ConsumerOfBookingStateProvider: () => (T.ConsumerOfBookingStateProvider = dart.constFn(consumer.Consumer$(booking_state.BookingStateProvider)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndBookingStateProviderAndWidgetNToVerifyInformationCard: () => (T.BuildContextAndBookingStateProviderAndWidgetNToVerifyInformationCard = dart.constFn(dart.fnType(verify_information_widgets.VerifyInformationCard, [framework.BuildContext, booking_state.BookingStateProvider, T.WidgetN()])))(),
    BuildContextToUnimplementedScreen: () => (T.BuildContextToUnimplementedScreen = dart.constFn(dart.fnType(unimplemented_screen.UnimplementedScreen, [framework.BuildContext])))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    OfferToNull: () => (T.OfferToNull = dart.constFn(dart.fnType(core.Null, [offer.Offer])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    BuildContextAndBookingStateProviderAndWidgetNToElevatedButton: () => (T.BuildContextAndBookingStateProviderAndWidgetNToElevatedButton = dart.constFn(dart.fnType(elevated_button.ElevatedButton, [framework.BuildContext, booking_state.BookingStateProvider, T.WidgetN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ReserveBookingVerifyScreen",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[3] || CT.C3,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[6] || CT.C6,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C7() {
      return C[7] = dart.constList(["Nombre: ", "Genero: ", "Fecha de nacimiento: "], core.String);
    },
    get C8() {
      return C[8] = dart.constList(["Sergio Loza", "Masculino", "02/18/2002"], core.String);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "VerifyInformationCard",
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[11] || CT.C11,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C12() {
      return C[12] = dart.constList(["Nombre:", "Fecha:", "Horario:"], core.String);
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "VerifyInformationCard",
        [_Location_column]: 20,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 53,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[16] || CT.C16,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C17() {
      return C[17] = dart.constList(["Empresa: ", "Sucursal: ", "Lugar: ", "Dirección: "], core.String);
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "VerifyInformationCard",
        [_Location_column]: 20,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[21] || CT.C21,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C22() {
      return C[22] = dart.constList(["Nombre: ", "Email: ", "Teléfono: "], core.String);
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "VerifyInformationCard",
        [_Location_column]: 20,
        [_Location_line]: 78,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 11,
        [_Location_line]: 75,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[26] || CT.C26,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SubscriptionButton",
        [_Location_column]: 20,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: verify_subscription_button.SubscriptionButton.prototype,
        [Widget__location]: C[30] || CT.C30,
        [Widget_key]: null
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 40
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget__location]: C[28] || CT.C28,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[29] || CT.C29,
        [Padding_padding]: C[31] || CT.C31
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 99,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[33] || CT.C33,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "UnimplementedScreen",
        [_Location_column]: 59,
        [_Location_line]: 123,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: unimplemented_screen.UnimplementedScreen.prototype,
        [Widget__location]: C[35] || CT.C35,
        [Widget_key]: null
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 31,
        [_Location_line]: 128,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 60250
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[37] || CT.C37,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[38] || CT.C38
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 32,
        [_Location_line]: 129,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[40] || CT.C40,
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
        [Text_data]: "Reservar"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ElevatedButtonWithIcon",
        [_Location_column]: 37,
        [_Location_line]: 104,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Consumer",
        [_Location_column]: 20,
        [_Location_line]: 102,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 11,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 132,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[45] || CT.C45,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 50,
        [SizedBox_width]: null
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 14,
        [_Location_line]: 20,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_verify.dart"
      });
    }
  }, false);
  var C = Array(48).fill(void 0);
  var I = ["package:my_ticket_care/src/booking/presentation/reserve_booking_verify.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var Padding_padding = dart.privateName(basic, "Padding.padding");
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
  reserve_booking_verify.ReserveBookingVerifyScreen = class ReserveBookingVerifyScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new reserve_booking_verify.ReserveBookingVerifyScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new basic.Padding.new({padding: C[1] || CT.C1, child: new scroll_view.ListView.new({children: T.JSArrayOfWidget().of([C[2] || CT.C2, new text.Text.new("Verifique su información", {style: theme.Theme.of(context).textTheme.headline5, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), C[5] || CT.C5, new verify_information_widgets.VerifyInformationCard.new({iconData: icons.Icons.person, title: "Personal", tileTitles: C[7] || CT.C7, tileSubtitles: C[8] || CT.C8, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), C[10] || CT.C10, new (T.ConsumerOfBookingStateProvider()).new({builder: dart.fn((context, bookingInfo, child) => {
                let offer = bookingInfo.selectedOffer;
                return new verify_information_widgets.VerifyInformationCard.new({iconData: font_awesome_flutter.FontAwesomeIcons.toolbox, iconSize: 20.0, title: "Servicio", tileTitles: C[12] || CT.C12, tileSubtitles: T.JSArrayOfString().of([bookingInfo.selectedWorkday.dateString, bookingInfo.selectedService.serviceName, offer.startTime + " - " + offer.endTime]), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
              }, T.BuildContextAndBookingStateProviderAndWidgetNToVerifyInformationCard()), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), C[15] || CT.C15, new (T.ConsumerOfBookingStateProvider()).new({builder: dart.fn((context, bookingInfo, child) => {
                let office = bookingInfo.selectedOffice;
                return new verify_information_widgets.VerifyInformationCard.new({iconData: icons.Icons.house_sharp, title: "Empresa", tileTitles: C[17] || CT.C17, tileSubtitles: T.JSArrayOfString().of([office.companyName, office.officeName, office.city + ", " + office.country, office.address]), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
              }, T.BuildContextAndBookingStateProviderAndWidgetNToVerifyInformationCard()), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), C[20] || CT.C20, new (T.ConsumerOfBookingStateProvider()).new({builder: dart.fn((context, bookingInfo, child) => {
                let employee = bookingInfo.selectedEmployee;
                return new verify_information_widgets.VerifyInformationCard.new({iconData: font_awesome_flutter.FontAwesomeIcons.userTie, iconSize: 20.0, title: "Empleado", tileTitles: C[22] || CT.C22, tileSubtitles: T.JSArrayOfString().of([employee.personName, employee.email, employee.mobile]), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23});
              }, T.BuildContextAndBookingStateProviderAndWidgetNToVerifyInformationCard()), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), C[25] || CT.C25, C[27] || CT.C27, C[32] || CT.C32, new basic.Padding.new({padding: C[31] || CT.C31, child: new (T.ConsumerOfBookingStateProvider()).new({builder: dart.fn((context, bookingInfo, child) => new elevated_button._ElevatedButtonWithIcon.new({onPressed: dart.fn(() => async.async(dart.void, function*() {
                    let api = new booking_repository.BookingRepositoryHTTP.new();
                    let offer = bookingInfo.selectedOffer;
                    let clientId = bookingInfo.selectedClientId;
                    if (clientId === -1) return;
                    offer.clientId = clientId;
                    yield api.reserveOffer(offer).then(core.Null, dart.fn(value => {
                      cool_alert.CoolAlert.show({context: context, type: cool_alert.CoolAlertType.success, title: "Reserva exitosa", text: "La reserva se ha completado exitosamente"}).then(core.Null, dart.fn(value => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[34] || CT.C34, T.BuildContextToUnimplementedScreen())}));
                      }, T.dynamicToNull()));
                    }, T.OfferToNull()));
                  }), T.VoidToFutureOfvoid()), icon: C[36] || CT.C36, label: C[39] || CT.C39, $creationLocationd_0dea112b090073317d4: C[41] || CT.C41}), T.BuildContextAndBookingStateProviderAndWidgetNToElevatedButton()), $creationLocationd_0dea112b090073317d4: C[42] || CT.C42}), $creationLocationd_0dea112b090073317d4: C[43] || CT.C43}), C[44] || CT.C44]), $creationLocationd_0dea112b090073317d4: C[46] || CT.C46}), $creationLocationd_0dea112b090073317d4: C[47] || CT.C47});
    }
  };
  (reserve_booking_verify.ReserveBookingVerifyScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    reserve_booking_verify.ReserveBookingVerifyScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reserve_booking_verify.ReserveBookingVerifyScreen.prototype;
  dart.addTypeTests(reserve_booking_verify.ReserveBookingVerifyScreen);
  dart.addTypeCaches(reserve_booking_verify.ReserveBookingVerifyScreen);
  dart.setMethodSignature(reserve_booking_verify.ReserveBookingVerifyScreen, () => ({
    __proto__: dart.getMethods(reserve_booking_verify.ReserveBookingVerifyScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(reserve_booking_verify.ReserveBookingVerifyScreen, I[0]);
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/reserve_booking_verify.dart", {
    "package:my_ticket_care/src/booking/presentation/reserve_booking_verify.dart": reserve_booking_verify
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reserve_booking_verify.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAgB4B;AACxB,YAAO,uDAEE,wCACK,uCAER,kBAAK,oCACY,AAAY,AAAU,eAAnB,OAAO,+FAE3B,oEACkB,2BACT,+IAKT,uDACa,SAAC,SAAS,aAAa;AAC5B,4BAAQ,AAAY,WAAD;AAEzB,sBAAO,qEACsB,yDACjB,aACH,wDAMQ,wBACb,AAAY,AAAgB,WAAjB,6BACX,AAAY,AAAgB,WAAjB,8BACR,AAAM,AAA8B,KAA/B,aAAW,QAAK,AAAM,KAAD;wKAKnC,uDACa,SAAC,SAAS,aAAa;AAC3B,6BAAS,AAAY,WAAD;AAC3B,sBAAO,qEACW,gCACT,uDAOQ,wBACb,AAAO,MAAD,cACN,AAAO,MAAD,aACH,AAAO,AAAyB,MAA1B,QAAM,OAAI,AAAO,MAAD,UACzB,AAAO,MAAD;wKAKZ,uDACa,SAAC,SAAS,aAAa;AACzB,+BAAW,AAAY,WAAD;AAC/B,sBAAO,qEACsB,yDACjB,aACH,wDAMQ,wBACb,AAAS,QAAD,aACR,AAAS,QAAD,QACR,AAAS,QAAD;0MAUd,wDAES,uDACM,SAAC,SAAS,aAAa,UACZ,4DACP;AACH,8BAAM;AACN,gCAAQ,AAAY,WAAD;AAErB,mCAAW,AAAY,WAAD;AAC1B,wBAAI,AAAS,QAAD,KAAI,CAAC,GAAG;AAEK,oBAAzB,AAAM,KAAD,YAAY,QAAQ;AAcvB,oBAbF,MAAM,AAAI,AAAoB,GAArB,cAAc,KAAK,kBAAO,QAAC;AAYhC,sBAXQ,AAKR,oCAJS,OAAO,QACI,yCACb,yBACD,6DACD,QAAC;AAKA,wBAJI,uCACN,OAAO,EACP,yCACW,QAAC;;;kBAIrB;IAWjB;;;QA5HuC;;AAAQ,qFAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/reserve_booking_verify.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__reserve_booking_verify: reserve_booking_verify
  };
}));

//# sourceMappingURL=reserve_booking_verify.dart.lib.js.map
