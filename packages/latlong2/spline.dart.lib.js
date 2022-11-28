define(['dart_sdk'], (function load__packages__latlong2__spline_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var spline = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:latlong2/spline.dart"];
  var x$ = dart.privateName(spline, "Point2D.x");
  var y$ = dart.privateName(spline, "Point2D.y");
  spline.Point2D = class Point2D extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    static ['_#new#tearOff'](x, y) {
      return new spline.Point2D.new(x, y);
    }
  };
  (spline.Point2D.new = function(x, y) {
    this[x$] = x;
    this[y$] = y;
    ;
  }).prototype = spline.Point2D.prototype;
  dart.addTypeTests(spline.Point2D);
  dart.addTypeCaches(spline.Point2D);
  dart.setLibraryUri(spline.Point2D, I[0]);
  dart.setFieldSignature(spline.Point2D, () => ({
    __proto__: dart.getFields(spline.Point2D.__proto__),
    x: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  const _is_CatmullRom_default = Symbol('_is_CatmullRom_default');
  spline.CatmullRom$ = dart.generic(R => {
    class CatmullRom extends core.Object {
      percentage(percent) {
        return this.position(percent / 100);
      }
    }
    (CatmullRom.new = function() {
      ;
    }).prototype = CatmullRom.prototype;
    dart.addTypeTests(CatmullRom);
    CatmullRom.prototype[_is_CatmullRom_default] = true;
    dart.addTypeCaches(CatmullRom);
    dart.setMethodSignature(CatmullRom, () => ({
      __proto__: dart.getMethods(CatmullRom.__proto__),
      percentage: dart.fnType(R, [core.num])
    }));
    dart.setLibraryUri(CatmullRom, I[0]);
    return CatmullRom;
  });
  spline.CatmullRom = spline.CatmullRom$();
  dart.addTypeTests(spline.CatmullRom, _is_CatmullRom_default);
  var _p0$ = dart.privateName(spline, "CatmullRomSpline._p0");
  var _p1$ = dart.privateName(spline, "CatmullRomSpline._p1");
  var _p2$ = dart.privateName(spline, "CatmullRomSpline._p2");
  var _p3$ = dart.privateName(spline, "CatmullRomSpline._p3");
  var _p0$0 = dart.privateName(spline, "_p0");
  var _p1$0 = dart.privateName(spline, "_p1");
  var _p2$0 = dart.privateName(spline, "_p2");
  var _p3$0 = dart.privateName(spline, "_p3");
  spline.CatmullRomSpline = class CatmullRomSpline extends spline.CatmullRom$(core.double) {
    get [_p0$0]() {
      return this[_p0$];
    }
    set [_p0$0](value) {
      super[_p0$0] = value;
    }
    get [_p1$0]() {
      return this[_p1$];
    }
    set [_p1$0](value) {
      super[_p1$0] = value;
    }
    get [_p2$0]() {
      return this[_p2$];
    }
    set [_p2$0](value) {
      super[_p2$0] = value;
    }
    get [_p3$0]() {
      return this[_p3$];
    }
    set [_p3$0](value) {
      super[_p3$0] = value;
    }
    static ['_#new#tearOff'](_p0, _p1, _p2, _p3) {
      return new spline.CatmullRomSpline.new(_p0, _p1, _p2, _p3);
    }
    static ['_#noEndpoints#tearOff'](p1, p2) {
      return new spline.CatmullRomSpline.noEndpoints(p1, p2);
    }
    position(distance) {
      if (distance < 0 || distance > 1) {
        dart.throw(new core.ArgumentError.value(distance, "distance", "Distance must be beteen 0 and 1."));
      }
      return 0.5 * (2 * this[_p1$0] + (this[_p2$0] - this[_p0$0]) * distance + (2 * this[_p0$0] - 5 * this[_p1$0] + 4 * this[_p2$0] - this[_p3$0]) * distance * distance + (3 * this[_p1$0] - this[_p0$0] - 3 * this[_p2$0] + this[_p3$0]) * distance * distance * distance);
    }
  };
  (spline.CatmullRomSpline.new = function(_p0, _p1, _p2, _p3) {
    this[_p0$] = _p0;
    this[_p1$] = _p1;
    this[_p2$] = _p2;
    this[_p3$] = _p3;
    spline.CatmullRomSpline.__proto__.new.call(this);
    ;
  }).prototype = spline.CatmullRomSpline.prototype;
  (spline.CatmullRomSpline.noEndpoints = function(p1, p2) {
    this[_p0$] = p1;
    this[_p1$] = p1;
    this[_p2$] = p2;
    this[_p3$] = p2;
    spline.CatmullRomSpline.__proto__.new.call(this);
    ;
  }).prototype = spline.CatmullRomSpline.prototype;
  dart.addTypeTests(spline.CatmullRomSpline);
  dart.addTypeCaches(spline.CatmullRomSpline);
  dart.setMethodSignature(spline.CatmullRomSpline, () => ({
    __proto__: dart.getMethods(spline.CatmullRomSpline.__proto__),
    position: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(spline.CatmullRomSpline, I[0]);
  dart.setFieldSignature(spline.CatmullRomSpline, () => ({
    __proto__: dart.getFields(spline.CatmullRomSpline.__proto__),
    [_p0$0]: dart.finalFieldType(core.double),
    [_p1$0]: dart.finalFieldType(core.double),
    [_p2$0]: dart.finalFieldType(core.double),
    [_p3$0]: dart.finalFieldType(core.double)
  }));
  const _is_CatmullRomSpline2D_default = Symbol('_is_CatmullRomSpline2D_default');
  spline.CatmullRomSpline2D$ = dart.generic(T => {
    class CatmullRomSpline2D extends spline.CatmullRom$(spline.Point2D) {
      static ['_#new#tearOff'](T, _p0, _p1, _p2, _p3) {
        return new (spline.CatmullRomSpline2D$(T)).new(_p0, _p1, _p2, _p3);
      }
      static ['_#noEndpoints#tearOff'](T, p0, p1) {
        return new (spline.CatmullRomSpline2D$(T)).noEndpoints(p0, p1);
      }
      position(distance) {
        if (distance < 0 || distance > 1) {
          dart.throw(new core.ArgumentError.value(distance, "distance", "Distance must be beteen 0 and 1."));
        }
        return new spline.Point2D.new(new spline.CatmullRomSpline.new(this[_p0$0].x, this[_p1$0].x, this[_p2$0].x, this[_p3$0].x).position(distance), new spline.CatmullRomSpline.new(this[_p0$0].y, this[_p1$0].y, this[_p2$0].y, this[_p3$0].y).position(distance));
      }
    }
    (CatmullRomSpline2D.new = function(_p0, _p1, _p2, _p3) {
      this[_p0$0] = _p0;
      this[_p1$0] = _p1;
      this[_p2$0] = _p2;
      this[_p3$0] = _p3;
      CatmullRomSpline2D.__proto__.new.call(this);
      ;
    }).prototype = CatmullRomSpline2D.prototype;
    (CatmullRomSpline2D.noEndpoints = function(p0, p1) {
      this[_p0$0] = p0;
      this[_p1$0] = p0;
      this[_p2$0] = p1;
      this[_p3$0] = p1;
      CatmullRomSpline2D.__proto__.new.call(this);
      ;
    }).prototype = CatmullRomSpline2D.prototype;
    dart.addTypeTests(CatmullRomSpline2D);
    CatmullRomSpline2D.prototype[_is_CatmullRomSpline2D_default] = true;
    dart.addTypeCaches(CatmullRomSpline2D);
    dart.setMethodSignature(CatmullRomSpline2D, () => ({
      __proto__: dart.getMethods(CatmullRomSpline2D.__proto__),
      position: dart.fnType(spline.Point2D, [core.double])
    }));
    dart.setLibraryUri(CatmullRomSpline2D, I[0]);
    dart.setFieldSignature(CatmullRomSpline2D, () => ({
      __proto__: dart.getFields(CatmullRomSpline2D.__proto__),
      [_p0$0]: dart.finalFieldType(spline.Point2D),
      [_p1$0]: dart.finalFieldType(spline.Point2D),
      [_p2$0]: dart.finalFieldType(spline.Point2D),
      [_p3$0]: dart.finalFieldType(spline.Point2D)
    }));
    return CatmullRomSpline2D;
  });
  spline.CatmullRomSpline2D = spline.CatmullRomSpline2D$();
  dart.addTypeTests(spline.CatmullRomSpline2D, _is_CatmullRomSpline2D_default);
  dart.trackLibraries("packages/latlong2/spline.dart", {
    "package:latlong2/spline.dart": spline
  }, {
    "package:latlong2/spline.dart": ["spline/CatmullRomSpline.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["spline/CatmullRomSpline.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAsBe;;;;;;IACA;;;;;;;;;;iCAEA,GAAQ;IAAR;IAAQ;;EAAE;;;;;;;;;;;;iBAOA;AAAY,6BAAS,AAAQ,OAAD,GAAG;MAAI;;;;IAHxC;;;;;;;;;;;;;;;;;;;;;;IASL;;;;;;IAAK;;;;;;IAAK;;;;;;IAAK;;;;;;;;;;;;aAUC;AAC3B,UAAI,AAAS,QAAD,GAAG,KAAK,AAAS,QAAD,GAAG;AAEgC,QAD7D,WAAoB,6BAChB,QAAQ,EAAE,YAAY;;AAG5B,YAAO,AAAI,QACL,AAAE,AAAO,AACgB,AACmC,IAFxD,cACU,CAAX,AAAI,cAAE,eAAO,QAAQ,GACc,AAAW,CAA9C,AAAE,AAAM,AAAU,AAAU,IAAxB,cAAM,AAAE,IAAE,cAAM,AAAE,IAAE,cAAM,eAAO,QAAQ,GAAG,QAAQ,GACzB,AAAW,AAAW,CAArD,AAAE,AAAM,AAAM,AAAU,IAApB,cAAM,cAAM,AAAE,IAAE,cAAM,eAAO,QAAQ,GAAG,QAAQ,GAAG,QAAQ;IAC1E;;0CAnB4B,KAAU,KAAU,KAAU;IAA9B;IAAU;IAAU;IAAU;AAApD;;EAAwD;kDACd,IAAiB;IACvD,aAAE,EAAE;IACJ,aAAE,EAAE;IACJ,aAAE,EAAE;IACJ,aAAE,EAAE;AAJR;;EAIQ;;;;;;;;;;;;;;;;;;;;;;;;eAgCgB;AAC5B,YAAI,AAAS,QAAD,GAAG,KAAK,AAAS,QAAD,GAAG;AAEgC,UAD7D,WAAoB,6BAChB,QAAQ,EAAE,YAAY;;AAG5B,cAAO,wBACH,AAA6C,gCAA5B,AAAI,eAAG,AAAI,eAAG,AAAI,eAAG,AAAI,wBAAY,QAAQ,GAC9D,AAA6C,gCAA5B,AAAI,eAAG,AAAI,eAAG,AAAI,eAAG,AAAI,wBAAY,QAAQ;MACpE;;uCAlBwB,KAAU,KAAU,KAAU;MAA9B;MAAU;MAAU;MAAU;AAAtD;;IAA0D;+CAEb,IAAkB;MACrD,cAAE,EAAE;MACJ,cAAE,EAAE;MACJ,cAAE,EAAE;MACJ,cAAE,EAAE;AAJd;;IAIc","file":"../../../../../../../../../../packages/latlong2/spline.dart.lib.js"}');
  // Exports:
  return {
    spline: spline
  };
}));

//# sourceMappingURL=spline.dart.lib.js.map
