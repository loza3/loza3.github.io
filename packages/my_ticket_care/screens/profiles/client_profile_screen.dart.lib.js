define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/widgets/fade_in_image.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/provider/src/provider.dart', 'packages/my_ticket_care/providers/login_from_provider.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/my_ticket_care/reusable/app_fonts.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/colors.dart'], (function load__packages__my_ticket_care__screens__profiles__client_profile_screen_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__widgets__fade_in_image$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__provider__src__provider$46dart, packages__my_ticket_care__providers__login_from_provider$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__my_ticket_care__reusable__app_fonts$46dart, packages__flutter__src__material__elevated_button$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__colors$46dart) {
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
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const fade_in_image = packages__flutter__src__widgets__fade_in_image$46dart.src__widgets__fade_in_image;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const _network_image_web = packages__flutter__src__painting___network_image_web$46dart.src__painting___network_image_web;
  const provider = packages__provider__src__provider$46dart.src__provider;
  const login_from_provider = packages__my_ticket_care__providers__login_from_provider$46dart.providers__login_from_provider;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const app_fonts = packages__my_ticket_care__reusable__app_fonts$46dart.reusable__app_fonts;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  var client_profile_screen = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
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
        [_Location_name]: "ClientProfileScreen",
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287551212.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286438880.0
      });
    },
    get C2() {
      return C[2] = dart.constList([C[3] || CT.C3, C[4] || CT.C4], ui.Color);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.TileMode.prototype,
        [_Enum__name]: "clamp",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: -1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_transform]: null,
        [Gradient_stops]: null,
        [Gradient_colors]: C[2] || CT.C2,
        [LinearGradient_tileMode]: C[5] || CT.C5,
        [LinearGradient_end]: C[6] || CT.C6,
        [LinearGradient_begin]: C[7] || CT.C7
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_HeaderProfile",
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DataProfile",
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ButtonsProfile",
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeInImage",
        [_Location_column]: 20,
        [_Location_line]: 37,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "noRepeat",
        [_Enum_index]: 3
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "cover",
        [_Enum_index]: 2
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 700000
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: _network_image_web.NetworkImage.prototype,
        [NetworkImage_headers]: null,
        [NetworkImage_scale]: 1,
        [NetworkImage_url]: "https://i.pinimg.com/originals/66/9c/68/669c68af00d49891e2f3c78c539862da.png"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: _network_image_web.NetworkImage.prototype,
        [NetworkImage_headers]: null,
        [NetworkImage_scale]: 1,
        [NetworkImage_url]: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493booqfijeo0nq9lazn1lkw7qhimau25csi0df70g91&rid=200w.gif&ct=g"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: fade_in_image.FadeInImage.prototype,
        [Widget__location]: C[14] || CT.C14,
        [Widget_key]: null,
        [FadeInImage_imageSemanticLabel]: null,
        [FadeInImage_excludeFromSemantics]: false,
        [FadeInImage_matchTextDirection]: false,
        [FadeInImage_repeat]: C[15] || CT.C15,
        [FadeInImage_alignment]: C[16] || CT.C16,
        [FadeInImage_placeholderFit]: null,
        [FadeInImage_fit]: C[17] || CT.C17,
        [FadeInImage_height]: 200,
        [FadeInImage_width]: 200,
        [FadeInImage_fadeInCurve]: C[18] || CT.C18,
        [FadeInImage_fadeInDuration]: C[19] || CT.C19,
        [FadeInImage_fadeOutCurve]: C[20] || CT.C20,
        [FadeInImage_fadeOutDuration]: C[21] || CT.C21,
        [FadeInImage_imageErrorBuilder]: null,
        [FadeInImage_image]: C[22] || CT.C22,
        [FadeInImage_placeholderErrorBuilder]: null,
        [FadeInImage_placeholder]: C[23] || CT.C23
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRRect",
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_HeaderProfile",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C27() {
      return C[27] = dart.const({
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
        [TextStyle_fontWeight]: C[28] || CT.C28,
        [TextStyle_fontSize]: 30,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[29] || CT.C29,
        [TextStyle_inherit]: true
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[32] || CT.C32,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 4
      });
    },
    get C33() {
      return C[33] = dart.const({
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
        [TextStyle_fontWeight]: C[34] || CT.C34,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[29] || CT.C29,
        [TextStyle_inherit]: true
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[37] || CT.C37,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283321934.0
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 81,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[41] || CT.C41,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 11,
        [_Location_line]: 84,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 17,
        [_Location_line]: 88,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[44] || CT.C44,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 30,
        [SizedBox_width]: null
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 58,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_DataProfile",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282012118.0
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 108,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 15,
        [_Location_line]: 115,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[52] || CT.C52,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291376180.0
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Text",
        [_Location_column]: 18,
        [_Location_line]: 123,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 9,
        [_Location_line]: 118,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 100,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ButtonsProfile",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/screens/profiles/client_profile_screen.dart"
      });
    }
  }, false);
  var C = Array(58).fill(void 0);
  var I = ["package:my_ticket_care/screens/profiles/client_profile_screen.dart"];
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var Gradient_transform = dart.privateName(gradient, "Gradient.transform");
  var Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  var Color_value = dart.privateName(ui, "Color.value");
  var Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  var LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  client_profile_screen.ClientProfileScreen = class ClientProfileScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new client_profile_screen.ClientProfileScreen.new({key: key, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: C[1] || CT.C1, borderRadius: new border_radius.BorderRadius.circular(20.0)}), width: 1 / 0, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([new client_profile_screen._HeaderProfile.new({$creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), new client_profile_screen._DataProfile.new({$creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), new client_profile_screen._ButtonsProfile.new({$creationLocationd_0dea112b090073317d4: C[10] || CT.C10})]), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
  };
  (client_profile_screen.ClientProfileScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    client_profile_screen.ClientProfileScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = client_profile_screen.ClientProfileScreen.prototype;
  dart.addTypeTests(client_profile_screen.ClientProfileScreen);
  dart.addTypeCaches(client_profile_screen.ClientProfileScreen);
  dart.setMethodSignature(client_profile_screen.ClientProfileScreen, () => ({
    __proto__: dart.getMethods(client_profile_screen.ClientProfileScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(client_profile_screen.ClientProfileScreen, I[0]);
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var FadeInImage_imageSemanticLabel = dart.privateName(fade_in_image, "FadeInImage.imageSemanticLabel");
  var FadeInImage_excludeFromSemantics = dart.privateName(fade_in_image, "FadeInImage.excludeFromSemantics");
  var FadeInImage_matchTextDirection = dart.privateName(fade_in_image, "FadeInImage.matchTextDirection");
  var FadeInImage_repeat = dart.privateName(fade_in_image, "FadeInImage.repeat");
  var FadeInImage_alignment = dart.privateName(fade_in_image, "FadeInImage.alignment");
  var FadeInImage_placeholderFit = dart.privateName(fade_in_image, "FadeInImage.placeholderFit");
  var FadeInImage_fit = dart.privateName(fade_in_image, "FadeInImage.fit");
  var FadeInImage_height = dart.privateName(fade_in_image, "FadeInImage.height");
  var FadeInImage_width = dart.privateName(fade_in_image, "FadeInImage.width");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var FadeInImage_fadeInCurve = dart.privateName(fade_in_image, "FadeInImage.fadeInCurve");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var FadeInImage_fadeInDuration = dart.privateName(fade_in_image, "FadeInImage.fadeInDuration");
  var FadeInImage_fadeOutCurve = dart.privateName(fade_in_image, "FadeInImage.fadeOutCurve");
  var FadeInImage_fadeOutDuration = dart.privateName(fade_in_image, "FadeInImage.fadeOutDuration");
  var FadeInImage_imageErrorBuilder = dart.privateName(fade_in_image, "FadeInImage.imageErrorBuilder");
  var NetworkImage_headers = dart.privateName(_network_image_web, "NetworkImage.headers");
  var NetworkImage_scale = dart.privateName(_network_image_web, "NetworkImage.scale");
  var NetworkImage_url = dart.privateName(_network_image_web, "NetworkImage.url");
  var FadeInImage_image = dart.privateName(fade_in_image, "FadeInImage.image");
  var FadeInImage_placeholderErrorBuilder = dart.privateName(fade_in_image, "FadeInImage.placeholderErrorBuilder");
  var FadeInImage_placeholder = dart.privateName(fade_in_image, "FadeInImage.placeholder");
  client_profile_screen._HeaderProfile = class _HeaderProfile extends framework.StatelessWidget {
    build(context) {
      return new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(100.0), child: C[13] || CT.C13, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
    }
    static ['_#new#tearOff']() {
      return new client_profile_screen._HeaderProfile.new({$creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
    }
  };
  (client_profile_screen._HeaderProfile.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    client_profile_screen._HeaderProfile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = client_profile_screen._HeaderProfile.prototype;
  dart.addTypeTests(client_profile_screen._HeaderProfile);
  dart.addTypeCaches(client_profile_screen._HeaderProfile);
  dart.setMethodSignature(client_profile_screen._HeaderProfile, () => ({
    __proto__: dart.getMethods(client_profile_screen._HeaderProfile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(client_profile_screen._HeaderProfile, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
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
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  client_profile_screen._DataProfile = class _DataProfile extends framework.StatelessWidget {
    build(context) {
      let person = provider.Provider.of(login_from_provider.LoginFormProvider, context).personResponse;
      return new container.Container.new({width: 1 / 0, padding: C[26] || CT.C26, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new(dart.str(person.personName), {style: C[27] || CT.C27, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), C[31] || CT.C31, new text.Text.new("+591 " + dart.str(person.mobile), {style: C[33] || CT.C33, $creationLocationd_0dea112b090073317d4: C[35] || CT.C35}), C[36] || CT.C36, new text.Text.new(dart.str(person.email), {style: app_fonts.AppFonts.titleh2.copyWith({color: C[38] || CT.C38, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C[39] || CT.C39}), C[40] || CT.C40, new text.Text.new("Sexo: " + (person.sex === 0 ? "Hombre" : "Mujer"), {style: app_fonts.AppFonts.titleh1black.copyWith({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C[42] || CT.C42}), C[43] || CT.C43]), $creationLocationd_0dea112b090073317d4: C[45] || CT.C45}), $creationLocationd_0dea112b090073317d4: C[46] || CT.C46});
    }
    static ['_#new#tearOff']() {
      return new client_profile_screen._DataProfile.new({$creationLocationd_0dea112b090073317d4: C[47] || CT.C47});
    }
  };
  (client_profile_screen._DataProfile.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    client_profile_screen._DataProfile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = client_profile_screen._DataProfile.prototype;
  dart.addTypeTests(client_profile_screen._DataProfile);
  dart.addTypeCaches(client_profile_screen._DataProfile);
  dart.setMethodSignature(client_profile_screen._DataProfile, () => ({
    __proto__: dart.getMethods(client_profile_screen._DataProfile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(client_profile_screen._DataProfile, I[0]);
  client_profile_screen._ButtonsProfile = class _ButtonsProfile extends framework.StatelessWidget {
    build(context) {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), context, "login_screen"), T.VoidTovoid()), style: elevated_button.ElevatedButton.styleFrom({backgroundColor: C[48] || CT.C48}), child: new text.Text.new("Editar Perfil", {style: dart.nullCheck(theme.Theme.of(context).textTheme.subtitle1).copyWith({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C[49] || CT.C49}), $creationLocationd_0dea112b090073317d4: C[50] || CT.C50}), C[51] || CT.C51, new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), context, "login_screen"), T.VoidTovoid()), style: elevated_button.ElevatedButton.styleFrom({backgroundColor: C[53] || CT.C53}), child: new text.Text.new("Cerrar Sesión", {style: dart.nullCheck(theme.Theme.of(context).textTheme.subtitle1).copyWith({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C[54] || CT.C54}), $creationLocationd_0dea112b090073317d4: C[55] || CT.C55})]), $creationLocationd_0dea112b090073317d4: C[56] || CT.C56});
    }
    static ['_#new#tearOff']() {
      return new client_profile_screen._ButtonsProfile.new({$creationLocationd_0dea112b090073317d4: C[57] || CT.C57});
    }
  };
  (client_profile_screen._ButtonsProfile.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    client_profile_screen._ButtonsProfile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = client_profile_screen._ButtonsProfile.prototype;
  dart.addTypeTests(client_profile_screen._ButtonsProfile);
  dart.addTypeCaches(client_profile_screen._ButtonsProfile);
  dart.setMethodSignature(client_profile_screen._ButtonsProfile, () => ({
    __proto__: dart.getMethods(client_profile_screen._ButtonsProfile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(client_profile_screen._ButtonsProfile, I[0]);
  dart.trackLibraries("packages/my_ticket_care/screens/profiles/client_profile_screen.dart", {
    "package:my_ticket_care/screens/profiles/client_profile_screen.dart": client_profile_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["client_profile_screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,0CACO,6EAEiB,wCAAS,8BAG/B,yCACgC,mDACE,0CAC7B,wBACR,uGACA,qGACA;IAIR;;;QApBgC;;AAAQ,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAyB7B;AACxB,YAAO,wCACsB,wCAAS;IAWxC;;;;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACX,mBACA,AAA+B,4DAAT,OAAO;AAC1C,YAAO,6EAGE,gCACK,wBACR,kBACwB,SAAnB,AAAO,MAAD,mHAOX,kBAAK,AAAuB,mBAAf,AAAO,MAAD,+GAQnB,kBACmB,SAAd,AAAO,MAAD,iBACO,AAAQ,uEACoC,oFAK9D,kBACE,AAA+C,YAAtC,AAAO,AAAI,MAAL,SAAQ,IAAI,WAAW,kBACtB,AAAa,oDAAmB;IAQ1D;;;;;;;;;EACF;;;;;;;;;UAI4B;AACxB,YAAO,uCACgC,yCAC3B,wBACR,mDACa,cACG,mEAAqB,OAAO,EAAE,yCACtB,qFAEf,kBACL,yBAC4C,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,wCACH,8JAOxB,mDACa,cACG,mEAAqB,OAAO,EAAE,yCACtB,qFAEf,kBACL,yBAC4C,AAAE,eAAjC,AAAY,AAAU,eAAnB,OAAO,wCACH;IAM9B;;;;;;;;;EACF","file":"../../../../../../../../../../packages/my_ticket_care/screens/profiles/client_profile_screen.dart.lib.js"}');
  // Exports:
  return {
    screens__profiles__client_profile_screen: client_profile_screen
  };
}));

//# sourceMappingURL=client_profile_screen.dart.lib.js.map
