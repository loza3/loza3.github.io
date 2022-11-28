define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/foundation/key.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/proxy_box.dart'], (function load__packages__flutter__src__rendering__custom_paint_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__foundation__key$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__proxy_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  var custom_paint = Object.create(dart.library);
  var $toString = dartx.toString;
  var $runtimeType = dartx.runtimeType;
  var $isFinite = dartx.isFinite;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  var $addAll = dartx.addAll;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $insert = dartx.insert;
  var $remove = dartx.remove;
  var $_equals = dartx._equals;
  var $cast = dartx.cast;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidToint: () => (T.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    intTodynamic: () => (T.intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    JSArrayOfSemanticsNode: () => (T.JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))(),
    LinkedMapOfKey$int: () => (T.LinkedMapOfKey$int = dart.constFn(_js_helper.LinkedMap$(key.Key, core.int)))(),
    SemanticsNodeN: () => (T.SemanticsNodeN = dart.constFn(dart.nullable(semantics.SemanticsNode)))(),
    ListOfSemanticsNodeN: () => (T.ListOfSemanticsNodeN = dart.constFn(core.List$(T.SemanticsNodeN())))(),
    MapOfKey$SemanticsNode: () => (T.MapOfKey$SemanticsNode = dart.constFn(core.Map$(key.Key, semantics.SemanticsNode)))(),
    VoidToMapOfKey$SemanticsNode: () => (T.VoidToMapOfKey$SemanticsNode = dart.constFn(dart.fnType(T.MapOfKey$SemanticsNode(), [])))(),
    MapOfKey$SemanticsNodeTodynamic: () => (T.MapOfKey$SemanticsNodeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.MapOfKey$SemanticsNode()])))(),
    LinkedMapOfKey$SemanticsNode: () => (T.LinkedMapOfKey$SemanticsNode = dart.constFn(_js_helper.LinkedMap$(key.Key, semantics.SemanticsNode)))(),
    DiagnosticsPropertyOfSize: () => (T.DiagnosticsPropertyOfSize = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Size)))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C1() {
      return C[1] = dart.constList([], custom_paint.CustomPainterSemantics);
    },
    get C2() {
      return C[2] = dart.constList([], semantics.SemanticsNode);
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "package:flutter/src/rendering/custom_paint.dart",
    "file:///home/loza/CosasInstaladasManualmente/flutter_linux_3.0.2-stable/flutter/packages/flutter/lib/src/rendering/custom_paint.dart"
  ];
  var _repaint = dart.privateName(custom_paint, "CustomPainter._repaint");
  var _repaint$ = dart.privateName(custom_paint, "_repaint");
  custom_paint.CustomPainter = class CustomPainter extends change_notifier.Listenable {
    get [_repaint$]() {
      return this[_repaint];
    }
    set [_repaint$](value) {
      super[_repaint$] = value;
    }
    addListener(listener) {
      let t0;
      t0 = this[_repaint$];
      return t0 == null ? null : t0.addListener(listener);
    }
    removeListener(listener) {
      let t0;
      t0 = this[_repaint$];
      return t0 == null ? null : t0.removeListener(listener);
    }
    get semanticsBuilder() {
      return null;
    }
    shouldRebuildSemantics(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return this.shouldRepaint(oldDelegate);
    }
    hitTest(position) {
      return null;
    }
    toString() {
      let t0, t0$;
      return diagnostics.describeIdentity(this) + "(" + dart.str((t0$ = (t0 = this[_repaint$], t0 == null ? null : dart.toString(t0)), t0$ == null ? "" : t0$)) + ")";
    }
  };
  (custom_paint.CustomPainter.new = function(opts) {
    let repaint = opts && 'repaint' in opts ? opts.repaint : null;
    this[_repaint] = repaint;
    custom_paint.CustomPainter.__proto__.new.call(this);
    ;
  }).prototype = custom_paint.CustomPainter.prototype;
  dart.addTypeTests(custom_paint.CustomPainter);
  dart.addTypeCaches(custom_paint.CustomPainter);
  dart.setMethodSignature(custom_paint.CustomPainter, () => ({
    __proto__: dart.getMethods(custom_paint.CustomPainter.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    shouldRebuildSemantics: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    hitTest: dart.fnType(dart.nullable(core.bool), [ui.Offset])
  }));
  dart.setGetterSignature(custom_paint.CustomPainter, () => ({
    __proto__: dart.getGetters(custom_paint.CustomPainter.__proto__),
    semanticsBuilder: dart.nullable(dart.fnType(core.List$(custom_paint.CustomPainterSemantics), [ui.Size]))
  }));
  dart.setLibraryUri(custom_paint.CustomPainter, I[0]);
  dart.setFieldSignature(custom_paint.CustomPainter, () => ({
    __proto__: dart.getFields(custom_paint.CustomPainter.__proto__),
    [_repaint$]: dart.finalFieldType(dart.nullable(change_notifier.Listenable))
  }));
  dart.defineExtensionMethods(custom_paint.CustomPainter, ['toString']);
  var key$ = dart.privateName(custom_paint, "CustomPainterSemantics.key");
  var rect$ = dart.privateName(custom_paint, "CustomPainterSemantics.rect");
  var transform$ = dart.privateName(custom_paint, "CustomPainterSemantics.transform");
  var properties$ = dart.privateName(custom_paint, "CustomPainterSemantics.properties");
  var tags$ = dart.privateName(custom_paint, "CustomPainterSemantics.tags");
  custom_paint.CustomPainterSemantics = class CustomPainterSemantics extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get properties() {
      return this[properties$];
    }
    set properties(value) {
      super.properties = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      super.tags = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let properties = opts && 'properties' in opts ? opts.properties : null;
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let tags = opts && 'tags' in opts ? opts.tags : null;
      return new custom_paint.CustomPainterSemantics.new({key: key, rect: rect, properties: properties, transform: transform, tags: tags});
    }
  };
  (custom_paint.CustomPainterSemantics.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let properties = opts && 'properties' in opts ? opts.properties : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    this[key$] = key;
    this[rect$] = rect;
    this[properties$] = properties;
    this[transform$] = transform;
    this[tags$] = tags;
    if (!(rect !== null)) dart.assertFailed(null, I[1], 297, 15, "rect != null");
    if (!(properties !== null)) dart.assertFailed(null, I[1], 298, 15, "properties != null");
    ;
  }).prototype = custom_paint.CustomPainterSemantics.prototype;
  dart.addTypeTests(custom_paint.CustomPainterSemantics);
  dart.addTypeCaches(custom_paint.CustomPainterSemantics);
  dart.setLibraryUri(custom_paint.CustomPainterSemantics, I[0]);
  dart.setFieldSignature(custom_paint.CustomPainterSemantics, () => ({
    __proto__: dart.getFields(custom_paint.CustomPainterSemantics.__proto__),
    key: dart.finalFieldType(dart.nullable(key.Key)),
    rect: dart.finalFieldType(ui.Rect),
    transform: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    properties: dart.finalFieldType(semantics.SemanticsProperties),
    tags: dart.finalFieldType(dart.nullable(core.Set$(semantics.SemanticsTag)))
  }));
  var isComplex$ = dart.privateName(custom_paint, "RenderCustomPaint.isComplex");
  var willChange$ = dart.privateName(custom_paint, "RenderCustomPaint.willChange");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var _backgroundSemanticsBuilder = dart.privateName(custom_paint, "_backgroundSemanticsBuilder");
  var _foregroundSemanticsBuilder = dart.privateName(custom_paint, "_foregroundSemanticsBuilder");
  var _backgroundSemanticsNodes = dart.privateName(custom_paint, "_backgroundSemanticsNodes");
  var _foregroundSemanticsNodes = dart.privateName(custom_paint, "_foregroundSemanticsNodes");
  var _painter = dart.privateName(custom_paint, "_painter");
  var _foregroundPainter = dart.privateName(custom_paint, "_foregroundPainter");
  var _preferredSize = dart.privateName(custom_paint, "_preferredSize");
  var _didUpdatePainter = dart.privateName(custom_paint, "_didUpdatePainter");
  var _paintWithPainter = dart.privateName(custom_paint, "_paintWithPainter");
  var _setRasterCacheHints = dart.privateName(custom_paint, "_setRasterCacheHints");
  custom_paint.RenderCustomPaint = class RenderCustomPaint extends proxy_box.RenderProxyBox {
    get isComplex() {
      return this[isComplex$];
    }
    set isComplex(value) {
      this[isComplex$] = value;
    }
    get willChange() {
      return this[willChange$];
    }
    set willChange(value) {
      this[willChange$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let painter = opts && 'painter' in opts ? opts.painter : null;
      let foregroundPainter = opts && 'foregroundPainter' in opts ? opts.foregroundPainter : null;
      let preferredSize = opts && 'preferredSize' in opts ? opts.preferredSize : C[0] || CT.C0;
      let isComplex = opts && 'isComplex' in opts ? opts.isComplex : false;
      let willChange = opts && 'willChange' in opts ? opts.willChange : false;
      let child = opts && 'child' in opts ? opts.child : null;
      return new custom_paint.RenderCustomPaint.new({painter: painter, foregroundPainter: foregroundPainter, preferredSize: preferredSize, isComplex: isComplex, willChange: willChange, child: child});
    }
    get painter() {
      return this[_painter];
    }
    set painter(value) {
      if (dart.equals(this[_painter], value)) {
        return;
      }
      let oldPainter = this[_painter];
      this[_painter] = value;
      this[_didUpdatePainter](this[_painter], oldPainter);
    }
    get foregroundPainter() {
      return this[_foregroundPainter];
    }
    set foregroundPainter(value) {
      if (dart.equals(this[_foregroundPainter], value)) {
        return;
      }
      let oldPainter = this[_foregroundPainter];
      this[_foregroundPainter] = value;
      this[_didUpdatePainter](this[_foregroundPainter], oldPainter);
    }
    [_didUpdatePainter](newPainter, oldPainter) {
      let t0, t0$;
      if (newPainter == null) {
        if (!(oldPainter != null)) dart.assertFailed(null, I[1], 435, 14, "oldPainter != null");
        this.markNeedsPaint();
      } else if (oldPainter == null || !dart.runtimeType(newPainter)._equals(dart.runtimeType(oldPainter)) || newPainter.shouldRepaint(oldPainter)) {
        this.markNeedsPaint();
      }
      if (this.attached) {
        t0 = oldPainter;
        t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsPaint'));
        t0$ = newPainter;
        t0$ == null ? null : t0$.addListener(dart.bind(this, 'markNeedsPaint'));
      }
      if (newPainter == null) {
        if (!(oldPainter != null)) dart.assertFailed(null, I[1], 449, 14, "oldPainter != null");
        if (this.attached) {
          this.markNeedsSemanticsUpdate();
        }
      } else if (oldPainter == null || !dart.runtimeType(newPainter)._equals(dart.runtimeType(oldPainter)) || newPainter.shouldRebuildSemantics(oldPainter)) {
        this.markNeedsSemanticsUpdate();
      }
    }
    get preferredSize() {
      return this[_preferredSize];
    }
    set preferredSize(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 470, 12, "value != null");
      if (this.preferredSize._equals(value)) {
        return;
      }
      this[_preferredSize] = value;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (this.child == null) {
        return this.preferredSize.width[$isFinite] ? this.preferredSize.width : 0.0;
      }
      return super.computeMinIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (this.child == null) {
        return this.preferredSize.width[$isFinite] ? this.preferredSize.width : 0.0;
      }
      return super.computeMaxIntrinsicWidth(height);
    }
    computeMinIntrinsicHeight(width) {
      if (this.child == null) {
        return this.preferredSize.height[$isFinite] ? this.preferredSize.height : 0.0;
      }
      return super.computeMinIntrinsicHeight(width);
    }
    computeMaxIntrinsicHeight(width) {
      if (this.child == null) {
        return this.preferredSize.height[$isFinite] ? this.preferredSize.height : 0.0;
      }
      return super.computeMaxIntrinsicHeight(width);
    }
    attach(owner) {
      let t0, t0$;
      object.PipelineOwner.as(owner);
      super.attach(owner);
      t0 = this[_painter];
      t0 == null ? null : t0.addListener(dart.bind(this, 'markNeedsPaint'));
      t0$ = this[_foregroundPainter];
      t0$ == null ? null : t0$.addListener(dart.bind(this, 'markNeedsPaint'));
    }
    detach() {
      let t0, t0$;
      t0 = this[_painter];
      t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsPaint'));
      t0$ = this[_foregroundPainter];
      t0$ == null ? null : t0$.removeListener(dart.bind(this, 'markNeedsPaint'));
      super.detach();
    }
    hitTestChildren(result, opts) {
      let t0;
      let position = opts && 'position' in opts ? opts.position : null;
      if (this[_foregroundPainter] != null && dart.test((t0 = dart.nullCheck(this[_foregroundPainter]).hitTest(position), t0 == null ? false : t0))) {
        return true;
      }
      return super.hitTestChildren(result, {position: position});
    }
    hitTestSelf(position) {
      let t0;
      return this[_painter] != null && dart.test((t0 = dart.nullCheck(this[_painter]).hitTest(position), t0 == null ? true : t0));
    }
    performLayout() {
      super.performLayout();
      this.markNeedsSemanticsUpdate();
    }
    computeSizeForNoChild(constraints) {
      return constraints.constrain(this.preferredSize);
    }
    [_paintWithPainter](canvas, offset, painter) {
      let debugPreviousCanvasSaveCount = null;
      function debugPreviousCanvasSaveCount$35get() {
        let t1;
        t1 = debugPreviousCanvasSaveCount;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("debugPreviousCanvasSaveCount")) : t1;
      }
      dart.fn(debugPreviousCanvasSaveCount$35get, T.VoidToint());
      function debugPreviousCanvasSaveCount$35set(debugPreviousCanvasSaveCount$35param) {
        return debugPreviousCanvasSaveCount = debugPreviousCanvasSaveCount$35param;
      }
      dart.fn(debugPreviousCanvasSaveCount$35set, T.intTodynamic());
      canvas.save();
      if (!dart.fn(() => {
        debugPreviousCanvasSaveCount$35set(canvas.getSaveCount());
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 564, 12, "() {\n      debugPreviousCanvasSaveCount = canvas.getSaveCount();\n      return true;\n    }()");
      if (!offset._equals(ui.Offset.zero)) {
        canvas.translate(offset.dx, offset.dy);
      }
      painter.paint(canvas, this.size);
      if (!dart.fn(() => {
        let debugNewCanvasSaveCount = canvas.getSaveCount();
        if (debugNewCanvasSaveCount > debugPreviousCanvasSaveCount$35get()) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + dart.str(painter) + " custom painter called canvas.save() or canvas.saveLayer() at least " + dart.str(debugNewCanvasSaveCount - debugPreviousCanvasSaveCount$35get()) + " more " + "time" + (debugNewCanvasSaveCount - debugPreviousCanvasSaveCount$35get() === 1 ? "" : "s") + " " + "than it called canvas.restore()."), new assertions.ErrorDescription.new("This leaves the canvas in an inconsistent state and will probably result in a broken display."), new assertions.ErrorHint.new("You must pair each call to save()/saveLayer() with a later matching call to restore().")])));
        }
        if (debugNewCanvasSaveCount < debugPreviousCanvasSaveCount$35get()) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + dart.str(painter) + " custom painter called canvas.restore() " + dart.str(debugPreviousCanvasSaveCount$35get() - debugNewCanvasSaveCount) + " more " + "time" + (debugPreviousCanvasSaveCount$35get() - debugNewCanvasSaveCount === 1 ? "" : "s") + " " + "than it called canvas.save() or canvas.saveLayer()."), new assertions.ErrorDescription.new("This leaves the canvas in an inconsistent state and will result in a broken display."), new assertions.ErrorHint.new("You should only call restore() if you first called save() or saveLayer().")])));
        }
        return debugNewCanvasSaveCount === debugPreviousCanvasSaveCount$35get();
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 572, 12, "() {\n      // This isn't perfect. For example, we can't catch the case of\n      // someone first restoring, then setting a transform or whatnot,\n      // then saving.\n      // If this becomes a real problem, we could add logic to the\n      // Canvas class to lock the canvas at a particular save count\n      // such that restore() fails if it would take the lock count\n      // below that number.\n      final int debugNewCanvasSaveCount = canvas.getSaveCount();\n      if (debugNewCanvasSaveCount > debugPreviousCanvasSaveCount) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'The $painter custom painter called canvas.save() or canvas.saveLayer() at least '\n            '${debugNewCanvasSaveCount - debugPreviousCanvasSaveCount} more '\n            'time${debugNewCanvasSaveCount - debugPreviousCanvasSaveCount == 1 ? '' : 's' } '\n            'than it called canvas.restore().',\n          ),\n          ErrorDescription('This leaves the canvas in an inconsistent state and will probably result in a broken display.'),\n          ErrorHint('You must pair each call to save()/saveLayer() with a later matching call to restore().'),\n        ]);\n      }\n      if (debugNewCanvasSaveCount < debugPreviousCanvasSaveCount) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'The $painter custom painter called canvas.restore() '\n            '${debugPreviousCanvasSaveCount - debugNewCanvasSaveCount} more '\n            'time${debugPreviousCanvasSaveCount - debugNewCanvasSaveCount == 1 ? '' : 's' } '\n            'than it called canvas.save() or canvas.saveLayer().',\n          ),\n          ErrorDescription('This leaves the canvas in an inconsistent state and will result in a broken display.'),\n          ErrorHint('You should only call restore() if you first called save() or saveLayer().'),\n        ]);\n      }\n      return debugNewCanvasSaveCount == debugPreviousCanvasSaveCount;\n    }()");
      canvas.restore();
    }
    paint(context, offset) {
      if (this[_painter] != null) {
        this[_paintWithPainter](context.canvas, offset, dart.nullCheck(this[_painter]));
        this[_setRasterCacheHints](context);
      }
      super.paint(context, offset);
      if (this[_foregroundPainter] != null) {
        this[_paintWithPainter](context.canvas, offset, dart.nullCheck(this[_foregroundPainter]));
        this[_setRasterCacheHints](context);
      }
    }
    [_setRasterCacheHints](context) {
      if (this.isComplex) {
        context.setIsComplexHint();
      }
      if (this.willChange) {
        context.setWillChangeHint();
      }
    }
    describeSemanticsConfiguration(config) {
      let t3, t3$;
      super.describeSemanticsConfiguration(config);
      this[_backgroundSemanticsBuilder] = (t3 = this.painter, t3 == null ? null : t3.semanticsBuilder);
      this[_foregroundSemanticsBuilder] = (t3$ = this.foregroundPainter, t3$ == null ? null : t3$.semanticsBuilder);
      config.isSemanticBoundary = this[_backgroundSemanticsBuilder] != null || this[_foregroundSemanticsBuilder] != null;
    }
    assembleSemanticsNode(node, config, children) {
      if (!dart.fn(() => {
        if (this.child == null && children[$isNotEmpty]) {
          dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not have a child widget but received a non-empty list of child SemanticsNode:\n" + children[$join]("\n"))])));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 658, 12, "() {\n      if (child == null && children.isNotEmpty) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            '$runtimeType does not have a child widget but received a non-empty list of child SemanticsNode:\\n'\n            '${children.join('\\n')}',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      let backgroundSemantics = this[_backgroundSemanticsBuilder] != null ? dart.nullCheck(this[_backgroundSemanticsBuilder])(this.size) : C[1] || CT.C1;
      this[_backgroundSemanticsNodes] = custom_paint.RenderCustomPaint._updateSemanticsChildren(this[_backgroundSemanticsNodes], backgroundSemantics);
      let foregroundSemantics = this[_foregroundSemanticsBuilder] != null ? dart.nullCheck(this[_foregroundSemanticsBuilder])(this.size) : C[1] || CT.C1;
      this[_foregroundSemanticsNodes] = custom_paint.RenderCustomPaint._updateSemanticsChildren(this[_foregroundSemanticsNodes], foregroundSemantics);
      let hasBackgroundSemantics = this[_backgroundSemanticsNodes] != null && dart.nullCheck(this[_backgroundSemanticsNodes])[$isNotEmpty];
      let hasForegroundSemantics = this[_foregroundSemanticsNodes] != null && dart.nullCheck(this[_foregroundSemanticsNodes])[$isNotEmpty];
      let finalChildren = (() => {
        let t3 = T.JSArrayOfSemanticsNode().of([]);
        if (hasBackgroundSemantics) t3[$addAll](dart.nullCheck(this[_backgroundSemanticsNodes]));
        t3[$addAll](children);
        if (hasForegroundSemantics) t3[$addAll](dart.nullCheck(this[_foregroundSemanticsNodes]));
        return t3;
      })();
      super.assembleSemanticsNode(node, config, finalChildren);
    }
    clearSemantics() {
      super.clearSemantics();
      this[_backgroundSemanticsNodes] = null;
      this[_foregroundSemanticsNodes] = null;
    }
    static _updateSemanticsChildren(oldSemantics, newChildSemantics) {
      let t4, t4$;
      oldSemantics = (t4 = oldSemantics, t4 == null ? C[2] || CT.C2 : t4);
      newChildSemantics = (t4$ = newChildSemantics, t4$ == null ? C[1] || CT.C1 : t4$);
      if (!dart.fn(() => {
        let keys = new (T.LinkedMapOfKey$int()).new();
        let information = T.JSArrayOfDiagnosticsNode().of([]);
        for (let i = 0; i < dart.nullCheck(newChildSemantics)[$length]; i = i + 1) {
          let child = newChildSemantics[$_get](i);
          if (child.key != null) {
            if (keys[$containsKey](child.key)) {
              information[$add](new assertions.ErrorDescription.new("- duplicate key " + dart.str(child.key) + " found at position " + dart.str(i)));
            }
            keys[$_set](dart.nullCheck(child.key), i);
          }
        }
        if (information[$isNotEmpty]) {
          information[$insert](0, new assertions.ErrorSummary.new("Failed to update the list of CustomPainterSemantics:"));
          dart.throw(new assertions.FlutterError.fromParts(information));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 726, 12, "() {\n      final Map<Key, int> keys = HashMap<Key, int>();\n      final List<DiagnosticsNode> information = <DiagnosticsNode>[];\n      for (int i = 0; i < newChildSemantics!.length; i += 1) {\n        final CustomPainterSemantics child = newChildSemantics[i];\n        if (child.key != null) {\n          if (keys.containsKey(child.key)) {\n            information.add(ErrorDescription('- duplicate key ${child.key} found at position $i'));\n          }\n          keys[child.key!] = i;\n        }\n      }\n\n      if (information.isNotEmpty) {\n        information.insert(0, ErrorSummary('Failed to update the list of CustomPainterSemantics:'));\n        throw FlutterError.fromParts(information);\n      }\n\n      return true;\n    }()");
      let newChildrenTop = 0;
      let oldChildrenTop = 0;
      let newChildrenBottom = newChildSemantics[$length] - 1;
      let oldChildrenBottom = oldSemantics[$length] - 1;
      let newChildren = T.ListOfSemanticsNodeN().filled(newChildSemantics[$length], null);
      while (oldChildrenTop <= oldChildrenBottom && newChildrenTop <= newChildrenBottom) {
        let oldChild = oldSemantics[$_get](oldChildrenTop);
        let newSemantics = newChildSemantics[$_get](newChildrenTop);
        if (!custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics)) {
          break;
        }
        let newChild = custom_paint.RenderCustomPaint._updateSemanticsChild(oldChild, newSemantics);
        newChildren[$_set](newChildrenTop, newChild);
        newChildrenTop = newChildrenTop + 1;
        oldChildrenTop = oldChildrenTop + 1;
      }
      while (oldChildrenTop <= oldChildrenBottom && newChildrenTop <= newChildrenBottom) {
        let oldChild = oldSemantics[$_get](oldChildrenBottom);
        let newChild = newChildSemantics[$_get](newChildrenBottom);
        if (!custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newChild)) {
          break;
        }
        oldChildrenBottom = oldChildrenBottom - 1;
        newChildrenBottom = newChildrenBottom - 1;
      }
      let haveOldChildren = oldChildrenTop <= oldChildrenBottom;
      let oldKeyedChildren = null;
      function oldKeyedChildren$35get() {
        let t5;
        t5 = oldKeyedChildren;
        return t5 == null ? dart.throw(new _internal.LateError.localNI("oldKeyedChildren")) : t5;
      }
      dart.fn(oldKeyedChildren$35get, T.VoidToMapOfKey$SemanticsNode());
      function oldKeyedChildren$35set(oldKeyedChildren$35param) {
        if (oldKeyedChildren == null)
          return oldKeyedChildren = oldKeyedChildren$35param;
        else
          dart.throw(new _internal.LateError.localAI("oldKeyedChildren"));
      }
      dart.fn(oldKeyedChildren$35set, T.MapOfKey$SemanticsNodeTodynamic());
      if (haveOldChildren) {
        oldKeyedChildren$35set(new (T.LinkedMapOfKey$SemanticsNode()).new());
        while (oldChildrenTop <= oldChildrenBottom) {
          let oldChild = oldSemantics[$_get](oldChildrenTop);
          if (oldChild.key != null) {
            oldKeyedChildren$35get()[$_set](dart.nullCheck(oldChild.key), oldChild);
          }
          oldChildrenTop = oldChildrenTop + 1;
        }
      }
      while (newChildrenTop <= newChildrenBottom) {
        let oldChild = null;
        let newSemantics = newChildSemantics[$_get](newChildrenTop);
        if (haveOldChildren) {
          let key = newSemantics.key;
          if (key != null) {
            oldChild = oldKeyedChildren$35get()[$_get](key);
            if (oldChild != null) {
              if (custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics)) {
                oldKeyedChildren$35get()[$remove](key);
              } else {
                oldChild = null;
              }
            }
          }
        }
        if (!(oldChild == null || custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics))) dart.assertFailed(null, I[1], 812, 14, "oldChild == null || _canUpdateSemanticsChild(oldChild, newSemantics)");
        let newChild = custom_paint.RenderCustomPaint._updateSemanticsChild(oldChild, newSemantics);
        if (!(dart.equals(oldChild, newChild) || oldChild == null)) dart.assertFailed(null, I[1], 814, 14, "oldChild == newChild || oldChild == null");
        newChildren[$_set](newChildrenTop, newChild);
        newChildrenTop = newChildrenTop + 1;
      }
      if (!(oldChildrenTop === oldChildrenBottom + 1)) dart.assertFailed(null, I[1], 820, 12, "oldChildrenTop == oldChildrenBottom + 1");
      if (!(newChildrenTop === newChildrenBottom + 1)) dart.assertFailed(null, I[1], 821, 12, "newChildrenTop == newChildrenBottom + 1");
      if (!(newChildSemantics[$length] - newChildrenTop === oldSemantics[$length] - oldChildrenTop)) dart.assertFailed(null, I[1], 822, 12, "newChildSemantics.length - newChildrenTop == oldSemantics.length - oldChildrenTop");
      newChildrenBottom = newChildSemantics[$length] - 1;
      oldChildrenBottom = oldSemantics[$length] - 1;
      while (oldChildrenTop <= oldChildrenBottom && newChildrenTop <= newChildrenBottom) {
        let oldChild = oldSemantics[$_get](oldChildrenTop);
        let newSemantics = newChildSemantics[$_get](newChildrenTop);
        if (!custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics)) dart.assertFailed(null, I[1], 830, 14, "_canUpdateSemanticsChild(oldChild, newSemantics)");
        let newChild = custom_paint.RenderCustomPaint._updateSemanticsChild(oldChild, newSemantics);
        if (!oldChild[$_equals](newChild)) dart.assertFailed(null, I[1], 832, 14, "oldChild == newChild");
        newChildren[$_set](newChildrenTop, newChild);
        newChildrenTop = newChildrenTop + 1;
        oldChildrenTop = oldChildrenTop + 1;
      }
      if (!dart.fn(() => {
        for (let node of newChildren) {
          if (!(node != null)) dart.assertFailed(null, I[1], 840, 16, "node != null");
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 838, 12, "() {\n      for (final SemanticsNode? node in newChildren) {\n        assert(node != null);\n      }\n      return true;\n    }()");
      return newChildren[$cast](semantics.SemanticsNode);
    }
    static _canUpdateSemanticsChild(oldChild, newSemantics) {
      return dart.equals(oldChild.key, newSemantics.key);
    }
    static _updateSemanticsChild(oldChild, newSemantics) {
      let t7, t7$;
      if (!(oldChild == null || custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics))) dart.assertFailed(null, I[1], 861, 12, "oldChild == null || _canUpdateSemanticsChild(oldChild, newSemantics)");
      let newChild = (t7 = oldChild, t7 == null ? new semantics.SemanticsNode.new({key: newSemantics.key}) : t7);
      let properties = newSemantics.properties;
      let config = new semantics.SemanticsConfiguration.new();
      if (properties.sortKey != null) {
        config.sortKey = properties.sortKey;
      }
      if (properties.checked != null) {
        config.isChecked = properties.checked;
      }
      if (properties.selected != null) {
        config.isSelected = dart.nullCheck(properties.selected);
      }
      if (properties.button != null) {
        config.isButton = dart.nullCheck(properties.button);
      }
      if (properties.link != null) {
        config.isLink = dart.nullCheck(properties.link);
      }
      if (properties.textField != null) {
        config.isTextField = dart.nullCheck(properties.textField);
      }
      if (properties.slider != null) {
        config.isSlider = dart.nullCheck(properties.slider);
      }
      if (properties.keyboardKey != null) {
        config.isKeyboardKey = dart.nullCheck(properties.keyboardKey);
      }
      if (properties.readOnly != null) {
        config.isReadOnly = dart.nullCheck(properties.readOnly);
      }
      if (properties.focusable != null) {
        config.isFocusable = dart.nullCheck(properties.focusable);
      }
      if (properties.focused != null) {
        config.isFocused = dart.nullCheck(properties.focused);
      }
      if (properties.enabled != null) {
        config.isEnabled = properties.enabled;
      }
      if (properties.inMutuallyExclusiveGroup != null) {
        config.isInMutuallyExclusiveGroup = dart.nullCheck(properties.inMutuallyExclusiveGroup);
      }
      if (properties.obscured != null) {
        config.isObscured = dart.nullCheck(properties.obscured);
      }
      if (properties.multiline != null) {
        config.isMultiline = dart.nullCheck(properties.multiline);
      }
      if (properties.hidden != null) {
        config.isHidden = dart.nullCheck(properties.hidden);
      }
      if (properties.header != null) {
        config.isHeader = dart.nullCheck(properties.header);
      }
      if (properties.scopesRoute != null) {
        config.scopesRoute = dart.nullCheck(properties.scopesRoute);
      }
      if (properties.namesRoute != null) {
        config.namesRoute = dart.nullCheck(properties.namesRoute);
      }
      if (properties.liveRegion != null) {
        config.liveRegion = dart.nullCheck(properties.liveRegion);
      }
      if (properties.maxValueLength != null) {
        config.maxValueLength = properties.maxValueLength;
      }
      if (properties.currentValueLength != null) {
        config.currentValueLength = properties.currentValueLength;
      }
      if (properties.toggled != null) {
        config.isToggled = properties.toggled;
      }
      if (properties.image != null) {
        config.isImage = dart.nullCheck(properties.image);
      }
      if (properties.label != null) {
        config.label = dart.nullCheck(properties.label);
      }
      if (properties.value != null) {
        config.value = dart.nullCheck(properties.value);
      }
      if (properties.increasedValue != null) {
        config.increasedValue = dart.nullCheck(properties.increasedValue);
      }
      if (properties.decreasedValue != null) {
        config.decreasedValue = dart.nullCheck(properties.decreasedValue);
      }
      if (properties.hint != null) {
        config.hint = dart.nullCheck(properties.hint);
      }
      if (properties.textDirection != null) {
        config.textDirection = properties.textDirection;
      }
      if (properties.onTap != null) {
        config.onTap = properties.onTap;
      }
      if (properties.onLongPress != null) {
        config.onLongPress = properties.onLongPress;
      }
      if (properties.onScrollLeft != null) {
        config.onScrollLeft = properties.onScrollLeft;
      }
      if (properties.onScrollRight != null) {
        config.onScrollRight = properties.onScrollRight;
      }
      if (properties.onScrollUp != null) {
        config.onScrollUp = properties.onScrollUp;
      }
      if (properties.onScrollDown != null) {
        config.onScrollDown = properties.onScrollDown;
      }
      if (properties.onIncrease != null) {
        config.onIncrease = properties.onIncrease;
      }
      if (properties.onDecrease != null) {
        config.onDecrease = properties.onDecrease;
      }
      if (properties.onCopy != null) {
        config.onCopy = properties.onCopy;
      }
      if (properties.onCut != null) {
        config.onCut = properties.onCut;
      }
      if (properties.onPaste != null) {
        config.onPaste = properties.onPaste;
      }
      if (properties.onMoveCursorForwardByCharacter != null) {
        config.onMoveCursorForwardByCharacter = properties.onMoveCursorForwardByCharacter;
      }
      if (properties.onMoveCursorBackwardByCharacter != null) {
        config.onMoveCursorBackwardByCharacter = properties.onMoveCursorBackwardByCharacter;
      }
      if (properties.onMoveCursorForwardByWord != null) {
        config.onMoveCursorForwardByWord = properties.onMoveCursorForwardByWord;
      }
      if (properties.onMoveCursorBackwardByWord != null) {
        config.onMoveCursorBackwardByWord = properties.onMoveCursorBackwardByWord;
      }
      if (properties.onSetSelection != null) {
        config.onSetSelection = properties.onSetSelection;
      }
      if (properties.onSetText != null) {
        config.onSetText = properties.onSetText;
      }
      if (properties.onDidGainAccessibilityFocus != null) {
        config.onDidGainAccessibilityFocus = properties.onDidGainAccessibilityFocus;
      }
      if (properties.onDidLoseAccessibilityFocus != null) {
        config.onDidLoseAccessibilityFocus = properties.onDidLoseAccessibilityFocus;
      }
      if (properties.onDismiss != null) {
        config.onDismiss = properties.onDismiss;
      }
      newChild.updateWith({config: config, childrenInInversePaintOrder: C[2] || CT.C2});
      t7$ = newChild;
      (() => {
        t7$.rect = newSemantics.rect;
        t7$.transform = newSemantics.transform;
        t7$.tags = newSemantics.tags;
        return t7$;
      })();
      return newChild;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.MessageProperty.new("painter", dart.str(this.painter)));
      properties.add(new diagnostics.MessageProperty.new("foregroundPainter", dart.str(this.foregroundPainter), {level: this.foregroundPainter != null ? diagnostics.DiagnosticLevel.info : diagnostics.DiagnosticLevel.fine}));
      properties.add(new (T.DiagnosticsPropertyOfSize()).new("preferredSize", this.preferredSize, {defaultValue: ui.Size.zero}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("isComplex", this.isComplex, {defaultValue: false}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("willChange", this.willChange, {defaultValue: false}));
    }
  };
  (custom_paint.RenderCustomPaint.new = function(opts) {
    let painter = opts && 'painter' in opts ? opts.painter : null;
    let foregroundPainter = opts && 'foregroundPainter' in opts ? opts.foregroundPainter : null;
    let preferredSize = opts && 'preferredSize' in opts ? opts.preferredSize : C[0] || CT.C0;
    let isComplex = opts && 'isComplex' in opts ? opts.isComplex : false;
    let willChange = opts && 'willChange' in opts ? opts.willChange : false;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_backgroundSemanticsBuilder] = null;
    this[_foregroundSemanticsBuilder] = null;
    this[_backgroundSemanticsNodes] = null;
    this[_foregroundSemanticsNodes] = null;
    this[isComplex$] = isComplex;
    this[willChange$] = willChange;
    if (!(preferredSize !== null)) dart.assertFailed(null, I[1], 374, 15, "preferredSize != null");
    this[_painter] = painter;
    this[_foregroundPainter] = foregroundPainter;
    this[_preferredSize] = preferredSize;
    custom_paint.RenderCustomPaint.__proto__.new.call(this, child);
    ;
  }).prototype = custom_paint.RenderCustomPaint.prototype;
  dart.addTypeTests(custom_paint.RenderCustomPaint);
  dart.addTypeCaches(custom_paint.RenderCustomPaint);
  dart.setMethodSignature(custom_paint.RenderCustomPaint, () => ({
    __proto__: dart.getMethods(custom_paint.RenderCustomPaint.__proto__),
    [_didUpdatePainter]: dart.fnType(dart.void, [dart.nullable(custom_paint.CustomPainter), dart.nullable(custom_paint.CustomPainter)]),
    [_paintWithPainter]: dart.fnType(dart.void, [ui.Canvas, ui.Offset, custom_paint.CustomPainter]),
    [_setRasterCacheHints]: dart.fnType(dart.void, [object.PaintingContext])
  }));
  dart.setStaticMethodSignature(custom_paint.RenderCustomPaint, () => ['_updateSemanticsChildren', '_canUpdateSemanticsChild', '_updateSemanticsChild']);
  dart.setGetterSignature(custom_paint.RenderCustomPaint, () => ({
    __proto__: dart.getGetters(custom_paint.RenderCustomPaint.__proto__),
    painter: dart.nullable(custom_paint.CustomPainter),
    foregroundPainter: dart.nullable(custom_paint.CustomPainter),
    preferredSize: ui.Size
  }));
  dart.setSetterSignature(custom_paint.RenderCustomPaint, () => ({
    __proto__: dart.getSetters(custom_paint.RenderCustomPaint.__proto__),
    painter: dart.nullable(custom_paint.CustomPainter),
    foregroundPainter: dart.nullable(custom_paint.CustomPainter),
    preferredSize: ui.Size
  }));
  dart.setLibraryUri(custom_paint.RenderCustomPaint, I[0]);
  dart.setFieldSignature(custom_paint.RenderCustomPaint, () => ({
    __proto__: dart.getFields(custom_paint.RenderCustomPaint.__proto__),
    [_painter]: dart.fieldType(dart.nullable(custom_paint.CustomPainter)),
    [_foregroundPainter]: dart.fieldType(dart.nullable(custom_paint.CustomPainter)),
    [_preferredSize]: dart.fieldType(ui.Size),
    isComplex: dart.fieldType(core.bool),
    willChange: dart.fieldType(core.bool),
    [_backgroundSemanticsBuilder]: dart.fieldType(dart.nullable(dart.fnType(core.List$(custom_paint.CustomPainterSemantics), [ui.Size]))),
    [_foregroundSemanticsBuilder]: dart.fieldType(dart.nullable(dart.fnType(core.List$(custom_paint.CustomPainterSemantics), [ui.Size]))),
    [_backgroundSemanticsNodes]: dart.fieldType(dart.nullable(core.List$(semantics.SemanticsNode))),
    [_foregroundSemanticsNodes]: dart.fieldType(dart.nullable(core.List$(semantics.SemanticsNode)))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/custom_paint.dart", {
    "package:flutter/src/rendering/custom_paint.dart": custom_paint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_paint.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/custom_paint.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__custom_paint: custom_paint
  };
}));

//# sourceMappingURL=custom_paint.dart.lib.js.map
