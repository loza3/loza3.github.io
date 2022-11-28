define(['dart_sdk', 'packages/flex_color_scheme/src/flex_sub_themes_data.dart'], (function load__packages__flex_color_scheme__src__flex_theme_data_extensions_dart(dart_sdk, packages__flex_color_scheme__src__flex_sub_themes_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flex_color_scheme = packages__flex_color_scheme__src__flex_sub_themes_data$46dart.src__flex_color_scheme;
  var flex_theme_data_extensions = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: flex_color_scheme.FlexTabBarStyle.prototype,
        [_Enum__name]: "forAppBar",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = [void 0];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  flex_theme_data_extensions['FlexThemeData|light'] = function FlexThemeData$124light(opts) {
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
    let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : C[0] || CT.C0;
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
    return flex_color_scheme.FlexColorScheme.light({colors: colors, scheme: scheme, colorScheme: colorScheme, usedColors: usedColors, surfaceMode: surfaceMode, blendLevel: blendLevel, appBarStyle: appBarStyle, appBarOpacity: appBarOpacity, transparentStatusBar: transparentStatusBar, appBarElevation: appBarElevation, bottomAppBarElevation: bottomAppBarElevation, tabBarStyle: tabBarStyle, primary: primary, primaryContainer: primaryContainer, secondary: secondary, secondaryContainer: secondaryContainer, tertiary: tertiary, tertiaryContainer: tertiaryContainer, error: error, surface: surface, background: background, scaffoldBackground: scaffoldBackground, dialogBackground: dialogBackground, appBarBackground: appBarBackground, onPrimary: onPrimary, onPrimaryContainer: onPrimaryContainer, onSecondary: onSecondary, onSecondaryContainer: onSecondaryContainer, onTertiary: onTertiary, onTertiaryContainer: onTertiaryContainer, onSurface: onSurface, onBackground: onBackground, onError: onError, surfaceTint: surfaceTint, lightIsWhite: lightIsWhite, swapColors: swapColors, tooltipsMatchBackground: tooltipsMatchBackground, subThemesData: subThemesData, keyColors: keyColors, useMaterial3ErrorColors: useMaterial3ErrorColors, tones: tones, visualDensity: visualDensity, textTheme: textTheme, primaryTextTheme: primaryTextTheme, fontFamily: fontFamily, platform: platform, typography: typography, applyElevationOverlayColor: applyElevationOverlayColor, useMaterial3: useMaterial3, extensions: extensions}).toTheme;
  };
  flex_theme_data_extensions['FlexThemeData|dark'] = function FlexThemeData$124dark(opts) {
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
    let tabBarStyle = opts && 'tabBarStyle' in opts ? opts.tabBarStyle : C[0] || CT.C0;
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
    return flex_color_scheme.FlexColorScheme.dark({colorScheme: colorScheme, colors: colors, scheme: scheme, usedColors: usedColors, surfaceMode: surfaceMode, blendLevel: blendLevel, appBarStyle: appBarStyle, appBarOpacity: appBarOpacity, transparentStatusBar: transparentStatusBar, appBarElevation: appBarElevation, bottomAppBarElevation: bottomAppBarElevation, tabBarStyle: tabBarStyle, primary: primary, primaryContainer: primaryContainer, secondary: secondary, secondaryContainer: secondaryContainer, tertiary: tertiary, tertiaryContainer: tertiaryContainer, error: error, surface: surface, background: background, scaffoldBackground: scaffoldBackground, dialogBackground: dialogBackground, appBarBackground: appBarBackground, onPrimary: onPrimary, onPrimaryContainer: onPrimaryContainer, onSecondary: onSecondary, onSecondaryContainer: onSecondaryContainer, onTertiary: onTertiary, onTertiaryContainer: onTertiaryContainer, onSurface: onSurface, onBackground: onBackground, onError: onError, surfaceTint: surfaceTint, darkIsTrueBlack: darkIsTrueBlack, swapColors: swapColors, tooltipsMatchBackground: tooltipsMatchBackground, subThemesData: subThemesData, keyColors: keyColors, useMaterial3ErrorColors: useMaterial3ErrorColors, tones: tones, visualDensity: visualDensity, textTheme: textTheme, primaryTextTheme: primaryTextTheme, fontFamily: fontFamily, platform: platform, typography: typography, applyElevationOverlayColor: applyElevationOverlayColor, useMaterial3: useMaterial3, extensions: extensions}).toTheme;
  };
  dart.trackLibraries("packages/flex_color_scheme/src/flex_theme_data_extensions.dart", {
    "package:flex_color_scheme/src/flex_theme_data_extensions.dart": flex_theme_data_extensions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_theme_data_extensions.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;QA6D2B;QAWL;QAiDC;QAqCT;QAiEa;QAYb;QASa;QAqBV;QAaF;QAOE;QAKC;QAaQ;QAmBT;QAkBA;QAmBA;QAkBA;QAoBA;QAkBA;QAcA;QAgBA;QAcA;QAYA;QAcA;QAYA;QAkBA;QAmBA;QAkBA;QAmBA;QAkBA;QAmBA;QAkBA;QAkBA;QAkBA;QAcA;QAMF;QAkBA;QAwBA;QAwEc;QAoBJ;QAeV;QAUM;QAwCI;QAGJ;QAGA;QAKH;QA4BQ;QAyBJ;QAuDP;QA6DA;QAW8B;AAEvC,UAAgB,AAmDd,kDAlDQ,MAAM,UACN,MAAM,eACD,WAAW,cACZ,UAAU,eACT,WAAW,cACZ,UAAU,eACT,WAAW,iBACT,aAAa,wBACN,oBAAoB,mBACzB,eAAe,yBACT,qBAAqB,eAC/B,WAAW,WACf,OAAO,oBACE,gBAAgB,aACvB,SAAS,sBACA,kBAAkB,YAC5B,QAAQ,qBACC,iBAAiB,SAC7B,KAAK,WACH,OAAO,cACJ,UAAU,sBACF,kBAAkB,oBACpB,gBAAgB,oBAChB,gBAAgB,aACvB,SAAS,sBACA,kBAAkB,eACzB,WAAW,wBACF,oBAAoB,cAC9B,UAAU,uBACD,mBAAmB,aAC7B,SAAS,gBACN,YAAY,WACjB,OAAO,eACH,WAAW,gBACV,YAAY,cACd,UAAU,2BACG,uBAAuB,iBACjC,aAAa,aACjB,SAAS,2BACK,uBAAuB,SACzC,KAAK,iBACG,aAAa,aACjB,SAAS,oBACF,gBAAgB,cACtB,UAAU,YACZ,QAAQ,cACN,UAAU,8BACM,0BAA0B,gBACxC,YAAY,cACd,UAAU;EACf;;QAiBY;QAWL;QAiDC;QAgCT;QAiEa;QAYb;QASa;QAqBV;QAaF;QAOE;QAKC;QAaQ;QAmBT;QAkBA;QAmBA;QAkBA;QAoBA;QAkBA;QAcA;QAgBA;QAeA;QAYA;QAcA;QAYA;QAkBA;QAmBA;QAkBA;QAmBA;QAkBA;QAmBA;QAkBA;QAkBA;QAkBA;QAcA;QAMF;QAkBA;QAwBA;QAwEc;QAoBJ;QAeV;QAUM;QAwCI;QAGJ;QAGA;QAKH;QA4BQ;QAyBJ;QAuDP;QA6DA;QAW8B;AAEvC,UAAgB,AAmDd,sDAlDa,WAAW,UAChB,MAAM,UACN,MAAM,cACF,UAAU,eACT,WAAW,cACZ,UAAU,eACT,WAAW,iBACT,aAAa,wBACN,oBAAoB,mBACzB,eAAe,yBACT,qBAAqB,eAC/B,WAAW,WACf,OAAO,oBACE,gBAAgB,aACvB,SAAS,sBACA,kBAAkB,YAC5B,QAAQ,qBACC,iBAAiB,SAC7B,KAAK,WACH,OAAO,cACJ,UAAU,sBACF,kBAAkB,oBACpB,gBAAgB,oBAChB,gBAAgB,aACvB,SAAS,sBACA,kBAAkB,eACzB,WAAW,wBACF,oBAAoB,cAC9B,UAAU,uBACD,mBAAmB,aAC7B,SAAS,gBACN,YAAY,WACjB,OAAO,eACH,WAAW,mBACP,eAAe,cACpB,UAAU,2BACG,uBAAuB,iBACjC,aAAa,aACjB,SAAS,2BACK,uBAAuB,SACzC,KAAK,iBACG,aAAa,aACjB,SAAS,oBACF,gBAAgB,cACtB,UAAU,YACZ,QAAQ,cACN,UAAU,8BACM,0BAA0B,gBACxC,YAAY,cACd,UAAU;EACf","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_theme_data_extensions.dart.lib.js"}');
  // Exports:
  return {
    src__flex_theme_data_extensions: flex_theme_data_extensions
  };
}));

//# sourceMappingURL=flex_theme_data_extensions.dart.lib.js.map
