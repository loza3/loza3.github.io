define(['dart_sdk', 'packages/flutter/src/painting/circle_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/painting/box_shadow.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/_network_image_web.dart'], (function load__packages__flutter__src__painting__shape_decoration_dart(dart_sdk, packages__flutter__src__painting__circle_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__painting__box_shadow$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting___network_image_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const circle_border = packages__flutter__src__painting__circle_border$46dart.src__painting__circle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const box_shadow = packages__flutter__src__painting__box_shadow$46dart.src__painting__box_shadow;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  var shape_decoration = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_equals = dartx._equals;
  var $length = dartx.length;
  var $map = dartx.map;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ShapeDecorationN: () => (T.ShapeDecorationN = dart.constFn(dart.nullable(shape_decoration.ShapeDecoration)))(),
    DiagnosticsPropertyOfGradient: () => (T.DiagnosticsPropertyOfGradient = dart.constFn(diagnostics.DiagnosticsProperty$(gradient.Gradient)))(),
    DiagnosticsPropertyOfDecorationImage: () => (T.DiagnosticsPropertyOfDecorationImage = dart.constFn(diagnostics.DiagnosticsProperty$(decoration_image.DecorationImage)))(),
    IterablePropertyOfBoxShadow: () => (T.IterablePropertyOfBoxShadow = dart.constFn(diagnostics.IterableProperty$(box_shadow.BoxShadow)))(),
    DiagnosticsPropertyOfShapeBorder: () => (T.DiagnosticsPropertyOfShapeBorder = dart.constFn(diagnostics.DiagnosticsProperty$(borders.ShapeBorder)))(),
    ListOfPaint: () => (T.ListOfPaint = dart.constFn(core.List$(ui.Paint)))(),
    BoxShadowToPaint: () => (T.BoxShadowToPaint = dart.constFn(dart.fnType(ui.Paint, [box_shadow.BoxShadow])))(),
    ListOfPath: () => (T.ListOfPath = dart.constFn(core.List$(ui.Path)))(),
    BoxShadowToPath: () => (T.BoxShadowToPath = dart.constFn(dart.fnType(ui.Path, [box_shadow.BoxShadow])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C2() {
      return C[2] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[2] || CT.C2,
        [BorderSide_style]: C[3] || CT.C3,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[4] || CT.C4
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: circle_border.CircleBorder.prototype,
        [OutlinedBorder_side]: C[1] || CT.C1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "circle",
        [_Enum_index]: 1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C[1] || CT.C1,
        [Border_bottom]: C[1] || CT.C1,
        [Border_right]: C[1] || CT.C1,
        [Border_top]: C[1] || CT.C1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "rectangle",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/shape_decoration.dart",
    "package:flutter/src/painting/shape_decoration.dart"
  ];
  var color$ = dart.privateName(shape_decoration, "ShapeDecoration.color");
  var gradient$ = dart.privateName(shape_decoration, "ShapeDecoration.gradient");
  var image$ = dart.privateName(shape_decoration, "ShapeDecoration.image");
  var shadows$ = dart.privateName(shape_decoration, "ShapeDecoration.shadows");
  var shape$ = dart.privateName(shape_decoration, "ShapeDecoration.shape");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Border_left = dart.privateName(box_border, "Border.left");
  var Border_bottom = dart.privateName(box_border, "Border.bottom");
  var Border_right = dart.privateName(box_border, "Border.right");
  var Border_top = dart.privateName(box_border, "Border.top");
  shape_decoration.ShapeDecoration = class ShapeDecoration extends decoration.Decoration {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get shadows() {
      return this[shadows$];
    }
    set shadows(value) {
      super.shadows = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let gradient = opts && 'gradient' in opts ? opts.gradient : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      return new shape_decoration.ShapeDecoration.new({color: color, image: image, gradient: gradient, shadows: shadows, shape: shape});
    }
    static fromBoxDecoration(source) {
      let t0, t0$, t0$0;
      let shape = null;
      if (!(source.shape !== null)) dart.assertFailed(null, I[0], 94, 12, "source.shape != null");
      switch (source.shape) {
        case C[5] || CT.C5:
          {
            if (source.border != null) {
              if (!dart.nullCheck(source.border).isUniform) dart.assertFailed(null, I[0], 98, 18, "source.border!.isUniform");
              shape = new circle_border.CircleBorder.new({side: dart.nullCheck(source.border).top});
            } else {
              shape = C[0] || CT.C0;
            }
            break;
          }
        case C[7] || CT.C7:
          {
            if (source.borderRadius != null) {
              if (!(source.border == null || dart.nullCheck(source.border).isUniform)) dart.assertFailed(null, I[0], 106, 18, "source.border == null || source.border!.isUniform");
              shape = new rounded_rectangle_border.RoundedRectangleBorder.new({side: (t0$ = (t0 = source.border, t0 == null ? null : t0.top), t0$ == null ? borders.BorderSide.none : t0$), borderRadius: dart.nullCheck(source.borderRadius)});
            } else {
              shape = (t0$0 = source.border, t0$0 == null ? C[6] || CT.C6 : t0$0);
            }
            break;
          }
      }
      return new shape_decoration.ShapeDecoration.new({color: source.color, image: source.image, gradient: source.gradient, shadows: source.boxShadow, shape: shape});
    }
    static ['_#fromBoxDecoration#tearOff'](source) {
      return shape_decoration.ShapeDecoration.fromBoxDecoration(source);
    }
    getClipPath(rect, textDirection) {
      return this.shape.getOuterPath(rect, {textDirection: textDirection});
    }
    get padding() {
      return this.shape.dimensions;
    }
    get isComplex() {
      return this.shadows != null;
    }
    lerpFrom(a, t) {
      if (box_decoration.BoxDecoration.is(a)) {
        return shape_decoration.ShapeDecoration.lerp(shape_decoration.ShapeDecoration.fromBoxDecoration(a), this, t);
      } else if (a == null || shape_decoration.ShapeDecoration.is(a)) {
        return shape_decoration.ShapeDecoration.lerp(T.ShapeDecorationN().as(a), this, t);
      }
      return T.ShapeDecorationN().as(super.lerpFrom(a, t));
    }
    lerpTo(b, t) {
      if (box_decoration.BoxDecoration.is(b)) {
        return shape_decoration.ShapeDecoration.lerp(this, shape_decoration.ShapeDecoration.fromBoxDecoration(b), t);
      } else if (b == null || shape_decoration.ShapeDecoration.is(b)) {
        return shape_decoration.ShapeDecoration.lerp(this, T.ShapeDecorationN().as(b), t);
      }
      return T.ShapeDecorationN().as(super.lerpTo(b, t));
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      if (!(t !== null)) dart.assertFailed(null, I[0], 230, 12, "t != null");
      if (a == null && b == null) {
        return null;
      }
      if (a != null && b != null) {
        if (t === 0.0) {
          return a;
        }
        if (t === 1.0) {
          return b;
        }
      }
      return new shape_decoration.ShapeDecoration.new({color: ui.Color.lerp((t0 = a, t0 == null ? null : t0.color), (t0$ = b, t0$ == null ? null : t0$.color), t), gradient: gradient.Gradient.lerp((t0$0 = a, t0$0 == null ? null : t0$0.gradient), (t0$1 = b, t0$1 == null ? null : t0$1.gradient), t), image: t < 0.5 ? dart.nullCheck(a).image : dart.nullCheck(b).image, shadows: box_shadow.BoxShadow.lerpList((t0$2 = a, t0$2 == null ? null : t0$2.shadows), (t0$3 = b, t0$3 == null ? null : t0$3.shadows), t), shape: dart.nullCheck(borders.ShapeBorder.lerp((t0$4 = a, t0$4 == null ? null : t0$4.shape), (t0$5 = b, t0$5 == null ? null : t0$5.shape), t))});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return shape_decoration.ShapeDecoration.is(other) && dart.equals(other.color, this.color) && dart.equals(other.gradient, this.gradient) && dart.equals(other.image, this.image) && collections.listEquals(box_shadow.BoxShadow, other.shadows, this.shadows) && other.shape[$_equals](this.shape);
    }
    get hashCode() {
      return core.Object.hash(this.color, this.gradient, this.image, this.shape, this.shadows == null ? null : core.Object.hashAll(dart.nullCheck(this.shadows)));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.defaultDiagnosticsTreeStyle = diagnostics.DiagnosticsTreeStyle.whitespace;
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfGradient()).new("gradient", this.gradient, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfDecorationImage()).new("image", this.image, {defaultValue: null}));
      properties.add(new (T.IterablePropertyOfBoxShadow()).new("shadows", this.shadows, {defaultValue: null, style: diagnostics.DiagnosticsTreeStyle.whitespace}));
      properties.add(new (T.DiagnosticsPropertyOfShapeBorder()).new("shape", this.shape));
    }
    hitTest(size, position, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this.shape.getOuterPath(ui.Offset.zero['&'](size), {textDirection: textDirection}).contains(position);
    }
    createBoxPainter(onChanged = null) {
      if (!(onChanged != null || this.image == null)) dart.assertFailed(null, I[0], 294, 12, "onChanged != null || image == null");
      return new shape_decoration._ShapeDecorationPainter.new(this, dart.nullCheck(onChanged));
    }
  };
  (shape_decoration.ShapeDecoration.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    this[color$] = color;
    this[image$] = image;
    this[gradient$] = gradient;
    this[shadows$] = shadows;
    this[shape$] = shape;
    if (!!(color != null && gradient != null)) dart.assertFailed(null, I[0], 79, 15, "!(color != null && gradient != null)");
    if (!(shape !== null)) dart.assertFailed(null, I[0], 80, 15, "shape != null");
    shape_decoration.ShapeDecoration.__proto__.new.call(this);
    ;
  }).prototype = shape_decoration.ShapeDecoration.prototype;
  dart.addTypeTests(shape_decoration.ShapeDecoration);
  dart.addTypeCaches(shape_decoration.ShapeDecoration);
  dart.setMethodSignature(shape_decoration.ShapeDecoration, () => ({
    __proto__: dart.getMethods(shape_decoration.ShapeDecoration.__proto__),
    lerpFrom: dart.fnType(dart.nullable(shape_decoration.ShapeDecoration), [dart.nullable(decoration.Decoration), core.double]),
    lerpTo: dart.fnType(dart.nullable(shape_decoration.ShapeDecoration), [dart.nullable(decoration.Decoration), core.double]),
    createBoxPainter: dart.fnType(decoration.BoxPainter, [], [dart.nullable(dart.fnType(dart.void, []))])
  }));
  dart.setStaticMethodSignature(shape_decoration.ShapeDecoration, () => ['fromBoxDecoration', 'lerp']);
  dart.setGetterSignature(shape_decoration.ShapeDecoration, () => ({
    __proto__: dart.getGetters(shape_decoration.ShapeDecoration.__proto__),
    padding: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(shape_decoration.ShapeDecoration, I[1]);
  dart.setFieldSignature(shape_decoration.ShapeDecoration, () => ({
    __proto__: dart.getFields(shape_decoration.ShapeDecoration.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    gradient: dart.finalFieldType(dart.nullable(gradient.Gradient)),
    image: dart.finalFieldType(dart.nullable(decoration_image.DecorationImage)),
    shadows: dart.finalFieldType(dart.nullable(core.List$(box_shadow.BoxShadow))),
    shape: dart.finalFieldType(borders.ShapeBorder)
  }));
  dart.defineExtensionMethods(shape_decoration.ShapeDecoration, ['_equals']);
  dart.defineExtensionAccessors(shape_decoration.ShapeDecoration, ['hashCode']);
  var _lastRect = dart.privateName(shape_decoration, "_lastRect");
  var _lastTextDirection = dart.privateName(shape_decoration, "_lastTextDirection");
  var ___ShapeDecorationPainter__outerPath = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_outerPath");
  var _innerPath = dart.privateName(shape_decoration, "_innerPath");
  var _interiorPaint = dart.privateName(shape_decoration, "_interiorPaint");
  var _shadowCount = dart.privateName(shape_decoration, "_shadowCount");
  var ___ShapeDecorationPainter__shadowPaths = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_shadowPaths");
  var ___ShapeDecorationPainter__shadowPaints = dart.privateName(shape_decoration, "_#_ShapeDecorationPainter#_shadowPaints");
  var _imagePainter = dart.privateName(shape_decoration, "_imagePainter");
  var _decoration$ = dart.privateName(shape_decoration, "_decoration");
  var _outerPath = dart.privateName(shape_decoration, "_outerPath");
  var _shadowPaths = dart.privateName(shape_decoration, "_shadowPaths");
  var _shadowPaints = dart.privateName(shape_decoration, "_shadowPaints");
  var _precache = dart.privateName(shape_decoration, "_precache");
  var _paintShadows = dart.privateName(shape_decoration, "_paintShadows");
  var _paintInterior = dart.privateName(shape_decoration, "_paintInterior");
  var _paintImage = dart.privateName(shape_decoration, "_paintImage");
  shape_decoration._ShapeDecorationPainter = class _ShapeDecorationPainter extends decoration.BoxPainter {
    static ['_#new#tearOff'](_decoration, onChanged) {
      return new shape_decoration._ShapeDecorationPainter.new(_decoration, onChanged);
    }
    get [_outerPath]() {
      let t0;
      t0 = this[___ShapeDecorationPainter__outerPath];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_outerPath")) : t0;
    }
    set [_outerPath](library$32package$58flutter$47src$47painting$47shape_decoration$46dart$58$58_outerPath$35param) {
      this[___ShapeDecorationPainter__outerPath] = library$32package$58flutter$47src$47painting$47shape_decoration$46dart$58$58_outerPath$35param;
    }
    get [_shadowPaths]() {
      let t0;
      t0 = this[___ShapeDecorationPainter__shadowPaths];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_shadowPaths")) : t0;
    }
    set [_shadowPaths](library$32package$58flutter$47src$47painting$47shape_decoration$46dart$58$58_shadowPaths$35param) {
      this[___ShapeDecorationPainter__shadowPaths] = library$32package$58flutter$47src$47painting$47shape_decoration$46dart$58$58_shadowPaths$35param;
    }
    get [_shadowPaints]() {
      let t0;
      t0 = this[___ShapeDecorationPainter__shadowPaints];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_shadowPaints")) : t0;
    }
    set [_shadowPaints](library$32package$58flutter$47src$47painting$47shape_decoration$46dart$58$58_shadowPaints$35param) {
      this[___ShapeDecorationPainter__shadowPaints] = library$32package$58flutter$47src$47painting$47shape_decoration$46dart$58$58_shadowPaints$35param;
    }
    get onChanged() {
      return dart.nullCheck(super.onChanged);
    }
    [_precache](rect, textDirection) {
      if (!(rect !== null)) dart.assertFailed(null, I[0], 320, 12, "rect != null");
      if (rect._equals(this[_lastRect]) && textDirection == this[_lastTextDirection]) {
        return;
      }
      if (this[_interiorPaint] == null && (this[_decoration$].color != null || this[_decoration$].gradient != null)) {
        this[_interiorPaint] = ui.Paint.new();
        if (this[_decoration$].color != null) {
          dart.nullCheck(this[_interiorPaint]).color = dart.nullCheck(this[_decoration$].color);
        }
      }
      if (this[_decoration$].gradient != null) {
        dart.nullCheck(this[_interiorPaint]).shader = dart.nullCheck(this[_decoration$].gradient).createShader(rect, {textDirection: textDirection});
      }
      if (this[_decoration$].shadows != null) {
        if (this[_shadowCount] == null) {
          this[_shadowCount] = dart.nullCheck(this[_decoration$].shadows)[$length];
          this[_shadowPaints] = (() => {
            let t0 = T.ListOfPaint().of(dart.nullCheck(this[_decoration$].shadows)[$map](ui.Paint, dart.fn(shadow => shadow.toPaint(), T.BoxShadowToPaint())));
            return t0;
          })();
        }
        this[_shadowPaths] = (() => {
          let t1 = T.ListOfPath().of(dart.nullCheck(this[_decoration$].shadows)[$map](ui.Path, dart.fn(shadow => this[_decoration$].shape.getOuterPath(rect.shift(shadow.offset).inflate(shadow.spreadRadius), {textDirection: textDirection}), T.BoxShadowToPath())));
          return t1;
        })();
      }
      if (this[_interiorPaint] != null || this[_shadowCount] != null) {
        this[_outerPath] = this[_decoration$].shape.getOuterPath(rect, {textDirection: textDirection});
      }
      if (this[_decoration$].image != null) {
        this[_innerPath] = this[_decoration$].shape.getInnerPath(rect, {textDirection: textDirection});
      }
      this[_lastRect] = rect;
      this[_lastTextDirection] = textDirection;
    }
    [_paintShadows](canvas) {
      if (this[_shadowCount] != null) {
        for (let index = 0; index < dart.nullCheck(this[_shadowCount]); index = index + 1) {
          canvas.drawPath(this[_shadowPaths][$_get](index), this[_shadowPaints][$_get](index));
        }
      }
    }
    [_paintInterior](canvas) {
      if (this[_interiorPaint] != null) {
        canvas.drawPath(this[_outerPath], dart.nullCheck(this[_interiorPaint]));
      }
    }
    [_paintImage](canvas, configuration) {
      if (this[_decoration$].image == null) {
        return;
      }
      this[_imagePainter] == null ? this[_imagePainter] = dart.nullCheck(this[_decoration$].image).createPainter(this.onChanged) : null;
      dart.nullCheck(this[_imagePainter]).paint(canvas, dart.nullCheck(this[_lastRect]), this[_innerPath], configuration);
    }
    dispose() {
      let t2;
      t2 = this[_imagePainter];
      t2 == null ? null : t2.dispose();
      super.dispose();
    }
    paint(canvas, offset, configuration) {
      if (!(configuration !== null)) dart.assertFailed(null, I[0], 393, 12, "configuration != null");
      if (!(configuration.size != null)) dart.assertFailed(null, I[0], 394, 12, "configuration.size != null");
      let rect = offset['&'](dart.nullCheck(configuration.size));
      let textDirection = configuration.textDirection;
      this[_precache](rect, textDirection);
      this[_paintShadows](canvas);
      this[_paintInterior](canvas);
      this[_paintImage](canvas, configuration);
      this[_decoration$].shape.paint(canvas, rect, {textDirection: textDirection});
    }
  };
  (shape_decoration._ShapeDecorationPainter.new = function(_decoration, onChanged) {
    this[_lastRect] = null;
    this[_lastTextDirection] = null;
    this[___ShapeDecorationPainter__outerPath] = null;
    this[_innerPath] = null;
    this[_interiorPaint] = null;
    this[_shadowCount] = null;
    this[___ShapeDecorationPainter__shadowPaths] = null;
    this[___ShapeDecorationPainter__shadowPaints] = null;
    this[_imagePainter] = null;
    this[_decoration$] = _decoration;
    if (!(_decoration !== null)) dart.assertFailed(null, I[0], 302, 14, "_decoration != null");
    shape_decoration._ShapeDecorationPainter.__proto__.new.call(this, onChanged);
    ;
  }).prototype = shape_decoration._ShapeDecorationPainter.prototype;
  dart.addTypeTests(shape_decoration._ShapeDecorationPainter);
  dart.addTypeCaches(shape_decoration._ShapeDecorationPainter);
  dart.setMethodSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getMethods(shape_decoration._ShapeDecorationPainter.__proto__),
    [_precache]: dart.fnType(dart.void, [ui.Rect, dart.nullable(ui.TextDirection)]),
    [_paintShadows]: dart.fnType(dart.void, [ui.Canvas]),
    [_paintInterior]: dart.fnType(dart.void, [ui.Canvas]),
    [_paintImage]: dart.fnType(dart.void, [ui.Canvas, image_provider.ImageConfiguration]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setGetterSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getGetters(shape_decoration._ShapeDecorationPainter.__proto__),
    [_outerPath]: ui.Path,
    [_shadowPaths]: core.List$(ui.Path),
    [_shadowPaints]: core.List$(ui.Paint),
    onChanged: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getSetters(shape_decoration._ShapeDecorationPainter.__proto__),
    [_outerPath]: ui.Path,
    [_shadowPaths]: core.List$(ui.Path),
    [_shadowPaints]: core.List$(ui.Paint)
  }));
  dart.setLibraryUri(shape_decoration._ShapeDecorationPainter, I[1]);
  dart.setFieldSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getFields(shape_decoration._ShapeDecorationPainter.__proto__),
    [_decoration$]: dart.finalFieldType(shape_decoration.ShapeDecoration),
    [_lastRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_lastTextDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [___ShapeDecorationPainter__outerPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_innerPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_interiorPaint]: dart.fieldType(dart.nullable(ui.Paint)),
    [_shadowCount]: dart.fieldType(dart.nullable(core.int)),
    [___ShapeDecorationPainter__shadowPaths]: dart.fieldType(dart.nullable(core.List$(ui.Path))),
    [___ShapeDecorationPainter__shadowPaints]: dart.fieldType(dart.nullable(core.List$(ui.Paint))),
    [_imagePainter]: dart.fieldType(dart.nullable(decoration_image.DecorationImagePainter))
  }));
  dart.trackLibraries("packages/flutter/src/painting/shape_decoration.dart", {
    "package:flutter/src/painting/shape_decoration.dart": shape_decoration
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shape_decoration.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/shape_decoration.dart.lib.js"}');
  // Exports:
  return {
    src__painting__shape_decoration: shape_decoration
  };
}));

//# sourceMappingURL=shape_decoration.dart.lib.js.map