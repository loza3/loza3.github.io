define(['dart_sdk', 'packages/flex_color_scheme/src/flex_surface_mode.dart'], (function load__packages__flex_color_scheme__src__flex_alpha_values_dart(dart_sdk, packages__flex_color_scheme__src__flex_surface_mode$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flex_surface_mode = packages__flex_color_scheme__src__flex_surface_mode$46dart.src__flex_surface_mode;
  var flex_alpha_values = Object.create(dart.library);
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "level",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "custom",
        [_Enum_index]: 9
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "highBackgroundLowScaffold",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "highSurfaceLowScaffold",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "highScaffoldLowSurface",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "highScaffoldLevelSurface",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "levelSurfacesLowScaffold",
        [_Enum_index]: 5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "levelSurfacesLowScaffoldVariantDialog",
        [_Enum_index]: 7
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "highScaffoldLowSurfaces",
        [_Enum_index]: 6
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "highScaffoldLowSurfacesVariantDialog",
        [_Enum_index]: 8
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = ["package:flex_color_scheme/src/flex_alpha_values.dart"];
  var primaryAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.primaryAlpha");
  var primaryContainerAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.primaryContainerAlpha");
  var secondaryAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.secondaryAlpha");
  var secondaryContainerAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.secondaryContainerAlpha");
  var tertiaryAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.tertiaryAlpha");
  var tertiaryContainerAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.tertiaryContainerAlpha");
  var errorAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.errorAlpha");
  var errorContainerAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.errorContainerAlpha");
  var surfaceAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.surfaceAlpha");
  var surfaceVariantAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.surfaceVariantAlpha");
  var inverseSurfaceAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.inverseSurfaceAlpha");
  var dialogAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.dialogAlpha");
  var backgroundAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.backgroundAlpha");
  var scaffoldAlpha$ = dart.privateName(flex_alpha_values, "FlexAlphaValues.scaffoldAlpha");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  flex_alpha_values.FlexAlphaValues = class FlexAlphaValues extends core.Object {
    get primaryAlpha() {
      return this[primaryAlpha$];
    }
    set primaryAlpha(value) {
      super.primaryAlpha = value;
    }
    get primaryContainerAlpha() {
      return this[primaryContainerAlpha$];
    }
    set primaryContainerAlpha(value) {
      super.primaryContainerAlpha = value;
    }
    get secondaryAlpha() {
      return this[secondaryAlpha$];
    }
    set secondaryAlpha(value) {
      super.secondaryAlpha = value;
    }
    get secondaryContainerAlpha() {
      return this[secondaryContainerAlpha$];
    }
    set secondaryContainerAlpha(value) {
      super.secondaryContainerAlpha = value;
    }
    get tertiaryAlpha() {
      return this[tertiaryAlpha$];
    }
    set tertiaryAlpha(value) {
      super.tertiaryAlpha = value;
    }
    get tertiaryContainerAlpha() {
      return this[tertiaryContainerAlpha$];
    }
    set tertiaryContainerAlpha(value) {
      super.tertiaryContainerAlpha = value;
    }
    get errorAlpha() {
      return this[errorAlpha$];
    }
    set errorAlpha(value) {
      super.errorAlpha = value;
    }
    get errorContainerAlpha() {
      return this[errorContainerAlpha$];
    }
    set errorContainerAlpha(value) {
      super.errorContainerAlpha = value;
    }
    get surfaceAlpha() {
      return this[surfaceAlpha$];
    }
    set surfaceAlpha(value) {
      super.surfaceAlpha = value;
    }
    get surfaceVariantAlpha() {
      return this[surfaceVariantAlpha$];
    }
    set surfaceVariantAlpha(value) {
      super.surfaceVariantAlpha = value;
    }
    get inverseSurfaceAlpha() {
      return this[inverseSurfaceAlpha$];
    }
    set inverseSurfaceAlpha(value) {
      super.inverseSurfaceAlpha = value;
    }
    get dialogAlpha() {
      return this[dialogAlpha$];
    }
    set dialogAlpha(value) {
      super.dialogAlpha = value;
    }
    get backgroundAlpha() {
      return this[backgroundAlpha$];
    }
    set backgroundAlpha(value) {
      super.backgroundAlpha = value;
    }
    get scaffoldAlpha() {
      return this[scaffoldAlpha$];
    }
    set scaffoldAlpha(value) {
      super.scaffoldAlpha = value;
    }
    static ['_#new#tearOff'](opts) {
      let primaryAlpha = opts && 'primaryAlpha' in opts ? opts.primaryAlpha : 0;
      let primaryContainerAlpha = opts && 'primaryContainerAlpha' in opts ? opts.primaryContainerAlpha : 0;
      let secondaryAlpha = opts && 'secondaryAlpha' in opts ? opts.secondaryAlpha : 0;
      let secondaryContainerAlpha = opts && 'secondaryContainerAlpha' in opts ? opts.secondaryContainerAlpha : 0;
      let tertiaryAlpha = opts && 'tertiaryAlpha' in opts ? opts.tertiaryAlpha : 0;
      let tertiaryContainerAlpha = opts && 'tertiaryContainerAlpha' in opts ? opts.tertiaryContainerAlpha : 0;
      let errorAlpha = opts && 'errorAlpha' in opts ? opts.errorAlpha : 0;
      let errorContainerAlpha = opts && 'errorContainerAlpha' in opts ? opts.errorContainerAlpha : 0;
      let surfaceAlpha = opts && 'surfaceAlpha' in opts ? opts.surfaceAlpha : 0;
      let surfaceVariantAlpha = opts && 'surfaceVariantAlpha' in opts ? opts.surfaceVariantAlpha : 0;
      let inverseSurfaceAlpha = opts && 'inverseSurfaceAlpha' in opts ? opts.inverseSurfaceAlpha : 0;
      let dialogAlpha = opts && 'dialogAlpha' in opts ? opts.dialogAlpha : 0;
      let backgroundAlpha = opts && 'backgroundAlpha' in opts ? opts.backgroundAlpha : 0;
      let scaffoldAlpha = opts && 'scaffoldAlpha' in opts ? opts.scaffoldAlpha : 0;
      return new flex_alpha_values.FlexAlphaValues.new({primaryAlpha: primaryAlpha, primaryContainerAlpha: primaryContainerAlpha, secondaryAlpha: secondaryAlpha, secondaryContainerAlpha: secondaryContainerAlpha, tertiaryAlpha: tertiaryAlpha, tertiaryContainerAlpha: tertiaryContainerAlpha, errorAlpha: errorAlpha, errorContainerAlpha: errorContainerAlpha, surfaceAlpha: surfaceAlpha, surfaceVariantAlpha: surfaceVariantAlpha, inverseSurfaceAlpha: inverseSurfaceAlpha, dialogAlpha: dialogAlpha, backgroundAlpha: backgroundAlpha, scaffoldAlpha: scaffoldAlpha});
    }
    static getAlphas(mode, blendLevel) {
      switch (mode) {
        case C[0] || CT.C0:
        case C[1] || CT.C1:
          {
            return new flex_alpha_values.FlexAlphaValues.new({primaryAlpha: blendLevel, primaryContainerAlpha: blendLevel * 2, secondaryAlpha: blendLevel, secondaryContainerAlpha: blendLevel * 2, tertiaryAlpha: blendLevel, tertiaryContainerAlpha: blendLevel * 2, errorAlpha: blendLevel, errorContainerAlpha: blendLevel * 2, surfaceAlpha: blendLevel, surfaceVariantAlpha: blendLevel * 2, inverseSurfaceAlpha: blendLevel, dialogAlpha: blendLevel, backgroundAlpha: blendLevel, scaffoldAlpha: blendLevel});
          }
        case C[2] || CT.C2:
          {
            return new flex_alpha_values.FlexAlphaValues.new({primaryAlpha: blendLevel, primaryContainerAlpha: blendLevel * 2, secondaryAlpha: blendLevel, secondaryContainerAlpha: blendLevel * 2, tertiaryAlpha: blendLevel, tertiaryContainerAlpha: blendLevel * 2, errorAlpha: blendLevel, errorContainerAlpha: blendLevel * 2, surfaceAlpha: blendLevel, surfaceVariantAlpha: blendLevel * 2, inverseSurfaceAlpha: blendLevel, dialogAlpha: blendLevel, backgroundAlpha: (blendLevel * 3 / 2)[$truncate](), scaffoldAlpha: (blendLevel / 2)[$truncate]()});
          }
        case C[3] || CT.C3:
          {
            return new flex_alpha_values.FlexAlphaValues.new({primaryAlpha: blendLevel, primaryContainerAlpha: blendLevel * 2, secondaryAlpha: blendLevel, secondaryContainerAlpha: blendLevel * 2, tertiaryAlpha: blendLevel, tertiaryContainerAlpha: blendLevel * 2, errorAlpha: blendLevel, errorContainerAlpha: blendLevel * 2, surfaceAlpha: (blendLevel * 3 / 2)[$truncate](), surfaceVariantAlpha: ((blendLevel * 3 / 2)[$truncate]() * 3 / 2)[$truncate](), inverseSurfaceAlpha: (blendLevel * 3 / 2)[$truncate](), dialogAlpha: (blendLevel * 3 / 2)[$truncate](), backgroundAlpha: blendLevel, scaffoldAlpha: (blendLevel / 2)[$truncate]()});
          }
        case C[4] || CT.C4:
          {
            return new flex_alpha_values.FlexAlphaValues.new({primaryAlpha: blendLevel, primaryContainerAlpha: blendLevel * 2, secondaryAlpha: blendLevel, secondaryContainerAlpha: blendLevel * 2, tertiaryAlpha: blendLevel, tertiaryContainerAlpha: blendLevel * 2, errorAlpha: blendLevel, errorContainerAlpha: blendLevel * 2, surfaceAlpha: (blendLevel / 2)[$truncate](), surfaceVariantAlpha: (blendLevel / 2)[$truncate]() * 2, inverseSurfaceAlpha: (blendLevel / 2)[$truncate](), dialogAlpha: (blendLevel / 2)[$truncate](), backgroundAlpha: blendLevel, scaffoldAlpha: blendLevel * 3});
          }
        case C[5] || CT.C5:
          {
            return new flex_alpha_values.FlexAlphaValues.new({primaryAlpha: blendLevel, primaryContainerAlpha: blendLevel * 2, secondaryAlpha: blendLevel, secondaryContainerAlpha: blendLevel * 2, tertiaryAlpha: blendLevel, tertiaryContainerAlpha: blendLevel * 2, errorAlpha: blendLevel, errorContainerAlpha: blendLevel * 2, surfaceAlpha: blendLevel, surfaceVariantAlpha: blendLevel * 2, inverseSurfaceAlpha: blendLevel, dialogAlpha: blendLevel, backgroundAlpha: (blendLevel * 3 / 2)[$truncate](), scaffoldAlpha: blendLevel * 3});
          }
        case C[6] || CT.C6:
        case C[7] || CT.C7:
          {
            return new flex_alpha_values.FlexAlphaValues.new({primaryAlpha: blendLevel, primaryContainerAlpha: blendLevel * 2, secondaryAlpha: blendLevel, secondaryContainerAlpha: blendLevel * 2, tertiaryAlpha: blendLevel, tertiaryContainerAlpha: blendLevel * 2, errorAlpha: blendLevel, errorContainerAlpha: blendLevel * 2, surfaceAlpha: blendLevel, surfaceVariantAlpha: blendLevel * 2, inverseSurfaceAlpha: blendLevel, dialogAlpha: blendLevel, backgroundAlpha: blendLevel, scaffoldAlpha: (blendLevel / 2)[$truncate]()});
          }
        case C[8] || CT.C8:
        case C[9] || CT.C9:
          {
            return new flex_alpha_values.FlexAlphaValues.new({primaryAlpha: blendLevel, primaryContainerAlpha: blendLevel * 2, secondaryAlpha: blendLevel, secondaryContainerAlpha: blendLevel * 2, tertiaryAlpha: blendLevel, tertiaryContainerAlpha: blendLevel * 2, errorAlpha: blendLevel, errorContainerAlpha: blendLevel * 2, surfaceAlpha: (blendLevel / 2)[$truncate](), surfaceVariantAlpha: (blendLevel / 2)[$truncate]() * 2, inverseSurfaceAlpha: (blendLevel / 2)[$truncate](), dialogAlpha: (blendLevel / 2)[$truncate](), backgroundAlpha: (blendLevel / 2)[$truncate](), scaffoldAlpha: blendLevel * 3});
          }
      }
    }
    static ['_#getAlphas#tearOff'](mode, blendLevel) {
      return flex_alpha_values.FlexAlphaValues.getAlphas(mode, blendLevel);
    }
  };
  (flex_alpha_values.FlexAlphaValues.new = function(opts) {
    let primaryAlpha = opts && 'primaryAlpha' in opts ? opts.primaryAlpha : 0;
    let primaryContainerAlpha = opts && 'primaryContainerAlpha' in opts ? opts.primaryContainerAlpha : 0;
    let secondaryAlpha = opts && 'secondaryAlpha' in opts ? opts.secondaryAlpha : 0;
    let secondaryContainerAlpha = opts && 'secondaryContainerAlpha' in opts ? opts.secondaryContainerAlpha : 0;
    let tertiaryAlpha = opts && 'tertiaryAlpha' in opts ? opts.tertiaryAlpha : 0;
    let tertiaryContainerAlpha = opts && 'tertiaryContainerAlpha' in opts ? opts.tertiaryContainerAlpha : 0;
    let errorAlpha = opts && 'errorAlpha' in opts ? opts.errorAlpha : 0;
    let errorContainerAlpha = opts && 'errorContainerAlpha' in opts ? opts.errorContainerAlpha : 0;
    let surfaceAlpha = opts && 'surfaceAlpha' in opts ? opts.surfaceAlpha : 0;
    let surfaceVariantAlpha = opts && 'surfaceVariantAlpha' in opts ? opts.surfaceVariantAlpha : 0;
    let inverseSurfaceAlpha = opts && 'inverseSurfaceAlpha' in opts ? opts.inverseSurfaceAlpha : 0;
    let dialogAlpha = opts && 'dialogAlpha' in opts ? opts.dialogAlpha : 0;
    let backgroundAlpha = opts && 'backgroundAlpha' in opts ? opts.backgroundAlpha : 0;
    let scaffoldAlpha = opts && 'scaffoldAlpha' in opts ? opts.scaffoldAlpha : 0;
    this[primaryAlpha$] = primaryAlpha;
    this[primaryContainerAlpha$] = primaryContainerAlpha;
    this[secondaryAlpha$] = secondaryAlpha;
    this[secondaryContainerAlpha$] = secondaryContainerAlpha;
    this[tertiaryAlpha$] = tertiaryAlpha;
    this[tertiaryContainerAlpha$] = tertiaryContainerAlpha;
    this[errorAlpha$] = errorAlpha;
    this[errorContainerAlpha$] = errorContainerAlpha;
    this[surfaceAlpha$] = surfaceAlpha;
    this[surfaceVariantAlpha$] = surfaceVariantAlpha;
    this[inverseSurfaceAlpha$] = inverseSurfaceAlpha;
    this[dialogAlpha$] = dialogAlpha;
    this[backgroundAlpha$] = backgroundAlpha;
    this[scaffoldAlpha$] = scaffoldAlpha;
    ;
  }).prototype = flex_alpha_values.FlexAlphaValues.prototype;
  dart.addTypeTests(flex_alpha_values.FlexAlphaValues);
  dart.addTypeCaches(flex_alpha_values.FlexAlphaValues);
  dart.setStaticMethodSignature(flex_alpha_values.FlexAlphaValues, () => ['getAlphas']);
  dart.setLibraryUri(flex_alpha_values.FlexAlphaValues, I[0]);
  dart.setFieldSignature(flex_alpha_values.FlexAlphaValues, () => ({
    __proto__: dart.getFields(flex_alpha_values.FlexAlphaValues.__proto__),
    primaryAlpha: dart.finalFieldType(core.int),
    primaryContainerAlpha: dart.finalFieldType(core.int),
    secondaryAlpha: dart.finalFieldType(core.int),
    secondaryContainerAlpha: dart.finalFieldType(core.int),
    tertiaryAlpha: dart.finalFieldType(core.int),
    tertiaryContainerAlpha: dart.finalFieldType(core.int),
    errorAlpha: dart.finalFieldType(core.int),
    errorContainerAlpha: dart.finalFieldType(core.int),
    surfaceAlpha: dart.finalFieldType(core.int),
    surfaceVariantAlpha: dart.finalFieldType(core.int),
    inverseSurfaceAlpha: dart.finalFieldType(core.int),
    dialogAlpha: dart.finalFieldType(core.int),
    backgroundAlpha: dart.finalFieldType(core.int),
    scaffoldAlpha: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/flex_color_scheme/src/flex_alpha_values.dart", {
    "package:flex_color_scheme/src/flex_alpha_values.dart": flex_alpha_values
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_alpha_values.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_alpha_values.dart.lib.js"}');
  // Exports:
  return {
    src__flex_alpha_values: flex_alpha_values
  };
}));

//# sourceMappingURL=flex_alpha_values.dart.lib.js.map
