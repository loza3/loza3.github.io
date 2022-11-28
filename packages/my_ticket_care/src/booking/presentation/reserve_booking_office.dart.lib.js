define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/src/booking/providers/booking_state.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/my_ticket_care/src/shared/shared_widgets/office_map_widget.dart', 'packages/flutter/src/widgets/spacer.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/my_ticket_care/src/shared/shared_utilities/launch_google_maps.dart', 'packages/my_ticket_care/src/shared/models/office.dart', 'packages/flutter/src/material/circle_avatar.dart', 'packages/flutter/src/painting/_network_image_web.dart'], (function load__packages__my_ticket_care__src__booking__presentation__reserve_booking_office_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__src__booking__providers__booking_state$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__my_ticket_care__src__shared__shared_widgets__office_map_widget$46dart, packages__flutter__src__widgets__spacer$46dart, packages__flutter__src__material__elevated_button$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__material__icon_button$46dart, packages__my_ticket_care__src__shared__shared_utilities__launch_google_maps$46dart, packages__my_ticket_care__src__shared__models__office$46dart, packages__flutter__src__material__circle_avatar$46dart, packages__flutter__src__painting___network_image_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const booking_state = packages__my_ticket_care__src__booking__providers__booking_state$46dart.src__booking__providers__booking_state;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const office_map_widget = packages__my_ticket_care__src__shared__shared_widgets__office_map_widget$46dart.src__shared__shared_widgets__office_map_widget;
  const spacer = packages__flutter__src__widgets__spacer$46dart.src__widgets__spacer;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const launch_google_maps = packages__my_ticket_care__src__shared__shared_utilities__launch_google_maps$46dart.src__shared__shared_utilities__launch_google_maps;
  const office = packages__my_ticket_care__src__shared__models__office$46dart.src__shared__models__office;
  const circle_avatar = packages__flutter__src__material__circle_avatar$46dart.src__material__circle_avatar;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  var reserve_booking_office = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    JSArrayOfTextSpan: () => (T.JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ReserveBookingOfficeScreen",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
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
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
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
        [_Location_name]: "OfficeInformationHeader",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
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
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeMapWidget",
        [_Location_column]: 36,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OpenGoogleMapsButton",
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 27,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[13] || CT.C13,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 15,
        [SizedBox_width]: null
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationTile",
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationTile",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[17] || CT.C17,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 30,
        [SizedBox_width]: null
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 17,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget__location]: C[19] || CT.C19,
        [Widget_key]: null,
        [Spacer_flex]: 1
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 57,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
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
        [Text_data]: "Siguiente"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[24] || CT.C24,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 50,
        [SizedBox_width]: null
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 16,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationTile",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OpenGoogleMapsButton",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 92,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[31] || CT.C31,
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
        [Text_data]: "Ver en Google Maps"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 12,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeInformationHeader",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 114,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleAvatar",
        [_Location_column]: 9,
        [_Location_line]: 124,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 107,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/booking/presentation/reserve_booking_office.dart"
      });
    }
  }, false);
  var C = Array(39).fill(void 0);
  var I = ["package:my_ticket_care/src/booking/presentation/reserve_booking_office.dart"];
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
  var Spacer_flex = dart.privateName(spacer, "Spacer.flex");
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
  reserve_booking_office.ReserveBookingOfficeScreen = class ReserveBookingOfficeScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new reserve_booking_office.ReserveBookingOfficeScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let office = provider.Provider.of(booking_state.BookingStateProvider, context).selectedOffice;
      return new basic.Padding.new({padding: C[1] || CT.C1, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([C[2] || CT.C2, new reserve_booking_office.OfficeInformationHeader.new({office: office, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), C[5] || CT.C5, new basic.Expanded.new({flex: 5, child: new office_map_widget.OfficeMapWidget.new({office: office, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), C[9] || CT.C9, new reserve_booking_office.OpenGoogleMapsButton.new({office: office, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), C[12] || CT.C12, new reserve_booking_office.OfficeInformationTile.new({title: "Lugar: ", subtitle: office.country + ", " + office.city, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), new reserve_booking_office.OfficeInformationTile.new({title: "Dirección: ", subtitle: office.address, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), C[16] || CT.C16, C[18] || CT.C18, new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
              }, T.VoidTovoid()), child: C[20] || CT.C20, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), C[23] || CT.C23]), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
  };
  (reserve_booking_office.ReserveBookingOfficeScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    reserve_booking_office.ReserveBookingOfficeScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reserve_booking_office.ReserveBookingOfficeScreen.prototype;
  dart.addTypeTests(reserve_booking_office.ReserveBookingOfficeScreen);
  dart.addTypeCaches(reserve_booking_office.ReserveBookingOfficeScreen);
  dart.setMethodSignature(reserve_booking_office.ReserveBookingOfficeScreen, () => ({
    __proto__: dart.getMethods(reserve_booking_office.ReserveBookingOfficeScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(reserve_booking_office.ReserveBookingOfficeScreen, I[0]);
  var title$ = dart.privateName(reserve_booking_office, "OfficeInformationTile.title");
  var subtitle$ = dart.privateName(reserve_booking_office, "OfficeInformationTile.subtitle");
  reserve_booking_office.OfficeInformationTile = class OfficeInformationTile extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      super.subtitle = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
      return new reserve_booking_office.OfficeInformationTile.new({key: key, title: title, subtitle: subtitle, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27});
    }
    build(context) {
      return new text.Text.rich(new text_span.TextSpan.new({children: T.JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: this.title, style: dart.nullCheck(theme.Theme.of(context).textTheme.bodyLarge).copyWith({fontWeight: ui.FontWeight.bold})}), new text_span.TextSpan.new({text: this.subtitle, style: theme.Theme.of(context).textTheme.bodyLarge})])}), {$creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
    }
  };
  (reserve_booking_office.OfficeInformationTile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[subtitle$] = subtitle;
    reserve_booking_office.OfficeInformationTile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reserve_booking_office.OfficeInformationTile.prototype;
  dart.addTypeTests(reserve_booking_office.OfficeInformationTile);
  dart.addTypeCaches(reserve_booking_office.OfficeInformationTile);
  dart.setMethodSignature(reserve_booking_office.OfficeInformationTile, () => ({
    __proto__: dart.getMethods(reserve_booking_office.OfficeInformationTile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(reserve_booking_office.OfficeInformationTile, I[0]);
  dart.setFieldSignature(reserve_booking_office.OfficeInformationTile, () => ({
    __proto__: dart.getFields(reserve_booking_office.OfficeInformationTile.__proto__),
    title: dart.finalFieldType(core.String),
    subtitle: dart.finalFieldType(core.String)
  }));
  var office$ = dart.privateName(reserve_booking_office, "OpenGoogleMapsButton.office");
  reserve_booking_office.OpenGoogleMapsButton = class OpenGoogleMapsButton extends framework.StatelessWidget {
    get office() {
      return this[office$];
    }
    set office(value) {
      super.office = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let office = opts && 'office' in opts ? opts.office : null;
      return new reserve_booking_office.OpenGoogleMapsButton.new({key: key, office: office, $creationLocationd_0dea112b090073317d4: C[29] || CT.C29});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colorScheme.secondary}), onPressed: dart.fn(() => async.async(dart.void, (function*() {
          yield launch_google_maps.launchGoogleMaps(this.office);
        }).bind(this)), T.VoidToFutureOfvoid()), child: C[30] || CT.C30, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
    }
  };
  (reserve_booking_office.OpenGoogleMapsButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let office = opts && 'office' in opts ? opts.office : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[office$] = office;
    reserve_booking_office.OpenGoogleMapsButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reserve_booking_office.OpenGoogleMapsButton.prototype;
  dart.addTypeTests(reserve_booking_office.OpenGoogleMapsButton);
  dart.addTypeCaches(reserve_booking_office.OpenGoogleMapsButton);
  dart.setMethodSignature(reserve_booking_office.OpenGoogleMapsButton, () => ({
    __proto__: dart.getMethods(reserve_booking_office.OpenGoogleMapsButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(reserve_booking_office.OpenGoogleMapsButton, I[0]);
  dart.setFieldSignature(reserve_booking_office.OpenGoogleMapsButton, () => ({
    __proto__: dart.getFields(reserve_booking_office.OpenGoogleMapsButton.__proto__),
    office: dart.finalFieldType(office.Office)
  }));
  var office$0 = dart.privateName(reserve_booking_office, "OfficeInformationHeader.office");
  reserve_booking_office.OfficeInformationHeader = class OfficeInformationHeader extends framework.StatelessWidget {
    get office() {
      return this[office$0];
    }
    set office(value) {
      super.office = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let office = opts && 'office' in opts ? opts.office : null;
      return new reserve_booking_office.OfficeInformationHeader.new({key: key, office: office, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
    build(context) {
      return new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.JSArrayOfWidget().of([new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(this.office.companyName, {style: theme.Theme.of(context).textTheme.headline5, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34}), new text.Text.new(this.office.officeName, {style: theme.Theme.of(context).textTheme.bodyLarge, $creationLocationd_0dea112b090073317d4: C[35] || CT.C35})]), $creationLocationd_0dea112b090073317d4: C[36] || CT.C36}), new circle_avatar.CircleAvatar.new({radius: 25.0, backgroundImage: new _network_image_web.NetworkImage.new(this.office.companyLogo), $creationLocationd_0dea112b090073317d4: C[37] || CT.C37})]), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38});
    }
  };
  (reserve_booking_office.OfficeInformationHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let office = opts && 'office' in opts ? opts.office : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[office$0] = office;
    reserve_booking_office.OfficeInformationHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reserve_booking_office.OfficeInformationHeader.prototype;
  dart.addTypeTests(reserve_booking_office.OfficeInformationHeader);
  dart.addTypeCaches(reserve_booking_office.OfficeInformationHeader);
  dart.setMethodSignature(reserve_booking_office.OfficeInformationHeader, () => ({
    __proto__: dart.getMethods(reserve_booking_office.OfficeInformationHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(reserve_booking_office.OfficeInformationHeader, I[0]);
  dart.setFieldSignature(reserve_booking_office.OfficeInformationHeader, () => ({
    __proto__: dart.getFields(reserve_booking_office.OfficeInformationHeader.__proto__),
    office: dart.finalFieldType(office.Office)
  }));
  dart.trackLibraries("packages/my_ticket_care/src/booking/presentation/reserve_booking_office.dart", {
    "package:my_ticket_care/src/booking/presentation/reserve_booking_office.dart": reserve_booking_office
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reserve_booking_office.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAY4B;AAClB,mBAAkB,AAAkC,yDAAT,OAAO;AAExD,YAAO,uDAEE,0CACkC,0CAC7B,uCAER,gEAAgC,MAAM,0EAEtC,8BAAe,UAAU,mDAAwB,MAAM,mIAEvD,6DAA6B,MAAM,8EAEnC,6DACS,qBACM,AAAO,AAAyB,MAA1B,WAAS,OAAI,AAAO,MAAD,kEAExC,6DACS,yBACG,AAAO,MAAD,uGAIlB,mDAA0B;;IAKlC;;;QAjCuC;;AAAQ,qFAAW,GAAG;;EAAC;;;;;;;;;;;IA0CjD;;;;;;IACA;;;;;;;;;;;;UAGa;AACxB,YAAY,oBACV,sCACsB,0BAClB,kCACQ,mBACsC,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,6CACM,wBAG/B,kCACQ,sBACO,AAAY,AAAU,eAAnB,OAAO;IAKjC;;;QAzBO;QACS;QACA;;IADA;IACA;AACX,gFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;IA+BP;;;;;;;;;;;UAGa;AACN,wBAAoB,AAAY,eAAT,OAAO;AAChD,YAAO,gDACiB,2DAA2B,AAAY,WAAD,yBACjD;AACqB,UAA9B,MAAM,oCAAiB;QACxB;IAGL;;;QAhBO;QACS;;;AACX,+EAAW,GAAG;;EAAC;;;;;;;;;;;;;;IAuBP;;;;;;;;;;;UAGa;AACxB,YAAO,wCACkC,mDACF,+CAC3B,wBACR,0CACyC,yCAC7B,wBACR,kBACE,AAAO,iCACM,AAAY,AAAU,eAAnB,OAAO,kFAEzB,kBACE,AAAO,gCACM,AAAY,AAAU,eAAnB,OAAO,+IAI7B,4CACU,uBACS,wCACf,AAAO;IAKjB;;;QAjCO;QACS;;;AACX,kFAAW,GAAG;;EAAC","file":"../../../../../../../../../../../packages/my_ticket_care/src/booking/presentation/reserve_booking_office.dart.lib.js"}');
  // Exports:
  return {
    src__booking__presentation__reserve_booking_office: reserve_booking_office
  };
}));

//# sourceMappingURL=reserve_booking_office.dart.lib.js.map
