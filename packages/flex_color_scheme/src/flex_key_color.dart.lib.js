define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flex_color_scheme__src__flex_key_color_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var flex_key_color = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flex_color_scheme/src/flex_key_color.dart"];
  var useKeyColors$ = dart.privateName(flex_key_color, "FlexKeyColors.useKeyColors");
  var useSecondary$ = dart.privateName(flex_key_color, "FlexKeyColors.useSecondary");
  var useTertiary$ = dart.privateName(flex_key_color, "FlexKeyColors.useTertiary");
  var keepPrimary$ = dart.privateName(flex_key_color, "FlexKeyColors.keepPrimary");
  var keepSecondary$ = dart.privateName(flex_key_color, "FlexKeyColors.keepSecondary");
  var keepTertiary$ = dart.privateName(flex_key_color, "FlexKeyColors.keepTertiary");
  var keepPrimaryContainer$ = dart.privateName(flex_key_color, "FlexKeyColors.keepPrimaryContainer");
  var keepSecondaryContainer$ = dart.privateName(flex_key_color, "FlexKeyColors.keepSecondaryContainer");
  var keepTertiaryContainer$ = dart.privateName(flex_key_color, "FlexKeyColors.keepTertiaryContainer");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  flex_key_color.FlexKeyColors = class FlexKeyColors extends Object_Diagnosticable$36 {
    get useKeyColors() {
      return this[useKeyColors$];
    }
    set useKeyColors(value) {
      super.useKeyColors = value;
    }
    get useSecondary() {
      return this[useSecondary$];
    }
    set useSecondary(value) {
      super.useSecondary = value;
    }
    get useTertiary() {
      return this[useTertiary$];
    }
    set useTertiary(value) {
      super.useTertiary = value;
    }
    get keepPrimary() {
      return this[keepPrimary$];
    }
    set keepPrimary(value) {
      super.keepPrimary = value;
    }
    get keepSecondary() {
      return this[keepSecondary$];
    }
    set keepSecondary(value) {
      super.keepSecondary = value;
    }
    get keepTertiary() {
      return this[keepTertiary$];
    }
    set keepTertiary(value) {
      super.keepTertiary = value;
    }
    get keepPrimaryContainer() {
      return this[keepPrimaryContainer$];
    }
    set keepPrimaryContainer(value) {
      super.keepPrimaryContainer = value;
    }
    get keepSecondaryContainer() {
      return this[keepSecondaryContainer$];
    }
    set keepSecondaryContainer(value) {
      super.keepSecondaryContainer = value;
    }
    get keepTertiaryContainer() {
      return this[keepTertiaryContainer$];
    }
    set keepTertiaryContainer(value) {
      super.keepTertiaryContainer = value;
    }
    static ['_#new#tearOff'](opts) {
      let useKeyColors = opts && 'useKeyColors' in opts ? opts.useKeyColors : true;
      let useSecondary = opts && 'useSecondary' in opts ? opts.useSecondary : false;
      let useTertiary = opts && 'useTertiary' in opts ? opts.useTertiary : false;
      let keepPrimary = opts && 'keepPrimary' in opts ? opts.keepPrimary : false;
      let keepSecondary = opts && 'keepSecondary' in opts ? opts.keepSecondary : false;
      let keepTertiary = opts && 'keepTertiary' in opts ? opts.keepTertiary : false;
      let keepPrimaryContainer = opts && 'keepPrimaryContainer' in opts ? opts.keepPrimaryContainer : false;
      let keepSecondaryContainer = opts && 'keepSecondaryContainer' in opts ? opts.keepSecondaryContainer : false;
      let keepTertiaryContainer = opts && 'keepTertiaryContainer' in opts ? opts.keepTertiaryContainer : false;
      return new flex_key_color.FlexKeyColors.new({useKeyColors: useKeyColors, useSecondary: useSecondary, useTertiary: useTertiary, keepPrimary: keepPrimary, keepSecondary: keepSecondary, keepTertiary: keepTertiary, keepPrimaryContainer: keepPrimaryContainer, keepSecondaryContainer: keepSecondaryContainer, keepTertiaryContainer: keepTertiaryContainer});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      let useKeyColors = opts && 'useKeyColors' in opts ? opts.useKeyColors : null;
      let useSecondary = opts && 'useSecondary' in opts ? opts.useSecondary : null;
      let useTertiary = opts && 'useTertiary' in opts ? opts.useTertiary : null;
      let keepPrimary = opts && 'keepPrimary' in opts ? opts.keepPrimary : null;
      let keepSecondary = opts && 'keepSecondary' in opts ? opts.keepSecondary : null;
      let keepTertiary = opts && 'keepTertiary' in opts ? opts.keepTertiary : null;
      let keepPrimaryContainer = opts && 'keepPrimaryContainer' in opts ? opts.keepPrimaryContainer : null;
      let keepSecondaryContainer = opts && 'keepSecondaryContainer' in opts ? opts.keepSecondaryContainer : null;
      let keepTertiaryContainer = opts && 'keepTertiaryContainer' in opts ? opts.keepTertiaryContainer : null;
      return new flex_key_color.FlexKeyColors.new({useKeyColors: (t0 = useKeyColors, t0 == null ? this.useKeyColors : t0), useSecondary: (t0$ = useSecondary, t0$ == null ? this.useSecondary : t0$), useTertiary: (t0$0 = useTertiary, t0$0 == null ? this.useTertiary : t0$0), keepPrimary: (t0$1 = keepPrimary, t0$1 == null ? this.keepPrimary : t0$1), keepSecondary: (t0$2 = keepSecondary, t0$2 == null ? this.keepSecondary : t0$2), keepTertiary: (t0$3 = keepTertiary, t0$3 == null ? this.keepTertiary : t0$3), keepPrimaryContainer: (t0$4 = keepPrimaryContainer, t0$4 == null ? this.keepPrimaryContainer : t0$4), keepSecondaryContainer: (t0$5 = keepSecondaryContainer, t0$5 == null ? this.keepSecondaryContainer : t0$5), keepTertiaryContainer: (t0$6 = keepTertiaryContainer, t0$6 == null ? this.keepTertiaryContainer : t0$6)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return flex_key_color.FlexKeyColors.is(other) && other.useKeyColors === this.useKeyColors && other.useSecondary === this.useSecondary && other.useTertiary === this.useTertiary && other.keepPrimary === this.keepPrimary && other.keepSecondary === this.keepSecondary && other.keepTertiary === this.keepTertiary && other.keepPrimaryContainer === this.keepPrimaryContainer && other.keepSecondaryContainer === this.keepSecondaryContainer && other.keepTertiaryContainer === this.keepTertiaryContainer;
    }
    get hashCode() {
      return core.Object.hash(this.useKeyColors, this.useSecondary, this.useTertiary, this.keepPrimary, this.keepSecondary, this.keepTertiary, this.keepPrimaryContainer, this.keepSecondaryContainer, this.keepTertiaryContainer);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("useKeyColors", this.useKeyColors));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("useSecondary", this.useSecondary));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("useTertiary", this.useTertiary));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("keepPrimary", this.keepPrimary));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("keepSecondary", this.keepSecondary));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("keepTertiary", this.keepTertiary));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("keepPrimaryContainer", this.keepPrimaryContainer));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("keepSecondaryContainer", this.keepSecondaryContainer));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("keepTertiaryContainer", this.keepTertiaryContainer));
    }
  };
  (flex_key_color.FlexKeyColors.new = function(opts) {
    let useKeyColors = opts && 'useKeyColors' in opts ? opts.useKeyColors : true;
    let useSecondary = opts && 'useSecondary' in opts ? opts.useSecondary : false;
    let useTertiary = opts && 'useTertiary' in opts ? opts.useTertiary : false;
    let keepPrimary = opts && 'keepPrimary' in opts ? opts.keepPrimary : false;
    let keepSecondary = opts && 'keepSecondary' in opts ? opts.keepSecondary : false;
    let keepTertiary = opts && 'keepTertiary' in opts ? opts.keepTertiary : false;
    let keepPrimaryContainer = opts && 'keepPrimaryContainer' in opts ? opts.keepPrimaryContainer : false;
    let keepSecondaryContainer = opts && 'keepSecondaryContainer' in opts ? opts.keepSecondaryContainer : false;
    let keepTertiaryContainer = opts && 'keepTertiaryContainer' in opts ? opts.keepTertiaryContainer : false;
    this[useKeyColors$] = useKeyColors;
    this[useSecondary$] = useSecondary;
    this[useTertiary$] = useTertiary;
    this[keepPrimary$] = keepPrimary;
    this[keepSecondary$] = keepSecondary;
    this[keepTertiary$] = keepTertiary;
    this[keepPrimaryContainer$] = keepPrimaryContainer;
    this[keepSecondaryContainer$] = keepSecondaryContainer;
    this[keepTertiaryContainer$] = keepTertiaryContainer;
    ;
  }).prototype = flex_key_color.FlexKeyColors.prototype;
  dart.addTypeTests(flex_key_color.FlexKeyColors);
  dart.addTypeCaches(flex_key_color.FlexKeyColors);
  dart.setMethodSignature(flex_key_color.FlexKeyColors, () => ({
    __proto__: dart.getMethods(flex_key_color.FlexKeyColors.__proto__),
    copyWith: dart.fnType(flex_key_color.FlexKeyColors, [], {keepPrimary: dart.nullable(core.bool), keepPrimaryContainer: dart.nullable(core.bool), keepSecondary: dart.nullable(core.bool), keepSecondaryContainer: dart.nullable(core.bool), keepTertiary: dart.nullable(core.bool), keepTertiaryContainer: dart.nullable(core.bool), useKeyColors: dart.nullable(core.bool), useSecondary: dart.nullable(core.bool), useTertiary: dart.nullable(core.bool)}, {})
  }));
  dart.setLibraryUri(flex_key_color.FlexKeyColors, I[0]);
  dart.setFieldSignature(flex_key_color.FlexKeyColors, () => ({
    __proto__: dart.getFields(flex_key_color.FlexKeyColors.__proto__),
    useKeyColors: dart.finalFieldType(core.bool),
    useSecondary: dart.finalFieldType(core.bool),
    useTertiary: dart.finalFieldType(core.bool),
    keepPrimary: dart.finalFieldType(core.bool),
    keepSecondary: dart.finalFieldType(core.bool),
    keepTertiary: dart.finalFieldType(core.bool),
    keepPrimaryContainer: dart.finalFieldType(core.bool),
    keepSecondaryContainer: dart.finalFieldType(core.bool),
    keepTertiaryContainer: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(flex_key_color.FlexKeyColors, ['_equals']);
  dart.defineExtensionAccessors(flex_key_color.FlexKeyColors, ['hashCode']);
  dart.trackLibraries("packages/flex_color_scheme/src/flex_key_color.dart", {
    "package:flex_color_scheme/src/flex_key_color.dart": flex_key_color
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_key_color.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiIa;;;;;;IAWA;;;;;;IAWA;;;;;;IA0BA;;;;;;IA0BA;;;;;;IA0BA;;;;;;IAmBA;;;;;;IAmBA;;;;;;IAmBA;;;;;;;;;;;;;;;;;;;;UAIG;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;AAEZ,YAAO,sDACsB,KAAb,YAAY,EAAZ,aAAqB,wCACR,MAAb,YAAY,EAAZ,cAAqB,wCACV,OAAZ,WAAW,EAAX,eAAoB,wCACR,OAAZ,WAAW,EAAX,eAAoB,0CACJ,OAAd,aAAa,EAAb,eAAsB,2CACV,OAAb,YAAY,EAAZ,eAAqB,kDACQ,OAArB,oBAAoB,EAApB,eAA6B,4DAExB,OAAvB,sBAAsB,EAAtB,eAA+B,6DAET,OAAtB,qBAAqB,EAArB,eAA8B;IAEtC;YAIwB;;AACtB,UAAI,AAAU,SAAM,KAAK,EAAG,MAAO;AACnC,WAAI,AAAM,KAAD,uBAAgB,qBAAa,MAAO;AAC7C,YAAa,AAQ8C,iCARpD,KAAK,KACR,AAAM,AAAa,KAAd,kBAAiB,qBACtB,AAAM,AAAa,KAAd,kBAAiB,qBACtB,AAAM,AAAY,KAAb,iBAAgB,oBACrB,AAAM,AAAY,KAAb,iBAAgB,oBACrB,AAAM,AAAc,KAAf,mBAAkB,sBACvB,AAAM,AAAa,KAAd,kBAAiB,qBACtB,AAAM,AAAqB,KAAtB,0BAAyB,6BAC9B,AAAM,AAAuB,KAAxB,4BAA2B,+BAChC,AAAM,AAAsB,KAAvB,2BAA0B;IACrC;;AAIoB,YAAO,kBACrB,mBACA,mBACA,kBACA,kBACA,oBACA,mBACA,2BACA,6BACA;IACD;wBAIgD;AACd,MAA/B,0BAAoB,UAAU;AACmC,MAAvE,AAAW,UAAD,KAAK,wCAA0B,gBAAgB;AACc,MAAvE,AAAW,UAAD,KAAK,wCAA0B,gBAAgB;AACY,MAArE,AAAW,UAAD,KAAK,wCAA0B,eAAe;AACa,MAArE,AAAW,UAAD,KAAK,wCAA0B,eAAe;AACiB,MAAzE,AAAW,UAAD,KAAK,wCAA0B,iBAAiB;AACa,MAAvE,AAAW,UAAD,KAAK,wCAA0B,gBAAgB;AAEP,MADlD,AAAW,UAAD,KAAK,wCACX,wBAAwB;AAE0B,MADtD,AAAW,UAAD,KAAK,wCACX,0BAA0B;AAEsB,MADpD,AAAW,UAAD,KAAK,wCACX,yBAAyB;IAC/B;;;QAhQO;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IARA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"../../../../../../../../../../../packages/flex_color_scheme/src/flex_key_color.dart.lib.js"}');
  // Exports:
  return {
    src__flex_key_color: flex_key_color
  };
}));

//# sourceMappingURL=flex_key_color.dart.lib.js.map
