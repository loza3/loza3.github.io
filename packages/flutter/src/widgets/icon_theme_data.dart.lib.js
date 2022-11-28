define(['dart_sdk', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/title.dart'], (function load__packages__flutter__src__widgets__icon_theme_data_dart(dart_sdk, packages__flutter__src__foundation__math$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__title$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  var icon_theme_data = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IterablePropertyOfShadow: () => (T.IterablePropertyOfShadow = dart.constFn(diagnostics.IterableProperty$(ui.Shadow)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/icon_theme_data.dart",
    "package:flutter/src/widgets/icon_theme_data.dart"
  ];
  var color$ = dart.privateName(icon_theme_data, "IconThemeData.color");
  var _opacity = dart.privateName(icon_theme_data, "IconThemeData._opacity");
  var size$ = dart.privateName(icon_theme_data, "IconThemeData.size");
  var shadows$ = dart.privateName(icon_theme_data, "IconThemeData.shadows");
  var Color_value = dart.privateName(ui, "Color.value");
  var _opacity$ = dart.privateName(icon_theme_data, "_opacity");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  icon_theme_data.IconThemeData = class IconThemeData extends Object_Diagnosticable$36 {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get [_opacity$]() {
      return this[_opacity];
    }
    set [_opacity$](value) {
      super[_opacity$] = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get shadows() {
      return this[shadows$];
    }
    set shadows(value) {
      super.shadows = value;
    }
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      return new icon_theme_data.IconThemeData.new({color: color, opacity: opacity, size: size, shadows: shadows});
    }
    static ['_#fallback#tearOff']() {
      return new icon_theme_data.IconThemeData.fallback();
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      return new icon_theme_data.IconThemeData.new({color: (t0 = color, t0 == null ? this.color : t0), opacity: (t0$ = opacity, t0$ == null ? this.opacity : t0$), size: (t0$0 = size, t0$0 == null ? this.size : t0$0), shadows: (t0$1 = shadows, t0$1 == null ? this.shadows : t0$1)});
    }
    merge(other) {
      if (other == null) {
        return this;
      }
      return this.copyWith({color: other.color, opacity: other.opacity, size: other.size, shadows: other.shadows});
    }
    resolve(context) {
      return this;
    }
    get isConcrete() {
      return this.color != null && this.opacity != null && this.size != null;
    }
    get opacity() {
      return this[_opacity$] == null ? null : math.clampDouble(dart.nullCheck(this[_opacity$]), 0.0, 1.0);
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      if (!(t !== null)) dart.assertFailed(null, I[0], 101, 12, "t != null");
      return new icon_theme_data.IconThemeData.new({color: ui.Color.lerp((t0 = a, t0 == null ? null : t0.color), (t0$ = b, t0$ == null ? null : t0$.color), t), opacity: ui.lerpDouble((t0$0 = a, t0$0 == null ? null : t0$0.opacity), (t0$1 = b, t0$1 == null ? null : t0$1.opacity), t), size: ui.lerpDouble((t0$2 = a, t0$2 == null ? null : t0$2.size), (t0$3 = b, t0$3 == null ? null : t0$3.size), t), shadows: ui.Shadow.lerpList((t0$4 = a, t0$4 == null ? null : t0$4.shadows), (t0$5 = b, t0$5 == null ? null : t0$5.shadows), t)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return icon_theme_data.IconThemeData.is(other) && dart.equals(other.color, this.color) && other.opacity == this.opacity && other.size == this.size && collections.listEquals(ui.Shadow, other.shadows, this.shadows);
    }
    get hashCode() {
      return core.Object.hash(this.color, this.opacity, this.size, this.shadows == null ? null : core.Object.hashAll(dart.nullCheck(this.shadows)));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: null}));
      properties.add(new (T.IterablePropertyOfShadow()).new("shadows", this.shadows, {defaultValue: null}));
    }
  };
  (icon_theme_data.IconThemeData.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    this[color$] = color;
    this[size$] = size;
    this[shadows$] = shadows;
    this[_opacity] = opacity;
    ;
  }).prototype = icon_theme_data.IconThemeData.prototype;
  (icon_theme_data.IconThemeData.fallback = function() {
    this[color$] = C[0] || CT.C0;
    this[_opacity] = 1.0;
    this[size$] = 24.0;
    this[shadows$] = null;
    ;
  }).prototype = icon_theme_data.IconThemeData.prototype;
  dart.addTypeTests(icon_theme_data.IconThemeData);
  dart.addTypeCaches(icon_theme_data.IconThemeData);
  dart.setMethodSignature(icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getMethods(icon_theme_data.IconThemeData.__proto__),
    copyWith: dart.fnType(icon_theme_data.IconThemeData, [], {color: dart.nullable(ui.Color), opacity: dart.nullable(core.double), shadows: dart.nullable(core.List$(ui.Shadow)), size: dart.nullable(core.double)}, {}),
    merge: dart.fnType(icon_theme_data.IconThemeData, [dart.nullable(icon_theme_data.IconThemeData)]),
    resolve: dart.fnType(icon_theme_data.IconThemeData, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(icon_theme_data.IconThemeData, () => ['lerp']);
  dart.setGetterSignature(icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getGetters(icon_theme_data.IconThemeData.__proto__),
    isConcrete: core.bool,
    opacity: dart.nullable(core.double)
  }));
  dart.setLibraryUri(icon_theme_data.IconThemeData, I[1]);
  dart.setFieldSignature(icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getFields(icon_theme_data.IconThemeData.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    [_opacity$]: dart.finalFieldType(dart.nullable(core.double)),
    size: dart.finalFieldType(dart.nullable(core.double)),
    shadows: dart.finalFieldType(dart.nullable(core.List$(ui.Shadow)))
  }));
  dart.defineExtensionMethods(icon_theme_data.IconThemeData, ['_equals']);
  dart.defineExtensionAccessors(icon_theme_data.IconThemeData, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/widgets/icon_theme_data.dart", {
    "package:flutter/src/widgets/icon_theme_data.dart": icon_theme_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_theme_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoFe;;;;;;IAIC;;;;;;IAGA;;;;;;IAGM;;;;;;;;;;;;;;;;;;UAxDW;UAAe;UAAiB;UAAoB;AACjF,YAAO,gDACQ,KAAN,KAAK,EAAL,aAAc,4BACJ,MAAR,OAAO,EAAP,cAAgB,4BACd,OAAL,IAAI,EAAJ,eAAa,6BACF,OAAR,OAAO,EAAP,eAAgB;IAE7B;UAKmC;AACjC,UAAI,AAAM,KAAD;AACP,cAAO;;AAET,YAAO,uBACE,AAAM,KAAD,iBACH,AAAM,KAAD,gBACR,AAAM,KAAD,gBACF,AAAM,KAAD;IAElB;YAkBmC;AAAY;IAAI;;AAG5B,YAAA,AAAiC,uBAAhB,wBAAmB;IAAY;;AAMhD,YAAA,AAAS,2BAAU,OAAO,iBAAoB,eAAR,kBAAW,KAAK;IAAI;gBAYxC,GAAkB,GAAU;;AACnE,YAAO,AAAE,CAAD;AACR,YAAO,+CACQ,oBAAK,CAAC,eAAD,OAAG,kBAAO,CAAC,gBAAD,OAAG,YAAO,CAAC,YAC3B,sBAAW,CAAC,iBAAD,OAAG,uBAAS,CAAC,iBAAD,OAAG,eAAS,CAAC,SACvC,sBAAW,CAAC,iBAAD,OAAG,oBAAM,CAAC,iBAAD,OAAG,YAAM,CAAC,YACvB,2BAAS,CAAC,iBAAD,OAAG,uBAAS,CAAC,iBAAD,OAAG,eAAS,CAAC;IAEtD;YAGwB;;AACtB,WAAI,AAAM,KAAD,uBAAgB;AACvB,cAAO;;AAET,YAAa,AAIT,kCAJG,KAAK,KACO,YAAZ,AAAM,KAAD,QAAU,eACf,AAAM,AAAQ,KAAT,YAAY,gBACjB,AAAM,AAAK,KAAN,SAAS,aACd,kCAAW,AAAM,KAAD,UAAU;IACnC;;AAGoB,YAAO,kBACzB,YACA,cACA,WACA,AAAQ,uBAAU,OAAc,oBAAe,eAAP;IACzC;wBAGoD;AACd,MAA/B,0BAAoB,UAAU;AAC6B,MAAjE,AAAW,UAAD,KAAK,6BAAc,SAAS,2BAAqB;AACW,MAAtE,AAAW,UAAD,KAAK,mCAAe,WAAW,6BAAuB;AACA,MAAhE,AAAW,UAAD,KAAK,mCAAe,QAAQ,0BAAoB;AACsB,MAAhF,AAAW,UAAD,KAAK,uCAAyB,WAAW,6BAAuB;IAC5E;;;QA/G0B;QAAe;QAAc;QAAW;IAAxC;IAA6B;IAAW;IAAqB,iBAAE,OAAO;;;;IAMpF;IACG,iBAAE;IACN,cAAE;IACC,iBAAE;;EAAI","file":"../../../../../../../../../../packages/flutter/src/widgets/icon_theme_data.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__icon_theme_data: icon_theme_data
  };
}));

//# sourceMappingURL=icon_theme_data.dart.lib.js.map
