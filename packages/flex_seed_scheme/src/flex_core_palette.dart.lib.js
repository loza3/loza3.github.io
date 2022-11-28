define(['dart_sdk', 'packages/material_color_utilities/hct/hct.dart', 'packages/material_color_utilities/hct/cam16.dart'], (function load__packages__flex_seed_scheme__src__flex_core_palette_dart(dart_sdk, packages__material_color_utilities__hct__hct$46dart, packages__material_color_utilities__hct__cam16$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hct = packages__material_color_utilities__hct__hct$46dart.hct__hct;
  const cam16 = packages__material_color_utilities__hct__cam16$46dart.hct__cam16;
  var flex_core_palette = Object.create(dart.library);
  var $length = dartx.length;
  var $asMap = dartx.asMap;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $containsKey = dartx.containsKey;
  var $toDouble = dartx.toDouble;
  var $putIfAbsent = dartx.putIfAbsent;
  var $values = dartx.values;
  var $toSet = dartx.toSet;
  var $addAll = dartx.addAll;
  var $sublist = dartx.sublist;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    IdentityMapOfint$int: () => (T.IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))(),
    intAndintTovoid: () => (T.intAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int])))(),
    VoidToint: () => (T.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    JSArrayOfObjectN: () => (T.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T.ObjectN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100], core.int);
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/.pub-cache/hosted/pub.dartlang.org/flex_seed_scheme-1.0.1/lib/src/flex_core_palette.dart",
    "package:flex_seed_scheme/src/flex_core_palette.dart"
  ];
  var _hue = dart.privateName(flex_core_palette, "FlexTonalPalette._hue");
  var _chroma = dart.privateName(flex_core_palette, "FlexTonalPalette._chroma");
  var _cache = dart.privateName(flex_core_palette, "FlexTonalPalette._cache");
  var _hue$ = dart.privateName(flex_core_palette, "_hue");
  var _chroma$ = dart.privateName(flex_core_palette, "_chroma");
  var _cache$ = dart.privateName(flex_core_palette, "_cache");
  flex_core_palette.FlexTonalPalette = class FlexTonalPalette extends core.Object {
    get [_hue$]() {
      return this[_hue];
    }
    set [_hue$](value) {
      super[_hue$] = value;
    }
    get [_chroma$]() {
      return this[_chroma];
    }
    set [_chroma$](value) {
      super[_chroma$] = value;
    }
    get [_cache$]() {
      return this[_cache];
    }
    set [_cache$](value) {
      super[_cache$] = value;
    }
    static ['_#_fromHueAndChroma#tearOff'](hue, chroma) {
      return new flex_core_palette.FlexTonalPalette._fromHueAndChroma(hue, chroma);
    }
    static ['_#_fromCache#tearOff'](cache) {
      return new flex_core_palette.FlexTonalPalette._fromCache(cache);
    }
    static of(hue, chroma) {
      return new flex_core_palette.FlexTonalPalette._fromHueAndChroma(hue, chroma);
    }
    static fromList(colors) {
      if (!(colors[$length] === 15)) dart.assertFailed("Length must be " + dart.str(15), I[0], 128, 12, "colors.length == commonSize");
      let cache = null;
      cache = new (T.IdentityMapOfint$int()).new();
      flex_core_palette.FlexTonalPalette.commonTones[$asMap]()[$forEach](dart.fn((index, toneValue) => {
        let t2, t1, t0;
        t0 = cache;
        t1 = toneValue;
        t2 = colors[$_get](index);
        t0[$_set](t1, t2);
        return t2;
      }, T.intAndintTovoid()));
      return new flex_core_palette.FlexTonalPalette._fromCache(cache);
    }
    get asList() {
      return flex_core_palette.FlexTonalPalette.commonTones[$map](core.int, dart.bind(this, 'get'))[$toList]();
    }
    get(tone) {
      if (this[_hue$] == null || this[_chroma$] == null) {
        if (!this[_cache$][$containsKey](tone)) {
          dart.throw(new core.ArgumentError.value(tone, "tone", "When a FlexTonalPalette is created with fromList, tone must be " + "one of " + dart.str(flex_core_palette.FlexTonalPalette.commonTones)));
        } else {
          return dart.nullCheck(this[_cache$][$_get](tone));
        }
      }
      let chroma = tone >= 90.0 ? math.min(core.double, dart.nullCheck(this[_chroma$]), 40.0) : dart.nullCheck(this[_chroma$]);
      return this[_cache$][$putIfAbsent](tone, dart.fn(() => hct.Hct.from(dart.nullCheck(this[_hue$]), chroma, tone[$toDouble]()).toInt(), T.VoidToint()));
    }
    _equals(other) {
      if (other == null) return false;
      if (flex_core_palette.FlexTonalPalette.is(other)) {
        if (this[_hue$] != null && this[_chroma$] != null) {
          return this[_hue$] == other[_hue$] && this[_chroma$] == other[_chroma$];
        } else {
          return this[_cache$][$values][$toSet]().containsAll(other[_cache$][$values]);
        }
      }
      return false;
    }
    get hashCode() {
      return (core.Object.hash(this[_hue$], this[_chroma$]) ^ core.Object.hashAll(this[_cache$][$values])) >>> 0;
    }
    toString() {
      if (this[_hue$] != null && this[_chroma$] != null) {
        return "FlexTonalPalette.of(" + dart.str(this[_hue$]) + ", " + dart.str(this[_chroma$]) + ")";
      } else {
        return "FlexTonalPalette.fromList(" + dart.str(this[_cache$]) + ")";
      }
    }
  };
  (flex_core_palette.FlexTonalPalette._fromHueAndChroma = function(hue, chroma) {
    this[_cache] = new (T.IdentityMapOfint$int()).new();
    this[_hue] = hue;
    this[_chroma] = chroma;
    ;
  }).prototype = flex_core_palette.FlexTonalPalette.prototype;
  (flex_core_palette.FlexTonalPalette._fromCache = function(cache) {
    this[_cache] = cache;
    this[_hue] = null;
    this[_chroma] = null;
    ;
  }).prototype = flex_core_palette.FlexTonalPalette.prototype;
  dart.addTypeTests(flex_core_palette.FlexTonalPalette);
  dart.addTypeCaches(flex_core_palette.FlexTonalPalette);
  dart.setMethodSignature(flex_core_palette.FlexTonalPalette, () => ({
    __proto__: dart.getMethods(flex_core_palette.FlexTonalPalette.__proto__),
    get: dart.fnType(core.int, [core.int])
  }));
  dart.setStaticMethodSignature(flex_core_palette.FlexTonalPalette, () => ['of', 'fromList']);
  dart.setGetterSignature(flex_core_palette.FlexTonalPalette, () => ({
    __proto__: dart.getGetters(flex_core_palette.FlexTonalPalette.__proto__),
    asList: core.List$(core.int)
  }));
  dart.setLibraryUri(flex_core_palette.FlexTonalPalette, I[1]);
  dart.setFieldSignature(flex_core_palette.FlexTonalPalette, () => ({
    __proto__: dart.getFields(flex_core_palette.FlexTonalPalette.__proto__),
    [_hue$]: dart.finalFieldType(dart.nullable(core.double)),
    [_chroma$]: dart.finalFieldType(dart.nullable(core.double)),
    [_cache$]: dart.finalFieldType(core.Map$(core.int, core.int))
  }));
  dart.setStaticFieldSignature(flex_core_palette.FlexTonalPalette, () => ['commonTones', 'commonSize']);
  dart.defineExtensionMethods(flex_core_palette.FlexTonalPalette, ['_equals', 'toString']);
  dart.defineExtensionAccessors(flex_core_palette.FlexTonalPalette, ['hashCode']);
  dart.defineLazy(flex_core_palette.FlexTonalPalette, {
    /*flex_core_palette.FlexTonalPalette.commonTones*/get commonTones() {
      return C[0] || CT.C0;
    },
    /*flex_core_palette.FlexTonalPalette.commonSize*/get commonSize() {
      return 15;
    }
  }, false);
  var primary$ = dart.privateName(flex_core_palette, "FlexCorePalette.primary");
  var secondary$ = dart.privateName(flex_core_palette, "FlexCorePalette.secondary");
  var tertiary$ = dart.privateName(flex_core_palette, "FlexCorePalette.tertiary");
  var neutral$ = dart.privateName(flex_core_palette, "FlexCorePalette.neutral");
  var neutralVariant$ = dart.privateName(flex_core_palette, "FlexCorePalette.neutralVariant");
  var _error = dart.privateName(flex_core_palette, "FlexCorePalette._error");
  var _error$ = dart.privateName(flex_core_palette, "_error");
  flex_core_palette.FlexCorePalette = class FlexCorePalette extends core.Object {
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get secondary() {
      return this[secondary$];
    }
    set secondary(value) {
      super.secondary = value;
    }
    get tertiary() {
      return this[tertiary$];
    }
    set tertiary(value) {
      super.tertiary = value;
    }
    get neutral() {
      return this[neutral$];
    }
    set neutral(value) {
      super.neutral = value;
    }
    get neutralVariant() {
      return this[neutralVariant$];
    }
    set neutralVariant(value) {
      super.neutralVariant = value;
    }
    get [_error$]() {
      return this[_error];
    }
    set [_error$](value) {
      super[_error$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let neutral = opts && 'neutral' in opts ? opts.neutral : null;
      let neutralVariant = opts && 'neutralVariant' in opts ? opts.neutralVariant : null;
      let error = opts && 'error' in opts ? opts.error : null;
      return new flex_core_palette.FlexCorePalette.new({primary: primary, secondary: secondary, tertiary: tertiary, neutral: neutral, neutralVariant: neutralVariant, error: error});
    }
    get error() {
      let t0;
      t0 = this[_error$];
      return t0 == null ? flex_core_palette.FlexTonalPalette.of(25.0, 84.0) : t0;
    }
    static of(argb) {
      let cam = cam16.Cam16.fromInt(argb);
      return new flex_core_palette.FlexCorePalette.fromHueChroma(cam.hue, cam.chroma);
    }
    static ['_#fromHueChroma#tearOff'](hue, chroma) {
      return new flex_core_palette.FlexCorePalette.fromHueChroma(hue, chroma);
    }
    static fromSeeds(opts) {
      let t0, t0$, t0$0;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let primaryChroma = opts && 'primaryChroma' in opts ? opts.primaryChroma : null;
      let primaryMinChroma = opts && 'primaryMinChroma' in opts ? opts.primaryMinChroma : 48;
      let secondaryChroma = opts && 'secondaryChroma' in opts ? opts.secondaryChroma : null;
      let secondaryMinChroma = opts && 'secondaryMinChroma' in opts ? opts.secondaryMinChroma : 0;
      let tertiaryChroma = opts && 'tertiaryChroma' in opts ? opts.tertiaryChroma : null;
      let tertiaryMinChroma = opts && 'tertiaryMinChroma' in opts ? opts.tertiaryMinChroma : 0;
      let neutralChroma = opts && 'neutralChroma' in opts ? opts.neutralChroma : 4;
      let neutralVariantChroma = opts && 'neutralVariantChroma' in opts ? opts.neutralVariantChroma : 8;
      let camPrimary = cam16.Cam16.fromInt(primary);
      let effectivePrimaryChroma = (t0 = primaryChroma, t0 == null ? camPrimary.chroma : t0);
      let tonalPrimary = flex_core_palette.FlexTonalPalette.of(camPrimary.hue, math.max(core.double, primaryMinChroma, effectivePrimaryChroma));
      let camSecondary = secondary == null ? camPrimary : cam16.Cam16.fromInt(secondary);
      let effectiveSecondaryChroma = (t0$ = secondaryChroma, t0$ == null ? camSecondary.chroma : t0$);
      let tonalSecondary = flex_core_palette.FlexTonalPalette.of(camSecondary.hue, math.max(core.double, secondaryMinChroma, effectiveSecondaryChroma));
      let camTertiary = tertiary == null ? camPrimary : cam16.Cam16.fromInt(tertiary);
      let effectiveTertiaryChroma = (t0$0 = tertiaryChroma, t0$0 == null ? camTertiary.chroma : t0$0);
      let effectiveTertiaryHue = tertiary == null ? camPrimary.hue + 60 : camTertiary.hue;
      let tonalTertiary = flex_core_palette.FlexTonalPalette.of(effectiveTertiaryHue, math.max(core.double, tertiaryMinChroma, effectiveTertiaryChroma));
      let tonalNeutral = flex_core_palette.FlexTonalPalette.of(camPrimary.hue, neutralChroma);
      let tonalNeutralVariant = flex_core_palette.FlexTonalPalette.of(camPrimary.hue, neutralVariantChroma);
      return new flex_core_palette.FlexCorePalette.new({primary: tonalPrimary, secondary: tonalSecondary, tertiary: tonalTertiary, neutral: tonalNeutral, neutralVariant: tonalNeutralVariant});
    }
    static ['_#fromSeeds#tearOff'](opts) {
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let secondary = opts && 'secondary' in opts ? opts.secondary : null;
      let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
      let primaryChroma = opts && 'primaryChroma' in opts ? opts.primaryChroma : null;
      let primaryMinChroma = opts && 'primaryMinChroma' in opts ? opts.primaryMinChroma : 48;
      let secondaryChroma = opts && 'secondaryChroma' in opts ? opts.secondaryChroma : null;
      let secondaryMinChroma = opts && 'secondaryMinChroma' in opts ? opts.secondaryMinChroma : 0;
      let tertiaryChroma = opts && 'tertiaryChroma' in opts ? opts.tertiaryChroma : null;
      let tertiaryMinChroma = opts && 'tertiaryMinChroma' in opts ? opts.tertiaryMinChroma : 0;
      let neutralChroma = opts && 'neutralChroma' in opts ? opts.neutralChroma : 4;
      let neutralVariantChroma = opts && 'neutralVariantChroma' in opts ? opts.neutralVariantChroma : 8;
      return flex_core_palette.FlexCorePalette.fromSeeds({primary: primary, secondary: secondary, tertiary: tertiary, primaryChroma: primaryChroma, primaryMinChroma: primaryMinChroma, secondaryChroma: secondaryChroma, secondaryMinChroma: secondaryMinChroma, tertiaryChroma: tertiaryChroma, tertiaryMinChroma: tertiaryMinChroma, neutralChroma: neutralChroma, neutralVariantChroma: neutralVariantChroma});
    }
    static ['_#fromList#tearOff'](colors) {
      return new flex_core_palette.FlexCorePalette.fromList(colors);
    }
    asList() {
      return (() => {
        let t0 = T.ListOfint().of(this.primary.asList);
        t0[$addAll](this.secondary.asList);
        t0[$addAll](this.tertiary.asList);
        t0[$addAll](this.neutral.asList);
        t0[$addAll](this.neutralVariant.asList);
        t0[$addAll](this.error.asList);
        return t0;
      })();
    }
    _equals(other) {
      if (other == null) return false;
      return flex_core_palette.FlexCorePalette.is(other) && this.primary._equals(other.primary) && this.secondary._equals(other.secondary) && this.tertiary._equals(other.tertiary) && this.neutral._equals(other.neutral) && this.neutralVariant._equals(other.neutralVariant) && this.error._equals(other.error);
    }
    get hashCode() {
      return core.Object.hashAll(T.JSArrayOfObjectN().of([this.primary, this.secondary, this.tertiary, this.neutral, this.neutralVariant, this.error]));
    }
    toString() {
      return "primary: " + dart.str(this.primary) + "\n" + "secondary: " + dart.str(this.secondary) + "\n" + "tertiary: " + dart.str(this.tertiary) + "\n" + "neutral: " + dart.str(this.neutral) + "\n" + "neutralVariant: " + dart.str(this.neutralVariant) + "\n" + "error: " + dart.str(this.error) + "\n";
    }
    static _getPartition(list, partitionNumber, partitionSize) {
      return list[$sublist](partitionNumber * partitionSize, (partitionNumber + 1) * partitionSize);
    }
  };
  (flex_core_palette.FlexCorePalette.new = function(opts) {
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let secondary = opts && 'secondary' in opts ? opts.secondary : null;
    let tertiary = opts && 'tertiary' in opts ? opts.tertiary : null;
    let neutral = opts && 'neutral' in opts ? opts.neutral : null;
    let neutralVariant = opts && 'neutralVariant' in opts ? opts.neutralVariant : null;
    let error = opts && 'error' in opts ? opts.error : null;
    this[primary$] = primary;
    this[secondary$] = secondary;
    this[tertiary$] = tertiary;
    this[neutral$] = neutral;
    this[neutralVariant$] = neutralVariant;
    this[_error] = error;
    ;
  }).prototype = flex_core_palette.FlexCorePalette.prototype;
  (flex_core_palette.FlexCorePalette.fromHueChroma = function(hue, chroma) {
    this[primary$] = flex_core_palette.FlexTonalPalette.of(hue, math.max(core.double, 48.0, chroma));
    this[secondary$] = flex_core_palette.FlexTonalPalette.of(hue, 16.0);
    this[tertiary$] = flex_core_palette.FlexTonalPalette.of(hue + 60, 24.0);
    this[neutral$] = flex_core_palette.FlexTonalPalette.of(hue, 4.0);
    this[neutralVariant$] = flex_core_palette.FlexTonalPalette.of(hue, 8.0);
    this[_error] = flex_core_palette.FlexTonalPalette.of(25.0, 84.0);
    ;
  }).prototype = flex_core_palette.FlexCorePalette.prototype;
  (flex_core_palette.FlexCorePalette.fromList = function(colors) {
    if (!(colors[$length] === 6 * 15)) dart.assertFailed("Incorrect size.", I[0], 518, 16, "colors.length == size * FlexTonalPalette.commonSize");
    this[primary$] = flex_core_palette.FlexTonalPalette.fromList(flex_core_palette.FlexCorePalette._getPartition(colors, 0, 15));
    this[secondary$] = flex_core_palette.FlexTonalPalette.fromList(flex_core_palette.FlexCorePalette._getPartition(colors, 1, 15));
    this[tertiary$] = flex_core_palette.FlexTonalPalette.fromList(flex_core_palette.FlexCorePalette._getPartition(colors, 2, 15));
    this[neutral$] = flex_core_palette.FlexTonalPalette.fromList(flex_core_palette.FlexCorePalette._getPartition(colors, 3, 15));
    this[neutralVariant$] = flex_core_palette.FlexTonalPalette.fromList(flex_core_palette.FlexCorePalette._getPartition(colors, 4, 15));
    this[_error] = flex_core_palette.FlexTonalPalette.fromList(flex_core_palette.FlexCorePalette._getPartition(colors, 5, 15));
    ;
  }).prototype = flex_core_palette.FlexCorePalette.prototype;
  dart.addTypeTests(flex_core_palette.FlexCorePalette);
  dart.addTypeCaches(flex_core_palette.FlexCorePalette);
  dart.setMethodSignature(flex_core_palette.FlexCorePalette, () => ({
    __proto__: dart.getMethods(flex_core_palette.FlexCorePalette.__proto__),
    asList: dart.fnType(core.List$(core.int), [])
  }));
  dart.setStaticMethodSignature(flex_core_palette.FlexCorePalette, () => ['of', 'fromSeeds', '_getPartition']);
  dart.setGetterSignature(flex_core_palette.FlexCorePalette, () => ({
    __proto__: dart.getGetters(flex_core_palette.FlexCorePalette.__proto__),
    error: flex_core_palette.FlexTonalPalette
  }));
  dart.setLibraryUri(flex_core_palette.FlexCorePalette, I[1]);
  dart.setFieldSignature(flex_core_palette.FlexCorePalette, () => ({
    __proto__: dart.getFields(flex_core_palette.FlexCorePalette.__proto__),
    primary: dart.finalFieldType(flex_core_palette.FlexTonalPalette),
    secondary: dart.finalFieldType(flex_core_palette.FlexTonalPalette),
    tertiary: dart.finalFieldType(flex_core_palette.FlexTonalPalette),
    neutral: dart.finalFieldType(flex_core_palette.FlexTonalPalette),
    neutralVariant: dart.finalFieldType(flex_core_palette.FlexTonalPalette),
    [_error$]: dart.finalFieldType(dart.nullable(flex_core_palette.FlexTonalPalette))
  }));
  dart.setStaticFieldSignature(flex_core_palette.FlexCorePalette, () => ['size']);
  dart.defineExtensionMethods(flex_core_palette.FlexCorePalette, ['_equals', 'toString']);
  dart.defineExtensionAccessors(flex_core_palette.FlexCorePalette, ['hashCode']);
  dart.defineLazy(flex_core_palette.FlexCorePalette, {
    /*flex_core_palette.FlexCorePalette.size*/get size() {
      return 6;
    }
  }, false);
  dart.trackLibraries("packages/flex_seed_scheme/src/flex_core_palette.dart", {
    "package:flex_seed_scheme/src/flex_core_palette.dart": flex_core_palette
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex_core_palette.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwGgB;;;;;;IACA;;;;;;IACM;;;;;;;;;;;;cAac,KAAY;AAC5C,YAAwB,0DAAkB,GAAG,EAAE,MAAM;IACvD;oBAK2C;AACzC,YAAO,AAAO,AAAO,MAAR,qCAAuB,AAA4B;AAClD;AACM,MAApB,QAAkB;AAEiD,MADnE,AAAY,AAAQ,mEAChB,SAAK,OAAW;;AAAc,kBAAK;aAAC,SAAS;aAAI,AAAM,MAAA,QAAC,KAAK;QAA1B;;;AACvC,YAAwB,mDAAW,KAAK;IAC1C;;AAKwB,YAAA,AAAY,AAAS,0EAAL;IAAa;QAQzC;AACV,UAAI,AAAK,uBAAW,AAAQ;AAC1B,aAAK,AAAO,4BAAY,IAAI;AAMzB,UALD,WAAoB,6BAClB,IAAI,EACJ,QAAM,AACN,oEACI,qBAAS;;AAGf,gBAAmB,gBAAZ,AAAM,qBAAC,IAAI;;;AAGT,mBAAU,AAAK,IAAD,IAAI,OAAa,sBAAW,eAAP,iBAAU,QAAe,eAAP;AAClE,YAAO,AAAO,6BACV,IAAI,EAAE,cAAU,AAAqC,aAA5B,eAAJ,cAAO,MAAM,EAAE,AAAK,IAAD;IAC9C;YAGwB;;AACtB,UAAU,sCAAN,KAAK;AACP,YAAI,uBAAgB;AAClB,gBAAO,AAAK,AAAc,gBAAX,AAAM,KAAD,WAAS,AAAQ,kBAAG,AAAM,KAAD;;AAE7C,gBAAO,AAAO,AAAO,AAAQ,8CAAY,AAAM,AAAO,KAAR;;;AAGlD,YAAO;IACT;;AAII,YAA2B,EAApB,iBAAK,aAAM,kBAAkB,oBAAQ,AAAO;IAAO;;AAI5D,UAAI,uBAAgB;AAClB,cAAO,AAAsC,mCAAhB,eAAI,gBAAG,kBAAO;;AAE3C,cAAO,AAAoC,yCAAR,iBAAM;;IAE7C;;mEA/E0C,KAAY;IACzC,eAAY;IACd,aAAE,GAAG;IACF,gBAAE,MAAM;;;4DAE0B;IACnC,eAAE,KAAK;IACT,aAAE;IACC,gBAAE;;EAAI;;;;;;;;;;;;;;;;;;;;;;;MA3CG,8CAAW;;;MA6BjB,6CAAU;;;;;;;;;;;;IAgIJ;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAIC;;;;;;;;;;;;;;;;;AAMM;0BAA2B,sCAAG,MAAI;IAAG;cAGrC;AAChB,gBAAY,oBAAQ,IAAI;AACpC,YAAuB,qDAAc,AAAI,GAAD,MAAM,AAAI,GAAD;IACnD;;;;;;UA2De;UAOR;UAOA;UAiBS;UAWD;UAmBC;UAaD;UAmBC;UAaD;UAWA;UAaA;AAKD,uBAAmB,oBAAQ,OAAO;AAEjC,oCAAuC,KAAd,aAAa,EAAb,aAAiB,AAAW,UAAD;AAE1C,yBAAgC,sCACnD,AAAW,UAAD,MAAW,sBAAI,gBAAgB,EAAE,sBAAsB;AAKzD,yBACR,AAAU,SAAD,WAAW,UAAU,GAAS,oBAAQ,SAAS;AAE/C,sCACO,MAAhB,eAAe,EAAf,cAAmB,AAAa,YAAD;AAEZ,2BAAkC,sCACrD,AAAa,YAAD,MACP,sBAAI,kBAAkB,EAAE,wBAAwB;AAK7C,wBACR,AAAS,QAAD,WAAW,UAAU,GAAS,oBAAQ,QAAQ;AAE7C,qCAAyC,OAAf,cAAc,EAAd,eAAkB,AAAY,WAAD;AAIvD,iCACT,AAAS,QAAD,WAAW,AAAW,AAAI,UAAL,OAAO,KAAK,AAAY,WAAD;AAGjC,0BAAiC,sCACpD,oBAAoB,EACf,sBAAI,iBAAiB,EAAE,uBAAuB;AAIhC,yBACF,sCAAG,AAAW,UAAD,MAAM,aAAa;AAC9B,gCACF,sCAAG,AAAW,UAAD,MAAM,oBAAoB;AAK5D,YAAO,qDACI,YAAY,aACV,cAAc,YACf,aAAa,WACd,YAAY,kBACL,mBAAmB;IAEvC;;;;;;;;;;;;;;;;;;;AA+BsB,YAAK;kCAClB,AAAQ;AACE,oBAAV;AACS,oBAAT;AACQ,oBAAR;AACe,oBAAf;AACM,oBAAN;;;IACJ;YAImB;;AACpB,YAAM,AAKiC,sCALvC,KAAK,KACL,AAAQ,qBAAG,AAAM,KAAD,aAChB,AAAU,uBAAG,AAAM,KAAD,eAClB,AAAS,sBAAG,AAAM,KAAD,cACjB,AAAQ,qBAAG,AAAM,KAAD,aAChB,AAAe,4BAAG,AAAM,KAAD,oBACvB,AAAM,mBAAG,AAAM,KAAD;IAAM;;AAIJ,YAAO,qBAAiB,yBACtC,cACA,gBACA,eACA,cACA,qBACA;IACA;;AAKJ,YAAO,wBAAW,gBAAO,OACrB,yBAAa,kBAAS,OACtB,wBAAY,iBAAQ,OACpB,uBAAW,gBAAO,OAClB,8BAAkB,uBAAc,OAChC,qBAAS,cAAK;IACpB;yBAUc,MAAU,iBAAqB;AAC3C,YAAO,AAAK,KAAD,WACT,AAAgB,eAAD,GAAG,aAAa,EACT,CAArB,AAAgB,eAAD,GAAG,KAAK,aAAa;IAEzC;;;QAvXgB;QACA;QACA;QACA;QACA;QACI;IALJ;IACA;IACA;IACA;IACA;IAEJ,eAAE,KAAK;;;8DAqCkB,KAAY;IACnC,iBAAmB,sCAAG,GAAG,EAAO,sBAAI,MAAI,MAAM;IAC5C,mBAAmB,sCAAG,GAAG,EAAE;IAC5B,kBAAmB,sCAAG,AAAI,GAAD,GAAG,IAAI;IACjC,iBAAmB,sCAAG,GAAG,EAAE;IACpB,wBAAmB,sCAAG,GAAG,EAAE;IACnC,eAAmB,sCAAG,MAAI;;EAAG;yDAyPP;UACtB,AAAO,AAAO,MAAR,cAAgB,2BACzB;IACI,iBAAmB,4CACvB,gDAAc,MAAM,EAAE;IAChB,mBAAmB,4CACzB,gDAAc,MAAM,EAAE;IACjB,kBAAmB,4CACxB,gDAAc,MAAM,EAAE;IAClB,iBAAmB,4CACvB,gDAAc,MAAM,EAAE;IACX,wBAAmB,4CAC9B,gDAAc,MAAM,EAAE;IACnB,eAAmB,4CACtB,gDAAc,MAAM,EAAE;;EAAgC;;;;;;;;;;;;;;;;;;;;;;;;;;MA/S/C,sCAAI","file":"../../../../../../../../../../../packages/flex_seed_scheme/src/flex_core_palette.dart.lib.js"}');
  // Exports:
  return {
    src__flex_core_palette: flex_core_palette
  };
}));

//# sourceMappingURL=flex_core_palette.dart.lib.js.map
