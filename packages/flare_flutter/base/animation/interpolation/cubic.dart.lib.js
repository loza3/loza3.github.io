define(['dart_sdk', 'packages/flare_flutter/base/animation/interpolation/cubic_ease.dart', 'packages/flare_flutter/base/animation/interpolation/interpolator.dart', 'packages/flare_flutter/base/json_reader.dart'], (function load__packages__flare_flutter__base__animation__interpolation__cubic_dart(dart_sdk, packages__flare_flutter__base__animation__interpolation__cubic_ease$46dart, packages__flare_flutter__base__animation__interpolation__interpolator$46dart, packages__flare_flutter__base__json_reader$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cubic_ease = packages__flare_flutter__base__animation__interpolation__cubic_ease$46dart.base__animation__interpolation__cubic_ease;
  const interpolator = packages__flare_flutter__base__animation__interpolation__interpolator$46dart.base__animation__interpolation__interpolator;
  const stream_reader = packages__flare_flutter__base__json_reader$46dart.base__stream_reader;
  var cubic = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flare_flutter/base/animation/interpolation/cubic.dart"];
  var __CubicInterpolator__cubic = dart.privateName(cubic, "_#CubicInterpolator#_cubic");
  var _cubic = dart.privateName(cubic, "_cubic");
  cubic.CubicInterpolator = class CubicInterpolator extends interpolator.Interpolator {
    get [_cubic]() {
      let t0;
      t0 = this[__CubicInterpolator__cubic];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_cubic")) : t0;
    }
    set [_cubic](library$32package$58flare_flutter$47base$47animation$47interpolation$47cubic$46dart$58$58_cubic$35param) {
      this[__CubicInterpolator__cubic] = library$32package$58flare_flutter$47base$47animation$47interpolation$47cubic$46dart$58$58_cubic$35param;
    }
    getEasedMix(mix) {
      return this[_cubic].ease(mix);
    }
    read(reader) {
      this[_cubic] = cubic_ease.CubicEase.make(reader.readFloat32("cubicX1"), reader.readFloat32("cubicY1"), reader.readFloat32("cubicX2"), reader.readFloat32("cubicY2"));
      return true;
    }
    static ['_#new#tearOff']() {
      return new cubic.CubicInterpolator.new();
    }
  };
  (cubic.CubicInterpolator.new = function() {
    this[__CubicInterpolator__cubic] = null;
    ;
  }).prototype = cubic.CubicInterpolator.prototype;
  dart.addTypeTests(cubic.CubicInterpolator);
  dart.addTypeCaches(cubic.CubicInterpolator);
  dart.setMethodSignature(cubic.CubicInterpolator, () => ({
    __proto__: dart.getMethods(cubic.CubicInterpolator.__proto__),
    getEasedMix: dart.fnType(core.double, [core.double]),
    read: dart.fnType(core.bool, [stream_reader.StreamReader])
  }));
  dart.setGetterSignature(cubic.CubicInterpolator, () => ({
    __proto__: dart.getGetters(cubic.CubicInterpolator.__proto__),
    [_cubic]: cubic_ease.CubicEase
  }));
  dart.setSetterSignature(cubic.CubicInterpolator, () => ({
    __proto__: dart.getSetters(cubic.CubicInterpolator.__proto__),
    [_cubic]: cubic_ease.CubicEase
  }));
  dart.setLibraryUri(cubic.CubicInterpolator, I[0]);
  dart.setFieldSignature(cubic.CubicInterpolator, () => ({
    __proto__: dart.getFields(cubic.CubicInterpolator.__proto__),
    [__CubicInterpolator__cubic]: dart.fieldType(dart.nullable(cubic_ease.CubicEase))
  }));
  dart.trackLibraries("packages/flare_flutter/base/animation/interpolation/cubic.dart", {
    "package:flare_flutter/base/animation/interpolation/cubic.dart": cubic
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cubic.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAKiB;;IAAM;iBAAN;;IAAM;gBAEK;AAAQ,YAAA,AAAO,mBAAK,GAAG;IAAC;SAE3B;AAKa,MAJlC,eAAmB,0BACf,AAAO,MAAD,aAAa,YACnB,AAAO,MAAD,aAAa,YACnB,AAAO,MAAD,aAAa,YACnB,AAAO,MAAD,aAAa;AACvB,YAAO;IACT;;;;;;uCAXe;;EAYjB","file":"../../../../../../../../../../../../../packages/flare_flutter/base/animation/interpolation/cubic.dart.lib.js"}');
  // Exports:
  return {
    base__animation__interpolation__cubic: cubic
  };
}));

//# sourceMappingURL=cubic.dart.lib.js.map
