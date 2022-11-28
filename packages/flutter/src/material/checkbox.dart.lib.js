define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/material/toggleable.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/rendering/custom_paint.dart'], (function load__packages__flutter__src__material__checkbox_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__material__toggleable$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__rendering__custom_paint$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const theme = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const debug = packages__flutter__src__material__icon_button$46dart.src__material__debug;
  const checkbox_theme = packages__flutter__src__material__icon_button$46dart.src__material__checkbox_theme;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const toggleable = packages__flutter__src__material__toggleable$46dart.src__material__toggleable;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  var checkbox = Object.create(dart.library);
  var $abs = dartx.abs;
  var $noSuchMethod = dartx.noSuchMethod;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(ui.Color)))(),
    SetOfMaterialState: () => (T.SetOfMaterialState = dart.constFn(core.Set$(material_state.MaterialState)))(),
    SetOfMaterialStateToColorN: () => (T.SetOfMaterialStateToColorN = dart.constFn(dart.fnType(T.ColorN(), [T.SetOfMaterialState()])))(),
    SetOfMaterialStateToColor: () => (T.SetOfMaterialStateToColor = dart.constFn(dart.fnType(ui.Color, [T.SetOfMaterialState()])))(),
    BorderSideN: () => (T.BorderSideN = dart.constFn(dart.nullable(borders.BorderSide)))(),
    MouseCursorN: () => (T.MouseCursorN = dart.constFn(dart.nullable(mouse_cursor.MouseCursor)))(),
    SetOfMaterialStateToMouseCursor: () => (T.SetOfMaterialStateToMouseCursor = dart.constFn(dart.fnType(mouse_cursor.MouseCursor, [T.SetOfMaterialState()])))(),
    ListenableN: () => (T.ListenableN = dart.constFn(dart.nullable(change_notifier.Listenable)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Checkbox",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/checkbox.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 48,
        [OffsetBase__dx]: 48
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: theme_data.MaterialTapTargetSize.prototype,
        [_Enum__name]: "padded",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 40,
        [OffsetBase__dx]: 40
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: theme_data.MaterialTapTargetSize.prototype,
        [_Enum__name]: "shrinkWrap",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[8] || CT.C8,
        [BorderSide_style]: C[9] || CT.C9,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[10] || CT.C10
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 1,
        [Radius_x]: 1
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[12] || CT.C12,
        [BorderRadius_bottomLeft]: C[12] || CT.C12,
        [BorderRadius_topRight]: C[12] || CT.C12,
        [BorderRadius_topLeft]: C[12] || CT.C12
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C[7] || CT.C7,
        [RoundedRectangleBorder_borderRadius]: C[11] || CT.C11
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 471,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/checkbox.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 8.1,
        [OffsetBase__dx]: 2.6999999999999997
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 12.6,
        [OffsetBase__dx]: 7.2
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 4.5,
        [OffsetBase__dx]: 15.299999999999999
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 9,
        [OffsetBase__dx]: 3.6
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 9,
        [OffsetBase__dx]: 9
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 9,
        [OffsetBase__dx]: 14.4
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 18,
        [OffsetBase__dx]: 18
      });
    },
    get C21() {
      return C[21] = dart.const(new _js_helper.PrivateSymbol.new('_repaint', _repaint));
    }
  }, false);
  var C = Array(22).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/checkbox.dart",
    "package:flutter/src/material/checkbox.dart"
  ];
  var value$ = dart.privateName(checkbox, "Checkbox.value");
  var onChanged$ = dart.privateName(checkbox, "Checkbox.onChanged");
  var mouseCursor$ = dart.privateName(checkbox, "Checkbox.mouseCursor");
  var activeColor$ = dart.privateName(checkbox, "Checkbox.activeColor");
  var fillColor$ = dart.privateName(checkbox, "Checkbox.fillColor");
  var checkColor$ = dart.privateName(checkbox, "Checkbox.checkColor");
  var tristate$ = dart.privateName(checkbox, "Checkbox.tristate");
  var materialTapTargetSize$ = dart.privateName(checkbox, "Checkbox.materialTapTargetSize");
  var visualDensity$ = dart.privateName(checkbox, "Checkbox.visualDensity");
  var focusColor$ = dart.privateName(checkbox, "Checkbox.focusColor");
  var hoverColor$ = dart.privateName(checkbox, "Checkbox.hoverColor");
  var overlayColor$ = dart.privateName(checkbox, "Checkbox.overlayColor");
  var splashRadius$ = dart.privateName(checkbox, "Checkbox.splashRadius");
  var focusNode$ = dart.privateName(checkbox, "Checkbox.focusNode");
  var autofocus$ = dart.privateName(checkbox, "Checkbox.autofocus");
  var shape$ = dart.privateName(checkbox, "Checkbox.shape");
  var side$ = dart.privateName(checkbox, "Checkbox.side");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  checkbox.Checkbox = class Checkbox extends framework.StatefulWidget {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get mouseCursor() {
      return this[mouseCursor$];
    }
    set mouseCursor(value) {
      super.mouseCursor = value;
    }
    get activeColor() {
      return this[activeColor$];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get fillColor() {
      return this[fillColor$];
    }
    set fillColor(value) {
      super.fillColor = value;
    }
    get checkColor() {
      return this[checkColor$];
    }
    set checkColor(value) {
      super.checkColor = value;
    }
    get tristate() {
      return this[tristate$];
    }
    set tristate(value) {
      super.tristate = value;
    }
    get materialTapTargetSize() {
      return this[materialTapTargetSize$];
    }
    set materialTapTargetSize(value) {
      super.materialTapTargetSize = value;
    }
    get visualDensity() {
      return this[visualDensity$];
    }
    set visualDensity(value) {
      super.visualDensity = value;
    }
    get focusColor() {
      return this[focusColor$];
    }
    set focusColor(value) {
      super.focusColor = value;
    }
    get hoverColor() {
      return this[hoverColor$];
    }
    set hoverColor(value) {
      super.hoverColor = value;
    }
    get overlayColor() {
      return this[overlayColor$];
    }
    set overlayColor(value) {
      super.overlayColor = value;
    }
    get splashRadius() {
      return this[splashRadius$];
    }
    set splashRadius(value) {
      super.splashRadius = value;
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
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let tristate = opts && 'tristate' in opts ? opts.tristate : false;
      let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
      let mouseCursor = opts && 'mouseCursor' in opts ? opts.mouseCursor : null;
      let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
      let fillColor = opts && 'fillColor' in opts ? opts.fillColor : null;
      let checkColor = opts && 'checkColor' in opts ? opts.checkColor : null;
      let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
      let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
      let overlayColor = opts && 'overlayColor' in opts ? opts.overlayColor : null;
      let splashRadius = opts && 'splashRadius' in opts ? opts.splashRadius : null;
      let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
      let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
      let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
      let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let side = opts && 'side' in opts ? opts.side : null;
      return new checkbox.Checkbox.new({key: key, value: value, tristate: tristate, onChanged: onChanged, mouseCursor: mouseCursor, activeColor: activeColor, fillColor: fillColor, checkColor: checkColor, focusColor: focusColor, hoverColor: hoverColor, overlayColor: overlayColor, splashRadius: splashRadius, materialTapTargetSize: materialTapTargetSize, visualDensity: visualDensity, focusNode: focusNode, autofocus: autofocus, shape: shape, side: side, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new checkbox._CheckboxState.new();
    }
  };
  (checkbox.Checkbox.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let tristate = opts && 'tristate' in opts ? opts.tristate : false;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let mouseCursor = opts && 'mouseCursor' in opts ? opts.mouseCursor : null;
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    let fillColor = opts && 'fillColor' in opts ? opts.fillColor : null;
    let checkColor = opts && 'checkColor' in opts ? opts.checkColor : null;
    let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    let overlayColor = opts && 'overlayColor' in opts ? opts.overlayColor : null;
    let splashRadius = opts && 'splashRadius' in opts ? opts.splashRadius : null;
    let materialTapTargetSize = opts && 'materialTapTargetSize' in opts ? opts.materialTapTargetSize : null;
    let visualDensity = opts && 'visualDensity' in opts ? opts.visualDensity : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let side = opts && 'side' in opts ? opts.side : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[value$] = value;
    this[tristate$] = tristate;
    this[onChanged$] = onChanged;
    this[mouseCursor$] = mouseCursor;
    this[activeColor$] = activeColor;
    this[fillColor$] = fillColor;
    this[checkColor$] = checkColor;
    this[focusColor$] = focusColor;
    this[hoverColor$] = hoverColor;
    this[overlayColor$] = overlayColor;
    this[splashRadius$] = splashRadius;
    this[materialTapTargetSize$] = materialTapTargetSize;
    this[visualDensity$] = visualDensity;
    this[focusNode$] = focusNode;
    this[autofocus$] = autofocus;
    this[shape$] = shape;
    this[side$] = side;
    if (!(tristate !== null)) dart.assertFailed(null, I[0], 84, 15, "tristate != null");
    if (!(tristate || value != null)) dart.assertFailed(null, I[0], 85, 15, "tristate || value != null");
    if (!(autofocus !== null)) dart.assertFailed(null, I[0], 86, 15, "autofocus != null");
    checkbox.Checkbox.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = checkbox.Checkbox.prototype;
  dart.addTypeTests(checkbox.Checkbox);
  dart.addTypeCaches(checkbox.Checkbox);
  dart.setMethodSignature(checkbox.Checkbox, () => ({
    __proto__: dart.getMethods(checkbox.Checkbox.__proto__),
    createState: dart.fnType(framework.State$(checkbox.Checkbox), [])
  }));
  dart.setLibraryUri(checkbox.Checkbox, I[1]);
  dart.setFieldSignature(checkbox.Checkbox, () => ({
    __proto__: dart.getFields(checkbox.Checkbox.__proto__),
    value: dart.finalFieldType(dart.nullable(core.bool)),
    onChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dart.nullable(core.bool)]))),
    mouseCursor: dart.finalFieldType(dart.nullable(mouse_cursor.MouseCursor)),
    activeColor: dart.finalFieldType(dart.nullable(ui.Color)),
    fillColor: dart.finalFieldType(dart.nullable(material_state.MaterialStateProperty$(dart.nullable(ui.Color)))),
    checkColor: dart.finalFieldType(dart.nullable(ui.Color)),
    tristate: dart.finalFieldType(core.bool),
    materialTapTargetSize: dart.finalFieldType(dart.nullable(theme_data.MaterialTapTargetSize)),
    visualDensity: dart.finalFieldType(dart.nullable(theme_data.VisualDensity)),
    focusColor: dart.finalFieldType(dart.nullable(ui.Color)),
    hoverColor: dart.finalFieldType(dart.nullable(ui.Color)),
    overlayColor: dart.finalFieldType(dart.nullable(material_state.MaterialStateProperty$(dart.nullable(ui.Color)))),
    splashRadius: dart.finalFieldType(dart.nullable(core.double)),
    focusNode: dart.finalFieldType(dart.nullable(focus_manager.FocusNode)),
    autofocus: dart.finalFieldType(core.bool),
    shape: dart.finalFieldType(dart.nullable(borders.OutlinedBorder)),
    side: dart.finalFieldType(dart.nullable(borders.BorderSide))
  }));
  dart.setStaticFieldSignature(checkbox.Checkbox, () => ['width']);
  dart.defineLazy(checkbox.Checkbox, {
    /*checkbox.Checkbox.width*/get width() {
      return 18;
    }
  }, false);
  var _painter = dart.privateName(checkbox, "_painter");
  var _previousValue = dart.privateName(checkbox, "_previousValue");
  var _widgetFillColor = dart.privateName(checkbox, "_widgetFillColor");
  var _defaultFillColor = dart.privateName(checkbox, "_defaultFillColor");
  var _resolveSide = dart.privateName(checkbox, "_resolveSide");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var Color_value = dart.privateName(ui, "Color.value");
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
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(checkbox.Checkbox) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(checkbox.Checkbox)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(checkbox.Checkbox));
  const State_ToggleableStateMixin$36 = class State_ToggleableStateMixin extends State_TickerProviderStateMixin$36 {};
  (State_ToggleableStateMixin$36.new = function() {
    toggleable.ToggleableStateMixin$(checkbox.Checkbox)[dart.mixinNew].call(this);
    State_ToggleableStateMixin$36.__proto__.new.call(this);
  }).prototype = State_ToggleableStateMixin$36.prototype;
  dart.applyMixin(State_ToggleableStateMixin$36, toggleable.ToggleableStateMixin$(checkbox.Checkbox));
  checkbox._CheckboxState = class _CheckboxState extends State_ToggleableStateMixin$36 {
    initState() {
      super.initState();
      this[_previousValue] = this.widget.value;
    }
    didUpdateWidget(oldWidget) {
      checkbox.Checkbox.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (oldWidget.value != this.widget.value) {
        this[_previousValue] = oldWidget.value;
        this.animateToValue();
      }
    }
    dispose() {
      this[_painter].dispose();
      super.dispose();
    }
    get onChanged() {
      return this.widget.onChanged;
    }
    get tristate() {
      return this.widget.tristate;
    }
    get value() {
      return this.widget.value;
    }
    get [_widgetFillColor]() {
      return material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.fn(states => {
        if (states.contains(material_state.MaterialState.disabled)) {
          return null;
        }
        if (states.contains(material_state.MaterialState.selected)) {
          return this.widget.activeColor;
        }
        return null;
      }, T.SetOfMaterialStateToColorN()));
    }
    get [_defaultFillColor]() {
      let themeData = theme.Theme.of(this.context);
      return material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
        if (states.contains(material_state.MaterialState.disabled)) {
          return themeData.disabledColor;
        }
        if (states.contains(material_state.MaterialState.selected)) {
          return themeData.toggleableActiveColor;
        }
        return themeData.unselectedWidgetColor;
      }, T.SetOfMaterialStateToColor()));
    }
    [_resolveSide](side) {
      if (material_state.MaterialStateBorderSide.is(side)) {
        return material_state.MaterialStateProperty.resolveAs(T.BorderSideN(), side, this.states);
      }
      if (!this.states.contains(material_state.MaterialState.selected)) {
        return side;
      }
      return null;
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t1, t0$6, t0$7, t0$8, t0$9, t1$, t0$10, t0$11, t0$12, t0$13, t0$14, t1$0, t0$15, t0$16, t0$17, t0$18, t0$19, t1$1, t0$20, t0$21, t0$22, t0$23, t1$2, t0$24, t0$25, t0$26, t0$27, t1$3, t0$28, t0$29, t1$4, t0$30, t0$31, t0$32, t1$5, t1$6, t1$7, t1$8, t1$9, t0$33;
      if (!debug.debugCheckHasMaterial(context)) dart.assertFailed(null, I[0], 406, 12, "debugCheckHasMaterial(context)");
      let themeData = theme.Theme.of(context);
      let checkboxTheme = checkbox_theme.CheckboxTheme.of(context);
      let effectiveMaterialTapTargetSize = (t0$ = (t0 = this.widget.materialTapTargetSize, t0 == null ? checkboxTheme.materialTapTargetSize : t0), t0$ == null ? themeData.materialTapTargetSize : t0$);
      let effectiveVisualDensity = (t0$1 = (t0$0 = this.widget.visualDensity, t0$0 == null ? checkboxTheme.visualDensity : t0$0), t0$1 == null ? themeData.visualDensity : t0$1);
      let size = null;
      switch (effectiveMaterialTapTargetSize) {
        case C[2] || CT.C2:
          {
            size = C[1] || CT.C1;
            break;
          }
        case C[4] || CT.C4:
          {
            size = C[3] || CT.C3;
            break;
          }
      }
      size = size['+'](effectiveVisualDensity.baseSizeAdjustment);
      let effectiveMouseCursor = material_state.MaterialStateProperty.resolveWith(mouse_cursor.MouseCursor, dart.fn(states => {
        let t1, t0, t0$;
        t0$ = (t0 = material_state.MaterialStateProperty.resolveAs(T.MouseCursorN(), this.widget.mouseCursor, states), t0 == null ? (t1 = checkboxTheme.mouseCursor, t1 == null ? null : t1.resolve(states)) : t0);
        return t0$ == null ? material_state.MaterialStateMouseCursor.clickable.resolve(states) : t0$;
      }, T.SetOfMaterialStateToMouseCursor()));
      let activeStates = (t0$2 = this.states, (() => {
        t0$2.add(material_state.MaterialState.selected);
        return t0$2;
      })());
      let inactiveStates = (t0$3 = this.states, (() => {
        t0$3.remove(material_state.MaterialState.selected);
        return t0$3;
      })());
      let effectiveActiveColor = (t0$7 = (t0$6 = (t0$5 = (t0$4 = this.widget.fillColor, t0$4 == null ? null : t0$4.resolve(activeStates)), t0$5 == null ? this[_widgetFillColor].resolve(activeStates) : t0$5), t0$6 == null ? (t1 = checkboxTheme.fillColor, t1 == null ? null : t1.resolve(activeStates)) : t0$6), t0$7 == null ? this[_defaultFillColor].resolve(activeStates) : t0$7);
      let effectiveInactiveColor = (t0$11 = (t0$10 = (t0$9 = (t0$8 = this.widget.fillColor, t0$8 == null ? null : t0$8.resolve(inactiveStates)), t0$9 == null ? this[_widgetFillColor].resolve(inactiveStates) : t0$9), t0$10 == null ? (t1$ = checkboxTheme.fillColor, t1$ == null ? null : t1$.resolve(inactiveStates)) : t0$10), t0$11 == null ? this[_defaultFillColor].resolve(inactiveStates) : t0$11);
      let focusedStates = (t0$12 = this.states, (() => {
        t0$12.add(material_state.MaterialState.focused);
        return t0$12;
      })());
      let effectiveFocusOverlayColor = (t0$16 = (t0$15 = (t0$14 = (t0$13 = this.widget.overlayColor, t0$13 == null ? null : t0$13.resolve(focusedStates)), t0$14 == null ? this.widget.focusColor : t0$14), t0$15 == null ? (t1$0 = checkboxTheme.overlayColor, t1$0 == null ? null : t1$0.resolve(focusedStates)) : t0$15), t0$16 == null ? themeData.focusColor : t0$16);
      let hoveredStates = (t0$17 = this.states, (() => {
        t0$17.add(material_state.MaterialState.hovered);
        return t0$17;
      })());
      let effectiveHoverOverlayColor = (t0$21 = (t0$20 = (t0$19 = (t0$18 = this.widget.overlayColor, t0$18 == null ? null : t0$18.resolve(hoveredStates)), t0$19 == null ? this.widget.hoverColor : t0$19), t0$20 == null ? (t1$1 = checkboxTheme.overlayColor, t1$1 == null ? null : t1$1.resolve(hoveredStates)) : t0$20), t0$21 == null ? themeData.hoverColor : t0$21);
      let activePressedStates = (t0$22 = activeStates, (() => {
        t0$22.add(material_state.MaterialState.pressed);
        return t0$22;
      })());
      let effectiveActivePressedOverlayColor = (t0$25 = (t0$24 = (t0$23 = this.widget.overlayColor, t0$23 == null ? null : t0$23.resolve(activePressedStates)), t0$24 == null ? (t1$2 = checkboxTheme.overlayColor, t1$2 == null ? null : t1$2.resolve(activePressedStates)) : t0$24), t0$25 == null ? effectiveActiveColor.withAlpha(31) : t0$25);
      let inactivePressedStates = (t0$26 = inactiveStates, (() => {
        t0$26.add(material_state.MaterialState.pressed);
        return t0$26;
      })());
      let effectiveInactivePressedOverlayColor = (t0$29 = (t0$28 = (t0$27 = this.widget.overlayColor, t0$27 == null ? null : t0$27.resolve(inactivePressedStates)), t0$28 == null ? (t1$3 = checkboxTheme.overlayColor, t1$3 == null ? null : t1$3.resolve(inactivePressedStates)) : t0$28), t0$29 == null ? effectiveActiveColor.withAlpha(31) : t0$29);
      let effectiveCheckColor = (t0$31 = (t0$30 = this.widget.checkColor, t0$30 == null ? (t1$4 = checkboxTheme.checkColor, t1$4 == null ? null : t1$4.resolve(this.states)) : t0$30), t0$31 == null ? C[5] || CT.C5 : t0$31);
      return new basic.Semantics.new({checked: (t0$32 = this.widget.value, t0$32 == null ? false : t0$32), child: this.buildToggleable({mouseCursor: effectiveMouseCursor, focusNode: this.widget.focusNode, autofocus: this.widget.autofocus, size: size, painter: (t0$33 = this[_painter], (() => {
            t0$33.position = this.position;
            t0$33.reaction = this.reaction;
            t0$33.reactionFocusFade = this.reactionFocusFade;
            t0$33.reactionHoverFade = this.reactionHoverFade;
            t0$33.inactiveReactionColor = effectiveInactivePressedOverlayColor;
            t0$33.reactionColor = effectiveActivePressedOverlayColor;
            t0$33.hoverColor = effectiveHoverOverlayColor;
            t0$33.focusColor = effectiveFocusOverlayColor;
            t0$33.splashRadius = (t1$6 = (t1$5 = this.widget.splashRadius, t1$5 == null ? checkboxTheme.splashRadius : t1$5), t1$6 == null ? 20 : t1$6);
            t0$33.downPosition = this.downPosition;
            t0$33.isFocused = this.states.contains(material_state.MaterialState.focused);
            t0$33.isHovered = this.states.contains(material_state.MaterialState.hovered);
            t0$33.activeColor = effectiveActiveColor;
            t0$33.inactiveColor = effectiveInactiveColor;
            t0$33.checkColor = effectiveCheckColor;
            t0$33.value = this.value;
            t0$33.previousValue = this[_previousValue];
            t0$33.shape = (t1$8 = (t1$7 = this.widget.shape, t1$7 == null ? checkboxTheme.shape : t1$7), t1$8 == null ? C[6] || CT.C6 : t1$8);
            t0$33.side = (t1$9 = this[_resolveSide](this.widget.side), t1$9 == null ? this[_resolveSide](checkboxTheme.side) : t1$9);
            return t0$33;
          })())}), $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    static ['_#new#tearOff']() {
      return new checkbox._CheckboxState.new();
    }
  };
  (checkbox._CheckboxState.new = function() {
    this[_painter] = new checkbox._CheckboxPainter.new();
    this[_previousValue] = null;
    checkbox._CheckboxState.__proto__.new.call(this);
    ;
  }).prototype = checkbox._CheckboxState.prototype;
  dart.addTypeTests(checkbox._CheckboxState);
  dart.addTypeCaches(checkbox._CheckboxState);
  dart.setMethodSignature(checkbox._CheckboxState, () => ({
    __proto__: dart.getMethods(checkbox._CheckboxState.__proto__),
    [_resolveSide]: dart.fnType(dart.nullable(borders.BorderSide), [dart.nullable(borders.BorderSide)]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(checkbox._CheckboxState, () => ({
    __proto__: dart.getGetters(checkbox._CheckboxState.__proto__),
    onChanged: dart.nullable(dart.fnType(dart.void, [dart.nullable(core.bool)])),
    tristate: core.bool,
    value: dart.nullable(core.bool),
    [_widgetFillColor]: material_state.MaterialStateProperty$(dart.nullable(ui.Color)),
    [_defaultFillColor]: material_state.MaterialStateProperty$(ui.Color)
  }));
  dart.setLibraryUri(checkbox._CheckboxState, I[1]);
  dart.setFieldSignature(checkbox._CheckboxState, () => ({
    __proto__: dart.getFields(checkbox._CheckboxState.__proto__),
    [_painter]: dart.finalFieldType(checkbox._CheckboxPainter),
    [_previousValue]: dart.fieldType(dart.nullable(core.bool))
  }));
  var _checkColor = dart.privateName(checkbox, "_checkColor");
  var _value = dart.privateName(checkbox, "_value");
  var _shape = dart.privateName(checkbox, "_shape");
  var _side = dart.privateName(checkbox, "_side");
  var _outerRectAt = dart.privateName(checkbox, "_outerRectAt");
  var _colorAt = dart.privateName(checkbox, "_colorAt");
  var _createStrokePaint = dart.privateName(checkbox, "_createStrokePaint");
  var _drawBox = dart.privateName(checkbox, "_drawBox");
  var _drawCheck = dart.privateName(checkbox, "_drawCheck");
  var _drawDash = dart.privateName(checkbox, "_drawDash");
  var _repaint = dart.privateName(checkbox, "_repaint");
  var _repaint$ = dart.privateName(custom_paint, "_repaint");
  checkbox._CheckboxPainter = class _CheckboxPainter extends toggleable.ToggleablePainter {
    get checkColor() {
      return dart.nullCheck(this[_checkColor]);
    }
    set checkColor(value) {
      if (dart.equals(this[_checkColor], value)) {
        return;
      }
      this[_checkColor] = value;
      this.notifyListeners();
    }
    get value() {
      return this[_value];
    }
    set value(value) {
      if (this[_value] == value) {
        return;
      }
      this[_value] = value;
      this.notifyListeners();
    }
    get previousValue() {
      return this[_previousValue];
    }
    set previousValue(value) {
      if (this[_previousValue] == value) {
        return;
      }
      this[_previousValue] = value;
      this.notifyListeners();
    }
    get shape() {
      return dart.nullCheck(this[_shape]);
    }
    set shape(value) {
      if (dart.equals(this[_shape], value)) {
        return;
      }
      this[_shape] = value;
      this.notifyListeners();
    }
    get side() {
      return this[_side];
    }
    set side(value) {
      if (dart.equals(this[_side], value)) {
        return;
      }
      this[_side] = value;
      this.notifyListeners();
    }
    [_outerRectAt](origin, t) {
      let inset = 1.0 - (t - 0.5)[$abs]() * 2.0;
      let size = 18 - inset * 2;
      let rect = new ui.Rect.fromLTWH(origin.dx + inset, origin.dy + inset, size, size);
      return rect;
    }
    [_colorAt](t) {
      return t >= 0.25 ? this.activeColor : dart.nullCheck(ui.Color.lerp(this.inactiveColor, this.activeColor, t * 4.0));
    }
    [_createStrokePaint]() {
      let t0;
      t0 = ui.Paint.new();
      return (() => {
        t0.color = this.checkColor;
        t0.style = ui.PaintingStyle.stroke;
        t0.strokeWidth = 2;
        return t0;
      })();
    }
    [_drawBox](canvas, outer, paint, side, fill) {
      if (fill) {
        canvas.drawPath(this.shape.getOuterPath(outer), paint);
      }
      if (side != null) {
        this.shape.copyWith({side: side}).paint(canvas, outer);
      }
    }
    [_drawCheck](canvas, origin, t, paint) {
      if (!(t >= 0.0 && t <= 1.0)) dart.assertFailed(null, I[0], 595, 12, "t >= 0.0 && t <= 1.0");
      let path = ui.Path.new();
      let start = C[14] || CT.C14;
      let mid = C[15] || CT.C15;
      let end = C[16] || CT.C16;
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
    [_drawDash](canvas, origin, t, paint) {
      if (!(t >= 0.0 && t <= 1.0)) dart.assertFailed(null, I[0], 618, 12, "t >= 0.0 && t <= 1.0");
      let start = C[17] || CT.C17;
      let mid = C[18] || CT.C18;
      let end = C[19] || CT.C19;
      let drawStart = dart.nullCheck(ui.Offset.lerp(start, mid, 1.0 - t));
      let drawEnd = dart.nullCheck(ui.Offset.lerp(mid, end, t));
      canvas.drawLine(origin['+'](drawStart), origin['+'](drawEnd), paint);
    }
    paint(canvas, size) {
      let t0, t0$, t0$0, t0$1, t0$2;
      this.paintRadialReaction({canvas: canvas, origin: size.center(ui.Offset.zero)});
      let strokePaint = this[_createStrokePaint]();
      let origin = ui.Offset.as(size['/'](2.0)['-']((C[20] || CT.C20)['/'](2.0)));
      let status = this.position.status;
      let tNormalized = status === animation.AnimationStatus.forward || status === animation.AnimationStatus.completed ? this.position.value : 1.0 - this.position.value;
      if (this.previousValue === false || this.value === false) {
        let t = this.value === false ? 1.0 - tNormalized : tNormalized;
        let outer = this[_outerRectAt](origin, t);
        let paint = (t0 = ui.Paint.new(), (() => {
          t0.color = this[_colorAt](t);
          return t0;
        })());
        if (t <= 0.5) {
          let border = (t0$ = this.side, t0$ == null ? new borders.BorderSide.new({width: 2.0, color: paint.color}) : t0$);
          this[_drawBox](canvas, outer, paint, border, false);
        } else {
          this[_drawBox](canvas, outer, paint, this.side, true);
          let tShrink = (t - 0.5) * 2.0;
          if (this.previousValue == null || this.value == null) {
            this[_drawDash](canvas, origin, tShrink, strokePaint);
          } else {
            this[_drawCheck](canvas, origin, tShrink, strokePaint);
          }
        }
      } else {
        let outer = this[_outerRectAt](origin, 1.0);
        let paint = (t0$0 = ui.Paint.new(), (() => {
          t0$0.color = this[_colorAt](1.0);
          return t0$0;
        })());
        this[_drawBox](canvas, outer, paint, this.side, true);
        if (tNormalized <= 0.5) {
          let tShrink = 1.0 - tNormalized * 2.0;
          if (dart.test((t0$1 = this.previousValue, t0$1 == null ? false : t0$1))) {
            this[_drawCheck](canvas, origin, tShrink, strokePaint);
          } else {
            this[_drawDash](canvas, origin, tShrink, strokePaint);
          }
        } else {
          let tExpand = (tNormalized - 0.5) * 2.0;
          if (dart.test((t0$2 = this.value, t0$2 == null ? false : t0$2))) {
            this[_drawCheck](canvas, origin, tExpand, strokePaint);
          } else {
            this[_drawDash](canvas, origin, tExpand, strokePaint);
          }
        }
      }
    }
    static ['_#new#tearOff']() {
      return new checkbox._CheckboxPainter.new();
    }
    get [_repaint$]() {
      return T.ListenableN().as(this[$noSuchMethod](new core._Invocation.getter(C[21] || CT.C21)));
    }
  };
  (checkbox._CheckboxPainter.new = function() {
    this[_checkColor] = null;
    this[_value] = null;
    this[_previousValue] = null;
    this[_shape] = null;
    this[_side] = null;
    checkbox._CheckboxPainter.__proto__.new.call(this);
    ;
  }).prototype = checkbox._CheckboxPainter.prototype;
  dart.addTypeTests(checkbox._CheckboxPainter);
  dart.addTypeCaches(checkbox._CheckboxPainter);
  dart.setMethodSignature(checkbox._CheckboxPainter, () => ({
    __proto__: dart.getMethods(checkbox._CheckboxPainter.__proto__),
    [_outerRectAt]: dart.fnType(ui.Rect, [ui.Offset, core.double]),
    [_colorAt]: dart.fnType(ui.Color, [core.double]),
    [_createStrokePaint]: dart.fnType(ui.Paint, []),
    [_drawBox]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, ui.Paint, dart.nullable(borders.BorderSide), core.bool]),
    [_drawCheck]: dart.fnType(dart.void, [ui.Canvas, ui.Offset, core.double, ui.Paint]),
    [_drawDash]: dart.fnType(dart.void, [ui.Canvas, ui.Offset, core.double, ui.Paint]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size])
  }));
  dart.setGetterSignature(checkbox._CheckboxPainter, () => ({
    __proto__: dart.getGetters(checkbox._CheckboxPainter.__proto__),
    checkColor: ui.Color,
    value: dart.nullable(core.bool),
    previousValue: dart.nullable(core.bool),
    shape: borders.OutlinedBorder,
    side: dart.nullable(borders.BorderSide),
    [_repaint$]: dart.nullable(change_notifier.Listenable)
  }));
  dart.setSetterSignature(checkbox._CheckboxPainter, () => ({
    __proto__: dart.getSetters(checkbox._CheckboxPainter.__proto__),
    checkColor: ui.Color,
    value: dart.nullable(core.bool),
    previousValue: dart.nullable(core.bool),
    shape: borders.OutlinedBorder,
    side: dart.nullable(borders.BorderSide)
  }));
  dart.setLibraryUri(checkbox._CheckboxPainter, I[1]);
  dart.setFieldSignature(checkbox._CheckboxPainter, () => ({
    __proto__: dart.getFields(checkbox._CheckboxPainter.__proto__),
    [_checkColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_value]: dart.fieldType(dart.nullable(core.bool)),
    [_previousValue]: dart.fieldType(dart.nullable(core.bool)),
    [_shape]: dart.fieldType(dart.nullable(borders.OutlinedBorder)),
    [_side]: dart.fieldType(dart.nullable(borders.BorderSide))
  }));
  dart.defineLazy(checkbox, {
    /*checkbox._kEdgeSize*/get _kEdgeSize() {
      return 18;
    },
    /*checkbox._kStrokeWidth*/get _kStrokeWidth() {
      return 2;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/checkbox.dart", {
    "package:flutter/src/material/checkbox.dart": checkbox
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["checkbox.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/checkbox.dart.lib.js"}');
  // Exports:
  return {
    src__material__checkbox: checkbox
  };
}));

//# sourceMappingURL=checkbox.dart.lib.js.map