define(['dart_sdk', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/cupertino/activity_indicator.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/animation/tween_sequence.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__material__progress_indicator_dart(dart_sdk, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__cupertino__activity_indicator$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__animation__tween_sequence$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const progress_indicator_theme = packages__flutter__src__material__icon_button$46dart.src__material__progress_indicator_theme;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__title$46dart.src__widgets__container;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const math$ = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const activity_indicator = packages__flutter__src__cupertino__activity_indicator$46dart.src__cupertino__activity_indicator;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const tween_sequence = packages__flutter__src__animation__tween_sequence$46dart.src__animation__tween_sequence;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var progress_indicator = Object.create(dart.library);
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    doubleAnddoubleTovoid: () => (T.doubleAnddoubleTovoid = dart.constFn(dart.fnType(dart.void, [core.double, core.double])))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetNToWidget: () => (T.BuildContextAndWidgetNToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T.WidgetN()])))(),
    TweenSequenceOfdouble: () => (T.TweenSequenceOfdouble = dart.constFn(tween_sequence.TweenSequence$(core.double)))(),
    TweenSequenceItemOfdouble: () => (T.TweenSequenceItemOfdouble = dart.constFn(tween_sequence.TweenSequenceItem$(core.double)))(),
    TweenOfdouble: () => (T.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))(),
    JSArrayOfTweenSequenceItemOfdouble: () => (T.JSArrayOfTweenSequenceItemOfdouble = dart.constFn(_interceptors.JSArray$(T.TweenSequenceItemOfdouble())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "adaptive",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], progress_indicator._ActivityIndicatorType);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 133,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.8,
        [Cubic_b]: 0,
        [Cubic_a]: 0.2
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[7] || CT.C7,
        [Interval_end]: 0.4166666666666667,
        [Interval_begin]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[9] || CT.C9,
        [Interval_end]: 0.6016666666666667,
        [Interval_begin]: 0.185
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.65,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[11] || CT.C11,
        [Interval_end]: 0.8705555555555555,
        [Interval_begin]: 0.5555555555555556
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.45,
        [Cubic_b]: 0,
        [Cubic_a]: 0.1
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[13] || CT.C13,
        [Interval_end]: 1,
        [Interval_begin]: 0.7038888888888889
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LinearProgressIndicator",
        [_Location_column]: 9,
        [_Location_line]: 267,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1800000
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 16,
        [_Location_line]: 348,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 343,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedBuilder",
        [_Location_column]: 12,
        [_Location_line]: 369,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 9,
        [_Location_line]: 482,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CircularProgressIndicator",
        [_Location_column]: 9,
        [_Location_line]: 501,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2961926000.0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoActivityIndicator",
        [_Location_column]: 12,
        [_Location_line]: 579,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 36,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 36
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 16,
        [_Location_line]: 592,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 587,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedBuilder",
        [_Location_column]: 12,
        [_Location_line]: 609,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[34] || CT.C34,
        [Interval_end]: 0.5,
        [Interval_begin]: 0
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: curves.SawTooth.prototype,
        [SawTooth_count]: 2222
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[34] || CT.C34,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: curves.SawTooth.prototype,
        [SawTooth_count]: 1333
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RefreshProgressIndicator",
        [_Location_column]: 9,
        [_Location_line]: 721,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[40] || CT.C40,
        [Interval_end]: 0.33,
        [Interval_begin]: 0.1
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedBuilder",
        [_Location_column]: 12,
        [_Location_line]: 797,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 12
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 24,
        [_Location_line]: 849,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 32,
        [_Location_line]: 847,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Opacity",
        [_Location_column]: 20,
        [_Location_line]: 845,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 18,
        [_Location_line]: 843,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Material",
        [_Location_column]: 16,
        [_Location_line]: 839,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 14,
        [_Location_line]: 835,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    }
  }, false);
  var C = Array(50).fill(void 0);
  var I = [
    "package:flutter/src/material/progress_indicator.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  progress_indicator._ActivityIndicatorType = class _ActivityIndicatorType extends core._Enum {
    toString() {
      return "_ActivityIndicatorType." + this[_name];
    }
  };
  (progress_indicator._ActivityIndicatorType.new = function(index, name) {
    progress_indicator._ActivityIndicatorType.__proto__.new.call(this, index, name);
    ;
  }).prototype = progress_indicator._ActivityIndicatorType.prototype;
  dart.addTypeTests(progress_indicator._ActivityIndicatorType);
  dart.addTypeCaches(progress_indicator._ActivityIndicatorType);
  dart.setLibraryUri(progress_indicator._ActivityIndicatorType, I[0]);
  dart.setStaticFieldSignature(progress_indicator._ActivityIndicatorType, () => ['values', 'material', 'adaptive']);
  dart.defineExtensionMethods(progress_indicator._ActivityIndicatorType, ['toString']);
  dart.defineLazy(progress_indicator._ActivityIndicatorType, {
    /*progress_indicator._ActivityIndicatorType.values*/get values() {
      return C[0] || CT.C0;
    },
    /*progress_indicator._ActivityIndicatorType.material*/get material() {
      return C[1] || CT.C1;
    },
    /*progress_indicator._ActivityIndicatorType.adaptive*/get adaptive() {
      return C[2] || CT.C2;
    }
  }, false);
  var value$ = dart.privateName(progress_indicator, "ProgressIndicator.value");
  var backgroundColor$ = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  var color$ = dart.privateName(progress_indicator, "ProgressIndicator.color");
  var valueColor$ = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  var semanticsLabel$ = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  var semanticsValue$ = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  var _getValueColor = dart.privateName(progress_indicator, "_getValueColor");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _buildSemanticsWrapper = dart.privateName(progress_indicator, "_buildSemanticsWrapper");
  progress_indicator.ProgressIndicator = class ProgressIndicator extends framework.StatefulWidget {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get valueColor() {
      return this[valueColor$];
    }
    set valueColor(value) {
      super.valueColor = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    get semanticsValue() {
      return this[semanticsValue$];
    }
    set semanticsValue(value) {
      super.semanticsValue = value;
    }
    [_getValueColor](context) {
      let t2, t2$, t2$0, t2$1;
      t2$1 = (t2$0 = (t2$ = (t2 = this.valueColor, t2 == null ? null : t2.value), t2$ == null ? this.color : t2$), t2$0 == null ? progress_indicator_theme.ProgressIndicatorTheme.of(context).color : t2$0);
      return t2$1 == null ? theme$.Theme.of(context).colorScheme.primary : t2$1;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.PercentProperty.new("value", this.value, {showName: false, ifNull: "<indeterminate>"}));
    }
    [_buildSemanticsWrapper](opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let expandedSemanticsValue = this.semanticsValue;
      if (this.value != null) {
        expandedSemanticsValue == null ? expandedSemanticsValue = dart.str((dart.nullCheck(this.value) * 100)[$round]()) + "%" : null;
      }
      return new basic.Semantics.new({label: this.semanticsLabel, value: expandedSemanticsValue, child: child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
  };
  (progress_indicator.ProgressIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[value$] = value;
    this[backgroundColor$] = backgroundColor;
    this[color$] = color;
    this[valueColor$] = valueColor;
    this[semanticsLabel$] = semanticsLabel;
    this[semanticsValue$] = semanticsValue;
    progress_indicator.ProgressIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.ProgressIndicator.prototype;
  dart.addTypeTests(progress_indicator.ProgressIndicator);
  dart.addTypeCaches(progress_indicator.ProgressIndicator);
  dart.setMethodSignature(progress_indicator.ProgressIndicator, () => ({
    __proto__: dart.getMethods(progress_indicator.ProgressIndicator.__proto__),
    [_getValueColor]: dart.fnType(ui.Color, [framework.BuildContext]),
    [_buildSemanticsWrapper]: dart.fnType(framework.Widget, [], {}, {child: framework.Widget, context: framework.BuildContext})
  }));
  dart.setLibraryUri(progress_indicator.ProgressIndicator, I[0]);
  dart.setFieldSignature(progress_indicator.ProgressIndicator, () => ({
    __proto__: dart.getFields(progress_indicator.ProgressIndicator.__proto__),
    value: dart.finalFieldType(dart.nullable(core.double)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    valueColor: dart.finalFieldType(dart.nullable(animation.Animation$(dart.nullable(ui.Color)))),
    semanticsLabel: dart.finalFieldType(dart.nullable(core.String)),
    semanticsValue: dart.finalFieldType(dart.nullable(core.String))
  }));
  var backgroundColor$0 = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.backgroundColor");
  var valueColor$0 = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.valueColor");
  var value$0 = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.value");
  var animationValue$ = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.animationValue");
  var textDirection$ = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.textDirection");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var Interval_curve = dart.privateName(curves, "Interval.curve");
  var Interval_end = dart.privateName(curves, "Interval.end");
  var Interval_begin = dart.privateName(curves, "Interval.begin");
  progress_indicator._LinearProgressIndicatorPainter = class _LinearProgressIndicatorPainter extends custom_paint.CustomPainter {
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get valueColor() {
      return this[valueColor$0];
    }
    set valueColor(value) {
      super.valueColor = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get animationValue() {
      return this[animationValue$];
    }
    set animationValue(value) {
      super.animationValue = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    static ['_#new#tearOff'](opts) {
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let animationValue = opts && 'animationValue' in opts ? opts.animationValue : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new progress_indicator._LinearProgressIndicatorPainter.new({backgroundColor: backgroundColor, valueColor: valueColor, value: value, animationValue: animationValue, textDirection: textDirection});
    }
    paint(canvas, size) {
      let t2;
      let paint = (t2 = ui.Paint.new(), (() => {
        t2.color = this.backgroundColor;
        t2.style = ui.PaintingStyle.fill;
        return t2;
      })());
      canvas.drawRect(ui.Offset.zero['&'](size), paint);
      paint.color = this.valueColor;
      const drawBar = (x, width) => {
        if (width <= 0.0) {
          return;
        }
        let left = null;
        switch (this.textDirection) {
          case C[4] || CT.C4:
            {
              left = size.width - width - x;
              break;
            }
          case C[5] || CT.C5:
            {
              left = x;
              break;
            }
        }
        canvas.drawRect(new ui.Offset.new(left, 0.0)['&'](new ui.Size.new(width, size.height)), paint);
      };
      dart.fn(drawBar, T.doubleAnddoubleTovoid());
      if (this.value != null) {
        drawBar(0.0, math$.clampDouble(dart.nullCheck(this.value), 0.0, 1.0) * size.width);
      } else {
        let x1 = size.width * progress_indicator._LinearProgressIndicatorPainter.line1Tail.transform(this.animationValue);
        let width1 = size.width * progress_indicator._LinearProgressIndicatorPainter.line1Head.transform(this.animationValue) - x1;
        let x2 = size.width * progress_indicator._LinearProgressIndicatorPainter.line2Tail.transform(this.animationValue);
        let width2 = size.width * progress_indicator._LinearProgressIndicatorPainter.line2Head.transform(this.animationValue) - x2;
        drawBar(x1, width1);
        drawBar(x2, width2);
      }
    }
    shouldRepaint(oldPainter) {
      progress_indicator._LinearProgressIndicatorPainter.as(oldPainter);
      return !oldPainter.backgroundColor._equals(this.backgroundColor) || !oldPainter.valueColor._equals(this.valueColor) || oldPainter.value != this.value || oldPainter.animationValue !== this.animationValue || oldPainter.textDirection !== this.textDirection;
    }
  };
  (progress_indicator._LinearProgressIndicatorPainter.new = function(opts) {
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let animationValue = opts && 'animationValue' in opts ? opts.animationValue : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[backgroundColor$0] = backgroundColor;
    this[valueColor$0] = valueColor;
    this[value$0] = value;
    this[animationValue$] = animationValue;
    this[textDirection$] = textDirection;
    if (!(textDirection !== null)) dart.assertFailed(null, I[1], 148, 15, "textDirection != null");
    progress_indicator._LinearProgressIndicatorPainter.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._LinearProgressIndicatorPainter.prototype;
  dart.addTypeTests(progress_indicator._LinearProgressIndicatorPainter);
  dart.addTypeCaches(progress_indicator._LinearProgressIndicatorPainter);
  dart.setMethodSignature(progress_indicator._LinearProgressIndicatorPainter, () => ({
    __proto__: dart.getMethods(progress_indicator._LinearProgressIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(progress_indicator._LinearProgressIndicatorPainter, I[0]);
  dart.setFieldSignature(progress_indicator._LinearProgressIndicatorPainter, () => ({
    __proto__: dart.getFields(progress_indicator._LinearProgressIndicatorPainter.__proto__),
    backgroundColor: dart.finalFieldType(ui.Color),
    valueColor: dart.finalFieldType(ui.Color),
    value: dart.finalFieldType(dart.nullable(core.double)),
    animationValue: dart.finalFieldType(core.double),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  dart.setStaticFieldSignature(progress_indicator._LinearProgressIndicatorPainter, () => ['line1Head', 'line1Tail', 'line2Head', 'line2Tail']);
  dart.defineLazy(progress_indicator._LinearProgressIndicatorPainter, {
    /*progress_indicator._LinearProgressIndicatorPainter.line1Head*/get line1Head() {
      return C[6] || CT.C6;
    },
    /*progress_indicator._LinearProgressIndicatorPainter.line1Tail*/get line1Tail() {
      return C[8] || CT.C8;
    },
    /*progress_indicator._LinearProgressIndicatorPainter.line2Head*/get line2Head() {
      return C[10] || CT.C10;
    },
    /*progress_indicator._LinearProgressIndicatorPainter.line2Tail*/get line2Tail() {
      return C[12] || CT.C12;
    }
  }, false);
  var minHeight$ = dart.privateName(progress_indicator, "LinearProgressIndicator.minHeight");
  progress_indicator.LinearProgressIndicator = class LinearProgressIndicator extends progress_indicator.ProgressIndicator {
    get minHeight() {
      return this[minHeight$];
    }
    set minHeight(value) {
      super.minHeight = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
      let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
      let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
      return new progress_indicator.LinearProgressIndicator.new({key: key, value: value, backgroundColor: backgroundColor, color: color, valueColor: valueColor, minHeight: minHeight, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    get backgroundColor() {
      return super.backgroundColor;
    }
    createState() {
      return new progress_indicator._LinearProgressIndicatorState.new();
    }
  };
  (progress_indicator.LinearProgressIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[minHeight$] = minHeight;
    if (!(minHeight == null || dart.notNull(minHeight) > 0)) dart.assertFailed(null, I[1], 276, 15, "minHeight == null || minHeight > 0");
    progress_indicator.LinearProgressIndicator.__proto__.new.call(this, {key: key, value: value, backgroundColor: backgroundColor, color: color, valueColor: valueColor, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.LinearProgressIndicator.prototype;
  dart.addTypeTests(progress_indicator.LinearProgressIndicator);
  dart.addTypeCaches(progress_indicator.LinearProgressIndicator);
  dart.setMethodSignature(progress_indicator.LinearProgressIndicator, () => ({
    __proto__: dart.getMethods(progress_indicator.LinearProgressIndicator.__proto__),
    createState: dart.fnType(framework.State$(progress_indicator.LinearProgressIndicator), [])
  }));
  dart.setGetterSignature(progress_indicator.LinearProgressIndicator, () => ({
    __proto__: dart.getGetters(progress_indicator.LinearProgressIndicator.__proto__),
    backgroundColor: dart.nullable(ui.Color)
  }));
  dart.setLibraryUri(progress_indicator.LinearProgressIndicator, I[0]);
  dart.setFieldSignature(progress_indicator.LinearProgressIndicator, () => ({
    __proto__: dart.getFields(progress_indicator.LinearProgressIndicator.__proto__),
    minHeight: dart.finalFieldType(dart.nullable(core.double))
  }));
  var ___LinearProgressIndicatorState__controller = dart.privateName(progress_indicator, "_#_LinearProgressIndicatorState#_controller");
  var _controller = dart.privateName(progress_indicator, "_controller");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _buildIndicator = dart.privateName(progress_indicator, "_buildIndicator");
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(progress_indicator.LinearProgressIndicator) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(progress_indicator.LinearProgressIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(progress_indicator.LinearProgressIndicator));
  progress_indicator._LinearProgressIndicatorState = class _LinearProgressIndicatorState extends State_SingleTickerProviderStateMixin$36 {
    get [_controller]() {
      let t2;
      t2 = this[___LinearProgressIndicatorState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller](library$32package$58flutter$47src$47material$47progress_indicator$46dart$58$58_controller$35param) {
      this[___LinearProgressIndicatorState__controller] = library$32package$58flutter$47src$47material$47progress_indicator$46dart$58$58_controller$35param;
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C[15] || CT.C15, vsync: this});
      if (this.widget.value == null) {
        this[_controller].repeat();
      }
    }
    didUpdateWidget(oldWidget) {
      progress_indicator.LinearProgressIndicator.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.value == null && !this[_controller].isAnimating) {
        this[_controller].repeat();
      } else if (this.widget.value != null && this[_controller].isAnimating) {
        this[_controller].stop();
      }
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_buildIndicator](context, animationValue, textDirection) {
      let t2, t2$, t2$0, t2$1;
      let indicatorTheme = progress_indicator_theme.ProgressIndicatorTheme.of(context);
      let trackColor = (t2$ = (t2 = this.widget.backgroundColor, t2 == null ? indicatorTheme.linearTrackColor : t2), t2$ == null ? theme$.Theme.of(context).colorScheme.background : t2$);
      let minHeight = (t2$1 = (t2$0 = this.widget.minHeight, t2$0 == null ? indicatorTheme.linearMinHeight : t2$0), t2$1 == null ? 4.0 : t2$1);
      return this.widget[_buildSemanticsWrapper]({context: context, child: new container.Container.new({constraints: new box.BoxConstraints.new({minWidth: 1 / 0, minHeight: minHeight}), child: new basic.CustomPaint.new({painter: new progress_indicator._LinearProgressIndicatorPainter.new({backgroundColor: trackColor, valueColor: this.widget[_getValueColor](context), value: this.widget.value, animationValue: animationValue, textDirection: textDirection}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17})});
    }
    build(context) {
      let textDirection = basic.Directionality.of(context);
      if (this.widget.value != null) {
        return this[_buildIndicator](context, this[_controller].value, textDirection);
      }
      return new transitions.AnimatedBuilder.new({animation: this[_controller].view, builder: dart.fn((context, child) => this[_buildIndicator](context, this[_controller].value, textDirection), T.BuildContextAndWidgetNToWidget()), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
    }
    static ['_#new#tearOff']() {
      return new progress_indicator._LinearProgressIndicatorState.new();
    }
  };
  (progress_indicator._LinearProgressIndicatorState.new = function() {
    this[___LinearProgressIndicatorState__controller] = null;
    progress_indicator._LinearProgressIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._LinearProgressIndicatorState.prototype;
  dart.addTypeTests(progress_indicator._LinearProgressIndicatorState);
  dart.addTypeCaches(progress_indicator._LinearProgressIndicatorState);
  dart.setMethodSignature(progress_indicator._LinearProgressIndicatorState, () => ({
    __proto__: dart.getMethods(progress_indicator._LinearProgressIndicatorState.__proto__),
    [_buildIndicator]: dart.fnType(framework.Widget, [framework.BuildContext, core.double, ui.TextDirection]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(progress_indicator._LinearProgressIndicatorState, () => ({
    __proto__: dart.getGetters(progress_indicator._LinearProgressIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(progress_indicator._LinearProgressIndicatorState, () => ({
    __proto__: dart.getSetters(progress_indicator._LinearProgressIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(progress_indicator._LinearProgressIndicatorState, I[0]);
  dart.setFieldSignature(progress_indicator._LinearProgressIndicatorState, () => ({
    __proto__: dart.getFields(progress_indicator._LinearProgressIndicatorState.__proto__),
    [___LinearProgressIndicatorState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  progress_indicator._CircularProgressIndicatorPainter = class _CircularProgressIndicatorPainter extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](opts) {
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let headValue = opts && 'headValue' in opts ? opts.headValue : null;
      let tailValue = opts && 'tailValue' in opts ? opts.tailValue : null;
      let offsetValue = opts && 'offsetValue' in opts ? opts.offsetValue : null;
      let rotationValue = opts && 'rotationValue' in opts ? opts.rotationValue : null;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      return new progress_indicator._CircularProgressIndicatorPainter.new({backgroundColor: backgroundColor, valueColor: valueColor, value: value, headValue: headValue, tailValue: tailValue, offsetValue: offsetValue, rotationValue: rotationValue, strokeWidth: strokeWidth});
    }
    paint(canvas, size) {
      let t2, t2$;
      let paint = (t2 = ui.Paint.new(), (() => {
        t2.color = this.valueColor;
        t2.strokeWidth = this.strokeWidth;
        t2.style = ui.PaintingStyle.stroke;
        return t2;
      })());
      if (this.backgroundColor != null) {
        let backgroundPaint = (t2$ = ui.Paint.new(), (() => {
          t2$.color = dart.nullCheck(this.backgroundColor);
          t2$.strokeWidth = this.strokeWidth;
          t2$.style = ui.PaintingStyle.stroke;
          return t2$;
        })());
        canvas.drawArc(ui.Offset.zero['&'](size), 0.0, 6.282185307179586, false, backgroundPaint);
      }
      if (this.value == null) {
        paint.strokeCap = ui.StrokeCap.square;
      }
      canvas.drawArc(ui.Offset.zero['&'](size), this.arcStart, this.arcSweep, false, paint);
    }
    shouldRepaint(oldPainter) {
      progress_indicator._CircularProgressIndicatorPainter.as(oldPainter);
      return !dart.equals(oldPainter.backgroundColor, this.backgroundColor) || !oldPainter.valueColor._equals(this.valueColor) || oldPainter.value != this.value || oldPainter.headValue !== this.headValue || oldPainter.tailValue !== this.tailValue || oldPainter.offsetValue !== this.offsetValue || oldPainter.rotationValue !== this.rotationValue || oldPainter.strokeWidth !== this.strokeWidth;
    }
  };
  (progress_indicator._CircularProgressIndicatorPainter.new = function(opts) {
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let headValue = opts && 'headValue' in opts ? opts.headValue : null;
    let tailValue = opts && 'tailValue' in opts ? opts.tailValue : null;
    let offsetValue = opts && 'offsetValue' in opts ? opts.offsetValue : null;
    let rotationValue = opts && 'rotationValue' in opts ? opts.rotationValue : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    this.backgroundColor = backgroundColor;
    this.valueColor = valueColor;
    this.value = value;
    this.headValue = headValue;
    this.tailValue = tailValue;
    this.offsetValue = offsetValue;
    this.rotationValue = rotationValue;
    this.strokeWidth = strokeWidth;
    this.arcStart = value != null ? -1.5707963267948966 : -1.5707963267948966 + tailValue * 3 / 2 * 3.141592653589793 + rotationValue * 3.141592653589793 * 2.0 + offsetValue * 0.5 * 3.141592653589793;
    this.arcSweep = value != null ? math$.clampDouble(value, 0.0, 1.0) * 6.282185307179586 : math.max(core.double, headValue * 3 / 2 * 3.141592653589793 - tailValue * 3 / 2 * 3.141592653589793, 0.001);
    progress_indicator._CircularProgressIndicatorPainter.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._CircularProgressIndicatorPainter.prototype;
  dart.addTypeTests(progress_indicator._CircularProgressIndicatorPainter);
  dart.addTypeCaches(progress_indicator._CircularProgressIndicatorPainter);
  dart.setMethodSignature(progress_indicator._CircularProgressIndicatorPainter, () => ({
    __proto__: dart.getMethods(progress_indicator._CircularProgressIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(progress_indicator._CircularProgressIndicatorPainter, I[0]);
  dart.setFieldSignature(progress_indicator._CircularProgressIndicatorPainter, () => ({
    __proto__: dart.getFields(progress_indicator._CircularProgressIndicatorPainter.__proto__),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    valueColor: dart.finalFieldType(ui.Color),
    value: dart.finalFieldType(dart.nullable(core.double)),
    headValue: dart.finalFieldType(core.double),
    tailValue: dart.finalFieldType(core.double),
    offsetValue: dart.finalFieldType(core.double),
    rotationValue: dart.finalFieldType(core.double),
    strokeWidth: dart.finalFieldType(core.double),
    arcStart: dart.finalFieldType(core.double),
    arcSweep: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(progress_indicator._CircularProgressIndicatorPainter, () => ['_twoPi', '_epsilon', '_sweep', '_startAngle']);
  dart.defineLazy(progress_indicator._CircularProgressIndicatorPainter, {
    /*progress_indicator._CircularProgressIndicatorPainter._twoPi*/get _twoPi() {
      return 6.283185307179586;
    },
    /*progress_indicator._CircularProgressIndicatorPainter._epsilon*/get _epsilon() {
      return 0.001;
    },
    /*progress_indicator._CircularProgressIndicatorPainter._sweep*/get _sweep() {
      return 6.282185307179586;
    },
    /*progress_indicator._CircularProgressIndicatorPainter._startAngle*/get _startAngle() {
      return -1.5707963267948966;
    }
  }, false);
  var _indicatorType = dart.privateName(progress_indicator, "CircularProgressIndicator._indicatorType");
  var strokeWidth$ = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  var _indicatorType$ = dart.privateName(progress_indicator, "_indicatorType");
  progress_indicator.CircularProgressIndicator = class CircularProgressIndicator extends progress_indicator.ProgressIndicator {
    get [_indicatorType$]() {
      return this[_indicatorType];
    }
    set [_indicatorType$](value) {
      super[_indicatorType$] = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 4;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
      let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
      return new progress_indicator.CircularProgressIndicator.new({key: key, value: value, backgroundColor: backgroundColor, color: color, valueColor: valueColor, strokeWidth: strokeWidth, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
    static ['_#adaptive#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 4;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
      let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
      return new progress_indicator.CircularProgressIndicator.adaptive({key: key, value: value, backgroundColor: backgroundColor, valueColor: valueColor, strokeWidth: strokeWidth, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
    }
    get backgroundColor() {
      return super.backgroundColor;
    }
    createState() {
      return new progress_indicator._CircularProgressIndicatorState.new();
    }
  };
  (progress_indicator.CircularProgressIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 4;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[strokeWidth$] = strokeWidth;
    this[_indicatorType] = progress_indicator._ActivityIndicatorType.material;
    progress_indicator.CircularProgressIndicator.__proto__.new.call(this, {key: key, value: value, backgroundColor: backgroundColor, color: color, valueColor: valueColor, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.CircularProgressIndicator.prototype;
  (progress_indicator.CircularProgressIndicator.adaptive = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 4;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[strokeWidth$] = strokeWidth;
    this[_indicatorType] = progress_indicator._ActivityIndicatorType.adaptive;
    progress_indicator.CircularProgressIndicator.__proto__.new.call(this, {key: key, value: value, backgroundColor: backgroundColor, valueColor: valueColor, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.CircularProgressIndicator.prototype;
  dart.addTypeTests(progress_indicator.CircularProgressIndicator);
  dart.addTypeCaches(progress_indicator.CircularProgressIndicator);
  dart.setMethodSignature(progress_indicator.CircularProgressIndicator, () => ({
    __proto__: dart.getMethods(progress_indicator.CircularProgressIndicator.__proto__),
    createState: dart.fnType(framework.State$(progress_indicator.CircularProgressIndicator), [])
  }));
  dart.setGetterSignature(progress_indicator.CircularProgressIndicator, () => ({
    __proto__: dart.getGetters(progress_indicator.CircularProgressIndicator.__proto__),
    backgroundColor: dart.nullable(ui.Color)
  }));
  dart.setLibraryUri(progress_indicator.CircularProgressIndicator, I[0]);
  dart.setFieldSignature(progress_indicator.CircularProgressIndicator, () => ({
    __proto__: dart.getFields(progress_indicator.CircularProgressIndicator.__proto__),
    [_indicatorType$]: dart.finalFieldType(progress_indicator._ActivityIndicatorType),
    strokeWidth: dart.finalFieldType(core.double)
  }));
  var ___CircularProgressIndicatorState__controller = dart.privateName(progress_indicator, "_#_CircularProgressIndicatorState#_controller");
  var _buildCupertinoIndicator = dart.privateName(progress_indicator, "_buildCupertinoIndicator");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var _buildMaterialIndicator = dart.privateName(progress_indicator, "_buildMaterialIndicator");
  var _buildAnimation = dart.privateName(progress_indicator, "_buildAnimation");
  var SawTooth_count = dart.privateName(curves, "SawTooth.count");
  const State_SingleTickerProviderStateMixin$36$ = class State_SingleTickerProviderStateMixin extends framework.State$(progress_indicator.CircularProgressIndicator) {};
  (State_SingleTickerProviderStateMixin$36$.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(progress_indicator.CircularProgressIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$, ticker_provider.SingleTickerProviderStateMixin$(progress_indicator.CircularProgressIndicator));
  progress_indicator._CircularProgressIndicatorState = class _CircularProgressIndicatorState extends State_SingleTickerProviderStateMixin$36$ {
    get [_controller]() {
      let t2;
      t2 = this[___CircularProgressIndicatorState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller](library$32package$58flutter$47src$47material$47progress_indicator$46dart$58$58_controller$35param) {
      this[___CircularProgressIndicatorState__controller] = library$32package$58flutter$47src$47material$47progress_indicator$46dart$58$58_controller$35param;
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C[21] || CT.C21, vsync: this});
      if (this.widget.value == null) {
        this[_controller].repeat();
      }
    }
    didUpdateWidget(oldWidget) {
      progress_indicator.CircularProgressIndicator.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.value == null && !this[_controller].isAnimating) {
        this[_controller].repeat();
      } else if (this.widget.value != null && this[_controller].isAnimating) {
        this[_controller].stop();
      }
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_buildCupertinoIndicator](context) {
      let tickColor = this.widget.backgroundColor;
      return new activity_indicator.CupertinoActivityIndicator.new({key: this.widget.key, color: tickColor, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
    }
    [_buildMaterialIndicator](context, headValue, tailValue, offsetValue, rotationValue) {
      let t2;
      let trackColor = (t2 = this.widget.backgroundColor, t2 == null ? progress_indicator_theme.ProgressIndicatorTheme.of(context).circularTrackColor : t2);
      return this.widget[_buildSemanticsWrapper]({context: context, child: new container.Container.new({constraints: C[23] || CT.C23, child: new basic.CustomPaint.new({painter: new progress_indicator._CircularProgressIndicatorPainter.new({backgroundColor: trackColor, valueColor: this.widget[_getValueColor](context), value: this.widget.value, headValue: headValue, tailValue: tailValue, offsetValue: offsetValue, rotationValue: rotationValue, strokeWidth: this.widget.strokeWidth}), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24}), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25})});
    }
    [_buildAnimation]() {
      return new transitions.AnimatedBuilder.new({animation: this[_controller], builder: dart.fn((context, child) => this[_buildMaterialIndicator](context, progress_indicator._CircularProgressIndicatorState._strokeHeadTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._strokeTailTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._offsetTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._rotationTween.evaluate(this[_controller])), T.BuildContextAndWidgetNToWidget()), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
    build(context) {
      switch (this.widget[_indicatorType$]) {
        case C[1] || CT.C1:
          {
            if (this.widget.value != null) {
              return this[_buildMaterialIndicator](context, 0.0, 0.0, 0.0, 0.0);
            }
            return this[_buildAnimation]();
          }
        case C[2] || CT.C2:
          {
            let theme = theme$.Theme.of(context);
            if (!(theme.platform !== null)) dart.assertFailed(null, I[1], 633, 16, "theme.platform != null");
            switch (theme.platform) {
              case C[27] || CT.C27:
              case C[28] || CT.C28:
                {
                  return this[_buildCupertinoIndicator](context);
                }
              case C[29] || CT.C29:
              case C[30] || CT.C30:
              case C[31] || CT.C31:
              case C[32] || CT.C32:
                {
                  if (this.widget.value != null) {
                    return this[_buildMaterialIndicator](context, 0.0, 0.0, 0.0, 0.0);
                  }
                  return this[_buildAnimation]();
                }
            }
          }
      }
    }
    static ['_#new#tearOff']() {
      return new progress_indicator._CircularProgressIndicatorState.new();
    }
  };
  (progress_indicator._CircularProgressIndicatorState.new = function() {
    this[___CircularProgressIndicatorState__controller] = null;
    progress_indicator._CircularProgressIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._CircularProgressIndicatorState.prototype;
  dart.addTypeTests(progress_indicator._CircularProgressIndicatorState);
  dart.addTypeCaches(progress_indicator._CircularProgressIndicatorState);
  dart.setMethodSignature(progress_indicator._CircularProgressIndicatorState, () => ({
    __proto__: dart.getMethods(progress_indicator._CircularProgressIndicatorState.__proto__),
    [_buildCupertinoIndicator]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildMaterialIndicator]: dart.fnType(framework.Widget, [framework.BuildContext, core.double, core.double, core.double, core.double]),
    [_buildAnimation]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(progress_indicator._CircularProgressIndicatorState, () => ({
    __proto__: dart.getGetters(progress_indicator._CircularProgressIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(progress_indicator._CircularProgressIndicatorState, () => ({
    __proto__: dart.getSetters(progress_indicator._CircularProgressIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(progress_indicator._CircularProgressIndicatorState, I[0]);
  dart.setFieldSignature(progress_indicator._CircularProgressIndicatorState, () => ({
    __proto__: dart.getFields(progress_indicator._CircularProgressIndicatorState.__proto__),
    [___CircularProgressIndicatorState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  dart.setStaticFieldSignature(progress_indicator._CircularProgressIndicatorState, () => ['_pathCount', '_rotationCount', '_strokeHeadTween', '_strokeTailTween', '_offsetTween', '_rotationTween']);
  dart.defineLazy(progress_indicator._CircularProgressIndicatorState, {
    /*progress_indicator._CircularProgressIndicatorState._pathCount*/get _pathCount() {
      return 2222;
    },
    /*progress_indicator._CircularProgressIndicatorState._rotationCount*/get _rotationCount() {
      return 1333;
    },
    /*progress_indicator._CircularProgressIndicatorState._strokeHeadTween*/get _strokeHeadTween() {
      return new tween.CurveTween.new({curve: C[33] || CT.C33}).chain(new tween.CurveTween.new({curve: C[35] || CT.C35}));
    },
    /*progress_indicator._CircularProgressIndicatorState._strokeTailTween*/get _strokeTailTween() {
      return new tween.CurveTween.new({curve: C[36] || CT.C36}).chain(new tween.CurveTween.new({curve: C[35] || CT.C35}));
    },
    /*progress_indicator._CircularProgressIndicatorState._offsetTween*/get _offsetTween() {
      return new tween.CurveTween.new({curve: C[35] || CT.C35});
    },
    /*progress_indicator._CircularProgressIndicatorState._rotationTween*/get _rotationTween() {
      return new tween.CurveTween.new({curve: C[37] || CT.C37});
    }
  }, false);
  progress_indicator._RefreshProgressIndicatorPainter = class _RefreshProgressIndicatorPainter extends progress_indicator._CircularProgressIndicatorPainter {
    static ['_#new#tearOff'](opts) {
      let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let headValue = opts && 'headValue' in opts ? opts.headValue : null;
      let tailValue = opts && 'tailValue' in opts ? opts.tailValue : null;
      let offsetValue = opts && 'offsetValue' in opts ? opts.offsetValue : null;
      let rotationValue = opts && 'rotationValue' in opts ? opts.rotationValue : null;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      let arrowheadScale = opts && 'arrowheadScale' in opts ? opts.arrowheadScale : null;
      return new progress_indicator._RefreshProgressIndicatorPainter.new({valueColor: valueColor, value: value, headValue: headValue, tailValue: tailValue, offsetValue: offsetValue, rotationValue: rotationValue, strokeWidth: strokeWidth, arrowheadScale: arrowheadScale});
    }
    paintArrowhead(canvas, size) {
      let t2, t2$;
      let arcEnd = this.arcStart + this.arcSweep;
      let ux = math.cos(arcEnd);
      let uy = math.sin(arcEnd);
      if (!(size.width === size.height)) dart.assertFailed(null, I[1], 672, 12, "size.width == size.height");
      let radius = size.width / 2.0;
      let arrowheadPointX = radius + ux * radius + -uy * this.strokeWidth * 2.0 * this.arrowheadScale;
      let arrowheadPointY = radius + uy * radius + ux * this.strokeWidth * 2.0 * this.arrowheadScale;
      let arrowheadRadius = this.strokeWidth * 2.0 * this.arrowheadScale;
      let innerRadius = radius - arrowheadRadius;
      let outerRadius = radius + arrowheadRadius;
      let path = (t2 = ui.Path.new(), (() => {
        t2.moveTo(radius + ux * innerRadius, radius + uy * innerRadius);
        t2.lineTo(radius + ux * outerRadius, radius + uy * outerRadius);
        t2.lineTo(arrowheadPointX, arrowheadPointY);
        t2.close();
        return t2;
      })());
      let paint = (t2$ = ui.Paint.new(), (() => {
        t2$.color = this.valueColor;
        t2$.strokeWidth = this.strokeWidth;
        t2$.style = ui.PaintingStyle.fill;
        return t2$;
      })());
      canvas.drawPath(path, paint);
    }
    paint(canvas, size) {
      super.paint(canvas, size);
      if (this.arrowheadScale > 0.0) {
        this.paintArrowhead(canvas, size);
      }
    }
  };
  (progress_indicator._RefreshProgressIndicatorPainter.new = function(opts) {
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let headValue = opts && 'headValue' in opts ? opts.headValue : null;
    let tailValue = opts && 'tailValue' in opts ? opts.tailValue : null;
    let offsetValue = opts && 'offsetValue' in opts ? opts.offsetValue : null;
    let rotationValue = opts && 'rotationValue' in opts ? opts.rotationValue : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let arrowheadScale = opts && 'arrowheadScale' in opts ? opts.arrowheadScale : null;
    this.arrowheadScale = arrowheadScale;
    progress_indicator._RefreshProgressIndicatorPainter.__proto__.new.call(this, {valueColor: valueColor, value: value, headValue: headValue, tailValue: tailValue, offsetValue: offsetValue, rotationValue: rotationValue, strokeWidth: strokeWidth});
    ;
  }).prototype = progress_indicator._RefreshProgressIndicatorPainter.prototype;
  dart.addTypeTests(progress_indicator._RefreshProgressIndicatorPainter);
  dart.addTypeCaches(progress_indicator._RefreshProgressIndicatorPainter);
  dart.setMethodSignature(progress_indicator._RefreshProgressIndicatorPainter, () => ({
    __proto__: dart.getMethods(progress_indicator._RefreshProgressIndicatorPainter.__proto__),
    paintArrowhead: dart.fnType(dart.void, [ui.Canvas, ui.Size])
  }));
  dart.setLibraryUri(progress_indicator._RefreshProgressIndicatorPainter, I[0]);
  dart.setFieldSignature(progress_indicator._RefreshProgressIndicatorPainter, () => ({
    __proto__: dart.getFields(progress_indicator._RefreshProgressIndicatorPainter.__proto__),
    arrowheadScale: dart.finalFieldType(core.double)
  }));
  progress_indicator.RefreshProgressIndicator = class RefreshProgressIndicator extends progress_indicator.CircularProgressIndicator {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
      let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
      return new progress_indicator.RefreshProgressIndicator.new({key: key, value: value, backgroundColor: backgroundColor, color: color, valueColor: valueColor, strokeWidth: strokeWidth, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: C[38] || CT.C38});
    }
    get backgroundColor() {
      return super.backgroundColor;
    }
    createState() {
      return new progress_indicator._RefreshProgressIndicatorState.new();
    }
  };
  (progress_indicator.RefreshProgressIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 2.5;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    progress_indicator.RefreshProgressIndicator.__proto__.new.call(this, {key: key, value: value, backgroundColor: backgroundColor, color: color, valueColor: valueColor, strokeWidth: strokeWidth, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.RefreshProgressIndicator.prototype;
  dart.addTypeTests(progress_indicator.RefreshProgressIndicator);
  dart.addTypeCaches(progress_indicator.RefreshProgressIndicator);
  dart.setLibraryUri(progress_indicator.RefreshProgressIndicator, I[0]);
  dart.setStaticFieldSignature(progress_indicator.RefreshProgressIndicator, () => ['defaultStrokeWidth']);
  dart.defineLazy(progress_indicator.RefreshProgressIndicator, {
    /*progress_indicator.RefreshProgressIndicator.defaultStrokeWidth*/get defaultStrokeWidth() {
      return 2.5;
    }
  }, false);
  var ___RefreshProgressIndicatorState__convertTween = dart.privateName(progress_indicator, "_#_RefreshProgressIndicatorState#_convertTween");
  var ___RefreshProgressIndicatorState__additionalRotationTween = dart.privateName(progress_indicator, "_#_RefreshProgressIndicatorState#_additionalRotationTween");
  var _lastValue = dart.privateName(progress_indicator, "_lastValue");
  var _convertTween = dart.privateName(progress_indicator, "_convertTween");
  var _additionalRotationTween = dart.privateName(progress_indicator, "_additionalRotationTween");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  progress_indicator._RefreshProgressIndicatorState = class _RefreshProgressIndicatorState extends progress_indicator._CircularProgressIndicatorState {
    get [_convertTween]() {
      let t3, t2;
      t2 = this[___RefreshProgressIndicatorState__convertTween];
      return t2 == null ? (t3 = new tween.CurveTween.new({curve: C[39] || CT.C39}), this[___RefreshProgressIndicatorState__convertTween] == null ? this[___RefreshProgressIndicatorState__convertTween] = t3 : dart.throw(new _internal.LateError.fieldADI("_convertTween"))) : t2;
    }
    get [_additionalRotationTween]() {
      let t3, t2;
      t2 = this[___RefreshProgressIndicatorState__additionalRotationTween];
      return t2 == null ? (t3 = new (T.TweenSequenceOfdouble()).new(T.JSArrayOfTweenSequenceItemOfdouble().of([new (T.TweenSequenceItemOfdouble()).new({tween: new (T.TweenOfdouble()).new({begin: -0.1, end: -0.2}), weight: 0.33}), new (T.TweenSequenceItemOfdouble()).new({tween: new (T.TweenOfdouble()).new({begin: -0.2, end: 1.35}), weight: 1 - 0.33})])), this[___RefreshProgressIndicatorState__additionalRotationTween] == null ? this[___RefreshProgressIndicatorState__additionalRotationTween] = t3 : dart.throw(new _internal.LateError.fieldADI("_additionalRotationTween"))) : t2;
    }
    build(context) {
      let value = this.widget.value;
      if (value != null) {
        this[_lastValue] = value;
        this[_controller].value = this[_convertTween].transform(value) * (1333 / 2 / 2961926);
      }
      return this[_buildAnimation]();
    }
    [_buildAnimation]() {
      return new transitions.AnimatedBuilder.new({animation: this[_controller], builder: dart.fn((context, child) => this[_buildMaterialIndicator](context, 1.05 * progress_indicator._CircularProgressIndicatorState._strokeHeadTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._strokeTailTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._offsetTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._rotationTween.evaluate(this[_controller])), T.BuildContextAndWidgetNToWidget()), $creationLocationd_0dea112b090073317d4: C[41] || CT.C41});
    }
    [_buildMaterialIndicator](context, headValue, tailValue, offsetValue, rotationValue) {
      let t2, t2$, t2$0;
      let value = this.widget.value;
      let arrowheadScale = value == null ? 0.0 : (C[39] || CT.C39).transform(value);
      let rotation = null;
      if (value == null && this[_lastValue] == null) {
        rotation = 0.0;
      } else {
        rotation = 3.141592653589793 * this[_additionalRotationTween].transform((t2 = value, t2 == null ? dart.nullCheck(this[_lastValue]) : t2));
      }
      let valueColor = this.widget[_getValueColor](context);
      let opacity = valueColor.opacity;
      valueColor = valueColor.withOpacity(1.0);
      let backgroundColor = (t2$0 = (t2$ = this.widget.backgroundColor, t2$ == null ? progress_indicator_theme.ProgressIndicatorTheme.of(context).refreshBackgroundColor : t2$), t2$0 == null ? theme$.Theme.of(context).canvasColor : t2$0);
      return this.widget[_buildSemanticsWrapper]({context: context, child: new container.Container.new({width: 41, height: 41, margin: C[42] || CT.C42, child: new material.Material.new({type: material.MaterialType.circle, color: backgroundColor, elevation: 2.0, child: new basic.Padding.new({padding: C[43] || CT.C43, child: new basic.Opacity.new({opacity: opacity, child: new basic.Transform.rotate({angle: rotation, child: new basic.CustomPaint.new({painter: new progress_indicator._RefreshProgressIndicatorPainter.new({valueColor: valueColor, value: null, headValue: headValue, tailValue: tailValue, offsetValue: offsetValue, rotationValue: rotationValue, strokeWidth: this.widget.strokeWidth, arrowheadScale: arrowheadScale}), $creationLocationd_0dea112b090073317d4: C[44] || CT.C44}), $creationLocationd_0dea112b090073317d4: C[45] || CT.C45}), $creationLocationd_0dea112b090073317d4: C[46] || CT.C46}), $creationLocationd_0dea112b090073317d4: C[47] || CT.C47}), $creationLocationd_0dea112b090073317d4: C[48] || CT.C48}), $creationLocationd_0dea112b090073317d4: C[49] || CT.C49})});
    }
    static ['_#new#tearOff']() {
      return new progress_indicator._RefreshProgressIndicatorState.new();
    }
  };
  (progress_indicator._RefreshProgressIndicatorState.new = function() {
    this[___RefreshProgressIndicatorState__convertTween] = null;
    this[___RefreshProgressIndicatorState__additionalRotationTween] = null;
    this[_lastValue] = null;
    progress_indicator._RefreshProgressIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._RefreshProgressIndicatorState.prototype;
  dart.addTypeTests(progress_indicator._RefreshProgressIndicatorState);
  dart.addTypeCaches(progress_indicator._RefreshProgressIndicatorState);
  dart.setGetterSignature(progress_indicator._RefreshProgressIndicatorState, () => ({
    __proto__: dart.getGetters(progress_indicator._RefreshProgressIndicatorState.__proto__),
    [_convertTween]: tween.Animatable$(core.double),
    [_additionalRotationTween]: tween.Animatable$(core.double)
  }));
  dart.setLibraryUri(progress_indicator._RefreshProgressIndicatorState, I[0]);
  dart.setFieldSignature(progress_indicator._RefreshProgressIndicatorState, () => ({
    __proto__: dart.getFields(progress_indicator._RefreshProgressIndicatorState.__proto__),
    [___RefreshProgressIndicatorState__convertTween]: dart.fieldType(dart.nullable(tween.Animatable$(core.double))),
    [___RefreshProgressIndicatorState__additionalRotationTween]: dart.fieldType(dart.nullable(tween.Animatable$(core.double))),
    [_lastValue]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(progress_indicator._RefreshProgressIndicatorState, () => ['_indicatorSize', '_strokeHeadInterval']);
  dart.defineLazy(progress_indicator._RefreshProgressIndicatorState, {
    /*progress_indicator._RefreshProgressIndicatorState._indicatorSize*/get _indicatorSize() {
      return 41;
    },
    /*progress_indicator._RefreshProgressIndicatorState._strokeHeadInterval*/get _strokeHeadInterval() {
      return 0.33;
    }
  }, false);
  dart.defineLazy(progress_indicator, {
    /*progress_indicator._kMinCircularProgressIndicatorSize*/get _kMinCircularProgressIndicatorSize() {
      return 36;
    },
    /*progress_indicator._kIndeterminateLinearDuration*/get _kIndeterminateLinearDuration() {
      return 1800;
    },
    /*progress_indicator._kIndeterminateCircularDuration*/get _kIndeterminateCircularDuration() {
      return 2961926;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/progress_indicator.dart", {
    "package:flutter/src/material/progress_indicator.dart": progress_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["progress_indicator.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/progress_indicator.dart.lib.js"}');
  // Exports:
  return {
    src__material__progress_indicator: progress_indicator
  };
}));

//# sourceMappingURL=progress_indicator.dart.lib.js.map