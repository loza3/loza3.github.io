define(['dart_sdk'], (function load__packages__flutter__src__painting__box_fit_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var box_fit = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fill",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "contain",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "cover",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fitWidth",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fitHeight",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "scaleDown",
        [_Enum_index]: 6
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7], box_fit.BoxFit);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: box_fit.FittedSizes.prototype,
        [destination$]: C[9] || CT.C9,
        [source$]: C[9] || CT.C9
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = ["package:flutter/src/painting/box_fit.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  box_fit.BoxFit = class BoxFit extends core._Enum {
    toString() {
      return "BoxFit." + this[_name];
    }
  };
  (box_fit.BoxFit.new = function(index, name) {
    box_fit.BoxFit.__proto__.new.call(this, index, name);
    ;
  }).prototype = box_fit.BoxFit.prototype;
  dart.addTypeTests(box_fit.BoxFit);
  dart.addTypeCaches(box_fit.BoxFit);
  dart.setLibraryUri(box_fit.BoxFit, I[0]);
  dart.setStaticFieldSignature(box_fit.BoxFit, () => ['values', 'fill', 'contain', 'cover', 'fitWidth', 'fitHeight', 'none', 'scaleDown']);
  dart.defineExtensionMethods(box_fit.BoxFit, ['toString']);
  dart.defineLazy(box_fit.BoxFit, {
    /*box_fit.BoxFit.values*/get values() {
      return C[0] || CT.C0;
    },
    /*box_fit.BoxFit.fill*/get fill() {
      return C[1] || CT.C1;
    },
    /*box_fit.BoxFit.contain*/get contain() {
      return C[2] || CT.C2;
    },
    /*box_fit.BoxFit.cover*/get cover() {
      return C[3] || CT.C3;
    },
    /*box_fit.BoxFit.fitWidth*/get fitWidth() {
      return C[4] || CT.C4;
    },
    /*box_fit.BoxFit.fitHeight*/get fitHeight() {
      return C[5] || CT.C5;
    },
    /*box_fit.BoxFit.none*/get none() {
      return C[6] || CT.C6;
    },
    /*box_fit.BoxFit.scaleDown*/get scaleDown() {
      return C[7] || CT.C7;
    }
  }, false);
  var source$ = dart.privateName(box_fit, "FittedSizes.source");
  var destination$ = dart.privateName(box_fit, "FittedSizes.destination");
  box_fit.FittedSizes = class FittedSizes extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get destination() {
      return this[destination$];
    }
    set destination(value) {
      super.destination = value;
    }
    static ['_#new#tearOff'](source, destination) {
      return new box_fit.FittedSizes.new(source, destination);
    }
  };
  (box_fit.FittedSizes.new = function(source, destination) {
    this[source$] = source;
    this[destination$] = destination;
    ;
  }).prototype = box_fit.FittedSizes.prototype;
  dart.addTypeTests(box_fit.FittedSizes);
  dart.addTypeCaches(box_fit.FittedSizes);
  dart.setLibraryUri(box_fit.FittedSizes, I[0]);
  dart.setFieldSignature(box_fit.FittedSizes, () => ({
    __proto__: dart.getFields(box_fit.FittedSizes.__proto__),
    source: dart.finalFieldType(ui.Size),
    destination: dart.finalFieldType(ui.Size)
  }));
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  box_fit.applyBoxFit = function applyBoxFit(fit, inputSize, outputSize) {
    if (inputSize.height <= 0.0 || inputSize.width <= 0.0 || outputSize.height <= 0.0 || outputSize.width <= 0.0) {
      return C[8] || CT.C8;
    }
    let sourceSize = null;
    let destinationSize = null;
    switch (fit) {
      case C[1] || CT.C1:
        {
          sourceSize = inputSize;
          destinationSize = outputSize;
          break;
        }
      case C[2] || CT.C2:
        {
          sourceSize = inputSize;
          if (outputSize.width / outputSize.height > sourceSize.width / sourceSize.height) {
            destinationSize = new ui.Size.new(sourceSize.width * outputSize.height / sourceSize.height, outputSize.height);
          } else {
            destinationSize = new ui.Size.new(outputSize.width, sourceSize.height * outputSize.width / sourceSize.width);
          }
          break;
        }
      case C[3] || CT.C3:
        {
          if (outputSize.width / outputSize.height > inputSize.width / inputSize.height) {
            sourceSize = new ui.Size.new(inputSize.width, inputSize.width * outputSize.height / outputSize.width);
          } else {
            sourceSize = new ui.Size.new(inputSize.height * outputSize.width / outputSize.height, inputSize.height);
          }
          destinationSize = outputSize;
          break;
        }
      case C[4] || CT.C4:
        {
          sourceSize = new ui.Size.new(inputSize.width, inputSize.width * outputSize.height / outputSize.width);
          destinationSize = new ui.Size.new(outputSize.width, sourceSize.height * outputSize.width / sourceSize.width);
          break;
        }
      case C[5] || CT.C5:
        {
          sourceSize = new ui.Size.new(inputSize.height * outputSize.width / outputSize.height, inputSize.height);
          destinationSize = new ui.Size.new(sourceSize.width * outputSize.height / sourceSize.height, outputSize.height);
          break;
        }
      case C[6] || CT.C6:
        {
          sourceSize = new ui.Size.new(math.min(core.double, inputSize.width, outputSize.width), math.min(core.double, inputSize.height, outputSize.height));
          destinationSize = sourceSize;
          break;
        }
      case C[7] || CT.C7:
        {
          sourceSize = inputSize;
          destinationSize = inputSize;
          let aspectRatio = inputSize.width / inputSize.height;
          if (destinationSize.height > outputSize.height) {
            destinationSize = new ui.Size.new(outputSize.height * aspectRatio, outputSize.height);
          }
          if (destinationSize.width > outputSize.width) {
            destinationSize = new ui.Size.new(outputSize.width, outputSize.width / aspectRatio);
          }
          break;
        }
    }
    return new box_fit.FittedSizes.new(sourceSize, destinationSize);
  };
  dart.trackLibraries("packages/flutter/src/painting/box_fit.dart", {
    "package:flutter/src/painting/box_fit.dart": box_fit
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box_fit.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyEA;;;;;;;;;;;;MAzDK,qBAAM;;;MAIT,mBAAI;;;MAMJ,sBAAO;;;MAUP,oBAAK;;;MAQL,uBAAQ;;;MAQR,wBAAS;;;MAUT,mBAAI;;;MAUJ,wBAAS;;;;;;;IAWE;;;;;;IAGA;;;;;;;;;;sCANY,QAAa;IAAb;IAAa;;EAAY;;;;;;;;;;;6CA4DnB,KAAU,WAAgB;AACvD,QAAI,AAAU,AAAO,SAAR,WAAW,OAAO,AAAU,AAAM,SAAP,UAAU,OAAO,AAAW,AAAO,UAAR,WAAW,OAAO,AAAW,AAAM,UAAP,UAAU;AACvG;;AAGG;AAAY;AACjB,YAAQ,GAAG;;;AAEe,UAAtB,aAAa,SAAS;AACM,UAA5B,kBAAkB,UAAU;AAC5B;;;;AAEsB,UAAtB,aAAa,SAAS;AACtB,cAAI,AAAW,AAAM,AAAoB,UAA3B,SAAS,AAAW,UAAD,UAAU,AAAW,AAAM,UAAP,SAAS,AAAW,UAAD;AAC6B,YAAnG,kBAAkB,gBAAK,AAAW,AAAM,AAAoB,UAA3B,SAAS,AAAW,UAAD,UAAU,AAAW,UAAD,SAAS,AAAW,UAAD;;AAEM,YAAjG,kBAAkB,gBAAK,AAAW,UAAD,QAAQ,AAAW,AAAO,AAAmB,UAA3B,UAAU,AAAW,UAAD,SAAS,AAAW,UAAD;;AAE5F;;;;AAEA,cAAI,AAAW,AAAM,AAAoB,UAA3B,SAAS,AAAW,UAAD,UAAU,AAAU,AAAM,SAAP,SAAS,AAAU,SAAD;AACsB,YAA1F,aAAa,gBAAK,AAAU,SAAD,QAAQ,AAAU,AAAM,AAAoB,SAA3B,SAAS,AAAW,UAAD,UAAU,AAAW,UAAD;;AAES,YAA5F,aAAa,gBAAK,AAAU,AAAO,AAAmB,SAA3B,UAAU,AAAW,UAAD,SAAS,AAAW,UAAD,SAAS,AAAU,SAAD;;AAE1D,UAA5B,kBAAkB,UAAU;AAC5B;;;;AAE0F,UAA1F,aAAa,gBAAK,AAAU,SAAD,QAAQ,AAAU,AAAM,AAAoB,SAA3B,SAAS,AAAW,UAAD,UAAU,AAAW,UAAD;AACc,UAAjG,kBAAkB,gBAAK,AAAW,UAAD,QAAQ,AAAW,AAAO,AAAmB,UAA3B,UAAU,AAAW,UAAD,SAAS,AAAW,UAAD;AAC1F;;;;AAE4F,UAA5F,aAAa,gBAAK,AAAU,AAAO,AAAmB,SAA3B,UAAU,AAAW,UAAD,SAAS,AAAW,UAAD,SAAS,AAAU,SAAD;AACe,UAAnG,kBAAkB,gBAAK,AAAW,AAAM,AAAoB,UAA3B,SAAS,AAAW,UAAD,UAAU,AAAW,UAAD,SAAS,AAAW,UAAD;AAC3F;;;;AAE6G,UAA7G,aAAa,gBAAU,sBAAI,AAAU,SAAD,QAAQ,AAAW,UAAD,SAAc,sBAAI,AAAU,SAAD,SAAS,AAAW,UAAD;AACxE,UAA5B,kBAAkB,UAAU;AAC5B;;;;AAEsB,UAAtB,aAAa,SAAS;AACK,UAA3B,kBAAkB,SAAS;AACd,4BAAc,AAAU,AAAM,SAAP,SAAS,AAAU,SAAD;AACtD,cAAI,AAAgB,AAAO,eAAR,UAAU,AAAW,UAAD;AACqC,YAA1E,kBAAkB,gBAAK,AAAW,AAAO,UAAR,UAAU,WAAW,EAAE,AAAW,UAAD;;AAEpE,cAAI,AAAgB,AAAM,eAAP,SAAS,AAAW,UAAD;AACoC,YAAxE,kBAAkB,gBAAK,AAAW,UAAD,QAAQ,AAAW,AAAM,UAAP,SAAS,WAAW;;AAEzE;;;AAEJ,UAAO,6BAAY,UAAU,EAAE,eAAe;EAChD","file":"../../../../../../../../../../packages/flutter/src/painting/box_fit.dart.lib.js"}');
  // Exports:
  return {
    src__painting__box_fit: box_fit
  };
}));

//# sourceMappingURL=box_fit.dart.lib.js.map
