define(['dart_sdk', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flex_color_scheme/src/flex_constants.dart', 'packages/flex_color_scheme/src/flex_extensions.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/material/bottom_sheet_theme.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/material/elevated_button.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/material/floating_action_button_theme.dart', 'packages/flutter/src/material/input_border.dart', 'packages/flutter/src/material/outlined_button.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flex_color_scheme/src/flex_key_color.dart', 'packages/flex_color_scheme/src/flex_scheme.dart', 'packages/flex_color_scheme/src/flex_scheme_data.dart', 'packages/flex_seed_scheme/src/flex_seed_scheme.dart', 'packages/flex_seed_scheme/src/flex_tones.dart', 'packages/flex_color_scheme/src/flex_scheme_surface_colors.dart', 'packages/flex_color_scheme/src/flex_surface_mode.dart', 'packages/flex_color_scheme/src/flex_alpha_values.dart', 'packages/flex_color_scheme/src/flex_scheme_on_colors.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/services/system_chrome.dart', 'packages/flutter/src/material/typography.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/widgets/title.dart'], (function load__packages__flex_color_scheme__src__flex_sub_themes_data_dart(dart_sdk, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flex_color_scheme__src__flex_constants$46dart, packages__flex_color_scheme__src__flex_extensions$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__material__bottom_sheet_theme$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__material__elevated_button$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__material__floating_action_button_theme$46dart, packages__flutter__src__material__input_border$46dart, packages__flutter__src__material__outlined_button$46dart, packages__flutter__src__rendering__box$46dart, packages__flex_color_scheme__src__flex_key_color$46dart, packages__flex_color_scheme__src__flex_scheme$46dart, packages__flex_color_scheme__src__flex_scheme_data$46dart, packages__flex_seed_scheme__src__flex_seed_scheme$46dart, packages__flex_seed_scheme__src__flex_tones$46dart, packages__flex_color_scheme__src__flex_scheme_surface_colors$46dart, packages__flex_color_scheme__src__flex_surface_mode$46dart, packages__flex_color_scheme__src__flex_alpha_values$46dart, packages__flex_color_scheme__src__flex_scheme_on_colors$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__services__system_chrome$46dart, packages__flutter__src__material__typography$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__widgets__title$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bottom_navigation_bar = packages__flutter__src__material__icon_button$46dart.src__material__bottom_navigation_bar;
  const navigation_bar = packages__flutter__src__material__icon_button$46dart.src__material__navigation_bar;
  const navigation_rail = packages__flutter__src__material__icon_button$46dart.src__material__navigation_rail;
  const button_theme = packages__flutter__src__material__icon_button$46dart.src__material__button_theme;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const bottom_navigation_bar_theme = packages__flutter__src__material__icon_button$46dart.src__material__bottom_navigation_bar_theme;
  const card_theme = packages__flutter__src__material__icon_button$46dart.src__material__card_theme;
  const checkbox_theme = packages__flutter__src__material__icon_button$46dart.src__material__checkbox_theme;
  const chip_theme = packages__flutter__src__material__icon_button$46dart.src__material__chip_theme;
  const dialog_theme = packages__flutter__src__material__icon_button$46dart.src__material__dialog_theme;
  const elevated_button_theme = packages__flutter__src__material__icon_button$46dart.src__material__elevated_button_theme;
  const button_style = packages__flutter__src__material__icon_button$46dart.src__material__button_style;
  const button_style_button = packages__flutter__src__material__icon_button$46dart.src__material__button_style_button;
  const input_decorator = packages__flutter__src__material__icon_button$46dart.src__material__input_decorator;
  const navigation_bar_theme = packages__flutter__src__material__icon_button$46dart.src__material__navigation_bar_theme;
  const navigation_rail_theme = packages__flutter__src__material__icon_button$46dart.src__material__navigation_rail_theme;
  const outlined_button_theme = packages__flutter__src__material__icon_button$46dart.src__material__outlined_button_theme;
  const popup_menu_theme = packages__flutter__src__material__icon_button$46dart.src__material__popup_menu_theme;
  const radio_theme = packages__flutter__src__material__icon_button$46dart.src__material__radio_theme;
  const snack_bar_theme = packages__flutter__src__material__icon_button$46dart.src__material__snack_bar_theme;
  const switch_theme = packages__flutter__src__material__icon_button$46dart.src__material__switch_theme;
  const text_button_theme = packages__flutter__src__material__icon_button$46dart.src__material__text_button_theme;
  const text_button = packages__flutter__src__material__icon_button$46dart.src__material__text_button;
  const time_picker_theme = packages__flutter__src__material__icon_button$46dart.src__material__time_picker_theme;
  const toggle_buttons_theme = packages__flutter__src__material__icon_button$46dart.src__material__toggle_buttons_theme;
  const color_scheme = packages__flutter__src__material__icon_button$46dart.src__material__color_scheme;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const app_bar_theme = packages__flutter__src__material__icon_button$46dart.src__material__app_bar_theme;
  const bottom_app_bar_theme = packages__flutter__src__material__icon_button$46dart.src__material__bottom_app_bar_theme;
  const text_selection_theme = packages__flutter__src__material__icon_button$46dart.src__material__text_selection_theme;
  const tab_bar_theme = packages__flutter__src__material__icon_button$46dart.src__material__tab_bar_theme;
  const tabs = packages__flutter__src__material__icon_button$46dart.src__material__tabs;
  const tooltip_theme = packages__flutter__src__material__icon_button$46dart.src__material__tooltip_theme;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const flex_constants = packages__flex_color_scheme__src__flex_constants$46dart.src__flex_constants;
  const flex_extensions = packages__flex_color_scheme__src__flex_extensions$46dart.src__flex_extensions;
  const colors$ = packages__flutter__src__material__colors$46dart.src__material__colors;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const bottom_sheet_theme = packages__flutter__src__material__bottom_sheet_theme$46dart.src__material__bottom_sheet_theme;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const elevated_button = packages__flutter__src__material__elevated_button$46dart.src__material__elevated_button;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const floating_action_button_theme = packages__flutter__src__material__floating_action_button_theme$46dart.src__material__floating_action_button_theme;
  const input_border = packages__flutter__src__material__input_border$46dart.src__material__input_border;
  const outlined_button = packages__flutter__src__material__outlined_button$46dart.src__material__outlined_button;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const flex_key_color = packages__flex_color_scheme__src__flex_key_color$46dart.src__flex_key_color;
  const flex_scheme = packages__flex_color_scheme__src__flex_scheme$46dart.src__flex_scheme;
  const flex_color = packages__flex_color_scheme__src__flex_scheme_data$46dart.src__flex_color;
  const flex_scheme_color = packages__flex_color_scheme__src__flex_scheme_data$46dart.src__flex_scheme_color;
  const flex_seed_scheme = packages__flex_seed_scheme__src__flex_seed_scheme$46dart.src__flex_seed_scheme;
  const flex_tones = packages__flex_seed_scheme__src__flex_tones$46dart.src__flex_tones;
  const flex_scheme_surface_colors = packages__flex_color_scheme__src__flex_scheme_surface_colors$46dart.src__flex_scheme_surface_colors;
  const flex_surface_mode = packages__flex_color_scheme__src__flex_surface_mode$46dart.src__flex_surface_mode;
  const flex_alpha_values = packages__flex_color_scheme__src__flex_alpha_values$46dart.src__flex_alpha_values;
  const flex_scheme_on_colors = packages__flex_color_scheme__src__flex_scheme_on_colors$46dart.src__flex_scheme_on_colors;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const system_chrome = packages__flutter__src__services__system_chrome$46dart.src__services__system_chrome;
  const typography = packages__flutter__src__material__typography$46dart.src__material__typography;
  const text_theme = packages__flutter__src__material__typography$46dart.src__material__text_theme;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  var flex_sub_themes_data = Object.create(dart.library);
  var flex_sub_themes = Object.create(dart.library);
  var flex_color_scheme = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_get = dartx._get;
  var $round = dartx.round;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    JSArrayOfObjectN: () => (T.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T.ObjectN())))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    DiagnosticsPropertyOfint: () => (T.DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))(),
    DiagnosticsPropertyOfdouble: () => (T.DiagnosticsPropertyOfdouble = dart.constFn(diagnostics.DiagnosticsProperty$(core.double)))(),
    DiagnosticsPropertyOfSize: () => (T.DiagnosticsPropertyOfSize = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Size)))(),
    DiagnosticsPropertyOfEdgeInsetsGeometry: () => (T.DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))(),
    EnumPropertyOfSchemeColor: () => (T.EnumPropertyOfSchemeColor = dart.constFn(diagnostics.EnumProperty$(flex_sub_themes.SchemeColor)))(),
    EnumPropertyOfFlexInputBorderType: () => (T.EnumPropertyOfFlexInputBorderType = dart.constFn(diagnostics.EnumProperty$(flex_sub_themes.FlexInputBorderType)))(),
    DiagnosticsPropertyOfTextStyle: () => (T.DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))(),
    DiagnosticsPropertyOfSchemeColor: () => (T.DiagnosticsPropertyOfSchemeColor = dart.constFn(diagnostics.DiagnosticsProperty$(flex_sub_themes.SchemeColor)))(),
    EnumPropertyOfdouble: () => (T.EnumPropertyOfdouble = dart.constFn(diagnostics.EnumProperty$(core.double)))(),
    EnumPropertyOfBottomNavigationBarType: () => (T.EnumPropertyOfBottomNavigationBarType = dart.constFn(diagnostics.EnumProperty$(bottom_navigation_bar.BottomNavigationBarType)))(),
    EnumPropertyOfBottomNavigationBarLandscapeLayout: () => (T.EnumPropertyOfBottomNavigationBarLandscapeLayout = dart.constFn(diagnostics.EnumProperty$(bottom_navigation_bar.BottomNavigationBarLandscapeLayout)))(),
    EnumPropertyOfNavigationDestinationLabelBehavior: () => (T.EnumPropertyOfNavigationDestinationLabelBehavior = dart.constFn(diagnostics.EnumProperty$(navigation_bar.NavigationDestinationLabelBehavior)))(),
    EnumPropertyOfNavigationRailLabelType: () => (T.EnumPropertyOfNavigationRailLabelType = dart.constFn(diagnostics.EnumProperty$(navigation_rail.NavigationRailLabelType)))(),
    SetOfMaterialState: () => (T.SetOfMaterialState = dart.constFn(core.Set$(material_state.MaterialState)))(),
    SetOfMaterialStateToColor: () => (T.SetOfMaterialStateToColor = dart.constFn(dart.fnType(ui.Color, [T.SetOfMaterialState()])))(),
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(ui.Color)))(),
    SetOfMaterialStateToColorN: () => (T.SetOfMaterialStateToColorN = dart.constFn(dart.fnType(T.ColorN(), [T.SetOfMaterialState()])))(),
    SetOfMaterialStateToTextStyle: () => (T.SetOfMaterialStateToTextStyle = dart.constFn(dart.fnType(text_style.TextStyle, [T.SetOfMaterialState()])))(),
    SetOfMaterialStateToIconThemeData: () => (T.SetOfMaterialStateToIconThemeData = dart.constFn(dart.fnType(icon_theme_data.IconThemeData, [T.SetOfMaterialState()])))(),
    BorderSideN: () => (T.BorderSideN = dart.constFn(dart.nullable(borders.BorderSide)))(),
    SetOfMaterialStateToBorderSide: () => (T.SetOfMaterialStateToBorderSide = dart.constFn(dart.fnType(borders.BorderSide, [T.SetOfMaterialState()])))(),
    VoidToColor: () => (T.VoidToColor = dart.constFn(dart.fnType(ui.Color, [])))(),
    ColorTodynamic: () => (T.ColorTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ui.Color])))(),
    IdentityMapOfint$Color: () => (T.IdentityMapOfint$Color = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Color)))(),
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    VoidToEdgeInsets: () => (T.VoidToEdgeInsets = dart.constFn(dart.fnType(edge_insets.EdgeInsets, [])))(),
    DiagnosticsPropertyOfColorScheme: () => (T.DiagnosticsPropertyOfColorScheme = dart.constFn(diagnostics.DiagnosticsProperty$(color_scheme.ColorScheme)))(),
    EnumPropertyOfBrightness: () => (T.EnumPropertyOfBrightness = dart.constFn(diagnostics.EnumProperty$(ui.Brightness)))(),
    EnumPropertyOfFlexTabBarStyle: () => (T.EnumPropertyOfFlexTabBarStyle = dart.constFn(diagnostics.EnumProperty$(flex_color_scheme.FlexTabBarStyle)))(),
    EnumPropertyOfVisualDensity: () => (T.EnumPropertyOfVisualDensity = dart.constFn(diagnostics.EnumProperty$(theme_data.VisualDensity)))(),
    DiagnosticsPropertyOfTextTheme: () => (T.DiagnosticsPropertyOfTextTheme = dart.constFn(diagnostics.DiagnosticsProperty$(text_theme.TextTheme)))(),
    DiagnosticsPropertyOfString: () => (T.DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))(),
    EnumPropertyOfTargetPlatform: () => (T.EnumPropertyOfTargetPlatform = dart.constFn(diagnostics.EnumProperty$(platform.TargetPlatform)))(),
    DiagnosticsPropertyOfTypography: () => (T.DiagnosticsPropertyOfTypography = dart.constFn(diagnostics.DiagnosticsProperty$(typography.Typography)))(),
    DiagnosticsPropertyOfFlexSubThemesData: () => (T.DiagnosticsPropertyOfFlexSubThemesData = dart.constFn(diagnostics.DiagnosticsProperty$(flex_sub_themes_data.FlexSubThemesData)))(),
    IterablePropertyOfThemeExtension: () => (T.IterablePropertyOfThemeExtension = dart.constFn(diagnostics.IterableProperty$(theme_data.ThemeExtension)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: flex_sub_themes.FlexInputBorderType.prototype,
        [_Enum__name]: "outline",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: bottom_navigation_bar.BottomNavigationBarType.prototype,
        [_Enum__name]: "fixed",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: navigation_bar.NavigationDestinationLabelBehavior.prototype,
        [_Enum__name]: "alwaysShow",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: navigation_rail.NavigationRailLabelType.prototype,
        [_Enum__name]: "all",
        [_Enum_index]: 2
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: flex_sub_themes.FlexInputBorderType.prototype,
        [_Enum__name]: "underline",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.constList([C[0] || CT.C0, C[5] || CT.C5], flex_sub_themes.FlexInputBorderType);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "primary",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onPrimary",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "primaryContainer",
        [_Enum_index]: 2
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onPrimaryContainer",
        [_Enum_index]: 3
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "secondary",
        [_Enum_index]: 4
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onSecondary",
        [_Enum_index]: 5
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "secondaryContainer",
        [_Enum_index]: 6
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onSecondaryContainer",
        [_Enum_index]: 7
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "tertiary",
        [_Enum_index]: 8
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onTertiary",
        [_Enum_index]: 9
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "tertiaryContainer",
        [_Enum_index]: 10
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onTertiaryContainer",
        [_Enum_index]: 11
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "error",
        [_Enum_index]: 12
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onError",
        [_Enum_index]: 13
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "errorContainer",
        [_Enum_index]: 14
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onErrorContainer",
        [_Enum_index]: 15
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "background",
        [_Enum_index]: 16
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onBackground",
        [_Enum_index]: 17
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "surface",
        [_Enum_index]: 18
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onSurface",
        [_Enum_index]: 19
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "surfaceVariant",
        [_Enum_index]: 20
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onSurfaceVariant",
        [_Enum_index]: 21
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "outline",
        [_Enum_index]: 22
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "shadow",
        [_Enum_index]: 23
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "inverseSurface",
        [_Enum_index]: 24
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "onInverseSurface",
        [_Enum_index]: 25
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "inversePrimary",
        [_Enum_index]: 26
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: flex_sub_themes.SchemeColor.prototype,
        [_Enum__name]: "surfaceTint",
        [_Enum_index]: 27
      });
    },
    get C6() {
      return C[6] = dart.constList([C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17, C[18] || CT.C18, C[19] || CT.C19, C[20] || CT.C20, C[21] || CT.C21, C[22] || CT.C22, C[23] || CT.C23, C[24] || CT.C24, C[25] || CT.C25, C[26] || CT.C26, C[27] || CT.C27, C[28] || CT.C28, C[29] || CT.C29, C[30] || CT.C30, C[31] || CT.C31, C[32] || CT.C32, C[33] || CT.C33, C[34] || CT.C34], flex_sub_themes.SchemeColor);
    },
    get C35() {
      return C[35] = dart.const({
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
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAlias",
        [_Enum_index]: 2
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 24,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 24
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1375731712
      });
    },
    get C40() {
      return C[40] = dart.const({
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
        [TextStyle_height]: 0,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 0,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: input_decorator.FloatingLabelAlignment.prototype,
        [FloatingLabelAlignment__x]: -1
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: input_decorator.FloatingLabelBehavior.prototype,
        [_Enum__name]: "auto",
        [_Enum_index]: 1
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: input_decorator.InputDecorationTheme.prototype,
        [InputDecorationTheme_constraints]: null,
        [InputDecorationTheme_alignLabelWithHint]: false,
        [InputDecorationTheme_border]: null,
        [InputDecorationTheme_enabledBorder]: null,
        [InputDecorationTheme_disabledBorder]: null,
        [InputDecorationTheme_focusedErrorBorder]: null,
        [InputDecorationTheme_focusedBorder]: null,
        [InputDecorationTheme_errorBorder]: null,
        [InputDecorationTheme_hoverColor]: null,
        [InputDecorationTheme_focusColor]: null,
        [InputDecorationTheme_fillColor]: null,
        [InputDecorationTheme_filled]: false,
        [InputDecorationTheme_counterStyle]: null,
        [InputDecorationTheme_suffixIconColor]: null,
        [InputDecorationTheme_suffixStyle]: null,
        [InputDecorationTheme_prefixIconColor]: null,
        [InputDecorationTheme_prefixStyle]: null,
        [InputDecorationTheme_iconColor]: null,
        [InputDecorationTheme_isCollapsed]: false,
        [InputDecorationTheme_contentPadding]: null,
        [InputDecorationTheme_isDense]: false,
        [InputDecorationTheme_floatingLabelAlignment]: C[42] || CT.C42,
        [InputDecorationTheme_floatingLabelBehavior]: C[43] || CT.C43,
        [InputDecorationTheme_errorMaxLines]: null,
        [InputDecorationTheme_errorStyle]: null,
        [InputDecorationTheme_hintStyle]: null,
        [InputDecorationTheme_helperMaxLines]: null,
        [InputDecorationTheme_helperStyle]: null,
        [InputDecorationTheme_floatingLabelStyle]: null,
        [InputDecorationTheme_labelStyle]: null
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: flex_color_scheme.FlexAppBarStyle.prototype,
        [_Enum__name]: "primary",
        [_Enum_index]: 0
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: flex_color_scheme.FlexAppBarStyle.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 1
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: flex_color_scheme.FlexAppBarStyle.prototype,
        [_Enum__name]: "surface",
        [_Enum_index]: 2
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: flex_color_scheme.FlexAppBarStyle.prototype,
        [_Enum__name]: "background",
        [_Enum_index]: 3
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: flex_color_scheme.FlexAppBarStyle.prototype,
        [_Enum__name]: "custom",
        [_Enum_index]: 4
      });
    },
    get C44() {
      return C[44] = dart.constList([C[45] || CT.C45, C[46] || CT.C46, C[47] || CT.C47, C[48] || CT.C48, C[49] || CT.C49], flex_color_scheme.FlexAppBarStyle);
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: flex_color_scheme.FlexSystemNavBarStyle.prototype,
        [_Enum__name]: "system",
        [_Enum_index]: 0
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: flex_color_scheme.FlexSystemNavBarStyle.prototype,
        [_Enum__name]: "surface",
        [_Enum_index]: 1
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: flex_color_scheme.FlexSystemNavBarStyle.prototype,
        [_Enum__name]: "background",
        [_Enum_index]: 2
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: flex_color_scheme.FlexSystemNavBarStyle.prototype,
        [_Enum__name]: "scaffoldBackground",
        [_Enum_index]: 3
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: flex_color_scheme.FlexSystemNavBarStyle.prototype,
        [_Enum__name]: "transparent",
        [_Enum_index]: 4
      });
    },
    get C50() {
      return C[50] = dart.constList([C[51] || CT.C51, C[52] || CT.C52, C[53] || CT.C53, C[54] || CT.C54, C[55] || CT.C55], flex_color_scheme.FlexSystemNavBarStyle);
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: flex_color_scheme.FlexTabBarStyle.prototype,
        [_Enum__name]: "forAppBar",
        [_Enum_index]: 0
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: flex_color_scheme.FlexTabBarStyle.prototype,
        [_Enum__name]: "forBackground",
        [_Enum_index]: 1
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: flex_color_scheme.FlexTabBarStyle.prototype,
        [_Enum__name]: "flutterDefault",
        [_Enum_index]: 2
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: flex_color_scheme.FlexTabBarStyle.prototype,
        [_Enum__name]: "universal",
        [_Enum_index]: 3
      });
    },
    get C56() {
      return C[56] = dart.constList([C[57] || CT.C57, C[58] || CT.C58, C[59] || CT.C59, C[60] || CT.C60], flex_color_scheme.FlexTabBarStyle);
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: flex_key_color.FlexKeyColors.prototype,
        [FlexKeyColors_keepTertiaryContainer]: false,
        [FlexKeyColors_keepSecondaryContainer]: false,
        [FlexKeyColors_keepPrimaryContainer]: false,
        [FlexKeyColors_keepTertiary]: false,
        [FlexKeyColors_keepSecondary]: false,
        [FlexKeyColors_keepPrimary]: false,
        [FlexKeyColors_useTertiary]: false,
        [FlexKeyColors_useSecondary]: false,
        [FlexKeyColors_useKeyColors]: false
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: flex_sub_themes_data.FlexSubThemesData.prototype,
        [navigationRailGroupAlignment$]: null,
        [navigationRailLabelType$]: C[3] || CT.C3,
        [navigationRailElevation$]: 0,
        [navigationRailOpacity$]: 1,
        [navigationRailBackgroundSchemeColor$]: null,
        [navigationRailIndicatorOpacity$]: null,
        [navigationRailIndicatorSchemeColor$]: null,
        [navigationRailUseIndicator$]: true,
        [navigationRailMutedUnselectedIcon$]: true,
        [navigationRailUnselectedIconSchemeColor$]: null,
        [navigationRailSelectedIconSchemeColor$]: null,
        [navigationRailUnselectedIconSize$]: null,
        [navigationRailSelectedIconSize$]: null,
        [navigationRailMutedUnselectedLabel$]: true,
        [navigationRailUnselectedLabelSchemeColor$]: null,
        [navigationRailSelectedLabelSchemeColor$]: null,
        [navigationRailUnselectedLabelSize$]: null,
        [navigationRailSelectedLabelSize$]: null,
        [navigationRailLabelTextStyle$]: null,
        [navigationBarLabelBehavior$]: C[2] || CT.C2,
        [navigationBarOpacity$]: 1,
        [navigationBarHeight$]: null,
        [navigationBarBackgroundSchemeColor$]: null,
        [navigationBarIndicatorOpacity$]: null,
        [navigationBarIndicatorSchemeColor$]: null,
        [navigationBarMutedUnselectedIcon$]: true,
        [navigationBarUnselectedIconSchemeColor$]: null,
        [navigationBarSelectedIconSchemeColor$]: null,
        [navigationBarUnselectedIconSize$]: null,
        [navigationBarSelectedIconSize$]: null,
        [navigationBarMutedUnselectedLabel$]: true,
        [navigationBarUnselectedLabelSchemeColor$]: null,
        [navigationBarSelectedLabelSchemeColor$]: null,
        [navigationBarUnselectedLabelSize$]: null,
        [navigationBarSelectedLabelSize$]: null,
        [navigationBarLabelTextStyle$]: null,
        [bottomNavigationBarLandscapeLayout$]: null,
        [bottomNavigationBarType$]: C[1] || CT.C1,
        [bottomNavigationBarShowUnselectedLabels$]: true,
        [bottomNavigationBarShowSelectedLabels$]: true,
        [bottomNavigationBarElevation$]: 0,
        [bottomNavigationBarOpacity$]: 1,
        [bottomNavigationBarBackgroundSchemeColor$]: null,
        [bottomNavigationBarMutedUnselectedIcon$]: true,
        [bottomNavigationBarUnselectedIconSchemeColor$]: null,
        [bottomNavigationBarSelectedIconSchemeColor$]: null,
        [bottomNavigationBarUnselectedIconSize$]: null,
        [bottomNavigationBarSelectedIconSize$]: null,
        [bottomNavigationBarMutedUnselectedLabel$]: true,
        [bottomNavigationBarUnselectedLabelSchemeColor$]: null,
        [bottomNavigationBarSelectedLabelSchemeColor$]: null,
        [bottomNavigationBarUnselectedLabelSize$]: null,
        [bottomNavigationBarSelectedLabelSize$]: null,
        [bottomNavigationBarLabelTextStyle$]: null,
        [bottomSheetModalElevation$]: 8,
        [bottomSheetElevation$]: 4,
        [bottomSheetRadius$]: null,
        [tabBarIndicatorSchemeColor$]: null,
        [tabBarItemSchemeColor$]: null,
        [appBarCenterTitle$]: null,
        [appBarBackgroundSchemeColor$]: null,
        [snackBarBackgroundSchemeColor$]: null,
        [snackBarElevation$]: 4,
        [timePickerDialogRadius$]: null,
        [dialogBackgroundSchemeColor$]: null,
        [dialogElevation$]: 6,
        [dialogRadius$]: null,
        [popupMenuOpacity$]: 1,
        [popupMenuElevation$]: 3,
        [popupMenuRadius$]: null,
        [cardElevation$]: 0,
        [cardRadius$]: null,
        [chipSchemeColor$]: null,
        [chipRadius$]: null,
        [fabSchemeColor$]: null,
        [fabUseShape$]: false,
        [fabRadius$]: null,
        [inputDecoratorUnfocusedBorderIsColored$]: true,
        [inputDecoratorUnfocusedHasBorder$]: true,
        [inputDecoratorBorderType$]: C[0] || CT.C0,
        [inputDecoratorFillColor$]: null,
        [inputDecoratorIsFilled$]: true,
        [inputDecoratorSchemeColor$]: null,
        [inputDecoratorRadius$]: null,
        [unselectedToggleIsColored$]: false,
        [radioSchemeColor$]: null,
        [checkboxSchemeColor$]: null,
        [switchSchemeColor$]: null,
        [toggleButtonsSchemeColor$]: null,
        [materialButtonSchemeColor$]: null,
        [outlinedButtonOutlineSchemeColor$]: null,
        [outlinedButtonSchemeColor$]: null,
        [elevatedButtonSecondarySchemeColor$]: null,
        [elevatedButtonSchemeColor$]: null,
        [textButtonSchemeColor$]: null,
        [toggleButtonsRadius$]: null,
        [outlinedButtonRadius$]: null,
        [elevatedButtonElevation$]: null,
        [elevatedButtonRadius$]: null,
        [textButtonRadius$]: null,
        [thinBorderWidth$]: null,
        [thickBorderWidth$]: null,
        [buttonPadding$]: null,
        [buttonMinSize$]: null,
        [defaultRadius$]: null,
        [useTextTheme$]: true,
        [blendTextTheme$]: true,
        [useFlutterDefaults$]: false,
        [blendOnColors$]: true,
        [blendOnLevel$]: 0,
        [interactionEffects$]: true
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: flex_alpha_values.FlexAlphaValues.prototype,
        [FlexAlphaValues_scaffoldAlpha]: 0,
        [FlexAlphaValues_backgroundAlpha]: 0,
        [FlexAlphaValues_dialogAlpha]: 0,
        [FlexAlphaValues_inverseSurfaceAlpha]: 0,
        [FlexAlphaValues_surfaceVariantAlpha]: 0,
        [FlexAlphaValues_surfaceAlpha]: 0,
        [FlexAlphaValues_errorContainerAlpha]: 0,
        [FlexAlphaValues_errorAlpha]: 0,
        [FlexAlphaValues_tertiaryContainerAlpha]: 0,
        [FlexAlphaValues_tertiaryAlpha]: 0,
        [FlexAlphaValues_secondaryContainerAlpha]: 0,
        [FlexAlphaValues_secondaryAlpha]: 0,
        [FlexAlphaValues_primaryContainerAlpha]: 0,
        [FlexAlphaValues_primaryAlpha]: 0
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281084972.0
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292730333.0
      });
    },
    get C73() {
      return C[73] = dart.constList([0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], core.double);
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 8
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 16
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1073741824
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 6,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 6,
        [EdgeInsets_left]: 12
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[79] || CT.C79,
        [BorderRadius_bottomLeft]: C[79] || CT.C79,
        [BorderRadius_topRight]: C[79] || CT.C79,
        [BorderRadius_topLeft]: C[79] || CT.C79
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3980674116.0
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4043111676.0
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[83] || CT.C83,
        [BorderRadius_bottomLeft]: C[83] || CT.C83,
        [BorderRadius_topRight]: C[83] || CT.C83,
        [BorderRadius_topLeft]: C[83] || CT.C83
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    }
  }, false);
  var C = Array(85).fill(void 0);
  var I = [
    "package:flex_color_scheme/src/flex_sub_themes_data.dart",
    "package:flex_color_scheme/src/flex_sub_themes.dart",
    "package:flex_color_scheme/src/flex_color_scheme.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flex_color_scheme-6.0.1/lib/src/flex_color_scheme.dart"
  ];
  var interactionEffects$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.interactionEffects");
  var blendOnLevel$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.blendOnLevel");
  var blendOnColors$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.blendOnColors");
  var useFlutterDefaults$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.useFlutterDefaults");
  var blendTextTheme$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.blendTextTheme");
  var useTextTheme$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.useTextTheme");
  var defaultRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.defaultRadius");
  var buttonMinSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.buttonMinSize");
  var buttonPadding$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.buttonPadding");
  var thickBorderWidth$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.thickBorderWidth");
  var thinBorderWidth$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.thinBorderWidth");
  var textButtonRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.textButtonRadius");
  var elevatedButtonRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.elevatedButtonRadius");
  var elevatedButtonElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.elevatedButtonElevation");
  var outlinedButtonRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.outlinedButtonRadius");
  var toggleButtonsRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.toggleButtonsRadius");
  var textButtonSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.textButtonSchemeColor");
  var elevatedButtonSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.elevatedButtonSchemeColor");
  var elevatedButtonSecondarySchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.elevatedButtonSecondarySchemeColor");
  var outlinedButtonSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.outlinedButtonSchemeColor");
  var outlinedButtonOutlineSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.outlinedButtonOutlineSchemeColor");
  var materialButtonSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.materialButtonSchemeColor");
  var toggleButtonsSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.toggleButtonsSchemeColor");
  var switchSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.switchSchemeColor");
  var checkboxSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.checkboxSchemeColor");
  var radioSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.radioSchemeColor");
  var unselectedToggleIsColored$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.unselectedToggleIsColored");
  var inputDecoratorRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.inputDecoratorRadius");
  var inputDecoratorSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.inputDecoratorSchemeColor");
  var inputDecoratorIsFilled$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.inputDecoratorIsFilled");
  var inputDecoratorFillColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.inputDecoratorFillColor");
  var inputDecoratorBorderType$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.inputDecoratorBorderType");
  var inputDecoratorUnfocusedHasBorder$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.inputDecoratorUnfocusedHasBorder");
  var inputDecoratorUnfocusedBorderIsColored$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.inputDecoratorUnfocusedBorderIsColored");
  var fabRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.fabRadius");
  var fabUseShape$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.fabUseShape");
  var fabSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.fabSchemeColor");
  var chipRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.chipRadius");
  var chipSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.chipSchemeColor");
  var cardRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.cardRadius");
  var cardElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.cardElevation");
  var popupMenuRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.popupMenuRadius");
  var popupMenuElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.popupMenuElevation");
  var popupMenuOpacity$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.popupMenuOpacity");
  var dialogRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.dialogRadius");
  var dialogElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.dialogElevation");
  var dialogBackgroundSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.dialogBackgroundSchemeColor");
  var timePickerDialogRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.timePickerDialogRadius");
  var snackBarElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.snackBarElevation");
  var snackBarBackgroundSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.snackBarBackgroundSchemeColor");
  var appBarBackgroundSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.appBarBackgroundSchemeColor");
  var appBarCenterTitle$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.appBarCenterTitle");
  var tabBarItemSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.tabBarItemSchemeColor");
  var tabBarIndicatorSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.tabBarIndicatorSchemeColor");
  var bottomSheetRadius$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomSheetRadius");
  var bottomSheetElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomSheetElevation");
  var bottomSheetModalElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomSheetModalElevation");
  var bottomNavigationBarLabelTextStyle$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarLabelTextStyle");
  var bottomNavigationBarSelectedLabelSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarSelectedLabelSize");
  var bottomNavigationBarUnselectedLabelSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarUnselectedLabelSize");
  var bottomNavigationBarSelectedLabelSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarSelectedLabelSchemeColor");
  var bottomNavigationBarUnselectedLabelSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarUnselectedLabelSchemeColor");
  var bottomNavigationBarMutedUnselectedLabel$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarMutedUnselectedLabel");
  var bottomNavigationBarSelectedIconSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarSelectedIconSize");
  var bottomNavigationBarUnselectedIconSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarUnselectedIconSize");
  var bottomNavigationBarSelectedIconSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarSelectedIconSchemeColor");
  var bottomNavigationBarUnselectedIconSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarUnselectedIconSchemeColor");
  var bottomNavigationBarMutedUnselectedIcon$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarMutedUnselectedIcon");
  var bottomNavigationBarBackgroundSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarBackgroundSchemeColor");
  var bottomNavigationBarOpacity$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarOpacity");
  var bottomNavigationBarElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarElevation");
  var bottomNavigationBarShowSelectedLabels$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarShowSelectedLabels");
  var bottomNavigationBarShowUnselectedLabels$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarShowUnselectedLabels");
  var bottomNavigationBarType$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarType");
  var bottomNavigationBarLandscapeLayout$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.bottomNavigationBarLandscapeLayout");
  var navigationBarLabelTextStyle$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarLabelTextStyle");
  var navigationBarSelectedLabelSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarSelectedLabelSize");
  var navigationBarUnselectedLabelSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarUnselectedLabelSize");
  var navigationBarSelectedLabelSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarSelectedLabelSchemeColor");
  var navigationBarUnselectedLabelSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarUnselectedLabelSchemeColor");
  var navigationBarMutedUnselectedLabel$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarMutedUnselectedLabel");
  var navigationBarSelectedIconSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarSelectedIconSize");
  var navigationBarUnselectedIconSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarUnselectedIconSize");
  var navigationBarSelectedIconSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarSelectedIconSchemeColor");
  var navigationBarUnselectedIconSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarUnselectedIconSchemeColor");
  var navigationBarMutedUnselectedIcon$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarMutedUnselectedIcon");
  var navigationBarIndicatorSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarIndicatorSchemeColor");
  var navigationBarIndicatorOpacity$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarIndicatorOpacity");
  var navigationBarBackgroundSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarBackgroundSchemeColor");
  var navigationBarHeight$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarHeight");
  var navigationBarOpacity$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarOpacity");
  var navigationBarLabelBehavior$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationBarLabelBehavior");
  var navigationRailLabelTextStyle$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailLabelTextStyle");
  var navigationRailSelectedLabelSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailSelectedLabelSize");
  var navigationRailUnselectedLabelSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailUnselectedLabelSize");
  var navigationRailSelectedLabelSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailSelectedLabelSchemeColor");
  var navigationRailUnselectedLabelSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailUnselectedLabelSchemeColor");
  var navigationRailMutedUnselectedLabel$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailMutedUnselectedLabel");
  var navigationRailSelectedIconSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailSelectedIconSize");
  var navigationRailUnselectedIconSize$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailUnselectedIconSize");
  var navigationRailSelectedIconSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailSelectedIconSchemeColor");
  var navigationRailUnselectedIconSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailUnselectedIconSchemeColor");
  var navigationRailMutedUnselectedIcon$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailMutedUnselectedIcon");
  var navigationRailUseIndicator$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailUseIndicator");
  var navigationRailIndicatorSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailIndicatorSchemeColor");
  var navigationRailIndicatorOpacity$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailIndicatorOpacity");
  var navigationRailBackgroundSchemeColor$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailBackgroundSchemeColor");
  var navigationRailOpacity$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailOpacity");
  var navigationRailElevation$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailElevation");
  var navigationRailLabelType$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailLabelType");
  var navigationRailGroupAlignment$ = dart.privateName(flex_sub_themes_data, "FlexSubThemesData.navigationRailGroupAlignment");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  flex_sub_themes_data.FlexSubThemesData = class FlexSubThemesData extends Object_Diagnosticable$36 {
    get interactionEffects() {
      return this[interactionEffects$];
    }
    set interactionEffects(value) {
      super.interactionEffects = value;
    }
    get blendOnLevel() {
      return this[blendOnLevel$];
    }
    set blendOnLevel(value) {
      super.blendOnLevel = value;
    }
    get blendOnColors() {
      return this[blendOnColors$];
    }
    set blendOnColors(value) {
      super.blendOnColors = value;
    }
    get useFlutterDefaults() {
      return this[useFlutterDefaults$];
    }
    set useFlutterDefaults(value) {
      super.useFlutterDefaults = value;
    }
    get blendTextTheme() {
      return this[blendTextTheme$];
    }
    set blendTextTheme(value) {
      super.blendTextTheme = value;
    }
    get useTextTheme() {
      return this[useTextTheme$];
    }
    set useTextTheme(value) {
      super.useTextTheme = value;
    }
    get defaultRadius() {
      return this[defaultRadius$];
    }
    set defaultRadius(value) {
      super.defaultRadius = value;
    }
    get buttonMinSize() {
      return this[buttonMinSize$];
    }
    set buttonMinSize(value) {
      super.buttonMinSize = value;
    }
    get buttonPadding() {
      return this[buttonPadding$];
    }
    set buttonPadding(value) {
      super.buttonPadding = value;
    }
    get thickBorderWidth() {
      return this[thickBorderWidth$];
    }
    set thickBorderWidth(value) {
      super.thickBorderWidth = value;
    }
    get thinBorderWidth() {
      return this[thinBorderWidth$];
    }
    set thinBorderWidth(value) {
      super.thinBorderWidth = value;
    }
    get textButtonRadius() {
      return this[textButtonRadius$];
    }
    set textButtonRadius(value) {
      super.textButtonRadius = value;
    }
    get elevatedButtonRadius() {
      return this[elevatedButtonRadius$];
    }
    set elevatedButtonRadius(value) {
      super.elevatedButtonRadius = value;
    }
    get elevatedButtonElevation() {
      return this[elevatedButtonElevation$];
    }
    set elevatedButtonElevation(value) {
      super.elevatedButtonElevation = value;
    }
    get outlinedButtonRadius() {
      return this[outlinedButtonRadius$];
    }
    set outlinedButtonRadius(value) {
      super.outlinedButtonRadius = value;
    }
    get toggleButtonsRadius() {
      return this[toggleButtonsRadius$];
    }
    set toggleButtonsRadius(value) {
      super.toggleButtonsRadius = value;
    }
    get textButtonSchemeColor() {
      return this[textButtonSchemeColor$];
    }
    set textButtonSchemeColor(value) {
      super.textButtonSchemeColor = value;
    }
    get elevatedButtonSchemeColor() {
      return this[elevatedButtonSchemeColor$];
    }
    set elevatedButtonSchemeColor(value) {
      super.elevatedButtonSchemeColor = value;
    }
    get elevatedButtonSecondarySchemeColor() {
      return this[elevatedButtonSecondarySchemeColor$];
    }
    set elevatedButtonSecondarySchemeColor(value) {
      super.elevatedButtonSecondarySchemeColor = value;
    }
    get outlinedButtonSchemeColor() {
      return this[outlinedButtonSchemeColor$];
    }
    set outlinedButtonSchemeColor(value) {
      super.outlinedButtonSchemeColor = value;
    }
    get outlinedButtonOutlineSchemeColor() {
      return this[outlinedButtonOutlineSchemeColor$];
    }
    set outlinedButtonOutlineSchemeColor(value) {
      super.outlinedButtonOutlineSchemeColor = value;
    }
    get materialButtonSchemeColor() {
      return this[materialButtonSchemeColor$];
    }
    set materialButtonSchemeColor(value) {
      super.materialButtonSchemeColor = value;
    }
    get toggleButtonsSchemeColor() {
      return this[toggleButtonsSchemeColor$];
    }
    set toggleButtonsSchemeColor(value) {
      super.toggleButtonsSchemeColor = value;
    }
    get switchSchemeColor() {
      return this[switchSchemeColor$];
    }
    set switchSchemeColor(value) {
      super.switchSchemeColor = value;
    }
    get checkboxSchemeColor() {
      return this[checkboxSchemeColor$];
    }
    set checkboxSchemeColor(value) {
      super.checkboxSchemeColor = value;
    }
    get radioSchemeColor() {
      return this[radioSchemeColor$];
    }
    set radioSchemeColor(value) {
      super.radioSchemeColor = value;
    }
    get unselectedToggleIsColored() {
      return this[unselectedToggleIsColored$];
    }
    set unselectedToggleIsColored(value) {
      super.unselectedToggleIsColored = value;
    }
    get inputDecoratorRadius() {
      return this[inputDecoratorRadius$];
    }
    set inputDecoratorRadius(value) {
      super.inputDecoratorRadius = value;
    }
    get inputDecoratorSchemeColor() {
      return this[inputDecoratorSchemeColor$];
    }
    set inputDecoratorSchemeColor(value) {
      super.inputDecoratorSchemeColor = value;
    }
    get inputDecoratorIsFilled() {
      return this[inputDecoratorIsFilled$];
    }
    set inputDecoratorIsFilled(value) {
      super.inputDecoratorIsFilled = value;
    }
    get inputDecoratorFillColor() {
      return this[inputDecoratorFillColor$];
    }
    set inputDecoratorFillColor(value) {
      super.inputDecoratorFillColor = value;
    }
    get inputDecoratorBorderType() {
      return this[inputDecoratorBorderType$];
    }
    set inputDecoratorBorderType(value) {
      super.inputDecoratorBorderType = value;
    }
    get inputDecoratorUnfocusedHasBorder() {
      return this[inputDecoratorUnfocusedHasBorder$];
    }
    set inputDecoratorUnfocusedHasBorder(value) {
      super.inputDecoratorUnfocusedHasBorder = value;
    }
    get inputDecoratorUnfocusedBorderIsColored() {
      return this[inputDecoratorUnfocusedBorderIsColored$];
    }
    set inputDecoratorUnfocusedBorderIsColored(value) {
      super.inputDecoratorUnfocusedBorderIsColored = value;
    }
    get fabRadius() {
      return this[fabRadius$];
    }
    set fabRadius(value) {
      super.fabRadius = value;
    }
    get fabUseShape() {
      return this[fabUseShape$];
    }
    set fabUseShape(value) {
      super.fabUseShape = value;
    }
    get fabSchemeColor() {
      return this[fabSchemeColor$];
    }
    set fabSchemeColor(value) {
      super.fabSchemeColor = value;
    }
    get chipRadius() {
      return this[chipRadius$];
    }
    set chipRadius(value) {
      super.chipRadius = value;
    }
    get chipSchemeColor() {
      return this[chipSchemeColor$];
    }
    set chipSchemeColor(value) {
      super.chipSchemeColor = value;
    }
    get cardRadius() {
      return this[cardRadius$];
    }
    set cardRadius(value) {
      super.cardRadius = value;
    }
    get cardElevation() {
      return this[cardElevation$];
    }
    set cardElevation(value) {
      super.cardElevation = value;
    }
    get popupMenuRadius() {
      return this[popupMenuRadius$];
    }
    set popupMenuRadius(value) {
      super.popupMenuRadius = value;
    }
    get popupMenuElevation() {
      return this[popupMenuElevation$];
    }
    set popupMenuElevation(value) {
      super.popupMenuElevation = value;
    }
    get popupMenuOpacity() {
      return this[popupMenuOpacity$];
    }
    set popupMenuOpacity(value) {
      super.popupMenuOpacity = value;
    }
    get dialogRadius() {
      return this[dialogRadius$];
    }
    set dialogRadius(value) {
      super.dialogRadius = value;
    }
    get dialogElevation() {
      return this[dialogElevation$];
    }
    set dialogElevation(value) {
      super.dialogElevation = value;
    }
    get dialogBackgroundSchemeColor() {
      return this[dialogBackgroundSchemeColor$];
    }
    set dialogBackgroundSchemeColor(value) {
      super.dialogBackgroundSchemeColor = value;
    }
    get timePickerDialogRadius() {
      return this[timePickerDialogRadius$];
    }
    set timePickerDialogRadius(value) {
      super.timePickerDialogRadius = value;
    }
    get snackBarElevation() {
      return this[snackBarElevation$];
    }
    set snackBarElevation(value) {
      super.snackBarElevation = value;
    }
    get snackBarBackgroundSchemeColor() {
      return this[snackBarBackgroundSchemeColor$];
    }
    set snackBarBackgroundSchemeColor(value) {
      super.snackBarBackgroundSchemeColor = value;
    }
    get appBarBackgroundSchemeColor() {
      return this[appBarBackgroundSchemeColor$];
    }
    set appBarBackgroundSchemeColor(value) {
      super.appBarBackgroundSchemeColor = value;
    }
    get appBarCenterTitle() {
      return this[appBarCenterTitle$];
    }
    set appBarCenterTitle(value) {
      super.appBarCenterTitle = value;
    }
    get tabBarItemSchemeColor() {
      return this[tabBarItemSchemeColor$];
    }
    set tabBarItemSchemeColor(value) {
      super.tabBarItemSchemeColor = value;
    }
    get tabBarIndicatorSchemeColor() {
      return this[tabBarIndicatorSchemeColor$];
    }
    set tabBarIndicatorSchemeColor(value) {
      super.tabBarIndicatorSchemeColor = value;
    }
    get bottomSheetRadius() {
      return this[bottomSheetRadius$];
    }
    set bottomSheetRadius(value) {
      super.bottomSheetRadius = value;
    }
    get bottomSheetElevation() {
      return this[bottomSheetElevation$];
    }
    set bottomSheetElevation(value) {
      super.bottomSheetElevation = value;
    }
    get bottomSheetModalElevation() {
      return this[bottomSheetModalElevation$];
    }
    set bottomSheetModalElevation(value) {
      super.bottomSheetModalElevation = value;
    }
    get bottomNavigationBarLabelTextStyle() {
      return this[bottomNavigationBarLabelTextStyle$];
    }
    set bottomNavigationBarLabelTextStyle(value) {
      super.bottomNavigationBarLabelTextStyle = value;
    }
    get bottomNavigationBarSelectedLabelSize() {
      return this[bottomNavigationBarSelectedLabelSize$];
    }
    set bottomNavigationBarSelectedLabelSize(value) {
      super.bottomNavigationBarSelectedLabelSize = value;
    }
    get bottomNavigationBarUnselectedLabelSize() {
      return this[bottomNavigationBarUnselectedLabelSize$];
    }
    set bottomNavigationBarUnselectedLabelSize(value) {
      super.bottomNavigationBarUnselectedLabelSize = value;
    }
    get bottomNavigationBarSelectedLabelSchemeColor() {
      return this[bottomNavigationBarSelectedLabelSchemeColor$];
    }
    set bottomNavigationBarSelectedLabelSchemeColor(value) {
      super.bottomNavigationBarSelectedLabelSchemeColor = value;
    }
    get bottomNavigationBarUnselectedLabelSchemeColor() {
      return this[bottomNavigationBarUnselectedLabelSchemeColor$];
    }
    set bottomNavigationBarUnselectedLabelSchemeColor(value) {
      super.bottomNavigationBarUnselectedLabelSchemeColor = value;
    }
    get bottomNavigationBarMutedUnselectedLabel() {
      return this[bottomNavigationBarMutedUnselectedLabel$];
    }
    set bottomNavigationBarMutedUnselectedLabel(value) {
      super.bottomNavigationBarMutedUnselectedLabel = value;
    }
    get bottomNavigationBarSelectedIconSize() {
      return this[bottomNavigationBarSelectedIconSize$];
    }
    set bottomNavigationBarSelectedIconSize(value) {
      super.bottomNavigationBarSelectedIconSize = value;
    }
    get bottomNavigationBarUnselectedIconSize() {
      return this[bottomNavigationBarUnselectedIconSize$];
    }
    set bottomNavigationBarUnselectedIconSize(value) {
      super.bottomNavigationBarUnselectedIconSize = value;
    }
    get bottomNavigationBarSelectedIconSchemeColor() {
      return this[bottomNavigationBarSelectedIconSchemeColor$];
    }
    set bottomNavigationBarSelectedIconSchemeColor(value) {
      super.bottomNavigationBarSelectedIconSchemeColor = value;
    }
    get bottomNavigationBarUnselectedIconSchemeColor() {
      return this[bottomNavigationBarUnselectedIconSchemeColor$];
    }
    set bottomNavigationBarUnselectedIconSchemeColor(value) {
      super.bottomNavigationBarUnselectedIconSchemeColor = value;
    }
    get bottomNavigationBarMutedUnselectedIcon() {
      return this[bottomNavigationBarMutedUnselectedIcon$];
    }
    set bottomNavigationBarMutedUnselectedIcon(value) {
      super.bottomNavigationBarMutedUnselectedIcon = value;
    }
    get bottomNavigationBarBackgroundSchemeColor() {
      return this[bottomNavigationBarBackgroundSchemeColor$];
    }
    set bottomNavigationBarBackgroundSchemeColor(value) {
      super.bottomNavigationBarBackgroundSchemeColor = value;
    }
    get bottomNavigationBarOpacity() {
      return this[bottomNavigationBarOpacity$];
    }
    set bottomNavigationBarOpacity(value) {
      super.bottomNavigationBarOpacity = value;
    }
    get bottomNavigationBarElevation() {
      return this[bottomNavigationBarElevation$];
    }
    set bottomNavigationBarElevation(value) {
      super.bottomNavigationBarElevation = value;
    }
    get bottomNavigationBarShowSelectedLabels() {
      return this[bottomNavigationBarShowSelectedLabels$];
    }
    set bottomNavigationBarShowSelectedLabels(value) {
      super.bottomNavigationBarShowSelectedLabels = value;
    }
    get bottomNavigationBarShowUnselectedLabels() {
      return this[bottomNavigationBarShowUnselectedLabels$];
    }
    set bottomNavigationBarShowUnselectedLabels(value) {
      super.bottomNavigationBarShowUnselectedLabels = value;
    }
    get bottomNavigationBarType() {
      return this[bottomNavigationBarType$];
    }
    set bottomNavigationBarType(value) {
      super.bottomNavigationBarType = value;
    }
    get bottomNavigationBarLandscapeLayout() {
      return this[bottomNavigationBarLandscapeLayout$];
    }
    set bottomNavigationBarLandscapeLayout(value) {
      super.bottomNavigationBarLandscapeLayout = value;
    }
    get navigationBarLabelTextStyle() {
      return this[navigationBarLabelTextStyle$];
    }
    set navigationBarLabelTextStyle(value) {
      super.navigationBarLabelTextStyle = value;
    }
    get navigationBarSelectedLabelSize() {
      return this[navigationBarSelectedLabelSize$];
    }
    set navigationBarSelectedLabelSize(value) {
      super.navigationBarSelectedLabelSize = value;
    }
    get navigationBarUnselectedLabelSize() {
      return this[navigationBarUnselectedLabelSize$];
    }
    set navigationBarUnselectedLabelSize(value) {
      super.navigationBarUnselectedLabelSize = value;
    }
    get navigationBarSelectedLabelSchemeColor() {
      return this[navigationBarSelectedLabelSchemeColor$];
    }
    set navigationBarSelectedLabelSchemeColor(value) {
      super.navigationBarSelectedLabelSchemeColor = value;
    }
    get navigationBarUnselectedLabelSchemeColor() {
      return this[navigationBarUnselectedLabelSchemeColor$];
    }
    set navigationBarUnselectedLabelSchemeColor(value) {
      super.navigationBarUnselectedLabelSchemeColor = value;
    }
    get navigationBarMutedUnselectedLabel() {
      return this[navigationBarMutedUnselectedLabel$];
    }
    set navigationBarMutedUnselectedLabel(value) {
      super.navigationBarMutedUnselectedLabel = value;
    }
    get navigationBarSelectedIconSize() {
      return this[navigationBarSelectedIconSize$];
    }
    set navigationBarSelectedIconSize(value) {
      super.navigationBarSelectedIconSize = value;
    }
    get navigationBarUnselectedIconSize() {
      return this[navigationBarUnselectedIconSize$];
    }
    set navigationBarUnselectedIconSize(value) {
      super.navigationBarUnselectedIconSize = value;
    }
    get navigationBarSelectedIconSchemeColor() {
      return this[navigationBarSelectedIconSchemeColor$];
    }
    set navigationBarSelectedIconSchemeColor(value) {
      super.navigationBarSelectedIconSchemeColor = value;
    }
    get navigationBarUnselectedIconSchemeColor() {
      return this[navigationBarUnselectedIconSchemeColor$];
    }
    set navigationBarUnselectedIconSchemeColor(value) {
      super.navigationBarUnselectedIconSchemeColor = value;
    }
    get navigationBarMutedUnselectedIcon() {
      return this[navigationBarMutedUnselectedIcon$];
    }
    set navigationBarMutedUnselectedIcon(value) {
      super.navigationBarMutedUnselectedIcon = value;
    }
    get navigationBarIndicatorSchemeColor() {
      return this[navigationBarIndicatorSchemeColor$];
    }
    set navigationBarIndicatorSchemeColor(value) {
      super.navigationBarIndicatorSchemeColor = value;
    }
    get navigationBarIndicatorOpacity() {
      return this[navigationBarIndicatorOpacity$];
    }
    set navigationBarIndicatorOpacity(value) {
      super.navigationBarIndicatorOpacity = value;
    }
    get navigationBarBackgroundSchemeColor() {
      return this[navigationBarBackgroundSchemeColor$];
    }
    set navigationBarBackgroundSchemeColor(value) {
      super.navigationBarBackgroundSchemeColor = value;
    }
    get navigationBarHeight() {
      return this[navigationBarHeight$];
    }
    set navigationBarHeight(value) {
      super.navigationBarHeight = value;
    }
    get navigationBarOpacity() {
      return this[navigationBarOpacity$];
    }
    set navigationBarOpacity(value) {
      super.navigationBarOpacity = value;
    }
    get navigationBarLabelBehavior() {
      return this[navigationBarLabelBehavior$];
    }
    set navigationBarLabelBehavior(value) {
      super.navigationBarLabelBehavior = value;
    }
    get navigationRailLabelTextStyle() {
      return this[navigationRailLabelTextStyle$];
    }
    set navigationRailLabelTextStyle(value) {
      super.navigationRailLabelTextStyle = value;
    }
    get navigationRailSelectedLabelSize() {
      return this[navigationRailSelectedLabelSize$];
    }
    set navigationRailSelectedLabelSize(value) {
      super.navigationRailSelectedLabelSize = value;
    }
    get navigationRailUnselectedLabelSize() {
      return this[navigationRailUnselectedLabelSize$];
    }
    set navigationRailUnselectedLabelSize(value) {
      super.navigationRailUnselectedLabelSize = value;
    }
    get navigationRailSelectedLabelSchemeColor() {
      return this[navigationRailSelectedLabelSchemeColor$];
    }
    set navigationRailSelectedLabelSchemeColor(value) {
      super.navigationRailSelectedLabelSchemeColor = value;
    }
    get navigationRailUnselectedLabelSchemeColor() {
      return this[navigationRailUnselectedLabelSchemeColor$];
    }
    set navigationRailUnselectedLabelSchemeColor(value) {
      super.navigationRailUnselectedLabelSchemeColor = value;
    }
    get navigationRailMutedUnselectedLabel() {
      return this[navigationRailMutedUnselectedLabel$];
    }
    set navigationRailMutedUnselectedLabel(value) {
      super.navigationRailMutedUnselectedLabel = value;
    }
    get navigationRailSelectedIconSize() {
      return this[navigationRailSelectedIconSize$];
    }
    set navigationRailSelectedIconSize(value) {
      super.navigationRailSelectedIconSize = value;
    }
    get navigationRailUnselectedIconSize() {
      return this[navigationRailUnselectedIconSize$];
    }
    set navigationRailUnselectedIconSize(value) {
      super.navigationRailUnselectedIconSize = value;
    }
    get navigationRailSelectedIconSchemeColor() {
      return this[navigationRailSelectedIconSchemeColor$];
    }
    set navigationRailSelectedIconSchemeColor(value) {
      super.navigationRailSelectedIconSchemeColor = value;
    }
    get navigationRailUnselectedIconSchemeColor() {
      return this[navigationRailUnselectedIconSchemeColor$];
    }
    set navigationRailUnselectedIconSchemeColor(value) {
      super.navigationRailUnselectedIconSchemeColor = value;
    }
    get navigationRailMutedUnselectedIcon() {
      return this[navigationRailMutedUnselectedIcon$];
    }
    set navigationRailMutedUnselectedIcon(value) {
      super.navigationRailMutedUnselectedIcon = value;
    }
    get navigationRailUseIndicator() {
      return this[navigationRailUseIndicator$];
    }
    set navigationRailUseIndicator(value) {
      super.navigationRailUseIndicator = value;
    }
    get navigationRailIndicatorSchemeColor() {
      return this[navigationRailIndicatorSchemeColor$];
    }
    set navigationRailIndicatorSchemeColor(value) {
      super.navigationRailIndicatorSchemeColor = value;
    }
    get navigationRailIndicatorOpacity() {
      return this[navigationRailIndicatorOpacity$];
    }
    set navigationRailIndicatorOpacity(value) {
      super.navigationRailIndicatorOpacity = value;
    }
    get navigationRailBackgroundSchemeColor() {
      return this[navigationRailBackgroundSchemeColor$];
    }
    set navigationRailBackgroundSchemeColor(value) {
      super.navigationRailBackgroundSchemeColor = value;
    }
    get navigationRailOpacity() {
      return this[navigationRailOpacity$];
    }
    set navigationRailOpacity(value) {
      super.navigationRailOpacity = value;
    }
    get navigationRailElevation() {
      return this[navigationRailElevation$];
    }
    set navigationRailElevation(value) {
      super.navigationRailElevation = value;
    }
    get navigationRailLabelType() {
      return this[navigationRailLabelType$];
    }
    set navigationRailLabelType(value) {
      super.navigationRailLabelType = value;
    }
    get navigationRailGroupAlignment() {
      return this[navigationRailGroupAlignment$];
    }
    set navigationRailGroupAlignment(value) {
      super.navigationRailGroupAlignment = value;
    }
    static ['_#new#tearOff'](opts) {
      let interactionEffects = opts && 'interactionEffects' in opts ? opts.interactionEffects : true;
      let blendOnLevel = opts && 'blendOnLevel' in opts ? opts.blendOnLevel : 0;
      let blendOnColors = opts && 'blendOnColors' in opts ? opts.blendOnColors : true;
      let useFlutterDefaults = opts && 'useFlutterDefaults' in opts ? opts.useFlutterDefaults : false;
      let blendTextTheme = opts && 'blendTextTheme' in opts ? opts.blendTextTheme : true;
      let useTextTheme = opts && 'useTextTheme' in opts ? opts.useTextTheme : true;
      let defaultRadius = opts && 'defaultRadius' in opts ? opts.defaultRadius : null;
      let buttonMinSize = opts && 'buttonMinSize' in opts ? opts.buttonMinSize : null;
      let buttonPadding = opts && 'buttonPadding' in opts ? opts.buttonPadding : null;
      let thickBorderWidth = opts && 'thickBorderWidth' in opts ? opts.thickBorderWidth : null;
      let thinBorderWidth = opts && 'thinBorderWidth' in opts ? opts.thinBorderWidth : null;
      let textButtonRadius = opts && 'textButtonRadius' in opts ? opts.textButtonRadius : null;
      let elevatedButtonRadius = opts && 'elevatedButtonRadius' in opts ? opts.elevatedButtonRadius : null;
      let elevatedButtonElevation = opts && 'elevatedButtonElevation' in opts ? opts.elevatedButtonElevation : null;
      let outlinedButtonRadius = opts && 'outlinedButtonRadius' in opts ? opts.outlinedButtonRadius : null;
      let toggleButtonsRadius = opts && 'toggleButtonsRadius' in opts ? opts.toggleButtonsRadius : null;
      let textButtonSchemeColor = opts && 'textButtonSchemeColor' in opts ? opts.textButtonSchemeColor : null;
      let elevatedButtonSchemeColor = opts && 'elevatedButtonSchemeColor' in opts ? opts.elevatedButtonSchemeColor : null;
      let elevatedButtonSecondarySchemeColor = opts && 'elevatedButtonSecondarySchemeColor' in opts ? opts.elevatedButtonSecondarySchemeColor : null;
      let outlinedButtonSchemeColor = opts && 'outlinedButtonSchemeColor' in opts ? opts.outlinedButtonSchemeColor : null;
      let outlinedButtonOutlineSchemeColor = opts && 'outlinedButtonOutlineSchemeColor' in opts ? opts.outlinedButtonOutlineSchemeColor : null;
      let materialButtonSchemeColor = opts && 'materialButtonSchemeColor' in opts ? opts.materialButtonSchemeColor : null;
      let toggleButtonsSchemeColor = opts && 'toggleButtonsSchemeColor' in opts ? opts.toggleButtonsSchemeColor : null;
      let switchSchemeColor = opts && 'switchSchemeColor' in opts ? opts.switchSchemeColor : null;
      let checkboxSchemeColor = opts && 'checkboxSchemeColor' in opts ? opts.checkboxSchemeColor : null;
      let radioSchemeColor = opts && 'radioSchemeColor' in opts ? opts.radioSchemeColor : null;
      let unselectedToggleIsColored = opts && 'unselectedToggleIsColored' in opts ? opts.unselectedToggleIsColored : false;
      let inputDecoratorRadius = opts && 'inputDecoratorRadius' in opts ? opts.inputDecoratorRadius : null;
      let inputDecoratorSchemeColor = opts && 'inputDecoratorSchemeColor' in opts ? opts.inputDecoratorSchemeColor : null;
      let inputDecoratorIsFilled = opts && 'inputDecoratorIsFilled' in opts ? opts.inputDecoratorIsFilled : true;
      let inputDecoratorFillColor = opts && 'inputDecoratorFillColor' in opts ? opts.inputDecoratorFillColor : null;
      let inputDecoratorBorderType = opts && 'inputDecoratorBorderType' in opts ? opts.inputDecoratorBorderType : C[0] || CT.C0;
      let inputDecoratorUnfocusedHasBorder = opts && 'inputDecoratorUnfocusedHasBorder' in opts ? opts.inputDecoratorUnfocusedHasBorder : true;
      let inputDecoratorUnfocusedBorderIsColored = opts && 'inputDecoratorUnfocusedBorderIsColored' in opts ? opts.inputDecoratorUnfocusedBorderIsColored : true;
      let fabRadius = opts && 'fabRadius' in opts ? opts.fabRadius : null;
      let fabUseShape = opts && 'fabUseShape' in opts ? opts.fabUseShape : false;
      let fabSchemeColor = opts && 'fabSchemeColor' in opts ? opts.fabSchemeColor : null;
      let chipRadius = opts && 'chipRadius' in opts ? opts.chipRadius : null;
      let chipSchemeColor = opts && 'chipSchemeColor' in opts ? opts.chipSchemeColor : null;
      let cardRadius = opts && 'cardRadius' in opts ? opts.cardRadius : null;
      let cardElevation = opts && 'cardElevation' in opts ? opts.cardElevation : 0;
      let popupMenuRadius = opts && 'popupMenuRadius' in opts ? opts.popupMenuRadius : null;
      let popupMenuElevation = opts && 'popupMenuElevation' in opts ? opts.popupMenuElevation : 3;
      let popupMenuOpacity = opts && 'popupMenuOpacity' in opts ? opts.popupMenuOpacity : 1;
      let dialogRadius = opts && 'dialogRadius' in opts ? opts.dialogRadius : null;
      let dialogElevation = opts && 'dialogElevation' in opts ? opts.dialogElevation : 6;
      let dialogBackgroundSchemeColor = opts && 'dialogBackgroundSchemeColor' in opts ? opts.dialogBackgroundSchemeColor : null;
      let timePickerDialogRadius = opts && 'timePickerDialogRadius' in opts ? opts.timePickerDialogRadius : null;
      let snackBarElevation = opts && 'snackBarElevation' in opts ? opts.snackBarElevation : 4;
      let snackBarBackgroundSchemeColor = opts && 'snackBarBackgroundSchemeColor' in opts ? opts.snackBarBackgroundSchemeColor : null;
      let appBarBackgroundSchemeColor = opts && 'appBarBackgroundSchemeColor' in opts ? opts.appBarBackgroundSchemeColor : null;
      let appBarCenterTitle = opts && 'appBarCenterTitle' in opts ? opts.appBarCenterTitle : null;
      let tabBarItemSchemeColor = opts && 'tabBarItemSchemeColor' in opts ? opts.tabBarItemSchemeColor : null;
      let tabBarIndicatorSchemeColor = opts && 'tabBarIndicatorSchemeColor' in opts ? opts.tabBarIndicatorSchemeColor : null;
      let bottomSheetRadius = opts && 'bottomSheetRadius' in opts ? opts.bottomSheetRadius : null;
      let bottomSheetElevation = opts && 'bottomSheetElevation' in opts ? opts.bottomSheetElevation : 4;
      let bottomSheetModalElevation = opts && 'bottomSheetModalElevation' in opts ? opts.bottomSheetModalElevation : 8;
      let bottomNavigationBarLabelTextStyle = opts && 'bottomNavigationBarLabelTextStyle' in opts ? opts.bottomNavigationBarLabelTextStyle : null;
      let bottomNavigationBarSelectedLabelSize = opts && 'bottomNavigationBarSelectedLabelSize' in opts ? opts.bottomNavigationBarSelectedLabelSize : null;
      let bottomNavigationBarUnselectedLabelSize = opts && 'bottomNavigationBarUnselectedLabelSize' in opts ? opts.bottomNavigationBarUnselectedLabelSize : null;
      let bottomNavigationBarSelectedLabelSchemeColor = opts && 'bottomNavigationBarSelectedLabelSchemeColor' in opts ? opts.bottomNavigationBarSelectedLabelSchemeColor : null;
      let bottomNavigationBarUnselectedLabelSchemeColor = opts && 'bottomNavigationBarUnselectedLabelSchemeColor' in opts ? opts.bottomNavigationBarUnselectedLabelSchemeColor : null;
      let bottomNavigationBarMutedUnselectedLabel = opts && 'bottomNavigationBarMutedUnselectedLabel' in opts ? opts.bottomNavigationBarMutedUnselectedLabel : true;
      let bottomNavigationBarSelectedIconSize = opts && 'bottomNavigationBarSelectedIconSize' in opts ? opts.bottomNavigationBarSelectedIconSize : null;
      let bottomNavigationBarUnselectedIconSize = opts && 'bottomNavigationBarUnselectedIconSize' in opts ? opts.bottomNavigationBarUnselectedIconSize : null;
      let bottomNavigationBarSelectedIconSchemeColor = opts && 'bottomNavigationBarSelectedIconSchemeColor' in opts ? opts.bottomNavigationBarSelectedIconSchemeColor : null;
      let bottomNavigationBarUnselectedIconSchemeColor = opts && 'bottomNavigationBarUnselectedIconSchemeColor' in opts ? opts.bottomNavigationBarUnselectedIconSchemeColor : null;
      let bottomNavigationBarMutedUnselectedIcon = opts && 'bottomNavigationBarMutedUnselectedIcon' in opts ? opts.bottomNavigationBarMutedUnselectedIcon : true;
      let bottomNavigationBarBackgroundSchemeColor = opts && 'bottomNavigationBarBackgroundSchemeColor' in opts ? opts.bottomNavigationBarBackgroundSchemeColor : null;
      let bottomNavigationBarOpacity = opts && 'bottomNavigationBarOpacity' in opts ? opts.bottomNavigationBarOpacity : 1;
      let bottomNavigationBarElevation = opts && 'bottomNavigationBarElevation' in opts ? opts.bottomNavigationBarElevation : 0;
      let bottomNavigationBarShowSelectedLabels = opts && 'bottomNavigationBarShowSelectedLabels' in opts ? opts.bottomNavigationBarShowSelectedLabels : true;
      let bottomNavigationBarShowUnselectedLabels = opts && 'bottomNavigationBarShowUnselectedLabels' in opts ? opts.bottomNavigationBarShowUnselectedLabels : true;
      let bottomNavigationBarType = opts && 'bottomNavigationBarType' in opts ? opts.bottomNavigationBarType : C[1] || CT.C1;
      let bottomNavigationBarLandscapeLayout = opts && 'bottomNavigationBarLandscapeLayout' in opts ? opts.bottomNavigationBarLandscapeLayout : null;
      let navigationBarLabelTextStyle = opts && 'navigationBarLabelTextStyle' in opts ? opts.navigationBarLabelTextStyle : null;
      let navigationBarSelectedLabelSize = opts && 'navigationBarSelectedLabelSize' in opts ? opts.navigationBarSelectedLabelSize : null;
      let navigationBarUnselectedLabelSize = opts && 'navigationBarUnselectedLabelSize' in opts ? opts.navigationBarUnselectedLabelSize : null;
      let navigationBarSelectedLabelSchemeColor = opts && 'navigationBarSelectedLabelSchemeColor' in opts ? opts.navigationBarSelectedLabelSchemeColor : null;
      let navigationBarUnselectedLabelSchemeColor = opts && 'navigationBarUnselectedLabelSchemeColor' in opts ? opts.navigationBarUnselectedLabelSchemeColor : null;
      let navigationBarMutedUnselectedLabel = opts && 'navigationBarMutedUnselectedLabel' in opts ? opts.navigationBarMutedUnselectedLabel : true;
      let navigationBarSelectedIconSize = opts && 'navigationBarSelectedIconSize' in opts ? opts.navigationBarSelectedIconSize : null;
      let navigationBarUnselectedIconSize = opts && 'navigationBarUnselectedIconSize' in opts ? opts.navigationBarUnselectedIconSize : null;
      let navigationBarSelectedIconSchemeColor = opts && 'navigationBarSelectedIconSchemeColor' in opts ? opts.navigationBarSelectedIconSchemeColor : null;
      let navigationBarUnselectedIconSchemeColor = opts && 'navigationBarUnselectedIconSchemeColor' in opts ? opts.navigationBarUnselectedIconSchemeColor : null;
      let navigationBarMutedUnselectedIcon = opts && 'navigationBarMutedUnselectedIcon' in opts ? opts.navigationBarMutedUnselectedIcon : true;
      let navigationBarIndicatorSchemeColor = opts && 'navigationBarIndicatorSchemeColor' in opts ? opts.navigationBarIndicatorSchemeColor : null;
      let navigationBarIndicatorOpacity = opts && 'navigationBarIndicatorOpacity' in opts ? opts.navigationBarIndicatorOpacity : null;
      let navigationBarBackgroundSchemeColor = opts && 'navigationBarBackgroundSchemeColor' in opts ? opts.navigationBarBackgroundSchemeColor : null;
      let navigationBarOpacity = opts && 'navigationBarOpacity' in opts ? opts.navigationBarOpacity : 1;
      let navigationBarHeight = opts && 'navigationBarHeight' in opts ? opts.navigationBarHeight : null;
      let navigationBarLabelBehavior = opts && 'navigationBarLabelBehavior' in opts ? opts.navigationBarLabelBehavior : C[2] || CT.C2;
      let navigationRailLabelTextStyle = opts && 'navigationRailLabelTextStyle' in opts ? opts.navigationRailLabelTextStyle : null;
      let navigationRailSelectedLabelSize = opts && 'navigationRailSelectedLabelSize' in opts ? opts.navigationRailSelectedLabelSize : null;
      let navigationRailUnselectedLabelSize = opts && 'navigationRailUnselectedLabelSize' in opts ? opts.navigationRailUnselectedLabelSize : null;
      let navigationRailSelectedLabelSchemeColor = opts && 'navigationRailSelectedLabelSchemeColor' in opts ? opts.navigationRailSelectedLabelSchemeColor : null;
      let navigationRailUnselectedLabelSchemeColor = opts && 'navigationRailUnselectedLabelSchemeColor' in opts ? opts.navigationRailUnselectedLabelSchemeColor : null;
      let navigationRailMutedUnselectedLabel = opts && 'navigationRailMutedUnselectedLabel' in opts ? opts.navigationRailMutedUnselectedLabel : true;
      let navigationRailSelectedIconSize = opts && 'navigationRailSelectedIconSize' in opts ? opts.navigationRailSelectedIconSize : null;
      let navigationRailUnselectedIconSize = opts && 'navigationRailUnselectedIconSize' in opts ? opts.navigationRailUnselectedIconSize : null;
      let navigationRailSelectedIconSchemeColor = opts && 'navigationRailSelectedIconSchemeColor' in opts ? opts.navigationRailSelectedIconSchemeColor : null;
      let navigationRailUnselectedIconSchemeColor = opts && 'navigationRailUnselectedIconSchemeColor' in opts ? opts.navigationRailUnselectedIconSchemeColor : null;
      let navigationRailMutedUnselectedIcon = opts && 'navigationRailMutedUnselectedIcon' in opts ? opts.navigationRailMutedUnselectedIcon : true;
      let navigationRailUseIndicator = opts && 'navigationRailUseIndicator' in opts ? opts.navigationRailUseIndicator : true;
      let navigationRailIndicatorSchemeColor = opts && 'navigationRailIndicatorSchemeColor' in opts ? opts.navigationRailIndicatorSchemeColor : null;
      let navigationRailIndicatorOpacity = opts && 'navigationRailIndicatorOpacity' in opts ? opts.navigationRailIndicatorOpacity : null;
      let navigationRailBackgroundSchemeColor = opts && 'navigationRailBackgroundSchemeColor' in opts ? opts.navigationRailBackgroundSchemeColor : null;
      let navigationRailOpacity = opts && 'navigationRailOpacity' in opts ? opts.navigationRailOpacity : 1;
      let navigationRailElevation = opts && 'navigationRailElevation' in opts ? opts.navigationRailElevation : 0;
      let navigationRailLabelType = opts && 'navigationRailLabelType' in opts ? opts.navigationRailLabelType : C[3] || CT.C3;
      let navigationRailGroupAlignment = opts && 'navigationRailGroupAlignment' in opts ? opts.navigationRailGroupAlignment : null;
      return new flex_sub_themes_data.FlexSubThemesData.new({interactionEffects: interactionEffects, blendOnLevel: blendOnLevel, blendOnColors: blendOnColors, useFlutterDefaults: useFlutterDefaults, blendTextTheme: blendTextTheme, useTextTheme: useTextTheme, defaultRadius: defaultRadius, buttonMinSize: buttonMinSize, buttonPadding: buttonPadding, thickBorderWidth: thickBorderWidth, thinBorderWidth: thinBorderWidth, textButtonRadius: textButtonRadius, elevatedButtonRadius: elevatedButtonRadius, elevatedButtonElevation: elevatedButtonElevation, outlinedButtonRadius: outlinedButtonRadius, toggleButtonsRadius: toggleButtonsRadius, textButtonSchemeColor: textButtonSchemeColor, elevatedButtonSchemeColor: elevatedButtonSchemeColor, elevatedButtonSecondarySchemeColor: elevatedButtonSecondarySchemeColor, outlinedButtonSchemeColor: outlinedButtonSchemeColor, outlinedButtonOutlineSchemeColor: outlinedButtonOutlineSchemeColor, materialButtonSchemeColor: materialButtonSchemeColor, toggleButtonsSchemeColor: toggleButtonsSchemeColor, switchSchemeColor: switchSchemeColor, checkboxSchemeColor: checkboxSchemeColor, radioSchemeColor: radioSchemeColor, unselectedToggleIsColored: unselectedToggleIsColored, inputDecoratorRadius: inputDecoratorRadius, inputDecoratorSchemeColor: inputDecoratorSchemeColor, inputDecoratorIsFilled: inputDecoratorIsFilled, inputDecoratorFillColor: inputDecoratorFillColor, inputDecoratorBorderType: inputDecoratorBorderType, inputDecoratorUnfocusedHasBorder: inputDecoratorUnfocusedHasBorder, inputDecoratorUnfocusedBorderIsColored: inputDecoratorUnfocusedBorderIsColored, fabRadius: fabRadius, fabUseShape: fabUseShape, fabSchemeColor: fabSchemeColor, chipRadius: chipRadius, chipSchemeColor: chipSchemeColor, cardRadius: cardRadius, cardElevation: cardElevation, popupMenuRadius: popupMenuRadius, popupMenuElevation: popupMenuElevation, popupMenuOpacity: popupMenuOpacity, dialogRadius: dialogRadius, dialogElevation: dialogElevation, dialogBackgroundSchemeColor: dialogBackgroundSchemeColor, timePickerDialogRadius: timePickerDialogRadius, snackBarElevation: snackBarElevation, snackBarBackgroundSchemeColor: snackBarBackgroundSchemeColor, appBarBackgroundSchemeColor: appBarBackgroundSchemeColor, appBarCenterTitle: appBarCenterTitle, tabBarItemSchemeColor: tabBarItemSchemeColor, tabBarIndicatorSchemeColor: tabBarIndicatorSchemeColor, bottomSheetRadius: bottomSheetRadius, bottomSheetElevation: bottomSheetElevation, bottomSheetModalElevation: bottomSheetModalElevation, bottomNavigationBarLabelTextStyle: bottomNavigationBarLabelTextStyle, bottomNavigationBarSelectedLabelSize: bottomNavigationBarSelectedLabelSize, bottomNavigationBarUnselectedLabelSize: bottomNavigationBarUnselectedLabelSize, bottomNavigationBarSelectedLabelSchemeColor: bottomNavigationBarSelectedLabelSchemeColor, bottomNavigationBarUnselectedLabelSchemeColor: bottomNavigationBarUnselectedLabelSchemeColor, bottomNavigationBarMutedUnselectedLabel: bottomNavigationBarMutedUnselectedLabel, bottomNavigationBarSelectedIconSize: bottomNavigationBarSelectedIconSize, bottomNavigationBarUnselectedIconSize: bottomNavigationBarUnselectedIconSize, bottomNavigationBarSelectedIconSchemeColor: bottomNavigationBarSelectedIconSchemeColor, bottomNavigationBarUnselectedIconSchemeColor: bottomNavigationBarUnselectedIconSchemeColor, bottomNavigationBarMutedUnselectedIcon: bottomNavigationBarMutedUnselectedIcon, bottomNavigationBarBackgroundSchemeColor: bottomNavigationBarBackgroundSchemeColor, bottomNavigationBarOpacity: bottomNavigationBarOpacity, bottomNavigationBarElevation: bottomNavigationBarElevation, bottomNavigationBarShowSelectedLabels: bottomNavigationBarShowSelectedLabels, bottomNavigationBarShowUnselectedLabels: bottomNavigationBarShowUnselectedLabels, bottomNavigationBarType: bottomNavigationBarType, bottomNavigationBarLandscapeLayout: bottomNavigationBarLandscapeLayout, navigationBarLabelTextStyle: navigationBarLabelTextStyle, navigationBarSelectedLabelSize: navigationBarSelectedLabelSize, navigationBarUnselectedLabelSize: navigationBarUnselectedLabelSize, navigationBarSelectedLabelSchemeColor: navigationBarSelectedLabelSchemeColor, navigationBarUnselectedLabelSchemeColor: navigationBarUnselectedLabelSchemeColor, navigationBarMutedUnselectedLabel: navigationBarMutedUnselectedLabel, navigationBarSelectedIconSize: navigationBarSelectedIconSize, navigationBarUnselectedIconSize: navigationBarUnselectedIconSize, navigationBarSelectedIconSchemeColor: navigationBarSelectedIconSchemeColor, navigationBarUnselectedIconSchemeColor: navigationBarUnselectedIconSchemeColor, navigationBarMutedUnselectedIcon: navigationBarMutedUnselectedIcon, navigationBarIndicatorSchemeColor: navigationBarIndicatorSchemeColor, navigationBarIndicatorOpacity: navigationBarIndicatorOpacity, navigationBarBackgroundSchemeColor: navigationBarBackgroundSchemeColor, navigationBarOpacity: navigationBarOpacity, navigationBarHeight: navigationBarHeight, navigationBarLabelBehavior: navigationBarLabelBehavior, navigationRailLabelTextStyle: navigationRailLabelTextStyle, navigationRailSelectedLabelSize: navigationRailSelectedLabelSize, navigationRailUnselectedLabelSize: navigationRailUnselectedLabelSize, navigationRailSelectedLabelSchemeColor: navigationRailSelectedLabelSchemeColor, navigationRailUnselectedLabelSchemeColor: navigationRailUnselectedLabelSchemeColor, navigationRailMutedUnselectedLabel: navigationRailMutedUnselectedLabel, navigationRailSelectedIconSize: navigationRailSelectedIconSize, navigationRailUnselectedIconSize: navigationRailUnselectedIconSize, navigationRailSelectedIconSchemeColor: navigationRailSelectedIconSchemeColor, navigationRailUnselectedIconSchemeColor: navigationRailUnselectedIconSchemeColor, navigationRailMutedUnselectedIcon: navigationRailMutedUnselectedIcon, navigationRailUseIndicator: navigationRailUseIndicator, navigationRailIndicatorSchemeColor: navigationRailIndicatorSchemeColor, navigationRailIndicatorOpacity: navigationRailIndicatorOpacity, navigationRailBackgroundSchemeColor: navigationRailBackgroundSchemeColor, navigationRailOpacity: navigationRailOpacity, navigationRailElevation: navigationRailElevation, navigationRailLabelType: navigationRailLabelType, navigationRailGroupAlignment: navigationRailGroupAlignment});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23, t0$24, t0$25, t0$26, t0$27, t0$28, t0$29, t0$30, t0$31, t0$32, t0$33, t0$34, t0$35, t0$36, t0$37, t0$38, t0$39, t0$40, t0$41, t0$42, t0$43, t0$44, t0$45, t0$46, t0$47, t0$48, t0$49, t0$50, t0$51, t0$52, t0$53, t0$54, t0$55, t0$56, t0$57, t0$58, t0$59, t0$60, t0$61, t0$62, t0$63, t0$64, t0$65, t0$66, t0$67, t0$68, t0$69, t0$70, t0$71, t0$72, t0$73, t0$74, t0$75, t0$76, t0$77, t0$78, t0$79, t0$80, t0$81, t0$82, t0$83, t0$84, t0$85, t0$86, t0$87, t0$88, t0$89, t0$90, t0$91, t0$92, t0$93, t0$94, t0$95, t0$96, t0$97, t0$98, t0$99, t0$100, t0$101, t0$102, t0$103, t0$104, t0$105, t0$106, t0$107, t0$108;
      let interactionEffects = opts && 'interactionEffects' in opts ? opts.interactionEffects : null;
      let blendOnLevel = opts && 'blendOnLevel' in opts ? opts.blendOnLevel : null;
      let blendOnColors = opts && 'blendOnColors' in opts ? opts.blendOnColors : null;
      let useFlutterDefaults = opts && 'useFlutterDefaults' in opts ? opts.useFlutterDefaults : null;
      let blendTextTheme = opts && 'blendTextTheme' in opts ? opts.blendTextTheme : null;
      let useTextTheme = opts && 'useTextTheme' in opts ? opts.useTextTheme : null;
      let defaultRadius = opts && 'defaultRadius' in opts ? opts.defaultRadius : null;
      let buttonMinSize = opts && 'buttonMinSize' in opts ? opts.buttonMinSize : null;
      let buttonPadding = opts && 'buttonPadding' in opts ? opts.buttonPadding : null;
      let thickBorderWidth = opts && 'thickBorderWidth' in opts ? opts.thickBorderWidth : null;
      let thinBorderWidth = opts && 'thinBorderWidth' in opts ? opts.thinBorderWidth : null;
      let textButtonRadius = opts && 'textButtonRadius' in opts ? opts.textButtonRadius : null;
      let elevatedButtonRadius = opts && 'elevatedButtonRadius' in opts ? opts.elevatedButtonRadius : null;
      let elevatedButtonElevation = opts && 'elevatedButtonElevation' in opts ? opts.elevatedButtonElevation : null;
      let outlinedButtonRadius = opts && 'outlinedButtonRadius' in opts ? opts.outlinedButtonRadius : null;
      let toggleButtonsRadius = opts && 'toggleButtonsRadius' in opts ? opts.toggleButtonsRadius : null;
      let textButtonSchemeColor = opts && 'textButtonSchemeColor' in opts ? opts.textButtonSchemeColor : null;
      let elevatedButtonSchemeColor = opts && 'elevatedButtonSchemeColor' in opts ? opts.elevatedButtonSchemeColor : null;
      let elevatedButtonSecondarySchemeColor = opts && 'elevatedButtonSecondarySchemeColor' in opts ? opts.elevatedButtonSecondarySchemeColor : null;
      let outlinedButtonSchemeColor = opts && 'outlinedButtonSchemeColor' in opts ? opts.outlinedButtonSchemeColor : null;
      let outlinedButtonOutlineSchemeColor = opts && 'outlinedButtonOutlineSchemeColor' in opts ? opts.outlinedButtonOutlineSchemeColor : null;
      let materialButtonSchemeColor = opts && 'materialButtonSchemeColor' in opts ? opts.materialButtonSchemeColor : null;
      let toggleButtonsSchemeColor = opts && 'toggleButtonsSchemeColor' in opts ? opts.toggleButtonsSchemeColor : null;
      let switchSchemeColor = opts && 'switchSchemeColor' in opts ? opts.switchSchemeColor : null;
      let checkboxSchemeColor = opts && 'checkboxSchemeColor' in opts ? opts.checkboxSchemeColor : null;
      let radioSchemeColor = opts && 'radioSchemeColor' in opts ? opts.radioSchemeColor : null;
      let unselectedToggleIsColored = opts && 'unselectedToggleIsColored' in opts ? opts.unselectedToggleIsColored : null;
      let inputDecoratorRadius = opts && 'inputDecoratorRadius' in opts ? opts.inputDecoratorRadius : null;
      let inputDecoratorSchemeColor = opts && 'inputDecoratorSchemeColor' in opts ? opts.inputDecoratorSchemeColor : null;
      let inputDecoratorIsFilled = opts && 'inputDecoratorIsFilled' in opts ? opts.inputDecoratorIsFilled : null;
      let inputDecoratorFillColor = opts && 'inputDecoratorFillColor' in opts ? opts.inputDecoratorFillColor : null;
      let inputDecoratorBorderType = opts && 'inputDecoratorBorderType' in opts ? opts.inputDecoratorBorderType : null;
      let inputDecoratorUnfocusedHasBorder = opts && 'inputDecoratorUnfocusedHasBorder' in opts ? opts.inputDecoratorUnfocusedHasBorder : null;
      let inputDecoratorUnfocusedBorderIsColored = opts && 'inputDecoratorUnfocusedBorderIsColored' in opts ? opts.inputDecoratorUnfocusedBorderIsColored : null;
      let fabRadius = opts && 'fabRadius' in opts ? opts.fabRadius : null;
      let fabUseShape = opts && 'fabUseShape' in opts ? opts.fabUseShape : null;
      let fabSchemeColor = opts && 'fabSchemeColor' in opts ? opts.fabSchemeColor : null;
      let chipRadius = opts && 'chipRadius' in opts ? opts.chipRadius : null;
      let chipSchemeColor = opts && 'chipSchemeColor' in opts ? opts.chipSchemeColor : null;
      let cardRadius = opts && 'cardRadius' in opts ? opts.cardRadius : null;
      let cardElevation = opts && 'cardElevation' in opts ? opts.cardElevation : null;
      let popupMenuRadius = opts && 'popupMenuRadius' in opts ? opts.popupMenuRadius : null;
      let popupMenuElevation = opts && 'popupMenuElevation' in opts ? opts.popupMenuElevation : null;
      let popupMenuOpacity = opts && 'popupMenuOpacity' in opts ? opts.popupMenuOpacity : null;
      let dialogBackgroundSchemeColor = opts && 'dialogBackgroundSchemeColor' in opts ? opts.dialogBackgroundSchemeColor : null;
      let dialogElevation = opts && 'dialogElevation' in opts ? opts.dialogElevation : null;
      let dialogRadius = opts && 'dialogRadius' in opts ? opts.dialogRadius : null;
      let timePickerDialogRadius = opts && 'timePickerDialogRadius' in opts ? opts.timePickerDialogRadius : null;
      let snackBarElevation = opts && 'snackBarElevation' in opts ? opts.snackBarElevation : null;
      let snackBarBackgroundSchemeColor = opts && 'snackBarBackgroundSchemeColor' in opts ? opts.snackBarBackgroundSchemeColor : null;
      let appBarBackgroundSchemeColor = opts && 'appBarBackgroundSchemeColor' in opts ? opts.appBarBackgroundSchemeColor : null;
      let appBarCenterTitle = opts && 'appBarCenterTitle' in opts ? opts.appBarCenterTitle : null;
      let tabBarItemSchemeColor = opts && 'tabBarItemSchemeColor' in opts ? opts.tabBarItemSchemeColor : null;
      let tabBarIndicatorSchemeColor = opts && 'tabBarIndicatorSchemeColor' in opts ? opts.tabBarIndicatorSchemeColor : null;
      let bottomSheetRadius = opts && 'bottomSheetRadius' in opts ? opts.bottomSheetRadius : null;
      let bottomSheetElevation = opts && 'bottomSheetElevation' in opts ? opts.bottomSheetElevation : null;
      let bottomSheetModalElevation = opts && 'bottomSheetModalElevation' in opts ? opts.bottomSheetModalElevation : null;
      let bottomNavigationBarLabelTextStyle = opts && 'bottomNavigationBarLabelTextStyle' in opts ? opts.bottomNavigationBarLabelTextStyle : null;
      let bottomNavigationBarSelectedLabelSize = opts && 'bottomNavigationBarSelectedLabelSize' in opts ? opts.bottomNavigationBarSelectedLabelSize : null;
      let bottomNavigationBarUnselectedLabelSize = opts && 'bottomNavigationBarUnselectedLabelSize' in opts ? opts.bottomNavigationBarUnselectedLabelSize : null;
      let bottomNavigationBarSelectedLabelSchemeColor = opts && 'bottomNavigationBarSelectedLabelSchemeColor' in opts ? opts.bottomNavigationBarSelectedLabelSchemeColor : null;
      let bottomNavigationBarUnselectedLabelSchemeColor = opts && 'bottomNavigationBarUnselectedLabelSchemeColor' in opts ? opts.bottomNavigationBarUnselectedLabelSchemeColor : null;
      let bottomNavigationBarMutedUnselectedLabel = opts && 'bottomNavigationBarMutedUnselectedLabel' in opts ? opts.bottomNavigationBarMutedUnselectedLabel : null;
      let bottomNavigationBarSelectedIconSize = opts && 'bottomNavigationBarSelectedIconSize' in opts ? opts.bottomNavigationBarSelectedIconSize : null;
      let bottomNavigationBarUnselectedIconSize = opts && 'bottomNavigationBarUnselectedIconSize' in opts ? opts.bottomNavigationBarUnselectedIconSize : null;
      let bottomNavigationBarSelectedIconSchemeColor = opts && 'bottomNavigationBarSelectedIconSchemeColor' in opts ? opts.bottomNavigationBarSelectedIconSchemeColor : null;
      let bottomNavigationBarUnselectedIconSchemeColor = opts && 'bottomNavigationBarUnselectedIconSchemeColor' in opts ? opts.bottomNavigationBarUnselectedIconSchemeColor : null;
      let bottomNavigationBarMutedUnselectedIcon = opts && 'bottomNavigationBarMutedUnselectedIcon' in opts ? opts.bottomNavigationBarMutedUnselectedIcon : null;
      let bottomNavigationBarBackgroundSchemeColor = opts && 'bottomNavigationBarBackgroundSchemeColor' in opts ? opts.bottomNavigationBarBackgroundSchemeColor : null;
      let bottomNavigationBarOpacity = opts && 'bottomNavigationBarOpacity' in opts ? opts.bottomNavigationBarOpacity : null;
      let bottomNavigationBarElevation = opts && 'bottomNavigationBarElevation' in opts ? opts.bottomNavigationBarElevation : null;
      let bottomNavigationBarShowSelectedLabels = opts && 'bottomNavigationBarShowSelectedLabels' in opts ? opts.bottomNavigationBarShowSelectedLabels : null;
      let bottomNavigationBarShowUnselectedLabels = opts && 'bottomNavigationBarShowUnselectedLabels' in opts ? opts.bottomNavigationBarShowUnselectedLabels : null;
      let bottomNavigationBarType = opts && 'bottomNavigationBarType' in opts ? opts.bottomNavigationBarType : null;
      let bottomNavigationBarLandscapeLayout = opts && 'bottomNavigationBarLandscapeLayout' in opts ? opts.bottomNavigationBarLandscapeLayout : null;
      let navigationBarLabelTextStyle = opts && 'navigationBarLabelTextStyle' in opts ? opts.navigationBarLabelTextStyle : null;
      let navigationBarSelectedLabelSize = opts && 'navigationBarSelectedLabelSize' in opts ? opts.navigationBarSelectedLabelSize : null;
      let navigationBarUnselectedLabelSize = opts && 'navigationBarUnselectedLabelSize' in opts ? opts.navigationBarUnselectedLabelSize : null;
      let navigationBarSelectedLabelSchemeColor = opts && 'navigationBarSelectedLabelSchemeColor' in opts ? opts.navigationBarSelectedLabelSchemeColor : null;
      let navigationBarUnselectedLabelSchemeColor = opts && 'navigationBarUnselectedLabelSchemeColor' in opts ? opts.navigationBarUnselectedLabelSchemeColor : null;
      let navigationBarMutedUnselectedLabel = opts && 'navigationBarMutedUnselectedLabel' in opts ? opts.navigationBarMutedUnselectedLabel : null;
      let navigationBarSelectedIconSize = opts && 'navigationBarSelectedIconSize' in opts ? opts.navigationBarSelectedIconSize : null;
      let navigationBarUnselectedIconSize = opts && 'navigationBarUnselectedIconSize' in opts ? opts.navigationBarUnselectedIconSize : null;
      let navigationBarSelectedIconSchemeColor = opts && 'navigationBarSelectedIconSchemeColor' in opts ? opts.navigationBarSelectedIconSchemeColor : null;
      let navigationBarUnselectedIconSchemeColor = opts && 'navigationBarUnselectedIconSchemeColor' in opts ? opts.navigationBarUnselectedIconSchemeColor : null;
      let navigationBarMutedUnselectedIcon = opts && 'navigationBarMutedUnselectedIcon' in opts ? opts.navigationBarMutedUnselectedIcon : null;
      let navigationBarIndicatorSchemeColor = opts && 'navigationBarIndicatorSchemeColor' in opts ? opts.navigationBarIndicatorSchemeColor : null;
      let navigationBarIndicatorOpacity = opts && 'navigationBarIndicatorOpacity' in opts ? opts.navigationBarIndicatorOpacity : null;
      let navigationBarBackgroundSchemeColor = opts && 'navigationBarBackgroundSchemeColor' in opts ? opts.navigationBarBackgroundSchemeColor : null;
      let navigationBarOpacity = opts && 'navigationBarOpacity' in opts ? opts.navigationBarOpacity : null;
      let navigationBarHeight = opts && 'navigationBarHeight' in opts ? opts.navigationBarHeight : null;
      let navigationBarLabelBehavior = opts && 'navigationBarLabelBehavior' in opts ? opts.navigationBarLabelBehavior : null;
      let navigationRailLabelTextStyle = opts && 'navigationRailLabelTextStyle' in opts ? opts.navigationRailLabelTextStyle : null;
      let navigationRailSelectedLabelSize = opts && 'navigationRailSelectedLabelSize' in opts ? opts.navigationRailSelectedLabelSize : null;
      let navigationRailUnselectedLabelSize = opts && 'navigationRailUnselectedLabelSize' in opts ? opts.navigationRailUnselectedLabelSize : null;
      let navigationRailSelectedLabelSchemeColor = opts && 'navigationRailSelectedLabelSchemeColor' in opts ? opts.navigationRailSelectedLabelSchemeColor : null;
      let navigationRailUnselectedLabelSchemeColor = opts && 'navigationRailUnselectedLabelSchemeColor' in opts ? opts.navigationRailUnselectedLabelSchemeColor : null;
      let navigationRailMutedUnselectedLabel = opts && 'navigationRailMutedUnselectedLabel' in opts ? opts.navigationRailMutedUnselectedLabel : null;
      let navigationRailSelectedIconSize = opts && 'navigationRailSelectedIconSize' in opts ? opts.navigationRailSelectedIconSize : null;
      let navigationRailUnselectedIconSize = opts && 'navigationRailUnselectedIconSize' in opts ? opts.navigationRailUnselectedIconSize : null;
      let navigationRailSelectedIconSchemeColor = opts && 'navigationRailSelectedIconSchemeColor' in opts ? opts.navigationRailSelectedIconSchemeColor : null;
      let navigationRailUnselectedIconSchemeColor = opts && 'navigationRailUnselectedIconSchemeColor' in opts ? opts.navigationRailUnselectedIconSchemeColor : null;
      let navigationRailMutedUnselectedIcon = opts && 'navigationRailMutedUnselectedIcon' in opts ? opts.navigationRailMutedUnselectedIcon : null;
      let navigationRailUseIndicator = opts && 'navigationRailUseIndicator' in opts ? opts.navigationRailUseIndicator : null;
      let navigationRailIndicatorSchemeColor = opts && 'navigationRailIndicatorSchemeColor' in opts ? opts.navigationRailIndicatorSchemeColor : null;
      let navigationRailIndicatorOpacity = opts && 'navigationRailIndicatorOpacity' in opts ? opts.navigationRailIndicatorOpacity : null;
      let navigationRailBackgroundSchemeColor = opts && 'navigationRailBackgroundSchemeColor' in opts ? opts.navigationRailBackgroundSchemeColor : null;
      let navigationRailOpacity = opts && 'navigationRailOpacity' in opts ? opts.navigationRailOpacity : null;
      let navigationRailElevation = opts && 'navigationRailElevation' in opts ? opts.navigationRailElevation : null;
      let navigationRailLabelType = opts && 'navigationRailLabelType' in opts ? opts.navigationRailLabelType : null;
      let navigationRailGroupAlignment = opts && 'navigationRailGroupAlignment' in opts ? opts.navigationRailGroupAlignment : null;
      return new flex_sub_themes_data.FlexSubThemesData.new({interactionEffects: (t0 = interactionEffects, t0 == null ? this.interactionEffects : t0), blendOnLevel: (t0$ = blendOnLevel, t0$ == null ? this.blendOnLevel : t0$), blendOnColors: (t0$0 = blendOnColors, t0$0 == null ? this.blendOnColors : t0$0), useFlutterDefaults: (t0$1 = useFlutterDefaults, t0$1 == null ? this.useFlutterDefaults : t0$1), blendTextTheme: (t0$2 = blendTextTheme, t0$2 == null ? this.blendTextTheme : t0$2), useTextTheme: (t0$3 = useTextTheme, t0$3 == null ? this.useTextTheme : t0$3), defaultRadius: (t0$4 = defaultRadius, t0$4 == null ? this.defaultRadius : t0$4), buttonMinSize: (t0$5 = buttonMinSize, t0$5 == null ? this.buttonMinSize : t0$5), buttonPadding: (t0$6 = buttonPadding, t0$6 == null ? this.buttonPadding : t0$6), thickBorderWidth: (t0$7 = thickBorderWidth, t0$7 == null ? this.thickBorderWidth : t0$7), thinBorderWidth: (t0$8 = thinBorderWidth, t0$8 == null ? this.thinBorderWidth : t0$8), textButtonRadius: (t0$9 = textButtonRadius, t0$9 == null ? this.textButtonRadius : t0$9), elevatedButtonRadius: (t0$10 = elevatedButtonRadius, t0$10 == null ? this.elevatedButtonRadius : t0$10), elevatedButtonElevation: (t0$11 = elevatedButtonElevation, t0$11 == null ? this.elevatedButtonElevation : t0$11), outlinedButtonRadius: (t0$12 = outlinedButtonRadius, t0$12 == null ? this.outlinedButtonRadius : t0$12), toggleButtonsRadius: (t0$13 = toggleButtonsRadius, t0$13 == null ? this.toggleButtonsRadius : t0$13), textButtonSchemeColor: (t0$14 = textButtonSchemeColor, t0$14 == null ? this.textButtonSchemeColor : t0$14), elevatedButtonSchemeColor: (t0$15 = elevatedButtonSchemeColor, t0$15 == null ? this.elevatedButtonSchemeColor : t0$15), elevatedButtonSecondarySchemeColor: (t0$16 = elevatedButtonSecondarySchemeColor, t0$16 == null ? this.elevatedButtonSecondarySchemeColor : t0$16), outlinedButtonSchemeColor: (t0$17 = outlinedButtonSchemeColor, t0$17 == null ? this.outlinedButtonSchemeColor : t0$17), outlinedButtonOutlineSchemeColor: (t0$18 = outlinedButtonOutlineSchemeColor, t0$18 == null ? this.outlinedButtonOutlineSchemeColor : t0$18), materialButtonSchemeColor: (t0$19 = materialButtonSchemeColor, t0$19 == null ? this.materialButtonSchemeColor : t0$19), toggleButtonsSchemeColor: (t0$20 = toggleButtonsSchemeColor, t0$20 == null ? this.toggleButtonsSchemeColor : t0$20), switchSchemeColor: (t0$21 = switchSchemeColor, t0$21 == null ? this.switchSchemeColor : t0$21), checkboxSchemeColor: (t0$22 = checkboxSchemeColor, t0$22 == null ? this.checkboxSchemeColor : t0$22), radioSchemeColor: (t0$23 = radioSchemeColor, t0$23 == null ? this.radioSchemeColor : t0$23), unselectedToggleIsColored: (t0$24 = unselectedToggleIsColored, t0$24 == null ? this.unselectedToggleIsColored : t0$24), inputDecoratorRadius: (t0$25 = inputDecoratorRadius, t0$25 == null ? this.inputDecoratorRadius : t0$25), inputDecoratorSchemeColor: (t0$26 = inputDecoratorSchemeColor, t0$26 == null ? this.inputDecoratorSchemeColor : t0$26), inputDecoratorIsFilled: (t0$27 = inputDecoratorIsFilled, t0$27 == null ? this.inputDecoratorIsFilled : t0$27), inputDecoratorFillColor: (t0$28 = inputDecoratorFillColor, t0$28 == null ? this.inputDecoratorFillColor : t0$28), inputDecoratorBorderType: (t0$29 = inputDecoratorBorderType, t0$29 == null ? this.inputDecoratorBorderType : t0$29), inputDecoratorUnfocusedHasBorder: (t0$30 = inputDecoratorUnfocusedHasBorder, t0$30 == null ? this.inputDecoratorUnfocusedHasBorder : t0$30), inputDecoratorUnfocusedBorderIsColored: (t0$31 = inputDecoratorUnfocusedBorderIsColored, t0$31 == null ? this.inputDecoratorUnfocusedBorderIsColored : t0$31), fabRadius: (t0$32 = fabRadius, t0$32 == null ? this.fabRadius : t0$32), fabUseShape: (t0$33 = fabUseShape, t0$33 == null ? this.fabUseShape : t0$33), fabSchemeColor: (t0$34 = fabSchemeColor, t0$34 == null ? this.fabSchemeColor : t0$34), chipRadius: (t0$35 = chipRadius, t0$35 == null ? this.chipRadius : t0$35), chipSchemeColor: (t0$36 = chipSchemeColor, t0$36 == null ? this.chipSchemeColor : t0$36), cardRadius: (t0$37 = cardRadius, t0$37 == null ? this.cardRadius : t0$37), cardElevation: (t0$38 = cardElevation, t0$38 == null ? this.cardElevation : t0$38), dialogRadius: (t0$39 = dialogRadius, t0$39 == null ? this.dialogRadius : t0$39), dialogElevation: (t0$40 = dialogElevation, t0$40 == null ? this.dialogElevation : t0$40), dialogBackgroundSchemeColor: (t0$41 = dialogBackgroundSchemeColor, t0$41 == null ? this.dialogBackgroundSchemeColor : t0$41), popupMenuRadius: (t0$42 = popupMenuRadius, t0$42 == null ? this.popupMenuRadius : t0$42), popupMenuElevation: (t0$43 = popupMenuElevation, t0$43 == null ? this.popupMenuElevation : t0$43), popupMenuOpacity: (t0$44 = popupMenuOpacity, t0$44 == null ? this.popupMenuOpacity : t0$44), timePickerDialogRadius: (t0$45 = timePickerDialogRadius, t0$45 == null ? this.timePickerDialogRadius : t0$45), snackBarElevation: (t0$46 = snackBarElevation, t0$46 == null ? this.snackBarElevation : t0$46), snackBarBackgroundSchemeColor: (t0$47 = snackBarBackgroundSchemeColor, t0$47 == null ? this.snackBarBackgroundSchemeColor : t0$47), appBarBackgroundSchemeColor: (t0$48 = appBarBackgroundSchemeColor, t0$48 == null ? this.appBarBackgroundSchemeColor : t0$48), appBarCenterTitle: (t0$49 = appBarCenterTitle, t0$49 == null ? this.appBarCenterTitle : t0$49), tabBarItemSchemeColor: (t0$50 = tabBarItemSchemeColor, t0$50 == null ? this.tabBarItemSchemeColor : t0$50), tabBarIndicatorSchemeColor: (t0$51 = tabBarIndicatorSchemeColor, t0$51 == null ? this.tabBarIndicatorSchemeColor : t0$51), bottomSheetRadius: (t0$52 = bottomSheetRadius, t0$52 == null ? this.bottomSheetRadius : t0$52), bottomSheetElevation: (t0$53 = bottomSheetElevation, t0$53 == null ? this.bottomSheetElevation : t0$53), bottomSheetModalElevation: (t0$54 = bottomSheetModalElevation, t0$54 == null ? this.bottomSheetModalElevation : t0$54), bottomNavigationBarLabelTextStyle: (t0$55 = bottomNavigationBarLabelTextStyle, t0$55 == null ? this.bottomNavigationBarLabelTextStyle : t0$55), bottomNavigationBarSelectedLabelSize: (t0$56 = bottomNavigationBarSelectedLabelSize, t0$56 == null ? this.bottomNavigationBarSelectedLabelSize : t0$56), bottomNavigationBarUnselectedLabelSize: (t0$57 = bottomNavigationBarUnselectedLabelSize, t0$57 == null ? this.bottomNavigationBarUnselectedLabelSize : t0$57), bottomNavigationBarSelectedLabelSchemeColor: (t0$58 = bottomNavigationBarSelectedLabelSchemeColor, t0$58 == null ? this.bottomNavigationBarSelectedLabelSchemeColor : t0$58), bottomNavigationBarUnselectedLabelSchemeColor: (t0$59 = bottomNavigationBarUnselectedLabelSchemeColor, t0$59 == null ? this.bottomNavigationBarUnselectedLabelSchemeColor : t0$59), bottomNavigationBarMutedUnselectedLabel: (t0$60 = bottomNavigationBarMutedUnselectedLabel, t0$60 == null ? this.bottomNavigationBarMutedUnselectedLabel : t0$60), bottomNavigationBarSelectedIconSize: (t0$61 = bottomNavigationBarSelectedIconSize, t0$61 == null ? this.bottomNavigationBarSelectedIconSize : t0$61), bottomNavigationBarUnselectedIconSize: (t0$62 = bottomNavigationBarUnselectedIconSize, t0$62 == null ? this.bottomNavigationBarUnselectedIconSize : t0$62), bottomNavigationBarSelectedIconSchemeColor: (t0$63 = bottomNavigationBarSelectedIconSchemeColor, t0$63 == null ? this.bottomNavigationBarSelectedIconSchemeColor : t0$63), bottomNavigationBarUnselectedIconSchemeColor: (t0$64 = bottomNavigationBarUnselectedIconSchemeColor, t0$64 == null ? this.bottomNavigationBarUnselectedIconSchemeColor : t0$64), bottomNavigationBarMutedUnselectedIcon: (t0$65 = bottomNavigationBarMutedUnselectedIcon, t0$65 == null ? this.bottomNavigationBarMutedUnselectedIcon : t0$65), bottomNavigationBarBackgroundSchemeColor: (t0$66 = bottomNavigationBarBackgroundSchemeColor, t0$66 == null ? this.bottomNavigationBarBackgroundSchemeColor : t0$66), bottomNavigationBarOpacity: (t0$67 = bottomNavigationBarOpacity, t0$67 == null ? this.bottomNavigationBarOpacity : t0$67), bottomNavigationBarElevation: (t0$68 = bottomNavigationBarElevation, t0$68 == null ? this.bottomNavigationBarElevation : t0$68), bottomNavigationBarShowSelectedLabels: (t0$69 = bottomNavigationBarShowSelectedLabels, t0$69 == null ? this.bottomNavigationBarShowSelectedLabels : t0$69), bottomNavigationBarShowUnselectedLabels: (t0$70 = bottomNavigationBarShowUnselectedLabels, t0$70 == null ? this.bottomNavigationBarShowUnselectedLabels : t0$70), bottomNavigationBarType: (t0$71 = bottomNavigationBarType, t0$71 == null ? this.bottomNavigationBarType : t0$71), bottomNavigationBarLandscapeLayout: (t0$72 = bottomNavigationBarLandscapeLayout, t0$72 == null ? this.bottomNavigationBarLandscapeLayout : t0$72), navigationBarLabelTextStyle: (t0$73 = navigationBarLabelTextStyle, t0$73 == null ? this.navigationBarLabelTextStyle : t0$73), navigationBarSelectedLabelSize: (t0$74 = navigationBarSelectedLabelSize, t0$74 == null ? this.navigationBarSelectedLabelSize : t0$74), navigationBarUnselectedLabelSize: (t0$75 = navigationBarUnselectedLabelSize, t0$75 == null ? this.navigationBarUnselectedLabelSize : t0$75), navigationBarSelectedLabelSchemeColor: (t0$76 = navigationBarSelectedLabelSchemeColor, t0$76 == null ? this.navigationBarSelectedLabelSchemeColor : t0$76), navigationBarUnselectedLabelSchemeColor: (t0$77 = navigationBarUnselectedLabelSchemeColor, t0$77 == null ? this.navigationBarUnselectedLabelSchemeColor : t0$77), navigationBarMutedUnselectedLabel: (t0$78 = navigationBarMutedUnselectedLabel, t0$78 == null ? this.navigationBarMutedUnselectedLabel : t0$78), navigationBarSelectedIconSize: (t0$79 = navigationBarSelectedIconSize, t0$79 == null ? this.navigationBarSelectedIconSize : t0$79), navigationBarUnselectedIconSize: (t0$80 = navigationBarUnselectedIconSize, t0$80 == null ? this.navigationBarUnselectedIconSize : t0$80), navigationBarSelectedIconSchemeColor: (t0$81 = navigationBarSelectedIconSchemeColor, t0$81 == null ? this.navigationBarSelectedIconSchemeColor : t0$81), navigationBarUnselectedIconSchemeColor: (t0$82 = navigationBarUnselectedIconSchemeColor, t0$82 == null ? this.navigationBarUnselectedIconSchemeColor : t0$82), navigationBarMutedUnselectedIcon: (t0$83 = navigationBarMutedUnselectedIcon, t0$83 == null ? this.navigationBarMutedUnselectedIcon : t0$83), navigationBarIndicatorSchemeColor: (t0$84 = navigationBarIndicatorSchemeColor, t0$84 == null ? this.navigationBarIndicatorSchemeColor : t0$84), navigationBarIndicatorOpacity: (t0$85 = navigationBarIndicatorOpacity, t0$85 == null ? this.navigationBarIndicatorOpacity : t0$85), navigationBarBackgroundSchemeColor: (t0$86 = navigationBarBackgroundSchemeColor, t0$86 == null ? this.navigationBarBackgroundSchemeColor : t0$86), navigationBarOpacity: (t0$87 = navigationBarOpacity, t0$87 == null ? this.navigationBarOpacity : t0$87), navigationBarHeight: (t0$88 = navigationBarHeight, t0$88 == null ? this.navigationBarHeight : t0$88), navigationBarLabelBehavior: (t0$89 = navigationBarLabelBehavior, t0$89 == null ? this.navigationBarLabelBehavior : t0$89), navigationRailLabelTextStyle: (t0$90 = navigationRailLabelTextStyle, t0$90 == null ? this.navigationRailLabelTextStyle : t0$90), navigationRailSelectedLabelSize: (t0$91 = navigationRailSelectedLabelSize, t0$91 == null ? this.navigationRailSelectedLabelSize : t0$91), navigationRailUnselectedLabelSize: (t0$92 = navigationRailUnselectedLabelSize, t0$92 == null ? this.navigationRailUnselectedLabelSize : t0$92), navigationRailSelectedLabelSchemeColor: (t0$93 = navigationRailSelectedLabelSchemeColor, t0$93 == null ? this.navigationRailSelectedLabelSchemeColor : t0$93), navigationRailUnselectedLabelSchemeColor: (t0$94 = navigationRailUnselectedLabelSchemeColor, t0$94 == null ? this.navigationRailUnselectedLabelSchemeColor : t0$94), navigationRailMutedUnselectedLabel: (t0$95 = navigationRailMutedUnselectedLabel, t0$95 == null ? this.navigationRailMutedUnselectedLabel : t0$95), navigationRailSelectedIconSize: (t0$96 = navigationRailSelectedIconSize, t0$96 == null ? this.navigationRailSelectedIconSize : t0$96), navigationRailUnselectedIconSize: (t0$97 = navigationRailUnselectedIconSize, t0$97 == null ? this.navigationRailUnselectedIconSize : t0$97), navigationRailSelectedIconSchemeColor: (t0$98 = navigationRailSelectedIconSchemeColor, t0$98 == null ? this.navigationRailSelectedIconSchemeColor : t0$98), navigationRailUnselectedIconSchemeColor: (t0$99 = navigationRailUnselectedIconSchemeColor, t0$99 == null ? this.navigationRailUnselectedIconSchemeColor : t0$99), navigationRailMutedUnselectedIcon: (t0$100 = navigationRailMutedUnselectedIcon, t0$100 == null ? this.navigationRailMutedUnselectedIcon : t0$100), navigationRailUseIndicator: (t0$101 = navigationRailUseIndicator, t0$101 == null ? this.navigationRailUseIndicator : t0$101), navigationRailIndicatorSchemeColor: (t0$102 = navigationRailIndicatorSchemeColor, t0$102 == null ? this.navigationRailIndicatorSchemeColor : t0$102), navigationRailIndicatorOpacity: (t0$103 = navigationRailIndicatorOpacity, t0$103 == null ? this.navigationRailIndicatorOpacity : t0$103), navigationRailBackgroundSchemeColor: (t0$104 = navigationRailBackgroundSchemeColor, t0$104 == null ? this.navigationRailBackgroundSchemeColor : t0$104), navigationRailOpacity: (t0$105 = navigationRailOpacity, t0$105 == null ? this.navigationRailOpacity : t0$105), navigationRailElevation: (t0$106 = navigationRailElevation, t0$106 == null ? this.navigationRailElevation : t0$106), navigationRailLabelType: (t0$107 = navigationRailLabelType, t0$107 == null ? this.navigationRailLabelType : t0$107), navigationRailGroupAlignment: (t0$108 = navigationRailGroupAlignment, t0$108 == null ? this.navigationRailGroupAlignment : t0$108)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return flex_sub_themes_data.FlexSubThemesData.is(other) && other.interactionEffects === this.interactionEffects && other.blendOnLevel === this.blendOnLevel && other.blendOnColors === this.blendOnColors && other.useFlutterDefaults === this.useFlutterDefaults && other.blendTextTheme === this.blendTextTheme && other.useTextTheme === this.useTextTheme && other.defaultRadius == this.defaultRadius && dart.equals(other.buttonMinSize, this.buttonMinSize) && dart.equals(other.buttonPadding, this.buttonPadding) && other.thickBorderWidth == this.thickBorderWidth && other.thinBorderWidth == this.thinBorderWidth && other.textButtonRadius == this.textButtonRadius && other.elevatedButtonRadius == this.elevatedButtonRadius && other.elevatedButtonElevation == this.elevatedButtonElevation && other.outlinedButtonRadius == this.outlinedButtonRadius && other.toggleButtonsRadius == this.toggleButtonsRadius && other.textButtonSchemeColor == this.textButtonSchemeColor && other.elevatedButtonSchemeColor == this.elevatedButtonSchemeColor && other.elevatedButtonSecondarySchemeColor == this.elevatedButtonSecondarySchemeColor && other.outlinedButtonSchemeColor == this.outlinedButtonSchemeColor && other.outlinedButtonOutlineSchemeColor == this.outlinedButtonOutlineSchemeColor && other.materialButtonSchemeColor == this.materialButtonSchemeColor && other.toggleButtonsSchemeColor == this.toggleButtonsSchemeColor && other.switchSchemeColor == this.switchSchemeColor && other.checkboxSchemeColor == this.checkboxSchemeColor && other.radioSchemeColor == this.radioSchemeColor && other.unselectedToggleIsColored === this.unselectedToggleIsColored && other.inputDecoratorRadius == this.inputDecoratorRadius && other.inputDecoratorSchemeColor == this.inputDecoratorSchemeColor && other.inputDecoratorIsFilled === this.inputDecoratorIsFilled && dart.equals(other.inputDecoratorFillColor, this.inputDecoratorFillColor) && other.inputDecoratorBorderType === this.inputDecoratorBorderType && other.inputDecoratorUnfocusedHasBorder === this.inputDecoratorUnfocusedHasBorder && other.inputDecoratorUnfocusedBorderIsColored === this.inputDecoratorUnfocusedBorderIsColored && other.fabRadius == this.fabRadius && other.fabUseShape === this.fabUseShape && other.fabSchemeColor == this.fabSchemeColor && other.chipRadius == this.chipRadius && other.chipSchemeColor == this.chipSchemeColor && other.cardRadius == this.cardRadius && other.cardElevation === this.cardElevation && other.popupMenuRadius == this.popupMenuRadius && other.popupMenuElevation === this.popupMenuElevation && other.popupMenuOpacity == this.popupMenuOpacity && other.dialogRadius == this.dialogRadius && other.dialogElevation === this.dialogElevation && other.dialogElevation === this.dialogElevation && other.timePickerDialogRadius == this.timePickerDialogRadius && other.snackBarElevation === this.snackBarElevation && other.snackBarBackgroundSchemeColor == this.snackBarBackgroundSchemeColor && other.appBarBackgroundSchemeColor == this.appBarBackgroundSchemeColor && other.appBarCenterTitle == this.appBarCenterTitle && other.tabBarItemSchemeColor == this.tabBarItemSchemeColor && other.tabBarIndicatorSchemeColor == this.tabBarIndicatorSchemeColor && other.bottomSheetRadius == this.bottomSheetRadius && other.bottomSheetElevation === this.bottomSheetElevation && other.bottomSheetModalElevation === this.bottomSheetModalElevation && dart.equals(other.bottomNavigationBarLabelTextStyle, this.bottomNavigationBarLabelTextStyle) && other.bottomNavigationBarSelectedLabelSize == this.bottomNavigationBarSelectedLabelSize && other.bottomNavigationBarUnselectedLabelSize == this.bottomNavigationBarUnselectedLabelSize && other.bottomNavigationBarSelectedLabelSchemeColor == this.bottomNavigationBarSelectedLabelSchemeColor && other.bottomNavigationBarUnselectedLabelSchemeColor == this.bottomNavigationBarUnselectedLabelSchemeColor && other.bottomNavigationBarMutedUnselectedLabel == this.bottomNavigationBarMutedUnselectedLabel && other.bottomNavigationBarSelectedIconSize == this.bottomNavigationBarSelectedIconSize && other.bottomNavigationBarUnselectedIconSize == this.bottomNavigationBarUnselectedIconSize && other.bottomNavigationBarSelectedIconSchemeColor == this.bottomNavigationBarSelectedIconSchemeColor && other.bottomNavigationBarUnselectedIconSchemeColor == this.bottomNavigationBarUnselectedIconSchemeColor && other.bottomNavigationBarMutedUnselectedIcon == this.bottomNavigationBarMutedUnselectedIcon && other.bottomNavigationBarBackgroundSchemeColor == this.bottomNavigationBarBackgroundSchemeColor && other.bottomNavigationBarOpacity === this.bottomNavigationBarOpacity && other.bottomNavigationBarElevation === this.bottomNavigationBarElevation && other.bottomNavigationBarShowSelectedLabels === this.bottomNavigationBarShowSelectedLabels && other.bottomNavigationBarShowUnselectedLabels === this.bottomNavigationBarShowUnselectedLabels && other.bottomNavigationBarType == this.bottomNavigationBarType && other.bottomNavigationBarLandscapeLayout == this.bottomNavigationBarLandscapeLayout && dart.equals(other.navigationBarLabelTextStyle, this.navigationBarLabelTextStyle) && other.navigationBarSelectedLabelSize == this.navigationBarSelectedLabelSize && other.navigationBarUnselectedLabelSize == this.navigationBarUnselectedLabelSize && other.navigationBarSelectedLabelSchemeColor == this.navigationBarSelectedLabelSchemeColor && other.navigationBarUnselectedLabelSchemeColor == this.navigationBarUnselectedLabelSchemeColor && other.navigationBarMutedUnselectedLabel == this.navigationBarMutedUnselectedLabel && other.navigationBarSelectedIconSize == this.navigationBarSelectedIconSize && other.navigationBarUnselectedIconSize == this.navigationBarUnselectedIconSize && other.navigationBarSelectedIconSchemeColor == this.navigationBarSelectedIconSchemeColor && other.navigationBarUnselectedIconSchemeColor == this.navigationBarUnselectedIconSchemeColor && other.navigationBarMutedUnselectedIcon == this.navigationBarMutedUnselectedIcon && other.navigationBarIndicatorSchemeColor == this.navigationBarIndicatorSchemeColor && other.navigationBarIndicatorOpacity == this.navigationBarIndicatorOpacity && other.navigationBarBackgroundSchemeColor == this.navigationBarBackgroundSchemeColor && other.navigationBarOpacity === this.navigationBarOpacity && other.navigationBarHeight == this.navigationBarHeight && other.navigationBarLabelBehavior == this.navigationBarLabelBehavior && dart.equals(other.navigationRailLabelTextStyle, this.navigationRailLabelTextStyle) && other.navigationRailSelectedLabelSize == this.navigationRailSelectedLabelSize && other.navigationRailUnselectedLabelSize == this.navigationRailUnselectedLabelSize && other.navigationRailSelectedLabelSchemeColor == this.navigationRailSelectedLabelSchemeColor && other.navigationRailUnselectedLabelSchemeColor == this.navigationRailUnselectedLabelSchemeColor && other.navigationRailMutedUnselectedLabel == this.navigationRailMutedUnselectedLabel && other.navigationRailSelectedIconSize == this.navigationRailSelectedIconSize && other.navigationRailUnselectedIconSize == this.navigationRailUnselectedIconSize && other.navigationRailSelectedIconSchemeColor == this.navigationRailSelectedIconSchemeColor && other.navigationRailUnselectedIconSchemeColor == this.navigationRailUnselectedIconSchemeColor && other.navigationRailMutedUnselectedIcon == this.navigationRailMutedUnselectedIcon && other.navigationRailUseIndicator == this.navigationRailUseIndicator && other.navigationRailIndicatorSchemeColor == this.navigationRailIndicatorSchemeColor && other.navigationRailIndicatorOpacity == this.navigationRailIndicatorOpacity && other.navigationRailBackgroundSchemeColor == this.navigationRailBackgroundSchemeColor && other.navigationRailOpacity === this.navigationRailOpacity && other.navigationRailElevation === this.navigationRailElevation && other.navigationRailLabelType == this.navigationRailLabelType && other.navigationRailGroupAlignment == this.navigationRailGroupAlignment;
    }
    get hashCode() {
      return core.Object.hashAll(T.JSArrayOfObjectN().of([this.interactionEffects, this.blendOnLevel, this.blendOnColors, this.useFlutterDefaults, this.blendTextTheme, this.useTextTheme, this.defaultRadius, this.buttonMinSize, this.buttonPadding, this.thickBorderWidth, this.thinBorderWidth, this.textButtonRadius, this.elevatedButtonRadius, this.elevatedButtonElevation, this.outlinedButtonRadius, this.toggleButtonsRadius, this.textButtonSchemeColor, this.elevatedButtonSchemeColor, this.elevatedButtonSecondarySchemeColor, this.outlinedButtonSchemeColor, this.outlinedButtonOutlineSchemeColor, this.materialButtonSchemeColor, this.toggleButtonsSchemeColor, this.switchSchemeColor, this.checkboxSchemeColor, this.radioSchemeColor, this.unselectedToggleIsColored, this.inputDecoratorRadius, this.inputDecoratorSchemeColor, this.inputDecoratorIsFilled, this.inputDecoratorFillColor, this.inputDecoratorBorderType, this.inputDecoratorUnfocusedHasBorder, this.inputDecoratorUnfocusedBorderIsColored, this.fabRadius, this.fabUseShape, this.fabSchemeColor, this.chipRadius, this.chipSchemeColor, this.cardRadius, this.cardElevation, this.popupMenuRadius, this.popupMenuElevation, this.popupMenuOpacity, this.dialogRadius, this.dialogElevation, this.dialogBackgroundSchemeColor, this.timePickerDialogRadius, this.snackBarElevation, this.snackBarBackgroundSchemeColor, this.appBarBackgroundSchemeColor, this.appBarCenterTitle, this.tabBarItemSchemeColor, this.tabBarIndicatorSchemeColor, this.bottomSheetRadius, this.bottomSheetElevation, this.bottomSheetModalElevation, this.bottomNavigationBarLabelTextStyle, this.bottomNavigationBarSelectedLabelSize, this.bottomNavigationBarUnselectedLabelSize, this.bottomNavigationBarSelectedLabelSchemeColor, this.bottomNavigationBarUnselectedLabelSchemeColor, this.bottomNavigationBarMutedUnselectedLabel, this.bottomNavigationBarSelectedIconSize, this.bottomNavigationBarUnselectedIconSize, this.bottomNavigationBarSelectedIconSchemeColor, this.bottomNavigationBarUnselectedIconSchemeColor, this.bottomNavigationBarMutedUnselectedIcon, this.bottomNavigationBarBackgroundSchemeColor, this.bottomNavigationBarOpacity, this.bottomNavigationBarElevation, this.bottomNavigationBarShowSelectedLabels, this.bottomNavigationBarShowUnselectedLabels, this.bottomNavigationBarType, this.bottomNavigationBarLandscapeLayout, this.navigationBarLabelTextStyle, this.navigationBarSelectedLabelSize, this.navigationBarUnselectedLabelSize, this.navigationBarSelectedLabelSchemeColor, this.navigationBarUnselectedLabelSchemeColor, this.navigationBarMutedUnselectedLabel, this.navigationBarSelectedIconSize, this.navigationBarUnselectedIconSize, this.navigationBarSelectedIconSchemeColor, this.navigationBarUnselectedIconSchemeColor, this.navigationBarMutedUnselectedIcon, this.navigationBarIndicatorSchemeColor, this.navigationBarIndicatorOpacity, this.navigationBarBackgroundSchemeColor, this.navigationBarOpacity, this.navigationBarHeight, this.navigationBarLabelBehavior, this.navigationRailLabelTextStyle, this.navigationRailSelectedLabelSize, this.navigationRailUnselectedLabelSize, this.navigationRailSelectedLabelSchemeColor, this.navigationRailUnselectedLabelSchemeColor, this.navigationRailMutedUnselectedLabel, this.navigationRailSelectedIconSize, this.navigationRailUnselectedIconSize, this.navigationRailSelectedIconSchemeColor, this.navigationRailUnselectedIconSchemeColor, this.navigationRailMutedUnselectedIcon, this.navigationRailUseIndicator, this.navigationRailIndicatorSchemeColor, this.navigationRailIndicatorOpacity, this.navigationRailBackgroundSchemeColor, this.navigationRailOpacity, this.navigationRailElevation, this.navigationRailLabelType, this.navigationRailGroupAlignment]));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("interactionEffects", this.interactionEffects));
      properties.add(new (T.DiagnosticsPropertyOfint()).new("blendOnLevel ", this.blendOnLevel));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("blendOnColors", this.blendOnColors));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("useFlutterDefaults", this.useFlutterDefaults));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("blendTextTheme", this.blendTextTheme));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("useTextTheme", this.useTextTheme));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("defaultRadius", this.defaultRadius));
      properties.add(new (T.DiagnosticsPropertyOfSize()).new("buttonMinSize", this.buttonMinSize));
      properties.add(new (T.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("buttonPadding", this.buttonPadding));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("thickBorderWidth", this.thickBorderWidth));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("thinBorderWidth", this.thinBorderWidth));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("textButtonRadius", this.textButtonRadius));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("elevatedButtonRadius", this.elevatedButtonRadius));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("elevatedButtonElevation", this.elevatedButtonElevation));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("outlinedButtonRadius", this.outlinedButtonRadius));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("toggleButtonsRadius", this.toggleButtonsRadius));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("textButtonSchemeColor", this.textButtonSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("elevatedButtonSchemeColor", this.elevatedButtonSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("elevatedButtonSecondarySchemeColor", this.elevatedButtonSecondarySchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("outlinedButtonSchemeColor", this.outlinedButtonSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("outlinedButtonOutlineSchemeColor", this.outlinedButtonOutlineSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("materialButtonSchemeColor", this.materialButtonSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("toggleButtonsSchemeColor", this.toggleButtonsSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("switchSchemeColor", this.switchSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("checkboxSchemeColor", this.checkboxSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("radioSchemeColor", this.radioSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("unselectedToggleIsColored", this.unselectedToggleIsColored));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("inputDecoratorRadius", this.inputDecoratorRadius));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("inputDecoratorSchemeColor", this.inputDecoratorSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("inputDecoratorIsFilled", this.inputDecoratorIsFilled));
      properties.add(new colors.ColorProperty.new("inputDecoratorFillColor", this.inputDecoratorFillColor));
      properties.add(new (T.EnumPropertyOfFlexInputBorderType()).new("inputDecoratorBorderType", this.inputDecoratorBorderType));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("inputDecoratorUnfocusedHasBorder", this.inputDecoratorUnfocusedHasBorder));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("inputDecoratorUnfocusedBorderIsColored", this.inputDecoratorUnfocusedBorderIsColored));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("fabRadius", this.fabRadius));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("fabUseShape", this.fabUseShape));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("fabSchemeColor", this.fabSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("chipRadius", this.chipRadius));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("chipSchemeColor", this.chipSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("cardRadius", this.cardRadius));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("cardElevation", this.cardElevation));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("popupMenuRadius", this.popupMenuRadius));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("popupMenuElevation", this.popupMenuElevation));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("popupMenuOpacity", this.popupMenuOpacity));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("dialogRadius", this.dialogRadius));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("dialogElevation", this.dialogElevation));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("dialogBackgroundSchemeColor", this.dialogBackgroundSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("timePickerDialogRadius", this.timePickerDialogRadius));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("snackBarElevation", this.snackBarElevation));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("snackBarBackgroundSchemeColor", this.snackBarBackgroundSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("appBarBackgroundSchemeColor", this.appBarBackgroundSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("appBarCenterTitle", this.appBarCenterTitle));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("tabBarItemSchemeColor", this.tabBarItemSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("tabBarIndicatorSchemeColor", this.tabBarIndicatorSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("bottomSheetRadius", this.bottomSheetRadius));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("bottomSheetElevation", this.bottomSheetElevation));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("bottomSheetModalElevation", this.bottomSheetModalElevation));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("bottomNavigationBarLabelTextStyle", this.bottomNavigationBarLabelTextStyle));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("bottomNavigationBarSelectedLabelSize", this.bottomNavigationBarSelectedLabelSize));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("bottomNavigationBarUnselectedLabelSize", this.bottomNavigationBarUnselectedLabelSize));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("bottomNavigationBarSelectedLabelSchemeColor", this.bottomNavigationBarSelectedLabelSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("bottomNavigationBarUnselectedLabelSchemeColor", this.bottomNavigationBarUnselectedLabelSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("bottomNavigationBarMutedUnselectedLabel", this.bottomNavigationBarMutedUnselectedLabel));
      properties.add(new (T.EnumPropertyOfdouble()).new("bottomNavigationBarSelectedIconSize", this.bottomNavigationBarSelectedIconSize));
      properties.add(new (T.EnumPropertyOfdouble()).new("bottomNavigationBarUnselectedIconSize", this.bottomNavigationBarUnselectedIconSize));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("bottomNavigationBarSelectedIconSchemeColor", this.bottomNavigationBarSelectedIconSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("bottomNavigationBarUnselectedIconSchemeColor", this.bottomNavigationBarUnselectedIconSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("bottomNavigationBarMutedUnselectedIcon", this.bottomNavigationBarMutedUnselectedIcon));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("bottomNavigationBarBackgroundSchemeColor", this.bottomNavigationBarBackgroundSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("bottomNavigationBarOpacity", this.bottomNavigationBarOpacity));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("bottomNavigationBarElevation", this.bottomNavigationBarElevation));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("bottomNavigationBarShowSelectedLabels", this.bottomNavigationBarShowSelectedLabels));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("bottomNavigationBarShowUnselectedLabels", this.bottomNavigationBarShowUnselectedLabels));
      properties.add(new (T.EnumPropertyOfBottomNavigationBarType()).new("bottomNavigationBarType", this.bottomNavigationBarType));
      properties.add(new (T.EnumPropertyOfBottomNavigationBarLandscapeLayout()).new("bottomNavigationBarLandscapeLayout", this.bottomNavigationBarLandscapeLayout));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("navigationBarLabelTextStyle", this.navigationBarLabelTextStyle));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationBarSelectedLabelSize", this.navigationBarSelectedLabelSize));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationBarUnselectedLabelSize", this.navigationBarUnselectedLabelSize));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("navigationBarSelectedLabelSchemeColor", this.navigationBarSelectedLabelSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("navigationBarUnselectedLabelSchemeColor", this.navigationBarUnselectedLabelSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("navigationBarMutedUnselectedLabel", this.navigationBarMutedUnselectedLabel));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationBarSelectedIconSize", this.navigationBarSelectedIconSize));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationBarUnselectedIconSize", this.navigationBarUnselectedIconSize));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("navigationBarSelectedIconSchemeColor", this.navigationBarSelectedIconSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("navigationBarUnselectedIconSchemeColor", this.navigationBarUnselectedIconSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("navigationBarMutedUnselectedIcon", this.navigationBarMutedUnselectedIcon));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("navigationBarIndicatorSchemeColor", this.navigationBarIndicatorSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationBarHighlightOpacity", this.navigationBarIndicatorOpacity));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("navigationBarBackgroundSchemeColor", this.navigationBarBackgroundSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationBarOpacity", this.navigationBarOpacity));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationBarHeight", this.navigationBarHeight));
      properties.add(new (T.EnumPropertyOfNavigationDestinationLabelBehavior()).new("navigationBarLabelBehavior", this.navigationBarLabelBehavior));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("navigationRailLabelTextStyle", this.navigationRailLabelTextStyle));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationRailSelectedLabelSize", this.navigationRailSelectedLabelSize));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationRailUnselectedLabelSize", this.navigationRailUnselectedLabelSize));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("navigationRailSelectedLabelSchemeColor", this.navigationRailSelectedLabelSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("navigationRailUnselectedLabelSchemeColor", this.navigationRailUnselectedLabelSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("navigationRailMutedUnselectedLabel", this.navigationRailMutedUnselectedLabel));
      properties.add(new (T.EnumPropertyOfdouble()).new("navigationRailSelectedIconSize", this.navigationRailSelectedIconSize));
      properties.add(new (T.EnumPropertyOfdouble()).new("navigationRailUnselectedIconSize", this.navigationRailUnselectedIconSize));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("navigationRailSelectedIconSchemeColor", this.navigationRailSelectedIconSchemeColor));
      properties.add(new (T.EnumPropertyOfSchemeColor()).new("navigationRailUnselectedIconSchemeColor", this.navigationRailUnselectedIconSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("navigationRailMutedUnselectedIcon", this.navigationRailMutedUnselectedIcon));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("navigationRailUseIndicator", this.navigationRailUseIndicator));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("navigationRailIndicatorSchemeColor", this.navigationRailIndicatorSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationRailIndicatorOpacity", this.navigationRailIndicatorOpacity));
      properties.add(new (T.DiagnosticsPropertyOfSchemeColor()).new("navigationRailBackgroundSchemeColor", this.navigationRailBackgroundSchemeColor));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationRailOpacity", this.navigationRailOpacity));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationRailElevation", this.navigationRailElevation));
      properties.add(new (T.EnumPropertyOfNavigationRailLabelType()).new("navigationRailLabelType", this.navigationRailLabelType));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("navigationRailGroupAlignment", this.navigationRailGroupAlignment));
    }
  };
  (flex_sub_themes_data.FlexSubThemesData.new = function(opts) {
    let interactionEffects = opts && 'interactionEffects' in opts ? opts.interactionEffects : true;
    let blendOnLevel = opts && 'blendOnLevel' in opts ? opts.blendOnLevel : 0;
    let blendOnColors = opts && 'blendOnColors' in opts ? opts.blendOnColors : true;
    let useFlutterDefaults = opts && 'useFlutterDefaults' in opts ? opts.useFlutterDefaults : false;
    let blendTextTheme = opts && 'blendTextTheme' in opts ? opts.blendTextTheme : true;
    let useTextTheme = opts && 'useTextTheme' in opts ? opts.useTextTheme : true;
    let defaultRadius = opts && 'defaultRadius' in opts ? opts.defaultRadius : null;
    let buttonMinSize = opts && 'buttonMinSize' in opts ? opts.buttonMinSize : null;
    let buttonPadding = opts && 'buttonPadding' in opts ? opts.buttonPadding : null;
    let thickBorderWidth = opts && 'thickBorderWidth' in opts ? opts.thickBorderWidth : null;
    let thinBorderWidth = opts && 'thinBorderWidth' in opts ? opts.thinBorderWidth : null;
    let textButtonRadius = opts && 'textButtonRadius' in opts ? opts.textButtonRadius : null;
    let elevatedButtonRadius = opts && 'elevatedButtonRadius' in opts ? opts.elevatedButtonRadius : null;
    let elevatedButtonElevation = opts && 'elevatedButtonElevation' in opts ? opts.elevatedButtonElevation : null;
    let outlinedButtonRadius = opts && 'outlinedButtonRadius' in opts ? opts.outlinedButtonRadius : null;
    let toggleButtonsRadius = opts && 'toggleButtonsRadius' in opts ? opts.toggleButtonsRadius : null;
    let textButtonSchemeColor = opts && 'textButtonSchemeColor' in opts ? opts.textButtonSchemeColor : null;
    let elevatedButtonSchemeColor = opts && 'elevatedButtonSchemeColor' in opts ? opts.elevatedButtonSchemeColor : null;
    let elevatedButtonSecondarySchemeColor = opts && 'elevatedButtonSecondarySchemeColor' in opts ? opts.elevatedButtonSecondarySchemeColor : null;
    let outlinedButtonSchemeColor = opts && 'outlinedButtonSchemeColor' in opts ? opts.outlinedButtonSchemeColor : null;
    let outlinedButtonOutlineSchemeColor = opts && 'outlinedButtonOutlineSchemeColor' in opts ? opts.outlinedButtonOutlineSchemeColor : null;
    let materialButtonSchemeColor = opts && 'materialButtonSchemeColor' in opts ? opts.materialButtonSchemeColor : null;
    let toggleButtonsSchemeColor = opts && 'toggleButtonsSchemeColor' in opts ? opts.toggleButtonsSchemeColor : null;
    let switchSchemeColor = opts && 'switchSchemeColor' in opts ? opts.switchSchemeColor : null;
    let checkboxSchemeColor = opts && 'checkboxSchemeColor' in opts ? opts.checkboxSchemeColor : null;
    let radioSchemeColor = opts && 'radioSchemeColor' in opts ? opts.radioSchemeColor : null;
    let unselectedToggleIsColored = opts && 'unselectedToggleIsColored' in opts ? opts.unselectedToggleIsColored : false;
    let inputDecoratorRadius = opts && 'inputDecoratorRadius' in opts ? opts.inputDecoratorRadius : null;
    let inputDecoratorSchemeColor = opts && 'inputDecoratorSchemeColor' in opts ? opts.inputDecoratorSchemeColor : null;
    let inputDecoratorIsFilled = opts && 'inputDecoratorIsFilled' in opts ? opts.inputDecoratorIsFilled : true;
    let inputDecoratorFillColor = opts && 'inputDecoratorFillColor' in opts ? opts.inputDecoratorFillColor : null;
    let inputDecoratorBorderType = opts && 'inputDecoratorBorderType' in opts ? opts.inputDecoratorBorderType : C[0] || CT.C0;
    let inputDecoratorUnfocusedHasBorder = opts && 'inputDecoratorUnfocusedHasBorder' in opts ? opts.inputDecoratorUnfocusedHasBorder : true;
    let inputDecoratorUnfocusedBorderIsColored = opts && 'inputDecoratorUnfocusedBorderIsColored' in opts ? opts.inputDecoratorUnfocusedBorderIsColored : true;
    let fabRadius = opts && 'fabRadius' in opts ? opts.fabRadius : null;
    let fabUseShape = opts && 'fabUseShape' in opts ? opts.fabUseShape : false;
    let fabSchemeColor = opts && 'fabSchemeColor' in opts ? opts.fabSchemeColor : null;
    let chipRadius = opts && 'chipRadius' in opts ? opts.chipRadius : null;
    let chipSchemeColor = opts && 'chipSchemeColor' in opts ? opts.chipSchemeColor : null;
    let cardRadius = opts && 'cardRadius' in opts ? opts.cardRadius : null;
    let cardElevation = opts && 'cardElevation' in opts ? opts.cardElevation : 0;
    let popupMenuRadius = opts && 'popupMenuRadius' in opts ? opts.popupMenuRadius : null;
    let popupMenuElevation = opts && 'popupMenuElevation' in opts ? opts.popupMenuElevation : 3;
    let popupMenuOpacity = opts && 'popupMenuOpacity' in opts ? opts.popupMenuOpacity : 1;
    let dialogRadius = opts && 'dialogRadius' in opts ? opts.dialogRadius : null;
    let dialogElevation = opts && 'dialogElevation' in opts ? opts.dialogElevation : 6;
    let dialogBackgroundSchemeColor = opts && 'dialogBackgroundSchemeColor' in opts ? opts.dialogBackgroundSchemeColor : null;
    let timePickerDialogRadius = opts && 'timePickerDialogRadius' in opts ? opts.timePickerDialogRadius : null;
    let snackBarElevation = opts && 'snackBarElevation' in opts ? opts.snackBarElevation : 4;
    let snackBarBackgroundSchemeColor = opts && 'snackBarBackgroundSchemeColor' in opts ? opts.snackBarBackgroundSchemeColor : null;
    let appBarBackgroundSchemeColor = opts && 'appBarBackgroundSchemeColor' in opts ? opts.appBarBackgroundSchemeColor : null;
    let appBarCenterTitle = opts && 'appBarCenterTitle' in opts ? opts.appBarCenterTitle : null;
    let tabBarItemSchemeColor = opts && 'tabBarItemSchemeColor' in opts ? opts.tabBarItemSchemeColor : null;
    let tabBarIndicatorSchemeColor = opts && 'tabBarIndicatorSchemeColor' in opts ? opts.tabBarIndicatorSchemeColor : null;
    let bottomSheetRadius = opts && 'bottomSheetRadius' in opts ? opts.bottomSheetRadius : null;
    let bottomSheetElevation = opts && 'bottomSheetElevation' in opts ? opts.bottomSheetElevation : 4;
    let bottomSheetModalElevation = opts && 'bottomSheetModalElevation' in opts ? opts.bottomSheetModalElevation : 8;
    let bottomNavigationBarLabelTextStyle = opts && 'bottomNavigationBarLabelTextStyle' in opts ? opts.bottomNavigationBarLabelTextStyle : null;
    let bottomNavigationBarSelectedLabelSize = opts && 'bottomNavigationBarSelectedLabelSize' in opts ? opts.bottomNavigationBarSelectedLabelSize : null;
    let bottomNavigationBarUnselectedLabelSize = opts && 'bottomNavigationBarUnselectedLabelSize' in opts ? opts.bottomNavigationBarUnselectedLabelSize : null;
    let bottomNavigationBarSelectedLabelSchemeColor = opts && 'bottomNavigationBarSelectedLabelSchemeColor' in opts ? opts.bottomNavigationBarSelectedLabelSchemeColor : null;
    let bottomNavigationBarUnselectedLabelSchemeColor = opts && 'bottomNavigationBarUnselectedLabelSchemeColor' in opts ? opts.bottomNavigationBarUnselectedLabelSchemeColor : null;
    let bottomNavigationBarMutedUnselectedLabel = opts && 'bottomNavigationBarMutedUnselectedLabel' in opts ? opts.bottomNavigationBarMutedUnselectedLabel : true;
    let bottomNavigationBarSelectedIconSize = opts && 'bottomNavigationBarSelectedIconSize' in opts ? opts.bottomNavigationBarSelectedIconSize : null;
    let bottomNavigationBarUnselectedIconSize = opts && 'bottomNavigationBarUnselectedIconSize' in opts ? opts.bottomNavigationBarUnselectedIconSize : null;
    let bottomNavigationBarSelectedIconSchemeColor = opts && 'bottomNavigationBarSelectedIconSchemeColor' in opts ? opts.bottomNavigationBarSelectedIconSchemeColor : null;
    let bottomNavigationBarUnselectedIconSchemeColor = opts && 'bottomNavigationBarUnselectedIconSchemeColor' in opts ? opts.bottomNavigationBarUnselectedIconSchemeColor : null;
    let bottomNavigationBarMutedUnselectedIcon = opts && 'bottomNavigationBarMutedUnselectedIcon' in opts ? opts.bottomNavigationBarMutedUnselectedIcon : true;
    let bottomNavigationBarBackgroundSchemeColor = opts && 'bottomNavigationBarBackgroundSchemeColor' in opts ? opts.bottomNavigationBarBackgroundSchemeColor : null;
    let bottomNavigationBarOpacity = opts && 'bottomNavigationBarOpacity' in opts ? opts.bottomNavigationBarOpacity : 1;
    let bottomNavigationBarElevation = opts && 'bottomNavigationBarElevation' in opts ? opts.bottomNavigationBarElevation : 0;
    let bottomNavigationBarShowSelectedLabels = opts && 'bottomNavigationBarShowSelectedLabels' in opts ? opts.bottomNavigationBarShowSelectedLabels : true;
    let bottomNavigationBarShowUnselectedLabels = opts && 'bottomNavigationBarShowUnselectedLabels' in opts ? opts.bottomNavigationBarShowUnselectedLabels : true;
    let bottomNavigationBarType = opts && 'bottomNavigationBarType' in opts ? opts.bottomNavigationBarType : C[1] || CT.C1;
    let bottomNavigationBarLandscapeLayout = opts && 'bottomNavigationBarLandscapeLayout' in opts ? opts.bottomNavigationBarLandscapeLayout : null;
    let navigationBarLabelTextStyle = opts && 'navigationBarLabelTextStyle' in opts ? opts.navigationBarLabelTextStyle : null;
    let navigationBarSelectedLabelSize = opts && 'navigationBarSelectedLabelSize' in opts ? opts.navigationBarSelectedLabelSize : null;
    let navigationBarUnselectedLabelSize = opts && 'navigationBarUnselectedLabelSize' in opts ? opts.navigationBarUnselectedLabelSize : null;
    let navigationBarSelectedLabelSchemeColor = opts && 'navigationBarSelectedLabelSchemeColor' in opts ? opts.navigationBarSelectedLabelSchemeColor : null;
    let navigationBarUnselectedLabelSchemeColor = opts && 'navigationBarUnselectedLabelSchemeColor' in opts ? opts.navigationBarUnselectedLabelSchemeColor : null;
    let navigationBarMutedUnselectedLabel = opts && 'navigationBarMutedUnselectedLabel' in opts ? opts.navigationBarMutedUnselectedLabel : true;
    let navigationBarSelectedIconSize = opts && 'navigationBarSelectedIconSize' in opts ? opts.navigationBarSelectedIconSize : null;
    let navigationBarUnselectedIconSize = opts && 'navigationBarUnselectedIconSize' in opts ? opts.navigationBarUnselectedIconSize : null;
    let navigationBarSelectedIconSchemeColor = opts && 'navigationBarSelectedIconSchemeColor' in opts ? opts.navigationBarSelectedIconSchemeColor : null;
    let navigationBarUnselectedIconSchemeColor = opts && 'navigationBarUnselectedIconSchemeColor' in opts ? opts.navigationBarUnselectedIconSchemeColor : null;
    let navigationBarMutedUnselectedIcon = opts && 'navigationBarMutedUnselectedIcon' in opts ? opts.navigationBarMutedUnselectedIcon : true;
    let navigationBarIndicatorSchemeColor = opts && 'navigationBarIndicatorSchemeColor' in opts ? opts.navigationBarIndicatorSchemeColor : null;
    let navigationBarIndicatorOpacity = opts && 'navigationBarIndicatorOpacity' in opts ? opts.navigationBarIndicatorOpacity : null;
    let navigationBarBackgroundSchemeColor = opts && 'navigationBarBackgroundSchemeColor' in opts ? opts.navigationBarBackgroundSchemeColor : null;
    let navigationBarOpacity = opts && 'navigationBarOpacity' in opts ? opts.navigationBarOpacity : 1;
    let navigationBarHeight = opts && 'navigationBarHeight' in opts ? opts.navigationBarHeight : null;
    let navigationBarLabelBehavior = opts && 'navigationBarLabelBehavior' in opts ? opts.navigationBarLabelBehavior : C[2] || CT.C2;
    let navigationRailLabelTextStyle = opts && 'navigationRailLabelTextStyle' in opts ? opts.navigationRailLabelTextStyle : null;
    let navigationRailSelectedLabelSize = opts && 'navigationRailSelectedLabelSize' in opts ? opts.navigationRailSelectedLabelSize : null;
    let navigationRailUnselectedLabelSize = opts && 'navigationRailUnselectedLabelSize' in opts ? opts.navigationRailUnselectedLabelSize : null;
    let navigationRailSelectedLabelSchemeColor = opts && 'navigationRailSelectedLabelSchemeColor' in opts ? opts.navigationRailSelectedLabelSchemeColor : null;
    let navigationRailUnselectedLabelSchemeColor = opts && 'navigationRailUnselectedLabelSchemeColor' in opts ? opts.navigationRailUnselectedLabelSchemeColor : null;
    let navigationRailMutedUnselectedLabel = opts && 'navigationRailMutedUnselectedLabel' in opts ? opts.navigationRailMutedUnselectedLabel : true;
    let navigationRailSelectedIconSize = opts && 'navigationRailSelectedIconSize' in opts ? opts.navigationRailSelectedIconSize : null;
    let navigationRailUnselectedIconSize = opts && 'navigationRailUnselectedIconSize' in opts ? opts.navigationRailUnselectedIconSize : null;
    let navigationRailSelectedIconSchemeColor = opts && 'navigationRailSelectedIconSchemeColor' in opts ? opts.navigationRailSelectedIconSchemeColor : null;
    let navigationRailUnselectedIconSchemeColor = opts && 'navigationRailUnselectedIconSchemeColor' in opts ? opts.navigationRailUnselectedIconSchemeColor : null;
    let navigationRailMutedUnselectedIcon = opts && 'navigationRailMutedUnselectedIcon' in opts ? opts.navigationRailMutedUnselectedIcon : true;
    let navigationRailUseIndicator = opts && 'navigationRailUseIndicator' in opts ? opts.navigationRailUseIndicator : true;
    let navigationRailIndicatorSchemeColor = opts && 'navigationRailIndicatorSchemeColor' in opts ? opts.navigationRailIndicatorSchemeColor : null;
    let navigationRailIndicatorOpacity = opts && 'navigationRailIndicatorOpacity' in opts ? opts.navigationRailIndicatorOpacity : null;
    let navigationRailBackgroundSchemeColor = opts && 'navigationRailBackgroundSchemeColor' in opts ? opts.navigationRailBackgroundSchemeColor : null;
    let navigationRailOpacity = opts && 'navigationRailOpacity' in opts ? opts.navigationRailOpacity : 1;
    let navigationRailElevation = opts && 'navigationRailElevation' in opts ? opts.navigationRailElevation : 0;
    let navigationRailLabelType = opts && 'navigationRailLabelType' in opts ? opts.navigationRailLabelType : C[3] || CT.C3;
    let navigationRailGroupAlignment = opts && 'navigationRailGroupAlignment' in opts ? opts.navigationRailGroupAlignment : null;
    this[interactionEffects$] = interactionEffects;
    this[blendOnLevel$] = blendOnLevel;
    this[blendOnColors$] = blendOnColors;
    this[useFlutterDefaults$] = useFlutterDefaults;
    this[blendTextTheme$] = blendTextTheme;
    this[useTextTheme$] = useTextTheme;
    this[defaultRadius$] = defaultRadius;
    this[buttonMinSize$] = buttonMinSize;
    this[buttonPadding$] = buttonPadding;
    this[thickBorderWidth$] = thickBorderWidth;
    this[thinBorderWidth$] = thinBorderWidth;
    this[textButtonRadius$] = textButtonRadius;
    this[elevatedButtonRadius$] = elevatedButtonRadius;
    this[elevatedButtonElevation$] = elevatedButtonElevation;
    this[outlinedButtonRadius$] = outlinedButtonRadius;
    this[toggleButtonsRadius$] = toggleButtonsRadius;
    this[textButtonSchemeColor$] = textButtonSchemeColor;
    this[elevatedButtonSchemeColor$] = elevatedButtonSchemeColor;
    this[elevatedButtonSecondarySchemeColor$] = elevatedButtonSecondarySchemeColor;
    this[outlinedButtonSchemeColor$] = outlinedButtonSchemeColor;
    this[outlinedButtonOutlineSchemeColor$] = outlinedButtonOutlineSchemeColor;
    this[materialButtonSchemeColor$] = materialButtonSchemeColor;
    this[toggleButtonsSchemeColor$] = toggleButtonsSchemeColor;
    this[switchSchemeColor$] = switchSchemeColor;
    this[checkboxSchemeColor$] = checkboxSchemeColor;
    this[radioSchemeColor$] = radioSchemeColor;
    this[unselectedToggleIsColored$] = unselectedToggleIsColored;
    this[inputDecoratorRadius$] = inputDecoratorRadius;
    this[inputDecoratorSchemeColor$] = inputDecoratorSchemeColor;
    this[inputDecoratorIsFilled$] = inputDecoratorIsFilled;
    this[inputDecoratorFillColor$] = inputDecoratorFillColor;
    this[inputDecoratorBorderType$] = inputDecoratorBorderType;
    this[inputDecoratorUnfocusedHasBorder$] = inputDecoratorUnfocusedHasBorder;
    this[inputDecoratorUnfocusedBorderIsColored$] = inputDecoratorUnfocusedBorderIsColored;
    this[fabRadius$] = fabRadius;
    this[fabUseShape$] = fabUseShape;
    this[fabSchemeColor$] = fabSchemeColor;
    this[chipRadius$] = chipRadius;
    this[chipSchemeColor$] = chipSchemeColor;
    this[cardRadius$] = cardRadius;
    this[cardElevation$] = cardElevation;
    this[popupMenuRadius$] = popupMenuRadius;
    this[popupMenuElevation$] = popupMenuElevation;
    this[popupMenuOpacity$] = popupMenuOpacity;
    this[dialogRadius$] = dialogRadius;
    this[dialogElevation$] = dialogElevation;
    this[dialogBackgroundSchemeColor$] = dialogBackgroundSchemeColor;
    this[timePickerDialogRadius$] = timePickerDialogRadius;
    this[snackBarElevation$] = snackBarElevation;
    this[snackBarBackgroundSchemeColor$] = snackBarBackgroundSchemeColor;
    this[appBarBackgroundSchemeColor$] = appBarBackgroundSchemeColor;
    this[appBarCenterTitle$] = appBarCenterTitle;
    this[tabBarItemSchemeColor$] = tabBarItemSchemeColor;
    this[tabBarIndicatorSchemeColor$] = tabBarIndicatorSchemeColor;
    this[bottomSheetRadius$] = bottomSheetRadius;
    this[bottomSheetElevation$] = bottomSheetElevation;
    this[bottomSheetModalElevation$] = bottomSheetModalElevation;
    this[bottomNavigationBarLabelTextStyle$] = bottomNavigationBarLabelTextStyle;
    this[bottomNavigationBarSelectedLabelSize$] = bottomNavigationBarSelectedLabelSize;
    this[bottomNavigationBarUnselectedLabelSize$] = bottomNavigationBarUnselectedLabelSize;
    this[bottomNavigationBarSelectedLabelSchemeColor$] = bottomNavigationBarSelectedLabelSchemeColor;
    this[bottomNavigationBarUnselectedLabelSchemeColor$] = bottomNavigationBarUnselectedLabelSchemeColor;
    this[bottomNavigationBarMutedUnselectedLabel$] = bottomNavigationBarMutedUnselectedLabel;
    this[bottomNavigationBarSelectedIconSize$] = bottomNavigationBarSelectedIconSize;
    this[bottomNavigationBarUnselectedIconSize$] = bottomNavigationBarUnselectedIconSize;
    this[bottomNavigationBarSelectedIconSchemeColor$] = bottomNavigationBarSelectedIconSchemeColor;
    this[bottomNavigationBarUnselectedIconSchemeColor$] = bottomNavigationBarUnselectedIconSchemeColor;
    this[bottomNavigationBarMutedUnselectedIcon$] = bottomNavigationBarMutedUnselectedIcon;
    this[bottomNavigationBarBackgroundSchemeColor$] = bottomNavigationBarBackgroundSchemeColor;
    this[bottomNavigationBarOpacity$] = bottomNavigationBarOpacity;
    this[bottomNavigationBarElevation$] = bottomNavigationBarElevation;
    this[bottomNavigationBarShowSelectedLabels$] = bottomNavigationBarShowSelectedLabels;
    this[bottomNavigationBarShowUnselectedLabels$] = bottomNavigationBarShowUnselectedLabels;
    this[bottomNavigationBarType$] = bottomNavigationBarType;
    this[bottomNavigationBarLandscapeLayout$] = bottomNavigationBarLandscapeLayout;
    this[navigationBarLabelTextStyle$] = navigationBarLabelTextStyle;
    this[navigationBarSelectedLabelSize$] = navigationBarSelectedLabelSize;
    this[navigationBarUnselectedLabelSize$] = navigationBarUnselectedLabelSize;
    this[navigationBarSelectedLabelSchemeColor$] = navigationBarSelectedLabelSchemeColor;
    this[navigationBarUnselectedLabelSchemeColor$] = navigationBarUnselectedLabelSchemeColor;
    this[navigationBarMutedUnselectedLabel$] = navigationBarMutedUnselectedLabel;
    this[navigationBarSelectedIconSize$] = navigationBarSelectedIconSize;
    this[navigationBarUnselectedIconSize$] = navigationBarUnselectedIconSize;
    this[navigationBarSelectedIconSchemeColor$] = navigationBarSelectedIconSchemeColor;
    this[navigationBarUnselectedIconSchemeColor$] = navigationBarUnselectedIconSchemeColor;
    this[navigationBarMutedUnselectedIcon$] = navigationBarMutedUnselectedIcon;
    this[navigationBarIndicatorSchemeColor$] = navigationBarIndicatorSchemeColor;
    this[navigationBarIndicatorOpacity$] = navigationBarIndicatorOpacity;
    this[navigationBarBackgroundSchemeColor$] = navigationBarBackgroundSchemeColor;
    this[navigationBarOpacity$] = navigationBarOpacity;
    this[navigationBarHeight$] = navigationBarHeight;
    this[navigationBarLabelBehavior$] = navigationBarLabelBehavior;
    this[navigationRailLabelTextStyle$] = navigationRailLabelTextStyle;
    this[navigationRailSelectedLabelSize$] = navigationRailSelectedLabelSize;
    this[navigationRailUnselectedLabelSize$] = navigationRailUnselectedLabelSize;
    this[navigationRailSelectedLabelSchemeColor$] = navigationRailSelectedLabelSchemeColor;
    this[navigationRailUnselectedLabelSchemeColor$] = navigationRailUnselectedLabelSchemeColor;
    this[navigationRailMutedUnselectedLabel$] = navigationRailMutedUnselectedLabel;
    this[navigationRailSelectedIconSize$] = navigationRailSelectedIconSize;
    this[navigationRailUnselectedIconSize$] = navigationRailUnselectedIconSize;
    this[navigationRailSelectedIconSchemeColor$] = navigationRailSelectedIconSchemeColor;
    this[navigationRailUnselectedIconSchemeColor$] = navigationRailUnselectedIconSchemeColor;
    this[navigationRailMutedUnselectedIcon$] = navigationRailMutedUnselectedIcon;
    this[navigationRailUseIndicator$] = navigationRailUseIndicator;
    this[navigationRailIndicatorSchemeColor$] = navigationRailIndicatorSchemeColor;
    this[navigationRailIndicatorOpacity$] = navigationRailIndicatorOpacity;
    this[navigationRailBackgroundSchemeColor$] = navigationRailBackgroundSchemeColor;
    this[navigationRailOpacity$] = navigationRailOpacity;
    this[navigationRailElevation$] = navigationRailElevation;
    this[navigationRailLabelType$] = navigationRailLabelType;
    this[navigationRailGroupAlignment$] = navigationRailGroupAlignment;
    ;
  }).prototype = flex_sub_themes_data.FlexSubThemesData.prototype;
  dart.addTypeTests(flex_sub_themes_data.FlexSubThemesData);
  dart.addTypeCaches(flex_sub_themes_data.FlexSubThemesData);
  dart.setMethodSignature(flex_sub_themes_data.FlexSubThemesData, () => ({
    __proto__: dart.getMethods(flex_sub_themes_data.FlexSubThemesData.__proto__),
    copyWith: dart.fnType(flex_sub_themes_data.FlexSubThemesData, [], {appBarBackgroundSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), appBarCenterTitle: dart.nullable(core.bool), blendOnColors: dart.nullable(core.bool), blendOnLevel: dart.nullable(core.int), blendTextTheme: dart.nullable(core.bool), bottomNavigationBarBackgroundSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), bottomNavigationBarElevation: dart.nullable(core.double), bottomNavigationBarLabelTextStyle: dart.nullable(text_style.TextStyle), bottomNavigationBarLandscapeLayout: dart.nullable(bottom_navigation_bar.BottomNavigationBarLandscapeLayout), bottomNavigationBarMutedUnselectedIcon: dart.nullable(core.bool), bottomNavigationBarMutedUnselectedLabel: dart.nullable(core.bool), bottomNavigationBarOpacity: dart.nullable(core.double), bottomNavigationBarSelectedIconSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), bottomNavigationBarSelectedIconSize: dart.nullable(core.double), bottomNavigationBarSelectedLabelSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), bottomNavigationBarSelectedLabelSize: dart.nullable(core.double), bottomNavigationBarShowSelectedLabels: dart.nullable(core.bool), bottomNavigationBarShowUnselectedLabels: dart.nullable(core.bool), bottomNavigationBarType: dart.nullable(bottom_navigation_bar.BottomNavigationBarType), bottomNavigationBarUnselectedIconSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), bottomNavigationBarUnselectedIconSize: dart.nullable(core.double), bottomNavigationBarUnselectedLabelSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), bottomNavigationBarUnselectedLabelSize: dart.nullable(core.double), bottomSheetElevation: dart.nullable(core.double), bottomSheetModalElevation: dart.nullable(core.double), bottomSheetRadius: dart.nullable(core.double), buttonMinSize: dart.nullable(ui.Size), buttonPadding: dart.nullable(edge_insets.EdgeInsetsGeometry), cardElevation: dart.nullable(core.double), cardRadius: dart.nullable(core.double), checkboxSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), chipRadius: dart.nullable(core.double), chipSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), defaultRadius: dart.nullable(core.double), dialogBackgroundSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), dialogElevation: dart.nullable(core.double), dialogRadius: dart.nullable(core.double), elevatedButtonElevation: dart.nullable(core.double), elevatedButtonRadius: dart.nullable(core.double), elevatedButtonSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), elevatedButtonSecondarySchemeColor: dart.nullable(flex_sub_themes.SchemeColor), fabRadius: dart.nullable(core.double), fabSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), fabUseShape: dart.nullable(core.bool), inputDecoratorBorderType: dart.nullable(flex_sub_themes.FlexInputBorderType), inputDecoratorFillColor: dart.nullable(ui.Color), inputDecoratorIsFilled: dart.nullable(core.bool), inputDecoratorRadius: dart.nullable(core.double), inputDecoratorSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), inputDecoratorUnfocusedBorderIsColored: dart.nullable(core.bool), inputDecoratorUnfocusedHasBorder: dart.nullable(core.bool), interactionEffects: dart.nullable(core.bool), materialButtonSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationBarBackgroundSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationBarHeight: dart.nullable(core.double), navigationBarIndicatorOpacity: dart.nullable(core.double), navigationBarIndicatorSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationBarLabelBehavior: dart.nullable(navigation_bar.NavigationDestinationLabelBehavior), navigationBarLabelTextStyle: dart.nullable(text_style.TextStyle), navigationBarMutedUnselectedIcon: dart.nullable(core.bool), navigationBarMutedUnselectedLabel: dart.nullable(core.bool), navigationBarOpacity: dart.nullable(core.double), navigationBarSelectedIconSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationBarSelectedIconSize: dart.nullable(core.double), navigationBarSelectedLabelSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationBarSelectedLabelSize: dart.nullable(core.double), navigationBarUnselectedIconSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationBarUnselectedIconSize: dart.nullable(core.double), navigationBarUnselectedLabelSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationBarUnselectedLabelSize: dart.nullable(core.double), navigationRailBackgroundSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationRailElevation: dart.nullable(core.double), navigationRailGroupAlignment: dart.nullable(core.double), navigationRailIndicatorOpacity: dart.nullable(core.double), navigationRailIndicatorSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationRailLabelTextStyle: dart.nullable(text_style.TextStyle), navigationRailLabelType: dart.nullable(navigation_rail.NavigationRailLabelType), navigationRailMutedUnselectedIcon: dart.nullable(core.bool), navigationRailMutedUnselectedLabel: dart.nullable(core.bool), navigationRailOpacity: dart.nullable(core.double), navigationRailSelectedIconSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationRailSelectedIconSize: dart.nullable(core.double), navigationRailSelectedLabelSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationRailSelectedLabelSize: dart.nullable(core.double), navigationRailUnselectedIconSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationRailUnselectedIconSize: dart.nullable(core.double), navigationRailUnselectedLabelSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), navigationRailUnselectedLabelSize: dart.nullable(core.double), navigationRailUseIndicator: dart.nullable(core.bool), outlinedButtonOutlineSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), outlinedButtonRadius: dart.nullable(core.double), outlinedButtonSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), popupMenuElevation: dart.nullable(core.double), popupMenuOpacity: dart.nullable(core.double), popupMenuRadius: dart.nullable(core.double), radioSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), snackBarBackgroundSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), snackBarElevation: dart.nullable(core.double), switchSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), tabBarIndicatorSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), tabBarItemSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), textButtonRadius: dart.nullable(core.double), textButtonSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), thickBorderWidth: dart.nullable(core.double), thinBorderWidth: dart.nullable(core.double), timePickerDialogRadius: dart.nullable(core.double), toggleButtonsRadius: dart.nullable(core.double), toggleButtonsSchemeColor: dart.nullable(flex_sub_themes.SchemeColor), unselectedToggleIsColored: dart.nullable(core.bool), useFlutterDefaults: dart.nullable(core.bool), useTextTheme: dart.nullable(core.bool)}, {})
  }));
  dart.setLibraryUri(flex_sub_themes_data.FlexSubThemesData, I[0]);
  dart.setFieldSignature(flex_sub_themes_data.FlexSubThemesData, () => ({
    __proto__: dart.getFields(flex_sub_themes_data.FlexSubThemesData.__proto__),
    interactionEffects: dart.finalFieldType(core.bool),
    blendOnLevel: dart.finalFieldType(core.int),
    blendOnColors: dart.finalFieldType(core.bool),
    useFlutterDefaults: dart.finalFieldType(core.bool),
    blendTextTheme: dart.finalFieldType(core.bool),
    useTextTheme: dart.finalFieldType(core.bool),
    defaultRadius: dart.finalFieldType(dart.nullable(core.double)),
    buttonMinSize: dart.finalFieldType(dart.nullable(ui.Size)),
    buttonPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    thickBorderWidth: dart.finalFieldType(dart.nullable(core.double)),
    thinBorderWidth: dart.finalFieldType(dart.nullable(core.double)),
    textButtonRadius: dart.finalFieldType(dart.nullable(core.double)),
    elevatedButtonRadius: dart.finalFieldType(dart.nullable(core.double)),
    elevatedButtonElevation: dart.finalFieldType(dart.nullable(core.double)),
    outlinedButtonRadius: dart.finalFieldType(dart.nullable(core.double)),
    toggleButtonsRadius: dart.finalFieldType(dart.nullable(core.double)),
    textButtonSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    elevatedButtonSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    elevatedButtonSecondarySchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    outlinedButtonSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    outlinedButtonOutlineSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    materialButtonSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    toggleButtonsSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    switchSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    checkboxSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    radioSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    unselectedToggleIsColored: dart.finalFieldType(core.bool),
    inputDecoratorRadius: dart.finalFieldType(dart.nullable(core.double)),
    inputDecoratorSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    inputDecoratorIsFilled: dart.finalFieldType(core.bool),
    inputDecoratorFillColor: dart.finalFieldType(dart.nullable(ui.Color)),
    inputDecoratorBorderType: dart.finalFieldType(flex_sub_themes.FlexInputBorderType),
    inputDecoratorUnfocusedHasBorder: dart.finalFieldType(core.bool),
    inputDecoratorUnfocusedBorderIsColored: dart.finalFieldType(core.bool),
    fabRadius: dart.finalFieldType(dart.nullable(core.double)),
    fabUseShape: dart.finalFieldType(core.bool),
    fabSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    chipRadius: dart.finalFieldType(dart.nullable(core.double)),
    chipSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    cardRadius: dart.finalFieldType(dart.nullable(core.double)),
    cardElevation: dart.finalFieldType(core.double),
    popupMenuRadius: dart.finalFieldType(dart.nullable(core.double)),
    popupMenuElevation: dart.finalFieldType(core.double),
    popupMenuOpacity: dart.finalFieldType(dart.nullable(core.double)),
    dialogRadius: dart.finalFieldType(dart.nullable(core.double)),
    dialogElevation: dart.finalFieldType(core.double),
    dialogBackgroundSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    timePickerDialogRadius: dart.finalFieldType(dart.nullable(core.double)),
    snackBarElevation: dart.finalFieldType(core.double),
    snackBarBackgroundSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    appBarBackgroundSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    appBarCenterTitle: dart.finalFieldType(dart.nullable(core.bool)),
    tabBarItemSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    tabBarIndicatorSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    bottomSheetRadius: dart.finalFieldType(dart.nullable(core.double)),
    bottomSheetElevation: dart.finalFieldType(core.double),
    bottomSheetModalElevation: dart.finalFieldType(core.double),
    bottomNavigationBarLabelTextStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    bottomNavigationBarSelectedLabelSize: dart.finalFieldType(dart.nullable(core.double)),
    bottomNavigationBarUnselectedLabelSize: dart.finalFieldType(dart.nullable(core.double)),
    bottomNavigationBarSelectedLabelSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    bottomNavigationBarUnselectedLabelSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    bottomNavigationBarMutedUnselectedLabel: dart.finalFieldType(dart.nullable(core.bool)),
    bottomNavigationBarSelectedIconSize: dart.finalFieldType(dart.nullable(core.double)),
    bottomNavigationBarUnselectedIconSize: dart.finalFieldType(dart.nullable(core.double)),
    bottomNavigationBarSelectedIconSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    bottomNavigationBarUnselectedIconSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    bottomNavigationBarMutedUnselectedIcon: dart.finalFieldType(dart.nullable(core.bool)),
    bottomNavigationBarBackgroundSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    bottomNavigationBarOpacity: dart.finalFieldType(core.double),
    bottomNavigationBarElevation: dart.finalFieldType(core.double),
    bottomNavigationBarShowSelectedLabels: dart.finalFieldType(core.bool),
    bottomNavigationBarShowUnselectedLabels: dart.finalFieldType(core.bool),
    bottomNavigationBarType: dart.finalFieldType(dart.nullable(bottom_navigation_bar.BottomNavigationBarType)),
    bottomNavigationBarLandscapeLayout: dart.finalFieldType(dart.nullable(bottom_navigation_bar.BottomNavigationBarLandscapeLayout)),
    navigationBarLabelTextStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    navigationBarSelectedLabelSize: dart.finalFieldType(dart.nullable(core.double)),
    navigationBarUnselectedLabelSize: dart.finalFieldType(dart.nullable(core.double)),
    navigationBarSelectedLabelSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationBarUnselectedLabelSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationBarMutedUnselectedLabel: dart.finalFieldType(dart.nullable(core.bool)),
    navigationBarSelectedIconSize: dart.finalFieldType(dart.nullable(core.double)),
    navigationBarUnselectedIconSize: dart.finalFieldType(dart.nullable(core.double)),
    navigationBarSelectedIconSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationBarUnselectedIconSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationBarMutedUnselectedIcon: dart.finalFieldType(dart.nullable(core.bool)),
    navigationBarIndicatorSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationBarIndicatorOpacity: dart.finalFieldType(dart.nullable(core.double)),
    navigationBarBackgroundSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationBarHeight: dart.finalFieldType(dart.nullable(core.double)),
    navigationBarOpacity: dart.finalFieldType(core.double),
    navigationBarLabelBehavior: dart.finalFieldType(dart.nullable(navigation_bar.NavigationDestinationLabelBehavior)),
    navigationRailLabelTextStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    navigationRailSelectedLabelSize: dart.finalFieldType(dart.nullable(core.double)),
    navigationRailUnselectedLabelSize: dart.finalFieldType(dart.nullable(core.double)),
    navigationRailSelectedLabelSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationRailUnselectedLabelSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationRailMutedUnselectedLabel: dart.finalFieldType(dart.nullable(core.bool)),
    navigationRailSelectedIconSize: dart.finalFieldType(dart.nullable(core.double)),
    navigationRailUnselectedIconSize: dart.finalFieldType(dart.nullable(core.double)),
    navigationRailSelectedIconSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationRailUnselectedIconSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationRailMutedUnselectedIcon: dart.finalFieldType(dart.nullable(core.bool)),
    navigationRailUseIndicator: dart.finalFieldType(dart.nullable(core.bool)),
    navigationRailIndicatorSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationRailIndicatorOpacity: dart.finalFieldType(dart.nullable(core.double)),
    navigationRailBackgroundSchemeColor: dart.finalFieldType(dart.nullable(flex_sub_themes.SchemeColor)),
    navigationRailOpacity: dart.finalFieldType(core.double),
    navigationRailElevation: dart.finalFieldType(core.double),
    navigationRailLabelType: dart.finalFieldType(dart.nullable(navigation_rail.NavigationRailLabelType)),
    navigationRailGroupAlignment: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(flex_sub_themes_data.FlexSubThemesData, ['_equals']);
  dart.defineExtensionAccessors(flex_sub_themes_data.FlexSubThemesData, ['hashCode']);
  var _name = dart.privateName(core, "_name");
  flex_sub_themes.FlexInputBorderType = class FlexInputBorderType extends core._Enum {
    toString() {
      return "FlexInputBorderType." + this[_name];
    }
  };
  (flex_sub_themes.FlexInputBorderType.new = function(index, name) {
    flex_sub_themes.FlexInputBorderType.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex_sub_themes.FlexInputBorderType.prototype;
  dart.addTypeTests(flex_sub_themes.FlexInputBorderType);
  dart.addTypeCaches(flex_sub_themes.FlexInputBorderType);
  dart.setLibraryUri(flex_sub_themes.FlexInputBorderType, I[1]);
  dart.setStaticFieldSignature(flex_sub_themes.FlexInputBorderType, () => ['values', 'outline', 'underline']);
  dart.defineExtensionMethods(flex_sub_themes.FlexInputBorderType, ['toString']);
  dart.defineLazy(flex_sub_themes.FlexInputBorderType, {
    /*flex_sub_themes.FlexInputBorderType.values*/get values() {
      return C[4] || CT.C4;
    },
    /*flex_sub_themes.FlexInputBorderType.outline*/get outline() {
      return C[0] || CT.C0;
    },
    /*flex_sub_themes.FlexInputBorderType.underline*/get underline() {
      return C[5] || CT.C5;
    }
  }, false);
  flex_sub_themes.SchemeColor = class SchemeColor extends core._Enum {
    toString() {
      return "SchemeColor." + this[_name];
    }
  };
  (flex_sub_themes.SchemeColor.new = function(index, name) {
    flex_sub_themes.SchemeColor.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex_sub_themes.SchemeColor.prototype;
  dart.addTypeTests(flex_sub_themes.SchemeColor);
  dart.addTypeCaches(flex_sub_themes.SchemeColor);
  dart.setLibraryUri(flex_sub_themes.SchemeColor, I[1]);
  dart.setStaticFieldSignature(flex_sub_themes.SchemeColor, () => ['values', 'primary', 'onPrimary', 'primaryContainer', 'onPrimaryContainer', 'secondary', 'onSecondary', 'secondaryContainer', 'onSecondaryContainer', 'tertiary', 'onTertiary', 'tertiaryContainer', 'onTertiaryContainer', 'error', 'onError', 'errorContainer', 'onErrorContainer', 'background', 'onBackground', 'surface', 'onSurface', 'surfaceVariant', 'onSurfaceVariant', 'outline', 'shadow', 'inverseSurface', 'onInverseSurface', 'inversePrimary', 'surfaceTint']);
  dart.defineExtensionMethods(flex_sub_themes.SchemeColor, ['toString']);
  dart.defineLazy(flex_sub_themes.SchemeColor, {
    /*flex_sub_themes.SchemeColor.values*/get values() {
      return C[6] || CT.C6;
    },
    /*flex_sub_themes.SchemeColor.primary*/get primary() {
      return C[7] || CT.C7;
    },
    /*flex_sub_themes.SchemeColor.onPrimary*/get onPrimary() {
      return C[8] || CT.C8;
    },
    /*flex_sub_themes.SchemeColor.primaryContainer*/get primaryContainer() {
      return C[9] || CT.C9;
    },
    /*flex_sub_themes.SchemeColor.onPrimaryContainer*/get onPrimaryContainer() {
      return C[10] || CT.C10;
    },
    /*flex_sub_themes.SchemeColor.secondary*/get secondary() {
      return C[11] || CT.C11;
    },
    /*flex_sub_themes.SchemeColor.onSecondary*/get onSecondary() {
      return C[12] || CT.C12;
    },
    /*flex_sub_themes.SchemeColor.secondaryContainer*/get secondaryContainer() {
      return C[13] || CT.C13;
    },
    /*flex_sub_themes.SchemeColor.onSecondaryContainer*/get onSecondaryContainer() {
      return C[14] || CT.C14;
    },
    /*flex_sub_themes.SchemeColor.tertiary*/get tertiary() {
      return C[15] || CT.C15;
    },
    /*flex_sub_themes.SchemeColor.onTertiary*/get onTertiary() {
      return C[16] || CT.C16;
    },
    /*flex_sub_themes.SchemeColor.tertiaryContainer*/get tertiaryContainer() {
      return C[17] || CT.C17;
    },
    /*flex_sub_themes.SchemeColor.onTertiaryContainer*/get onTertiaryContainer() {
      return C[18] || CT.C18;
    },
    /*flex_sub_themes.SchemeColor.error*/get error() {
      return C[19] || CT.C19;
    },
    /*flex_sub_themes.SchemeColor.onError*/get onError() {
      return C[20] || CT.C20;
    },
    /*flex_sub_themes.SchemeColor.errorContainer*/get errorContainer() {
      return C[21] || CT.C21;
    },
    /*flex_sub_themes.SchemeColor.onErrorContainer*/get onErrorContainer() {
      return C[22] || CT.C22;
    },
    /*flex_sub_themes.SchemeColor.background*/get background() {
      return C[23] || CT.C23;
    },
    /*flex_sub_themes.SchemeColor.onBackground*/get onBackground() {
      return C[24] || CT.C24;
    },
    /*flex_sub_themes.SchemeColor.surface*/get surface() {
      return C[25] || CT.C25;
    },
    /*flex_sub_themes.SchemeColor.onSurface*/get onSurface() {
      return C[26] || CT.C26;
    },
    /*flex_sub_themes.SchemeColor.surfaceVariant*/get surfaceVariant() {
      return C[27] || CT.C27;
    },
    /*flex_sub_themes.SchemeColor.onSurfaceVariant*/get onSurfaceVariant() {
      return C[28] || CT.C28;
    },
    /*flex_sub_themes.SchemeColor.outline*/get outline() {
      return C[29] || CT.C29;
    },
    /*flex_sub_themes.SchemeColor.shadow*/get shadow() {
      return C[30] || CT.C30;
    },
    /*flex_sub_themes.SchemeColor.inverseSurface*/get inverseSurface() {
      return C[31] || CT.C31;
    },
    /*flex_sub_themes.SchemeColor.onInverseSurface*/get onInverseSurface() {
      return C[32] || CT.C32;
    },
    /*flex_sub_themes.SchemeColor.inversePrimary*/get inversePrimary() {
      return C[33] || CT.C33;
    },
    /*flex_sub_themes.SchemeColor.surfaceTint*/get surfaceTint() {
      return C[34] || CT.C34;
    }
  }, false);
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
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Color_value = dart.privateName(ui, "Color.value");
  var InputDecorationTheme_constraints = dart.privateName(input_decorator, "InputDecorationTheme.constraints");
  var InputDecorationTheme_alignLabelWithHint = dart.privateName(input_decorator, "InputDecorationTheme.alignLabelWithHint");
  var InputDecorationTheme_border = dart.privateName(input_decorator, "InputDecorationTheme.border");
  var InputDecorationTheme_enabledBorder = dart.privateName(input_decorator, "InputDecorationTheme.enabledBorder");
  var InputDecorationTheme_disabledBorder = dart.privateName(input_decorator, "InputDecorationTheme.disabledBorder");
  var InputDecorationTheme_focusedErrorBorder = dart.privateName(input_decorator, "InputDecorationTheme.focusedErrorBorder");
  var InputDecorationTheme_focusedBorder = dart.privateName(input_decorator, "InputDecorationTheme.focusedBorder");
  var InputDecorationTheme_errorBorder = dart.privateName(input_decorator, "InputDecorationTheme.errorBorder");
  var InputDecorationTheme_hoverColor = dart.privateName(input_decorator, "InputDecorationTheme.hoverColor");
  var InputDecorationTheme_focusColor = dart.privateName(input_decorator, "InputDecorationTheme.focusColor");
  var InputDecorationTheme_fillColor = dart.privateName(input_decorator, "InputDecorationTheme.fillColor");
  var InputDecorationTheme_filled = dart.privateName(input_decorator, "InputDecorationTheme.filled");
  var InputDecorationTheme_counterStyle = dart.privateName(input_decorator, "InputDecorationTheme.counterStyle");
  var InputDecorationTheme_suffixIconColor = dart.privateName(input_decorator, "InputDecorationTheme.suffixIconColor");
  var InputDecorationTheme_suffixStyle = dart.privateName(input_decorator, "InputDecorationTheme.suffixStyle");
  var InputDecorationTheme_prefixIconColor = dart.privateName(input_decorator, "InputDecorationTheme.prefixIconColor");
  var InputDecorationTheme_prefixStyle = dart.privateName(input_decorator, "InputDecorationTheme.prefixStyle");
  var InputDecorationTheme_iconColor = dart.privateName(input_decorator, "InputDecorationTheme.iconColor");
  var InputDecorationTheme_isCollapsed = dart.privateName(input_decorator, "InputDecorationTheme.isCollapsed");
  var InputDecorationTheme_contentPadding = dart.privateName(input_decorator, "InputDecorationTheme.contentPadding");
  var InputDecorationTheme_isDense = dart.privateName(input_decorator, "InputDecorationTheme.isDense");
  var FloatingLabelAlignment__x = dart.privateName(input_decorator, "FloatingLabelAlignment._x");
  var InputDecorationTheme_floatingLabelAlignment = dart.privateName(input_decorator, "InputDecorationTheme.floatingLabelAlignment");
  var InputDecorationTheme_floatingLabelBehavior = dart.privateName(input_decorator, "InputDecorationTheme.floatingLabelBehavior");
  var InputDecorationTheme_errorMaxLines = dart.privateName(input_decorator, "InputDecorationTheme.errorMaxLines");
  var InputDecorationTheme_errorStyle = dart.privateName(input_decorator, "InputDecorationTheme.errorStyle");
  var InputDecorationTheme_hintStyle = dart.privateName(input_decorator, "InputDecorationTheme.hintStyle");
  var InputDecorationTheme_helperMaxLines = dart.privateName(input_decorator, "InputDecorationTheme.helperMaxLines");
  var InputDecorationTheme_helperStyle = dart.privateName(input_decorator, "InputDecorationTheme.helperStyle");
  var InputDecorationTheme_floatingLabelStyle = dart.privateName(input_decorator, "InputDecorationTheme.floatingLabelStyle");
  var InputDecorationTheme_labelStyle = dart.privateName(input_decorator, "InputDecorationTheme.labelStyle");
  flex_sub_themes.FlexSubThemes = class FlexSubThemes extends core.Object {
    static ['_#_#tearOff']() {
      return new flex_sub_themes.FlexSubThemes.__();
    }
    static schemeColor(value, colorScheme) {
      switch (value) {
        case C[7] || CT.C7:
          {
            return colorScheme.primary;
          }
        case C[8] || CT.C8:
          {
            return colorScheme.onPrimary;
          }
        case C[9] || CT.C9:
          {
            return colorScheme.primaryContainer;
          }
        case C[10] || CT.C10:
          {
            return colorScheme.onPrimaryContainer;
          }
        case C[11] || CT.C11:
          {
            return colorScheme.secondary;
          }
        case C[12] || CT.C12:
          {
            return colorScheme.onSecondary;
          }
        case C[13] || CT.C13:
          {
            return colorScheme.secondaryContainer;
          }
        case C[14] || CT.C14:
          {
            return colorScheme.onSecondaryContainer;
          }
        case C[15] || CT.C15:
          {
            return colorScheme.tertiary;
          }
        case C[16] || CT.C16:
          {
            return colorScheme.onTertiary;
          }
        case C[17] || CT.C17:
          {
            return colorScheme.tertiaryContainer;
          }
        case C[18] || CT.C18:
          {
            return colorScheme.onTertiaryContainer;
          }
        case C[19] || CT.C19:
          {
            return colorScheme.error;
          }
        case C[20] || CT.C20:
          {
            return colorScheme.onError;
          }
        case C[21] || CT.C21:
          {
            return colorScheme.errorContainer;
          }
        case C[22] || CT.C22:
          {
            return colorScheme.onErrorContainer;
          }
        case C[23] || CT.C23:
          {
            return colorScheme.background;
          }
        case C[24] || CT.C24:
          {
            return colorScheme.onBackground;
          }
        case C[25] || CT.C25:
          {
            return colorScheme.surface;
          }
        case C[26] || CT.C26:
          {
            return colorScheme.onSurface;
          }
        case C[27] || CT.C27:
          {
            return colorScheme.surfaceVariant;
          }
        case C[28] || CT.C28:
          {
            return colorScheme.onSurfaceVariant;
          }
        case C[29] || CT.C29:
          {
            return colorScheme.outline;
          }
        case C[30] || CT.C30:
          {
            return colorScheme.shadow;
          }
        case C[31] || CT.C31:
          {
            return colorScheme.inverseSurface;
          }
        case C[32] || CT.C32:
          {
            return colorScheme.onInverseSurface;
          }
        case C[33] || CT.C33:
          {
            return colorScheme.inversePrimary;
          }
        case C[34] || CT.C34:
          {
            return colorScheme.surfaceTint;
          }
      }
    }
    static schemeColorPair(value, colorScheme) {
      switch (value) {
        case C[7] || CT.C7:
        case C[34] || CT.C34:
          {
            return colorScheme.onPrimary;
          }
        case C[8] || CT.C8:
          {
            return colorScheme.primary;
          }
        case C[9] || CT.C9:
          {
            return colorScheme.onPrimaryContainer;
          }
        case C[10] || CT.C10:
          {
            return colorScheme.primaryContainer;
          }
        case C[11] || CT.C11:
          {
            return colorScheme.onSecondary;
          }
        case C[12] || CT.C12:
          {
            return colorScheme.secondary;
          }
        case C[13] || CT.C13:
          {
            return colorScheme.onSecondaryContainer;
          }
        case C[14] || CT.C14:
          {
            return colorScheme.secondaryContainer;
          }
        case C[15] || CT.C15:
          {
            return colorScheme.onTertiary;
          }
        case C[16] || CT.C16:
          {
            return colorScheme.tertiary;
          }
        case C[17] || CT.C17:
          {
            return colorScheme.onTertiaryContainer;
          }
        case C[18] || CT.C18:
          {
            return colorScheme.tertiaryContainer;
          }
        case C[19] || CT.C19:
          {
            return colorScheme.onError;
          }
        case C[20] || CT.C20:
          {
            return colorScheme.error;
          }
        case C[21] || CT.C21:
          {
            return colorScheme.onErrorContainer;
          }
        case C[22] || CT.C22:
          {
            return colorScheme.errorContainer;
          }
        case C[23] || CT.C23:
          {
            return colorScheme.onBackground;
          }
        case C[24] || CT.C24:
          {
            return colorScheme.background;
          }
        case C[25] || CT.C25:
          {
            return colorScheme.onSurface;
          }
        case C[26] || CT.C26:
          {
            return colorScheme.surface;
          }
        case C[27] || CT.C27:
          {
            return colorScheme.onSurfaceVariant;
          }
        case C[28] || CT.C28:
          {
            return colorScheme.surfaceVariant;
          }
        case C[29] || CT.C29:
          {
            return colorScheme.background;
          }
        case C[30] || CT.C30:
          {
            return colorScheme.background;
          }
        case C[31] || CT.C31:
          {
            return colorScheme.onInverseSurface;
          }
        case C[32] || CT.C32:
          {
            return colorScheme.inverseSurface;
          }
        case C[33] || CT.C33:
          {
            return colorScheme.primary;
          }
      }
    }
    static buttonTheme(opts) {
      let t4, t4$, t4$0, t4$1;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let minButtonSize = opts && 'minButtonSize' in opts ? opts.minButtonSize : null;
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor((t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4), colorScheme);
      let effectiveMinButtonSize = (t4$ = minButtonSize, t4$ == null ? flex_constants.kButtonMinSize : t4$);
      return new button_theme.ButtonThemeData.new({colorScheme: colorScheme, minWidth: effectiveMinButtonSize.width, height: effectiveMinButtonSize.height, padding: (t4$0 = padding, t4$0 == null ? flex_constants.kButtonPadding : t4$0), layoutBehavior: button_theme.ButtonBarLayoutBehavior.constrained, materialTapTargetSize: theme_data.MaterialTapTargetSize.shrinkWrap, hoverColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 64).withAlpha(25), focusColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 76).withAlpha(76), highlightColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 64).withAlpha(25), splashColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 31).withAlpha(51), disabledColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(49), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4$1 = radius, t4$1 == null ? 20 : t4$1)))}), textTheme: button_theme.ButtonTextTheme.primary});
    }
    static bottomNavigationBar(opts) {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3, t4$4, t4$5, t4$6, t4$7, t4$8, t4$9, t4$10, t4$11;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let labelTextStyle = opts && 'labelTextStyle' in opts ? opts.labelTextStyle : null;
      let selectedLabelSize = opts && 'selectedLabelSize' in opts ? opts.selectedLabelSize : null;
      let unselectedLabelSize = opts && 'unselectedLabelSize' in opts ? opts.unselectedLabelSize : null;
      let selectedLabelSchemeColor = opts && 'selectedLabelSchemeColor' in opts ? opts.selectedLabelSchemeColor : null;
      let unselectedLabelSchemeColor = opts && 'unselectedLabelSchemeColor' in opts ? opts.unselectedLabelSchemeColor : null;
      let mutedUnselectedLabel = opts && 'mutedUnselectedLabel' in opts ? opts.mutedUnselectedLabel : null;
      let selectedIconSize = opts && 'selectedIconSize' in opts ? opts.selectedIconSize : null;
      let unselectedIconSize = opts && 'unselectedIconSize' in opts ? opts.unselectedIconSize : null;
      let selectedIconSchemeColor = opts && 'selectedIconSchemeColor' in opts ? opts.selectedIconSchemeColor : null;
      let unselectedIconSchemeColor = opts && 'unselectedIconSchemeColor' in opts ? opts.unselectedIconSchemeColor : null;
      let mutedUnselectedIcon = opts && 'mutedUnselectedIcon' in opts ? opts.mutedUnselectedIcon : null;
      let backgroundSchemeColor = opts && 'backgroundSchemeColor' in opts ? opts.backgroundSchemeColor : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
      let showSelectedLabels = opts && 'showSelectedLabels' in opts ? opts.showSelectedLabels : null;
      let showUnselectedLabels = opts && 'showUnselectedLabels' in opts ? opts.showUnselectedLabels : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let landscapeLayout = opts && 'landscapeLayout' in opts ? opts.landscapeLayout : null;
      let unselectedAlphaBlend = opts && 'unselectedAlphaBlend' in opts ? opts.unselectedAlphaBlend : 102;
      let unselectedAlpha = opts && 'unselectedAlpha' in opts ? opts.unselectedAlpha : 165;
      let useFlutterDefaults = opts && 'useFlutterDefaults' in opts ? opts.useFlutterDefaults : false;
      let useDefaultTextStyle = labelTextStyle == null && selectedLabelSize == null && unselectedLabelSize == null && selectedLabelSchemeColor == null && unselectedLabelSchemeColor == null && useFlutterDefaults;
      let useDefaultIconTheme = selectedIconSize == null && unselectedIconSize == null && selectedIconSchemeColor == null && unselectedIconSchemeColor == null && useFlutterDefaults;
      let labelColor = flex_sub_themes.FlexSubThemes.schemeColor((t4 = selectedLabelSchemeColor, t4 == null ? colorScheme.brightness === ui.Brightness.dark && useDefaultTextStyle ? flex_sub_themes.SchemeColor.secondary : flex_sub_themes.SchemeColor.primary : t4), colorScheme);
      let unselectedLabelColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$ = unselectedLabelSchemeColor, t4$ == null ? flex_sub_themes.SchemeColor.onSurface : t4$), colorScheme);
      let textStyle = (t4$0 = labelTextStyle, t4$0 == null ? C[35] || CT.C35 : t4$0);
      let labelSize = (t4$2 = (t4$1 = selectedLabelSize, t4$1 == null ? textStyle.fontSize : t4$1), t4$2 == null ? 14.0 : t4$2);
      let effectiveUnselectedLabelSize = (t4$3 = unselectedLabelSize, t4$3 == null ? math.max(core.double, labelSize - 2, 8.0) : t4$3);
      let iconColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$4 = selectedIconSchemeColor, t4$4 == null ? useDefaultIconTheme && colorScheme.brightness === ui.Brightness.dark ? flex_sub_themes.SchemeColor.secondary : flex_sub_themes.SchemeColor.primary : t4$4), colorScheme);
      let unselectedIconColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$5 = unselectedIconSchemeColor, t4$5 == null ? flex_sub_themes.SchemeColor.onSurface : t4$5), colorScheme);
      let iconSize = (t4$6 = selectedIconSize, t4$6 == null ? 24.0 : t4$6);
      let effectiveUnselectedIconSize = (t4$7 = unselectedIconSize, t4$7 == null ? iconSize : t4$7);
      let backgroundColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$8 = backgroundSchemeColor, t4$8 == null ? flex_sub_themes.SchemeColor.background : t4$8), colorScheme).withOpacity(opacity);
      return new bottom_navigation_bar_theme.BottomNavigationBarThemeData.new({backgroundColor: backgroundSchemeColor == null ? useFlutterDefaults ? null : backgroundColor : backgroundColor, elevation: elevation, unselectedIconTheme: useDefaultIconTheme ? null : new icon_theme_data.IconThemeData.new({size: effectiveUnselectedIconSize, opacity: 1.0, color: dart.test((t4$9 = mutedUnselectedIcon, t4$9 == null ? true : t4$9)) ? flex_extensions['FlexColorExtensions|blendAlpha'](unselectedIconColor, unselectedIconColor, unselectedAlphaBlend).withAlpha(unselectedAlpha) : unselectedIconColor}), selectedIconTheme: useDefaultIconTheme ? null : new icon_theme_data.IconThemeData.new({size: iconSize, opacity: 1.0, color: iconColor}), selectedItemColor: useDefaultTextStyle ? null : labelColor, unselectedItemColor: useDefaultTextStyle ? null : dart.test((t4$10 = mutedUnselectedLabel, t4$10 == null ? true : t4$10)) ? flex_extensions['FlexColorExtensions|blendAlpha'](unselectedLabelColor, unselectedLabelColor, unselectedAlphaBlend).withAlpha(unselectedAlpha) : unselectedLabelColor, unselectedLabelStyle: useDefaultTextStyle ? null : textStyle.copyWith({fontSize: effectiveUnselectedLabelSize, color: dart.test((t4$11 = mutedUnselectedLabel, t4$11 == null ? true : t4$11)) ? flex_extensions['FlexColorExtensions|blendAlpha'](unselectedLabelColor, unselectedLabelColor, unselectedAlphaBlend).withAlpha(unselectedAlpha) : unselectedLabelColor}), selectedLabelStyle: useDefaultTextStyle ? null : textStyle.copyWith({fontSize: labelSize, color: labelColor}), showSelectedLabels: showSelectedLabels, showUnselectedLabels: showUnselectedLabels, type: type, landscapeLayout: landscapeLayout});
    }
    static bottomSheetTheme(opts) {
      let t4, t4$;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 4;
      let modalElevation = opts && 'modalElevation' in opts ? opts.modalElevation : 8;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[36] || CT.C36;
      return new bottom_sheet_theme.BottomSheetThemeData.new({clipBehavior: clipBehavior, elevation: elevation, modalElevation: modalElevation, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular((t4 = radius, t4 == null ? 16 : t4)), topRight: new ui.Radius.circular((t4$ = radius, t4$ == null ? 16 : t4$))})})});
    }
    static cardTheme(opts) {
      let t4;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[36] || CT.C36;
      return new card_theme.CardTheme.new({clipBehavior: clipBehavior, elevation: elevation, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4 = radius, t4 == null ? 12 : t4)))})});
    }
    static checkboxTheme(opts) {
      let t4;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let splashRadius = opts && 'splashRadius' in opts ? opts.splashRadius : null;
      let unselectedIsColored = opts && 'unselectedIsColored' in opts ? opts.unselectedIsColored : true;
      let baseScheme = (t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4);
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor(baseScheme, colorScheme);
      let onBaseColor = flex_sub_themes.FlexSubThemes.schemeColorPair(baseScheme, colorScheme);
      let isLight = colorScheme.brightness === ui.Brightness.light;
      return new checkbox_theme.CheckboxThemeData.new({splashRadius: splashRadius, checkColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return isLight ? colors$.Colors.grey.shade200 : colors$.Colors.grey.shade600;
          }
          if (states.contains(material_state.MaterialState.selected)) {
            return onBaseColor;
          }
          return isLight ? colors$.Colors.grey.shade50 : colors$.Colors.grey.shade400;
        }, T.SetOfMaterialStateToColor())), fillColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return isLight ? colors$.Colors.grey.shade400 : colors$.Colors.grey.shade800;
          }
          if (states.contains(material_state.MaterialState.selected)) {
            return baseColor;
          }
          if (unselectedIsColored) {
            return baseColor.withAlpha(221);
          }
          return isLight ? colors$.Colors.black54 : colors$.Colors.white70;
        }, T.SetOfMaterialStateToColor()))});
    }
    static chipTheme(opts) {
      let t4, t4$, t4$0, t4$1, t4$2;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : null;
      let useM3Defaults = baseSchemeColor == null && dart.test((t4 = useMaterial3, t4 == null ? false : t4));
      let usedBaseColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$ = baseSchemeColor, t4$ == null ? flex_sub_themes.SchemeColor.primary : t4$), colorScheme);
      let foreground = flex_extensions['FlexColorExtensions|blendAlpha'](usedBaseColor, colorScheme.onSurface, 127);
      let selectedBackgroundColor = flex_extensions['FlexColorExtensions|blendAlpha'](usedBaseColor, colorScheme.surface, 150);
      let effectiveLabelStyle = labelStyle.copyWith({color: foreground});
      return new chip_theme.ChipThemeData.new({brightness: useM3Defaults ? null : theme_data.ThemeData.estimateBrightnessForColor(colorScheme.primary), padding: dart.test((t4$0 = useMaterial3, t4$0 == null ? false : t4$0)) ? null : C[37] || CT.C37, backgroundColor: useM3Defaults ? null : flex_extensions['FlexColorExtensions|blendAlpha'](usedBaseColor, colorScheme.surface, 204), selectedColor: useM3Defaults ? null : selectedBackgroundColor, secondarySelectedColor: useM3Defaults ? null : selectedBackgroundColor, checkmarkColor: useM3Defaults ? null : foreground, deleteIconColor: useM3Defaults ? null : usedBaseColor, disabledColor: useM3Defaults ? null : flex_extensions['FlexColorExtensions|blendAlpha'](usedBaseColor, colorScheme.onSurface, 102).withAlpha(49), labelStyle: useM3Defaults ? null : effectiveLabelStyle, secondaryLabelStyle: useM3Defaults ? null : effectiveLabelStyle, shape: dart.test((t4$1 = useMaterial3, t4$1 == null ? false : t4$1)) && radius == null ? null : new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4$2 = radius, t4$2 == null ? 8 : t4$2)))})});
    }
    static dialogTheme(opts) {
      let t4, t4$;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let backgroundSchemeColor = opts && 'backgroundSchemeColor' in opts ? opts.backgroundSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 6;
      let actionsPadding = opts && 'actionsPadding' in opts ? opts.actionsPadding : null;
      let background = colorScheme == null || backgroundSchemeColor == null ? backgroundColor : flex_sub_themes.FlexSubThemes.schemeColor(backgroundSchemeColor, colorScheme);
      return new dialog_theme.DialogTheme.new({elevation: elevation, backgroundColor: background, actionsPadding: (t4 = actionsPadding, t4 == null ? C[38] || CT.C38 : t4), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4$ = radius, t4$ == null ? 28 : t4$)))})});
    }
    static elevatedButtonTheme(opts) {
      let t4, t4$, t4$0, t4$1;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let onBaseSchemeColor = opts && 'onBaseSchemeColor' in opts ? opts.onBaseSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let minButtonSize = opts && 'minButtonSize' in opts ? opts.minButtonSize : null;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let baseScheme = (t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4);
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor(baseScheme, colorScheme);
      let onBaseColor = onBaseSchemeColor == null ? useMaterial3 ? flex_sub_themes.FlexSubThemes.schemeColor(flex_sub_themes.SchemeColor.surface, colorScheme) : flex_sub_themes.FlexSubThemes.schemeColorPair(baseScheme, colorScheme) : flex_sub_themes.FlexSubThemes.schemeColor(onBaseSchemeColor, colorScheme);
      if (!useMaterial3) {
        return new elevated_button_theme.ElevatedButtonThemeData.new({style: elevated_button.ElevatedButton.styleFrom({minimumSize: (t4$ = minButtonSize, t4$ == null ? flex_constants.kButtonMinSize : t4$), padding: padding, elevation: (t4$0 = elevation, t4$0 == null ? 1 : t4$0), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4$1 = radius, t4$1 == null ? 20 : t4$1)))})}).copyWith({foregroundColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
              if (states.contains(material_state.MaterialState.disabled)) {
                return flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(94);
              }
              return onBaseColor;
            }, T.SetOfMaterialStateToColor())), backgroundColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
              if (states.contains(material_state.MaterialState.disabled)) {
                return flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(49);
              }
              return baseColor;
            }, T.SetOfMaterialStateToColor())), overlayColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
              if (states.contains(material_state.MaterialState.hovered)) {
                return onBaseColor.withAlpha(13);
              }
              if (states.contains(material_state.MaterialState.focused)) {
                return onBaseColor.withAlpha(38);
              }
              if (states.contains(material_state.MaterialState.pressed)) {
                return onBaseColor.withAlpha(51);
              }
              return colors$.Colors.transparent;
            }, T.SetOfMaterialStateToColor()))})});
      } else {
        let foregroundColor = material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return colorScheme.onSurface.withOpacity(0.38);
          }
          return baseColor;
        }, T.SetOfMaterialStateToColor()));
        let backgroundColor = material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return colorScheme.onSurface.withOpacity(0.12);
          }
          return onBaseColor;
        }, T.SetOfMaterialStateToColor()));
        let overlayColor = material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
          if (states.contains(material_state.MaterialState.hovered)) {
            return baseColor.withOpacity(0.08);
          }
          if (states.contains(material_state.MaterialState.focused)) {
            return baseColor.withOpacity(0.12);
          }
          if (states.contains(material_state.MaterialState.pressed)) {
            return baseColor.withOpacity(0.12);
          }
          return null;
        }, T.SetOfMaterialStateToColorN()));
        return new elevated_button_theme.ElevatedButtonThemeData.new({style: new button_style.ButtonStyle.new({foregroundColor: foregroundColor, backgroundColor: backgroundColor, overlayColor: overlayColor, minimumSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, minButtonSize), padding: button_style_button.ButtonStyleButton.allOrNull(edge_insets.EdgeInsetsGeometry, padding), elevation: button_style_button.ButtonStyleButton.allOrNull(core.double, elevation), shape: radius == null ? null : button_style_button.ButtonStyleButton.allOrNull(borders.OutlinedBorder, new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(radius))}))})});
      }
    }
    static floatingActionButtonTheme(opts) {
      let t4;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let backgroundSchemeColor = opts && 'backgroundSchemeColor' in opts ? opts.backgroundSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let useShape = opts && 'useShape' in opts ? opts.useShape : true;
      let background = colorScheme == null ? null : backgroundSchemeColor == null ? null : flex_sub_themes.FlexSubThemes.schemeColor(backgroundSchemeColor, colorScheme);
      let foreground = background == null || colorScheme == null || backgroundSchemeColor == null ? null : flex_sub_themes.FlexSubThemes.schemeColorPair(backgroundSchemeColor, colorScheme);
      return new floating_action_button_theme.FloatingActionButtonThemeData.new({foregroundColor: foreground, backgroundColor: background, shape: useShape ? new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4 = radius, t4 == null ? 16 : t4)))}) : null});
    }
    static inputDecorationTheme(opts) {
      let t4, t4$, t4$0, t4$1, t4$2;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let borderType = opts && 'borderType' in opts ? opts.borderType : C[0] || CT.C0;
      let filled = opts && 'filled' in opts ? opts.filled : true;
      let fillColor = opts && 'fillColor' in opts ? opts.fillColor : null;
      let focusedBorderWidth = opts && 'focusedBorderWidth' in opts ? opts.focusedBorderWidth : null;
      let unfocusedBorderWidth = opts && 'unfocusedBorderWidth' in opts ? opts.unfocusedBorderWidth : null;
      let gapPadding = opts && 'gapPadding' in opts ? opts.gapPadding : 4;
      let unfocusedHasBorder = opts && 'unfocusedHasBorder' in opts ? opts.unfocusedHasBorder : true;
      let unfocusedBorderIsColored = opts && 'unfocusedBorderIsColored' in opts ? opts.unfocusedBorderIsColored : true;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor((t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4), colorScheme);
      let usedFillColor = (t4$ = fillColor, t4$ == null ? colorScheme.brightness === ui.Brightness.dark ? baseColor.withAlpha(20) : baseColor.withAlpha(13) : t4$);
      let enabledBorder = unfocusedBorderIsColored ? baseColor.withAlpha(167) : colorScheme.onSurface.withOpacity(0.38);
      let effectiveRadius = (t4$0 = radius, t4$0 == null ? useMaterial3 ? 4 : 16 : t4$0);
      let unfocusedWidth = (t4$1 = unfocusedBorderWidth, t4$1 == null ? useMaterial3 ? 1.0 : 1.5 : t4$1);
      let focusedWidth = (t4$2 = focusedBorderWidth, t4$2 == null ? 2 : t4$2);
      switch (borderType) {
        case C[0] || CT.C0:
          {
            return new input_decorator.InputDecorationTheme.new({floatingLabelStyle: material_state.MaterialStateTextStyle.resolveWith(dart.fn(states => {
                if (states.contains(material_state.MaterialState.error) && states.contains(material_state.MaterialState.focused)) {
                  return new text_style.TextStyle.new({color: colorScheme.error});
                }
                if (states.contains(material_state.MaterialState.error)) {
                  return new text_style.TextStyle.new({color: colorScheme.error.withAlpha(167)});
                }
                if (states.contains(material_state.MaterialState.disabled)) {
                  return new text_style.TextStyle.new({color: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(49)});
                }
                return new text_style.TextStyle.new({color: baseColor});
              }, T.SetOfMaterialStateToTextStyle())), filled: filled, fillColor: usedFillColor, hoverColor: baseColor.withAlpha(13), focusColor: baseColor.withAlpha(38), focusedBorder: new input_border.OutlineInputBorder.new({gapPadding: gapPadding, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(effectiveRadius)), borderSide: new borders.BorderSide.new({color: baseColor, width: focusedWidth})}), enabledBorder: new input_border.OutlineInputBorder.new({gapPadding: gapPadding, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(effectiveRadius)), borderSide: unfocusedHasBorder ? new borders.BorderSide.new({color: enabledBorder, width: unfocusedWidth}) : borders.BorderSide.none}), disabledBorder: new input_border.OutlineInputBorder.new({gapPadding: gapPadding, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(effectiveRadius)), borderSide: unfocusedHasBorder ? new borders.BorderSide.new({color: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(49), width: unfocusedWidth}) : borders.BorderSide.none}), focusedErrorBorder: new input_border.OutlineInputBorder.new({gapPadding: gapPadding, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(effectiveRadius)), borderSide: new borders.BorderSide.new({color: colorScheme.error, width: focusedWidth})}), errorBorder: new input_border.OutlineInputBorder.new({gapPadding: gapPadding, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(effectiveRadius)), borderSide: new borders.BorderSide.new({color: colorScheme.error.withAlpha(167), width: unfocusedWidth})})});
          }
        case C[5] || CT.C5:
          {
            return new input_decorator.InputDecorationTheme.new({floatingLabelStyle: material_state.MaterialStateTextStyle.resolveWith(dart.fn(states => {
                if (states.contains(material_state.MaterialState.error) && states.contains(material_state.MaterialState.focused)) {
                  return new text_style.TextStyle.new({color: colorScheme.error});
                }
                if (states.contains(material_state.MaterialState.error)) {
                  return new text_style.TextStyle.new({color: colorScheme.error.withAlpha(167)});
                }
                if (states.contains(material_state.MaterialState.disabled)) {
                  return new text_style.TextStyle.new({color: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(49)});
                }
                return new text_style.TextStyle.new({color: baseColor});
              }, T.SetOfMaterialStateToTextStyle())), filled: filled, fillColor: usedFillColor, hoverColor: baseColor.withAlpha(13), focusColor: baseColor.withAlpha(38), focusedBorder: new input_border.UnderlineInputBorder.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(effectiveRadius), topRight: new ui.Radius.circular(effectiveRadius)}), borderSide: new borders.BorderSide.new({color: baseColor, width: focusedWidth})}), enabledBorder: new input_border.UnderlineInputBorder.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(effectiveRadius), topRight: new ui.Radius.circular(effectiveRadius)}), borderSide: unfocusedHasBorder ? new borders.BorderSide.new({color: enabledBorder, width: unfocusedWidth}) : borders.BorderSide.none}), disabledBorder: new input_border.UnderlineInputBorder.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(effectiveRadius), topRight: new ui.Radius.circular(effectiveRadius)}), borderSide: unfocusedHasBorder ? new borders.BorderSide.new({color: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(49), width: unfocusedWidth}) : borders.BorderSide.none}), focusedErrorBorder: new input_border.UnderlineInputBorder.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(effectiveRadius), topRight: new ui.Radius.circular(effectiveRadius)}), borderSide: new borders.BorderSide.new({color: colorScheme.error, width: focusedWidth})}), errorBorder: new input_border.UnderlineInputBorder.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(effectiveRadius), topRight: new ui.Radius.circular(effectiveRadius)}), borderSide: new borders.BorderSide.new({color: colorScheme.error.withAlpha(167), width: unfocusedWidth})})});
          }
      }
    }
    static navigationBarTheme(opts) {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3, t4$4, t4$5, t4$6, t4$7, t4$8, t4$9, t4$10, t4$11;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let labelTextStyle = opts && 'labelTextStyle' in opts ? opts.labelTextStyle : null;
      let selectedLabelSize = opts && 'selectedLabelSize' in opts ? opts.selectedLabelSize : null;
      let unselectedLabelSize = opts && 'unselectedLabelSize' in opts ? opts.unselectedLabelSize : null;
      let selectedLabelSchemeColor = opts && 'selectedLabelSchemeColor' in opts ? opts.selectedLabelSchemeColor : null;
      let unselectedLabelSchemeColor = opts && 'unselectedLabelSchemeColor' in opts ? opts.unselectedLabelSchemeColor : null;
      let mutedUnselectedLabel = opts && 'mutedUnselectedLabel' in opts ? opts.mutedUnselectedLabel : null;
      let selectedIconSize = opts && 'selectedIconSize' in opts ? opts.selectedIconSize : null;
      let unselectedIconSize = opts && 'unselectedIconSize' in opts ? opts.unselectedIconSize : null;
      let selectedIconSchemeColor = opts && 'selectedIconSchemeColor' in opts ? opts.selectedIconSchemeColor : null;
      let unselectedIconSchemeColor = opts && 'unselectedIconSchemeColor' in opts ? opts.unselectedIconSchemeColor : null;
      let mutedUnselectedIcon = opts && 'mutedUnselectedIcon' in opts ? opts.mutedUnselectedIcon : null;
      let indicatorSchemeColor = opts && 'indicatorSchemeColor' in opts ? opts.indicatorSchemeColor : null;
      let backgroundSchemeColor = opts && 'backgroundSchemeColor' in opts ? opts.backgroundSchemeColor : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let height = opts && 'height' in opts ? opts.height : null;
      let labelBehavior = opts && 'labelBehavior' in opts ? opts.labelBehavior : null;
      let indicatorAlpha = opts && 'indicatorAlpha' in opts ? opts.indicatorAlpha : null;
      let unselectedAlphaBlend = opts && 'unselectedAlphaBlend' in opts ? opts.unselectedAlphaBlend : 102;
      let unselectedAlpha = opts && 'unselectedAlpha' in opts ? opts.unselectedAlpha : 165;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let useFlutterDefaults = opts && 'useFlutterDefaults' in opts ? opts.useFlutterDefaults : false;
      let useDefaultTextStyle = labelTextStyle == null && selectedLabelSize == null && unselectedLabelSize == null && selectedLabelSchemeColor == null && unselectedLabelSchemeColor == null && useFlutterDefaults;
      let useDefaultIconTheme = selectedIconSize == null && unselectedIconSize == null && selectedIconSchemeColor == null && unselectedIconSchemeColor == null && useFlutterDefaults;
      let labelColor = flex_sub_themes.FlexSubThemes.schemeColor((t4 = selectedLabelSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4), colorScheme);
      let unselectedLabelColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$ = unselectedLabelSchemeColor, t4$ == null ? flex_sub_themes.SchemeColor.onSurface : t4$), colorScheme);
      let textStyle = (t4$0 = labelTextStyle, t4$0 == null ? C[35] || CT.C35 : t4$0);
      let labelSize = (t4$2 = (t4$1 = selectedLabelSize, t4$1 == null ? textStyle.fontSize : t4$1), t4$2 == null ? 12.0 : t4$2);
      let effectiveUnselectedLabelSize = (t4$3 = unselectedLabelSize, t4$3 == null ? labelSize : t4$3);
      let iconColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$4 = selectedIconSchemeColor, t4$4 == null ? flex_sub_themes.SchemeColor.primary : t4$4), colorScheme);
      let unselectedIconColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$5 = unselectedIconSchemeColor, t4$5 == null ? flex_sub_themes.SchemeColor.onSurface : t4$5), colorScheme);
      let iconSize = (t4$6 = selectedIconSize, t4$6 == null ? 24.0 : t4$6);
      let effectiveUnselectedIconSize = (t4$7 = unselectedIconSize, t4$7 == null ? iconSize : t4$7);
      let backgroundColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$8 = backgroundSchemeColor, t4$8 == null ? flex_sub_themes.SchemeColor.background : t4$8), colorScheme).withOpacity(opacity);
      let indicatorColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$9 = indicatorSchemeColor, t4$9 == null ? flex_sub_themes.SchemeColor.primary : t4$9), colorScheme).withAlpha((t4$10 = indicatorAlpha, t4$10 == null ? 61 : t4$10));
      return new navigation_bar_theme.NavigationBarThemeData.new({height: (t4$11 = height, t4$11 == null ? useFlutterDefaults ? null : 62 : t4$11), backgroundColor: backgroundSchemeColor == null ? useFlutterDefaults || useMaterial3 ? null : backgroundColor : backgroundColor, indicatorColor: indicatorSchemeColor == null ? useFlutterDefaults ? null : indicatorColor : indicatorColor, labelTextStyle: useDefaultTextStyle ? null : material_state.MaterialStateProperty.resolveWith(text_style.TextStyle, dart.fn(states => {
          let t4;
          if (states.contains(material_state.MaterialState.selected)) {
            return textStyle.copyWith({fontSize: labelSize, color: labelColor});
          }
          return textStyle.copyWith({fontSize: effectiveUnselectedLabelSize, color: dart.test((t4 = mutedUnselectedLabel, t4 == null ? true : t4)) ? flex_extensions['FlexColorExtensions|blendAlpha'](unselectedLabelColor, unselectedLabelColor, unselectedAlphaBlend).withAlpha(unselectedAlpha) : unselectedLabelColor});
        }, T.SetOfMaterialStateToTextStyle())), iconTheme: useDefaultIconTheme ? null : material_state.MaterialStateProperty.resolveWith(icon_theme_data.IconThemeData, dart.fn(states => {
          let t4;
          if (states.contains(material_state.MaterialState.selected)) {
            return new icon_theme_data.IconThemeData.new({size: iconSize, color: iconColor});
          }
          return new icon_theme_data.IconThemeData.new({size: effectiveUnselectedIconSize, color: dart.test((t4 = mutedUnselectedIcon, t4 == null ? true : t4)) ? flex_extensions['FlexColorExtensions|blendAlpha'](unselectedIconColor, unselectedIconColor, unselectedAlphaBlend).withAlpha(unselectedAlpha) : unselectedIconColor});
        }, T.SetOfMaterialStateToIconThemeData())), labelBehavior: labelBehavior});
    }
    static navigationRailTheme(opts) {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3, t4$4, t4$5, t4$6, t4$7, t4$8, t4$9;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let labelTextStyle = opts && 'labelTextStyle' in opts ? opts.labelTextStyle : null;
      let selectedLabelSize = opts && 'selectedLabelSize' in opts ? opts.selectedLabelSize : null;
      let unselectedLabelSize = opts && 'unselectedLabelSize' in opts ? opts.unselectedLabelSize : null;
      let selectedLabelSchemeColor = opts && 'selectedLabelSchemeColor' in opts ? opts.selectedLabelSchemeColor : null;
      let unselectedLabelSchemeColor = opts && 'unselectedLabelSchemeColor' in opts ? opts.unselectedLabelSchemeColor : null;
      let mutedUnselectedLabel = opts && 'mutedUnselectedLabel' in opts ? opts.mutedUnselectedLabel : null;
      let selectedIconSize = opts && 'selectedIconSize' in opts ? opts.selectedIconSize : null;
      let unselectedIconSize = opts && 'unselectedIconSize' in opts ? opts.unselectedIconSize : null;
      let selectedIconSchemeColor = opts && 'selectedIconSchemeColor' in opts ? opts.selectedIconSchemeColor : null;
      let unselectedIconSchemeColor = opts && 'unselectedIconSchemeColor' in opts ? opts.unselectedIconSchemeColor : null;
      let mutedUnselectedIcon = opts && 'mutedUnselectedIcon' in opts ? opts.mutedUnselectedIcon : null;
      let useIndicator = opts && 'useIndicator' in opts ? opts.useIndicator : null;
      let indicatorSchemeColor = opts && 'indicatorSchemeColor' in opts ? opts.indicatorSchemeColor : null;
      let backgroundSchemeColor = opts && 'backgroundSchemeColor' in opts ? opts.backgroundSchemeColor : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
      let labelType = opts && 'labelType' in opts ? opts.labelType : null;
      let groupAlignment = opts && 'groupAlignment' in opts ? opts.groupAlignment : null;
      let indicatorAlpha = opts && 'indicatorAlpha' in opts ? opts.indicatorAlpha : null;
      let unselectedAlphaBlend = opts && 'unselectedAlphaBlend' in opts ? opts.unselectedAlphaBlend : 102;
      let unselectedAlpha = opts && 'unselectedAlpha' in opts ? opts.unselectedAlpha : 165;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let useFlutterDefaults = opts && 'useFlutterDefaults' in opts ? opts.useFlutterDefaults : false;
      let useDefaultTextStyle = labelTextStyle == null && selectedLabelSize == null && unselectedLabelSize == null && selectedLabelSchemeColor == null && unselectedLabelSchemeColor == null && useFlutterDefaults;
      let useDefaultIconTheme = selectedIconSize == null && unselectedIconSize == null && selectedIconSchemeColor == null && unselectedIconSchemeColor == null && useFlutterDefaults;
      let labelColor = selectedLabelSchemeColor == null ? colorScheme.primary : flex_sub_themes.FlexSubThemes.schemeColor(selectedLabelSchemeColor, colorScheme);
      let unselectedLabelColor = unselectedLabelSchemeColor == null ? colorScheme.onSurface : flex_sub_themes.FlexSubThemes.schemeColor(unselectedLabelSchemeColor, colorScheme);
      let textStyle = (t4 = labelTextStyle, t4 == null ? C[35] || CT.C35 : t4);
      let labelSize = (t4$0 = (t4$ = selectedLabelSize, t4$ == null ? textStyle.fontSize : t4$), t4$0 == null ? 12.0 : t4$0);
      let effectiveUnselectedLabelSize = (t4$1 = unselectedLabelSize, t4$1 == null ? labelSize : t4$1);
      let iconColor = selectedIconSchemeColor == null ? colorScheme.primary : flex_sub_themes.FlexSubThemes.schemeColor(selectedIconSchemeColor, colorScheme);
      let unselectedIconColor = unselectedIconSchemeColor == null ? colorScheme.onSurface : flex_sub_themes.FlexSubThemes.schemeColor(unselectedIconSchemeColor, colorScheme);
      let iconSize = (t4$2 = selectedIconSize, t4$2 == null ? 24.0 : t4$2);
      let effectiveUnselectedIconSize = (t4$3 = unselectedIconSize, t4$3 == null ? iconSize : t4$3);
      let effectiveIndicatorColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$4 = indicatorSchemeColor, t4$4 == null ? useFlutterDefaults ? useMaterial3 ? flex_sub_themes.SchemeColor.secondaryContainer : flex_sub_themes.SchemeColor.secondary : flex_sub_themes.SchemeColor.primary : t4$4), colorScheme).withAlpha((t4$5 = indicatorAlpha, t4$5 == null ? useMaterial3 && useFlutterDefaults ? 255 : 61 : t4$5));
      let effectiveUseIndicator = useMaterial3 && useIndicator == null || dart.test((t4$6 = useIndicator, t4$6 == null ? false : t4$6));
      let backgroundColor = flex_sub_themes.FlexSubThemes.schemeColor((t4$7 = backgroundSchemeColor, t4$7 == null ? flex_sub_themes.SchemeColor.background : t4$7), colorScheme).withOpacity(opacity);
      return new navigation_rail_theme.NavigationRailThemeData.new({backgroundColor: backgroundSchemeColor == null ? useFlutterDefaults ? null : backgroundColor : backgroundColor, elevation: elevation, unselectedLabelTextStyle: useDefaultTextStyle ? null : textStyle.copyWith({fontSize: effectiveUnselectedLabelSize, color: dart.test((t4$8 = mutedUnselectedLabel, t4$8 == null ? true : t4$8)) ? flex_extensions['FlexColorExtensions|blendAlpha'](unselectedLabelColor, unselectedLabelColor, unselectedAlphaBlend).withAlpha(unselectedAlpha) : unselectedLabelColor}), selectedLabelTextStyle: useDefaultTextStyle ? null : textStyle.copyWith({fontSize: labelSize, color: labelColor}), unselectedIconTheme: useDefaultIconTheme ? null : new icon_theme_data.IconThemeData.new({size: effectiveUnselectedIconSize, opacity: 1.0, color: dart.test((t4$9 = mutedUnselectedIcon, t4$9 == null ? true : t4$9)) ? flex_extensions['FlexColorExtensions|blendAlpha'](unselectedIconColor, unselectedIconColor, unselectedAlphaBlend).withAlpha(unselectedAlpha) : unselectedIconColor}), selectedIconTheme: useDefaultIconTheme ? null : new icon_theme_data.IconThemeData.new({size: iconSize, opacity: 1.0, color: iconColor}), groupAlignment: groupAlignment, labelType: labelType, useIndicator: true, indicatorColor: effectiveUseIndicator ? effectiveIndicatorColor : colors$.Colors.black.withAlpha(0)});
    }
    static outlinedButtonTheme(opts) {
      let t4, t4$, t4$0, t4$1, t4$2;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let outlineSchemeColor = opts && 'outlineSchemeColor' in opts ? opts.outlineSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let pressedOutlineWidth = opts && 'pressedOutlineWidth' in opts ? opts.pressedOutlineWidth : null;
      let outlineWidth = opts && 'outlineWidth' in opts ? opts.outlineWidth : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let minButtonSize = opts && 'minButtonSize' in opts ? opts.minButtonSize : null;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor((t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4), colorScheme);
      let outlineColor = outlineSchemeColor == null ? useMaterial3 ? flex_sub_themes.FlexSubThemes.schemeColor(flex_sub_themes.SchemeColor.outline, colorScheme) : baseColor : flex_sub_themes.FlexSubThemes.schemeColor(outlineSchemeColor, colorScheme);
      let normalWidth = (t4$ = outlineWidth, t4$ == null ? useMaterial3 ? 1.0 : 1.5 : t4$);
      let pressedWidth = (t4$0 = pressedOutlineWidth, t4$0 == null ? useMaterial3 ? 1.0 : 2 : t4$0);
      if (!useMaterial3) {
        return new outlined_button_theme.OutlinedButtonThemeData.new({style: outlined_button.OutlinedButton.styleFrom({minimumSize: (t4$1 = minButtonSize, t4$1 == null ? flex_constants.kButtonMinSize : t4$1), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4$2 = radius, t4$2 == null ? 20 : t4$2)))}), padding: padding}).copyWith({foregroundColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
              if (states.contains(material_state.MaterialState.disabled)) {
                return flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(94);
              }
              return baseColor;
            }, T.SetOfMaterialStateToColor())), overlayColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
              if (states.contains(material_state.MaterialState.hovered)) {
                return baseColor.withAlpha(13);
              }
              if (states.contains(material_state.MaterialState.focused)) {
                return baseColor.withAlpha(38);
              }
              if (states.contains(material_state.MaterialState.pressed)) {
                return baseColor.withAlpha(51);
              }
              return colors$.Colors.transparent;
            }, T.SetOfMaterialStateToColor())), side: material_state.MaterialStateProperty.resolveWith(T.BorderSideN(), dart.fn(states => {
              if (states.contains(material_state.MaterialState.disabled)) {
                return new borders.BorderSide.new({color: flex_extensions['FlexColorExtensions|blendAlpha'](outlineColor, colorScheme.onSurface, 102).withAlpha(49), width: normalWidth});
              }
              if (states.contains(material_state.MaterialState.error)) {
                return new borders.BorderSide.new({color: colorScheme.error, width: pressedWidth});
              }
              if (states.contains(material_state.MaterialState.pressed)) {
                return new borders.BorderSide.new({color: outlineColor, width: pressedWidth});
              }
              return new borders.BorderSide.new({color: outlineColor.withAlpha(167), width: normalWidth});
            }, T.SetOfMaterialStateToBorderSide()))})});
      } else {
        let foregroundColor = material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return colorScheme.onSurface.withOpacity(0.38);
          }
          return baseColor;
        }, T.SetOfMaterialStateToColor()));
        let overlayColor = material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
          if (states.contains(material_state.MaterialState.hovered)) {
            return baseColor.withOpacity(0.08);
          }
          if (states.contains(material_state.MaterialState.focused)) {
            return baseColor.withOpacity(0.12);
          }
          if (states.contains(material_state.MaterialState.pressed)) {
            return baseColor.withOpacity(0.12);
          }
          return null;
        }, T.SetOfMaterialStateToColorN()));
        let side = material_state.MaterialStateProperty.resolveWith(borders.BorderSide, dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return new borders.BorderSide.new({color: colorScheme.onSurface.withOpacity(0.12), width: normalWidth});
          }
          if (states.contains(material_state.MaterialState.error)) {
            return new borders.BorderSide.new({color: colorScheme.error, width: pressedWidth});
          }
          if (states.contains(material_state.MaterialState.pressed)) {
            return new borders.BorderSide.new({color: outlineColor, width: pressedWidth});
          }
          return new borders.BorderSide.new({color: outlineColor, width: normalWidth});
        }, T.SetOfMaterialStateToBorderSide()));
        return new outlined_button_theme.OutlinedButtonThemeData.new({style: new button_style.ButtonStyle.new({foregroundColor: foregroundColor, backgroundColor: button_style_button.ButtonStyleButton.allOrNull(ui.Color, colors$.Colors.transparent), overlayColor: overlayColor, minimumSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, minButtonSize), padding: button_style_button.ButtonStyleButton.allOrNull(edge_insets.EdgeInsetsGeometry, padding), elevation: button_style_button.ButtonStyleButton.allOrNull(core.double, 0.0), side: side, shape: radius == null ? null : button_style_button.ButtonStyleButton.allOrNull(borders.OutlinedBorder, new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(radius))}))})});
      }
    }
    static popupMenuTheme(opts) {
      let t4;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 3;
      let color = opts && 'color' in opts ? opts.color : null;
      return new popup_menu_theme.PopupMenuThemeData.new({elevation: elevation, color: color, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4 = radius, t4 == null ? 4 : t4)))})});
    }
    static radioTheme(opts) {
      let t4;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let splashRadius = opts && 'splashRadius' in opts ? opts.splashRadius : null;
      let unselectedIsColored = opts && 'unselectedIsColored' in opts ? opts.unselectedIsColored : true;
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor((t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4), colorScheme);
      let isLight = colorScheme.brightness === ui.Brightness.light;
      return new radio_theme.RadioThemeData.new({splashRadius: splashRadius, fillColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return isLight ? colors$.Colors.grey.shade400 : colors$.Colors.grey.shade800;
          }
          if (states.contains(material_state.MaterialState.selected)) {
            return baseColor;
          }
          if (unselectedIsColored) {
            return baseColor.withAlpha(221);
          }
          return isLight ? colors$.Colors.black54 : colors$.Colors.white70;
        }, T.SetOfMaterialStateToColor()))});
    }
    static snackBarTheme(opts) {
      let elevation = opts && 'elevation' in opts ? opts.elevation : 4;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let backgroundSchemeColor = opts && 'backgroundSchemeColor' in opts ? opts.backgroundSchemeColor : null;
      let background = colorScheme == null || backgroundSchemeColor == null ? backgroundColor : flex_sub_themes.FlexSubThemes.schemeColor(backgroundSchemeColor, colorScheme);
      let foreground = colorScheme != null && backgroundSchemeColor != null ? flex_sub_themes.FlexSubThemes.schemeColorPair(backgroundSchemeColor, colorScheme) : background != null ? theme_data.ThemeData.estimateBrightnessForColor(background) === ui.Brightness.light ? colors$.Colors.black : colors$.Colors.white : null;
      let snackTextStyle = foreground != null ? dart.nullCheck(theme_data.ThemeData.new({brightness: ui.Brightness.light}).textTheme.titleMedium).copyWith({color: foreground}) : null;
      return new snack_bar_theme.SnackBarThemeData.new({elevation: elevation, backgroundColor: background, contentTextStyle: snackTextStyle});
    }
    static switchTheme(opts) {
      let t4;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let splashRadius = opts && 'splashRadius' in opts ? opts.splashRadius : null;
      let unselectedIsColored = opts && 'unselectedIsColored' in opts ? opts.unselectedIsColored : true;
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor((t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4), colorScheme);
      let isLight = colorScheme.brightness === ui.Brightness.light;
      return new switch_theme.SwitchThemeData.new({splashRadius: splashRadius, thumbColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return isLight ? colors$.Colors.grey.shade400 : colors$.Colors.grey.shade800;
          }
          if (states.contains(material_state.MaterialState.selected)) {
            return baseColor;
          }
          return isLight ? colors$.Colors.grey.shade50 : colors$.Colors.grey.shade400;
        }, T.SetOfMaterialStateToColor())), trackColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return isLight ? colors$.Colors.black12 : colors$.Colors.white10;
          }
          if (states.contains(material_state.MaterialState.selected)) {
            return baseColor.withAlpha(112);
          }
          if (unselectedIsColored) {
            return baseColor.withAlpha(112);
          }
          return isLight ? C[39] || CT.C39 : colors$.Colors.white30;
        }, T.SetOfMaterialStateToColor()))});
    }
    static textButtonTheme(opts) {
      let t4, t4$, t4$0;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let minButtonSize = opts && 'minButtonSize' in opts ? opts.minButtonSize : null;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor((t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4), colorScheme);
      if (!useMaterial3) {
        return new text_button_theme.TextButtonThemeData.new({style: text_button.TextButton.styleFrom({minimumSize: (t4$ = minButtonSize, t4$ == null ? flex_constants.kButtonMinSize : t4$), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4$0 = radius, t4$0 == null ? 20 : t4$0)))}), padding: padding}).copyWith({foregroundColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
              if (states.contains(material_state.MaterialState.disabled)) {
                return flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(94);
              }
              return baseColor;
            }, T.SetOfMaterialStateToColor())), overlayColor: material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
              if (states.contains(material_state.MaterialState.hovered)) {
                return baseColor.withAlpha(13);
              }
              if (states.contains(material_state.MaterialState.focused)) {
                return baseColor.withAlpha(38);
              }
              if (states.contains(material_state.MaterialState.pressed)) {
                return baseColor.withAlpha(51);
              }
              return colors$.Colors.transparent;
            }, T.SetOfMaterialStateToColor()))})});
      } else {
        let foregroundColor = material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
          if (states.contains(material_state.MaterialState.disabled)) {
            return colorScheme.onSurface.withOpacity(0.38);
          }
          return baseColor;
        }, T.SetOfMaterialStateToColor()));
        let overlayColor = material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
          if (states.contains(material_state.MaterialState.hovered)) {
            return baseColor.withOpacity(0.08);
          }
          if (states.contains(material_state.MaterialState.focused)) {
            return baseColor.withOpacity(0.12);
          }
          if (states.contains(material_state.MaterialState.pressed)) {
            return baseColor.withOpacity(0.12);
          }
          return null;
        }, T.SetOfMaterialStateToColorN()));
        return new text_button_theme.TextButtonThemeData.new({style: new button_style.ButtonStyle.new({foregroundColor: foregroundColor, backgroundColor: button_style_button.ButtonStyleButton.allOrNull(ui.Color, colors$.Colors.transparent), overlayColor: overlayColor, minimumSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, minButtonSize), padding: button_style_button.ButtonStyleButton.allOrNull(edge_insets.EdgeInsetsGeometry, padding), elevation: button_style_button.ButtonStyleButton.allOrNull(core.double, 0.0), shape: radius == null ? null : button_style_button.ButtonStyleButton.allOrNull(borders.OutlinedBorder, new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(radius))}))})});
      }
    }
    static timePickerTheme(opts) {
      let t4, t4$, t4$0, t4$1, t4$2;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let backgroundSchemeColor = opts && 'backgroundSchemeColor' in opts ? opts.backgroundSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let elementRadius = opts && 'elementRadius' in opts ? opts.elementRadius : null;
      let inputDecorationTheme = opts && 'inputDecorationTheme' in opts ? opts.inputDecorationTheme : null;
      let background = colorScheme == null || backgroundSchemeColor == null ? backgroundColor : flex_sub_themes.FlexSubThemes.schemeColor(backgroundSchemeColor, colorScheme);
      return new time_picker_theme.TimePickerThemeData.new({backgroundColor: background, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4 = radius, t4 == null ? 28 : t4)))}), hourMinuteShape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4$ = elementRadius, t4$ == null ? 12 : t4$)))}), dayPeriodShape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular((t4$0 = elementRadius, t4$0 == null ? 12 : t4$0)))}), inputDecorationTheme: (t4$2 = (t4$1 = inputDecorationTheme, t4$1 == null ? null : t4$1.copyWith({contentPadding: edge_insets.EdgeInsets.zero, errorStyle: C[40] || CT.C40})), t4$2 == null ? (C[41] || CT.C41).copyWith({contentPadding: edge_insets.EdgeInsets.zero, errorStyle: C[40] || CT.C40}) : t4$2)});
    }
    static toggleButtonsTheme(opts) {
      let t4, t4$, t4$0, t4$1, t4$2;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let baseSchemeColor = opts && 'baseSchemeColor' in opts ? opts.baseSchemeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let borderWidth = opts && 'borderWidth' in opts ? opts.borderWidth : null;
      let minButtonSize = opts && 'minButtonSize' in opts ? opts.minButtonSize : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let baseScheme = (t4 = baseSchemeColor, t4 == null ? flex_sub_themes.SchemeColor.primary : t4);
      let baseColor = flex_sub_themes.FlexSubThemes.schemeColor(baseScheme, colorScheme);
      let onBaseColor = flex_sub_themes.FlexSubThemes.schemeColorPair(baseScheme, colorScheme);
      let effectiveMinButtonSize = (t4$ = minButtonSize, t4$ == null ? flex_constants.kButtonMinSize : t4$);
      let effectiveWidth = (t4$0 = borderWidth, t4$0 == null ? useMaterial3 ? 1.0 : 1.5 : t4$0);
      let usedVisualDensity = (t4$1 = visualDensity, t4$1 == null ? theme_data.VisualDensity.adaptivePlatformDensity : t4$1);
      return new toggle_buttons_theme.ToggleButtonsThemeData.new({borderWidth: effectiveWidth, selectedColor: onBaseColor.withAlpha(229), color: baseColor, fillColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 25), borderColor: baseColor.withAlpha(167), selectedBorderColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 25), hoverColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 64 + 25).withAlpha(25), focusColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 76 + 25).withAlpha(76), highlightColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 64 + 25).withAlpha(25), splashColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colors$.Colors.white, 31 + 25).withAlpha(51), disabledColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(94), disabledBorderColor: flex_extensions['FlexColorExtensions|blendAlpha'](baseColor, colorScheme.onSurface, 102).withAlpha(49), borderRadius: new border_radius.BorderRadius.circular((t4$2 = radius, t4$2 == null ? 20 : t4$2)), constraints: new box.BoxConstraints.new({minWidth: effectiveMinButtonSize.width - effectiveWidth * 2 + usedVisualDensity.baseSizeAdjustment.dx, minHeight: effectiveMinButtonSize.height - effectiveWidth * 2 + usedVisualDensity.baseSizeAdjustment.dy})});
    }
  };
  (flex_sub_themes.FlexSubThemes.__ = function() {
    ;
  }).prototype = flex_sub_themes.FlexSubThemes.prototype;
  dart.addTypeTests(flex_sub_themes.FlexSubThemes);
  dart.addTypeCaches(flex_sub_themes.FlexSubThemes);
  dart.setStaticMethodSignature(flex_sub_themes.FlexSubThemes, () => ['schemeColor', 'schemeColorPair', 'buttonTheme', 'bottomNavigationBar', 'bottomSheetTheme', 'cardTheme', 'checkboxTheme', 'chipTheme', 'dialogTheme', 'elevatedButtonTheme', 'floatingActionButtonTheme', 'inputDecorationTheme', 'navigationBarTheme', 'navigationRailTheme', 'outlinedButtonTheme', 'popupMenuTheme', 'radioTheme', 'snackBarTheme', 'switchTheme', 'textButtonTheme', 'timePickerTheme', 'toggleButtonsTheme']);
  dart.setLibraryUri(flex_sub_themes.FlexSubThemes, I[1]);
  flex_color_scheme.FlexAppBarStyle = class FlexAppBarStyle extends core._Enum {
    toString() {
      return "FlexAppBarStyle." + this[_name];
    }
  };
  (flex_color_scheme.FlexAppBarStyle.new = function(index, name) {
    flex_color_scheme.FlexAppBarStyle.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex_color_scheme.FlexAppBarStyle.prototype;
  dart.addTypeTests(flex_color_scheme.FlexAppBarStyle);
  dart.addTypeCaches(flex_color_scheme.FlexAppBarStyle);
  dart.setLibraryUri(flex_color_scheme.FlexAppBarStyle, I[2]);
  dart.setStaticFieldSignature(flex_color_scheme.FlexAppBarStyle, () => ['values', 'primary', 'material', 'surface', 'background', 'custom']);
  dart.defineExtensionMethods(flex_color_scheme.FlexAppBarStyle, ['toString']);
  dart.defineLazy(flex_color_scheme.FlexAppBarStyle, {
    /*flex_color_scheme.FlexAppBarStyle.values*/get values() {
      return C[44] || CT.C44;
    },
    /*flex_color_scheme.FlexAppBarStyle.primary*/get primary() {
      return C[45] || CT.C45;
    },
    /*flex_color_scheme.FlexAppBarStyle.material*/get material() {
      return C[46] || CT.C46;
    },
    /*flex_color_scheme.FlexAppBarStyle.surface*/get surface() {
      return C[47] || CT.C47;
    },
    /*flex_color_scheme.FlexAppBarStyle.background*/get background() {
      return C[48] || CT.C48;
    },
    /*flex_color_scheme.FlexAppBarStyle.custom*/get custom() {
      return C[49] || CT.C49;
    }
  }, false);
  flex_color_scheme.FlexSystemNavBarStyle = class FlexSystemNavBarStyle extends core._Enum {
    toString() {
      return "FlexSystemNavBarStyle." + this[_name];
    }
  };
  (flex_color_scheme.FlexSystemNavBarStyle.new = function(index, name) {
    flex_color_scheme.FlexSystemNavBarStyle.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex_color_scheme.FlexSystemNavBarStyle.prototype;
  dart.addTypeTests(flex_color_scheme.FlexSystemNavBarStyle);
  dart.addTypeCaches(flex_color_scheme.FlexSystemNavBarStyle);
  dart.setLibraryUri(flex_color_scheme.FlexSystemNavBarStyle, I[2]);
  dart.setStaticFieldSignature(flex_color_scheme.FlexSystemNavBarStyle, () => ['values', 'system', 'surface', 'background', 'scaffoldBackground', 'transparent']);
  dart.defineExtensionMethods(flex_color_scheme.FlexSystemNavBarStyle, ['toString']);
  dart.defineLazy(flex_color_scheme.FlexSystemNavBarStyle, {
    /*flex_color_scheme.FlexSystemNavBarStyle.values*/get values() {
      return C[50] || CT.C50;
    },
    /*flex_color_scheme.FlexSystemNavBarStyle.system*/get system() {
      return C[51] || CT.C51;
    },
    /*flex_color_scheme.FlexSystemNavBarStyle.surface*/get surface() {
      return C[52] || CT.C52;
    },
    /*flex_color_scheme.FlexSystemNavBarStyle.background*/get background() {
      return C[53] || CT.C53;
    },
    /*flex_color_scheme.FlexSystemNavBarStyle.scaffoldBackground*/get scaffoldBackground() {
      return C[54] || CT.C54;
    },
    /*flex_color_scheme.FlexSystemNavBarStyle.transparent*/get transparent() {
      return C[55] || CT.C55;
    }
  }, false);
  flex_color_scheme.FlexTabBarStyle = class FlexTabBarStyle extends core._Enum {
    toString() {
      return "FlexTabBarStyle." + this[_name];
    }
  };
  (flex_color_scheme.FlexTabBarStyle.new = function(index, name) {
    flex_color_scheme.FlexTabBarStyle.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex_color_scheme.FlexTabBarStyle.prototype;
  dart.addTypeTests(flex_color_scheme.FlexTabBarStyle);
  dart.addTypeCaches(flex_color_scheme.FlexTabBarStyle);
  dart.setLibraryUri(flex_color_scheme.FlexTabBarStyle, I[2]);
  dart.setStaticFieldSignature(flex_color_scheme.FlexTabBarStyle, () => ['values', 'forAppBar', 'forBackground', 'flutterDefault', 'universal']);
  dart.defineExtensionMethods(flex_color_scheme.FlexTabBarStyle, ['toString']);
  dart.defineLazy(flex_color_scheme.FlexTabBarStyle, {
    /*flex_color_scheme.FlexTabBarStyle.values*/get values() {
      return C[56] || CT.C56;
    },
    /*flex_color_scheme.FlexTabBarStyle.forAppBar*/get forAppBar() {
      return C[57] || CT.C57;
    },
    /*flex_color_scheme.FlexTabBarStyle.forBackground*/get forBackground() {
      return C[58] || CT.C58;
    },
    /*flex_color_scheme.FlexTabBarStyle.flutterDefault*/get flutterDefault() {
      return C[59] || CT.C59;
    },
    /*flex_color_scheme.FlexTabBarStyle.universal*/get universal() {
      return C[60] || CT.C60;
    }
  }, false);
  var colorScheme$ = dart.privateName(flex_color_scheme, "FlexColorScheme.colorScheme");
  var brightness$ = dart.privateName(flex_color_scheme, "FlexColorScheme.brightness");
  var primary$ = dart.privateName(flex_color_scheme, "FlexColorScheme.primary");
  var primaryContainer$ = dart.privateName(flex_color_scheme, "FlexColorScheme.primaryContainer");
  var secondary$ = dart.privateName(flex_color_scheme, "FlexColorScheme.secondary");
  var secondaryContainer$ = dart.privateName(flex_color_scheme, "FlexColorScheme.secondaryContainer");
  var tertiary$ = dart.privateName(flex_color_scheme, "FlexColorScheme.tertiary");
  var tertiaryContainer$ = dart.privateName(flex_color_scheme, "FlexColorScheme.tertiaryContainer");
  var error$ = dart.privateName(flex_color_scheme, "FlexColorScheme.error");
  var surface$ = dart.privateName(flex_color_scheme, "FlexColorScheme.surface");
  var background$ = dart.privateName(flex_color_scheme, "FlexColorScheme.background");
  var scaffoldBackground$ = dart.privateName(flex_color_scheme, "FlexColorScheme.scaffoldBackground");
  var dialogBackground$ = dart.privateName(flex_color_scheme, "FlexColorScheme.dialogBackground");
  var appBarBackground$ = dart.privateName(flex_color_scheme, "FlexColorScheme.appBarBackground");
  var onPrimary$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onPrimary");
  var onPrimaryContainer$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onPrimaryContainer");
  var onSecondary$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onSecondary");
  var onSecondaryContainer$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onSecondaryContainer");
  var onTertiary$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onTertiary");
  var onTertiaryContainer$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onTertiaryContainer");
  var onSurface$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onSurface");
  var onBackground$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onBackground");
  var onError$ = dart.privateName(flex_color_scheme, "FlexColorScheme.onError");
  var surfaceTint$ = dart.privateName(flex_color_scheme, "FlexColorScheme.surfaceTint");
  var tabBarStyle$ = dart.privateName(flex_color_scheme, "FlexColorScheme.tabBarStyle");
  var appBarElevation$ = dart.privateName(flex_color_scheme, "FlexColorScheme.appBarElevation");
  var bottomAppBarElevation$ = dart.privateName(flex_color_scheme, "FlexColorScheme.bottomAppBarElevation");
  var tooltipsMatchBackground$ = dart.privateName(flex_color_scheme, "FlexColorScheme.tooltipsMatchBackground");
  var transparentStatusBar$ = dart.privateName(flex_color_scheme, "FlexColorScheme.transparentStatusBar");
  var visualDensity$ = dart.privateName(flex_color_scheme, "FlexColorScheme.visualDensity");
  var textTheme$ = dart.privateName(flex_color_scheme, "FlexColorScheme.textTheme");
  var primaryTextTheme$ = dart.privateName(flex_color_scheme, "FlexColorScheme.primaryTextTheme");
  var fontFamily$ = dart.privateName(flex_color_scheme, "FlexColorScheme.fontFamily");
  var platform$ = dart.privateName(flex_color_scheme, "FlexColorScheme.platform");
  var typography$ = dart.privateName(flex_color_scheme, "FlexColorScheme.typography");
  var applyElevationOverlayColor$ = dart.privateName(flex_color_scheme, "FlexColorScheme.applyElevationOverlayColor");
  var subThemesData$ = dart.privateName(flex_color_scheme, "FlexColorScheme.subThemesData");
  var useMaterial3$ = dart.privateName(flex_color_scheme, "FlexColorScheme.useMaterial3");
  var extensions$ = dart.privateName(flex_color_scheme, "FlexColorScheme.extensions");
  var FlexKeyColors_keepTertiaryContainer = dart.privateName(flex_key_color, "FlexKeyColors.keepTertiaryContainer");
  var FlexKeyColors_keepSecondaryContainer = dart.privateName(flex_key_color, "FlexKeyColors.keepSecondaryContainer");
  var FlexKeyColors_keepPrimaryContainer = dart.privateName(flex_key_color, "FlexKeyColors.keepPrimaryContainer");
  var FlexKeyColors_keepTertiary = dart.privateName(flex_key_color, "FlexKeyColors.keepTertiary");
  var FlexKeyColors_keepSecondary = dart.privateName(flex_key_color, "FlexKeyColors.keepSecondary");
  var FlexKeyColors_keepPrimary = dart.privateName(flex_key_color, "FlexKeyColors.keepPrimary");
  var FlexKeyColors_useTertiary = dart.privateName(flex_key_color, "FlexKeyColors.useTertiary");
  var FlexKeyColors_useSecondary = dart.privateName(flex_key_color, "FlexKeyColors.useSecondary");
  var FlexKeyColors_useKeyColors = dart.privateName(flex_key_color, "FlexKeyColors.useKeyColors");
  var FlexAlphaValues_scaffoldAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.scaffoldAlpha");
  var FlexAlphaValues_backgroundAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.backgroundAlpha");
  var FlexAlphaValues_dialogAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.dialogAlpha");
  var FlexAlphaValues_inverseSurfaceAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.inverseSurfaceAlpha");
  var FlexAlphaValues_surfaceVariantAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.surfaceVariantAlpha");
  var FlexAlphaValues_surfaceAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.surfaceAlpha");
  var FlexAlphaValues_errorContainerAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.errorContainerAlpha");
  var FlexAlphaValues_errorAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.errorAlpha");
  var FlexAlphaValues_tertiaryContainerAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.tertiaryContainerAlpha");
  var FlexAlphaValues_tertiaryAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.tertiaryAlpha");
  var FlexAlphaValues_secondaryContainerAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.secondaryContainerAlpha");
  var FlexAlphaValues_secondaryAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.secondaryAlpha");
  var FlexAlphaValues_primaryContainerAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.primaryContainerAlpha");
  var FlexAlphaValues_primaryAlpha = dart.privateName(flex_alpha_values, "FlexAlphaValues.primaryAlpha");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  flex_color_scheme.FlexColorScheme = class FlexColorScheme extends Object_Diagnosticable$36$ {
    get colorScheme() {
      return this[colorScheme$];
    }
    set colorScheme(value) {
      super.colorScheme = value;
    }
    get brightness() {
      return this[brightness$];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get primaryContainer() {
      return this[primaryContainer$];
    }
    set primaryContainer(value) {
      super.primaryContainer = value;
    }
    get secondary() {
      return this[secondary$];
    }
    set secondary(value) {
      super.secondary = value;
    }
    get secondaryContainer() {
      return this[secondaryContainer$];
    }
    set secondaryContainer(value) {
      super.secondaryContainer = value;
    }
    get tertiary() {
      return this[tertiary$];
    }
    set tertiary(value) {
      super.tertiary = value;
    }
    get tertiaryContainer() {
      return this[tertiaryContainer$];
    }
    set tertiaryContainer(value) {
      super.tertiaryContainer = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get surface() {
      return this[surface$];
    }
    set surface(value) {
      super.surface = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get scaffoldBackground() {
      return this[scaffoldBackground$];
    }
    set scaffoldBackground(value) {
      super.scaffoldBackground = value;
    }
    get dialogBackground() {
      return this[dialogBackground$];
    }
    set dialogBackground(value) {
      super.dialogBackground = value;
    }
    get appBarBackground() {
      return this[appBarBackground$];
    }
    set appBarBackground(value) {
      super.appBarBackground = value;
    }
    get onPrimary() {
      return this[onPrimary$];
    }
    set onPrimary(value) {
      super.onPrimary = value;
    }
    get onPrimaryContainer() {
      return this[onPrimaryContainer$];
    }
    set onPrimaryContainer(value) {
      super.onPrimaryContainer = value;
    }
    get onSecondary() {
      return this[onSecondary$];
    }
    set onSecondary(value) {
      super.onSecondary = value;
    }
    get onSecondaryContainer() {
      return this[onSecondaryContainer$];
    }
    set onSecondaryContainer(value) {
      super.onSecondaryContainer = value;
    }
    get onTertiary() {
      return this[onTertiary$];
    }
    set onTertiary(value) {
      super.onTertiary = value;
    }
    get onTertiaryContainer() {
      return this[onTertiaryContainer$];
    }
    set onTertiaryContainer(value) {
      super.onTertiaryContainer = value;
    }
    get onSurface() {
      return this[onSurface$];
    }
    set onSurface(value) {
      super.onSurface = value;
    }
    get onBackground() {
      return this[onBackground$];
    }
    set onBackground(value) {
      super.onBackground = value;
    }
    get onError() {
      return this[onError$];
    }
    set onError(value) {
      super.onError = value;
    }
    get surfaceTint() {
      return this[surfaceTint$];
    }
    set surfaceTint(value) {
      super.surfaceTint = value;
    }
    get tabBarStyle() {
      return this[tabBarStyle$];
    }
    set tabBarStyle(value) {
      super.tabBarStyle = value;
    }
    get appBarElevation() {
      return this[appBarElevation$];
    }
    set appBarElevation(value) {
      super.appBarElevation = value;
    }
    get bottomAppBarElevation() {
      return this[bottomAppBarElevation$];
    }
    set bottomAppBarElevation(value) {
      super.bottomAppBarElevation = value;
    }
    get tooltipsMatchBackground() {
      return this[tooltipsMatchBackground$];
    }
    set tooltipsMatchBackground(value) {
      super.tooltipsMatchBackground = value;
    }
    get transparentStatusBar() {
      return this[transparentStatusBar$];
    }
    set transparentStatusBar(value) {
      super.transparentStatusBar = value;
    }
    get visualDensity() {
      return this[visualDensity$];
    }
    set visualDensity(value) {
      super.visualDensity = value;
    }
    get textTheme() {
      return this[textTheme$];
    }
    set textTheme(value) {
      super.textTheme = value;
    }
    get primaryTextTheme() {
      return this[primaryTextTheme$];
    }
    set primaryTextTheme(value) {
      super.primaryTextTheme = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get platform() {
      return this[platform$];
    }
    set platform(value) {
      super.platform = value;
    }
    get typography() {
      return this[typography$];
    }
    set typography(value) {
      super.typography = value;
    }
    get applyElevationOverlayColor() {
      return this[applyElevationOverlayColor$];
    }
    set applyElevationOverlayColor(value) {
      super.applyElevationOverlayColor = value;
    }
    get subThemesData() {
      return this[subThemesData$];
    }
    set subThemesData(value) {
      super.subThemesData = value;
    }
    get useMaterial3() {
      return this[useMaterial3$];
    }
    set useMaterial3(value) {
      super.useMaterial3 = value;
    }
    get extensions() {
      return this[extensions$];
    }
    set extensions(value) {
      super.extensions = value;
    }
    static ['_#new#tearOff'](opts) {
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
      let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
      let appBarBackground = opts && 'appBarBackground' in opts ? opts.appBarBackground : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
      let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : C[57] || CT.C57;
      let appBarElevation = opts && 'appBarElevation' in opts ? opts.appBarElevation : 0;
      let bottomAppBarElevation = opts && 'bottomAppBarElevation' in opts ? opts.bottomAppBarElevation : 0;
      let tooltipsMatchBackground = opts && 'tooltipsMatchBackground' in opts ? opts.tooltipsMatchBackground : false;
      let transparentStatusBar = opts && 'transparentStatusBar' in opts ? opts.transparentStatusBar : true;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let primaryTextTheme = opts && 'primaryTextTheme' in opts ? opts.primaryTextTheme : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let typography = opts && 'typography' in opts ? opts.typography : null;
      let applyElevationOverlayColor = opts && 'applyElevationOverlayColor' in opts ? opts.applyElevationOverlayColor : true;
      let subThemesData = opts && 'subThemesData' in opts ? opts.subThemesData : null;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let extensions = opts && 'extensions' in opts ? opts.extensions : null;
      return new flex_color_scheme.FlexColorScheme.new({colorScheme: colorScheme, brightness: brightness, primary: primary, primaryContainer: primaryContainer, secondary: secondary, secondaryContainer: secondaryContainer, tertiary: tertiary, tertiaryContainer: tertiaryContainer, error: error, surface: surface, background: background, scaffoldBackground: scaffoldBackground, dialogBackground: dialogBackground, appBarBackground: appBarBackground, onPrimary: onPrimary, onPrimaryContainer: onPrimaryContainer, onSecondary: onSecondary, onSecondaryContainer: onSecondaryContainer, onTertiary: onTertiary, onTertiaryContainer: onTertiaryContainer, onSurface: onSurface, onBackground: onBackground, onError: onError, surfaceTint: surfaceTint, tabBarStyle: tabBarStyle, appBarElevation: appBarElevation, bottomAppBarElevation: bottomAppBarElevation, tooltipsMatchBackground: tooltipsMatchBackground, transparentStatusBar: transparentStatusBar, visualDensity: visualDensity, textTheme: textTheme, primaryTextTheme: primaryTextTheme, fontFamily: fontFamily, platform: platform, typography: typography, applyElevationOverlayColor: applyElevationOverlayColor, subThemesData: subThemesData, useMaterial3: useMaterial3, extensions: extensions});
    }
    static light(opts) {
      let t10, t10$, t10$0, t10$1, t11, t10$2, t11$, t10$3, t11$0, t10$4, t11$1, t10$5, t11$2, t10$6, t11$3, t10$7, t11$4, t10$8, t10$9, t10$10, t11$5, t10$11, t10$12, t10$13, t10$14, t10$15, t10$16, t10$17, t10$18, t11$6, t10$19, t11$7, t10$20, t11$8, t10$21, t11$9, t10$22, t11$10, t10$23, t11$11, t10$24, t11$12, t10$25, t11$13, t10$26, t11$14, t10$27, t11$15, t10$28, t11$16, t10$29, t11$17, t10$30, t11$18, t10$31, t11$19, t10$32, t10$33, t11$20, t10$34, t10$35, t11$21, t10$36, t11$22, t10$37, t11$23, t10$38, t11$24, t10$39, t11$25, t10$40, t10$41, t11$26, t10$42, t10$43, t10$44, t10$45, t10$46, t11$27, t10$47, t11$28, t10$48, t10$49, t10$50, t10$51, t10$52;
      let colors = opts && 'colors' in opts ? opts.colors : null;
      let scheme = opts && 'scheme' in opts ? opts.scheme : null;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let usedColors = opts && 'usedColors' in opts ? opts.usedColors : 6;
      let surfaceMode = opts && 'surfaceMode' in opts ? opts.surfaceMode : null;
      let blendLevel = opts && 'blendLevel' in opts ? opts.blendLevel : 0;
      let appBarStyle = opts && 'appBarStyle' in opts ? opts.appBarStyle : null;
      let appBarOpacity = opts && 'appBarOpacity' in opts ? opts.appBarOpacity : 1;
      let transparentStatusBar = opts && 'transparentStatusBar' in opts ? opts.transparentStatusBar : true;
      let appBarElevation = opts && 'appBarElevation' in opts ? opts.appBarElevation : 0;
      let bottomAppBarElevation = opts && 'bottomAppBarElevation' in opts ? opts.bottomAppBarElevation : null;
      let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : C[57] || CT.C57;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
      let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
      let appBarBackground = opts && 'appBarBackground' in opts ? opts.appBarBackground : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
      let lightIsWhite = opts && 'lightIsWhite' in opts ? opts.lightIsWhite : false;
      let swapColors = opts && 'swapColors' in opts ? opts.swapColors : false;
      let tooltipsMatchBackground = opts && 'tooltipsMatchBackground' in opts ? opts.tooltipsMatchBackground : false;
      let subThemesData = opts && 'subThemesData' in opts ? opts.subThemesData : null;
      let keyColors = opts && 'keyColors' in opts ? opts.keyColors : null;
      let useMaterial3ErrorColors = opts && 'useMaterial3ErrorColors' in opts ? opts.useMaterial3ErrorColors : false;
      let tones = opts && 'tones' in opts ? opts.tones : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let primaryTextTheme = opts && 'primaryTextTheme' in opts ? opts.primaryTextTheme : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let typography = opts && 'typography' in opts ? opts.typography : null;
      let applyElevationOverlayColor = opts && 'applyElevationOverlayColor' in opts ? opts.applyElevationOverlayColor : true;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let extensions = opts && 'extensions' in opts ? opts.extensions : null;
      if (!(usedColors >= 1 && usedColors <= 6)) dart.assertFailed("usedColors must be 1 to 6", I[3], 2099, 12, "usedColors >= 1 && usedColors <= 6");
      if (!(appBarOpacity >= 0 && appBarOpacity <= 1)) dart.assertFailed("appBarOpacity must be 0 to 1", I[3], 2100, 12, "appBarOpacity >= 0 && appBarOpacity <= 1");
      if (!(blendLevel >= 0 && blendLevel <= 40)) dart.assertFailed("Only blend levels from 0 to 40 are allowed. Very high alpha values may " + "not produce results that are visually very appealing or useful.", I[3], 2103, 7, "blendLevel >= 0 && blendLevel <= 40");
      if (!(appBarElevation >= 0.0)) dart.assertFailed("AppBar elevation must be >= 0.", I[3], 2107, 12, "appBarElevation >= 0.0");
      if (!(bottomAppBarElevation == null || dart.notNull(bottomAppBarElevation) >= 0.0)) dart.assertFailed("Bottom AppBar elevation must be null or must be >= 0.", I[3], 2108, 12, "bottomAppBarElevation == null || bottomAppBarElevation >= 0.0");
      let effectiveBottomAppBarElevation = (t10 = bottomAppBarElevation, t10 == null ? appBarElevation : t10);
      let seed = (t10$ = keyColors, t10$ == null ? C[61] || CT.C61 : t10$);
      let flexScheme = (t10$0 = scheme, t10$0 == null ? flex_scheme.FlexScheme.material : t10$0);
      let flexColors = (t10$1 = colors, t10$1 == null ? dart.nullCheck(flex_color.FlexColor.schemesWithCustom[$_get](flexScheme)).light : t10$1);
      let withPassedColors = flexColors.copyWith({primary: (t10$2 = primary, t10$2 == null ? (t11 = colorScheme, t11 == null ? null : t11.primary) : t10$2), primaryContainer: (t10$3 = primaryContainer, t10$3 == null ? (t11$ = colorScheme, t11$ == null ? null : t11$.primaryContainer) : t10$3), secondary: (t10$4 = secondary, t10$4 == null ? (t11$0 = colorScheme, t11$0 == null ? null : t11$0.secondary) : t10$4), secondaryContainer: (t10$5 = secondaryContainer, t10$5 == null ? (t11$1 = colorScheme, t11$1 == null ? null : t11$1.secondaryContainer) : t10$5), tertiary: (t10$6 = tertiary, t10$6 == null ? (t11$2 = colorScheme, t11$2 == null ? null : t11$2.tertiary) : t10$6), tertiaryContainer: (t10$7 = tertiaryContainer, t10$7 == null ? (t11$3 = colorScheme, t11$3 == null ? null : t11$3.tertiaryContainer) : t10$7), error: (t10$8 = error, t10$8 == null ? (t11$4 = colorScheme, t11$4 == null ? null : t11$4.error) : t10$8), errorContainer: (t10$9 = colorScheme, t10$9 == null ? null : t10$9.errorContainer)});
      let effectiveColors = flex_scheme_color.FlexSchemeColor.effective(withPassedColors, usedColors, {swapColors: swapColors, brightness: ui.Brightness.light});
      let seedScheme = null;
      if (seed.useKeyColors) {
        seedScheme = flex_seed_scheme['SeedColorScheme|fromSeeds']({brightness: ui.Brightness.light, primaryKey: effectiveColors.primary, secondaryKey: seed.useSecondary ? effectiveColors.secondary : null, tertiaryKey: seed.useTertiary ? effectiveColors.tertiary : null, tones: (t10$10 = tones, t10$10 == null ? flex_tones.FlexTones.material(ui.Brightness.light) : t10$10), surfaceTint: surfaceTint});
        effectiveColors = new flex_scheme_color.FlexSchemeColor.new({primary: seed.keepPrimary ? effectiveColors.primary : seedScheme.primary, primaryContainer: seed.keepPrimaryContainer ? effectiveColors.primaryContainer : seedScheme.primaryContainer, secondary: seed.keepSecondary ? effectiveColors.secondary : seedScheme.secondary, secondaryContainer: seed.keepSecondaryContainer ? effectiveColors.secondaryContainer : seedScheme.secondaryContainer, tertiary: seed.keepTertiary ? effectiveColors.tertiary : seedScheme.tertiary, tertiaryContainer: seed.keepTertiaryContainer ? effectiveColors.tertiaryContainer : seedScheme.tertiaryContainer, appBarColor: effectiveColors.appBarColor, error: seedScheme.error, errorContainer: seedScheme.errorContainer});
      }
      let blendColor = (t10$12 = (t10$11 = surfaceTint, t10$11 == null ? (t11$5 = colorScheme, t11$5 == null ? null : t11$5.surfaceTint) : t10$11), t10$12 == null ? effectiveColors.primary : t10$12);
      let surfaceSchemeColors = flex_scheme_surface_colors.FlexSchemeSurfaceColors.blend({brightness: ui.Brightness.light, surfaceMode: (t10$13 = surfaceMode, t10$13 == null ? flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfaces : t10$13), blendLevel: blendLevel, surfaceVariantBlendDivide: seed.useKeyColors ? 2 : 1, schemeColors: effectiveColors, blendColors: new flex_scheme_surface_colors.FlexSchemeSurfaceColors.new({surface: blendColor, surfaceVariant: blendColor, inverseSurface: blendColor, dialogBackground: blendColor, background: blendColor, scaffoldBackground: blendColor}), surfaceColors: seed.useKeyColors ? new flex_scheme_surface_colors.FlexSchemeSurfaceColors.new({surface: dart.nullCheck(seedScheme).surface, surfaceVariant: seedScheme.surfaceVariant, inverseSurface: seedScheme.inverseSurface, dialogBackground: seedScheme.surface, background: seedScheme.background, scaffoldBackground: seedScheme.background}) : null});
      let useSubThemes = subThemesData != null;
      let subTheme = (t10$14 = subThemesData, t10$14 == null ? C[62] || CT.C62 : t10$14);
      let onBlendLevel = useSubThemes ? subTheme.blendOnLevel : 0;
      if (!(onBlendLevel >= 0 && onBlendLevel <= 40)) dart.assertFailed("Only onBlendLevel:s from 0 to 40 " + "are allowed. Very high alpha blend levels may not produce results " + "that are visually very appealing or useful.", I[3], 2229, 9, "onBlendLevel >= 0 && onBlendLevel <= 40");
      if (onBlendLevel < 0 || onBlendLevel > 40) onBlendLevel = 0;
      let alphaOnValue = useSubThemes ? flex_alpha_values.FlexAlphaValues.getAlphas((t10$15 = surfaceMode, t10$15 == null ? flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfaces : t10$15), onBlendLevel) : C[63] || CT.C63;
      let alphaOnMain = useSubThemes && subTheme.blendOnColors ? flex_alpha_values.FlexAlphaValues.getAlphas((t10$16 = surfaceMode, t10$16 == null ? flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfaces : t10$16), onBlendLevel) : C[63] || CT.C63;
      let inputSurface = (t10$17 = surface, t10$17 == null ? surfaceSchemeColors.surface : t10$17);
      let inputBackground = (t10$18 = background, t10$18 == null ? surfaceSchemeColors.background : t10$18);
      let onColors = flex_scheme_on_colors.FlexSchemeOnColors.from({primary: effectiveColors.primary, primaryContainer: effectiveColors.primaryContainer, secondary: effectiveColors.secondary, secondaryContainer: effectiveColors.secondaryContainer, tertiary: effectiveColors.tertiary, tertiaryContainer: effectiveColors.tertiaryContainer, surface: inputSurface, surfaceVariant: surfaceSchemeColors.surfaceVariant, inverseSurface: surfaceSchemeColors.inverseSurface, background: inputBackground, error: dart.nullCheck(effectiveColors.error), errorContainer: effectiveColors.errorContainer, onPrimary: (t10$20 = (t10$19 = onPrimary, t10$19 == null ? seed.useKeyColors && seed.keepPrimary ? null : (t11$6 = seedScheme, t11$6 == null ? null : t11$6.onPrimary) : t10$19), t10$20 == null ? (t11$7 = colorScheme, t11$7 == null ? null : t11$7.onPrimary) : t10$20), onPrimaryContainer: (t10$22 = (t10$21 = onPrimaryContainer, t10$21 == null ? seed.useKeyColors && seed.keepPrimaryContainer ? null : (t11$8 = seedScheme, t11$8 == null ? null : t11$8.onPrimaryContainer) : t10$21), t10$22 == null ? (t11$9 = colorScheme, t11$9 == null ? null : t11$9.onPrimaryContainer) : t10$22), onSecondary: (t10$24 = (t10$23 = onSecondary, t10$23 == null ? seed.useKeyColors && seed.keepSecondary ? null : (t11$10 = seedScheme, t11$10 == null ? null : t11$10.onSecondary) : t10$23), t10$24 == null ? (t11$11 = colorScheme, t11$11 == null ? null : t11$11.onSecondary) : t10$24), onSecondaryContainer: (t10$26 = (t10$25 = onSecondaryContainer, t10$25 == null ? seed.useKeyColors && seed.keepSecondaryContainer ? null : (t11$12 = seedScheme, t11$12 == null ? null : t11$12.onSecondaryContainer) : t10$25), t10$26 == null ? (t11$13 = colorScheme, t11$13 == null ? null : t11$13.onSecondaryContainer) : t10$26), onTertiary: (t10$28 = (t10$27 = onTertiary, t10$27 == null ? seed.useKeyColors && seed.keepTertiary ? null : (t11$14 = seedScheme, t11$14 == null ? null : t11$14.onTertiary) : t10$27), t10$28 == null ? (t11$15 = colorScheme, t11$15 == null ? null : t11$15.onTertiary) : t10$28), onTertiaryContainer: (t10$30 = (t10$29 = onTertiaryContainer, t10$29 == null ? seed.useKeyColors && seed.keepTertiaryContainer ? null : (t11$16 = seedScheme, t11$16 == null ? null : t11$16.onTertiaryContainer) : t10$29), t10$30 == null ? (t11$17 = colorScheme, t11$17 == null ? null : t11$17.onTertiaryContainer) : t10$30), onSurface: (t10$32 = (t10$31 = onSurface, t10$31 == null ? (t11$18 = seedScheme, t11$18 == null ? null : t11$18.onSurface) : t10$31), t10$32 == null ? (t11$19 = colorScheme, t11$19 == null ? null : t11$19.onSurface) : t10$32), onSurfaceVariant: (t10$34 = (t10$33 = seedScheme, t10$33 == null ? null : t10$33.onSurfaceVariant), t10$34 == null ? (t11$20 = colorScheme, t11$20 == null ? null : t11$20.onSurfaceVariant) : t10$34), onInverseSurface: (t10$36 = (t10$35 = seedScheme, t10$35 == null ? null : t10$35.onInverseSurface), t10$36 == null ? (t11$21 = colorScheme, t11$21 == null ? null : t11$21.onInverseSurface) : t10$36), onBackground: (t10$38 = (t10$37 = onBackground, t10$37 == null ? (t11$22 = seedScheme, t11$22 == null ? null : t11$22.onBackground) : t10$37), t10$38 == null ? (t11$23 = colorScheme, t11$23 == null ? null : t11$23.onBackground) : t10$38), onError: (t10$40 = (t10$39 = onError, t10$39 == null ? (t11$24 = seedScheme, t11$24 == null ? null : t11$24.onError) : t10$39), t10$40 == null ? (t11$25 = colorScheme, t11$25 == null ? null : t11$25.onError) : t10$40), onErrorContainer: (t10$42 = (t10$41 = seedScheme, t10$41 == null ? null : t10$41.onError), t10$42 == null ? (t11$26 = colorScheme, t11$26 == null ? null : t11$26.onErrorContainer) : t10$42), primaryAlpha: alphaOnMain.primaryAlpha, primaryContainerAlpha: alphaOnValue.primaryContainerAlpha, secondaryAlpha: alphaOnMain.secondaryAlpha, secondaryContainerAlpha: alphaOnValue.secondaryContainerAlpha, tertiaryAlpha: alphaOnMain.tertiaryAlpha, tertiaryContainerAlpha: alphaOnValue.tertiaryContainerAlpha, surfaceAlpha: alphaOnValue.surfaceAlpha, surfaceVariantAlpha: alphaOnValue.surfaceVariantAlpha, inverseSurfaceAlpha: alphaOnValue.inverseSurfaceAlpha, backgroundAlpha: alphaOnValue.backgroundAlpha, errorAlpha: alphaOnMain.errorAlpha, errorContainerAlpha: alphaOnValue.errorContainerAlpha});
      let effectiveSurfaceColor = lightIsWhite ? flex_extensions['FlexColorExtensions|lighten'](inputSurface, 5) : inputSurface;
      let effectiveSurfaceVariantColor = lightIsWhite ? flex_extensions['FlexColorExtensions|lighten'](surfaceSchemeColors.surfaceVariant, 5) : surfaceSchemeColors.surfaceVariant;
      let effectiveInverseSurfaceColor = lightIsWhite ? flex_extensions['FlexColorExtensions|darken'](surfaceSchemeColors.inverseSurface, 5) : surfaceSchemeColors.inverseSurface;
      let effectiveBackgroundColor = lightIsWhite ? flex_extensions['FlexColorExtensions|lighten'](inputBackground, 5) : inputBackground;
      let effectiveDialogBackground = lightIsWhite ? (t10$44 = (t10$43 = dialogBackground, t10$43 == null ? null : flex_extensions['FlexColorExtensions|lighten'](t10$43, 5)), t10$44 == null ? flex_extensions['FlexColorExtensions|lighten'](surfaceSchemeColors.dialogBackground, 5) : t10$44) : (t10$45 = dialogBackground, t10$45 == null ? surfaceSchemeColors.dialogBackground : t10$45);
      let effectiveColorScheme = (t10$48 = (t10$47 = (t10$46 = seedScheme, t10$46 == null ? null : t10$46.copyWith({surfaceVariant: effectiveSurfaceVariantColor, inverseSurface: effectiveInverseSurfaceColor, surfaceTint: surfaceTint})), t10$47 == null ? (t11$27 = colorScheme, t11$27 == null ? null : t11$27.copyWith({surfaceVariant: effectiveSurfaceVariantColor, onSurfaceVariant: onColors.onSurfaceVariant, inverseSurface: effectiveInverseSurfaceColor, onInverseSurface: onColors.onInverseSurface, surfaceTint: surfaceTint})) : t10$47), t10$48 == null ? new color_scheme.ColorScheme.new({brightness: ui.Brightness.light, primary: effectiveColors.primary, onPrimary: onColors.onPrimary, primaryContainer: effectiveColors.primaryContainer, onPrimaryContainer: onColors.onPrimaryContainer, secondary: effectiveColors.secondary, onSecondary: onColors.onSecondary, secondaryContainer: effectiveColors.secondaryContainer, onSecondaryContainer: onColors.onSecondaryContainer, tertiary: effectiveColors.tertiary, onTertiary: onColors.onTertiary, tertiaryContainer: effectiveColors.tertiaryContainer, onTertiaryContainer: onColors.onTertiaryContainer, error: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3LightError : dart.nullCheck(effectiveColors.error), onError: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3LightOnError : onColors.onError, errorContainer: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3LightErrorContainer : dart.nullCheck(effectiveColors.errorContainer), onErrorContainer: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3LightOnErrorContainer : onColors.onErrorContainer, background: effectiveBackgroundColor, onBackground: onColors.onBackground, surface: effectiveSurfaceColor, onSurface: onColors.onSurface, surfaceVariant: effectiveSurfaceVariantColor, onSurfaceVariant: onColors.onSurfaceVariant, outline: flex_color_scheme.FlexColorScheme._outlineColor(ui.Brightness.light, onColors.onBackground, 30), shadow: colors$.Colors.black, inverseSurface: effectiveInverseSurfaceColor, onInverseSurface: onColors.onInverseSurface, inversePrimary: flex_color_scheme.FlexColorScheme._inversePrimary(ui.Brightness.light, effectiveColors.primary, effectiveSurfaceColor), surfaceTint: (t11$28 = surfaceTint, t11$28 == null ? effectiveColors.primary : t11$28)}) : t10$48);
      let effectiveAppBarStyle = (t10$49 = appBarStyle, t10$49 == null ? useMaterial3 ? flex_color_scheme.FlexAppBarStyle.surface : flex_color_scheme.FlexAppBarStyle.primary : t10$49);
      let effectiveAppBarColor = appBarBackground;
      effectiveAppBarColor == null ? effectiveAppBarColor = useSubThemes && subTheme.appBarBackgroundSchemeColor != null ? flex_sub_themes.FlexSubThemes.schemeColor(dart.nullCheck(subTheme.appBarBackgroundSchemeColor), effectiveColorScheme) : null : null;
      if (effectiveAppBarColor == null) {
        switch (effectiveAppBarStyle) {
          case C[45] || CT.C45:
            {
              effectiveAppBarColor = effectiveColors.primary;
              break;
            }
          case C[46] || CT.C46:
            {
              effectiveAppBarColor = flex_color.FlexColor.materialLightSurface;
              break;
            }
          case C[48] || CT.C48:
            {
              effectiveAppBarColor = effectiveBackgroundColor;
              break;
            }
          case C[47] || CT.C47:
            {
              effectiveAppBarColor = effectiveSurfaceColor;
              break;
            }
          case C[49] || CT.C49:
            {
              effectiveAppBarColor = (t10$50 = effectiveColors.appBarColor, t10$50 == null ? effectiveColors.primary : t10$50);
              break;
            }
        }
      }
      effectiveAppBarColor = effectiveAppBarColor.withOpacity(appBarOpacity);
      return new flex_color_scheme.FlexColorScheme.new({colorScheme: effectiveColorScheme, brightness: ui.Brightness.light, primary: effectiveColors.primary, primaryContainer: effectiveColors.primaryContainer, secondary: effectiveColors.secondary, secondaryContainer: effectiveColors.secondaryContainer, tertiary: effectiveColors.tertiary, tertiaryContainer: effectiveColors.tertiaryContainer, surface: effectiveSurfaceColor, background: effectiveBackgroundColor, scaffoldBackground: (t10$51 = scaffoldBackground, t10$51 == null ? lightIsWhite ? colors$.Colors.white : surfaceSchemeColors.scaffoldBackground : t10$51), dialogBackground: effectiveDialogBackground, appBarBackground: effectiveAppBarColor, error: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3LightError : (t10$52 = effectiveColors.error, t10$52 == null ? flex_color.FlexColor.materialLightError : t10$52), onPrimary: onColors.onPrimary, onPrimaryContainer: onColors.onPrimaryContainer, onSecondary: onColors.onSecondary, onSecondaryContainer: onColors.onSecondaryContainer, onTertiary: onColors.onTertiary, onTertiaryContainer: onColors.onTertiaryContainer, onSurface: onColors.onSurface, onBackground: onColors.onBackground, onError: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3LightOnError : onColors.onError, surfaceTint: surfaceTint, tabBarStyle: tabBarStyle, appBarElevation: appBarElevation, bottomAppBarElevation: effectiveBottomAppBarElevation, tooltipsMatchBackground: tooltipsMatchBackground, transparentStatusBar: transparentStatusBar, visualDensity: visualDensity, textTheme: textTheme, primaryTextTheme: primaryTextTheme, fontFamily: fontFamily, platform: platform, typography: typography, applyElevationOverlayColor: applyElevationOverlayColor, subThemesData: subThemesData, useMaterial3: useMaterial3, extensions: extensions});
    }
    static ['_#light#tearOff'](opts) {
      let colors = opts && 'colors' in opts ? opts.colors : null;
      let scheme = opts && 'scheme' in opts ? opts.scheme : null;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let usedColors = opts && 'usedColors' in opts ? opts.usedColors : 6;
      let surfaceMode = opts && 'surfaceMode' in opts ? opts.surfaceMode : null;
      let blendLevel = opts && 'blendLevel' in opts ? opts.blendLevel : 0;
      let appBarStyle = opts && 'appBarStyle' in opts ? opts.appBarStyle : null;
      let appBarOpacity = opts && 'appBarOpacity' in opts ? opts.appBarOpacity : 1;
      let transparentStatusBar = opts && 'transparentStatusBar' in opts ? opts.transparentStatusBar : true;
      let appBarElevation = opts && 'appBarElevation' in opts ? opts.appBarElevation : 0;
      let bottomAppBarElevation = opts && 'bottomAppBarElevation' in opts ? opts.bottomAppBarElevation : null;
      let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : C[57] || CT.C57;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
      let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
      let appBarBackground = opts && 'appBarBackground' in opts ? opts.appBarBackground : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
      let lightIsWhite = opts && 'lightIsWhite' in opts ? opts.lightIsWhite : false;
      let swapColors = opts && 'swapColors' in opts ? opts.swapColors : false;
      let tooltipsMatchBackground = opts && 'tooltipsMatchBackground' in opts ? opts.tooltipsMatchBackground : false;
      let subThemesData = opts && 'subThemesData' in opts ? opts.subThemesData : null;
      let keyColors = opts && 'keyColors' in opts ? opts.keyColors : null;
      let useMaterial3ErrorColors = opts && 'useMaterial3ErrorColors' in opts ? opts.useMaterial3ErrorColors : false;
      let tones = opts && 'tones' in opts ? opts.tones : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let primaryTextTheme = opts && 'primaryTextTheme' in opts ? opts.primaryTextTheme : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let typography = opts && 'typography' in opts ? opts.typography : null;
      let applyElevationOverlayColor = opts && 'applyElevationOverlayColor' in opts ? opts.applyElevationOverlayColor : true;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let extensions = opts && 'extensions' in opts ? opts.extensions : null;
      return flex_color_scheme.FlexColorScheme.light({colors: colors, scheme: scheme, colorScheme: colorScheme, usedColors: usedColors, surfaceMode: surfaceMode, blendLevel: blendLevel, appBarStyle: appBarStyle, appBarOpacity: appBarOpacity, transparentStatusBar: transparentStatusBar, appBarElevation: appBarElevation, bottomAppBarElevation: bottomAppBarElevation, tabBarStyle: tabBarStyle, primary: primary, primaryContainer: primaryContainer, secondary: secondary, secondaryContainer: secondaryContainer, tertiary: tertiary, tertiaryContainer: tertiaryContainer, error: error, surface: surface, background: background, scaffoldBackground: scaffoldBackground, dialogBackground: dialogBackground, appBarBackground: appBarBackground, onPrimary: onPrimary, onPrimaryContainer: onPrimaryContainer, onSecondary: onSecondary, onSecondaryContainer: onSecondaryContainer, onTertiary: onTertiary, onTertiaryContainer: onTertiaryContainer, onSurface: onSurface, onBackground: onBackground, onError: onError, surfaceTint: surfaceTint, lightIsWhite: lightIsWhite, swapColors: swapColors, tooltipsMatchBackground: tooltipsMatchBackground, subThemesData: subThemesData, keyColors: keyColors, useMaterial3ErrorColors: useMaterial3ErrorColors, tones: tones, visualDensity: visualDensity, textTheme: textTheme, primaryTextTheme: primaryTextTheme, fontFamily: fontFamily, platform: platform, typography: typography, applyElevationOverlayColor: applyElevationOverlayColor, useMaterial3: useMaterial3, extensions: extensions});
    }
    static dark(opts) {
      let t10, t10$, t10$0, t10$1, t11, t10$2, t11$, t10$3, t11$0, t10$4, t11$1, t10$5, t11$2, t10$6, t11$3, t10$7, t11$4, t10$8, t10$9, t10$10, t11$5, t10$11, t11$6, t10$12, t11$7, t10$13, t11$8, t10$14, t11$9, t10$15, t11$10, t10$16, t10$17, t11$11, t10$18, t10$19, t10$20, t10$21, t10$22, t10$23, t10$24, t10$25, t11$12, t10$26, t11$13, t10$27, t11$14, t10$28, t11$15, t10$29, t11$16, t10$30, t11$17, t10$31, t11$18, t10$32, t11$19, t10$33, t11$20, t10$34, t11$21, t10$35, t11$22, t10$36, t11$23, t10$37, t11$24, t10$38, t11$25, t10$39, t10$40, t11$26, t10$41, t10$42, t11$27, t10$43, t11$28, t10$44, t11$29, t10$45, t11$30, t10$46, t11$31, t10$47, t10$48, t11$32, t10$49, t10$50, t10$51, t10$52, t10$53, t11$33, t10$54, t11$34, t11$35, t10$55, t10$56, t10$57, t10$58, t10$59;
      let colors = opts && 'colors' in opts ? opts.colors : null;
      let scheme = opts && 'scheme' in opts ? opts.scheme : null;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let usedColors = opts && 'usedColors' in opts ? opts.usedColors : 6;
      let surfaceMode = opts && 'surfaceMode' in opts ? opts.surfaceMode : null;
      let blendLevel = opts && 'blendLevel' in opts ? opts.blendLevel : 0;
      let appBarStyle = opts && 'appBarStyle' in opts ? opts.appBarStyle : null;
      let appBarOpacity = opts && 'appBarOpacity' in opts ? opts.appBarOpacity : 1;
      let transparentStatusBar = opts && 'transparentStatusBar' in opts ? opts.transparentStatusBar : true;
      let appBarElevation = opts && 'appBarElevation' in opts ? opts.appBarElevation : 0;
      let bottomAppBarElevation = opts && 'bottomAppBarElevation' in opts ? opts.bottomAppBarElevation : null;
      let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : C[57] || CT.C57;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
      let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
      let appBarBackground = opts && 'appBarBackground' in opts ? opts.appBarBackground : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
      let darkIsTrueBlack = opts && 'darkIsTrueBlack' in opts ? opts.darkIsTrueBlack : false;
      let swapColors = opts && 'swapColors' in opts ? opts.swapColors : false;
      let tooltipsMatchBackground = opts && 'tooltipsMatchBackground' in opts ? opts.tooltipsMatchBackground : false;
      let subThemesData = opts && 'subThemesData' in opts ? opts.subThemesData : null;
      let keyColors = opts && 'keyColors' in opts ? opts.keyColors : null;
      let useMaterial3ErrorColors = opts && 'useMaterial3ErrorColors' in opts ? opts.useMaterial3ErrorColors : false;
      let tones = opts && 'tones' in opts ? opts.tones : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let primaryTextTheme = opts && 'primaryTextTheme' in opts ? opts.primaryTextTheme : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let typography = opts && 'typography' in opts ? opts.typography : null;
      let applyElevationOverlayColor = opts && 'applyElevationOverlayColor' in opts ? opts.applyElevationOverlayColor : true;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let extensions = opts && 'extensions' in opts ? opts.extensions : null;
      if (!(usedColors >= 1 && usedColors <= 6)) dart.assertFailed("usedColors must be 1 to 6.", I[3], 3685, 12, "usedColors >= 1 && usedColors <= 6");
      if (!(appBarOpacity >= 0 && appBarOpacity <= 1)) dart.assertFailed("appBarOpacity must be 0 to 1", I[3], 3686, 12, "appBarOpacity >= 0 && appBarOpacity <= 1");
      if (!(blendLevel >= 0 && blendLevel <= 40)) dart.assertFailed("Only blend levels from 0 to 40 are allowed. Very high alpha values may " + "not produce results that are visually very appealing or useful.", I[3], 3689, 7, "blendLevel >= 0 && blendLevel <= 40");
      if (!(appBarElevation >= 0.0)) dart.assertFailed("AppBar elevation must be >= 0.", I[3], 3693, 12, "appBarElevation >= 0.0");
      if (!(bottomAppBarElevation == null || dart.notNull(bottomAppBarElevation) >= 0.0)) dart.assertFailed("Bottom AppBar elevation must be null or must be >= 0.", I[3], 3694, 12, "bottomAppBarElevation == null || bottomAppBarElevation >= 0.0");
      let effectiveBottomAppBarElevation = (t10 = bottomAppBarElevation, t10 == null ? appBarElevation : t10);
      let seed = (t10$ = keyColors, t10$ == null ? C[61] || CT.C61 : t10$);
      let flexScheme = (t10$0 = scheme, t10$0 == null ? flex_scheme.FlexScheme.material : t10$0);
      let flexColors = (t10$1 = colors, t10$1 == null ? dart.nullCheck(flex_color.FlexColor.schemesWithCustom[$_get](flexScheme)).dark : t10$1);
      let withPassedColors = flexColors.copyWith({primary: (t10$2 = primary, t10$2 == null ? (t11 = colorScheme, t11 == null ? null : t11.primary) : t10$2), primaryContainer: (t10$3 = primaryContainer, t10$3 == null ? (t11$ = colorScheme, t11$ == null ? null : t11$.primaryContainer) : t10$3), secondary: (t10$4 = secondary, t10$4 == null ? (t11$0 = colorScheme, t11$0 == null ? null : t11$0.secondary) : t10$4), secondaryContainer: (t10$5 = secondaryContainer, t10$5 == null ? (t11$1 = colorScheme, t11$1 == null ? null : t11$1.secondaryContainer) : t10$5), tertiary: (t10$6 = tertiary, t10$6 == null ? (t11$2 = colorScheme, t11$2 == null ? null : t11$2.tertiary) : t10$6), tertiaryContainer: (t10$7 = tertiaryContainer, t10$7 == null ? (t11$3 = colorScheme, t11$3 == null ? null : t11$3.tertiaryContainer) : t10$7), error: (t10$8 = error, t10$8 == null ? (t11$4 = colorScheme, t11$4 == null ? null : t11$4.error) : t10$8), errorContainer: (t10$9 = colorScheme, t10$9 == null ? null : t10$9.errorContainer)});
      let effectiveColors = flex_scheme_color.FlexSchemeColor.effective(withPassedColors, usedColors, {swapColors: swapColors, brightness: ui.Brightness.dark});
      let seedScheme = null;
      if (seed.useKeyColors) {
        let flexKeyColors = (t10$10 = colors, t10$10 == null ? dart.nullCheck(flex_color.FlexColor.schemesWithCustom[$_get](flexScheme)).light : t10$10);
        let withPassedColors = flexKeyColors.copyWith({primary: (t10$11 = primary, t10$11 == null ? (t11$5 = colorScheme, t11$5 == null ? null : t11$5.primary) : t10$11), primaryContainer: (t10$12 = primaryContainer, t10$12 == null ? (t11$6 = colorScheme, t11$6 == null ? null : t11$6.primaryContainer) : t10$12), secondary: (t10$13 = secondary, t10$13 == null ? (t11$7 = colorScheme, t11$7 == null ? null : t11$7.secondary) : t10$13), secondaryContainer: (t10$14 = secondaryContainer, t10$14 == null ? (t11$8 = colorScheme, t11$8 == null ? null : t11$8.secondaryContainer) : t10$14), tertiary: (t10$15 = tertiary, t10$15 == null ? (t11$9 = colorScheme, t11$9 == null ? null : t11$9.tertiary) : t10$15), tertiaryContainer: (t10$16 = tertiaryContainer, t10$16 == null ? (t11$10 = colorScheme, t11$10 == null ? null : t11$10.tertiaryContainer) : t10$16)});
        let effectiveKeyColors = flex_scheme_color.FlexSchemeColor.effective(withPassedColors, usedColors, {swapColors: swapColors, brightness: ui.Brightness.dark});
        seedScheme = flex_seed_scheme['SeedColorScheme|fromSeeds']({brightness: ui.Brightness.dark, primaryKey: effectiveKeyColors.primary, secondaryKey: seed.useSecondary ? effectiveKeyColors.secondary : null, tertiaryKey: seed.useTertiary ? effectiveKeyColors.tertiary : null, tones: (t10$17 = tones, t10$17 == null ? flex_tones.FlexTones.material(ui.Brightness.dark) : t10$17), surfaceTint: surfaceTint});
        effectiveColors = new flex_scheme_color.FlexSchemeColor.new({primary: seed.keepPrimary ? effectiveColors.primary : seedScheme.primary, primaryContainer: seed.keepPrimaryContainer ? effectiveColors.primaryContainer : seedScheme.primaryContainer, secondary: seed.keepSecondary ? effectiveColors.secondary : seedScheme.secondary, secondaryContainer: seed.keepSecondaryContainer ? effectiveColors.secondaryContainer : seedScheme.secondaryContainer, tertiary: seed.keepTertiary ? effectiveColors.tertiary : seedScheme.tertiary, tertiaryContainer: seed.keepTertiaryContainer ? effectiveColors.tertiaryContainer : seedScheme.tertiaryContainer, appBarColor: effectiveColors.appBarColor, error: seedScheme.error, errorContainer: seedScheme.errorContainer});
      }
      let blendColor = (t10$19 = (t10$18 = surfaceTint, t10$18 == null ? (t11$11 = colorScheme, t11$11 == null ? null : t11$11.surfaceTint) : t10$18), t10$19 == null ? effectiveColors.primary : t10$19);
      let surfaceSchemeColors = flex_scheme_surface_colors.FlexSchemeSurfaceColors.blend({brightness: ui.Brightness.dark, surfaceMode: (t10$20 = surfaceMode, t10$20 == null ? flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfaces : t10$20), blendLevel: blendLevel, surfaceVariantBlendDivide: seed.useKeyColors ? 2 : 1, schemeColors: effectiveColors, blendColors: new flex_scheme_surface_colors.FlexSchemeSurfaceColors.new({surface: blendColor, surfaceVariant: blendColor, inverseSurface: blendColor, dialogBackground: blendColor, background: blendColor, scaffoldBackground: blendColor}), surfaceColors: seed.useKeyColors ? new flex_scheme_surface_colors.FlexSchemeSurfaceColors.new({surface: dart.nullCheck(seedScheme).surface, surfaceVariant: seedScheme.surfaceVariant, inverseSurface: seedScheme.inverseSurface, dialogBackground: seedScheme.surface, background: seedScheme.background, scaffoldBackground: seedScheme.background}) : null});
      let useSubThemes = subThemesData != null;
      let subTheme = (t10$21 = subThemesData, t10$21 == null ? C[62] || CT.C62 : t10$21);
      let onBlendLevel = useSubThemes ? subTheme.blendOnLevel : 0;
      if (!(onBlendLevel >= 0 && onBlendLevel <= 40)) dart.assertFailed("Only onBlendLevel:s from 0 to 40 " + "are allowed. Very high alpha blend levels may not produce results " + "that are visually very appealing or useful.", I[3], 3839, 9, "onBlendLevel >= 0 && onBlendLevel <= 40");
      if (onBlendLevel < 0 || onBlendLevel > 40) onBlendLevel = 0;
      let alphaOnValue = useSubThemes ? flex_alpha_values.FlexAlphaValues.getAlphas((t10$22 = surfaceMode, t10$22 == null ? flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfaces : t10$22), onBlendLevel) : C[63] || CT.C63;
      let alphaOnMain = useSubThemes && subTheme.blendOnColors ? flex_alpha_values.FlexAlphaValues.getAlphas((t10$23 = surfaceMode, t10$23 == null ? flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfaces : t10$23), onBlendLevel) : C[63] || CT.C63;
      let inputSurface = (t10$24 = surface, t10$24 == null ? surfaceSchemeColors.surface : t10$24);
      let inputBackground = (t10$25 = background, t10$25 == null ? surfaceSchemeColors.background : t10$25);
      let onColors = flex_scheme_on_colors.FlexSchemeOnColors.from({primary: effectiveColors.primary, primaryContainer: effectiveColors.primaryContainer, secondary: effectiveColors.secondary, secondaryContainer: effectiveColors.secondaryContainer, tertiary: effectiveColors.tertiary, tertiaryContainer: effectiveColors.tertiaryContainer, surface: inputSurface, surfaceVariant: surfaceSchemeColors.surfaceVariant, inverseSurface: surfaceSchemeColors.inverseSurface, background: inputBackground, error: dart.nullCheck(effectiveColors.error), errorContainer: effectiveColors.errorContainer, onPrimary: (t10$27 = (t10$26 = onPrimary, t10$26 == null ? seed.useKeyColors && seed.keepPrimary ? null : (t11$12 = seedScheme, t11$12 == null ? null : t11$12.onPrimary) : t10$26), t10$27 == null ? (t11$13 = colorScheme, t11$13 == null ? null : t11$13.onPrimary) : t10$27), onPrimaryContainer: (t10$29 = (t10$28 = onPrimaryContainer, t10$28 == null ? seed.useKeyColors && seed.keepPrimaryContainer ? null : (t11$14 = seedScheme, t11$14 == null ? null : t11$14.onPrimaryContainer) : t10$28), t10$29 == null ? (t11$15 = colorScheme, t11$15 == null ? null : t11$15.onPrimaryContainer) : t10$29), onSecondary: (t10$31 = (t10$30 = onSecondary, t10$30 == null ? seed.useKeyColors && seed.keepSecondary ? null : (t11$16 = seedScheme, t11$16 == null ? null : t11$16.onSecondary) : t10$30), t10$31 == null ? (t11$17 = colorScheme, t11$17 == null ? null : t11$17.onSecondary) : t10$31), onSecondaryContainer: (t10$33 = (t10$32 = onSecondaryContainer, t10$32 == null ? seed.useKeyColors && seed.keepSecondaryContainer ? null : (t11$18 = seedScheme, t11$18 == null ? null : t11$18.onSecondaryContainer) : t10$32), t10$33 == null ? (t11$19 = colorScheme, t11$19 == null ? null : t11$19.onSecondaryContainer) : t10$33), onTertiary: (t10$35 = (t10$34 = onTertiary, t10$34 == null ? seed.useKeyColors && seed.keepTertiary ? null : (t11$20 = seedScheme, t11$20 == null ? null : t11$20.onTertiary) : t10$34), t10$35 == null ? (t11$21 = colorScheme, t11$21 == null ? null : t11$21.onTertiary) : t10$35), onTertiaryContainer: (t10$37 = (t10$36 = onTertiaryContainer, t10$36 == null ? seed.useKeyColors && seed.keepTertiaryContainer ? null : (t11$22 = seedScheme, t11$22 == null ? null : t11$22.onTertiaryContainer) : t10$36), t10$37 == null ? (t11$23 = colorScheme, t11$23 == null ? null : t11$23.onTertiaryContainer) : t10$37), onSurface: (t10$39 = (t10$38 = onSurface, t10$38 == null ? (t11$24 = seedScheme, t11$24 == null ? null : t11$24.onSurface) : t10$38), t10$39 == null ? (t11$25 = colorScheme, t11$25 == null ? null : t11$25.onSurface) : t10$39), onSurfaceVariant: (t10$41 = (t10$40 = seedScheme, t10$40 == null ? null : t10$40.onSurfaceVariant), t10$41 == null ? (t11$26 = colorScheme, t11$26 == null ? null : t11$26.onSurfaceVariant) : t10$41), onInverseSurface: (t10$43 = (t10$42 = seedScheme, t10$42 == null ? null : t10$42.onInverseSurface), t10$43 == null ? (t11$27 = colorScheme, t11$27 == null ? null : t11$27.onInverseSurface) : t10$43), onBackground: (t10$45 = (t10$44 = onBackground, t10$44 == null ? (t11$28 = seedScheme, t11$28 == null ? null : t11$28.onBackground) : t10$44), t10$45 == null ? (t11$29 = colorScheme, t11$29 == null ? null : t11$29.onBackground) : t10$45), onError: (t10$47 = (t10$46 = onError, t10$46 == null ? (t11$30 = seedScheme, t11$30 == null ? null : t11$30.onError) : t10$46), t10$47 == null ? (t11$31 = colorScheme, t11$31 == null ? null : t11$31.onError) : t10$47), onErrorContainer: (t10$49 = (t10$48 = seedScheme, t10$48 == null ? null : t10$48.onError), t10$49 == null ? (t11$32 = colorScheme, t11$32 == null ? null : t11$32.onErrorContainer) : t10$49), primaryAlpha: alphaOnMain.primaryAlpha, primaryContainerAlpha: alphaOnValue.primaryContainerAlpha, secondaryAlpha: alphaOnMain.secondaryAlpha, secondaryContainerAlpha: alphaOnValue.secondaryContainerAlpha, tertiaryAlpha: alphaOnMain.tertiaryAlpha, tertiaryContainerAlpha: alphaOnValue.tertiaryContainerAlpha, surfaceAlpha: alphaOnValue.surfaceAlpha, surfaceVariantAlpha: alphaOnValue.surfaceVariantAlpha, inverseSurfaceAlpha: alphaOnValue.inverseSurfaceAlpha, backgroundAlpha: alphaOnValue.backgroundAlpha, errorAlpha: alphaOnMain.errorAlpha, errorContainerAlpha: alphaOnValue.errorContainerAlpha});
      let effectiveSurfaceColor = darkIsTrueBlack ? flex_extensions['FlexColorExtensions|darken'](inputSurface, 5) : inputSurface;
      let effectiveSurfaceVariantColor = darkIsTrueBlack ? flex_extensions['FlexColorExtensions|darken'](surfaceSchemeColors.surfaceVariant, 5) : surfaceSchemeColors.surfaceVariant;
      let effectiveInverseSurfaceColor = darkIsTrueBlack ? flex_extensions['FlexColorExtensions|lighten'](surfaceSchemeColors.inverseSurface, 5) : surfaceSchemeColors.inverseSurface;
      let effectiveBackgroundColor = darkIsTrueBlack ? flex_extensions['FlexColorExtensions|darken'](inputBackground, 5) : inputBackground;
      let effectiveDialogBackground = darkIsTrueBlack ? (t10$51 = (t10$50 = dialogBackground, t10$50 == null ? null : flex_extensions['FlexColorExtensions|darken'](t10$50, 5)), t10$51 == null ? flex_extensions['FlexColorExtensions|darken'](surfaceSchemeColors.dialogBackground, 5) : t10$51) : (t10$52 = dialogBackground, t10$52 == null ? surfaceSchemeColors.dialogBackground : t10$52);
      let effectiveColorScheme = (t10$55 = (t10$54 = (t10$53 = seedScheme, t10$53 == null ? null : t10$53.copyWith({surfaceVariant: effectiveSurfaceVariantColor, inverseSurface: effectiveInverseSurfaceColor, surfaceTint: surfaceTint})), t10$54 == null ? (t11$33 = colorScheme, t11$33 == null ? null : t11$33.copyWith({surfaceVariant: effectiveSurfaceVariantColor, onSurfaceVariant: onColors.onSurfaceVariant, inverseSurface: effectiveInverseSurfaceColor, onInverseSurface: onColors.onInverseSurface, surfaceTint: surfaceTint})) : t10$54), t10$55 == null ? new color_scheme.ColorScheme.new({brightness: ui.Brightness.dark, primary: effectiveColors.primary, onPrimary: onColors.onPrimary, primaryContainer: effectiveColors.primaryContainer, onPrimaryContainer: onColors.onPrimaryContainer, secondary: effectiveColors.secondary, onSecondary: onColors.onSecondary, secondaryContainer: effectiveColors.secondaryContainer, onSecondaryContainer: onColors.onSecondaryContainer, tertiary: effectiveColors.tertiary, onTertiary: onColors.onTertiary, tertiaryContainer: effectiveColors.tertiaryContainer, onTertiaryContainer: onColors.onTertiaryContainer, error: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3DarkError : (t11$34 = effectiveColors.error, t11$34 == null ? flex_color.FlexColor.materialDarkError : t11$34), onError: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3DarkOnError : onColors.onError, errorContainer: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3DarkErrorContainer : dart.nullCheck(effectiveColors.errorContainer), onErrorContainer: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3DarkOnErrorContainer : onColors.onErrorContainer, background: effectiveBackgroundColor, onBackground: onColors.onBackground, surface: effectiveSurfaceColor, onSurface: onColors.onSurface, surfaceVariant: effectiveSurfaceVariantColor, onSurfaceVariant: onColors.onSurfaceVariant, outline: flex_color_scheme.FlexColorScheme._outlineColor(ui.Brightness.dark, onColors.onBackground, 30), shadow: colors$.Colors.black, inverseSurface: effectiveInverseSurfaceColor, onInverseSurface: onColors.onInverseSurface, inversePrimary: flex_color_scheme.FlexColorScheme._inversePrimary(ui.Brightness.dark, effectiveColors.primary, effectiveSurfaceColor), surfaceTint: (t11$35 = surfaceTint, t11$35 == null ? effectiveColors.primary : t11$35)}) : t10$55);
      let effectiveAppBarStyle = (t10$56 = appBarStyle, t10$56 == null ? useMaterial3 ? flex_color_scheme.FlexAppBarStyle.surface : flex_color_scheme.FlexAppBarStyle.material : t10$56);
      let effectiveAppBarColor = appBarBackground;
      effectiveAppBarColor == null ? effectiveAppBarColor = useSubThemes && subTheme.appBarBackgroundSchemeColor != null ? flex_sub_themes.FlexSubThemes.schemeColor(dart.nullCheck(subTheme.appBarBackgroundSchemeColor), effectiveColorScheme) : null : null;
      if (effectiveAppBarColor == null) {
        switch (effectiveAppBarStyle) {
          case C[45] || CT.C45:
            {
              effectiveAppBarColor = effectiveColors.primary;
              break;
            }
          case C[46] || CT.C46:
            {
              effectiveAppBarColor = flex_color.FlexColor.materialDarkSurface;
              break;
            }
          case C[48] || CT.C48:
            {
              effectiveAppBarColor = effectiveBackgroundColor;
              break;
            }
          case C[47] || CT.C47:
            {
              effectiveAppBarColor = effectiveSurfaceColor;
              break;
            }
          case C[49] || CT.C49:
            {
              effectiveAppBarColor = (t10$57 = effectiveColors.appBarColor, t10$57 == null ? effectiveColors.primary : t10$57);
              break;
            }
        }
      }
      effectiveAppBarColor = effectiveAppBarColor.withOpacity(appBarOpacity);
      return new flex_color_scheme.FlexColorScheme.new({colorScheme: effectiveColorScheme, brightness: ui.Brightness.dark, primary: effectiveColors.primary, primaryContainer: effectiveColors.primaryContainer, secondary: effectiveColors.secondary, secondaryContainer: effectiveColors.secondaryContainer, tertiary: effectiveColors.tertiary, tertiaryContainer: effectiveColors.tertiaryContainer, surface: effectiveSurfaceColor, background: effectiveBackgroundColor, scaffoldBackground: (t10$58 = scaffoldBackground, t10$58 == null ? darkIsTrueBlack ? colors$.Colors.black : surfaceSchemeColors.scaffoldBackground : t10$58), dialogBackground: effectiveDialogBackground, appBarBackground: effectiveAppBarColor, error: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3DarkError : (t10$59 = effectiveColors.error, t10$59 == null ? flex_color.FlexColor.materialDarkError : t10$59), onPrimary: onColors.onPrimary, onPrimaryContainer: onColors.onPrimaryContainer, onSecondary: onColors.onSecondary, onSecondaryContainer: onColors.onSecondaryContainer, onTertiary: onColors.onTertiary, onTertiaryContainer: onColors.onTertiaryContainer, onSurface: onColors.onSurface, onBackground: onColors.onBackground, onError: useMaterial3ErrorColors && !seed.useKeyColors ? flex_color.FlexColor.material3DarkOnError : onColors.onError, surfaceTint: surfaceTint, tabBarStyle: tabBarStyle, appBarElevation: appBarElevation, bottomAppBarElevation: effectiveBottomAppBarElevation, tooltipsMatchBackground: tooltipsMatchBackground, transparentStatusBar: transparentStatusBar, visualDensity: visualDensity, textTheme: textTheme, primaryTextTheme: primaryTextTheme, fontFamily: fontFamily, platform: platform, typography: typography, applyElevationOverlayColor: applyElevationOverlayColor, subThemesData: subThemesData, useMaterial3: useMaterial3, extensions: extensions});
    }
    static ['_#dark#tearOff'](opts) {
      let colors = opts && 'colors' in opts ? opts.colors : null;
      let scheme = opts && 'scheme' in opts ? opts.scheme : null;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let usedColors = opts && 'usedColors' in opts ? opts.usedColors : 6;
      let surfaceMode = opts && 'surfaceMode' in opts ? opts.surfaceMode : null;
      let blendLevel = opts && 'blendLevel' in opts ? opts.blendLevel : 0;
      let appBarStyle = opts && 'appBarStyle' in opts ? opts.appBarStyle : null;
      let appBarOpacity = opts && 'appBarOpacity' in opts ? opts.appBarOpacity : 1;
      let transparentStatusBar = opts && 'transparentStatusBar' in opts ? opts.transparentStatusBar : true;
      let appBarElevation = opts && 'appBarElevation' in opts ? opts.appBarElevation : 0;
      let bottomAppBarElevation = opts && 'bottomAppBarElevation' in opts ? opts.bottomAppBarElevation : null;
      let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : C[57] || CT.C57;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
      let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
      let appBarBackground = opts && 'appBarBackground' in opts ? opts.appBarBackground : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
      let darkIsTrueBlack = opts && 'darkIsTrueBlack' in opts ? opts.darkIsTrueBlack : false;
      let swapColors = opts && 'swapColors' in opts ? opts.swapColors : false;
      let tooltipsMatchBackground = opts && 'tooltipsMatchBackground' in opts ? opts.tooltipsMatchBackground : false;
      let subThemesData = opts && 'subThemesData' in opts ? opts.subThemesData : null;
      let keyColors = opts && 'keyColors' in opts ? opts.keyColors : null;
      let useMaterial3ErrorColors = opts && 'useMaterial3ErrorColors' in opts ? opts.useMaterial3ErrorColors : false;
      let tones = opts && 'tones' in opts ? opts.tones : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let primaryTextTheme = opts && 'primaryTextTheme' in opts ? opts.primaryTextTheme : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let typography = opts && 'typography' in opts ? opts.typography : null;
      let applyElevationOverlayColor = opts && 'applyElevationOverlayColor' in opts ? opts.applyElevationOverlayColor : true;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
      let extensions = opts && 'extensions' in opts ? opts.extensions : null;
      return flex_color_scheme.FlexColorScheme.dark({colors: colors, scheme: scheme, colorScheme: colorScheme, usedColors: usedColors, surfaceMode: surfaceMode, blendLevel: blendLevel, appBarStyle: appBarStyle, appBarOpacity: appBarOpacity, transparentStatusBar: transparentStatusBar, appBarElevation: appBarElevation, bottomAppBarElevation: bottomAppBarElevation, tabBarStyle: tabBarStyle, primary: primary, primaryContainer: primaryContainer, secondary: secondary, secondaryContainer: secondaryContainer, tertiary: tertiary, tertiaryContainer: tertiaryContainer, error: error, surface: surface, background: background, scaffoldBackground: scaffoldBackground, dialogBackground: dialogBackground, appBarBackground: appBarBackground, onPrimary: onPrimary, onPrimaryContainer: onPrimaryContainer, onSecondary: onSecondary, onSecondaryContainer: onSecondaryContainer, onTertiary: onTertiary, onTertiaryContainer: onTertiaryContainer, onSurface: onSurface, onBackground: onBackground, onError: onError, surfaceTint: surfaceTint, darkIsTrueBlack: darkIsTrueBlack, swapColors: swapColors, tooltipsMatchBackground: tooltipsMatchBackground, subThemesData: subThemesData, keyColors: keyColors, useMaterial3ErrorColors: useMaterial3ErrorColors, tones: tones, visualDensity: visualDensity, textTheme: textTheme, primaryTextTheme: primaryTextTheme, fontFamily: fontFamily, platform: platform, typography: typography, applyElevationOverlayColor: applyElevationOverlayColor, useMaterial3: useMaterial3, extensions: extensions});
    }
    static get comfortablePlatformDensity() {
      switch (platform.defaultTargetPlatform) {
        case C[64] || CT.C64:
        case C[65] || CT.C65:
        case C[66] || CT.C66:
          {
            break;
          }
        case C[67] || CT.C67:
        case C[68] || CT.C68:
        case C[69] || CT.C69:
          {
            return theme_data.VisualDensity.comfortable;
          }
      }
      return theme_data.VisualDensity.standard;
    }
    static themedSystemNavigationBar(context, opts) {
      let t10, t13;
      let useDivider = opts && 'useDivider' in opts ? opts.useDivider : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let noAppBar = opts && 'noAppBar' in opts ? opts.noAppBar : false;
      let invertStatusIcons = opts && 'invertStatusIcons' in opts ? opts.invertStatusIcons : false;
      let systemNavBarStyle = opts && 'systemNavBarStyle' in opts ? opts.systemNavBarStyle : C[53] || CT.C53;
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let nullContextBrightness = opts && 'nullContextBrightness' in opts ? opts.nullContextBrightness : C[70] || CT.C70;
      let usedOpacity = opacity;
      if (usedOpacity < 0) usedOpacity = 0.0;
      if (usedOpacity > 1) usedOpacity = 1.0;
      if (systemNavBarStyle === flex_color_scheme.FlexSystemNavBarStyle.transparent) {
        usedOpacity = 0.0;
      }
      if (usedOpacity < 1) {
        system_chrome.SystemChrome.setEnabledSystemUIMode(system_chrome.SystemUiMode.edgeToEdge);
      }
      let isDark = context != null ? theme$.Theme.of(context).brightness === ui.Brightness.dark : nullContextBrightness === ui.Brightness.dark;
      let flexBackground = context != null ? systemNavBarStyle === flex_color_scheme.FlexSystemNavBarStyle.system ? isDark ? colors$.Colors.black : colors$.Colors.white : systemNavBarStyle === flex_color_scheme.FlexSystemNavBarStyle.background ? theme$.Theme.of(context).colorScheme.background : systemNavBarStyle === flex_color_scheme.FlexSystemNavBarStyle.surface ? theme$.Theme.of(context).colorScheme.surface : systemNavBarStyle === flex_color_scheme.FlexSystemNavBarStyle.scaffoldBackground ? theme$.Theme.of(context).scaffoldBackgroundColor : theme$.Theme.of(context).scaffoldBackgroundColor : isDark ? colors$.Colors.black : colors$.Colors.white;
      let background = (t10 = systemNavigationBarColor, t10 == null ? flexBackground : t10);
      let dividerColor = null;
      let dividerOpacity = usedOpacity < 1 ? 0.5 : 1.0;
      if (useDivider == null || !dart.test(useDivider)) {
        dividerColor = colors$.Colors.transparent;
      } else {
        if (systemNavigationBarDividerColor == null) {
          dividerColor = isDark ? (C[71] || CT.C71).withOpacity(dividerOpacity) : (C[72] || CT.C72).withOpacity(dividerOpacity);
        } else {
          dividerColor = systemNavigationBarDividerColor.withOpacity(dividerOpacity);
        }
      }
      let appBarColor = null;
      function appBarColor$35get() {
        let t11;
        t11 = appBarColor;
        return t11 == null ? dart.throw(new _internal.LateError.localNI("appBarColor")) : t11;
      }
      dart.fn(appBarColor$35get, T.VoidToColor());
      function appBarColor$35set(appBarColor$35param) {
        return appBarColor = appBarColor$35param;
      }
      dart.fn(appBarColor$35set, T.ColorTodynamic());
      if (context == null) {
        appBarColor$35set(background);
      } else {
        let theme = theme$.Theme.of(context);
        let colorScheme = theme.colorScheme;
        let appBarTheme = app_bar_theme.AppBarTheme.of(context);
        appBarColor$35set((t13 = appBarTheme.backgroundColor, t13 == null ? colorScheme.brightness === ui.Brightness.dark ? colorScheme.surface : colorScheme.primary : t13));
      }
      let appBarBrightness = theme_data.ThemeData.estimateBrightnessForColor(appBarColor$35get());
      let statusBarColor = noAppBar ? colors$.Colors.transparent : null;
      let statusBarBrightness = noAppBar ? isDark ? ui.Brightness.dark : ui.Brightness.light : null;
      let statusBarIconBrightness = noAppBar ? invertStatusIcons ? isDark ? ui.Brightness.dark : ui.Brightness.light : isDark ? ui.Brightness.light : ui.Brightness.dark : invertStatusIcons ? appBarBrightness : null;
      let sysNavigationBarColor = background.withOpacity(usedOpacity);
      let sysNavigationBarDividerColor = invertStatusIcons ? colors$.Colors.transparent : dividerColor;
      let systemNavigationBarIconBrightness = invertStatusIcons ? isDark ? ui.Brightness.dark : ui.Brightness.light : isDark ? ui.Brightness.light : ui.Brightness.dark;
      new system_chrome.SystemUiOverlayStyle.new({systemStatusBarContrastEnforced: false, statusBarColor: statusBarColor, statusBarBrightness: statusBarBrightness, statusBarIconBrightness: statusBarIconBrightness, systemNavigationBarContrastEnforced: false, systemNavigationBarColor: sysNavigationBarColor, systemNavigationBarDividerColor: sysNavigationBarDividerColor, systemNavigationBarIconBrightness: systemNavigationBarIconBrightness});
      return new system_chrome.SystemUiOverlayStyle.new({systemStatusBarContrastEnforced: false, statusBarColor: statusBarColor, statusBarBrightness: statusBarBrightness, statusBarIconBrightness: statusBarIconBrightness, systemNavigationBarContrastEnforced: false, systemNavigationBarColor: sysNavigationBarColor, systemNavigationBarIconBrightness: systemNavigationBarIconBrightness});
    }
    static createPrimarySwatch(color) {
      let t13;
      let usedColor = (t13 = color, t13 == null ? flex_color.FlexColor.materialLightPrimary : t13);
      let strengths = C[73] || CT.C73;
      let swatch = new (T.IdentityMapOfint$Color()).new();
      let r = usedColor.red;
      let g = usedColor.green;
      let b = usedColor.blue;
      for (let strength of strengths) {
        let ds = 0.5 - strength;
        swatch[$_set]((strength * 1000)[$round](), new ui.Color.fromRGBO(r + ((ds < 0 ? r : 255 - r) * ds)[$round](), g + ((ds < 0 ? g : 255 - g) * ds)[$round](), b + ((ds < 0 ? b : 255 - b) * ds)[$round](), 1.0));
      }
      swatch[$_set](50, flex_extensions['FlexColorExtensions|lighten'](dart.nullCheck(swatch[$_get](50)), 18));
      swatch[$_set](100, flex_extensions['FlexColorExtensions|lighten'](dart.nullCheck(swatch[$_get](100)), 16));
      swatch[$_set](200, flex_extensions['FlexColorExtensions|lighten'](dart.nullCheck(swatch[$_get](200)), 14));
      swatch[$_set](300, flex_extensions['FlexColorExtensions|lighten'](dart.nullCheck(swatch[$_get](300)), 10));
      swatch[$_set](400, flex_extensions['FlexColorExtensions|lighten'](dart.nullCheck(swatch[$_get](400)), 6));
      swatch[$_set](700, flex_extensions['FlexColorExtensions|darken'](dart.nullCheck(swatch[$_get](700)), 2));
      swatch[$_set](800, flex_extensions['FlexColorExtensions|darken'](dart.nullCheck(swatch[$_get](800)), 3));
      swatch[$_set](900, flex_extensions['FlexColorExtensions|darken'](dart.nullCheck(swatch[$_get](900)), 4));
      return new colors$.MaterialColor.new(usedColor.value, swatch);
    }
    get toTheme() {
      let t13, t13$, t13$0, t13$1, t13$2, t13$3, t13$4, t13$5, t13$6, t13$7, t13$8, t13$9, t13$10, t13$11, t13$12, t13$13, t13$14, t13$15, t13$16, t13$17, t13$18, t13$19, t13$20;
      let useSubThemes = this.subThemesData != null;
      let subTheme = (t13 = this.subThemesData, t13 == null ? C[62] || CT.C62 : t13);
      let colorScheme = this.toScheme;
      let isDark = colorScheme.brightness === ui.Brightness.dark;
      let effectivePlatform = (t13$ = this.platform, t13$ == null ? platform.defaultTargetPlatform : t13$);
      let effectiveTypography = (t13$0 = this.typography, t13$0 == null ? useSubThemes && subTheme.useTextTheme || this.useMaterial3 ? typography.Typography.material2021({platform: effectivePlatform}) : typography.Typography.material2018({platform: effectivePlatform}) : t13$0);
      let defText = isDark ? effectiveTypography.white : effectiveTypography.black;
      let primaryIsDark = theme_data.ThemeData.estimateBrightnessForColor(colorScheme.primary) === ui.Brightness.dark;
      let defPrimaryText = primaryIsDark ? effectiveTypography.white : effectiveTypography.black;
      if (this.fontFamily != null) {
        defText = defText.apply({fontFamily: this.fontFamily});
        defPrimaryText = defPrimaryText.apply({fontFamily: this.fontFamily});
      }
      if (useSubThemes && subTheme.blendTextTheme) {
        let textBase = isDark ? colors$.Colors.white : colors$.Colors.black;
        let textHiOpacity = isDark ? flex_extensions['FlexColorExtensions|blend'](textBase, colorScheme.surfaceTint, 30).withAlpha(204) : flex_extensions['FlexColorExtensions|blend'](textBase, colorScheme.surfaceTint, 40).withAlpha(191);
        let textMediumOpacity = isDark ? flex_extensions['FlexColorExtensions|blend'](textBase, colorScheme.surfaceTint, 22) : flex_extensions['FlexColorExtensions|blend'](textBase, colorScheme.surfaceTint, 28).withAlpha(242);
        let textNoOpacity = isDark ? flex_extensions['FlexColorExtensions|blend'](textBase, colorScheme.surfaceTint, 20) : flex_extensions['FlexColorExtensions|blend'](textBase, colorScheme.surfaceTint, 25);
        defText = defText.copyWith({displayLarge: dart.nullCheck(defText.displayLarge).copyWith({color: textHiOpacity}), displayMedium: dart.nullCheck(defText.displayMedium).copyWith({color: textHiOpacity}), displaySmall: dart.nullCheck(defText.displaySmall).copyWith({color: textHiOpacity}), headlineLarge: dart.nullCheck(defText.headlineLarge).copyWith({color: textHiOpacity}), headlineMedium: dart.nullCheck(defText.headlineMedium).copyWith({color: textHiOpacity}), bodySmall: dart.nullCheck(defText.bodySmall).copyWith({color: textHiOpacity}), headlineSmall: dart.nullCheck(defText.headlineSmall).copyWith({color: textMediumOpacity}), titleLarge: dart.nullCheck(defText.titleLarge).copyWith({color: textMediumOpacity}), titleMedium: dart.nullCheck(defText.titleMedium).copyWith({color: textMediumOpacity}), bodyLarge: dart.nullCheck(defText.bodyLarge).copyWith({color: textMediumOpacity}), bodyMedium: dart.nullCheck(defText.bodyMedium).copyWith({color: textMediumOpacity}), labelLarge: dart.nullCheck(defText.labelLarge).copyWith({color: textMediumOpacity}), titleSmall: dart.nullCheck(defText.titleSmall).copyWith({color: textNoOpacity}), labelMedium: dart.nullCheck(defText.labelMedium).copyWith({color: textNoOpacity}), labelSmall: dart.nullCheck(defText.labelSmall).copyWith({color: textNoOpacity})});
        let primeBase = primaryIsDark ? colors$.Colors.white : colors$.Colors.black;
        let primeHiOpacity = primaryIsDark ? flex_extensions['FlexColorExtensions|blend'](primeBase, colorScheme.primary, 12).withAlpha(229) : flex_extensions['FlexColorExtensions|blend'](primeBase, colorScheme.primary, 12).withAlpha(204);
        let primeMediumOpacity = primaryIsDark ? flex_extensions['FlexColorExtensions|blend'](primeBase, colorScheme.primary, 10) : flex_extensions['FlexColorExtensions|blend'](primeBase, colorScheme.primary, 5).withAlpha(242);
        let primeNoOpacity = primaryIsDark ? flex_extensions['FlexColorExtensions|blend'](primeBase, colorScheme.primary, 7) : flex_extensions['FlexColorExtensions|blend'](primeBase, colorScheme.primary, 4);
        defPrimaryText = defPrimaryText.copyWith({displayLarge: dart.nullCheck(defPrimaryText.displayLarge).copyWith({color: primeHiOpacity}), displayMedium: dart.nullCheck(defPrimaryText.displayMedium).copyWith({color: primeHiOpacity}), displaySmall: dart.nullCheck(defPrimaryText.displaySmall).copyWith({color: primeHiOpacity}), headlineLarge: dart.nullCheck(defPrimaryText.headlineLarge).copyWith({color: primeHiOpacity}), headlineMedium: dart.nullCheck(defPrimaryText.headlineMedium).copyWith({color: primeHiOpacity}), bodySmall: dart.nullCheck(defPrimaryText.bodySmall).copyWith({color: primeHiOpacity}), headlineSmall: dart.nullCheck(defPrimaryText.headlineSmall).copyWith({color: primeMediumOpacity}), titleLarge: dart.nullCheck(defPrimaryText.titleLarge).copyWith({color: primeMediumOpacity}), titleMedium: dart.nullCheck(defPrimaryText.titleMedium).copyWith({color: primeMediumOpacity}), bodyLarge: dart.nullCheck(defPrimaryText.bodyLarge).copyWith({color: primeMediumOpacity}), bodyMedium: dart.nullCheck(defPrimaryText.bodyMedium).copyWith({color: primeMediumOpacity}), labelLarge: dart.nullCheck(defPrimaryText.labelLarge).copyWith({color: primeMediumOpacity}), titleSmall: dart.nullCheck(defPrimaryText.titleSmall).copyWith({color: primeNoOpacity}), labelMedium: dart.nullCheck(defPrimaryText.labelMedium).copyWith({color: primeNoOpacity}), labelSmall: dart.nullCheck(defPrimaryText.labelSmall).copyWith({color: primeNoOpacity})});
      }
      let effectiveTextTheme = defText.merge(this.textTheme);
      let effectivePrimaryTextTheme = defPrimaryText.merge(this.primaryTextTheme);
      let primaryColorDark = isDark ? flex_extensions['FlexColorExtensions|blend'](colorScheme.primary, colors$.Colors.black, 45) : flex_extensions['FlexColorExtensions|blend'](colorScheme.primary, colors$.Colors.black, 40);
      let primaryColorLight = isDark ? flex_extensions['FlexColorExtensions|blend'](colorScheme.primary, colors$.Colors.white, 35) : flex_extensions['FlexColorExtensions|blend'](colorScheme.primary, colors$.Colors.white, 40);
      let secondaryHeaderColor = isDark ? flex_extensions['FlexColorExtensions|blend'](colorScheme.primary, colors$.Colors.black, 60) : flex_extensions['FlexColorExtensions|blend'](colorScheme.primary, colors$.Colors.white, 80);
      let effectiveAppBarBackgroundColor = (t13$1 = this.appBarBackground, t13$1 == null ? useSubThemes && subTheme.appBarBackgroundSchemeColor != null ? flex_sub_themes.FlexSubThemes.schemeColor(dart.nullCheck(subTheme.appBarBackgroundSchemeColor), colorScheme) : isDark ? colorScheme.surface : colorScheme.primary : t13$1);
      let appBarBrightness = theme_data.ThemeData.estimateBrightnessForColor(effectiveAppBarBackgroundColor);
      let appBarForeground = appBarBrightness === ui.Brightness.dark ? colors$.Colors.white : colors$.Colors.black;
      let appBarIconColor = appBarBrightness === ui.Brightness.dark ? colors$.Colors.white : colors$.Colors.black87;
      if (useSubThemes && subTheme.blendTextTheme) {
        if (appBarBrightness === ui.Brightness.dark) {
          appBarForeground = flex_extensions['FlexColorExtensions|blend'](flex_color.FlexColor.lightSurface, effectiveAppBarBackgroundColor, 12);
        } else {
          appBarForeground = flex_extensions['FlexColorExtensions|blend'](flex_color.FlexColor.darkSurface, effectiveAppBarBackgroundColor, 12);
        }
        appBarIconColor = appBarForeground;
      }
      const selectedTabColor = () => {
        switch (this.tabBarStyle) {
          case C[59] || CT.C59:
            {
              return isDark ? colors$.Colors.white : colorScheme.onPrimary;
            }
          case C[58] || CT.C58:
            {
              return colorScheme.primary;
            }
          case C[57] || CT.C57:
            {
              return appBarBrightness === ui.Brightness.light ? colors$.Colors.black87 : colors$.Colors.white;
            }
          case C[60] || CT.C60:
            {
              return isDark ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colors$.Colors.white, 230) : flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colors$.Colors.white, 178);
            }
        }
      };
      dart.fn(selectedTabColor, T.VoidToColor());
      const unselectedTabColor = () => {
        switch (this.tabBarStyle) {
          case C[59] || CT.C59:
            {
              return selectedTabColor().withAlpha(178);
            }
          case C[58] || CT.C58:
            {
              return useSubThemes ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.onSurface, colorScheme.primary, 102).withAlpha(165) : colorScheme.onSurface.withAlpha(153);
            }
          case C[57] || CT.C57:
            {
              return appBarBrightness === ui.Brightness.light && (effectiveAppBarBackgroundColor._equals(colors$.Colors.white) || effectiveAppBarBackgroundColor._equals(colorScheme.surface) || effectiveAppBarBackgroundColor._equals(colorScheme.background)) ? colorScheme.onSurface.withAlpha(153) : selectedTabColor().withAlpha(178);
            }
          case C[60] || CT.C60:
            {
              return isDark ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colors$.Colors.white, 230).withAlpha(178) : flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colors$.Colors.white, 127).withAlpha(127);
            }
        }
      };
      dart.fn(unselectedTabColor, T.VoidToColor());
      function tooltipFontSize() {
        switch (effectivePlatform) {
          case C[68] || CT.C68:
          case C[67] || CT.C67:
          case C[69] || CT.C69:
            {
              return 12.0;
            }
          case C[65] || CT.C65:
          case C[66] || CT.C66:
          case C[64] || CT.C64:
            {
              return 14.0;
            }
        }
      }
      dart.fn(tooltipFontSize, T.VoidTodouble());
      function tooltipPadding() {
        switch (effectivePlatform) {
          case C[68] || CT.C68:
          case C[67] || CT.C67:
          case C[69] || CT.C69:
            {
              return C[74] || CT.C74;
            }
          case C[65] || CT.C65:
          case C[66] || CT.C66:
          case C[64] || CT.C64:
            {
              return C[75] || CT.C75;
            }
        }
      }
      dart.fn(tooltipPadding, T.VoidToEdgeInsets());
      let dividerColor = colorScheme.onSurface.withAlpha(30);
      let effectiveInputDecorationTheme = useSubThemes ? flex_sub_themes.FlexSubThemes.inputDecorationTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.inputDecoratorSchemeColor, radius: (t13$2 = subTheme.inputDecoratorRadius, t13$2 == null ? subTheme.defaultRadius : t13$2), borderType: subTheme.inputDecoratorBorderType, filled: subTheme.inputDecoratorIsFilled, fillColor: subTheme.inputDecoratorFillColor, focusedBorderWidth: subTheme.thickBorderWidth, unfocusedBorderWidth: subTheme.thinBorderWidth, unfocusedHasBorder: subTheme.inputDecoratorUnfocusedHasBorder, unfocusedBorderIsColored: subTheme.inputDecoratorUnfocusedBorderIsColored, useMaterial3: this.useMaterial3}) : new input_decorator.InputDecorationTheme.new({filled: subTheme.inputDecoratorIsFilled, fillColor: isDark ? colorScheme.primary.withAlpha(15) : colorScheme.primary.withAlpha(9)});
      let themedEffects = useSubThemes && subTheme.interactionEffects;
      return theme_data.ThemeData.new({fontFamily: this.fontFamily, visualDensity: this.visualDensity, useMaterial3: this.useMaterial3, extensions: this.extensions, textTheme: effectiveTextTheme, primaryTextTheme: effectivePrimaryTextTheme, typography: effectiveTypography, platform: effectivePlatform, brightness: colorScheme.brightness, primaryColor: colorScheme.primary, canvasColor: colorScheme.background, scaffoldBackgroundColor: (t13$3 = this.scaffoldBackground, t13$3 == null ? colorScheme.background : t13$3), cardColor: colorScheme.surface, dividerColor: dividerColor, backgroundColor: colorScheme.background, disabledColor: themedEffects ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colorScheme.onSurface, 102).withAlpha(49) : isDark ? colors$.Colors.white38 : colors$.Colors.black38, hintColor: isDark ? colors$.Colors.white60 : colors$.Colors.black.withAlpha(153), hoverColor: themedEffects ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colors$.Colors.white, 64).withAlpha(25) : null, focusColor: themedEffects ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colors$.Colors.white, 76).withAlpha(76) : null, highlightColor: themedEffects ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colors$.Colors.white, 64).withAlpha(25) : null, splashColor: themedEffects ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.primary, colors$.Colors.white, 31).withAlpha(51) : null, dialogBackgroundColor: (t13$4 = this.dialogBackground, t13$4 == null ? colorScheme.surface : t13$4), errorColor: colorScheme.error, indicatorColor: subTheme.tabBarIndicatorSchemeColor == null ? selectedTabColor() : flex_sub_themes.FlexSubThemes.schemeColor(dart.nullCheck(subTheme.tabBarIndicatorSchemeColor), colorScheme), applyElevationOverlayColor: isDark && this.applyElevationOverlayColor, colorScheme: colorScheme, toggleableActiveColor: useSubThemes || this.useMaterial3 ? colorScheme.primary : colorScheme.secondary, primaryColorDark: primaryColorDark, primaryColorLight: primaryColorLight, secondaryHeaderColor: secondaryHeaderColor, appBarTheme: new app_bar_theme.AppBarTheme.new({centerTitle: subTheme.appBarCenterTitle, backgroundColor: effectiveAppBarBackgroundColor, foregroundColor: appBarForeground, iconTheme: new icon_theme_data.IconThemeData.new({color: appBarIconColor}), actionsIconTheme: new icon_theme_data.IconThemeData.new({color: appBarIconColor}), elevation: this.appBarElevation, systemOverlayStyle: new system_chrome.SystemUiOverlayStyle.new({systemStatusBarContrastEnforced: false, statusBarColor: this.transparentStatusBar ? colors$.Colors.transparent : C[76] || CT.C76, statusBarBrightness: appBarBrightness, statusBarIconBrightness: appBarBrightness === ui.Brightness.dark ? ui.Brightness.light : ui.Brightness.dark, systemNavigationBarColor: colorScheme.background, systemNavigationBarIconBrightness: isDark ? ui.Brightness.light : ui.Brightness.dark, systemNavigationBarDividerColor: null, systemNavigationBarContrastEnforced: false})}), bottomAppBarColor: colorScheme.background, bottomAppBarTheme: new bottom_app_bar_theme.BottomAppBarTheme.new({color: colorScheme.background, elevation: this.bottomAppBarElevation}), textSelectionTheme: new text_selection_theme.TextSelectionThemeData.new({selectionColor: isDark ? colorScheme.primary.withAlpha(178) : colorScheme.primary.withAlpha(76), selectionHandleColor: primaryColorDark}), tabBarTheme: new tab_bar_theme.TabBarTheme.new({indicatorSize: tabs.TabBarIndicatorSize.tab, labelStyle: effectiveTextTheme.bodyLarge, labelColor: subTheme.tabBarItemSchemeColor == null ? selectedTabColor() : flex_sub_themes.FlexSubThemes.schemeColor(dart.nullCheck(subTheme.tabBarItemSchemeColor), colorScheme), unselectedLabelStyle: effectiveTextTheme.bodyLarge, unselectedLabelColor: subTheme.tabBarItemSchemeColor == null ? unselectedTabColor() : flex_sub_themes.FlexSubThemes.schemeColor(dart.nullCheck(subTheme.tabBarItemSchemeColor), colorScheme).withAlpha(153)}), iconTheme: useSubThemes ? new icon_theme_data.IconThemeData.new({color: dart.nullCheck(effectiveTextTheme.titleLarge).color}) : null, primaryIconTheme: useSubThemes ? new icon_theme_data.IconThemeData.new({color: dart.nullCheck(effectivePrimaryTextTheme.titleLarge).color}) : null, tooltipTheme: new tooltip_theme.TooltipThemeData.new({padding: tooltipPadding(), margin: C[77] || CT.C77, textStyle: dart.nullCheck(effectiveTextTheme.bodyMedium).copyWith({inherit: false, color: this.tooltipsMatchBackground ? isDark ? colors$.Colors.white : colors$.Colors.black : isDark ? colors$.Colors.black : colors$.Colors.white, fontSize: tooltipFontSize()}), decoration: useSubThemes ? this.tooltipsMatchBackground ? new box_decoration.BoxDecoration.new({color: isDark ? flex_extensions['FlexColorExtensions|blendAlpha'](flex_color.FlexColor.darkSurface, colorScheme.primary, 40).withAlpha(242) : flex_extensions['FlexColorExtensions|blendAlpha'](flex_color.FlexColor.lightSurface, colorScheme.primary, 10).withAlpha(242), borderRadius: C[78] || CT.C78, border: box_border.Border.all({color: dividerColor})}) : new box_decoration.BoxDecoration.new({color: isDark ? flex_extensions['FlexColorExtensions|blendAlpha'](flex_color.FlexColor.lightSurface, colorScheme.primary, 99).withAlpha(242) : flex_extensions['FlexColorExtensions|blendAlpha'](flex_color.FlexColor.darkSurface, colorScheme.primary, 114).withAlpha(242), borderRadius: C[78] || CT.C78, border: box_border.Border.all({color: dividerColor})}) : this.tooltipsMatchBackground ? new box_decoration.BoxDecoration.new({color: isDark ? C[80] || CT.C80 : C[81] || CT.C81, borderRadius: C[82] || CT.C82, border: box_border.Border.all({color: dividerColor})}) : null}), textButtonTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.textButtonTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.textButtonSchemeColor, radius: (t13$5 = subTheme.textButtonRadius, t13$5 == null ? subTheme.defaultRadius : t13$5), padding: subTheme.buttonPadding, minButtonSize: subTheme.buttonMinSize, useMaterial3: this.useMaterial3}) : null, elevatedButtonTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.elevatedButtonTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.elevatedButtonSchemeColor, onBaseSchemeColor: subTheme.elevatedButtonSecondarySchemeColor, radius: (t13$6 = subTheme.elevatedButtonRadius, t13$6 == null ? subTheme.defaultRadius : t13$6), elevation: subTheme.elevatedButtonElevation, padding: subTheme.buttonPadding, minButtonSize: subTheme.buttonMinSize, useMaterial3: this.useMaterial3}) : null, outlinedButtonTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.outlinedButtonTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.outlinedButtonSchemeColor, outlineSchemeColor: subTheme.outlinedButtonOutlineSchemeColor, radius: (t13$7 = subTheme.outlinedButtonRadius, t13$7 == null ? subTheme.defaultRadius : t13$7), pressedOutlineWidth: subTheme.thickBorderWidth, outlineWidth: subTheme.thinBorderWidth, padding: subTheme.buttonPadding, minButtonSize: subTheme.buttonMinSize, useMaterial3: this.useMaterial3}) : null, buttonTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.buttonTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.materialButtonSchemeColor, radius: (t13$8 = subTheme.textButtonRadius, t13$8 == null ? subTheme.defaultRadius : t13$8), padding: subTheme.buttonPadding, minButtonSize: subTheme.buttonMinSize}) : new button_theme.ButtonThemeData.new({colorScheme: colorScheme, textTheme: button_theme.ButtonTextTheme.primary, materialTapTargetSize: theme_data.MaterialTapTargetSize.shrinkWrap, padding: C[84] || CT.C84}), toggleButtonsTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.toggleButtonsTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.toggleButtonsSchemeColor, borderWidth: subTheme.thinBorderWidth, radius: (t13$9 = subTheme.toggleButtonsRadius, t13$9 == null ? subTheme.defaultRadius : t13$9), minButtonSize: subTheme.buttonMinSize, visualDensity: this.visualDensity, useMaterial3: this.useMaterial3}) : null, switchTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.switchTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.switchSchemeColor, unselectedIsColored: subTheme.unselectedToggleIsColored}) : flex_sub_themes.FlexSubThemes.switchTheme({colorScheme: colorScheme, baseSchemeColor: this.useMaterial3 ? flex_sub_themes.SchemeColor.primary : flex_sub_themes.SchemeColor.secondary, unselectedIsColored: false}), checkboxTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.checkboxTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.checkboxSchemeColor, unselectedIsColored: subTheme.unselectedToggleIsColored}) : flex_sub_themes.FlexSubThemes.checkboxTheme({colorScheme: colorScheme, baseSchemeColor: this.useMaterial3 ? flex_sub_themes.SchemeColor.primary : flex_sub_themes.SchemeColor.secondary, unselectedIsColored: false}), radioTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.radioTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.radioSchemeColor, unselectedIsColored: subTheme.unselectedToggleIsColored}) : flex_sub_themes.FlexSubThemes.radioTheme({colorScheme: colorScheme, baseSchemeColor: this.useMaterial3 ? flex_sub_themes.SchemeColor.primary : flex_sub_themes.SchemeColor.secondary, unselectedIsColored: false}), inputDecorationTheme: effectiveInputDecorationTheme, floatingActionButtonTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.floatingActionButtonTheme({colorScheme: colorScheme, backgroundSchemeColor: subTheme.fabSchemeColor, radius: (t13$10 = subTheme.fabRadius, t13$10 == null ? subTheme.defaultRadius : t13$10), useShape: subTheme.fabUseShape}) : null, chipTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.chipTheme({colorScheme: colorScheme, baseSchemeColor: subTheme.chipSchemeColor, labelStyle: dart.nullCheck(effectiveTextTheme.labelLarge), radius: (t13$11 = subTheme.chipRadius, t13$11 == null ? subTheme.defaultRadius : t13$11), useMaterial3: this.useMaterial3}) : this.useMaterial3 ? null : chip_theme.ChipThemeData.fromDefaults({secondaryColor: colorScheme.primary, brightness: colorScheme.brightness, labelStyle: dart.nullCheck(effectiveTextTheme.bodyLarge)}), cardTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.cardTheme({radius: (t13$12 = subTheme.cardRadius, t13$12 == null ? subTheme.defaultRadius : t13$12), elevation: subTheme.cardElevation}) : null, popupMenuTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.popupMenuTheme({radius: (t13$13 = subTheme.popupMenuRadius, t13$13 == null ? subTheme.defaultRadius == null ? null : math.min(core.double, dart.nullCheck(subTheme.defaultRadius), 10.0) : t13$13), elevation: subTheme.popupMenuElevation, color: subTheme.popupMenuOpacity == null ? null : colorScheme.surface.withOpacity(dart.nullCheck(subTheme.popupMenuOpacity))}) : null, dialogTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.dialogTheme({backgroundColor: this.dialogBackground, colorScheme: colorScheme, backgroundSchemeColor: subTheme.dialogBackgroundSchemeColor, radius: (t13$14 = subTheme.dialogRadius, t13$14 == null ? subTheme.defaultRadius : t13$14), elevation: subTheme.dialogElevation}) : null, timePickerTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.timePickerTheme({backgroundColor: this.dialogBackground, colorScheme: colorScheme, backgroundSchemeColor: subTheme.dialogBackgroundSchemeColor, radius: (t13$15 = subTheme.timePickerDialogRadius, t13$15 == null ? subTheme.defaultRadius : t13$15), elementRadius: (t13$16 = subTheme.cardRadius, t13$16 == null ? subTheme.defaultRadius : t13$16), inputDecorationTheme: effectiveInputDecorationTheme}) : null, snackBarTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.snackBarTheme({elevation: subTheme.snackBarElevation, colorScheme: colorScheme, backgroundSchemeColor: subTheme.snackBarBackgroundSchemeColor, backgroundColor: isDark ? flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.onSurface, colorScheme.primary, 99).withAlpha(242) : flex_extensions['FlexColorExtensions|blendAlpha'](colorScheme.onSurface, colorScheme.primary, 114).withAlpha(237)}) : null, bottomSheetTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.bottomSheetTheme({radius: (t13$17 = subTheme.bottomSheetRadius, t13$17 == null ? subTheme.defaultRadius : t13$17), elevation: subTheme.bottomSheetElevation, modalElevation: subTheme.bottomSheetModalElevation}) : null, bottomNavigationBarTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.bottomNavigationBar({colorScheme: colorScheme, labelTextStyle: (t13$18 = subTheme.bottomNavigationBarLabelTextStyle, t13$18 == null ? subTheme.useFlutterDefaults ? null : effectiveTextTheme.bodyMedium : t13$18), selectedLabelSize: subTheme.bottomNavigationBarSelectedLabelSize, unselectedLabelSize: subTheme.bottomNavigationBarUnselectedLabelSize, selectedLabelSchemeColor: subTheme.bottomNavigationBarSelectedLabelSchemeColor, unselectedLabelSchemeColor: subTheme.bottomNavigationBarUnselectedLabelSchemeColor, mutedUnselectedLabel: subTheme.bottomNavigationBarMutedUnselectedLabel, selectedIconSize: subTheme.bottomNavigationBarSelectedIconSize, unselectedIconSize: subTheme.bottomNavigationBarUnselectedIconSize, selectedIconSchemeColor: subTheme.bottomNavigationBarSelectedIconSchemeColor, unselectedIconSchemeColor: subTheme.bottomNavigationBarUnselectedIconSchemeColor, mutedUnselectedIcon: subTheme.bottomNavigationBarMutedUnselectedIcon, backgroundSchemeColor: subTheme.bottomNavigationBarBackgroundSchemeColor, opacity: subTheme.bottomNavigationBarOpacity, elevation: subTheme.bottomNavigationBarElevation, type: subTheme.bottomNavigationBarType, showSelectedLabels: subTheme.bottomNavigationBarShowSelectedLabels, showUnselectedLabels: subTheme.bottomNavigationBarShowUnselectedLabels, landscapeLayout: subTheme.bottomNavigationBarLandscapeLayout, unselectedAlphaBlend: 102, unselectedAlpha: 165, useFlutterDefaults: subTheme.useFlutterDefaults}) : new bottom_navigation_bar_theme.BottomNavigationBarThemeData.new({selectedIconTheme: new icon_theme_data.IconThemeData.new({color: colorScheme.primary}), selectedItemColor: colorScheme.primary}), navigationBarTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.navigationBarTheme({colorScheme: colorScheme, labelTextStyle: (t13$19 = subTheme.navigationBarLabelTextStyle, t13$19 == null ? subTheme.useFlutterDefaults ? null : effectiveTextTheme.labelMedium : t13$19), selectedLabelSize: subTheme.navigationBarSelectedLabelSize, unselectedLabelSize: subTheme.navigationBarUnselectedLabelSize, selectedLabelSchemeColor: subTheme.navigationBarSelectedLabelSchemeColor, unselectedLabelSchemeColor: subTheme.navigationBarUnselectedLabelSchemeColor, mutedUnselectedLabel: subTheme.navigationBarMutedUnselectedLabel, selectedIconSize: subTheme.navigationBarSelectedIconSize, unselectedIconSize: subTheme.navigationBarUnselectedIconSize, selectedIconSchemeColor: subTheme.navigationBarSelectedIconSchemeColor, unselectedIconSchemeColor: subTheme.navigationBarUnselectedIconSchemeColor, mutedUnselectedIcon: subTheme.navigationBarMutedUnselectedIcon, indicatorSchemeColor: subTheme.navigationBarIndicatorSchemeColor, backgroundSchemeColor: subTheme.navigationBarBackgroundSchemeColor, opacity: subTheme.navigationBarOpacity, height: subTheme.navigationBarHeight, labelBehavior: subTheme.navigationBarLabelBehavior, indicatorAlpha: subTheme.navigationBarIndicatorOpacity != null ? ui.Color.getAlphaFromOpacity(dart.nullCheck(subTheme.navigationBarIndicatorOpacity)) : null, unselectedAlphaBlend: 102, unselectedAlpha: 165, useMaterial3: this.useMaterial3, useFlutterDefaults: subTheme.useFlutterDefaults}) : null, navigationRailTheme: useSubThemes ? flex_sub_themes.FlexSubThemes.navigationRailTheme({colorScheme: colorScheme, labelTextStyle: (t13$20 = subTheme.navigationRailLabelTextStyle, t13$20 == null ? subTheme.useFlutterDefaults ? null : effectiveTextTheme.labelMedium : t13$20), selectedLabelSize: subTheme.navigationRailSelectedLabelSize, unselectedLabelSize: subTheme.navigationRailUnselectedLabelSize, selectedLabelSchemeColor: subTheme.navigationRailSelectedLabelSchemeColor, unselectedLabelSchemeColor: subTheme.navigationRailUnselectedLabelSchemeColor, mutedUnselectedLabel: subTheme.navigationRailMutedUnselectedLabel, selectedIconSize: subTheme.navigationRailSelectedIconSize, unselectedIconSize: subTheme.navigationRailUnselectedIconSize, selectedIconSchemeColor: subTheme.navigationRailSelectedIconSchemeColor, unselectedIconSchemeColor: subTheme.navigationRailUnselectedIconSchemeColor, mutedUnselectedIcon: subTheme.navigationRailMutedUnselectedIcon, useIndicator: subTheme.navigationRailUseIndicator, indicatorSchemeColor: subTheme.navigationRailIndicatorSchemeColor, backgroundSchemeColor: subTheme.navigationRailBackgroundSchemeColor, opacity: subTheme.navigationRailOpacity, elevation: subTheme.navigationRailElevation, labelType: subTheme.navigationRailLabelType, groupAlignment: subTheme.navigationRailGroupAlignment, indicatorAlpha: subTheme.navigationRailIndicatorOpacity != null ? ui.Color.getAlphaFromOpacity(dart.nullCheck(subTheme.navigationRailIndicatorOpacity)) : null, unselectedAlphaBlend: 102, unselectedAlpha: 165, useMaterial3: this.useMaterial3, useFlutterDefaults: subTheme.useFlutterDefaults}) : null});
    }
    get toScheme() {
      let t14, t13, t13$, t14$, t13$0, t13$1, t14$0, t13$2, t13$3, t14$1, t13$4, t13$5, t14$2, t13$6, t13$7, t14$3, t13$8, t13$9, t14$4, t13$10, t13$11, t14$5, t13$12, t13$13, t14$6, t13$14, t13$15, t14$7, t13$16, t13$17, t14$8, t13$18, t13$19, t14$9, t13$20, t13$21, t13$22, t13$23, t14$10, t13$24, t13$25, t13$26, t13$27, t13$28, t13$29, t14$11, t13$30, t13$31, t13$32, t13$33, t14$12, t13$34, t14$13, t13$35, t14$14, t13$36, t14$15, t13$37, t14$16, t13$38, t14$17, t13$39, t14$18, t13$40, t13$41, t13$42, t14$19, t13$43, t14$20, t13$44, t13$45, t14$21, t14$22, t14$23, t14$24, t14$25, t15, t14$26, t14$27, t13$46, t14$28, t14$29, t14$30, t13$47;
      let usedBrightness = (t13$ = (t13 = this.brightness, t13 == null ? (t14 = this.colorScheme, t14 == null ? null : t14.brightness) : t13), t13$ == null ? ui.Brightness.light : t13$);
      let isDark = usedBrightness === ui.Brightness.dark;
      let usedPrimary = (t13$1 = (t13$0 = this.primary, t13$0 == null ? (t14$ = this.colorScheme, t14$ == null ? null : t14$.primary) : t13$0), t13$1 == null ? isDark ? flex_color.FlexColor.materialDarkPrimary : flex_color.FlexColor.materialLightPrimary : t13$1);
      let errorFallback = isDark ? flex_color.FlexColor.materialDarkError : flex_color.FlexColor.materialLightError;
      let errorContainerFallback = isDark ? flex_color.FlexColor.darkErrorContainer(flex_color.FlexColor.materialDarkError) : flex_color.FlexColor.lightErrorContainer(flex_color.FlexColor.materialLightError);
      let colors = flex_scheme_color.FlexSchemeColor.from({primary: usedPrimary, primaryContainer: (t13$3 = (t13$2 = this.primaryContainer, t13$2 == null ? (t14$0 = this.colorScheme, t14$0 == null ? null : t14$0.primaryContainer) : t13$2), t13$3 == null ? usedPrimary : t13$3), secondary: (t13$5 = (t13$4 = this.secondary, t13$4 == null ? (t14$1 = this.colorScheme, t14$1 == null ? null : t14$1.secondary) : t13$4), t13$5 == null ? usedPrimary : t13$5), secondaryContainer: (t13$9 = (t13$8 = (t13$7 = (t13$6 = this.secondaryContainer, t13$6 == null ? (t14$2 = this.colorScheme, t14$2 == null ? null : t14$2.secondaryContainer) : t13$6), t13$7 == null ? this.secondary : t13$7), t13$8 == null ? (t14$3 = this.colorScheme, t14$3 == null ? null : t14$3.secondary) : t13$8), t13$9 == null ? usedPrimary : t13$9), tertiary: (t13$13 = (t13$12 = (t13$11 = (t13$10 = this.tertiary, t13$10 == null ? (t14$4 = this.colorScheme, t14$4 == null ? null : t14$4.tertiary) : t13$10), t13$11 == null ? this.secondary : t13$11), t13$12 == null ? (t14$5 = this.colorScheme, t14$5 == null ? null : t14$5.secondary) : t13$12), t13$13 == null ? usedPrimary : t13$13), tertiaryContainer: (t13$19 = (t13$18 = (t13$17 = (t13$16 = (t13$15 = (t13$14 = this.tertiaryContainer, t13$14 == null ? (t14$6 = this.colorScheme, t14$6 == null ? null : t14$6.tertiaryContainer) : t13$14), t13$15 == null ? this.tertiary : t13$15), t13$16 == null ? (t14$7 = this.colorScheme, t14$7 == null ? null : t14$7.tertiary) : t13$16), t13$17 == null ? this.secondary : t13$17), t13$18 == null ? (t14$8 = this.colorScheme, t14$8 == null ? null : t14$8.secondary) : t13$18), t13$19 == null ? usedPrimary : t13$19), error: (t13$21 = (t13$20 = this.error, t13$20 == null ? (t14$9 = this.colorScheme, t14$9 == null ? null : t14$9.error) : t13$20), t13$21 == null ? errorFallback : t13$21), errorContainer: (t13$23 = (t13$22 = this.colorScheme, t13$22 == null ? null : t13$22.errorContainer), t13$23 == null ? errorContainerFallback : t13$23)});
      let effectiveSurfaceColor = (t13$25 = (t13$24 = this.surface, t13$24 == null ? (t14$10 = this.colorScheme, t14$10 == null ? null : t14$10.surface) : t13$24), t13$25 == null ? isDark ? flex_color.FlexColor.materialDarkSurface : flex_color.FlexColor.materialLightSurface : t13$25);
      let effectiveSurfaceVariantColor = (t13$27 = (t13$26 = this.colorScheme, t13$26 == null ? null : t13$26.surfaceVariant), t13$27 == null ? isDark ? flex_color.FlexColor.materialDarkSurface : flex_color.FlexColor.materialLightSurface : t13$27);
      let effectiveInverseSurfaceColor = (t13$29 = (t13$28 = this.colorScheme, t13$28 == null ? null : t13$28.inverseSurface), t13$29 == null ? isDark ? flex_color.FlexColor.materialLightSurface : flex_color.FlexColor.materialDarkSurface : t13$29);
      let effectiveBackgroundColor = (t13$31 = (t13$30 = this.background, t13$30 == null ? (t14$11 = this.colorScheme, t14$11 == null ? null : t14$11.background) : t13$30), t13$31 == null ? isDark ? flex_color.FlexColor.materialDarkBackground : flex_color.FlexColor.materialLightBackground : t13$31);
      let onColors = flex_scheme_on_colors.FlexSchemeOnColors.from({primary: colors.primary, primaryContainer: colors.primaryContainer, secondary: colors.secondary, secondaryContainer: colors.secondaryContainer, tertiary: colors.tertiary, tertiaryContainer: colors.tertiaryContainer, surface: effectiveSurfaceColor, surfaceVariant: effectiveSurfaceVariantColor, inverseSurface: effectiveInverseSurfaceColor, background: effectiveBackgroundColor, error: (t13$32 = colors.error, t13$32 == null ? errorFallback : t13$32), errorContainer: (t13$33 = colors.errorContainer, t13$33 == null ? errorContainerFallback : t13$33), onPrimary: (t13$34 = this.onPrimary, t13$34 == null ? (t14$12 = this.colorScheme, t14$12 == null ? null : t14$12.onPrimary) : t13$34), onPrimaryContainer: (t13$35 = this.onPrimaryContainer, t13$35 == null ? (t14$13 = this.colorScheme, t14$13 == null ? null : t14$13.onPrimaryContainer) : t13$35), onSecondary: (t13$36 = this.onSecondary, t13$36 == null ? (t14$14 = this.colorScheme, t14$14 == null ? null : t14$14.onSecondary) : t13$36), onSecondaryContainer: (t13$37 = this.onSecondaryContainer, t13$37 == null ? (t14$15 = this.colorScheme, t14$15 == null ? null : t14$15.onSecondaryContainer) : t13$37), onTertiary: (t13$38 = this.onTertiary, t13$38 == null ? (t14$16 = this.colorScheme, t14$16 == null ? null : t14$16.onTertiary) : t13$38), onTertiaryContainer: (t13$39 = this.onTertiaryContainer, t13$39 == null ? (t14$17 = this.colorScheme, t14$17 == null ? null : t14$17.onTertiaryContainer) : t13$39), onSurface: (t13$40 = this.onSurface, t13$40 == null ? (t14$18 = this.colorScheme, t14$18 == null ? null : t14$18.onSurface) : t13$40), onSurfaceVariant: (t13$41 = this.colorScheme, t13$41 == null ? null : t13$41.onSurfaceVariant), onInverseSurface: (t13$42 = this.colorScheme, t13$42 == null ? null : t13$42.onInverseSurface), onBackground: (t13$43 = this.onBackground, t13$43 == null ? (t14$19 = this.colorScheme, t14$19 == null ? null : t14$19.onBackground) : t13$43), onError: (t13$44 = this.onError, t13$44 == null ? (t14$20 = this.colorScheme, t14$20 == null ? null : t14$20.onError) : t13$44), onErrorContainer: (t13$45 = this.colorScheme, t13$45 == null ? null : t13$45.onErrorContainer)});
      t13$47 = (t13$46 = this.colorScheme, t13$46 == null ? null : t13$46.copyWith({brightness: usedBrightness, primary: colors.primary, onPrimary: onColors.onPrimary, primaryContainer: colors.primaryContainer, onPrimaryContainer: onColors.onPrimaryContainer, secondary: colors.secondary, onSecondary: onColors.onSecondary, secondaryContainer: colors.secondaryContainer, onSecondaryContainer: onColors.onSecondaryContainer, tertiary: colors.tertiary, onTertiary: onColors.onTertiary, tertiaryContainer: colors.tertiaryContainer, onTertiaryContainer: onColors.onTertiaryContainer, error: (t14$21 = colors.error, t14$21 == null ? errorFallback : t14$21), onError: onColors.onError, errorContainer: (t14$22 = colors.errorContainer, t14$22 == null ? errorContainerFallback : t14$22), onErrorContainer: onColors.onErrorContainer, background: effectiveBackgroundColor, onBackground: onColors.onBackground, surface: effectiveSurfaceColor, onSurface: onColors.onSurface, surfaceVariant: effectiveSurfaceVariantColor, onSurfaceVariant: onColors.onSurfaceVariant, outline: (t14$23 = this.colorScheme, t14$23 == null ? null : t14$23.outline), shadow: (t14$24 = this.colorScheme, t14$24 == null ? null : t14$24.shadow), inverseSurface: effectiveInverseSurfaceColor, onInverseSurface: onColors.onInverseSurface, inversePrimary: (t14$25 = this.colorScheme, t14$25 == null ? null : t14$25.inversePrimary), surfaceTint: (t14$27 = (t14$26 = this.surfaceTint, t14$26 == null ? (t15 = this.colorScheme, t15 == null ? null : t15.surfaceTint) : t14$26), t14$27 == null ? colors.primary : t14$27)}));
      return t13$47 == null ? new color_scheme.ColorScheme.new({brightness: usedBrightness, primary: usedPrimary, onPrimary: onColors.onPrimary, primaryContainer: colors.primaryContainer, onPrimaryContainer: onColors.onPrimaryContainer, secondary: colors.secondary, onSecondary: onColors.onSecondary, secondaryContainer: colors.secondaryContainer, onSecondaryContainer: onColors.onSecondaryContainer, tertiary: colors.tertiary, onTertiary: onColors.onTertiary, tertiaryContainer: colors.tertiaryContainer, onTertiaryContainer: onColors.onTertiaryContainer, error: (t14$28 = colors.error, t14$28 == null ? errorFallback : t14$28), onError: onColors.onError, errorContainer: (t14$29 = colors.errorContainer, t14$29 == null ? errorContainerFallback : t14$29), onErrorContainer: onColors.onErrorContainer, background: effectiveBackgroundColor, onBackground: onColors.onBackground, surface: effectiveSurfaceColor, onSurface: onColors.onSurface, surfaceVariant: effectiveSurfaceVariantColor, onSurfaceVariant: onColors.onSurfaceVariant, outline: flex_color_scheme.FlexColorScheme._outlineColor(usedBrightness, onColors.onBackground, 30), shadow: colors$.Colors.black, inverseSurface: effectiveInverseSurfaceColor, onInverseSurface: onColors.onInverseSurface, inversePrimary: flex_color_scheme.FlexColorScheme._inversePrimary(usedBrightness, colors.primary, effectiveSurfaceColor), surfaceTint: (t14$30 = this.surfaceTint, t14$30 == null ? usedPrimary : t14$30)}) : t13$47;
    }
    static _inversePrimary(brightness, primary, surface) {
      if (brightness === ui.Brightness.light) {
        return flex_extensions['FlexColorExtensions|lighten'](flex_extensions['FlexColorExtensions|brighten'](primary, 40), 10);
      } else {
        return flex_extensions['FlexColorExtensions|blendAlpha'](flex_extensions['FlexColorExtensions|brighten'](primary, 5), surface, 153);
      }
    }
    static _outlineColor(brightness, onBackground, amount) {
      if (brightness === ui.Brightness.light) {
        return flex_extensions['FlexColorExtensions|lighten'](onBackground, amount);
      } else {
        return flex_extensions['FlexColorExtensions|darken'](onBackground, amount);
      }
    }
    copyWith(opts) {
      let t13, t13$, t13$0, t13$1, t13$2, t13$3, t13$4, t13$5, t13$6, t13$7, t13$8, t13$9, t13$10, t13$11, t13$12, t13$13, t13$14, t13$15, t13$16, t13$17, t13$18, t13$19, t13$20, t13$21, t13$22, t13$23, t13$24, t13$25, t13$26, t13$27, t13$28, t13$29, t13$30, t13$31, t13$32, t13$33, t13$34, t13$35, t13$36;
      let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
      let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
      let appBarBackground = opts && 'appBarBackground' in opts ? opts.appBarBackground : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
      let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : null;
      let appBarElevation = opts && 'appBarElevation' in opts ? opts.appBarElevation : null;
      let bottomAppBarElevation = opts && 'bottomAppBarElevation' in opts ? opts.bottomAppBarElevation : null;
      let tooltipsMatchBackground = opts && 'tooltipsMatchBackground' in opts ? opts.tooltipsMatchBackground : null;
      let transparentStatusBar = opts && 'transparentStatusBar' in opts ? opts.transparentStatusBar : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let primaryTextTheme = opts && 'primaryTextTheme' in opts ? opts.primaryTextTheme : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let typography = opts && 'typography' in opts ? opts.typography : null;
      let applyElevationOverlayColor = opts && 'applyElevationOverlayColor' in opts ? opts.applyElevationOverlayColor : null;
      let subThemesData = opts && 'subThemesData' in opts ? opts.subThemesData : null;
      let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : null;
      let extensions = opts && 'extensions' in opts ? opts.extensions : null;
      return new flex_color_scheme.FlexColorScheme.new({colorScheme: (t13 = colorScheme, t13 == null ? this.colorScheme : t13), brightness: (t13$ = brightness, t13$ == null ? this.brightness : t13$), primary: (t13$0 = primary, t13$0 == null ? this.primary : t13$0), primaryContainer: (t13$1 = primaryContainer, t13$1 == null ? this.primaryContainer : t13$1), secondary: (t13$2 = secondary, t13$2 == null ? this.secondary : t13$2), secondaryContainer: (t13$3 = secondaryContainer, t13$3 == null ? this.secondaryContainer : t13$3), tertiary: (t13$4 = tertiary, t13$4 == null ? this.tertiary : t13$4), tertiaryContainer: (t13$5 = tertiaryContainer, t13$5 == null ? this.tertiaryContainer : t13$5), error: (t13$6 = error, t13$6 == null ? this.error : t13$6), surface: (t13$7 = surface, t13$7 == null ? this.surface : t13$7), background: (t13$8 = background, t13$8 == null ? this.background : t13$8), scaffoldBackground: (t13$9 = scaffoldBackground, t13$9 == null ? this.scaffoldBackground : t13$9), appBarBackground: (t13$10 = appBarBackground, t13$10 == null ? this.appBarBackground : t13$10), dialogBackground: (t13$11 = dialogBackground, t13$11 == null ? this.dialogBackground : t13$11), onPrimary: (t13$12 = onPrimary, t13$12 == null ? this.onPrimary : t13$12), onPrimaryContainer: (t13$13 = onPrimaryContainer, t13$13 == null ? this.onPrimaryContainer : t13$13), onSecondary: (t13$14 = onSecondary, t13$14 == null ? this.onSecondary : t13$14), onSecondaryContainer: (t13$15 = onSecondaryContainer, t13$15 == null ? this.onSecondaryContainer : t13$15), onTertiary: (t13$16 = onTertiary, t13$16 == null ? this.onTertiary : t13$16), onTertiaryContainer: (t13$17 = onTertiaryContainer, t13$17 == null ? this.onTertiaryContainer : t13$17), onSurface: (t13$18 = onSurface, t13$18 == null ? this.onSurface : t13$18), onBackground: (t13$19 = onBackground, t13$19 == null ? this.onBackground : t13$19), onError: (t13$20 = onError, t13$20 == null ? this.onError : t13$20), surfaceTint: (t13$21 = surfaceTint, t13$21 == null ? this.surfaceTint : t13$21), tabBarStyle: (t13$22 = tabBarStyle, t13$22 == null ? this.tabBarStyle : t13$22), appBarElevation: (t13$23 = appBarElevation, t13$23 == null ? this.appBarElevation : t13$23), bottomAppBarElevation: (t13$24 = bottomAppBarElevation, t13$24 == null ? this.bottomAppBarElevation : t13$24), tooltipsMatchBackground: (t13$25 = tooltipsMatchBackground, t13$25 == null ? this.tooltipsMatchBackground : t13$25), transparentStatusBar: (t13$26 = transparentStatusBar, t13$26 == null ? this.transparentStatusBar : t13$26), visualDensity: (t13$27 = visualDensity, t13$27 == null ? this.visualDensity : t13$27), textTheme: (t13$28 = textTheme, t13$28 == null ? this.textTheme : t13$28), primaryTextTheme: (t13$29 = primaryTextTheme, t13$29 == null ? this.primaryTextTheme : t13$29), fontFamily: (t13$30 = fontFamily, t13$30 == null ? this.fontFamily : t13$30), platform: (t13$31 = platform, t13$31 == null ? this.platform : t13$31), typography: (t13$32 = typography, t13$32 == null ? this.typography : t13$32), applyElevationOverlayColor: (t13$33 = applyElevationOverlayColor, t13$33 == null ? this.applyElevationOverlayColor : t13$33), subThemesData: (t13$34 = subThemesData, t13$34 == null ? this.subThemesData : t13$34), useMaterial3: (t13$35 = useMaterial3, t13$35 == null ? this.useMaterial3 : t13$35), extensions: (t13$36 = extensions, t13$36 == null ? this.extensions : t13$36)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return flex_color_scheme.FlexColorScheme.is(other) && dart.equals(other.colorScheme, this.colorScheme) && other.brightness == this.brightness && dart.equals(other.primary, this.primary) && dart.equals(other.primaryContainer, this.primaryContainer) && dart.equals(other.secondary, this.secondary) && dart.equals(other.secondaryContainer, this.secondaryContainer) && dart.equals(other.tertiary, this.tertiary) && dart.equals(other.tertiaryContainer, this.tertiaryContainer) && dart.equals(other.error, this.error) && dart.equals(other.surface, this.surface) && dart.equals(other.background, this.background) && dart.equals(other.scaffoldBackground, this.scaffoldBackground) && dart.equals(other.dialogBackground, this.dialogBackground) && dart.equals(other.appBarBackground, this.appBarBackground) && dart.equals(other.onPrimary, this.onPrimary) && dart.equals(other.onPrimaryContainer, this.onPrimaryContainer) && dart.equals(other.onSecondary, this.onSecondary) && dart.equals(other.onSecondaryContainer, this.onSecondaryContainer) && dart.equals(other.onTertiary, this.onTertiary) && dart.equals(other.onTertiaryContainer, this.onTertiaryContainer) && dart.equals(other.onSurface, this.onSurface) && dart.equals(other.onBackground, this.onBackground) && dart.equals(other.onError, this.onError) && dart.equals(other.surfaceTint, this.surfaceTint) && other.tabBarStyle === this.tabBarStyle && other.appBarElevation === this.appBarElevation && other.bottomAppBarElevation === this.bottomAppBarElevation && other.tooltipsMatchBackground === this.tooltipsMatchBackground && other.transparentStatusBar === this.transparentStatusBar && dart.equals(other.visualDensity, this.visualDensity) && dart.equals(other.textTheme, this.textTheme) && dart.equals(other.primaryTextTheme, this.primaryTextTheme) && other.fontFamily == this.fontFamily && other.platform == this.platform && dart.equals(other.typography, this.typography) && other.applyElevationOverlayColor === this.applyElevationOverlayColor && dart.equals(other.subThemesData, this.subThemesData) && other.useMaterial3 === this.useMaterial3 && dart.equals(other.extensions, this.extensions);
    }
    get hashCode() {
      return core.Object.hashAll(T.JSArrayOfObjectN().of([this.colorScheme, this.brightness, this.primary, this.primaryContainer, this.secondary, this.secondaryContainer, this.tertiary, this.tertiaryContainer, this.error, this.surface, this.background, this.scaffoldBackground, this.dialogBackground, this.appBarBackground, this.onPrimary, this.onPrimaryContainer, this.onSecondary, this.onSecondaryContainer, this.onTertiary, this.onTertiaryContainer, this.onSurface, this.onBackground, this.onError, this.surfaceTint, this.tabBarStyle, this.appBarElevation, this.bottomAppBarElevation, this.tooltipsMatchBackground, this.transparentStatusBar, this.visualDensity, this.textTheme, this.primaryTextTheme, this.fontFamily, this.platform, this.typography, this.applyElevationOverlayColor, this.subThemesData, this.useMaterial3, this.extensions]));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfColorScheme()).new("colorScheme", this.colorScheme));
      properties.add(new (T.EnumPropertyOfBrightness()).new("brightness", this.brightness));
      properties.add(new colors.ColorProperty.new("primary", this.primary));
      properties.add(new colors.ColorProperty.new("primaryContainer", this.primaryContainer));
      properties.add(new colors.ColorProperty.new("secondary", this.secondary));
      properties.add(new colors.ColorProperty.new("secondaryContainer", this.secondaryContainer));
      properties.add(new colors.ColorProperty.new("tertiary", this.tertiary));
      properties.add(new colors.ColorProperty.new("tertiaryContainer", this.tertiaryContainer));
      properties.add(new colors.ColorProperty.new("error", this.error));
      properties.add(new colors.ColorProperty.new("surface", this.surface));
      properties.add(new colors.ColorProperty.new("background", this.background));
      properties.add(new colors.ColorProperty.new("scaffoldBackground", this.scaffoldBackground));
      properties.add(new colors.ColorProperty.new("appBarBackground", this.appBarBackground));
      properties.add(new colors.ColorProperty.new("dialogBackground", this.dialogBackground));
      properties.add(new colors.ColorProperty.new("onPrimary", this.onPrimary));
      properties.add(new colors.ColorProperty.new("onPrimaryContainer", this.onPrimaryContainer));
      properties.add(new colors.ColorProperty.new("onSecondary", this.onSecondary));
      properties.add(new colors.ColorProperty.new("onSecondaryContainer", this.onSecondaryContainer));
      properties.add(new colors.ColorProperty.new("onTertiary", this.onTertiary));
      properties.add(new colors.ColorProperty.new("onTertiaryContainer", this.onTertiaryContainer));
      properties.add(new colors.ColorProperty.new("onSurface", this.onSurface));
      properties.add(new colors.ColorProperty.new("onBackground", this.onBackground));
      properties.add(new colors.ColorProperty.new("onError", this.onError));
      properties.add(new colors.ColorProperty.new("surfaceTint", this.surfaceTint));
      properties.add(new (T.EnumPropertyOfFlexTabBarStyle()).new("tabBarStyle", this.tabBarStyle));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("appBarElevation", this.appBarElevation));
      properties.add(new (T.DiagnosticsPropertyOfdouble()).new("bottomAppBarElevation", this.bottomAppBarElevation));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("tooltipsMatchBackground", this.tooltipsMatchBackground));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("transparentStatusBar", this.transparentStatusBar));
      properties.add(new (T.EnumPropertyOfVisualDensity()).new("visualDensity", this.visualDensity));
      properties.add(new (T.DiagnosticsPropertyOfTextTheme()).new("textTheme", this.textTheme));
      properties.add(new (T.DiagnosticsPropertyOfTextTheme()).new("primaryTextTheme", this.primaryTextTheme));
      properties.add(new (T.DiagnosticsPropertyOfString()).new("fontFamily", this.fontFamily));
      properties.add(new (T.EnumPropertyOfTargetPlatform()).new("platform", this.platform));
      properties.add(new (T.DiagnosticsPropertyOfTypography()).new("typography", this.typography));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("applyElevationOverlayColor", this.applyElevationOverlayColor));
      properties.add(new (T.DiagnosticsPropertyOfFlexSubThemesData()).new("subThemesData", this.subThemesData));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("useMaterial3", this.useMaterial3));
      properties.add(new (T.IterablePropertyOfThemeExtension()).new("extensions", this.extensions));
    }
  };
  (flex_color_scheme.FlexColorScheme.new = function(opts) {
    let colorScheme = opts && 'colorScheme' in opts ? opts.colorScheme : null;
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
    let secondary = opts && 'secondary' in opts ? opts.secondary : null;
    let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
    let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
    let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let surface = opts && 'surface' in opts ? opts.surface : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
    let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
    let appBarBackground = opts && 'appBarBackground' in opts ? opts.appBarBackground : null;
    let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
    let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
    let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
    let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
    let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
    let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
    let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
    let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
    let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : C[57] || CT.C57;
    let appBarElevation = opts && 'appBarElevation' in opts ? opts.appBarElevation : 0;
    let bottomAppBarElevation = opts && 'bottomAppBarElevation' in opts ? opts.bottomAppBarElevation : 0;
    let tooltipsMatchBackground = opts && 'tooltipsMatchBackground' in opts ? opts.tooltipsMatchBackground : false;
    let transparentStatusBar = opts && 'transparentStatusBar' in opts ? opts.transparentStatusBar : true;
    let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
    let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
    let primaryTextTheme = opts && 'primaryTextTheme' in opts ? opts.primaryTextTheme : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let platform = opts && 'platform' in opts ? opts.platform : null;
    let typography = opts && 'typography' in opts ? opts.typography : null;
    let applyElevationOverlayColor = opts && 'applyElevationOverlayColor' in opts ? opts.applyElevationOverlayColor : true;
    let subThemesData = opts && 'subThemesData' in opts ? opts.subThemesData : null;
    let useMaterial3 = opts && 'useMaterial3' in opts ? opts.useMaterial3 : false;
    let extensions = opts && 'extensions' in opts ? opts.extensions : null;
    this[colorScheme$] = colorScheme;
    this[brightness$] = brightness;
    this[primary$] = primary;
    this[primaryContainer$] = primaryContainer;
    this[secondary$] = secondary;
    this[secondaryContainer$] = secondaryContainer;
    this[tertiary$] = tertiary;
    this[tertiaryContainer$] = tertiaryContainer;
    this[error$] = error;
    this[surface$] = surface;
    this[background$] = background;
    this[scaffoldBackground$] = scaffoldBackground;
    this[dialogBackground$] = dialogBackground;
    this[appBarBackground$] = appBarBackground;
    this[onPrimary$] = onPrimary;
    this[onPrimaryContainer$] = onPrimaryContainer;
    this[onSecondary$] = onSecondary;
    this[onSecondaryContainer$] = onSecondaryContainer;
    this[onTertiary$] = onTertiary;
    this[onTertiaryContainer$] = onTertiaryContainer;
    this[onSurface$] = onSurface;
    this[onBackground$] = onBackground;
    this[onError$] = onError;
    this[surfaceTint$] = surfaceTint;
    this[tabBarStyle$] = tabBarStyle;
    this[appBarElevation$] = appBarElevation;
    this[bottomAppBarElevation$] = bottomAppBarElevation;
    this[tooltipsMatchBackground$] = tooltipsMatchBackground;
    this[transparentStatusBar$] = transparentStatusBar;
    this[visualDensity$] = visualDensity;
    this[textTheme$] = textTheme;
    this[primaryTextTheme$] = primaryTextTheme;
    this[fontFamily$] = fontFamily;
    this[platform$] = platform;
    this[typography$] = typography;
    this[applyElevationOverlayColor$] = applyElevationOverlayColor;
    this[subThemesData$] = subThemesData;
    this[useMaterial3$] = useMaterial3;
    this[extensions$] = extensions;
    if (!(appBarElevation >= 0.0)) dart.assertFailed("AppBar elevation must be >= 0.", I[3], 300, 16, "appBarElevation >= 0.0");
    if (!(bottomAppBarElevation >= 0.0)) dart.assertFailed("Bottom AppBar elevation must be >= 0.", I[3], 301, 16, "bottomAppBarElevation >= 0.0");
    ;
  }).prototype = flex_color_scheme.FlexColorScheme.prototype;
  dart.addTypeTests(flex_color_scheme.FlexColorScheme);
  dart.addTypeCaches(flex_color_scheme.FlexColorScheme);
  dart.setMethodSignature(flex_color_scheme.FlexColorScheme, () => ({
    __proto__: dart.getMethods(flex_color_scheme.FlexColorScheme.__proto__),
    copyWith: dart.fnType(flex_color_scheme.FlexColorScheme, [], {appBarBackground: dart.nullable(ui.Color), appBarElevation: dart.nullable(core.double), applyElevationOverlayColor: dart.nullable(core.bool), background: dart.nullable(ui.Color), bottomAppBarElevation: dart.nullable(core.double), brightness: dart.nullable(ui.Brightness), colorScheme: dart.nullable(color_scheme.ColorScheme), dialogBackground: dart.nullable(ui.Color), error: dart.nullable(ui.Color), extensions: dart.nullable(core.Iterable$(theme_data.ThemeExtension)), fontFamily: dart.nullable(core.String), onBackground: dart.nullable(ui.Color), onError: dart.nullable(ui.Color), onPrimary: dart.nullable(ui.Color), onPrimaryContainer: dart.nullable(ui.Color), onSecondary: dart.nullable(ui.Color), onSecondaryContainer: dart.nullable(ui.Color), onSurface: dart.nullable(ui.Color), onTertiary: dart.nullable(ui.Color), onTertiaryContainer: dart.nullable(ui.Color), platform: dart.nullable(platform.TargetPlatform), primary: dart.nullable(ui.Color), primaryContainer: dart.nullable(ui.Color), primaryTextTheme: dart.nullable(text_theme.TextTheme), scaffoldBackground: dart.nullable(ui.Color), secondary: dart.nullable(ui.Color), secondaryContainer: dart.nullable(ui.Color), subThemesData: dart.nullable(flex_sub_themes_data.FlexSubThemesData), surface: dart.nullable(ui.Color), surfaceTint: dart.nullable(ui.Color), tabBarStyle: dart.nullable(flex_color_scheme.FlexTabBarStyle), tertiary: dart.nullable(ui.Color), tertiaryContainer: dart.nullable(ui.Color), textTheme: dart.nullable(text_theme.TextTheme), tooltipsMatchBackground: dart.nullable(core.bool), transparentStatusBar: dart.nullable(core.bool), typography: dart.nullable(typography.Typography), useMaterial3: dart.nullable(core.bool), visualDensity: dart.nullable(theme_data.VisualDensity)}, {})
  }));
  dart.setStaticMethodSignature(flex_color_scheme.FlexColorScheme, () => ['light', 'dark', 'themedSystemNavigationBar', 'createPrimarySwatch', '_inversePrimary', '_outlineColor']);
  dart.setGetterSignature(flex_color_scheme.FlexColorScheme, () => ({
    __proto__: dart.getGetters(flex_color_scheme.FlexColorScheme.__proto__),
    toTheme: theme_data.ThemeData,
    toScheme: color_scheme.ColorScheme
  }));
  dart.setStaticGetterSignature(flex_color_scheme.FlexColorScheme, () => ['comfortablePlatformDensity']);
  dart.setLibraryUri(flex_color_scheme.FlexColorScheme, I[2]);
  dart.setFieldSignature(flex_color_scheme.FlexColorScheme, () => ({
    __proto__: dart.getFields(flex_color_scheme.FlexColorScheme.__proto__),
    colorScheme: dart.finalFieldType(dart.nullable(color_scheme.ColorScheme)),
    brightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    primary: dart.finalFieldType(dart.nullable(ui.Color)),
    primaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    secondary: dart.finalFieldType(dart.nullable(ui.Color)),
    secondaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    tertiary: dart.finalFieldType(dart.nullable(ui.Color)),
    tertiaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    error: dart.finalFieldType(dart.nullable(ui.Color)),
    surface: dart.finalFieldType(dart.nullable(ui.Color)),
    background: dart.finalFieldType(dart.nullable(ui.Color)),
    scaffoldBackground: dart.finalFieldType(dart.nullable(ui.Color)),
    dialogBackground: dart.finalFieldType(dart.nullable(ui.Color)),
    appBarBackground: dart.finalFieldType(dart.nullable(ui.Color)),
    onPrimary: dart.finalFieldType(dart.nullable(ui.Color)),
    onPrimaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    onSecondary: dart.finalFieldType(dart.nullable(ui.Color)),
    onSecondaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    onTertiary: dart.finalFieldType(dart.nullable(ui.Color)),
    onTertiaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    onSurface: dart.finalFieldType(dart.nullable(ui.Color)),
    onBackground: dart.finalFieldType(dart.nullable(ui.Color)),
    onError: dart.finalFieldType(dart.nullable(ui.Color)),
    surfaceTint: dart.finalFieldType(dart.nullable(ui.Color)),
    tabBarStyle: dart.finalFieldType(flex_color_scheme.FlexTabBarStyle),
    appBarElevation: dart.finalFieldType(core.double),
    bottomAppBarElevation: dart.finalFieldType(core.double),
    tooltipsMatchBackground: dart.finalFieldType(core.bool),
    transparentStatusBar: dart.finalFieldType(core.bool),
    visualDensity: dart.finalFieldType(dart.nullable(theme_data.VisualDensity)),
    textTheme: dart.finalFieldType(dart.nullable(text_theme.TextTheme)),
    primaryTextTheme: dart.finalFieldType(dart.nullable(text_theme.TextTheme)),
    fontFamily: dart.finalFieldType(dart.nullable(core.String)),
    platform: dart.finalFieldType(dart.nullable(platform.TargetPlatform)),
    typography: dart.finalFieldType(dart.nullable(typography.Typography)),
    applyElevationOverlayColor: dart.finalFieldType(core.bool),
    subThemesData: dart.finalFieldType(dart.nullable(flex_sub_themes_data.FlexSubThemesData)),
    useMaterial3: dart.finalFieldType(core.bool),
    extensions: dart.finalFieldType(dart.nullable(core.Iterable$(theme_data.ThemeExtension)))
  }));
  dart.defineExtensionMethods(flex_color_scheme.FlexColorScheme, ['_equals']);
  dart.defineExtensionAccessors(flex_color_scheme.FlexColorScheme, ['hashCode']);
  dart.trackLibraries("packages/flex_color_scheme/src/flex_sub_themes_data.dart", {
    "package:flex_color_scheme/src/flex_sub_themes_data.dart": flex_sub_themes_data,
    "package:flex_color_scheme/src/flex_sub_themes.dart": flex_sub_themes,
    "package:flex_color_scheme/src/flex_color_scheme.dart": flex_color_scheme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_sub_themes_data.dart","flex_sub_themes.dart","flex_color_scheme.dart"],"names":[],"mappings":"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B,+BAA+B,mCACpC,AAAM,AAAmC,KAApC,uCACD,2CACJ,AAAM,AAA+B,KAAhC,mCACD,uCACJ,AAAM,AAAoC,KAArC,wCACD,4CACJ,AAAM,AAAsB,KAAvB,2BAA0B,8BAC/B,AAAM,AAAwB,KAAzB,6BAA4B,gCACjC,AAAM,AAAwB,KAAzB,4BAA4B,gCACjC,AAAM,AAA6B,KAA9B,iCAAiC;IAC5C;;AAIoB,YAAO,qBAAiB,yBACtC,yBACA,mBACA,oBACA,yBAEA,qBACA,mBAEA,oBACA,oBACA,oBAEA,uBACA,sBACA,uBACA,2BACA,8BACA,2BACA,0BAEA,4BACA,gCACA,yCACA,gCACA,uCACA,gCACA,+BAEA,wBACA,0BACA,uBACA,gCAEA,2BACA,gCACA,6BACA,8BACA,+BACA,uCACA,6CAEA,gBACA,kBACA,qBAEA,iBACA,sBAEA,iBACA,oBAEA,sBACA,yBACA,uBAEA,mBACA,sBACA,kCACA,6BAEA,wBACA,oCAEA,kCACA,wBAEA,4BACA,iCAEA,wBACA,2BACA,gCAEA,wCACA,2CACA,6CACA,kDACA,oDACA,8CACA,0CACA,4CACA,iDACA,mDACA,6CACA,+CACA,iCACA,mCACA,4CACA,8CACA,8BACA,yCAEA,kCACA,qCACA,uCACA,4CACA,8CACA,wCACA,oCACA,sCACA,2CACA,6CACA,uCACA,wCACA,oCACA,yCACA,2BACA,0BACA,iCAEA,mCACA,sCACA,wCACA,6CACA,+CACA,yCACA,qCACA,uCACA,4CACA,8CACA,wCACA,iCACA,yCACA,qCACA,0CACA,4BACA,8BACA,8BACA;IACA;wBAI+C;AACd,MAA/B,0BAAoB,UAAU;AAEoC,MADxE,AAAW,UAAD,KACN,wCAA0B,sBAAsB;AACmB,MAAvE,AAAW,UAAD,KAAK,uCAAyB,iBAAiB;AACgB,MAAzE,AAAW,UAAD,KAAK,wCAA0B,iBAAiB;AAEc,MADxE,AAAW,UAAD,KACN,wCAA0B,sBAAsB;AACuB,MAA3E,AAAW,UAAD,KAAK,wCAA0B,kBAAkB;AACY,MAAvE,AAAW,UAAD,KAAK,wCAA0B,gBAAgB;AACkB,MAA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AGoC,MAFxC,AAAW,UAAD,KAAK,wCACX,sCACA;AAEkE,MADtE,AAAW,UAAD,KAAK,mCACX,kCAAkC;AAEoC,MAD1E,AAAW,UAAD,KAAK,mCACX,oCAAoC;AAGG,MAF3C,AAAW,UAAD,KAAK,wCACX,yCACA;AAGyC,MAF7C,AAAW,UAAD,KAAK,wCACX,2CACA;AAGmC,MAFvC,AAAW,UAAD,KAAK,wCACX,qCACA;AAE0D,MAD9D,AAAW,UAAD,KAAK,wCACX,8BAA8B;AAGM,MAFxC,AAAW,UAAD,KAAK,+CACX,sCACA;AAEkE,MADtE,AAAW,UAAD,KAAK,0CACX,kCAAkC;AAGG,MAFzC,AAAW,UAAD,KAAK,+CACX,uCACA;AAEgD,MADpD,AAAW,UAAD,KAAK,0CACX,yBAAyB;AAE2B,MADxD,AAAW,UAAD,KAAK,0CACX,2BAA2B;AAEyB,MADxD,AAAW,UAAD,KAAK,oDACX,2BAA2B;AAEmC,MADlE,AAAW,UAAD,KAAK,0CACX,gCAAgC;IACtC;;;QAj+EO;QACA;QACA;QACA;QAEA;QACA;QAEA;QAEA;QACA;QACA;QACA;QAEA;QACA;QACA;QACA;QACA;QAEA;QACA;QACA;QACA;QACA;QACA;QACA;QAEA;QACA;QACA;QACA;QAEA;QACA;QACA;QACA;QACA;QACA;QACA;QAEA;QACA;QACA;QACA;QACA;QAEA;QACA;QAEA;QACA;QACA;QAEA;QACA;QACA;QACA;QACA;QACA;QAEA;QACA;QAEA;QACA;QAEA;QACA;QACA;QAEA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QAEA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QAGA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAhIA;IACA;IACA;IACA;IAEA;IACA;IAEA;IAEA;IACA;IACA;IACA;IAEA;IACA;IACA;IACA;IACA;IAEA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pD,AAAW,UAAD,KAAK,0CACX,yBAAyB;AAE2B,MADxD,AAAW,UAAD,KAAK,wCACX,2BAA2B;AAEmB,MADlD,AAAW,UAAD,KAAK,wCACX,wBAAwB;AAC+C,MAA3E,AAAW,UAAD,KAAK,0CAA4B,iBAAiB;AACU,MAAtE,AAAW,UAAD,KAAK,6CAA+B,aAAa;AAEc,MADzE,AAAW,UAAD,KACN,6CAA+B,oBAAoB;AACc,MAArE,AAAW,UAAD,KAAK,0CAA4B,cAAc;AACS,MAAlE,AAAW,UAAD,KAAK,2CAA6B,YAAY;AACiB,MAAzE,AAAW,UAAD,KAAK,8CAAgC,cAAc;AAEC,MAD9D,AAAW,UAAD,KAAK,wCACX,8BAA8B;AAEyC,MAD3E,AAAW,UAAD,KACN,qDAAuC,iBAAiB;AACW,MAAvE,AAAW,UAAD,KAAK,wCAA0B,gBAAgB;AAEe,MADxE,AAAW,UAAD,KACN,+CAA0C,cAAc;IAC9D;;;QAt8LO;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAtCA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,AAAgB,eAAD,IAAI,wBAAK;UACxB,AAAsB,qBAAD,IAAI,wBAC5B;;EAAwC","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_sub_themes_data.dart.lib.js"}');
  // Exports:
  return {
    src__flex_sub_themes_data: flex_sub_themes_data,
    src__flex_sub_themes: flex_sub_themes,
    src__flex_color_scheme: flex_color_scheme
  };
}));

//# sourceMappingURL=flex_sub_themes_data.dart.lib.js.map
