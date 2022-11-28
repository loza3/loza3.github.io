define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/widgets/title.dart', 'packages/flutter/src/rendering/animated_size.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/scheduler/ticker.dart'], (function load__packages__flutter__src__widgets__animated_size_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__widgets__title$46dart, packages__flutter__src__rendering__animated_size$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__scheduler__ticker$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const widget_inspector = packages__flutter__src__widgets__title$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__title$46dart.src__widgets__framework;
  const ticker_provider = packages__flutter__src__widgets__title$46dart.src__widgets__ticker_provider;
  const basic = packages__flutter__src__widgets__title$46dart.src__widgets__basic;
  const animated_size = packages__flutter__src__rendering__animated_size$46dart.src__rendering__animated_size;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  var animated_size$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    DiagnosticsPropertyOfAlignmentGeometry: () => (T.DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: curves._Linear.prototype
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
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedSize",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_size.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_AnimatedSize",
        [_Location_column]: 12,
        [_Location_line]: 96,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_size.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_AnimatedSize",
        [_Location_column]: 9,
        [_Location_line]: 109,
        [_Location_file]: "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_size.dart"
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/widgets/animated_size.dart",
    "package:flutter/src/widgets/animated_size.dart"
  ];
  var child$ = dart.privateName(animated_size$, "AnimatedSize.child");
  var alignment$ = dart.privateName(animated_size$, "AnimatedSize.alignment");
  var curve$ = dart.privateName(animated_size$, "AnimatedSize.curve");
  var duration$ = dart.privateName(animated_size$, "AnimatedSize.duration");
  var reverseDuration$ = dart.privateName(animated_size$, "AnimatedSize.reverseDuration");
  var clipBehavior$ = dart.privateName(animated_size$, "AnimatedSize.clipBehavior");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  animated_size$.AnimatedSize = class AnimatedSize extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get reverseDuration() {
      return this[reverseDuration$];
    }
    set reverseDuration(value) {
      super.reverseDuration = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
      let curve = opts && 'curve' in opts ? opts.curve : C[1] || CT.C1;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
      return new animated_size$.AnimatedSize.new({key: key, child: child, alignment: alignment, curve: curve, duration: duration, reverseDuration: reverseDuration, vsync: vsync, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    createState() {
      return new animated_size$._AnimatedSizeState.new();
    }
  };
  (animated_size$.AnimatedSize.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let curve = opts && 'curve' in opts ? opts.curve : C[1] || CT.C1;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[alignment$] = alignment;
    this[curve$] = curve;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[clipBehavior$] = clipBehavior;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 41, 15, "clipBehavior != null");
    animated_size$.AnimatedSize.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = animated_size$.AnimatedSize.prototype;
  dart.addTypeTests(animated_size$.AnimatedSize);
  dart.addTypeCaches(animated_size$.AnimatedSize);
  dart.setMethodSignature(animated_size$.AnimatedSize, () => ({
    __proto__: dart.getMethods(animated_size$.AnimatedSize.__proto__),
    createState: dart.fnType(framework.State$(animated_size$.AnimatedSize), [])
  }));
  dart.setLibraryUri(animated_size$.AnimatedSize, I[1]);
  dart.setFieldSignature(animated_size$.AnimatedSize, () => ({
    __proto__: dart.getFields(animated_size$.AnimatedSize.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    curve: dart.finalFieldType(curves.Curve),
    duration: dart.finalFieldType(core.Duration),
    reverseDuration: dart.finalFieldType(dart.nullable(core.Duration)),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(animated_size$.AnimatedSize) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(animated_size$.AnimatedSize)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(animated_size$.AnimatedSize));
  animated_size$._AnimatedSizeState = class _AnimatedSizeState extends State_SingleTickerProviderStateMixin$36 {
    build(context) {
      return new animated_size$._AnimatedSize.new({alignment: this.widget.alignment, curve: this.widget.curve, duration: this.widget.duration, reverseDuration: this.widget.reverseDuration, vsync: this, clipBehavior: this.widget.clipBehavior, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    static ['_#new#tearOff']() {
      return new animated_size$._AnimatedSizeState.new();
    }
  };
  (animated_size$._AnimatedSizeState.new = function() {
    animated_size$._AnimatedSizeState.__proto__.new.call(this);
    ;
  }).prototype = animated_size$._AnimatedSizeState.prototype;
  dart.addTypeTests(animated_size$._AnimatedSizeState);
  dart.addTypeCaches(animated_size$._AnimatedSizeState);
  dart.setMethodSignature(animated_size$._AnimatedSizeState, () => ({
    __proto__: dart.getMethods(animated_size$._AnimatedSizeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(animated_size$._AnimatedSizeState, I[1]);
  var alignment$0 = dart.privateName(animated_size$, "_AnimatedSize.alignment");
  var curve$0 = dart.privateName(animated_size$, "_AnimatedSize.curve");
  var duration$0 = dart.privateName(animated_size$, "_AnimatedSize.duration");
  var reverseDuration$0 = dart.privateName(animated_size$, "_AnimatedSize.reverseDuration");
  var vsync$ = dart.privateName(animated_size$, "_AnimatedSize.vsync");
  var clipBehavior$0 = dart.privateName(animated_size$, "_AnimatedSize.clipBehavior");
  animated_size$._AnimatedSize = class _AnimatedSize extends framework.SingleChildRenderObjectWidget {
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    get duration() {
      return this[duration$0];
    }
    set duration(value) {
      super.duration = value;
    }
    get reverseDuration() {
      return this[reverseDuration$0];
    }
    set reverseDuration(value) {
      super.reverseDuration = value;
    }
    get vsync() {
      return this[vsync$];
    }
    set vsync(value) {
      super.vsync = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
      let curve = opts && 'curve' in opts ? opts.curve : C[1] || CT.C1;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
      return new animated_size$._AnimatedSize.new({child: child, alignment: alignment, curve: curve, duration: duration, reverseDuration: reverseDuration, vsync: vsync, clipBehavior: clipBehavior, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    createRenderObject(context) {
      return new animated_size.RenderAnimatedSize.new({alignment: this.alignment, duration: this.duration, reverseDuration: this.reverseDuration, curve: this.curve, vsync: this.vsync, textDirection: basic.Directionality.maybeOf(context), clipBehavior: this.clipBehavior});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      animated_size.RenderAnimatedSize.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.alignment = this.alignment;
        t0.duration = this.duration;
        t0.reverseDuration = this.reverseDuration;
        t0.curve = this.curve;
        t0.vsync = this.vsync;
        t0.textDirection = basic.Directionality.maybeOf(context);
        t0.clipBehavior = this.clipBehavior;
        return t0;
      })();
    }
    debugFillProperties(properties) {
      let t0;
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {defaultValue: alignment.Alignment.topCenter}));
      properties.add(new diagnostics.IntProperty.new("duration", this.duration.inMilliseconds, {unit: "ms"}));
      properties.add(new diagnostics.IntProperty.new("reverseDuration", (t0 = this.reverseDuration, t0 == null ? null : t0.inMilliseconds), {unit: "ms", defaultValue: null}));
    }
  };
  (animated_size$._AnimatedSize.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let curve = opts && 'curve' in opts ? opts.curve : C[1] || CT.C1;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alignment$0] = alignment;
    this[curve$0] = curve;
    this[duration$0] = duration;
    this[reverseDuration$0] = reverseDuration;
    this[vsync$] = vsync;
    this[clipBehavior$0] = clipBehavior;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 117, 15, "clipBehavior != null");
    animated_size$._AnimatedSize.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = animated_size$._AnimatedSize.prototype;
  dart.addTypeTests(animated_size$._AnimatedSize);
  dart.addTypeCaches(animated_size$._AnimatedSize);
  dart.setMethodSignature(animated_size$._AnimatedSize, () => ({
    __proto__: dart.getMethods(animated_size$._AnimatedSize.__proto__),
    createRenderObject: dart.fnType(animated_size.RenderAnimatedSize, [framework.BuildContext])
  }));
  dart.setLibraryUri(animated_size$._AnimatedSize, I[1]);
  dart.setFieldSignature(animated_size$._AnimatedSize, () => ({
    __proto__: dart.getFields(animated_size$._AnimatedSize.__proto__),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    curve: dart.finalFieldType(curves.Curve),
    duration: dart.finalFieldType(core.Duration),
    reverseDuration: dart.finalFieldType(dart.nullable(core.Duration)),
    vsync: dart.finalFieldType(ticker.TickerProvider),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/animated_size.dart", {
    "package:flutter/src/widgets/animated_size.dart": animated_size$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animated_size.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6CgB;;;;;;IAqBU;;;;;;IAIZ;;;;;;IAIG;;;;;;IAMC;;;;;;IAKL;;;;;;;;;;;;;;;;;;AAG0B;IAAoB;;;QA5DjD;QACD;QACA;QACA;QACS;QACT;QAKW;QACX;;IAVA;IACA;IACA;IACS;IACT;IAMA;UACK,AAAa,YAAD;AAblB,+DACE,GAAG;;EAYsB;;;;;;;;;;;;;;;;;;;;;;;;UAsDP;AACxB,YAAO,kDACM,AAAO,8BACX,AAAO,6BACJ,AAAO,uCACA,AAAO,oCACjB,oBACO,AAAO,iCACd,AAAO;IAElB;;;;;;;;EACF;;;;;;;;;;;;;;;IAa0B;;;;;;IACZ;;;;;;IACG;;;;;;IACC;;;;;;IAGK;;;;;;IAEV;;;;;;;;;;;;;;;;uBAGwC;AACjD,YAAO,sDACM,0BACD,gCACO,6BACV,mBACA,2BACuB,6BAAQ,OAAO,iBAC/B;IAElB;uBAGqC,SAA4B;;;AAQhC,WAP/B,YAAY;MAAZ;AACI,uBAAY;AACZ,sBAAW;AACX,6BAAkB;AAClB,mBAAQ;AACR,mBAAQ;AACR,2BAA+B,6BAAQ,OAAO;AAC9C,0BAAe;;;IACrB;wBAGqD;;AACd,MAA/B,0BAAoB,UAAU;AAC6E,MAAjH,AAAW,UAAD,KAAK,qDAAuC,aAAa,+BAAmC;AAC1B,MAA5E,AAAW,UAAD,KAAK,gCAAY,YAAY,AAAS,qCAAsB;AACyC,MAA/G,AAAW,UAAD,KAAK,gCAAY,4DAAmB,OAAiB,2BAAsB,oBAAoB;IAC3G;;;QAlDQ;QACD;QACA;QACS;QACT;QACS;QACT;;IALA;IACA;IACS;IACT;IACS;IACT;UACK,AAAa,YAAD;AARlB,kEACE,KAAK;;EAOoB","file":"../../../../../../../../../../packages/flutter/src/widgets/animated_size.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__animated_size: animated_size$
  };
}));

//# sourceMappingURL=animated_size.dart.lib.js.map
