define(['dart_sdk', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/widgets/overflow_bar.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/widgets/single_child_scroll_view.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/widgets/safe_area.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/material/typography.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/math.dart'], (function load__packages__flutter__src__material__dialog_dart(dart_sdk, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__widgets__overflow_bar$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__widgets__single_child_scroll_view$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__widgets__safe_area$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__material__typography$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__math$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const implicit_animations = packages__flutter__src__widgets__title$46dart.src__widgets__implicit_animations;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const routes = packages__flutter__src__widgets__title$46dart.src__widgets__routes;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const inherited_theme = packages__flutter__src__widgets__title$46dart.src__widgets__inherited_theme;
  const navigator = packages__flutter__src__widgets__title$46dart.src__widgets__navigator;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const dialog_theme = packages__flutter__src__material__icon_button$46dart.src__material__dialog_theme;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const debug = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const elevation_overlay = packages__flutter__src__material__icon_button$46dart.src__material__elevation_overlay;
  const color_scheme = packages__flutter__src__material__icon_button$46dart.src__material__color_scheme;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const overflow_bar = packages__flutter__src__widgets__overflow_bar$46dart.src__widgets__overflow_bar;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const single_child_scroll_view = packages__flutter__src__widgets__single_child_scroll_view$46dart.src__widgets__single_child_scroll_view;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const safe_area = packages__flutter__src__widgets__safe_area$46dart.src__widgets__safe_area;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const text_theme = packages__flutter__src__material__typography$46dart.src__material__text_theme;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  var dialog = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    JSArrayOfWidget: () => (T$.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    AnimationOfdouble: () => (T$.AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))(),
    BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget: () => (T$.BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T$.AnimationOfdouble(), T$.AnimationOfdouble()])))(),
    BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget: () => (T$.BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T$.AnimationOfdouble(), T$.AnimationOfdouble(), framework.Widget])))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: curves._DecelerateCurve.prototype
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 24,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 24,
        [EdgeInsets_left]: 40
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Dialog",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 280
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 20,
        [_Location_line]: 155,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ConstrainedBox",
        [_Location_column]: 18,
        [_Location_line]: 153,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 16,
        [_Location_line]: 151,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MediaQuery",
        [_Location_column]: 25,
        [_Location_line]: 145,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedPadding",
        [_Location_column]: 12,
        [_Location_line]: 141,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AlertDialog",
        [_Location_column]: 9,
        [_Location_line]: 263,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 16,
        [_Location_line]: 566,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 20,
        [_Location_line]: 559,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 18,
        [_Location_line]: 593,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTextStyle",
        [_Location_column]: 16,
        [_Location_line]: 590,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 21,
        [_Location_line]: 583,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 18,
        [_Location_line]: 623,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTextStyle",
        [_Location_column]: 16,
        [_Location_line]: 621,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 23,
        [_Location_line]: 612,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OverflowBar",
        [_Location_column]: 16,
        [_Location_line]: 637,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 23,
        [_Location_line]: 633,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 22,
        [_Location_line]: 654,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SingleChildScrollView",
        [_Location_column]: 20,
        [_Location_line]: 653,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 11,
        [_Location_line]: 652,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 30,
        [_Location_line]: 672,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 14,
        [_Location_line]: 678,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IntrinsicWidth",
        [_Location_column]: 26,
        [_Location_line]: 677,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 21,
        [_Location_line]: 686,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Dialog",
        [_Location_column]: 12,
        [_Location_line]: 695,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SimpleDialogOption",
        [_Location_column]: 9,
        [_Location_line]: 739,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 24
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 14,
        [_Location_line]: 768,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InkWell",
        [_Location_column]: 12,
        [_Location_line]: 766,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 24,
        [EdgeInsets_left]: 24
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 0
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SimpleDialog",
        [_Location_column]: 9,
        [_Location_line]: 854,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 18,
        [_Location_line]: 980,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTextStyle",
        [_Location_column]: 16,
        [_Location_line]: 978,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 21,
        [_Location_line]: 971,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListBody",
        [_Location_column]: 18,
        [_Location_line]: 1002,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SingleChildScrollView",
        [_Location_column]: 16,
        [_Location_line]: 995,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 23,
        [_Location_line]: 994,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Column",
        [_Location_column]: 16,
        [_Location_line]: 1011,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ConstrainedBox",
        [_Location_column]: 14,
        [_Location_line]: 1009,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IntrinsicWidth",
        [_Location_column]: 26,
        [_Location_line]: 1007,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 21,
        [_Location_line]: 1023,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Dialog",
        [_Location_column]: 12,
        [_Location_line]: 1031,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2315255808.0
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Builder",
        [_Location_column]: 37,
        [_Location_line]: 1258,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SafeArea",
        [_Location_column]: 23,
        [_Location_line]: 1261,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 150000
      });
    },
    get C58() {
      return C[58] = dart.fn(dialog._buildMaterialDialogTransitions, T$.BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget());
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[61] || CT.C61,
        [BorderSide_style]: C[62] || CT.C62,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[63] || CT.C63
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[65] || CT.C65,
        [BorderRadius_bottomLeft]: C[65] || CT.C65,
        [BorderRadius_topRight]: C[65] || CT.C65,
        [BorderRadius_topLeft]: C[65] || CT.C65
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[60] || CT.C60,
        [RoundedRectangleBorder_borderRadius]: C[64] || CT.C64
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 28,
        [Radius_x]: 28
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[68] || CT.C68,
        [BorderRadius_bottomLeft]: C[68] || CT.C68,
        [BorderRadius_topRight]: C[68] || CT.C68,
        [BorderRadius_topLeft]: C[68] || CT.C68
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[60] || CT.C60,
        [RoundedRectangleBorder_borderRadius]: C[67] || CT.C67
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 24,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 24
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeTransition",
        [_Location_column]: 10,
        [_Location_line]: 1044,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart"
      });
    }
  }, false);
  var C = Array(71).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/dialog.dart",
    "package:flutter/src/material/dialog.dart"
  ];
  var backgroundColor$ = dart.privateName(dialog, "Dialog.backgroundColor");
  var elevation$ = dart.privateName(dialog, "Dialog.elevation");
  var insetAnimationDuration$ = dart.privateName(dialog, "Dialog.insetAnimationDuration");
  var insetAnimationCurve$ = dart.privateName(dialog, "Dialog.insetAnimationCurve");
  var insetPadding$ = dart.privateName(dialog, "Dialog.insetPadding");
  var clipBehavior$ = dart.privateName(dialog, "Dialog.clipBehavior");
  var shape$ = dart.privateName(dialog, "Dialog.shape");
  var alignment$ = dart.privateName(dialog, "Dialog.alignment");
  var child$ = dart.privateName(dialog, "Dialog.child");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  dialog.Dialog = class Dialog extends framework.StatelessWidget {
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get insetAnimationDuration() {
      return this[insetAnimationDuration$];
    }
    set insetAnimationDuration(value) {
      super.insetAnimationDuration = value;
    }
    get insetAnimationCurve() {
      return this[insetAnimationCurve$];
    }
    set insetAnimationCurve(value) {
      super.insetAnimationCurve = value;
    }
    get insetPadding() {
      return this[insetPadding$];
    }
    set insetPadding(value) {
      super.insetPadding = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let insetAnimationDuration = opts && 'insetAnimationDuration' in opts ? opts.insetAnimationDuration : C[0] || CT.C0;
      let insetAnimationCurve = opts && 'insetAnimationCurve' in opts ? opts.insetAnimationCurve : C[1] || CT.C1;
      let insetPadding = opts && 'insetPadding' in opts ? opts.insetPadding : C[2] || CT.C2;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new dialog.Dialog.new({key: key, backgroundColor: backgroundColor, elevation: elevation, insetAnimationDuration: insetAnimationDuration, insetAnimationCurve: insetAnimationCurve, insetPadding: insetPadding, clipBehavior: clipBehavior, shape: shape, alignment: alignment, child: child, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      let theme = theme$.Theme.of(context);
      let dialogTheme = dialog_theme.DialogTheme.of(context);
      let defaults = theme.useMaterial3 ? new dialog._DialogDefaultsM3.new(context) : new dialog._DialogDefaultsM2.new(context);
      let effectivePadding = media_query.MediaQuery.of(context).viewInsets['+']((t0 = this.insetPadding, t0 == null ? edge_insets.EdgeInsets.zero : t0));
      return new implicit_animations.AnimatedPadding.new({padding: effectivePadding, duration: this.insetAnimationDuration, curve: this.insetAnimationCurve, child: media_query.MediaQuery.removeViewInsets({removeLeft: true, removeTop: true, removeRight: true, removeBottom: true, context: context, child: new basic.Align.new({alignment: (t0$0 = (t0$ = this.alignment, t0$ == null ? dialogTheme.alignment : t0$), t0$0 == null ? dart.nullCheck(defaults.alignment) : t0$0), child: new basic.ConstrainedBox.new({constraints: C[5] || CT.C5, child: new material.Material.new({color: (t0$2 = (t0$1 = this.backgroundColor, t0$1 == null ? dialogTheme.backgroundColor : t0$1), t0$2 == null ? theme$.Theme.of(context).dialogBackgroundColor : t0$2), elevation: (t0$4 = (t0$3 = this.elevation, t0$3 == null ? dialogTheme.elevation : t0$3), t0$4 == null ? dart.nullCheck(defaults.elevation) : t0$4), shape: (t0$6 = (t0$5 = this.shape, t0$5 == null ? dialogTheme.shape : t0$5), t0$6 == null ? dart.nullCheck(defaults.shape) : t0$6), type: material.MaterialType.card, clipBehavior: this.clipBehavior, child: this.child, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
  };
  (dialog.Dialog.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let insetAnimationDuration = opts && 'insetAnimationDuration' in opts ? opts.insetAnimationDuration : C[0] || CT.C0;
    let insetAnimationCurve = opts && 'insetAnimationCurve' in opts ? opts.insetAnimationCurve : C[1] || CT.C1;
    let insetPadding = opts && 'insetPadding' in opts ? opts.insetPadding : C[2] || CT.C2;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[backgroundColor$] = backgroundColor;
    this[elevation$] = elevation;
    this[insetAnimationDuration$] = insetAnimationDuration;
    this[insetAnimationCurve$] = insetAnimationCurve;
    this[insetPadding$] = insetPadding;
    this[clipBehavior$] = clipBehavior;
    this[shape$] = shape;
    this[alignment$] = alignment;
    this[child$] = child;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 56, 15, "clipBehavior != null");
    dialog.Dialog.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dialog.Dialog.prototype;
  dart.addTypeTests(dialog.Dialog);
  dart.addTypeCaches(dialog.Dialog);
  dart.setMethodSignature(dialog.Dialog, () => ({
    __proto__: dart.getMethods(dialog.Dialog.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dialog.Dialog, I[1]);
  dart.setFieldSignature(dialog.Dialog, () => ({
    __proto__: dart.getFields(dialog.Dialog.__proto__),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    insetAnimationDuration: dart.finalFieldType(core.Duration),
    insetAnimationCurve: dart.finalFieldType(curves.Curve),
    insetPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsets)),
    clipBehavior: dart.finalFieldType(ui.Clip),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    alignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry)),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  var icon$ = dart.privateName(dialog, "AlertDialog.icon");
  var iconColor$ = dart.privateName(dialog, "AlertDialog.iconColor");
  var iconPadding$ = dart.privateName(dialog, "AlertDialog.iconPadding");
  var title$ = dart.privateName(dialog, "AlertDialog.title");
  var titlePadding$ = dart.privateName(dialog, "AlertDialog.titlePadding");
  var titleTextStyle$ = dart.privateName(dialog, "AlertDialog.titleTextStyle");
  var content$ = dart.privateName(dialog, "AlertDialog.content");
  var contentPadding$ = dart.privateName(dialog, "AlertDialog.contentPadding");
  var contentTextStyle$ = dart.privateName(dialog, "AlertDialog.contentTextStyle");
  var actions$ = dart.privateName(dialog, "AlertDialog.actions");
  var actionsPadding$ = dart.privateName(dialog, "AlertDialog.actionsPadding");
  var actionsAlignment$ = dart.privateName(dialog, "AlertDialog.actionsAlignment");
  var actionsOverflowAlignment$ = dart.privateName(dialog, "AlertDialog.actionsOverflowAlignment");
  var actionsOverflowDirection$ = dart.privateName(dialog, "AlertDialog.actionsOverflowDirection");
  var actionsOverflowButtonSpacing$ = dart.privateName(dialog, "AlertDialog.actionsOverflowButtonSpacing");
  var buttonPadding$ = dart.privateName(dialog, "AlertDialog.buttonPadding");
  var backgroundColor$0 = dart.privateName(dialog, "AlertDialog.backgroundColor");
  var elevation$0 = dart.privateName(dialog, "AlertDialog.elevation");
  var semanticLabel$ = dart.privateName(dialog, "AlertDialog.semanticLabel");
  var insetPadding$0 = dart.privateName(dialog, "AlertDialog.insetPadding");
  var clipBehavior$0 = dart.privateName(dialog, "AlertDialog.clipBehavior");
  var shape$0 = dart.privateName(dialog, "AlertDialog.shape");
  var alignment$0 = dart.privateName(dialog, "AlertDialog.alignment");
  var scrollable$ = dart.privateName(dialog, "AlertDialog.scrollable");
  dialog.AlertDialog = class AlertDialog extends framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get iconColor() {
      return this[iconColor$];
    }
    set iconColor(value) {
      super.iconColor = value;
    }
    get iconPadding() {
      return this[iconPadding$];
    }
    set iconPadding(value) {
      super.iconPadding = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get titlePadding() {
      return this[titlePadding$];
    }
    set titlePadding(value) {
      super.titlePadding = value;
    }
    get titleTextStyle() {
      return this[titleTextStyle$];
    }
    set titleTextStyle(value) {
      super.titleTextStyle = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    get contentPadding() {
      return this[contentPadding$];
    }
    set contentPadding(value) {
      super.contentPadding = value;
    }
    get contentTextStyle() {
      return this[contentTextStyle$];
    }
    set contentTextStyle(value) {
      super.contentTextStyle = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    get actionsPadding() {
      return this[actionsPadding$];
    }
    set actionsPadding(value) {
      super.actionsPadding = value;
    }
    get actionsAlignment() {
      return this[actionsAlignment$];
    }
    set actionsAlignment(value) {
      super.actionsAlignment = value;
    }
    get actionsOverflowAlignment() {
      return this[actionsOverflowAlignment$];
    }
    set actionsOverflowAlignment(value) {
      super.actionsOverflowAlignment = value;
    }
    get actionsOverflowDirection() {
      return this[actionsOverflowDirection$];
    }
    set actionsOverflowDirection(value) {
      super.actionsOverflowDirection = value;
    }
    get actionsOverflowButtonSpacing() {
      return this[actionsOverflowButtonSpacing$];
    }
    set actionsOverflowButtonSpacing(value) {
      super.actionsOverflowButtonSpacing = value;
    }
    get buttonPadding() {
      return this[buttonPadding$];
    }
    set buttonPadding(value) {
      super.buttonPadding = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get elevation() {
      return this[elevation$0];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get semanticLabel() {
      return this[semanticLabel$];
    }
    set semanticLabel(value) {
      super.semanticLabel = value;
    }
    get insetPadding() {
      return this[insetPadding$0];
    }
    set insetPadding(value) {
      super.insetPadding = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get shape() {
      return this[shape$0];
    }
    set shape(value) {
      super.shape = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get scrollable() {
      return this[scrollable$];
    }
    set scrollable(value) {
      super.scrollable = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let iconPadding = opts && 'iconPadding' in opts ? opts.iconPadding : null;
      let iconColor = opts && 'iconColor' in opts ? opts.iconColor : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let titlePadding = opts && 'titlePadding' in opts ? opts.titlePadding : null;
      let titleTextStyle = opts && 'titleTextStyle' in opts ? opts.titleTextStyle : null;
      let content = opts && 'content' in opts ? opts.content : null;
      let contentPadding = opts && 'contentPadding' in opts ? opts.contentPadding : null;
      let contentTextStyle = opts && 'contentTextStyle' in opts ? opts.contentTextStyle : null;
      let actions = opts && 'actions' in opts ? opts.actions : null;
      let actionsPadding = opts && 'actionsPadding' in opts ? opts.actionsPadding : null;
      let actionsAlignment = opts && 'actionsAlignment' in opts ? opts.actionsAlignment : null;
      let actionsOverflowAlignment = opts && 'actionsOverflowAlignment' in opts ? opts.actionsOverflowAlignment : null;
      let actionsOverflowDirection = opts && 'actionsOverflowDirection' in opts ? opts.actionsOverflowDirection : null;
      let actionsOverflowButtonSpacing = opts && 'actionsOverflowButtonSpacing' in opts ? opts.actionsOverflowButtonSpacing : null;
      let buttonPadding = opts && 'buttonPadding' in opts ? opts.buttonPadding : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
      let insetPadding = opts && 'insetPadding' in opts ? opts.insetPadding : C[2] || CT.C2;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let scrollable = opts && 'scrollable' in opts ? opts.scrollable : false;
      return new dialog.AlertDialog.new({key: key, icon: icon, iconPadding: iconPadding, iconColor: iconColor, title: title, titlePadding: titlePadding, titleTextStyle: titleTextStyle, content: content, contentPadding: contentPadding, contentTextStyle: contentTextStyle, actions: actions, actionsPadding: actionsPadding, actionsAlignment: actionsAlignment, actionsOverflowAlignment: actionsOverflowAlignment, actionsOverflowDirection: actionsOverflowDirection, actionsOverflowButtonSpacing: actionsOverflowButtonSpacing, buttonPadding: buttonPadding, backgroundColor: backgroundColor, elevation: elevation, semanticLabel: semanticLabel, insetPadding: insetPadding, clipBehavior: clipBehavior, shape: shape, alignment: alignment, scrollable: scrollable, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17;
      if (!debug.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[0], 522, 12, "debugCheckHasMaterialLocalizations(context)");
      let theme = theme$.Theme.of(context);
      let dialogTheme = dialog_theme.DialogTheme.of(context);
      let defaults = theme.useMaterial3 ? new dialog._DialogDefaultsM3.new(context) : new dialog._DialogDefaultsM2.new(context);
      let label = this.semanticLabel;
      switch (theme.platform) {
        case C[12] || CT.C12:
        case C[13] || CT.C13:
          {
            break;
          }
        case C[14] || CT.C14:
        case C[15] || CT.C15:
        case C[16] || CT.C16:
        case C[17] || CT.C17:
          {
            label == null ? label = material_localizations.MaterialLocalizations.of(context).alertDialogLabel : null;
          }
      }
      let paddingScaleFactor = dialog._paddingScaleFactor(media_query.MediaQuery.of(context).textScaleFactor);
      let textDirection = basic.Directionality.maybeOf(context);
      let iconWidget = null;
      let titleWidget = null;
      let contentWidget = null;
      let actionsWidget = null;
      if (this.icon != null) {
        let belowIsTitle = this.title != null;
        let belowIsContent = !belowIsTitle && this.content != null;
        let defaultIconPadding = new edge_insets.EdgeInsets.only({left: 24.0, top: 24.0, right: 24.0, bottom: belowIsTitle ? 16.0 : belowIsContent ? 0.0 : 24.0});
        let effectiveIconPadding = (t0$ = (t0 = this.iconPadding, t0 == null ? null : t0.resolve(textDirection)), t0$ == null ? defaultIconPadding : t0$);
        iconWidget = new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: effectiveIconPadding.left * paddingScaleFactor, right: effectiveIconPadding.right * paddingScaleFactor, top: effectiveIconPadding.top * paddingScaleFactor, bottom: effectiveIconPadding.bottom}), child: new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({color: (t0$1 = (t0$0 = this.iconColor, t0$0 == null ? dialogTheme.iconColor : t0$0), t0$1 == null ? defaults.iconColor : t0$1)}), child: dart.nullCheck(this.icon), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
      }
      if (this.title != null) {
        let defaultTitlePadding = new edge_insets.EdgeInsets.only({left: 24.0, top: this.icon == null ? 24.0 : 0.0, right: 24.0, bottom: this.content == null ? 20.0 : 0.0});
        let effectiveTitlePadding = (t0$3 = (t0$2 = this.titlePadding, t0$2 == null ? null : t0$2.resolve(textDirection)), t0$3 == null ? defaultTitlePadding : t0$3);
        titleWidget = new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: effectiveTitlePadding.left * paddingScaleFactor, right: effectiveTitlePadding.right * paddingScaleFactor, top: this.icon == null ? effectiveTitlePadding.top * paddingScaleFactor : effectiveTitlePadding.top, bottom: effectiveTitlePadding.bottom}), child: new text.DefaultTextStyle.new({style: (t0$5 = (t0$4 = this.titleTextStyle, t0$4 == null ? dialogTheme.titleTextStyle : t0$4), t0$5 == null ? dart.nullCheck(defaults.titleTextStyle) : t0$5), textAlign: this.icon == null ? ui.TextAlign.start : ui.TextAlign.center, child: new basic.Semantics.new({namesRoute: label == null && theme.platform !== platform.TargetPlatform.iOS, container: true, child: this.title, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), $creationLocationd_0dea112b090073317d4: C[21] || CT.C21}), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
      }
      if (this.content != null) {
        let defaultContentPadding = new edge_insets.EdgeInsets.only({left: 24.0, top: theme.useMaterial3 ? 16.0 : 20.0, right: 24.0, bottom: 24.0});
        let effectiveContentPadding = (t0$7 = (t0$6 = this.contentPadding, t0$6 == null ? null : t0$6.resolve(textDirection)), t0$7 == null ? defaultContentPadding : t0$7);
        contentWidget = new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: effectiveContentPadding.left * paddingScaleFactor, right: effectiveContentPadding.right * paddingScaleFactor, top: this.title == null && this.icon == null ? effectiveContentPadding.top * paddingScaleFactor : effectiveContentPadding.top, bottom: effectiveContentPadding.bottom}), child: new text.DefaultTextStyle.new({style: (t0$9 = (t0$8 = this.contentTextStyle, t0$8 == null ? dialogTheme.contentTextStyle : t0$8), t0$9 == null ? dart.nullCheck(defaults.contentTextStyle) : t0$9), child: new basic.Semantics.new({container: true, child: this.content, $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
      }
      if (this.actions != null) {
        let spacing = dart.notNull((t0$11 = (t0$10 = this.buttonPadding, t0$10 == null ? null : t0$10.horizontal), t0$11 == null ? 16.0 : t0$11)) / 2;
        actionsWidget = new basic.Padding.new({padding: (t0$13 = (t0$12 = this.actionsPadding, t0$12 == null ? dialogTheme.actionsPadding : t0$12), t0$13 == null ? theme.useMaterial3 ? dart.nullCheck(defaults.actionsPadding) : dart.nullCheck(defaults.actionsPadding).add(new edge_insets.EdgeInsets.all(spacing)) : t0$13), child: new overflow_bar.OverflowBar.new({alignment: (t0$14 = this.actionsAlignment, t0$14 == null ? flex.MainAxisAlignment.end : t0$14), spacing: spacing, overflowAlignment: (t0$15 = this.actionsOverflowAlignment, t0$15 == null ? overflow_bar.OverflowBarAlignment.end : t0$15), overflowDirection: (t0$16 = this.actionsOverflowDirection, t0$16 == null ? basic_types.VerticalDirection.down : t0$16), overflowSpacing: (t0$17 = this.actionsOverflowButtonSpacing, t0$17 == null ? 0.0 : t0$17), children: dart.nullCheck(this.actions), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26}), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27});
      }
      let columnChildren = null;
      if (this.scrollable) {
        columnChildren = (() => {
          let t0 = T$.JSArrayOfWidget().of([]);
          if (this.title != null || this.content != null) t0.push(new basic.Flexible.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: (() => {
                  let t1 = T$.JSArrayOfWidget().of([]);
                  if (this.icon != null) t1.push(dart.nullCheck(iconWidget));
                  if (this.title != null) t1.push(dart.nullCheck(titleWidget));
                  if (this.content != null) t1.push(dart.nullCheck(contentWidget));
                  return t1;
                })(), $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29}), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}));
          if (this.actions != null) t0.push(dart.nullCheck(actionsWidget));
          return t0;
        })();
      } else {
        columnChildren = (() => {
          let t2 = T$.JSArrayOfWidget().of([]);
          if (this.icon != null) t2.push(dart.nullCheck(iconWidget));
          if (this.title != null) t2.push(dart.nullCheck(titleWidget));
          if (this.content != null) t2.push(new basic.Flexible.new({child: dart.nullCheck(contentWidget), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31}));
          if (this.actions != null) t2.push(dart.nullCheck(actionsWidget));
          return t2;
        })();
      }
      let dialogChild = new basic.IntrinsicWidth.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: columnChildren, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32}), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
      if (label != null) {
        dialogChild = new basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, namesRoute: true, label: label, child: dialogChild, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
      }
      return new dialog.Dialog.new({backgroundColor: this.backgroundColor, elevation: this.elevation, insetPadding: this.insetPadding, clipBehavior: this.clipBehavior, shape: this.shape, alignment: this.alignment, child: dialogChild, $creationLocationd_0dea112b090073317d4: C[35] || CT.C35});
    }
  };
  (dialog.AlertDialog.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let iconPadding = opts && 'iconPadding' in opts ? opts.iconPadding : null;
    let iconColor = opts && 'iconColor' in opts ? opts.iconColor : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let titlePadding = opts && 'titlePadding' in opts ? opts.titlePadding : null;
    let titleTextStyle = opts && 'titleTextStyle' in opts ? opts.titleTextStyle : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let contentPadding = opts && 'contentPadding' in opts ? opts.contentPadding : null;
    let contentTextStyle = opts && 'contentTextStyle' in opts ? opts.contentTextStyle : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let actionsPadding = opts && 'actionsPadding' in opts ? opts.actionsPadding : null;
    let actionsAlignment = opts && 'actionsAlignment' in opts ? opts.actionsAlignment : null;
    let actionsOverflowAlignment = opts && 'actionsOverflowAlignment' in opts ? opts.actionsOverflowAlignment : null;
    let actionsOverflowDirection = opts && 'actionsOverflowDirection' in opts ? opts.actionsOverflowDirection : null;
    let actionsOverflowButtonSpacing = opts && 'actionsOverflowButtonSpacing' in opts ? opts.actionsOverflowButtonSpacing : null;
    let buttonPadding = opts && 'buttonPadding' in opts ? opts.buttonPadding : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let insetPadding = opts && 'insetPadding' in opts ? opts.insetPadding : C[2] || CT.C2;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let scrollable = opts && 'scrollable' in opts ? opts.scrollable : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[iconPadding$] = iconPadding;
    this[iconColor$] = iconColor;
    this[title$] = title;
    this[titlePadding$] = titlePadding;
    this[titleTextStyle$] = titleTextStyle;
    this[content$] = content;
    this[contentPadding$] = contentPadding;
    this[contentTextStyle$] = contentTextStyle;
    this[actions$] = actions;
    this[actionsPadding$] = actionsPadding;
    this[actionsAlignment$] = actionsAlignment;
    this[actionsOverflowAlignment$] = actionsOverflowAlignment;
    this[actionsOverflowDirection$] = actionsOverflowDirection;
    this[actionsOverflowButtonSpacing$] = actionsOverflowButtonSpacing;
    this[buttonPadding$] = buttonPadding;
    this[backgroundColor$0] = backgroundColor;
    this[elevation$0] = elevation;
    this[semanticLabel$] = semanticLabel;
    this[insetPadding$0] = insetPadding;
    this[clipBehavior$0] = clipBehavior;
    this[shape$0] = shape;
    this[alignment$0] = alignment;
    this[scrollable$] = scrollable;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 289, 15, "clipBehavior != null");
    dialog.AlertDialog.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dialog.AlertDialog.prototype;
  dart.addTypeTests(dialog.AlertDialog);
  dart.addTypeCaches(dialog.AlertDialog);
  dart.setMethodSignature(dialog.AlertDialog, () => ({
    __proto__: dart.getMethods(dialog.AlertDialog.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dialog.AlertDialog, I[1]);
  dart.setFieldSignature(dialog.AlertDialog, () => ({
    __proto__: dart.getFields(dialog.AlertDialog.__proto__),
    icon: dart.finalFieldType(dart.nullable(framework.Widget)),
    iconColor: dart.finalFieldType(dart.nullable(ui.Color)),
    iconPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    title: dart.finalFieldType(dart.nullable(framework.Widget)),
    titlePadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    titleTextStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    content: dart.finalFieldType(dart.nullable(framework.Widget)),
    contentPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    contentTextStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    actions: dart.finalFieldType(dart.nullable(core.List$(framework.Widget))),
    actionsPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    actionsAlignment: dart.finalFieldType(dart.nullable(flex.MainAxisAlignment)),
    actionsOverflowAlignment: dart.finalFieldType(dart.nullable(overflow_bar.OverflowBarAlignment)),
    actionsOverflowDirection: dart.finalFieldType(dart.nullable(basic_types.VerticalDirection)),
    actionsOverflowButtonSpacing: dart.finalFieldType(dart.nullable(core.double)),
    buttonPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    semanticLabel: dart.finalFieldType(dart.nullable(core.String)),
    insetPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    clipBehavior: dart.finalFieldType(ui.Clip),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    alignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry)),
    scrollable: dart.finalFieldType(core.bool)
  }));
  var onPressed$ = dart.privateName(dialog, "SimpleDialogOption.onPressed");
  var child$0 = dart.privateName(dialog, "SimpleDialogOption.child");
  var padding$ = dart.privateName(dialog, "SimpleDialogOption.padding");
  dialog.SimpleDialogOption = class SimpleDialogOption extends framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new dialog.SimpleDialogOption.new({key: key, onPressed: onPressed, padding: padding, child: child, $creationLocationd_0dea112b090073317d4: C[36] || CT.C36});
    }
    build(context) {
      let t3;
      return new ink_well.InkWell.new({onTap: this.onPressed, child: new basic.Padding.new({padding: (t3 = this.padding, t3 == null ? C[37] || CT.C37 : t3), child: this.child, $creationLocationd_0dea112b090073317d4: C[38] || CT.C38}), $creationLocationd_0dea112b090073317d4: C[39] || CT.C39});
    }
  };
  (dialog.SimpleDialogOption.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[padding$] = padding;
    this[child$0] = child;
    dialog.SimpleDialogOption.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dialog.SimpleDialogOption.prototype;
  dart.addTypeTests(dialog.SimpleDialogOption);
  dart.addTypeCaches(dialog.SimpleDialogOption);
  dart.setMethodSignature(dialog.SimpleDialogOption, () => ({
    __proto__: dart.getMethods(dialog.SimpleDialogOption.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dialog.SimpleDialogOption, I[1]);
  dart.setFieldSignature(dialog.SimpleDialogOption, () => ({
    __proto__: dart.getFields(dialog.SimpleDialogOption.__proto__),
    onPressed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsets))
  }));
  var title$0 = dart.privateName(dialog, "SimpleDialog.title");
  var titlePadding$0 = dart.privateName(dialog, "SimpleDialog.titlePadding");
  var titleTextStyle$0 = dart.privateName(dialog, "SimpleDialog.titleTextStyle");
  var children$ = dart.privateName(dialog, "SimpleDialog.children");
  var contentPadding$0 = dart.privateName(dialog, "SimpleDialog.contentPadding");
  var backgroundColor$1 = dart.privateName(dialog, "SimpleDialog.backgroundColor");
  var elevation$1 = dart.privateName(dialog, "SimpleDialog.elevation");
  var semanticLabel$0 = dart.privateName(dialog, "SimpleDialog.semanticLabel");
  var insetPadding$1 = dart.privateName(dialog, "SimpleDialog.insetPadding");
  var clipBehavior$1 = dart.privateName(dialog, "SimpleDialog.clipBehavior");
  var shape$1 = dart.privateName(dialog, "SimpleDialog.shape");
  var alignment$1 = dart.privateName(dialog, "SimpleDialog.alignment");
  dialog.SimpleDialog = class SimpleDialog extends framework.StatelessWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get titlePadding() {
      return this[titlePadding$0];
    }
    set titlePadding(value) {
      super.titlePadding = value;
    }
    get titleTextStyle() {
      return this[titleTextStyle$0];
    }
    set titleTextStyle(value) {
      super.titleTextStyle = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get contentPadding() {
      return this[contentPadding$0];
    }
    set contentPadding(value) {
      super.contentPadding = value;
    }
    get backgroundColor() {
      return this[backgroundColor$1];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get elevation() {
      return this[elevation$1];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get semanticLabel() {
      return this[semanticLabel$0];
    }
    set semanticLabel(value) {
      super.semanticLabel = value;
    }
    get insetPadding() {
      return this[insetPadding$1];
    }
    set insetPadding(value) {
      super.insetPadding = value;
    }
    get clipBehavior() {
      return this[clipBehavior$1];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get shape() {
      return this[shape$1];
    }
    set shape(value) {
      super.shape = value;
    }
    get alignment() {
      return this[alignment$1];
    }
    set alignment(value) {
      super.alignment = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let titlePadding = opts && 'titlePadding' in opts ? opts.titlePadding : C[40] || CT.C40;
      let titleTextStyle = opts && 'titleTextStyle' in opts ? opts.titleTextStyle : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let contentPadding = opts && 'contentPadding' in opts ? opts.contentPadding : C[41] || CT.C41;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
      let insetPadding = opts && 'insetPadding' in opts ? opts.insetPadding : C[2] || CT.C2;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      return new dialog.SimpleDialog.new({key: key, title: title, titlePadding: titlePadding, titleTextStyle: titleTextStyle, children: children, contentPadding: contentPadding, backgroundColor: backgroundColor, elevation: elevation, semanticLabel: semanticLabel, insetPadding: insetPadding, clipBehavior: clipBehavior, shape: shape, alignment: alignment, $creationLocationd_0dea112b090073317d4: C[42] || CT.C42});
    }
    build(context) {
      let t3, t3$;
      if (!debug.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[0], 948, 12, "debugCheckHasMaterialLocalizations(context)");
      let theme = theme$.Theme.of(context);
      let label = this.semanticLabel;
      switch (theme.platform) {
        case C[13] || CT.C13:
        case C[12] || CT.C12:
          {
            break;
          }
        case C[14] || CT.C14:
        case C[15] || CT.C15:
        case C[16] || CT.C16:
        case C[17] || CT.C17:
          {
            label == null ? label = material_localizations.MaterialLocalizations.of(context).dialogLabel : null;
          }
      }
      let paddingScaleFactor = dialog._paddingScaleFactor(media_query.MediaQuery.of(context).textScaleFactor);
      let textDirection = basic.Directionality.maybeOf(context);
      let titleWidget = null;
      if (this.title != null) {
        let effectiveTitlePadding = this.titlePadding.resolve(textDirection);
        titleWidget = new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: effectiveTitlePadding.left * paddingScaleFactor, right: effectiveTitlePadding.right * paddingScaleFactor, top: effectiveTitlePadding.top * paddingScaleFactor, bottom: this.children == null ? effectiveTitlePadding.bottom * paddingScaleFactor : effectiveTitlePadding.bottom}), child: new text.DefaultTextStyle.new({style: (t3$ = (t3 = this.titleTextStyle, t3 == null ? dialog_theme.DialogTheme.of(context).titleTextStyle : t3), t3$ == null ? dart.nullCheck(theme.textTheme.headline6) : t3$), child: new basic.Semantics.new({namesRoute: label == null && theme.platform !== platform.TargetPlatform.iOS, container: true, child: this.title, $creationLocationd_0dea112b090073317d4: C[43] || CT.C43}), $creationLocationd_0dea112b090073317d4: C[44] || CT.C44}), $creationLocationd_0dea112b090073317d4: C[45] || CT.C45});
      }
      let contentWidget = null;
      if (this.children != null) {
        let effectiveContentPadding = this.contentPadding.resolve(textDirection);
        contentWidget = new basic.Flexible.new({child: new single_child_scroll_view.SingleChildScrollView.new({padding: new edge_insets.EdgeInsets.only({left: effectiveContentPadding.left * paddingScaleFactor, right: effectiveContentPadding.right * paddingScaleFactor, top: this.title == null ? effectiveContentPadding.top * paddingScaleFactor : effectiveContentPadding.top, bottom: effectiveContentPadding.bottom * paddingScaleFactor}), child: new basic.ListBody.new({children: dart.nullCheck(this.children), $creationLocationd_0dea112b090073317d4: C[46] || CT.C46}), $creationLocationd_0dea112b090073317d4: C[47] || CT.C47}), $creationLocationd_0dea112b090073317d4: C[48] || CT.C48});
      }
      let dialogChild = new basic.IntrinsicWidth.new({stepWidth: 56.0, child: new basic.ConstrainedBox.new({constraints: C[5] || CT.C5, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: (() => {
              let t3 = T$.JSArrayOfWidget().of([]);
              if (this.title != null) t3.push(dart.nullCheck(titleWidget));
              if (this.children != null) t3.push(dart.nullCheck(contentWidget));
              return t3;
            })(), $creationLocationd_0dea112b090073317d4: C[49] || CT.C49}), $creationLocationd_0dea112b090073317d4: C[50] || CT.C50}), $creationLocationd_0dea112b090073317d4: C[51] || CT.C51});
      if (label != null) {
        dialogChild = new basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, namesRoute: true, label: label, child: dialogChild, $creationLocationd_0dea112b090073317d4: C[52] || CT.C52});
      }
      return new dialog.Dialog.new({backgroundColor: this.backgroundColor, elevation: this.elevation, insetPadding: this.insetPadding, clipBehavior: this.clipBehavior, shape: this.shape, alignment: this.alignment, child: dialogChild, $creationLocationd_0dea112b090073317d4: C[53] || CT.C53});
    }
  };
  (dialog.SimpleDialog.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let titlePadding = opts && 'titlePadding' in opts ? opts.titlePadding : C[40] || CT.C40;
    let titleTextStyle = opts && 'titleTextStyle' in opts ? opts.titleTextStyle : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let contentPadding = opts && 'contentPadding' in opts ? opts.contentPadding : C[41] || CT.C41;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let insetPadding = opts && 'insetPadding' in opts ? opts.insetPadding : C[2] || CT.C2;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$0] = title;
    this[titlePadding$0] = titlePadding;
    this[titleTextStyle$0] = titleTextStyle;
    this[children$] = children;
    this[contentPadding$0] = contentPadding;
    this[backgroundColor$1] = backgroundColor;
    this[elevation$1] = elevation;
    this[semanticLabel$0] = semanticLabel;
    this[insetPadding$1] = insetPadding;
    this[clipBehavior$1] = clipBehavior;
    this[shape$1] = shape;
    this[alignment$1] = alignment;
    if (!(titlePadding !== null)) dart.assertFailed(null, I[0], 868, 15, "titlePadding != null");
    if (!(contentPadding !== null)) dart.assertFailed(null, I[0], 869, 15, "contentPadding != null");
    dialog.SimpleDialog.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dialog.SimpleDialog.prototype;
  dart.addTypeTests(dialog.SimpleDialog);
  dart.addTypeCaches(dialog.SimpleDialog);
  dart.setMethodSignature(dialog.SimpleDialog, () => ({
    __proto__: dart.getMethods(dialog.SimpleDialog.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dialog.SimpleDialog, I[1]);
  dart.setFieldSignature(dialog.SimpleDialog, () => ({
    __proto__: dart.getFields(dialog.SimpleDialog.__proto__),
    title: dart.finalFieldType(dart.nullable(framework.Widget)),
    titlePadding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    titleTextStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    children: dart.finalFieldType(dart.nullable(core.List$(framework.Widget))),
    contentPadding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    semanticLabel: dart.finalFieldType(dart.nullable(core.String)),
    insetPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    clipBehavior: dart.finalFieldType(ui.Clip),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    alignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry))
  }));
  var Color_value = dart.privateName(ui, "Color.value");
  const _is_DialogRoute_default = Symbol('_is_DialogRoute_default');
  dialog.DialogRoute$ = dart.generic(T => {
    class DialogRoute extends routes.RawDialogRoute$(T) {
      static ['_#new#tearOff'](T, opts) {
        let context = opts && 'context' in opts ? opts.context : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let themes = opts && 'themes' in opts ? opts.themes : null;
        let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : null;
        let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : null;
        let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
        let useSafeArea = opts && 'useSafeArea' in opts ? opts.useSafeArea : true;
        let settings = opts && 'settings' in opts ? opts.settings : null;
        let anchorPoint = opts && 'anchorPoint' in opts ? opts.anchorPoint : null;
        return new (dialog.DialogRoute$(T)).new({context: context, builder: builder, themes: themes, barrierColor: barrierColor, barrierDismissible: barrierDismissible, barrierLabel: barrierLabel, useSafeArea: useSafeArea, settings: settings, anchorPoint: anchorPoint});
      }
    }
    (DialogRoute.new = function(opts) {
      let t4;
      let context = opts && 'context' in opts ? opts.context : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let themes = opts && 'themes' in opts ? opts.themes : null;
      let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : C[54] || CT.C54;
      let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
      let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
      let useSafeArea = opts && 'useSafeArea' in opts ? opts.useSafeArea : true;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      let anchorPoint = opts && 'anchorPoint' in opts ? opts.anchorPoint : null;
      if (!(barrierDismissible !== null)) dart.assertFailed(null, I[0], 1255, 15, "barrierDismissible != null");
      DialogRoute.__proto__.new.call(this, {pageBuilder: dart.fn((buildContext, animation, secondaryAnimation) => {
          let t4, t4$;
          let pageChild = new basic.Builder.new({builder: builder, $creationLocationd_0dea112b090073317d4: C[55] || CT.C55});
          let dialog = (t4$ = (t4 = themes, t4 == null ? null : t4.wrap(pageChild)), t4$ == null ? pageChild : t4$);
          if (useSafeArea) {
            dialog = new safe_area.SafeArea.new({child: dialog, $creationLocationd_0dea112b090073317d4: C[56] || CT.C56});
          }
          return dialog;
        }, T$.BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), barrierLabel: (t4 = barrierLabel, t4 == null ? material_localizations.MaterialLocalizations.of(context).modalBarrierDismissLabel : t4), transitionDuration: C[57] || CT.C57, transitionBuilder: C[58] || CT.C58, barrierColor: barrierColor, barrierDismissible: barrierDismissible, settings: settings, anchorPoint: anchorPoint});
      ;
    }).prototype = DialogRoute.prototype;
    dart.addTypeTests(DialogRoute);
    DialogRoute.prototype[_is_DialogRoute_default] = true;
    dart.addTypeCaches(DialogRoute);
    dart.setLibraryUri(DialogRoute, I[1]);
    return DialogRoute;
  });
  dialog.DialogRoute = dialog.DialogRoute$();
  dart.addTypeTests(dialog.DialogRoute, _is_DialogRoute_default);
  var _textTheme = dart.privateName(dialog, "_textTheme");
  var _iconTheme = dart.privateName(dialog, "_iconTheme");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  dialog._DialogDefaultsM2 = class _DialogDefaultsM2 extends dialog_theme.DialogTheme {
    static ['_#new#tearOff'](context) {
      return new dialog._DialogDefaultsM2.new(context);
    }
    get iconColor() {
      return this[_iconTheme].color;
    }
    get backgroundColor() {
      return theme$.Theme.of(this.context).dialogBackgroundColor;
    }
    get titleTextStyle() {
      return this[_textTheme].headline6;
    }
    get contentTextStyle() {
      return this[_textTheme].subtitle1;
    }
    get actionsPadding() {
      return edge_insets.EdgeInsets.zero;
    }
  };
  (dialog._DialogDefaultsM2.new = function(context) {
    this.context = context;
    this[_textTheme] = theme$.Theme.of(context).textTheme;
    this[_iconTheme] = theme$.Theme.of(context).iconTheme;
    dialog._DialogDefaultsM2.__proto__.new.call(this, {alignment: alignment.Alignment.center, elevation: 24.0, shape: C[59] || CT.C59});
    ;
  }).prototype = dialog._DialogDefaultsM2.prototype;
  dart.addTypeTests(dialog._DialogDefaultsM2);
  dart.addTypeCaches(dialog._DialogDefaultsM2);
  dart.setGetterSignature(dialog._DialogDefaultsM2, () => ({
    __proto__: dart.getGetters(dialog._DialogDefaultsM2.__proto__),
    iconColor: dart.nullable(ui.Color),
    backgroundColor: dart.nullable(ui.Color),
    titleTextStyle: dart.nullable(text_style.TextStyle),
    contentTextStyle: dart.nullable(text_style.TextStyle),
    actionsPadding: dart.nullable(edge_insets.EdgeInsetsGeometry)
  }));
  dart.setLibraryUri(dialog._DialogDefaultsM2, I[1]);
  dart.setFieldSignature(dialog._DialogDefaultsM2, () => ({
    __proto__: dart.getFields(dialog._DialogDefaultsM2.__proto__),
    context: dart.finalFieldType(framework.BuildContext),
    [_textTheme]: dart.finalFieldType(text_theme.TextTheme),
    [_iconTheme]: dart.finalFieldType(icon_theme_data.IconThemeData)
  }));
  var ___DialogDefaultsM3__colors = dart.privateName(dialog, "_#_DialogDefaultsM3#_colors");
  var ___DialogDefaultsM3__textTheme = dart.privateName(dialog, "_#_DialogDefaultsM3#_textTheme");
  var _colors = dart.privateName(dialog, "_colors");
  dialog._DialogDefaultsM3 = class _DialogDefaultsM3 extends dialog_theme.DialogTheme {
    static ['_#new#tearOff'](context) {
      return new dialog._DialogDefaultsM3.new(context);
    }
    get [_colors]() {
      let t5, t4;
      t4 = this[___DialogDefaultsM3__colors];
      return t4 == null ? (t5 = theme$.Theme.of(this.context).colorScheme, this[___DialogDefaultsM3__colors] == null ? this[___DialogDefaultsM3__colors] = t5 : dart.throw(new _internal.LateError.fieldADI("_colors"))) : t4;
    }
    get [_textTheme]() {
      let t5, t4;
      t4 = this[___DialogDefaultsM3__textTheme];
      return t4 == null ? (t5 = theme$.Theme.of(this.context).textTheme, this[___DialogDefaultsM3__textTheme] == null ? this[___DialogDefaultsM3__textTheme] = t5 : dart.throw(new _internal.LateError.fieldADI("_textTheme"))) : t4;
    }
    get iconColor() {
      return this[_colors].secondary;
    }
    get backgroundColor() {
      return elevation_overlay.ElevationOverlay.colorWithOverlay(this[_colors].surface, this[_colors].primary, 6.0);
    }
    get titleTextStyle() {
      return this[_textTheme].headlineSmall;
    }
    get contentTextStyle() {
      return this[_textTheme].bodyMedium;
    }
    get actionsPadding() {
      return C[69] || CT.C69;
    }
  };
  (dialog._DialogDefaultsM3.new = function(context) {
    this[___DialogDefaultsM3__colors] = null;
    this[___DialogDefaultsM3__textTheme] = null;
    this.context = context;
    dialog._DialogDefaultsM3.__proto__.new.call(this, {alignment: alignment.Alignment.center, elevation: 6.0, shape: C[66] || CT.C66});
    ;
  }).prototype = dialog._DialogDefaultsM3.prototype;
  dart.addTypeTests(dialog._DialogDefaultsM3);
  dart.addTypeCaches(dialog._DialogDefaultsM3);
  dart.setGetterSignature(dialog._DialogDefaultsM3, () => ({
    __proto__: dart.getGetters(dialog._DialogDefaultsM3.__proto__),
    [_colors]: color_scheme.ColorScheme,
    [_textTheme]: text_theme.TextTheme,
    iconColor: dart.nullable(ui.Color),
    backgroundColor: dart.nullable(ui.Color),
    titleTextStyle: dart.nullable(text_style.TextStyle),
    contentTextStyle: dart.nullable(text_style.TextStyle),
    actionsPadding: dart.nullable(edge_insets.EdgeInsetsGeometry)
  }));
  dart.setLibraryUri(dialog._DialogDefaultsM3, I[1]);
  dart.setFieldSignature(dialog._DialogDefaultsM3, () => ({
    __proto__: dart.getFields(dialog._DialogDefaultsM3.__proto__),
    context: dart.finalFieldType(framework.BuildContext),
    [___DialogDefaultsM3__colors]: dart.fieldType(dart.nullable(color_scheme.ColorScheme)),
    [___DialogDefaultsM3__textTheme]: dart.fieldType(dart.nullable(text_theme.TextTheme))
  }));
  dialog._buildMaterialDialogTransitions = function _buildMaterialDialogTransitions(context, animation, secondaryAnimation, child) {
    return new transitions.FadeTransition.new({opacity: new animations.CurvedAnimation.new({parent: animation, curve: curves.Curves.easeOut}), child: child, $creationLocationd_0dea112b090073317d4: C[70] || CT.C70});
  };
  dialog.showDialog = function showDialog(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
    let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : C[54] || CT.C54;
    let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
    let useSafeArea = opts && 'useSafeArea' in opts ? opts.useSafeArea : true;
    let useRootNavigator = opts && 'useRootNavigator' in opts ? opts.useRootNavigator : true;
    let routeSettings = opts && 'routeSettings' in opts ? opts.routeSettings : null;
    let anchorPoint = opts && 'anchorPoint' in opts ? opts.anchorPoint : null;
    if (!(builder !== null)) dart.assertFailed(null, I[0], 1152, 10, "builder != null");
    if (!(barrierDismissible !== null)) dart.assertFailed(null, I[0], 1153, 10, "barrierDismissible != null");
    if (!(useSafeArea !== null)) dart.assertFailed(null, I[0], 1154, 10, "useSafeArea != null");
    if (!(useRootNavigator !== null)) dart.assertFailed(null, I[0], 1155, 10, "useRootNavigator != null");
    if (!dialog._debugIsActive(context)) dart.assertFailed(null, I[0], 1156, 10, "_debugIsActive(context)");
    if (!debug.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[0], 1157, 10, "debugCheckHasMaterialLocalizations(context)");
    let themes = inherited_theme.InheritedTheme.capture({from: context, to: navigator.Navigator.of(context, {rootNavigator: useRootNavigator}).context});
    return navigator.Navigator.of(context, {rootNavigator: useRootNavigator}).push(T, new (dialog.DialogRoute$(T)).new({context: context, builder: builder, barrierColor: barrierColor, barrierDismissible: barrierDismissible, barrierLabel: barrierLabel, useSafeArea: useSafeArea, settings: routeSettings, themes: themes, anchorPoint: anchorPoint}));
  };
  dialog._debugIsActive = function _debugIsActive(context) {
    if (framework.Element.is(context) && !context.debugIsActive) {
      dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("This BuildContext is no longer valid."), new assertions.ErrorDescription.new("The showDialog function context parameter is a BuildContext that is no longer valid."), new assertions.ErrorHint.new("This can commonly occur when the showDialog function is called after awaiting a Future. " + "In this situation the BuildContext might refer to a widget that has already been disposed during the await. " + "Consider using a parent context instead.")])));
    }
    return true;
  };
  dialog._paddingScaleFactor = function _paddingScaleFactor(textScaleFactor) {
    let clampedTextScaleFactor = math.clampDouble(textScaleFactor, 1.0, 2.0);
    return dart.nullCheck(ui.lerpDouble(1.0, 1.0 / 3.0, clampedTextScaleFactor - 1.0));
  };
  dart.defineLazy(dialog, {
    /*dialog._defaultInsetPadding*/get _defaultInsetPadding() {
      return C[2] || CT.C2;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/dialog.dart", {
    "package:flutter/src/material/dialog.dart": dialog
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dialog.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/dialog.dart.lib.js"}');
  // Exports:
  return {
    src__material__dialog: dialog
  };
}));

//# sourceMappingURL=dialog.dart.lib.js.map
