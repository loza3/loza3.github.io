define(['dart_sdk', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/stack.dart'], (function load__packages__flutter__src__rendering__debug_overflow_indicator_dart(dart_sdk, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__stack$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  var debug_overflow_indicator = Object.create(dart.library);
  var $length = dartx.length;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $toStringAsPrecision = dartx.toStringAsPrecision;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $last = dartx.last;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $join = dartx.join;
  var $addAll = dartx.addAll;
  var $times = dartx['*'];
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfTextPainter: () => (T.ListOfTextPainter = dart.constFn(core.List$(text_painter.TextPainter)))(),
    JSArrayOf_OverflowRegionData: () => (T.JSArrayOf_OverflowRegionData = dart.constFn(_interceptors.JSArray$(debug_overflow_indicator._OverflowRegionData)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    ListOfDiagnosticsNode: () => (T.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T.ListOfDiagnosticsNode(), [])))(),
    TextSpanN: () => (T.TextSpanN = dart.constFn(dart.nullable(text_span.TextSpan)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: debug_overflow_indicator._OverflowSide.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: debug_overflow_indicator._OverflowSide.prototype,
        [_Enum__name]: "top",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: debug_overflow_indicator._OverflowSide.prototype,
        [_Enum__name]: "bottom",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: debug_overflow_indicator._OverflowSide.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], debug_overflow_indicator._OverflowSide);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 8.5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 8.5,
        [OffsetBase__dx]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3204448256.0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3221225216.0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 7
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287627264.0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[12] || CT.C12,
        [TextStyle_fontSize]: 7.5,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[13] || CT.C13,
        [TextStyle_inherit]: true
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10,
        [OffsetBase__dx]: 10
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    }
  }, false);
  var C = Array(16).fill(void 0);
  var I = [
    "package:flutter/src/rendering/debug_overflow_indicator.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/debug_overflow_indicator.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  debug_overflow_indicator._OverflowSide = class _OverflowSide extends core._Enum {
    toString() {
      return "_OverflowSide." + this[_name];
    }
  };
  (debug_overflow_indicator._OverflowSide.new = function(index, name) {
    debug_overflow_indicator._OverflowSide.__proto__.new.call(this, index, name);
    ;
  }).prototype = debug_overflow_indicator._OverflowSide.prototype;
  dart.addTypeTests(debug_overflow_indicator._OverflowSide);
  dart.addTypeCaches(debug_overflow_indicator._OverflowSide);
  dart.setLibraryUri(debug_overflow_indicator._OverflowSide, I[0]);
  dart.setStaticFieldSignature(debug_overflow_indicator._OverflowSide, () => ['values', 'left', 'top', 'bottom', 'right']);
  dart.defineExtensionMethods(debug_overflow_indicator._OverflowSide, ['toString']);
  dart.defineLazy(debug_overflow_indicator._OverflowSide, {
    /*debug_overflow_indicator._OverflowSide.values*/get values() {
      return C[0] || CT.C0;
    },
    /*debug_overflow_indicator._OverflowSide.left*/get left() {
      return C[1] || CT.C1;
    },
    /*debug_overflow_indicator._OverflowSide.top*/get top() {
      return C[2] || CT.C2;
    },
    /*debug_overflow_indicator._OverflowSide.bottom*/get bottom() {
      return C[3] || CT.C3;
    },
    /*debug_overflow_indicator._OverflowSide.right*/get right() {
      return C[4] || CT.C4;
    }
  }, false);
  var rect$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.rect");
  var label$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.label");
  var labelOffset$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.labelOffset");
  var rotation$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.rotation");
  var side$ = dart.privateName(debug_overflow_indicator, "_OverflowRegionData.side");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  debug_overflow_indicator._OverflowRegionData = class _OverflowRegionData extends core.Object {
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get labelOffset() {
      return this[labelOffset$];
    }
    set labelOffset(value) {
      super.labelOffset = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
    static ['_#new#tearOff'](opts) {
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let label = opts && 'label' in opts ? opts.label : "";
      let labelOffset = opts && 'labelOffset' in opts ? opts.labelOffset : C[5] || CT.C5;
      let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
      let side = opts && 'side' in opts ? opts.side : null;
      return new debug_overflow_indicator._OverflowRegionData.new({rect: rect, label: label, labelOffset: labelOffset, rotation: rotation, side: side});
    }
  };
  (debug_overflow_indicator._OverflowRegionData.new = function(opts) {
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let label = opts && 'label' in opts ? opts.label : "";
    let labelOffset = opts && 'labelOffset' in opts ? opts.labelOffset : C[5] || CT.C5;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    let side = opts && 'side' in opts ? opts.side : null;
    this[rect$] = rect;
    this[label$] = label;
    this[labelOffset$] = labelOffset;
    this[rotation$] = rotation;
    this[side$] = side;
    ;
  }).prototype = debug_overflow_indicator._OverflowRegionData.prototype;
  dart.addTypeTests(debug_overflow_indicator._OverflowRegionData);
  dart.addTypeCaches(debug_overflow_indicator._OverflowRegionData);
  dart.setLibraryUri(debug_overflow_indicator._OverflowRegionData, I[0]);
  dart.setFieldSignature(debug_overflow_indicator._OverflowRegionData, () => ({
    __proto__: dart.getFields(debug_overflow_indicator._OverflowRegionData.__proto__),
    rect: dart.finalFieldType(ui.Rect),
    label: dart.finalFieldType(core.String),
    labelOffset: dart.finalFieldType(ui.Offset),
    rotation: dart.finalFieldType(core.double),
    side: dart.finalFieldType(debug_overflow_indicator._OverflowSide)
  }));
  var _indicatorLabel = dart.privateName(debug_overflow_indicator, "_indicatorLabel");
  var _overflowReportNeeded = dart.privateName(debug_overflow_indicator, "_overflowReportNeeded");
  var _formatPixels = dart.privateName(debug_overflow_indicator, "_formatPixels");
  var _calculateOverflowRegions = dart.privateName(debug_overflow_indicator, "_calculateOverflowRegions");
  var _reportOverflow = dart.privateName(debug_overflow_indicator, "_reportOverflow");
  var Color_value = dart.privateName(ui, "Color.value");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  debug_overflow_indicator.DebugOverflowIndicatorMixin = class DebugOverflowIndicatorMixin extends object.RenderObject {};
  debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinOn] = RenderObject => class DebugOverflowIndicatorMixin extends RenderObject {
    [_formatPixels](value) {
      if (!(value > 0.0)) dart.assertFailed(null, I[1], 122, 12, "value > 0.0");
      let pixels = null;
      if (value > 10.0) {
        pixels = value[$toStringAsFixed](0);
      } else if (value > 1.0) {
        pixels = value[$toStringAsFixed](1);
      } else {
        pixels = value[$toStringAsPrecision](3);
      }
      return pixels;
    }
    [_calculateOverflowRegions](overflow, containerRect) {
      let regions = T.JSArrayOf_OverflowRegionData().of([]);
      if (overflow.left > 0.0) {
        let markerRect = new ui.Rect.fromLTWH(0.0, 0.0, containerRect.width * 0.1, containerRect.height);
        regions[$add](new debug_overflow_indicator._OverflowRegionData.new({rect: markerRect, label: "LEFT OVERFLOWED BY " + this[_formatPixels](overflow.left) + " PIXELS", labelOffset: markerRect.centerLeft['+'](C[6] || CT.C6), rotation: 3.141592653589793 / 2.0, side: debug_overflow_indicator._OverflowSide.left}));
      }
      if (overflow.right > 0.0) {
        let markerRect = new ui.Rect.fromLTWH(containerRect.width * (1.0 - 0.1), 0.0, containerRect.width * 0.1, containerRect.height);
        regions[$add](new debug_overflow_indicator._OverflowRegionData.new({rect: markerRect, label: "RIGHT OVERFLOWED BY " + this[_formatPixels](overflow.right) + " PIXELS", labelOffset: markerRect.centerRight['-'](C[6] || CT.C6), rotation: -3.141592653589793 / 2.0, side: debug_overflow_indicator._OverflowSide.right}));
      }
      if (overflow.top > 0.0) {
        let markerRect = new ui.Rect.fromLTWH(0.0, 0.0, containerRect.width, containerRect.height * 0.1);
        regions[$add](new debug_overflow_indicator._OverflowRegionData.new({rect: markerRect, label: "TOP OVERFLOWED BY " + this[_formatPixels](overflow.top) + " PIXELS", labelOffset: markerRect.topCenter['+'](C[7] || CT.C7), side: debug_overflow_indicator._OverflowSide.top}));
      }
      if (overflow.bottom > 0.0) {
        let markerRect = new ui.Rect.fromLTWH(0.0, containerRect.height * (1.0 - 0.1), containerRect.width, containerRect.height * 0.1);
        regions[$add](new debug_overflow_indicator._OverflowRegionData.new({rect: markerRect, label: "BOTTOM OVERFLOWED BY " + this[_formatPixels](overflow.bottom) + " PIXELS", labelOffset: markerRect.bottomCenter['-'](C[8] || CT.C8), side: debug_overflow_indicator._OverflowSide.bottom}));
      }
      return regions;
    }
    [_reportOverflow](overflow, overflowHints) {
      overflowHints == null ? overflowHints = T.JSArrayOfDiagnosticsNode().of([]) : null;
      if (overflowHints[$isEmpty]) {
        overflowHints[$add](new assertions.ErrorDescription.new("The edge of the " + dart.str(this[$runtimeType]) + " that is " + "overflowing has been marked in the rendering with a yellow and black " + "striped pattern. This is usually caused by the contents being too big " + "for the " + dart.str(this[$runtimeType]) + "."));
        overflowHints[$add](new assertions.ErrorHint.new("This is considered an error condition because it indicates that there " + "is content that cannot be seen. If the content is legitimately bigger " + "than the available space, consider clipping it with a ClipRect widget " + "before putting it in the " + dart.str(this[$runtimeType]) + ", or using a scrollable " + "container, like a ListView."));
      }
      let overflows = (() => {
        let t2 = T.JSArrayOfString().of([]);
        if (overflow.left > 0.0) t2.push(this[_formatPixels](overflow.left) + " pixels on the left");
        if (overflow.top > 0.0) t2.push(this[_formatPixels](overflow.top) + " pixels on the top");
        if (overflow.bottom > 0.0) t2.push(this[_formatPixels](overflow.bottom) + " pixels on the bottom");
        if (overflow.right > 0.0) t2.push(this[_formatPixels](overflow.right) + " pixels on the right");
        return t2;
      })();
      let overflowText = "";
      if (!overflows[$isNotEmpty]) dart.assertFailed("Somehow " + dart.str(this[$runtimeType]) + " didn't actually overflow like it thought it did.", I[1], 225, 12, "overflows.isNotEmpty");
      switch (overflows[$length]) {
        case 1:
          {
            overflowText = overflows[$first];
            break;
          }
        case 2:
          {
            overflowText = overflows[$first] + " and " + overflows[$last];
            break;
          }
        default:
          {
            overflows[$_set](overflows[$length] - 1, "and " + overflows[$_get](overflows[$length] - 1));
            overflowText = overflows[$join](", ");
          }
      }
      assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " overflowed by " + overflowText + "."), library: "rendering library", context: new assertions.ErrorDescription.new("during layout"), informationCollector: dart.fn(() => (() => {
          let t3 = T.JSArrayOfDiagnosticsNode().of([]);
          if (true && this.debugCreator != null) t3.push(new object.DiagnosticsDebugCreator.new(dart.nullCheck(this.debugCreator)));
          t3[$addAll](dart.nullCheck(overflowHints));
          t3.push(this.describeForError("The specific " + dart.str(this[$runtimeType]) + " in question is"));
          t3.push(diagnostics.DiagnosticsNode.message("◢◤"[$times]((100 / 2)[$truncate]()), {allowWrap: false}));
          return t3;
        })(), T.VoidToListOfDiagnosticsNode())}));
    }
    paintOverflowIndicator(context, offset, containerRect, childRect, opts) {
      let t4;
      let overflowHints = opts && 'overflowHints' in opts ? opts.overflowHints : null;
      let overflow = stack.RelativeRect.fromRect(containerRect, childRect);
      if (overflow.left <= 0.0 && overflow.right <= 0.0 && overflow.top <= 0.0 && overflow.bottom <= 0.0) {
        return;
      }
      let overflowRegions = this[_calculateOverflowRegions](overflow, containerRect);
      for (let region of overflowRegions) {
        context.canvas.drawRect(region.rect.shift(offset), debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorPaint);
        let textSpan = T.TextSpanN().as(this[_indicatorLabel][$_get](region.side.index).text);
        if ((t4 = textSpan, t4 == null ? null : t4.text) !== region.label) {
          this[_indicatorLabel][$_get](region.side.index).text = new text_span.TextSpan.new({text: region.label, style: debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorTextStyle});
          this[_indicatorLabel][$_get](region.side.index).layout();
        }
        let labelOffset = region.labelOffset['+'](offset);
        let centerOffset = new ui.Offset.new(-this[_indicatorLabel][$_get](region.side.index).width / 2.0, 0.0);
        let textBackgroundRect = centerOffset['&'](this[_indicatorLabel][$_get](region.side.index).size);
        context.canvas.save();
        context.canvas.translate(labelOffset.dx, labelOffset.dy);
        context.canvas.rotate(region.rotation);
        context.canvas.drawRect(textBackgroundRect, debug_overflow_indicator.DebugOverflowIndicatorMixin._labelBackgroundPaint);
        this[_indicatorLabel][$_get](region.side.index).paint(context.canvas, centerOffset);
        context.canvas.restore();
      }
      if (this[_overflowReportNeeded]) {
        this[_overflowReportNeeded] = false;
        this[_reportOverflow](overflow, overflowHints);
      }
    }
    reassemble() {
      super.reassemble();
      if (!dart.fn(() => {
        this[_overflowReportNeeded] = true;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 315, 12, "() {\n      _overflowReportNeeded = true;\n      return true;\n    }()");
    }
  };
  (debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinNew] = function() {
    this[_indicatorLabel] = T.ListOfTextPainter().filled(debug_overflow_indicator._OverflowSide.values[$length], new text_painter.TextPainter.new({textDirection: ui.TextDirection.ltr}));
    this[_overflowReportNeeded] = true;
  }).prototype = debug_overflow_indicator.DebugOverflowIndicatorMixin.prototype;
  dart.addTypeTests(debug_overflow_indicator.DebugOverflowIndicatorMixin);
  dart.addTypeCaches(debug_overflow_indicator.DebugOverflowIndicatorMixin);
  debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.implements] = () => [object.RenderObject];
  dart.setMethodSignature(debug_overflow_indicator.DebugOverflowIndicatorMixin, () => ({
    __proto__: dart.getMethods(debug_overflow_indicator.DebugOverflowIndicatorMixin.__proto__),
    [_formatPixels]: dart.fnType(core.String, [core.double]),
    [_calculateOverflowRegions]: dart.fnType(core.List$(debug_overflow_indicator._OverflowRegionData), [stack.RelativeRect, ui.Rect]),
    [_reportOverflow]: dart.fnType(dart.void, [stack.RelativeRect, dart.nullable(core.List$(diagnostics.DiagnosticsNode))]),
    paintOverflowIndicator: dart.fnType(dart.void, [object.PaintingContext, ui.Offset, ui.Rect, ui.Rect], {overflowHints: dart.nullable(core.List$(diagnostics.DiagnosticsNode))}, {})
  }));
  dart.setLibraryUri(debug_overflow_indicator.DebugOverflowIndicatorMixin, I[0]);
  dart.setFieldSignature(debug_overflow_indicator.DebugOverflowIndicatorMixin, () => ({
    __proto__: dart.getFields(debug_overflow_indicator.DebugOverflowIndicatorMixin.__proto__),
    [_indicatorLabel]: dart.finalFieldType(core.List$(text_painter.TextPainter)),
    [_overflowReportNeeded]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(debug_overflow_indicator.DebugOverflowIndicatorMixin, () => ['_black', '_yellow', '_indicatorFraction', '_indicatorFontSizePixels', '_indicatorLabelPaddingPixels', '_indicatorTextStyle', '_indicatorPaint', '_labelBackgroundPaint']);
  dart.defineLazy(debug_overflow_indicator.DebugOverflowIndicatorMixin, {
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._black*/get _black() {
      return C[9] || CT.C9;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._yellow*/get _yellow() {
      return C[10] || CT.C10;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorFraction*/get _indicatorFraction() {
      return 0.1;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorFontSizePixels*/get _indicatorFontSizePixels() {
      return 7.5;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorLabelPaddingPixels*/get _indicatorLabelPaddingPixels() {
      return 1;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorTextStyle*/get _indicatorTextStyle() {
      return C[11] || CT.C11;
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._indicatorPaint*/get _indicatorPaint() {
      let t4;
      return t4 = ui.Paint.new(), (() => {
        t4.shader = ui.Gradient.linear(ui.Offset.zero, C[14] || CT.C14, T.JSArrayOfColor().of([debug_overflow_indicator.DebugOverflowIndicatorMixin._black, debug_overflow_indicator.DebugOverflowIndicatorMixin._yellow, debug_overflow_indicator.DebugOverflowIndicatorMixin._yellow, debug_overflow_indicator.DebugOverflowIndicatorMixin._black]), T.JSArrayOfdouble().of([0.25, 0.25, 0.75, 0.75]), ui.TileMode.repeated);
        return t4;
      })();
    },
    /*debug_overflow_indicator.DebugOverflowIndicatorMixin._labelBackgroundPaint*/get _labelBackgroundPaint() {
      let t4;
      return t4 = ui.Paint.new(), (() => {
        t4.color = C[15] || CT.C15;
        return t4;
      })();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/debug_overflow_indicator.dart", {
    "package:flutter/src/rendering/debug_overflow_indicator.dart": debug_overflow_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug_overflow_indicator.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/debug_overflow_indicator.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__debug_overflow_indicator: debug_overflow_indicator
  };
}));

//# sourceMappingURL=debug_overflow_indicator.dart.lib.js.map
