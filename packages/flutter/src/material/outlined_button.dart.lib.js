define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/material/constants.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/stadium_border.dart'], (function load__packages__flutter__src__material__outlined_button_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__material__constants$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__stadium_border$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const button_style_button = packages__flutter__src__material__icon_button$46dart.src__material__button_style_button;
  const button_style = packages__flutter__src__material__icon_button$46dart.src__material__button_style;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const ink_ripple = packages__flutter__src__material__icon_button$46dart.src__material__ink_ripple;
  const outlined_button_theme = packages__flutter__src__material__icon_button$46dart.src__material__outlined_button_theme;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const color_scheme = packages__flutter__src__material__icon_button$46dart.src__material__color_scheme;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const constants = packages__flutter__src__material__constants$46dart.src__material__constants;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const stadium_border = packages__flutter__src__painting__stadium_border$46dart.src__painting__stadium_border;
  var outlined_button = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(ui.Color)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    TextStyleN: () => (T.TextStyleN = dart.constFn(dart.nullable(text_style.TextStyle)))(),
    MaterialStatePropertyAllOfTextStyleN: () => (T.MaterialStatePropertyAllOfTextStyleN = dart.constFn(material_state.MaterialStatePropertyAll$(T.TextStyleN())))(),
    SetOfMaterialState: () => (T.SetOfMaterialState = dart.constFn(core.Set$(material_state.MaterialState)))(),
    SetOfMaterialStateToColor: () => (T.SetOfMaterialStateToColor = dart.constFn(dart.fnType(ui.Color, [T.SetOfMaterialState()])))(),
    SetOfMaterialStateToColorN: () => (T.SetOfMaterialStateToColorN = dart.constFn(dart.fnType(T.ColorN(), [T.SetOfMaterialState()])))(),
    SetOfMaterialStateToBorderSide: () => (T.SetOfMaterialStateToBorderSide = dart.constFn(dart.fnType(borders.BorderSide, [T.SetOfMaterialState()])))(),
    MouseCursorN: () => (T.MouseCursorN = dart.constFn(dart.nullable(mouse_cursor.MouseCursor)))(),
    SetOfMaterialStateToSystemMouseCursor: () => (T.SetOfMaterialStateToSystemMouseCursor = dart.constFn(dart.fnType(mouse_cursor.SystemMouseCursor, [T.SetOfMaterialState()])))()
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
        [_Location_name]: "OutlinedButton",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_OutlinedButtonWithIcon",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 36,
        [OffsetBase__dx]: 64
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[6] || CT.C6,
        [BorderSide_style]: C[7] || CT.C7,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[8] || CT.C8
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
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
    get C4() {
      return C[4] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[5] || CT.C5,
        [RoundedRectangleBorder_borderRadius]: C[9] || CT.C9
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_OutlinedButtonWithIconChild",
        [_Location_column]: 17,
        [_Location_line]: 417,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_OutlinedButtonWithIcon",
        [_Location_column]: 3,
        [_Location_line]: 402,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_OutlinedButtonWithIconChild",
        [_Location_column]: 9,
        [_Location_line]: 422,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 32,
        [_Location_line]: 436,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 54,
        [_Location_line]: 436,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 434,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 40,
        [OffsetBase__dx]: 64
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: stadium_border.StadiumBorder.prototype,
        [OutlinedBorder_side]: C[5] || CT.C5
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    }
  }, false);
  var C = Array(22).fill(void 0);
  var I = [
    "package:flutter/src/material/outlined_button.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/outlined_button.dart"
  ];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  outlined_button.OutlinedButton = class OutlinedButton extends button_style_button.ButtonStyleButton {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let onHover = opts && 'onHover' in opts ? opts.onHover : null;
      let onFocusChange = opts && 'onFocusChange' in opts ? opts.onFocusChange : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let statesController = opts && 'statesController' in opts ? opts.statesController : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new outlined_button.OutlinedButton.new({key: key, onPressed: onPressed, onLongPress: onLongPress, onHover: onHover, onFocusChange: onFocusChange, style: style, focusNode: focusNode, autofocus: autofocus, clipBehavior: clipBehavior, statesController: statesController, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static ['_#icon#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let label = opts && 'label' in opts ? opts.label : null;
      return new outlined_button._OutlinedButtonWithIcon.new({key: key, onPressed: onPressed, onLongPress: onLongPress, style: style, focusNode: focusNode, autofocus: autofocus, clipBehavior: clipBehavior, icon: icon, label: label, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    static styleFrom(opts) {
      let t0, t1, t0$;
      let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let disabledForegroundColor = opts && 'disabledForegroundColor' in opts ? opts.disabledForegroundColor : null;
      let disabledBackgroundColor = opts && 'disabledBackgroundColor' in opts ? opts.disabledBackgroundColor : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      let surfaceTintColor = opts && 'surfaceTintColor' in opts ? opts.surfaceTintColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let minimumSize = opts && 'minimumSize' in opts ? opts.minimumSize : null;
      let fixedSize = opts && 'fixedSize' in opts ? opts.fixedSize : null;
      let maximumSize = opts && 'maximumSize' in opts ? opts.maximumSize : null;
      let side = opts && 'side' in opts ? opts.side : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let enabledMouseCursor = opts && 'enabledMouseCursor' in opts ? opts.enabledMouseCursor : null;
      let disabledMouseCursor = opts && 'disabledMouseCursor' in opts ? opts.disabledMouseCursor : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let tapTargetSize = opts && 'tapTargetSize' in opts ? opts.tapTargetSize : null;
      let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
      let enableFeedback = opts && 'enableFeedback' in opts ? opts.enableFeedback : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let splashFactory = opts && 'splashFactory' in opts ? opts.splashFactory : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let foreground = (t0 = foregroundColor, t0 == null ? primary : t0);
      let disabledForeground = (t0$ = disabledForegroundColor, t0$ == null ? (t1 = onSurface, t1 == null ? null : t1.withOpacity(0.38)) : t0$);
      let foregroundColorProp = foreground == null && disabledForeground == null ? null : new outlined_button._OutlinedButtonDefaultColor.new(foreground, disabledForeground);
      let backgroundColorProp = backgroundColor == null && disabledBackgroundColor == null ? null : disabledBackgroundColor == null ? button_style_button.ButtonStyleButton.allOrNull(T.ColorN(), backgroundColor) : new outlined_button._OutlinedButtonDefaultColor.new(backgroundColor, disabledBackgroundColor);
      let overlayColor = foreground == null ? null : new outlined_button._OutlinedButtonDefaultOverlay.new(foreground);
      let mouseCursor = enabledMouseCursor == null && disabledMouseCursor == null ? null : new outlined_button._OutlinedButtonDefaultMouseCursor.new(dart.nullCheck(enabledMouseCursor), dart.nullCheck(disabledMouseCursor));
      return new button_style.ButtonStyle.new({textStyle: button_style_button.ButtonStyleButton.allOrNull(text_style.TextStyle, textStyle), foregroundColor: foregroundColorProp, backgroundColor: backgroundColorProp, overlayColor: overlayColor, shadowColor: button_style_button.ButtonStyleButton.allOrNull(ui.Color, shadowColor), surfaceTintColor: button_style_button.ButtonStyleButton.allOrNull(ui.Color, surfaceTintColor), elevation: button_style_button.ButtonStyleButton.allOrNull(core.double, elevation), padding: button_style_button.ButtonStyleButton.allOrNull(edge_insets.EdgeInsetsGeometry, padding), minimumSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, minimumSize), fixedSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, fixedSize), maximumSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, maximumSize), side: button_style_button.ButtonStyleButton.allOrNull(borders.BorderSide, side), shape: button_style_button.ButtonStyleButton.allOrNull(borders.OutlinedBorder, shape), mouseCursor: mouseCursor, visualDensity: visualDensity, tapTargetSize: tapTargetSize, animationDuration: animationDuration, enableFeedback: enableFeedback, alignment: alignment, splashFactory: splashFactory});
    }
    defaultStyleOf(context) {
      let theme = theme$.Theme.of(context);
      let colorScheme = theme.colorScheme;
      return theme$.Theme.of(context).useMaterial3 ? new outlined_button._OutlinedButtonDefaultsM3.new(context) : outlined_button.OutlinedButton.styleFrom({foregroundColor: colorScheme.primary, disabledForegroundColor: colorScheme.onSurface.withOpacity(0.38), backgroundColor: colors.Colors.transparent, disabledBackgroundColor: colors.Colors.transparent, shadowColor: theme.shadowColor, elevation: 0.0, textStyle: theme.textTheme.button, padding: outlined_button._scaledPadding(context), minimumSize: C[3] || CT.C3, maximumSize: ui.Size.infinite, side: new borders.BorderSide.new({color: theme$.Theme.of(context).colorScheme.onSurface.withOpacity(0.12)}), shape: C[4] || CT.C4, enabledMouseCursor: mouse_cursor.SystemMouseCursors.click, disabledMouseCursor: mouse_cursor.SystemMouseCursors.basic, visualDensity: theme.visualDensity, tapTargetSize: theme.materialTapTargetSize, animationDuration: constants.kThemeChangeDuration, enableFeedback: true, alignment: alignment.Alignment.center, splashFactory: ink_ripple.InkRipple.splashFactory});
    }
    themeStyleOf(context) {
      return outlined_button_theme.OutlinedButtonTheme.of(context).style;
    }
  };
  (outlined_button.OutlinedButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onHover = opts && 'onHover' in opts ? opts.onHover : null;
    let onFocusChange = opts && 'onFocusChange' in opts ? opts.onFocusChange : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[0] || CT.C0;
    let statesController = opts && 'statesController' in opts ? opts.statesController : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    outlined_button.OutlinedButton.__proto__.new.call(this, {key: key, onPressed: onPressed, onLongPress: onLongPress, onHover: onHover, onFocusChange: onFocusChange, style: style, focusNode: focusNode, autofocus: autofocus, clipBehavior: clipBehavior, statesController: statesController, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = outlined_button.OutlinedButton.prototype;
  dart.addTypeTests(outlined_button.OutlinedButton);
  dart.addTypeCaches(outlined_button.OutlinedButton);
  dart.setMethodSignature(outlined_button.OutlinedButton, () => ({
    __proto__: dart.getMethods(outlined_button.OutlinedButton.__proto__),
    defaultStyleOf: dart.fnType(button_style.ButtonStyle, [framework.BuildContext]),
    themeStyleOf: dart.fnType(dart.nullable(button_style.ButtonStyle), [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(outlined_button.OutlinedButton, () => ['icon', 'styleFrom']);
  dart.setLibraryUri(outlined_button.OutlinedButton, I[0]);
  dart.setStaticFieldSignature(outlined_button.OutlinedButton, () => ['_redirecting#']);
  const MaterialStateProperty_Diagnosticable$36 = class MaterialStateProperty_Diagnosticable extends material_state.MaterialStateProperty$(dart.nullable(ui.Color)) {};
  (MaterialStateProperty_Diagnosticable$36.new = function() {
  }).prototype = MaterialStateProperty_Diagnosticable$36.prototype;
  dart.applyMixin(MaterialStateProperty_Diagnosticable$36, diagnostics.Diagnosticable);
  outlined_button._OutlinedButtonDefaultColor = class _OutlinedButtonDefaultColor extends MaterialStateProperty_Diagnosticable$36 {
    static ['_#new#tearOff'](color, disabled) {
      return new outlined_button._OutlinedButtonDefaultColor.new(color, disabled);
    }
    resolve(states) {
      if (states.contains(material_state.MaterialState.disabled)) {
        return this.disabled;
      }
      return this.color;
    }
  };
  (outlined_button._OutlinedButtonDefaultColor.new = function(color, disabled) {
    this.color = color;
    this.disabled = disabled;
    ;
  }).prototype = outlined_button._OutlinedButtonDefaultColor.prototype;
  dart.addTypeTests(outlined_button._OutlinedButtonDefaultColor);
  dart.addTypeCaches(outlined_button._OutlinedButtonDefaultColor);
  dart.setMethodSignature(outlined_button._OutlinedButtonDefaultColor, () => ({
    __proto__: dart.getMethods(outlined_button._OutlinedButtonDefaultColor.__proto__),
    resolve: dart.fnType(dart.nullable(ui.Color), [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(outlined_button._OutlinedButtonDefaultColor, I[0]);
  dart.setFieldSignature(outlined_button._OutlinedButtonDefaultColor, () => ({
    __proto__: dart.getFields(outlined_button._OutlinedButtonDefaultColor.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    disabled: dart.finalFieldType(dart.nullable(ui.Color))
  }));
  const MaterialStateProperty_Diagnosticable$36$ = class MaterialStateProperty_Diagnosticable extends material_state.MaterialStateProperty$(dart.nullable(ui.Color)) {};
  (MaterialStateProperty_Diagnosticable$36$.new = function() {
  }).prototype = MaterialStateProperty_Diagnosticable$36$.prototype;
  dart.applyMixin(MaterialStateProperty_Diagnosticable$36$, diagnostics.Diagnosticable);
  outlined_button._OutlinedButtonDefaultOverlay = class _OutlinedButtonDefaultOverlay extends MaterialStateProperty_Diagnosticable$36$ {
    static ['_#new#tearOff'](foreground) {
      return new outlined_button._OutlinedButtonDefaultOverlay.new(foreground);
    }
    resolve(states) {
      if (states.contains(material_state.MaterialState.hovered)) {
        return this.foreground.withOpacity(0.04);
      }
      if (states.contains(material_state.MaterialState.focused) || states.contains(material_state.MaterialState.pressed)) {
        return this.foreground.withOpacity(0.12);
      }
      return null;
    }
  };
  (outlined_button._OutlinedButtonDefaultOverlay.new = function(foreground) {
    this.foreground = foreground;
    ;
  }).prototype = outlined_button._OutlinedButtonDefaultOverlay.prototype;
  dart.addTypeTests(outlined_button._OutlinedButtonDefaultOverlay);
  dart.addTypeCaches(outlined_button._OutlinedButtonDefaultOverlay);
  dart.setMethodSignature(outlined_button._OutlinedButtonDefaultOverlay, () => ({
    __proto__: dart.getMethods(outlined_button._OutlinedButtonDefaultOverlay.__proto__),
    resolve: dart.fnType(dart.nullable(ui.Color), [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(outlined_button._OutlinedButtonDefaultOverlay, I[0]);
  dart.setFieldSignature(outlined_button._OutlinedButtonDefaultOverlay, () => ({
    __proto__: dart.getFields(outlined_button._OutlinedButtonDefaultOverlay.__proto__),
    foreground: dart.finalFieldType(ui.Color)
  }));
  const MaterialStateProperty_Diagnosticable$36$0 = class MaterialStateProperty_Diagnosticable extends material_state.MaterialStateProperty$(mouse_cursor.MouseCursor) {};
  (MaterialStateProperty_Diagnosticable$36$0.new = function() {
  }).prototype = MaterialStateProperty_Diagnosticable$36$0.prototype;
  dart.applyMixin(MaterialStateProperty_Diagnosticable$36$0, diagnostics.Diagnosticable);
  outlined_button._OutlinedButtonDefaultMouseCursor = class _OutlinedButtonDefaultMouseCursor extends MaterialStateProperty_Diagnosticable$36$0 {
    static ['_#new#tearOff'](enabledCursor, disabledCursor) {
      return new outlined_button._OutlinedButtonDefaultMouseCursor.new(enabledCursor, disabledCursor);
    }
    resolve(states) {
      if (states.contains(material_state.MaterialState.disabled)) {
        return this.disabledCursor;
      }
      return this.enabledCursor;
    }
  };
  (outlined_button._OutlinedButtonDefaultMouseCursor.new = function(enabledCursor, disabledCursor) {
    this.enabledCursor = enabledCursor;
    this.disabledCursor = disabledCursor;
    ;
  }).prototype = outlined_button._OutlinedButtonDefaultMouseCursor.prototype;
  dart.addTypeTests(outlined_button._OutlinedButtonDefaultMouseCursor);
  dart.addTypeCaches(outlined_button._OutlinedButtonDefaultMouseCursor);
  dart.setMethodSignature(outlined_button._OutlinedButtonDefaultMouseCursor, () => ({
    __proto__: dart.getMethods(outlined_button._OutlinedButtonDefaultMouseCursor.__proto__),
    resolve: dart.fnType(mouse_cursor.MouseCursor, [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(outlined_button._OutlinedButtonDefaultMouseCursor, I[0]);
  dart.setFieldSignature(outlined_button._OutlinedButtonDefaultMouseCursor, () => ({
    __proto__: dart.getFields(outlined_button._OutlinedButtonDefaultMouseCursor.__proto__),
    enabledCursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    disabledCursor: dart.finalFieldType(mouse_cursor.MouseCursor)
  }));
  outlined_button._OutlinedButtonWithIcon = class _OutlinedButtonWithIcon extends outlined_button.OutlinedButton {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let label = opts && 'label' in opts ? opts.label : null;
      return new outlined_button._OutlinedButtonWithIcon.new({key: key, onPressed: onPressed, onLongPress: onLongPress, style: style, focusNode: focusNode, autofocus: autofocus, clipBehavior: clipBehavior, icon: icon, label: label, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
  };
  (outlined_button._OutlinedButtonWithIcon.new = function(opts) {
    let t0, t0$;
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(icon !== null)) dart.assertFailed(null, I[1], 412, 15, "icon != null");
    if (!(label !== null)) dart.assertFailed(null, I[1], 413, 15, "label != null");
    outlined_button._OutlinedButtonWithIcon.__proto__.new.call(this, {autofocus: (t0 = autofocus, t0 == null ? false : t0), clipBehavior: (t0$ = clipBehavior, t0$ == null ? ui.Clip.none : t0$), child: new outlined_button._OutlinedButtonWithIconChild.new({icon: icon, label: label, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), key: key, onPressed: onPressed, onLongPress: onLongPress, style: style, focusNode: focusNode, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = outlined_button._OutlinedButtonWithIcon.prototype;
  dart.addTypeTests(outlined_button._OutlinedButtonWithIcon);
  dart.addTypeCaches(outlined_button._OutlinedButtonWithIcon);
  dart.setLibraryUri(outlined_button._OutlinedButtonWithIcon, I[0]);
  var label$ = dart.privateName(outlined_button, "_OutlinedButtonWithIconChild.label");
  var icon$ = dart.privateName(outlined_button, "_OutlinedButtonWithIconChild.icon");
  outlined_button._OutlinedButtonWithIconChild = class _OutlinedButtonWithIconChild extends framework.StatelessWidget {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    static ['_#new#tearOff'](opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      return new outlined_button._OutlinedButtonWithIconChild.new({label: label, icon: icon, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    build(context) {
      let t0, t0$;
      let scale = (t0$ = (t0 = media_query.MediaQuery.maybeOf(context), t0 == null ? null : t0.textScaleFactor), t0$ == null ? 1.0 : t0$);
      let gap = scale <= 1 ? 8.0 : dart.nullCheck(ui.lerpDouble(8, 4, math.min(core.double, scale - 1, 1.0)));
      return new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidget().of([this.icon, new basic.SizedBox.new({width: gap, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), new basic.Flexible.new({child: this.label, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15})]), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
  };
  (outlined_button._OutlinedButtonWithIconChild.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[label$] = label;
    this[icon$] = icon;
    outlined_button._OutlinedButtonWithIconChild.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = outlined_button._OutlinedButtonWithIconChild.prototype;
  dart.addTypeTests(outlined_button._OutlinedButtonWithIconChild);
  dart.addTypeCaches(outlined_button._OutlinedButtonWithIconChild);
  dart.setMethodSignature(outlined_button._OutlinedButtonWithIconChild, () => ({
    __proto__: dart.getMethods(outlined_button._OutlinedButtonWithIconChild.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(outlined_button._OutlinedButtonWithIconChild, I[0]);
  dart.setFieldSignature(outlined_button._OutlinedButtonWithIconChild, () => ({
    __proto__: dart.getFields(outlined_button._OutlinedButtonWithIconChild.__proto__),
    label: dart.finalFieldType(framework.Widget),
    icon: dart.finalFieldType(framework.Widget)
  }));
  var ___OutlinedButtonDefaultsM3__colors = dart.privateName(outlined_button, "_#_OutlinedButtonDefaultsM3#_colors");
  var _colors = dart.privateName(outlined_button, "_colors");
  outlined_button._OutlinedButtonDefaultsM3 = class _OutlinedButtonDefaultsM3 extends button_style.ButtonStyle {
    static ['_#new#tearOff'](context) {
      return new outlined_button._OutlinedButtonDefaultsM3.new(context);
    }
    get [_colors]() {
      let t1, t0;
      t0 = this[___OutlinedButtonDefaultsM3__colors];
      return t0 == null ? (t1 = theme$.Theme.of(this.context).colorScheme, this[___OutlinedButtonDefaultsM3__colors] == null ? this[___OutlinedButtonDefaultsM3__colors] = t1 : dart.throw(new _internal.LateError.fieldADI("_colors"))) : t0;
    }
    get textStyle() {
      return new (T.MaterialStatePropertyAllOfTextStyleN()).new(theme$.Theme.of(this.context).textTheme.labelLarge);
    }
    get backgroundColor() {
      return button_style_button.ButtonStyleButton.allOrNull(ui.Color, colors.Colors.transparent);
    }
    get foregroundColor() {
      return material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
        if (states.contains(material_state.MaterialState.disabled)) {
          return this[_colors].onSurface.withOpacity(0.38);
        }
        return this[_colors].primary;
      }, T.SetOfMaterialStateToColor()));
    }
    get overlayColor() {
      return material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
        if (states.contains(material_state.MaterialState.hovered)) {
          return this[_colors].primary.withOpacity(0.08);
        }
        if (states.contains(material_state.MaterialState.focused)) {
          return this[_colors].primary.withOpacity(0.12);
        }
        if (states.contains(material_state.MaterialState.pressed)) {
          return this[_colors].primary.withOpacity(0.12);
        }
        return null;
      }, T.SetOfMaterialStateToColorN()));
    }
    get elevation() {
      return button_style_button.ButtonStyleButton.allOrNull(core.double, 0.0);
    }
    get padding() {
      return button_style_button.ButtonStyleButton.allOrNull(edge_insets.EdgeInsetsGeometry, outlined_button._scaledPadding(this.context));
    }
    get minimumSize() {
      return button_style_button.ButtonStyleButton.allOrNull(ui.Size, C[17] || CT.C17);
    }
    get maximumSize() {
      return button_style_button.ButtonStyleButton.allOrNull(ui.Size, ui.Size.infinite);
    }
    get side() {
      return material_state.MaterialStateProperty.resolveWith(borders.BorderSide, dart.fn(states => {
        if (states.contains(material_state.MaterialState.disabled)) {
          return new borders.BorderSide.new({color: this[_colors].onSurface.withOpacity(0.12)});
        }
        return new borders.BorderSide.new({color: this[_colors].outline});
      }, T.SetOfMaterialStateToBorderSide()));
    }
    get shape() {
      return button_style_button.ButtonStyleButton.allOrNull(borders.OutlinedBorder, C[18] || CT.C18);
    }
    get mouseCursor() {
      return material_state.MaterialStateProperty.resolveWith(T.MouseCursorN(), dart.fn(states => {
        if (states.contains(material_state.MaterialState.disabled)) {
          return mouse_cursor.SystemMouseCursors.basic;
        }
        return mouse_cursor.SystemMouseCursors.click;
      }, T.SetOfMaterialStateToSystemMouseCursor()));
    }
    get visualDensity() {
      return theme$.Theme.of(this.context).visualDensity;
    }
    get tapTargetSize() {
      return theme$.Theme.of(this.context).materialTapTargetSize;
    }
    get splashFactory() {
      return theme$.Theme.of(this.context).splashFactory;
    }
  };
  (outlined_button._OutlinedButtonDefaultsM3.new = function(context) {
    this[___OutlinedButtonDefaultsM3__colors] = null;
    this.context = context;
    outlined_button._OutlinedButtonDefaultsM3.__proto__.new.call(this, {animationDuration: constants.kThemeChangeDuration, enableFeedback: true, alignment: alignment.Alignment.center});
    ;
  }).prototype = outlined_button._OutlinedButtonDefaultsM3.prototype;
  dart.addTypeTests(outlined_button._OutlinedButtonDefaultsM3);
  dart.addTypeCaches(outlined_button._OutlinedButtonDefaultsM3);
  dart.setGetterSignature(outlined_button._OutlinedButtonDefaultsM3, () => ({
    __proto__: dart.getGetters(outlined_button._OutlinedButtonDefaultsM3.__proto__),
    [_colors]: color_scheme.ColorScheme,
    textStyle: material_state.MaterialStateProperty$(dart.nullable(text_style.TextStyle)),
    backgroundColor: dart.nullable(material_state.MaterialStateProperty$(dart.nullable(ui.Color))),
    foregroundColor: dart.nullable(material_state.MaterialStateProperty$(dart.nullable(ui.Color))),
    overlayColor: dart.nullable(material_state.MaterialStateProperty$(dart.nullable(ui.Color))),
    elevation: dart.nullable(material_state.MaterialStateProperty$(core.double)),
    padding: dart.nullable(material_state.MaterialStateProperty$(edge_insets.EdgeInsetsGeometry)),
    minimumSize: dart.nullable(material_state.MaterialStateProperty$(ui.Size)),
    maximumSize: dart.nullable(material_state.MaterialStateProperty$(ui.Size)),
    side: dart.nullable(material_state.MaterialStateProperty$(borders.BorderSide)),
    shape: dart.nullable(material_state.MaterialStateProperty$(borders.OutlinedBorder)),
    mouseCursor: dart.nullable(material_state.MaterialStateProperty$(dart.nullable(mouse_cursor.MouseCursor))),
    visualDensity: dart.nullable(theme_data.VisualDensity),
    tapTargetSize: dart.nullable(theme_data.MaterialTapTargetSize),
    splashFactory: dart.nullable(ink_well.InteractiveInkFeatureFactory)
  }));
  dart.setLibraryUri(outlined_button._OutlinedButtonDefaultsM3, I[0]);
  dart.setFieldSignature(outlined_button._OutlinedButtonDefaultsM3, () => ({
    __proto__: dart.getFields(outlined_button._OutlinedButtonDefaultsM3.__proto__),
    context: dart.finalFieldType(framework.BuildContext),
    [___OutlinedButtonDefaultsM3__colors]: dart.fieldType(dart.nullable(color_scheme.ColorScheme))
  }));
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  outlined_button._scaledPadding = function _scaledPadding(context) {
    let t0, t0$;
    return button_style_button.ButtonStyleButton.scaledPadding(C[19] || CT.C19, C[20] || CT.C20, C[21] || CT.C21, (t0$ = (t0 = media_query.MediaQuery.maybeOf(context), t0 == null ? null : t0.textScaleFactor), t0$ == null ? 1.0 : t0$));
  };
  dart.trackLibraries("packages/flutter/src/material/outlined_button.dart", {
    "package:flutter/src/material/outlined_button.dart": outlined_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["outlined_button.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/outlined_button.dart.lib.js"}');
  // Exports:
  return {
    src__material__outlined_button: outlined_button
  };
}));

//# sourceMappingURL=outlined_button.dart.lib.js.map
