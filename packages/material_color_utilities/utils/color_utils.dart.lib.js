define(['dart_sdk', 'packages/material_color_utilities/utils/math_utils.dart'], (function load__packages__material_color_utilities__utils__color_utils_dart(dart_sdk, packages__material_color_utilities__utils__math_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const math_utils = packages__material_color_utilities__utils__math_utils$46dart.utils__math_utils;
  var color_utils = Object.create(dart.library);
  var $rightShift = dartx['>>'];
  var $_get = dartx._get;
  var $toDouble = dartx.toDouble;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    JSArrayOfListOfdouble: () => (T.JSArrayOfListOfdouble = dart.constFn(_interceptors.JSArray$(T.ListOfdouble())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:material_color_utilities/utils/color_utils.dart"];
  color_utils.ColorUtils = class ColorUtils extends core.Object {
    static argbFromRgb(red, green, blue) {
      return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
    }
    static alphaFromArgb(argb) {
      return argb[$rightShift](24) & 255;
    }
    static argbFromLinrgb(linrgb) {
      let r = color_utils.ColorUtils.delinearized(linrgb[$_get](0));
      let g = color_utils.ColorUtils.delinearized(linrgb[$_get](1));
      let b = color_utils.ColorUtils.delinearized(linrgb[$_get](2));
      return color_utils.ColorUtils.argbFromRgb(r, g, b);
    }
    static redFromArgb(argb) {
      return argb >> 16 & 255;
    }
    static greenFromArgb(argb) {
      return argb >> 8 & 255;
    }
    static blueFromArgb(argb) {
      return argb & 255;
    }
    static isOpaque(argb) {
      return color_utils.ColorUtils.alphaFromArgb(argb) >= 255;
    }
    static argbFromXyz(x, y, z) {
      let matrix = color_utils.ColorUtils._XYZ_TO_SRGB;
      let linearR = matrix[$_get](0)[$_get](0) * x + matrix[$_get](0)[$_get](1) * y + matrix[$_get](0)[$_get](2) * z;
      let linearG = matrix[$_get](1)[$_get](0) * x + matrix[$_get](1)[$_get](1) * y + matrix[$_get](1)[$_get](2) * z;
      let linearB = matrix[$_get](2)[$_get](0) * x + matrix[$_get](2)[$_get](1) * y + matrix[$_get](2)[$_get](2) * z;
      let r = color_utils.ColorUtils.delinearized(linearR);
      let g = color_utils.ColorUtils.delinearized(linearG);
      let b = color_utils.ColorUtils.delinearized(linearB);
      return color_utils.ColorUtils.argbFromRgb(r, g, b);
    }
    static xyzFromArgb(argb) {
      let r = color_utils.ColorUtils.linearized(color_utils.ColorUtils.redFromArgb(argb));
      let g = color_utils.ColorUtils.linearized(color_utils.ColorUtils.greenFromArgb(argb));
      let b = color_utils.ColorUtils.linearized(color_utils.ColorUtils.blueFromArgb(argb));
      return math_utils.MathUtils.matrixMultiply(T.JSArrayOfdouble().of([r, g, b]), color_utils.ColorUtils._SRGB_TO_XYZ);
    }
    static argbFromLab(l, a, b) {
      let whitePoint = color_utils.ColorUtils._WHITE_POINT_D65;
      let fy = (l + 16.0) / 116.0;
      let fx = a / 500.0 + fy;
      let fz = fy - b / 200.0;
      let xNormalized = color_utils.ColorUtils._labInvf(fx);
      let yNormalized = color_utils.ColorUtils._labInvf(fy);
      let zNormalized = color_utils.ColorUtils._labInvf(fz);
      let x = xNormalized * whitePoint[$_get](0);
      let y = yNormalized * whitePoint[$_get](1);
      let z = zNormalized * whitePoint[$_get](2);
      return color_utils.ColorUtils.argbFromXyz(x, y, z);
    }
    static labFromArgb(argb) {
      let linearR = color_utils.ColorUtils.linearized(color_utils.ColorUtils.redFromArgb(argb));
      let linearG = color_utils.ColorUtils.linearized(color_utils.ColorUtils.greenFromArgb(argb));
      let linearB = color_utils.ColorUtils.linearized(color_utils.ColorUtils.blueFromArgb(argb));
      let matrix = color_utils.ColorUtils._SRGB_TO_XYZ;
      let x = matrix[$_get](0)[$_get](0) * linearR + matrix[$_get](0)[$_get](1) * linearG + matrix[$_get](0)[$_get](2) * linearB;
      let y = matrix[$_get](1)[$_get](0) * linearR + matrix[$_get](1)[$_get](1) * linearG + matrix[$_get](1)[$_get](2) * linearB;
      let z = matrix[$_get](2)[$_get](0) * linearR + matrix[$_get](2)[$_get](1) * linearG + matrix[$_get](2)[$_get](2) * linearB;
      let whitePoint = color_utils.ColorUtils._WHITE_POINT_D65;
      let xNormalized = x / whitePoint[$_get](0);
      let yNormalized = y / whitePoint[$_get](1);
      let zNormalized = z / whitePoint[$_get](2);
      let fx = color_utils.ColorUtils._labF(xNormalized);
      let fy = color_utils.ColorUtils._labF(yNormalized);
      let fz = color_utils.ColorUtils._labF(zNormalized);
      let l = 116.0 * fy - 16;
      let a = 500.0 * (fx - fy);
      let b = 200.0 * (fy - fz);
      return T.JSArrayOfdouble().of([l, a, b]);
    }
    static argbFromLstar(lstar) {
      let fy = (lstar + 16.0) / 116.0;
      let fz = fy;
      let fx = fy;
      let kappa = 24389.0 / 27.0;
      let epsilon = 216.0 / 24389.0;
      let lExceedsEpsilonKappa = lstar > 8.0;
      let y = lExceedsEpsilonKappa ? fy * fy * fy : lstar / kappa;
      let cubeExceedEpsilon = fy * fy * fy > epsilon;
      let x = cubeExceedEpsilon ? fx * fx * fx : lstar / kappa;
      let z = cubeExceedEpsilon ? fz * fz * fz : lstar / kappa;
      let whitePoint = color_utils.ColorUtils._WHITE_POINT_D65;
      return color_utils.ColorUtils.argbFromXyz(x * whitePoint[$_get](0), y * whitePoint[$_get](1), z * whitePoint[$_get](2));
    }
    static lstarFromArgb(argb) {
      let y = color_utils.ColorUtils.xyzFromArgb(argb)[$_get](1) / 100.0;
      let e = 216.0 / 24389.0;
      if (y <= e) {
        return 24389.0 / 27.0 * y;
      } else {
        let yIntermediate = math.pow(y, 1.0 / 3.0)[$toDouble]();
        return 116.0 * yIntermediate - 16.0;
      }
    }
    static yFromLstar(lstar) {
      let ke = 8.0;
      if (lstar > ke) {
        return math.pow((lstar + 16.0) / 116.0, 3.0)[$toDouble]() * 100.0;
      } else {
        return lstar / (24389.0 / 27.0) * 100.0;
      }
    }
    static linearized(rgbComponent) {
      let normalized = rgbComponent / 255.0;
      if (normalized <= 0.040449936) {
        return normalized / 12.92 * 100.0;
      } else {
        return math.pow((normalized + 0.055) / 1.055, 2.4)[$toDouble]() * 100.0;
      }
    }
    static delinearized(rgbComponent) {
      let normalized = rgbComponent / 100.0;
      let delinearized = 0.0;
      if (normalized <= 0.0031308) {
        delinearized = normalized * 12.92;
      } else {
        delinearized = 1.055 * math.pow(normalized, 1.0 / 2.4)[$toDouble]() - 0.055;
      }
      return math_utils.MathUtils.clampInt(0, 255, (delinearized * 255.0)[$round]());
    }
    static whitePointD65() {
      return color_utils.ColorUtils._WHITE_POINT_D65;
    }
    static _labF(t) {
      let e = 216.0 / 24389.0;
      let kappa = 24389.0 / 27.0;
      if (t > e) {
        return math.pow(t, 1.0 / 3.0)[$toDouble]();
      } else {
        return (kappa * t + 16) / 116;
      }
    }
    static _labInvf(ft) {
      let e = 216.0 / 24389.0;
      let kappa = 24389.0 / 27.0;
      let ft3 = ft * ft * ft;
      if (ft3 > e) {
        return ft3;
      } else {
        return (116 * ft - 16) / kappa;
      }
    }
    static ['_#new#tearOff']() {
      return new color_utils.ColorUtils.new();
    }
  };
  (color_utils.ColorUtils.new = function() {
    ;
  }).prototype = color_utils.ColorUtils.prototype;
  dart.addTypeTests(color_utils.ColorUtils);
  dart.addTypeCaches(color_utils.ColorUtils);
  dart.setStaticMethodSignature(color_utils.ColorUtils, () => ['argbFromRgb', 'alphaFromArgb', 'argbFromLinrgb', 'redFromArgb', 'greenFromArgb', 'blueFromArgb', 'isOpaque', 'argbFromXyz', 'xyzFromArgb', 'argbFromLab', 'labFromArgb', 'argbFromLstar', 'lstarFromArgb', 'yFromLstar', 'linearized', 'delinearized', 'whitePointD65', '_labF', '_labInvf']);
  dart.setLibraryUri(color_utils.ColorUtils, I[0]);
  dart.setStaticFieldSignature(color_utils.ColorUtils, () => ['_SRGB_TO_XYZ', '_XYZ_TO_SRGB', '_WHITE_POINT_D65']);
  dart.defineLazy(color_utils.ColorUtils, {
    /*color_utils.ColorUtils._SRGB_TO_XYZ*/get _SRGB_TO_XYZ() {
      return T.JSArrayOfListOfdouble().of([T.JSArrayOfdouble().of([0.41233895, 0.35762064, 0.18051042]), T.JSArrayOfdouble().of([0.2126, 0.7152, 0.0722]), T.JSArrayOfdouble().of([0.01932141, 0.11916382, 0.95034478])]);
    },
    /*color_utils.ColorUtils._XYZ_TO_SRGB*/get _XYZ_TO_SRGB() {
      return T.JSArrayOfListOfdouble().of([T.JSArrayOfdouble().of([3.2413774792388685, -1.5376652402851851, -0.49885366846268053]), T.JSArrayOfdouble().of([-0.9691452513005321, 1.8758853451067872, 0.04156585616912061]), T.JSArrayOfdouble().of([0.05562093689691305, -0.20395524564742123, 1.0571799111220335])]);
    },
    /*color_utils.ColorUtils._WHITE_POINT_D65*/get _WHITE_POINT_D65() {
      return T.JSArrayOfdouble().of([95.047, 100.0, 108.883]);
    }
  }, false);
  dart.trackLibraries("packages/material_color_utilities/utils/color_utils.dart", {
    "package:material_color_utilities/utils/color_utils.dart": color_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["color_utils.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/material_color_utilities/utils/color_utils.dart.lib.js"}');
  // Exports:
  return {
    utils__color_utils: color_utils
  };
}));

//# sourceMappingURL=color_utils.dart.lib.js.map