define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/painting/circle_border.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/stadium_border.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/painting/shape_decoration.dart', 'packages/flutter/src/widgets/animated_switcher.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/material/material_state_mixin.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/widgets/slotted_render_object_widget.dart', 'packages/flutter/src/rendering/layout_helper.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart'], (function load__packages__flutter__src__material__chip_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__painting__circle_border$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__stadium_border$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__painting__shape_decoration$46dart, packages__flutter__src__widgets__animated_switcher$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__material__material_state_mixin$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__widgets__slotted_render_object_widget$46dart, packages__flutter__src__rendering__layout_helper$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const debug$ = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const chip_theme = packages__flutter__src__material__icon_button$46dart.src__material__chip_theme;
  const tooltip$ = packages__flutter__src__material__icon_button$46dart.src__material__tooltip;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const circle_border = packages__flutter__src__painting__circle_border$46dart.src__painting__circle_border;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const stadium_border = packages__flutter__src__painting__stadium_border$46dart.src__painting__stadium_border;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const math$ = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const shape_decoration = packages__flutter__src__painting__shape_decoration$46dart.src__painting__shape_decoration;
  const animated_switcher = packages__flutter__src__widgets__animated_switcher$46dart.src__widgets__animated_switcher;
  const box$ = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const material_state_mixin = packages__flutter__src__material__material_state_mixin$46dart.src__material__material_state_mixin;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const slotted_render_object_widget = packages__flutter__src__widgets__slotted_render_object_widget$46dart.src__widgets__slotted_render_object_widget;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  var chip = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $isFinite = dartx.isFinite;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    BorderSideN: () => (T.BorderSideN = dart.constFn(dart.nullable(borders.BorderSide)))(),
    OutlinedBorderN: () => (T.OutlinedBorderN = dart.constFn(dart.nullable(borders.OutlinedBorder)))(),
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(ui.Color)))(),
    JSArrayOfListenable: () => (T.JSArrayOfListenable = dart.constFn(_interceptors.JSArray$(change_notifier.Listenable)))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetNToContainer: () => (T.BuildContextAndWidgetNToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, T.WidgetN()])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box$.BoxHitTestResult, ui.Offset])))(),
    ListOf_ChipSlot: () => (T.ListOf_ChipSlot = dart.constFn(core.List$(chip._ChipSlot)))(),
    SlottedContainerRenderObjectMixinOf_ChipSlot: () => (T.SlottedContainerRenderObjectMixinOf_ChipSlot = dart.constFn(slotted_render_object_widget.SlottedContainerRenderObjectMixin$(chip._ChipSlot)))(),
    JSArrayOfRenderBox: () => (T.JSArrayOfRenderBox = dart.constFn(_interceptors.JSArray$(box$.RenderBox)))(),
    RenderBoxAndBoxConstraintsToSize: () => (T.RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box$.RenderBox, box$.BoxConstraints])))(),
    SizeAnddoubleToOffset: () => (T.SizeAnddoubleToOffset = dart.constFn(dart.fnType(ui.Offset, [ui.Size, core.double])))(),
    PaintingContextAndOffsetTovoid: () => (T.PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Chip",
        [_Location_column]: 9,
        [_Location_line]: 568,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RawChip",
        [_Location_column]: 12,
        [_Location_line]: 653,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[5] || CT.C5,
        [BorderSide_style]: C[6] || CT.C6,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[7] || CT.C7
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: circle_border.CircleBorder.prototype,
        [OutlinedBorder_side]: C[4] || CT.C4
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RawChip",
        [_Location_column]: 9,
        [_Location_line]: 727,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: stadium_border.StadiumBorder.prototype,
        [OutlinedBorder_side]: C[4] || CT.C4
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Tooltip",
        [_Location_column]: 12,
        [_Location_line]: 1104,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 18,
        [_Location_line]: 1133,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InkWell",
        [_Location_column]: 16,
        [_Location_line]: 1127,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 1119,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 9,
        [_Location_line]: 1216,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 20,
        [_Location_line]: 1239,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTextStyle",
        [_Location_column]: 24,
        [_Location_line]: 1252,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedSwitcher",
        [_Location_column]: 25,
        [_Location_line]: 1260,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedSwitcher",
        [_Location_column]: 29,
        [_Location_line]: 1265,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ChipRenderWidget",
        [_Location_column]: 20,
        [_Location_line]: 1250,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedBuilder",
        [_Location_column]: 16,
        [_Location_line]: 1236,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "InkWell",
        [_Location_column]: 14,
        [_Location_line]: 1226,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 21,
        [_Location_line]: 1219,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: theme_data.MaterialTapTargetSize.prototype,
        [_Enum__name]: "padded",
        [_Enum_index]: 0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: box$.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: theme_data.MaterialTapTargetSize.prototype,
        [_Enum__name]: "shrinkWrap",
        [_Enum_index]: 1
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 14,
        [_Location_line]: 1307,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ChipRedirectingHitDetectionWidget",
        [_Location_column]: 14,
        [_Location_line]: 1305,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 1316,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 75000
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ChipRedirectingHitDetectionWidget",
        [_Location_column]: 9,
        [_Location_line]: 1332,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ChipRenderWidget",
        [_Location_column]: 9,
        [_Location_line]: 1374,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: chip._ChipSlot.prototype,
        [_Enum__name]: "label",
        [_Enum_index]: 0
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: chip._ChipSlot.prototype,
        [_Enum__name]: "avatar",
        [_Enum_index]: 1
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: chip._ChipSlot.prototype,
        [_Enum__name]: "deleteIcon",
        [_Enum_index]: 2
      });
    },
    get C37() {
      return C[37] = dart.constList([C[34] || CT.C34, C[35] || CT.C35, C[36] || CT.C36], chip._ChipSlot);
    },
    get C38() {
      return C[38] = dart.fn(layout_helper.ChildLayoutHelper.layoutChild, T.RenderBoxAndBoxConstraintsToSize());
    },
    get C39() {
      return C[39] = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, T.RenderBoxAndBoxConstraintsToSize());
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "dark",
        [_Enum_index]: 0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286578688.0
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278222848.0
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 195000
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 150000
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 50000
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1612257561
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 34,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57657
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[52] || CT.C52,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 18,
        [Icon_icon]: C[53] || CT.C53
      });
    }
  }, false);
  var C = Array(54).fill(void 0);
  var I = [
    "package:flutter/src/material/chip.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip.dart"
  ];
  chip.ChipAttributes = class ChipAttributes extends core.Object {};
  (chip.ChipAttributes.__ = function() {
    ;
  }).prototype = chip.ChipAttributes.prototype;
  dart.addTypeTests(chip.ChipAttributes);
  dart.addTypeCaches(chip.ChipAttributes);
  dart.setLibraryUri(chip.ChipAttributes, I[0]);
  chip.DeletableChipAttributes = class DeletableChipAttributes extends core.Object {};
  (chip.DeletableChipAttributes.__ = function() {
    ;
  }).prototype = chip.DeletableChipAttributes.prototype;
  dart.addTypeTests(chip.DeletableChipAttributes);
  dart.addTypeCaches(chip.DeletableChipAttributes);
  dart.setLibraryUri(chip.DeletableChipAttributes, I[0]);
  chip.CheckmarkableChipAttributes = class CheckmarkableChipAttributes extends core.Object {};
  (chip.CheckmarkableChipAttributes.__ = function() {
    ;
  }).prototype = chip.CheckmarkableChipAttributes.prototype;
  dart.addTypeTests(chip.CheckmarkableChipAttributes);
  dart.addTypeCaches(chip.CheckmarkableChipAttributes);
  dart.setLibraryUri(chip.CheckmarkableChipAttributes, I[0]);
  chip.SelectableChipAttributes = class SelectableChipAttributes extends core.Object {};
  (chip.SelectableChipAttributes.__ = function() {
    ;
  }).prototype = chip.SelectableChipAttributes.prototype;
  dart.addTypeTests(chip.SelectableChipAttributes);
  dart.addTypeCaches(chip.SelectableChipAttributes);
  dart.setLibraryUri(chip.SelectableChipAttributes, I[0]);
  chip.DisabledChipAttributes = class DisabledChipAttributes extends core.Object {};
  (chip.DisabledChipAttributes.__ = function() {
    ;
  }).prototype = chip.DisabledChipAttributes.prototype;
  dart.addTypeTests(chip.DisabledChipAttributes);
  dart.addTypeCaches(chip.DisabledChipAttributes);
  dart.setLibraryUri(chip.DisabledChipAttributes, I[0]);
  chip.TappableChipAttributes = class TappableChipAttributes extends core.Object {};
  (chip.TappableChipAttributes.__ = function() {
    ;
  }).prototype = chip.TappableChipAttributes.prototype;
  dart.addTypeTests(chip.TappableChipAttributes);
  dart.addTypeCaches(chip.TappableChipAttributes);
  dart.setLibraryUri(chip.TappableChipAttributes, I[0]);
  var avatar$ = dart.privateName(chip, "Chip.avatar");
  var label$ = dart.privateName(chip, "Chip.label");
  var labelStyle$ = dart.privateName(chip, "Chip.labelStyle");
  var labelPadding$ = dart.privateName(chip, "Chip.labelPadding");
  var side$ = dart.privateName(chip, "Chip.side");
  var shape$ = dart.privateName(chip, "Chip.shape");
  var clipBehavior$ = dart.privateName(chip, "Chip.clipBehavior");
  var focusNode$ = dart.privateName(chip, "Chip.focusNode");
  var autofocus$ = dart.privateName(chip, "Chip.autofocus");
  var backgroundColor$ = dart.privateName(chip, "Chip.backgroundColor");
  var padding$ = dart.privateName(chip, "Chip.padding");
  var visualDensity$ = dart.privateName(chip, "Chip.visualDensity");
  var deleteIcon$ = dart.privateName(chip, "Chip.deleteIcon");
  var onDeleted$ = dart.privateName(chip, "Chip.onDeleted");
  var deleteIconColor$ = dart.privateName(chip, "Chip.deleteIconColor");
  var deleteButtonTooltipMessage$ = dart.privateName(chip, "Chip.deleteButtonTooltipMessage");
  var materialTapTargetSize$ = dart.privateName(chip, "Chip.materialTapTargetSize");
  var elevation$ = dart.privateName(chip, "Chip.elevation");
  var shadowColor$ = dart.privateName(chip, "Chip.shadowColor");
  var surfaceTintColor$ = dart.privateName(chip, "Chip.surfaceTintColor");
  var iconTheme$ = dart.privateName(chip, "Chip.iconTheme");
  var useDeleteButtonTooltip$ = dart.privateName(chip, "Chip.useDeleteButtonTooltip");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  chip.Chip = class Chip extends framework.StatelessWidget {
    get avatar() {
      return this[avatar$];
    }
    set avatar(value) {
      super.avatar = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get labelStyle() {
      return this[labelStyle$];
    }
    set labelStyle(value) {
      super.labelStyle = value;
    }
    get labelPadding() {
      return this[labelPadding$];
    }
    set labelPadding(value) {
      super.labelPadding = value;
    }
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get focusNode() {
      return this[focusNode$];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get autofocus() {
      return this[autofocus$];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get visualDensity() {
      return this[visualDensity$];
    }
    set visualDensity(value) {
      super.visualDensity = value;
    }
    get deleteIcon() {
      return this[deleteIcon$];
    }
    set deleteIcon(value) {
      super.deleteIcon = value;
    }
    get onDeleted() {
      return this[onDeleted$];
    }
    set onDeleted(value) {
      super.onDeleted = value;
    }
    get deleteIconColor() {
      return this[deleteIconColor$];
    }
    set deleteIconColor(value) {
      super.deleteIconColor = value;
    }
    get deleteButtonTooltipMessage() {
      return this[deleteButtonTooltipMessage$];
    }
    set deleteButtonTooltipMessage(value) {
      super.deleteButtonTooltipMessage = value;
    }
    get materialTapTargetSize() {
      return this[materialTapTargetSize$];
    }
    set materialTapTargetSize(value) {
      super.materialTapTargetSize = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get shadowColor() {
      return this[shadowColor$];
    }
    set shadowColor(value) {
      super.shadowColor = value;
    }
    get surfaceTintColor() {
      return this[surfaceTintColor$];
    }
    set surfaceTintColor(value) {
      super.surfaceTintColor = value;
    }
    get iconTheme() {
      return this[iconTheme$];
    }
    set iconTheme(value) {
      super.iconTheme = value;
    }
    get useDeleteButtonTooltip() {
      return this[useDeleteButtonTooltip$];
    }
    set useDeleteButtonTooltip(value) {
      super.useDeleteButtonTooltip = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let avatar = opts && 'avatar' in opts ? opts.avatar : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
      let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
      let deleteIcon = opts && 'deleteIcon' in opts ? opts.deleteIcon : null;
      let onDeleted = opts && 'onDeleted' in opts ? opts.onDeleted : null;
      let deleteIconColor = opts && 'deleteIconColor' in opts ? opts.deleteIconColor : null;
      let deleteButtonTooltipMessage = opts && 'deleteButtonTooltipMessage' in opts ? opts.deleteButtonTooltipMessage : null;
      let side = opts && 'side' in opts ? opts.side : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[0] || CT.C0;
      let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      let surfaceTintColor = opts && 'surfaceTintColor' in opts ? opts.surfaceTintColor : null;
      let iconTheme = opts && 'iconTheme' in opts ? opts.iconTheme : null;
      let useDeleteButtonTooltip = opts && 'useDeleteButtonTooltip' in opts ? opts.useDeleteButtonTooltip : true;
      return new chip.Chip.new({key: key, avatar: avatar, label: label, labelStyle: labelStyle, labelPadding: labelPadding, deleteIcon: deleteIcon, onDeleted: onDeleted, deleteIconColor: deleteIconColor, deleteButtonTooltipMessage: deleteButtonTooltipMessage, side: side, shape: shape, clipBehavior: clipBehavior, focusNode: focusNode, autofocus: autofocus, backgroundColor: backgroundColor, padding: padding, visualDensity: visualDensity, materialTapTargetSize: materialTapTargetSize, elevation: elevation, shadowColor: shadowColor, surfaceTintColor: surfaceTintColor, iconTheme: iconTheme, useDeleteButtonTooltip: useDeleteButtonTooltip, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    build(context) {
      if (!debug$.debugCheckHasMaterial(context)) dart.assertFailed(null, I[1], 652, 12, "debugCheckHasMaterial(context)");
      return new chip.RawChip.new({avatar: this.avatar, label: this.label, labelStyle: this.labelStyle, labelPadding: this.labelPadding, deleteIcon: this.deleteIcon, onDeleted: this.onDeleted, deleteIconColor: this.deleteIconColor, useDeleteButtonTooltip: this.useDeleteButtonTooltip, deleteButtonTooltipMessage: this.deleteButtonTooltipMessage, tapEnabled: false, side: this.side, shape: this.shape, clipBehavior: this.clipBehavior, focusNode: this.focusNode, autofocus: this.autofocus, backgroundColor: this.backgroundColor, padding: this.padding, visualDensity: this.visualDensity, materialTapTargetSize: this.materialTapTargetSize, elevation: this.elevation, shadowColor: this.shadowColor, surfaceTintColor: this.surfaceTintColor, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
  };
  (chip.Chip.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let avatar = opts && 'avatar' in opts ? opts.avatar : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
    let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
    let deleteIcon = opts && 'deleteIcon' in opts ? opts.deleteIcon : null;
    let onDeleted = opts && 'onDeleted' in opts ? opts.onDeleted : null;
    let deleteIconColor = opts && 'deleteIconColor' in opts ? opts.deleteIconColor : null;
    let deleteButtonTooltipMessage = opts && 'deleteButtonTooltipMessage' in opts ? opts.deleteButtonTooltipMessage : null;
    let side = opts && 'side' in opts ? opts.side : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[0] || CT.C0;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
    let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    let surfaceTintColor = opts && 'surfaceTintColor' in opts ? opts.surfaceTintColor : null;
    let iconTheme = opts && 'iconTheme' in opts ? opts.iconTheme : null;
    let useDeleteButtonTooltip = opts && 'useDeleteButtonTooltip' in opts ? opts.useDeleteButtonTooltip : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[avatar$] = avatar;
    this[label$] = label;
    this[labelStyle$] = labelStyle;
    this[labelPadding$] = labelPadding;
    this[deleteIcon$] = deleteIcon;
    this[onDeleted$] = onDeleted;
    this[deleteIconColor$] = deleteIconColor;
    this[deleteButtonTooltipMessage$] = deleteButtonTooltipMessage;
    this[side$] = side;
    this[shape$] = shape;
    this[clipBehavior$] = clipBehavior;
    this[focusNode$] = focusNode;
    this[autofocus$] = autofocus;
    this[backgroundColor$] = backgroundColor;
    this[padding$] = padding;
    this[visualDensity$] = visualDensity;
    this[materialTapTargetSize$] = materialTapTargetSize;
    this[elevation$] = elevation;
    this[shadowColor$] = shadowColor;
    this[surfaceTintColor$] = surfaceTintColor;
    this[iconTheme$] = iconTheme;
    this[useDeleteButtonTooltip$] = useDeleteButtonTooltip;
    if (!(label !== null)) dart.assertFailed(null, I[1], 596, 15, "label != null");
    if (!(autofocus !== null)) dart.assertFailed(null, I[1], 597, 15, "autofocus != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 598, 15, "clipBehavior != null");
    if (!(elevation == null || dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, I[1], 599, 15, "elevation == null || elevation >= 0.0");
    chip.Chip.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chip.Chip.prototype;
  dart.addTypeTests(chip.Chip);
  dart.addTypeCaches(chip.Chip);
  chip.Chip[dart.implements] = () => [chip.ChipAttributes, chip.DeletableChipAttributes];
  dart.setMethodSignature(chip.Chip, () => ({
    __proto__: dart.getMethods(chip.Chip.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(chip.Chip, I[0]);
  dart.setFieldSignature(chip.Chip, () => ({
    __proto__: dart.getFields(chip.Chip.__proto__),
    avatar: dart.finalFieldType(dart.nullable(framework.Widget)),
    label: dart.finalFieldType(framework.Widget),
    labelStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    labelPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    side: dart.finalFieldType(dart.nullable(borders.BorderSide)),
    shape: dart.finalFieldType(dart.nullable(borders.OutlinedBorder)),
    clipBehavior: dart.finalFieldType(ui.Clip),
    focusNode: dart.finalFieldType(dart.nullable(focus_manager.FocusNode)),
    autofocus: dart.finalFieldType(core.bool),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    visualDensity: dart.finalFieldType(dart.nullable(theme_data.VisualDensity)),
    deleteIcon: dart.finalFieldType(dart.nullable(framework.Widget)),
    onDeleted: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    deleteIconColor: dart.finalFieldType(dart.nullable(ui.Color)),
    deleteButtonTooltipMessage: dart.finalFieldType(dart.nullable(core.String)),
    materialTapTargetSize: dart.finalFieldType(dart.nullable(theme_data.MaterialTapTargetSize)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    shadowColor: dart.finalFieldType(dart.nullable(ui.Color)),
    surfaceTintColor: dart.finalFieldType(dart.nullable(ui.Color)),
    iconTheme: dart.finalFieldType(dart.nullable(icon_theme_data.IconThemeData)),
    useDeleteButtonTooltip: dart.finalFieldType(core.bool)
  }));
  var defaultProperties$ = dart.privateName(chip, "RawChip.defaultProperties");
  var avatar$0 = dart.privateName(chip, "RawChip.avatar");
  var label$0 = dart.privateName(chip, "RawChip.label");
  var labelStyle$0 = dart.privateName(chip, "RawChip.labelStyle");
  var labelPadding$0 = dart.privateName(chip, "RawChip.labelPadding");
  var deleteIcon$0 = dart.privateName(chip, "RawChip.deleteIcon");
  var onDeleted$0 = dart.privateName(chip, "RawChip.onDeleted");
  var deleteIconColor$0 = dart.privateName(chip, "RawChip.deleteIconColor");
  var deleteButtonTooltipMessage$0 = dart.privateName(chip, "RawChip.deleteButtonTooltipMessage");
  var onSelected$ = dart.privateName(chip, "RawChip.onSelected");
  var onPressed$ = dart.privateName(chip, "RawChip.onPressed");
  var pressElevation$ = dart.privateName(chip, "RawChip.pressElevation");
  var selected$ = dart.privateName(chip, "RawChip.selected");
  var isEnabled$ = dart.privateName(chip, "RawChip.isEnabled");
  var disabledColor$ = dart.privateName(chip, "RawChip.disabledColor");
  var selectedColor$ = dart.privateName(chip, "RawChip.selectedColor");
  var tooltip$0 = dart.privateName(chip, "RawChip.tooltip");
  var side$0 = dart.privateName(chip, "RawChip.side");
  var shape$0 = dart.privateName(chip, "RawChip.shape");
  var clipBehavior$0 = dart.privateName(chip, "RawChip.clipBehavior");
  var focusNode$0 = dart.privateName(chip, "RawChip.focusNode");
  var autofocus$0 = dart.privateName(chip, "RawChip.autofocus");
  var backgroundColor$0 = dart.privateName(chip, "RawChip.backgroundColor");
  var padding$0 = dart.privateName(chip, "RawChip.padding");
  var visualDensity$0 = dart.privateName(chip, "RawChip.visualDensity");
  var materialTapTargetSize$0 = dart.privateName(chip, "RawChip.materialTapTargetSize");
  var elevation$0 = dart.privateName(chip, "RawChip.elevation");
  var shadowColor$0 = dart.privateName(chip, "RawChip.shadowColor");
  var surfaceTintColor$0 = dart.privateName(chip, "RawChip.surfaceTintColor");
  var iconTheme$0 = dart.privateName(chip, "RawChip.iconTheme");
  var selectedShadowColor$ = dart.privateName(chip, "RawChip.selectedShadowColor");
  var showCheckmark$ = dart.privateName(chip, "RawChip.showCheckmark");
  var checkmarkColor$ = dart.privateName(chip, "RawChip.checkmarkColor");
  var avatarBorder$ = dart.privateName(chip, "RawChip.avatarBorder");
  var useDeleteButtonTooltip$0 = dart.privateName(chip, "RawChip.useDeleteButtonTooltip");
  var tapEnabled$ = dart.privateName(chip, "RawChip.tapEnabled");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  chip.RawChip = class RawChip extends framework.StatefulWidget {
    get defaultProperties() {
      return this[defaultProperties$];
    }
    set defaultProperties(value) {
      super.defaultProperties = value;
    }
    get avatar() {
      return this[avatar$0];
    }
    set avatar(value) {
      super.avatar = value;
    }
    get label() {
      return this[label$0];
    }
    set label(value) {
      super.label = value;
    }
    get labelStyle() {
      return this[labelStyle$0];
    }
    set labelStyle(value) {
      super.labelStyle = value;
    }
    get labelPadding() {
      return this[labelPadding$0];
    }
    set labelPadding(value) {
      super.labelPadding = value;
    }
    get deleteIcon() {
      return this[deleteIcon$0];
    }
    set deleteIcon(value) {
      super.deleteIcon = value;
    }
    get onDeleted() {
      return this[onDeleted$0];
    }
    set onDeleted(value) {
      super.onDeleted = value;
    }
    get deleteIconColor() {
      return this[deleteIconColor$0];
    }
    set deleteIconColor(value) {
      super.deleteIconColor = value;
    }
    get deleteButtonTooltipMessage() {
      return this[deleteButtonTooltipMessage$0];
    }
    set deleteButtonTooltipMessage(value) {
      super.deleteButtonTooltipMessage = value;
    }
    get onSelected() {
      return this[onSelected$];
    }
    set onSelected(value) {
      super.onSelected = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get pressElevation() {
      return this[pressElevation$];
    }
    set pressElevation(value) {
      super.pressElevation = value;
    }
    get selected() {
      return this[selected$];
    }
    set selected(value) {
      super.selected = value;
    }
    get isEnabled() {
      return this[isEnabled$];
    }
    set isEnabled(value) {
      super.isEnabled = value;
    }
    get disabledColor() {
      return this[disabledColor$];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get selectedColor() {
      return this[selectedColor$];
    }
    set selectedColor(value) {
      super.selectedColor = value;
    }
    get tooltip() {
      return this[tooltip$0];
    }
    set tooltip(value) {
      super.tooltip = value;
    }
    get side() {
      return this[side$0];
    }
    set side(value) {
      super.side = value;
    }
    get shape() {
      return this[shape$0];
    }
    set shape(value) {
      super.shape = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get focusNode() {
      return this[focusNode$0];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get autofocus() {
      return this[autofocus$0];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get padding() {
      return this[padding$0];
    }
    set padding(value) {
      super.padding = value;
    }
    get visualDensity() {
      return this[visualDensity$0];
    }
    set visualDensity(value) {
      super.visualDensity = value;
    }
    get materialTapTargetSize() {
      return this[materialTapTargetSize$0];
    }
    set materialTapTargetSize(value) {
      super.materialTapTargetSize = value;
    }
    get elevation() {
      return this[elevation$0];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get shadowColor() {
      return this[shadowColor$0];
    }
    set shadowColor(value) {
      super.shadowColor = value;
    }
    get surfaceTintColor() {
      return this[surfaceTintColor$0];
    }
    set surfaceTintColor(value) {
      super.surfaceTintColor = value;
    }
    get iconTheme() {
      return this[iconTheme$0];
    }
    set iconTheme(value) {
      super.iconTheme = value;
    }
    get selectedShadowColor() {
      return this[selectedShadowColor$];
    }
    set selectedShadowColor(value) {
      super.selectedShadowColor = value;
    }
    get showCheckmark() {
      return this[showCheckmark$];
    }
    set showCheckmark(value) {
      super.showCheckmark = value;
    }
    get checkmarkColor() {
      return this[checkmarkColor$];
    }
    set checkmarkColor(value) {
      super.checkmarkColor = value;
    }
    get avatarBorder() {
      return this[avatarBorder$];
    }
    set avatarBorder(value) {
      super.avatarBorder = value;
    }
    get useDeleteButtonTooltip() {
      return this[useDeleteButtonTooltip$0];
    }
    set useDeleteButtonTooltip(value) {
      super.useDeleteButtonTooltip = value;
    }
    get tapEnabled() {
      return this[tapEnabled$];
    }
    set tapEnabled(value) {
      super.tapEnabled = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let defaultProperties = opts && 'defaultProperties' in opts ? opts.defaultProperties : null;
      let avatar = opts && 'avatar' in opts ? opts.avatar : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
      let deleteIcon = opts && 'deleteIcon' in opts ? opts.deleteIcon : null;
      let onDeleted = opts && 'onDeleted' in opts ? opts.onDeleted : null;
      let deleteIconColor = opts && 'deleteIconColor' in opts ? opts.deleteIconColor : null;
      let deleteButtonTooltipMessage = opts && 'deleteButtonTooltipMessage' in opts ? opts.deleteButtonTooltipMessage : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let onSelected = opts && 'onSelected' in opts ? opts.onSelected : null;
      let pressElevation = opts && 'pressElevation' in opts ? opts.pressElevation : null;
      let tapEnabled = opts && 'tapEnabled' in opts ? opts.tapEnabled : true;
      let selected = opts && 'selected' in opts ? opts.selected : false;
      let isEnabled = opts && 'isEnabled' in opts ? opts.isEnabled : true;
      let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
      let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let side = opts && 'side' in opts ? opts.side : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[0] || CT.C0;
      let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      let surfaceTintColor = opts && 'surfaceTintColor' in opts ? opts.surfaceTintColor : null;
      let iconTheme = opts && 'iconTheme' in opts ? opts.iconTheme : null;
      let selectedShadowColor = opts && 'selectedShadowColor' in opts ? opts.selectedShadowColor : null;
      let showCheckmark = opts && 'showCheckmark' in opts ? opts.showCheckmark : true;
      let checkmarkColor = opts && 'checkmarkColor' in opts ? opts.checkmarkColor : null;
      let avatarBorder = opts && 'avatarBorder' in opts ? opts.avatarBorder : C[3] || CT.C3;
      let useDeleteButtonTooltip = opts && 'useDeleteButtonTooltip' in opts ? opts.useDeleteButtonTooltip : true;
      return new chip.RawChip.new({key: key, defaultProperties: defaultProperties, avatar: avatar, label: label, labelStyle: labelStyle, padding: padding, visualDensity: visualDensity, labelPadding: labelPadding, deleteIcon: deleteIcon, onDeleted: onDeleted, deleteIconColor: deleteIconColor, deleteButtonTooltipMessage: deleteButtonTooltipMessage, onPressed: onPressed, onSelected: onSelected, pressElevation: pressElevation, tapEnabled: tapEnabled, selected: selected, isEnabled: isEnabled, disabledColor: disabledColor, selectedColor: selectedColor, tooltip: tooltip, side: side, shape: shape, clipBehavior: clipBehavior, focusNode: focusNode, autofocus: autofocus, backgroundColor: backgroundColor, materialTapTargetSize: materialTapTargetSize, elevation: elevation, shadowColor: shadowColor, surfaceTintColor: surfaceTintColor, iconTheme: iconTheme, selectedShadowColor: selectedShadowColor, showCheckmark: showCheckmark, checkmarkColor: checkmarkColor, avatarBorder: avatarBorder, useDeleteButtonTooltip: useDeleteButtonTooltip, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    createState() {
      return new chip._RawChipState.new();
    }
  };
  (chip.RawChip.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let defaultProperties = opts && 'defaultProperties' in opts ? opts.defaultProperties : null;
    let avatar = opts && 'avatar' in opts ? opts.avatar : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
    let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
    let deleteIcon = opts && 'deleteIcon' in opts ? opts.deleteIcon : null;
    let onDeleted = opts && 'onDeleted' in opts ? opts.onDeleted : null;
    let deleteIconColor = opts && 'deleteIconColor' in opts ? opts.deleteIconColor : null;
    let deleteButtonTooltipMessage = opts && 'deleteButtonTooltipMessage' in opts ? opts.deleteButtonTooltipMessage : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let onSelected = opts && 'onSelected' in opts ? opts.onSelected : null;
    let pressElevation = opts && 'pressElevation' in opts ? opts.pressElevation : null;
    let tapEnabled = opts && 'tapEnabled' in opts ? opts.tapEnabled : true;
    let selected = opts && 'selected' in opts ? opts.selected : false;
    let isEnabled = opts && 'isEnabled' in opts ? opts.isEnabled : true;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let side = opts && 'side' in opts ? opts.side : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[0] || CT.C0;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    let surfaceTintColor = opts && 'surfaceTintColor' in opts ? opts.surfaceTintColor : null;
    let iconTheme = opts && 'iconTheme' in opts ? opts.iconTheme : null;
    let selectedShadowColor = opts && 'selectedShadowColor' in opts ? opts.selectedShadowColor : null;
    let showCheckmark = opts && 'showCheckmark' in opts ? opts.showCheckmark : true;
    let checkmarkColor = opts && 'checkmarkColor' in opts ? opts.checkmarkColor : null;
    let avatarBorder = opts && 'avatarBorder' in opts ? opts.avatarBorder : C[3] || CT.C3;
    let useDeleteButtonTooltip = opts && 'useDeleteButtonTooltip' in opts ? opts.useDeleteButtonTooltip : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[defaultProperties$] = defaultProperties;
    this[avatar$0] = avatar;
    this[label$0] = label;
    this[labelStyle$0] = labelStyle;
    this[padding$0] = padding;
    this[visualDensity$0] = visualDensity;
    this[labelPadding$0] = labelPadding;
    this[onDeleted$0] = onDeleted;
    this[deleteIconColor$0] = deleteIconColor;
    this[deleteButtonTooltipMessage$0] = deleteButtonTooltipMessage;
    this[onPressed$] = onPressed;
    this[onSelected$] = onSelected;
    this[pressElevation$] = pressElevation;
    this[tapEnabled$] = tapEnabled;
    this[selected$] = selected;
    this[isEnabled$] = isEnabled;
    this[disabledColor$] = disabledColor;
    this[selectedColor$] = selectedColor;
    this[tooltip$0] = tooltip;
    this[side$0] = side;
    this[shape$0] = shape;
    this[clipBehavior$0] = clipBehavior;
    this[focusNode$0] = focusNode;
    this[autofocus$0] = autofocus;
    this[backgroundColor$0] = backgroundColor;
    this[materialTapTargetSize$0] = materialTapTargetSize;
    this[elevation$0] = elevation;
    this[shadowColor$0] = shadowColor;
    this[surfaceTintColor$0] = surfaceTintColor;
    this[iconTheme$0] = iconTheme;
    this[selectedShadowColor$] = selectedShadowColor;
    this[showCheckmark$] = showCheckmark;
    this[checkmarkColor$] = checkmarkColor;
    this[avatarBorder$] = avatarBorder;
    this[useDeleteButtonTooltip$0] = useDeleteButtonTooltip;
    if (!(label !== null)) dart.assertFailed(null, I[1], 769, 15, "label != null");
    if (!(isEnabled !== null)) dart.assertFailed(null, I[1], 770, 15, "isEnabled != null");
    if (!(selected !== null)) dart.assertFailed(null, I[1], 771, 15, "selected != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 772, 15, "clipBehavior != null");
    if (!(autofocus !== null)) dart.assertFailed(null, I[1], 773, 15, "autofocus != null");
    if (!(pressElevation == null || dart.notNull(pressElevation) >= 0.0)) dart.assertFailed(null, I[1], 774, 15, "pressElevation == null || pressElevation >= 0.0");
    if (!(elevation == null || dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, I[1], 775, 15, "elevation == null || elevation >= 0.0");
    this[deleteIcon$0] = (t0 = deleteIcon, t0 == null ? chip._kDefaultDeleteIcon : t0);
    chip.RawChip.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chip.RawChip.prototype;
  dart.addTypeTests(chip.RawChip);
  dart.addTypeCaches(chip.RawChip);
  chip.RawChip[dart.implements] = () => [chip.ChipAttributes, chip.DeletableChipAttributes, chip.SelectableChipAttributes, chip.CheckmarkableChipAttributes, chip.DisabledChipAttributes, chip.TappableChipAttributes];
  dart.setMethodSignature(chip.RawChip, () => ({
    __proto__: dart.getMethods(chip.RawChip.__proto__),
    createState: dart.fnType(framework.State$(chip.RawChip), [])
  }));
  dart.setLibraryUri(chip.RawChip, I[0]);
  dart.setFieldSignature(chip.RawChip, () => ({
    __proto__: dart.getFields(chip.RawChip.__proto__),
    defaultProperties: dart.finalFieldType(dart.nullable(chip_theme.ChipThemeData)),
    avatar: dart.finalFieldType(dart.nullable(framework.Widget)),
    label: dart.finalFieldType(framework.Widget),
    labelStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    labelPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    deleteIcon: dart.finalFieldType(framework.Widget),
    onDeleted: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    deleteIconColor: dart.finalFieldType(dart.nullable(ui.Color)),
    deleteButtonTooltipMessage: dart.finalFieldType(dart.nullable(core.String)),
    onSelected: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    onPressed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    pressElevation: dart.finalFieldType(dart.nullable(core.double)),
    selected: dart.finalFieldType(core.bool),
    isEnabled: dart.finalFieldType(core.bool),
    disabledColor: dart.finalFieldType(dart.nullable(ui.Color)),
    selectedColor: dart.finalFieldType(dart.nullable(ui.Color)),
    tooltip: dart.finalFieldType(dart.nullable(core.String)),
    side: dart.finalFieldType(dart.nullable(borders.BorderSide)),
    shape: dart.finalFieldType(dart.nullable(borders.OutlinedBorder)),
    clipBehavior: dart.finalFieldType(ui.Clip),
    focusNode: dart.finalFieldType(dart.nullable(focus_manager.FocusNode)),
    autofocus: dart.finalFieldType(core.bool),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    visualDensity: dart.finalFieldType(dart.nullable(theme_data.VisualDensity)),
    materialTapTargetSize: dart.finalFieldType(dart.nullable(theme_data.MaterialTapTargetSize)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    shadowColor: dart.finalFieldType(dart.nullable(ui.Color)),
    surfaceTintColor: dart.finalFieldType(dart.nullable(ui.Color)),
    iconTheme: dart.finalFieldType(dart.nullable(icon_theme_data.IconThemeData)),
    selectedShadowColor: dart.finalFieldType(dart.nullable(ui.Color)),
    showCheckmark: dart.finalFieldType(dart.nullable(core.bool)),
    checkmarkColor: dart.finalFieldType(dart.nullable(ui.Color)),
    avatarBorder: dart.finalFieldType(borders.ShapeBorder),
    useDeleteButtonTooltip: dart.finalFieldType(core.bool),
    tapEnabled: dart.finalFieldType(core.bool)
  }));
  var ___RawChipState_selectController = dart.privateName(chip, "_#_RawChipState#selectController");
  var ___RawChipState_avatarDrawerController = dart.privateName(chip, "_#_RawChipState#avatarDrawerController");
  var ___RawChipState_deleteDrawerController = dart.privateName(chip, "_#_RawChipState#deleteDrawerController");
  var ___RawChipState_enableController = dart.privateName(chip, "_#_RawChipState#enableController");
  var ___RawChipState_checkmarkAnimation = dart.privateName(chip, "_#_RawChipState#checkmarkAnimation");
  var ___RawChipState_avatarDrawerAnimation = dart.privateName(chip, "_#_RawChipState#avatarDrawerAnimation");
  var ___RawChipState_deleteDrawerAnimation = dart.privateName(chip, "_#_RawChipState#deleteDrawerAnimation");
  var ___RawChipState_enableAnimation = dart.privateName(chip, "_#_RawChipState#enableAnimation");
  var ___RawChipState_selectionFade = dart.privateName(chip, "_#_RawChipState#selectionFade");
  var _isTapping = dart.privateName(chip, "_isTapping");
  var _handleTapDown = dart.privateName(chip, "_handleTapDown");
  var _handleTapCancel = dart.privateName(chip, "_handleTapCancel");
  var _handleTap = dart.privateName(chip, "_handleTap");
  var _getShape = dart.privateName(chip, "_getShape");
  var _getBackgroundColor = dart.privateName(chip, "_getBackgroundColor");
  var _wrapWithTooltip = dart.privateName(chip, "_wrapWithTooltip");
  var _buildDeleteIcon = dart.privateName(chip, "_buildDeleteIcon");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var BoxConstraints_maxHeight = dart.privateName(box$, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box$, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box$, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box$, "BoxConstraints.minWidth");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  const State_MaterialStateMixin$36 = class State_MaterialStateMixin extends framework.State$(chip.RawChip) {};
  (State_MaterialStateMixin$36.new = function() {
    material_state_mixin.MaterialStateMixin$(chip.RawChip)[dart.mixinNew].call(this);
    State_MaterialStateMixin$36.__proto__.new.call(this);
  }).prototype = State_MaterialStateMixin$36.prototype;
  dart.applyMixin(State_MaterialStateMixin$36, material_state_mixin.MaterialStateMixin$(chip.RawChip));
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends State_MaterialStateMixin$36 {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(chip.RawChip)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(chip.RawChip));
  chip._RawChipState = class _RawChipState extends State_TickerProviderStateMixin$36 {
    get selectController() {
      let t0;
      t0 = this[___RawChipState_selectController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("selectController")) : t0;
    }
    set selectController(selectController$35param) {
      this[___RawChipState_selectController] = selectController$35param;
    }
    get avatarDrawerController() {
      let t0;
      t0 = this[___RawChipState_avatarDrawerController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("avatarDrawerController")) : t0;
    }
    set avatarDrawerController(avatarDrawerController$35param) {
      this[___RawChipState_avatarDrawerController] = avatarDrawerController$35param;
    }
    get deleteDrawerController() {
      let t0;
      t0 = this[___RawChipState_deleteDrawerController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("deleteDrawerController")) : t0;
    }
    set deleteDrawerController(deleteDrawerController$35param) {
      this[___RawChipState_deleteDrawerController] = deleteDrawerController$35param;
    }
    get enableController() {
      let t0;
      t0 = this[___RawChipState_enableController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("enableController")) : t0;
    }
    set enableController(enableController$35param) {
      this[___RawChipState_enableController] = enableController$35param;
    }
    get checkmarkAnimation() {
      let t0;
      t0 = this[___RawChipState_checkmarkAnimation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("checkmarkAnimation")) : t0;
    }
    set checkmarkAnimation(checkmarkAnimation$35param) {
      this[___RawChipState_checkmarkAnimation] = checkmarkAnimation$35param;
    }
    get avatarDrawerAnimation() {
      let t0;
      t0 = this[___RawChipState_avatarDrawerAnimation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("avatarDrawerAnimation")) : t0;
    }
    set avatarDrawerAnimation(avatarDrawerAnimation$35param) {
      this[___RawChipState_avatarDrawerAnimation] = avatarDrawerAnimation$35param;
    }
    get deleteDrawerAnimation() {
      let t0;
      t0 = this[___RawChipState_deleteDrawerAnimation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("deleteDrawerAnimation")) : t0;
    }
    set deleteDrawerAnimation(deleteDrawerAnimation$35param) {
      this[___RawChipState_deleteDrawerAnimation] = deleteDrawerAnimation$35param;
    }
    get enableAnimation() {
      let t0;
      t0 = this[___RawChipState_enableAnimation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("enableAnimation")) : t0;
    }
    set enableAnimation(enableAnimation$35param) {
      this[___RawChipState_enableAnimation] = enableAnimation$35param;
    }
    get selectionFade() {
      let t0;
      t0 = this[___RawChipState_selectionFade];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("selectionFade")) : t0;
    }
    set selectionFade(selectionFade$35param) {
      this[___RawChipState_selectionFade] = selectionFade$35param;
    }
    get hasDeleteButton() {
      return this.widget.onDeleted != null;
    }
    get hasAvatar() {
      return this.widget.avatar != null;
    }
    get canTap() {
      return this.widget.isEnabled && this.widget.tapEnabled && (this.widget.onPressed != null || this.widget.onSelected != null);
    }
    get isTapping() {
      return this.canTap && this[_isTapping];
    }
    initState() {
      if (!(this.widget.onSelected == null || this.widget.onPressed == null)) dart.assertFailed(null, I[1], 899, 12, "widget.onSelected == null || widget.onPressed == null");
      super.initState();
      this.setMaterialState(material_state.MaterialState.disabled, !this.widget.isEnabled);
      this.setMaterialState(material_state.MaterialState.selected, this.widget.selected);
      this.selectController = new animation_controller.AnimationController.new({duration: chip._kSelectDuration, value: this.widget.selected === true ? 1.0 : 0.0, vsync: this});
      this.selectionFade = new animations.CurvedAnimation.new({parent: this.selectController, curve: curves.Curves.fastOutSlowIn});
      this.avatarDrawerController = new animation_controller.AnimationController.new({duration: chip._kDrawerDuration, value: this.hasAvatar || this.widget.selected === true ? 1.0 : 0.0, vsync: this});
      this.deleteDrawerController = new animation_controller.AnimationController.new({duration: chip._kDrawerDuration, value: this.hasDeleteButton ? 1.0 : 0.0, vsync: this});
      this.enableController = new animation_controller.AnimationController.new({duration: chip._kDisableDuration, value: this.widget.isEnabled ? 1.0 : 0.0, vsync: this});
      let checkmarkPercentage = chip._kCheckmarkDuration.inMilliseconds / chip._kSelectDuration.inMilliseconds;
      let checkmarkReversePercentage = chip._kCheckmarkReverseDuration.inMilliseconds / chip._kSelectDuration.inMilliseconds;
      let avatarDrawerReversePercentage = chip._kReverseDrawerDuration.inMilliseconds / chip._kSelectDuration.inMilliseconds;
      this.checkmarkAnimation = new animations.CurvedAnimation.new({parent: this.selectController, curve: new curves.Interval.new(1.0 - checkmarkPercentage, 1.0, {curve: curves.Curves.fastOutSlowIn}), reverseCurve: new curves.Interval.new(1.0 - checkmarkReversePercentage, 1.0, {curve: curves.Curves.fastOutSlowIn})});
      this.deleteDrawerAnimation = new animations.CurvedAnimation.new({parent: this.deleteDrawerController, curve: curves.Curves.fastOutSlowIn});
      this.avatarDrawerAnimation = new animations.CurvedAnimation.new({parent: this.avatarDrawerController, curve: curves.Curves.fastOutSlowIn, reverseCurve: new curves.Interval.new(1.0 - avatarDrawerReversePercentage, 1.0, {curve: curves.Curves.fastOutSlowIn})});
      this.enableAnimation = new animations.CurvedAnimation.new({parent: this.enableController, curve: curves.Curves.fastOutSlowIn});
    }
    dispose() {
      this.selectController.dispose();
      this.avatarDrawerController.dispose();
      this.deleteDrawerController.dispose();
      this.enableController.dispose();
      super.dispose();
    }
    [_handleTapDown](details) {
      if (!this.canTap) {
        return;
      }
      this.setMaterialState(material_state.MaterialState.pressed, true);
      this.setState(dart.fn(() => {
        this[_isTapping] = true;
      }, T.VoidTovoid()));
    }
    [_handleTapCancel]() {
      if (!this.canTap) {
        return;
      }
      this.setMaterialState(material_state.MaterialState.pressed, false);
      this.setState(dart.fn(() => {
        this[_isTapping] = false;
      }, T.VoidTovoid()));
    }
    [_handleTap]() {
      let t0, t0$;
      if (!this.canTap) {
        return;
      }
      this.setMaterialState(material_state.MaterialState.pressed, false);
      this.setState(dart.fn(() => {
        this[_isTapping] = false;
      }, T.VoidTovoid()));
      t0 = this.widget.onSelected;
      t0 == null ? null : t0(!this.widget.selected);
      t0$ = this.widget.onPressed;
      t0$ == null ? null : t0$();
    }
    [_getShape](theme, chipTheme, chipDefaults) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let resolvedSide = (t0$ = (t0 = material_state.MaterialStateProperty.resolveAs(T.BorderSideN(), this.widget.side, this.materialStates), t0 == null ? material_state.MaterialStateProperty.resolveAs(T.BorderSideN(), chipTheme.side, this.materialStates) : t0), t0$ == null ? material_state.MaterialStateProperty.resolveAs(T.BorderSideN(), chipDefaults.side, this.materialStates) : t0$);
      let resolvedShape = (t0$2 = (t0$1 = (t0$0 = material_state.MaterialStateProperty.resolveAs(T.OutlinedBorderN(), this.widget.shape, this.materialStates), t0$0 == null ? material_state.MaterialStateProperty.resolveAs(T.OutlinedBorderN(), chipTheme.shape, this.materialStates) : t0$0), t0$1 == null ? material_state.MaterialStateProperty.resolveAs(T.OutlinedBorderN(), chipDefaults.shape, this.materialStates) : t0$1), t0$2 == null ? C[9] || CT.C9 : t0$2);
      return resolvedShape.copyWith({side: resolvedSide});
    }
    [_getBackgroundColor](theme, chipTheme, chipDefaults) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11;
      if (theme.useMaterial3) {
        let backgroundTween = new tween.ColorTween.new({begin: (t0$ = (t0 = this.widget.disabledColor, t0 == null ? chipTheme.disabledColor : t0), t0$ == null ? chipDefaults.disabledColor : t0$), end: (t0$1 = (t0$0 = this.widget.backgroundColor, t0$0 == null ? chipTheme.backgroundColor : t0$0), t0$1 == null ? chipDefaults.backgroundColor : t0$1)});
        let selectTween = new tween.ColorTween.new({begin: backgroundTween.evaluate(this.enableController), end: (t0$3 = (t0$2 = this.widget.selectedColor, t0$2 == null ? chipTheme.selectedColor : t0$2), t0$3 == null ? chipDefaults.selectedColor : t0$3)});
        return selectTween.evaluate(this.selectionFade);
      } else {
        let backgroundTween = new tween.ColorTween.new({begin: (t0$5 = (t0$4 = this.widget.disabledColor, t0$4 == null ? chipTheme.disabledColor : t0$4), t0$5 == null ? theme.disabledColor : t0$5), end: (t0$8 = (t0$7 = (t0$6 = this.widget.backgroundColor, t0$6 == null ? chipTheme.backgroundColor : t0$6), t0$7 == null ? theme.chipTheme.backgroundColor : t0$7), t0$8 == null ? chipDefaults.backgroundColor : t0$8)});
        let selectTween = new tween.ColorTween.new({begin: backgroundTween.evaluate(this.enableController), end: (t0$11 = (t0$10 = (t0$9 = this.widget.selectedColor, t0$9 == null ? chipTheme.selectedColor : t0$9), t0$10 == null ? theme.chipTheme.selectedColor : t0$10), t0$11 == null ? chipDefaults.selectedColor : t0$11)});
        return selectTween.evaluate(this.selectionFade);
      }
    }
    didUpdateWidget(oldWidget) {
      chip.RawChip.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (oldWidget.isEnabled !== this.widget.isEnabled) {
        this.setState(dart.fn(() => {
          this.setMaterialState(material_state.MaterialState.disabled, !this.widget.isEnabled);
          if (this.widget.isEnabled) {
            this.enableController.forward();
          } else {
            this.enableController.reverse();
          }
        }, T.VoidTovoid()));
      }
      if (!dart.equals(oldWidget.avatar, this.widget.avatar) || oldWidget.selected !== this.widget.selected) {
        this.setState(dart.fn(() => {
          if (this.hasAvatar || this.widget.selected === true) {
            this.avatarDrawerController.forward();
          } else {
            this.avatarDrawerController.reverse();
          }
        }, T.VoidTovoid()));
      }
      if (oldWidget.selected !== this.widget.selected) {
        this.setState(dart.fn(() => {
          this.setMaterialState(material_state.MaterialState.selected, this.widget.selected);
          if (this.widget.selected === true) {
            this.selectController.forward();
          } else {
            this.selectController.reverse();
          }
        }, T.VoidTovoid()));
      }
      if (!dart.equals(oldWidget.onDeleted, this.widget.onDeleted)) {
        this.setState(dart.fn(() => {
          if (this.hasDeleteButton) {
            this.deleteDrawerController.forward();
          } else {
            this.deleteDrawerController.reverse();
          }
        }, T.VoidTovoid()));
      }
    }
    [_wrapWithTooltip](opts) {
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let enabled = opts && 'enabled' in opts ? opts.enabled : true;
      let child = opts && 'child' in opts ? opts.child : null;
      if (child == null || !enabled || tooltip == null) {
        return child;
      }
      return new tooltip$.Tooltip.new({message: tooltip, child: child, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    [_buildDeleteIcon](context, theme, chipTheme, chipDefaults) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      if (!this.hasDeleteButton) {
        return null;
      }
      return new basic.Semantics.new({container: true, button: true, child: this[_wrapWithTooltip]({tooltip: this.widget.useDeleteButtonTooltip ? (t0 = this.widget.deleteButtonTooltipMessage, t0 == null ? material_localizations.MaterialLocalizations.of(context).deleteButtonTooltip : t0) : null, enabled: this.widget.onDeleted != null, child: new ink_well.InkWell.new({radius: (32 + dart.notNull((t0$0 = (t0$ = this.widget.padding, t0$ == null ? null : t0$.vertical), t0$0 == null ? 0.0 : t0$0))) * 0.45, splashFactory: new chip._UnconstrainedInkSplashFactory.new(theme$.Theme.of(context).splashFactory), onTap: this.widget.isEnabled ? this.widget.onDeleted : null, child: new icon_theme.IconTheme.new({data: theme.iconTheme.copyWith({color: (t0$3 = (t0$2 = (t0$1 = this.widget.deleteIconColor, t0$1 == null ? chipTheme.deleteIconColor : t0$1), t0$2 == null ? theme.chipTheme.deleteIconColor : t0$2), t0$3 == null ? chipDefaults.deleteIconColor : t0$3)}), child: this.widget.deleteIcon, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), $creationLocationd_0dea112b090073317d4: C[12] || CT.C12})}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23, t0$24, t0$25, t0$26;
      if (!debug$.debugCheckHasMaterial(context)) dart.assertFailed(null, I[1], 1149, 12, "debugCheckHasMaterial(context)");
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[1], 1150, 12, "debugCheckHasMediaQuery(context)");
      if (!debug.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[1], 1151, 12, "debugCheckHasDirectionality(context)");
      if (!debug$.debugCheckHasMaterialLocalizations(context)) dart.assertFailed(null, I[1], 1152, 12, "debugCheckHasMaterialLocalizations(context)");
      let defaultLabelPadding = dart.nullCheck(edge_insets.EdgeInsets.lerp(C[14] || CT.C14, C[15] || CT.C15, math$.clampDouble(media_query.MediaQuery.of(context).textScaleFactor - 1.0, 0.0, 1.0)));
      let theme = theme$.Theme.of(context);
      let chipTheme = chip_theme.ChipTheme.of(context);
      let brightness = (t0 = chipTheme.brightness, t0 == null ? theme.brightness : t0);
      let chipDefaults = (t0$ = this.widget.defaultProperties, t0$ == null ? chip_theme.ChipThemeData.fromDefaults({brightness: brightness, secondaryColor: brightness === ui.Brightness.dark ? dart.nullCheck(colors.Colors.tealAccent._get(200)) : theme.primaryColor, labelStyle: dart.nullCheck(theme.textTheme.bodyText1)}) : t0$);
      let textDirection = basic.Directionality.maybeOf(context);
      let resolvedShape = this[_getShape](theme, chipTheme, chipDefaults);
      let elevation = (t0$2 = (t0$1 = (t0$0 = this.widget.elevation, t0$0 == null ? chipTheme.elevation : t0$0), t0$1 == null ? chipDefaults.elevation : t0$1), t0$2 == null ? 0.0 : t0$2);
      let pressElevation = (t0$5 = (t0$4 = (t0$3 = this.widget.pressElevation, t0$3 == null ? chipTheme.pressElevation : t0$3), t0$4 == null ? chipDefaults.pressElevation : t0$4), t0$5 == null ? 0.0 : t0$5);
      let shadowColor = (t0$7 = (t0$6 = this.widget.shadowColor, t0$6 == null ? chipTheme.shadowColor : t0$6), t0$7 == null ? chipDefaults.shadowColor : t0$7);
      let surfaceTintColor = (t0$9 = (t0$8 = this.widget.surfaceTintColor, t0$8 == null ? chipTheme.surfaceTintColor : t0$8), t0$9 == null ? chipDefaults.surfaceTintColor : t0$9);
      let selectedShadowColor = (t0$11 = (t0$10 = this.widget.selectedShadowColor, t0$10 == null ? chipTheme.selectedShadowColor : t0$10), t0$11 == null ? chipDefaults.selectedShadowColor : t0$11);
      let checkmarkColor = (t0$13 = (t0$12 = this.widget.checkmarkColor, t0$12 == null ? chipTheme.checkmarkColor : t0$12), t0$13 == null ? chipDefaults.checkmarkColor : t0$13);
      let showCheckmark = (t0$15 = (t0$14 = this.widget.showCheckmark, t0$14 == null ? chipTheme.showCheckmark : t0$14), t0$15 == null ? dart.nullCheck(chipDefaults.showCheckmark) : t0$15);
      let padding = (t0$17 = (t0$16 = this.widget.padding, t0$16 == null ? chipTheme.padding : t0$16), t0$17 == null ? dart.nullCheck(chipDefaults.padding) : t0$17);
      let labelStyle = (t0$18 = chipTheme.labelStyle, t0$18 == null ? dart.nullCheck(chipDefaults.labelStyle) : t0$18);
      let labelPadding = (t0$21 = (t0$20 = (t0$19 = this.widget.labelPadding, t0$19 == null ? chipTheme.labelPadding : t0$19), t0$20 == null ? chipDefaults.labelPadding : t0$20), t0$21 == null ? defaultLabelPadding : t0$21);
      let iconTheme = (t0$23 = (t0$22 = this.widget.iconTheme, t0$22 == null ? chipTheme.iconTheme : t0$22), t0$23 == null ? chipDefaults.iconTheme : t0$23);
      let effectiveLabelStyle = labelStyle.merge(this.widget.labelStyle);
      let resolvedLabelColor = material_state.MaterialStateProperty.resolveAs(T.ColorN(), effectiveLabelStyle.color, this.materialStates);
      let resolvedLabelStyle = effectiveLabelStyle.copyWith({color: resolvedLabelColor});
      let avatar = iconTheme != null && this.hasAvatar ? new icon_theme.IconTheme.new({data: iconTheme, child: dart.nullCheck(this.widget.avatar), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}) : this.widget.avatar;
      let result = new material.Material.new({elevation: this.isTapping ? pressElevation : elevation, shadowColor: this.widget.selected ? selectedShadowColor : shadowColor, surfaceTintColor: surfaceTintColor, animationDuration: chip._RawChipState.pressedAnimationDuration, shape: resolvedShape, clipBehavior: this.widget.clipBehavior, child: new ink_well.InkWell.new({onFocusChange: this.updateMaterialState(material_state.MaterialState.focused), focusNode: this.widget.focusNode, autofocus: this.widget.autofocus, canRequestFocus: this.widget.isEnabled, onTap: this.canTap ? dart.bind(this, _handleTap) : null, onTapDown: this.canTap ? dart.bind(this, _handleTapDown) : null, onTapCancel: this.canTap ? dart.bind(this, _handleTapCancel) : null, onHover: this.canTap ? this.updateMaterialState(material_state.MaterialState.hovered) : null, customBorder: resolvedShape, child: new transitions.AnimatedBuilder.new({animation: new change_notifier._MergingListenable.new(T.JSArrayOfListenable().of([this.selectController, this.enableController])), builder: dart.fn((context, child) => new container.Container.new({decoration: new shape_decoration.ShapeDecoration.new({shape: resolvedShape, color: this[_getBackgroundColor](theme, chipTheme, chipDefaults)}), child: child, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), T.BuildContextAndWidgetNToContainer()), child: this[_wrapWithTooltip]({tooltip: this.widget.tooltip, enabled: this.widget.onPressed != null || this.widget.onSelected != null, child: new chip._ChipRenderWidget.new({theme: new chip._ChipRenderTheme.new({label: new text.DefaultTextStyle.new({overflow: text_painter.TextOverflow.fade, textAlign: ui.TextAlign.start, maxLines: 1, softWrap: false, style: resolvedLabelStyle, child: this.widget.label, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), avatar: new animated_switcher.AnimatedSwitcher.new({duration: chip._kDrawerDuration, switchInCurve: curves.Curves.fastOutSlowIn, child: avatar, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), deleteIcon: new animated_switcher.AnimatedSwitcher.new({duration: chip._kDrawerDuration, switchInCurve: curves.Curves.fastOutSlowIn, child: this[_buildDeleteIcon](context, theme, chipTheme, chipDefaults), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), brightness: brightness, padding: padding.resolve(textDirection), visualDensity: (t0$24 = this.widget.visualDensity, t0$24 == null ? theme.visualDensity : t0$24), labelPadding: labelPadding.resolve(textDirection), showAvatar: this.hasAvatar, showCheckmark: showCheckmark, checkmarkColor: checkmarkColor, canTapBody: this.canTap}), value: this.widget.selected, checkmarkAnimation: this.checkmarkAnimation, enableAnimation: this.enableAnimation, avatarDrawerAnimation: this.avatarDrawerAnimation, deleteDrawerAnimation: this.deleteDrawerAnimation, isEnabled: this.widget.isEnabled, avatarBorder: this.widget.avatarBorder, $creationLocationd_0dea112b090073317d4: C[21] || CT.C21})}), $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
      let constraints = null;
      let densityAdjustment = (t0$25 = this.widget.visualDensity, t0$25 == null ? theme.visualDensity : t0$25).baseSizeAdjustment;
      switch (t0$26 = this.widget.materialTapTargetSize, t0$26 == null ? theme.materialTapTargetSize : t0$26) {
        case C[25] || CT.C25:
          {
            constraints = new box$.BoxConstraints.new({minWidth: 48 + densityAdjustment.dx, minHeight: 48 + densityAdjustment.dy});
            break;
          }
        case C[27] || CT.C27:
          {
            constraints = C[26] || CT.C26;
            break;
          }
      }
      result = new chip._ChipRedirectingHitDetectionWidget.new({constraints: constraints, child: new basic.Center.new({widthFactor: 1.0, heightFactor: 1.0, child: result, $creationLocationd_0dea112b090073317d4: C[28] || CT.C28}), $creationLocationd_0dea112b090073317d4: C[29] || CT.C29});
      return new basic.Semantics.new({button: this.widget.tapEnabled, container: true, selected: this.widget.selected, enabled: this.widget.tapEnabled ? this.canTap : null, child: result, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
    }
    static ['_#new#tearOff']() {
      return new chip._RawChipState.new();
    }
  };
  (chip._RawChipState.new = function() {
    this[___RawChipState_selectController] = null;
    this[___RawChipState_avatarDrawerController] = null;
    this[___RawChipState_deleteDrawerController] = null;
    this[___RawChipState_enableController] = null;
    this[___RawChipState_checkmarkAnimation] = null;
    this[___RawChipState_avatarDrawerAnimation] = null;
    this[___RawChipState_deleteDrawerAnimation] = null;
    this[___RawChipState_enableAnimation] = null;
    this[___RawChipState_selectionFade] = null;
    this[_isTapping] = false;
    chip._RawChipState.__proto__.new.call(this);
    ;
  }).prototype = chip._RawChipState.prototype;
  dart.addTypeTests(chip._RawChipState);
  dart.addTypeCaches(chip._RawChipState);
  dart.setMethodSignature(chip._RawChipState, () => ({
    __proto__: dart.getMethods(chip._RawChipState.__proto__),
    [_handleTapDown]: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleTapCancel]: dart.fnType(dart.void, []),
    [_handleTap]: dart.fnType(dart.void, []),
    [_getShape]: dart.fnType(borders.OutlinedBorder, [theme_data.ThemeData, chip_theme.ChipThemeData, chip_theme.ChipThemeData]),
    [_getBackgroundColor]: dart.fnType(dart.nullable(ui.Color), [theme_data.ThemeData, chip_theme.ChipThemeData, chip_theme.ChipThemeData]),
    [_wrapWithTooltip]: dart.fnType(dart.nullable(framework.Widget), [], {child: dart.nullable(framework.Widget), enabled: core.bool, tooltip: dart.nullable(core.String)}, {}),
    [_buildDeleteIcon]: dart.fnType(dart.nullable(framework.Widget), [framework.BuildContext, theme_data.ThemeData, chip_theme.ChipThemeData, chip_theme.ChipThemeData]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(chip._RawChipState, () => ({
    __proto__: dart.getGetters(chip._RawChipState.__proto__),
    selectController: animation_controller.AnimationController,
    avatarDrawerController: animation_controller.AnimationController,
    deleteDrawerController: animation_controller.AnimationController,
    enableController: animation_controller.AnimationController,
    checkmarkAnimation: animation.Animation$(core.double),
    avatarDrawerAnimation: animation.Animation$(core.double),
    deleteDrawerAnimation: animation.Animation$(core.double),
    enableAnimation: animation.Animation$(core.double),
    selectionFade: animation.Animation$(core.double),
    hasDeleteButton: core.bool,
    hasAvatar: core.bool,
    canTap: core.bool,
    isTapping: core.bool
  }));
  dart.setSetterSignature(chip._RawChipState, () => ({
    __proto__: dart.getSetters(chip._RawChipState.__proto__),
    selectController: animation_controller.AnimationController,
    avatarDrawerController: animation_controller.AnimationController,
    deleteDrawerController: animation_controller.AnimationController,
    enableController: animation_controller.AnimationController,
    checkmarkAnimation: animation.Animation$(core.double),
    avatarDrawerAnimation: animation.Animation$(core.double),
    deleteDrawerAnimation: animation.Animation$(core.double),
    enableAnimation: animation.Animation$(core.double),
    selectionFade: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(chip._RawChipState, I[0]);
  dart.setFieldSignature(chip._RawChipState, () => ({
    __proto__: dart.getFields(chip._RawChipState.__proto__),
    [___RawChipState_selectController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___RawChipState_avatarDrawerController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___RawChipState_deleteDrawerController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___RawChipState_enableController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___RawChipState_checkmarkAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___RawChipState_avatarDrawerAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___RawChipState_deleteDrawerAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___RawChipState_enableAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___RawChipState_selectionFade]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_isTapping]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(chip._RawChipState, () => ['pressedAnimationDuration']);
  dart.defineLazy(chip._RawChipState, {
    /*chip._RawChipState.pressedAnimationDuration*/get pressedAnimationDuration() {
      return C[31] || CT.C31;
    }
  }, false);
  var constraints$ = dart.privateName(chip, "_ChipRedirectingHitDetectionWidget.constraints");
  chip._ChipRedirectingHitDetectionWidget = class _ChipRedirectingHitDetectionWidget extends framework.SingleChildRenderObjectWidget {
    get constraints() {
      return this[constraints$];
    }
    set constraints(value) {
      super.constraints = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      return new chip._ChipRedirectingHitDetectionWidget.new({child: child, constraints: constraints, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
    }
    createRenderObject(context) {
      return new chip._RenderChipRedirectingHitDetection.new(this.constraints);
    }
    updateRenderObject(context, renderObject) {
      chip._RenderChipRedirectingHitDetection.as(renderObject);
      renderObject.additionalConstraints = this.constraints;
    }
  };
  (chip._ChipRedirectingHitDetectionWidget.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let constraints = opts && 'constraints' in opts ? opts.constraints : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[constraints$] = constraints;
    chip._ChipRedirectingHitDetectionWidget.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chip._ChipRedirectingHitDetectionWidget.prototype;
  dart.addTypeTests(chip._ChipRedirectingHitDetectionWidget);
  dart.addTypeCaches(chip._ChipRedirectingHitDetectionWidget);
  dart.setMethodSignature(chip._ChipRedirectingHitDetectionWidget, () => ({
    __proto__: dart.getMethods(chip._ChipRedirectingHitDetectionWidget.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(chip._ChipRedirectingHitDetectionWidget, I[0]);
  dart.setFieldSignature(chip._ChipRedirectingHitDetectionWidget, () => ({
    __proto__: dart.getFields(chip._ChipRedirectingHitDetectionWidget.__proto__),
    constraints: dart.finalFieldType(box$.BoxConstraints)
  }));
  chip._RenderChipRedirectingHitDetection = class _RenderChipRedirectingHitDetection extends proxy_box.RenderConstrainedBox {
    static ['_#new#tearOff'](additionalConstraints) {
      return new chip._RenderChipRedirectingHitDetection.new(additionalConstraints);
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (!this.size.contains(position)) {
        return false;
      }
      let offset = new ui.Offset.new(position.dx, this.size.height / 2);
      return result.addWithRawTransform({transform: matrix_utils.MatrixUtils.forceToPoint(offset), position: position, hitTest: dart.fn((result, position) => {
          if (!position._equals(offset)) dart.assertFailed(null, I[1], 1366, 16, "position == offset");
          return dart.nullCheck(this.child).hitTest(result, {position: offset});
        }, T.BoxHitTestResultAndOffsetTobool())});
    }
  };
  (chip._RenderChipRedirectingHitDetection.new = function(additionalConstraints) {
    chip._RenderChipRedirectingHitDetection.__proto__.new.call(this, {additionalConstraints: additionalConstraints});
    ;
  }).prototype = chip._RenderChipRedirectingHitDetection.prototype;
  dart.addTypeTests(chip._RenderChipRedirectingHitDetection);
  dart.addTypeCaches(chip._RenderChipRedirectingHitDetection);
  dart.setLibraryUri(chip._RenderChipRedirectingHitDetection, I[0]);
  var theme$0 = dart.privateName(chip, "_ChipRenderWidget.theme");
  var value$ = dart.privateName(chip, "_ChipRenderWidget.value");
  var isEnabled$0 = dart.privateName(chip, "_ChipRenderWidget.isEnabled");
  var checkmarkAnimation$ = dart.privateName(chip, "_ChipRenderWidget.checkmarkAnimation");
  var avatarDrawerAnimation$ = dart.privateName(chip, "_ChipRenderWidget.avatarDrawerAnimation");
  var deleteDrawerAnimation$ = dart.privateName(chip, "_ChipRenderWidget.deleteDrawerAnimation");
  var enableAnimation$ = dart.privateName(chip, "_ChipRenderWidget.enableAnimation");
  var avatarBorder$0 = dart.privateName(chip, "_ChipRenderWidget.avatarBorder");
  var _name = dart.privateName(core, "_name");
  chip._ChipSlot = class _ChipSlot extends core._Enum {
    toString() {
      return "_ChipSlot." + this[_name];
    }
  };
  (chip._ChipSlot.new = function(index, name) {
    chip._ChipSlot.__proto__.new.call(this, index, name);
    ;
  }).prototype = chip._ChipSlot.prototype;
  dart.addTypeTests(chip._ChipSlot);
  dart.addTypeCaches(chip._ChipSlot);
  dart.setLibraryUri(chip._ChipSlot, I[0]);
  dart.setStaticFieldSignature(chip._ChipSlot, () => ['values', 'label', 'avatar', 'deleteIcon']);
  dart.defineExtensionMethods(chip._ChipSlot, ['toString']);
  dart.defineLazy(chip._ChipSlot, {
    /*chip._ChipSlot.values*/get values() {
      return C[37] || CT.C37;
    },
    /*chip._ChipSlot.label*/get label() {
      return C[34] || CT.C34;
    },
    /*chip._ChipSlot.avatar*/get avatar() {
      return C[35] || CT.C35;
    },
    /*chip._ChipSlot.deleteIcon*/get deleteIcon() {
      return C[36] || CT.C36;
    }
  }, false);
  const RenderObjectWidget_SlottedMultiChildRenderObjectWidgetMixin$36 = class RenderObjectWidget_SlottedMultiChildRenderObjectWidgetMixin extends framework.RenderObjectWidget {
    updateRenderObject(context, renderObject) {
      T.SlottedContainerRenderObjectMixinOf_ChipSlot().as(renderObject);
      return super.updateRenderObject(context, renderObject);
    }
  };
  (RenderObjectWidget_SlottedMultiChildRenderObjectWidgetMixin$36.new = function(opts) {
    RenderObjectWidget_SlottedMultiChildRenderObjectWidgetMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderObjectWidget_SlottedMultiChildRenderObjectWidgetMixin$36.prototype;
  dart.applyMixin(RenderObjectWidget_SlottedMultiChildRenderObjectWidgetMixin$36, slotted_render_object_widget.SlottedMultiChildRenderObjectWidgetMixin$(chip._ChipSlot));
  chip._ChipRenderWidget = class _ChipRenderWidget extends RenderObjectWidget_SlottedMultiChildRenderObjectWidgetMixin$36 {
    get theme() {
      return this[theme$0];
    }
    set theme(value) {
      super.theme = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get isEnabled() {
      return this[isEnabled$0];
    }
    set isEnabled(value) {
      super.isEnabled = value;
    }
    get checkmarkAnimation() {
      return this[checkmarkAnimation$];
    }
    set checkmarkAnimation(value) {
      super.checkmarkAnimation = value;
    }
    get avatarDrawerAnimation() {
      return this[avatarDrawerAnimation$];
    }
    set avatarDrawerAnimation(value) {
      super.avatarDrawerAnimation = value;
    }
    get deleteDrawerAnimation() {
      return this[deleteDrawerAnimation$];
    }
    set deleteDrawerAnimation(value) {
      super.deleteDrawerAnimation = value;
    }
    get enableAnimation() {
      return this[enableAnimation$];
    }
    set enableAnimation(value) {
      super.enableAnimation = value;
    }
    get avatarBorder() {
      return this[avatarBorder$0];
    }
    set avatarBorder(value) {
      super.avatarBorder = value;
    }
    static ['_#new#tearOff'](opts) {
      let theme = opts && 'theme' in opts ? opts.theme : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let isEnabled = opts && 'isEnabled' in opts ? opts.isEnabled : null;
      let checkmarkAnimation = opts && 'checkmarkAnimation' in opts ? opts.checkmarkAnimation : null;
      let avatarDrawerAnimation = opts && 'avatarDrawerAnimation' in opts ? opts.avatarDrawerAnimation : null;
      let deleteDrawerAnimation = opts && 'deleteDrawerAnimation' in opts ? opts.deleteDrawerAnimation : null;
      let enableAnimation = opts && 'enableAnimation' in opts ? opts.enableAnimation : null;
      let avatarBorder = opts && 'avatarBorder' in opts ? opts.avatarBorder : null;
      return new chip._ChipRenderWidget.new({theme: theme, value: value, isEnabled: isEnabled, checkmarkAnimation: checkmarkAnimation, avatarDrawerAnimation: avatarDrawerAnimation, deleteDrawerAnimation: deleteDrawerAnimation, enableAnimation: enableAnimation, avatarBorder: avatarBorder, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
    get slots() {
      return chip._ChipSlot.values;
    }
    childForSlot(slot) {
      chip._ChipSlot.as(slot);
      switch (slot) {
        case C[34] || CT.C34:
          {
            return this.theme.label;
          }
        case C[35] || CT.C35:
          {
            return this.theme.avatar;
          }
        case C[36] || CT.C36:
          {
            return this.theme.deleteIcon;
          }
      }
    }
    updateRenderObject(context, renderObject) {
      let t0;
      chip._RenderChip.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.theme = this.theme;
        t0.textDirection = basic.Directionality.of(context);
        t0.value = this.value;
        t0.isEnabled = this.isEnabled;
        t0.checkmarkAnimation = this.checkmarkAnimation;
        t0.avatarDrawerAnimation = this.avatarDrawerAnimation;
        t0.deleteDrawerAnimation = this.deleteDrawerAnimation;
        t0.enableAnimation = this.enableAnimation;
        t0.avatarBorder = this.avatarBorder;
        return t0;
      })();
    }
    createRenderObject(context) {
      return new chip._RenderChip.new({theme: this.theme, textDirection: basic.Directionality.of(context), value: this.value, isEnabled: this.isEnabled, checkmarkAnimation: this.checkmarkAnimation, avatarDrawerAnimation: this.avatarDrawerAnimation, deleteDrawerAnimation: this.deleteDrawerAnimation, enableAnimation: this.enableAnimation, avatarBorder: this.avatarBorder});
    }
  };
  (chip._ChipRenderWidget.new = function(opts) {
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let isEnabled = opts && 'isEnabled' in opts ? opts.isEnabled : null;
    let checkmarkAnimation = opts && 'checkmarkAnimation' in opts ? opts.checkmarkAnimation : null;
    let avatarDrawerAnimation = opts && 'avatarDrawerAnimation' in opts ? opts.avatarDrawerAnimation : null;
    let deleteDrawerAnimation = opts && 'deleteDrawerAnimation' in opts ? opts.deleteDrawerAnimation : null;
    let enableAnimation = opts && 'enableAnimation' in opts ? opts.enableAnimation : null;
    let avatarBorder = opts && 'avatarBorder' in opts ? opts.avatarBorder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[theme$0] = theme;
    this[value$] = value;
    this[isEnabled$0] = isEnabled;
    this[checkmarkAnimation$] = checkmarkAnimation;
    this[avatarDrawerAnimation$] = avatarDrawerAnimation;
    this[deleteDrawerAnimation$] = deleteDrawerAnimation;
    this[enableAnimation$] = enableAnimation;
    this[avatarBorder$0] = avatarBorder;
    if (!(theme !== null)) dart.assertFailed(null, I[1], 1383, 15, "theme != null");
    chip._ChipRenderWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chip._ChipRenderWidget.prototype;
  dart.addTypeTests(chip._ChipRenderWidget);
  dart.addTypeCaches(chip._ChipRenderWidget);
  dart.setMethodSignature(chip._ChipRenderWidget, () => ({
    __proto__: dart.getMethods(chip._ChipRenderWidget.__proto__),
    childForSlot: dart.fnType(dart.nullable(framework.Widget), [dart.nullable(core.Object)]),
    createRenderObject: dart.fnType(slotted_render_object_widget.SlottedContainerRenderObjectMixin$(chip._ChipSlot), [framework.BuildContext])
  }));
  dart.setGetterSignature(chip._ChipRenderWidget, () => ({
    __proto__: dart.getGetters(chip._ChipRenderWidget.__proto__),
    slots: core.Iterable$(chip._ChipSlot)
  }));
  dart.setLibraryUri(chip._ChipRenderWidget, I[0]);
  dart.setFieldSignature(chip._ChipRenderWidget, () => ({
    __proto__: dart.getFields(chip._ChipRenderWidget.__proto__),
    theme: dart.finalFieldType(chip._ChipRenderTheme),
    value: dart.finalFieldType(dart.nullable(core.bool)),
    isEnabled: dart.finalFieldType(dart.nullable(core.bool)),
    checkmarkAnimation: dart.finalFieldType(animation.Animation$(core.double)),
    avatarDrawerAnimation: dart.finalFieldType(animation.Animation$(core.double)),
    deleteDrawerAnimation: dart.finalFieldType(animation.Animation$(core.double)),
    enableAnimation: dart.finalFieldType(animation.Animation$(core.double)),
    avatarBorder: dart.finalFieldType(dart.nullable(borders.ShapeBorder))
  }));
  var avatar$1 = dart.privateName(chip, "_ChipRenderTheme.avatar");
  var label$1 = dart.privateName(chip, "_ChipRenderTheme.label");
  var deleteIcon$1 = dart.privateName(chip, "_ChipRenderTheme.deleteIcon");
  var brightness$ = dart.privateName(chip, "_ChipRenderTheme.brightness");
  var padding$1 = dart.privateName(chip, "_ChipRenderTheme.padding");
  var visualDensity$1 = dart.privateName(chip, "_ChipRenderTheme.visualDensity");
  var labelPadding$1 = dart.privateName(chip, "_ChipRenderTheme.labelPadding");
  var showAvatar$ = dart.privateName(chip, "_ChipRenderTheme.showAvatar");
  var showCheckmark$0 = dart.privateName(chip, "_ChipRenderTheme.showCheckmark");
  var checkmarkColor$0 = dart.privateName(chip, "_ChipRenderTheme.checkmarkColor");
  var canTapBody$ = dart.privateName(chip, "_ChipRenderTheme.canTapBody");
  chip._ChipRenderTheme = class _ChipRenderTheme extends core.Object {
    get avatar() {
      return this[avatar$1];
    }
    set avatar(value) {
      super.avatar = value;
    }
    get label() {
      return this[label$1];
    }
    set label(value) {
      super.label = value;
    }
    get deleteIcon() {
      return this[deleteIcon$1];
    }
    set deleteIcon(value) {
      super.deleteIcon = value;
    }
    get brightness() {
      return this[brightness$];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get padding() {
      return this[padding$1];
    }
    set padding(value) {
      super.padding = value;
    }
    get visualDensity() {
      return this[visualDensity$1];
    }
    set visualDensity(value) {
      super.visualDensity = value;
    }
    get labelPadding() {
      return this[labelPadding$1];
    }
    set labelPadding(value) {
      super.labelPadding = value;
    }
    get showAvatar() {
      return this[showAvatar$];
    }
    set showAvatar(value) {
      super.showAvatar = value;
    }
    get showCheckmark() {
      return this[showCheckmark$0];
    }
    set showCheckmark(value) {
      super.showCheckmark = value;
    }
    get checkmarkColor() {
      return this[checkmarkColor$0];
    }
    set checkmarkColor(value) {
      super.checkmarkColor = value;
    }
    get canTapBody() {
      return this[canTapBody$];
    }
    set canTapBody(value) {
      super.canTapBody = value;
    }
    static ['_#new#tearOff'](opts) {
      let avatar = opts && 'avatar' in opts ? opts.avatar : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let deleteIcon = opts && 'deleteIcon' in opts ? opts.deleteIcon : null;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
      let showAvatar = opts && 'showAvatar' in opts ? opts.showAvatar : null;
      let showCheckmark = opts && 'showCheckmark' in opts ? opts.showCheckmark : null;
      let checkmarkColor = opts && 'checkmarkColor' in opts ? opts.checkmarkColor : null;
      let canTapBody = opts && 'canTapBody' in opts ? opts.canTapBody : null;
      return new chip._ChipRenderTheme.new({avatar: avatar, label: label, deleteIcon: deleteIcon, brightness: brightness, padding: padding, visualDensity: visualDensity, labelPadding: labelPadding, showAvatar: showAvatar, showCheckmark: showCheckmark, checkmarkColor: checkmarkColor, canTapBody: canTapBody});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return chip._ChipRenderTheme.is(other) && other.avatar._equals(this.avatar) && other.label._equals(this.label) && other.deleteIcon._equals(this.deleteIcon) && other.brightness === this.brightness && other.padding._equals(this.padding) && other.labelPadding._equals(this.labelPadding) && other.showAvatar === this.showAvatar && other.showCheckmark === this.showCheckmark && dart.equals(other.checkmarkColor, this.checkmarkColor) && other.canTapBody === this.canTapBody;
    }
    get hashCode() {
      return core.Object.hash(this.avatar, this.label, this.deleteIcon, this.brightness, this.padding, this.labelPadding, this.showAvatar, this.showCheckmark, this.checkmarkColor, this.canTapBody);
    }
  };
  (chip._ChipRenderTheme.new = function(opts) {
    let avatar = opts && 'avatar' in opts ? opts.avatar : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let deleteIcon = opts && 'deleteIcon' in opts ? opts.deleteIcon : null;
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
    let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
    let showAvatar = opts && 'showAvatar' in opts ? opts.showAvatar : null;
    let showCheckmark = opts && 'showCheckmark' in opts ? opts.showCheckmark : null;
    let checkmarkColor = opts && 'checkmarkColor' in opts ? opts.checkmarkColor : null;
    let canTapBody = opts && 'canTapBody' in opts ? opts.canTapBody : null;
    this[avatar$1] = avatar;
    this[label$1] = label;
    this[deleteIcon$1] = deleteIcon;
    this[brightness$] = brightness;
    this[padding$1] = padding;
    this[visualDensity$1] = visualDensity;
    this[labelPadding$1] = labelPadding;
    this[showAvatar$] = showAvatar;
    this[showCheckmark$0] = showCheckmark;
    this[checkmarkColor$0] = checkmarkColor;
    this[canTapBody$] = canTapBody;
    ;
  }).prototype = chip._ChipRenderTheme.prototype;
  dart.addTypeTests(chip._ChipRenderTheme);
  dart.addTypeCaches(chip._ChipRenderTheme);
  dart.setLibraryUri(chip._ChipRenderTheme, I[0]);
  dart.setFieldSignature(chip._ChipRenderTheme, () => ({
    __proto__: dart.getFields(chip._ChipRenderTheme.__proto__),
    avatar: dart.finalFieldType(framework.Widget),
    label: dart.finalFieldType(framework.Widget),
    deleteIcon: dart.finalFieldType(framework.Widget),
    brightness: dart.finalFieldType(ui.Brightness),
    padding: dart.finalFieldType(edge_insets.EdgeInsets),
    visualDensity: dart.finalFieldType(theme_data.VisualDensity),
    labelPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    showAvatar: dart.finalFieldType(core.bool),
    showCheckmark: dart.finalFieldType(core.bool),
    checkmarkColor: dart.finalFieldType(dart.nullable(ui.Color)),
    canTapBody: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(chip._ChipRenderTheme, ['_equals']);
  dart.defineExtensionAccessors(chip._ChipRenderTheme, ['hashCode']);
  var ___RenderChip__deleteButtonRect = dart.privateName(chip, "_#_RenderChip#_deleteButtonRect");
  var ___RenderChip__pressRect = dart.privateName(chip, "_#_RenderChip#_pressRect");
  var _theme = dart.privateName(chip, "_theme");
  var _textDirection = dart.privateName(chip, "_textDirection");
  var _deleteButtonRect = dart.privateName(chip, "_deleteButtonRect");
  var _pressRect = dart.privateName(chip, "_pressRect");
  var _layoutLabel = dart.privateName(chip, "_layoutLabel");
  var _layoutAvatar = dart.privateName(chip, "_layoutAvatar");
  var _layoutDeleteIcon = dart.privateName(chip, "_layoutDeleteIcon");
  var _computeSizes = dart.privateName(chip, "_computeSizes");
  var _disabledColor = dart.privateName(chip, "_disabledColor");
  var _paintCheck = dart.privateName(chip, "_paintCheck");
  var _paintSelectionOverlay = dart.privateName(chip, "_paintSelectionOverlay");
  var _paintAvatar = dart.privateName(chip, "_paintAvatar");
  var _paintChild = dart.privateName(chip, "_paintChild");
  const RenderBox_SlottedContainerRenderObjectMixin$36 = class RenderBox_SlottedContainerRenderObjectMixin extends box$.RenderBox {};
  (RenderBox_SlottedContainerRenderObjectMixin$36.new = function() {
    slotted_render_object_widget.SlottedContainerRenderObjectMixin$(chip._ChipSlot)[dart.mixinNew].call(this);
    RenderBox_SlottedContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_SlottedContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_SlottedContainerRenderObjectMixin$36, slotted_render_object_widget.SlottedContainerRenderObjectMixin$(chip._ChipSlot));
  chip._RenderChip = class _RenderChip extends RenderBox_SlottedContainerRenderObjectMixin$36 {
    static ['_#new#tearOff'](opts) {
      let theme = opts && 'theme' in opts ? opts.theme : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let isEnabled = opts && 'isEnabled' in opts ? opts.isEnabled : null;
      let checkmarkAnimation = opts && 'checkmarkAnimation' in opts ? opts.checkmarkAnimation : null;
      let avatarDrawerAnimation = opts && 'avatarDrawerAnimation' in opts ? opts.avatarDrawerAnimation : null;
      let deleteDrawerAnimation = opts && 'deleteDrawerAnimation' in opts ? opts.deleteDrawerAnimation : null;
      let enableAnimation = opts && 'enableAnimation' in opts ? opts.enableAnimation : null;
      let avatarBorder = opts && 'avatarBorder' in opts ? opts.avatarBorder : null;
      return new chip._RenderChip.new({theme: theme, textDirection: textDirection, value: value, isEnabled: isEnabled, checkmarkAnimation: checkmarkAnimation, avatarDrawerAnimation: avatarDrawerAnimation, deleteDrawerAnimation: deleteDrawerAnimation, enableAnimation: enableAnimation, avatarBorder: avatarBorder});
    }
    set [_deleteButtonRect](library$32package$58flutter$47src$47material$47chip$46dart$58$58_deleteButtonRect$35param) {
      this[___RenderChip__deleteButtonRect] = library$32package$58flutter$47src$47material$47chip$46dart$58$58_deleteButtonRect$35param;
    }
    get [_deleteButtonRect]() {
      let t2;
      t2 = this[___RenderChip__deleteButtonRect];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_deleteButtonRect")) : t2;
    }
    get [_pressRect]() {
      let t2;
      t2 = this[___RenderChip__pressRect];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_pressRect")) : t2;
    }
    set [_pressRect](library$32package$58flutter$47src$47material$47chip$46dart$58$58_pressRect$35param) {
      this[___RenderChip__pressRect] = library$32package$58flutter$47src$47material$47chip$46dart$58$58_pressRect$35param;
    }
    get avatar() {
      return this.childForSlot(chip._ChipSlot.avatar);
    }
    get deleteIcon() {
      return this.childForSlot(chip._ChipSlot.deleteIcon);
    }
    get label() {
      return this.childForSlot(chip._ChipSlot.label);
    }
    get theme() {
      return this[_theme];
    }
    set theme(value) {
      if (this[_theme]._equals(value)) {
        return;
      }
      this[_theme] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) {
        return;
      }
      this[_textDirection] = value;
      this.markNeedsLayout();
    }
    get children() {
      return (() => {
        let t2 = T.JSArrayOfRenderBox().of([]);
        if (this.avatar != null) t2.push(dart.nullCheck(this.avatar));
        if (this.label != null) t2.push(dart.nullCheck(this.label));
        if (this.deleteIcon != null) t2.push(dart.nullCheck(this.deleteIcon));
        return t2;
      })();
    }
    get isDrawingCheckmark() {
      return this.theme.showCheckmark && !this.checkmarkAnimation.isDismissed;
    }
    get deleteIconShowing() {
      return !this.deleteDrawerAnimation.isDismissed;
    }
    get sizedByParent() {
      return false;
    }
    static _minWidth(box, height) {
      return box == null ? 0.0 : box.getMinIntrinsicWidth(height);
    }
    static _maxWidth(box, height) {
      return box == null ? 0.0 : box.getMaxIntrinsicWidth(height);
    }
    static _minHeight(box, width) {
      return box == null ? 0.0 : box.getMinIntrinsicHeight(width);
    }
    static _boxSize(box) {
      return box == null ? ui.Size.zero : box.size;
    }
    static _boxRect(box) {
      return box == null ? ui.Rect.zero : chip._RenderChip._boxParentData(box).offset['&'](box.size);
    }
    static _boxParentData(box) {
      return box$.BoxParentData.as(dart.nullCheck(box.parentData));
    }
    computeMinIntrinsicWidth(height) {
      let overallPadding = this.theme.padding.horizontal + this.theme.labelPadding.horizontal;
      return overallPadding + chip._RenderChip._minWidth(this.avatar, height) + chip._RenderChip._minWidth(this.label, height) + chip._RenderChip._minWidth(this.deleteIcon, height);
    }
    computeMaxIntrinsicWidth(height) {
      let overallPadding = this.theme.padding.horizontal + this.theme.labelPadding.horizontal;
      return overallPadding + chip._RenderChip._maxWidth(this.avatar, height) + chip._RenderChip._maxWidth(this.label, height) + chip._RenderChip._maxWidth(this.deleteIcon, height);
    }
    computeMinIntrinsicHeight(width) {
      return math.max(core.double, 32, this.theme.padding.vertical + this.theme.labelPadding.vertical + chip._RenderChip._minHeight(this.label, width));
    }
    computeMaxIntrinsicHeight(width) {
      return this.computeMinIntrinsicHeight(width);
    }
    computeDistanceToActualBaseline(baseline) {
      return dart.nullCheck(this.label).getDistanceToActualBaseline(baseline);
    }
    [_layoutLabel](contentConstraints, iconSizes, size, rawSize, layoutChild = C[38] || CT.C38) {
      if (contentConstraints.maxWidth[$isFinite]) {
        let maxWidth = math.max(core.double, 0.0, contentConstraints.maxWidth - iconSizes - this.theme.labelPadding.horizontal - this.theme.padding.horizontal);
        let updatedSize = layoutChild(dart.nullCheck(this.label), new box$.BoxConstraints.new({maxWidth: maxWidth, minHeight: rawSize.height, maxHeight: size.height}));
        return new ui.Size.new(updatedSize.width + this.theme.labelPadding.horizontal, updatedSize.height + this.theme.labelPadding.vertical);
      }
      let updatedSize = layoutChild(dart.nullCheck(this.label), new box$.BoxConstraints.new({minHeight: rawSize.height, maxHeight: size.height, maxWidth: size.width}));
      return new ui.Size.new(updatedSize.width + this.theme.labelPadding.horizontal, updatedSize.height + this.theme.labelPadding.vertical);
    }
    [_layoutAvatar](contentConstraints, contentSize, layoutChild = C[38] || CT.C38) {
      let requestedSize = math.max(core.double, 0.0, contentSize);
      let avatarConstraints = new box$.BoxConstraints.tightFor({width: requestedSize, height: requestedSize});
      let avatarBoxSize = layoutChild(dart.nullCheck(this.avatar), avatarConstraints);
      if (!this.theme.showCheckmark && !this.theme.showAvatar) {
        return new ui.Size.new(0.0, contentSize);
      }
      let avatarWidth = 0.0;
      let avatarHeight = 0.0;
      if (this.theme.showAvatar) {
        avatarWidth = avatarWidth + this.avatarDrawerAnimation.value * avatarBoxSize.width;
      } else {
        avatarWidth = avatarWidth + this.avatarDrawerAnimation.value * contentSize;
      }
      avatarHeight = avatarHeight + avatarBoxSize.height;
      return new ui.Size.new(avatarWidth, avatarHeight);
    }
    [_layoutDeleteIcon](contentConstraints, contentSize, layoutChild = C[38] || CT.C38) {
      let requestedSize = math.max(core.double, 0.0, contentSize);
      let deleteIconConstraints = new box$.BoxConstraints.tightFor({width: requestedSize, height: requestedSize});
      let boxSize = layoutChild(dart.nullCheck(this.deleteIcon), deleteIconConstraints);
      if (!this.deleteIconShowing) {
        return new ui.Size.new(0.0, contentSize);
      }
      let deleteIconWidth = 0.0;
      let deleteIconHeight = 0.0;
      deleteIconWidth = deleteIconWidth + this.deleteDrawerAnimation.value * boxSize.width;
      deleteIconHeight = deleteIconHeight + boxSize.height;
      return new ui.Size.new(deleteIconWidth, deleteIconHeight);
    }
    hitTest(result, opts) {
      let t3, t3$, t3$0;
      let position = opts && 'position' in opts ? opts.position : null;
      if (!this.size.contains(position)) {
        return false;
      }
      let hitIsOnDeleteIcon = this.deleteIcon != null && chip._hitIsOnDeleteIcon({padding: this.theme.padding, tapPosition: position, chipSize: this.size, deleteButtonSize: dart.nullCheck(this.deleteIcon).size, textDirection: dart.nullCheck(this.textDirection)});
      let hitTestChild = hitIsOnDeleteIcon ? (t3$ = (t3 = this.deleteIcon, t3 == null ? this.label : t3), t3$ == null ? this.avatar : t3$) : (t3$0 = this.label, t3$0 == null ? this.avatar : t3$0);
      if (hitTestChild != null) {
        let center = hitTestChild.size.center(ui.Offset.zero);
        return result.addWithRawTransform({transform: matrix_utils.MatrixUtils.forceToPoint(center), position: position, hitTest: dart.fn((result, position) => {
            if (!position._equals(center)) dart.assertFailed(null, I[1], 1742, 18, "position == center");
            return hitTestChild.hitTest(result, {position: center});
          }, T.BoxHitTestResultAndOffsetTobool())});
      }
      return false;
    }
    computeDryLayout(constraints) {
      return this[_computeSizes](constraints, C[39] || CT.C39).size;
    }
    [_computeSizes](constraints, layoutChild) {
      let contentConstraints = constraints.loosen();
      let densityAdjustment = new ui.Offset.new(0.0, this.theme.visualDensity.baseSizeAdjustment.dy / 2.0);
      let rawLabelSize = layoutChild(dart.nullCheck(this.label), contentConstraints);
      let contentSize = math.max(core.double, 32 - this.theme.padding.vertical + this.theme.labelPadding.vertical, rawLabelSize.height + this.theme.labelPadding.vertical);
      let avatarSize = this[_layoutAvatar](contentConstraints, contentSize, layoutChild);
      let deleteIconSize = this[_layoutDeleteIcon](contentConstraints, contentSize, layoutChild);
      let labelSize = this[_layoutLabel](contentConstraints, avatarSize.width + deleteIconSize.width, new ui.Size.new(rawLabelSize.width, contentSize), rawLabelSize, layoutChild);
      let overallSize = new ui.Size.new(avatarSize.width + labelSize.width + deleteIconSize.width, contentSize)['+'](densityAdjustment);
      let paddedSize = new ui.Size.new(overallSize.width + this.theme.padding.horizontal, overallSize.height + this.theme.padding.vertical);
      return new chip._ChipSizes.new({size: constraints.constrain(paddedSize), overall: overallSize, content: contentSize, densityAdjustment: densityAdjustment, avatar: avatarSize, label: labelSize, deleteIcon: deleteIconSize});
    }
    performLayout() {
      let sizes = this[_computeSizes](this.constraints, C[38] || CT.C38);
      let right = sizes.overall.width;
      const centerLayout = (boxSize, x) => {
        if (!(sizes.content >= boxSize.height)) dart.assertFailed(null, I[1], 1806, 14, "sizes.content >= boxSize.height");
        switch (dart.nullCheck(this.textDirection)) {
          case C[40] || CT.C40:
            {
              return new ui.Offset.new(x - boxSize.width, (sizes.content - boxSize.height + sizes.densityAdjustment.dy) / 2.0);
            }
          case C[41] || CT.C41:
            {
              return new ui.Offset.new(x, (sizes.content - boxSize.height + sizes.densityAdjustment.dy) / 2.0);
            }
        }
      };
      dart.fn(centerLayout, T.SizeAnddoubleToOffset());
      let avatarOffset = ui.Offset.zero;
      let labelOffset = ui.Offset.zero;
      let deleteIconOffset = ui.Offset.zero;
      switch (dart.nullCheck(this.textDirection)) {
        case C[40] || CT.C40:
          {
            let start = right;
            if (this.theme.showCheckmark || this.theme.showAvatar) {
              avatarOffset = centerLayout(sizes.avatar, start);
              start = start - sizes.avatar.width;
            }
            labelOffset = centerLayout(sizes.label, start);
            start = start - sizes.label.width;
            if (this.deleteIconShowing) {
              this[_deleteButtonRect] = new ui.Rect.fromLTWH(0.0, 0.0, sizes.deleteIcon.width + this.theme.padding.right, sizes.overall.height + this.theme.padding.vertical);
              deleteIconOffset = centerLayout(sizes.deleteIcon, start);
            } else {
              this[_deleteButtonRect] = ui.Rect.zero;
            }
            start = start - sizes.deleteIcon.width;
            if (this.theme.canTapBody) {
              this[_pressRect] = new ui.Rect.fromLTWH(this[_deleteButtonRect].width, 0.0, sizes.overall.width - this[_deleteButtonRect].width + this.theme.padding.horizontal, sizes.overall.height + this.theme.padding.vertical);
            } else {
              this[_pressRect] = ui.Rect.zero;
            }
            break;
          }
        case C[41] || CT.C41:
          {
            let start = 0;
            if (this.theme.showCheckmark || this.theme.showAvatar) {
              avatarOffset = centerLayout(sizes.avatar, start - chip._RenderChip._boxSize(this.avatar).width + sizes.avatar.width);
              start = start + sizes.avatar.width;
            }
            labelOffset = centerLayout(sizes.label, start);
            start = start + sizes.label.width;
            if (this.theme.canTapBody) {
              this[_pressRect] = new ui.Rect.fromLTWH(0.0, 0.0, this.deleteIconShowing ? start + this.theme.padding.left : sizes.overall.width + this.theme.padding.horizontal, sizes.overall.height + this.theme.padding.vertical);
            } else {
              this[_pressRect] = ui.Rect.zero;
            }
            start = start - (chip._RenderChip._boxSize(this.deleteIcon).width - sizes.deleteIcon.width);
            if (this.deleteIconShowing) {
              deleteIconOffset = centerLayout(sizes.deleteIcon, start);
              this[_deleteButtonRect] = new ui.Rect.fromLTWH(start + this.theme.padding.left, 0.0, sizes.deleteIcon.width + this.theme.padding.right, sizes.overall.height + this.theme.padding.vertical);
            } else {
              this[_deleteButtonRect] = ui.Rect.zero;
            }
            break;
          }
      }
      labelOffset = labelOffset['+'](new ui.Offset.new(0.0, (sizes.label.height - this.theme.labelPadding.vertical - chip._RenderChip._boxSize(this.label).height) / 2.0));
      chip._RenderChip._boxParentData(dart.nullCheck(this.avatar)).offset = this.theme.padding.topLeft['+'](avatarOffset);
      chip._RenderChip._boxParentData(dart.nullCheck(this.label)).offset = this.theme.padding.topLeft['+'](labelOffset)['+'](this.theme.labelPadding.topLeft);
      chip._RenderChip._boxParentData(dart.nullCheck(this.deleteIcon)).offset = this.theme.padding.topLeft['+'](deleteIconOffset);
      let paddedSize = new ui.Size.new(sizes.overall.width + this.theme.padding.horizontal, sizes.overall.height + this.theme.padding.vertical);
      this.size = this.constraints.constrain(paddedSize);
      if (!(this.size.height === this.constraints.constrainHeight(paddedSize.height))) dart.assertFailed("Constrained height " + dart.str(this.size.height) + " doesn't match expected height " + dart.str(this.constraints.constrainWidth(paddedSize.height)), I[1], 1902, 7, "size.height == constraints.constrainHeight(paddedSize.height)");
      if (!(this.size.width === this.constraints.constrainWidth(paddedSize.width))) dart.assertFailed("Constrained width " + dart.str(this.size.width) + " doesn't match expected width " + dart.str(this.constraints.constrainWidth(paddedSize.width)), I[1], 1907, 7, "size.width == constraints.constrainWidth(paddedSize.width)");
    }
    get [_disabledColor]() {
      if (this.enableAnimation === null || this.enableAnimation.isCompleted) {
        return colors.Colors.white;
      }
      let enableTween = null;
      switch (this.theme.brightness) {
        case C[42] || CT.C42:
          {
            enableTween = new tween.ColorTween.new({begin: colors.Colors.white.withAlpha(97), end: colors.Colors.white});
            break;
          }
        case C[43] || CT.C43:
          {
            enableTween = new tween.ColorTween.new({begin: colors.Colors.black.withAlpha(97), end: colors.Colors.black});
            break;
          }
      }
      return dart.nullCheck(enableTween.evaluate(this.enableAnimation));
    }
    [_paintCheck](canvas, origin, size) {
      let t3;
      let paintColor = null;
      if (this.theme.checkmarkColor != null) {
        paintColor = this.theme.checkmarkColor;
      } else {
        switch (this.theme.brightness) {
          case C[42] || CT.C42:
            {
              paintColor = this.theme.showAvatar ? colors.Colors.white : colors.Colors.black.withAlpha(222);
              break;
            }
          case C[43] || CT.C43:
            {
              paintColor = this.theme.showAvatar ? colors.Colors.black : colors.Colors.white.withAlpha(222);
              break;
            }
        }
      }
      let fadeTween = new tween.ColorTween.new({begin: colors.Colors.transparent, end: paintColor});
      paintColor = this.checkmarkAnimation.status === animation.AnimationStatus.reverse ? fadeTween.evaluate(this.checkmarkAnimation) : paintColor;
      let paint = (t3 = ui.Paint.new(), (() => {
        t3.color = dart.nullCheck(paintColor);
        t3.style = ui.PaintingStyle.stroke;
        t3.strokeWidth = 2 * (this.avatar != null ? dart.nullCheck(this.avatar).size.height / 24.0 : 1.0);
        return t3;
      })());
      let t = this.checkmarkAnimation.status === animation.AnimationStatus.reverse ? 1.0 : this.checkmarkAnimation.value;
      if (t === 0.0) {
        return;
      }
      if (!(t > 0.0 && t <= 1.0)) dart.assertFailed(null, I[1], 1972, 12, "t > 0.0 && t <= 1.0");
      let path = ui.Path.new();
      let start = new ui.Offset.new(size * 0.15, size * 0.45);
      let mid = new ui.Offset.new(size * 0.4, size * 0.7);
      let end = new ui.Offset.new(size * 0.85, size * 0.25);
      if (t < 0.5) {
        let strokeT = t * 2.0;
        let drawMid = dart.nullCheck(ui.Offset.lerp(start, mid, strokeT));
        path.moveTo(origin.dx + start.dx, origin.dy + start.dy);
        path.lineTo(origin.dx + drawMid.dx, origin.dy + drawMid.dy);
      } else {
        let strokeT = (t - 0.5) * 2.0;
        let drawEnd = dart.nullCheck(ui.Offset.lerp(mid, end, strokeT));
        path.moveTo(origin.dx + start.dx, origin.dy + start.dy);
        path.lineTo(origin.dx + mid.dx, origin.dy + mid.dy);
        path.lineTo(origin.dx + drawEnd.dx, origin.dy + drawEnd.dy);
      }
      canvas.drawPath(path, paint);
    }
    [_paintSelectionOverlay](context, offset) {
      let t3;
      if (this.isDrawingCheckmark) {
        if (this.theme.showAvatar) {
          let avatarRect = chip._RenderChip._boxRect(this.avatar).shift(offset);
          let darkenPaint = (t3 = ui.Paint.new(), (() => {
            t3.color = dart.nullCheck(chip._RenderChip.selectionScrimTween.evaluate(this.checkmarkAnimation));
            t3.blendMode = ui.BlendMode.srcATop;
            return t3;
          })());
          let path = dart.nullCheck(this.avatarBorder).getOuterPath(avatarRect);
          context.canvas.drawPath(path, darkenPaint);
        }
        let checkSize = dart.nullCheck(this.avatar).size.height * 0.75;
        let checkOffset = chip._RenderChip._boxParentData(dart.nullCheck(this.avatar)).offset['+'](new ui.Offset.new(dart.nullCheck(this.avatar).size.height * 0.125, dart.nullCheck(this.avatar).size.height * 0.125));
        this[_paintCheck](context.canvas, offset['+'](checkOffset), checkSize);
      }
    }
    [_paintAvatar](context, offset) {
      let t3;
      const paintWithOverlay = (context, offset) => {
        context.paintChild(dart.nullCheck(this.avatar), chip._RenderChip._boxParentData(dart.nullCheck(this.avatar)).offset['+'](offset));
        this[_paintSelectionOverlay](context, offset);
      };
      dart.fn(paintWithOverlay, T.PaintingContextAndOffsetTovoid());
      if (this.theme.showAvatar === false && this.avatarDrawerAnimation.isDismissed) {
        return;
      }
      let disabledColor = this[_disabledColor];
      let disabledColorAlpha = disabledColor.alpha;
      if (this.needsCompositing) {
        context.pushLayer(new layer.OpacityLayer.new({alpha: disabledColorAlpha}), paintWithOverlay, offset);
      } else {
        if (disabledColorAlpha !== 255) {
          context.canvas.saveLayer(chip._RenderChip._boxRect(this.avatar).shift(offset).inflate(20.0), (t3 = ui.Paint.new(), (() => {
            t3.color = disabledColor;
            return t3;
          })()));
        }
        paintWithOverlay(context, offset);
        if (disabledColorAlpha !== 255) {
          context.canvas.restore();
        }
      }
    }
    [_paintChild](context, offset, child, isEnabled) {
      let t3;
      if (child == null) {
        return;
      }
      let disabledColorAlpha = this[_disabledColor].alpha;
      if (!this.enableAnimation.isCompleted) {
        if (this.needsCompositing) {
          context.pushLayer(new layer.OpacityLayer.new({alpha: disabledColorAlpha}), dart.fn((context, offset) => {
            context.paintChild(child, chip._RenderChip._boxParentData(child).offset['+'](offset));
          }, T.PaintingContextAndOffsetTovoid()), offset);
        } else {
          let childRect = chip._RenderChip._boxRect(child).shift(offset);
          context.canvas.saveLayer(childRect.inflate(20.0), (t3 = ui.Paint.new(), (() => {
            t3.color = this[_disabledColor];
            return t3;
          })()));
          context.paintChild(child, chip._RenderChip._boxParentData(child).offset['+'](offset));
          context.canvas.restore();
        }
      } else {
        context.paintChild(child, chip._RenderChip._boxParentData(child).offset['+'](offset));
      }
    }
    paint(context, offset) {
      this[_paintAvatar](context, offset);
      if (this.deleteIconShowing) {
        this[_paintChild](context, offset, this.deleteIcon, this.isEnabled);
      }
      this[_paintChild](context, offset, this.label, this.isEnabled);
    }
    debugPaint(context, offset) {
      if (!(true || dart.fn(() => {
        let t3, t3$;
        let outlinePaint = (t3 = ui.Paint.new(), (() => {
          t3.color = C[44] || CT.C44;
          t3.strokeWidth = 1.0;
          t3.style = ui.PaintingStyle.stroke;
          return t3;
        })());
        if (this.deleteIconShowing) {
          context.canvas.drawRect(this[_deleteButtonRect].shift(offset), outlinePaint);
        }
        context.canvas.drawRect(this[_pressRect].shift(offset), (t3$ = outlinePaint, (() => {
          t3$.color = C[45] || CT.C45;
          return t3$;
        })()));
        return true;
      }, T.VoidTobool())())) dart.assertFailed(null, I[1], 2079, 12, "!_debugShowTapTargetOutlines || () {\n      // Draws a rect around the tap targets to help with visualizing where\n      // they really are.\n      final Paint outlinePaint = Paint()\n        ..color = const Color(0xff800000)\n        ..strokeWidth = 1.0\n        ..style = PaintingStyle.stroke;\n      if (deleteIconShowing) {\n        context.canvas.drawRect(_deleteButtonRect.shift(offset), outlinePaint);\n      }\n      context.canvas.drawRect(\n        _pressRect.shift(offset),\n        outlinePaint..color = const Color(0xff008000),\n      );\n      return true;\n    }()");
    }
    hitTestSelf(position) {
      return this[_deleteButtonRect].contains(position) || this[_pressRect].contains(position);
    }
  };
  (chip._RenderChip.new = function(opts) {
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let isEnabled = opts && 'isEnabled' in opts ? opts.isEnabled : null;
    let checkmarkAnimation = opts && 'checkmarkAnimation' in opts ? opts.checkmarkAnimation : null;
    let avatarDrawerAnimation = opts && 'avatarDrawerAnimation' in opts ? opts.avatarDrawerAnimation : null;
    let deleteDrawerAnimation = opts && 'deleteDrawerAnimation' in opts ? opts.deleteDrawerAnimation : null;
    let enableAnimation = opts && 'enableAnimation' in opts ? opts.enableAnimation : null;
    let avatarBorder = opts && 'avatarBorder' in opts ? opts.avatarBorder : null;
    this[___RenderChip__deleteButtonRect] = null;
    this[___RenderChip__pressRect] = null;
    this.value = value;
    this.isEnabled = isEnabled;
    this.checkmarkAnimation = checkmarkAnimation;
    this.avatarDrawerAnimation = avatarDrawerAnimation;
    this.deleteDrawerAnimation = deleteDrawerAnimation;
    this.enableAnimation = enableAnimation;
    this.avatarBorder = avatarBorder;
    if (!(theme !== null)) dart.assertFailed(null, I[1], 1520, 15, "theme != null");
    if (!(textDirection !== null)) dart.assertFailed(null, I[1], 1521, 15, "textDirection != null");
    this[_theme] = theme;
    this[_textDirection] = textDirection;
    chip._RenderChip.__proto__.new.call(this);
    this.checkmarkAnimation.addListener(dart.bind(this, 'markNeedsPaint'));
    this.avatarDrawerAnimation.addListener(dart.bind(this, 'markNeedsLayout'));
    this.deleteDrawerAnimation.addListener(dart.bind(this, 'markNeedsLayout'));
    this.enableAnimation.addListener(dart.bind(this, 'markNeedsPaint'));
  }).prototype = chip._RenderChip.prototype;
  dart.addTypeTests(chip._RenderChip);
  dart.addTypeCaches(chip._RenderChip);
  dart.setMethodSignature(chip._RenderChip, () => ({
    __proto__: dart.getMethods(chip._RenderChip.__proto__),
    [_layoutLabel]: dart.fnType(ui.Size, [box$.BoxConstraints, core.double, ui.Size, ui.Size], [dart.fnType(ui.Size, [box$.RenderBox, box$.BoxConstraints])]),
    [_layoutAvatar]: dart.fnType(ui.Size, [box$.BoxConstraints, core.double], [dart.fnType(ui.Size, [box$.RenderBox, box$.BoxConstraints])]),
    [_layoutDeleteIcon]: dart.fnType(ui.Size, [box$.BoxConstraints, core.double], [dart.fnType(ui.Size, [box$.RenderBox, box$.BoxConstraints])]),
    [_computeSizes]: dart.fnType(chip._ChipSizes, [box$.BoxConstraints, dart.fnType(ui.Size, [box$.RenderBox, box$.BoxConstraints])]),
    [_paintCheck]: dart.fnType(dart.void, [ui.Canvas, ui.Offset, core.double]),
    [_paintSelectionOverlay]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    [_paintAvatar]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    [_paintChild]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset, dart.nullable(box$.RenderBox), dart.nullable(core.bool)])
  }));
  dart.setStaticMethodSignature(chip._RenderChip, () => ['_minWidth', '_maxWidth', '_minHeight', '_boxSize', '_boxRect', '_boxParentData']);
  dart.setGetterSignature(chip._RenderChip, () => ({
    __proto__: dart.getGetters(chip._RenderChip.__proto__),
    [_deleteButtonRect]: ui.Rect,
    [_pressRect]: ui.Rect,
    avatar: dart.nullable(box$.RenderBox),
    deleteIcon: dart.nullable(box$.RenderBox),
    label: dart.nullable(box$.RenderBox),
    theme: chip._ChipRenderTheme,
    textDirection: dart.nullable(ui.TextDirection),
    isDrawingCheckmark: core.bool,
    deleteIconShowing: core.bool,
    [_disabledColor]: ui.Color
  }));
  dart.setSetterSignature(chip._RenderChip, () => ({
    __proto__: dart.getSetters(chip._RenderChip.__proto__),
    [_deleteButtonRect]: ui.Rect,
    [_pressRect]: ui.Rect,
    theme: chip._ChipRenderTheme,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setLibraryUri(chip._RenderChip, I[0]);
  dart.setFieldSignature(chip._RenderChip, () => ({
    __proto__: dart.getFields(chip._RenderChip.__proto__),
    value: dart.fieldType(dart.nullable(core.bool)),
    isEnabled: dart.fieldType(dart.nullable(core.bool)),
    [___RenderChip__deleteButtonRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [___RenderChip__pressRect]: dart.fieldType(dart.nullable(ui.Rect)),
    checkmarkAnimation: dart.fieldType(animation.Animation$(core.double)),
    avatarDrawerAnimation: dart.fieldType(animation.Animation$(core.double)),
    deleteDrawerAnimation: dart.fieldType(animation.Animation$(core.double)),
    enableAnimation: dart.fieldType(animation.Animation$(core.double)),
    avatarBorder: dart.fieldType(dart.nullable(borders.ShapeBorder)),
    [_theme]: dart.fieldType(chip._ChipRenderTheme),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection))
  }));
  dart.setStaticFieldSignature(chip._RenderChip, () => ['selectionScrimTween', '_debugShowTapTargetOutlines']);
  dart.defineLazy(chip._RenderChip, {
    /*chip._RenderChip.selectionScrimTween*/get selectionScrimTween() {
      return new tween.ColorTween.new({begin: colors.Colors.transparent, end: chip._kSelectScrimColor});
    },
    /*chip._RenderChip._debugShowTapTargetOutlines*/get _debugShowTapTargetOutlines() {
      return false;
    }
  }, false);
  chip._ChipSizes = class _ChipSizes extends core.Object {
    static ['_#new#tearOff'](opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      let overall = opts && 'overall' in opts ? opts.overall : null;
      let content = opts && 'content' in opts ? opts.content : null;
      let avatar = opts && 'avatar' in opts ? opts.avatar : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let deleteIcon = opts && 'deleteIcon' in opts ? opts.deleteIcon : null;
      let densityAdjustment = opts && 'densityAdjustment' in opts ? opts.densityAdjustment : null;
      return new chip._ChipSizes.new({size: size, overall: overall, content: content, avatar: avatar, label: label, deleteIcon: deleteIcon, densityAdjustment: densityAdjustment});
    }
  };
  (chip._ChipSizes.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let overall = opts && 'overall' in opts ? opts.overall : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let avatar = opts && 'avatar' in opts ? opts.avatar : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let deleteIcon = opts && 'deleteIcon' in opts ? opts.deleteIcon : null;
    let densityAdjustment = opts && 'densityAdjustment' in opts ? opts.densityAdjustment : null;
    this.size = size;
    this.overall = overall;
    this.content = content;
    this.avatar = avatar;
    this.label = label;
    this.deleteIcon = deleteIcon;
    this.densityAdjustment = densityAdjustment;
    ;
  }).prototype = chip._ChipSizes.prototype;
  dart.addTypeTests(chip._ChipSizes);
  dart.addTypeCaches(chip._ChipSizes);
  dart.setLibraryUri(chip._ChipSizes, I[0]);
  dart.setFieldSignature(chip._ChipSizes, () => ({
    __proto__: dart.getFields(chip._ChipSizes.__proto__),
    size: dart.finalFieldType(ui.Size),
    overall: dart.finalFieldType(ui.Size),
    content: dart.finalFieldType(core.double),
    avatar: dart.finalFieldType(ui.Size),
    label: dart.finalFieldType(ui.Size),
    deleteIcon: dart.finalFieldType(ui.Size),
    densityAdjustment: dart.finalFieldType(ui.Offset)
  }));
  var parentFactory$ = dart.privateName(chip, "_UnconstrainedInkSplashFactory.parentFactory");
  chip._UnconstrainedInkSplashFactory = class _UnconstrainedInkSplashFactory extends ink_well.InteractiveInkFeatureFactory {
    get parentFactory() {
      return this[parentFactory$];
    }
    set parentFactory(value) {
      super.parentFactory = value;
    }
    static ['_#new#tearOff'](parentFactory) {
      return new chip._UnconstrainedInkSplashFactory.new(parentFactory);
    }
    create(opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let referenceBox = opts && 'referenceBox' in opts ? opts.referenceBox : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let containedInkWell = opts && 'containedInkWell' in opts ? opts.containedInkWell : false;
      let rectCallback = opts && 'rectCallback' in opts ? opts.rectCallback : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let customBorder = opts && 'customBorder' in opts ? opts.customBorder : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let onRemoved = opts && 'onRemoved' in opts ? opts.onRemoved : null;
      return this.parentFactory.create({controller: controller, referenceBox: referenceBox, position: position, color: color, rectCallback: rectCallback, borderRadius: borderRadius, customBorder: customBorder, radius: radius, onRemoved: onRemoved, textDirection: textDirection});
    }
  };
  (chip._UnconstrainedInkSplashFactory.new = function(parentFactory) {
    this[parentFactory$] = parentFactory;
    chip._UnconstrainedInkSplashFactory.__proto__.new.call(this);
    ;
  }).prototype = chip._UnconstrainedInkSplashFactory.prototype;
  dart.addTypeTests(chip._UnconstrainedInkSplashFactory);
  dart.addTypeCaches(chip._UnconstrainedInkSplashFactory);
  dart.setMethodSignature(chip._UnconstrainedInkSplashFactory, () => ({
    __proto__: dart.getMethods(chip._UnconstrainedInkSplashFactory.__proto__),
    create: dart.fnType(ink_well.InteractiveInkFeature, [], {borderRadius: dart.nullable(border_radius.BorderRadius), containedInkWell: core.bool, customBorder: dart.nullable(borders.ShapeBorder), onRemoved: dart.nullable(dart.fnType(dart.void, [])), radius: dart.nullable(core.double), rectCallback: dart.nullable(dart.fnType(ui.Rect, []))}, {color: ui.Color, controller: material.MaterialInkController, position: ui.Offset, referenceBox: box$.RenderBox, textDirection: ui.TextDirection})
  }));
  dart.setLibraryUri(chip._UnconstrainedInkSplashFactory, I[0]);
  dart.setFieldSignature(chip._UnconstrainedInkSplashFactory, () => ({
    __proto__: dart.getFields(chip._UnconstrainedInkSplashFactory.__proto__),
    parentFactory: dart.finalFieldType(ink_well.InteractiveInkFeatureFactory)
  }));
  chip._hitIsOnDeleteIcon = function _hitIsOnDeleteIcon(opts) {
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let tapPosition = opts && 'tapPosition' in opts ? opts.tapPosition : null;
    let chipSize = opts && 'chipSize' in opts ? opts.chipSize : null;
    let deleteButtonSize = opts && 'deleteButtonSize' in opts ? opts.deleteButtonSize : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let resolvedPadding = padding.resolve(textDirection);
    let deflatedSize = resolvedPadding.deflateSize(chipSize);
    let adjustedPosition = tapPosition['-'](new ui.Offset.new(resolvedPadding.left, resolvedPadding.top));
    let accessibleDeleteButtonWidth = math.min(core.double, deflatedSize.width * 0.499, math.max(core.double, deleteButtonSize.width, 24.0 + deleteButtonSize.width / 2.0));
    switch (textDirection) {
      case C[41] || CT.C41:
        {
          return adjustedPosition.dx >= deflatedSize.width - accessibleDeleteButtonWidth;
        }
      case C[40] || CT.C40:
        {
          return adjustedPosition.dx <= accessibleDeleteButtonWidth;
        }
    }
  };
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  dart.defineLazy(chip, {
    /*chip._kChipHeight*/get _kChipHeight() {
      return 32;
    },
    /*chip._kDeleteIconSize*/get _kDeleteIconSize() {
      return 18;
    },
    /*chip._kCheckmarkAlpha*/get _kCheckmarkAlpha() {
      return 222;
    },
    /*chip._kDisabledAlpha*/get _kDisabledAlpha() {
      return 97;
    },
    /*chip._kCheckmarkStrokeWidth*/get _kCheckmarkStrokeWidth() {
      return 2;
    },
    /*chip._kSelectDuration*/get _kSelectDuration() {
      return C[46] || CT.C46;
    },
    /*chip._kCheckmarkDuration*/get _kCheckmarkDuration() {
      return C[47] || CT.C47;
    },
    /*chip._kCheckmarkReverseDuration*/get _kCheckmarkReverseDuration() {
      return C[48] || CT.C48;
    },
    /*chip._kDrawerDuration*/get _kDrawerDuration() {
      return C[47] || CT.C47;
    },
    /*chip._kReverseDrawerDuration*/get _kReverseDrawerDuration() {
      return C[49] || CT.C49;
    },
    /*chip._kDisableDuration*/get _kDisableDuration() {
      return C[31] || CT.C31;
    },
    /*chip._kSelectScrimColor*/get _kSelectScrimColor() {
      return C[50] || CT.C50;
    },
    /*chip._kDefaultDeleteIcon*/get _kDefaultDeleteIcon() {
      return C[51] || CT.C51;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/chip.dart", {
    "package:flutter/src/material/chip.dart": chip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chip.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/chip.dart.lib.js"}');
  // Exports:
  return {
    src__material__chip: chip
  };
}));

//# sourceMappingURL=chip.dart.lib.js.map
