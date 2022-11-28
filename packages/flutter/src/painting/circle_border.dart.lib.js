define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__circle_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var circle_border = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "inside",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: C[1] || CT.C1,
        [BorderSide_style]: C[2] || CT.C2,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[3] || CT.C3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: borders.StrokeAlign.prototype,
        [_Enum__name]: "outside",
        [_Enum_index]: 2
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/circle_border.dart",
    "package:flutter/src/painting/circle_border.dart"
  ];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  circle_border.CircleBorder = class CircleBorder extends borders.OutlinedBorder {
    static ['_#new#tearOff'](opts) {
      let side = opts && 'side' in opts ? opts.side : null;
      return new circle_border.CircleBorder.new({side: side});
    }
    get dimensions() {
      switch (this.side.strokeAlign) {
        case C[1] || CT.C1:
          {
            return new edge_insets.EdgeInsets.all(this.side.width);
          }
        case C[4] || CT.C4:
          {
            return new edge_insets.EdgeInsets.all(this.side.width / 2);
          }
        case C[5] || CT.C5:
          {
            return edge_insets.EdgeInsets.zero;
          }
      }
    }
    scale(t) {
      return new circle_border.CircleBorder.new({side: this.side.scale(t)});
    }
    lerpFrom(a, t) {
      if (circle_border.CircleBorder.is(a)) {
        return new circle_border.CircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (circle_border.CircleBorder.is(b)) {
        return new circle_border.CircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t)});
      }
      return super.lerpTo(b, t);
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let radius = rect.shortestSide / 2.0;
      let adjustedRadius = null;
      switch (this.side.strokeAlign) {
        case C[1] || CT.C1:
          {
            adjustedRadius = radius - this.side.width;
            break;
          }
        case C[4] || CT.C4:
          {
            adjustedRadius = radius - this.side.width / 2.0;
            break;
          }
        case C[5] || CT.C5:
          {
            adjustedRadius = radius;
            break;
          }
      }
      t0 = ui.Path.new();
      return (() => {
        t0.addOval(new ui.Rect.fromCircle({center: rect.center, radius: math.max(core.double, 0.0, adjustedRadius)}));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addOval(new ui.Rect.fromCircle({center: rect.center, radius: rect.shortestSide / 2.0}));
        return t0;
      })();
    }
    copyWith(opts) {
      let t0;
      let side = opts && 'side' in opts ? opts.side : null;
      return new circle_border.CircleBorder.new({side: (t0 = side, t0 == null ? this.side : t0)});
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C[2] || CT.C2:
          {
            break;
          }
        case C[6] || CT.C6:
          {
            let radius = null;
            switch (this.side.strokeAlign) {
              case C[1] || CT.C1:
                {
                  radius = (rect.shortestSide - this.side.width) / 2.0;
                  break;
                }
              case C[4] || CT.C4:
                {
                  radius = rect.shortestSide / 2.0;
                  break;
                }
              case C[5] || CT.C5:
                {
                  radius = (rect.shortestSide + this.side.width) / 2.0;
                  break;
                }
            }
            canvas.drawCircle(rect.center, radius, this.side.toPaint());
          }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return circle_border.CircleBorder.is(other) && other.side._equals(this.side);
    }
    get hashCode() {
      return this.side.hashCode;
    }
    toString() {
      return object.objectRuntimeType(this, "CircleBorder") + "(" + dart.str(this.side) + ")";
    }
  };
  (circle_border.CircleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
    if (!(side !== null)) dart.assertFailed(null, I[0], 30, 47, "side != null");
    circle_border.CircleBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = circle_border.CircleBorder.prototype;
  dart.addTypeTests(circle_border.CircleBorder);
  dart.addTypeCaches(circle_border.CircleBorder);
  dart.setMethodSignature(circle_border.CircleBorder, () => ({
    __proto__: dart.getMethods(circle_border.CircleBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    copyWith: dart.fnType(circle_border.CircleBorder, [], {side: dart.nullable(borders.BorderSide)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(circle_border.CircleBorder, () => ({
    __proto__: dart.getGetters(circle_border.CircleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(circle_border.CircleBorder, I[1]);
  dart.defineExtensionMethods(circle_border.CircleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(circle_border.CircleBorder, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/circle_border.dart", {
    "package:flutter/src/painting/circle_border.dart": circle_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["circle_border.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCI,cAAQ,AAAK;;;AAET,kBAAkB,gCAAI,AAAK;;;;AAE3B,kBAAkB,gCAAI,AAAK,AAAM,kBAAE;;;;AAEnC,kBAAkB;;;IAExB;UAGyB;AAAM,uDAAmB,AAAK,gBAAM,CAAC;IAAE;aAG7B,GAAU;AAC3C,UAAM,8BAAF,CAAC;AACH,cAAO,2CAA8B,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC;;AAE3D,YAAa,gBAAS,CAAC,EAAE,CAAC;IAC5B;WAGiC,GAAU;AACzC,UAAM,8BAAF,CAAC;AACH,cAAO,2CAA8B,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC;;AAE3D,YAAa,cAAO,CAAC,EAAE,CAAC;IAC1B;iBAGuB;;UAAuB;AAC/B,mBAAS,AAAK,AAAa,IAAd,gBAAgB;AAC7B;AACb,cAAQ,AAAK;;;AAE2B,YAApC,iBAAiB,AAAO,MAAD,GAAG,AAAK;AAC/B;;;;AAE0C,YAA1C,iBAAiB,AAAO,MAAD,GAAG,AAAK,AAAM,kBAAE;AACvC;;;;AAEuB,YAAvB,iBAAiB,MAAM;AACvB;;;AAEJ,WAAO;;AACH,mBAAa,gCACL,AAAK,IAAD,iBACC,sBAAI,KAAK,cAAc;;;IAE1C;iBAGuB;;UAAuB;AAC5C,WAAO;;AACH,mBAAa,gCACL,AAAK,IAAD,iBACJ,AAAK,AAAa,IAAd,gBAAgB;;;IAElC;;;UAGoC;AAClC,YAAO,4CAAwB,KAAL,IAAI,EAAJ,aAAa;IACzC;UAGkB,QAAa;UAAuB;AACpD,cAAQ,AAAK;;;AAET;;;;AAEa;AACb,oBAAQ,AAAK;;;AAEsC,kBAA/C,SAA0C,CAAhC,AAAK,AAAa,IAAd,gBAAgB,AAAK,mBAAS;AAC5C;;;;AAEgC,kBAAhC,SAAS,AAAK,AAAa,IAAd,gBAAgB;AAC7B;;;;AAE+C,kBAA/C,SAA0C,CAAhC,AAAK,AAAa,IAAd,gBAAgB,AAAK,mBAAS;AAC5C;;;AAEkD,YAAtD,AAAO,MAAD,YAAY,AAAK,IAAD,SAAS,MAAM,EAAE,AAAK;;;IAElD;YAGwB;;AACtB,WAAI,AAAM,KAAD,uBAAgB;AACvB,cAAO;;AAET,YAAa,AACT,+BADG,KAAK,KACL,AAAM,AAAK,KAAN,cAAS;IACvB;;AAGoB,YAAA,AAAK;IAAQ;;AAI/B,YAAU,AAAgD,0BAA9B,MAAM,kBAAgB,eAAE,aAAI;IAC1D;;;QA1G2B;UAAiB,AAAK,IAAD;AAA1C,+DAAqB,IAAI;;EAA0B","file":"../../../../../../../../../../packages/flutter/src/painting/circle_border.dart.lib.js"}');
  // Exports:
  return {
    src__painting__circle_border: circle_border
  };
}));

//# sourceMappingURL=circle_border.dart.lib.js.map
