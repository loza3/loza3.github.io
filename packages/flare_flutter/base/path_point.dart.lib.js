define(['dart_sdk', 'packages/flare_flutter/base/math/vec2d.dart', 'packages/flare_flutter/base/json_reader.dart'], (function load__packages__flare_flutter__base__path_point_dart(dart_sdk, packages__flare_flutter__base__math__vec2d$46dart, packages__flare_flutter__base__json_reader$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vec2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__vec2d;
  const mat2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__mat2d;
  const stream_reader = packages__flare_flutter__base__json_reader$46dart.base__stream_reader;
  var path_point = Object.create(dart.library);
  var $_get = dartx._get;
  var $floor = dartx.floor;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    HashMapOfint$PointType: () => (T.HashMapOfint$PointType = dart.constFn(collection.HashMap$(core.int, path_point.PointType)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    JSArrayOfPointType: () => (T.JSArrayOfPointType = dart.constFn(_interceptors.JSArray$(path_point.PointType)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: path_point.PointType.prototype,
        [_Enum__name]: "straight",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: path_point.PointType.prototype,
        [_Enum__name]: "mirror",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: path_point.PointType.prototype,
        [_Enum__name]: "disconnected",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: path_point.PointType.prototype,
        [_Enum__name]: "asymmetric",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], path_point.PointType);
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = ["package:flare_flutter/base/path_point.dart"];
  var _in = dart.privateName(path_point, "_in");
  var _out = dart.privateName(path_point, "_out");
  var _translation = dart.privateName(path_point, "_translation");
  var _type = dart.privateName(path_point, "_type");
  var _weights = dart.privateName(path_point, "_weights");
  path_point.PathPoint = class PathPoint extends core.Object {
    get pointType() {
      return this[_type];
    }
    get translation() {
      return this[_translation];
    }
    copy(from) {
      this[_type] = from[_type];
      vec2d.Vec2D.copy(this[_translation], from[_translation]);
      if (from[_weights] != null) {
        this[_weights] = _native_typed_data.NativeFloat32List.fromList(dart.nullCheck(from[_weights]));
      }
    }
    read(reader, isConnectedToBones) {
      vec2d.Vec2D.copyFromList(this[_translation], reader.readFloat32Array(2, "translation"));
      let weightLength = this.readPoint(reader, isConnectedToBones);
      if (weightLength !== 0) {
        this[_weights] = reader.readFloat32Array(weightLength, "weights");
      }
    }
    transformed(transform) {
      let result = this.makeInstance();
      vec2d.Vec2D.transformMat2D(result.translation, result.translation, transform);
      return result;
    }
  };
  (path_point.PathPoint.new = function(type) {
    this[_translation] = new vec2d.Vec2D.new();
    this[_weights] = null;
    this[_type] = type;
    ;
  }).prototype = path_point.PathPoint.prototype;
  dart.addTypeTests(path_point.PathPoint);
  dart.addTypeCaches(path_point.PathPoint);
  dart.setMethodSignature(path_point.PathPoint, () => ({
    __proto__: dart.getMethods(path_point.PathPoint.__proto__),
    copy: dart.fnType(dart.void, [path_point.PathPoint]),
    read: dart.fnType(dart.void, [stream_reader.StreamReader, core.bool]),
    transformed: dart.fnType(path_point.PathPoint, [mat2d.Mat2D])
  }));
  dart.setGetterSignature(path_point.PathPoint, () => ({
    __proto__: dart.getGetters(path_point.PathPoint.__proto__),
    pointType: path_point.PointType,
    translation: vec2d.Vec2D
  }));
  dart.setLibraryUri(path_point.PathPoint, I[0]);
  dart.setFieldSignature(path_point.PathPoint, () => ({
    __proto__: dart.getFields(path_point.PathPoint.__proto__),
    [_type]: dart.fieldType(path_point.PointType),
    [_translation]: dart.fieldType(vec2d.Vec2D),
    [_weights]: dart.fieldType(dart.nullable(typed_data.Float32List))
  }));
  path_point.CubicPathPoint = class CubicPathPoint extends path_point.PathPoint {
    static ['_#new#tearOff'](type) {
      return new path_point.CubicPathPoint.new(type);
    }
    static ['_#fromValues#tearOff'](translation, inPoint, outPoint) {
      return new path_point.CubicPathPoint.fromValues(translation, inPoint, outPoint);
    }
    get inPoint() {
      return this[_in];
    }
    get outPoint() {
      return this[_out];
    }
    copyCubic(from) {
      super.copy(from);
      vec2d.Vec2D.copy(this[_in], from[_in]);
      vec2d.Vec2D.copy(this[_out], from[_out]);
    }
    makeInstance() {
      let node = new path_point.CubicPathPoint.new(this[_type]);
      node.copyCubic(this);
      return node;
    }
    readPoint(reader, isConnectedToBones) {
      vec2d.Vec2D.copyFromList(this[_in], reader.readFloat32Array(2, "in"));
      vec2d.Vec2D.copyFromList(this[_out], reader.readFloat32Array(2, "out"));
      if (isConnectedToBones) {
        return 24;
      }
      return 0;
    }
    skin(world, bones) {
      let point = new path_point.CubicPathPoint.new(this.pointType);
      let px = world._get(0) * this.translation._get(0) + world._get(2) * this.translation._get(1) + world._get(4);
      let py = world._get(1) * this.translation._get(0) + world._get(3) * this.translation._get(1) + world._get(5);
      {
        let a = 0.0;
        let b = 0.0;
        let c = 0.0;
        let d = 0.0;
        let e = 0.0;
        let f = 0.0;
        for (let i = 0; i < 4; i = i + 1) {
          let boneIndex = dart.nullCheck(this[_weights])[$_get](i)[$floor]();
          let weight = dart.nullCheck(this[_weights])[$_get](i + 4);
          if (weight > 0) {
            let bb = boneIndex * 6;
            a = a + dart.nullCheck(bones)[$_get](bb) * weight;
            b = b + bones[$_get](bb + 1) * weight;
            c = c + bones[$_get](bb + 2) * weight;
            d = d + bones[$_get](bb + 3) * weight;
            e = e + bones[$_get](bb + 4) * weight;
            f = f + bones[$_get](bb + 5) * weight;
          }
        }
        let pos = point.translation;
        pos._set(0, a * px + c * py + e);
        pos._set(1, b * px + d * py + f);
      }
      {
        let a = 0.0;
        let b = 0.0;
        let c = 0.0;
        let d = 0.0;
        let e = 0.0;
        let f = 0.0;
        px = world._get(0) * this[_in]._get(0) + world._get(2) * this[_in]._get(1) + world._get(4);
        py = world._get(1) * this[_in]._get(0) + world._get(3) * this[_in]._get(1) + world._get(5);
        for (let i = 8; i < 12; i = i + 1) {
          let boneIndex = dart.nullCheck(this[_weights])[$_get](i)[$floor]();
          let weight = dart.nullCheck(this[_weights])[$_get](i + 4);
          if (weight > 0) {
            let bb = boneIndex * 6;
            a = a + dart.nullCheck(bones)[$_get](bb) * weight;
            b = b + bones[$_get](bb + 1) * weight;
            c = c + bones[$_get](bb + 2) * weight;
            d = d + bones[$_get](bb + 3) * weight;
            e = e + bones[$_get](bb + 4) * weight;
            f = f + bones[$_get](bb + 5) * weight;
          }
        }
        let pos = point.inPoint;
        pos._set(0, a * px + c * py + e);
        pos._set(1, b * px + d * py + f);
      }
      {
        let a = 0.0;
        let b = 0.0;
        let c = 0.0;
        let d = 0.0;
        let e = 0.0;
        let f = 0.0;
        px = world._get(0) * this[_out]._get(0) + world._get(2) * this[_out]._get(1) + world._get(4);
        py = world._get(1) * this[_out]._get(0) + world._get(3) * this[_out]._get(1) + world._get(5);
        for (let i = 16; i < 20; i = i + 1) {
          let boneIndex = dart.nullCheck(this[_weights])[$_get](i)[$floor]();
          let weight = dart.nullCheck(this[_weights])[$_get](i + 4);
          if (weight > 0) {
            let bb = boneIndex * 6;
            a = a + dart.nullCheck(bones)[$_get](bb) * weight;
            b = b + bones[$_get](bb + 1) * weight;
            c = c + bones[$_get](bb + 2) * weight;
            d = d + bones[$_get](bb + 3) * weight;
            e = e + bones[$_get](bb + 4) * weight;
            f = f + bones[$_get](bb + 5) * weight;
          }
        }
        let pos = point.outPoint;
        pos._set(0, a * px + c * py + e);
        pos._set(1, b * px + d * py + f);
      }
      return point;
    }
    transformed(transform) {
      let result = path_point.CubicPathPoint.as(super.transformed(transform));
      vec2d.Vec2D.transformMat2D(result.inPoint, result.inPoint, transform);
      vec2d.Vec2D.transformMat2D(result.outPoint, result.outPoint, transform);
      return result;
    }
  };
  (path_point.CubicPathPoint.new = function(type) {
    this[_in] = new vec2d.Vec2D.new();
    this[_out] = new vec2d.Vec2D.new();
    path_point.CubicPathPoint.__proto__.new.call(this, type);
    ;
  }).prototype = path_point.CubicPathPoint.prototype;
  (path_point.CubicPathPoint.fromValues = function(translation, inPoint, outPoint) {
    this[_in] = new vec2d.Vec2D.new();
    this[_out] = new vec2d.Vec2D.new();
    path_point.CubicPathPoint.__proto__.new.call(this, path_point.PointType.disconnected);
    this[_translation] = translation;
    this[_in] = inPoint;
    this[_out] = outPoint;
  }).prototype = path_point.CubicPathPoint.prototype;
  dart.addTypeTests(path_point.CubicPathPoint);
  dart.addTypeCaches(path_point.CubicPathPoint);
  dart.setMethodSignature(path_point.CubicPathPoint, () => ({
    __proto__: dart.getMethods(path_point.CubicPathPoint.__proto__),
    copyCubic: dart.fnType(dart.void, [path_point.CubicPathPoint]),
    makeInstance: dart.fnType(path_point.PathPoint, []),
    readPoint: dart.fnType(core.int, [stream_reader.StreamReader, core.bool]),
    skin: dart.fnType(path_point.PathPoint, [mat2d.Mat2D, dart.nullable(typed_data.Float32List)])
  }));
  dart.setGetterSignature(path_point.CubicPathPoint, () => ({
    __proto__: dart.getGetters(path_point.CubicPathPoint.__proto__),
    inPoint: vec2d.Vec2D,
    outPoint: vec2d.Vec2D
  }));
  dart.setLibraryUri(path_point.CubicPathPoint, I[0]);
  dart.setFieldSignature(path_point.CubicPathPoint, () => ({
    __proto__: dart.getFields(path_point.CubicPathPoint.__proto__),
    [_in]: dart.fieldType(vec2d.Vec2D),
    [_out]: dart.fieldType(vec2d.Vec2D)
  }));
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  path_point.PointType = class PointType extends core._Enum {
    toString() {
      return "PointType." + this[_name];
    }
  };
  (path_point.PointType.new = function(index, name) {
    path_point.PointType.__proto__.new.call(this, index, name);
    ;
  }).prototype = path_point.PointType.prototype;
  dart.addTypeTests(path_point.PointType);
  dart.addTypeCaches(path_point.PointType);
  dart.setLibraryUri(path_point.PointType, I[0]);
  dart.setStaticFieldSignature(path_point.PointType, () => ['values', 'straight', 'mirror', 'disconnected', 'asymmetric']);
  dart.defineExtensionMethods(path_point.PointType, ['toString']);
  dart.defineLazy(path_point.PointType, {
    /*path_point.PointType.values*/get values() {
      return C[0] || CT.C0;
    },
    /*path_point.PointType.straight*/get straight() {
      return C[1] || CT.C1;
    },
    /*path_point.PointType.mirror*/get mirror() {
      return C[2] || CT.C2;
    },
    /*path_point.PointType.disconnected*/get disconnected() {
      return C[3] || CT.C3;
    },
    /*path_point.PointType.asymmetric*/get asymmetric() {
      return C[4] || CT.C4;
    }
  }, false);
  var radius$ = dart.privateName(path_point, "StraightPathPoint.radius");
  path_point.StraightPathPoint = class StraightPathPoint extends path_point.PathPoint {
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      this[radius$] = value;
    }
    static ['_#new#tearOff']() {
      return new path_point.StraightPathPoint.new();
    }
    static ['_#fromTranslation#tearOff'](translation) {
      return new path_point.StraightPathPoint.fromTranslation(translation);
    }
    static ['_#fromValues#tearOff'](translation, radius) {
      return new path_point.StraightPathPoint.fromValues(translation, radius);
    }
    copyStraight(from) {
      super.copy(from);
      this.radius = from.radius;
    }
    makeInstance() {
      let node = new path_point.StraightPathPoint.new();
      node.copyStraight(this);
      return node;
    }
    readPoint(reader, isConnectedToBones) {
      this.radius = reader.readFloat32("radius");
      if (isConnectedToBones) {
        return 8;
      }
      return 0;
    }
    skin(world, bones) {
      let t2;
      let point = (t2 = new path_point.StraightPathPoint.new(), (() => {
        t2.radius = this.radius;
        return t2;
      })());
      let px = world._get(0) * this.translation._get(0) + world._get(2) * this.translation._get(1) + world._get(4);
      let py = world._get(1) * this.translation._get(0) + world._get(3) * this.translation._get(1) + world._get(5);
      let a = 0.0;
      let b = 0.0;
      let c = 0.0;
      let d = 0.0;
      let e = 0.0;
      let f = 0.0;
      for (let i = 0; i < 4; i = i + 1) {
        let boneIndex = dart.nullCheck(this[_weights])[$_get](i)[$floor]();
        let weight = dart.nullCheck(this[_weights])[$_get](i + 4);
        if (weight > 0) {
          let bb = boneIndex * 6;
          a = a + dart.nullCheck(bones)[$_get](bb) * weight;
          b = b + bones[$_get](bb + 1) * weight;
          c = c + bones[$_get](bb + 2) * weight;
          d = d + bones[$_get](bb + 3) * weight;
          e = e + bones[$_get](bb + 4) * weight;
          f = f + bones[$_get](bb + 5) * weight;
        }
      }
      let pos = point.translation;
      pos._set(0, a * px + c * py + e);
      pos._set(1, b * px + d * py + f);
      return point;
    }
  };
  (path_point.StraightPathPoint.new = function() {
    this[radius$] = 0.0;
    path_point.StraightPathPoint.__proto__.new.call(this, path_point.PointType.straight);
    ;
  }).prototype = path_point.StraightPathPoint.prototype;
  (path_point.StraightPathPoint.fromTranslation = function(translation) {
    this[radius$] = 0.0;
    path_point.StraightPathPoint.__proto__.new.call(this, path_point.PointType.straight);
    this[_translation] = translation;
  }).prototype = path_point.StraightPathPoint.prototype;
  (path_point.StraightPathPoint.fromValues = function(translation, radius) {
    this[radius$] = 0.0;
    this[radius$] = radius;
    path_point.StraightPathPoint.__proto__.new.call(this, path_point.PointType.straight);
    this[_translation] = translation;
  }).prototype = path_point.StraightPathPoint.prototype;
  dart.addTypeTests(path_point.StraightPathPoint);
  dart.addTypeCaches(path_point.StraightPathPoint);
  dart.setMethodSignature(path_point.StraightPathPoint, () => ({
    __proto__: dart.getMethods(path_point.StraightPathPoint.__proto__),
    copyStraight: dart.fnType(dart.void, [path_point.StraightPathPoint]),
    makeInstance: dart.fnType(path_point.PathPoint, []),
    readPoint: dart.fnType(core.int, [stream_reader.StreamReader, core.bool]),
    skin: dart.fnType(path_point.PathPoint, [mat2d.Mat2D, dart.nullable(typed_data.Float32List)])
  }));
  dart.setLibraryUri(path_point.StraightPathPoint, I[0]);
  dart.setFieldSignature(path_point.StraightPathPoint, () => ({
    __proto__: dart.getFields(path_point.StraightPathPoint.__proto__),
    radius: dart.fieldType(core.double)
  }));
  dart.defineLazy(path_point, {
    /*path_point.pointTypeLookup*/get pointTypeLookup() {
      return T.HashMapOfint$PointType().fromIterables(T.JSArrayOfint().of([0, 1, 2, 3]), T.JSArrayOfPointType().of([path_point.PointType.straight, path_point.PointType.mirror, path_point.PointType.disconnected, path_point.PointType.asymmetric]));
    },
    set pointTypeLookup(_) {}
  }, false);
  dart.trackLibraries("packages/flare_flutter/base/path_point.dart", {
    "package:flare_flutter/base/path_point.dart": path_point
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_point.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/flare_flutter/base/path_point.dart.lib.js"}');
  // Exports:
  return {
    base__path_point: path_point
  };
}));

//# sourceMappingURL=path_point.dart.lib.js.map
