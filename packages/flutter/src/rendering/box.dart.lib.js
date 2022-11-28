define(['dart_sdk', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__rendering__box_dart(dart_sdk, packages__flutter__src__foundation__math$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const math$ = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var box = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $toDouble = dartx.toDouble;
  var $modulo = dartx['%'];
  var $isFinite = dartx.isFinite;
  var $addAll = dartx.addAll;
  var $isNaN = dartx.isNaN;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $removeLast = dartx.removeLast;
  var $add = dartx.add;
  var $join = dartx.join;
  var $single = dartx.single;
  var $isInfinite = dartx.isInfinite;
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $_set = dartx._set;
  var $putIfAbsent = dartx.putIfAbsent;
  var $_equals = dartx._equals;
  var $_get = dartx._get;
  var $clear = dartx.clear;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    DiagnosticsPropertyOfBoxConstraints: () => (T.DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))(),
    DiagnosticsNodeTovoid: () => (T.DiagnosticsNodeTovoid = dart.constFn(dart.fnType(dart.void, [diagnostics.DiagnosticsNode])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    doubleAnddoubleAndStringToString: () => (T.doubleAnddoubleAndStringToString = dart.constFn(dart.fnType(core.String, [core.double, core.double, core.String])))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    LinkedMapOf_IntrinsicDimensionsCacheEntry$double: () => (T.LinkedMapOf_IntrinsicDimensionsCacheEntry$double = dart.constFn(_js_helper.LinkedMap$(box._IntrinsicDimensionsCacheEntry, core.double)))(),
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    LinkedMapOfBoxConstraints$Size: () => (T.LinkedMapOfBoxConstraints$Size = dart.constFn(_js_helper.LinkedMap$(box.BoxConstraints, ui.Size)))(),
    VoidToSize: () => (T.VoidToSize = dart.constFn(dart.fnType(ui.Size, [])))(),
    RenderObjectN: () => (T.RenderObjectN = dart.constFn(dart.nullable(object.RenderObject)))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    LinkedMapOfTextBaseline$doubleN: () => (T.LinkedMapOfTextBaseline$doubleN = dart.constFn(_js_helper.LinkedMap$(ui.TextBaseline, T.doubleN())))(),
    VoidTodoubleN: () => (T.VoidTodoubleN = dart.constFn(dart.fnType(T.doubleN(), [])))(),
    DiagnosticsPropertyOfRenderBox: () => (T.DiagnosticsPropertyOfRenderBox = dart.constFn(diagnostics.DiagnosticsProperty$(box.RenderBox)))(),
    ListOfDiagnosticsNode: () => (T.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    DiagnosticsPropertyOfSize: () => (T.DiagnosticsPropertyOfSize = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Size)))(),
    doubleTodouble: () => (T.doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))(),
    FnAndStringAnddoubleTodouble: () => (T.FnAndStringAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [T.doubleTodouble(), core.String, core.double])))(),
    FnAndFnAndString__Tovoid: () => (T.FnAndFnAndString__Tovoid = dart.constFn(dart.fnType(dart.void, [T.doubleTodouble(), T.doubleTodouble(), core.String, core.double])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255615.0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294955008.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255360.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_Enum__name]: "minWidth",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_Enum__name]: "maxWidth",
        [_Enum_index]: 1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_Enum__name]: "minHeight",
        [_Enum_index]: 2
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_Enum__name]: "maxHeight",
        [_Enum_index]: 3
      });
    },
    get C3() {
      return C[3] = dart.constList([C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7], box._IntrinsicDimension);
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = [
    "package:flutter/src/rendering/box.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/box.dart"
  ];
  var _owner$ = dart.privateName(box, "_owner");
  var _canBeUsedByParent$ = dart.privateName(box, "_canBeUsedByParent");
  box._DebugSize = class _DebugSize extends ui.Size {
    static ['_#new#tearOff'](source, _owner, _canBeUsedByParent) {
      return new box._DebugSize.new(source, _owner, _canBeUsedByParent);
    }
  };
  (box._DebugSize.new = function(source, _owner, _canBeUsedByParent) {
    this[_owner$] = _owner;
    this[_canBeUsedByParent$] = _canBeUsedByParent;
    box._DebugSize.__proto__.copy.call(this, source);
    ;
  }).prototype = box._DebugSize.prototype;
  dart.addTypeTests(box._DebugSize);
  dart.addTypeCaches(box._DebugSize);
  dart.setLibraryUri(box._DebugSize, I[0]);
  dart.setFieldSignature(box._DebugSize, () => ({
    __proto__: dart.getFields(box._DebugSize.__proto__),
    [_owner$]: dart.finalFieldType(box.RenderBox),
    [_canBeUsedByParent$]: dart.finalFieldType(core.bool)
  }));
  var minWidth$ = dart.privateName(box, "BoxConstraints.minWidth");
  var maxWidth$ = dart.privateName(box, "BoxConstraints.maxWidth");
  var minHeight$ = dart.privateName(box, "BoxConstraints.minHeight");
  var maxHeight$ = dart.privateName(box, "BoxConstraints.maxHeight");
  var _debugPropagateDebugSize = dart.privateName(box, "_debugPropagateDebugSize");
  box.BoxConstraints = class BoxConstraints extends object.Constraints {
    get minWidth() {
      return this[minWidth$];
    }
    set minWidth(value) {
      super.minWidth = value;
    }
    get maxWidth() {
      return this[maxWidth$];
    }
    set maxWidth(value) {
      super.maxWidth = value;
    }
    get minHeight() {
      return this[minHeight$];
    }
    set minHeight(value) {
      super.minHeight = value;
    }
    get maxHeight() {
      return this[maxHeight$];
    }
    set maxHeight(value) {
      super.maxHeight = value;
    }
    static ['_#new#tearOff'](opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      let minHeight = opts && 'minHeight' in opts ? opts.minHeight : 0;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : 1 / 0;
      return new box.BoxConstraints.new({minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight});
    }
    static ['_#tight#tearOff'](size) {
      return new box.BoxConstraints.tight(size);
    }
    static ['_#tightFor#tearOff'](opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return new box.BoxConstraints.tightFor({width: width, height: height});
    }
    static ['_#tightForFinite#tearOff'](opts) {
      let width = opts && 'width' in opts ? opts.width : 1 / 0;
      let height = opts && 'height' in opts ? opts.height : 1 / 0;
      return new box.BoxConstraints.tightForFinite({width: width, height: height});
    }
    static ['_#loose#tearOff'](size) {
      return new box.BoxConstraints.loose(size);
    }
    static ['_#expand#tearOff'](opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return new box.BoxConstraints.expand({width: width, height: height});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
      let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
      return new box.BoxConstraints.new({minWidth: (t0 = minWidth, t0 == null ? this.minWidth : t0), maxWidth: (t0$ = maxWidth, t0$ == null ? this.maxWidth : t0$), minHeight: (t0$0 = minHeight, t0$0 == null ? this.minHeight : t0$0), maxHeight: (t0$1 = maxHeight, t0$1 == null ? this.maxHeight : t0$1)});
    }
    deflate(edges) {
      if (!(edges !== null)) dart.assertFailed(null, I[1], 188, 12, "edges != null");
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[1], 189, 12, "debugAssertIsValid()");
      let horizontal = edges.horizontal;
      let vertical = edges.vertical;
      let deflatedMinWidth = math.max(core.double, 0.0, this.minWidth - horizontal);
      let deflatedMinHeight = math.max(core.double, 0.0, this.minHeight - vertical);
      return new box.BoxConstraints.new({minWidth: deflatedMinWidth, maxWidth: math.max(core.double, deflatedMinWidth, this.maxWidth - horizontal), minHeight: deflatedMinHeight, maxHeight: math.max(core.double, deflatedMinHeight, this.maxHeight - vertical)});
    }
    loosen() {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[1], 204, 12, "debugAssertIsValid()");
      return new box.BoxConstraints.new({maxWidth: this.maxWidth, maxHeight: this.maxHeight});
    }
    enforce(constraints) {
      return new box.BoxConstraints.new({minWidth: math$.clampDouble(this.minWidth, constraints.minWidth, constraints.maxWidth), maxWidth: math$.clampDouble(this.maxWidth, constraints.minWidth, constraints.maxWidth), minHeight: math$.clampDouble(this.minHeight, constraints.minHeight, constraints.maxHeight), maxHeight: math$.clampDouble(this.maxHeight, constraints.minHeight, constraints.maxHeight)});
    }
    tighten(opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return new box.BoxConstraints.new({minWidth: width == null ? this.minWidth : math$.clampDouble(width, this.minWidth, this.maxWidth), maxWidth: width == null ? this.maxWidth : math$.clampDouble(width, this.minWidth, this.maxWidth), minHeight: height == null ? this.minHeight : math$.clampDouble(height, this.minHeight, this.maxHeight), maxHeight: height == null ? this.maxHeight : math$.clampDouble(height, this.minHeight, this.maxHeight)});
    }
    get flipped() {
      return new box.BoxConstraints.new({minWidth: this.minHeight, maxWidth: this.maxHeight, minHeight: this.minWidth, maxHeight: this.maxWidth});
    }
    widthConstraints() {
      return new box.BoxConstraints.new({minWidth: this.minWidth, maxWidth: this.maxWidth});
    }
    heightConstraints() {
      return new box.BoxConstraints.new({minHeight: this.minHeight, maxHeight: this.maxHeight});
    }
    constrainWidth(width = 1 / 0) {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[1], 255, 12, "debugAssertIsValid()");
      return math$.clampDouble(width, this.minWidth, this.maxWidth);
    }
    constrainHeight(height = 1 / 0) {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[1], 262, 12, "debugAssertIsValid()");
      return math$.clampDouble(height, this.minHeight, this.maxHeight);
    }
    [_debugPropagateDebugSize](size, result) {
      if (!dart.fn(() => {
        if (box._DebugSize.is(size)) {
          result = new box._DebugSize.new(result, size[_owner$], size[_canBeUsedByParent$]);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 267, 12, "() {\n      if (size is _DebugSize) {\n        result = _DebugSize(result, size._owner, size._canBeUsedByParent);\n      }\n      return true;\n    }()");
      return result;
    }
    constrain(size) {
      let result = new ui.Size.new(this.constrainWidth(size.width), this.constrainHeight(size.height));
      if (!dart.fn(() => {
        result = this[_debugPropagateDebugSize](size, result);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 285, 12, "() {\n      result = _debugPropagateDebugSize(size, result);\n      return true;\n    }()");
      return result;
    }
    constrainDimensions(width, height) {
      return new ui.Size.new(this.constrainWidth(width), this.constrainHeight(height));
    }
    constrainSizeAndAttemptToPreserveAspectRatio(size) {
      if (this.isTight) {
        let result = this.smallest;
        if (!dart.fn(() => {
          result = this[_debugPropagateDebugSize](size, result);
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 311, 14, "() {\n        result = _debugPropagateDebugSize(size, result);\n        return true;\n      }()");
        return result;
      }
      let width = size.width;
      let height = size.height;
      if (!(width > 0.0)) dart.assertFailed(null, I[1], 320, 12, "width > 0.0");
      if (!(height > 0.0)) dart.assertFailed(null, I[1], 321, 12, "height > 0.0");
      let aspectRatio = width / height;
      if (width > this.maxWidth) {
        width = this.maxWidth;
        height = width / aspectRatio;
      }
      if (height > this.maxHeight) {
        height = this.maxHeight;
        width = height * aspectRatio;
      }
      if (width < this.minWidth) {
        width = this.minWidth;
        height = width / aspectRatio;
      }
      if (height < this.minHeight) {
        height = this.minHeight;
        width = height * aspectRatio;
      }
      let result = new ui.Size.new(this.constrainWidth(width), this.constrainHeight(height));
      if (!dart.fn(() => {
        result = this[_debugPropagateDebugSize](size, result);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 345, 12, "() {\n      result = _debugPropagateDebugSize(size, result);\n      return true;\n    }()");
      return result;
    }
    get biggest() {
      return new ui.Size.new(this.constrainWidth(), this.constrainHeight());
    }
    get smallest() {
      return new ui.Size.new(this.constrainWidth(0.0), this.constrainHeight(0.0));
    }
    get hasTightWidth() {
      return this.minWidth >= this.maxWidth;
    }
    get hasTightHeight() {
      return this.minHeight >= this.maxHeight;
    }
    get isTight() {
      return this.hasTightWidth && this.hasTightHeight;
    }
    get hasBoundedWidth() {
      return this.maxWidth < 1 / 0;
    }
    get hasBoundedHeight() {
      return this.maxHeight < 1 / 0;
    }
    get hasInfiniteWidth() {
      return this.minWidth >= 1 / 0;
    }
    get hasInfiniteHeight() {
      return this.minHeight >= 1 / 0;
    }
    isSatisfiedBy(size) {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[1], 418, 12, "debugAssertIsValid()");
      return this.minWidth <= size.width && size.width <= this.maxWidth && this.minHeight <= size.height && size.height <= this.maxHeight;
    }
    ['*'](factor) {
      return new box.BoxConstraints.new({minWidth: this.minWidth * factor, maxWidth: this.maxWidth * factor, minHeight: this.minHeight * factor, maxHeight: this.maxHeight * factor});
    }
    ['/'](factor) {
      return new box.BoxConstraints.new({minWidth: this.minWidth / factor, maxWidth: this.maxWidth / factor, minHeight: this.minHeight / factor, maxHeight: this.maxHeight / factor});
    }
    ['~/'](factor) {
      return new box.BoxConstraints.new({minWidth: (this.minWidth / factor)[$truncate]()[$toDouble](), maxWidth: (this.maxWidth / factor)[$truncate]()[$toDouble](), minHeight: (this.minHeight / factor)[$truncate]()[$toDouble](), maxHeight: (this.maxHeight / factor)[$truncate]()[$toDouble]()});
    }
    ['%'](value) {
      return new box.BoxConstraints.new({minWidth: this.minWidth[$modulo](value), maxWidth: this.maxWidth[$modulo](value), minHeight: this.minHeight[$modulo](value), maxHeight: this.maxHeight[$modulo](value)});
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[1], 470, 12, "t != null");
      if (a == null && b == null) {
        return null;
      }
      if (a == null) {
        return dart.nullCheck(b)['*'](t);
      }
      if (b == null) {
        return a['*'](1.0 - t);
      }
      if (!a.debugAssertIsValid()) dart.assertFailed(null, I[1], 480, 12, "a.debugAssertIsValid()");
      if (!b.debugAssertIsValid()) dart.assertFailed(null, I[1], 481, 12, "b.debugAssertIsValid()");
      if (!(a.minWidth[$isFinite] && b.minWidth[$isFinite] || a.minWidth === 1 / 0 && b.minWidth === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", I[1], 482, 12, "(a.minWidth.isFinite && b.minWidth.isFinite) || (a.minWidth == double.infinity && b.minWidth == double.infinity)");
      if (!(a.maxWidth[$isFinite] && b.maxWidth[$isFinite] || a.maxWidth === 1 / 0 && b.maxWidth === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", I[1], 483, 12, "(a.maxWidth.isFinite && b.maxWidth.isFinite) || (a.maxWidth == double.infinity && b.maxWidth == double.infinity)");
      if (!(a.minHeight[$isFinite] && b.minHeight[$isFinite] || a.minHeight === 1 / 0 && b.minHeight === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", I[1], 484, 12, "(a.minHeight.isFinite && b.minHeight.isFinite) || (a.minHeight == double.infinity && b.minHeight == double.infinity)");
      if (!(a.maxHeight[$isFinite] && b.maxHeight[$isFinite] || a.maxHeight === 1 / 0 && b.maxHeight === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", I[1], 485, 12, "(a.maxHeight.isFinite && b.maxHeight.isFinite) || (a.maxHeight == double.infinity && b.maxHeight == double.infinity)");
      return new box.BoxConstraints.new({minWidth: a.minWidth[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.minWidth, b.minWidth, t)) : 1 / 0, maxWidth: a.maxWidth[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.maxWidth, b.maxWidth, t)) : 1 / 0, minHeight: a.minHeight[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.minHeight, b.minHeight, t)) : 1 / 0, maxHeight: a.maxHeight[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.maxHeight, b.maxHeight, t)) : 1 / 0});
    }
    get isNormalized() {
      return this.minWidth >= 0.0 && this.minWidth <= this.maxWidth && this.minHeight >= 0.0 && this.minHeight <= this.maxHeight;
    }
    debugAssertIsValid(opts) {
      let isAppliedConstraint = opts && 'isAppliedConstraint' in opts ? opts.isAppliedConstraint : false;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!dart.fn(() => {
        const throwError = message => {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t0 = T.JSArrayOfDiagnosticsNode().of([message]);
            if (informationCollector != null) t0[$addAll](informationCollector());
            t0.push(new (T.DiagnosticsPropertyOfBoxConstraints()).new("The offending constraints were", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            return t0;
          })()));
        };
        dart.fn(throwError, T.DiagnosticsNodeTovoid());
        if (this.minWidth[$isNaN] || this.maxWidth[$isNaN] || this.minHeight[$isNaN] || this.maxHeight[$isNaN]) {
          let affectedFieldsList = (() => {
            let t1 = T.JSArrayOfString().of([]);
            if (this.minWidth[$isNaN]) t1.push("minWidth");
            if (this.maxWidth[$isNaN]) t1.push("maxWidth");
            if (this.minHeight[$isNaN]) t1.push("minHeight");
            if (this.maxHeight[$isNaN]) t1.push("maxHeight");
            return t1;
          })();
          if (!affectedFieldsList[$isNotEmpty]) dart.assertFailed(null, I[1], 533, 16, "affectedFieldsList.isNotEmpty");
          if (affectedFieldsList[$length] > 1) {
            affectedFieldsList[$add]("and " + affectedFieldsList[$removeLast]());
          }
          let whichFields = "";
          if (affectedFieldsList[$length] > 2) {
            whichFields = affectedFieldsList[$join](", ");
          } else if (affectedFieldsList[$length] === 2) {
            whichFields = affectedFieldsList[$join](" ");
          } else {
            whichFields = affectedFieldsList[$single];
          }
          throwError(new assertions.ErrorSummary.new("BoxConstraints has " + (affectedFieldsList[$length] === 1 ? "a NaN value" : "NaN values") + " in " + whichFields + "."));
        }
        if (this.minWidth < 0.0 && this.minHeight < 0.0) {
          throwError(new assertions.ErrorSummary.new("BoxConstraints has both a negative minimum width and a negative minimum height."));
        }
        if (this.minWidth < 0.0) {
          throwError(new assertions.ErrorSummary.new("BoxConstraints has a negative minimum width."));
        }
        if (this.minHeight < 0.0) {
          throwError(new assertions.ErrorSummary.new("BoxConstraints has a negative minimum height."));
        }
        if (this.maxWidth < this.minWidth && this.maxHeight < this.minHeight) {
          throwError(new assertions.ErrorSummary.new("BoxConstraints has both width and height constraints non-normalized."));
        }
        if (this.maxWidth < this.minWidth) {
          throwError(new assertions.ErrorSummary.new("BoxConstraints has non-normalized width constraints."));
        }
        if (this.maxHeight < this.minHeight) {
          throwError(new assertions.ErrorSummary.new("BoxConstraints has non-normalized height constraints."));
        }
        if (isAppliedConstraint) {
          if (this.minWidth[$isInfinite] && this.minHeight[$isInfinite]) {
            throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite width and infinite height."));
          }
          if (this.minWidth[$isInfinite]) {
            throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite width."));
          }
          if (this.minHeight[$isInfinite]) {
            throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite height."));
          }
        }
        if (!this.isNormalized) dart.assertFailed(null, I[1], 576, 14, "isNormalized");
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 518, 12, "() {\n      void throwError(DiagnosticsNode message) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          message,\n          if (informationCollector != null) ...informationCollector(),\n          DiagnosticsProperty<BoxConstraints>('The offending constraints were', this, style: DiagnosticsTreeStyle.errorProperty),\n        ]);\n      }\n      if (minWidth.isNaN || maxWidth.isNaN || minHeight.isNaN || maxHeight.isNaN) {\n        final List<String> affectedFieldsList = <String>[\n          if (minWidth.isNaN) 'minWidth',\n          if (maxWidth.isNaN) 'maxWidth',\n          if (minHeight.isNaN) 'minHeight',\n          if (maxHeight.isNaN) 'maxHeight',\n        ];\n        assert(affectedFieldsList.isNotEmpty);\n        if (affectedFieldsList.length > 1) {\n          affectedFieldsList.add('and ${affectedFieldsList.removeLast()}');\n        }\n        String whichFields = '';\n        if (affectedFieldsList.length > 2) {\n          whichFields = affectedFieldsList.join(', ');\n        } else if (affectedFieldsList.length == 2) {\n          whichFields = affectedFieldsList.join(' ');\n        } else {\n          whichFields = affectedFieldsList.single;\n        }\n        throwError(ErrorSummary('BoxConstraints has ${affectedFieldsList.length == 1 ? 'a NaN value' : 'NaN values' } in $whichFields.'));\n      }\n      if (minWidth < 0.0 && minHeight < 0.0) {\n        throwError(ErrorSummary('BoxConstraints has both a negative minimum width and a negative minimum height.'));\n      }\n      if (minWidth < 0.0) {\n        throwError(ErrorSummary('BoxConstraints has a negative minimum width.'));\n      }\n      if (minHeight < 0.0) {\n        throwError(ErrorSummary('BoxConstraints has a negative minimum height.'));\n      }\n      if (maxWidth < minWidth && maxHeight < minHeight) {\n        throwError(ErrorSummary('BoxConstraints has both width and height constraints non-normalized.'));\n      }\n      if (maxWidth < minWidth) {\n        throwError(ErrorSummary('BoxConstraints has non-normalized width constraints.'));\n      }\n      if (maxHeight < minHeight) {\n        throwError(ErrorSummary('BoxConstraints has non-normalized height constraints.'));\n      }\n      if (isAppliedConstraint) {\n        if (minWidth.isInfinite && minHeight.isInfinite) {\n          throwError(ErrorSummary('BoxConstraints forces an infinite width and infinite height.'));\n        }\n        if (minWidth.isInfinite) {\n          throwError(ErrorSummary('BoxConstraints forces an infinite width.'));\n        }\n        if (minHeight.isInfinite) {\n          throwError(ErrorSummary('BoxConstraints forces an infinite height.'));\n        }\n      }\n      assert(isNormalized);\n      return true;\n    }()");
      return this.isNormalized;
    }
    normalize() {
      if (this.isNormalized) {
        return this;
      }
      let minWidth = this.minWidth >= 0.0 ? this.minWidth : 0.0;
      let minHeight = this.minHeight >= 0.0 ? this.minHeight : 0.0;
      return new box.BoxConstraints.new({minWidth: minWidth, maxWidth: minWidth > this.maxWidth ? minWidth : this.maxWidth, minHeight: minHeight, maxHeight: minHeight > this.maxHeight ? minHeight : this.maxHeight});
    }
    _equals(other) {
      if (other == null) return false;
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[1], 602, 12, "debugAssertIsValid()");
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      if (!(box.BoxConstraints.is(other) && other.debugAssertIsValid())) dart.assertFailed(null, I[1], 609, 12, "other is BoxConstraints && other.debugAssertIsValid()");
      return box.BoxConstraints.is(other) && other.minWidth === this.minWidth && other.maxWidth === this.maxWidth && other.minHeight === this.minHeight && other.maxHeight === this.maxHeight;
    }
    get hashCode() {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[1], 619, 12, "debugAssertIsValid()");
      return core.Object.hash(this.minWidth, this.maxWidth, this.minHeight, this.maxHeight);
    }
    toString() {
      let annotation = this.isNormalized ? "" : "; NOT NORMALIZED";
      if (this.minWidth === 1 / 0 && this.minHeight === 1 / 0) {
        return "BoxConstraints(biggest" + annotation + ")";
      }
      if (this.minWidth === 0 && this.maxWidth === 1 / 0 && this.minHeight === 0 && this.maxHeight === 1 / 0) {
        return "BoxConstraints(unconstrained" + annotation + ")";
      }
      function describe(min, max, dim) {
        if (min === max) {
          return dim + "=" + min[$toStringAsFixed](1);
        }
        return min[$toStringAsFixed](1) + "<=" + dim + "<=" + max[$toStringAsFixed](1);
      }
      dart.fn(describe, T.doubleAnddoubleAndStringToString());
      let width = describe(this.minWidth, this.maxWidth, "w");
      let height = describe(this.minHeight, this.maxHeight, "h");
      return "BoxConstraints(" + width + ", " + height + annotation + ")";
    }
  };
  (box.BoxConstraints.new = function(opts) {
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : 0;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : 1 / 0;
    this[minWidth$] = minWidth;
    this[maxWidth$] = maxWidth;
    this[minHeight$] = minHeight;
    this[maxHeight$] = maxHeight;
    if (!(minWidth !== null)) dart.assertFailed(null, I[1], 94, 15, "minWidth != null");
    if (!(maxWidth !== null)) dart.assertFailed(null, I[1], 95, 15, "maxWidth != null");
    if (!(minHeight !== null)) dart.assertFailed(null, I[1], 96, 15, "minHeight != null");
    if (!(maxHeight !== null)) dart.assertFailed(null, I[1], 97, 15, "maxHeight != null");
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tight = function(size) {
    this[minWidth$] = size.width;
    this[maxWidth$] = size.width;
    this[minHeight$] = size.height;
    this[maxHeight$] = size.height;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tightFor = function(opts) {
    let t0, t0$, t0$0, t0$1;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    this[minWidth$] = (t0 = width, t0 == null ? 0.0 : t0);
    this[maxWidth$] = (t0$ = width, t0$ == null ? 1 / 0 : t0$);
    this[minHeight$] = (t0$0 = height, t0$0 == null ? 0.0 : t0$0);
    this[maxHeight$] = (t0$1 = height, t0$1 == null ? 1 / 0 : t0$1);
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tightForFinite = function(opts) {
    let width = opts && 'width' in opts ? opts.width : 1 / 0;
    let height = opts && 'height' in opts ? opts.height : 1 / 0;
    this[minWidth$] = width !== 1 / 0 ? width : 0.0;
    this[maxWidth$] = width !== 1 / 0 ? width : 1 / 0;
    this[minHeight$] = height !== 1 / 0 ? height : 0.0;
    this[maxHeight$] = height !== 1 / 0 ? height : 1 / 0;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.loose = function(size) {
    this[minWidth$] = 0.0;
    this[maxWidth$] = size.width;
    this[minHeight$] = 0.0;
    this[maxHeight$] = size.height;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.expand = function(opts) {
    let t0, t0$, t0$0, t0$1;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    this[minWidth$] = (t0 = width, t0 == null ? 1 / 0 : t0);
    this[maxWidth$] = (t0$ = width, t0$ == null ? 1 / 0 : t0$);
    this[minHeight$] = (t0$0 = height, t0$0 == null ? 1 / 0 : t0$0);
    this[maxHeight$] = (t0$1 = height, t0$1 == null ? 1 / 0 : t0$1);
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  dart.addTypeTests(box.BoxConstraints);
  dart.addTypeCaches(box.BoxConstraints);
  dart.setMethodSignature(box.BoxConstraints, () => ({
    __proto__: dart.getMethods(box.BoxConstraints.__proto__),
    copyWith: dart.fnType(box.BoxConstraints, [], {maxHeight: dart.nullable(core.double), maxWidth: dart.nullable(core.double), minHeight: dart.nullable(core.double), minWidth: dart.nullable(core.double)}, {}),
    deflate: dart.fnType(box.BoxConstraints, [edge_insets.EdgeInsets]),
    loosen: dart.fnType(box.BoxConstraints, []),
    enforce: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    tighten: dart.fnType(box.BoxConstraints, [], {height: dart.nullable(core.double), width: dart.nullable(core.double)}, {}),
    widthConstraints: dart.fnType(box.BoxConstraints, []),
    heightConstraints: dart.fnType(box.BoxConstraints, []),
    constrainWidth: dart.fnType(core.double, [], [core.double]),
    constrainHeight: dart.fnType(core.double, [], [core.double]),
    [_debugPropagateDebugSize]: dart.fnType(ui.Size, [ui.Size, ui.Size]),
    constrain: dart.fnType(ui.Size, [ui.Size]),
    constrainDimensions: dart.fnType(ui.Size, [core.double, core.double]),
    constrainSizeAndAttemptToPreserveAspectRatio: dart.fnType(ui.Size, [ui.Size]),
    isSatisfiedBy: dart.fnType(core.bool, [ui.Size]),
    '*': dart.fnType(box.BoxConstraints, [core.double]),
    '/': dart.fnType(box.BoxConstraints, [core.double]),
    '~/': dart.fnType(box.BoxConstraints, [core.double]),
    '%': dart.fnType(box.BoxConstraints, [core.double]),
    normalize: dart.fnType(box.BoxConstraints, [])
  }));
  dart.setStaticMethodSignature(box.BoxConstraints, () => ['lerp']);
  dart.setGetterSignature(box.BoxConstraints, () => ({
    __proto__: dart.getGetters(box.BoxConstraints.__proto__),
    flipped: box.BoxConstraints,
    biggest: ui.Size,
    smallest: ui.Size,
    hasTightWidth: core.bool,
    hasTightHeight: core.bool,
    isTight: core.bool,
    hasBoundedWidth: core.bool,
    hasBoundedHeight: core.bool,
    hasInfiniteWidth: core.bool,
    hasInfiniteHeight: core.bool,
    isNormalized: core.bool
  }));
  dart.setLibraryUri(box.BoxConstraints, I[0]);
  dart.setFieldSignature(box.BoxConstraints, () => ({
    __proto__: dart.getFields(box.BoxConstraints.__proto__),
    minWidth: dart.finalFieldType(core.double),
    maxWidth: dart.finalFieldType(core.double),
    minHeight: dart.finalFieldType(core.double),
    maxHeight: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(box.BoxConstraints, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box.BoxConstraints, ['hashCode']);
  box.BoxHitTestResult = class BoxHitTestResult extends hit_test.HitTestResult {
    static ['_#new#tearOff']() {
      return new box.BoxHitTestResult.new();
    }
    static ['_#wrap#tearOff'](result) {
      return new box.BoxHitTestResult.wrap(result);
    }
    addWithPaintTransform(opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(position !== null)) dart.assertFailed(null, I[1], 760, 12, "position != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[1], 761, 12, "hitTest != null");
      if (transform != null) {
        transform = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(transform));
        if (transform == null) {
          return false;
        }
      }
      return this.addWithRawTransform({transform: transform, position: position, hitTest: hitTest});
    }
    addWithPaintOffset(opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(position !== null)) dart.assertFailed(null, I[1], 799, 12, "position != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[1], 800, 12, "hitTest != null");
      let transformedPosition = offset == null ? position : position['-'](offset);
      if (offset != null) {
        this.pushOffset(offset._negate());
      }
      let isHit = hitTest(this, transformedPosition);
      if (offset != null) {
        this.popTransform();
      }
      return isHit;
    }
    addWithRawTransform(opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(position !== null)) dart.assertFailed(null, I[1], 836, 12, "position != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[1], 837, 12, "hitTest != null");
      if (!(position !== null)) dart.assertFailed(null, I[1], 838, 12, "position != null");
      let transformedPosition = transform == null ? position : matrix_utils.MatrixUtils.transformPoint(transform, position);
      if (transform != null) {
        this.pushTransform(transform);
      }
      let isHit = hitTest(this, transformedPosition);
      if (transform != null) {
        this.popTransform();
      }
      return isHit;
    }
    addWithOutOfBandPosition(opts) {
      let paintOffset = opts && 'paintOffset' in opts ? opts.paintOffset : null;
      let paintTransform = opts && 'paintTransform' in opts ? opts.paintTransform : null;
      let rawTransform = opts && 'rawTransform' in opts ? opts.rawTransform : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(hitTest !== null)) dart.assertFailed(null, I[1], 885, 12, "hitTest != null");
      if (!(paintOffset == null && paintTransform == null && rawTransform != null || paintOffset == null && paintTransform != null && rawTransform == null || paintOffset != null && paintTransform == null && rawTransform == null)) dart.assertFailed("Exactly one transform or offset argument must be provided.", I[1], 887, 7, "(paintOffset == null && paintTransform == null && rawTransform != null) ||\n      (paintOffset == null && paintTransform != null && rawTransform == null) ||\n      (paintOffset != null && paintTransform == null && rawTransform == null)");
      if (paintOffset != null) {
        this.pushOffset(paintOffset._negate());
      } else if (rawTransform != null) {
        this.pushTransform(rawTransform);
      } else {
        if (!(paintTransform != null)) dart.assertFailed(null, I[1], 897, 14, "paintTransform != null");
        paintTransform = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(dart.nullCheck(paintTransform)));
        if (!(paintTransform != null)) dart.assertFailed("paintTransform must be invertible.", I[1], 899, 14, "paintTransform != null");
        this.pushTransform(dart.nullCheck(paintTransform));
      }
      let isHit = hitTest(this);
      this.popTransform();
      return isHit;
    }
  };
  (box.BoxHitTestResult.new = function() {
    box.BoxHitTestResult.__proto__.new.call(this);
    ;
  }).prototype = box.BoxHitTestResult.prototype;
  (box.BoxHitTestResult.wrap = function(result) {
    box.BoxHitTestResult.__proto__.wrap.call(this, result);
    ;
  }).prototype = box.BoxHitTestResult.prototype;
  dart.addTypeTests(box.BoxHitTestResult);
  dart.addTypeCaches(box.BoxHitTestResult);
  dart.setMethodSignature(box.BoxHitTestResult, () => ({
    __proto__: dart.getMethods(box.BoxHitTestResult.__proto__),
    addWithPaintTransform: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), position: ui.Offset, transform: dart.nullable(vector_math_64.Matrix4)}),
    addWithPaintOffset: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), offset: dart.nullable(ui.Offset), position: ui.Offset}),
    addWithRawTransform: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), position: ui.Offset, transform: dart.nullable(vector_math_64.Matrix4)}),
    addWithOutOfBandPosition: dart.fnType(core.bool, [], {paintOffset: dart.nullable(ui.Offset), paintTransform: dart.nullable(vector_math_64.Matrix4), rawTransform: dart.nullable(vector_math_64.Matrix4)}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult])})
  }));
  dart.setLibraryUri(box.BoxHitTestResult, I[0]);
  var localPosition$ = dart.privateName(box, "BoxHitTestEntry.localPosition");
  var _cachedIntrinsicDimensions = dart.privateName(box, "_cachedIntrinsicDimensions");
  var _cachedDryLayoutSizes = dart.privateName(box, "_cachedDryLayoutSizes");
  var _computingThisDryLayout = dart.privateName(box, "_computingThisDryLayout");
  var _size = dart.privateName(box, "_size");
  var _cachedBaselines = dart.privateName(box, "_cachedBaselines");
  var _debugActivePointers = dart.privateName(box, "_debugActivePointers");
  var _computeIntrinsicDimension = dart.privateName(box, "_computeIntrinsicDimension");
  var _computeDryLayout = dart.privateName(box, "_computeDryLayout");
  var _clearCachedData = dart.privateName(box, "_clearCachedData");
  var Color_value = dart.privateName(ui, "Color.value");
  box.RenderBox = class RenderBox extends object.RenderObject {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!box.BoxParentData.is(child.parentData)) {
        child.parentData = new box.BoxParentData.new();
      }
    }
    [_computeIntrinsicDimension](dimension, argument, computer) {
      if (!(object.RenderObject.debugCheckingIntrinsics || !this.debugDoingThisResize)) dart.assertFailed(null, I[1], 1382, 12, "RenderObject.debugCheckingIntrinsics || !debugDoingThisResize");
      let shouldCache = true;
      if (!dart.fn(() => {
        if (object.RenderObject.debugCheckingIntrinsics) {
          shouldCache = false;
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1384, 12, "() {\n      // we don't want the checked-mode intrinsic tests to affect\n      // who gets marked dirty, etc.\n      if (RenderObject.debugCheckingIntrinsics) {\n        shouldCache = false;\n      }\n      return true;\n    }()");
      if (shouldCache) {
        let debugTimelineArguments = null;
        if (!dart.fn(() => {
          if (debug.debugEnhanceLayoutTimelineArguments) {
            debugTimelineArguments = this.toDiagnosticsNode().toTimelineArguments();
          } else {
            debugTimelineArguments = new (T.IdentityMapOfString$String()).new();
          }
          dart.nullCheck(debugTimelineArguments)[$_set]("intrinsics dimension", diagnostics.describeEnum(dimension));
          dart.nullCheck(debugTimelineArguments)[$_set]("intrinsics argument", dart.str(argument));
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1394, 14, "() {\n        if (debugEnhanceLayoutTimelineArguments) {\n          debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();\n        } else {\n          debugTimelineArguments = <String, String>{};\n        }\n        debugTimelineArguments!['intrinsics dimension'] = describeEnum(dimension);\n        debugTimelineArguments!['intrinsics argument'] = '$argument';\n        return true;\n      }()");
        {
          if (debug.debugProfileLayoutsEnabled || box.RenderBox._debugIntrinsicsDepth === 0) {
            developer.Timeline.startSync(dart.str(this[$runtimeType]) + " intrinsics", {arguments: debugTimelineArguments});
          }
          box.RenderBox._debugIntrinsicsDepth = box.RenderBox._debugIntrinsicsDepth + 1;
        }
        this[_cachedIntrinsicDimensions] == null ? this[_cachedIntrinsicDimensions] = new (T.LinkedMapOf_IntrinsicDimensionsCacheEntry$double()).new() : null;
        let result = dart.nullCheck(this[_cachedIntrinsicDimensions])[$putIfAbsent](new box._IntrinsicDimensionsCacheEntry.new(dimension, argument), dart.fn(() => computer(argument), T.VoidTodouble()));
        {
          box.RenderBox._debugIntrinsicsDepth = box.RenderBox._debugIntrinsicsDepth - 1;
          if (debug.debugProfileLayoutsEnabled || box.RenderBox._debugIntrinsicsDepth === 0) {
            developer.Timeline.finishSync();
          }
        }
        return result;
      }
      return computer(argument);
    }
    getMinIntrinsicWidth(height) {
      if (!dart.fn(() => {
        if (height === null) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMinIntrinsicWidth was null."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific height in mind, then pass double.infinity instead.")])));
        }
        if (height < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMinIntrinsicWidth was negative."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another height before passing it to " + "getMinIntrinsicWidth, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1446, 12, "() {\n      if (height == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMinIntrinsicWidth was null.'),\n          ErrorDescription('The argument to getMinIntrinsicWidth must not be negative or null.'),\n          ErrorHint('If you do not have a specific height in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (height < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMinIntrinsicWidth was negative.'),\n          ErrorDescription('The argument to getMinIntrinsicWidth must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another height before passing it to '\n            'getMinIntrinsicWidth, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.minWidth, height, dart.bind(this, 'computeMinIntrinsicWidth'));
    }
    computeMinIntrinsicWidth(height) {
      return 0.0;
    }
    getMaxIntrinsicWidth(height) {
      if (!dart.fn(() => {
        if (height === null) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMaxIntrinsicWidth was null."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific height in mind, then pass double.infinity instead.")])));
        }
        if (height < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMaxIntrinsicWidth was negative."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another height before passing it to " + "getMaxIntrinsicWidth, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1595, 12, "() {\n      if (height == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMaxIntrinsicWidth was null.'),\n          ErrorDescription('The argument to getMaxIntrinsicWidth must not be negative or null.'),\n          ErrorHint('If you do not have a specific height in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (height < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMaxIntrinsicWidth was negative.'),\n          ErrorDescription('The argument to getMaxIntrinsicWidth must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another height before passing it to '\n            'getMaxIntrinsicWidth, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.maxWidth, height, dart.bind(this, 'computeMaxIntrinsicWidth'));
    }
    computeMaxIntrinsicWidth(height) {
      return 0.0;
    }
    getMinIntrinsicHeight(width) {
      if (!dart.fn(() => {
        if (width === null) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMinIntrinsicHeight was null."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific width in mind, then pass double.infinity instead.")])));
        }
        if (width < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMinIntrinsicHeight was negative."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another width before passing it to " + "getMinIntrinsicHeight, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1678, 12, "() {\n      if (width == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMinIntrinsicHeight was null.'),\n          ErrorDescription('The argument to getMinIntrinsicHeight must not be negative or null.'),\n          ErrorHint('If you do not have a specific width in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (width < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMinIntrinsicHeight was negative.'),\n          ErrorDescription('The argument to getMinIntrinsicHeight must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another width before passing it to '\n            'getMinIntrinsicHeight, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.minHeight, width, dart.bind(this, 'computeMinIntrinsicHeight'));
    }
    computeMinIntrinsicHeight(width) {
      return 0.0;
    }
    getMaxIntrinsicHeight(width) {
      if (!dart.fn(() => {
        if (width === null) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMaxIntrinsicHeight was null."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific width in mind, then pass double.infinity instead.")])));
        }
        if (width < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMaxIntrinsicHeight was negative."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another width before passing it to " + "getMaxIntrinsicHeight, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1760, 12, "() {\n      if (width == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMaxIntrinsicHeight was null.'),\n          ErrorDescription('The argument to getMaxIntrinsicHeight must not be negative or null.'),\n          ErrorHint('If you do not have a specific width in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (width < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMaxIntrinsicHeight was negative.'),\n          ErrorDescription('The argument to getMaxIntrinsicHeight must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another width before passing it to '\n            'getMaxIntrinsicHeight, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.maxHeight, width, dart.bind(this, 'computeMaxIntrinsicHeight'));
    }
    computeMaxIntrinsicHeight(width) {
      return 0.0;
    }
    getDryLayout(constraints) {
      let shouldCache = true;
      if (!dart.fn(() => {
        if (object.RenderObject.debugCheckingIntrinsics) {
          shouldCache = false;
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1849, 12, "() {\n      // we don't want the checked-mode intrinsic tests to affect\n      // who gets marked dirty, etc.\n      if (RenderObject.debugCheckingIntrinsics) {\n        shouldCache = false;\n      }\n      return true;\n    }()");
      if (shouldCache) {
        let debugTimelineArguments = null;
        if (!dart.fn(() => {
          if (debug.debugEnhanceLayoutTimelineArguments) {
            debugTimelineArguments = this.toDiagnosticsNode().toTimelineArguments();
          } else {
            debugTimelineArguments = new (T.IdentityMapOfString$String()).new();
          }
          dart.nullCheck(debugTimelineArguments)[$_set]("getDryLayout constraints", dart.str(constraints));
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1859, 14, "() {\n        if (debugEnhanceLayoutTimelineArguments) {\n          debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();\n        } else {\n          debugTimelineArguments = <String, String>{};\n        }\n        debugTimelineArguments!['getDryLayout constraints'] = '$constraints';\n        return true;\n      }()");
        {
          if (debug.debugProfileLayoutsEnabled || box.RenderBox._debugIntrinsicsDepth === 0) {
            developer.Timeline.startSync(dart.str(this[$runtimeType]) + ".getDryLayout", {arguments: debugTimelineArguments});
          }
          box.RenderBox._debugIntrinsicsDepth = box.RenderBox._debugIntrinsicsDepth + 1;
        }
        this[_cachedDryLayoutSizes] == null ? this[_cachedDryLayoutSizes] = new (T.LinkedMapOfBoxConstraints$Size()).new() : null;
        let result = dart.nullCheck(this[_cachedDryLayoutSizes])[$putIfAbsent](constraints, dart.fn(() => this[_computeDryLayout](constraints), T.VoidToSize()));
        {
          box.RenderBox._debugIntrinsicsDepth = box.RenderBox._debugIntrinsicsDepth - 1;
          if (debug.debugProfileLayoutsEnabled || box.RenderBox._debugIntrinsicsDepth === 0) {
            developer.Timeline.finishSync();
          }
        }
        return result;
      }
      return this[_computeDryLayout](constraints);
    }
    [_computeDryLayout](constraints) {
      if (!dart.fn(() => {
        if (!!this[_computingThisDryLayout]) dart.assertFailed(null, I[1], 1892, 14, "!_computingThisDryLayout");
        this[_computingThisDryLayout] = true;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1891, 12, "() {\n      assert(!_computingThisDryLayout);\n      _computingThisDryLayout = true;\n      return true;\n    }()");
      let result = this.computeDryLayout(constraints);
      if (!dart.fn(() => {
        if (!this[_computingThisDryLayout]) dart.assertFailed(null, I[1], 1898, 14, "_computingThisDryLayout");
        this[_computingThisDryLayout] = false;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1897, 12, "() {\n      assert(_computingThisDryLayout);\n      _computingThisDryLayout = false;\n      return true;\n    }()");
      return result;
    }
    computeDryLayout(constraints) {
      if (!this.debugCannotComputeDryLayout({error: new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + object$.objectRuntimeType(this, "RenderBox") + " class does not implement \"computeDryLayout\"."), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")]))})) dart.assertFailed(null, I[1], 1939, 12, "debugCannotComputeDryLayout(\n      error: FlutterError.fromParts(<DiagnosticsNode>[\n        ErrorSummary('The ${objectRuntimeType(this, 'RenderBox')} class does not implement \"computeDryLayout\".'),\n        ErrorHint(\n          'If you are not writing your own RenderBox subclass, then this is not\\n'\n          'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n        ),\n      ]),\n    )");
      return ui.Size.zero;
    }
    debugCannotComputeDryLayout(opts) {
      let reason = opts && 'reason' in opts ? opts.reason : null;
      let error = opts && 'error' in opts ? opts.error : null;
      if (!(reason == null !== (error == null))) dart.assertFailed(null, I[1], 1968, 12, "(reason == null) != (error == null)");
      if (!dart.fn(() => {
        if (!object.RenderObject.debugCheckingIntrinsics) {
          if (reason != null) {
            if (!(error == null)) dart.assertFailed(null, I[1], 1972, 18, "error ==null");
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t2 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + object$.objectRuntimeType(this, "RenderBox") + " class does not support dry layout.")]);
              if (reason[$isNotEmpty]) t2.push(new assertions.ErrorDescription.new(reason));
              return t2;
            })()));
          }
          if (!(error != null)) dart.assertFailed(null, I[1], 1978, 16, "error != null");
          dart.throw(dart.nullCheck(error));
        }
        box.RenderBox._dryLayoutCalculationValid = false;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1969, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        if (reason != null) {\n          assert(error ==null);\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The ${objectRuntimeType(this, 'RenderBox')} class does not support dry layout.'),\n            if (reason.isNotEmpty) ErrorDescription(reason),\n          ]);\n        }\n        assert(error != null);\n        throw error!;\n      }\n      _dryLayoutCalculationValid = false;\n      return true;\n    }()");
      return true;
    }
    get hasSize() {
      return this[_size] != null;
    }
    get size() {
      if (!this.hasSize) dart.assertFailed("RenderBox was not laid out: " + dart.str(this), I[1], 2001, 12, "hasSize");
      if (!dart.fn(() => {
        let size = this[_size];
        if (box._DebugSize.is(size)) {
          if (!size[_owner$][$_equals](this)) dart.assertFailed(null, I[1], 2005, 16, "size._owner == this");
          if (object.RenderObject.debugActiveLayout != null && !dart.nullCheck(object.RenderObject.debugActiveLayout).debugDoingThisLayoutWithCallback) {
            if (!(this.debugDoingThisResize || this.debugDoingThisLayout || this[_computingThisDryLayout] || dart.equals(object.RenderObject.debugActiveLayout, this.parent) && size[_canBeUsedByParent$])) dart.assertFailed("RenderBox.size accessed beyond the scope of resize, layout, or " + "permitted parent access. RenderBox can always access its own size, " + "otherwise, the only object that is allowed to read RenderBox.size " + "is its parent, if they have said they will. It you hit this assert " + "trying to access a child's size, pass \"parentUsesSize: true\" to " + "that child's layout().", I[1], 2009, 13, "debugDoingThisResize || debugDoingThisLayout || _computingThisDryLayout ||\n              (RenderObject.debugActiveLayout == parent && size._canBeUsedByParent)");
          }
          if (!dart.equals(size, this[_size])) dart.assertFailed(null, I[1], 2019, 16, "size == _size");
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2002, 12, "() {\n      final Size? size = _size;\n      if (size is _DebugSize) {\n        assert(size._owner == this);\n        if (RenderObject.debugActiveLayout != null &&\n            !RenderObject.debugActiveLayout!.debugDoingThisLayoutWithCallback) {\n          assert(\n            debugDoingThisResize || debugDoingThisLayout || _computingThisDryLayout ||\n              (RenderObject.debugActiveLayout == parent && size._canBeUsedByParent),\n            'RenderBox.size accessed beyond the scope of resize, layout, or '\n            'permitted parent access. RenderBox can always access its own size, '\n            'otherwise, the only object that is allowed to read RenderBox.size '\n            'is its parent, if they have said they will. It you hit this assert '\n            'trying to access a child\\'s size, pass \"parentUsesSize: true\" to '\n            \"that child's layout().\",\n          );\n        }\n        assert(size == _size);\n      }\n      return true;\n    }()");
      return dart.nullCheck(this[_size]);
    }
    set size(value) {
      if (!!(this.debugDoingThisResize && this.debugDoingThisLayout)) dart.assertFailed(null, I[1], 2031, 12, "!(debugDoingThisResize && debugDoingThisLayout)");
      if (!(this.sizedByParent || !this.debugDoingThisResize)) dart.assertFailed(null, I[1], 2032, 12, "sizedByParent || !debugDoingThisResize");
      if (!dart.fn(() => {
        if (this.sizedByParent && this.debugDoingThisResize || !this.sizedByParent && this.debugDoingThisLayout) {
          return true;
        }
        if (!!this.debugDoingThisResize) dart.assertFailed(null, I[1], 2038, 14, "!debugDoingThisResize");
        let information = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderBox size setter called incorrectly.")]);
        if (this.debugDoingThisLayout) {
          if (!this.sizedByParent) dart.assertFailed(null, I[1], 2043, 16, "sizedByParent");
          information[$add](new assertions.ErrorDescription.new("It appears that the size setter was called from performLayout()."));
        } else {
          information[$add](new assertions.ErrorDescription.new("The size setter was called from outside layout (neither performResize() nor performLayout() were being run for this object)."));
          if (this.owner != null && dart.nullCheck(this.owner).debugDoingLayout) {
            information[$add](new assertions.ErrorDescription.new("Only the object itself can set its size. It is a contract violation for other objects to set it."));
          }
        }
        if (this.sizedByParent) {
          information[$add](new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to true, it must set its size in performResize()."));
        } else {
          information[$add](new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to false, it must set its size in performLayout()."));
        }
        dart.throw(new assertions.FlutterError.fromParts(information));
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2033, 12, "() {\n      if ((sizedByParent && debugDoingThisResize) ||\n          (!sizedByParent && debugDoingThisLayout)) {\n        return true;\n      }\n      assert(!debugDoingThisResize);\n      final List<DiagnosticsNode> information = <DiagnosticsNode>[\n        ErrorSummary('RenderBox size setter called incorrectly.'),\n      ];\n      if (debugDoingThisLayout) {\n        assert(sizedByParent);\n        information.add(ErrorDescription('It appears that the size setter was called from performLayout().'));\n      } else {\n        information.add(ErrorDescription(\n          'The size setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).',\n        ));\n        if (owner != null && owner!.debugDoingLayout) {\n          information.add(ErrorDescription('Only the object itself can set its size. It is a contract violation for other objects to set it.'));\n        }\n      }\n      if (sizedByParent) {\n        information.add(ErrorDescription('Because this RenderBox has sizedByParent set to true, it must set its size in performResize().'));\n      } else {\n        information.add(ErrorDescription('Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().'));\n      }\n      throw FlutterError.fromParts(information);\n    }()");
      if (!dart.fn(() => {
        value = this.debugAdoptSize(value);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2060, 12, "() {\n      value = debugAdoptSize(value);\n      return true;\n    }()");
      this[_size] = value;
      if (!dart.fn(() => {
        this.debugAssertDoesMeetConstraints();
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2065, 12, "() {\n      debugAssertDoesMeetConstraints();\n      return true;\n    }()");
    }
    debugAdoptSize(value) {
      let result = value;
      if (!dart.fn(() => {
        if (box._DebugSize.is(value)) {
          if (!value[_owner$][$_equals](this)) {
            if (!dart.equals(value[_owner$].parent, this)) {
              dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The size property was assigned a size inappropriately."), this.describeForError("The following render object"), value[_owner$].describeForError("...was assigned a size obtained from"), new assertions.ErrorDescription.new("However, this second render object is not, or is no longer, a " + "child of the first, and it is therefore a violation of the " + "RenderBox layout protocol to use that size in the layout of the " + "first render object."), new assertions.ErrorHint.new("If the size was obtained at a time where it was valid to read " + "the size (because the second render object above was a child " + "of the first at the time), then it should be adopted using " + "debugAdoptSize at that time."), new assertions.ErrorHint.new("If the size comes from a grandchild or a render object from an " + "entirely different part of the render tree, then there is no " + "way to be notified when the size changes and therefore attempts " + "to read that size are almost certainly a source of bugs. A different " + "approach should be used.")])));
            }
            if (!value[_canBeUsedByParent$]) {
              dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A child's size was used without setting parentUsesSize."), this.describeForError("The following render object"), value[_owner$].describeForError("...was assigned a size obtained from its child"), new assertions.ErrorDescription.new("However, when the child was laid out, the parentUsesSize argument " + "was not set or set to false. Subsequently this transpired to be " + "inaccurate: the size was nonetheless used by the parent.\n" + "It is important to tell the framework if the size will be used or not " + "as several important performance optimizations can be made if the " + "size will not be used by the parent.")])));
            }
          }
        }
        result = new box._DebugSize.new(value, this, this.debugCanParentUseSize);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2086, 12, "() {\n      if (value is _DebugSize) {\n        if (value._owner != this) {\n          if (value._owner.parent != this) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('The size property was assigned a size inappropriately.'),\n              describeForError('The following render object'),\n              value._owner.describeForError('...was assigned a size obtained from'),\n              ErrorDescription(\n                'However, this second render object is not, or is no longer, a '\n                'child of the first, and it is therefore a violation of the '\n                'RenderBox layout protocol to use that size in the layout of the '\n                'first render object.',\n              ),\n              ErrorHint(\n                'If the size was obtained at a time where it was valid to read '\n                'the size (because the second render object above was a child '\n                'of the first at the time), then it should be adopted using '\n                'debugAdoptSize at that time.',\n              ),\n              ErrorHint(\n                'If the size comes from a grandchild or a render object from an '\n                'entirely different part of the render tree, then there is no '\n                'way to be notified when the size changes and therefore attempts '\n                'to read that size are almost certainly a source of bugs. A different '\n                'approach should be used.',\n              ),\n            ]);\n          }\n          if (!value._canBeUsedByParent) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary(\"A child's size was used without setting parentUsesSize.\"),\n              describeForError('The following render object'),\n              value._owner.describeForError('...was assigned a size obtained from its child'),\n              ErrorDescription(\n                'However, when the child was laid out, the parentUsesSize argument '\n                'was not set or set to false. Subsequently this transpired to be '\n                'inaccurate: the size was nonetheless used by the parent.\\n'\n                'It is important to tell the framework if the size will be used or not '\n                'as several important performance optimizations can be made if the '\n                'size will not be used by the parent.',\n              ),\n            ]);\n          }\n        }\n      }\n      result = _DebugSize(value, this, debugCanParentUseSize);\n      return true;\n    }()");
      return result;
    }
    get semanticBounds() {
      return ui.Offset.zero['&'](this.size);
    }
    debugResetSize() {
      this.size = this.size;
    }
    static _debugSetDoingBaseline(value) {
      box.RenderBox._debugDoingBaseline = value;
      return true;
    }
    getDistanceToBaseline(baseline, opts) {
      let onlyReal = opts && 'onlyReal' in opts ? opts.onlyReal : false;
      if (!!box.RenderBox._debugDoingBaseline) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", I[1], 2171, 12, "!_debugDoingBaseline");
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 2172, 12, "!debugNeedsLayout");
      if (!dart.fn(() => {
        let parent = T.RenderObjectN().as(this.parent);
        if (dart.nullCheck(this.owner).debugDoingLayout) {
          return dart.equals(object.RenderObject.debugActiveLayout, parent) && dart.nullCheck(parent).debugDoingThisLayout;
        }
        if (dart.nullCheck(this.owner).debugDoingPaint) {
          return dart.equals(object.RenderObject.debugActivePaint, parent) && dart.nullCheck(parent).debugDoingThisPaint || dart.equals(object.RenderObject.debugActivePaint, this) && this.debugDoingThisPaint;
        }
        if (!dart.equals(parent, this.parent)) dart.assertFailed(null, I[1], 2182, 14, "parent == this.parent");
        return false;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2173, 12, "() {\n      final RenderObject? parent = this.parent as RenderObject?;\n      if (owner!.debugDoingLayout) {\n        return (RenderObject.debugActiveLayout == parent) && parent!.debugDoingThisLayout;\n      }\n      if (owner!.debugDoingPaint) {\n        return ((RenderObject.debugActivePaint == parent) && parent!.debugDoingThisPaint) ||\n               ((RenderObject.debugActivePaint == this) && debugDoingThisPaint);\n      }\n      assert(parent == this.parent);\n      return false;\n    }()");
      if (!box.RenderBox._debugSetDoingBaseline(true)) dart.assertFailed(null, I[1], 2185, 12, "_debugSetDoingBaseline(true)");
      let result = this.getDistanceToActualBaseline(baseline);
      if (!box.RenderBox._debugSetDoingBaseline(false)) dart.assertFailed(null, I[1], 2187, 12, "_debugSetDoingBaseline(false)");
      if (result == null && !onlyReal) {
        return this.size.height;
      }
      return result;
    }
    getDistanceToActualBaseline(baseline) {
      if (!box.RenderBox._debugDoingBaseline) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", I[1], 2202, 12, "_debugDoingBaseline");
      this[_cachedBaselines] == null ? this[_cachedBaselines] = new (T.LinkedMapOfTextBaseline$doubleN()).new() : null;
      dart.nullCheck(this[_cachedBaselines])[$putIfAbsent](baseline, dart.fn(() => this.computeDistanceToActualBaseline(baseline), T.VoidTodoubleN()));
      return dart.nullCheck(this[_cachedBaselines])[$_get](baseline);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!box.RenderBox._debugDoingBaseline) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", I[1], 2234, 12, "_debugDoingBaseline");
      return null;
    }
    get constraints() {
      return box.BoxConstraints.as(super.constraints);
    }
    debugAssertDoesMeetConstraints() {
      if (!(this.constraints !== null)) dart.assertFailed(null, I[1], 2244, 12, "constraints != null");
      if (!dart.fn(() => {
        if (!this.hasSize) {
          let contract = null;
          if (this.sizedByParent) {
            contract = new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to true, it must set its size in performResize().");
          } else {
            contract = new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().");
          }
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderBox did not set its size during layout."), contract, new assertions.ErrorDescription.new("It appears that this did not happen; layout completed, but the size property is still null."), new (T.DiagnosticsPropertyOfRenderBox()).new("The RenderBox in question is", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        if (!dart.nullCheck(this[_size]).isFinite) {
          let information = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " object was given an infinite size during layout."), new assertions.ErrorDescription.new("This probably means that it is a render object that tries to be " + "as big as possible, but it was put inside another render object " + "that allows its children to pick their own size.")]);
          if (!this.constraints.hasBoundedWidth) {
            let node = this;
            while (!node.constraints.hasBoundedWidth && box.RenderBox.is(node.parent)) {
              node = box.RenderBox.as(dart.nullCheck(node.parent));
            }
            information[$add](node.describeForError("The nearest ancestor providing an unbounded width constraint is"));
          }
          if (!this.constraints.hasBoundedHeight) {
            let node = this;
            while (!node.constraints.hasBoundedHeight && box.RenderBox.is(node.parent)) {
              node = box.RenderBox.as(dart.nullCheck(node.parent));
            }
            information[$add](node.describeForError("The nearest ancestor providing an unbounded height constraint is"));
          }
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t3 = T.ListOfDiagnosticsNode().of(information);
            t3.push(new (T.DiagnosticsPropertyOfBoxConstraints()).new("The constraints that applied to the " + dart.str(this[$runtimeType]) + " were", this.constraints, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            t3.push(new (T.DiagnosticsPropertyOfSize()).new("The exact size it was given was", this[_size], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            t3.push(new assertions.ErrorHint.new("See https://flutter.dev/docs/development/ui/layout/box-constraints for more information."));
            return t3;
          })()));
        }
        if (!this.constraints.isSatisfiedBy(dart.nullCheck(this[_size]))) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not meet its constraints."), new (T.DiagnosticsPropertyOfBoxConstraints()).new("Constraints", this.constraints, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (T.DiagnosticsPropertyOfSize()).new("Size", this[_size], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not " + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")])));
        }
        if (debug.debugCheckIntrinsicSizes) {
          if (!!object.RenderObject.debugCheckingIntrinsics) dart.assertFailed(null, I[1], 2307, 16, "!RenderObject.debugCheckingIntrinsics");
          object.RenderObject.debugCheckingIntrinsics = true;
          let failures = T.JSArrayOfDiagnosticsNode().of([]);
          function testIntrinsic($function, name, constraint) {
            let result = $function(constraint);
            if (result < 0) {
              failures[$add](new assertions.ErrorDescription.new(" * " + name + "(" + dart.str(constraint) + ") returned a negative value: " + dart.str(result)));
            }
            if (!result[$isFinite]) {
              failures[$add](new assertions.ErrorDescription.new(" * " + name + "(" + dart.str(constraint) + ") returned a non-finite value: " + dart.str(result)));
            }
            return result;
          }
          dart.fn(testIntrinsic, T.FnAndStringAnddoubleTodouble());
          function testIntrinsicsForValues(getMin, getMax, name, constraint) {
            let min = testIntrinsic(getMin, "getMinIntrinsic" + name, constraint);
            let max = testIntrinsic(getMax, "getMaxIntrinsic" + name, constraint);
            if (min > max) {
              failures[$add](new assertions.ErrorDescription.new(" * getMinIntrinsic" + name + "(" + dart.str(constraint) + ") returned a larger value (" + dart.str(min) + ") than getMaxIntrinsic" + name + "(" + dart.str(constraint) + ") (" + dart.str(max) + ")"));
            }
          }
          dart.fn(testIntrinsicsForValues, T.FnAndFnAndString__Tovoid());
          testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicWidth'), dart.bind(this, 'getMaxIntrinsicWidth'), "Width", 1 / 0);
          testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicHeight'), dart.bind(this, 'getMaxIntrinsicHeight'), "Height", 1 / 0);
          if (this.constraints.hasBoundedWidth) {
            testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicWidth'), dart.bind(this, 'getMaxIntrinsicWidth'), "Width", this.constraints.maxHeight);
          }
          if (this.constraints.hasBoundedHeight) {
            testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicHeight'), dart.bind(this, 'getMaxIntrinsicHeight'), "Height", this.constraints.maxWidth);
          }
          object.RenderObject.debugCheckingIntrinsics = false;
          if (failures[$isNotEmpty]) {
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t4 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The intrinsic dimension methods of the " + dart.str(this[$runtimeType]) + " class returned values that violate the intrinsic protocol contract."), new assertions.ErrorDescription.new("The following " + (failures[$length] > 1 ? "failures" : "failure") + " was detected:")]);
              t4[$addAll](failures);
              t4.push(new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
              return t4;
            })()));
          }
          box.RenderBox._dryLayoutCalculationValid = true;
          object.RenderObject.debugCheckingIntrinsics = true;
          let dryLayoutSize = null;
          try {
            dryLayoutSize = this.getDryLayout(this.constraints);
          } finally {
            object.RenderObject.debugCheckingIntrinsics = false;
          }
          if (box.RenderBox._dryLayoutCalculationValid && !dryLayoutSize._equals(this.size)) {
            dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The size given to the " + object$.objectRuntimeType(this, "RenderBox") + " class differs from the size computed by computeDryLayout."), new assertions.ErrorDescription.new("The size computed in " + (this.sizedByParent ? "performResize" : "performLayout") + " " + "is " + dart.str(this.size) + ", which is different from " + dart.str(dryLayoutSize) + ", which was computed by computeDryLayout."), new assertions.ErrorDescription.new("The constraints used were " + dart.str(this.constraints) + "."), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")])));
          }
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2245, 12, "() {\n      if (!hasSize) {\n        final DiagnosticsNode contract;\n        if (sizedByParent) {\n          contract = ErrorDescription('Because this RenderBox has sizedByParent set to true, it must set its size in performResize().');\n        } else {\n          contract = ErrorDescription('Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().');\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('RenderBox did not set its size during layout.'),\n          contract,\n          ErrorDescription('It appears that this did not happen; layout completed, but the size property is still null.'),\n          DiagnosticsProperty<RenderBox>('The RenderBox in question is', this, style: DiagnosticsTreeStyle.errorProperty),\n        ]);\n      }\n      // verify that the size is not infinite\n      if (!_size!.isFinite) {\n        final List<DiagnosticsNode> information = <DiagnosticsNode>[\n          ErrorSummary('$runtimeType object was given an infinite size during layout.'),\n          ErrorDescription(\n            'This probably means that it is a render object that tries to be '\n            'as big as possible, but it was put inside another render object '\n            'that allows its children to pick their own size.',\n          ),\n        ];\n        if (!constraints.hasBoundedWidth) {\n          RenderBox node = this;\n          while (!node.constraints.hasBoundedWidth && node.parent is RenderBox) {\n            node = node.parent! as RenderBox;\n          }\n\n          information.add(node.describeForError('The nearest ancestor providing an unbounded width constraint is'));\n        }\n        if (!constraints.hasBoundedHeight) {\n          RenderBox node = this;\n          while (!node.constraints.hasBoundedHeight && node.parent is RenderBox) {\n            node = node.parent! as RenderBox;\n          }\n\n          information.add(node.describeForError('The nearest ancestor providing an unbounded height constraint is'));\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ...information,\n          DiagnosticsProperty<BoxConstraints>('The constraints that applied to the $runtimeType were', constraints, style: DiagnosticsTreeStyle.errorProperty),\n          DiagnosticsProperty<Size>('The exact size it was given was', _size, style: DiagnosticsTreeStyle.errorProperty),\n          ErrorHint('See https://flutter.dev/docs/development/ui/layout/box-constraints for more information.'),\n        ]);\n      }\n      // verify that the size is within the constraints\n      if (!constraints.isSatisfiedBy(_size!)) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not meet its constraints.'),\n          DiagnosticsProperty<BoxConstraints>('Constraints', constraints, style: DiagnosticsTreeStyle.errorProperty),\n          DiagnosticsProperty<Size>('Size', _size, style: DiagnosticsTreeStyle.errorProperty),\n          ErrorHint(\n            'If you are not writing your own RenderBox subclass, then this is not '\n            'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n          ),\n        ]);\n      }\n      if (debugCheckIntrinsicSizes) {\n        // verify that the intrinsics are sane\n        assert(!RenderObject.debugCheckingIntrinsics);\n        RenderObject.debugCheckingIntrinsics = true;\n        final List<DiagnosticsNode> failures = <DiagnosticsNode>[];\n\n        double testIntrinsic(double Function(double extent) function, String name, double constraint) {\n          final double result = function(constraint);\n          if (result < 0) {\n            failures.add(ErrorDescription(' * $name($constraint) returned a negative value: $result'));\n          }\n          if (!result.isFinite) {\n            failures.add(ErrorDescription(' * $name($constraint) returned a non-finite value: $result'));\n          }\n          return result;\n        }\n\n        void testIntrinsicsForValues(double Function(double extent) getMin, double Function(double extent) getMax, String name, double constraint) {\n          final double min = testIntrinsic(getMin, 'getMinIntrinsic$name', constraint);\n          final double max = testIntrinsic(getMax, 'getMaxIntrinsic$name', constraint);\n          if (min > max) {\n            failures.add(ErrorDescription(' * getMinIntrinsic$name($constraint) returned a larger value ($min) than getMaxIntrinsic$name($constraint) ($max)'));\n          }\n        }\n\n        testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', double.infinity);\n        testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', double.infinity);\n        if (constraints.hasBoundedWidth) {\n          testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', constraints.maxHeight);\n        }\n        if (constraints.hasBoundedHeight) {\n          testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', constraints.maxWidth);\n        }\n\n        // TODO(ianh): Test that values are internally consistent in more ways than the above.\n\n        RenderObject.debugCheckingIntrinsics = false;\n        if (failures.isNotEmpty) {\n          // TODO(jacobr): consider nesting the failures object so it is collapsible.\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The intrinsic dimension methods of the $runtimeType class returned values that violate the intrinsic protocol contract.'),\n            ErrorDescription('The following ${failures.length > 1 ? \"failures\" : \"failure\"} was detected:'), // should this be tagged as an error or not?\n            ...failures,\n            ErrorHint(\n              'If you are not writing your own RenderBox subclass, then this is not\\n'\n              'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n            ),\n          ]);\n        }\n\n        // Checking that getDryLayout computes the same size.\n        _dryLayoutCalculationValid = true;\n        RenderObject.debugCheckingIntrinsics = true;\n        final Size dryLayoutSize;\n        try {\n          dryLayoutSize = getDryLayout(constraints);\n        } finally {\n          RenderObject.debugCheckingIntrinsics = false;\n        }\n        if (_dryLayoutCalculationValid && dryLayoutSize != size) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The size given to the ${objectRuntimeType(this, 'RenderBox')} class differs from the size computed by computeDryLayout.'),\n            ErrorDescription(\n              'The size computed in ${sizedByParent ? 'performResize' : 'performLayout'} '\n              'is $size, which is different from $dryLayoutSize, which was computed by computeDryLayout.',\n            ),\n            ErrorDescription(\n              'The constraints used were $constraints.',\n            ),\n            ErrorHint(\n              'If you are not writing your own RenderBox subclass, then this is not\\n'\n              'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n            ),\n          ]);\n        }\n      }\n      return true;\n    }()");
    }
    [_clearCachedData]() {
      let t5, t5$, t5$0;
      if (this[_cachedBaselines] != null && dart.nullCheck(this[_cachedBaselines])[$isNotEmpty] || this[_cachedIntrinsicDimensions] != null && dart.nullCheck(this[_cachedIntrinsicDimensions])[$isNotEmpty] || this[_cachedDryLayoutSizes] != null && dart.nullCheck(this[_cachedDryLayoutSizes])[$isNotEmpty]) {
        t5 = this[_cachedBaselines];
        t5 == null ? null : t5[$clear]();
        t5$ = this[_cachedIntrinsicDimensions];
        t5$ == null ? null : t5$[$clear]();
        t5$0 = this[_cachedDryLayoutSizes];
        t5$0 == null ? null : t5$0[$clear]();
        return true;
      }
      return false;
    }
    markNeedsLayout() {
      if (this[_clearCachedData]() && object.RenderObject.is(this.parent)) {
        this.markParentNeedsLayout();
        return;
      }
      super.markNeedsLayout();
    }
    layout(constraints, opts) {
      let t5;
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (this.hasSize && !constraints[$_equals](this.constraints) && this[_cachedBaselines] != null && dart.nullCheck(this[_cachedBaselines])[$isNotEmpty]) {
        t5 = this[_cachedBaselines];
        t5 == null ? null : t5[$clear]();
      }
      super.layout(constraints, {parentUsesSize: parentUsesSize});
    }
    performResize() {
      this.size = this.computeDryLayout(this.constraints);
      if (!this.size.isFinite) dart.assertFailed(null, I[1], 2430, 12, "size.isFinite");
    }
    performLayout() {
      if (!dart.fn(() => {
        if (!this.sizedByParent) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " did not implement performLayout()."), new assertions.ErrorHint.new("RenderBox subclasses need to either override performLayout() to " + "set a size and lay out any children, or, set sizedByParent to true " + "so that performResize() sizes the render object.")])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2435, 12, "() {\n      if (!sizedByParent) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType did not implement performLayout().'),\n          ErrorHint(\n            'RenderBox subclasses need to either override performLayout() to '\n            'set a size and lay out any children, or, set sizedByParent to true '\n            'so that performResize() sizes the render object.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (!dart.fn(() => {
        if (!this.hasSize) {
          if (this.debugNeedsLayout) {
            dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Cannot hit test a render box that has never been laid out."), this.describeForError("The hitTest() method was called on this RenderBox"), new assertions.ErrorDescription.new("Unfortunately, this object's geometry is not known at this time, " + "probably because it has never been laid out. " + "This means it cannot be accurately hit-tested."), new assertions.ErrorHint.new("If you are trying " + "to perform a hit test during the layout phase itself, make sure " + "you only hit test nodes that have completed layout (e.g. the node's " + "children, after their layout() method has been called).")])));
          }
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Cannot hit test a render box with no size."), this.describeForError("The hitTest() method was called on this RenderBox"), new assertions.ErrorDescription.new("Although this node is not marked as needing layout, " + "its size is not set."), new assertions.ErrorHint.new("A RenderBox object must have an " + "explicit size before it can be hit-tested. Make sure " + "that the RenderBox in question sets its size during layout.")])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2475, 12, "() {\n      if (!hasSize) {\n        if (debugNeedsLayout) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('Cannot hit test a render box that has never been laid out.'),\n            describeForError('The hitTest() method was called on this RenderBox'),\n            ErrorDescription(\n              \"Unfortunately, this object's geometry is not known at this time, \"\n              'probably because it has never been laid out. '\n              'This means it cannot be accurately hit-tested.',\n            ),\n            ErrorHint(\n              'If you are trying '\n              'to perform a hit test during the layout phase itself, make sure '\n              \"you only hit test nodes that have completed layout (e.g. the node's \"\n              'children, after their layout() method has been called).',\n            ),\n          ]);\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Cannot hit test a render box with no size.'),\n          describeForError('The hitTest() method was called on this RenderBox'),\n          ErrorDescription(\n            'Although this node is not marked as needing layout, '\n            'its size is not set.',\n          ),\n          ErrorHint(\n            'A RenderBox object must have an '\n            'explicit size before it can be hit-tested. Make sure '\n            'that the RenderBox in question sets its size during layout.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      if (dart.nullCheck(this[_size]).contains(position)) {
        if (this.hitTestChildren(result, {position: position}) || this.hitTestSelf(position)) {
          result.add(new box.BoxHitTestEntry.new(this, position));
          return true;
        }
      }
      return false;
    }
    hitTestSelf(position) {
      return false;
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return false;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[1], 2573, 12, "child != null");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[1], 2574, 12, "child.parent == this");
      if (!dart.fn(() => {
        if (!box.BoxParentData.is(child.parentData)) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not implement applyPaintTransform."), this.describeForError("The following " + dart.str(this[$runtimeType]) + " object"), child.describeForError("...did not use a BoxParentData class for the parentData field of the following child"), new assertions.ErrorDescription.new("The " + dart.str(this[$runtimeType]) + " class inherits from RenderBox."), new assertions.ErrorHint.new("The default applyPaintTransform implementation provided by RenderBox assumes that the " + "children all use BoxParentData objects for their parentData field. " + "Since " + dart.str(this[$runtimeType]) + " does not in fact use that ParentData class for its children, it must " + "provide an implementation of applyPaintTransform that supports the specific ParentData " + "subclass used by its children (which apparently is " + dart.str(dart.runtimeType(child.parentData)) + ").")])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2575, 12, "() {\n      if (child.parentData is! BoxParentData) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not implement applyPaintTransform.'),\n          describeForError('The following $runtimeType object'),\n          child.describeForError('...did not use a BoxParentData class for the parentData field of the following child'),\n          ErrorDescription('The $runtimeType class inherits from RenderBox.'),\n          ErrorHint(\n            'The default applyPaintTransform implementation provided by RenderBox assumes that the '\n            'children all use BoxParentData objects for their parentData field. '\n            'Since $runtimeType does not in fact use that ParentData class for its children, it must '\n            'provide an implementation of applyPaintTransform that supports the specific ParentData '\n            'subclass used by its children (which apparently is ${child.parentData.runtimeType}).',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      let childParentData = box.BoxParentData.as(dart.nullCheck(child.parentData));
      let offset = childParentData.offset;
      transform.translate(offset.dx, offset.dy);
    }
    globalToLocal(point, opts) {
      let ancestor = opts && 'ancestor' in opts ? opts.ancestor : null;
      let transform = this.getTransformTo(ancestor);
      let det = transform.invert();
      if (det === 0.0) {
        return ui.Offset.zero;
      }
      let n = vector_math_64.Vector3.new(0.0, 0.0, 1.0);
      let i = transform.perspectiveTransform(vector_math_64.Vector3.new(0.0, 0.0, 0.0));
      let d = transform.perspectiveTransform(vector_math_64.Vector3.new(0.0, 0.0, 1.0))['-'](i);
      let s = transform.perspectiveTransform(vector_math_64.Vector3.new(point.dx, point.dy, 0.0));
      let p = s['-'](d['*'](n.dot(s) / n.dot(d)));
      return new ui.Offset.new(p.x, p.y);
    }
    localToGlobal(point, opts) {
      let ancestor = opts && 'ancestor' in opts ? opts.ancestor : null;
      return matrix_utils.MatrixUtils.transformPoint(this.getTransformTo(ancestor), point);
    }
    get paintBounds() {
      return ui.Offset.zero['&'](this.size);
    }
    handleEvent(event, entry) {
      box.BoxHitTestEntry.as(entry);
      super.handleEvent(event, entry);
    }
    debugHandleEvent(event, entry) {
      if (!dart.fn(() => {
        if (debug.debugPaintPointersEnabled) {
          if (events.PointerDownEvent.is(event)) {
            this[_debugActivePointers] = this[_debugActivePointers] + 1;
          } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
            this[_debugActivePointers] = this[_debugActivePointers] - 1;
          }
          this.markNeedsPaint();
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2707, 12, "() {\n      if (debugPaintPointersEnabled) {\n        if (event is PointerDownEvent) {\n          _debugActivePointers += 1;\n        } else if (event is PointerUpEvent || event is PointerCancelEvent) {\n          _debugActivePointers -= 1;\n        }\n        markNeedsPaint();\n      }\n      return true;\n    }()");
      return true;
    }
    debugPaint(context, offset) {
      if (!dart.fn(() => {
        if (debug.debugPaintSizeEnabled) {
          this.debugPaintSize(context, offset);
        }
        if (debug.debugPaintBaselinesEnabled) {
          this.debugPaintBaselines(context, offset);
        }
        if (debug.debugPaintPointersEnabled) {
          this.debugPaintPointers(context, offset);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2723, 12, "() {\n      if (debugPaintSizeEnabled) {\n        debugPaintSize(context, offset);\n      }\n      if (debugPaintBaselinesEnabled) {\n        debugPaintBaselines(context, offset);\n      }\n      if (debugPaintPointersEnabled) {\n        debugPaintPointers(context, offset);\n      }\n      return true;\n    }()");
    }
    debugPaintSize(context, offset) {
      if (!dart.fn(() => {
        let t5;
        let paint = (t5 = ui.Paint.new(), (() => {
          t5.style = ui.PaintingStyle.stroke;
          t5.strokeWidth = 1.0;
          t5.color = C[0] || CT.C0;
          return t5;
        })());
        context.canvas.drawRect(offset['&'](this.size).deflate(0.5), paint);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2743, 12, "() {\n      final Paint paint = Paint()\n       ..style = PaintingStyle.stroke\n       ..strokeWidth = 1.0\n       ..color = const Color(0xFF00FFFF);\n      context.canvas.drawRect((offset & size).deflate(0.5), paint);\n      return true;\n    }()");
    }
    debugPaintBaselines(context, offset) {
      if (!dart.fn(() => {
        let t5;
        let paint = (t5 = ui.Paint.new(), (() => {
          t5.style = ui.PaintingStyle.stroke;
          t5.strokeWidth = 0.25;
          return t5;
        })());
        let path = null;
        let baselineI = this.getDistanceToBaseline(ui.TextBaseline.ideographic, {onlyReal: true});
        if (baselineI != null) {
          paint.color = C[1] || CT.C1;
          path = ui.Path.new();
          path.moveTo(offset.dx, offset.dy + dart.notNull(baselineI));
          path.lineTo(offset.dx + this.size.width, offset.dy + dart.notNull(baselineI));
          context.canvas.drawPath(path, paint);
        }
        let baselineA = this.getDistanceToBaseline(ui.TextBaseline.alphabetic, {onlyReal: true});
        if (baselineA != null) {
          paint.color = C[2] || CT.C2;
          path = ui.Path.new();
          path.moveTo(offset.dx, offset.dy + dart.notNull(baselineA));
          path.lineTo(offset.dx + this.size.width, offset.dy + dart.notNull(baselineA));
          context.canvas.drawPath(path, paint);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2758, 12, "() {\n      final Paint paint = Paint()\n       ..style = PaintingStyle.stroke\n       ..strokeWidth = 0.25;\n      Path path;\n      // ideographic baseline\n      final double? baselineI = getDistanceToBaseline(TextBaseline.ideographic, onlyReal: true);\n      if (baselineI != null) {\n        paint.color = const Color(0xFFFFD000);\n        path = Path();\n        path.moveTo(offset.dx, offset.dy + baselineI);\n        path.lineTo(offset.dx + size.width, offset.dy + baselineI);\n        context.canvas.drawPath(path, paint);\n      }\n      // alphabetic baseline\n      final double? baselineA = getDistanceToBaseline(TextBaseline.alphabetic, onlyReal: true);\n      if (baselineA != null) {\n        paint.color = const Color(0xFF00FF00);\n        path = Path();\n        path.moveTo(offset.dx, offset.dy + baselineA);\n        path.lineTo(offset.dx + size.width, offset.dy + baselineA);\n        context.canvas.drawPath(path, paint);\n      }\n      return true;\n    }()");
    }
    debugPaintPointers(context, offset) {
      if (!dart.fn(() => {
        let t5;
        if (this[_debugActivePointers] > 0) {
          let paint = (t5 = ui.Paint.new(), (() => {
            t5.color = new ui.Color.new((48059 | (67108864 * this.depth & 4278190080) >>> 0) >>> 0);
            return t5;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 2794, 12, "() {\n      if (_debugActivePointers > 0) {\n        final Paint paint = Paint()\n         ..color = Color(0x00BBBB | ((0x04000000 * depth) & 0xFF000000));\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfSize()).new("size", this[_size], {missingIfNull: true}));
    }
  };
  (box.RenderBox.new = function() {
    this[_cachedIntrinsicDimensions] = null;
    this[_cachedDryLayoutSizes] = null;
    this[_computingThisDryLayout] = false;
    this[_size] = null;
    this[_cachedBaselines] = null;
    this[_debugActivePointers] = 0;
    box.RenderBox.__proto__.new.call(this);
    ;
  }).prototype = box.RenderBox.prototype;
  dart.addTypeTests(box.RenderBox);
  dart.addTypeCaches(box.RenderBox);
  dart.setMethodSignature(box.RenderBox, () => ({
    __proto__: dart.getMethods(box.RenderBox.__proto__),
    [_computeIntrinsicDimension]: dart.fnType(core.double, [box._IntrinsicDimension, core.double, dart.fnType(core.double, [core.double])]),
    getMinIntrinsicWidth: dart.fnType(core.double, [core.double]),
    computeMinIntrinsicWidth: dart.fnType(core.double, [core.double]),
    getMaxIntrinsicWidth: dart.fnType(core.double, [core.double]),
    computeMaxIntrinsicWidth: dart.fnType(core.double, [core.double]),
    getMinIntrinsicHeight: dart.fnType(core.double, [core.double]),
    computeMinIntrinsicHeight: dart.fnType(core.double, [core.double]),
    getMaxIntrinsicHeight: dart.fnType(core.double, [core.double]),
    computeMaxIntrinsicHeight: dart.fnType(core.double, [core.double]),
    getDryLayout: dart.fnType(ui.Size, [box.BoxConstraints]),
    [_computeDryLayout]: dart.fnType(ui.Size, [box.BoxConstraints]),
    computeDryLayout: dart.fnType(ui.Size, [box.BoxConstraints]),
    debugCannotComputeDryLayout: dart.fnType(core.bool, [], {error: dart.nullable(assertions.FlutterError), reason: dart.nullable(core.String)}, {}),
    debugAdoptSize: dart.fnType(ui.Size, [ui.Size]),
    getDistanceToBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline], {onlyReal: core.bool}, {}),
    getDistanceToActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
    computeDistanceToActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
    debugAssertDoesMeetConstraints: dart.fnType(dart.void, []),
    [_clearCachedData]: dart.fnType(core.bool, []),
    performResize: dart.fnType(dart.void, []),
    performLayout: dart.fnType(dart.void, []),
    hitTest: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
    hitTestSelf: dart.fnType(core.bool, [ui.Offset]),
    hitTestChildren: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
    globalToLocal: dart.fnType(ui.Offset, [ui.Offset], {ancestor: dart.nullable(object.RenderObject)}, {}),
    localToGlobal: dart.fnType(ui.Offset, [ui.Offset], {ancestor: dart.nullable(object.RenderObject)}, {}),
    debugHandleEvent: dart.fnType(core.bool, [events.PointerEvent, hit_test.HitTestEntry$(hit_test.HitTestTarget)]),
    debugPaintSize: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    debugPaintBaselines: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    debugPaintPointers: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
  }));
  dart.setStaticMethodSignature(box.RenderBox, () => ['_debugSetDoingBaseline']);
  dart.setGetterSignature(box.RenderBox, () => ({
    __proto__: dart.getGetters(box.RenderBox.__proto__),
    hasSize: core.bool,
    size: ui.Size,
    semanticBounds: ui.Rect,
    constraints: box.BoxConstraints,
    paintBounds: ui.Rect
  }));
  dart.setSetterSignature(box.RenderBox, () => ({
    __proto__: dart.getSetters(box.RenderBox.__proto__),
    size: ui.Size
  }));
  dart.setLibraryUri(box.RenderBox, I[0]);
  dart.setFieldSignature(box.RenderBox, () => ({
    __proto__: dart.getFields(box.RenderBox.__proto__),
    [_cachedIntrinsicDimensions]: dart.fieldType(dart.nullable(core.Map$(box._IntrinsicDimensionsCacheEntry, core.double))),
    [_cachedDryLayoutSizes]: dart.fieldType(dart.nullable(core.Map$(box.BoxConstraints, ui.Size))),
    [_computingThisDryLayout]: dart.fieldType(core.bool),
    [_size]: dart.fieldType(dart.nullable(ui.Size)),
    [_cachedBaselines]: dart.fieldType(dart.nullable(core.Map$(ui.TextBaseline, dart.nullable(core.double)))),
    [_debugActivePointers]: dart.fieldType(core.int)
  }));
  dart.setStaticFieldSignature(box.RenderBox, () => ['_debugIntrinsicsDepth', '_dryLayoutCalculationValid', '_debugDoingBaseline']);
  dart.defineLazy(box.RenderBox, {
    /*box.RenderBox._debugIntrinsicsDepth*/get _debugIntrinsicsDepth() {
      return 0;
    },
    set _debugIntrinsicsDepth(_) {},
    /*box.RenderBox._dryLayoutCalculationValid*/get _dryLayoutCalculationValid() {
      return true;
    },
    set _dryLayoutCalculationValid(_) {},
    /*box.RenderBox._debugDoingBaseline*/get _debugDoingBaseline() {
      return false;
    },
    set _debugDoingBaseline(_) {}
  }, false);
  box.BoxHitTestEntry = class BoxHitTestEntry extends hit_test.HitTestEntry$(box.RenderBox) {
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    static ['_#new#tearOff'](target, localPosition) {
      return new box.BoxHitTestEntry.new(target, localPosition);
    }
    toString() {
      return diagnostics.describeIdentity(this.target) + "@" + dart.str(this.localPosition);
    }
  };
  (box.BoxHitTestEntry.new = function(target, localPosition) {
    this[localPosition$] = localPosition;
    if (!(localPosition !== null)) dart.assertFailed(null, I[1], 914, 14, "localPosition != null");
    box.BoxHitTestEntry.__proto__.new.call(this, target);
    ;
  }).prototype = box.BoxHitTestEntry.prototype;
  dart.addTypeTests(box.BoxHitTestEntry);
  dart.addTypeCaches(box.BoxHitTestEntry);
  dart.setLibraryUri(box.BoxHitTestEntry, I[0]);
  dart.setFieldSignature(box.BoxHitTestEntry, () => ({
    __proto__: dart.getFields(box.BoxHitTestEntry.__proto__),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(box.BoxHitTestEntry, ['toString']);
  var offset = dart.privateName(box, "BoxParentData.offset");
  box.BoxParentData = class BoxParentData extends object.ParentData {
    get offset() {
      return this[offset];
    }
    set offset(value) {
      this[offset] = value;
    }
    toString() {
      return "offset=" + dart.str(this.offset);
    }
    static ['_#new#tearOff']() {
      return new box.BoxParentData.new();
    }
  };
  (box.BoxParentData.new = function() {
    this[offset] = ui.Offset.zero;
    ;
  }).prototype = box.BoxParentData.prototype;
  dart.addTypeTests(box.BoxParentData);
  dart.addTypeCaches(box.BoxParentData);
  dart.setLibraryUri(box.BoxParentData, I[0]);
  dart.setFieldSignature(box.BoxParentData, () => ({
    __proto__: dart.getFields(box.BoxParentData.__proto__),
    offset: dart.fieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(box.BoxParentData, ['toString']);
  const _is_ContainerBoxParentData_default = Symbol('_is_ContainerBoxParentData_default');
  box.ContainerBoxParentData$ = dart.generic(ChildType => {
    const BoxParentData_ContainerParentDataMixin$36 = class BoxParentData_ContainerParentDataMixin extends box.BoxParentData {};
    (BoxParentData_ContainerParentDataMixin$36.new = function() {
      object.ContainerParentDataMixin$(ChildType)[dart.mixinNew].call(this);
      BoxParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
    }).prototype = BoxParentData_ContainerParentDataMixin$36.prototype;
    dart.applyMixin(BoxParentData_ContainerParentDataMixin$36, object.ContainerParentDataMixin$(ChildType));
    class ContainerBoxParentData extends BoxParentData_ContainerParentDataMixin$36 {}
    (ContainerBoxParentData.new = function() {
      ContainerBoxParentData.__proto__.new.call(this);
      ;
    }).prototype = ContainerBoxParentData.prototype;
    dart.addTypeTests(ContainerBoxParentData);
    ContainerBoxParentData.prototype[_is_ContainerBoxParentData_default] = true;
    dart.addTypeCaches(ContainerBoxParentData);
    dart.setLibraryUri(ContainerBoxParentData, I[0]);
    return ContainerBoxParentData;
  });
  box.ContainerBoxParentData = box.ContainerBoxParentData$();
  dart.addTypeTests(box.ContainerBoxParentData, _is_ContainerBoxParentData_default);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  box._IntrinsicDimension = class _IntrinsicDimension extends core._Enum {
    toString() {
      return "_IntrinsicDimension." + this[_name];
    }
  };
  (box._IntrinsicDimension.new = function(index, name) {
    box._IntrinsicDimension.__proto__.new.call(this, index, name);
    ;
  }).prototype = box._IntrinsicDimension.prototype;
  dart.addTypeTests(box._IntrinsicDimension);
  dart.addTypeCaches(box._IntrinsicDimension);
  dart.setLibraryUri(box._IntrinsicDimension, I[0]);
  dart.setStaticFieldSignature(box._IntrinsicDimension, () => ['values', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight']);
  dart.defineExtensionMethods(box._IntrinsicDimension, ['toString']);
  dart.defineLazy(box._IntrinsicDimension, {
    /*box._IntrinsicDimension.values*/get values() {
      return C[3] || CT.C3;
    },
    /*box._IntrinsicDimension.minWidth*/get minWidth() {
      return C[4] || CT.C4;
    },
    /*box._IntrinsicDimension.maxWidth*/get maxWidth() {
      return C[5] || CT.C5;
    },
    /*box._IntrinsicDimension.minHeight*/get minHeight() {
      return C[6] || CT.C6;
    },
    /*box._IntrinsicDimension.maxHeight*/get maxHeight() {
      return C[7] || CT.C7;
    }
  }, false);
  var dimension$ = dart.privateName(box, "_IntrinsicDimensionsCacheEntry.dimension");
  var argument$ = dart.privateName(box, "_IntrinsicDimensionsCacheEntry.argument");
  box._IntrinsicDimensionsCacheEntry = class _IntrinsicDimensionsCacheEntry extends core.Object {
    get dimension() {
      return this[dimension$];
    }
    set dimension(value) {
      super.dimension = value;
    }
    get argument() {
      return this[argument$];
    }
    set argument(value) {
      super.argument = value;
    }
    static ['_#new#tearOff'](dimension, argument) {
      return new box._IntrinsicDimensionsCacheEntry.new(dimension, argument);
    }
    _equals(other) {
      if (other == null) return false;
      return box._IntrinsicDimensionsCacheEntry.is(other) && other.dimension === this.dimension && other.argument === this.argument;
    }
    get hashCode() {
      return core.Object.hash(this.dimension, this.argument);
    }
  };
  (box._IntrinsicDimensionsCacheEntry.new = function(dimension, argument) {
    this[dimension$] = dimension;
    this[argument$] = argument;
    ;
  }).prototype = box._IntrinsicDimensionsCacheEntry.prototype;
  dart.addTypeTests(box._IntrinsicDimensionsCacheEntry);
  dart.addTypeCaches(box._IntrinsicDimensionsCacheEntry);
  dart.setLibraryUri(box._IntrinsicDimensionsCacheEntry, I[0]);
  dart.setFieldSignature(box._IntrinsicDimensionsCacheEntry, () => ({
    __proto__: dart.getFields(box._IntrinsicDimensionsCacheEntry.__proto__),
    dimension: dart.finalFieldType(box._IntrinsicDimension),
    argument: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(box._IntrinsicDimensionsCacheEntry, ['_equals']);
  dart.defineExtensionAccessors(box._IntrinsicDimensionsCacheEntry, ['hashCode']);
  const _is_RenderBoxContainerDefaultsMixin_default = Symbol('_is_RenderBoxContainerDefaultsMixin_default');
  box.RenderBoxContainerDefaultsMixin$ = dart.generic((ChildType, ParentDataType) => {
    var __t$JSArrayOfChildType = () => (__t$JSArrayOfChildType = dart.constFn(_interceptors.JSArray$(ChildType)))();
    var __t$ParentDataTypeN = () => (__t$ParentDataTypeN = dart.constFn(dart.nullable(ParentDataType)))();
    class RenderBoxContainerDefaultsMixin extends core.Object {}
    RenderBoxContainerDefaultsMixin[dart.mixinOn] = Object => class RenderBoxContainerDefaultsMixin extends Object {
      defaultComputeDistanceToFirstActualBaseline(baseline) {
        if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 2823, 12, "!debugNeedsLayout");
        let child = this.firstChild;
        while (child != null) {
          let childParentData = __t$ParentDataTypeN().as(child.parentData);
          let result = child.getDistanceToActualBaseline(baseline);
          if (result != null) {
            return dart.notNull(result) + dart.nullCheck(childParentData).offset.dy;
          }
          child = dart.nullCheck(childParentData).nextSibling;
        }
        return null;
      }
      defaultComputeDistanceToHighestActualBaseline(baseline) {
        if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 2841, 12, "!debugNeedsLayout");
        let result = null;
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let candidate = child.getDistanceToActualBaseline(baseline);
          if (candidate != null) {
            candidate = dart.notNull(candidate) + childParentData.offset.dy;
            if (result != null) {
              result = math.min(core.double, result, candidate);
            } else {
              result = candidate;
            }
          }
          child = childParentData.nextSibling;
        }
        return result;
      }
      defaultHitTestChildren(result, opts) {
        let position = opts && 'position' in opts ? opts.position : null;
        let child = this.lastChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let isHit = result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
              if (!transformed._equals(position['-'](childParentData.offset))) dart.assertFailed(null, I[1], 2878, 18, "transformed == position - childParentData.offset");
              return dart.nullCheck(child).hitTest(result, {position: transformed});
            }, T.BoxHitTestResultAndOffsetTobool())});
          if (isHit) {
            return true;
          }
          child = childParentData.previousSibling;
        }
        return false;
      }
      defaultPaint(context, offset) {
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          context.paintChild(child, childParentData.offset['+'](offset));
          child = childParentData.nextSibling;
        }
      }
      getChildrenAsList() {
        let result = __t$JSArrayOfChildType().of([]);
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          result[$add](ChildType.as(child));
          child = childParentData.nextSibling;
        }
        return result;
      }
    };
    (RenderBoxContainerDefaultsMixin[dart.mixinNew] = function() {
    }).prototype = RenderBoxContainerDefaultsMixin.prototype;
    dart.addTypeTests(RenderBoxContainerDefaultsMixin);
    RenderBoxContainerDefaultsMixin.prototype[_is_RenderBoxContainerDefaultsMixin_default] = true;
    dart.addTypeCaches(RenderBoxContainerDefaultsMixin);
    RenderBoxContainerDefaultsMixin[dart.implements] = () => [object.ContainerRenderObjectMixin$(ChildType, ParentDataType), core.Object];
    dart.setMethodSignature(RenderBoxContainerDefaultsMixin, () => ({
      __proto__: dart.getMethods(RenderBoxContainerDefaultsMixin.__proto__),
      defaultComputeDistanceToFirstActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
      defaultComputeDistanceToHighestActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
      defaultHitTestChildren: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
      defaultPaint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
      getChildrenAsList: dart.fnType(core.List$(ChildType), [])
    }));
    dart.setLibraryUri(RenderBoxContainerDefaultsMixin, I[0]);
    return RenderBoxContainerDefaultsMixin;
  });
  box.RenderBoxContainerDefaultsMixin = box.RenderBoxContainerDefaultsMixin$();
  dart.addTypeTests(box.RenderBoxContainerDefaultsMixin, _is_RenderBoxContainerDefaultsMixin_default);
  dart.trackLibraries("packages/flutter/src/rendering/box.dart", {
    "package:flutter/src/rendering/box.dart": box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/box.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__box: box
  };
}));

//# sourceMappingURL=box.dart.lib.js.map
