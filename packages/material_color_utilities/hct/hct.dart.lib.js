define(['dart_sdk', 'packages/material_color_utilities/hct/cam16.dart', 'packages/material_color_utilities/utils/color_utils.dart', 'packages/material_color_utilities/hct/cam_solver.dart'], (function load__packages__material_color_utilities__hct__hct_dart(dart_sdk, packages__material_color_utilities__hct__cam16$46dart, packages__material_color_utilities__utils__color_utils$46dart, packages__material_color_utilities__hct__cam_solver$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cam16$ = packages__material_color_utilities__hct__cam16$46dart.hct__cam16;
  const color_utils = packages__material_color_utilities__utils__color_utils$46dart.utils__color_utils;
  const cam_solver = packages__material_color_utilities__hct__cam_solver$46dart.hct__cam_solver;
  var hct = Object.create(dart.library);
  var $round = dartx.round;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:material_color_utilities/hct/hct.dart"];
  var __Hct__hue = dart.privateName(hct, "_#Hct#_hue");
  var __Hct__chroma = dart.privateName(hct, "_#Hct#_chroma");
  var __Hct__tone = dart.privateName(hct, "_#Hct#_tone");
  var __Hct__argb = dart.privateName(hct, "_#Hct#_argb");
  var _argb = dart.privateName(hct, "_argb");
  var _hue = dart.privateName(hct, "_hue");
  var _chroma = dart.privateName(hct, "_chroma");
  var _tone = dart.privateName(hct, "_tone");
  hct.Hct = class Hct extends core.Object {
    get [_hue]() {
      let t0;
      t0 = this[__Hct__hue];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_hue")) : t0;
    }
    set [_hue](library$32package$58material_color_utilities$47hct$47hct$46dart$58$58_hue$35param) {
      this[__Hct__hue] = library$32package$58material_color_utilities$47hct$47hct$46dart$58$58_hue$35param;
    }
    get [_chroma]() {
      let t0;
      t0 = this[__Hct__chroma];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_chroma")) : t0;
    }
    set [_chroma](library$32package$58material_color_utilities$47hct$47hct$46dart$58$58_chroma$35param) {
      this[__Hct__chroma] = library$32package$58material_color_utilities$47hct$47hct$46dart$58$58_chroma$35param;
    }
    get [_tone]() {
      let t0;
      t0 = this[__Hct__tone];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_tone")) : t0;
    }
    set [_tone](library$32package$58material_color_utilities$47hct$47hct$46dart$58$58_tone$35param) {
      this[__Hct__tone] = library$32package$58material_color_utilities$47hct$47hct$46dart$58$58_tone$35param;
    }
    get [_argb]() {
      let t0;
      t0 = this[__Hct__argb];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_argb")) : t0;
    }
    set [_argb](library$32package$58material_color_utilities$47hct$47hct$46dart$58$58_argb$35param) {
      this[__Hct__argb] = library$32package$58material_color_utilities$47hct$47hct$46dart$58$58_argb$35param;
    }
    static from(hue, chroma, tone) {
      let argb = cam_solver.CamSolver.solveToInt(hue, chroma, tone);
      return new hct.Hct.__(argb);
    }
    _equals(o) {
      if (o == null) return false;
      if (!hct.Hct.is(o)) {
        return false;
      }
      return o[_argb] === this[_argb];
    }
    toString() {
      return "H" + this.hue[$round]()[$toString]() + " C" + dart.str(this.chroma[$round]()) + " T" + this.tone[$round]()[$toString]();
    }
    static fromInt(argb) {
      return new hct.Hct.__(argb);
    }
    toInt() {
      return this[_argb];
    }
    get hue() {
      return this[_hue];
    }
    set hue(newHue) {
      this[_argb] = cam_solver.CamSolver.solveToInt(newHue, this.chroma, this.tone);
      let cam16 = cam16$.Cam16.fromInt(this[_argb]);
      this[_hue] = cam16.hue;
      this[_chroma] = cam16.chroma;
      this[_tone] = color_utils.ColorUtils.lstarFromArgb(this[_argb]);
    }
    get chroma() {
      return this[_chroma];
    }
    set chroma(newChroma) {
      this[_argb] = cam_solver.CamSolver.solveToInt(this.hue, newChroma, this.tone);
      let cam16 = cam16$.Cam16.fromInt(this[_argb]);
      this[_hue] = cam16.hue;
      this[_chroma] = cam16.chroma;
      this[_tone] = color_utils.ColorUtils.lstarFromArgb(this[_argb]);
    }
    get tone() {
      return this[_tone];
    }
    set tone(newTone) {
      this[_argb] = cam_solver.CamSolver.solveToInt(this.hue, this.chroma, newTone);
      let cam16 = cam16$.Cam16.fromInt(this[_argb]);
      this[_hue] = cam16.hue;
      this[_chroma] = cam16.chroma;
      this[_tone] = color_utils.ColorUtils.lstarFromArgb(this[_argb]);
    }
    static ['_#_#tearOff'](argb) {
      return new hct.Hct.__(argb);
    }
  };
  (hct.Hct.__ = function(argb) {
    this[__Hct__hue] = null;
    this[__Hct__chroma] = null;
    this[__Hct__tone] = null;
    this[__Hct__argb] = null;
    this[_argb] = argb;
    let cam16 = cam16$.Cam16.fromInt(argb);
    this[_hue] = cam16.hue;
    this[_chroma] = cam16.chroma;
    this[_tone] = color_utils.ColorUtils.lstarFromArgb(this[_argb]);
  }).prototype = hct.Hct.prototype;
  dart.addTypeTests(hct.Hct);
  dart.addTypeCaches(hct.Hct);
  dart.setMethodSignature(hct.Hct, () => ({
    __proto__: dart.getMethods(hct.Hct.__proto__),
    toInt: dart.fnType(core.int, [])
  }));
  dart.setStaticMethodSignature(hct.Hct, () => ['from', 'fromInt']);
  dart.setGetterSignature(hct.Hct, () => ({
    __proto__: dart.getGetters(hct.Hct.__proto__),
    [_hue]: core.double,
    [_chroma]: core.double,
    [_tone]: core.double,
    [_argb]: core.int,
    hue: core.double,
    chroma: core.double,
    tone: core.double
  }));
  dart.setSetterSignature(hct.Hct, () => ({
    __proto__: dart.getSetters(hct.Hct.__proto__),
    [_hue]: core.double,
    [_chroma]: core.double,
    [_tone]: core.double,
    [_argb]: core.int,
    hue: core.double,
    chroma: core.double,
    tone: core.double
  }));
  dart.setLibraryUri(hct.Hct, I[0]);
  dart.setFieldSignature(hct.Hct, () => ({
    __proto__: dart.getFields(hct.Hct.__proto__),
    [__Hct__hue]: dart.fieldType(dart.nullable(core.double)),
    [__Hct__chroma]: dart.fieldType(dart.nullable(core.double)),
    [__Hct__tone]: dart.fieldType(dart.nullable(core.double)),
    [__Hct__argb]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.defineExtensionMethods(hct.Hct, ['_equals', 'toString']);
  dart.trackLibraries("packages/material_color_utilities/hct/hct.dart", {
    "package:material_color_utilities/hct/hct.dart": hct
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hct.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuBc;;IAAI;eAAJ;;IAAI;;;AACJ;;IAAO;kBAAP;;IAAO;;;AACP;;IAAK;gBAAL;;IAAK;;;AACR;;IAAK;gBAAL;;IAAK;gBAOS,KAAY,QAAe;AAC1C,iBAAiB,gCAAW,GAAG,EAAE,MAAM,EAAE,IAAI;AACnD,YAAW,gBAAE,IAAI;IACnB;YAGiB;;AACf,WAAM,WAAF,CAAC;AACH,cAAO;;AAET,YAAO,AAAE,AAAM,EAAP,YAAU;IACpB;;AAIE,YAAO,AAA2E,OAAvE,AAAI,AAAQ,kCAAW,gBAAI,AAAO,yBAAQ,OAAI,AAAK,AAAQ;IACxE;mBAGuB;AACrB,YAAW,gBAAE,IAAI;IACnB;;AAGE,YAAO;IACT;;AAKE,YAAO;IACT;YAOe;AACqC,MAAlD,cAAkB,gCAAW,MAAM,EAAE,aAAQ;AACvC,kBAAc,qBAAQ;AACZ,MAAhB,aAAO,AAAM,KAAD;AACU,MAAtB,gBAAU,AAAM,KAAD;AACwB,MAAvC,cAAmB,qCAAc;IACnC;;AAGE,YAAO;IACT;eAOkB;AACkC,MAAlD,cAAkB,gCAAW,UAAK,SAAS,EAAE;AACvC,kBAAc,qBAAQ;AACZ,MAAhB,aAAO,AAAM,KAAD;AACU,MAAtB,gBAAU,AAAM,KAAD;AACwB,MAAvC,cAAmB,qCAAc;IACnC;;AAIE,YAAO;IACT;aAOgB;AACoC,MAAlD,cAAkB,gCAAW,UAAK,aAAQ,OAAO;AAC3C,kBAAc,qBAAQ;AACZ,MAAhB,aAAO,AAAM,KAAD;AACU,MAAtB,gBAAU,AAAM,KAAD;AACwB,MAAvC,cAAmB,qCAAc;IACnC;;;;;yBAEU;uBA3FE;0BACA;wBACA;wBACH;AAyFK,IAAZ,cAAQ,IAAI;AACN,gBAAc,qBAAQ,IAAI;AAChB,IAAhB,aAAO,AAAM,KAAD;AACU,IAAtB,gBAAU,AAAM,KAAD;AACwB,IAAvC,cAAmB,qCAAc;EACnC","file":"../../../../../../../../../../../packages/material_color_utilities/hct/hct.dart.lib.js"}');
  // Exports:
  return {
    hct__hct: hct
  };
}));

//# sourceMappingURL=hct.dart.lib.js.map
