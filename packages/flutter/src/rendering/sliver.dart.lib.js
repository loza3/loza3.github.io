define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/foundation/math.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/semantics/semantics.dart'], (function load__packages__flutter__src__rendering__sliver_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__foundation__math$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__semantics__semantics$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const math$ = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  var sliver$ = Object.create(dart.library);
  var viewport = Object.create(dart.library);
  var $isNaN = dartx.isNaN;
  var $runtimeType = dartx.runtimeType;
  var $addAll = dartx.addAll;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $join = dartx.join;
  var $add = dartx.add;
  var $_equals = dartx._equals;
  var $isFinite = dartx.isFinite;
  var $where = dartx.where;
  var $forEach = dartx.forEach;
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    boolAndStringTovoid: () => (T.boolAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.bool, core.String])))(),
    doubleAndString__Tovoid: () => (T.doubleAndString__Tovoid = dart.constFn(dart.fnType(dart.void, [core.double, core.String], {mustBeNegative: core.bool, mustBePositive: core.bool}, {})))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    DiagnosticsPropertyOfSliverConstraints: () => (T.DiagnosticsPropertyOfSliverConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(sliver$.SliverConstraints)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    ListOfDiagnosticsNode: () => (T.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    ListNOfDiagnosticsNode: () => (T.ListNOfDiagnosticsNode = dart.constFn(dart.nullable(T.ListOfDiagnosticsNode())))(),
    boolAndString__Tovoid: () => (T.boolAndString__Tovoid = dart.constFn(dart.fnType(dart.void, [core.bool, core.String], {details: T.ListNOfDiagnosticsNode()}, {})))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    VoidToListOfDiagnosticsNode: () => (T.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T.ListOfDiagnosticsNode(), [])))(),
    VoidToNever: () => (T.VoidToNever = dart.constFn(dart.fnType(dart.Never, [])))(),
    DiagnosticsPropertyOfSliverGeometry: () => (T.DiagnosticsPropertyOfSliverGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(sliver$.SliverGeometry)))(),
    BoxHitTestResultTobool: () => (T.BoxHitTestResultTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult])))(),
    RenderObjectN: () => (T.RenderObjectN = dart.constFn(dart.nullable(object.RenderObject)))(),
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    RenderSliverTobool: () => (T.RenderSliverTobool = dart.constFn(dart.fnType(core.bool, [sliver$.RenderSliver])))(),
    RenderSliverN: () => (T.RenderSliverN = dart.constFn(dart.nullable(sliver$.RenderSliver)))(),
    EnumPropertyOfAxisDirection: () => (T.EnumPropertyOfAxisDirection = dart.constFn(diagnostics.EnumProperty$(basic_types.AxisDirection)))(),
    DiagnosticsPropertyOfViewportOffset: () => (T.DiagnosticsPropertyOfViewportOffset = dart.constFn(diagnostics.DiagnosticsProperty$(viewport_offset.ViewportOffset)))(),
    JSArrayOfRenderSliver: () => (T.JSArrayOfRenderSliver = dart.constFn(_interceptors.JSArray$(sliver$.RenderSliver)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: sliver$.GrowthDirection.prototype,
        [_Enum__name]: "forward",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: sliver$.GrowthDirection.prototype,
        [_Enum__name]: "reverse",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], sliver$.GrowthDirection);
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
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: sliver$.SliverGeometry.prototype,
        [cacheExtent$]: 0,
        [scrollOffsetCorrection$]: null,
        [hasVisualOverflow$]: false,
        [visible$]: false,
        [hitTestExtent$]: 0,
        [maxScrollObstructionExtent$]: 0,
        [maxPaintExtent$]: 0,
        [layoutExtent$]: 0,
        [paintExtent$]: 0,
        [paintOrigin$]: 0,
        [scrollExtent$]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281584691.0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: viewport.CacheExtentStyle.prototype,
        [_Enum__name]: "pixel",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: viewport.CacheExtentStyle.prototype,
        [_Enum__name]: "viewport",
        [_Enum_index]: 1
      });
    },
    get C11() {
      return C[11] = dart.constList([C[12] || CT.C12, C[13] || CT.C13], viewport.CacheExtentStyle);
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAlias",
        [_Enum_index]: 2
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAliasWithSaveLayer",
        [_Enum_index]: 3
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255360.0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: semantics.SemanticsTag.prototype,
        [SemanticsTag_name]: "RenderViewport.twoPane"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: semantics.SemanticsTag.prototype,
        [SemanticsTag_name]: "RenderViewport.excludeFromScrolling"
      });
    }
  }, false);
  var C = Array(23).fill(void 0);
  var I = [
    "package:flutter/src/rendering/sliver.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/sliver.dart",
    "package:flutter/src/rendering/viewport.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/viewport.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  sliver$.GrowthDirection = class GrowthDirection extends core._Enum {
    toString() {
      return "GrowthDirection." + this[_name];
    }
  };
  (sliver$.GrowthDirection.new = function(index, name) {
    sliver$.GrowthDirection.__proto__.new.call(this, index, name);
    ;
  }).prototype = sliver$.GrowthDirection.prototype;
  dart.addTypeTests(sliver$.GrowthDirection);
  dart.addTypeCaches(sliver$.GrowthDirection);
  dart.setLibraryUri(sliver$.GrowthDirection, I[0]);
  dart.setStaticFieldSignature(sliver$.GrowthDirection, () => ['values', 'forward', 'reverse']);
  dart.defineExtensionMethods(sliver$.GrowthDirection, ['toString']);
  dart.defineLazy(sliver$.GrowthDirection, {
    /*sliver$.GrowthDirection.values*/get values() {
      return C[0] || CT.C0;
    },
    /*sliver$.GrowthDirection.forward*/get forward() {
      return C[1] || CT.C1;
    },
    /*sliver$.GrowthDirection.reverse*/get reverse() {
      return C[2] || CT.C2;
    }
  }, false);
  var axisDirection$ = dart.privateName(sliver$, "SliverConstraints.axisDirection");
  var growthDirection$ = dart.privateName(sliver$, "SliverConstraints.growthDirection");
  var userScrollDirection$ = dart.privateName(sliver$, "SliverConstraints.userScrollDirection");
  var scrollOffset$ = dart.privateName(sliver$, "SliverConstraints.scrollOffset");
  var precedingScrollExtent$ = dart.privateName(sliver$, "SliverConstraints.precedingScrollExtent");
  var overlap$ = dart.privateName(sliver$, "SliverConstraints.overlap");
  var remainingPaintExtent$ = dart.privateName(sliver$, "SliverConstraints.remainingPaintExtent");
  var crossAxisExtent$ = dart.privateName(sliver$, "SliverConstraints.crossAxisExtent");
  var crossAxisDirection$ = dart.privateName(sliver$, "SliverConstraints.crossAxisDirection");
  var viewportMainAxisExtent$ = dart.privateName(sliver$, "SliverConstraints.viewportMainAxisExtent");
  var cacheOrigin$ = dart.privateName(sliver$, "SliverConstraints.cacheOrigin");
  var remainingCacheExtent$ = dart.privateName(sliver$, "SliverConstraints.remainingCacheExtent");
  sliver$.SliverConstraints = class SliverConstraints extends object.Constraints {
    get axisDirection() {
      return this[axisDirection$];
    }
    set axisDirection(value) {
      super.axisDirection = value;
    }
    get growthDirection() {
      return this[growthDirection$];
    }
    set growthDirection(value) {
      super.growthDirection = value;
    }
    get userScrollDirection() {
      return this[userScrollDirection$];
    }
    set userScrollDirection(value) {
      super.userScrollDirection = value;
    }
    get scrollOffset() {
      return this[scrollOffset$];
    }
    set scrollOffset(value) {
      super.scrollOffset = value;
    }
    get precedingScrollExtent() {
      return this[precedingScrollExtent$];
    }
    set precedingScrollExtent(value) {
      super.precedingScrollExtent = value;
    }
    get overlap() {
      return this[overlap$];
    }
    set overlap(value) {
      super.overlap = value;
    }
    get remainingPaintExtent() {
      return this[remainingPaintExtent$];
    }
    set remainingPaintExtent(value) {
      super.remainingPaintExtent = value;
    }
    get crossAxisExtent() {
      return this[crossAxisExtent$];
    }
    set crossAxisExtent(value) {
      super.crossAxisExtent = value;
    }
    get crossAxisDirection() {
      return this[crossAxisDirection$];
    }
    set crossAxisDirection(value) {
      super.crossAxisDirection = value;
    }
    get viewportMainAxisExtent() {
      return this[viewportMainAxisExtent$];
    }
    set viewportMainAxisExtent(value) {
      super.viewportMainAxisExtent = value;
    }
    get cacheOrigin() {
      return this[cacheOrigin$];
    }
    set cacheOrigin(value) {
      super.cacheOrigin = value;
    }
    get remainingCacheExtent() {
      return this[remainingCacheExtent$];
    }
    set remainingCacheExtent(value) {
      super.remainingCacheExtent = value;
    }
    static ['_#new#tearOff'](opts) {
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let growthDirection = opts && 'growthDirection' in opts ? opts.growthDirection : null;
      let userScrollDirection = opts && 'userScrollDirection' in opts ? opts.userScrollDirection : null;
      let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
      let precedingScrollExtent = opts && 'precedingScrollExtent' in opts ? opts.precedingScrollExtent : null;
      let overlap = opts && 'overlap' in opts ? opts.overlap : null;
      let remainingPaintExtent = opts && 'remainingPaintExtent' in opts ? opts.remainingPaintExtent : null;
      let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
      let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
      let viewportMainAxisExtent = opts && 'viewportMainAxisExtent' in opts ? opts.viewportMainAxisExtent : null;
      let remainingCacheExtent = opts && 'remainingCacheExtent' in opts ? opts.remainingCacheExtent : null;
      let cacheOrigin = opts && 'cacheOrigin' in opts ? opts.cacheOrigin : null;
      return new sliver$.SliverConstraints.new({axisDirection: axisDirection, growthDirection: growthDirection, userScrollDirection: userScrollDirection, scrollOffset: scrollOffset, precedingScrollExtent: precedingScrollExtent, overlap: overlap, remainingPaintExtent: remainingPaintExtent, crossAxisExtent: crossAxisExtent, crossAxisDirection: crossAxisDirection, viewportMainAxisExtent: viewportMainAxisExtent, remainingCacheExtent: remainingCacheExtent, cacheOrigin: cacheOrigin});
    }
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let growthDirection = opts && 'growthDirection' in opts ? opts.growthDirection : null;
      let userScrollDirection = opts && 'userScrollDirection' in opts ? opts.userScrollDirection : null;
      let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
      let precedingScrollExtent = opts && 'precedingScrollExtent' in opts ? opts.precedingScrollExtent : null;
      let overlap = opts && 'overlap' in opts ? opts.overlap : null;
      let remainingPaintExtent = opts && 'remainingPaintExtent' in opts ? opts.remainingPaintExtent : null;
      let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
      let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
      let viewportMainAxisExtent = opts && 'viewportMainAxisExtent' in opts ? opts.viewportMainAxisExtent : null;
      let remainingCacheExtent = opts && 'remainingCacheExtent' in opts ? opts.remainingCacheExtent : null;
      let cacheOrigin = opts && 'cacheOrigin' in opts ? opts.cacheOrigin : null;
      return new sliver$.SliverConstraints.new({axisDirection: (t2 = axisDirection, t2 == null ? this.axisDirection : t2), growthDirection: (t2$ = growthDirection, t2$ == null ? this.growthDirection : t2$), userScrollDirection: (t2$0 = userScrollDirection, t2$0 == null ? this.userScrollDirection : t2$0), scrollOffset: (t2$1 = scrollOffset, t2$1 == null ? this.scrollOffset : t2$1), precedingScrollExtent: (t2$2 = precedingScrollExtent, t2$2 == null ? this.precedingScrollExtent : t2$2), overlap: (t2$3 = overlap, t2$3 == null ? this.overlap : t2$3), remainingPaintExtent: (t2$4 = remainingPaintExtent, t2$4 == null ? this.remainingPaintExtent : t2$4), crossAxisExtent: (t2$5 = crossAxisExtent, t2$5 == null ? this.crossAxisExtent : t2$5), crossAxisDirection: (t2$6 = crossAxisDirection, t2$6 == null ? this.crossAxisDirection : t2$6), viewportMainAxisExtent: (t2$7 = viewportMainAxisExtent, t2$7 == null ? this.viewportMainAxisExtent : t2$7), remainingCacheExtent: (t2$8 = remainingCacheExtent, t2$8 == null ? this.remainingCacheExtent : t2$8), cacheOrigin: (t2$9 = cacheOrigin, t2$9 == null ? this.cacheOrigin : t2$9)});
    }
    get axis() {
      return basic_types.axisDirectionToAxis(this.axisDirection);
    }
    get normalizedGrowthDirection() {
      if (!(this.axisDirection !== null)) dart.assertFailed(null, I[1], 344, 12, "axisDirection != null");
      switch (this.axisDirection) {
        case C[3] || CT.C3:
        case C[4] || CT.C4:
          {
            return this.growthDirection;
          }
        case C[5] || CT.C5:
        case C[6] || CT.C6:
          {
            switch (this.growthDirection) {
              case C[1] || CT.C1:
                {
                  return sliver$.GrowthDirection.reverse;
                }
              case C[2] || CT.C2:
                {
                  return sliver$.GrowthDirection.forward;
                }
            }
          }
      }
    }
    get isTight() {
      return false;
    }
    get isNormalized() {
      return this.scrollOffset >= 0.0 && this.crossAxisExtent >= 0.0 && basic_types.axisDirectionToAxis(this.axisDirection) !== basic_types.axisDirectionToAxis(this.crossAxisDirection) && this.viewportMainAxisExtent >= 0.0 && this.remainingPaintExtent >= 0.0;
    }
    asBoxConstraints(opts) {
      let minExtent = opts && 'minExtent' in opts ? opts.minExtent : 0;
      let maxExtent = opts && 'maxExtent' in opts ? opts.maxExtent : 1 / 0;
      let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
      crossAxisExtent == null ? crossAxisExtent = this.crossAxisExtent : null;
      switch (this.axis) {
        case C[7] || CT.C7:
          {
            return new box.BoxConstraints.new({minHeight: crossAxisExtent, maxHeight: crossAxisExtent, minWidth: minExtent, maxWidth: maxExtent});
          }
        case C[8] || CT.C8:
          {
            return new box.BoxConstraints.new({minWidth: crossAxisExtent, maxWidth: crossAxisExtent, minHeight: minExtent, maxHeight: maxExtent});
          }
      }
    }
    debugAssertIsValid(opts) {
      let isAppliedConstraint = opts && 'isAppliedConstraint' in opts ? opts.isAppliedConstraint : false;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!dart.fn(() => {
        let hasErrors = false;
        let errorMessage = new core.StringBuffer.new("\n");
        function verify(check, message) {
          if (check) {
            return;
          }
          hasErrors = true;
          errorMessage.writeln("  " + message);
        }
        dart.fn(verify, T.boolAndStringTovoid());
        function verifyDouble(property, name, opts) {
          let mustBeNegative = opts && 'mustBeNegative' in opts ? opts.mustBeNegative : false;
          let mustBePositive = opts && 'mustBePositive' in opts ? opts.mustBePositive : false;
          verify(property !== null, "The \"" + name + "\" is null.");
          if (property[$isNaN]) {
            let additional = ".";
            if (mustBePositive) {
              additional = ", expected greater than or equal to zero.";
            } else if (mustBeNegative) {
              additional = ", expected less than or equal to zero.";
            }
            verify(false, "The \"" + name + "\" is NaN" + additional);
          } else if (mustBePositive) {
            verify(property >= 0.0, "The \"" + name + "\" is negative.");
          } else if (mustBeNegative) {
            verify(property <= 0.0, "The \"" + name + "\" is positive.");
          }
        }
        dart.fn(verifyDouble, T.doubleAndString__Tovoid());
        verify(this.axis !== null, "The \"axis\" is null.");
        verify(this.growthDirection !== null, "The \"growthDirection\" is null.");
        verifyDouble(this.scrollOffset, "scrollOffset");
        verifyDouble(this.overlap, "overlap");
        verifyDouble(this.crossAxisExtent, "crossAxisExtent");
        verifyDouble(this.scrollOffset, "scrollOffset", {mustBePositive: true});
        verify(this.crossAxisDirection !== null, "The \"crossAxisDirection\" is null.");
        verify(basic_types.axisDirectionToAxis(this.axisDirection) !== basic_types.axisDirectionToAxis(this.crossAxisDirection), "The \"axisDirection\" and the \"crossAxisDirection\" are along the same axis.");
        verifyDouble(this.viewportMainAxisExtent, "viewportMainAxisExtent", {mustBePositive: true});
        verifyDouble(this.remainingPaintExtent, "remainingPaintExtent", {mustBePositive: true});
        verifyDouble(this.remainingCacheExtent, "remainingCacheExtent", {mustBePositive: true});
        verifyDouble(this.cacheOrigin, "cacheOrigin", {mustBeNegative: true});
        verifyDouble(this.precedingScrollExtent, "precedingScrollExtent", {mustBePositive: true});
        verify(this.isNormalized, "The constraints are not normalized.");
        if (hasErrors) {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t2 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " is not valid: " + dart.str(errorMessage))]);
            if (informationCollector != null) t2[$addAll](informationCollector());
            t2.push(new (T.DiagnosticsPropertyOfSliverConstraints()).new("The offending constraints were", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            return t2;
          })()));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 409, 12, "() {\n      bool hasErrors = false;\n      final StringBuffer errorMessage = StringBuffer('\\n');\n      void verify(bool check, String message) {\n        if (check) {\n          return;\n        }\n        hasErrors = true;\n        errorMessage.writeln('  $message');\n      }\n      void verifyDouble(double property, String name, {bool mustBePositive = false, bool mustBeNegative = false}) {\n        verify(property != null, 'The \"$name\" is null.');\n        if (property.isNaN) {\n          String additional = '.';\n          if (mustBePositive) {\n            additional = ', expected greater than or equal to zero.';\n          } else if (mustBeNegative) {\n            additional = ', expected less than or equal to zero.';\n          }\n          verify(false, 'The \"$name\" is NaN$additional');\n        } else if (mustBePositive) {\n          verify(property >= 0.0, 'The \"$name\" is negative.');\n        } else if (mustBeNegative) {\n          verify(property <= 0.0, 'The \"$name\" is positive.');\n        }\n      }\n      verify(axis != null, 'The \"axis\" is null.');\n      verify(growthDirection != null, 'The \"growthDirection\" is null.');\n      verifyDouble(scrollOffset, 'scrollOffset');\n      verifyDouble(overlap, 'overlap');\n      verifyDouble(crossAxisExtent, 'crossAxisExtent');\n      verifyDouble(scrollOffset, 'scrollOffset', mustBePositive: true);\n      verify(crossAxisDirection != null, 'The \"crossAxisDirection\" is null.');\n      verify(axisDirectionToAxis(axisDirection) != axisDirectionToAxis(crossAxisDirection), 'The \"axisDirection\" and the \"crossAxisDirection\" are along the same axis.');\n      verifyDouble(viewportMainAxisExtent, 'viewportMainAxisExtent', mustBePositive: true);\n      verifyDouble(remainingPaintExtent, 'remainingPaintExtent', mustBePositive: true);\n      verifyDouble(remainingCacheExtent, 'remainingCacheExtent', mustBePositive: true);\n      verifyDouble(cacheOrigin, 'cacheOrigin', mustBeNegative: true);\n      verifyDouble(precedingScrollExtent, 'precedingScrollExtent', mustBePositive: true);\n      verify(isNormalized, 'The constraints are not normalized.'); // should be redundant with earlier checks\n      if (hasErrors) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType is not valid: $errorMessage'),\n          if (informationCollector != null)\n            ...informationCollector(),\n          DiagnosticsProperty<SliverConstraints>('The offending constraints were', this, style: DiagnosticsTreeStyle.errorProperty),\n        ]);\n      }\n      return true;\n    }()");
      return true;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!sliver$.SliverConstraints.is(other)) {
        return false;
      }
      if (!other.debugAssertIsValid()) dart.assertFailed(null, I[1], 470, 12, "other.debugAssertIsValid()");
      return other.axisDirection === this.axisDirection && other.growthDirection === this.growthDirection && other.scrollOffset === this.scrollOffset && other.overlap === this.overlap && other.remainingPaintExtent === this.remainingPaintExtent && other.crossAxisExtent === this.crossAxisExtent && other.crossAxisDirection === this.crossAxisDirection && other.viewportMainAxisExtent === this.viewportMainAxisExtent && other.remainingCacheExtent === this.remainingCacheExtent && other.cacheOrigin === this.cacheOrigin;
    }
    get hashCode() {
      return core.Object.hash(this.axisDirection, this.growthDirection, this.scrollOffset, this.overlap, this.remainingPaintExtent, this.crossAxisExtent, this.crossAxisDirection, this.viewportMainAxisExtent, this.remainingCacheExtent, this.cacheOrigin);
    }
    toString() {
      let properties = (() => {
        let t3 = T.JSArrayOfString().of([dart.str(this.axisDirection), dart.str(this.growthDirection), dart.str(this.userScrollDirection), "scrollOffset: " + this.scrollOffset[$toStringAsFixed](1), "remainingPaintExtent: " + this.remainingPaintExtent[$toStringAsFixed](1)]);
        if (this.overlap !== 0.0) t3.push("overlap: " + this.overlap[$toStringAsFixed](1));
        t3.push("crossAxisExtent: " + this.crossAxisExtent[$toStringAsFixed](1));
        t3.push("crossAxisDirection: " + dart.str(this.crossAxisDirection));
        t3.push("viewportMainAxisExtent: " + this.viewportMainAxisExtent[$toStringAsFixed](1));
        t3.push("remainingCacheExtent: " + this.remainingCacheExtent[$toStringAsFixed](1));
        t3.push("cacheOrigin: " + this.cacheOrigin[$toStringAsFixed](1));
        return t3;
      })();
      return "SliverConstraints(" + properties[$join](", ") + ")";
    }
  };
  (sliver$.SliverConstraints.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
    let growthDirection = opts && 'growthDirection' in opts ? opts.growthDirection : null;
    let userScrollDirection = opts && 'userScrollDirection' in opts ? opts.userScrollDirection : null;
    let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
    let precedingScrollExtent = opts && 'precedingScrollExtent' in opts ? opts.precedingScrollExtent : null;
    let overlap = opts && 'overlap' in opts ? opts.overlap : null;
    let remainingPaintExtent = opts && 'remainingPaintExtent' in opts ? opts.remainingPaintExtent : null;
    let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
    let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
    let viewportMainAxisExtent = opts && 'viewportMainAxisExtent' in opts ? opts.viewportMainAxisExtent : null;
    let remainingCacheExtent = opts && 'remainingCacheExtent' in opts ? opts.remainingCacheExtent : null;
    let cacheOrigin = opts && 'cacheOrigin' in opts ? opts.cacheOrigin : null;
    this[axisDirection$] = axisDirection;
    this[growthDirection$] = growthDirection;
    this[userScrollDirection$] = userScrollDirection;
    this[scrollOffset$] = scrollOffset;
    this[precedingScrollExtent$] = precedingScrollExtent;
    this[overlap$] = overlap;
    this[remainingPaintExtent$] = remainingPaintExtent;
    this[crossAxisExtent$] = crossAxisExtent;
    this[crossAxisDirection$] = crossAxisDirection;
    this[viewportMainAxisExtent$] = viewportMainAxisExtent;
    this[remainingCacheExtent$] = remainingCacheExtent;
    this[cacheOrigin$] = cacheOrigin;
    if (!(axisDirection !== null)) dart.assertFailed(null, I[1], 106, 15, "axisDirection != null");
    if (!(growthDirection !== null)) dart.assertFailed(null, I[1], 107, 15, "growthDirection != null");
    if (!(userScrollDirection !== null)) dart.assertFailed(null, I[1], 108, 15, "userScrollDirection != null");
    if (!(scrollOffset !== null)) dart.assertFailed(null, I[1], 109, 15, "scrollOffset != null");
    if (!(precedingScrollExtent !== null)) dart.assertFailed(null, I[1], 110, 15, "precedingScrollExtent != null");
    if (!(overlap !== null)) dart.assertFailed(null, I[1], 111, 15, "overlap != null");
    if (!(remainingPaintExtent !== null)) dart.assertFailed(null, I[1], 112, 15, "remainingPaintExtent != null");
    if (!(crossAxisExtent !== null)) dart.assertFailed(null, I[1], 113, 15, "crossAxisExtent != null");
    if (!(crossAxisDirection !== null)) dart.assertFailed(null, I[1], 114, 15, "crossAxisDirection != null");
    if (!(viewportMainAxisExtent !== null)) dart.assertFailed(null, I[1], 115, 15, "viewportMainAxisExtent != null");
    if (!(remainingCacheExtent !== null)) dart.assertFailed(null, I[1], 116, 15, "remainingCacheExtent != null");
    if (!(cacheOrigin !== null)) dart.assertFailed(null, I[1], 117, 15, "cacheOrigin != null");
    sliver$.SliverConstraints.__proto__.new.call(this);
    ;
  }).prototype = sliver$.SliverConstraints.prototype;
  dart.addTypeTests(sliver$.SliverConstraints);
  dart.addTypeCaches(sliver$.SliverConstraints);
  dart.setMethodSignature(sliver$.SliverConstraints, () => ({
    __proto__: dart.getMethods(sliver$.SliverConstraints.__proto__),
    copyWith: dart.fnType(sliver$.SliverConstraints, [], {axisDirection: dart.nullable(basic_types.AxisDirection), cacheOrigin: dart.nullable(core.double), crossAxisDirection: dart.nullable(basic_types.AxisDirection), crossAxisExtent: dart.nullable(core.double), growthDirection: dart.nullable(sliver$.GrowthDirection), overlap: dart.nullable(core.double), precedingScrollExtent: dart.nullable(core.double), remainingCacheExtent: dart.nullable(core.double), remainingPaintExtent: dart.nullable(core.double), scrollOffset: dart.nullable(core.double), userScrollDirection: dart.nullable(viewport_offset.ScrollDirection), viewportMainAxisExtent: dart.nullable(core.double)}, {}),
    asBoxConstraints: dart.fnType(box.BoxConstraints, [], {crossAxisExtent: dart.nullable(core.double), maxExtent: core.double, minExtent: core.double}, {})
  }));
  dart.setGetterSignature(sliver$.SliverConstraints, () => ({
    __proto__: dart.getGetters(sliver$.SliverConstraints.__proto__),
    axis: basic_types.Axis,
    normalizedGrowthDirection: sliver$.GrowthDirection,
    isTight: core.bool,
    isNormalized: core.bool
  }));
  dart.setLibraryUri(sliver$.SliverConstraints, I[0]);
  dart.setFieldSignature(sliver$.SliverConstraints, () => ({
    __proto__: dart.getFields(sliver$.SliverConstraints.__proto__),
    axisDirection: dart.finalFieldType(basic_types.AxisDirection),
    growthDirection: dart.finalFieldType(sliver$.GrowthDirection),
    userScrollDirection: dart.finalFieldType(viewport_offset.ScrollDirection),
    scrollOffset: dart.finalFieldType(core.double),
    precedingScrollExtent: dart.finalFieldType(core.double),
    overlap: dart.finalFieldType(core.double),
    remainingPaintExtent: dart.finalFieldType(core.double),
    crossAxisExtent: dart.finalFieldType(core.double),
    crossAxisDirection: dart.finalFieldType(basic_types.AxisDirection),
    viewportMainAxisExtent: dart.finalFieldType(core.double),
    cacheOrigin: dart.finalFieldType(core.double),
    remainingCacheExtent: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(sliver$.SliverConstraints, ['_equals', 'toString']);
  dart.defineExtensionAccessors(sliver$.SliverConstraints, ['hashCode']);
  var scrollExtent$ = dart.privateName(sliver$, "SliverGeometry.scrollExtent");
  var paintOrigin$ = dart.privateName(sliver$, "SliverGeometry.paintOrigin");
  var paintExtent$ = dart.privateName(sliver$, "SliverGeometry.paintExtent");
  var layoutExtent$ = dart.privateName(sliver$, "SliverGeometry.layoutExtent");
  var maxPaintExtent$ = dart.privateName(sliver$, "SliverGeometry.maxPaintExtent");
  var maxScrollObstructionExtent$ = dart.privateName(sliver$, "SliverGeometry.maxScrollObstructionExtent");
  var hitTestExtent$ = dart.privateName(sliver$, "SliverGeometry.hitTestExtent");
  var visible$ = dart.privateName(sliver$, "SliverGeometry.visible");
  var hasVisualOverflow$ = dart.privateName(sliver$, "SliverGeometry.hasVisualOverflow");
  var scrollOffsetCorrection$ = dart.privateName(sliver$, "SliverGeometry.scrollOffsetCorrection");
  var cacheExtent$ = dart.privateName(sliver$, "SliverGeometry.cacheExtent");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  sliver$.SliverGeometry = class SliverGeometry extends Object_Diagnosticable$36 {
    get scrollExtent() {
      return this[scrollExtent$];
    }
    set scrollExtent(value) {
      super.scrollExtent = value;
    }
    get paintOrigin() {
      return this[paintOrigin$];
    }
    set paintOrigin(value) {
      super.paintOrigin = value;
    }
    get paintExtent() {
      return this[paintExtent$];
    }
    set paintExtent(value) {
      super.paintExtent = value;
    }
    get layoutExtent() {
      return this[layoutExtent$];
    }
    set layoutExtent(value) {
      super.layoutExtent = value;
    }
    get maxPaintExtent() {
      return this[maxPaintExtent$];
    }
    set maxPaintExtent(value) {
      super.maxPaintExtent = value;
    }
    get maxScrollObstructionExtent() {
      return this[maxScrollObstructionExtent$];
    }
    set maxScrollObstructionExtent(value) {
      super.maxScrollObstructionExtent = value;
    }
    get hitTestExtent() {
      return this[hitTestExtent$];
    }
    set hitTestExtent(value) {
      super.hitTestExtent = value;
    }
    get visible() {
      return this[visible$];
    }
    set visible(value) {
      super.visible = value;
    }
    get hasVisualOverflow() {
      return this[hasVisualOverflow$];
    }
    set hasVisualOverflow(value) {
      super.hasVisualOverflow = value;
    }
    get scrollOffsetCorrection() {
      return this[scrollOffsetCorrection$];
    }
    set scrollOffsetCorrection(value) {
      super.scrollOffsetCorrection = value;
    }
    get cacheExtent() {
      return this[cacheExtent$];
    }
    set cacheExtent(value) {
      super.cacheExtent = value;
    }
    static ['_#new#tearOff'](opts) {
      let scrollExtent = opts && 'scrollExtent' in opts ? opts.scrollExtent : 0;
      let paintExtent = opts && 'paintExtent' in opts ? opts.paintExtent : 0;
      let paintOrigin = opts && 'paintOrigin' in opts ? opts.paintOrigin : 0;
      let layoutExtent = opts && 'layoutExtent' in opts ? opts.layoutExtent : null;
      let maxPaintExtent = opts && 'maxPaintExtent' in opts ? opts.maxPaintExtent : 0;
      let maxScrollObstructionExtent = opts && 'maxScrollObstructionExtent' in opts ? opts.maxScrollObstructionExtent : 0;
      let hitTestExtent = opts && 'hitTestExtent' in opts ? opts.hitTestExtent : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let hasVisualOverflow = opts && 'hasVisualOverflow' in opts ? opts.hasVisualOverflow : false;
      let scrollOffsetCorrection = opts && 'scrollOffsetCorrection' in opts ? opts.scrollOffsetCorrection : null;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      return new sliver$.SliverGeometry.new({scrollExtent: scrollExtent, paintExtent: paintExtent, paintOrigin: paintOrigin, layoutExtent: layoutExtent, maxPaintExtent: maxPaintExtent, maxScrollObstructionExtent: maxScrollObstructionExtent, hitTestExtent: hitTestExtent, visible: visible, hasVisualOverflow: hasVisualOverflow, scrollOffsetCorrection: scrollOffsetCorrection, cacheExtent: cacheExtent});
    }
    debugAssertIsValid(opts) {
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!dart.fn(() => {
        let t6;
        const verify = (check, summary, opts) => {
          let details = opts && 'details' in opts ? opts.details : null;
          if (check) {
            return;
          }
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t4 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(object$.objectRuntimeType(this, "SliverGeometry") + " is not valid: " + summary)]);
            let t5 = details;
            if (t5 != null) t4[$addAll](t5);
            if (informationCollector != null) t4[$addAll](informationCollector());
            return t4;
          })()));
        };
        dart.fn(verify, T.boolAndString__Tovoid());
        verify(this.scrollExtent !== null, "The \"scrollExtent\" is null.");
        verify(this.scrollExtent >= 0.0, "The \"scrollExtent\" is negative.");
        verify(this.paintExtent !== null, "The \"paintExtent\" is null.");
        verify(this.paintExtent >= 0.0, "The \"paintExtent\" is negative.");
        verify(this.paintOrigin !== null, "The \"paintOrigin\" is null.");
        verify(this.layoutExtent !== null, "The \"layoutExtent\" is null.");
        verify(this.layoutExtent >= 0.0, "The \"layoutExtent\" is negative.");
        verify(this.cacheExtent >= 0.0, "The \"cacheExtent\" is negative.");
        if (this.layoutExtent > this.paintExtent) {
          verify(false, "The \"layoutExtent\" exceeds the \"paintExtent\".", {details: sliver$._debugCompareFloats("paintExtent", this.paintExtent, "layoutExtent", this.layoutExtent)});
        }
        verify(this.maxPaintExtent !== null, "The \"maxPaintExtent\" is null.");
        if (this.paintExtent - this.maxPaintExtent > 1e-10) {
          verify(false, "The \"maxPaintExtent\" is less than the \"paintExtent\".", {details: (t6 = sliver$._debugCompareFloats("maxPaintExtent", this.maxPaintExtent, "paintExtent", this.paintExtent), (() => {
              t6[$add](new assertions.ErrorDescription.new("By definition, a sliver can't paint more than the maximum that it can paint!"));
              return t6;
            })())});
        }
        verify(this.hitTestExtent !== null, "The \"hitTestExtent\" is null.");
        verify(this.hitTestExtent >= 0.0, "The \"hitTestExtent\" is negative.");
        verify(this.visible !== null, "The \"visible\" property is null.");
        verify(this.hasVisualOverflow !== null, "The \"hasVisualOverflow\" is null.");
        verify(this.scrollOffsetCorrection !== 0.0, "The \"scrollOffsetCorrection\" is zero.");
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 707, 12, "() {\n      void verify(bool check, String summary, {List<DiagnosticsNode>? details}) {\n        if (check) {\n          return;\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('${objectRuntimeType(this, 'SliverGeometry')} is not valid: $summary'),\n          ...?details,\n          if (informationCollector != null)\n            ...informationCollector(),\n        ]);\n      }\n\n      verify(scrollExtent != null, 'The \"scrollExtent\" is null.');\n      verify(scrollExtent >= 0.0, 'The \"scrollExtent\" is negative.');\n      verify(paintExtent != null, 'The \"paintExtent\" is null.');\n      verify(paintExtent >= 0.0, 'The \"paintExtent\" is negative.');\n      verify(paintOrigin != null, 'The \"paintOrigin\" is null.');\n      verify(layoutExtent != null, 'The \"layoutExtent\" is null.');\n      verify(layoutExtent >= 0.0, 'The \"layoutExtent\" is negative.');\n      verify(cacheExtent >= 0.0, 'The \"cacheExtent\" is negative.');\n      if (layoutExtent > paintExtent) {\n        verify(false,\n          'The \"layoutExtent\" exceeds the \"paintExtent\".',\n          details: _debugCompareFloats('paintExtent', paintExtent, 'layoutExtent', layoutExtent),\n        );\n      }\n      verify(maxPaintExtent != null, 'The \"maxPaintExtent\" is null.');\n      // If the paintExtent is slightly more than the maxPaintExtent, but the difference is still less\n      // than precisionErrorTolerance, we will not throw the assert below.\n      if (paintExtent - maxPaintExtent > precisionErrorTolerance) {\n        verify(false,\n          'The \"maxPaintExtent\" is less than the \"paintExtent\".',\n          details:\n            _debugCompareFloats('maxPaintExtent', maxPaintExtent, 'paintExtent', paintExtent)\n              ..add(ErrorDescription(\"By definition, a sliver can't paint more than the maximum that it can paint!\")),\n        );\n      }\n      verify(hitTestExtent != null, 'The \"hitTestExtent\" is null.');\n      verify(hitTestExtent >= 0.0, 'The \"hitTestExtent\" is negative.');\n      verify(visible != null, 'The \"visible\" property is null.');\n      verify(hasVisualOverflow != null, 'The \"hasVisualOverflow\" is null.');\n      verify(scrollOffsetCorrection != 0.0, 'The \"scrollOffsetCorrection\" is zero.');\n      return true;\n    }()");
      return true;
    }
    toStringShort() {
      return object$.objectRuntimeType(this, "SliverGeometry");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("scrollExtent", this.scrollExtent));
      if (this.paintExtent > 0.0) {
        properties.add(new diagnostics.DoubleProperty.new("paintExtent", this.paintExtent, {unit: this.visible ? null : " but not painting"}));
      } else if (this.paintExtent === 0.0) {
        if (this.visible) {
          properties.add(new diagnostics.DoubleProperty.new("paintExtent", this.paintExtent, {unit: this.visible ? null : " but visible"}));
        }
        properties.add(new diagnostics.FlagProperty.new("visible", {value: this.visible, ifFalse: "hidden"}));
      } else {
        properties.add(new diagnostics.DoubleProperty.new("paintExtent", this.paintExtent, {tooltip: "!"}));
      }
      properties.add(new diagnostics.DoubleProperty.new("paintOrigin", this.paintOrigin, {defaultValue: 0.0}));
      properties.add(new diagnostics.DoubleProperty.new("layoutExtent", this.layoutExtent, {defaultValue: this.paintExtent}));
      properties.add(new diagnostics.DoubleProperty.new("maxPaintExtent", this.maxPaintExtent));
      properties.add(new diagnostics.DoubleProperty.new("hitTestExtent", this.hitTestExtent, {defaultValue: this.paintExtent}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("hasVisualOverflow", this.hasVisualOverflow, {defaultValue: false}));
      properties.add(new diagnostics.DoubleProperty.new("scrollOffsetCorrection", this.scrollOffsetCorrection, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("cacheExtent", this.cacheExtent, {defaultValue: 0.0}));
    }
  };
  (sliver$.SliverGeometry.new = function(opts) {
    let t4, t4$, t4$0, t4$1, t4$2;
    let scrollExtent = opts && 'scrollExtent' in opts ? opts.scrollExtent : 0;
    let paintExtent = opts && 'paintExtent' in opts ? opts.paintExtent : 0;
    let paintOrigin = opts && 'paintOrigin' in opts ? opts.paintOrigin : 0;
    let layoutExtent = opts && 'layoutExtent' in opts ? opts.layoutExtent : null;
    let maxPaintExtent = opts && 'maxPaintExtent' in opts ? opts.maxPaintExtent : 0;
    let maxScrollObstructionExtent = opts && 'maxScrollObstructionExtent' in opts ? opts.maxScrollObstructionExtent : 0;
    let hitTestExtent = opts && 'hitTestExtent' in opts ? opts.hitTestExtent : null;
    let visible = opts && 'visible' in opts ? opts.visible : null;
    let hasVisualOverflow = opts && 'hasVisualOverflow' in opts ? opts.hasVisualOverflow : false;
    let scrollOffsetCorrection = opts && 'scrollOffsetCorrection' in opts ? opts.scrollOffsetCorrection : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    this[scrollExtent$] = scrollExtent;
    this[paintExtent$] = paintExtent;
    this[paintOrigin$] = paintOrigin;
    this[maxPaintExtent$] = maxPaintExtent;
    this[maxScrollObstructionExtent$] = maxScrollObstructionExtent;
    this[hasVisualOverflow$] = hasVisualOverflow;
    this[scrollOffsetCorrection$] = scrollOffsetCorrection;
    if (!(scrollExtent !== null)) dart.assertFailed(null, I[1], 542, 15, "scrollExtent != null");
    if (!(paintExtent !== null)) dart.assertFailed(null, I[1], 543, 15, "paintExtent != null");
    if (!(paintOrigin !== null)) dart.assertFailed(null, I[1], 544, 15, "paintOrigin != null");
    if (!(maxPaintExtent !== null)) dart.assertFailed(null, I[1], 545, 15, "maxPaintExtent != null");
    if (!(hasVisualOverflow !== null)) dart.assertFailed(null, I[1], 546, 15, "hasVisualOverflow != null");
    if (!(scrollOffsetCorrection !== 0.0)) dart.assertFailed(null, I[1], 547, 15, "scrollOffsetCorrection != 0.0");
    this[layoutExtent$] = (t4 = layoutExtent, t4 == null ? paintExtent : t4);
    this[hitTestExtent$] = (t4$ = hitTestExtent, t4$ == null ? paintExtent : t4$);
    this[cacheExtent$] = (t4$1 = (t4$0 = cacheExtent, t4$0 == null ? layoutExtent : t4$0), t4$1 == null ? paintExtent : t4$1);
    this[visible$] = (t4$2 = visible, t4$2 == null ? paintExtent > 0.0 : t4$2);
    ;
  }).prototype = sliver$.SliverGeometry.prototype;
  dart.addTypeTests(sliver$.SliverGeometry);
  dart.addTypeCaches(sliver$.SliverGeometry);
  dart.setMethodSignature(sliver$.SliverGeometry, () => ({
    __proto__: dart.getMethods(sliver$.SliverGeometry.__proto__),
    debugAssertIsValid: dart.fnType(core.bool, [], {informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), []))}, {})
  }));
  dart.setLibraryUri(sliver$.SliverGeometry, I[0]);
  dart.setFieldSignature(sliver$.SliverGeometry, () => ({
    __proto__: dart.getFields(sliver$.SliverGeometry.__proto__),
    scrollExtent: dart.finalFieldType(core.double),
    paintOrigin: dart.finalFieldType(core.double),
    paintExtent: dart.finalFieldType(core.double),
    layoutExtent: dart.finalFieldType(core.double),
    maxPaintExtent: dart.finalFieldType(core.double),
    maxScrollObstructionExtent: dart.finalFieldType(core.double),
    hitTestExtent: dart.finalFieldType(core.double),
    visible: dart.finalFieldType(core.bool),
    hasVisualOverflow: dart.finalFieldType(core.bool),
    scrollOffsetCorrection: dart.finalFieldType(dart.nullable(core.double)),
    cacheExtent: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(sliver$.SliverGeometry, () => ['zero']);
  dart.defineLazy(sliver$.SliverGeometry, {
    /*sliver$.SliverGeometry.zero*/get zero() {
      return C[9] || CT.C9;
    }
  }, false);
  sliver$.SliverHitTestResult = class SliverHitTestResult extends hit_test.HitTestResult {
    static ['_#new#tearOff']() {
      return new sliver$.SliverHitTestResult.new();
    }
    static ['_#wrap#tearOff'](result) {
      return new sliver$.SliverHitTestResult.wrap(result);
    }
    addWithAxisOffset(opts) {
      let paintOffset = opts && 'paintOffset' in opts ? opts.paintOffset : null;
      let mainAxisOffset = opts && 'mainAxisOffset' in opts ? opts.mainAxisOffset : null;
      let crossAxisOffset = opts && 'crossAxisOffset' in opts ? opts.crossAxisOffset : null;
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(mainAxisOffset !== null)) dart.assertFailed(null, I[1], 850, 12, "mainAxisOffset != null");
      if (!(crossAxisOffset !== null)) dart.assertFailed(null, I[1], 851, 12, "crossAxisOffset != null");
      if (!(mainAxisPosition !== null)) dart.assertFailed(null, I[1], 852, 12, "mainAxisPosition != null");
      if (!(crossAxisPosition !== null)) dart.assertFailed(null, I[1], 853, 12, "crossAxisPosition != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[1], 854, 12, "hitTest != null");
      if (paintOffset != null) {
        this.pushOffset(paintOffset._negate());
      }
      let isHit = hitTest(this, {mainAxisPosition: mainAxisPosition - mainAxisOffset, crossAxisPosition: crossAxisPosition - crossAxisOffset});
      if (paintOffset != null) {
        this.popTransform();
      }
      return isHit;
    }
  };
  (sliver$.SliverHitTestResult.new = function() {
    sliver$.SliverHitTestResult.__proto__.new.call(this);
    ;
  }).prototype = sliver$.SliverHitTestResult.prototype;
  (sliver$.SliverHitTestResult.wrap = function(result) {
    sliver$.SliverHitTestResult.__proto__.wrap.call(this, result);
    ;
  }).prototype = sliver$.SliverHitTestResult.prototype;
  dart.addTypeTests(sliver$.SliverHitTestResult);
  dart.addTypeCaches(sliver$.SliverHitTestResult);
  dart.setMethodSignature(sliver$.SliverHitTestResult, () => ({
    __proto__: dart.getMethods(sliver$.SliverHitTestResult.__proto__),
    addWithAxisOffset: dart.fnType(core.bool, [], {}, {crossAxisOffset: core.double, crossAxisPosition: core.double, hitTest: dart.fnType(core.bool, [sliver$.SliverHitTestResult], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}), mainAxisOffset: core.double, mainAxisPosition: core.double, paintOffset: dart.nullable(ui.Offset)})
  }));
  dart.setLibraryUri(sliver$.SliverHitTestResult, I[0]);
  var mainAxisPosition$ = dart.privateName(sliver$, "SliverHitTestEntry.mainAxisPosition");
  var crossAxisPosition$ = dart.privateName(sliver$, "SliverHitTestEntry.crossAxisPosition");
  var _geometry = dart.privateName(sliver$, "_geometry");
  var _debugDrawArrow = dart.privateName(sliver$, "_debugDrawArrow");
  var Color_value = dart.privateName(ui, "Color.value");
  sliver$.RenderSliver = class RenderSliver extends object.RenderObject {
    get constraints() {
      return sliver$.SliverConstraints.as(super.constraints);
    }
    get geometry() {
      return this[_geometry];
    }
    set geometry(value) {
      if (!!(this.debugDoingThisResize && this.debugDoingThisLayout)) dart.assertFailed(null, I[1], 1142, 12, "!(debugDoingThisResize && debugDoingThisLayout)");
      if (!(this.sizedByParent || !this.debugDoingThisResize)) dart.assertFailed(null, I[1], 1143, 12, "sizedByParent || !debugDoingThisResize");
      if (!dart.fn(() => {
        if (this.sizedByParent && this.debugDoingThisResize || !this.sizedByParent && this.debugDoingThisLayout) {
          return true;
        }
        if (!!this.debugDoingThisResize) dart.assertFailed(null, I[1], 1149, 14, "!debugDoingThisResize");
        let contract = null;
        let violation = null;
        let hint = null;
        if (this.debugDoingThisLayout) {
          if (!this.sizedByParent) dart.assertFailed(null, I[1], 1152, 16, "sizedByParent");
          violation = new assertions.ErrorDescription.new("It appears that the geometry setter was called from performLayout().");
        } else {
          violation = new assertions.ErrorDescription.new("The geometry setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).");
          if (this.owner != null && dart.nullCheck(this.owner).debugDoingLayout) {
            hint = new assertions.ErrorDescription.new("Only the object itself can set its geometry. It is a contract violation for other objects to set it.");
          }
        }
        if (this.sizedByParent) {
          contract = new assertions.ErrorDescription.new("Because this RenderSliver has sizedByParent set to true, it must set its geometry in performResize().");
        } else {
          contract = new assertions.ErrorDescription.new("Because this RenderSliver has sizedByParent set to false, it must set its geometry in performLayout().");
        }
        let information = (() => {
          let t6 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderSliver geometry setter called incorrectly."), violation]);
          if (hint != null) t6.push(hint);
          t6.push(contract);
          t6.push(this.describeForError("The RenderSliver in question is"));
          return t6;
        })();
        dart.throw(new assertions.FlutterError.fromParts(information));
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1144, 12, "() {\n      if ((sizedByParent && debugDoingThisResize) ||\n          (!sizedByParent && debugDoingThisLayout)) {\n        return true;\n      }\n      assert(!debugDoingThisResize);\n      DiagnosticsNode? contract, violation, hint;\n      if (debugDoingThisLayout) {\n        assert(sizedByParent);\n        violation = ErrorDescription('It appears that the geometry setter was called from performLayout().');\n      } else {\n        violation = ErrorDescription('The geometry setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).');\n        if (owner != null && owner!.debugDoingLayout) {\n          hint = ErrorDescription('Only the object itself can set its geometry. It is a contract violation for other objects to set it.');\n        }\n      }\n      if (sizedByParent) {\n        contract = ErrorDescription('Because this RenderSliver has sizedByParent set to true, it must set its geometry in performResize().');\n      } else {\n        contract = ErrorDescription('Because this RenderSliver has sizedByParent set to false, it must set its geometry in performLayout().');\n      }\n\n      final List<DiagnosticsNode> information = <DiagnosticsNode>[\n        ErrorSummary('RenderSliver geometry setter called incorrectly.'),\n        violation,\n        if (hint != null) hint,\n        contract,\n        describeForError('The RenderSliver in question is'),\n      ];\n      throw FlutterError.fromParts(information);\n    }()");
      this[_geometry] = value;
    }
    get semanticBounds() {
      return this.paintBounds;
    }
    get paintBounds() {
      if (!(this.constraints.axis !== null)) dart.assertFailed(null, I[1], 1183, 12, "constraints.axis != null");
      switch (this.constraints.axis) {
        case C[7] || CT.C7:
          {
            return new ui.Rect.fromLTWH(0.0, 0.0, dart.nullCheck(this.geometry).paintExtent, this.constraints.crossAxisExtent);
          }
        case C[8] || CT.C8:
          {
            return new ui.Rect.fromLTWH(0.0, 0.0, this.constraints.crossAxisExtent, dart.nullCheck(this.geometry).paintExtent);
          }
      }
    }
    debugResetSize() {
    }
    debugAssertDoesMeetConstraints() {
      if (!dart.nullCheck(this.geometry).debugAssertIsValid({informationCollector: dart.fn(() => T.JSArrayOfDiagnosticsNode().of([this.describeForError("The RenderSliver that returned the offending geometry was")]), T.VoidToListOfDiagnosticsNode())})) dart.assertFailed(null, I[1], 1205, 12, "geometry!.debugAssertIsValid(\n      informationCollector: () => <DiagnosticsNode>[\n        describeForError('The RenderSliver that returned the offending geometry was'),\n      ],\n    )");
      if (!dart.fn(() => {
        if (dart.nullCheck(this.geometry).paintOrigin + dart.nullCheck(this.geometry).paintExtent > this.constraints.remainingPaintExtent) {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t7 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("SliverGeometry has a paintOffset that exceeds the remainingPaintExtent from the constraints."), this.describeForError("The render object whose geometry violates the constraints is the following")]);
            t7[$addAll](sliver$._debugCompareFloats("remainingPaintExtent", this.constraints.remainingPaintExtent, "paintOrigin + paintExtent", dart.nullCheck(this.geometry).paintOrigin + dart.nullCheck(this.geometry).paintExtent));
            t7.push(new assertions.ErrorDescription.new("The paintOrigin and paintExtent must cause the child sliver to paint " + "within the viewport, and so cannot exceed the remainingPaintExtent."));
            return t7;
          })()));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1210, 12, "() {\n      if (geometry!.paintOrigin + geometry!.paintExtent > constraints.remainingPaintExtent) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('SliverGeometry has a paintOffset that exceeds the remainingPaintExtent from the constraints.'),\n          describeForError('The render object whose geometry violates the constraints is the following'),\n          ..._debugCompareFloats(\n            'remainingPaintExtent', constraints.remainingPaintExtent,\n            'paintOrigin + paintExtent', geometry!.paintOrigin + geometry!.paintExtent,\n          ),\n          ErrorDescription(\n            'The paintOrigin and paintExtent must cause the child sliver to paint '\n            'within the viewport, and so cannot exceed the remainingPaintExtent.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
    }
    performResize() {
      if (!false) dart.assertFailed(null, I[1], 1231, 12, "false");
    }
    get centerOffsetAdjustment() {
      return 0.0;
    }
    hitTest(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (mainAxisPosition >= 0.0 && mainAxisPosition < dart.nullCheck(this.geometry).hitTestExtent && crossAxisPosition >= 0.0 && crossAxisPosition < this.constraints.crossAxisExtent) {
        if (this.hitTestChildren(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}) || this.hitTestSelf({mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition})) {
          result.add(new sliver$.SliverHitTestEntry.new(this, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}));
          return true;
        }
      }
      return false;
    }
    hitTestSelf(opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      return false;
    }
    hitTestChildren(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      return false;
    }
    calculatePaintOffset(constraints, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let to = opts && 'to' in opts ? opts.to : null;
      if (!(from <= to)) dart.assertFailed(null, I[1], 1342, 12, "from <= to");
      let a = constraints.scrollOffset;
      let b = constraints.scrollOffset + constraints.remainingPaintExtent;
      return math$.clampDouble(math$.clampDouble(to, a, b) - math$.clampDouble(from, a, b), 0.0, constraints.remainingPaintExtent);
    }
    calculateCacheOffset(constraints, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let to = opts && 'to' in opts ? opts.to : null;
      if (!(from <= to)) dart.assertFailed(null, I[1], 1358, 12, "from <= to");
      let a = constraints.scrollOffset + constraints.cacheOrigin;
      let b = constraints.scrollOffset + constraints.remainingCacheExtent;
      return math$.clampDouble(math$.clampDouble(to, a, b) - math$.clampDouble(from, a, b), 0.0, constraints.remainingCacheExtent);
    }
    childMainAxisPosition(child) {
      object.RenderObject.as(child);
      if (!dart.dtest(dart.fn(() => {
        dart.throw(assertions.FlutterError.new(object$.objectRuntimeType(this, "RenderSliver") + " does not implement childPosition."));
      }, T.VoidToNever())())) dart.assertFailed(null, I[1], 1393, 12, "() {\n      throw FlutterError('${objectRuntimeType(this, 'RenderSliver')} does not implement childPosition.');\n    }()");
      return 0.0;
    }
    childCrossAxisPosition(child) {
      object.RenderObject.as(child);
      return 0.0;
    }
    childScrollOffset(child) {
      object.RenderObject.as(child);
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[1], 1424, 12, "child.parent == this");
      return 0.0;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (!dart.dtest(dart.fn(() => {
        dart.throw(assertions.FlutterError.new(object$.objectRuntimeType(this, "RenderSliver") + " does not implement applyPaintTransform."));
      }, T.VoidToNever())())) dart.assertFailed(null, I[1], 1430, 12, "() {\n      throw FlutterError('${objectRuntimeType(this, 'RenderSliver')} does not implement applyPaintTransform.');\n    }()");
    }
    getAbsoluteSizeRelativeToOrigin() {
      if (!(this.geometry != null)) dart.assertFailed(null, I[1], 1446, 12, "geometry != null");
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 1447, 12, "!debugNeedsLayout");
      switch (sliver$.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C[5] || CT.C5:
          {
            return new ui.Size.new(this.constraints.crossAxisExtent, -dart.nullCheck(this.geometry).paintExtent);
          }
        case C[4] || CT.C4:
          {
            return new ui.Size.new(dart.nullCheck(this.geometry).paintExtent, this.constraints.crossAxisExtent);
          }
        case C[3] || CT.C3:
          {
            return new ui.Size.new(this.constraints.crossAxisExtent, dart.nullCheck(this.geometry).paintExtent);
          }
        case C[6] || CT.C6:
          {
            return new ui.Size.new(-dart.nullCheck(this.geometry).paintExtent, this.constraints.crossAxisExtent);
          }
      }
    }
    getAbsoluteSize() {
      if (!(this.geometry != null)) dart.assertFailed(null, I[1], 1471, 12, "geometry != null");
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 1472, 12, "!debugNeedsLayout");
      switch (this.constraints.axisDirection) {
        case C[5] || CT.C5:
        case C[3] || CT.C3:
          {
            return new ui.Size.new(this.constraints.crossAxisExtent, dart.nullCheck(this.geometry).paintExtent);
          }
        case C[4] || CT.C4:
        case C[6] || CT.C6:
          {
            return new ui.Size.new(dart.nullCheck(this.geometry).paintExtent, this.constraints.crossAxisExtent);
          }
      }
    }
    [_debugDrawArrow](canvas, paint, p0, p1, direction) {
      if (!dart.fn(() => {
        let t8;
        if (p0._equals(p1)) {
          return true;
        }
        if (!(p0.dx === p1.dx || p0.dy === p1.dy)) dart.assertFailed(null, I[1], 1488, 14, "p0.dx == p1.dx || p0.dy == p1.dy");
        let d = p1['-'](p0).distance * 0.2;
        let temp = null;
        let dx1 = null;
        let dx2 = null;
        let dy1 = null;
        let dy2 = null;
        switch (direction) {
          case C[1] || CT.C1:
            {
              dx1 = dx2 = dy1 = dy2 = d;
              break;
            }
          case C[2] || CT.C2:
            {
              temp = p0;
              p0 = p1;
              p1 = temp;
              dx1 = dx2 = dy1 = dy2 = -d;
              break;
            }
        }
        if (p0.dx === p1.dx) {
          dx2 = -dx2;
        } else {
          dy2 = -dy2;
        }
        canvas.drawPath((t8 = ui.Path.new(), (() => {
          t8.moveTo(p0.dx, p0.dy);
          t8.lineTo(p1.dx, p1.dy);
          t8.moveTo(p1.dx - dx1, p1.dy - dy1);
          t8.lineTo(p1.dx, p1.dy);
          t8.lineTo(p1.dx - dx2, p1.dy - dy2);
          return t8;
        })()), paint);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1484, 12, "() {\n      if (p0 == p1) {\n        return true;\n      }\n      assert(p0.dx == p1.dx || p0.dy == p1.dy); // must be axis-aligned\n      final double d = (p1 - p0).distance * 0.2;\n      final Offset temp;\n      double dx1, dx2, dy1, dy2;\n      switch (direction) {\n        case GrowthDirection.forward:\n          dx1 = dx2 = dy1 = dy2 = d;\n          break;\n        case GrowthDirection.reverse:\n          temp = p0;\n          p0 = p1;\n          p1 = temp;\n          dx1 = dx2 = dy1 = dy2 = -d;\n          break;\n      }\n      if (p0.dx == p1.dx) {\n        dx2 = -dx2;\n      } else {\n        dy2 = -dy2;\n      }\n      canvas.drawPath(\n        Path()\n          ..moveTo(p0.dx, p0.dy)\n          ..lineTo(p1.dx, p1.dy)\n          ..moveTo(p1.dx - dx1, p1.dy - dy1)\n          ..lineTo(p1.dx, p1.dy)\n          ..lineTo(p1.dx - dx2, p1.dy - dy2),\n        paint,\n      );\n      return true;\n    }()");
    }
    debugPaint(context, offset) {
      if (!dart.fn(() => {
        let t8;
        if (debug.debugPaintSizeEnabled) {
          let strokeWidth = math.min(core.double, 4.0, dart.nullCheck(this.geometry).paintExtent / 30.0);
          let paint = (t8 = ui.Paint.new(), (() => {
            t8.color = C[10] || CT.C10;
            t8.strokeWidth = strokeWidth;
            t8.style = ui.PaintingStyle.stroke;
            t8.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.solid, strokeWidth);
            return t8;
          })());
          let arrowExtent = dart.nullCheck(this.geometry).paintExtent;
          let padding = math.max(core.double, 2.0, strokeWidth);
          let canvas = context.canvas;
          canvas.drawCircle(offset.translate(padding, padding), padding * 0.5, paint);
          switch (this.constraints.axis) {
            case C[8] || CT.C8:
              {
                canvas.drawLine(offset, offset.translate(this.constraints.crossAxisExtent, 0.0), paint);
                this[_debugDrawArrow](canvas, paint, offset.translate(this.constraints.crossAxisExtent * 1.0 / 4.0, padding), offset.translate(this.constraints.crossAxisExtent * 1.0 / 4.0, arrowExtent - padding), this.constraints.normalizedGrowthDirection);
                this[_debugDrawArrow](canvas, paint, offset.translate(this.constraints.crossAxisExtent * 3.0 / 4.0, padding), offset.translate(this.constraints.crossAxisExtent * 3.0 / 4.0, arrowExtent - padding), this.constraints.normalizedGrowthDirection);
                break;
              }
            case C[7] || CT.C7:
              {
                canvas.drawLine(offset, offset.translate(0.0, this.constraints.crossAxisExtent), paint);
                this[_debugDrawArrow](canvas, paint, offset.translate(padding, this.constraints.crossAxisExtent * 1.0 / 4.0), offset.translate(arrowExtent - padding, this.constraints.crossAxisExtent * 1.0 / 4.0), this.constraints.normalizedGrowthDirection);
                this[_debugDrawArrow](canvas, paint, offset.translate(padding, this.constraints.crossAxisExtent * 3.0 / 4.0), offset.translate(arrowExtent - padding, this.constraints.crossAxisExtent * 3.0 / 4.0), this.constraints.normalizedGrowthDirection);
                break;
              }
          }
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1523, 12, "() {\n      if (debugPaintSizeEnabled) {\n        final double strokeWidth = math.min(4.0, geometry!.paintExtent / 30.0);\n        final Paint paint = Paint()\n          ..color = const Color(0xFF33CC33)\n          ..strokeWidth = strokeWidth\n          ..style = PaintingStyle.stroke\n          ..maskFilter = MaskFilter.blur(BlurStyle.solid, strokeWidth);\n        final double arrowExtent = geometry!.paintExtent;\n        final double padding = math.max(2.0, strokeWidth);\n        final Canvas canvas = context.canvas;\n        canvas.drawCircle(\n          offset.translate(padding, padding),\n          padding * 0.5,\n          paint,\n        );\n        switch (constraints.axis) {\n          case Axis.vertical:\n            canvas.drawLine(\n              offset,\n              offset.translate(constraints.crossAxisExtent, 0.0),\n              paint,\n            );\n            _debugDrawArrow(\n              canvas,\n              paint,\n              offset.translate(constraints.crossAxisExtent * 1.0 / 4.0, padding),\n              offset.translate(constraints.crossAxisExtent * 1.0 / 4.0, arrowExtent - padding),\n              constraints.normalizedGrowthDirection,\n            );\n            _debugDrawArrow(\n              canvas,\n              paint,\n              offset.translate(constraints.crossAxisExtent * 3.0 / 4.0, padding),\n              offset.translate(constraints.crossAxisExtent * 3.0 / 4.0, arrowExtent - padding),\n              constraints.normalizedGrowthDirection,\n            );\n            break;\n          case Axis.horizontal:\n            canvas.drawLine(\n              offset,\n              offset.translate(0.0, constraints.crossAxisExtent),\n              paint,\n            );\n            _debugDrawArrow(\n              canvas,\n              paint,\n              offset.translate(padding, constraints.crossAxisExtent * 1.0 / 4.0),\n              offset.translate(arrowExtent - padding, constraints.crossAxisExtent * 1.0 / 4.0),\n              constraints.normalizedGrowthDirection,\n            );\n            _debugDrawArrow(\n              canvas,\n              paint,\n              offset.translate(padding, constraints.crossAxisExtent * 3.0 / 4.0),\n              offset.translate(arrowExtent - padding, constraints.crossAxisExtent * 3.0 / 4.0),\n              constraints.normalizedGrowthDirection,\n            );\n            break;\n        }\n      }\n      return true;\n    }()");
    }
    handleEvent(event, entry) {
      sliver$.SliverHitTestEntry.as(entry);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfSliverGeometry()).new("geometry", this.geometry));
    }
  };
  (sliver$.RenderSliver.new = function() {
    this[_geometry] = null;
    sliver$.RenderSliver.__proto__.new.call(this);
    ;
  }).prototype = sliver$.RenderSliver.prototype;
  dart.addTypeTests(sliver$.RenderSliver);
  dart.addTypeCaches(sliver$.RenderSliver);
  dart.setMethodSignature(sliver$.RenderSliver, () => ({
    __proto__: dart.getMethods(sliver$.RenderSliver.__proto__),
    debugAssertDoesMeetConstraints: dart.fnType(dart.void, []),
    performResize: dart.fnType(dart.void, []),
    hitTest: dart.fnType(core.bool, [sliver$.SliverHitTestResult], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}),
    hitTestSelf: dart.fnType(core.bool, [], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}),
    hitTestChildren: dart.fnType(core.bool, [sliver$.SliverHitTestResult], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}),
    calculatePaintOffset: dart.fnType(core.double, [sliver$.SliverConstraints], {}, {from: core.double, to: core.double}),
    calculateCacheOffset: dart.fnType(core.double, [sliver$.SliverConstraints], {}, {from: core.double, to: core.double}),
    childMainAxisPosition: dart.fnType(core.double, [dart.nullable(core.Object)]),
    childCrossAxisPosition: dart.fnType(core.double, [dart.nullable(core.Object)]),
    childScrollOffset: dart.fnType(dart.nullable(core.double), [dart.nullable(core.Object)]),
    getAbsoluteSizeRelativeToOrigin: dart.fnType(ui.Size, []),
    getAbsoluteSize: dart.fnType(ui.Size, []),
    [_debugDrawArrow]: dart.fnType(dart.void, [ui.Canvas, ui.Paint, ui.Offset, ui.Offset, sliver$.GrowthDirection])
  }));
  dart.setGetterSignature(sliver$.RenderSliver, () => ({
    __proto__: dart.getGetters(sliver$.RenderSliver.__proto__),
    constraints: sliver$.SliverConstraints,
    geometry: dart.nullable(sliver$.SliverGeometry),
    semanticBounds: ui.Rect,
    paintBounds: ui.Rect,
    centerOffsetAdjustment: core.double
  }));
  dart.setSetterSignature(sliver$.RenderSliver, () => ({
    __proto__: dart.getSetters(sliver$.RenderSliver.__proto__),
    geometry: dart.nullable(sliver$.SliverGeometry)
  }));
  dart.setLibraryUri(sliver$.RenderSliver, I[0]);
  dart.setFieldSignature(sliver$.RenderSliver, () => ({
    __proto__: dart.getFields(sliver$.RenderSliver.__proto__),
    [_geometry]: dart.fieldType(dart.nullable(sliver$.SliverGeometry))
  }));
  sliver$.SliverHitTestEntry = class SliverHitTestEntry extends hit_test.HitTestEntry$(sliver$.RenderSliver) {
    get mainAxisPosition() {
      return this[mainAxisPosition$];
    }
    set mainAxisPosition(value) {
      super.mainAxisPosition = value;
    }
    get crossAxisPosition() {
      return this[crossAxisPosition$];
    }
    set crossAxisPosition(value) {
      super.crossAxisPosition = value;
    }
    static ['_#new#tearOff'](target, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      return new sliver$.SliverHitTestEntry.new(target, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
    }
    toString() {
      return dart.str(this.target[$runtimeType]) + "@(mainAxis: " + dart.str(this.mainAxisPosition) + ", crossAxis: " + dart.str(this.crossAxisPosition) + ")";
    }
  };
  (sliver$.SliverHitTestEntry.new = function(target, opts) {
    let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
    let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
    this[mainAxisPosition$] = mainAxisPosition;
    this[crossAxisPosition$] = crossAxisPosition;
    if (!(mainAxisPosition !== null)) dart.assertFailed(null, I[1], 882, 15, "mainAxisPosition != null");
    if (!(crossAxisPosition !== null)) dart.assertFailed(null, I[1], 883, 15, "crossAxisPosition != null");
    sliver$.SliverHitTestEntry.__proto__.new.call(this, target);
    ;
  }).prototype = sliver$.SliverHitTestEntry.prototype;
  dart.addTypeTests(sliver$.SliverHitTestEntry);
  dart.addTypeCaches(sliver$.SliverHitTestEntry);
  dart.setLibraryUri(sliver$.SliverHitTestEntry, I[0]);
  dart.setFieldSignature(sliver$.SliverHitTestEntry, () => ({
    __proto__: dart.getFields(sliver$.SliverHitTestEntry.__proto__),
    mainAxisPosition: dart.finalFieldType(core.double),
    crossAxisPosition: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(sliver$.SliverHitTestEntry, ['toString']);
  var layoutOffset = dart.privateName(sliver$, "SliverLogicalParentData.layoutOffset");
  sliver$.SliverLogicalParentData = class SliverLogicalParentData extends object.ParentData {
    get layoutOffset() {
      return this[layoutOffset];
    }
    set layoutOffset(value) {
      this[layoutOffset] = value;
    }
    toString() {
      return "layoutOffset=" + (this.layoutOffset == null ? "None" : dart.nullCheck(this.layoutOffset)[$toStringAsFixed](1));
    }
    static ['_#new#tearOff']() {
      return new sliver$.SliverLogicalParentData.new();
    }
  };
  (sliver$.SliverLogicalParentData.new = function() {
    this[layoutOffset] = null;
    ;
  }).prototype = sliver$.SliverLogicalParentData.prototype;
  dart.addTypeTests(sliver$.SliverLogicalParentData);
  dart.addTypeCaches(sliver$.SliverLogicalParentData);
  dart.setLibraryUri(sliver$.SliverLogicalParentData, I[0]);
  dart.setFieldSignature(sliver$.SliverLogicalParentData, () => ({
    __proto__: dart.getFields(sliver$.SliverLogicalParentData.__proto__),
    layoutOffset: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(sliver$.SliverLogicalParentData, ['toString']);
  const SliverLogicalParentData_ContainerParentDataMixin$36 = class SliverLogicalParentData_ContainerParentDataMixin extends sliver$.SliverLogicalParentData {};
  (SliverLogicalParentData_ContainerParentDataMixin$36.new = function() {
    object.ContainerParentDataMixin$(sliver$.RenderSliver)[dart.mixinNew].call(this);
    SliverLogicalParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
  }).prototype = SliverLogicalParentData_ContainerParentDataMixin$36.prototype;
  dart.applyMixin(SliverLogicalParentData_ContainerParentDataMixin$36, object.ContainerParentDataMixin$(sliver$.RenderSliver));
  sliver$.SliverLogicalContainerParentData = class SliverLogicalContainerParentData extends SliverLogicalParentData_ContainerParentDataMixin$36 {
    static ['_#new#tearOff']() {
      return new sliver$.SliverLogicalContainerParentData.new();
    }
  };
  (sliver$.SliverLogicalContainerParentData.new = function() {
    sliver$.SliverLogicalContainerParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver$.SliverLogicalContainerParentData.prototype;
  dart.addTypeTests(sliver$.SliverLogicalContainerParentData);
  dart.addTypeCaches(sliver$.SliverLogicalContainerParentData);
  dart.setLibraryUri(sliver$.SliverLogicalContainerParentData, I[0]);
  var paintOffset = dart.privateName(sliver$, "SliverPhysicalParentData.paintOffset");
  sliver$.SliverPhysicalParentData = class SliverPhysicalParentData extends object.ParentData {
    get paintOffset() {
      return this[paintOffset];
    }
    set paintOffset(value) {
      this[paintOffset] = value;
    }
    applyPaintTransform(transform) {
      transform.translate(this.paintOffset.dx, this.paintOffset.dy);
    }
    toString() {
      return "paintOffset=" + dart.str(this.paintOffset);
    }
    static ['_#new#tearOff']() {
      return new sliver$.SliverPhysicalParentData.new();
    }
  };
  (sliver$.SliverPhysicalParentData.new = function() {
    this[paintOffset] = ui.Offset.zero;
    ;
  }).prototype = sliver$.SliverPhysicalParentData.prototype;
  dart.addTypeTests(sliver$.SliverPhysicalParentData);
  dart.addTypeCaches(sliver$.SliverPhysicalParentData);
  dart.setMethodSignature(sliver$.SliverPhysicalParentData, () => ({
    __proto__: dart.getMethods(sliver$.SliverPhysicalParentData.__proto__),
    applyPaintTransform: dart.fnType(dart.void, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(sliver$.SliverPhysicalParentData, I[0]);
  dart.setFieldSignature(sliver$.SliverPhysicalParentData, () => ({
    __proto__: dart.getFields(sliver$.SliverPhysicalParentData.__proto__),
    paintOffset: dart.fieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(sliver$.SliverPhysicalParentData, ['toString']);
  const SliverPhysicalParentData_ContainerParentDataMixin$36 = class SliverPhysicalParentData_ContainerParentDataMixin extends sliver$.SliverPhysicalParentData {};
  (SliverPhysicalParentData_ContainerParentDataMixin$36.new = function() {
    object.ContainerParentDataMixin$(sliver$.RenderSliver)[dart.mixinNew].call(this);
    SliverPhysicalParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
  }).prototype = SliverPhysicalParentData_ContainerParentDataMixin$36.prototype;
  dart.applyMixin(SliverPhysicalParentData_ContainerParentDataMixin$36, object.ContainerParentDataMixin$(sliver$.RenderSliver));
  sliver$.SliverPhysicalContainerParentData = class SliverPhysicalContainerParentData extends SliverPhysicalParentData_ContainerParentDataMixin$36 {
    static ['_#new#tearOff']() {
      return new sliver$.SliverPhysicalContainerParentData.new();
    }
  };
  (sliver$.SliverPhysicalContainerParentData.new = function() {
    sliver$.SliverPhysicalContainerParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver$.SliverPhysicalContainerParentData.prototype;
  dart.addTypeTests(sliver$.SliverPhysicalContainerParentData);
  dart.addTypeCaches(sliver$.SliverPhysicalContainerParentData);
  dart.setLibraryUri(sliver$.SliverPhysicalContainerParentData, I[0]);
  var _getRightWayUp = dart.privateName(sliver$, "_getRightWayUp");
  sliver$.RenderSliverHelpers = class RenderSliverHelpers extends core.Object {};
  sliver$.RenderSliverHelpers[dart.mixinOn] = Object => class RenderSliverHelpers extends Object {
    [_getRightWayUp](constraints) {
      if (!(constraints !== null)) dart.assertFailed(null, I[1], 1602, 12, "constraints != null");
      if (!(constraints.axisDirection !== null)) dart.assertFailed(null, I[1], 1603, 12, "constraints.axisDirection != null");
      let rightWayUp = null;
      switch (constraints.axisDirection) {
        case C[5] || CT.C5:
        case C[6] || CT.C6:
          {
            rightWayUp = false;
            break;
          }
        case C[3] || CT.C3:
        case C[4] || CT.C4:
          {
            rightWayUp = true;
            break;
          }
      }
      if (!(constraints.growthDirection !== null)) dart.assertFailed(null, I[1], 1615, 12, "constraints.growthDirection != null");
      switch (constraints.growthDirection) {
        case C[1] || CT.C1:
          {
            break;
          }
        case C[2] || CT.C2:
          {
            rightWayUp = !rightWayUp;
            break;
          }
      }
      if (!(rightWayUp !== null)) dart.assertFailed(null, I[1], 1623, 12, "rightWayUp != null");
      return rightWayUp;
    }
    hitTestBoxChild(result, child, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      let rightWayUp = this[_getRightWayUp](this.constraints);
      let delta = this.childMainAxisPosition(child);
      let crossAxisDelta = this.childCrossAxisPosition(child);
      let absolutePosition = mainAxisPosition - delta;
      let absoluteCrossAxisPosition = crossAxisPosition - crossAxisDelta;
      let paintOffset = null;
      let transformedPosition = null;
      if (!(this.constraints.axis !== null)) dart.assertFailed(null, I[1], 1645, 12, "constraints.axis != null");
      switch (this.constraints.axis) {
        case C[7] || CT.C7:
          {
            if (!rightWayUp) {
              absolutePosition = child.size.width - absolutePosition;
              delta = dart.nullCheck(this.geometry).paintExtent - child.size.width - delta;
            }
            paintOffset = new ui.Offset.new(delta, crossAxisDelta);
            transformedPosition = new ui.Offset.new(absolutePosition, absoluteCrossAxisPosition);
            break;
          }
        case C[8] || CT.C8:
          {
            if (!rightWayUp) {
              absolutePosition = child.size.height - absolutePosition;
              delta = dart.nullCheck(this.geometry).paintExtent - child.size.height - delta;
            }
            paintOffset = new ui.Offset.new(crossAxisDelta, delta);
            transformedPosition = new ui.Offset.new(absoluteCrossAxisPosition, absolutePosition);
            break;
          }
      }
      if (!(paintOffset !== null)) dart.assertFailed(null, I[1], 1664, 12, "paintOffset != null");
      if (!(transformedPosition !== null)) dart.assertFailed(null, I[1], 1665, 12, "transformedPosition != null");
      return result.addWithOutOfBandPosition({paintOffset: paintOffset, hitTest: dart.fn(result => child.hitTest(result, {position: transformedPosition}), T.BoxHitTestResultTobool())});
    }
    applyPaintTransformForBoxChild(child, transform) {
      let rightWayUp = this[_getRightWayUp](this.constraints);
      let delta = this.childMainAxisPosition(child);
      let crossAxisDelta = this.childCrossAxisPosition(child);
      if (!(this.constraints.axis !== null)) dart.assertFailed(null, I[1], 1687, 12, "constraints.axis != null");
      switch (this.constraints.axis) {
        case C[7] || CT.C7:
          {
            if (!rightWayUp) {
              delta = dart.nullCheck(this.geometry).paintExtent - child.size.width - delta;
            }
            transform.translate(delta, crossAxisDelta);
            break;
          }
        case C[8] || CT.C8:
          {
            if (!rightWayUp) {
              delta = dart.nullCheck(this.geometry).paintExtent - child.size.height - delta;
            }
            transform.translate(crossAxisDelta, delta);
            break;
          }
      }
    }
  };
  (sliver$.RenderSliverHelpers[dart.mixinNew] = function() {
  }).prototype = sliver$.RenderSliverHelpers.prototype;
  dart.addTypeTests(sliver$.RenderSliverHelpers);
  dart.addTypeCaches(sliver$.RenderSliverHelpers);
  sliver$.RenderSliverHelpers[dart.implements] = () => [sliver$.RenderSliver, core.Object];
  dart.setMethodSignature(sliver$.RenderSliverHelpers, () => ({
    __proto__: dart.getMethods(sliver$.RenderSliverHelpers.__proto__),
    [_getRightWayUp]: dart.fnType(core.bool, [sliver$.SliverConstraints]),
    hitTestBoxChild: dart.fnType(core.bool, [box.BoxHitTestResult, box.RenderBox], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}),
    applyPaintTransformForBoxChild: dart.fnType(dart.void, [box.RenderBox, vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(sliver$.RenderSliverHelpers, I[0]);
  const RenderSliver_RenderObjectWithChildMixin$36 = class RenderSliver_RenderObjectWithChildMixin extends sliver$.RenderSliver {};
  (RenderSliver_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderSliver_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  const RenderSliver_RenderSliverHelpers$36 = class RenderSliver_RenderSliverHelpers extends RenderSliver_RenderObjectWithChildMixin$36 {};
  (RenderSliver_RenderSliverHelpers$36.new = function() {
    RenderSliver_RenderSliverHelpers$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverHelpers$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverHelpers$36, sliver$.RenderSliverHelpers);
  sliver$.RenderSliverSingleBoxAdapter = class RenderSliverSingleBoxAdapter extends RenderSliver_RenderSliverHelpers$36 {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!sliver$.SliverPhysicalParentData.is(child.parentData)) {
        child.parentData = new sliver$.SliverPhysicalParentData.new();
      }
    }
    setChildParentData(child, constraints, geometry) {
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      if (!(constraints.axisDirection !== null)) dart.assertFailed(null, I[1], 1739, 12, "constraints.axisDirection != null");
      if (!(constraints.growthDirection !== null)) dart.assertFailed(null, I[1], 1740, 12, "constraints.growthDirection != null");
      switch (sliver$.applyGrowthDirectionToAxisDirection(constraints.axisDirection, constraints.growthDirection)) {
        case C[5] || CT.C5:
          {
            childParentData.paintOffset = new ui.Offset.new(0.0, -(geometry.scrollExtent - (geometry.paintExtent + constraints.scrollOffset)));
            break;
          }
        case C[4] || CT.C4:
          {
            childParentData.paintOffset = new ui.Offset.new(-constraints.scrollOffset, 0.0);
            break;
          }
        case C[3] || CT.C3:
          {
            childParentData.paintOffset = new ui.Offset.new(0.0, -constraints.scrollOffset);
            break;
          }
        case C[6] || CT.C6:
          {
            childParentData.paintOffset = new ui.Offset.new(-(geometry.scrollExtent - (geometry.paintExtent + constraints.scrollOffset)), 0.0);
            break;
          }
      }
      if (!(childParentData.paintOffset !== null)) dart.assertFailed(null, I[1], 1755, 12, "childParentData.paintOffset != null");
    }
    hitTestChildren(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (!(dart.nullCheck(this.geometry).hitTestExtent > 0.0)) dart.assertFailed(null, I[1], 1760, 12, "geometry!.hitTestExtent > 0.0");
      if (this.child != null) {
        return this.hitTestBoxChild(new box.BoxHitTestResult.wrap(result), dart.nullCheck(this.child), {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
      }
      return false;
    }
    childMainAxisPosition(child) {
      box.RenderBox.as(child);
      return -this.constraints.scrollOffset;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[1], 1774, 12, "child != null");
      if (!child[$_equals](this.child)) dart.assertFailed(null, I[1], 1775, 12, "child == this.child");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.applyPaintTransform(transform);
    }
    paint(context, offset) {
      if (this.child != null && dart.nullCheck(this.geometry).visible) {
        let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        context.paintChild(dart.nullCheck(this.child), offset['+'](childParentData.paintOffset));
      }
    }
  };
  (sliver$.RenderSliverSingleBoxAdapter.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    sliver$.RenderSliverSingleBoxAdapter.__proto__.new.call(this);
    this.child = child;
  }).prototype = sliver$.RenderSliverSingleBoxAdapter.prototype;
  dart.addTypeTests(sliver$.RenderSliverSingleBoxAdapter);
  dart.addTypeCaches(sliver$.RenderSliverSingleBoxAdapter);
  dart.setMethodSignature(sliver$.RenderSliverSingleBoxAdapter, () => ({
    __proto__: dart.getMethods(sliver$.RenderSliverSingleBoxAdapter.__proto__),
    setChildParentData: dart.fnType(dart.void, [object.RenderObject, sliver$.SliverConstraints, sliver$.SliverGeometry])
  }));
  dart.setLibraryUri(sliver$.RenderSliverSingleBoxAdapter, I[0]);
  sliver$.RenderSliverToBoxAdapter = class RenderSliverToBoxAdapter extends sliver$.RenderSliverSingleBoxAdapter {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new sliver$.RenderSliverToBoxAdapter.new({child: child});
    }
    performLayout() {
      if (this.child == null) {
        this.geometry = sliver$.SliverGeometry.zero;
        return;
      }
      let constraints = this.constraints;
      dart.nullCheck(this.child).layout(constraints.asBoxConstraints(), {parentUsesSize: true});
      let childExtent = null;
      switch (constraints.axis) {
        case C[7] || CT.C7:
          {
            childExtent = dart.nullCheck(this.child).size.width;
            break;
          }
        case C[8] || CT.C8:
          {
            childExtent = dart.nullCheck(this.child).size.height;
            break;
          }
      }
      if (!(childExtent !== null)) dart.assertFailed(null, I[1], 1824, 12, "childExtent != null");
      let paintedChildSize = this.calculatePaintOffset(constraints, {from: 0.0, to: childExtent});
      let cacheExtent = this.calculateCacheOffset(constraints, {from: 0.0, to: childExtent});
      if (!paintedChildSize[$isFinite]) dart.assertFailed(null, I[1], 1828, 12, "paintedChildSize.isFinite");
      if (!(paintedChildSize >= 0.0)) dart.assertFailed(null, I[1], 1829, 12, "paintedChildSize >= 0.0");
      this.geometry = new sliver$.SliverGeometry.new({scrollExtent: childExtent, paintExtent: paintedChildSize, cacheExtent: cacheExtent, maxPaintExtent: childExtent, hitTestExtent: paintedChildSize, hasVisualOverflow: childExtent > constraints.remainingPaintExtent || constraints.scrollOffset > 0.0});
      this.setChildParentData(dart.nullCheck(this.child), constraints, dart.nullCheck(this.geometry));
    }
  };
  (sliver$.RenderSliverToBoxAdapter.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    sliver$.RenderSliverToBoxAdapter.__proto__.new.call(this, {child: child});
    ;
  }).prototype = sliver$.RenderSliverToBoxAdapter.prototype;
  dart.addTypeTests(sliver$.RenderSliverToBoxAdapter);
  dart.addTypeCaches(sliver$.RenderSliverToBoxAdapter);
  dart.setMethodSignature(sliver$.RenderSliverToBoxAdapter, () => ({
    __proto__: dart.getMethods(sliver$.RenderSliverToBoxAdapter.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver$.RenderSliverToBoxAdapter, I[0]);
  sliver$.applyGrowthDirectionToAxisDirection = function applyGrowthDirectionToAxisDirection(axisDirection, growthDirection) {
    if (!(axisDirection !== null)) dart.assertFailed(null, I[1], 52, 10, "axisDirection != null");
    if (!(growthDirection !== null)) dart.assertFailed(null, I[1], 53, 10, "growthDirection != null");
    switch (growthDirection) {
      case C[1] || CT.C1:
        {
          return axisDirection;
        }
      case C[2] || CT.C2:
        {
          return basic_types.flipAxisDirection(axisDirection);
        }
    }
  };
  sliver$.applyGrowthDirectionToScrollDirection = function applyGrowthDirectionToScrollDirection(scrollDirection, growthDirection) {
    if (!(scrollDirection !== null)) dart.assertFailed(null, I[1], 72, 10, "scrollDirection != null");
    if (!(growthDirection !== null)) dart.assertFailed(null, I[1], 73, 10, "growthDirection != null");
    switch (growthDirection) {
      case C[1] || CT.C1:
        {
          return scrollDirection;
        }
      case C[2] || CT.C2:
        {
          return viewport_offset.flipScrollDirection(scrollDirection);
        }
    }
  };
  sliver$._debugCompareFloats = function _debugCompareFloats(labelA, valueA, labelB, valueB) {
    return (() => {
      let t8 = T.JSArrayOfDiagnosticsNode().of([]);
      if (valueA[$toStringAsFixed](1) !== valueB[$toStringAsFixed](1))
        t8.push(new assertions.ErrorDescription.new("The " + labelA + " is " + valueA[$toStringAsFixed](1) + ", but " + "the " + labelB + " is " + valueB[$toStringAsFixed](1) + "."));
      else
        t8[$addAll](T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new("The " + labelA + " is " + dart.str(valueA) + ", but the " + labelB + " is " + dart.str(valueB) + "."), new assertions.ErrorHint.new("Maybe you have fallen prey to floating point rounding errors, and should explicitly " + "apply the min() or max() functions, or the clamp() method, to the " + labelB + "?")]));
      return t8;
    })();
  };
  viewport.CacheExtentStyle = class CacheExtentStyle extends core._Enum {
    toString() {
      return "CacheExtentStyle." + this[_name];
    }
  };
  (viewport.CacheExtentStyle.new = function(index, name) {
    viewport.CacheExtentStyle.__proto__.new.call(this, index, name);
    ;
  }).prototype = viewport.CacheExtentStyle.prototype;
  dart.addTypeTests(viewport.CacheExtentStyle);
  dart.addTypeCaches(viewport.CacheExtentStyle);
  dart.setLibraryUri(viewport.CacheExtentStyle, I[2]);
  dart.setStaticFieldSignature(viewport.CacheExtentStyle, () => ['values', 'pixel', 'viewport']);
  dart.defineExtensionMethods(viewport.CacheExtentStyle, ['toString']);
  dart.defineLazy(viewport.CacheExtentStyle, {
    /*viewport.CacheExtentStyle.values*/get values() {
      return C[11] || CT.C11;
    },
    /*viewport.CacheExtentStyle.pixel*/get pixel() {
      return C[12] || CT.C12;
    },
    /*viewport.CacheExtentStyle.viewport*/get viewport() {
      return C[13] || CT.C13;
    }
  }, false);
  viewport.RenderAbstractViewport = class RenderAbstractViewport extends object.RenderObject {
    static of(object) {
      while (object != null) {
        if (viewport.RenderAbstractViewport.is(object)) {
          return object;
        }
        object = T.RenderObjectN().as(object.parent);
      }
      return null;
    }
  };
  (viewport.RenderAbstractViewport.__ = function() {
    viewport.RenderAbstractViewport.__proto__.new.call(this);
    ;
  }).prototype = viewport.RenderAbstractViewport.prototype;
  dart.addTypeTests(viewport.RenderAbstractViewport);
  dart.addTypeCaches(viewport.RenderAbstractViewport);
  dart.setStaticMethodSignature(viewport.RenderAbstractViewport, () => ['of']);
  dart.setLibraryUri(viewport.RenderAbstractViewport, I[2]);
  dart.setStaticFieldSignature(viewport.RenderAbstractViewport, () => ['defaultCacheExtent']);
  dart.defineLazy(viewport.RenderAbstractViewport, {
    /*viewport.RenderAbstractViewport.defaultCacheExtent*/get defaultCacheExtent() {
      return 250;
    }
  }, false);
  var offset$ = dart.privateName(viewport, "RevealedOffset.offset");
  var rect$ = dart.privateName(viewport, "RevealedOffset.rect");
  viewport.RevealedOffset = class RevealedOffset extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    static ['_#new#tearOff'](opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      return new viewport.RevealedOffset.new({offset: offset, rect: rect});
    }
    toString() {
      return object$.objectRuntimeType(this, "RevealedOffset") + "(offset: " + dart.str(this.offset) + ", rect: " + dart.str(this.rect) + ")";
    }
  };
  (viewport.RevealedOffset.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    this[offset$] = offset;
    this[rect$] = rect;
    if (!(offset !== null)) dart.assertFailed(null, I[3], 105, 15, "offset != null");
    if (!(rect !== null)) dart.assertFailed(null, I[3], 106, 15, "rect != null");
    ;
  }).prototype = viewport.RevealedOffset.prototype;
  dart.addTypeTests(viewport.RevealedOffset);
  dart.addTypeCaches(viewport.RevealedOffset);
  dart.setLibraryUri(viewport.RevealedOffset, I[2]);
  dart.setFieldSignature(viewport.RevealedOffset, () => ({
    __proto__: dart.getFields(viewport.RevealedOffset.__proto__),
    offset: dart.finalFieldType(core.double),
    rect: dart.finalFieldType(ui.Rect)
  }));
  dart.defineExtensionMethods(viewport.RevealedOffset, ['toString']);
  var _calculatedCacheExtent = dart.privateName(viewport, "_calculatedCacheExtent");
  var _clipBehavior = dart.privateName(viewport, "_clipBehavior");
  var _clipRectLayer = dart.privateName(viewport, "_clipRectLayer");
  var _axisDirection = dart.privateName(viewport, "_axisDirection");
  var _crossAxisDirection = dart.privateName(viewport, "_crossAxisDirection");
  var _offset = dart.privateName(viewport, "_offset");
  var _cacheExtent = dart.privateName(viewport, "_cacheExtent");
  var _cacheExtentStyle = dart.privateName(viewport, "_cacheExtentStyle");
  var _paintContents = dart.privateName(viewport, "_paintContents");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  const _is_RenderViewportBase_default = Symbol('_is_RenderViewportBase_default');
  viewport.RenderViewportBase$ = dart.generic(ParentDataClass => {
    const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
    (RenderBox_ContainerRenderObjectMixin$36.new = function() {
      object.ContainerRenderObjectMixin$(sliver$.RenderSliver, ParentDataClass)[dart.mixinNew].call(this);
      RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
    }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
    dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(sliver$.RenderSliver, ParentDataClass));
    class RenderViewportBase extends RenderBox_ContainerRenderObjectMixin$36 {
      describeSemanticsConfiguration(config) {
        super.describeSemanticsConfiguration(config);
        config.addTagForChildren(viewport.RenderViewport.useTwoPaneSemantics);
      }
      visitChildrenForSemantics(visitor) {
        this.childrenInPaintOrder[$where](dart.fn(sliver => dart.nullCheck(sliver.geometry).visible || dart.nullCheck(sliver.geometry).cacheExtent > 0.0, T.RenderSliverTobool()))[$forEach](visitor);
      }
      get axisDirection() {
        return this[_axisDirection];
      }
      set axisDirection(value) {
        if (!(value !== null)) dart.assertFailed(null, I[3], 233, 12, "value != null");
        if (value === this[_axisDirection]) {
          return;
        }
        this[_axisDirection] = value;
        this.markNeedsLayout();
      }
      get crossAxisDirection() {
        return this[_crossAxisDirection];
      }
      set crossAxisDirection(value) {
        if (!(value !== null)) dart.assertFailed(null, I[3], 250, 12, "value != null");
        if (value === this[_crossAxisDirection]) {
          return;
        }
        this[_crossAxisDirection] = value;
        this.markNeedsLayout();
      }
      get axis() {
        return basic_types.axisDirectionToAxis(this.axisDirection);
      }
      get offset() {
        return this[_offset];
      }
      set offset(value) {
        if (!(value !== null)) dart.assertFailed(null, I[3], 273, 12, "value != null");
        if (value[$_equals](this[_offset])) {
          return;
        }
        if (this.attached) {
          this[_offset].removeListener(dart.bind(this, 'markNeedsLayout'));
        }
        this[_offset] = value;
        if (this.attached) {
          this[_offset].addListener(dart.bind(this, 'markNeedsLayout'));
        }
        this.markNeedsLayout();
      }
      get cacheExtent() {
        return this[_cacheExtent];
      }
      set cacheExtent(value) {
        value == null ? value = 250 : null;
        if (!(value != null)) dart.assertFailed(null, I[3], 326, 12, "value != null");
        if (value === this[_cacheExtent]) {
          return;
        }
        this[_cacheExtent] = value;
        this.markNeedsLayout();
      }
      get cacheExtentStyle() {
        return this[_cacheExtentStyle];
      }
      set cacheExtentStyle(value) {
        if (!(value !== null)) dart.assertFailed(null, I[3], 359, 12, "value != null");
        if (value === this[_cacheExtentStyle]) {
          return;
        }
        this[_cacheExtentStyle] = value;
        this.markNeedsLayout();
      }
      get clipBehavior() {
        return this[_clipBehavior];
      }
      set clipBehavior(value) {
        if (!(value !== null)) dart.assertFailed(null, I[3], 373, 12, "value != null");
        if (value !== this[_clipBehavior]) {
          this[_clipBehavior] = value;
          this.markNeedsPaint();
          this.markNeedsSemanticsUpdate();
        }
      }
      attach(owner) {
        object.PipelineOwner.as(owner);
        super.attach(owner);
        this[_offset].addListener(dart.bind(this, 'markNeedsLayout'));
      }
      detach() {
        this[_offset].removeListener(dart.bind(this, 'markNeedsLayout'));
        super.detach();
      }
      debugThrowIfNotCheckingIntrinsics() {
        if (!dart.fn(() => {
          if (!object.RenderObject.debugCheckingIntrinsics) {
            if (!!viewport.RenderShrinkWrappingViewport.is(this)) dart.assertFailed(null, I[3], 404, 16, "this is! RenderShrinkWrappingViewport");
            dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not support returning intrinsic dimensions."), new assertions.ErrorDescription.new("Calculating the intrinsic dimensions would require instantiating every child of " + "the viewport, which defeats the point of viewports being lazy."), new assertions.ErrorHint.new("If you are merely trying to shrink-wrap the viewport in the main axis direction, " + "consider a RenderShrinkWrappingViewport render object (ShrinkWrappingViewport widget), " + "which achieves that effect without implementing the intrinsic dimension API.")])));
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[3], 402, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        assert(this is! RenderShrinkWrappingViewport); // it has its own message\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not support returning intrinsic dimensions.'),\n          ErrorDescription(\n            'Calculating the intrinsic dimensions would require instantiating every child of '\n            'the viewport, which defeats the point of viewports being lazy.',\n          ),\n          ErrorHint(\n            'If you are merely trying to shrink-wrap the viewport in the main axis direction, '\n            'consider a RenderShrinkWrappingViewport render object (ShrinkWrappingViewport widget), '\n            'which achieves that effect without implementing the intrinsic dimension API.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
        return true;
      }
      computeMinIntrinsicWidth(height) {
        if (!this.debugThrowIfNotCheckingIntrinsics()) dart.assertFailed(null, I[3], 425, 12, "debugThrowIfNotCheckingIntrinsics()");
        return 0.0;
      }
      computeMaxIntrinsicWidth(height) {
        if (!this.debugThrowIfNotCheckingIntrinsics()) dart.assertFailed(null, I[3], 431, 12, "debugThrowIfNotCheckingIntrinsics()");
        return 0.0;
      }
      computeMinIntrinsicHeight(width) {
        if (!this.debugThrowIfNotCheckingIntrinsics()) dart.assertFailed(null, I[3], 437, 12, "debugThrowIfNotCheckingIntrinsics()");
        return 0.0;
      }
      computeMaxIntrinsicHeight(width) {
        if (!this.debugThrowIfNotCheckingIntrinsics()) dart.assertFailed(null, I[3], 443, 12, "debugThrowIfNotCheckingIntrinsics()");
        return 0.0;
      }
      get isRepaintBoundary() {
        return true;
      }
      layoutChildSequence(opts) {
        let child = opts && 'child' in opts ? opts.child : null;
        let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
        let overlap = opts && 'overlap' in opts ? opts.overlap : null;
        let layoutOffset = opts && 'layoutOffset' in opts ? opts.layoutOffset : null;
        let remainingPaintExtent = opts && 'remainingPaintExtent' in opts ? opts.remainingPaintExtent : null;
        let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
        let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
        let growthDirection = opts && 'growthDirection' in opts ? opts.growthDirection : null;
        let advance = opts && 'advance' in opts ? opts.advance : null;
        let remainingCacheExtent = opts && 'remainingCacheExtent' in opts ? opts.remainingCacheExtent : null;
        let cacheOrigin = opts && 'cacheOrigin' in opts ? opts.cacheOrigin : null;
        if (!scrollOffset[$isFinite]) dart.assertFailed(null, I[3], 494, 12, "scrollOffset.isFinite");
        if (!(scrollOffset >= 0.0)) dart.assertFailed(null, I[3], 495, 12, "scrollOffset >= 0.0");
        let initialLayoutOffset = layoutOffset;
        let adjustedUserScrollDirection = sliver$.applyGrowthDirectionToScrollDirection(this.offset.userScrollDirection, growthDirection);
        if (!(adjustedUserScrollDirection !== null)) dart.assertFailed(null, I[3], 499, 12, "adjustedUserScrollDirection != null");
        let maxPaintOffset = layoutOffset + overlap;
        let precedingScrollExtent = 0.0;
        while (child != null) {
          let sliverScrollOffset = scrollOffset <= 0.0 ? 0.0 : scrollOffset;
          let correctedCacheOrigin = math.max(core.double, cacheOrigin, -sliverScrollOffset);
          let cacheExtentCorrection = cacheOrigin - correctedCacheOrigin;
          if (!(sliverScrollOffset >= correctedCacheOrigin[$abs]())) dart.assertFailed(null, I[3], 511, 14, "sliverScrollOffset >= correctedCacheOrigin.abs()");
          if (!(correctedCacheOrigin <= 0.0)) dart.assertFailed(null, I[3], 512, 14, "correctedCacheOrigin <= 0.0");
          if (!(sliverScrollOffset >= 0.0)) dart.assertFailed(null, I[3], 513, 14, "sliverScrollOffset >= 0.0");
          if (!(cacheExtentCorrection <= 0.0)) dart.assertFailed(null, I[3], 514, 14, "cacheExtentCorrection <= 0.0");
          child.layout(new sliver$.SliverConstraints.new({axisDirection: this.axisDirection, growthDirection: growthDirection, userScrollDirection: adjustedUserScrollDirection, scrollOffset: sliverScrollOffset, precedingScrollExtent: precedingScrollExtent, overlap: maxPaintOffset - layoutOffset, remainingPaintExtent: math.max(core.double, 0.0, remainingPaintExtent - layoutOffset + initialLayoutOffset), crossAxisExtent: crossAxisExtent, crossAxisDirection: this.crossAxisDirection, viewportMainAxisExtent: mainAxisExtent, remainingCacheExtent: math.max(core.double, 0.0, remainingCacheExtent + cacheExtentCorrection), cacheOrigin: correctedCacheOrigin}), {parentUsesSize: true});
          let childLayoutGeometry = dart.nullCheck(child.geometry);
          if (!childLayoutGeometry.debugAssertIsValid()) dart.assertFailed(null, I[3], 532, 14, "childLayoutGeometry.debugAssertIsValid()");
          if (childLayoutGeometry.scrollOffsetCorrection != null) {
            return dart.nullCheck(childLayoutGeometry.scrollOffsetCorrection);
          }
          let effectiveLayoutOffset = layoutOffset + childLayoutGeometry.paintOrigin;
          if (childLayoutGeometry.visible || scrollOffset > 0) {
            this.updateChildLayoutOffset(child, effectiveLayoutOffset, growthDirection);
          } else {
            this.updateChildLayoutOffset(child, -scrollOffset + initialLayoutOffset, growthDirection);
          }
          maxPaintOffset = math.max(core.double, effectiveLayoutOffset + childLayoutGeometry.paintExtent, maxPaintOffset);
          scrollOffset = scrollOffset - childLayoutGeometry.scrollExtent;
          precedingScrollExtent = precedingScrollExtent + childLayoutGeometry.scrollExtent;
          layoutOffset = layoutOffset + childLayoutGeometry.layoutExtent;
          if (childLayoutGeometry.cacheExtent !== 0.0) {
            remainingCacheExtent = remainingCacheExtent - (childLayoutGeometry.cacheExtent - cacheExtentCorrection);
            cacheOrigin = math.min(core.double, correctedCacheOrigin + childLayoutGeometry.cacheExtent, 0.0);
          }
          this.updateOutOfBandData(growthDirection, childLayoutGeometry);
          child = advance(child);
        }
        return 0.0;
      }
      describeApproximatePaintClip(child) {
        sliver$.RenderSliver.as(child);
        switch (this.clipBehavior) {
          case C[15] || CT.C15:
            {
              return null;
            }
          case C[14] || CT.C14:
          case C[16] || CT.C16:
          case C[17] || CT.C17:
            {
              break;
            }
        }
        let viewportClip = ui.Offset.zero['&'](this.size);
        if (child.constraints.overlap === 0 || !child.constraints.viewportMainAxisExtent[$isFinite]) {
          return viewportClip;
        }
        let left = viewportClip.left;
        let right = viewportClip.right;
        let top = viewportClip.top;
        let bottom = viewportClip.bottom;
        let startOfOverlap = child.constraints.viewportMainAxisExtent - child.constraints.remainingPaintExtent;
        let overlapCorrection = startOfOverlap + child.constraints.overlap;
        switch (sliver$.applyGrowthDirectionToAxisDirection(this.axisDirection, child.constraints.growthDirection)) {
          case C[3] || CT.C3:
            {
              top = top + overlapCorrection;
              break;
            }
          case C[5] || CT.C5:
            {
              bottom = bottom - overlapCorrection;
              break;
            }
          case C[4] || CT.C4:
            {
              left = left + overlapCorrection;
              break;
            }
          case C[6] || CT.C6:
            {
              right = right - overlapCorrection;
              break;
            }
        }
        return new ui.Rect.fromLTRB(left, top, right, bottom);
      }
      describeSemanticsClip(child) {
        T.RenderSliverN().as(child);
        if (!(this.axis !== null)) dart.assertFailed(null, I[3], 622, 12, "axis != null");
        if (this[_calculatedCacheExtent] == null) {
          return this.semanticBounds;
        }
        switch (this.axis) {
          case C[8] || CT.C8:
            {
              return new ui.Rect.fromLTRB(this.semanticBounds.left, this.semanticBounds.top - dart.nullCheck(this[_calculatedCacheExtent]), this.semanticBounds.right, this.semanticBounds.bottom + dart.nullCheck(this[_calculatedCacheExtent]));
            }
          case C[7] || CT.C7:
            {
              return new ui.Rect.fromLTRB(this.semanticBounds.left - dart.nullCheck(this[_calculatedCacheExtent]), this.semanticBounds.top, this.semanticBounds.right + dart.nullCheck(this[_calculatedCacheExtent]), this.semanticBounds.bottom);
            }
        }
      }
      paint(context, offset) {
        if (this.firstChild == null) {
          return;
        }
        if (this.hasVisualOverflow && this.clipBehavior !== ui.Clip.none) {
          this[_clipRectLayer].layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, _paintContents), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
        } else {
          this[_clipRectLayer].layer = null;
          this[_paintContents](context, offset);
        }
      }
      dispose() {
        this[_clipRectLayer].layer = null;
        super.dispose();
      }
      [_paintContents](context, offset) {
        for (let child of this.childrenInPaintOrder) {
          if (dart.nullCheck(child.geometry).visible) {
            context.paintChild(child, offset['+'](this.paintOffsetOf(child)));
          }
        }
      }
      debugPaintSize(context, offset) {
        if (!dart.fn(() => {
          let t11;
          super.debugPaintSize(context, offset);
          let paint = (t11 = ui.Paint.new(), (() => {
            t11.style = ui.PaintingStyle.stroke;
            t11.strokeWidth = 1.0;
            t11.color = C[18] || CT.C18;
            return t11;
          })());
          let canvas = context.canvas;
          let child = this.firstChild;
          while (child != null) {
            let size = null;
            switch (this.axis) {
              case C[8] || CT.C8:
                {
                  size = new ui.Size.new(child.constraints.crossAxisExtent, dart.nullCheck(child.geometry).layoutExtent);
                  break;
                }
              case C[7] || CT.C7:
                {
                  size = new ui.Size.new(dart.nullCheck(child.geometry).layoutExtent, child.constraints.crossAxisExtent);
                  break;
                }
            }
            if (!(size !== null)) dart.assertFailed(null, I[3], 702, 16, "size != null");
            canvas.drawRect(offset['+'](this.paintOffsetOf(child))['&'](size).deflate(0.5), paint);
            child = this.childAfter(child);
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[3], 684, 12, "() {\n      super.debugPaintSize(context, offset);\n      final Paint paint = Paint()\n        ..style = PaintingStyle.stroke\n        ..strokeWidth = 1.0\n        ..color = const Color(0xFF00FF00);\n      final Canvas canvas = context.canvas;\n      RenderSliver? child = firstChild;\n      while (child != null) {\n        final Size size;\n        switch (axis) {\n          case Axis.vertical:\n            size = Size(child.constraints.crossAxisExtent, child.geometry!.layoutExtent);\n            break;\n          case Axis.horizontal:\n            size = Size(child.geometry!.layoutExtent, child.constraints.crossAxisExtent);\n            break;\n        }\n        assert(size != null);\n        canvas.drawRect(((offset + paintOffsetOf(child)) & size).deflate(0.5), paint);\n        child = childAfter(child);\n      }\n      return true;\n    }()");
      }
      hitTestChildren(result, opts) {
        let position = opts && 'position' in opts ? opts.position : null;
        let mainAxisPosition = null;
        let crossAxisPosition = null;
        switch (this.axis) {
          case C[8] || CT.C8:
            {
              mainAxisPosition = position.dy;
              crossAxisPosition = position.dx;
              break;
            }
          case C[7] || CT.C7:
            {
              mainAxisPosition = position.dx;
              crossAxisPosition = position.dy;
              break;
            }
        }
        if (!(mainAxisPosition !== null)) dart.assertFailed(null, I[3], 723, 12, "mainAxisPosition != null");
        if (!(crossAxisPosition !== null)) dart.assertFailed(null, I[3], 724, 12, "crossAxisPosition != null");
        let sliverResult = new sliver$.SliverHitTestResult.wrap(result);
        for (let child of this.childrenInHitTestOrder) {
          if (!dart.nullCheck(child.geometry).visible) {
            continue;
          }
          let transform = vector_math_64.Matrix4.identity();
          this.applyPaintTransform(child, transform);
          let isHit = result.addWithOutOfBandPosition({paintTransform: transform, hitTest: dart.fn(result => child.hitTest(sliverResult, {mainAxisPosition: this.computeChildMainAxisPosition(child, mainAxisPosition), crossAxisPosition: crossAxisPosition}), T.BoxHitTestResultTobool())});
          if (isHit) {
            return true;
          }
        }
        return false;
      }
      getOffsetToReveal(target, alignment, opts) {
        let rect = opts && 'rect' in opts ? opts.rect : null;
        let leadingScrollOffset = 0.0;
        let child = target;
        let pivot = null;
        let onlySlivers = sliver$.RenderSliver.is(target);
        while (!dart.equals(child.parent, this)) {
          let parent = object.RenderObject.as(dart.nullCheck(child.parent));
          if (!(parent !== null)) dart.assertFailed(dart.str(target) + " must be a descendant of " + dart.str(this), I[3], 777, 14, "parent != null");
          if (box.RenderBox.is(child)) {
            pivot = child;
          }
          if (sliver$.RenderSliver.is(parent)) {
            leadingScrollOffset = leadingScrollOffset + dart.nullCheck(parent.childScrollOffset(child));
          } else {
            onlySlivers = false;
            leadingScrollOffset = 0.0;
          }
          child = parent;
        }
        let rectLocal = null;
        let pivotExtent = null;
        let growthDirection = null;
        if (pivot != null) {
          if (!(pivot.parent != null)) dart.assertFailed(null, I[3], 799, 14, "pivot.parent != null");
          if (!!dart.equals(pivot.parent, this)) dart.assertFailed(null, I[3], 800, 14, "pivot.parent != this");
          if (!!dart.equals(pivot, this)) dart.assertFailed(null, I[3], 801, 14, "pivot != this");
          if (!sliver$.RenderSliver.is(pivot.parent)) dart.assertFailed(null, I[3], 802, 14, "pivot.parent is RenderSliver");
          let pivotParent = sliver$.RenderSliver.as(dart.nullCheck(pivot.parent));
          growthDirection = pivotParent.constraints.growthDirection;
          switch (this.axis) {
            case C[7] || CT.C7:
              {
                pivotExtent = pivot.size.width;
                break;
              }
            case C[8] || CT.C8:
              {
                pivotExtent = pivot.size.height;
                break;
              }
          }
          rect == null ? rect = target.paintBounds : null;
          rectLocal = matrix_utils.MatrixUtils.transformRect(target.getTransformTo(pivot), rect);
        } else if (onlySlivers) {
          let targetSliver = sliver$.RenderSliver.as(target);
          growthDirection = targetSliver.constraints.growthDirection;
          pivotExtent = dart.nullCheck(targetSliver.geometry).scrollExtent;
          if (rect == null) {
            switch (this.axis) {
              case C[7] || CT.C7:
                {
                  rect = new ui.Rect.fromLTWH(0.0, 0.0, dart.nullCheck(targetSliver.geometry).scrollExtent, targetSliver.constraints.crossAxisExtent);
                  break;
                }
              case C[8] || CT.C8:
                {
                  rect = new ui.Rect.fromLTWH(0.0, 0.0, targetSliver.constraints.crossAxisExtent, dart.nullCheck(targetSliver.geometry).scrollExtent);
                  break;
                }
            }
          }
          rectLocal = rect;
        } else {
          if (!(rect != null)) dart.assertFailed(null, I[3], 843, 14, "rect != null");
          return new viewport.RevealedOffset.new({offset: this.offset.pixels, rect: dart.nullCheck(rect)});
        }
        if (!(pivotExtent !== null)) dart.assertFailed(null, I[3], 847, 12, "pivotExtent != null");
        if (!(rect != null)) dart.assertFailed(null, I[3], 848, 12, "rect != null");
        if (!(rectLocal != null)) dart.assertFailed(null, I[3], 849, 12, "rectLocal != null");
        if (!(growthDirection !== null)) dart.assertFailed(null, I[3], 850, 12, "growthDirection != null");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 851, 12, "child.parent == this");
        if (!sliver$.RenderSliver.is(child)) dart.assertFailed(null, I[3], 852, 12, "child is RenderSliver");
        let sliver = sliver$.RenderSliver.as(child);
        let targetMainAxisExtent = null;
        switch (sliver$.applyGrowthDirectionToAxisDirection(this.axisDirection, growthDirection)) {
          case C[5] || CT.C5:
            {
              leadingScrollOffset = leadingScrollOffset + (pivotExtent - rectLocal.bottom);
              targetMainAxisExtent = rectLocal.height;
              break;
            }
          case C[4] || CT.C4:
            {
              leadingScrollOffset = leadingScrollOffset + rectLocal.left;
              targetMainAxisExtent = rectLocal.width;
              break;
            }
          case C[3] || CT.C3:
            {
              leadingScrollOffset = leadingScrollOffset + rectLocal.top;
              targetMainAxisExtent = rectLocal.height;
              break;
            }
          case C[6] || CT.C6:
            {
              leadingScrollOffset = leadingScrollOffset + (pivotExtent - rectLocal.right);
              targetMainAxisExtent = rectLocal.width;
              break;
            }
        }
        let isPinned = dart.nullCheck(sliver.geometry).maxScrollObstructionExtent > 0 && leadingScrollOffset >= 0;
        leadingScrollOffset = this.scrollOffsetOf(sliver, leadingScrollOffset);
        let transform = target.getTransformTo(this);
        let targetRect = matrix_utils.MatrixUtils.transformRect(transform, rect);
        let extentOfPinnedSlivers = this.maxScrollObstructionExtentBefore(sliver);
        switch (sliver.constraints.growthDirection) {
          case C[1] || CT.C1:
            {
              if (isPinned && alignment <= 0) {
                return new viewport.RevealedOffset.new({offset: 1 / 0, rect: targetRect});
              }
              leadingScrollOffset = leadingScrollOffset - extentOfPinnedSlivers;
              break;
            }
          case C[2] || CT.C2:
            {
              if (isPinned && alignment >= 1) {
                return new viewport.RevealedOffset.new({offset: -1 / 0, rect: targetRect});
              }
              switch (this.axis) {
                case C[8] || CT.C8:
                  {
                    leadingScrollOffset = leadingScrollOffset - targetRect.height;
                    break;
                  }
                case C[7] || CT.C7:
                  {
                    leadingScrollOffset = leadingScrollOffset - targetRect.width;
                    break;
                  }
              }
              break;
            }
        }
        let mainAxisExtent = null;
        switch (this.axis) {
          case C[7] || CT.C7:
            {
              mainAxisExtent = this.size.width - extentOfPinnedSlivers;
              break;
            }
          case C[8] || CT.C8:
            {
              mainAxisExtent = this.size.height - extentOfPinnedSlivers;
              break;
            }
        }
        let targetOffset = leadingScrollOffset - (mainAxisExtent - targetMainAxisExtent) * alignment;
        let offsetDifference = this.offset.pixels - targetOffset;
        switch (this.axisDirection) {
          case C[3] || CT.C3:
            {
              targetRect = targetRect.translate(0.0, offsetDifference);
              break;
            }
          case C[4] || CT.C4:
            {
              targetRect = targetRect.translate(offsetDifference, 0.0);
              break;
            }
          case C[5] || CT.C5:
            {
              targetRect = targetRect.translate(0.0, -offsetDifference);
              break;
            }
          case C[6] || CT.C6:
            {
              targetRect = targetRect.translate(-offsetDifference, 0.0);
              break;
            }
        }
        return new viewport.RevealedOffset.new({offset: targetOffset, rect: targetRect});
      }
      computeAbsolutePaintOffset(child, layoutOffset, growthDirection) {
        if (!this.hasSize) dart.assertFailed(null, I[3], 962, 12, "hasSize");
        if (!(this.axisDirection !== null)) dart.assertFailed(null, I[3], 963, 12, "axisDirection != null");
        if (!(growthDirection !== null)) dart.assertFailed(null, I[3], 964, 12, "growthDirection != null");
        if (!(child !== null)) dart.assertFailed(null, I[3], 965, 12, "child != null");
        if (!(child.geometry != null)) dart.assertFailed(null, I[3], 966, 12, "child.geometry != null");
        switch (sliver$.applyGrowthDirectionToAxisDirection(this.axisDirection, growthDirection)) {
          case C[5] || CT.C5:
            {
              return new ui.Offset.new(0.0, this.size.height - (layoutOffset + dart.nullCheck(child.geometry).paintExtent));
            }
          case C[4] || CT.C4:
            {
              return new ui.Offset.new(layoutOffset, 0.0);
            }
          case C[3] || CT.C3:
            {
              return new ui.Offset.new(0.0, layoutOffset);
            }
          case C[6] || CT.C6:
            {
              return new ui.Offset.new(this.size.width - (layoutOffset + dart.nullCheck(child.geometry).paintExtent), 0.0);
            }
        }
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (T.EnumPropertyOfAxisDirection()).new("axisDirection", this.axisDirection));
        properties.add(new (T.EnumPropertyOfAxisDirection()).new("crossAxisDirection", this.crossAxisDirection));
        properties.add(new (T.DiagnosticsPropertyOfViewportOffset()).new("offset", this.offset));
      }
      debugDescribeChildren() {
        let children = T.JSArrayOfDiagnosticsNode().of([]);
        let child = this.firstChild;
        if (child == null) {
          return children;
        }
        let count = this.indexOfFirstChild;
        while (true) {
          children[$add](dart.nullCheck(child).toDiagnosticsNode({name: this.labelForChild(count)}));
          if (dart.equals(child, this.lastChild)) {
            break;
          }
          count = count + 1;
          child = this.childAfter(child);
        }
        return children;
      }
      showOnScreen(opts) {
        let descendant = opts && 'descendant' in opts ? opts.descendant : null;
        let rect = opts && 'rect' in opts ? opts.rect : null;
        let duration = opts && 'duration' in opts ? opts.duration : C[19] || CT.C19;
        let curve = opts && 'curve' in opts ? opts.curve : C[20] || CT.C20;
        if (!this.offset.allowImplicitScrolling) {
          return super.showOnScreen({descendant: descendant, rect: rect, duration: duration, curve: curve});
        }
        let newRect = viewport.RenderViewportBase.showInViewport({descendant: descendant, viewport: this, offset: this.offset, rect: rect, duration: duration, curve: curve});
        super.showOnScreen({rect: newRect, duration: duration, curve: curve});
      }
      static showInViewport(opts) {
        let t11;
        let descendant = opts && 'descendant' in opts ? opts.descendant : null;
        let rect = opts && 'rect' in opts ? opts.rect : null;
        let viewport = opts && 'viewport' in opts ? opts.viewport : null;
        let offset = opts && 'offset' in opts ? opts.offset : null;
        let duration = opts && 'duration' in opts ? opts.duration : C[19] || CT.C19;
        let curve = opts && 'curve' in opts ? opts.curve : C[20] || CT.C20;
        if (!(viewport !== null)) dart.assertFailed(null, I[3], 1182, 12, "viewport != null");
        if (!(offset !== null)) dart.assertFailed(null, I[3], 1183, 12, "offset != null");
        if (descendant == null) {
          return rect;
        }
        let leadingEdgeOffset = viewport.getOffsetToReveal(descendant, 0.0, {rect: rect});
        let trailingEdgeOffset = viewport.getOffsetToReveal(descendant, 1.0, {rect: rect});
        let currentOffset = offset.pixels;
        let targetOffset = null;
        if (leadingEdgeOffset.offset < trailingEdgeOffset.offset) {
          let leadingEdgeDiff = (offset.pixels - leadingEdgeOffset.offset)[$abs]();
          let trailingEdgeDiff = (offset.pixels - trailingEdgeOffset.offset)[$abs]();
          targetOffset = leadingEdgeDiff < trailingEdgeDiff ? leadingEdgeOffset : trailingEdgeOffset;
        } else if (currentOffset > leadingEdgeOffset.offset) {
          targetOffset = leadingEdgeOffset;
        } else if (currentOffset < trailingEdgeOffset.offset) {
          targetOffset = trailingEdgeOffset;
        } else {
          let transform = descendant.getTransformTo(object.RenderObject.as(dart.nullCheck(viewport.parent)));
          return matrix_utils.MatrixUtils.transformRect(transform, (t11 = rect, t11 == null ? descendant.paintBounds : t11));
        }
        if (!(targetOffset !== null)) dart.assertFailed(null, I[3], 1234, 12, "targetOffset != null");
        offset.moveTo(targetOffset.offset, {duration: duration, curve: curve});
        return targetOffset.rect;
      }
    }
    (RenderViewportBase.new = function(opts) {
      let t11;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[3] || CT.C3;
      let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let cacheExtentStyle = opts && 'cacheExtentStyle' in opts ? opts.cacheExtentStyle : C[12] || CT.C12;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[14] || CT.C14;
      this[_calculatedCacheExtent] = null;
      this[_clipBehavior] = ui.Clip.hardEdge;
      this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
      if (!(axisDirection !== null)) dart.assertFailed(null, I[3], 182, 15, "axisDirection != null");
      if (!(crossAxisDirection !== null)) dart.assertFailed(null, I[3], 183, 15, "crossAxisDirection != null");
      if (!(offset !== null)) dart.assertFailed(null, I[3], 184, 15, "offset != null");
      if (!(basic_types.axisDirectionToAxis(axisDirection) !== basic_types.axisDirectionToAxis(crossAxisDirection))) dart.assertFailed(null, I[3], 185, 15, "axisDirectionToAxis(axisDirection) != axisDirectionToAxis(crossAxisDirection)");
      if (!(cacheExtentStyle !== null)) dart.assertFailed(null, I[3], 186, 15, "cacheExtentStyle != null");
      if (!(cacheExtent != null || cacheExtentStyle === viewport.CacheExtentStyle.pixel)) dart.assertFailed(null, I[3], 187, 15, "cacheExtent != null || cacheExtentStyle == CacheExtentStyle.pixel");
      if (!(clipBehavior !== null)) dart.assertFailed(null, I[3], 188, 15, "clipBehavior != null");
      this[_axisDirection] = axisDirection;
      this[_crossAxisDirection] = crossAxisDirection;
      this[_offset] = offset;
      this[_cacheExtent] = (t11 = cacheExtent, t11 == null ? 250 : t11);
      this[_cacheExtentStyle] = cacheExtentStyle;
      this[_clipBehavior] = clipBehavior;
      RenderViewportBase.__proto__.new.call(this);
      ;
    }).prototype = RenderViewportBase.prototype;
    dart.addTypeTests(RenderViewportBase);
    RenderViewportBase.prototype[_is_RenderViewportBase_default] = true;
    dart.addTypeCaches(RenderViewportBase);
    RenderViewportBase[dart.implements] = () => [viewport.RenderAbstractViewport];
    dart.setMethodSignature(RenderViewportBase, () => ({
      __proto__: dart.getMethods(RenderViewportBase.__proto__),
      debugThrowIfNotCheckingIntrinsics: dart.fnType(core.bool, []),
      layoutChildSequence: dart.fnType(core.double, [], {}, {advance: dart.fnType(dart.nullable(sliver$.RenderSliver), [sliver$.RenderSliver]), cacheOrigin: core.double, child: dart.nullable(sliver$.RenderSliver), crossAxisExtent: core.double, growthDirection: sliver$.GrowthDirection, layoutOffset: core.double, mainAxisExtent: core.double, overlap: core.double, remainingCacheExtent: core.double, remainingPaintExtent: core.double, scrollOffset: core.double}),
      describeSemanticsClip: dart.fnType(ui.Rect, [dart.nullable(core.Object)]),
      [_paintContents]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
      getOffsetToReveal: dart.fnType(viewport.RevealedOffset, [object.RenderObject, core.double], {rect: dart.nullable(ui.Rect)}, {}),
      computeAbsolutePaintOffset: dart.fnType(ui.Offset, [sliver$.RenderSliver, core.double, sliver$.GrowthDirection])
    }));
    dart.setStaticMethodSignature(RenderViewportBase, () => ['showInViewport']);
    dart.setGetterSignature(RenderViewportBase, () => ({
      __proto__: dart.getGetters(RenderViewportBase.__proto__),
      axisDirection: basic_types.AxisDirection,
      crossAxisDirection: basic_types.AxisDirection,
      axis: basic_types.Axis,
      offset: viewport_offset.ViewportOffset,
      cacheExtent: dart.nullable(core.double),
      cacheExtentStyle: viewport.CacheExtentStyle,
      clipBehavior: ui.Clip
    }));
    dart.setSetterSignature(RenderViewportBase, () => ({
      __proto__: dart.getSetters(RenderViewportBase.__proto__),
      axisDirection: basic_types.AxisDirection,
      crossAxisDirection: basic_types.AxisDirection,
      offset: viewport_offset.ViewportOffset,
      cacheExtent: dart.nullable(core.double),
      cacheExtentStyle: viewport.CacheExtentStyle,
      clipBehavior: ui.Clip
    }));
    dart.setLibraryUri(RenderViewportBase, I[2]);
    dart.setFieldSignature(RenderViewportBase, () => ({
      __proto__: dart.getFields(RenderViewportBase.__proto__),
      [_axisDirection]: dart.fieldType(basic_types.AxisDirection),
      [_crossAxisDirection]: dart.fieldType(basic_types.AxisDirection),
      [_offset]: dart.fieldType(viewport_offset.ViewportOffset),
      [_cacheExtent]: dart.fieldType(core.double),
      [_calculatedCacheExtent]: dart.fieldType(dart.nullable(core.double)),
      [_cacheExtentStyle]: dart.fieldType(viewport.CacheExtentStyle),
      [_clipBehavior]: dart.fieldType(ui.Clip),
      [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
    }));
    return RenderViewportBase;
  });
  viewport.RenderViewportBase = viewport.RenderViewportBase$();
  dart.addTypeTests(viewport.RenderViewportBase, _is_RenderViewportBase_default);
  var __RenderViewport__minScrollExtent = dart.privateName(viewport, "_#RenderViewport#_minScrollExtent");
  var __RenderViewport__maxScrollExtent = dart.privateName(viewport, "_#RenderViewport#_maxScrollExtent");
  var _hasVisualOverflow = dart.privateName(viewport, "_hasVisualOverflow");
  var _anchor = dart.privateName(viewport, "_anchor");
  var _center = dart.privateName(viewport, "_center");
  var _minScrollExtent = dart.privateName(viewport, "_minScrollExtent");
  var _maxScrollExtent = dart.privateName(viewport, "_maxScrollExtent");
  var _attemptLayout = dart.privateName(viewport, "_attemptLayout");
  var SemanticsTag_name = dart.privateName(semantics, "SemanticsTag.name");
  viewport.RenderViewport = class RenderViewport extends viewport.RenderViewportBase$(sliver$.SliverPhysicalContainerParentData) {
    static ['_#new#tearOff'](opts) {
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let anchor = opts && 'anchor' in opts ? opts.anchor : 0;
      let children = opts && 'children' in opts ? opts.children : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let cacheExtentStyle = opts && 'cacheExtentStyle' in opts ? opts.cacheExtentStyle : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new viewport.RenderViewport.new({axisDirection: axisDirection, crossAxisDirection: crossAxisDirection, offset: offset, anchor: anchor, children: children, center: center, cacheExtent: cacheExtent, cacheExtentStyle: cacheExtentStyle, clipBehavior: clipBehavior});
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!sliver$.SliverPhysicalContainerParentData.is(child.parentData)) {
        child.parentData = new sliver$.SliverPhysicalContainerParentData.new();
      }
    }
    get anchor() {
      return this[_anchor];
    }
    set anchor(value) {
      if (!(value !== null)) dart.assertFailed(null, I[3], 1354, 12, "value != null");
      if (!(value >= 0.0 && value <= 1.0)) dart.assertFailed(null, I[3], 1355, 12, "value >= 0.0 && value <= 1.0");
      if (value === this[_anchor]) {
        return;
      }
      this[_anchor] = value;
      this.markNeedsLayout();
    }
    get center() {
      return this[_center];
    }
    set center(value) {
      if (dart.equals(value, this[_center])) {
        return;
      }
      this[_center] = value;
      this.markNeedsLayout();
    }
    get sizedByParent() {
      return true;
    }
    computeDryLayout(constraints) {
      if (!dart.fn(() => {
        if (!constraints.hasBoundedHeight || !constraints.hasBoundedWidth) {
          switch (this.axis) {
            case C[8] || CT.C8:
              {
                if (!constraints.hasBoundedHeight) {
                  dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Vertical viewport was given unbounded height."), new assertions.ErrorDescription.new("Viewports expand in the scrolling direction to fill their container. " + "In this case, a vertical viewport was given an unlimited amount of " + "vertical space in which to expand. This situation typically happens " + "when a scrollable widget is nested inside another scrollable widget."), new assertions.ErrorHint.new("If this widget is always nested in a scrollable widget there " + "is no need to use a viewport because there will always be enough " + "vertical space for the children. In this case, consider using a " + "Column or Wrap instead. Otherwise, consider using a " + "CustomScrollView to concatenate arbitrary slivers into a " + "single scrollable.")])));
                }
                if (!constraints.hasBoundedWidth) {
                  dart.throw(assertions.FlutterError.new("Vertical viewport was given unbounded width.\n" + "Viewports expand in the cross axis to fill their container and " + "constrain their children to match their extent in the cross axis. " + "In this case, a vertical viewport was given an unlimited amount of " + "horizontal space in which to expand."));
                }
                break;
              }
            case C[7] || CT.C7:
              {
                if (!constraints.hasBoundedWidth) {
                  dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Horizontal viewport was given unbounded width."), new assertions.ErrorDescription.new("Viewports expand in the scrolling direction to fill their container. " + "In this case, a horizontal viewport was given an unlimited amount of " + "horizontal space in which to expand. This situation typically happens " + "when a scrollable widget is nested inside another scrollable widget."), new assertions.ErrorHint.new("If this widget is always nested in a scrollable widget there " + "is no need to use a viewport because there will always be enough " + "horizontal space for the children. In this case, consider using a " + "Row or Wrap instead. Otherwise, consider using a " + "CustomScrollView to concatenate arbitrary slivers into a " + "single scrollable.")])));
                }
                if (!constraints.hasBoundedHeight) {
                  dart.throw(assertions.FlutterError.new("Horizontal viewport was given unbounded height.\n" + "Viewports expand in the cross axis to fill their container and " + "constrain their children to match their extent in the cross axis. " + "In this case, a horizontal viewport was given an unlimited amount of " + "vertical space in which to expand."));
                }
                break;
              }
          }
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[3], 1388, 12, "() {\n      if (!constraints.hasBoundedHeight || !constraints.hasBoundedWidth) {\n        switch (axis) {\n          case Axis.vertical:\n            if (!constraints.hasBoundedHeight) {\n              throw FlutterError.fromParts(<DiagnosticsNode>[\n                ErrorSummary('Vertical viewport was given unbounded height.'),\n                ErrorDescription(\n                  'Viewports expand in the scrolling direction to fill their container. '\n                  'In this case, a vertical viewport was given an unlimited amount of '\n                  'vertical space in which to expand. This situation typically happens '\n                  'when a scrollable widget is nested inside another scrollable widget.',\n                ),\n                ErrorHint(\n                  'If this widget is always nested in a scrollable widget there '\n                  'is no need to use a viewport because there will always be enough '\n                  'vertical space for the children. In this case, consider using a '\n                  'Column or Wrap instead. Otherwise, consider using a '\n                  'CustomScrollView to concatenate arbitrary slivers into a '\n                  'single scrollable.',\n                ),\n              ]);\n            }\n            if (!constraints.hasBoundedWidth) {\n              throw FlutterError(\n                'Vertical viewport was given unbounded width.\\n'\n                'Viewports expand in the cross axis to fill their container and '\n                'constrain their children to match their extent in the cross axis. '\n                'In this case, a vertical viewport was given an unlimited amount of '\n                'horizontal space in which to expand.',\n              );\n            }\n            break;\n          case Axis.horizontal:\n            if (!constraints.hasBoundedWidth) {\n              throw FlutterError.fromParts(<DiagnosticsNode>[\n                ErrorSummary('Horizontal viewport was given unbounded width.'),\n                ErrorDescription(\n                  'Viewports expand in the scrolling direction to fill their container. '\n                  'In this case, a horizontal viewport was given an unlimited amount of '\n                  'horizontal space in which to expand. This situation typically happens '\n                  'when a scrollable widget is nested inside another scrollable widget.',\n                ),\n                ErrorHint(\n                  'If this widget is always nested in a scrollable widget there '\n                  'is no need to use a viewport because there will always be enough '\n                  'horizontal space for the children. In this case, consider using a '\n                  'Row or Wrap instead. Otherwise, consider using a '\n                  'CustomScrollView to concatenate arbitrary slivers into a '\n                  'single scrollable.',\n                ),\n              ]);\n            }\n            if (!constraints.hasBoundedHeight) {\n              throw FlutterError(\n                'Horizontal viewport was given unbounded height.\\n'\n                'Viewports expand in the cross axis to fill their container and '\n                'constrain their children to match their extent in the cross axis. '\n                'In this case, a horizontal viewport was given an unlimited amount of '\n                'vertical space in which to expand.',\n              );\n            }\n            break;\n        }\n      }\n      return true;\n    }()");
      return constraints.biggest;
    }
    get [_minScrollExtent]() {
      let t11;
      t11 = this[__RenderViewport__minScrollExtent];
      return t11 == null ? dart.throw(new _internal.LateError.fieldNI("_minScrollExtent")) : t11;
    }
    set [_minScrollExtent](library$32package$58flutter$47src$47rendering$47viewport$46dart$58$58_minScrollExtent$35param) {
      this[__RenderViewport__minScrollExtent] = library$32package$58flutter$47src$47rendering$47viewport$46dart$58$58_minScrollExtent$35param;
    }
    get [_maxScrollExtent]() {
      let t11;
      t11 = this[__RenderViewport__maxScrollExtent];
      return t11 == null ? dart.throw(new _internal.LateError.fieldNI("_maxScrollExtent")) : t11;
    }
    set [_maxScrollExtent](library$32package$58flutter$47src$47rendering$47viewport$46dart$58$58_maxScrollExtent$35param) {
      this[__RenderViewport__maxScrollExtent] = library$32package$58flutter$47src$47rendering$47viewport$46dart$58$58_maxScrollExtent$35param;
    }
    performLayout() {
      switch (this.axis) {
        case C[8] || CT.C8:
          {
            this.offset.applyViewportDimension(this.size.height);
            break;
          }
        case C[7] || CT.C7:
          {
            this.offset.applyViewportDimension(this.size.width);
            break;
          }
      }
      if (this.center == null) {
        if (!(this.firstChild == null)) dart.assertFailed(null, I[3], 1479, 14, "firstChild == null");
        this[_minScrollExtent] = 0.0;
        this[_maxScrollExtent] = 0.0;
        this[_hasVisualOverflow] = false;
        this.offset.applyContentDimensions(0.0, 0.0);
        return;
      }
      if (!dart.equals(dart.nullCheck(this.center).parent, this)) dart.assertFailed(null, I[3], 1486, 12, "center!.parent == this");
      let mainAxisExtent = null;
      let crossAxisExtent = null;
      switch (this.axis) {
        case C[8] || CT.C8:
          {
            mainAxisExtent = this.size.height;
            crossAxisExtent = this.size.width;
            break;
          }
        case C[7] || CT.C7:
          {
            mainAxisExtent = this.size.width;
            crossAxisExtent = this.size.height;
            break;
          }
      }
      let centerOffsetAdjustment = dart.nullCheck(this.center).centerOffsetAdjustment;
      let correction = null;
      let count = 0;
      do {
        if (!(this.offset.pixels !== null)) dart.assertFailed(null, I[3], 1506, 14, "offset.pixels != null");
        correction = this[_attemptLayout](mainAxisExtent, crossAxisExtent, this.offset.pixels + centerOffsetAdjustment);
        if (correction !== 0.0) {
          this.offset.correctBy(correction);
        } else {
          if (this.offset.applyContentDimensions(math.min(core.double, 0.0, this[_minScrollExtent] + mainAxisExtent * this.anchor), math.max(core.double, 0.0, this[_maxScrollExtent] - mainAxisExtent * (1.0 - this.anchor)))) {
            break;
          }
        }
        count = count + 1;
      } while (count < 10);
      if (!dart.fn(() => {
        if (count >= 10) {
          if (!(count !== 1)) dart.assertFailed(null, I[3], 1522, 16, "count != 1");
          dart.throw(assertions.FlutterError.new("A RenderViewport exceeded its maximum number of layout cycles.\n" + "RenderViewport render objects, during layout, can retry if either their " + "slivers or their ViewportOffset decide that the offset should be corrected " + "to take into account information collected during that layout.\n" + "In the case of this RenderViewport object, however, this happened " + dart.str(count) + " " + "times and still there was no consensus on the scroll offset. This usually " + "indicates a bug. Specifically, it means that one of the following three " + "problems is being experienced by the RenderViewport object:\n" + " * One of the RenderSliver children or the ViewportOffset have a bug such" + " that they always think that they need to correct the offset regardless.\n" + " * Some combination of the RenderSliver children and the ViewportOffset" + " have a bad interaction such that one applies a correction then another" + " applies a reverse correction, leading to an infinite loop of corrections.\n" + " * There is a pathological case that would eventually resolve, but it is" + " so complicated that it cannot be resolved in any reasonable number of" + " layout passes."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[3], 1520, 12, "() {\n      if (count >= _maxLayoutCycles) {\n        assert(count != 1);\n        throw FlutterError(\n          'A RenderViewport exceeded its maximum number of layout cycles.\\n'\n          'RenderViewport render objects, during layout, can retry if either their '\n          'slivers or their ViewportOffset decide that the offset should be corrected '\n          'to take into account information collected during that layout.\\n'\n          'In the case of this RenderViewport object, however, this happened $count '\n          'times and still there was no consensus on the scroll offset. This usually '\n          'indicates a bug. Specifically, it means that one of the following three '\n          'problems is being experienced by the RenderViewport object:\\n'\n          ' * One of the RenderSliver children or the ViewportOffset have a bug such'\n          ' that they always think that they need to correct the offset regardless.\\n'\n          ' * Some combination of the RenderSliver children and the ViewportOffset'\n          ' have a bad interaction such that one applies a correction then another'\n          ' applies a reverse correction, leading to an infinite loop of corrections.\\n'\n          ' * There is a pathological case that would eventually resolve, but it is'\n          ' so complicated that it cannot be resolved in any reasonable number of'\n          ' layout passes.',\n        );\n      }\n      return true;\n    }()");
    }
    [_attemptLayout](mainAxisExtent, crossAxisExtent, correctedOffset) {
      if (!!mainAxisExtent[$isNaN]) dart.assertFailed(null, I[3], 1547, 12, "!mainAxisExtent.isNaN");
      if (!(mainAxisExtent >= 0.0)) dart.assertFailed(null, I[3], 1548, 12, "mainAxisExtent >= 0.0");
      if (!crossAxisExtent[$isFinite]) dart.assertFailed(null, I[3], 1549, 12, "crossAxisExtent.isFinite");
      if (!(crossAxisExtent >= 0.0)) dart.assertFailed(null, I[3], 1550, 12, "crossAxisExtent >= 0.0");
      if (!correctedOffset[$isFinite]) dart.assertFailed(null, I[3], 1551, 12, "correctedOffset.isFinite");
      this[_minScrollExtent] = 0.0;
      this[_maxScrollExtent] = 0.0;
      this[_hasVisualOverflow] = false;
      let centerOffset = mainAxisExtent * this.anchor - correctedOffset;
      let reverseDirectionRemainingPaintExtent = math$.clampDouble(centerOffset, 0.0, mainAxisExtent);
      let forwardDirectionRemainingPaintExtent = math$.clampDouble(mainAxisExtent - centerOffset, 0.0, mainAxisExtent);
      switch (this.cacheExtentStyle) {
        case C[12] || CT.C12:
          {
            this[_calculatedCacheExtent] = this.cacheExtent;
            break;
          }
        case C[13] || CT.C13:
          {
            this[_calculatedCacheExtent] = mainAxisExtent * this[_cacheExtent];
            break;
          }
      }
      let fullCacheExtent = mainAxisExtent + 2 * dart.nullCheck(this[_calculatedCacheExtent]);
      let centerCacheOffset = centerOffset + dart.nullCheck(this[_calculatedCacheExtent]);
      let reverseDirectionRemainingCacheExtent = math$.clampDouble(centerCacheOffset, 0.0, fullCacheExtent);
      let forwardDirectionRemainingCacheExtent = math$.clampDouble(fullCacheExtent - centerCacheOffset, 0.0, fullCacheExtent);
      let leadingNegativeChild = this.childBefore(dart.nullCheck(this.center));
      if (leadingNegativeChild != null) {
        let result = this.layoutChildSequence({child: leadingNegativeChild, scrollOffset: math.max(core.double, mainAxisExtent, centerOffset) - mainAxisExtent, overlap: 0.0, layoutOffset: forwardDirectionRemainingPaintExtent, remainingPaintExtent: reverseDirectionRemainingPaintExtent, mainAxisExtent: mainAxisExtent, crossAxisExtent: crossAxisExtent, growthDirection: sliver$.GrowthDirection.reverse, advance: dart.bind(this, 'childBefore'), remainingCacheExtent: reverseDirectionRemainingCacheExtent, cacheOrigin: math$.clampDouble(mainAxisExtent - centerOffset, -dart.nullCheck(this[_calculatedCacheExtent]), 0.0)});
        if (result !== 0.0) {
          return -result;
        }
      }
      return this.layoutChildSequence({child: this.center, scrollOffset: math.max(core.double, 0.0, -centerOffset), overlap: leadingNegativeChild == null ? math.min(core.double, 0.0, -centerOffset) : 0.0, layoutOffset: centerOffset >= mainAxisExtent ? centerOffset : reverseDirectionRemainingPaintExtent, remainingPaintExtent: forwardDirectionRemainingPaintExtent, mainAxisExtent: mainAxisExtent, crossAxisExtent: crossAxisExtent, growthDirection: sliver$.GrowthDirection.forward, advance: dart.bind(this, 'childAfter'), remainingCacheExtent: forwardDirectionRemainingCacheExtent, cacheOrigin: math$.clampDouble(centerOffset, -dart.nullCheck(this[_calculatedCacheExtent]), 0.0)});
    }
    get hasVisualOverflow() {
      return this[_hasVisualOverflow];
    }
    updateOutOfBandData(growthDirection, childLayoutGeometry) {
      switch (growthDirection) {
        case C[1] || CT.C1:
          {
            this[_maxScrollExtent] = this[_maxScrollExtent] + childLayoutGeometry.scrollExtent;
            break;
          }
        case C[2] || CT.C2:
          {
            this[_minScrollExtent] = this[_minScrollExtent] - childLayoutGeometry.scrollExtent;
            break;
          }
      }
      if (childLayoutGeometry.hasVisualOverflow) {
        this[_hasVisualOverflow] = true;
      }
    }
    updateChildLayoutOffset(child, layoutOffset, growthDirection) {
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.paintOffset = this.computeAbsolutePaintOffset(child, layoutOffset, growthDirection);
    }
    paintOffsetOf(child) {
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      return childParentData.paintOffset;
    }
    scrollOffsetOf(child, scrollOffsetWithinChild) {
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 1647, 12, "child.parent == this");
      let growthDirection = child.constraints.growthDirection;
      if (!(growthDirection !== null)) dart.assertFailed(null, I[3], 1649, 12, "growthDirection != null");
      switch (growthDirection) {
        case C[1] || CT.C1:
          {
            let scrollOffsetToChild = 0.0;
            let current = this.center;
            while (!dart.equals(current, child)) {
              scrollOffsetToChild = scrollOffsetToChild + dart.nullCheck(dart.nullCheck(current).geometry).scrollExtent;
              current = this.childAfter(current);
            }
            return scrollOffsetToChild + scrollOffsetWithinChild;
          }
        case C[2] || CT.C2:
          {
            let scrollOffsetToChild = 0.0;
            let current = this.childBefore(dart.nullCheck(this.center));
            while (!dart.equals(current, child)) {
              scrollOffsetToChild = scrollOffsetToChild - dart.nullCheck(dart.nullCheck(current).geometry).scrollExtent;
              current = this.childBefore(current);
            }
            return scrollOffsetToChild - scrollOffsetWithinChild;
          }
      }
    }
    maxScrollObstructionExtentBefore(child) {
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 1672, 12, "child.parent == this");
      let growthDirection = child.constraints.growthDirection;
      if (!(growthDirection !== null)) dart.assertFailed(null, I[3], 1674, 12, "growthDirection != null");
      switch (growthDirection) {
        case C[1] || CT.C1:
          {
            let pinnedExtent = 0.0;
            let current = this.center;
            while (!dart.equals(current, child)) {
              pinnedExtent = pinnedExtent + dart.nullCheck(dart.nullCheck(current).geometry).maxScrollObstructionExtent;
              current = this.childAfter(current);
            }
            return pinnedExtent;
          }
        case C[2] || CT.C2:
          {
            let pinnedExtent = 0.0;
            let current = this.childBefore(dart.nullCheck(this.center));
            while (!dart.equals(current, child)) {
              pinnedExtent = pinnedExtent + dart.nullCheck(dart.nullCheck(current).geometry).maxScrollObstructionExtent;
              current = this.childBefore(current);
            }
            return pinnedExtent;
          }
      }
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[3], 1698, 12, "child != null");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.applyPaintTransform(transform);
    }
    computeChildMainAxisPosition(child, parentMainAxisPosition) {
      if (!(child !== null)) dart.assertFailed(null, I[3], 1705, 12, "child != null");
      if (!(child.constraints !== null)) dart.assertFailed(null, I[3], 1706, 12, "child.constraints != null");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      switch (sliver$.applyGrowthDirectionToAxisDirection(child.constraints.axisDirection, child.constraints.growthDirection)) {
        case C[3] || CT.C3:
          {
            return parentMainAxisPosition - childParentData.paintOffset.dy;
          }
        case C[4] || CT.C4:
          {
            return parentMainAxisPosition - childParentData.paintOffset.dx;
          }
        case C[5] || CT.C5:
          {
            return dart.nullCheck(child.geometry).paintExtent - (parentMainAxisPosition - childParentData.paintOffset.dy);
          }
        case C[6] || CT.C6:
          {
            return dart.nullCheck(child.geometry).paintExtent - (parentMainAxisPosition - childParentData.paintOffset.dx);
          }
      }
    }
    get indexOfFirstChild() {
      if (!(this.center != null)) dart.assertFailed(null, I[3], 1722, 12, "center != null");
      if (!dart.equals(dart.nullCheck(this.center).parent, this)) dart.assertFailed(null, I[3], 1723, 12, "center!.parent == this");
      if (!(this.firstChild != null)) dart.assertFailed(null, I[3], 1724, 12, "firstChild != null");
      let count = 0;
      let child = this.center;
      while (!dart.equals(child, this.firstChild)) {
        count = count - 1;
        child = this.childBefore(dart.nullCheck(child));
      }
      return count;
    }
    labelForChild(index) {
      if (index === 0) {
        return "center child";
      }
      return "child " + dart.str(index);
    }
    get childrenInPaintOrder() {
      let children = T.JSArrayOfRenderSliver().of([]);
      if (this.firstChild == null) {
        return children;
      }
      let child = this.firstChild;
      while (!dart.equals(child, this.center)) {
        children[$add](dart.nullCheck(child));
        child = this.childAfter(child);
      }
      child = this.lastChild;
      while (true) {
        children[$add](dart.nullCheck(child));
        if (dart.equals(child, this.center)) {
          return children;
        }
        child = this.childBefore(child);
      }
    }
    get childrenInHitTestOrder() {
      let children = T.JSArrayOfRenderSliver().of([]);
      if (this.firstChild == null) {
        return children;
      }
      let child = this.center;
      while (child != null) {
        children[$add](child);
        child = this.childAfter(child);
      }
      child = this.childBefore(dart.nullCheck(this.center));
      while (child != null) {
        children[$add](child);
        child = this.childBefore(child);
      }
      return children;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("anchor", this.anchor));
    }
  };
  (viewport.RenderViewport.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[3] || CT.C3;
    let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let anchor = opts && 'anchor' in opts ? opts.anchor : 0;
    let children = opts && 'children' in opts ? opts.children : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let cacheExtentStyle = opts && 'cacheExtentStyle' in opts ? opts.cacheExtentStyle : C[12] || CT.C12;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[14] || CT.C14;
    this[__RenderViewport__minScrollExtent] = null;
    this[__RenderViewport__maxScrollExtent] = null;
    this[_hasVisualOverflow] = false;
    if (!(anchor !== null)) dart.assertFailed(null, I[3], 1290, 15, "anchor != null");
    if (!(anchor >= 0.0 && anchor <= 1.0)) dart.assertFailed(null, I[3], 1291, 15, "anchor >= 0.0 && anchor <= 1.0");
    if (!(cacheExtentStyle !== viewport.CacheExtentStyle.viewport || cacheExtent != null)) dart.assertFailed(null, I[3], 1292, 15, "cacheExtentStyle != CacheExtentStyle.viewport || cacheExtent != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[3], 1293, 15, "clipBehavior != null");
    this[_anchor] = anchor;
    this[_center] = center;
    viewport.RenderViewport.__proto__.new.call(this, {axisDirection: axisDirection, crossAxisDirection: crossAxisDirection, offset: offset, cacheExtent: cacheExtent, cacheExtentStyle: cacheExtentStyle, clipBehavior: clipBehavior});
    this.addAll(children);
    if (center == null && this.firstChild != null) {
      this[_center] = this.firstChild;
    }
  }).prototype = viewport.RenderViewport.prototype;
  dart.addTypeTests(viewport.RenderViewport);
  dart.addTypeCaches(viewport.RenderViewport);
  dart.setMethodSignature(viewport.RenderViewport, () => ({
    __proto__: dart.getMethods(viewport.RenderViewport.__proto__),
    [_attemptLayout]: dart.fnType(core.double, [core.double, core.double, core.double]),
    updateOutOfBandData: dart.fnType(dart.void, [sliver$.GrowthDirection, sliver$.SliverGeometry]),
    updateChildLayoutOffset: dart.fnType(dart.void, [sliver$.RenderSliver, core.double, sliver$.GrowthDirection]),
    paintOffsetOf: dart.fnType(ui.Offset, [sliver$.RenderSliver]),
    scrollOffsetOf: dart.fnType(core.double, [sliver$.RenderSliver, core.double]),
    maxScrollObstructionExtentBefore: dart.fnType(core.double, [sliver$.RenderSliver]),
    computeChildMainAxisPosition: dart.fnType(core.double, [sliver$.RenderSliver, core.double]),
    labelForChild: dart.fnType(core.String, [core.int])
  }));
  dart.setGetterSignature(viewport.RenderViewport, () => ({
    __proto__: dart.getGetters(viewport.RenderViewport.__proto__),
    anchor: core.double,
    center: dart.nullable(sliver$.RenderSliver),
    [_minScrollExtent]: core.double,
    [_maxScrollExtent]: core.double,
    hasVisualOverflow: core.bool,
    indexOfFirstChild: core.int,
    childrenInPaintOrder: core.Iterable$(sliver$.RenderSliver),
    childrenInHitTestOrder: core.Iterable$(sliver$.RenderSliver)
  }));
  dart.setSetterSignature(viewport.RenderViewport, () => ({
    __proto__: dart.getSetters(viewport.RenderViewport.__proto__),
    anchor: core.double,
    center: dart.nullable(sliver$.RenderSliver),
    [_minScrollExtent]: core.double,
    [_maxScrollExtent]: core.double
  }));
  dart.setLibraryUri(viewport.RenderViewport, I[2]);
  dart.setFieldSignature(viewport.RenderViewport, () => ({
    __proto__: dart.getFields(viewport.RenderViewport.__proto__),
    [_anchor]: dart.fieldType(core.double),
    [_center]: dart.fieldType(dart.nullable(sliver$.RenderSliver)),
    [__RenderViewport__minScrollExtent]: dart.fieldType(dart.nullable(core.double)),
    [__RenderViewport__maxScrollExtent]: dart.fieldType(dart.nullable(core.double)),
    [_hasVisualOverflow]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(viewport.RenderViewport, () => ['useTwoPaneSemantics', 'excludeFromScrolling', '_maxLayoutCycles']);
  dart.defineLazy(viewport.RenderViewport, {
    /*viewport.RenderViewport.useTwoPaneSemantics*/get useTwoPaneSemantics() {
      return C[21] || CT.C21;
    },
    /*viewport.RenderViewport.excludeFromScrolling*/get excludeFromScrolling() {
      return C[22] || CT.C22;
    },
    /*viewport.RenderViewport._maxLayoutCycles*/get _maxLayoutCycles() {
      return 10;
    }
  }, false);
  var __RenderShrinkWrappingViewport__maxScrollExtent = dart.privateName(viewport, "_#RenderShrinkWrappingViewport#_maxScrollExtent");
  var __RenderShrinkWrappingViewport__shrinkWrapExtent = dart.privateName(viewport, "_#RenderShrinkWrappingViewport#_shrinkWrapExtent");
  var _shrinkWrapExtent = dart.privateName(viewport, "_shrinkWrapExtent");
  viewport.RenderShrinkWrappingViewport = class RenderShrinkWrappingViewport extends viewport.RenderViewportBase$(sliver$.SliverLogicalContainerParentData) {
    static ['_#new#tearOff'](opts) {
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let children = opts && 'children' in opts ? opts.children : null;
      return new viewport.RenderShrinkWrappingViewport.new({axisDirection: axisDirection, crossAxisDirection: crossAxisDirection, offset: offset, clipBehavior: clipBehavior, children: children});
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!sliver$.SliverLogicalContainerParentData.is(child.parentData)) {
        child.parentData = new sliver$.SliverLogicalContainerParentData.new();
      }
    }
    debugThrowIfNotCheckingIntrinsics() {
      if (!dart.fn(() => {
        if (!object.RenderObject.debugCheckingIntrinsics) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not support returning intrinsic dimensions."), new assertions.ErrorDescription.new("Calculating the intrinsic dimensions would require instantiating every child of " + "the viewport, which defeats the point of viewports being lazy."), new assertions.ErrorHint.new("If you are merely trying to shrink-wrap the viewport in the main axis direction, " + "you should be able to achieve that effect by just giving the viewport loose " + "constraints, without needing to measure its intrinsic dimensions.")])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[3], 1839, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not support returning intrinsic dimensions.'),\n          ErrorDescription(\n           'Calculating the intrinsic dimensions would require instantiating every child of '\n           'the viewport, which defeats the point of viewports being lazy.',\n          ),\n          ErrorHint(\n            'If you are merely trying to shrink-wrap the viewport in the main axis direction, '\n            'you should be able to achieve that effect by just giving the viewport loose '\n            'constraints, without needing to measure its intrinsic dimensions.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return true;
    }
    get [_maxScrollExtent]() {
      let t11;
      t11 = this[__RenderShrinkWrappingViewport__maxScrollExtent];
      return t11 == null ? dart.throw(new _internal.LateError.fieldNI("_maxScrollExtent")) : t11;
    }
    set [_maxScrollExtent](library$32package$58flutter$47src$47rendering$47viewport$46dart$58$58_maxScrollExtent$35param) {
      this[__RenderShrinkWrappingViewport__maxScrollExtent] = library$32package$58flutter$47src$47rendering$47viewport$46dart$58$58_maxScrollExtent$35param;
    }
    get [_shrinkWrapExtent]() {
      let t11;
      t11 = this[__RenderShrinkWrappingViewport__shrinkWrapExtent];
      return t11 == null ? dart.throw(new _internal.LateError.fieldNI("_shrinkWrapExtent")) : t11;
    }
    set [_shrinkWrapExtent](library$32package$58flutter$47src$47rendering$47viewport$46dart$58$58_shrinkWrapExtent$35param) {
      this[__RenderShrinkWrappingViewport__shrinkWrapExtent] = library$32package$58flutter$47src$47rendering$47viewport$46dart$58$58_shrinkWrapExtent$35param;
    }
    performLayout() {
      let constraints = this.constraints;
      if (this.firstChild == null) {
        switch (this.axis) {
          case C[8] || CT.C8:
            {
              if (!constraints.hasBoundedWidth) dart.assertFailed(null, I[3], 1870, 18, "constraints.hasBoundedWidth");
              this.size = new ui.Size.new(constraints.maxWidth, constraints.minHeight);
              break;
            }
          case C[7] || CT.C7:
            {
              if (!constraints.hasBoundedHeight) dart.assertFailed(null, I[3], 1874, 18, "constraints.hasBoundedHeight");
              this.size = new ui.Size.new(constraints.minWidth, constraints.maxHeight);
              break;
            }
        }
        this.offset.applyViewportDimension(0.0);
        this[_maxScrollExtent] = 0.0;
        this[_shrinkWrapExtent] = 0.0;
        this[_hasVisualOverflow] = false;
        this.offset.applyContentDimensions(0.0, 0.0);
        return;
      }
      let mainAxisExtent = null;
      let crossAxisExtent = null;
      switch (this.axis) {
        case C[8] || CT.C8:
          {
            if (!constraints.hasBoundedWidth) dart.assertFailed(null, I[3], 1890, 16, "constraints.hasBoundedWidth");
            mainAxisExtent = constraints.maxHeight;
            crossAxisExtent = constraints.maxWidth;
            break;
          }
        case C[7] || CT.C7:
          {
            if (!constraints.hasBoundedHeight) dart.assertFailed(null, I[3], 1895, 16, "constraints.hasBoundedHeight");
            mainAxisExtent = constraints.maxWidth;
            crossAxisExtent = constraints.maxHeight;
            break;
          }
      }
      let correction = null;
      let effectiveExtent = null;
      do {
        if (!(this.offset.pixels !== null)) dart.assertFailed(null, I[3], 1904, 14, "offset.pixels != null");
        correction = this[_attemptLayout](mainAxisExtent, crossAxisExtent, this.offset.pixels);
        if (correction !== 0.0) {
          this.offset.correctBy(correction);
        } else {
          switch (this.axis) {
            case C[8] || CT.C8:
              {
                effectiveExtent = constraints.constrainHeight(this[_shrinkWrapExtent]);
                break;
              }
            case C[7] || CT.C7:
              {
                effectiveExtent = constraints.constrainWidth(this[_shrinkWrapExtent]);
                break;
              }
          }
          let didAcceptViewportDimension = this.offset.applyViewportDimension(effectiveExtent);
          let didAcceptContentDimension = this.offset.applyContentDimensions(0.0, math.max(core.double, 0.0, this[_maxScrollExtent] - effectiveExtent));
          if (didAcceptViewportDimension && didAcceptContentDimension) {
            break;
          }
        }
      } while (true);
      switch (this.axis) {
        case C[8] || CT.C8:
          {
            this.size = constraints.constrainDimensions(crossAxisExtent, effectiveExtent);
            break;
          }
        case C[7] || CT.C7:
          {
            this.size = constraints.constrainDimensions(effectiveExtent, crossAxisExtent);
            break;
          }
      }
    }
    [_attemptLayout](mainAxisExtent, crossAxisExtent, correctedOffset) {
      if (!!mainAxisExtent[$isNaN]) dart.assertFailed(null, I[3], 1940, 12, "!mainAxisExtent.isNaN");
      if (!(mainAxisExtent >= 0.0)) dart.assertFailed(null, I[3], 1941, 12, "mainAxisExtent >= 0.0");
      if (!crossAxisExtent[$isFinite]) dart.assertFailed(null, I[3], 1942, 12, "crossAxisExtent.isFinite");
      if (!(crossAxisExtent >= 0.0)) dart.assertFailed(null, I[3], 1943, 12, "crossAxisExtent >= 0.0");
      if (!correctedOffset[$isFinite]) dart.assertFailed(null, I[3], 1944, 12, "correctedOffset.isFinite");
      this[_maxScrollExtent] = 0.0;
      this[_shrinkWrapExtent] = 0.0;
      this[_hasVisualOverflow] = correctedOffset < 0.0;
      switch (this.cacheExtentStyle) {
        case C[12] || CT.C12:
          {
            this[_calculatedCacheExtent] = this.cacheExtent;
            break;
          }
        case C[13] || CT.C13:
          {
            this[_calculatedCacheExtent] = mainAxisExtent * this[_cacheExtent];
            break;
          }
      }
      return this.layoutChildSequence({child: this.firstChild, scrollOffset: math.max(core.double, 0.0, correctedOffset), overlap: math.min(core.double, 0.0, correctedOffset), layoutOffset: math.max(core.double, 0.0, -correctedOffset), remainingPaintExtent: mainAxisExtent + math.min(core.num, 0.0, correctedOffset), mainAxisExtent: mainAxisExtent, crossAxisExtent: crossAxisExtent, growthDirection: sliver$.GrowthDirection.forward, advance: dart.bind(this, 'childAfter'), remainingCacheExtent: mainAxisExtent + 2 * dart.nullCheck(this[_calculatedCacheExtent]), cacheOrigin: -dart.nullCheck(this[_calculatedCacheExtent])});
    }
    get hasVisualOverflow() {
      return this[_hasVisualOverflow];
    }
    updateOutOfBandData(growthDirection, childLayoutGeometry) {
      if (!(growthDirection === sliver$.GrowthDirection.forward)) dart.assertFailed(null, I[3], 1980, 12, "growthDirection == GrowthDirection.forward");
      this[_maxScrollExtent] = this[_maxScrollExtent] + childLayoutGeometry.scrollExtent;
      if (childLayoutGeometry.hasVisualOverflow) {
        this[_hasVisualOverflow] = true;
      }
      this[_shrinkWrapExtent] = this[_shrinkWrapExtent] + childLayoutGeometry.maxPaintExtent;
    }
    updateChildLayoutOffset(child, layoutOffset, growthDirection) {
      if (!(growthDirection === sliver$.GrowthDirection.forward)) dart.assertFailed(null, I[3], 1990, 12, "growthDirection == GrowthDirection.forward");
      let childParentData = sliver$.SliverLogicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.layoutOffset = layoutOffset;
    }
    paintOffsetOf(child) {
      let childParentData = sliver$.SliverLogicalParentData.as(dart.nullCheck(child.parentData));
      return this.computeAbsolutePaintOffset(child, dart.nullCheck(childParentData.layoutOffset), sliver$.GrowthDirection.forward);
    }
    scrollOffsetOf(child, scrollOffsetWithinChild) {
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 2003, 12, "child.parent == this");
      if (!(child.constraints.growthDirection === sliver$.GrowthDirection.forward)) dart.assertFailed(null, I[3], 2004, 12, "child.constraints.growthDirection == GrowthDirection.forward");
      let scrollOffsetToChild = 0.0;
      let current = this.firstChild;
      while (!dart.equals(current, child)) {
        scrollOffsetToChild = scrollOffsetToChild + dart.nullCheck(dart.nullCheck(current).geometry).scrollExtent;
        current = this.childAfter(current);
      }
      return scrollOffsetToChild + scrollOffsetWithinChild;
    }
    maxScrollObstructionExtentBefore(child) {
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[3], 2016, 12, "child.parent == this");
      if (!(child.constraints.growthDirection === sliver$.GrowthDirection.forward)) dart.assertFailed(null, I[3], 2017, 12, "child.constraints.growthDirection == GrowthDirection.forward");
      let pinnedExtent = 0.0;
      let current = this.firstChild;
      while (!dart.equals(current, child)) {
        pinnedExtent = pinnedExtent + dart.nullCheck(dart.nullCheck(current).geometry).maxScrollObstructionExtent;
        current = this.childAfter(current);
      }
      return pinnedExtent;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[3], 2030, 12, "child != null");
      let offset = this.paintOffsetOf(sliver$.RenderSliver.as(child));
      transform.translate(offset.dx, offset.dy);
    }
    computeChildMainAxisPosition(child, parentMainAxisPosition) {
      if (!(child !== null)) dart.assertFailed(null, I[3], 2037, 12, "child != null");
      if (!(child.constraints !== null)) dart.assertFailed(null, I[3], 2038, 12, "child.constraints != null");
      if (!this.hasSize) dart.assertFailed(null, I[3], 2039, 12, "hasSize");
      let childParentData = sliver$.SliverLogicalParentData.as(dart.nullCheck(child.parentData));
      switch (sliver$.applyGrowthDirectionToAxisDirection(child.constraints.axisDirection, child.constraints.growthDirection)) {
        case C[3] || CT.C3:
        case C[4] || CT.C4:
          {
            return parentMainAxisPosition - dart.nullCheck(childParentData.layoutOffset);
          }
        case C[5] || CT.C5:
          {
            return this.size.height - parentMainAxisPosition - dart.nullCheck(childParentData.layoutOffset);
          }
        case C[6] || CT.C6:
          {
            return this.size.width - parentMainAxisPosition - dart.nullCheck(childParentData.layoutOffset);
          }
      }
    }
    get indexOfFirstChild() {
      return 0;
    }
    labelForChild(index) {
      return "child " + dart.str(index);
    }
    get childrenInPaintOrder() {
      let children = T.JSArrayOfRenderSliver().of([]);
      let child = this.lastChild;
      while (child != null) {
        children[$add](child);
        child = this.childBefore(child);
      }
      return children;
    }
    get childrenInHitTestOrder() {
      let children = T.JSArrayOfRenderSliver().of([]);
      let child = this.firstChild;
      while (child != null) {
        children[$add](child);
        child = this.childAfter(child);
      }
      return children;
    }
  };
  (viewport.RenderShrinkWrappingViewport.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[3] || CT.C3;
    let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[14] || CT.C14;
    let children = opts && 'children' in opts ? opts.children : null;
    this[__RenderShrinkWrappingViewport__maxScrollExtent] = null;
    this[__RenderShrinkWrappingViewport__shrinkWrapExtent] = null;
    this[_hasVisualOverflow] = false;
    viewport.RenderShrinkWrappingViewport.__proto__.new.call(this, {axisDirection: axisDirection, crossAxisDirection: crossAxisDirection, offset: offset, clipBehavior: clipBehavior});
    this.addAll(children);
  }).prototype = viewport.RenderShrinkWrappingViewport.prototype;
  dart.addTypeTests(viewport.RenderShrinkWrappingViewport);
  dart.addTypeCaches(viewport.RenderShrinkWrappingViewport);
  dart.setMethodSignature(viewport.RenderShrinkWrappingViewport, () => ({
    __proto__: dart.getMethods(viewport.RenderShrinkWrappingViewport.__proto__),
    [_attemptLayout]: dart.fnType(core.double, [core.double, core.double, core.double]),
    updateOutOfBandData: dart.fnType(dart.void, [sliver$.GrowthDirection, sliver$.SliverGeometry]),
    updateChildLayoutOffset: dart.fnType(dart.void, [sliver$.RenderSliver, core.double, sliver$.GrowthDirection]),
    paintOffsetOf: dart.fnType(ui.Offset, [sliver$.RenderSliver]),
    scrollOffsetOf: dart.fnType(core.double, [sliver$.RenderSliver, core.double]),
    maxScrollObstructionExtentBefore: dart.fnType(core.double, [sliver$.RenderSliver]),
    computeChildMainAxisPosition: dart.fnType(core.double, [sliver$.RenderSliver, core.double]),
    labelForChild: dart.fnType(core.String, [core.int])
  }));
  dart.setGetterSignature(viewport.RenderShrinkWrappingViewport, () => ({
    __proto__: dart.getGetters(viewport.RenderShrinkWrappingViewport.__proto__),
    [_maxScrollExtent]: core.double,
    [_shrinkWrapExtent]: core.double,
    hasVisualOverflow: core.bool,
    indexOfFirstChild: core.int,
    childrenInPaintOrder: core.Iterable$(sliver$.RenderSliver),
    childrenInHitTestOrder: core.Iterable$(sliver$.RenderSliver)
  }));
  dart.setSetterSignature(viewport.RenderShrinkWrappingViewport, () => ({
    __proto__: dart.getSetters(viewport.RenderShrinkWrappingViewport.__proto__),
    [_maxScrollExtent]: core.double,
    [_shrinkWrapExtent]: core.double
  }));
  dart.setLibraryUri(viewport.RenderShrinkWrappingViewport, I[2]);
  dart.setFieldSignature(viewport.RenderShrinkWrappingViewport, () => ({
    __proto__: dart.getFields(viewport.RenderShrinkWrappingViewport.__proto__),
    [__RenderShrinkWrappingViewport__maxScrollExtent]: dart.fieldType(dart.nullable(core.double)),
    [__RenderShrinkWrappingViewport__shrinkWrapExtent]: dart.fieldType(dart.nullable(core.double)),
    [_hasVisualOverflow]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver.dart", {
    "package:flutter/src/rendering/sliver.dart": sliver$,
    "package:flutter/src/rendering/viewport.dart": viewport
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver.dart","viewport.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver: sliver$,
    src__rendering__viewport: viewport
  };
}));

//# sourceMappingURL=sliver.dart.lib.js.map