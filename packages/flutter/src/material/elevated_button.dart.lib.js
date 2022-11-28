define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/material/constants.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/flex.dart', 'packages/flutter/src/painting/stadium_border.dart'], (function load__packages__flutter__src__material__elevated_button_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__material__constants$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__flex$46dart, packages__flutter__src__painting__stadium_border$46dart) {
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
  const button_style = packages__flutter__src__material__icon_button$46dart.src__material__button_style;
  const button_style_button = packages__flutter__src__material__icon_button$46dart.src__material__button_style_button;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const ink_ripple = packages__flutter__src__material__icon_button$46dart.src__material__ink_ripple;
  const elevated_button_theme = packages__flutter__src__material__icon_button$46dart.src__material__elevated_button_theme;
  const ink_well = packages__flutter__src__material__icon_button$46dart.src__material__ink_well;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const color_scheme = packages__flutter__src__material__icon_button$46dart.src__material__color_scheme;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const constants = packages__flutter__src__material__constants$46dart.src__material__constants;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  const stadium_border = packages__flutter__src__painting__stadium_border$46dart.src__painting__stadium_border;
  var elevated_button = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    TextStyleN: () => (T.TextStyleN = dart.constFn(dart.nullable(text_style.TextStyle)))(),
    MaterialStatePropertyAllOfTextStyleN: () => (T.MaterialStatePropertyAllOfTextStyleN = dart.constFn(material_state.MaterialStatePropertyAll$(T.TextStyleN())))(),
    MaterialStatePropertyAllOfEdgeInsetsGeometry: () => (T.MaterialStatePropertyAllOfEdgeInsetsGeometry = dart.constFn(material_state.MaterialStatePropertyAll$(edge_insets.EdgeInsetsGeometry)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(ui.Color)))(),
    SetOfMaterialState: () => (T.SetOfMaterialState = dart.constFn(core.Set$(material_state.MaterialState)))(),
    SetOfMaterialStateToColor: () => (T.SetOfMaterialStateToColor = dart.constFn(dart.fnType(ui.Color, [T.SetOfMaterialState()])))(),
    SetOfMaterialStateToColorN: () => (T.SetOfMaterialStateToColorN = dart.constFn(dart.fnType(T.ColorN(), [T.SetOfMaterialState()])))(),
    SetOfMaterialStateTodouble: () => (T.SetOfMaterialStateTodouble = dart.constFn(dart.fnType(core.double, [T.SetOfMaterialState()])))(),
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
        [_Location_name]: "ElevatedButton",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ElevatedButtonWithIcon",
        [_Location_column]: 11,
        [_Location_line]: 86,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
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
        [_Location_name]: "_ElevatedButtonWithIconChild",
        [_Location_column]: 17,
        [_Location_line]: 475,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ElevatedButtonWithIcon",
        [_Location_column]: 3,
        [_Location_line]: 458,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 16,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 12
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
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional_bottom]: 0,
        [EdgeInsetsDirectional_end]: 4,
        [EdgeInsetsDirectional_top]: 0,
        [EdgeInsetsDirectional_start]: 8
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ElevatedButtonWithIconChild",
        [_Location_column]: 9,
        [_Location_line]: 493,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 32,
        [_Location_line]: 504,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Flexible",
        [_Location_column]: 54,
        [_Location_line]: 504,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Row",
        [_Location_column]: 12,
        [_Location_line]: 502,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 40,
        [OffsetBase__dx]: 64
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: stadium_border.StadiumBorder.prototype,
        [OutlinedBorder_side]: C[5] || CT.C5
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    }
  }, false);
  var C = Array(24).fill(void 0);
  var I = [
    "package:flutter/src/material/elevated_button.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/elevated_button.dart"
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
  elevated_button.ElevatedButton = class ElevatedButton extends button_style_button.ButtonStyleButton {
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
      return new elevated_button.ElevatedButton.new({key: key, onPressed: onPressed, onLongPress: onLongPress, onHover: onHover, onFocusChange: onFocusChange, style: style, focusNode: focusNode, autofocus: autofocus, clipBehavior: clipBehavior, statesController: statesController, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static ['_#icon#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let onHover = opts && 'onHover' in opts ? opts.onHover : null;
      let onFocusChange = opts && 'onFocusChange' in opts ? opts.onFocusChange : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let label = opts && 'label' in opts ? opts.label : null;
      return new elevated_button._ElevatedButtonWithIcon.new({key: key, onPressed: onPressed, onLongPress: onLongPress, onHover: onHover, onFocusChange: onFocusChange, style: style, focusNode: focusNode, autofocus: autofocus, clipBehavior: clipBehavior, icon: icon, label: label, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    static styleFrom(opts) {
      let t0, t1, t0$, t0$0, t1$, t0$1;
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
      let onPrimary = opts && 'onPrimary' in opts ? opts.onPrimary : null;
      let onSurface = opts && 'onSurface' in opts ? opts.onSurface : null;
      let background = (t0 = backgroundColor, t0 == null ? primary : t0);
      let disabledBackground = (t0$ = disabledBackgroundColor, t0$ == null ? (t1 = onSurface, t1 == null ? null : t1.withOpacity(0.12)) : t0$);
      let backgroundColorProp = background == null && disabledBackground == null ? null : new elevated_button._ElevatedButtonDefaultColor.new(background, disabledBackground);
      let foreground = (t0$0 = foregroundColor, t0$0 == null ? onPrimary : t0$0);
      let disabledForeground = (t0$1 = disabledForegroundColor, t0$1 == null ? (t1$ = onSurface, t1$ == null ? null : t1$.withOpacity(0.38)) : t0$1);
      let foregroundColorProp = foreground == null && disabledForeground == null ? null : new elevated_button._ElevatedButtonDefaultColor.new(foreground, disabledForeground);
      let overlayColor = foreground == null ? null : new elevated_button._ElevatedButtonDefaultOverlay.new(foreground);
      let elevationValue = elevation == null ? null : new elevated_button._ElevatedButtonDefaultElevation.new(elevation);
      let mouseCursor = enabledMouseCursor == null && disabledMouseCursor == null ? null : new elevated_button._ElevatedButtonDefaultMouseCursor.new(enabledMouseCursor, disabledMouseCursor);
      return new button_style.ButtonStyle.new({textStyle: new (T.MaterialStatePropertyAllOfTextStyleN()).new(textStyle), backgroundColor: backgroundColorProp, foregroundColor: foregroundColorProp, overlayColor: overlayColor, shadowColor: button_style_button.ButtonStyleButton.allOrNull(ui.Color, shadowColor), surfaceTintColor: button_style_button.ButtonStyleButton.allOrNull(ui.Color, surfaceTintColor), elevation: elevationValue, padding: button_style_button.ButtonStyleButton.allOrNull(edge_insets.EdgeInsetsGeometry, padding), minimumSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, minimumSize), fixedSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, fixedSize), maximumSize: button_style_button.ButtonStyleButton.allOrNull(ui.Size, maximumSize), side: button_style_button.ButtonStyleButton.allOrNull(borders.BorderSide, side), shape: button_style_button.ButtonStyleButton.allOrNull(borders.OutlinedBorder, shape), mouseCursor: mouseCursor, visualDensity: visualDensity, tapTargetSize: tapTargetSize, animationDuration: animationDuration, enableFeedback: enableFeedback, alignment: alignment, splashFactory: splashFactory});
    }
    defaultStyleOf(context) {
      let theme = theme$.Theme.of(context);
      let colorScheme = theme.colorScheme;
      return theme$.Theme.of(context).useMaterial3 ? new elevated_button._ElevatedButtonDefaultsM3.new(context) : elevated_button.ElevatedButton.styleFrom({backgroundColor: colorScheme.primary, foregroundColor: colorScheme.onPrimary, disabledBackgroundColor: colorScheme.onSurface.withOpacity(0.12), disabledForegroundColor: colorScheme.onSurface.withOpacity(0.38), shadowColor: theme.shadowColor, elevation: 2.0, textStyle: theme.textTheme.button, padding: elevated_button._scaledPadding(context), minimumSize: C[3] || CT.C3, maximumSize: ui.Size.infinite, shape: C[4] || CT.C4, enabledMouseCursor: mouse_cursor.SystemMouseCursors.click, disabledMouseCursor: mouse_cursor.SystemMouseCursors.basic, visualDensity: theme.visualDensity, tapTargetSize: theme.materialTapTargetSize, animationDuration: constants.kThemeChangeDuration, enableFeedback: true, alignment: alignment.Alignment.center, splashFactory: ink_ripple.InkRipple.splashFactory});
    }
    themeStyleOf(context) {
      return elevated_button_theme.ElevatedButtonTheme.of(context).style;
    }
  };
  (elevated_button.ElevatedButton.new = function(opts) {
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
    elevated_button.ElevatedButton.__proto__.new.call(this, {key: key, onPressed: onPressed, onLongPress: onLongPress, onHover: onHover, onFocusChange: onFocusChange, style: style, focusNode: focusNode, autofocus: autofocus, clipBehavior: clipBehavior, statesController: statesController, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = elevated_button.ElevatedButton.prototype;
  dart.addTypeTests(elevated_button.ElevatedButton);
  dart.addTypeCaches(elevated_button.ElevatedButton);
  dart.setMethodSignature(elevated_button.ElevatedButton, () => ({
    __proto__: dart.getMethods(elevated_button.ElevatedButton.__proto__),
    defaultStyleOf: dart.fnType(button_style.ButtonStyle, [framework.BuildContext]),
    themeStyleOf: dart.fnType(dart.nullable(button_style.ButtonStyle), [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(elevated_button.ElevatedButton, () => ['icon', 'styleFrom']);
  dart.setLibraryUri(elevated_button.ElevatedButton, I[0]);
  dart.setStaticFieldSignature(elevated_button.ElevatedButton, () => ['_redirecting#']);
  const MaterialStateProperty_Diagnosticable$36 = class MaterialStateProperty_Diagnosticable extends material_state.MaterialStateProperty$(dart.nullable(ui.Color)) {};
  (MaterialStateProperty_Diagnosticable$36.new = function() {
  }).prototype = MaterialStateProperty_Diagnosticable$36.prototype;
  dart.applyMixin(MaterialStateProperty_Diagnosticable$36, diagnostics.Diagnosticable);
  elevated_button._ElevatedButtonDefaultColor = class _ElevatedButtonDefaultColor extends MaterialStateProperty_Diagnosticable$36 {
    static ['_#new#tearOff'](color, disabled) {
      return new elevated_button._ElevatedButtonDefaultColor.new(color, disabled);
    }
    resolve(states) {
      if (states.contains(material_state.MaterialState.disabled)) {
        return this.disabled;
      }
      return this.color;
    }
  };
  (elevated_button._ElevatedButtonDefaultColor.new = function(color, disabled) {
    this.color = color;
    this.disabled = disabled;
    ;
  }).prototype = elevated_button._ElevatedButtonDefaultColor.prototype;
  dart.addTypeTests(elevated_button._ElevatedButtonDefaultColor);
  dart.addTypeCaches(elevated_button._ElevatedButtonDefaultColor);
  dart.setMethodSignature(elevated_button._ElevatedButtonDefaultColor, () => ({
    __proto__: dart.getMethods(elevated_button._ElevatedButtonDefaultColor.__proto__),
    resolve: dart.fnType(dart.nullable(ui.Color), [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(elevated_button._ElevatedButtonDefaultColor, I[0]);
  dart.setFieldSignature(elevated_button._ElevatedButtonDefaultColor, () => ({
    __proto__: dart.getFields(elevated_button._ElevatedButtonDefaultColor.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    disabled: dart.finalFieldType(dart.nullable(ui.Color))
  }));
  const MaterialStateProperty_Diagnosticable$36$ = class MaterialStateProperty_Diagnosticable extends material_state.MaterialStateProperty$(dart.nullable(ui.Color)) {};
  (MaterialStateProperty_Diagnosticable$36$.new = function() {
  }).prototype = MaterialStateProperty_Diagnosticable$36$.prototype;
  dart.applyMixin(MaterialStateProperty_Diagnosticable$36$, diagnostics.Diagnosticable);
  elevated_button._ElevatedButtonDefaultOverlay = class _ElevatedButtonDefaultOverlay extends MaterialStateProperty_Diagnosticable$36$ {
    static ['_#new#tearOff'](overlay) {
      return new elevated_button._ElevatedButtonDefaultOverlay.new(overlay);
    }
    resolve(states) {
      if (states.contains(material_state.MaterialState.hovered)) {
        return this.overlay.withOpacity(0.08);
      }
      if (states.contains(material_state.MaterialState.focused) || states.contains(material_state.MaterialState.pressed)) {
        return this.overlay.withOpacity(0.24);
      }
      return null;
    }
  };
  (elevated_button._ElevatedButtonDefaultOverlay.new = function(overlay) {
    this.overlay = overlay;
    ;
  }).prototype = elevated_button._ElevatedButtonDefaultOverlay.prototype;
  dart.addTypeTests(elevated_button._ElevatedButtonDefaultOverlay);
  dart.addTypeCaches(elevated_button._ElevatedButtonDefaultOverlay);
  dart.setMethodSignature(elevated_button._ElevatedButtonDefaultOverlay, () => ({
    __proto__: dart.getMethods(elevated_button._ElevatedButtonDefaultOverlay.__proto__),
    resolve: dart.fnType(dart.nullable(ui.Color), [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(elevated_button._ElevatedButtonDefaultOverlay, I[0]);
  dart.setFieldSignature(elevated_button._ElevatedButtonDefaultOverlay, () => ({
    __proto__: dart.getFields(elevated_button._ElevatedButtonDefaultOverlay.__proto__),
    overlay: dart.finalFieldType(ui.Color)
  }));
  const MaterialStateProperty_Diagnosticable$36$0 = class MaterialStateProperty_Diagnosticable extends material_state.MaterialStateProperty$(core.double) {};
  (MaterialStateProperty_Diagnosticable$36$0.new = function() {
  }).prototype = MaterialStateProperty_Diagnosticable$36$0.prototype;
  dart.applyMixin(MaterialStateProperty_Diagnosticable$36$0, diagnostics.Diagnosticable);
  elevated_button._ElevatedButtonDefaultElevation = class _ElevatedButtonDefaultElevation extends MaterialStateProperty_Diagnosticable$36$0 {
    static ['_#new#tearOff'](elevation) {
      return new elevated_button._ElevatedButtonDefaultElevation.new(elevation);
    }
    resolve(states) {
      if (states.contains(material_state.MaterialState.disabled)) {
        return 0.0;
      }
      if (states.contains(material_state.MaterialState.hovered)) {
        return this.elevation + 2;
      }
      if (states.contains(material_state.MaterialState.focused)) {
        return this.elevation + 2;
      }
      if (states.contains(material_state.MaterialState.pressed)) {
        return this.elevation + 6;
      }
      return this.elevation;
    }
  };
  (elevated_button._ElevatedButtonDefaultElevation.new = function(elevation) {
    this.elevation = elevation;
    ;
  }).prototype = elevated_button._ElevatedButtonDefaultElevation.prototype;
  dart.addTypeTests(elevated_button._ElevatedButtonDefaultElevation);
  dart.addTypeCaches(elevated_button._ElevatedButtonDefaultElevation);
  dart.setMethodSignature(elevated_button._ElevatedButtonDefaultElevation, () => ({
    __proto__: dart.getMethods(elevated_button._ElevatedButtonDefaultElevation.__proto__),
    resolve: dart.fnType(core.double, [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(elevated_button._ElevatedButtonDefaultElevation, I[0]);
  dart.setFieldSignature(elevated_button._ElevatedButtonDefaultElevation, () => ({
    __proto__: dart.getFields(elevated_button._ElevatedButtonDefaultElevation.__proto__),
    elevation: dart.finalFieldType(core.double)
  }));
  const MaterialStateProperty_Diagnosticable$36$1 = class MaterialStateProperty_Diagnosticable extends material_state.MaterialStateProperty$(dart.nullable(mouse_cursor.MouseCursor)) {};
  (MaterialStateProperty_Diagnosticable$36$1.new = function() {
  }).prototype = MaterialStateProperty_Diagnosticable$36$1.prototype;
  dart.applyMixin(MaterialStateProperty_Diagnosticable$36$1, diagnostics.Diagnosticable);
  elevated_button._ElevatedButtonDefaultMouseCursor = class _ElevatedButtonDefaultMouseCursor extends MaterialStateProperty_Diagnosticable$36$1 {
    static ['_#new#tearOff'](enabledCursor, disabledCursor) {
      return new elevated_button._ElevatedButtonDefaultMouseCursor.new(enabledCursor, disabledCursor);
    }
    resolve(states) {
      if (states.contains(material_state.MaterialState.disabled)) {
        return this.disabledCursor;
      }
      return this.enabledCursor;
    }
  };
  (elevated_button._ElevatedButtonDefaultMouseCursor.new = function(enabledCursor, disabledCursor) {
    this.enabledCursor = enabledCursor;
    this.disabledCursor = disabledCursor;
    ;
  }).prototype = elevated_button._ElevatedButtonDefaultMouseCursor.prototype;
  dart.addTypeTests(elevated_button._ElevatedButtonDefaultMouseCursor);
  dart.addTypeCaches(elevated_button._ElevatedButtonDefaultMouseCursor);
  dart.setMethodSignature(elevated_button._ElevatedButtonDefaultMouseCursor, () => ({
    __proto__: dart.getMethods(elevated_button._ElevatedButtonDefaultMouseCursor.__proto__),
    resolve: dart.fnType(dart.nullable(mouse_cursor.MouseCursor), [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(elevated_button._ElevatedButtonDefaultMouseCursor, I[0]);
  dart.setFieldSignature(elevated_button._ElevatedButtonDefaultMouseCursor, () => ({
    __proto__: dart.getFields(elevated_button._ElevatedButtonDefaultMouseCursor.__proto__),
    enabledCursor: dart.finalFieldType(dart.nullable(mouse_cursor.MouseCursor)),
    disabledCursor: dart.finalFieldType(dart.nullable(mouse_cursor.MouseCursor))
  }));
  var EdgeInsetsDirectional_bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  var EdgeInsetsDirectional_end = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  var EdgeInsetsDirectional_top = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  var EdgeInsetsDirectional_start = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  elevated_button._ElevatedButtonWithIcon = class _ElevatedButtonWithIcon extends elevated_button.ElevatedButton {
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
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let label = opts && 'label' in opts ? opts.label : null;
      return new elevated_button._ElevatedButtonWithIcon.new({key: key, onPressed: onPressed, onLongPress: onLongPress, onHover: onHover, onFocusChange: onFocusChange, style: style, focusNode: focusNode, autofocus: autofocus, clipBehavior: clipBehavior, icon: icon, label: label, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    defaultStyleOf(context) {
      let t0, t0$;
      let scaledPadding = button_style_button.ButtonStyleButton.scaledPadding(C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15, (t0$ = (t0 = media_query.MediaQuery.maybeOf(context), t0 == null ? null : t0.textScaleFactor), t0$ == null ? 1.0 : t0$));
      return super.defaultStyleOf(context).copyWith({padding: new (T.MaterialStatePropertyAllOfEdgeInsetsGeometry()).new(scaledPadding)});
    }
  };
  (elevated_button._ElevatedButtonWithIcon.new = function(opts) {
    let t0, t0$;
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onHover = opts && 'onHover' in opts ? opts.onHover : null;
    let onFocusChange = opts && 'onFocusChange' in opts ? opts.onFocusChange : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(icon !== null)) dart.assertFailed(null, I[1], 470, 15, "icon != null");
    if (!(label !== null)) dart.assertFailed(null, I[1], 471, 15, "label != null");
    elevated_button._ElevatedButtonWithIcon.__proto__.new.call(this, {autofocus: (t0 = autofocus, t0 == null ? false : t0), clipBehavior: (t0$ = clipBehavior, t0$ == null ? ui.Clip.none : t0$), child: new elevated_button._ElevatedButtonWithIconChild.new({icon: icon, label: label, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11}), key: key, onPressed: onPressed, onLongPress: onLongPress, onHover: onHover, onFocusChange: onFocusChange, style: style, focusNode: focusNode, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = elevated_button._ElevatedButtonWithIcon.prototype;
  dart.addTypeTests(elevated_button._ElevatedButtonWithIcon);
  dart.addTypeCaches(elevated_button._ElevatedButtonWithIcon);
  dart.setLibraryUri(elevated_button._ElevatedButtonWithIcon, I[0]);
  var label$ = dart.privateName(elevated_button, "_ElevatedButtonWithIconChild.label");
  var icon$ = dart.privateName(elevated_button, "_ElevatedButtonWithIconChild.icon");
  elevated_button._ElevatedButtonWithIconChild = class _ElevatedButtonWithIconChild extends framework.StatelessWidget {
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
      return new elevated_button._ElevatedButtonWithIconChild.new({label: label, icon: icon, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
    build(context) {
      let t0, t0$;
      let scale = (t0$ = (t0 = media_query.MediaQuery.maybeOf(context), t0 == null ? null : t0.textScaleFactor), t0$ == null ? 1.0 : t0$);
      let gap = scale <= 1 ? 8.0 : dart.nullCheck(ui.lerpDouble(8, 4, math.min(core.double, scale - 1, 1.0)));
      return new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidget().of([this.icon, new basic.SizedBox.new({width: gap, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), new basic.Flexible.new({child: this.label, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18})]), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
  };
  (elevated_button._ElevatedButtonWithIconChild.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[label$] = label;
    this[icon$] = icon;
    elevated_button._ElevatedButtonWithIconChild.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = elevated_button._ElevatedButtonWithIconChild.prototype;
  dart.addTypeTests(elevated_button._ElevatedButtonWithIconChild);
  dart.addTypeCaches(elevated_button._ElevatedButtonWithIconChild);
  dart.setMethodSignature(elevated_button._ElevatedButtonWithIconChild, () => ({
    __proto__: dart.getMethods(elevated_button._ElevatedButtonWithIconChild.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(elevated_button._ElevatedButtonWithIconChild, I[0]);
  dart.setFieldSignature(elevated_button._ElevatedButtonWithIconChild, () => ({
    __proto__: dart.getFields(elevated_button._ElevatedButtonWithIconChild.__proto__),
    label: dart.finalFieldType(framework.Widget),
    icon: dart.finalFieldType(framework.Widget)
  }));
  var ___ElevatedButtonDefaultsM3__colors = dart.privateName(elevated_button, "_#_ElevatedButtonDefaultsM3#_colors");
  var _colors = dart.privateName(elevated_button, "_colors");
  elevated_button._ElevatedButtonDefaultsM3 = class _ElevatedButtonDefaultsM3 extends button_style.ButtonStyle {
    static ['_#new#tearOff'](context) {
      return new elevated_button._ElevatedButtonDefaultsM3.new(context);
    }
    get [_colors]() {
      let t1, t0;
      t0 = this[___ElevatedButtonDefaultsM3__colors];
      return t0 == null ? (t1 = theme$.Theme.of(this.context).colorScheme, this[___ElevatedButtonDefaultsM3__colors] == null ? this[___ElevatedButtonDefaultsM3__colors] = t1 : dart.throw(new _internal.LateError.fieldADI("_colors"))) : t0;
    }
    get textStyle() {
      return new (T.MaterialStatePropertyAllOfTextStyleN()).new(theme$.Theme.of(this.context).textTheme.labelLarge);
    }
    get backgroundColor() {
      return material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
        if (states.contains(material_state.MaterialState.disabled)) {
          return this[_colors].onSurface.withOpacity(0.12);
        }
        return this[_colors].surface;
      }, T.SetOfMaterialStateToColor()));
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
    get shadowColor() {
      return button_style_button.ButtonStyleButton.allOrNull(ui.Color, this[_colors].shadow);
    }
    get surfaceTintColor() {
      return button_style_button.ButtonStyleButton.allOrNull(ui.Color, this[_colors].surfaceTint);
    }
    get elevation() {
      return material_state.MaterialStateProperty.resolveWith(core.double, dart.fn(states => {
        if (states.contains(material_state.MaterialState.disabled)) {
          return 0.0;
        }
        if (states.contains(material_state.MaterialState.hovered)) {
          return 3.0;
        }
        if (states.contains(material_state.MaterialState.focused)) {
          return 1.0;
        }
        if (states.contains(material_state.MaterialState.pressed)) {
          return 1.0;
        }
        return 1.0;
      }, T.SetOfMaterialStateTodouble()));
    }
    get padding() {
      return button_style_button.ButtonStyleButton.allOrNull(edge_insets.EdgeInsetsGeometry, elevated_button._scaledPadding(this.context));
    }
    get minimumSize() {
      return button_style_button.ButtonStyleButton.allOrNull(ui.Size, C[20] || CT.C20);
    }
    get maximumSize() {
      return button_style_button.ButtonStyleButton.allOrNull(ui.Size, ui.Size.infinite);
    }
    get shape() {
      return button_style_button.ButtonStyleButton.allOrNull(borders.OutlinedBorder, C[21] || CT.C21);
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
  (elevated_button._ElevatedButtonDefaultsM3.new = function(context) {
    this[___ElevatedButtonDefaultsM3__colors] = null;
    this.context = context;
    elevated_button._ElevatedButtonDefaultsM3.__proto__.new.call(this, {animationDuration: constants.kThemeChangeDuration, enableFeedback: true, alignment: alignment.Alignment.center});
    ;
  }).prototype = elevated_button._ElevatedButtonDefaultsM3.prototype;
  dart.addTypeTests(elevated_button._ElevatedButtonDefaultsM3);
  dart.addTypeCaches(elevated_button._ElevatedButtonDefaultsM3);
  dart.setGetterSignature(elevated_button._ElevatedButtonDefaultsM3, () => ({
    __proto__: dart.getGetters(elevated_button._ElevatedButtonDefaultsM3.__proto__),
    [_colors]: color_scheme.ColorScheme,
    textStyle: material_state.MaterialStateProperty$(dart.nullable(text_style.TextStyle)),
    backgroundColor: dart.nullable(material_state.MaterialStateProperty$(dart.nullable(ui.Color))),
    foregroundColor: dart.nullable(material_state.MaterialStateProperty$(dart.nullable(ui.Color))),
    overlayColor: dart.nullable(material_state.MaterialStateProperty$(dart.nullable(ui.Color))),
    shadowColor: dart.nullable(material_state.MaterialStateProperty$(ui.Color)),
    surfaceTintColor: dart.nullable(material_state.MaterialStateProperty$(ui.Color)),
    elevation: dart.nullable(material_state.MaterialStateProperty$(core.double)),
    padding: dart.nullable(material_state.MaterialStateProperty$(edge_insets.EdgeInsetsGeometry)),
    minimumSize: dart.nullable(material_state.MaterialStateProperty$(ui.Size)),
    maximumSize: dart.nullable(material_state.MaterialStateProperty$(ui.Size)),
    shape: dart.nullable(material_state.MaterialStateProperty$(borders.OutlinedBorder)),
    mouseCursor: dart.nullable(material_state.MaterialStateProperty$(dart.nullable(mouse_cursor.MouseCursor))),
    visualDensity: dart.nullable(theme_data.VisualDensity),
    tapTargetSize: dart.nullable(theme_data.MaterialTapTargetSize),
    splashFactory: dart.nullable(ink_well.InteractiveInkFeatureFactory)
  }));
  dart.setLibraryUri(elevated_button._ElevatedButtonDefaultsM3, I[0]);
  dart.setFieldSignature(elevated_button._ElevatedButtonDefaultsM3, () => ({
    __proto__: dart.getFields(elevated_button._ElevatedButtonDefaultsM3.__proto__),
    context: dart.finalFieldType(framework.BuildContext),
    [___ElevatedButtonDefaultsM3__colors]: dart.fieldType(dart.nullable(color_scheme.ColorScheme))
  }));
  elevated_button._scaledPadding = function _scaledPadding(context) {
    let t0, t0$;
    return button_style_button.ButtonStyleButton.scaledPadding(C[22] || CT.C22, C[14] || CT.C14, C[23] || CT.C23, (t0$ = (t0 = media_query.MediaQuery.maybeOf(context), t0 == null ? null : t0.textScaleFactor), t0$ == null ? 1.0 : t0$));
  };
  dart.trackLibraries("packages/flutter/src/material/elevated_button.dart", {
    "package:flutter/src/material/elevated_button.dart": elevated_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["elevated_button.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/elevated_button.dart.lib.js"}');
  // Exports:
  return {
    src__material__elevated_button: elevated_button
  };
}));

//# sourceMappingURL=elevated_button.dart.lib.js.map
