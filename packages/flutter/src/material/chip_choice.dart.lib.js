define(['dart_sdk', 'packages/flutter/src/painting/circle_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/chip.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/foundation/math.dart'], (function load__packages__flutter__src__material__chip_choice_dart(dart_sdk, packages__flutter__src__painting__circle_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__chip$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__foundation__math$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const circle_border = packages__flutter__src__painting__circle_border$46dart.src__painting__circle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const debug = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const chip_theme = packages__flutter__src__material__icon_button$46dart.src__material__chip_theme;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const chip = packages__flutter__src__material__chip$46dart.src__material__chip;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  var chip_choice = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
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
    get C3() {
      return C[3] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[3] || CT.C3,
        [BorderSide_style]: C[4] || CT.C4,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[5] || CT.C5
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: circle_border.CircleBorder.prototype,
        [OutlinedBorder_side]: C[2] || CT.C2
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ChoiceChip",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip_choice.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RawChip",
        [_Location_column]: 12,
        [_Location_line]: 182,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip_choice.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[10] || CT.C10,
        [BorderRadius_bottomLeft]: C[10] || CT.C10,
        [BorderRadius_topRight]: C[10] || CT.C10,
        [BorderRadius_topLeft]: C[10] || CT.C10
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[2] || CT.C2,
        [RoundedRectangleBorder_borderRadius]: C[9] || CT.C9
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    }
  }, false);
  var C = Array(14).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/chip_choice.dart",
    "package:flutter/src/material/chip_choice.dart"
  ];
  var avatar$ = dart.privateName(chip_choice, "ChoiceChip.avatar");
  var label$ = dart.privateName(chip_choice, "ChoiceChip.label");
  var labelStyle$ = dart.privateName(chip_choice, "ChoiceChip.labelStyle");
  var labelPadding$ = dart.privateName(chip_choice, "ChoiceChip.labelPadding");
  var onSelected$ = dart.privateName(chip_choice, "ChoiceChip.onSelected");
  var pressElevation$ = dart.privateName(chip_choice, "ChoiceChip.pressElevation");
  var selected$ = dart.privateName(chip_choice, "ChoiceChip.selected");
  var disabledColor$ = dart.privateName(chip_choice, "ChoiceChip.disabledColor");
  var selectedColor$ = dart.privateName(chip_choice, "ChoiceChip.selectedColor");
  var tooltip$ = dart.privateName(chip_choice, "ChoiceChip.tooltip");
  var side$ = dart.privateName(chip_choice, "ChoiceChip.side");
  var shape$ = dart.privateName(chip_choice, "ChoiceChip.shape");
  var clipBehavior$ = dart.privateName(chip_choice, "ChoiceChip.clipBehavior");
  var focusNode$ = dart.privateName(chip_choice, "ChoiceChip.focusNode");
  var autofocus$ = dart.privateName(chip_choice, "ChoiceChip.autofocus");
  var backgroundColor$ = dart.privateName(chip_choice, "ChoiceChip.backgroundColor");
  var padding$ = dart.privateName(chip_choice, "ChoiceChip.padding");
  var visualDensity$ = dart.privateName(chip_choice, "ChoiceChip.visualDensity");
  var materialTapTargetSize$ = dart.privateName(chip_choice, "ChoiceChip.materialTapTargetSize");
  var elevation$ = dart.privateName(chip_choice, "ChoiceChip.elevation");
  var shadowColor$ = dart.privateName(chip_choice, "ChoiceChip.shadowColor");
  var surfaceTintColor$ = dart.privateName(chip_choice, "ChoiceChip.surfaceTintColor");
  var selectedShadowColor$ = dart.privateName(chip_choice, "ChoiceChip.selectedShadowColor");
  var avatarBorder$ = dart.privateName(chip_choice, "ChoiceChip.avatarBorder");
  var iconTheme$ = dart.privateName(chip_choice, "ChoiceChip.iconTheme");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  chip_choice.ChoiceChip = class ChoiceChip extends framework.StatelessWidget {
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
    get onSelected() {
      return this[onSelected$];
    }
    set onSelected(value) {
      super.onSelected = value;
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
      return this[tooltip$];
    }
    set tooltip(value) {
      super.tooltip = value;
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
    get selectedShadowColor() {
      return this[selectedShadowColor$];
    }
    set selectedShadowColor(value) {
      super.selectedShadowColor = value;
    }
    get avatarBorder() {
      return this[avatarBorder$];
    }
    set avatarBorder(value) {
      super.avatarBorder = value;
    }
    get iconTheme() {
      return this[iconTheme$];
    }
    set iconTheme(value) {
      super.iconTheme = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let avatar = opts && 'avatar' in opts ? opts.avatar : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
      let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
      let onSelected = opts && 'onSelected' in opts ? opts.onSelected : null;
      let pressElevation = opts && 'pressElevation' in opts ? opts.pressElevation : null;
      let selected = opts && 'selected' in opts ? opts.selected : null;
      let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : null;
      let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
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
      let selectedShadowColor = opts && 'selectedShadowColor' in opts ? opts.selectedShadowColor : null;
      let avatarBorder = opts && 'avatarBorder' in opts ? opts.avatarBorder : C[1] || CT.C1;
      return new chip_choice.ChoiceChip.new({key: key, avatar: avatar, label: label, labelStyle: labelStyle, labelPadding: labelPadding, onSelected: onSelected, pressElevation: pressElevation, selected: selected, selectedColor: selectedColor, disabledColor: disabledColor, tooltip: tooltip, side: side, shape: shape, clipBehavior: clipBehavior, focusNode: focusNode, autofocus: autofocus, backgroundColor: backgroundColor, padding: padding, visualDensity: visualDensity, materialTapTargetSize: materialTapTargetSize, elevation: elevation, shadowColor: shadowColor, surfaceTintColor: surfaceTintColor, iconTheme: iconTheme, selectedShadowColor: selectedShadowColor, avatarBorder: avatarBorder, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
    get isEnabled() {
      return this.onSelected != null;
    }
    build(context) {
      let t0, t0$;
      if (!debug.debugCheckHasMaterial(context)) dart.assertFailed(null, I[0], 177, 12, "debugCheckHasMaterial(context)");
      let chipTheme = chip_theme.ChipTheme.of(context);
      let defaults = theme.Theme.of(context).useMaterial3 ? new chip_choice._FilterChipDefaultsM3.new(context, this.isEnabled, this.selected) : null;
      return new chip.RawChip.new({defaultProperties: defaults, avatar: this.avatar, label: this.label, labelStyle: (t0 = this.labelStyle, t0 == null ? this.selected ? chipTheme.secondaryLabelStyle : null : t0), labelPadding: this.labelPadding, onSelected: this.onSelected, pressElevation: this.pressElevation, selected: this.selected, showCheckmark: theme.Theme.of(context).useMaterial3, tooltip: this.tooltip, side: this.side, shape: this.shape, clipBehavior: this.clipBehavior, focusNode: this.focusNode, autofocus: this.autofocus, disabledColor: this.disabledColor, selectedColor: (t0$ = this.selectedColor, t0$ == null ? chipTheme.secondarySelectedColor : t0$), backgroundColor: this.backgroundColor, padding: this.padding, visualDensity: this.visualDensity, isEnabled: this.isEnabled, materialTapTargetSize: this.materialTapTargetSize, elevation: this.elevation, shadowColor: this.shadowColor, surfaceTintColor: this.surfaceTintColor, selectedShadowColor: this.selectedShadowColor, avatarBorder: this.avatarBorder, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
  };
  (chip_choice.ChoiceChip.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let avatar = opts && 'avatar' in opts ? opts.avatar : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let labelStyle = opts && 'labelStyle' in opts ? opts.labelStyle : null;
    let labelPadding = opts && 'labelPadding' in opts ? opts.labelPadding : null;
    let onSelected = opts && 'onSelected' in opts ? opts.onSelected : null;
    let pressElevation = opts && 'pressElevation' in opts ? opts.pressElevation : null;
    let selected = opts && 'selected' in opts ? opts.selected : null;
    let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
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
    let selectedShadowColor = opts && 'selectedShadowColor' in opts ? opts.selectedShadowColor : null;
    let avatarBorder = opts && 'avatarBorder' in opts ? opts.avatarBorder : C[1] || CT.C1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[avatar$] = avatar;
    this[label$] = label;
    this[labelStyle$] = labelStyle;
    this[labelPadding$] = labelPadding;
    this[onSelected$] = onSelected;
    this[pressElevation$] = pressElevation;
    this[selected$] = selected;
    this[selectedColor$] = selectedColor;
    this[disabledColor$] = disabledColor;
    this[tooltip$] = tooltip;
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
    this[selectedShadowColor$] = selectedShadowColor;
    this[avatarBorder$] = avatarBorder;
    if (!(selected !== null)) dart.assertFailed(null, I[0], 114, 15, "selected != null");
    if (!(label !== null)) dart.assertFailed(null, I[0], 115, 15, "label != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 116, 15, "clipBehavior != null");
    if (!(autofocus !== null)) dart.assertFailed(null, I[0], 117, 15, "autofocus != null");
    if (!(pressElevation == null || dart.notNull(pressElevation) >= 0.0)) dart.assertFailed(null, I[0], 118, 15, "pressElevation == null || pressElevation >= 0.0");
    if (!(elevation == null || dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, I[0], 119, 15, "elevation == null || elevation >= 0.0");
    chip_choice.ChoiceChip.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chip_choice.ChoiceChip.prototype;
  dart.addTypeTests(chip_choice.ChoiceChip);
  dart.addTypeCaches(chip_choice.ChoiceChip);
  chip_choice.ChoiceChip[dart.implements] = () => [chip.ChipAttributes, chip.SelectableChipAttributes, chip.DisabledChipAttributes];
  dart.setMethodSignature(chip_choice.ChoiceChip, () => ({
    __proto__: dart.getMethods(chip_choice.ChoiceChip.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(chip_choice.ChoiceChip, () => ({
    __proto__: dart.getGetters(chip_choice.ChoiceChip.__proto__),
    isEnabled: core.bool
  }));
  dart.setLibraryUri(chip_choice.ChoiceChip, I[1]);
  dart.setFieldSignature(chip_choice.ChoiceChip, () => ({
    __proto__: dart.getFields(chip_choice.ChoiceChip.__proto__),
    avatar: dart.finalFieldType(dart.nullable(framework.Widget)),
    label: dart.finalFieldType(framework.Widget),
    labelStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    labelPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    onSelected: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    pressElevation: dart.finalFieldType(dart.nullable(core.double)),
    selected: dart.finalFieldType(core.bool),
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
    selectedShadowColor: dart.finalFieldType(dart.nullable(ui.Color)),
    avatarBorder: dart.finalFieldType(borders.ShapeBorder),
    iconTheme: dart.finalFieldType(dart.nullable(icon_theme_data.IconThemeData))
  }));
  var context$ = dart.privateName(chip_choice, "_FilterChipDefaultsM3.context");
  var isEnabled$ = dart.privateName(chip_choice, "_FilterChipDefaultsM3.isEnabled");
  var isSelected$ = dart.privateName(chip_choice, "_FilterChipDefaultsM3.isSelected");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  chip_choice._FilterChipDefaultsM3 = class _FilterChipDefaultsM3 extends chip_theme.ChipThemeData {
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get isEnabled() {
      return this[isEnabled$];
    }
    set isEnabled(value) {
      super.isEnabled = value;
    }
    get isSelected() {
      return this[isSelected$];
    }
    set isSelected(value) {
      super.isSelected = value;
    }
    static ['_#new#tearOff'](context, isEnabled, isSelected) {
      return new chip_choice._FilterChipDefaultsM3.new(context, isEnabled, isSelected);
    }
    get labelStyle() {
      return theme.Theme.of(this.context).textTheme.labelLarge;
    }
    get backgroundColor() {
      return null;
    }
    get shadowColor() {
      return theme.Theme.of(this.context).colorScheme.shadow;
    }
    get surfaceTintColor() {
      return theme.Theme.of(this.context).colorScheme.surfaceTint;
    }
    get selectedColor() {
      return this.isEnabled ? theme.Theme.of(this.context).colorScheme.secondaryContainer : theme.Theme.of(this.context).colorScheme.onSurface.withOpacity(0.12);
    }
    get checkmarkColor() {
      return theme.Theme.of(this.context).colorScheme.onSecondaryContainer;
    }
    get disabledColor() {
      return this.isSelected ? theme.Theme.of(this.context).colorScheme.onSurface.withOpacity(0.12) : null;
    }
    get deleteIconColor() {
      return theme.Theme.of(this.context).colorScheme.onSecondaryContainer;
    }
    get side() {
      return !this.isSelected ? this.isEnabled ? new borders.BorderSide.new({color: theme.Theme.of(this.context).colorScheme.outline}) : new borders.BorderSide.new({color: theme.Theme.of(this.context).colorScheme.onSurface.withOpacity(0.12)}) : null;
    }
    get iconTheme() {
      return new icon_theme_data.IconThemeData.new({color: this.isEnabled ? null : theme.Theme.of(this.context).colorScheme.onSurface, size: 18.0});
    }
    get padding() {
      return C[11] || CT.C11;
    }
    get labelPadding() {
      return dart.nullCheck(edge_insets.EdgeInsets.lerp(C[12] || CT.C12, C[13] || CT.C13, math.clampDouble(media_query.MediaQuery.of(this.context).textScaleFactor - 1.0, 0.0, 1.0)));
    }
  };
  (chip_choice._FilterChipDefaultsM3.new = function(context, isEnabled, isSelected) {
    this[context$] = context;
    this[isEnabled$] = isEnabled;
    this[isSelected$] = isSelected;
    chip_choice._FilterChipDefaultsM3.__proto__.new.call(this, {elevation: 0.0, shape: C[8] || CT.C8, showCheckmark: true});
    ;
  }).prototype = chip_choice._FilterChipDefaultsM3.prototype;
  dart.addTypeTests(chip_choice._FilterChipDefaultsM3);
  dart.addTypeCaches(chip_choice._FilterChipDefaultsM3);
  dart.setGetterSignature(chip_choice._FilterChipDefaultsM3, () => ({
    __proto__: dart.getGetters(chip_choice._FilterChipDefaultsM3.__proto__),
    labelStyle: dart.nullable(text_style.TextStyle),
    backgroundColor: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color),
    surfaceTintColor: dart.nullable(ui.Color),
    selectedColor: dart.nullable(ui.Color),
    checkmarkColor: dart.nullable(ui.Color),
    disabledColor: dart.nullable(ui.Color),
    deleteIconColor: dart.nullable(ui.Color),
    side: dart.nullable(borders.BorderSide),
    iconTheme: dart.nullable(icon_theme_data.IconThemeData),
    padding: dart.nullable(edge_insets.EdgeInsetsGeometry),
    labelPadding: dart.nullable(edge_insets.EdgeInsetsGeometry)
  }));
  dart.setLibraryUri(chip_choice._FilterChipDefaultsM3, I[1]);
  dart.setFieldSignature(chip_choice._FilterChipDefaultsM3, () => ({
    __proto__: dart.getFields(chip_choice._FilterChipDefaultsM3.__proto__),
    context: dart.finalFieldType(framework.BuildContext),
    isEnabled: dart.finalFieldType(core.bool),
    isSelected: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/material/chip_choice.dart", {
    "package:flutter/src/material/chip_choice.dart": chip_choice
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chip_choice.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyHgB;;;;;;IAED;;;;;;IAEI;;;;;;IAES;;;;;;IAEA;;;;;;IAEZ;;;;;;IAEH;;;;;;IAEE;;;;;;IAEA;;;;;;IAEC;;;;;;IAEI;;;;;;IAEI;;;;;;IAEX;;;;;;IAEM;;;;;;IAEN;;;;;;IAEE;;;;;;IAEa;;;;;;IAEL;;;;;;IAEQ;;;;;;IAEf;;;;;;IAED;;;;;;IAEA;;;;;;IAEA;;;;;;IAEK;;;;;;IAEG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAGC,YAAA,AAAW;IAAO;UAGd;;AACxB,WAAO,4BAAsB,OAAO;AAChB,sBAAsB,wBAAG,OAAO;AAC/B,qBAAiB,AAAY,eAAT,OAAO,iBAC5C,0CAAsB,OAAO,EAAE,gBAAW,iBAC1C;AACJ,YAAO,0CACc,QAAQ,UACnB,oBACD,yBACgB,sBAAX,aAAe,gBAAW,AAAU,SAAD,uBAAuB,0BACxD,+BACF,iCACI,+BACN,8BACW,AAAY,eAAT,OAAO,yBACtB,oBACH,kBACC,0BACO,8BACH,2BACA,+BACI,oCACc,0BAAd,cAAiB,AAAU,SAAD,iDACxB,+BACR,6BACM,+BACJ,uCACY,uCACZ,6BACE,oCACK,4CACG,wCACP;IAElB;;;QA3HQ;QACD;QACS;QACT;QACA;QACA;QACA;QACS;QACT;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAxBA;IACS;IACT;IACA;IACA;IACA;IACS;IACT;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACK,AAAS,QAAD;UACR,AAAM,KAAD;UACL,AAAa,YAAD;UACZ,AAAU,SAAD;UACT,AAAe,AAAQ,cAAT,YAA2B,aAAf,cAAc,KAAI;UAC5C,AAAU,AAAQ,SAAT,YAAsB,aAAV,SAAS,KAAI;AAhCxC,0DACE,GAAG;;EA+BuC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgH/B;;;;;;IACR;;;;;;IACA;;;;;;;;;;AAGkB,YAAM,AAAY,AAAU,gBAAnB;IAA6B;;AAGrC;IAAI;;AAGR,YAAM,AAAY,AAAY,gBAArB;IAA2B;;AAGrB,YAAM,AAAY,AAAY,gBAArB;IAAgC;;AAGtD,8BAClB,AAAY,AAAY,eAArB,+CACH,AAAY,AAAY,AAAU,eAA/B,gDAA2C;IAAK;;AAGhC,YAAM,AAAY,AAAY,gBAArB;IAAyC;;AAGnD,+BACnB,AAAY,AAAY,AAAU,eAA/B,gDAA2C,QACpD;IAAI;;AAGuB,YAAM,AAAY,AAAY,gBAArB;IAAyC;;AAGxD,cAAC,kBACrB,iBACE,mCAAwB,AAAY,AAAY,eAArB,sCAC3B,mCAAwB,AAAY,AAAY,AAAU,eAA/B,gDAA2C,UACxE;IAAI;;AAGwB,2DACvB,iBACH,OACM,AAAY,AAAY,eAArB,2CACP;IACP;;AAGkC;IAAyB;;AAOpB,YAIvC,gBAJkD,8DAGjD,iBAAuB,AAAY,AAAgB,0BAAzB,gCAA2B,KAAK,KAAK;IAC/D;;oDAlE+B,SAAc,WAAgB;IAA9B;IAAc;IAAgB;AAC3D,2EACa,0CAEI;;EAChB","file":"../../../../../../../../../../packages/flutter/src/material/chip_choice.dart.lib.js"}');
  // Exports:
  return {
    src__material__chip_choice: chip_choice
  };
}));

//# sourceMappingURL=chip_choice.dart.lib.js.map
