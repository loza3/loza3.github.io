define(['dart_sdk'], (function load__packages__polylabel__src__data_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var data = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:polylabel/src/data.dart"];
  var point$ = dart.privateName(data, "PolylabelResult.point");
  var distance$ = dart.privateName(data, "PolylabelResult.distance");
  data.PolylabelResult = class PolylabelResult extends core.Object {
    get point() {
      return this[point$];
    }
    set point(value) {
      super.point = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    static ['_#new#tearOff'](point, distance) {
      return new data.PolylabelResult.new(point, distance);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.point) + ", distance: " + dart.str(this.distance) + ")";
    }
  };
  (data.PolylabelResult.new = function(point, distance) {
    this[point$] = point;
    this[distance$] = distance;
    ;
  }).prototype = data.PolylabelResult.prototype;
  dart.addTypeTests(data.PolylabelResult);
  dart.addTypeCaches(data.PolylabelResult);
  dart.setLibraryUri(data.PolylabelResult, I[0]);
  dart.setFieldSignature(data.PolylabelResult, () => ({
    __proto__: dart.getFields(data.PolylabelResult.__proto__),
    point: dart.finalFieldType(math.Point$(core.num)),
    distance: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(data.PolylabelResult, ['toString']);
  var c$ = dart.privateName(data, "Cell.c");
  var h$ = dart.privateName(data, "Cell.h");
  var d = dart.privateName(data, "Cell.d");
  var __Cell_max = dart.privateName(data, "_#Cell#max");
  data.Cell = class Cell extends core.Object {
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get h() {
      return this[h$];
    }
    set h(value) {
      super.h = value;
    }
    get d() {
      return this[d];
    }
    set d(value) {
      super.d = value;
    }
    get max() {
      let t0;
      t0 = this[__Cell_max];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("max")) : t0;
    }
    set max(max$35param) {
      this[__Cell_max] = max$35param;
    }
    static ['_#new#tearOff'](c, h, polygon) {
      return new data.Cell.new(c, h, polygon);
    }
  };
  (data.Cell.new = function(c, h, polygon) {
    this[__Cell_max] = null;
    this[c$] = c;
    this[h$] = h;
    this[d] = data.pointToPolygonDist(c, polygon);
    this.max = this.d + this.h * 1.4142135623730951;
  }).prototype = data.Cell.prototype;
  dart.addTypeTests(data.Cell);
  dart.addTypeCaches(data.Cell);
  dart.setGetterSignature(data.Cell, () => ({
    __proto__: dart.getGetters(data.Cell.__proto__),
    max: core.num
  }));
  dart.setSetterSignature(data.Cell, () => ({
    __proto__: dart.getSetters(data.Cell.__proto__),
    max: core.num
  }));
  dart.setLibraryUri(data.Cell, I[0]);
  dart.setFieldSignature(data.Cell, () => ({
    __proto__: dart.getFields(data.Cell.__proto__),
    c: dart.finalFieldType(math.Point$(core.num)),
    h: dart.finalFieldType(core.num),
    d: dart.finalFieldType(core.num),
    [__Cell_max]: dart.fieldType(dart.nullable(core.num))
  }));
  data.pointToPolygonDist = function pointToPolygonDist(point, polygon) {
    let t0;
    let inside = false;
    let minDistSq = 1 / 0;
    for (let k = 0; k < polygon[$length]; k = k + 1) {
      let ring = polygon[$_get](k);
      for (let i = 0, len = ring[$length], j = len - 1; i < len; j = (t0 = i, i = t0 + 1, t0)) {
        let a = ring[$_get](i);
        let b = ring[$_get](j);
        if (a.y > point.y !== b.y > point.y && point.x < (b.x - a.x) * (point.y - a.y) / (b.y - a.y) + a.x) {
          inside = !inside;
        }
        minDistSq = math.min(core.num, minDistSq, data.getSegDistSq(point, a, b));
      }
    }
    return minDistSq === 0 ? 0 : (inside ? 1 : -1) * math.sqrt(minDistSq);
  };
  data.getSegDistSq = function getSegDistSq(p, a, b) {
    let x = a.x;
    let y = a.y;
    let dx = b.x - x;
    let dy = b.y - y;
    if (dx !== 0 || dy !== 0) {
      let t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        x = b.x;
        y = b.y;
      } else if (t > 0) {
        x = x + dx * t;
        y = y + dy * t;
      }
    }
    dx = p.x - x;
    dy = p.y - y;
    return dx * dx + dy * dy;
  };
  dart.trackLibraries("packages/polylabel/src/data.dart", {
    "package:polylabel/src/data.dart": data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAKc;;;;;;IACF;;;;;;;;;;AAKW,YAA2C,UAAzC,sBAAW,eAAE,cAAK,0BAAa,iBAAQ;IAAE;;uCAHrC,OAAY;IAAZ;IAAY;;EAAS;;;;;;;;;;;;;;;IAOpC;;;;;;IACF;;;;;;IACA;;;;;;;;AACD;;IAAG;YAAH;;IAAG;;;;;4BAEF,GAAQ,GAAW;uBAFpB;IAEC;IAAQ;IAAwB,UAAE,wBAAmB,CAAC,EAAE,OAAO;AACpD,IAAnB,WAAM,AAAE,SAAE,AAAE;EACd;;;;;;;;;;;;;;;;;;;wDAI2B,OAAe;;AACrC,iBAAS;AACV;AAEJ,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAQ,OAAD,WAAS,IAAA,AAAC,CAAA;AAC7B,iBAAO,AAAO,OAAA,QAAC,CAAC;AAEtB,eAAS,IAAI,GAAG,MAAM,AAAK,IAAD,WAAS,IAAI,AAAI,GAAD,GAAG,GAAG,AAAE,CAAD,GAAG,GAAG,EAAE,KAAK,KAAD,CAAC;AACtD,gBAAI,AAAI,IAAA,QAAC,CAAC;AACV,gBAAI,AAAI,IAAA,QAAC,CAAC;AAEhB,YAAK,AAAE,AAAE,CAAH,KAAK,AAAM,KAAD,OAAM,AAAE,AAAE,CAAH,KAAK,AAAM,KAAD,MAC5B,AAAM,AAAE,KAAH,KAAiB,AAAkB,AAAc,CAA3C,AAAE,AAAE,CAAH,KAAK,AAAE,CAAD,OAAO,AAAM,AAAE,KAAH,KAAK,AAAE,CAAD,OAAO,AAAE,AAAE,CAAH,KAAK,AAAE,CAAD,MAAM,AAAE,CAAD;AAC5C,UAAhB,UAAU,MAAM;;AAGmC,QAArD,YAAY,mBAAI,SAAS,EAAE,kBAAa,KAAK,EAAE,CAAC,EAAE,CAAC;;;AAIvD,UAAO,AAAU,UAAD,KAAI,IAAI,IAAsB,CAAjB,MAAM,GAAG,IAAI,CAAC,CAAR,IAAa,UAAK,SAAS;EAChE;4CAGuB,GAAS,GAAS;AACnC,YAAI,AAAE,CAAD;AACL,YAAI,AAAE,CAAD;AACL,aAAK,AAAE,AAAE,CAAH,KAAK,CAAC;AACZ,aAAK,AAAE,AAAE,CAAH,KAAK,CAAC;AAEhB,QAAI,EAAE,KAAI,KAAK,EAAE,KAAI;AACb,cAAsC,CAAvB,AAAK,CAAd,AAAE,AAAE,CAAH,KAAK,CAAC,IAAI,EAAE,GAAa,CAAT,AAAE,AAAE,CAAH,KAAK,CAAC,IAAI,EAAE,KAAK,AAAG,AAAK,EAAN,GAAG,EAAE,GAAG,AAAG,EAAD,GAAG,EAAE;AAEhE,UAAI,AAAE,CAAD,GAAG;AACC,QAAP,IAAI,AAAE,CAAD;AACE,QAAP,IAAI,AAAE,CAAD;YACA,KAAI,AAAE,CAAD,GAAG;AACF,QAAX,IAAA,AAAE,CAAD,GAAI,AAAG,EAAD,GAAG,CAAC;AACA,QAAX,IAAA,AAAE,CAAD,GAAI,AAAG,EAAD,GAAG,CAAC;;;AAIH,IAAZ,KAAK,AAAE,AAAE,CAAH,KAAK,CAAC;AACA,IAAZ,KAAK,AAAE,AAAE,CAAH,KAAK,CAAC;AAEZ,UAAO,AAAG,AAAK,GAAN,GAAG,EAAE,GAAG,AAAG,EAAD,GAAG,EAAE;EAC1B","file":"../../../../../../../../../../../packages/polylabel/src/data.dart.lib.js"}');
  // Exports:
  return {
    src__data: data
  };
}));

//# sourceMappingURL=data.dart.lib.js.map
