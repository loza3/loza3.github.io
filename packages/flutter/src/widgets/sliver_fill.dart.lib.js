define(['dart_sdk', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/foundation/math.dart', 'packages/flutter/src/rendering/sliver_fill.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver_padding.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__sliver_fill_dart(dart_sdk, packages__flutter__src__widgets__title$46dart, packages__flutter__src__foundation__math$46dart, packages__flutter__src__rendering__sliver_fill$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver_padding$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const sliver = packages__flutter__src__widgets__title$46dart.src__widgets__sliver;
  const math = packages__flutter__src__foundation__math$46dart.src__foundation__math;
  const sliver_fill = packages__flutter__src__rendering__sliver_fill$46dart.src__rendering__sliver_fill;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver_padding = packages__flutter__src__rendering__sliver_padding$46dart.src__rendering__sliver_padding;
  const sliver$ = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var sliver_fill$ = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    DiagnosticsPropertyOfWidget: () => (T.DiagnosticsPropertyOfWidget = dart.constFn(diagnostics.DiagnosticsProperty$(framework.Widget)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    IterablePropertyOfString: () => (T.IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverFillViewport",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFillViewportRenderObjectWidget",
        [_Location_column]: 15,
        [_Location_line]: 64,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFractionalPadding",
        [_Location_column]: 12,
        [_Location_line]: 62,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFillViewportRenderObjectWidget",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFractionalPadding",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverFillRemaining",
        [_Location_column]: 9,
        [_Location_line]: 262,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFillRemainingWithScrollable",
        [_Location_column]: 14,
        [_Location_line]: 300,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFillRemainingWithoutScrollable",
        [_Location_column]: 14,
        [_Location_line]: 303,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFillRemainingAndOverscroll",
        [_Location_column]: 12,
        [_Location_line]: 305,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFillRemainingWithScrollable",
        [_Location_column]: 9,
        [_Location_line]: 329,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFillRemainingWithoutScrollable",
        [_Location_column]: 9,
        [_Location_line]: 338,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFillRemainingAndOverscroll",
        [_Location_column]: 9,
        [_Location_line]: 347,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    }
  }, false);
  var C = Array(14).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart",
    "package:flutter/src/widgets/sliver_fill.dart"
  ];
  var viewportFraction$ = dart.privateName(sliver_fill$, "SliverFillViewport.viewportFraction");
  var padEnds$ = dart.privateName(sliver_fill$, "SliverFillViewport.padEnds");
  var delegate$ = dart.privateName(sliver_fill$, "SliverFillViewport.delegate");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  sliver_fill$.SliverFillViewport = class SliverFillViewport extends framework.StatelessWidget {
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get padEnds() {
      return this[padEnds$];
    }
    set padEnds(value) {
      super.padEnds = value;
    }
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
      let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
      return new sliver_fill$.SliverFillViewport.new({key: key, delegate: delegate, viewportFraction: viewportFraction, padEnds: padEnds, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return new sliver_fill$._SliverFractionalPadding.new({viewportFraction: this.padEnds ? math.clampDouble(1 - this.viewportFraction, 0.0, 1.0) / 2 : 0.0, sliver: new sliver_fill$._SliverFillViewportRenderObjectWidget.new({viewportFraction: this.viewportFraction, delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
  };
  (sliver_fill$.SliverFillViewport.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$] = delegate;
    this[viewportFraction$] = viewportFraction;
    this[padEnds$] = padEnds;
    if (!(viewportFraction !== null)) dart.assertFailed(null, I[0], 33, 15, "viewportFraction != null");
    if (!(viewportFraction > 0.0)) dart.assertFailed(null, I[0], 34, 15, "viewportFraction > 0.0");
    if (!(padEnds !== null)) dart.assertFailed(null, I[0], 35, 15, "padEnds != null");
    sliver_fill$.SliverFillViewport.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$.SliverFillViewport.prototype;
  dart.addTypeTests(sliver_fill$.SliverFillViewport);
  dart.addTypeCaches(sliver_fill$.SliverFillViewport);
  dart.setMethodSignature(sliver_fill$.SliverFillViewport, () => ({
    __proto__: dart.getMethods(sliver_fill$.SliverFillViewport.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$.SliverFillViewport, I[1]);
  dart.setFieldSignature(sliver_fill$.SliverFillViewport, () => ({
    __proto__: dart.getFields(sliver_fill$.SliverFillViewport.__proto__),
    viewportFraction: dart.finalFieldType(core.double),
    padEnds: dart.finalFieldType(core.bool),
    delegate: dart.finalFieldType(sliver.SliverChildDelegate)
  }));
  var viewportFraction$0 = dart.privateName(sliver_fill$, "_SliverFillViewportRenderObjectWidget.viewportFraction");
  sliver_fill$._SliverFillViewportRenderObjectWidget = class _SliverFillViewportRenderObjectWidget extends sliver.SliverMultiBoxAdaptorWidget {
    get viewportFraction() {
      return this[viewportFraction$0];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    static ['_#new#tearOff'](opts) {
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
      return new sliver_fill$._SliverFillViewportRenderObjectWidget.new({delegate: delegate, viewportFraction: viewportFraction, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    createRenderObject(context) {
      let element = sliver.SliverMultiBoxAdaptorElement.as(context);
      return new sliver_fill.RenderSliverFillViewport.new({childManager: element, viewportFraction: this.viewportFraction});
    }
    updateRenderObject(context, renderObject) {
      sliver_fill.RenderSliverFillViewport.as(renderObject);
      renderObject.viewportFraction = this.viewportFraction;
    }
  };
  (sliver_fill$._SliverFillViewportRenderObjectWidget.new = function(opts) {
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[viewportFraction$0] = viewportFraction;
    if (!(viewportFraction !== null)) dart.assertFailed(null, I[0], 76, 15, "viewportFraction != null");
    if (!(viewportFraction > 0.0)) dart.assertFailed(null, I[0], 77, 14, "viewportFraction > 0.0");
    sliver_fill$._SliverFillViewportRenderObjectWidget.__proto__.new.call(this, {delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFillViewportRenderObjectWidget.prototype;
  dart.addTypeTests(sliver_fill$._SliverFillViewportRenderObjectWidget);
  dart.addTypeCaches(sliver_fill$._SliverFillViewportRenderObjectWidget);
  dart.setMethodSignature(sliver_fill$._SliverFillViewportRenderObjectWidget, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFillViewportRenderObjectWidget.__proto__),
    createRenderObject: dart.fnType(sliver_fill.RenderSliverFillViewport, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFillViewportRenderObjectWidget, I[1]);
  dart.setFieldSignature(sliver_fill$._SliverFillViewportRenderObjectWidget, () => ({
    __proto__: dart.getFields(sliver_fill$._SliverFillViewportRenderObjectWidget.__proto__),
    viewportFraction: dart.finalFieldType(core.double)
  }));
  var viewportFraction$1 = dart.privateName(sliver_fill$, "_SliverFractionalPadding.viewportFraction");
  sliver_fill$._SliverFractionalPadding = class _SliverFractionalPadding extends framework.SingleChildRenderObjectWidget {
    get viewportFraction() {
      return this[viewportFraction$1];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    static ['_#new#tearOff'](opts) {
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 0;
      let sliver = opts && 'sliver' in opts ? opts.sliver : null;
      return new sliver_fill$._SliverFractionalPadding.new({viewportFraction: viewportFraction, sliver: sliver, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    createRenderObject(context) {
      return new sliver_fill$._RenderSliverFractionalPadding.new({viewportFraction: this.viewportFraction});
    }
    updateRenderObject(context, renderObject) {
      sliver_fill$._RenderSliverFractionalPadding.as(renderObject);
      renderObject.viewportFraction = this.viewportFraction;
    }
  };
  (sliver_fill$._SliverFractionalPadding.new = function(opts) {
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 0;
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[viewportFraction$1] = viewportFraction;
    if (!(viewportFraction !== null)) dart.assertFailed(null, I[0], 97, 15, "viewportFraction != null");
    if (!(viewportFraction >= 0)) dart.assertFailed(null, I[0], 98, 14, "viewportFraction >= 0");
    if (!(viewportFraction <= 0.5)) dart.assertFailed(null, I[0], 99, 14, "viewportFraction <= 0.5");
    sliver_fill$._SliverFractionalPadding.__proto__.new.call(this, {child: sliver, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFractionalPadding.prototype;
  dart.addTypeTests(sliver_fill$._SliverFractionalPadding);
  dart.addTypeCaches(sliver_fill$._SliverFractionalPadding);
  dart.setMethodSignature(sliver_fill$._SliverFractionalPadding, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFractionalPadding.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFractionalPadding, I[1]);
  dart.setFieldSignature(sliver_fill$._SliverFractionalPadding, () => ({
    __proto__: dart.getFields(sliver_fill$._SliverFractionalPadding.__proto__),
    viewportFraction: dart.finalFieldType(core.double)
  }));
  var _lastResolvedConstraints = dart.privateName(sliver_fill$, "_lastResolvedConstraints");
  var _resolvedPadding = dart.privateName(sliver_fill$, "_resolvedPadding");
  var _viewportFraction = dart.privateName(sliver_fill$, "_viewportFraction");
  var _markNeedsResolution = dart.privateName(sliver_fill$, "_markNeedsResolution");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _resolve = dart.privateName(sliver_fill$, "_resolve");
  sliver_fill$._RenderSliverFractionalPadding = class _RenderSliverFractionalPadding extends sliver_padding.RenderSliverEdgeInsetsPadding {
    static ['_#new#tearOff'](opts) {
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 0;
      return new sliver_fill$._RenderSliverFractionalPadding.new({viewportFraction: viewportFraction});
    }
    get viewportFraction() {
      return this[_viewportFraction];
    }
    set viewportFraction(newValue) {
      if (!(newValue !== null)) dart.assertFailed(null, I[0], 126, 12, "newValue != null");
      if (this[_viewportFraction] === newValue) {
        return;
      }
      this[_viewportFraction] = newValue;
      this[_markNeedsResolution]();
    }
    get resolvedPadding() {
      return this[_resolvedPadding];
    }
    [_markNeedsResolution]() {
      this[_resolvedPadding] = null;
      this.markNeedsLayout();
    }
    [_resolve]() {
      if (this[_resolvedPadding] != null && dart.equals(this[_lastResolvedConstraints], this.constraints)) {
        return;
      }
      if (!(this.constraints.axis !== null)) dart.assertFailed(null, I[0], 148, 12, "constraints.axis != null");
      let paddingValue = this.constraints.viewportMainAxisExtent * this.viewportFraction;
      this[_lastResolvedConstraints] = this.constraints;
      switch (this.constraints.axis) {
        case C[5] || CT.C5:
          {
            this[_resolvedPadding] = new edge_insets.EdgeInsets.symmetric({horizontal: paddingValue});
            break;
          }
        case C[6] || CT.C6:
          {
            this[_resolvedPadding] = new edge_insets.EdgeInsets.symmetric({vertical: paddingValue});
            break;
          }
      }
      return;
    }
    performLayout() {
      this[_resolve]();
      super.performLayout();
    }
  };
  (sliver_fill$._RenderSliverFractionalPadding.new = function(opts) {
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 0;
    this[_lastResolvedConstraints] = null;
    this[_resolvedPadding] = null;
    if (!(viewportFraction !== null)) dart.assertFailed(null, I[0], 116, 15, "viewportFraction != null");
    if (!(viewportFraction <= 0.5)) dart.assertFailed(null, I[0], 117, 14, "viewportFraction <= 0.5");
    if (!(viewportFraction >= 0)) dart.assertFailed(null, I[0], 118, 14, "viewportFraction >= 0");
    this[_viewportFraction] = viewportFraction;
    sliver_fill$._RenderSliverFractionalPadding.__proto__.new.call(this);
    ;
  }).prototype = sliver_fill$._RenderSliverFractionalPadding.prototype;
  dart.addTypeTests(sliver_fill$._RenderSliverFractionalPadding);
  dart.addTypeCaches(sliver_fill$._RenderSliverFractionalPadding);
  dart.setMethodSignature(sliver_fill$._RenderSliverFractionalPadding, () => ({
    __proto__: dart.getMethods(sliver_fill$._RenderSliverFractionalPadding.__proto__),
    [_markNeedsResolution]: dart.fnType(dart.void, []),
    [_resolve]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_fill$._RenderSliverFractionalPadding, () => ({
    __proto__: dart.getGetters(sliver_fill$._RenderSliverFractionalPadding.__proto__),
    viewportFraction: core.double,
    resolvedPadding: dart.nullable(edge_insets.EdgeInsets)
  }));
  dart.setSetterSignature(sliver_fill$._RenderSliverFractionalPadding, () => ({
    __proto__: dart.getSetters(sliver_fill$._RenderSliverFractionalPadding.__proto__),
    viewportFraction: core.double
  }));
  dart.setLibraryUri(sliver_fill$._RenderSliverFractionalPadding, I[1]);
  dart.setFieldSignature(sliver_fill$._RenderSliverFractionalPadding, () => ({
    __proto__: dart.getFields(sliver_fill$._RenderSliverFractionalPadding.__proto__),
    [_lastResolvedConstraints]: dart.fieldType(dart.nullable(sliver$.SliverConstraints)),
    [_viewportFraction]: dart.fieldType(core.double),
    [_resolvedPadding]: dart.fieldType(dart.nullable(edge_insets.EdgeInsets))
  }));
  var child$ = dart.privateName(sliver_fill$, "SliverFillRemaining.child");
  var hasScrollBody$ = dart.privateName(sliver_fill$, "SliverFillRemaining.hasScrollBody");
  var fillOverscroll$ = dart.privateName(sliver_fill$, "SliverFillRemaining.fillOverscroll");
  sliver_fill$.SliverFillRemaining = class SliverFillRemaining extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get hasScrollBody() {
      return this[hasScrollBody$];
    }
    set hasScrollBody(value) {
      super.hasScrollBody = value;
    }
    get fillOverscroll() {
      return this[fillOverscroll$];
    }
    set fillOverscroll(value) {
      super.fillOverscroll = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let hasScrollBody = opts && 'hasScrollBody' in opts ? opts.hasScrollBody : true;
      let fillOverscroll = opts && 'fillOverscroll' in opts ? opts.fillOverscroll : false;
      return new sliver_fill$.SliverFillRemaining.new({key: key, child: child, hasScrollBody: hasScrollBody, fillOverscroll: fillOverscroll, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    build(context) {
      if (this.hasScrollBody) {
        return new sliver_fill$._SliverFillRemainingWithScrollable.new({child: this.child, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
      }
      if (!this.fillOverscroll) {
        return new sliver_fill$._SliverFillRemainingWithoutScrollable.new({child: this.child, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
      }
      return new sliver_fill$._SliverFillRemainingAndOverscroll.new({child: this.child, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfWidget()).new("child", this.child));
      let flags = (() => {
        let t0 = T.JSArrayOfString().of([]);
        if (this.hasScrollBody) t0.push("scrollable");
        if (this.fillOverscroll) t0.push("fillOverscroll");
        return t0;
      })();
      if (flags[$isEmpty]) {
        flags[$add]("nonscrollable");
      }
      properties.add(new (T.IterablePropertyOfString()).new("mode", flags));
    }
  };
  (sliver_fill$.SliverFillRemaining.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let hasScrollBody = opts && 'hasScrollBody' in opts ? opts.hasScrollBody : true;
    let fillOverscroll = opts && 'fillOverscroll' in opts ? opts.fillOverscroll : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[hasScrollBody$] = hasScrollBody;
    this[fillOverscroll$] = fillOverscroll;
    if (!(hasScrollBody !== null)) dart.assertFailed(null, I[0], 267, 15, "hasScrollBody != null");
    if (!(fillOverscroll !== null)) dart.assertFailed(null, I[0], 268, 15, "fillOverscroll != null");
    sliver_fill$.SliverFillRemaining.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$.SliverFillRemaining.prototype;
  dart.addTypeTests(sliver_fill$.SliverFillRemaining);
  dart.addTypeCaches(sliver_fill$.SliverFillRemaining);
  dart.setMethodSignature(sliver_fill$.SliverFillRemaining, () => ({
    __proto__: dart.getMethods(sliver_fill$.SliverFillRemaining.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$.SliverFillRemaining, I[1]);
  dart.setFieldSignature(sliver_fill$.SliverFillRemaining, () => ({
    __proto__: dart.getFields(sliver_fill$.SliverFillRemaining.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    hasScrollBody: dart.finalFieldType(core.bool),
    fillOverscroll: dart.finalFieldType(core.bool)
  }));
  sliver_fill$._SliverFillRemainingWithScrollable = class _SliverFillRemainingWithScrollable extends framework.SingleChildRenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new sliver_fill$._SliverFillRemainingWithScrollable.new({child: child, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    createRenderObject(context) {
      return new sliver_fill.RenderSliverFillRemainingWithScrollable.new();
    }
  };
  (sliver_fill$._SliverFillRemainingWithScrollable.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_fill$._SliverFillRemainingWithScrollable.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFillRemainingWithScrollable.prototype;
  dart.addTypeTests(sliver_fill$._SliverFillRemainingWithScrollable);
  dart.addTypeCaches(sliver_fill$._SliverFillRemainingWithScrollable);
  dart.setMethodSignature(sliver_fill$._SliverFillRemainingWithScrollable, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFillRemainingWithScrollable.__proto__),
    createRenderObject: dart.fnType(sliver_fill.RenderSliverFillRemainingWithScrollable, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFillRemainingWithScrollable, I[1]);
  sliver_fill$._SliverFillRemainingWithoutScrollable = class _SliverFillRemainingWithoutScrollable extends framework.SingleChildRenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new sliver_fill$._SliverFillRemainingWithoutScrollable.new({child: child, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    createRenderObject(context) {
      return new sliver_fill.RenderSliverFillRemaining.new();
    }
  };
  (sliver_fill$._SliverFillRemainingWithoutScrollable.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_fill$._SliverFillRemainingWithoutScrollable.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFillRemainingWithoutScrollable.prototype;
  dart.addTypeTests(sliver_fill$._SliverFillRemainingWithoutScrollable);
  dart.addTypeCaches(sliver_fill$._SliverFillRemainingWithoutScrollable);
  dart.setMethodSignature(sliver_fill$._SliverFillRemainingWithoutScrollable, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFillRemainingWithoutScrollable.__proto__),
    createRenderObject: dart.fnType(sliver_fill.RenderSliverFillRemaining, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFillRemainingWithoutScrollable, I[1]);
  sliver_fill$._SliverFillRemainingAndOverscroll = class _SliverFillRemainingAndOverscroll extends framework.SingleChildRenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new sliver_fill$._SliverFillRemainingAndOverscroll.new({child: child, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    createRenderObject(context) {
      return new sliver_fill.RenderSliverFillRemainingAndOverscroll.new();
    }
  };
  (sliver_fill$._SliverFillRemainingAndOverscroll.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_fill$._SliverFillRemainingAndOverscroll.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFillRemainingAndOverscroll.prototype;
  dart.addTypeTests(sliver_fill$._SliverFillRemainingAndOverscroll);
  dart.addTypeCaches(sliver_fill$._SliverFillRemainingAndOverscroll);
  dart.setMethodSignature(sliver_fill$._SliverFillRemainingAndOverscroll, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFillRemainingAndOverscroll.__proto__),
    createRenderObject: dart.fnType(sliver_fill.RenderSliverFillRemainingAndOverscroll, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFillRemainingAndOverscroll, I[1]);
  dart.trackLibraries("packages/flutter/src/widgets/sliver_fill.dart", {
    "package:flutter/src/widgets/sliver_fill.dart": sliver_fill$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_fill.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/sliver_fill.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__sliver_fill: sliver_fill$
  };
}));

//# sourceMappingURL=sliver_fill.dart.lib.js.map
