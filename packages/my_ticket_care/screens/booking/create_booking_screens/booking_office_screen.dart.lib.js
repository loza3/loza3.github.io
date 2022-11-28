define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/providers/make_booking_provider.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/material/circle_avatar.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/my_ticket_care/providers/navigation_booking_provider.dart', 'packages/flutter/src/widgets/spacer.dart', 'packages/flutter_map/src/layer/tile_layer/tile_provider/tile_provider_web.dart', 'packages/positioned_tap_detector_2/positioned_tap_detector_2.dart', 'packages/latlong2/latlong.dart', 'packages/flutter_map/src/layer/attribution_layer.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/material/icons.dart', 'packages/my_ticket_care/models/office.dart', 'packages/url_launcher/src/url_launcher_uri.dart', 'packages/flutter/src/material/dialog.dart'], (function load__packages__my_ticket_care__screens__booking__create_booking_screens__booking_office_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__providers__make_booking_provider$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__material__circle_avatar$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__material__elevated_button$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__my_ticket_care__providers__navigation_booking_provider$46dart, packages__flutter__src__widgets__spacer$46dart, packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web$46dart, packages__positioned_tap_detector_2__positioned_tap_detector_2$46dart, packages__latlong2__latlong$46dart, packages__flutter_map__src__layer__attribution_layer$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__material__icons$46dart, packages__my_ticket_care__models__office$46dart, packages__url_launcher__src__url_launcher_uri$46dart, packages__flutter__src__material__dialog$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const make_booking_provider = packages__my_ticket_care__providers__make_booking_provider$46dart.providers__make_booking_provider;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const circle_avatar = packages__flutter__src__material__circle_avatar$46dart.src__material__circle_avatar;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const navigation_booking_provider = packages__my_ticket_care__providers__navigation_booking_provider$46dart.providers__navigation_booking_provider;
  const spacer = packages__flutter__src__widgets__spacer$46dart.src__widgets__spacer;
  const flutter_map = packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web$46dart.flutter_map;
  const tile_layer = packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web$46dart.src__layer__tile_layer__tile_layer;
  const marker_layer = packages__flutter_map__src__layer__tile_layer__tile_provider__tile_provider_web$46dart.src__layer__marker_layer;
  const positioned_tap_detector_2 = packages__positioned_tap_detector_2__positioned_tap_detector_2$46dart.positioned_tap_detector_2;
  const latlong = packages__latlong2__latlong$46dart.latlong;
  const attribution_layer = packages__flutter_map__src__layer__attribution_layer$46dart.src__layer__attribution_layer;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
  const office = packages__my_ticket_care__models__office$46dart.models__office;
  const url_launcher_uri = packages__url_launcher__src__url_launcher_uri$46dart.src__url_launcher_uri;
  const dialog = packages__flutter__src__material__dialog$46dart.src__material__dialog;
  var booking_office_screen = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    JSArrayOfTextSpan: () => (T.JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    TapPositionAndLatLngToFutureOfvoid: () => (T.TapPositionAndLatLngToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [positioned_tap_detector_2.TapPosition, latlong.LatLng])))(),
    BuildContextToIcon: () => (T.BuildContextToIcon = dart.constFn(dart.fnType(icon.Icon, [framework.BuildContext])))(),
    JSArrayOfMarker: () => (T.JSArrayOfMarker = dart.constFn(_interceptors.JSArray$(marker_layer.Marker)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    BuildContextToAlertDialog: () => (T.BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingOfficeScreen",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
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
        [_Location_line]: 36,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[3] || CT.C3,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 14,
        [SizedBox_width]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 19,
        [_Location_line]: 44,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 19,
        [_Location_line]: 48,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircleAvatar",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[10] || CT.C10,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 25
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeMap",
        [_Location_column]: 22,
        [_Location_line]: 71,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 20,
        [_Location_line]: 66,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Expanded",
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[15] || CT.C15,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 83,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
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
        [Text_data]: "Ver en Google Maps"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget__location]: C[20] || CT.C20,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 25
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[23] || CT.C23,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 16,
        [_Location_line]: 103,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 119,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[26] || CT.C26,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 30,
        [SizedBox_width]: null
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 125,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[28] || CT.C28,
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
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 11,
        [_Location_line]: 122,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Spacer",
        [_Location_column]: 17,
        [_Location_line]: 126,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget__location]: C[31] || CT.C31,
        [Widget_key]: null,
        [Spacer_flex]: 2
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 33,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 31,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OfficeMap",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OverflowBox",
        [_Location_column]: 11,
        [_Location_line]: 186,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TileLayer",
        [_Location_column]: 11,
        [_Location_line]: 194,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 39,
        [_Location_line]: 201,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MarkerLayer",
        [_Location_column]: 11,
        [_Location_line]: 197,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FlutterMap",
        [_Location_column]: 14,
        [_Location_line]: 175,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRRect",
        [_Location_column]: 12,
        [_Location_line]: 173,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 147,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[42] || CT.C42,
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
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 24,
        [_Location_line]: 148,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[44] || CT.C44,
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
        [Text_data]: "No se pudo abrir google maps"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 26,
        [_Location_line]: 151,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[46] || CT.C46,
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
        [Text_data]: "Ok"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TextButton",
        [_Location_column]: 11,
        [_Location_line]: 150,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AlertDialog",
        [_Location_column]: 29,
        [_Location_line]: 146,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_office_screen.dart"
      });
    }
  }, false);
  var C = Array(49).fill(void 0);
  var I = ["package:my_ticket_care/screens/booking/create_booking_screens/booking_office_screen.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  booking_office_screen.BookingOfficeScreen = class BookingOfficeScreen extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new booking_office_screen.BookingOfficeScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new booking_office_screen._BookingOfficeScreenState.new();
    }
  };
  (booking_office_screen.BookingOfficeScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    booking_office_screen.BookingOfficeScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_office_screen.BookingOfficeScreen.prototype;
  dart.addTypeTests(booking_office_screen.BookingOfficeScreen);
  dart.addTypeCaches(booking_office_screen.BookingOfficeScreen);
  dart.setMethodSignature(booking_office_screen.BookingOfficeScreen, () => ({
    __proto__: dart.getMethods(booking_office_screen.BookingOfficeScreen.__proto__),
    createState: dart.fnType(framework.State$(booking_office_screen.BookingOfficeScreen), [])
  }));
  dart.setLibraryUri(booking_office_screen.BookingOfficeScreen, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
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
  var Spacer_flex = dart.privateName(spacer, "Spacer.flex");
  booking_office_screen._BookingOfficeScreenState = class _BookingOfficeScreenState extends framework.State$(booking_office_screen.BookingOfficeScreen) {
    initState() {
      super.initState();
    }
    build(context) {
      let t0;
      let colorScheme = theme.Theme.of(context).colorScheme;
      let selectedOffice = provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context).selectedOffice;
      return new basic.Padding.new({padding: C[1] || CT.C1, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([C[2] || CT.C2, new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.JSArrayOfWidget().of([new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(dart.str(selectedOffice.companyName), {style: theme.Theme.of(context).textTheme.headline5, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4}), new text.Text.new(selectedOffice.officeName, {style: theme.Theme.of(context).textTheme.bodyLarge, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5})]), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), new circle_avatar.CircleAvatar.new({radius: 25.0, backgroundImage: new _network_image_web.NetworkImage.new((t0 = selectedOffice.companyLogo, t0 == null ? "https://cdn-icons-png.flaticon.com/512/172/172802.png" : t0)), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7})]), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), C[9] || CT.C9, new basic.Expanded.new({flex: 5, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(15.0), border: box_border.Border.all({color: colorScheme.outline, width: 2.0})}), child: new booking_office_screen.OfficeMap.new({office: selectedOffice, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), C[14] || CT.C14, new elevated_button.ElevatedButton.new({style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colorScheme.secondary}), onPressed: dart.fn(() => async.async(dart.void, function*() {
                yield booking_office_screen.launchGoogleMaps(context, selectedOffice);
              }), T.VoidToFutureOfvoid()), child: C[16] || CT.C16, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), C[19] || CT.C19, new text.Text.rich(new text_span.TextSpan.new({children: T.JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "Lugar: ", style: dart.nullCheck(theme.Theme.of(context).textTheme.bodyLarge).copyWith({fontWeight: ui.FontWeight.bold})}), new text_span.TextSpan.new({text: selectedOffice.country + ", " + selectedOffice.city, style: theme.Theme.of(context).textTheme.bodyLarge})])}), {$creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), C[22] || CT.C22, new text.Text.rich(new text_span.TextSpan.new({children: T.JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "Dirección: ", style: dart.nullCheck(theme.Theme.of(context).textTheme.bodyLarge).copyWith({fontWeight: ui.FontWeight.bold})}), new text_span.TextSpan.new({text: selectedOffice.address, style: theme.Theme.of(context).textTheme.bodyLarge})])}), {$creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), C[25] || CT.C25, new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                let t1, t0;
                t0 = provider['ReadContext|read'](navigation_booking_provider.NavigationBookingProvider, context);
                t1 = t0.currentIndex;
                t0.currentIndex = t1 + 1;
                return t1;
              }, T.VoidTovoid()), child: C[27] || CT.C27, $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), C[30] || CT.C30]), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32}), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
    static ['_#new#tearOff']() {
      return new booking_office_screen._BookingOfficeScreenState.new();
    }
  };
  (booking_office_screen._BookingOfficeScreenState.new = function() {
    booking_office_screen._BookingOfficeScreenState.__proto__.new.call(this);
    ;
  }).prototype = booking_office_screen._BookingOfficeScreenState.prototype;
  dart.addTypeTests(booking_office_screen._BookingOfficeScreenState);
  dart.addTypeCaches(booking_office_screen._BookingOfficeScreenState);
  dart.setMethodSignature(booking_office_screen._BookingOfficeScreenState, () => ({
    __proto__: dart.getMethods(booking_office_screen._BookingOfficeScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_office_screen._BookingOfficeScreenState, I[0]);
  var office$ = dart.privateName(booking_office_screen, "OfficeMap.office");
  booking_office_screen.OfficeMap = class OfficeMap extends framework.StatelessWidget {
    get office() {
      return this[office$];
    }
    set office(value) {
      super.office = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let office = opts && 'office' in opts ? opts.office : null;
      return new booking_office_screen.OfficeMap.new({key: key, office: office, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
    }
    build(context) {
      let colorScheme = theme.Theme.of(context).colorScheme;
      return new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(15.0), child: new flutter_map.FlutterMap.new({options: new flutter_map.MapOptions.new({onTap: dart.fn((tap, _) => async.async(dart.void, (function*() {
              yield booking_office_screen.launchGoogleMaps(context, this.office);
            }).bind(this)), T.TapPositionAndLatLngToFutureOfvoid()), center: new latlong.LatLng.new(this.office.geoRefLatitude, this.office.geoRefLongitude)}), nonRotatedChildren: T.JSArrayOfWidget().of([new basic.OverflowBox.new({maxWidth: 400.0, child: attribution_layer.AttributionWidget.defaultWidget({source: "OpenStreetMap contributors"}), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35})]), children: T.JSArrayOfWidget().of([new tile_layer.TileLayer.new({urlTemplate: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", $creationLocationd_0dea112b090073317d4: C[36] || CT.C36}), new marker_layer.MarkerLayer.new({markers: T.JSArrayOfMarker().of([new marker_layer.Marker.new({point: new latlong.LatLng.new(this.office.geoRefLatitude, this.office.geoRefLongitude), builder: dart.fn(context => new icon.Icon.new(icons.Icons.place, {color: colorScheme.error, size: 40.0, $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), T.BuildContextToIcon())})]), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38})]), $creationLocationd_0dea112b090073317d4: C[39] || CT.C39}), $creationLocationd_0dea112b090073317d4: C[40] || CT.C40});
    }
  };
  (booking_office_screen.OfficeMap.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let office = opts && 'office' in opts ? opts.office : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[office$] = office;
    booking_office_screen.OfficeMap.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_office_screen.OfficeMap.prototype;
  dart.addTypeTests(booking_office_screen.OfficeMap);
  dart.addTypeCaches(booking_office_screen.OfficeMap);
  dart.setMethodSignature(booking_office_screen.OfficeMap, () => ({
    __proto__: dart.getMethods(booking_office_screen.OfficeMap.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_office_screen.OfficeMap, I[0]);
  dart.setFieldSignature(booking_office_screen.OfficeMap, () => ({
    __proto__: dart.getFields(booking_office_screen.OfficeMap.__proto__),
    office: dart.finalFieldType(office.Office)
  }));
  booking_office_screen.launchGoogleMaps = function launchGoogleMaps(context, office) {
    return async.async(dart.void, function* launchGoogleMaps() {
      let latitude = office.geoRefLatitude;
      let longitude = office.geoRefLongitude;
      let googleUrl = "https://www.google.com/maps/search/?api=1&query=" + dart.str(latitude) + "," + dart.str(longitude);
      if (yield url_launcher_uri.canLaunchUrl(core.Uri.parse(googleUrl))) {
        yield url_launcher_uri.launchUrl(core.Uri.parse(googleUrl));
      } else {
        dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: C[41] || CT.C41, content: C[43] || CT.C43, actions: T.JSArrayOfWidget().of([new text_button.TextButton.new({child: C[45] || CT.C45, onPressed: dart.fn(() => {
                  navigator.Navigator.pop(T.ObjectN(), context);
                }, T.VoidTovoid()), $creationLocationd_0dea112b090073317d4: C[47] || CT.C47})]), $creationLocationd_0dea112b090073317d4: C[48] || CT.C48}), T.BuildContextToAlertDialog())});
      }
    });
  };
  dart.trackLibraries("packages/my_ticket_care/screens/booking/create_booking_screens/booking_office_screen.dart", {
    "package:my_ticket_care/screens/booking/create_booking_screens/booking_office_screen.dart": booking_office_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["booking_office_screen.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/my_ticket_care/screens/booking/create_booking_screens/booking_office_screen.dart.lib.js"}');
  // Exports:
  return {
    screens__booking__create_booking_screens__booking_office_screen: booking_office_screen
  };
}));

//# sourceMappingURL=booking_office_screen.dart.lib.js.map
