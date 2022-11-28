define(['dart_sdk', 'packages/flutter/src/material/icon_button.dart', 'packages/flex_color_scheme/src/flex_extensions.dart', 'packages/flutter/src/material/colors.dart', 'packages/flex_color_scheme/src/flex_scheme_data.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flex_color_scheme__src__flex_scheme_on_colors_dart(dart_sdk, packages__flutter__src__material__icon_button$46dart, packages__flex_color_scheme__src__flex_extensions$46dart, packages__flutter__src__material__colors$46dart, packages__flex_color_scheme__src__flex_scheme_data$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const flex_extensions = packages__flex_color_scheme__src__flex_extensions$46dart.src__flex_extensions;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const flex_color = packages__flex_color_scheme__src__flex_scheme_data$46dart.src__flex_color;
  const colors$ = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var flex_scheme_on_colors = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flex_color_scheme/src/flex_scheme_on_colors.dart"];
  var onPrimary$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onPrimary");
  var onPrimaryContainer$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onPrimaryContainer");
  var onSecondary$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onSecondary");
  var onSecondaryContainer$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onSecondaryContainer");
  var onTertiary$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onTertiary");
  var onTertiaryContainer$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onTertiaryContainer");
  var onSurface$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onSurface");
  var onSurfaceVariant$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onSurfaceVariant");
  var onInverseSurface$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onInverseSurface");
  var onBackground$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onBackground");
  var onError$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onError");
  var onErrorContainer$ = dart.privateName(flex_scheme_on_colors, "FlexSchemeOnColors.onErrorContainer");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  flex_scheme_on_colors.FlexSchemeOnColors = class FlexSchemeOnColors extends Object_Diagnosticable$36 {
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
    get onSurfaceVariant() {
      return this[onSurfaceVariant$];
    }
    set onSurfaceVariant(value) {
      super.onSurfaceVariant = value;
    }
    get onInverseSurface() {
      return this[onInverseSurface$];
    }
    set onInverseSurface(value) {
      super.onInverseSurface = value;
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
    get onErrorContainer() {
      return this[onErrorContainer$];
    }
    set onErrorContainer(value) {
      super.onErrorContainer = value;
    }
    static ['_#new#tearOff'](opts) {
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onSurfaceVariant = opts && 'onSurfaceVariant' in opts ? opts.onSurfaceVariant : null;
      let onInverseSurface = opts && 'onInverseSurface' in opts ? opts.onInverseSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onErrorContainer = opts && 'onErrorContainer' in opts ? opts.onErrorContainer : null;
      return new flex_scheme_on_colors.FlexSchemeOnColors.new({onPrimary: onPrimary, onPrimaryContainer: onPrimaryContainer, onSecondary: onSecondary, onSecondaryContainer: onSecondaryContainer, onTertiary: onTertiary, onTertiaryContainer: onTertiaryContainer, onSurface: onSurface, onSurfaceVariant: onSurfaceVariant, onInverseSurface: onInverseSurface, onBackground: onBackground, onError: onError, onErrorContainer: onErrorContainer});
    }
    static from(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t1, t1$, t1$0, t0$5, t0$6, t0$7, t0$8, t0$9, t1$1, t1$2, t1$3, t1$4, t1$5, t0$10;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let surfaceVariant = opts && 'surfaceVariant' in opts ? opts.surfaceVariant : null;
      let inverseSurface = opts && 'inverseSurface' in opts ? opts.inverseSurface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let errorContainer = opts && 'errorContainer' in opts ? opts.errorContainer : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onSurfaceVariant = opts && 'onSurfaceVariant' in opts ? opts.onSurfaceVariant : null;
      let onInverseSurface = opts && 'onInverseSurface' in opts ? opts.onInverseSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onErrorContainer = opts && 'onErrorContainer' in opts ? opts.onErrorContainer : null;
      let primaryAlpha = opts && 'primaryAlpha' in opts ? opts.primaryAlpha : 0;
      let primaryContainerAlpha = opts && 'primaryContainerAlpha' in opts ? opts.primaryContainerAlpha : 0;
      let secondaryAlpha = opts && 'secondaryAlpha' in opts ? opts.secondaryAlpha : 0;
      let secondaryContainerAlpha = opts && 'secondaryContainerAlpha' in opts ? opts.secondaryContainerAlpha : 0;
      let tertiaryAlpha = opts && 'tertiaryAlpha' in opts ? opts.tertiaryAlpha : 0;
      let tertiaryContainerAlpha = opts && 'tertiaryContainerAlpha' in opts ? opts.tertiaryContainerAlpha : 0;
      let surfaceAlpha = opts && 'surfaceAlpha' in opts ? opts.surfaceAlpha : 0;
      let surfaceVariantAlpha = opts && 'surfaceVariantAlpha' in opts ? opts.surfaceVariantAlpha : 0;
      let inverseSurfaceAlpha = opts && 'inverseSurfaceAlpha' in opts ? opts.inverseSurfaceAlpha : 0;
      let backgroundAlpha = opts && 'backgroundAlpha' in opts ? opts.backgroundAlpha : 0;
      let errorAlpha = opts && 'errorAlpha' in opts ? opts.errorAlpha : 0;
      let errorContainerAlpha = opts && 'errorContainerAlpha' in opts ? opts.errorContainerAlpha : 0;
      let usedOnPrimary = (t0 = onPrimary, t0 == null ? theme_data.ThemeData.estimateBrightnessForColor(primary) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, flex_extensions['FlexColorExtensions|brighten'](primary, 20), primaryAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, flex_extensions['FlexColorExtensions|brighten'](primary, 20), primaryAlpha) : t0);
      let usedOnPrimaryContainer = (t0$ = onPrimaryContainer, t0$ == null ? primaryContainer == null ? null : theme_data.ThemeData.estimateBrightnessForColor(primaryContainer) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, flex_extensions['FlexColorExtensions|brighten'](primaryContainer, 22), primaryContainerAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, flex_extensions['FlexColorExtensions|brighten'](primaryContainer, 8), primaryContainerAlpha) : t0$);
      let usedOnSecondary = (t0$0 = onSecondary, t0$0 == null ? theme_data.ThemeData.estimateBrightnessForColor(secondary) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, flex_extensions['FlexColorExtensions|brighten'](secondary, 20), secondaryAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, flex_extensions['FlexColorExtensions|brighten'](secondary, 20), secondaryAlpha) : t0$0);
      let usedOnSecondaryContainer = (t0$1 = onSecondaryContainer, t0$1 == null ? secondaryContainer == null ? null : theme_data.ThemeData.estimateBrightnessForColor(secondaryContainer) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, flex_extensions['FlexColorExtensions|brighten'](secondaryContainer, 22), secondaryContainerAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, flex_extensions['FlexColorExtensions|brighten'](secondaryContainer, 8), secondaryContainerAlpha) : t0$1);
      let usedOnTertiary = (t0$2 = onTertiary, t0$2 == null ? tertiary == null ? null : theme_data.ThemeData.estimateBrightnessForColor(tertiary) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, flex_extensions['FlexColorExtensions|brighten'](tertiary, 20), tertiaryAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, flex_extensions['FlexColorExtensions|brighten'](tertiary, 20), tertiaryAlpha) : t0$2);
      let usedOnTertiaryContainer = (t0$3 = onTertiaryContainer, t0$3 == null ? tertiaryContainer == null ? null : theme_data.ThemeData.estimateBrightnessForColor(tertiaryContainer) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, flex_extensions['FlexColorExtensions|brighten'](tertiaryContainer, 22), tertiaryContainerAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, flex_extensions['FlexColorExtensions|brighten'](tertiaryContainer, 8), tertiaryContainerAlpha) : t0$3);
      let usedOnSurface = (t0$4 = onSurface, t0$4 == null ? theme_data.ThemeData.estimateBrightnessForColor(surface) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, surface, surfaceAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, surface, surfaceAlpha) : t0$4);
      let usedOnSurfaceVariant = (t0$5 = onSurfaceVariant, t0$5 == null ? theme_data.ThemeData.estimateBrightnessForColor((t1 = surfaceVariant, t1 == null ? surface : t1)) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, (t1$ = surfaceVariant, t1$ == null ? surface : t1$), surfaceVariantAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, (t1$0 = surfaceVariant, t1$0 == null ? surface : t1$0), surfaceVariantAlpha) : t0$5);
      let invSurface = (t0$6 = inverseSurface, t0$6 == null ? theme_data.ThemeData.estimateBrightnessForColor(surface) === ui.Brightness.dark ? colors.Colors.white : colors.Colors.black : t0$6);
      let usedOnInverseSurface = (t0$7 = onInverseSurface, t0$7 == null ? theme_data.ThemeData.estimateBrightnessForColor(invSurface) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, invSurface, inverseSurfaceAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, invSurface, inverseSurfaceAlpha) : t0$7);
      let usedOnBackground = (t0$8 = onBackground, t0$8 == null ? theme_data.ThemeData.estimateBrightnessForColor(background) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, background, backgroundAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, background, backgroundAlpha) : t0$8);
      let usedOnError = (t0$9 = onError, t0$9 == null ? flex_scheme_on_colors.FlexSchemeOnColors.estimateErrorBrightness(error) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, flex_extensions['FlexColorExtensions|brighten'](error, 20), errorAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, flex_extensions['FlexColorExtensions|brighten'](error, 20), errorAlpha) : t0$9);
      let usedOnErrorContainer = (t0$10 = onErrorContainer, t0$10 == null ? flex_scheme_on_colors.FlexSchemeOnColors.estimateErrorBrightness((t1$1 = errorContainer, t1$1 == null ? error : t1$1)) === ui.Brightness.dark ? flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.white, (t1$3 = (t1$2 = errorContainer, t1$2 == null ? null : flex_extensions['FlexColorExtensions|brighten'](t1$2, 22)), t1$3 == null ? flex_extensions['FlexColorExtensions|brighten'](error, 20) : t1$3), errorContainerAlpha) : flex_extensions['FlexColorExtensions|blendAlpha'](colors.Colors.black, (t1$5 = (t1$4 = errorContainer, t1$4 == null ? null : flex_extensions['FlexColorExtensions|brighten'](t1$4, 8)), t1$5 == null ? flex_extensions['FlexColorExtensions|brighten'](error, 20) : t1$5), errorContainerAlpha) : t0$10);
      return new flex_scheme_on_colors.FlexSchemeOnColors.new({onPrimary: usedOnPrimary, onPrimaryContainer: usedOnPrimaryContainer, onSecondary: usedOnSecondary, onSecondaryContainer: usedOnSecondaryContainer, onTertiary: usedOnTertiary, onTertiaryContainer: usedOnTertiaryContainer, onSurface: usedOnSurface, onSurfaceVariant: usedOnSurfaceVariant, onInverseSurface: usedOnInverseSurface, onBackground: usedOnBackground, onError: usedOnError, onErrorContainer: usedOnErrorContainer});
    }
    static ['_#from#tearOff'](opts) {
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let surfaceVariant = opts && 'surfaceVariant' in opts ? opts.surfaceVariant : null;
      let inverseSurface = opts && 'inverseSurface' in opts ? opts.inverseSurface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let errorContainer = opts && 'errorContainer' in opts ? opts.errorContainer : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onSurfaceVariant = opts && 'onSurfaceVariant' in opts ? opts.onSurfaceVariant : null;
      let onInverseSurface = opts && 'onInverseSurface' in opts ? opts.onInverseSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onErrorContainer = opts && 'onErrorContainer' in opts ? opts.onErrorContainer : null;
      let primaryAlpha = opts && 'primaryAlpha' in opts ? opts.primaryAlpha : 0;
      let primaryContainerAlpha = opts && 'primaryContainerAlpha' in opts ? opts.primaryContainerAlpha : 0;
      let secondaryAlpha = opts && 'secondaryAlpha' in opts ? opts.secondaryAlpha : 0;
      let secondaryContainerAlpha = opts && 'secondaryContainerAlpha' in opts ? opts.secondaryContainerAlpha : 0;
      let tertiaryAlpha = opts && 'tertiaryAlpha' in opts ? opts.tertiaryAlpha : 0;
      let tertiaryContainerAlpha = opts && 'tertiaryContainerAlpha' in opts ? opts.tertiaryContainerAlpha : 0;
      let surfaceAlpha = opts && 'surfaceAlpha' in opts ? opts.surfaceAlpha : 0;
      let surfaceVariantAlpha = opts && 'surfaceVariantAlpha' in opts ? opts.surfaceVariantAlpha : 0;
      let inverseSurfaceAlpha = opts && 'inverseSurfaceAlpha' in opts ? opts.inverseSurfaceAlpha : 0;
      let backgroundAlpha = opts && 'backgroundAlpha' in opts ? opts.backgroundAlpha : 0;
      let errorAlpha = opts && 'errorAlpha' in opts ? opts.errorAlpha : 0;
      let errorContainerAlpha = opts && 'errorContainerAlpha' in opts ? opts.errorContainerAlpha : 0;
      return flex_scheme_on_colors.FlexSchemeOnColors.from({primary: primary, primaryContainer: primaryContainer, secondary: secondary, secondaryContainer: secondaryContainer, tertiary: tertiary, tertiaryContainer: tertiaryContainer, surface: surface, surfaceVariant: surfaceVariant, inverseSurface: inverseSurface, background: background, error: error, errorContainer: errorContainer, onPrimary: onPrimary, onPrimaryContainer: onPrimaryContainer, onSecondary: onSecondary, onSecondaryContainer: onSecondaryContainer, onTertiary: onTertiary, onTertiaryContainer: onTertiaryContainer, onSurface: onSurface, onSurfaceVariant: onSurfaceVariant, onInverseSurface: onInverseSurface, onBackground: onBackground, onError: onError, onErrorContainer: onErrorContainer, primaryAlpha: primaryAlpha, primaryContainerAlpha: primaryContainerAlpha, secondaryAlpha: secondaryAlpha, secondaryContainerAlpha: secondaryContainerAlpha, tertiaryAlpha: tertiaryAlpha, tertiaryContainerAlpha: tertiaryContainerAlpha, surfaceAlpha: surfaceAlpha, surfaceVariantAlpha: surfaceVariantAlpha, inverseSurfaceAlpha: inverseSurfaceAlpha, backgroundAlpha: backgroundAlpha, errorAlpha: errorAlpha, errorContainerAlpha: errorContainerAlpha});
    }
    static estimateErrorBrightness(color) {
      if (color._equals(flex_color.FlexColor.materialDarkError)) return ui.Brightness.light;
      if (color._equals(flex_color.FlexColor.materialDarkErrorHc)) return ui.Brightness.light;
      if (color._equals(flex_color.FlexColor.materialLightError)) return ui.Brightness.dark;
      if (color._equals(flex_color.FlexColor.materialLightErrorHc)) return ui.Brightness.dark;
      return theme_data.ThemeData.estimateBrightnessForColor(color);
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let onSurfaceVariant = opts && 'onSurfaceVariant' in opts ? opts.onSurfaceVariant : null;
      let onInverseSurface = opts && 'onInverseSurface' in opts ? opts.onInverseSurface : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onErrorContainer = opts && 'onErrorContainer' in opts ? opts.onErrorContainer : null;
      return new flex_scheme_on_colors.FlexSchemeOnColors.new({onPrimary: (t0 = onPrimary, t0 == null ? this.onPrimary : t0), onPrimaryContainer: (t0$ = onPrimaryContainer, t0$ == null ? this.onPrimaryContainer : t0$), onSecondary: (t0$0 = onSecondary, t0$0 == null ? this.onSecondary : t0$0), onSecondaryContainer: (t0$1 = onSecondaryContainer, t0$1 == null ? this.onSecondaryContainer : t0$1), onTertiary: (t0$2 = onTertiary, t0$2 == null ? this.onTertiary : t0$2), onTertiaryContainer: (t0$3 = onTertiaryContainer, t0$3 == null ? this.onTertiaryContainer : t0$3), onSurface: (t0$4 = onSurface, t0$4 == null ? this.onSurface : t0$4), onSurfaceVariant: (t0$5 = onSurfaceVariant, t0$5 == null ? this.onSurfaceVariant : t0$5), onInverseSurface: (t0$6 = onInverseSurface, t0$6 == null ? this.onInverseSurface : t0$6), onBackground: (t0$7 = onBackground, t0$7 == null ? this.onBackground : t0$7), onError: (t0$8 = onError, t0$8 == null ? this.onError : t0$8), onErrorContainer: (t0$9 = onErrorContainer, t0$9 == null ? this.onErrorContainer : t0$9)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return flex_scheme_on_colors.FlexSchemeOnColors.is(other) && other.onPrimary._equals(this.onPrimary) && dart.equals(other.onPrimaryContainer, this.onPrimaryContainer) && other.onSecondary._equals(this.onSecondary) && dart.equals(other.onSecondaryContainer, this.onSecondaryContainer) && dart.equals(other.onTertiary, this.onTertiary) && dart.equals(other.onTertiaryContainer, this.onTertiaryContainer) && other.onSurface._equals(this.onSurface) && dart.equals(other.onSurfaceVariant, this.onSurfaceVariant) && dart.equals(other.onInverseSurface, this.onInverseSurface) && other.onBackground._equals(this.onBackground) && other.onError._equals(this.onError) && dart.equals(other.onErrorContainer, this.onErrorContainer);
    }
    get hashCode() {
      return core.Object.hash(this.onPrimary, this.onPrimaryContainer, this.onSecondary, this.onSecondaryContainer, this.onTertiary, this.onTertiaryContainer, this.onSurface, this.onSurfaceVariant, this.onInverseSurface, this.onBackground, this.onError, this.onErrorContainer);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new colors$.ColorProperty.new("onPrimary", this.onPrimary));
      properties.add(new colors$.ColorProperty.new("onPrimaryContainer", this.onPrimaryContainer));
      properties.add(new colors$.ColorProperty.new("onSecondary", this.onSecondary));
      properties.add(new colors$.ColorProperty.new("onSecondaryContainer", this.onSecondaryContainer));
      properties.add(new colors$.ColorProperty.new("onTertiary", this.onTertiary));
      properties.add(new colors$.ColorProperty.new("onTertiaryContainer", this.onTertiaryContainer));
      properties.add(new colors$.ColorProperty.new("onSurface", this.onSurface));
      properties.add(new colors$.ColorProperty.new("onSurfaceVariant", this.onSurfaceVariant));
      properties.add(new colors$.ColorProperty.new("onInverseSurface", this.onInverseSurface));
      properties.add(new colors$.ColorProperty.new("onBackground", this.onBackground));
      properties.add(new colors$.ColorProperty.new("onError", this.onError));
      properties.add(new colors$.ColorProperty.new("onErrorContainer", this.onErrorContainer));
    }
  };
  (flex_scheme_on_colors.FlexSchemeOnColors.new = function(opts) {
    let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
    let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
    let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
    let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
    let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
    let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
    let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
    let onSurfaceVariant = opts && 'onSurfaceVariant' in opts ? opts.onSurfaceVariant : null;
    let onInverseSurface = opts && 'onInverseSurface' in opts ? opts.onInverseSurface : null;
    let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onErrorContainer = opts && 'onErrorContainer' in opts ? opts.onErrorContainer : null;
    this[onPrimary$] = onPrimary;
    this[onPrimaryContainer$] = onPrimaryContainer;
    this[onSecondary$] = onSecondary;
    this[onSecondaryContainer$] = onSecondaryContainer;
    this[onTertiary$] = onTertiary;
    this[onTertiaryContainer$] = onTertiaryContainer;
    this[onSurface$] = onSurface;
    this[onSurfaceVariant$] = onSurfaceVariant;
    this[onInverseSurface$] = onInverseSurface;
    this[onBackground$] = onBackground;
    this[onError$] = onError;
    this[onErrorContainer$] = onErrorContainer;
    ;
  }).prototype = flex_scheme_on_colors.FlexSchemeOnColors.prototype;
  dart.addTypeTests(flex_scheme_on_colors.FlexSchemeOnColors);
  dart.addTypeCaches(flex_scheme_on_colors.FlexSchemeOnColors);
  dart.setMethodSignature(flex_scheme_on_colors.FlexSchemeOnColors, () => ({
    __proto__: dart.getMethods(flex_scheme_on_colors.FlexSchemeOnColors.__proto__),
    copyWith: dart.fnType(flex_scheme_on_colors.FlexSchemeOnColors, [], {onBackground: dart.nullable(ui.Color), onError: dart.nullable(ui.Color), onErrorContainer: dart.nullable(ui.Color), onInverseSurface: dart.nullable(ui.Color), onPrimary: dart.nullable(ui.Color), onPrimaryContainer: dart.nullable(ui.Color), onSecondary: dart.nullable(ui.Color), onSecondaryContainer: dart.nullable(ui.Color), onSurface: dart.nullable(ui.Color), onSurfaceVariant: dart.nullable(ui.Color), onTertiary: dart.nullable(ui.Color), onTertiaryContainer: dart.nullable(ui.Color)}, {})
  }));
  dart.setStaticMethodSignature(flex_scheme_on_colors.FlexSchemeOnColors, () => ['from', 'estimateErrorBrightness']);
  dart.setLibraryUri(flex_scheme_on_colors.FlexSchemeOnColors, I[0]);
  dart.setFieldSignature(flex_scheme_on_colors.FlexSchemeOnColors, () => ({
    __proto__: dart.getFields(flex_scheme_on_colors.FlexSchemeOnColors.__proto__),
    onPrimary: dart.finalFieldType(ui.Color),
    onPrimaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    onSecondary: dart.finalFieldType(ui.Color),
    onSecondaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    onTertiary: dart.finalFieldType(dart.nullable(ui.Color)),
    onTertiaryContainer: dart.finalFieldType(dart.nullable(ui.Color)),
    onSurface: dart.finalFieldType(ui.Color),
    onSurfaceVariant: dart.finalFieldType(dart.nullable(ui.Color)),
    onInverseSurface: dart.finalFieldType(dart.nullable(ui.Color)),
    onBackground: dart.finalFieldType(ui.Color),
    onError: dart.finalFieldType(ui.Color),
    onErrorContainer: dart.finalFieldType(dart.nullable(ui.Color))
  }));
  dart.defineExtensionMethods(flex_scheme_on_colors.FlexSchemeOnColors, ['_equals']);
  dart.defineExtensionAccessors(flex_scheme_on_colors.FlexSchemeOnColors, ['hashCode']);
  dart.trackLibraries("packages/flex_color_scheme/src/flex_scheme_on_colors.dart", {
    "package:flex_color_scheme/src/flex_scheme_on_colors.dart": flex_scheme_on_colors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_scheme_on_colors.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_scheme_on_colors.dart.lib.js"}');
  // Exports:
  return {
    src__flex_scheme_on_colors: flex_scheme_on_colors
  };
}));

//# sourceMappingURL=flex_scheme_on_colors.dart.lib.js.map
