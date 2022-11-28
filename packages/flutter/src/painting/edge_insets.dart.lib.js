define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/math.dart'], (function load__packages__flutter__src__painting__edge_insets_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__math$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  var edge_insets = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $truncate = dartx.truncate;
  var $toDouble = dartx.toDouble;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets._MixedEdgeInsets.prototype,
        [_MixedEdgeInsets__bottom]: 1 / 0,
        [_MixedEdgeInsets__top]: 1 / 0,
        [_MixedEdgeInsets__end]: 1 / 0,
        [_MixedEdgeInsets__start]: 1 / 0,
        [_MixedEdgeInsets__right]: 1 / 0,
        [_MixedEdgeInsets__left]: 1 / 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [bottom$]: 0,
        [right$]: 0,
        [top$]: 0,
        [left$]: 0
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
    get C6() {
      return C[6] = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [bottom$0]: 0,
        [end$]: 0,
        [top$0]: 0,
        [start$]: 0
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/edge_insets.dart",
    "package:flutter/src/painting/edge_insets.dart"
  ];
  var _left = dart.privateName(edge_insets, "_left");
  var _right = dart.privateName(edge_insets, "_right");
  var _start = dart.privateName(edge_insets, "_start");
  var _end = dart.privateName(edge_insets, "_end");
  var _top = dart.privateName(edge_insets, "_top");
  var _bottom = dart.privateName(edge_insets, "_bottom");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _MixedEdgeInsets__bottom = dart.privateName(edge_insets, "_MixedEdgeInsets._bottom");
  var _MixedEdgeInsets__top = dart.privateName(edge_insets, "_MixedEdgeInsets._top");
  var _MixedEdgeInsets__end = dart.privateName(edge_insets, "_MixedEdgeInsets._end");
  var _MixedEdgeInsets__start = dart.privateName(edge_insets, "_MixedEdgeInsets._start");
  var _MixedEdgeInsets__right = dart.privateName(edge_insets, "_MixedEdgeInsets._right");
  var _MixedEdgeInsets__left = dart.privateName(edge_insets, "_MixedEdgeInsets._left");
  edge_insets.EdgeInsetsGeometry = class EdgeInsetsGeometry extends core.Object {
    get isNonNegative() {
      return this[_left] >= 0.0 && this[_right] >= 0.0 && this[_start] >= 0.0 && this[_end] >= 0.0 && this[_top] >= 0.0 && this[_bottom] >= 0.0;
    }
    get horizontal() {
      return this[_left] + this[_right] + this[_start] + this[_end];
    }
    get vertical() {
      return this[_top] + this[_bottom];
    }
    along(axis) {
      if (!(axis !== null)) dart.assertFailed(null, I[0], 67, 12, "axis != null");
      switch (axis) {
        case C[0] || CT.C0:
          {
            return this.horizontal;
          }
        case C[1] || CT.C1:
          {
            return this.vertical;
          }
      }
    }
    get collapsedSize() {
      return new ui.Size.new(this.horizontal, this.vertical);
    }
    get flipped() {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_right], this[_left], this[_end], this[_start], this[_bottom], this[_top]);
    }
    inflateSize(size) {
      return new ui.Size.new(size.width + this.horizontal, size.height + this.vertical);
    }
    deflateSize(size) {
      return new ui.Size.new(size.width - this.horizontal, size.height - this.vertical);
    }
    subtract(other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left] - other[_left], this[_right] - other[_right], this[_start] - other[_start], this[_end] - other[_end], this[_top] - other[_top], this[_bottom] - other[_bottom]);
    }
    add(other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left] + other[_left], this[_right] + other[_right], this[_start] + other[_start], this[_end] + other[_end], this[_top] + other[_top], this[_bottom] + other[_bottom]);
    }
    clamp(min, max) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(math.clampDouble(this[_left], min[_left], max[_left]), math.clampDouble(this[_right], min[_right], max[_right]), math.clampDouble(this[_start], min[_start], max[_start]), math.clampDouble(this[_end], min[_end], max[_end]), math.clampDouble(this[_top], min[_top], max[_top]), math.clampDouble(this[_bottom], min[_bottom], max[_bottom]));
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 219, 12, "t != null");
      if (a == null && b == null) {
        return null;
      }
      if (a == null) {
        return dart.nullCheck(b)['*'](t);
      }
      if (b == null) {
        return a['*'](1.0 - t);
      }
      if (edge_insets.EdgeInsets.is(a) && edge_insets.EdgeInsets.is(b)) {
        return edge_insets.EdgeInsets.lerp(a, b, t);
      }
      if (edge_insets.EdgeInsetsDirectional.is(a) && edge_insets.EdgeInsetsDirectional.is(b)) {
        return edge_insets.EdgeInsetsDirectional.lerp(a, b, t);
      }
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.nullCheck(ui.lerpDouble(a[_left], b[_left], t)), dart.nullCheck(ui.lerpDouble(a[_right], b[_right], t)), dart.nullCheck(ui.lerpDouble(a[_start], b[_start], t)), dart.nullCheck(ui.lerpDouble(a[_end], b[_end], t)), dart.nullCheck(ui.lerpDouble(a[_top], b[_top], t)), dart.nullCheck(ui.lerpDouble(a[_bottom], b[_bottom], t)));
    }
    toString() {
      if (this[_start] === 0.0 && this[_end] === 0.0) {
        if (this[_left] === 0.0 && this[_right] === 0.0 && this[_top] === 0.0 && this[_bottom] === 0.0) {
          return "EdgeInsets.zero";
        }
        if (this[_left] === this[_right] && this[_right] === this[_top] && this[_top] === this[_bottom]) {
          return "EdgeInsets.all(" + this[_left][$toStringAsFixed](1) + ")";
        }
        return "EdgeInsets(" + this[_left][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_right][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")";
      }
      if (this[_left] === 0.0 && this[_right] === 0.0) {
        return "EdgeInsetsDirectional(" + this[_start][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_end][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")";
      }
      return "EdgeInsets(" + this[_left][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_right][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")" + " + " + "EdgeInsetsDirectional(" + this[_start][$toStringAsFixed](1) + ", " + "0.0, " + this[_end][$toStringAsFixed](1) + ", " + "0.0)";
    }
    _equals(other) {
      if (other == null) return false;
      return edge_insets.EdgeInsetsGeometry.is(other) && other[_left] === this[_left] && other[_right] === this[_right] && other[_start] === this[_start] && other[_end] === this[_end] && other[_top] === this[_top] && other[_bottom] === this[_bottom];
    }
    get hashCode() {
      return core.Object.hash(this[_left], this[_right], this[_start], this[_end], this[_top], this[_bottom]);
    }
  };
  (edge_insets.EdgeInsetsGeometry.new = function() {
    ;
  }).prototype = edge_insets.EdgeInsetsGeometry.prototype;
  dart.addTypeTests(edge_insets.EdgeInsetsGeometry);
  dart.addTypeCaches(edge_insets.EdgeInsetsGeometry);
  dart.setMethodSignature(edge_insets.EdgeInsetsGeometry, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsetsGeometry.__proto__),
    along: dart.fnType(core.double, [basic_types.Axis]),
    inflateSize: dart.fnType(ui.Size, [ui.Size]),
    deflateSize: dart.fnType(ui.Size, [ui.Size]),
    subtract: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry]),
    add: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry]),
    clamp: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry, edge_insets.EdgeInsetsGeometry])
  }));
  dart.setStaticMethodSignature(edge_insets.EdgeInsetsGeometry, () => ['lerp']);
  dart.setGetterSignature(edge_insets.EdgeInsetsGeometry, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsetsGeometry.__proto__),
    isNonNegative: core.bool,
    horizontal: core.double,
    vertical: core.double,
    collapsedSize: ui.Size,
    flipped: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(edge_insets.EdgeInsetsGeometry, I[1]);
  dart.setStaticFieldSignature(edge_insets.EdgeInsetsGeometry, () => ['infinity']);
  dart.defineExtensionMethods(edge_insets.EdgeInsetsGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(edge_insets.EdgeInsetsGeometry, ['hashCode']);
  dart.defineLazy(edge_insets.EdgeInsetsGeometry, {
    /*edge_insets.EdgeInsetsGeometry.infinity*/get infinity() {
      return C[2] || CT.C2;
    }
  }, false);
  var left$ = dart.privateName(edge_insets, "EdgeInsets.left");
  var top$ = dart.privateName(edge_insets, "EdgeInsets.top");
  var right$ = dart.privateName(edge_insets, "EdgeInsets.right");
  var bottom$ = dart.privateName(edge_insets, "EdgeInsets.bottom");
  edge_insets.EdgeInsets = class EdgeInsets extends edge_insets.EdgeInsetsGeometry {
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    static ['_#fromLTRB#tearOff'](left, top, right, bottom) {
      return new edge_insets.EdgeInsets.fromLTRB(left, top, right, bottom);
    }
    static ['_#all#tearOff'](value) {
      return new edge_insets.EdgeInsets.all(value);
    }
    static ['_#only#tearOff'](opts) {
      let left = opts && 'left' in opts ? opts.left : 0;
      let top = opts && 'top' in opts ? opts.top : 0;
      let right = opts && 'right' in opts ? opts.right : 0;
      let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
      return new edge_insets.EdgeInsets.only({left: left, top: top, right: right, bottom: bottom});
    }
    static ['_#symmetric#tearOff'](opts) {
      let vertical = opts && 'vertical' in opts ? opts.vertical : 0;
      let horizontal = opts && 'horizontal' in opts ? opts.horizontal : 0;
      return new edge_insets.EdgeInsets.symmetric({vertical: vertical, horizontal: horizontal});
    }
    static ['_#fromWindowPadding#tearOff'](padding, devicePixelRatio) {
      return new edge_insets.EdgeInsets.fromWindowPadding(padding, devicePixelRatio);
    }
    get [_left]() {
      return this.left;
    }
    get [_top]() {
      return this.top;
    }
    get [_right]() {
      return this.right;
    }
    get [_bottom]() {
      return this.bottom;
    }
    get [_start]() {
      return 0.0;
    }
    get [_end]() {
      return 0.0;
    }
    get topLeft() {
      return new ui.Offset.new(this.left, this.top);
    }
    get topRight() {
      return new ui.Offset.new(-this.right, this.top);
    }
    get bottomLeft() {
      return new ui.Offset.new(this.left, -this.bottom);
    }
    get bottomRight() {
      return new ui.Offset.new(-this.right, -this.bottom);
    }
    get flipped() {
      return new edge_insets.EdgeInsets.fromLTRB(this.right, this.bottom, this.left, this.top);
    }
    inflateRect(rect) {
      return new ui.Rect.fromLTRB(rect.left - this.left, rect.top - this.top, rect.right + this.right, rect.bottom + this.bottom);
    }
    deflateRect(rect) {
      return new ui.Rect.fromLTRB(rect.left + this.left, rect.top + this.top, rect.right - this.right, rect.bottom - this.bottom);
    }
    subtract(other) {
      if (edge_insets.EdgeInsets.is(other)) {
        return this['-'](other);
      }
      return super.subtract(other);
    }
    add(other) {
      if (edge_insets.EdgeInsets.is(other)) {
        return this['+'](other);
      }
      return super.add(other);
    }
    clamp(min, max) {
      return new edge_insets.EdgeInsets.fromLTRB(math.clampDouble(this[_left], min[_left], max[_left]), math.clampDouble(this[_top], min[_top], max[_top]), math.clampDouble(this[_right], min[_right], max[_right]), math.clampDouble(this[_bottom], min[_bottom], max[_bottom]));
    }
    ['-'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(this.left - other.left, this.top - other.top, this.right - other.right, this.bottom - other.bottom);
    }
    ['+'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(this.left + other.left, this.top + other.top, this.right + other.right, this.bottom + other.bottom);
    }
    _negate() {
      return new edge_insets.EdgeInsets.fromLTRB(-this.left, -this.top, -this.right, -this.bottom);
    }
    ['*'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(this.left * other, this.top * other, this.right * other, this.bottom * other);
    }
    ['/'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(this.left / other, this.top / other, this.right / other, this.bottom / other);
    }
    ['~/'](other) {
      return new edge_insets.EdgeInsets.fromLTRB((this.left / other)[$truncate]()[$toDouble](), (this.top / other)[$truncate]()[$toDouble](), (this.right / other)[$truncate]()[$toDouble](), (this.bottom / other)[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(this.left[$modulo](other), this.top[$modulo](other), this.right[$modulo](other), this.bottom[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 607, 12, "t != null");
      if (a == null && b == null) {
        return null;
      }
      if (a == null) {
        return dart.nullCheck(b)['*'](t);
      }
      if (b == null) {
        return a['*'](1.0 - t);
      }
      return new edge_insets.EdgeInsets.fromLTRB(dart.nullCheck(ui.lerpDouble(a.left, b.left, t)), dart.nullCheck(ui.lerpDouble(a.top, b.top, t)), dart.nullCheck(ui.lerpDouble(a.right, b.right, t)), dart.nullCheck(ui.lerpDouble(a.bottom, b.bottom, t)));
    }
    resolve(direction) {
      return this;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let left = opts && 'left' in opts ? opts.left : null;
      let top = opts && 'top' in opts ? opts.top : null;
      let right = opts && 'right' in opts ? opts.right : null;
      let bottom = opts && 'bottom' in opts ? opts.bottom : null;
      return new edge_insets.EdgeInsets.only({left: (t0 = left, t0 == null ? this.left : t0), top: (t0$ = top, t0$ == null ? this.top : t0$), right: (t0$0 = right, t0$0 == null ? this.right : t0$0), bottom: (t0$1 = bottom, t0$1 == null ? this.bottom : t0$1)});
    }
  };
  (edge_insets.EdgeInsets.fromLTRB = function(left, top, right, bottom) {
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.all = function(value) {
    this[left$] = value;
    this[top$] = value;
    this[right$] = value;
    this[bottom$] = value;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.only = function(opts) {
    let left = opts && 'left' in opts ? opts.left : 0;
    let top = opts && 'top' in opts ? opts.top : 0;
    let right = opts && 'right' in opts ? opts.right : 0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.symmetric = function(opts) {
    let vertical = opts && 'vertical' in opts ? opts.vertical : 0;
    let horizontal = opts && 'horizontal' in opts ? opts.horizontal : 0;
    this[left$] = horizontal;
    this[top$] = vertical;
    this[right$] = horizontal;
    this[bottom$] = vertical;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.fromWindowPadding = function(padding, devicePixelRatio) {
    this[left$] = padding.left / devicePixelRatio;
    this[top$] = padding.top / devicePixelRatio;
    this[right$] = padding.right / devicePixelRatio;
    this[bottom$] = padding.bottom / devicePixelRatio;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  dart.addTypeTests(edge_insets.EdgeInsets);
  dart.addTypeCaches(edge_insets.EdgeInsets);
  dart.setMethodSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsets.__proto__),
    inflateRect: dart.fnType(ui.Rect, [ui.Rect]),
    deflateRect: dart.fnType(ui.Rect, [ui.Rect]),
    '-': dart.fnType(edge_insets.EdgeInsets, [edge_insets.EdgeInsets]),
    '+': dart.fnType(edge_insets.EdgeInsets, [edge_insets.EdgeInsets]),
    _negate: dart.fnType(edge_insets.EdgeInsets, []),
    '*': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '/': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '~/': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '%': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [dart.nullable(ui.TextDirection)]),
    copyWith: dart.fnType(edge_insets.EdgeInsets, [], {bottom: dart.nullable(core.double), left: dart.nullable(core.double), right: dart.nullable(core.double), top: dart.nullable(core.double)}, {})
  }));
  dart.setStaticMethodSignature(edge_insets.EdgeInsets, () => ['lerp']);
  dart.setGetterSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsets.__proto__),
    [_left]: core.double,
    [_top]: core.double,
    [_right]: core.double,
    [_bottom]: core.double,
    [_start]: core.double,
    [_end]: core.double,
    topLeft: ui.Offset,
    topRight: ui.Offset,
    bottomLeft: ui.Offset,
    bottomRight: ui.Offset,
    flipped: edge_insets.EdgeInsets
  }));
  dart.setLibraryUri(edge_insets.EdgeInsets, I[1]);
  dart.setFieldSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getFields(edge_insets.EdgeInsets.__proto__),
    left: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double),
    right: dart.finalFieldType(core.double),
    bottom: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(edge_insets.EdgeInsets, () => ['zero']);
  dart.defineLazy(edge_insets.EdgeInsets, {
    /*edge_insets.EdgeInsets.zero*/get zero() {
      return C[3] || CT.C3;
    }
  }, false);
  var start$ = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  var top$0 = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  var end$ = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  var bottom$0 = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  edge_insets.EdgeInsetsDirectional = class EdgeInsetsDirectional extends edge_insets.EdgeInsetsGeometry {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    static ['_#fromSTEB#tearOff'](start, top, end, bottom) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(start, top, end, bottom);
    }
    static ['_#only#tearOff'](opts) {
      let start = opts && 'start' in opts ? opts.start : 0;
      let top = opts && 'top' in opts ? opts.top : 0;
      let end = opts && 'end' in opts ? opts.end : 0;
      let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
      return new edge_insets.EdgeInsetsDirectional.only({start: start, top: top, end: end, bottom: bottom});
    }
    static ['_#all#tearOff'](value) {
      return new edge_insets.EdgeInsetsDirectional.all(value);
    }
    get [_start]() {
      return this.start;
    }
    get [_top]() {
      return this.top;
    }
    get [_end]() {
      return this.end;
    }
    get [_bottom]() {
      return this.bottom;
    }
    get [_left]() {
      return 0.0;
    }
    get [_right]() {
      return 0.0;
    }
    get isNonNegative() {
      return this.start >= 0.0 && this.top >= 0.0 && this.end >= 0.0 && this.bottom >= 0.0;
    }
    get flipped() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.end, this.bottom, this.start, this.top);
    }
    subtract(other) {
      if (edge_insets.EdgeInsetsDirectional.is(other)) {
        return this['-'](other);
      }
      return super.subtract(other);
    }
    add(other) {
      if (edge_insets.EdgeInsetsDirectional.is(other)) {
        return this['+'](other);
      }
      return super.add(other);
    }
    ['-'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start - other.start, this.top - other.top, this.end - other.end, this.bottom - other.bottom);
    }
    ['+'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start + other.start, this.top + other.top, this.end + other.end, this.bottom + other.bottom);
    }
    _negate() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(-this.start, -this.top, -this.end, -this.bottom);
    }
    ['*'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start * other, this.top * other, this.end * other, this.bottom * other);
    }
    ['/'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start / other, this.top / other, this.end / other, this.bottom / other);
    }
    ['~/'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB((this.start / other)[$truncate]()[$toDouble](), (this.top / other)[$truncate]()[$toDouble](), (this.end / other)[$truncate]()[$toDouble](), (this.bottom / other)[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start[$modulo](other), this.top[$modulo](other), this.end[$modulo](other), this.bottom[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 853, 12, "t != null");
      if (a == null && b == null) {
        return null;
      }
      if (a == null) {
        return dart.nullCheck(b)['*'](t);
      }
      if (b == null) {
        return a['*'](1.0 - t);
      }
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.nullCheck(ui.lerpDouble(a.start, b.start, t)), dart.nullCheck(ui.lerpDouble(a.top, b.top, t)), dart.nullCheck(ui.lerpDouble(a.end, b.end, t)), dart.nullCheck(ui.lerpDouble(a.bottom, b.bottom, t)));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, I[0], 873, 12, "direction != null");
      switch (dart.nullCheck(direction)) {
        case C[4] || CT.C4:
          {
            return new edge_insets.EdgeInsets.fromLTRB(this.end, this.top, this.start, this.bottom);
          }
        case C[5] || CT.C5:
          {
            return new edge_insets.EdgeInsets.fromLTRB(this.start, this.top, this.end, this.bottom);
          }
      }
    }
  };
  (edge_insets.EdgeInsetsDirectional.fromSTEB = function(start, top, end, bottom) {
    this[start$] = start;
    this[top$0] = top;
    this[end$] = end;
    this[bottom$0] = bottom;
    edge_insets.EdgeInsetsDirectional.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsetsDirectional.prototype;
  (edge_insets.EdgeInsetsDirectional.only = function(opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    let top = opts && 'top' in opts ? opts.top : 0;
    let end = opts && 'end' in opts ? opts.end : 0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
    this[start$] = start;
    this[top$0] = top;
    this[end$] = end;
    this[bottom$0] = bottom;
    edge_insets.EdgeInsetsDirectional.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsetsDirectional.prototype;
  (edge_insets.EdgeInsetsDirectional.all = function(value) {
    this[start$] = value;
    this[top$0] = value;
    this[end$] = value;
    this[bottom$0] = value;
    edge_insets.EdgeInsetsDirectional.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsetsDirectional.prototype;
  dart.addTypeTests(edge_insets.EdgeInsetsDirectional);
  dart.addTypeCaches(edge_insets.EdgeInsetsDirectional);
  dart.setMethodSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsetsDirectional.__proto__),
    '-': dart.fnType(edge_insets.EdgeInsetsDirectional, [edge_insets.EdgeInsetsDirectional]),
    '+': dart.fnType(edge_insets.EdgeInsetsDirectional, [edge_insets.EdgeInsetsDirectional]),
    _negate: dart.fnType(edge_insets.EdgeInsetsDirectional, []),
    '*': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '/': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '~/': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '%': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [dart.nullable(ui.TextDirection)])
  }));
  dart.setStaticMethodSignature(edge_insets.EdgeInsetsDirectional, () => ['lerp']);
  dart.setGetterSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsetsDirectional.__proto__),
    [_start]: core.double,
    [_top]: core.double,
    [_end]: core.double,
    [_bottom]: core.double,
    [_left]: core.double,
    [_right]: core.double,
    flipped: edge_insets.EdgeInsetsDirectional
  }));
  dart.setLibraryUri(edge_insets.EdgeInsetsDirectional, I[1]);
  dart.setFieldSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getFields(edge_insets.EdgeInsetsDirectional.__proto__),
    start: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    bottom: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(edge_insets.EdgeInsetsDirectional, () => ['zero']);
  dart.defineLazy(edge_insets.EdgeInsetsDirectional, {
    /*edge_insets.EdgeInsetsDirectional.zero*/get zero() {
      return C[6] || CT.C6;
    }
  }, false);
  const _left$ = _MixedEdgeInsets__left;
  const _right$ = _MixedEdgeInsets__right;
  const _start$ = _MixedEdgeInsets__start;
  const _end$ = _MixedEdgeInsets__end;
  const _top$ = _MixedEdgeInsets__top;
  const _bottom$ = _MixedEdgeInsets__bottom;
  edge_insets._MixedEdgeInsets = class _MixedEdgeInsets extends edge_insets.EdgeInsetsGeometry {
    get [_left]() {
      return this[_left$];
    }
    set [_left](value) {
      super[_left] = value;
    }
    get [_right]() {
      return this[_right$];
    }
    set [_right](value) {
      super[_right] = value;
    }
    get [_start]() {
      return this[_start$];
    }
    set [_start](value) {
      super[_start] = value;
    }
    get [_end]() {
      return this[_end$];
    }
    set [_end](value) {
      super[_end] = value;
    }
    get [_top]() {
      return this[_top$];
    }
    set [_top](value) {
      super[_top] = value;
    }
    get [_bottom]() {
      return this[_bottom$];
    }
    set [_bottom](value) {
      super[_bottom] = value;
    }
    static ['_#fromLRSETB#tearOff'](_left, _right, _start, _end, _top, _bottom) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(_left, _right, _start, _end, _top, _bottom);
    }
    get isNonNegative() {
      return this[_left] >= 0.0 && this[_right] >= 0.0 && this[_start] >= 0.0 && this[_end] >= 0.0 && this[_top] >= 0.0 && this[_bottom] >= 0.0;
    }
    _negate() {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(-this[_left], -this[_right], -this[_start], -this[_end], -this[_top], -this[_bottom]);
    }
    ['*'](other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left] * other, this[_right] * other, this[_start] * other, this[_end] * other, this[_top] * other, this[_bottom] * other);
    }
    ['/'](other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left] / other, this[_right] / other, this[_start] / other, this[_end] / other, this[_top] / other, this[_bottom] / other);
    }
    ['~/'](other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB((this[_left] / other)[$truncate]()[$toDouble](), (this[_right] / other)[$truncate]()[$toDouble](), (this[_start] / other)[$truncate]()[$toDouble](), (this[_end] / other)[$truncate]()[$toDouble](), (this[_top] / other)[$truncate]()[$toDouble](), (this[_bottom] / other)[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left][$modulo](other), this[_right][$modulo](other), this[_start][$modulo](other), this[_end][$modulo](other), this[_top][$modulo](other), this[_bottom][$modulo](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, I[0], 976, 12, "direction != null");
      switch (dart.nullCheck(direction)) {
        case C[4] || CT.C4:
          {
            return new edge_insets.EdgeInsets.fromLTRB(this[_end] + this[_left], this[_top], this[_start] + this[_right], this[_bottom]);
          }
        case C[5] || CT.C5:
          {
            return new edge_insets.EdgeInsets.fromLTRB(this[_start] + this[_left], this[_top], this[_end] + this[_right], this[_bottom]);
          }
      }
    }
  };
  (edge_insets._MixedEdgeInsets.fromLRSETB = function(_left, _right, _start, _end, _top, _bottom) {
    this[_left$] = _left;
    this[_right$] = _right;
    this[_start$] = _start;
    this[_end$] = _end;
    this[_top$] = _top;
    this[_bottom$] = _bottom;
    edge_insets._MixedEdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets._MixedEdgeInsets.prototype;
  dart.addTypeTests(edge_insets._MixedEdgeInsets);
  dart.addTypeCaches(edge_insets._MixedEdgeInsets);
  dart.setMethodSignature(edge_insets._MixedEdgeInsets, () => ({
    __proto__: dart.getMethods(edge_insets._MixedEdgeInsets.__proto__),
    _negate: dart.fnType(edge_insets._MixedEdgeInsets, []),
    '*': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '/': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '~/': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '%': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [dart.nullable(ui.TextDirection)])
  }));
  dart.setLibraryUri(edge_insets._MixedEdgeInsets, I[1]);
  dart.setFieldSignature(edge_insets._MixedEdgeInsets, () => ({
    __proto__: dart.getFields(edge_insets._MixedEdgeInsets.__proto__),
    [_left]: dart.finalFieldType(core.double),
    [_right]: dart.finalFieldType(core.double),
    [_start]: dart.finalFieldType(core.double),
    [_end]: dart.finalFieldType(core.double),
    [_top]: dart.finalFieldType(core.double),
    [_bottom]: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter/src/painting/edge_insets.dart", {
    "package:flutter/src/painting/edge_insets.dart": edge_insets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["edge_insets.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/edge_insets.dart.lib.js"}');
  // Exports:
  return {
    src__painting__edge_insets: edge_insets
  };
}));

//# sourceMappingURL=edge_insets.dart.lib.js.map
