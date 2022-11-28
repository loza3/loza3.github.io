define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__cupertino__activity_indicator_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  var activity_indicator = Object.create(dart.library);
  var $length = dartx.length;
  var $floor = dartx.floor;
  var $modulo = dartx['%'];
  var $_get = dartx._get;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoActivityIndicator",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/activity_indicator.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoActivityIndicator",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/activity_indicator.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 14,
        [_Location_line]: 129,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/activity_indicator.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 12,
        [_Location_line]: 126,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/activity_indicator.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293651445.0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282137668.0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[6] || CT.C6,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[7] || CT.C7,
        [CupertinoDynamicColor_darkElevatedColor]: C[6] || CT.C6,
        [CupertinoDynamicColor_elevatedColor]: C[7] || CT.C7,
        [CupertinoDynamicColor_darkHighContrastColor]: C[6] || CT.C6,
        [CupertinoDynamicColor_highContrastColor]: C[7] || CT.C7,
        [CupertinoDynamicColor_darkColor]: C[6] || CT.C6,
        [CupertinoDynamicColor_color]: C[7] || CT.C7,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C[7] || CT.C7
      });
    },
    get C8() {
      return C[8] = dart.constList([47, 47, 47, 47, 72, 97, 122, 147], core.int);
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/cupertino/activity_indicator.dart",
    "package:flutter/src/cupertino/activity_indicator.dart"
  ];
  var color$ = dart.privateName(activity_indicator, "CupertinoActivityIndicator.color");
  var animating$ = dart.privateName(activity_indicator, "CupertinoActivityIndicator.animating");
  var radius$ = dart.privateName(activity_indicator, "CupertinoActivityIndicator.radius");
  var progress$ = dart.privateName(activity_indicator, "CupertinoActivityIndicator.progress");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  activity_indicator.CupertinoActivityIndicator = class CupertinoActivityIndicator extends framework.StatefulWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get animating() {
      return this[animating$];
    }
    set animating(value) {
      super.animating = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get progress() {
      return this[progress$];
    }
    set progress(value) {
      super.progress = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let animating = opts && 'animating' in opts ? opts.animating : true;
      let radius = opts && 'radius' in opts ? opts.radius : 10;
      return new activity_indicator.CupertinoActivityIndicator.new({key: key, color: color, animating: animating, radius: radius, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    static ['_#partiallyRevealed#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let radius = opts && 'radius' in opts ? opts.radius : 10;
      let progress = opts && 'progress' in opts ? opts.progress : 1;
      return new activity_indicator.CupertinoActivityIndicator.partiallyRevealed({key: key, color: color, radius: radius, progress: progress, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    createState() {
      return new activity_indicator._CupertinoActivityIndicatorState.new();
    }
  };
  (activity_indicator.CupertinoActivityIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let animating = opts && 'animating' in opts ? opts.animating : true;
    let radius = opts && 'radius' in opts ? opts.radius : 10;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[animating$] = animating;
    this[radius$] = radius;
    if (!(animating !== null)) dart.assertFailed(null, I[0], 39, 16, "animating != null");
    if (!(radius !== null)) dart.assertFailed(null, I[0], 40, 16, "radius != null");
    if (!(radius > 0.0)) dart.assertFailed(null, I[0], 41, 16, "radius > 0.0");
    this[progress$] = 1.0;
    activity_indicator.CupertinoActivityIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = activity_indicator.CupertinoActivityIndicator.prototype;
  (activity_indicator.CupertinoActivityIndicator.partiallyRevealed = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let radius = opts && 'radius' in opts ? opts.radius : 10;
    let progress = opts && 'progress' in opts ? opts.progress : 1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[radius$] = radius;
    this[progress$] = progress;
    if (!(radius !== null)) dart.assertFailed(null, I[0], 55, 16, "radius != null");
    if (!(radius > 0.0)) dart.assertFailed(null, I[0], 56, 16, "radius > 0.0");
    if (!(progress !== null)) dart.assertFailed(null, I[0], 57, 16, "progress != null");
    if (!(progress >= 0.0)) dart.assertFailed(null, I[0], 58, 16, "progress >= 0.0");
    if (!(progress <= 1.0)) dart.assertFailed(null, I[0], 59, 16, "progress <= 1.0");
    this[animating$] = false;
    activity_indicator.CupertinoActivityIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = activity_indicator.CupertinoActivityIndicator.prototype;
  dart.addTypeTests(activity_indicator.CupertinoActivityIndicator);
  dart.addTypeCaches(activity_indicator.CupertinoActivityIndicator);
  dart.setMethodSignature(activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getMethods(activity_indicator.CupertinoActivityIndicator.__proto__),
    createState: dart.fnType(framework.State$(activity_indicator.CupertinoActivityIndicator), [])
  }));
  dart.setLibraryUri(activity_indicator.CupertinoActivityIndicator, I[1]);
  dart.setFieldSignature(activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getFields(activity_indicator.CupertinoActivityIndicator.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    animating: dart.finalFieldType(core.bool),
    radius: dart.finalFieldType(core.double),
    progress: dart.finalFieldType(core.double)
  }));
  var ___CupertinoActivityIndicatorState__controller = dart.privateName(activity_indicator, "_#_CupertinoActivityIndicatorState#_controller");
  var _controller = dart.privateName(activity_indicator, "_controller");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(activity_indicator.CupertinoActivityIndicator) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(activity_indicator.CupertinoActivityIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(activity_indicator.CupertinoActivityIndicator));
  activity_indicator._CupertinoActivityIndicatorState = class _CupertinoActivityIndicatorState extends State_SingleTickerProviderStateMixin$36 {
    get [_controller]() {
      let t0;
      t0 = this[___CupertinoActivityIndicatorState__controller];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t0;
    }
    set [_controller](library$32package$58flutter$47src$47cupertino$47activity_indicator$46dart$58$58_controller$35param) {
      this[___CupertinoActivityIndicatorState__controller] = library$32package$58flutter$47src$47cupertino$47activity_indicator$46dart$58$58_controller$35param;
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C[2] || CT.C2, vsync: this});
      if (this.widget.animating) {
        this[_controller].repeat();
      }
    }
    didUpdateWidget(oldWidget) {
      activity_indicator.CupertinoActivityIndicator.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.animating !== oldWidget.animating) {
        if (this.widget.animating) {
          this[_controller].repeat();
        } else {
          this[_controller].stop();
        }
      }
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.SizedBox.new({height: this.widget.radius * 2, width: this.widget.radius * 2, child: new basic.CustomPaint.new({painter: new activity_indicator._CupertinoActivityIndicatorPainter.new({position: this[_controller], activeColor: (t0 = this.widget.color, t0 == null ? colors.CupertinoDynamicColor.resolve(activity_indicator._kActiveTickColor, context) : t0), radius: this.widget.radius, progress: this.widget.progress}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    static ['_#new#tearOff']() {
      return new activity_indicator._CupertinoActivityIndicatorState.new();
    }
  };
  (activity_indicator._CupertinoActivityIndicatorState.new = function() {
    this[___CupertinoActivityIndicatorState__controller] = null;
    activity_indicator._CupertinoActivityIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = activity_indicator._CupertinoActivityIndicatorState.prototype;
  dart.addTypeTests(activity_indicator._CupertinoActivityIndicatorState);
  dart.addTypeCaches(activity_indicator._CupertinoActivityIndicatorState);
  dart.setMethodSignature(activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getMethods(activity_indicator._CupertinoActivityIndicatorState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getGetters(activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getSetters(activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(activity_indicator._CupertinoActivityIndicatorState, I[1]);
  dart.setFieldSignature(activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getFields(activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [___CupertinoActivityIndicatorState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  activity_indicator._CupertinoActivityIndicatorPainter = class _CupertinoActivityIndicatorPainter extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let progress = opts && 'progress' in opts ? opts.progress : null;
      return new activity_indicator._CupertinoActivityIndicatorPainter.new({position: position, activeColor: activeColor, radius: radius, progress: progress});
    }
    paint(canvas, size) {
      let paint = ui.Paint.new();
      let tickCount = activity_indicator._kAlphaValues[$length];
      canvas.save();
      canvas.translate(size.width / 2.0, size.height / 2.0);
      let activeTick = (tickCount * this.position.value)[$floor]();
      for (let i = 0; i < tickCount * this.progress; i = i + 1) {
        let t = (i - activeTick)[$modulo](tickCount);
        paint.color = this.activeColor.withAlpha(this.progress < 1 ? 147 : activity_indicator._kAlphaValues[$_get](t));
        canvas.drawRRect(this.tickFundamentalRRect, paint);
        canvas.rotate(6.283185307179586 / tickCount);
      }
      canvas.restore();
    }
    shouldRepaint(oldPainter) {
      activity_indicator._CupertinoActivityIndicatorPainter.as(oldPainter);
      return !oldPainter.position[$_equals](this.position) || !oldPainter.activeColor._equals(this.activeColor) || oldPainter.progress !== this.progress;
    }
  };
  (activity_indicator._CupertinoActivityIndicatorPainter.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let progress = opts && 'progress' in opts ? opts.progress : null;
    this.position = position;
    this.activeColor = activeColor;
    this.radius = radius;
    this.progress = progress;
    this.tickFundamentalRRect = new ui.RRect.fromLTRBXY(-radius / 10, -radius / 3.0, radius / 10, -radius, radius / 10, radius / 10);
    activity_indicator._CupertinoActivityIndicatorPainter.__proto__.new.call(this, {repaint: position});
    ;
  }).prototype = activity_indicator._CupertinoActivityIndicatorPainter.prototype;
  dart.addTypeTests(activity_indicator._CupertinoActivityIndicatorPainter);
  dart.addTypeCaches(activity_indicator._CupertinoActivityIndicatorPainter);
  dart.setMethodSignature(activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getMethods(activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(activity_indicator._CupertinoActivityIndicatorPainter, I[1]);
  dart.setFieldSignature(activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getFields(activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    position: dart.finalFieldType(animation.Animation$(core.double)),
    activeColor: dart.finalFieldType(ui.Color),
    radius: dart.finalFieldType(core.double),
    progress: dart.finalFieldType(core.double),
    tickFundamentalRRect: dart.finalFieldType(ui.RRect)
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
  dart.defineLazy(activity_indicator, {
    /*activity_indicator._kDefaultIndicatorRadius*/get _kDefaultIndicatorRadius() {
      return 10;
    },
    /*activity_indicator._kActiveTickColor*/get _kActiveTickColor() {
      return C[5] || CT.C5;
    },
    /*activity_indicator._kTwoPI*/get _kTwoPI() {
      return 6.283185307179586;
    },
    /*activity_indicator._kAlphaValues*/get _kAlphaValues() {
      return C[8] || CT.C8;
    },
    /*activity_indicator._partiallyRevealedAlpha*/get _partiallyRevealedAlpha() {
      return 147;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/activity_indicator.dart", {
    "package:flutter/src/cupertino/activity_indicator.dart": activity_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["activity_indicator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgEe;;;;;;IAKF;;;;;;IAKE;;;;;;IAQA;;;;;;;;;;;;;;;;;;;;;AAGsC;IAAkC;;;QAnD7E;QACD;QACA;QACA;;IAFA;IACA;IACA;UACM,AAAU,SAAD;UACT,AAAO,MAAD;UACN,AAAO,MAAD,GAAG;IACP,kBAAE;AARX,iFACE,GAAG;;EAOS;;QASZ;QACD;QACA;QACA;;IAFA;IACA;IACA;UACM,AAAO,MAAD;UACN,AAAO,MAAD,GAAG;UACT,AAAS,QAAD;UACR,AAAS,QAAD,IAAI;UACZ,AAAS,QAAD,IAAI;IACT,mBAAE;AAVZ,iFACE,GAAG;;EASY;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BE;;IAAW;sBAAX;;IAAW;;AAIjB,MAAX;AAIL,MAHD,oBAAc,kFAEL;AAGT,UAAI,AAAO;AACW,QAApB,AAAY;;IAEhB;oBAGgD;;AACd,MAA1B,sBAAgB,SAAS;AAC/B,UAAI,AAAO,0BAAa,AAAU,SAAD;AAC/B,YAAI,AAAO;AACW,UAApB,AAAY;;AAEM,UAAlB,AAAY;;;IAGlB;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,iCACG,AAAO,AAAO,qBAAE,UACjB,AAAO,AAAO,qBAAE,UAChB,oCACI,yEACG,iCACgB,KAAb,AAAO,mBAAA,aAA+B,qCAAQ,sCAAmB,OAAO,iBAC7E,AAAO,8BACL,AAAO;IAIzB;;;;;;2DA/CyB;;;EAgD3B;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA4CoB,QAAa;AACjB,kBAAQ;AACV,sBAAY,AAAc;AAEvB,MAAb,AAAO,MAAD;AAC+C,MAArD,AAAO,MAAD,WAAW,AAAK,AAAM,IAAP,SAAS,KAAK,AAAK,AAAO,IAAR,UAAU;AAEvC,uBAA0C,CAA5B,AAAU,SAAD,GAAG,AAAS;AAE7C,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAU,SAAD,GAAG,eAAY,IAAF,AAAE,CAAC,GAAH;AAC9B,gBAAqB,CAAhB,AAAE,CAAD,GAAG,UAAU,WAAI,SAAS;AAE+B,QADzE,AAAM,KAAD,SAAS,AACT,2BAAU,AAAS,gBAAE,UAA8B,AAAa,wCAAC,CAAC;AAC1B,QAA7C,AAAO,MAAD,WAAW,2BAAsB,KAAK;AACV,QAAlC,AAAO,MAAD,QAAgB,oBAAE,SAAS;;AAGnB,MAAhB,AAAO,MAAD;IACR;kBAGsD;;AACpD,YAC0C,EADnC,AAAW,UAAD,oBAAa,mBAC1B,AAAW,UAAD,qBAAgB,qBAC1B,AAAW,UAAD,cAAa;IAC7B;;;QA/CgB;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;IACW,4BAAQ,wBAC3B,AAAQ,CAAP,MAAM,OACP,AAAQ,CAAP,MAAM,GAAG,KACV,AAAO,MAAD,OACN,CAAC,MAAM,EACP,AAAO,MAAD,OACN,AAAO,MAAD;AAER,6FAAe,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAlKnB,2CAAwB;;;MAGzB,oCAAiB;;;MA+HhB,0BAAO;;;MAIJ,gCAAa;;;MAYnB,0CAAuB","file":"../../../../../../../../../../packages/flutter/src/cupertino/activity_indicator.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__activity_indicator: activity_indicator
  };
}));

//# sourceMappingURL=activity_indicator.dart.lib.js.map
