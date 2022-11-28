define(['dart_sdk', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/animation/curves.dart'], (function load__packages__flutter__src__widgets__dismissible_dart(dart_sdk, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__animation__curves$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const transitions = packages__flutter__src__widgets__title$46dart.src__widgets__transitions;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const automatic_keep_alive = packages__flutter__src__widgets__title$46dart.src__widgets__automatic_keep_alive;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  var dismissible = Object.create(dart.library);
  var $sign = dartx.sign;
  var $abs = dartx.abs;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    TweenOfOffset: () => (T.TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))(),
    AnimationStatusTovoid: () => (T.AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation.AnimationStatus])))(),
    TweenOfdouble: () => (T.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "endToStart",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "startToEnd",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 4
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 6
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7], dismissible.DismissDirection);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C9() {
      return C[9] = dart.constMap(dismissible.DismissDirection, core.double, []);
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_Enum__name]: "opaque",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Dismissible",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: dismissible._FlingGestureKind.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: dismissible._FlingGestureKind.prototype,
        [_Enum__name]: "forward",
        [_Enum_index]: 1
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: dismissible._FlingGestureKind.prototype,
        [_Enum__name]: "reverse",
        [_Enum_index]: 2
      });
    },
    get C16() {
      return C[16] = dart.constList([C[17] || CT.C17, C[18] || CT.C18, C[19] || CT.C19], dismissible._FlingGestureKind);
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 16,
        [_Location_line]: 661,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizeTransition",
        [_Location_column]: 14,
        [_Location_line]: 658,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SlideTransition",
        [_Location_column]: 22,
        [_Location_line]: 669,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ClipRect",
        [_Location_column]: 20,
        [_Location_line]: 678,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 22,
        [_Location_line]: 677,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 17,
        [_Location_line]: 675,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 12,
        [_Location_line]: 697,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[30] || CT.C30,
        [Interval_end]: 1,
        [Interval_begin]: 0.4
      });
    }
  }, false);
  var C = Array(31).fill(void 0);
  var I = [
    "package:flutter/src/widgets/dismissible.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/dismissible.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  dismissible.DismissDirection = class DismissDirection extends core._Enum {
    toString() {
      return "DismissDirection." + this[_name];
    }
  };
  (dismissible.DismissDirection.new = function(index, name) {
    dismissible.DismissDirection.__proto__.new.call(this, index, name);
    ;
  }).prototype = dismissible.DismissDirection.prototype;
  dart.addTypeTests(dismissible.DismissDirection);
  dart.addTypeCaches(dismissible.DismissDirection);
  dart.setLibraryUri(dismissible.DismissDirection, I[0]);
  dart.setStaticFieldSignature(dismissible.DismissDirection, () => ['values', 'vertical', 'horizontal', 'endToStart', 'startToEnd', 'up', 'down', 'none']);
  dart.defineExtensionMethods(dismissible.DismissDirection, ['toString']);
  dart.defineLazy(dismissible.DismissDirection, {
    /*dismissible.DismissDirection.values*/get values() {
      return C[0] || CT.C0;
    },
    /*dismissible.DismissDirection.vertical*/get vertical() {
      return C[1] || CT.C1;
    },
    /*dismissible.DismissDirection.horizontal*/get horizontal() {
      return C[2] || CT.C2;
    },
    /*dismissible.DismissDirection.endToStart*/get endToStart() {
      return C[3] || CT.C3;
    },
    /*dismissible.DismissDirection.startToEnd*/get startToEnd() {
      return C[4] || CT.C4;
    },
    /*dismissible.DismissDirection.up*/get up() {
      return C[5] || CT.C5;
    },
    /*dismissible.DismissDirection.down*/get down() {
      return C[6] || CT.C6;
    },
    /*dismissible.DismissDirection.none*/get none() {
      return C[7] || CT.C7;
    }
  }, false);
  var child$ = dart.privateName(dismissible, "Dismissible.child");
  var background$ = dart.privateName(dismissible, "Dismissible.background");
  var secondaryBackground$ = dart.privateName(dismissible, "Dismissible.secondaryBackground");
  var confirmDismiss$ = dart.privateName(dismissible, "Dismissible.confirmDismiss");
  var onResize$ = dart.privateName(dismissible, "Dismissible.onResize");
  var onDismissed$ = dart.privateName(dismissible, "Dismissible.onDismissed");
  var direction$ = dart.privateName(dismissible, "Dismissible.direction");
  var resizeDuration$ = dart.privateName(dismissible, "Dismissible.resizeDuration");
  var dismissThresholds$ = dart.privateName(dismissible, "Dismissible.dismissThresholds");
  var movementDuration$ = dart.privateName(dismissible, "Dismissible.movementDuration");
  var crossAxisEndOffset$ = dart.privateName(dismissible, "Dismissible.crossAxisEndOffset");
  var dragStartBehavior$ = dart.privateName(dismissible, "Dismissible.dragStartBehavior");
  var behavior$ = dart.privateName(dismissible, "Dismissible.behavior");
  var onUpdate$ = dart.privateName(dismissible, "Dismissible.onUpdate");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  dismissible.Dismissible = class Dismissible extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get secondaryBackground() {
      return this[secondaryBackground$];
    }
    set secondaryBackground(value) {
      super.secondaryBackground = value;
    }
    get confirmDismiss() {
      return this[confirmDismiss$];
    }
    set confirmDismiss(value) {
      super.confirmDismiss = value;
    }
    get onResize() {
      return this[onResize$];
    }
    set onResize(value) {
      super.onResize = value;
    }
    get onDismissed() {
      return this[onDismissed$];
    }
    set onDismissed(value) {
      super.onDismissed = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    get resizeDuration() {
      return this[resizeDuration$];
    }
    set resizeDuration(value) {
      super.resizeDuration = value;
    }
    get dismissThresholds() {
      return this[dismissThresholds$];
    }
    set dismissThresholds(value) {
      super.dismissThresholds = value;
    }
    get movementDuration() {
      return this[movementDuration$];
    }
    set movementDuration(value) {
      super.movementDuration = value;
    }
    get crossAxisEndOffset() {
      return this[crossAxisEndOffset$];
    }
    set crossAxisEndOffset(value) {
      super.crossAxisEndOffset = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get behavior() {
      return this[behavior$];
    }
    set behavior(value) {
      super.behavior = value;
    }
    get onUpdate() {
      return this[onUpdate$];
    }
    set onUpdate(value) {
      super.onUpdate = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let secondaryBackground = opts && 'secondaryBackground' in opts ? opts.secondaryBackground : null;
      let confirmDismiss = opts && 'confirmDismiss' in opts ? opts.confirmDismiss : null;
      let onResize = opts && 'onResize' in opts ? opts.onResize : null;
      let onUpdate = opts && 'onUpdate' in opts ? opts.onUpdate : null;
      let onDismissed = opts && 'onDismissed' in opts ? opts.onDismissed : null;
      let direction = opts && 'direction' in opts ? opts.direction : C[2] || CT.C2;
      let resizeDuration = opts && 'resizeDuration' in opts ? opts.resizeDuration : C[8] || CT.C8;
      let dismissThresholds = opts && 'dismissThresholds' in opts ? opts.dismissThresholds : C[9] || CT.C9;
      let movementDuration = opts && 'movementDuration' in opts ? opts.movementDuration : C[10] || CT.C10;
      let crossAxisEndOffset = opts && 'crossAxisEndOffset' in opts ? opts.crossAxisEndOffset : 0;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[11] || CT.C11;
      let behavior = opts && 'behavior' in opts ? opts.behavior : C[12] || CT.C12;
      return new dismissible.Dismissible.new({key: key, child: child, background: background, secondaryBackground: secondaryBackground, confirmDismiss: confirmDismiss, onResize: onResize, onUpdate: onUpdate, onDismissed: onDismissed, direction: direction, resizeDuration: resizeDuration, dismissThresholds: dismissThresholds, movementDuration: movementDuration, crossAxisEndOffset: crossAxisEndOffset, dragStartBehavior: dragStartBehavior, behavior: behavior, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    createState() {
      return new dismissible._DismissibleState.new();
    }
  };
  (dismissible.Dismissible.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let secondaryBackground = opts && 'secondaryBackground' in opts ? opts.secondaryBackground : null;
    let confirmDismiss = opts && 'confirmDismiss' in opts ? opts.confirmDismiss : null;
    let onResize = opts && 'onResize' in opts ? opts.onResize : null;
    let onUpdate = opts && 'onUpdate' in opts ? opts.onUpdate : null;
    let onDismissed = opts && 'onDismissed' in opts ? opts.onDismissed : null;
    let direction = opts && 'direction' in opts ? opts.direction : C[2] || CT.C2;
    let resizeDuration = opts && 'resizeDuration' in opts ? opts.resizeDuration : C[8] || CT.C8;
    let dismissThresholds = opts && 'dismissThresholds' in opts ? opts.dismissThresholds : C[9] || CT.C9;
    let movementDuration = opts && 'movementDuration' in opts ? opts.movementDuration : C[10] || CT.C10;
    let crossAxisEndOffset = opts && 'crossAxisEndOffset' in opts ? opts.crossAxisEndOffset : 0;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[11] || CT.C11;
    let behavior = opts && 'behavior' in opts ? opts.behavior : C[12] || CT.C12;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[background$] = background;
    this[secondaryBackground$] = secondaryBackground;
    this[confirmDismiss$] = confirmDismiss;
    this[onResize$] = onResize;
    this[onUpdate$] = onUpdate;
    this[onDismissed$] = onDismissed;
    this[direction$] = direction;
    this[resizeDuration$] = resizeDuration;
    this[dismissThresholds$] = dismissThresholds;
    this[movementDuration$] = movementDuration;
    this[crossAxisEndOffset$] = crossAxisEndOffset;
    this[dragStartBehavior$] = dragStartBehavior;
    this[behavior$] = behavior;
    if (!(key !== null)) dart.assertFailed(null, I[1], 115, 15, "key != null");
    if (!(secondaryBackground == null || background != null)) dart.assertFailed(null, I[1], 116, 15, "secondaryBackground == null || background != null");
    if (!(dragStartBehavior !== null)) dart.assertFailed(null, I[1], 117, 15, "dragStartBehavior != null");
    dismissible.Dismissible.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dismissible.Dismissible.prototype;
  dart.addTypeTests(dismissible.Dismissible);
  dart.addTypeCaches(dismissible.Dismissible);
  dart.setMethodSignature(dismissible.Dismissible, () => ({
    __proto__: dart.getMethods(dismissible.Dismissible.__proto__),
    createState: dart.fnType(framework.State$(dismissible.Dismissible), [])
  }));
  dart.setLibraryUri(dismissible.Dismissible, I[0]);
  dart.setFieldSignature(dismissible.Dismissible, () => ({
    __proto__: dart.getFields(dismissible.Dismissible.__proto__),
    child: dart.finalFieldType(framework.Widget),
    background: dart.finalFieldType(dart.nullable(framework.Widget)),
    secondaryBackground: dart.finalFieldType(dart.nullable(framework.Widget)),
    confirmDismiss: dart.finalFieldType(dart.nullable(dart.fnType(async.Future$(dart.nullable(core.bool)), [dismissible.DismissDirection]))),
    onResize: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onDismissed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dismissible.DismissDirection]))),
    direction: dart.finalFieldType(dismissible.DismissDirection),
    resizeDuration: dart.finalFieldType(dart.nullable(core.Duration)),
    dismissThresholds: dart.finalFieldType(core.Map$(dismissible.DismissDirection, core.double)),
    movementDuration: dart.finalFieldType(core.Duration),
    crossAxisEndOffset: dart.finalFieldType(core.double),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    behavior: dart.finalFieldType(proxy_box.HitTestBehavior),
    onUpdate: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dismissible.DismissUpdateDetails])))
  }));
  var direction$0 = dart.privateName(dismissible, "DismissUpdateDetails.direction");
  var reached$ = dart.privateName(dismissible, "DismissUpdateDetails.reached");
  var previousReached$ = dart.privateName(dismissible, "DismissUpdateDetails.previousReached");
  var progress$ = dart.privateName(dismissible, "DismissUpdateDetails.progress");
  dismissible.DismissUpdateDetails = class DismissUpdateDetails extends core.Object {
    get direction() {
      return this[direction$0];
    }
    set direction(value) {
      super.direction = value;
    }
    get reached() {
      return this[reached$];
    }
    set reached(value) {
      super.reached = value;
    }
    get previousReached() {
      return this[previousReached$];
    }
    set previousReached(value) {
      super.previousReached = value;
    }
    get progress() {
      return this[progress$];
    }
    set progress(value) {
      super.progress = value;
    }
    static ['_#new#tearOff'](opts) {
      let direction = opts && 'direction' in opts ? opts.direction : C[2] || CT.C2;
      let reached = opts && 'reached' in opts ? opts.reached : false;
      let previousReached = opts && 'previousReached' in opts ? opts.previousReached : false;
      let progress = opts && 'progress' in opts ? opts.progress : 0;
      return new dismissible.DismissUpdateDetails.new({direction: direction, reached: reached, previousReached: previousReached, progress: progress});
    }
  };
  (dismissible.DismissUpdateDetails.new = function(opts) {
    let direction = opts && 'direction' in opts ? opts.direction : C[2] || CT.C2;
    let reached = opts && 'reached' in opts ? opts.reached : false;
    let previousReached = opts && 'previousReached' in opts ? opts.previousReached : false;
    let progress = opts && 'progress' in opts ? opts.progress : 0;
    this[direction$0] = direction;
    this[reached$] = reached;
    this[previousReached$] = previousReached;
    this[progress$] = progress;
    ;
  }).prototype = dismissible.DismissUpdateDetails.prototype;
  dart.addTypeTests(dismissible.DismissUpdateDetails);
  dart.addTypeCaches(dismissible.DismissUpdateDetails);
  dart.setLibraryUri(dismissible.DismissUpdateDetails, I[0]);
  dart.setFieldSignature(dismissible.DismissUpdateDetails, () => ({
    __proto__: dart.getFields(dismissible.DismissUpdateDetails.__proto__),
    direction: dart.finalFieldType(dismissible.DismissDirection),
    reached: dart.finalFieldType(core.bool),
    previousReached: dart.finalFieldType(core.bool),
    progress: dart.finalFieldType(core.double)
  }));
  dismissible._DismissibleClipper = class _DismissibleClipper extends proxy_box.CustomClipper$(ui.Rect) {
    static ['_#new#tearOff'](opts) {
      let axis = opts && 'axis' in opts ? opts.axis : null;
      let moveAnimation = opts && 'moveAnimation' in opts ? opts.moveAnimation : null;
      return new dismissible._DismissibleClipper.new({axis: axis, moveAnimation: moveAnimation});
    }
    getClip(size) {
      if (!(this.axis !== null)) dart.assertFailed(null, I[1], 275, 12, "axis != null");
      switch (this.axis) {
        case C[14] || CT.C14:
          {
            let offset = this.moveAnimation.value.dx * size.width;
            if (offset < 0) {
              return new ui.Rect.fromLTRB(size.width + offset, 0.0, size.width, size.height);
            }
            return new ui.Rect.fromLTRB(0.0, 0.0, offset, size.height);
          }
        case C[15] || CT.C15:
          {
            let offset = this.moveAnimation.value.dy * size.height;
            if (offset < 0) {
              return new ui.Rect.fromLTRB(0.0, size.height + offset, size.width, size.height);
            }
            return new ui.Rect.fromLTRB(0.0, 0.0, size.width, offset);
          }
      }
    }
    getApproximateClipRect(size) {
      return this.getClip(size);
    }
    shouldReclip(oldClipper) {
      dismissible._DismissibleClipper.as(oldClipper);
      return oldClipper.axis !== this.axis || !oldClipper.moveAnimation.value._equals(this.moveAnimation.value);
    }
  };
  (dismissible._DismissibleClipper.new = function(opts) {
    let axis = opts && 'axis' in opts ? opts.axis : null;
    let moveAnimation = opts && 'moveAnimation' in opts ? opts.moveAnimation : null;
    this.axis = axis;
    this.moveAnimation = moveAnimation;
    if (!(axis !== null)) dart.assertFailed(null, I[1], 266, 15, "axis != null");
    if (!(moveAnimation !== null)) dart.assertFailed(null, I[1], 267, 15, "moveAnimation != null");
    dismissible._DismissibleClipper.__proto__.new.call(this, {reclip: moveAnimation});
    ;
  }).prototype = dismissible._DismissibleClipper.prototype;
  dart.addTypeTests(dismissible._DismissibleClipper);
  dart.addTypeCaches(dismissible._DismissibleClipper);
  dart.setMethodSignature(dismissible._DismissibleClipper, () => ({
    __proto__: dart.getMethods(dismissible._DismissibleClipper.__proto__),
    getClip: dart.fnType(ui.Rect, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(dismissible._DismissibleClipper, I[0]);
  dart.setFieldSignature(dismissible._DismissibleClipper, () => ({
    __proto__: dart.getFields(dismissible._DismissibleClipper.__proto__),
    axis: dart.finalFieldType(basic_types.Axis),
    moveAnimation: dart.finalFieldType(animation.Animation$(ui.Offset))
  }));
  dismissible._FlingGestureKind = class _FlingGestureKind extends core._Enum {
    toString() {
      return "_FlingGestureKind." + this[_name];
    }
  };
  (dismissible._FlingGestureKind.new = function(index, name) {
    dismissible._FlingGestureKind.__proto__.new.call(this, index, name);
    ;
  }).prototype = dismissible._FlingGestureKind.prototype;
  dart.addTypeTests(dismissible._FlingGestureKind);
  dart.addTypeCaches(dismissible._FlingGestureKind);
  dart.setLibraryUri(dismissible._FlingGestureKind, I[0]);
  dart.setStaticFieldSignature(dismissible._FlingGestureKind, () => ['values', 'none', 'forward', 'reverse']);
  dart.defineExtensionMethods(dismissible._FlingGestureKind, ['toString']);
  dart.defineLazy(dismissible._FlingGestureKind, {
    /*dismissible._FlingGestureKind.values*/get values() {
      return C[16] || CT.C16;
    },
    /*dismissible._FlingGestureKind.none*/get none() {
      return C[17] || CT.C17;
    },
    /*dismissible._FlingGestureKind.forward*/get forward() {
      return C[18] || CT.C18;
    },
    /*dismissible._FlingGestureKind.reverse*/get reverse() {
      return C[19] || CT.C19;
    }
  }, false);
  var _moveController = dart.privateName(dismissible, "_moveController");
  var ___DismissibleState__moveAnimation = dart.privateName(dismissible, "_#_DismissibleState#_moveAnimation");
  var _resizeController = dart.privateName(dismissible, "_resizeController");
  var _resizeAnimation = dart.privateName(dismissible, "_resizeAnimation");
  var _dragExtent = dart.privateName(dismissible, "_dragExtent");
  var _confirming = dart.privateName(dismissible, "_confirming");
  var _dragUnderway = dart.privateName(dismissible, "_dragUnderway");
  var _sizePriorToCollapse = dart.privateName(dismissible, "_sizePriorToCollapse");
  var _dismissThresholdReached = dart.privateName(dismissible, "_dismissThresholdReached");
  var _handleDismissStatusChanged = dart.privateName(dismissible, "_handleDismissStatusChanged");
  var _handleDismissUpdateValueChanged = dart.privateName(dismissible, "_handleDismissUpdateValueChanged");
  var _updateMoveAnimation = dart.privateName(dismissible, "_updateMoveAnimation");
  var _moveAnimation = dart.privateName(dismissible, "_moveAnimation");
  var _directionIsXAxis = dart.privateName(dismissible, "_directionIsXAxis");
  var _extentToDirection = dart.privateName(dismissible, "_extentToDirection");
  var _dismissDirection = dart.privateName(dismissible, "_dismissDirection");
  var _isActive = dart.privateName(dismissible, "_isActive");
  var _overallDragAxisExtent = dart.privateName(dismissible, "_overallDragAxisExtent");
  var _handleDragStart = dart.privateName(dismissible, "_handleDragStart");
  var _handleDragUpdate = dart.privateName(dismissible, "_handleDragUpdate");
  var _describeFlingGesture = dart.privateName(dismissible, "_describeFlingGesture");
  var _handleMoveCompleted = dart.privateName(dismissible, "_handleMoveCompleted");
  var _handleDragEnd = dart.privateName(dismissible, "_handleDragEnd");
  var _confirmStartResizeAnimation = dart.privateName(dismissible, "_confirmStartResizeAnimation");
  var _startResizeAnimation = dart.privateName(dismissible, "_startResizeAnimation");
  var _handleResizeProgressChanged = dart.privateName(dismissible, "_handleResizeProgressChanged");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(dismissible.Dismissible) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(dismissible.Dismissible)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(dismissible.Dismissible));
  const State_AutomaticKeepAliveClientMixin$36 = class State_AutomaticKeepAliveClientMixin extends State_TickerProviderStateMixin$36 {};
  (State_AutomaticKeepAliveClientMixin$36.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(dismissible.Dismissible)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36, automatic_keep_alive.AutomaticKeepAliveClientMixin$(dismissible.Dismissible));
  dismissible._DismissibleState = class _DismissibleState extends State_AutomaticKeepAliveClientMixin$36 {
    initState() {
      let t4;
      super.initState();
      this[_moveController] = (t4 = new animation_controller.AnimationController.new({duration: this.widget.movementDuration, vsync: this}), (() => {
        t4.addStatusListener(dart.bind(this, _handleDismissStatusChanged));
        t4.addListener(dart.bind(this, _handleDismissUpdateValueChanged));
        return t4;
      })());
      this[_updateMoveAnimation]();
    }
    get [_moveAnimation]() {
      let t4;
      t4 = this[___DismissibleState__moveAnimation];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_moveAnimation")) : t4;
    }
    set [_moveAnimation](library$32package$58flutter$47src$47widgets$47dismissible$46dart$58$58_moveAnimation$35param) {
      this[___DismissibleState__moveAnimation] = library$32package$58flutter$47src$47widgets$47dismissible$46dart$58$58_moveAnimation$35param;
    }
    get wantKeepAlive() {
      let t4, t4$, t4$0, t4$1;
      return dart.test((t4$ = (t4 = this[_moveController], t4 == null ? null : t4.isAnimating), t4$ == null ? false : t4$)) || dart.test((t4$1 = (t4$0 = this[_resizeController], t4$0 == null ? null : t4$0.isAnimating), t4$1 == null ? false : t4$1));
    }
    dispose() {
      let t4;
      dart.nullCheck(this[_moveController]).dispose();
      t4 = this[_resizeController];
      t4 == null ? null : t4.dispose();
      super.dispose();
    }
    get [_directionIsXAxis]() {
      return this.widget.direction === dismissible.DismissDirection.horizontal || this.widget.direction === dismissible.DismissDirection.endToStart || this.widget.direction === dismissible.DismissDirection.startToEnd;
    }
    [_extentToDirection](extent) {
      if (extent === 0.0) {
        return dismissible.DismissDirection.none;
      }
      if (this[_directionIsXAxis]) {
        switch (basic.Directionality.of(this.context)) {
          case C[20] || CT.C20:
            {
              return extent < 0 ? dismissible.DismissDirection.startToEnd : dismissible.DismissDirection.endToStart;
            }
          case C[21] || CT.C21:
            {
              return extent > 0 ? dismissible.DismissDirection.startToEnd : dismissible.DismissDirection.endToStart;
            }
        }
      }
      return extent > 0 ? dismissible.DismissDirection.down : dismissible.DismissDirection.up;
    }
    get [_dismissDirection]() {
      return this[_extentToDirection](this[_dragExtent]);
    }
    get [_isActive]() {
      return this[_dragUnderway] || dart.nullCheck(this[_moveController]).isAnimating;
    }
    get [_overallDragAxisExtent]() {
      let size = dart.nullCheck(this.context.size);
      return this[_directionIsXAxis] ? size.width : size.height;
    }
    [_handleDragStart](details) {
      if (this[_confirming]) {
        return;
      }
      this[_dragUnderway] = true;
      if (dart.nullCheck(this[_moveController]).isAnimating) {
        this[_dragExtent] = dart.nullCheck(this[_moveController]).value * this[_overallDragAxisExtent] * this[_dragExtent][$sign];
        dart.nullCheck(this[_moveController]).stop();
      } else {
        this[_dragExtent] = 0.0;
        dart.nullCheck(this[_moveController]).value = 0.0;
      }
      this.setState(dart.fn(() => {
        this[_updateMoveAnimation]();
      }, T.VoidTovoid()));
    }
    [_handleDragUpdate](details) {
      if (!this[_isActive] || dart.nullCheck(this[_moveController]).isAnimating) {
        return;
      }
      let delta = dart.nullCheck(details.primaryDelta);
      let oldDragExtent = this[_dragExtent];
      switch (this.widget.direction) {
        case C[2] || CT.C2:
        case C[1] || CT.C1:
          {
            this[_dragExtent] = this[_dragExtent] + delta;
            break;
          }
        case C[5] || CT.C5:
          {
            if (this[_dragExtent] + delta < 0) {
              this[_dragExtent] = this[_dragExtent] + delta;
            }
            break;
          }
        case C[6] || CT.C6:
          {
            if (this[_dragExtent] + delta > 0) {
              this[_dragExtent] = this[_dragExtent] + delta;
            }
            break;
          }
        case C[3] || CT.C3:
          {
            switch (basic.Directionality.of(this.context)) {
              case C[20] || CT.C20:
                {
                  if (this[_dragExtent] + delta > 0) {
                    this[_dragExtent] = this[_dragExtent] + delta;
                  }
                  break;
                }
              case C[21] || CT.C21:
                {
                  if (this[_dragExtent] + delta < 0) {
                    this[_dragExtent] = this[_dragExtent] + delta;
                  }
                  break;
                }
            }
            break;
          }
        case C[4] || CT.C4:
          {
            switch (basic.Directionality.of(this.context)) {
              case C[20] || CT.C20:
                {
                  if (this[_dragExtent] + delta < 0) {
                    this[_dragExtent] = this[_dragExtent] + delta;
                  }
                  break;
                }
              case C[21] || CT.C21:
                {
                  if (this[_dragExtent] + delta > 0) {
                    this[_dragExtent] = this[_dragExtent] + delta;
                  }
                  break;
                }
            }
            break;
          }
        case C[7] || CT.C7:
          {
            this[_dragExtent] = 0.0;
            break;
          }
      }
      if (oldDragExtent[$sign] !== this[_dragExtent][$sign]) {
        this.setState(dart.fn(() => {
          this[_updateMoveAnimation]();
        }, T.VoidTovoid()));
      }
      if (!dart.nullCheck(this[_moveController]).isAnimating) {
        dart.nullCheck(this[_moveController]).value = this[_dragExtent][$abs]() / this[_overallDragAxisExtent];
      }
    }
    [_handleDismissUpdateValueChanged]() {
      let t4;
      if (this.widget.onUpdate != null) {
        let oldDismissThresholdReached = this[_dismissThresholdReached];
        this[_dismissThresholdReached] = dart.nullCheck(this[_moveController]).value > dart.notNull((t4 = this.widget.dismissThresholds[$_get](this[_dismissDirection]), t4 == null ? 0.4 : t4));
        let details = new dismissible.DismissUpdateDetails.new({direction: this[_dismissDirection], reached: this[_dismissThresholdReached], previousReached: oldDismissThresholdReached, progress: dart.nullCheck(this[_moveController]).value});
        dart.nullCheck(this.widget.onUpdate)(details);
      }
    }
    [_updateMoveAnimation]() {
      let end = this[_dragExtent][$sign];
      this[_moveAnimation] = dart.nullCheck(this[_moveController]).drive(ui.Offset, new (T.TweenOfOffset()).new({begin: ui.Offset.zero, end: this[_directionIsXAxis] ? new ui.Offset.new(end, this.widget.crossAxisEndOffset) : new ui.Offset.new(this.widget.crossAxisEndOffset, end)}));
    }
    [_describeFlingGesture](velocity) {
      if (!(this.widget.direction !== null)) dart.assertFailed(null, I[1], 481, 12, "widget.direction != null");
      if (this[_dragExtent] === 0.0) {
        return dismissible._FlingGestureKind.none;
      }
      let vx = velocity.pixelsPerSecond.dx;
      let vy = velocity.pixelsPerSecond.dy;
      let flingDirection = null;
      if (this[_directionIsXAxis]) {
        if (vx[$abs]() - vy[$abs]() < 400 || vx[$abs]() < 700) {
          return dismissible._FlingGestureKind.none;
        }
        if (!(vx !== 0.0)) dart.assertFailed(null, I[1], 498, 14, "vx != 0.0");
        flingDirection = this[_extentToDirection](vx);
      } else {
        if (vy[$abs]() - vx[$abs]() < 400 || vy[$abs]() < 700) {
          return dismissible._FlingGestureKind.none;
        }
        if (!(vy !== 0.0)) dart.assertFailed(null, I[1], 504, 14, "vy != 0.0");
        flingDirection = this[_extentToDirection](vy);
      }
      if (!(this[_dismissDirection] !== null)) dart.assertFailed(null, I[1], 507, 12, "_dismissDirection != null");
      if (flingDirection === this[_dismissDirection]) {
        return dismissible._FlingGestureKind.forward;
      }
      return dismissible._FlingGestureKind.reverse;
    }
    [_handleDragEnd](details) {
      let t4, t4$;
      if (!this[_isActive] || dart.nullCheck(this[_moveController]).isAnimating) {
        return;
      }
      this[_dragUnderway] = false;
      if (dart.nullCheck(this[_moveController]).isCompleted) {
        this[_handleMoveCompleted]();
        return;
      }
      let flingVelocity = this[_directionIsXAxis] ? details.velocity.pixelsPerSecond.dx : details.velocity.pixelsPerSecond.dy;
      switch (this[_describeFlingGesture](details.velocity)) {
        case C[18] || CT.C18:
          {
            if (!(this[_dragExtent] !== 0.0)) dart.assertFailed(null, I[1], 526, 16, "_dragExtent != 0.0");
            if (!!dart.nullCheck(this[_moveController]).isDismissed) dart.assertFailed(null, I[1], 527, 16, "!_moveController!.isDismissed");
            if (dart.notNull((t4 = this.widget.dismissThresholds[$_get](this[_dismissDirection]), t4 == null ? 0.4 : t4)) >= 1.0) {
              dart.nullCheck(this[_moveController]).reverse();
              break;
            }
            this[_dragExtent] = flingVelocity[$sign];
            dart.nullCheck(this[_moveController]).fling({velocity: flingVelocity[$abs]() * 0.0033333333333333335});
            break;
          }
        case C[19] || CT.C19:
          {
            if (!(this[_dragExtent] !== 0.0)) dart.assertFailed(null, I[1], 536, 16, "_dragExtent != 0.0");
            if (!!dart.nullCheck(this[_moveController]).isDismissed) dart.assertFailed(null, I[1], 537, 16, "!_moveController!.isDismissed");
            this[_dragExtent] = flingVelocity[$sign];
            dart.nullCheck(this[_moveController]).fling({velocity: -flingVelocity[$abs]() * 0.0033333333333333335});
            break;
          }
        case C[17] || CT.C17:
          {
            if (!dart.nullCheck(this[_moveController]).isDismissed) {
              if (dart.nullCheck(this[_moveController]).value > dart.notNull((t4$ = this.widget.dismissThresholds[$_get](this[_dismissDirection]), t4$ == null ? 0.4 : t4$))) {
                dart.nullCheck(this[_moveController]).forward();
              } else {
                dart.nullCheck(this[_moveController]).reverse();
              }
            }
            break;
          }
      }
    }
    [_handleDismissStatusChanged](status) {
      return async.async(dart.void, (function* _handleDismissStatusChanged() {
        if (status === animation.AnimationStatus.completed && !this[_dragUnderway]) {
          yield this[_handleMoveCompleted]();
        }
        if (this.mounted) {
          this.updateKeepAlive();
        }
      }).bind(this));
    }
    [_handleMoveCompleted]() {
      return async.async(dart.void, (function* _handleMoveCompleted() {
        let t4;
        if (dart.notNull((t4 = this.widget.dismissThresholds[$_get](this[_dismissDirection]), t4 == null ? 0.4 : t4)) >= 1.0) {
          dart.nullCheck(this[_moveController]).reverse();
          return;
        }
        let result = (yield this[_confirmStartResizeAnimation]());
        if (this.mounted) {
          if (result) {
            this[_startResizeAnimation]();
          } else {
            dart.nullCheck(this[_moveController]).reverse();
          }
        }
      }).bind(this));
    }
    [_confirmStartResizeAnimation]() {
      return async.async(core.bool, (function* _confirmStartResizeAnimation() {
        let t4;
        if (this.widget.confirmDismiss != null) {
          this[_confirming] = true;
          let direction = this[_dismissDirection];
          try {
            t4 = (yield dart.nullCheck(this.widget.confirmDismiss)(direction));
            return t4 == null ? false : t4;
          } finally {
            this[_confirming] = false;
          }
        }
        return true;
      }).bind(this));
    }
    [_startResizeAnimation]() {
      let t4;
      if (!dart.nullCheck(this[_moveController]).isCompleted) dart.assertFailed(null, I[1], 591, 12, "_moveController!.isCompleted");
      if (!(this[_resizeController] == null)) dart.assertFailed(null, I[1], 592, 12, "_resizeController == null");
      if (!(this[_sizePriorToCollapse] == null)) dart.assertFailed(null, I[1], 593, 12, "_sizePriorToCollapse == null");
      if (this.widget.resizeDuration == null) {
        if (this.widget.onDismissed != null) {
          let direction = this[_dismissDirection];
          dart.nullCheck(this.widget.onDismissed)(direction);
        }
      } else {
        this[_resizeController] = (t4 = new animation_controller.AnimationController.new({duration: this.widget.resizeDuration, vsync: this}), (() => {
          t4.addListener(dart.bind(this, _handleResizeProgressChanged));
          t4.addStatusListener(dart.fn(status => this.updateKeepAlive(), T.AnimationStatusTovoid()));
          return t4;
        })());
        dart.nullCheck(this[_resizeController]).forward();
        this.setState(dart.fn(() => {
          this[_sizePriorToCollapse] = this.context.size;
          this[_resizeAnimation] = dart.nullCheck(this[_resizeController]).drive(core.double, new tween.CurveTween.new({curve: dismissible._kResizeTimeCurve})).drive(core.double, new (T.TweenOfdouble()).new({begin: 1.0, end: 0.0}));
        }, T.VoidTovoid()));
      }
    }
    [_handleResizeProgressChanged]() {
      let t4, t4$;
      if (dart.nullCheck(this[_resizeController]).isCompleted) {
        t4 = this.widget.onDismissed;
        t4 == null ? null : t4(this[_dismissDirection]);
      } else {
        t4$ = this.widget.onResize;
        t4$ == null ? null : t4$();
      }
    }
    build(context) {
      super.build(context);
      if (!(!this[_directionIsXAxis] || debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, I[1], 632, 12, "!_directionIsXAxis || debugCheckHasDirectionality(context)");
      let background = this.widget.background;
      if (this.widget.secondaryBackground != null) {
        let direction = this[_dismissDirection];
        if (direction === dismissible.DismissDirection.endToStart || direction === dismissible.DismissDirection.up) {
          background = this.widget.secondaryBackground;
        }
      }
      if (this[_resizeAnimation] != null) {
        if (!dart.fn(() => {
          if (dart.nullCheck(this[_resizeAnimation]).status !== animation.AnimationStatus.forward) {
            if (!(dart.nullCheck(this[_resizeAnimation]).status === animation.AnimationStatus.completed)) dart.assertFailed(null, I[1], 646, 18, "_resizeAnimation!.status == AnimationStatus.completed");
            dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A dismissed Dismissible widget is still part of the tree."), new assertions.ErrorHint.new("Make sure to implement the onDismissed handler and to immediately remove the Dismissible " + "widget from the application once that handler has fired.")])));
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 644, 14, "() {\n        if (_resizeAnimation!.status != AnimationStatus.forward) {\n          assert(_resizeAnimation!.status == AnimationStatus.completed);\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('A dismissed Dismissible widget is still part of the tree.'),\n            ErrorHint(\n              'Make sure to implement the onDismissed handler and to immediately remove the Dismissible '\n              'widget from the application once that handler has fired.',\n            ),\n          ]);\n        }\n        return true;\n      }()");
        return new transitions.SizeTransition.new({sizeFactor: dart.nullCheck(this[_resizeAnimation]), axis: this[_directionIsXAxis] ? basic_types.Axis.vertical : basic_types.Axis.horizontal, child: new basic.SizedBox.new({width: dart.nullCheck(this[_sizePriorToCollapse]).width, height: dart.nullCheck(this[_sizePriorToCollapse]).height, child: background, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22}), $creationLocationd_0dea112b090073317d4: C[23] || CT.C23});
      }
      let content = new transitions.SlideTransition.new({position: this[_moveAnimation], child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
      if (background != null) {
        content = new basic.Stack.new({children: (() => {
            let t4 = T.JSArrayOfWidget().of([]);
            if (!this[_moveAnimation].isDismissed) t4.push(new basic.Positioned.fill({child: new basic.ClipRect.new({clipper: new dismissible._DismissibleClipper.new({axis: this[_directionIsXAxis] ? basic_types.Axis.horizontal : basic_types.Axis.vertical, moveAnimation: this[_moveAnimation]}), child: background, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25}), $creationLocationd_0dea112b090073317d4: C[26] || CT.C26}));
            t4.push(content);
            return t4;
          })(), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27});
      }
      if (this.widget.direction === dismissible.DismissDirection.none) {
        return content;
      }
      return new gesture_detector.GestureDetector.new({onHorizontalDragStart: this[_directionIsXAxis] ? dart.bind(this, _handleDragStart) : null, onHorizontalDragUpdate: this[_directionIsXAxis] ? dart.bind(this, _handleDragUpdate) : null, onHorizontalDragEnd: this[_directionIsXAxis] ? dart.bind(this, _handleDragEnd) : null, onVerticalDragStart: this[_directionIsXAxis] ? null : dart.bind(this, _handleDragStart), onVerticalDragUpdate: this[_directionIsXAxis] ? null : dart.bind(this, _handleDragUpdate), onVerticalDragEnd: this[_directionIsXAxis] ? null : dart.bind(this, _handleDragEnd), behavior: this.widget.behavior, dragStartBehavior: this.widget.dragStartBehavior, child: content, $creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
    }
    static ['_#new#tearOff']() {
      return new dismissible._DismissibleState.new();
    }
  };
  (dismissible._DismissibleState.new = function() {
    this[_moveController] = null;
    this[___DismissibleState__moveAnimation] = null;
    this[_resizeController] = null;
    this[_resizeAnimation] = null;
    this[_dragExtent] = 0.0;
    this[_confirming] = false;
    this[_dragUnderway] = false;
    this[_sizePriorToCollapse] = null;
    this[_dismissThresholdReached] = false;
    dismissible._DismissibleState.__proto__.new.call(this);
    ;
  }).prototype = dismissible._DismissibleState.prototype;
  dart.addTypeTests(dismissible._DismissibleState);
  dart.addTypeCaches(dismissible._DismissibleState);
  dart.setMethodSignature(dismissible._DismissibleState, () => ({
    __proto__: dart.getMethods(dismissible._DismissibleState.__proto__),
    [_extentToDirection]: dart.fnType(dismissible.DismissDirection, [core.double]),
    [_handleDragStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
    [_handleDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    [_handleDismissUpdateValueChanged]: dart.fnType(dart.void, []),
    [_updateMoveAnimation]: dart.fnType(dart.void, []),
    [_describeFlingGesture]: dart.fnType(dismissible._FlingGestureKind, [velocity_tracker.Velocity]),
    [_handleDragEnd]: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    [_handleDismissStatusChanged]: dart.fnType(async.Future$(dart.void), [animation.AnimationStatus]),
    [_handleMoveCompleted]: dart.fnType(async.Future$(dart.void), []),
    [_confirmStartResizeAnimation]: dart.fnType(async.Future$(core.bool), []),
    [_startResizeAnimation]: dart.fnType(dart.void, []),
    [_handleResizeProgressChanged]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dismissible._DismissibleState, () => ({
    __proto__: dart.getGetters(dismissible._DismissibleState.__proto__),
    [_moveAnimation]: animation.Animation$(ui.Offset),
    wantKeepAlive: core.bool,
    [_directionIsXAxis]: core.bool,
    [_dismissDirection]: dismissible.DismissDirection,
    [_isActive]: core.bool,
    [_overallDragAxisExtent]: core.double
  }));
  dart.setSetterSignature(dismissible._DismissibleState, () => ({
    __proto__: dart.getSetters(dismissible._DismissibleState.__proto__),
    [_moveAnimation]: animation.Animation$(ui.Offset)
  }));
  dart.setLibraryUri(dismissible._DismissibleState, I[0]);
  dart.setFieldSignature(dismissible._DismissibleState, () => ({
    __proto__: dart.getFields(dismissible._DismissibleState.__proto__),
    [_moveController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___DismissibleState__moveAnimation]: dart.fieldType(dart.nullable(animation.Animation$(ui.Offset))),
    [_resizeController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [_resizeAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_dragExtent]: dart.fieldType(core.double),
    [_confirming]: dart.fieldType(core.bool),
    [_dragUnderway]: dart.fieldType(core.bool),
    [_sizePriorToCollapse]: dart.fieldType(dart.nullable(ui.Size)),
    [_dismissThresholdReached]: dart.fieldType(core.bool)
  }));
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var Interval_curve = dart.privateName(curves, "Interval.curve");
  var Interval_end = dart.privateName(curves, "Interval.end");
  var Interval_begin = dart.privateName(curves, "Interval.begin");
  dart.defineLazy(dismissible, {
    /*dismissible._kResizeTimeCurve*/get _kResizeTimeCurve() {
      return C[29] || CT.C29;
    },
    /*dismissible._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 700;
    },
    /*dismissible._kMinFlingVelocityDelta*/get _kMinFlingVelocityDelta() {
      return 400;
    },
    /*dismissible._kFlingVelocityScale*/get _kFlingVelocityScale() {
      return 0.0033333333333333335;
    },
    /*dismissible._kDismissThreshold*/get _kDismissThreshold() {
      return 0.4;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/widgets/dismissible.dart", {
    "package:flutter/src/widgets/dismissible.dart": dismissible
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dismissible.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/dismissible.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__dismissible: dismissible
  };
}));

//# sourceMappingURL=dismissible.dart.lib.js.map
