define(['dart_sdk', 'packages/flex_seed_scheme/src/flex_core_palette.dart', 'packages/flex_seed_scheme/src/flex_tones.dart', 'packages/flutter/src/material/icon_button.dart'], (function load__packages__flex_seed_scheme__src__flex_seed_scheme_dart(dart_sdk, packages__flex_seed_scheme__src__flex_core_palette$46dart, packages__flex_seed_scheme__src__flex_tones$46dart, packages__flutter__src__material__icon_button$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flex_core_palette = packages__flex_seed_scheme__src__flex_core_palette$46dart.src__flex_core_palette;
  const flex_tones = packages__flex_seed_scheme__src__flex_tones$46dart.src__flex_tones;
  const color_scheme = packages__flutter__src__material__icon_button$46dart.src__material__color_scheme;
  var flex_seed_scheme = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:flex_seed_scheme/src/flex_seed_scheme.dart"];
  var primary$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.primary");
  var onPrimary$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onPrimary");
  var primaryContainer$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.primaryContainer");
  var onPrimaryContainer$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onPrimaryContainer");
  var secondary$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.secondary");
  var onSecondary$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onSecondary");
  var secondaryContainer$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.secondaryContainer");
  var onSecondaryContainer$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onSecondaryContainer");
  var tertiary$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.tertiary");
  var onTertiary$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onTertiary");
  var tertiaryContainer$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.tertiaryContainer");
  var onTertiaryContainer$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onTertiaryContainer");
  var error$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.error");
  var onError$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onError");
  var errorContainer$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.errorContainer");
  var onErrorContainer$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onErrorContainer");
  var background$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.background");
  var onBackground$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onBackground");
  var surface$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.surface");
  var onSurface$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onSurface");
  var surfaceVariant$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.surfaceVariant");
  var onSurfaceVariant$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onSurfaceVariant");
  var outline$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.outline");
  var outlineVariant$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.outlineVariant");
  var shadow$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.shadow");
  var scrim$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.scrim");
  var inverseSurface$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.inverseSurface");
  var onInverseSurface$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.onInverseSurface");
  var inversePrimary$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.inversePrimary");
  var surfaceTint$ = dart.privateName(flex_seed_scheme, "FlexSeedScheme.surfaceTint");
  flex_seed_scheme.FlexSeedScheme = class FlexSeedScheme extends core.Object {
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get onPrimary() {
      return this[onPrimary$];
    }
    set onPrimary(value) {
      super.onPrimary = value;
    }
    get primaryContainer() {
      return this[primaryContainer$];
    }
    set primaryContainer(value) {
      super.primaryContainer = value;
    }
    get onPrimaryContainer() {
      return this[onPrimaryContainer$];
    }
    set onPrimaryContainer(value) {
      super.onPrimaryContainer = value;
    }
    get secondary() {
      return this[secondary$];
    }
    set secondary(value) {
      super.secondary = value;
    }
    get onSecondary() {
      return this[onSecondary$];
    }
    set onSecondary(value) {
      super.onSecondary = value;
    }
    get secondaryContainer() {
      return this[secondaryContainer$];
    }
    set secondaryContainer(value) {
      super.secondaryContainer = value;
    }
    get onSecondaryContainer() {
      return this[onSecondaryContainer$];
    }
    set onSecondaryContainer(value) {
      super.onSecondaryContainer = value;
    }
    get tertiary() {
      return this[tertiary$];
    }
    set tertiary(value) {
      super.tertiary = value;
    }
    get onTertiary() {
      return this[onTertiary$];
    }
    set onTertiary(value) {
      super.onTertiary = value;
    }
    get tertiaryContainer() {
      return this[tertiaryContainer$];
    }
    set tertiaryContainer(value) {
      super.tertiaryContainer = value;
    }
    get onTertiaryContainer() {
      return this[onTertiaryContainer$];
    }
    set onTertiaryContainer(value) {
      super.onTertiaryContainer = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get onError() {
      return this[onError$];
    }
    set onError(value) {
      super.onError = value;
    }
    get errorContainer() {
      return this[errorContainer$];
    }
    set errorContainer(value) {
      super.errorContainer = value;
    }
    get onErrorContainer() {
      return this[onErrorContainer$];
    }
    set onErrorContainer(value) {
      super.onErrorContainer = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get onBackground() {
      return this[onBackground$];
    }
    set onBackground(value) {
      super.onBackground = value;
    }
    get surface() {
      return this[surface$];
    }
    set surface(value) {
      super.surface = value;
    }
    get onSurface() {
      return this[onSurface$];
    }
    set onSurface(value) {
      super.onSurface = value;
    }
    get surfaceVariant() {
      return this[surfaceVariant$];
    }
    set surfaceVariant(value) {
      super.surfaceVariant = value;
    }
    get onSurfaceVariant() {
      return this[onSurfaceVariant$];
    }
    set onSurfaceVariant(value) {
      super.onSurfaceVariant = value;
    }
    get outline() {
      return this[outline$];
    }
    set outline(value) {
      super.outline = value;
    }
    get outlineVariant() {
      return this[outlineVariant$];
    }
    set outlineVariant(value) {
      super.outlineVariant = value;
    }
    get shadow() {
      return this[shadow$];
    }
    set shadow(value) {
      super.shadow = value;
    }
    get scrim() {
      return this[scrim$];
    }
    set scrim(value) {
      super.scrim = value;
    }
    get inverseSurface() {
      return this[inverseSurface$];
    }
    set inverseSurface(value) {
      super.inverseSurface = value;
    }
    get onInverseSurface() {
      return this[onInverseSurface$];
    }
    set onInverseSurface(value) {
      super.onInverseSurface = value;
    }
    get inversePrimary() {
      return this[inversePrimary$];
    }
    set inversePrimary(value) {
      super.inversePrimary = value;
    }
    get surfaceTint() {
      return this[surfaceTint$];
    }
    set surfaceTint(value) {
      super.surfaceTint = value;
    }
    static ['_#_#tearOff'](opts) {
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
      let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
      let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
      let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
      let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
      let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let errorContainer = opts && 'errorContainer' in opts ? opts.errorContainer : null;
      let onErrorContainer = opts && 'onErrorContainer' in opts ? opts.onErrorContainer : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let surfaceVariant = opts && 'surfaceVariant' in opts ? opts.surfaceVariant : null;
      let onSurfaceVariant = opts && 'onSurfaceVariant' in opts ? opts.onSurfaceVariant : null;
      let outline = opts && 'outline' in opts ? opts.outline : null;
      let outlineVariant = opts && 'outlineVariant' in opts ? opts.outlineVariant : null;
      let shadow = opts && 'shadow' in opts ? opts.shadow : null;
      let scrim = opts && 'scrim' in opts ? opts.scrim : null;
      let inverseSurface = opts && 'inverseSurface' in opts ? opts.inverseSurface : null;
      let onInverseSurface = opts && 'onInverseSurface' in opts ? opts.onInverseSurface : null;
      let inversePrimary = opts && 'inversePrimary' in opts ? opts.inversePrimary : null;
      let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
      return new flex_seed_scheme.FlexSeedScheme.__({primary: primary, onPrimary: onPrimary, primaryContainer: primaryContainer, onPrimaryContainer: onPrimaryContainer, secondary: secondary, onSecondary: onSecondary, secondaryContainer: secondaryContainer, onSecondaryContainer: onSecondaryContainer, tertiary: tertiary, onTertiary: onTertiary, tertiaryContainer: tertiaryContainer, onTertiaryContainer: onTertiaryContainer, error: error, onError: onError, errorContainer: errorContainer, onErrorContainer: onErrorContainer, background: background, onBackground: onBackground, surface: surface, onSurface: onSurface, surfaceVariant: surfaceVariant, onSurfaceVariant: onSurfaceVariant, outline: outline, outlineVariant: outlineVariant, shadow: shadow, scrim: scrim, inverseSurface: inverseSurface, onInverseSurface: onInverseSurface, inversePrimary: inversePrimary, surfaceTint: surfaceTint});
    }
    static _tones(opts) {
      let primaryKey = opts && 'primaryKey' in opts ? opts.primaryKey : null;
      let secondaryKey = opts && 'secondaryKey' in opts ? opts.secondaryKey : null;
      let tertiaryKey = opts && 'tertiaryKey' in opts ? opts.tertiaryKey : null;
      let tones = opts && 'tones' in opts ? opts.tones : null;
      let core = flex_core_palette.FlexCorePalette.fromSeeds({primary: primaryKey, secondary: secondaryKey, tertiary: tertiaryKey, primaryChroma: tones.primaryChroma, primaryMinChroma: tones.primaryMinChroma, secondaryChroma: tones.secondaryChroma, secondaryMinChroma: tones.secondaryMinChroma, tertiaryChroma: tones.tertiaryChroma, tertiaryMinChroma: tones.tertiaryMinChroma, neutralChroma: tones.neutralChroma, neutralVariantChroma: tones.neutralVariantChroma});
      return new flex_seed_scheme.FlexSeedScheme.__({primary: core.primary.get(tones.primaryTone), onPrimary: core.primary.get(tones.onPrimaryTone), primaryContainer: core.primary.get(tones.primaryContainerTone), onPrimaryContainer: core.primary.get(tones.onPrimaryContainerTone), secondary: core.secondary.get(tones.secondaryTone), onSecondary: core.secondary.get(tones.onSecondaryTone), secondaryContainer: core.secondary.get(tones.secondaryContainerTone), onSecondaryContainer: core.secondary.get(tones.onSecondaryContainerTone), tertiary: core.tertiary.get(tones.tertiaryTone), onTertiary: core.tertiary.get(tones.onTertiaryTone), tertiaryContainer: core.tertiary.get(tones.tertiaryContainerTone), onTertiaryContainer: core.tertiary.get(tones.onTertiaryContainerTone), error: core.error.get(tones.errorTone), onError: core.error.get(tones.onErrorTone), errorContainer: core.error.get(tones.errorContainerTone), onErrorContainer: core.error.get(tones.onErrorContainerTone), background: core.neutral.get(tones.backgroundTone), onBackground: core.neutral.get(tones.onBackgroundTone), surface: core.neutral.get(tones.surfaceTone), onSurface: core.neutral.get(tones.onSurfaceTone), surfaceVariant: core.neutralVariant.get(tones.surfaceVariantTone), onSurfaceVariant: core.neutralVariant.get(tones.onSurfaceVariantTone), outline: core.neutralVariant.get(tones.outlineTone), outlineVariant: core.neutralVariant.get(tones.outlineVariantTone), shadow: core.neutral.get(tones.shadowTone), scrim: core.neutral.get(tones.scrimTone), inverseSurface: core.neutral.get(tones.inverseSurfaceTone), onInverseSurface: core.neutral.get(tones.onInverseSurfaceTone), inversePrimary: core.primary.get(tones.inversePrimaryTone), surfaceTint: core.primary.get(tones.surfaceTintTone)});
    }
    static ['_#_tones#tearOff'](opts) {
      let primaryKey = opts && 'primaryKey' in opts ? opts.primaryKey : null;
      let secondaryKey = opts && 'secondaryKey' in opts ? opts.secondaryKey : null;
      let tertiaryKey = opts && 'tertiaryKey' in opts ? opts.tertiaryKey : null;
      let tones = opts && 'tones' in opts ? opts.tones : null;
      return flex_seed_scheme.FlexSeedScheme._tones({primaryKey: primaryKey, secondaryKey: secondaryKey, tertiaryKey: tertiaryKey, tones: tones});
    }
  };
  (flex_seed_scheme.FlexSeedScheme.__ = function(opts) {
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
    let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
    let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
    let secondary = opts && 'secondary' in opts ? opts.secondary : null;
    let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
    let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
    let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
    let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
    let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
    let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
    let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let errorContainer = opts && 'errorContainer' in opts ? opts.errorContainer : null;
    let onErrorContainer = opts && 'onErrorContainer' in opts ? opts.onErrorContainer : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
    let surface = opts && 'surface' in opts ? opts.surface : null;
    let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
    let surfaceVariant = opts && 'surfaceVariant' in opts ? opts.surfaceVariant : null;
    let onSurfaceVariant = opts && 'onSurfaceVariant' in opts ? opts.onSurfaceVariant : null;
    let outline = opts && 'outline' in opts ? opts.outline : null;
    let outlineVariant = opts && 'outlineVariant' in opts ? opts.outlineVariant : null;
    let shadow = opts && 'shadow' in opts ? opts.shadow : null;
    let scrim = opts && 'scrim' in opts ? opts.scrim : null;
    let inverseSurface = opts && 'inverseSurface' in opts ? opts.inverseSurface : null;
    let onInverseSurface = opts && 'onInverseSurface' in opts ? opts.onInverseSurface : null;
    let inversePrimary = opts && 'inversePrimary' in opts ? opts.inversePrimary : null;
    let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
    this[primary$] = primary;
    this[onPrimary$] = onPrimary;
    this[primaryContainer$] = primaryContainer;
    this[onPrimaryContainer$] = onPrimaryContainer;
    this[secondary$] = secondary;
    this[onSecondary$] = onSecondary;
    this[secondaryContainer$] = secondaryContainer;
    this[onSecondaryContainer$] = onSecondaryContainer;
    this[tertiary$] = tertiary;
    this[onTertiary$] = onTertiary;
    this[tertiaryContainer$] = tertiaryContainer;
    this[onTertiaryContainer$] = onTertiaryContainer;
    this[error$] = error;
    this[onError$] = onError;
    this[errorContainer$] = errorContainer;
    this[onErrorContainer$] = onErrorContainer;
    this[background$] = background;
    this[onBackground$] = onBackground;
    this[surface$] = surface;
    this[onSurface$] = onSurface;
    this[surfaceVariant$] = surfaceVariant;
    this[onSurfaceVariant$] = onSurfaceVariant;
    this[outline$] = outline;
    this[outlineVariant$] = outlineVariant;
    this[shadow$] = shadow;
    this[scrim$] = scrim;
    this[inverseSurface$] = inverseSurface;
    this[onInverseSurface$] = onInverseSurface;
    this[inversePrimary$] = inversePrimary;
    this[surfaceTint$] = surfaceTint;
    ;
  }).prototype = flex_seed_scheme.FlexSeedScheme.prototype;
  dart.addTypeTests(flex_seed_scheme.FlexSeedScheme);
  dart.addTypeCaches(flex_seed_scheme.FlexSeedScheme);
  dart.setStaticMethodSignature(flex_seed_scheme.FlexSeedScheme, () => ['_tones']);
  dart.setLibraryUri(flex_seed_scheme.FlexSeedScheme, I[0]);
  dart.setFieldSignature(flex_seed_scheme.FlexSeedScheme, () => ({
    __proto__: dart.getFields(flex_seed_scheme.FlexSeedScheme.__proto__),
    primary: dart.finalFieldType(core.int),
    onPrimary: dart.finalFieldType(core.int),
    primaryContainer: dart.finalFieldType(core.int),
    onPrimaryContainer: dart.finalFieldType(core.int),
    secondary: dart.finalFieldType(core.int),
    onSecondary: dart.finalFieldType(core.int),
    secondaryContainer: dart.finalFieldType(core.int),
    onSecondaryContainer: dart.finalFieldType(core.int),
    tertiary: dart.finalFieldType(core.int),
    onTertiary: dart.finalFieldType(core.int),
    tertiaryContainer: dart.finalFieldType(core.int),
    onTertiaryContainer: dart.finalFieldType(core.int),
    error: dart.finalFieldType(core.int),
    onError: dart.finalFieldType(core.int),
    errorContainer: dart.finalFieldType(core.int),
    onErrorContainer: dart.finalFieldType(core.int),
    background: dart.finalFieldType(core.int),
    onBackground: dart.finalFieldType(core.int),
    surface: dart.finalFieldType(core.int),
    onSurface: dart.finalFieldType(core.int),
    surfaceVariant: dart.finalFieldType(core.int),
    onSurfaceVariant: dart.finalFieldType(core.int),
    outline: dart.finalFieldType(core.int),
    outlineVariant: dart.finalFieldType(core.int),
    shadow: dart.finalFieldType(core.int),
    scrim: dart.finalFieldType(core.int),
    inverseSurface: dart.finalFieldType(core.int),
    onInverseSurface: dart.finalFieldType(core.int),
    inversePrimary: dart.finalFieldType(core.int),
    surfaceTint: dart.finalFieldType(core.int)
  }));
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  flex_seed_scheme['SeedColorScheme|fromSeeds'] = function SeedColorScheme$124fromSeeds(opts) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23, t0$24, t0$25, t0$26, t0$27, t0$28, t0$29, t0$30, t0$31;
    let brightness = opts && 'brightness' in opts ? opts.brightness : C[0] || CT.C0;
    let primaryKey = opts && 'primaryKey' in opts ? opts.primaryKey : null;
    let secondaryKey = opts && 'secondaryKey' in opts ? opts.secondaryKey : null;
    let tertiaryKey = opts && 'tertiaryKey' in opts ? opts.tertiaryKey : null;
    let tones = opts && 'tones' in opts ? opts.tones : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
    let primaryContainer = opts && 'primaryContainer' in opts ? opts.primaryContainer : null;
    let onPrimaryContainer = opts && 'onPrimaryContainer' in opts ? opts.onPrimaryContainer : null;
    let secondary = opts && 'secondary' in opts ? opts.secondary : null;
    let onSecondary = opts && 'onSecondary' in opts ? opts.onSecondary : null;
    let secondaryContainer = opts && 'secondaryContainer' in opts ? opts.secondaryContainer : null;
    let onSecondaryContainer = opts && 'onSecondaryContainer' in opts ? opts.onSecondaryContainer : null;
    let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
    let onTertiary = opts && 'onTertiary' in opts ? opts.onTertiary : null;
    let tertiaryContainer = opts && 'tertiaryContainer' in opts ? opts.tertiaryContainer : null;
    let onTertiaryContainer = opts && 'onTertiaryContainer' in opts ? opts.onTertiaryContainer : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let errorContainer = opts && 'errorContainer' in opts ? opts.errorContainer : null;
    let onErrorContainer = opts && 'onErrorContainer' in opts ? opts.onErrorContainer : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let onBackground = opts && 'onBackground' in opts ? opts.onBackground : null;
    let surface = opts && 'surface' in opts ? opts.surface : null;
    let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
    let surfaceVariant = opts && 'surfaceVariant' in opts ? opts.surfaceVariant : null;
    let onSurfaceVariant = opts && 'onSurfaceVariant' in opts ? opts.onSurfaceVariant : null;
    let outline = opts && 'outline' in opts ? opts.outline : null;
    let outlineVariant = opts && 'outlineVariant' in opts ? opts.outlineVariant : null;
    let shadow = opts && 'shadow' in opts ? opts.shadow : null;
    let scrim = opts && 'scrim' in opts ? opts.scrim : null;
    let inverseSurface = opts && 'inverseSurface' in opts ? opts.inverseSurface : null;
    let onInverseSurface = opts && 'onInverseSurface' in opts ? opts.onInverseSurface : null;
    let inversePrimary = opts && 'inversePrimary' in opts ? opts.inversePrimary : null;
    let surfaceTint = opts && 'surfaceTint' in opts ? opts.surfaceTint : null;
    let scheme = brightness === ui.Brightness.light ? flex_seed_scheme.FlexSeedScheme._tones({primaryKey: primaryKey.value, secondaryKey: (t0 = secondaryKey, t0 == null ? null : t0.value), tertiaryKey: (t0$ = tertiaryKey, t0$ == null ? null : t0$.value), tones: (t0$0 = tones, t0$0 == null ? flex_tones.FlexTones.material(ui.Brightness.light) : t0$0)}) : flex_seed_scheme.FlexSeedScheme._tones({primaryKey: primaryKey.value, secondaryKey: (t0$1 = secondaryKey, t0$1 == null ? null : t0$1.value), tertiaryKey: (t0$2 = tertiaryKey, t0$2 == null ? null : t0$2.value), tones: (t0$3 = tones, t0$3 == null ? flex_tones.FlexTones.material(ui.Brightness.dark) : t0$3)});
    return new color_scheme.ColorScheme.new({primary: (t0$4 = primary, t0$4 == null ? new ui.Color.new(scheme.primary) : t0$4), onPrimary: (t0$5 = onPrimary, t0$5 == null ? new ui.Color.new(scheme.onPrimary) : t0$5), primaryContainer: (t0$6 = primaryContainer, t0$6 == null ? new ui.Color.new(scheme.primaryContainer) : t0$6), onPrimaryContainer: (t0$7 = onPrimaryContainer, t0$7 == null ? new ui.Color.new(scheme.onPrimaryContainer) : t0$7), secondary: (t0$8 = secondary, t0$8 == null ? new ui.Color.new(scheme.secondary) : t0$8), onSecondary: (t0$9 = onSecondary, t0$9 == null ? new ui.Color.new(scheme.onSecondary) : t0$9), secondaryContainer: (t0$10 = secondaryContainer, t0$10 == null ? new ui.Color.new(scheme.secondaryContainer) : t0$10), onSecondaryContainer: (t0$11 = onSecondaryContainer, t0$11 == null ? new ui.Color.new(scheme.onSecondaryContainer) : t0$11), tertiary: (t0$12 = tertiary, t0$12 == null ? new ui.Color.new(scheme.tertiary) : t0$12), onTertiary: (t0$13 = onTertiary, t0$13 == null ? new ui.Color.new(scheme.onTertiary) : t0$13), tertiaryContainer: (t0$14 = tertiaryContainer, t0$14 == null ? new ui.Color.new(scheme.tertiaryContainer) : t0$14), onTertiaryContainer: (t0$15 = onTertiaryContainer, t0$15 == null ? new ui.Color.new(scheme.onTertiaryContainer) : t0$15), error: (t0$16 = error, t0$16 == null ? new ui.Color.new(scheme.error) : t0$16), onError: (t0$17 = onError, t0$17 == null ? new ui.Color.new(scheme.onError) : t0$17), errorContainer: (t0$18 = errorContainer, t0$18 == null ? new ui.Color.new(scheme.errorContainer) : t0$18), onErrorContainer: (t0$19 = onErrorContainer, t0$19 == null ? new ui.Color.new(scheme.onErrorContainer) : t0$19), background: (t0$20 = background, t0$20 == null ? new ui.Color.new(scheme.background) : t0$20), onBackground: (t0$21 = onBackground, t0$21 == null ? new ui.Color.new(scheme.onBackground) : t0$21), surface: (t0$22 = surface, t0$22 == null ? new ui.Color.new(scheme.surface) : t0$22), onSurface: (t0$23 = onSurface, t0$23 == null ? new ui.Color.new(scheme.onSurface) : t0$23), surfaceVariant: (t0$24 = surfaceVariant, t0$24 == null ? new ui.Color.new(scheme.surfaceVariant) : t0$24), onSurfaceVariant: (t0$25 = onSurfaceVariant, t0$25 == null ? new ui.Color.new(scheme.onSurfaceVariant) : t0$25), outline: (t0$26 = outline, t0$26 == null ? new ui.Color.new(scheme.outline) : t0$26), shadow: (t0$27 = shadow, t0$27 == null ? new ui.Color.new(scheme.shadow) : t0$27), inverseSurface: (t0$28 = inverseSurface, t0$28 == null ? new ui.Color.new(scheme.inverseSurface) : t0$28), onInverseSurface: (t0$29 = onInverseSurface, t0$29 == null ? new ui.Color.new(scheme.onInverseSurface) : t0$29), inversePrimary: (t0$30 = inversePrimary, t0$30 == null ? new ui.Color.new(scheme.inversePrimary) : t0$30), surfaceTint: (t0$31 = surfaceTint, t0$31 == null ? new ui.Color.new(scheme.primary) : t0$31), brightness: brightness});
  };
  dart.trackLibraries("packages/flex_seed_scheme/src/flex_seed_scheme.dart", {
    "package:flex_seed_scheme/src/flex_seed_scheme.dart": flex_seed_scheme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_seed_scheme.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flex_seed_scheme/src/flex_seed_scheme.dart.lib.js"}');
  // Exports:
  return {
    src__flex_seed_scheme: flex_seed_scheme
  };
}));

//# sourceMappingURL=flex_seed_scheme.dart.lib.js.map
