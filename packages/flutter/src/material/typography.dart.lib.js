define(['dart_sdk', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/placeholder_span.dart'], (function load__packages__flutter__src__material__typography_dart(dart_sdk, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__placeholder_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  var typography = Object.create(dart.library);
  var text_theme = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    DiagnosticsPropertyOfTextTheme: () => (T.DiagnosticsPropertyOfTextTheme = dart.constFn(diagnostics.DiagnosticsProperty$(text_theme.TextTheme)))(),
    DiagnosticsPropertyOfTextStyle: () => (T.DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: typography.ScriptCategory.prototype,
        [_Enum__name]: "englishLike",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: typography.ScriptCategory.prototype,
        [_Enum__name]: "dense",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: typography.ScriptCategory.prototype,
        [_Enum__name]: "tall",
        [_Enum_index]: 2
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], typography.ScriptCategory);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
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
        [TextStyle_debugLabel]: "blackMountainView labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3707764736.0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2315255808.0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
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
        [TextStyle_debugLabel]: "blackMountainView bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
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
        [TextStyle_debugLabel]: "blackMountainView bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
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
        [TextStyle_debugLabel]: "blackMountainView titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
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
        [TextStyle_debugLabel]: "blackMountainView titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
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
        [TextStyle_debugLabel]: "blackMountainView titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
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
        [TextStyle_debugLabel]: "blackMountainView headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackMountainView displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
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
        [TextStyle_debugLabel]: "blackMountainView displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
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
        [TextStyle_debugLabel]: "blackMountainView displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[11] || CT.C11,
        [TextTheme_labelMedium]: C[14] || CT.C14,
        [TextTheme_labelLarge]: C[15] || CT.C15,
        [TextTheme_bodySmall]: C[17] || CT.C17,
        [TextTheme_bodyMedium]: C[19] || CT.C19,
        [TextTheme_bodyLarge]: C[20] || CT.C20,
        [TextTheme_titleSmall]: C[21] || CT.C21,
        [TextTheme_titleMedium]: C[22] || CT.C22,
        [TextTheme_titleLarge]: C[23] || CT.C23,
        [TextTheme_headlineSmall]: C[24] || CT.C24,
        [TextTheme_headlineMedium]: C[25] || CT.C25,
        [TextTheme_headlineLarge]: C[26] || CT.C26,
        [TextTheme_displaySmall]: C[27] || CT.C27,
        [TextTheme_displayMedium]: C[28] || CT.C28,
        [TextTheme_displayLarge]: C[29] || CT.C29
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
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
        [TextStyle_debugLabel]: "whiteMountainView labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
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
        [TextStyle_debugLabel]: "whiteMountainView labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3019898879.0
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
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
        [TextStyle_debugLabel]: "whiteMountainView bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
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
        [TextStyle_debugLabel]: "whiteMountainView bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
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
        [TextStyle_debugLabel]: "whiteMountainView titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
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
        [TextStyle_debugLabel]: "whiteMountainView titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
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
        [TextStyle_debugLabel]: "whiteMountainView titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
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
        [TextStyle_debugLabel]: "whiteMountainView headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteMountainView displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[31] || CT.C31,
        [TextTheme_labelMedium]: C[33] || CT.C33,
        [TextTheme_labelLarge]: C[34] || CT.C34,
        [TextTheme_bodySmall]: C[35] || CT.C35,
        [TextTheme_bodyMedium]: C[37] || CT.C37,
        [TextTheme_bodyLarge]: C[38] || CT.C38,
        [TextTheme_titleSmall]: C[39] || CT.C39,
        [TextTheme_titleMedium]: C[40] || CT.C40,
        [TextTheme_titleLarge]: C[41] || CT.C41,
        [TextTheme_headlineSmall]: C[42] || CT.C42,
        [TextTheme_headlineMedium]: C[43] || CT.C43,
        [TextTheme_headlineLarge]: C[44] || CT.C44,
        [TextTheme_displaySmall]: C[45] || CT.C45,
        [TextTheme_displayMedium]: C[46] || CT.C46,
        [TextTheme_displayLarge]: C[47] || CT.C47
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedmond displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[49] || CT.C49,
        [TextTheme_labelMedium]: C[50] || CT.C50,
        [TextTheme_labelLarge]: C[51] || CT.C51,
        [TextTheme_bodySmall]: C[52] || CT.C52,
        [TextTheme_bodyMedium]: C[53] || CT.C53,
        [TextTheme_bodyLarge]: C[54] || CT.C54,
        [TextTheme_titleSmall]: C[55] || CT.C55,
        [TextTheme_titleMedium]: C[56] || CT.C56,
        [TextTheme_titleLarge]: C[57] || CT.C57,
        [TextTheme_headlineSmall]: C[58] || CT.C58,
        [TextTheme_headlineMedium]: C[59] || CT.C59,
        [TextTheme_headlineLarge]: C[60] || CT.C60,
        [TextTheme_displaySmall]: C[61] || CT.C61,
        [TextTheme_displayMedium]: C[62] || CT.C62,
        [TextTheme_displayLarge]: C[63] || CT.C63
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedmond displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: "Segoe UI",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[65] || CT.C65,
        [TextTheme_labelMedium]: C[66] || CT.C66,
        [TextTheme_labelLarge]: C[67] || CT.C67,
        [TextTheme_bodySmall]: C[68] || CT.C68,
        [TextTheme_bodyMedium]: C[69] || CT.C69,
        [TextTheme_bodyLarge]: C[70] || CT.C70,
        [TextTheme_titleSmall]: C[71] || CT.C71,
        [TextTheme_titleMedium]: C[72] || CT.C72,
        [TextTheme_titleLarge]: C[73] || CT.C73,
        [TextTheme_headlineSmall]: C[74] || CT.C74,
        [TextTheme_headlineMedium]: C[75] || CT.C75,
        [TextTheme_headlineLarge]: C[76] || CT.C76,
        [TextTheme_displaySmall]: C[77] || CT.C77,
        [TextTheme_displayMedium]: C[78] || CT.C78,
        [TextTheme_displayLarge]: C[79] || CT.C79
      });
    },
    get C80() {
      return C[80] = dart.constList(["Ubuntu", "Cantarell", "DejaVu Sans", "Liberation Sans", "Arial"], core.String);
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackHelsinki displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[82] || CT.C82,
        [TextTheme_labelMedium]: C[83] || CT.C83,
        [TextTheme_labelLarge]: C[84] || CT.C84,
        [TextTheme_bodySmall]: C[85] || CT.C85,
        [TextTheme_bodyMedium]: C[86] || CT.C86,
        [TextTheme_bodyLarge]: C[87] || CT.C87,
        [TextTheme_titleSmall]: C[88] || CT.C88,
        [TextTheme_titleMedium]: C[89] || CT.C89,
        [TextTheme_titleLarge]: C[90] || CT.C90,
        [TextTheme_headlineSmall]: C[91] || CT.C91,
        [TextTheme_headlineMedium]: C[92] || CT.C92,
        [TextTheme_headlineLarge]: C[93] || CT.C93,
        [TextTheme_displaySmall]: C[94] || CT.C94,
        [TextTheme_displayMedium]: C[95] || CT.C95,
        [TextTheme_displayLarge]: C[96] || CT.C96
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C111() {
      return C[111] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C112() {
      return C[112] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteHelsinki displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle__fontFamilyFallback]: C[80] || CT.C80,
        [TextStyle_fontFamily]: "Roboto",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[98] || CT.C98,
        [TextTheme_labelMedium]: C[99] || CT.C99,
        [TextTheme_labelLarge]: C[100] || CT.C100,
        [TextTheme_bodySmall]: C[101] || CT.C101,
        [TextTheme_bodyMedium]: C[102] || CT.C102,
        [TextTheme_bodyLarge]: C[103] || CT.C103,
        [TextTheme_titleSmall]: C[104] || CT.C104,
        [TextTheme_titleMedium]: C[105] || CT.C105,
        [TextTheme_titleLarge]: C[106] || CT.C106,
        [TextTheme_headlineSmall]: C[107] || CT.C107,
        [TextTheme_headlineMedium]: C[108] || CT.C108,
        [TextTheme_headlineLarge]: C[109] || CT.C109,
        [TextTheme_displaySmall]: C[110] || CT.C110,
        [TextTheme_displayMedium]: C[111] || CT.C111,
        [TextTheme_displayLarge]: C[112] || CT.C112
      });
    },
    get C114() {
      return C[114] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
    get C115() {
      return C[115] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
    get C116() {
      return C[116] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C117() {
      return C[117] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C118() {
      return C[118] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C119() {
      return C[119] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C120() {
      return C[120] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
    get C121() {
      return C[121] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C122() {
      return C[122] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C123() {
      return C[123] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C124() {
      return C[124] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C125() {
      return C[125] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C126() {
      return C[126] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C127() {
      return C[127] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C128() {
      return C[128] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackCupertino displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C113() {
      return C[113] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[114] || CT.C114,
        [TextTheme_labelMedium]: C[115] || CT.C115,
        [TextTheme_labelLarge]: C[116] || CT.C116,
        [TextTheme_bodySmall]: C[117] || CT.C117,
        [TextTheme_bodyMedium]: C[118] || CT.C118,
        [TextTheme_bodyLarge]: C[119] || CT.C119,
        [TextTheme_titleSmall]: C[120] || CT.C120,
        [TextTheme_titleMedium]: C[121] || CT.C121,
        [TextTheme_titleLarge]: C[122] || CT.C122,
        [TextTheme_headlineSmall]: C[123] || CT.C123,
        [TextTheme_headlineMedium]: C[124] || CT.C124,
        [TextTheme_headlineLarge]: C[125] || CT.C125,
        [TextTheme_displaySmall]: C[126] || CT.C126,
        [TextTheme_displayMedium]: C[127] || CT.C127,
        [TextTheme_displayLarge]: C[128] || CT.C128
      });
    },
    get C130() {
      return C[130] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C131() {
      return C[131] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C132() {
      return C[132] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C133() {
      return C[133] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C134() {
      return C[134] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C135() {
      return C[135] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C136() {
      return C[136] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C137() {
      return C[137] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C138() {
      return C[138] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C139() {
      return C[139] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C140() {
      return C[140] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C141() {
      return C[141] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C142() {
      return C[142] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C143() {
      return C[143] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C144() {
      return C[144] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteCupertino displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C129() {
      return C[129] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[130] || CT.C130,
        [TextTheme_labelMedium]: C[131] || CT.C131,
        [TextTheme_labelLarge]: C[132] || CT.C132,
        [TextTheme_bodySmall]: C[133] || CT.C133,
        [TextTheme_bodyMedium]: C[134] || CT.C134,
        [TextTheme_bodyLarge]: C[135] || CT.C135,
        [TextTheme_titleSmall]: C[136] || CT.C136,
        [TextTheme_titleMedium]: C[137] || CT.C137,
        [TextTheme_titleLarge]: C[138] || CT.C138,
        [TextTheme_headlineSmall]: C[139] || CT.C139,
        [TextTheme_headlineMedium]: C[140] || CT.C140,
        [TextTheme_headlineLarge]: C[141] || CT.C141,
        [TextTheme_displaySmall]: C[142] || CT.C142,
        [TextTheme_displayMedium]: C[143] || CT.C143,
        [TextTheme_displayLarge]: C[144] || CT.C144
      });
    },
    get C146() {
      return C[146] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C147() {
      return C[147] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C148() {
      return C[148] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C149() {
      return C[149] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C150() {
      return C[150] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C151() {
      return C[151] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C152() {
      return C[152] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C153() {
      return C[153] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C154() {
      return C[154] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C155() {
      return C[155] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[16] || CT.C16,
        [TextStyle_inherit]: true
      });
    },
    get C156() {
      return C[156] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C157() {
      return C[157] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C158() {
      return C[158] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C159() {
      return C[159] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C160() {
      return C[160] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "blackRedwoodCity displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[18] || CT.C18,
        [TextStyle_inherit]: true
      });
    },
    get C145() {
      return C[145] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[146] || CT.C146,
        [TextTheme_labelMedium]: C[147] || CT.C147,
        [TextTheme_labelLarge]: C[148] || CT.C148,
        [TextTheme_bodySmall]: C[149] || CT.C149,
        [TextTheme_bodyMedium]: C[150] || CT.C150,
        [TextTheme_bodyLarge]: C[151] || CT.C151,
        [TextTheme_titleSmall]: C[152] || CT.C152,
        [TextTheme_titleMedium]: C[153] || CT.C153,
        [TextTheme_titleLarge]: C[154] || CT.C154,
        [TextTheme_headlineSmall]: C[155] || CT.C155,
        [TextTheme_headlineMedium]: C[156] || CT.C156,
        [TextTheme_headlineLarge]: C[157] || CT.C157,
        [TextTheme_displaySmall]: C[158] || CT.C158,
        [TextTheme_displayMedium]: C[159] || CT.C159,
        [TextTheme_displayLarge]: C[160] || CT.C160
      });
    },
    get C162() {
      return C[162] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity labelSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C163() {
      return C[163] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity labelMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C164() {
      return C[164] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity labelLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C165() {
      return C[165] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity bodySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C166() {
      return C[166] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity bodyMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C167() {
      return C[167] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity bodyLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C168() {
      return C[168] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity titleSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C169() {
      return C[169] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity titleMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C170() {
      return C[170] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity titleLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C171() {
      return C[171] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity headlineSmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[32] || CT.C32,
        [TextStyle_inherit]: true
      });
    },
    get C172() {
      return C[172] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity headlineMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C173() {
      return C[173] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity headlineLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C174() {
      return C[174] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity displaySmall",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C175() {
      return C[175] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity displayMedium",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C176() {
      return C[176] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "whiteRedwoodCity displayLarge",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[12] || CT.C12,
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
        [TextStyle_fontFamily]: ".AppleSystemUIFont",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[36] || CT.C36,
        [TextStyle_inherit]: true
      });
    },
    get C161() {
      return C[161] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[162] || CT.C162,
        [TextTheme_labelMedium]: C[163] || CT.C163,
        [TextTheme_labelLarge]: C[164] || CT.C164,
        [TextTheme_bodySmall]: C[165] || CT.C165,
        [TextTheme_bodyMedium]: C[166] || CT.C166,
        [TextTheme_bodyLarge]: C[167] || CT.C167,
        [TextTheme_titleSmall]: C[168] || CT.C168,
        [TextTheme_titleMedium]: C[169] || CT.C169,
        [TextTheme_titleLarge]: C[170] || CT.C170,
        [TextTheme_headlineSmall]: C[171] || CT.C171,
        [TextTheme_headlineMedium]: C[172] || CT.C172,
        [TextTheme_headlineLarge]: C[173] || CT.C173,
        [TextTheme_displaySmall]: C[174] || CT.C174,
        [TextTheme_displayMedium]: C[175] || CT.C175,
        [TextTheme_displayLarge]: C[176] || CT.C176
      });
    },
    get C179() {
      return C[179] = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_Enum__name]: "alphabetic",
        [_Enum_index]: 0
      });
    },
    get C180() {
      return C[180] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C178() {
      return C[178] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 1.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C181() {
      return C[181] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C183() {
      return C[183] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 4
      });
    },
    get C182() {
      return C[182] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C184() {
      return C[184] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodySmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C185() {
      return C[185] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodyMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C186() {
      return C[186] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodyLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C187() {
      return C[187] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C188() {
      return C[188] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C189() {
      return C[189] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C190() {
      return C[190] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C191() {
      return C[191] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C192() {
      return C[192] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 40,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C193() {
      return C[193] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displaySmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C194() {
      return C[194] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displayMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 56,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C196() {
      return C[196] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 0
      });
    },
    get C195() {
      return C[195] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displayLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[196] || CT.C196,
        [TextStyle_fontSize]: 112,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C177() {
      return C[177] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[178] || CT.C178,
        [TextTheme_labelMedium]: C[181] || CT.C181,
        [TextTheme_labelLarge]: C[182] || CT.C182,
        [TextTheme_bodySmall]: C[184] || CT.C184,
        [TextTheme_bodyMedium]: C[185] || CT.C185,
        [TextTheme_bodyLarge]: C[186] || CT.C186,
        [TextTheme_titleSmall]: C[187] || CT.C187,
        [TextTheme_titleMedium]: C[188] || CT.C188,
        [TextTheme_titleLarge]: C[189] || CT.C189,
        [TextTheme_headlineSmall]: C[190] || CT.C190,
        [TextTheme_headlineMedium]: C[191] || CT.C191,
        [TextTheme_headlineLarge]: C[192] || CT.C192,
        [TextTheme_displaySmall]: C[193] || CT.C193,
        [TextTheme_displayMedium]: C[194] || CT.C194,
        [TextTheme_displayLarge]: C[195] || CT.C195
      });
    },
    get C198() {
      return C[198] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 1.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C199() {
      return C[199] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 1.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C200() {
      return C[200] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 1.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C201() {
      return C[201] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodySmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.4,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C202() {
      return C[202] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodyMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C203() {
      return C[203] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodyLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C204() {
      return C[204] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C205() {
      return C[205] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C206() {
      return C[206] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 20,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C207() {
      return C[207] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C208() {
      return C[208] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C209() {
      return C[209] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 40,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C210() {
      return C[210] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displaySmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C212() {
      return C[212] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 2
      });
    },
    get C211() {
      return C[211] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displayMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[212] || CT.C212,
        [TextStyle_fontSize]: 60,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C213() {
      return C[213] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displayLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -1.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[212] || CT.C212,
        [TextStyle_fontSize]: 96,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C197() {
      return C[197] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[198] || CT.C198,
        [TextTheme_labelMedium]: C[199] || CT.C199,
        [TextTheme_labelLarge]: C[200] || CT.C200,
        [TextTheme_bodySmall]: C[201] || CT.C201,
        [TextTheme_bodyMedium]: C[202] || CT.C202,
        [TextTheme_bodyLarge]: C[203] || CT.C203,
        [TextTheme_titleSmall]: C[204] || CT.C204,
        [TextTheme_titleMedium]: C[205] || CT.C205,
        [TextTheme_titleLarge]: C[206] || CT.C206,
        [TextTheme_headlineSmall]: C[207] || CT.C207,
        [TextTheme_headlineMedium]: C[208] || CT.C208,
        [TextTheme_headlineLarge]: C[209] || CT.C209,
        [TextTheme_displaySmall]: C[210] || CT.C210,
        [TextTheme_displayMedium]: C[211] || CT.C211,
        [TextTheme_displayLarge]: C[213] || CT.C213
      });
    },
    get C216() {
      return C[216] = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_Enum__name]: "ideographic",
        [_Enum_index]: 1
      });
    },
    get C215() {
      return C[215] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C217() {
      return C[217] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C218() {
      return C[218] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C219() {
      return C[219] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodySmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 13,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C220() {
      return C[220] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodyMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C221() {
      return C[221] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodyLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C222() {
      return C[222] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C223() {
      return C[223] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C224() {
      return C[224] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C225() {
      return C[225] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C226() {
      return C[226] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C227() {
      return C[227] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 40,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C228() {
      return C[228] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displaySmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C229() {
      return C[229] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displayMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 56,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C230() {
      return C[230] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displayLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[196] || CT.C196,
        [TextStyle_fontSize]: 112,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C214() {
      return C[214] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[215] || CT.C215,
        [TextTheme_labelMedium]: C[217] || CT.C217,
        [TextTheme_labelLarge]: C[218] || CT.C218,
        [TextTheme_bodySmall]: C[219] || CT.C219,
        [TextTheme_bodyMedium]: C[220] || CT.C220,
        [TextTheme_bodyLarge]: C[221] || CT.C221,
        [TextTheme_titleSmall]: C[222] || CT.C222,
        [TextTheme_titleMedium]: C[223] || CT.C223,
        [TextTheme_titleLarge]: C[224] || CT.C224,
        [TextTheme_headlineSmall]: C[225] || CT.C225,
        [TextTheme_headlineMedium]: C[226] || CT.C226,
        [TextTheme_headlineLarge]: C[227] || CT.C227,
        [TextTheme_displaySmall]: C[228] || CT.C228,
        [TextTheme_displayMedium]: C[229] || CT.C229,
        [TextTheme_displayLarge]: C[230] || CT.C230
      });
    },
    get C232() {
      return C[232] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C233() {
      return C[233] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C234() {
      return C[234] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C235() {
      return C[235] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodySmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 13,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C236() {
      return C[236] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodyMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C237() {
      return C[237] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodyLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C238() {
      return C[238] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C239() {
      return C[239] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C240() {
      return C[240] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C241() {
      return C[241] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C242() {
      return C[242] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C243() {
      return C[243] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 40,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C244() {
      return C[244] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displaySmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C245() {
      return C[245] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displayMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[196] || CT.C196,
        [TextStyle_fontSize]: 60,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C246() {
      return C[246] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displayLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[196] || CT.C196,
        [TextStyle_fontSize]: 96,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C231() {
      return C[231] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[232] || CT.C232,
        [TextTheme_labelMedium]: C[233] || CT.C233,
        [TextTheme_labelLarge]: C[234] || CT.C234,
        [TextTheme_bodySmall]: C[235] || CT.C235,
        [TextTheme_bodyMedium]: C[236] || CT.C236,
        [TextTheme_bodyLarge]: C[237] || CT.C237,
        [TextTheme_titleSmall]: C[238] || CT.C238,
        [TextTheme_titleMedium]: C[239] || CT.C239,
        [TextTheme_titleLarge]: C[240] || CT.C240,
        [TextTheme_headlineSmall]: C[241] || CT.C241,
        [TextTheme_headlineMedium]: C[242] || CT.C242,
        [TextTheme_headlineLarge]: C[243] || CT.C243,
        [TextTheme_displaySmall]: C[244] || CT.C244,
        [TextTheme_displayMedium]: C[245] || CT.C245,
        [TextTheme_displayLarge]: C[246] || CT.C246
      });
    },
    get C248() {
      return C[248] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C249() {
      return C[249] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C251() {
      return C[251] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C250() {
      return C[250] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[251] || CT.C251,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C252() {
      return C[252] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodySmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 13,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C253() {
      return C[253] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodyMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C254() {
      return C[254] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodyLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[251] || CT.C251,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C255() {
      return C[255] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C256() {
      return C[256] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C257() {
      return C[257] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[251] || CT.C251,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C258() {
      return C[258] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineSmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C259() {
      return C[259] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C260() {
      return C[260] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 40,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C261() {
      return C[261] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displaySmall 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C262() {
      return C[262] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displayMedium 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 56,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C263() {
      return C[263] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displayLarge 2014",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 112,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C247() {
      return C[247] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[248] || CT.C248,
        [TextTheme_labelMedium]: C[249] || CT.C249,
        [TextTheme_labelLarge]: C[250] || CT.C250,
        [TextTheme_bodySmall]: C[252] || CT.C252,
        [TextTheme_bodyMedium]: C[253] || CT.C253,
        [TextTheme_bodyLarge]: C[254] || CT.C254,
        [TextTheme_titleSmall]: C[255] || CT.C255,
        [TextTheme_titleMedium]: C[256] || CT.C256,
        [TextTheme_titleLarge]: C[257] || CT.C257,
        [TextTheme_headlineSmall]: C[258] || CT.C258,
        [TextTheme_headlineMedium]: C[259] || CT.C259,
        [TextTheme_headlineLarge]: C[260] || CT.C260,
        [TextTheme_displaySmall]: C[261] || CT.C261,
        [TextTheme_displayMedium]: C[262] || CT.C262,
        [TextTheme_displayLarge]: C[263] || CT.C263
      });
    },
    get C265() {
      return C[265] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C266() {
      return C[266] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C267() {
      return C[267] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[251] || CT.C251,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C268() {
      return C[268] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodySmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 13,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C269() {
      return C[269] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodyMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C270() {
      return C[270] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodyLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[251] || CT.C251,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C271() {
      return C[271] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C272() {
      return C[272] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C273() {
      return C[273] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[251] || CT.C251,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C274() {
      return C[274] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineSmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C275() {
      return C[275] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C276() {
      return C[276] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 40,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C277() {
      return C[277] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displaySmall 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C278() {
      return C[278] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displayMedium 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 60,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C279() {
      return C[279] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displayLarge 2018",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 96,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C264() {
      return C[264] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[265] || CT.C265,
        [TextTheme_labelMedium]: C[266] || CT.C266,
        [TextTheme_labelLarge]: C[267] || CT.C267,
        [TextTheme_bodySmall]: C[268] || CT.C268,
        [TextTheme_bodyMedium]: C[269] || CT.C269,
        [TextTheme_bodyLarge]: C[270] || CT.C270,
        [TextTheme_titleSmall]: C[271] || CT.C271,
        [TextTheme_titleMedium]: C[272] || CT.C272,
        [TextTheme_titleLarge]: C[273] || CT.C273,
        [TextTheme_headlineSmall]: C[274] || CT.C274,
        [TextTheme_headlineMedium]: C[275] || CT.C275,
        [TextTheme_headlineLarge]: C[276] || CT.C276,
        [TextTheme_displaySmall]: C[277] || CT.C277,
        [TextTheme_displayMedium]: C[278] || CT.C278,
        [TextTheme_displayLarge]: C[279] || CT.C279
      });
    },
    get C282() {
      return C[282] = dart.const({
        __proto__: ui.TextLeadingDistribution.prototype,
        [_Enum__name]: "even",
        [_Enum_index]: 1
      });
    },
    get C281() {
      return C[281] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.45,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C283() {
      return C[283] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C284() {
      return C[284] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike labelLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C285() {
      return C[285] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodySmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.4,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C286() {
      return C[286] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodyMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C287() {
      return C[287] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike bodyLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.5,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C288() {
      return C[288] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C289() {
      return C[289] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.5,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C290() {
      return C[290] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike titleLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.27,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 22,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C291() {
      return C[291] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C292() {
      return C[292] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.29,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 28,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C293() {
      return C[293] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike headlineLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.25,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 32,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C294() {
      return C[294] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displaySmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.22,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 36,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C295() {
      return C[295] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displayMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.16,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C296() {
      return C[296] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "englishLike displayLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.12,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 57,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C280() {
      return C[280] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[281] || CT.C281,
        [TextTheme_labelMedium]: C[283] || CT.C283,
        [TextTheme_labelLarge]: C[284] || CT.C284,
        [TextTheme_bodySmall]: C[285] || CT.C285,
        [TextTheme_bodyMedium]: C[286] || CT.C286,
        [TextTheme_bodyLarge]: C[287] || CT.C287,
        [TextTheme_titleSmall]: C[288] || CT.C288,
        [TextTheme_titleMedium]: C[289] || CT.C289,
        [TextTheme_titleLarge]: C[290] || CT.C290,
        [TextTheme_headlineSmall]: C[291] || CT.C291,
        [TextTheme_headlineMedium]: C[292] || CT.C292,
        [TextTheme_headlineLarge]: C[293] || CT.C293,
        [TextTheme_displaySmall]: C[294] || CT.C294,
        [TextTheme_displayMedium]: C[295] || CT.C295,
        [TextTheme_displayLarge]: C[296] || CT.C296
      });
    },
    get C298() {
      return C[298] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.45,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C299() {
      return C[299] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C300() {
      return C[300] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense labelLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C301() {
      return C[301] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodySmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.4,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C302() {
      return C[302] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodyMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C303() {
      return C[303] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense bodyLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.5,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C304() {
      return C[304] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C305() {
      return C[305] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.5,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C306() {
      return C[306] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense titleLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.27,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 22,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C307() {
      return C[307] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C308() {
      return C[308] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.29,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 28,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C309() {
      return C[309] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense headlineLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.25,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 32,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C310() {
      return C[310] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displaySmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.22,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 36,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C311() {
      return C[311] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displayMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.16,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C312() {
      return C[312] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "dense displayLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.12,
        [TextStyle_textBaseline]: C[216] || CT.C216,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 57,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C297() {
      return C[297] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[298] || CT.C298,
        [TextTheme_labelMedium]: C[299] || CT.C299,
        [TextTheme_labelLarge]: C[300] || CT.C300,
        [TextTheme_bodySmall]: C[301] || CT.C301,
        [TextTheme_bodyMedium]: C[302] || CT.C302,
        [TextTheme_bodyLarge]: C[303] || CT.C303,
        [TextTheme_titleSmall]: C[304] || CT.C304,
        [TextTheme_titleMedium]: C[305] || CT.C305,
        [TextTheme_titleLarge]: C[306] || CT.C306,
        [TextTheme_headlineSmall]: C[307] || CT.C307,
        [TextTheme_headlineMedium]: C[308] || CT.C308,
        [TextTheme_headlineLarge]: C[309] || CT.C309,
        [TextTheme_displaySmall]: C[310] || CT.C310,
        [TextTheme_displayMedium]: C[311] || CT.C311,
        [TextTheme_displayLarge]: C[312] || CT.C312
      });
    },
    get C314() {
      return C[314] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.45,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 11,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C315() {
      return C[315] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C316() {
      return C[316] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall labelLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C317() {
      return C[317] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodySmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.4,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C318() {
      return C[318] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodyMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C319() {
      return C[319] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall bodyLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.5,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.5,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C320() {
      return C[320] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.43,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.1,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C321() {
      return C[321] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.5,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.15,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[183] || CT.C183,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C322() {
      return C[322] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall titleLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.27,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 22,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C323() {
      return C[323] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineSmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.33,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C324() {
      return C[324] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.29,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 28,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C325() {
      return C[325] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall headlineLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.25,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 32,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C326() {
      return C[326] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displaySmall 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.22,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 36,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C327() {
      return C[327] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displayMedium 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.16,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 45,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C328() {
      return C[328] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "tall displayLarge 2021",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: C[282] || CT.C282,
        [TextStyle_height]: 1.12,
        [TextStyle_textBaseline]: C[179] || CT.C179,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.25,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[180] || CT.C180,
        [TextStyle_fontSize]: 57,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: false
      });
    },
    get C313() {
      return C[313] = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_labelSmall]: C[314] || CT.C314,
        [TextTheme_labelMedium]: C[315] || CT.C315,
        [TextTheme_labelLarge]: C[316] || CT.C316,
        [TextTheme_bodySmall]: C[317] || CT.C317,
        [TextTheme_bodyMedium]: C[318] || CT.C318,
        [TextTheme_bodyLarge]: C[319] || CT.C319,
        [TextTheme_titleSmall]: C[320] || CT.C320,
        [TextTheme_titleMedium]: C[321] || CT.C321,
        [TextTheme_titleLarge]: C[322] || CT.C322,
        [TextTheme_headlineSmall]: C[323] || CT.C323,
        [TextTheme_headlineMedium]: C[324] || CT.C324,
        [TextTheme_headlineLarge]: C[325] || CT.C325,
        [TextTheme_displaySmall]: C[326] || CT.C326,
        [TextTheme_displayMedium]: C[327] || CT.C327,
        [TextTheme_displayLarge]: C[328] || CT.C328
      });
    }
  }, false);
  var C = Array(329).fill(void 0);
  var I = [
    "package:flutter/src/material/typography.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/typography.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/text_theme.dart",
    "package:flutter/src/material/text_theme.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  typography.ScriptCategory = class ScriptCategory extends core._Enum {
    toString() {
      return "ScriptCategory." + this[_name];
    }
  };
  (typography.ScriptCategory.new = function(index, name) {
    typography.ScriptCategory.__proto__.new.call(this, index, name);
    ;
  }).prototype = typography.ScriptCategory.prototype;
  dart.addTypeTests(typography.ScriptCategory);
  dart.addTypeCaches(typography.ScriptCategory);
  dart.setLibraryUri(typography.ScriptCategory, I[0]);
  dart.setStaticFieldSignature(typography.ScriptCategory, () => ['values', 'englishLike', 'dense', 'tall']);
  dart.defineExtensionMethods(typography.ScriptCategory, ['toString']);
  dart.defineLazy(typography.ScriptCategory, {
    /*typography.ScriptCategory.values*/get values() {
      return C[0] || CT.C0;
    },
    /*typography.ScriptCategory.englishLike*/get englishLike() {
      return C[1] || CT.C1;
    },
    /*typography.ScriptCategory.dense*/get dense() {
      return C[2] || CT.C2;
    },
    /*typography.ScriptCategory.tall*/get tall() {
      return C[3] || CT.C3;
    }
  }, false);
  var black$ = dart.privateName(typography, "Typography.black");
  var white$ = dart.privateName(typography, "Typography.white");
  var englishLike$ = dart.privateName(typography, "Typography.englishLike");
  var dense$ = dart.privateName(typography, "Typography.dense");
  var tall$ = dart.privateName(typography, "Typography.tall");
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
  var Color_value = dart.privateName(ui, "Color.value");
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
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  typography.Typography = class Typography extends Object_Diagnosticable$36 {
    get black() {
      return this[black$];
    }
    set black(value) {
      super.black = value;
    }
    get white() {
      return this[white$];
    }
    set white(value) {
      super.white = value;
    }
    get englishLike() {
      return this[englishLike$];
    }
    set englishLike(value) {
      super.englishLike = value;
    }
    get dense() {
      return this[dense$];
    }
    set dense(value) {
      super.dense = value;
    }
    get tall() {
      return this[tall$];
    }
    set tall(value) {
      super.tall = value;
    }
    static ['_#new#tearOff'](opts) {
      let platform = opts && 'platform' in opts ? opts.platform : C[4] || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      return typography.Typography.material2018({platform: platform, black: black, white: white, englishLike: englishLike, dense: dense, tall: tall});
    }
    static material2014(opts) {
      let t2, t2$, t2$0;
      let platform = opts && 'platform' in opts ? opts.platform : C[4] || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      if (!(platform != null || black != null && white != null)) dart.assertFailed(null, I[1], 113, 12, "platform != null || (black != null && white != null)");
      return typography.Typography._withPlatform(platform, black, white, (t2 = englishLike, t2 == null ? typography.Typography.englishLike2014 : t2), (t2$ = dense, t2$ == null ? typography.Typography.dense2014 : t2$), (t2$0 = tall, t2$0 == null ? typography.Typography.tall2014 : t2$0));
    }
    static ['_#material2014#tearOff'](opts) {
      let platform = opts && 'platform' in opts ? opts.platform : C[4] || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      return typography.Typography.material2014({platform: platform, black: black, white: white, englishLike: englishLike, dense: dense, tall: tall});
    }
    static material2018(opts) {
      let t2, t2$, t2$0;
      let platform = opts && 'platform' in opts ? opts.platform : C[4] || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      if (!(platform != null || black != null && white != null)) dart.assertFailed(null, I[1], 141, 12, "platform != null || (black != null && white != null)");
      return typography.Typography._withPlatform(platform, black, white, (t2 = englishLike, t2 == null ? typography.Typography.englishLike2018 : t2), (t2$ = dense, t2$ == null ? typography.Typography.dense2018 : t2$), (t2$0 = tall, t2$0 == null ? typography.Typography.tall2018 : t2$0));
    }
    static ['_#material2018#tearOff'](opts) {
      let platform = opts && 'platform' in opts ? opts.platform : C[4] || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      return typography.Typography.material2018({platform: platform, black: black, white: white, englishLike: englishLike, dense: dense, tall: tall});
    }
    static material2021(opts) {
      let t2, t2$, t2$0;
      let platform = opts && 'platform' in opts ? opts.platform : C[4] || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      if (!(platform != null || black != null && white != null)) dart.assertFailed(null, I[1], 172, 12, "platform != null || (black != null && white != null)");
      return typography.Typography._withPlatform(platform, black, white, (t2 = englishLike, t2 == null ? typography.Typography.englishLike2021 : t2), (t2$ = dense, t2$ == null ? typography.Typography.dense2021 : t2$), (t2$0 = tall, t2$0 == null ? typography.Typography.tall2021 : t2$0));
    }
    static ['_#material2021#tearOff'](opts) {
      let platform = opts && 'platform' in opts ? opts.platform : C[4] || CT.C4;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      return typography.Typography.material2021({platform: platform, black: black, white: white, englishLike: englishLike, dense: dense, tall: tall});
    }
    static _withPlatform(platform, black, white, englishLike, dense, tall) {
      if (!(platform != null || black != null && white != null)) dart.assertFailed(null, I[1], 190, 12, "platform != null || (black != null && white != null)");
      if (!(englishLike !== null)) dart.assertFailed(null, I[1], 191, 12, "englishLike != null");
      if (!(dense !== null)) dart.assertFailed(null, I[1], 192, 12, "dense != null");
      if (!(tall !== null)) dart.assertFailed(null, I[1], 193, 12, "tall != null");
      switch (platform) {
        case C[5] || CT.C5:
          {
            black == null ? black = typography.Typography.blackCupertino : null;
            white == null ? white = typography.Typography.whiteCupertino : null;
            break;
          }
        case C[4] || CT.C4:
        case C[6] || CT.C6:
          {
            black == null ? black = typography.Typography.blackMountainView : null;
            white == null ? white = typography.Typography.whiteMountainView : null;
            break;
          }
        case C[7] || CT.C7:
          {
            black == null ? black = typography.Typography.blackRedmond : null;
            white == null ? white = typography.Typography.whiteRedmond : null;
            break;
          }
        case C[8] || CT.C8:
          {
            black == null ? black = typography.Typography.blackRedwoodCity : null;
            white == null ? white = typography.Typography.whiteRedwoodCity : null;
            break;
          }
        case C[9] || CT.C9:
          {
            black == null ? black = typography.Typography.blackHelsinki : null;
            white == null ? white = typography.Typography.whiteHelsinki : null;
            break;
          }
        case null:
          {
            break;
          }
      }
      return new typography.Typography.__(dart.nullCheck(black), dart.nullCheck(white), englishLike, dense, tall);
    }
    static ['_#_withPlatform#tearOff'](platform, black, white, englishLike, dense, tall) {
      return typography.Typography._withPlatform(platform, black, white, englishLike, dense, tall);
    }
    static ['_#_#tearOff'](black, white, englishLike, dense, tall) {
      return new typography.Typography.__(black, white, englishLike, dense, tall);
    }
    geometryThemeFor(category) {
      if (!(category !== null)) dart.assertFailed(null, I[1], 285, 12, "category != null");
      switch (category) {
        case C[1] || CT.C1:
          {
            return this.englishLike;
          }
        case C[2] || CT.C2:
          {
            return this.dense;
          }
        case C[3] || CT.C3:
          {
            return this.tall;
          }
      }
    }
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2;
      let black = opts && 'black' in opts ? opts.black : null;
      let white = opts && 'white' in opts ? opts.white : null;
      let englishLike = opts && 'englishLike' in opts ? opts.englishLike : null;
      let dense = opts && 'dense' in opts ? opts.dense : null;
      let tall = opts && 'tall' in opts ? opts.tall : null;
      return new typography.Typography.__((t2 = black, t2 == null ? this.black : t2), (t2$ = white, t2$ == null ? this.white : t2$), (t2$0 = englishLike, t2$0 == null ? this.englishLike : t2$0), (t2$1 = dense, t2$1 == null ? this.dense : t2$1), (t2$2 = tall, t2$2 == null ? this.tall : t2$2));
    }
    static lerp(a, b, t) {
      return new typography.Typography.__(text_theme.TextTheme.lerp(a.black, b.black, t), text_theme.TextTheme.lerp(a.white, b.white, t), text_theme.TextTheme.lerp(a.englishLike, b.englishLike, t), text_theme.TextTheme.lerp(a.dense, b.dense, t), text_theme.TextTheme.lerp(a.tall, b.tall, t));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return typography.Typography.is(other) && other.black._equals(this.black) && other.white._equals(this.white) && other.englishLike._equals(this.englishLike) && other.dense._equals(this.dense) && other.tall._equals(this.tall);
    }
    get hashCode() {
      return core.Object.hash(this.black, this.white, this.englishLike, this.dense, this.tall);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let defaultTypography = typography.Typography.material2014();
      properties.add(new (T.DiagnosticsPropertyOfTextTheme()).new("black", this.black, {defaultValue: defaultTypography.black}));
      properties.add(new (T.DiagnosticsPropertyOfTextTheme()).new("white", this.white, {defaultValue: defaultTypography.white}));
      properties.add(new (T.DiagnosticsPropertyOfTextTheme()).new("englishLike", this.englishLike, {defaultValue: defaultTypography.englishLike}));
      properties.add(new (T.DiagnosticsPropertyOfTextTheme()).new("dense", this.dense, {defaultValue: defaultTypography.dense}));
      properties.add(new (T.DiagnosticsPropertyOfTextTheme()).new("tall", this.tall, {defaultValue: defaultTypography.tall}));
    }
  };
  (typography.Typography.__ = function(black, white, englishLike, dense, tall) {
    this[black$] = black;
    this[white$] = white;
    this[englishLike$] = englishLike;
    this[dense$] = dense;
    this[tall$] = tall;
    if (!(black !== null)) dart.assertFailed(null, I[1], 223, 14, "black != null");
    if (!(white !== null)) dart.assertFailed(null, I[1], 224, 14, "white != null");
    if (!(englishLike !== null)) dart.assertFailed(null, I[1], 225, 14, "englishLike != null");
    if (!(dense !== null)) dart.assertFailed(null, I[1], 226, 14, "dense != null");
    if (!(tall !== null)) dart.assertFailed(null, I[1], 227, 14, "tall != null");
    ;
  }).prototype = typography.Typography.prototype;
  dart.addTypeTests(typography.Typography);
  dart.addTypeCaches(typography.Typography);
  dart.setMethodSignature(typography.Typography, () => ({
    __proto__: dart.getMethods(typography.Typography.__proto__),
    geometryThemeFor: dart.fnType(text_theme.TextTheme, [typography.ScriptCategory]),
    copyWith: dart.fnType(typography.Typography, [], {black: dart.nullable(text_theme.TextTheme), dense: dart.nullable(text_theme.TextTheme), englishLike: dart.nullable(text_theme.TextTheme), tall: dart.nullable(text_theme.TextTheme), white: dart.nullable(text_theme.TextTheme)}, {})
  }));
  dart.setStaticMethodSignature(typography.Typography, () => ['new', 'material2014', 'material2018', 'material2021', '_withPlatform', 'lerp']);
  dart.setLibraryUri(typography.Typography, I[0]);
  dart.setFieldSignature(typography.Typography, () => ({
    __proto__: dart.getFields(typography.Typography.__proto__),
    black: dart.finalFieldType(text_theme.TextTheme),
    white: dart.finalFieldType(text_theme.TextTheme),
    englishLike: dart.finalFieldType(text_theme.TextTheme),
    dense: dart.finalFieldType(text_theme.TextTheme),
    tall: dart.finalFieldType(text_theme.TextTheme)
  }));
  dart.setStaticFieldSignature(typography.Typography, () => ['blackMountainView', 'whiteMountainView', 'blackRedmond', 'whiteRedmond', '_helsinkiFontFallbacks', 'blackHelsinki', 'whiteHelsinki', 'blackCupertino', 'whiteCupertino', 'blackRedwoodCity', 'whiteRedwoodCity', 'englishLike2014', 'englishLike2018', 'dense2014', 'dense2018', 'tall2014', 'tall2018', 'englishLike2021', 'dense2021', 'tall2021', '_redirecting#']);
  dart.defineExtensionMethods(typography.Typography, ['_equals']);
  dart.defineExtensionAccessors(typography.Typography, ['hashCode']);
  dart.defineLazy(typography.Typography, {
    /*typography.Typography.blackMountainView*/get blackMountainView() {
      return C[10] || CT.C10;
    },
    /*typography.Typography.whiteMountainView*/get whiteMountainView() {
      return C[30] || CT.C30;
    },
    /*typography.Typography.blackRedmond*/get blackRedmond() {
      return C[48] || CT.C48;
    },
    /*typography.Typography.whiteRedmond*/get whiteRedmond() {
      return C[64] || CT.C64;
    },
    /*typography.Typography._helsinkiFontFallbacks*/get _helsinkiFontFallbacks() {
      return C[80] || CT.C80;
    },
    /*typography.Typography.blackHelsinki*/get blackHelsinki() {
      return C[81] || CT.C81;
    },
    /*typography.Typography.whiteHelsinki*/get whiteHelsinki() {
      return C[97] || CT.C97;
    },
    /*typography.Typography.blackCupertino*/get blackCupertino() {
      return C[113] || CT.C113;
    },
    /*typography.Typography.whiteCupertino*/get whiteCupertino() {
      return C[129] || CT.C129;
    },
    /*typography.Typography.blackRedwoodCity*/get blackRedwoodCity() {
      return C[145] || CT.C145;
    },
    /*typography.Typography.whiteRedwoodCity*/get whiteRedwoodCity() {
      return C[161] || CT.C161;
    },
    /*typography.Typography.englishLike2014*/get englishLike2014() {
      return C[177] || CT.C177;
    },
    /*typography.Typography.englishLike2018*/get englishLike2018() {
      return C[197] || CT.C197;
    },
    /*typography.Typography.dense2014*/get dense2014() {
      return C[214] || CT.C214;
    },
    /*typography.Typography.dense2018*/get dense2018() {
      return C[231] || CT.C231;
    },
    /*typography.Typography.tall2014*/get tall2014() {
      return C[247] || CT.C247;
    },
    /*typography.Typography.tall2018*/get tall2018() {
      return C[264] || CT.C264;
    },
    /*typography.Typography.englishLike2021*/get englishLike2021() {
      return C[280] || CT.C280;
    },
    /*typography.Typography.dense2021*/get dense2021() {
      return C[297] || CT.C297;
    },
    /*typography.Typography.tall2021*/get tall2021() {
      return C[313] || CT.C313;
    }
  }, false);
  typography._M3Typography = class _M3Typography extends core.Object {
    static ['_#_#tearOff']() {
      return new typography._M3Typography.__();
    }
  };
  (typography._M3Typography.__ = function() {
    ;
  }).prototype = typography._M3Typography.prototype;
  dart.addTypeTests(typography._M3Typography);
  dart.addTypeCaches(typography._M3Typography);
  dart.setLibraryUri(typography._M3Typography, I[0]);
  dart.setStaticFieldSignature(typography._M3Typography, () => ['englishLike', 'dense', 'tall']);
  dart.defineLazy(typography._M3Typography, {
    /*typography._M3Typography.englishLike*/get englishLike() {
      return C[280] || CT.C280;
    },
    /*typography._M3Typography.dense*/get dense() {
      return C[297] || CT.C297;
    },
    /*typography._M3Typography.tall*/get tall() {
      return C[313] || CT.C313;
    }
  }, false);
  const displayLarge$ = TextTheme_displayLarge;
  const displayMedium$ = TextTheme_displayMedium;
  const displaySmall$ = TextTheme_displaySmall;
  const headlineLarge$ = TextTheme_headlineLarge;
  const headlineMedium$ = TextTheme_headlineMedium;
  const headlineSmall$ = TextTheme_headlineSmall;
  const titleLarge$ = TextTheme_titleLarge;
  const titleMedium$ = TextTheme_titleMedium;
  const titleSmall$ = TextTheme_titleSmall;
  const bodyLarge$ = TextTheme_bodyLarge;
  const bodyMedium$ = TextTheme_bodyMedium;
  const bodySmall$ = TextTheme_bodySmall;
  const labelLarge$ = TextTheme_labelLarge;
  const labelMedium$ = TextTheme_labelMedium;
  const labelSmall$ = TextTheme_labelSmall;
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  text_theme.TextTheme = class TextTheme extends Object_Diagnosticable$36$ {
    get displayLarge() {
      return this[displayLarge$];
    }
    set displayLarge(value) {
      super.displayLarge = value;
    }
    get displayMedium() {
      return this[displayMedium$];
    }
    set displayMedium(value) {
      super.displayMedium = value;
    }
    get displaySmall() {
      return this[displaySmall$];
    }
    set displaySmall(value) {
      super.displaySmall = value;
    }
    get headlineLarge() {
      return this[headlineLarge$];
    }
    set headlineLarge(value) {
      super.headlineLarge = value;
    }
    get headlineMedium() {
      return this[headlineMedium$];
    }
    set headlineMedium(value) {
      super.headlineMedium = value;
    }
    get headlineSmall() {
      return this[headlineSmall$];
    }
    set headlineSmall(value) {
      super.headlineSmall = value;
    }
    get titleLarge() {
      return this[titleLarge$];
    }
    set titleLarge(value) {
      super.titleLarge = value;
    }
    get titleMedium() {
      return this[titleMedium$];
    }
    set titleMedium(value) {
      super.titleMedium = value;
    }
    get titleSmall() {
      return this[titleSmall$];
    }
    set titleSmall(value) {
      super.titleSmall = value;
    }
    get bodyLarge() {
      return this[bodyLarge$];
    }
    set bodyLarge(value) {
      super.bodyLarge = value;
    }
    get bodyMedium() {
      return this[bodyMedium$];
    }
    set bodyMedium(value) {
      super.bodyMedium = value;
    }
    get bodySmall() {
      return this[bodySmall$];
    }
    set bodySmall(value) {
      super.bodySmall = value;
    }
    get labelLarge() {
      return this[labelLarge$];
    }
    set labelLarge(value) {
      super.labelLarge = value;
    }
    get labelMedium() {
      return this[labelMedium$];
    }
    set labelMedium(value) {
      super.labelMedium = value;
    }
    get labelSmall() {
      return this[labelSmall$];
    }
    set labelSmall(value) {
      super.labelSmall = value;
    }
    static ['_#new#tearOff'](opts) {
      let displayLarge = opts && 'displayLarge' in opts ? opts.displayLarge : null;
      let displayMedium = opts && 'displayMedium' in opts ? opts.displayMedium : null;
      let displaySmall = opts && 'displaySmall' in opts ? opts.displaySmall : null;
      let headlineLarge = opts && 'headlineLarge' in opts ? opts.headlineLarge : null;
      let headlineMedium = opts && 'headlineMedium' in opts ? opts.headlineMedium : null;
      let headlineSmall = opts && 'headlineSmall' in opts ? opts.headlineSmall : null;
      let titleLarge = opts && 'titleLarge' in opts ? opts.titleLarge : null;
      let titleMedium = opts && 'titleMedium' in opts ? opts.titleMedium : null;
      let titleSmall = opts && 'titleSmall' in opts ? opts.titleSmall : null;
      let bodyLarge = opts && 'bodyLarge' in opts ? opts.bodyLarge : null;
      let bodyMedium = opts && 'bodyMedium' in opts ? opts.bodyMedium : null;
      let bodySmall = opts && 'bodySmall' in opts ? opts.bodySmall : null;
      let labelLarge = opts && 'labelLarge' in opts ? opts.labelLarge : null;
      let labelMedium = opts && 'labelMedium' in opts ? opts.labelMedium : null;
      let labelSmall = opts && 'labelSmall' in opts ? opts.labelSmall : null;
      let headline1 = opts && 'headline1' in opts ? opts.headline1 : null;
      let headline2 = opts && 'headline2' in opts ? opts.headline2 : null;
      let headline3 = opts && 'headline3' in opts ? opts.headline3 : null;
      let headline4 = opts && 'headline4' in opts ? opts.headline4 : null;
      let headline5 = opts && 'headline5' in opts ? opts.headline5 : null;
      let headline6 = opts && 'headline6' in opts ? opts.headline6 : null;
      let subtitle1 = opts && 'subtitle1' in opts ? opts.subtitle1 : null;
      let subtitle2 = opts && 'subtitle2' in opts ? opts.subtitle2 : null;
      let bodyText1 = opts && 'bodyText1' in opts ? opts.bodyText1 : null;
      let bodyText2 = opts && 'bodyText2' in opts ? opts.bodyText2 : null;
      let caption = opts && 'caption' in opts ? opts.caption : null;
      let button = opts && 'button' in opts ? opts.button : null;
      let overline = opts && 'overline' in opts ? opts.overline : null;
      return new text_theme.TextTheme.new({displayLarge: displayLarge, displayMedium: displayMedium, displaySmall: displaySmall, headlineLarge: headlineLarge, headlineMedium: headlineMedium, headlineSmall: headlineSmall, titleLarge: titleLarge, titleMedium: titleMedium, titleSmall: titleSmall, bodyLarge: bodyLarge, bodyMedium: bodyMedium, bodySmall: bodySmall, labelLarge: labelLarge, labelMedium: labelMedium, labelSmall: labelSmall, headline1: headline1, headline2: headline2, headline3: headline3, headline4: headline4, headline5: headline5, headline6: headline6, subtitle1: subtitle1, subtitle2: subtitle2, bodyText1: bodyText1, bodyText2: bodyText2, caption: caption, button: button, overline: overline});
    }
    get headline1() {
      return this.displayLarge;
    }
    get headline2() {
      return this.displayMedium;
    }
    get headline3() {
      return this.displaySmall;
    }
    get headline4() {
      return this.headlineMedium;
    }
    get headline5() {
      return this.headlineSmall;
    }
    get headline6() {
      return this.titleLarge;
    }
    get subtitle1() {
      return this.titleMedium;
    }
    get subtitle2() {
      return this.titleSmall;
    }
    get bodyText1() {
      return this.bodyLarge;
    }
    get bodyText2() {
      return this.bodyMedium;
    }
    get caption() {
      return this.bodySmall;
    }
    get button() {
      return this.labelLarge;
    }
    get overline() {
      return this.labelSmall;
    }
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17, t2$18, t2$19, t2$20, t2$21, t2$22, t2$23, t2$24, t2$25;
      let displayLarge = opts && 'displayLarge' in opts ? opts.displayLarge : null;
      let displayMedium = opts && 'displayMedium' in opts ? opts.displayMedium : null;
      let displaySmall = opts && 'displaySmall' in opts ? opts.displaySmall : null;
      let headlineLarge = opts && 'headlineLarge' in opts ? opts.headlineLarge : null;
      let headlineMedium = opts && 'headlineMedium' in opts ? opts.headlineMedium : null;
      let headlineSmall = opts && 'headlineSmall' in opts ? opts.headlineSmall : null;
      let titleLarge = opts && 'titleLarge' in opts ? opts.titleLarge : null;
      let titleMedium = opts && 'titleMedium' in opts ? opts.titleMedium : null;
      let titleSmall = opts && 'titleSmall' in opts ? opts.titleSmall : null;
      let bodyLarge = opts && 'bodyLarge' in opts ? opts.bodyLarge : null;
      let bodyMedium = opts && 'bodyMedium' in opts ? opts.bodyMedium : null;
      let bodySmall = opts && 'bodySmall' in opts ? opts.bodySmall : null;
      let labelLarge = opts && 'labelLarge' in opts ? opts.labelLarge : null;
      let labelMedium = opts && 'labelMedium' in opts ? opts.labelMedium : null;
      let labelSmall = opts && 'labelSmall' in opts ? opts.labelSmall : null;
      let headline1 = opts && 'headline1' in opts ? opts.headline1 : null;
      let headline2 = opts && 'headline2' in opts ? opts.headline2 : null;
      let headline3 = opts && 'headline3' in opts ? opts.headline3 : null;
      let headline4 = opts && 'headline4' in opts ? opts.headline4 : null;
      let headline5 = opts && 'headline5' in opts ? opts.headline5 : null;
      let headline6 = opts && 'headline6' in opts ? opts.headline6 : null;
      let subtitle1 = opts && 'subtitle1' in opts ? opts.subtitle1 : null;
      let subtitle2 = opts && 'subtitle2' in opts ? opts.subtitle2 : null;
      let bodyText1 = opts && 'bodyText1' in opts ? opts.bodyText1 : null;
      let bodyText2 = opts && 'bodyText2' in opts ? opts.bodyText2 : null;
      let caption = opts && 'caption' in opts ? opts.caption : null;
      let button = opts && 'button' in opts ? opts.button : null;
      let overline = opts && 'overline' in opts ? opts.overline : null;
      if (!(displayLarge == null && displayMedium == null && displaySmall == null && headlineMedium == null && headlineSmall == null && titleLarge == null && titleMedium == null && titleSmall == null && bodyLarge == null && bodyMedium == null && bodySmall == null && labelLarge == null && labelSmall == null || headline1 == null && headline2 == null && headline3 == null && headline4 == null && headline5 == null && headline6 == null && subtitle1 == null && subtitle2 == null && bodyText1 == null && bodyText2 == null && caption == null && button == null && overline == null)) dart.assertFailed("Cannot mix 2018 and 2021 terms in call to TextTheme() constructor.", I[2], 350, 7, "(displayLarge == null && displayMedium == null && displaySmall == null && headlineMedium == null &&\n          headlineSmall == null && titleLarge == null && titleMedium == null && titleSmall == null &&\n          bodyLarge == null && bodyMedium == null && bodySmall == null && labelLarge == null && labelSmall == null) ||\n      (headline1 == null && headline2 == null && headline3 == null && headline4 == null &&\n          headline5 == null && headline6 == null && subtitle1 == null && subtitle2 == null &&\n          bodyText1 == null && bodyText2 == null && caption == null && button == null && overline == null)");
      return new text_theme.TextTheme.new({displayLarge: (t2$ = (t2 = displayLarge, t2 == null ? headline1 : t2), t2$ == null ? this.displayLarge : t2$), displayMedium: (t2$1 = (t2$0 = displayMedium, t2$0 == null ? headline2 : t2$0), t2$1 == null ? this.displayMedium : t2$1), displaySmall: (t2$3 = (t2$2 = displaySmall, t2$2 == null ? headline3 : t2$2), t2$3 == null ? this.displaySmall : t2$3), headlineLarge: (t2$4 = headlineLarge, t2$4 == null ? this.headlineLarge : t2$4), headlineMedium: (t2$6 = (t2$5 = headlineMedium, t2$5 == null ? headline4 : t2$5), t2$6 == null ? this.headlineMedium : t2$6), headlineSmall: (t2$8 = (t2$7 = headlineSmall, t2$7 == null ? headline5 : t2$7), t2$8 == null ? this.headlineSmall : t2$8), titleLarge: (t2$10 = (t2$9 = titleLarge, t2$9 == null ? headline6 : t2$9), t2$10 == null ? this.titleLarge : t2$10), titleMedium: (t2$12 = (t2$11 = titleMedium, t2$11 == null ? subtitle1 : t2$11), t2$12 == null ? this.titleMedium : t2$12), titleSmall: (t2$14 = (t2$13 = titleSmall, t2$13 == null ? subtitle2 : t2$13), t2$14 == null ? this.titleSmall : t2$14), bodyLarge: (t2$16 = (t2$15 = bodyLarge, t2$15 == null ? bodyText1 : t2$15), t2$16 == null ? this.bodyLarge : t2$16), bodyMedium: (t2$18 = (t2$17 = bodyMedium, t2$17 == null ? bodyText2 : t2$17), t2$18 == null ? this.bodyMedium : t2$18), bodySmall: (t2$20 = (t2$19 = bodySmall, t2$19 == null ? caption : t2$19), t2$20 == null ? this.bodySmall : t2$20), labelLarge: (t2$22 = (t2$21 = labelLarge, t2$21 == null ? button : t2$21), t2$22 == null ? this.labelLarge : t2$22), labelMedium: (t2$23 = labelMedium, t2$23 == null ? this.labelMedium : t2$23), labelSmall: (t2$25 = (t2$24 = labelSmall, t2$24 == null ? overline : t2$24), t2$25 == null ? this.labelSmall : t2$25)});
    }
    merge(other) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17, t2$18, t2$19, t2$20, t2$21, t2$22, t2$23, t2$24, t2$25, t2$26, t2$27;
      if (other == null) {
        return this;
      }
      return this.copyWith({displayLarge: (t2$ = (t2 = this.displayLarge, t2 == null ? null : t2.merge(other.displayLarge)), t2$ == null ? other.displayLarge : t2$), displayMedium: (t2$1 = (t2$0 = this.displayMedium, t2$0 == null ? null : t2$0.merge(other.displayMedium)), t2$1 == null ? other.displayMedium : t2$1), displaySmall: (t2$3 = (t2$2 = this.displaySmall, t2$2 == null ? null : t2$2.merge(other.displaySmall)), t2$3 == null ? other.displaySmall : t2$3), headlineLarge: (t2$5 = (t2$4 = this.headlineLarge, t2$4 == null ? null : t2$4.merge(other.headlineLarge)), t2$5 == null ? other.headlineLarge : t2$5), headlineMedium: (t2$7 = (t2$6 = this.headlineMedium, t2$6 == null ? null : t2$6.merge(other.headlineMedium)), t2$7 == null ? other.headlineMedium : t2$7), headlineSmall: (t2$9 = (t2$8 = this.headlineSmall, t2$8 == null ? null : t2$8.merge(other.headlineSmall)), t2$9 == null ? other.headlineSmall : t2$9), titleLarge: (t2$11 = (t2$10 = this.titleLarge, t2$10 == null ? null : t2$10.merge(other.titleLarge)), t2$11 == null ? other.titleLarge : t2$11), titleMedium: (t2$13 = (t2$12 = this.titleMedium, t2$12 == null ? null : t2$12.merge(other.titleMedium)), t2$13 == null ? other.titleMedium : t2$13), titleSmall: (t2$15 = (t2$14 = this.titleSmall, t2$14 == null ? null : t2$14.merge(other.titleSmall)), t2$15 == null ? other.titleSmall : t2$15), bodyLarge: (t2$17 = (t2$16 = this.bodyLarge, t2$16 == null ? null : t2$16.merge(other.bodyLarge)), t2$17 == null ? other.bodyLarge : t2$17), bodyMedium: (t2$19 = (t2$18 = this.bodyMedium, t2$18 == null ? null : t2$18.merge(other.bodyMedium)), t2$19 == null ? other.bodyMedium : t2$19), bodySmall: (t2$21 = (t2$20 = this.bodySmall, t2$20 == null ? null : t2$20.merge(other.bodySmall)), t2$21 == null ? other.bodySmall : t2$21), labelLarge: (t2$23 = (t2$22 = this.labelLarge, t2$22 == null ? null : t2$22.merge(other.labelLarge)), t2$23 == null ? other.labelLarge : t2$23), labelMedium: (t2$25 = (t2$24 = this.labelMedium, t2$24 == null ? null : t2$24.merge(other.labelMedium)), t2$25 == null ? other.labelMedium : t2$25), labelSmall: (t2$27 = (t2$26 = this.labelSmall, t2$26 == null ? null : t2$26.merge(other.labelSmall)), t2$27 == null ? other.labelSmall : t2$27)});
    }
    apply(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSizeFactor = opts && 'fontSizeFactor' in opts ? opts.fontSizeFactor : 1;
      let fontSizeDelta = opts && 'fontSizeDelta' in opts ? opts.fontSizeDelta : 0;
      let displayColor = opts && 'displayColor' in opts ? opts.displayColor : null;
      let bodyColor = opts && 'bodyColor' in opts ? opts.bodyColor : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      return new text_theme.TextTheme.new({displayLarge: (t2 = this.displayLarge, t2 == null ? null : t2.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), displayMedium: (t2$ = this.displayMedium, t2$ == null ? null : t2$.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), displaySmall: (t2$0 = this.displaySmall, t2$0 == null ? null : t2$0.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), headlineLarge: (t2$1 = this.headlineLarge, t2$1 == null ? null : t2$1.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), headlineMedium: (t2$2 = this.headlineMedium, t2$2 == null ? null : t2$2.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), headlineSmall: (t2$3 = this.headlineSmall, t2$3 == null ? null : t2$3.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), titleLarge: (t2$4 = this.titleLarge, t2$4 == null ? null : t2$4.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), titleMedium: (t2$5 = this.titleMedium, t2$5 == null ? null : t2$5.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), titleSmall: (t2$6 = this.titleSmall, t2$6 == null ? null : t2$6.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), bodyLarge: (t2$7 = this.bodyLarge, t2$7 == null ? null : t2$7.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), bodyMedium: (t2$8 = this.bodyMedium, t2$8 == null ? null : t2$8.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), bodySmall: (t2$9 = this.bodySmall, t2$9 == null ? null : t2$9.apply({color: displayColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), labelLarge: (t2$10 = this.labelLarge, t2$10 == null ? null : t2$10.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), labelMedium: (t2$11 = this.labelMedium, t2$11 == null ? null : t2$11.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta})), labelSmall: (t2$12 = this.labelSmall, t2$12 == null ? null : t2$12.apply({color: bodyColor, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, fontFamily: fontFamily, fontSizeFactor: fontSizeFactor, fontSizeDelta: fontSizeDelta}))});
    }
    static lerp(a, b, t) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17, t2$18, t2$19, t2$20, t2$21, t2$22, t2$23, t2$24, t2$25, t2$26, t2$27;
      if (!(t !== null)) dart.assertFailed(null, I[2], 614, 12, "t != null");
      return new text_theme.TextTheme.new({displayLarge: text_style.TextStyle.lerp((t2 = a, t2 == null ? null : t2.displayLarge), (t2$ = b, t2$ == null ? null : t2$.displayLarge), t), displayMedium: text_style.TextStyle.lerp((t2$0 = a, t2$0 == null ? null : t2$0.displayMedium), (t2$1 = b, t2$1 == null ? null : t2$1.displayMedium), t), displaySmall: text_style.TextStyle.lerp((t2$2 = a, t2$2 == null ? null : t2$2.displaySmall), (t2$3 = b, t2$3 == null ? null : t2$3.displaySmall), t), headlineLarge: text_style.TextStyle.lerp((t2$4 = a, t2$4 == null ? null : t2$4.headlineLarge), (t2$5 = b, t2$5 == null ? null : t2$5.headlineLarge), t), headlineMedium: text_style.TextStyle.lerp((t2$6 = a, t2$6 == null ? null : t2$6.headlineMedium), (t2$7 = b, t2$7 == null ? null : t2$7.headlineMedium), t), headlineSmall: text_style.TextStyle.lerp((t2$8 = a, t2$8 == null ? null : t2$8.headlineSmall), (t2$9 = b, t2$9 == null ? null : t2$9.headlineSmall), t), titleLarge: text_style.TextStyle.lerp((t2$10 = a, t2$10 == null ? null : t2$10.titleLarge), (t2$11 = b, t2$11 == null ? null : t2$11.titleLarge), t), titleMedium: text_style.TextStyle.lerp((t2$12 = a, t2$12 == null ? null : t2$12.titleMedium), (t2$13 = b, t2$13 == null ? null : t2$13.titleMedium), t), titleSmall: text_style.TextStyle.lerp((t2$14 = a, t2$14 == null ? null : t2$14.titleSmall), (t2$15 = b, t2$15 == null ? null : t2$15.titleSmall), t), bodyLarge: text_style.TextStyle.lerp((t2$16 = a, t2$16 == null ? null : t2$16.bodyLarge), (t2$17 = b, t2$17 == null ? null : t2$17.bodyLarge), t), bodyMedium: text_style.TextStyle.lerp((t2$18 = a, t2$18 == null ? null : t2$18.bodyMedium), (t2$19 = b, t2$19 == null ? null : t2$19.bodyMedium), t), bodySmall: text_style.TextStyle.lerp((t2$20 = a, t2$20 == null ? null : t2$20.bodySmall), (t2$21 = b, t2$21 == null ? null : t2$21.bodySmall), t), labelLarge: text_style.TextStyle.lerp((t2$22 = a, t2$22 == null ? null : t2$22.labelLarge), (t2$23 = b, t2$23 == null ? null : t2$23.labelLarge), t), labelMedium: text_style.TextStyle.lerp((t2$24 = a, t2$24 == null ? null : t2$24.labelMedium), (t2$25 = b, t2$25 == null ? null : t2$25.labelMedium), t), labelSmall: text_style.TextStyle.lerp((t2$26 = a, t2$26 == null ? null : t2$26.labelSmall), (t2$27 = b, t2$27 == null ? null : t2$27.labelSmall), t)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return text_theme.TextTheme.is(other) && dart.equals(this.displayLarge, other.displayLarge) && dart.equals(this.displayMedium, other.displayMedium) && dart.equals(this.displaySmall, other.displaySmall) && dart.equals(this.headlineLarge, other.headlineLarge) && dart.equals(this.headlineMedium, other.headlineMedium) && dart.equals(this.headlineSmall, other.headlineSmall) && dart.equals(this.titleLarge, other.titleLarge) && dart.equals(this.titleMedium, other.titleMedium) && dart.equals(this.titleSmall, other.titleSmall) && dart.equals(this.bodyLarge, other.bodyLarge) && dart.equals(this.bodyMedium, other.bodyMedium) && dart.equals(this.bodySmall, other.bodySmall) && dart.equals(this.labelLarge, other.labelLarge) && dart.equals(this.labelMedium, other.labelMedium) && dart.equals(this.labelSmall, other.labelSmall);
    }
    get hashCode() {
      return core.Object.hash(this.displayLarge, this.displayMedium, this.displaySmall, this.headlineLarge, this.headlineMedium, this.headlineSmall, this.titleLarge, this.titleMedium, this.titleSmall, this.bodyLarge, this.bodyMedium, this.bodySmall, this.labelLarge, this.labelMedium, this.labelSmall);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let defaultTheme = typography.Typography.material2018({platform: platform.defaultTargetPlatform}).black;
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("displayLarge", this.displayLarge, {defaultValue: defaultTheme.displayLarge}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("displayMedium", this.displayMedium, {defaultValue: defaultTheme.displayMedium}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("displaySmall", this.displaySmall, {defaultValue: defaultTheme.displaySmall}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("headlineLarge", this.headlineLarge, {defaultValue: defaultTheme.headlineLarge}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("headlineMedium", this.headlineMedium, {defaultValue: defaultTheme.headlineMedium}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("headlineSmall", this.headlineSmall, {defaultValue: defaultTheme.headlineSmall}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("titleLarge", this.titleLarge, {defaultValue: defaultTheme.titleLarge}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("titleMedium", this.titleMedium, {defaultValue: defaultTheme.titleMedium}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("titleSmall", this.titleSmall, {defaultValue: defaultTheme.titleSmall}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("bodyLarge", this.bodyLarge, {defaultValue: defaultTheme.bodyLarge}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("bodyMedium", this.bodyMedium, {defaultValue: defaultTheme.bodyMedium}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("bodySmall", this.bodySmall, {defaultValue: defaultTheme.bodySmall}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("labelLarge", this.labelLarge, {defaultValue: defaultTheme.labelLarge}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("labelMedium", this.labelMedium, {defaultValue: defaultTheme.labelMedium}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("labelSmall", this.labelSmall, {defaultValue: defaultTheme.labelSmall}));
    }
  };
  (text_theme.TextTheme.new = function(opts) {
    let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10;
    let displayLarge = opts && 'displayLarge' in opts ? opts.displayLarge : null;
    let displayMedium = opts && 'displayMedium' in opts ? opts.displayMedium : null;
    let displaySmall = opts && 'displaySmall' in opts ? opts.displaySmall : null;
    let headlineLarge = opts && 'headlineLarge' in opts ? opts.headlineLarge : null;
    let headlineMedium = opts && 'headlineMedium' in opts ? opts.headlineMedium : null;
    let headlineSmall = opts && 'headlineSmall' in opts ? opts.headlineSmall : null;
    let titleLarge = opts && 'titleLarge' in opts ? opts.titleLarge : null;
    let titleMedium = opts && 'titleMedium' in opts ? opts.titleMedium : null;
    let titleSmall = opts && 'titleSmall' in opts ? opts.titleSmall : null;
    let bodyLarge = opts && 'bodyLarge' in opts ? opts.bodyLarge : null;
    let bodyMedium = opts && 'bodyMedium' in opts ? opts.bodyMedium : null;
    let bodySmall = opts && 'bodySmall' in opts ? opts.bodySmall : null;
    let labelLarge = opts && 'labelLarge' in opts ? opts.labelLarge : null;
    let labelMedium = opts && 'labelMedium' in opts ? opts.labelMedium : null;
    let labelSmall = opts && 'labelSmall' in opts ? opts.labelSmall : null;
    let headline1 = opts && 'headline1' in opts ? opts.headline1 : null;
    let headline2 = opts && 'headline2' in opts ? opts.headline2 : null;
    let headline3 = opts && 'headline3' in opts ? opts.headline3 : null;
    let headline4 = opts && 'headline4' in opts ? opts.headline4 : null;
    let headline5 = opts && 'headline5' in opts ? opts.headline5 : null;
    let headline6 = opts && 'headline6' in opts ? opts.headline6 : null;
    let subtitle1 = opts && 'subtitle1' in opts ? opts.subtitle1 : null;
    let subtitle2 = opts && 'subtitle2' in opts ? opts.subtitle2 : null;
    let bodyText1 = opts && 'bodyText1' in opts ? opts.bodyText1 : null;
    let bodyText2 = opts && 'bodyText2' in opts ? opts.bodyText2 : null;
    let caption = opts && 'caption' in opts ? opts.caption : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let overline = opts && 'overline' in opts ? opts.overline : null;
    this[headlineLarge$] = headlineLarge;
    this[labelMedium$] = labelMedium;
    if (!(displayLarge == null && displayMedium == null && displaySmall == null && headlineMedium == null && headlineSmall == null && titleLarge == null && titleMedium == null && titleSmall == null && bodyLarge == null && bodyMedium == null && bodySmall == null && labelLarge == null && labelSmall == null || headline1 == null && headline2 == null && headline3 == null && headline4 == null && headline5 == null && headline6 == null && subtitle1 == null && subtitle2 == null && bodyText1 == null && bodyText2 == null && caption == null && button == null && overline == null)) dart.assertFailed("Cannot mix 2018 and 2021 terms in call to TextTheme() constructor.", I[2], 118, 10, "(displayLarge == null && displayMedium == null && displaySmall == null && headlineMedium == null &&\n             headlineSmall == null && titleLarge == null && titleMedium == null && titleSmall == null &&\n             bodyLarge == null && bodyMedium == null && bodySmall == null && labelLarge == null && labelSmall == null) ||\n         (headline1 == null && headline2 == null && headline3 == null && headline4 == null &&\n             headline5 == null && headline6 == null && subtitle1 == null && subtitle2 == null &&\n             bodyText1 == null && bodyText2 == null && caption == null && button == null && overline == null)");
    this[displayLarge$] = (t2 = displayLarge, t2 == null ? headline1 : t2);
    this[displayMedium$] = (t2$ = displayMedium, t2$ == null ? headline2 : t2$);
    this[displaySmall$] = (t2$0 = displaySmall, t2$0 == null ? headline3 : t2$0);
    this[headlineMedium$] = (t2$1 = headlineMedium, t2$1 == null ? headline4 : t2$1);
    this[headlineSmall$] = (t2$2 = headlineSmall, t2$2 == null ? headline5 : t2$2);
    this[titleLarge$] = (t2$3 = titleLarge, t2$3 == null ? headline6 : t2$3);
    this[titleMedium$] = (t2$4 = titleMedium, t2$4 == null ? subtitle1 : t2$4);
    this[titleSmall$] = (t2$5 = titleSmall, t2$5 == null ? subtitle2 : t2$5);
    this[bodyLarge$] = (t2$6 = bodyLarge, t2$6 == null ? bodyText1 : t2$6);
    this[bodyMedium$] = (t2$7 = bodyMedium, t2$7 == null ? bodyText2 : t2$7);
    this[bodySmall$] = (t2$8 = bodySmall, t2$8 == null ? caption : t2$8);
    this[labelLarge$] = (t2$9 = labelLarge, t2$9 == null ? button : t2$9);
    this[labelSmall$] = (t2$10 = labelSmall, t2$10 == null ? overline : t2$10);
    ;
  }).prototype = text_theme.TextTheme.prototype;
  dart.addTypeTests(text_theme.TextTheme);
  dart.addTypeCaches(text_theme.TextTheme);
  dart.setMethodSignature(text_theme.TextTheme, () => ({
    __proto__: dart.getMethods(text_theme.TextTheme.__proto__),
    copyWith: dart.fnType(text_theme.TextTheme, [], {bodyLarge: dart.nullable(text_style.TextStyle), bodyMedium: dart.nullable(text_style.TextStyle), bodySmall: dart.nullable(text_style.TextStyle), bodyText1: dart.nullable(text_style.TextStyle), bodyText2: dart.nullable(text_style.TextStyle), button: dart.nullable(text_style.TextStyle), caption: dart.nullable(text_style.TextStyle), displayLarge: dart.nullable(text_style.TextStyle), displayMedium: dart.nullable(text_style.TextStyle), displaySmall: dart.nullable(text_style.TextStyle), headline1: dart.nullable(text_style.TextStyle), headline2: dart.nullable(text_style.TextStyle), headline3: dart.nullable(text_style.TextStyle), headline4: dart.nullable(text_style.TextStyle), headline5: dart.nullable(text_style.TextStyle), headline6: dart.nullable(text_style.TextStyle), headlineLarge: dart.nullable(text_style.TextStyle), headlineMedium: dart.nullable(text_style.TextStyle), headlineSmall: dart.nullable(text_style.TextStyle), labelLarge: dart.nullable(text_style.TextStyle), labelMedium: dart.nullable(text_style.TextStyle), labelSmall: dart.nullable(text_style.TextStyle), overline: dart.nullable(text_style.TextStyle), subtitle1: dart.nullable(text_style.TextStyle), subtitle2: dart.nullable(text_style.TextStyle), titleLarge: dart.nullable(text_style.TextStyle), titleMedium: dart.nullable(text_style.TextStyle), titleSmall: dart.nullable(text_style.TextStyle)}, {}),
    merge: dart.fnType(text_theme.TextTheme, [dart.nullable(text_theme.TextTheme)]),
    apply: dart.fnType(text_theme.TextTheme, [], {bodyColor: dart.nullable(ui.Color), decoration: dart.nullable(ui.TextDecoration), decorationColor: dart.nullable(ui.Color), decorationStyle: dart.nullable(ui.TextDecorationStyle), displayColor: dart.nullable(ui.Color), fontFamily: dart.nullable(core.String), fontSizeDelta: core.double, fontSizeFactor: core.double}, {})
  }));
  dart.setStaticMethodSignature(text_theme.TextTheme, () => ['lerp']);
  dart.setGetterSignature(text_theme.TextTheme, () => ({
    __proto__: dart.getGetters(text_theme.TextTheme.__proto__),
    headline1: dart.nullable(text_style.TextStyle),
    headline2: dart.nullable(text_style.TextStyle),
    headline3: dart.nullable(text_style.TextStyle),
    headline4: dart.nullable(text_style.TextStyle),
    headline5: dart.nullable(text_style.TextStyle),
    headline6: dart.nullable(text_style.TextStyle),
    subtitle1: dart.nullable(text_style.TextStyle),
    subtitle2: dart.nullable(text_style.TextStyle),
    bodyText1: dart.nullable(text_style.TextStyle),
    bodyText2: dart.nullable(text_style.TextStyle),
    caption: dart.nullable(text_style.TextStyle),
    button: dart.nullable(text_style.TextStyle),
    overline: dart.nullable(text_style.TextStyle)
  }));
  dart.setLibraryUri(text_theme.TextTheme, I[3]);
  dart.setFieldSignature(text_theme.TextTheme, () => ({
    __proto__: dart.getFields(text_theme.TextTheme.__proto__),
    displayLarge: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    displayMedium: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    displaySmall: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    headlineLarge: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    headlineMedium: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    headlineSmall: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    titleLarge: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    titleMedium: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    titleSmall: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    bodyLarge: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    bodyMedium: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    bodySmall: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    labelLarge: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    labelMedium: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    labelSmall: dart.finalFieldType(dart.nullable(text_style.TextStyle))
  }));
  dart.defineExtensionMethods(text_theme.TextTheme, ['_equals']);
  dart.defineExtensionAccessors(text_theme.TextTheme, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/material/typography.dart", {
    "package:flutter/src/material/typography.dart": typography,
    "package:flutter/src/material/text_theme.dart": text_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typography.dart","text_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuCA;;;;;;;;;;;;MAlBK,gCAAM;;;MAOT,qCAAW;;;MAIX,+BAAK;;;MAML,8BAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuMY;;;;;;IAWA;;;;;;IAWA;;;;;;IAWA;;;;;;IAUA;;;;;;;;;;;;;;;;;UA/KE;UACL;UACA;UACA;UACA;UACA;AAEX,YAAO,AAAiB,QAAT,YAAa,KAAK,YAAY,KAAK;AAClD,YAAkB,qCAChB,QAAQ,EACR,KAAK,EAAE,KAAK,GACA,KAAZ,WAAW,EAAX,aAAe,8CACT,MAAN,KAAK,EAAL,cAAS,yCACJ,OAAL,IAAI,EAAJ,eAAQ;IAEZ;;;;;;;;;;;;UAakB;UACL;UACA;UACA;UACA;UACA;AAEX,YAAO,AAAiB,QAAT,YAAa,KAAK,YAAY,KAAK;AAClD,YAAkB,qCAChB,QAAQ,EACR,KAAK,EAAE,KAAK,GACA,KAAZ,WAAW,EAAX,aAAe,8CACT,MAAN,KAAK,EAAL,cAAS,yCACJ,OAAL,IAAI,EAAJ,eAAQ;IAEZ;;;;;;;;;;;;UAgBkB;UACL;UACA;UACA;UACA;UACA;AAEX,YAAO,AAAiB,QAAT,YAAa,KAAK,YAAY,KAAK;AAClD,YAAkB,qCAChB,QAAQ,EACR,KAAK,EAAE,KAAK,GACA,KAAZ,WAAW,EAAX,aAAe,8CACT,MAAN,KAAK,EAAL,cAAS,yCACJ,OAAL,IAAI,EAAJ,eAAQ;IAEZ;;;;;;;;;;yBAGkB,UACL,OACA,OACD,aACA,OACA;AAEV,YAAO,AAAiB,QAAT,YAAa,KAAK,YAAY,KAAK;AAClD,YAAO,AAAY,WAAD;AAClB,YAAO,AAAM,KAAD;AACZ,YAAO,AAAK,IAAD;AACX,cAAQ,QAAQ;;;AAEY,YAAxB,AAAM,KAAD,WAAL,QAAU,uCAAJ;AACkB,YAAxB,AAAM,KAAD,WAAL,QAAU,uCAAJ;AACN;;;;;AAG2B,YAA3B,AAAM,KAAD,WAAL,QAAU,0CAAJ;AACqB,YAA3B,AAAM,KAAD,WAAL,QAAU,0CAAJ;AACN;;;;AAEsB,YAAtB,AAAM,KAAD,WAAL,QAAU,qCAAJ;AACgB,YAAtB,AAAM,KAAD,WAAL,QAAU,qCAAJ;AACN;;;;AAE0B,YAA1B,AAAM,KAAD,WAAL,QAAU,yCAAJ;AACoB,YAA1B,AAAM,KAAD,WAAL,QAAU,yCAAJ;AACN;;;;AAEuB,YAAvB,AAAM,KAAD,WAAL,QAAU,sCAAJ;AACiB,YAAvB,AAAM,KAAD,WAAL,QAAU,sCAAJ;AACN;;;;AAEA;;;AAEJ,YAAkB,8BAAO,eAAL,KAAK,GAAQ,eAAL,KAAK,GAAG,WAAW,EAAE,KAAK,EAAE,IAAI;IAC9D;;;;;;;qBAgE0C;AACxC,YAAO,AAAS,QAAD;AACf,cAAQ,QAAQ;;;AAEZ,kBAAO;;;;AAEP,kBAAO;;;;AAEP,kBAAO;;;IAEb;;;UAKa;UACA;UACA;UACA;UACA;AAEX,YAAkB,+BACV,KAAN,KAAK,EAAL,aAAc,mBACR,MAAN,KAAK,EAAL,cAAc,oBACF,OAAZ,WAAW,EAAX,eAAoB,2BACd,OAAN,KAAK,EAAL,eAAc,qBACT,OAAL,IAAI,EAAJ,eAAa;IAEjB;gBAKkC,GAAc,GAAU;AACxD,YAAkB,8BACN,0BAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,GACxB,0BAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,GACxB,0BAAK,AAAE,CAAD,cAAc,AAAE,CAAD,cAAc,CAAC,GACpC,0BAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,GACxB,0BAAK,AAAE,CAAD,OAAO,AAAE,CAAD,OAAO,CAAC;IAEpC;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK;AACvB,cAAO;;AAET,WAAI,AAAM,KAAD,uBAAgB;AACvB,cAAO;;AAET,YAAa,AAKT,0BALG,KAAK,KACL,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAY,KAAb,qBAAgB,qBACrB,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAK,KAAN,cAAS;IACvB;;AAGoB,YAAO,kBACzB,YACA,YACA,kBACA,YACA;IACD;wBAGoD;AACd,MAA/B,0BAAoB,UAAU;AACnB,8BAA+B;AACqD,MAArG,AAAW,UAAD,KAAK,6CAA+B,SAAS,2BAAqB,AAAkB,iBAAD;AACQ,MAArG,AAAW,UAAD,KAAK,6CAA+B,SAAS,2BAAqB,AAAkB,iBAAD;AAC0B,MAAvH,AAAW,UAAD,KAAK,6CAA+B,eAAe,iCAA2B,AAAkB,iBAAD;AACJ,MAArG,AAAW,UAAD,KAAK,6CAA+B,SAAS,2BAAqB,AAAkB,iBAAD;AACK,MAAlG,AAAW,UAAD,KAAK,6CAA+B,QAAQ,0BAAoB,AAAkB,iBAAD;IAC7F;;uCA3IwB,OAAY,OAAY,aAAkB,OAAY;IAAtD;IAAY;IAAY;IAAkB;IAAY;UACnE,AAAM,KAAD;UACL,AAAM,KAAD;UACL,AAAY,WAAD;UACX,AAAM,KAAD;UACL,AAAK,IAAD;;EAAS;;;;;;;;;;;;;;;;;;;;;;MA2ID,uCAAiB;;;MAqBjB,uCAAiB;;;MAqBjB,kCAAY;;;MAqBZ,kCAAY;;;MAkBT,4CAAsB;;;MAMzB,mCAAa;;;MAqBb,mCAAa;;;MAuBb,oCAAc;;;MAuBd,oCAAc;;;MAuBd,sCAAgB;;;MAuBhB,sCAAgB;;;MAoBhB,qCAAe;;;MAuBf,qCAAe;;;MAoBf,+BAAS;;;MAuBT,+BAAS;;;MAmBT,8BAAQ;;;MAsBR,8BAAQ;;;MAuBR,qCAAe;;;MAOf,+BAAS;;;MAMT,8BAAQ;;;;;;;;;;;EAad;;;;;;MAEM,oCAAW;;;MAkBX,8BAAK;;;MAkBL,6BAAI;;;;;;;;;;;;;;;;;;;;;;;;IC5nBV;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAKA;;;;;;IAOA;;;;;;IAKA;;;;;;IASA;;;;;;IAOA;;;;;;IAOA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAGW;IAAY;;AAKZ;IAAa;;AAGb;IAAY;;AAGZ;IAAc;;AAId;IAAa;;AAIb;IAAU;;AAGV;IAAW;;AAGX;IAAU;;AAGV;IAAS;;AAGT;IAAU;;AAGZ;IAAS;;AAGV;IAAU;;AAKR;IAAU;;;UA2CxB;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;AAEX,YACG,AAAa,AAEgG,YAFjG,YAAY,AAAc,aAAD,YAAY,AAAa,YAAD,YAAY,AAAe,cAAD,YACpF,AAAc,aAAD,YAAY,AAAW,UAAD,YAAY,AAAY,WAAD,YAAY,AAAW,UAAD,YAChF,AAAU,SAAD,YAAY,AAAW,UAAD,YAAY,AAAU,SAAD,YAAY,AAAW,UAAD,YAAY,AAAW,UAAD,YACnG,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAU,SAAD,YACrE,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAU,SAAD,YACxE,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAQ,OAAD,YAAY,AAAO,MAAD,YAAY,AAAS,QAAD,6BAC3F;AAEF,YAAO,8CACmC,OAAb,KAAb,YAAY,EAAZ,aAAgB,SAAS,QAAZ,cAAqB,0CACN,QAAb,OAAd,aAAa,EAAb,eAAiB,SAAS,UAAZ,eAAqB,2CACV,QAAb,OAAb,YAAY,EAAZ,eAAgB,SAAS,UAAZ,eAAqB,2CACnB,OAAd,aAAa,EAAb,eAAsB,6CACO,QAAb,OAAf,cAAc,EAAd,eAAkB,SAAS,UAAZ,eAAqB,6CACV,QAAb,OAAd,aAAa,EAAb,eAAiB,SAAS,UAAZ,eAAqB,yCACd,SAAb,OAAX,UAAU,EAAV,eAAc,SAAS,UAAZ,gBAAqB,wCACN,SAAb,QAAZ,WAAW,EAAX,gBAAe,SAAS,WAAZ,gBAAqB,wCACV,SAAb,QAAX,UAAU,EAAV,gBAAc,SAAS,WAAZ,gBAAqB,sCACV,SAAb,QAAV,SAAS,EAAT,gBAAa,SAAS,WAAZ,gBAAqB,sCACN,SAAb,QAAX,UAAU,EAAV,gBAAc,SAAS,WAAZ,gBAAqB,sCACZ,SAAX,QAAV,SAAS,EAAT,gBAAa,OAAO,WAAV,gBAAmB,sCACP,SAAV,QAAX,UAAU,EAAV,gBAAc,MAAM,WAAT,gBAAkB,wCAChB,QAAZ,WAAW,EAAX,gBAAoB,wCACE,SAAZ,QAAX,UAAU,EAAV,gBAAc,QAAQ,WAAX,gBAAoB;IAE/C;UAqD2B;;AACzB,UAAI,AAAM,KAAD;AACP,cAAO;;AAET,YAAO,+BACiD,4CAAxC,OAAc,SAAM,AAAM,KAAD,iBAAzB,cAA2C,AAAM,KAAD,sCACL,kDAA1C,OAAe,WAAM,AAAM,KAAD,kBAA1B,eAA6C,AAAM,KAAD,uCACX,iDAAxC,OAAc,WAAM,AAAM,KAAD,iBAAzB,eAA2C,AAAM,KAAD,uCACL,kDAA1C,OAAe,WAAM,AAAM,KAAD,kBAA1B,eAA6C,AAAM,KAAD,yCACL,mDAA5C,OAAgB,WAAM,AAAM,KAAD,mBAA3B,eAA+C,AAAM,KAAD,yCACX,kDAA1C,OAAe,WAAM,AAAM,KAAD,kBAA1B,eAA6C,AAAM,KAAD,qCACjB,kDAApC,OAAY,YAAM,AAAM,KAAD,eAAvB,gBAAuC,AAAM,KAAD,oCACL,mDAAtC,OAAa,YAAM,AAAM,KAAD,gBAAxB,gBAAyC,AAAM,KAAD,oCACX,kDAApC,OAAY,YAAM,AAAM,KAAD,eAAvB,gBAAuC,AAAM,KAAD,kCACX,iDAAlC,OAAW,YAAM,AAAM,KAAD,cAAtB,gBAAqC,AAAM,KAAD,kCACL,kDAApC,OAAY,YAAM,AAAM,KAAD,eAAvB,gBAAuC,AAAM,KAAD,kCACX,iDAAlC,OAAW,YAAM,AAAM,KAAD,cAAtB,gBAAqC,AAAM,KAAD,kCACL,kDAApC,OAAY,YAAM,AAAM,KAAD,eAAvB,gBAAuC,AAAM,KAAD,oCACL,mDAAtC,OAAa,YAAM,AAAM,KAAD,gBAAxB,gBAAyC,AAAM,KAAD,oCACX,kDAApC,OAAY,YAAM,AAAM,KAAD,eAAvB,gBAAuC,AAAM,KAAD;IAE5D;;;UAaU;UACD;UACA;UACA;UACA;UACS;UACT;UACc;AAErB,YAAO,mFACS,OAAc,iBACnB,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,6DAEf,OAAe,kBACrB,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,6DAEhB,OAAc,mBACnB,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,+DAEf,OAAe,mBACrB,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,iEAEd,OAAgB,mBACvB,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,+DAEf,OAAe,mBACrB,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,yDAElB,OAAY,mBACf,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,2DAEjB,OAAa,mBACjB,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,yDAElB,OAAY,mBACf,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,yDAElB,OAAY,mBACf,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,uDAEnB,OAAW,mBACb,YAAY,cACP,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,2DAElB,OAAY,oBACf,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,6DAEjB,OAAa,oBACjB,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa,2DAElB,OAAY,oBACf,SAAS,cACJ,UAAU,mBACL,eAAe,mBACf,eAAe,cACpB,UAAU,kBACN,cAAc,iBACf,aAAa;IAGlC;gBAKiC,GAAc,GAAU;;AACvD,YAAO,AAAE,CAAD;AACR,YAAO,6CACmB,gCAAK,CAAC,eAAD,OAAG,yBAAc,CAAC,gBAAD,OAAG,mBAAc,CAAC,kBACvC,kCAAK,CAAC,iBAAD,OAAG,6BAAe,CAAC,iBAAD,OAAG,qBAAe,CAAC,iBAC3C,kCAAK,CAAC,iBAAD,OAAG,4BAAc,CAAC,iBAAD,OAAG,oBAAc,CAAC,kBACvC,kCAAK,CAAC,iBAAD,OAAG,6BAAe,CAAC,iBAAD,OAAG,qBAAe,CAAC,mBACzC,kCAAK,CAAC,iBAAD,OAAG,8BAAgB,CAAC,iBAAD,OAAG,sBAAgB,CAAC,kBAC7C,kCAAK,CAAC,iBAAD,OAAG,6BAAe,CAAC,iBAAD,OAAG,qBAAe,CAAC,eAC7C,mCAAK,CAAC,kBAAD,OAAG,4BAAY,CAAC,kBAAD,OAAG,mBAAY,CAAC,gBACnC,mCAAK,CAAC,kBAAD,OAAG,6BAAa,CAAC,kBAAD,OAAG,oBAAa,CAAC,eACvC,mCAAK,CAAC,kBAAD,OAAG,4BAAY,CAAC,kBAAD,OAAG,mBAAY,CAAC,cACrC,mCAAK,CAAC,kBAAD,OAAG,2BAAW,CAAC,kBAAD,OAAG,kBAAW,CAAC,eACjC,mCAAK,CAAC,kBAAD,OAAG,4BAAY,CAAC,kBAAD,OAAG,mBAAY,CAAC,cACrC,mCAAK,CAAC,kBAAD,OAAG,2BAAW,CAAC,kBAAD,OAAG,kBAAW,CAAC,eACjC,mCAAK,CAAC,kBAAD,OAAG,4BAAY,CAAC,kBAAD,OAAG,mBAAY,CAAC,gBACnC,mCAAK,CAAC,kBAAD,OAAG,6BAAa,CAAC,kBAAD,OAAG,oBAAa,CAAC,eACvC,mCAAK,CAAC,kBAAD,OAAG,4BAAY,CAAC,kBAAD,OAAG,mBAAY,CAAC;IAE9D;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK;AACvB,cAAO;;AAET,WAAI,AAAM,KAAD,uBAAgB;AACvB,cAAO;;AAET,YAAa,AAeX,yBAfK,KAAK,KACM,YAAb,mBAAgB,AAAM,KAAD,kBACP,YAAd,oBAAiB,AAAM,KAAD,mBACT,YAAb,mBAAgB,AAAM,KAAD,kBACP,YAAd,oBAAiB,AAAM,KAAD,mBACP,YAAf,qBAAkB,AAAM,KAAD,oBACT,YAAd,oBAAiB,AAAM,KAAD,mBACX,YAAX,iBAAc,AAAM,KAAD,gBACP,YAAZ,kBAAe,AAAM,KAAD,iBACT,YAAX,iBAAc,AAAM,KAAD,gBACT,YAAV,gBAAa,AAAM,KAAD,eACP,YAAX,iBAAc,AAAM,KAAD,gBACT,YAAV,gBAAa,AAAM,KAAD,eACP,YAAX,iBAAc,AAAM,KAAD,gBACP,YAAZ,kBAAe,AAAM,KAAD,iBACT,YAAX,iBAAc,AAAM,KAAD;IAC1B;;AAGoB,YAAO,kBACzB,mBACA,oBACA,mBACA,oBACA,qBACA,oBACA,iBACA,kBACA,iBACA,gBACA,iBACA,gBACA,iBACA,kBACA;IACD;wBAGoD;AACd,MAA/B,0BAAoB,UAAU;AACpB,yBAA0B,AAA8C,8CAAvB;AACoD,MAArH,AAAW,UAAD,KAAK,6CAA+B,gBAAgB,kCAA4B,AAAa,YAAD;AACkB,MAAxH,AAAW,UAAD,KAAK,6CAA+B,iBAAiB,mCAA6B,AAAa,YAAD;AACa,MAArH,AAAW,UAAD,KAAK,6CAA+B,gBAAgB,kCAA4B,AAAa,YAAD;AACkB,MAAxH,AAAW,UAAD,KAAK,6CAA+B,iBAAiB,mCAA6B,AAAa,YAAD;AACmB,MAA3H,AAAW,UAAD,KAAK,6CAA+B,kBAAkB,oCAA8B,AAAa,YAAD;AACc,MAAxH,AAAW,UAAD,KAAK,6CAA+B,iBAAiB,mCAA6B,AAAa,YAAD;AACO,MAA/G,AAAW,UAAD,KAAK,6CAA+B,cAAc,gCAA0B,AAAa,YAAD;AACgB,MAAlH,AAAW,UAAD,KAAK,6CAA+B,eAAe,iCAA2B,AAAa,YAAD;AACW,MAA/G,AAAW,UAAD,KAAK,6CAA+B,cAAc,gCAA0B,AAAa,YAAD;AACU,MAA5G,AAAW,UAAD,KAAK,6CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACe,MAA/G,AAAW,UAAD,KAAK,6CAA+B,cAAc,gCAA0B,AAAa,YAAD;AACU,MAA5G,AAAW,UAAD,KAAK,6CAA+B,aAAa,+BAAyB,AAAa,YAAD;AACe,MAA/G,AAAW,UAAD,KAAK,6CAA+B,cAAc,gCAA0B,AAAa,YAAD;AACgB,MAAlH,AAAW,UAAD,KAAK,6CAA+B,eAAe,iCAA2B,AAAa,YAAD;AACW,MAA/G,AAAW,UAAD,KAAK,6CAA+B,cAAc,gCAA0B,AAAa,YAAD;IACpG;;;;QAjmBa;QACA;QACA;QACN;QACM;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACN;QACM;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAxBN;IAUA;UAgBC,AAAa,AAEgG,YAFjG,YAAY,AAAc,aAAD,YAAY,AAAa,YAAD,YAAY,AAAe,cAAD,YACpF,AAAc,aAAD,YAAY,AAAW,UAAD,YAAY,AAAY,WAAD,YAAY,AAAW,UAAD,YAChF,AAAU,SAAD,YAAY,AAAW,UAAD,YAAY,AAAU,SAAD,YAAY,AAAW,UAAD,YAAY,AAAW,UAAD,YACnG,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAU,SAAD,YACrE,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAU,SAAD,YACxE,AAAU,SAAD,YAAY,AAAU,SAAD,YAAY,AAAQ,OAAD,YAAY,AAAO,MAAD,YAAY,AAAS,QAAD,6BAC3F;IAEW,uBAAe,KAAb,YAAY,EAAZ,aAAgB,SAAS;IAC1B,wBAAgB,MAAd,aAAa,EAAb,cAAiB,SAAS;IAC7B,uBAAe,OAAb,YAAY,EAAZ,eAAgB,SAAS;IACzB,yBAAiB,OAAf,cAAc,EAAd,eAAkB,SAAS;IAC9B,wBAAgB,OAAd,aAAa,EAAb,eAAiB,SAAS;IAC/B,qBAAa,OAAX,UAAU,EAAV,eAAc,SAAS;IACxB,sBAAc,OAAZ,WAAW,EAAX,eAAe,SAAS;IAC3B,qBAAa,OAAX,UAAU,EAAV,eAAc,SAAS;IAC1B,oBAAY,OAAV,SAAS,EAAT,eAAa,SAAS;IACvB,qBAAa,OAAX,UAAU,EAAV,eAAc,SAAS;IAC1B,oBAAY,OAAV,SAAS,EAAT,eAAa,OAAO;IACrB,qBAAa,OAAX,UAAU,EAAV,eAAc,MAAM;IACtB,qBAAa,QAAX,UAAU,EAAV,gBAAc,QAAQ","file":"../../../../../../../../../../packages/flutter/src/material/typography.dart.lib.js"}');
  // Exports:
  return {
    src__material__typography: typography,
    src__material__text_theme: text_theme
  };
}));

//# sourceMappingURL=typography.dart.lib.js.map
