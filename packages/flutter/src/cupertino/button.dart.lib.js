define(['dart_sdk', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/gestures/tap.dart'], (function load__packages__flutter__src__cupertino__button_dart(dart_sdk, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__gestures__tap$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const theme = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__theme;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const text = packages__flutter__src__widgets__title$46dart.src__widgets__text;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  var button = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    TweenOfdouble: () => (T.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))(),
    voidToNull: () => (T.voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1115059840
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 678720640
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 762738304
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 343176320
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[1] || CT.C1,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[2] || CT.C2,
        [CupertinoDynamicColor_darkElevatedColor]: C[3] || CT.C3,
        [CupertinoDynamicColor_elevatedColor]: C[4] || CT.C4,
        [CupertinoDynamicColor_darkHighContrastColor]: C[1] || CT.C1,
        [CupertinoDynamicColor_highContrastColor]: C[2] || CT.C2,
        [CupertinoDynamicColor_darkColor]: C[3] || CT.C3,
        [CupertinoDynamicColor_color]: C[4] || CT.C4,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "quaternarySystemFill",
        [CupertinoDynamicColor__effectiveColor]: C[4] || CT.C4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[6] || CT.C6,
        [BorderRadius_bottomLeft]: C[6] || CT.C6,
        [BorderRadius_topRight]: C[6] || CT.C6,
        [BorderRadius_topLeft]: C[6] || CT.C6
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoButton",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoButton",
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 30,
        [_Location_line]: 284,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTextStyle",
        [_Location_column]: 28,
        [_Location_line]: 282,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 26,
        [_Location_line]: 278,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 24,
        [_Location_line]: 274,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DecoratedBox",
        [_Location_column]: 22,
        [_Location_line]: 267,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeTransition",
        [_Location_column]: 20,
        [_Location_line]: 265,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ConstrainedBox",
        [_Location_column]: 18,
        [_Location_line]: 258,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 16,
        [_Location_line]: 256,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 14,
        [_Location_line]: 250,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MouseRegion",
        [_Location_column]: 12,
        [_Location_line]: 248,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 120000
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 180000
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 14,
        [EdgeInsets_right]: 64,
        [EdgeInsets_top]: 14,
        [EdgeInsets_left]: 64
      });
    }
  }, false);
  var C = Array(26).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/button.dart",
    "package:flutter/src/cupertino/button.dart"
  ];
  var child$ = dart.privateName(button, "CupertinoButton.child");
  var padding$ = dart.privateName(button, "CupertinoButton.padding");
  var color$ = dart.privateName(button, "CupertinoButton.color");
  var disabledColor$ = dart.privateName(button, "CupertinoButton.disabledColor");
  var onPressed$ = dart.privateName(button, "CupertinoButton.onPressed");
  var minSize$ = dart.privateName(button, "CupertinoButton.minSize");
  var pressedOpacity$ = dart.privateName(button, "CupertinoButton.pressedOpacity");
  var borderRadius$ = dart.privateName(button, "CupertinoButton.borderRadius");
  var alignment$ = dart.privateName(button, "CupertinoButton.alignment");
  var _filled = dart.privateName(button, "CupertinoButton._filled");
  var Color_value = dart.privateName(ui, "Color.value");
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastElevatedColor");
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkElevatedColor");
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors, "CupertinoDynamicColor._effectiveColor");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var _filled$ = dart.privateName(button, "_filled");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  button.CupertinoButton = class CupertinoButton extends framework.StatefulWidget {
    get child() {
      return this[child$];
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
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get disabledColor() {
      return this[disabledColor$];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get minSize() {
      return this[minSize$];
    }
    set minSize(value) {
      super.minSize = value;
    }
    get pressedOpacity() {
      return this[pressedOpacity$];
    }
    set pressedOpacity(value) {
      super.pressedOpacity = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get [_filled$]() {
      return this[_filled];
    }
    set [_filled$](value) {
      super[_filled$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : C[0] || CT.C0;
      let minSize = opts && 'minSize' in opts ? opts.minSize : 44;
      let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.4;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[5] || CT.C5;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[7] || CT.C7;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      return new button.CupertinoButton.new({key: key, child: child, padding: padding, color: color, disabledColor: disabledColor, minSize: minSize, pressedOpacity: pressedOpacity, borderRadius: borderRadius, alignment: alignment, onPressed: onPressed, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    static ['_#filled#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : C[0] || CT.C0;
      let minSize = opts && 'minSize' in opts ? opts.minSize : 44;
      let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.4;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[5] || CT.C5;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[7] || CT.C7;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      return new button.CupertinoButton.filled({key: key, child: child, padding: padding, disabledColor: disabledColor, minSize: minSize, pressedOpacity: pressedOpacity, borderRadius: borderRadius, alignment: alignment, onPressed: onPressed, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    get enabled() {
      return this.onPressed != null;
    }
    createState() {
      return new button._CupertinoButtonState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("enabled", {value: this.enabled, ifFalse: "disabled"}));
    }
  };
  (button.CupertinoButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : C[0] || CT.C0;
    let minSize = opts && 'minSize' in opts ? opts.minSize : 44;
    let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.4;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[5] || CT.C5;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[7] || CT.C7;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[padding$] = padding;
    this[color$] = color;
    this[disabledColor$] = disabledColor;
    this[minSize$] = minSize;
    this[pressedOpacity$] = pressedOpacity;
    this[borderRadius$] = borderRadius;
    this[alignment$] = alignment;
    this[onPressed$] = onPressed;
    if (!(pressedOpacity == null || dart.notNull(pressedOpacity) >= 0.0 && dart.notNull(pressedOpacity) <= 1.0)) dart.assertFailed(null, I[0], 52, 15, "pressedOpacity == null || (pressedOpacity >= 0.0 && pressedOpacity <= 1.0)");
    if (!(disabledColor !== null)) dart.assertFailed(null, I[0], 53, 15, "disabledColor != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 54, 15, "alignment != null");
    this[_filled] = false;
    button.CupertinoButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = button.CupertinoButton.prototype;
  (button.CupertinoButton.filled = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : C[0] || CT.C0;
    let minSize = opts && 'minSize' in opts ? opts.minSize : 44;
    let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.4;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[5] || CT.C5;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[7] || CT.C7;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[padding$] = padding;
    this[disabledColor$] = disabledColor;
    this[minSize$] = minSize;
    this[pressedOpacity$] = pressedOpacity;
    this[borderRadius$] = borderRadius;
    this[alignment$] = alignment;
    this[onPressed$] = onPressed;
    if (!(pressedOpacity == null || dart.notNull(pressedOpacity) >= 0.0 && dart.notNull(pressedOpacity) <= 1.0)) dart.assertFailed(null, I[0], 73, 15, "pressedOpacity == null || (pressedOpacity >= 0.0 && pressedOpacity <= 1.0)");
    if (!(disabledColor !== null)) dart.assertFailed(null, I[0], 74, 15, "disabledColor != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 75, 15, "alignment != null");
    this[color$] = null;
    this[_filled] = true;
    button.CupertinoButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = button.CupertinoButton.prototype;
  dart.addTypeTests(button.CupertinoButton);
  dart.addTypeCaches(button.CupertinoButton);
  dart.setMethodSignature(button.CupertinoButton, () => ({
    __proto__: dart.getMethods(button.CupertinoButton.__proto__),
    createState: dart.fnType(framework.State$(button.CupertinoButton), [])
  }));
  dart.setGetterSignature(button.CupertinoButton, () => ({
    __proto__: dart.getGetters(button.CupertinoButton.__proto__),
    enabled: core.bool
  }));
  dart.setLibraryUri(button.CupertinoButton, I[1]);
  dart.setFieldSignature(button.CupertinoButton, () => ({
    __proto__: dart.getFields(button.CupertinoButton.__proto__),
    child: dart.finalFieldType(framework.Widget),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    disabledColor: dart.finalFieldType(ui.Color),
    onPressed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    minSize: dart.finalFieldType(dart.nullable(core.double)),
    pressedOpacity: dart.finalFieldType(dart.nullable(core.double)),
    borderRadius: dart.finalFieldType(dart.nullable(border_radius.BorderRadius)),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    [_filled$]: dart.finalFieldType(core.bool)
  }));
  var _opacityTween = dart.privateName(button, "_opacityTween");
  var ___CupertinoButtonState__animationController = dart.privateName(button, "_#_CupertinoButtonState#_animationController");
  var ___CupertinoButtonState__opacityAnimation = dart.privateName(button, "_#_CupertinoButtonState#_opacityAnimation");
  var _buttonHeldDown = dart.privateName(button, "_buttonHeldDown");
  var _animationController = dart.privateName(button, "_animationController");
  var _opacityAnimation = dart.privateName(button, "_opacityAnimation");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _setTween = dart.privateName(button, "_setTween");
  var _animate = dart.privateName(button, "_animate");
  var _handleTapDown = dart.privateName(button, "_handleTapDown");
  var _handleTapUp = dart.privateName(button, "_handleTapUp");
  var _handleTapCancel = dart.privateName(button, "_handleTapCancel");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(button.CupertinoButton) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(button.CupertinoButton)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(button.CupertinoButton));
  button._CupertinoButtonState = class _CupertinoButtonState extends State_SingleTickerProviderStateMixin$36 {
    get [_animationController]() {
      let t0;
      t0 = this[___CupertinoButtonState__animationController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_animationController")) : t0;
    }
    set [_animationController](library$32package$58flutter$47src$47cupertino$47button$46dart$58$58_animationController$35param) {
      this[___CupertinoButtonState__animationController] = library$32package$58flutter$47src$47cupertino$47button$46dart$58$58_animationController$35param;
    }
    get [_opacityAnimation]() {
      let t0;
      t0 = this[___CupertinoButtonState__opacityAnimation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_opacityAnimation")) : t0;
    }
    set [_opacityAnimation](library$32package$58flutter$47src$47cupertino$47button$46dart$58$58_opacityAnimation$35param) {
      this[___CupertinoButtonState__opacityAnimation] = library$32package$58flutter$47src$47cupertino$47button$46dart$58$58_opacityAnimation$35param;
    }
    initState() {
      super.initState();
      this[_animationController] = new animation_controller.AnimationController.new({duration: C[10] || CT.C10, value: 0.0, vsync: this});
      this[_opacityAnimation] = this[_animationController].drive(core.double, new tween.CurveTween.new({curve: curves.Curves.decelerate})).drive(core.double, this[_opacityTween]);
      this[_setTween]();
    }
    didUpdateWidget(old) {
      button.CupertinoButton.as(old);
      super.didUpdateWidget(old);
      this[_setTween]();
    }
    [_setTween]() {
      let t0;
      this[_opacityTween].end = (t0 = this.widget.pressedOpacity, t0 == null ? 1.0 : t0);
    }
    dispose() {
      this[_animationController].dispose();
      super.dispose();
    }
    [_handleTapDown](event) {
      if (!this[_buttonHeldDown]) {
        this[_buttonHeldDown] = true;
        this[_animate]();
      }
    }
    [_handleTapUp](event) {
      if (this[_buttonHeldDown]) {
        this[_buttonHeldDown] = false;
        this[_animate]();
      }
    }
    [_handleTapCancel]() {
      if (this[_buttonHeldDown]) {
        this[_buttonHeldDown] = false;
        this[_animate]();
      }
    }
    [_animate]() {
      if (this[_animationController].isAnimating) {
        return;
      }
      let wasHeldDown = this[_buttonHeldDown];
      let ticker = this[_buttonHeldDown] ? this[_animationController].animateTo(1.0, {duration: button._CupertinoButtonState.kFadeOutDuration, curve: curves.Curves.easeInOutCubicEmphasized}) : this[_animationController].animateTo(0.0, {duration: button._CupertinoButtonState.kFadeInDuration, curve: curves.Curves.easeOutCubic});
      ticker.then(dart.void, dart.fn(value => {
        if (this.mounted && wasHeldDown !== this[_buttonHeldDown]) {
          this[_animate]();
        }
      }, T.voidToNull()));
    }
    build(context) {
      let t0;
      let enabled = this.widget.enabled;
      let themeData = theme.CupertinoTheme.of(context);
      let primaryColor = themeData.primaryColor;
      let backgroundColor = this.widget.color == null ? this.widget[_filled$] ? primaryColor : null : colors.CupertinoDynamicColor.maybeResolve(this.widget.color, context);
      let foregroundColor = backgroundColor != null ? themeData.primaryContrastingColor : enabled ? primaryColor : colors.CupertinoDynamicColor.resolve(colors.CupertinoColors.placeholderText, context);
      let textStyle = themeData.textTheme.textStyle.copyWith({color: foregroundColor});
      return new basic.MouseRegion.new({cursor: enabled && true ? mouse_cursor.SystemMouseCursors.click : mouse_cursor.MouseCursor.defer, child: new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTapDown: enabled ? dart.bind(this, _handleTapDown) : null, onTapUp: enabled ? dart.bind(this, _handleTapUp) : null, onTapCancel: enabled ? dart.bind(this, _handleTapCancel) : null, onTap: this.widget.onPressed, child: new basic.Semantics.new({button: true, child: new basic.ConstrainedBox.new({constraints: this.widget.minSize == null ? C[11] || CT.C11 : new box.BoxConstraints.new({minWidth: dart.nullCheck(this.widget.minSize), minHeight: dart.nullCheck(this.widget.minSize)}), child: new transitions.FadeTransition.new({opacity: this[_opacityAnimation], child: new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: this.widget.borderRadius, color: backgroundColor != null && !enabled ? colors.CupertinoDynamicColor.resolve(this.widget.disabledColor, context) : backgroundColor}), child: new basic.Padding.new({padding: (t0 = this.widget.padding, t0 == null ? backgroundColor != null ? button._kBackgroundButtonPadding : button._kButtonPadding : t0), child: new basic.Align.new({alignment: this.widget.alignment, widthFactor: 1.0, heightFactor: 1.0, child: new text.DefaultTextStyle.new({style: textStyle, child: new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({color: foregroundColor}), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13}), $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18}), $creationLocationd_0dea112b090073317d4: C[19] || CT.C19}), $creationLocationd_0dea112b090073317d4: C[20] || CT.C20}), $creationLocationd_0dea112b090073317d4: C[21] || CT.C21});
    }
    static ['_#new#tearOff']() {
      return new button._CupertinoButtonState.new();
    }
  };
  (button._CupertinoButtonState.new = function() {
    this[_opacityTween] = new (T.TweenOfdouble()).new({begin: 1.0});
    this[___CupertinoButtonState__animationController] = null;
    this[___CupertinoButtonState__opacityAnimation] = null;
    this[_buttonHeldDown] = false;
    button._CupertinoButtonState.__proto__.new.call(this);
    ;
  }).prototype = button._CupertinoButtonState.prototype;
  dart.addTypeTests(button._CupertinoButtonState);
  dart.addTypeCaches(button._CupertinoButtonState);
  dart.setMethodSignature(button._CupertinoButtonState, () => ({
    __proto__: dart.getMethods(button._CupertinoButtonState.__proto__),
    [_setTween]: dart.fnType(dart.void, []),
    [_handleTapDown]: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleTapUp]: dart.fnType(dart.void, [tap.TapUpDetails]),
    [_handleTapCancel]: dart.fnType(dart.void, []),
    [_animate]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(button._CupertinoButtonState, () => ({
    __proto__: dart.getGetters(button._CupertinoButtonState.__proto__),
    [_animationController]: animation_controller.AnimationController,
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(button._CupertinoButtonState, () => ({
    __proto__: dart.getSetters(button._CupertinoButtonState.__proto__),
    [_animationController]: animation_controller.AnimationController,
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(button._CupertinoButtonState, I[1]);
  dart.setFieldSignature(button._CupertinoButtonState, () => ({
    __proto__: dart.getFields(button._CupertinoButtonState.__proto__),
    [_opacityTween]: dart.finalFieldType(tween.Tween$(core.double)),
    [___CupertinoButtonState__animationController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___CupertinoButtonState__opacityAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_buttonHeldDown]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(button._CupertinoButtonState, () => ['kFadeOutDuration', 'kFadeInDuration']);
  dart.defineLazy(button._CupertinoButtonState, {
    /*button._CupertinoButtonState.kFadeOutDuration*/get kFadeOutDuration() {
      return C[22] || CT.C22;
    },
    /*button._CupertinoButtonState.kFadeInDuration*/get kFadeInDuration() {
      return C[23] || CT.C23;
    }
  }, false);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  dart.defineLazy(button, {
    /*button._kButtonPadding*/get _kButtonPadding() {
      return C[24] || CT.C24;
    },
    /*button._kBackgroundButtonPadding*/get _kBackgroundButtonPadding() {
      return C[25] || CT.C25;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/button.dart", {
    "package:flutter/src/cupertino/button.dart": button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/cupertino/button.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__button: button
  };
}));

//# sourceMappingURL=button.dart.lib.js.map
