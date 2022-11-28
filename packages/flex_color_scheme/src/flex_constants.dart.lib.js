define(['dart_sdk', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flex_color_scheme__src__flex_constants_dart(dart_sdk, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var flex_constants = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 40,
        [OffsetBase__dx]: 40
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  dart.defineLazy(flex_constants, {
    /*flex_constants.kDarkenPrimaryContainer*/get kDarkenPrimaryContainer() {
      return 10;
    },
    /*flex_constants.kDarkenSecondary*/get kDarkenSecondary() {
      return 5;
    },
    /*flex_constants.kDarkenSecondaryContainerFromSecondary*/get kDarkenSecondaryContainerFromSecondary() {
      return 10;
    },
    /*flex_constants.kDarkenSecondaryContainer*/get kDarkenSecondaryContainer() {
      return 14;
    },
    /*flex_constants.kDrawerRadius*/get kDrawerRadius() {
      return 16;
    },
    /*flex_constants.kFabRadius*/get kFabRadius() {
      return 16;
    },
    /*flex_constants.kChipRadius*/get kChipRadius() {
      return 8;
    },
    /*flex_constants.kButtonRadius*/get kButtonRadius() {
      return 20;
    },
    /*flex_constants.kInputDecoratorRadius*/get kInputDecoratorRadius() {
      return 16;
    },
    /*flex_constants.kInputDecoratorM3Radius*/get kInputDecoratorM3Radius() {
      return 4;
    },
    /*flex_constants.kBottomSheetBorderRadius*/get kBottomSheetBorderRadius() {
      return 16;
    },
    /*flex_constants.kDialogRadius*/get kDialogRadius() {
      return 28;
    },
    /*flex_constants.kCardRadius*/get kCardRadius() {
      return 12;
    },
    /*flex_constants.kMenuRadius*/get kMenuRadius() {
      return 4;
    },
    /*flex_constants.kCardElevation*/get kCardElevation() {
      return 0;
    },
    /*flex_constants.kElevatedButtonElevation*/get kElevatedButtonElevation() {
      return 1;
    },
    /*flex_constants.kPopupMenuElevation*/get kPopupMenuElevation() {
      return 3;
    },
    /*flex_constants.kDialogElevation*/get kDialogElevation() {
      return 6;
    },
    /*flex_constants.kBottomSheetElevation*/get kBottomSheetElevation() {
      return 4;
    },
    /*flex_constants.kBottomSheetModalElevation*/get kBottomSheetModalElevation() {
      return 8;
    },
    /*flex_constants.kBottomNavigationBarElevation*/get kBottomNavigationBarElevation() {
      return 0;
    },
    /*flex_constants.kNavigationBarHeight*/get kNavigationBarHeight() {
      return 62;
    },
    /*flex_constants.kNavigationBarIndicatorAlpha*/get kNavigationBarIndicatorAlpha() {
      return 61;
    },
    /*flex_constants.kNavigationRailElevation*/get kNavigationRailElevation() {
      return 0;
    },
    /*flex_constants.kSnackBarElevation*/get kSnackBarElevation() {
      return 4;
    },
    /*flex_constants.kButtonMinSize*/get kButtonMinSize() {
      return C[0] || CT.C0;
    },
    /*flex_constants.kButtonPadding*/get kButtonPadding() {
      return C[1] || CT.C1;
    },
    /*flex_constants.kThickBorderWidth*/get kThickBorderWidth() {
      return 2;
    },
    /*flex_constants.kThinBorderWidth*/get kThinBorderWidth() {
      return 1.5;
    },
    /*flex_constants.kFillColorAlphaLight*/get kFillColorAlphaLight() {
      return 13;
    },
    /*flex_constants.kFillColorAlphaDark*/get kFillColorAlphaDark() {
      return 20;
    },
    /*flex_constants.kHoverBackgroundAlpha*/get kHoverBackgroundAlpha() {
      return 13;
    },
    /*flex_constants.kFocusBackgroundAlpha*/get kFocusBackgroundAlpha() {
      return 38;
    },
    /*flex_constants.kPressedBackgroundAlpha*/get kPressedBackgroundAlpha() {
      return 51;
    },
    /*flex_constants.kDisabledBackgroundAlpha*/get kDisabledBackgroundAlpha() {
      return 49;
    },
    /*flex_constants.kDisabledForegroundAlpha*/get kDisabledForegroundAlpha() {
      return 94;
    },
    /*flex_constants.kDisabledAlphaBlend*/get kDisabledAlphaBlend() {
      return 102;
    },
    /*flex_constants.kEnabledBorderAlpha*/get kEnabledBorderAlpha() {
      return 167;
    },
    /*flex_constants.kSelectedAlpha*/get kSelectedAlpha() {
      return 229;
    },
    /*flex_constants.kAltPrimaryAlphaBlend*/get kAltPrimaryAlphaBlend() {
      return 25;
    },
    /*flex_constants.kHoverAlphaBlend*/get kHoverAlphaBlend() {
      return 64;
    },
    /*flex_constants.kFocusAlphaBlend*/get kFocusAlphaBlend() {
      return 76;
    },
    /*flex_constants.kHighlightAlphaBlend*/get kHighlightAlphaBlend() {
      return 64;
    },
    /*flex_constants.kSplashAlphaBlend*/get kSplashAlphaBlend() {
      return 31;
    },
    /*flex_constants.kHoverAlpha*/get kHoverAlpha() {
      return 25;
    },
    /*flex_constants.kFocusAlpha*/get kFocusAlpha() {
      return 76;
    },
    /*flex_constants.kHighlightAlpha*/get kHighlightAlpha() {
      return 25;
    },
    /*flex_constants.kSplashAlpha*/get kSplashAlpha() {
      return 51;
    },
    /*flex_constants.kChipForegroundAlphaBlend*/get kChipForegroundAlphaBlend() {
      return 127;
    },
    /*flex_constants.kChipBackgroundAlphaBlend*/get kChipBackgroundAlphaBlend() {
      return 204;
    },
    /*flex_constants.kChipSelectedBackgroundAlphaBlend*/get kChipSelectedBackgroundAlphaBlend() {
      return 150;
    },
    /*flex_constants.kUnselectedBackgroundPrimaryAlphaBlend*/get kUnselectedBackgroundPrimaryAlphaBlend() {
      return 102;
    },
    /*flex_constants.kUnselectedAlphaBlend*/get kUnselectedAlphaBlend() {
      return 165;
    }
  }, false);
  dart.trackLibraries("packages/flex_color_scheme/src/flex_constants.dart", {
    "package:flex_color_scheme/src/flex_constants.dart": flex_constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAMU,sCAAuB;;;MAIvB,+BAAgB;;;MAKhB,qDAAsC;;;MAKtC,wCAAyB;;;MAMtB,4BAAa;;;MAMb,yBAAU;;;MAMV,0BAAW;;;MAMX,4BAAa;;;MAOb,oCAAqB;;;MAMrB,sCAAuB;;;MAMvB,uCAAwB;;;MAMxB,4BAAa;;;MAMb,0BAAW;;;MAOX,0BAAW;;;MAGX,6BAAc;;;MAGd,uCAAwB;;;MAGxB,kCAAmB;;;MAMnB,+BAAgB;;;MAGhB,oCAAqB;;;MAGrB,yCAA0B;;;MAG1B,4CAA6B;;;MAM7B,mCAAoB;;;MASvB,2CAA4B;;;MAGzB,uCAAwB;;;MAGxB,iCAAkB;;;MAUpB,6BAAc;;;MASA,6BAAc;;;MAM1B,gCAAiB;;;MAOjB,+BAAgB;;;MAUnB,mCAAoB;;;MAMpB,kCAAmB;;;MAQnB,oCAAqB;;;MAQrB,oCAAqB;;;MAOrB,sCAAuB;;;MASvB,uCAAwB;;;MASxB,uCAAwB;;;MAcxB,kCAAmB;;;MAQnB,kCAAmB;;;MAMnB,6BAAc;;;MAOd,oCAAqB;;;MAKrB,+BAAgB;;;MAKhB,+BAAgB;;;MAKhB,mCAAoB;;;MAKpB,gCAAiB;;;MAKjB,0BAAW;;;MAKX,0BAAW;;;MAKX,8BAAe;;;MAKf,2BAAY;;;MAKZ,wCAAyB;;;MAKzB,wCAAyB;;;MAKzB,gDAAiC;;;MAMjC,qDAAsC;;;MAMtC,oCAAqB","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_constants.dart.lib.js"}');
  // Exports:
  return {
    src__flex_constants: flex_constants
  };
}));

//# sourceMappingURL=flex_constants.dart.lib.js.map
