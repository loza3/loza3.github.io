define(['dart_sdk', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/stack.dart', 'packages/flutter/src/rendering/debug_overflow_indicator.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__rendering__shifted_box_dart(dart_sdk, packages__flutter__src__rendering__box$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__stack$46dart, packages__flutter__src__rendering__debug_overflow_indicator$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  const debug_overflow_indicator = packages__flutter__src__rendering__debug_overflow_indicator$46dart.src__rendering__debug_overflow_indicator;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var shifted_box = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $isFinite = dartx.isFinite;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfEdgeInsetsGeometry: () => (T.DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    DiagnosticsPropertyOfAlignmentGeometry: () => (T.DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))(),
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    BoxConstraintsToBoxConstraints: () => (T.BoxConstraintsToBoxConstraints = dart.constFn(dart.fnType(box.BoxConstraints, [box.BoxConstraints])))(),
    EnumPropertyOfTextBaseline: () => (T.EnumPropertyOfTextBaseline = dart.constFn(diagnostics.EnumProperty$(ui.TextBaseline)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967040.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2425393296.0
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
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAlias",
        [_Enum_index]: 2
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAliasWithSaveLayer",
        [_Enum_index]: 3
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C8() {
      return C[8] = dart.fn(shifted_box.RenderUnconstrainedBox._unconstrained, T.BoxConstraintsToBoxConstraints());
    },
    get C9() {
      return C[9] = dart.fn(shifted_box.RenderUnconstrainedBox._widthConstrained, T.BoxConstraintsToBoxConstraints());
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.fn(shifted_box.RenderUnconstrainedBox._heightConstrained, T.BoxConstraintsToBoxConstraints());
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(13).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/shifted_box.dart",
    "package:flutter/src/rendering/shifted_box.dart"
  ];
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  shifted_box.RenderShiftedBox = class RenderShiftedBox extends RenderBox_RenderObjectWithChildMixin$36 {
    computeMinIntrinsicWidth(height) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
      }
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
      }
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getMinIntrinsicHeight(width);
      }
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
      }
      return 0.0;
    }
    computeDistanceToActualBaseline(baseline) {
      let result = null;
      if (this.child != null) {
        if (!!this.debugNeedsLayout) dart.assertFailed(null, I[0], 68, 14, "!debugNeedsLayout");
        result = dart.nullCheck(this.child).getDistanceToActualBaseline(baseline);
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        if (result != null) {
          result = dart.notNull(result) + childParentData.offset.dy;
        }
      } else {
        result = super.computeDistanceToActualBaseline(baseline);
      }
      return result;
    }
    paint(context, offset) {
      if (this.child != null) {
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        context.paintChild(dart.nullCheck(this.child), childParentData.offset['+'](offset));
      }
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this.child != null) {
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        return result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
            if (!transformed._equals(position['-'](childParentData.offset))) dart.assertFailed(null, I[0], 96, 18, "transformed == position - childParentData.offset");
            return dart.nullCheck(this.child).hitTest(result, {position: transformed});
          }, T.BoxHitTestResultAndOffsetTobool())});
      }
      return false;
    }
  };
  (shifted_box.RenderShiftedBox.new = function(child) {
    shifted_box.RenderShiftedBox.__proto__.new.call(this);
    this.child = child;
  }).prototype = shifted_box.RenderShiftedBox.prototype;
  dart.addTypeTests(shifted_box.RenderShiftedBox);
  dart.addTypeCaches(shifted_box.RenderShiftedBox);
  dart.setLibraryUri(shifted_box.RenderShiftedBox, I[1]);
  var _resolvedPadding = dart.privateName(shifted_box, "_resolvedPadding");
  var _textDirection = dart.privateName(shifted_box, "_textDirection");
  var _padding = dart.privateName(shifted_box, "_padding");
  var _resolve = dart.privateName(shifted_box, "_resolve");
  var _markNeedResolution = dart.privateName(shifted_box, "_markNeedResolution");
  shifted_box.RenderPadding = class RenderPadding extends shifted_box.RenderShiftedBox {
    static ['_#new#tearOff'](opts) {
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new shifted_box.RenderPadding.new({padding: padding, textDirection: textDirection, child: child});
    }
    [_resolve]() {
      if (this[_resolvedPadding] != null) {
        return;
      }
      this[_resolvedPadding] = this.padding.resolve(this.textDirection);
      if (!dart.nullCheck(this[_resolvedPadding]).isNonNegative) dart.assertFailed(null, I[0], 132, 12, "_resolvedPadding!.isNonNegative");
    }
    [_markNeedResolution]() {
      this[_resolvedPadding] = null;
      this.markNeedsLayout();
    }
    get padding() {
      return this[_padding];
    }
    set padding(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 147, 12, "value != null");
      if (!value.isNonNegative) dart.assertFailed(null, I[0], 148, 12, "value.isNonNegative");
      if (this[_padding]._equals(value)) {
        return;
      }
      this[_padding] = value;
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) {
        return;
      }
      this[_textDirection] = value;
      this[_markNeedResolution]();
    }
    computeMinIntrinsicWidth(height) {
      this[_resolve]();
      let totalHorizontalPadding = dart.nullCheck(this[_resolvedPadding]).left + dart.nullCheck(this[_resolvedPadding]).right;
      let totalVerticalPadding = dart.nullCheck(this[_resolvedPadding]).top + dart.nullCheck(this[_resolvedPadding]).bottom;
      if (this.child != null) {
        return dart.nullCheck(this.child).getMinIntrinsicWidth(math.max(core.double, 0.0, height - totalVerticalPadding)) + totalHorizontalPadding;
      }
      return totalHorizontalPadding;
    }
    computeMaxIntrinsicWidth(height) {
      this[_resolve]();
      let totalHorizontalPadding = dart.nullCheck(this[_resolvedPadding]).left + dart.nullCheck(this[_resolvedPadding]).right;
      let totalVerticalPadding = dart.nullCheck(this[_resolvedPadding]).top + dart.nullCheck(this[_resolvedPadding]).bottom;
      if (this.child != null) {
        return dart.nullCheck(this.child).getMaxIntrinsicWidth(math.max(core.double, 0.0, height - totalVerticalPadding)) + totalHorizontalPadding;
      }
      return totalHorizontalPadding;
    }
    computeMinIntrinsicHeight(width) {
      this[_resolve]();
      let totalHorizontalPadding = dart.nullCheck(this[_resolvedPadding]).left + dart.nullCheck(this[_resolvedPadding]).right;
      let totalVerticalPadding = dart.nullCheck(this[_resolvedPadding]).top + dart.nullCheck(this[_resolvedPadding]).bottom;
      if (this.child != null) {
        return dart.nullCheck(this.child).getMinIntrinsicHeight(math.max(core.double, 0.0, width - totalHorizontalPadding)) + totalVerticalPadding;
      }
      return totalVerticalPadding;
    }
    computeMaxIntrinsicHeight(width) {
      this[_resolve]();
      let totalHorizontalPadding = dart.nullCheck(this[_resolvedPadding]).left + dart.nullCheck(this[_resolvedPadding]).right;
      let totalVerticalPadding = dart.nullCheck(this[_resolvedPadding]).top + dart.nullCheck(this[_resolvedPadding]).bottom;
      if (this.child != null) {
        return dart.nullCheck(this.child).getMaxIntrinsicHeight(math.max(core.double, 0.0, width - totalHorizontalPadding)) + totalVerticalPadding;
      }
      return totalVerticalPadding;
    }
    computeDryLayout(constraints) {
      this[_resolve]();
      if (!(this[_resolvedPadding] != null)) dart.assertFailed(null, I[0], 221, 12, "_resolvedPadding != null");
      if (this.child == null) {
        return constraints.constrain(new ui.Size.new(dart.nullCheck(this[_resolvedPadding]).left + dart.nullCheck(this[_resolvedPadding]).right, dart.nullCheck(this[_resolvedPadding]).top + dart.nullCheck(this[_resolvedPadding]).bottom));
      }
      let innerConstraints = constraints.deflate(dart.nullCheck(this[_resolvedPadding]));
      let childSize = dart.nullCheck(this.child).getDryLayout(innerConstraints);
      return constraints.constrain(new ui.Size.new(dart.nullCheck(this[_resolvedPadding]).left + childSize.width + dart.nullCheck(this[_resolvedPadding]).right, dart.nullCheck(this[_resolvedPadding]).top + childSize.height + dart.nullCheck(this[_resolvedPadding]).bottom));
    }
    performLayout() {
      let constraints = this.constraints;
      this[_resolve]();
      if (!(this[_resolvedPadding] != null)) dart.assertFailed(null, I[0], 240, 12, "_resolvedPadding != null");
      if (this.child == null) {
        this.size = constraints.constrain(new ui.Size.new(dart.nullCheck(this[_resolvedPadding]).left + dart.nullCheck(this[_resolvedPadding]).right, dart.nullCheck(this[_resolvedPadding]).top + dart.nullCheck(this[_resolvedPadding]).bottom));
        return;
      }
      let innerConstraints = constraints.deflate(dart.nullCheck(this[_resolvedPadding]));
      dart.nullCheck(this.child).layout(innerConstraints, {parentUsesSize: true});
      let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      childParentData.offset = new ui.Offset.new(dart.nullCheck(this[_resolvedPadding]).left, dart.nullCheck(this[_resolvedPadding]).top);
      this.size = constraints.constrain(new ui.Size.new(dart.nullCheck(this[_resolvedPadding]).left + dart.nullCheck(this.child).size.width + dart.nullCheck(this[_resolvedPadding]).right, dart.nullCheck(this[_resolvedPadding]).top + dart.nullCheck(this.child).size.height + dart.nullCheck(this[_resolvedPadding]).bottom));
    }
    debugPaintSize(context, offset) {
      super.debugPaintSize(context, offset);
      if (!dart.fn(() => {
        let outerRect = offset['&'](this.size);
        debug.debugPaintPadding(context.canvas, outerRect, this.child != null ? dart.nullCheck(this[_resolvedPadding]).deflateRect(outerRect) : null);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 261, 12, "() {\n      final Rect outerRect = offset & size;\n      debugPaintPadding(context.canvas, outerRect, child != null ? _resolvedPadding!.deflateRect(outerRect) : null);\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (shifted_box.RenderPadding.new = function(opts) {
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_resolvedPadding] = null;
    if (!(padding !== null)) dart.assertFailed(null, I[0], 119, 15, "padding != null");
    if (!padding.isNonNegative) dart.assertFailed(null, I[0], 120, 15, "padding.isNonNegative");
    this[_textDirection] = textDirection;
    this[_padding] = padding;
    shifted_box.RenderPadding.__proto__.new.call(this, child);
    ;
  }).prototype = shifted_box.RenderPadding.prototype;
  dart.addTypeTests(shifted_box.RenderPadding);
  dart.addTypeCaches(shifted_box.RenderPadding);
  dart.setMethodSignature(shifted_box.RenderPadding, () => ({
    __proto__: dart.getMethods(shifted_box.RenderPadding.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(shifted_box.RenderPadding, () => ({
    __proto__: dart.getGetters(shifted_box.RenderPadding.__proto__),
    padding: edge_insets.EdgeInsetsGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setSetterSignature(shifted_box.RenderPadding, () => ({
    __proto__: dart.getSetters(shifted_box.RenderPadding.__proto__),
    padding: edge_insets.EdgeInsetsGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setLibraryUri(shifted_box.RenderPadding, I[1]);
  dart.setFieldSignature(shifted_box.RenderPadding, () => ({
    __proto__: dart.getFields(shifted_box.RenderPadding.__proto__),
    [_resolvedPadding]: dart.fieldType(dart.nullable(edge_insets.EdgeInsets)),
    [_padding]: dart.fieldType(edge_insets.EdgeInsetsGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection))
  }));
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var _resolvedAlignment = dart.privateName(shifted_box, "_resolvedAlignment");
  var _alignment = dart.privateName(shifted_box, "_alignment");
  shifted_box.RenderAligningShiftedBox = class RenderAligningShiftedBox extends shifted_box.RenderShiftedBox {
    [_resolve]() {
      if (this[_resolvedAlignment] != null) {
        return;
      }
      this[_resolvedAlignment] = this.alignment.resolve(this.textDirection);
    }
    [_markNeedResolution]() {
      this[_resolvedAlignment] = null;
      this.markNeedsLayout();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 326, 12, "value != null");
      if (this[_alignment]._equals(value)) {
        return;
      }
      this[_alignment] = value;
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) {
        return;
      }
      this[_textDirection] = value;
      this[_markNeedResolution]();
    }
    alignChild() {
      this[_resolve]();
      if (!(this.child != null)) dart.assertFailed(null, I[0], 359, 12, "child != null");
      if (!!dart.nullCheck(this.child).debugNeedsLayout) dart.assertFailed(null, I[0], 360, 12, "!child!.debugNeedsLayout");
      if (!dart.nullCheck(this.child).hasSize) dart.assertFailed(null, I[0], 361, 12, "child!.hasSize");
      if (!this.hasSize) dart.assertFailed(null, I[0], 362, 12, "hasSize");
      if (!(this[_resolvedAlignment] != null)) dart.assertFailed(null, I[0], 363, 12, "_resolvedAlignment != null");
      let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      childParentData.offset = dart.nullCheck(this[_resolvedAlignment]).alongOffset(ui.Offset.as(this.size['-'](dart.nullCheck(this.child).size)));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (shifted_box.RenderAligningShiftedBox.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_resolvedAlignment] = null;
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 289, 15, "alignment != null");
    this[_alignment] = alignment;
    this[_textDirection] = textDirection;
    shifted_box.RenderAligningShiftedBox.__proto__.new.call(this, child);
    ;
  }).prototype = shifted_box.RenderAligningShiftedBox.prototype;
  dart.addTypeTests(shifted_box.RenderAligningShiftedBox);
  dart.addTypeCaches(shifted_box.RenderAligningShiftedBox);
  dart.setMethodSignature(shifted_box.RenderAligningShiftedBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderAligningShiftedBox.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, []),
    alignChild: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(shifted_box.RenderAligningShiftedBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderAligningShiftedBox.__proto__),
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setSetterSignature(shifted_box.RenderAligningShiftedBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderAligningShiftedBox.__proto__),
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setLibraryUri(shifted_box.RenderAligningShiftedBox, I[1]);
  dart.setFieldSignature(shifted_box.RenderAligningShiftedBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderAligningShiftedBox.__proto__),
    [_resolvedAlignment]: dart.fieldType(dart.nullable(alignment.Alignment)),
    [_alignment]: dart.fieldType(alignment.AlignmentGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection))
  }));
  var _widthFactor = dart.privateName(shifted_box, "_widthFactor");
  var _heightFactor = dart.privateName(shifted_box, "_heightFactor");
  var Color_value = dart.privateName(ui, "Color.value");
  shifted_box.RenderPositionedBox = class RenderPositionedBox extends shifted_box.RenderAligningShiftedBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
      let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new shifted_box.RenderPositionedBox.new({child: child, widthFactor: widthFactor, heightFactor: heightFactor, alignment: alignment, textDirection: textDirection});
    }
    get widthFactor() {
      return this[_widthFactor];
    }
    set widthFactor(value) {
      if (!(value == null || dart.notNull(value) >= 0.0)) dart.assertFailed(null, I[0], 405, 12, "value == null || value >= 0.0");
      if (this[_widthFactor] == value) {
        return;
      }
      this[_widthFactor] = value;
      this.markNeedsLayout();
    }
    get heightFactor() {
      return this[_heightFactor];
    }
    set heightFactor(value) {
      if (!(value == null || dart.notNull(value) >= 0.0)) dart.assertFailed(null, I[0], 419, 12, "value == null || value >= 0.0");
      if (this[_heightFactor] == value) {
        return;
      }
      this[_heightFactor] = value;
      this.markNeedsLayout();
    }
    computeDryLayout(constraints) {
      let t0, t0$;
      let shrinkWrapWidth = this[_widthFactor] != null || constraints.maxWidth === 1 / 0;
      let shrinkWrapHeight = this[_heightFactor] != null || constraints.maxHeight === 1 / 0;
      if (this.child != null) {
        let childSize = dart.nullCheck(this.child).getDryLayout(constraints.loosen());
        return constraints.constrain(new ui.Size.new(shrinkWrapWidth ? childSize.width * dart.notNull((t0 = this[_widthFactor], t0 == null ? 1.0 : t0)) : 1 / 0, shrinkWrapHeight ? childSize.height * dart.notNull((t0$ = this[_heightFactor], t0$ == null ? 1.0 : t0$)) : 1 / 0));
      }
      return constraints.constrain(new ui.Size.new(shrinkWrapWidth ? 0.0 : 1 / 0, shrinkWrapHeight ? 0.0 : 1 / 0));
    }
    performLayout() {
      let t0, t0$;
      let constraints = this.constraints;
      let shrinkWrapWidth = this[_widthFactor] != null || constraints.maxWidth === 1 / 0;
      let shrinkWrapHeight = this[_heightFactor] != null || constraints.maxHeight === 1 / 0;
      if (this.child != null) {
        dart.nullCheck(this.child).layout(constraints.loosen(), {parentUsesSize: true});
        this.size = constraints.constrain(new ui.Size.new(shrinkWrapWidth ? dart.nullCheck(this.child).size.width * dart.notNull((t0 = this[_widthFactor], t0 == null ? 1.0 : t0)) : 1 / 0, shrinkWrapHeight ? dart.nullCheck(this.child).size.height * dart.notNull((t0$ = this[_heightFactor], t0$ == null ? 1.0 : t0$)) : 1 / 0));
        this.alignChild();
      } else {
        this.size = constraints.constrain(new ui.Size.new(shrinkWrapWidth ? 0.0 : 1 / 0, shrinkWrapHeight ? 0.0 : 1 / 0));
      }
    }
    debugPaintSize(context, offset) {
      super.debugPaintSize(context, offset);
      if (!dart.fn(() => {
        let t0, t0$, t0$0, t0$1;
        let paint = null;
        if (this.child != null && !dart.nullCheck(this.child).size.isEmpty) {
          let path = null;
          paint = (t0 = ui.Paint.new(), (() => {
            t0.style = ui.PaintingStyle.stroke;
            t0.strokeWidth = 1.0;
            t0.color = C[1] || CT.C1;
            return t0;
          })());
          path = ui.Path.new();
          let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
          if (childParentData.offset.dy > 0.0) {
            let headSize = math.min(core.double, childParentData.offset.dy * 0.2, 10.0);
            t0$ = path;
            (() => {
              t0$.moveTo(offset.dx + this.size.width / 2.0, offset.dy);
              t0$.relativeLineTo(0.0, childParentData.offset.dy - headSize);
              t0$.relativeLineTo(headSize, 0.0);
              t0$.relativeLineTo(-headSize, headSize);
              t0$.relativeLineTo(-headSize, -headSize);
              t0$.relativeLineTo(headSize, 0.0);
              t0$.moveTo(offset.dx + this.size.width / 2.0, offset.dy + this.size.height);
              t0$.relativeLineTo(0.0, -childParentData.offset.dy + headSize);
              t0$.relativeLineTo(headSize, 0.0);
              t0$.relativeLineTo(-headSize, -headSize);
              t0$.relativeLineTo(-headSize, headSize);
              t0$.relativeLineTo(headSize, 0.0);
              return t0$;
            })();
            context.canvas.drawPath(path, paint);
          }
          if (childParentData.offset.dx > 0.0) {
            let headSize = math.min(core.double, childParentData.offset.dx * 0.2, 10.0);
            t0$0 = path;
            (() => {
              t0$0.moveTo(offset.dx, offset.dy + this.size.height / 2.0);
              t0$0.relativeLineTo(childParentData.offset.dx - headSize, 0.0);
              t0$0.relativeLineTo(0.0, headSize);
              t0$0.relativeLineTo(headSize, -headSize);
              t0$0.relativeLineTo(-headSize, -headSize);
              t0$0.relativeLineTo(0.0, headSize);
              t0$0.moveTo(offset.dx + this.size.width, offset.dy + this.size.height / 2.0);
              t0$0.relativeLineTo(-childParentData.offset.dx + headSize, 0.0);
              t0$0.relativeLineTo(0.0, headSize);
              t0$0.relativeLineTo(-headSize, -headSize);
              t0$0.relativeLineTo(headSize, -headSize);
              t0$0.relativeLineTo(0.0, headSize);
              return t0$0;
            })();
            context.canvas.drawPath(path, paint);
          }
        } else {
          paint = (t0$1 = ui.Paint.new(), (() => {
            t0$1.color = C[2] || CT.C2;
            return t0$1;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 468, 12, "() {\n      final Paint paint;\n      if (child != null && !child!.size.isEmpty) {\n        final Path path;\n        paint = Paint()\n          ..style = PaintingStyle.stroke\n          ..strokeWidth = 1.0\n          ..color = const Color(0xFFFFFF00);\n        path = Path();\n        final BoxParentData childParentData = child!.parentData! as BoxParentData;\n        if (childParentData.offset.dy > 0.0) {\n          // vertical alignment arrows\n          final double headSize = math.min(childParentData.offset.dy * 0.2, 10.0);\n          path\n            ..moveTo(offset.dx + size.width / 2.0, offset.dy)\n            ..relativeLineTo(0.0, childParentData.offset.dy - headSize)\n            ..relativeLineTo(headSize, 0.0)\n            ..relativeLineTo(-headSize, headSize)\n            ..relativeLineTo(-headSize, -headSize)\n            ..relativeLineTo(headSize, 0.0)\n            ..moveTo(offset.dx + size.width / 2.0, offset.dy + size.height)\n            ..relativeLineTo(0.0, -childParentData.offset.dy + headSize)\n            ..relativeLineTo(headSize, 0.0)\n            ..relativeLineTo(-headSize, -headSize)\n            ..relativeLineTo(-headSize, headSize)\n            ..relativeLineTo(headSize, 0.0);\n          context.canvas.drawPath(path, paint);\n        }\n        if (childParentData.offset.dx > 0.0) {\n          // horizontal alignment arrows\n          final double headSize = math.min(childParentData.offset.dx * 0.2, 10.0);\n          path\n            ..moveTo(offset.dx, offset.dy + size.height / 2.0)\n            ..relativeLineTo(childParentData.offset.dx - headSize, 0.0)\n            ..relativeLineTo(0.0, headSize)\n            ..relativeLineTo(headSize, -headSize)\n            ..relativeLineTo(-headSize, -headSize)\n            ..relativeLineTo(0.0, headSize)\n            ..moveTo(offset.dx + size.width, offset.dy + size.height / 2.0)\n            ..relativeLineTo(-childParentData.offset.dx + headSize, 0.0)\n            ..relativeLineTo(0.0, headSize)\n            ..relativeLineTo(-headSize, -headSize)\n            ..relativeLineTo(headSize, -headSize)\n            ..relativeLineTo(0.0, headSize);\n          context.canvas.drawPath(path, paint);\n        }\n      } else {\n        paint = Paint()\n          ..color = const Color(0x90909090);\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("widthFactor", this[_widthFactor], {ifNull: "expand"}));
      properties.add(new diagnostics.DoubleProperty.new("heightFactor", this[_heightFactor], {ifNull: "expand"}));
    }
  };
  (shifted_box.RenderPositionedBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
    let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (!(widthFactor == null || dart.notNull(widthFactor) >= 0.0)) dart.assertFailed(null, I[0], 394, 15, "widthFactor == null || widthFactor >= 0.0");
    if (!(heightFactor == null || dart.notNull(heightFactor) >= 0.0)) dart.assertFailed(null, I[0], 395, 15, "heightFactor == null || heightFactor >= 0.0");
    this[_widthFactor] = widthFactor;
    this[_heightFactor] = heightFactor;
    shifted_box.RenderPositionedBox.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    ;
  }).prototype = shifted_box.RenderPositionedBox.prototype;
  dart.addTypeTests(shifted_box.RenderPositionedBox);
  dart.addTypeCaches(shifted_box.RenderPositionedBox);
  dart.setGetterSignature(shifted_box.RenderPositionedBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderPositionedBox.__proto__),
    widthFactor: dart.nullable(core.double),
    heightFactor: dart.nullable(core.double)
  }));
  dart.setSetterSignature(shifted_box.RenderPositionedBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderPositionedBox.__proto__),
    widthFactor: dart.nullable(core.double),
    heightFactor: dart.nullable(core.double)
  }));
  dart.setLibraryUri(shifted_box.RenderPositionedBox, I[1]);
  dart.setFieldSignature(shifted_box.RenderPositionedBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderPositionedBox.__proto__),
    [_widthFactor]: dart.fieldType(dart.nullable(core.double)),
    [_heightFactor]: dart.fieldType(dart.nullable(core.double))
  }));
  var _minWidth = dart.privateName(shifted_box, "_minWidth");
  var _maxWidth = dart.privateName(shifted_box, "_maxWidth");
  var _minHeight = dart.privateName(shifted_box, "_minHeight");
  var _maxHeight = dart.privateName(shifted_box, "_maxHeight");
  var _getInnerConstraints = dart.privateName(shifted_box, "_getInnerConstraints");
  shifted_box.RenderConstrainedOverflowBox = class RenderConstrainedOverflowBox extends shifted_box.RenderAligningShiftedBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
      let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new shifted_box.RenderConstrainedOverflowBox.new({child: child, minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight, alignment: alignment, textDirection: textDirection});
    }
    get minWidth() {
      return this[_minWidth];
    }
    set minWidth(value) {
      if (this[_minWidth] == value) {
        return;
      }
      this[_minWidth] = value;
      this.markNeedsLayout();
    }
    get maxWidth() {
      return this[_maxWidth];
    }
    set maxWidth(value) {
      if (this[_maxWidth] == value) {
        return;
      }
      this[_maxWidth] = value;
      this.markNeedsLayout();
    }
    get minHeight() {
      return this[_minHeight];
    }
    set minHeight(value) {
      if (this[_minHeight] == value) {
        return;
      }
      this[_minHeight] = value;
      this.markNeedsLayout();
    }
    get maxHeight() {
      return this[_maxHeight];
    }
    set maxHeight(value) {
      if (this[_maxHeight] == value) {
        return;
      }
      this[_maxHeight] = value;
      this.markNeedsLayout();
    }
    [_getInnerConstraints](constraints) {
      let t0, t0$, t0$0, t0$1;
      return new box.BoxConstraints.new({minWidth: (t0 = this[_minWidth], t0 == null ? constraints.minWidth : t0), maxWidth: (t0$ = this[_maxWidth], t0$ == null ? constraints.maxWidth : t0$), minHeight: (t0$0 = this[_minHeight], t0$0 == null ? constraints.minHeight : t0$0), maxHeight: (t0$1 = this[_maxHeight], t0$1 == null ? constraints.maxHeight : t0$1)});
    }
    get sizedByParent() {
      return true;
    }
    computeDryLayout(constraints) {
      return constraints.biggest;
    }
    performLayout() {
      let t0;
      if (this.child != null) {
        t0 = this.child;
        t0 == null ? null : t0.layout(this[_getInnerConstraints](this.constraints), {parentUsesSize: true});
        this.alignChild();
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("minWidth", this.minWidth, {ifNull: "use parent minWidth constraint"}));
      properties.add(new diagnostics.DoubleProperty.new("maxWidth", this.maxWidth, {ifNull: "use parent maxWidth constraint"}));
      properties.add(new diagnostics.DoubleProperty.new("minHeight", this.minHeight, {ifNull: "use parent minHeight constraint"}));
      properties.add(new diagnostics.DoubleProperty.new("maxHeight", this.maxHeight, {ifNull: "use parent maxHeight constraint"}));
    }
  };
  (shifted_box.RenderConstrainedOverflowBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[_minWidth] = minWidth;
    this[_maxWidth] = maxWidth;
    this[_minHeight] = minHeight;
    this[_maxHeight] = maxHeight;
    shifted_box.RenderConstrainedOverflowBox.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    ;
  }).prototype = shifted_box.RenderConstrainedOverflowBox.prototype;
  dart.addTypeTests(shifted_box.RenderConstrainedOverflowBox);
  dart.addTypeCaches(shifted_box.RenderConstrainedOverflowBox);
  dart.setMethodSignature(shifted_box.RenderConstrainedOverflowBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderConstrainedOverflowBox.__proto__),
    [_getInnerConstraints]: dart.fnType(box.BoxConstraints, [box.BoxConstraints])
  }));
  dart.setGetterSignature(shifted_box.RenderConstrainedOverflowBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderConstrainedOverflowBox.__proto__),
    minWidth: dart.nullable(core.double),
    maxWidth: dart.nullable(core.double),
    minHeight: dart.nullable(core.double),
    maxHeight: dart.nullable(core.double)
  }));
  dart.setSetterSignature(shifted_box.RenderConstrainedOverflowBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderConstrainedOverflowBox.__proto__),
    minWidth: dart.nullable(core.double),
    maxWidth: dart.nullable(core.double),
    minHeight: dart.nullable(core.double),
    maxHeight: dart.nullable(core.double)
  }));
  dart.setLibraryUri(shifted_box.RenderConstrainedOverflowBox, I[1]);
  dart.setFieldSignature(shifted_box.RenderConstrainedOverflowBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderConstrainedOverflowBox.__proto__),
    [_minWidth]: dart.fieldType(dart.nullable(core.double)),
    [_maxWidth]: dart.fieldType(dart.nullable(core.double)),
    [_minHeight]: dart.fieldType(dart.nullable(core.double)),
    [_maxHeight]: dart.fieldType(dart.nullable(core.double))
  }));
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _overflowContainerRect = dart.privateName(shifted_box, "_overflowContainerRect");
  var _overflowChildRect = dart.privateName(shifted_box, "_overflowChildRect");
  var _isOverflowing = dart.privateName(shifted_box, "_isOverflowing");
  var _childConstraints = dart.privateName(shifted_box, "_childConstraints");
  var _clipRectLayer = dart.privateName(shifted_box, "_clipRectLayer");
  var _constraintsTransform = dart.privateName(shifted_box, "_constraintsTransform");
  var _clipBehavior = dart.privateName(shifted_box, "_clipBehavior");
  const RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36 = class RenderAligningShiftedBox_DebugOverflowIndicatorMixin extends shifted_box.RenderAligningShiftedBox {};
  (RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.new = function(opts) {
    debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinNew].call(this);
    RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36.prototype;
  dart.applyMixin(RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36, debug_overflow_indicator.DebugOverflowIndicatorMixin);
  shifted_box.RenderConstraintsTransformBox = class RenderConstraintsTransformBox extends RenderAligningShiftedBox_DebugOverflowIndicatorMixin$36 {
    static ['_#new#tearOff'](opts) {
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let constraintsTransform = opts && 'constraintsTransform' in opts ? opts.constraintsTransform : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      return new shifted_box.RenderConstraintsTransformBox.new({alignment: alignment, textDirection: textDirection, constraintsTransform: constraintsTransform, child: child, clipBehavior: clipBehavior});
    }
    get constraintsTransform() {
      return this[_constraintsTransform];
    }
    set constraintsTransform(value) {
      if (this[_constraintsTransform][$_equals](value)) {
        return;
      }
      this[_constraintsTransform] = value;
      let needsLayout = this[_childConstraints] == null || !dart.equals(this[_childConstraints], value(this.constraints));
      if (needsLayout) {
        this.markNeedsLayout();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 739, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    computeMinIntrinsicHeight(width) {
      let t0;
      return super.computeMinIntrinsicHeight((t0 = new box.BoxConstraints.new({maxWidth: width}), this.constraintsTransform(t0)).maxWidth);
    }
    computeMaxIntrinsicHeight(width) {
      let t0;
      return super.computeMaxIntrinsicHeight((t0 = new box.BoxConstraints.new({maxWidth: width}), this.constraintsTransform(t0)).maxWidth);
    }
    computeMinIntrinsicWidth(height) {
      let t0;
      return super.computeMinIntrinsicWidth((t0 = new box.BoxConstraints.new({maxHeight: height}), this.constraintsTransform(t0)).maxHeight);
    }
    computeMaxIntrinsicWidth(height) {
      let t0;
      return super.computeMaxIntrinsicWidth((t0 = new box.BoxConstraints.new({maxHeight: height}), this.constraintsTransform(t0)).maxHeight);
    }
    computeDryLayout(constraints) {
      let t1, t0;
      let childSize = (t0 = this.child, t0 == null ? null : t0.getDryLayout((t1 = constraints, this.constraintsTransform(t1))));
      return childSize == null ? constraints.smallest : constraints.constrain(childSize);
    }
    performLayout() {
      let t0;
      let constraints = this.constraints;
      let child = this.child;
      if (child != null) {
        let childConstraints = (t0 = constraints, this.constraintsTransform(t0));
        if (!(childConstraints !== null)) dart.assertFailed(null, I[0], 793, 14, "childConstraints != null");
        if (!childConstraints.isNormalized) dart.assertFailed(dart.str(childConstraints) + " is not normalized", I[0], 794, 14, "childConstraints.isNormalized");
        this[_childConstraints] = childConstraints;
        child.layout(childConstraints, {parentUsesSize: true});
        this.size = constraints.constrain(child.size);
        this.alignChild();
        let childParentData = box.BoxParentData.as(dart.nullCheck(child.parentData));
        this[_overflowContainerRect] = ui.Offset.zero['&'](this.size);
        this[_overflowChildRect] = childParentData.offset['&'](child.size);
      } else {
        this.size = constraints.smallest;
        this[_overflowContainerRect] = ui.Rect.zero;
        this[_overflowChildRect] = ui.Rect.zero;
      }
      this[_isOverflowing] = stack.RelativeRect.fromRect(this[_overflowContainerRect], this[_overflowChildRect]).hasInsets;
    }
    paint(context, offset) {
      if (this.child == null || this.size.isEmpty) {
        return;
      }
      if (!this[_isOverflowing]) {
        super.paint(context, offset);
        return;
      }
      this[_clipRectLayer].layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
      if (!dart.fn(() => {
        this.paintOverflowIndicator(context, offset, this[_overflowContainerRect], this[_overflowChildRect]);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 834, 12, "() {\n      paintOverflowIndicator(context, offset, _overflowContainerRect, _overflowChildRect);\n      return true;\n    }()");
    }
    dispose() {
      this[_clipRectLayer].layer = null;
      super.dispose();
    }
    describeApproximatePaintClip(child) {
      object.RenderObject.as(child);
      switch (this.clipBehavior) {
        case C[3] || CT.C3:
          {
            return null;
          }
        case C[4] || CT.C4:
        case C[5] || CT.C5:
        case C[6] || CT.C6:
          {
            return this[_isOverflowing] ? ui.Offset.zero['&'](this.size) : null;
          }
      }
    }
    toStringShort() {
      let header = super.toStringShort();
      {
        if (this[_isOverflowing]) {
          header = header + " OVERFLOWING";
        }
      }
      return header;
    }
  };
  (shifted_box.RenderConstraintsTransformBox.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let constraintsTransform = opts && 'constraintsTransform' in opts ? opts.constraintsTransform : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    this[_overflowContainerRect] = ui.Rect.zero;
    this[_overflowChildRect] = ui.Rect.zero;
    this[_isOverflowing] = false;
    this[_childConstraints] = null;
    this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 709, 15, "alignment != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 710, 15, "clipBehavior != null");
    if (!(constraintsTransform !== null)) dart.assertFailed(null, I[0], 711, 15, "constraintsTransform != null");
    this[_constraintsTransform] = constraintsTransform;
    this[_clipBehavior] = clipBehavior;
    shifted_box.RenderConstraintsTransformBox.__proto__.new.call(this, {alignment: alignment, textDirection: textDirection, child: child});
    ;
  }).prototype = shifted_box.RenderConstraintsTransformBox.prototype;
  dart.addTypeTests(shifted_box.RenderConstraintsTransformBox);
  dart.addTypeCaches(shifted_box.RenderConstraintsTransformBox);
  dart.setGetterSignature(shifted_box.RenderConstraintsTransformBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderConstraintsTransformBox.__proto__),
    constraintsTransform: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(shifted_box.RenderConstraintsTransformBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderConstraintsTransformBox.__proto__),
    constraintsTransform: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(shifted_box.RenderConstraintsTransformBox, I[1]);
  dart.setFieldSignature(shifted_box.RenderConstraintsTransformBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderConstraintsTransformBox.__proto__),
    [_constraintsTransform]: dart.fieldType(dart.fnType(box.BoxConstraints, [box.BoxConstraints])),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_overflowContainerRect]: dart.fieldType(ui.Rect),
    [_overflowChildRect]: dart.fieldType(ui.Rect),
    [_isOverflowing]: dart.fieldType(core.bool),
    [_childConstraints]: dart.fieldType(dart.nullable(box.BoxConstraints)),
    [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
  }));
  var _constrainedAxis = dart.privateName(shifted_box, "_constrainedAxis");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  shifted_box.RenderUnconstrainedBox = class RenderUnconstrainedBox extends shifted_box.RenderConstraintsTransformBox {
    static ['_#new#tearOff'](opts) {
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let constrainedAxis = opts && 'constrainedAxis' in opts ? opts.constrainedAxis : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new shifted_box.RenderUnconstrainedBox.new({alignment: alignment, textDirection: textDirection, constrainedAxis: constrainedAxis, child: child, clipBehavior: clipBehavior});
    }
    get constrainedAxis() {
      return this[_constrainedAxis];
    }
    set constrainedAxis(value) {
      if (this[_constrainedAxis] == value) {
        return;
      }
      this[_constrainedAxis] = value;
      this.constraintsTransform = shifted_box.RenderUnconstrainedBox._convertAxis(this.constrainedAxis);
    }
    static _unconstrained(constraints) {
      return C[7] || CT.C7;
    }
    static _widthConstrained(constraints) {
      return constraints.widthConstraints();
    }
    static _heightConstrained(constraints) {
      return constraints.heightConstraints();
    }
    static _convertAxis(constrainedAxis) {
      if (constrainedAxis == null) {
        return C[8] || CT.C8;
      }
      switch (constrainedAxis) {
        case C[10] || CT.C10:
          {
            return C[9] || CT.C9;
          }
        case C[12] || CT.C12:
          {
            return C[11] || CT.C11;
          }
      }
    }
  };
  (shifted_box.RenderUnconstrainedBox.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let constrainedAxis = opts && 'constrainedAxis' in opts ? opts.constrainedAxis : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 918, 15, "alignment != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 919, 15, "clipBehavior != null");
    this[_constrainedAxis] = constrainedAxis;
    shifted_box.RenderUnconstrainedBox.__proto__.new.call(this, {constraintsTransform: shifted_box.RenderUnconstrainedBox._convertAxis(constrainedAxis), alignment: alignment, textDirection: textDirection, child: child, clipBehavior: clipBehavior});
    ;
  }).prototype = shifted_box.RenderUnconstrainedBox.prototype;
  dart.addTypeTests(shifted_box.RenderUnconstrainedBox);
  dart.addTypeCaches(shifted_box.RenderUnconstrainedBox);
  dart.setStaticMethodSignature(shifted_box.RenderUnconstrainedBox, () => ['_unconstrained', '_widthConstrained', '_heightConstrained', '_convertAxis']);
  dart.setGetterSignature(shifted_box.RenderUnconstrainedBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderUnconstrainedBox.__proto__),
    constrainedAxis: dart.nullable(basic_types.Axis)
  }));
  dart.setSetterSignature(shifted_box.RenderUnconstrainedBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderUnconstrainedBox.__proto__),
    constrainedAxis: dart.nullable(basic_types.Axis)
  }));
  dart.setLibraryUri(shifted_box.RenderUnconstrainedBox, I[1]);
  dart.setFieldSignature(shifted_box.RenderUnconstrainedBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderUnconstrainedBox.__proto__),
    [_constrainedAxis]: dart.fieldType(dart.nullable(basic_types.Axis))
  }));
  var _requestedSize = dart.privateName(shifted_box, "_requestedSize");
  shifted_box.RenderSizedOverflowBox = class RenderSizedOverflowBox extends shifted_box.RenderAligningShiftedBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let requestedSize = opts && 'requestedSize' in opts ? opts.requestedSize : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new shifted_box.RenderSizedOverflowBox.new({child: child, requestedSize: requestedSize, alignment: alignment, textDirection: textDirection});
    }
    get requestedSize() {
      return this[_requestedSize];
    }
    set requestedSize(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 990, 12, "value != null");
      if (this[_requestedSize]._equals(value)) {
        return;
      }
      this[_requestedSize] = value;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      return this[_requestedSize].width;
    }
    computeMaxIntrinsicWidth(height) {
      return this[_requestedSize].width;
    }
    computeMinIntrinsicHeight(width) {
      return this[_requestedSize].height;
    }
    computeMaxIntrinsicHeight(width) {
      return this[_requestedSize].height;
    }
    computeDistanceToActualBaseline(baseline) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getDistanceToActualBaseline(baseline);
      }
      return super.computeDistanceToActualBaseline(baseline);
    }
    computeDryLayout(constraints) {
      return constraints.constrain(this[_requestedSize]);
    }
    performLayout() {
      this.size = this.constraints.constrain(this[_requestedSize]);
      if (this.child != null) {
        dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
        this.alignChild();
      }
    }
  };
  (shifted_box.RenderSizedOverflowBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let requestedSize = opts && 'requestedSize' in opts ? opts.requestedSize : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (!(requestedSize !== null)) dart.assertFailed(null, I[0], 983, 15, "requestedSize != null");
    this[_requestedSize] = requestedSize;
    shifted_box.RenderSizedOverflowBox.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    ;
  }).prototype = shifted_box.RenderSizedOverflowBox.prototype;
  dart.addTypeTests(shifted_box.RenderSizedOverflowBox);
  dart.addTypeCaches(shifted_box.RenderSizedOverflowBox);
  dart.setGetterSignature(shifted_box.RenderSizedOverflowBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderSizedOverflowBox.__proto__),
    requestedSize: ui.Size
  }));
  dart.setSetterSignature(shifted_box.RenderSizedOverflowBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderSizedOverflowBox.__proto__),
    requestedSize: ui.Size
  }));
  dart.setLibraryUri(shifted_box.RenderSizedOverflowBox, I[1]);
  dart.setFieldSignature(shifted_box.RenderSizedOverflowBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderSizedOverflowBox.__proto__),
    [_requestedSize]: dart.fieldType(ui.Size)
  }));
  shifted_box.RenderFractionallySizedOverflowBox = class RenderFractionallySizedOverflowBox extends shifted_box.RenderAligningShiftedBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
      let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new shifted_box.RenderFractionallySizedOverflowBox.new({child: child, widthFactor: widthFactor, heightFactor: heightFactor, alignment: alignment, textDirection: textDirection});
    }
    get widthFactor() {
      return this[_widthFactor];
    }
    set widthFactor(value) {
      if (!(value == null || dart.notNull(value) >= 0.0)) dart.assertFailed(null, I[0], 1082, 12, "value == null || value >= 0.0");
      if (this[_widthFactor] == value) {
        return;
      }
      this[_widthFactor] = value;
      this.markNeedsLayout();
    }
    get heightFactor() {
      return this[_heightFactor];
    }
    set heightFactor(value) {
      if (!(value == null || dart.notNull(value) >= 0.0)) dart.assertFailed(null, I[0], 1098, 12, "value == null || value >= 0.0");
      if (this[_heightFactor] == value) {
        return;
      }
      this[_heightFactor] = value;
      this.markNeedsLayout();
    }
    [_getInnerConstraints](constraints) {
      let minWidth = constraints.minWidth;
      let maxWidth = constraints.maxWidth;
      if (this[_widthFactor] != null) {
        let width = maxWidth * dart.nullCheck(this[_widthFactor]);
        minWidth = width;
        maxWidth = width;
      }
      let minHeight = constraints.minHeight;
      let maxHeight = constraints.maxHeight;
      if (this[_heightFactor] != null) {
        let height = maxHeight * dart.nullCheck(this[_heightFactor]);
        minHeight = height;
        maxHeight = height;
      }
      return new box.BoxConstraints.new({minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight});
    }
    computeMinIntrinsicWidth(height) {
      let t0, t0$;
      let result = null;
      if (this.child == null) {
        result = super.computeMinIntrinsicWidth(height);
      } else {
        result = dart.nullCheck(this.child).getMinIntrinsicWidth(height * dart.notNull((t0 = this[_heightFactor], t0 == null ? 1.0 : t0)));
      }
      if (!result[$isFinite]) dart.assertFailed(null, I[0], 1137, 12, "result.isFinite");
      return result / dart.notNull((t0$ = this[_widthFactor], t0$ == null ? 1.0 : t0$));
    }
    computeMaxIntrinsicWidth(height) {
      let t0, t0$;
      let result = null;
      if (this.child == null) {
        result = super.computeMaxIntrinsicWidth(height);
      } else {
        result = dart.nullCheck(this.child).getMaxIntrinsicWidth(height * dart.notNull((t0 = this[_heightFactor], t0 == null ? 1.0 : t0)));
      }
      if (!result[$isFinite]) dart.assertFailed(null, I[0], 1149, 12, "result.isFinite");
      return result / dart.notNull((t0$ = this[_widthFactor], t0$ == null ? 1.0 : t0$));
    }
    computeMinIntrinsicHeight(width) {
      let t0, t0$;
      let result = null;
      if (this.child == null) {
        result = super.computeMinIntrinsicHeight(width);
      } else {
        result = dart.nullCheck(this.child).getMinIntrinsicHeight(width * dart.notNull((t0 = this[_widthFactor], t0 == null ? 1.0 : t0)));
      }
      if (!result[$isFinite]) dart.assertFailed(null, I[0], 1161, 12, "result.isFinite");
      return result / dart.notNull((t0$ = this[_heightFactor], t0$ == null ? 1.0 : t0$));
    }
    computeMaxIntrinsicHeight(width) {
      let t0, t0$;
      let result = null;
      if (this.child == null) {
        result = super.computeMaxIntrinsicHeight(width);
      } else {
        result = dart.nullCheck(this.child).getMaxIntrinsicHeight(width * dart.notNull((t0 = this[_widthFactor], t0 == null ? 1.0 : t0)));
      }
      if (!result[$isFinite]) dart.assertFailed(null, I[0], 1173, 12, "result.isFinite");
      return result / dart.notNull((t0$ = this[_heightFactor], t0$ == null ? 1.0 : t0$));
    }
    computeDryLayout(constraints) {
      if (this.child != null) {
        let childSize = dart.nullCheck(this.child).getDryLayout(this[_getInnerConstraints](constraints));
        return constraints.constrain(childSize);
      }
      return constraints.constrain(this[_getInnerConstraints](constraints).constrain(ui.Size.zero));
    }
    performLayout() {
      if (this.child != null) {
        dart.nullCheck(this.child).layout(this[_getInnerConstraints](this.constraints), {parentUsesSize: true});
        this.size = this.constraints.constrain(dart.nullCheck(this.child).size);
        this.alignChild();
      } else {
        this.size = this.constraints.constrain(this[_getInnerConstraints](this.constraints).constrain(ui.Size.zero));
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("widthFactor", this[_widthFactor], {ifNull: "pass-through"}));
      properties.add(new diagnostics.DoubleProperty.new("heightFactor", this[_heightFactor], {ifNull: "pass-through"}));
    }
  };
  (shifted_box.RenderFractionallySizedOverflowBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
    let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[_widthFactor] = widthFactor;
    this[_heightFactor] = heightFactor;
    shifted_box.RenderFractionallySizedOverflowBox.__proto__.new.call(this, {child: child, alignment: alignment, textDirection: textDirection});
    if (!(this[_widthFactor] == null || dart.nullCheck(this[_widthFactor]) >= 0.0)) dart.assertFailed(null, I[0], 1070, 12, "_widthFactor == null || _widthFactor! >= 0.0");
    if (!(this[_heightFactor] == null || dart.nullCheck(this[_heightFactor]) >= 0.0)) dart.assertFailed(null, I[0], 1071, 12, "_heightFactor == null || _heightFactor! >= 0.0");
  }).prototype = shifted_box.RenderFractionallySizedOverflowBox.prototype;
  dart.addTypeTests(shifted_box.RenderFractionallySizedOverflowBox);
  dart.addTypeCaches(shifted_box.RenderFractionallySizedOverflowBox);
  dart.setMethodSignature(shifted_box.RenderFractionallySizedOverflowBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderFractionallySizedOverflowBox.__proto__),
    [_getInnerConstraints]: dart.fnType(box.BoxConstraints, [box.BoxConstraints])
  }));
  dart.setGetterSignature(shifted_box.RenderFractionallySizedOverflowBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderFractionallySizedOverflowBox.__proto__),
    widthFactor: dart.nullable(core.double),
    heightFactor: dart.nullable(core.double)
  }));
  dart.setSetterSignature(shifted_box.RenderFractionallySizedOverflowBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderFractionallySizedOverflowBox.__proto__),
    widthFactor: dart.nullable(core.double),
    heightFactor: dart.nullable(core.double)
  }));
  dart.setLibraryUri(shifted_box.RenderFractionallySizedOverflowBox, I[1]);
  dart.setFieldSignature(shifted_box.RenderFractionallySizedOverflowBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderFractionallySizedOverflowBox.__proto__),
    [_widthFactor]: dart.fieldType(dart.nullable(core.double)),
    [_heightFactor]: dart.fieldType(dart.nullable(core.double))
  }));
  var _relayout = dart.privateName(shifted_box, "SingleChildLayoutDelegate._relayout");
  var _relayout$ = dart.privateName(shifted_box, "_relayout");
  shifted_box.SingleChildLayoutDelegate = class SingleChildLayoutDelegate extends core.Object {
    get [_relayout$]() {
      return this[_relayout];
    }
    set [_relayout$](value) {
      super[_relayout$] = value;
    }
    getSize(constraints) {
      return constraints.biggest;
    }
    getConstraintsForChild(constraints) {
      return constraints;
    }
    getPositionForChild(size, childSize) {
      return ui.Offset.zero;
    }
  };
  (shifted_box.SingleChildLayoutDelegate.new = function(opts) {
    let relayout = opts && 'relayout' in opts ? opts.relayout : null;
    this[_relayout] = relayout;
    ;
  }).prototype = shifted_box.SingleChildLayoutDelegate.prototype;
  dart.addTypeTests(shifted_box.SingleChildLayoutDelegate);
  dart.addTypeCaches(shifted_box.SingleChildLayoutDelegate);
  dart.setMethodSignature(shifted_box.SingleChildLayoutDelegate, () => ({
    __proto__: dart.getMethods(shifted_box.SingleChildLayoutDelegate.__proto__),
    getSize: dart.fnType(ui.Size, [box.BoxConstraints]),
    getConstraintsForChild: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    getPositionForChild: dart.fnType(ui.Offset, [ui.Size, ui.Size])
  }));
  dart.setLibraryUri(shifted_box.SingleChildLayoutDelegate, I[1]);
  dart.setFieldSignature(shifted_box.SingleChildLayoutDelegate, () => ({
    __proto__: dart.getFields(shifted_box.SingleChildLayoutDelegate.__proto__),
    [_relayout$]: dart.finalFieldType(dart.nullable(change_notifier.Listenable))
  }));
  var _delegate = dart.privateName(shifted_box, "_delegate");
  var _getSize = dart.privateName(shifted_box, "_getSize");
  shifted_box.RenderCustomSingleChildLayoutBox = class RenderCustomSingleChildLayoutBox extends shifted_box.RenderShiftedBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      return new shifted_box.RenderCustomSingleChildLayoutBox.new({child: child, delegate: delegate});
    }
    get delegate() {
      return this[_delegate];
    }
    set delegate(newDelegate) {
      let t0, t0$;
      if (!(newDelegate !== null)) dart.assertFailed(null, I[0], 1307, 12, "newDelegate != null");
      if (this[_delegate][$_equals](newDelegate)) {
        return;
      }
      let oldDelegate = this[_delegate];
      if (!newDelegate[$runtimeType]._equals(oldDelegate[$runtimeType]) || newDelegate.shouldRelayout(oldDelegate)) {
        this.markNeedsLayout();
      }
      this[_delegate] = newDelegate;
      if (this.attached) {
        t0 = oldDelegate[_relayout$];
        t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsLayout'));
        t0$ = newDelegate[_relayout$];
        t0$ == null ? null : t0$.addListener(dart.bind(this, 'markNeedsLayout'));
      }
    }
    attach(owner) {
      let t0;
      object.PipelineOwner.as(owner);
      super.attach(owner);
      t0 = this[_delegate][_relayout$];
      t0 == null ? null : t0.addListener(dart.bind(this, 'markNeedsLayout'));
    }
    detach() {
      let t0;
      t0 = this[_delegate][_relayout$];
      t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsLayout'));
      super.detach();
    }
    [_getSize](constraints) {
      return constraints.constrain(this[_delegate].getSize(constraints));
    }
    computeMinIntrinsicWidth(height) {
      let width = this[_getSize](new box.BoxConstraints.tightForFinite({height: height})).width;
      if (width[$isFinite]) {
        return width;
      }
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      let width = this[_getSize](new box.BoxConstraints.tightForFinite({height: height})).width;
      if (width[$isFinite]) {
        return width;
      }
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      let height = this[_getSize](new box.BoxConstraints.tightForFinite({width: width})).height;
      if (height[$isFinite]) {
        return height;
      }
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      let height = this[_getSize](new box.BoxConstraints.tightForFinite({width: width})).height;
      if (height[$isFinite]) {
        return height;
      }
      return 0.0;
    }
    computeDryLayout(constraints) {
      return this[_getSize](constraints);
    }
    performLayout() {
      this.size = this[_getSize](this.constraints);
      if (this.child != null) {
        let childConstraints = this.delegate.getConstraintsForChild(this.constraints);
        if (!childConstraints.debugAssertIsValid({isAppliedConstraint: true})) dart.assertFailed(null, I[0], 1388, 14, "childConstraints.debugAssertIsValid(isAppliedConstraint: true)");
        dart.nullCheck(this.child).layout(childConstraints, {parentUsesSize: !childConstraints.isTight});
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        childParentData.offset = this.delegate.getPositionForChild(this.size, childConstraints.isTight ? childConstraints.smallest : dart.nullCheck(this.child).size);
      }
    }
  };
  (shifted_box.RenderCustomSingleChildLayoutBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (!(delegate !== null)) dart.assertFailed(null, I[0], 1299, 15, "delegate != null");
    this[_delegate] = delegate;
    shifted_box.RenderCustomSingleChildLayoutBox.__proto__.new.call(this, child);
    ;
  }).prototype = shifted_box.RenderCustomSingleChildLayoutBox.prototype;
  dart.addTypeTests(shifted_box.RenderCustomSingleChildLayoutBox);
  dart.addTypeCaches(shifted_box.RenderCustomSingleChildLayoutBox);
  dart.setMethodSignature(shifted_box.RenderCustomSingleChildLayoutBox, () => ({
    __proto__: dart.getMethods(shifted_box.RenderCustomSingleChildLayoutBox.__proto__),
    [_getSize]: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setGetterSignature(shifted_box.RenderCustomSingleChildLayoutBox, () => ({
    __proto__: dart.getGetters(shifted_box.RenderCustomSingleChildLayoutBox.__proto__),
    delegate: shifted_box.SingleChildLayoutDelegate
  }));
  dart.setSetterSignature(shifted_box.RenderCustomSingleChildLayoutBox, () => ({
    __proto__: dart.getSetters(shifted_box.RenderCustomSingleChildLayoutBox.__proto__),
    delegate: shifted_box.SingleChildLayoutDelegate
  }));
  dart.setLibraryUri(shifted_box.RenderCustomSingleChildLayoutBox, I[1]);
  dart.setFieldSignature(shifted_box.RenderCustomSingleChildLayoutBox, () => ({
    __proto__: dart.getFields(shifted_box.RenderCustomSingleChildLayoutBox.__proto__),
    [_delegate]: dart.fieldType(shifted_box.SingleChildLayoutDelegate)
  }));
  var _baseline = dart.privateName(shifted_box, "_baseline");
  var _baselineType = dart.privateName(shifted_box, "_baselineType");
  shifted_box.RenderBaseline = class RenderBaseline extends shifted_box.RenderShiftedBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let baseline = opts && 'baseline' in opts ? opts.baseline : null;
      let baselineType = opts && 'baselineType' in opts ? opts.baselineType : null;
      return new shifted_box.RenderBaseline.new({child: child, baseline: baseline, baselineType: baselineType});
    }
    get baseline() {
      return this[_baseline];
    }
    set baseline(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1431, 12, "value != null");
      if (this[_baseline] === value) {
        return;
      }
      this[_baseline] = value;
      this.markNeedsLayout();
    }
    get baselineType() {
      return this[_baselineType];
    }
    set baselineType(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1443, 12, "value != null");
      if (this[_baselineType] === value) {
        return;
      }
      this[_baselineType] = value;
      this.markNeedsLayout();
    }
    computeDryLayout(constraints) {
      if (this.child != null) {
        if (!this.debugCannotComputeDryLayout({reason: "Baseline metrics are only available after a full layout."})) dart.assertFailed(null, I[0], 1454, 14, "debugCannotComputeDryLayout(\n        reason: 'Baseline metrics are only available after a full layout.',\n      )");
        return ui.Size.zero;
      }
      return constraints.smallest;
    }
    performLayout() {
      if (this.child != null) {
        let constraints = this.constraints;
        dart.nullCheck(this.child).layout(constraints.loosen(), {parentUsesSize: true});
        let childBaseline = dart.nullCheck(dart.nullCheck(this.child).getDistanceToBaseline(this.baselineType));
        let actualBaseline = this.baseline;
        let top = actualBaseline - childBaseline;
        let childParentData = box.BoxParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        childParentData.offset = new ui.Offset.new(0.0, top);
        let childSize = dart.nullCheck(this.child).size;
        this.size = constraints.constrain(new ui.Size.new(childSize.width, top + childSize.height));
      } else {
        this.size = this.constraints.smallest;
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("baseline", this.baseline));
      properties.add(new (T.EnumPropertyOfTextBaseline()).new("baselineType", this.baselineType));
    }
  };
  (shifted_box.RenderBaseline.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let baselineType = opts && 'baselineType' in opts ? opts.baselineType : null;
    if (!(baseline !== null)) dart.assertFailed(null, I[0], 1420, 15, "baseline != null");
    if (!(baselineType !== null)) dart.assertFailed(null, I[0], 1421, 15, "baselineType != null");
    this[_baseline] = baseline;
    this[_baselineType] = baselineType;
    shifted_box.RenderBaseline.__proto__.new.call(this, child);
    ;
  }).prototype = shifted_box.RenderBaseline.prototype;
  dart.addTypeTests(shifted_box.RenderBaseline);
  dart.addTypeCaches(shifted_box.RenderBaseline);
  dart.setGetterSignature(shifted_box.RenderBaseline, () => ({
    __proto__: dart.getGetters(shifted_box.RenderBaseline.__proto__),
    baseline: core.double,
    baselineType: ui.TextBaseline
  }));
  dart.setSetterSignature(shifted_box.RenderBaseline, () => ({
    __proto__: dart.getSetters(shifted_box.RenderBaseline.__proto__),
    baseline: core.double,
    baselineType: ui.TextBaseline
  }));
  dart.setLibraryUri(shifted_box.RenderBaseline, I[1]);
  dart.setFieldSignature(shifted_box.RenderBaseline, () => ({
    __proto__: dart.getFields(shifted_box.RenderBaseline.__proto__),
    [_baseline]: dart.fieldType(core.double),
    [_baselineType]: dart.fieldType(ui.TextBaseline)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/shifted_box.dart", {
    "package:flutter/src/rendering/shifted_box.dart": shifted_box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shifted_box.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/shifted_box.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__shifted_box: shifted_box
  };
}));

//# sourceMappingURL=shifted_box.dart.lib.js.map
