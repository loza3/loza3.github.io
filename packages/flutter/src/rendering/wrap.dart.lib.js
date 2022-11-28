define(['dart_sdk', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/layout_helper.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__rendering__wrap_dart(dart_sdk, packages__flutter__src__rendering__box$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__layout_helper$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var wrap = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    RenderBoxAndBoxConstraintsToSize: () => (T.RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))(),
    JSArrayOf_RunMetrics: () => (T.JSArrayOf_RunMetrics = dart.constFn(_interceptors.JSArray$(wrap._RunMetrics)))(),
    EnumPropertyOfAxis: () => (T.EnumPropertyOfAxis = dart.constFn(diagnostics.EnumProperty$(basic_types.Axis)))(),
    EnumPropertyOfWrapAlignment: () => (T.EnumPropertyOfWrapAlignment = dart.constFn(diagnostics.EnumProperty$(wrap.WrapAlignment)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    EnumPropertyOfVerticalDirection: () => (T.EnumPropertyOfVerticalDirection = dart.constFn(diagnostics.EnumProperty$(basic_types.VerticalDirection)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_Enum__name]: "spaceBetween",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_Enum__name]: "spaceAround",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: wrap.WrapAlignment.prototype,
        [_Enum__name]: "spaceEvenly",
        [_Enum_index]: 5
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6], wrap.WrapAlignment);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: wrap.WrapCrossAlignment.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: wrap.WrapCrossAlignment.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: wrap.WrapCrossAlignment.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C7() {
      return C[7] = dart.constList([C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10], wrap.WrapCrossAlignment);
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C15() {
      return C[15] = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, T.RenderBoxAndBoxConstraintsToSize());
    }
  }, false);
  var C = Array(16).fill(void 0);
  var I = [
    "package:flutter/src/rendering/wrap.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/wrap.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  wrap.WrapAlignment = class WrapAlignment extends core._Enum {
    toString() {
      return "WrapAlignment." + this[_name];
    }
  };
  (wrap.WrapAlignment.new = function(index, name) {
    wrap.WrapAlignment.__proto__.new.call(this, index, name);
    ;
  }).prototype = wrap.WrapAlignment.prototype;
  dart.addTypeTests(wrap.WrapAlignment);
  dart.addTypeCaches(wrap.WrapAlignment);
  dart.setLibraryUri(wrap.WrapAlignment, I[0]);
  dart.setStaticFieldSignature(wrap.WrapAlignment, () => ['values', 'start', 'end', 'center', 'spaceBetween', 'spaceAround', 'spaceEvenly']);
  dart.defineExtensionMethods(wrap.WrapAlignment, ['toString']);
  dart.defineLazy(wrap.WrapAlignment, {
    /*wrap.WrapAlignment.values*/get values() {
      return C[0] || CT.C0;
    },
    /*wrap.WrapAlignment.start*/get start() {
      return C[1] || CT.C1;
    },
    /*wrap.WrapAlignment.end*/get end() {
      return C[2] || CT.C2;
    },
    /*wrap.WrapAlignment.center*/get center() {
      return C[3] || CT.C3;
    },
    /*wrap.WrapAlignment.spaceBetween*/get spaceBetween() {
      return C[4] || CT.C4;
    },
    /*wrap.WrapAlignment.spaceAround*/get spaceAround() {
      return C[5] || CT.C5;
    },
    /*wrap.WrapAlignment.spaceEvenly*/get spaceEvenly() {
      return C[6] || CT.C6;
    }
  }, false);
  wrap.WrapCrossAlignment = class WrapCrossAlignment extends core._Enum {
    toString() {
      return "WrapCrossAlignment." + this[_name];
    }
  };
  (wrap.WrapCrossAlignment.new = function(index, name) {
    wrap.WrapCrossAlignment.__proto__.new.call(this, index, name);
    ;
  }).prototype = wrap.WrapCrossAlignment.prototype;
  dart.addTypeTests(wrap.WrapCrossAlignment);
  dart.addTypeCaches(wrap.WrapCrossAlignment);
  dart.setLibraryUri(wrap.WrapCrossAlignment, I[0]);
  dart.setStaticFieldSignature(wrap.WrapCrossAlignment, () => ['values', 'start', 'end', 'center']);
  dart.defineExtensionMethods(wrap.WrapCrossAlignment, ['toString']);
  dart.defineLazy(wrap.WrapCrossAlignment, {
    /*wrap.WrapCrossAlignment.values*/get values() {
      return C[7] || CT.C7;
    },
    /*wrap.WrapCrossAlignment.start*/get start() {
      return C[8] || CT.C8;
    },
    /*wrap.WrapCrossAlignment.end*/get end() {
      return C[9] || CT.C9;
    },
    /*wrap.WrapCrossAlignment.center*/get center() {
      return C[10] || CT.C10;
    }
  }, false);
  wrap._RunMetrics = class _RunMetrics extends core.Object {
    static ['_#new#tearOff'](mainAxisExtent, crossAxisExtent, childCount) {
      return new wrap._RunMetrics.new(mainAxisExtent, crossAxisExtent, childCount);
    }
  };
  (wrap._RunMetrics.new = function(mainAxisExtent, crossAxisExtent, childCount) {
    this.mainAxisExtent = mainAxisExtent;
    this.crossAxisExtent = crossAxisExtent;
    this.childCount = childCount;
    ;
  }).prototype = wrap._RunMetrics.prototype;
  dart.addTypeTests(wrap._RunMetrics);
  dart.addTypeCaches(wrap._RunMetrics);
  dart.setLibraryUri(wrap._RunMetrics, I[0]);
  dart.setFieldSignature(wrap._RunMetrics, () => ({
    __proto__: dart.getFields(wrap._RunMetrics.__proto__),
    mainAxisExtent: dart.finalFieldType(core.double),
    crossAxisExtent: dart.finalFieldType(core.double),
    childCount: dart.finalFieldType(core.int)
  }));
  var _runIndex = dart.privateName(wrap, "_runIndex");
  wrap.WrapParentData = class WrapParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    static ['_#new#tearOff']() {
      return new wrap.WrapParentData.new();
    }
  };
  (wrap.WrapParentData.new = function() {
    this[_runIndex] = 0;
    wrap.WrapParentData.__proto__.new.call(this);
    ;
  }).prototype = wrap.WrapParentData.prototype;
  dart.addTypeTests(wrap.WrapParentData);
  dart.addTypeCaches(wrap.WrapParentData);
  dart.setLibraryUri(wrap.WrapParentData, I[0]);
  dart.setFieldSignature(wrap.WrapParentData, () => ({
    __proto__: dart.getFields(wrap.WrapParentData.__proto__),
    [_runIndex]: dart.fieldType(core.int)
  }));
  var _clipBehavior = dart.privateName(wrap, "_clipBehavior");
  var _hasVisualOverflow = dart.privateName(wrap, "_hasVisualOverflow");
  var _clipRectLayer = dart.privateName(wrap, "_clipRectLayer");
  var _direction = dart.privateName(wrap, "_direction");
  var _alignment = dart.privateName(wrap, "_alignment");
  var _spacing = dart.privateName(wrap, "_spacing");
  var _runAlignment = dart.privateName(wrap, "_runAlignment");
  var _runSpacing = dart.privateName(wrap, "_runSpacing");
  var _crossAxisAlignment = dart.privateName(wrap, "_crossAxisAlignment");
  var _textDirection = dart.privateName(wrap, "_textDirection");
  var _verticalDirection = dart.privateName(wrap, "_verticalDirection");
  var _debugHasNecessaryDirections = dart.privateName(wrap, "_debugHasNecessaryDirections");
  var _getMainAxisExtent = dart.privateName(wrap, "_getMainAxisExtent");
  var _getCrossAxisExtent = dart.privateName(wrap, "_getCrossAxisExtent");
  var _getOffset = dart.privateName(wrap, "_getOffset");
  var _getChildCrossAxisOffset = dart.privateName(wrap, "_getChildCrossAxisOffset");
  var _computeDryLayout = dart.privateName(wrap, "_computeDryLayout");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, wrap.WrapParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, wrap.WrapParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, wrap.WrapParentData));
  wrap.RenderWrap = class RenderWrap extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let direction = opts && 'direction' in opts ? opts.direction : C[11] || CT.C11;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
      let spacing = opts && 'spacing' in opts ? opts.spacing : 0;
      let runAlignment = opts && 'runAlignment' in opts ? opts.runAlignment : C[1] || CT.C1;
      let runSpacing = opts && 'runSpacing' in opts ? opts.runSpacing : 0;
      let crossAxisAlignment = opts && 'crossAxisAlignment' in opts ? opts.crossAxisAlignment : C[8] || CT.C8;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let verticalDirection = opts && 'verticalDirection' in opts ? opts.verticalDirection : C[12] || CT.C12;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[13] || CT.C13;
      return new wrap.RenderWrap.new({children: children, direction: direction, alignment: alignment, spacing: spacing, runAlignment: runAlignment, runSpacing: runSpacing, crossAxisAlignment: crossAxisAlignment, textDirection: textDirection, verticalDirection: verticalDirection, clipBehavior: clipBehavior});
    }
    get direction() {
      return this[_direction];
    }
    set direction(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 152, 12, "value != null");
      if (this[_direction] === value) {
        return;
      }
      this[_direction] = value;
      this.markNeedsLayout();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 176, 12, "value != null");
      if (this[_alignment] === value) {
        return;
      }
      this[_alignment] = value;
      this.markNeedsLayout();
    }
    get spacing() {
      return this[_spacing];
    }
    set spacing(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 198, 12, "value != null");
      if (this[_spacing] === value) {
        return;
      }
      this[_spacing] = value;
      this.markNeedsLayout();
    }
    get runAlignment() {
      return this[_runAlignment];
    }
    set runAlignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 223, 12, "value != null");
      if (this[_runAlignment] === value) {
        return;
      }
      this[_runAlignment] = value;
      this.markNeedsLayout();
    }
    get runSpacing() {
      return this[_runSpacing];
    }
    set runSpacing(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 244, 12, "value != null");
      if (this[_runSpacing] === value) {
        return;
      }
      this[_runSpacing] = value;
      this.markNeedsLayout();
    }
    get crossAxisAlignment() {
      return this[_crossAxisAlignment];
    }
    set crossAxisAlignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 270, 12, "value != null");
      if (this[_crossAxisAlignment] === value) {
        return;
      }
      this[_crossAxisAlignment] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] != value) {
        this[_textDirection] = value;
        this.markNeedsLayout();
      }
    }
    get verticalDirection() {
      return this[_verticalDirection];
    }
    set verticalDirection(value) {
      if (this[_verticalDirection] !== value) {
        this[_verticalDirection] = value;
        this.markNeedsLayout();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 347, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    get [_debugHasNecessaryDirections]() {
      if (!(this.direction !== null)) dart.assertFailed(null, I[1], 356, 12, "direction != null");
      if (!(this.alignment !== null)) dart.assertFailed(null, I[1], 357, 12, "alignment != null");
      if (!(this.runAlignment !== null)) dart.assertFailed(null, I[1], 358, 12, "runAlignment != null");
      if (!(this.crossAxisAlignment !== null)) dart.assertFailed(null, I[1], 359, 12, "crossAxisAlignment != null");
      if (this.firstChild != null && !dart.equals(this.lastChild, this.firstChild)) {
        switch (this.direction) {
          case C[11] || CT.C11:
            {
              if (!(this.textDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with multiple children has a null textDirection, so the layout order is undefined.", I[1], 364, 18, "textDirection != null");
              break;
            }
          case C[14] || CT.C14:
            {
              if (!(this.verticalDirection !== null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with multiple children has a null verticalDirection, so the layout order is undefined.", I[1], 367, 18, "verticalDirection != null");
              break;
            }
        }
      }
      if (this.alignment === wrap.WrapAlignment.start || this.alignment === wrap.WrapAlignment.end) {
        switch (this.direction) {
          case C[11] || CT.C11:
            {
              if (!(this.textDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with alignment " + dart.str(this.alignment) + " has a null textDirection, so the alignment cannot be resolved.", I[1], 374, 18, "textDirection != null");
              break;
            }
          case C[14] || CT.C14:
            {
              if (!(this.verticalDirection !== null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with alignment " + dart.str(this.alignment) + " has a null verticalDirection, so the alignment cannot be resolved.", I[1], 377, 18, "verticalDirection != null");
              break;
            }
        }
      }
      if (this.runAlignment === wrap.WrapAlignment.start || this.runAlignment === wrap.WrapAlignment.end) {
        switch (this.direction) {
          case C[11] || CT.C11:
            {
              if (!(this.verticalDirection !== null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with runAlignment " + dart.str(this.runAlignment) + " has a null verticalDirection, so the alignment cannot be resolved.", I[1], 384, 18, "verticalDirection != null");
              break;
            }
          case C[14] || CT.C14:
            {
              if (!(this.textDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with runAlignment " + dart.str(this.runAlignment) + " has a null textDirection, so the alignment cannot be resolved.", I[1], 387, 18, "textDirection != null");
              break;
            }
        }
      }
      if (this.crossAxisAlignment === wrap.WrapCrossAlignment.start || this.crossAxisAlignment === wrap.WrapCrossAlignment.end) {
        switch (this.direction) {
          case C[11] || CT.C11:
            {
              if (!(this.verticalDirection !== null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with crossAxisAlignment " + dart.str(this.crossAxisAlignment) + " has a null verticalDirection, so the alignment cannot be resolved.", I[1], 394, 18, "verticalDirection != null");
              break;
            }
          case C[14] || CT.C14:
            {
              if (!(this.textDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with crossAxisAlignment " + dart.str(this.crossAxisAlignment) + " has a null textDirection, so the alignment cannot be resolved.", I[1], 397, 18, "textDirection != null");
              break;
            }
        }
      }
      return true;
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!wrap.WrapParentData.is(child.parentData)) {
        child.parentData = new wrap.WrapParentData.new();
      }
    }
    computeMinIntrinsicWidth(height) {
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            let width = 0.0;
            let child = this.firstChild;
            while (child != null) {
              width = math.max(core.double, width, child.getMinIntrinsicWidth(1 / 0));
              child = this.childAfter(child);
            }
            return width;
          }
        case C[14] || CT.C14:
          {
            return this.computeDryLayout(new box.BoxConstraints.new({maxHeight: height})).width;
          }
      }
    }
    computeMaxIntrinsicWidth(height) {
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            let width = 0.0;
            let child = this.firstChild;
            while (child != null) {
              width = width + child.getMaxIntrinsicWidth(1 / 0);
              child = this.childAfter(child);
            }
            return width;
          }
        case C[14] || CT.C14:
          {
            return this.computeDryLayout(new box.BoxConstraints.new({maxHeight: height})).width;
          }
      }
    }
    computeMinIntrinsicHeight(width) {
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            return this.computeDryLayout(new box.BoxConstraints.new({maxWidth: width})).height;
          }
        case C[14] || CT.C14:
          {
            let height = 0.0;
            let child = this.firstChild;
            while (child != null) {
              height = math.max(core.double, height, child.getMinIntrinsicHeight(1 / 0));
              child = this.childAfter(child);
            }
            return height;
          }
      }
    }
    computeMaxIntrinsicHeight(width) {
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            return this.computeDryLayout(new box.BoxConstraints.new({maxWidth: width})).height;
          }
        case C[14] || CT.C14:
          {
            let height = 0.0;
            let child = this.firstChild;
            while (child != null) {
              height = height + child.getMaxIntrinsicHeight(1 / 0);
              child = this.childAfter(child);
            }
            return height;
          }
      }
    }
    computeDistanceToActualBaseline(baseline) {
      return this.defaultComputeDistanceToHighestActualBaseline(baseline);
    }
    [_getMainAxisExtent](childSize) {
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            return childSize.width;
          }
        case C[14] || CT.C14:
          {
            return childSize.height;
          }
      }
    }
    [_getCrossAxisExtent](childSize) {
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            return childSize.height;
          }
        case C[14] || CT.C14:
          {
            return childSize.width;
          }
      }
    }
    [_getOffset](mainAxisOffset, crossAxisOffset) {
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            return new ui.Offset.new(mainAxisOffset, crossAxisOffset);
          }
        case C[14] || CT.C14:
          {
            return new ui.Offset.new(crossAxisOffset, mainAxisOffset);
          }
      }
    }
    [_getChildCrossAxisOffset](flipCrossAxis, runCrossAxisExtent, childCrossAxisExtent) {
      let freeSpace = runCrossAxisExtent - childCrossAxisExtent;
      switch (this.crossAxisAlignment) {
        case C[8] || CT.C8:
          {
            return flipCrossAxis ? freeSpace : 0.0;
          }
        case C[9] || CT.C9:
          {
            return flipCrossAxis ? 0.0 : freeSpace;
          }
        case C[10] || CT.C10:
          {
            return freeSpace / 2.0;
          }
      }
    }
    computeDryLayout(constraints) {
      return this[_computeDryLayout](constraints);
    }
    [_computeDryLayout](constraints, layoutChild = C[15] || CT.C15) {
      let childConstraints = null;
      let mainAxisLimit = 0.0;
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            childConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
            mainAxisLimit = constraints.maxWidth;
            break;
          }
        case C[14] || CT.C14:
          {
            childConstraints = new box.BoxConstraints.new({maxHeight: constraints.maxHeight});
            mainAxisLimit = constraints.maxHeight;
            break;
          }
      }
      let mainAxisExtent = 0.0;
      let crossAxisExtent = 0.0;
      let runMainAxisExtent = 0.0;
      let runCrossAxisExtent = 0.0;
      let childCount = 0;
      let child = this.firstChild;
      while (child != null) {
        let childSize = layoutChild(child, childConstraints);
        let childMainAxisExtent = this[_getMainAxisExtent](childSize);
        let childCrossAxisExtent = this[_getCrossAxisExtent](childSize);
        if (childCount > 0 && runMainAxisExtent + childMainAxisExtent + this.spacing > mainAxisLimit) {
          mainAxisExtent = math.max(core.double, mainAxisExtent, runMainAxisExtent);
          crossAxisExtent = crossAxisExtent + (runCrossAxisExtent + this.runSpacing);
          runMainAxisExtent = 0.0;
          runCrossAxisExtent = 0.0;
          childCount = 0;
        }
        runMainAxisExtent = runMainAxisExtent + childMainAxisExtent;
        runCrossAxisExtent = math.max(core.double, runCrossAxisExtent, childCrossAxisExtent);
        if (childCount > 0) {
          runMainAxisExtent = runMainAxisExtent + this.spacing;
        }
        childCount = childCount + 1;
        child = this.childAfter(child);
      }
      crossAxisExtent = crossAxisExtent + runCrossAxisExtent;
      mainAxisExtent = math.max(core.double, mainAxisExtent, runMainAxisExtent);
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            return constraints.constrain(new ui.Size.new(mainAxisExtent, crossAxisExtent));
          }
        case C[14] || CT.C14:
          {
            return constraints.constrain(new ui.Size.new(crossAxisExtent, mainAxisExtent));
          }
      }
    }
    performLayout() {
      let constraints = this.constraints;
      if (!this[_debugHasNecessaryDirections]) dart.assertFailed(null, I[1], 580, 12, "_debugHasNecessaryDirections");
      this[_hasVisualOverflow] = false;
      let child = this.firstChild;
      if (child == null) {
        this.size = constraints.smallest;
        return;
      }
      let childConstraints = null;
      let mainAxisLimit = 0.0;
      let flipMainAxis = false;
      let flipCrossAxis = false;
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            childConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
            mainAxisLimit = constraints.maxWidth;
            if (this.textDirection === ui.TextDirection.rtl) {
              flipMainAxis = true;
            }
            if (this.verticalDirection === basic_types.VerticalDirection.up) {
              flipCrossAxis = true;
            }
            break;
          }
        case C[14] || CT.C14:
          {
            childConstraints = new box.BoxConstraints.new({maxHeight: constraints.maxHeight});
            mainAxisLimit = constraints.maxHeight;
            if (this.verticalDirection === basic_types.VerticalDirection.up) {
              flipMainAxis = true;
            }
            if (this.textDirection === ui.TextDirection.rtl) {
              flipCrossAxis = true;
            }
            break;
          }
      }
      if (!(childConstraints !== null)) dart.assertFailed(null, I[1], 613, 12, "childConstraints != null");
      if (!(mainAxisLimit !== null)) dart.assertFailed(null, I[1], 614, 12, "mainAxisLimit != null");
      let spacing = this.spacing;
      let runSpacing = this.runSpacing;
      let runMetrics = T.JSArrayOf_RunMetrics().of([]);
      let mainAxisExtent = 0.0;
      let crossAxisExtent = 0.0;
      let runMainAxisExtent = 0.0;
      let runCrossAxisExtent = 0.0;
      let childCount = 0;
      while (child != null) {
        child.layout(childConstraints, {parentUsesSize: true});
        let childMainAxisExtent = this[_getMainAxisExtent](child.size);
        let childCrossAxisExtent = this[_getCrossAxisExtent](child.size);
        if (childCount > 0 && runMainAxisExtent + spacing + childMainAxisExtent > mainAxisLimit) {
          mainAxisExtent = math.max(core.double, mainAxisExtent, runMainAxisExtent);
          crossAxisExtent = crossAxisExtent + runCrossAxisExtent;
          if (runMetrics[$isNotEmpty]) {
            crossAxisExtent = crossAxisExtent + runSpacing;
          }
          runMetrics[$add](new wrap._RunMetrics.new(runMainAxisExtent, runCrossAxisExtent, childCount));
          runMainAxisExtent = 0.0;
          runCrossAxisExtent = 0.0;
          childCount = 0;
        }
        runMainAxisExtent = runMainAxisExtent + childMainAxisExtent;
        if (childCount > 0) {
          runMainAxisExtent = runMainAxisExtent + spacing;
        }
        runCrossAxisExtent = math.max(core.double, runCrossAxisExtent, childCrossAxisExtent);
        childCount = childCount + 1;
        let childParentData = wrap.WrapParentData.as(dart.nullCheck(child.parentData));
        childParentData[_runIndex] = runMetrics[$length];
        child = childParentData.nextSibling;
      }
      if (childCount > 0) {
        mainAxisExtent = math.max(core.double, mainAxisExtent, runMainAxisExtent);
        crossAxisExtent = crossAxisExtent + runCrossAxisExtent;
        if (runMetrics[$isNotEmpty]) {
          crossAxisExtent = crossAxisExtent + runSpacing;
        }
        runMetrics[$add](new wrap._RunMetrics.new(runMainAxisExtent, runCrossAxisExtent, childCount));
      }
      let runCount = runMetrics[$length];
      if (!(runCount > 0)) dart.assertFailed(null, I[1], 658, 12, "runCount > 0");
      let containerMainAxisExtent = 0.0;
      let containerCrossAxisExtent = 0.0;
      switch (this.direction) {
        case C[11] || CT.C11:
          {
            this.size = constraints.constrain(new ui.Size.new(mainAxisExtent, crossAxisExtent));
            containerMainAxisExtent = this.size.width;
            containerCrossAxisExtent = this.size.height;
            break;
          }
        case C[14] || CT.C14:
          {
            this.size = constraints.constrain(new ui.Size.new(crossAxisExtent, mainAxisExtent));
            containerMainAxisExtent = this.size.height;
            containerCrossAxisExtent = this.size.width;
            break;
          }
      }
      this[_hasVisualOverflow] = containerMainAxisExtent < mainAxisExtent || containerCrossAxisExtent < crossAxisExtent;
      let crossAxisFreeSpace = math.max(core.double, 0.0, containerCrossAxisExtent - crossAxisExtent);
      let runLeadingSpace = 0.0;
      let runBetweenSpace = 0.0;
      switch (this.runAlignment) {
        case C[1] || CT.C1:
          {
            break;
          }
        case C[2] || CT.C2:
          {
            runLeadingSpace = crossAxisFreeSpace;
            break;
          }
        case C[3] || CT.C3:
          {
            runLeadingSpace = crossAxisFreeSpace / 2.0;
            break;
          }
        case C[4] || CT.C4:
          {
            runBetweenSpace = runCount > 1 ? crossAxisFreeSpace / (runCount - 1) : 0.0;
            break;
          }
        case C[5] || CT.C5:
          {
            runBetweenSpace = crossAxisFreeSpace / runCount;
            runLeadingSpace = runBetweenSpace / 2.0;
            break;
          }
        case C[6] || CT.C6:
          {
            runBetweenSpace = crossAxisFreeSpace / (runCount + 1);
            runLeadingSpace = runBetweenSpace;
            break;
          }
      }
      runBetweenSpace = runBetweenSpace + runSpacing;
      let crossAxisOffset = flipCrossAxis ? containerCrossAxisExtent - runLeadingSpace : runLeadingSpace;
      child = this.firstChild;
      for (let i = 0; i < runCount; i = i + 1) {
        let metrics = runMetrics[$_get](i);
        let runMainAxisExtent = metrics.mainAxisExtent;
        let runCrossAxisExtent = metrics.crossAxisExtent;
        let childCount = metrics.childCount;
        let mainAxisFreeSpace = math.max(core.double, 0.0, containerMainAxisExtent - runMainAxisExtent);
        let childLeadingSpace = 0.0;
        let childBetweenSpace = 0.0;
        switch (this.alignment) {
          case C[1] || CT.C1:
            {
              break;
            }
          case C[2] || CT.C2:
            {
              childLeadingSpace = mainAxisFreeSpace;
              break;
            }
          case C[3] || CT.C3:
            {
              childLeadingSpace = mainAxisFreeSpace / 2.0;
              break;
            }
          case C[4] || CT.C4:
            {
              childBetweenSpace = childCount > 1 ? mainAxisFreeSpace / (childCount - 1) : 0.0;
              break;
            }
          case C[5] || CT.C5:
            {
              childBetweenSpace = mainAxisFreeSpace / childCount;
              childLeadingSpace = childBetweenSpace / 2.0;
              break;
            }
          case C[6] || CT.C6:
            {
              childBetweenSpace = mainAxisFreeSpace / (childCount + 1);
              childLeadingSpace = childBetweenSpace;
              break;
            }
        }
        childBetweenSpace = childBetweenSpace + spacing;
        let childMainPosition = flipMainAxis ? containerMainAxisExtent - childLeadingSpace : childLeadingSpace;
        if (flipCrossAxis) {
          crossAxisOffset = crossAxisOffset - runCrossAxisExtent;
        }
        while (child != null) {
          let childParentData = wrap.WrapParentData.as(dart.nullCheck(child.parentData));
          if (childParentData[_runIndex] !== i) {
            break;
          }
          let childMainAxisExtent = this[_getMainAxisExtent](child.size);
          let childCrossAxisExtent = this[_getCrossAxisExtent](child.size);
          let childCrossAxisOffset = this[_getChildCrossAxisOffset](flipCrossAxis, runCrossAxisExtent, childCrossAxisExtent);
          if (flipMainAxis) {
            childMainPosition = childMainPosition - childMainAxisExtent;
          }
          childParentData.offset = this[_getOffset](childMainPosition, crossAxisOffset + childCrossAxisOffset);
          if (flipMainAxis) {
            childMainPosition = childMainPosition - childBetweenSpace;
          } else {
            childMainPosition = childMainPosition + (childMainAxisExtent + childBetweenSpace);
          }
          child = childParentData.nextSibling;
        }
        if (flipCrossAxis) {
          crossAxisOffset = crossAxisOffset - runBetweenSpace;
        } else {
          crossAxisOffset = crossAxisOffset + (runCrossAxisExtent + runBetweenSpace);
        }
      }
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.defaultHitTestChildren(result, {position: position});
    }
    paint(context, offset) {
      if (this[_hasVisualOverflow] && this.clipBehavior !== ui.Clip.none) {
        this[_clipRectLayer].layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, 'defaultPaint'), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
      } else {
        this[_clipRectLayer].layer = null;
        this.defaultPaint(context, offset);
      }
    }
    dispose() {
      this[_clipRectLayer].layer = null;
      super.dispose();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfAxis()).new("direction", this.direction));
      properties.add(new (T.EnumPropertyOfWrapAlignment()).new("alignment", this.alignment));
      properties.add(new diagnostics.DoubleProperty.new("spacing", this.spacing));
      properties.add(new (T.EnumPropertyOfWrapAlignment()).new("runAlignment", this.runAlignment));
      properties.add(new diagnostics.DoubleProperty.new("runSpacing", this.runSpacing));
      properties.add(new diagnostics.DoubleProperty.new("crossAxisAlignment", this.runSpacing));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfVerticalDirection()).new("verticalDirection", this.verticalDirection, {defaultValue: basic_types.VerticalDirection.down}));
    }
  };
  (wrap.RenderWrap.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let direction = opts && 'direction' in opts ? opts.direction : C[11] || CT.C11;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[1] || CT.C1;
    let spacing = opts && 'spacing' in opts ? opts.spacing : 0;
    let runAlignment = opts && 'runAlignment' in opts ? opts.runAlignment : C[1] || CT.C1;
    let runSpacing = opts && 'runSpacing' in opts ? opts.runSpacing : 0;
    let crossAxisAlignment = opts && 'crossAxisAlignment' in opts ? opts.crossAxisAlignment : C[8] || CT.C8;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let verticalDirection = opts && 'verticalDirection' in opts ? opts.verticalDirection : C[12] || CT.C12;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[13] || CT.C13;
    this[_clipBehavior] = ui.Clip.none;
    this[_hasVisualOverflow] = false;
    this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
    if (!(direction !== null)) dart.assertFailed(null, I[1], 124, 15, "direction != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[1], 125, 15, "alignment != null");
    if (!(spacing !== null)) dart.assertFailed(null, I[1], 126, 15, "spacing != null");
    if (!(runAlignment !== null)) dart.assertFailed(null, I[1], 127, 15, "runAlignment != null");
    if (!(runSpacing !== null)) dart.assertFailed(null, I[1], 128, 15, "runSpacing != null");
    if (!(crossAxisAlignment !== null)) dart.assertFailed(null, I[1], 129, 15, "crossAxisAlignment != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 130, 15, "clipBehavior != null");
    this[_direction] = direction;
    this[_alignment] = alignment;
    this[_spacing] = spacing;
    this[_runAlignment] = runAlignment;
    this[_runSpacing] = runSpacing;
    this[_crossAxisAlignment] = crossAxisAlignment;
    this[_textDirection] = textDirection;
    this[_verticalDirection] = verticalDirection;
    this[_clipBehavior] = clipBehavior;
    wrap.RenderWrap.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = wrap.RenderWrap.prototype;
  dart.addTypeTests(wrap.RenderWrap);
  dart.addTypeCaches(wrap.RenderWrap);
  dart.setMethodSignature(wrap.RenderWrap, () => ({
    __proto__: dart.getMethods(wrap.RenderWrap.__proto__),
    [_getMainAxisExtent]: dart.fnType(core.double, [ui.Size]),
    [_getCrossAxisExtent]: dart.fnType(core.double, [ui.Size]),
    [_getOffset]: dart.fnType(ui.Offset, [core.double, core.double]),
    [_getChildCrossAxisOffset]: dart.fnType(core.double, [core.bool, core.double, core.double]),
    [_computeDryLayout]: dart.fnType(ui.Size, [box.BoxConstraints], [dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])])
  }));
  dart.setGetterSignature(wrap.RenderWrap, () => ({
    __proto__: dart.getGetters(wrap.RenderWrap.__proto__),
    direction: basic_types.Axis,
    alignment: wrap.WrapAlignment,
    spacing: core.double,
    runAlignment: wrap.WrapAlignment,
    runSpacing: core.double,
    crossAxisAlignment: wrap.WrapCrossAlignment,
    textDirection: dart.nullable(ui.TextDirection),
    verticalDirection: basic_types.VerticalDirection,
    clipBehavior: ui.Clip,
    [_debugHasNecessaryDirections]: core.bool
  }));
  dart.setSetterSignature(wrap.RenderWrap, () => ({
    __proto__: dart.getSetters(wrap.RenderWrap.__proto__),
    direction: basic_types.Axis,
    alignment: wrap.WrapAlignment,
    spacing: core.double,
    runAlignment: wrap.WrapAlignment,
    runSpacing: core.double,
    crossAxisAlignment: wrap.WrapCrossAlignment,
    textDirection: dart.nullable(ui.TextDirection),
    verticalDirection: basic_types.VerticalDirection,
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(wrap.RenderWrap, I[0]);
  dart.setFieldSignature(wrap.RenderWrap, () => ({
    __proto__: dart.getFields(wrap.RenderWrap.__proto__),
    [_direction]: dart.fieldType(basic_types.Axis),
    [_alignment]: dart.fieldType(wrap.WrapAlignment),
    [_spacing]: dart.fieldType(core.double),
    [_runAlignment]: dart.fieldType(wrap.WrapAlignment),
    [_runSpacing]: dart.fieldType(core.double),
    [_crossAxisAlignment]: dart.fieldType(wrap.WrapCrossAlignment),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_verticalDirection]: dart.fieldType(basic_types.VerticalDirection),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_hasVisualOverflow]: dart.fieldType(core.bool),
    [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/wrap.dart", {
    "package:flutter/src/rendering/wrap.dart": wrap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["wrap.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/wrap.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__wrap: wrap
  };
}));

//# sourceMappingURL=wrap.dart.lib.js.map
