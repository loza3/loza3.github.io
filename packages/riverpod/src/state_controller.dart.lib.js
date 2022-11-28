define(['dart_sdk', 'packages/state_notifier/state_notifier.dart'], (function load__packages__riverpod__src__state_controller_dart(dart_sdk, packages__state_notifier__state_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const state_notifier = packages__state_notifier__state_notifier$46dart.state_notifier;
  var state_controller = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:riverpod/src/state_controller.dart"];
  const _is_StateController_default = Symbol('_is_StateController_default');
  state_controller.StateController$ = dart.generic(T => {
    var __t$TToT = () => (__t$TToT = dart.constFn(dart.fnType(T, [T])))();
    class StateController extends state_notifier.StateNotifier$(T) {
      static ['_#new#tearOff'](T, state) {
        return new (state_controller.StateController$(T)).new(state);
      }
      get state() {
        return super.state;
      }
      set state(value) {
        T.as(value);
        return super.state = value;
      }
      update(cb) {
        __t$TToT().as(cb);
        return this.state = cb(this.state);
      }
    }
    (StateController.new = function(state) {
      StateController.__proto__.new.call(this, state);
      ;
    }).prototype = StateController.prototype;
    dart.addTypeTests(StateController);
    StateController.prototype[_is_StateController_default] = true;
    dart.addTypeCaches(StateController);
    dart.setMethodSignature(StateController, () => ({
      __proto__: dart.getMethods(StateController.__proto__),
      update: dart.fnType(T, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(StateController, I[0]);
    return StateController;
  });
  state_controller.StateController = state_controller.StateController$();
  dart.addTypeTests(state_controller.StateController, _is_StateController_default);
  dart.trackLibraries("packages/riverpod/src/state_controller.dart", {
    "package:riverpod/src/state_controller.dart": state_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["state_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAWiB,cAAM;MAAK;gBAGd;;AAAU,cAAM,eAAQ,KAAK;;aAiBZ;;AAAO,4BAAQ,AAAE,EAAA,CAAC;MAAM;;oCAxB/B;AAAtB,+CAAsB,KAAK;;IAAC","file":"../../../../../../../../../../../packages/riverpod/src/state_controller.dart.lib.js"}');
  // Exports:
  return {
    src__state_controller: state_controller
  };
}));

//# sourceMappingURL=state_controller.dart.lib.js.map
