define(['dart_sdk'], (function load__packages__flex_color_scheme__src__flex_surface_mode_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var flex_surface_mode = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "level",
        [_Enum_index]: 0
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
        [_Enum__name]: "highScaffoldLowSurfaces",
        [_Enum_index]: 6
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "levelSurfacesLowScaffoldVariantDialog",
        [_Enum_index]: 7
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "highScaffoldLowSurfacesVariantDialog",
        [_Enum_index]: 8
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: flex_surface_mode.FlexSurfaceMode.prototype,
        [_Enum__name]: "custom",
        [_Enum_index]: 9
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10], flex_surface_mode.FlexSurfaceMode);
    }
  }, false);
  var C = Array(11).fill(void 0);
  var I = ["package:flex_color_scheme/src/flex_surface_mode.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  flex_surface_mode.FlexSurfaceMode = class FlexSurfaceMode extends core._Enum {
    toString() {
      return "FlexSurfaceMode." + this[_name];
    }
  };
  (flex_surface_mode.FlexSurfaceMode.new = function(index, name) {
    flex_surface_mode.FlexSurfaceMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex_surface_mode.FlexSurfaceMode.prototype;
  dart.addTypeTests(flex_surface_mode.FlexSurfaceMode);
  dart.addTypeCaches(flex_surface_mode.FlexSurfaceMode);
  dart.setLibraryUri(flex_surface_mode.FlexSurfaceMode, I[0]);
  dart.setStaticFieldSignature(flex_surface_mode.FlexSurfaceMode, () => ['values', 'level', 'highBackgroundLowScaffold', 'highSurfaceLowScaffold', 'highScaffoldLowSurface', 'highScaffoldLevelSurface', 'levelSurfacesLowScaffold', 'highScaffoldLowSurfaces', 'levelSurfacesLowScaffoldVariantDialog', 'highScaffoldLowSurfacesVariantDialog', 'custom']);
  dart.defineExtensionMethods(flex_surface_mode.FlexSurfaceMode, ['toString']);
  dart.defineLazy(flex_surface_mode.FlexSurfaceMode, {
    /*flex_surface_mode.FlexSurfaceMode.values*/get values() {
      return C[0] || CT.C0;
    },
    /*flex_surface_mode.FlexSurfaceMode.level*/get level() {
      return C[1] || CT.C1;
    },
    /*flex_surface_mode.FlexSurfaceMode.highBackgroundLowScaffold*/get highBackgroundLowScaffold() {
      return C[2] || CT.C2;
    },
    /*flex_surface_mode.FlexSurfaceMode.highSurfaceLowScaffold*/get highSurfaceLowScaffold() {
      return C[3] || CT.C3;
    },
    /*flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurface*/get highScaffoldLowSurface() {
      return C[4] || CT.C4;
    },
    /*flex_surface_mode.FlexSurfaceMode.highScaffoldLevelSurface*/get highScaffoldLevelSurface() {
      return C[5] || CT.C5;
    },
    /*flex_surface_mode.FlexSurfaceMode.levelSurfacesLowScaffold*/get levelSurfacesLowScaffold() {
      return C[6] || CT.C6;
    },
    /*flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfaces*/get highScaffoldLowSurfaces() {
      return C[7] || CT.C7;
    },
    /*flex_surface_mode.FlexSurfaceMode.levelSurfacesLowScaffoldVariantDialog*/get levelSurfacesLowScaffoldVariantDialog() {
      return C[8] || CT.C8;
    },
    /*flex_surface_mode.FlexSurfaceMode.highScaffoldLowSurfacesVariantDialog*/get highScaffoldLowSurfacesVariantDialog() {
      return C[9] || CT.C9;
    },
    /*flex_surface_mode.FlexSurfaceMode.custom*/get custom() {
      return C[10] || CT.C10;
    }
  }, false);
  dart.trackLibraries("packages/flex_color_scheme/src/flex_surface_mode.dart", {
    "package:flex_color_scheme/src/flex_surface_mode.dart": flex_surface_mode
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_surface_mode.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8RA;;;;;;;;;;;;MArRK,wCAAM;;;MAiBT,uCAAK;;;MAsEL,2DAAyB;;;MA0BzB,wDAAsB;;;MA0BtB,wDAAsB;;;MA0BtB,0DAAwB;;;MAkBxB,0DAAwB;;;MAkBxB,yDAAuB;;;MAmCvB,uEAAqC;;;MAkCrC,sEAAoC;;;MAMpC,wCAAM","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_surface_mode.dart.lib.js"}');
  // Exports:
  return {
    src__flex_surface_mode: flex_surface_mode
  };
}));

//# sourceMappingURL=flex_surface_mode.dart.lib.js.map
