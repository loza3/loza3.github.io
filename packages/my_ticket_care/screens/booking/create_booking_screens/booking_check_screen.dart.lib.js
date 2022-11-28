define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/cool_alert/src/widgets/cool_alert_buttons.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/providers/make_booking_provider.dart', 'packages/my_ticket_care/providers/navigation_booking_provider.dart', 'packages/flutter/src/material/page.dart', 'packages/my_ticket_care/screens/booking/booking_info.dart'], (function load__packages__my_ticket_care__screens__booking__create_booking_screens__booking_check_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__material__elevated_button$46dart, packages__cool_alert__src__widgets__cool_alert_buttons$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__providers__make_booking_provider$46dart, packages__my_ticket_care__providers__navigation_booking_provider$46dart, packages__flutter__src__material__page$46dart, packages__my_ticket_care__screens__booking__booking_info$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const divider = packages__flutter__src__material__icon_button$46dart.src__material__divider;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const colors$ = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const cool_alert = packages__cool_alert__src__widgets__cool_alert_buttons$46dart.cool_alert;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const make_booking_provider = packages__my_ticket_care__providers__make_booking_provider$46dart.providers__make_booking_provider;
  const navigation_booking_provider = packages__my_ticket_care__providers__navigation_booking_provider$46dart.providers__navigation_booking_provider;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const booking_info = packages__my_ticket_care__screens__booking__booking_info$46dart.screens__booking__booking_info;
  var booking_check_screen = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextToBookingInfo: () => (T.BuildContextToBookingInfo = dart.constFn(dart.fnType(booking_info.BookingInfo, [framework.BuildContext])))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingCheckScreen",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
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
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 17,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C6() {
      return C[6] = dart.const({
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
        [TextStyle_fontWeight]: C[7] || CT.C7,
        [TextStyle_fontSize]: 26,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[5] || CT.C5,
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
        [Text_style]: C[6] || CT.C6,
        [Text_textSpan]: null,
        [Text_data]: "Verifique su informacion"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[9] || CT.C9,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 17,
        [_Location_line]: 46,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C15() {
      return C[15] = dart.const({
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
        [TextStyle_fontWeight]: C[16] || CT.C16,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[14] || CT.C14,
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
        [Text_style]: C[15] || CT.C15,
        [Text_textSpan]: null,
        [Text_data]: "Nombre: Sergio Loza"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[18] || CT.C18,
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
        [Text_style]: C[15] || CT.C15,
        [Text_textSpan]: null,
        [Text_data]: "Fecha nacimiento: 18/01/2002"
      });
    },
    get C12() {
      return C[12] = dart.constList([C[13] || CT.C13, C[17] || CT.C17], framework.Widget);
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 20,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_OfficeInfo",
        [_Location_column]: 11,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[27] || CT.C27,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_OffertInfo",
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[30] || CT.C30,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Divider",
        [_Location_column]: 11,
        [_Location_line]: 75,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294962158.0
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294954450.0
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293892762.0
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293227379.0
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293874512.0
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294198070.0
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293212469.0
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292030255.0
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291176488.0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290190364.0
      });
    },
    get C34() {
      return C[34] = dart.constMap(core.int, ui.Color, [50, C[35] || CT.C35, 100, C[36] || CT.C36, 200, C[37] || CT.C37, 300, C[38] || CT.C38, 400, C[39] || CT.C39, 500, C[40] || CT.C40, 600, C[41] || CT.C41, 700, C[42] || CT.C42, 800, C[43] || CT.C43, 900, C[44] || CT.C44]);
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4294198070.0,
        [ColorSwatch__swatch]: C[34] || CT.C34
      });
    },
    get C32() {
      return C[32] = dart.const({
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
        [TextStyle_fontWeight]: C[16] || CT.C16,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[33] || CT.C33,
        [TextStyle_inherit]: true
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 20,
        [_Location_line]: 78,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[48] || CT.C48,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 22,
        [_Location_line]: 96,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 20,
        [_Location_line]: 89,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_Buttons",
        [_Location_column]: 11,
        [_Location_line]: 101,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 18,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CheckSubtitle",
        [_Location_column]: 9,
        [_Location_line]: 109,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 12,
        [_Location_line]: 114,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 134,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 127,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 125,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_OfficeInfo",
        [_Location_column]: 7,
        [_Location_line]: 121,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 157,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 161,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 165,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 154,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 152,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_OffertInfo",
        [_Location_column]: 7,
        [_Location_line]: 144,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 5
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 190,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C72() {
      return C[72] = dart.const({
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
        [TextStyle_fontWeight]: C[16] || CT.C16,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[71] || CT.C71,
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
        [Text_style]: C[72] || CT.C72,
        [Text_textSpan]: null,
        [Text_data]: "Atras"
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingInfo",
        [_Location_column]: 53,
        [_Location_line]: 210,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: booking_info.BookingInfo.prototype,
        [Widget__location]: C[75] || CT.C75,
        [Widget_key]: null,
        [BookingInfo_serviceData]: null
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 224,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
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
        [Text_data]: "Reservar"
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 11,
        [_Location_line]: 194,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 14,
        [_Location_line]: 180,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 178,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_Buttons",
        [_Location_column]: 7,
        [_Location_line]: 175,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/create_booking_screens/booking_check_screen.dart"
      });
    }
  }, false);
  var C = Array(82).fill(void 0);
  var I = ["package:my_ticket_care/screens/booking/create_booking_screens/booking_check_screen.dart"];
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
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var Color_value = dart.privateName(ui, "Color.value");
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  booking_check_screen.BookingCheckScreen = class BookingCheckScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new booking_check_screen.BookingCheckScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new container.Container.new({padding: C[1] || CT.C1, width: 1 / 0, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([C[2] || CT.C2, C[4] || CT.C4, C[8] || CT.C8, new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), new text.Text.new("Personal", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: C[12] || CT.C12, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), new text.Text.new("Ubicación", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), new booking_check_screen._OfficeInfo.new({$creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), new text.Text.new("Oferta", {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), C[26] || CT.C26, new booking_check_screen._OffertInfo.new({$creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), C[29] || CT.C29, new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), new basic.Align.new({alignment: alignment.Alignment.center, child: new text.Text.new("Actualmente no esta suscrito", {style: C[32] || CT.C32, $creationLocationd_0dea112b090073317d4: C[45] || CT.C45}), $creationLocationd_0dea112b090073317d4: C[46] || CT.C46}), C[47] || CT.C47, new basic.Align.new({alignment: alignment.Alignment.center, child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                  cool_alert.CoolAlert.show({context: context, type: cool_alert.CoolAlertType.success, title: "Suscripción exitosa"});
                }, T.VoidTovoid()), child: new text.Text.new("Suscribirse", {$creationLocationd_0dea112b090073317d4: C[49] || CT.C49}), $creationLocationd_0dea112b090073317d4: C[50] || CT.C50}), $creationLocationd_0dea112b090073317d4: C[51] || CT.C51}), new booking_check_screen._Buttons.new({$creationLocationd_0dea112b090073317d4: C[52] || CT.C52})]), $creationLocationd_0dea112b090073317d4: C[53] || CT.C53}), $creationLocationd_0dea112b090073317d4: C[54] || CT.C54});
    }
  };
  (booking_check_screen.BookingCheckScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    booking_check_screen.BookingCheckScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_check_screen.BookingCheckScreen.prototype;
  dart.addTypeTests(booking_check_screen.BookingCheckScreen);
  dart.addTypeCaches(booking_check_screen.BookingCheckScreen);
  dart.setMethodSignature(booking_check_screen.BookingCheckScreen, () => ({
    __proto__: dart.getMethods(booking_check_screen.BookingCheckScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_check_screen.BookingCheckScreen, I[0]);
  var label$ = dart.privateName(booking_check_screen, "CheckSubtitle.label");
  booking_check_screen.CheckSubtitle = class CheckSubtitle extends framework.StatelessWidget {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let label = opts && 'label' in opts ? opts.label : null;
      return new booking_check_screen.CheckSubtitle.new({key: key, label: label, $creationLocationd_0dea112b090073317d4: C[55] || CT.C55});
    }
    build(context) {
      return new text.Text.new(this.label, {style: theme.Theme.of(context).textTheme.headline6, $creationLocationd_0dea112b090073317d4: C[56] || CT.C56});
    }
  };
  (booking_check_screen.CheckSubtitle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[label$] = label;
    booking_check_screen.CheckSubtitle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_check_screen.CheckSubtitle.prototype;
  dart.addTypeTests(booking_check_screen.CheckSubtitle);
  dart.addTypeCaches(booking_check_screen.CheckSubtitle);
  dart.setMethodSignature(booking_check_screen.CheckSubtitle, () => ({
    __proto__: dart.getMethods(booking_check_screen.CheckSubtitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_check_screen.CheckSubtitle, I[0]);
  dart.setFieldSignature(booking_check_screen.CheckSubtitle, () => ({
    __proto__: dart.getFields(booking_check_screen.CheckSubtitle.__proto__),
    label: dart.finalFieldType(core.String)
  }));
  booking_check_screen._OfficeInfo = class _OfficeInfo extends framework.StatelessWidget {
    build(context) {
      let bookingInfo = provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context);
      return new container.Container.new({padding: C[1] || CT.C1, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new("Sucursal: " + bookingInfo.selectedOffice.officeName, {style: C[15] || CT.C15, $creationLocationd_0dea112b090073317d4: C[57] || CT.C57}), new text.Text.new("Direccion: " + bookingInfo.selectedOffice.address, {style: C[15] || CT.C15, $creationLocationd_0dea112b090073317d4: C[58] || CT.C58})]), $creationLocationd_0dea112b090073317d4: C[59] || CT.C59}), $creationLocationd_0dea112b090073317d4: C[60] || CT.C60});
    }
    static ['_#new#tearOff']() {
      return new booking_check_screen._OfficeInfo.new({$creationLocationd_0dea112b090073317d4: C[61] || CT.C61});
    }
  };
  (booking_check_screen._OfficeInfo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    booking_check_screen._OfficeInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_check_screen._OfficeInfo.prototype;
  dart.addTypeTests(booking_check_screen._OfficeInfo);
  dart.addTypeCaches(booking_check_screen._OfficeInfo);
  dart.setMethodSignature(booking_check_screen._OfficeInfo, () => ({
    __proto__: dart.getMethods(booking_check_screen._OfficeInfo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_check_screen._OfficeInfo, I[0]);
  booking_check_screen._OffertInfo = class _OffertInfo extends framework.StatelessWidget {
    build(context) {
      let bookingInfo = provider['WatchContext|watch'](make_booking_provider.MakeBookingProvider, context);
      let startTime = bookingInfo.selectedOffer.startTime;
      let endTime = bookingInfo.selectedOffer.endTime;
      return new container.Container.new({padding: C[62] || CT.C62, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new("Servicio: " + bookingInfo.selectedService.serviceName, {style: C[15] || CT.C15, $creationLocationd_0dea112b090073317d4: C[63] || CT.C63}), new text.Text.new("Especialista: " + bookingInfo.selectedEmployee.personName, {style: C[15] || CT.C15, $creationLocationd_0dea112b090073317d4: C[64] || CT.C64}), new text.Text.new("Tiempo: " + startTime + " - " + endTime, {style: new text_style.TextStyle.new({fontSize: 20.0, fontWeight: ui.FontWeight.w400}), $creationLocationd_0dea112b090073317d4: C[65] || CT.C65})]), $creationLocationd_0dea112b090073317d4: C[66] || CT.C66}), $creationLocationd_0dea112b090073317d4: C[67] || CT.C67});
    }
    static ['_#new#tearOff']() {
      return new booking_check_screen._OffertInfo.new({$creationLocationd_0dea112b090073317d4: C[68] || CT.C68});
    }
  };
  (booking_check_screen._OffertInfo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    booking_check_screen._OffertInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_check_screen._OffertInfo.prototype;
  dart.addTypeTests(booking_check_screen._OffertInfo);
  dart.addTypeCaches(booking_check_screen._OffertInfo);
  dart.setMethodSignature(booking_check_screen._OffertInfo, () => ({
    __proto__: dart.getMethods(booking_check_screen._OffertInfo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_check_screen._OffertInfo, I[0]);
  var BookingInfo_serviceData = dart.privateName(booking_info, "BookingInfo.serviceData");
  booking_check_screen._Buttons = class _Buttons extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({padding: C[69] || CT.C69, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                let t0;
                t0 = provider['ReadContext|read'](navigation_booking_provider.NavigationBookingProvider, context);
                t0.currentIndex = t0.currentIndex - 1;
              }, T.VoidTovoid()), style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colors.Colors.grey}), child: C[70] || CT.C70, $creationLocationd_0dea112b090073317d4: C[73] || CT.C73}), new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                let employee = provider.Provider.of(make_booking_provider.MakeBookingProvider, context, {listen: false}).selectedEmployee.personName;
                if (employee !== "No elegido") {
                  cool_alert.CoolAlert.show({context: context, title: "Oferta reservada", text: "La oferta ha sido creada exitosamente.", type: cool_alert.CoolAlertType.success}).then(core.Null, dart.fn(value => {
                    navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[74] || CT.C74, T.BuildContextToBookingInfo())}));
                  }, T.dynamicToNull()));
                } else {
                  cool_alert.CoolAlert.show({context: context, type: cool_alert.CoolAlertType.error, title: "Debe elegir una oferta", text: "Para continuar con la reserva debe elegir una oferta"});
                }
              }, T.VoidTovoid()), style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colors.Colors.green}), child: C[76] || CT.C76, $creationLocationd_0dea112b090073317d4: C[78] || CT.C78})]), $creationLocationd_0dea112b090073317d4: C[79] || CT.C79}), $creationLocationd_0dea112b090073317d4: C[80] || CT.C80});
    }
    static ['_#new#tearOff']() {
      return new booking_check_screen._Buttons.new({$creationLocationd_0dea112b090073317d4: C[81] || CT.C81});
    }
  };
  (booking_check_screen._Buttons.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    booking_check_screen._Buttons.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_check_screen._Buttons.prototype;
  dart.addTypeTests(booking_check_screen._Buttons);
  dart.addTypeCaches(booking_check_screen._Buttons);
  dart.setMethodSignature(booking_check_screen._Buttons, () => ({
    __proto__: dart.getMethods(booking_check_screen._Buttons.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_check_screen._Buttons, I[0]);
  dart.trackLibraries("packages/my_ticket_care/screens/booking/create_booking_screens/booking_check_screen.dart", {
    "package:my_ticket_care/screens/booking/create_booking_screens/booking_check_screen.dart": booking_check_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["booking_check_screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AACxB,YAAO,2EAGE,0CACkC,yCAC7B,qEAcR,oFACA,kBACE,oBACa,AAAY,AAAU,eAAnB,OAAO,kFAEzB,gCACsB,+BAClB,cAEK,0CACkC,gLAa3C,oFACA,kBACE,qBACa,AAAY,AAAU,eAAnB,OAAO,kFAEzB,qGACA,oFACA,kBACE,kBACa,AAAY,AAAU,eAAnB,OAAO,mGAKzB,sHAIA,oFACA,gCACuB,mCACd,kBACL,gMAQJ,gCACuB,mCACd,mDACM;AAIwB,kBAHvB,oCACG,OAAO,QACI,yCACb;2CAEN,kBACL,iMAIN;IAIR;;;QA9F+B;;AAAQ,2EAAW,GAAG;;EAAC;;;;;;;;;;IAoGzC;;;;;;;;;;;UAEa;AACxB,YAAO,mBACL,oBACa,AAAY,AAAU,eAAnB,OAAO;IAE3B;;;QAT0B;QAAmB;;;AAAU,sEAAW,GAAG;;EAAC;;;;;;;;;;;;;UAc5C;AACJ,wBAAsB,0EAAR,OAAO;AACzC,YAAO,6DAEE,0CACkC,yCAC7B,wBACR,kBACE,AAAoD,eAAvC,AAAY,AAAe,WAAhB,gHAG1B,kBACE,AAAkD,gBAApC,AAAY,AAAe,WAAhB;IAMnC;;;;;;;;;EACF;;;;;;;;;UAI4B;AACJ,wBAAsB,0EAAR,OAAO;AAElC,sBAAY,AAAY,AAAc,WAAf;AACvB,oBAAU,AAAY,AAAc,WAAf;AAE5B,YAAO,+DAEE,0CACkC,yCAC7B,wBACR,kBACE,AAAsD,eAAzC,AAAY,AAAgB,WAAjB,kHAG1B,kBACE,AAA0D,mBAAzC,AAAY,AAAiB,WAAlB,kHAG9B,kBACE,AAA+B,aAArB,SAAS,WAAI,OAAO,UACvB,wCAAoB,kBAA2B;IAKhE;;;;;;;;;EACF;;;;;;;;;;UAI4B;AACxB,YAAO,+DAEE,sCACgC,8CAC3B,wBACR,mDACe;;AAC+C,qBAAhD,oFAAR,OAAO;gBAAmC,kBAAA,AAAY,kBAAA;yCAElC,2DACI,yGAM9B,mDACe;AACF,+BACM,AACJ,AACA,gEAF4B,OAAO,WAAU;AAGtD,oBAAI,QAAQ,KAAI;AAaZ,kBAZQ,AAKL,oCAJY,OAAO,SACT,0BACD,gDACc,mDAClB,QAAC;AAMR,oBALS,uCACR,OAAO,EACP,yCACW,QAAC;;;AAU+C,kBALrD,oCACG,OAAO,QACI,uCACb,gCAEH;;yCAGU,2DAAkC;IAKpE;;;;;;;;;EACF","file":"../../../../../../../../../../../packages/my_ticket_care/screens/booking/create_booking_screens/booking_check_screen.dart.lib.js"}');
  // Exports:
  return {
    screens__booking__create_booking_screens__booking_check_screen: booking_check_screen
  };
}));

//# sourceMappingURL=booking_check_screen.dart.lib.js.map
