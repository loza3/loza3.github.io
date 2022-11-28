define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__material__arc_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  var arc = Object.create(dart.library);
  var $abs = dartx.abs;
  var $sign = dartx.sign;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    OffsetN: () => (T.OffsetN = dart.constFn(dart.nullable(ui.Offset)))(),
    _DiagonalTodouble: () => (T._DiagonalTodouble = dart.constFn(dart.fnType(core.double, [arc._Diagonal])))(),
    RectN: () => (T.RectN = dart.constFn(dart.nullable(ui.Rect)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: arc._CornerId.prototype,
        [_Enum__name]: "topLeft",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: arc._CornerId.prototype,
        [_Enum__name]: "topRight",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: arc._CornerId.prototype,
        [_Enum__name]: "bottomLeft",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: arc._CornerId.prototype,
        [_Enum__name]: "bottomRight",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], arc._CornerId);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: arc._Diagonal.prototype,
        [endId$]: C[4] || CT.C4,
        [beginId$]: C[1] || CT.C1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: arc._Diagonal.prototype,
        [endId$]: C[1] || CT.C1,
        [beginId$]: C[4] || CT.C4
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: arc._Diagonal.prototype,
        [endId$]: C[3] || CT.C3,
        [beginId$]: C[2] || CT.C2
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: arc._Diagonal.prototype,
        [endId$]: C[2] || CT.C2,
        [beginId$]: C[3] || CT.C3
      });
    },
    get C5() {
      return C[5] = dart.constList([C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9], arc._Diagonal);
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/arc.dart",
    "package:flutter/src/material/arc.dart"
  ];
  var _dirty = dart.privateName(arc, "_dirty");
  var _center = dart.privateName(arc, "_center");
  var _radius = dart.privateName(arc, "_radius");
  var _beginAngle = dart.privateName(arc, "_beginAngle");
  var _endAngle = dart.privateName(arc, "_endAngle");
  var _initialize = dart.privateName(arc, "_initialize");
  arc.MaterialPointArcTween = class MaterialPointArcTween extends tween.Tween$(ui.Offset) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new arc.MaterialPointArcTween.new({begin: begin, end: end});
    }
    [_initialize]() {
      if (!(this.begin != null)) dart.assertFailed(null, I[0], 45, 12, "this.begin != null");
      if (!(this.end != null)) dart.assertFailed(null, I[0], 46, 12, "this.end != null");
      let begin = dart.nullCheck(this.begin);
      let end = dart.nullCheck(this.end);
      let delta = end['-'](begin);
      let deltaX = delta.dx[$abs]();
      let deltaY = delta.dy[$abs]();
      let distanceFromAtoB = delta.distance;
      let c = new ui.Offset.new(end.dx, begin.dy);
      const sweepAngle = () => {
        return 2.0 * math.asin(distanceFromAtoB / (2.0 * dart.nullCheck(this[_radius])));
      };
      dart.fn(sweepAngle, T.VoidTodouble());
      if (deltaX > 2 && deltaY > 2) {
        if (deltaX < deltaY) {
          this[_radius] = distanceFromAtoB * distanceFromAtoB / c['-'](begin).distance / 2.0;
          this[_center] = new ui.Offset.new(end.dx + dart.nullCheck(this[_radius]) * (begin.dx - end.dx)[$sign], end.dy);
          if (begin.dx < end.dx) {
            this[_beginAngle] = sweepAngle() * (begin.dy - end.dy)[$sign];
            this[_endAngle] = 0.0;
          } else {
            this[_beginAngle] = 3.141592653589793 + sweepAngle() * (end.dy - begin.dy)[$sign];
            this[_endAngle] = 3.141592653589793;
          }
        } else {
          this[_radius] = distanceFromAtoB * distanceFromAtoB / c['-'](end).distance / 2.0;
          this[_center] = new ui.Offset.new(begin.dx, begin.dy + (end.dy - begin.dy)[$sign] * dart.nullCheck(this[_radius]));
          if (begin.dy < end.dy) {
            this[_beginAngle] = -3.141592653589793 / 2.0;
            this[_endAngle] = dart.nullCheck(this[_beginAngle]) + sweepAngle() * (end.dx - begin.dx)[$sign];
          } else {
            this[_beginAngle] = 3.141592653589793 / 2.0;
            this[_endAngle] = dart.nullCheck(this[_beginAngle]) + sweepAngle() * (begin.dx - end.dx)[$sign];
          }
        }
        if (!(this[_beginAngle] != null)) dart.assertFailed(null, I[0], 82, 14, "_beginAngle != null");
        if (!(this[_endAngle] != null)) dart.assertFailed(null, I[0], 83, 14, "_endAngle != null");
      } else {
        this[_beginAngle] = null;
        this[_endAngle] = null;
      }
      this[_dirty] = false;
    }
    get center() {
      if (this.begin == null || this.end == null) {
        return null;
      }
      if (this[_dirty]) {
        this[_initialize]();
      }
      return this[_center];
    }
    get radius() {
      if (this.begin == null || this.end == null) {
        return null;
      }
      if (this[_dirty]) {
        this[_initialize]();
      }
      return this[_radius];
    }
    get beginAngle() {
      if (this.begin == null || this.end == null) {
        return null;
      }
      if (this[_dirty]) {
        this[_initialize]();
      }
      return this[_beginAngle];
    }
    get endAngle() {
      if (this.begin == null || this.end == null) {
        return null;
      }
      if (this[_dirty]) {
        this[_initialize]();
      }
      return this[_beginAngle];
    }
    set begin(value) {
      T.OffsetN().as(value);
      if (!dart.equals(value, this.begin)) {
        super.begin = value;
        this[_dirty] = true;
      }
    }
    get begin() {
      return super.begin;
    }
    set end(value) {
      T.OffsetN().as(value);
      if (!dart.equals(value, this.end)) {
        super.end = value;
        this[_dirty] = true;
      }
    }
    get end() {
      return super.end;
    }
    lerp(t) {
      if (this[_dirty]) {
        this[_initialize]();
      }
      if (t === 0.0) {
        return dart.nullCheck(this.begin);
      }
      if (t === 1.0) {
        return dart.nullCheck(this.end);
      }
      if (this[_beginAngle] == null || this[_endAngle] == null) {
        return dart.nullCheck(ui.Offset.lerp(this.begin, this.end, t));
      }
      let angle = dart.nullCheck(ui.lerpDouble(this[_beginAngle], this[_endAngle], t));
      let x = math.cos(angle) * dart.nullCheck(this[_radius]);
      let y = math.sin(angle) * dart.nullCheck(this[_radius]);
      return dart.nullCheck(this[_center])['+'](new ui.Offset.new(x, y));
    }
    toString() {
      return object.objectRuntimeType(this, "MaterialPointArcTween") + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + "; center=" + dart.str(this.center) + ", radius=" + dart.str(this.radius) + ", beginAngle=" + dart.str(this.beginAngle) + ", endAngle=" + dart.str(this.endAngle) + ")";
    }
  };
  (arc.MaterialPointArcTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[_dirty] = true;
    this[_center] = null;
    this[_radius] = null;
    this[_beginAngle] = null;
    this[_endAngle] = null;
    arc.MaterialPointArcTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = arc.MaterialPointArcTween.prototype;
  dart.addTypeTests(arc.MaterialPointArcTween);
  dart.addTypeCaches(arc.MaterialPointArcTween);
  dart.setMethodSignature(arc.MaterialPointArcTween, () => ({
    __proto__: dart.getMethods(arc.MaterialPointArcTween.__proto__),
    [_initialize]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(arc.MaterialPointArcTween, () => ({
    __proto__: dart.getGetters(arc.MaterialPointArcTween.__proto__),
    center: dart.nullable(ui.Offset),
    radius: dart.nullable(core.double),
    beginAngle: dart.nullable(core.double),
    endAngle: dart.nullable(core.double)
  }));
  dart.setSetterSignature(arc.MaterialPointArcTween, () => ({
    __proto__: dart.getSetters(arc.MaterialPointArcTween.__proto__),
    begin: dart.nullable(core.Object),
    end: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(arc.MaterialPointArcTween, I[1]);
  dart.setFieldSignature(arc.MaterialPointArcTween, () => ({
    __proto__: dart.getFields(arc.MaterialPointArcTween.__proto__),
    [_dirty]: dart.fieldType(core.bool),
    [_center]: dart.fieldType(dart.nullable(ui.Offset)),
    [_radius]: dart.fieldType(dart.nullable(core.double)),
    [_beginAngle]: dart.fieldType(dart.nullable(core.double)),
    [_endAngle]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(arc.MaterialPointArcTween, ['toString']);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  arc._CornerId = class _CornerId extends core._Enum {
    toString() {
      return "_CornerId." + this[_name];
    }
  };
  (arc._CornerId.new = function(index, name) {
    arc._CornerId.__proto__.new.call(this, index, name);
    ;
  }).prototype = arc._CornerId.prototype;
  dart.addTypeTests(arc._CornerId);
  dart.addTypeCaches(arc._CornerId);
  dart.setLibraryUri(arc._CornerId, I[1]);
  dart.setStaticFieldSignature(arc._CornerId, () => ['values', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  dart.defineExtensionMethods(arc._CornerId, ['toString']);
  dart.defineLazy(arc._CornerId, {
    /*arc._CornerId.values*/get values() {
      return C[0] || CT.C0;
    },
    /*arc._CornerId.topLeft*/get topLeft() {
      return C[1] || CT.C1;
    },
    /*arc._CornerId.topRight*/get topRight() {
      return C[2] || CT.C2;
    },
    /*arc._CornerId.bottomLeft*/get bottomLeft() {
      return C[3] || CT.C3;
    },
    /*arc._CornerId.bottomRight*/get bottomRight() {
      return C[4] || CT.C4;
    }
  }, false);
  var beginId$ = dart.privateName(arc, "_Diagonal.beginId");
  var endId$ = dart.privateName(arc, "_Diagonal.endId");
  arc._Diagonal = class _Diagonal extends core.Object {
    get beginId() {
      return this[beginId$];
    }
    set beginId(value) {
      super.beginId = value;
    }
    get endId() {
      return this[endId$];
    }
    set endId(value) {
      super.endId = value;
    }
    static ['_#new#tearOff'](beginId, endId) {
      return new arc._Diagonal.new(beginId, endId);
    }
  };
  (arc._Diagonal.new = function(beginId, endId) {
    this[beginId$] = beginId;
    this[endId$] = endId;
    ;
  }).prototype = arc._Diagonal.prototype;
  dart.addTypeTests(arc._Diagonal);
  dart.addTypeCaches(arc._Diagonal);
  dart.setLibraryUri(arc._Diagonal, I[1]);
  dart.setFieldSignature(arc._Diagonal, () => ({
    __proto__: dart.getFields(arc._Diagonal.__proto__),
    beginId: dart.finalFieldType(arc._CornerId),
    endId: dart.finalFieldType(arc._CornerId)
  }));
  var __MaterialRectArcTween__beginArc = dart.privateName(arc, "_#MaterialRectArcTween#_beginArc");
  var __MaterialRectArcTween__endArc = dart.privateName(arc, "_#MaterialRectArcTween#_endArc");
  var _diagonalSupport = dart.privateName(arc, "_diagonalSupport");
  var _beginArc = dart.privateName(arc, "_beginArc");
  var _cornerFor = dart.privateName(arc, "_cornerFor");
  var _endArc = dart.privateName(arc, "_endArc");
  arc.MaterialRectArcTween = class MaterialRectArcTween extends tween.RectTween {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new arc.MaterialRectArcTween.new({begin: begin, end: end});
    }
    [_initialize]() {
      if (!(this.begin != null)) dart.assertFailed(null, I[0], 260, 12, "begin != null");
      if (!(this.end != null)) dart.assertFailed(null, I[0], 261, 12, "end != null");
      let centersVector = dart.nullCheck(this.end).center['-'](dart.nullCheck(this.begin).center);
      let diagonal = arc._maxBy(arc._Diagonal, arc._allDiagonals, dart.fn(d => this[_diagonalSupport](centersVector, d), T._DiagonalTodouble()));
      this[_beginArc] = new arc.MaterialPointArcTween.new({begin: this[_cornerFor](dart.nullCheck(this.begin), diagonal.beginId), end: this[_cornerFor](dart.nullCheck(this.end), diagonal.beginId)});
      this[_endArc] = new arc.MaterialPointArcTween.new({begin: this[_cornerFor](dart.nullCheck(this.begin), diagonal.endId), end: this[_cornerFor](dart.nullCheck(this.end), diagonal.endId)});
      this[_dirty] = false;
    }
    [_diagonalSupport](centersVector, diagonal) {
      let delta = this[_cornerFor](dart.nullCheck(this.begin), diagonal.endId)['-'](this[_cornerFor](dart.nullCheck(this.begin), diagonal.beginId));
      let length = delta.distance;
      return centersVector.dx * delta.dx / length + centersVector.dy * delta.dy / length;
    }
    [_cornerFor](rect, id) {
      switch (id) {
        case C[1] || CT.C1:
          {
            return rect.topLeft;
          }
        case C[2] || CT.C2:
          {
            return rect.topRight;
          }
        case C[3] || CT.C3:
          {
            return rect.bottomLeft;
          }
        case C[4] || CT.C4:
          {
            return rect.bottomRight;
          }
      }
    }
    get beginArc() {
      if (this.begin == null) {
        return null;
      }
      if (this[_dirty]) {
        this[_initialize]();
      }
      return this[_beginArc];
    }
    get [_beginArc]() {
      let t2;
      t2 = this[__MaterialRectArcTween__beginArc];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_beginArc")) : t2;
    }
    set [_beginArc](library$32package$58flutter$47src$47material$47arc$46dart$58$58_beginArc$35param) {
      this[__MaterialRectArcTween__beginArc] = library$32package$58flutter$47src$47material$47arc$46dart$58$58_beginArc$35param;
    }
    get endArc() {
      if (this.end == null) {
        return null;
      }
      if (this[_dirty]) {
        this[_initialize]();
      }
      return this[_endArc];
    }
    get [_endArc]() {
      let t2;
      t2 = this[__MaterialRectArcTween__endArc];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_endArc")) : t2;
    }
    set [_endArc](library$32package$58flutter$47src$47material$47arc$46dart$58$58_endArc$35param) {
      this[__MaterialRectArcTween__endArc] = library$32package$58flutter$47src$47material$47arc$46dart$58$58_endArc$35param;
    }
    set begin(value) {
      T.RectN().as(value);
      if (!dart.equals(value, this.begin)) {
        super.begin = value;
        this[_dirty] = true;
      }
    }
    get begin() {
      return super.begin;
    }
    set end(value) {
      T.RectN().as(value);
      if (!dart.equals(value, this.end)) {
        super.end = value;
        this[_dirty] = true;
      }
    }
    get end() {
      return super.end;
    }
    lerp(t) {
      if (this[_dirty]) {
        this[_initialize]();
      }
      if (t === 0.0) {
        return dart.nullCheck(this.begin);
      }
      if (t === 1.0) {
        return dart.nullCheck(this.end);
      }
      return new ui.Rect.fromPoints(this[_beginArc].lerp(t), this[_endArc].lerp(t));
    }
    toString() {
      return object.objectRuntimeType(this, "MaterialRectArcTween") + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + "; beginArc=" + dart.str(this.beginArc) + ", endArc=" + dart.str(this.endArc) + ")";
    }
  };
  (arc.MaterialRectArcTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[_dirty] = true;
    this[__MaterialRectArcTween__beginArc] = null;
    this[__MaterialRectArcTween__endArc] = null;
    arc.MaterialRectArcTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = arc.MaterialRectArcTween.prototype;
  dart.addTypeTests(arc.MaterialRectArcTween);
  dart.addTypeCaches(arc.MaterialRectArcTween);
  dart.setMethodSignature(arc.MaterialRectArcTween, () => ({
    __proto__: dart.getMethods(arc.MaterialRectArcTween.__proto__),
    [_initialize]: dart.fnType(dart.void, []),
    [_diagonalSupport]: dart.fnType(core.double, [ui.Offset, arc._Diagonal]),
    [_cornerFor]: dart.fnType(ui.Offset, [ui.Rect, arc._CornerId]),
    lerp: dart.fnType(ui.Rect, [core.double])
  }));
  dart.setGetterSignature(arc.MaterialRectArcTween, () => ({
    __proto__: dart.getGetters(arc.MaterialRectArcTween.__proto__),
    beginArc: dart.nullable(arc.MaterialPointArcTween),
    [_beginArc]: arc.MaterialPointArcTween,
    endArc: dart.nullable(arc.MaterialPointArcTween),
    [_endArc]: arc.MaterialPointArcTween
  }));
  dart.setSetterSignature(arc.MaterialRectArcTween, () => ({
    __proto__: dart.getSetters(arc.MaterialRectArcTween.__proto__),
    [_beginArc]: arc.MaterialPointArcTween,
    [_endArc]: arc.MaterialPointArcTween,
    begin: dart.nullable(core.Object),
    end: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(arc.MaterialRectArcTween, I[1]);
  dart.setFieldSignature(arc.MaterialRectArcTween, () => ({
    __proto__: dart.getFields(arc.MaterialRectArcTween.__proto__),
    [_dirty]: dart.fieldType(core.bool),
    [__MaterialRectArcTween__beginArc]: dart.fieldType(dart.nullable(arc.MaterialPointArcTween)),
    [__MaterialRectArcTween__endArc]: dart.fieldType(dart.nullable(arc.MaterialPointArcTween))
  }));
  dart.defineExtensionMethods(arc.MaterialRectArcTween, ['toString']);
  var __MaterialRectCenterArcTween__centerArc = dart.privateName(arc, "_#MaterialRectCenterArcTween#_centerArc");
  var _centerArc = dart.privateName(arc, "_centerArc");
  arc.MaterialRectCenterArcTween = class MaterialRectCenterArcTween extends tween.RectTween {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new arc.MaterialRectCenterArcTween.new({begin: begin, end: end});
    }
    [_initialize]() {
      if (!(this.begin != null)) dart.assertFailed(null, I[0], 382, 12, "begin != null");
      if (!(this.end != null)) dart.assertFailed(null, I[0], 383, 12, "end != null");
      this[_centerArc] = new arc.MaterialPointArcTween.new({begin: dart.nullCheck(this.begin).center, end: dart.nullCheck(this.end).center});
      this[_dirty] = false;
    }
    get centerArc() {
      if (this.begin == null || this.end == null) {
        return null;
      }
      if (this[_dirty]) {
        this[_initialize]();
      }
      return this[_centerArc];
    }
    get [_centerArc]() {
      let t2;
      t2 = this[__MaterialRectCenterArcTween__centerArc];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_centerArc")) : t2;
    }
    set [_centerArc](library$32package$58flutter$47src$47material$47arc$46dart$58$58_centerArc$35param) {
      this[__MaterialRectCenterArcTween__centerArc] = library$32package$58flutter$47src$47material$47arc$46dart$58$58_centerArc$35param;
    }
    set begin(value) {
      T.RectN().as(value);
      if (!dart.equals(value, this.begin)) {
        super.begin = value;
        this[_dirty] = true;
      }
    }
    get begin() {
      return super.begin;
    }
    set end(value) {
      T.RectN().as(value);
      if (!dart.equals(value, this.end)) {
        super.end = value;
        this[_dirty] = true;
      }
    }
    get end() {
      return super.end;
    }
    lerp(t) {
      if (this[_dirty]) {
        this[_initialize]();
      }
      if (t === 0.0) {
        return dart.nullCheck(this.begin);
      }
      if (t === 1.0) {
        return dart.nullCheck(this.end);
      }
      let center = this[_centerArc].lerp(t);
      let width = dart.nullCheck(ui.lerpDouble(dart.nullCheck(this.begin).width, dart.nullCheck(this.end).width, t));
      let height = dart.nullCheck(ui.lerpDouble(dart.nullCheck(this.begin).height, dart.nullCheck(this.end).height, t));
      return new ui.Rect.fromLTWH(center.dx - width / 2.0, center.dy - height / 2.0, width, height);
    }
    toString() {
      return object.objectRuntimeType(this, "MaterialRectCenterArcTween") + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + "; centerArc=" + dart.str(this.centerArc) + ")";
    }
  };
  (arc.MaterialRectCenterArcTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[_dirty] = true;
    this[__MaterialRectCenterArcTween__centerArc] = null;
    arc.MaterialRectCenterArcTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = arc.MaterialRectCenterArcTween.prototype;
  dart.addTypeTests(arc.MaterialRectCenterArcTween);
  dart.addTypeCaches(arc.MaterialRectCenterArcTween);
  dart.setMethodSignature(arc.MaterialRectCenterArcTween, () => ({
    __proto__: dart.getMethods(arc.MaterialRectCenterArcTween.__proto__),
    [_initialize]: dart.fnType(dart.void, []),
    lerp: dart.fnType(ui.Rect, [core.double])
  }));
  dart.setGetterSignature(arc.MaterialRectCenterArcTween, () => ({
    __proto__: dart.getGetters(arc.MaterialRectCenterArcTween.__proto__),
    centerArc: dart.nullable(arc.MaterialPointArcTween),
    [_centerArc]: arc.MaterialPointArcTween
  }));
  dart.setSetterSignature(arc.MaterialRectCenterArcTween, () => ({
    __proto__: dart.getSetters(arc.MaterialRectCenterArcTween.__proto__),
    [_centerArc]: arc.MaterialPointArcTween,
    begin: dart.nullable(core.Object),
    end: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(arc.MaterialRectCenterArcTween, I[1]);
  dart.setFieldSignature(arc.MaterialRectCenterArcTween, () => ({
    __proto__: dart.getFields(arc.MaterialRectCenterArcTween.__proto__),
    [_dirty]: dart.fieldType(core.bool),
    [__MaterialRectCenterArcTween__centerArc]: dart.fieldType(dart.nullable(arc.MaterialPointArcTween))
  }));
  dart.defineExtensionMethods(arc.MaterialRectCenterArcTween, ['toString']);
  arc._maxBy = function _maxBy(T, input, keyFunc) {
    let maxValue = null;
    let maxValue$35isSet = false;
    function maxValue$35get() {
      return maxValue$35isSet ? maxValue : dart.throw(new _internal.LateError.localNI("maxValue"));
    }
    dart.fn(maxValue$35get, dart.fnType(T, []));
    function maxValue$35set(maxValue$35param) {
      maxValue$35isSet = true;
      return maxValue = maxValue$35param;
    }
    dart.fn(maxValue$35set, dart.fnType(dart.dynamic, [T]));
    let maxKey = null;
    for (let value of input) {
      let key = keyFunc(value);
      if (maxKey == null || key > dart.notNull(maxKey)) {
        maxValue$35set(value);
        maxKey = key;
      }
    }
    return maxValue$35get();
  };
  dart.defineLazy(arc, {
    /*arc._kOnAxisDelta*/get _kOnAxisDelta() {
      return 2;
    },
    /*arc._allDiagonals*/get _allDiagonals() {
      return C[5] || CT.C5;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/arc.dart", {
    "package:flutter/src/material/arc.dart": arc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["arc.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/arc.dart.lib.js"}');
  // Exports:
  return {
    src__material__arc: arc
  };
}));

//# sourceMappingURL=arc.dart.lib.js.map