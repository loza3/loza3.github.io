define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/services/haptic_feedback.dart'], (function load__packages__flutter__src__cupertino__scrollbar_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__services__haptic_feedback$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scroll_notification = packages__flutter__src__widgets__title$46dart.src__widgets__scroll_notification;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const scrollbar = packages__flutter__src__widgets__title$46dart.src__widgets__scrollbar;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__title$46dart.src__widgets__media_query;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const haptic_feedback = packages__flutter__src__services__haptic_feedback$46dart.src__services__haptic_feedback;
  var scrollbar$ = Object.create(dart.library);
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    ScrollNotificationTobool: () => (T.ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    voidToFutureOfvoid: () => (T.voidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [dart.void])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 1.5,
        [Radius_x]: 1.5
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C3() {
      return C[3] = dart.fn(scroll_notification.defaultScrollNotificationPredicate, T.ScrollNotificationTobool());
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoScrollbar",
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/scrollbar.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
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
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1200000
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 250000
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2164260863.0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1493172224
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_darkElevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_elevatedColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_darkHighContrastColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_highContrastColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_darkColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_color]: C[11] || CT.C11,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C[11] || CT.C11
      });
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/scrollbar.dart",
    "package:flutter/src/cupertino/scrollbar.dart"
  ];
  var thicknessWhileDragging$ = dart.privateName(scrollbar$, "CupertinoScrollbar.thicknessWhileDragging");
  var radiusWhileDragging$ = dart.privateName(scrollbar$, "CupertinoScrollbar.radiusWhileDragging");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  scrollbar$.CupertinoScrollbar = class CupertinoScrollbar extends scrollbar.RawScrollbar {
    get thicknessWhileDragging() {
      return this[thicknessWhileDragging$];
    }
    set thicknessWhileDragging(value) {
      super.thicknessWhileDragging = value;
    }
    get radiusWhileDragging() {
      return this[radiusWhileDragging$];
    }
    set radiusWhileDragging(value) {
      super.radiusWhileDragging = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let thumbVisibility = opts && 'thumbVisibility' in opts ? opts.thumbVisibility : null;
      let thickness = opts && 'thickness' in opts ? opts.thickness : null;
      let thicknessWhileDragging = opts && 'thicknessWhileDragging' in opts ? opts.thicknessWhileDragging : 8;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let radiusWhileDragging = opts && 'radiusWhileDragging' in opts ? opts.radiusWhileDragging : C[1] || CT.C1;
      let notificationPredicate = opts && 'notificationPredicate' in opts ? opts.notificationPredicate : null;
      let scrollbarOrientation = opts && 'scrollbarOrientation' in opts ? opts.scrollbarOrientation : null;
      let isAlwaysShown = opts && 'isAlwaysShown' in opts ? opts.isAlwaysShown : null;
      return new scrollbar$.CupertinoScrollbar.new({key: key, child: child, controller: controller, thumbVisibility: thumbVisibility, thickness: thickness, thicknessWhileDragging: thicknessWhileDragging, radius: radius, radiusWhileDragging: radiusWhileDragging, notificationPredicate: notificationPredicate, scrollbarOrientation: scrollbarOrientation, isAlwaysShown: isAlwaysShown, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    createState() {
      return new scrollbar$._CupertinoScrollbarState.new();
    }
  };
  (scrollbar$.CupertinoScrollbar.new = function(opts) {
    let t0, t0$, t0$0;
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let thumbVisibility = opts && 'thumbVisibility' in opts ? opts.thumbVisibility : null;
    let thickness = opts && 'thickness' in opts ? opts.thickness : 3;
    let thicknessWhileDragging = opts && 'thicknessWhileDragging' in opts ? opts.thicknessWhileDragging : 8;
    let radius = opts && 'radius' in opts ? opts.radius : C[0] || CT.C0;
    let radiusWhileDragging = opts && 'radiusWhileDragging' in opts ? opts.radiusWhileDragging : C[1] || CT.C1;
    let notificationPredicate = opts && 'notificationPredicate' in opts ? opts.notificationPredicate : null;
    let scrollbarOrientation = opts && 'scrollbarOrientation' in opts ? opts.scrollbarOrientation : null;
    let isAlwaysShown = opts && 'isAlwaysShown' in opts ? opts.isAlwaysShown : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[thicknessWhileDragging$] = thicknessWhileDragging;
    this[radiusWhileDragging$] = radiusWhileDragging;
    if (!(thickness !== null)) dart.assertFailed(null, I[0], 90, 15, "thickness != null");
    if (!(thickness < 1 / 0)) dart.assertFailed(null, I[0], 91, 15, "thickness < double.infinity");
    if (!(thicknessWhileDragging !== null)) dart.assertFailed(null, I[0], 92, 15, "thicknessWhileDragging != null");
    if (!(thicknessWhileDragging < 1 / 0)) dart.assertFailed(null, I[0], 93, 15, "thicknessWhileDragging < double.infinity");
    if (!(radius !== null)) dart.assertFailed(null, I[0], 94, 15, "radius != null");
    if (!(radiusWhileDragging !== null)) dart.assertFailed(null, I[0], 95, 15, "radiusWhileDragging != null");
    if (!(isAlwaysShown == null || thumbVisibility == null)) dart.assertFailed("Scrollbar thumb appearance should only be controlled with thumbVisibility, " + "isAlwaysShown is deprecated.", I[0], 97, 10, "isAlwaysShown == null || thumbVisibility == null");
    scrollbar$.CupertinoScrollbar.__proto__.new.call(this, {thumbVisibility: (t0$ = (t0 = isAlwaysShown, t0 == null ? thumbVisibility : t0), t0$ == null ? false : t0$), fadeDuration: scrollbar$._kScrollbarFadeDuration, timeToFade: scrollbar$._kScrollbarTimeToFade, pressDuration: C[2] || CT.C2, notificationPredicate: (t0$0 = notificationPredicate, t0$0 == null ? C[3] || CT.C3 : t0$0), key: key, child: child, controller: controller, thickness: thickness, radius: radius, scrollbarOrientation: scrollbarOrientation, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scrollbar$.CupertinoScrollbar.prototype;
  dart.addTypeTests(scrollbar$.CupertinoScrollbar);
  dart.addTypeCaches(scrollbar$.CupertinoScrollbar);
  dart.setMethodSignature(scrollbar$.CupertinoScrollbar, () => ({
    __proto__: dart.getMethods(scrollbar$.CupertinoScrollbar.__proto__),
    createState: dart.fnType(scrollbar.RawScrollbarState$(scrollbar$.CupertinoScrollbar), [])
  }));
  dart.setLibraryUri(scrollbar$.CupertinoScrollbar, I[1]);
  dart.setFieldSignature(scrollbar$.CupertinoScrollbar, () => ({
    __proto__: dart.getFields(scrollbar$.CupertinoScrollbar.__proto__),
    thicknessWhileDragging: dart.finalFieldType(core.double),
    radiusWhileDragging: dart.finalFieldType(ui.Radius)
  }));
  dart.setStaticFieldSignature(scrollbar$.CupertinoScrollbar, () => ['defaultThickness', 'defaultThicknessWhileDragging', 'defaultRadius', 'defaultRadiusWhileDragging']);
  dart.defineLazy(scrollbar$.CupertinoScrollbar, {
    /*scrollbar$.CupertinoScrollbar.defaultThickness*/get defaultThickness() {
      return 3;
    },
    /*scrollbar$.CupertinoScrollbar.defaultThicknessWhileDragging*/get defaultThicknessWhileDragging() {
      return 8;
    },
    /*scrollbar$.CupertinoScrollbar.defaultRadius*/get defaultRadius() {
      return C[0] || CT.C0;
    },
    /*scrollbar$.CupertinoScrollbar.defaultRadiusWhileDragging*/get defaultRadiusWhileDragging() {
      return C[1] || CT.C1;
    }
  }, false);
  var ___CupertinoScrollbarState__thicknessAnimationController = dart.privateName(scrollbar$, "_#_CupertinoScrollbarState#_thicknessAnimationController");
  var _pressStartAxisPosition = dart.privateName(scrollbar$, "_pressStartAxisPosition");
  var _thicknessAnimationController = dart.privateName(scrollbar$, "_thicknessAnimationController");
  var _thickness = dart.privateName(scrollbar$, "_thickness");
  var _radius = dart.privateName(scrollbar$, "_radius");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  scrollbar$._CupertinoScrollbarState = class _CupertinoScrollbarState extends scrollbar.RawScrollbarState$(scrollbar$.CupertinoScrollbar) {
    get [_thicknessAnimationController]() {
      let t0;
      t0 = this[___CupertinoScrollbarState__thicknessAnimationController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_thicknessAnimationController")) : t0;
    }
    set [_thicknessAnimationController](library$32package$58flutter$47src$47cupertino$47scrollbar$46dart$58$58_thicknessAnimationController$35param) {
      this[___CupertinoScrollbarState__thicknessAnimationController] = library$32package$58flutter$47src$47cupertino$47scrollbar$46dart$58$58_thicknessAnimationController$35param;
    }
    get [_thickness]() {
      return dart.nullCheck(this.widget.thickness) + this[_thicknessAnimationController].value * (this.widget.thicknessWhileDragging - dart.nullCheck(this.widget.thickness));
    }
    get [_radius]() {
      return dart.nullCheck(ui.Radius.lerp(this.widget.radius, this.widget.radiusWhileDragging, this[_thicknessAnimationController].value));
    }
    initState() {
      super.initState();
      this[_thicknessAnimationController] = new animation_controller.AnimationController.new({vsync: this, duration: scrollbar$._kScrollbarResizeDuration});
      this[_thicknessAnimationController].addListener(dart.fn(() => {
        this.updateScrollbarPainter();
      }, T.VoidTovoid()));
    }
    updateScrollbarPainter() {
      let t0;
      t0 = this.scrollbarPainter;
      (() => {
        t0.color = colors.CupertinoDynamicColor.resolve(scrollbar$._kScrollbarColor, this.context);
        t0.textDirection = basic.Directionality.of(this.context);
        t0.thickness = this[_thickness];
        t0.mainAxisMargin = 3;
        t0.crossAxisMargin = 3;
        t0.radius = this[_radius];
        t0.padding = media_query.MediaQuery.of(this.context).padding;
        t0.minLength = 36;
        t0.minOverscrollLength = 8;
        t0.scrollbarOrientation = this.widget.scrollbarOrientation;
        return t0;
      })();
    }
    handleThumbPressStart(localPosition) {
      super.handleThumbPressStart(localPosition);
      let direction = dart.nullCheck(this.getScrollbarDirection());
      switch (direction) {
        case C[5] || CT.C5:
          {
            this[_pressStartAxisPosition] = localPosition.dy;
            break;
          }
        case C[6] || CT.C6:
          {
            this[_pressStartAxisPosition] = localPosition.dx;
            break;
          }
      }
    }
    handleThumbPress() {
      if (this.getScrollbarDirection() == null) {
        return;
      }
      super.handleThumbPress();
      this[_thicknessAnimationController].forward().then(dart.void, dart.fn(_ => haptic_feedback.HapticFeedback.mediumImpact(), T.voidToFutureOfvoid()));
    }
    handleThumbPressEnd(localPosition, velocity) {
      let direction = this.getScrollbarDirection();
      if (direction == null) {
        return;
      }
      this[_thicknessAnimationController].reverse();
      super.handleThumbPressEnd(localPosition, velocity);
      switch (direction) {
        case C[5] || CT.C5:
          {
            if (velocity.pixelsPerSecond.dy[$abs]() < 10 && (localPosition.dy - this[_pressStartAxisPosition])[$abs]() > 0) {
              haptic_feedback.HapticFeedback.mediumImpact();
            }
            break;
          }
        case C[6] || CT.C6:
          {
            if (velocity.pixelsPerSecond.dx[$abs]() < 10 && (localPosition.dx - this[_pressStartAxisPosition])[$abs]() > 0) {
              haptic_feedback.HapticFeedback.mediumImpact();
            }
            break;
          }
      }
    }
    dispose() {
      this[_thicknessAnimationController].dispose();
      super.dispose();
    }
    static ['_#new#tearOff']() {
      return new scrollbar$._CupertinoScrollbarState.new();
    }
  };
  (scrollbar$._CupertinoScrollbarState.new = function() {
    this[___CupertinoScrollbarState__thicknessAnimationController] = null;
    this[_pressStartAxisPosition] = 0.0;
    scrollbar$._CupertinoScrollbarState.__proto__.new.call(this);
    ;
  }).prototype = scrollbar$._CupertinoScrollbarState.prototype;
  dart.addTypeTests(scrollbar$._CupertinoScrollbarState);
  dart.addTypeCaches(scrollbar$._CupertinoScrollbarState);
  dart.setGetterSignature(scrollbar$._CupertinoScrollbarState, () => ({
    __proto__: dart.getGetters(scrollbar$._CupertinoScrollbarState.__proto__),
    [_thicknessAnimationController]: animation_controller.AnimationController,
    [_thickness]: core.double,
    [_radius]: ui.Radius
  }));
  dart.setSetterSignature(scrollbar$._CupertinoScrollbarState, () => ({
    __proto__: dart.getSetters(scrollbar$._CupertinoScrollbarState.__proto__),
    [_thicknessAnimationController]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(scrollbar$._CupertinoScrollbarState, I[1]);
  dart.setFieldSignature(scrollbar$._CupertinoScrollbarState, () => ({
    __proto__: dart.getFields(scrollbar$._CupertinoScrollbarState.__proto__),
    [___CupertinoScrollbarState__thicknessAnimationController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [_pressStartAxisPosition]: dart.fieldType(core.double)
  }));
  var Color_value = dart.privateName(ui, "Color.value");
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastElevatedColor");
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkElevatedColor");
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors, "CupertinoDynamicColor._effectiveColor");
  dart.defineLazy(scrollbar$, {
    /*scrollbar$._kScrollbarMinLength*/get _kScrollbarMinLength() {
      return 36;
    },
    /*scrollbar$._kScrollbarMinOverscrollLength*/get _kScrollbarMinOverscrollLength() {
      return 8;
    },
    /*scrollbar$._kScrollbarTimeToFade*/get _kScrollbarTimeToFade() {
      return C[7] || CT.C7;
    },
    /*scrollbar$._kScrollbarFadeDuration*/get _kScrollbarFadeDuration() {
      return C[8] || CT.C8;
    },
    /*scrollbar$._kScrollbarResizeDuration*/get _kScrollbarResizeDuration() {
      return C[2] || CT.C2;
    },
    /*scrollbar$._kScrollbarColor*/get _kScrollbarColor() {
      return C[9] || CT.C9;
    },
    /*scrollbar$._kScrollbarMainAxisMargin*/get _kScrollbarMainAxisMargin() {
      return 3;
    },
    /*scrollbar$._kScrollbarCrossAxisMargin*/get _kScrollbarCrossAxisMargin() {
      return 3;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/scrollbar.dart", {
    "package:flutter/src/cupertino/scrollbar.dart": scrollbar$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scrollbar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+He;;;;;;IAQA;;;;;;;;;;;;;;;;;;;;;AAG0C;IAA0B;;;;QAhEzE;QACS;QACT;QACA;QACO;QACR;QACQ;QACR;QACwB;QACvB;QAKA;;IATD;IAEA;UAQK,AAAU,SAAD;UACT,AAAU,SAAD;UACT,AAAuB,sBAAD;UACtB,AAAuB,sBAAD;UACtB,AAAO,MAAD;UACN,AAAoB,mBAAD;UAExB,AAAc,AAAQ,aAAT,YAAY,AAAgB,eAAD,6BAAQ,AAChD,gFACA;AAEF,8EACoD,OAAnB,KAAd,aAAa,EAAb,aAAiB,eAAe,QAAlB,cAAsB,4BACvC,gDACF,wFAEiC,OAAtB,qBAAqB,EAArB,2CA/BtB,GAAG,SACM,KAAK,cACd,UAAU,aAEH,SAAS,UAET,MAAM,wBAGb,oBAAoB;;EAuBtB;;;;;;;;;;;;;;;MAGc,8CAAgB;;;MAIhB,2DAA6B;;;MAG7B,2CAAa;;;MAIb,wDAA0B;;;;;;;;;;;;;;AAsBrB;;IAA6B;wCAA7B;;IAA6B;;AAGpD,YAAuB,AAAE,gBAAlB,AAAO,yBAAa,AAA8B,AAAM,6CAAG,AAAO,AAAuB,qCAAkB,eAAhB,AAAO;IAC3G;;AAGE,YAAkG,gBAApF,eAAK,AAAO,oBAAQ,AAAO,iCAAqB,AAA8B;IAC9F;;AAImB,MAAX;AAIL,MAHD,sCAAgC,yDACvB,gBACG;AAIV,MAFF,AAA8B,gDAAY;AAChB,QAAxB;;IAEJ;;;AAcwD,WAVtD;;AACI,mBAA8B,qCAAQ,6BAAkB;AACxD,2BAA+B,wBAAG;AAClC,uBAAY;AACZ;AACA;AACA,oBAAS;AACT,qBAAqB,AAAY,0BAAT;AACxB;AACA;AACA,kCAAuB,AAAO;;;IACpC;0BAQkC;AACU,MAApC,4BAAsB,aAAa;AAC9B,sBAAmC,eAAvB;AACvB,cAAQ,SAAS;;;AAE6B,YAA1C,gCAA0B,AAAc,aAAD;AACvC;;;;AAE0C,YAA1C,gCAA0B,AAAc,aAAD;AACvC;;;IAEN;;AAIE,UAAI,AAAwB;AAC1B;;AAEsB,MAAlB;AAGL,MAFD,AAA8B,AAAU,8DAClC,QAAC,KAAqB;IAE9B;wBAGgC,eAAwB;AAC1C,sBAAY;AACxB,UAAI,AAAU,SAAD;AACX;;AAEqC,MAAvC,AAA8B;AACoB,MAA5C,0BAAoB,aAAa,EAAE,QAAQ;AACjD,cAAO,SAAS;;;AAEZ,gBAAI,AAAS,AAAgB,AAAG,AAAM,QAA1B,8BAA4B,MACO,AAAM,CAAlD,AAAc,AAAG,aAAJ,MAAM,yCAAiC;AACxB,cAAd;;AAEjB;;;;AAEA,gBAAI,AAAS,AAAgB,AAAG,AAAM,QAA1B,8BAA4B,MACO,AAAM,CAAlD,AAAc,AAAG,aAAJ,MAAM,yCAAiC;AACxB,cAAd;;AAEjB;;;IAEN;;AAIyC,MAAvC,AAA8B;AACf,MAAT;IACR;;;;;;qEA/FyB;IAqClB,gCAA0B;;;EA2DnC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MApOa,+BAAoB;;;MACpB,yCAA8B;;;MAC5B,gCAAqB;;;MACrB,kCAAuB;;;MACvB,oCAAyB;;;MAG5B,2BAAgB;;;MASf,oCAAyB;;;MACzB,qCAA0B","file":"../../../../../../../../../../packages/flutter/src/cupertino/scrollbar.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__scrollbar: scrollbar$
  };
}));

//# sourceMappingURL=scrollbar.dart.lib.js.map