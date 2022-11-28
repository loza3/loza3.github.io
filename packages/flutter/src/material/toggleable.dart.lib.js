define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/material/constants.dart', 'packages/flutter/src/semantics/semantics_event.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__material__toggleable_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__material__constants$46dart, packages__flutter__src__semantics__semantics_event$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const actions = packages__flutter__src__widgets__title$46dart.src__widgets__actions;
  const gesture_detector = packages__flutter__src__widgets__title$46dart.src__widgets__gesture_detector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const focus_manager = packages__flutter__src__widgets__title$46dart.src__widgets__focus_manager;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const constants = packages__flutter__src__material__constants$46dart.src__material__constants;
  const semantics_event = packages__flutter__src__semantics__semantics_event$46dart.src__semantics__semantics_event;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var toggleable = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    CallbackActionOfActivateIntent: () => (T.CallbackActionOfActivateIntent = dart.constFn(actions.CallbackAction$(actions.ActivateIntent)))(),
    ActionOfIntent: () => (T.ActionOfIntent = dart.constFn(actions.Action$(actions.Intent)))(),
    LinkedMapOfType$ActionOfIntent: () => (T.LinkedMapOfType$ActionOfIntent = dart.constFn(_js_helper.LinkedMap$(core.Type, T.ActionOfIntent())))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    LinkedHashSetOfMaterialState: () => (T.LinkedHashSetOfMaterialState = dart.constFn(collection.LinkedHashSet$(material_state.MaterialState)))(),
    TweenOfdouble: () => (T.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: semantics_event.TapSemanticEvent.prototype,
        [SemanticsEvent_type]: "tap"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 18,
        [_Location_line]: 329,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/toggleable.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 16,
        [_Location_line]: 327,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/toggleable.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GestureDetector",
        [_Location_column]: 14,
        [_Location_line]: 321,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/toggleable.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FocusableActionDetector",
        [_Location_column]: 12,
        [_Location_line]: 313,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/toggleable.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 50000
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = ["package:flutter/src/material/toggleable.dart"];
  var __ToggleableStateMixin__positionController = dart.privateName(toggleable, "_#ToggleableStateMixin#_positionController");
  var __ToggleableStateMixin__position = dart.privateName(toggleable, "_#ToggleableStateMixin#_position");
  var __ToggleableStateMixin__reactionController = dart.privateName(toggleable, "_#ToggleableStateMixin#_reactionController");
  var __ToggleableStateMixin__reaction = dart.privateName(toggleable, "_#ToggleableStateMixin#_reaction");
  var __ToggleableStateMixin__reactionHoverFade = dart.privateName(toggleable, "_#ToggleableStateMixin#_reactionHoverFade");
  var __ToggleableStateMixin__reactionHoverFadeController = dart.privateName(toggleable, "_#ToggleableStateMixin#_reactionHoverFadeController");
  var __ToggleableStateMixin__reactionFocusFade = dart.privateName(toggleable, "_#ToggleableStateMixin#_reactionFocusFade");
  var __ToggleableStateMixin__reactionFocusFadeController = dart.privateName(toggleable, "_#ToggleableStateMixin#_reactionFocusFadeController");
  var __ToggleableStateMixin__actionMap = dart.privateName(toggleable, "_#ToggleableStateMixin#_actionMap");
  var _downPosition = dart.privateName(toggleable, "_downPosition");
  var _focused = dart.privateName(toggleable, "_focused");
  var _hovering = dart.privateName(toggleable, "_hovering");
  var _positionController = dart.privateName(toggleable, "_positionController");
  var _position = dart.privateName(toggleable, "_position");
  var _reactionController = dart.privateName(toggleable, "_reactionController");
  var _reaction = dart.privateName(toggleable, "_reaction");
  var _reactionHoverFade = dart.privateName(toggleable, "_reactionHoverFade");
  var _reactionHoverFadeController = dart.privateName(toggleable, "_reactionHoverFadeController");
  var _reactionFocusFade = dart.privateName(toggleable, "_reactionFocusFade");
  var _reactionFocusFadeController = dart.privateName(toggleable, "_reactionFocusFadeController");
  var _handleTap = dart.privateName(toggleable, "_handleTap");
  var _actionMap = dart.privateName(toggleable, "_actionMap");
  var _handleTapDown = dart.privateName(toggleable, "_handleTapDown");
  var SemanticsEvent_type = dart.privateName(semantics_event, "SemanticsEvent.type");
  var _handleTapEnd = dart.privateName(toggleable, "_handleTapEnd");
  var _handleFocusHighlightChanged = dart.privateName(toggleable, "_handleFocusHighlightChanged");
  var _handleHoverChanged = dart.privateName(toggleable, "_handleHoverChanged");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  const _is_ToggleableStateMixin_default = Symbol('_is_ToggleableStateMixin_default');
  toggleable.ToggleableStateMixin$ = dart.generic(S => {
    class ToggleableStateMixin extends ticker_provider.TickerProviderStateMixin$(S) {}
    ToggleableStateMixin[dart.mixinOn] = TickerProviderStateMixin => class ToggleableStateMixin extends TickerProviderStateMixin {
      get positionController() {
        return this[_positionController];
      }
      get [_positionController]() {
        let t0;
        t0 = this[__ToggleableStateMixin__positionController];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_positionController")) : t0;
      }
      set [_positionController](library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_positionController$35param) {
        this[__ToggleableStateMixin__positionController] = library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_positionController$35param;
      }
      get position() {
        return this[_position];
      }
      get [_position]() {
        let t0;
        t0 = this[__ToggleableStateMixin__position];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_position")) : t0;
      }
      set [_position](library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_position$35param) {
        this[__ToggleableStateMixin__position] = library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_position$35param;
      }
      get reactionController() {
        return this[_reactionController];
      }
      get [_reactionController]() {
        let t0;
        t0 = this[__ToggleableStateMixin__reactionController];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_reactionController")) : t0;
      }
      set [_reactionController](library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionController$35param) {
        this[__ToggleableStateMixin__reactionController] = library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionController$35param;
      }
      get reaction() {
        return this[_reaction];
      }
      get [_reaction]() {
        let t0;
        t0 = this[__ToggleableStateMixin__reaction];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_reaction")) : t0;
      }
      set [_reaction](library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reaction$35param) {
        this[__ToggleableStateMixin__reaction] = library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reaction$35param;
      }
      get reactionHoverFade() {
        return this[_reactionHoverFade];
      }
      get [_reactionHoverFade]() {
        let t0;
        t0 = this[__ToggleableStateMixin__reactionHoverFade];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_reactionHoverFade")) : t0;
      }
      set [_reactionHoverFade](library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionHoverFade$35param) {
        this[__ToggleableStateMixin__reactionHoverFade] = library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionHoverFade$35param;
      }
      get [_reactionHoverFadeController]() {
        let t0;
        t0 = this[__ToggleableStateMixin__reactionHoverFadeController];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_reactionHoverFadeController")) : t0;
      }
      set [_reactionHoverFadeController](library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionHoverFadeController$35param) {
        this[__ToggleableStateMixin__reactionHoverFadeController] = library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionHoverFadeController$35param;
      }
      get reactionFocusFade() {
        return this[_reactionFocusFade];
      }
      get [_reactionFocusFade]() {
        let t0;
        t0 = this[__ToggleableStateMixin__reactionFocusFade];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_reactionFocusFade")) : t0;
      }
      set [_reactionFocusFade](library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionFocusFade$35param) {
        this[__ToggleableStateMixin__reactionFocusFade] = library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionFocusFade$35param;
      }
      get [_reactionFocusFadeController]() {
        let t0;
        t0 = this[__ToggleableStateMixin__reactionFocusFadeController];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_reactionFocusFadeController")) : t0;
      }
      set [_reactionFocusFadeController](library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionFocusFadeController$35param) {
        this[__ToggleableStateMixin__reactionFocusFadeController] = library$32package$58flutter$47src$47material$47toggleable$46dart$58$58_reactionFocusFadeController$35param;
      }
      get isInteractive() {
        return this.onChanged != null;
      }
      get [_actionMap]() {
        let t1, t0;
        t0 = this[__ToggleableStateMixin__actionMap];
        return t0 == null ? (t1 = new (T.LinkedMapOfType$ActionOfIntent()).from([dart.wrapType(actions.ActivateIntent), new (T.CallbackActionOfActivateIntent()).new({onInvoke: dart.bind(this, _handleTap)})]), this[__ToggleableStateMixin__actionMap] == null ? this[__ToggleableStateMixin__actionMap] = t1 : dart.throw(new _internal.LateError.fieldADI("_actionMap"))) : t0;
      }
      initState() {
        super.initState();
        this[_positionController] = new animation_controller.AnimationController.new({duration: toggleable._kToggleDuration, value: this.value === false ? 0.0 : 1.0, vsync: this});
        this[_position] = new animations.CurvedAnimation.new({parent: this[_positionController], curve: curves.Curves.easeIn, reverseCurve: curves.Curves.easeOut});
        this[_reactionController] = new animation_controller.AnimationController.new({duration: constants.kRadialReactionDuration, vsync: this});
        this[_reaction] = new animations.CurvedAnimation.new({parent: this[_reactionController], curve: curves.Curves.fastOutSlowIn});
        this[_reactionHoverFadeController] = new animation_controller.AnimationController.new({duration: toggleable._kReactionFadeDuration, value: this[_hovering] || this[_focused] ? 1.0 : 0.0, vsync: this});
        this[_reactionHoverFade] = new animations.CurvedAnimation.new({parent: this[_reactionHoverFadeController], curve: curves.Curves.fastOutSlowIn});
        this[_reactionFocusFadeController] = new animation_controller.AnimationController.new({duration: toggleable._kReactionFadeDuration, value: this[_hovering] || this[_focused] ? 1.0 : 0.0, vsync: this});
        this[_reactionFocusFade] = new animations.CurvedAnimation.new({parent: this[_reactionFocusFadeController], curve: curves.Curves.fastOutSlowIn});
      }
      animateToValue() {
        let t0, t0$;
        if (this.tristate) {
          if (this.value == null) {
            this[_positionController].value = 0.0;
          }
          if (dart.test((t0 = this.value, t0 == null ? true : t0))) {
            this[_positionController].forward();
          } else {
            this[_positionController].reverse();
          }
        } else {
          if (dart.test((t0$ = this.value, t0$ == null ? false : t0$))) {
            this[_positionController].forward();
          } else {
            this[_positionController].reverse();
          }
        }
      }
      dispose() {
        this[_positionController].dispose();
        this[_reactionController].dispose();
        this[_reactionHoverFadeController].dispose();
        this[_reactionFocusFadeController].dispose();
        super.dispose();
      }
      get downPosition() {
        return this[_downPosition];
      }
      [_handleTapDown](details) {
        if (this.isInteractive) {
          this.setState(dart.fn(() => {
            this[_downPosition] = details.localPosition;
          }, T.VoidTovoid()));
          this[_reactionController].forward();
        }
      }
      [_handleTap](_ = null) {
        if (!this.isInteractive) {
          return;
        }
        switch (this.value) {
          case false:
            {
              dart.nullCheck(this.onChanged)(true);
              break;
            }
          case true:
            {
              dart.nullCheck(this.onChanged)(this.tristate ? null : false);
              break;
            }
          case null:
            {
              dart.nullCheck(this.onChanged)(false);
              break;
            }
        }
        dart.nullCheck(this.context.findRenderObject()).sendSemanticsEvent(C[0] || CT.C0);
      }
      [_handleTapEnd](_ = null) {
        if (this[_downPosition] != null) {
          this.setState(dart.fn(() => {
            this[_downPosition] = null;
          }, T.VoidTovoid()));
        }
        this[_reactionController].reverse();
      }
      [_handleFocusHighlightChanged](focused) {
        if (focused !== this[_focused]) {
          this.setState(dart.fn(() => {
            this[_focused] = focused;
          }, T.VoidTovoid()));
          if (focused) {
            this[_reactionFocusFadeController].forward();
          } else {
            this[_reactionFocusFadeController].reverse();
          }
        }
      }
      [_handleHoverChanged](hovering) {
        if (hovering !== this[_hovering]) {
          this.setState(dart.fn(() => {
            this[_hovering] = hovering;
          }, T.VoidTovoid()));
          if (hovering) {
            this[_reactionHoverFadeController].forward();
          } else {
            this[_reactionHoverFadeController].reverse();
          }
        }
      }
      get states() {
        let t1;
        return (() => {
          let t0 = T.LinkedHashSetOfMaterialState().new();
          if (!this.isInteractive) t0.add(material_state.MaterialState.disabled);
          if (this[_hovering]) t0.add(material_state.MaterialState.hovered);
          if (this[_focused]) t0.add(material_state.MaterialState.focused);
          if (dart.test((t1 = this.value, t1 == null ? true : t1))) t0.add(material_state.MaterialState.selected);
          return t0;
        })();
      }
      buildToggleable(opts) {
        let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
        let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
        let mouseCursor = opts && 'mouseCursor' in opts ? opts.mouseCursor : null;
        let size = opts && 'size' in opts ? opts.size : null;
        let painter = opts && 'painter' in opts ? opts.painter : null;
        return new actions.FocusableActionDetector.new({actions: this[_actionMap], focusNode: focusNode, autofocus: autofocus, enabled: this.isInteractive, onShowFocusHighlight: dart.bind(this, _handleFocusHighlightChanged), onShowHoverHighlight: dart.bind(this, _handleHoverChanged), mouseCursor: mouseCursor.resolve(this.states), child: new gesture_detector.GestureDetector.new({excludeFromSemantics: !this.isInteractive, onTapDown: dart.bind(this, _handleTapDown), onTap: dart.bind(this, _handleTap), onTapUp: dart.bind(this, _handleTapEnd), onTapCancel: dart.bind(this, _handleTapEnd), child: new basic.Semantics.new({enabled: this.isInteractive, child: new basic.CustomPaint.new({size: size, painter: painter, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
      }
    };
    (ToggleableStateMixin[dart.mixinNew] = function() {
      this[__ToggleableStateMixin__positionController] = null;
      this[__ToggleableStateMixin__position] = null;
      this[__ToggleableStateMixin__reactionController] = null;
      this[__ToggleableStateMixin__reaction] = null;
      this[__ToggleableStateMixin__reactionHoverFade] = null;
      this[__ToggleableStateMixin__reactionHoverFadeController] = null;
      this[__ToggleableStateMixin__reactionFocusFade] = null;
      this[__ToggleableStateMixin__reactionFocusFadeController] = null;
      this[__ToggleableStateMixin__actionMap] = null;
      this[_downPosition] = null;
      this[_focused] = false;
      this[_hovering] = false;
    }).prototype = ToggleableStateMixin.prototype;
    dart.addTypeTests(ToggleableStateMixin);
    ToggleableStateMixin.prototype[_is_ToggleableStateMixin_default] = true;
    dart.addTypeCaches(ToggleableStateMixin);
    ToggleableStateMixin[dart.implements] = () => [ticker_provider.TickerProviderStateMixin$(S)];
    dart.setMethodSignature(ToggleableStateMixin, () => ({
      __proto__: dart.getMethods(ToggleableStateMixin.__proto__),
      animateToValue: dart.fnType(dart.void, []),
      [_handleTapDown]: dart.fnType(dart.void, [tap.TapDownDetails]),
      [_handleTap]: dart.fnType(dart.void, [], [dart.nullable(actions.Intent)]),
      [_handleTapEnd]: dart.fnType(dart.void, [], [dart.nullable(tap.TapUpDetails)]),
      [_handleFocusHighlightChanged]: dart.fnType(dart.void, [core.bool]),
      [_handleHoverChanged]: dart.fnType(dart.void, [core.bool]),
      buildToggleable: dart.fnType(framework.Widget, [], {autofocus: core.bool, focusNode: dart.nullable(focus_manager.FocusNode)}, {mouseCursor: material_state.MaterialStateProperty$(mouse_cursor.MouseCursor), painter: custom_paint.CustomPainter, size: ui.Size})
    }));
    dart.setGetterSignature(ToggleableStateMixin, () => ({
      __proto__: dart.getGetters(ToggleableStateMixin.__proto__),
      positionController: animation_controller.AnimationController,
      [_positionController]: animation_controller.AnimationController,
      position: animations.CurvedAnimation,
      [_position]: animations.CurvedAnimation,
      reactionController: animation_controller.AnimationController,
      [_reactionController]: animation_controller.AnimationController,
      reaction: animation.Animation$(core.double),
      [_reaction]: animation.Animation$(core.double),
      reactionHoverFade: animation.Animation$(core.double),
      [_reactionHoverFade]: animation.Animation$(core.double),
      [_reactionHoverFadeController]: animation_controller.AnimationController,
      reactionFocusFade: animation.Animation$(core.double),
      [_reactionFocusFade]: animation.Animation$(core.double),
      [_reactionFocusFadeController]: animation_controller.AnimationController,
      isInteractive: core.bool,
      [_actionMap]: core.Map$(core.Type, actions.Action$(actions.Intent)),
      downPosition: dart.nullable(ui.Offset),
      states: core.Set$(material_state.MaterialState)
    }));
    dart.setSetterSignature(ToggleableStateMixin, () => ({
      __proto__: dart.getSetters(ToggleableStateMixin.__proto__),
      [_positionController]: animation_controller.AnimationController,
      [_position]: animations.CurvedAnimation,
      [_reactionController]: animation_controller.AnimationController,
      [_reaction]: animation.Animation$(core.double),
      [_reactionHoverFade]: animation.Animation$(core.double),
      [_reactionHoverFadeController]: animation_controller.AnimationController,
      [_reactionFocusFade]: animation.Animation$(core.double),
      [_reactionFocusFadeController]: animation_controller.AnimationController
    }));
    dart.setLibraryUri(ToggleableStateMixin, I[0]);
    dart.setFieldSignature(ToggleableStateMixin, () => ({
      __proto__: dart.getFields(ToggleableStateMixin.__proto__),
      [__ToggleableStateMixin__positionController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
      [__ToggleableStateMixin__position]: dart.fieldType(dart.nullable(animations.CurvedAnimation)),
      [__ToggleableStateMixin__reactionController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
      [__ToggleableStateMixin__reaction]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
      [__ToggleableStateMixin__reactionHoverFade]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
      [__ToggleableStateMixin__reactionHoverFadeController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
      [__ToggleableStateMixin__reactionFocusFade]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
      [__ToggleableStateMixin__reactionFocusFadeController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
      [__ToggleableStateMixin__actionMap]: dart.fieldType(dart.nullable(core.Map$(core.Type, actions.Action$(actions.Intent)))),
      [_downPosition]: dart.fieldType(dart.nullable(ui.Offset)),
      [_focused]: dart.fieldType(core.bool),
      [_hovering]: dart.fieldType(core.bool)
    }));
    return ToggleableStateMixin;
  });
  toggleable.ToggleableStateMixin = toggleable.ToggleableStateMixin$();
  dart.addTypeTests(toggleable.ToggleableStateMixin, _is_ToggleableStateMixin_default);
  var _activeColor = dart.privateName(toggleable, "_activeColor");
  var _inactiveColor = dart.privateName(toggleable, "_inactiveColor");
  var _inactiveReactionColor = dart.privateName(toggleable, "_inactiveReactionColor");
  var _reactionColor = dart.privateName(toggleable, "_reactionColor");
  var _hoverColor = dart.privateName(toggleable, "_hoverColor");
  var _focusColor = dart.privateName(toggleable, "_focusColor");
  var _splashRadius = dart.privateName(toggleable, "_splashRadius");
  var _isFocused = dart.privateName(toggleable, "_isFocused");
  var _isHovered = dart.privateName(toggleable, "_isHovered");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  toggleable.ToggleablePainter = class ToggleablePainter extends change_notifier.ChangeNotifier {
    get position() {
      return dart.nullCheck(this[_position]);
    }
    set position(value) {
      let t1;
      if (value[$_equals](this[_position])) {
        return;
      }
      t1 = this[_position];
      t1 == null ? null : t1.removeListener(dart.bind(this, 'notifyListeners'));
      value.addListener(dart.bind(this, 'notifyListeners'));
      this[_position] = value;
      this.notifyListeners();
    }
    get reaction() {
      return dart.nullCheck(this[_reaction]);
    }
    set reaction(value) {
      let t1;
      if (value[$_equals](this[_reaction])) {
        return;
      }
      t1 = this[_reaction];
      t1 == null ? null : t1.removeListener(dart.bind(this, 'notifyListeners'));
      value.addListener(dart.bind(this, 'notifyListeners'));
      this[_reaction] = value;
      this.notifyListeners();
    }
    get reactionFocusFade() {
      return dart.nullCheck(this[_reactionFocusFade]);
    }
    set reactionFocusFade(value) {
      let t1;
      if (value[$_equals](this[_reactionFocusFade])) {
        return;
      }
      t1 = this[_reactionFocusFade];
      t1 == null ? null : t1.removeListener(dart.bind(this, 'notifyListeners'));
      value.addListener(dart.bind(this, 'notifyListeners'));
      this[_reactionFocusFade] = value;
      this.notifyListeners();
    }
    get reactionHoverFade() {
      return dart.nullCheck(this[_reactionHoverFade]);
    }
    set reactionHoverFade(value) {
      let t1;
      if (value[$_equals](this[_reactionHoverFade])) {
        return;
      }
      t1 = this[_reactionHoverFade];
      t1 == null ? null : t1.removeListener(dart.bind(this, 'notifyListeners'));
      value.addListener(dart.bind(this, 'notifyListeners'));
      this[_reactionHoverFade] = value;
      this.notifyListeners();
    }
    get activeColor() {
      return dart.nullCheck(this[_activeColor]);
    }
    set activeColor(value) {
      if (dart.equals(this[_activeColor], value)) {
        return;
      }
      this[_activeColor] = value;
      this.notifyListeners();
    }
    get inactiveColor() {
      return dart.nullCheck(this[_inactiveColor]);
    }
    set inactiveColor(value) {
      if (dart.equals(this[_inactiveColor], value)) {
        return;
      }
      this[_inactiveColor] = value;
      this.notifyListeners();
    }
    get inactiveReactionColor() {
      return dart.nullCheck(this[_inactiveReactionColor]);
    }
    set inactiveReactionColor(value) {
      if (value._equals(this[_inactiveReactionColor])) {
        return;
      }
      this[_inactiveReactionColor] = value;
      this.notifyListeners();
    }
    get reactionColor() {
      return dart.nullCheck(this[_reactionColor]);
    }
    set reactionColor(value) {
      if (value._equals(this[_reactionColor])) {
        return;
      }
      this[_reactionColor] = value;
      this.notifyListeners();
    }
    get hoverColor() {
      return dart.nullCheck(this[_hoverColor]);
    }
    set hoverColor(value) {
      if (value._equals(this[_hoverColor])) {
        return;
      }
      this[_hoverColor] = value;
      this.notifyListeners();
    }
    get focusColor() {
      return dart.nullCheck(this[_focusColor]);
    }
    set focusColor(value) {
      if (value._equals(this[_focusColor])) {
        return;
      }
      this[_focusColor] = value;
      this.notifyListeners();
    }
    get splashRadius() {
      return dart.nullCheck(this[_splashRadius]);
    }
    set splashRadius(value) {
      if (value === this[_splashRadius]) {
        return;
      }
      this[_splashRadius] = value;
      this.notifyListeners();
    }
    get downPosition() {
      return this[_downPosition];
    }
    set downPosition(value) {
      if (dart.equals(value, this[_downPosition])) {
        return;
      }
      this[_downPosition] = value;
      this.notifyListeners();
    }
    get isFocused() {
      return dart.nullCheck(this[_isFocused]);
    }
    set isFocused(value) {
      if (value == this[_isFocused]) {
        return;
      }
      this[_isFocused] = value;
      this.notifyListeners();
    }
    get isHovered() {
      return dart.nullCheck(this[_isHovered]);
    }
    set isHovered(value) {
      if (value == this[_isHovered]) {
        return;
      }
      this[_isHovered] = value;
      this.notifyListeners();
    }
    paintRadialReaction(opts) {
      let t1, t1$;
      let canvas = opts && 'canvas' in opts ? opts.canvas : null;
      let offset = opts && 'offset' in opts ? opts.offset : C[5] || CT.C5;
      let origin = opts && 'origin' in opts ? opts.origin : null;
      if (!this.reaction.isDismissed || !this.reactionFocusFade.isDismissed || !this.reactionHoverFade.isDismissed) {
        let reactionPaint = (t1 = ui.Paint.new(), (() => {
          t1.color = dart.nullCheck(ui.Color.lerp(ui.Color.lerp(ui.Color.lerp(this.inactiveReactionColor, this.reactionColor, this.position.value), this.hoverColor, this.reactionHoverFade.value), this.focusColor, this.reactionFocusFade.value));
          return t1;
        })());
        let center = dart.nullCheck(ui.Offset.lerp((t1$ = this.downPosition, t1$ == null ? origin : t1$), origin, this.reaction.value));
        let radialReactionRadiusTween = new (T.TweenOfdouble()).new({begin: 0.0, end: this.splashRadius});
        let reactionRadius = this.isFocused || this.isHovered ? this.splashRadius : radialReactionRadiusTween.evaluate(this.reaction);
        if (reactionRadius > 0.0) {
          canvas.drawCircle(center['+'](offset), reactionRadius, reactionPaint);
        }
      }
    }
    dispose() {
      let t1, t1$, t1$0, t1$1;
      t1 = this[_position];
      t1 == null ? null : t1.removeListener(dart.bind(this, 'notifyListeners'));
      t1$ = this[_reaction];
      t1$ == null ? null : t1$.removeListener(dart.bind(this, 'notifyListeners'));
      t1$0 = this[_reactionFocusFade];
      t1$0 == null ? null : t1$0.removeListener(dart.bind(this, 'notifyListeners'));
      t1$1 = this[_reactionHoverFade];
      t1$1 == null ? null : t1$1.removeListener(dart.bind(this, 'notifyListeners'));
      super.dispose();
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return true;
    }
    hitTest(position) {
      return null;
    }
    get semanticsBuilder() {
      return null;
    }
    shouldRebuildSemantics(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return false;
    }
    toString() {
      return diagnostics.describeIdentity(this);
    }
  };
  (toggleable.ToggleablePainter.new = function() {
    this[_position] = null;
    this[_reaction] = null;
    this[_reactionFocusFade] = null;
    this[_reactionHoverFade] = null;
    this[_activeColor] = null;
    this[_inactiveColor] = null;
    this[_inactiveReactionColor] = null;
    this[_reactionColor] = null;
    this[_hoverColor] = null;
    this[_focusColor] = null;
    this[_splashRadius] = null;
    this[_downPosition] = null;
    this[_isFocused] = null;
    this[_isHovered] = null;
    toggleable.ToggleablePainter.__proto__.new.call(this);
    ;
  }).prototype = toggleable.ToggleablePainter.prototype;
  dart.addTypeTests(toggleable.ToggleablePainter);
  dart.addTypeCaches(toggleable.ToggleablePainter);
  toggleable.ToggleablePainter[dart.implements] = () => [custom_paint.CustomPainter];
  dart.setMethodSignature(toggleable.ToggleablePainter, () => ({
    __proto__: dart.getMethods(toggleable.ToggleablePainter.__proto__),
    paintRadialReaction: dart.fnType(dart.void, [], {offset: ui.Offset}, {canvas: ui.Canvas, origin: ui.Offset}),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    hitTest: dart.fnType(dart.nullable(core.bool), [ui.Offset]),
    shouldRebuildSemantics: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(toggleable.ToggleablePainter, () => ({
    __proto__: dart.getGetters(toggleable.ToggleablePainter.__proto__),
    position: animation.Animation$(core.double),
    reaction: animation.Animation$(core.double),
    reactionFocusFade: animation.Animation$(core.double),
    reactionHoverFade: animation.Animation$(core.double),
    activeColor: ui.Color,
    inactiveColor: ui.Color,
    inactiveReactionColor: ui.Color,
    reactionColor: ui.Color,
    hoverColor: ui.Color,
    focusColor: ui.Color,
    splashRadius: core.double,
    downPosition: dart.nullable(ui.Offset),
    isFocused: core.bool,
    isHovered: core.bool,
    semanticsBuilder: dart.nullable(dart.fnType(core.List$(custom_paint.CustomPainterSemantics), [ui.Size]))
  }));
  dart.setSetterSignature(toggleable.ToggleablePainter, () => ({
    __proto__: dart.getSetters(toggleable.ToggleablePainter.__proto__),
    position: animation.Animation$(core.double),
    reaction: animation.Animation$(core.double),
    reactionFocusFade: animation.Animation$(core.double),
    reactionHoverFade: animation.Animation$(core.double),
    activeColor: ui.Color,
    inactiveColor: ui.Color,
    inactiveReactionColor: ui.Color,
    reactionColor: ui.Color,
    hoverColor: ui.Color,
    focusColor: ui.Color,
    splashRadius: core.double,
    downPosition: dart.nullable(ui.Offset),
    isFocused: dart.nullable(core.bool),
    isHovered: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(toggleable.ToggleablePainter, I[0]);
  dart.setFieldSignature(toggleable.ToggleablePainter, () => ({
    __proto__: dart.getFields(toggleable.ToggleablePainter.__proto__),
    [_position]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_reaction]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_reactionFocusFade]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_reactionHoverFade]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_activeColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_inactiveColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_inactiveReactionColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_reactionColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_hoverColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_focusColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_splashRadius]: dart.fieldType(dart.nullable(core.double)),
    [_downPosition]: dart.fieldType(dart.nullable(ui.Offset)),
    [_isFocused]: dart.fieldType(dart.nullable(core.bool)),
    [_isHovered]: dart.fieldType(dart.nullable(core.bool))
  }));
  dart.defineExtensionMethods(toggleable.ToggleablePainter, ['toString']);
  var Duration__duration = dart.privateName(core, "Duration._duration");
  dart.defineLazy(toggleable, {
    /*toggleable._kToggleDuration*/get _kToggleDuration() {
      return C[6] || CT.C6;
    },
    /*toggleable._kReactionFadeDuration*/get _kReactionFadeDuration() {
      return C[7] || CT.C7;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/toggleable.dart", {
    "package:flutter/src/material/toggleable.dart": toggleable
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["toggleable.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/toggleable.dart.lib.js"}');
  // Exports:
  return {
    src__material__toggleable: toggleable
  };
}));

//# sourceMappingURL=toggleable.dart.lib.js.map
