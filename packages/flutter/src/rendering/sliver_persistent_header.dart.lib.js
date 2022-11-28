define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/scheduler/ticker.dart'], (function load__packages__flutter__src__rendering__sliver_persistent_header_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__scheduler__ticker$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const viewport = packages__flutter__src__rendering__sliver$46dart.src__rendering__viewport;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const math$ = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  var sliver_persistent_header = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $abs = dartx.abs;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    SliverConstraintsTovoid: () => (T.SliverConstraintsTovoid = dart.constFn(dart.fnType(dart.void, [sliver.SliverConstraints])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    TweenOfdouble: () => (T.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.prototype,
        [maxShowOnScreenExtent$]: 1 / 0,
        [minShowOnScreenExtent$]: -1 / 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/sliver_persistent_header.dart",
    "package:flutter/src/rendering/sliver_persistent_header.dart"
  ];
  var stretchTriggerOffset$ = dart.privateName(sliver_persistent_header, "OverScrollHeaderStretchConfiguration.stretchTriggerOffset");
  var onStretchTrigger$ = dart.privateName(sliver_persistent_header, "OverScrollHeaderStretchConfiguration.onStretchTrigger");
  sliver_persistent_header.OverScrollHeaderStretchConfiguration = class OverScrollHeaderStretchConfiguration extends core.Object {
    get stretchTriggerOffset() {
      return this[stretchTriggerOffset$];
    }
    set stretchTriggerOffset(value) {
      super.stretchTriggerOffset = value;
    }
    get onStretchTrigger() {
      return this[onStretchTrigger$];
    }
    set onStretchTrigger(value) {
      super.onStretchTrigger = value;
    }
    static ['_#new#tearOff'](opts) {
      let stretchTriggerOffset = opts && 'stretchTriggerOffset' in opts ? opts.stretchTriggerOffset : 100;
      let onStretchTrigger = opts && 'onStretchTrigger' in opts ? opts.onStretchTrigger : null;
      return new sliver_persistent_header.OverScrollHeaderStretchConfiguration.new({stretchTriggerOffset: stretchTriggerOffset, onStretchTrigger: onStretchTrigger});
    }
  };
  (sliver_persistent_header.OverScrollHeaderStretchConfiguration.new = function(opts) {
    let stretchTriggerOffset = opts && 'stretchTriggerOffset' in opts ? opts.stretchTriggerOffset : 100;
    let onStretchTrigger = opts && 'onStretchTrigger' in opts ? opts.onStretchTrigger : null;
    this[stretchTriggerOffset$] = stretchTriggerOffset;
    this[onStretchTrigger$] = onStretchTrigger;
    if (!(stretchTriggerOffset !== null)) dart.assertFailed(null, I[0], 40, 15, "stretchTriggerOffset != null");
    ;
  }).prototype = sliver_persistent_header.OverScrollHeaderStretchConfiguration.prototype;
  dart.addTypeTests(sliver_persistent_header.OverScrollHeaderStretchConfiguration);
  dart.addTypeCaches(sliver_persistent_header.OverScrollHeaderStretchConfiguration);
  dart.setLibraryUri(sliver_persistent_header.OverScrollHeaderStretchConfiguration, I[1]);
  dart.setFieldSignature(sliver_persistent_header.OverScrollHeaderStretchConfiguration, () => ({
    __proto__: dart.getFields(sliver_persistent_header.OverScrollHeaderStretchConfiguration.__proto__),
    stretchTriggerOffset: dart.finalFieldType(core.double),
    onStretchTrigger: dart.finalFieldType(dart.nullable(dart.fnType(async.Future$(dart.void), [])))
  }));
  var minShowOnScreenExtent$ = dart.privateName(sliver_persistent_header, "PersistentHeaderShowOnScreenConfiguration.minShowOnScreenExtent");
  var maxShowOnScreenExtent$ = dart.privateName(sliver_persistent_header, "PersistentHeaderShowOnScreenConfiguration.maxShowOnScreenExtent");
  sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration = class PersistentHeaderShowOnScreenConfiguration extends core.Object {
    get minShowOnScreenExtent() {
      return this[minShowOnScreenExtent$];
    }
    set minShowOnScreenExtent(value) {
      super.minShowOnScreenExtent = value;
    }
    get maxShowOnScreenExtent() {
      return this[maxShowOnScreenExtent$];
    }
    set maxShowOnScreenExtent(value) {
      super.maxShowOnScreenExtent = value;
    }
    static ['_#new#tearOff'](opts) {
      let minShowOnScreenExtent = opts && 'minShowOnScreenExtent' in opts ? opts.minShowOnScreenExtent : -1 / 0;
      let maxShowOnScreenExtent = opts && 'maxShowOnScreenExtent' in opts ? opts.maxShowOnScreenExtent : 1 / 0;
      return new sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.new({minShowOnScreenExtent: minShowOnScreenExtent, maxShowOnScreenExtent: maxShowOnScreenExtent});
    }
  };
  (sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.new = function(opts) {
    let minShowOnScreenExtent = opts && 'minShowOnScreenExtent' in opts ? opts.minShowOnScreenExtent : -1 / 0;
    let maxShowOnScreenExtent = opts && 'maxShowOnScreenExtent' in opts ? opts.maxShowOnScreenExtent : 1 / 0;
    this[minShowOnScreenExtent$] = minShowOnScreenExtent;
    this[maxShowOnScreenExtent$] = maxShowOnScreenExtent;
    if (!(minShowOnScreenExtent <= maxShowOnScreenExtent)) dart.assertFailed(null, I[0], 61, 15, "minShowOnScreenExtent <= maxShowOnScreenExtent");
    ;
  }).prototype = sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.prototype;
  dart.addTypeTests(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration);
  dart.addTypeCaches(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration);
  dart.setLibraryUri(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration, I[1]);
  dart.setFieldSignature(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration, () => ({
    __proto__: dart.getFields(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration.__proto__),
    minShowOnScreenExtent: dart.finalFieldType(core.double),
    maxShowOnScreenExtent: dart.finalFieldType(core.double)
  }));
  var stretchConfiguration$ = dart.privateName(sliver_persistent_header, "RenderSliverPersistentHeader.stretchConfiguration");
  var __RenderSliverPersistentHeader__lastStretchOffset = dart.privateName(sliver_persistent_header, "_#RenderSliverPersistentHeader#_lastStretchOffset");
  var _needsUpdateChild = dart.privateName(sliver_persistent_header, "_needsUpdateChild");
  var _lastShrinkOffset = dart.privateName(sliver_persistent_header, "_lastShrinkOffset");
  var _lastOverlapsContent = dart.privateName(sliver_persistent_header, "_lastOverlapsContent");
  var _lastStretchOffset = dart.privateName(sliver_persistent_header, "_lastStretchOffset");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  const RenderSliver_RenderObjectWithChildMixin$36 = class RenderSliver_RenderObjectWithChildMixin extends sliver.RenderSliver {};
  (RenderSliver_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderSliver_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  const RenderSliver_RenderSliverHelpers$36 = class RenderSliver_RenderSliverHelpers extends RenderSliver_RenderObjectWithChildMixin$36 {};
  (RenderSliver_RenderSliverHelpers$36.new = function() {
    RenderSliver_RenderSliverHelpers$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverHelpers$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverHelpers$36, sliver.RenderSliverHelpers);
  sliver_persistent_header.RenderSliverPersistentHeader = class RenderSliverPersistentHeader extends RenderSliver_RenderSliverHelpers$36 {
    get stretchConfiguration() {
      return this[stretchConfiguration$];
    }
    set stretchConfiguration(value) {
      this[stretchConfiguration$] = value;
    }
    get [_lastStretchOffset]() {
      let t0;
      t0 = this[__RenderSliverPersistentHeader__lastStretchOffset];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_lastStretchOffset")) : t0;
    }
    set [_lastStretchOffset](library$32package$58flutter$47src$47rendering$47sliver_persistent_header$46dart$58$58_lastStretchOffset$35param) {
      this[__RenderSliverPersistentHeader__lastStretchOffset] = library$32package$58flutter$47src$47rendering$47sliver_persistent_header$46dart$58$58_lastStretchOffset$35param;
    }
    get childExtent() {
      if (this.child == null) {
        return 0.0;
      }
      if (!dart.nullCheck(this.child).hasSize) dart.assertFailed(null, I[0], 154, 12, "child!.hasSize");
      if (!(this.constraints.axis !== null)) dart.assertFailed(null, I[0], 155, 12, "constraints.axis != null");
      switch (this.constraints.axis) {
        case C[0] || CT.C0:
          {
            return dart.nullCheck(this.child).size.height;
          }
        case C[1] || CT.C1:
          {
            return dart.nullCheck(this.child).size.width;
          }
      }
    }
    updateChild(shrinkOffset, overlapsContent) {
    }
    markNeedsLayout() {
      this[_needsUpdateChild] = true;
      super.markNeedsLayout();
    }
    layoutChild(scrollOffset, maxExtent, opts) {
      let t0;
      let overlapsContent = opts && 'overlapsContent' in opts ? opts.overlapsContent : false;
      if (!(maxExtent !== null)) dart.assertFailed(null, I[0], 220, 12, "maxExtent != null");
      let shrinkOffset = math.min(core.double, scrollOffset, maxExtent);
      if (this[_needsUpdateChild] || this[_lastShrinkOffset] !== shrinkOffset || this[_lastOverlapsContent] !== overlapsContent) {
        this.invokeLayoutCallback(sliver.SliverConstraints, dart.fn(constraints => {
          if (!constraints._equals(this.constraints)) dart.assertFailed(null, I[0], 224, 16, "constraints == this.constraints");
          this.updateChild(shrinkOffset, overlapsContent);
        }, T.SliverConstraintsTovoid()));
        this[_lastShrinkOffset] = shrinkOffset;
        this[_lastOverlapsContent] = overlapsContent;
        this[_needsUpdateChild] = false;
      }
      if (!(this.minExtent !== null)) dart.assertFailed(null, I[0], 231, 12, "minExtent != null");
      if (!dart.fn(() => {
        if (this.minExtent <= maxExtent) {
          return true;
        }
        dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The maxExtent for this " + dart.str(this[$runtimeType]) + " is less than its minExtent."), new diagnostics.DoubleProperty.new("The specified maxExtent was", maxExtent), new diagnostics.DoubleProperty.new("The specified minExtent was", this.minExtent)])));
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 232, 12, "() {\n      if (minExtent <= maxExtent) {\n        return true;\n      }\n      throw FlutterError.fromParts(<DiagnosticsNode>[\n        ErrorSummary('The maxExtent for this $runtimeType is less than its minExtent.'),\n        DoubleProperty('The specified maxExtent was', maxExtent),\n        DoubleProperty('The specified minExtent was', minExtent),\n      ]);\n    }()");
      let stretchOffset = 0.0;
      if (this.stretchConfiguration != null && this.constraints.scrollOffset === 0.0) {
        stretchOffset = stretchOffset + this.constraints.overlap[$abs]();
      }
      t0 = this.child;
      t0 == null ? null : t0.layout(this.constraints.asBoxConstraints({maxExtent: math.max(core.double, this.minExtent, maxExtent - shrinkOffset) + stretchOffset}), {parentUsesSize: true});
      if (this.stretchConfiguration != null && dart.nullCheck(this.stretchConfiguration).onStretchTrigger != null && stretchOffset >= dart.nullCheck(this.stretchConfiguration).stretchTriggerOffset && this[_lastStretchOffset] <= dart.nullCheck(this.stretchConfiguration).stretchTriggerOffset) {
        dart.nullCheck(dart.nullCheck(this.stretchConfiguration).onStretchTrigger)();
      }
      this[_lastStretchOffset] = stretchOffset;
    }
    childMainAxisPosition(child) {
      object.RenderObject.as(child);
      return super.childMainAxisPosition(child);
    }
    hitTestChildren(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (!(dart.nullCheck(this.geometry).hitTestExtent > 0.0)) dart.assertFailed(null, I[0], 288, 12, "geometry!.hitTestExtent > 0.0");
      if (this.child != null) {
        return this.hitTestBoxChild(new box.BoxHitTestResult.wrap(result), dart.nullCheck(this.child), {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
      }
      return false;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[0], 297, 12, "child != null");
      if (!child[$_equals](this.child)) dart.assertFailed(null, I[0], 298, 12, "child == this.child");
      this.applyPaintTransformForBoxChild(box.RenderBox.as(child), transform);
    }
    paint(context, offset) {
      if (this.child != null && dart.nullCheck(this.geometry).visible) {
        if (!(this.constraints.axisDirection !== null)) dart.assertFailed(null, I[0], 305, 14, "constraints.axisDirection != null");
        switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
          case C[2] || CT.C2:
            {
              offset = offset['+'](new ui.Offset.new(0.0, dart.nullCheck(this.geometry).paintExtent - this.childMainAxisPosition(dart.nullCheck(this.child)) - this.childExtent));
              break;
            }
          case C[3] || CT.C3:
            {
              offset = offset['+'](new ui.Offset.new(0.0, this.childMainAxisPosition(dart.nullCheck(this.child))));
              break;
            }
          case C[4] || CT.C4:
            {
              offset = offset['+'](new ui.Offset.new(dart.nullCheck(this.geometry).paintExtent - this.childMainAxisPosition(dart.nullCheck(this.child)) - this.childExtent, 0.0));
              break;
            }
          case C[5] || CT.C5:
            {
              offset = offset['+'](new ui.Offset.new(this.childMainAxisPosition(dart.nullCheck(this.child)), 0.0));
              break;
            }
        }
        context.paintChild(dart.nullCheck(this.child), offset);
      }
    }
    describeSemanticsConfiguration(config) {
      super.describeSemanticsConfiguration(config);
      config.addTagForChildren(viewport.RenderViewport.excludeFromScrolling);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.lazy("maxExtent", dart.fn(() => this.maxExtent, T.VoidTodouble())));
      properties.add(new diagnostics.DoubleProperty.lazy("child position", dart.fn(() => this.childMainAxisPosition(dart.nullCheck(this.child)), T.VoidTodouble())));
    }
  };
  (sliver_persistent_header.RenderSliverPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    this[__RenderSliverPersistentHeader__lastStretchOffset] = null;
    this[_needsUpdateChild] = true;
    this[_lastShrinkOffset] = 0.0;
    this[_lastOverlapsContent] = false;
    this[stretchConfiguration$] = stretchConfiguration;
    sliver_persistent_header.RenderSliverPersistentHeader.__proto__.new.call(this);
    this.child = child;
  }).prototype = sliver_persistent_header.RenderSliverPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header.RenderSliverPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header.RenderSliverPersistentHeader.__proto__),
    updateChild: dart.fnType(dart.void, [core.double, core.bool]),
    layoutChild: dart.fnType(dart.void, [core.double, core.double], {overlapsContent: core.bool}, {})
  }));
  dart.setGetterSignature(sliver_persistent_header.RenderSliverPersistentHeader, () => ({
    __proto__: dart.getGetters(sliver_persistent_header.RenderSliverPersistentHeader.__proto__),
    [_lastStretchOffset]: core.double,
    childExtent: core.double
  }));
  dart.setSetterSignature(sliver_persistent_header.RenderSliverPersistentHeader, () => ({
    __proto__: dart.getSetters(sliver_persistent_header.RenderSliverPersistentHeader.__proto__),
    [_lastStretchOffset]: core.double
  }));
  dart.setLibraryUri(sliver_persistent_header.RenderSliverPersistentHeader, I[1]);
  dart.setFieldSignature(sliver_persistent_header.RenderSliverPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header.RenderSliverPersistentHeader.__proto__),
    [__RenderSliverPersistentHeader__lastStretchOffset]: dart.fieldType(dart.nullable(core.double)),
    [_needsUpdateChild]: dart.fieldType(core.bool),
    [_lastShrinkOffset]: dart.fieldType(core.double),
    [_lastOverlapsContent]: dart.fieldType(core.bool),
    stretchConfiguration: dart.fieldType(dart.nullable(sliver_persistent_header.OverScrollHeaderStretchConfiguration))
  }));
  var _childPosition = dart.privateName(sliver_persistent_header, "_childPosition");
  sliver_persistent_header.RenderSliverScrollingPersistentHeader = class RenderSliverScrollingPersistentHeader extends sliver_persistent_header.RenderSliverPersistentHeader {
    updateGeometry() {
      let stretchOffset = 0.0;
      if (this.stretchConfiguration != null) {
        stretchOffset = stretchOffset + this.constraints.overlap[$abs]();
      }
      let maxExtent = this.maxExtent;
      let paintExtent = maxExtent - this.constraints.scrollOffset;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: math.min(core.double, this.constraints.overlap, 0.0), paintExtent: math$.clampDouble(paintExtent, 0.0, this.constraints.remainingPaintExtent), maxPaintExtent: maxExtent + stretchOffset, hasVisualOverflow: true});
      return stretchOffset > 0 ? 0.0 : math.min(core.double, 0.0, paintExtent - this.childExtent);
    }
    performLayout() {
      let constraints = this.constraints;
      let maxExtent = this.maxExtent;
      this.layoutChild(constraints.scrollOffset, maxExtent);
      let paintExtent = maxExtent - constraints.scrollOffset;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: math.min(core.double, constraints.overlap, 0.0), paintExtent: math$.clampDouble(paintExtent, 0.0, constraints.remainingPaintExtent), maxPaintExtent: maxExtent, hasVisualOverflow: true});
      this[_childPosition] = this.updateGeometry();
    }
    childMainAxisPosition(child) {
      box.RenderBox.as(child);
      if (!child[$_equals](this.child)) dart.assertFailed(null, I[0], 395, 12, "child == this.child");
      if (!(this[_childPosition] != null)) dart.assertFailed(null, I[0], 396, 12, "_childPosition != null");
      return dart.nullCheck(this[_childPosition]);
    }
  };
  (sliver_persistent_header.RenderSliverScrollingPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    this[_childPosition] = null;
    sliver_persistent_header.RenderSliverScrollingPersistentHeader.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration});
    ;
  }).prototype = sliver_persistent_header.RenderSliverScrollingPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverScrollingPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverScrollingPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header.RenderSliverScrollingPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header.RenderSliverScrollingPersistentHeader.__proto__),
    updateGeometry: dart.fnType(core.double, []),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_persistent_header.RenderSliverScrollingPersistentHeader, I[1]);
  dart.setFieldSignature(sliver_persistent_header.RenderSliverScrollingPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header.RenderSliverScrollingPersistentHeader.__proto__),
    [_childPosition]: dart.fieldType(dart.nullable(core.double))
  }));
  var showOnScreenConfiguration$ = dart.privateName(sliver_persistent_header, "RenderSliverPinnedPersistentHeader.showOnScreenConfiguration");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  sliver_persistent_header.RenderSliverPinnedPersistentHeader = class RenderSliverPinnedPersistentHeader extends sliver_persistent_header.RenderSliverPersistentHeader {
    get showOnScreenConfiguration() {
      return this[showOnScreenConfiguration$];
    }
    set showOnScreenConfiguration(value) {
      this[showOnScreenConfiguration$] = value;
    }
    performLayout() {
      let constraints = this.constraints;
      let maxExtent = this.maxExtent;
      let overlapsContent = constraints.overlap > 0.0;
      this.layoutChild(constraints.scrollOffset, maxExtent, {overlapsContent: overlapsContent});
      let effectiveRemainingPaintExtent = math.max(core.double, 0.0, constraints.remainingPaintExtent - constraints.overlap);
      let layoutExtent = math$.clampDouble(maxExtent - constraints.scrollOffset, 0.0, effectiveRemainingPaintExtent);
      let stretchOffset = this.stretchConfiguration != null ? constraints.overlap[$abs]() : 0.0;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: constraints.overlap, paintExtent: math.min(core.double, this.childExtent, effectiveRemainingPaintExtent), layoutExtent: layoutExtent, maxPaintExtent: maxExtent + stretchOffset, maxScrollObstructionExtent: this.minExtent, cacheExtent: layoutExtent > 0.0 ? -constraints.cacheOrigin + layoutExtent : layoutExtent, hasVisualOverflow: true});
    }
    childMainAxisPosition(child) {
      box.RenderBox.as(child);
      return 0.0;
    }
    showOnScreen(opts) {
      let t0;
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[7] || CT.C7;
      let curve = opts && 'curve' in opts ? opts.curve : C[8] || CT.C8;
      let localBounds = descendant != null ? matrix_utils.MatrixUtils.transformRect(descendant.getTransformTo(this), (t0 = rect, t0 == null ? descendant.paintBounds : t0)) : rect;
      let newRect = null;
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C[2] || CT.C2:
          {
            newRect = sliver_persistent_header._trim(localBounds, {bottom: this.childExtent});
            break;
          }
        case C[5] || CT.C5:
          {
            newRect = sliver_persistent_header._trim(localBounds, {left: 0.0});
            break;
          }
        case C[3] || CT.C3:
          {
            newRect = sliver_persistent_header._trim(localBounds, {top: 0.0});
            break;
          }
        case C[4] || CT.C4:
          {
            newRect = sliver_persistent_header._trim(localBounds, {right: this.childExtent});
            break;
          }
      }
      super.showOnScreen({descendant: this, rect: newRect, duration: duration, curve: curve});
    }
  };
  (sliver_persistent_header.RenderSliverPinnedPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : C[6] || CT.C6;
    this[showOnScreenConfiguration$] = showOnScreenConfiguration;
    sliver_persistent_header.RenderSliverPinnedPersistentHeader.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration});
    ;
  }).prototype = sliver_persistent_header.RenderSliverPinnedPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverPinnedPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverPinnedPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header.RenderSliverPinnedPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header.RenderSliverPinnedPersistentHeader.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_persistent_header.RenderSliverPinnedPersistentHeader, I[1]);
  dart.setFieldSignature(sliver_persistent_header.RenderSliverPinnedPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header.RenderSliverPinnedPersistentHeader.__proto__),
    showOnScreenConfiguration: dart.fieldType(dart.nullable(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration))
  }));
  var curve$ = dart.privateName(sliver_persistent_header, "FloatingHeaderSnapConfiguration.curve");
  var duration$ = dart.privateName(sliver_persistent_header, "FloatingHeaderSnapConfiguration.duration");
  sliver_persistent_header.FloatingHeaderSnapConfiguration = class FloatingHeaderSnapConfiguration extends core.Object {
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    static ['_#new#tearOff'](opts) {
      let curve = opts && 'curve' in opts ? opts.curve : C[8] || CT.C8;
      let duration = opts && 'duration' in opts ? opts.duration : C[9] || CT.C9;
      return new sliver_persistent_header.FloatingHeaderSnapConfiguration.new({curve: curve, duration: duration});
    }
  };
  (sliver_persistent_header.FloatingHeaderSnapConfiguration.new = function(opts) {
    let curve = opts && 'curve' in opts ? opts.curve : C[8] || CT.C8;
    let duration = opts && 'duration' in opts ? opts.duration : C[9] || CT.C9;
    this[curve$] = curve;
    this[duration$] = duration;
    if (!(curve !== null)) dart.assertFailed(null, I[0], 499, 15, "curve != null");
    if (!(duration !== null)) dart.assertFailed(null, I[0], 500, 15, "duration != null");
    ;
  }).prototype = sliver_persistent_header.FloatingHeaderSnapConfiguration.prototype;
  dart.addTypeTests(sliver_persistent_header.FloatingHeaderSnapConfiguration);
  dart.addTypeCaches(sliver_persistent_header.FloatingHeaderSnapConfiguration);
  dart.setLibraryUri(sliver_persistent_header.FloatingHeaderSnapConfiguration, I[1]);
  dart.setFieldSignature(sliver_persistent_header.FloatingHeaderSnapConfiguration, () => ({
    __proto__: dart.getFields(sliver_persistent_header.FloatingHeaderSnapConfiguration.__proto__),
    curve: dart.finalFieldType(curves.Curve),
    duration: dart.finalFieldType(core.Duration)
  }));
  var snapConfiguration$ = dart.privateName(sliver_persistent_header, "RenderSliverFloatingPersistentHeader.snapConfiguration");
  var showOnScreenConfiguration$0 = dart.privateName(sliver_persistent_header, "RenderSliverFloatingPersistentHeader.showOnScreenConfiguration");
  var _controller = dart.privateName(sliver_persistent_header, "_controller");
  var __RenderSliverFloatingPersistentHeader__animation = dart.privateName(sliver_persistent_header, "_#RenderSliverFloatingPersistentHeader#_animation");
  var _lastActualScrollOffset = dart.privateName(sliver_persistent_header, "_lastActualScrollOffset");
  var _effectiveScrollOffset = dart.privateName(sliver_persistent_header, "_effectiveScrollOffset");
  var _lastStartedScrollDirection = dart.privateName(sliver_persistent_header, "_lastStartedScrollDirection");
  var _vsync = dart.privateName(sliver_persistent_header, "_vsync");
  var _animation = dart.privateName(sliver_persistent_header, "_animation");
  var _updateAnimation = dart.privateName(sliver_persistent_header, "_updateAnimation");
  sliver_persistent_header.RenderSliverFloatingPersistentHeader = class RenderSliverFloatingPersistentHeader extends sliver_persistent_header.RenderSliverPersistentHeader {
    get snapConfiguration() {
      return this[snapConfiguration$];
    }
    set snapConfiguration(value) {
      this[snapConfiguration$] = value;
    }
    get showOnScreenConfiguration() {
      return this[showOnScreenConfiguration$0];
    }
    set showOnScreenConfiguration(value) {
      this[showOnScreenConfiguration$0] = value;
    }
    get [_animation]() {
      let t0;
      t0 = this[__RenderSliverFloatingPersistentHeader__animation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_animation")) : t0;
    }
    set [_animation](library$32package$58flutter$47src$47rendering$47sliver_persistent_header$46dart$58$58_animation$35param) {
      this[__RenderSliverFloatingPersistentHeader__animation] = library$32package$58flutter$47src$47rendering$47sliver_persistent_header$46dart$58$58_animation$35param;
    }
    detach() {
      let t0;
      t0 = this[_controller];
      t0 == null ? null : t0.dispose();
      this[_controller] = null;
      super.detach();
    }
    get vsync() {
      return this[_vsync];
    }
    set vsync(value) {
      let t0, t0$;
      if (dart.equals(value, this[_vsync])) {
        return;
      }
      this[_vsync] = value;
      if (value == null) {
        t0 = this[_controller];
        t0 == null ? null : t0.dispose();
        this[_controller] = null;
      } else {
        t0$ = this[_controller];
        t0$ == null ? null : t0$.resync(value);
      }
    }
    updateGeometry() {
      let stretchOffset = 0.0;
      if (this.stretchConfiguration != null) {
        stretchOffset = stretchOffset + this.constraints.overlap[$abs]();
      }
      let maxExtent = this.maxExtent;
      let paintExtent = maxExtent - dart.nullCheck(this[_effectiveScrollOffset]);
      let layoutExtent = maxExtent - this.constraints.scrollOffset;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: math.min(core.double, this.constraints.overlap, 0.0), paintExtent: math$.clampDouble(paintExtent, 0.0, this.constraints.remainingPaintExtent), layoutExtent: math$.clampDouble(layoutExtent, 0.0, this.constraints.remainingPaintExtent), maxPaintExtent: maxExtent + stretchOffset, hasVisualOverflow: true});
      return stretchOffset > 0 ? 0.0 : math.min(core.double, 0.0, paintExtent - this.childExtent);
    }
    [_updateAnimation](duration, endValue, curve) {
      let t1, t0;
      if (!(duration !== null)) dart.assertFailed(null, I[0], 610, 12, "duration != null");
      if (!(endValue !== null)) dart.assertFailed(null, I[0], 611, 12, "endValue != null");
      if (!(curve !== null)) dart.assertFailed(null, I[0], 612, 12, "curve != null");
      if (!(this.vsync != null)) dart.assertFailed("vsync must not be null if the floating header changes size animatedly.", I[0], 614, 7, "vsync != null");
      let effectiveController = (t0 = this[_controller], t0 == null ? this[_controller] = (t1 = new animation_controller.AnimationController.new({vsync: dart.nullCheck(this.vsync), duration: duration}), (() => {
        t1.addListener(dart.fn(() => {
          if (this[_effectiveScrollOffset] === this[_animation].value) {
            return;
          }
          this[_effectiveScrollOffset] = this[_animation].value;
          this.markNeedsLayout();
        }, T.VoidTovoid()));
        return t1;
      })()) : t0);
      this[_animation] = effectiveController.drive(core.double, new (T.TweenOfdouble()).new({begin: this[_effectiveScrollOffset], end: endValue}).chain(new tween.CurveTween.new({curve: curve})));
    }
    updateScrollStartDirection(direction) {
      this[_lastStartedScrollDirection] = direction;
    }
    maybeStartSnapAnimation(direction) {
      let t0;
      let snap = this.snapConfiguration;
      if (snap == null) {
        return;
      }
      if (direction === viewport_offset.ScrollDirection.forward && dart.nullCheck(this[_effectiveScrollOffset]) <= 0.0) {
        return;
      }
      if (direction === viewport_offset.ScrollDirection.reverse && dart.nullCheck(this[_effectiveScrollOffset]) >= this.maxExtent) {
        return;
      }
      this[_updateAnimation](snap.duration, direction === viewport_offset.ScrollDirection.forward ? 0.0 : this.maxExtent, snap.curve);
      t0 = this[_controller];
      t0 == null ? null : t0.forward({from: 0.0});
    }
    maybeStopSnapAnimation(direction) {
      let t0;
      t0 = this[_controller];
      t0 == null ? null : t0.stop();
    }
    performLayout() {
      let constraints = this.constraints;
      let maxExtent = this.maxExtent;
      if (this[_lastActualScrollOffset] != null && (constraints.scrollOffset < dart.nullCheck(this[_lastActualScrollOffset]) || dart.nullCheck(this[_effectiveScrollOffset]) < maxExtent)) {
        let delta = dart.nullCheck(this[_lastActualScrollOffset]) - constraints.scrollOffset;
        let allowFloatingExpansion = constraints.userScrollDirection === viewport_offset.ScrollDirection.forward || this[_lastStartedScrollDirection] != null && this[_lastStartedScrollDirection] === viewport_offset.ScrollDirection.forward;
        if (allowFloatingExpansion) {
          if (dart.nullCheck(this[_effectiveScrollOffset]) > maxExtent) {
            this[_effectiveScrollOffset] = maxExtent;
          }
        } else {
          if (delta > 0.0) {
            delta = 0.0;
          }
        }
        this[_effectiveScrollOffset] = math$.clampDouble(dart.nullCheck(this[_effectiveScrollOffset]) - delta, 0.0, constraints.scrollOffset);
      } else {
        this[_effectiveScrollOffset] = constraints.scrollOffset;
      }
      let overlapsContent = dart.nullCheck(this[_effectiveScrollOffset]) < constraints.scrollOffset;
      this.layoutChild(dart.nullCheck(this[_effectiveScrollOffset]), maxExtent, {overlapsContent: overlapsContent});
      this[_childPosition] = this.updateGeometry();
      this[_lastActualScrollOffset] = constraints.scrollOffset;
    }
    showOnScreen(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7;
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[7] || CT.C7;
      let curve = opts && 'curve' in opts ? opts.curve : C[8] || CT.C8;
      let showOnScreen = this.showOnScreenConfiguration;
      if (showOnScreen == null) {
        return super.showOnScreen({descendant: descendant, rect: rect, duration: duration, curve: curve});
      }
      if (!(this.child != null || descendant == null)) dart.assertFailed(null, I[0], 718, 12, "child != null || descendant == null");
      let childBounds = descendant != null ? matrix_utils.MatrixUtils.transformRect(descendant.getTransformTo(this.child), (t0 = rect, t0 == null ? descendant.paintBounds : t0)) : rect;
      let targetExtent = null;
      let targetRect = null;
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C[2] || CT.C2:
          {
            targetExtent = this.childExtent - dart.notNull((t0$0 = (t0$ = childBounds, t0$ == null ? null : t0$.top), t0$0 == null ? 0 : t0$0));
            targetRect = sliver_persistent_header._trim(childBounds, {bottom: this.childExtent});
            break;
          }
        case C[5] || CT.C5:
          {
            targetExtent = (t0$2 = (t0$1 = childBounds, t0$1 == null ? null : t0$1.right), t0$2 == null ? this.childExtent : t0$2);
            targetRect = sliver_persistent_header._trim(childBounds, {left: 0.0});
            break;
          }
        case C[3] || CT.C3:
          {
            targetExtent = (t0$4 = (t0$3 = childBounds, t0$3 == null ? null : t0$3.bottom), t0$4 == null ? this.childExtent : t0$4);
            targetRect = sliver_persistent_header._trim(childBounds, {top: 0.0});
            break;
          }
        case C[4] || CT.C4:
          {
            targetExtent = this.childExtent - dart.notNull((t0$6 = (t0$5 = childBounds, t0$5 == null ? null : t0$5.left), t0$6 == null ? 0 : t0$6));
            targetRect = sliver_persistent_header._trim(childBounds, {right: this.childExtent});
            break;
          }
      }
      let effectiveMaxExtent = math.max(core.double, this.childExtent, this.maxExtent);
      targetExtent = math$.clampDouble(math$.clampDouble(targetExtent, showOnScreen.minShowOnScreenExtent, showOnScreen.maxShowOnScreenExtent), this.childExtent, effectiveMaxExtent);
      if (dart.notNull(targetExtent) > this.childExtent) {
        let targetScrollOffset = this.maxExtent - dart.notNull(targetExtent);
        if (!(this.vsync != null)) dart.assertFailed("vsync must not be null if the floating header changes size animatedly.", I[0], 768, 9, "vsync != null");
        this[_updateAnimation](duration, targetScrollOffset, curve);
        t0$7 = this[_controller];
        t0$7 == null ? null : t0$7.forward({from: 0.0});
      }
      super.showOnScreen({descendant: descendant == null ? this : this.child, rect: targetRect, duration: duration, curve: curve});
    }
    childMainAxisPosition(child) {
      let t0;
      box.RenderBox.as(child);
      if (!child[$_equals](this.child)) dart.assertFailed(null, I[0], 785, 12, "child == this.child");
      t0 = this[_childPosition];
      return t0 == null ? 0.0 : t0;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("effective scroll offset", this[_effectiveScrollOffset]));
    }
  };
  (sliver_persistent_header.RenderSliverFloatingPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    this[_controller] = null;
    this[__RenderSliverFloatingPersistentHeader__animation] = null;
    this[_lastActualScrollOffset] = null;
    this[_effectiveScrollOffset] = null;
    this[_lastStartedScrollDirection] = null;
    this[_childPosition] = null;
    this[snapConfiguration$] = snapConfiguration;
    this[showOnScreenConfiguration$0] = showOnScreenConfiguration;
    this[_vsync] = vsync;
    sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration});
    ;
  }).prototype = sliver_persistent_header.RenderSliverFloatingPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverFloatingPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverFloatingPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header.RenderSliverFloatingPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__),
    updateGeometry: dart.fnType(core.double, []),
    [_updateAnimation]: dart.fnType(dart.void, [core.Duration, core.double, curves.Curve]),
    updateScrollStartDirection: dart.fnType(dart.void, [viewport_offset.ScrollDirection]),
    maybeStartSnapAnimation: dart.fnType(dart.void, [viewport_offset.ScrollDirection]),
    maybeStopSnapAnimation: dart.fnType(dart.void, [viewport_offset.ScrollDirection]),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_persistent_header.RenderSliverFloatingPersistentHeader, () => ({
    __proto__: dart.getGetters(sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__),
    [_animation]: animation.Animation$(core.double),
    vsync: dart.nullable(ticker.TickerProvider)
  }));
  dart.setSetterSignature(sliver_persistent_header.RenderSliverFloatingPersistentHeader, () => ({
    __proto__: dart.getSetters(sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__),
    [_animation]: animation.Animation$(core.double),
    vsync: dart.nullable(ticker.TickerProvider)
  }));
  dart.setLibraryUri(sliver_persistent_header.RenderSliverFloatingPersistentHeader, I[1]);
  dart.setFieldSignature(sliver_persistent_header.RenderSliverFloatingPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header.RenderSliverFloatingPersistentHeader.__proto__),
    [_controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [__RenderSliverFloatingPersistentHeader__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_lastActualScrollOffset]: dart.fieldType(dart.nullable(core.double)),
    [_effectiveScrollOffset]: dart.fieldType(dart.nullable(core.double)),
    [_lastStartedScrollDirection]: dart.fieldType(dart.nullable(viewport_offset.ScrollDirection)),
    [_childPosition]: dart.fieldType(dart.nullable(core.double)),
    [_vsync]: dart.fieldType(dart.nullable(ticker.TickerProvider)),
    snapConfiguration: dart.fieldType(dart.nullable(sliver_persistent_header.FloatingHeaderSnapConfiguration)),
    showOnScreenConfiguration: dart.fieldType(dart.nullable(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration))
  }));
  sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader = class RenderSliverFloatingPinnedPersistentHeader extends sliver_persistent_header.RenderSliverFloatingPersistentHeader {
    updateGeometry() {
      let minExtent = this.minExtent;
      let minAllowedExtent = this.constraints.remainingPaintExtent > minExtent ? minExtent : this.constraints.remainingPaintExtent;
      let maxExtent = this.maxExtent;
      let paintExtent = maxExtent - dart.nullCheck(this[_effectiveScrollOffset]);
      let clampedPaintExtent = math$.clampDouble(paintExtent, minAllowedExtent, this.constraints.remainingPaintExtent);
      let layoutExtent = maxExtent - this.constraints.scrollOffset;
      let stretchOffset = this.stretchConfiguration != null ? this.constraints.overlap[$abs]() : 0.0;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: maxExtent, paintOrigin: math.min(core.double, this.constraints.overlap, 0.0), paintExtent: clampedPaintExtent, layoutExtent: math$.clampDouble(layoutExtent, 0.0, clampedPaintExtent), maxPaintExtent: maxExtent + stretchOffset, maxScrollObstructionExtent: minExtent, hasVisualOverflow: true});
      return 0.0;
    }
  };
  (sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader.__proto__.new.call(this, {child: child, vsync: vsync, snapConfiguration: snapConfiguration, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    ;
  }).prototype = sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader);
  dart.setLibraryUri(sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader, I[1]);
  sliver_persistent_header._trim = function _trim(original, opts) {
    let t0;
    let top = opts && 'top' in opts ? opts.top : -1 / 0;
    let right = opts && 'right' in opts ? opts.right : 1 / 0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : 1 / 0;
    let left = opts && 'left' in opts ? opts.left : -1 / 0;
    t0 = original;
    return t0 == null ? null : t0.intersect(new ui.Rect.fromLTRB(left, top, right, bottom));
  };
  dart.trackLibraries("packages/flutter/src/rendering/sliver_persistent_header.dart", {
    "package:flutter/src/rendering/sliver_persistent_header.dart": sliver_persistent_header
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_persistent_header.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_persistent_header.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_persistent_header: sliver_persistent_header
  };
}));

//# sourceMappingURL=sliver_persistent_header.dart.lib.js.map