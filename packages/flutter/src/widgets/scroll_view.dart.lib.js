define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/key.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/sliver_prototype_extent_list.dart', 'packages/flutter/src/rendering/sliver_grid.dart'], (function load__packages__flutter__src__widgets__scroll_view_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__key$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__sliver_prototype_extent_list$46dart, packages__flutter__src__rendering__sliver_grid$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const scroll_physics = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_physics;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const debug = packages__flutter__src__widgets__title$46dart.src__widgets__debug;
  const viewport = packages__flutter__src__widgets__title$46dart.src__widgets__viewport;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const primary_scroll_controller = packages__flutter__src__widgets__title$46dart.src__widgets__primary_scroll_controller;
  const scrollable$ = packages__flutter__src__widgets__title$46dart.src__widgets__scrollable;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const notification_listener = packages__flutter__src__widgets__title$46dart.src__widgets__notification_listener;
  const scroll_notification = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_notification;
  const focus_scope = packages__flutter__src__widgets__title$46dart.src__widgets__focus_scope;
  const scroll_controller = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_controller;
  const scroll_configuration = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_configuration;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const sliver = packages__flutter__src__widgets__title$46dart.src__widgets__sliver;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const sliver_prototype_extent_list = packages__flutter__src__widgets__sliver_prototype_extent_list$46dart.src__widgets__sliver_prototype_extent_list;
  const sliver_grid = packages__flutter__src__rendering__sliver_grid$46dart.src__rendering__sliver_grid;
  var scroll_view = Object.create(dart.library);
  var $length = dartx.length;
  var $truncate = dartx.truncate;
  var $isEven = dartx.isEven;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    BuildContextAndViewportOffsetToWidget: () => (T.BuildContextAndViewportOffsetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, viewport_offset.ViewportOffset])))(),
    NotificationListenerOfScrollUpdateNotification: () => (T.NotificationListenerOfScrollUpdateNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollUpdateNotification)))(),
    ScrollUpdateNotificationTobool: () => (T.ScrollUpdateNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollUpdateNotification])))(),
    EnumPropertyOfAxis: () => (T.EnumPropertyOfAxis = dart.constFn(diagnostics.EnumProperty$(basic_types.Axis)))(),
    DiagnosticsPropertyOfScrollController: () => (T.DiagnosticsPropertyOfScrollController = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_controller.ScrollController)))(),
    DiagnosticsPropertyOfScrollPhysics: () => (T.DiagnosticsPropertyOfScrollPhysics = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_physics.ScrollPhysics)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    DiagnosticsPropertyOfEdgeInsetsGeometry: () => (T.DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))(),
    BuildContextAndintToWidget: () => (T.BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    WidgetAndintTointN: () => (T.WidgetAndintTointN = dart.constFn(dart.fnType(T.intN(), [framework.Widget, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: scroll_view.ScrollViewKeyboardDismissBehavior.prototype,
        [_Enum__name]: "manual",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: scroll_view.ScrollViewKeyboardDismissBehavior.prototype,
        [_Enum__name]: "onDrag",
        [_Enum_index]: 1
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2], scroll_view.ScrollViewKeyboardDismissBehavior);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: scroll_physics.AlwaysScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ShrinkWrappingViewport",
        [_Location_column]: 14,
        [_Location_line]: 387,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Viewport",
        [_Location_column]: 12,
        [_Location_line]: 394,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scrollable",
        [_Location_column]: 35,
        [_Location_line]: 417,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PrimaryScrollController",
        [_Location_column]: 35,
        [_Location_line]: 433,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NotificationListener",
        [_Location_column]: 14,
        [_Location_line]: 437,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C16() {
      return C[16] = dart.constList([], framework.Widget);
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomScrollView",
        [_Location_column]: 9,
        [_Location_line]: 594,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MediaQuery",
        [_Location_column]: 18,
        [_Location_line]: 670,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverPadding",
        [_Location_column]: 16,
        [_Location_line]: 682,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 3,
        [_Location_line]: 1056,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 3,
        [_Location_line]: 1120,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 3,
        [_Location_line]: 1210,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ListView",
        [_Location_column]: 9,
        [_Location_line]: 1353,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverFixedExtentList",
        [_Location_column]: 14,
        [_Location_line]: 1426,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverPrototypeExtentList",
        [_Location_column]: 14,
        [_Location_line]: 1431,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverList",
        [_Location_column]: 12,
        [_Location_line]: 1436,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 3,
        [_Location_line]: 1688,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 3,
        [_Location_line]: 1740,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 9,
        [_Location_line]: 1782,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 3,
        [_Location_line]: 1816,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridView",
        [_Location_column]: 3,
        [_Location_line]: 1869,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverGrid",
        [_Location_column]: 12,
        [_Location_line]: 1924,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
      });
    }
  }, false);
  var C = Array(33).fill(void 0);
  var I = [
    "package:flutter/src/widgets/scroll_view.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/scroll_view.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  scroll_view.ScrollViewKeyboardDismissBehavior = class ScrollViewKeyboardDismissBehavior extends core._Enum {
    toString() {
      return "ScrollViewKeyboardDismissBehavior." + this[_name];
    }
  };
  (scroll_view.ScrollViewKeyboardDismissBehavior.new = function(index, name) {
    scroll_view.ScrollViewKeyboardDismissBehavior.__proto__.new.call(this, index, name);
    ;
  }).prototype = scroll_view.ScrollViewKeyboardDismissBehavior.prototype;
  dart.addTypeTests(scroll_view.ScrollViewKeyboardDismissBehavior);
  dart.addTypeCaches(scroll_view.ScrollViewKeyboardDismissBehavior);
  dart.setLibraryUri(scroll_view.ScrollViewKeyboardDismissBehavior, I[0]);
  dart.setStaticFieldSignature(scroll_view.ScrollViewKeyboardDismissBehavior, () => ['values', 'manual', 'onDrag']);
  dart.defineExtensionMethods(scroll_view.ScrollViewKeyboardDismissBehavior, ['toString']);
  dart.defineLazy(scroll_view.ScrollViewKeyboardDismissBehavior, {
    /*scroll_view.ScrollViewKeyboardDismissBehavior.values*/get values() {
      return C[0] || CT.C0;
    },
    /*scroll_view.ScrollViewKeyboardDismissBehavior.manual*/get manual() {
      return C[1] || CT.C1;
    },
    /*scroll_view.ScrollViewKeyboardDismissBehavior.onDrag*/get onDrag() {
      return C[2] || CT.C2;
    }
  }, false);
  var scrollDirection$ = dart.privateName(scroll_view, "ScrollView.scrollDirection");
  var reverse$ = dart.privateName(scroll_view, "ScrollView.reverse");
  var controller$ = dart.privateName(scroll_view, "ScrollView.controller");
  var primary$ = dart.privateName(scroll_view, "ScrollView.primary");
  var physics$ = dart.privateName(scroll_view, "ScrollView.physics");
  var scrollBehavior$ = dart.privateName(scroll_view, "ScrollView.scrollBehavior");
  var shrinkWrap$ = dart.privateName(scroll_view, "ScrollView.shrinkWrap");
  var center$ = dart.privateName(scroll_view, "ScrollView.center");
  var anchor$ = dart.privateName(scroll_view, "ScrollView.anchor");
  var cacheExtent$ = dart.privateName(scroll_view, "ScrollView.cacheExtent");
  var semanticChildCount$ = dart.privateName(scroll_view, "ScrollView.semanticChildCount");
  var dragStartBehavior$ = dart.privateName(scroll_view, "ScrollView.dragStartBehavior");
  var keyboardDismissBehavior$ = dart.privateName(scroll_view, "ScrollView.keyboardDismissBehavior");
  var restorationId$ = dart.privateName(scroll_view, "ScrollView.restorationId");
  var clipBehavior$ = dart.privateName(scroll_view, "ScrollView.clipBehavior");
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  scroll_view.ScrollView = class ScrollView extends framework.StatelessWidget {
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
    get scrollBehavior() {
      return this[scrollBehavior$];
    }
    set scrollBehavior(value) {
      super.scrollBehavior = value;
    }
    get shrinkWrap() {
      return this[shrinkWrap$];
    }
    set shrinkWrap(value) {
      super.shrinkWrap = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get anchor() {
      return this[anchor$];
    }
    set anchor(value) {
      super.anchor = value;
    }
    get cacheExtent() {
      return this[cacheExtent$];
    }
    set cacheExtent(value) {
      super.cacheExtent = value;
    }
    get semanticChildCount() {
      return this[semanticChildCount$];
    }
    set semanticChildCount(value) {
      super.semanticChildCount = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get keyboardDismissBehavior() {
      return this[keyboardDismissBehavior$];
    }
    set keyboardDismissBehavior(value) {
      super.keyboardDismissBehavior = value;
    }
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    getDirection(context) {
      return basic.getAxisDirectionFromAxisReverseAndDirectionality(context, this.scrollDirection, this.reverse);
    }
    buildViewport(context, offset, axisDirection, slivers) {
      if (!dart.fn(() => {
        switch (axisDirection) {
          case C[7] || CT.C7:
          case C[8] || CT.C8:
            {
              return debug.debugCheckHasDirectionality(context, {why: "to determine the cross-axis direction of the scroll view", hint: "Vertical scroll views create Viewport widgets that try to determine their cross axis direction " + "from the ambient Directionality."});
            }
          case C[9] || CT.C9:
          case C[10] || CT.C10:
            {
              return true;
            }
        }
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 371, 12, "() {\n      switch (axisDirection) {\n        case AxisDirection.up:\n        case AxisDirection.down:\n          return debugCheckHasDirectionality(\n            context,\n            why: 'to determine the cross-axis direction of the scroll view',\n            hint: 'Vertical scroll views create Viewport widgets that try to determine their cross axis direction '\n                  'from the ambient Directionality.',\n          );\n        case AxisDirection.left:\n        case AxisDirection.right:\n          return true;\n      }\n    }()");
      if (this.shrinkWrap) {
        return new viewport.ShrinkWrappingViewport.new({axisDirection: axisDirection, offset: offset, slivers: slivers, clipBehavior: this.clipBehavior, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
      }
      return new viewport.Viewport.new({axisDirection: axisDirection, offset: offset, slivers: slivers, cacheExtent: this.cacheExtent, center: this.center, anchor: this.anchor, clipBehavior: this.clipBehavior, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    build(context) {
      let t2;
      let slivers = this.buildSlivers(context);
      let axisDirection = this.getDirection(context);
      let effectivePrimary = (t2 = this.primary, t2 == null ? this.controller == null && primary_scroll_controller.PrimaryScrollController.shouldInherit(context, this.scrollDirection) : t2);
      let scrollController = effectivePrimary ? primary_scroll_controller.PrimaryScrollController.of(context) : this.controller;
      let scrollable = new scrollable$.Scrollable.new({dragStartBehavior: this.dragStartBehavior, axisDirection: axisDirection, controller: scrollController, physics: this.physics, scrollBehavior: this.scrollBehavior, semanticChildCount: this.semanticChildCount, restorationId: this.restorationId, viewportBuilder: dart.fn((context, offset) => this.buildViewport(context, offset, axisDirection, slivers), T.BuildContextAndViewportOffsetToWidget()), clipBehavior: this.clipBehavior, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
      let scrollableResult = effectivePrimary && scrollController != null ? new primary_scroll_controller.PrimaryScrollController.none({child: scrollable, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14}) : scrollable;
      if (this.keyboardDismissBehavior === scroll_view.ScrollViewKeyboardDismissBehavior.onDrag) {
        return new (T.NotificationListenerOfScrollUpdateNotification()).new({child: scrollableResult, onNotification: dart.fn(notification => {
            let focusScope = focus_scope.FocusScope.of(context);
            if (notification.dragDetails != null && focusScope.hasFocus) {
              focusScope.unfocus();
            }
            return false;
          }, T.ScrollUpdateNotificationTobool()), $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
      } else {
        return scrollableResult;
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfAxis()).new("scrollDirection", this.scrollDirection));
      properties.add(new diagnostics.FlagProperty.new("reverse", {value: this.reverse, ifTrue: "reversed", showName: true}));
      properties.add(new (T.DiagnosticsPropertyOfScrollController()).new("controller", this.controller, {showName: false, defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("primary", {value: this.primary, ifTrue: "using primary controller", showName: true}));
      properties.add(new (T.DiagnosticsPropertyOfScrollPhysics()).new("physics", this.physics, {showName: false, defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("shrinkWrap", {value: this.shrinkWrap, ifTrue: "shrink-wrapping", showName: true}));
    }
  };
  (scroll_view.ScrollView.new = function(opts) {
    let t2, t3, t2$;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let center = opts && 'center' in opts ? opts.center : null;
    let anchor = opts && 'anchor' in opts ? opts.anchor : 0;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[controller$] = controller;
    this[primary$] = primary;
    this[scrollBehavior$] = scrollBehavior;
    this[shrinkWrap$] = shrinkWrap;
    this[center$] = center;
    this[anchor$] = anchor;
    this[cacheExtent$] = cacheExtent;
    this[semanticChildCount$] = semanticChildCount;
    this[dragStartBehavior$] = dragStartBehavior;
    this[keyboardDismissBehavior$] = keyboardDismissBehavior;
    this[restorationId$] = restorationId;
    this[clipBehavior$] = clipBehavior;
    if (!(scrollDirection !== null)) dart.assertFailed(null, I[1], 102, 15, "scrollDirection != null");
    if (!(reverse !== null)) dart.assertFailed(null, I[1], 103, 15, "reverse != null");
    if (!(shrinkWrap !== null)) dart.assertFailed(null, I[1], 104, 15, "shrinkWrap != null");
    if (!(dragStartBehavior !== null)) dart.assertFailed(null, I[1], 105, 15, "dragStartBehavior != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 106, 15, "clipBehavior != null");
    if (!!(controller != null && dart.test((t2 = primary, t2 == null ? false : t2)))) dart.assertFailed("Primary ScrollViews obtain their ScrollController via inheritance " + "from a PrimaryScrollController widget. You cannot both set primary to " + "true and pass an explicit controller.", I[1], 108, 10, "!(controller != null && (primary ?? false))");
    if (!(!shrinkWrap || center == null)) dart.assertFailed(null, I[1], 113, 15, "!shrinkWrap || center == null");
    if (!(anchor !== null)) dart.assertFailed(null, I[1], 114, 15, "anchor != null");
    if (!(anchor >= 0.0 && anchor <= 1.0)) dart.assertFailed(null, I[1], 115, 15, "anchor >= 0.0 && anchor <= 1.0");
    if (!(semanticChildCount == null || dart.notNull(semanticChildCount) >= 0)) dart.assertFailed(null, I[1], 116, 15, "semanticChildCount == null || semanticChildCount >= 0");
    this[physics$] = (t2$ = physics, t2$ == null ? dart.test((t3 = primary, t3 == null ? false : t3)) || primary == null && controller == null && scrollDirection === basic_types.Axis.vertical ? C[6] || CT.C6 : null : t2$);
    scroll_view.ScrollView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ScrollView.prototype;
  dart.addTypeTests(scroll_view.ScrollView);
  dart.addTypeCaches(scroll_view.ScrollView);
  dart.setMethodSignature(scroll_view.ScrollView, () => ({
    __proto__: dart.getMethods(scroll_view.ScrollView.__proto__),
    getDirection: dart.fnType(basic_types.AxisDirection, [framework.BuildContext]),
    buildViewport: dart.fnType(framework.Widget, [framework.BuildContext, viewport_offset.ViewportOffset, basic_types.AxisDirection, core.List$(framework.Widget)]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.ScrollView, I[0]);
  dart.setFieldSignature(scroll_view.ScrollView, () => ({
    __proto__: dart.getFields(scroll_view.ScrollView.__proto__),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    reverse: dart.finalFieldType(core.bool),
    controller: dart.finalFieldType(dart.nullable(scroll_controller.ScrollController)),
    primary: dart.finalFieldType(dart.nullable(core.bool)),
    physics: dart.finalFieldType(dart.nullable(scroll_physics.ScrollPhysics)),
    scrollBehavior: dart.finalFieldType(dart.nullable(scroll_configuration.ScrollBehavior)),
    shrinkWrap: dart.finalFieldType(core.bool),
    center: dart.finalFieldType(dart.nullable(key.Key)),
    anchor: dart.finalFieldType(core.double),
    cacheExtent: dart.finalFieldType(dart.nullable(core.double)),
    semanticChildCount: dart.finalFieldType(dart.nullable(core.int)),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    keyboardDismissBehavior: dart.finalFieldType(scroll_view.ScrollViewKeyboardDismissBehavior),
    restorationId: dart.finalFieldType(dart.nullable(core.String)),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  var slivers$ = dart.privateName(scroll_view, "CustomScrollView.slivers");
  scroll_view.CustomScrollView = class CustomScrollView extends scroll_view.ScrollView {
    get slivers() {
      return this[slivers$];
    }
    set slivers(value) {
      super.slivers = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let center = opts && 'center' in opts ? opts.center : null;
      let anchor = opts && 'anchor' in opts ? opts.anchor : null;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let slivers = opts && 'slivers' in opts ? opts.slivers : C[16] || CT.C16;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.CustomScrollView.new({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, scrollBehavior: scrollBehavior, shrinkWrap: shrinkWrap, center: center, anchor: anchor, cacheExtent: cacheExtent, slivers: slivers, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
    }
    buildSlivers(context) {
      return this.slivers;
    }
  };
  (scroll_view.CustomScrollView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let center = opts && 'center' in opts ? opts.center : null;
    let anchor = opts && 'anchor' in opts ? opts.anchor : 0;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let slivers = opts && 'slivers' in opts ? opts.slivers : C[16] || CT.C16;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[slivers$] = slivers;
    scroll_view.CustomScrollView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, scrollBehavior: scrollBehavior, shrinkWrap: shrinkWrap, center: center, anchor: anchor, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.CustomScrollView.prototype;
  dart.addTypeTests(scroll_view.CustomScrollView);
  dart.addTypeCaches(scroll_view.CustomScrollView);
  dart.setMethodSignature(scroll_view.CustomScrollView, () => ({
    __proto__: dart.getMethods(scroll_view.CustomScrollView.__proto__),
    buildSlivers: dart.fnType(core.List$(framework.Widget), [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.CustomScrollView, I[0]);
  dart.setFieldSignature(scroll_view.CustomScrollView, () => ({
    __proto__: dart.getFields(scroll_view.CustomScrollView.__proto__),
    slivers: dart.finalFieldType(core.List$(framework.Widget))
  }));
  var padding$ = dart.privateName(scroll_view, "BoxScrollView.padding");
  scroll_view.BoxScrollView = class BoxScrollView extends scroll_view.ScrollView {
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    buildSlivers(context) {
      let sliver = this.buildChildLayout(context);
      let effectivePadding = this.padding;
      if (this.padding == null) {
        let mediaQuery = media_query.MediaQuery.maybeOf(context);
        if (mediaQuery != null) {
          let mediaQueryHorizontalPadding = mediaQuery.padding.copyWith({top: 0.0, bottom: 0.0});
          let mediaQueryVerticalPadding = mediaQuery.padding.copyWith({left: 0.0, right: 0.0});
          effectivePadding = this.scrollDirection === basic_types.Axis.vertical ? mediaQueryVerticalPadding : mediaQueryHorizontalPadding;
          sliver = new media_query.MediaQuery.new({data: mediaQuery.copyWith({padding: this.scrollDirection === basic_types.Axis.vertical ? mediaQueryHorizontalPadding : mediaQueryVerticalPadding}), child: sliver, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
        }
      }
      if (effectivePadding != null) {
        sliver = new basic.SliverPadding.new({padding: effectivePadding, sliver: sliver, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
      }
      return T.JSArrayOfWidget().of([sliver]);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding, {defaultValue: null}));
    }
  };
  (scroll_view.BoxScrollView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[padding$] = padding;
    scroll_view.BoxScrollView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.BoxScrollView.prototype;
  dart.addTypeTests(scroll_view.BoxScrollView);
  dart.addTypeCaches(scroll_view.BoxScrollView);
  dart.setMethodSignature(scroll_view.BoxScrollView, () => ({
    __proto__: dart.getMethods(scroll_view.BoxScrollView.__proto__),
    buildSlivers: dart.fnType(core.List$(framework.Widget), [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.BoxScrollView, I[0]);
  dart.setFieldSignature(scroll_view.BoxScrollView, () => ({
    __proto__: dart.getFields(scroll_view.BoxScrollView.__proto__),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry))
  }));
  var itemExtent$ = dart.privateName(scroll_view, "ListView.itemExtent");
  var prototypeItem$ = dart.privateName(scroll_view, "ListView.prototypeItem");
  var childrenDelegate$ = dart.privateName(scroll_view, "ListView.childrenDelegate");
  scroll_view.ListView = class ListView extends scroll_view.BoxScrollView {
    get itemExtent() {
      return this[itemExtent$];
    }
    set itemExtent(value) {
      super.itemExtent = value;
    }
    get prototypeItem() {
      return this[prototypeItem$];
    }
    set prototypeItem(value) {
      super.prototypeItem = value;
    }
    get childrenDelegate() {
      return this[childrenDelegate$];
    }
    set childrenDelegate(value) {
      super.childrenDelegate = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
      let prototypeItem = opts && 'prototypeItem' in opts ? opts.prototypeItem : null;
      let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
      let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
      let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let children = opts && 'children' in opts ? opts.children : C[16] || CT.C16;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.ListView.new({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, itemExtent: itemExtent, prototypeItem: prototypeItem, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, cacheExtent: cacheExtent, children: children, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
    }
    static ['_#builder#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
      let prototypeItem = opts && 'prototypeItem' in opts ? opts.prototypeItem : null;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let findChildIndexCallback = opts && 'findChildIndexCallback' in opts ? opts.findChildIndexCallback : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
      let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
      let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.ListView.builder({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, itemExtent: itemExtent, prototypeItem: prototypeItem, itemBuilder: itemBuilder, findChildIndexCallback: findChildIndexCallback, itemCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[21] || CT.C21});
    }
    static ['_#separated#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let findChildIndexCallback = opts && 'findChildIndexCallback' in opts ? opts.findChildIndexCallback : null;
      let separatorBuilder = opts && 'separatorBuilder' in opts ? opts.separatorBuilder : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
      let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
      let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.ListView.separated({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, itemBuilder: itemBuilder, findChildIndexCallback: findChildIndexCallback, separatorBuilder: separatorBuilder, itemCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, cacheExtent: cacheExtent, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
    }
    static ['_#custom#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
      let prototypeItem = opts && 'prototypeItem' in opts ? opts.prototypeItem : null;
      let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.ListView.custom({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, itemExtent: itemExtent, prototypeItem: prototypeItem, childrenDelegate: childrenDelegate, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[23] || CT.C23});
    }
    buildChildLayout(context) {
      if (this.itemExtent != null) {
        return new sliver.SliverFixedExtentList.new({delegate: this.childrenDelegate, itemExtent: dart.nullCheck(this.itemExtent), $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
      } else if (this.prototypeItem != null) {
        return new sliver_prototype_extent_list.SliverPrototypeExtentList.new({delegate: this.childrenDelegate, prototypeItem: dart.nullCheck(this.prototypeItem), $creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
      }
      return new sliver.SliverList.new({delegate: this.childrenDelegate, $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("itemExtent", this.itemExtent, {defaultValue: null}));
    }
    static _computeActualChildCount(itemCount) {
      return math.max(core.int, 0, itemCount * 2 - 1);
    }
  };
  (scroll_view.ListView.new = function(opts) {
    let t2;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
    let prototypeItem = opts && 'prototypeItem' in opts ? opts.prototypeItem : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let children = opts && 'children' in opts ? opts.children : C[16] || CT.C16;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemExtent$] = itemExtent;
    this[prototypeItem$] = prototypeItem;
    if (!(itemExtent == null || prototypeItem == null)) dart.assertFailed("You can only pass itemExtent or prototypeItem, not both.", I[1], 1078, 10, "itemExtent == null || prototypeItem == null");
    this[childrenDelegate$] = new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.ListView.__proto__.new.call(this, {semanticChildCount: (t2 = semanticChildCount, t2 == null ? children[$length] : t2), key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ListView.prototype;
  (scroll_view.ListView.builder = function(opts) {
    let t2;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
    let prototypeItem = opts && 'prototypeItem' in opts ? opts.prototypeItem : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let findChildIndexCallback = opts && 'findChildIndexCallback' in opts ? opts.findChildIndexCallback : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemExtent$] = itemExtent;
    this[prototypeItem$] = prototypeItem;
    if (!(itemCount == null || dart.notNull(itemCount) >= 0)) dart.assertFailed(null, I[1], 1143, 15, "itemCount == null || itemCount >= 0");
    if (!(semanticChildCount == null || dart.notNull(semanticChildCount) <= dart.nullCheck(itemCount))) dart.assertFailed(null, I[1], 1144, 15, "semanticChildCount == null || semanticChildCount <= itemCount!");
    if (!(itemExtent == null || prototypeItem == null)) dart.assertFailed("You can only pass itemExtent or prototypeItem, not both.", I[1], 1146, 10, "itemExtent == null || prototypeItem == null");
    this[childrenDelegate$] = new sliver.SliverChildBuilderDelegate.new(itemBuilder, {findChildIndexCallback: findChildIndexCallback, childCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.ListView.__proto__.new.call(this, {semanticChildCount: (t2 = semanticChildCount, t2 == null ? itemCount : t2), key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ListView.prototype;
  (scroll_view.ListView.separated = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let findChildIndexCallback = opts && 'findChildIndexCallback' in opts ? opts.findChildIndexCallback : null;
    let separatorBuilder = opts && 'separatorBuilder' in opts ? opts.separatorBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(itemBuilder !== null)) dart.assertFailed(null, I[1], 1231, 15, "itemBuilder != null");
    if (!(separatorBuilder !== null)) dart.assertFailed(null, I[1], 1232, 15, "separatorBuilder != null");
    if (!(itemCount !== null && itemCount >= 0)) dart.assertFailed(null, I[1], 1233, 15, "itemCount != null && itemCount >= 0");
    this[itemExtent$] = null;
    this[prototypeItem$] = null;
    this[childrenDelegate$] = new sliver.SliverChildBuilderDelegate.new(dart.fn((context, index) => {
      let itemIndex = (index / 2)[$truncate]();
      let widget = null;
      if (index[$isEven]) {
        widget = itemBuilder(context, itemIndex);
      } else {
        widget = separatorBuilder(context, itemIndex);
        if (!dart.fn(() => {
          if (widget === null) {
            dart.throw(assertions.FlutterError.new("separatorBuilder cannot return null."));
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1244, 21, "() {\n               if (widget == null) {\n                 throw FlutterError('separatorBuilder cannot return null.');\n               }\n               return true;\n             }()");
      }
      return widget;
    }, T.BuildContextAndintToWidget()), {findChildIndexCallback: findChildIndexCallback, childCount: scroll_view.ListView._computeActualChildCount(itemCount), addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, semanticIndexCallback: dart.fn((_, index) => index[$isEven] ? (index / 2)[$truncate]() : null, T.WidgetAndintTointN())});
    scroll_view.ListView.__proto__.new.call(this, {semanticChildCount: itemCount, key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ListView.prototype;
  (scroll_view.ListView.custom = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
    let prototypeItem = opts && 'prototypeItem' in opts ? opts.prototypeItem : null;
    let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemExtent$] = itemExtent;
    this[prototypeItem$] = prototypeItem;
    this[childrenDelegate$] = childrenDelegate;
    if (!(childrenDelegate !== null)) dart.assertFailed(null, I[1], 1371, 15, "childrenDelegate != null");
    if (!(itemExtent == null || prototypeItem == null)) dart.assertFailed("You can only pass itemExtent or prototypeItem, not both", I[1], 1373, 10, "itemExtent == null || prototypeItem == null");
    scroll_view.ListView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.ListView.prototype;
  dart.addTypeTests(scroll_view.ListView);
  dart.addTypeCaches(scroll_view.ListView);
  dart.setMethodSignature(scroll_view.ListView, () => ({
    __proto__: dart.getMethods(scroll_view.ListView.__proto__),
    buildChildLayout: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(scroll_view.ListView, () => ['_computeActualChildCount']);
  dart.setLibraryUri(scroll_view.ListView, I[0]);
  dart.setFieldSignature(scroll_view.ListView, () => ({
    __proto__: dart.getFields(scroll_view.ListView.__proto__),
    itemExtent: dart.finalFieldType(dart.nullable(core.double)),
    prototypeItem: dart.finalFieldType(dart.nullable(framework.Widget)),
    childrenDelegate: dart.finalFieldType(sliver.SliverChildDelegate)
  }));
  var gridDelegate$ = dart.privateName(scroll_view, "GridView.gridDelegate");
  var childrenDelegate$0 = dart.privateName(scroll_view, "GridView.childrenDelegate");
  scroll_view.GridView = class GridView extends scroll_view.BoxScrollView {
    get gridDelegate() {
      return this[gridDelegate$];
    }
    set gridDelegate(value) {
      super.gridDelegate = value;
    }
    get childrenDelegate() {
      return this[childrenDelegate$0];
    }
    set childrenDelegate(value) {
      super.childrenDelegate = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
      let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
      let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
      let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let children = opts && 'children' in opts ? opts.children : C[16] || CT.C16;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      return new scroll_view.GridView.new({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, gridDelegate: gridDelegate, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, cacheExtent: cacheExtent, children: children, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, clipBehavior: clipBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27});
    }
    static ['_#builder#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let findChildIndexCallback = opts && 'findChildIndexCallback' in opts ? opts.findChildIndexCallback : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
      let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
      let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.GridView.builder({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, gridDelegate: gridDelegate, itemBuilder: itemBuilder, findChildIndexCallback: findChildIndexCallback, itemCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[28] || CT.C28});
    }
    static ['_#custom#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
      let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.GridView.custom({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, gridDelegate: gridDelegate, childrenDelegate: childrenDelegate, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[29] || CT.C29});
    }
    static ['_#count#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
      let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
      let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
      let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
      let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
      let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
      let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let children = opts && 'children' in opts ? opts.children : C[16] || CT.C16;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.GridView.count({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, crossAxisCount: crossAxisCount, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, childAspectRatio: childAspectRatio, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, cacheExtent: cacheExtent, children: children, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
    }
    static ['_#extent#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
      let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
      let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
      let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
      let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
      let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
      let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let children = opts && 'children' in opts ? opts.children : C[16] || CT.C16;
      let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : null;
      let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      return new scroll_view.GridView.extent({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, maxCrossAxisExtent: maxCrossAxisExtent, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, childAspectRatio: childAspectRatio, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes, cacheExtent: cacheExtent, children: children, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[31] || CT.C31});
    }
    buildChildLayout(context) {
      return new sliver.SliverGrid.new({delegate: this.childrenDelegate, gridDelegate: this.gridDelegate, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
    }
  };
  (scroll_view.GridView.new = function(opts) {
    let t2;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let children = opts && 'children' in opts ? opts.children : C[16] || CT.C16;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = gridDelegate;
    if (!(gridDelegate !== null)) dart.assertFailed(null, I[1], 1708, 15, "gridDelegate != null");
    this[childrenDelegate$0] = new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.GridView.__proto__.new.call(this, {semanticChildCount: (t2 = semanticChildCount, t2 == null ? children[$length] : t2), key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, dragStartBehavior: dragStartBehavior, clipBehavior: clipBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  (scroll_view.GridView.builder = function(opts) {
    let t2;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let findChildIndexCallback = opts && 'findChildIndexCallback' in opts ? opts.findChildIndexCallback : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = gridDelegate;
    if (!(gridDelegate !== null)) dart.assertFailed(null, I[1], 1762, 15, "gridDelegate != null");
    this[childrenDelegate$0] = new sliver.SliverChildBuilderDelegate.new(itemBuilder, {findChildIndexCallback: findChildIndexCallback, childCount: itemCount, addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.GridView.__proto__.new.call(this, {semanticChildCount: (t2 = semanticChildCount, t2 == null ? itemCount : t2), key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  (scroll_view.GridView.custom = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = gridDelegate;
    this[childrenDelegate$0] = childrenDelegate;
    if (!(gridDelegate !== null)) dart.assertFailed(null, I[1], 1799, 15, "gridDelegate != null");
    if (!(childrenDelegate !== null)) dart.assertFailed(null, I[1], 1800, 15, "childrenDelegate != null");
    scroll_view.GridView.__proto__.new.call(this, {key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, semanticChildCount: semanticChildCount, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  (scroll_view.GridView.count = function(opts) {
    let t2;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let children = opts && 'children' in opts ? opts.children : C[16] || CT.C16;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: crossAxisCount, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, childAspectRatio: childAspectRatio});
    this[childrenDelegate$0] = new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.GridView.__proto__.new.call(this, {semanticChildCount: (t2 = semanticChildCount, t2 == null ? children[$length] : t2), key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  (scroll_view.GridView.extent = function(opts) {
    let t2;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[3] || CT.C3;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
    let addAutomaticKeepAlives = opts && 'addAutomaticKeepAlives' in opts ? opts.addAutomaticKeepAlives : true;
    let addRepaintBoundaries = opts && 'addRepaintBoundaries' in opts ? opts.addRepaintBoundaries : true;
    let addSemanticIndexes = opts && 'addSemanticIndexes' in opts ? opts.addSemanticIndexes : true;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let children = opts && 'children' in opts ? opts.children : C[16] || CT.C16;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let keyboardDismissBehavior = opts && 'keyboardDismissBehavior' in opts ? opts.keyboardDismissBehavior : C[1] || CT.C1;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[gridDelegate$] = new sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: maxCrossAxisExtent, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, childAspectRatio: childAspectRatio});
    this[childrenDelegate$0] = new sliver.SliverChildListDelegate.new(children, {addAutomaticKeepAlives: addAutomaticKeepAlives, addRepaintBoundaries: addRepaintBoundaries, addSemanticIndexes: addSemanticIndexes});
    scroll_view.GridView.__proto__.new.call(this, {semanticChildCount: (t2 = semanticChildCount, t2 == null ? children[$length] : t2), key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, primary: primary, physics: physics, shrinkWrap: shrinkWrap, padding: padding, cacheExtent: cacheExtent, dragStartBehavior: dragStartBehavior, keyboardDismissBehavior: keyboardDismissBehavior, restorationId: restorationId, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_view.GridView.prototype;
  dart.addTypeTests(scroll_view.GridView);
  dart.addTypeCaches(scroll_view.GridView);
  dart.setMethodSignature(scroll_view.GridView, () => ({
    __proto__: dart.getMethods(scroll_view.GridView.__proto__),
    buildChildLayout: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_view.GridView, I[0]);
  dart.setFieldSignature(scroll_view.GridView, () => ({
    __proto__: dart.getFields(scroll_view.GridView.__proto__),
    gridDelegate: dart.finalFieldType(sliver_grid.SliverGridDelegate),
    childrenDelegate: dart.finalFieldType(sliver.SliverChildDelegate)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/scroll_view.dart", {
    "package:flutter/src/widgets/scroll_view.dart": scroll_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_view.dart"],"names":[],"mappings":"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;QACA;QACA;QACA;QACO;QACN;QACA;QACA;QACF;QACA;QACA;QACC;QACO;QACR;QACC;QACA;QACA;QACA;;IACU,sBAAE,+EACG,cAAc,mBACb,eAAe,oBACd,gBAAgB,oBAChB,gBAAgB;IAEnB,2BAAE,uCACjB,QAAQ,2BACgB,sBAAsB,wBACxB,oBAAoB,sBACtB,kBAAkB;AAExC,wEACyC,KAAnB,kBAAkB,EAAlB,aAAsB,AAAS,QAAD,sBAnCjD,GAAG,mBACH,eAAe,WACf,OAAO,cACP,UAAU,WACV,OAAO,WACP,OAAO,cACP,UAAU,WACV,OAAO,eAQP,WAAW,qBAGX,iBAAiB,2BACjB,uBAAuB,iBACvB,aAAa,gBACb,YAAY;;EAed;;;QAiBE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACU;QACT;QACA;QACA;QACF;QACA;QACA;QACC;QACO;QACR;QACC;QACA;QACA;QACA;;IACU,sBAAE,kFACO,kBAAkB,mBACrB,eAAe,oBACd,gBAAgB,oBAChB,gBAAgB;IAEnB,2BAAE,uCACjB,QAAQ,2BACgB,sBAAsB,wBACxB,oBAAoB,sBACtB,kBAAkB;AAExC,wEACyC,KAAnB,kBAAkB,EAAlB,aAAsB,AAAS,QAAD,sBAnCjD,GAAG,mBACH,eAAe,WACf,OAAO,cACP,UAAU,WACV,OAAO,WACP,OAAO,cACP,UAAU,WACV,OAAO,eAQP,WAAW,qBAGX,iBAAiB,2BACjB,uBAAuB,iBACvB,aAAa,gBACb,YAAY;;EAed","file":"../../../../../../../../../../packages/flutter/src/widgets/scroll_view.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__scroll_view: scroll_view
  };
}));

//# sourceMappingURL=scroll_view.dart.lib.js.map
