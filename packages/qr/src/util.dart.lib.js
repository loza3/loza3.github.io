define(['dart_sdk'], (function load__packages__qr__src__util_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var util = Object.create(dart.library);
  var $leftShift = dartx['<<'];
  var $rightShift = dartx['>>'];
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.constList([], core.int);
    },
    get C2() {
      return C[2] = dart.constList([6, 18], core.int);
    },
    get C3() {
      return C[3] = dart.constList([6, 22], core.int);
    },
    get C4() {
      return C[4] = dart.constList([6, 26], core.int);
    },
    get C5() {
      return C[5] = dart.constList([6, 30], core.int);
    },
    get C6() {
      return C[6] = dart.constList([6, 34], core.int);
    },
    get C7() {
      return C[7] = dart.constList([6, 22, 38], core.int);
    },
    get C8() {
      return C[8] = dart.constList([6, 24, 42], core.int);
    },
    get C9() {
      return C[9] = dart.constList([6, 26, 46], core.int);
    },
    get C10() {
      return C[10] = dart.constList([6, 28, 50], core.int);
    },
    get C11() {
      return C[11] = dart.constList([6, 30, 54], core.int);
    },
    get C12() {
      return C[12] = dart.constList([6, 32, 58], core.int);
    },
    get C13() {
      return C[13] = dart.constList([6, 34, 62], core.int);
    },
    get C14() {
      return C[14] = dart.constList([6, 26, 46, 66], core.int);
    },
    get C15() {
      return C[15] = dart.constList([6, 26, 48, 70], core.int);
    },
    get C16() {
      return C[16] = dart.constList([6, 26, 50, 74], core.int);
    },
    get C17() {
      return C[17] = dart.constList([6, 30, 54, 78], core.int);
    },
    get C18() {
      return C[18] = dart.constList([6, 30, 56, 82], core.int);
    },
    get C19() {
      return C[19] = dart.constList([6, 30, 58, 86], core.int);
    },
    get C20() {
      return C[20] = dart.constList([6, 34, 62, 90], core.int);
    },
    get C21() {
      return C[21] = dart.constList([6, 28, 50, 72, 94], core.int);
    },
    get C22() {
      return C[22] = dart.constList([6, 26, 50, 74, 98], core.int);
    },
    get C23() {
      return C[23] = dart.constList([6, 30, 54, 78, 102], core.int);
    },
    get C24() {
      return C[24] = dart.constList([6, 28, 54, 80, 106], core.int);
    },
    get C25() {
      return C[25] = dart.constList([6, 32, 58, 84, 110], core.int);
    },
    get C26() {
      return C[26] = dart.constList([6, 30, 58, 86, 114], core.int);
    },
    get C27() {
      return C[27] = dart.constList([6, 34, 62, 90, 118], core.int);
    },
    get C28() {
      return C[28] = dart.constList([6, 26, 50, 74, 98, 122], core.int);
    },
    get C29() {
      return C[29] = dart.constList([6, 30, 54, 78, 102, 126], core.int);
    },
    get C30() {
      return C[30] = dart.constList([6, 26, 52, 78, 104, 130], core.int);
    },
    get C31() {
      return C[31] = dart.constList([6, 30, 56, 82, 108, 134], core.int);
    },
    get C32() {
      return C[32] = dart.constList([6, 34, 60, 86, 112, 138], core.int);
    },
    get C33() {
      return C[33] = dart.constList([6, 30, 58, 86, 114, 142], core.int);
    },
    get C34() {
      return C[34] = dart.constList([6, 34, 62, 90, 118, 146], core.int);
    },
    get C35() {
      return C[35] = dart.constList([6, 30, 54, 78, 102, 126, 150], core.int);
    },
    get C36() {
      return C[36] = dart.constList([6, 24, 50, 76, 102, 128, 154], core.int);
    },
    get C37() {
      return C[37] = dart.constList([6, 28, 54, 80, 106, 132, 158], core.int);
    },
    get C38() {
      return C[38] = dart.constList([6, 32, 58, 84, 110, 136, 162], core.int);
    },
    get C39() {
      return C[39] = dart.constList([6, 26, 54, 82, 110, 138, 166], core.int);
    },
    get C40() {
      return C[40] = dart.constList([6, 30, 58, 86, 114, 142, 170], core.int);
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17, C[18] || CT.C18, C[19] || CT.C19, C[20] || CT.C20, C[21] || CT.C21, C[22] || CT.C22, C[23] || CT.C23, C[24] || CT.C24, C[25] || CT.C25, C[26] || CT.C26, C[27] || CT.C27, C[28] || CT.C28, C[29] || CT.C29, C[30] || CT.C30, C[31] || CT.C31, C[32] || CT.C32, C[33] || CT.C33, C[34] || CT.C34, C[35] || CT.C35, C[36] || CT.C36, C[37] || CT.C37, C[38] || CT.C38, C[39] || CT.C39, C[40] || CT.C40], T.ListOfint());
    }
  }, false);
  var C = Array(41).fill(void 0);
  util.bchTypeInfo = function bchTypeInfo(data) {
    let d = data << 10 >>> 0;
    while (util._bchDigit(d) - util._bchDigit(1335) >= 0) {
      d = (d ^ (1335)[$leftShift](util._bchDigit(d) - util._bchDigit(1335))) >>> 0;
    }
    return ((data << 10 | d) ^ 21522) >>> 0;
  };
  util.bchTypeNumber = function bchTypeNumber(data) {
    let d = data << 12 >>> 0;
    while (util._bchDigit(d) - util._bchDigit(7973) >= 0) {
      d = (d ^ (7973)[$leftShift](util._bchDigit(d) - util._bchDigit(7973))) >>> 0;
    }
    return (data << 12 | d) >>> 0;
  };
  util._bchDigit = function _bchDigit(data) {
    let digit = 0;
    while (data !== 0) {
      digit = digit + 1;
      data = data[$rightShift](1);
    }
    return digit;
  };
  util.patternPosition = function patternPosition(typeNumber) {
    return util._patternPositionTable[$_get](typeNumber - 1);
  };
  dart.defineLazy(util, {
    /*util._patternPositionTable*/get _patternPositionTable() {
      return C[0] || CT.C0;
    },
    /*util._g15*/get _g15() {
      return 1335;
    },
    /*util._g18*/get _g18() {
      return 7973;
    },
    /*util._g15Mask*/get _g15Mask() {
      return 21522;
    }
  }, false);
  dart.trackLibraries("packages/qr/src/util.dart", {
    "package:qr/src/util.dart": util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0CAuDoB;AACd,YAAI,AAAK,IAAD,IAAI;AAChB,WAAO,AAAa,AAAkB,eAArB,CAAC,IAAI,wBAAmB;AACM,MAA7C,IAAE,CAAF,CAAC,GAAS,mBAAI,AAAa,eAAH,CAAC,IAAI;;AAE/B,UAA0B,GAAjB,AAAK,AAAO,IAAR,IAAI,KAAM,CAAC;EAC1B;8CAEsB;AAChB,YAAI,AAAK,IAAD,IAAI;AAChB,WAAO,AAAa,AAAkB,eAArB,CAAC,IAAI,wBAAmB;AACM,MAA7C,IAAE,CAAF,CAAC,GAAS,mBAAI,AAAa,eAAH,CAAC,IAAI;;AAE/B,UAAoB,EAAZ,AAAK,IAAD,IAAI,KAAM,CAAC;EACzB;sCAEkB;AACZ,gBAAQ;AAEZ,WAAO,IAAI,KAAI;AACN,MAAP,QAAA,AAAK,KAAA;AACK,MAAV,OAAA,AAAK,IAAD,cAAK;;AAGX,UAAO,MAAK;EACd;kDAE8B;AAC1B,UAAA,AAAqB,mCAAC,AAAW,UAAD,GAAG;EAAE;;MAnFnB,0BAAqB;;;MA2CjC,SAAI;;;MAEJ,SAAI;;;MAQR,aAAQ","file":"../../../../../../../../../../../packages/qr/src/util.dart.lib.js"}');
  // Exports:
  return {
    src__util: util
  };
}));

//# sourceMappingURL=util.dart.lib.js.map
