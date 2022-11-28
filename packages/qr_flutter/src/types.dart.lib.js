define(['dart_sdk'], (function load__packages__qr_flutter__src__types_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var types = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_Enum__name]: "finderPatternOuter",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_Enum__name]: "finderPatternInner",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_Enum__name]: "finderPatternDot",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_Enum__name]: "codePixel",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: types.QrCodeElement.prototype,
        [_Enum__name]: "codePixelEmpty",
        [_Enum_index]: 4
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5], types.QrCodeElement);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: types.FinderPatternPosition.prototype,
        [_Enum__name]: "topLeft",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: types.FinderPatternPosition.prototype,
        [_Enum__name]: "topRight",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: types.FinderPatternPosition.prototype,
        [_Enum__name]: "bottomLeft",
        [_Enum_index]: 2
      });
    },
    get C6() {
      return C[6] = dart.constList([C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9], types.FinderPatternPosition);
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: types.QrEyeShape.prototype,
        [_Enum__name]: "square",
        [_Enum_index]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: types.QrEyeShape.prototype,
        [_Enum__name]: "circle",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.constList([C[11] || CT.C11, C[12] || CT.C12], types.QrEyeShape);
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: types.QrDataModuleShape.prototype,
        [_Enum__name]: "square",
        [_Enum_index]: 0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: types.QrDataModuleShape.prototype,
        [_Enum__name]: "circle",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.constList([C[14] || CT.C14, C[15] || CT.C15], types.QrDataModuleShape);
    }
  }, false);
  var C = Array(16).fill(void 0);
  var I = ["package:qr_flutter/src/types.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  types.QrCodeElement = class QrCodeElement extends core._Enum {
    toString() {
      return "QrCodeElement." + this[_name];
    }
  };
  (types.QrCodeElement.new = function(index, name) {
    types.QrCodeElement.__proto__.new.call(this, index, name);
    ;
  }).prototype = types.QrCodeElement.prototype;
  dart.addTypeTests(types.QrCodeElement);
  dart.addTypeCaches(types.QrCodeElement);
  dart.setLibraryUri(types.QrCodeElement, I[0]);
  dart.setStaticFieldSignature(types.QrCodeElement, () => ['values', 'finderPatternOuter', 'finderPatternInner', 'finderPatternDot', 'codePixel', 'codePixelEmpty']);
  dart.defineExtensionMethods(types.QrCodeElement, ['toString']);
  dart.defineLazy(types.QrCodeElement, {
    /*types.QrCodeElement.values*/get values() {
      return C[0] || CT.C0;
    },
    /*types.QrCodeElement.finderPatternOuter*/get finderPatternOuter() {
      return C[1] || CT.C1;
    },
    /*types.QrCodeElement.finderPatternInner*/get finderPatternInner() {
      return C[2] || CT.C2;
    },
    /*types.QrCodeElement.finderPatternDot*/get finderPatternDot() {
      return C[3] || CT.C3;
    },
    /*types.QrCodeElement.codePixel*/get codePixel() {
      return C[4] || CT.C4;
    },
    /*types.QrCodeElement.codePixelEmpty*/get codePixelEmpty() {
      return C[5] || CT.C5;
    }
  }, false);
  types.FinderPatternPosition = class FinderPatternPosition extends core._Enum {
    toString() {
      return "FinderPatternPosition." + this[_name];
    }
  };
  (types.FinderPatternPosition.new = function(index, name) {
    types.FinderPatternPosition.__proto__.new.call(this, index, name);
    ;
  }).prototype = types.FinderPatternPosition.prototype;
  dart.addTypeTests(types.FinderPatternPosition);
  dart.addTypeCaches(types.FinderPatternPosition);
  dart.setLibraryUri(types.FinderPatternPosition, I[0]);
  dart.setStaticFieldSignature(types.FinderPatternPosition, () => ['values', 'topLeft', 'topRight', 'bottomLeft']);
  dart.defineExtensionMethods(types.FinderPatternPosition, ['toString']);
  dart.defineLazy(types.FinderPatternPosition, {
    /*types.FinderPatternPosition.values*/get values() {
      return C[6] || CT.C6;
    },
    /*types.FinderPatternPosition.topLeft*/get topLeft() {
      return C[7] || CT.C7;
    },
    /*types.FinderPatternPosition.topRight*/get topRight() {
      return C[8] || CT.C8;
    },
    /*types.FinderPatternPosition.bottomLeft*/get bottomLeft() {
      return C[9] || CT.C9;
    }
  }, false);
  types.QrEyeShape = class QrEyeShape extends core._Enum {
    toString() {
      return "QrEyeShape." + this[_name];
    }
  };
  (types.QrEyeShape.new = function(index, name) {
    types.QrEyeShape.__proto__.new.call(this, index, name);
    ;
  }).prototype = types.QrEyeShape.prototype;
  dart.addTypeTests(types.QrEyeShape);
  dart.addTypeCaches(types.QrEyeShape);
  dart.setLibraryUri(types.QrEyeShape, I[0]);
  dart.setStaticFieldSignature(types.QrEyeShape, () => ['values', 'square', 'circle']);
  dart.defineExtensionMethods(types.QrEyeShape, ['toString']);
  dart.defineLazy(types.QrEyeShape, {
    /*types.QrEyeShape.values*/get values() {
      return C[10] || CT.C10;
    },
    /*types.QrEyeShape.square*/get square() {
      return C[11] || CT.C11;
    },
    /*types.QrEyeShape.circle*/get circle() {
      return C[12] || CT.C12;
    }
  }, false);
  types.QrDataModuleShape = class QrDataModuleShape extends core._Enum {
    toString() {
      return "QrDataModuleShape." + this[_name];
    }
  };
  (types.QrDataModuleShape.new = function(index, name) {
    types.QrDataModuleShape.__proto__.new.call(this, index, name);
    ;
  }).prototype = types.QrDataModuleShape.prototype;
  dart.addTypeTests(types.QrDataModuleShape);
  dart.addTypeCaches(types.QrDataModuleShape);
  dart.setLibraryUri(types.QrDataModuleShape, I[0]);
  dart.setStaticFieldSignature(types.QrDataModuleShape, () => ['values', 'square', 'circle']);
  dart.defineExtensionMethods(types.QrDataModuleShape, ['toString']);
  dart.defineLazy(types.QrDataModuleShape, {
    /*types.QrDataModuleShape.values*/get values() {
      return C[13] || CT.C13;
    },
    /*types.QrDataModuleShape.square*/get square() {
      return C[14] || CT.C14;
    },
    /*types.QrDataModuleShape.circle*/get circle() {
      return C[15] || CT.C15;
    }
  }, false);
  var eyeShape$ = dart.privateName(types, "QrEyeStyle.eyeShape");
  var color$ = dart.privateName(types, "QrEyeStyle.color");
  types.QrEyeStyle = class QrEyeStyle extends core.Object {
    get eyeShape() {
      return this[eyeShape$];
    }
    set eyeShape(value) {
      super.eyeShape = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    static ['_#new#tearOff'](opts) {
      let eyeShape = opts && 'eyeShape' in opts ? opts.eyeShape : null;
      let color = opts && 'color' in opts ? opts.color : null;
      return new types.QrEyeStyle.new({eyeShape: eyeShape, color: color});
    }
    get hashCode() {
      return (dart.hashCode(this.eyeShape) ^ dart.hashCode(this.color)) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      if (types.QrEyeStyle.is(other)) {
        return this.eyeShape == other.eyeShape && dart.equals(this.color, other.color);
      }
      return false;
    }
  };
  (types.QrEyeStyle.new = function(opts) {
    let eyeShape = opts && 'eyeShape' in opts ? opts.eyeShape : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this[eyeShape$] = eyeShape;
    this[color$] = color;
    ;
  }).prototype = types.QrEyeStyle.prototype;
  dart.addTypeTests(types.QrEyeStyle);
  dart.addTypeCaches(types.QrEyeStyle);
  dart.setLibraryUri(types.QrEyeStyle, I[0]);
  dart.setFieldSignature(types.QrEyeStyle, () => ({
    __proto__: dart.getFields(types.QrEyeStyle.__proto__),
    eyeShape: dart.finalFieldType(dart.nullable(types.QrEyeShape)),
    color: dart.finalFieldType(dart.nullable(ui.Color))
  }));
  dart.defineExtensionMethods(types.QrEyeStyle, ['_equals']);
  dart.defineExtensionAccessors(types.QrEyeStyle, ['hashCode']);
  var dataModuleShape$ = dart.privateName(types, "QrDataModuleStyle.dataModuleShape");
  var color$0 = dart.privateName(types, "QrDataModuleStyle.color");
  types.QrDataModuleStyle = class QrDataModuleStyle extends core.Object {
    get dataModuleShape() {
      return this[dataModuleShape$];
    }
    set dataModuleShape(value) {
      super.dataModuleShape = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    static ['_#new#tearOff'](opts) {
      let dataModuleShape = opts && 'dataModuleShape' in opts ? opts.dataModuleShape : null;
      let color = opts && 'color' in opts ? opts.color : null;
      return new types.QrDataModuleStyle.new({dataModuleShape: dataModuleShape, color: color});
    }
    get hashCode() {
      return (dart.hashCode(this.dataModuleShape) ^ dart.hashCode(this.color)) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      if (types.QrDataModuleStyle.is(other)) {
        return this.dataModuleShape == other.dataModuleShape && dart.equals(this.color, other.color);
      }
      return false;
    }
  };
  (types.QrDataModuleStyle.new = function(opts) {
    let dataModuleShape = opts && 'dataModuleShape' in opts ? opts.dataModuleShape : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this[dataModuleShape$] = dataModuleShape;
    this[color$0] = color;
    ;
  }).prototype = types.QrDataModuleStyle.prototype;
  dart.addTypeTests(types.QrDataModuleStyle);
  dart.addTypeCaches(types.QrDataModuleStyle);
  dart.setLibraryUri(types.QrDataModuleStyle, I[0]);
  dart.setFieldSignature(types.QrDataModuleStyle, () => ({
    __proto__: dart.getFields(types.QrDataModuleStyle.__proto__),
    dataModuleShape: dart.finalFieldType(dart.nullable(types.QrDataModuleShape)),
    color: dart.finalFieldType(dart.nullable(ui.Color))
  }));
  dart.defineExtensionMethods(types.QrDataModuleStyle, ['_equals']);
  dart.defineExtensionAccessors(types.QrDataModuleStyle, ['hashCode']);
  var size$ = dart.privateName(types, "QrEmbeddedImageStyle.size");
  var color$1 = dart.privateName(types, "QrEmbeddedImageStyle.color");
  types.QrEmbeddedImageStyle = class QrEmbeddedImageStyle extends core.Object {
    get size() {
      return this[size$];
    }
    set size(value) {
      this[size$] = value;
    }
    get color() {
      return this[color$1];
    }
    set color(value) {
      this[color$1] = value;
    }
    static ['_#new#tearOff'](opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      let color = opts && 'color' in opts ? opts.color : null;
      return new types.QrEmbeddedImageStyle.new({size: size, color: color});
    }
    get hasDefinedSize() {
      return this.size != null && dart.nullCheck(this.size).longestSide > 0;
    }
    get hashCode() {
      return (dart.hashCode(this.size) ^ dart.hashCode(this.color)) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      if (types.QrEmbeddedImageStyle.is(other)) {
        return dart.equals(this.size, other.size) && dart.equals(this.color, other.color);
      }
      return false;
    }
  };
  (types.QrEmbeddedImageStyle.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this[size$] = size;
    this[color$1] = color;
    ;
  }).prototype = types.QrEmbeddedImageStyle.prototype;
  dart.addTypeTests(types.QrEmbeddedImageStyle);
  dart.addTypeCaches(types.QrEmbeddedImageStyle);
  dart.setGetterSignature(types.QrEmbeddedImageStyle, () => ({
    __proto__: dart.getGetters(types.QrEmbeddedImageStyle.__proto__),
    hasDefinedSize: core.bool
  }));
  dart.setLibraryUri(types.QrEmbeddedImageStyle, I[0]);
  dart.setFieldSignature(types.QrEmbeddedImageStyle, () => ({
    __proto__: dart.getFields(types.QrEmbeddedImageStyle.__proto__),
    size: dart.fieldType(dart.nullable(ui.Size)),
    color: dart.fieldType(dart.nullable(ui.Color))
  }));
  dart.defineExtensionMethods(types.QrEmbeddedImageStyle, ['_equals']);
  dart.defineExtensionAccessors(types.QrEmbeddedImageStyle, ['hashCode']);
  dart.trackLibraries("packages/qr_flutter/src/types.dart", {
    "package:qr_flutter/src/types.dart": types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4BA;;;;;;;;;;;;MAfK,0BAAM;;;MAET,sCAAkB;;;MAGlB,sCAAkB;;;MAGlB,oCAAgB;;;MAGhB,6BAAS;;;MAGT,kCAAc;;;;;;;IAahB;;;;;;;;;;;;MATK,kCAAM;;;MAET,mCAAO;;;MAGP,oCAAQ;;;MAGR,sCAAU;;;;;;;IAUZ;;;;;;;;;;;;MANK,uBAAM;;;MAET,uBAAM;;;MAGN,uBAAM;;;;;;;IAUR;;;;;;;;;;;;MANK,8BAAM;;;MAET,8BAAM;;;MAGN,8BAAM;;;;;;;IASY;;;;;;IAGL;;;;;;;;;;;;AAGO,YAAkB,EAAT,cAAT,iBAA0B,cAAN;IAAc;YAG9B;;AACtB,UAAU,oBAAN,KAAK;AACP,cAAO,AAAS,AAAkB,kBAAf,AAAM,KAAD,aAAmB,YAAN,YAAS,AAAM,KAAD;;AAErD,YAAO;IACT;;;QAjBuB;QAAe;IAAf;IAAe;;EAAO;;;;;;;;;;;;;;IA6BpB;;;;;;IAGZ;;;;;;;;;;;;AAGO,YAAyB,EAAT,cAAhB,wBAAiC,cAAN;IAAc;YAGrC;;AACtB,UAAU,2BAAN,KAAK;AACP,cAAO,AAAgB,AAAyB,yBAAtB,AAAM,KAAD,oBAA0B,YAAN,YAAS,AAAM,KAAD;;AAEnE,YAAO;IACT;;;QAnBO;QACA;IADA;IACA;;EACL;;;;;;;;;;;;;;IA+BI;;;;;;IAGC;;;;;;;;;;;;AAGoB,YAAA,AAAa,sBAAO,AAAE,AAAY,eAAlB,yBAAoB;IAAC;;AAG5C,YAAc,EAAT,cAAL,aAAsB,cAAN;IAAc;YAG1B;;AACtB,UAAU,8BAAN,KAAK;AACP,cAAY,AAAc,aAAnB,WAAQ,AAAM,KAAD,UAAe,YAAN,YAAS,AAAM,KAAD;;AAE7C,YAAO;IACT;;;QAxBO;QACA;IADA;IACA;;EACL","file":"../../../../../../../../../../../packages/qr_flutter/src/types.dart.lib.js"}');
  // Exports:
  return {
    src__types: types
  };
}));

//# sourceMappingURL=types.dart.lib.js.map
