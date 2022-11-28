define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart', 'packages/font_awesome_flutter/src/icon_data.dart'], (function load__packages__font_awesome_flutter__src__fa_icon_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart, packages__font_awesome_flutter__src__icon_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const icon_data$ = packages__font_awesome_flutter__src__icon_data$46dart.src__icon_data;
  var fa_icon = Object.create(dart.library);
  var font_awesome_flutter = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FaIcon",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/font_awesome_flutter-9.2.0/lib/src/fa_icon.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 16,
        [_Location_line]: 92,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/font_awesome_flutter-9.2.0/lib/src/fa_icon.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 14,
        [_Location_line]: 90,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/font_awesome_flutter-9.2.0/lib/src/fa_icon.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RichText",
        [_Location_column]: 25,
        [_Location_line]: 101,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/font_awesome_flutter-9.2.0/lib/src/fa_icon.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 24,
        [_Location_line]: 120,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/font_awesome_flutter-9.2.0/lib/src/fa_icon.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ExcludeSemantics",
        [_Location_column]: 14,
        [_Location_line]: 134,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/font_awesome_flutter-9.2.0/lib/src/fa_icon.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 132,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/font_awesome_flutter-9.2.0/lib/src/fa_icon.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62062
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62312
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62313
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63151
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63041
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62137
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62137
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62139
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62139
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61506
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61808
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62314
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62315
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62928
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63540
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62316
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61495
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61497
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61494
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61496
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63042
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62561
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62064
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62508
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61689
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62115
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62317
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61757
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61819
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61961
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61699
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61696
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61697
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61698
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61703
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61700
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61701
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61702
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62806
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62806
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62318
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62496
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63044
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62319
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62320
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62321
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61817
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62929
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62485
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61831
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62807
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62296
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62296
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62297
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62297
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62298
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62298
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62299
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62299
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61611
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61608
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61609
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61610
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61539
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61536
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61537
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61538
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61618
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62263
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62264
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63354
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62114
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61545
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62322
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61946
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62808
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63355
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62930
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62323
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62110
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62492
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62324
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62497
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62809
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62325
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63356
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63357
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62810
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61514
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63461
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57433
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57434
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63078
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62030
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62741
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62742
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61534
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62562
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62165
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61482
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61641
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62515
      });
    },
    get C111() {
      return C[111] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62516
      });
    },
    get C112() {
      return C[112] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62157
      });
    },
    get C113() {
      return C[113] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62020
      });
    },
    get C114() {
      return C[114] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62016
      });
    },
    get C115() {
      return C[115] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62018
      });
    },
    get C116() {
      return C[116] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62019
      });
    },
    get C117() {
      return C[117] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62017
      });
    },
    get C118() {
      return C[118] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63541
      });
    },
    get C119() {
      return C[119] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62006
      });
    },
    get C120() {
      return C[120] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61692
      });
    },
    get C121() {
      return C[121] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61876
      });
    },
    get C122() {
      return C[122] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61877
      });
    },
    get C123() {
      return C[123] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61683
      });
    },
    get C124() {
      return C[124] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61683
      });
    },
    get C125() {
      return C[125] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61942
      });
    },
    get C126() {
      return C[126] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61942
      });
    },
    get C127() {
      return C[127] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62811
      });
    },
    get C128() {
      return C[128] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63047
      });
    },
    get C129() {
      return C[129] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61958
      });
    },
    get C130() {
      return C[130] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63562
      });
    },
    get C131() {
      return C[131] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62328
      });
    },
    get C132() {
      return C[132] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61925
      });
    },
    get C133() {
      return C[133] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63360
      });
    },
    get C134() {
      return C[134] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61949
      });
    },
    get C135() {
      return C[135] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61809
      });
    },
    get C136() {
      return C[136] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62329
      });
    },
    get C137() {
      return C[137] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62330
      });
    },
    get C138() {
      return C[138] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62078
      });
    },
    get C139() {
      return C[139] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62331
      });
    },
    get C140() {
      return C[140] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62743
      });
    },
    get C141() {
      return C[141] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63158
      });
    },
    get C142() {
      return C[142] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62109
      });
    },
    get C143() {
      return C[143] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63361
      });
    },
    get C144() {
      return C[144] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62332
      });
    },
    get C145() {
      return C[145] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62333
      });
    },
    get C146() {
      return C[146] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62099
      });
    },
    get C147() {
      return C[147] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62100
      });
    },
    get C148() {
      return C[148] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61490
      });
    },
    get C149() {
      return C[149] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61671
      });
    },
    get C150() {
      return C[150] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61922
      });
    },
    get C151() {
      return C[151] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62935
      });
    },
    get C152() {
      return C[152] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62812
      });
    },
    get C153() {
      return C[153] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61485
      });
    },
    get C154() {
      return C[154] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63159
      });
    },
    get C155() {
      return C[155] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63462
      });
    },
    get C156() {
      return C[156] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62744
      });
    },
    get C157() {
      return C[157] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62938
      });
    },
    get C158() {
      return C[158] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61486
      });
    },
    get C159() {
      return C[159] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61486
      });
    },
    get C160() {
      return C[160] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63542
      });
    },
    get C161() {
      return C[161] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63564
      });
    },
    get C162() {
      return C[162] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63568
      });
    },
    get C163() {
      return C[163] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63571
      });
    },
    get C164() {
      return C[164] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62518
      });
    },
    get C165() {
      return C[165] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62566
      });
    },
    get C166() {
      return C[166] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62622
      });
    },
    get C167() {
      return C[167] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57435
      });
    },
    get C168() {
      return C[168] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62568
      });
    },
    get C169() {
      return C[169] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62113
      });
    },
    get C170() {
      return C[170] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62940
      });
    },
    get C171() {
      return C[171] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63468
      });
    },
    get C172() {
      return C[172] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61617
      });
    },
    get C173() {
      return C[173] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62569
      });
    },
    get C174() {
      return C[174] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62745
      });
    },
    get C175() {
      return C[175] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62746
      });
    },
    get C176() {
      return C[176] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62813
      });
    },
    get C177() {
      return C[177] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61786
      });
    },
    get C178() {
      return C[178] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63543
      });
    },
    get C179() {
      return C[179] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61832
      });
    },
    get C180() {
      return C[180] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61869
      });
    },
    get C181() {
      return C[181] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61869
      });
    },
    get C182() {
      return C[182] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61601
      });
    },
    get C183() {
      return C[183] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61760
      });
    },
    get C184() {
      return C[184] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62570
      });
    },
    get C185() {
      return C[185] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62335
      });
    },
    get C186() {
      return C[186] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61959
      });
    },
    get C187() {
      return C[187] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62814
      });
    },
    get C188() {
      return C[188] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63050
      });
    },
    get C189() {
      return C[189] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63654
      });
    },
    get C190() {
      return C[190] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61965
      });
    },
    get C191() {
      return C[191] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61932
      });
    },
    get C192() {
      return C[192] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61747
      });
    },
    get C193() {
      return C[193] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61747
      });
    },
    get C194() {
      return C[194] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61555
      });
    },
    get C195() {
      return C[195] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61555
      });
    },
    get C196() {
      return C[196] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62068
      });
    },
    get C197() {
      return C[197] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62068
      });
    },
    get C198() {
      return C[198] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63363
      });
    },
    get C199() {
      return C[199] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62066
      });
    },
    get C200() {
      return C[200] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62066
      });
    },
    get C201() {
      return C[201] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62065
      });
    },
    get C202() {
      return C[202] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62065
      });
    },
    get C203() {
      return C[203] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62067
      });
    },
    get C204() {
      return C[204] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62067
      });
    },
    get C205() {
      return C[205] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63364
      });
    },
    get C206() {
      return C[206] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61488
      });
    },
    get C207() {
      return C[207] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61571
      });
    },
    get C208() {
      return C[208] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63163
      });
    },
    get C209() {
      return C[209] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63365
      });
    },
    get C210() {
      return C[210] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63366
      });
    },
    get C211() {
      return C[211] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62815
      });
    },
    get C212() {
      return C[212] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62571
      });
    },
    get C213() {
      return C[213] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61881
      });
    },
    get C214() {
      return C[214] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62942
      });
    },
    get C215() {
      return C[215] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62943
      });
    },
    get C216() {
      return C[216] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62945
      });
    },
    get C217() {
      return C[217] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62948
      });
    },
    get C218() {
      return C[218] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63743
      });
    },
    get C219() {
      return C[219] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61655
      });
    },
    get C220() {
      return C[220] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61657
      });
    },
    get C221() {
      return C[221] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61658
      });
    },
    get C222() {
      return C[222] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61776
      });
    },
    get C223() {
      return C[223] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61776
      });
    },
    get C224() {
      return C[224] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61841
      });
    },
    get C225() {
      return C[225] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61841
      });
    },
    get C226() {
      return C[226] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61778
      });
    },
    get C227() {
      return C[227] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61778
      });
    },
    get C228() {
      return C[228] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61777
      });
    },
    get C229() {
      return C[229] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61777
      });
    },
    get C230() {
      return C[230] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61656
      });
    },
    get C231() {
      return C[231] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63367
      });
    },
    get C232() {
      return C[232] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61976
      });
    },
    get C233() {
      return C[233] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61975
      });
    },
    get C234() {
      return C[234] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63368
      });
    },
    get C235() {
      return C[235] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63166
      });
    },
    get C236() {
      return C[236] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62509
      });
    },
    get C237() {
      return C[237] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61939
      });
    },
    get C238() {
      return C[238] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62486
      });
    },
    get C239() {
      return C[239] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62028
      });
    },
    get C240() {
      return C[240] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61938
      });
    },
    get C241() {
      return C[241] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62027
      });
    },
    get C242() {
      return C[242] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61937
      });
    },
    get C243() {
      return C[243] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61940
      });
    },
    get C244() {
      return C[244] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61941
      });
    },
    get C245() {
      return C[245] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61936
      });
    },
    get C246() {
      return C[246] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62336
      });
    },
    get C247() {
      return C[247] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63369
      });
    },
    get C248() {
      return C[248] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61603
      });
    },
    get C249() {
      return C[249] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63168
      });
    },
    get C250() {
      return C[250] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62747
      });
    },
    get C251() {
      return C[251] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62748
      });
    },
    get C252() {
      return C[252] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62951
      });
    },
    get C253() {
      return C[253] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61950
      });
    },
    get C254() {
      return C[254] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61568
      });
    },
    get C255() {
      return C[255] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61568
      });
    },
    get C256() {
      return C[256] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61953
      });
    },
    get C257() {
      return C[257] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61952
      });
    },
    get C258() {
      return C[258] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61452
      });
    },
    get C259() {
      return C[259] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61528
      });
    },
    get C260() {
      return C[260] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61528
      });
    },
    get C261() {
      return C[261] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62816
      });
    },
    get C262() {
      return C[262] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61770
      });
    },
    get C263() {
      return C[263] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61770
      });
    },
    get C264() {
      return C[264] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63471
      });
    },
    get C265() {
      return C[265] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62521
      });
    },
    get C266() {
      return C[266] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62522
      });
    },
    get C267() {
      return C[267] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62524
      });
    },
    get C268() {
      return C[268] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62527
      });
    },
    get C269() {
      return C[269] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62529
      });
    },
    get C270() {
      return C[270] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62531
      });
    },
    get C271() {
      return C[271] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62533
      });
    },
    get C272() {
      return C[272] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62535
      });
    },
    get C273() {
      return C[273] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61754
      });
    },
    get C274() {
      return C[274] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61751
      });
    },
    get C275() {
      return C[275] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61752
      });
    },
    get C276() {
      return C[276] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61753
      });
    },
    get C277() {
      return C[277] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61560
      });
    },
    get C278() {
      return C[278] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61523
      });
    },
    get C279() {
      return C[279] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61524
      });
    },
    get C280() {
      return C[280] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61559
      });
    },
    get C281() {
      return C[281] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61870
      });
    },
    get C282() {
      return C[282] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62056
      });
    },
    get C283() {
      return C[283] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63544
      });
    },
    get C284() {
      return C[284] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62749
      });
    },
    get C285() {
      return C[285] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61713
      });
    },
    get C286() {
      return C[286] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61713
      });
    },
    get C287() {
      return C[287] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61902
      });
    },
    get C288() {
      return C[288] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63055
      });
    },
    get C289() {
      return C[289] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63474
      });
    },
    get C290() {
      return C[290] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62248
      });
    },
    get C291() {
      return C[291] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62248
      });
    },
    get C292() {
      return C[292] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62572
      });
    },
    get C293() {
      return C[293] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62573
      });
    },
    get C294() {
      return C[294] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61463
      });
    },
    get C295() {
      return C[295] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61463
      });
    },
    get C296() {
      return C[296] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62029
      });
    },
    get C297() {
      return C[297] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62029
      });
    },
    get C298() {
      return C[298] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61962
      });
    },
    get C299() {
      return C[299] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61962
      });
    },
    get C300() {
      return C[300] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61634
      });
    },
    get C301() {
      return C[301] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62337
      });
    },
    get C302() {
      return C[302] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63291
      });
    },
    get C303() {
      return C[303] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63171
      });
    },
    get C304() {
      return C[304] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63292
      });
    },
    get C305() {
      return C[305] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63293
      });
    },
    get C306() {
      return C[306] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63296
      });
    },
    get C307() {
      return C[307] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63172
      });
    },
    get C308() {
      return C[308] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63299
      });
    },
    get C309() {
      return C[309] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62338
      });
    },
    get C310() {
      return C[310] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57469
      });
    },
    get C311() {
      return C[311] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62339
      });
    },
    get C312() {
      return C[312] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62340
      });
    },
    get C313() {
      return C[313] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62341
      });
    },
    get C314() {
      return C[314] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62817
      });
    },
    get C315() {
      return C[315] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61729
      });
    },
    get C316() {
      return C[316] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61734
      });
    },
    get C317() {
      return C[317] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61899
      });
    },
    get C318() {
      return C[318] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62084
      });
    },
    get C319() {
      return C[319] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61684
      });
    },
    get C320() {
      return C[320] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61459
      });
    },
    get C321() {
      return C[321] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61573
      });
    },
    get C322() {
      return C[322] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62750
      });
    },
    get C323() {
      return C[323] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61659
      });
    },
    get C324() {
      return C[324] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61557
      });
    },
    get C325() {
      return C[325] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61557
      });
    },
    get C326() {
      return C[326] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62074
      });
    },
    get C327() {
      return C[327] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62074
      });
    },
    get C328() {
      return C[328] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63057
      });
    },
    get C329() {
      return C[329] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62637
      });
    },
    get C330() {
      return C[330] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62637
      });
    },
    get C331() {
      return C[331] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63477
      });
    },
    get C332() {
      return C[332] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62643
      });
    },
    get C333() {
      return C[333] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61574
      });
    },
    get C334() {
      return C[334] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61574
      });
    },
    get C335() {
      return C[335] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63059
      });
    },
    get C336() {
      return C[336] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62751
      });
    },
    get C337() {
      return C[337] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61774
      });
    },
    get C338() {
      return C[338] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61774
      });
    },
    get C339() {
      return C[339] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61542
      });
    },
    get C340() {
      return C[340] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62498
      });
    },
    get C341() {
      return C[341] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63372
      });
    },
    get C342() {
      return C[342] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62818
      });
    },
    get C343() {
      return C[343] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63373
      });
    },
    get C344() {
      return C[344] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61966
      });
    },
    get C345() {
      return C[345] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62061
      });
    },
    get C346() {
      return C[346] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62819
      });
    },
    get C347() {
      return C[347] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62820
      });
    },
    get C348() {
      return C[348] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61637
      });
    },
    get C349() {
      return C[349] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61637
      });
    },
    get C350() {
      return C[350] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61945
      });
    },
    get C351() {
      return C[351] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61945
      });
    },
    get C352() {
      return C[352] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63646
      });
    },
    get C353() {
      return C[353] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62648
      });
    },
    get C354() {
      return C[354] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62344
      });
    },
    get C355() {
      return C[355] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62046
      });
    },
    get C356() {
      return C[356] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62695
      });
    },
    get C357() {
      return C[357] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62696
      });
    },
    get C358() {
      return C[358] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62697
      });
    },
    get C359() {
      return C[359] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62698
      });
    },
    get C360() {
      return C[360] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62699
      });
    },
    get C361() {
      return C[361] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62700
      });
    },
    get C362() {
      return C[362] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62701
      });
    },
    get C363() {
      return C[363] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62702
      });
    },
    get C364() {
      return C[364] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62703
      });
    },
    get C365() {
      return C[365] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62704
      });
    },
    get C366() {
      return C[366] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62705
      });
    },
    get C367() {
      return C[367] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62706
      });
    },
    get C368() {
      return C[368] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62707
      });
    },
    get C369() {
      return C[369] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61597
      });
    },
    get C370() {
      return C[370] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61597
      });
    },
    get C371() {
      return C[371] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63177
      });
    },
    get C372() {
      return C[372] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61733
      });
    },
    get C373() {
      return C[373] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62821
      });
    },
    get C374() {
      return C[374] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63060
      });
    },
    get C375() {
      return C[375] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61531
      });
    },
    get C376() {
      return C[376] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62752
      });
    },
    get C377() {
      return C[377] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62753
      });
    },
    get C378() {
      return C[378] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63479
      });
    },
    get C379() {
      return C[379] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61756
      });
    },
    get C380() {
      return C[380] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62347
      });
    },
    get C381() {
      return C[381] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61874
      });
    },
    get C382() {
      return C[382] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61875
      });
    },
    get C383() {
      return C[383] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61636
      });
    },
    get C384() {
      return C[384] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62348
      });
    },
    get C385() {
      return C[385] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62349
      });
    },
    get C386() {
      return C[386] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63178
      });
    },
    get C387() {
      return C[387] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57426
      });
    },
    get C388() {
      return C[388] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61968
      });
    },
    get C389() {
      return C[389] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61888
      });
    },
    get C390() {
      return C[390] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62116
      });
    },
    get C391() {
      return C[391] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57463
      });
    },
    get C392() {
      return C[392] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61861
      });
    },
    get C393() {
      return C[393] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63303
      });
    },
    get C394() {
      return C[394] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62350
      });
    },
    get C395() {
      return C[395] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62351
      });
    },
    get C396() {
      return C[396] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61704
      });
    },
    get C397() {
      return C[397] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63180
      });
    },
    get C398() {
      return C[398] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61885
      });
    },
    get C399() {
      return C[399] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63061
      });
    },
    get C400() {
      return C[400] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63376
      });
    },
    get C401() {
      return C[401] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62576
      });
    },
    get C402() {
      return C[402] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63377
      });
    },
    get C403() {
      return C[403] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62754
      });
    },
    get C404() {
      return C[404] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63183
      });
    },
    get C405() {
      return C[405] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63185
      });
    },
    get C406() {
      return C[406] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62755
      });
    },
    get C407() {
      return C[407] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62756
      });
    },
    get C408() {
      return C[408] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62757
      });
    },
    get C409() {
      return C[409] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62758
      });
    },
    get C410() {
      return C[410] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62759
      });
    },
    get C411() {
      return C[411] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62760
      });
    },
    get C412() {
      return C[412] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61862
      });
    },
    get C413() {
      return C[413] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62353
      });
    },
    get C414() {
      return C[414] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62822
      });
    },
    get C415() {
      return C[415] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62955
      });
    },
    get C416() {
      return C[416] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62354
      });
    },
    get C417() {
      return C[417] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62355
      });
    },
    get C418() {
      return C[418] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63482
      });
    },
    get C419() {
      return C[419] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62761
      });
    },
    get C420() {
      return C[420] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62823
      });
    },
    get C421() {
      return C[421] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62823
      });
    },
    get C422() {
      return C[422] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62577
      });
    },
    get C423() {
      return C[423] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62356
      });
    },
    get C424() {
      return C[424] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62357
      });
    },
    get C425() {
      return C[425] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63187
      });
    },
    get C426() {
      return C[426] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61781
      });
    },
    get C427() {
      return C[427] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62578
      });
    },
    get C428() {
      return C[428] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62580
      });
    },
    get C429() {
      return C[429] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62649
      });
    },
    get C430() {
      return C[430] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62762
      });
    },
    get C431() {
      return C[431] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62763
      });
    },
    get C432() {
      return C[432] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61842
      });
    },
    get C433() {
      return C[433] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61842
      });
    },
    get C434() {
      return C[434] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62650
      });
    },
    get C435() {
      return C[435] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61465
      });
    },
    get C436() {
      return C[436] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62358
      });
    },
    get C437() {
      return C[437] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62824
      });
    },
    get C438() {
      return C[438] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63189
      });
    },
    get C439() {
      return C[439] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62958
      });
    },
    get C440() {
      return C[440] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61821
      });
    },
    get C441() {
      return C[441] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62359
      });
    },
    get C442() {
      return C[442] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61803
      });
    },
    get C443() {
      return C[443] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62825
      });
    },
    get C444() {
      return C[444] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62826
      });
    },
    get C445() {
      return C[445] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63191
      });
    },
    get C446() {
      return C[446] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61865
      });
    },
    get C447() {
      return C[447] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62539
      });
    },
    get C448() {
      return C[448] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63379
      });
    },
    get C449() {
      return C[449] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63380
      });
    },
    get C450() {
      return C[450] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63193
      });
    },
    get C451() {
      return C[451] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62361
      });
    },
    get C452() {
      return C[452] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62362
      });
    },
    get C453() {
      return C[453] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62708
      });
    },
    get C454() {
      return C[454] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62082
      });
    },
    get C455() {
      return C[455] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57464
      });
    },
    get C456() {
      return C[456] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61508
      });
    },
    get C457() {
      return C[457] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61508
      });
    },
    get C458() {
      return C[458] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63483
      });
    },
    get C459() {
      return C[459] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61522
      });
    },
    get C460() {
      return C[460] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62512
      });
    },
    get C461() {
      return C[461] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61761
      });
    },
    get C462() {
      return C[462] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61762
      });
    },
    get C463() {
      return C[463] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62961
      });
    },
    get C464() {
      return C[464] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62499
      });
    },
    get C465() {
      return C[465] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61905
      });
    },
    get C466() {
      return C[466] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61664
      });
    },
    get C467() {
      return C[467] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61664
      });
    },
    get C468() {
      return C[468] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62134
      });
    },
    get C469() {
      return C[469] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62134
      });
    },
    get C470() {
      return C[470] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63064
      });
    },
    get C471() {
      return C[471] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61849
      });
    },
    get C472() {
      return C[472] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62105
      });
    },
    get C473() {
      return C[473] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62764
      });
    },
    get C474() {
      return C[474] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61741
      });
    },
    get C475() {
      return C[475] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62365
      });
    },
    get C476() {
      return C[476] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62510
      });
    },
    get C477() {
      return C[477] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63382
      });
    },
    get C478() {
      return C[478] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62167
      });
    },
    get C479() {
      return C[479] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61779
      });
    },
    get C480() {
      return C[480] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63545
      });
    },
    get C481() {
      return C[481] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62306
      });
    },
    get C482() {
      return C[482] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61738
      });
    },
    get C483() {
      return C[483] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61546
      });
    },
    get C484() {
      return C[484] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61553
      });
    },
    get C485() {
      return C[485] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61541
      });
    },
    get C486() {
      return C[486] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62500
      });
    },
    get C487() {
      return C[487] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62238
      });
    },
    get C488() {
      return C[488] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62014
      });
    },
    get C489() {
      return C[489] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62301
      });
    },
    get C490() {
      return C[490] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62304
      });
    },
    get C491() {
      return C[491] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61550
      });
    },
    get C492() {
      return C[492] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61550
      });
    },
    get C493() {
      return C[493] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61947
      });
    },
    get C494() {
      return C[494] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61552
      });
    },
    get C495() {
      return C[495] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61552
      });
    },
    get C496() {
      return C[496] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61594
      });
    },
    get C497() {
      return C[497] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62366
      });
    },
    get C498() {
      return C[498] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62367
      });
    },
    get C499() {
      return C[499] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61570
      });
    },
    get C500() {
      return C[500] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63587
      });
    },
    get C501() {
      return C[501] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63196
      });
    },
    get C502() {
      return C[502] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61513
      });
    },
    get C503() {
      return C[503] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61520
      });
    },
    get C504() {
      return C[504] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57349
      });
    },
    get C505() {
      return C[505] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61868
      });
    },
    get C506() {
      return C[506] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62765
      });
    },
    get C507() {
      return C[507] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62827
      });
    },
    get C508() {
      return C[508] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63383
      });
    },
    get C509() {
      return C[509] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63384
      });
    },
    get C510() {
      return C[510] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61826
      });
    },
    get C511() {
      return C[511] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61691
      });
    },
    get C512() {
      return C[512] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63385
      });
    },
    get C513() {
      return C[513] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61787
      });
    },
    get C514() {
      return C[514] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61787
      });
    },
    get C515() {
      return C[515] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61788
      });
    },
    get C516() {
      return C[516] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61788
      });
    },
    get C517() {
      return C[517] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61894
      });
    },
    get C518() {
      return C[518] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61894
      });
    },
    get C519() {
      return C[519] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61895
      });
    },
    get C520() {
      return C[520] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61895
      });
    },
    get C521() {
      return C[521] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61897
      });
    },
    get C522() {
      return C[522] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61897
      });
    },
    get C523() {
      return C[523] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62828
      });
    },
    get C524() {
      return C[524] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63197
      });
    },
    get C525() {
      return C[525] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62829
      });
    },
    get C526() {
      return C[526] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61891
      });
    },
    get C527() {
      return C[527] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61891
      });
    },
    get C528() {
      return C[528] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62830
      });
    },
    get C529() {
      return C[529] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61893
      });
    },
    get C530() {
      return C[530] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61893
      });
    },
    get C531() {
      return C[531] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62831
      });
    },
    get C532() {
      return C[532] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62832
      });
    },
    get C533() {
      return C[533] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62833
      });
    },
    get C534() {
      return C[534] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62583
      });
    },
    get C535() {
      return C[535] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62584
      });
    },
    get C536() {
      return C[536] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61889
      });
    },
    get C537() {
      return C[537] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61889
      });
    },
    get C538() {
      return C[538] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61892
      });
    },
    get C539() {
      return C[539] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61892
      });
    },
    get C540() {
      return C[540] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62834
      });
    },
    get C541() {
      return C[541] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62835
      });
    },
    get C542() {
      return C[542] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62836
      });
    },
    get C543() {
      return C[543] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61896
      });
    },
    get C544() {
      return C[544] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61896
      });
    },
    get C545() {
      return C[545] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61890
      });
    },
    get C546() {
      return C[546] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61890
      });
    },
    get C547() {
      return C[547] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62837
      });
    },
    get C548() {
      return C[548] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62838
      });
    },
    get C549() {
      return C[549] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61448
      });
    },
    get C550() {
      return C[550] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61616
      });
    },
    get C551() {
      return C[551] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62839
      });
    },
    get C552() {
      return C[552] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61549
      });
    },
    get C553() {
      return C[553] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63460
      });
    },
    get C554() {
      return C[554] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61748
      });
    },
    get C555() {
      return C[555] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62057
      });
    },
    get C556() {
      return C[556] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57351
      });
    },
    get C557() {
      return C[557] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62585
      });
    },
    get C558() {
      return C[558] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62128
      });
    },
    get C559() {
      return C[559] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62730
      });
    },
    get C560() {
      return C[560] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62369
      });
    },
    get C561() {
      return C[561] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62840
      });
    },
    get C562() {
      return C[562] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63198
      });
    },
    get C563() {
      return C[563] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61476
      });
    },
    get C564() {
      return C[564] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61476
      });
    },
    get C565() {
      return C[565] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61726
      });
    },
    get C566() {
      return C[566] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63309
      });
    },
    get C567() {
      return C[567] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61635
      });
    },
    get C568() {
      return C[568] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61806
      });
    },
    get C569() {
      return C[569] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62541
      });
    },
    get C570() {
      return C[570] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62841
      });
    },
    get C571() {
      return C[571] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62841
      });
    },
    get C572() {
      return C[572] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62487
      });
    },
    get C573() {
      return C[573] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61563
      });
    },
    get C574() {
      return C[574] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61563
      });
    },
    get C575() {
      return C[575] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63069
      });
    },
    get C576() {
      return C[576] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61564
      });
    },
    get C577() {
      return C[577] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61564
      });
    },
    get C578() {
      return C[578] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63070
      });
    },
    get C579() {
      return C[579] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61489
      });
    },
    get C580() {
      return C[580] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62132
      });
    },
    get C581() {
      return C[581] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62300
      });
    },
    get C582() {
      return C[582] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62501
      });
    },
    get C583() {
      return C[583] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62080
      });
    },
    get C584() {
      return C[584] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62370
      });
    },
    get C585() {
      return C[585] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62542
      });
    },
    get C586() {
      return C[586] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62086
      });
    },
    get C587() {
      return C[587] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62371
      });
    },
    get C588() {
      return C[588] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61969
      });
    },
    get C589() {
      return C[589] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61518
      });
    },
    get C590() {
      return C[590] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61824
      });
    },
    get C591() {
      return C[591] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62149
      });
    },
    get C592() {
      return C[592] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62372
      });
    },
    get C593() {
      return C[593] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62766
      });
    },
    get C594() {
      return C[594] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61721
      });
    },
    get C595() {
      return C[595] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61721
      });
    },
    get C596() {
      return C[596] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62842
      });
    },
    get C597() {
      return C[597] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62842
      });
    },
    get C598() {
      return C[598] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62731
      });
    },
    get C599() {
      return C[599] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63074
      });
    },
    get C600() {
      return C[600] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61923
      });
    },
    get C601() {
      return C[601] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61923
      });
    },
    get C602() {
      return C[602] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62732
      });
    },
    get C603() {
      return C[603] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62733
      });
    },
    get C604() {
      return C[604] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61723
      });
    },
    get C605() {
      return C[605] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62767
      });
    },
    get C606() {
      return C[606] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61667
      });
    },
    get C607() {
      return C[607] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62373
      });
    },
    get C608() {
      return C[608] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62373
      });
    },
    get C609() {
      return C[609] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61997
      });
    },
    get C610() {
      return C[610] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62053
      });
    },
    get C611() {
      return C[611] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62048
      });
    },
    get C612() {
      return C[612] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62049
      });
    },
    get C613() {
      return C[613] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63202
      });
    },
    get C614() {
      return C[614] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61547
      });
    },
    get C615() {
      return C[615] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63388
      });
    },
    get C616() {
      return C[616] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61907
      });
    },
    get C617() {
      return C[617] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63553
      });
    },
    get C618() {
      return C[618] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61906
      });
    },
    get C619() {
      return C[619] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61595
      });
    },
    get C620() {
      return C[620] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61715
      });
    },
    get C621() {
      return C[621] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61586
      });
    },
    get C622() {
      return C[622] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62374
      });
    },
    get C623() {
      return C[623] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62102
      });
    },
    get C624() {
      return C[624] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62502
      });
    },
    get C625() {
      return C[625] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63391
      });
    },
    get C626() {
      return C[626] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61440
      });
    },
    get C627() {
      return C[627] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62843
      });
    },
    get C628() {
      return C[628] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63392
      });
    },
    get C629() {
      return C[629] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62768
      });
    },
    get C630() {
      return C[630] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62117
      });
    },
    get C631() {
      return C[631] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62118
      });
    },
    get C632() {
      return C[632] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61612
      });
    },
    get C633() {
      return C[633] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62844
      });
    },
    get C634() {
      return C[634] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62845
      });
    },
    get C635() {
      return C[635] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62846
      });
    },
    get C636() {
      return C[636] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63394
      });
    },
    get C637() {
      return C[637] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62375
      });
    },
    get C638() {
      return C[638] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62544
      });
    },
    get C639() {
      return C[639] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62376
      });
    },
    get C640() {
      return C[640] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62377
      });
    },
    get C641() {
      return C[641] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61856
      });
    },
    get C642() {
      return C[642] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62378
      });
    },
    get C643() {
      return C[643] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57465
      });
    },
    get C644() {
      return C[644] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62379
      });
    },
    get C645() {
      return C[645] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62131
      });
    },
    get C646() {
      return C[646] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61653
      });
    },
    get C647() {
      return C[647] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61652
      });
    },
    get C648() {
      return C[648] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61934
      });
    },
    get C649() {
      return C[649] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63076
      });
    },
    get C650() {
      return C[650] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61853
      });
    },
    get C651() {
      return C[651] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61828
      });
    },
    get C652() {
      return C[652] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62166
      });
    },
    get C653() {
      return C[653] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62769
      });
    },
    get C654() {
      return C[654] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62770
      });
    },
    get C655() {
      return C[655] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62847
      });
    },
    get C656() {
      return C[656] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62847
      });
    },
    get C657() {
      return C[657] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62848
      });
    },
    get C658() {
      return C[658] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62848
      });
    },
    get C659() {
      return C[659] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62849
      });
    },
    get C660() {
      return C[660] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62849
      });
    },
    get C661() {
      return C[661] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62850
      });
    },
    get C662() {
      return C[662] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62850
      });
    },
    get C663() {
      return C[663] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62851
      });
    },
    get C664() {
      return C[664] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62851
      });
    },
    get C665() {
      return C[665] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62852
      });
    },
    get C666() {
      return C[666] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62852
      });
    },
    get C667() {
      return C[667] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62853
      });
    },
    get C668() {
      return C[668] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62853
      });
    },
    get C669() {
      return C[669] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62854
      });
    },
    get C670() {
      return C[670] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62854
      });
    },
    get C671() {
      return C[671] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62855
      });
    },
    get C672() {
      return C[672] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62855
      });
    },
    get C673() {
      return C[673] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62856
      });
    },
    get C674() {
      return C[674] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62856
      });
    },
    get C675() {
      return C[675] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62857
      });
    },
    get C676() {
      return C[676] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62857
      });
    },
    get C677() {
      return C[677] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62858
      });
    },
    get C678() {
      return C[678] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62858
      });
    },
    get C679() {
      return C[679] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62859
      });
    },
    get C680() {
      return C[680] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62859
      });
    },
    get C681() {
      return C[681] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62860
      });
    },
    get C682() {
      return C[682] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62860
      });
    },
    get C683() {
      return C[683] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62861
      });
    },
    get C684() {
      return C[684] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63396
      });
    },
    get C685() {
      return C[685] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63397
      });
    },
    get C686() {
      return C[686] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62862
      });
    },
    get C687() {
      return C[687] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62380
      });
    },
    get C688() {
      return C[688] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62381
      });
    },
    get C689() {
      return C[689] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57470
      });
    },
    get C690() {
      return C[690] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63398
      });
    },
    get C691() {
      return C[691] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62382
      });
    },
    get C692() {
      return C[692] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61693
      });
    },
    get C693() {
      return C[693] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61908
      });
    },
    get C694() {
      return C[694] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62383
      });
    },
    get C695() {
      return C[695] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62967
      });
    },
    get C696() {
      return C[696] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63493
      });
    },
    get C697() {
      return C[697] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63203
      });
    },
    get C698() {
      return C[698] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63077
      });
    },
    get C699() {
      return C[699] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62653
      });
    },
    get C700() {
      return C[700] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62654
      });
    },
    get C701() {
      return C[701] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57436
      });
    },
    get C702() {
      return C[702] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62656
      });
    },
    get C703() {
      return C[703] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62657
      });
    },
    get C704() {
      return C[704] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62040
      });
    },
    get C705() {
      return C[705] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62040
      });
    },
    get C706() {
      return C[706] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63494
      });
    },
    get C707() {
      return C[707] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62038
      });
    },
    get C708() {
      return C[708] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62038
      });
    },
    get C709() {
      return C[709] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62043
      });
    },
    get C710() {
      return C[710] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62043
      });
    },
    get C711() {
      return C[711] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61607
      });
    },
    get C712() {
      return C[712] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61607
      });
    },
    get C713() {
      return C[713] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61605
      });
    },
    get C714() {
      return C[714] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61605
      });
    },
    get C715() {
      return C[715] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61604
      });
    },
    get C716() {
      return C[716] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61604
      });
    },
    get C717() {
      return C[717] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61606
      });
    },
    get C718() {
      return C[718] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61606
      });
    },
    get C719() {
      return C[719] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62042
      });
    },
    get C720() {
      return C[720] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62042
      });
    },
    get C721() {
      return C[721] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62037
      });
    },
    get C722() {
      return C[722] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62037
      });
    },
    get C723() {
      return C[723] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62039
      });
    },
    get C724() {
      return C[724] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62039
      });
    },
    get C725() {
      return C[725] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57437
      });
    },
    get C726() {
      return C[726] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62041
      });
    },
    get C727() {
      return C[727] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62041
      });
    },
    get C728() {
      return C[728] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62658
      });
    },
    get C729() {
      return C[729] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62660
      });
    },
    get C730() {
      return C[730] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57438
      });
    },
    get C731() {
      return C[731] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62133
      });
    },
    get C732() {
      return C[732] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62133
      });
    },
    get C733() {
      return C[733] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57439
      });
    },
    get C734() {
      return C[734] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57440
      });
    },
    get C735() {
      return C[735] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63206
      });
    },
    get C736() {
      return C[736] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63495
      });
    },
    get C737() {
      return C[737] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62098
      });
    },
    get C738() {
      return C[738] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63680
      });
    },
    get C739() {
      return C[739] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63681
      });
    },
    get C740() {
      return C[740] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63208
      });
    },
    get C741() {
      return C[741] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61600
      });
    },
    get C742() {
      return C[742] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61600
      });
    },
    get C743() {
      return C[743] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57441
      });
    },
    get C744() {
      return C[744] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57442
      });
    },
    get C745() {
      return C[745] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57443
      });
    },
    get C746() {
      return C[746] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57444
      });
    },
    get C747() {
      return C[747] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61916
      });
    },
    get C748() {
      return C[748] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61477
      });
    },
    get C749() {
      return C[749] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62863
      });
    },
    get C750() {
      return C[750] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62864
      });
    },
    get C751() {
      return C[751] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61444
      });
    },
    get C752() {
      return C[752] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61444
      });
    },
    get C753() {
      return C[753] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63401
      });
    },
    get C754() {
      return C[754] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61982
      });
    },
    get C755() {
      return C[755] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62771
      });
    },
    get C756() {
      return C[756] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62865
      });
    },
    get C757() {
      return C[757] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63212
      });
    },
    get C758() {
      return C[758] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63213
      });
    },
    get C759() {
      return C[759] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62546
      });
    },
    get C760() {
      return C[760] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62384
      });
    },
    get C761() {
      return C[761] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61914
      });
    },
    get C762() {
      return C[762] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57471
      });
    },
    get C763() {
      return C[763] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62547
      });
    },
    get C764() {
      return C[764] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63402
      });
    },
    get C765() {
      return C[765] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61461
      });
    },
    get C766() {
      return C[766] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62503
      });
    },
    get C767() {
      return C[767] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62866
      });
    },
    get C768() {
      return C[768] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63216
      });
    },
    get C769() {
      return C[769] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63403
      });
    },
    get C770() {
      return C[770] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61688
      });
    },
    get C771() {
      return C[771] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61688
      });
    },
    get C772() {
      return C[772] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62589
      });
    },
    get C773() {
      return C[773] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62590
      });
    },
    get C774() {
      return C[774] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63501
      });
    },
    get C775() {
      return C[775] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62867
      });
    },
    get C776() {
      return C[776] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63503
      });
    },
    get C777() {
      return C[777] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62868
      });
    },
    get C778() {
      return C[778] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62385
      });
    },
    get C779() {
      return C[779] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62036
      });
    },
    get C780() {
      return C[780] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62036
      });
    },
    get C781() {
      return C[781] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62035
      });
    },
    get C782() {
      return C[782] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62034
      });
    },
    get C783() {
      return C[783] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62033
      });
    },
    get C784() {
      return C[784] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63217
      });
    },
    get C785() {
      return C[785] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57445
      });
    },
    get C786() {
      return C[786] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62076
      });
    },
    get C787() {
      return C[787] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63218
      });
    },
    get C788() {
      return C[788] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61755
      });
    },
    get C789() {
      return C[789] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62386
      });
    },
    get C790() {
      return C[790] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62022
      });
    },
    get C791() {
      return C[791] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63504
      });
    },
    get C792() {
      return C[792] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63405
      });
    },
    get C793() {
      return C[793] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63597
      });
    },
    get C794() {
      return C[794] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62145
      });
    },
    get C795() {
      return C[795] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62145
      });
    },
    get C796() {
      return C[796] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62146
      });
    },
    get C797() {
      return C[797] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62146
      });
    },
    get C798() {
      return C[798] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62591
      });
    },
    get C799() {
      return C[799] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57363
      });
    },
    get C800() {
      return C[800] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63406
      });
    },
    get C801() {
      return C[801] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61502
      });
    },
    get C802() {
      return C[802] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61502
      });
    },
    get C803() {
      return C[803] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62210
      });
    },
    get C804() {
      return C[804] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62210
      });
    },
    get C805() {
      return C[805] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62168
      });
    },
    get C806() {
      return C[806] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61468
      });
    },
    get C807() {
      return C[807] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61500
      });
    },
    get C808() {
      return C[808] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62069
      });
    },
    get C809() {
      return C[809] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62772
      });
    },
    get C810() {
      return C[810] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61737
      });
    },
    get C811() {
      return C[811] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61530
      });
    },
    get C812() {
      return C[812] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57472
      });
    },
    get C813() {
      return C[813] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61805
      });
    },
    get C814() {
      return C[814] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57429
      });
    },
    get C815() {
      return C[815] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57473
      });
    },
    get C816() {
      return C[816] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63407
      });
    },
    get C817() {
      return C[817] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62059
      });
    },
    get C818() {
      return C[818] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63408
      });
    },
    get C819() {
      return C[819] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61960
      });
    },
    get C820() {
      return C[820] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61491
      });
    },
    get C821() {
      return C[821] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63546
      });
    },
    get C822() {
      return C[822] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62388
      });
    },
    get C823() {
      return C[823] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62389
      });
    },
    get C824() {
      return C[824] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62692
      });
    },
    get C825() {
      return C[825] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63081
      });
    },
    get C826() {
      return C[826] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62734
      });
    },
    get C827() {
      return C[827] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62390
      });
    },
    get C828() {
      return C[828] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63409
      });
    },
    get C829() {
      return C[829] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62391
      });
    },
    get C830() {
      return C[830] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62869
      });
    },
    get C831() {
      return C[831] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61866
      });
    },
    get C832() {
      return C[832] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63082
      });
    },
    get C833() {
      return C[833] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62392
      });
    },
    get C834() {
      return C[834] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62393
      });
    },
    get C835() {
      return C[835] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61900
      });
    },
    get C836() {
      return C[836] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63083
      });
    },
    get C837() {
      return C[837] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62970
      });
    },
    get C838() {
      return C[838] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61572
      });
    },
    get C839() {
      return C[839] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62709
      });
    },
    get C840() {
      return C[840] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61724
      });
    },
    get C841() {
      return C[841] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61724
      });
    },
    get C842() {
      return C[842] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62394
      });
    },
    get C843() {
      return C[843] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63085
      });
    },
    get C844() {
      return C[844] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62395
      });
    },
    get C845() {
      return C[845] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62396
      });
    },
    get C846() {
      return C[846] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62870
      });
    },
    get C847() {
      return C[847] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62870
      });
    },
    get C848() {
      return C[848] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62871
      });
    },
    get C849() {
      return C[849] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62871
      });
    },
    get C850() {
      return C[850] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62872
      });
    },
    get C851() {
      return C[851] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62872
      });
    },
    get C852() {
      return C[852] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62773
      });
    },
    get C853() {
      return C[853] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62511
      });
    },
    get C854() {
      return C[854] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63087
      });
    },
    get C855() {
      return C[855] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61867
      });
    },
    get C856() {
      return C[856] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61705
      });
    },
    get C857() {
      return C[857] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62972
      });
    },
    get C858() {
      return C[858] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57446
      });
    },
    get C859() {
      return C[859] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63506
      });
    },
    get C860() {
      return C[860] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62397
      });
    },
    get C861() {
      return C[861] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61954
      });
    },
    get C862() {
      return C[862] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61955
      });
    },
    get C863() {
      return C[863] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62873
      });
    },
    get C864() {
      return C[864] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62873
      });
    },
    get C865() {
      return C[865] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62874
      });
    },
    get C866() {
      return C[866] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62874
      });
    },
    get C867() {
      return C[867] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62875
      });
    },
    get C868() {
      return C[868] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62875
      });
    },
    get C869() {
      return C[869] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62876
      });
    },
    get C870() {
      return C[870] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62876
      });
    },
    get C871() {
      return C[871] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62973
      });
    },
    get C872() {
      return C[872] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61548
      });
    },
    get C873() {
      return C[873] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61970
      });
    },
    get C874() {
      return C[874] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61588
      });
    },
    get C875() {
      return C[875] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61588
      });
    },
    get C876() {
      return C[876] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62493
      });
    },
    get C877() {
      return C[877] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62774
      });
    },
    get C878() {
      return C[878] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62775
      });
    },
    get C879() {
      return C[879] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62398
      });
    },
    get C880() {
      return C[880] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62399
      });
    },
    get C881() {
      return C[881] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61901
      });
    },
    get C882() {
      return C[882] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61901
      });
    },
    get C883() {
      return C[883] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61675
      });
    },
    get C884() {
      return C[884] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61675
      });
    },
    get C885() {
      return C[885] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62400
      });
    },
    get C886() {
      return C[886] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61633
      });
    },
    get C887() {
      return C[887] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61580
      });
    },
    get C888() {
      return C[888] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61665
      });
    },
    get C889() {
      return C[889] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62136
      });
    },
    get C890() {
      return C[890] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61820
      });
    },
    get C891() {
      return C[891] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61845
      });
    },
    get C892() {
      return C[892] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61498
      });
    },
    get C893() {
      return C[893] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61474
      });
    },
    get C894() {
      return C[894] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61474
      });
    },
    get C895() {
      return C[895] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61643
      });
    },
    get C896() {
      return C[896] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61642
      });
    },
    get C897() {
      return C[897] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61732
      });
    },
    get C898() {
      return C[898] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61475
      });
    },
    get C899() {
      return C[899] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62401
      });
    },
    get C900() {
      return C[900] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62217
      });
    },
    get C901() {
      return C[901] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62218
      });
    },
    get C902() {
      return C[902] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62219
      });
    },
    get C903() {
      return C[903] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62220
      });
    },
    get C904() {
      return C[904] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62120
      });
    },
    get C905() {
      return C[905] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62877
      });
    },
    get C906() {
      return C[906] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62980
      });
    },
    get C907() {
      return C[907] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57447
      });
    },
    get C908() {
      return C[908] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62403
      });
    },
    get C909() {
      return C[909] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62404
      });
    },
    get C910() {
      return C[910] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61648
      });
    },
    get C911() {
      return C[911] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61558
      });
    },
    get C912() {
      return C[912] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63092
      });
    },
    get C913() {
      return C[913] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62878
      });
    },
    get C914() {
      return C[914] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61827
      });
    },
    get C915() {
      return C[915] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62735
      });
    },
    get C916() {
      return C[916] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62073
      });
    },
    get C917() {
      return C[917] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62073
      });
    },
    get C918() {
      return C[918] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62879
      });
    },
    get C919() {
      return C[919] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62880
      });
    },
    get C920() {
      return C[920] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61505
      });
    },
    get C921() {
      return C[921] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62405
      });
    },
    get C922() {
      return C[922] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62070
      });
    },
    get C923() {
      return C[923] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62071
      });
    },
    get C924() {
      return C[924] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62991
      });
    },
    get C925() {
      return C[925] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62881
      });
    },
    get C926() {
      return C[926] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61986
      });
    },
    get C927() {
      return C[927] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61991
      });
    },
    get C928() {
      return C[928] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61993
      });
    },
    get C929() {
      return C[929] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61995
      });
    },
    get C930() {
      return C[930] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61994
      });
    },
    get C931() {
      return C[931] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63226
      });
    },
    get C932() {
      return C[932] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62710
      });
    },
    get C933() {
      return C[933] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61750
      });
    },
    get C934() {
      return C[934] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63690
      });
    },
    get C935() {
      return C[935] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62882
      });
    },
    get C936() {
      return C[936] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62406
      });
    },
    get C937() {
      return C[937] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62010
      });
    },
    get C938() {
      return C[938] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62407
      });
    },
    get C939() {
      return C[939] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61690
      });
    },
    get C940() {
      return C[940] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62408
      });
    },
    get C941() {
      return C[941] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62176
      });
    },
    get C942() {
      return C[942] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62883
      });
    },
    get C943() {
      return C[943] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61722
      });
    },
    get C944() {
      return C[944] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61722
      });
    },
    get C945() {
      return C[945] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62884
      });
    },
    get C946() {
      return C[946] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62884
      });
    },
    get C947() {
      return C[947] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62885
      });
    },
    get C948() {
      return C[948] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62885
      });
    },
    get C949() {
      return C[949] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62776
      });
    },
    get C950() {
      return C[950] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63411
      });
    },
    get C951() {
      return C[951] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63094
      });
    },
    get C952() {
      return C[952] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61987
      });
    },
    get C953() {
      return C[953] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63315
      });
    },
    get C954() {
      return C[954] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57370
      });
    },
    get C955() {
      return C[955] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62171
      });
    },
    get C956() {
      return C[956] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61744
      });
    },
    get C957() {
      return C[957] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62409
      });
    },
    get C958() {
      return C[958] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62777
      });
    },
    get C959() {
      return C[959] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61745
      });
    },
    get C960() {
      return C[960] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62992
      });
    },
    get C961() {
      return C[961] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62410
      });
    },
    get C962() {
      return C[962] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61544
      });
    },
    get C963() {
      return C[963] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61526
      });
    },
    get C964() {
      return C[964] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61766
      });
    },
    get C965() {
      return C[965] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61766
      });
    },
    get C966() {
      return C[966] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63413
      });
    },
    get C967() {
      return C[967] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62411
      });
    },
    get C968() {
      return C[968] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62089
      });
    },
    get C969() {
      return C[969] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57430
      });
    },
    get C970() {
      return C[970] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62412
      });
    },
    get C971() {
      return C[971] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61707
      });
    },
    get C972() {
      return C[972] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62413
      });
    },
    get C973() {
      return C[973] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62085
      });
    },
    get C974() {
      return C[974] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62416
      });
    },
    get C975() {
      return C[975] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61654
      });
    },
    get C976() {
      return C[976] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62417
      });
    },
    get C977() {
      return C[977] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62417
      });
    },
    get C978() {
      return C[978] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62778
      });
    },
    get C979() {
      return C[979] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62779
      });
    },
    get C980() {
      return C[980] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62780
      });
    },
    get C981() {
      return C[981] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62781
      });
    },
    get C982() {
      return C[982] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62886
      });
    },
    get C983() {
      return C[983] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61830
      });
    },
    get C984() {
      return C[984] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61830
      });
    },
    get C985() {
      return C[985] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62887
      });
    },
    get C986() {
      return C[986] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63096
      });
    },
    get C987() {
      return C[987] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61980
      });
    },
    get C988() {
      return C[988] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63228
      });
    },
    get C989() {
      return C[989] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63692
      });
    },
    get C990() {
      return C[990] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62021
      });
    },
    get C991() {
      return C[991] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63414
      });
    },
    get C992() {
      return C[992] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61441
      });
    },
    get C993() {
      return C[993] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62418
      });
    },
    get C994() {
      return C[994] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62994
      });
    },
    get C995() {
      return C[995] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63231
      });
    },
    get C996() {
      return C[996] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61996
      });
    },
    get C997() {
      return C[997] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61930
      });
    },
    get C998() {
      return C[998] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61930
      });
    },
    get C999() {
      return C[999] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62888
      });
    },
    get C1000() {
      return C[1000] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62489
      });
    },
    get C1001() {
      return C[1001] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62419
      });
    },
    get C1002() {
      return C[1002] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62782
      });
    },
    get C1003() {
      return C[1003] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62593
      });
    },
    get C1004() {
      return C[1004] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62420
      });
    },
    get C1005() {
      return C[1005] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62421
      });
    },
    get C1006() {
      return C[1006] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62422
      });
    },
    get C1007() {
      return C[1007] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62023
      });
    },
    get C1008() {
      return C[1008] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62023
      });
    },
    get C1009() {
      return C[1009] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62024
      });
    },
    get C1010() {
      return C[1010] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62024
      });
    },
    get C1011() {
      return C[1011] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57474
      });
    },
    get C1012() {
      return C[1012] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62051
      });
    },
    get C1013() {
      return C[1013] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62052
      });
    },
    get C1014() {
      return C[1014] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62995
      });
    },
    get C1015() {
      return C[1015] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62736
      });
    },
    get C1016() {
      return C[1016] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63097
      });
    },
    get C1017() {
      return C[1017] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62013
      });
    },
    get C1018() {
      return C[1018] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61851
      });
    },
    get C1019() {
      return C[1019] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62058
      });
    },
    get C1020() {
      return C[1020] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62012
      });
    },
    get C1021() {
      return C[1021] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63698
      });
    },
    get C1022() {
      return C[1022] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62490
      });
    },
    get C1023() {
      return C[1023] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63232
      });
    },
    get C1024() {
      return C[1024] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61499
      });
    },
    get C1025() {
      return C[1025] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62423
      });
    },
    get C1026() {
      return C[1026] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61836
      });
    },
    get C1027() {
      return C[1027] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63509
      });
    },
    get C1028() {
      return C[1028] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61948
      });
    },
    get C1029() {
      return C[1029] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62890
      });
    },
    get C1030() {
      return C[1030] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62783
      });
    },
    get C1031() {
      return C[1031] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62424
      });
    },
    get C1032() {
      return C[1032] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62594
      });
    },
    get C1033() {
      return C[1033] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61912
      });
    },
    get C1034() {
      return C[1034] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61912
      });
    },
    get C1035() {
      return C[1035] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61638
      });
    },
    get C1036() {
      return C[1036] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62669
      });
    },
    get C1037() {
      return C[1037] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61917
      });
    },
    get C1038() {
      return C[1038] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62784
      });
    },
    get C1039() {
      return C[1039] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62891
      });
    },
    get C1040() {
      return C[1040] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63099
      });
    },
    get C1041() {
      return C[1041] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61674
      });
    },
    get C1042() {
      return C[1042] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62425
      });
    },
    get C1043() {
      return C[1043] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61516
      });
    },
    get C1044() {
      return C[1044] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62091
      });
    },
    get C1045() {
      return C[1045] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62091
      });
    },
    get C1046() {
      return C[1046] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61872
      });
    },
    get C1047() {
      return C[1047] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61933
      });
    },
    get C1048() {
      return C[1048] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63100
      });
    },
    get C1049() {
      return C[1049] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62212
      });
    },
    get C1050() {
      return C[1050] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62213
      });
    },
    get C1051() {
      return C[1051] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62892
      });
    },
    get C1052() {
      return C[1052] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62893
      });
    },
    get C1053() {
      return C[1053] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61771
      });
    },
    get C1054() {
      return C[1054] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62211
      });
    },
    get C1055() {
      return C[1055] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62894
      });
    },
    get C1056() {
      return C[1056] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63236
      });
    },
    get C1057() {
      return C[1057] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57448
      });
    },
    get C1058() {
      return C[1058] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62670
      });
    },
    get C1059() {
      return C[1059] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63510
      });
    },
    get C1060() {
      return C[1060] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57475
      });
    },
    get C1061() {
      return C[1061] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62101
      });
    },
    get C1062() {
      return C[1062] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62785
      });
    },
    get C1063() {
      return C[1063] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62426
      });
    },
    get C1064() {
      return C[1064] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63318
      });
    },
    get C1065() {
      return C[1065] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62427
      });
    },
    get C1066() {
      return C[1066] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62428
      });
    },
    get C1067() {
      return C[1067] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62737
      });
    },
    get C1068() {
      return C[1068] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61589
      });
    },
    get C1069() {
      return C[1069] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63609
      });
    },
    get C1070() {
      return C[1070] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62429
      });
    },
    get C1071() {
      return C[1071] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61592
      });
    },
    get C1072() {
      return C[1072] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63611
      });
    },
    get C1073() {
      return C[1073] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62112
      });
    },
    get C1074() {
      return C[1074] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63612
      });
    },
    get C1075() {
      return C[1075] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62551
      });
    },
    get C1076() {
      return C[1076] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62126
      });
    },
    get C1077() {
      return C[1077] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61864
      });
    },
    get C1078() {
      return C[1078] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62693
      });
    },
    get C1079() {
      return C[1079] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61863
      });
    },
    get C1080() {
      return C[1080] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57374
      });
    },
    get C1081() {
      return C[1081] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62675
      });
    },
    get C1082() {
      return C[1082] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62596
      });
    },
    get C1083() {
      return C[1083] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61650
      });
    },
    get C1084() {
      return C[1084] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62001
      });
    },
    get C1085() {
      return C[1085] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61651
      });
    },
    get C1086() {
      return C[1086] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63512
      });
    },
    get C1087() {
      return C[1087] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63103
      });
    },
    get C1088() {
      return C[1088] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61554
      });
    },
    get C1089() {
      return C[1089] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62895
      });
    },
    get C1090() {
      return C[1090] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62896
      });
    },
    get C1091() {
      return C[1091] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57449
      });
    },
    get C1092() {
      return C[1092] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61515
      });
    },
    get C1093() {
      return C[1093] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61764
      });
    },
    get C1094() {
      return C[1094] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61764
      });
    },
    get C1095() {
      return C[1095] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62431
      });
    },
    get C1096() {
      return C[1096] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61926
      });
    },
    get C1097() {
      return C[1097] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61543
      });
    },
    get C1098() {
      return C[1098] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61525
      });
    },
    get C1099() {
      return C[1099] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61694
      });
    },
    get C1100() {
      return C[1100] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61694
      });
    },
    get C1101() {
      return C[1101] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62158
      });
    },
    get C1102() {
      return C[1102] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63105
      });
    },
    get C1103() {
      return C[1103] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63106
      });
    },
    get C1104() {
      return C[1104] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62206
      });
    },
    get C1105() {
      return C[1105] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63322
      });
    },
    get C1106() {
      return C[1106] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63001
      });
    },
    get C1107() {
      return C[1107] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62432
      });
    },
    get C1108() {
      return C[1108] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61780
      });
    },
    get C1109() {
      return C[1109] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61457
      });
    },
    get C1110() {
      return C[1110] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63107
      });
    },
    get C1111() {
      return C[1111] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63108
      });
    },
    get C1112() {
      return C[1112] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62897
      });
    },
    get C1113() {
      return C[1113] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62597
      });
    },
    get C1114() {
      return C[1114] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62598
      });
    },
    get C1115() {
      return C[1115] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61487
      });
    },
    get C1116() {
      return C[1116] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62599
      });
    },
    get C1117() {
      return C[1117] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62088
      });
    },
    get C1118() {
      return C[1118] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62786
      });
    },
    get C1119() {
      return C[1119] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57450
      });
    },
    get C1120() {
      return C[1120] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57451
      });
    },
    get C1121() {
      return C[1121] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62433
      });
    },
    get C1122() {
      return C[1122] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61742
      });
    },
    get C1123() {
      return C[1123] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62434
      });
    },
    get C1124() {
      return C[1124] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61910
      });
    },
    get C1125() {
      return C[1125] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61481
      });
    },
    get C1126() {
      return C[1126] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61736
      });
    },
    get C1127() {
      return C[1127] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61529
      });
    },
    get C1128() {
      return C[1128] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61529
      });
    },
    get C1129() {
      return C[1129] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62552
      });
    },
    get C1130() {
      return C[1130] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62553
      });
    },
    get C1131() {
      return C[1131] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62148
      });
    },
    get C1132() {
      return C[1132] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61709
      });
    },
    get C1133() {
      return C[1133] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61710
      });
    },
    get C1134() {
      return C[1134] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63111
      });
    },
    get C1135() {
      return C[1135] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62711
      });
    },
    get C1136() {
      return C[1136] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63417
      });
    },
    get C1137() {
      return C[1137] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63418
      });
    },
    get C1138() {
      return C[1138] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63323
      });
    },
    get C1139() {
      return C[1139] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61556
      });
    },
    get C1140() {
      return C[1140] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63419
      });
    },
    get C1141() {
      return C[1141] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62169
      });
    },
    get C1142() {
      return C[1142] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62491
      });
    },
    get C1143() {
      return C[1143] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63325
      });
    },
    get C1144() {
      return C[1144] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62677
      });
    },
    get C1145() {
      return C[1145] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61904
      });
    },
    get C1146() {
      return C[1146] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62787
      });
    },
    get C1147() {
      return C[1147] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63705
      });
    },
    get C1148() {
      return C[1148] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61880
      });
    },
    get C1149() {
      return C[1149] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62435
      });
    },
    get C1150() {
      return C[1150] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61857
      });
    },
    get C1151() {
      return C[1151] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62081
      });
    },
    get C1152() {
      return C[1152] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61858
      });
    },
    get C1153() {
      return C[1153] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63420
      });
    },
    get C1154() {
      return C[1154] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61470
      });
    },
    get C1155() {
      return C[1155] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62201
      });
    },
    get C1156() {
      return C[1156] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62045
      });
    },
    get C1157() {
      return C[1157] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62045
      });
    },
    get C1158() {
      return C[1158] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63613
      });
    },
    get C1159() {
      return C[1159] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61835
      });
    },
    get C1160() {
      return C[1160] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62437
      });
    },
    get C1161() {
      return C[1161] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61730
      });
    },
    get C1162() {
      return C[1162] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62438
      });
    },
    get C1163() {
      return C[1163] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63326
      });
    },
    get C1164() {
      return C[1164] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62712
      });
    },
    get C1165() {
      return C[1165] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62439
      });
    },
    get C1166() {
      return C[1166] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63421
      });
    },
    get C1167() {
      return C[1167] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61561
      });
    },
    get C1168() {
      return C[1168] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62898
      });
    },
    get C1169() {
      return C[1169] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62678
      });
    },
    get C1170() {
      return C[1170] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63243
      });
    },
    get C1171() {
      return C[1171] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61464
      });
    },
    get C1172() {
      return C[1172] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62788
      });
    },
    get C1173() {
      return C[1173] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61749
      });
    },
    get C1174() {
      return C[1174] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62440
      });
    },
    get C1175() {
      return C[1175] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62441
      });
    },
    get C1176() {
      return C[1176] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62679
      });
    },
    get C1177() {
      return C[1177] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61598
      });
    },
    get C1178() {
      return C[1178] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61763
      });
    },
    get C1179() {
      return C[1179] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61784
      });
    },
    get C1180() {
      return C[1180] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62789
      });
    },
    get C1181() {
      return C[1181] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62790
      });
    },
    get C1182() {
      return C[1182] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62791
      });
    },
    get C1183() {
      return C[1183] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62792
      });
    },
    get C1184() {
      return C[1184] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63244
      });
    },
    get C1185() {
      return C[1185] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61782
      });
    },
    get C1186() {
      return C[1186] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57466
      });
    },
    get C1187() {
      return C[1187] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62899
      });
    },
    get C1188() {
      return C[1188] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62899
      });
    },
    get C1189() {
      return C[1189] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62900
      });
    },
    get C1190() {
      return C[1190] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62900
      });
    },
    get C1191() {
      return C[1191] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62055
      });
    },
    get C1192() {
      return C[1192] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63547
      });
    },
    get C1193() {
      return C[1193] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62494
      });
    },
    get C1194() {
      return C[1194] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63423
      });
    },
    get C1195() {
      return C[1195] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63424
      });
    },
    get C1196() {
      return C[1196] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61639
      });
    },
    get C1197() {
      return C[1197] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61639
      });
    },
    get C1198() {
      return C[1198] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62442
      });
    },
    get C1199() {
      return C[1199] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62793
      });
    },
    get C1200() {
      return C[1200] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62794
      });
    },
    get C1201() {
      return C[1201] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62090
      });
    },
    get C1202() {
      return C[1202] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63246
      });
    },
    get C1203() {
      return C[1203] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63426
      });
    },
    get C1204() {
      return C[1204] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61442
      });
    },
    get C1205() {
      return C[1205] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63112
      });
    },
    get C1206() {
      return C[1206] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63113
      });
    },
    get C1207() {
      return C[1207] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61456
      });
    },
    get C1208() {
      return C[1208] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61454
      });
    },
    get C1209() {
      return C[1209] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62443
      });
    },
    get C1210() {
      return C[1210] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62680
      });
    },
    get C1211() {
      return C[1211] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62170
      });
    },
    get C1212() {
      return C[1212] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61971
      });
    },
    get C1213() {
      return C[1213] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62003
      });
    },
    get C1214() {
      return C[1214] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62444
      });
    },
    get C1215() {
      return C[1215] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63007
      });
    },
    get C1216() {
      return C[1216] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61540
      });
    },
    get C1217() {
      return C[1217] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61920
      });
    },
    get C1218() {
      return C[1218] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61921
      });
    },
    get C1219() {
      return C[1219] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61773
      });
    },
    get C1220() {
      return C[1220] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61773
      });
    },
    get C1221() {
      return C[1221] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61963
      });
    },
    get C1222() {
      return C[1222] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62445
      });
    },
    get C1223() {
      return C[1223] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57452
      });
    },
    get C1224() {
      return C[1224] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61978
      });
    },
    get C1225() {
      return C[1225] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62603
      });
    },
    get C1226() {
      return C[1226] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61972
      });
    },
    get C1227() {
      return C[1227] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62795
      });
    },
    get C1228() {
      return C[1228] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57431
      });
    },
    get C1229() {
      return C[1229] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62096
      });
    },
    get C1230() {
      return C[1230] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62097
      });
    },
    get C1231() {
      return C[1231] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61562
      });
    },
    get C1232() {
      return C[1232] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62901
      });
    },
    get C1233() {
      return C[1233] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62156
      });
    },
    get C1234() {
      return C[1234] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62902
      });
    },
    get C1235() {
      return C[1235] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62681
      });
    },
    get C1236() {
      return C[1236] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62198
      });
    },
    get C1237() {
      return C[1237] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62119
      });
    },
    get C1238() {
      return C[1238] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62197
      });
    },
    get C1239() {
      return C[1239] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61458
      });
    },
    get C1240() {
      return C[1240] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62903
      });
    },
    get C1241() {
      return C[1241] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63428
      });
    },
    get C1242() {
      return C[1242] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61973
      });
    },
    get C1243() {
      return C[1243] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57453
      });
    },
    get C1244() {
      return C[1244] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62446
      });
    },
    get C1245() {
      return C[1245] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61672
      });
    },
    get C1246() {
      return C[1246] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62738
      });
    },
    get C1247() {
      return C[1247] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63429
      });
    },
    get C1248() {
      return C[1248] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63430
      });
    },
    get C1249() {
      return C[1249] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63433
      });
    },
    get C1250() {
      return C[1250] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63434
      });
    },
    get C1251() {
      return C[1251] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62796
      });
    },
    get C1252() {
      return C[1252] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63252
      });
    },
    get C1253() {
      return C[1253] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61974
      });
    },
    get C1254() {
      return C[1254] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61822
      });
    },
    get C1255() {
      return C[1255] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61848
      });
    },
    get C1256() {
      return C[1256] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62447
      });
    },
    get C1257() {
      return C[1257] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63253
      });
    },
    get C1258() {
      return C[1258] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63436
      });
    },
    get C1259() {
      return C[1259] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61918
      });
    },
    get C1260() {
      return C[1260] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61927
      });
    },
    get C1261() {
      return C[1261] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61720
      });
    },
    get C1262() {
      return C[1262] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61720
      });
    },
    get C1263() {
      return C[1263] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62904
      });
    },
    get C1264() {
      return C[1264] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62904
      });
    },
    get C1265() {
      return C[1265] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62682
      });
    },
    get C1266() {
      return C[1266] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62682
      });
    },
    get C1267() {
      return C[1267] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63327
      });
    },
    get C1268() {
      return C[1268] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62605
      });
    },
    get C1269() {
      return C[1269] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62797
      });
    },
    get C1270() {
      return C[1270] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63437
      });
    },
    get C1271() {
      return C[1271] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62123
      });
    },
    get C1272() {
      return C[1272] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62124
      });
    },
    get C1273() {
      return C[1273] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62125
      });
    },
    get C1274() {
      return C[1274] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63438
      });
    },
    get C1275() {
      return C[1275] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62172
      });
    },
    get C1276() {
      return C[1276] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62172
      });
    },
    get C1277() {
      return C[1277] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63440
      });
    },
    get C1278() {
      return C[1278] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63442
      });
    },
    get C1279() {
      return C[1279] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57454
      });
    },
    get C1280() {
      return C[1280] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63126
      });
    },
    get C1281() {
      return C[1281] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62906
      });
    },
    get C1282() {
      return C[1282] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61660
      });
    },
    get C1283() {
      return C[1283] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61789
      });
    },
    get C1284() {
      return C[1284] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63617
      });
    },
    get C1285() {
      return C[1285] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61790
      });
    },
    get C1286() {
      return C[1286] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63618
      });
    },
    get C1287() {
      return C[1287] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61792
      });
    },
    get C1288() {
      return C[1288] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63620
      });
    },
    get C1289() {
      return C[1289] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61793
      });
    },
    get C1290() {
      return C[1290] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63621
      });
    },
    get C1291() {
      return C[1291] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61661
      });
    },
    get C1292() {
      return C[1292] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61794
      });
    },
    get C1293() {
      return C[1293] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63622
      });
    },
    get C1294() {
      return C[1294] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61795
      });
    },
    get C1295() {
      return C[1295] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63623
      });
    },
    get C1296() {
      return C[1296] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61662
      });
    },
    get C1297() {
      return C[1297] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61886
      });
    },
    get C1298() {
      return C[1298] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63443
      });
    },
    get C1299() {
      return C[1299] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62907
      });
    },
    get C1300() {
      return C[1300] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61847
      });
    },
    get C1301() {
      return C[1301] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62451
      });
    },
    get C1302() {
      return C[1302] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63548
      });
    },
    get C1303() {
      return C[1303] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63633
      });
    },
    get C1304() {
      return C[1304] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63255
      });
    },
    get C1305() {
      return C[1305] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61712
      });
    },
    get C1306() {
      return C[1306] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62908
      });
    },
    get C1307() {
      return C[1307] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61884
      });
    },
    get C1308() {
      return C[1308] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62909
      });
    },
    get C1309() {
      return C[1309] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61640
      });
    },
    get C1310() {
      return C[1310] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61640
      });
    },
    get C1311() {
      return C[1311] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62556
      });
    },
    get C1312() {
      return C[1312] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63128
      });
    },
    get C1313() {
      return C[1313] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62910
      });
    },
    get C1314() {
      return C[1314] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61837
      });
    },
    get C1315() {
      return C[1315] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61804
      });
    },
    get C1316() {
      return C[1316] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63554
      });
    },
    get C1317() {
      return C[1317] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62911
      });
    },
    get C1318() {
      return C[1318] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61445
      });
    },
    get C1319() {
      return C[1319] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61445
      });
    },
    get C1320() {
      return C[1320] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63129
      });
    },
    get C1321() {
      return C[1321] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61577
      });
    },
    get C1322() {
      return C[1322] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61577
      });
    },
    get C1323() {
      return C[1323] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62912
      });
    },
    get C1324() {
      return C[1324] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63130
      });
    },
    get C1325() {
      return C[1325] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63009
      });
    },
    get C1326() {
      return C[1326] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62453
      });
    },
    get C1327() {
      return C[1327] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61878
      });
    },
    get C1328() {
      return C[1328] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61879
      });
    },
    get C1329() {
      return C[1329] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62454
      });
    },
    get C1330() {
      return C[1330] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61512
      });
    },
    get C1331() {
      return C[1331] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61521
      });
    },
    get C1332() {
      return C[1332] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61681
      });
    },
    get C1333() {
      return C[1333] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62455
      });
    },
    get C1334() {
      return C[1334] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62025
      });
    },
    get C1335() {
      return C[1335] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62025
      });
    },
    get C1336() {
      return C[1336] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61517
      });
    },
    get C1337() {
      return C[1337] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62093
      });
    },
    get C1338() {
      return C[1338] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62093
      });
    },
    get C1339() {
      return C[1339] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62194
      });
    },
    get C1340() {
      return C[1340] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57455
      });
    },
    get C1341() {
      return C[1341] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62798
      });
    },
    get C1342() {
      return C[1342] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62799
      });
    },
    get C1343() {
      return C[1343] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57456
      });
    },
    get C1344() {
      return C[1344] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57457
      });
    },
    get C1345() {
      return C[1345] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62504
      });
    },
    get C1346() {
      return C[1346] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62800
      });
    },
    get C1347() {
      return C[1347] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61981
      });
    },
    get C1348() {
      return C[1348] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61644
      });
    },
    get C1349() {
      return C[1349] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62505
      });
    },
    get C1350() {
      return C[1350] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62506
      });
    },
    get C1351() {
      return C[1351] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62801
      });
    },
    get C1352() {
      return C[1352] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62456
      });
    },
    get C1353() {
      return C[1353] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61860
      });
    },
    get C1354() {
      return C[1354] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61859
      });
    },
    get C1355() {
      return C[1355] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61740
      });
    },
    get C1356() {
      return C[1356] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62009
      });
    },
    get C1357() {
      return C[1357] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61682
      });
    },
    get C1358() {
      return C[1358] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62913
      });
    },
    get C1359() {
      return C[1359] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61829
      });
    },
    get C1360() {
      return C[1360] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61829
      });
    },
    get C1361() {
      return C[1361] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62173
      });
    },
    get C1362() {
      return C[1362] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61739
      });
    },
    get C1363() {
      return C[1363] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62457
      });
    },
    get C1364() {
      return C[1364] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62914
      });
    },
    get C1365() {
      return C[1365] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62914
      });
    },
    get C1366() {
      return C[1366] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63446
      });
    },
    get C1367() {
      return C[1367] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62915
      });
    },
    get C1368() {
      return C[1368] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63713
      });
    },
    get C1369() {
      return C[1369] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62916
      });
    },
    get C1370() {
      return C[1370] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62917
      });
    },
    get C1371() {
      return C[1371] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63549
      });
    },
    get C1372() {
      return C[1372] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63131
      });
    },
    get C1373() {
      return C[1373] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61473
      });
    },
    get C1374() {
      return C[1374] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62193
      });
    },
    get C1375() {
      return C[1375] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62606
      });
    },
    get C1376() {
      return C[1376] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61646
      });
    },
    get C1377() {
      return C[1377] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62557
      });
    },
    get C1378() {
      return C[1378] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61706
      });
    },
    get C1379() {
      return C[1379] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62458
      });
    },
    get C1380() {
      return C[1380] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62608
      });
    },
    get C1381() {
      return C[1381] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62461
      });
    },
    get C1382() {
      return C[1382] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61483
      });
    },
    get C1383() {
      return C[1383] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61484
      });
    },
    get C1384() {
      return C[1384] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62683
      });
    },
    get C1385() {
      return C[1385] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61614
      });
    },
    get C1386() {
      return C[1386] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61882
      });
    },
    get C1387() {
      return C[1387] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62713
      });
    },
    get C1388() {
      return C[1388] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63022
      });
    },
    get C1389() {
      return C[1389] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63023
      });
    },
    get C1390() {
      return C[1390] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62150
      });
    },
    get C1391() {
      return C[1391] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62462
      });
    },
    get C1392() {
      return C[1392] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63337
      });
    },
    get C1393() {
      return C[1393] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63339
      });
    },
    get C1394() {
      return C[1394] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61909
      });
    },
    get C1395() {
      return C[1395] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63447
      });
    },
    get C1396() {
      return C[1396] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61728
      });
    },
    get C1397() {
      return C[1397] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61492
      });
    },
    get C1398() {
      return C[1398] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61493
      });
    },
    get C1399() {
      return C[1399] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61450
      });
    },
    get C1400() {
      return C[1400] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61449
      });
    },
    get C1401() {
      return C[1401] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61451
      });
    },
    get C1402() {
      return C[1402] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63133
      });
    },
    get C1403() {
      return C[1403] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63024
      });
    },
    get C1404() {
      return C[1404] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62918
      });
    },
    get C1405() {
      return C[1405] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62130
      });
    },
    get C1406() {
      return C[1406] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62609
      });
    },
    get C1407() {
      return C[1407] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62155
      });
    },
    get C1408() {
      return C[1408] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62151
      });
    },
    get C1409() {
      return C[1409] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62153
      });
    },
    get C1410() {
      return C[1410] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62154
      });
    },
    get C1411() {
      return C[1411] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62152
      });
    },
    get C1412() {
      return C[1412] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63281
      });
    },
    get C1413() {
      return C[1413] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61797
      });
    },
    get C1414() {
      return C[1414] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61797
      });
    },
    get C1415() {
      return C[1415] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61796
      });
    },
    get C1416() {
      return C[1416] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61796
      });
    },
    get C1417() {
      return C[1417] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61581
      });
    },
    get C1418() {
      return C[1418] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62463
      });
    },
    get C1419() {
      return C[1419] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57467
      });
    },
    get C1420() {
      return C[1420] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61453
      });
    },
    get C1421() {
      return C[1421] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61527
      });
    },
    get C1422() {
      return C[1422] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61527
      });
    },
    get C1423() {
      return C[1423] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61507
      });
    },
    get C1424() {
      return C[1424] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62919
      });
    },
    get C1425() {
      return C[1425] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62920
      });
    },
    get C1426() {
      return C[1426] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62920
      });
    },
    get C1427() {
      return C[1427] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61956
      });
    },
    get C1428() {
      return C[1428] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61957
      });
    },
    get C1429() {
      return C[1429] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63448
      });
    },
    get C1430() {
      return C[1430] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63262
      });
    },
    get C1431() {
      return C[1431] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57458
      });
    },
    get C1432() {
      return C[1432] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62802
      });
    },
    get C1433() {
      return C[1433] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63449
      });
    },
    get C1434() {
      return C[1434] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62921
      });
    },
    get C1435() {
      return C[1435] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63136
      });
    },
    get C1436() {
      return C[1436] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63137
      });
    },
    get C1437() {
      return C[1437] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63266
      });
    },
    get C1438() {
      return C[1438] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62739
      });
    },
    get C1439() {
      return C[1439] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62044
      });
    },
    get C1440() {
      return C[1440] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63031
      });
    },
    get C1441() {
      return C[1441] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57409
      });
    },
    get C1442() {
      return C[1442] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62008
      });
    },
    get C1443() {
      return C[1443] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63450
      });
    },
    get C1444() {
      return C[1444] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61988
      });
    },
    get C1445() {
      return C[1445] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61989
      });
    },
    get C1446() {
      return C[1446] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61944
      });
    },
    get C1447() {
      return C[1447] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62189
      });
    },
    get C1448() {
      return C[1448] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62189
      });
    },
    get C1449() {
      return C[1449] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63529
      });
    },
    get C1450() {
      return C[1450] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63530
      });
    },
    get C1451() {
      return C[1451] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61883
      });
    },
    get C1452() {
      return C[1452] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61825
      });
    },
    get C1453() {
      return C[1453] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61585
      });
    },
    get C1454() {
      return C[1454] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61649
      });
    },
    get C1455() {
      return C[1455] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62686
      });
    },
    get C1456() {
      return C[1456] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63035
      });
    },
    get C1457() {
      return C[1457] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62687
      });
    },
    get C1458() {
      return C[1458] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63036
      });
    },
    get C1459() {
      return C[1459] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62803
      });
    },
    get C1460() {
      return C[1460] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61924
      });
    },
    get C1461() {
      return C[1461] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61811
      });
    },
    get C1462() {
      return C[1462] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61812
      });
    },
    get C1463() {
      return C[1463] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62060
      });
    },
    get C1464() {
      return C[1464] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61928
      });
    },
    get C1465() {
      return C[1465] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61593
      });
    },
    get C1466() {
      return C[1466] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61569
      });
    },
    get C1467() {
      return C[1467] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62507
      });
    },
    get C1468() {
      return C[1468] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62466
      });
    },
    get C1469() {
      return C[1469] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63455
      });
    },
    get C1470() {
      return C[1470] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62467
      });
    },
    get C1471() {
      return C[1471] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63720
      });
    },
    get C1472() {
      return C[1472] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61673
      });
    },
    get C1473() {
      return C[1473] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62922
      });
    },
    get C1474() {
      return C[1474] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57476
      });
    },
    get C1475() {
      return C[1475] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61645
      });
    },
    get C1476() {
      return C[1476] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61666
      });
    },
    get C1477() {
      return C[1477] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62186
      });
    },
    get C1478() {
      return C[1478] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62468
      });
    },
    get C1479() {
      return C[1479] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57417
      });
    },
    get C1480() {
      return C[1480] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62106
      });
    },
    get C1481() {
      return C[1481] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61852
      });
    },
    get C1482() {
      return C[1482] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61735
      });
    },
    get C1483() {
      return C[1483] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61596
      });
    },
    get C1484() {
      return C[1484] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61758
      });
    },
    get C1485() {
      return C[1485] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57468
      });
    },
    get C1486() {
      return C[1486] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62469
      });
    },
    get C1487() {
      return C[1487] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61587
      });
    },
    get C1488() {
      return C[1488] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63456
      });
    },
    get C1489() {
      return C[1489] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62087
      });
    },
    get C1490() {
      return C[1490] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61447
      });
    },
    get C1491() {
      return C[1491] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 61447
      });
    },
    get C1492() {
      return C[1492] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62470
      });
    },
    get C1493() {
      return C[1493] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62714
      });
    },
    get C1494() {
      return C[1494] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62715
      });
    },
    get C1495() {
      return C[1495] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62716
      });
    },
    get C1496() {
      return C[1496] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62141
      });
    },
    get C1497() {
      return C[1497] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62141
      });
    },
    get C1498() {
      return C[1498] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62717
      });
    },
    get C1499() {
      return C[1499] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62718
      });
    },
    get C1500() {
      return C[1500] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62719
      });
    },
    get C1501() {
      return C[1501] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62720
      });
    },
    get C1502() {
      return C[1502] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62721
      });
    },
    get C1503() {
      return C[1503] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63272
      });
    },
    get C1504() {
      return C[1504] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62722
      });
    },
    get C1505() {
      return C[1505] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61680
      });
    },
    get C1506() {
      return C[1506] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62723
      });
    },
    get C1507() {
      return C[1507] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62724
      });
    },
    get C1508() {
      return C[1508] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63535
      });
    },
    get C1509() {
      return C[1509] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62004
      });
    },
    get C1510() {
      return C[1510] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61979
      });
    },
    get C1511() {
      return C[1511] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62725
      });
    },
    get C1512() {
      return C[1512] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62726
      });
    },
    get C1513() {
      return C[1513] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62727
      });
    },
    get C1514() {
      return C[1514] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62728
      });
    },
    get C1515() {
      return C[1515] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62005
      });
    },
    get C1516() {
      return C[1516] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61632
      });
    },
    get C1517() {
      return C[1517] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62729
      });
    },
    get C1518() {
      return C[1518] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57459
      });
    },
    get C1519() {
      return C[1519] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63457
      });
    },
    get C1520() {
      return C[1520] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62471
      });
    },
    get C1521() {
      return C[1521] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62181
      });
    },
    get C1522() {
      return C[1522] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62183
      });
    },
    get C1523() {
      return C[1523] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62472
      });
    },
    get C1524() {
      return C[1524] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62923
      });
    },
    get C1525() {
      return C[1525] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61985
      });
    },
    get C1526() {
      return C[1526] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61990
      });
    },
    get C1527() {
      return C[1527] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61992
      });
    },
    get C1528() {
      return C[1528] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57477
      });
    },
    get C1529() {
      return C[1529] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57478
      });
    },
    get C1530() {
      return C[1530] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62007
      });
    },
    get C1531() {
      return C[1531] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62121
      });
    },
    get C1532() {
      return C[1532] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62122
      });
    },
    get C1533() {
      return C[1533] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62610
      });
    },
    get C1534() {
      return C[1534] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62611
      });
    },
    get C1535() {
      return C[1535] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62473
      });
    },
    get C1536() {
      return C[1536] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61501
      });
    },
    get C1537() {
      return C[1537] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62690
      });
    },
    get C1538() {
      return C[1538] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63143
      });
    },
    get C1539() {
      return C[1539] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62474
      });
    },
    get C1540() {
      return C[1540] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61844
      });
    },
    get C1541() {
      return C[1541] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62077
      });
    },
    get C1542() {
      return C[1542] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61898
      });
    },
    get C1543() {
      return C[1543] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57460
      });
    },
    get C1544() {
      return C[1544] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57461
      });
    },
    get C1545() {
      return C[1545] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 57462
      });
    },
    get C1546() {
      return C[1546] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61833
      });
    },
    get C1547() {
      return C[1547] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62475
      });
    },
    get C1548() {
      return C[1548] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63639
      });
    },
    get C1549() {
      return C[1549] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62559
      });
    },
    get C1550() {
      return C[1550] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61479
      });
    },
    get C1551() {
      return C[1551] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63145
      });
    },
    get C1552() {
      return C[1552] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61478
      });
    },
    get C1553() {
      return C[1553] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61480
      });
    },
    get C1554() {
      return C[1554] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63346
      });
    },
    get C1555() {
      return C[1555] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63273
      });
    },
    get C1556() {
      return C[1556] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62495
      });
    },
    get C1557() {
      return C[1557] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62804
      });
    },
    get C1558() {
      return C[1558] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62805
      });
    },
    get C1559() {
      return C[1559] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62612
      });
    },
    get C1560() {
      return C[1560] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57479
      });
    },
    get C1561() {
      return C[1561] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63347
      });
    },
    get C1562() {
      return C[1562] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63550
      });
    },
    get C1563() {
      return C[1563] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63551
      });
    },
    get C1564() {
      return C[1564] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62924
      });
    },
    get C1565() {
      return C[1565] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61834
      });
    },
    get C1566() {
      return C[1566] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62614
      });
    },
    get C1567() {
      return C[1567] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62925
      });
    },
    get C1568() {
      return C[1568] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61911
      });
    },
    get C1569() {
      return C[1569] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62002
      });
    },
    get C1570() {
      return C[1570] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62476
      });
    },
    get C1571() {
      return C[1571] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61843
      });
    },
    get C1572() {
      return C[1572] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62477
      });
    },
    get C1573() {
      return C[1573] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61931
      });
    },
    get C1574() {
      return C[1574] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62054
      });
    },
    get C1575() {
      return C[1575] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63278
      });
    },
    get C1576() {
      return C[1576] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62480
      });
    },
    get C1577() {
      return C[1577] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62480
      });
    },
    get C1578() {
      return C[1578] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62160
      });
    },
    get C1579() {
      return C[1579] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62160
      });
    },
    get C1580() {
      return C[1580] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62161
      });
    },
    get C1581() {
      return C[1581] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62161
      });
    },
    get C1582() {
      return C[1582] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62162
      });
    },
    get C1583() {
      return C[1583] = dart.const({
        __proto__: icon_data$.IconDataRegular.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeRegular",
        [IconData_codePoint]: 62162
      });
    },
    get C1584() {
      return C[1584] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61818
      });
    },
    get C1585() {
      return C[1585] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63279
      });
    },
    get C1586() {
      return C[1586] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62691
      });
    },
    get C1587() {
      return C[1587] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62926
      });
    },
    get C1588() {
      return C[1588] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62927
      });
    },
    get C1589() {
      return C[1589] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63280
      });
    },
    get C1590() {
      return C[1590] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 57480
      });
    },
    get C1591() {
      return C[1591] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62740
      });
    },
    get C1592() {
      return C[1592] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61785
      });
    },
    get C1593() {
      return C[1593] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61850
      });
    },
    get C1594() {
      return C[1594] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62481
      });
    },
    get C1595() {
      return C[1595] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62103
      });
    },
    get C1596() {
      return C[1596] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62174
      });
    },
    get C1597() {
      return C[1597] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62104
      });
    },
    get C1598() {
      return C[1598] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62436
      });
    },
    get C1599() {
      return C[1599] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61613
      });
    },
    get C1600() {
      return C[1600] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62615
      });
    },
    get C1601() {
      return C[1601] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62482
      });
    },
    get C1602() {
      return C[1602] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61800
      });
    },
    get C1603() {
      return C[1603] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61801
      });
    },
    get C1604() {
      return C[1604] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62011
      });
    },
    get C1605() {
      return C[1605] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61854
      });
    },
    get C1606() {
      return C[1606] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63552
      });
    },
    get C1607() {
      return C[1607] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62483
      });
    },
    get C1608() {
      return C[1608] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62484
      });
    },
    get C1609() {
      return C[1609] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63459
      });
    },
    get C1610() {
      return C[1610] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61929
      });
    },
    get C1611() {
      return C[1611] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 61783
      });
    },
    get C1612() {
      return C[1612] = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 63149
      });
    },
    get C1613() {
      return C[1613] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62129
      });
    },
    get C1614() {
      return C[1614] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 61799
      });
    },
    get C1615() {
      return C[1615] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 62513
      });
    },
    get C1616() {
      return C[1616] = dart.const({
        __proto__: icon_data$.IconDataBrands.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeBrands",
        [IconData_codePoint]: 63039
      });
    }
  }, false);
  var C = Array(1617).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/font_awesome_flutter-9.2.0/lib/src/fa_icon.dart",
    "package:font_awesome_flutter/src/fa_icon.dart",
    "package:font_awesome_flutter/font_awesome_flutter.dart"
  ];
  var icon$ = dart.privateName(fa_icon, "FaIcon.icon");
  var size$ = dart.privateName(fa_icon, "FaIcon.size");
  var color$ = dart.privateName(fa_icon, "FaIcon.color");
  var semanticLabel$ = dart.privateName(fa_icon, "FaIcon.semanticLabel");
  var textDirection$ = dart.privateName(fa_icon, "FaIcon.textDirection");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  fa_icon.FaIcon = class FaIcon extends framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get semanticLabel() {
      return this[semanticLabel$];
    }
    set semanticLabel(value) {
      super.semanticLabel = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    static ['_#new#tearOff'](icon, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new fa_icon.FaIcon.new(icon, {key: key, size: size, color: color, semanticLabel: semanticLabel, textDirection: textDirection, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2;
      if (!(this.textDirection != null || debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, I[0], 81, 12, "this.textDirection != null || debugCheckHasDirectionality(context)");
      let textDirection = (t0 = this.textDirection, t0 == null ? basic.Directionality.of(context) : t0);
      let iconTheme = icon_theme.IconTheme.of(context);
      let iconSize = (t0$ = this.size, t0$ == null ? iconTheme.size : t0$);
      if (this.icon == null) {
        return new basic.Semantics.new({label: this.semanticLabel, child: new basic.SizedBox.new({width: iconSize, height: iconSize, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
      }
      let iconOpacity = (t0$0 = iconTheme.opacity, t0$0 == null ? 1.0 : t0$0);
      let iconColor = (t0$1 = this.color, t0$1 == null ? dart.nullCheck(iconTheme.color) : t0$1);
      if (iconOpacity !== 1.0) iconColor = iconColor.withOpacity(iconColor.opacity * iconOpacity);
      let iconWidget = new basic.RichText.new({overflow: text_painter.TextOverflow.visible, textDirection: textDirection, text: new text_span.TextSpan.new({text: core.String.fromCharCode(dart.nullCheck(this.icon).codePoint), style: new text_style.TextStyle.new({inherit: false, color: iconColor, fontSize: iconSize, fontFamily: dart.nullCheck(this.icon).fontFamily, package: dart.nullCheck(this.icon).fontPackage})}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
      if (dart.nullCheck(this.icon).matchTextDirection) {
        switch (textDirection) {
          case C[5] || CT.C5:
            {
              iconWidget = new basic.Transform.new({transform: (t0$2 = vector_math_64.Matrix4.identity(), (() => {
                  t0$2.scale(-1.0, 1.0, 1.0);
                  return t0$2;
                })()), alignment: alignment.Alignment.center, transformHitTests: false, child: iconWidget, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
              break;
            }
          case C[6] || CT.C6:
            {
              break;
            }
        }
      }
      return new basic.Semantics.new({label: this.semanticLabel, child: new basic.ExcludeSemantics.new({child: iconWidget, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new icon_data.IconDataProperty.new("icon", this.icon, {ifNull: "<empty>", showName: false}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
    }
  };
  (fa_icon.FaIcon.new = function(icon, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[size$] = size;
    this[color$] = color;
    this[semanticLabel$] = semanticLabel;
    this[textDirection$] = textDirection;
    if (!(icon != null)) dart.assertFailed(null, I[0], 26, 16, "icon != null");
    fa_icon.FaIcon.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fa_icon.FaIcon.prototype;
  dart.addTypeTests(fa_icon.FaIcon);
  dart.addTypeCaches(fa_icon.FaIcon);
  dart.setMethodSignature(fa_icon.FaIcon, () => ({
    __proto__: dart.getMethods(fa_icon.FaIcon.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(fa_icon.FaIcon, I[1]);
  dart.setFieldSignature(fa_icon.FaIcon, () => ({
    __proto__: dart.getFields(fa_icon.FaIcon.__proto__),
    icon: dart.finalFieldType(dart.nullable(icon_data.IconData)),
    size: dart.finalFieldType(dart.nullable(core.double)),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    semanticLabel: dart.finalFieldType(dart.nullable(core.String)),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection))
  }));
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  font_awesome_flutter.FontAwesomeIcons = class FontAwesomeIcons extends core.Object {
    static ['_#new#tearOff']() {
      return new font_awesome_flutter.FontAwesomeIcons.new();
    }
  };
  (font_awesome_flutter.FontAwesomeIcons.new = function() {
    ;
  }).prototype = font_awesome_flutter.FontAwesomeIcons.prototype;
  dart.addTypeTests(font_awesome_flutter.FontAwesomeIcons);
  dart.addTypeCaches(font_awesome_flutter.FontAwesomeIcons);
  dart.setLibraryUri(font_awesome_flutter.FontAwesomeIcons, I[2]);
  dart.setStaticFieldSignature(font_awesome_flutter.FontAwesomeIcons, () => ['fiveHundredPx', 'accessibleIcon', 'accusoft', 'acquisitionsIncorporated', 'ad', 'solidAddressBook', 'addressBook', 'solidAddressCard', 'addressCard', 'adjust', 'adn', 'adversal', 'affiliatetheme', 'airFreshener', 'airbnb', 'algolia', 'alignCenter', 'alignJustify', 'alignLeft', 'alignRight', 'alipay', 'allergies', 'amazon', 'amazonPay', 'ambulance', 'americanSignLanguageInterpreting', 'amilia', 'anchor', 'android', 'angellist', 'angleDoubleDown', 'angleDoubleLeft', 'angleDoubleRight', 'angleDoubleUp', 'angleDown', 'angleLeft', 'angleRight', 'angleUp', 'solidAngry', 'angry', 'angrycreative', 'angular', 'ankh', 'appStore', 'appStoreIos', 'apper', 'apple', 'appleAlt', 'applePay', 'archive', 'archway', 'solidArrowAltCircleDown', 'arrowAltCircleDown', 'solidArrowAltCircleLeft', 'arrowAltCircleLeft', 'solidArrowAltCircleRight', 'arrowAltCircleRight', 'solidArrowAltCircleUp', 'arrowAltCircleUp', 'arrowCircleDown', 'arrowCircleLeft', 'arrowCircleRight', 'arrowCircleUp', 'arrowDown', 'arrowLeft', 'arrowRight', 'arrowUp', 'arrowsAlt', 'arrowsAltH', 'arrowsAltV', 'artstation', 'assistiveListeningSystems', 'asterisk', 'asymmetrik', 'at', 'atlas', 'atlassian', 'atom', 'audible', 'audioDescription', 'autoprefixer', 'avianex', 'aviato', 'award', 'aws', 'baby', 'babyCarriage', 'backspace', 'backward', 'bacon', 'bacteria', 'bacterium', 'bahai', 'balanceScale', 'balanceScaleLeft', 'balanceScaleRight', 'ban', 'bandAid', 'bandcamp', 'barcode', 'bars', 'baseballBall', 'basketballBall', 'bath', 'batteryEmpty', 'batteryFull', 'batteryHalf', 'batteryQuarter', 'batteryThreeQuarters', 'battleNet', 'bed', 'beer', 'behance', 'behanceSquare', 'solidBell', 'bell', 'solidBellSlash', 'bellSlash', 'bezierCurve', 'bible', 'bicycle', 'biking', 'bimobject', 'binoculars', 'biohazard', 'birthdayCake', 'bitbucket', 'bitcoin', 'bity', 'blackTie', 'blackberry', 'blender', 'blenderPhone', 'blind', 'blog', 'blogger', 'bloggerB', 'bluetooth', 'bluetoothB', 'bold', 'bolt', 'bomb', 'bone', 'bong', 'book', 'bookDead', 'bookMedical', 'bookOpen', 'bookReader', 'solidBookmark', 'bookmark', 'bootstrap', 'borderAll', 'borderNone', 'borderStyle', 'bowlingBall', 'box', 'boxOpen', 'boxTissue', 'boxes', 'braille', 'brain', 'breadSlice', 'briefcase', 'briefcaseMedical', 'broadcastTower', 'broom', 'brush', 'btc', 'buffer', 'bug', 'solidBuilding', 'building', 'bullhorn', 'bullseye', 'burn', 'buromobelexperte', 'bus', 'busAlt', 'businessTime', 'buyNLarge', 'buysellads', 'calculator', 'solidCalendar', 'calendar', 'solidCalendarAlt', 'calendarAlt', 'solidCalendarCheck', 'calendarCheck', 'calendarDay', 'solidCalendarMinus', 'calendarMinus', 'solidCalendarPlus', 'calendarPlus', 'solidCalendarTimes', 'calendarTimes', 'calendarWeek', 'camera', 'cameraRetro', 'campground', 'canadianMapleLeaf', 'candyCane', 'cannabis', 'capsules', 'car', 'carAlt', 'carBattery', 'carCrash', 'carSide', 'caravan', 'caretDown', 'caretLeft', 'caretRight', 'solidCaretSquareDown', 'caretSquareDown', 'solidCaretSquareLeft', 'caretSquareLeft', 'solidCaretSquareRight', 'caretSquareRight', 'solidCaretSquareUp', 'caretSquareUp', 'caretUp', 'carrot', 'cartArrowDown', 'cartPlus', 'cashRegister', 'cat', 'ccAmazonPay', 'ccAmex', 'ccApplePay', 'ccDinersClub', 'ccDiscover', 'ccJcb', 'ccMastercard', 'ccPaypal', 'ccStripe', 'ccVisa', 'centercode', 'centos', 'certificate', 'chair', 'chalkboard', 'chalkboardTeacher', 'chargingStation', 'chartArea', 'solidChartBar', 'chartBar', 'chartLine', 'chartPie', 'check', 'solidCheckCircle', 'checkCircle', 'checkDouble', 'solidCheckSquare', 'checkSquare', 'cheese', 'chess', 'chessBishop', 'chessBoard', 'chessKing', 'chessKnight', 'chessPawn', 'chessQueen', 'chessRook', 'chevronCircleDown', 'chevronCircleLeft', 'chevronCircleRight', 'chevronCircleUp', 'chevronDown', 'chevronLeft', 'chevronRight', 'chevronUp', 'child', 'chrome', 'chromecast', 'church', 'solidCircle', 'circle', 'circleNotch', 'city', 'clinicMedical', 'solidClipboard', 'clipboard', 'clipboardCheck', 'clipboardList', 'solidClock', 'clock', 'solidClone', 'clone', 'solidClosedCaptioning', 'closedCaptioning', 'cloud', 'cloudDownloadAlt', 'cloudMeatball', 'cloudMoon', 'cloudMoonRain', 'cloudRain', 'cloudShowersHeavy', 'cloudSun', 'cloudSunRain', 'cloudUploadAlt', 'cloudflare', 'cloudscale', 'cloudsmith', 'cloudversify', 'cocktail', 'code', 'codeBranch', 'codepen', 'codiepie', 'coffee', 'cog', 'cogs', 'coins', 'columns', 'solidComment', 'comment', 'solidCommentAlt', 'commentAlt', 'commentDollar', 'solidCommentDots', 'commentDots', 'commentMedical', 'commentSlash', 'solidComments', 'comments', 'commentsDollar', 'compactDisc', 'solidCompass', 'compass', 'compress', 'compressAlt', 'compressArrowsAlt', 'conciergeBell', 'confluence', 'connectdevelop', 'contao', 'cookie', 'cookieBite', 'solidCopy', 'copy', 'solidCopyright', 'copyright', 'cottonBureau', 'couch', 'cpanel', 'creativeCommons', 'creativeCommonsBy', 'creativeCommonsNc', 'creativeCommonsNcEu', 'creativeCommonsNcJp', 'creativeCommonsNd', 'creativeCommonsPd', 'creativeCommonsPdAlt', 'creativeCommonsRemix', 'creativeCommonsSa', 'creativeCommonsSampling', 'creativeCommonsSamplingPlus', 'creativeCommonsShare', 'creativeCommonsZero', 'solidCreditCard', 'creditCard', 'criticalRole', 'crop', 'cropAlt', 'cross', 'crosshairs', 'crow', 'crown', 'crutch', 'css3', 'css3Alt', 'cube', 'cubes', 'cut', 'cuttlefish', 'dAndD', 'dAndDBeyond', 'dailymotion', 'dashcube', 'database', 'deaf', 'deezer', 'delicious', 'democrat', 'deploydog', 'deskpro', 'desktop', 'dev', 'deviantart', 'dharmachakra', 'dhl', 'diagnoses', 'diaspora', 'dice', 'diceD20', 'diceD6', 'diceFive', 'diceFour', 'diceOne', 'diceSix', 'diceThree', 'diceTwo', 'digg', 'digitalOcean', 'digitalTachograph', 'directions', 'discord', 'discourse', 'disease', 'divide', 'solidDizzy', 'dizzy', 'dna', 'dochub', 'docker', 'dog', 'dollarSign', 'dolly', 'dollyFlatbed', 'donate', 'doorClosed', 'doorOpen', 'solidDotCircle', 'dotCircle', 'dove', 'download', 'draft2digital', 'draftingCompass', 'dragon', 'drawPolygon', 'dribbble', 'dribbbleSquare', 'dropbox', 'drum', 'drumSteelpan', 'drumstickBite', 'drupal', 'dumbbell', 'dumpster', 'dumpsterFire', 'dungeon', 'dyalog', 'earlybirds', 'ebay', 'edge', 'edgeLegacy', 'solidEdit', 'edit', 'egg', 'eject', 'elementor', 'ellipsisH', 'ellipsisV', 'ello', 'ember', 'empire', 'solidEnvelope', 'envelope', 'solidEnvelopeOpen', 'envelopeOpen', 'envelopeOpenText', 'envelopeSquare', 'envira', 'equals', 'eraser', 'erlang', 'ethereum', 'ethernet', 'etsy', 'euroSign', 'evernote', 'exchangeAlt', 'exclamation', 'exclamationCircle', 'exclamationTriangle', 'expand', 'expandAlt', 'expandArrowsAlt', 'expeditedssl', 'externalLinkAlt', 'externalLinkSquareAlt', 'solidEye', 'eye', 'eyeDropper', 'solidEyeSlash', 'eyeSlash', 'facebook', 'facebookF', 'facebookMessenger', 'facebookSquare', 'fan', 'fantasyFlightGames', 'fastBackward', 'fastForward', 'faucet', 'fax', 'feather', 'featherAlt', 'fedex', 'fedora', 'female', 'fighterJet', 'figma', 'solidFile', 'file', 'solidFileAlt', 'fileAlt', 'solidFileArchive', 'fileArchive', 'solidFileAudio', 'fileAudio', 'solidFileCode', 'fileCode', 'fileContract', 'fileCsv', 'fileDownload', 'solidFileExcel', 'fileExcel', 'fileExport', 'solidFileImage', 'fileImage', 'fileImport', 'fileInvoice', 'fileInvoiceDollar', 'fileMedical', 'fileMedicalAlt', 'solidFilePdf', 'filePdf', 'solidFilePowerpoint', 'filePowerpoint', 'filePrescription', 'fileSignature', 'fileUpload', 'solidFileVideo', 'fileVideo', 'solidFileWord', 'fileWord', 'fill', 'fillDrip', 'film', 'filter', 'fingerprint', 'fire', 'fireAlt', 'fireExtinguisher', 'firefox', 'firefoxBrowser', 'firstAid', 'firstOrder', 'firstOrderAlt', 'firstdraft', 'fish', 'fistRaised', 'solidFlag', 'flag', 'flagCheckered', 'flagUsa', 'flask', 'flickr', 'flipboard', 'solidFlushed', 'flushed', 'fly', 'solidFolder', 'folder', 'folderMinus', 'solidFolderOpen', 'folderOpen', 'folderPlus', 'font', 'fontAwesome', 'fontAwesomeAlt', 'fontAwesomeFlag', 'fonticons', 'fonticonsFi', 'footballBall', 'fortAwesome', 'fortAwesomeAlt', 'forumbee', 'forward', 'foursquare', 'freeCodeCamp', 'freebsd', 'frog', 'solidFrown', 'frown', 'solidFrownOpen', 'frownOpen', 'fulcrum', 'funnelDollar', 'solidFutbol', 'futbol', 'galacticRepublic', 'galacticSenate', 'gamepad', 'gasPump', 'gavel', 'solidGem', 'gem', 'genderless', 'getPocket', 'gg', 'ggCircle', 'ghost', 'gift', 'gifts', 'git', 'gitAlt', 'gitSquare', 'github', 'githubAlt', 'githubSquare', 'gitkraken', 'gitlab', 'gitter', 'glassCheers', 'glassMartini', 'glassMartiniAlt', 'glassWhiskey', 'glasses', 'glide', 'glideG', 'globe', 'globeAfrica', 'globeAmericas', 'globeAsia', 'globeEurope', 'gofore', 'golfBall', 'goodreads', 'goodreadsG', 'google', 'googleDrive', 'googlePay', 'googlePlay', 'googlePlus', 'googlePlusG', 'googlePlusSquare', 'googleWallet', 'gopuram', 'graduationCap', 'gratipay', 'grav', 'greaterThan', 'greaterThanEqual', 'solidGrimace', 'grimace', 'solidGrin', 'grin', 'solidGrinAlt', 'grinAlt', 'solidGrinBeam', 'grinBeam', 'solidGrinBeamSweat', 'grinBeamSweat', 'solidGrinHearts', 'grinHearts', 'solidGrinSquint', 'grinSquint', 'solidGrinSquintTears', 'grinSquintTears', 'solidGrinStars', 'grinStars', 'solidGrinTears', 'grinTears', 'solidGrinTongue', 'grinTongue', 'solidGrinTongueSquint', 'grinTongueSquint', 'solidGrinTongueWink', 'grinTongueWink', 'solidGrinWink', 'grinWink', 'gripHorizontal', 'gripLines', 'gripLinesVertical', 'gripVertical', 'gripfire', 'grunt', 'guilded', 'guitar', 'gulp', 'hSquare', 'hackerNews', 'hackerNewsSquare', 'hackerrank', 'hamburger', 'hammer', 'hamsa', 'handHolding', 'handHoldingHeart', 'handHoldingMedical', 'handHoldingUsd', 'handHoldingWater', 'solidHandLizard', 'handLizard', 'handMiddleFinger', 'solidHandPaper', 'handPaper', 'solidHandPeace', 'handPeace', 'solidHandPointDown', 'handPointDown', 'solidHandPointLeft', 'handPointLeft', 'solidHandPointRight', 'handPointRight', 'solidHandPointUp', 'handPointUp', 'solidHandPointer', 'handPointer', 'solidHandRock', 'handRock', 'solidHandScissors', 'handScissors', 'handSparkles', 'solidHandSpock', 'handSpock', 'hands', 'handsHelping', 'handsWash', 'solidHandshake', 'handshake', 'handshakeAltSlash', 'handshakeSlash', 'hanukiah', 'hardHat', 'hashtag', 'hatCowboy', 'hatCowboySide', 'hatWizard', 'solidHdd', 'hdd', 'headSideCough', 'headSideCoughSlash', 'headSideMask', 'headSideVirus', 'heading', 'headphones', 'headphonesAlt', 'headset', 'solidHeart', 'heart', 'heartBroken', 'heartbeat', 'helicopter', 'highlighter', 'hiking', 'hippo', 'hips', 'hireAHelper', 'history', 'hive', 'hockeyPuck', 'hollyBerry', 'home', 'hooli', 'hornbill', 'horse', 'horseHead', 'solidHospital', 'hospital', 'hospitalAlt', 'hospitalSymbol', 'hospitalUser', 'hotTub', 'hotdog', 'hotel', 'hotjar', 'solidHourglass', 'hourglass', 'hourglassEnd', 'hourglassHalf', 'hourglassStart', 'houseDamage', 'houseUser', 'houzz', 'hryvnia', 'html5', 'hubspot', 'iCursor', 'iceCream', 'icicles', 'icons', 'solidIdBadge', 'idBadge', 'solidIdCard', 'idCard', 'idCardAlt', 'ideal', 'igloo', 'solidImage', 'image', 'solidImages', 'images', 'imdb', 'inbox', 'indent', 'industry', 'infinity', 'info', 'infoCircle', 'innosoft', 'instagram', 'instagramSquare', 'instalod', 'intercom', 'internetExplorer', 'invision', 'ioxhost', 'italic', 'itchIo', 'itunes', 'itunesNote', 'java', 'jedi', 'jediOrder', 'jenkins', 'jira', 'joget', 'joint', 'joomla', 'journalWhills', 'js', 'jsSquare', 'jsfiddle', 'kaaba', 'kaggle', 'key', 'keybase', 'solidKeyboard', 'keyboard', 'keycdn', 'khanda', 'kickstarter', 'kickstarterK', 'solidKiss', 'kiss', 'solidKissBeam', 'kissBeam', 'solidKissWinkHeart', 'kissWinkHeart', 'kiwiBird', 'korvue', 'landmark', 'language', 'laptop', 'laptopCode', 'laptopHouse', 'laptopMedical', 'laravel', 'lastfm', 'lastfmSquare', 'solidLaugh', 'laugh', 'solidLaughBeam', 'laughBeam', 'solidLaughSquint', 'laughSquint', 'solidLaughWink', 'laughWink', 'layerGroup', 'leaf', 'leanpub', 'solidLemon', 'lemon', 'less', 'lessThan', 'lessThanEqual', 'levelDownAlt', 'levelUpAlt', 'solidLifeRing', 'lifeRing', 'solidLightbulb', 'lightbulb', 'line', 'link', 'linkedin', 'linkedinIn', 'linode', 'linux', 'liraSign', 'list', 'solidListAlt', 'listAlt', 'listOl', 'listUl', 'locationArrow', 'lock', 'lockOpen', 'longArrowAltDown', 'longArrowAltLeft', 'longArrowAltRight', 'longArrowAltUp', 'lowVision', 'luggageCart', 'lungs', 'lungsVirus', 'lyft', 'magento', 'magic', 'magnet', 'mailBulk', 'mailchimp', 'male', 'mandalorian', 'solidMap', 'map', 'mapMarked', 'mapMarkedAlt', 'mapMarker', 'mapMarkerAlt', 'mapPin', 'mapSigns', 'markdown', 'marker', 'mars', 'marsDouble', 'marsStroke', 'marsStrokeH', 'marsStrokeV', 'mask', 'mastodon', 'maxcdn', 'mdb', 'medal', 'medapps', 'medium', 'mediumM', 'medkit', 'medrt', 'meetup', 'megaport', 'solidMeh', 'meh', 'solidMehBlank', 'mehBlank', 'solidMehRollingEyes', 'mehRollingEyes', 'memory', 'mendeley', 'menorah', 'mercury', 'meteor', 'microblog', 'microchip', 'microphone', 'microphoneAlt', 'microphoneAltSlash', 'microphoneSlash', 'microscope', 'microsoft', 'minus', 'minusCircle', 'solidMinusSquare', 'minusSquare', 'mitten', 'mix', 'mixcloud', 'mixer', 'mizuni', 'mobile', 'mobileAlt', 'modx', 'monero', 'moneyBill', 'solidMoneyBillAlt', 'moneyBillAlt', 'moneyBillWave', 'moneyBillWaveAlt', 'moneyCheck', 'moneyCheckAlt', 'monument', 'solidMoon', 'moon', 'mortarPestle', 'mosque', 'motorcycle', 'mountain', 'mouse', 'mousePointer', 'mugHot', 'music', 'napster', 'neos', 'networkWired', 'neuter', 'solidNewspaper', 'newspaper', 'nimblr', 'node', 'nodeJs', 'notEqual', 'notesMedical', 'npm', 'ns8', 'nutritionix', 'solidObjectGroup', 'objectGroup', 'solidObjectUngroup', 'objectUngroup', 'octopusDeploy', 'odnoklassniki', 'odnoklassnikiSquare', 'oilCan', 'oldRepublic', 'om', 'opencart', 'openid', 'opera', 'optinMonster', 'orcid', 'osi', 'otter', 'outdent', 'page4', 'pagelines', 'pager', 'paintBrush', 'paintRoller', 'palette', 'palfed', 'pallet', 'solidPaperPlane', 'paperPlane', 'paperclip', 'parachuteBox', 'paragraph', 'parking', 'passport', 'pastafarianism', 'paste', 'patreon', 'pause', 'solidPauseCircle', 'pauseCircle', 'paw', 'paypal', 'peace', 'pen', 'penAlt', 'penFancy', 'penNib', 'penSquare', 'pencilAlt', 'pencilRuler', 'pennyArcade', 'peopleArrows', 'peopleCarry', 'pepperHot', 'perbyte', 'percent', 'percentage', 'periscope', 'personBooth', 'phabricator', 'phoenixFramework', 'phoenixSquadron', 'phone', 'phoneAlt', 'phoneSlash', 'phoneSquare', 'phoneSquareAlt', 'phoneVolume', 'photoVideo', 'php', 'piedPiper', 'piedPiperAlt', 'piedPiperHat', 'piedPiperPp', 'piedPiperSquare', 'piggyBank', 'pills', 'pinterest', 'pinterestP', 'pinterestSquare', 'pizzaSlice', 'placeOfWorship', 'plane', 'planeArrival', 'planeDeparture', 'planeSlash', 'play', 'solidPlayCircle', 'playCircle', 'playstation', 'plug', 'plus', 'plusCircle', 'solidPlusSquare', 'plusSquare', 'podcast', 'poll', 'pollH', 'poo', 'pooStorm', 'poop', 'portrait', 'poundSign', 'powerOff', 'pray', 'prayingHands', 'prescription', 'prescriptionBottle', 'prescriptionBottleAlt', 'print', 'procedures', 'productHunt', 'projectDiagram', 'pumpMedical', 'pumpSoap', 'pushed', 'puzzlePiece', 'python', 'qq', 'qrcode', 'question', 'solidQuestionCircle', 'questionCircle', 'quidditch', 'quinscape', 'quora', 'quoteLeft', 'quoteRight', 'quran', 'rProject', 'radiation', 'radiationAlt', 'rainbow', 'random', 'raspberryPi', 'ravelry', 'react', 'reacteurope', 'readme', 'rebel', 'receipt', 'recordVinyl', 'recycle', 'redRiver', 'reddit', 'redditAlien', 'redditSquare', 'redhat', 'redo', 'redoAlt', 'solidRegistered', 'registered', 'removeFormat', 'renren', 'reply', 'replyAll', 'replyd', 'republican', 'researchgate', 'resolving', 'restroom', 'retweet', 'rev', 'ribbon', 'ring', 'road', 'robot', 'rocket', 'rocketchat', 'rockrms', 'route', 'rss', 'rssSquare', 'rubleSign', 'ruler', 'rulerCombined', 'rulerHorizontal', 'rulerVertical', 'running', 'rupeeSign', 'rust', 'solidSadCry', 'sadCry', 'solidSadTear', 'sadTear', 'safari', 'salesforce', 'sass', 'satellite', 'satelliteDish', 'solidSave', 'save', 'schlix', 'school', 'screwdriver', 'scribd', 'scroll', 'sdCard', 'search', 'searchDollar', 'searchLocation', 'searchMinus', 'searchPlus', 'searchengin', 'seedling', 'sellcast', 'sellsy', 'server', 'servicestack', 'shapes', 'share', 'shareAlt', 'shareAltSquare', 'solidShareSquare', 'shareSquare', 'shekelSign', 'shieldAlt', 'shieldVirus', 'ship', 'shippingFast', 'shirtsinbulk', 'shoePrints', 'shopify', 'shoppingBag', 'shoppingBasket', 'shoppingCart', 'shopware', 'shower', 'shuttleVan', 'sign', 'signInAlt', 'signLanguage', 'signOutAlt', 'signal', 'signature', 'simCard', 'simplybuilt', 'sink', 'sistrix', 'sitemap', 'sith', 'skating', 'sketch', 'skiing', 'skiingNordic', 'skull', 'skullCrossbones', 'skyatlas', 'skype', 'slack', 'slackHash', 'slash', 'sleigh', 'slidersH', 'slideshare', 'solidSmile', 'smile', 'solidSmileBeam', 'smileBeam', 'solidSmileWink', 'smileWink', 'smog', 'smoking', 'smokingBan', 'sms', 'snapchat', 'snapchatGhost', 'snapchatSquare', 'snowboarding', 'solidSnowflake', 'snowflake', 'snowman', 'snowplow', 'soap', 'socks', 'solarPanel', 'sort', 'sortAlphaDown', 'sortAlphaDownAlt', 'sortAlphaUp', 'sortAlphaUpAlt', 'sortAmountDown', 'sortAmountDownAlt', 'sortAmountUp', 'sortAmountUpAlt', 'sortDown', 'sortNumericDown', 'sortNumericDownAlt', 'sortNumericUp', 'sortNumericUpAlt', 'sortUp', 'soundcloud', 'sourcetree', 'spa', 'spaceShuttle', 'speakap', 'speakerDeck', 'spellCheck', 'spider', 'spinner', 'splotch', 'spotify', 'sprayCan', 'solidSquare', 'square', 'squareFull', 'squareRootAlt', 'squarespace', 'stackExchange', 'stackOverflow', 'stackpath', 'stamp', 'solidStar', 'star', 'starAndCrescent', 'solidStarHalf', 'starHalf', 'starHalfAlt', 'starOfDavid', 'starOfLife', 'staylinked', 'steam', 'steamSquare', 'steamSymbol', 'stepBackward', 'stepForward', 'stethoscope', 'stickerMule', 'solidStickyNote', 'stickyNote', 'stop', 'solidStopCircle', 'stopCircle', 'stopwatch', 'stopwatch20', 'store', 'storeAlt', 'storeAltSlash', 'storeSlash', 'strava', 'stream', 'streetView', 'strikethrough', 'stripe', 'stripeS', 'stroopwafel', 'studiovinari', 'stumbleupon', 'stumbleuponCircle', 'subscript', 'subway', 'suitcase', 'suitcaseRolling', 'solidSun', 'sun', 'superpowers', 'superscript', 'supple', 'solidSurprise', 'surprise', 'suse', 'swatchbook', 'swift', 'swimmer', 'swimmingPool', 'symfony', 'synagogue', 'sync', 'syncAlt', 'syringe', 'table', 'tableTennis', 'tablet', 'tabletAlt', 'tablets', 'tachometerAlt', 'tag', 'tags', 'tape', 'tasks', 'taxi', 'teamspeak', 'teeth', 'teethOpen', 'telegram', 'telegramPlane', 'temperatureHigh', 'temperatureLow', 'tencentWeibo', 'tenge', 'terminal', 'textHeight', 'textWidth', 'th', 'thLarge', 'thList', 'theRedYeti', 'theaterMasks', 'themeco', 'themeisle', 'thermometer', 'thermometerEmpty', 'thermometerFull', 'thermometerHalf', 'thermometerQuarter', 'thermometerThreeQuarters', 'thinkPeaks', 'solidThumbsDown', 'thumbsDown', 'solidThumbsUp', 'thumbsUp', 'thumbtack', 'ticketAlt', 'tiktok', 'times', 'solidTimesCircle', 'timesCircle', 'tint', 'tintSlash', 'solidTired', 'tired', 'toggleOff', 'toggleOn', 'toilet', 'toiletPaper', 'toiletPaperSlash', 'toolbox', 'tools', 'tooth', 'torah', 'toriiGate', 'tractor', 'tradeFederation', 'trademark', 'trafficLight', 'trailer', 'train', 'tram', 'transgender', 'transgenderAlt', 'trash', 'solidTrashAlt', 'trashAlt', 'trashRestore', 'trashRestoreAlt', 'tree', 'trello', 'trophy', 'truck', 'truckLoading', 'truckMonster', 'truckMoving', 'truckPickup', 'tshirt', 'tty', 'tumblr', 'tumblrSquare', 'tv', 'twitch', 'twitter', 'twitterSquare', 'typo3', 'uber', 'ubuntu', 'uikit', 'umbraco', 'umbrella', 'umbrellaBeach', 'uncharted', 'underline', 'undo', 'undoAlt', 'uniregistry', 'unity', 'universalAccess', 'university', 'unlink', 'unlock', 'unlockAlt', 'unsplash', 'untappd', 'upload', 'ups', 'usb', 'solidUser', 'user', 'userAlt', 'userAltSlash', 'userAstronaut', 'userCheck', 'solidUserCircle', 'userCircle', 'userClock', 'userCog', 'userEdit', 'userFriends', 'userGraduate', 'userInjured', 'userLock', 'userMd', 'userMinus', 'userNinja', 'userNurse', 'userPlus', 'userSecret', 'userShield', 'userSlash', 'userTag', 'userTie', 'userTimes', 'users', 'usersCog', 'usersSlash', 'usps', 'ussunnah', 'utensilSpoon', 'utensils', 'vaadin', 'vectorSquare', 'venus', 'venusDouble', 'venusMars', 'vest', 'vestPatches', 'viacoin', 'viadeo', 'viadeoSquare', 'vial', 'vials', 'viber', 'video', 'videoSlash', 'vihara', 'vimeo', 'vimeoSquare', 'vimeoV', 'vine', 'virus', 'virusSlash', 'viruses', 'vk', 'vnv', 'voicemail', 'volleyballBall', 'volumeDown', 'volumeMute', 'volumeOff', 'volumeUp', 'voteYea', 'vrCardboard', 'vuejs', 'walking', 'wallet', 'warehouse', 'watchmanMonitoring', 'water', 'waveSquare', 'waze', 'weebly', 'weibo', 'weight', 'weightHanging', 'weixin', 'whatsapp', 'whatsappSquare', 'wheelchair', 'whmcs', 'wifi', 'wikipediaW', 'wind', 'solidWindowClose', 'windowClose', 'solidWindowMaximize', 'windowMaximize', 'solidWindowMinimize', 'windowMinimize', 'solidWindowRestore', 'windowRestore', 'windows', 'wineBottle', 'wineGlass', 'wineGlassAlt', 'wix', 'wizardsOfTheCoast', 'wodu', 'wolfPackBattalion', 'wonSign', 'wordpress', 'wordpressSimple', 'wpbeginner', 'wpexplorer', 'wpforms', 'wpressr', 'wrench', 'xRay', 'xbox', 'xing', 'xingSquare', 'yCombinator', 'yahoo', 'yammer', 'yandex', 'yandexInternational', 'yarn', 'yelp', 'yenSign', 'yinYang', 'yoast', 'youtube', 'youtubeSquare', 'zhihu']);
  dart.defineLazy(font_awesome_flutter.FontAwesomeIcons, {
    /*font_awesome_flutter.FontAwesomeIcons.fiveHundredPx*/get fiveHundredPx() {
      return C[9] || CT.C9;
    },
    /*font_awesome_flutter.FontAwesomeIcons.accessibleIcon*/get accessibleIcon() {
      return C[10] || CT.C10;
    },
    /*font_awesome_flutter.FontAwesomeIcons.accusoft*/get accusoft() {
      return C[11] || CT.C11;
    },
    /*font_awesome_flutter.FontAwesomeIcons.acquisitionsIncorporated*/get acquisitionsIncorporated() {
      return C[12] || CT.C12;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ad*/get ad() {
      return C[13] || CT.C13;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidAddressBook*/get solidAddressBook() {
      return C[14] || CT.C14;
    },
    /*font_awesome_flutter.FontAwesomeIcons.addressBook*/get addressBook() {
      return C[15] || CT.C15;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidAddressCard*/get solidAddressCard() {
      return C[16] || CT.C16;
    },
    /*font_awesome_flutter.FontAwesomeIcons.addressCard*/get addressCard() {
      return C[17] || CT.C17;
    },
    /*font_awesome_flutter.FontAwesomeIcons.adjust*/get adjust() {
      return C[18] || CT.C18;
    },
    /*font_awesome_flutter.FontAwesomeIcons.adn*/get adn() {
      return C[19] || CT.C19;
    },
    /*font_awesome_flutter.FontAwesomeIcons.adversal*/get adversal() {
      return C[20] || CT.C20;
    },
    /*font_awesome_flutter.FontAwesomeIcons.affiliatetheme*/get affiliatetheme() {
      return C[21] || CT.C21;
    },
    /*font_awesome_flutter.FontAwesomeIcons.airFreshener*/get airFreshener() {
      return C[22] || CT.C22;
    },
    /*font_awesome_flutter.FontAwesomeIcons.airbnb*/get airbnb() {
      return C[23] || CT.C23;
    },
    /*font_awesome_flutter.FontAwesomeIcons.algolia*/get algolia() {
      return C[24] || CT.C24;
    },
    /*font_awesome_flutter.FontAwesomeIcons.alignCenter*/get alignCenter() {
      return C[25] || CT.C25;
    },
    /*font_awesome_flutter.FontAwesomeIcons.alignJustify*/get alignJustify() {
      return C[26] || CT.C26;
    },
    /*font_awesome_flutter.FontAwesomeIcons.alignLeft*/get alignLeft() {
      return C[27] || CT.C27;
    },
    /*font_awesome_flutter.FontAwesomeIcons.alignRight*/get alignRight() {
      return C[28] || CT.C28;
    },
    /*font_awesome_flutter.FontAwesomeIcons.alipay*/get alipay() {
      return C[29] || CT.C29;
    },
    /*font_awesome_flutter.FontAwesomeIcons.allergies*/get allergies() {
      return C[30] || CT.C30;
    },
    /*font_awesome_flutter.FontAwesomeIcons.amazon*/get amazon() {
      return C[31] || CT.C31;
    },
    /*font_awesome_flutter.FontAwesomeIcons.amazonPay*/get amazonPay() {
      return C[32] || CT.C32;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ambulance*/get ambulance() {
      return C[33] || CT.C33;
    },
    /*font_awesome_flutter.FontAwesomeIcons.americanSignLanguageInterpreting*/get americanSignLanguageInterpreting() {
      return C[34] || CT.C34;
    },
    /*font_awesome_flutter.FontAwesomeIcons.amilia*/get amilia() {
      return C[35] || CT.C35;
    },
    /*font_awesome_flutter.FontAwesomeIcons.anchor*/get anchor() {
      return C[36] || CT.C36;
    },
    /*font_awesome_flutter.FontAwesomeIcons.android*/get android() {
      return C[37] || CT.C37;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angellist*/get angellist() {
      return C[38] || CT.C38;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angleDoubleDown*/get angleDoubleDown() {
      return C[39] || CT.C39;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angleDoubleLeft*/get angleDoubleLeft() {
      return C[40] || CT.C40;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angleDoubleRight*/get angleDoubleRight() {
      return C[41] || CT.C41;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angleDoubleUp*/get angleDoubleUp() {
      return C[42] || CT.C42;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angleDown*/get angleDown() {
      return C[43] || CT.C43;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angleLeft*/get angleLeft() {
      return C[44] || CT.C44;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angleRight*/get angleRight() {
      return C[45] || CT.C45;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angleUp*/get angleUp() {
      return C[46] || CT.C46;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidAngry*/get solidAngry() {
      return C[47] || CT.C47;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angry*/get angry() {
      return C[48] || CT.C48;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angrycreative*/get angrycreative() {
      return C[49] || CT.C49;
    },
    /*font_awesome_flutter.FontAwesomeIcons.angular*/get angular() {
      return C[50] || CT.C50;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ankh*/get ankh() {
      return C[51] || CT.C51;
    },
    /*font_awesome_flutter.FontAwesomeIcons.appStore*/get appStore() {
      return C[52] || CT.C52;
    },
    /*font_awesome_flutter.FontAwesomeIcons.appStoreIos*/get appStoreIos() {
      return C[53] || CT.C53;
    },
    /*font_awesome_flutter.FontAwesomeIcons.apper*/get apper() {
      return C[54] || CT.C54;
    },
    /*font_awesome_flutter.FontAwesomeIcons.apple*/get apple() {
      return C[55] || CT.C55;
    },
    /*font_awesome_flutter.FontAwesomeIcons.appleAlt*/get appleAlt() {
      return C[56] || CT.C56;
    },
    /*font_awesome_flutter.FontAwesomeIcons.applePay*/get applePay() {
      return C[57] || CT.C57;
    },
    /*font_awesome_flutter.FontAwesomeIcons.archive*/get archive() {
      return C[58] || CT.C58;
    },
    /*font_awesome_flutter.FontAwesomeIcons.archway*/get archway() {
      return C[59] || CT.C59;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidArrowAltCircleDown*/get solidArrowAltCircleDown() {
      return C[60] || CT.C60;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowAltCircleDown*/get arrowAltCircleDown() {
      return C[61] || CT.C61;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidArrowAltCircleLeft*/get solidArrowAltCircleLeft() {
      return C[62] || CT.C62;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowAltCircleLeft*/get arrowAltCircleLeft() {
      return C[63] || CT.C63;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidArrowAltCircleRight*/get solidArrowAltCircleRight() {
      return C[64] || CT.C64;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowAltCircleRight*/get arrowAltCircleRight() {
      return C[65] || CT.C65;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidArrowAltCircleUp*/get solidArrowAltCircleUp() {
      return C[66] || CT.C66;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowAltCircleUp*/get arrowAltCircleUp() {
      return C[67] || CT.C67;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowCircleDown*/get arrowCircleDown() {
      return C[68] || CT.C68;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowCircleLeft*/get arrowCircleLeft() {
      return C[69] || CT.C69;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowCircleRight*/get arrowCircleRight() {
      return C[70] || CT.C70;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowCircleUp*/get arrowCircleUp() {
      return C[71] || CT.C71;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowDown*/get arrowDown() {
      return C[72] || CT.C72;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowLeft*/get arrowLeft() {
      return C[73] || CT.C73;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowRight*/get arrowRight() {
      return C[74] || CT.C74;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowUp*/get arrowUp() {
      return C[75] || CT.C75;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowsAlt*/get arrowsAlt() {
      return C[76] || CT.C76;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowsAltH*/get arrowsAltH() {
      return C[77] || CT.C77;
    },
    /*font_awesome_flutter.FontAwesomeIcons.arrowsAltV*/get arrowsAltV() {
      return C[78] || CT.C78;
    },
    /*font_awesome_flutter.FontAwesomeIcons.artstation*/get artstation() {
      return C[79] || CT.C79;
    },
    /*font_awesome_flutter.FontAwesomeIcons.assistiveListeningSystems*/get assistiveListeningSystems() {
      return C[80] || CT.C80;
    },
    /*font_awesome_flutter.FontAwesomeIcons.asterisk*/get asterisk() {
      return C[81] || CT.C81;
    },
    /*font_awesome_flutter.FontAwesomeIcons.asymmetrik*/get asymmetrik() {
      return C[82] || CT.C82;
    },
    /*font_awesome_flutter.FontAwesomeIcons.at*/get at() {
      return C[83] || CT.C83;
    },
    /*font_awesome_flutter.FontAwesomeIcons.atlas*/get atlas() {
      return C[84] || CT.C84;
    },
    /*font_awesome_flutter.FontAwesomeIcons.atlassian*/get atlassian() {
      return C[85] || CT.C85;
    },
    /*font_awesome_flutter.FontAwesomeIcons.atom*/get atom() {
      return C[86] || CT.C86;
    },
    /*font_awesome_flutter.FontAwesomeIcons.audible*/get audible() {
      return C[87] || CT.C87;
    },
    /*font_awesome_flutter.FontAwesomeIcons.audioDescription*/get audioDescription() {
      return C[88] || CT.C88;
    },
    /*font_awesome_flutter.FontAwesomeIcons.autoprefixer*/get autoprefixer() {
      return C[89] || CT.C89;
    },
    /*font_awesome_flutter.FontAwesomeIcons.avianex*/get avianex() {
      return C[90] || CT.C90;
    },
    /*font_awesome_flutter.FontAwesomeIcons.aviato*/get aviato() {
      return C[91] || CT.C91;
    },
    /*font_awesome_flutter.FontAwesomeIcons.award*/get award() {
      return C[92] || CT.C92;
    },
    /*font_awesome_flutter.FontAwesomeIcons.aws*/get aws() {
      return C[93] || CT.C93;
    },
    /*font_awesome_flutter.FontAwesomeIcons.baby*/get baby() {
      return C[94] || CT.C94;
    },
    /*font_awesome_flutter.FontAwesomeIcons.babyCarriage*/get babyCarriage() {
      return C[95] || CT.C95;
    },
    /*font_awesome_flutter.FontAwesomeIcons.backspace*/get backspace() {
      return C[96] || CT.C96;
    },
    /*font_awesome_flutter.FontAwesomeIcons.backward*/get backward() {
      return C[97] || CT.C97;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bacon*/get bacon() {
      return C[98] || CT.C98;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bacteria*/get bacteria() {
      return C[99] || CT.C99;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bacterium*/get bacterium() {
      return C[100] || CT.C100;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bahai*/get bahai() {
      return C[101] || CT.C101;
    },
    /*font_awesome_flutter.FontAwesomeIcons.balanceScale*/get balanceScale() {
      return C[102] || CT.C102;
    },
    /*font_awesome_flutter.FontAwesomeIcons.balanceScaleLeft*/get balanceScaleLeft() {
      return C[103] || CT.C103;
    },
    /*font_awesome_flutter.FontAwesomeIcons.balanceScaleRight*/get balanceScaleRight() {
      return C[104] || CT.C104;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ban*/get ban() {
      return C[105] || CT.C105;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bandAid*/get bandAid() {
      return C[106] || CT.C106;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bandcamp*/get bandcamp() {
      return C[107] || CT.C107;
    },
    /*font_awesome_flutter.FontAwesomeIcons.barcode*/get barcode() {
      return C[108] || CT.C108;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bars*/get bars() {
      return C[109] || CT.C109;
    },
    /*font_awesome_flutter.FontAwesomeIcons.baseballBall*/get baseballBall() {
      return C[110] || CT.C110;
    },
    /*font_awesome_flutter.FontAwesomeIcons.basketballBall*/get basketballBall() {
      return C[111] || CT.C111;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bath*/get bath() {
      return C[112] || CT.C112;
    },
    /*font_awesome_flutter.FontAwesomeIcons.batteryEmpty*/get batteryEmpty() {
      return C[113] || CT.C113;
    },
    /*font_awesome_flutter.FontAwesomeIcons.batteryFull*/get batteryFull() {
      return C[114] || CT.C114;
    },
    /*font_awesome_flutter.FontAwesomeIcons.batteryHalf*/get batteryHalf() {
      return C[115] || CT.C115;
    },
    /*font_awesome_flutter.FontAwesomeIcons.batteryQuarter*/get batteryQuarter() {
      return C[116] || CT.C116;
    },
    /*font_awesome_flutter.FontAwesomeIcons.batteryThreeQuarters*/get batteryThreeQuarters() {
      return C[117] || CT.C117;
    },
    /*font_awesome_flutter.FontAwesomeIcons.battleNet*/get battleNet() {
      return C[118] || CT.C118;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bed*/get bed() {
      return C[119] || CT.C119;
    },
    /*font_awesome_flutter.FontAwesomeIcons.beer*/get beer() {
      return C[120] || CT.C120;
    },
    /*font_awesome_flutter.FontAwesomeIcons.behance*/get behance() {
      return C[121] || CT.C121;
    },
    /*font_awesome_flutter.FontAwesomeIcons.behanceSquare*/get behanceSquare() {
      return C[122] || CT.C122;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidBell*/get solidBell() {
      return C[123] || CT.C123;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bell*/get bell() {
      return C[124] || CT.C124;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidBellSlash*/get solidBellSlash() {
      return C[125] || CT.C125;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bellSlash*/get bellSlash() {
      return C[126] || CT.C126;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bezierCurve*/get bezierCurve() {
      return C[127] || CT.C127;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bible*/get bible() {
      return C[128] || CT.C128;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bicycle*/get bicycle() {
      return C[129] || CT.C129;
    },
    /*font_awesome_flutter.FontAwesomeIcons.biking*/get biking() {
      return C[130] || CT.C130;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bimobject*/get bimobject() {
      return C[131] || CT.C131;
    },
    /*font_awesome_flutter.FontAwesomeIcons.binoculars*/get binoculars() {
      return C[132] || CT.C132;
    },
    /*font_awesome_flutter.FontAwesomeIcons.biohazard*/get biohazard() {
      return C[133] || CT.C133;
    },
    /*font_awesome_flutter.FontAwesomeIcons.birthdayCake*/get birthdayCake() {
      return C[134] || CT.C134;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bitbucket*/get bitbucket() {
      return C[135] || CT.C135;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bitcoin*/get bitcoin() {
      return C[136] || CT.C136;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bity*/get bity() {
      return C[137] || CT.C137;
    },
    /*font_awesome_flutter.FontAwesomeIcons.blackTie*/get blackTie() {
      return C[138] || CT.C138;
    },
    /*font_awesome_flutter.FontAwesomeIcons.blackberry*/get blackberry() {
      return C[139] || CT.C139;
    },
    /*font_awesome_flutter.FontAwesomeIcons.blender*/get blender() {
      return C[140] || CT.C140;
    },
    /*font_awesome_flutter.FontAwesomeIcons.blenderPhone*/get blenderPhone() {
      return C[141] || CT.C141;
    },
    /*font_awesome_flutter.FontAwesomeIcons.blind*/get blind() {
      return C[142] || CT.C142;
    },
    /*font_awesome_flutter.FontAwesomeIcons.blog*/get blog() {
      return C[143] || CT.C143;
    },
    /*font_awesome_flutter.FontAwesomeIcons.blogger*/get blogger() {
      return C[144] || CT.C144;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bloggerB*/get bloggerB() {
      return C[145] || CT.C145;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bluetooth*/get bluetooth() {
      return C[146] || CT.C146;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bluetoothB*/get bluetoothB() {
      return C[147] || CT.C147;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bold*/get bold() {
      return C[148] || CT.C148;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bolt*/get bolt() {
      return C[149] || CT.C149;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bomb*/get bomb() {
      return C[150] || CT.C150;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bone*/get bone() {
      return C[151] || CT.C151;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bong*/get bong() {
      return C[152] || CT.C152;
    },
    /*font_awesome_flutter.FontAwesomeIcons.book*/get book() {
      return C[153] || CT.C153;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bookDead*/get bookDead() {
      return C[154] || CT.C154;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bookMedical*/get bookMedical() {
      return C[155] || CT.C155;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bookOpen*/get bookOpen() {
      return C[156] || CT.C156;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bookReader*/get bookReader() {
      return C[157] || CT.C157;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidBookmark*/get solidBookmark() {
      return C[158] || CT.C158;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bookmark*/get bookmark() {
      return C[159] || CT.C159;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bootstrap*/get bootstrap() {
      return C[160] || CT.C160;
    },
    /*font_awesome_flutter.FontAwesomeIcons.borderAll*/get borderAll() {
      return C[161] || CT.C161;
    },
    /*font_awesome_flutter.FontAwesomeIcons.borderNone*/get borderNone() {
      return C[162] || CT.C162;
    },
    /*font_awesome_flutter.FontAwesomeIcons.borderStyle*/get borderStyle() {
      return C[163] || CT.C163;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bowlingBall*/get bowlingBall() {
      return C[164] || CT.C164;
    },
    /*font_awesome_flutter.FontAwesomeIcons.box*/get box() {
      return C[165] || CT.C165;
    },
    /*font_awesome_flutter.FontAwesomeIcons.boxOpen*/get boxOpen() {
      return C[166] || CT.C166;
    },
    /*font_awesome_flutter.FontAwesomeIcons.boxTissue*/get boxTissue() {
      return C[167] || CT.C167;
    },
    /*font_awesome_flutter.FontAwesomeIcons.boxes*/get boxes() {
      return C[168] || CT.C168;
    },
    /*font_awesome_flutter.FontAwesomeIcons.braille*/get braille() {
      return C[169] || CT.C169;
    },
    /*font_awesome_flutter.FontAwesomeIcons.brain*/get brain() {
      return C[170] || CT.C170;
    },
    /*font_awesome_flutter.FontAwesomeIcons.breadSlice*/get breadSlice() {
      return C[171] || CT.C171;
    },
    /*font_awesome_flutter.FontAwesomeIcons.briefcase*/get briefcase() {
      return C[172] || CT.C172;
    },
    /*font_awesome_flutter.FontAwesomeIcons.briefcaseMedical*/get briefcaseMedical() {
      return C[173] || CT.C173;
    },
    /*font_awesome_flutter.FontAwesomeIcons.broadcastTower*/get broadcastTower() {
      return C[174] || CT.C174;
    },
    /*font_awesome_flutter.FontAwesomeIcons.broom*/get broom() {
      return C[175] || CT.C175;
    },
    /*font_awesome_flutter.FontAwesomeIcons.brush*/get brush() {
      return C[176] || CT.C176;
    },
    /*font_awesome_flutter.FontAwesomeIcons.btc*/get btc() {
      return C[177] || CT.C177;
    },
    /*font_awesome_flutter.FontAwesomeIcons.buffer*/get buffer() {
      return C[178] || CT.C178;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bug*/get bug() {
      return C[179] || CT.C179;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidBuilding*/get solidBuilding() {
      return C[180] || CT.C180;
    },
    /*font_awesome_flutter.FontAwesomeIcons.building*/get building() {
      return C[181] || CT.C181;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bullhorn*/get bullhorn() {
      return C[182] || CT.C182;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bullseye*/get bullseye() {
      return C[183] || CT.C183;
    },
    /*font_awesome_flutter.FontAwesomeIcons.burn*/get burn() {
      return C[184] || CT.C184;
    },
    /*font_awesome_flutter.FontAwesomeIcons.buromobelexperte*/get buromobelexperte() {
      return C[185] || CT.C185;
    },
    /*font_awesome_flutter.FontAwesomeIcons.bus*/get bus() {
      return C[186] || CT.C186;
    },
    /*font_awesome_flutter.FontAwesomeIcons.busAlt*/get busAlt() {
      return C[187] || CT.C187;
    },
    /*font_awesome_flutter.FontAwesomeIcons.businessTime*/get businessTime() {
      return C[188] || CT.C188;
    },
    /*font_awesome_flutter.FontAwesomeIcons.buyNLarge*/get buyNLarge() {
      return C[189] || CT.C189;
    },
    /*font_awesome_flutter.FontAwesomeIcons.buysellads*/get buysellads() {
      return C[190] || CT.C190;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calculator*/get calculator() {
      return C[191] || CT.C191;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCalendar*/get solidCalendar() {
      return C[192] || CT.C192;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calendar*/get calendar() {
      return C[193] || CT.C193;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCalendarAlt*/get solidCalendarAlt() {
      return C[194] || CT.C194;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calendarAlt*/get calendarAlt() {
      return C[195] || CT.C195;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCalendarCheck*/get solidCalendarCheck() {
      return C[196] || CT.C196;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calendarCheck*/get calendarCheck() {
      return C[197] || CT.C197;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calendarDay*/get calendarDay() {
      return C[198] || CT.C198;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCalendarMinus*/get solidCalendarMinus() {
      return C[199] || CT.C199;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calendarMinus*/get calendarMinus() {
      return C[200] || CT.C200;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCalendarPlus*/get solidCalendarPlus() {
      return C[201] || CT.C201;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calendarPlus*/get calendarPlus() {
      return C[202] || CT.C202;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCalendarTimes*/get solidCalendarTimes() {
      return C[203] || CT.C203;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calendarTimes*/get calendarTimes() {
      return C[204] || CT.C204;
    },
    /*font_awesome_flutter.FontAwesomeIcons.calendarWeek*/get calendarWeek() {
      return C[205] || CT.C205;
    },
    /*font_awesome_flutter.FontAwesomeIcons.camera*/get camera() {
      return C[206] || CT.C206;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cameraRetro*/get cameraRetro() {
      return C[207] || CT.C207;
    },
    /*font_awesome_flutter.FontAwesomeIcons.campground*/get campground() {
      return C[208] || CT.C208;
    },
    /*font_awesome_flutter.FontAwesomeIcons.canadianMapleLeaf*/get canadianMapleLeaf() {
      return C[209] || CT.C209;
    },
    /*font_awesome_flutter.FontAwesomeIcons.candyCane*/get candyCane() {
      return C[210] || CT.C210;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cannabis*/get cannabis() {
      return C[211] || CT.C211;
    },
    /*font_awesome_flutter.FontAwesomeIcons.capsules*/get capsules() {
      return C[212] || CT.C212;
    },
    /*font_awesome_flutter.FontAwesomeIcons.car*/get car() {
      return C[213] || CT.C213;
    },
    /*font_awesome_flutter.FontAwesomeIcons.carAlt*/get carAlt() {
      return C[214] || CT.C214;
    },
    /*font_awesome_flutter.FontAwesomeIcons.carBattery*/get carBattery() {
      return C[215] || CT.C215;
    },
    /*font_awesome_flutter.FontAwesomeIcons.carCrash*/get carCrash() {
      return C[216] || CT.C216;
    },
    /*font_awesome_flutter.FontAwesomeIcons.carSide*/get carSide() {
      return C[217] || CT.C217;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caravan*/get caravan() {
      return C[218] || CT.C218;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caretDown*/get caretDown() {
      return C[219] || CT.C219;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caretLeft*/get caretLeft() {
      return C[220] || CT.C220;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caretRight*/get caretRight() {
      return C[221] || CT.C221;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCaretSquareDown*/get solidCaretSquareDown() {
      return C[222] || CT.C222;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caretSquareDown*/get caretSquareDown() {
      return C[223] || CT.C223;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCaretSquareLeft*/get solidCaretSquareLeft() {
      return C[224] || CT.C224;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caretSquareLeft*/get caretSquareLeft() {
      return C[225] || CT.C225;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCaretSquareRight*/get solidCaretSquareRight() {
      return C[226] || CT.C226;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caretSquareRight*/get caretSquareRight() {
      return C[227] || CT.C227;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCaretSquareUp*/get solidCaretSquareUp() {
      return C[228] || CT.C228;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caretSquareUp*/get caretSquareUp() {
      return C[229] || CT.C229;
    },
    /*font_awesome_flutter.FontAwesomeIcons.caretUp*/get caretUp() {
      return C[230] || CT.C230;
    },
    /*font_awesome_flutter.FontAwesomeIcons.carrot*/get carrot() {
      return C[231] || CT.C231;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cartArrowDown*/get cartArrowDown() {
      return C[232] || CT.C232;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cartPlus*/get cartPlus() {
      return C[233] || CT.C233;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cashRegister*/get cashRegister() {
      return C[234] || CT.C234;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cat*/get cat() {
      return C[235] || CT.C235;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccAmazonPay*/get ccAmazonPay() {
      return C[236] || CT.C236;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccAmex*/get ccAmex() {
      return C[237] || CT.C237;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccApplePay*/get ccApplePay() {
      return C[238] || CT.C238;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccDinersClub*/get ccDinersClub() {
      return C[239] || CT.C239;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccDiscover*/get ccDiscover() {
      return C[240] || CT.C240;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccJcb*/get ccJcb() {
      return C[241] || CT.C241;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccMastercard*/get ccMastercard() {
      return C[242] || CT.C242;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccPaypal*/get ccPaypal() {
      return C[243] || CT.C243;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccStripe*/get ccStripe() {
      return C[244] || CT.C244;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ccVisa*/get ccVisa() {
      return C[245] || CT.C245;
    },
    /*font_awesome_flutter.FontAwesomeIcons.centercode*/get centercode() {
      return C[246] || CT.C246;
    },
    /*font_awesome_flutter.FontAwesomeIcons.centos*/get centos() {
      return C[247] || CT.C247;
    },
    /*font_awesome_flutter.FontAwesomeIcons.certificate*/get certificate() {
      return C[248] || CT.C248;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chair*/get chair() {
      return C[249] || CT.C249;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chalkboard*/get chalkboard() {
      return C[250] || CT.C250;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chalkboardTeacher*/get chalkboardTeacher() {
      return C[251] || CT.C251;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chargingStation*/get chargingStation() {
      return C[252] || CT.C252;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chartArea*/get chartArea() {
      return C[253] || CT.C253;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidChartBar*/get solidChartBar() {
      return C[254] || CT.C254;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chartBar*/get chartBar() {
      return C[255] || CT.C255;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chartLine*/get chartLine() {
      return C[256] || CT.C256;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chartPie*/get chartPie() {
      return C[257] || CT.C257;
    },
    /*font_awesome_flutter.FontAwesomeIcons.check*/get check() {
      return C[258] || CT.C258;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCheckCircle*/get solidCheckCircle() {
      return C[259] || CT.C259;
    },
    /*font_awesome_flutter.FontAwesomeIcons.checkCircle*/get checkCircle() {
      return C[260] || CT.C260;
    },
    /*font_awesome_flutter.FontAwesomeIcons.checkDouble*/get checkDouble() {
      return C[261] || CT.C261;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCheckSquare*/get solidCheckSquare() {
      return C[262] || CT.C262;
    },
    /*font_awesome_flutter.FontAwesomeIcons.checkSquare*/get checkSquare() {
      return C[263] || CT.C263;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cheese*/get cheese() {
      return C[264] || CT.C264;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chess*/get chess() {
      return C[265] || CT.C265;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chessBishop*/get chessBishop() {
      return C[266] || CT.C266;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chessBoard*/get chessBoard() {
      return C[267] || CT.C267;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chessKing*/get chessKing() {
      return C[268] || CT.C268;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chessKnight*/get chessKnight() {
      return C[269] || CT.C269;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chessPawn*/get chessPawn() {
      return C[270] || CT.C270;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chessQueen*/get chessQueen() {
      return C[271] || CT.C271;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chessRook*/get chessRook() {
      return C[272] || CT.C272;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chevronCircleDown*/get chevronCircleDown() {
      return C[273] || CT.C273;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chevronCircleLeft*/get chevronCircleLeft() {
      return C[274] || CT.C274;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chevronCircleRight*/get chevronCircleRight() {
      return C[275] || CT.C275;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chevronCircleUp*/get chevronCircleUp() {
      return C[276] || CT.C276;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chevronDown*/get chevronDown() {
      return C[277] || CT.C277;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chevronLeft*/get chevronLeft() {
      return C[278] || CT.C278;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chevronRight*/get chevronRight() {
      return C[279] || CT.C279;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chevronUp*/get chevronUp() {
      return C[280] || CT.C280;
    },
    /*font_awesome_flutter.FontAwesomeIcons.child*/get child() {
      return C[281] || CT.C281;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chrome*/get chrome() {
      return C[282] || CT.C282;
    },
    /*font_awesome_flutter.FontAwesomeIcons.chromecast*/get chromecast() {
      return C[283] || CT.C283;
    },
    /*font_awesome_flutter.FontAwesomeIcons.church*/get church() {
      return C[284] || CT.C284;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCircle*/get solidCircle() {
      return C[285] || CT.C285;
    },
    /*font_awesome_flutter.FontAwesomeIcons.circle*/get circle() {
      return C[286] || CT.C286;
    },
    /*font_awesome_flutter.FontAwesomeIcons.circleNotch*/get circleNotch() {
      return C[287] || CT.C287;
    },
    /*font_awesome_flutter.FontAwesomeIcons.city*/get city() {
      return C[288] || CT.C288;
    },
    /*font_awesome_flutter.FontAwesomeIcons.clinicMedical*/get clinicMedical() {
      return C[289] || CT.C289;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidClipboard*/get solidClipboard() {
      return C[290] || CT.C290;
    },
    /*font_awesome_flutter.FontAwesomeIcons.clipboard*/get clipboard() {
      return C[291] || CT.C291;
    },
    /*font_awesome_flutter.FontAwesomeIcons.clipboardCheck*/get clipboardCheck() {
      return C[292] || CT.C292;
    },
    /*font_awesome_flutter.FontAwesomeIcons.clipboardList*/get clipboardList() {
      return C[293] || CT.C293;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidClock*/get solidClock() {
      return C[294] || CT.C294;
    },
    /*font_awesome_flutter.FontAwesomeIcons.clock*/get clock() {
      return C[295] || CT.C295;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidClone*/get solidClone() {
      return C[296] || CT.C296;
    },
    /*font_awesome_flutter.FontAwesomeIcons.clone*/get clone() {
      return C[297] || CT.C297;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidClosedCaptioning*/get solidClosedCaptioning() {
      return C[298] || CT.C298;
    },
    /*font_awesome_flutter.FontAwesomeIcons.closedCaptioning*/get closedCaptioning() {
      return C[299] || CT.C299;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloud*/get cloud() {
      return C[300] || CT.C300;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudDownloadAlt*/get cloudDownloadAlt() {
      return C[301] || CT.C301;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudMeatball*/get cloudMeatball() {
      return C[302] || CT.C302;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudMoon*/get cloudMoon() {
      return C[303] || CT.C303;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudMoonRain*/get cloudMoonRain() {
      return C[304] || CT.C304;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudRain*/get cloudRain() {
      return C[305] || CT.C305;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudShowersHeavy*/get cloudShowersHeavy() {
      return C[306] || CT.C306;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudSun*/get cloudSun() {
      return C[307] || CT.C307;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudSunRain*/get cloudSunRain() {
      return C[308] || CT.C308;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudUploadAlt*/get cloudUploadAlt() {
      return C[309] || CT.C309;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudflare*/get cloudflare() {
      return C[310] || CT.C310;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudscale*/get cloudscale() {
      return C[311] || CT.C311;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudsmith*/get cloudsmith() {
      return C[312] || CT.C312;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cloudversify*/get cloudversify() {
      return C[313] || CT.C313;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cocktail*/get cocktail() {
      return C[314] || CT.C314;
    },
    /*font_awesome_flutter.FontAwesomeIcons.code*/get code() {
      return C[315] || CT.C315;
    },
    /*font_awesome_flutter.FontAwesomeIcons.codeBranch*/get codeBranch() {
      return C[316] || CT.C316;
    },
    /*font_awesome_flutter.FontAwesomeIcons.codepen*/get codepen() {
      return C[317] || CT.C317;
    },
    /*font_awesome_flutter.FontAwesomeIcons.codiepie*/get codiepie() {
      return C[318] || CT.C318;
    },
    /*font_awesome_flutter.FontAwesomeIcons.coffee*/get coffee() {
      return C[319] || CT.C319;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cog*/get cog() {
      return C[320] || CT.C320;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cogs*/get cogs() {
      return C[321] || CT.C321;
    },
    /*font_awesome_flutter.FontAwesomeIcons.coins*/get coins() {
      return C[322] || CT.C322;
    },
    /*font_awesome_flutter.FontAwesomeIcons.columns*/get columns() {
      return C[323] || CT.C323;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidComment*/get solidComment() {
      return C[324] || CT.C324;
    },
    /*font_awesome_flutter.FontAwesomeIcons.comment*/get comment() {
      return C[325] || CT.C325;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCommentAlt*/get solidCommentAlt() {
      return C[326] || CT.C326;
    },
    /*font_awesome_flutter.FontAwesomeIcons.commentAlt*/get commentAlt() {
      return C[327] || CT.C327;
    },
    /*font_awesome_flutter.FontAwesomeIcons.commentDollar*/get commentDollar() {
      return C[328] || CT.C328;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCommentDots*/get solidCommentDots() {
      return C[329] || CT.C329;
    },
    /*font_awesome_flutter.FontAwesomeIcons.commentDots*/get commentDots() {
      return C[330] || CT.C330;
    },
    /*font_awesome_flutter.FontAwesomeIcons.commentMedical*/get commentMedical() {
      return C[331] || CT.C331;
    },
    /*font_awesome_flutter.FontAwesomeIcons.commentSlash*/get commentSlash() {
      return C[332] || CT.C332;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidComments*/get solidComments() {
      return C[333] || CT.C333;
    },
    /*font_awesome_flutter.FontAwesomeIcons.comments*/get comments() {
      return C[334] || CT.C334;
    },
    /*font_awesome_flutter.FontAwesomeIcons.commentsDollar*/get commentsDollar() {
      return C[335] || CT.C335;
    },
    /*font_awesome_flutter.FontAwesomeIcons.compactDisc*/get compactDisc() {
      return C[336] || CT.C336;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCompass*/get solidCompass() {
      return C[337] || CT.C337;
    },
    /*font_awesome_flutter.FontAwesomeIcons.compass*/get compass() {
      return C[338] || CT.C338;
    },
    /*font_awesome_flutter.FontAwesomeIcons.compress*/get compress() {
      return C[339] || CT.C339;
    },
    /*font_awesome_flutter.FontAwesomeIcons.compressAlt*/get compressAlt() {
      return C[340] || CT.C340;
    },
    /*font_awesome_flutter.FontAwesomeIcons.compressArrowsAlt*/get compressArrowsAlt() {
      return C[341] || CT.C341;
    },
    /*font_awesome_flutter.FontAwesomeIcons.conciergeBell*/get conciergeBell() {
      return C[342] || CT.C342;
    },
    /*font_awesome_flutter.FontAwesomeIcons.confluence*/get confluence() {
      return C[343] || CT.C343;
    },
    /*font_awesome_flutter.FontAwesomeIcons.connectdevelop*/get connectdevelop() {
      return C[344] || CT.C344;
    },
    /*font_awesome_flutter.FontAwesomeIcons.contao*/get contao() {
      return C[345] || CT.C345;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cookie*/get cookie() {
      return C[346] || CT.C346;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cookieBite*/get cookieBite() {
      return C[347] || CT.C347;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCopy*/get solidCopy() {
      return C[348] || CT.C348;
    },
    /*font_awesome_flutter.FontAwesomeIcons.copy*/get copy() {
      return C[349] || CT.C349;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCopyright*/get solidCopyright() {
      return C[350] || CT.C350;
    },
    /*font_awesome_flutter.FontAwesomeIcons.copyright*/get copyright() {
      return C[351] || CT.C351;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cottonBureau*/get cottonBureau() {
      return C[352] || CT.C352;
    },
    /*font_awesome_flutter.FontAwesomeIcons.couch*/get couch() {
      return C[353] || CT.C353;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cpanel*/get cpanel() {
      return C[354] || CT.C354;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommons*/get creativeCommons() {
      return C[355] || CT.C355;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsBy*/get creativeCommonsBy() {
      return C[356] || CT.C356;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsNc*/get creativeCommonsNc() {
      return C[357] || CT.C357;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsNcEu*/get creativeCommonsNcEu() {
      return C[358] || CT.C358;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsNcJp*/get creativeCommonsNcJp() {
      return C[359] || CT.C359;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsNd*/get creativeCommonsNd() {
      return C[360] || CT.C360;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsPd*/get creativeCommonsPd() {
      return C[361] || CT.C361;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsPdAlt*/get creativeCommonsPdAlt() {
      return C[362] || CT.C362;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsRemix*/get creativeCommonsRemix() {
      return C[363] || CT.C363;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsSa*/get creativeCommonsSa() {
      return C[364] || CT.C364;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsSampling*/get creativeCommonsSampling() {
      return C[365] || CT.C365;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsSamplingPlus*/get creativeCommonsSamplingPlus() {
      return C[366] || CT.C366;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsShare*/get creativeCommonsShare() {
      return C[367] || CT.C367;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creativeCommonsZero*/get creativeCommonsZero() {
      return C[368] || CT.C368;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidCreditCard*/get solidCreditCard() {
      return C[369] || CT.C369;
    },
    /*font_awesome_flutter.FontAwesomeIcons.creditCard*/get creditCard() {
      return C[370] || CT.C370;
    },
    /*font_awesome_flutter.FontAwesomeIcons.criticalRole*/get criticalRole() {
      return C[371] || CT.C371;
    },
    /*font_awesome_flutter.FontAwesomeIcons.crop*/get crop() {
      return C[372] || CT.C372;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cropAlt*/get cropAlt() {
      return C[373] || CT.C373;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cross*/get cross() {
      return C[374] || CT.C374;
    },
    /*font_awesome_flutter.FontAwesomeIcons.crosshairs*/get crosshairs() {
      return C[375] || CT.C375;
    },
    /*font_awesome_flutter.FontAwesomeIcons.crow*/get crow() {
      return C[376] || CT.C376;
    },
    /*font_awesome_flutter.FontAwesomeIcons.crown*/get crown() {
      return C[377] || CT.C377;
    },
    /*font_awesome_flutter.FontAwesomeIcons.crutch*/get crutch() {
      return C[378] || CT.C378;
    },
    /*font_awesome_flutter.FontAwesomeIcons.css3*/get css3() {
      return C[379] || CT.C379;
    },
    /*font_awesome_flutter.FontAwesomeIcons.css3Alt*/get css3Alt() {
      return C[380] || CT.C380;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cube*/get cube() {
      return C[381] || CT.C381;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cubes*/get cubes() {
      return C[382] || CT.C382;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cut*/get cut() {
      return C[383] || CT.C383;
    },
    /*font_awesome_flutter.FontAwesomeIcons.cuttlefish*/get cuttlefish() {
      return C[384] || CT.C384;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dAndD*/get dAndD() {
      return C[385] || CT.C385;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dAndDBeyond*/get dAndDBeyond() {
      return C[386] || CT.C386;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dailymotion*/get dailymotion() {
      return C[387] || CT.C387;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dashcube*/get dashcube() {
      return C[388] || CT.C388;
    },
    /*font_awesome_flutter.FontAwesomeIcons.database*/get database() {
      return C[389] || CT.C389;
    },
    /*font_awesome_flutter.FontAwesomeIcons.deaf*/get deaf() {
      return C[390] || CT.C390;
    },
    /*font_awesome_flutter.FontAwesomeIcons.deezer*/get deezer() {
      return C[391] || CT.C391;
    },
    /*font_awesome_flutter.FontAwesomeIcons.delicious*/get delicious() {
      return C[392] || CT.C392;
    },
    /*font_awesome_flutter.FontAwesomeIcons.democrat*/get democrat() {
      return C[393] || CT.C393;
    },
    /*font_awesome_flutter.FontAwesomeIcons.deploydog*/get deploydog() {
      return C[394] || CT.C394;
    },
    /*font_awesome_flutter.FontAwesomeIcons.deskpro*/get deskpro() {
      return C[395] || CT.C395;
    },
    /*font_awesome_flutter.FontAwesomeIcons.desktop*/get desktop() {
      return C[396] || CT.C396;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dev*/get dev() {
      return C[397] || CT.C397;
    },
    /*font_awesome_flutter.FontAwesomeIcons.deviantart*/get deviantart() {
      return C[398] || CT.C398;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dharmachakra*/get dharmachakra() {
      return C[399] || CT.C399;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dhl*/get dhl() {
      return C[400] || CT.C400;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diagnoses*/get diagnoses() {
      return C[401] || CT.C401;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diaspora*/get diaspora() {
      return C[402] || CT.C402;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dice*/get dice() {
      return C[403] || CT.C403;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diceD20*/get diceD20() {
      return C[404] || CT.C404;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diceD6*/get diceD6() {
      return C[405] || CT.C405;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diceFive*/get diceFive() {
      return C[406] || CT.C406;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diceFour*/get diceFour() {
      return C[407] || CT.C407;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diceOne*/get diceOne() {
      return C[408] || CT.C408;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diceSix*/get diceSix() {
      return C[409] || CT.C409;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diceThree*/get diceThree() {
      return C[410] || CT.C410;
    },
    /*font_awesome_flutter.FontAwesomeIcons.diceTwo*/get diceTwo() {
      return C[411] || CT.C411;
    },
    /*font_awesome_flutter.FontAwesomeIcons.digg*/get digg() {
      return C[412] || CT.C412;
    },
    /*font_awesome_flutter.FontAwesomeIcons.digitalOcean*/get digitalOcean() {
      return C[413] || CT.C413;
    },
    /*font_awesome_flutter.FontAwesomeIcons.digitalTachograph*/get digitalTachograph() {
      return C[414] || CT.C414;
    },
    /*font_awesome_flutter.FontAwesomeIcons.directions*/get directions() {
      return C[415] || CT.C415;
    },
    /*font_awesome_flutter.FontAwesomeIcons.discord*/get discord() {
      return C[416] || CT.C416;
    },
    /*font_awesome_flutter.FontAwesomeIcons.discourse*/get discourse() {
      return C[417] || CT.C417;
    },
    /*font_awesome_flutter.FontAwesomeIcons.disease*/get disease() {
      return C[418] || CT.C418;
    },
    /*font_awesome_flutter.FontAwesomeIcons.divide*/get divide() {
      return C[419] || CT.C419;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidDizzy*/get solidDizzy() {
      return C[420] || CT.C420;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dizzy*/get dizzy() {
      return C[421] || CT.C421;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dna*/get dna() {
      return C[422] || CT.C422;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dochub*/get dochub() {
      return C[423] || CT.C423;
    },
    /*font_awesome_flutter.FontAwesomeIcons.docker*/get docker() {
      return C[424] || CT.C424;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dog*/get dog() {
      return C[425] || CT.C425;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dollarSign*/get dollarSign() {
      return C[426] || CT.C426;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dolly*/get dolly() {
      return C[427] || CT.C427;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dollyFlatbed*/get dollyFlatbed() {
      return C[428] || CT.C428;
    },
    /*font_awesome_flutter.FontAwesomeIcons.donate*/get donate() {
      return C[429] || CT.C429;
    },
    /*font_awesome_flutter.FontAwesomeIcons.doorClosed*/get doorClosed() {
      return C[430] || CT.C430;
    },
    /*font_awesome_flutter.FontAwesomeIcons.doorOpen*/get doorOpen() {
      return C[431] || CT.C431;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidDotCircle*/get solidDotCircle() {
      return C[432] || CT.C432;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dotCircle*/get dotCircle() {
      return C[433] || CT.C433;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dove*/get dove() {
      return C[434] || CT.C434;
    },
    /*font_awesome_flutter.FontAwesomeIcons.download*/get download() {
      return C[435] || CT.C435;
    },
    /*font_awesome_flutter.FontAwesomeIcons.draft2digital*/get draft2digital() {
      return C[436] || CT.C436;
    },
    /*font_awesome_flutter.FontAwesomeIcons.draftingCompass*/get draftingCompass() {
      return C[437] || CT.C437;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dragon*/get dragon() {
      return C[438] || CT.C438;
    },
    /*font_awesome_flutter.FontAwesomeIcons.drawPolygon*/get drawPolygon() {
      return C[439] || CT.C439;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dribbble*/get dribbble() {
      return C[440] || CT.C440;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dribbbleSquare*/get dribbbleSquare() {
      return C[441] || CT.C441;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dropbox*/get dropbox() {
      return C[442] || CT.C442;
    },
    /*font_awesome_flutter.FontAwesomeIcons.drum*/get drum() {
      return C[443] || CT.C443;
    },
    /*font_awesome_flutter.FontAwesomeIcons.drumSteelpan*/get drumSteelpan() {
      return C[444] || CT.C444;
    },
    /*font_awesome_flutter.FontAwesomeIcons.drumstickBite*/get drumstickBite() {
      return C[445] || CT.C445;
    },
    /*font_awesome_flutter.FontAwesomeIcons.drupal*/get drupal() {
      return C[446] || CT.C446;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dumbbell*/get dumbbell() {
      return C[447] || CT.C447;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dumpster*/get dumpster() {
      return C[448] || CT.C448;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dumpsterFire*/get dumpsterFire() {
      return C[449] || CT.C449;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dungeon*/get dungeon() {
      return C[450] || CT.C450;
    },
    /*font_awesome_flutter.FontAwesomeIcons.dyalog*/get dyalog() {
      return C[451] || CT.C451;
    },
    /*font_awesome_flutter.FontAwesomeIcons.earlybirds*/get earlybirds() {
      return C[452] || CT.C452;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ebay*/get ebay() {
      return C[453] || CT.C453;
    },
    /*font_awesome_flutter.FontAwesomeIcons.edge*/get edge() {
      return C[454] || CT.C454;
    },
    /*font_awesome_flutter.FontAwesomeIcons.edgeLegacy*/get edgeLegacy() {
      return C[455] || CT.C455;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidEdit*/get solidEdit() {
      return C[456] || CT.C456;
    },
    /*font_awesome_flutter.FontAwesomeIcons.edit*/get edit() {
      return C[457] || CT.C457;
    },
    /*font_awesome_flutter.FontAwesomeIcons.egg*/get egg() {
      return C[458] || CT.C458;
    },
    /*font_awesome_flutter.FontAwesomeIcons.eject*/get eject() {
      return C[459] || CT.C459;
    },
    /*font_awesome_flutter.FontAwesomeIcons.elementor*/get elementor() {
      return C[460] || CT.C460;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ellipsisH*/get ellipsisH() {
      return C[461] || CT.C461;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ellipsisV*/get ellipsisV() {
      return C[462] || CT.C462;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ello*/get ello() {
      return C[463] || CT.C463;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ember*/get ember() {
      return C[464] || CT.C464;
    },
    /*font_awesome_flutter.FontAwesomeIcons.empire*/get empire() {
      return C[465] || CT.C465;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidEnvelope*/get solidEnvelope() {
      return C[466] || CT.C466;
    },
    /*font_awesome_flutter.FontAwesomeIcons.envelope*/get envelope() {
      return C[467] || CT.C467;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidEnvelopeOpen*/get solidEnvelopeOpen() {
      return C[468] || CT.C468;
    },
    /*font_awesome_flutter.FontAwesomeIcons.envelopeOpen*/get envelopeOpen() {
      return C[469] || CT.C469;
    },
    /*font_awesome_flutter.FontAwesomeIcons.envelopeOpenText*/get envelopeOpenText() {
      return C[470] || CT.C470;
    },
    /*font_awesome_flutter.FontAwesomeIcons.envelopeSquare*/get envelopeSquare() {
      return C[471] || CT.C471;
    },
    /*font_awesome_flutter.FontAwesomeIcons.envira*/get envira() {
      return C[472] || CT.C472;
    },
    /*font_awesome_flutter.FontAwesomeIcons.equals*/get equals() {
      return C[473] || CT.C473;
    },
    /*font_awesome_flutter.FontAwesomeIcons.eraser*/get eraser() {
      return C[474] || CT.C474;
    },
    /*font_awesome_flutter.FontAwesomeIcons.erlang*/get erlang() {
      return C[475] || CT.C475;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ethereum*/get ethereum() {
      return C[476] || CT.C476;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ethernet*/get ethernet() {
      return C[477] || CT.C477;
    },
    /*font_awesome_flutter.FontAwesomeIcons.etsy*/get etsy() {
      return C[478] || CT.C478;
    },
    /*font_awesome_flutter.FontAwesomeIcons.euroSign*/get euroSign() {
      return C[479] || CT.C479;
    },
    /*font_awesome_flutter.FontAwesomeIcons.evernote*/get evernote() {
      return C[480] || CT.C480;
    },
    /*font_awesome_flutter.FontAwesomeIcons.exchangeAlt*/get exchangeAlt() {
      return C[481] || CT.C481;
    },
    /*font_awesome_flutter.FontAwesomeIcons.exclamation*/get exclamation() {
      return C[482] || CT.C482;
    },
    /*font_awesome_flutter.FontAwesomeIcons.exclamationCircle*/get exclamationCircle() {
      return C[483] || CT.C483;
    },
    /*font_awesome_flutter.FontAwesomeIcons.exclamationTriangle*/get exclamationTriangle() {
      return C[484] || CT.C484;
    },
    /*font_awesome_flutter.FontAwesomeIcons.expand*/get expand() {
      return C[485] || CT.C485;
    },
    /*font_awesome_flutter.FontAwesomeIcons.expandAlt*/get expandAlt() {
      return C[486] || CT.C486;
    },
    /*font_awesome_flutter.FontAwesomeIcons.expandArrowsAlt*/get expandArrowsAlt() {
      return C[487] || CT.C487;
    },
    /*font_awesome_flutter.FontAwesomeIcons.expeditedssl*/get expeditedssl() {
      return C[488] || CT.C488;
    },
    /*font_awesome_flutter.FontAwesomeIcons.externalLinkAlt*/get externalLinkAlt() {
      return C[489] || CT.C489;
    },
    /*font_awesome_flutter.FontAwesomeIcons.externalLinkSquareAlt*/get externalLinkSquareAlt() {
      return C[490] || CT.C490;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidEye*/get solidEye() {
      return C[491] || CT.C491;
    },
    /*font_awesome_flutter.FontAwesomeIcons.eye*/get eye() {
      return C[492] || CT.C492;
    },
    /*font_awesome_flutter.FontAwesomeIcons.eyeDropper*/get eyeDropper() {
      return C[493] || CT.C493;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidEyeSlash*/get solidEyeSlash() {
      return C[494] || CT.C494;
    },
    /*font_awesome_flutter.FontAwesomeIcons.eyeSlash*/get eyeSlash() {
      return C[495] || CT.C495;
    },
    /*font_awesome_flutter.FontAwesomeIcons.facebook*/get facebook() {
      return C[496] || CT.C496;
    },
    /*font_awesome_flutter.FontAwesomeIcons.facebookF*/get facebookF() {
      return C[497] || CT.C497;
    },
    /*font_awesome_flutter.FontAwesomeIcons.facebookMessenger*/get facebookMessenger() {
      return C[498] || CT.C498;
    },
    /*font_awesome_flutter.FontAwesomeIcons.facebookSquare*/get facebookSquare() {
      return C[499] || CT.C499;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fan*/get fan() {
      return C[500] || CT.C500;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fantasyFlightGames*/get fantasyFlightGames() {
      return C[501] || CT.C501;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fastBackward*/get fastBackward() {
      return C[502] || CT.C502;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fastForward*/get fastForward() {
      return C[503] || CT.C503;
    },
    /*font_awesome_flutter.FontAwesomeIcons.faucet*/get faucet() {
      return C[504] || CT.C504;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fax*/get fax() {
      return C[505] || CT.C505;
    },
    /*font_awesome_flutter.FontAwesomeIcons.feather*/get feather() {
      return C[506] || CT.C506;
    },
    /*font_awesome_flutter.FontAwesomeIcons.featherAlt*/get featherAlt() {
      return C[507] || CT.C507;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fedex*/get fedex() {
      return C[508] || CT.C508;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fedora*/get fedora() {
      return C[509] || CT.C509;
    },
    /*font_awesome_flutter.FontAwesomeIcons.female*/get female() {
      return C[510] || CT.C510;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fighterJet*/get fighterJet() {
      return C[511] || CT.C511;
    },
    /*font_awesome_flutter.FontAwesomeIcons.figma*/get figma() {
      return C[512] || CT.C512;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFile*/get solidFile() {
      return C[513] || CT.C513;
    },
    /*font_awesome_flutter.FontAwesomeIcons.file*/get file() {
      return C[514] || CT.C514;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFileAlt*/get solidFileAlt() {
      return C[515] || CT.C515;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileAlt*/get fileAlt() {
      return C[516] || CT.C516;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFileArchive*/get solidFileArchive() {
      return C[517] || CT.C517;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileArchive*/get fileArchive() {
      return C[518] || CT.C518;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFileAudio*/get solidFileAudio() {
      return C[519] || CT.C519;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileAudio*/get fileAudio() {
      return C[520] || CT.C520;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFileCode*/get solidFileCode() {
      return C[521] || CT.C521;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileCode*/get fileCode() {
      return C[522] || CT.C522;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileContract*/get fileContract() {
      return C[523] || CT.C523;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileCsv*/get fileCsv() {
      return C[524] || CT.C524;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileDownload*/get fileDownload() {
      return C[525] || CT.C525;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFileExcel*/get solidFileExcel() {
      return C[526] || CT.C526;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileExcel*/get fileExcel() {
      return C[527] || CT.C527;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileExport*/get fileExport() {
      return C[528] || CT.C528;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFileImage*/get solidFileImage() {
      return C[529] || CT.C529;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileImage*/get fileImage() {
      return C[530] || CT.C530;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileImport*/get fileImport() {
      return C[531] || CT.C531;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileInvoice*/get fileInvoice() {
      return C[532] || CT.C532;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileInvoiceDollar*/get fileInvoiceDollar() {
      return C[533] || CT.C533;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileMedical*/get fileMedical() {
      return C[534] || CT.C534;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileMedicalAlt*/get fileMedicalAlt() {
      return C[535] || CT.C535;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFilePdf*/get solidFilePdf() {
      return C[536] || CT.C536;
    },
    /*font_awesome_flutter.FontAwesomeIcons.filePdf*/get filePdf() {
      return C[537] || CT.C537;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFilePowerpoint*/get solidFilePowerpoint() {
      return C[538] || CT.C538;
    },
    /*font_awesome_flutter.FontAwesomeIcons.filePowerpoint*/get filePowerpoint() {
      return C[539] || CT.C539;
    },
    /*font_awesome_flutter.FontAwesomeIcons.filePrescription*/get filePrescription() {
      return C[540] || CT.C540;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileSignature*/get fileSignature() {
      return C[541] || CT.C541;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileUpload*/get fileUpload() {
      return C[542] || CT.C542;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFileVideo*/get solidFileVideo() {
      return C[543] || CT.C543;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileVideo*/get fileVideo() {
      return C[544] || CT.C544;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFileWord*/get solidFileWord() {
      return C[545] || CT.C545;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fileWord*/get fileWord() {
      return C[546] || CT.C546;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fill*/get fill() {
      return C[547] || CT.C547;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fillDrip*/get fillDrip() {
      return C[548] || CT.C548;
    },
    /*font_awesome_flutter.FontAwesomeIcons.film*/get film() {
      return C[549] || CT.C549;
    },
    /*font_awesome_flutter.FontAwesomeIcons.filter*/get filter() {
      return C[550] || CT.C550;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fingerprint*/get fingerprint() {
      return C[551] || CT.C551;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fire*/get fire() {
      return C[552] || CT.C552;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fireAlt*/get fireAlt() {
      return C[553] || CT.C553;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fireExtinguisher*/get fireExtinguisher() {
      return C[554] || CT.C554;
    },
    /*font_awesome_flutter.FontAwesomeIcons.firefox*/get firefox() {
      return C[555] || CT.C555;
    },
    /*font_awesome_flutter.FontAwesomeIcons.firefoxBrowser*/get firefoxBrowser() {
      return C[556] || CT.C556;
    },
    /*font_awesome_flutter.FontAwesomeIcons.firstAid*/get firstAid() {
      return C[557] || CT.C557;
    },
    /*font_awesome_flutter.FontAwesomeIcons.firstOrder*/get firstOrder() {
      return C[558] || CT.C558;
    },
    /*font_awesome_flutter.FontAwesomeIcons.firstOrderAlt*/get firstOrderAlt() {
      return C[559] || CT.C559;
    },
    /*font_awesome_flutter.FontAwesomeIcons.firstdraft*/get firstdraft() {
      return C[560] || CT.C560;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fish*/get fish() {
      return C[561] || CT.C561;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fistRaised*/get fistRaised() {
      return C[562] || CT.C562;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFlag*/get solidFlag() {
      return C[563] || CT.C563;
    },
    /*font_awesome_flutter.FontAwesomeIcons.flag*/get flag() {
      return C[564] || CT.C564;
    },
    /*font_awesome_flutter.FontAwesomeIcons.flagCheckered*/get flagCheckered() {
      return C[565] || CT.C565;
    },
    /*font_awesome_flutter.FontAwesomeIcons.flagUsa*/get flagUsa() {
      return C[566] || CT.C566;
    },
    /*font_awesome_flutter.FontAwesomeIcons.flask*/get flask() {
      return C[567] || CT.C567;
    },
    /*font_awesome_flutter.FontAwesomeIcons.flickr*/get flickr() {
      return C[568] || CT.C568;
    },
    /*font_awesome_flutter.FontAwesomeIcons.flipboard*/get flipboard() {
      return C[569] || CT.C569;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFlushed*/get solidFlushed() {
      return C[570] || CT.C570;
    },
    /*font_awesome_flutter.FontAwesomeIcons.flushed*/get flushed() {
      return C[571] || CT.C571;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fly*/get fly() {
      return C[572] || CT.C572;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFolder*/get solidFolder() {
      return C[573] || CT.C573;
    },
    /*font_awesome_flutter.FontAwesomeIcons.folder*/get folder() {
      return C[574] || CT.C574;
    },
    /*font_awesome_flutter.FontAwesomeIcons.folderMinus*/get folderMinus() {
      return C[575] || CT.C575;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFolderOpen*/get solidFolderOpen() {
      return C[576] || CT.C576;
    },
    /*font_awesome_flutter.FontAwesomeIcons.folderOpen*/get folderOpen() {
      return C[577] || CT.C577;
    },
    /*font_awesome_flutter.FontAwesomeIcons.folderPlus*/get folderPlus() {
      return C[578] || CT.C578;
    },
    /*font_awesome_flutter.FontAwesomeIcons.font*/get font() {
      return C[579] || CT.C579;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fontAwesome*/get fontAwesome() {
      return C[580] || CT.C580;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fontAwesomeAlt*/get fontAwesomeAlt() {
      return C[581] || CT.C581;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fontAwesomeFlag*/get fontAwesomeFlag() {
      return C[582] || CT.C582;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fonticons*/get fonticons() {
      return C[583] || CT.C583;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fonticonsFi*/get fonticonsFi() {
      return C[584] || CT.C584;
    },
    /*font_awesome_flutter.FontAwesomeIcons.footballBall*/get footballBall() {
      return C[585] || CT.C585;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fortAwesome*/get fortAwesome() {
      return C[586] || CT.C586;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fortAwesomeAlt*/get fortAwesomeAlt() {
      return C[587] || CT.C587;
    },
    /*font_awesome_flutter.FontAwesomeIcons.forumbee*/get forumbee() {
      return C[588] || CT.C588;
    },
    /*font_awesome_flutter.FontAwesomeIcons.forward*/get forward() {
      return C[589] || CT.C589;
    },
    /*font_awesome_flutter.FontAwesomeIcons.foursquare*/get foursquare() {
      return C[590] || CT.C590;
    },
    /*font_awesome_flutter.FontAwesomeIcons.freeCodeCamp*/get freeCodeCamp() {
      return C[591] || CT.C591;
    },
    /*font_awesome_flutter.FontAwesomeIcons.freebsd*/get freebsd() {
      return C[592] || CT.C592;
    },
    /*font_awesome_flutter.FontAwesomeIcons.frog*/get frog() {
      return C[593] || CT.C593;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFrown*/get solidFrown() {
      return C[594] || CT.C594;
    },
    /*font_awesome_flutter.FontAwesomeIcons.frown*/get frown() {
      return C[595] || CT.C595;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFrownOpen*/get solidFrownOpen() {
      return C[596] || CT.C596;
    },
    /*font_awesome_flutter.FontAwesomeIcons.frownOpen*/get frownOpen() {
      return C[597] || CT.C597;
    },
    /*font_awesome_flutter.FontAwesomeIcons.fulcrum*/get fulcrum() {
      return C[598] || CT.C598;
    },
    /*font_awesome_flutter.FontAwesomeIcons.funnelDollar*/get funnelDollar() {
      return C[599] || CT.C599;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidFutbol*/get solidFutbol() {
      return C[600] || CT.C600;
    },
    /*font_awesome_flutter.FontAwesomeIcons.futbol*/get futbol() {
      return C[601] || CT.C601;
    },
    /*font_awesome_flutter.FontAwesomeIcons.galacticRepublic*/get galacticRepublic() {
      return C[602] || CT.C602;
    },
    /*font_awesome_flutter.FontAwesomeIcons.galacticSenate*/get galacticSenate() {
      return C[603] || CT.C603;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gamepad*/get gamepad() {
      return C[604] || CT.C604;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gasPump*/get gasPump() {
      return C[605] || CT.C605;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gavel*/get gavel() {
      return C[606] || CT.C606;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGem*/get solidGem() {
      return C[607] || CT.C607;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gem*/get gem() {
      return C[608] || CT.C608;
    },
    /*font_awesome_flutter.FontAwesomeIcons.genderless*/get genderless() {
      return C[609] || CT.C609;
    },
    /*font_awesome_flutter.FontAwesomeIcons.getPocket*/get getPocket() {
      return C[610] || CT.C610;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gg*/get gg() {
      return C[611] || CT.C611;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ggCircle*/get ggCircle() {
      return C[612] || CT.C612;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ghost*/get ghost() {
      return C[613] || CT.C613;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gift*/get gift() {
      return C[614] || CT.C614;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gifts*/get gifts() {
      return C[615] || CT.C615;
    },
    /*font_awesome_flutter.FontAwesomeIcons.git*/get git() {
      return C[616] || CT.C616;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gitAlt*/get gitAlt() {
      return C[617] || CT.C617;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gitSquare*/get gitSquare() {
      return C[618] || CT.C618;
    },
    /*font_awesome_flutter.FontAwesomeIcons.github*/get github() {
      return C[619] || CT.C619;
    },
    /*font_awesome_flutter.FontAwesomeIcons.githubAlt*/get githubAlt() {
      return C[620] || CT.C620;
    },
    /*font_awesome_flutter.FontAwesomeIcons.githubSquare*/get githubSquare() {
      return C[621] || CT.C621;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gitkraken*/get gitkraken() {
      return C[622] || CT.C622;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gitlab*/get gitlab() {
      return C[623] || CT.C623;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gitter*/get gitter() {
      return C[624] || CT.C624;
    },
    /*font_awesome_flutter.FontAwesomeIcons.glassCheers*/get glassCheers() {
      return C[625] || CT.C625;
    },
    /*font_awesome_flutter.FontAwesomeIcons.glassMartini*/get glassMartini() {
      return C[626] || CT.C626;
    },
    /*font_awesome_flutter.FontAwesomeIcons.glassMartiniAlt*/get glassMartiniAlt() {
      return C[627] || CT.C627;
    },
    /*font_awesome_flutter.FontAwesomeIcons.glassWhiskey*/get glassWhiskey() {
      return C[628] || CT.C628;
    },
    /*font_awesome_flutter.FontAwesomeIcons.glasses*/get glasses() {
      return C[629] || CT.C629;
    },
    /*font_awesome_flutter.FontAwesomeIcons.glide*/get glide() {
      return C[630] || CT.C630;
    },
    /*font_awesome_flutter.FontAwesomeIcons.glideG*/get glideG() {
      return C[631] || CT.C631;
    },
    /*font_awesome_flutter.FontAwesomeIcons.globe*/get globe() {
      return C[632] || CT.C632;
    },
    /*font_awesome_flutter.FontAwesomeIcons.globeAfrica*/get globeAfrica() {
      return C[633] || CT.C633;
    },
    /*font_awesome_flutter.FontAwesomeIcons.globeAmericas*/get globeAmericas() {
      return C[634] || CT.C634;
    },
    /*font_awesome_flutter.FontAwesomeIcons.globeAsia*/get globeAsia() {
      return C[635] || CT.C635;
    },
    /*font_awesome_flutter.FontAwesomeIcons.globeEurope*/get globeEurope() {
      return C[636] || CT.C636;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gofore*/get gofore() {
      return C[637] || CT.C637;
    },
    /*font_awesome_flutter.FontAwesomeIcons.golfBall*/get golfBall() {
      return C[638] || CT.C638;
    },
    /*font_awesome_flutter.FontAwesomeIcons.goodreads*/get goodreads() {
      return C[639] || CT.C639;
    },
    /*font_awesome_flutter.FontAwesomeIcons.goodreadsG*/get goodreadsG() {
      return C[640] || CT.C640;
    },
    /*font_awesome_flutter.FontAwesomeIcons.google*/get google() {
      return C[641] || CT.C641;
    },
    /*font_awesome_flutter.FontAwesomeIcons.googleDrive*/get googleDrive() {
      return C[642] || CT.C642;
    },
    /*font_awesome_flutter.FontAwesomeIcons.googlePay*/get googlePay() {
      return C[643] || CT.C643;
    },
    /*font_awesome_flutter.FontAwesomeIcons.googlePlay*/get googlePlay() {
      return C[644] || CT.C644;
    },
    /*font_awesome_flutter.FontAwesomeIcons.googlePlus*/get googlePlus() {
      return C[645] || CT.C645;
    },
    /*font_awesome_flutter.FontAwesomeIcons.googlePlusG*/get googlePlusG() {
      return C[646] || CT.C646;
    },
    /*font_awesome_flutter.FontAwesomeIcons.googlePlusSquare*/get googlePlusSquare() {
      return C[647] || CT.C647;
    },
    /*font_awesome_flutter.FontAwesomeIcons.googleWallet*/get googleWallet() {
      return C[648] || CT.C648;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gopuram*/get gopuram() {
      return C[649] || CT.C649;
    },
    /*font_awesome_flutter.FontAwesomeIcons.graduationCap*/get graduationCap() {
      return C[650] || CT.C650;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gratipay*/get gratipay() {
      return C[651] || CT.C651;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grav*/get grav() {
      return C[652] || CT.C652;
    },
    /*font_awesome_flutter.FontAwesomeIcons.greaterThan*/get greaterThan() {
      return C[653] || CT.C653;
    },
    /*font_awesome_flutter.FontAwesomeIcons.greaterThanEqual*/get greaterThanEqual() {
      return C[654] || CT.C654;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrimace*/get solidGrimace() {
      return C[655] || CT.C655;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grimace*/get grimace() {
      return C[656] || CT.C656;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrin*/get solidGrin() {
      return C[657] || CT.C657;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grin*/get grin() {
      return C[658] || CT.C658;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinAlt*/get solidGrinAlt() {
      return C[659] || CT.C659;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinAlt*/get grinAlt() {
      return C[660] || CT.C660;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinBeam*/get solidGrinBeam() {
      return C[661] || CT.C661;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinBeam*/get grinBeam() {
      return C[662] || CT.C662;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinBeamSweat*/get solidGrinBeamSweat() {
      return C[663] || CT.C663;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinBeamSweat*/get grinBeamSweat() {
      return C[664] || CT.C664;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinHearts*/get solidGrinHearts() {
      return C[665] || CT.C665;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinHearts*/get grinHearts() {
      return C[666] || CT.C666;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinSquint*/get solidGrinSquint() {
      return C[667] || CT.C667;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinSquint*/get grinSquint() {
      return C[668] || CT.C668;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinSquintTears*/get solidGrinSquintTears() {
      return C[669] || CT.C669;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinSquintTears*/get grinSquintTears() {
      return C[670] || CT.C670;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinStars*/get solidGrinStars() {
      return C[671] || CT.C671;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinStars*/get grinStars() {
      return C[672] || CT.C672;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinTears*/get solidGrinTears() {
      return C[673] || CT.C673;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinTears*/get grinTears() {
      return C[674] || CT.C674;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinTongue*/get solidGrinTongue() {
      return C[675] || CT.C675;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinTongue*/get grinTongue() {
      return C[676] || CT.C676;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinTongueSquint*/get solidGrinTongueSquint() {
      return C[677] || CT.C677;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinTongueSquint*/get grinTongueSquint() {
      return C[678] || CT.C678;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinTongueWink*/get solidGrinTongueWink() {
      return C[679] || CT.C679;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinTongueWink*/get grinTongueWink() {
      return C[680] || CT.C680;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidGrinWink*/get solidGrinWink() {
      return C[681] || CT.C681;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grinWink*/get grinWink() {
      return C[682] || CT.C682;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gripHorizontal*/get gripHorizontal() {
      return C[683] || CT.C683;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gripLines*/get gripLines() {
      return C[684] || CT.C684;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gripLinesVertical*/get gripLinesVertical() {
      return C[685] || CT.C685;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gripVertical*/get gripVertical() {
      return C[686] || CT.C686;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gripfire*/get gripfire() {
      return C[687] || CT.C687;
    },
    /*font_awesome_flutter.FontAwesomeIcons.grunt*/get grunt() {
      return C[688] || CT.C688;
    },
    /*font_awesome_flutter.FontAwesomeIcons.guilded*/get guilded() {
      return C[689] || CT.C689;
    },
    /*font_awesome_flutter.FontAwesomeIcons.guitar*/get guitar() {
      return C[690] || CT.C690;
    },
    /*font_awesome_flutter.FontAwesomeIcons.gulp*/get gulp() {
      return C[691] || CT.C691;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hSquare*/get hSquare() {
      return C[692] || CT.C692;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hackerNews*/get hackerNews() {
      return C[693] || CT.C693;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hackerNewsSquare*/get hackerNewsSquare() {
      return C[694] || CT.C694;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hackerrank*/get hackerrank() {
      return C[695] || CT.C695;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hamburger*/get hamburger() {
      return C[696] || CT.C696;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hammer*/get hammer() {
      return C[697] || CT.C697;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hamsa*/get hamsa() {
      return C[698] || CT.C698;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handHolding*/get handHolding() {
      return C[699] || CT.C699;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handHoldingHeart*/get handHoldingHeart() {
      return C[700] || CT.C700;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handHoldingMedical*/get handHoldingMedical() {
      return C[701] || CT.C701;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handHoldingUsd*/get handHoldingUsd() {
      return C[702] || CT.C702;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handHoldingWater*/get handHoldingWater() {
      return C[703] || CT.C703;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandLizard*/get solidHandLizard() {
      return C[704] || CT.C704;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handLizard*/get handLizard() {
      return C[705] || CT.C705;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handMiddleFinger*/get handMiddleFinger() {
      return C[706] || CT.C706;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandPaper*/get solidHandPaper() {
      return C[707] || CT.C707;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handPaper*/get handPaper() {
      return C[708] || CT.C708;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandPeace*/get solidHandPeace() {
      return C[709] || CT.C709;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handPeace*/get handPeace() {
      return C[710] || CT.C710;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandPointDown*/get solidHandPointDown() {
      return C[711] || CT.C711;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handPointDown*/get handPointDown() {
      return C[712] || CT.C712;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandPointLeft*/get solidHandPointLeft() {
      return C[713] || CT.C713;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handPointLeft*/get handPointLeft() {
      return C[714] || CT.C714;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandPointRight*/get solidHandPointRight() {
      return C[715] || CT.C715;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handPointRight*/get handPointRight() {
      return C[716] || CT.C716;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandPointUp*/get solidHandPointUp() {
      return C[717] || CT.C717;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handPointUp*/get handPointUp() {
      return C[718] || CT.C718;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandPointer*/get solidHandPointer() {
      return C[719] || CT.C719;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handPointer*/get handPointer() {
      return C[720] || CT.C720;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandRock*/get solidHandRock() {
      return C[721] || CT.C721;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handRock*/get handRock() {
      return C[722] || CT.C722;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandScissors*/get solidHandScissors() {
      return C[723] || CT.C723;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handScissors*/get handScissors() {
      return C[724] || CT.C724;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handSparkles*/get handSparkles() {
      return C[725] || CT.C725;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandSpock*/get solidHandSpock() {
      return C[726] || CT.C726;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handSpock*/get handSpock() {
      return C[727] || CT.C727;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hands*/get hands() {
      return C[728] || CT.C728;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handsHelping*/get handsHelping() {
      return C[729] || CT.C729;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handsWash*/get handsWash() {
      return C[730] || CT.C730;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHandshake*/get solidHandshake() {
      return C[731] || CT.C731;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handshake*/get handshake() {
      return C[732] || CT.C732;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handshakeAltSlash*/get handshakeAltSlash() {
      return C[733] || CT.C733;
    },
    /*font_awesome_flutter.FontAwesomeIcons.handshakeSlash*/get handshakeSlash() {
      return C[734] || CT.C734;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hanukiah*/get hanukiah() {
      return C[735] || CT.C735;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hardHat*/get hardHat() {
      return C[736] || CT.C736;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hashtag*/get hashtag() {
      return C[737] || CT.C737;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hatCowboy*/get hatCowboy() {
      return C[738] || CT.C738;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hatCowboySide*/get hatCowboySide() {
      return C[739] || CT.C739;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hatWizard*/get hatWizard() {
      return C[740] || CT.C740;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHdd*/get solidHdd() {
      return C[741] || CT.C741;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hdd*/get hdd() {
      return C[742] || CT.C742;
    },
    /*font_awesome_flutter.FontAwesomeIcons.headSideCough*/get headSideCough() {
      return C[743] || CT.C743;
    },
    /*font_awesome_flutter.FontAwesomeIcons.headSideCoughSlash*/get headSideCoughSlash() {
      return C[744] || CT.C744;
    },
    /*font_awesome_flutter.FontAwesomeIcons.headSideMask*/get headSideMask() {
      return C[745] || CT.C745;
    },
    /*font_awesome_flutter.FontAwesomeIcons.headSideVirus*/get headSideVirus() {
      return C[746] || CT.C746;
    },
    /*font_awesome_flutter.FontAwesomeIcons.heading*/get heading() {
      return C[747] || CT.C747;
    },
    /*font_awesome_flutter.FontAwesomeIcons.headphones*/get headphones() {
      return C[748] || CT.C748;
    },
    /*font_awesome_flutter.FontAwesomeIcons.headphonesAlt*/get headphonesAlt() {
      return C[749] || CT.C749;
    },
    /*font_awesome_flutter.FontAwesomeIcons.headset*/get headset() {
      return C[750] || CT.C750;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHeart*/get solidHeart() {
      return C[751] || CT.C751;
    },
    /*font_awesome_flutter.FontAwesomeIcons.heart*/get heart() {
      return C[752] || CT.C752;
    },
    /*font_awesome_flutter.FontAwesomeIcons.heartBroken*/get heartBroken() {
      return C[753] || CT.C753;
    },
    /*font_awesome_flutter.FontAwesomeIcons.heartbeat*/get heartbeat() {
      return C[754] || CT.C754;
    },
    /*font_awesome_flutter.FontAwesomeIcons.helicopter*/get helicopter() {
      return C[755] || CT.C755;
    },
    /*font_awesome_flutter.FontAwesomeIcons.highlighter*/get highlighter() {
      return C[756] || CT.C756;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hiking*/get hiking() {
      return C[757] || CT.C757;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hippo*/get hippo() {
      return C[758] || CT.C758;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hips*/get hips() {
      return C[759] || CT.C759;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hireAHelper*/get hireAHelper() {
      return C[760] || CT.C760;
    },
    /*font_awesome_flutter.FontAwesomeIcons.history*/get history() {
      return C[761] || CT.C761;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hive*/get hive() {
      return C[762] || CT.C762;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hockeyPuck*/get hockeyPuck() {
      return C[763] || CT.C763;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hollyBerry*/get hollyBerry() {
      return C[764] || CT.C764;
    },
    /*font_awesome_flutter.FontAwesomeIcons.home*/get home() {
      return C[765] || CT.C765;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hooli*/get hooli() {
      return C[766] || CT.C766;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hornbill*/get hornbill() {
      return C[767] || CT.C767;
    },
    /*font_awesome_flutter.FontAwesomeIcons.horse*/get horse() {
      return C[768] || CT.C768;
    },
    /*font_awesome_flutter.FontAwesomeIcons.horseHead*/get horseHead() {
      return C[769] || CT.C769;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHospital*/get solidHospital() {
      return C[770] || CT.C770;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hospital*/get hospital() {
      return C[771] || CT.C771;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hospitalAlt*/get hospitalAlt() {
      return C[772] || CT.C772;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hospitalSymbol*/get hospitalSymbol() {
      return C[773] || CT.C773;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hospitalUser*/get hospitalUser() {
      return C[774] || CT.C774;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hotTub*/get hotTub() {
      return C[775] || CT.C775;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hotdog*/get hotdog() {
      return C[776] || CT.C776;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hotel*/get hotel() {
      return C[777] || CT.C777;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hotjar*/get hotjar() {
      return C[778] || CT.C778;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidHourglass*/get solidHourglass() {
      return C[779] || CT.C779;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hourglass*/get hourglass() {
      return C[780] || CT.C780;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hourglassEnd*/get hourglassEnd() {
      return C[781] || CT.C781;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hourglassHalf*/get hourglassHalf() {
      return C[782] || CT.C782;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hourglassStart*/get hourglassStart() {
      return C[783] || CT.C783;
    },
    /*font_awesome_flutter.FontAwesomeIcons.houseDamage*/get houseDamage() {
      return C[784] || CT.C784;
    },
    /*font_awesome_flutter.FontAwesomeIcons.houseUser*/get houseUser() {
      return C[785] || CT.C785;
    },
    /*font_awesome_flutter.FontAwesomeIcons.houzz*/get houzz() {
      return C[786] || CT.C786;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hryvnia*/get hryvnia() {
      return C[787] || CT.C787;
    },
    /*font_awesome_flutter.FontAwesomeIcons.html5*/get html5() {
      return C[788] || CT.C788;
    },
    /*font_awesome_flutter.FontAwesomeIcons.hubspot*/get hubspot() {
      return C[789] || CT.C789;
    },
    /*font_awesome_flutter.FontAwesomeIcons.iCursor*/get iCursor() {
      return C[790] || CT.C790;
    },
    /*font_awesome_flutter.FontAwesomeIcons.iceCream*/get iceCream() {
      return C[791] || CT.C791;
    },
    /*font_awesome_flutter.FontAwesomeIcons.icicles*/get icicles() {
      return C[792] || CT.C792;
    },
    /*font_awesome_flutter.FontAwesomeIcons.icons*/get icons() {
      return C[793] || CT.C793;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidIdBadge*/get solidIdBadge() {
      return C[794] || CT.C794;
    },
    /*font_awesome_flutter.FontAwesomeIcons.idBadge*/get idBadge() {
      return C[795] || CT.C795;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidIdCard*/get solidIdCard() {
      return C[796] || CT.C796;
    },
    /*font_awesome_flutter.FontAwesomeIcons.idCard*/get idCard() {
      return C[797] || CT.C797;
    },
    /*font_awesome_flutter.FontAwesomeIcons.idCardAlt*/get idCardAlt() {
      return C[798] || CT.C798;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ideal*/get ideal() {
      return C[799] || CT.C799;
    },
    /*font_awesome_flutter.FontAwesomeIcons.igloo*/get igloo() {
      return C[800] || CT.C800;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidImage*/get solidImage() {
      return C[801] || CT.C801;
    },
    /*font_awesome_flutter.FontAwesomeIcons.image*/get image() {
      return C[802] || CT.C802;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidImages*/get solidImages() {
      return C[803] || CT.C803;
    },
    /*font_awesome_flutter.FontAwesomeIcons.images*/get images() {
      return C[804] || CT.C804;
    },
    /*font_awesome_flutter.FontAwesomeIcons.imdb*/get imdb() {
      return C[805] || CT.C805;
    },
    /*font_awesome_flutter.FontAwesomeIcons.inbox*/get inbox() {
      return C[806] || CT.C806;
    },
    /*font_awesome_flutter.FontAwesomeIcons.indent*/get indent() {
      return C[807] || CT.C807;
    },
    /*font_awesome_flutter.FontAwesomeIcons.industry*/get industry() {
      return C[808] || CT.C808;
    },
    /*font_awesome_flutter.FontAwesomeIcons.infinity*/get infinity() {
      return C[809] || CT.C809;
    },
    /*font_awesome_flutter.FontAwesomeIcons.info*/get info() {
      return C[810] || CT.C810;
    },
    /*font_awesome_flutter.FontAwesomeIcons.infoCircle*/get infoCircle() {
      return C[811] || CT.C811;
    },
    /*font_awesome_flutter.FontAwesomeIcons.innosoft*/get innosoft() {
      return C[812] || CT.C812;
    },
    /*font_awesome_flutter.FontAwesomeIcons.instagram*/get instagram() {
      return C[813] || CT.C813;
    },
    /*font_awesome_flutter.FontAwesomeIcons.instagramSquare*/get instagramSquare() {
      return C[814] || CT.C814;
    },
    /*font_awesome_flutter.FontAwesomeIcons.instalod*/get instalod() {
      return C[815] || CT.C815;
    },
    /*font_awesome_flutter.FontAwesomeIcons.intercom*/get intercom() {
      return C[816] || CT.C816;
    },
    /*font_awesome_flutter.FontAwesomeIcons.internetExplorer*/get internetExplorer() {
      return C[817] || CT.C817;
    },
    /*font_awesome_flutter.FontAwesomeIcons.invision*/get invision() {
      return C[818] || CT.C818;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ioxhost*/get ioxhost() {
      return C[819] || CT.C819;
    },
    /*font_awesome_flutter.FontAwesomeIcons.italic*/get italic() {
      return C[820] || CT.C820;
    },
    /*font_awesome_flutter.FontAwesomeIcons.itchIo*/get itchIo() {
      return C[821] || CT.C821;
    },
    /*font_awesome_flutter.FontAwesomeIcons.itunes*/get itunes() {
      return C[822] || CT.C822;
    },
    /*font_awesome_flutter.FontAwesomeIcons.itunesNote*/get itunesNote() {
      return C[823] || CT.C823;
    },
    /*font_awesome_flutter.FontAwesomeIcons.java*/get java() {
      return C[824] || CT.C824;
    },
    /*font_awesome_flutter.FontAwesomeIcons.jedi*/get jedi() {
      return C[825] || CT.C825;
    },
    /*font_awesome_flutter.FontAwesomeIcons.jediOrder*/get jediOrder() {
      return C[826] || CT.C826;
    },
    /*font_awesome_flutter.FontAwesomeIcons.jenkins*/get jenkins() {
      return C[827] || CT.C827;
    },
    /*font_awesome_flutter.FontAwesomeIcons.jira*/get jira() {
      return C[828] || CT.C828;
    },
    /*font_awesome_flutter.FontAwesomeIcons.joget*/get joget() {
      return C[829] || CT.C829;
    },
    /*font_awesome_flutter.FontAwesomeIcons.joint*/get joint() {
      return C[830] || CT.C830;
    },
    /*font_awesome_flutter.FontAwesomeIcons.joomla*/get joomla() {
      return C[831] || CT.C831;
    },
    /*font_awesome_flutter.FontAwesomeIcons.journalWhills*/get journalWhills() {
      return C[832] || CT.C832;
    },
    /*font_awesome_flutter.FontAwesomeIcons.js*/get js() {
      return C[833] || CT.C833;
    },
    /*font_awesome_flutter.FontAwesomeIcons.jsSquare*/get jsSquare() {
      return C[834] || CT.C834;
    },
    /*font_awesome_flutter.FontAwesomeIcons.jsfiddle*/get jsfiddle() {
      return C[835] || CT.C835;
    },
    /*font_awesome_flutter.FontAwesomeIcons.kaaba*/get kaaba() {
      return C[836] || CT.C836;
    },
    /*font_awesome_flutter.FontAwesomeIcons.kaggle*/get kaggle() {
      return C[837] || CT.C837;
    },
    /*font_awesome_flutter.FontAwesomeIcons.key*/get key() {
      return C[838] || CT.C838;
    },
    /*font_awesome_flutter.FontAwesomeIcons.keybase*/get keybase() {
      return C[839] || CT.C839;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidKeyboard*/get solidKeyboard() {
      return C[840] || CT.C840;
    },
    /*font_awesome_flutter.FontAwesomeIcons.keyboard*/get keyboard() {
      return C[841] || CT.C841;
    },
    /*font_awesome_flutter.FontAwesomeIcons.keycdn*/get keycdn() {
      return C[842] || CT.C842;
    },
    /*font_awesome_flutter.FontAwesomeIcons.khanda*/get khanda() {
      return C[843] || CT.C843;
    },
    /*font_awesome_flutter.FontAwesomeIcons.kickstarter*/get kickstarter() {
      return C[844] || CT.C844;
    },
    /*font_awesome_flutter.FontAwesomeIcons.kickstarterK*/get kickstarterK() {
      return C[845] || CT.C845;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidKiss*/get solidKiss() {
      return C[846] || CT.C846;
    },
    /*font_awesome_flutter.FontAwesomeIcons.kiss*/get kiss() {
      return C[847] || CT.C847;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidKissBeam*/get solidKissBeam() {
      return C[848] || CT.C848;
    },
    /*font_awesome_flutter.FontAwesomeIcons.kissBeam*/get kissBeam() {
      return C[849] || CT.C849;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidKissWinkHeart*/get solidKissWinkHeart() {
      return C[850] || CT.C850;
    },
    /*font_awesome_flutter.FontAwesomeIcons.kissWinkHeart*/get kissWinkHeart() {
      return C[851] || CT.C851;
    },
    /*font_awesome_flutter.FontAwesomeIcons.kiwiBird*/get kiwiBird() {
      return C[852] || CT.C852;
    },
    /*font_awesome_flutter.FontAwesomeIcons.korvue*/get korvue() {
      return C[853] || CT.C853;
    },
    /*font_awesome_flutter.FontAwesomeIcons.landmark*/get landmark() {
      return C[854] || CT.C854;
    },
    /*font_awesome_flutter.FontAwesomeIcons.language*/get language() {
      return C[855] || CT.C855;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laptop*/get laptop() {
      return C[856] || CT.C856;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laptopCode*/get laptopCode() {
      return C[857] || CT.C857;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laptopHouse*/get laptopHouse() {
      return C[858] || CT.C858;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laptopMedical*/get laptopMedical() {
      return C[859] || CT.C859;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laravel*/get laravel() {
      return C[860] || CT.C860;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lastfm*/get lastfm() {
      return C[861] || CT.C861;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lastfmSquare*/get lastfmSquare() {
      return C[862] || CT.C862;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidLaugh*/get solidLaugh() {
      return C[863] || CT.C863;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laugh*/get laugh() {
      return C[864] || CT.C864;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidLaughBeam*/get solidLaughBeam() {
      return C[865] || CT.C865;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laughBeam*/get laughBeam() {
      return C[866] || CT.C866;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidLaughSquint*/get solidLaughSquint() {
      return C[867] || CT.C867;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laughSquint*/get laughSquint() {
      return C[868] || CT.C868;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidLaughWink*/get solidLaughWink() {
      return C[869] || CT.C869;
    },
    /*font_awesome_flutter.FontAwesomeIcons.laughWink*/get laughWink() {
      return C[870] || CT.C870;
    },
    /*font_awesome_flutter.FontAwesomeIcons.layerGroup*/get layerGroup() {
      return C[871] || CT.C871;
    },
    /*font_awesome_flutter.FontAwesomeIcons.leaf*/get leaf() {
      return C[872] || CT.C872;
    },
    /*font_awesome_flutter.FontAwesomeIcons.leanpub*/get leanpub() {
      return C[873] || CT.C873;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidLemon*/get solidLemon() {
      return C[874] || CT.C874;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lemon*/get lemon() {
      return C[875] || CT.C875;
    },
    /*font_awesome_flutter.FontAwesomeIcons.less*/get less() {
      return C[876] || CT.C876;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lessThan*/get lessThan() {
      return C[877] || CT.C877;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lessThanEqual*/get lessThanEqual() {
      return C[878] || CT.C878;
    },
    /*font_awesome_flutter.FontAwesomeIcons.levelDownAlt*/get levelDownAlt() {
      return C[879] || CT.C879;
    },
    /*font_awesome_flutter.FontAwesomeIcons.levelUpAlt*/get levelUpAlt() {
      return C[880] || CT.C880;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidLifeRing*/get solidLifeRing() {
      return C[881] || CT.C881;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lifeRing*/get lifeRing() {
      return C[882] || CT.C882;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidLightbulb*/get solidLightbulb() {
      return C[883] || CT.C883;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lightbulb*/get lightbulb() {
      return C[884] || CT.C884;
    },
    /*font_awesome_flutter.FontAwesomeIcons.line*/get line() {
      return C[885] || CT.C885;
    },
    /*font_awesome_flutter.FontAwesomeIcons.link*/get link() {
      return C[886] || CT.C886;
    },
    /*font_awesome_flutter.FontAwesomeIcons.linkedin*/get linkedin() {
      return C[887] || CT.C887;
    },
    /*font_awesome_flutter.FontAwesomeIcons.linkedinIn*/get linkedinIn() {
      return C[888] || CT.C888;
    },
    /*font_awesome_flutter.FontAwesomeIcons.linode*/get linode() {
      return C[889] || CT.C889;
    },
    /*font_awesome_flutter.FontAwesomeIcons.linux*/get linux() {
      return C[890] || CT.C890;
    },
    /*font_awesome_flutter.FontAwesomeIcons.liraSign*/get liraSign() {
      return C[891] || CT.C891;
    },
    /*font_awesome_flutter.FontAwesomeIcons.list*/get list() {
      return C[892] || CT.C892;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidListAlt*/get solidListAlt() {
      return C[893] || CT.C893;
    },
    /*font_awesome_flutter.FontAwesomeIcons.listAlt*/get listAlt() {
      return C[894] || CT.C894;
    },
    /*font_awesome_flutter.FontAwesomeIcons.listOl*/get listOl() {
      return C[895] || CT.C895;
    },
    /*font_awesome_flutter.FontAwesomeIcons.listUl*/get listUl() {
      return C[896] || CT.C896;
    },
    /*font_awesome_flutter.FontAwesomeIcons.locationArrow*/get locationArrow() {
      return C[897] || CT.C897;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lock*/get lock() {
      return C[898] || CT.C898;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lockOpen*/get lockOpen() {
      return C[899] || CT.C899;
    },
    /*font_awesome_flutter.FontAwesomeIcons.longArrowAltDown*/get longArrowAltDown() {
      return C[900] || CT.C900;
    },
    /*font_awesome_flutter.FontAwesomeIcons.longArrowAltLeft*/get longArrowAltLeft() {
      return C[901] || CT.C901;
    },
    /*font_awesome_flutter.FontAwesomeIcons.longArrowAltRight*/get longArrowAltRight() {
      return C[902] || CT.C902;
    },
    /*font_awesome_flutter.FontAwesomeIcons.longArrowAltUp*/get longArrowAltUp() {
      return C[903] || CT.C903;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lowVision*/get lowVision() {
      return C[904] || CT.C904;
    },
    /*font_awesome_flutter.FontAwesomeIcons.luggageCart*/get luggageCart() {
      return C[905] || CT.C905;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lungs*/get lungs() {
      return C[906] || CT.C906;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lungsVirus*/get lungsVirus() {
      return C[907] || CT.C907;
    },
    /*font_awesome_flutter.FontAwesomeIcons.lyft*/get lyft() {
      return C[908] || CT.C908;
    },
    /*font_awesome_flutter.FontAwesomeIcons.magento*/get magento() {
      return C[909] || CT.C909;
    },
    /*font_awesome_flutter.FontAwesomeIcons.magic*/get magic() {
      return C[910] || CT.C910;
    },
    /*font_awesome_flutter.FontAwesomeIcons.magnet*/get magnet() {
      return C[911] || CT.C911;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mailBulk*/get mailBulk() {
      return C[912] || CT.C912;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mailchimp*/get mailchimp() {
      return C[913] || CT.C913;
    },
    /*font_awesome_flutter.FontAwesomeIcons.male*/get male() {
      return C[914] || CT.C914;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mandalorian*/get mandalorian() {
      return C[915] || CT.C915;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidMap*/get solidMap() {
      return C[916] || CT.C916;
    },
    /*font_awesome_flutter.FontAwesomeIcons.map*/get map() {
      return C[917] || CT.C917;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mapMarked*/get mapMarked() {
      return C[918] || CT.C918;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mapMarkedAlt*/get mapMarkedAlt() {
      return C[919] || CT.C919;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mapMarker*/get mapMarker() {
      return C[920] || CT.C920;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mapMarkerAlt*/get mapMarkerAlt() {
      return C[921] || CT.C921;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mapPin*/get mapPin() {
      return C[922] || CT.C922;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mapSigns*/get mapSigns() {
      return C[923] || CT.C923;
    },
    /*font_awesome_flutter.FontAwesomeIcons.markdown*/get markdown() {
      return C[924] || CT.C924;
    },
    /*font_awesome_flutter.FontAwesomeIcons.marker*/get marker() {
      return C[925] || CT.C925;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mars*/get mars() {
      return C[926] || CT.C926;
    },
    /*font_awesome_flutter.FontAwesomeIcons.marsDouble*/get marsDouble() {
      return C[927] || CT.C927;
    },
    /*font_awesome_flutter.FontAwesomeIcons.marsStroke*/get marsStroke() {
      return C[928] || CT.C928;
    },
    /*font_awesome_flutter.FontAwesomeIcons.marsStrokeH*/get marsStrokeH() {
      return C[929] || CT.C929;
    },
    /*font_awesome_flutter.FontAwesomeIcons.marsStrokeV*/get marsStrokeV() {
      return C[930] || CT.C930;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mask*/get mask() {
      return C[931] || CT.C931;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mastodon*/get mastodon() {
      return C[932] || CT.C932;
    },
    /*font_awesome_flutter.FontAwesomeIcons.maxcdn*/get maxcdn() {
      return C[933] || CT.C933;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mdb*/get mdb() {
      return C[934] || CT.C934;
    },
    /*font_awesome_flutter.FontAwesomeIcons.medal*/get medal() {
      return C[935] || CT.C935;
    },
    /*font_awesome_flutter.FontAwesomeIcons.medapps*/get medapps() {
      return C[936] || CT.C936;
    },
    /*font_awesome_flutter.FontAwesomeIcons.medium*/get medium() {
      return C[937] || CT.C937;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mediumM*/get mediumM() {
      return C[938] || CT.C938;
    },
    /*font_awesome_flutter.FontAwesomeIcons.medkit*/get medkit() {
      return C[939] || CT.C939;
    },
    /*font_awesome_flutter.FontAwesomeIcons.medrt*/get medrt() {
      return C[940] || CT.C940;
    },
    /*font_awesome_flutter.FontAwesomeIcons.meetup*/get meetup() {
      return C[941] || CT.C941;
    },
    /*font_awesome_flutter.FontAwesomeIcons.megaport*/get megaport() {
      return C[942] || CT.C942;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidMeh*/get solidMeh() {
      return C[943] || CT.C943;
    },
    /*font_awesome_flutter.FontAwesomeIcons.meh*/get meh() {
      return C[944] || CT.C944;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidMehBlank*/get solidMehBlank() {
      return C[945] || CT.C945;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mehBlank*/get mehBlank() {
      return C[946] || CT.C946;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidMehRollingEyes*/get solidMehRollingEyes() {
      return C[947] || CT.C947;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mehRollingEyes*/get mehRollingEyes() {
      return C[948] || CT.C948;
    },
    /*font_awesome_flutter.FontAwesomeIcons.memory*/get memory() {
      return C[949] || CT.C949;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mendeley*/get mendeley() {
      return C[950] || CT.C950;
    },
    /*font_awesome_flutter.FontAwesomeIcons.menorah*/get menorah() {
      return C[951] || CT.C951;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mercury*/get mercury() {
      return C[952] || CT.C952;
    },
    /*font_awesome_flutter.FontAwesomeIcons.meteor*/get meteor() {
      return C[953] || CT.C953;
    },
    /*font_awesome_flutter.FontAwesomeIcons.microblog*/get microblog() {
      return C[954] || CT.C954;
    },
    /*font_awesome_flutter.FontAwesomeIcons.microchip*/get microchip() {
      return C[955] || CT.C955;
    },
    /*font_awesome_flutter.FontAwesomeIcons.microphone*/get microphone() {
      return C[956] || CT.C956;
    },
    /*font_awesome_flutter.FontAwesomeIcons.microphoneAlt*/get microphoneAlt() {
      return C[957] || CT.C957;
    },
    /*font_awesome_flutter.FontAwesomeIcons.microphoneAltSlash*/get microphoneAltSlash() {
      return C[958] || CT.C958;
    },
    /*font_awesome_flutter.FontAwesomeIcons.microphoneSlash*/get microphoneSlash() {
      return C[959] || CT.C959;
    },
    /*font_awesome_flutter.FontAwesomeIcons.microscope*/get microscope() {
      return C[960] || CT.C960;
    },
    /*font_awesome_flutter.FontAwesomeIcons.microsoft*/get microsoft() {
      return C[961] || CT.C961;
    },
    /*font_awesome_flutter.FontAwesomeIcons.minus*/get minus() {
      return C[962] || CT.C962;
    },
    /*font_awesome_flutter.FontAwesomeIcons.minusCircle*/get minusCircle() {
      return C[963] || CT.C963;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidMinusSquare*/get solidMinusSquare() {
      return C[964] || CT.C964;
    },
    /*font_awesome_flutter.FontAwesomeIcons.minusSquare*/get minusSquare() {
      return C[965] || CT.C965;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mitten*/get mitten() {
      return C[966] || CT.C966;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mix*/get mix() {
      return C[967] || CT.C967;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mixcloud*/get mixcloud() {
      return C[968] || CT.C968;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mixer*/get mixer() {
      return C[969] || CT.C969;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mizuni*/get mizuni() {
      return C[970] || CT.C970;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mobile*/get mobile() {
      return C[971] || CT.C971;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mobileAlt*/get mobileAlt() {
      return C[972] || CT.C972;
    },
    /*font_awesome_flutter.FontAwesomeIcons.modx*/get modx() {
      return C[973] || CT.C973;
    },
    /*font_awesome_flutter.FontAwesomeIcons.monero*/get monero() {
      return C[974] || CT.C974;
    },
    /*font_awesome_flutter.FontAwesomeIcons.moneyBill*/get moneyBill() {
      return C[975] || CT.C975;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidMoneyBillAlt*/get solidMoneyBillAlt() {
      return C[976] || CT.C976;
    },
    /*font_awesome_flutter.FontAwesomeIcons.moneyBillAlt*/get moneyBillAlt() {
      return C[977] || CT.C977;
    },
    /*font_awesome_flutter.FontAwesomeIcons.moneyBillWave*/get moneyBillWave() {
      return C[978] || CT.C978;
    },
    /*font_awesome_flutter.FontAwesomeIcons.moneyBillWaveAlt*/get moneyBillWaveAlt() {
      return C[979] || CT.C979;
    },
    /*font_awesome_flutter.FontAwesomeIcons.moneyCheck*/get moneyCheck() {
      return C[980] || CT.C980;
    },
    /*font_awesome_flutter.FontAwesomeIcons.moneyCheckAlt*/get moneyCheckAlt() {
      return C[981] || CT.C981;
    },
    /*font_awesome_flutter.FontAwesomeIcons.monument*/get monument() {
      return C[982] || CT.C982;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidMoon*/get solidMoon() {
      return C[983] || CT.C983;
    },
    /*font_awesome_flutter.FontAwesomeIcons.moon*/get moon() {
      return C[984] || CT.C984;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mortarPestle*/get mortarPestle() {
      return C[985] || CT.C985;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mosque*/get mosque() {
      return C[986] || CT.C986;
    },
    /*font_awesome_flutter.FontAwesomeIcons.motorcycle*/get motorcycle() {
      return C[987] || CT.C987;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mountain*/get mountain() {
      return C[988] || CT.C988;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mouse*/get mouse() {
      return C[989] || CT.C989;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mousePointer*/get mousePointer() {
      return C[990] || CT.C990;
    },
    /*font_awesome_flutter.FontAwesomeIcons.mugHot*/get mugHot() {
      return C[991] || CT.C991;
    },
    /*font_awesome_flutter.FontAwesomeIcons.music*/get music() {
      return C[992] || CT.C992;
    },
    /*font_awesome_flutter.FontAwesomeIcons.napster*/get napster() {
      return C[993] || CT.C993;
    },
    /*font_awesome_flutter.FontAwesomeIcons.neos*/get neos() {
      return C[994] || CT.C994;
    },
    /*font_awesome_flutter.FontAwesomeIcons.networkWired*/get networkWired() {
      return C[995] || CT.C995;
    },
    /*font_awesome_flutter.FontAwesomeIcons.neuter*/get neuter() {
      return C[996] || CT.C996;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidNewspaper*/get solidNewspaper() {
      return C[997] || CT.C997;
    },
    /*font_awesome_flutter.FontAwesomeIcons.newspaper*/get newspaper() {
      return C[998] || CT.C998;
    },
    /*font_awesome_flutter.FontAwesomeIcons.nimblr*/get nimblr() {
      return C[999] || CT.C999;
    },
    /*font_awesome_flutter.FontAwesomeIcons.node*/get node() {
      return C[1000] || CT.C1000;
    },
    /*font_awesome_flutter.FontAwesomeIcons.nodeJs*/get nodeJs() {
      return C[1001] || CT.C1001;
    },
    /*font_awesome_flutter.FontAwesomeIcons.notEqual*/get notEqual() {
      return C[1002] || CT.C1002;
    },
    /*font_awesome_flutter.FontAwesomeIcons.notesMedical*/get notesMedical() {
      return C[1003] || CT.C1003;
    },
    /*font_awesome_flutter.FontAwesomeIcons.npm*/get npm() {
      return C[1004] || CT.C1004;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ns8*/get ns8() {
      return C[1005] || CT.C1005;
    },
    /*font_awesome_flutter.FontAwesomeIcons.nutritionix*/get nutritionix() {
      return C[1006] || CT.C1006;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidObjectGroup*/get solidObjectGroup() {
      return C[1007] || CT.C1007;
    },
    /*font_awesome_flutter.FontAwesomeIcons.objectGroup*/get objectGroup() {
      return C[1008] || CT.C1008;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidObjectUngroup*/get solidObjectUngroup() {
      return C[1009] || CT.C1009;
    },
    /*font_awesome_flutter.FontAwesomeIcons.objectUngroup*/get objectUngroup() {
      return C[1010] || CT.C1010;
    },
    /*font_awesome_flutter.FontAwesomeIcons.octopusDeploy*/get octopusDeploy() {
      return C[1011] || CT.C1011;
    },
    /*font_awesome_flutter.FontAwesomeIcons.odnoklassniki*/get odnoklassniki() {
      return C[1012] || CT.C1012;
    },
    /*font_awesome_flutter.FontAwesomeIcons.odnoklassnikiSquare*/get odnoklassnikiSquare() {
      return C[1013] || CT.C1013;
    },
    /*font_awesome_flutter.FontAwesomeIcons.oilCan*/get oilCan() {
      return C[1014] || CT.C1014;
    },
    /*font_awesome_flutter.FontAwesomeIcons.oldRepublic*/get oldRepublic() {
      return C[1015] || CT.C1015;
    },
    /*font_awesome_flutter.FontAwesomeIcons.om*/get om() {
      return C[1016] || CT.C1016;
    },
    /*font_awesome_flutter.FontAwesomeIcons.opencart*/get opencart() {
      return C[1017] || CT.C1017;
    },
    /*font_awesome_flutter.FontAwesomeIcons.openid*/get openid() {
      return C[1018] || CT.C1018;
    },
    /*font_awesome_flutter.FontAwesomeIcons.opera*/get opera() {
      return C[1019] || CT.C1019;
    },
    /*font_awesome_flutter.FontAwesomeIcons.optinMonster*/get optinMonster() {
      return C[1020] || CT.C1020;
    },
    /*font_awesome_flutter.FontAwesomeIcons.orcid*/get orcid() {
      return C[1021] || CT.C1021;
    },
    /*font_awesome_flutter.FontAwesomeIcons.osi*/get osi() {
      return C[1022] || CT.C1022;
    },
    /*font_awesome_flutter.FontAwesomeIcons.otter*/get otter() {
      return C[1023] || CT.C1023;
    },
    /*font_awesome_flutter.FontAwesomeIcons.outdent*/get outdent() {
      return C[1024] || CT.C1024;
    },
    /*font_awesome_flutter.FontAwesomeIcons.page4*/get page4() {
      return C[1025] || CT.C1025;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pagelines*/get pagelines() {
      return C[1026] || CT.C1026;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pager*/get pager() {
      return C[1027] || CT.C1027;
    },
    /*font_awesome_flutter.FontAwesomeIcons.paintBrush*/get paintBrush() {
      return C[1028] || CT.C1028;
    },
    /*font_awesome_flutter.FontAwesomeIcons.paintRoller*/get paintRoller() {
      return C[1029] || CT.C1029;
    },
    /*font_awesome_flutter.FontAwesomeIcons.palette*/get palette() {
      return C[1030] || CT.C1030;
    },
    /*font_awesome_flutter.FontAwesomeIcons.palfed*/get palfed() {
      return C[1031] || CT.C1031;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pallet*/get pallet() {
      return C[1032] || CT.C1032;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidPaperPlane*/get solidPaperPlane() {
      return C[1033] || CT.C1033;
    },
    /*font_awesome_flutter.FontAwesomeIcons.paperPlane*/get paperPlane() {
      return C[1034] || CT.C1034;
    },
    /*font_awesome_flutter.FontAwesomeIcons.paperclip*/get paperclip() {
      return C[1035] || CT.C1035;
    },
    /*font_awesome_flutter.FontAwesomeIcons.parachuteBox*/get parachuteBox() {
      return C[1036] || CT.C1036;
    },
    /*font_awesome_flutter.FontAwesomeIcons.paragraph*/get paragraph() {
      return C[1037] || CT.C1037;
    },
    /*font_awesome_flutter.FontAwesomeIcons.parking*/get parking() {
      return C[1038] || CT.C1038;
    },
    /*font_awesome_flutter.FontAwesomeIcons.passport*/get passport() {
      return C[1039] || CT.C1039;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pastafarianism*/get pastafarianism() {
      return C[1040] || CT.C1040;
    },
    /*font_awesome_flutter.FontAwesomeIcons.paste*/get paste() {
      return C[1041] || CT.C1041;
    },
    /*font_awesome_flutter.FontAwesomeIcons.patreon*/get patreon() {
      return C[1042] || CT.C1042;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pause*/get pause() {
      return C[1043] || CT.C1043;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidPauseCircle*/get solidPauseCircle() {
      return C[1044] || CT.C1044;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pauseCircle*/get pauseCircle() {
      return C[1045] || CT.C1045;
    },
    /*font_awesome_flutter.FontAwesomeIcons.paw*/get paw() {
      return C[1046] || CT.C1046;
    },
    /*font_awesome_flutter.FontAwesomeIcons.paypal*/get paypal() {
      return C[1047] || CT.C1047;
    },
    /*font_awesome_flutter.FontAwesomeIcons.peace*/get peace() {
      return C[1048] || CT.C1048;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pen*/get pen() {
      return C[1049] || CT.C1049;
    },
    /*font_awesome_flutter.FontAwesomeIcons.penAlt*/get penAlt() {
      return C[1050] || CT.C1050;
    },
    /*font_awesome_flutter.FontAwesomeIcons.penFancy*/get penFancy() {
      return C[1051] || CT.C1051;
    },
    /*font_awesome_flutter.FontAwesomeIcons.penNib*/get penNib() {
      return C[1052] || CT.C1052;
    },
    /*font_awesome_flutter.FontAwesomeIcons.penSquare*/get penSquare() {
      return C[1053] || CT.C1053;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pencilAlt*/get pencilAlt() {
      return C[1054] || CT.C1054;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pencilRuler*/get pencilRuler() {
      return C[1055] || CT.C1055;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pennyArcade*/get pennyArcade() {
      return C[1056] || CT.C1056;
    },
    /*font_awesome_flutter.FontAwesomeIcons.peopleArrows*/get peopleArrows() {
      return C[1057] || CT.C1057;
    },
    /*font_awesome_flutter.FontAwesomeIcons.peopleCarry*/get peopleCarry() {
      return C[1058] || CT.C1058;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pepperHot*/get pepperHot() {
      return C[1059] || CT.C1059;
    },
    /*font_awesome_flutter.FontAwesomeIcons.perbyte*/get perbyte() {
      return C[1060] || CT.C1060;
    },
    /*font_awesome_flutter.FontAwesomeIcons.percent*/get percent() {
      return C[1061] || CT.C1061;
    },
    /*font_awesome_flutter.FontAwesomeIcons.percentage*/get percentage() {
      return C[1062] || CT.C1062;
    },
    /*font_awesome_flutter.FontAwesomeIcons.periscope*/get periscope() {
      return C[1063] || CT.C1063;
    },
    /*font_awesome_flutter.FontAwesomeIcons.personBooth*/get personBooth() {
      return C[1064] || CT.C1064;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phabricator*/get phabricator() {
      return C[1065] || CT.C1065;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phoenixFramework*/get phoenixFramework() {
      return C[1066] || CT.C1066;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phoenixSquadron*/get phoenixSquadron() {
      return C[1067] || CT.C1067;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phone*/get phone() {
      return C[1068] || CT.C1068;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phoneAlt*/get phoneAlt() {
      return C[1069] || CT.C1069;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phoneSlash*/get phoneSlash() {
      return C[1070] || CT.C1070;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phoneSquare*/get phoneSquare() {
      return C[1071] || CT.C1071;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phoneSquareAlt*/get phoneSquareAlt() {
      return C[1072] || CT.C1072;
    },
    /*font_awesome_flutter.FontAwesomeIcons.phoneVolume*/get phoneVolume() {
      return C[1073] || CT.C1073;
    },
    /*font_awesome_flutter.FontAwesomeIcons.photoVideo*/get photoVideo() {
      return C[1074] || CT.C1074;
    },
    /*font_awesome_flutter.FontAwesomeIcons.php*/get php() {
      return C[1075] || CT.C1075;
    },
    /*font_awesome_flutter.FontAwesomeIcons.piedPiper*/get piedPiper() {
      return C[1076] || CT.C1076;
    },
    /*font_awesome_flutter.FontAwesomeIcons.piedPiperAlt*/get piedPiperAlt() {
      return C[1077] || CT.C1077;
    },
    /*font_awesome_flutter.FontAwesomeIcons.piedPiperHat*/get piedPiperHat() {
      return C[1078] || CT.C1078;
    },
    /*font_awesome_flutter.FontAwesomeIcons.piedPiperPp*/get piedPiperPp() {
      return C[1079] || CT.C1079;
    },
    /*font_awesome_flutter.FontAwesomeIcons.piedPiperSquare*/get piedPiperSquare() {
      return C[1080] || CT.C1080;
    },
    /*font_awesome_flutter.FontAwesomeIcons.piggyBank*/get piggyBank() {
      return C[1081] || CT.C1081;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pills*/get pills() {
      return C[1082] || CT.C1082;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pinterest*/get pinterest() {
      return C[1083] || CT.C1083;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pinterestP*/get pinterestP() {
      return C[1084] || CT.C1084;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pinterestSquare*/get pinterestSquare() {
      return C[1085] || CT.C1085;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pizzaSlice*/get pizzaSlice() {
      return C[1086] || CT.C1086;
    },
    /*font_awesome_flutter.FontAwesomeIcons.placeOfWorship*/get placeOfWorship() {
      return C[1087] || CT.C1087;
    },
    /*font_awesome_flutter.FontAwesomeIcons.plane*/get plane() {
      return C[1088] || CT.C1088;
    },
    /*font_awesome_flutter.FontAwesomeIcons.planeArrival*/get planeArrival() {
      return C[1089] || CT.C1089;
    },
    /*font_awesome_flutter.FontAwesomeIcons.planeDeparture*/get planeDeparture() {
      return C[1090] || CT.C1090;
    },
    /*font_awesome_flutter.FontAwesomeIcons.planeSlash*/get planeSlash() {
      return C[1091] || CT.C1091;
    },
    /*font_awesome_flutter.FontAwesomeIcons.play*/get play() {
      return C[1092] || CT.C1092;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidPlayCircle*/get solidPlayCircle() {
      return C[1093] || CT.C1093;
    },
    /*font_awesome_flutter.FontAwesomeIcons.playCircle*/get playCircle() {
      return C[1094] || CT.C1094;
    },
    /*font_awesome_flutter.FontAwesomeIcons.playstation*/get playstation() {
      return C[1095] || CT.C1095;
    },
    /*font_awesome_flutter.FontAwesomeIcons.plug*/get plug() {
      return C[1096] || CT.C1096;
    },
    /*font_awesome_flutter.FontAwesomeIcons.plus*/get plus() {
      return C[1097] || CT.C1097;
    },
    /*font_awesome_flutter.FontAwesomeIcons.plusCircle*/get plusCircle() {
      return C[1098] || CT.C1098;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidPlusSquare*/get solidPlusSquare() {
      return C[1099] || CT.C1099;
    },
    /*font_awesome_flutter.FontAwesomeIcons.plusSquare*/get plusSquare() {
      return C[1100] || CT.C1100;
    },
    /*font_awesome_flutter.FontAwesomeIcons.podcast*/get podcast() {
      return C[1101] || CT.C1101;
    },
    /*font_awesome_flutter.FontAwesomeIcons.poll*/get poll() {
      return C[1102] || CT.C1102;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pollH*/get pollH() {
      return C[1103] || CT.C1103;
    },
    /*font_awesome_flutter.FontAwesomeIcons.poo*/get poo() {
      return C[1104] || CT.C1104;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pooStorm*/get pooStorm() {
      return C[1105] || CT.C1105;
    },
    /*font_awesome_flutter.FontAwesomeIcons.poop*/get poop() {
      return C[1106] || CT.C1106;
    },
    /*font_awesome_flutter.FontAwesomeIcons.portrait*/get portrait() {
      return C[1107] || CT.C1107;
    },
    /*font_awesome_flutter.FontAwesomeIcons.poundSign*/get poundSign() {
      return C[1108] || CT.C1108;
    },
    /*font_awesome_flutter.FontAwesomeIcons.powerOff*/get powerOff() {
      return C[1109] || CT.C1109;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pray*/get pray() {
      return C[1110] || CT.C1110;
    },
    /*font_awesome_flutter.FontAwesomeIcons.prayingHands*/get prayingHands() {
      return C[1111] || CT.C1111;
    },
    /*font_awesome_flutter.FontAwesomeIcons.prescription*/get prescription() {
      return C[1112] || CT.C1112;
    },
    /*font_awesome_flutter.FontAwesomeIcons.prescriptionBottle*/get prescriptionBottle() {
      return C[1113] || CT.C1113;
    },
    /*font_awesome_flutter.FontAwesomeIcons.prescriptionBottleAlt*/get prescriptionBottleAlt() {
      return C[1114] || CT.C1114;
    },
    /*font_awesome_flutter.FontAwesomeIcons.print*/get print() {
      return C[1115] || CT.C1115;
    },
    /*font_awesome_flutter.FontAwesomeIcons.procedures*/get procedures() {
      return C[1116] || CT.C1116;
    },
    /*font_awesome_flutter.FontAwesomeIcons.productHunt*/get productHunt() {
      return C[1117] || CT.C1117;
    },
    /*font_awesome_flutter.FontAwesomeIcons.projectDiagram*/get projectDiagram() {
      return C[1118] || CT.C1118;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pumpMedical*/get pumpMedical() {
      return C[1119] || CT.C1119;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pumpSoap*/get pumpSoap() {
      return C[1120] || CT.C1120;
    },
    /*font_awesome_flutter.FontAwesomeIcons.pushed*/get pushed() {
      return C[1121] || CT.C1121;
    },
    /*font_awesome_flutter.FontAwesomeIcons.puzzlePiece*/get puzzlePiece() {
      return C[1122] || CT.C1122;
    },
    /*font_awesome_flutter.FontAwesomeIcons.python*/get python() {
      return C[1123] || CT.C1123;
    },
    /*font_awesome_flutter.FontAwesomeIcons.qq*/get qq() {
      return C[1124] || CT.C1124;
    },
    /*font_awesome_flutter.FontAwesomeIcons.qrcode*/get qrcode() {
      return C[1125] || CT.C1125;
    },
    /*font_awesome_flutter.FontAwesomeIcons.question*/get question() {
      return C[1126] || CT.C1126;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidQuestionCircle*/get solidQuestionCircle() {
      return C[1127] || CT.C1127;
    },
    /*font_awesome_flutter.FontAwesomeIcons.questionCircle*/get questionCircle() {
      return C[1128] || CT.C1128;
    },
    /*font_awesome_flutter.FontAwesomeIcons.quidditch*/get quidditch() {
      return C[1129] || CT.C1129;
    },
    /*font_awesome_flutter.FontAwesomeIcons.quinscape*/get quinscape() {
      return C[1130] || CT.C1130;
    },
    /*font_awesome_flutter.FontAwesomeIcons.quora*/get quora() {
      return C[1131] || CT.C1131;
    },
    /*font_awesome_flutter.FontAwesomeIcons.quoteLeft*/get quoteLeft() {
      return C[1132] || CT.C1132;
    },
    /*font_awesome_flutter.FontAwesomeIcons.quoteRight*/get quoteRight() {
      return C[1133] || CT.C1133;
    },
    /*font_awesome_flutter.FontAwesomeIcons.quran*/get quran() {
      return C[1134] || CT.C1134;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rProject*/get rProject() {
      return C[1135] || CT.C1135;
    },
    /*font_awesome_flutter.FontAwesomeIcons.radiation*/get radiation() {
      return C[1136] || CT.C1136;
    },
    /*font_awesome_flutter.FontAwesomeIcons.radiationAlt*/get radiationAlt() {
      return C[1137] || CT.C1137;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rainbow*/get rainbow() {
      return C[1138] || CT.C1138;
    },
    /*font_awesome_flutter.FontAwesomeIcons.random*/get random() {
      return C[1139] || CT.C1139;
    },
    /*font_awesome_flutter.FontAwesomeIcons.raspberryPi*/get raspberryPi() {
      return C[1140] || CT.C1140;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ravelry*/get ravelry() {
      return C[1141] || CT.C1141;
    },
    /*font_awesome_flutter.FontAwesomeIcons.react*/get react() {
      return C[1142] || CT.C1142;
    },
    /*font_awesome_flutter.FontAwesomeIcons.reacteurope*/get reacteurope() {
      return C[1143] || CT.C1143;
    },
    /*font_awesome_flutter.FontAwesomeIcons.readme*/get readme() {
      return C[1144] || CT.C1144;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rebel*/get rebel() {
      return C[1145] || CT.C1145;
    },
    /*font_awesome_flutter.FontAwesomeIcons.receipt*/get receipt() {
      return C[1146] || CT.C1146;
    },
    /*font_awesome_flutter.FontAwesomeIcons.recordVinyl*/get recordVinyl() {
      return C[1147] || CT.C1147;
    },
    /*font_awesome_flutter.FontAwesomeIcons.recycle*/get recycle() {
      return C[1148] || CT.C1148;
    },
    /*font_awesome_flutter.FontAwesomeIcons.redRiver*/get redRiver() {
      return C[1149] || CT.C1149;
    },
    /*font_awesome_flutter.FontAwesomeIcons.reddit*/get reddit() {
      return C[1150] || CT.C1150;
    },
    /*font_awesome_flutter.FontAwesomeIcons.redditAlien*/get redditAlien() {
      return C[1151] || CT.C1151;
    },
    /*font_awesome_flutter.FontAwesomeIcons.redditSquare*/get redditSquare() {
      return C[1152] || CT.C1152;
    },
    /*font_awesome_flutter.FontAwesomeIcons.redhat*/get redhat() {
      return C[1153] || CT.C1153;
    },
    /*font_awesome_flutter.FontAwesomeIcons.redo*/get redo() {
      return C[1154] || CT.C1154;
    },
    /*font_awesome_flutter.FontAwesomeIcons.redoAlt*/get redoAlt() {
      return C[1155] || CT.C1155;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidRegistered*/get solidRegistered() {
      return C[1156] || CT.C1156;
    },
    /*font_awesome_flutter.FontAwesomeIcons.registered*/get registered() {
      return C[1157] || CT.C1157;
    },
    /*font_awesome_flutter.FontAwesomeIcons.removeFormat*/get removeFormat() {
      return C[1158] || CT.C1158;
    },
    /*font_awesome_flutter.FontAwesomeIcons.renren*/get renren() {
      return C[1159] || CT.C1159;
    },
    /*font_awesome_flutter.FontAwesomeIcons.reply*/get reply() {
      return C[1160] || CT.C1160;
    },
    /*font_awesome_flutter.FontAwesomeIcons.replyAll*/get replyAll() {
      return C[1161] || CT.C1161;
    },
    /*font_awesome_flutter.FontAwesomeIcons.replyd*/get replyd() {
      return C[1162] || CT.C1162;
    },
    /*font_awesome_flutter.FontAwesomeIcons.republican*/get republican() {
      return C[1163] || CT.C1163;
    },
    /*font_awesome_flutter.FontAwesomeIcons.researchgate*/get researchgate() {
      return C[1164] || CT.C1164;
    },
    /*font_awesome_flutter.FontAwesomeIcons.resolving*/get resolving() {
      return C[1165] || CT.C1165;
    },
    /*font_awesome_flutter.FontAwesomeIcons.restroom*/get restroom() {
      return C[1166] || CT.C1166;
    },
    /*font_awesome_flutter.FontAwesomeIcons.retweet*/get retweet() {
      return C[1167] || CT.C1167;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rev*/get rev() {
      return C[1168] || CT.C1168;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ribbon*/get ribbon() {
      return C[1169] || CT.C1169;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ring*/get ring() {
      return C[1170] || CT.C1170;
    },
    /*font_awesome_flutter.FontAwesomeIcons.road*/get road() {
      return C[1171] || CT.C1171;
    },
    /*font_awesome_flutter.FontAwesomeIcons.robot*/get robot() {
      return C[1172] || CT.C1172;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rocket*/get rocket() {
      return C[1173] || CT.C1173;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rocketchat*/get rocketchat() {
      return C[1174] || CT.C1174;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rockrms*/get rockrms() {
      return C[1175] || CT.C1175;
    },
    /*font_awesome_flutter.FontAwesomeIcons.route*/get route() {
      return C[1176] || CT.C1176;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rss*/get rss() {
      return C[1177] || CT.C1177;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rssSquare*/get rssSquare() {
      return C[1178] || CT.C1178;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rubleSign*/get rubleSign() {
      return C[1179] || CT.C1179;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ruler*/get ruler() {
      return C[1180] || CT.C1180;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rulerCombined*/get rulerCombined() {
      return C[1181] || CT.C1181;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rulerHorizontal*/get rulerHorizontal() {
      return C[1182] || CT.C1182;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rulerVertical*/get rulerVertical() {
      return C[1183] || CT.C1183;
    },
    /*font_awesome_flutter.FontAwesomeIcons.running*/get running() {
      return C[1184] || CT.C1184;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rupeeSign*/get rupeeSign() {
      return C[1185] || CT.C1185;
    },
    /*font_awesome_flutter.FontAwesomeIcons.rust*/get rust() {
      return C[1186] || CT.C1186;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSadCry*/get solidSadCry() {
      return C[1187] || CT.C1187;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sadCry*/get sadCry() {
      return C[1188] || CT.C1188;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSadTear*/get solidSadTear() {
      return C[1189] || CT.C1189;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sadTear*/get sadTear() {
      return C[1190] || CT.C1190;
    },
    /*font_awesome_flutter.FontAwesomeIcons.safari*/get safari() {
      return C[1191] || CT.C1191;
    },
    /*font_awesome_flutter.FontAwesomeIcons.salesforce*/get salesforce() {
      return C[1192] || CT.C1192;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sass*/get sass() {
      return C[1193] || CT.C1193;
    },
    /*font_awesome_flutter.FontAwesomeIcons.satellite*/get satellite() {
      return C[1194] || CT.C1194;
    },
    /*font_awesome_flutter.FontAwesomeIcons.satelliteDish*/get satelliteDish() {
      return C[1195] || CT.C1195;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSave*/get solidSave() {
      return C[1196] || CT.C1196;
    },
    /*font_awesome_flutter.FontAwesomeIcons.save*/get save() {
      return C[1197] || CT.C1197;
    },
    /*font_awesome_flutter.FontAwesomeIcons.schlix*/get schlix() {
      return C[1198] || CT.C1198;
    },
    /*font_awesome_flutter.FontAwesomeIcons.school*/get school() {
      return C[1199] || CT.C1199;
    },
    /*font_awesome_flutter.FontAwesomeIcons.screwdriver*/get screwdriver() {
      return C[1200] || CT.C1200;
    },
    /*font_awesome_flutter.FontAwesomeIcons.scribd*/get scribd() {
      return C[1201] || CT.C1201;
    },
    /*font_awesome_flutter.FontAwesomeIcons.scroll*/get scroll() {
      return C[1202] || CT.C1202;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sdCard*/get sdCard() {
      return C[1203] || CT.C1203;
    },
    /*font_awesome_flutter.FontAwesomeIcons.search*/get search() {
      return C[1204] || CT.C1204;
    },
    /*font_awesome_flutter.FontAwesomeIcons.searchDollar*/get searchDollar() {
      return C[1205] || CT.C1205;
    },
    /*font_awesome_flutter.FontAwesomeIcons.searchLocation*/get searchLocation() {
      return C[1206] || CT.C1206;
    },
    /*font_awesome_flutter.FontAwesomeIcons.searchMinus*/get searchMinus() {
      return C[1207] || CT.C1207;
    },
    /*font_awesome_flutter.FontAwesomeIcons.searchPlus*/get searchPlus() {
      return C[1208] || CT.C1208;
    },
    /*font_awesome_flutter.FontAwesomeIcons.searchengin*/get searchengin() {
      return C[1209] || CT.C1209;
    },
    /*font_awesome_flutter.FontAwesomeIcons.seedling*/get seedling() {
      return C[1210] || CT.C1210;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sellcast*/get sellcast() {
      return C[1211] || CT.C1211;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sellsy*/get sellsy() {
      return C[1212] || CT.C1212;
    },
    /*font_awesome_flutter.FontAwesomeIcons.server*/get server() {
      return C[1213] || CT.C1213;
    },
    /*font_awesome_flutter.FontAwesomeIcons.servicestack*/get servicestack() {
      return C[1214] || CT.C1214;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shapes*/get shapes() {
      return C[1215] || CT.C1215;
    },
    /*font_awesome_flutter.FontAwesomeIcons.share*/get share() {
      return C[1216] || CT.C1216;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shareAlt*/get shareAlt() {
      return C[1217] || CT.C1217;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shareAltSquare*/get shareAltSquare() {
      return C[1218] || CT.C1218;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidShareSquare*/get solidShareSquare() {
      return C[1219] || CT.C1219;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shareSquare*/get shareSquare() {
      return C[1220] || CT.C1220;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shekelSign*/get shekelSign() {
      return C[1221] || CT.C1221;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shieldAlt*/get shieldAlt() {
      return C[1222] || CT.C1222;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shieldVirus*/get shieldVirus() {
      return C[1223] || CT.C1223;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ship*/get ship() {
      return C[1224] || CT.C1224;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shippingFast*/get shippingFast() {
      return C[1225] || CT.C1225;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shirtsinbulk*/get shirtsinbulk() {
      return C[1226] || CT.C1226;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shoePrints*/get shoePrints() {
      return C[1227] || CT.C1227;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shopify*/get shopify() {
      return C[1228] || CT.C1228;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shoppingBag*/get shoppingBag() {
      return C[1229] || CT.C1229;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shoppingBasket*/get shoppingBasket() {
      return C[1230] || CT.C1230;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shoppingCart*/get shoppingCart() {
      return C[1231] || CT.C1231;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shopware*/get shopware() {
      return C[1232] || CT.C1232;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shower*/get shower() {
      return C[1233] || CT.C1233;
    },
    /*font_awesome_flutter.FontAwesomeIcons.shuttleVan*/get shuttleVan() {
      return C[1234] || CT.C1234;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sign*/get sign() {
      return C[1235] || CT.C1235;
    },
    /*font_awesome_flutter.FontAwesomeIcons.signInAlt*/get signInAlt() {
      return C[1236] || CT.C1236;
    },
    /*font_awesome_flutter.FontAwesomeIcons.signLanguage*/get signLanguage() {
      return C[1237] || CT.C1237;
    },
    /*font_awesome_flutter.FontAwesomeIcons.signOutAlt*/get signOutAlt() {
      return C[1238] || CT.C1238;
    },
    /*font_awesome_flutter.FontAwesomeIcons.signal*/get signal() {
      return C[1239] || CT.C1239;
    },
    /*font_awesome_flutter.FontAwesomeIcons.signature*/get signature() {
      return C[1240] || CT.C1240;
    },
    /*font_awesome_flutter.FontAwesomeIcons.simCard*/get simCard() {
      return C[1241] || CT.C1241;
    },
    /*font_awesome_flutter.FontAwesomeIcons.simplybuilt*/get simplybuilt() {
      return C[1242] || CT.C1242;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sink*/get sink() {
      return C[1243] || CT.C1243;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sistrix*/get sistrix() {
      return C[1244] || CT.C1244;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sitemap*/get sitemap() {
      return C[1245] || CT.C1245;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sith*/get sith() {
      return C[1246] || CT.C1246;
    },
    /*font_awesome_flutter.FontAwesomeIcons.skating*/get skating() {
      return C[1247] || CT.C1247;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sketch*/get sketch() {
      return C[1248] || CT.C1248;
    },
    /*font_awesome_flutter.FontAwesomeIcons.skiing*/get skiing() {
      return C[1249] || CT.C1249;
    },
    /*font_awesome_flutter.FontAwesomeIcons.skiingNordic*/get skiingNordic() {
      return C[1250] || CT.C1250;
    },
    /*font_awesome_flutter.FontAwesomeIcons.skull*/get skull() {
      return C[1251] || CT.C1251;
    },
    /*font_awesome_flutter.FontAwesomeIcons.skullCrossbones*/get skullCrossbones() {
      return C[1252] || CT.C1252;
    },
    /*font_awesome_flutter.FontAwesomeIcons.skyatlas*/get skyatlas() {
      return C[1253] || CT.C1253;
    },
    /*font_awesome_flutter.FontAwesomeIcons.skype*/get skype() {
      return C[1254] || CT.C1254;
    },
    /*font_awesome_flutter.FontAwesomeIcons.slack*/get slack() {
      return C[1255] || CT.C1255;
    },
    /*font_awesome_flutter.FontAwesomeIcons.slackHash*/get slackHash() {
      return C[1256] || CT.C1256;
    },
    /*font_awesome_flutter.FontAwesomeIcons.slash*/get slash() {
      return C[1257] || CT.C1257;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sleigh*/get sleigh() {
      return C[1258] || CT.C1258;
    },
    /*font_awesome_flutter.FontAwesomeIcons.slidersH*/get slidersH() {
      return C[1259] || CT.C1259;
    },
    /*font_awesome_flutter.FontAwesomeIcons.slideshare*/get slideshare() {
      return C[1260] || CT.C1260;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSmile*/get solidSmile() {
      return C[1261] || CT.C1261;
    },
    /*font_awesome_flutter.FontAwesomeIcons.smile*/get smile() {
      return C[1262] || CT.C1262;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSmileBeam*/get solidSmileBeam() {
      return C[1263] || CT.C1263;
    },
    /*font_awesome_flutter.FontAwesomeIcons.smileBeam*/get smileBeam() {
      return C[1264] || CT.C1264;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSmileWink*/get solidSmileWink() {
      return C[1265] || CT.C1265;
    },
    /*font_awesome_flutter.FontAwesomeIcons.smileWink*/get smileWink() {
      return C[1266] || CT.C1266;
    },
    /*font_awesome_flutter.FontAwesomeIcons.smog*/get smog() {
      return C[1267] || CT.C1267;
    },
    /*font_awesome_flutter.FontAwesomeIcons.smoking*/get smoking() {
      return C[1268] || CT.C1268;
    },
    /*font_awesome_flutter.FontAwesomeIcons.smokingBan*/get smokingBan() {
      return C[1269] || CT.C1269;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sms*/get sms() {
      return C[1270] || CT.C1270;
    },
    /*font_awesome_flutter.FontAwesomeIcons.snapchat*/get snapchat() {
      return C[1271] || CT.C1271;
    },
    /*font_awesome_flutter.FontAwesomeIcons.snapchatGhost*/get snapchatGhost() {
      return C[1272] || CT.C1272;
    },
    /*font_awesome_flutter.FontAwesomeIcons.snapchatSquare*/get snapchatSquare() {
      return C[1273] || CT.C1273;
    },
    /*font_awesome_flutter.FontAwesomeIcons.snowboarding*/get snowboarding() {
      return C[1274] || CT.C1274;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSnowflake*/get solidSnowflake() {
      return C[1275] || CT.C1275;
    },
    /*font_awesome_flutter.FontAwesomeIcons.snowflake*/get snowflake() {
      return C[1276] || CT.C1276;
    },
    /*font_awesome_flutter.FontAwesomeIcons.snowman*/get snowman() {
      return C[1277] || CT.C1277;
    },
    /*font_awesome_flutter.FontAwesomeIcons.snowplow*/get snowplow() {
      return C[1278] || CT.C1278;
    },
    /*font_awesome_flutter.FontAwesomeIcons.soap*/get soap() {
      return C[1279] || CT.C1279;
    },
    /*font_awesome_flutter.FontAwesomeIcons.socks*/get socks() {
      return C[1280] || CT.C1280;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solarPanel*/get solarPanel() {
      return C[1281] || CT.C1281;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sort*/get sort() {
      return C[1282] || CT.C1282;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortAlphaDown*/get sortAlphaDown() {
      return C[1283] || CT.C1283;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortAlphaDownAlt*/get sortAlphaDownAlt() {
      return C[1284] || CT.C1284;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortAlphaUp*/get sortAlphaUp() {
      return C[1285] || CT.C1285;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortAlphaUpAlt*/get sortAlphaUpAlt() {
      return C[1286] || CT.C1286;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortAmountDown*/get sortAmountDown() {
      return C[1287] || CT.C1287;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortAmountDownAlt*/get sortAmountDownAlt() {
      return C[1288] || CT.C1288;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortAmountUp*/get sortAmountUp() {
      return C[1289] || CT.C1289;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortAmountUpAlt*/get sortAmountUpAlt() {
      return C[1290] || CT.C1290;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortDown*/get sortDown() {
      return C[1291] || CT.C1291;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortNumericDown*/get sortNumericDown() {
      return C[1292] || CT.C1292;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortNumericDownAlt*/get sortNumericDownAlt() {
      return C[1293] || CT.C1293;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortNumericUp*/get sortNumericUp() {
      return C[1294] || CT.C1294;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortNumericUpAlt*/get sortNumericUpAlt() {
      return C[1295] || CT.C1295;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sortUp*/get sortUp() {
      return C[1296] || CT.C1296;
    },
    /*font_awesome_flutter.FontAwesomeIcons.soundcloud*/get soundcloud() {
      return C[1297] || CT.C1297;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sourcetree*/get sourcetree() {
      return C[1298] || CT.C1298;
    },
    /*font_awesome_flutter.FontAwesomeIcons.spa*/get spa() {
      return C[1299] || CT.C1299;
    },
    /*font_awesome_flutter.FontAwesomeIcons.spaceShuttle*/get spaceShuttle() {
      return C[1300] || CT.C1300;
    },
    /*font_awesome_flutter.FontAwesomeIcons.speakap*/get speakap() {
      return C[1301] || CT.C1301;
    },
    /*font_awesome_flutter.FontAwesomeIcons.speakerDeck*/get speakerDeck() {
      return C[1302] || CT.C1302;
    },
    /*font_awesome_flutter.FontAwesomeIcons.spellCheck*/get spellCheck() {
      return C[1303] || CT.C1303;
    },
    /*font_awesome_flutter.FontAwesomeIcons.spider*/get spider() {
      return C[1304] || CT.C1304;
    },
    /*font_awesome_flutter.FontAwesomeIcons.spinner*/get spinner() {
      return C[1305] || CT.C1305;
    },
    /*font_awesome_flutter.FontAwesomeIcons.splotch*/get splotch() {
      return C[1306] || CT.C1306;
    },
    /*font_awesome_flutter.FontAwesomeIcons.spotify*/get spotify() {
      return C[1307] || CT.C1307;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sprayCan*/get sprayCan() {
      return C[1308] || CT.C1308;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSquare*/get solidSquare() {
      return C[1309] || CT.C1309;
    },
    /*font_awesome_flutter.FontAwesomeIcons.square*/get square() {
      return C[1310] || CT.C1310;
    },
    /*font_awesome_flutter.FontAwesomeIcons.squareFull*/get squareFull() {
      return C[1311] || CT.C1311;
    },
    /*font_awesome_flutter.FontAwesomeIcons.squareRootAlt*/get squareRootAlt() {
      return C[1312] || CT.C1312;
    },
    /*font_awesome_flutter.FontAwesomeIcons.squarespace*/get squarespace() {
      return C[1313] || CT.C1313;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stackExchange*/get stackExchange() {
      return C[1314] || CT.C1314;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stackOverflow*/get stackOverflow() {
      return C[1315] || CT.C1315;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stackpath*/get stackpath() {
      return C[1316] || CT.C1316;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stamp*/get stamp() {
      return C[1317] || CT.C1317;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidStar*/get solidStar() {
      return C[1318] || CT.C1318;
    },
    /*font_awesome_flutter.FontAwesomeIcons.star*/get star() {
      return C[1319] || CT.C1319;
    },
    /*font_awesome_flutter.FontAwesomeIcons.starAndCrescent*/get starAndCrescent() {
      return C[1320] || CT.C1320;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidStarHalf*/get solidStarHalf() {
      return C[1321] || CT.C1321;
    },
    /*font_awesome_flutter.FontAwesomeIcons.starHalf*/get starHalf() {
      return C[1322] || CT.C1322;
    },
    /*font_awesome_flutter.FontAwesomeIcons.starHalfAlt*/get starHalfAlt() {
      return C[1323] || CT.C1323;
    },
    /*font_awesome_flutter.FontAwesomeIcons.starOfDavid*/get starOfDavid() {
      return C[1324] || CT.C1324;
    },
    /*font_awesome_flutter.FontAwesomeIcons.starOfLife*/get starOfLife() {
      return C[1325] || CT.C1325;
    },
    /*font_awesome_flutter.FontAwesomeIcons.staylinked*/get staylinked() {
      return C[1326] || CT.C1326;
    },
    /*font_awesome_flutter.FontAwesomeIcons.steam*/get steam() {
      return C[1327] || CT.C1327;
    },
    /*font_awesome_flutter.FontAwesomeIcons.steamSquare*/get steamSquare() {
      return C[1328] || CT.C1328;
    },
    /*font_awesome_flutter.FontAwesomeIcons.steamSymbol*/get steamSymbol() {
      return C[1329] || CT.C1329;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stepBackward*/get stepBackward() {
      return C[1330] || CT.C1330;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stepForward*/get stepForward() {
      return C[1331] || CT.C1331;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stethoscope*/get stethoscope() {
      return C[1332] || CT.C1332;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stickerMule*/get stickerMule() {
      return C[1333] || CT.C1333;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidStickyNote*/get solidStickyNote() {
      return C[1334] || CT.C1334;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stickyNote*/get stickyNote() {
      return C[1335] || CT.C1335;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stop*/get stop() {
      return C[1336] || CT.C1336;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidStopCircle*/get solidStopCircle() {
      return C[1337] || CT.C1337;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stopCircle*/get stopCircle() {
      return C[1338] || CT.C1338;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stopwatch*/get stopwatch() {
      return C[1339] || CT.C1339;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stopwatch20*/get stopwatch20() {
      return C[1340] || CT.C1340;
    },
    /*font_awesome_flutter.FontAwesomeIcons.store*/get store() {
      return C[1341] || CT.C1341;
    },
    /*font_awesome_flutter.FontAwesomeIcons.storeAlt*/get storeAlt() {
      return C[1342] || CT.C1342;
    },
    /*font_awesome_flutter.FontAwesomeIcons.storeAltSlash*/get storeAltSlash() {
      return C[1343] || CT.C1343;
    },
    /*font_awesome_flutter.FontAwesomeIcons.storeSlash*/get storeSlash() {
      return C[1344] || CT.C1344;
    },
    /*font_awesome_flutter.FontAwesomeIcons.strava*/get strava() {
      return C[1345] || CT.C1345;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stream*/get stream() {
      return C[1346] || CT.C1346;
    },
    /*font_awesome_flutter.FontAwesomeIcons.streetView*/get streetView() {
      return C[1347] || CT.C1347;
    },
    /*font_awesome_flutter.FontAwesomeIcons.strikethrough*/get strikethrough() {
      return C[1348] || CT.C1348;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stripe*/get stripe() {
      return C[1349] || CT.C1349;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stripeS*/get stripeS() {
      return C[1350] || CT.C1350;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stroopwafel*/get stroopwafel() {
      return C[1351] || CT.C1351;
    },
    /*font_awesome_flutter.FontAwesomeIcons.studiovinari*/get studiovinari() {
      return C[1352] || CT.C1352;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stumbleupon*/get stumbleupon() {
      return C[1353] || CT.C1353;
    },
    /*font_awesome_flutter.FontAwesomeIcons.stumbleuponCircle*/get stumbleuponCircle() {
      return C[1354] || CT.C1354;
    },
    /*font_awesome_flutter.FontAwesomeIcons.subscript*/get subscript() {
      return C[1355] || CT.C1355;
    },
    /*font_awesome_flutter.FontAwesomeIcons.subway*/get subway() {
      return C[1356] || CT.C1356;
    },
    /*font_awesome_flutter.FontAwesomeIcons.suitcase*/get suitcase() {
      return C[1357] || CT.C1357;
    },
    /*font_awesome_flutter.FontAwesomeIcons.suitcaseRolling*/get suitcaseRolling() {
      return C[1358] || CT.C1358;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSun*/get solidSun() {
      return C[1359] || CT.C1359;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sun*/get sun() {
      return C[1360] || CT.C1360;
    },
    /*font_awesome_flutter.FontAwesomeIcons.superpowers*/get superpowers() {
      return C[1361] || CT.C1361;
    },
    /*font_awesome_flutter.FontAwesomeIcons.superscript*/get superscript() {
      return C[1362] || CT.C1362;
    },
    /*font_awesome_flutter.FontAwesomeIcons.supple*/get supple() {
      return C[1363] || CT.C1363;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidSurprise*/get solidSurprise() {
      return C[1364] || CT.C1364;
    },
    /*font_awesome_flutter.FontAwesomeIcons.surprise*/get surprise() {
      return C[1365] || CT.C1365;
    },
    /*font_awesome_flutter.FontAwesomeIcons.suse*/get suse() {
      return C[1366] || CT.C1366;
    },
    /*font_awesome_flutter.FontAwesomeIcons.swatchbook*/get swatchbook() {
      return C[1367] || CT.C1367;
    },
    /*font_awesome_flutter.FontAwesomeIcons.swift*/get swift() {
      return C[1368] || CT.C1368;
    },
    /*font_awesome_flutter.FontAwesomeIcons.swimmer*/get swimmer() {
      return C[1369] || CT.C1369;
    },
    /*font_awesome_flutter.FontAwesomeIcons.swimmingPool*/get swimmingPool() {
      return C[1370] || CT.C1370;
    },
    /*font_awesome_flutter.FontAwesomeIcons.symfony*/get symfony() {
      return C[1371] || CT.C1371;
    },
    /*font_awesome_flutter.FontAwesomeIcons.synagogue*/get synagogue() {
      return C[1372] || CT.C1372;
    },
    /*font_awesome_flutter.FontAwesomeIcons.sync*/get sync() {
      return C[1373] || CT.C1373;
    },
    /*font_awesome_flutter.FontAwesomeIcons.syncAlt*/get syncAlt() {
      return C[1374] || CT.C1374;
    },
    /*font_awesome_flutter.FontAwesomeIcons.syringe*/get syringe() {
      return C[1375] || CT.C1375;
    },
    /*font_awesome_flutter.FontAwesomeIcons.table*/get table() {
      return C[1376] || CT.C1376;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tableTennis*/get tableTennis() {
      return C[1377] || CT.C1377;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tablet*/get tablet() {
      return C[1378] || CT.C1378;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tabletAlt*/get tabletAlt() {
      return C[1379] || CT.C1379;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tablets*/get tablets() {
      return C[1380] || CT.C1380;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tachometerAlt*/get tachometerAlt() {
      return C[1381] || CT.C1381;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tag*/get tag() {
      return C[1382] || CT.C1382;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tags*/get tags() {
      return C[1383] || CT.C1383;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tape*/get tape() {
      return C[1384] || CT.C1384;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tasks*/get tasks() {
      return C[1385] || CT.C1385;
    },
    /*font_awesome_flutter.FontAwesomeIcons.taxi*/get taxi() {
      return C[1386] || CT.C1386;
    },
    /*font_awesome_flutter.FontAwesomeIcons.teamspeak*/get teamspeak() {
      return C[1387] || CT.C1387;
    },
    /*font_awesome_flutter.FontAwesomeIcons.teeth*/get teeth() {
      return C[1388] || CT.C1388;
    },
    /*font_awesome_flutter.FontAwesomeIcons.teethOpen*/get teethOpen() {
      return C[1389] || CT.C1389;
    },
    /*font_awesome_flutter.FontAwesomeIcons.telegram*/get telegram() {
      return C[1390] || CT.C1390;
    },
    /*font_awesome_flutter.FontAwesomeIcons.telegramPlane*/get telegramPlane() {
      return C[1391] || CT.C1391;
    },
    /*font_awesome_flutter.FontAwesomeIcons.temperatureHigh*/get temperatureHigh() {
      return C[1392] || CT.C1392;
    },
    /*font_awesome_flutter.FontAwesomeIcons.temperatureLow*/get temperatureLow() {
      return C[1393] || CT.C1393;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tencentWeibo*/get tencentWeibo() {
      return C[1394] || CT.C1394;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tenge*/get tenge() {
      return C[1395] || CT.C1395;
    },
    /*font_awesome_flutter.FontAwesomeIcons.terminal*/get terminal() {
      return C[1396] || CT.C1396;
    },
    /*font_awesome_flutter.FontAwesomeIcons.textHeight*/get textHeight() {
      return C[1397] || CT.C1397;
    },
    /*font_awesome_flutter.FontAwesomeIcons.textWidth*/get textWidth() {
      return C[1398] || CT.C1398;
    },
    /*font_awesome_flutter.FontAwesomeIcons.th*/get th() {
      return C[1399] || CT.C1399;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thLarge*/get thLarge() {
      return C[1400] || CT.C1400;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thList*/get thList() {
      return C[1401] || CT.C1401;
    },
    /*font_awesome_flutter.FontAwesomeIcons.theRedYeti*/get theRedYeti() {
      return C[1402] || CT.C1402;
    },
    /*font_awesome_flutter.FontAwesomeIcons.theaterMasks*/get theaterMasks() {
      return C[1403] || CT.C1403;
    },
    /*font_awesome_flutter.FontAwesomeIcons.themeco*/get themeco() {
      return C[1404] || CT.C1404;
    },
    /*font_awesome_flutter.FontAwesomeIcons.themeisle*/get themeisle() {
      return C[1405] || CT.C1405;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thermometer*/get thermometer() {
      return C[1406] || CT.C1406;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thermometerEmpty*/get thermometerEmpty() {
      return C[1407] || CT.C1407;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thermometerFull*/get thermometerFull() {
      return C[1408] || CT.C1408;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thermometerHalf*/get thermometerHalf() {
      return C[1409] || CT.C1409;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thermometerQuarter*/get thermometerQuarter() {
      return C[1410] || CT.C1410;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thermometerThreeQuarters*/get thermometerThreeQuarters() {
      return C[1411] || CT.C1411;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thinkPeaks*/get thinkPeaks() {
      return C[1412] || CT.C1412;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidThumbsDown*/get solidThumbsDown() {
      return C[1413] || CT.C1413;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thumbsDown*/get thumbsDown() {
      return C[1414] || CT.C1414;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidThumbsUp*/get solidThumbsUp() {
      return C[1415] || CT.C1415;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thumbsUp*/get thumbsUp() {
      return C[1416] || CT.C1416;
    },
    /*font_awesome_flutter.FontAwesomeIcons.thumbtack*/get thumbtack() {
      return C[1417] || CT.C1417;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ticketAlt*/get ticketAlt() {
      return C[1418] || CT.C1418;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tiktok*/get tiktok() {
      return C[1419] || CT.C1419;
    },
    /*font_awesome_flutter.FontAwesomeIcons.times*/get times() {
      return C[1420] || CT.C1420;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidTimesCircle*/get solidTimesCircle() {
      return C[1421] || CT.C1421;
    },
    /*font_awesome_flutter.FontAwesomeIcons.timesCircle*/get timesCircle() {
      return C[1422] || CT.C1422;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tint*/get tint() {
      return C[1423] || CT.C1423;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tintSlash*/get tintSlash() {
      return C[1424] || CT.C1424;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidTired*/get solidTired() {
      return C[1425] || CT.C1425;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tired*/get tired() {
      return C[1426] || CT.C1426;
    },
    /*font_awesome_flutter.FontAwesomeIcons.toggleOff*/get toggleOff() {
      return C[1427] || CT.C1427;
    },
    /*font_awesome_flutter.FontAwesomeIcons.toggleOn*/get toggleOn() {
      return C[1428] || CT.C1428;
    },
    /*font_awesome_flutter.FontAwesomeIcons.toilet*/get toilet() {
      return C[1429] || CT.C1429;
    },
    /*font_awesome_flutter.FontAwesomeIcons.toiletPaper*/get toiletPaper() {
      return C[1430] || CT.C1430;
    },
    /*font_awesome_flutter.FontAwesomeIcons.toiletPaperSlash*/get toiletPaperSlash() {
      return C[1431] || CT.C1431;
    },
    /*font_awesome_flutter.FontAwesomeIcons.toolbox*/get toolbox() {
      return C[1432] || CT.C1432;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tools*/get tools() {
      return C[1433] || CT.C1433;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tooth*/get tooth() {
      return C[1434] || CT.C1434;
    },
    /*font_awesome_flutter.FontAwesomeIcons.torah*/get torah() {
      return C[1435] || CT.C1435;
    },
    /*font_awesome_flutter.FontAwesomeIcons.toriiGate*/get toriiGate() {
      return C[1436] || CT.C1436;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tractor*/get tractor() {
      return C[1437] || CT.C1437;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tradeFederation*/get tradeFederation() {
      return C[1438] || CT.C1438;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trademark*/get trademark() {
      return C[1439] || CT.C1439;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trafficLight*/get trafficLight() {
      return C[1440] || CT.C1440;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trailer*/get trailer() {
      return C[1441] || CT.C1441;
    },
    /*font_awesome_flutter.FontAwesomeIcons.train*/get train() {
      return C[1442] || CT.C1442;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tram*/get tram() {
      return C[1443] || CT.C1443;
    },
    /*font_awesome_flutter.FontAwesomeIcons.transgender*/get transgender() {
      return C[1444] || CT.C1444;
    },
    /*font_awesome_flutter.FontAwesomeIcons.transgenderAlt*/get transgenderAlt() {
      return C[1445] || CT.C1445;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trash*/get trash() {
      return C[1446] || CT.C1446;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidTrashAlt*/get solidTrashAlt() {
      return C[1447] || CT.C1447;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trashAlt*/get trashAlt() {
      return C[1448] || CT.C1448;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trashRestore*/get trashRestore() {
      return C[1449] || CT.C1449;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trashRestoreAlt*/get trashRestoreAlt() {
      return C[1450] || CT.C1450;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tree*/get tree() {
      return C[1451] || CT.C1451;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trello*/get trello() {
      return C[1452] || CT.C1452;
    },
    /*font_awesome_flutter.FontAwesomeIcons.trophy*/get trophy() {
      return C[1453] || CT.C1453;
    },
    /*font_awesome_flutter.FontAwesomeIcons.truck*/get truck() {
      return C[1454] || CT.C1454;
    },
    /*font_awesome_flutter.FontAwesomeIcons.truckLoading*/get truckLoading() {
      return C[1455] || CT.C1455;
    },
    /*font_awesome_flutter.FontAwesomeIcons.truckMonster*/get truckMonster() {
      return C[1456] || CT.C1456;
    },
    /*font_awesome_flutter.FontAwesomeIcons.truckMoving*/get truckMoving() {
      return C[1457] || CT.C1457;
    },
    /*font_awesome_flutter.FontAwesomeIcons.truckPickup*/get truckPickup() {
      return C[1458] || CT.C1458;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tshirt*/get tshirt() {
      return C[1459] || CT.C1459;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tty*/get tty() {
      return C[1460] || CT.C1460;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tumblr*/get tumblr() {
      return C[1461] || CT.C1461;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tumblrSquare*/get tumblrSquare() {
      return C[1462] || CT.C1462;
    },
    /*font_awesome_flutter.FontAwesomeIcons.tv*/get tv() {
      return C[1463] || CT.C1463;
    },
    /*font_awesome_flutter.FontAwesomeIcons.twitch*/get twitch() {
      return C[1464] || CT.C1464;
    },
    /*font_awesome_flutter.FontAwesomeIcons.twitter*/get twitter() {
      return C[1465] || CT.C1465;
    },
    /*font_awesome_flutter.FontAwesomeIcons.twitterSquare*/get twitterSquare() {
      return C[1466] || CT.C1466;
    },
    /*font_awesome_flutter.FontAwesomeIcons.typo3*/get typo3() {
      return C[1467] || CT.C1467;
    },
    /*font_awesome_flutter.FontAwesomeIcons.uber*/get uber() {
      return C[1468] || CT.C1468;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ubuntu*/get ubuntu() {
      return C[1469] || CT.C1469;
    },
    /*font_awesome_flutter.FontAwesomeIcons.uikit*/get uikit() {
      return C[1470] || CT.C1470;
    },
    /*font_awesome_flutter.FontAwesomeIcons.umbraco*/get umbraco() {
      return C[1471] || CT.C1471;
    },
    /*font_awesome_flutter.FontAwesomeIcons.umbrella*/get umbrella() {
      return C[1472] || CT.C1472;
    },
    /*font_awesome_flutter.FontAwesomeIcons.umbrellaBeach*/get umbrellaBeach() {
      return C[1473] || CT.C1473;
    },
    /*font_awesome_flutter.FontAwesomeIcons.uncharted*/get uncharted() {
      return C[1474] || CT.C1474;
    },
    /*font_awesome_flutter.FontAwesomeIcons.underline*/get underline() {
      return C[1475] || CT.C1475;
    },
    /*font_awesome_flutter.FontAwesomeIcons.undo*/get undo() {
      return C[1476] || CT.C1476;
    },
    /*font_awesome_flutter.FontAwesomeIcons.undoAlt*/get undoAlt() {
      return C[1477] || CT.C1477;
    },
    /*font_awesome_flutter.FontAwesomeIcons.uniregistry*/get uniregistry() {
      return C[1478] || CT.C1478;
    },
    /*font_awesome_flutter.FontAwesomeIcons.unity*/get unity() {
      return C[1479] || CT.C1479;
    },
    /*font_awesome_flutter.FontAwesomeIcons.universalAccess*/get universalAccess() {
      return C[1480] || CT.C1480;
    },
    /*font_awesome_flutter.FontAwesomeIcons.university*/get university() {
      return C[1481] || CT.C1481;
    },
    /*font_awesome_flutter.FontAwesomeIcons.unlink*/get unlink() {
      return C[1482] || CT.C1482;
    },
    /*font_awesome_flutter.FontAwesomeIcons.unlock*/get unlock() {
      return C[1483] || CT.C1483;
    },
    /*font_awesome_flutter.FontAwesomeIcons.unlockAlt*/get unlockAlt() {
      return C[1484] || CT.C1484;
    },
    /*font_awesome_flutter.FontAwesomeIcons.unsplash*/get unsplash() {
      return C[1485] || CT.C1485;
    },
    /*font_awesome_flutter.FontAwesomeIcons.untappd*/get untappd() {
      return C[1486] || CT.C1486;
    },
    /*font_awesome_flutter.FontAwesomeIcons.upload*/get upload() {
      return C[1487] || CT.C1487;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ups*/get ups() {
      return C[1488] || CT.C1488;
    },
    /*font_awesome_flutter.FontAwesomeIcons.usb*/get usb() {
      return C[1489] || CT.C1489;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidUser*/get solidUser() {
      return C[1490] || CT.C1490;
    },
    /*font_awesome_flutter.FontAwesomeIcons.user*/get user() {
      return C[1491] || CT.C1491;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userAlt*/get userAlt() {
      return C[1492] || CT.C1492;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userAltSlash*/get userAltSlash() {
      return C[1493] || CT.C1493;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userAstronaut*/get userAstronaut() {
      return C[1494] || CT.C1494;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userCheck*/get userCheck() {
      return C[1495] || CT.C1495;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidUserCircle*/get solidUserCircle() {
      return C[1496] || CT.C1496;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userCircle*/get userCircle() {
      return C[1497] || CT.C1497;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userClock*/get userClock() {
      return C[1498] || CT.C1498;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userCog*/get userCog() {
      return C[1499] || CT.C1499;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userEdit*/get userEdit() {
      return C[1500] || CT.C1500;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userFriends*/get userFriends() {
      return C[1501] || CT.C1501;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userGraduate*/get userGraduate() {
      return C[1502] || CT.C1502;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userInjured*/get userInjured() {
      return C[1503] || CT.C1503;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userLock*/get userLock() {
      return C[1504] || CT.C1504;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userMd*/get userMd() {
      return C[1505] || CT.C1505;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userMinus*/get userMinus() {
      return C[1506] || CT.C1506;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userNinja*/get userNinja() {
      return C[1507] || CT.C1507;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userNurse*/get userNurse() {
      return C[1508] || CT.C1508;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userPlus*/get userPlus() {
      return C[1509] || CT.C1509;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userSecret*/get userSecret() {
      return C[1510] || CT.C1510;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userShield*/get userShield() {
      return C[1511] || CT.C1511;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userSlash*/get userSlash() {
      return C[1512] || CT.C1512;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userTag*/get userTag() {
      return C[1513] || CT.C1513;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userTie*/get userTie() {
      return C[1514] || CT.C1514;
    },
    /*font_awesome_flutter.FontAwesomeIcons.userTimes*/get userTimes() {
      return C[1515] || CT.C1515;
    },
    /*font_awesome_flutter.FontAwesomeIcons.users*/get users() {
      return C[1516] || CT.C1516;
    },
    /*font_awesome_flutter.FontAwesomeIcons.usersCog*/get usersCog() {
      return C[1517] || CT.C1517;
    },
    /*font_awesome_flutter.FontAwesomeIcons.usersSlash*/get usersSlash() {
      return C[1518] || CT.C1518;
    },
    /*font_awesome_flutter.FontAwesomeIcons.usps*/get usps() {
      return C[1519] || CT.C1519;
    },
    /*font_awesome_flutter.FontAwesomeIcons.ussunnah*/get ussunnah() {
      return C[1520] || CT.C1520;
    },
    /*font_awesome_flutter.FontAwesomeIcons.utensilSpoon*/get utensilSpoon() {
      return C[1521] || CT.C1521;
    },
    /*font_awesome_flutter.FontAwesomeIcons.utensils*/get utensils() {
      return C[1522] || CT.C1522;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vaadin*/get vaadin() {
      return C[1523] || CT.C1523;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vectorSquare*/get vectorSquare() {
      return C[1524] || CT.C1524;
    },
    /*font_awesome_flutter.FontAwesomeIcons.venus*/get venus() {
      return C[1525] || CT.C1525;
    },
    /*font_awesome_flutter.FontAwesomeIcons.venusDouble*/get venusDouble() {
      return C[1526] || CT.C1526;
    },
    /*font_awesome_flutter.FontAwesomeIcons.venusMars*/get venusMars() {
      return C[1527] || CT.C1527;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vest*/get vest() {
      return C[1528] || CT.C1528;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vestPatches*/get vestPatches() {
      return C[1529] || CT.C1529;
    },
    /*font_awesome_flutter.FontAwesomeIcons.viacoin*/get viacoin() {
      return C[1530] || CT.C1530;
    },
    /*font_awesome_flutter.FontAwesomeIcons.viadeo*/get viadeo() {
      return C[1531] || CT.C1531;
    },
    /*font_awesome_flutter.FontAwesomeIcons.viadeoSquare*/get viadeoSquare() {
      return C[1532] || CT.C1532;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vial*/get vial() {
      return C[1533] || CT.C1533;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vials*/get vials() {
      return C[1534] || CT.C1534;
    },
    /*font_awesome_flutter.FontAwesomeIcons.viber*/get viber() {
      return C[1535] || CT.C1535;
    },
    /*font_awesome_flutter.FontAwesomeIcons.video*/get video() {
      return C[1536] || CT.C1536;
    },
    /*font_awesome_flutter.FontAwesomeIcons.videoSlash*/get videoSlash() {
      return C[1537] || CT.C1537;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vihara*/get vihara() {
      return C[1538] || CT.C1538;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vimeo*/get vimeo() {
      return C[1539] || CT.C1539;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vimeoSquare*/get vimeoSquare() {
      return C[1540] || CT.C1540;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vimeoV*/get vimeoV() {
      return C[1541] || CT.C1541;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vine*/get vine() {
      return C[1542] || CT.C1542;
    },
    /*font_awesome_flutter.FontAwesomeIcons.virus*/get virus() {
      return C[1543] || CT.C1543;
    },
    /*font_awesome_flutter.FontAwesomeIcons.virusSlash*/get virusSlash() {
      return C[1544] || CT.C1544;
    },
    /*font_awesome_flutter.FontAwesomeIcons.viruses*/get viruses() {
      return C[1545] || CT.C1545;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vk*/get vk() {
      return C[1546] || CT.C1546;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vnv*/get vnv() {
      return C[1547] || CT.C1547;
    },
    /*font_awesome_flutter.FontAwesomeIcons.voicemail*/get voicemail() {
      return C[1548] || CT.C1548;
    },
    /*font_awesome_flutter.FontAwesomeIcons.volleyballBall*/get volleyballBall() {
      return C[1549] || CT.C1549;
    },
    /*font_awesome_flutter.FontAwesomeIcons.volumeDown*/get volumeDown() {
      return C[1550] || CT.C1550;
    },
    /*font_awesome_flutter.FontAwesomeIcons.volumeMute*/get volumeMute() {
      return C[1551] || CT.C1551;
    },
    /*font_awesome_flutter.FontAwesomeIcons.volumeOff*/get volumeOff() {
      return C[1552] || CT.C1552;
    },
    /*font_awesome_flutter.FontAwesomeIcons.volumeUp*/get volumeUp() {
      return C[1553] || CT.C1553;
    },
    /*font_awesome_flutter.FontAwesomeIcons.voteYea*/get voteYea() {
      return C[1554] || CT.C1554;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vrCardboard*/get vrCardboard() {
      return C[1555] || CT.C1555;
    },
    /*font_awesome_flutter.FontAwesomeIcons.vuejs*/get vuejs() {
      return C[1556] || CT.C1556;
    },
    /*font_awesome_flutter.FontAwesomeIcons.walking*/get walking() {
      return C[1557] || CT.C1557;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wallet*/get wallet() {
      return C[1558] || CT.C1558;
    },
    /*font_awesome_flutter.FontAwesomeIcons.warehouse*/get warehouse() {
      return C[1559] || CT.C1559;
    },
    /*font_awesome_flutter.FontAwesomeIcons.watchmanMonitoring*/get watchmanMonitoring() {
      return C[1560] || CT.C1560;
    },
    /*font_awesome_flutter.FontAwesomeIcons.water*/get water() {
      return C[1561] || CT.C1561;
    },
    /*font_awesome_flutter.FontAwesomeIcons.waveSquare*/get waveSquare() {
      return C[1562] || CT.C1562;
    },
    /*font_awesome_flutter.FontAwesomeIcons.waze*/get waze() {
      return C[1563] || CT.C1563;
    },
    /*font_awesome_flutter.FontAwesomeIcons.weebly*/get weebly() {
      return C[1564] || CT.C1564;
    },
    /*font_awesome_flutter.FontAwesomeIcons.weibo*/get weibo() {
      return C[1565] || CT.C1565;
    },
    /*font_awesome_flutter.FontAwesomeIcons.weight*/get weight() {
      return C[1566] || CT.C1566;
    },
    /*font_awesome_flutter.FontAwesomeIcons.weightHanging*/get weightHanging() {
      return C[1567] || CT.C1567;
    },
    /*font_awesome_flutter.FontAwesomeIcons.weixin*/get weixin() {
      return C[1568] || CT.C1568;
    },
    /*font_awesome_flutter.FontAwesomeIcons.whatsapp*/get whatsapp() {
      return C[1569] || CT.C1569;
    },
    /*font_awesome_flutter.FontAwesomeIcons.whatsappSquare*/get whatsappSquare() {
      return C[1570] || CT.C1570;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wheelchair*/get wheelchair() {
      return C[1571] || CT.C1571;
    },
    /*font_awesome_flutter.FontAwesomeIcons.whmcs*/get whmcs() {
      return C[1572] || CT.C1572;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wifi*/get wifi() {
      return C[1573] || CT.C1573;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wikipediaW*/get wikipediaW() {
      return C[1574] || CT.C1574;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wind*/get wind() {
      return C[1575] || CT.C1575;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidWindowClose*/get solidWindowClose() {
      return C[1576] || CT.C1576;
    },
    /*font_awesome_flutter.FontAwesomeIcons.windowClose*/get windowClose() {
      return C[1577] || CT.C1577;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidWindowMaximize*/get solidWindowMaximize() {
      return C[1578] || CT.C1578;
    },
    /*font_awesome_flutter.FontAwesomeIcons.windowMaximize*/get windowMaximize() {
      return C[1579] || CT.C1579;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidWindowMinimize*/get solidWindowMinimize() {
      return C[1580] || CT.C1580;
    },
    /*font_awesome_flutter.FontAwesomeIcons.windowMinimize*/get windowMinimize() {
      return C[1581] || CT.C1581;
    },
    /*font_awesome_flutter.FontAwesomeIcons.solidWindowRestore*/get solidWindowRestore() {
      return C[1582] || CT.C1582;
    },
    /*font_awesome_flutter.FontAwesomeIcons.windowRestore*/get windowRestore() {
      return C[1583] || CT.C1583;
    },
    /*font_awesome_flutter.FontAwesomeIcons.windows*/get windows() {
      return C[1584] || CT.C1584;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wineBottle*/get wineBottle() {
      return C[1585] || CT.C1585;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wineGlass*/get wineGlass() {
      return C[1586] || CT.C1586;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wineGlassAlt*/get wineGlassAlt() {
      return C[1587] || CT.C1587;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wix*/get wix() {
      return C[1588] || CT.C1588;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wizardsOfTheCoast*/get wizardsOfTheCoast() {
      return C[1589] || CT.C1589;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wodu*/get wodu() {
      return C[1590] || CT.C1590;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wolfPackBattalion*/get wolfPackBattalion() {
      return C[1591] || CT.C1591;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wonSign*/get wonSign() {
      return C[1592] || CT.C1592;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wordpress*/get wordpress() {
      return C[1593] || CT.C1593;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wordpressSimple*/get wordpressSimple() {
      return C[1594] || CT.C1594;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wpbeginner*/get wpbeginner() {
      return C[1595] || CT.C1595;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wpexplorer*/get wpexplorer() {
      return C[1596] || CT.C1596;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wpforms*/get wpforms() {
      return C[1597] || CT.C1597;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wpressr*/get wpressr() {
      return C[1598] || CT.C1598;
    },
    /*font_awesome_flutter.FontAwesomeIcons.wrench*/get wrench() {
      return C[1599] || CT.C1599;
    },
    /*font_awesome_flutter.FontAwesomeIcons.xRay*/get xRay() {
      return C[1600] || CT.C1600;
    },
    /*font_awesome_flutter.FontAwesomeIcons.xbox*/get xbox() {
      return C[1601] || CT.C1601;
    },
    /*font_awesome_flutter.FontAwesomeIcons.xing*/get xing() {
      return C[1602] || CT.C1602;
    },
    /*font_awesome_flutter.FontAwesomeIcons.xingSquare*/get xingSquare() {
      return C[1603] || CT.C1603;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yCombinator*/get yCombinator() {
      return C[1604] || CT.C1604;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yahoo*/get yahoo() {
      return C[1605] || CT.C1605;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yammer*/get yammer() {
      return C[1606] || CT.C1606;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yandex*/get yandex() {
      return C[1607] || CT.C1607;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yandexInternational*/get yandexInternational() {
      return C[1608] || CT.C1608;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yarn*/get yarn() {
      return C[1609] || CT.C1609;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yelp*/get yelp() {
      return C[1610] || CT.C1610;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yenSign*/get yenSign() {
      return C[1611] || CT.C1611;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yinYang*/get yinYang() {
      return C[1612] || CT.C1612;
    },
    /*font_awesome_flutter.FontAwesomeIcons.yoast*/get yoast() {
      return C[1613] || CT.C1613;
    },
    /*font_awesome_flutter.FontAwesomeIcons.youtube*/get youtube() {
      return C[1614] || CT.C1614;
    },
    /*font_awesome_flutter.FontAwesomeIcons.youtubeSquare*/get youtubeSquare() {
      return C[1615] || CT.C1615;
    },
    /*font_awesome_flutter.FontAwesomeIcons.zhihu*/get zhihu() {
      return C[1616] || CT.C1616;
    }
  }, false);
  dart.trackLibraries("packages/font_awesome_flutter/src/fa_icon.dart", {
    "package:font_awesome_flutter/src/fa_icon.dart": fa_icon,
    "package:font_awesome_flutter/font_awesome_flutter.dart": font_awesome_flutter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fa_icon.dart","../font_awesome_flutter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8BkB;;;;;;IAYF;;;;;;IAQD;;;;;;IAWC;;;;;;IAeO;;;;;;;;;;;;;;UAGK;;AACxB,YAAY,AAAsB,8BAAG,kCAA4B,OAAO;AACpD,2BACG,yBAAd,aAAgC,wBAAG,OAAO;AAE/B,sBAAsB,wBAAG,OAAO;AAEtC,sBAAgB,iBAAL,cAAQ,AAAU,SAAD;AAE1C,UAAI,AAAK;AACP,cAAO,iCACE,2BACA,+BAAgB,QAAQ,UAAU,QAAQ;;AAIxC,yBAAgC,OAAlB,AAAU,SAAD,UAAC,eAAW;AAC1C,uBAAkB,mBAAN,eAAwB,eAAf,AAAU,SAAD;AACpC,UAAI,WAAW,KAAI,KACjB,AAAkE,YAAtD,AAAU,SAAD,aAAa,AAAU,AAAQ,SAAT,WAAW,WAAW;AAE5D,uBAAa,kCACK,kDAEnB,aAAa,QACX,kCACS,yBAAiB,AAAE,eAAN,8BACnB,uCACI,cACF,SAAS,YACN,QAAQ,cACF,AAAE,eAAN,gCACC,AAAE,eAAN;AAKf,UAAQ,AAAE,eAAN;AACF,gBAAQ,aAAa;;;AAOhB,cALD,aAAa,+EACQ;AAAY,6BAAM,CAAC,KAAK,KAAK;;kCAC3B,+CACF,cACZ,UAAU;AAEnB;;;;AAEA;;;;AAIN,YAAO,iCACE,2BACA,uCACE,UAAU;IAGvB;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AAEmC,MADvE,AAAW,UAAD,KACN,mCAAiB,QAAQ,oBAAc,qBAAqB;AACA,MAAhE,AAAW,UAAD,KAAK,mCAAe,QAAQ,0BAAoB;AACO,MAAjE,AAAW,UAAD,KAAK,6BAAc,SAAS,2BAAqB;IAC7D;;iCA/HO;QACA;QACA;QACA;QACA;QACA;;IALA;IAEA;IACA;IACA;IACA;UACM,AAAK,IAAD;AACX,kDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;ECyhSvB;;;;;;MAriSwB,mDAAa;;;MAMb,oDAAc;;;MAKd,8CAAQ;;;MAMR,8DAAwB;;;MAMxB,wCAAE;;;MAMF,sDAAgB;;;MAMhB,iDAAW;;;MAMX,sDAAgB;;;MAMhB,iDAAW;;;MAMX,4CAAM;;;MAKN,yCAAG;;;MAKH,8CAAQ;;;MAKR,oDAAc;;;MAMd,kDAAY;;;MAKZ,4CAAM;;;MAKN,6CAAO;;;MAMP,iDAAW;;;MAMX,kDAAY;;;MAMZ,+CAAS;;;MAMT,gDAAU;;;MAKV,4CAAM;;;MAMN,+CAAS;;;MAKT,4CAAM;;;MAKN,+CAAS;;;MAMT,+CAAS;;;MAMT,sEAAgC;;;MAMhC,4CAAM;;;MAMN,4CAAM;;;MAMN,6CAAO;;;MAKP,+CAAS;;;MAMT,qDAAe;;;MAMf,qDAAe;;;MAMf,sDAAgB;;;MAMhB,mDAAa;;;MAMb,+CAAS;;;MAMT,+CAAS;;;MAMT,gDAAU;;;MAMV,6CAAO;;;MAMP,gDAAU;;;MAMV,2CAAK;;;MAKL,mDAAa;;;MAKb,6CAAO;;;MAMP,0CAAI;;;MAKJ,8CAAQ;;;MAKR,iDAAW;;;MAKX,2CAAK;;;MAML,2CAAK;;;MAML,8CAAQ;;;MAKR,8CAAQ;;;MAMR,6CAAO;;;MAMP,6CAAO;;;MAMP,6DAAuB;;;MAMvB,wDAAkB;;;MAMlB,6DAAuB;;;MAMvB,wDAAkB;;;MAMlB,8DAAwB;;;MAMxB,yDAAmB;;;MAMnB,2DAAqB;;;MAMrB,sDAAgB;;;MAMhB,qDAAe;;;MAMf,qDAAe;;;MAMf,sDAAgB;;;MAMhB,mDAAa;;;MAMb,+CAAS;;;MAMT,+CAAS;;;MAMT,gDAAU;;;MAMV,6CAAO;;;MAMP,+CAAS;;;MAMT,gDAAU;;;MAMV,gDAAU;;;MAKV,gDAAU;;;MAMV,+DAAyB;;;MAMzB,8CAAQ;;;MAKR,gDAAU;;;MAMV,wCAAE;;;MAMF,2CAAK;;;MAKL,+CAAS;;;MAMT,0CAAI;;;MAKJ,6CAAO;;;MAMP,sDAAgB;;;MAKhB,kDAAY;;;MAKZ,6CAAO;;;MAKP,4CAAM;;;MAMN,2CAAK;;;MAKL,yCAAG;;;MAMH,0CAAI;;;MAMJ,kDAAY;;;MAMZ,+CAAS;;;MAMT,8CAAQ;;;MAMR,2CAAK;;;MAML,8CAAQ;;;MAMR,+CAAS;;;MAMT,2CAAK;;;MAML,kDAAY;;;MAMZ,sDAAgB;;;MAMhB,uDAAiB;;;MAMjB,yCAAG;;;MAMH,6CAAO;;;MAKP,8CAAQ;;;MAMR,6CAAO;;;MAMP,0CAAI;;;MAMJ,kDAAY;;;MAMZ,oDAAc;;;MAMd,0CAAI;;;MAMJ,kDAAY;;;MAMZ,iDAAW;;;MAMX,iDAAW;;;MAMX,oDAAc;;;MAMd,0DAAoB;;;MAKpB,+CAAS;;;MAMT,yCAAG;;;MAMH,0CAAI;;;MAKJ,6CAAO;;;MAKP,mDAAa;;;MAMb,+CAAS;;;MAMT,0CAAI;;;MAMJ,oDAAc;;;MAMd,+CAAS;;;MAMT,iDAAW;;;MAMX,2CAAK;;;MAML,6CAAO;;;MAMP,4CAAM;;;MAKN,+CAAS;;;MAMT,gDAAU;;;MAMV,+CAAS;;;MAMT,kDAAY;;;MAMZ,+CAAS;;;MAKT,6CAAO;;;MAKP,0CAAI;;;MAKJ,8CAAQ;;;MAKR,gDAAU;;;MAMV,6CAAO;;;MAMP,kDAAY;;;MAMZ,2CAAK;;;MAML,0CAAI;;;MAKJ,6CAAO;;;MAKP,8CAAQ;;;MAKR,+CAAS;;;MAKT,gDAAU;;;MAMV,0CAAI;;;MAMJ,0CAAI;;;MAMJ,0CAAI;;;MAMJ,0CAAI;;;MAMJ,0CAAI;;;MAMJ,0CAAI;;;MAMJ,8CAAQ;;;MAMR,iDAAW;;;MAMX,8CAAQ;;;MAMR,gDAAU;;;MAMV,mDAAa;;;MAMb,8CAAQ;;;MAKR,+CAAS;;;MAMT,+CAAS;;;MAMT,gDAAU;;;MAKV,iDAAW;;;MAMX,iDAAW;;;MAMX,yCAAG;;;MAMH,6CAAO;;;MAMP,+CAAS;;;MAMT,2CAAK;;;MAML,6CAAO;;;MAMP,2CAAK;;;MAML,gDAAU;;;MAMV,+CAAS;;;MAMT,sDAAgB;;;MAMhB,oDAAc;;;MAMd,2CAAK;;;MAML,2CAAK;;;MAKL,yCAAG;;;MAKH,4CAAM;;;MAMN,yCAAG;;;MAMH,mDAAa;;;MAMb,8CAAQ;;;MAMR,8CAAQ;;;MAMR,8CAAQ;;;MAMR,0CAAI;;;MAKJ,sDAAgB;;;MAMhB,yCAAG;;;MAMH,4CAAM;;;MAMN,kDAAY;;;MAKZ,+CAAS;;;MAKT,gDAAU;;;MAMV,gDAAU;;;MAMV,mDAAa;;;MAMb,8CAAQ;;;MAMR,sDAAgB;;;MAMhB,iDAAW;;;MAMX,wDAAkB;;;MAMlB,mDAAa;;;MAMb,iDAAW;;;MAMX,wDAAkB;;;MAMlB,mDAAa;;;MAMb,uDAAiB;;;MAMjB,kDAAY;;;MAMZ,wDAAkB;;;MAMlB,mDAAa;;;MAMb,kDAAY;;;MAMZ,4CAAM;;;MAMN,iDAAW;;;MAMX,gDAAU;;;MAMV,uDAAiB;;;MAMjB,+CAAS;;;MAMT,8CAAQ;;;MAMR,8CAAQ;;;MAMR,yCAAG;;;MAMH,4CAAM;;;MAMN,gDAAU;;;MAMV,8CAAQ;;;MAMR,6CAAO;;;MAMP,6CAAO;;;MAMP,+CAAS;;;MAMT,+CAAS;;;MAMT,gDAAU;;;MAMV,0DAAoB;;;MAMpB,qDAAe;;;MAMf,0DAAoB;;;MAMpB,qDAAe;;;MAMf,2DAAqB;;;MAMrB,sDAAgB;;;MAMhB,wDAAkB;;;MAMlB,mDAAa;;;MAMb,6CAAO;;;MAMP,4CAAM;;;MAMN,mDAAa;;;MAMb,8CAAQ;;;MAMR,kDAAY;;;MAMZ,yCAAG;;;MAKH,iDAAW;;;MAMX,4CAAM;;;MAKN,gDAAU;;;MAKV,kDAAY;;;MAKZ,gDAAU;;;MAKV,2CAAK;;;MAKL,kDAAY;;;MAKZ,8CAAQ;;;MAKR,8CAAQ;;;MAKR,4CAAM;;;MAKN,gDAAU;;;MAMV,4CAAM;;;MAMN,iDAAW;;;MAMX,2CAAK;;;MAML,gDAAU;;;MAMV,uDAAiB;;;MAMjB,qDAAe;;;MAMf,+CAAS;;;MAMT,mDAAa;;;MAMb,8CAAQ;;;MAMR,+CAAS;;;MAMT,8CAAQ;;;MAMR,2CAAK;;;MAML,sDAAgB;;;MAMhB,iDAAW;;;MAMX,iDAAW;;;MAMX,sDAAgB;;;MAMhB,iDAAW;;;MAMX,4CAAM;;;MAMN,2CAAK;;;MAML,iDAAW;;;MAMX,gDAAU;;;MAMV,+CAAS;;;MAMT,iDAAW;;;MAMX,+CAAS;;;MAMT,gDAAU;;;MAMV,+CAAS;;;MAMT,uDAAiB;;;MAMjB,uDAAiB;;;MAMjB,wDAAkB;;;MAMlB,qDAAe;;;MAMf,iDAAW;;;MAMX,iDAAW;;;MAMX,kDAAY;;;MAMZ,+CAAS;;;MAMT,2CAAK;;;MAML,4CAAM;;;MAKN,gDAAU;;;MAMV,4CAAM;;;MAMN,iDAAW;;;MAMX,4CAAM;;;MAMN,iDAAW;;;MAMX,0CAAI;;;MAMJ,mDAAa;;;MAMb,oDAAc;;;MAMd,+CAAS;;;MAMT,oDAAc;;;MAMd,mDAAa;;;MAMb,gDAAU;;;MAMV,2CAAK;;;MAML,gDAAU;;;MAMV,2CAAK;;;MAML,2DAAqB;;;MAMrB,sDAAgB;;;MAMhB,2CAAK;;;MAML,sDAAgB;;;MAMhB,mDAAa;;;MAMb,+CAAS;;;MAMT,mDAAa;;;MAMb,+CAAS;;;MAMT,uDAAiB;;;MAMjB,8CAAQ;;;MAMR,kDAAY;;;MAMZ,oDAAc;;;MAKd,gDAAU;;;MAKV,gDAAU;;;MAKV,gDAAU;;;MAKV,kDAAY;;;MAMZ,8CAAQ;;;MAMR,0CAAI;;;MAMJ,gDAAU;;;MAKV,6CAAO;;;MAKP,8CAAQ;;;MAMR,4CAAM;;;MAMN,yCAAG;;;MAMH,0CAAI;;;MAMJ,2CAAK;;;MAML,6CAAO;;;MAMP,kDAAY;;;MAMZ,6CAAO;;;MAMP,qDAAe;;;MAMf,gDAAU;;;MAMV,mDAAa;;;MAMb,sDAAgB;;;MAMhB,iDAAW;;;MAMX,oDAAc;;;MAMd,kDAAY;;;MAMZ,mDAAa;;;MAMb,8CAAQ;;;MAMR,oDAAc;;;MAMd,iDAAW;;;MAMX,kDAAY;;;MAMZ,6CAAO;;;MAMP,8CAAQ;;;MAMR,iDAAW;;;MAMX,uDAAiB;;;MAMjB,mDAAa;;;MAMb,gDAAU;;;MAKV,oDAAc;;;MAKd,4CAAM;;;MAMN,4CAAM;;;MAMN,gDAAU;;;MAMV,+CAAS;;;MAMT,0CAAI;;;MAMJ,oDAAc;;;MAMd,+CAAS;;;MAMT,kDAAY;;;MAMZ,2CAAK;;;MAKL,4CAAM;;;MAKN,qDAAe;;;MAKf,uDAAiB;;;MAKjB,uDAAiB;;;MAKjB,yDAAmB;;;MAKnB,yDAAmB;;;MAKnB,uDAAiB;;;MAKjB,uDAAiB;;;MAKjB,0DAAoB;;;MAKpB,0DAAoB;;;MAKpB,uDAAiB;;;MAKjB,6DAAuB;;;MAKvB,iEAA2B;;;MAM3B,0DAAoB;;;MAKpB,yDAAmB;;;MAMnB,qDAAe;;;MAMf,gDAAU;;;MAMV,kDAAY;;;MAMZ,0CAAI;;;MAMJ,6CAAO;;;MAMP,2CAAK;;;MAML,gDAAU;;;MAMV,0CAAI;;;MAMJ,2CAAK;;;MAML,4CAAM;;;MAMN,0CAAI;;;MAKJ,6CAAO;;;MAMP,0CAAI;;;MAMJ,2CAAK;;;MAML,yCAAG;;;MAKH,gDAAU;;;MAKV,2CAAK;;;MAML,iDAAW;;;MAKX,iDAAW;;;MAKX,8CAAQ;;;MAMR,8CAAQ;;;MAMR,0CAAI;;;MAKJ,4CAAM;;;MAKN,+CAAS;;;MAMT,8CAAQ;;;MAKR,+CAAS;;;MAKT,6CAAO;;;MAMP,6CAAO;;;MAKP,yCAAG;;;MAKH,gDAAU;;;MAMV,kDAAY;;;MAMZ,yCAAG;;;MAMH,+CAAS;;;MAKT,8CAAQ;;;MAMR,0CAAI;;;MAMJ,6CAAO;;;MAMP,4CAAM;;;MAMN,8CAAQ;;;MAMR,8CAAQ;;;MAMR,6CAAO;;;MAMP,6CAAO;;;MAMP,+CAAS;;;MAMT,6CAAO;;;MAKP,0CAAI;;;MAKJ,kDAAY;;;MAMZ,uDAAiB;;;MAMjB,gDAAU;;;MAKV,6CAAO;;;MAKP,+CAAS;;;MAMT,6CAAO;;;MAMP,4CAAM;;;MAMN,gDAAU;;;MAMV,2CAAK;;;MAML,yCAAG;;;MAKH,4CAAM;;;MAKN,4CAAM;;;MAMN,yCAAG;;;MAMH,gDAAU;;;MAMV,2CAAK;;;MAML,kDAAY;;;MAMZ,4CAAM;;;MAMN,gDAAU;;;MAMV,8CAAQ;;;MAMR,oDAAc;;;MAMd,+CAAS;;;MAMT,0CAAI;;;MAMJ,8CAAQ;;;MAKR,mDAAa;;;MAMb,qDAAe;;;MAMf,4CAAM;;;MAMN,iDAAW;;;MAKX,8CAAQ;;;MAKR,oDAAc;;;MAKd,6CAAO;;;MAMP,0CAAI;;;MAMJ,kDAAY;;;MAMZ,mDAAa;;;MAKb,4CAAM;;;MAMN,8CAAQ;;;MAMR,8CAAQ;;;MAMR,kDAAY;;;MAMZ,6CAAO;;;MAKP,4CAAM;;;MAKN,gDAAU;;;MAKV,0CAAI;;;MAMJ,0CAAI;;;MAKJ,gDAAU;;;MAMV,+CAAS;;;MAMT,0CAAI;;;MAMJ,yCAAG;;;MAMH,2CAAK;;;MAKL,+CAAS;;;MAMT,+CAAS;;;MAMT,+CAAS;;;MAKT,0CAAI;;;MAKJ,2CAAK;;;MAKL,4CAAM;;;MAMN,mDAAa;;;MAMb,8CAAQ;;;MAMR,uDAAiB;;;MAMjB,kDAAY;;;MAMZ,sDAAgB;;;MAMhB,oDAAc;;;MAMd,4CAAM;;;MAMN,4CAAM;;;MAMN,4CAAM;;;MAKN,4CAAM;;;MAKN,8CAAQ;;;MAMR,8CAAQ;;;MAKR,0CAAI;;;MAMJ,8CAAQ;;;MAKR,8CAAQ;;;MAMR,iDAAW;;;MAMX,iDAAW;;;MAMX,uDAAiB;;;MAMjB,yDAAmB;;;MAMnB,4CAAM;;;MAMN,+CAAS;;;MAMT,qDAAe;;;MAKf,kDAAY;;;MAMZ,qDAAe;;;MAMf,2DAAqB;;;MAMrB,8CAAQ;;;MAMR,yCAAG;;;MAMH,gDAAU;;;MAMV,mDAAa;;;MAMb,8CAAQ;;;MAMR,8CAAQ;;;MAMR,+CAAS;;;MAKT,uDAAiB;;;MAMjB,oDAAc;;;MAMd,yCAAG;;;MAMH,wDAAkB;;;MAMlB,kDAAY;;;MAMZ,iDAAW;;;MAMX,4CAAM;;;MAMN,yCAAG;;;MAMH,6CAAO;;;MAMP,gDAAU;;;MAMV,2CAAK;;;MAML,4CAAM;;;MAMN,4CAAM;;;MAMN,gDAAU;;;MAMV,2CAAK;;;MAML,+CAAS;;;MAMT,0CAAI;;;MAMJ,kDAAY;;;MAMZ,6CAAO;;;MAMP,sDAAgB;;;MAMhB,iDAAW;;;MAMX,oDAAc;;;MAMd,+CAAS;;;MAMT,mDAAa;;;MAMb,8CAAQ;;;MAMR,kDAAY;;;MAMZ,6CAAO;;;MAMP,kDAAY;;;MAMZ,oDAAc;;;MAMd,+CAAS;;;MAMT,gDAAU;;;MAMV,oDAAc;;;MAMd,+CAAS;;;MAMT,gDAAU;;;MAMV,iDAAW;;;MAMX,uDAAiB;;;MAMjB,iDAAW;;;MAMX,oDAAc;;;MAMd,kDAAY;;;MAMZ,6CAAO;;;MAMP,yDAAmB;;;MAMnB,oDAAc;;;MAMd,sDAAgB;;;MAMhB,mDAAa;;;MAMb,gDAAU;;;MAMV,oDAAc;;;MAMd,+CAAS;;;MAMT,mDAAa;;;MAMb,8CAAQ;;;MAMR,0CAAI;;;MAMJ,8CAAQ;;;MAMR,0CAAI;;;MAMJ,4CAAM;;;MAMN,iDAAW;;;MAMX,0CAAI;;;MAMJ,6CAAO;;;MAMP,sDAAgB;;;MAMhB,6CAAO;;;MAMP,oDAAc;;;MAMd,8CAAQ;;;MAKR,gDAAU;;;MAKV,mDAAa;;;MAKb,gDAAU;;;MAMV,0CAAI;;;MAMJ,gDAAU;;;MAMV,+CAAS;;;MAMT,0CAAI;;;MAMJ,mDAAa;;;MAMb,6CAAO;;;MAMP,2CAAK;;;MAKL,4CAAM;;;MAKN,+CAAS;;;MAMT,kDAAY;;;MAMZ,6CAAO;;;MAKP,yCAAG;;;MAMH,iDAAW;;;MAMX,4CAAM;;;MAMN,iDAAW;;;MAMX,qDAAe;;;MAMf,gDAAU;;;MAMV,gDAAU;;;MAMV,0CAAI;;;MAMJ,iDAAW;;;MAKX,oDAAc;;;MAKd,qDAAe;;;MAKf,+CAAS;;;MAKT,iDAAW;;;MAMX,kDAAY;;;MAMZ,iDAAW;;;MAMX,oDAAc;;;MAKd,8CAAQ;;;MAMR,6CAAO;;;MAKP,gDAAU;;;MAKV,kDAAY;;;MAKZ,6CAAO;;;MAMP,0CAAI;;;MAMJ,gDAAU;;;MAMV,2CAAK;;;MAML,oDAAc;;;MAMd,+CAAS;;;MAKT,6CAAO;;;MAMP,kDAAY;;;MAMZ,iDAAW;;;MAMX,4CAAM;;;MAMN,sDAAgB;;;MAMhB,oDAAc;;;MAMd,6CAAO;;;MAMP,6CAAO;;;MAMP,2CAAK;;;MAML,8CAAQ;;;MAMR,yCAAG;;;MAMH,gDAAU;;;MAKV,+CAAS;;;MAKT,wCAAE;;;MAKF,8CAAQ;;;MAMR,2CAAK;;;MAML,0CAAI;;;MAMJ,2CAAK;;;MAKL,yCAAG;;;MAKH,4CAAM;;;MAKN,+CAAS;;;MAMT,4CAAM;;;MAMN,+CAAS;;;MAMT,kDAAY;;;MAKZ,+CAAS;;;MAMT,4CAAM;;;MAKN,4CAAM;;;MAMN,iDAAW;;;MAMX,kDAAY;;;MAMZ,qDAAe;;;MAMf,kDAAY;;;MAMZ,6CAAO;;;MAKP,2CAAK;;;MAKL,4CAAM;;;MAMN,2CAAK;;;MAML,iDAAW;;;MAMX,mDAAa;;;MAMb,+CAAS;;;MAMT,iDAAW;;;MAKX,4CAAM;;;MAMN,8CAAQ;;;MAKR,+CAAS;;;MAKT,gDAAU;;;MAKV,4CAAM;;;MAKN,iDAAW;;;MAKX,+CAAS;;;MAKT,gDAAU;;;MAMV,gDAAU;;;MAMV,iDAAW;;;MAMX,sDAAgB;;;MAKhB,kDAAY;;;MAMZ,6CAAO;;;MAMP,mDAAa;;;MAMb,8CAAQ;;;MAKR,0CAAI;;;MAMJ,iDAAW;;;MAMX,sDAAgB;;;MAMhB,kDAAY;;;MAMZ,6CAAO;;;MAMP,+CAAS;;;MAMT,0CAAI;;;MAMJ,kDAAY;;;MAMZ,6CAAO;;;MAMP,mDAAa;;;MAMb,8CAAQ;;;MAMR,wDAAkB;;;MAMlB,mDAAa;;;MAMb,qDAAe;;;MAMf,gDAAU;;;MAMV,qDAAe;;;MAMf,gDAAU;;;MAMV,0DAAoB;;;MAMpB,qDAAe;;;MAMf,oDAAc;;;MAMd,+CAAS;;;MAMT,oDAAc;;;MAMd,+CAAS;;;MAMT,qDAAe;;;MAMf,gDAAU;;;MAMV,2DAAqB;;;MAMrB,sDAAgB;;;MAMhB,yDAAmB;;;MAMnB,oDAAc;;;MAMd,mDAAa;;;MAMb,8CAAQ;;;MAMR,oDAAc;;;MAMd,+CAAS;;;MAMT,uDAAiB;;;MAMjB,kDAAY;;;MAKZ,8CAAQ;;;MAKR,2CAAK;;;MAKL,6CAAO;;;MAMP,4CAAM;;;MAKN,0CAAI;;;MAMJ,6CAAO;;;MAKP,gDAAU;;;MAKV,sDAAgB;;;MAKhB,gDAAU;;;MAMV,+CAAS;;;MAMT,4CAAM;;;MAMN,2CAAK;;;MAML,iDAAW;;;MAMX,sDAAgB;;;MAMhB,wDAAkB;;;MAMlB,oDAAc;;;MAMd,sDAAgB;;;MAMhB,qDAAe;;;MAMf,gDAAU;;;MAMV,sDAAgB;;;MAMhB,oDAAc;;;MAMd,+CAAS;;;MAMT,oDAAc;;;MAMd,+CAAS;;;MAMT,wDAAkB;;;MAMlB,mDAAa;;;MAMb,wDAAkB;;;MAMlB,mDAAa;;;MAMb,yDAAmB;;;MAMnB,oDAAc;;;MAMd,sDAAgB;;;MAMhB,iDAAW;;;MAMX,sDAAgB;;;MAMhB,iDAAW;;;MAMX,mDAAa;;;MAMb,8CAAQ;;;MAMR,uDAAiB;;;MAMjB,kDAAY;;;MAMZ,kDAAY;;;MAMZ,oDAAc;;;MAMd,+CAAS;;;MAMT,2CAAK;;;MAML,kDAAY;;;MAMZ,+CAAS;;;MAMT,oDAAc;;;MAMd,+CAAS;;;MAMT,uDAAiB;;;MAMjB,oDAAc;;;MAMd,8CAAQ;;;MAMR,6CAAO;;;MAMP,6CAAO;;;MAMP,+CAAS;;;MAMT,mDAAa;;;MAMb,+CAAS;;;MAMT,8CAAQ;;;MAMR,yCAAG;;;MAMH,mDAAa;;;MAMb,wDAAkB;;;MAMlB,kDAAY;;;MAMZ,mDAAa;;;MAMb,6CAAO;;;MAMP,gDAAU;;;MAMV,mDAAa;;;MAMb,6CAAO;;;MAMP,gDAAU;;;MAMV,2CAAK;;;MAML,iDAAW;;;MAMX,+CAAS;;;MAMT,gDAAU;;;MAMV,iDAAW;;;MAMX,4CAAM;;;MAMN,2CAAK;;;MAKL,0CAAI;;;MAKJ,iDAAW;;;MAMX,6CAAO;;;MAKP,0CAAI;;;MAMJ,gDAAU;;;MAMV,gDAAU;;;MAMV,0CAAI;;;MAKJ,2CAAK;;;MAKL,8CAAQ;;;MAMR,2CAAK;;;MAML,+CAAS;;;MAMT,mDAAa;;;MAMb,8CAAQ;;;MAMR,iDAAW;;;MAMX,oDAAc;;;MAMd,kDAAY;;;MAMZ,4CAAM;;;MAMN,4CAAM;;;MAMN,2CAAK;;;MAKL,4CAAM;;;MAMN,oDAAc;;;MAMd,+CAAS;;;MAMT,kDAAY;;;MAMZ,mDAAa;;;MAMb,oDAAc;;;MAMd,iDAAW;;;MAMX,+CAAS;;;MAKT,2CAAK;;;MAML,6CAAO;;;MAKP,2CAAK;;;MAKL,6CAAO;;;MAMP,6CAAO;;;MAMP,8CAAQ;;;MAMR,6CAAO;;;MAMP,2CAAK;;;MAML,kDAAY;;;MAMZ,6CAAO;;;MAMP,iDAAW;;;MAMX,4CAAM;;;MAMN,+CAAS;;;MAKT,2CAAK;;;MAML,2CAAK;;;MAML,gDAAU;;;MAMV,2CAAK;;;MAML,iDAAW;;;MAMX,4CAAM;;;MAKN,0CAAI;;;MAMJ,2CAAK;;;MAML,4CAAM;;;MAMN,8CAAQ;;;MAMR,8CAAQ;;;MAMR,0CAAI;;;MAMJ,gDAAU;;;MAKV,8CAAQ;;;MAKR,+CAAS;;;MAKT,qDAAe;;;MAKf,8CAAQ;;;MAMR,8CAAQ;;;MAMR,sDAAgB;;;MAMhB,8CAAQ;;;MAKR,6CAAO;;;MAMP,4CAAM;;;MAKN,4CAAM;;;MAKN,4CAAM;;;MAKN,gDAAU;;;MAKV,0CAAI;;;MAMJ,0CAAI;;;MAMJ,+CAAS;;;MAKT,6CAAO;;;MAMP,0CAAI;;;MAKJ,2CAAK;;;MAML,2CAAK;;;MAKL,4CAAM;;;MAMN,mDAAa;;;MAKb,wCAAE;;;MAKF,8CAAQ;;;MAKR,8CAAQ;;;MAMR,2CAAK;;;MAKL,4CAAM;;;MAMN,yCAAG;;;MAKH,6CAAO;;;MAMP,mDAAa;;;MAMb,8CAAQ;;;MAKR,4CAAM;;;MAMN,4CAAM;;;MAKN,iDAAW;;;MAKX,kDAAY;;;MAMZ,+CAAS;;;MAMT,0CAAI;;;MAMJ,mDAAa;;;MAMb,8CAAQ;;;MAMR,wDAAkB;;;MAMlB,mDAAa;;;MAMb,8CAAQ;;;MAKR,4CAAM;;;MAMN,8CAAQ;;;MAMR,8CAAQ;;;MAMR,4CAAM;;;MAMN,gDAAU;;;MAMV,iDAAW;;;MAMX,mDAAa;;;MAKb,6CAAO;;;MAKP,4CAAM;;;MAKN,kDAAY;;;MAMZ,gDAAU;;;MAMV,2CAAK;;;MAML,oDAAc;;;MAMd,+CAAS;;;MAMT,sDAAgB;;;MAMhB,iDAAW;;;MAMX,oDAAc;;;MAMd,+CAAS;;;MAMT,gDAAU;;;MAMV,0CAAI;;;MAKJ,6CAAO;;;MAMP,gDAAU;;;MAMV,2CAAK;;;MAKL,0CAAI;;;MAMJ,8CAAQ;;;MAMR,mDAAa;;;MAMb,kDAAY;;;MAMZ,gDAAU;;;MAMV,mDAAa;;;MAMb,8CAAQ;;;MAMR,oDAAc;;;MAMd,+CAAS;;;MAKT,0CAAI;;;MAMJ,0CAAI;;;MAMJ,8CAAQ;;;MAMR,gDAAU;;;MAKV,4CAAM;;;MAMN,2CAAK;;;MAML,8CAAQ;;;MAMR,0CAAI;;;MAMJ,kDAAY;;;MAMZ,6CAAO;;;MAMP,4CAAM;;;MAMN,4CAAM;;;MAMN,mDAAa;;;MAMb,0CAAI;;;MAMJ,8CAAQ;;;MAMR,sDAAgB;;;MAMhB,sDAAgB;;;MAMhB,uDAAiB;;;MAMjB,oDAAc;;;MAMd,+CAAS;;;MAMT,iDAAW;;;MAMX,2CAAK;;;MAML,gDAAU;;;MAKV,0CAAI;;;MAKJ,6CAAO;;;MAMP,2CAAK;;;MAML,4CAAM;;;MAMN,8CAAQ;;;MAKR,+CAAS;;;MAMT,0CAAI;;;MAKJ,iDAAW;;;MAMX,8CAAQ;;;MAMR,yCAAG;;;MAMH,+CAAS;;;MAMT,kDAAY;;;MAMZ,+CAAS;;;MAMT,kDAAY;;;MAMZ,4CAAM;;;MAMN,8CAAQ;;;MAKR,8CAAQ;;;MAMR,4CAAM;;;MAMN,0CAAI;;;MAKJ,gDAAU;;;MAKV,gDAAU;;;MAKV,iDAAW;;;MAKX,iDAAW;;;MAMX,0CAAI;;;MAKJ,8CAAQ;;;MAKR,4CAAM;;;MAKN,yCAAG;;;MAMH,2CAAK;;;MAKL,6CAAO;;;MAKP,4CAAM;;;MAKN,6CAAO;;;MAMP,4CAAM;;;MAKN,2CAAK;;;MAKL,4CAAM;;;MAKN,8CAAQ;;;MAMR,8CAAQ;;;MAMR,yCAAG;;;MAMH,mDAAa;;;MAMb,8CAAQ;;;MAMR,yDAAmB;;;MAMnB,oDAAc;;;MAMd,4CAAM;;;MAKN,8CAAQ;;;MAMR,6CAAO;;;MAMP,6CAAO;;;MAMP,4CAAM;;;MAKN,+CAAS;;;MAMT,+CAAS;;;MAMT,gDAAU;;;MAMV,mDAAa;;;MAMb,wDAAkB;;;MAMlB,qDAAe;;;MAMf,gDAAU;;;MAKV,+CAAS;;;MAMT,2CAAK;;;MAML,iDAAW;;;MAMX,sDAAgB;;;MAMhB,iDAAW;;;MAMX,4CAAM;;;MAKN,yCAAG;;;MAKH,8CAAQ;;;MAKR,2CAAK;;;MAKL,4CAAM;;;MAMN,4CAAM;;;MAMN,+CAAS;;;MAKT,0CAAI;;;MAKJ,4CAAM;;;MAMN,+CAAS;;;MAMT,uDAAiB;;;MAMjB,kDAAY;;;MAMZ,mDAAa;;;MAMb,sDAAgB;;;MAMhB,gDAAU;;;MAMV,mDAAa;;;MAMb,8CAAQ;;;MAMR,+CAAS;;;MAMT,0CAAI;;;MAMJ,kDAAY;;;MAMZ,4CAAM;;;MAMN,gDAAU;;;MAMV,8CAAQ;;;MAMR,2CAAK;;;MAML,kDAAY;;;MAMZ,4CAAM;;;MAMN,2CAAK;;;MAKL,6CAAO;;;MAKP,0CAAI;;;MAMJ,kDAAY;;;MAKZ,4CAAM;;;MAMN,oDAAc;;;MAMd,+CAAS;;;MAKT,4CAAM;;;MAKN,0CAAI;;;MAKJ,4CAAM;;;MAMN,8CAAQ;;;MAMR,kDAAY;;;MAKZ,yCAAG;;;MAKH,yCAAG;;;MAKH,iDAAW;;;MAMX,sDAAgB;;;MAMhB,iDAAW;;;MAMX,wDAAkB;;;MAMlB,mDAAa;;;MAKb,mDAAa;;;MAKb,mDAAa;;;MAKb,yDAAmB;;;MAMnB,4CAAM;;;MAMN,iDAAW;;;MAMX,wCAAE;;;MAKF,8CAAQ;;;MAKR,4CAAM;;;MAKN,2CAAK;;;MAKL,kDAAY;;;MAKZ,2CAAK;;;MAKL,yCAAG;;;MAMH,2CAAK;;;MAML,6CAAO;;;MAKP,2CAAK;;;MAML,+CAAS;;;MAMT,2CAAK;;;MAML,gDAAU;;;MAMV,iDAAW;;;MAMX,6CAAO;;;MAKP,4CAAM;;;MAMN,4CAAM;;;MAMN,qDAAe;;;MAMf,gDAAU;;;MAMV,+CAAS;;;MAMT,kDAAY;;;MAMZ,+CAAS;;;MAMT,6CAAO;;;MAMP,8CAAQ;;;MAMR,oDAAc;;;MAMd,2CAAK;;;MAKL,6CAAO;;;MAMP,2CAAK;;;MAML,sDAAgB;;;MAMhB,iDAAW;;;MAMX,yCAAG;;;MAKH,4CAAM;;;MAMN,2CAAK;;;MAML,yCAAG;;;MAMH,4CAAM;;;MAMN,8CAAQ;;;MAMR,4CAAM;;;MAMN,+CAAS;;;MAMT,+CAAS;;;MAMT,iDAAW;;;MAMX,iDAAW;;;MAMX,kDAAY;;;MAMZ,iDAAW;;;MAMX,+CAAS;;;MAKT,6CAAO;;;MAMP,6CAAO;;;MAMP,gDAAU;;;MAKV,+CAAS;;;MAMT,iDAAW;;;MAKX,iDAAW;;;MAKX,sDAAgB;;;MAKhB,qDAAe;;;MAMf,2CAAK;;;MAML,8CAAQ;;;MAMR,gDAAU;;;MAMV,iDAAW;;;MAMX,oDAAc;;;MAMd,iDAAW;;;MAMX,gDAAU;;;MAKV,yCAAG;;;MAKH,+CAAS;;;MAKT,kDAAY;;;MAMZ,kDAAY;;;MAKZ,iDAAW;;;MAKX,qDAAe;;;MAMf,+CAAS;;;MAMT,2CAAK;;;MAKL,+CAAS;;;MAKT,gDAAU;;;MAKV,qDAAe;;;MAMf,gDAAU;;;MAMV,oDAAc;;;MAMd,2CAAK;;;MAML,kDAAY;;;MAMZ,oDAAc;;;MAMd,gDAAU;;;MAMV,0CAAI;;;MAMJ,qDAAe;;;MAMf,gDAAU;;;MAKV,iDAAW;;;MAMX,0CAAI;;;MAMJ,0CAAI;;;MAMJ,gDAAU;;;MAMV,qDAAe;;;MAMf,gDAAU;;;MAMV,6CAAO;;;MAMP,0CAAI;;;MAMJ,2CAAK;;;MAML,yCAAG;;;MAMH,8CAAQ;;;MAMR,0CAAI;;;MAMJ,8CAAQ;;;MAMR,+CAAS;;;MAMT,8CAAQ;;;MAMR,0CAAI;;;MAMJ,kDAAY;;;MAMZ,kDAAY;;;MAMZ,wDAAkB;;;MAMlB,2DAAqB;;;MAMrB,2CAAK;;;MAML,gDAAU;;;MAKV,iDAAW;;;MAMX,oDAAc;;;MAMd,iDAAW;;;MAMX,8CAAQ;;;MAKR,4CAAM;;;MAMN,iDAAW;;;MAKX,4CAAM;;;MAKN,wCAAE;;;MAMF,4CAAM;;;MAMN,8CAAQ;;;MAMR,yDAAmB;;;MAMnB,oDAAc;;;MAMd,+CAAS;;;MAKT,+CAAS;;;MAKT,2CAAK;;;MAML,+CAAS;;;MAMT,gDAAU;;;MAMV,2CAAK;;;MAKL,8CAAQ;;;MAMR,+CAAS;;;MAMT,kDAAY;;;MAMZ,6CAAO;;;MAMP,4CAAM;;;MAKN,iDAAW;;;MAKX,6CAAO;;;MAKP,2CAAK;;;MAKL,iDAAW;;;MAKX,4CAAM;;;MAKN,2CAAK;;;MAML,6CAAO;;;MAMP,iDAAW;;;MAMX,6CAAO;;;MAKP,8CAAQ;;;MAKR,4CAAM;;;MAKN,iDAAW;;;MAKX,kDAAY;;;MAMZ,4CAAM;;;MAMN,0CAAI;;;MAMJ,6CAAO;;;MAMP,qDAAe;;;MAMf,gDAAU;;;MAMV,kDAAY;;;MAKZ,4CAAM;;;MAMN,2CAAK;;;MAML,8CAAQ;;;MAKR,4CAAM;;;MAMN,gDAAU;;;MAKV,kDAAY;;;MAKZ,+CAAS;;;MAMT,8CAAQ;;;MAMR,6CAAO;;;MAKP,yCAAG;;;MAMH,4CAAM;;;MAMN,0CAAI;;;MAMJ,0CAAI;;;MAMJ,2CAAK;;;MAML,4CAAM;;;MAKN,gDAAU;;;MAKV,6CAAO;;;MAMP,2CAAK;;;MAML,yCAAG;;;MAMH,+CAAS;;;MAMT,+CAAS;;;MAMT,2CAAK;;;MAML,mDAAa;;;MAMb,qDAAe;;;MAMf,mDAAa;;;MAMb,6CAAO;;;MAMP,+CAAS;;;MAKT,0CAAI;;;MAMJ,iDAAW;;;MAMX,4CAAM;;;MAMN,kDAAY;;;MAMZ,6CAAO;;;MAMP,4CAAM;;;MAKN,gDAAU;;;MAKV,0CAAI;;;MAMJ,+CAAS;;;MAMT,mDAAa;;;MAMb,+CAAS;;;MAMT,0CAAI;;;MAKJ,4CAAM;;;MAMN,4CAAM;;;MAMN,iDAAW;;;MAKX,4CAAM;;;MAMN,4CAAM;;;MAMN,4CAAM;;;MAMN,4CAAM;;;MAMN,kDAAY;;;MAMZ,oDAAc;;;MAMd,iDAAW;;;MAMX,gDAAU;;;MAKV,iDAAW;;;MAMX,8CAAQ;;;MAMR,8CAAQ;;;MAKR,4CAAM;;;MAMN,4CAAM;;;MAKN,kDAAY;;;MAMZ,4CAAM;;;MAMN,2CAAK;;;MAML,8CAAQ;;;MAMR,oDAAc;;;MAMd,sDAAgB;;;MAMhB,iDAAW;;;MAMX,gDAAU;;;MAMV,+CAAS;;;MAMT,iDAAW;;;MAMX,0CAAI;;;MAMJ,kDAAY;;;MAKZ,kDAAY;;;MAMZ,gDAAU;;;MAKV,6CAAO;;;MAMP,iDAAW;;;MAMX,oDAAc;;;MAMd,kDAAY;;;MAKZ,8CAAQ;;;MAMR,4CAAM;;;MAMN,gDAAU;;;MAMV,0CAAI;;;MAMJ,+CAAS;;;MAMT,kDAAY;;;MAMZ,gDAAU;;;MAMV,4CAAM;;;MAMN,+CAAS;;;MAMT,6CAAO;;;MAKP,iDAAW;;;MAMX,0CAAI;;;MAKJ,6CAAO;;;MAMP,6CAAO;;;MAKP,0CAAI;;;MAMJ,6CAAO;;;MAMP,4CAAM;;;MAMN,4CAAM;;;MAMN,kDAAY;;;MAMZ,2CAAK;;;MAML,qDAAe;;;MAKf,8CAAQ;;;MAKR,2CAAK;;;MAML,2CAAK;;;MAML,+CAAS;;;MAMT,2CAAK;;;MAML,4CAAM;;;MAMN,8CAAQ;;;MAKR,gDAAU;;;MAMV,gDAAU;;;MAMV,2CAAK;;;MAML,oDAAc;;;MAMd,+CAAS;;;MAMT,oDAAc;;;MAMd,+CAAS;;;MAMT,0CAAI;;;MAMJ,6CAAO;;;MAMP,gDAAU;;;MAMV,yCAAG;;;MAKH,8CAAQ;;;MAKR,mDAAa;;;MAKb,oDAAc;;;MAMd,kDAAY;;;MAMZ,oDAAc;;;MAMd,+CAAS;;;MAMT,6CAAO;;;MAMP,8CAAQ;;;MAMR,0CAAI;;;MAMJ,2CAAK;;;MAML,gDAAU;;;MAMV,0CAAI;;;MAMJ,mDAAa;;;MAMb,sDAAgB;;;MAMhB,iDAAW;;;MAMX,oDAAc;;;MAMd,oDAAc;;;MAMd,uDAAiB;;;MAMjB,kDAAY;;;MAMZ,qDAAe;;;MAMf,8CAAQ;;;MAMR,qDAAe;;;MAMf,wDAAkB;;;MAMlB,mDAAa;;;MAMb,sDAAgB;;;MAMhB,4CAAM;;;MAKN,gDAAU;;;MAKV,gDAAU;;;MAMV,yCAAG;;;MAMH,kDAAY;;;MAKZ,6CAAO;;;MAKP,iDAAW;;;MAMX,gDAAU;;;MAMV,4CAAM;;;MAMN,6CAAO;;;MAMP,6CAAO;;;MAKP,6CAAO;;;MAMP,8CAAQ;;;MAMR,iDAAW;;;MAMX,4CAAM;;;MAMN,gDAAU;;;MAMV,mDAAa;;;MAKb,iDAAW;;;MAKX,mDAAa;;;MAKb,mDAAa;;;MAKb,+CAAS;;;MAMT,2CAAK;;;MAML,+CAAS;;;MAMT,0CAAI;;;MAMJ,qDAAe;;;MAMf,mDAAa;;;MAMb,8CAAQ;;;MAMR,iDAAW;;;MAMX,iDAAW;;;MAMX,gDAAU;;;MAKV,gDAAU;;;MAKV,2CAAK;;;MAKL,iDAAW;;;MAKX,iDAAW;;;MAMX,kDAAY;;;MAMZ,iDAAW;;;MAMX,iDAAW;;;MAKX,iDAAW;;;MAMX,qDAAe;;;MAMf,gDAAU;;;MAMV,0CAAI;;;MAMJ,qDAAe;;;MAMf,gDAAU;;;MAMV,+CAAS;;;MAMT,iDAAW;;;MAMX,2CAAK;;;MAML,8CAAQ;;;MAMR,mDAAa;;;MAMb,gDAAU;;;MAKV,4CAAM;;;MAMN,4CAAM;;;MAMN,gDAAU;;;MAMV,mDAAa;;;MAKb,4CAAM;;;MAKN,6CAAO;;;MAMP,iDAAW;;;MAKX,kDAAY;;;MAKZ,iDAAW;;;MAKX,uDAAiB;;;MAMjB,+CAAS;;;MAMT,4CAAM;;;MAMN,8CAAQ;;;MAMR,qDAAe;;;MAMf,8CAAQ;;;MAMR,yCAAG;;;MAKH,iDAAW;;;MAMX,iDAAW;;;MAKX,4CAAM;;;MAMN,mDAAa;;;MAMb,8CAAQ;;;MAMR,0CAAI;;;MAMJ,gDAAU;;;MAKV,2CAAK;;;MAML,6CAAO;;;MAMP,kDAAY;;;MAKZ,6CAAO;;;MAMP,+CAAS;;;MAMT,0CAAI;;;MAMJ,6CAAO;;;MAMP,6CAAO;;;MAMP,2CAAK;;;MAML,iDAAW;;;MAMX,4CAAM;;;MAMN,+CAAS;;;MAMT,6CAAO;;;MAMP,mDAAa;;;MAMb,yCAAG;;;MAMH,0CAAI;;;MAMJ,0CAAI;;;MAMJ,2CAAK;;;MAML,0CAAI;;;MAKJ,+CAAS;;;MAMT,2CAAK;;;MAML,+CAAS;;;MAKT,8CAAQ;;;MAKR,mDAAa;;;MAMb,qDAAe;;;MAMf,oDAAc;;;MAKd,kDAAY;;;MAMZ,2CAAK;;;MAML,8CAAQ;;;MAMR,gDAAU;;;MAMV,+CAAS;;;MAMT,wCAAE;;;MAMF,6CAAO;;;MAMP,4CAAM;;;MAKN,gDAAU;;;MAMV,kDAAY;;;MAKZ,6CAAO;;;MAKP,+CAAS;;;MAMT,iDAAW;;;MAMX,sDAAgB;;;MAMhB,qDAAe;;;MAMf,qDAAe;;;MAMf,wDAAkB;;;MAMlB,8DAAwB;;;MAKxB,gDAAU;;;MAMV,qDAAe;;;MAMf,gDAAU;;;MAMV,mDAAa;;;MAMb,8CAAQ;;;MAMR,+CAAS;;;MAMT,+CAAS;;;MAKT,4CAAM;;;MAMN,2CAAK;;;MAML,sDAAgB;;;MAMhB,iDAAW;;;MAMX,0CAAI;;;MAMJ,+CAAS;;;MAMT,gDAAU;;;MAMV,2CAAK;;;MAML,+CAAS;;;MAMT,8CAAQ;;;MAMR,4CAAM;;;MAMN,iDAAW;;;MAMX,sDAAgB;;;MAMhB,6CAAO;;;MAMP,2CAAK;;;MAML,2CAAK;;;MAML,2CAAK;;;MAML,+CAAS;;;MAMT,6CAAO;;;MAKP,qDAAe;;;MAMf,+CAAS;;;MAMT,kDAAY;;;MAMZ,6CAAO;;;MAMP,2CAAK;;;MAML,0CAAI;;;MAMJ,iDAAW;;;MAMX,oDAAc;;;MAMd,2CAAK;;;MAML,mDAAa;;;MAMb,8CAAQ;;;MAMR,kDAAY;;;MAMZ,qDAAe;;;MAMf,0CAAI;;;MAMJ,4CAAM;;;MAMN,4CAAM;;;MAMN,2CAAK;;;MAML,kDAAY;;;MAMZ,kDAAY;;;MAMZ,iDAAW;;;MAMX,iDAAW;;;MAMX,4CAAM;;;MAMN,yCAAG;;;MAKH,4CAAM;;;MAKN,kDAAY;;;MAMZ,wCAAE;;;MAKF,4CAAM;;;MAMN,6CAAO;;;MAMP,mDAAa;;;MAKb,2CAAK;;;MAKL,0CAAI;;;MAMJ,4CAAM;;;MAKN,2CAAK;;;MAKL,6CAAO;;;MAMP,8CAAQ;;;MAMR,mDAAa;;;MAKb,+CAAS;;;MAMT,+CAAS;;;MAMT,0CAAI;;;MAMJ,6CAAO;;;MAKP,iDAAW;;;MAKX,2CAAK;;;MAML,qDAAe;;;MAMf,gDAAU;;;MAMV,4CAAM;;;MAMN,4CAAM;;;MAMN,+CAAS;;;MAKT,8CAAQ;;;MAKR,6CAAO;;;MAMP,4CAAM;;;MAMN,yCAAG;;;MAKH,yCAAG;;;MAMH,+CAAS;;;MAMT,0CAAI;;;MAMJ,6CAAO;;;MAMP,kDAAY;;;MAMZ,mDAAa;;;MAMb,+CAAS;;;MAMT,qDAAe;;;MAMf,gDAAU;;;MAMV,+CAAS;;;MAMT,6CAAO;;;MAMP,8CAAQ;;;MAMR,iDAAW;;;MAMX,kDAAY;;;MAMZ,iDAAW;;;MAMX,8CAAQ;;;MAMR,4CAAM;;;MAMN,+CAAS;;;MAMT,+CAAS;;;MAMT,+CAAS;;;MAMT,8CAAQ;;;MAMR,gDAAU;;;MAMV,gDAAU;;;MAMV,+CAAS;;;MAMT,6CAAO;;;MAMP,6CAAO;;;MAMP,+CAAS;;;MAMT,2CAAK;;;MAML,8CAAQ;;;MAMR,gDAAU;;;MAMV,0CAAI;;;MAKJ,8CAAQ;;;MAMR,kDAAY;;;MAMZ,8CAAQ;;;MAKR,4CAAM;;;MAMN,kDAAY;;;MAMZ,2CAAK;;;MAML,iDAAW;;;MAMX,+CAAS;;;MAMT,0CAAI;;;MAMJ,iDAAW;;;MAKX,6CAAO;;;MAKP,4CAAM;;;MAKN,kDAAY;;;MAMZ,0CAAI;;;MAMJ,2CAAK;;;MAKL,2CAAK;;;MAML,2CAAK;;;MAML,gDAAU;;;MAMV,4CAAM;;;MAKN,2CAAK;;;MAKL,iDAAW;;;MAMX,4CAAM;;;MAKN,0CAAI;;;MAMJ,2CAAK;;;MAML,gDAAU;;;MAMV,6CAAO;;;MAKP,wCAAE;;;MAKF,yCAAG;;;MAMH,+CAAS;;;MAMT,oDAAc;;;MAMd,gDAAU;;;MAMV,gDAAU;;;MAMV,+CAAS;;;MAMT,8CAAQ;;;MAMR,6CAAO;;;MAMP,iDAAW;;;MAKX,2CAAK;;;MAML,6CAAO;;;MAMP,4CAAM;;;MAMN,+CAAS;;;MAKT,wDAAkB;;;MAMlB,2CAAK;;;MAML,gDAAU;;;MAKV,0CAAI;;;MAKJ,4CAAM;;;MAKN,2CAAK;;;MAML,4CAAM;;;MAMN,mDAAa;;;MAKb,4CAAM;;;MAKN,8CAAQ;;;MAKR,oDAAc;;;MAMd,gDAAU;;;MAKV,2CAAK;;;MAML,0CAAI;;;MAKJ,gDAAU;;;MAMV,0CAAI;;;MAMJ,sDAAgB;;;MAMhB,iDAAW;;;MAMX,yDAAmB;;;MAMnB,oDAAc;;;MAMd,yDAAmB;;;MAMnB,oDAAc;;;MAMd,wDAAkB;;;MAMlB,mDAAa;;;MAMb,6CAAO;;;MAMP,gDAAU;;;MAMV,+CAAS;;;MAMT,kDAAY;;;MAKZ,yCAAG;;;MAMH,uDAAiB;;;MAKjB,0CAAI;;;MAKJ,uDAAiB;;;MAMjB,6CAAO;;;MAKP,+CAAS;;;MAKT,qDAAe;;;MAKf,gDAAU;;;MAKV,gDAAU;;;MAKV,6CAAO;;;MAMP,6CAAO;;;MAMP,4CAAM;;;MAMN,0CAAI;;;MAKJ,0CAAI;;;MAKJ,0CAAI;;;MAKJ,gDAAU;;;MAKV,iDAAW;;;MAKX,2CAAK;;;MAKL,4CAAM;;;MAKN,4CAAM;;;MAKN,yDAAmB;;;MAKnB,0CAAI;;;MAKJ,0CAAI;;;MAMJ,6CAAO;;;MAMP,6CAAO;;;MAKP,2CAAK;;;MAML,6CAAO;;;MAKP,mDAAa;;;MAKb,2CAAK","file":"../../../../../../../../../../../packages/font_awesome_flutter/src/fa_icon.dart.lib.js"}');
  // Exports:
  return {
    src__fa_icon: fa_icon,
    font_awesome_flutter: font_awesome_flutter
  };
}));

//# sourceMappingURL=fa_icon.dart.lib.js.map
