define(['dart_sdk'], (function load__packages__lottie__src__model__document_data_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var document_data = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: document_data.Justification.prototype,
        [_Enum__name]: "leftAlign",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: document_data.Justification.prototype,
        [_Enum__name]: "rightAlign",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: document_data.Justification.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], document_data.Justification);
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:lottie/src/model/document_data.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  document_data.Justification = class Justification extends core._Enum {
    toString() {
      return "Justification." + this[_name];
    }
  };
  (document_data.Justification.new = function(index, name) {
    document_data.Justification.__proto__.new.call(this, index, name);
    ;
  }).prototype = document_data.Justification.prototype;
  dart.addTypeTests(document_data.Justification);
  dart.addTypeCaches(document_data.Justification);
  dart.setLibraryUri(document_data.Justification, I[0]);
  dart.setStaticFieldSignature(document_data.Justification, () => ['values', 'leftAlign', 'rightAlign', 'center']);
  dart.defineExtensionMethods(document_data.Justification, ['toString']);
  dart.defineLazy(document_data.Justification, {
    /*document_data.Justification.values*/get values() {
      return C[0] || CT.C0;
    },
    /*document_data.Justification.leftAlign*/get leftAlign() {
      return C[1] || CT.C1;
    },
    /*document_data.Justification.rightAlign*/get rightAlign() {
      return C[2] || CT.C2;
    },
    /*document_data.Justification.center*/get center() {
      return C[3] || CT.C3;
    }
  }, false);
  var text$ = dart.privateName(document_data, "DocumentData.text");
  var fontName$ = dart.privateName(document_data, "DocumentData.fontName");
  var size$ = dart.privateName(document_data, "DocumentData.size");
  var justification$ = dart.privateName(document_data, "DocumentData.justification");
  var tracking$ = dart.privateName(document_data, "DocumentData.tracking");
  var lineHeight$ = dart.privateName(document_data, "DocumentData.lineHeight");
  var baselineShift$ = dart.privateName(document_data, "DocumentData.baselineShift");
  var color$ = dart.privateName(document_data, "DocumentData.color");
  var strokeColor$ = dart.privateName(document_data, "DocumentData.strokeColor");
  var strokeWidth$ = dart.privateName(document_data, "DocumentData.strokeWidth");
  var strokeOverFill$ = dart.privateName(document_data, "DocumentData.strokeOverFill");
  document_data.DocumentData = class DocumentData extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get fontName() {
      return this[fontName$];
    }
    set fontName(value) {
      super.fontName = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get justification() {
      return this[justification$];
    }
    set justification(value) {
      super.justification = value;
    }
    get tracking() {
      return this[tracking$];
    }
    set tracking(value) {
      super.tracking = value;
    }
    get lineHeight() {
      return this[lineHeight$];
    }
    set lineHeight(value) {
      super.lineHeight = value;
    }
    get baselineShift() {
      return this[baselineShift$];
    }
    set baselineShift(value) {
      super.baselineShift = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get strokeColor() {
      return this[strokeColor$];
    }
    set strokeColor(value) {
      super.strokeColor = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    get strokeOverFill() {
      return this[strokeOverFill$];
    }
    set strokeOverFill(value) {
      super.strokeOverFill = value;
    }
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      let fontName = opts && 'fontName' in opts ? opts.fontName : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let justification = opts && 'justification' in opts ? opts.justification : null;
      let tracking = opts && 'tracking' in opts ? opts.tracking : null;
      let lineHeight = opts && 'lineHeight' in opts ? opts.lineHeight : null;
      let baselineShift = opts && 'baselineShift' in opts ? opts.baselineShift : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let strokeColor = opts && 'strokeColor' in opts ? opts.strokeColor : null;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      let strokeOverFill = opts && 'strokeOverFill' in opts ? opts.strokeOverFill : null;
      return new document_data.DocumentData.new({text: text, fontName: fontName, size: size, justification: justification, tracking: tracking, lineHeight: lineHeight, baselineShift: baselineShift, color: color, strokeColor: strokeColor, strokeWidth: strokeWidth, strokeOverFill: strokeOverFill});
    }
    get hashCode() {
      return core.Object.hash(this.text, this.fontName, this.size, this.justification.index, this.tracking, this.lineHeight, this.baselineShift, this.color, this.strokeColor, this.strokeWidth, this.strokeOverFill);
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || document_data.DocumentData.is(other) && this[$runtimeType]._equals(other[$runtimeType]) && this.text === other.text && this.fontName == other.fontName && this.size === other.size && this.justification === other.justification && this.tracking === other.tracking && this.lineHeight === other.lineHeight && this.baselineShift === other.baselineShift && this.color._equals(other.color) && this.strokeColor._equals(other.strokeColor) && this.strokeWidth === other.strokeWidth && this.strokeOverFill === other.strokeOverFill;
    }
  };
  (document_data.DocumentData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let fontName = opts && 'fontName' in opts ? opts.fontName : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let justification = opts && 'justification' in opts ? opts.justification : null;
    let tracking = opts && 'tracking' in opts ? opts.tracking : null;
    let lineHeight = opts && 'lineHeight' in opts ? opts.lineHeight : null;
    let baselineShift = opts && 'baselineShift' in opts ? opts.baselineShift : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let strokeColor = opts && 'strokeColor' in opts ? opts.strokeColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let strokeOverFill = opts && 'strokeOverFill' in opts ? opts.strokeOverFill : null;
    this[text$] = text;
    this[fontName$] = fontName;
    this[size$] = size;
    this[justification$] = justification;
    this[tracking$] = tracking;
    this[lineHeight$] = lineHeight;
    this[baselineShift$] = baselineShift;
    this[color$] = color;
    this[strokeColor$] = strokeColor;
    this[strokeWidth$] = strokeWidth;
    this[strokeOverFill$] = strokeOverFill;
    ;
  }).prototype = document_data.DocumentData.prototype;
  dart.addTypeTests(document_data.DocumentData);
  dart.addTypeCaches(document_data.DocumentData);
  dart.setLibraryUri(document_data.DocumentData, I[0]);
  dart.setFieldSignature(document_data.DocumentData, () => ({
    __proto__: dart.getFields(document_data.DocumentData.__proto__),
    text: dart.finalFieldType(core.String),
    fontName: dart.finalFieldType(dart.nullable(core.String)),
    size: dart.finalFieldType(core.double),
    justification: dart.finalFieldType(document_data.Justification),
    tracking: dart.finalFieldType(core.int),
    lineHeight: dart.finalFieldType(core.double),
    baselineShift: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    strokeColor: dart.finalFieldType(ui.Color),
    strokeWidth: dart.finalFieldType(core.double),
    strokeOverFill: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(document_data.DocumentData, ['_equals']);
  dart.defineExtensionAccessors(document_data.DocumentData, ['hashCode']);
  dart.trackLibraries("packages/lottie/src/model/document_data.dart", {
    "package:lottie/src/model/document_data.dart": document_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["document_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAEmD;;;;;;;;;;;;MAA9C,kCAAM;;;MAAU,qCAAS;;;MAAE,sCAAU;;;MAAE,kCAAM;;;;;;;;;;;;;;;;IAGnC;;;;;;IACC;;;;;;IACD;;;;;;IACO;;;;;;IACV;;;;;;IACG;;;;;;IACA;;;;;;IACD;;;;;;IACA;;;;;;IACC;;;;;;IACF;;;;;;;;;;;;;;;;;;;;;AAkBT,YAAc,kBACV,WACA,eACA,WACA,AAAc,0BACd,eACA,iBACA,oBACA,YACA,kBACA,kBACA;IACN;YAGwB;;AACpB,YAAA,AAAU,AAAa,UAAP,KAAK,IACf,8BAAN,KAAK,KACD,AAAY,2BAAG,AAAM,KAAD,mBACpB,AAAK,cAAG,AAAM,KAAD,SACb,AAAS,iBAAG,AAAM,KAAD,aACjB,AAAK,cAAG,AAAM,KAAD,SACb,AAAc,uBAAG,AAAM,KAAD,kBACtB,AAAS,kBAAG,AAAM,KAAD,aACjB,AAAW,oBAAG,AAAM,KAAD,eACnB,AAAc,uBAAG,AAAM,KAAD,kBACtB,AAAM,mBAAG,AAAM,KAAD,WACd,AAAY,yBAAG,AAAM,KAAD,iBACpB,AAAY,qBAAG,AAAM,KAAD,gBACpB,AAAe,wBAAG,AAAM,KAAD;IAAe;;;QA5C9B;QACT;QACS;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAVA;IACT;IACS;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACd","file":"../../../../../../../../../../../../packages/lottie/src/model/document_data.dart.lib.js"}');
  // Exports:
  return {
    src__model__document_data: document_data
  };
}));

//# sourceMappingURL=document_data.dart.lib.js.map
