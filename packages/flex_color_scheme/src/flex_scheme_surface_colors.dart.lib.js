define(['dart_sdk', 'packages/flex_color_scheme/src/flex_surface_mode.dart', 'packages/flex_color_scheme/src/flex_scheme_data.dart', 'packages/flex_color_scheme/src/flex_alpha_values.dart', 'packages/flex_color_scheme/src/flex_extensions.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flex_color_scheme__src__flex_scheme_surface_colors_dart(dart_sdk, packages__flex_color_scheme__src__flex_surface_mode$46dart, packages__flex_color_scheme__src__flex_scheme_data$46dart, packages__flex_color_scheme__src__flex_alpha_values$46dart, packages__flex_color_scheme__src__flex_extensions$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flex_surface_mode = packages__flex_color_scheme__src__flex_surface_mode$46dart.src__flex_surface_mode;
  const flex_color = packages__flex_color_scheme__src__flex_scheme_data$46dart.src__flex_color;
  const flex_scheme_color = packages__flex_color_scheme__src__flex_scheme_data$46dart.src__flex_scheme_color;
  const flex_alpha_values = packages__flex_color_scheme__src__flex_alpha_values$46dart.src__flex_alpha_values;
  const flex_extensions = packages__flex_color_scheme__src__flex_extensions$46dart.src__flex_extensions;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var flex_scheme_surface_colors = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $runtimeType = dartx.runtimeType;
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
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "highBackgroundLowScaffold",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279374354.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype,
        [scaffoldBackground$]: C[3] || CT.C3,
        [background$]: C[3] || CT.C3,
        [dialogBackground$]: C[3] || CT.C3,
        [_inverseSurface]: C[4] || CT.C4,
        [_surfaceVariant]: C[3] || CT.C3,
        [surface$]: C[3] || CT.C3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype,
        [scaffoldBackground$]: C[4] || CT.C4,
        [background$]: C[4] || CT.C4,
        [dialogBackground$]: C[4] || CT.C4,
        [_inverseSurface]: C[3] || CT.C3,
        [_surfaceVariant]: C[4] || CT.C4,
        [surface$]: C[4] || CT.C4
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294835709.0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279308561.0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype,
        [scaffoldBackground$]: C[3] || CT.C3,
        [background$]: C[7] || CT.C7,
        [dialogBackground$]: C[3] || CT.C3,
        [_inverseSurface]: C[8] || CT.C8,
        [_surfaceVariant]: C[3] || CT.C3,
        [surface$]: C[3] || CT.C3
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279242768.0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype,
        [scaffoldBackground$]: C[4] || CT.C4,
        [background$]: C[10] || CT.C10,
        [dialogBackground$]: C[8] || CT.C8,
        [_inverseSurface]: C[3] || CT.C3,
        [_surfaceVariant]: C[8] || CT.C8,
        [surface$]: C[8] || CT.C8
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype,
        [scaffoldBackground$]: C[3] || CT.C3,
        [background$]: C[3] || CT.C3,
        [dialogBackground$]: C[3] || CT.C3,
        [_inverseSurface]: C[8] || CT.C8,
        [_surfaceVariant]: C[3] || CT.C3,
        [surface$]: C[3] || CT.C3
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype,
        [scaffoldBackground$]: C[8] || CT.C8,
        [background$]: C[8] || CT.C8,
        [dialogBackground$]: C[8] || CT.C8,
        [_inverseSurface]: C[3] || CT.C3,
        [_surfaceVariant]: C[8] || CT.C8,
        [surface$]: C[8] || CT.C8
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype,
        [scaffoldBackground$]: C[7] || CT.C7,
        [background$]: C[7] || CT.C7,
        [dialogBackground$]: C[7] || CT.C7,
        [_inverseSurface]: C[10] || CT.C10,
        [_surfaceVariant]: C[7] || CT.C7,
        [surface$]: C[7] || CT.C7
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype,
        [scaffoldBackground$]: C[10] || CT.C10,
        [background$]: C[10] || CT.C10,
        [dialogBackground$]: C[10] || CT.C10,
        [_inverseSurface]: C[7] || CT.C7,
        [_surfaceVariant]: C[10] || CT.C10,
        [surface$]: C[10] || CT.C10
      });
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flex_color_scheme-6.0.1/lib/src/flex_scheme_surface_colors.dart",
    "package:flex_color_scheme/src/flex_scheme_surface_colors.dart"
  ];
  var surface$ = dart.privateName(flex_scheme_surface_colors, "FlexSchemeSurfaceColors.surface");
  var _surfaceVariant = dart.privateName(flex_scheme_surface_colors, "FlexSchemeSurfaceColors._surfaceVariant");
  var _inverseSurface = dart.privateName(flex_scheme_surface_colors, "FlexSchemeSurfaceColors._inverseSurface");
  var dialogBackground$ = dart.privateName(flex_scheme_surface_colors, "FlexSchemeSurfaceColors.dialogBackground");
  var background$ = dart.privateName(flex_scheme_surface_colors, "FlexSchemeSurfaceColors.background");
  var scaffoldBackground$ = dart.privateName(flex_scheme_surface_colors, "FlexSchemeSurfaceColors.scaffoldBackground");
  var _surfaceVariant$ = dart.privateName(flex_scheme_surface_colors, "_surfaceVariant");
  var _inverseSurface$ = dart.privateName(flex_scheme_surface_colors, "_inverseSurface");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var Color_value = dart.privateName(ui, "Color.value");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  flex_scheme_surface_colors.FlexSchemeSurfaceColors = class FlexSchemeSurfaceColors extends Object_Diagnosticable$36 {
    get surface() {
      return this[surface$];
    }
    set surface(value) {
      super.surface = value;
    }
    get [_surfaceVariant$]() {
      return this[_surfaceVariant];
    }
    set [_surfaceVariant$](value) {
      super[_surfaceVariant$] = value;
    }
    get [_inverseSurface$]() {
      return this[_inverseSurface];
    }
    set [_inverseSurface$](value) {
      super[_inverseSurface$] = value;
    }
    get dialogBackground() {
      return this[dialogBackground$];
    }
    set dialogBackground(value) {
      super.dialogBackground = value;
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
    static ['_#new#tearOff'](opts) {
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let surfaceVariant = opts && 'surfaceVariant' in opts ? opts.surfaceVariant : null;
      let inverseSurface = opts && 'inverseSurface' in opts ? opts.inverseSurface : null;
      let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
      return new flex_scheme_surface_colors.FlexSchemeSurfaceColors.new({surface: surface, surfaceVariant: surfaceVariant, inverseSurface: inverseSurface, dialogBackground: dialogBackground, background: background, scaffoldBackground: scaffoldBackground});
    }
    get surfaceVariant() {
      let t0;
      t0 = this[_surfaceVariant$];
      return t0 == null ? this.surface : t0;
    }
    get inverseSurface() {
      let t0;
      t0 = this[_inverseSurface$];
      return t0 == null ? this.surface : t0;
    }
    static blend(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12;
      let brightness = opts && 'brightness' in opts ? opts.brightness : C[0] || CT.C0;
      let surfaceMode = opts && 'surfaceMode' in opts ? opts.surfaceMode : C[1] || CT.C1;
      let blendLevel = opts && 'blendLevel' in opts ? opts.blendLevel : 0;
      let surfaceVariantBlendDivide = opts && 'surfaceVariantBlendDivide' in opts ? opts.surfaceVariantBlendDivide : 1;
      let schemeColors = opts && 'schemeColors' in opts ? opts.schemeColors : null;
      let blendColors = opts && 'blendColors' in opts ? opts.blendColors : null;
      let surfaceColors = opts && 'surfaceColors' in opts ? opts.surfaceColors : null;
      if (!(blendLevel >= 0 && blendLevel <= 40)) dart.assertFailed("Only blend levels from 0 to 40 " + "are allowed. Very high alpha blend levels may not produce results " + "that are visually very appealing or useful.", I[0], 165, 9, "blendLevel >= 0 && blendLevel <= 40");
      let usedBlendLevel = blendLevel;
      if (blendLevel < 0 || blendLevel > 40) usedBlendLevel = 0;
      let isLight = brightness === ui.Brightness.light;
      let scheme = (t0 = schemeColors, t0 == null ? isLight ? flex_color.FlexColor.material.light : flex_color.FlexColor.material.dark : t0);
      let blendColor = (t0$ = blendColors, t0$ == null ? new flex_scheme_surface_colors.FlexSchemeSurfaceColors.new({surface: scheme.primary, surfaceVariant: scheme.primary, inverseSurface: scheme.primary, dialogBackground: scheme.primary, background: scheme.primary, scaffoldBackground: scheme.primary}) : t0$);
      if (surfaceMode === flex_surface_mode.FlexSurfaceMode.levelSurfacesLowScaffoldVariantDialog || surfaceMode === flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfacesVariantDialog) {
        blendColor = blendColor.copyWith({dialogBackground: scheme.tertiary});
      }
      let surface = (t0$0 = surfaceColors, t0$0 == null ? isLight ? C[2] || CT.C2 : C[5] || CT.C5 : t0$0);
      if (surfaceMode === flex_surface_mode.FlexSurfaceMode.highBackgroundLowScaffold || surfaceMode === flex_surface_mode.FlexSurfaceMode.highSurfaceLowScaffold || surfaceMode === flex_surface_mode.FlexSurfaceMode.highScaffoldLevelSurface) {
        if (usedBlendLevel === 0) {
          if (isLight) {
            surface = (t0$1 = surfaceColors, t0$1 == null ? C[2] || CT.C2 : t0$1);
          } else {
            surface = (t0$2 = surfaceColors, t0$2 == null ? C[5] || CT.C5 : t0$2);
          }
        } else {
          if (isLight) {
            surface = (t0$3 = surfaceColors, t0$3 == null ? C[6] || CT.C6 : t0$3);
          } else {
            surface = (t0$4 = surfaceColors, t0$4 == null ? C[9] || CT.C9 : t0$4);
          }
        }
      }
      if (surfaceMode === flex_surface_mode.FlexSurfaceMode.level || surfaceMode === flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurface || surfaceMode === flex_surface_mode.FlexSurfaceMode.levelSurfacesLowScaffold || surfaceMode === flex_surface_mode.FlexSurfaceMode.levelSurfacesLowScaffoldVariantDialog) {
        if (usedBlendLevel === 0) {
          if (isLight) {
            surface = (t0$5 = surfaceColors, t0$5 == null ? C[2] || CT.C2 : t0$5);
          } else {
            surface = (t0$6 = surfaceColors, t0$6 == null ? C[5] || CT.C5 : t0$6);
          }
        } else {
          if (isLight) {
            surface = (t0$7 = surfaceColors, t0$7 == null ? C[11] || CT.C11 : t0$7);
          } else {
            surface = (t0$8 = surfaceColors, t0$8 == null ? C[12] || CT.C12 : t0$8);
          }
        }
      }
      if (surfaceMode === flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfaces || surfaceMode === flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfacesVariantDialog) {
        if (usedBlendLevel === 0) {
          if (isLight) {
            surface = (t0$9 = surfaceColors, t0$9 == null ? C[2] || CT.C2 : t0$9);
          } else {
            surface = (t0$10 = surfaceColors, t0$10 == null ? C[5] || CT.C5 : t0$10);
          }
        } else {
          if (isLight) {
            surface = (t0$11 = surfaceColors, t0$11 == null ? C[13] || CT.C13 : t0$11);
          } else {
            surface = (t0$12 = surfaceColors, t0$12 == null ? C[14] || CT.C14 : t0$12);
          }
        }
      }
      let alphaValue = flex_alpha_values.FlexAlphaValues.getAlphas(surfaceMode, usedBlendLevel);
      return new flex_scheme_surface_colors.FlexSchemeSurfaceColors.new({surface: flex_extensions['FlexColorExtensions|blendAlpha'](surface.surface, blendColor.surface, alphaValue.surfaceAlpha), surfaceVariant: flex_extensions['FlexColorExtensions|blendAlpha'](surface.surfaceVariant, blendColor.surfaceVariant, (alphaValue.surfaceVariantAlpha / surfaceVariantBlendDivide)[$truncate]()), inverseSurface: flex_extensions['FlexColorExtensions|blendAlpha'](surface.inverseSurface, blendColor.inverseSurface, alphaValue.inverseSurfaceAlpha), dialogBackground: flex_extensions['FlexColorExtensions|blendAlpha'](surface.dialogBackground, blendColor.dialogBackground, alphaValue.dialogAlpha), background: flex_extensions['FlexColorExtensions|blendAlpha'](surface.background, blendColor.background, alphaValue.backgroundAlpha), scaffoldBackground: flex_extensions['FlexColorExtensions|blendAlpha'](surface.scaffoldBackground, blendColor.scaffoldBackground, alphaValue.scaffoldAlpha)});
    }
    static ['_#blend#tearOff'](opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : C[0] || CT.C0;
      let surfaceMode = opts && 'surfaceMode' in opts ? opts.surfaceMode : C[1] || CT.C1;
      let blendLevel = opts && 'blendLevel' in opts ? opts.blendLevel : 0;
      let surfaceVariantBlendDivide = opts && 'surfaceVariantBlendDivide' in opts ? opts.surfaceVariantBlendDivide : 1;
      let schemeColors = opts && 'schemeColors' in opts ? opts.schemeColors : null;
      let blendColors = opts && 'blendColors' in opts ? opts.blendColors : null;
      let surfaceColors = opts && 'surfaceColors' in opts ? opts.surfaceColors : null;
      return flex_scheme_surface_colors.FlexSchemeSurfaceColors.blend({brightness: brightness, surfaceMode: surfaceMode, blendLevel: blendLevel, surfaceVariantBlendDivide: surfaceVariantBlendDivide, schemeColors: schemeColors, blendColors: blendColors, surfaceColors: surfaceColors});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let surface = opts && 'surface' in opts ? opts.surface : null;
      let surfaceVariant = opts && 'surfaceVariant' in opts ? opts.surfaceVariant : null;
      let inverseSurface = opts && 'inverseSurface' in opts ? opts.inverseSurface : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
      let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
      return new flex_scheme_surface_colors.FlexSchemeSurfaceColors.new({surface: (t0 = surface, t0 == null ? this.surface : t0), surfaceVariant: (t0$ = surfaceVariant, t0$ == null ? this.surfaceVariant : t0$), inverseSurface: (t0$0 = inverseSurface, t0$0 == null ? this.inverseSurface : t0$0), background: (t0$1 = background, t0$1 == null ? this.background : t0$1), scaffoldBackground: (t0$2 = scaffoldBackground, t0$2 == null ? this.scaffoldBackground : t0$2), dialogBackground: (t0$3 = dialogBackground, t0$3 == null ? this.dialogBackground : t0$3)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return flex_scheme_surface_colors.FlexSchemeSurfaceColors.is(other) && other.surface._equals(this.surface) && other.surfaceVariant._equals(this.surfaceVariant) && other.inverseSurface._equals(this.inverseSurface) && other.background._equals(this.background) && other.scaffoldBackground._equals(this.scaffoldBackground) && other.dialogBackground._equals(this.dialogBackground);
    }
    get hashCode() {
      return core.Object.hash(this.surface, this.surfaceVariant, this.inverseSurface, this.background, this.scaffoldBackground, this.dialogBackground);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new colors.ColorProperty.new("surface", this.surface));
      properties.add(new colors.ColorProperty.new("surfaceVariant", this.surfaceVariant));
      properties.add(new colors.ColorProperty.new("inverseSurface", this.inverseSurface));
      properties.add(new colors.ColorProperty.new("background", this.background));
      properties.add(new colors.ColorProperty.new("scaffoldBackground", this.scaffoldBackground));
      properties.add(new colors.ColorProperty.new("dialogBackground", this.dialogBackground));
    }
  };
  (flex_scheme_surface_colors.FlexSchemeSurfaceColors.new = function(opts) {
    let surface = opts && 'surface' in opts ? opts.surface : null;
    let surfaceVariant = opts && 'surfaceVariant' in opts ? opts.surfaceVariant : null;
    let inverseSurface = opts && 'inverseSurface' in opts ? opts.inverseSurface : null;
    let dialogBackground = opts && 'dialogBackground' in opts ? opts.dialogBackground : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let scaffoldBackground = opts && 'scaffoldBackground' in opts ? opts.scaffoldBackground : null;
    this[surface$] = surface;
    this[dialogBackground$] = dialogBackground;
    this[background$] = background;
    this[scaffoldBackground$] = scaffoldBackground;
    this[_surfaceVariant] = surfaceVariant;
    this[_inverseSurface] = inverseSurface;
    ;
  }).prototype = flex_scheme_surface_colors.FlexSchemeSurfaceColors.prototype;
  dart.addTypeTests(flex_scheme_surface_colors.FlexSchemeSurfaceColors);
  dart.addTypeCaches(flex_scheme_surface_colors.FlexSchemeSurfaceColors);
  dart.setMethodSignature(flex_scheme_surface_colors.FlexSchemeSurfaceColors, () => ({
    __proto__: dart.getMethods(flex_scheme_surface_colors.FlexSchemeSurfaceColors.__proto__),
    copyWith: dart.fnType(flex_scheme_surface_colors.FlexSchemeSurfaceColors, [], {background: dart.nullable(ui.Color), dialogBackground: dart.nullable(ui.Color), inverseSurface: dart.nullable(ui.Color), scaffoldBackground: dart.nullable(ui.Color), surface: dart.nullable(ui.Color), surfaceVariant: dart.nullable(ui.Color)}, {})
  }));
  dart.setStaticMethodSignature(flex_scheme_surface_colors.FlexSchemeSurfaceColors, () => ['blend']);
  dart.setGetterSignature(flex_scheme_surface_colors.FlexSchemeSurfaceColors, () => ({
    __proto__: dart.getGetters(flex_scheme_surface_colors.FlexSchemeSurfaceColors.__proto__),
    surfaceVariant: ui.Color,
    inverseSurface: ui.Color
  }));
  dart.setLibraryUri(flex_scheme_surface_colors.FlexSchemeSurfaceColors, I[1]);
  dart.setFieldSignature(flex_scheme_surface_colors.FlexSchemeSurfaceColors, () => ({
    __proto__: dart.getFields(flex_scheme_surface_colors.FlexSchemeSurfaceColors.__proto__),
    surface: dart.finalFieldType(ui.Color),
    [_surfaceVariant$]: dart.finalFieldType(dart.nullable(ui.Color)),
    [_inverseSurface$]: dart.finalFieldType(dart.nullable(ui.Color)),
    dialogBackground: dart.finalFieldType(ui.Color),
    background: dart.finalFieldType(ui.Color),
    scaffoldBackground: dart.finalFieldType(ui.Color)
  }));
  dart.defineExtensionMethods(flex_scheme_surface_colors.FlexSchemeSurfaceColors, ['_equals']);
  dart.defineExtensionAccessors(flex_scheme_surface_colors.FlexSchemeSurfaceColors, ['hashCode']);
  dart.trackLibraries("packages/flex_color_scheme/src/flex_scheme_surface_colors.dart", {
    "package:flex_color_scheme/src/flex_scheme_surface_colors.dart": flex_scheme_surface_colors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_scheme_surface_colors.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_scheme_surface_colors.dart.lib.js"}');
  // Exports:
  return {
    src__flex_scheme_surface_colors: flex_scheme_surface_colors
  };
}));

//# sourceMappingURL=flex_scheme_surface_colors.dart.lib.js.map
