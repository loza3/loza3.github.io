define(['dart_sdk'], (function load__packages__lottie__src__value__drop_shadow_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var drop_shadow = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/value/drop_shadow.dart"];
  var color$ = dart.privateName(drop_shadow, "DropShadow.color");
  var direction$ = dart.privateName(drop_shadow, "DropShadow.direction");
  var distance$ = dart.privateName(drop_shadow, "DropShadow.distance");
  var radius$ = dart.privateName(drop_shadow, "DropShadow.radius");
  drop_shadow.DropShadow = class DropShadow extends core.Object {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let direction = opts && 'direction' in opts ? opts.direction : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      return new drop_shadow.DropShadow.new({color: color, direction: direction, distance: distance, radius: radius});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let color = opts && 'color' in opts ? opts.color : null;
      let direction = opts && 'direction' in opts ? opts.direction : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      return new drop_shadow.DropShadow.new({color: (t0 = color, t0 == null ? this.color : t0), direction: (t0$ = direction, t0$ == null ? this.direction : t0$), distance: (t0$0 = distance, t0$0 == null ? this.distance : t0$0), radius: (t0$1 = radius, t0$1 == null ? this.radius : t0$1)});
    }
    _equals(other) {
      if (other == null) return false;
      return drop_shadow.DropShadow.is(other) && other.color._equals(this.color) && other.direction === this.direction && other.distance === this.distance && other.radius === this.radius;
    }
    get hashCode() {
      return core.Object.hash(this.color, this.direction, this.distance, this.radius);
    }
    toString() {
      return "DropShadow(color: " + dart.str(this.color) + ", direction: " + dart.str(this.direction) + ", " + "distance: " + dart.str(this.distance) + ", radius: " + dart.str(this.radius) + ")";
    }
  };
  (drop_shadow.DropShadow.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let direction = opts && 'direction' in opts ? opts.direction : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    this[color$] = color;
    this[direction$] = direction;
    this[distance$] = distance;
    this[radius$] = radius;
    ;
  }).prototype = drop_shadow.DropShadow.prototype;
  dart.addTypeTests(drop_shadow.DropShadow);
  dart.addTypeCaches(drop_shadow.DropShadow);
  dart.setMethodSignature(drop_shadow.DropShadow, () => ({
    __proto__: dart.getMethods(drop_shadow.DropShadow.__proto__),
    copyWith: dart.fnType(drop_shadow.DropShadow, [], {color: dart.nullable(ui.Color), direction: dart.nullable(core.double), distance: dart.nullable(core.double), radius: dart.nullable(core.double)}, {})
  }));
  dart.setLibraryUri(drop_shadow.DropShadow, I[0]);
  dart.setFieldSignature(drop_shadow.DropShadow, () => ({
    __proto__: dart.getFields(drop_shadow.DropShadow.__proto__),
    color: dart.finalFieldType(ui.Color),
    direction: dart.finalFieldType(core.double),
    distance: dart.finalFieldType(core.double),
    radius: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(drop_shadow.DropShadow, ['_equals', 'toString']);
  dart.defineExtensionAccessors(drop_shadow.DropShadow, ['hashCode']);
  dart.trackLibraries("packages/lottie/src/value/drop_shadow.dart", {
    "package:lottie/src/value/drop_shadow.dart": drop_shadow
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["drop_shadow.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAGc;;;;;;IACC;;;;;;IACA;;;;;;IACA;;;;;;;;;;;;;;;UAUD;UAAe;UAAmB;UAAkB;AAC9D,YAAO,yCACQ,KAAN,KAAK,EAAL,aAAc,8BACA,MAAV,SAAS,EAAT,cAAkB,kCACV,OAAT,QAAQ,EAAR,eAAiB,gCACZ,OAAP,MAAM,EAAN,eAAe;IAE3B;YAGiB;;AACf,YAAa,AAGkB,2BAHxB,KAAK,KACR,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAU,KAAX,eAAc,kBACnB,AAAM,AAAS,KAAV,cAAa,iBAClB,AAAM,AAAO,KAAR,YAAW;IACtB;;AAGoB,YAAO,kBAAK,YAAO,gBAAW,eAAU;IAAO;;AAG9C,YAAH,AAAG,iCAAoB,cAAK,2BAAc,kBAAS,OACjE,wBAAY,iBAAQ,wBAAW,eAAM;IAAE;;;QA9B3B;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACd","file":"../../../../../../../../../../../../packages/lottie/src/value/drop_shadow.dart.lib.js"}');
  // Exports:
  return {
    src__value__drop_shadow: drop_shadow
  };
}));

//# sourceMappingURL=drop_shadow.dart.lib.js.map
