define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/cupertino/scrollbar.dart', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/animation/animation_controller.dart'], (function load__packages__flutter__src__material__scrollbar_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__cupertino__scrollbar$46dart, packages__flutter__src__material__material_state$46dart, packages__flutter__src__animation__animation_controller$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const scroll_controller = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_controller;
  const scroll_notification = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_notification;
  const scrollbar = packages__flutter__src__widgets__title$46dart.src__widgets__scrollbar;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const color_scheme = packages__flutter__src__material__icon_button$46dart.src__material__color_scheme;
  const scrollbar_theme = packages__flutter__src__material__icon_button$46dart.src__material__scrollbar_theme;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const scrollbar$ = packages__flutter__src__cupertino__scrollbar$46dart.src__cupertino__scrollbar;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  var scrollbar$0 = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ScrollNotificationTobool: () => (T.ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))(),
    SetOfMaterialState: () => (T.SetOfMaterialState = dart.constFn(core.Set$(material_state.MaterialState)))(),
    SetOfMaterialStateTobool: () => (T.SetOfMaterialStateTobool = dart.constFn(dart.fnType(core.bool, [T.SetOfMaterialState()])))(),
    LinkedHashSetOfMaterialState: () => (T.LinkedHashSetOfMaterialState = dart.constFn(collection.LinkedHashSet$(material_state.MaterialState)))(),
    VoidToColor: () => (T.VoidToColor = dart.constFn(dart.fnType(ui.Color, [])))(),
    ColorTodynamic: () => (T.ColorTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ui.Color])))(),
    SetOfMaterialStateToColor: () => (T.SetOfMaterialStateToColor = dart.constFn(dart.fnType(ui.Color, [T.SetOfMaterialState()])))(),
    SetOfMaterialStateTodouble: () => (T.SetOfMaterialStateTodouble = dart.constFn(dart.fnType(core.double, [T.SetOfMaterialState()])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scrollbar",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/scrollbar.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoScrollbar",
        [_Location_column]: 14,
        [_Location_line]: 218,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/scrollbar.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_MaterialScrollbar",
        [_Location_column]: 12,
        [_Location_line]: 230,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/scrollbar.dart"
      });
    },
    get C3() {
      return C[3] = dart.fn(scroll_notification.defaultScrollNotificationPredicate, T.ScrollNotificationTobool());
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_MaterialScrollbar",
        [_Location_column]: 9,
        [_Location_line]: 247,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/scrollbar.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "dark",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 600000
      });
    }
  }, false);
  var C = Array(18).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/material/scrollbar.dart",
    "package:flutter/src/material/scrollbar.dart"
  ];
  var child$ = dart.privateName(scrollbar$0, "Scrollbar.child");
  var controller$ = dart.privateName(scrollbar$0, "Scrollbar.controller");
  var thumbVisibility$ = dart.privateName(scrollbar$0, "Scrollbar.thumbVisibility");
  var isAlwaysShown$ = dart.privateName(scrollbar$0, "Scrollbar.isAlwaysShown");
  var trackVisibility$ = dart.privateName(scrollbar$0, "Scrollbar.trackVisibility");
  var showTrackOnHover$ = dart.privateName(scrollbar$0, "Scrollbar.showTrackOnHover");
  var hoverThickness$ = dart.privateName(scrollbar$0, "Scrollbar.hoverThickness");
  var thickness$ = dart.privateName(scrollbar$0, "Scrollbar.thickness");
  var radius$ = dart.privateName(scrollbar$0, "Scrollbar.radius");
  var interactive$ = dart.privateName(scrollbar$0, "Scrollbar.interactive");
  var notificationPredicate$ = dart.privateName(scrollbar$0, "Scrollbar.notificationPredicate");
  var scrollbarOrientation$ = dart.privateName(scrollbar$0, "Scrollbar.scrollbarOrientation");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  scrollbar$0.Scrollbar = class Scrollbar extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get thumbVisibility() {
      return this[thumbVisibility$];
    }
    set thumbVisibility(value) {
      super.thumbVisibility = value;
    }
    get isAlwaysShown() {
      return this[isAlwaysShown$];
    }
    set isAlwaysShown(value) {
      super.isAlwaysShown = value;
    }
    get trackVisibility() {
      return this[trackVisibility$];
    }
    set trackVisibility(value) {
      super.trackVisibility = value;
    }
    get showTrackOnHover() {
      return this[showTrackOnHover$];
    }
    set showTrackOnHover(value) {
      super.showTrackOnHover = value;
    }
    get hoverThickness() {
      return this[hoverThickness$];
    }
    set hoverThickness(value) {
      super.hoverThickness = value;
    }
    get thickness() {
      return this[thickness$];
    }
    set thickness(value) {
      super.thickness = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get interactive() {
      return this[interactive$];
    }
    set interactive(value) {
      super.interactive = value;
    }
    get notificationPredicate() {
      return this[notificationPredicate$];
    }
    set notificationPredicate(value) {
      super.notificationPredicate = value;
    }
    get scrollbarOrientation() {
      return this[scrollbarOrientation$];
    }
    set scrollbarOrientation(value) {
      super.scrollbarOrientation = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let thumbVisibility = opts && 'thumbVisibility' in opts ? opts.thumbVisibility : null;
      let trackVisibility = opts && 'trackVisibility' in opts ? opts.trackVisibility : null;
      let thickness = opts && 'thickness' in opts ? opts.thickness : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let notificationPredicate = opts && 'notificationPredicate' in opts ? opts.notificationPredicate : null;
      let interactive = opts && 'interactive' in opts ? opts.interactive : null;
      let scrollbarOrientation = opts && 'scrollbarOrientation' in opts ? opts.scrollbarOrientation : null;
      let isAlwaysShown = opts && 'isAlwaysShown' in opts ? opts.isAlwaysShown : null;
      let showTrackOnHover = opts && 'showTrackOnHover' in opts ? opts.showTrackOnHover : null;
      let hoverThickness = opts && 'hoverThickness' in opts ? opts.hoverThickness : null;
      return new scrollbar$0.Scrollbar.new({key: key, child: child, controller: controller, thumbVisibility: thumbVisibility, trackVisibility: trackVisibility, thickness: thickness, radius: radius, notificationPredicate: notificationPredicate, interactive: interactive, scrollbarOrientation: scrollbarOrientation, isAlwaysShown: isAlwaysShown, showTrackOnHover: showTrackOnHover, hoverThickness: hoverThickness, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      if (theme$.Theme.of(context).platform === platform.TargetPlatform.iOS) {
        return new scrollbar$.CupertinoScrollbar.new({thumbVisibility: (t0$ = (t0 = this.isAlwaysShown, t0 == null ? this.thumbVisibility : t0), t0$ == null ? false : t0$), thickness: (t0$0 = this.thickness, t0$0 == null ? 3 : t0$0), thicknessWhileDragging: (t0$1 = this.thickness, t0$1 == null ? 8 : t0$1), radius: (t0$2 = this.radius, t0$2 == null ? scrollbar$.CupertinoScrollbar.defaultRadius : t0$2), radiusWhileDragging: (t0$3 = this.radius, t0$3 == null ? scrollbar$.CupertinoScrollbar.defaultRadiusWhileDragging : t0$3), controller: this.controller, notificationPredicate: this.notificationPredicate, scrollbarOrientation: this.scrollbarOrientation, child: this.child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
      }
      return new scrollbar$0._MaterialScrollbar.new({controller: this.controller, thumbVisibility: (t0$4 = this.isAlwaysShown, t0$4 == null ? this.thumbVisibility : t0$4), trackVisibility: this.trackVisibility, showTrackOnHover: this.showTrackOnHover, hoverThickness: this.hoverThickness, thickness: this.thickness, radius: this.radius, notificationPredicate: this.notificationPredicate, interactive: this.interactive, scrollbarOrientation: this.scrollbarOrientation, child: this.child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
  };
  (scrollbar$0.Scrollbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let thumbVisibility = opts && 'thumbVisibility' in opts ? opts.thumbVisibility : null;
    let trackVisibility = opts && 'trackVisibility' in opts ? opts.trackVisibility : null;
    let thickness = opts && 'thickness' in opts ? opts.thickness : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let notificationPredicate = opts && 'notificationPredicate' in opts ? opts.notificationPredicate : null;
    let interactive = opts && 'interactive' in opts ? opts.interactive : null;
    let scrollbarOrientation = opts && 'scrollbarOrientation' in opts ? opts.scrollbarOrientation : null;
    let isAlwaysShown = opts && 'isAlwaysShown' in opts ? opts.isAlwaysShown : null;
    let showTrackOnHover = opts && 'showTrackOnHover' in opts ? opts.showTrackOnHover : null;
    let hoverThickness = opts && 'hoverThickness' in opts ? opts.hoverThickness : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[controller$] = controller;
    this[thumbVisibility$] = thumbVisibility;
    this[trackVisibility$] = trackVisibility;
    this[thickness$] = thickness;
    this[radius$] = radius;
    this[notificationPredicate$] = notificationPredicate;
    this[interactive$] = interactive;
    this[scrollbarOrientation$] = scrollbarOrientation;
    this[isAlwaysShown$] = isAlwaysShown;
    this[showTrackOnHover$] = showTrackOnHover;
    this[hoverThickness$] = hoverThickness;
    if (!(thumbVisibility == null || isAlwaysShown == null)) dart.assertFailed("Scrollbar thumb appearance should only be controlled with thumbVisibility, " + "isAlwaysShown is deprecated.", I[0], 114, 10, "thumbVisibility == null || isAlwaysShown == null");
    scrollbar$0.Scrollbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scrollbar$0.Scrollbar.prototype;
  dart.addTypeTests(scrollbar$0.Scrollbar);
  dart.addTypeCaches(scrollbar$0.Scrollbar);
  dart.setMethodSignature(scrollbar$0.Scrollbar, () => ({
    __proto__: dart.getMethods(scrollbar$0.Scrollbar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scrollbar$0.Scrollbar, I[1]);
  dart.setFieldSignature(scrollbar$0.Scrollbar, () => ({
    __proto__: dart.getFields(scrollbar$0.Scrollbar.__proto__),
    child: dart.finalFieldType(framework.Widget),
    controller: dart.finalFieldType(dart.nullable(scroll_controller.ScrollController)),
    thumbVisibility: dart.finalFieldType(dart.nullable(core.bool)),
    isAlwaysShown: dart.finalFieldType(dart.nullable(core.bool)),
    trackVisibility: dart.finalFieldType(dart.nullable(core.bool)),
    showTrackOnHover: dart.finalFieldType(dart.nullable(core.bool)),
    hoverThickness: dart.finalFieldType(dart.nullable(core.double)),
    thickness: dart.finalFieldType(dart.nullable(core.double)),
    radius: dart.finalFieldType(dart.nullable(ui.Radius)),
    interactive: dart.finalFieldType(dart.nullable(core.bool)),
    notificationPredicate: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [scroll_notification.ScrollNotification]))),
    scrollbarOrientation: dart.finalFieldType(dart.nullable(scrollbar.ScrollbarOrientation))
  }));
  var showTrackOnHover$0 = dart.privateName(scrollbar$0, "_MaterialScrollbar.showTrackOnHover");
  var hoverThickness$0 = dart.privateName(scrollbar$0, "_MaterialScrollbar.hoverThickness");
  scrollbar$0._MaterialScrollbar = class _MaterialScrollbar extends scrollbar.RawScrollbar {
    get showTrackOnHover() {
      return this[showTrackOnHover$0];
    }
    set showTrackOnHover(value) {
      super.showTrackOnHover = value;
    }
    get hoverThickness() {
      return this[hoverThickness$0];
    }
    set hoverThickness(value) {
      super.hoverThickness = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let thumbVisibility = opts && 'thumbVisibility' in opts ? opts.thumbVisibility : null;
      let trackVisibility = opts && 'trackVisibility' in opts ? opts.trackVisibility : null;
      let showTrackOnHover = opts && 'showTrackOnHover' in opts ? opts.showTrackOnHover : null;
      let hoverThickness = opts && 'hoverThickness' in opts ? opts.hoverThickness : null;
      let thickness = opts && 'thickness' in opts ? opts.thickness : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let notificationPredicate = opts && 'notificationPredicate' in opts ? opts.notificationPredicate : null;
      let interactive = opts && 'interactive' in opts ? opts.interactive : null;
      let scrollbarOrientation = opts && 'scrollbarOrientation' in opts ? opts.scrollbarOrientation : null;
      return new scrollbar$0._MaterialScrollbar.new({child: child, controller: controller, thumbVisibility: thumbVisibility, trackVisibility: trackVisibility, showTrackOnHover: showTrackOnHover, hoverThickness: hoverThickness, thickness: thickness, radius: radius, notificationPredicate: notificationPredicate, interactive: interactive, scrollbarOrientation: scrollbarOrientation, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    createState() {
      return new scrollbar$0._MaterialScrollbarState.new();
    }
  };
  (scrollbar$0._MaterialScrollbar.new = function(opts) {
    let t0;
    let child = opts && 'child' in opts ? opts.child : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let thumbVisibility = opts && 'thumbVisibility' in opts ? opts.thumbVisibility : null;
    let trackVisibility = opts && 'trackVisibility' in opts ? opts.trackVisibility : null;
    let showTrackOnHover = opts && 'showTrackOnHover' in opts ? opts.showTrackOnHover : null;
    let hoverThickness = opts && 'hoverThickness' in opts ? opts.hoverThickness : null;
    let thickness = opts && 'thickness' in opts ? opts.thickness : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let notificationPredicate = opts && 'notificationPredicate' in opts ? opts.notificationPredicate : null;
    let interactive = opts && 'interactive' in opts ? opts.interactive : null;
    let scrollbarOrientation = opts && 'scrollbarOrientation' in opts ? opts.scrollbarOrientation : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[showTrackOnHover$0] = showTrackOnHover;
    this[hoverThickness$0] = hoverThickness;
    scrollbar$0._MaterialScrollbar.__proto__.new.call(this, {fadeDuration: scrollbar$0._kScrollbarFadeDuration, timeToFade: scrollbar$0._kScrollbarTimeToFade, pressDuration: core.Duration.zero, notificationPredicate: (t0 = notificationPredicate, t0 == null ? C[3] || CT.C3 : t0), child: child, controller: controller, thumbVisibility: thumbVisibility, trackVisibility: trackVisibility, thickness: thickness, radius: radius, interactive: interactive, scrollbarOrientation: scrollbarOrientation, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scrollbar$0._MaterialScrollbar.prototype;
  dart.addTypeTests(scrollbar$0._MaterialScrollbar);
  dart.addTypeCaches(scrollbar$0._MaterialScrollbar);
  dart.setMethodSignature(scrollbar$0._MaterialScrollbar, () => ({
    __proto__: dart.getMethods(scrollbar$0._MaterialScrollbar.__proto__),
    createState: dart.fnType(scrollbar$0._MaterialScrollbarState, [])
  }));
  dart.setLibraryUri(scrollbar$0._MaterialScrollbar, I[1]);
  dart.setFieldSignature(scrollbar$0._MaterialScrollbar, () => ({
    __proto__: dart.getFields(scrollbar$0._MaterialScrollbar.__proto__),
    showTrackOnHover: dart.finalFieldType(dart.nullable(core.bool)),
    hoverThickness: dart.finalFieldType(dart.nullable(core.double))
  }));
  var ___MaterialScrollbarState__hoverAnimationController = dart.privateName(scrollbar$0, "_#_MaterialScrollbarState#_hoverAnimationController");
  var _dragIsActive = dart.privateName(scrollbar$0, "_dragIsActive");
  var _hoverIsActive = dart.privateName(scrollbar$0, "_hoverIsActive");
  var ___MaterialScrollbarState__colorScheme = dart.privateName(scrollbar$0, "_#_MaterialScrollbarState#_colorScheme");
  var ___MaterialScrollbarState__scrollbarTheme = dart.privateName(scrollbar$0, "_#_MaterialScrollbarState#_scrollbarTheme");
  var ___MaterialScrollbarState__useAndroidScrollbar = dart.privateName(scrollbar$0, "_#_MaterialScrollbarState#_useAndroidScrollbar");
  var _hoverAnimationController = dart.privateName(scrollbar$0, "_hoverAnimationController");
  var _colorScheme = dart.privateName(scrollbar$0, "_colorScheme");
  var _scrollbarTheme = dart.privateName(scrollbar$0, "_scrollbarTheme");
  var _useAndroidScrollbar = dart.privateName(scrollbar$0, "_useAndroidScrollbar");
  var _states = dart.privateName(scrollbar$0, "_states");
  var _showTrackOnHover = dart.privateName(scrollbar$0, "_showTrackOnHover");
  var _trackVisibility = dart.privateName(scrollbar$0, "_trackVisibility");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _thumbColor = dart.privateName(scrollbar$0, "_thumbColor");
  var Color_value = dart.privateName(ui, "Color.value");
  var _trackColor = dart.privateName(scrollbar$0, "_trackColor");
  var _trackBorderColor = dart.privateName(scrollbar$0, "_trackBorderColor");
  var _thickness = dart.privateName(scrollbar$0, "_thickness");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  scrollbar$0._MaterialScrollbarState = class _MaterialScrollbarState extends scrollbar.RawScrollbarState$(scrollbar$0._MaterialScrollbar) {
    get [_hoverAnimationController]() {
      let t0;
      t0 = this[___MaterialScrollbarState__hoverAnimationController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_hoverAnimationController")) : t0;
    }
    set [_hoverAnimationController](library$32package$58flutter$47src$47material$47scrollbar$46dart$58$58_hoverAnimationController$35param) {
      this[___MaterialScrollbarState__hoverAnimationController] = library$32package$58flutter$47src$47material$47scrollbar$46dart$58$58_hoverAnimationController$35param;
    }
    get [_colorScheme]() {
      let t0;
      t0 = this[___MaterialScrollbarState__colorScheme];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_colorScheme")) : t0;
    }
    set [_colorScheme](library$32package$58flutter$47src$47material$47scrollbar$46dart$58$58_colorScheme$35param) {
      this[___MaterialScrollbarState__colorScheme] = library$32package$58flutter$47src$47material$47scrollbar$46dart$58$58_colorScheme$35param;
    }
    get [_scrollbarTheme]() {
      let t0;
      t0 = this[___MaterialScrollbarState__scrollbarTheme];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_scrollbarTheme")) : t0;
    }
    set [_scrollbarTheme](library$32package$58flutter$47src$47material$47scrollbar$46dart$58$58_scrollbarTheme$35param) {
      this[___MaterialScrollbarState__scrollbarTheme] = library$32package$58flutter$47src$47material$47scrollbar$46dart$58$58_scrollbarTheme$35param;
    }
    get [_useAndroidScrollbar]() {
      let t0;
      t0 = this[___MaterialScrollbarState__useAndroidScrollbar];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_useAndroidScrollbar")) : t0;
    }
    set [_useAndroidScrollbar](library$32package$58flutter$47src$47material$47scrollbar$46dart$58$58_useAndroidScrollbar$35param) {
      this[___MaterialScrollbarState__useAndroidScrollbar] = library$32package$58flutter$47src$47material$47scrollbar$46dart$58$58_useAndroidScrollbar$35param;
    }
    get showScrollbar() {
      let t1, t0, t0$, t0$0;
      t0$0 = (t0$ = (t0 = this.widget.thumbVisibility, t0 == null ? (t1 = this[_scrollbarTheme].thumbVisibility, t1 == null ? null : t1.resolve(this[_states])) : t0), t0$ == null ? this[_scrollbarTheme].isAlwaysShown : t0$);
      return t0$0 == null ? false : t0$0;
    }
    get enableGestures() {
      let t0, t0$;
      t0$ = (t0 = this.widget.interactive, t0 == null ? this[_scrollbarTheme].interactive : t0);
      return t0$ == null ? !this[_useAndroidScrollbar] : t0$;
    }
    get [_showTrackOnHover]() {
      let t0, t0$;
      t0$ = (t0 = this.widget.showTrackOnHover, t0 == null ? this[_scrollbarTheme].showTrackOnHover : t0);
      return t0$ == null ? false : t0$;
    }
    get [_trackVisibility]() {
      return material_state.MaterialStateProperty.resolveWith(core.bool, dart.fn(states => {
        let t1, t0, t0$;
        if (states.contains(material_state.MaterialState.hovered) && this[_showTrackOnHover]) {
          return true;
        }
        t0$ = (t0 = this.widget.trackVisibility, t0 == null ? (t1 = this[_scrollbarTheme].trackVisibility, t1 == null ? null : t1.resolve(states)) : t0);
        return t0$ == null ? false : t0$;
      }, T.SetOfMaterialStateTobool()));
    }
    get [_states]() {
      return (() => {
        let t0 = T.LinkedHashSetOfMaterialState().new();
        if (this[_dragIsActive]) t0.add(material_state.MaterialState.dragged);
        if (this[_hoverIsActive]) t0.add(material_state.MaterialState.hovered);
        return t0;
      })();
    }
    get [_thumbColor]() {
      let onSurface = this[_colorScheme].onSurface;
      let brightness = this[_colorScheme].brightness;
      let dragColor = null;
      function dragColor$35get() {
        let t2;
        t2 = dragColor;
        return t2 == null ? dart.throw(new _internal.LateError.localNI("dragColor")) : t2;
      }
      dart.fn(dragColor$35get, T.VoidToColor());
      function dragColor$35set(dragColor$35param) {
        return dragColor = dragColor$35param;
      }
      dart.fn(dragColor$35set, T.ColorTodynamic());
      let hoverColor = null;
      function hoverColor$35get() {
        let t5;
        t5 = hoverColor;
        return t5 == null ? dart.throw(new _internal.LateError.localNI("hoverColor")) : t5;
      }
      dart.fn(hoverColor$35get, T.VoidToColor());
      function hoverColor$35set(hoverColor$35param) {
        return hoverColor = hoverColor$35param;
      }
      dart.fn(hoverColor$35set, T.ColorTodynamic());
      let idleColor = null;
      function idleColor$35get() {
        let t8;
        t8 = idleColor;
        return t8 == null ? dart.throw(new _internal.LateError.localNI("idleColor")) : t8;
      }
      dart.fn(idleColor$35get, T.VoidToColor());
      function idleColor$35set(idleColor$35param) {
        return idleColor = idleColor$35param;
      }
      dart.fn(idleColor$35set, T.ColorTodynamic());
      switch (brightness) {
        case C[5] || CT.C5:
          {
            dragColor$35set(onSurface.withOpacity(0.6));
            hoverColor$35set(onSurface.withOpacity(0.5));
            idleColor$35set(this[_useAndroidScrollbar] ? theme$.Theme.of(this.context).highlightColor.withOpacity(1.0) : onSurface.withOpacity(0.1));
            break;
          }
        case C[6] || CT.C6:
          {
            dragColor$35set(onSurface.withOpacity(0.75));
            hoverColor$35set(onSurface.withOpacity(0.65));
            idleColor$35set(this[_useAndroidScrollbar] ? theme$.Theme.of(this.context).highlightColor.withOpacity(1.0) : onSurface.withOpacity(0.3));
            break;
          }
      }
      return material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
        let t10, t10$, t10$0, t10$1, t10$2, t10$3, t10$4, t10$5;
        if (states.contains(material_state.MaterialState.dragged)) {
          t10$ = (t10 = this[_scrollbarTheme].thumbColor, t10 == null ? null : t10.resolve(states));
          return t10$ == null ? dragColor$35get() : t10$;
        }
        if (this[_trackVisibility].resolve(states)) {
          t10$1 = (t10$0 = this[_scrollbarTheme].thumbColor, t10$0 == null ? null : t10$0.resolve(states));
          return t10$1 == null ? hoverColor$35get() : t10$1;
        }
        return dart.nullCheck(ui.Color.lerp((t10$3 = (t10$2 = this[_scrollbarTheme].thumbColor, t10$2 == null ? null : t10$2.resolve(states)), t10$3 == null ? idleColor$35get() : t10$3), (t10$5 = (t10$4 = this[_scrollbarTheme].thumbColor, t10$4 == null ? null : t10$4.resolve(states)), t10$5 == null ? hoverColor$35get() : t10$5), this[_hoverAnimationController].value));
      }, T.SetOfMaterialStateToColor()));
    }
    get [_trackColor]() {
      let onSurface = this[_colorScheme].onSurface;
      let brightness = this[_colorScheme].brightness;
      return material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
        let t10, t10$;
        if (this.showScrollbar && this[_trackVisibility].resolve(states)) {
          t10$ = (t10 = this[_scrollbarTheme].trackColor, t10 == null ? null : t10.resolve(states));
          return t10$ == null ? brightness === ui.Brightness.light ? onSurface.withOpacity(0.03) : onSurface.withOpacity(0.05) : t10$;
        }
        return C[7] || CT.C7;
      }, T.SetOfMaterialStateToColor()));
    }
    get [_trackBorderColor]() {
      let onSurface = this[_colorScheme].onSurface;
      let brightness = this[_colorScheme].brightness;
      return material_state.MaterialStateProperty.resolveWith(ui.Color, dart.fn(states => {
        let t10, t10$;
        if (this.showScrollbar && this[_trackVisibility].resolve(states)) {
          t10$ = (t10 = this[_scrollbarTheme].trackBorderColor, t10 == null ? null : t10.resolve(states));
          return t10$ == null ? brightness === ui.Brightness.light ? onSurface.withOpacity(0.1) : onSurface.withOpacity(0.25) : t10$;
        }
        return C[7] || CT.C7;
      }, T.SetOfMaterialStateToColor()));
    }
    get [_thickness]() {
      return material_state.MaterialStateProperty.resolveWith(core.double, dart.fn(states => {
        let t11, t10, t10$, t11$, t10$0, t10$1;
        if (states.contains(material_state.MaterialState.hovered) && this[_trackVisibility].resolve(states)) {
          t10$ = (t10 = this.widget.hoverThickness, t10 == null ? (t11 = this[_scrollbarTheme].thickness, t11 == null ? null : t11.resolve(states)) : t10);
          return t10$ == null ? 12 : t10$;
        }
        t10$1 = (t10$0 = this.widget.thickness, t10$0 == null ? (t11$ = this[_scrollbarTheme].thickness, t11$ == null ? null : t11$.resolve(states)) : t10$0);
        return t10$1 == null ? 8 / (this[_useAndroidScrollbar] ? 2 : 1) : t10$1;
      }, T.SetOfMaterialStateTodouble()));
    }
    initState() {
      super.initState();
      this[_hoverAnimationController] = new animation_controller.AnimationController.new({vsync: this, duration: C[8] || CT.C8});
      this[_hoverAnimationController].addListener(dart.fn(() => {
        this.updateScrollbarPainter();
      }, T.VoidTovoid()));
    }
    didChangeDependencies() {
      let theme = theme$.Theme.of(this.context);
      this[_colorScheme] = theme.colorScheme;
      this[_scrollbarTheme] = theme.scrollbarTheme;
      switch (theme.platform) {
        case C[9] || CT.C9:
          {
            this[_useAndroidScrollbar] = true;
            break;
          }
        case C[10] || CT.C10:
        case C[11] || CT.C11:
        case C[12] || CT.C12:
        case C[13] || CT.C13:
        case C[14] || CT.C14:
          {
            this[_useAndroidScrollbar] = false;
            break;
          }
      }
      super.didChangeDependencies();
    }
    updateScrollbarPainter() {
      let t11, t11$, t11$0, t11$1, t11$2, t10;
      t10 = this.scrollbarPainter;
      (() => {
        t10.color = this[_thumbColor].resolve(this[_states]);
        t10.trackColor = this[_trackColor].resolve(this[_states]);
        t10.trackBorderColor = this[_trackBorderColor].resolve(this[_states]);
        t10.textDirection = basic.Directionality.of(this.context);
        t10.thickness = this[_thickness].resolve(this[_states]);
        t10.radius = (t11$ = (t11 = this.widget.radius, t11 == null ? this[_scrollbarTheme].radius : t11), t11$ == null ? this[_useAndroidScrollbar] ? null : scrollbar$0._kScrollbarRadius : t11$);
        t10.crossAxisMargin = (t11$0 = this[_scrollbarTheme].crossAxisMargin, t11$0 == null ? this[_useAndroidScrollbar] ? 0.0 : 2 : t11$0);
        t10.mainAxisMargin = (t11$1 = this[_scrollbarTheme].mainAxisMargin, t11$1 == null ? 0.0 : t11$1);
        t10.minLength = (t11$2 = this[_scrollbarTheme].minThumbLength, t11$2 == null ? 48 : t11$2);
        t10.padding = media_query.MediaQuery.of(this.context).padding;
        t10.scrollbarOrientation = this.widget.scrollbarOrientation;
        t10.ignorePointer = !this.enableGestures;
        return t10;
      })();
    }
    handleThumbPressStart(localPosition) {
      super.handleThumbPressStart(localPosition);
      this.setState(dart.fn(() => {
        this[_dragIsActive] = true;
      }, T.VoidTovoid()));
    }
    handleThumbPressEnd(localPosition, velocity) {
      super.handleThumbPressEnd(localPosition, velocity);
      this.setState(dart.fn(() => {
        this[_dragIsActive] = false;
      }, T.VoidTovoid()));
    }
    handleHover(event) {
      super.handleHover(event);
      if (this.isPointerOverScrollbar(event.position, event.kind, {forHover: true})) {
        this.setState(dart.fn(() => {
          this[_hoverIsActive] = true;
        }, T.VoidTovoid()));
        this[_hoverAnimationController].forward();
      } else if (this[_hoverIsActive]) {
        this.setState(dart.fn(() => {
          this[_hoverIsActive] = false;
        }, T.VoidTovoid()));
        this[_hoverAnimationController].reverse();
      }
    }
    handleHoverExit(event) {
      super.handleHoverExit(event);
      this.setState(dart.fn(() => {
        this[_hoverIsActive] = false;
      }, T.VoidTovoid()));
      this[_hoverAnimationController].reverse();
    }
    dispose() {
      this[_hoverAnimationController].dispose();
      super.dispose();
    }
    static ['_#new#tearOff']() {
      return new scrollbar$0._MaterialScrollbarState.new();
    }
  };
  (scrollbar$0._MaterialScrollbarState.new = function() {
    this[___MaterialScrollbarState__hoverAnimationController] = null;
    this[_dragIsActive] = false;
    this[_hoverIsActive] = false;
    this[___MaterialScrollbarState__colorScheme] = null;
    this[___MaterialScrollbarState__scrollbarTheme] = null;
    this[___MaterialScrollbarState__useAndroidScrollbar] = null;
    scrollbar$0._MaterialScrollbarState.__proto__.new.call(this);
    ;
  }).prototype = scrollbar$0._MaterialScrollbarState.prototype;
  dart.addTypeTests(scrollbar$0._MaterialScrollbarState);
  dart.addTypeCaches(scrollbar$0._MaterialScrollbarState);
  dart.setGetterSignature(scrollbar$0._MaterialScrollbarState, () => ({
    __proto__: dart.getGetters(scrollbar$0._MaterialScrollbarState.__proto__),
    [_hoverAnimationController]: animation_controller.AnimationController,
    [_colorScheme]: color_scheme.ColorScheme,
    [_scrollbarTheme]: scrollbar_theme.ScrollbarThemeData,
    [_useAndroidScrollbar]: core.bool,
    [_showTrackOnHover]: core.bool,
    [_trackVisibility]: material_state.MaterialStateProperty$(core.bool),
    [_states]: core.Set$(material_state.MaterialState),
    [_thumbColor]: material_state.MaterialStateProperty$(ui.Color),
    [_trackColor]: material_state.MaterialStateProperty$(ui.Color),
    [_trackBorderColor]: material_state.MaterialStateProperty$(ui.Color),
    [_thickness]: material_state.MaterialStateProperty$(core.double)
  }));
  dart.setSetterSignature(scrollbar$0._MaterialScrollbarState, () => ({
    __proto__: dart.getSetters(scrollbar$0._MaterialScrollbarState.__proto__),
    [_hoverAnimationController]: animation_controller.AnimationController,
    [_colorScheme]: color_scheme.ColorScheme,
    [_scrollbarTheme]: scrollbar_theme.ScrollbarThemeData,
    [_useAndroidScrollbar]: core.bool
  }));
  dart.setLibraryUri(scrollbar$0._MaterialScrollbarState, I[1]);
  dart.setFieldSignature(scrollbar$0._MaterialScrollbarState, () => ({
    __proto__: dart.getFields(scrollbar$0._MaterialScrollbarState.__proto__),
    [___MaterialScrollbarState__hoverAnimationController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [_dragIsActive]: dart.fieldType(core.bool),
    [_hoverIsActive]: dart.fieldType(core.bool),
    [___MaterialScrollbarState__colorScheme]: dart.fieldType(dart.nullable(color_scheme.ColorScheme)),
    [___MaterialScrollbarState__scrollbarTheme]: dart.fieldType(dart.nullable(scrollbar_theme.ScrollbarThemeData)),
    [___MaterialScrollbarState__useAndroidScrollbar]: dart.fieldType(dart.nullable(core.bool))
  }));
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  dart.defineLazy(scrollbar$0, {
    /*scrollbar$0._kScrollbarThickness*/get _kScrollbarThickness() {
      return 8;
    },
    /*scrollbar$0._kScrollbarThicknessWithTrack*/get _kScrollbarThicknessWithTrack() {
      return 12;
    },
    /*scrollbar$0._kScrollbarMargin*/get _kScrollbarMargin() {
      return 2;
    },
    /*scrollbar$0._kScrollbarMinLength*/get _kScrollbarMinLength() {
      return 48;
    },
    /*scrollbar$0._kScrollbarRadius*/get _kScrollbarRadius() {
      return C[15] || CT.C15;
    },
    /*scrollbar$0._kScrollbarFadeDuration*/get _kScrollbarFadeDuration() {
      return C[16] || CT.C16;
    },
    /*scrollbar$0._kScrollbarTimeToFade*/get _kScrollbarTimeToFade() {
      return C[17] || CT.C17;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/scrollbar.dart", {
    "package:flutter/src/material/scrollbar.dart": scrollbar$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scrollbar.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/scrollbar.dart.lib.js"}');
  // Exports:
  return {
    src__material__scrollbar: scrollbar$0
  };
}));

//# sourceMappingURL=scrollbar.dart.lib.js.map
