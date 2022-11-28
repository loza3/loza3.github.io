define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/box.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/animation/animation_controller.dart'], (function load__packages__my_ticket_care__src__shared__shared_widgets__loading_shimmer_widget_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__box$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__animation__animation_controller$46dart) {
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
  const box = packages__flutter__src__rendering__box$46dart.src__rendering__box;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  var loading_shimmer_widget = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    RectToShader: () => (T.RectToShader = dart.constFn(dart.fnType(ui.Shader, [ui.Rect])))(),
    RenderBoxN: () => (T.RenderBoxN = dart.constFn(dart.nullable(box.RenderBox)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ShimmerLoading",
        [_Location_column]: 9,
        [_Location_line]: 4,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_shimmer_widget.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 20,
        [_Location_line]: 55,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_shimmer_widget.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[2] || CT.C2,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ShaderMask",
        [_Location_column]: 12,
        [_Location_line]: 63,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_shimmer_widget.dart"
      });
    },
    get C5() {
      return C[5] = dart.constList([0.1, 0.3, 0.4], core.double);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293651444.0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294243572.0
      });
    },
    get C6() {
      return C[6] = dart.constList([C[7] || CT.C7, C[8] || CT.C8, C[7] || CT.C7], ui.Color);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.TileMode.prototype,
        [_Enum__name]: "clamp",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0.3,
        [Alignment_x]: 1
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -0.3,
        [Alignment_x]: -1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_transform]: null,
        [Gradient_stops]: C[5] || CT.C5,
        [Gradient_colors]: C[6] || CT.C6,
        [LinearGradient_tileMode]: C[9] || CT.C9,
        [LinearGradient_end]: C[10] || CT.C10,
        [LinearGradient_begin]: C[11] || CT.C11
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Shimmer",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_shimmer_widget.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 34,
        [_Location_line]: 157,
        [_Location_file]: "file:///home/loza/Documents/PasantiaMyTicket/frontend/App/my_ticket/lib/src/shared/shared_widgets/loading_shimmer_widget.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[16] || CT.C16,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: null
      });
    }
  }, false);
  var C = Array(17).fill(void 0);
  var I = ["package:my_ticket_care/src/shared/shared_widgets/loading_shimmer_widget.dart"];
  var isLoading$ = dart.privateName(loading_shimmer_widget, "ShimmerLoading.isLoading");
  var child$ = dart.privateName(loading_shimmer_widget, "ShimmerLoading.child");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  loading_shimmer_widget.ShimmerLoading = class ShimmerLoading extends framework.StatefulWidget {
    get isLoading() {
      return this[isLoading$];
    }
    set isLoading(value) {
      super.isLoading = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new loading_shimmer_widget.ShimmerLoading.new({key: key, isLoading: isLoading, child: child, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new loading_shimmer_widget._ShimmerLoadingState.new();
    }
  };
  (loading_shimmer_widget.ShimmerLoading.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[isLoading$] = isLoading;
    this[child$] = child;
    loading_shimmer_widget.ShimmerLoading.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = loading_shimmer_widget.ShimmerLoading.prototype;
  dart.addTypeTests(loading_shimmer_widget.ShimmerLoading);
  dart.addTypeCaches(loading_shimmer_widget.ShimmerLoading);
  dart.setMethodSignature(loading_shimmer_widget.ShimmerLoading, () => ({
    __proto__: dart.getMethods(loading_shimmer_widget.ShimmerLoading.__proto__),
    createState: dart.fnType(framework.State$(loading_shimmer_widget.ShimmerLoading), [])
  }));
  dart.setLibraryUri(loading_shimmer_widget.ShimmerLoading, I[0]);
  dart.setFieldSignature(loading_shimmer_widget.ShimmerLoading, () => ({
    __proto__: dart.getFields(loading_shimmer_widget.ShimmerLoading.__proto__),
    isLoading: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(framework.Widget)
  }));
  var _shimmerChanges = dart.privateName(loading_shimmer_widget, "_shimmerChanges");
  var _onShimmerChange = dart.privateName(loading_shimmer_widget, "_onShimmerChange");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  loading_shimmer_widget._ShimmerLoadingState = class _ShimmerLoadingState extends framework.State$(loading_shimmer_widget.ShimmerLoading) {
    didChangeDependencies() {
      let t0;
      super.didChangeDependencies();
      if (this[_shimmerChanges] != null) {
        dart.nullCheck(this[_shimmerChanges]).removeListener(dart.bind(this, _onShimmerChange));
      }
      this[_shimmerChanges] = (t0 = loading_shimmer_widget.Shimmer.of(this.context), t0 == null ? null : t0.shimmerChanges);
      if (this[_shimmerChanges] != null) {
        dart.nullCheck(this[_shimmerChanges]).addListener(dart.bind(this, _onShimmerChange));
      }
    }
    dispose() {
      let t0;
      t0 = this[_shimmerChanges];
      t0 == null ? null : t0.removeListener(dart.bind(this, _onShimmerChange));
      super.dispose();
    }
    [_onShimmerChange]() {
      if (this.widget.isLoading) {
        this.setState(dart.fn(() => {
        }, T.VoidTovoid()));
      }
    }
    build(context) {
      if (!this.widget.isLoading) {
        return this.widget.child;
      }
      let shimmer = dart.nullCheck(loading_shimmer_widget.Shimmer.of(context));
      if (!shimmer.isSized) {
        return C[1] || CT.C1;
      }
      let shimmerSize = shimmer.size;
      let gradient = shimmer.gradient;
      let offsetWithinShimmer = shimmer.getDescendantOffset({descendant: box.RenderBox.as(context.findRenderObject())});
      return new basic.ShaderMask.new({blendMode: ui.BlendMode.srcATop, shaderCallback: dart.fn(bounds => gradient.createShader(new ui.Rect.fromLTWH(-offsetWithinShimmer.dx, -offsetWithinShimmer.dy, shimmerSize.width, shimmerSize.height)), T.RectToShader()), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    static ['_#new#tearOff']() {
      return new loading_shimmer_widget._ShimmerLoadingState.new();
    }
  };
  (loading_shimmer_widget._ShimmerLoadingState.new = function() {
    this[_shimmerChanges] = null;
    loading_shimmer_widget._ShimmerLoadingState.__proto__.new.call(this);
    ;
  }).prototype = loading_shimmer_widget._ShimmerLoadingState.prototype;
  dart.addTypeTests(loading_shimmer_widget._ShimmerLoadingState);
  dart.addTypeCaches(loading_shimmer_widget._ShimmerLoadingState);
  dart.setMethodSignature(loading_shimmer_widget._ShimmerLoadingState, () => ({
    __proto__: dart.getMethods(loading_shimmer_widget._ShimmerLoadingState.__proto__),
    [_onShimmerChange]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(loading_shimmer_widget._ShimmerLoadingState, I[0]);
  dart.setFieldSignature(loading_shimmer_widget._ShimmerLoadingState, () => ({
    __proto__: dart.getFields(loading_shimmer_widget._ShimmerLoadingState.__proto__),
    [_shimmerChanges]: dart.fieldType(dart.nullable(change_notifier.Listenable))
  }));
  var slidePercent$ = dart.privateName(loading_shimmer_widget, "_SlidingGradientTransform.slidePercent");
  loading_shimmer_widget._SlidingGradientTransform = class _SlidingGradientTransform extends gradient.GradientTransform {
    get slidePercent() {
      return this[slidePercent$];
    }
    set slidePercent(value) {
      super.slidePercent = value;
    }
    static ['_#new#tearOff'](opts) {
      let slidePercent = opts && 'slidePercent' in opts ? opts.slidePercent : null;
      return new loading_shimmer_widget._SlidingGradientTransform.new({slidePercent: slidePercent});
    }
    transform(bounds, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return vector_math_64.Matrix4.translationValues(bounds.width * this.slidePercent, 0.0, 0.0);
    }
  };
  (loading_shimmer_widget._SlidingGradientTransform.new = function(opts) {
    let slidePercent = opts && 'slidePercent' in opts ? opts.slidePercent : null;
    this[slidePercent$] = slidePercent;
    loading_shimmer_widget._SlidingGradientTransform.__proto__.new.call(this);
    ;
  }).prototype = loading_shimmer_widget._SlidingGradientTransform.prototype;
  dart.addTypeTests(loading_shimmer_widget._SlidingGradientTransform);
  dart.addTypeCaches(loading_shimmer_widget._SlidingGradientTransform);
  dart.setMethodSignature(loading_shimmer_widget._SlidingGradientTransform, () => ({
    __proto__: dart.getMethods(loading_shimmer_widget._SlidingGradientTransform.__proto__),
    transform: dart.fnType(dart.nullable(vector_math_64.Matrix4), [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setLibraryUri(loading_shimmer_widget._SlidingGradientTransform, I[0]);
  dart.setFieldSignature(loading_shimmer_widget._SlidingGradientTransform, () => ({
    __proto__: dart.getFields(loading_shimmer_widget._SlidingGradientTransform.__proto__),
    slidePercent: dart.finalFieldType(core.double)
  }));
  var linearGradient = dart.privateName(loading_shimmer_widget, "Shimmer.linearGradient");
  var child$0 = dart.privateName(loading_shimmer_widget, "Shimmer.child");
  var Gradient_transform = dart.privateName(gradient, "Gradient.transform");
  var Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  var Color_value = dart.privateName(ui, "Color.value");
  var Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  var LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  loading_shimmer_widget.Shimmer = class Shimmer extends framework.StatefulWidget {
    get linearGradient() {
      return this[linearGradient];
    }
    set linearGradient(value) {
      super.linearGradient = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    static of(context) {
      return context.findAncestorStateOfType(loading_shimmer_widget.ShimmerState);
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new loading_shimmer_widget.Shimmer.new({key: key, child: child, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    createState() {
      return new loading_shimmer_widget.ShimmerState.new();
    }
  };
  (loading_shimmer_widget.Shimmer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[linearGradient] = C[4] || CT.C4;
    this[child$0] = child;
    loading_shimmer_widget.Shimmer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = loading_shimmer_widget.Shimmer.prototype;
  dart.addTypeTests(loading_shimmer_widget.Shimmer);
  dart.addTypeCaches(loading_shimmer_widget.Shimmer);
  dart.setMethodSignature(loading_shimmer_widget.Shimmer, () => ({
    __proto__: dart.getMethods(loading_shimmer_widget.Shimmer.__proto__),
    createState: dart.fnType(loading_shimmer_widget.ShimmerState, [])
  }));
  dart.setStaticMethodSignature(loading_shimmer_widget.Shimmer, () => ['of']);
  dart.setLibraryUri(loading_shimmer_widget.Shimmer, I[0]);
  dart.setFieldSignature(loading_shimmer_widget.Shimmer, () => ({
    __proto__: dart.getFields(loading_shimmer_widget.Shimmer.__proto__),
    linearGradient: dart.finalFieldType(gradient.LinearGradient),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  var __ShimmerState__shimmerController = dart.privateName(loading_shimmer_widget, "_#ShimmerState#_shimmerController");
  var _shimmerController = dart.privateName(loading_shimmer_widget, "_shimmerController");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(loading_shimmer_widget.Shimmer) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(loading_shimmer_widget.Shimmer)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(loading_shimmer_widget.Shimmer));
  loading_shimmer_widget.ShimmerState = class ShimmerState extends State_SingleTickerProviderStateMixin$36 {
    get shimmerChanges() {
      return this[_shimmerController];
    }
    get gradient() {
      return new gradient.LinearGradient.new({colors: this.widget.linearGradient.colors, stops: this.widget.linearGradient.stops, begin: this.widget.linearGradient.begin, end: this.widget.linearGradient.end, transform: new loading_shimmer_widget._SlidingGradientTransform.new({slidePercent: this[_shimmerController].value})});
    }
    get isSized() {
      let t0, t0$;
      t0$ = (t0 = T.RenderBoxN().as(this.context.findRenderObject()), t0 == null ? null : t0.hasSize);
      return t0$ == null ? false : t0$;
    }
    get size() {
      return box.RenderBox.as(this.context.findRenderObject()).size;
    }
    getDescendantOffset(opts) {
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let offset = opts && 'offset' in opts ? opts.offset : C[13] || CT.C13;
      let shimmerBox = box.RenderBox.as(this.context.findRenderObject());
      return descendant.localToGlobal(offset, {ancestor: shimmerBox});
    }
    get [_shimmerController]() {
      let t0;
      t0 = this[__ShimmerState__shimmerController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_shimmerController")) : t0;
    }
    set [_shimmerController](library$32package$58my_ticket_care$47src$47shared$47shared_widgets$47loading_shimmer_widget$46dart$58$58_shimmerController$35param) {
      this[__ShimmerState__shimmerController] = library$32package$58my_ticket_care$47src$47shared$47shared_widgets$47loading_shimmer_widget$46dart$58$58_shimmerController$35param;
    }
    initState() {
      let t0;
      super.initState();
      this[_shimmerController] = (t0 = new animation_controller.AnimationController.unbounded({vsync: this}), (() => {
        t0.repeat({min: -0.5, max: 1.5, period: C[14] || CT.C14});
        return t0;
      })());
    }
    dispose() {
      this[_shimmerController].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      t0 = this.widget.child;
      return t0 == null ? C[15] || CT.C15 : t0;
    }
    static ['_#new#tearOff']() {
      return new loading_shimmer_widget.ShimmerState.new();
    }
  };
  (loading_shimmer_widget.ShimmerState.new = function() {
    this[__ShimmerState__shimmerController] = null;
    loading_shimmer_widget.ShimmerState.__proto__.new.call(this);
    ;
  }).prototype = loading_shimmer_widget.ShimmerState.prototype;
  dart.addTypeTests(loading_shimmer_widget.ShimmerState);
  dart.addTypeCaches(loading_shimmer_widget.ShimmerState);
  dart.setMethodSignature(loading_shimmer_widget.ShimmerState, () => ({
    __proto__: dart.getMethods(loading_shimmer_widget.ShimmerState.__proto__),
    getDescendantOffset: dart.fnType(ui.Offset, [], {offset: ui.Offset}, {descendant: box.RenderBox}),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(loading_shimmer_widget.ShimmerState, () => ({
    __proto__: dart.getGetters(loading_shimmer_widget.ShimmerState.__proto__),
    shimmerChanges: change_notifier.Listenable,
    gradient: gradient.LinearGradient,
    isSized: core.bool,
    size: ui.Size,
    [_shimmerController]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(loading_shimmer_widget.ShimmerState, () => ({
    __proto__: dart.getSetters(loading_shimmer_widget.ShimmerState.__proto__),
    [_shimmerController]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(loading_shimmer_widget.ShimmerState, I[0]);
  dart.setFieldSignature(loading_shimmer_widget.ShimmerState, () => ({
    __proto__: dart.getFields(loading_shimmer_widget.ShimmerState.__proto__),
    [__ShimmerState__shimmerController]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  dart.trackLibraries("packages/my_ticket_care/src/shared/shared_widgets/loading_shimmer_widget.dart", {
    "package:my_ticket_care/src/shared/shared_widgets/loading_shimmer_widget.dart": loading_shimmer_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["loading_shimmer_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASa;;;;;;IACE;;;;;;;;;;;;;AAE0B;IAAsB;;;QARrD;QACQ;QACA;;IADA;IACA;AAHV,yEACE,GAAG;;EAGT;;;;;;;;;;;;;;;;;;;;;;;AAY6B,MAAvB;AACN,UAAI;AAC+C,QAAlC,AAAE,eAAjB,gDAAgC;;AAEmB,MAArD,8BAA0B,kCAAG,4BAAH,OAAa;AACvC,UAAI;AAC4C,QAA/B,AAAE,eAAjB,6CAA6B;;IAEjC;;;AAImD,WAAjD;0BAAiB,4BAAe;AACjB,MAAT;IACR;;AAGE,UAAI,AAAO;AAGP,QAFF,cAAS;;;IAIb;UAG0B;AACxB,WAAK,AAAO;AACV,cAAO,AAAO;;AAIV,oBAA6B,eAAX,kCAAG,OAAO;AAClC,WAAK,AAAQ,OAAD;AAGV;;AAEI,wBAAc,AAAQ,OAAD;AACrB,qBAAW,AAAQ,OAAD;AAClB,gCAAsB,AAAQ,OAAD,kCACM,iBAA3B,AAAQ,OAAD;AAGrB,YAAO,sCACgB,sCACL,QAAC,UACR,AAAS,QAAD,cACR,qBACH,CAAC,AAAoB,mBAAD,KACpB,CAAC,AAAoB,mBAAD,KACpB,AAAY,WAAD,QACX,AAAY,WAAD,qCAIV,AAAO;IAElB;;;;;;IA5DY;;;EA6Dd;;;;;;;;;;;;;;;IAOe;;;;;;;;;;cAGW;UAAwB;AAC9C,YAAe,0CAAkB,AAAO,AAAM,MAAP,SAAS,mBAAc,KAAK;IACrE;;;QARgB;;AADV;;EAEJ;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBmB;;;;;;IAMP;;;;;;cAfuB;AACnC,YAAO,AAAQ,QAAD;IAChB;;;;;;;AAgB8B;IAAc;;;QAbpC;QACD;;IAGc;IAHd;AAFD,kEACE,GAAG;;EAET;;;;;;;;;;;;;;;;;;;;;;;;;;;AAe+B;IAAkB;;AACpB,sDACjB,AAAO,AAAe,0CACvB,AAAO,AAAe,yCACtB,AAAO,AAAe,uCACxB,AAAO,AAAe,2CAEvB,wEAAwC,AAAmB;IAChE;;;AAGD,kBAA4B,kBAA3B,AAAQ,+CAAmB,OAAgB;YAAhB,eAA2B;IAAK;;AAE/C,YAA4B,AAAc,kBAAzC,AAAQ;IAAqC;;UAG1C;UACZ;AAED,uBAAwC,iBAA3B,AAAQ;AAC3B,YAAO,AAAW,WAAD,eAAe,MAAM,aAAY,UAAU;IAC9D;;;AAEyB;;IAAkB;6BAAlB;;IAAkB;;;AAIxB,MAAX;AAGqE,MAD3E,iCAAyC,+DAAiB,QAAjB;AACrC,wBAAY,CAAC,UAAU;;;IAC7B;;AAI8B,MAA5B,AAAmB;AACJ,MAAT;IACR;UAG0B;;AACxB,WAAO,AAAO;YAAA;IAChB;;;;;;8CAnByB;;;EAoB3B","file":"../../../../../../../../../../../packages/my_ticket_care/src/shared/shared_widgets/loading_shimmer_widget.dart.lib.js"}');
  // Exports:
  return {
    src__shared__shared_widgets__loading_shimmer_widget: loading_shimmer_widget
  };
}));

//# sourceMappingURL=loading_shimmer_widget.dart.lib.js.map
