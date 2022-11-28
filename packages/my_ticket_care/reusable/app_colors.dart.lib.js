define(['dart_sdk'], (function load__packages__my_ticket_care__reusable__app_colors_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var app_colors = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281976763.0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280520841.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279505940.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286743170.0
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = ["package:my_ticket_care/reusable/app_colors.dart"];
  var Color_value = dart.privateName(ui, "Color.value");
  app_colors.AppColors = class AppColors extends core.Object {
    static ['_#new#tearOff']() {
      return new app_colors.AppColors.new();
    }
  };
  (app_colors.AppColors.new = function() {
    ;
  }).prototype = app_colors.AppColors.prototype;
  dart.addTypeTests(app_colors.AppColors);
  dart.addTypeCaches(app_colors.AppColors);
  dart.setLibraryUri(app_colors.AppColors, I[0]);
  dart.setStaticFieldSignature(app_colors.AppColors, () => ['primaryColor', 'secondaryColor', 'white', 'blackFont', 'hintText']);
  dart.defineLazy(app_colors.AppColors, {
    /*app_colors.AppColors.primaryColor*/get primaryColor() {
      return C[0] || CT.C0;
    },
    /*app_colors.AppColors.secondaryColor*/get secondaryColor() {
      return C[1] || CT.C1;
    },
    /*app_colors.AppColors.white*/get white() {
      return C[2] || CT.C2;
    },
    /*app_colors.AppColors.blackFont*/get blackFont() {
      return C[3] || CT.C3;
    },
    /*app_colors.AppColors.hintText*/get hintText() {
      return C[4] || CT.C4;
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/reusable/app_colors.dart", {
    "package:my_ticket_care/reusable/app_colors.dart": app_colors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_colors.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EASA;;;;;;MANe,iCAAY;;;MACZ,mCAAc;;;MAEd,0BAAK;;;MACL,8BAAS;;;MACT,6BAAQ","file":"../../../../../../../../../packages/my_ticket_care/reusable/app_colors.dart.lib.js"}');
  // Exports:
  return {
    reusable__app_colors: app_colors
  };
}));

//# sourceMappingURL=app_colors.dart.lib.js.map
