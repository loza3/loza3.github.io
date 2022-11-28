define(['dart_sdk'], (function load__packages__flutter__src__painting__basic_types_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var basic_types = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "identical",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "metadata",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "paint",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "layout",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], basic_types.RenderComparison);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.constList([C[6] || CT.C6, C[7] || CT.C7], basic_types.Axis);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.constList([C[9] || CT.C9, C[10] || CT.C10], basic_types.VerticalDirection);
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C11() {
      return C[11] = dart.constList([C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15], basic_types.AxisDirection);
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(18).fill(void 0);
  var I = [
    "package:flutter/src/painting/basic_types.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/painting/basic_types.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  basic_types.RenderComparison = class RenderComparison extends core._Enum {
    toString() {
      return "RenderComparison." + this[_name];
    }
  };
  (basic_types.RenderComparison.new = function(index, name) {
    basic_types.RenderComparison.__proto__.new.call(this, index, name);
    ;
  }).prototype = basic_types.RenderComparison.prototype;
  dart.addTypeTests(basic_types.RenderComparison);
  dart.addTypeCaches(basic_types.RenderComparison);
  dart.setLibraryUri(basic_types.RenderComparison, I[0]);
  dart.setStaticFieldSignature(basic_types.RenderComparison, () => ['values', 'identical', 'metadata', 'paint', 'layout']);
  dart.defineExtensionMethods(basic_types.RenderComparison, ['toString']);
  dart.defineLazy(basic_types.RenderComparison, {
    /*basic_types.RenderComparison.values*/get values() {
      return C[0] || CT.C0;
    },
    /*basic_types.RenderComparison.identical*/get identical() {
      return C[1] || CT.C1;
    },
    /*basic_types.RenderComparison.metadata*/get metadata() {
      return C[2] || CT.C2;
    },
    /*basic_types.RenderComparison.paint*/get paint() {
      return C[3] || CT.C3;
    },
    /*basic_types.RenderComparison.layout*/get layout() {
      return C[4] || CT.C4;
    }
  }, false);
  basic_types.Axis = class Axis extends core._Enum {
    toString() {
      return "Axis." + this[_name];
    }
  };
  (basic_types.Axis.new = function(index, name) {
    basic_types.Axis.__proto__.new.call(this, index, name);
    ;
  }).prototype = basic_types.Axis.prototype;
  dart.addTypeTests(basic_types.Axis);
  dart.addTypeCaches(basic_types.Axis);
  dart.setLibraryUri(basic_types.Axis, I[0]);
  dart.setStaticFieldSignature(basic_types.Axis, () => ['values', 'horizontal', 'vertical']);
  dart.defineExtensionMethods(basic_types.Axis, ['toString']);
  dart.defineLazy(basic_types.Axis, {
    /*basic_types.Axis.values*/get values() {
      return C[5] || CT.C5;
    },
    /*basic_types.Axis.horizontal*/get horizontal() {
      return C[6] || CT.C6;
    },
    /*basic_types.Axis.vertical*/get vertical() {
      return C[7] || CT.C7;
    }
  }, false);
  basic_types.VerticalDirection = class VerticalDirection extends core._Enum {
    toString() {
      return "VerticalDirection." + this[_name];
    }
  };
  (basic_types.VerticalDirection.new = function(index, name) {
    basic_types.VerticalDirection.__proto__.new.call(this, index, name);
    ;
  }).prototype = basic_types.VerticalDirection.prototype;
  dart.addTypeTests(basic_types.VerticalDirection);
  dart.addTypeCaches(basic_types.VerticalDirection);
  dart.setLibraryUri(basic_types.VerticalDirection, I[0]);
  dart.setStaticFieldSignature(basic_types.VerticalDirection, () => ['values', 'up', 'down']);
  dart.defineExtensionMethods(basic_types.VerticalDirection, ['toString']);
  dart.defineLazy(basic_types.VerticalDirection, {
    /*basic_types.VerticalDirection.values*/get values() {
      return C[8] || CT.C8;
    },
    /*basic_types.VerticalDirection.up*/get up() {
      return C[9] || CT.C9;
    },
    /*basic_types.VerticalDirection.down*/get down() {
      return C[10] || CT.C10;
    }
  }, false);
  basic_types.AxisDirection = class AxisDirection extends core._Enum {
    toString() {
      return "AxisDirection." + this[_name];
    }
  };
  (basic_types.AxisDirection.new = function(index, name) {
    basic_types.AxisDirection.__proto__.new.call(this, index, name);
    ;
  }).prototype = basic_types.AxisDirection.prototype;
  dart.addTypeTests(basic_types.AxisDirection);
  dart.addTypeCaches(basic_types.AxisDirection);
  dart.setLibraryUri(basic_types.AxisDirection, I[0]);
  dart.setStaticFieldSignature(basic_types.AxisDirection, () => ['values', 'up', 'right', 'down', 'left']);
  dart.defineExtensionMethods(basic_types.AxisDirection, ['toString']);
  dart.defineLazy(basic_types.AxisDirection, {
    /*basic_types.AxisDirection.values*/get values() {
      return C[11] || CT.C11;
    },
    /*basic_types.AxisDirection.up*/get up() {
      return C[12] || CT.C12;
    },
    /*basic_types.AxisDirection.right*/get right() {
      return C[13] || CT.C13;
    },
    /*basic_types.AxisDirection.down*/get down() {
      return C[14] || CT.C14;
    },
    /*basic_types.AxisDirection.left*/get left() {
      return C[15] || CT.C15;
    }
  }, false);
  basic_types.flipAxis = function flipAxis(direction) {
    if (!(direction !== null)) dart.assertFailed(null, I[1], 139, 10, "direction != null");
    switch (direction) {
      case C[6] || CT.C6:
        {
          return basic_types.Axis.vertical;
        }
      case C[7] || CT.C7:
        {
          return basic_types.Axis.horizontal;
        }
    }
  };
  basic_types.axisDirectionToAxis = function axisDirectionToAxis(axisDirection) {
    if (!(axisDirection !== null)) dart.assertFailed(null, I[1], 207, 10, "axisDirection != null");
    switch (axisDirection) {
      case C[12] || CT.C12:
      case C[14] || CT.C14:
        {
          return basic_types.Axis.vertical;
        }
      case C[15] || CT.C15:
      case C[13] || CT.C13:
        {
          return basic_types.Axis.horizontal;
        }
    }
  };
  basic_types.textDirectionToAxisDirection = function textDirectionToAxisDirection(textDirection) {
    if (!(textDirection !== null)) dart.assertFailed(null, I[1], 223, 10, "textDirection != null");
    switch (textDirection) {
      case C[16] || CT.C16:
        {
          return basic_types.AxisDirection.left;
        }
      case C[17] || CT.C17:
        {
          return basic_types.AxisDirection.right;
        }
    }
  };
  basic_types.flipAxisDirection = function flipAxisDirection(axisDirection) {
    if (!(axisDirection !== null)) dart.assertFailed(null, I[1], 242, 10, "axisDirection != null");
    switch (axisDirection) {
      case C[12] || CT.C12:
        {
          return basic_types.AxisDirection.down;
        }
      case C[13] || CT.C13:
        {
          return basic_types.AxisDirection.left;
        }
      case C[14] || CT.C14:
        {
          return basic_types.AxisDirection.up;
        }
      case C[15] || CT.C15:
        {
          return basic_types.AxisDirection.right;
        }
    }
  };
  basic_types.axisDirectionIsReversed = function axisDirectionIsReversed(axisDirection) {
    if (!(axisDirection !== null)) dart.assertFailed(null, I[1], 261, 10, "axisDirection != null");
    switch (axisDirection) {
      case C[12] || CT.C12:
      case C[15] || CT.C15:
        {
          return true;
        }
      case C[14] || CT.C14:
      case C[13] || CT.C13:
        {
          return false;
        }
    }
  };
  dart.trackLibraries("packages/flutter/src/painting/basic_types.dart", {
    "package:flutter/src/painting/basic_types.dart": basic_types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["basic_types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsGA;;;;;;;;;;;;MA5BK,mCAAM;;;MAGT,sCAAS;;;MAMT,qCAAQ;;;MAQR,kCAAK;;;MAUL,mCAAM;;;;;;;IA0BR;;;;;;;;;;;;MAXK,uBAAM;;;MAOT,2BAAU;;;MAGV,yBAAQ;;;;;;;IA0CV;;;;;;;;;;;;MAVK,oCAAM;;;MAIT,gCAAE;;;MAKF,kCAAI;;;;;;;IA+BN;;;;;;;;;;;;MA3BK,gCAAM;;;MAKT,4BAAE;;;MAOF,+BAAK;;;MAOL,8BAAI;;;MAOJ,8BAAI;;;;2CA5Da;AACjB,UAAO,AAAU,SAAD;AAChB,YAAQ,SAAS;;;AAEb,gBAAY;;;;AAEZ,gBAAY;;;EAElB;iEA4DuC;AACrC,UAAO,AAAc,aAAD;AACpB,YAAQ,aAAa;;;;AAGjB,gBAAY;;;;;AAGZ,gBAAY;;;EAElB;mFAMyD;AACvD,UAAO,AAAc,aAAD;AACpB,YAAQ,aAAa;;;AAEjB,gBAAqB;;;;AAErB,gBAAqB;;;EAE3B;6DAW8C;AAC5C,UAAO,AAAc,aAAD;AACpB,YAAQ,aAAa;;;AAEjB,gBAAqB;;;;AAErB,gBAAqB;;;;AAErB,gBAAqB;;;;AAErB,gBAAqB;;;EAE3B;yEAO2C;AACzC,UAAO,AAAc,aAAD;AACpB,YAAQ,aAAa;;;;AAGjB,gBAAO;;;;;AAGP,gBAAO;;;EAEb","file":"../../../../../../../../../../packages/flutter/src/painting/basic_types.dart.lib.js"}');
  // Exports:
  return {
    src__painting__basic_types: basic_types
  };
}));

//# sourceMappingURL=basic_types.dart.lib.js.map