define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/widgets/scroll_view.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__single_child_scroll_view_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__widgets__scroll_view$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const primary_scroll_controller = packages__flutter__src__widgets__title$46dart.src__widgets__primary_scroll_controller;
  const scrollable$ = packages__flutter__src__widgets__title$46dart.src__widgets__scrollable;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const notification_listener = packages__flutter__src__widgets__title$46dart.src__widgets__notification_listener;
  const scroll_notification = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_notification;
  const focus_scope = packages__flutter__src__widgets__title$46dart.src__widgets__focus_scope;
  const scroll_controller = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_controller;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const viewport = packages__flutter__src__rendering__sliver$46dart.src__rendering__viewport;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var single_child_scroll_view = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    BuildContextAndViewportOffsetTo_SingleChildViewport: () => (T.BuildContextAndViewportOffsetTo_SingleChildViewport = dart.constFn(dart.fnType(single_child_scroll_view._SingleChildViewport, [framework.BuildContext, viewport_offset.ViewportOffset])))(),
    NotificationListenerOfScrollUpdateNotification: () => (T.NotificationListenerOfScrollUpdateNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollUpdateNotification)))(),
    ScrollUpdateNotificationTobool: () => (T.ScrollUpdateNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollUpdateNotification])))(),
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    PaintingContextAndOffsetTovoid: () => (T.PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))(),
    RenderObjectN: () => (T.RenderObjectN = dart.constFn(dart.nullable(object.RenderObject)))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    DiagnosticsPropertyOfOffset: () => (T.DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: scroll_view.ScrollViewKeyboardDismissBehavior.prototype,
        [_Enum__name]: "manual",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SingleChildScrollView",
        [_Location_column]: 9,
        [_Location_line]: 140,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 18,
        [_Location_line]: 238,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SingleChildViewport",
        [_Location_column]: 16,
        [_Location_line]: 254,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scrollable",
        [_Location_column]: 25,
        [_Location_line]: 247,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NotificationListener",
        [_Location_column]: 20,
        [_Location_line]: 264,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PrimaryScrollController",
        [_Location_column]: 33,
        [_Location_line]: 279,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SingleChildViewport",
        [_Location_column]: 9,
        [_Location_line]: 285,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAlias",
        [_Enum_index]: 2
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAliasWithSaveLayer",
        [_Enum_index]: 3
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    }
  }, false);
  var C = Array(21).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/single_child_scroll_view.dart",
    "package:flutter/src/widgets/single_child_scroll_view.dart"
  ];
  var scrollDirection$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.scrollDirection");
  var reverse$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.reverse");
  var padding$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.padding");
  var controller$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.controller");
  var primary$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.primary");
  var physics$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.physics");
  var child$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.child");
  var dragStartBehavior$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.dragStartBehavior");
  var clipBehavior$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.clipBehavior");
  var restorationId$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.restorationId");
  var keyboardDismissBehavior$ = dart.privateName(single_child_scroll_view, "SingleChildScrollView.keyboardDismissBehavior");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _getDirection = dart.privateName(single_child_scroll_view, "_getDirection");
  single_child_scroll_view.SingleChildScrollView = class SingleChildScrollView extends framework.StatelessWidget {
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    get keyboardDismissBehavior() {
      return this[keyboardDismissBehavior$];
    }
    set keyboardDismissBehavior(value) {
      super.keyboardDismissBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[0] || CT.C0;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[1] || CT.C1;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[3] || CT.C3;
      return new single_child_scroll_view.SingleChildScrollView.new({key: key, scrollDirection: scrollDirection, reverse: reverse, padding: padding, primary: primary, physics: physics, controller: controller, child: child, dragStartBehavior: dragStartBehavior, clipBehavior: clipBehavior, restorationId: restorationId, keyboardDismissBehavior: keyboardDismissBehavior, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    [_getDirection](context) {
      return basic.getAxisDirectionFromAxisReverseAndDirectionality(context, this.scrollDirection, this.reverse);
    }
    build(context) {
      let t0;
      let axisDirection = this[_getDirection](context);
      let contents = this.child;
      if (this.padding != null) {
        contents = new basic.Padding.new({padding: dart.nullCheck(this.padding), child: contents, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
      }
      let effectivePrimary = (t0 = this.primary, t0 == null ? this.controller == null && primary_scroll_controller.PrimaryScrollController.shouldInherit(context, this.scrollDirection) : t0);
      let scrollController = effectivePrimary ? primary_scroll_controller.PrimaryScrollController.of(context) : this.controller;
      let scrollable = new scrollable$.Scrollable.new({dragStartBehavior: this.dragStartBehavior, axisDirection: axisDirection, controller: scrollController, physics: this.physics, restorationId: this.restorationId, viewportBuilder: dart.fn((context, offset) => new single_child_scroll_view._SingleChildViewport.new({axisDirection: axisDirection, offset: offset, clipBehavior: this.clipBehavior, child: contents, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), T.BuildContextAndViewportOffsetTo_SingleChildViewport()), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
      if (this.keyboardDismissBehavior === scroll_view.ScrollViewKeyboardDismissBehavior.onDrag) {
        scrollable = new (T.NotificationListenerOfScrollUpdateNotification()).new({child: scrollable, onNotification: dart.fn(notification => {
            let focusNode = focus_scope.FocusScope.of(context);
            if (notification.dragDetails != null && focusNode.hasFocus) {
              focusNode.unfocus();
            }
            return false;
          }, T.ScrollUpdateNotificationTobool()), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
      }
      return effectivePrimary && scrollController != null ? new primary_scroll_controller.PrimaryScrollController.none({child: scrollable, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}) : scrollable;
    }
  };
  (single_child_scroll_view.SingleChildScrollView.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[0] || CT.C0;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[1] || CT.C1;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[3] || CT.C3;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[padding$] = padding;
    this[primary$] = primary;
    this[physics$] = physics;
    this[controller$] = controller;
    this[child$] = child;
    this[dragStartBehavior$] = dragStartBehavior;
    this[clipBehavior$] = clipBehavior;
    this[restorationId$] = restorationId;
    this[keyboardDismissBehavior$] = keyboardDismissBehavior;
    if (!(scrollDirection !== null)) dart.assertFailed(null, I[0], 153, 15, "scrollDirection != null");
    if (!(dragStartBehavior !== null)) dart.assertFailed(null, I[0], 154, 15, "dragStartBehavior != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 155, 15, "clipBehavior != null");
    if (!!(controller != null && dart.test((t0 = primary, t0 == null ? false : t0)))) dart.assertFailed("Primary ScrollViews obtain their ScrollController via inheritance " + "from a PrimaryScrollController widget. You cannot both set primary to " + "true and pass an explicit controller.", I[0], 157, 10, "!(controller != null && (primary ?? false))");
    single_child_scroll_view.SingleChildScrollView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = single_child_scroll_view.SingleChildScrollView.prototype;
  dart.addTypeTests(single_child_scroll_view.SingleChildScrollView);
  dart.addTypeCaches(single_child_scroll_view.SingleChildScrollView);
  dart.setMethodSignature(single_child_scroll_view.SingleChildScrollView, () => ({
    __proto__: dart.getMethods(single_child_scroll_view.SingleChildScrollView.__proto__),
    [_getDirection]: dart.fnType(basic_types.AxisDirection, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(single_child_scroll_view.SingleChildScrollView, I[1]);
  dart.setFieldSignature(single_child_scroll_view.SingleChildScrollView, () => ({
    __proto__: dart.getFields(single_child_scroll_view.SingleChildScrollView.__proto__),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    reverse: dart.finalFieldType(core.bool),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    controller: dart.finalFieldType(dart.nullable(scroll_controller.ScrollController)),
    primary: dart.finalFieldType(dart.nullable(core.bool)),
    physics: dart.finalFieldType(dart.nullable(scroll_physics.ScrollPhysics)),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    clipBehavior: dart.finalFieldType(ui.Clip),
    restorationId: dart.finalFieldType(dart.nullable(core.String)),
    keyboardDismissBehavior: dart.finalFieldType(scroll_view.ScrollViewKeyboardDismissBehavior)
  }));
  var axisDirection$ = dart.privateName(single_child_scroll_view, "_SingleChildViewport.axisDirection");
  var offset$ = dart.privateName(single_child_scroll_view, "_SingleChildViewport.offset");
  var clipBehavior$0 = dart.privateName(single_child_scroll_view, "_SingleChildViewport.clipBehavior");
  single_child_scroll_view._SingleChildViewport = class _SingleChildViewport extends framework.SingleChildRenderObjectWidget {
    get axisDirection() {
      return this[axisDirection$];
    }
    set axisDirection(value) {
      super.axisDirection = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[10] || CT.C10;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new single_child_scroll_view._SingleChildViewport.new({axisDirection: axisDirection, offset: offset, child: child, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    createRenderObject(context) {
      return new single_child_scroll_view._RenderSingleChildViewport.new({axisDirection: this.axisDirection, offset: this.offset, clipBehavior: this.clipBehavior});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      single_child_scroll_view._RenderSingleChildViewport.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.axisDirection = this.axisDirection;
        t0.offset = this.offset;
        t0.clipBehavior = this.clipBehavior;
        return t0;
      })();
    }
    createElement() {
      return new single_child_scroll_view._SingleChildViewportElement.new(this);
    }
  };
  (single_child_scroll_view._SingleChildViewport.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[10] || CT.C10;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[axisDirection$] = axisDirection;
    this[offset$] = offset;
    this[clipBehavior$0] = clipBehavior;
    if (!(axisDirection !== null)) dart.assertFailed(null, I[0], 290, 15, "axisDirection != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 291, 15, "clipBehavior != null");
    single_child_scroll_view._SingleChildViewport.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = single_child_scroll_view._SingleChildViewport.prototype;
  dart.addTypeTests(single_child_scroll_view._SingleChildViewport);
  dart.addTypeCaches(single_child_scroll_view._SingleChildViewport);
  dart.setMethodSignature(single_child_scroll_view._SingleChildViewport, () => ({
    __proto__: dart.getMethods(single_child_scroll_view._SingleChildViewport.__proto__),
    createRenderObject: dart.fnType(single_child_scroll_view._RenderSingleChildViewport, [framework.BuildContext])
  }));
  dart.setLibraryUri(single_child_scroll_view._SingleChildViewport, I[1]);
  dart.setFieldSignature(single_child_scroll_view._SingleChildViewport, () => ({
    __proto__: dart.getFields(single_child_scroll_view._SingleChildViewport.__proto__),
    axisDirection: dart.finalFieldType(basic_types.AxisDirection),
    offset: dart.finalFieldType(viewport_offset.ViewportOffset),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  const SingleChildRenderObjectElement_NotifiableElementMixin$36 = class SingleChildRenderObjectElement_NotifiableElementMixin extends framework.SingleChildRenderObjectElement {};
  (SingleChildRenderObjectElement_NotifiableElementMixin$36.new = function(widget) {
    SingleChildRenderObjectElement_NotifiableElementMixin$36.__proto__.new.call(this, widget);
  }).prototype = SingleChildRenderObjectElement_NotifiableElementMixin$36.prototype;
  dart.applyMixin(SingleChildRenderObjectElement_NotifiableElementMixin$36, framework.NotifiableElementMixin);
  const SingleChildRenderObjectElement_ViewportElementMixin$36 = class SingleChildRenderObjectElement_ViewportElementMixin extends SingleChildRenderObjectElement_NotifiableElementMixin$36 {};
  (SingleChildRenderObjectElement_ViewportElementMixin$36.new = function(widget) {
    SingleChildRenderObjectElement_ViewportElementMixin$36.__proto__.new.call(this, widget);
  }).prototype = SingleChildRenderObjectElement_ViewportElementMixin$36.prototype;
  dart.applyMixin(SingleChildRenderObjectElement_ViewportElementMixin$36, scroll_notification.ViewportElementMixin);
  single_child_scroll_view._SingleChildViewportElement = class _SingleChildViewportElement extends SingleChildRenderObjectElement_ViewportElementMixin$36 {
    static ['_#new#tearOff'](widget) {
      return new single_child_scroll_view._SingleChildViewportElement.new(widget);
    }
  };
  (single_child_scroll_view._SingleChildViewportElement.new = function(widget) {
    single_child_scroll_view._SingleChildViewportElement.__proto__.new.call(this, widget);
    ;
  }).prototype = single_child_scroll_view._SingleChildViewportElement.prototype;
  dart.addTypeTests(single_child_scroll_view._SingleChildViewportElement);
  dart.addTypeCaches(single_child_scroll_view._SingleChildViewportElement);
  dart.setLibraryUri(single_child_scroll_view._SingleChildViewportElement, I[1]);
  var _clipBehavior = dart.privateName(single_child_scroll_view, "_clipBehavior");
  var _clipRectLayer = dart.privateName(single_child_scroll_view, "_clipRectLayer");
  var _axisDirection = dart.privateName(single_child_scroll_view, "_axisDirection");
  var _offset = dart.privateName(single_child_scroll_view, "_offset");
  var _cacheExtent = dart.privateName(single_child_scroll_view, "_cacheExtent");
  var _hasScrolled = dart.privateName(single_child_scroll_view, "_hasScrolled");
  var _viewportExtent = dart.privateName(single_child_scroll_view, "_viewportExtent");
  var _minScrollExtent = dart.privateName(single_child_scroll_view, "_minScrollExtent");
  var _maxScrollExtent = dart.privateName(single_child_scroll_view, "_maxScrollExtent");
  var _getInnerConstraints = dart.privateName(single_child_scroll_view, "_getInnerConstraints");
  var _paintOffsetForPosition = dart.privateName(single_child_scroll_view, "_paintOffsetForPosition");
  var _paintOffset = dart.privateName(single_child_scroll_view, "_paintOffset");
  var _shouldClipAtPaintOffset = dart.privateName(single_child_scroll_view, "_shouldClipAtPaintOffset");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  single_child_scroll_view._RenderSingleChildViewport = class _RenderSingleChildViewport extends RenderBox_RenderObjectWithChildMixin$36 {
    static ['_#new#tearOff'](opts) {
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[10] || CT.C10;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : 250;
      let child = opts && 'child' in opts ? opts.child : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new single_child_scroll_view._RenderSingleChildViewport.new({axisDirection: axisDirection, offset: offset, cacheExtent: cacheExtent, child: child, clipBehavior: clipBehavior});
    }
    get axisDirection() {
      return this[_axisDirection];
    }
    set axisDirection(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 346, 12, "value != null");
      if (value === this[_axisDirection]) {
        return;
      }
      this[_axisDirection] = value;
      this.markNeedsLayout();
    }
    get axis() {
      return basic_types.axisDirectionToAxis(this.axisDirection);
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 359, 12, "value != null");
      if (value[$_equals](this[_offset])) {
        return;
      }
      if (this.attached) {
        this[_offset].removeListener(dart.bind(this, _hasScrolled));
      }
      this[_offset] = value;
      if (this.attached) {
        this[_offset].addListener(dart.bind(this, _hasScrolled));
      }
      this.markNeedsLayout();
    }
    get cacheExtent() {
      return this[_cacheExtent];
    }
    set cacheExtent(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 377, 12, "value != null");
      if (value === this[_cacheExtent]) {
        return;
      }
      this[_cacheExtent] = value;
      this.markNeedsLayout();
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 391, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    [_hasScrolled]() {
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!object.ParentData.is(child.parentData)) {
        child.parentData = new object.ParentData.new();
      }
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      super.attach(owner);
      this[_offset].addListener(dart.bind(this, _hasScrolled));
    }
    detach() {
      this[_offset].removeListener(dart.bind(this, _hasScrolled));
      super.detach();
    }
    get isRepaintBoundary() {
      return true;
    }
    get [_viewportExtent]() {
      if (!this.hasSize) dart.assertFailed(null, I[0], 429, 12, "hasSize");
      switch (this.axis) {
        case C[12] || CT.C12:
          {
            return this.size.width;
          }
        case C[0] || CT.C0:
          {
            return this.size.height;
          }
      }
    }
    get [_minScrollExtent]() {
      if (!this.hasSize) dart.assertFailed(null, I[0], 439, 12, "hasSize");
      return 0.0;
    }
    get [_maxScrollExtent]() {
      if (!this.hasSize) dart.assertFailed(null, I[0], 444, 12, "hasSize");
      if (this.child == null) {
        return 0.0;
      }
      switch (this.axis) {
        case C[12] || CT.C12:
          {
            return math.max(core.double, 0.0, dart.nullCheck(this.child).size.width - this.size.width);
          }
        case C[0] || CT.C0:
          {
            return math.max(core.double, 0.0, dart.nullCheck(this.child).size.height - this.size.height);
          }
      }
    }
    [_getInnerConstraints](constraints) {
      switch (this.axis) {
        case C[12] || CT.C12:
          {
            return constraints.heightConstraints();
          }
        case C[0] || CT.C0:
          {
            return constraints.widthConstraints();
          }
      }
    }
    computeMinIntrinsicWidth(height) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
      }
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
      }
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getMinIntrinsicHeight(width);
      }
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
      }
      return 0.0;
    }
    computeDryLayout(constraints) {
      if (this.child == null) {
        return constraints.smallest;
      }
      let childSize = dart.nullCheck(this.child).getDryLayout(this[_getInnerConstraints](constraints));
      return constraints.constrain(childSize);
    }
    performLayout() {
      let constraints = this.constraints;
      if (this.child == null) {
        this.size = constraints.smallest;
      } else {
        dart.nullCheck(this.child).layout(this[_getInnerConstraints](constraints), {parentUsesSize: true});
        this.size = constraints.constrain(dart.nullCheck(this.child).size);
      }
      this.offset.applyViewportDimension(this[_viewportExtent]);
      this.offset.applyContentDimensions(this[_minScrollExtent], this[_maxScrollExtent]);
    }
    get [_paintOffset]() {
      return this[_paintOffsetForPosition](this.offset.pixels);
    }
    [_paintOffsetForPosition](position) {
      if (!(this.axisDirection !== null)) dart.assertFailed(null, I[0], 528, 12, "axisDirection != null");
      switch (this.axisDirection) {
        case C[13] || CT.C13:
          {
            return new ui.Offset.new(0.0, position - dart.nullCheck(this.child).size.height + this.size.height);
          }
        case C[10] || CT.C10:
          {
            return new ui.Offset.new(0.0, -position);
          }
        case C[14] || CT.C14:
          {
            return new ui.Offset.new(position - dart.nullCheck(this.child).size.width + this.size.width, 0.0);
          }
        case C[15] || CT.C15:
          {
            return new ui.Offset.new(-position, 0.0);
          }
      }
    }
    [_shouldClipAtPaintOffset](paintOffset) {
      if (!(this.child != null)) dart.assertFailed(null, I[0], 542, 12, "child != null");
      switch (this.clipBehavior) {
        case C[16] || CT.C16:
          {
            return false;
          }
        case C[2] || CT.C2:
        case C[17] || CT.C17:
        case C[18] || CT.C18:
          {
            return paintOffset.dx < 0 || paintOffset.dy < 0 || paintOffset.dx + dart.nullCheck(this.child).size.width > this.size.width || paintOffset.dy + dart.nullCheck(this.child).size.height > this.size.height;
          }
      }
    }
    paint(context, offset) {
      if (this.child != null) {
        let paintOffset = this[_paintOffset];
        const paintContents = (context, offset) => {
          context.paintChild(dart.nullCheck(this.child), offset['+'](paintOffset));
        };
        dart.fn(paintContents, T.PaintingContextAndOffsetTovoid());
        if (this[_shouldClipAtPaintOffset](paintOffset)) {
          this[_clipRectLayer].layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), paintContents, {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
        } else {
          this[_clipRectLayer].layer = null;
          paintContents(context, offset);
        }
      }
    }
    dispose() {
      this[_clipRectLayer].layer = null;
      super.dispose();
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      let paintOffset = this[_paintOffset];
      transform.translate(paintOffset.dx, paintOffset.dy);
    }
    describeApproximatePaintClip(child) {
      T.RenderObjectN().as(child);
      if (child != null && this[_shouldClipAtPaintOffset](this[_paintOffset])) {
        return ui.Offset.zero['&'](this.size);
      }
      return null;
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this.child != null) {
        return result.addWithPaintOffset({offset: this[_paintOffset], position: position, hitTest: dart.fn((result, transformed) => {
            if (!transformed._equals(position['+'](this[_paintOffset]._negate()))) dart.assertFailed(null, I[0], 610, 18, "transformed == position + -_paintOffset");
            return dart.nullCheck(this.child).hitTest(result, {position: transformed});
          }, T.BoxHitTestResultAndOffsetTobool())});
      }
      return false;
    }
    getOffsetToReveal(target, alignment, opts) {
      let rect = opts && 'rect' in opts ? opts.rect : null;
      rect == null ? rect = target.paintBounds : null;
      if (!box.RenderBox.is(target)) {
        return new viewport.RevealedOffset.new({offset: this.offset.pixels, rect: rect});
      }
      let targetBox = target;
      let transform = targetBox.getTransformTo(this.child);
      let bounds = matrix_utils.MatrixUtils.transformRect(transform, rect);
      let contentSize = dart.nullCheck(this.child).size;
      let leadingScrollOffset = null;
      let targetMainAxisExtent = null;
      let mainAxisExtent = null;
      if (!(this.axisDirection !== null)) dart.assertFailed(null, I[0], 634, 12, "axisDirection != null");
      switch (this.axisDirection) {
        case C[13] || CT.C13:
          {
            mainAxisExtent = this.size.height;
            leadingScrollOffset = contentSize.height - bounds.bottom;
            targetMainAxisExtent = bounds.height;
            break;
          }
        case C[15] || CT.C15:
          {
            mainAxisExtent = this.size.width;
            leadingScrollOffset = bounds.left;
            targetMainAxisExtent = bounds.width;
            break;
          }
        case C[10] || CT.C10:
          {
            mainAxisExtent = this.size.height;
            leadingScrollOffset = bounds.top;
            targetMainAxisExtent = bounds.height;
            break;
          }
        case C[14] || CT.C14:
          {
            mainAxisExtent = this.size.width;
            leadingScrollOffset = contentSize.width - bounds.right;
            targetMainAxisExtent = bounds.width;
            break;
          }
      }
      let targetOffset = leadingScrollOffset - (mainAxisExtent - targetMainAxisExtent) * alignment;
      let targetRect = bounds.shift(this[_paintOffsetForPosition](targetOffset));
      return new viewport.RevealedOffset.new({offset: targetOffset, rect: targetRect});
    }
    showOnScreen(opts) {
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[19] || CT.C19;
      let curve = opts && 'curve' in opts ? opts.curve : C[20] || CT.C20;
      if (!this.offset.allowImplicitScrolling) {
        return super.showOnScreen({descendant: descendant, rect: rect, duration: duration, curve: curve});
      }
      let newRect = viewport.RenderViewportBase.showInViewport({descendant: descendant, viewport: this, offset: this.offset, rect: rect, duration: duration, curve: curve});
      super.showOnScreen({rect: newRect, duration: duration, curve: curve});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfOffset()).new("offset", this[_paintOffset]));
    }
    describeSemanticsClip(child) {
      object.RenderObject.as(child);
      if (!(this.axis !== null)) dart.assertFailed(null, I[0], 702, 12, "axis != null");
      switch (this.axis) {
        case C[0] || CT.C0:
          {
            return new ui.Rect.fromLTRB(this.semanticBounds.left, this.semanticBounds.top - this.cacheExtent, this.semanticBounds.right, this.semanticBounds.bottom + this.cacheExtent);
          }
        case C[12] || CT.C12:
          {
            return new ui.Rect.fromLTRB(this.semanticBounds.left - this.cacheExtent, this.semanticBounds.top, this.semanticBounds.right + this.cacheExtent, this.semanticBounds.bottom);
          }
      }
    }
  };
  (single_child_scroll_view._RenderSingleChildViewport.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[10] || CT.C10;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : 250;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    this[_clipBehavior] = ui.Clip.none;
    this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
    if (!(axisDirection !== null)) dart.assertFailed(null, I[0], 332, 15, "axisDirection != null");
    if (!(offset !== null)) dart.assertFailed(null, I[0], 333, 15, "offset != null");
    if (!(cacheExtent !== null)) dart.assertFailed(null, I[0], 334, 15, "cacheExtent != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 335, 15, "clipBehavior != null");
    this[_axisDirection] = axisDirection;
    this[_offset] = offset;
    this[_cacheExtent] = cacheExtent;
    this[_clipBehavior] = clipBehavior;
    single_child_scroll_view._RenderSingleChildViewport.__proto__.new.call(this);
    this.child = child;
  }).prototype = single_child_scroll_view._RenderSingleChildViewport.prototype;
  dart.addTypeTests(single_child_scroll_view._RenderSingleChildViewport);
  dart.addTypeCaches(single_child_scroll_view._RenderSingleChildViewport);
  single_child_scroll_view._RenderSingleChildViewport[dart.implements] = () => [viewport.RenderAbstractViewport];
  dart.setMethodSignature(single_child_scroll_view._RenderSingleChildViewport, () => ({
    __proto__: dart.getMethods(single_child_scroll_view._RenderSingleChildViewport.__proto__),
    [_hasScrolled]: dart.fnType(dart.void, []),
    [_getInnerConstraints]: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    [_paintOffsetForPosition]: dart.fnType(ui.Offset, [core.double]),
    [_shouldClipAtPaintOffset]: dart.fnType(core.bool, [ui.Offset]),
    getOffsetToReveal: dart.fnType(viewport.RevealedOffset, [object.RenderObject, core.double], {rect: dart.nullable(ui.Rect)}, {}),
    describeSemanticsClip: dart.fnType(ui.Rect, [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(single_child_scroll_view._RenderSingleChildViewport, () => ({
    __proto__: dart.getGetters(single_child_scroll_view._RenderSingleChildViewport.__proto__),
    axisDirection: basic_types.AxisDirection,
    axis: basic_types.Axis,
    offset: viewport_offset.ViewportOffset,
    cacheExtent: core.double,
    clipBehavior: ui.Clip,
    [_viewportExtent]: core.double,
    [_minScrollExtent]: core.double,
    [_maxScrollExtent]: core.double,
    [_paintOffset]: ui.Offset
  }));
  dart.setSetterSignature(single_child_scroll_view._RenderSingleChildViewport, () => ({
    __proto__: dart.getSetters(single_child_scroll_view._RenderSingleChildViewport.__proto__),
    axisDirection: basic_types.AxisDirection,
    offset: viewport_offset.ViewportOffset,
    cacheExtent: core.double,
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(single_child_scroll_view._RenderSingleChildViewport, I[1]);
  dart.setFieldSignature(single_child_scroll_view._RenderSingleChildViewport, () => ({
    __proto__: dart.getFields(single_child_scroll_view._RenderSingleChildViewport.__proto__),
    [_axisDirection]: dart.fieldType(basic_types.AxisDirection),
    [_offset]: dart.fieldType(viewport_offset.ViewportOffset),
    [_cacheExtent]: dart.fieldType(core.double),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/single_child_scroll_view.dart", {
    "package:flutter/src/widgets/single_child_scroll_view.dart": single_child_scroll_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["single_child_scroll_view.dart","framework.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/single_child_scroll_view.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__single_child_scroll_view: single_child_scroll_view
  };
}));

//# sourceMappingURL=single_child_scroll_view.dart.lib.js.map
