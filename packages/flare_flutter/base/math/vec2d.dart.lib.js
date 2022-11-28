define(['dart_sdk'], (function load__packages__flare_flutter__base__math__vec2d_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var vec2d = Object.create(dart.library);
  var transform_components = Object.create(dart.library);
  var mat2d = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toString = dartx.toString;
  var $sign = dartx.sign;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flare_flutter/base/math/vec2d.dart",
    "package:flare_flutter/base/math/transform_components.dart",
    "package:flare_flutter/base/math/mat2d.dart"
  ];
  var _buffer = dart.privateName(vec2d, "_buffer");
  vec2d.Vec2D = class Vec2D extends core.Object {
    get values() {
      return this[_buffer];
    }
    _get(index) {
      return this[_buffer][$_get](index);
    }
    _set(index, value$) {
      let value = value$;
      this[_buffer][$_set](index, value);
      return value$;
    }
    static ['_#new#tearOff']() {
      return new vec2d.Vec2D.new();
    }
    static ['_#clone#tearOff'](copy) {
      return new vec2d.Vec2D.clone(copy);
    }
    static ['_#fromValues#tearOff'](x, y) {
      return new vec2d.Vec2D.fromValues(x, y);
    }
    static copy(o, a) {
      o._set(0, a._get(0));
      o._set(1, a._get(1));
    }
    static copyFromList(o, a) {
      o._set(0, a[$_get](0));
      o._set(1, a[$_get](1));
    }
    static transformMat2D(o, a, m) {
      let x = a._get(0);
      let y = a._get(1);
      o._set(0, m._get(0) * x + m._get(2) * y + m._get(4));
      o._set(1, m._get(1) * x + m._get(3) * y + m._get(5));
      return o;
    }
    static transformMat2(o, a, m) {
      let x = a._get(0);
      let y = a._get(1);
      o._set(0, m._get(0) * x + m._get(2) * y);
      o._set(1, m._get(1) * x + m._get(3) * y);
      return o;
    }
    static subtract(o, a, b) {
      o._set(0, a._get(0) - b._get(0));
      o._set(1, a._get(1) - b._get(1));
      return o;
    }
    static add(o, a, b) {
      o._set(0, a._get(0) + b._get(0));
      o._set(1, a._get(1) + b._get(1));
      return o;
    }
    static scale(o, a, scale) {
      o._set(0, a._get(0) * scale);
      o._set(1, a._get(1) * scale);
      return o;
    }
    static lerp(o, a, b, f) {
      let ax = a._get(0);
      let ay = a._get(1);
      o._set(0, ax + f * (b._get(0) - ax));
      o._set(1, ay + f * (b._get(1) - ay));
      return o;
    }
    static length(a) {
      let x = a._get(0);
      let y = a._get(1);
      return math.sqrt(x * x + y * y);
    }
    static squaredLength(a) {
      let x = a._get(0);
      let y = a._get(1);
      return x * x + y * y;
    }
    static distance(a, b) {
      let x = b._get(0) - a._get(0);
      let y = b._get(1) - a._get(1);
      return math.sqrt(x * x + y * y);
    }
    static squaredDistance(a, b) {
      let x = b._get(0) - a._get(0);
      let y = b._get(1) - a._get(1);
      return x * x + y * y;
    }
    static negate(result, a) {
      result._set(0, -1 * a._get(0));
      result._set(1, -1 * a._get(1));
      return result;
    }
    static normalize(result, a) {
      let x = a._get(0);
      let y = a._get(1);
      let len = x * x + y * y;
      if (len > 0.0) {
        len = 1.0 / math.sqrt(len);
        result._set(0, a._get(0) * len);
        result._set(1, a._get(1) * len);
      }
    }
    static dot(a, b) {
      return a._get(0) * b._get(0) + a._get(1) * b._get(1);
    }
    static scaleAndAdd(result, a, b, scale) {
      result._set(0, a._get(0) + b._get(0) * scale);
      result._set(1, a._get(1) + b._get(1) * scale);
      return result;
    }
    toString() {
      return dart.str(this[_buffer][$_get](0)) + ", " + dart.str(this[_buffer][$_get](1));
    }
  };
  (vec2d.Vec2D.new = function() {
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([0.0, 0.0]));
    ;
  }).prototype = vec2d.Vec2D.prototype;
  (vec2d.Vec2D.clone = function(copy) {
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(copy[_buffer]);
    ;
  }).prototype = vec2d.Vec2D.prototype;
  (vec2d.Vec2D.fromValues = function(x, y) {
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([x, y]));
    ;
  }).prototype = vec2d.Vec2D.prototype;
  dart.addTypeTests(vec2d.Vec2D);
  dart.addTypeCaches(vec2d.Vec2D);
  dart.setMethodSignature(vec2d.Vec2D, () => ({
    __proto__: dart.getMethods(vec2d.Vec2D.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double])
  }));
  dart.setStaticMethodSignature(vec2d.Vec2D, () => ['copy', 'copyFromList', 'transformMat2D', 'transformMat2', 'subtract', 'add', 'scale', 'lerp', 'length', 'squaredLength', 'distance', 'squaredDistance', 'negate', 'normalize', 'dot', 'scaleAndAdd']);
  dart.setGetterSignature(vec2d.Vec2D, () => ({
    __proto__: dart.getGetters(vec2d.Vec2D.__proto__),
    values: typed_data.Float32List
  }));
  dart.setLibraryUri(vec2d.Vec2D, I[0]);
  dart.setFieldSignature(vec2d.Vec2D, () => ({
    __proto__: dart.getFields(vec2d.Vec2D.__proto__),
    [_buffer]: dart.finalFieldType(typed_data.Float32List)
  }));
  dart.defineExtensionMethods(vec2d.Vec2D, ['toString']);
  var _buffer$ = dart.privateName(transform_components, "_buffer");
  transform_components.TransformComponents = class TransformComponents extends core.Object {
    static ['_#new#tearOff']() {
      return new transform_components.TransformComponents.new();
    }
    static ['_#clone#tearOff'](copy) {
      return new transform_components.TransformComponents.clone(copy);
    }
    get rotation() {
      return this[_buffer$][$_get](4);
    }
    set rotation(value) {
      this[_buffer$][$_set](4, value);
    }
    get scale() {
      return new vec2d.Vec2D.fromValues(this[_buffer$][$_get](2), this[_buffer$][$_get](3));
    }
    get scaleX() {
      return this[_buffer$][$_get](2);
    }
    set scaleX(value) {
      this[_buffer$][$_set](2, value);
    }
    get scaleY() {
      return this[_buffer$][$_get](3);
    }
    set scaleY(value) {
      this[_buffer$][$_set](3, value);
    }
    get skew() {
      return this[_buffer$][$_get](5);
    }
    set skew(value) {
      this[_buffer$][$_set](5, value);
    }
    get translation() {
      return new vec2d.Vec2D.fromValues(this[_buffer$][$_get](0), this[_buffer$][$_get](1));
    }
    get values() {
      return this[_buffer$];
    }
    get x() {
      return this[_buffer$][$_get](0);
    }
    set x(value) {
      this[_buffer$][$_set](0, value);
    }
    get y() {
      return this[_buffer$][$_get](1);
    }
    set y(value) {
      this[_buffer$][$_set](1, value);
    }
    _get(index) {
      return this[_buffer$][$_get](index);
    }
    _set(index, value$) {
      let value = value$;
      this[_buffer$][$_set](index, value);
      return value$;
    }
  };
  (transform_components.TransformComponents.new = function() {
    this[_buffer$] = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([1.0, 0.0, 0.0, 1.0, 0.0, 0.0]));
    ;
  }).prototype = transform_components.TransformComponents.prototype;
  (transform_components.TransformComponents.clone = function(copy) {
    this[_buffer$] = _native_typed_data.NativeFloat32List.fromList(copy.values);
    ;
  }).prototype = transform_components.TransformComponents.prototype;
  dart.addTypeTests(transform_components.TransformComponents);
  dart.addTypeCaches(transform_components.TransformComponents);
  dart.setMethodSignature(transform_components.TransformComponents, () => ({
    __proto__: dart.getMethods(transform_components.TransformComponents.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double])
  }));
  dart.setGetterSignature(transform_components.TransformComponents, () => ({
    __proto__: dart.getGetters(transform_components.TransformComponents.__proto__),
    rotation: core.double,
    scale: vec2d.Vec2D,
    scaleX: core.double,
    scaleY: core.double,
    skew: core.double,
    translation: vec2d.Vec2D,
    values: typed_data.Float32List,
    x: core.double,
    y: core.double
  }));
  dart.setSetterSignature(transform_components.TransformComponents, () => ({
    __proto__: dart.getSetters(transform_components.TransformComponents.__proto__),
    rotation: core.double,
    scaleX: core.double,
    scaleY: core.double,
    skew: core.double,
    x: core.double,
    y: core.double
  }));
  dart.setLibraryUri(transform_components.TransformComponents, I[1]);
  dart.setFieldSignature(transform_components.TransformComponents, () => ({
    __proto__: dart.getFields(transform_components.TransformComponents.__proto__),
    [_buffer$]: dart.finalFieldType(typed_data.Float32List)
  }));
  var _buffer$0 = dart.privateName(mat2d, "_buffer");
  mat2d.Mat2D = class Mat2D extends core.Object {
    static ['_#new#tearOff']() {
      return new mat2d.Mat2D.new();
    }
    static ['_#clone#tearOff'](copy) {
      return new mat2d.Mat2D.clone(copy);
    }
    get mat4() {
      return _native_typed_data.NativeFloat64List.fromList(T.JSArrayOfdouble().of([this[_buffer$0][$_get](0), this[_buffer$0][$_get](1), 0.0, 0.0, this[_buffer$0][$_get](2), this[_buffer$0][$_get](3), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, this[_buffer$0][$_get](4), this[_buffer$0][$_get](5), 0.0, 1.0]));
    }
    get values() {
      return this[_buffer$0];
    }
    _get(index) {
      return this[_buffer$0][$_get](index);
    }
    _set(index, value$) {
      let value = value$;
      this[_buffer$0][$_set](index, value);
      return value$;
    }
    toString() {
      return this[_buffer$0][$toString]();
    }
    static areEqual(a, b) {
      return a._get(0) === b._get(0) && a._get(1) === b._get(1) && a._get(2) === b._get(2) && a._get(3) === b._get(3) && a._get(4) === b._get(4) && a._get(5) === b._get(5);
    }
    static cCopy(o, a) {
      o._set(0, a._get(0));
      o._set(1, a._get(1));
      o._set(2, a._get(2));
      o._set(3, a._get(3));
      o._set(4, a._get(4));
      o._set(5, a._get(5));
    }
    static compose(m, result) {
      let r = result._get(4);
      if (r !== 0.0) {
        mat2d.Mat2D.fromRotation(m, r);
      } else {
        mat2d.Mat2D.identity(m);
      }
      m._set(4, result._get(0));
      m._set(5, result._get(1));
      mat2d.Mat2D.scale(m, m, result.scale);
      let sk = result._get(5);
      if (sk !== 0.0) {
        m._set(2, m._get(0) * sk + m._get(2));
        m._set(3, m._get(1) * sk + m._get(3));
      }
    }
    static copy(o, f) {
      o._set(0, f._get(0));
      o._set(1, f._get(1));
      o._set(2, f._get(2));
      o._set(3, f._get(3));
      o._set(4, f._get(4));
      o._set(5, f._get(5));
    }
    static copyFromList(o, f) {
      o._set(0, f[$_get](0));
      o._set(1, f[$_get](1));
      o._set(2, f[$_get](2));
      o._set(3, f[$_get](3));
      o._set(4, f[$_get](4));
      o._set(5, f[$_get](5));
    }
    static decompose(m, result) {
      let m0 = m._get(0);
      let m1 = m._get(1);
      let m2 = m._get(2);
      let m3 = m._get(3);
      let rotation = math.atan2(m1, m0);
      let denom = m0 * m0 + m1 * m1;
      let scaleX = math.sqrt(denom);
      let scaleY = scaleX === 0 ? 0.0 : (m0 * m3 - m2 * m1) / scaleX;
      let skewX = math.atan2(m0 * m2 + m1 * m3, denom);
      result._set(0, m._get(4));
      result._set(1, m._get(5));
      result._set(2, scaleX);
      result._set(3, scaleY);
      result._set(4, rotation);
      result._set(5, skewX);
    }
    static fromRotation(o, rad) {
      let s = math.sin(rad);
      let c = math.cos(rad);
      o._set(0, c);
      o._set(1, s);
      o._set(2, -s);
      o._set(3, c);
      o._set(4, 0.0);
      o._set(5, 0.0);
    }
    static getScale(m, s) {
      let x = m._get(0);
      let y = m._get(1);
      s._set(0, x[$sign] * math.sqrt(x * x + y * y));
      x = m._get(2);
      y = m._get(3);
      s._set(1, y[$sign] * math.sqrt(x * x + y * y));
    }
    static identity(mat) {
      mat._set(0, 1.0);
      mat._set(1, 0.0);
      mat._set(2, 0.0);
      mat._set(3, 1.0);
      mat._set(4, 0.0);
      mat._set(5, 0.0);
    }
    static invert(o, a) {
      let aa = a._get(0);
      let ab = a._get(1);
      let ac = a._get(2);
      let ad = a._get(3);
      let atx = a._get(4);
      let aty = a._get(5);
      let det = aa * ad - ab * ac;
      if (det === 0.0) {
        return false;
      }
      det = 1.0 / det;
      o._set(0, ad * det);
      o._set(1, -ab * det);
      o._set(2, -ac * det);
      o._set(3, aa * det);
      o._set(4, (ac * aty - ad * atx) * det);
      o._set(5, (ab * atx - aa * aty) * det);
      return true;
    }
    static multiply(o, a, b) {
      let a0 = a._get(0);
      let a1 = a._get(1);
      let a2 = a._get(2);
      let a3 = a._get(3);
      let a4 = a._get(4);
      let a5 = a._get(5);
      let b0 = b._get(0);
      let b1 = b._get(1);
      let b2 = b._get(2);
      let b3 = b._get(3);
      let b4 = b._get(4);
      let b5 = b._get(5);
      o._set(0, a0 * b0 + a2 * b1);
      o._set(1, a1 * b0 + a3 * b1);
      o._set(2, a0 * b2 + a2 * b3);
      o._set(3, a1 * b2 + a3 * b3);
      o._set(4, a0 * b4 + a2 * b5 + a4);
      o._set(5, a1 * b4 + a3 * b5 + a5);
    }
    static scale(o, a, v) {
      let a0 = a._get(0);
      let a1 = a._get(1);
      let a2 = a._get(2);
      let a3 = a._get(3);
      let a4 = a._get(4);
      let a5 = a._get(5);
      let v0 = v._get(0);
      let v1 = v._get(1);
      o._set(0, a0 * v0);
      o._set(1, a1 * v0);
      o._set(2, a2 * v1);
      o._set(3, a3 * v1);
      o._set(4, a4);
      o._set(5, a5);
    }
  };
  (mat2d.Mat2D.new = function() {
    this[_buffer$0] = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([1.0, 0.0, 0.0, 1.0, 0.0, 0.0]));
    ;
  }).prototype = mat2d.Mat2D.prototype;
  (mat2d.Mat2D.clone = function(copy) {
    this[_buffer$0] = _native_typed_data.NativeFloat32List.fromList(copy.values);
    ;
  }).prototype = mat2d.Mat2D.prototype;
  dart.addTypeTests(mat2d.Mat2D);
  dart.addTypeCaches(mat2d.Mat2D);
  dart.setMethodSignature(mat2d.Mat2D, () => ({
    __proto__: dart.getMethods(mat2d.Mat2D.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double])
  }));
  dart.setStaticMethodSignature(mat2d.Mat2D, () => ['areEqual', 'cCopy', 'compose', 'copy', 'copyFromList', 'decompose', 'fromRotation', 'getScale', 'identity', 'invert', 'multiply', 'scale']);
  dart.setGetterSignature(mat2d.Mat2D, () => ({
    __proto__: dart.getGetters(mat2d.Mat2D.__proto__),
    mat4: typed_data.Float64List,
    values: typed_data.Float32List
  }));
  dart.setLibraryUri(mat2d.Mat2D, I[2]);
  dart.setFieldSignature(mat2d.Mat2D, () => ({
    __proto__: dart.getFields(mat2d.Mat2D.__proto__),
    [_buffer$0]: dart.finalFieldType(typed_data.Float32List)
  }));
  dart.defineExtensionMethods(mat2d.Mat2D, ['toString']);
  dart.trackLibraries("packages/flare_flutter/base/math/vec2d.dart", {
    "package:flare_flutter/base/math/vec2d.dart": vec2d,
    "package:flare_flutter/base/math/transform_components.dart": transform_components,
    "package:flare_flutter/base/math/mat2d.dart": mat2d
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["vec2d.dart","transform_components.dart","mat2d.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/flare_flutter/base/math/vec2d.dart.lib.js"}');
  // Exports:
  return {
    base__math__vec2d: vec2d,
    base__math__transform_components: transform_components,
    base__math__mat2d: mat2d
  };
}));

//# sourceMappingURL=vec2d.dart.lib.js.map
