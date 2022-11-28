define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/my_ticket_care/reusable/app_colors.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/widgets/annotated_region.dart', 'packages/flutter/src/services/system_chrome.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/qr_flutter/src/qr_image.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/my_ticket_care/reusable/app_fonts.dart'], (function load__packages__my_ticket_care__screens__booking__booking_info_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__my_ticket_care__reusable__app_colors$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__widgets__annotated_region$46dart, packages__flutter__src__services__system_chrome$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__qr_flutter__src__qr_image$46dart, packages__flutter__src__material__elevated_button$46dart, packages__my_ticket_care__reusable__app_fonts$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const floating_action_button_location = packages__flutter__src__material__icon_button$46dart.src__material__floating_action_button_location;
  const floating_action_button = packages__flutter__src__material__icon_button$46dart.src__material__floating_action_button;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const app_colors = packages__my_ticket_care__reusable__app_colors$46dart.reusable__app_colors;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const annotated_region = packages__flutter__src__widgets__annotated_region$46dart.src__widgets__annotated_region;
  const system_chrome = packages__flutter__src__services__system_chrome$46dart.src__services__system_chrome;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const qr_image = packages__qr_flutter__src__qr_image$46dart.src__qr_image;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const app_fonts = packages__my_ticket_care__reusable__app_fonts$46dart.reusable__app_fonts;
  var booking_info = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    AnnotatedRegionOfSystemUiOverlayStyle: () => (T.AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(annotated_region.AnnotatedRegion$(system_chrome.SystemUiOverlayStyle)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "BookingInfo",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 24,
        [_Location_line]: 29,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 61059
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
        [Icon_size]: 25,
        [Icon_icon]: C[4] || CT.C4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FloatingActionButton",
        [_Location_column]: 16,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 29,
        [_Location_line]: 21,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 23,
        [_Location_line]: 47,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279505940.0
      });
    },
    get C9() {
      return C[9] = dart.const({
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
        [TextStyle_fontWeight]: C[10] || CT.C10,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Arial",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[11] || CT.C11,
        [TextStyle_inherit]: true
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: text.Text.prototype,
        [Widget__location]: C[8] || CT.C8,
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
        [Text_style]: C[9] || CT.C9,
        [Text_textSpan]: null,
        [Text_data]: "Información de reserva"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TitleAndSubtitle",
        [_Location_column]: 17,
        [_Location_line]: 51,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TitleAndSubtitle",
        [_Location_column]: 17,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TitleAndSubtitle",
        [_Location_column]: 17,
        [_Location_line]: 59,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TitleAndSubtitle",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TitleAndSubtitle",
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "QrImage",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 28,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 26,
        [_Location_line]: 84,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 17,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 20,
        [_Location_line]: 43,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 16,
        [_Location_line]: 38,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnnotatedRegion",
        [_Location_column]: 28,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scaffold",
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TitleAndSubtitle",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 117,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 121,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 14,
        [_Location_line]: 113,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 111,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/booking/booking_info.dart"
      });
    }
  }, false);
  var C = Array(33).fill(void 0);
  var I = ["package:my_ticket_care/screens/booking/booking_info.dart"];
  var serviceData$ = dart.privateName(booking_info, "BookingInfo.serviceData");
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
  var Color_value = dart.privateName(ui, "Color.value");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  booking_info.BookingInfo = class BookingInfo extends framework.StatelessWidget {
    get serviceData() {
      return this[serviceData$];
    }
    set serviceData(value) {
      super.serviceData = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let serviceData = opts && 'serviceData' in opts ? opts.serviceData : null;
      return new booking_info.BookingInfo.new({key: key, serviceData: serviceData, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      return new scaffold.Scaffold.new({floatingActionButtonLocation: floating_action_button_location.FloatingActionButtonLocation.startTop, floatingActionButton: new basic.Padding.new({padding: C[1] || CT.C1, child: new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
              navigator.Navigator.pop(T.ObjectN(), context);
            }, T.VoidTovoid()), backgroundColor: app_colors.AppColors.primaryColor, foregroundColor: app_colors.AppColors.white, child: C[2] || CT.C2, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), bottomNavigationBar: new (T.AnnotatedRegionOfSystemUiOverlayStyle()).new({value: system_chrome.SystemUiOverlayStyle.light.copyWith({statusBarColor: app_colors.AppColors.white}), child: new scaffold.Scaffold.new({body: new container.Container.new({color: app_colors.AppColors.white, height: 1 / 0, width: 1 / 0, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([C[7] || CT.C7, new booking_info.TitleAndSubtitle.new({title: "Nombre servicio: ", subtitle: core.String.as((t0$ = (t0 = this.serviceData, t0 == null ? null : t0[$_get]("serviceName")), t0$ == null ? "" : t0$)), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), new booking_info.TitleAndSubtitle.new({title: "Empresa: ", subtitle: core.String.as((t0$1 = (t0$0 = this.serviceData, t0$0 == null ? null : t0$0[$_get]("companyName")), t0$1 == null ? "" : t0$1)), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), new booking_info.TitleAndSubtitle.new({title: "Especialista: ", subtitle: core.String.as((t0$3 = (t0$2 = this.serviceData, t0$2 == null ? null : t0$2[$_get]("specialistName")), t0$3 == null ? "" : t0$3)), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), new booking_info.TitleAndSubtitle.new({title: "Fecha: ", subtitle: core.String.as((t0$5 = (t0$4 = this.serviceData, t0$4 == null ? null : t0$4[$_get]("date")), t0$5 == null ? "" : t0$5)), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), new booking_info.TitleAndSubtitle.new({title: "Hora: ", subtitle: core.String.as((t0$7 = (t0$6 = this.serviceData, t0$6 == null ? null : t0$6[$_get]("time")), t0$7 == null ? "" : t0$7)), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), new qr_image.QrImage.new({data: core.String.as((t0$9 = (t0$8 = this.serviceData, t0$8 == null ? null : t0$8[$_get]("serviceName")), t0$9 == null ? "" : t0$9)), version: -1, size: 200.0, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                      navigator.Navigator.pop(T.ObjectN(), context);
                    }, T.VoidTovoid()), style: elevated_button.ElevatedButton.styleFrom({elevation: 10.0, backgroundColor: app_colors.AppColors.primaryColor}), child: new basic.Padding.new({padding: C[18] || CT.C18, child: new text.Text.new("Volver", {style: app_fonts.AppFonts.titleh2.copyWith({color: app_colors.AppColors.white}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), $creationLocationd_0dea112b090073317d4: C[21] || CT.C21})]), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
  };
  (booking_info.BookingInfo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let serviceData = opts && 'serviceData' in opts ? opts.serviceData : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[serviceData$] = serviceData;
    booking_info.BookingInfo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_info.BookingInfo.prototype;
  dart.addTypeTests(booking_info.BookingInfo);
  dart.addTypeCaches(booking_info.BookingInfo);
  dart.setMethodSignature(booking_info.BookingInfo, () => ({
    __proto__: dart.getMethods(booking_info.BookingInfo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_info.BookingInfo, I[0]);
  dart.setFieldSignature(booking_info.BookingInfo, () => ({
    __proto__: dart.getFields(booking_info.BookingInfo.__proto__),
    serviceData: dart.finalFieldType(dart.nullable(core.Map))
  }));
  var title$ = dart.privateName(booking_info, "TitleAndSubtitle.title");
  var subtitle$ = dart.privateName(booking_info, "TitleAndSubtitle.subtitle");
  booking_info.TitleAndSubtitle = class TitleAndSubtitle extends framework.StatelessWidget {
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
      return new booking_info.TitleAndSubtitle.new({key: key, title: title, subtitle: subtitle, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27});
    }
    build(context) {
      return new basic.Padding.new({padding: C[28] || CT.C28, child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new text.Text.new(this.title, {style: app_fonts.AppFonts.titleh1black.copyWith({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), new text.Text.new(this.subtitle, {style: app_fonts.AppFonts.titleh2, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30})]), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}), $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
    }
  };
  (booking_info.TitleAndSubtitle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[subtitle$] = subtitle;
    booking_info.TitleAndSubtitle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = booking_info.TitleAndSubtitle.prototype;
  dart.addTypeTests(booking_info.TitleAndSubtitle);
  dart.addTypeCaches(booking_info.TitleAndSubtitle);
  dart.setMethodSignature(booking_info.TitleAndSubtitle, () => ({
    __proto__: dart.getMethods(booking_info.TitleAndSubtitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(booking_info.TitleAndSubtitle, I[0]);
  dart.setFieldSignature(booking_info.TitleAndSubtitle, () => ({
    __proto__: dart.getFields(booking_info.TitleAndSubtitle.__proto__),
    title: dart.finalFieldType(core.String),
    subtitle: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/my_ticket_care/screens/booking/booking_info.dart", {
    "package:my_ticket_care/screens/booking/booking_info.dart": booking_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["booking_info.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAc+B;;;;;;;;;;;UAGH;;AACxB,YAAO,0DACsD,6FACrC,sDAEb,gEACM;AACa,cAAZ,qCAAI,OAAO;iDAEI,oDACA,yLAOV,4DACS,AACvB,mEAAmC,qCACjC,iCACC,oCACa,gEAGV,0CACkC,mDACF,yCACnB,uCAKhB,8CACS,+CAC+B,2CAA5B,OAAY,UAAC,iBAAb,cAA+B,uEAE3C,8CACS,uCAC+B,gDAA5B,OAAY,YAAC,iBAAb,eAA+B,wEAE3C,8CACS,4CACkC,gDAA/B,OAAY,YAAC,oBAAb,eAAkC,wEAE9C,8CACS,qCACwB,gDAArB,OAAY,YAAC,UAAb,eAAwB,wEAEpC,8CACS,oCACwB,gDAArB,OAAY,YAAC,UAAb,eAAwB,wEAEpC,gDACoC,gDAA5B,OAAY,YAAC,iBAAb,eAA+B,gCAE/B,kEAER,mDACa;AACa,sBAAZ,qCAAI,OAAO;+CAED,qDACT,uBACgB,4CAEtB,wDAEE,kBACL,kBACgB,AAAQ,4CACL;IAWvC;;;QAzFO;QACA;;;AACF,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;IA+FP;;;;;;IAAO;;;;;;;;;;;;UAEM;AACxB,YAAO,yDAEE,uCACkC,mDACF,yCAC3B,wBACR,kBACE,oBACgB,AAAa,oDAAmB,mEAElD,kBACE,uBACgB;IAK1B;;;QAvBU;QAAmB;QAAqB;;IAArB;IAAqB;AAC5C,iEAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/my_ticket_care/screens/booking/booking_info.dart.lib.js"}');
  // Exports:
  return {
    screens__booking__booking_info: booking_info
  };
}));

//# sourceMappingURL=booking_info.dart.lib.js.map
