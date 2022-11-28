define(['dart_sdk', 'packages/flare_flutter/base/math/vec2d.dart'], (function load__packages__flare_flutter__base__math__aabb_dart(dart_sdk, packages__flare_flutter__base__math__vec2d$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vec2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__vec2d;
  var aabb = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flare_flutter/base/math/aabb.dart"];
  var _buffer = dart.privateName(aabb, "_buffer");
  aabb.AABB = class AABB extends core.Object {
    static ['_#new#tearOff']() {
      return new aabb.AABB.new();
    }
    static ['_#clone#tearOff'](a) {
      return new aabb.AABB.clone(a);
    }
    static ['_#fromValues#tearOff'](a, b, c, d) {
      return new aabb.AABB.fromValues(a, b, c, d);
    }
    get maximum() {
      return new vec2d.Vec2D.fromValues(this[_buffer][$_get](2), this[_buffer][$_get](3));
    }
    get minimum() {
      return new vec2d.Vec2D.fromValues(this[_buffer][$_get](0), this[_buffer][$_get](1));
    }
    get values() {
      return this[_buffer];
    }
    _get(idx) {
      return this[_buffer][$_get](idx);
    }
    _set(idx, v$) {
      let v = v$;
      this[_buffer][$_set](idx, v);
      return v$;
    }
    toString() {
      return this[_buffer][$toString]();
    }
    static center(out, a) {
      out._set(0, (a._get(0) + a._get(2)) * 0.5);
      out._set(1, (a._get(1) + a._get(3)) * 0.5);
      return out;
    }
    static combine(out, a, b) {
      out._set(0, math.min(core.double, a._get(0), b._get(0)));
      out._set(1, math.min(core.double, a._get(1), b._get(1)));
      out._set(2, math.max(core.double, a._get(2), b._get(2)));
      out._set(3, math.max(core.double, a._get(3), b._get(3)));
      return out;
    }
    static contains(a, b) {
      return a._get(0) <= b._get(0) && a._get(1) <= b._get(1) && b._get(2) <= a._get(2) && b._get(3) <= a._get(3);
    }
    static copy(out, a) {
      out._set(0, a._get(0));
      out._set(1, a._get(1));
      out._set(2, a._get(2));
      out._set(3, a._get(3));
      return out;
    }
    static extents(out, a) {
      out._set(0, (a._get(2) - a._get(0)) * 0.5);
      out._set(1, (a._get(3) - a._get(1)) * 0.5);
      return out;
    }
    static isValid(a) {
      let dx = a._get(2) - a._get(0);
      let dy = a._get(3) - a._get(1);
      return dx >= 0 && dy >= 0 && a._get(0) <= 1.7976931348623157e+308 && a._get(1) <= 1.7976931348623157e+308 && a._get(2) <= 1.7976931348623157e+308 && a._get(3) <= 1.7976931348623157e+308;
    }
    static perimeter(a) {
      let wx = a._get(2) - a._get(0);
      let wy = a._get(3) - a._get(1);
      return 2.0 * (wx + wy);
    }
    static size(out, a) {
      out._set(0, a._get(2) - a._get(0));
      out._set(1, a._get(3) - a._get(1));
      return out;
    }
    static testOverlap(a, b) {
      let d1x = b._get(0) - a._get(2);
      let d1y = b._get(1) - a._get(3);
      let d2x = a._get(0) - b._get(2);
      let d2y = a._get(1) - b._get(3);
      if (d1x > 0.0 || d1y > 0.0) {
        return false;
      }
      if (d2x > 0.0 || d2y > 0.0) {
        return false;
      }
      return true;
    }
  };
  (aabb.AABB.new = function() {
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([0.0, 0.0, 0.0, 0.0]));
    ;
  }).prototype = aabb.AABB.prototype;
  (aabb.AABB.clone = function(a) {
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(a.values);
    ;
  }).prototype = aabb.AABB.prototype;
  (aabb.AABB.fromValues = function(a, b, c, d) {
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(T.JSArrayOfdouble().of([a, b, c, d]));
    ;
  }).prototype = aabb.AABB.prototype;
  dart.addTypeTests(aabb.AABB);
  dart.addTypeCaches(aabb.AABB);
  dart.setMethodSignature(aabb.AABB, () => ({
    __proto__: dart.getMethods(aabb.AABB.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double])
  }));
  dart.setStaticMethodSignature(aabb.AABB, () => ['center', 'combine', 'contains', 'copy', 'extents', 'isValid', 'perimeter', 'size', 'testOverlap']);
  dart.setGetterSignature(aabb.AABB, () => ({
    __proto__: dart.getGetters(aabb.AABB.__proto__),
    maximum: vec2d.Vec2D,
    minimum: vec2d.Vec2D,
    values: typed_data.Float32List
  }));
  dart.setLibraryUri(aabb.AABB, I[0]);
  dart.setFieldSignature(aabb.AABB, () => ({
    __proto__: dart.getFields(aabb.AABB.__proto__),
    [_buffer]: dart.finalFieldType(typed_data.Float32List)
  }));
  dart.defineExtensionMethods(aabb.AABB, ['toString']);
  dart.trackLibraries("packages/flare_flutter/base/math/aabb.dart", {
    "package:flare_flutter/base/math/aabb.dart": aabb
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["aabb.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/flare_flutter/base/math/aabb.dart.lib.js"}');
  // Exports:
  return {
    base__math__aabb: aabb
  };
}));

//# sourceMappingURL=aabb.dart.lib.js.map
