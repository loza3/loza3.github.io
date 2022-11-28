define(['dart_sdk', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/matrix_utils.dart'], (function load__packages__lottie__src__utils_dart(dart_sdk, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__matrix_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  var utils = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toDouble = dartx.toDouble;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    PathTovoid: () => (T.PathTovoid = dart.constFn(dart.fnType(dart.void, [ui.Path])))(),
    OffsetTovoid: () => (T.OffsetTovoid = dart.constFn(dart.fnType(dart.void, [ui.Offset])))(),
    Matrix4Tovoid: () => (T.Matrix4Tovoid = dart.constFn(dart.fnType(dart.void, [vector_math_64.Matrix4])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    RectToRect: () => (T.RectToRect = dart.constFn(dart.fnType(ui.Rect, [ui.Rect])))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    ListOfdoubleTovoid: () => (T.ListOfdoubleTovoid = dart.constFn(dart.fnType(dart.void, [T.ListOfdouble()])))(),
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:lottie/src/utils.dart"];
  const _is_ListEquality_default = Symbol('_is_ListEquality_default');
  utils.ListEquality$ = dart.generic(E => {
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$ListNOfE = () => (__t$ListNOfE = dart.constFn(dart.nullable(__t$ListOfE())))();
    class ListEquality extends core.Object {
      static ['_#new#tearOff'](E) {
        return new (utils.ListEquality$(E)).new();
      }
      equals(list1, list2) {
        __t$ListNOfE().as(list1);
        __t$ListNOfE().as(list2);
        if (list1 == list2) return true;
        if (list1 == null || list2 == null) return false;
        let length = list1[$length];
        if (length !== list2[$length]) return false;
        for (let i = 0; i < length; i = i + 1) {
          if (!dart.equals(list1[$_get](i), list2[$_get](i))) return false;
        }
        return true;
      }
    }
    (ListEquality.new = function() {
      ;
    }).prototype = ListEquality.prototype;
    dart.addTypeTests(ListEquality);
    ListEquality.prototype[_is_ListEquality_default] = true;
    dart.addTypeCaches(ListEquality);
    dart.setMethodSignature(ListEquality, () => ({
      __proto__: dart.getMethods(ListEquality.__proto__),
      equals: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(ListEquality, I[0]);
    return ListEquality;
  });
  utils.ListEquality = utils.ListEquality$();
  dart.addTypeTests(utils.ListEquality, _is_ListEquality_default);
  utils['PaintExtension|setAlpha'] = function PaintExtension$124setAlpha($this, alpha) {
    $this.color = $this.color.withAlpha(alpha);
  };
  utils['PaintExtension|get#setAlpha'] = function PaintExtension$124get$35setAlpha($this) {
    return dart.fn(alpha => utils['PaintExtension|setAlpha']($this, alpha), T.intTovoid());
  };
  utils['PathExtension|set'] = function PathExtension$124set($this, path) {
    $this.reset();
    $this.addPath(path, ui.Offset.zero);
  };
  utils['PathExtension|get#set'] = function PathExtension$124get$35set($this) {
    return dart.fn(path => utils['PathExtension|set']($this, path), T.PathTovoid());
  };
  utils['PathExtension|offset'] = function PathExtension$124offset($this, offset) {
    utils['PathExtension|set']($this, $this.shift(offset));
  };
  utils['PathExtension|get#offset'] = function PathExtension$124get$35offset($this) {
    return dart.fn(offset => utils['PathExtension|offset']($this, offset), T.OffsetTovoid());
  };
  utils['Matrix4Extension|preConcat'] = function Matrix4Extension$124preConcat($this, matrix) {
    $this.multiply(matrix);
  };
  utils['Matrix4Extension|get#preConcat'] = function Matrix4Extension$124get$35preConcat($this) {
    return dart.fn(matrix => utils['Matrix4Extension|preConcat']($this, matrix), T.Matrix4Tovoid());
  };
  utils['Matrix4Extension|reset'] = function Matrix4Extension$124reset($this) {
    $this.setIdentity();
  };
  utils['Matrix4Extension|get#reset'] = function Matrix4Extension$124get$35reset($this) {
    return dart.fn(() => utils['Matrix4Extension|reset']($this), T.VoidTovoid());
  };
  utils['Matrix4Extension|set'] = function Matrix4Extension$124set($this, matrix) {
    matrix.copyInto($this);
  };
  utils['Matrix4Extension|get#set'] = function Matrix4Extension$124get$35set($this) {
    return dart.fn(matrix => utils['Matrix4Extension|set']($this, matrix), T.Matrix4Tovoid());
  };
  utils['Matrix4Extension|mapRect'] = function Matrix4Extension$124mapRect($this, rect) {
    return matrix_utils.MatrixUtils.transformRect($this, rect);
  };
  utils['Matrix4Extension|get#mapRect'] = function Matrix4Extension$124get$35mapRect($this) {
    return dart.fn(rect => utils['Matrix4Extension|mapRect']($this, rect), T.RectToRect());
  };
  utils['Matrix4Extension|mapPoints'] = function Matrix4Extension$124mapPoints($this, array) {
    for (let i = 0; i < array[$length]; i = i + 2) {
      let v = matrix_utils.MatrixUtils.transformPoint($this, new ui.Offset.new(array[$_get](i), array[$_get](i + 1)));
      array[$_set](i, v.dx);
      array[$_set](i + 1, v.dy);
    }
  };
  utils['Matrix4Extension|get#mapPoints'] = function Matrix4Extension$124get$35mapPoints($this) {
    return dart.fn(array => utils['Matrix4Extension|mapPoints']($this, array), T.ListOfdoubleTovoid());
  };
  utils['Matrix4Extension|getScale'] = function Matrix4Extension$124getScale($this) {
    let t17, t17$;
    let p0 = (t17 = vector_math_64.Vector3.new(0.0, 0.0, 0.0), (() => {
      t17.applyMatrix4($this);
      return t17;
    })());
    let p1 = (t17$ = vector_math_64.Vector3.new(1 / math.sqrt(2), 1 / math.sqrt(2), 0.0), (() => {
      t17$.applyMatrix4($this);
      return t17$;
    })());
    let dx = p1.x - p0.x;
    let dy = p1.y - p0.y;
    return utils.hypot(dx, dy)[$toDouble]();
  };
  utils['Matrix4Extension|get#getScale'] = function Matrix4Extension$124get$35getScale($this) {
    return dart.fn(() => utils['Matrix4Extension|getScale']($this), T.VoidTodouble());
  };
  utils['Matrix4Extension|get#hasZeroScaleAxis'] = function Matrix4Extension$124get$35hasZeroScaleAxis($this) {
    let t19, t19$;
    let p0 = (t19 = vector_math_64.Vector3.new(0.0, 0.0, 0.0), (() => {
      t19.applyMatrix4($this);
      return t19;
    })());
    let p1 = (t19$ = vector_math_64.Vector3.new(37394.729378, 39575.2343807, 0.0), (() => {
      t19$.applyMatrix4($this);
      return t19$;
    })());
    return p0.x === p1.x || p0.y === p1.y;
  };
  utils['OffsetExtension|get#isZero'] = function OffsetExtension$124get$35isZero($this) {
    return $this.dx === 0 && $this.dy === 0;
  };
  utils.hypot = function hypot(x, y) {
    return math.sqrt(x * x + y * y);
  };
  utils['IterableExtension|firstWhereOrNull'] = function IterableExtension$124firstWhereOrNull(T, $this, test) {
    for (let element of $this) {
      if (test(element)) return element;
    }
    return null;
  };
  utils['IterableExtension|get#firstWhereOrNull'] = function IterableExtension$124get$35firstWhereOrNull(T, $this) {
    return dart.fn(test => utils['IterableExtension|firstWhereOrNull'](T, $this, test), dart.fnType(dart.nullable(T), [dart.fnType(core.bool, [T])]));
  };
  dart.trackLibraries("packages/lottie/src/utils.dart", {
    "package:lottie/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;aA2FuB,OAAgB;;;AACnC,YAAI,AAAU,KAAK,IAAE,KAAK,EAAG,MAAO;AACpC,YAAI,AAAM,KAAD,YAAY,AAAM,KAAD,UAAU,MAAO;AACvC,qBAAS,AAAM,KAAD;AAClB,YAAI,MAAM,KAAI,AAAM,KAAD,WAAS,MAAO;AACnC,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,MAAM,EAAE,IAAA,AAAC,CAAA;AAC3B,2BAAI,AAAK,KAAA,QAAC,CAAC,GAAK,AAAK,KAAA,QAAC,CAAC,IAAG,MAAO;;AAEnC,cAAO;MACT;;;;IAXoB;;;;;;;;;;;;;gFApFF;AACc,IAA9B,cAAQ,AAAM,sBAAU,KAAK;EAC/B;;AAFK,mBAAa,iDAAb,KAAK;EAEV;oEAIc;AACL,IAAP;AAC0B,IAA1B,cAAQ,IAAI,EAAS;EACvB;;AAHK,mBAAS,0CAAT,IAAI;EAGT;0EAEmB;AACC,IAAlB,kCAAI,YAAM,MAAM;EAClB;;AAFK,mBAAc,+CAAd,MAAM;EAEX;sFAIuB;AACL,IAAhB,eAAS,MAAM;EACjB;;AAFK,mBAAkB,qDAAlB,MAAM;EAEX;;AAGe,IAAb;EACF;;AAFK;EAEL;0EAEiB;AACM,IAArB,AAAO,MAAD;EACR;;AAFK,mBAAY,+CAAZ,MAAM;EAEX;kFAEkB;AAChB,UAAmB,+CAAoB,IAAI;EAC7C;;AAFK,mBAAa,iDAAb,IAAI;EAET;sFAM4B;AAC1B,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAM,KAAD,WAAS,IAAA,AAAE,CAAD,GAAI;AAC/B,cACU,+CAAqB,kBAAO,AAAK,KAAA,QAAC,CAAC,GAAG,AAAK,KAAA,QAAC,AAAE,CAAD,GAAG;AAEjD,MAAf,AAAK,KAAA,QAAC,CAAC,EAAI,AAAE,CAAD;AACO,MAAnB,AAAK,KAAA,QAAC,AAAE,CAAD,GAAG,GAAK,AAAE,CAAD;;EAEpB;;AARK,mBAAuB,oDAAvB,KAAK;EAQV;;;AAGM,oBAAK,2BAAQ,KAAG,KAAG,MAAd;AAAkB;;;AACvB,qBAAK,2BAAQ,AAAE,IAAE,UAAK,IAAI,AAAE,IAAE,UAAK,IAAI,MAAlC;AAAsC;;;AAE3C,aAAK,AAAG,AAAE,EAAH,KAAK,AAAG,EAAD;AACd,aAAK,AAAG,AAAE,EAAH,KAAK,AAAG,EAAD;AAElB,UAAO,AAAc,aAAR,EAAE,EAAE,EAAE;EACrB;;AARO;EAQP;;;AAGM,oBAAK,2BAAQ,KAAG,KAAG,MAAd;AAAkB;;;AAEvB,qBAAK,2BAAQ,cAAc,eAAe,MAArC;AAAyC;;;AAElD,UAAO,AAAG,AAAE,AAAQ,GAAX,OAAM,AAAG,EAAD,MAAM,AAAG,AAAE,EAAH,OAAM,AAAG,EAAD;EACnC;;AAImB,UAAA,AAAG,AAAK,cAAF,KAAK,AAAG,aAAG;EAAC;+BAGzB,GAAO;AACnB,UAAO,WAAK,AAAE,AAAI,CAAL,GAAG,CAAC,GAAG,AAAE,CAAD,GAAG,CAAC;EAC3B;yGAG+C;AAC3C,aAAS;AACP,UAAI,AAAI,IAAA,CAAC,OAAO,GAAG,MAAO,QAAO;;AAEnC,UAAO;EACT;;AALG,mBAA0C,8DAA1C,IAAI;EAKP","file":"../../../../../../../../../../../packages/lottie/src/utils.dart.lib.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
