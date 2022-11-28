define(['dart_sdk', 'packages/flex_color_scheme/src/flex_theme_data_extensions.dart', 'packages/flutter/src/material/typography.dart', 'packages/flex_seed_scheme/src/flex_seed_scheme.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flex_color_scheme/src/flex_scheme.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__my_ticket_care__reusable__app_theme_dart(dart_sdk, packages__flex_color_scheme__src__flex_theme_data_extensions$46dart, packages__flutter__src__material__typography$46dart, packages__flex_seed_scheme__src__flex_seed_scheme$46dart, packages__flutter__src__material__icon_button$46dart, packages__flex_color_scheme__src__flex_scheme$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__material__elevated_button$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flex_theme_data_extensions = packages__flex_color_scheme__src__flex_theme_data_extensions$46dart.src__flex_theme_data_extensions;
  const typography = packages__flutter__src__material__typography$46dart.src__material__typography;
  const text_theme = packages__flutter__src__material__typography$46dart.src__material__text_theme;
  const flex_seed_scheme = packages__flex_seed_scheme__src__flex_seed_scheme$46dart.src__flex_seed_scheme;
  const elevated_button_theme = packages__flutter__src__material__icon_button$46dart.src__material__elevated_button_theme;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const button_style = packages__flutter__src__material__icon_button$46dart.src__material__button_style;
  const flex_scheme = packages__flex_color_scheme__src__flex_scheme$46dart.src__flex_scheme;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var app_theme = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: app_theme.ThemeType.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: app_theme.ThemeType.prototype,
        [_Enum__name]: "dark",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], app_theme.ThemeType);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280395985.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279454039.0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[8] || CT.C8,
        [TextStyle_inherit]: true
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[8] || CT.C8,
        [TextStyle_inherit]: true
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3707764736.0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[11] || CT.C11,
        [TextStyle_inherit]: true
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2315255808.0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[11] || CT.C11,
        [TextStyle_inherit]: true
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[11] || CT.C11,
        [TextStyle_inherit]: true
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[8] || CT.C8,
        [TextStyle_inherit]: true
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[11] || CT.C11,
        [TextStyle_inherit]: true
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[11] || CT.C11,
        [TextStyle_inherit]: true
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[11] || CT.C11,
        [TextStyle_inherit]: true
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[6] || CT.C6,
        [TextTheme_labelMedium]: C[9] || CT.C9,
        [TextTheme_labelLarge]: C[10] || CT.C10,
        [TextTheme_bodySmall]: C[12] || CT.C12,
        [TextTheme_bodyMedium]: C[14] || CT.C14,
        [TextTheme_bodyLarge]: C[15] || CT.C15,
        [TextTheme_titleSmall]: C[16] || CT.C16,
        [TextTheme_titleMedium]: C[17] || CT.C17,
        [TextTheme_titleLarge]: C[18] || CT.C18,
        [TextTheme_headlineSmall]: C[19] || CT.C19,
        [TextTheme_headlineMedium]: C[20] || CT.C20,
        [TextTheme_headlineLarge]: C[21] || CT.C21,
        [TextTheme_displaySmall]: C[22] || CT.C22,
        [TextTheme_displayMedium]: C[23] || CT.C23,
        [TextTheme_displayLarge]: C[24] || CT.C24
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3019898879.0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[31] || CT.C31,
        [TextStyle_inherit]: true
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[27] || CT.C27,
        [TextStyle_inherit]: true
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[31] || CT.C31,
        [TextStyle_inherit]: true
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[31] || CT.C31,
        [TextStyle_inherit]: true
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[31] || CT.C31,
        [TextStyle_inherit]: true
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[31] || CT.C31,
        [TextStyle_inherit]: true
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[7] || CT.C7,
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
        [TextStyle_fontFamily]: ".SF UI Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[31] || CT.C31,
        [TextStyle_inherit]: true
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[26] || CT.C26,
        [TextTheme_labelMedium]: C[28] || CT.C28,
        [TextTheme_labelLarge]: C[29] || CT.C29,
        [TextTheme_bodySmall]: C[30] || CT.C30,
        [TextTheme_bodyMedium]: C[32] || CT.C32,
        [TextTheme_bodyLarge]: C[33] || CT.C33,
        [TextTheme_titleSmall]: C[34] || CT.C34,
        [TextTheme_titleMedium]: C[35] || CT.C35,
        [TextTheme_titleLarge]: C[36] || CT.C36,
        [TextTheme_headlineSmall]: C[37] || CT.C37,
        [TextTheme_headlineMedium]: C[38] || CT.C38,
        [TextTheme_headlineLarge]: C[39] || CT.C39,
        [TextTheme_displaySmall]: C[40] || CT.C40,
        [TextTheme_displayMedium]: C[41] || CT.C41,
        [TextTheme_displayLarge]: C[42] || CT.C42
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[45] || CT.C45,
        [BorderSide_style]: C[46] || CT.C46,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[8] || CT.C8
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[48] || CT.C48,
        [BorderRadius_bottomLeft]: C[48] || CT.C48,
        [BorderRadius_topRight]: C[48] || CT.C48,
        [BorderRadius_topLeft]: C[48] || CT.C48
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[44] || CT.C44,
        [RoundedRectangleBorder_borderRadius]: C[47] || CT.C47
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 15
      });
    }
  }, false);
  var C = Array(50).fill(void 0);
  var I = ["package:my_ticket_care/reusable/app_theme.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  app_theme.ThemeType = class ThemeType extends core._Enum {
    toString() {
      return "ThemeType." + this[_name];
    }
  };
  (app_theme.ThemeType.new = function(index, name) {
    app_theme.ThemeType.__proto__.new.call(this, index, name);
    ;
  }).prototype = app_theme.ThemeType.prototype;
  dart.addTypeTests(app_theme.ThemeType);
  dart.addTypeCaches(app_theme.ThemeType);
  dart.setLibraryUri(app_theme.ThemeType, I[0]);
  dart.setStaticFieldSignature(app_theme.ThemeType, () => ['values', 'light', 'dark']);
  dart.defineExtensionMethods(app_theme.ThemeType, ['toString']);
  dart.defineLazy(app_theme.ThemeType, {
    /*app_theme.ThemeType.values*/get values() {
      return C[0] || CT.C0;
    },
    /*app_theme.ThemeType.light*/get light() {
      return C[1] || CT.C1;
    },
    /*app_theme.ThemeType.dark*/get dark() {
      return C[2] || CT.C2;
    }
  }, false);
  var __AppTheme__currentTheme = dart.privateName(app_theme, "_#AppTheme#_currentTheme");
  var _currentTheme = dart.privateName(app_theme, "_currentTheme");
  var _lightThemeData = dart.privateName(app_theme, "_lightThemeData");
  var _darkThemeData = dart.privateName(app_theme, "_darkThemeData");
  var Color_value = dart.privateName(ui, "Color.value");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextDecoration__mask = dart.privateName(ui, "TextDecoration._mask");
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
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var TextTheme_labelSmall = dart.privateName(text_theme, "TextTheme.labelSmall");
  var TextTheme_labelMedium = dart.privateName(text_theme, "TextTheme.labelMedium");
  var TextTheme_labelLarge = dart.privateName(text_theme, "TextTheme.labelLarge");
  var TextTheme_bodySmall = dart.privateName(text_theme, "TextTheme.bodySmall");
  var TextTheme_bodyMedium = dart.privateName(text_theme, "TextTheme.bodyMedium");
  var TextTheme_bodyLarge = dart.privateName(text_theme, "TextTheme.bodyLarge");
  var TextTheme_titleSmall = dart.privateName(text_theme, "TextTheme.titleSmall");
  var TextTheme_titleMedium = dart.privateName(text_theme, "TextTheme.titleMedium");
  var TextTheme_titleLarge = dart.privateName(text_theme, "TextTheme.titleLarge");
  var TextTheme_headlineSmall = dart.privateName(text_theme, "TextTheme.headlineSmall");
  var TextTheme_headlineMedium = dart.privateName(text_theme, "TextTheme.headlineMedium");
  var TextTheme_headlineLarge = dart.privateName(text_theme, "TextTheme.headlineLarge");
  var TextTheme_displaySmall = dart.privateName(text_theme, "TextTheme.displaySmall");
  var TextTheme_displayMedium = dart.privateName(text_theme, "TextTheme.displayMedium");
  var TextTheme_displayLarge = dart.privateName(text_theme, "TextTheme.displayLarge");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  app_theme.AppTheme = class AppTheme extends core.Object {
    get [_currentTheme]() {
      let t2;
      t2 = this[__AppTheme__currentTheme];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_currentTheme")) : t2;
    }
    set [_currentTheme](library$32package$58my_ticket_care$47reusable$47app_theme$46dart$58$58_currentTheme$35param) {
      this[__AppTheme__currentTheme] = library$32package$58my_ticket_care$47reusable$47app_theme$46dart$58$58_currentTheme$35param;
    }
    get currentTheme() {
      return this[_currentTheme];
    }
    static ['_#new#tearOff'](opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      return new app_theme.AppTheme.new({type: type});
    }
    [_lightThemeData]() {
      return flex_theme_data_extensions['FlexThemeData|light']({textTheme: typography.Typography.englishLike2018, colorScheme: flex_seed_scheme['SeedColorScheme|fromSeeds']({primary: app_theme.AppTheme.primaryColor, primaryKey: app_theme.AppTheme.primaryColor})}).copyWith({elevatedButtonTheme: new elevated_button_theme.ElevatedButtonThemeData.new({style: app_theme.AppTheme.buttomStyle})});
    }
    [_darkThemeData]() {
      return flex_theme_data_extensions['FlexThemeData|dark']({scheme: flex_scheme.FlexScheme.aquaBlue}).copyWith({textTheme: typography.Typography.whiteCupertino, elevatedButtonTheme: new elevated_button_theme.ElevatedButtonThemeData.new({style: app_theme.AppTheme.buttomStyle})});
    }
  };
  (app_theme.AppTheme.new = function(opts) {
    let type = opts && 'type' in opts ? opts.type : null;
    this[__AppTheme__currentTheme] = null;
    switch (type) {
      case C[1] || CT.C1:
        {
          this[_currentTheme] = this[_lightThemeData]();
          break;
        }
      case C[2] || CT.C2:
        {
          this[_currentTheme] = this[_darkThemeData]();
          break;
        }
    }
  }).prototype = app_theme.AppTheme.prototype;
  dart.addTypeTests(app_theme.AppTheme);
  dart.addTypeCaches(app_theme.AppTheme);
  dart.setMethodSignature(app_theme.AppTheme, () => ({
    __proto__: dart.getMethods(app_theme.AppTheme.__proto__),
    [_lightThemeData]: dart.fnType(theme_data.ThemeData, []),
    [_darkThemeData]: dart.fnType(theme_data.ThemeData, [])
  }));
  dart.setGetterSignature(app_theme.AppTheme, () => ({
    __proto__: dart.getGetters(app_theme.AppTheme.__proto__),
    [_currentTheme]: theme_data.ThemeData,
    currentTheme: theme_data.ThemeData
  }));
  dart.setSetterSignature(app_theme.AppTheme, () => ({
    __proto__: dart.getSetters(app_theme.AppTheme.__proto__),
    [_currentTheme]: theme_data.ThemeData
  }));
  dart.setLibraryUri(app_theme.AppTheme, I[0]);
  dart.setFieldSignature(app_theme.AppTheme, () => ({
    __proto__: dart.getFields(app_theme.AppTheme.__proto__),
    [__AppTheme__currentTheme]: dart.fieldType(dart.nullable(theme_data.ThemeData))
  }));
  dart.setStaticFieldSignature(app_theme.AppTheme, () => ['primaryColor', 'primaryDarkColor', 'blackText', 'whiteText', 'buttomStyle']);
  dart.defineLazy(app_theme.AppTheme, {
    /*app_theme.AppTheme.primaryColor*/get primaryColor() {
      return C[3] || CT.C3;
    },
    set primaryColor(_) {},
    /*app_theme.AppTheme.primaryDarkColor*/get primaryDarkColor() {
      return C[4] || CT.C4;
    },
    set primaryDarkColor(_) {},
    /*app_theme.AppTheme.blackText*/get blackText() {
      return C[5] || CT.C5;
    },
    /*app_theme.AppTheme.whiteText*/get whiteText() {
      return C[25] || CT.C25;
    },
    /*app_theme.AppTheme.buttomStyle*/get buttomStyle() {
      return elevated_button.ElevatedButton.styleFrom({shape: C[43] || CT.C43, padding: C[49] || CT.C49});
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/reusable/app_theme.dart", {
    "package:my_ticket_care/reusable/app_theme.dart": app_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAG6B;;;;;;;;;;;;MAAxB,0BAAM;;;MAAM,yBAAK;;;MAAE,wBAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAGX;;IAAa;wBAAb;;IAAa;;AAG1B,YAAO;IACT;;;;;;AA6BE,YAAqB,AAMnB,+DALsB,oDACO,wDAClB,6CACG,mEAGO,8DAA+B;IAExD;;AAGE,YAAqB,AAAkC,2DAAV,uDACnB,2DACD,8DAA+B;IAC1D;;;QArC6B;qCAXd;AAYb,YAAQ,IAAI;;;AAEyB,UAAjC,sBAAgB;AAChB;;;;AAEgC,UAAhC,sBAAgB;AAChB;;;EAEN;;;;;;;;;;;;;;;;;;;;;;;;MAba,+BAAY;;;;MAEZ,mCAAgB;;;;MAYhB,4BAAS;;;MACT,4BAAS;;;MAEG,8BAAW;YAAkB","file":"../../../../../../../../../packages/my_ticket_care/reusable/app_theme.dart.lib.js"}');
  // Exports:
  return {
    reusable__app_theme: app_theme
  };
}));

//# sourceMappingURL=app_theme.dart.lib.js.map
