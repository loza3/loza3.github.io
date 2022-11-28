define(['dart_sdk', 'packages/flare_flutter/flare_controller.dart', 'packages/flare_flutter/flare.dart', 'packages/flare_flutter/base/math/vec2d.dart', 'packages/flare_flutter/base/animation/keyframe.dart'], (function load__packages__cool_alert__src__utils__single_loop_controller_dart(dart_sdk, packages__flare_flutter__flare_controller$46dart, packages__flare_flutter__flare$46dart, packages__flare_flutter__base__math__vec2d$46dart, packages__flare_flutter__base__animation__keyframe$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flare_controller = packages__flare_flutter__flare_controller$46dart.flare_controller;
  const flare = packages__flare_flutter__flare$46dart.flare;
  const mat2d = packages__flare_flutter__base__math__vec2d$46dart.base__math__mat2d;
  const actor_animation = packages__flare_flutter__base__animation__keyframe$46dart.base__animation__actor_animation;
  var single_loop_controller = Object.create(dart.library);
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:cool_alert/src/utils/single_loop_controller.dart"];
  var _actor = dart.privateName(single_loop_controller, "_actor");
  var _duration = dart.privateName(single_loop_controller, "_duration");
  var _loopCount = dart.privateName(single_loop_controller, "_loopCount");
  var _animation$ = dart.privateName(single_loop_controller, "_animation");
  var _loopAmount$ = dart.privateName(single_loop_controller, "_loopAmount");
  var _mix$ = dart.privateName(single_loop_controller, "_mix");
  single_loop_controller.SingleLoopController = class SingleLoopController extends flare_controller.FlareController {
    static ['_#new#tearOff'](_animation, _loopAmount, _mix = 0.7) {
      return new single_loop_controller.SingleLoopController.new(_animation, _loopAmount, _mix);
    }
    initialize(artBoard) {
      this[_actor] = artBoard.getAnimation(this[_animation$]);
    }
    advance(artBoard, elapsed) {
      if (this[_loopCount] >= this[_loopAmount$]) {
        dart.nullCheck(this[_actor]).apply(dart.nullCheck(this[_actor]).duration, artBoard, 1.0);
        return false;
      }
      this[_duration] = this[_duration] + elapsed;
      if (this[_duration] >= dart.nullCheck(this[_actor]).duration) {
        this[_loopCount] = this[_loopCount] + 1;
        this[_duration] = this[_duration][$modulo](dart.nullCheck(this[_actor]).duration);
      }
      dart.nullCheck(this[_actor]).apply(this[_duration], artBoard, this[_mix$]);
      return true;
    }
    setViewTransform(viewTransform) {
    }
  };
  (single_loop_controller.SingleLoopController.new = function(_animation, _loopAmount, _mix = 0.7) {
    this[_actor] = null;
    this[_duration] = 0.0;
    this[_loopCount] = 0.0;
    this[_animation$] = _animation;
    this[_loopAmount$] = _loopAmount;
    this[_mix$] = _mix;
    single_loop_controller.SingleLoopController.__proto__.new.call(this);
    ;
  }).prototype = single_loop_controller.SingleLoopController.prototype;
  dart.addTypeTests(single_loop_controller.SingleLoopController);
  dart.addTypeCaches(single_loop_controller.SingleLoopController);
  dart.setMethodSignature(single_loop_controller.SingleLoopController, () => ({
    __proto__: dart.getMethods(single_loop_controller.SingleLoopController.__proto__),
    initialize: dart.fnType(dart.void, [flare.FlutterActorArtboard]),
    advance: dart.fnType(core.bool, [flare.FlutterActorArtboard, core.double]),
    setViewTransform: dart.fnType(dart.void, [mat2d.Mat2D])
  }));
  dart.setLibraryUri(single_loop_controller.SingleLoopController, I[0]);
  dart.setFieldSignature(single_loop_controller.SingleLoopController, () => ({
    __proto__: dart.getFields(single_loop_controller.SingleLoopController.__proto__),
    [_animation$]: dart.finalFieldType(core.String),
    [_loopAmount$]: dart.finalFieldType(core.double),
    [_mix$]: dart.finalFieldType(core.double),
    [_actor]: dart.fieldType(dart.nullable(actor_animation.ActorAnimation)),
    [_duration]: dart.fieldType(core.double),
    [_loopCount]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/cool_alert/src/utils/single_loop_controller.dart", {
    "package:cool_alert/src/utils/single_loop_controller.dart": single_loop_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["single_loop_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;eAeuC;AACO,MAA1C,eAAS,AAAS,QAAD,cAAc;IACjC;YAGkC,UAAiB;AACjD,UAAI,AAAW,oBAAG;AAE4B,QAAtC,AAAE,eAAR,oBAAoB,AAAE,eAAR,wBAAkB,QAAQ,EAAE;AAC1C,cAAO;;AAEW,MAApB,kBAAA,AAAU,kBAAG,OAAO;AAEpB,UAAI,AAAU,mBAAS,AAAE,eAAR;AAEH,QAAZ,mBAAA,AAAU,mBAAA;AACmB,QAA7B,kBAAA,AAAU,yBAAS,AAAE,eAAR;;AAEyB,MAAlC,AAAE,eAAR,oBAAc,iBAAW,QAAQ,EAAE;AACnC,YAAO;IACT;qBAG4B;IAAgB;;8DA1BlB,YAAiB,aAAmB;IAJ9C;IACT,kBAAY;IACZ,mBAAa;IAEM;IAAiB;IAAmB;AAA9D;;EAA0E","file":"../../../../../../../../../../../../packages/cool_alert/src/utils/single_loop_controller.dart.lib.js"}');
  // Exports:
  return {
    src__utils__single_loop_controller: single_loop_controller
  };
}));

//# sourceMappingURL=single_loop_controller.dart.lib.js.map
