define(['dart_sdk'], (function load__packages__my_ticket_care__models__model_state_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var model_state = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: model_state.ModelState.prototype,
        [_Enum__name]: "active",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: model_state.ModelState.prototype,
        [_Enum__name]: "inactive",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], model_state.ModelState);
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:my_ticket_care/models/model_state.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  model_state.ModelState = class ModelState extends core._Enum {
    toString() {
      return "ModelState." + this[_name];
    }
  };
  (model_state.ModelState.new = function(index, name) {
    model_state.ModelState.__proto__.new.call(this, index, name);
    ;
  }).prototype = model_state.ModelState.prototype;
  dart.addTypeTests(model_state.ModelState);
  dart.addTypeCaches(model_state.ModelState);
  dart.setLibraryUri(model_state.ModelState, I[0]);
  dart.setStaticFieldSignature(model_state.ModelState, () => ['values', 'active', 'inactive']);
  dart.defineExtensionMethods(model_state.ModelState, ['toString']);
  dart.defineLazy(model_state.ModelState, {
    /*model_state.ModelState.values*/get values() {
      return C[0] || CT.C0;
    },
    /*model_state.ModelState.active*/get active() {
      return C[1] || CT.C1;
    },
    /*model_state.ModelState.inactive*/get inactive() {
      return C[2] || CT.C2;
    }
  }, false);
  dart.trackLibraries("packages/my_ticket_care/models/model_state.dart", {
    "package:my_ticket_care/models/model_state.dart": model_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["model_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAAmC;;;;;;;;;;;;MAA9B,6BAAM;;;MAAO,6BAAM;;;MAAE,+BAAQ","file":"../../../../../../../../../packages/my_ticket_care/models/model_state.dart.lib.js"}');
  // Exports:
  return {
    models__model_state: model_state
  };
}));

//# sourceMappingURL=model_state.dart.lib.js.map
