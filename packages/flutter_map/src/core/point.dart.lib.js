define(['dart_sdk'], (function load__packages__flutter_map__src__core__point_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var point = Object.create(dart.library);
  var $ceil = dartx.ceil;
  var $floor = dartx.floor;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    CustomPointOfnum: () => (T$.CustomPointOfnum = dart.constFn(point.CustomPoint$(core.num)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_map/src/core/point.dart"];
  const _is_CustomPoint_default = Symbol('_is_CustomPoint_default');
  point.CustomPoint$ = dart.generic(T => {
    var __t$CustomPointOfT = () => (__t$CustomPointOfT = dart.constFn(point.CustomPoint$(T)))();
    var __t$PointOfT = () => (__t$PointOfT = dart.constFn(math.Point$(T)))();
    class CustomPoint extends math.Point$(T) {
      static ['_#new#tearOff'](T, x, y) {
        return new (point.CustomPoint$(T)).new(x, y);
      }
      ['/'](factor) {
        return new (__t$CustomPointOfT()).new(this.x / factor, this.y / factor);
      }
      ceil() {
        return new (__t$CustomPointOfT()).new(this.x[$ceil](), this.y[$ceil]());
      }
      floor() {
        return new (__t$CustomPointOfT()).new(this.x[$floor](), this.y[$floor]());
      }
      unscaleBy(point) {
        __t$CustomPointOfT().as(point);
        return new (__t$CustomPointOfT()).new(this.x / point.x, this.y / point.y);
      }
      ['+'](other) {
        __t$PointOfT().as(other);
        return new (__t$CustomPointOfT()).new(this.x + other.x, this.y + other.y);
      }
      ['-'](other) {
        __t$PointOfT().as(other);
        return new (__t$CustomPointOfT()).new(this.x - other.x, this.y - other.y);
      }
      ['*'](factor) {
        return new (__t$CustomPointOfT()).new(this.x * factor, this.y * factor);
      }
      scaleBy(point) {
        return new (T$.CustomPointOfnum()).new(this.x * point.x, this.y * point.y);
      }
      round() {
        let x = typeof this.x == 'number' ? this.x[$round]() : this.x;
        let y = typeof this.y == 'number' ? this.y[$round]() : this.y;
        return new (T$.CustomPointOfnum()).new(x, y);
      }
      multiplyBy(n) {
        return new (T$.CustomPointOfnum()).new(this.x * n, this.y * n);
      }
      rotate(radians) {
        if (radians !== 0.0) {
          let cos = math.cos(radians);
          let sin = math.sin(radians);
          let nx = cos * this.x + sin * this.y;
          let ny = cos * this.y - sin * this.x;
          return new (T$.CustomPointOfnum()).new(nx, ny);
        }
        return this;
      }
      toString() {
        return "CustomPoint (" + dart.str(this.x) + ", " + dart.str(this.y) + ")";
      }
    }
    (CustomPoint.new = function(x, y) {
      CustomPoint.__proto__.new.call(this, T.as(x), T.as(y));
      ;
    }).prototype = CustomPoint.prototype;
    dart.addTypeTests(CustomPoint);
    CustomPoint.prototype[_is_CustomPoint_default] = true;
    dart.addTypeCaches(CustomPoint);
    dart.setMethodSignature(CustomPoint, () => ({
      __proto__: dart.getMethods(CustomPoint.__proto__),
      '/': dart.fnType(point.CustomPoint$(T), [core.num]),
      ceil: dart.fnType(point.CustomPoint$(T), []),
      floor: dart.fnType(point.CustomPoint$(T), []),
      unscaleBy: dart.fnType(point.CustomPoint$(T), [dart.nullable(core.Object)]),
      '+': dart.fnType(point.CustomPoint$(T), [dart.nullable(core.Object)]),
      '-': dart.fnType(point.CustomPoint$(T), [dart.nullable(core.Object)]),
      '*': dart.fnType(point.CustomPoint$(T), [core.num]),
      scaleBy: dart.fnType(point.CustomPoint$(core.num), [point.CustomPoint$(core.num)]),
      round: dart.fnType(point.CustomPoint$(core.num), []),
      multiplyBy: dart.fnType(point.CustomPoint$(core.num), [core.num]),
      rotate: dart.fnType(point.CustomPoint$(core.num), [core.num])
    }));
    dart.setLibraryUri(CustomPoint, I[0]);
    dart.defineExtensionMethods(CustomPoint, ['toString']);
    return CustomPoint;
  });
  point.CustomPoint = point.CustomPoint$();
  dart.addTypeTests(point.CustomPoint, _is_CustomPoint_default);
  dart.trackLibraries("packages/flutter_map/src/core/point.dart", {
    "package:flutter_map/src/core/point.dart": point
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["point.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;YAQ0C;AACtC,cAAO,gCAAe,AAAE,SAAE,MAAM,EAAE,AAAE,SAAE,MAAM;MAC9C;;AAKE,cAAO,gCAAY,AAAE,iBAAQ,AAAE;MACjC;;AAKE,cAAO,gCAAe,AAAE,kBAAS,AAAE;MACrC;gBAIwC;;AACtC,cAAO,gCAAe,AAAE,SAAE,AAAM,KAAD,IAAI,AAAE,SAAE,AAAM,KAAD;MAC9C;YAIwC;;AACtC,cAAO,gCAAe,AAAE,SAAE,AAAM,KAAD,IAAI,AAAE,SAAE,AAAM,KAAD;MAC9C;YAKwC;;AACtC,cAAO,gCAAe,AAAE,SAAE,AAAM,KAAD,IAAI,AAAE,SAAE,AAAM,KAAD;MAC9C;YAIwC;AACtC,cAAO,gCAAgB,AAAE,SAAE,MAAM,EAAI,AAAE,SAAE,MAAM;MACjD;cAGgC;AAC9B,cAAO,iCAAY,AAAE,SAAE,AAAM,KAAD,IAAI,AAAE,SAAE,AAAM,KAAD;MAC3C;;AAIQ,gBAAW,OAAF,qBAAmB,AAAE,mBAAe;AAC7C,gBAAW,OAAF,qBAAmB,AAAE,mBAAe;AACnD,cAAO,iCAAY,CAAC,EAAE,CAAC;MACzB;iBAG2B;AACzB,cAAO,iCAAY,AAAE,SAAE,CAAC,EAAE,AAAE,SAAE,CAAC;MACjC;aAIuB;AACrB,YAAI,OAAO,KAAI;AACP,oBAAW,SAAI,OAAO;AACtB,oBAAW,SAAI,OAAO;AACtB,mBAAM,AAAI,AAAK,GAAN,GAAG,SAAM,AAAI,GAAD,GAAG;AACxB,mBAAM,AAAI,AAAK,GAAN,GAAG,SAAM,AAAI,GAAD,GAAG;AAE9B,gBAAO,iCAAY,EAAE,EAAE,EAAE;;AAG3B,cAAO;MACT;;AAGqB,cAAA,AAAsB,4BAAP,UAAC,gBAAG,UAAC;MAAE;;gCA7ErB,GAAO;AAAK,2CAAQ,KAAF,CAAC,GAAS,KAAF,CAAC;;IAAM","file":"../../../../../../../../../../../../packages/flutter_map/src/core/point.dart.lib.js"}');
  // Exports:
  return {
    src__core__point: point
  };
}));

//# sourceMappingURL=point.dart.lib.js.map
