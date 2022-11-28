define(['dart_sdk', 'packages/flutter_map/src/core/point.dart'], (function load__packages__flutter_map__src__core__bounds_dart(dart_sdk, packages__flutter_map__src__core__point$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const point = packages__flutter_map__src__core__point$46dart.src__core__point;
  var bounds = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    CustomPointOfdouble: () => (T$.CustomPointOfdouble = dart.constFn(point.CustomPoint$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter_map/src/core/bounds.dart"];
  var min$ = dart.privateName(bounds, "Bounds.min");
  var max$ = dart.privateName(bounds, "Bounds.max");
  const _is_Bounds_default = Symbol('_is_Bounds_default');
  bounds.Bounds$ = dart.generic(T => {
    var __t$CustomPointOfT = () => (__t$CustomPointOfT = dart.constFn(point.CustomPoint$(T)))();
    var __t$BoundsOfT = () => (__t$BoundsOfT = dart.constFn(bounds.Bounds$(T)))();
    class Bounds extends core.Object {
      get min() {
        return this[min$];
      }
      set min(value) {
        super.min = value;
      }
      get max() {
        return this[max$];
      }
      set max(value) {
        super.max = value;
      }
      static new(a, b) {
        let bounds1 = new (bounds.Bounds$(T)).__(a, b);
        let bounds2 = bounds1.extend(a);
        return bounds2.extend(b);
      }
      static ['_#new#tearOff'](T, a, b) {
        return bounds.Bounds$(T).new(a, b);
      }
      static ['_#_#tearOff'](T, min, max) {
        return new (bounds.Bounds$(T)).__(min, max);
      }
      extend(point) {
        __t$CustomPointOfT().as(point);
        return new (__t$BoundsOfT()).__(new (__t$CustomPointOfT()).new(math.min(core.num, point.x, this.min.x), math.min(core.num, point.y, this.min.y)), new (__t$CustomPointOfT()).new(math.max(core.num, point.x, this.max.x), math.max(core.num, point.y, this.max.y)));
      }
      get center() {
        return new (T$.CustomPointOfdouble()).new((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2);
      }
      get bottomLeft() {
        return new (__t$CustomPointOfT()).new(this.min.x, this.max.y);
      }
      get topRight() {
        return new (__t$CustomPointOfT()).new(this.max.x, this.min.y);
      }
      get topLeft() {
        return this.min;
      }
      get bottomRight() {
        return this.max;
      }
      get size() {
        return this.max['-'](this.min);
      }
      contains(point) {
        __t$CustomPointOfT().as(point);
        let min = point;
        let max = point;
        return this.containsBounds(__t$BoundsOfT().new(min, max));
      }
      containsBounds(b) {
        __t$BoundsOfT().as(b);
        return b.min.x >= this.min.x && b.max.x <= this.max.x && b.min.y >= this.min.y && b.max.y <= this.max.y;
      }
      containsPartialBounds(b) {
        __t$BoundsOfT().as(b);
        return b.min.x <= this.max.x && b.max.x >= this.min.x && b.min.y <= this.max.y && b.max.y >= this.min.y;
      }
      toString() {
        return "Bounds(" + dart.str(this.min) + ", " + dart.str(this.max) + ")";
      }
    }
    (Bounds.__ = function(min, max) {
      this[min$] = min;
      this[max$] = max;
      ;
    }).prototype = Bounds.prototype;
    dart.addTypeTests(Bounds);
    Bounds.prototype[_is_Bounds_default] = true;
    dart.addTypeCaches(Bounds);
    dart.setMethodSignature(Bounds, () => ({
      __proto__: dart.getMethods(Bounds.__proto__),
      extend: dart.fnType(bounds.Bounds$(T), [dart.nullable(core.Object)]),
      contains: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      containsBounds: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      containsPartialBounds: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setStaticMethodSignature(Bounds, () => ['new']);
    dart.setGetterSignature(Bounds, () => ({
      __proto__: dart.getGetters(Bounds.__proto__),
      center: point.CustomPoint$(core.double),
      bottomLeft: point.CustomPoint$(T),
      topRight: point.CustomPoint$(T),
      topLeft: point.CustomPoint$(T),
      bottomRight: point.CustomPoint$(T),
      size: point.CustomPoint$(T)
    }));
    dart.setLibraryUri(Bounds, I[0]);
    dart.setFieldSignature(Bounds, () => ({
      __proto__: dart.getFields(Bounds.__proto__),
      min: dart.finalFieldType(point.CustomPoint$(T)),
      max: dart.finalFieldType(point.CustomPoint$(T))
    }));
    dart.defineExtensionMethods(Bounds, ['toString']);
    return Bounds;
  });
  bounds.Bounds = bounds.Bounds$();
  dart.addTypeTests(bounds.Bounds, _is_Bounds_default);
  dart.trackLibraries("packages/flutter_map/src/core/bounds.dart", {
    "package:flutter_map/src/core/bounds.dart": bounds
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bounds.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;MAOuB;;;;;;MACA;;;;;;iBAES,GAAkB;AACxC,sBAAiB,2BAAE,CAAC,EAAE,CAAC;AACvB,sBAAU,AAAQ,OAAD,QAAQ,CAAC;AAChC,cAAO,AAAQ,QAAD,QAAQ,CAAC;MACzB;;;;;;;aAMgC;;AAC9B,cAAc,0BACZ,+BACO,mBAAI,AAAM,KAAD,IAAI,AAAI,aACjB,mBAAI,AAAM,KAAD,IAAI,AAAI,cAExB,+BACO,mBAAI,AAAM,KAAD,IAAI,AAAI,aACjB,mBAAI,AAAM,KAAD,IAAI,AAAI;MAG5B;;AAGkC,kDACZ,CAAf,AAAI,AAAE,aAAE,AAAI,cAAK,GACF,CAAf,AAAI,AAAE,aAAE,AAAI,cAAK;MACnB;;AAG4B,8CAAY,AAAI,YAAG,AAAI;MAAE;;AAG3B,8CAAY,AAAI,YAAG,AAAI;MAAE;;AAG1B;MAAG;;AAGC;MAAG;;AAInC,cAAO,AAAI,eAAE;MACf;eAE6B;;AACrB,kBAAM,KAAK;AACX,kBAAM,KAAK;AACjB,cAAO,qBAAe,oBAAO,GAAG,EAAE,GAAG;MACvC;qBAE8B;;AAC5B,cAAQ,AAAE,AAAI,AAAE,AAEO,EAFd,UAAU,AAAI,cAClB,AAAE,AAAI,AAAE,CAAP,UAAU,AAAI,cACf,AAAE,AAAI,AAAE,CAAP,UAAU,AAAI,cACf,AAAE,AAAI,AAAE,CAAP,UAAU,AAAI;MACtB;4BAEqC;;AACnC,cAAQ,AAAE,AAAI,AAAE,AAEO,EAFd,UAAU,AAAI,cAClB,AAAE,AAAI,AAAE,CAAP,UAAU,AAAI,cACf,AAAE,AAAI,AAAE,CAAP,UAAU,AAAI,cACf,AAAE,AAAI,AAAE,CAAP,UAAU,AAAI;MACtB;;AAGqB,cAAA,AAAoB,sBAAX,YAAG,gBAAG,YAAG;MAAE;;0BA7DrB,KAAU;MAAV;MAAU;;IAAI","file":"../../../../../../../../../../../../packages/flutter_map/src/core/bounds.dart.lib.js"}');
  // Exports:
  return {
    src__core__bounds: bounds
  };
}));

//# sourceMappingURL=bounds.dart.lib.js.map
